(load "~/quicklisp/setup")

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
                  "herald-util"
                  "herald-load-config"
                  "herald-db" "herald-db-orm"
                  "herald-fcgi" "google-apis"
                  "login/login" "login/google-login" "login/facebook-login"))
    (format t "~& File ~a — compiling …" file)
    (force-output)
    (compile-file file)
    (format t " … loading …")
    (force-output)
    (load file)))

(with-open-file (*standard-output* (make-pathname :directory (pathname-directory (user-homedir-pathname))
                                                  :name (format nil "herald-build-~:@(~36r~)" (eval (intern "+COMPILE-TIME+" :herald-fcgi)))
                                                  :type "log")
                                   :direction :output :if-exists :supersede)
  (eval (list (intern "ABOUT-ME" :herald-fcgi))))

