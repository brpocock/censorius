(in-package :herald-fcgi)

;;; control cards

(eval-when (:compile-toplevel :load-toplevel)
  (defpackage :herald-config)
  (defmacro herald-config::host-name (name-string)
    (check-type name-string string)
    (assert (string-begins "http" name-string))
    (assert (not (string-ends "/" name-string)))
    `(define-constant +host-name+ ,name-string :test #'equal))

  (defmacro herald-config::uri-prefix (uri-prefix)
    (check-type uri-prefix string)
    (assert (string-begins "/" uri-prefix))
    `(define-constant +uri-prefix+ ,uri-prefix :test #'equal))

  (eval-when (:compile-toplevel :load-toplevel :execute)
    (defun check-mail (mail)
      (check-type mail string)
      (assert (string-begins "\"" mail))
      (assert (< (position #\" mail)
                 (position #\" mail :from-end t)
                 (position #\< mail)
                 (position #\@ mail)
                 (position #\. mail :from-end t)
                 (position #\> mail)))
      (assert (string-ends ">" mail))))

  (defmacro config-mail (symbol)
    `(defmacro ,(intern (symbol-name symbol) :herald-config) (,symbol)
       (check-mail ,symbol)
       ,(list 'define-constant (intern (concatenate 'string "+" (symbol-name symbol) "+"))
              symbol
              :test '#'equal)))

  (config-mail sysop-mail)
  (config-mail herald-mail)
  (config-mail registrar-mail)
  (config-mail vendors-mail)
  (config-mail workshops-mail)
  (config-mail archive-mail)

  (defconstant herald-config::true t)
  (defconstant herald-config::false nil)

  (defmacro herald-config::test-build (boolean)
    (ecase boolean
      ((herald-config::t herald-config::true) (cl:defconstant herald-fcgi::+test-build+ t))
      ((herald-config::nil herald-config::false) (cl:defconstant herald-fcgi::+test-build+ nil))))

  (define-constant +herald-mail-base+ "herald@star-hope.org" :test #'equal)

  (defvar +accepted-currency+ "USD"))

(defparameter *read-post-max* (* 4 1024 1024)
  "The maximum number of characters to allow to be read from a POST")

(defparameter *read-post-timeout* 10
  "The maximum number of seconds to wait while reading from a POST")

(eval-when (:compile-toplevel :load-toplevel)
  (tagbody do-over
     (restart-bind
         ((do-over (lambda () (go do-over))
            :report-function (lambda (s) (princ "Try loading the file herald-config.lisp again" s))))
       (format t "~& About to load herald-config… ")
       (let ((config-file (or (merge-pathnames (make-pathname 
                                                :directory '(:relative "Projects" "censorius" "herald")
                                                :name "herald-config" :type "lisp")
                                               (user-homedir-pathname ))
                              (merge-pathnames (make-pathname
                                                :name "herald-config" :type "lisp")
                                               (user-homedir-pathname)))))
         (load config-file)
         (format t " … loaded herald-config from ~a" config-file))
       (dolist (sym '(test-build host-name uri-prefix sysop-mail registrar-mail vendors-mail workshops-mail
                      archive-mail herald-mail))
         (let ((const (intern (concatenate 'string "+" (symbol-name sym) "+"))))
           (assert (boundp const) ()
                   "The value ~a should be set in the file herald-config.lisp" sym)))))
  (format t "~& About to load herald-secrets… ")
  (load (make-pathname :name "herald-secrets" :type "lisp"
                       :defaults (user-homedir-pathname)))
  (format t " … loaded herald-secrets."))


;;; compile-time constants
(defconstant +compile-time-offset+ 3639900000)

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defvar +compile-time+ (- (get-universal-time) +compile-time-offset+)))

(setf drakma:*drakma-default-external-format* :utf-8)

;;; report on how we were built
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun about-me ()
    (format t "~&Compiling Herald with baked-in configuration:

 • This is a ~:[★LIVE PRODUCTION★~;test~] build.

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
 • Vendors mail: ~a 
 • Workshops mail: ~a
 • Compile-time version marker: ~36r
 • PayPal interface
    • ~:[Production (live) mode~;Sandbox (test) mode~]
    • PayPal App ID: ~a
    • PayPal account: ~a
    • PayPal client ID: ~a
    • PayPal secret: ~:[(missing)~;(set)~]
~2%"
            +test-build+
            (user-homedir-pathname)
            herald-secret-config:+mysql+
            (getf herald-secret-config:+params+ :host)
            (getf herald-secret-config:+params+ :database-name)
            (getf herald-secret-config:+params+ :username)
            (getf herald-secret-config:+params+ :password)
            +host-name+
            +sysop-mail+
            +herald-mail+
            +registrar-mail+
            +archive-mail+
            +vendors-mail+
            +workshops-mail+
            +compile-time+
            herald-secret-config:*paypal-sandbox-p*
            (herald-secret-config:paypal-app-id)
            (herald-secret-config:paypal-account)
            (herald-secret-config:paypal-client-id)
            (herald-secret-config:paypal-secret)))
  
  (about-me))
