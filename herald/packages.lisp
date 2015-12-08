;;; Package declarations and exported symbols

(defpackage :herald-util
  (:use :cl #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi :brfp)
  (:export 
   :+utf-8+
   :36r
   :as-number
   :boolbool
   :clean-plist
   :field-?-p
   :groups-of
   :group-by
   :interleave
   :interpret-field
   :lambda&keys
   :keyword*
   :mail-only
   :mapplist
   :null-if
   :numeric
   :parse-decimal
   :parse-money
   :plist-keys
   :plist-p
   :plist-values
   :proper-roman-numeral
   :regex-replace-pairs
   :remove-commas
   :roman-number-value
   :roman-numeral-value
   :repeat
   :schemey-record
   :string-begins
   :string-ends
   :take
   :take-if
   :upgrade-vector
   :url-decode
   :url-encode
   :yesno$
   ))

(defpackage :herald-db
  (:use :cl #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
        :brfp :herald-util)
  (:export :db-query :*db* :with-sql :*arc* :with-archive-sql :archive-query :record-plist))

(defpackage :herald-fcgi
  (:use :cl #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
        :brfp :herald-db :herald-util)
  (:export :herald-cgi :herald-fcgi
           :herald-user-agent :whine
           :+host-name+
           :+url-prefix+))

(defpackage :google-apis
  (:use :cl #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
        :brfp :herald-util)
  (:export 
   :detect-language
   :supported-languages
   :translate))

