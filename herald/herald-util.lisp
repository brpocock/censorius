(in-package :herald-util)

;;; compile-time constants
(defconstant +compile-time-offset+ 3639900000)

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defvar +compile-time+ (- (get-universal-time) +compile-time-offset+)))



;;; this function is taken from Hunchentoot 1.1.0 without effective modification
(defun url-decode (string &optional (external-format +utf-8+))
  "Decodes a URL-encoded STRING which is assumed to be encoded using the external format EXTERNAL-FORMAT."
  (check-type string string)
  (cond 
    ((null string) nil)
    ((zerop (length string))
     (return-from url-decode ""))
    (t
     (let ((vector (make-array (length string)
                               :element-type '(unsigned-byte 8)
                               :fill-pointer 0))
           (i 0)
           unicodep)
       (loop
          (unless (< i (length string))
            (return))
          (let ((char (aref string i)))
            (labels ((decode-hex (length)
                       (prog1
                           (parse-integer string
                                          :start i :end (+ i length) :radix 16)
                         (incf i length)))
                     (push-integer (integer)
                       (vector-push integer vector))
                     (peek ()
                       (aref string i))
                     (advance ()
                       (setq char (peek))
                       (incf i)))
              (cond
                ((char= #\% char)
                 (advance)
                 (cond
                   ((char= #\u (peek))
                    (unless unicodep
                      (setq unicodep t)
                      (setf vector (coerce-vector vector '(integer 0 65535))))
                    (advance)
                    (push-integer (decode-hex 4)))
                   (t
                    (push-integer (decode-hex 2)))))
                (t (push-integer (char-code (case char
                                              ((#\+) #\Space)
                                              (otherwise char))))
                   (advance))))))
       (cond (unicodep
              (map 'string #'code-char vector))
             (t (flexi-streams:octets-to-string vector
                                                :external-format external-format)))))))

(defun url-encode (string)
  "URL-encodes a string"
  (check-type string string)
  (with-output-to-string (s)
    (loop for c across string
       for index from 0
       do (cond ((or (char<= #\0 c #\9)
                     (char<= #\a c #\z)
                     (char<= #\A c #\Z)
                     ;; note that there's no comma in there - because of cookies
                     (find c "$-_.!*'()" :test #'char=))
                 (write-char c s))
                (t (loop for octet across
                        (flexi-streams:string-to-octets string
                                                        :start index
                                                        :end (1+ index))
                      do (format s "%~2,'0x" octet)))))))


(defun field-?-p (token)
  "Given a string designator TOKEN, if that TOKEN ends with  a P and seems likely to indicate a Boolean predicate value,
changes the P to ? to be nice to Clojure. Tries to do the right thing with regards to words ending in P and -P endings."
  (check-type token (or string symbol))
  (let ((naïve (string-downcase token)))
    (cond
      ((member token '("sleep" "php")
               :test #'string-equal) naïve)
      ((and (char= #\p (last-elt naïve))
            (not (find #\- naïve)))
       (concatenate 'string (subseq naïve 0 (- (length naïve)
                                               1
                                               (if (char= #\- (elt naïve (- (length naïve) 2)))
                                                   1
                                                   0))) "?"))
      (t naïve))))

(defgeneric interpret-field (value)
  (:documentation  "Interpret a  field's value  as it  arrives in  JSON;
  particularly, translate keywords :true, :false, and :null into T, NIL,
  and NIL resp.")
  (:method ((value (eql :true))) t)
  (:method((value (eql :false))) nil)
  (:method ((value (eql :null))) nil)
  (:method((value t)) value))


(defmacro lambda&keys ((&rest destructuring-lambda-list) &body body)
  (let ((args (gensym "ARGUMENTS-")))
    `(lambda (&rest ,args)
       (destructuring-bind (,destructuring-lambda-list) ,args
         ,@body))))


(provide :herald-util)

