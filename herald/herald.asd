(require :asdf)
(asdf:defsystem "HERALD"
  :description "Censorius Herald, a registration-management system"
  :version "0.0.1"
  :author "Bruce-Robert Fenn Pocock <brpocock@star-hope.org>"
  :license "Gnu Affero General Public License, v.3"
  :depends-on (:alexandria
               #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
               :cl-ppcre
               :trivial-backtrace
               :clsql-sqlite)
  :components ((:file "herald-fcgi")))
