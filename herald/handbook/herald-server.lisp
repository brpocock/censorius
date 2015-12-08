(defpackage :brfputils
  (:use :cl :alexandria :split-sequence)
  )

(in-package :brfputils)



(defpackage :herald-server
  (:use :cl :alexandria :split-sequence :hunchentoot :brfputils)
  (:export #:toplevel #:start-server #:stop-server 
           #:dispatch-cgi #:dispatch-fastcgi #:dispatch))

(in-package :herald-server)

(defvar *exe-path*)
(defvar *cgi-mode*)

(defvar *hunchentoot* nil)

(defun start-server (&rest args)
  (unless (null args)
    (error "Ignoring options: ~{~A ~}" args))
  (if *hunchentoot*
      (error "Server already running: ~A" *hunchentoot*)
      (let ((hunchentoot:*show-lisp-errors-p* t)
            (hunchentoot:*show-lisp-backtraces-p* t))
        (setf *hunchentoot* 
              (hunchentoot:start (make-instance 'hunchentoot:easy-acceptor
                                                :port 4242))))))

(defun stop-server (&rest args)
  (unless (null args)
    (error "Ignoring options: ~{~A ~}" args))
  (if *hunchentoot*
      (progn (hunchentoot:stop *hunchentoot*)
             (setf *hunchentoot* nil))
      (error "Can't stop: no server running")))

(defun dispatch-cgi (&rest args)
  (declare (ignore args))
  (error 'unimplemented))

(defun dispatch-fastcgi (&rest args)
  (declare (ignore args))
  (error 'unimplemented))

(defparameter *auths*
  '(:brfp (:wheel :adm :world :events :vendors)
    :sage (:wheel :adm :world :events :vendors)
    :mystral (:world :events :vendors)
    :anonymous (:world)))

(defun assert-auth (user capability)
  (let ((caps (getf *auths* (make-keyword (string-upcase user)))))
    (assert caps (user caps)
            "User ~A is not known" user)
    (assert (member capability caps) (user caps)
            "User ~A does not have capability ~A"
            user capability))
  nil)

(hunchentoot:define-easy-handler (/index :uri "/") (auth)
  (if auth
      (progn (assert-auth auth :world)
             (setf (hunchentoot:content-type*) "text/plain")
             (princ "Hello. I am alive."))
      (progn (setf (hunchentoot:content-type*) "text/plain")
             (princ "Logon please."))))

(hunchentoot:define-easy-handler (/stop :uri "/stop") (auth)
  (assert-auth auth :adm)
  (stop-server))

(hunchentoot:define-easy-handler (/eval :uri "/eval") (auth expr)
  (assert-auth auth :wheel)
  (eval expr))



(defun toplevel (*exe-path* command &rest args)
  (case (make-keyword (string-upcase command))
    (:start (start-server args))
    (:stop (stop-server args))
    (:cgi (dispatch-cgi args))
    (:fcgi (dispatch-fastcgi args))
    (:repl (prepl:repl))
    (:eval (values (mapcar (compose #'eval #'read-from-string) args)))))




