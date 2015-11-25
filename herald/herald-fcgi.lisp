(eval-when (:compile-toplevel :load-toplevel :execute)
  (mapcar #'ql:quickload '(:alexandria
                           :cl-ppcre
                           :cl-sendmail
                           :com.informatimago.common-lisp.rfc2822
                           :drakma
                           :flexi-streams
                           :memoize
                           :split-sequence
                           :dbd-mysql
                           :st-json
                           #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi)))

(require :alexandria)
(require :cl-ppcre)
(require :cl-sendmail)
(require :com.informatimago.common-lisp.rfc2822)
(require :drakma)
(require :flexi-streams)
(require :memoize)
(require :split-sequence)
(require :st-json)

(require :dbd-mysql)
(require #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi)

(defpackage :herald-fcgi
  (:use :cl :alexandria #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
        :cl-ppcre :split-sequence)
  (:export :herald-cgi :herald-fcgi))

(in-package :herald-fcgi)

;; control cards

(define-constant +host-name+ "http://flapagan.org"
  :test #'equal)

(define-constant +url-prefix+ "/reg/herald.cgi"
  :test #'equal)

(define-constant +sysop-mail+
    "\"Bruce-Robert Fenn Pocock\" <brpocock@star-hope.org>"
  :test #'equal)

(define-constant +herald-mail+
    "\"Censorius Herald for TEG FPG\" <herald@flapagan.org>"
  :test #'equal)

(define-constant +herald-mail-base+
    "herald@flapagan.org"
  :test #'equal)

(define-constant +registrar-mail+
    "\"TEG FPG Registration Team\" <register@flapagan.org>"
  :test #'equal)

(define-constant +archive-mail+
    "\"Registration Archive\" <reg-archive@flapagan.org>"
  :test #'equal)

(eval-when (:compile-toplevel :load-toplevel :execute)
  (load (make-pathname :name "herald-mysql"
                       :defaults (user-homedir-pathname))))



;; compile-time constants

(defconstant +compile-time-offset+ 3639900000)
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defvar +compile-time+ (- (get-universal-time) +compile-time-offset+)))

(defvar +utf-8+ (flexi-streams:make-external-format :utf8 :eol-style :lf))

(eval-when (:compile-toplevel)
  (format t "~&Compiling Herald with baked-in configuration:
 • User home directory: ~a
 • DB: ~:[Unknown/incorrect type~;MariaDB/MySQL~] database
    • host: ~a
    • database name: ~a
    • user name: ~a
    • password: ~:[(missing)~;(set)~]
 • Host name: ~a
 • Sysop mail: ~a
 • Herald mail: ~a
 • Registrar mail: ~a
 • Archive mail: ~a
 • Compile-time version marker: ~36r
 • PayPal interface
    • ~:[Production (live) mode~;Sandbox (test) mode~]
    • PayPal App ID: ~a
    • PayPal account: ~a
    • PayPal client ID: ~a
    • PayPal secret: ~:[(missing)~;(set)~]
~2%"
          (user-homedir-pathname)
          herald-db-config:+mysql+
          (getf herald-db-config:+params+ :host)
          (getf herald-db-config:+params+ :database-name)
          (getf herald-db-config:+params+ :username)
          (getf herald-db-config:+params+ :password)
          +host-name+
          +sysop-mail+
          +herald-mail+
          +registrar-mail+
          +archive-mail+
          +compile-time+
          *paypal-sandbox-p*
          (paypal-app-id)
          (paypal-account)
          (paypal-client-id)
          (paypal-secret)))


(defvar *accepted-currency* "USD")

(eval-when (:compile-toplevel :load-toplevel :execute)
  (load (make-pathname :name "paypal-secrets"
                       :defaults (user-homedir-pathname))))


(defparameter *read-post-max* 4000000
  "The maximum number of characters to allow to be read from a POST")

(defparameter *read-post-buffer-start* 4000)
(defparameter *read-post-buffer-grow* 4000)



(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun null-if (thing other &key (test #'eql))
    (if (funcall test thing other)
        nil
        thing)))
(defmacro upgrade-vector (vector new-type &key converter)
  "Returns a vector with the same length and the same elements as VECTOR \(a
variable holding a vector) but having element type NEW-TYPE. If CONVERTER is
not NIL, it should designate a function which will be applied to each element
of VECTOR before the result is stored in the new vector. The resulting vector
will have a fill pointer set to its end.

The macro also uses SETQ to store the new vector in VECTOR."
  `(setq ,vector
         (loop with length = (length ,vector)
            with new-vector = (make-array length
                                          :element-type ,new-type
                                          :fill-pointer length)
            for i below length
            do (setf (aref new-vector i)
                     ,(if converter
                          `(funcall ,converter (aref ,vector i))
                          `(aref ,vector i)))
            finally (return new-vector))))

;;; this function is taken from Hunchentoot 1.1.0 without effective modification
(defun url-decode (string &optional (external-format +utf-8+))
  "Decodes a URL-encoded STRING which is assumed to be encoded using
the external format EXTERNAL-FORMAT."
  (when (zerop (length string))
    (return-from url-decode ""))
  (let ((vector (make-array (length string)
                            :element-type '(unsigned-byte 8)
                            :fill-pointer 0))
        (i 0)
        unicodep)
    (loop
       (unless (< i (length string))
         (return))
       (let ((char (aref string i)))
         (labels ((decode-hex (length)
                    (prog1
                        (parse-integer string
                                       :start i :end (+ i length) :radix 16)
                      (incf i length)))
                  (push-integer (integer)
                    (vector-push integer vector))
                  (peek ()
                    (aref string i))
                  (advance ()
                    (setq char (peek))
                    (incf i)))
           (cond
             ((char= #\% char)
              (advance)
              (cond
                ((char= #\u (peek))
                 (unless unicodep
                   (setq unicodep t)
                   (upgrade-vector vector '(integer 0 65535)))
                 (advance)
                 (push-integer (decode-hex 4)))
                (t
                 (push-integer (decode-hex 2)))))
             (t (push-integer (char-code (case char
                                           ((#\+) #\Space)
                                           (otherwise char))))
                (advance))))))
    (cond (unicodep
           (upgrade-vector vector 'character :converter #'code-char))
          (t (flexi-streams:octets-to-string vector
                                             :external-format external-format)))))

(defun url-encode (string)
  "URL-encodes a string"
  (with-output-to-string (s)
    (loop for c across string
       for index from 0
       do (cond ((or (char<= #\0 c #\9)
                     (char<= #\a c #\z)
                     (char<= #\A c #\Z)
                     ;; note that there's no comma in there - because of cookies
                     (find c "$-_.!*'()" :test #'char=))
                 (write-char c s))
                (t (loop for octet across
                        (flexi-streams:string-to-octets string
                                                        :start index
                                                        :end (1+ index))
                      do (format s "%~2,'0x" octet)))))))




(defmacro interleave (&rest sets)
  "Interleave elements from each set: (a b c) (1 2 3) ⇒ (a 1 b 2 c 3)"
  (let ((gensyms
         (loop for i below (length sets)
            collecting (gensym (or (and (consp (elt sets i))
                                        (princ-to-string (car (elt sets i))))
                                   (princ-to-string (elt sets i)))))))
    `(loop
        ,@(loop for i below (length sets)
             appending (list 'for (elt gensyms i) 'in (elt sets i)))
        ,@(loop for i below (length sets)
             appending (list 'collect (elt gensyms i))))))

(defun interleave2 (set1 set2)
  (interleave set1 set2))

(defun first-or-only-second (sets)
  "Return the  second element  of the singular  list passed-in,  or, the
second of  every one of  a list of  lists passed in.  Effectively: Given
a list  of pairs (which  are, themselves,  lists), return the  second of
each of them; but if given only one, return it as an atom."
  (if (= 1 (length sets))
      (second (first sets))
      (mapcar #'second sets)))


;;; The  environment  surrounding  each  query is  stashed  into  these;
;;; they're unbound at the top-level SO THAT trying to access them will
;;; signal an error.

(defvar *cgi* :cgi)
(defvar *request* nil)
(defvar *db* :disconnected)



;;; Asking questions of the user

(defun accept-type-p (content-type)
  "Does the UA accept the named content-type?"
  (ecase *cgi*
    (:fast (search content-type (fcgx-getparam "HTTP_ACCEPT" *request*)))
    (:cgi (search content-type (uiop/os:getenv "HTTP_ACCEPT")))))

(defun read-post-data ()
  "Parse POST data from the user"
  (let* ((the-end (min (or (ignore-errors
                             (parse-integer (uiop/os:getenv "CONTENT_LENGTH")))
                           0)
                       *read-post-max*))
         (read-buffer (make-array the-end
                                  :element-type 'character
                                  :adjustable t :fill-pointer the-end)))
    (warn " Reading POST data, length ~:d bytes" the-end)
    (setf (fill-pointer read-buffer) (read-sequence read-buffer *standard-input*
                                                    :start 0 :end the-end))
    (setf (getf *request* :post-data) (coerce (copy-array read-buffer) 'string))
    (warn "POST data: ~a" (getf *request* :post-data))
    (getf *request* :post-data)))

(defun all-submitted-params ()
  (print (apply #'concatenate 'string
                (list (or (uiop/os:getenv "PATH_INFO") "")
                      "&"
                      (or (uiop/os:getenv "QUERY_STRING") "")
                      "&"
                      (if (equal "POST" (getf *request* :request-method))
                          (or (getf *request* :post-data) (read-post-data))
                          ""))) *error-output*))

(defun query-params ()
  "Obtain all of the dominant* parameters submitted for a request.

Currently, “dominant*”  means: If the  request is  a POST, then  any URI
parameters are  ignored. For  a GET request,  URI parameters  are parsed
from the query string and path-info."
  (if-let ((query-params (getf *request* :query-params)))
    query-params
    (setf (getf *request* :query-params)
          (alist-plist
           (mapcar (lambda (pair)
                     (destructuring-bind  (key &optional value) (split-sequence #\= pair)
                       (cons (make-keyword (string-upcase key))
                             (if (stringp value) (url-decode  value) t))))
                   (split-sequence #\&
                                   (all-submitted-params)))))))

(defmethod st-json:read-json ((null null) &optional junk-allowed-p)
  (declare (ignore junk-allowed-p))
  nil)

(defmethod st-json:read-json ((list cons) &optional junk-allowed-p)
  (declare (ignore junk-allowed-p))
  (mapcar #'st-json:read-json list))

(defun field-?-p (token)
  (let ((naive (string-downcase token)))
    (cond
      ((member token '("sleep" "php")
               :test #'string-equal) naive)
      ((char= #\p (last-elt naive))
       (concatenate 'string (subseq naive 0 (- (length naive)
                                               1
                                               (if (char= #\- (elt naive (- (length naive) 2)))
                                                   1
                                                   0))) "?"))
      (t naive))))


(defun interpret-field (value)
  (case value
    (:true t)
    (:false nil)
    (:null nil)
    (otherwise value)))

(defmacro defun-memoize (name arg-list &body body)
  (let ((cache (gensym (concatenate 'string (string name) "-CACHE-")))
        (key (gensym "KEY-"))
        (found (gensym "FOUND-"))
        (foundp (gensym "FOUND-P-"))
        (new-value (gensym "NEW-VALUE-")))
    (when (stringp (car body))
      (setf (documentation name 'function) (car body)))
    `(let ((,cache (make-hash-table :test #'equalp)))
       (defun ,name ,arg-list 
         (let ((,key (list ,@(remove-if 
                              (lambda (symbol) (member symbol '(&rest &optional &key)))
                              (mapcar (lambda (element)
                                        (if (consp element)
                                            (car element)
                                            element))
                                      arg-list)))))
           (multiple-value-bind (,found ,foundp) (gethash ,key ,cache)
             (if ,foundp
                 ,found
                 (let ((,new-value (progn ,@body)))
                   (setf (gethash ,key ,cache) ,new-value)
                   ,new-value))))))))

(defun-memoize field (field-name &optional f2 f3)
  "Get the  contents of  the named form-field.  (Accepted as  a keyword,
which  will  be downcased,  or  a  string,  which will  be  searched-for
literally. Thus,  to get a field  with capital letters in  the name, you
must use a string.)"
  (interpret-field
  (cond
    ((and f3
          (stringp field-name)
          (numberp f2)
          (stringp f3))
      (when-let (field-jso (field (make-keyword field-name)))
       (when-let (st-jso (st-json:read-json field-jso))
         (when-let (elt (elt st-jso f2))
           (st-json:getjso (field-?-p f3) elt)))))
    
    ((and f3
          (or (symbolp field-name) (stringp field-name))
          (numberp f2)
          (or (symbolp f3) (stringp f3)))
     (field (string-downcase field-name) f2 (string-downcase f3)))
    
    ((and f2
          (stringp field-name)
          (stringp f2))
     (when-let (field-jso (field (make-keyword (string-upcase field-name))))
       (when-let (st-jso (st-json:read-json field-jso))
         (st-json:getjso (field-?-p f2) st-jso))))
    
    ((and f2
          (or (symbolp field-name) (stringp field-name))
          (or (symbolp f2) (stringp f2)))
     (field (string-downcase field-name) (string-downcase f2)))
    
    ((or f2 f3)
     (error "Invalid field selector ~s ~s ~s" field-name f2 f3))
    
    ((symbolp field-name)
     (ecase *cgi*
       (:fast (fcgx-getparam field-name *request*))
        (:cgi (getf (query-params) (make-keyword (string-upcase field-name))))))
    
    ((stringp field-name)
      (field (make-keyword field-name))))))

(defun reply-error/text (conditions)
  "Replies with a plain-text error report. The first element of the list
must be the numeric HTTP status code."
  (format *error-output* "~&text error report ~s" conditions)
  (format nil
          "Status: ~d ~a
Content-Type: text/plain; charset=utf-8

~0@*HTTP Error ~d~2%~{~a~2%~}~2%~a~2%"
          (first conditions) (princ-to-string (second conditions))
          (mapcar #'princ-to-string (rest conditions))
          (with-output-to-string (s)
            (dolist (condition conditions)
              (if (typep condition 'condition)
                  (uiop/image:print-condition-backtrace condition :stream s)
                  (princ condition s))))))

(defun sql-escape (string)
  "Simply replaces  ' with  '' in  strings (that's  paired/escape single
quotes)"
  (regex-replace-all "\\'" string "''"))

(defun jso-escape (string)
  "Simply replaces  ' with  '' in  strings (that's  paired/escape single
quotes)"
  (let* ((string (regex-replace-all "\\\\" string "\\\\"))
         (string (regex-replace-all "\\\"" string "\\\""))
         (string (regex-replace-all "\\n" string "\\n")))
    string))

(defun cl-user::sql (stream object colonp atp &rest parameters)
  "FORMAT ~/SQL/ printer. Handles  strings, integers, and floating-point
real numbers."
  (assert (not colonp) () "The colon modifier is not used for ~~/SQL/")
  (assert (not atp) () "The @ modifier is not used for ~~/SQL/")
  (assert (null parameters) () "~~/SQL/ does not accept parameters; saw ~s" parameters)
  (case object
    (:null (princ "NULL" stream))
    (:true (princ "TRUE" stream))
    (:false (princ "FALSE" stream))
    ((t) (princ 1 stream))
    (otherwise (etypecase object
                 (string (princ #\' stream)
                         (princ (sql-escape object) stream)
                         (princ #\' stream))
                 (integer (princ object stream))
                 (real (princ (* 1.0 object) stream))
                 (cons (format stream "(~{~/sql/~^, ~})" object))
                 (null (princ "NULL" stream))))))

(defun html-escape (string)
  "Escapes < and & from strings for safe printing as HTML (text node) content."
  (regex-replace-all "\\<"
                     (regex-replace-all "\\&"
                                        (typecase string
                                          (string string)
                                          (t (princ-to-string string)))
                                        "&amp;")
                     "&lt;"))

(defun cl-user::html (stream object colonp atp &rest parameters)
  (assert (not colonp))
  (assert (not atp))
  (assert (null parameters))
  (etypecase object
    (string (princ (html-escape object) stream))
    (integer (princ (html-escape (format nil "~:d" object)) stream))
    (condition (princ (print-condition/html object) stream))
    (t (princ (html-escape (princ-to-string object)) stream))))

(defun cl-user::edn (stream object colonp atp &rest parameters)
  (assert (not colonp))
  (assert (not atp))
  (assert (null parameters))
  (case object
    ((t :true 'true) (princ "true" stream))
    ((:false 'false) (princ "false" stream))
    (otherwise (etypecase object
                 (null (princ "nil" stream))
                 (keyword (princ #\: stream)
                          (princ (string-downcase (string object)) stream))
                 (symbol (princ #\: stream)
                         (princ (string-downcase (string object)) stream))
                 (string (prin1 object stream))
                 (integer (prin1 object stream))
                 (real (prin1 (* 1.0 object) stream))
                 (vector (format stream "[~{~/edn/~^ ~}]" (coerce object 'list)))
                 (list (format stream "{~{~/edn/ ~/edn/~^,~%~t~}}" object))))))

(defvar *json-pretty-indent* "  ")

(defun cl-user::json (stream object colonp atp &rest parameters)
  (assert (not colonp))
  (assert (not atp))
  (assert (null parameters))
  (let ((*json-pretty-indent* (concatenate 'string *json-pretty-indent* "     ")))
    (case object
      ((t :true 'true) (princ "true" stream))
      ((:false 'false) (princ "false" stream))
      (otherwise (etypecase object
                   (null (princ "null" stream))
                   (keyword (princ #\" stream)
                            (princ (string-downcase (string object)) stream)
                            (princ #\" stream))
                   (symbol (princ #\" stream)
                           (princ (string-downcase (string object)) stream)
                           (princ #\" stream))
                   (string (princ #\" stream)
                           (princ (jso-escape object) stream)
                           (princ #\" stream))
                   (integer (prin1 object stream))
                   (real (prin1 (* 1.0 object) stream))
                   (vector (format stream "[~{~/json/~^, ~}]" (coerce object 'list)))
                   (list (if (and (evenp (length object))
                                  (every #'keywordp (loop for (key value) on object by #'cddr
                                                       collecting key)))
                             (format stream (concatenate 'string "{~{~/json/: ~/json/~^,~%" *json-pretty-indent* "~}}") object)
                             (format stream "~/json/" (coerce object 'vector))))
                   (t (format nil "~a" object)))))))

(defun print-condition/html (c)
  (format nil "<section class=\"error\">
<h2> A condition of type ~/html/ was signaled. </h2>
<h3>~/html/</h3>
<ol class=\"backtrace\">
~/html/
</ol>
</section>"
          (type-of c)
          c
          (with-output-to-string (s)
            (uiop/image:print-condition-backtrace c :stream s))))

(defun simply$ (thing)
  (coerce (remove-if (complement #'alphanumericp) 
  (if (consp thing)
      (simply$ (car thing))
      (princ-to-string thing)))
          'string))

(defun mail-error (condition)
  (mail-reg +sysop-mail+
            (concatenate 'string "[herald-error] " (let ((condition$ (format nil "~a" condition)))
                                                     (subseq condition$ 0 (min (length condition$)
                                                                               40))))
            (concatenate 'string "condition."
                         (simply$ (type-of condition))
                         "." +herald-mail-base+)
            "A condition of type ~a was signaled.

~a

Query params:
~s

Backtrace:
~{~% → ~a~}

~@[ Invoice data:
~{ ~a ~s ~}~]

\(end of line)"
            (type-of condition)
            (or condition "Ø")
            (ignore-errors (query-params))
            (ignore-errors (with-output-to-string (s)
    (uiop/image:print-condition-backtrace condition :stream s)))
            (if (field :invoice)
                (list (read-invoice (field :invoice))
                      (itinerary/text (field :invoice))))))

(defun reply-error/html (conditions)
  (format *error-output* "~&HTML error report ~s" conditions)
  (when (atom conditions)
    (return-from reply-error/html (reply-error/html (list conditions))))
  (let ((status (if (integerp (first conditions)) (first conditions) 500)))
    (format nil "Status: ~d Error or something
Content-Type:text/html; charset=utf-8

<!DOCTYPE html>
<html>
  <title> HTTP Error ~0@*~d </title>
  <link rel=\"stylesheet\" href=\"/reg/css/style.css\" >
</head>
<body>

<h1>An Error Occurred (type ~0@*~d)</h1>

<section class=\"card\">
<h2>An Error Occurred</h2>

<p>Your request could not be processed because of the following
condition:</p>

~{<div>~/html/</div>~%~}

</section>


<h3> This message produced by </h3>
Censorius Herald running in ~a service; compile-time cookie ~36r

<p> If you believe this condition is incorrect, the system operator can
be reached at: ~a </p>

</body></html>~%"
            status 
          conditions
          *cgi*
          +compile-time+
          (first (split-sequence
                  #\>
                  (second (split-sequence
                           #\<
                                 +sysop-mail+)))))))

(defun 36r (figure)
  (format nil "~36r" figure))

(defun reply-error/json (conditions)
  (cond
    ((atom conditions) (reply-error/json (list conditions)))
    (t (format *error-output* "~&JSON error report ~s" conditions)
       (format nil "Status: ~d ~a
Content-Type: text/javascript; charset=utf-8~2%~/json/~%"
               (first conditions)
               (princ-to-string  (second conditions))
               (list :this-is-an-error t
                     :error (first conditions)
                     :conditions conditions
                     :backtrace (with-output-to-string (s)
                                  (map nil (rcurry #'uiop/image:print-condition-backtrace :stream s)
                                       (remove-if-not (lambda (c)
                                                        (typep c 'condition)) 
                                                      conditions)))
                     :service *cgi*
                     :herald-version (36r +compile-time+)
                     :you-said *request*)))))

(defun reply-error (conditions)
  (format *error-output* "~&reply-error with ~s" conditions)
  (princ (cond ((accept-type-p "text/html") (reply-error/html conditions))
               ((or (accept-type-p "text/javascript")
                    (accept-type-p "application/javascript")) (reply-error/json conditions))
               (t (reply-error/text conditions)))
         *standard-output*)
  (when (and (consp conditions)
             (numberp (first conditions))
             (<= 400 (first conditions)))
    (format *error-output* "~&ERROR condition: ~{~a~^  ~}" conditions)
    (map nil #'mail-error (rest conditions))))

(defun reply (structure)
  (format *error-output* "~& Handling reply: ~s" structure)
  (ecase (car structure)
    (:error (reply-error (rest structure)))
    (:data (cond
             ((accept-type-p "text/javascript") 
              (reply (list :raw (format nil "Content-Type: text/javascript; charset=utf-8~2%~/json/~%" (second structure)))))
             (t 
              (reply (list :raw (format nil "Content-Type: text/plain; charset=utf-8~2%~s~%" (second structure)))))))
    (:raw (ecase *cgi*
            (:fast (cl-fastcgi:fcgx-puts *request* (second structure)))
            (:cgi (princ (second structure))
                  (princ (second structure) *error-output*))))))

(define-constant +save-fields+
    '(:note)
  :test #'equalp)

(defun mail-reg (destination subject reference &rest message-fmt+args)
  (cl-sendmail:with-email
      (mail-stream destination
                   :bcc +sysop-mail+
                   :cc +archive-mail+
                   :subject subject
                   :from +herald-mail+
                   :other-headers (list (list "References" (concatenate 'string (string reference) "." +herald-mail-base+))
                                        '("Organization" "Temple of Earth Gathering, Inc.")
                                        (list "X-Censorius-Herald-Version" (36r +compile-time+)))
                   :charset :utf-8
                   :type "text" :subtype "plain")
    (apply (curry #'format mail-stream) message-fmt+args)))

(defun mail-to-user (invoice)
  (getf (or (first (remove-if-not (lambda (guest)
                                    (and (getf guest :|e-mail|)
                                         (plusp (length (getf guest :|e-mail|)))
                                         (string-equal "adult" (getf guest :|ticket-type|))))
                                  (read-guests invoice)))
            (list :|e-mail| +registrar-mail+))
        :|e-mail|))

(defvar *select-cache* (make-hash-table :test #'equal))

(defun db-query (query &rest raw-args)
  (let ((args (mapcar (lambda (arg)
                        (cond ((member arg '(:null :true :false)) arg)
                              ((null arg) :null)
                              ((eql arg t) :true)
                              ((symbolp arg)
                               (string-downcase arg))
                              (t arg)))
                      raw-args)))
    (handler-case
        (cond ((string-equal "select" query :end2 6)
               
               (multiple-value-bind (cached foundp)
                   (gethash (list query args) *select-cache*)
                 (when foundp
                   (format *trace-output* "~& [SQL]* ~s ~s" query args)
                   (return-from db-query cached)))
               
  (format *trace-output* "~& [SQL] ~s ~s" query args)
               (let ((found (dbi:fetch-all (apply #'dbi:execute (dbi:prepare *db* query) args))))
                 (setf (gethash (list query args) *select-cache*) found)
                 found))
              
              (t (format *trace-output* "~& [SQL] ~s ~s" query args)
                 (clrhash *select-cache*)
                 (dbi:fetch-all (apply #'dbi:execute (dbi:prepare *db* query) args))))
      (dbi.error:<dbi-database-error> (c)
        (format *error-output* "~2%{{{ ERROR in SQL engine }}}~%~a~%~s~%~s~2%~s ~a"
                query raw-args args c c)
        (signal c)))))

(defun next-invoice-number ()
  (cadar (db-query "select `auto_increment` from information_schema.tables where table_name='invoices'")))

(defun create-invoice ()
  (db-query "insert into invoices (created, `festival-season`, `festival-year`)
values (date('now'),?,?)"
            (next-festival-season) (next-festival-year))
  (cadar (db-query "select last_insert_id()")))


(defun mail-registrar-completed-invoice (invoice)
  (mail-reg +registrar-mail+ "TEG FPG Registration"
            (format nil "Invoice.~d." invoice)
            "
Invoice # ~:d has been completed by the user.

~a

———

~a

———

This eMail was composed by your faithful, robotic Herald. Replying will
not do any good; I am a lowly robot without the ability to read
eMails. If this looks like a software problem, you might contact my
operator:

~a
"
            invoice
            (recall-link invoice t)
            (itinerary/text invoice)
            +sysop-mail+))

(defun mail-user-completed-invoice (invoice)
  (mail-reg (mail-to-user invoice) "TEG FPG Registration (completed)"
            (format nil "Invoice.~d." invoice)
            "
TEG FPG Invoice # ~:d

                  → Temple of Earth Gathering, Inc. ←

                      → Florida Pagan Gathering. ←

Your  TEG FPG  registration has  been  completed, and  your payment  has
been received.

\(This is an automated message. Replies will not be received.)

We look forward to seeing you at Festival!

                                  ———

~a
                                  ———

If you have further questions or comments, you can write to the TEG FPG
registration team at this eMail address:

~a

                                  ————

Please DO NOT reply to this eMail. I, the lowly Herald, am but a robotic
messenger, and am  unable to read eMail nor help  you further. My secret
cookie says “~36r.”

"
            invoice
            (itinerary/text invoice)
            +registrar-mail+
            +compile-time+))

(defun clean-plist (plist &key (test #'identity))
  (loop for (key value) on plist by #'cddr
     when (funcall test value)
     append (list key value)))

(defun merch-table-text (merch)
  (with-output-to-string (s)
    (let ((sum 0))
      (dolist (item merch)
        (format s "~&    □ ~a ~50t (~a)~60t($ ~,2f ea)~%~10t“~a”~%~15t Style~30t ID ~40t Qty"
                (getf item :|title|) (getf item :|id|) (getf item :|price|) 
                (getf item :|description|) )
        (loop for style in (coerce (getf item :styles) 'list)
           for qty = (getf style :|qty|)
           when (and qty (not (zerop qty)))
           do (let ((cost (* qty (getf item :|price|)))) 
                (format s "~%~15t~a~40t~a~50t~6:d~65t $ ~5,2f"
                        (getf style :|title|)
                        (getf style :|id|)
                        qty
                        cost)
                (incf sum cost))))
      (format s "~2% Σ total for all “extras” … $ ~,2f ~%" sum))))

(defun payments-table-text (payments)
  (with-output-to-string (s)
    (let ((balance 0))
      (dolist (payment payments)
        (let ((amount (getf payment :|amount|)))
          (format s "~& A ~:[bill~;payment (or credit)~] for the amount $ ~,2f was issued using ~a.
   Reference code: ~a"
                  (plusp amount)
                  (abs amount)
                  (getf payment :|source|)
                  (getf payment :|via|))
          (if (plusp amount)
              (format s "~%    Payment: ~a" (getf payment :|note|)))
          (incf balance amount)))
      (format s "~2% Balance: $ ~,2f" balance))))

(defun itinerary/text (invoice)
  (format nil " ⛤ Itinerary for TEG FPG ~{ ~:(~a~) ~d ~}
 
★ Guest List ★
~{~{ • ~:(~a~): ~s~%~}~%~}

★ Additional merchandise ★
~a

★ Vending ★
~{ • ~:(~a~): ~s~%~}

★ Workshops ★
~{ • ~:(~a~): ~s~%~}

★ Scholarship Funds ★
~{ • ~a: ~s~%~}

★ General Information ★
~{ • ~:(~a~): ~s~%~}

★ Payments ★
~a
"
          (let ((fest (getf (read-invoice invoice) :general)))
            (list (getf fest :|festival-season|)
                  (getf fest :|festival-year|)))
          (mapcar #'clean-plist (read-guests invoice))
          (merch-table-text (read-merch invoice))
          (clean-plist (read-vending invoice))
          (clean-plist (read-workshops invoice))
          (loop for (key value) on (read-scholarships invoice) by #'cddr
             appending (list (case key
                               (:|php| "PHP")
                               (otherwise (string-capitalize key)))
                             value))
          (clean-plist (read-general invoice))
          (payments-table-text (read-payments invoice))))

(defun inhibit-mail (invoice)
  (cadar (db-query "select 1 from invoices where invoice=? and note like '%*shh*%' or memo like '%*shh*%'"
                   invoice)))

(defun mail-registrar-suspended-invoice (invoice)
  (if (inhibit-mail invoice)
      (warn "This invoice has a note or memo that inhibits sending mail.")
  (mail-reg +registrar-mail+ "SUSPENDED TEG FPG Registration"
            (format nil "Invoice.~d." invoice)
            "
Invoice # ~:d has been suspended by the user. Please visit the
Herald program at this link:

~a

…to review the registration and make any necessary corrections.

~a

———

This eMail was composed by your faithful, robotic Herald. Replying will
not do any good; I am a lowly robot without the ability to read
eMails. If this looks like a software problem, you might contact my
operator:

~a
"
            invoice
            (recall-link invoice t)
                (itinerary/text invoice)
                +sysop-mail+)))

(defun mail-user-suspended-invoice (invoice)
  (mail-reg (mail-to-user invoice) "TEG FPG Registration (suspended)"
            (format nil "Invoice.~d." invoice)
            "
TEG FPG Invoice # ~:d

                  → Temple of Earth Gathering, Inc. ←

                      → Florida Pagan Gathering. ←

Your TEG  FPG registration has been  suspended, and will be  reviewed by
our Regsitration staff.  Once they have made  any necessary corrections,
your registration will be processed.

\(This is an automated message. Replies will not be received.)

If you suspended  your registration to pay by  cheque, your registration
will be processed once payment in full has been received.

If  you suspended  your  registration  because you  have  a credit  due,
Registration  will apply  that credit  and return  your registration  to
you. You will then be responsible for paying any remaining balance due.

★ Any payment must reflect the balance  due on the date that the payment
was received. ★

Since ticket  prices will rise  as Festival approaches, the  total shown
when you  suspended your registration  MAY NOT be  the balance due  at a
future date.

~@[You included the following note to our Registration team:

“~a”~]

                                  ———

~a

                                  ———

If you have further questions or comments, you can write to the TEG FPG
registration team at this eMail address:

~a

You can also review, edit, or pay your registration at:

~a

                                  ————

Please DO NOT reply to this eMail. I, the lowly Herald, am but a robotic
messenger, and am  unable to read eMail nor help  you further. My secret
cookie says “~36r.”

"
            invoice
            (field :note)
            (itinerary/text invoice)
            +registrar-mail+
            (recall-link invoice)
            +compile-time+))

(defvar *ignored-inputs*
  '((guest waiver-signature)))

(defun verify-json-fields (table columns)
  (labels ((verify-json (object)
             (format *error-output* "~&jso ~a: ~a" table object)
             (if (consp object)
                 (dolist (element object)
                   (verify-json element))
            (st-json:mapjso (lambda (key value)
                                   (format *error-output* "~& jso (~a) ~a = ~a" table key value)
                                   (unless (or (member key (mapcar #'field-?-p columns) :test #'string-equal)
                                               (find (cons table key) *ignored-inputs* :test #'equalp))
                              (warn "JSO for ~a has unexpected key ~a (value ~s)"
                                    table key value)))
                                 object))))
    (let ((object (st-json:read-json (field table))))
      (verify-json object))))

(eval-when (:compile-toplevel :execute :load-toplevel)
  (defun select-field (hash column &optional row)
    (if row
        `(field ',hash row ',column)
        `(field ',hash ',column))))

(defmacro sql-insert-into-invoice ((table &optional (hash table)) key-columns columns &optional row)
  `(progn
     (verify-json-fields ',hash '(,@key-columns ,@columns))
     (db-query
      ,(format nil "insert into `invoice~:[s~;-~:*~(~a~)~]` (invoice, ~{`~(~a~)`~^, ~}) values (~{~a~^, ~})"
               table
               (mapcar #'string (append key-columns columns))
               (loop repeat (+ 1 (length columns) (length key-columns)) collect '?))
              invoice
      ,@(mapcar (lambda (column) (select-field hash column row))
                (append key-columns columns)))))

(defmacro invoice-row-exists-matching ((table &optional (hash table)) key-columns &optional row)
  `(cadar (db-query
           ,(format nil
                    "select 1 from  `invoice~:[s~;-~:*~(~a~)~]` where invoice=? ~@[  ~{ and `~(~a~)` = ? ~}~]"
                    table
                    (mapcar #'string key-columns))
           invoice
           ,@(mapcar (lambda (column)
                       (select-field hash column row))
                     key-columns))))

(defmacro sql-insert-invoice-array ((table) key-columns  columns)
  `(progn
     (verify-json-fields ',table '(,@key-columns ,@columns))
     (loop for row below (length (st-json:read-json (field ,(string table))))
        do (sql-insert-into-invoice (,table) ,key-columns ,columns row))))

(defmacro sql-update-invoice ((table &optional (hash table)) key-columns columns &optional row)
  `(db-query
    ,(format nil
             "update `invoice~:[s~;-~:*~(~a~)~]` set ~{ `~(~a~)` = ?~^, ~} where invoice=? ~@[  ~{ and `~(~a~)` = ? ~}~]"
             table
             columns
             key-columns)
    ,@(mapcar (lambda (column)
                (select-field hash column row))
              (append columns key-columns))
    invoice))

(defmacro invoice-update-or-insert (table key-columns columns &optional row)
  `(if (invoice-row-exists-matching ,table ,key-columns ,row)
       (sql-update-invoice ,table ,key-columns ,columns ,row)
       (sql-insert-into-invoice ,table ,key-columns ,columns ,row)))

(defmacro sql-update-invoice-array ((table &optional (hash table)) key-columns columns)
  `(progn
     (verify-json-fields ',hash '(,@key-columns ,@columns))
     (loop for row below (length (st-json:read-json (field ,(string table))))
        do (invoice-update-or-insert (,table) ,key-columns ,columns row))))

(defmacro sql-update-invoice-fields ((table &optional (hash table)) key-columns
                                              columns)
  `(progn
     (verify-json-fields ',hash '(,@key-columns ,@columns))
     (if (invoice-row-exists-matching (,table ,hash) ,key-columns)
         (sql-update-invoice (,table ,hash) ,key-columns ,columns)
         (sql-insert-into-invoice (,table ,hash) ,key-columns ,columns))))

(defun update-general (invoice)
  (sql-update-invoice-fields (nil general) ()
                             (created closed closed-by old-system-p festival-season festival-year
                                      note signature memo fast-check-in-address fast-check-in-postal-code)))

(defmacro accept+update-array ((table) key-fields fields)
  `(progn
     (defmethod ,(format-symbol *package* "ACCEPT-~a" table) (invoice)
       (sql-insert-invoice-array (,table) ,key-fields ,fields))
     (defmethod ,(format-symbol *package* "UPDATE-~a" table) (invoice)
       (sql-update-invoice-array (,table) ,key-fields ,fields))))

(accept+update-array (guests) (given-name surname)
  (FORMAL-NAME PRESENTER-BIO PRESENTER-REQUESTS SLEEP EAT DAYs GENDER T-SHIRT
                                         COFFEEP TOTEP TICKET-TYPE STAFF-DEPARTMENT PAYMENT-DUE 
                                         CALLED-BY ADDRESS CITY STATE POSTAL-CODE COUNTRY ID-NUMBER ID-STATE
                                         SOCIAL-NETWORK COVEN SPIRITUAL-PATH STAFF-REC WHY-STAFF STAFF-JOB-WANTED
                                         PHYSICAL-LIMITS KSA STAFF-TUE-SUN STAFF-NOTES STAFF-SUBMIT E-MAIL TELEPHONE
               staff-approve added marriage
               CABIN-REQUEST))

(defmacro accept+update ((table &optional (hash table)) key-fields &body fields)
  `(progn
     (defun ,(format-symbol *package* "ACCEPT-~a" table) (invoice)
       (sql-insert-into-invoice (,table ,hash) ,key-fields ,fields))
     (defun ,(format-symbol *package* "UPDATE-~a" table) (invoice)
       (sql-update-invoice-fields (,table ,hash) ,key-fields ,fields))))

(accept+update-array (merch) (item style) (qty))

(accept+update (vending vendor) ()
  blurb notes qty agreement masseurp meal-plan-p food-vendor-p title menu payment-due
  mqa-license bpr-license)

(defun accept-workshops (invoice)
  (declare (ignore invoice))
  (warn "not accepting workshops (TODO)"))

(defun as-number (n)
  (etypecase n
    (number n)
    (string (parse-decimal 
             (remove-if-not (lambda (char)
                              (or (digit-char-p char)
                                  (member char '(#\. #\-) :test #'char=)))
                            n)))))

(defun accept-scholarships (invoice)
  (loop for scholarship in '(php baiardi seva)
     for donation = (field "scholarships" scholarship) 
       
     when (and donation (plusp (as-number donation)))
     do (db-query "insert into `invoice-scholarships` (invoice, scholarship, amount) values (?, ?, ?)"
                  invoice (string-downcase scholarship) (as-number donation))))

(defun update-workshops (invoice)
  (declare (ignore invoice))
  (warn "not accepting workshops (TODO)"))

(defun update-scholarships (invoice)
  (loop for scholarship in '(php baiardi seva)
     for donation = (field "scholarships" scholarship) 
       
     when (and donation (plusp (as-number donation)))
     do (if (cadar (db-query "select 1 from `invoice-scholarships` where invoice = ? and scholarship = ?"
                             invoice (string-downcase scholarship)))
            (db-query "update `invoice-scholarships` set amount=? where invoice = ? and scholarship = ?"
                      (as-number donation) invoice (string-downcase scholarship))
            (db-query "insert into `invoice-scholarships` (amount, invoice, scholarship) values (?, ?, ?)"
                      (as-number donation) invoice (string-downcase scholarship)))))

(defun accept-state-from-form ()
  (handler-case
      (let ((invoice (create-invoice)))
        (list :invoice invoice
              :general (update-general invoice)
              :guests (accept-guests invoice)
              :merch (accept-merch invoice)
              :vending (accept-vending invoice)
              :workshops (accept-workshops invoice)
              :scholarships (accept-scholarships invoice)))
    (dbi.error:<dbi-database-error> (c)
      (throw 'cgi-bye 
        (list :error 501 
              (format nil "The record cannot be  inserted into the database, because the proposed  changes would  create inconsistent or  impossible data. (~a)" c)
              c)))))

(defun update-invoice-from-form (invoice)
  (handler-case
      (list :invoice invoice
            :general (update-general invoice)
            :guests (update-guests invoice)
            :merch (update-merch invoice)
            :vending (update-vending invoice)
            :workshops (update-workshops invoice)
            :scholarships (update-scholarships invoice))
    (dbi.error:<dbi-database-error> (c)
      (throw 'cgi-bye 
        (list :error 501 
              (format nil "The record cannot be changed in the database, because the proposed changes would create inconsistent or impossible data. (~a)" c)
              c)))))

(defgeneric handle-verb (verb))

(defmethod handle-verb ((verb t))
  (list :error 404
        (format nil "Verb not recognized (~s)" verb)))

(defmethod handle-verb :around (verb)
  (format *trace-output* "Handle-Verb called: ~s" verb)
  (call-next-method))

(defun valid-invoice-and-token-sent ()
  (let ((invoice (field "general" "invoice"))
        (token (field "general" "invoice-token")))
    (and invoice
         token
         (or (and (stringp invoice)
                  (every #'digit-char-p (princ-to-string invoice))
                  (parse-integer invoice))
             (and (integerp invoice)
                  invoice))
         (equal (user-key invoice) token)
         (numeric invoice))))

(defun save-invoice ()
  (if-let (invoice (valid-invoice-and-token-sent))
    (update-invoice-from-form invoice)
    (accept-state-from-form)))

(defmethod handle-verb ((verb (eql :save)))
  (let ((invoice-all (save-invoice)))
    (format *trace-output* "~s" invoice-all)
    (let ((invoice (getf invoice-all :invoice)))
      (mail-registrar-suspended-invoice invoice)
      (mail-user-suspended-invoice invoice)
      (list :data (read-invoice invoice)))))

(defun whine (&rest format+args)
  (apply #'format *error-output* format+args)
  (apply #'mail-reg +sysop-mail+ "Whining from Herald" (princ-to-string (get-universal-time)) format+args))

(defun disquote (string)
  (if (and string
           (< 3 (length string))
           (char= #\" (first-elt string) (last-elt string)))
      
      (subseq string 1 (- (length string) 1))
      (or string "")))

(defmethod handle-verb ((verb (eql :recall)))
  (let* ((invoice (parse-integer (disquote (field :invoice)) :radix 36 :junk-allowed t))
         (admin-key (disquote (field :admin-key)))
         (user-key (disquote (field :verify))))
    (format *trace-output* "~&Requested recall of invoice ~:d ~@[as admin~]"
            invoice admin-key)
    (cond
      ((not (numberp invoice))
       `(:error 404 "No invoice number supplied"))
      
      ((not (equal user-key (user-key invoice)))
       (whine "~&Recall refused; mismatched user-key (got ~a) for invoice ~:d" user-key invoice)
       '(:error 403 "Authorization refused. You cannot view the requested resource."
         "Please ensure that you copied and pasted the entire link, without spaces."))
      
      ((and (not (emptyp admin-key))
            (not (equal admin-key (admin-key invoice))))
       (whine "~&Recall refused; mismatched admin-key (got ~a) for invoice ~:d" admin-key invoice)
       '(:error 403 "Authorization refused. You cannot view the requested resource."
         "Please ensure that you copied and pasted the entire link, without spaces. Administatively…"))
      
      ((and (not (emptyp admin-key))
            (accept-type-p "text/html"))
       (list :raw
             (format nil "Content-Type: text/html; charset=utf-8

<!DOCTYPE html>
<html>
<head><title>Invoice Edit: ~:d~:*</title> </head>

<body>
<h2>Reg Team Admin Access</h2>
<p>
Please note that editing the guest's registration information is a brand-new 
feature and not everything may work 100%. 
</p>
<h4>
Invoice number: ~:d
</h4>
<h4>
Festival: ~{~a ~a~}
</h4>
<h4>
Guests:</h4> ~{
<p>
 • ~{~a ~} </p>
~}
<p>
If you would like to continue, please re-check all the information
before submitting.
</p>
<a href=\"~a\">Understood, let me review or edit this guest's registration</a>
<hr>
<pre>~a</pre>
</body></html>
"
                     invoice
                     (let ((fest (getf (read-invoice invoice) :general)))
                       (list (getf fest :|festival-season|)
                             (getf fest :|festival-year|)))
                     (mapcar (lambda (guest) 
                               (list (getf guest :|given-name|)
                                     (or (getf guest :|called-by|) "")
                                     (getf guest :|surname|))) 
                             (getf (read-invoice invoice) :guests))
                     (recall-invoice-link invoice t)
                     (itinerary/text invoice))))

      ((accept-type-p "text/html")
       (list :raw
             (format nil "Content-Type: text/html; charset=utf-8

<!DOCTYPE html>
<html>
<head><title>Invoice Edit: ~:d~:*</title> </head>
<meta charset=\"utf-8\">
<body>
<p>
Please note that editing your registration information is a brand-new 
feature and not everything may work 100%. 
</p>
<h4>
Invoice number: ~:d
</h4>
<h4>
Festival: ~{~a ~a~}
</h4>
<h4>
Guests:</h4> ~{
<p>
 • ~{~a ~} </p>
~}
<p>

If you would like to continue, please re-check all your information before submitting. In particular, if you are a staff
member,  re-check that  your department  is selected;  and  if you  ordered any  tote  bags or  coffee mugs  in the  top
section (next to a guest's name).

</p>
<a href=\"~a\">Understood, let me review or edit my registration</a>
<hr>
<h2>Previous Itinerary</h2>
<pre>~a</pre>
</body></html>
"
                             invoice 
                             (let ((fest (getf (read-invoice invoice) :general)))
                               (list (getf fest :|festival-season|)
                                     (getf fest :|festival-year|)))
                             (mapcar (lambda (guest) 
                                       (list (getf guest :|given-name|)
                                             (or (getf guest :|called-by|) "")
                                             (getf guest :|surname|))) 
                                     (getf (read-invoice invoice) :guests))
                     (recall-invoice-link invoice)
                     (itinerary/text invoice))))

      (t (list :data (read-invoice invoice))))))

(defmethod handle-verb ((verb (eql :resend-suspended)))
  (let ((invoice (ignore-errors (parse-integer (field :invoice) :radix 36)) )
        (admin-key (field :admin-key))
        (user-key (field :verify)))
    (format *trace-output* "~&Requested resend of invoice ~a ~@[as admin~]"
            invoice admin-key)
    (cond
      ((not invoice)
       '(:error 404 "No invoice number supplied"))
      
      ((not (equal user-key (user-key invoice)))
       (whine "~&Recall refused; mismatched user-key (got ~a) for invoice ~:d" user-key invoice)
       '(:error 403 "Authorization refused. You cannot view the requested resource."
         "Please ensure that you copied and pasted the entire link, without spaces."))
      ((and admin-key
            (not (equal admin-key (admin-key invoice))))
       (whine "~&Recall refused; mismatched admin-key (got ~a) for invoice ~:d" admin-key invoice)
       '(:error 403 "Authorization refused. You cannot view the requested resource."
         "Please ensure that you copied and pasted the entire link, without spaces."))
      
      (t
       (let ((completedp (getf (read-general invoice) :|closed|)))
         (cond (completedp
                (mail-registrar-completed-invoice invoice)
                (mail-user-completed-invoice invoice))
               (t
                (mail-registrar-suspended-invoice invoice)
                (mail-user-suspended-invoice invoice)))
         (list :raw 
               (format nil "Content-Type: text/plain; charset=utf-8

Resending e-mails for ~:[suspended~;completed~] invoice ~:d

" invoice completedp)))))))

(defun dispatch ()
  (format *trace-output* "~& DISPATCH:  verb = ~a~%" (field :verb))
  (handle-verb (make-keyword (string-upcase (field :verb)))))

(defun numeric (x)
  (etypecase x
    (number x)
    (string (parse-decimal x))))

(defun admin-key (invoice)
  (when invoice
    (let ((numberish (36r (logxor (numeric invoice) #x872))))
      (when (/= (* 2 (floor (length numberish) 2))
                (length numberish))
        (setf numberish (concatenate 'string (subseq numberish 0 1)
                                     "/" (subseq numberish 1))))
      (let ((half (floor (length numberish) 2)))
        (coerce (loop for i from half downto 0
                   collect (char numberish (- (length numberish) i 1))
                   collect (char numberish i))
                'string)))))

(defun user-key (invoice)
  (when invoice
    (let ((numberish (format nil "teg~36rfpg" (logxor (numeric invoice) #xbeef))))
      (when (/= (* 2 (floor (length numberish) 2))
                (length numberish))
        (setf numberish (concatenate 'string (subseq numberish 0 1)
                                     "/" (subseq numberish 1))))
      (let ((half (floor (length numberish) 2)))
        (coerce (loop for i from 0 upto half
                   collect (char numberish (- (length numberish) i 1))
                   collect (char numberish i))
                'string)))))

(defun recall-link (invoice &optional adminp)
  (format nil "~a~a?verb=recall&invoice=~36r~@[&admin-key=~a~]&verify=~a"
          +host-name+
          +url-prefix+
          invoice
          (when adminp
            (admin-key invoice))
          (user-key invoice)))

(defun herald-fcgi (req)
  (let ((*cgi* :fast)
        (*request* req)
        (*trace-output* *error-output*))
    (block fastcgi
      (handler-case
          (dispatch)
        (error (c)
          (reply `(:error 500 ,c))
          (fresh-line *error-output*)
          (format *error-output* "~a" c)
          (uiop/image:print-condition-backtrace c :stream *error-output*)
          (mail-reg +sysop-mail+ (format nil "Herald error: ~a" (princ-to-string c))
                    (format nil "Error/~a" (string (type-of c)))
                    "~a~2%~a"
                    (princ-to-string c)
                    (with-output-to-string (s) (uiop/image:print-condition-backtrace c :stream s)))
          (return-from fastcgi nil))))))

(defun remote-user ()
  (format nil "~{~@[~a~]@~{~a=~a:~a~}~}"
          (let ((env (cgi-environment)))
            (list (let ((user (getf env :remote-user)))
                    (when (and user (plusp (length user))) user))
                  (mapcar (curry #'getf env) '(:remote-host :remote-addr :remote-port))))))

(defun cgi-environment ()
  (mapcan (lambda (env-var)
            (list env-var
                  (uiop/os:getenv (substitute #\_ #\- (string env-var)))))
          '(:document-root :http-cookie :http-host
            :http-referer :http-user-agent :https
            :path :query-string :remote-addr
            :remote-host :remote-port :remote-user
            :request-method :request-uri :script-filename
            :script-name :server-admin :server-name
            :server-port :server-software)))

(defun cgi-error-reporter (c)
  (fresh-line *error-output*)
  (warn "~10% --- Error signaled: ~a ---~10%" c)
  (uiop/image:print-condition-backtrace c :stream *error-output*)
  (format *error-output* "~10%")
  (throw 'cgi-bye (list :error 500 c)))

(defun cgi-call (fun)
  (let ((*cgi* :cgi)
        (*request* (cgi-environment))
        (*trace-output* *error-output*))
    (reply (catch 'cgi-bye
             (handler-bind
                 ((error #'cgi-error-reporter))
               (funcall fun))))))



(defun make-self-url (verb &rest more)
  (format nil "~a~a?verb=~a~@[?~{~a=~a~^&~}~]"
          +host-name+
          +url-prefix+
          (url-encode verb)
          (mapcar #'url-encode more)))

(defun currency-symbol (currency-code)
  (cond
    ((equal currency-code "USD") "$")
    ((equal currency-code "EUR") "€")
    ((equal currency-code "JPY") "¥")
    ((equal currency-code "UKP") "£")
    (t "¤")))

(defun print-receipt-happy (amount currency-code token result)
  (format nil "Content-Type: text/html; charset=utf-8

<!DOCTYPE html>
<html>
 <head>
  <title> Payment Received </title>
  <link rel=\"stylesheet\" href=\"/reg/style.css\">
 </head>
 <body>
  <h1> Payment Received </h1>
  <p> Your payment has been received, and your registration is now
     complete. </p>
  <p> Payment amount: ~a~@[~a~]~:d.~2,'0d </p>
  <p> Invoice token: ~:d </p>
  <p> Result: ~a </p>
 </body>
</html>
"
          currency-code
          (currency-symbol currency-code)
          (round amount)
          (multiple-value-bind (dollars cents) (round amount)
            (declare (ignore dollars))
            (round (* 100 cents)))
          token result))

(defun checksum (number)
  (check-type number real)
  (cond
    ((< 9 number) (* 10 number))
    ((> 100 number)
     (checksum (reduce #'+ (map 'vector #'digit-char-p
                                (princ-to-string number)))))
    (t number)))

(defun token->invoice (token)
  (assert (string= "Herald/" token :end1 7 :end2 7))
  (let* ((parts (split-sequence #\/ token))
         (invoice (parse-integer (second parts)))
         (checksum (checksum invoice)))
    (assert (= checksum (parse-integer (third parts))))
    invoice))

(defun invoice->token (invoice)
  (format nil "Herald/~d/~d" invoice (checksum invoice)))

(defun send-mail-about-payment-with-bad-currency
    (destination amount currency-code token result)
  (cl-sendmail:with-email
      (mail destination
            :cc +registrar-mail+
            :bcc +sysop-mail+
            :subject (format nil "Invoice ~a: Incorrect Currency" token)
            :from +herald-mail+
            :other-headers (list (list "References" (concatenate 'string (string token) "." +herald-mail-base+))
                                 '("Organization" "Temple of Earth Gathering, Inc.")
                                 (list "X-Censorius-Herald-Version" (36r +compile-time+)))
            :charset :utf-8
            :type "text" :subtype "plain")
    (format nil  "Hi! This  is the Censorius Herald  program. I'm the software  agent that
helps  out with  Festival registrations.  I was  trying to  process your
payment, but  there's a problem; we  got your money, but  it's kinda the
wrong color.

See, I'm only  set up for US  Dollars, and somehow or other,  I got your
payment confirmation  back from  PayPal as ~a ~a ~:d.  I'm not  really sure
what a “~a” is,  but our Registration staff will probably  want to talk to
you to get this all sorted out.

I've sent  a courtesy copy of  this to Registration, so,  hopefully this
can all get sorted out quickly?

FIXME —  This wasn't sent to  the person trying to  register; you should
look up the invoice to see who it is.

Details: Invoice token ~s;
  result code from PayPal ~s"
            currency-code (currency-symbol currency-code) amount
            currency-code
            token result)))

(defun herald-cgi ()
  (cgi-call #'dispatch))

(defmacro with-sql (&body body)
  `(dbi:with-connection (*db* :mysql ,@herald-db-config:+params+)
     (dbi:with-transaction *db*
       ,@body)))

(defun read-vending (&optional invoice)
  (clojurize-record
  (car (db-query "select * from `invoice-vending` where invoice=?"
                  invoice))))

(defun read-payments (&optional invoice)
  (mapcar #'clojurize-record
          (db-query "select * from `payments` where invoice=?"
                 invoice)))

(defun read-workshops (&optional invoice)
  (declare (ignore invoice)))           ; TODO

(defun read-general (&optional invoice)
  (clojurize-record
  (car (db-query "select * from `invoices` where invoice=?"
                  invoice))))

(defun read-invoice (invoice)
  (list :invoice invoice
        :invoice-token (user-key invoice)
        :guests (read-guests invoice)
        :merch (read-merch invoice)
        :vending (read-vending invoice)
        :workshops (read-workshops invoice)
        :scholarships (read-scholarships invoice)
        :payments (read-payments invoice)
        :general (read-general invoice)))

(defun read-scholarships (invoice)
  (alist-plist 
   (mapcar (lambda (each)
             (cons (make-keyword (getf each :|scholarship|)) (getf each :|amount|))) 
           (db-query "select scholarship, amount from `invoice-scholarships` where invoice=?"
                     invoice))))

(defun read-merch-ordered (invoice)
  (let ((ordered (db-query
                  "select * from `invoice-merch`  where invoice=?"
                  invoice)))
    (loop for item in (remove-duplicates (mapcar #'first ordered))
       collecting (loop for (nil style qty)
                     in (remove-if-not (lambda (row)
                                         (equal (first row) item)) ordered)
                     appending (list style qty)))))

(defun clojurize-record (record)
  (loop for (key value) on record by #'cddr
                 appending (list (make-keyword (field-?-p key)) 
                     (if (and (char= #\? (last-elt (string (field-?-p key))))
                                          (member value '(1 0)))
                                     (case value
                                       (0 :false)
                                       (1 :true))
                                     value))))

(defun read-guests (&optional invoice)
  (when invoice
    (mapcar #'clojurize-record
            (db-query "select * from `invoice-guests` where invoice=?"
                      invoice))))

(defun guests->edn (&optional invoice)
  (format nil "(defonce guests (atom ~/edn/))"
          (coerce (read-guests invoice) 'vector)))

(defun merch->edn (&optional invoice)
  (format nil "(defonce merch (atom {~{:~(~a~) (atom ~/edn/)~}}))"
          (read-merch invoice)))

(defun parse-decimal (string)
  (if (find #\. string)
      (let* ((decimal (search "." string))
             (units (subseq string 0 decimal))
             (fractional (subseq string (1+ decimal)))
             (negativep (eql #\- (elt string 0))))
        (* 1.0
           (+ (parse-integer units)
              (if (plusp (length fractional))
                  (* (parse-integer fractional)
                     (if negativep -1 1)
                     (expt 10 (- (length fractional))))
                  0))))
      (parse-integer string)))

(defun read-merch (&optional invoice)
  (let ((styles (db-query "select * from `merch-styles`"))
        (ordered (db-query "select * from `invoice-merch` where invoice=?" invoice)))
  (loop for row in (db-query "select * from merch")
     collect
       (append row
               (list :styles
                     (coerce
                        (loop for style-row in (remove-if-not (lambda (item) (string-equal item (getf row :|id|))) styles
                                                              :key (rcurry #'getf :|item|))
                           for qty = (let ((order (remove-if-not (lambda (line)
                                                                   (and (string-equal (getf row :|id|) (getf line :|item|))
                                                                        (string-equal (getf style-row :|id|) (getf line :|style|))))
                                                                 ordered))) 
                                       (when order (getf (first order) :|qty|)))
                             #+ (or) (db-query "select * from `merch-styles` where item=?" 
                                                       (getf row :|id|))
                         collect
                             (append style-row (list :|qty| qty)
                                     #+ (or) (list :qty (cadar (db-query "select qty from `invoice-merch` where  invoice=? and item = ? and style = ?"
                                                               invoice (getf row :|id|) (getf style-row :|id|) )))))
                        'vector))))))

(defun prices->edn ()
  (format nil "~%(defonce prices (atom ~/edn/))"
          (read-prices)))

(defun read-prices ()
  (let ((price-list (db-query "select * from prices
where (`starting` is null or `starting` <= date(now()))
   and (ending is null or ending >= date(now()));")))
    (macrolet
        ((with-prices ((&rest symbols) &body body)
           `(let* (,@(mapcar
                      (lambda (symbol)
                        `(,symbol (or (getf (find ',symbol price-list
                                                  :key (rcurry #'getf :|item|)
                                                  :test #'string-equal)
                                            :|price|)
                                      1000)))
                      symbols))
              ,@body)))
      (with-prices (adult-ticket
                    child-ticket week-end-ticket day-pass
                    lugal-so-ticket staff-ticket vendor
                    cauldron-fri-sun cauldron-adult
                    cauldron-child cauldron-under5
                    salad-bar
                    cabin staff-cabin
                    lodge staff-lodge)
        (list :ticket
              (list :adult adult-ticket
                    :child child-ticket
                    :week-end week-end-ticket
                    :day-pass day-pass
                    :lugal-so lugal-so-ticket
                    :staff staff-ticket)
              :vendor vendor
              :cauldron (list  :fri-sun cauldron-fri-sun
                               :adult cauldron-adult
                               :child cauldron-child
                               :under5 cauldron-under5)
              :salad-bar salad-bar
              :cabin (list :regular cabin :staff staff-cabin)
              :lodge (list :regular lodge :staff staff-lodge))))))

(defun next-festival ()
  (let ((next (car (db-query "select season, year, `starting`, `ending` from festivals where `starting` > now()  order by `starting` limit 1"))))
    (list (getf next :|season|)
          (getf next :|year|))))

(defun next-festival-season ()
  (cadar (db-query "select season from festivals where `starting` > now() order by `starting` limit 1")))

(defun next-festival-year ()
  (cadar (db-query "select year from festivals where `starting` > now() order by `starting`  limit 1")))

(defun cl-user::yyyy-mm-dd (stream object colonp atp &rest parameters)
  (declare (ignore colonp atp parameters))
  (format stream "~a" object))

(defun festival->edn ()
  (format nil "(defonce festival (atom ~{{:season ~/edn/ :year ~/edn/ :starting \"~/yyyy-mm-dd/\" :ending \"~/yyyy-mm-dd/\"}~}))"
          (next-festival)))

(defmethod handle-verb ((verb (eql :data)))
  (list :raw (format nil "Content-Type: text/plain; charset=utf-8

(ns censorius.data
    (:require
     [clojure.string :as string]
     [reagent.core :as reagent :refer [atom]]))

~{~a~%~}"
           (list :festival (festival->edn)
                 :guests (guests->edn)
                 :merch (merch->edn)
                 :prices (prices->edn)))))

(defun cgi-debugger (condition wrapper)
  (declare (ignore wrapper))
  (if-let (continue (find-restart 'continue))
    (progn
      (mail-error condition)
      (invoke-restart continue))
    (reply-error condition)))

(defun exec-cgi (command-line)
  (declare (ignore command-line))
  (let ((*debugger-hook* #'cgi-debugger))
    (handler-case
        (with-sql (herald-cgi))
      (error (c) (cgi-debugger c nil)))))

(defun exec-fcgi (command-line)
  (let ((*debugger-hook* #'cgi-debugger))
    (handler-case
        (with-sql (herald-fcgi (first command-line)))
      (error (c) (cgi-debugger c nil)))))

(defun exec-repl (command-line)
  (ql:quickload :prepl)
  (with-sql
      (mapcar (compose #'eval #'read-from-string) command-line)
    (funcall (intern "REPL" :prepl))))

(defmethod handle-verb ((verb (eql :test-error)))
  (list :error 555 "This is a fake error, to test error handling."))

(defmethod handle-verb ((verb (eql :about)))
  (format *error-output* " Herald version is ~36r" +compile-time+)
  (when (field "deployment-marker")
    (format *error-output* "~25%"))
  (list :data (list :program "Censorius Herald"
                    :copyright "© 2013-2015, Bruce-Robert Fenn Pocock"
                    :version (36r +compile-time+)
                    :build-date (let ((built (multiple-value-list (decode-universal-time (+ +compile-time+
                                                                                            +compile-time-offset+)))))
                                  (list (nth 5 built) (nth 4 built) (nth 3 built))))))

(defun init-db ()
  (with-sql
    (dolist (expr '("create table festivals (`starting` date not null unique key,
ending date not null unique key, season varchar(8) not null, year year not null, primary key(season, year))"
                    "create table invoices (invoice serial primary key, created datetime,
closed datetime, `closed-by` text, `old-system-p` boolean not null default false, `festival-season` varchar(8),
 `festival-year` year not null, note text, `signature` varchar(60), memo text,
foreign key (`festival-season`,`festival-year`) references festivals(season,year) on delete restrict)"
                    "create table merch (id varchar(20) primary key, title varchar(100) unique key,
description text, image varchar(100), price decimal(6,2) not null default 9999.99)"
                    "create table `merch-styles` (item varchar(20),
id varchar(6) not null, title varchar(100) not null, inventory integer unsigned  not null default 0,
constraint itemstyle unique(item,id), constraint itemstylename unique(item, title),
foreign key (item) references merch(id) on delete restrict)"
                    "create table prices (`starting` date default null, ending date default null, price decimal (6,2), item varchar(20) not null,
constraint itemstart unique(item, `starting`), constraint itemend unique key(item, ending))"
                    "create table `invoice-merch` (invoice bigint unsigned not null,
 item varchar(20), style varchar(6), qty integer unsigned not null default 1,
unique key(invoice, item, style),
foreign key (invoice) references invoices (invoice))"
                    "create table `invoice-guests` (invoice bigint unsigned not null,
`called-by` varchar(50),
`given-name` varchar(50), surname varchar(50) not null, `formal-name` varchar(100) not null,
`presenter-bio` text, `presenter-requests` text, `e-mail` varchar(200),
telephone varchar(30), sleep varchar(10), eat varchar(10), day varchar(10),
gender char(1), `t-shirt` varchar(8), coffeep boolean, totep boolean,
 `ticket-type` varchar(10) not null default 'adult',
primary key(invoice,`given-name`,`called-by`,surname),
foreign key (invoice) references invoices (invoice))"
                    "create table people (`given-name` varchar(50), `called-by` varchar(50),
surname varchar(50) not null, `formal-name` varchar(100) not null,
dob date, primary key(surname, `called-by`))"
                    "create table `people-href` (surname varchar(50) not null,
`called-by` varchar(50) not null, rel varchar(8), href varchar(255),
foreign key (surname,`called-by`) references people (surname, `called-by`))"
                    "create table `people-phone` (surname varchar(50) not null,
`called-by` varchar(50) not null, rel varchar(8), phone varchar(255),
foreign key (surname,`called-by`) references people (surname, `called-by`))"
                    "create table `people-email` (surname varchar(50) not null,
`called-by` varchar(50) not null, rel varchar(8), email varchar(255),
foreign key (surname,`called-by`) references people (surname, `called-by`))"
                    "create table `people-rel` (`from-surname` varchar(50) not null,
`from-called-by` varchar(50) not null, rel varchar(8), `to-surname` varchar(50) not null,
 `to-called-by` varchar(50) not null,
foreign key (`from-surname`,`from-called-by`) references people (surname, `called-by`),
foreign key (`to-surname`,`to-called-by`) references people (surname, `called-by`),
constraint relates unique  (`from-surname`,`from-called-by`,rel,`to-surname`,`to-called-by`))"
                    "create table `invoice-scholarships` (invoice bigint unsigned not null,
scholarship varchar(10),
amount decimal(6,2), primary key(invoice, scholarship),
foreign key (invoice) references invoices (invoice))"
                    "create table `invoice-vending` (invoice bigint unsigned not null primary key,
title varchar(72),
blurb text, notes text, qty integer unsigned not null default 1, `agreement` boolean,
`mqa-license` varchar(15) null, `bpr-license` varchar(15) null,
foreign key (invoice) references invoices (invoice))"
                    "create table payments (invoice bigint unsigned not null,
via varchar(100), source varchar(200),
amount decimal(6,2), confirmation text, note text, cleared datetime,
 foreign key (invoice) references invoices (invoice) on delete restrict)"))
      (handler-case
          (let* ((query-words (split-sequence #\Space expr))
                 (table-name (nth 2 query-words)))
            (tagbody again
               (restart-case
                   (progn
                     (format t "~&Creating table ~a" table-name)
                     (format t "~& ⇒ ~a" (db-query expr)))
                 (drop-table ()
                   :report (lambda (s)
                             (format s "Drop table ~a and retry" table-name))
                   (format t "~&Dropping table ~a" table-name)
                   (format t "~& ⇒ ~a"
                           (db-query (concatenate 'string "drop table "
                                                  table-name)))
                   (go again))
                 (continue ()))))))
    (loop for year from 2000 upto 2016
       do (loop for (season month) in '(("Beltane" 5)
                                        ("Samhain" 11))
             do (with-simple-restart (skip "Skip this one")
                  (db-query (format nil "insert into festivals (season, year, `starting`,ending) values (?,?,'~a-~d-1','~a-~d-1')"
                                    year month year month)
                            season year))))
    (db-query "alter table invoices auto_increment=4000")
    (loop for (id title description image price styles)
       in '(("general-shirt" "FPG general T-shirt"
             "The FPG general T-shirt" "/merch/tshirt_Gen.png" 15
             (("XS" "Extra-small" 999)
              ("S" "Small" 999)
              ("M" "Medium" 999)
              ("L" "Large" 999)
              ("XL" "Extra-large" 999)
              ("X2L" "Double extra-large" 999)
              ("X3L" "Triple extra-large" 999)
              ("X4L" "Quadruple extra-large" 999)
              ("X5L" "Quintuple extra-large" 999)))
            ("tote-bag" "FPG Tote Bag"
             "FPG Tote Bag" "/merch/tote-bag.jpeg" 10
             (("tote" "Tote Bag" 999)))
            ("coffee" "FPG Coffee Mug"
             "The FPG thermal coffee mug is great for other beverages, too" 5
             (("coffee" "Coffee mug" 999)))
            ("festival-shirt" "Festival T-shirt"
             "The new T-shirt for the next festival" "/merch/tshirt_next.png" 15
             (("XS" "Extra-small" 999)
              ("S" "Small" 999)
              ("M" "Medium" 999)
              ("L" "Large" 999)
              ("XL" "Extra-large" 999)
              ("X2L" "Double extra-large" 999)
              ("X3L" "Triple extra-large" 999)
              ("X4L" "Quadruple extra-large" 999)
              ("X5L" "Quintuple extra-large" 999))))
       do (db-query "insert into merch (id, title, description, image) values (?,?,?,?)"
                    id title description image)
       do (db-query "insert into prices (item, price) values (?,?)" id price)
       do (loop for (style-id style-title inventory) in styles
             do (db-query "insert into `merch-styles` (item, id, title, inventory) values (?,?,?,?)"
                          id style-id style-title inventory)))))


(defun herald-user-agent (&optional (drakma-ua-key :drakma))
  (concatenate 'string
               (drakma::user-agent-string drakma-ua-key)
               " "
               "Herald/" (36r +compile-time+)))

(defun paypal-get-oath2-token ()
  (multiple-value-bind (response-body http-status-code response-headers uri stream happiness http-status-string )
      (drakma:http-request
       "https://api.sandbox.paypal.com/v1/oauth2/token"
       :method :post
       :additional-headers '(("Accept" ."application/json")
                             ("Accept-Language". "en_US"))
       :basic-authorization (list (paypal-client-id) (paypal-secret))
       :parameters '(("grant_type". "client_credentials")))
    (declare (ignore response-headers stream happiness))
    (format *error-output* "~& $$$$ PayPal OAuth2 token acquired: status=~a (from ~a)" http-status-string uri)
    (unless (> 400 http-status-code) 
      (throw 'cgi-bye (list http-status-code
                            (format nil
                                    "PayPay responded to OAth2 token with (code ~d): ~a"
                                    http-status-code http-status-string))))
    (let ((jso (st-json:read-json (flexi-streams:octets-to-string response-body))))
      (assert (string-equal "Bearer" (st-json:getjso "token_type" jso)) ()
              "I require a Bearer token to access PayPal, but got ~a" (st-json:getjso "token_type" jso))
      (assert (string-equal (paypal-app-id) (st-json:getjso "app_id" jso)) ()
              "PayPal gave me a token for some other application. Huh?")
      (values (st-json:getjso "access_token" jso)
              (st-json:getjso "nonce" jso)
              (st-json:getjso "expires_in" jso)))))

(defun paypal-demand-payment (amount)
  (multiple-value-bind (response-body http-status-code response-headers uri stream happiness http-status-string )
      (drakma:http-request 
       "https://api.sandbox.paypal.com/v1/payments/payment"
       :method :post
       :additional-headers `(("Content-Type" . "application/json")
                             ("Authorization" . ,(concatenate 'string "Bearer " (paypal-get-oath2-token))))
       :content (format nil "~/json/"
                        `(:intent "sale"
                                  :redirect_urls (:return_url ,(make-self-url "paypal-return")
                                                              :cancel_url ,(make-self-url "paypal-cancel"))
                                  :payer (:payment_method "paypal")
                                  :transactions #( (:amount (:total ,(format nil "~,2f" (* .01 (round amount .01)))
                                                             :currency "USD")
                                                    :description ,(format nil "TEG FPG ~{~a ~a~} Registration $ ~,2f (~r dollars and ~r cents)"
                                                                          (next-festival)
                                                                          (* .01 (round amount .01))
                                                                          (floor amount)
                                                                          (multiple-value-bind (dollars cents)
                                                                              (floor amount)
                                                                            (declare (ignore dollars))
                                                                            (round cents .01))))))))
    (declare (ignore response-headers stream happiness))
    (format *error-output* " $$$$ PayPal at ~a reports HTTP/~d (~a) demanding payment of $ ~,2f~2%~a"
            uri http-status-code http-status-string amount
            (flexi-streams:octets-to-string response-body))
    (unless (> 400 http-status-code) 
      (throw 'cgi-bye (list http-status-code
                            (format nil
                                    "PayPal responded to payment request for $ ~,2f with (code ~d): ~a"
                                    (* .01 (round amount .01)) http-status-code http-status-string))))
    (let ((jso (st-json:read-json (flexi-streams:octets-to-string response-body))))
      (let* ((id (st-json:getjso "id" jso))
             (links (mapcar (lambda (link)
                              (list (st-json:getjso "rel" link)
                                    (st-json:getjso "method" link)
                                    (st-json:getjso "href" link))) (st-json:getjso "links" jso)))
             (approval-href (cdr (find "approval_url" links :key #'car :test #'string-equal)))
             (capture-href (cdr (find "execute" links :key #'car :test #'string-equal))))
        (values id approval-href capture-href)))))

(defun paypal-get-payment-status (payment-id)
  (multiple-value-bind (response-body http-status-code response-headers uri stream happiness http-status-string )
      (drakma:http-request 
       (concatenate 'string "https://api.sandbox.paypal.com/v1/payments/payment/" payment-id)
       :method :get
       :additional-headers `(("Content-Type" . "application/json")
                             ("Authorization" . ,(concatenate 'string "Bearer " (paypal-get-oath2-token)))))
    (declare (ignore response-headers stream happiness))
    (format *error-output* "~& $$$$ PayPal at ~a reports HTTP/~d (~a) reading payment status with ID ~a~2%~a"
            uri http-status-code http-status-string payment-id 
            (flexi-streams:octets-to-string response-body))
    (let* ((reply (flexi-streams:octets-to-string response-body))
           (jso (st-json:read-json reply))
           (payer (st-json:getjso "payer" jso))
           
           (payment (st-json:getjso "id" jso))
           (cart (st-json:getjso "cart" jso))           
           (create_time (st-json:getjso "create_time" jso))
           (update_time (st-json:getjso "update_time" jso))
           
           (payer/payment_method (st-json:getjso "payment_method" payer))
           (payer/status (st-json:getjso "status" payer))
           (payer/email (st-json:getjso "email" payer))
           (payer/first_name (st-json:getjso "first_name" payer))
           (payer/last_name (st-json:getjso "last_name" payer))
           (payer_id (st-json:getjso "payer_id" payer))
           
           (payer-info (st-json:getjso "payer_info" payer))
           (shipping (st-json:getjso "shipping_address" payer-info))
           (ship_to_name (st-json:getjso "recipient_name" shipping))
           (ship_to_line_1 (st-json:getjso "line1" shipping))
           (ship_to_line_2 (st-json:getjso "line2" shipping))
           (ship_to_city (st-json:getjso "city" shipping))
           (ship_to_state (st-json:getjso "state" shipping))
           (ship_to_postal_code (st-json:getjso "postal_code" shipping))
           (ship_to_country_code (st-json:getjso "country_code" shipping))
           (phone (st-json:getjso "phone" payer))
           (phone_country_code (st-json:getjso "country_code" payer))
           
           (billing (st-json:getjso "billing_address" payer-info))
           (bill_to_line_1 (when billing (st-json:getjso "line1" billing)))
           (bill_to_line_2 (when billing (st-json:getjso "line2" billing)))
           (bill_to_city (when billing (st-json:getjso "city" billing)))
           (bill_to_state (when billing (st-json:getjso "state" billing)))
           (bill_to_postal_code (when billing (st-json:getjso "postal_code" billing)))
           (bill_to_country_code (when billing (st-json:getjso "country_code" billing)))
           
           (transaction (first (st-json:getjso "transactions" jso)))
           (payment_amount (st-json:getjso "total" (st-json:getjso "amount" transaction)))

           (links (st-json:getjso "links" jso))
           (approval_url (st-json:getjso "href" (find "approval_url" links
                                                      :test #'string=
                                                      :key (curry #'st-json:getjso "rel"))))
           (execute_url (st-json:getjso "href" (find "execute" links
                                                     :test #'string=
                                                     :key (curry #'st-json:getjso "rel")))))
      (warn "Updating status in database")
      (if (cadar (db-query "select 1 from `paypal-payment-metadata` where payment = ?"
                           payment))
          (db-query
           "update  `paypal-payment-metadata`  set  cart = ?, `payer/payment_method`  = ?, `payer/status`   = ?,
`payer/email`  = ?, `payer/first_name`    = ?, `payer/last_name`    = ?, payer_id    = ?,
ship_to_name    = ?, ship_to_line_1     = ?, ship_to_line_2    = ?, ship_to_city   = ?,
ship_to_state   = ?, ship_to_postal_code   = ?, ship_to_country_code    = ?, phone    = ?,
phone_country_code    = ?, bill_to_line_1     = ?,  bill_to_line_2    = ?,
bill_to_city   = ?, bill_to_state   = ?, bill_to_postal_code   = ?, bill_to_country_code   = ?,
payment_amount    = ?, create_time   = ?, update_time   = ?, approval_url   = ?,
execute_url =?
 where payment = ?"
           cart  payer/payment_method payer/status 
           payer/email payer/first_name   payer/last_name  payer_id   
           ship_to_name  ship_to_line_1  ship_to_line_2  ship_to_city  
           ship_to_state ship_to_postal_code        ship_to_country_code       phone
           phone_country_code              bill_to_line_1 bill_to_line_2   
           bill_to_city          bill_to_state   bill_to_postal_code   bill_to_country_code   
           payment_amount create_time update_time approval_url 
           execute_url
           payment)
          (db-query
           "insert  into  `paypal-payment-metadata`   (  
payment, cart, `payer/payment_method` , `payer/status`  , `payer/email` , `payer/first_name`   ,
  `payer/last_name`   , payer_id   , ship_to_name   , ship_to_line_1    , ship_to_line_2   , ship_to_city  ,
   ship_to_state  , ship_to_postal_code  , ship_to_country_code   ,
  phone   , phone_country_code   , bill_to_line_1    , bill_to_line_2   , bill_to_city  ,
   bill_to_state  , bill_to_postal_code  , bill_to_country_code  ,
  payment_amount   , create_time  , update_time  , approval_url  , execute_url  )
values  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )"
           payment cart  payer/payment_method payer/status payer/email payer/first_name   payer/last_name  payer_id   ship_to_name
           ship_to_line_1  ship_to_line_2  ship_to_city  ship_to_state ship_to_postal_code        ship_to_country_code       phone
           phone_country_code              bill_to_line_1 bill_to_line_2          bill_to_city          bill_to_state
           bill_to_postal_code   bill_to_country_code   payment_amount create_time update_time approval_url execute_url))
      (db-query "update `paypal-payment-metadata` set raw = concat (coalesce(raw,'*'), concat ('\\n\\n**\\n\\n', ?))"
                reply)
      (db-query "insert into payments (invoice, via, source, amount, confirmation, note, cleared) values (?, ?, 'PayPal', ?, 'Paid by ' || ? || ' ' || ? || ' <' || ? || '>', 'NOW')"
                (payment-id->invoice payment-id) payment-id payment_amount payer/first_name payer/last_name payer/email)
      jso)))

(defun paypal-capture-payment (payment-id token payer-id)
  (declare (ignore token))
  (multiple-value-bind (response-body http-status-code response-headers uri stream happiness http-status-string )
      (drakma:http-request 
       (concatenate 'string "https://api.sandbox.paypal.com/v1/payments/payment/" payment-id "/execute")
       :method :post
       :additional-headers `(("Content-Type" . "application/json")
                             ("Authorization" . ,(concatenate 'string "Bearer " (paypal-get-oath2-token))))
       :content (format nil "~/json/" `(:payer_id payer-id)))
    (declare (ignore response-headers stream happiness))
    (format *error-output* "~& $$$$ PayPal at ~a reports HTTP/~d (~a) capturing payment with ID ~a (payer ~a)~2%~a"
            uri http-status-code http-status-string payment-id payer-id
            (flexi-streams:octets-to-string response-body))
    (unless (> 400 http-status-code)
      (throw 'cgi-bye (list http-status-code
                            (format nil "PayPay responded to payment capture operation with (code ~d): ~a"
                                    http-status-code http-status-string))))
    (let ((jso (st-json:read-json (flexi-streams:octets-to-string response-body))))
      jso)))

;;;Get payment approval

;; Please note the HATEOAS links  in the example above. Direct the user to the approval_url  on the PayPal site, so that
;; the user can  approve the payment. The user  must approve the payment  before you can execute and  complete the sale.

;; Execute the payment

;; When the user approves the  payment, PayPal redirects the user to the return_url that  was specified when the payment
;; was created. A payer Id and payment Id are appended to the return URL, as PayerID and paymentId:

;; http://<return_url>?paymentId=PAY-6RV70583SB702805EKEYSZ6Y&token=EC-60U79048BN7719609&PayerID=7E7MGXCWTTKK2

;; The token value appended to the return URL is not needed when you execute the payment.

;; To execute the payment after the user’s approval, make a  /payment/execute/ call. In the body of the request, use the
;; payer_id value  that was appended  to the return  URL. In  the header, use  the access token  that you used  when you
;; created the payment.

;; curl -v https://api.sandbox.paypal.com/v1/payments/payment/PAY-6RV70583SB702805EKEYSZ6Y/execute/ \
;; -H 'Content-Type: application/json' \
;; -H 'Authorization: Bearer {accessToken}' \
;; -d '{ "payer_id" : "7E7MGXCWTTKK2" }'

(defun recall-invoice-link (invoice &optional adminp)
  (format nil "~a/reg/#/recall/~36r/~a~@[/~a~]"
          +host-name+
          (princ-to-string invoice)
          (url-encode (user-key invoice))
          (when adminp
            (url-encode (admin-key invoice)))))

(defun redirect-to-invoice (invoice &optional adminp)
  (throw 'cgi-bye
    (list :raw (format nil "Status: 301 Time to go back
Location: ~a

~0@* go back to ~a"
                       (recall-invoice-link invoice adminp)))))

(defun payment-id->invoice (payment-id)
  (cadar (db-query "select invoice from payments where source='PayPal' and via=?" payment-id)))

(defmethod handle-verb ((verb (eql :paypal-return)))
  (let* ((payment-id (field "paymentId"))
         (invoice (payment-id->invoice payment-id))
         (payer-id (field "PayerID"))
         (token (field "token")))
    (assert (and payment-id payer-id token))
    ;; (paypal-capture-payment payment-id token payer-id)
    (paypal-get-payment-status payment-id)
    (redirect-to-invoice invoice)))

(defmethod handle-verb ((verb (eql :paypal-cancel)))
  (redirect-to-invoice (payment-id->invoice (field "paymentId"))))

(defun invoice-total ()
  (field 'money 'balance-due))

(defun record-payment-demand (invoice-id amount paypal-id)
  (db-query
   "insert into payments (invoice, via, source, amount, confirmation, note, cleared)
values (?, ?, 'PayPal', ?, null, 'requested (not yet received)', 'now')"
   invoice-id
   paypal-id
   (- amount))) 

(defun user-wants-to-pay (invoice total)
    (multiple-value-bind (id approval-href capture-href)
        (paypal-demand-payment total)
      (declare (ignore capture-href))
      (record-payment-demand invoice total id)
    (list :invoice invoice 
          :token (user-key invoice)
          :next-hop (second approval-href))))

(defmethod handle-verb ((verb (eql :pay)))
  (let* ((invoice (field :invoice))
         (total (invoice-total)))
    (setf invoice (getf (save-invoice) :invoice))
    (throw 'cgi-bye (list :data (user-wants-to-pay invoice total)))))

(defun record-payment-captured (payment-id payer-id token)
  (db-query "insert into payments (invoice, via, source, amount, confirmation, note, cleared)
values (?, ?, 'PayPal', ?, payment-id, 'Paid via PayPal, token ' || ? || ' payer ID ' || ?, true"
            (payment-id->invoice payment-id) 
            payment-id
            (cadar (db-query "select - amount from payments where via=?" payment-id))
            token
            payer-id))
