(load "~/quicklisp/setup")
(when *load-truename* (compile-file *load-truename*))
(let ((*default-pathname-defaults* (or (and *load-truename*
                                            (make-pathname :directory (pathname-directory *load-truename*)))
                                       (and *compile-file-truename* 
                                            (make-pathname :directory (pathname-directory *compile-file-truename*)))
                                       (if (probe-file "~/Projects/censorius/herald/")
                                           (truename "~/Projects/censorius/herald/")
                                           (truename "~/herald/")))))
  (map nil (lambda (name) (load (merge-pathnames name))) '("brfputils/brfputils.asd"
                                                           "herald.asd"))
  (ql:quickload :brfputils)
  (dolist (file '("setup" "packages"
                  "herald-util" "herald-db" "herald-db-orm"
                  "herald-fcgi" "google-apis"
                  "login/login" "login/google-login" "login/facebook-login"))
    (compile-file file)
    (load file)))

