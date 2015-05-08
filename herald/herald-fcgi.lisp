(require :alexandria)
(require #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi)
(require :cl-ppcre)
(require :trivial-backtrace)
(require #+sbcl :clsql-sqlite3 #-sbcl :clsql-sqlite)
(require :cl-paypal)
(require :split-sequence)
(require :flexi-streams)
(require :cl-sendmail)
(require :memoize)
(defpackage :herald-fcgi
  (:use :cl :alexandria #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
        :cl-ppcre :split-sequence)
  (:export :herald-cgi :herald-fcgi))

(in-package :herald-fcgi)


;; control cards

(define-constant +db-filename+ 
    (merge-pathnames #p"work/Herald.persist.db" (user-homedir-pathname))
  :test #'equalp)

(define-constant +host-name+ "http://fpgrocks.org"
  :test #'equal)

(define-constant +sysop-mail+ "Bruce-Robert Fenn Pocock <brpocock@star-hope.org>"
  :test #'equal)
(define-constant +herald-mail+ "Censorius Herald for TEG FPG <herald@flapagan.org>"
  :test #'equal)
(define-constant +registrar-mail+ "Bruce-Robert Fenn Pocock <brpocock@star-hope.org>"
  :test #'equal)


;; compile-time constants

(defvar +compile-time+ (- (get-universal-time) 3639900000))

(defvar +utf-8+ (flexi-streams:make-external-format :utf8 :eol-style :lf))



(defmacro upgrade-vector (vector new-type &key converter)
  "Returns a vector with the same length and the same elements as
VECTOR \(a variable holding a vector) but having element type
NEW-TYPE. If CONVERTER is not NIL, it should designate a function
which will be applied to each element of VECTOR before the result is
stored in the new vector. The resulting vector will have a fill
pointer set to its end.
The macro also uses SETQ to store the new vector in VECTOR."
  `(setq ,vector
         (loop with length = (length ,vector)
            with new-vector = (make-array length
                                          :element-type ,new-type
                                          :fill-pointer length)
            for i below length
            do (setf (aref new-vector i) ,(if converter
                                              `(funcall ,converter (aref ,vector i))
                                              `(aref ,vector i)))
            finally (return new-vector))))

;;; this function is taken from Hunchentoot 1.1.0 without effective modification
(defun url-decode (string &optional (external-format +utf-8+))
  "Decodes a URL-encoded STRING which is assumed to be encoded using
the external format EXTERNAL-FORMAT."
  (when (zerop (length string))
    (return-from url-decode ""))
  (let ((vector (make-array (length string) :element-type '(unsigned-byte 8) :fill-pointer 0))
        (i 0)
        unicodep)
    (loop
       (unless (< i (length string))
         (return))
       (let ((char (aref string i)))
         (labels ((decode-hex (length)
                    (prog1
                        (parse-integer string :start i :end (+ i length) :radix 16)
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
             (t
              (push-integer (char-code (case char
                                         ((#\+) #\Space)
                                         (otherwise char))))
              (advance))))))
    (cond (unicodep
           (upgrade-vector vector 'character :converter #'code-char))
          (t (flexi-streams:octets-to-string vector :external-format external-format)))))




(defmacro interleave (&rest sets)
  (let ((gensyms (loop for i below (length sets)
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


;;;

(defvar *cgi*)
(defvar *request*)
(defvar *sql*)


(defun accept-type (content-type)
  (ecase *cgi*
    (:fast (search content-type (fcgx-getparam "HTTP_ACCEPT" *request*)))
    (:cgi (search content-type (uiop/os:getenv "HTTP_ACCEPT")))))

(defun first-or-only-second (sets)
  (if (= 1 (length sets))
      (second (first sets))
      (mapcar #'second sets)))

(defparameter *read-post-max* 4000000
  "The maximum number of characters to allow to be read from a POST")

(defparameter *read-post-buffer-start* 4000)
(defparameter *read-post-buffer-grow* 4000)

(defun read-post-data ()
  (let ((read-amount 0)
        (read-buffer (make-array *read-post-buffer-start* 
                                 :element-type 'character
                                 :adjustable t :fill-pointer 0)))
    (tagbody 
     read-loop
       (let* ((the-end (array-dimension read-buffer 0))
              (input-end (read-sequence read-buffer *standard-input* 
                                        :start read-amount
                                        :end the-end)))
         (when (= input-end (1- the-end))
           (setf read-amount input-end)
           (adjust-array read-buffer (+ the-end *read-post-buffer-grow*))
           (go read-loop))))
    (setf (getf *request* :post-data) (copy-array read-buffer))))

(defun query-params ()
  (if-let ((query-params (getf *request* :query-params)))
    query-params
    (setf (getf *request* :query-params)
          (mapcar (lambda (pair)
                    (split-sequence #\= pair))
                  (split-sequence
                   #\& 
                   (if (equal "POST" (getf *request* :request-method)) 
                       (progn (unless (getf *request* :post-data)
                                (read-post-data))
                              (getf *request* :post-data))
                       (uiop/os:getenv "QUERY_STRING")))))))

(defun field (field-name)
  (etypecase field-name
    (symbol (field (string-downcase (string field-name))))
    (string 
     (ecase *cgi*
       (:fast
        (fcgx-getparam field-name *request*))
       (:cgi
        (first-or-only-second
         (mapcar (curry #'mapcar #'url-decode)
                 (remove-if-not
                  (curry #'equal field-name) 
                  (query-params)
                  :key #'first))))))))

(defun reply-error/text (conditions)
  (reply (list :raw
               (format nil "Status: ~d~%Content-Type:text/plain; charset=utf-8~2%~:*HTTP Error ~d~2%~{~a~2%~}"
                       (first conditions) 
                       (mapcar #'princ-to-string (rest conditions))))))

(defun sql-escape (string)
  (regex-replace-all "\\'" string "''"))

(defun cl-user::sql (stream object colonp atp &rest parameters)
  (assert (not colonp))
  (assert (not atp))
  (assert (null parameters))
  (etypecase object
    (string (princ #\' stream)
            (princ (sql-escape object) stream)
            (princ #\' stream))
    (integer (princ object stream))
    (real (princ (* 1.0 object) stream))))

(defun html-escape (string)
  (regex-replace-all "\\<" 
                     (regex-replace-all "\\&" 
                                        string
                                        "&amp;")
                     "&lt;"))

(defun cl-user::html (stream object colonp atp &rest parameters)
  (assert (not colonp))
  (assert (not atp))
  (assert (null parameters))
  (etypecase object
    (string (princ (html-escape object) stream))
    (integer (princ (html-escape (format nil "~:d" object)) stream))
    (condition (princ (print-condition/html object) stream))))

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
                 (list (format stream "{~{~/edn/ ~/edn/~^, ~}}" object))))))

(defun print-condition/html (c)
  (format nil "<section class=\"error\">
<h2> A condition of type ~a was signaled. </h2>
<h3>~a</h3>
<ol class=\"backtrace\">
~{~%<li>~a</li>~}
</ol>
</section>"
          (html-escape (type-of c))
          (html-escape c)
          (let ((accumulator ())
                (depth 0))
            (trivial-backtrace:map-backtrace
             (lambda (frame)
               (when (> (incf depth) 3)
                 (appendf accumulator
                          (format nil "~s" frame)))))
            accumulator)))

(defun reply-error/html (conditions)
  (reply (list :raw
               (format nil "Status: ~d
Content-Type:text/html

<!DOCTYPE html>
<html>
  <title> HTTP Error ~:*~d </title>
 <link rel=\"stylesheet\" href=\"/reg/css/style.css\" >
</head>
<body>

<h1>An Error Occurred (type ~:*~d)</h1>

<section>
<h2>An Error Occurred</h2>

<p>Your request could not be processed because of the following
condition:</p>

~{~a~2%~}

<h3> This message produced by </h3>
Censorius Herald running in ~a service; compile-time cookie ~36r

<p> If you believe this condition is incorrect, the system operator can
be reached at: ~a </p>

</section>
</body></html>~%"
                       (princ-to-string (first conditions))
                       (mapcar (lambda (c)
                                 (typecase c
                                   (condition (print-condition/html c))
                                   (t (format nil "<div>~/html/</div>" c)))) (rest conditions))
                       *cgi*
                       +compile-time+
                       +sysop-mail+))))

(defun reply-error (conditions)
  (cond
    ((accept-type "text/html") (reply-error/html conditions))
    (t (reply-error/text conditions))))

(defun reply (structure)
  (ecase (car structure)
    (:error (reply-error (rest structure)))
    (:raw (ecase *cgi*
            (:fast (cl-fastcgi:fcgx-puts *request* (second structure)))
            (:cgi (princ (second structure)))))))

(define-constant +save-fields+
    '(:note)
  :test #'equalp)


(defun mail-reg (destination subject reference &rest message-fmt+args)
  (cl-sendmail:with-email
      (mail-reg destination 
                :bcc +sysop-mail+ 
                :subject subject 
                :from +herald-mail+
                :other-headers (list (list "References" (concatenate 'string (string reference) "." +herald-mail+))
                                     '("Organization" "Temple of Earth Gathering, Inc."))
                :charset :utf-8
                :type "text" :subtype "plain")
    (apply (curry #'format mail-reg) message-fmt+args)))


(defun next-invoice-number () 
  (clsql:query "select 1 + max(id) from invoices"))

(defun create-invoice () 
  (clsql:execute-command 
   (apply #'format nil "insert into invoices (created, \"festival-season\", \"festival-year\")
values (date('now'),~/sql/,~/sql/)" (next-festival)))
  (caar (clsql:query "select last_insert_rowid()")))


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

(defun mail-user-completed-invoice (invoice guests vending merch workshops) 
  (mail-reg +sysop-mail+ "TEG FPG Registration (completed)" 
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
  (mail-reg +sysop-mail+ "TEG FPG Registration (suspended)" 
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
            (field "note")
            +registrar-mail+
            (recall-link invoice)
            +compile-time+))

(defun accept-general (invoice)
  (clsql:execute-command
   (format nil "update invoices set note=~/sql/ where id=~/sql/"
           (field "note")
           invoice)))

(defmacro sql-insert-invoice-fields 
    ((table) (&body columns))
  `(clsql:execute-command
    (format nil
            "insert into \"invoice-~(~a~)\" (invoice, ~{\"~(~a~)\"~^, ~}) values (~/sql/, ~{~/sql/~^, ~})"
            ',table
            ,(loop for column in columns
                collecting (list 'quote column))
            invoice
            ,(loop for column in columns
                collecting `(field ,(intern (concatenate 'string
                                                         table "∋" column)
                                            :keyword))))))

(defun accept-guests (invoice)
  (sql-insert-invoice-fields (guests)
                             (called-by given-name surname formal-name
                                        presenter-bio presenter-requests
                                        e-mail telephone
                                        sleep eat day gender
                                        t-shirt coffeep totep ticket-type)))
(defun accept-extras (invoice)
  )
(defun accept-vendor (invoice))
(defun accept-workshops (invoice))
(defun accept-scholarships (invoice))

(defun accept-state-from-form ()
  (let ((invoice (next-invoice-number)))
    (list :general (accept-general invoice)
          :guests (accept-guests invoice)
          :extras (accept-extras invoice)
          :vendor (accept-vendor invoice)
          :workshops (accept-workshops invoice)
          :scholarships (accept-scholarships invoice))))

(defun suspend-registration ()
  (let ((to-save (accept-state-from-form)))
    (format t "Content-Type: text/plain; charset=utf-8~2%")
    (princ "Imagine this just saved the thing and eMailed Bobbi Jo.")
    (format t "~&~{~{ Field ~:(~a~) = “~a” ~2%~}~}" to-save)
    (let ((invoice (next-invoice-number)))
      (format t "~2% Invoice # ~:d" invoice)
      (mail-registrar-suspended-invoice invoice)
      (mail-user-suspended-invoice invoice))))

(defun whine (&rest format+args)
  (apply #'format *trace-output* format+args)
  (apply #'mail-reg +sysop-mail+ "Whining from Herald" (get-universal-time) format+args))

(defun handle-recall ()
  (let ((invoice (or (ignore-errors (parse-integer (field "invoice"))) -1))
        (admin-key (field "admin-key"))
        (user-key (field "verify"))) 
    (format *trace-output* "Requested recall of invoice “~a” ~@[as admin~]"
            invoice admin-key)
    (unless (equal user-key (user-key invoice))
      (whine "Recall refused; mismatched user-key (got ~a) for invoice ~:d" user-key invoice)
      (reply '(:error 403 "Authorization refused. You cannot view the requested resource."
               "Please ensure that you copied and pasted the entire link, without spaces."))
      (return-from handle-recall nil))
    (when admin-key
      (unless (equal admin-key (admin-key invoice))
        (whine "Recall refused; mismatched admin-key (got ~a) for invoice ~:d" admin-key invoice)
        (reply '(:error 403 "Authorization refused. You cannot view the requested resource."
                 "Please ensure that you copied and pasted the entire link, without spaces."))
        (return-from handle-recall nil)))
    (format t "Content-Type:text/plain; charset=utf-8~2%Imagine seeing invoice ~a here" invoice)))

(defun dispatch ()
  (format *trace-output* "~&★ verb = ~a~%" (field :verb))
  (cond
    ((equal "pay" (field "verb"))
     (format t "Content-Type: text/plain; charset=utf-8~2%")
     (princ "Imagine this just asked for a payment."))
    
    ((equal "test-pay" (field "verb"))
     (format t "Content-Type: text/plain; charset=utf-8~2%")
     (princ "Imagine I just tested PayPal with this."))
    
    ((equal "recall" (field "verb"))
     (handle-recall))
    
    ((equal "save" (field "verb"))
     (suspend-registration))
    
    ((equal "data" (field "get"))
     (GET-data.clj))
    
    (t (reply '(:error 404)))))

(defun admin-key (invoice)
  (let ((numberish (format nil "~36r" (logxor invoice #x872))))
    (when (/= (* 2 (floor (length numberish) 2))
              (length numberish))
      (setf numberish (concatenate 'string (subseq numberish 0 1)
                                   "/" (subseq numberish 1))))
    (let ((half (floor (length numberish) 2))) 
      (coerce (loop for i from half downto 0
                 collect (char numberish (- (length numberish) i 1))
                 collect (char numberish i))
              'string))))

(defun user-key (invoice)
  (let ((numberish (format nil "teg~36rfpg" (logxor invoice #xbeef))))
    (when (/= (* 2 (floor (length numberish) 2))
              (length numberish))
      (setf numberish (concatenate 'string (subseq numberish 0 1)
                                   "/" (subseq numberish 1))))
    (let ((half (floor (length numberish) 2))) 
      (coerce (loop for i from 0 upto half
                 collect (char numberish (- (length numberish) i 1))
                 collect (char numberish i))
              'string))))

(defun recall-link (invoice &optional adminp)
  (format nil "~a/herald.cgi?verb=recall&invoice=~36r~@[&admin-key=~a~]&verify=~a"
          +host-name+
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
          (fresh-line *error-output*)
          (trivial-backtrace:print-condition c *error-output*)
          (trivial-backtrace:print-backtrace-to-stream *error-output*)
          (mail-reg +sysop-mail+ (format nil "Herald error: ~a" (princ-to-string c))
                    (format nil "Error/~a" (string (type-of c)))
                    "~a~2%~a"
                    (princ-to-string c)
                    (trivial-backtrace:backtrace-string c))
          (reply `(:error 500 ,c))
          (return-from fastcgi nil))))))

(defun herald-cgi ()
  (let ((*cgi* :cgi)
        (*request* (mapcan (lambda (env-var)
                             (list env-var
                                   (uiop/os:getenv (substitute #\_ #\- (string env-var)))))
                           '(:document-root :http-cookie :http-host
                             :http-referer :http-user-agent :https
                             :path :query-string :remote-addr
                             :remote-host :remote-port :remote-user
                             :request-method :request-uri :script-filename
                             :script-name :server-admin :server-name
                             :server-port :server-software)))
        (*trace-output* *error-output*))
    (block cgi
      (handler-case
          (let ((output (with-output-to-string (dispatch))))
            (write output))
        (error (c)
          (fresh-line *error-output*)
          (trivial-backtrace:print-condition c *error-output*)
          (trivial-backtrace:print-backtrace-to-stream *error-output*)
          (reply `(:error 500 ,c))
          (return-from cgi nil))))))

(defmacro with-sql (&body body)
  `(clsql:with-database (*sql* '(,(princ-to-string +db-filename+))
                               :make-default t
                               :database-type #+sbcl :sqlite3 #+ccl :sqlite)
     ,@body))

(defun read-vending (&optional invoice)) ; TODO

(defun read-workshops (&optional invoice)) ; TODO

(defun read-general (&optional invoice)) ; TODO

(defun read-invoice (invoice)
  (list
   :guests (read-guests invoice)
   :merch (read-merch invoice)
   :vending (read-vending invoice)
   :workshops (read-workshops invoice)
   :general (read-general invoice)))

(defmacro select ((query) &body body)
  `(multiple-value-bind (rows columns)
       (clsql:query ,query)
     (let ((columns (mapcar (compose #'make-keyword #'string-upcase) columns)))
       ,@body)))


(defun read-merch-ordered (invoice)
  (let ((ordered (clsql:query
                  (format nil "select item, style, qty from \"invoice-merch\"
where invoice=~d" 
                          invoice))))
    (loop for item in (remove-duplicates (mapcar #'first ordered))
       collecting (loop for (nil style qty) 
                     in (remove-if-not (lambda (row)
                                         (equal (first row) item)) ordered)
                     appending (list style qty)))))

(defun read-guests (&optional invoice)
  (when invoice
    (mapcar (curry #'interleave2 '(:called-by :given-name :surname 
                                   :formal-name :presenter-bio :presenter-requests 
                                   :e-mail :telephone :sleep :eat :day
                                   :gender :t-shirt :coffeep :totep))
            (clsql:query (format nil "select \"called-by\", \"given-name\", \"surname\", 
\"formal-name \", \"presenter-bio\", \"presenter-requests\", \"e-mail \", \"telephone sleep\", 
\"eat\", \"day \", \"gender t\",-\"shirt\", \"coffeep\", \"totep\"
from \"invoice-guests\" where invoice=~:d
" 
                                 invoice)))))

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
    (loop for (id title description image price) 
       in (clsql:query "select id, title, description, image, price from merch")
       collect id
       collect
         (list :id (make-keyword id) 
               :title title :description description :image image :price price
               :styles
               (coerce
                (loop for (style-id style-title inventory)
                   in (clsql:query (format 
                                    nil
                                    "select id, title, inventory from \"merch-styles\" where item='~a'"
                                    id))
                   collect
                     (list :id (make-keyword style-id) 
                           :title style-title 
                           :inventory inventory
                           :qty (or (and invoice
                                         (when-let ((item-ordered (getf ordered-qty id)))
                                           (getf item-ordered style-id)))
                                    0)))
                'vector)))))

(defun prices->edn ()
  (format t "~%(defonce prices (atom ~/edn/))"
          (read-prices)))

(defun read-prices ()
  (select ("select * from prices 
where (starting is null or starting <= date('now'))
   and (ending is null or ending >= date('now'));")
    (let ((rows-plist (mapcar 
                       (curry #'interleave2 columns) rows)))
      (macrolet ((with-prices ((&rest symbols) &body body)
                   `(let* (,@(mapcar
                              (lambda (symbol)
                                `(,symbol (or (getf (find 
                                                     (string-downcase (string ',symbol)) 
                                                     rows-plist
                                                     :test #'equal 
                                                     :key (rcurry #'getf :item))
                                                    :price)
                                              ,(when (not (eql symbol (car symbols))) 
                                                     (car symbols))
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
                :lodge (list :regular lodge :staff staff-lodge)))))))

(defun next-festival ()
  (car (clsql:query "select season, year from festivals order by starting limit 1" )))

(defun festival->edn ()
  (format nil "(defonce festival (atom ~{{:season ~s :year ~s}~}))"
          (next-festival)))

(defun GET-data.clj ()
  ())

(defun exec-cgi (command-line)
  (declare (ignore command-line))
  (with-sql (herald-cgi)))

(defun exec-fcgi (command-line)
  (with-sql (herald-fcgi (first command-line))))

(defun exec-repl (command-line)
  (ql:quickload :prepl)
  (with-sql 
    (mapcar (compose #'eval #'read-from-string) command-line)
    (funcall (intern "REPL" :prepl))))

(defun init-db ()
  (with-sql
    (mapcar (lambda (expr) 
              (handler-case
                  (let* ((query-words (split-sequence #\Space expr)) 
                         (gerund (ecase (make-keyword (nth 0 query-words))
                                   (:|create| :creating)
                                   (:|insert| :inserting-into)))
                         (table-name (nth 2 query-words))) 
                    (tagbody again
                       (restart-case 
                           (progn
                             (format t "~&~(~a~) table ~a" 
                                     gerund table-name)
                             (clsql:execute-command expr))
                         (drop-table ()
                           :report (lambda (s)
                                     (format s "Drop table ~a and retry" table-name))
                           :test (lambda ()
                                   (eql gerund :creating))
                           (format t "~&Dropping table ~a" table-name)
                           (clsql:execute-command (concatenate 
                                                   'string "drop table "
                                                   table-name
                                                   ";"))
                           (go again))
                         (continue ())))))) 
            '("create table prices \(starting date, ending date, price decimal (6,2), item)"
              "create table invoices \(id integer primary key, created datetime, 
closed datetime, \"closed-by\" text, \"old-system-p\" boolean, \"festival-season\" varchar(20),
 \"festival-year\" integer, note text, memo text)"
              "create table merch \(id varchar(20), title varchar(100),
description text, image varchar(100), price decimal(6,2));"
              "create table \"merch-styles\" \(item varchar(20) references merch\(label),
id varchar(6), title varchar(100), inventory integer not null default 0)"
              "create table \"invoice-merch\" \(invoice integer, item varchar(20), style varchar(6), 
qty integer not null default 1);"
              "create table \"invoice-guests\" \(invoice integer, \"called-by\" varchar(50),
\"given-name\" varchar(50), surname varchar(50), \"formal-name\" varchar(72),
\"presenter-bio\" text, \"presenter-requests\" text, \"e-mail\" varchar(200),
telephone varchar(30), sleep varchar(10), eat varchar(10), day varchar(10),
gender char(1), \"t-shirt\" varchar(8), coffeep boolean, totep boolean)"
              "create table \"invoice-scholarships\" (invoice integer, scholarship varchar(10),
amount decimal(6,2), primary key(invoice, scholarship))"
              "create table \"invoice-vending\" (invoice integer primary key, title varchar(72),
blurb text, notes text, qty integer not null default 1, \"agreement-p\" boolean)"
              "create table payments (invoice integer, via varchar(100), source varchar(200),
amount decimal(6,2), confirmation text, note text)"
              "create table festivals (starting date, ending date, 
season varchar(20), year integer)"))))

