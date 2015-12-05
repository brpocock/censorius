(in-package :cl-user)
(require :asdf)
(asdf:defsystem "HERALD-UTIL"
  :description "Numerous generic utility functions"
  :version "0.0.1"
  :author "Bruce-Robert Fenn Pocock <brpocock@star-hope.org>"
  :license "Gnu Affero General Public License, v.3"
  :depends-on (:alexandria
               :cl-ppcre
               :trivial-backtrace
               :dbd-mysql
               :split-sequence
               
               :herald-util)
  :components ((:file "setup")*
               (:file "packages" :depends-on "setup")
               (:file "herald-util" :depends-on "packages")))
(asdf:defsystem "HERALD-DB"
  :description "MySQL-based database system for “ORM” type access"
  :version "0.0.1"
  :author "Bruce-Robert Fenn Pocock <brpocock@star-hope.org>"
  :license "Gnu Affero General Public License, v.3"
  :depends-on (:alexandria
               :cl-ppcre
               :trivial-backtrace
               :dbd-mysql
               :split-sequence
               
               :herald-util)
  :components ((:file "setup")
               (:file "packages" :depends-on "setup")
               (:file "herald-db" :depends-on "packages")))
(asdf:defsystem "HERALD-FCGI"
  :description "Censorius Herald, a registration-management system"
  :version "0.0.1"
  :author "Bruce-Robert Fenn Pocock <brpocock@star-hope.org>"
  :license "Gnu Affero General Public License, v.3"
  :depends-on (:alexandria
               #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
               :cl-ppcre
               :trivial-backtrace
               
               :herald-util
               :herald-db)
  :components ((:file "setup")
               (:file "packages" :depends-on "setup")
               (:file "herald-fcgi" :depends-on "packages")))



