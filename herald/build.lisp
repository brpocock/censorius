(defpackage :herald-build
  (:use :cl)
  (:export #:install))

(load "~/quicklisp/setup")
#+ccl (ql:quickload :cffi)

(let ((*default-pathname-defaults* (or (and *load-truename*
                                            (make-pathname :directory (pathname-directory *load-truename*)))
                                       (and *compile-file-truename* 
                                            (make-pathname :directory (pathname-directory *compile-file-truename*)))
                                       (if (probe-file "~/Projects/censorius/herald/")
                                           (truename "~/Projects/censorius/herald/")
                                           (truename "~/herald/")))))
  (pushnew *default-pathname-defaults* asdf:*central-registry*
           :test #'equal)
  (pushnew (make-pathname :directory "oliphaunt") asdf:*central-registry*
           :test #'equal)
  (map nil (lambda (file)
             (load (merge-pathnames file))) 
       '("oliphaunt/oliphaunt.asd"
         "herald.asd"))
  (ql:quickload :oliphaunt)
  (handler-bind
      (#+ccl (cffi:load-foreign-library-error 
              (lambda (c)
                (format *error-output* "⁂ Condition signaled: ~s~%~:*~a~%Going to try loading /usr/lib64/libfcgi.so.0" c)
                (invoke-restart 'use-value "/usr/lib64/libfcgi.so.0"))))
    (ql:quickload #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi))
  
  (ql:quickload :herald-fcgi))

;; (compile-file "build-install.lisp")
;; (load "build-install.lisp")

(with-open-file (*standard-output* (make-pathname :directory (append (pathname-directory (user-homedir-pathname))
                                                                     '("arc" "herald"))
                                                  :name (format nil "herald-build-~:@(~36r~)" 
                                                                (eval (intern "+COMPILE-TIME+" :herald-fcgi)))
                                                  :type "log")
                                   :direction :output :if-exists :supersede)
  (eval (list (intern "ABOUT-ME" :herald-fcgi))))

(with-open-file (*standard-output* (make-pathname :directory (pathname-directory (user-homedir-pathname))
                                                  :name "herald-latest-build"
                                                  :type "id")
                                   :direction :output :if-exists :supersede)
  (format t "~:@(~36r~)~%" (eval (intern "+COMPILE-TIME+" :herald-fcgi))))

(let* ((test-build-p (eval (intern "+TEST-BUILD+" (find-package :herald-fcgi))))
       (install-filename (make-pathname :name (format nil "install-herald~@[~*-test~]"
                                                      test-build-p))))
  (with-open-file (s install-filename
                     :direction :output :if-exists :supersede)
    (format s "#!/bin/sh
echo Installing Censorius Herald build ~@:(~36r~) for ~:[★LIVE PRODUCTION★~;testing~] to ~a"
            herald-fcgi::+compile-time+ test-build-p
            herald-fcgi:+uri-prefix+)
    (format s "~2%ln -f ~:[herald.cgi~;herald.fcgi~] ../~a~%" 
            (search ".fcgi" herald-fcgi:+uri-prefix+)
            herald-fcgi:+uri-prefix+))
  #+sbcl(sb-posix:chmod install-filename #o775))


