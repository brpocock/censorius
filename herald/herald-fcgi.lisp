(eval-when (:compile-toplevel :load-toplevel :execute)
  (mapcar #'ql:quickload '(:alexandria
                           :cl-paypal
                           :cl-ppcre
                           :cl-sendmail
                           :com.informatimago.common-lisp.rfc2822
                           :flexi-streams
                           :memoize
                           :split-sequence
                           :dbd-mysql
                           :st-json
                           #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi)))

(require :alexandria)
(require :cl-paypal)
(require :cl-ppcre)
(require :cl-sendmail)
(require :com.informatimago.common-lisp.rfc2822)
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
 • Compile-time version marker: ~36r~2%"
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
          +compile-time+))


(defvar *accepted-currency* "USD")

(eval-when (:compile-toplevel :load-toplevel :execute)
  (load (make-pathname :name "paypal-secrets"
                       :defaults (user-homedir-pathname))))


(defparameter *read-post-max* 4000000
  "The maximum number of characters to allow to be read from a POST")

(defparameter *read-post-buffer-start* 4000)
(defparameter *read-post-buffer-grow* 4000)



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

(defun field (field-name &optional f2 f3)
  "Get the  contents of  the named form-field.  (Accepted as  a keyword,
which  will  be downcased,  or  a  string,  which will  be  searched-for
literally. Thus,  to get a field  with capital letters in  the name, you
must use a string.)"
  (cond
    ((and f3
          (stringp field-name)
          (numberp f2)
          (stringp f3))
     (when-let (field-jso (field (make-keyword (string-upcase field-name))))
       (when-let (st-jso (st-json:read-json field-jso))
         (when-let (elt (elt st-jso f2))
           (st-json:getjso f3 elt)))))
    
    ((and f3
          (or (symbolp field-name) (stringp field-name))
          (numberp f2)
          (or (symbolp f3) (stringp f3)))
     (field (string-downcase (string field-name)) f2 (string-downcase (string f3))))
    
    ((and f2
          (stringp field-name)
          (stringp f2))
     (when-let (field-jso (field (make-keyword (string-upcase field-name))))
       (when-let (st-jso (st-json:read-json field-jso))
         (st-json:getjso f2 st-jso))))
    
    ((and f2
          (or (symbolp field-name) (stringp field-name))
          (or (symbolp f2) (stringp f2)))
     (field (string-downcase (string field-name)) (string-downcase (string f2))))
    
    ((or f2 f3)
     (error "Invalid field selector ~s ~s ~s" field-name f2 f3))
    
    ((symbolp field-name)
     (ecase *cgi*
       (:fast (fcgx-getparam field-name *request*))
       (:cgi (getf (query-params) field-name))))
    
    ((stringp field-name)
     (field (make-keyword (string-upcase field-name))))))

(defun reply-error/text (conditions)
  "Replies with a plain-text error report. The first element of the list
must be the numeric HTTP status code."
  (list :raw
        (format nil
                "Status: ~d Error reported~%Content-Type:text/plain; charset=utf-8~2%~:*HTTP Error ~d~2%~{~a~2%~}~2%~a~2%"
                (first conditions)
                (mapcar #'princ-to-string (rest conditions))
                (with-output-to-string (s)
                  (dolist (condition conditions)
                    (if (typep condition 'condition)
                        (uiop/image:print-condition-backtrace condition :stream s)
                        (princ condition s)))))))

(defun sql-escape (string)
  "Simply replaces  ' with  '' in  strings (that's  paired/escape single
quotes)"
  (regex-replace-all "\\'" string "''"))

(defun cl-user::sql (stream object colonp atp &rest parameters)
  "FORMAT ~/SQL/ printer. Handles  strings, integers, and floating-point
real numbers."
  (assert (not colonp) () "The colon modifier is not used for ~~/SQL/")
  (assert (not atp) () "The @ modifier is not used for ~~/SQL/")
  (assert (null parameters) () "~~/SQL/ does not accept parameters; saw ~s" parameters)
  (case object
    (:null (princ "NULL" stream))
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
                   (string (prin1 object stream))
                   (integer (prin1 object stream))
                   (real (prin1 (* 1.0 object) stream))
                   (vector (format stream "[~{~/json/~^, ~}]" (coerce object 'list)))
                   (list (if (and (evenp (length object))
                                  (every #'keywordp (loop for (key value) on object by #'cddr
                                                       collecting key)))
                             (format stream (concatenate 'string "{~{~/json/: ~/json/~^,~%" *json-pretty-indent* "~}}") object)
                             (format stream "~/json/" (coerce object 'vector)))))))))

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
  (if (consp thing)
      (simply$ (car thing))
      (princ-to-string thing)))

(defun mail-error (condition)
  (mail-reg +sysop-mail+
            :cc +herald-mail+
            :subject (concatenate 'string "[herald-error] " (let ((condition$ (format nil "~a" condition)))
                                                              (subseq condition$ 0 (min (length condition$)
                                                                                        40))))
            :from +herald-mail+
            :other-headers (list (list "References" (concatenate 'string "condition."
                                                                 (simply$ (type-of condition))
                                                                 "." +herald-mail-base+))
                                 '("Organization" "Temple of Earth Gathering, Inc.")
                                 (list "X-Censorius-Herald-Version" (format nil "~36r" +compile-time+)))
            :charset :utf-8
            :type "text" :subtype "plain"
            "A condition of type ~a was signaled.

~a

Query params:
~s

Backtrace:
~{~% → ~a~}

\(end of line)"
            (type-of condition)
            (or condition "Ø")
            (ignore-errors (query-params)))
  (with-output-to-string (s)
    (uiop/image:print-condition-backtrace condition :stream s)))

(defun reply-error/html (conditions)
  (list :raw
        (format nil "Status: ~d Error reported
Content-Type:text/html; charset=utf-8

<!DOCTYPE html>
<html>
  <title> HTTP Error ~:*~d </title>
  <link rel=\"stylesheet\" href=\"/reg/css/style.css\" >
</head>
<body>

<h1>An Error Occurred (type ~:*~d)</h1>

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
                (first conditions)
                (rest conditions)
                *cgi*
                +compile-time+
                (first (split-sequence
                        #\>
                        (second (split-sequence
                                 #\<
                                 +sysop-mail+)))))))

(defun reply-error/json (conditions)
  (list :raw
        (format nil "Status: ~d Error reported
Content-Type: text/javascript; charset=utf-8~2%~/json/~%"
                (first conditions)
                (list :this-is-an-error t
                      :error (first conditions)
                      :conditions conditions
                      :service *cgi*
                      :herald-version (format nil "~36r" +compile-time+)
                      :you-said *request*))))

(defun reply-error (conditions)
  (reply (cond ((accept-type-p "text/html") (reply-error/html conditions))
               ((accept-type-p "text/javascript") (reply-error/json conditions))
               (t (reply-error/text conditions))))
  (when (and (numberp (first conditions))
             (<= 400 (first conditions)))
    (format *trace-output* "ERROR condition: ~{~a~^  ~}" conditions)
    (map nil #'mail-error (rest conditions))))

(defun reply (structure)
  (format *trace-output* "~& Reply generated: ~s" structure)
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
      (mail-reg destination
                :bcc +sysop-mail+
                :cc +archive-mail+
                :subject subject
                :from +herald-mail+
                :other-headers (list (list "References" (concatenate 'string (string reference) "." +herald-mail-base+))
                                     '("Organization" "Temple of Earth Gathering, Inc.")
                                     (list "X-Censorius-Herald-Version" (format nil "~36r" +compile-time+)))
                :charset :utf-8
                :type "text" :subtype "plain")
    (apply (curry #'format mail-reg) message-fmt+args)))

(defun mail-to-user (invoice)
  (getf (or (first (remove-if-not (lambda (guest)
                                    (and (getf guest :|e-mail|)
                                         (plusp (length (getf guest :|e-mail|)))
                                         (string-equal "adult"(getf guest :|ticket-type|))))
                                  (read-guests invoice)))
            (list :|e-mail| +registrar-mail+))
        :|e-mail|))

(defun db-query (query &rest args)
  (format *trace-output* "~& [SQL] ~s ~s" query args)
  (dbi:fetch-all (apply #'dbi:execute (dbi:prepare *db* query) args)))

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

Payment was confirmed by PayPal.

———

This eMail was composed by your faithful, robotic Herald. Replying will
not do any good; I am a lowly robot without the ability to read
eMails. If this looks like a software problem, you might contact my
operator:

~a
"
            invoice
            (recall-link invoice t)
            +sysop-mail+))

(defun mail-user-completed-invoice (invoice
                                    &optional
                                      (guests (read-guests invoice))
                                      (vending (read-vending invoice))
                                      (merch (read-merch invoice))
                                      (workshops (read-workshops invoice)))
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

                           → Your Itinerary ←

~a Party — of ~r Guest~:p
~{~2%Guest's name: ~a~@[ “~a”~] ~a~
~@[~%Phone number: ~a~]~
~@[~%eMail address: <~a>~]~
~%Ticket type: ~a~
~@[Eating on the ~:(~a~) meal plan~]~
~%~:[Tent camping~;Staying in a ~:(~a~) bunk~]~
~@[~%T-shirt, size ~:@(~a~)~]~
~:[~;~%FPG Coffee Mug~]~
~:[~;~%FPG Tote Bag~]~}
~@[~2%Extras purchased:
~{~{~% Item ~:(~a~), style ~:@(~a~); qty. ~:d~}~}
~@[~2%Vendor's Row:
~{Booth named: “~a” (10´×~d0´)
Description:
~a
~}~]
~@[~2%Workshops:
~{~%“~a,” presented by ~a;~%~a~%~}~]

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
            +registrar-mail+
            (third (first guests)) (length guests)
            guests merch vending workshops
            +compile-time+))


(defun mail-registrar-suspended-invoice (invoice)
  (mail-reg +registrar-mail+ "SUSPENDED TEG FPG Registration"
            (format nil "Invoice.~d." invoice)
            "
Invoice # ~:d has been suspended by the user. Please visit the
Herald program at this link:

~a

…to review the registration and make any necessary corrections.

———

This eMail was composed by your faithful, robotic Herald. Replying will
not do any good; I am a lowly robot without the ability to read
eMails. If this looks like a software problem, you might contact my
operator:

~a
"
            invoice
            (recall-link invoice t)
            +sysop-mail+))

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
            +registrar-mail+
            (recall-link invoice)
            +compile-time+))

(defun verify-json-fields (table row &optional columns)
  (if columns
      (let ((rows (st-json:read-json (field table))))
        (when (< row (length rows))
          (when-let (row-jso (elt rows row))
            (st-json:mapjso (lambda (key value)
                              (unless (member key columns :test #'string-equal)
                                (warn "JSO for ~a row ~d has unexpected key ~a (value ~s)"
                                      table row key value)))
                            row-jso))))
      (let ((columns row))
        (when-let (jso (st-json:read-json (field table)))
          (st-json:mapjso (lambda (key value)
                            (unless (member key columns :test #'string-equal)
                              (warn "JSO for ~a has unexpected key ~a (value ~s)"
                                    table key value)))
                          jso)))))

(defmacro sql-insert-invoice-fields
    ((table) (&body columns))
  `(progn
     (verify-json-fields ',(or table :general) ',columns)
     (db-query
      (format nil
              "insert into `invoice~:[s~;-~:*~(~a~)~]` (invoice, ~{`~(~a~)`~^, ~}) values (~/sql/, ~{~/sql/~^, ~})"
              ,(when table `',table)
              (list ,@(loop for column in columns
                         collecting (string column)))
              invoice
              (list ,@(loop for column in columns
                         collecting `(field ',(or table :general) ',column)))))))

(defmacro sql-update-invoice-fields
    ((table) (&body columns))
  `(progn
     (verify-json-fields ',(or table :general) ',columns)
     (db-query
      (format nil
              "update `invoice~:[s~;-~:*~(~a~)~]` set ~{ `~(~a~)` = ~/sql/ ~^, ~} where invoice=~/sql/"
              ,(when table `',table)
              (list ,@(loop for column in columns
                         collect (string column)
                         collect `(field ',(or table :general) ',column)))
              invoice))))

(defmacro sql-insert-invoice-array
    ((table) (&body columns))
  `(loop for row below (length (st-json:read-json (field ,(string table))))
      do (verify-json-fields ',(or table :general) row ',columns)
      do (db-query
          (format nil
                  "insert into `invoice-~(~a~)` (invoice, ~{`~(~a~)`~^, ~}) values (~/sql/, ~{~/sql/~^, ~})"
                  ',table
                  (list ,@(loop for column in columns
                             collecting (string column)))
                  invoice
                  (list ,@(loop for column in columns
                             collecting `(field ',(or table :general) row ',column)))))))

(defmacro sql-update-invoice-array
    ((table) (&body columns))
  `(loop for row below (length (st-json:read-json (field ,(string table))))
      do (verify-json-fields ',(or table :general) row ',columns)
      do (db-query
          (format nil
                  "update `invoice-~(~a~)`  set ~{ `~(~a~) = ~/sql/~^, ~} where invoice=~/sql/ "
                  ',table
                  (list ,@(loop for column in columns
                             collecting (string column)
                             collecting `(field ',(or table :general) row ',column)))
                  invoice))))

(defun update-general (invoice)
  (sql-update-invoice-fields (nil)
                             (note signature)))

(defun accept-guests (invoice)
  (sql-insert-invoice-array (guests)
                            (called-by given-name surname formal-name
                                       presenter-bio presenter-requests
                                       e-mail telephone
                                       sleep eat day gender
                                       t-shirt coffeep totep ticket-type)))
(defun accept-extras (invoice)
  (sql-insert-invoice-array (merch)
                            (item style qty)))

(defun accept-vendor (invoice)
  (let ((qty (field "vendor" "qty")))
    (when (and qty (plusp qty))
      (sql-insert-invoice-fields (vending)
                                 (blurb notes qty agreement-p)))))
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
                  invoice scholarship donation)))

(defun update-guests (invoice)
  (sql-update-invoice-array (guests)
                            (called-by given-name surname formal-name
                                       presenter-bio presenter-requests
                                       e-mail telephone
                                       sleep eat day gender
                                       t-shirt coffeep totep ticket-type)))
(defun update-extras (invoice)
  (sql-update-invoice-array (merch)
                            (item style qty)))

(defun update-vendor (invoice)
  (let ((qty (or (field "vending" "qty") 0)))
    (sql-update-invoice-fields (vending)
                               (blurb notes qty agreement-p))))
(defun update-workshops (invoice)
  (declare (ignore invoice))
  (warn "not accepting workshops (TODO)"))

(defun update-scholarships (invoice)
  (loop for scholarship in '(php baiardi seva)
     for donation = (field "scholarships" scholarship) 
       
     when (and donation (plusp (as-number donation)))
     do (db-query "insert into `invoice-scholarships` set amount=? where invoice = ? and scholarship = ?"
                  donation invoice scholarship)))

(defun accept-state-from-form ()
  (let ((invoice (create-invoice)))
    (list :invoice invoice
          :general (update-general invoice)
          :guests (accept-guests invoice)
          :extras (accept-extras invoice)
          :vendor (accept-vendor invoice)
          :workshops (accept-workshops invoice)
          :scholarships (accept-scholarships invoice))))

(defun update-invoice-from-form (invoice)
  (list :invoice invoice
        :general (update-general invoice)
        :guests (update-guests invoice)
        :extras (update-extras invoice)
        :vendor (update-vendor invoice)
        :workshops (update-workshops invoice)
        :scholarships (update-scholarships invoice)))

(defgeneric handle-verb (verb))

(defmethod handle-verb ((verb t))
  (list :error 404
        (format nil "Verb not recognized (~s)" verb)))

(defmethod handle-verb :around (verb)
  (format *trace-output* "Handle-Verb called: ~s" verb)
  (call-next-method))

(defun valid-invoice-and-token-sent ()
  (let ((invoice (field :invoice))
        (token (field :token)))
    (and invoice
         token
         (every #'digit-char-p invoice)
         (equal (invoice->token invoice) token)
         (parse-integer invoice))))

(defmethod handle-verb ((verb (eql :save)))
  (let ((invoice-all (if-let (invoice (valid-invoice-and-token-sent))
                       (update-invoice-from-form invoice)
                       (accept-state-from-form))))
    (format *trace-output* "~s" invoice-all)
    (let ((invoice (getf invoice-all :invoice)))
      (mail-registrar-suspended-invoice invoice)
      (mail-user-suspended-invoice invoice)
      (list :data (read-invoice invoice)))))

(defun whine (&rest format+args)
  (apply #'format *trace-output* format+args)
  (apply #'mail-reg +sysop-mail+ "Whining from Herald" (get-universal-time) format+args))

(defun disquote (string)
  (when (and string
             (< 3 (length string))
             (char= #\" (first-elt string) (last-elt string)))
    (subseq string 1 (- (length string) 1))))

(defmethod handle-verb ((verb (eql :recall)))
  (let ((invoice (ignore-errors (parse-integer (disquote (field :invoice)) :radix 36)) )
        (admin-key (disquote (field :admin-key)))
        (user-key (disquote (field :verify))))
    (format *trace-output* "~&Requested recall of invoice ~a ~@[as admin~]"
            invoice admin-key)
    (cond
      ((not invoice)
       '(:error 404 "No invoice number supplied"))
      
      ((not (equal user-key (user-key invoice)))
       (whine "Recall refused; mismatched user-key (got ~a) for invoice ~:d" user-key invoice)
       '(:error 403 "Authorization refused. You cannot view the requested resource."
         "Please ensure that you copied and pasted the entire link, without spaces."))
      ((and admin-key
            (not (equal admin-key (admin-key invoice))))
       (whine "Recall refused; mismatched admin-key (got ~a) for invoice ~:d" admin-key invoice)
       '(:error 403 "Authorization refused. You cannot view the requested resource."
         "Please ensure that you copied and pasted the entire link, without spaces."))
      
      ((accept-type-p "text/html")
       (list :raw 
             (format nil "Content-Type: text/plain; charset=utf-8

You are trying to recall a saved invoice. However, this feature has been
temporarily  disabled   for  your  safety   while  the  new   system  is
being tested.

Invoice number: ~:d

You are ~:[the person who registered~;a member of  Registration staff~],
 confirmed by your use of the  special confirmation link you received in
 your e-mail.

Festival: ~{~a ~a~}

Guests: ~{

 • ~{~a ~} ~}

… as well as other information.

Please contact registration  if you need immediate assistance.

~a

"
                     invoice 
                     admin-key
                     (let ((fest (getf (read-invoice invoice) :general)))
                       (list (getf fest :|festival-season|)
                             (getf fest :|festival-year|)))
                     (mapcar (lambda (guest) 
                               (list (getf guest :|given-name|)
                                     (or (getf guest :|called-by|) "")
                                     (getf guest :|surname|))) 
                             (getf (read-invoice invoice) :guests))
                     +registrar-mail+)))

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
       (whine "Recall refused; mismatched user-key (got ~a) for invoice ~:d" user-key invoice)
       '(:error 403 "Authorization refused. You cannot view the requested resource."
         "Please ensure that you copied and pasted the entire link, without spaces."))
      ((and admin-key
            (not (equal admin-key (admin-key invoice))))
       (whine "Recall refused; mismatched admin-key (got ~a) for invoice ~:d" admin-key invoice)
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

(defmethod handle-verb ((verb (eql :pay)))
  (list :raw "Content-Type: text/plain; charset=utf-8~2%

Imagine this just asked for a payment.

This feature is disabled for right now."))

(defmethod handle-verb ((verb (eql :test-pay)))
  (list :raw "Content-Type: text/plain; charset=utf-8~2%

Imagine I just tested PayPal with this.

This feature is temporarily disabeld."))

(defun dispatch ()
  (format *trace-output* "~& DISPATCH:  verb = ~a~%" (field :verb))
  (handle-verb (make-keyword (string-upcase (field :verb)))))

(defun admin-key (invoice)
  (when invoice
    (let ((numberish (format nil "~36r" (logxor invoice #x872))))
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
    (let ((numberish (format nil "teg~36rfpg" (logxor invoice #xbeef))))
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
  (format *error-output* "~10% --- Error signaled: ~a ---~10%" c)
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

(defun paypal-request (method &rest args
                       &key
                         amt
                         currencycode
                         returnurl
                         cancelurl
                         paymentaction
                         &allow-other-keys)
  "Perform a request to the Paypal NVP API.  METHOD is the method to
  use, additional keyword arguments are passed as parameters to the
  API.  Returns token and stuff"
  (declare (ignorable amt currencycode
                      returnurl cancelurl
                      paymentaction))
  (multiple-value-bind (response-string http-status)
      (drakma:http-request
       *paypal-api-url*
       :method :post
       :parameters (append
                    (list (cons "METHOD" method)
                          (cons "VERSION" "52.0")
                          (cons "USER" *paypal-user*)
                          (cons "PWD" *paypal-password*)
                          (cons "SIGNATURE" *paypal-signature*))
                    (loop for (param value) on args by #'cddr
                       collect (cons (symbol-name param)
                                     (princ-to-string value)))))
    (unless (= 200 http-status)
      (error 'http-request-error :http-status http-status :response-string response-string))
    (let ((response (cl-paypal::decode-response response-string)))
      (unless (string-equal "Success" (getf response :ack))
        (if (equal "10415" (car (getf response :errorcode)))
            (error 'cl-paypal::transaction-already-confirmed-error
                   :response response)
            (error 'cl-paypal::response-error
                   :response response)))
      response)))

(defun add-payment-request (token amount currency-code ip)
  (db-query
   (format nil "insert into payments
 \(invoice, via, source, amount, confirmation, note. cleared)
values (~/sql/, 'PayPal', 'ip://~a', ~d, null, 'requested: ~a ~a ~:d (not yet received)', now())"
           (token->invoice token)
           ip
           (- amount)
           currency-code
           (currency-symbol currency-code)
           amount)))

(defun add-payment (token amount currency-code confirmation
                    &optional (via "PayPal") note)
  (assert (string-equal currency-code *accepted-currency*)
          (currency-code amount)
          "Payment is only accepted in ~a" *accepted-currency*)
  (db-query
   "insert into payments
 \(invoice, via, source, amount, confirmation, note, cleared)
values (?,?,?,?,?,?, now())"
   (token->invoice token)
   via
   (remote-user)
   amount
   confirmation
   (or note
       (format nil "requested: ~a ~a ~:d (not yet received)"
               currency-code
               (currency-symbol currency-code)
               amount))))

(defun make-self-url (verb &rest more)
  (format nil "~a/~a?verb=~a~@[?~{~a=~a~^&~}~]"
          +host-name+
          +url-prefix+
          (url-encode verb)
          (mapcar #'url-encode more)))

(defun make-express-checkout-url
    (amount
     ip
     &key
       (return-url (make-self-url "paypal-return"))
       (cancel-url (make-self-url "paypal-cancel"))
       (user-action "Sale")
       (currency-code *accepted-currency*)
       (sandbox t)
       (hostname (if sandbox
                     "www.sandbox.paypal.com"
                     "www.paypal.com")))
  (let* ((amt (format nil "~,2F" amount))
         (token (getf (paypal-request "SetExpressCheckout"
                                      :amt amt
                                      :currencycode currency-code
                                      :returnurl return-url
                                      :cancelurl cancel-url
                                      :paymentaction user-action)
                      :token)))
    (add-payment-request token amt currency-code ip)
    (format nil "https://~A/webscr?cmd=_express-checkout&token=~A&useraction=~A"
            hostname
            (url-encode token)
            (url-encode user-action))))

(defun register-payment-confirmed (token amount ip result)
  (db-query "update payments
set via='PayPal', source=?, amount=?,
     confirmation=?, note=?
where invoice=~d"
            ip
            amount
            (format nil "PayPal Express Checkout results:
\(~{~:(~32s~) ~s~^~% ~})"
                    result)
            "Paid via PayPal"
            (token->invoice token)))

(defun paypal-get-and-do-express-checkout (token
                                           success failure)
  (with-output-to-string (*standard-output*)
    (let* ((txn (read-invoice (token->invoice token))))
      (if txn
          (destructuring-bind (amount currency-code ip time) txn
            (declare (ignore time))
            (let* ((response (paypal-request
                              "GetExpressCheckoutDetails"
                              :token token))
                   (payer-id (getf response :payer-id))
                   (result (paypal-request "DoExpressCheckoutPayment"
                                           :token token
                                           :payer-id payer-id
                                           ;; amt and currency-code are not returned by GetExpressCheckoutDetails
                                           :amt amount
                                           :currency-code currency-code
                                           :paymentaction "Sale"))
                   (success-p (string-equal "Success" (getf result :ack))))
              (when success-p
                (register-payment-confirmed token amount ip result))
              (if success-p
                  (funcall success :amount amount :currency-code currency-code :token token :result result)
                  (funcall failure))))
          (funcall failure)))))

(defun currency-symbol (currency-code)
  (cond
    ((equal currency-code "USD") "$")
    ((equal currency-code "EUR") "€")
    ((equal currency-code "JPY") "¥")
    ((equal currency-code "UKP") "£")
    (t "¤")))

(defun print-receipt-happy (amount currency-code token result)
  (format t "Content-Type: text/html; charset=utf-8

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
                                 (list "X-Censorius-Herald-Version" (format nil "~36r" +compile-time+)))
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

(defun paypal-return.cgi ()
  (cgi-call
   (lambda ()
     (paypal-get-and-do-express-checkout
      (token->invoice (field :invoice))
      (lambda (&key amount currency-code token result)
        (if (string-equal "USD" currency-code)
            (add-payment token amount currency-code result)
            (send-mail-about-payment-with-bad-currency
             #+ (or fixme) payer-email
             +registrar-mail+ amount currency-code token result))
        (print-receipt-happy amount currency-code token result))
      (lambda (&rest _)
        (declare (ignore _)))))))

(defun paypal-cancel.cgi ()
  (cgi-call
   (lambda ()
     (error "The PayPal payment was canceled."))))

(defun herald-cgi ()
  (cgi-call #'dispatch))

(defmacro with-sql (&body body)
  `(dbi:with-connection (*db* :mysql ,@herald-db-config:+params+)
     ,@body))

(defun read-vending (&optional invoice)
  (car (db-query "select * from `invoice-vending` where invoice=?"
                 invoice)))

(defun read-workshops (&optional invoice)
  (declare (ignore invoice)))           ; TODO

(defun read-general (&optional invoice)
  (car (db-query "select * from `invoices` where invoice=?"
                 invoice)))

(defun read-invoice (invoice)
  (list :invoice invoice
        :invoice-token (user-key invoice)
        :guests (read-guests invoice)
        :merch (read-merch invoice)
        :vending (read-vending invoice)
        :workshops (read-workshops invoice)
        :general (read-general invoice)))


(defun read-merch-ordered (invoice)
  (let ((ordered (db-query
                  "select * from `invoice-merch`
where invoice=?"
                  invoice)))
    (loop for item in (remove-duplicates (mapcar #'first ordered))
       collecting (loop for (nil style qty)
                     in (remove-if-not (lambda (row)
                                         (equal (first row) item)) ordered)
                     appending (list style qty)))))

(defun read-guests (&optional invoice)
  (when invoice
    (db-query "select * from `invoice-guests` where invoice=?"
              invoice)))

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
              (* (parse-integer fractional)
                 (if negativep -1 1)
                 (expt 10 (- (length fractional)))))))
      (parse-integer string)))

(defun read-merch (&optional invoice)
  (let ((ordered-qty (when invoice (read-merch-ordered invoice))))
    (loop for row in (db-query "select * from merch")
       collect
         (destructuring-bind (&key |id| |title| |description| |image| |price| 
                                   &allow-other-keys) row
           (list :id (make-keyword |id|)
                 :title |title| :description |description| :image |image| :price |price|
                 :styles
                 (coerce
                  (loop for style-row in (db-query "select * from `merch-styles` where item=?" |id|)
                     collect
                       (let ((id |id|))
                         (destructuring-bind (&key |id| |title| |inventory| 
                                                   &allow-other-keys) style-row
                           (list :id (make-keyword |id|)
                                 :title |title|
                                 :inventory |inventory|
                                 :qty (or (and invoice
                                               (when-let ((item-ordered (getf ordered-qty id)))
                                                 (getf item-ordered |id|)))
                                          0)))))
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

(defun exec-paypal-return.cgi (command-line)
  (declare (ignore command-line))
  (with-sql (paypal-return.cgi)))

(defun exec-paypal-cancel.cgi (command-line)
  (declare (ignore command-line))
  (with-sql (paypal-cancel.cgi)))

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
  (format *trace-output* " Herald version is ~36r" +compile-time+)
  (list :data (list :program "Censorius Herald"
                    :copyright "© 2013-2015, Bruce-Robert Fenn Pocock"
                    :version (format nil "~36r" +compile-time+)
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
blurb text, notes text, qty integer unsigned not null default 1, `agreement-p` boolean,
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


