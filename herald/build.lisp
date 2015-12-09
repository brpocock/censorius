(load "~/quicklisp/setup")

(let ((*default-pathname-defaults* (or (and *load-truename*
                                            (make-pathname :directory (pathname-directory *load-truename*)))
                                       (and *compile-file-truename* 
                                            (make-pathname :directory (pathname-directory *compile-file-truename*)))
                                       (if (probe-file "~/Projects/censorius/herald/")
                                           (truename "~/Projects/censorius/herald/")
                                           (truename "~/herald/")))))
  (pushnew *default-pathname-defaults* asdf:*central-registry*
           :test #'equal)
  (pushnew (make-pathname :directory '(:relative "brfputils")) asdf:*central-registry*
           :test #'equal)
  (map nil (lambda (name) (load (merge-pathnames name))) '("brfputils/brfputils.asd"
                                                           "herald.asd"))
  (ql:quickload :brfputils)
  (handler-case
      (ql:quickload :cl-fastcgi)
    #+ccl (cffi:load-foreign-library-error (c)
            (invoke-restart 'use-value (list "/usr/lib64/libfcgi.so.0"))))
  (ql:quickload :herald-fcgi)
  ;; (dolist (file '("setup" "packages"
  ;;                 "herald-util"
  ;;                 "herald-load-config"
  ;;                 "herald-db" "herald-db-orm"
  ;; "herald-fcgi" "google-apis"
  ;; "login/login" "login/google-login" "login/facebook-login"))
  ;;   (format t "~& File ~a — compiling …" file)
  ;;   (force-output)
  ;;   (compile-file file)
  ;;   (format t " … loading …")
  ;;   (force-output)
  ;;   (load file))
  )

