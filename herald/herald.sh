#!/bin/sh
~/ccl/lx86cl64 -l ~/quicklisp/setup.lisp -e '(let ((*standard-output* *error-output*)) (mapcar (quote ql:quickload) (quote (:alexandria  #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi :cl-ppcre :trivial-backtrace #+sbcl :clsql-sqlite3 #-sbcl :clsql-sqlite :cl-paypal :cl-sendmail :split-sequence :flexi-streams :memoize))))' -l ~/herald/herald-fcgi.lisp -e '(herald-fcgi:herald-cgi)' -e '(quit)'
