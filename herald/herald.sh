#!/bin/sh
~/ccl/lx86cl64 -l ~/quicklisp/setup.lisp -e '(let ((*standard-output* *error-output*)) (mapcar (quote ql:quickload) (quote (:alexandria  #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi :cl-ppcre :trivial-backtrace  :clsql-sqlite :cl-paypal :split-sequence :flexi-streams :memoize))))' -l ~/herald/herald-fcgi.lisp -e '(herald-fcgi:herald-cgi)' -e '(quit)'
