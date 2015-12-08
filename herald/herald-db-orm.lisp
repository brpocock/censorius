(in-package :herald-db)

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
                                      (t (warn "key is not primary? ~a" keys)
                                         #+swank (format t " — using non-primary keys on ~a, so FIND…BY is used" dest-table)
                                         (write-find-record-by-keywords dest-table keys))))))
                    (warn "~% Complex keys, skipping ~s" keys))))))))))
