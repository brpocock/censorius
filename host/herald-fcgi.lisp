(require :alexandria)
(require :cl-fastcgi)
(require :cl-ppcre)
(require :trivial-backtrace)
(defpackage :herald-fcgi
  (:use :cl :alexandria #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
        :cl-ppcre))

(in-package :herald-fcgi)


(defvar *cgi*)
(defvar *request*)

(defun accept-type (content-type)
  (member content-type (fcgx-getparam "HTTP_ACCEPT" *request*)))

(defun reply-error/text (conditions)
  (reply (list :raw
               (format nil "Status: ~d~%Content-Type:text/plain~2%~:*HTTP Error ~d~2%~{~a~2%~}"
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
            (:fast (cl-fastcgi:fcgx-puts *request* (second structure)))))))

(defun herald-fcgi (req)
  (let ((*cgi* :fast)
        (*request* req))
    (block fastcgi
      (handler-case 
          (reply '(:error 404))
        (error (c)
          (reply `(:error 500 ,c))
          (return-from fastcgi nil))))))

(defun herald-cgi ()
  (let ((*cgi* :cgi))
    (block cgi
      (handler-case (reply '(:error 404))
        (error (c)
          (reply `(:error 500 ,c))
          (return-from cgi nil))))))
