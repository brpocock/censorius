(in-package :cl-user)

#.(or #-quicklisp 
      (eval-when (:compile-toplevel :load-toplevel :execute)
        (load "~/quicklisp/setup.lisp")))

;;; Prepare external dependencies
(eval-when (:compile-toplevel :load-toplevel :execute)
  (mapcar #'ql:quickload '(:alexandria
                           :cl-ppcre
                           :cl-sendmail
                           :com.informatimago.common-lisp.rfc2822
                           :drakma
                           :flexi-streams
                           :memoize
                           :split-sequence
                           :dbd-mysql
                           :st-json
                           #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi)))

(require :alexandria)
(require :cl-ppcre)
(require :cl-sendmail)
(require :com.informatimago.common-lisp.rfc2822)
(require :drakma)
(require :flexi-streams)
(require :memoize)
(require :split-sequence)
(require :st-json)

(require :dbd-mysql)
(require #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi)

(load (make-pathname :directory (pathname-directory (or *load-truename*
                                                        *compile-file-truename*))
                     :name "herald"
                     :type "asd"))
