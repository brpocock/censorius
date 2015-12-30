(cl:in-package :cl-user)
(require :asdf)

(asdf:defsystem :herald-util
  :description "Numerous generic utility functions"
  :version "0.0.1"
  :author "Bruce-Robert Fenn Pocock <brpocock@star-hope.org>"
  :license "Gnu Affero General Public License, v.3"
  :depends-on (:alexandria
               :cl-ppcre
               :trivial-backtrace
               :dbd-mysql
               :split-sequence
               
               :oliphaunt)
  :serial t
  :components ((:file "packages")
               (:file "herald-util")))

(asdf:defsystem :herald-db
  :description "MySQL-based database system for “ORM” type access"
  :version "0.0.1"
  :author "Bruce-Robert Fenn Pocock <brpocock@star-hope.org>"
  :license "Gnu Affero General Public License, v.3"
  :depends-on (:alexandria
               :cl-ppcre
               :cl-sendmail
               :com.informatimago.common-lisp.rfc2822
               :dbd-mysql
               :drakma
               :flexi-streams
               :memoize
               :split-sequence
               :st-json
               :trivial-backtrace
               
               #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
               
               :oliphaunt
               :herald-util)
  :serial t
  :components ((:file "packages")
               (:file "herald-load-config")
               (:file "herald-db")
               (:file "herald-db-orm")))

(asdf:defsystem :herald-fcgi
  :description "Censorius Herald, a registration-management system"
  :version "0.0.3"
  :author "Bruce-Robert Fenn Pocock <brpocock@star-hope.org>"
  :license "Gnu Affero General Public License, v.3"
  :depends-on (:alexandria
               #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
               :cl-ppcre
               :trivial-backtrace
               
               :oliphaunt
               :herald-util
               :herald-db)
  :serial t
  :components ((:file "packages")
               (:file "herald-load-config")
               (:file "google-apis")
               (:file "login/login")
               (:file "login/google-login")
               (:file "login/facebook-login")
               (:file "login/tumblr-login")
               (:file "login/wordpress-login")
               (:file "login/twitr-login")
               (:file "herald-fcgi")))
(when (or *load-pathname* *compile-file-pathname*)
  (pushnew (make-pathname :directory (pathname-directory (or *load-pathname* *compile-file-pathname*)))
           asdf:*central-registry* :test #'equalp))

