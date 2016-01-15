(in-package :herald-fcgi)

;;; Pretty-printing tools

(defun simply$ (thing)
  "Create a short string-token with only alphanumeric bits"
  (coerce (remove-if (complement #'alphanumericp)
                     (if (consp thing)
                         (simply$ (car thing))
                         (princ-to-string thing)))
          'string))

(defun gender$ (gender)
  "Interpret a gender string, typically a  keyword :m or :f, as a pretty
string"
  (cond ((find #\F (string-upcase gender)) "♀ Female")
        ((find #\M (string-upcase gender)) "♂ Male")
        (t "⊕")))

;;; The  environment  surrounding  each  query is  stashed  into  these;
;;; they're unbound at the top-level SO THAT trying to access them will
;;; signal an error.

(defvar *run-model* :cgi
  "In  which type  of runtime  environment are  we embedded?  This should  be :CGI  for the  traditional Common  Gateway
Interface, or :FAST for the FastCGI interface. `INVOKE-VERB' sets it to:BATCH")

(defvar *request* nil
  "Attributes of the current request (query) which we are dispatching.")

;;; CGI environment selections
(defun accept-type-p (content-type)
  "Does the UA accept the named content-type?"
  (let ((accepts (ecase *run-model*
                   (:fast (fcgx-getparam "HTTP_ACCEPT" *request*))
                   (:cgi (uiop/os:getenv "HTTP_ACCEPT"))
                   (:batch "text/plain")
                   (:tty "text/plain; text/x-ansi"))))
    (format *error-output* "~& User agent accepts: ~a" accepts)
    (or (search content-type accepts)
        (when (equal content-type "application/javascript")
          (search "text/javascript" accepts)))))

(defun read-post-data ()
  "Parse POST data from the user. This should only be called in CGI mode.

Note, this currently does NOT handle multipart/form-data posts."
  (assert (eql *run-model* :cgi))
  (let* ((the-end (min (or (ignore-errors
                             (parse-integer (uiop/os:getenv "CONTENT_LENGTH")))
                           0)
                       *read-post-max*))
         (read-buffer (make-array the-end
                                  :element-type 'character
                                  :adjustable t :fill-pointer the-end)))
    (warn " Reading POST data, length ~:d bytes" the-end)
    (bordeaux-threads:with-timeout (*read-post-timeout*)
      (setf (fill-pointer read-buffer) (read-sequence read-buffer *standard-input*
                                                      :start 0 :end the-end)))
    (let ((data (coerce (copy-array read-buffer) 'string)))
      (setf (getf *request* :post-data) data)
      (warn "[~:@(~36r~)] POST data: ~a" +compile-time+ data)
      data)))

(defun all-submitted-params ()
  "Returns the sequence of path-info, query-string, and POST parameters.

Note that I'm NOT handling multipart/form-data posts here."
  (apply #'concatenate 'string
         (list (if-let (path (uiop/os:getenv "PATH_INFO"))
                 (substitute #\& #\/ path)
                 "")
               "&"
               (or (uiop/os:getenv "QUERY_STRING") "")
               "&"
               (if (equal "POST" (getf *request* :request-method))
                   (or (getf *request* :post-data) (read-post-data))
                   ""))))

(defun query-params ()
  "Obtain all of the dominant* parameters submitted for a request.

This means that POST trumps GET (query-string) trumps path-info."
  (or (getf *request* :query-params)

      (setf (getf *request* :query-params)
            (alist-plist
             (mapcar (lambda (pair)
                       (destructuring-bind  (key &optional value) (split-sequence #\= pair)
                         (cons (keyword* key)
                               (if (and (stringp value)
                                        (plusp (length value)))
                                   (url-decode value)
                                   t))))
                     (split-sequence #\&
                                     (all-submitted-params)))))))


;;; Memoize a function.
(defmacro define-stable-function (name arg-list &body body)
  "This is  meant to do what  it says on the  tin: it defines that  a function is “stable,”  ie, it should not  take any
inputs (database reads, time, dynamic variables, …) that are not coming in from its argument-list, so its results can be
cached. This is different  than what the Quicklisp package MEMOIZE can  do for me in some ways that  I happened to like,
but, it's not actually useful for the thing for which I had designed it, which is unfortunate.

Note that the  definition of “the same inputs”  is here defined under `EQUALP',  which may not always be  what one might
wish for."
  (let ((cache (gensym (concatenate 'string (string name) "-CACHE-")))
        (key (gensym "KEY-"))
        (found (gensym "FOUND-"))
        (foundp (gensym "FOUND-P-"))
        (new-value (gensym "NEW-VALUE-")))
    (when (stringp (car body))
      (setf (documentation name 'function) (car body)))
    `(let ((,cache (make-hash-table :test #'equalp)))
       (defun ,name ,arg-list
         (let ((,key (list ,@(remove-if
                              (lambda (symbol) (member symbol '(&rest &optional &key)))
                              (mapcar (lambda (element)
                                        (if (consp element)
                                            (car element)
                                            element))
                                      arg-list)))))
           (multiple-value-bind (,found ,foundp) (gethash ,key ,cache)
             (if ,foundp
                 ,found
                 (let ((,new-value (progn ,@body)))
                   (setf (gethash ,key ,cache) ,new-value)
                   ,new-value))))))))

;;; Read fields provided by CGI POSTs
(defgeneric field-read (a b c)
  (:documentation "Select a value that  may have been posted from the user. In particular, the  first item given will be
the field name actually POSTed,  as converted by `KEYWORD*' into a keyword. The optional  second parameter may be either
the identity of  a key in a JSON object,  or the element number of a  JSON list; the third can be  a further JSON object
key. If absent, the B and C parameters must be NIL.

Normally called via convenience function `FIELD'")
  (:method ((a t) (b t) (c t))
    (error "Invalid field selector: ~s ~s ~s" a b c))
  (:method ((a symbol) (b null) (c null))
    (ecase *run-model*
      (:fast (fcgx-getparam a *request*))
      (:cgi (getf (query-params) (keyword* a)))
      ((:batch :tty) (getf *request* (keyword* a)))))
  (:method ((a string) (b number) (c string))
    (when-let (field-jso (field (make-keyword a)))
      (when-let (st-jso (st-json:read-json field-jso))
        (when-let (elt (elt st-jso b))
          (st-json:getjso (field-?-p c) elt)))))
  (:method ((a string) (b string) (c null))
    (when-let (field-jso (field (keyword* a)))
      (when-let (st-jso (st-json:read-json field-jso))
        (st-json:getjso (field-?-p b) st-jso))))
  (:method ((a symbol) (b number) (c symbol))
    (field (string-downcase a) b (string-downcase c)))
  (:method ((a string) (b number) (c symbol))
    (field a b (string-downcase c)))
  (:method ((a symbol) (b number) (c string))
    (field (string-downcase a) b c))
  (:method ((a symbol) (b symbol) (c null))
    (field (string-downcase a) (string-downcase b)))
  (:method ((a string) (b symbol) (c null))
    (field a (string-downcase b) nil))
  (:method ((a symbol) (b string) (c null))
    (field (string-downcase a) b nil))
  (:method ((a string) (b null) (c null))
    (field (make-keyword a) nil nil)))

(define-stable-function field (field-name &optional f2 f3)
  "Get the  contents of  the named form-field.  (Accepted as  a keyword,
which  will  be downcased,  or  a  string,  which will  be  searched-for
literally. Thus,  to get a field  with capital letters in  the name, you
must use a string.)"
  (interpret-field (field-read field-name f2 f3)))


;;; Reply with errors
(defun print-condition-backtrace (condition stream)
  (let ((stamp (get-universal-time)))
    (format stream "BEGIN Backtrace ~36r" stamp)
    (uiop/image:print-condition-backtrace condition :stream s)
    (format stream "END Backtrace ~36r" stamp)))

(defun reply-error/text (conditions)
  "Replies with a plain-text error report. The first element of the list
must be the numeric HTTP status code."
  (format *error-output* "~&text error report ~s" conditions)
  (unless (numberp (first conditions))
    (return-from reply-error/text (append (list 500) conditions)))
  (princ (format nil "Status: ~d ~a
Content-Type: text/plain; charset=utf-8

~0@*HTTP Error ~d~2%~{~a~2%~}~2%~a~2%"
                 (first conditions)
                 (mapcar #'princ-to-string (rest conditions))
                 (with-output-to-string (s)
                   (dolist (condition conditions)
                     (if (typep condition 'condition)
                         (print-condition-backtrace condition s)
                         (princ condition s)))))
         *error-output*))

(defun mail-reg (destination subject reference message-format &rest message-args)
  "Send mail to someone about a Registration-related topic."
  (cl-sendmail:with-email
      (mail-stream destination  :bcc +sysop-mail+
                   :cc +archive-mail+  :subject subject
                   :from +herald-mail+
                   :other-headers `(("References" ,(concatenate 'string (string reference) "."
                                                                +herald-mail-base+))
                                    ("Organization" "Temple of Earth Gathering, Inc.")
                                    ("X-Censorius-Herald-Version" ,(36r +compile-time+)))
                   :charset :utf-8
                   :type "text" :subtype "plain")
    (let ((*print-miser-width* 60)  (*print-right-margin* 70)
          (*print-readably* nil)  (*print-pretty* t)
          (*print-circle* nil)  (*print-radix* 10)
          (*print-escape* nil)  (*print-length* 12)
          (*print-case* :capitalize)  (*print-lines* 12)
          (*print-level* 10))
      (format mail-stream "~?" message-format message-args))))

(defmacro with-text-attachment ((&optional (mime-type "text")
                                           (mime-subtype "plain"))
                                &body body)
  (let ((stream (gensym "ATTACHMENT-")))
    `(list (with-output-to-string (,stream)
             (unwind-protect
                  (progn ,@body))
             ,mime-type ,mime-subtype))))

(defun mail-reg-with-attachments (destination subject reference
                                  attachments message-fmt+args)
  (cl-sendmail:with-email
      (mail-stream destination  :bcc +sysop-mail+
                   :cc +archive-mail+  :subject subject
                   :from +herald-mail+
                   :other-headers `(("References" ,(concatenate 'string (string reference) "."
                                                                +herald-mail-base+))
                                    ("Organization" "Temple of Earth Gathering, Inc.")
                                    ("X-Censorius-Herald-Version" ,(36r +compile-time+)))
                   :charset :utf-8
                   :type "text" :subtype "plain"
                   :attachments attachments)
    (apply (curry #'format mail-stream) message-fmt+args)))


(in-package :herald-fcgi)

(defun read-guests (&optional invoice)
  (when invoice
    (db-query "select * from `invoice-guests` where invoice=?"
              invoice)))

(defun merge-merch-styles (row styles &optional ordered)
  (loop for style-row in (remove-if-not (curry #'string-equal (getf row :id)) styles
                                        :key (rcurry #'getf :item))
     for qty = (let ((order (remove-if-not
                             (lambda (line)
                               (and (string-equal (getf row :id) (getf line :item))
                                    (string-equal (getf style-row :id) (getf line :style))))
                             ordered)))
                 (when order (getf (first order) :qty)))
     collect
       (append style-row (list :qty qty))))

(defun read-merch (&optional invoice date)
  (unless (null date)
    (warn "FIXME: Merchandise pricing and availability is not selectable on a different date.~%(Was asked about date ~a)" date))
  (let ((styles (db-query "select * from `merch-styles`"))
        (ordered (when invoice
                   (db-query "select * from `invoice-merch` where invoice=?" invoice))))
    (loop for row in (db-query "select * from merch")
       collect (append row
                       (list :styles
                             (coerce (merge-merch-styles row styles ordered)
                                     'vector))))))

(defun read-prices (&optional date)
  (let ((price-list (db-query "select * from prices
where (`starting` is null or `starting` <= date(?))
   and (ending is null or ending >= date(?));"
                              (or date 'now)
                              (or date 'now))))
    (macrolet
        ((with-prices ((&rest symbols) &body body)
           `(let* (,@(mapcar
                      (lambda (symbol)
                        `(,symbol (or (getf (find ',symbol price-list
                                                  :key (rcurry #'getf :item)
                                                  :test #'string-equal)
                                            :price)
                                      1000)))
                      symbols))
              ,@body)))
      (with-prices (adult-ticket child-ticket week-end-ticket
                                 day-pass lugal-so-ticket staff-ticket

                                 vendor

                                 cauldron-fri-sun cauldron-adult
                                 cauldron-child cauldron-under5
                                 salad-bar

                                 cabin staff-cabin
                                 lodge staff-lodge)
        `(:ticket (:adult ,adult-ticket
                          :child ,child-ticket
                          :week-end ,week-end-ticket
                          :day-pass ,day-pass
                          :lugal-so ,lugal-so-ticket
                          :staff ,staff-ticket)
                  :vendor ,vendor
                  :cauldron (:fri-sun ,cauldron-fri-sun
                                      :adult ,cauldron-adult
                                      :child ,cauldron-child
                                      :under5 ,cauldron-under5)
                  :salad-bar ,salad-bar
                  :cabin (:regular ,cabin :staff ,staff-cabin)
                  :lodge (:regular ,lodge :staff ,staff-lodge))))))

(defun admin-key (invoice)
  (when invoice
    (let ((numberish (36r (logxor (numeric invoice) #x872))))
      (when (/= (* 2 (floor (length numberish) 2))
                (length numberish))
        (setf numberish (concatenate 'string (subseq numberish 0 1)
                                     "/" (subseq numberish 1))))
      (let ((half (floor (length numberish) 2)))
        (coerce (loop for i from half downto 0
                   collect (char numberish (- (length numberish) i 1))
                   collect (char numberish i))
                'string)))))

(defun user-key (invoice)
  (when invoice
    (let ((numberish (format nil "teg~36rfpg" (logxor (numeric invoice) #xbeef))))
      (when (/= (* 2 (floor (length numberish) 2))
                (length numberish))
        (setf numberish (concatenate 'string (subseq numberish 0 1)
                                     "/" (subseq numberish 1))))
      (let ((half (floor (length numberish) 2)))
        (coerce (loop for i from 0 upto half
                   collect (char numberish (- (length numberish) i 1))
                   collect (char numberish i))
                'string)))))

(defun read-general (invoice)
  (record-plist (etypecase invoice
                  (invoice invoice)
                  (integer (find-invoice invoice))
                  (string (find-invoice (parse-integer (remove-commas invoice)))))))

(defun read-scholarships (invoice)
  (etypecase invoice
    (invoice (read-scholarships (invoice-id invoice)))
    (integer
     (alist-plist
      (mapcar (lambda (each)
                (cons (keyword* (getf each :scholarship))
                      (getf each :amount)))
              (db-query "select scholarship, amount from `invoice-scholarships` where invoice=?"
                        invoice))))))

(defun read-invoice (invoice)
  (list :invoice invoice
        :invoice-token (user-key invoice)
        :guests (read-guests invoice)
        :merch (read-merch invoice)
        :vending (read-vending invoice)
        :workshops (read-workshops invoice)
        :scholarships (read-scholarships invoice)
        :payments (read-payments invoice)
        :general (read-general invoice)))

(defun guest-records-beautify (invoice)
  (let ((guests (read-guests invoice)))
    (mapcar (lambda (guest)
              (clean-plist
               (list :called-by (getf guest :called-by)
                     :legal-name (concatenate 'string (getf guest :given-name) " " (getf guest :surname))
                     :gender (gender$ (getf guest :gender))
                     :e-mail (getf guest :e-mail)
                     :telephone (getf guest :telephone)
                     :ticket-type-adult/child (getf guest :ticket-type)
                     :sleeping-arrangements (getf guest :sleep)
                     :cabin/lodge-requested (getf guest :cabin-request)
                     :t-shirt-size (when-let (size (getf guest :t-shirt))
                                     (string-upcase (substitute #\space #\: size)))
                     :coffee-mug-purchased? (yesno$ (eql 1 (getf guest :coffeep)))
                     :tote-bag-purchased? (yesno$ (eql 1 (getf guest :totep)))
                     :meal-plan-purchased (getf guest :eat)
                     :married-to (when-let (spouse (getf guest :spouse))
                                   (let ((spouse (remove-if (lambda (person)
                                                              (and (equal (getf person :given-name)
                                                                          (getf guest :given-name))
                                                                   (equal (getf person :surname)
                                                                          (getf guest :surname))))
                                                            (find spouse guests :key (rcurry #'getf :spouse)))))
                                     (if spouse
                                         (concatenate 'string (or (getf spouse :called-by)
                                                                  (getf spouse :given-name)) " " (getf spouse :surname))
                                         "¿someone?"))))))
            guests)))

(defmethod invoice-festival (invoice)
  (list (invoice-festival-season invoice)
        (invoice-festival-year invoice)))

(defun invoice-is-vending-p (invoice)
  (let ((vending (read-vending invoice)))
    (and vending (plusp (getf vending :qty)))))

(defun vending-record-beautify (invoice)
  (when (invoice-is-vending-p invoice)
    (clean-plist (schemey-record (read-vending invoice)))))

(defun scholarship-record-beautify (invoice)
  (mapplist (key value) (read-scholarships invoice)
    (list (case key
            (:php "PHP")
            (otherwise (string-capitalize key)))
          value)))

(defun merch-list-has-purchases-p (merch)
  (and merch (not (every (lambda (item)
                           (every (lambda (style)
                                    (or (null (getf style :qty))
                                        (zerop (getf style :qty))))
                                  (coerce (getf item :styles) 'list)))
                         merch))))

(defun merch-table-text (merch)
  (with-output-to-string (s)
    (let ((sum 0))
      (dolist (item merch)
        (format s "~&    □ ~a ~50t (~a)~60t($ ~$ ea)~%~10t“~a”~%~15t Style~30t ID ~40t Qty"
                (getf item :title)
                (getf item :id)
                (getf item :price)
                (getf item :description) )
        (loop for style in (coerce (getf item :styles) 'list)
           for qty = (getf style :|qty|)
           when (and qty (not (zerop qty)))
           do (let ((cost (* qty (getf item :price))))
                (format s "~%~15t~a~40t~a~50t~6:d~65t $ ~5,2f"
                        (getf style :title)
                        (getf style :id)
                        qty
                        cost)
                (incf sum cost))))
      (format s "~2% Σ total for all “extras” … $ ~$ ~%" sum))))

(defun workshop-record-beautify (invoice)
  (clean-plist (schemey-record (read-workshops invoice))))

(defmethod payment-amount (payment)
  (getf payment :amount))

(defun invoice-payments-with-amounts (invoice)
  (remove-if-not #'numberp (invoice-payments invoice)
                 :key (rcurry #'getf :amount)))

(defun invoice-balance (invoice)
  (reduce #'+
          (mapcar #'payment-amount
                  (invoice-payments-with-amounts invoice))))

(defun payments-table-text (payments)
  (with-output-to-string (s)
    (let ((balance 0))
      (dolist (payment (remove-if-not #'numberp payments :key (rcurry #'getf :amount)))
        (let ((amount (getf payment :amount)))
          (format s "~& A ~:[bill~;payment (or credit)~] for the amount $ ~$ was issued using ~a.
   Reference code: ~a"
                  (plusp amount)
                  (abs amount)
                  (getf payment :source)
                  (getf payment :via))
          (if (plusp amount)
              (format s "~%    Note: ~a" (getf payment :note)))
          (incf balance amount)))
      (format s "~2% Balance: $ ~$" balance))))

(defun itinerary/text (invoice)
  (with-output-to-string (s)
    (format s "~2% ⛤ Itinerary for TEG FPG ~{ ~:(~a~) ~d ~}"
            (invoice-festival invoice))
    (format s "~2% ★ Guest List ★~2%~{~{ • ~:(~a~): ~a~%~}~%~^   —~~— ~%~%~}"
            (guest-records-beautify invoice))
    (format s "~% ★ Additional merchandise ★~% ~a"
            (let ((merch (read-merch invoice)))
              (if (merch-list-has-purchases-p merch)
                  (merch-table-text (mapcar #'schemey-record merch))
                  "No additional merchandise.")))
    (format s "~2% ★ Vending ★~% ~:[Not a vendor.~;~:*~{ • ~:(~a~): ~/json/~%~}~]"
            (vending-record-beautify invoice))
    (format s "~2% ★ Workshops ★~% ~:[Not presenting any workshops.~;~:*~{ • ~:(~a~): ~/json/~%~}~]"
            (workshop-record-beautify invoice))
    (format s "~2% ★ Scholarship Funds ★~% ~:[No scholarship fund donations.~;~:*~{ • ~a: ~/json/~%~}~]"
            (scholarship-record-beautify invoice))
    (format s "~2% ★ General Information ★
~:[No fast check-in.~;~

 💳 Fast check-in  enabled.

    You can present your Florida ID at  the gate to check in your party.
    Your legal  name, house  or building  number, and  ZIP code  will be
    checked  against the  magnetic stripe  on your  ID card  to identify
    your party.

~]
~:[Waiver not signed.~;Waiver and Release signed; electronic signature on file.~]~:[~;

Note on invoice:
  “~a”
~]
~:[This invoice is still open; it has not been paid in full.~;

                 ⛤★★ INVOICE CLOSED — Paid in full. ★★⛤

                      ⛤★★ We'll see you there! ★★⛤

~]"
            (and (invoice-fast-check-in-address invoice)
                 (invoice-fast-check-in-postal-code invoice))
            (invoice-signature invoice)
            (invoice-note invoice)
            (word-wrap (invoice-note invoice) "  ")
            (invoice-closed-p invoice))
    (format s "~% ★ Payments ★~% ~a~%"
            (payments-table-text (read-payments invoice)))))

(defun mail-error (condition)
  (mail-reg +sysop-mail+
            (concatenate 'string "[herald-error] " (let ((condition$ (format nil "~a" condition)))
                                                     (subseq condition$ 0 (min (length condition$)
                                                                               40))))
            (concatenate 'string "condition." (simply$ (type-of condition)) "." +herald-mail-base+)
            "A condition of type ~a was signaled. ~2%~a~%
Query params:~%~s~2%
Backtrace:~% ~% → ~a ~2%
~@[ Invoice data:~% ~{ ~a ~s ~}~]~% \(end of line)"
            (type-of condition)
            (or condition "Ø")
            (ignore-errors (query-params))
            (ignore-errors (with-output-to-string (s)
                             (when (typep condition 'condition)
                               (print-condition-backtrace condition s))))
            (if (field :invoice)
                (list (read-invoice (field :invoice))
                      (itinerary/text (field :invoice))))))

(defun reply-error/html (conditions)
  (format *error-output* "~&HTML error report ~s" conditions)
  (when (atom conditions)
    (return-from reply-error/html (reply-error/html (list conditions))))
  (let ((status (if (integerp (first conditions)) (first conditions) 500)))
    (format nil "Status: ~d Error or something
Content-Type:text/html; charset=utf-8

<!DOCTYPE html>
<html>
  <title> HTTP Error ~0@*~d </title>
  <link rel=\"stylesheet\" href=\"/reg/css/style.css\" >
</head>
<body>

<h1>An Error Occurred (type ~0@*~d)</h1>

<section class=\"card\">
<h2>An Error Occurred</h2>

<p>Your request could not be processed because of the following
condition:</p>

~{<div>~/html/</div>~%~}

</section>


<h3> This message produced by </h3>
Censorius Herald running in ~a service; compile-time cookie ~36r

<p> If you believe this condition is incorrect, the system operator can
be reached at: ~a </p>

</body></html>~%"
            status
            conditions
            *run-model*
            +compile-time+
            (mail-only +sysop-mail+))))

(defun reply-error/json (conditions)
  (cond
    ((atom conditions) (reply-error/json (list 500 conditions)))
    ((not (numberp (first conditions))) (reply-error/json (append (cons 500 nil) conditions)))
    (t (format *error-output* "~&JSON error report ~s" conditions)
       (princ (format nil "Status: ~d ~a
Content-Type: application/javascript; charset=utf-8~2%~/json/~%"
                      (first conditions)
                      (princ-to-string  (second conditions))
                      (list :this-is-an-error t
                            :error (first conditions)
                            :conditions conditions
                            :backtrace (with-output-to-string (s)
                                         (map nil (rcurry #'print-condition-backtrace s)
                                              (remove-if-not (rcurry #'typep 'condition)
                                                             conditions)))
                            :service *run-model*
                            :herald-version (36r +compile-time+)
                            :you-said *request*)) *error-output*))))

(defun reply-error (conditions)
  (format *error-output* "~&reply-error with ~s" conditions)
  (princ (cond ((accept-type-p "text/html") (reply-error/html conditions))
               ((or (accept-type-p "application/javascript")) (reply-error/json conditions))
               (t (reply-error/text conditions)))
         *standard-output*)
  (when (and (consp conditions)
             (numberp (first conditions))
             (<= 400 (first conditions)))
    (format *error-output* "~&ERROR condition: ~{~a~^  ~}" conditions)
    (map nil #'mail-error (rest conditions))))

(defun prompt-for-authentication (&rest stuff)
  (declare (ignore stuff))
  (format t "Content-Type: text/plain; charset=utf-8~10%LOGON PLEASE>")) ; TODO

(defun reply (structure)
  (format *error-output* "~& [~:@(~36r~)] Handling reply: ~s" +compile-time+ structure)
  (ecase (car structure)
    (:auth (prompt-for-authentication (rest structure)))
    (:error (reply-error (rest structure)))
    (:data (cond
             ((accept-type-p "application/javascript")
              (reply (list :raw (format nil "Content-Type: application/javascript; charset=utf-8~2%~/json/~%" (second structure)))))
             (t
              (reply (list :raw (format nil "Content-Type: text/plain; charset=utf-8~2%~s~%" (second structure)))))))
    (:raw (ecase *run-model*
            (:fast (cl-fastcgi:fcgx-puts *request* (second structure)))
            (:cgi (princ (second structure))
                  (princ (second structure) *error-output*))
            ((:batch :tty) (princ (second structure) *error-output*))))))

(define-constant +save-fields+
    '(:note)
  :test #'equalp)

(defun rfc-2822-for-guest (guest)
  (concatenate 'string
               "\"" (substitute-if #\⋅ (lambda (char)
                                         (or (char<= (code-char 0) char (code-char #x1f))
                                             (member char '(#\" #\!) :test #'char=)
                                             (char<= (code-char #x7f) char (code-char #x9f))))
                                   (or (getf guest :called-by)
                                       (getf guest :given-name)))
               " " (getf guest :surname)
               "\" <" (getf guest :e-mail)
               ">"))

(defun mail-to-user (invoice)
  (if-let (rp (first (remove-if-not (lambda (guest)
                                      (and (getf guest :e-mail)
                                           (plusp (length (getf guest :e-mail)))
                                           (string-equal "adult" (getf guest :ticket-type))))
                                    (read-guests invoice))))
    (rfc-2822-for-guest rp)
    +registrar-mail+))

(defun whine (&rest format+args)
  (let ((message (apply #'format nil format+args)))
    (princ message *error-output*)
    (funcall #'mail-reg +sysop-mail+ (format nil "[herald-warn] ~a" (simply$ (first format+args)))
             (princ-to-string (get-universal-time))
             "~a" message)))

(defun next-invoice-number ()
  (cadar (db-query "select `auto_increment` from information_schema.tables where table_name='invoices'")))

(defun next-festival ()
  (let ((next (car (db-query "select season, year, `starting`, `ending` from festivals where `starting` > now()  order by `starting` limit 1"))))
    (list (getf next :season)
          (getf next :year))))

(defun next-festival-season ()
  (first (next-festival)))

(defun next-festival-year ()
  (second (next-festival)))

(defun create-invoice ()
  (db-query "insert into invoices (created, `festival-season`, `festival-year`)
values ('now',?,?)"
            (next-festival-season) (next-festival-year))
  (cadar (db-query "select last_insert_id()")))

(defun recall-link (invoice &optional adminp)
  (format nil "~a~a?verb=recall&invoice=~36r~@[&admin-key=~a~]&verify=~a"
          +host-name+
          +uri-prefix+
          invoice
          (when adminp
            (admin-key invoice))
          (user-key invoice)))

(defun mail-registrar-completed-invoice (invoice)
  (mail-reg +registrar-mail+
            (format nil "TEG FPG Registration (Invoice ~:d)" invoice)
            (format nil "Invoice.~d." invoice)
            "
Invoice # ~:d has been completed by the user.

~a

———

~a

———

This eMail was composed by  your faithful, robotic Herald. Replying will
not do any good; I am a  lowly robot without the ability to read eMails.
If this looks like a software problem, you might contact my operator:

~a
"
            invoice
            (recall-link invoice t)
            (itinerary/text invoice)
            +sysop-mail+))

(defun mail-user-completed-invoice (invoice)
  (mail-reg (mail-to-user invoice)
            (format nil "TEG FPG Registration (completed) (Invoice ~:d)" invoice)
            (format nil "Invoice.~d." invoice)
            "
TEG FPG Invoice # ~:d

                  → Temple of Earth Gathering, Inc. ←

                      → Florida Pagan Gathering. ←

Your  TEG FPG  registration has  been  completed, and  your payment  has
been received.

\(This is an automated message. Replies will not be received.)

We look forward to seeing you at Festival!

                                  ———

~a
                                  ———

If you have further questions or comments, you can write to the TEG FPG
registration team at this eMail address:

~a

                                  ————

Please DO NOT reply to this eMail. I, the lowly Herald, am but a robotic
messenger, and am  unable to read eMail nor help  you further. My secret
cookie says “~36r.”
"
            invoice
            (itinerary/text invoice)
            +registrar-mail+
            +compile-time+))

(defun inhibit-mail (invoice)
  (cadar (db-query "select 1 from invoices where invoice=? and note like '%*shh*%' or memo like '%*shh*%'"
                   invoice)))

(defun mail-registrar-suspended-invoice (invoice)
  (if (inhibit-mail invoice)
      (warn "This invoice has a note or memo that inhibits sending mail.")

      (mail-reg +registrar-mail+
                (format nil "SUSPENDED TEG FPG Registration (Invoice ~:d)" invoice)
                (format nil "Invoice.~d." invoice)
                "
Invoice #  ~:d has been suspended  by the user. Please  visit the Herald
program at this link:

~a

…to review the registration and make any necessary corrections.

~a

———

This eMail was composed by  your faithful, robotic Herald. Replying will
not do any good; I am a  lowly robot without the ability to read eMails.
If this looks like a software problem, you might contact my operator:

~a

Secret cookie: ~36r
"
                invoice
                (recall-link invoice t)
                (itinerary/text invoice)
                +sysop-mail+
                +compile-time+)))

(defun mail-user-suspended-invoice (invoice)
  (mail-reg (mail-to-user invoice)
            (format nil "TEG FPG Registration (suspended) (Invoice ~:d)" invoice)
            (format nil "Invoice.~d." invoice)
            "
TEG FPG Invoice # ~:d

                  → Temple of Earth Gathering, Inc. ←

                      → Florida Pagan Gathering. ←

Your TEG  FPG registration has been  suspended, and will be  reviewed by
our Regsitration staff.  Once they have made  any necessary corrections,
your registration will be processed.

\(This is an automated message. Replies will not be received.)

If you suspended  your registration to pay by  cheque, your registration
will be processed once payment in full has been received.

If  you suspended  your  registration  because you  have  a credit  due,
Registration will apply that credit and return your registration to you.
You will then be responsible for paying any remaining balance due.

★ Any payment must reflect the balance  due on the date that the payment
was received. ★

Since ticket  prices will rise  as Festival approaches, the  total shown
when  you suspended  your registration  MAY NOT  be the  balance due  at
a future date.

~@[You included the following note to our Registration team:

“~a”~]

                                  ———

~a

                                  ———

If you have further questions or comments,  you can write to the TEG FPG
registration team at this eMail address:

~a

You can also review, edit, or pay your registration at:

~a

                                  ————

Please DO NOT reply to this eMail. I, the lowly Herald, am but a robotic
messenger, and am  unable to read eMail nor help  you further. My secret
cookie says “~36r.”

"
            invoice
            (field :note)
            (itinerary/text invoice)
            +registrar-mail+
            (recall-link invoice)
            +compile-time+))

(defvar *ignored-inputs*
  '((guest waiver-signature)
    (guest invoice)))

(defun verify-json-fields (table columns)
  (labels ((json-field-check (key value)
             (format *error-output* "~& jso (~a) ~a = ~a" table key value)
             (unless (or (member key (mapcar #'field-?-p columns) :test #'string-equal)
                         (find (cons table key) *ignored-inputs* :test #'equalp))
               (warn "JSO for ~a has unexpected key ~a (value ~s)"
                     table key value)))
           (verify-json (object)
             (format *error-output* "~&jso ~a: ~a" table object)
             (cond ((null object) nil)
                   ((consp object) (dolist (element object)
                                     (verify-json element)))
                   (t (st-json:mapjso #'json-field-check object)))))
    (when-let ((field (field table)))
      (when-let ((object (st-json:read-json field)))
        (verify-json object)))))

(eval-when (:compile-toplevel :execute :load-toplevel)
  (defun select-field (hash column &optional row)
    (if row
        `(field ',hash row ',column)
        `(field ',hash ',column))))

(defmacro sql-insert-into-invoice ((table &optional (hash table)) key-columns columns &optional row)
  `(progn
     (verify-json-fields ',hash '(,@key-columns ,@columns))
     (db-query
      ,(format nil "insert into `invoice~:[s~;-~:*~(~a~)~]` (invoice, ~{`~(~a~)`~^, ~}) values (~{~a~^, ~})"
               table
               (mapcar #'string (append key-columns columns))
               (loop repeat (+ 1 (length columns) (length key-columns)) collect '?))
      invoice
      ,@(mapcar (lambda (column) (select-field hash column row))
                (append key-columns columns)))))

(defmacro invoice-row-exists-matching ((table &optional (hash table)) key-columns &optional row)
  `(cadar (db-query
           ,(format nil
                    "select 1 from  `invoice~:[s~;-~:*~(~a~)~]` where invoice=? ~@[  ~{ and `~(~a~)` = ? ~}~]"
                    table
                    (mapcar #'string key-columns))
           invoice
           ,@(mapcar (lambda (column)
                       (select-field hash column row))
                     key-columns))))

(defmacro sql-insert-invoice-array ((table) key-columns  columns)
  `(progn
     (verify-json-fields ',table '(,@key-columns ,@columns))
     (loop for row below (length (st-json:read-json (field ,(string table))))
        do (sql-insert-into-invoice (,table) ,key-columns ,columns row))))

(defmacro sql-update-invoice ((table &optional (hash table)) key-columns columns &optional row)
  `(db-query
    ,(format nil
             "update `invoice~:[s~;-~:*~(~a~)~]` set ~{ `~(~a~)` = ?~^, ~} where invoice=? ~@[  ~{ and `~(~a~)` = ? ~}~]"
             table
             columns
             key-columns)
    ,@(mapcar (lambda (column)
                (select-field hash column row))
              (append columns key-columns))
    invoice))

(defmacro invoice-update-or-insert (table key-columns columns &optional row)
  `(if (invoice-row-exists-matching ,table ,key-columns ,row)
       (sql-update-invoice ,table ,key-columns ,columns ,row)
       (sql-insert-into-invoice ,table ,key-columns ,columns ,row)))

(defmacro sql-update-invoice-array ((table &optional (hash table)) key-columns columns)
  `(progn
     (verify-json-fields ',hash '(,@key-columns ,@columns))
     (loop for row below (length (st-json:read-json (field ,(string table))))
        do (invoice-update-or-insert (,table) ,key-columns ,columns row))))

(defmacro sql-update-invoice-fields ((table &optional (hash table)) key-columns
                                              columns)
  `(progn
     (verify-json-fields ',hash '(,@key-columns ,@columns))
     (if (invoice-row-exists-matching (,table ,hash) ,key-columns)
         (sql-update-invoice (,table ,hash) ,key-columns ,columns)
         (sql-insert-into-invoice (,table ,hash) ,key-columns ,columns))))

(defun update-general (invoice)
  (sql-update-invoice-fields (nil general) ()
                             (created closed closed-by old-system-p
                                      festival-season festival-year
                                      note signature memo fast-check-in-address fast-check-in-postal-code)))

(defmacro accept+update-array ((table) key-fields fields)
  `(progn
     (defmethod ,(format-symbol *package* "ACCEPT-~a" table) (invoice)
       (sql-insert-invoice-array (,table) ,key-fields ,fields))
     (defmethod ,(format-symbol *package* "UPDATE-~a" table) (invoice)
       (sql-update-invoice-array (,table) ,key-fields ,fields))))

(accept+update-array (guests) (given-name surname)
                     (formal-name presenter-bio presenter-requests sleep eat days gender t-shirt
                                  coffeep totep ticket-type staff-department payment-due
                                  called-by address city state postal-code country id-number id-state
                                  social-network coven spiritual-path staff-rec why-staff staff-job-wanted
                                  physical-limits ksa staff-tue-sun staff-notes staff-submit e-mail telephone
                                  staff-approve added spouse cabin-request))

(defmacro accept+update ((table &optional (hash table)) key-fields &body fields)
  `(progn
     (defmethod ,(format-symbol *package* "ACCEPT-~a" table) (invoice)
       (sql-insert-into-invoice (,table ,hash) ,key-fields ,fields))
     (defmethod ,(format-symbol *package* "UPDATE-~a" table) (invoice)
       (sql-update-invoice-fields (,table ,hash) ,key-fields ,fields))))

(accept+update-array (merch) (item style) (qty))

(accept+update (vending vendor) ()
  blurb notes qty agreement masseurp meal-plan-p food-vendor-p title menu payment-due
  mqa-license bpr-license)

(defun accept-workshops (invoice)
  (declare (ignore invoice))
  (warn "not accepting workshops (TODO)"))

(defun accept-scholarships (invoice)
  (loop for scholarship in '(php baiardi seva)
     for donation = (field "scholarships" scholarship)

     when (and donation (plusp (as-number donation)))
     do (db-query "insert into `invoice-scholarships` (invoice, scholarship, amount) values (?, ?, ?)"
                  invoice (string-downcase scholarship) (as-number donation))))

(defun update-workshops (invoice)
  (declare (ignore invoice))
  (warn "not accepting workshops (TODO)"))

(defun update-scholarships (invoice)
  (loop for scholarship in '(php baiardi seva)
     for donation = (field "scholarships" scholarship)

     when (and donation (plusp (as-number donation)))
     do (if (cadar (db-query "select 1 from `invoice-scholarships` where invoice = ? and scholarship = ?"
                             invoice (string-downcase scholarship)))
            (db-query "update `invoice-scholarships` set amount=? where invoice = ? and scholarship = ?"
                      (as-number donation) invoice (string-downcase scholarship))
            (db-query "insert into `invoice-scholarships` (amount, invoice, scholarship) values (?, ?, ?)"
                      (as-number donation) invoice (string-downcase scholarship)))))

(defun accept-state-from-form ()
  (handler-case
      (let ((invoice (create-invoice)))
        (list :invoice invoice
              :general (update-general invoice)
              :guests (accept-guests invoice)
              :merch (accept-merch invoice)
              :vending (accept-vending invoice)
              :workshops (accept-workshops invoice)
              :scholarships (accept-scholarships invoice)))
    (dbi.error:<dbi-database-error> (c)
      (throw 'cgi-bye
        (list :error 501
              (format nil "The record cannot be  inserted into the database, because the proposed  changes would  create inconsistent or  impossible data. (~a)" c)
              c)))))

(defun update-invoice-from-form (invoice)
  (db-query "update invoices set closed=null where invoice=?" invoice)
  (handler-case
      (list :invoice invoice
            :general (update-general invoice)
            :guests (update-guests invoice)
            :merch (update-merch invoice)
            :vending (update-vending invoice)
            :workshops (update-workshops invoice)
            :scholarships (update-scholarships invoice))
    (dbi.error:<dbi-database-error> (c)
      (throw 'cgi-bye
        (list :error 501
              (format nil "The record cannot be changed in the database, because the proposed changes would create inconsistent or impossible data. (~a)" c)
              c)))))

(defgeneric handle-verb (verb))

(defmethod handle-verb ((verb (eql :nil)))
  (list :error 404 "No verb supplied."))

(defmethod handle-verb ((verb t))
  (list :error 404
        (format nil "Verb not recognized (~s)" verb)))

(defmethod handle-verb :around (verb)
  (format *error-output* "Handle-Verb called: ~s" verb)
  (call-next-method))

(defun valid-invoice-and-token-sent ()
  (let ((invoice (field "general" "invoice"))
        (token (field "general" "invoice-token")))
    (and invoice
         token
         (or (and (stringp invoice)
                  (every #'digit-char-p (princ-to-string invoice))
                  (parse-integer invoice))
             (and (integerp invoice)
                  invoice))
         (equal (user-key invoice) token)
         (numeric invoice))))

(defun save-invoice ()
  (if-let (invoice (valid-invoice-and-token-sent))
    (update-invoice-from-form invoice)
    (accept-state-from-form)))

(defmethod handle-verb ((verb (eql :save)))
  (let ((invoice-all (save-invoice)))
    (prin1 invoice-all *error-output*)
    (let ((invoice (getf invoice-all :invoice)))
      (prin1 (read-invoice invoice) *error-output*)
      (mail-registrar-suspended-invoice invoice)
      (mail-user-suspended-invoice invoice)
      (list :data (read-invoice invoice))))) ;;; maybe make schemey?

(defun disquote (string)
  "If string is surrounded by double-quotes, remove them."
  (if (and string
           (< 3 (length string))
           (char= #\" (first-elt string) (last-elt string)))

      (subseq string 1 (- (length string) 1))
      (or string "")))

(defun recall-invoice-link (invoice &optional adminp)
  (format nil "~a/reg/#/recall/~36r/~a~@[/~a~]"
          +host-name+
          (princ-to-string invoice)
          (url-encode (user-key invoice))
          (when adminp
            (url-encode (admin-key invoice)))))

(defmethod invoice-guest-given-name (guest)
  (person-given-name guest))

(defmethod invoice-guest-called-by (guest )
  (person-called-by guest))

(defmethod invoice-guest-surname (guest)
  (person-surname guest))

(defmethod invoice-guests ((invoice integer))
  (read-guests invoice))

(defmethod handle-verb ((verb (eql :recall)))
  (let* ((invoice (parse-integer (disquote (field :invoice)) :radix 36 :junk-allowed t))
         (admin-key (disquote (field :admin-key)))
         (user-key (disquote (field :verify))))
    (format *error-output* "~&Requested recall of invoice ~:d ~@[as admin~]"
            invoice admin-key)
    (cond
      ((not (numberp invoice))
       `(:error 404 "No invoice number supplied"))

      ((not (or (equal user-key (user-key invoice))
                (equal user-key (concatenate 'string (user-key invoice) "/" (admin-key invoice)))))
       (whine "~%Recall refused; mismatched user-key (got ~a) for invoice ~:d" user-key invoice)
       '(:error 403 "Authorization refused. You cannot view the requested resource."
         "If you  entered a link yourself,  please ensure that  you copied and  pasted the entire link,  without spaces.
         Capital and lower-case letters may be significant as well."))

      ((and (not (emptyp admin-key))
            (not (equal admin-key (admin-key invoice))))
       (whine "~&Recall refused; mismatched admin-key (got ~a) for invoice ~:d" admin-key invoice)
       '(:error 403 "Authorization refused. You cannot view the requested resource."
         "If you  entered a link yourself,  please ensure that  you copied and  pasted the entire link,  without spaces.
         Capital  and lower-case  letters  may be  significant  as  well. This  link  requires administrative  clearance
         as well."))

      ((and (not (emptyp admin-key))
            (accept-type-p "text/html"))
       (list :raw
             (format nil "Content-Type: text/html; charset=utf-8

<!DOCTYPE html>
<html>
<head><title>Invoice Edit: ~:d~:*</title> </head>

<body>
<h2>Reg Team Admin Access</h2>
<p>
Please note that editing the guest's registration information is a brand-new
feature and not everything may work 100%.
</p>
<h4>
Invoice number: ~:d
</h4>
<h4>
Festival: ~{~a ~a~}
</h4>
<h4>
Guests:</h4> ~{
<p>
 • ~{~a ~@[“~a” ~]~a~} </p>
~}
<p>
If you would like to continue, please re-check all the information
before submitting.
</p>
<a href=\"~a\">Understood, let me review or edit this guest's registration</a>
<hr>

<p> Need to <a href=\"adm/adjust.html\">make an adjustment</a>? You'll need the admin key: <tt>~a</tt> </p>

<pre>~a</pre>
</body></html>
"
                     invoice
                     (list (invoice-festival-season invoice)
                           (invoice-festival-year invoice))
                     (mapcar (lambda (guest)
                               (list (invoice-guest-given-name guest)
                                     (invoice-guest-called-by guest)
                                     (invoice-guest-surname guest)))
                             (invoice-guests invoice))
                     (recall-invoice-link invoice t)
                     admin-key
                     (itinerary/text invoice))))

      ((accept-type-p "text/html")
       (list :raw
             (format nil "Content-Type: text/html; charset=utf-8

<!DOCTYPE html>
<html>
<head><title>Invoice Edit: ~:d~:*</title> </head>
<meta charset=\"utf-8\">
<body>
<h1>
Invoice number: ~:d
</h1>
<h4>
Festival: ~{~a ~a~}
</h4>
<h4>
Guests:</h4> ~{
<p>
 • ~{~a ~} </p>
~}
<h2>
~:[This is an open (incomplete) invoice.~;This invoice is closed (paid in full).~]
</h2>
<p>

<p>
Please note that editing your registration information is a brand-new
feature and not everything may work 100%.
</p>

If you would like to continue, please re-check all your information before submitting. In particular, if you are a staff
member,  re-check that  your department  is selected;  and  if you  ordered any  tote  bags or  coffee mugs  in the  top
section (next to a guest's name).

</p>
<a href=\"~a\">Understood, let me review or edit my registration</a>
<hr>
<h2>Previous Itinerary</h2>
<pre>~a</pre>
</body></html>
"
                     invoice
                     (list (invoice-festival-season invoice)
                           (invoice-festival-year invoice))
                     (mapcar (lambda (guest)
                               (list (getf guest :given-name)
                                     (or (getf guest :called-by) "")
                                     (getf guest :surname)))
                             (getf (read-invoice invoice) :guests))
                     (getf (read-general invoice) :closed)
                     (recall-invoice-link invoice)
                     (itinerary/text invoice))))

      (t (list :data (read-invoice invoice))))))

(defmethod handle-verb ((verb (eql :resend-suspended)))
  (let ((invoice (ignore-errors (parse-integer (field :invoice) :radix 36)) )
        (admin-key (field :admin-key))
        (user-key (field :verify)))
    (format *error-output* "~&Requested resend of invoice ~a ~@[as admin~]"
            invoice admin-key)
    (cond
      ((not invoice)
       '(:error 404 "No invoice number supplied"))

      ((not (equal user-key (user-key invoice)))
       (whine "~&Recall refused; mismatched user-key (got ~a) for invoice ~:d" user-key invoice)
       '(:error 403 "Authorization refused. You cannot view the requested resource."
         "Please ensure that you copied and pasted the entire link, without spaces."))
      ((and admin-key
            (not (equal admin-key (admin-key invoice))))
       (whine "~&Recall refused; mismatched admin-key (got ~a) for invoice ~:d" admin-key invoice)
       '(:error 403 "Authorization refused. You cannot view the requested resource."
         "Please ensure that you copied and pasted the entire link, without spaces."))

      (t
       (let ((completedp (getf (read-general invoice) :closed)))
         (cond (completedp
                (mail-registrar-completed-invoice invoice)
                (mail-user-completed-invoice invoice))
               (t
                (mail-registrar-suspended-invoice invoice)
                (mail-user-suspended-invoice invoice)))
         (list :raw
               (format nil "Content-Type: text/plain; charset=utf-8

Resending e-mails for ~:[suspended~;completed~] invoice ~:d

" invoice completedp)))))))

(defun dispatch ()
  (format *error-output* "~& DISPATCH:  verb = ~a~%" (field :verb))
  (handle-verb (keyword* (field :verb))))

(defun invoke-verb (verb &rest *request* &key &allow-other-keys)
  (let ((*run-model* :batch))
    (handle-verb verb)))

(defun herald-fcgi (req)
  (let ((*run-model* :fast)
        (*request* req)
        (*trace-output* *error-output*))
    (block fastcgi
      (handler-case
          (dispatch)
        (error (c)
          (reply `(:error 500 ,c))
          (fresh-line *error-output*)
          (format *error-output* "~a" c)
          (print-condition-backtrace c *error-output*)
          (mail-reg +sysop-mail+ (format nil "Herald error: ~a" (princ-to-string c))
                    (format nil "Error/~a" (string (type-of c)))
                    "~a~2%~a"
                    (princ-to-string c)
                    (with-output-to-string (s)
                      (print-condition-backtrace c s)))
          (return-from fastcgi nil))))))

(defun cgi-environment ()
  (mapcan (lambda (env-var)
            (list env-var
                  (uiop/os:getenv (substitute #\_ #\- (string env-var)))))
          '(:document-root :http-cookie :http-host
            :http-referer :http-user-agent :https
            :path :query-string :remote-addr
            :remote-host :remote-port :remote-user
            :request-method :request-uri :script-filename
            :script-name :server-admin :server-name
            :server-port :server-software)))

(defun remote-user ()
  (format nil "~{~@[~a~]@~{~a=~a:~a~}~}"
          (let ((env (cgi-environment)))
            (list (let ((user (getf env :remote-user)))
                    (when (and user (plusp (length user))) user))
                  (mapcar (curry #'getf env) '(:remote-host :remote-addr :remote-port))))))

(defun cgi-error-reporter (c)
  (fresh-line *error-output*)
  (warn "~10% --- Error signaled: ~a ---~10%" c)
  (print-condition-backtrace c *error-output*)
  (format *error-output* "~10%")
  (throw 'cgi-bye (list :error 500 c)))

(defun cgi-call (fun)
  (let ((*run-model* :cgi)
        (*request* (cgi-environment))
        (*trace-output* *error-output*)
        (*print-right-margin* 120))
    (reply (catch 'cgi-bye
             (handler-bind
                 ((error #'cgi-error-reporter))
               (funcall fun))))))



(defun make-self-url (verb &rest more)
  (format nil "~a~a?verb=~a~@[?~{~a=~a~^&~}~]"
          +host-name+
          +uri-prefix+
          (url-encode verb)
          (mapcar #'url-encode more)))

(defun currency-symbol (currency-code)
  (cond
    ((equal currency-code "USD") "$")
    ((equal currency-code "EUR") "€")
    ((equal currency-code "JPY") "¥")
    ((equal currency-code "UKP") "£")
    (t "¤")))

(defun print-receipt-happy (amount currency-code token result)
  (format nil "Content-Type: text/html; charset=utf-8

<!DOCTYPE html>
<html>
 <head>
  <title> Payment Received </title>
  <link rel=\"stylesheet\" href=\"/reg/style.css\">
 </head>
 <body>
  <h1> Payment Received </h1>
  <p> Your payment has been received, and your registration is now
     complete. </p>
  <p> Payment amount: ~a~@[~a~]~:d.~2,'0d </p>
  <p> Invoice token: ~:d </p>
  <p> Result: ~a </p>
 </body>
</html>
"
          currency-code
          (currency-symbol currency-code)
          (round amount)
          (multiple-value-bind (dollars cents) (round amount)
            (declare (ignore dollars))
            (round (* 100 cents)))
          token result))

(defun checksum (number)
  (check-type number real)
  (cond
    ((< 9 number) (* 10 number))
    ((> 100 number)
     (checksum (reduce #'+ (map 'vector #'digit-char-p
                                (princ-to-string number)))))
    (t number)))

(defun token->invoice (token)
  (assert (string= "Herald/" token :end1 7 :end2 7))
  (let* ((parts (split-sequence #\/ token))
         (invoice (parse-integer (second parts)))
         (checksum (checksum invoice)))
    (assert (= checksum (parse-integer (third parts))))
    invoice))

(defun invoice->token (invoice)
  (format nil "Herald/~d/~d" invoice (checksum invoice)))

(defun send-mail-about-payment-with-bad-currency
    (destination amount currency-code token result)
  (cl-sendmail:with-email
      (mail destination
            :cc +registrar-mail+
            :bcc +sysop-mail+
            :subject (format nil "Invoice ~a: Incorrect Currency" token)
            :from +herald-mail+
            :other-headers (list (list "References" (concatenate 'string (string token) "." +herald-mail-base+))
                                 '("Organization" "Temple of Earth Gathering, Inc.")
                                 (list "X-Censorius-Herald-Version" (36r +compile-time+)))
            :charset :utf-8
            :type "text" :subtype "plain")
    (format nil  "Hi! This  is the Censorius Herald  program. I'm the software  agent that
helps  out with  Festival registrations.  I was  trying to  process your
payment, but  there's a problem; we  got your money, but  it's kinda the
wrong color.

See, I'm only  set up for US  Dollars, and somehow or other,  I got your
payment confirmation  back from  PayPal as ~a ~a ~:d.  I'm not  really sure
what a “~a” is,  but our Registration staff will probably  want to talk to
you to get this all sorted out.

I've sent  a courtesy copy of  this to Registration, so,  hopefully this
can all get sorted out quickly?

FIXME —  This wasn't sent to  the person trying to  register; you should
look up the invoice to see who it is.

Details: Invoice token ~s;
  result code from PayPal ~s"
            currency-code (currency-symbol currency-code) amount
            currency-code
            token result)))

(defun herald-cgi ()
  (cgi-call #'dispatch))

(defun read-vending (&optional invoice)
  (car (db-query "select * from `invoice-vending` where invoice=?"
                 invoice)))

(defun read-payments (&optional invoice)
  (db-query "select * from `payments` where invoice=?"
            invoice))

(defun invoice-payments (&optional invoice)
  (etypecase invoice
    (integer (read-payments invoice))))

(defun read-workshops (&optional invoice)
  ;; (db-query "select * from `workshops` where invoice=?"
  ;;           invoice)
  nil
  )

(defun read-merch-ordered (invoice)
  (etypecase invoice
    (integer (let ((ordered (db-query
                             "select * from `invoice-merch`  where invoice=?"
                             invoice)))
               (loop for item in (remove-duplicates (mapcar #'first ordered))
                  collecting (loop for (nil style qty)
                                in (remove-if-not (lambda (row)
                                                    (equal (first row) item)) ordered)
                                appending (list style qty)))))))

(defun guests->edn (invoice)
  (format nil "(defonce guests (atom ~/edn/))"
          (coerce (invoice-guests invoice) 'vector)))

(defun merch->edn (&optional invoice)
  (format nil "(defonce merch (atom {~{:~(~a~) (atom ~/edn/)~}}))"
          (read-merch invoice)))

(defun prices->edn ()
  (format nil "~%(defonce prices (atom ~/edn/))"
          (read-prices)))

(defun cl-user::yyyy-mm-dd (stream object colonp atp &rest parameters)
  (declare (ignore colonp atp parameters))
  (format stream "~a" object))

(defmethod handle-verb ((verb (eql :data)))
  (list :raw (format nil "Content-Type: application/javascript; charset=utf-8~2%~/json/~%"
                     (list :next-festival (next-festival)
                           :prices (read-prices)))))

(defun cgi-debugger (condition wrapper)
  (declare (ignore wrapper))
  (if-let (continue (find-restart 'continue))
    (progn
      (mail-error condition)
      (invoke-restart continue))
    (reply-error condition)))

(defun exec-cgi (&optional command-line)
  (let ((*debugger-hook* #'cgi-debugger)
        (drakma:*drakma-default-external-format* :utf-8)
        (flexi-streams:*default-eol-style* :lf))
    (when command-line
      (unless (every (compose #'zerop #'length #'string) command-line)
        (format *error-output* "CGI invoked with (ignored) command-line: ~s" command-line)))
    (handler-case
        (with-sql (herald-cgi))
      (error (c) (cgi-debugger c nil)))))

(defun exec-fcgi (command-line)
  (let ((*debugger-hook* #'cgi-debugger)
        (drakma:*drakma-default-external-format* :utf-8)
        (flexi-streams:*default-eol-style* :lf)        )
    (handler-case
        (with-sql (herald-fcgi (when command-line
                                 (first command-line))))
      (error (c) (cgi-debugger c nil)))))

(defun exec-repl (&optional command-line)
  (ql:quickload :prepl)
  (with-sql
    (format t "~&~|~%REPL for Censorius Herald~2%")
    (mapcar (compose #'eval #'read-from-string) command-line)
    (funcall (intern "REPL" :prepl))))

(defmethod handle-verb ((verb (eql :test-error)))
  (list :error 555 "This is a fake error, to test error handling."))

(defmethod handle-verb ((verb (eql :about)))
  (format *error-output* " Herald version is ~36r" +compile-time+)
  (when (field "deployment-marker")
    (format *error-output* "~25%"))
  (list :data (list :program "Censorius Herald"
                    :copyright "© 2013-2016, Bruce-Robert Fenn Pocock"
                    :version (36r +compile-time+)
                    :build-date (let ((built (multiple-value-list (decode-universal-time (+ +compile-time+
                                                                                            +compile-time-offset+)))))
                                  (list (nth 5 built) (nth 4 built) (nth 3 built))))))



(defun herald-user-agent (&optional (drakma-ua-key :drakma))
  (concatenate 'string
               (drakma::user-agent-string drakma-ua-key)
               " "
               "Herald/" (36r +compile-time+)))



(defvar *paypal-oauth2-cache* nil)

(defun paypal-get-new-oauth2-token ()
  (multiple-value-bind (response-body http-status-code response-headers uri stream happiness http-status-string )
      (drakma:http-request
       (herald-secret-config:paypal-url "oauth2/token")
       :method :post
       :external-format-in :utf-8 :external-format-out :utf-8
       :user-agent (herald-user-agent )
       :additional-headers '(("Accept" ."application/json")
                             ("Accept-Language". "en_US"))
       :basic-authorization (list (herald-secret-config:paypal-client-id) (herald-secret-config:paypal-secret))
       :parameters '(("grant_type". "client_credentials")))
    (declare (ignore response-headers stream happiness))
    (format *error-output* "~& $$$$ PayPal OAuth2 token acquired: status=~a (from ~a)" http-status-string uri)
    (let ((body (flexi-streams:octets-to-string response-body)))
      (unless (> 400 http-status-code)
        (throw 'cgi-bye (list :error http-status-code
                              (format nil
                                      "PayPay responded to OAth2 token with (code ~d): ~a"
                                      http-status-code http-status-string)
                              body)))
      (let ((jso (st-json:read-json body)))
        (assert (string-equal "Bearer" (st-json:getjso "token_type" jso)) ()
                "I require a Bearer token to access PayPal, but got ~a" (st-json:getjso "token_type" jso))
        (unless (string-equal (herald-secret-config:paypal-app-id) (st-json:getjso "app_id" jso)) ()
                (warn "PayPal gave me a token for some other application. Huh?~%Expected: ~a~%Got: ~a"
                      (herald-secret-config:paypal-app-id) (st-json:getjso "app_id" jso)))
        (let ((token (st-json:getjso "access_token" jso))
              (expiry (+ (get-universal-time) (as-number (st-json:getjso "expires_in" jso)))))
          (setf *paypal-oauth2-cache* (cons token expiry))
          (values token
                  (st-json:getjso "nonce" jso)))))))

(defun paypal-oauth2-token ()
  (if-let (cache *paypal-oauth2-cache*)
    (destructuring-bind (token . expiry) cache
      (if (< (get-universal-time) expiry)
          token
          (paypal-get-new-oauth2-token)))
    (paypal-get-new-oauth2-token)))

(defun describe-festival-briefly (invoice amount)
  (format nil "TEG FPG ~{~a ~a~} Registration, Invoice #~:d — $ ~$ (~r dollars and ~r cents)"
          (next-festival)
          invoice
          amount
          (floor amount)
          (multiple-value-bind (dollars cents)
              (floor amount)
            (declare (ignore dollars))
            (round cents .01))))

(defun paypal-hateos-link (link)
  (list (st-json:getjso "rel" link)
        (st-json:getjso "method" link)
        (st-json:getjso "href" link)))

(defun make-paypal-payment-demand-string (invoice amount)
  (format nil "~/json/"
          `(:intent "sale"
                    :redirect_urls (:return_url
                                    ,(make-self-url "paypal-return")
                                    :cancel_url ,(make-self-url "paypal-cancel"))
                    :payer (:payment_method "paypal")
                    :transactions #((:amount (:total ,(format nil "~$" amount)
                                              :currency ,+accepted-currency+)
                                     :description
                                     ,(describe-festival-briefly invoice amount))))))

(defun paypal-demand-payment (invoice amount)
  (multiple-value-bind (response-body http-status-code response-headers uri stream happiness http-status-string )
      (drakma:http-request
       (herald-secret-config:paypal-url "payments/payment")
       :method :post
       :external-format-in :utf-8 :external-format-out :utf-8
       :user-agent (herald-user-agent )
       :additional-headers `(("Content-Type" . "application/json")
                             ("Authorization" . ,(concatenate 'string "Bearer " (paypal-oauth2-token))))
       :content (make-paypal-payment-demand-string invoice amount))
    (declare (ignore response-headers stream happiness))
    (let ((body (flexi-streams:octets-to-string response-body)))
      (format *error-output* " $$$$ PayPal at ~a reports HTTP/~d (~a) demanding payment of $ ~$~2%~a"
              uri http-status-code http-status-string amount
              body)
      (unless (> 400 http-status-code)
        (throw 'cgi-bye
          (list :error http-status-code
                (format nil
                        "PayPal responded to payment request for $ ~$ with (code ~d): ~a"
                        amount http-status-code http-status-string)
                body)))
      (let ((jso (st-json:read-json body)))
        (let* ((id (st-json:getjso "id" jso))
               (links (mapcar #'paypal-hateos-link (st-json:getjso "links" jso)))
               (approval-href (cdr (find "approval_url" links :key #'car :test #'string-equal)))
               (capture-href (cdr (find "execute" links :key #'car :test #'string-equal))))
          (values id approval-href capture-href))))))

(defun payment-id->invoice (payment-id)
  (cadar (db-query "select invoice from payments where source='PayPal' and via=?" payment-id)))

(defun paypal-get-payment-status (payment-id)
  (multiple-value-bind (response-body http-status-code response-headers uri stream happiness http-status-string )
      (drakma:http-request
       (herald-secret-config:paypal-url "payments/payment/" payment-id)
       :method :get
       :external-format-in :utf-8 :external-format-out :utf-8
       :user-agent (herald-user-agent )
       :additional-headers `(("Content-Type" . "application/json")
                             ("Authorization" . ,(concatenate 'string "Bearer " (paypal-oauth2-token)))))
    (declare (ignore response-headers stream happiness))
    (let ((body (flexi-streams:octets-to-string response-body)))
      (format *error-output* "~& $$$$ PayPal at ~a reports HTTP/~d (~a) reading payment status with ID ~a~2%~a"
              uri http-status-code http-status-string payment-id
              body)
      (unless (> 400 http-status-code)
        (throw 'cgi-bye
          (list :error http-status-code
                (format nil
                        "PayPal responded to payment status request for ~a with (code ~d): ~a"
                        payment-id http-status-code http-status-string)
                body)))
      (let* ((jso (st-json:read-json body))
             (payer (st-json:getjso "payer" jso))

             (payment (st-json:getjso "id" jso))
             (cart (st-json:getjso "cart" jso))
             (create_time (st-json:getjso "create_time" jso))
             (update_time (st-json:getjso "update_time" jso))

             (payer/payment_method (st-json:getjso "payment_method" payer))
             (payer/status (st-json:getjso "status" payer))
             (payer/email (st-json:getjso "email" payer))
             (payer/first_name (st-json:getjso "first_name" payer))
             (payer/last_name (st-json:getjso "last_name" payer))
             (payer_id (st-json:getjso "payer_id" payer))

             (payer-info (st-json:getjso "payer_info" payer))
             (shipping (st-json:getjso "shipping_address" payer-info))
             (ship_to_name (st-json:getjso "recipient_name" shipping))
             (ship_to_line_1 (st-json:getjso "line1" shipping))
             (ship_to_line_2 (st-json:getjso "line2" shipping))
             (ship_to_city (st-json:getjso "city" shipping))
             (ship_to_state (st-json:getjso "state" shipping))
             (ship_to_postal_code (st-json:getjso "postal_code" shipping))
             (ship_to_country_code (st-json:getjso "country_code" shipping))
             (phone (st-json:getjso "phone" payer))
             (phone_country_code (st-json:getjso "country_code" payer))

             (billing (st-json:getjso "billing_address" payer-info))
             (bill_to_line_1 (when billing (st-json:getjso "line1" billing)))
             (bill_to_line_2 (when billing (st-json:getjso "line2" billing)))
             (bill_to_city (when billing (st-json:getjso "city" billing)))
             (bill_to_state (when billing (st-json:getjso "state" billing)))
             (bill_to_postal_code (when billing (st-json:getjso "postal_code" billing)))
             (bill_to_country_code (when billing (st-json:getjso "country_code" billing)))

             (transaction (first (st-json:getjso "transactions" jso)))
             (payment_amount (st-json:getjso "total" (st-json:getjso "amount" transaction)))

             (links (st-json:getjso "links" jso))
             (approval_url (st-json:getjso "href" (find "approval_url" links
                                                        :test #'string=
                                                        :key (curry #'st-json:getjso "rel"))))
             (execute_url (st-json:getjso "href" (find "execute" links
                                                       :test #'string=
                                                       :key (curry #'st-json:getjso "rel")))))
        (warn "Updating status in database")
        (if (cadar (db-query "select 1 from `paypal-payment-metadata` where payment = ?"
                             payment))
            (db-query
             "update `paypal-payment-metadata` set cart = ?, `payer/payment_method` = ?, `payer/status` = ?,
`payer/email` = ?, `payer/first_name` = ?, `payer/last_name` = ?, payer_id = ?,
ship_to_name = ?, ship_to_line_1 = ?, ship_to_line_2 = ?, ship_to_city = ?,
ship_to_state = ?, ship_to_postal_code = ?, ship_to_country_code = ?, phone = ?,
phone_country_code = ?, bill_to_line_1 = ?, bill_to_line_2 = ?,
bill_to_city = ?, bill_to_state = ?, bill_to_postal_code = ?, bill_to_country_code = ?,
payment_amount = ?, create_time = ?, update_time = ?, approval_url = ?,
execute_url =?
 where payment = ?"
             cart payer/payment_method payer/status
             payer/email payer/first_name payer/last_name payer_id
             ship_to_name ship_to_line_1 ship_to_line_2 ship_to_city
             ship_to_state ship_to_postal_code ship_to_country_code phone
             phone_country_code bill_to_line_1 bill_to_line_2
             bill_to_city bill_to_state bill_to_postal_code bill_to_country_code
             payment_amount create_time update_time approval_url
             execute_url
             payment)
            (db-query
             "insert into `paypal-payment-metadata` (
payment, cart, `payer/payment_method` , `payer/status` , `payer/email` , `payer/first_name` ,
 `payer/last_name` , payer_id , ship_to_name , ship_to_line_1 , ship_to_line_2 , ship_to_city ,
 ship_to_state , ship_to_postal_code , ship_to_country_code ,
 phone , phone_country_code , bill_to_line_1 , bill_to_line_2 , bill_to_city ,
 bill_to_state , bill_to_postal_code , bill_to_country_code ,
 payment_amount , create_time , update_time , approval_url , execute_url )
values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )"
             payment cart payer/payment_method payer/status payer/email payer/first_name payer/last_name payer_id ship_to_name
             ship_to_line_1 ship_to_line_2 ship_to_city ship_to_state ship_to_postal_code ship_to_country_code phone
             phone_country_code bill_to_line_1 bill_to_line_2 bill_to_city bill_to_state
             bill_to_postal_code bill_to_country_code payment_amount create_time update_time approval_url execute_url))
        (db-query "update `paypal-payment-metadata` set raw = concat (coalesce(raw,'*'), concat ('\\n\\n**\\n\\n', ?))"
                  body)
        (db-query "insert into payments (invoice, via, source, amount, confirmation, note, cleared) values (?, ?, 'PayPal', ?, ?, ?, 'NOW')"
                  (payment-id->invoice payment-id) payment-id payment_amount
                  payer_id
                  (format nil "Paid ~:[~*~*~;by ~a ~a~]~@[ <~a>~]"
                          (and payer/first_name payer/last_name)
                          payer/first_name payer/last_name payer/email))
        jso))))

(defun paypal-capture-payment (payment-id token payer-id)
  (declare (ignore token))
  (multiple-value-bind (response-body http-status-code response-headers uri stream happiness http-status-string )
      (drakma:http-request
       (herald-secret-config:paypal-url "payments/payment/" payment-id "/execute")
       :method :post
       :external-format-in :utf-8 :external-format-out :utf-8
       :user-agent (herald-user-agent )
       :additional-headers `(("Content-Type" . "application/json")
                             ("Authorization" . ,(concatenate 'string "Bearer " (paypal-oauth2-token))))
       :content (format nil "~/json/" `(:payer_id payer-id)))
    (declare (ignore response-headers stream happiness))
    (let ((body (flexi-streams:octets-to-string response-body)))
      (format *error-output* "~& $$$$ PayPal at ~a reports HTTP/~d (~a) capturing payment with ID ~a (payer ~a)~2%~a"
              uri http-status-code http-status-string payment-id payer-id
              body)
      (unless (> 400 http-status-code)
        (throw 'cgi-bye (list :error http-status-code
                              (format nil "PayPay responded to payment capture operation with (code ~d): ~a"
                                      http-status-code http-status-string)
                              body)))
      (let ((jso (st-json:read-json body)))
        jso))))

;;;Get payment approval

;; Please note the HATEOAS links  in the example above. Direct the user to the approval_url  on the PayPal site, so that
;; the user can  approve the payment. The user  must approve the payment  before you can execute and  complete the sale.

;; Execute the payment

;; When the user approves the  payment, PayPal redirects the user to the return_url that  was specified when the payment
;; was created. A payer Id and payment Id are appended to the return URL, as PayerID and paymentId:

;; http://<return_url>?paymentId=PAY-6RV70583SB702805EKEYSZ6Y&token=EC-60U79048BN7719609&PayerID=7E7MGXCWTTKK2

;; The token value appended to the return URL is not needed when you execute the payment.

;; To execute the payment after the user’s approval, make a  /payment/execute/ call. In the body of the request, use the
;; payer_id value  that was appended  to the return  URL. In  the header, use  the access token  that you used  when you
;; created the payment.

;; curl -v https://api.sandbox.paypal.com/v1/payments/payment/PAY-6RV70583SB702805EKEYSZ6Y/execute/ \
;; -H 'Content-Type: application/json' \
;; -H 'Authorization: Bearer {accessToken}' \
;; -d '{ "payer_id" : "7E7MGXCWTTKK2" }'

(defun redirect-to-invoice (invoice &optional adminp)
  (throw 'cgi-bye
    (list :raw (format nil "Status: 301 Time to go back
Location: ~a

~0@* go back to ~a"
                       (recall-link invoice adminp)))))

(defun close-invoice (invoice)
  (db-query "update invoices set closed=now() where invoice=?" invoice)
  (mail-registrar-completed-invoice invoice)
  (mail-user-completed-invoice invoice)
  (when (invoice-is-vending-p invoice)
    (mail-vendors-completed-invoice invoice))
  (when (read-workshops invoice)
    (mail-workshops-completed-invoice invoice))
  (values t "closed"))

(defun close-if-paid (invoice)
  (let* ((data (read-general invoice))
         (payments (read-payments invoice))
         (sum (reduce #'+ (mapcar (rcurry #'getf :amount) payments))))
    (cond ((getf data :closed)
           (values nil "already closed"))

          ((zerop (length payments))
           (values nil "no payments or bills ever recorded"))

          ((not (zerop sum))
           (values nil (format nil "balance is $ ~$" sum)))

          (t (close-invoice invoice)))))

(defmethod handle-verb ((verb (eql :paypal-return)))
  (let* ((payment-id (field "paymentId"))
         (invoice (payment-id->invoice payment-id))
         (payer-id (field "PayerID"))
         (token (field "token")))
    (assert (and payment-id payer-id token))
    (catch 'cgi-bye
      (paypal-capture-payment payment-id token payer-id))
    (paypal-get-payment-status payment-id)
    (close-if-paid invoice)
    (redirect-to-invoice invoice)))

(defmethod handle-verb ((verb (eql :paypal-cancel)))
  (redirect-to-invoice (payment-id->invoice (field "paymentId"))))

(defun invoice-total ()
  (field 'money 'balance-due))

(defun record-payment-demand (invoice-id amount paypal-id)
  (db-query
   "insert into payments (invoice, via, source, amount, confirmation, note, cleared)
values (?, ?, 'PayPal', ?, null, 'requested (not yet received)', 'now')"
   invoice-id
   paypal-id
   (- amount)))

(defun user-wants-to-pay (invoice total)
  (multiple-value-bind (id approval-href capture-href)
      (paypal-demand-payment invoice total)
    (declare (ignore capture-href))
    (record-payment-demand invoice total id)
    (list :invoice invoice
          :token (user-key invoice)
          :next-hop (second approval-href))))

(defmethod handle-verb ((verb (eql :pay)))
  (let* ((invoice (field :invoice))
         (total (invoice-total)))
    (setf invoice (getf (save-invoice) :invoice))
    (if (= 0 total)
        (progn (close-invoice invoice)
               (throw 'cgi-bye (list :data (list :invoice invoice
                                                 :token (user-key invoice)
                                                 :next-hop (recall-link invoice)))))
        (throw 'cgi-bye (list :data (user-wants-to-pay invoice total))))))

(defun record-payment-captured (payment-id payer-id token)
  (db-query "insert into payments (invoice, via, source, amount, confirmation, note, cleared)
values (?, ?, 'PayPal', ?, payment-id, 'Paid via PayPal, token ' || ? || ' payer ID ' || ?, true"
            (payment-id->invoice payment-id)
            payment-id
            (cadar (db-query "select - amount from payments where via=?" payment-id))
            token
            payer-id))



(defgeneric find-invoice-by-field% (type nullp operator))
(defmethod find-invoice-by-field% (type (nullp (eql nil)) (operator (eql :∅)))
  (declare (ignore type nullp operator))
  " is null and (false or ?)")
(defmethod find-invoice-by-field% (type nullp (operator (eql :is-null)))
  (declare (ignore nullp operator))
  (find-invoice-by-field% type t :∅ ))
(defmethod find-invoice-by-field% (type nullp (operator (eql :∅)))
  (declare (ignore type nullp operator))
  "is null and (true or ?)")
(defmethod find-invoice-by-field% (type nullp (operator (eql :is-not-null)))
  (declare (ignore nullp operator))
  (find-invoice-by-field% type t :¬∅ ))
(defmethod find-invoice-by-field% (type nullp (operator (eql :¬∅)))
  (declare (ignore type nullp operator))
  "is not null and (true or ?)")
(defmethod find-invoice-by-field% ((type (eql :bigint)) nullp (operator (eql :≤)))
  (declare (ignore type nullp operator))
  " >= ?")
(defmethod find-invoice-by-field% ((type (eql :bigint)) nullp (operator (eql :≤)))
  (declare (ignore type nullp operator))
  " < ?")
(defmethod find-invoice-by-field% ((type (eql :bigint)) nullp (operator (eql :≠)))
  (declare (ignore type nullp operator))
  " <> ?")
(defmethod find-invoice-by-field% (type nullp (operator (eql :<=)))
  (declare (ignore operator))
  (find-invoice-by-field% type nullp :≤ ))
(defmethod find-invoice-by-field% (type nullp (operator (eql :>=)))
  (declare (ignore operator))
  (find-invoice-by-field% type nullp :≥ ))
(defmethod find-invoice-by-field% (type nullp (operator (eql :/=)))
  (declare (ignore operator))
  (find-invoice-by-field% type nullp :≠ ))
(defmethod find-invoice-by-field% ((type (eql :bigint)) nullp (operator (eql :<)))
  (declare (ignore type nullp operator))
  "< ?")
(defmethod find-invoice-by-field% ((type (eql :bigint)) nullp (operator (eql :>)))
  (declare (ignore type nullp operator))
  "> ?")
(defmethod find-invoice-by-field% ((type (eql :bigint)) nullp (operator (eql :=)))
  (declare (ignore type nullp operator))
  "= ?")
(defmethod find-invoice-by-field% ((type (eql :tinyint)) nullp (operator (eql :t)))
  (declare (ignore type nullp operator))
  "= 1 and (true or ?)")
(defmethod find-invoice-by-field% ((type (eql :varchar)) nullp (operator (eql :=)))
  (declare (ignore type nullp operator))
  "= ?")
(defmethod find-invoice-by-field% ((type (eql :varchar)) nullp (operator (eql :starts-with)))
  (declare (ignore type nullp operator))
  " like ?'")
(defmethod find-invoice-by-field% ((type (eql :varchar)) nullp (operator (eql :ends-with)))
  (declare (ignore type nullp operator))
  " like ?")
(defmethod find-invoice-by-field% ((type (eql :varchar)) nullp (operator (eql :contains)))
  (declare (ignore type nullp operator))
  " like ?")
(defmethod find-field-transform ((operator (eql :starts-with)) pattern)
  (declare (ignore operator))
  (concatenate 'string pattern "%"))
(defmethod find-field-transform ((operator (eql :ends-with)) pattern)
  (declare (ignore operator))
  (concatenate 'string "%" pattern))
(defmethod find-field-transform ((operator (eql :contains)) pattern)
  (declare (ignore operator))
  (concatenate 'string "%" pattern "%"))
(defmethod find-field-transform ((operator t) pattern)
  (declare (ignore operator))
  pattern)

(defun field-general-type (type)
  (keyword* (if (find #\( type :test #'char=)
                (subseq type 0 (position #\( type :test #'char=))
                type)))



(defun find-invoice-by-field (table field operator pattern)
  (if-let (table-found (db-query (concatenate 'string "describe `invoice-" table "`")))
    (if-let (field-found (find field table-found
                               :key (rcurry #'getf :field)
                               :test #'string-equal))
      (let* ((field field-found)
             (type (getf field :type)))
        (mapcar #'second
                (db-query (let ((subquery
                                 (find-invoice-by-field% (field-general-type type)
                                                         (getf field :null)
                                                         (keyword* operator))))
                            (assert (= 1 (count #\? subquery)))
                            (concatenate 'string "select invoice from  `invoice-"
                                         table "` where `" (getf field :field) "` "
                                         subquery))
                          (find-field-transform operator pattern))))
      (list :error 404 (format nil "The table invoice-~a has no field ~a" table field)))
    (list :error 404 (format nil "There is no table named invoice-~a" table))))

(defun find-invoice-multi (table joiner &rest fields+operators+patterns)
  (catch 'exit
    (if-let (table-found (db-query (concatenate 'string "describe `invoice-" table "`")))
      (mapcar #'second
              (apply #'db-query
                     (format nil
                             (concatenate 'string
                                          "select invoice from  `invoice-" table
                                          "` where ~{ ~a ~^ " joiner " ~}")
                             (loop for (field operator pattern) in fields+operators+patterns
                                collect
                                  (if-let (field-found (find field table-found
                                                             :key (rcurry #'getf :field)
                                                             :test #'string-equal))
                                    (let ((subquery
                                           (find-invoice-by-field% (field-general-type (getf field-found :type))
                                                                   (getf field-found :null)
                                                                   (keyword* operator))))
                                      (assert (= 1 (count #\? subquery)))
                                      (concatenate 'string " `" (getf field-found :field) "` "
                                                   subquery " "))
                                    (throw 'exit
                                      (values nil
                                              (list :error 404 (format nil "The table invoice-~a has no field ~a"
                                                                       table field)))))))
                     (loop for (field operator pattern) in fields+operators+patterns
                        collect (find-field-transform operator pattern))))
      (values nil
              (list :error 404 (format nil "There is no table named invoice-~a" table))))))



(defun time->date (time)
  (when time
    (multiple-value-bind (s m h day month year dow) (decode-universal-time time)
      (declare (ignore s m h))
      (format nil "~a ~4d-~2,'0d-~2,'0d"
              (elt '("Mon" "Tue" "Wed" "Thu" "Fri" "Sat" "Sun") dow)
              year month day))))

(defun time->string (time)
  (when time
    (multiple-value-bind (s m h day month year dow) (decode-universal-time time)
      (format nil "~a ~4d-~2,'0d-~2,'0d @ ~2,'0d:~2,'0d:~2,'0d"
              (elt '("Mon" "Tue" "Wed" "Thu" "Fri" "Sat" "Sun") dow)
              year month day
              h m s))))

(defun join (joiner sequence)
  (format nil (concatenate 'string "~{~@[~a~]~^" joiner "~}") sequence))

(defun invoice-summary (invoice)
  (let ((payments (mapcar (curry #'* 1.0)
                          (mapcar (rcurry #'getf :amount)
                                  (read-payments invoice)))))
    (list :invoice invoice
          :guests (mapcar (lambda (guest)
                            (join " " (mapcar (curry #'getf guest)
                                              '(:given-name :called-by :surname))))
                          (read-guests invoice))
          :closed (time->date (getf (read-general invoice) :closed))
          :payments payments
          :balance (reduce #'+ payments))))

(defun invoice-simple-line (invoice)
  (destructuring-bind (&key guests balance &allow-other-keys) (invoice-summary invoice)
    (format nil "Invoice # ~:d (~{~a~^, ~}) — Balance $ ~$"
            invoice guests balance)))

(defun find-invoice-simple-search (table field operator pattern)
  (let ((invoice-numbers (find-invoice-by-field table field (keyword* operator) pattern)))
    (mapcar #'invoice-summary
            invoice-numbers)))

(defun cookie-value ()
  (let* ((pairs (mapcar (lambda (pair)
                          (let ((key (url-decode (first pair)))
                                (value (or (url-decode (second pair)) t)))
                            (list key value)))
                        (mapcar (curry #'split-sequence #\=)
                                (mapcar #'string-trim " "
                                        (cl-ppcre:split "[;,]"
                                                        (getf *request* :http-cookie)))))))
    ;; (apply (lambda (name value &rest attributes)
    ;;          (apply
    ;;           (mapcan (lambda (pair) (list (make-keyword (string-upcase (first pair))) (second pair)))))) pairs)
    (destructuring-bind (name value &rest _) pairs
      (declare (ignore _))
      (assert (string-equal name "Herald-Friend-Cookie"))
      value)))

(defun check-admin-auth (); TODO
  (warn "Ignoring and assuming this is a valid admin user: ~a ⁂" (remote-user))
  t


  #+ (or)(let ((cookie (cookie-value)))
           (cond ((and cookie (plusp (length cookie)))
                  (if-let (()))
                  )
                 (:else
                  (setf (getf *request* user-cookie) (format nil "~"))
                  nil))))

(defmethod handle-verb ((verb (eql :find-invoice)))
  (check-admin-auth)
  (let ((table (field "table"))
        (field (field "field"))
        (operator (field "operator"))
        (value (field "value")))
    (find-invoice-simple-search table field operator value)    ))

(defvar *suggested-search-fields*
  '((guests surname) (guests given-name) (guests called-by)))

(defun closed-invoices-for-festival (season year)
  (mapcar #'second
          (db-query "select invoice from invoices
where `festival-season`=? and `festival-year` =? and closed is not null"
                    season year)))

(defun unclosed-invoices-for-festival (season year)
  (mapcar #'second
          (db-query "select invoices.invoice from invoices
left join payments on invoices.invoice=payments.invoice
where `festival-season`=? and `festival-year` =? and closed is null
and payments.invoice is not null"
                    season year)))

(defun suspended-invoices-for-festival (season year)
  (mapcar #'second
          (db-query "select invoices.invoice from invoices
left join payments on invoices.invoice=payments.invoice
where `festival-season`=? and `festival-year` =? and closed is null
and payments.invoice is null"
                    season year)))

(defun festival-overview-report (&optional (season (next-festival-season))
                                   (year (next-festival-year)))
  (list :closed (closed-invoices-for-festival season year)
        :unclosed (unclosed-invoices-for-festival season year)
        :suspended (suspended-invoices-for-festival season year)))

(defun festival-overview-report/text (&optional (season (next-festival-season))
                                        (year (next-festival-year))
                                        summary-only-p)
  (destructuring-bind (&key closed unclosed suspended)
      (festival-overview-report season year)
    (format nil "

⛤ Festival Overview Report on Invoices ⛤

Festival: ~a ~d

Invoice status:
 • Closed (ready to go): ~:d~*
 • Unclosed: ~:d~*
 • Suspended for review: ~:d~*
~:[~2@*

★ There are ~r closed invoice~:p.
~{~% • ~a~}

★ There are ~r unclosed invoice~:p.
~{~% • ~a~}

★ There are ~r suspended invoice~:p.
~{~{~% • ~a~@[~%    Note: “~a”~]~}~}
~;~]
End of report."
            season year
            (length closed) (mapcar #'invoice-simple-line closed)
            (length unclosed) (mapcar #'invoice-simple-line unclosed)
            (length suspended) (mapcar (lambda (invoice)
                                         (list (invoice-simple-line invoice)
                                               (let ((general (read-general invoice)))
                                                 (getf general :note)))) suspended)
            summary-only-p)))



(defun vendors-report-for-festival (season year)
  (db-query "select invoices.closed, `invoice-vending`.invoice,
   title, blurb, notes, qty, `mqa-license`, `bpr-license`, agreement, menu, masseurp, `food-vendor-p`,
  `meal-plan-p`, `approved-by`, `license-checked-by`, approved, `license-checked`
from `invoice-vending`
left join invoices on invoices.invoice=`invoice-vending`.invoice
where invoices.`festival-season` = ? and invoices.`festival-year` = ?
and `invoice-vending`.qty > 0"
            season year))

(defun vendor-report/needs-bpr-license-checked-p (vendor)
  (and (getf vendor :closed)
       (or (getf vendor :bpr-license)
           (getf vendor :food-vendor-p))
       (or (not (getf vendor :license-checked))
           (not (getf vendor :license-checked-by)))))

(defun vendor-report/needs-mqa-license-checked-p (vendor)
  (and  (getf vendor :closed)
        (or (getf vendor :mqa-license)
            (getf vendor :masseurp))
        (or (not (getf vendor :license-checked))
            (not (getf vendor :license-checked-by)))))


(defun vendor-report/needs-approval-p (vendor)
  (and (getf vendor :closed)
       (or (not (getf vendor :approved))
           (not (getf vendor :approved-by)))))

(defun word-wrap (text &optional (prefix "") (width 72))
  (format nil (concatenate 'string
                           "~{~<~%"
                           prefix
                           "~1,"
                           (princ-to-string (- width
                                               (length prefix)))
                           ":;~A~> ~}")
          (mapcar (lambda (word)
                    (regex-replace-all
                     (coerce #(#\newline) 'string)
                     word
                     (concatenate 'string #(#\newline) prefix)))
                  (split-sequence #\space text))))

(defun vendor-status/text (vendor)
  (format t "
-----------------------------------------------------------~:[------------~;Slip ~7a~]-
“~a” ~:[~64t⁂unpaid~;~68tpaid~]
  ~[⁂~;single, 10´×10´~;double, 20´×10´~;triple, 30´×10´~:;~r slip~:p~]~
~40t~:[⁂Vendor agreement NOT signed!~%~;~
✓ agreement~]~
~55t~@[🍣 Food~*~]~62t~@[👐 Massage~*~]

~:[~*⁂ No blurb provided for handbook/web~
~;Blurb:~2% | ~a~]

~@[~*Food vendor:
 | ~:[⁂BPR license not provided~;BPR License# ~:*~a~]
~@[~* | ~% | Vendor offers a meal plan.~]
~@[~* | ~% | Menu:
 |  | ~a~]~%~]
~@[~*Massage vendor:
 | ~:[⁂MQA license not provided~;MQA License# ~:*~a~]~]

Vendor Concierge Notes:
~:[(no notes)~; | ~:*~a~]

~:[~*~*~;✓ Vendor approved by ~a on ~a.~]~
~:[~*~*~;✓ License checked by ~a on ~a.~]~
~@[~*□ Vendor needs BPR License checked~]~
~@[~*□ Vendor needs MQA License checked~]~
~@[~*□ Vendor needs approval~]~
~@[~*□ Vendor has not yet paid their registration fees~]
~%"
          (getf vendor :slip)
          (getf vendor :title) (getf vendor :closed)
          (getf vendor :qty) (eql 1 (getf vendor :agreement))
          (eql 1 (getf vendor :food-vendor-p)) (eql 1 (getf vendor :masseurp))
          (getf vendor :blurb) (word-wrap (getf vendor :blurb) " | ")
          (eql 1 (getf vendor :food-vendor-p))
          (getf vendor :bpr-license)
          (eql 1 (getf vendor :meal-plan-p))
          (getf vendor :menu) (word-wrap (getf vendor :menu) " |  | ")

          (eql 1 (getf vendor :masseurp))
          (getf vendor :mqa-license)

          (getf vendor :notes)
          (and (getf vendor :approved) (getf vendor :approved-by))
          (getf vendor :approved-by) (getf vendor :approved)
          (and (getf vendor :license-checked) (getf vendor :license-checked-by))
          (getf vendor :license-checked-by) (getf vendor :license-checked)
          (vendor-report/needs-bpr-license-checked-p vendor)
          (vendor-report/needs-mqa-license-checked-p vendor)
          (vendor-report/needs-approval-p vendor)
          (null (getf vendor :closed))))

(defun vendor-report/text (&optional (season (next-festival-season))
                             (year (next-festival-year)))
  (with-output-to-string (*standard-output*)
    (let ((vendors (sort (sort (vendors-report-for-festival season year)
                               #'string< :key (rcurry #'getf :title))
                         #'< :key (lambda (n)
                                    (or (and (getf n :slip)
                                             (parse-integer (getf n :slip)
                                                            :junk-allowed t))
                                        9999)))))
      (format t "

⛤ Vendors Report

There are ~r vendor registration~:p for ~a ~a.

 • ~r are paid (~r are not).

~[~:;~:* • ~r massage vendor~:p with MQA license~:p needing to be checked.

~]~[~:;~:* • ~r food vendor~:p with BPR  license~:p needing to be checked.

~]~[~:;~:* • ~r vendor~:p awaiting final approval.

~]"
              (length vendors) season year
              (count-if (rcurry #'getf :closed) vendors)
              (count-if-not (rcurry #'getf :closed) vendors)
              (count-if #'vendor-report/needs-mqa-license-checked-p vendors)
              (count-if #'vendor-report/needs-bpr-license-checked-p vendors)
              (count-if #'vendor-report/needs-approval-p vendors))
      (format t "~%★ All Vendors ★~%")
      (dolist (vendor vendors)
        (vendor-status/text vendor)))))

(defun mail-vendors-completed-invoice (invoice)
  (mail-reg +vendors-mail+
            (format nil "TEG FPG Vendor Registration (Invoice ~:d)" invoice)
            (format nil "Invoice.~d." invoice)
            "
Invoice # ~:d has been completed by the user.

In the near future, you'll be able to edit this on-line. ⁂TODO

~a

———

~a

———

This eMail was composed by  your faithful, robotic Herald. Replying will
not do any good; I am a  lowly robot without the ability to read eMails.
If this looks like a software problem, you might contact my operator:

~a

Secret cookie: ~36r"
            invoice
            (vendor-status/text invoice)
            (itinerary/text invoice)
            +sysop-mail+
            +compile-time+))

(defun mail-workshops-completed-invoice (invoice)
  (mail-reg +workshops-mail+
            (format nil "TEG FPG Workshop Registration (Invoice ~:d)" invoice)
            (format nil "Invoice.~d." invoice)
            "
Invoice # ~:d has been completed by the user.

In the near future, you'll be able to edit this on-line. ⁂TODO

~a

———

This eMail was composed by  your faithful, robotic Herald. Replying will
not do any good; I am a  lowly robot without the ability to read eMails.
If this looks like a software problem, you might contact my operator:

~a

Secret cookie: ~36r
"
            invoice
            (itinerary/text invoice)
            +sysop-mail+
            +compile-time+))

(defun mail-registrar-adjustment (invoice amount note ref)
  (mail-reg +registrar-mail+
            (format nil "Manual adjustment toTEG FPG invoice ~:d ($ ~$)" invoice amount)
            (format nil "Herald/adjust/~a" ref)
            "A manual adjustment has been entered on invoice # ~:d.~2%
An adjustment in the amount of $ ~$ was entered by ~a. Reference # ~a.~2%
Reason given: ~2% ~a~%
This is an automated message. I'm just a robot, doing what I'm told … ~2% ————~2% ~a"
            invoice amount (remote-user) ref note (itinerary/text invoice)))

(defun mail-user-adjustment (invoice amount note ref)
  (mail-reg (mail-to-user invoice)
            (format nil "Adjustment toTEG FPG invoice ~:d ($ ~$)" invoice amount)
            (format nil "Herald/adjust/~a" ref)
            "An adjustment has been entered on invoice # ~:d.~2%
A   ~:[debit~;credit~]*  adjustment   in  the   amount  of   $  ~$   was
entered (reference # ~a).~2%
(* — This is ~2:*~:[an increase~;a  drecrease~] in the amount you owe by $ ~$.)~2%
   Reason given: ~2% ~a~%
   ~2% ————~%
   ~a
   ~2% ————~2%
   Please DO NOT reply to this eMail. I, the lowly Herald, am but a robotic
   messenger, and am  unable to read eMail nor help  you further. My secret
   cookie says “~36r.”
   "
            invoice
            (plusp amount)
            (abs amount) ref
            note (itinerary/text invoice)
            +compile-time+))

(defun add-adjustment (invoice amount note)
  (check-admin-auth)
  (let ((ref (36r (get-universal-time))))
    (db-query "insert into payments (invoice,via,source,amount,confirmation,note,cleared)
values (?,?,'Adjustment',?,?,?,now())"
              invoice ref amount (remote-user) note)
    (mail-registrar-adjustment invoice amount note ref)
    (mail-user-adjustment invoice amount note ref)
    (close-if-paid invoice)))

(defmethod handle-verb ((verb (eql :adjust)))
  (let ((invoice (parse-integer (field :invoice))))
    (assert (equal (admin-key invoice) (field :admin-key)))
    (add-adjustment invoice
                    (* (cond ((string-equal "credit" (field :adjust-type)) 1)
                             ((string-equal "debit" (field :adjust-type)) -1)
                             (t (error "Credit or debit?")))
                       (abs (parse-money (field :amount))))
                    (field :note))
    (close-if-paid invoice)
    (redirect-to-invoice invoice t)))

(defmethod handle-verb ((verb (eql :comp)))
  (let ((invoice (parse-integer (field :invoice))))
    (assert (equal (admin-key invoice) (field :admin-key)))
    (add-adjustment invoice
                    (- (invoice-balance invoice))
                    (field :note))
    (close-invoice invoice)
    (redirect-to-invoice invoice t)))

(defmethod handle-verb ((verb (eql :cron-weekly-reports)))
  (destructuring-bind  (season year) (next-festival)
    (mail-reg +registrar-mail+
              (format nil "Registration Weekly Overview for ~:(~a~) ~d" season year)
              (format nil "Festival.~a.~d" season year)
              "~a" (festival-overview-report/text season year))
    (mail-reg +vendors-mail+
              (format nil "Vendor Registration Weekly Overview for ~:(~a~) ~d" season year)
              (format nil "Vendors.~a.~d" season year)
              "~a" (vendor-report/text))
    (mail-reg +workshops-mail+
              (format nil "Workshop Registration Weekly Overview for ~:(~a~) ~d" season year)
              (format nil "Workshops.~a.~d" season year)
              "Workshop registration is disabled for now.")
    (mail-reg "tegbod@flapagan.org"
              (format nil "TEGBoD: Registration Weekly Overview for ~:(~a~) ~d" season year)
              (format nil "TEGBoD.Festival.~a.~d" season year)
              "~a" (festival-overview-report/text season year t))))

;; (defmethod handle-verb ((verb (eql :login)))
;;   (cond ((and (field :user)
;;               (field :password))
;;          (perform-log-in (field :user) (field :password)))
;;         ())
;;   (list :auth 401 "Authorization Required"
;;         :www-authenticate-realm "Censorius Herald Privileged Functions"))

;; (defun prompt-for-authentication (http-status-code http-status-message
;;                                   &key
;;                                     (www-authenticate-realm "Censorius Herald")
;;                                     (explain "You must log in to access this feature")
;;                                     (user-privilege-type "Authorized User")))


;;; OO accessors for invoices and festivals
(defmethod invoice-closed-p ((invoice cons))
  (boolbool (getf (read-general invoice) :closed)))

(defmethod invoice-closed ((invoice cons))
  (getf (read-general invoice) :closed))

(defmethod invoice-festival-season ((invoice cons))
  (getf (read-general invoice) :festival-season))

(defmethod invoice-festival-year ((invoice cons))
  (getf (read-general invoice) :festival-year))

(defmethod festival-start-date ((season string) (year number))
  (cadar (db-query "select `starting` from festivals where season=? and year=?"
                   season year)))

(defmethod invoice-festival-start-date (invoice)
  (festival-start-date (invoice-festival-season invoice)
                       (invoice-festival-year invoice)))


;;; Support for fast-check-in Florida ID swipes
(defun decode-fl-id-swipe (swipe)
  (check-type swipe string)
  (assert (string-begins "%FL" swipe))
  ;; The city→surname ^ is omitted when the city name is truncated at position 16 (13 chars of city name)
  (let* ((city-end (let ((first^ (position #\^ swipe :test #'char=)))
                     (if (< 16 first^) 16 first^)))
         #+unused (city-name (subseq swipe 3 city-end))
         (surname-start (if (char= #\^ (elt swipe city-end))
                            (1+ city-end)
                            city-end))
         (surname-end (position #\$ swipe :test #'char= :start surname-start))
         (surname (subseq swipe surname-start surname-end))
         (given-name (subseq swipe
                             (1+ surname-end)
                             (position #\$ swipe :test #'char= :start (1+ surname-end))))
         (house-number-start (1+ (position #\^ swipe :test #'char= :start (1+ surname-end))))
         (house-number (subseq swipe
                               house-number-start
                               (position-if (complement #'digit-char-p) swipe :start house-number-start)))
         (track-1-end (position #\? swipe :test #'char= :start house-number-start))
         (track-2-end (position #\? swipe :test #'char= :start (1+ track-1-end)))
         (zip-code (take-if 5 #'digit-char-p (subseq swipe (+ 2 track-2-end)))))
    (values given-name surname (parse-integer house-number :junk-allowed t) (parse-integer zip-code))))

(multiple-value-bind (given-name surname house-number zip-code)
    (decode-fl-id-swipe "%FLSILVER SPRINGDUSTMAN$JAMES$JON^2130 SE 172ND TER^                            ?;6360100423545068304=2108196899240=?+! 344885936  E               1600                                   ECCECC00000?")
  (assert (string-equal given-name "James") ()
          "Decoding FL ID failed to extract given name correctly")
  (assert (string-equal surname "Dustman") ()
          "Decoding FL ID failed to extract surname correctly")
  (assert (= house-number 2130) ()
          "Decoding FL ID failed to extract house number correctly")
  (assert (= zip-code 34488) ()
          "Decoding FL ID failed to extract ZIP code correctly"))

(defun find-invoices-by-fast-check-in (given-name surname house-number zip-code)
  (db-query "select invoices.invoice from invoices left join `invoice-guests` on invoices.invoice=`invoice-guests`.invoice
where `invoice-guests`.`given-name`=? and `invoice-guests`.surname=?
and invoices.`fast-check-in-address`=? and invoices.`fast-check-in-zip-code`=?"
            given-name surname house-number zip-code))

(defun find-invoices-by-fast-check-in-swipe (swipe)
  (multiple-value-bind (given-name surname house-number zip-code)
      (ignore-errors (decode-fl-id-swipe swipe))
    (when (and given-name surname house-number zip-code)
      (find-invoices-by-fast-check-in given-name surname house-number zip-code))))

(defmethod handle-verb ((verb (eql :fast-check-in)))
  (list :data
        (sort (remove-if-not #'invoice-closed-p (find-invoices-by-fast-check-in-swipe
                                                 (string-trim " " (field :swipe))))
              #'< :key #'invoice-festival-start-date)))


;;; Pretty-print a plist as a spreadsheet-like table

(defun hash-table->plist (hash-table)
  (alist-plist (maphash (lambda (k v) (cons k v)) hash-table)))

(defun print-plist->table (plist &optional (stream *standard-output*))
  "Pretty-print a spreadsheet-like table form from a plist to (fixed-width) text."
  (let* ((columns (plist-keys (first plist)))
         (column-widths (mapcar (lambda (column)
                                  (max (reduce #'max
                                               (mapcar (compose #'length #'princ-to-string
                                                                (rcurry #'getf column))
                                                       plist))
                                       (length (string column))))
                                columns)))
    (fresh-line stream)
    (loop for width in column-widths
       for column in columns
       do (format stream "~:(~va~) " width column))
    (fresh-line stream)
    (dolist (width column-widths)
      (format stream "~v,,,'-a " width ""))
    (dolist (row plist)
      (fresh-line stream)
      (loop for width in column-widths
         for column in columns
         do (format stream "~va " width (getf row column))))
    (fresh-line stream)
    (force-output stream)))

(defun print-plist->table.html (plist &optional (stream *standard-output*))
  "Print an HTML table from a plist."
  (let* ((columns (plist-keys (first plist))))
    (format stream "~&<table>~%<thead><tr>~{<th>~:(~a~)</th>~}</tr></thead>
<tbody>~{~%<tr>~{<td>~a</td>~}</tr>~}~%</tbody>
</table>"
            columns
            (loop for row in plist collecting (mapcar (curry #'getf row) columns)))
    (force-output stream)))

(defun print-hash-table (hash-table)
  (print-plist->table (hash-table->plist hash-table)))


(defgeneric person= (person1 person2))

;;; Plist-faking-OOP utilities
(defun cons-is-invoice-guest-p (person)
  "The “legacy” plist form of an invoice guest"
  (and (plist-p person)
       (every (curry #'getf person) '(:given-name :surname :invoice))))

(defun plist-values= (key-list first-plist &rest plists)
  (if plists
      (every (lambda (other)
               (every (lambda (key)
                        (equalp (getf first-plist key) (getf other key)))
                      key-list))
             plists)
      t))

(defmethod person= ((person1 cons) (person2 cons))
  (assert (and (cons-is-invoice-guest-p person1)
               (cons-is-invoice-guest-p person2)))
  (plist-values= '(:given-name :surname :invoice) person1 person2))

(defgeneric person-maybe-same-p (person1 person2))

(defmethod person-maybe-same-p ((person1 cons) (person2 cons))
  (assert (and (cons-is-invoice-guest-p person1)
               (cons-is-invoice-guest-p person2)))
  (plist-values= '(:given-name :surname) person1 person2))

(defmacro define-getf-accessors ((plist-class &key type-checker) &rest keys)
  `(progn
     ,@(loop for key in keys
          collecting
            (let ((plist-key (keyword* (remove #\‐ (string key))))
                  (fn-key (substitute #\- #\‐ (string key))))
              `(progn (defgeneric ,(format-symbol *package* "~:@(~a~)-~:@(~a~)" plist-class fn-key) (,plist-class)
                        (:method ((,plist-class cons))
                          ,(when type-checker `(assert (funcall ,type-checker ,plist-class)))
                          (getf ,plist-class ,plist-key)))
                      (defgeneric (setf ,(format-symbol *package* "~:@(~a~)-~:@(~a~)" plist-class fn-key)) (new-value ,plist-class)
                        (:method (new-value (,plist-class cons))
                          ,(when type-checker `(assert (funcall ,type-checker ,plist-class)))
                          (setf (getf ,plist-class ,plist-key) new-value))))))))

(define-getf-accessors (person :type-checker #'cons-is-invoice-guest-p)
    added address cabin-request called-by city coffee‐p country coven days e-mail eat formal-name gender
    given-name id-number id-state invoice ksa payment-due physical-limits postal-code presenter-bio
    presenter-requests sleep social-network spiritual-path spouse staff-approve staff-department
    staff-job-wanted staff-notes staff-rec staff-submit staff-tue-sun state surname t-shirt telephone
    ticket-type tote‐p why-staff)


;;; Attributes of a theoretical person, who might be of one of several different actual object classes.

(defgeneric person= (person1 person2))

(defmethod person= ((person1 cons) (person2 cons))
  (assert (and (cons-is-invoice-guest-p person1)
               (cons-is-invoice-guest-p person2)))
  (plist-values= '(:given-name :surname :invoice) person1 person2))

(defgeneric person-maybe-same-p (person1 person2))

(defmethod person-maybe-same-p ((person1 cons) (person2 cons))
  (assert (and (cons-is-invoice-guest-p person1)
               (cons-is-invoice-guest-p person2)))
  (plist-values= '(:given-name :surname) person1 person2))

(defmethod person-added :around ((person cons))
  (local-time:unix-to-timestamp (call-next-method person)))

(defun personal-address (guest)
  (concatenate 'string (case (person-gender guest)
                         (:m "Mr ")
                         (:f "Ms ")
                         (otherwise ""))
               (or (person-called-by guest) (person-given-name guest))
               " " (person-surname guest)))

(defmethod person-spouse :around (person)
  (let ((marriage (call-next-method person)))
    (when marriage
      (first (remove-if-not (lambda (potential)
                              (and (not (person= person potential))
                                   (equal marriage (getf potential :spouse))))
                            (invoice-guests (person-invoice person)))))))

(defmethod person-dob :around (person)
  (local-time:unix-to-timestamp (call-next-method)))

(defmethod person-age-years (person)
  (when-let ((birthdate (person-dob person)))
    (local-time:timestamp-whole-year-difference (local-time:now) birthdate)))

(defmethod person-adult-p (person)
  (or (and (person-age-years person)
           (>= (person-age-years person) 18))
      (eql :adult (person-ticket-type person))))

(defmethod person-child-p (person)
  (or (and (person-age-years person)
           (>= 5 (person-age-years person) 17))
      (eql :child (person-ticket-type person))))

(defmethod person-baby-p (person)
  (or (and (person-age-years person)
           (> 5 (person-age-years person)))
      (eql :baby (person-ticket-type person))))

(defmethod person-bachelor-p (person)
  (and (person-adult-p person)
       (not (person-spouse person))))

(defmethod person-invoice-date (person)
  (if-let (invoice (read-general (person-invoice person)))
    (if-let (closed (invoice-closed invoice))
      closed
      (local-time:now))
    (local-time:now)))

;;; Basic price-list look-ups for various special things.

(defun bubbling-cauldron-price-list (&optional date)
  (getf (read-prices date) :cauldron))
(defun price-salad-bar (&optional date)
  (getf (bubbling-cauldron-price-list date) :salad-bar))
(defun price-cauldron-child (&optional date)
  (getf (bubbling-cauldron-price-list date) :child))
(defun price-cauldron-under5 (&optional date)
  (getf (bubbling-cauldron-price-list date) :under5))
(defun price-cauldron-fri-sun (&optional date)
  (getf (bubbling-cauldron-price-list date) :fri-sun))
(defun price-cauldron-adult (&optional date)
  (getf (bubbling-cauldron-price-list date) :adult))
(defun ticket-prices (&optional date)
  (getf (read-prices date) :ticket))
(defun price-adult (&optional date)
  (getf (ticket-prices date) :adult))
(defun price-child (&optional date)
  (getf (ticket-prices date) :child))
(defun price-baby (&optional date)
  (getf (ticket-prices date) :baby))
(defun price-staff (&optional date)
  (getf (ticket-prices date) :staff))
(defun price-lugal-so (&optional date)
  (getf (ticket-prices date) :lugal-so))
(defun price-day-pass (&optional date)
  (getf (ticket-prices date) :day-pass))
(defun price-week-end (&optional date)
  (getf (ticket-prices date) :week-end))
(defun merch-item-price (id &optional (date (local-time:now)))
  (getf (find id (read-merch nil date) :key (rcurry #'getf :id)) :price))
(defun price-t-shirt (&optional date)
  (merch-item-price :festival-shirt date))
(defun price-coffee-mug (&optional date)
  (merch-item-price :coffee date))
(defun price-tote (&optional date)
  (merch-item-price :tote-bag date))
(defun price-cabin-regular (&optional date)
  (getf (getf (read-prices date) :cabin) :regular))
(defun price-cabin-staff (&optional date)
  (getf (getf (read-prices date) :cabin) :staff))
(defun price-lodge-regular (&optional date)
  (getf (getf (read-prices date) :lodge) :regular))
(defun price-lodge-staff (&optional date)
  (getf (getf (read-prices date) :lodge) :staff))

(defun cauldron-price (guest)
  (cond
    ((eql :salad-bar (person-eat guest))
     (price-salad-bar (person-invoice-date guest)))

    ((not (eql :cauldron (person-eat guest)))
     0)

    ((person-child-p guest)
     (price-cauldron-child (person-invoice-date guest)))

    ((person-baby-p guest)
     (price-cauldron-under5 (person-invoice-date guest)))

    (:else                              ; adult
     (case (person-days guest)
       ((:thu :fri :sat :week-end) (price-cauldron-fri-sun (person-invoice-date guest)))
       (otherwise (price-cauldron-adult (person-invoice-date guest)))))))

;;; Obtaining a person's Gravatar URL for presentation on the Web
(defgeneric person-gravatar-p (person)
  (:documentation "Returns a generalized Boolean indicating whether the person appears to have a Gravatar. TODO")
  (:method ((person t)) nil))

(defgeneric person-gravatar (person &key size rating if-does-not-exist)
  (:documentation "Returns a person's Gravatar URL, if possible. TODO")
  (:method ((person t) &key (size 256) (rating :pg) (if-does-not-exist :monster)) nil))

;;; Wordpress integration
(defgeneric person-known-to-wordpress-p (person); TODO
  (:documentation "For integration with  Wordpress, detect whether a person has registered with  the Wordpress system as
a whole, or within the confines of the /news/ site.")
  (:method ((person t)) nil))

(defmethod person-icon (person &key (text-only-p t))
  (if (and (not text-only-p)
           (person-gravatar-p person))
      (person-gravatar person)
      (let ((gender (or (person-gender person)
                        (random-elt #(:m :f)))))
        (ecase gender
          (:m "👦")
          (:f "👧")))))

(defmethod couple-icon (one spouse &key (text-only-p t))
  (if (and (not text-only-p)
           (person-gravatar-p one)
           (person-gravatar-p other))
      (concatenate 'string
                   "<div class=\"couple-icons\"><img src=\""
                   (person-gravatar one)
                   "\"><img src=\""
                   (person-gravatar spouse)
                   "\"></div>"))
  (let ((gender1 (or (person-gender one)
                     (random-elt #(:m :f))))
        (gender2 (and spouse
                      (or (person-gender spouse)
                          (random-elt #(:m :f))))))
    (cond ((not spouse) (person-icon one))
          ((not (eql gender1 gender2)) "👫")
          ((eql :f gender2) "👭")
          (t "👬"))))

(defmethod lugal+-p (person) nil) ; FIXME
(defmethod staffp (person) nil) ; FIXME

(defun lugal+-spouse-p (person)
  (when-let (spouse (person-spouse person))
    (lugal+-p spouse)))

(defun ticket-price (guest)
  "Returns the price for a person's admission (only)"
  (cond
    ((lugal+-p guest)
     0)

    ((staffp guest)
     (price-staff (person-invoice-date guest)))

    ((person-child-p guest)
     (price-child  (person-invoice-date guest)))

    ((person-baby-p guest)
     (price-baby  (person-invoice-date guest)))

    (:else                              ; adult
     (case (person-days guest)
       ((:thu :fri :sat) (price-day-pass (person-invoice-date guest)))
       (:week-end (price-week-end (person-invoice-date guest)))
       (otherwise (if (lugal+-spouse-p guest)
                      (price-staff (person-invoice-date guest))
                      (price-adult (person-invoice-date guest))))))))

(defun staff-bunk-rate-p (guest)
  (or (staffp guest)
      (lugal+-spouse-p guest)
      (and (not (person-adult-p guest))
           (some #'lugal+-p (invoice-guests (person-invoice guest))))))

(defun cabin-price (guest)
  (funcall (if (staff-bunk-rate-p guest)
               #'price-cabin-staff
               #'price-cabin-regular)
           (person-invoice-date guest)))

(defun lodge-price (guest)
  (funcall (if (staff-bunk-rate-p guest)
               #'price-lodge-staff
               #'price-lodge-regular)
           (person-invoice-date guest)))

(defun sleep-price (guest)
  (case (person-sleep guest)
    (:cabin (cabin-price guest))
    (:lodge (lodge-price guest))
    (otherwise 0)))

(defmethod person-sleep :around ((person cons))
  (keyword* (call-next-method person)))
(defmethod person-gender :around ((person cons))
  (keyword* (call-next-method person)))
(defmethod person-t-shirt :around ((person cons))
  (keyword* (remove #\: (call-next-method person))))
(defmethod person-ticket-type :around ((person cons))
  (keyword* (call-next-method person)))

(defun person-price (guest)
  (if guest
      (+ (ticket-price guest)
         (sleep-price guest)
         (cauldron-price guest)
         (if (person-t-shirt guest)
             (price-t-shirt (person-invoice-date guest))
             0)
         (if (person-coffee-p guest)
             (price-coffee-mug (person-invoice-date guest))
             0)
         (if (person-tote-p guest)
             (price-tote (person-invoice-date guest))
             0))
      0))

(defun unmarried-lugal-p (guest)
  (and (person-adult-p guest)
       (lugal+-p guest)
       (person-bachelor-p guest)))

(defun married-line (from to)
  (if (and from to)
      (concatenate 'string
                   (couple-icon from to)
                   " "
                   (case (person-gender from)
                     (:m "husband")
                     (:f "wife")
                     (otherwise "partner"))
                   " of "
                   (if (lugal+-p to)
                       "𒈗 "
                       "")
                   (personal-address to))
      ""))

(defun legal-name (guest)
  (concatenate 'string (person-given-name guest) " " (person-surname guest)))

(defun make-couple-symbol (one other)
  (loop for try = (gensym (concatenate 'string
                                       "marriage-" (person-surname one)
                                       "+" (person-surname other)
                                       "/" (36r (random (expt 36 3)))))
     until (null (db-query "select * from `invoice-guests` where spouse=?"))
     finally (return try)))

(defmethod marry ((one cons) (other cons))
  (assert (and (not (person= one other))
               (or (person= one (person-spouse other))
                   (and (person-bachelor-p one)
                        (person-bachelor-p other)))))
  (let ((married-symbol (make-couple-symbol one other)))
    (setf (getf one :spouse) married-symbol)
    (setf (getf other :spouse) married-symbol)))

(defmethod divorce ((one cons) (other cons))
  (assert (not (or (and (string-equal (person-given-name one) "bruce-robert")
                        (string-equal (person-given-name other) "john"))
                   (and (string-equal (person-given-name other) "bruce-robert")
                        (string-equal (person-given-name one) "john"))))
          (one other)
          "No way.

♥ You're stuck with me, Mr Fenn Pocock ☺ ♥")
  (assert (person= one (person-spouse other)))
  (assert (person= other (person-spouse one)))
  (setf (getf one :spouse) nil)
  (setf (getf other :spouse) nil))



(defun ♄ ()
  (with-sql (mapcar (lambda (row)
                      (apply #'db-query "insert into invoices (invoice, created, closed, `closed-by`, `old-system-p`,`festival-season`,`festival-year`,note, signature, memo, `fast-check-in-address`,`fast-check-in-postal-code`) values(?,?,?,?,?,?,?,?,?,?,?,?)"
                             (mapcar (curry #'getf row)
                                     '(:invoice :last_name :first_name :craft_name :address_1 :address_2 :city :state :phone :email :zip))))
                    (with-archive-sql (archive-query "select invoices.id as invoice, last_name , first_name ,  craft_name , address_1 , address_2 , city ,state , phone , email  zip from invoices  ")))))



