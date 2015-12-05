(in-package :herald-util)

;;; compile-time constants
(defconstant +compile-time-offset+ 3639900000)

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defvar +compile-time+ (- (get-universal-time) +compile-time-offset+)))

(defvar +utf-8+ (flexi-streams:make-external-format :utf8 :eol-style :lf))

;;; Handle reading Roman numerals (up to 4,999) to complement ~@:r

(defun proper-roman-numeral (char)
  "Given an ASCII character, return the Unicode Roman numeral code-point
that     it     resembles;     eg,      for     #\C     this     returns
#\ROMAN_NUMERAL_ONE_HUNDRED."
  (case (char-downcase char)
    (#\i #\roman_numeral_one)
    (#\v #\roman_numeral_five)
    (#\g #\roman_numeral_six_late_form)
    (#\x #\roman_numeral_ten)
    (#\l #\roman_numeral_fifty)
    (#\c #\roman_numeral_one_hundred)
    (#\d #\roman_numeral_five_hundred)
    (#\m #\roman_numeral_one_thousand)
    (otherwise nil)))

(defun roman-numeral-value (char)
  "Return the numeric value of an Unicode Roman numeral."
  (case char
    (#\roman_numeral_one 1)
    (#\roman_numeral_two 2)
    (#\roman_numeral_three 3)
    (#\roman_numeral_four 4)
    (#\roman_numeral_five 5)
    (#\roman_numeral_six 6)
    (#\roman_numeral_six_late_form 6)
    (#\roman_numeral_seven 7)
    (#\roman_numeral_eight 8)
    (#\roman_numeral_nine 9)
    (#\roman_numeral_ten 10)
    (#\roman_numeral_eleven 11)
    (#\roman_numeral_twelve 12)
    (#\roman_numeral_fifty 50)
    (#\roman_numeral_fifty_early_form 50)
    (#\roman_numeral_one_hundred 100)
    (#\roman_numeral_reversed_one_hundred 100)
    (#\roman_numeral_five_hundred 500)
    (#\roman_numeral_one_thousand 1000)
    (#\roman_numeral_one_thousand_c_d 1000)
    (#\roman_numeral_five_thousand 5000)
    (#\roman_numeral_ten_thousand 10000)
    (#\roman_numeral_fifty_thousand 50000)
    (#\roman_numeral_one_hundred_thousand 100000)
    (nil nil)
    (otherwise (roman-numeral-value (proper-roman-numeral char)))))

(defun roman-number-value (string)
  "Evaluate  a   string,  returning  its   value  as  a   Roman  number.
Assumes that the string follows typical  rules, and may yield results of
questionable value  on malformed  strings. Functions with  Unicode Roman
numeral codepoints  like #\ROMAN_NUMERAL_FIVE  as well as  Latin letters
that approximate them (as may be produced by `FORMAT' ~:@R)."
  (loop for char across string
     for position from 0
     for value = (roman-numeral-value char)
     for preceding = (when (plusp position)
                       (roman-numeral-value (elt string (1- position))))
     unless value do (error 'reader-error)
     summing (+ (if (and preceding (< preceding value))
                    (- (* 2 preceding))
                    0)
                value)))

;;; General utility functions

(defun boolbool (generalized-boolean)
  "Cast a generalized Boolean value to precisely T or NIL"
  (if generalized-boolean t nil))

(defun yesno$ (bool)
  "Cast a boolean as the string Yes or No"
  (if bool "Yes" "No"))

(deftype funcallable ()
  '(or (and symbol (satisfies fboundp))
    function))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun null-if (thing other &key (test #'eql))
    "As  with SQL's  NULLIF, returns  THING if  THING  is not  equal to  OTHER  (under TEST);  but, if  THING is  OTHER,
returns NIL.

OTHER may be a set, in which case, NIL is returned for any THING which matches (under TEST) any member of that set.

If it matters: TEST is always called with OTHER, then THING."
    (check-type test funcallable)
    (if (atom other)
        (if (funcall test other thing)
            nil
            thing)
        (if (some (curry test thing) other)
            nil
            thing))))

(defmacro mapplist ((key value) plist &body body)
  "Map  over the  key/value pairs  of  a plist,  appending the  results.
Typically used to rebuild a plist by returning lists with new key/value pairs."
  `(loop for (,key ,value) on ,plist by #'cddr
      appending (progn ,@body)))

(defun plist-keys (plist)
  "Return the keys of a plist"
  (mapplist (key _) plist
    (list key)))

(defun plist-values (object)
  (mapplist (_ value) object
    (list value)))

(defun plist-p (object)
  "Guesses whether OBJECT  is a plist. The  heuristic tests that this  is a list of  an even number of  objects, and the
positions which would be the keys of a plist are all keywords. This isn't technically the precise definition of a plist,
but it's an extremely useful approximation."
  (and (consp object)
       (evenp (length object))
       (every #'keywordp (plist-keys object))))

(defun clean-plist (plist &key (test #'identity))
  "Clean a plist by removing key/value pairs when the value does not satisfy TEST.

The default TEST is `IDENTITY', which causes key/value pairs when the value is NIL."
  (check-type test funcallable)
  (mapplist (key value) plist
    (when (funcall test value)
      (list key value))))

(defun groups-of (list count)
  "Batch the given list into groups, each of which are COUNT in length."
  (do ((i 0 (1+ i))
       (l list (cdr l))
       group result)
      ((null l)
       (when group (push (nreverse group) result))
       (nreverse result))
    (push (first l) group)
    (when (= (length group) count)
      (push (nreverse group) result)
      (setf group nil))))

(defun group-by (list &key (test #'eql) (key #'identity))
  "Group elements of a list by some attribute.

Given a TEST (which  must be a test method which  `MAKE-HASH-TABLE' will accept as a test; ie,  `EQ', `EQL', `EQUAL', or
`EQUALP'), group together all of the elements of LIST which (after transformation by KEY)
"
  (let ((hash (make-hash-table :test test)))
    (dolist (el list)
      (push el (gethash (funcall key el) hash)))
    (loop for key being the hash-key of hash using (hash-value val)
       collect (cons key val))))

(defmacro interleave (&rest sets)
  "Interleave elements from each set: (a b c) (1 2 3) ⇒ (a 1 b 2 c 3)"
  (let ((gensyms
         (loop for i below (length sets)
            collecting (gensym (or (and (consp (elt sets i))
                                        (princ-to-string (car (elt sets i))))
                                   (princ-to-string (elt sets i)))))))
    `(loop
        ,@(loop for i below (length sets)
             appending (list 'for (elt gensyms i) 'in (elt sets i)))
        ,@(loop for i below (length sets)
             appending (list 'collect (elt gensyms i))))))

(defun 36r (figure)
  "Simply format the number as a base-36 figure in upper-case, without a radix sigil.

eg, 10 → \"A\""
  (check-type figure (integer 0 *))
  (format nil "~@:(~36r~)" figure))



(defmacro upgrade-vector (vector new-type &key converter)
  "Returns a  vector with the  same length and  the same elements as  VECTOR \(a variable  holding a vector)  but having
element type NEW-TYPE. If CONVERTER is not NIL, it should  designate a function which will be applied to each element of
VECTOR before the result is stored in the new vector. The resulting vector will have a fill pointer set to its end.

The macro also uses SETQ to store the new vector in VECTOR."
  `(setq ,vector
         (loop with length = (length ,vector)
            with new-vector = (make-array length
                                          :element-type ,new-type
                                          :fill-pointer length)
            for i below length
            do (setf (aref new-vector i)
                     ,(if converter
                          `(funcall ,converter (aref ,vector i))
                          `(aref ,vector i)))
            finally (return new-vector))))

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
                      (upgrade-vector vector '(integer 0 65535)))
                    (advance)
                    (push-integer (decode-hex 4)))
                   (t
                    (push-integer (decode-hex 2)))))
                (t (push-integer (char-code (case char
                                              ((#\+) #\Space)
                                              (otherwise char))))
                   (advance))))))
       (cond (unicodep
              (upgrade-vector vector 'character :converter #'code-char))
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


;;; Core parse/deparse stuff

(defun string-begins (string prefix &key (test #'string-equal))
  "Returns a generalized Boolean indicating whether the given PREFIX matches the beginning of STRING.

TEST  is called  with STRING,  PREFIX, ':end1,  and  the length  of the  PREFIX.  This is  the signature  of (at  least)
`STRING-EQUAL' (the default) or `STRING='"
  (check-type string string)
  (check-type prefix string)
  (check-type test funcallable)
  (let ((prefix-length (length prefix)))
    (and (>= (length string) prefix-length)
         (funcall test string prefix
                  :end1 prefix-length))))

(assert (string-begins "foobar" "foo"))
(assert (string-begins "Foobar" "foo"))
(assert (not (string-begins "Foobar" "foo" :test #'string=)))

(defun string-ends (string suffix &key (test #'string-equal))
  "Returns a generalized Boolean indicating whether the given SUFFIX matches the end of STRING.

TEST is  called with STRING,  SUFFIX, ':start1, and  the length  of the string  less the length  of SUFFIX. This  is the
signature of (at least) `STRING-EQUAL' (the default) or `STRING='"
  (check-type string string)
  (check-type suffix string)
  (check-type test funcallable)
  (let ((suffix-length (length suffix)))
    (and (>= (length string) suffix-length)
         (funcall test string suffix
                  :start1 (- (length string) suffix-length)))))

(assert (string-ends "foobar" "bar"))
(assert (string-ends "FOOBAR" "bar"))
(assert (not (string-ends "FOOBAR" "bar" :test #'string=)))

(defun regex-replace-pairs (pairs-alist string)
  "Given  PAIRS-ALIST,  in  which  each  CAR  is  a  regex,  and  each  CDR  is  a  replacement,  performs  sequentially
`REGEX-REPLACE-ALL' with each pair, returning STRING after all alterations have been peformed upon it."
  (check-type string string)
  (check-type pairs-alist cons)
  (loop
     for (from . to) in pairs-alist
     do (setf string (regex-replace-all from string to))
     finally (return string)))

(defun repeat (count object)
  "Creates a list with COUNT instances of OBJECT, or with the results of calling OBJECT COUNT times, if OBJECT satisfies
a `FUNCTIONP'"
  (if (functionp object)
      (loop repeat count collecting (funcall object))
      (make-list count :initial-element object)))

(defun take (count source)
  "Take COUNT elements from SOURCE.

If SOURCE is a  sequence, returns a sequence of a  similar type (list, string, or vector) with  the first COUNT elements
from SOURCE.

If SOURCE is a function or a symbol, calls that function COUNT times, collecting the results into a list."
  (check-type count (integer 0 *))
  (if (zerop count)
      nil
      (if (typep source 'sequence)
          (progn
            (assert (<= count (length source)) (count source)
                    "Cannot take ~:d element~:p from a sequence with only ~:d element~:p"
                    count (length source))
            (subseq source 0 count))
          (loop repeat count collect (funcall source)))))

(defun base-type-of (sequence)
  "Identifies the essential type of a sequence: list, string, or vector. Returns NIL for any other type of object."
  (cond
    ((consp sequence) 'list)
    ((typep sequence 'string) 'string)
    ((typep sequence 'vector) 'vector)))

(defun take-if (count predicate source)
  "As `TAKE', but discards elements which do not satisfy PREDICATE.

eg: (take-if 5 #'digit-char-p \" a 1 b 2 c 3 d 4 e 5 f 6 g 7\") ⇒ \"12345\""
  (check-type count (integer 0 *))
  (check-type predicate funcallable)
  (if (zerop count)
      nil
      (if (typep source 'sequence)
          (coerce (let ((first (elt source 0))
                        (rest (subseq source 1)))
                    (if (funcall predicate first)
                        (concatenate (base-type-of source) 
                                     (vector first)
                                     (take-if (1- count) predicate rest)) 
                        (take-if count predicate rest)))
                  (base-type-of source))
          (let ((this (funcall source)))
            (if (funcall predicate this)
                (cons this (take-if (1- count) predicate source))
                (take-if count predicate (cdr source)))))))

(defun parse-decimal (string)
  "Parses a simple decimal  number. Accepts optional - sign (but  not +) and does not attempt  to understand such things
as, eg, scientific notation or the like."
  (check-type string string)
  (if (find #\. string)
      (let* ((decimal (search "." string))
             (units (subseq string 0 decimal))
             (fractional (subseq string (1+ decimal)))
             (negativep (eql #\- (elt string 0))))
        (* 1.0
           (+ (parse-integer units)
              (if (plusp (length fractional))
                  (* (parse-integer fractional)
                     (if negativep -1 1)
                     (expt 10 (- (length fractional))))
                  0))))
      (parse-integer string)))

(defun remove-commas (string)
  "Useful for parsing figures. Simply removes commas, and nothing more."
  (check-type string string)
  (remove-if (curry #'char= #\,) string))

(defun parse-money (string)
  "Parses a monetary amount, taking into account $ or ¢ signs. Assumes dollars, unless the string contains a ¢ sign."
  (check-type string string)
  (if (find #\¢ string :test #'char=)
      (* .01 (parse-decimal (remove-commas (string-trim " ¢" string))))
      (parse-decimal (remove-commas (string-trim " $" string)))))

(defun numeric (x)
  "If given a number, returns it; if given a string representing a number, returns the result of calling `PARSE-DECIMAL'
on it. "
  (check-type x (or string number))
  (etypecase x
    (number x)
    (string (parse-decimal x))))

(defun as-number (n)
  "Returns N as  a number; parses it  as money if it were  a string, so ¢ has  the desired effect. Does  not handle more
complex forms. If N is already a NUMBER, does nothing."
  (check-type n (or string number))
  (etypecase n
    (number n)
    (string (parse-money n))))

(defun keyword* (word)
  "If WORD is all caps or all lower-case, interns it as an all-caps keyword. Otherwise, preserve its (mixed) case."
  (check-type word (or string symbol))
  (if (or (string-equal word (string-upcase word))
          (string-equal word (string-downcase word)))
      (make-keyword (string-upcase word))
      (make-keyword word)))


;;; Converting between Clojure, EDN, JSON, and so forth.
(defmethod st-json:read-json ((null null) &optional junk-allowed-p)
  (declare (ignore junk-allowed-p))
  nil)

(defmethod st-json:read-json ((list cons) &optional junk-allowed-p)
  (declare (ignore junk-allowed-p))
  (mapcar #'st-json:read-json list))

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


(defun sql-escape (string)
  "Simply replaces ' with '' in strings (that's paired/escape single quotes). This is the right thing to do for standard
SQL, but MySQL and other servers might be naughtier than you'd like."
  (check-type string string)
  (regex-replace-all "\\'" string "''"))

(defgeneric ->sql (object)
  (:documentation "Convert an object into an SQL-escaped form.")
  (:method ((object (eql :null))) "NULL")
  (:method ((object (eql :true))) "TRUE")
  (:method ((object (eql :false))) "FALSE")
  (:method ((object (eql t))) "TRUE")
  (:method ((object string)) (concatenate 'string "'" (sql-escape object) "'"))
  (:method ((object integer)) (princ-to-string object))
  (:method ((object real)) (princ-to-string (* 1.0 object)))
  (:method ((object cons)) (format nil "(~{~/sql/~^, ~})" object))
  (:method ((object null)) "NULL"))

(defun cl-user::sql (stream object colonp atp &rest parameters)
  "`FORMAT' ~/SQL/ printer. Handles strings, integers, and floating-point real numbers."
  (assert (not colonp) () "The colon modifier is not used for ~~/SQL/")
  (assert (not atp) () "The @ modifier is not used for ~~/SQL/")
  (assert (null parameters) () "~~/SQL/ does not accept parameters; saw ~s" parameters)
  (princ (->sql object) stream))

(defvar *tex-escape* '(("\\&" . "\\\\&")
                       ("\\$" . "\\\\$")
                       ("\\x92" . "'")
                       ("\\x93" . " ``")
                       ("\\x94" . "'' ")
                       ("\\223" . " ``")
                       ("\\224" . "'' ")
                       ("—" . "---")
                       ("_" . "\\_")
                       ("\\x96" . "---")
                       ("“" . "``")
                       ("”" . "''")
                       ("‘" . "`")
                       ("’" . "'")
                       ("í" . "\\'i")
                       ("#" . "\\textnumero")
                       ("№" . "\\textnumero")
                       ("1½" . "$1\\\\frac{1}{2}$")
                       ("\\bFPG\\b" . "\\fpg")
                       ("\\bFlorida Pagan Gathering\\b" . "\\FPG")
                       ("\\bTemple of Earth Gatherings?\\b" . "\\TEG")
                       ("\\bTEG\\b" . "\\teg")
                       ("\\bFPG\\b" . "\\fpg")
                       ("\\bSean\\b" . "Seán")
                       ("(https?://[^\\s]+)" . "\\texttt{\\1}")
                       ("(https?://[^\\s]+)/([^\\\\])" . "\\1/\\hspace{0pt}\\2")
                       ("(https?://[^\\s]+)/([^\\\\])" . "\\1/\\hspace{0pt}\\2")
                       ("(https?://[^\\s]+)/([^\\\\])" . "\\1/\\hspace{0pt}\\2")
                       ("\\s([a-zA-Z][^\\s]@[a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)"  . " \\texttt{\\1}"))
  "A set of things that need to be specially marked-up to look nice in LaTeΧ output. Regex replacements.")

(defun cl-user::tex (stream object colonp atp &rest parameters)
  "`FORMAT' printer for LaTeΧ output. Convert an Unicode string into a LaTeΧ-friendly output sequence."
  (assert (not colonp))
  (assert (not atp))
  (assert (null parameters))
  (write (regex-replace-pairs *tex-escape* (string object)) :stream stream))


(defun html-escape (string)
  "Escapes < and & from strings for safe printing as HTML (text node) content."
  (regex-replace-pairs '(("\\&" . "&amp;")
                         ("\\<" . "&lt;")) (typecase string
                                             (string string)
                                             (t (princ-to-string string)))))

(defun condition->html (c)
  "Formats a condition object as (relatively) pretty HTML."
  (format nil "<section class=\"error\">
<h2> A condition of type ~/html/ was signaled. </h2>
<h3>~/html/</h3>
<ol class=\"backtrace\">
~/html/
</ol>
</section>"
          (type-of c)
          c
          (with-output-to-string (s)
            (uiop/image:print-backtrace :condition c :stream s))))

(defun cl-user::html (stream object colonp atp &rest parameters)
  "`FORMAT' ~/HTML/ formatter which escapes < and &."
  (assert (not colonp))
  (assert (not atp))
  (assert (null parameters))
  (etypecase object
    (string (princ (html-escape object) stream))
    (integer (princ (html-escape (format nil "~d" object)) stream))
    (condition (princ (condition->html object) stream))
    (t (princ (html-escape (princ-to-string object)) stream))))

;;; EDN output (to Clojure) 

;;; NB. JSON seems easier to work with, with ClojureScript, so this isn't actually being used right now.
(defvar *edn-pretty-indent* "  ")

(defgeneric ->edn (object)
  (:method ((object (eql t))) "true")
  (:method ((object (eql :true))) "true")
  (:method ((object (eql :false))) "false")
  (:method ((object null)) "nil")
  (:method ((object symbol)) (concatenate 'string #(#\:) 
                                          (string-downcase (symbol-name object))))
  (:method ((object string)) (concatenate 'string
                                          #(#\")
                                          (regex-replace-all "\\\"" object "\\\"")
                                          #(#\")))
  (:method ((object integer)) (princ-to-string object))
  (:method ((object real)) (princ-to-string (* 1.0 object)))
  (:method ((object vector))
    (format nil
            (concatenate 'string 
                         "[~<~%" *edn-pretty-indent* "~1:;~{~/edn/~>~^, ~}]")
            (coerce object 'list)))
  (:method ((object list)) 
    (if (plist-p object)
        (format nil (concatenate 'string 
                                 "{~<~%" *edn-pretty-indent* "~1:;~{~/edn/ ~/edn/~>~^, ~}}")
                object)
        (->edn (coerce object 'vector)))))

(defun cl-user::edn (stream object colonp atp &rest parameters)
  "`FORMAT' ~/EDN/  formatter which handles  sexp→EDN output with  a few
optimizations.  One  “gotcha”  is  that most  lists  are  translated  to
vectors,  but lists  that  appear to  be plists  with  keyword keys  are
instead translated to Clojure maps."
  (assert (not colonp))
  (assert (not atp))
  (assert (null parameters))
  (let ((*edn-pretty-indent* (concatenate 'string *edn-pretty-indent* "     ")))
    (princ (->edn object) stream)))

;;; JSON output
(defun jso-escape (string)
  "Escapes #\", #\', and #\newline in strings, to armour them for embedding in JSON"
  (regex-replace-pairs '(("\\\\" . "\\\\")
                         ("\\\"" . "\\\"")
                         ("\\n" . "\\n")) string))

(defvar *json-pretty-indent* "  ")

(defgeneric ->json (object)
  (:method ((object (eql :true))) "true")
  (:method ((object (eql :false))) "false")
  (:method ((object (eql t))) "true")
  (:method ((object null)) "null")
  (:method ((object symbol))
    (format nil "\"~a\"" (if (string= (string-upcase object) (string object))
                             (string-downcase object)
                             object)))
  (:method ((object string))
    (format nil "\"~a\"" object))
  (:method ((object integer))
    (princ-to-string object))
  (:method ((object real))
    (princ-to-string (* 1.0 object)))
  (:method ((object vector))
    (format nil (concatenate
                 'string 
                 "[~{~<~%" *json-pretty-indent* "~1:;~/json/~>~^, ~}]") 
            (coerce object 'list)))

  (:method ((object cons))
    (if (plist-p object)
        (format nil (concatenate 
                     'string
                     "{~{~<~%" *json-pretty-indent* "~1:;~/json/: ~/json/~>~^, ~}}") 
                object)
        (->json (coerce object 'vector))))
  (:method ((object t))
    (format nil "~a" object)))

(defun cl-user::json (stream object colonp atp &rest parameters)
  (assert (not colonp))
  (assert (not atp))
  (assert (null parameters))
  (let ((*json-pretty-indent* (concatenate 'string *json-pretty-indent* "     ")))
    (princ (->json object) stream)))

(defun schemey-record (record)
  "Convert  a  plist into  a  sort  that Scheme/Clojure  would  like,  probably with  some  crap  being translated  from
MySQL crap."
  (mapplist (key value) record
    (list (make-keyword (field-?-p key))
          (if (and (char= #\? (last-elt (string (field-?-p key))))
                   (member value '(1 0 t nil)))
              (case value
                ((0 nil) :false)
                ((1 t) :true))
              value))))

(defun mail-only (address)
  "Given a nice e-mail address like \"Name\" <user@domain>, returns just the user@domain bit."
  (if (and (find #\< address :test #'char=)
           (find #\< address :test #'char=)
           (< (position #\< address :test #'char=)
              (position #\< address :test #'char=)))
      (first (split-sequence #\>
                             (second (split-sequence #\<
                                                     address))))
      address))

(provide :herald-util)

