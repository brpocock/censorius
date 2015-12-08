(in-package :google-apis)

(defvar *pretty-print* nil
  "Whether to ask Google to pretty-print the JSON responses")

(defun call-rest-json (uri &rest parameters)
  (let ((param-alist (append (list (cons "key" herald-db-config:+google-server-api-key+)
                                   (cons "prettyprint" (if *pretty-print* "true" "false")))
                             (plist-alist (mapplist (key value) parameters
                                            (when value
                                              (list (etypecase key
                                                      (keyword (string-downcase key))
                                                      (string key))
                                                    (princ-to-string value))))))))
    (multiple-value-bind (body status headers source-uri reply-stream stream-close-p status-reason)
        (drakma:http-request uri :method :post :parameters param-alist 
                             :user-agent (herald-fcgi:herald-user-agent)
                             :additional-headers (list (cons "Referer" (concatenate 'string 
                                                                                    herald-fcgi:+host-name+
                                                                                    herald-fcgi:+uri-prefix+
                                                                                    "/google-api-hook"))))
      (declare (ignore reply-stream stream-close-p))
      (assert (< status 400) ()
              "Google API endpoint ~a ~:[(~a) ~;~*~]responded with HTTP ~d (~a)"
              uri (equal uri source-uri) source-uri status status-reason)
      (values (st-json:read-json body)
              status
              status-reason
              headers))))

(defun translate (source-text &key
                                (source-format :html #|or text|#)
                                source target)
  (let ((reply (call-rest-json "https://www.googleapis.com/language/translate/v2"
                               :q source-text
                               :source source
                               :target target
                               :format (string-downcase source-format))))
    (mapcar (lambda (translation)
              (cons (or (keyword* (st-json:getjso "detectedSourceLanguage" translation))
                        (keyword* source)
                        ":en")
                    (st-json:getjso "translatedText" translation)))
            (st-json:getjso "translations" (st-json:getjso "data" reply)))))

(defun supported-languages (&optional (language-names-language "en-US"))
  (let ((reply (call-rest-json "https://www.googleapis.com/language/translate/v2/languages"
                               :target language-names-language)))
    (mapcar (lambda (language)
              (cons (keyword* (st-json:getjso "language" language))
                    (or (st-json:getjso "name" language)
                        (st-json:getjso "language" language))))
            (st-json:getjso "languages" (st-json:getjso "data" reply)))))

(defun detect-language (source-text)
  (let ((reply (call-rest-json "https://www.google.com/language/translate/v2/detect"
                               :q source-text)))
    (mapcar (lambda (detection)
              (cons (keyword* (st-json:getjso "language" detection))
                    (parse-decimal (st-json:getjso "confidence" detection))))
            (st-json:getjso "detections" (st-json:getjso "data" reply)))))


