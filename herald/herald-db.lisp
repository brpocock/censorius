(in-package :herald-db)

;;; compile-time constants
(defconstant +compile-time-offset+ 3639900000)

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defvar +compile-time+ (- (get-universal-time) +compile-time-offset+)))

;;; Load the current configuration
(eval-when (:compile-toplevel :load-toplevel :execute)
  (load (make-pathname :name "herald-mysql"
                       :defaults (user-homedir-pathname))))

(defvar *db* :disconnected)

(defvar *arc* :disconnected)

(defvar *select-cache* (make-hash-table :test #'equal))

(defmacro with-sql (&body body)
  `(dbi:with-connection (*db* :mysql ,@herald-db-config:+params+)
     (dbi:with-transaction *db*
       ,@body)))

(defmacro with-archive-sql (&body body)
  `(dbi:with-connection (*arc* :mysql ,@(remove-from-plist herald-db-config:+params+ :database-name)
                               :database-name "fpg_archive_tegadmin")
     (dbi:with-transaction *arc*
       ,@body)))

(defun invalidate-db-cache ()
  (clrhash *select-cache*))

(defun db-filter-execution (query args)
  (map 'list
       (lambda (row) (mapplist (key value) row
                       (list (keyword* key) value)))
       (dbi:fetch-all (apply #'dbi:execute (dbi:prepare *db* query) args))))

(defun archive-filter-execution (query args)
  (map 'list
       (lambda (row) (mapplist (key value) row
                       (list (keyword* key) value)))
       (dbi:fetch-all (apply #'dbi:execute (dbi:prepare *arc* query) args))))

(defun archive-query (query &rest raw-args)
  (let ((args (mapcar (lambda (arg)
                        (cond ((member arg '(:null :true :false)) arg)
                              ((null arg) :null)
                              ((eql arg t) :true)
                              ((symbolp arg) (string-downcase arg))
                              (t arg)))
                      raw-args)))
    (handler-case
        (progn (format *error-output* "~& [ARC] ~s ~s" query args)
               (archive-filter-execution query args))
      (dbi.error:<dbi-database-error> (c)
        (herald-fcgi::whine "~2%{{{ ERROR in SQL archive query }}}~%~a~%~s~%~s~2%~s ~a"
                            query raw-args args c c)
        (signal c)))))

(defun db-query (query &rest raw-args)
  (let ((args (mapcar (lambda (arg)
                        (cond ((member arg '(:null :true :false)) arg)
                              ((null arg) :null)
                              ((eql arg t) :true)
                              ((symbolp arg) (string-downcase arg))
                              (t arg)))
                      raw-args)))
    (handler-case
        (cond ((or (string-equal "select " query :end2 7)
                   (string-equal "describe " query :end2 9)
                   (string-equal "show " query :end2 5))
               
               (multiple-value-bind (cached foundp)
                   (gethash (list query args) *select-cache*)
                 (when foundp
                   (format *error-output* "~& [SQL]* ~s ~s" query args)
                   (return-from db-query cached)))
               
               (format *error-output* "~& [SQL] ~s ~s" query args)
               (let ((found (db-filter-execution query args)))
                 (setf (gethash (list query args) *select-cache*) found)
                 found))
              
              (t (format *error-output* "~& [SQL] ~s ~s" query args)
                 (invalidate-db-cache)
                 (db-filter-execution query args)))
      (dbi.error:<dbi-database-error> (c)
        (herald-fcgi::whine "~2%{{{ ERROR in SQL engine }}}~%~a~%~s~%~s~2%~s ~a"
                            query raw-args args c c)
        (signal c)))))


(in-package :herald-db)

(defun simple-record-volatility-p (symbol)
  (member symbol '(:session :query :volatile)))

(deftype simple-record-volatility ()
  '(and keyword (satisfies #'simple-record-volatility-p)))

(defclass simple-record-table ()
  ((db-table :type 'string :reader simple-record-db-table :initarg :db-table)
   (primary-key-columns :type 'list :reader simple-record-primary-key-columns :initarg :primary-key-columns)
   (trailer-tables :type 'list :reader simple-record-trailer-tables :initarg :trailer-tables)
   (parent-table :type string :reader simple-record-parent-table :initarg :parent-table)
   (start-column :type 'string :reader simple-record-effective-start-column :initarg :start-column)
   (end-column :type 'string :reader simple-record-effective-end-column :initarg :end-column)
   (volatility :type 'record-volatility :reader simple-record-volatility :initarg :volatility)
   (logical-deletion-column :type 'string :reader simple-record-logical-deletion-column :initarg :logical-deletion-column)
   (table-description :type 'list :reader simple-record-table-description)))

(defvar *simple-record-tables* (make-hash-table :test #'equalp))

(define-condition duplicate-table-definition (error)
  ((initargs :initarg :initargs :reader duplicate-table-definition-initargs)
   (existing-object :initarg :existing-object :reader duplicate-table-definition-existing-object)))

(defmethod make-instance :before ((class (eql 'simple-record-table)) &rest initargs)
  (destructuring-bind (&key db-table &allow-other-keys) initargs
    (multiple-value-bind (found foundp) (gethash db-table *simple-record-tables*)
      (when foundp
        (error 'duplicate-table-definition :initargs initargs :existing-object found)))))

(defmethod simple-record-table-columns ((table simple-record-table))
  (mapcar (rcurry #'getf :field) (simple-record-table-description table)))

(defun simple-record-table-has-column (object column)
  (member column (simple-record-table-columns object) :test #'string=))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defclass simple-record ()
    ((table :type 'simple-record-table :reader record-table :initarg :table)
     (plist :type 'list :reader record-plist :initarg :plist)
     (dirtyp :type 'boolean :reader record-dirty-p :initform t :initarg :dirtyp)))
  
  (defun table-exists-p (table)
    (ignore-errors
      (plusp (length (db-query (format nil "describe `~a`" table))))))
  
  (defun singular (name )
    (when (search "people" name :test #'char-equal)
      (setf name (regex-replace-pairs '(("PEOPLE" . "PERSON")
                                        ("people" . "person")) name)))
    (when (string-ends (string name) "SSES" :test #'string=)
      (setf name (concatenate 'string (subseq name 0 (- (length name) 4)) "SS")))
    (when (string-ends (string name) "sses" :test #'string=)
      (setf name (concatenate 'string (subseq name 0 (- (length name) 4)) "ss")))
    (when (string-ends (string name) "IES" :test #'string=)
      (setf name (concatenate 'string (subseq name 0 (- (length name) 3)) #(#\Y))))
    (when (string-ends (string name) "ies" :test #'string=)
      (setf name (concatenate 'string (subseq name 0 (- (length name) 3)) #(#\y))))
    (when (char-equal #\s (last-elt (string name)))
      (setf name (subseq name 0 (1- (length name)))))
    name)
  
  (assert (equal (singular "people-in-places") "person-in-place"))
  (assert (equal (singular "countries") "country"))
  (assert (equal (singular "monkeys") "monkey"))
  (assert (equal (singular "addresses") "address"))
  
  (defun primary-key-columns-for-table (table)
    (mapcar (rcurry #'getf :column_name)
            (db-query "select * from information_schema.key_column_usage 
where constraint_schema=? and table_name=? and constraint_name='PRIMARY' order by ordinal_position"
                      (getf herald-db-config:+params+ :database-name)
                      table)))
  
  (defun tables-with-distinct-references (references)
    (remove-if-not (lambda (ref-table)
                     (let ((table-pri-keys (primary-key-columns-for-table ref-table)))
                       (every (rcurry #'member table-pri-keys)
                              (remove-if-not (compose (curry #'equal ref-table)
                                                      (rcurry #'getf :table_name))
                                             references))))
                   (remove-duplicates (mapcar (rcurry #'getf :table_name)
                                              references)
                                      :test #'string-equal)))
  
  (defun tables-slaved-to-table (table)
    (tables-with-distinct-references 
     (db-query "select * from information_schema.referential_constraints 
where constraint_schema=? and referenced_table_name=?"
               (getf herald-db-config:+params+ :database-name)
               table)))
  
  (defun tables-parented-to-table (table)
    (tables-with-distinct-references 
     (db-query "select * from information_schema.referential_constraints 
where constraint_schema=? and table_name=?"
               (getf herald-db-config:+params+ :database-name)
               table)))
  
  (defmethod initialize-instance :after ((object simple-record-table)
                                         &key db-table 
                                         (primary-key-columns (primary-key-columns-for-table db-table)) 
                                         (trailer-tables (tables-slaved-to-table db-table))
                                         (parent-table (tables-parented-to-table db-table))
                                         start-column
                                         end-column
                                         (volatility :session)
                                         logical-deletion-column)
             (setf (slot-value object 'table-description) 
                   (mapcar (lambda (row) 
                             (mapplist (key value) row
                               (list (make-keyword (string-upcase key)) value)))
                           (db-query (format nil "describe `~a`" db-table))))
             (assert (every (curry #'simple-record-table-has-column object) primary-key-columns)
                     (primary-key-columns)
                     "~@(~r~) of primary key columns defined for ~a ~0@*~:[~;does~:;do~] not exist."
                     (count-if-not (curry #'simple-record-table-has-column object) primary-key-columns)
                     db-table)
             (loop for column in '(start-column end-column logical-deletion-column)
                for column-name in (list start-column end-column logical-deletion-column)
                when column-name
                do (assert (simple-record-table-has-column object column-name)
                           ()
                           "The ~a given for ~a is ~a, which is not a column on that table"
                           column db-table column-name))
             (let ((missing (remove-if-not #'table-exists-p
                                           (remove-if #'null
                                                      (append (list parent-table) trailer-tables)))))
               (unless (null missing) 
                 (warn
                  "All parent and trailer tables for ~a must exist; ~r missing table~:p: ~{~a~^, ~}"
                  db-table (length missing) missing)))
             (assert (simple-record-volatility-p volatility) (volatility)
                     "The volatility of the table must be valid (~a is not)" volatility)
             (let ((function-name (format-symbol :herald-db "FIND-~:@(~a~)" (singular db-table)))
                   (record-class (intern (string-upcase (singular db-table))))
                   (primary-keys (mapcar (compose #'intern #'string-upcase) primary-key-columns)))
               (eval `(defclass ,record-class (simple-record) ()))
               (export record-class)
               (eval `(defmethod ,function-name ,primary-keys
                        (find-simple-record ,object ,@primary-keys)))
               (export function-name)
               (let ((columns (mapcar (rcurry #'getf :field) (db-query (format nil "describe `~a`" db-table)))))
                 (dolist (column-name columns)
                   (let ((accessor-name (format-symbol :herald-db "~:@(~a~)-~:@(~a~)" 
                                                       (singular db-table) 
                                                       (if (and (string-equal column-name (singular db-table))
                                                                (not (member "id" columns :test #'string-equal)))
                                                           "id"
                                                           column-name))))
                     (eval `(defmethod ,accessor-name ((instance ,record-class))
                              (getf (instance) ,(keyword* column-name))))
                     (export accessor-name)
                     (unless (member column-name primary-key-columns :test #'string-equal)
                       (let ((unkey-columns (remove-if (rcurry #'member primary-key-columns :test #'string-equal)
                                                       columns)))
                         (eval `(defmethod (setf ,accessor-name) (new-value (instance ,record-class))
                                  (db-query ,(format nil "update `~a` set ~{`~a`=?~^, ~} where ~{`~a`=?~^ and ~}"
                                                     db-table
                                                     unkey-columns
                                                     primary-key-columns)
                                            (mapcar (curry #'getf instance) ,(mapcar #'keyword* unkey-columns))
                                            (mapcar (curry #'getf instance) ,(mapcar #'keyword* primary-key-columns)))
                                  (setf (getf instance ,(keyword* column-name)) new-value)))))))))
             (setf (gethash db-table *simple-record-tables*) object)))



(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun all-tables ()
    (mapcar #'second (db-query "show tables")))
  
  (with-sql
    (dolist (table (all-tables))
      (make-instance 'simple-record-table :db-table table))))

(defmethod print-object ((table simple-record-table) s)
  (format s "#<SIMPLE-RECORD-TABLE for ~s>" 
          (simple-record-db-table table)))

(defclass simple-record ()
  ((table :type simple-record-table :reader record-table :initarg :table)
   (primary-keys :type 'list :reader primary-keys :initarg :primary-keys)
   (plist :type 'list :reader record-plist)))


(eval-when (:compile-toplevel :load-toplevel :execute)
  (with-sql
    (let ((schema (getf herald-db-config::+params+ :database-name)))
      (labels
          ((table->class (source-table)
             (intern (string-upcase (singular source-table))))
           
           (key->plist (part)
             (destructuring-bind (&key table_name column_name  
                                       referenced_table_name referenced_column_name 
                                       constraint_name
                                       &allow-other-keys) part
               (list :source-table table_name
                     :source-column column_name  
                     :dest-table referenced_table_name
                     :dest-column referenced_column_name
                     :constraint constraint_name)))
           
           (accessor-function-symbol (source-table source-column)
             (format-symbol *package* "~:@(~a-~a~)" (singular source-table) source-column))
           
           (link-between-records-symbol (source-table dest-table source-column dest-columns keys)
             (format-symbol *package* "~@:(~a->~{~a~@[-~{~a~^+~}~]~}~)" 
                            (singular source-table) 
                            (if (= 1 (length keys))
                                (list (singular dest-table) nil)
                                (remove-duplicates (list (first dest-columns)
                                                         (if (rest dest-columns)
                                                             (append (rest dest-columns) (list (singular dest-table)))
                                                             (rest dest-columns)))
                                                   :test #'equal))))
           
           (all-foreign-keys ()
             (db-query "select * from information_schema.key_column_usage 
where constraint_schema=? and referenced_table_schema=?
order by table_name, constraint_name, ordinal_position"
                       schema schema))
           
           (all-constraints-grouped ()
             (group-by (all-foreign-keys)
                       :key (lambda (row) 
                              (list (getf row :table_name)
                                    (getf row :constraint_name))) 
                       :test #'equalp))
           
           (write-find-dest-by-primary-keys (dest-table keys)
             (format t "~&finding dest ~a record by primary keys from ~%~s" (singular dest-table) keys)
             (cons (format-symbol *package* "FIND-~@:(~a~)" (singular dest-table))
                   (mapcar (lambda&keys (&key source-table source-column &allow-other-keys)
                             (list (accessor-function-symbol source-table source-column)
                                   (table->class source-table)))
                           keys)))
           
           (write-find-record-by-keywords (dest-table keys)
             (cons
              (format-symbol *package* "FIND-~@:(~a~)-BY" dest-table)
              (mapcar (lambda&keys (&key source-table source-column dest-column &allow-other-keys)
                        `(,(make-keyword (string-upcase dest-column))
                           (,(format-symbol *package* "~:@(~a-~a~)" (singular source-table) source-column)
                             ,(table->class source-table))))
                      keys)))
           
           (constraint-joins-two-tables-p (source-table dest-table keys)
             (every (lambda (key) 
                      (and (equal source-table (getf key :source-table))
                           (equal dest-table (getf key :dest-table)))) 
                    keys)))
        
        (dolist (constraint (all-constraints-grouped))
          (destructuring-bind (name &rest parts) constraint
            #+ swank  (format t "~2% constraint=~s (~r part~:p)" name (length parts))
            (let ((keys (mapcar #'key->plist parts)))
              #+swank (format t "~%keys: ~{~%~5t ~s~}" keys)
              (destructuring-bind (&key source-table source-column dest-table &allow-other-keys) (first keys)
                (let ((dest-columns (mapcar (rcurry #'getf :dest-column) keys)))
                  (if (constraint-joins-two-tables-p source-table dest-table keys)
                      (let ((link-name (link-between-records-symbol source-table dest-table source-column dest-columns keys)))
                        #+swank (format t "~& Link ~a from ~a to ~a using ~r key~:p (dest column~:p: ~{~a~^, ~})" 
                                        link-name source-table dest-table (length keys) dest-columns)
                        (eval `(defmethod ,link-name ((,(table->class source-table) 
                                                        ,(table->class source-table)))
                                 ,(cond ((equalp dest-columns (primary-key-columns-for-table dest-table))
                                         #+swank (format t " — using primary keys on ~a, so FIND-~:@(~a~)" dest-table (singular dest-table))
                                         (write-find-dest-by-primary-keys dest-table keys))
                                        (t (warn "key is not primary? ~a" key-name)
                                           #+swank (format t " — using non-primary keys on ~a, so FIND…BY is used" dest-table)
                                           (write-find-record-by-keywords dest-table keys))))))
                      (warn "~% Complex keys, skipping ~s" keys)))))))))))



(defmethod print-object ((object simple-record) stream)
  (let ((table (record-table object))
        (plist (record-plist object)))
    (format stream "#.(FIND-~@:(~a~) ~{~s~^ ~})"
            (singular (simple-record-db-table table)) 
            (mapcar (compose (curry #'getf plist) #'make-keyword #'string-upcase) (simple-record-primary-key-columns table)))))

(defvar *simple-record-query-cache* (make-hash-table :test #'equalp))

(defun find-cached-records (table-class column-plist)
  (let ((sorted-plist (alist-plist (sort (plist-alist column-plist)
                                         #'string< :key #'car))))
    (ecase (simple-record-volatility table-class)
      ((:session :query) (gethash (list table-class sorted-plist) *simple-record-query-cache*))
      (:volatile (values nil nil)))))

(defun cache-found-records (set table-class column-plist)
  (let ((sorted-plist (alist-plist (sort (plist-alist column-plist)
                                         #'string< :key #'car))))
    (ecase (simple-record-volatility table-class)
      ((:session :query) (setf (gethash (list table-class sorted-plist) *simple-record-query-cache*) set)
       (values set t))
      (:volatile (values nil nil)))))

(defun find-simple-records (table-class column-plist)
  (multiple-value-bind (found foundp)
      (find-cached-records table-class column-plist)
    (if foundp
        found
        (let ((found (mapcar (curry #'make-instance 'simple-record :table table-class :dirtyp nil :plist)
                             (db-query (format nil "select * from `~a` where ~{`~a`=?~}" 
                                               (simple-record-db-table table-class) (plist-keys column-plist))
                                       (plist-values column-plist)))))
          (cache-found-records found table-class column-plist) 
          found))))

(defun find-simple-record (table-class &rest primary-key-values)
  (let ((results (find-simple-records table-class
                                      (loop 
                                         for key in (simple-record-primary-key-columns table-class)
                                         for value in primary-key-values
                                         appending (list key value)))))
    (assert (member (length results) '(0 1)) (table-class)
            "The supposed primary key set of table ~a (~{~a~^, ~}) yielded ~r result~:p when confronted by the values (~{~a~^, ~})"
            (simple-record-db-table table-class) (simple-record-primary-key-columns table-class) primary-key-values)
    (first results)))


(provide :herald-db)
