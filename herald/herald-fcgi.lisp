(require :alexandria)
(require #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi)
(require :cl-ppcre)
(require :trivial-backtrace)
(require :clsql-sqlite)
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

(define-constant +host-name+ "http://fpgrocks.org"
  :test #'equal)

(define-constant +sysop-mail+ "Bruce-Robert Fenn Pocock <brpocock@star-hope.org>"
  :test #'equal)
(define-constant +herald-mail+ "Censorius Herald for TEG FPG <herald@flapagan.org>"
  :test #'equal)
(define-constant +registrar-mail+ "Bruce-Robert Fenn Pocock <brpocock@star-hope.org>"
  :test #'equal)



(define-constant +compile-time+ #.(- (get-universal-time) 3639900000)
                 :test '=)

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



;;;

(defvar *cgi*)
(defvar *request*)

(defun accept-type (content-type)
  (ecase *cgi*
    (:fast (search content-type (fcgx-getparam "HTTP_ACCEPT" *request*)))
    (:cgi (search content-type (uiop/os:getenv "HTTP_ACCEPT")))))

(defun first-or-only-second (sets)
  (if (= 1 (length sets))
      (second (first sets))
      (mapcar #'second sets)))

(org.tfeb.hax.memoize:def-memoized-function field (field-name)
  (etypecase field-name
    (symbol (field (string-downcase (string field-name))))
    (string 
     (ecase *cgi*
       (:fast (fcgx-getparam field-name *request*))
       (:cgi (first-or-only-second
              (mapcar (curry #'mapcar #'url-decode)
                      (remove-if-not (curry #'equal field-name) 
                                     (mapcar (lambda (pair)
                                               (split-sequence #\= pair))
                                             (split-sequence #\& 
                                                             (uiop/os:getenv "QUERY_STRING")))
                                     :key #'first))))))))

(defun reply-error/text (conditions)
  (reply (list :raw
               (format nil "Status: ~d~%Content-Type:text/plain; charset=utf-8~2%~:*HTTP Error ~d~2%~{~a~2%~}"
                       (first conditions) 
                       (mapcar #'princ-to-string (rest conditions))))))

(defun html-escape (string)
  (regex-replace-all "\\<" 
                     (regex-replace-all "\\&" 
                                        string
                                        "&amp;")
                     "&lt;"))


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

(defun cl-user::html (stream object colonp atp &rest parameters)
  (assert (not colonp))
  (assert (not atp))
  (assert (null parameters))
  (etypecase object
    (string (princ (html-escape object) stream))
    (integer (princ (html-escape (format nil "~:d" object)) stream))
    (condition (princ (print-condition/html object) stream))))

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
                                   (t (format "<div>~/html/</div>" c)))) (rest conditions))
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

(defun next-invoice-number () ;; FIXME
  4000)


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

(defun suspend-registration ()
  (let ((to-save (mapcar (lambda (field-name)
                           (list field-name (field field-name))) 
                         +save-fields+)))
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

(defun exec-cgi (command-line)
  (declare (ignore command-line))
  (herald-cgi))

(defun exec-fcgi (command-line)
  (herald-fcgi (first command-line)))



