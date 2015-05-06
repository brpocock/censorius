(require :alexandria)
(require #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi)
(require :cl-ppcre)
(require :trivial-backtrace)
(require :clsql-sqlite)
(require :cl-paypal)
(require :split-sequence)
(require :flexi-streams)
(require :memoize)
(defpackage :herald-fcgi
  (:use :cl :alexandria #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
        :cl-ppcre :split-sequence)
  (:export :herald-cgi :herald-fcgi))

(in-package :herald-fcgi)


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
                       (first conditions) (rest conditions)))))

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
<html> <title> HTTP Error ~:*~d </title>
 <link rel=\"stylesheet\" href=\"/style.css\" >
</head><body>
~%~{<div>~/html/</div>~2%~}
</body></html>~%"
                       (first conditions)
                       (rest conditions)))))

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

(defun mail-reg (subject message)
  (with-open-))

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
     (let ((invoice (field "invoice"))
           (adminp (field "adminp"))) 
       (format *trace-output* "Requested recall of invoice “~a” ~@[as admin~]"
               invoice adminp)
       (format t "Content-Type:text/plain; charset=utf-8~2%Imagine seeing invoice ~a here" invoice)))
    ((equal "save" (field "verb"))
     (let ((to-save (mapcar (lambda (field-name)
                              (list field-name (field field-name))) 
                            +save-fields+)))
       (format t "Content-Type: text/plain; charset=utf-8~2%")
       (princ "Imagine this just saved the thing and eMailed Bobbi Jo.")
       (format t "~&~{~{ Field ~:(~a~) = “~a” ~2%~}~}" to-save)))
    (t (reply '(:error 404)))))

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
          (reply `(:error 500 ,c))
          (return-from fastcgi nil))))))

(defun herald-cgi ()
  (let ((*cgi* :cgi)
        (*trace-output* *error-output*))
    (block cgi
      (handler-case
          (dispatch)
        (error (c)
          (fresh-line *error-output*)
          (trivial-backtrace:print-condition c *error-output*)
          (trivial-backtrace:print-backtrace-to-stream *error-output*)
          (reply `(:error 500 ,c))
          (return-from cgi nil))))))
