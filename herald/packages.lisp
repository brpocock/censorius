;;; Package declarations and exported symbols

(defpackage :herald-util
  (:use :cl #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi :elephant)
  (:export 
   :+utf-8+
   :36r
   :as-number
   :boolbool
   :clean-plist
   :field-?-p
   :group-by
   :groups-of
   :interleave
   :interpret-field
   :keyword*
   :lambda&keys
   :mail-only
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
   :repeat
   :roman-number-value
   :roman-numeral-value
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
        :elephant :herald-util)
  (:export :db-query :*db* :with-sql :*arc* :with-archive-sql :archive-query :record-plist))

(defpackage :herald-fcgi
  (:use :cl #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
        :elephant :herald-db :herald-util)
  (:export :herald-cgi 
           :herald-fcgi
           :exec-repl
           :invoke-verb
           :about-me
           :herald-user-agent 
           :whine
           :+test-build+
           :+host-name+ 
           :+uri-prefix+))

(defpackage :google-apis
  (:use :cl #+sbcl :sb-fastcgi #-sbcl :cl-fastcgi
        :elephant :herald-util)
  (:export 
   :detect-language
   :supported-languages
   :translate))

(defpackage :herald-secret-config
  (:use :cl :alexandria)
  (:export #:+mysql+ #:+params+ 
           #:+google-server-api-key+
           #:*paypal-sandbox-p*
           #:paypal-app-id
           #:paypal-account
           #:paypal-client-id
           #:paypal-url
           #:paypal-secret)
  (:nicknames :herald-db-config))

(defpackage :herald-config)             ; does not use CL

(import 'herald-fcgi:+test-build+ :herald-secret-config)
