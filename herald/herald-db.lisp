(in-package :herald-db)

;;; compile-time constants
(defconstant +compile-time-offset+ 3639900000)

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defvar +compile-time+ (- (get-universal-time) +compile-time-offset+)))

(defvar *db* :disconnected)

(defvar *arc* :disconnected)

(defvar *select-cache* (make-hash-table :test #'equal))

;; Temporary definition until HERALD-FCGI loads
(defun herald-fcgi::whine (message-format &rest stuff)
  (error "Early WHINE: ~?" message-format stuff))


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



(defun simple-record-volatility-p (symbol)
  (member symbol '(:session :query :volatile)))

(deftype simple-record-volatility ()
  '(and keyword (satisfies #'simple-record-volatility-p)))

(defclass simple-record-table ()
  ((db-table :type 'string :reader simple-record-db-table :initarg :db-table)
   (primary-key-columns :type 'list :reader simple-record-primary-key-columns :initarg :primary-key-columns)
   (trailer-tables :type 'list :reader simple-record-trailer-tables :initarg :trailer-tables)
   (parent-table :type '(or null string) :reader simple-record-parent-table :initarg :parent-table)
   (start-column :type '(or null string) :reader simple-record-effective-start-column :initarg :start-column)
   (end-column :type '(or null string) :reader simple-record-effective-end-column :initarg :end-column)
   (volatility :type 'record-volatility :reader simple-record-volatility :initarg :volatility)
   (logical-deletion-column :type '(or null string) :reader simple-record-logical-deletion-column :initarg :logical-deletion-column)
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

(defclass simple-record ()
  ((table :type 'simple-record-table :reader record-table :initarg :table)
   (plist :type 'list :reader record-plist :initarg :plist)
   (dirtyp :type 'boolean :reader record-dirty-p :initform t :initarg :dirtyp)))

(defun table-exists-p (table)
  (ignore-errors
    (plusp (length (db-query (format nil "describe `~a`" table))))))

(defun singular (name)
  (brfp::make-english-singular name))

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

(defun c-bool (boolean)
  (if boolean 1 0))


(defun dequote (s)
  (if (and (member (elt s 0) '(#\' #\") :test #'char=)
           (char= (elt s 0) (last-elt s)))
      (subseq s 1 (- (length s) 2))
      s))

(defun lisp-type-for-column (column-name table-description)
  (let* ((column (find column-name table-description
                       :key (rcurry #'getf :field)
                       :test #'string-equal))
         (column-type (getf column :type))
         (kind (when (find #\( column-type)
                 (subseq column-type 0 (position #\( column-type))))
         (detail (when (find #\( column-type)
                   (split-sequence #\,
                                   (subseq column-type
                                           (1+ (position #\( column-type))
                                           (position #\) column-type))))))
    
    (ecase (keyword* kind)
      (:date (values 'timestamp 'unix-to-timestamp 'timestamp-to-unix))
      (:char (values 'string 
                     `(lambda (s) (string-fixed s ,(parse-integer (first detail))))
                     'identity))
      (:enum (values `(member ,@(mapcar (compose #'keyword* #'dequote) detail))
                     'string-upcase 'keyword*))
      (:varchar (values 'string 'identity 'princ-to-string))
      (:tinyint (values 'boolean 'boolbool 'c-bool))
      (:decimal (let ((scalar (expt 10 (parse-integer (second detail)))))
                  (values (list 'real 0 (1- (expt 10 (parse-integer (first detail)))))
                          `(lambda (n) (* ,scalar (round (* 1.0 n) ,scalar)))
                          'identity)))
      (:year (values '(integer 1 9999) 'identity 'identity)))))

(defun assert-columns-exist (db-table table start-column end-column logical-deletion-column)
  (loop for column in '(start-column end-column logical-deletion-column)
     for column-name in (list start-column end-column logical-deletion-column)
     when column-name
     do (assert (simple-record-table-has-column table column-name)
                ()
                "The ~a given for ~a is ~a, which is not a column on that table"
                column db-table column-name)))

(defun assert-primary-keys-exist (object db-table primary-key-columns)
  (assert (every (curry #'simple-record-table-has-column object) primary-key-columns)
          (primary-key-columns)
          "~@(~r~) of primary key columns defined for ~a ~0@*~:[~;does~:;do~] not exist."
          (count-if-not (curry #'simple-record-table-has-column object) primary-key-columns)
          db-table))

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
  
  (setf (slot-value object 'primary-key-columns) primary-key-columns)
  (setf (slot-value object 'trailer-tables) trailer-tables)
  (setf (slot-value object 'parent-table) parent-table)
  (setf (slot-value object 'volatility) volatility)
  
  (assert-primary-keys-exist object db-table primary-key-columns)
  (assert-columns-exist db-table object start-column end-column logical-deletion-column)
  
  (let ((missing (remove-if-not #'table-exists-p
                                (remove-if #'null
                                           (append (list parent-table) trailer-tables)))))
    (unless (null missing) 
      (warn
       "All parent and trailer tables for ~a must exist; ~r missing table~:p: ~{~a~^, ~}"
       db-table (length missing) missing)))
  
  (assert (simple-record-volatility-p volatility) (volatility)
          "The volatility of the table must be valid (~a is not)" volatility)
  (let ((finder-name (format-symbol :herald-db "FIND-~:@(~a~)" (singular db-table)))
        (finder-by-keys-name (format-symbol :herald-db "FIND-~:@(~a~)-BY" db-table))
        (record-class (intern (string-upcase (singular db-table))))
        (primary-keys (mapcar (compose #'intern #'string-upcase) primary-key-columns)))
    (eval `(defclass ,record-class (simple-record) ()))
    (export record-class)
    (eval `(defmethod ,finder-name ,primary-keys (find-simple-record ,object ,@primary-keys)))
    (export finder-name)
    
    (let ((columns (mapcar (rcurry #'getf :field) (db-query (format nil "describe `~a`" db-table)))))
      (eval `(defmethod ,finder-by-keys-name (&rest search-keys 
                                              &key ,@(mapcar (compose #'intern #'string-upcase) columns))
               (find-simple-records ,object search-keys)))
      (export finder-by-keys-name)
      (dolist (column-name columns)
        (let ((accessor-name (format-symbol :herald-db "~:@(~a~)-~:@(~a~)" 
                                            (singular db-table) 
                                            (if (and (string-equal column-name (singular db-table))
                                                     (not (member "id" columns :test #'string-equal)))
                                                "id"
                                                column-name))))
          (multiple-value-bind (general-type casting cast-from) 
              (lisp-type-for-column column-name (simple-record-table-description object))
            
            (eval `(defmethod ,accessor-name ((instance ,record-class))
                     (the (or ,general-type null)
                          (,cast-from
                           (getf (instance) ,(keyword* column-name))))))
            (export accessor-name)
            
            (let ((general-type-class (if (consp general-type) (car general-type) general-type)))
              (unless (member column-name primary-key-columns :test #'string-equal)
                (identity #+ (or) let 
                          #+ (or) ((unkey-columns (remove-if (rcurry #'member primary-key-columns :test #'string-equal)
                                                             columns)))
                          (eval (print `(defmethod (setf ,accessor-name) ((new-value ,general-type-class)
                                                                          (instance ,record-class))
                                          (check-type new-value (or ,general-type null))
                                          (db-query ,(format nil "update `~a` set `~a`=? where ~{`~a`=?~^ and ~}"
                                                             db-table
                                                             column-name
                                                             primary-key-columns)
                                                    (,casting new-value)
                                                    ;; (mapcar (curry #'getf instance) ',(mapcar #'keyword* unkey-columns))
                                                    (mapcar (curry #'getf instance) ',(mapcar #'keyword* primary-key-columns)))
                                          (setf (getf instance ,(keyword* column-name)) new-value))))))))))))
  
  (setf (gethash db-table *simple-record-tables*) object))


(defun all-tables ()
       (mapcar #'second (db-query "show tables")))


(defmethod print-object ((table simple-record-table) s)
  (format s (if *print-readably*
                "#.(MAKE-INSTANCE 'SIMPLE-RECORD-TABLE :DB-TABLE ~s)"
                "#<SIMPLE-RECORD-TABLE for ~s>") 
          (simple-record-db-table table)))

(defmethod print-object ((object simple-record) stream)
  (if *print-readably*
      (let ((table (record-table object))
            (plist (record-plist object)))
        (format stream "#.(FIND-~@:(~a~) ~{~s~^ ~})"
                (singular (simple-record-db-table table)) 
                (mapcar (compose (curry #'getf plist) #'make-keyword #'string-upcase) (simple-record-primary-key-columns table))))
      (let ((table (record-table object))
            (plist (record-plist object)))
        (format stream "~:(~a~)~{~{~% • ~:(~a~):~25t~s~}~}~{~{~% • ~:(~a~):~25t~s~}~}"
                (singular (simple-record-db-table table))
                (mapcar (compose (lambda (key)
                                   (list key (getf plist key))) 
                                 #'make-keyword #'string-upcase)
                        (simple-record-primary-key-columns table))
                (remove-if (rcurry #'member (simple-record-primary-key-columns table)
                                   :test #'string-equal)
                           (mapcar (compose (lambda (key)
                                              (list key (getf plist key))) 
                                            #'make-keyword #'string-upcase (rcurry #'getf :field))
                                   (simple-record-table-description  table))
                           :key #'car)))))



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
                             (apply #'db-query (format nil "select * from `~a` where ~{`~a`=?~^ and ~}" 
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

