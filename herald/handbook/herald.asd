(asdf:defsystem :herald

  :version "2015.11"
  :author "Bruce-Robert Fenn Pocock"
  :license "AGPL"
  :depends-on (
               
               :alexandria
               :cl-fad
               :csv-parser
               :dbi
               :hunchentoot
               :local-time
               :lparallel
               :prepl 
               :sb-fastcgi
               :split-sequence
               :trivial-backtrace

               )
  :components ((:file "herald")
               (:file "herald-server"))
  :description "Herald")

(eval-when (:load-toplevel)
  (pushnew (make-pathname :name nil :type nil
                          :defaults *load-truename*) asdf:*central-registry*)
  (ql:quickload :herald))
