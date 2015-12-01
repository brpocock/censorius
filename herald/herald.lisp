(defpackage :herald (:use :cl :alexandria :local-time :split-sequence :cl-ppcre :herald-util)
            (:export :run :start-server))

(in-package :herald)

(require 'lparallel)

;;;
;;;  setcap 'cap_net_bind_service=+ep' /path/to/program




(defvar *presenters* nil)
(defvar *schedule* nil)
(defvar *events* nil)
(defvar *vendors* nil)
(defconstant +vendor-slips+ 100)
(defvar *vendors-row* (make-array +vendor-slips+ :initial-element nil))
(defvar *whiteboard* nil)


;;; current configuration

(defun guess-year (&optional (date (today)))
  (if (> (timestamp-month date) 10)
      ;; after October, use next year
      (1+ (timestamp-year date))
      (timestamp-year date)))

(defun guess-season (&optional (date (today)))
  (if (< 4 (timestamp-month date) 11)
      :samhain
      :beltane))

(defparameter *season* (guess-season))
(defparameter *year* (guess-year))

(defun report-months-guessed-festivals ()
  (format t "~{~|~{~%~:(~a~)~}~}"
          (loop for year from (timestamp-year (today)) upto (+ 2 (timestamp-year (today))) 
                collect (loop for month from 1 to 12
                              for date = (parse-timestring (format nil "~d-~d-5" year month)) 
                              collect (format nil "~d/~2d ⇒ ~d ~d" year month (guess-season date) (guess-year date))))))

(defun cl-user::fest (stream &rest _)
  (declare (ignore _))
  (format stream "~:(~A~) ~A" *season* *year*))

(defun current-festival ()
  (format nil "~:(~A~) ~A" *season* *year*))



(defun bio-fix (name bio)
  (cond
    ((string-starts-with name bio)
     (subseq bio (length name)))
    ((plusp (count #\space name))
     (bio-fix (subseq name 0 (position #\space name :from-end t)) bio))
    (t bio)))

(defun read-presenter-from-spreadsheet (row)
  (destructuring-bind (short-name confirmedp mundane-name name phone email prefer-contact
                                  can-record-p bio headlinerp musicalp) row
    (pushnew (list (or short-name name) mundane-name
                   :name name :bio (bio-fix name bio)
                   :confirmedp (find #\Y (string-upcase confirmedp))
                   :phone phone
                   :email email
                   :prefer-contact prefer-contact
                   :headlinerp (or (find #\! headlinerp)
                                   (find #\Y (string-upcase headlinerp)))
                   :musicalp (find #\Y (string-upcase musicalp))
                   :can-record-p (find #\Y (string-upcase can-record-p)))
             *presenters*
             :key #'car :test #'equal)))

(defun parse-range (string)
  (cond 
    ((find #\( string)
     (parse-range (cl-ppcre:regex-replace-all "\(.+?\)" string "")))
    ((find #\space string)
     (parse-range (cl-ppcre:regex-replace-all " " string "")))
    ((eql #\< (elt string 0))
     (cons 0 (1- (parse-integer (subseq string 1)))))
    
    ((eql #\> (elt string 0))
     (cons (1+ (parse-integer (subseq string 1))) 999))
    
    ((eql #\+ (last-elt string)) 
     (cons (parse-integer string :junk-allowed t) 999))
    
    ((find #\- string)
     (destructuring-bind (a b) 
         (split-sequence #\- string)
       (cons (parse-integer a) (parse-integer b :junk-allowed t))))))

(defun combine-ranges (a b)
  (cond
    ((and (null a)
          (null b)) 
     (cons 0 999))
    ((null a) 
     b)
    ((null b)
     a)
    ((stringp a) 
     (combine-ranges (parse-range a) b))
    ((stringp b)
     (combine-ranges a (parse-range b)))
    ((and (consp a)
          (consp b)
          (numberp (car a))
          (numberp (cdr a))
          (plusp (car b))
          (plusp (cdr b)))
     (cons (min (car a) (car b))
           (max (cdr a) (cdr b))))))

(defun parse-ages (ages)
  (typecase ages
    (null
     (cons 0 999))
    (string
     (reduce #'combine-ranges (mapcar #'parse-range (split-sequence #\, ages))))
    (cons
     ages)
    (t 
     (error "Don't know how to parse age ~S" ages))))

(defun read-event-from-spreadsheet (row)
  (unwind-protect
       (destructuring-bind (short-name grid-name requested-at presenter
                                       name description duration ages genders
                                       notes presenter-needs submitted)
           row
         (when (null short-name)
           (return-from read-event-from-spreadsheet))
         (pushnew (list (title-case-properly short-name)
                        (title-case-properly (or grid-name name))
                        :name (title-case-properly name)
                        :description (or description name)
                        :requested requested-at
                        :submitted submitted
                        :presenter presenter
                        :ages (parse-ages ages)
                        :notes notes
                        :presenter-needs presenter-needs
                        :♂p (or (string-equal genders "Males Only")
                                (string-equal genders "Females and Males")
                                (null genders)
                                (equal "" genders))
                        :♀p (or (string-equal genders "Females Only")
                                (string-equal genders "Females and Males")
                                (null genders)
                                (equal "" genders))
                        :duration (cond
                                    ((equal duration "1 Hour") 1)
                                    ((equal duration "1.5 Hours") 3/2)
                                    ((equal duration "2 Hours") 2)
                                    (t nil)))

                  *events*
                  :key #'car :test #'equal))))

(defun read-schedule-row (row)
  (push row *schedule*))

(defun read-vendor-from-spreadsheet (row)
  (destructuring-bind (invoice-number 
                       last-name first-name
                       address address-2 city state 
                       zip-code
                       email phone registered
                       type-admission-adult-minor-vendor-reg-fee
                       booth-name slip-1 slip-2 slip-3
                       vendor-fee paid-check-or-cash-vendor-fee
                       paid-pay-pal-vendor-fee
                       comments food-vendor-p blurb 
                       lockedp)
      row

    (let ((record (list booth-name blurb
                        :invoice-number invoice-number
                        :last-name last-name
                        :first-name first-name
                        :address address
                        :address-2 address-2
                        :city city
                        :state state
                        :zip-code zip-code
                        :email email
                        :phone phone
                        :registered registered
                        :type-admission type-admission-adult-minor-vendor-reg-fee
                        :booth-name booth-name
                        :slip-1 slip-1
                        :slip-2 slip-2
                        :slip-3 slip-3
                        :vendor-fee vendor-fee
                        :paid-check-or-cash-vendor-fee paid-check-or-cash-vendor-fee
                        :paid-pay-pal-vendor-fee paid-pay-pal-vendor-fee
                        :comments comments
                        :food-vendor-p food-vendor-p
                        :lockedp (find #\Y (string-upcase lockedp))
                        :description blurb)))
      (if (or slip-1 slip-2 slip-3)
          (progn
            (pushnew record *vendors*
                     :key #'car :test #'string-equal)
            (loop for slip in (remove-if #'null
                                         (mapcar (rcurry #'parse-integer :junk-allowed t)
                                                 (remove-if #'null
                                                            (list slip-1 slip-2 slip-3))))
               do (if (< 0 slip +vendor-slips+)
                      (setf (aref *vendors-row* slip) booth-name)
                      (warn "Ignoring vendor slip “~a” for “~a;” must be 1…~d"
                            slip booth-name (1- +vendor-slips+)))))
          (warn "Vendor “~a” has no slip(s) assigned." booth-name)))))

(defun times (count thing)
  (when count
    (loop for i from 1 upto count collecting thing)))

(declaim (inline make-directory))
(defun make-directory (dirname)
  #+sbcl
  (sb-posix:mkdir dirname #o775)
  #+ccl
  (ccl::%mkdir dir mode))

#-(or sbcl ccl) 
(error "No MKDIR for this compiler")

(defun fasl-name (file)
  #+(or sbcl ccl) 
  (make-pathname :defaults (merge-pathnames file) :type "fasl"))
#-(or sbcl ccl)
(error "No FASL-NAME for this compiler")

(defun move-file (file target)
  #+sbcl
  (sb-posix:rename file (make-pathname :defaults target
                                       :name (pathname-name file)
                                       :type (pathname-type file)))
  #+ccl
  (ccl::unix-rename file (make-pathname :defaults target
                                        :name (pathname-name file)
                                        :type (pathname-type file))))
#-(or sbcl ccl)
(error "No rename for this compiler")

(defun checkpoint-files ()
  (post-whiteboard '(:log :checkpoint) ":CHECKPOINT Saving data" "☿Herald")
  (make-directory "checkpoint")
  (let ((*default-pathname-defaults* (merge-pathnames "checkpoint/")))
    (error "TODO")
    (loop for file in '("presenters" "events" "schedules" "vendors" "whiteboard" "all-events")
       do (move-file (fasl-name file) (cl-fad:pathname-parent-directory
                                       *default-pathname-defaults*))))
  (cl-fad:delete-directory-and-files (merge-pathnames "checkpoint/")
                                     :if-does-not-exist nil)
  (post-whiteboard '(:log :checkpoint) ":CHECKPOINT Saved successfully" "☿Herald"))

(defun set-system-clock (universal-time)
  (error "Can't really set the clock, but it should read ~A"
         (full-time-format (universal-to-timestamp universal-time))))

(defun validate-time ()
  (let ((max-past (reduce #'max (cons #.(get-universal-time) (mapcar #'fourth *whiteboard*)))))
    (unless (< max-past
               (get-universal-time))
      (warn "ToD clock has regressed: whiteboard entries are less than current time")
      (set-system-clock (1+ max-past)))))

(defun fest-filename (base &optional (ext ".csv"))
  (concatenate 'string base "-" 
               (string-upcase (subseq (string *season*) 0 1))
               (princ-to-string (- *year* 2000))
               ext))

(defun festival-work-dir ()
  (let* ((work-dir (merge-pathnames #p "work/" (user-homedir-pathname)))
         (festival-dir (merge-pathnames (make-pathname
                                         :directory (list :relative 
                                                          (current-festival)
                                                          (format-timestring nil (today)
                                                                             :format '(:year #\- :month #\- :day))))
                                        work-dir)))
    (ensure-directories-exist festival-dir :verbose t)
    festival-dir))

(defun download-files ()
  #+todo
  (let ((*default-pathname-defaults* (festival-work-dir))
        (fest-short (format nil "~a~d" (first-elt (string *season*)) (mod *year* 100))))
    (dolist (file '("Workshop-Presenters" "Workshop-Details" "Workshop-Schedule" "Vendor-Registrations"))
      (dolist (suffix '("xls" "csv" "ods" nil))
        (let ((path (make-pathname :type suffix :name (concatenate 'string file "-" fest-short))))
          (when (probe-file path)
            (warn "Deleting previous file: ~a" path)
            (delete-file path)))))))

(defun clear-knowledgebase ()
  (setf *events* nil)
  (setf *schedule* nil)
  (setf *presenters* nil)
  (setf *vendors* nil)
  (setf *vendors-row* (make-array +vendor-slips+ :initial-element nil))
  (setf *whiteboard* nil))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun file-conversion-restart (extension target)
    `(,(format-symbol :herald "CONVERT-~@:(~a~)" extension)
       (lambda ()
         (let ((alternate (make-pathname :defaults ,target
                                         :type ,extension)))
           (uiop:run-program 
            (format nil "cd  '~a'; libreoffice --headless --convert-to ~a '~a'"
                    (make-pathname :directory (pathname-directory ,target))
                    (if (string-equal (pathname-type ,target) "csv")
                        "\"csv:Text - txt - csv (StarCalc):44,34,76,1,1/1\""
                        (pathname-type ,target)) 
                    alternate))
           (go restart-with-csv-conversion)))
       :report-function (lambda (s)
                          (format s "Convert the file from ~a.~a with LibreOffice" 
                                  (pathname-name ,target)
                                  ,extension))
       :test-function (lambda (condition)
                        (and (search "No such file" (format nil "~a" condition))
                             (probe-file (make-pathname :defaults ,target
                                                        :type ,extension)))))))

(defmacro with-csv-conversion ((target) &body body)
  `(tagbody restart-with-csv-conversion
      (restart-bind
          (,(file-conversion-restart "ods" target)
           ,(file-conversion-restart "xlsx" target)
            ,(file-conversion-restart "xls" target))
        ,@body)))

(defmacro map-spreadsheet ((filename) function &key (skip-lines 0))
  `(let ((specific-filename (fest-filename ,filename)))
     (with-csv-conversion (specific-filename)
       (csv-parser:map-csv-file specific-filename ,function :skip-lines ,skip-lines))))

(defun load-presenter-files (from-csv-p)
  (if from-csv-p
      (map-spreadsheet ("Workshop-Presenters")
                       #'read-presenter-from-spreadsheet :skip-lines 1)
      (load (merge-pathnames "presenters")))
  (format t "~& ☠ ~R presenter~:P" (length *presenters*)))

(defun load-events-files (from-csv-p)
  (if from-csv-p
      (map-spreadsheet ("Workshop-Details") #'read-event-from-spreadsheet :skip-lines 1)
      (load (merge-pathnames "events")))
  (setf *schedule* nil)
  (if from-csv-p
      (progn (map-spreadsheet ("Workshop-Schedule") #'read-schedule-row)
             (let ((schedule-reversed *schedule*))
               (setf *schedule*
                     (reverse (mapcar (lambda (row)
                                        (append row (times (- (length (last schedule-reversed))
                                                              (length row)) nil)))
                                      schedule-reversed))))
             (parse-schedule))
      (progn (load (merge-pathnames "all-events"))
             (load (merge-pathnames "schedule"))))
  (format t "~& ☠ ~R event~:P" (length (all-events)))
  (format t "~& ☠ Schedule grid is ~:D×~:D" (length (car *schedule*)) (length *schedule*)))

(defun load-vendor-files (from-csv-p)
  (if from-csv-p
      (map-spreadsheet ("Vendor-Registrations") #'read-vendor-from-spreadsheet :skip-lines 1)
      (load (merge-pathnames "vendors")))
  (format t "~& ☠ ~R vendor~:P" (length *vendors*)))

(defun load-files-from-spreadsheets (&rest festivals)
  (format t "~& ☠ Loading files…")
  (loop for (*season* *year*) in festivals
     do (let ((*default-pathname-defaults* (festival-work-dir)))
          (load-presenter-files )
          (load-events-files )
          (load-vendor-files ))))

(defun parse-schedule ()
  (map nil #'add-event-from-schedule
       (reduce #'append
               (remove-if #'emptyp
                          (mapcar #'cdr
                                  (grid-for-columns 
                                   (seq 1 (1- (length (first *schedule*))))))))))


(defun grid-for-columns (columns)
  (loop for row in (subseq *schedule* 2)
     collecting
       (cons (car row)
             (loop for column in columns
                for event-name = (elt row column)
                for day = (elt (first *schedule*) column)
                for time = (elt (second *schedule*) column)
                collecting (if (or (null event-name)
                                   (equal event-name "")
                                   (equal event-name "x"))
                               nil
                               (if-let ((ev (find event-name *events*
                                                  :key #'car :test #'string-equal)))
                                 (progn
                                   (appendf ev (list :time-slot time
                                                     :day day
                                                     :location (car row)))
                                   ev)
                                 (warn "Event on schedule but not known: “~A” (dropped)"
                                       event-name)))))))

(defun interpret-age (age)
  (cond 
    ((consp age) (destructuring-bind (a . b) age
                   (cond
                     ((and (zerop a)
                           (< 100 b)) "All ages")
                     ((zerop a) (format nil "Ages ~:D and under" b))
                     ((< 100 b) (format nil "Ages ~:D and up" a))
                     (t (format nil "Ages ~:D -- ~:D" a b)))))
    ((null age) "All ages")
    ((stringp age) (parse-ages age))))

(defun column-widths (columns nice-grid)
  (loop for i from 0 upto (1- (length columns))
     collecting
       (reduce #'max
               (mapcar (lambda (el)
                         (if (consp el) (length (second el)) 0))
                       (mapcar (rcurry #'elt i) nice-grid)))))

(defun interpret-sex (♂p ♀p)
  (cond ((and ♂p ♀p) nil)
        (♂p "Males only")
        (♀p "Females only")
        (t nil)))

(defun interpret-time (time)
  (cond
    ((null time) nil)
    ((not (numberp time)) (string time))
    ((>= 1/2 (second (multiple-value-list (floor time))))
     (format nil "~:D½ hour~P" (floor time) (1- (floor time))))
    (t (format nil "~R hour~:P" time))))

(defun print-event-details/html (event)
  (format t "~%<h3 class=\"event\">~A<a name=\"~*~A\" ></a></h3>
~@[<small class=\"event-presenter\"> <a href=\"presenters.html#~A\">~:*~/html/</a> </small> • ~]
<small class=\"event-venue\">~/html/</small>
<span class=\"event-details\"> ~/html/</span>
<small class=\"event-attendees\">(<span class=\"event-ages\">~/html/</span>~@[;
 <span class=\"event-duration\">~/html/</span>~]~@[;
 <span class=\"event-gender\">~/html/</a>~]~@[;
 <a href=\"sweatlodge.html\">sweatlodge info</a>}~]~@[;
 <a href=\"celtic-games.html\">Celtic Games info</a>~]) </small>~%"
          (getf event :name)
          (getf event :day) (car event)
          (when-let ((bio (presenter-by-name (getf event :presenter))))
            (getf bio :name))
          (getf event :location)
          (getf event :description)
          (interpret-age (getf event :ages))
          (interpret-time (getf event :duration))
          (interpret-sex (getf event :♂p) (getf event :♀p))
          (string-begins (car event) "sweat")
          (string-begins (car event) "celts")))

(defun print-event-details (event)
  (format t "~2%\\subsubsection{~A}
\\label{~A-~A}
{\\small ~@[~A $\\bullet$ ~] ~A}
~% ~A {\\small (~A~@[; ~A~]~@[; ~A~]~@[; see p.\\pageref{sweatlodge}~]~@[; see p.{celticgames}~])}"
          (@ (getf event :name))
          (getf event :day) (car event)
          (when-let ((bio (presenter-by-name (getf event :presenter))))
            (@ (getf bio :name)))
          (@ (getf event :location))
          (@ (getf event :description))
          (@ (interpret-age (getf event :ages)))
          (@ (interpret-time (getf event :duration)))
          (@ (interpret-sex (getf event :♂p) (getf event :♀p)))
          (string-begins (car event) "sweat")
          (string-begins (car event) "celts")))

(defun day-name (day)
  (ecase day
    (:wed "Wednesday")
    (:thu "Thursday")
    (:fri "Friday")
    (:sat "Saturday")
    (:sun "Sunday")))

(defmacro sort-list (sequence &rest params)
  `(sort (copy-list ,sequence) ,@params))

(defun print-daily-events (day)
  (format t "~& ☠ Daily events for ~A" day)
  (with-output-to-file (*standard-output* (format nil "Events-~A.tex" day)
                                          :if-exists :supersede)
    (with-output-to-file (kids-events-file (format nil "kids-events-~A.tex" day)
                                           :if-exists :supersede)
      (let ((day-name (day-name day))
            (day-events (remove-if-not (curry #'string-equal day) (all-events)
                                       :key (rcurry #'getf :day))))
        (loop for time in (sort-list (remove-duplicates
                                      (mapcar (rcurry #'getf :time-slot)
                                              day-events)
                                      :test #'string-equal)
                                     #'< :key #'time-key)
           for time-events = (remove-if-not (curry #'equal time) day-events
                                            :key (rcurry #'getf :time-slot))
           for kids-events = (get-kids-events time-events)
           for grown-events = (get-grown-events time-events)
           do (when (plusp (length grown-events))
                (format t "~2%\\subsection{~:(~A~) ~A}" day-name time)
                (mapcar #'print-event-details grown-events))
           do (when (plusp (length kids-events))
                (let ((*standard-output* kids-events-file))
                  (format t "~2%\\subsection{~:(~A~) ~A}" day-name time)
                  (mapcar #'print-event-details kids-events))))))))

(defun print-latex-header (&key landscapep)
  (format t "\\batchmode
\\documentclass[letterpaper,10pt,twoside,openright,final,article~@[~*,landscape~]]{memoir}
\\usepackage[top=.5in,left=~:*~:[1in~;.5in~],right=~:*~:[1in~;.5in~],bottom=1in]{geometry}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{fixltx2e}
\\usepackage{graphicx}
\\usepackage{longtable}
\\usepackage{float}
\\usepackage{wrapfig}
\\usepackage{rotating}
\\usepackage[normalem]{ulem}
\\usepackage{amsmath}
\\usepackage{textcomp}
\\usepackage{marvosym}
\\usepackage{wasysym}
\\usepackage{amssymb}
\\usepackage{hyperref}
\\usepackage{multicol}
\\usepackage{pifont}
\\usepackage{newcent}
\\usepackage{rotating}
\\usepackage{needspace}

\\tolerance=1000
\\clubpenalty=10000
\\widowpenalty=10000
\\makeheadrule{headings}{\\textwidth}{1pt}
\\makefootrule{headings}{\\textwidth}{1pt}{4pt}
\\date{\\today}
\\title{~/fest/~:*}
\\author{Temple of Earth Gatherings \\\\ Florida Pagan Gathering}
\\renewcommand{\\pfbreakdisplay}{%
\\needspace{24pt}%
\\vspace{8pt}\\\\\\ding{76}\\quad\\ding{77}\\quad\\ding{78}\\\\%
\\vspace{11pt}}
\\setsecnumdepth{none}
\\makeevenhead{headings}{}{}{Florida Pagan Gathering}
\\makeoddhead{headings}{Temple of Earth Gatherings}{}{}
\\makeoddfoot{headings}{\\thepage}{}{~/fest/~:*}
\\makeevenfoot{headings}{~/fest/~:*}{}{\\thepage}
\\pagestyle{headings}
\\let\\oldsection=\\section
\\renewcommand{\\section}{%
  \\filbreak \\needspace{1.5in}
 \\vfill
  \\oldsection
}
\\let\\oldsubsection=\\subsection
\\renewcommand{\\subsection}{%
  \\needspace{1in}
  \\oldsubsection
}
\\let\\oldsubsubsection=\\subsubsection
\\renewcommand{\\subsubsection}{%
   \\needspace{.5in}
  \\oldsubsubsection
}


\\begin{document}
\\thispagestyle{headings}
"
          landscapep nil))

(defun extract-time-slots (nice-grid)
  (sort-list (remove-duplicates
              (mapcar (rcurry #'getf :time-slot)
                      (remove-if #'null
                                 (reduce #'append
                                         (mapcar #'rest nice-grid)))))
             #'< :key #'time-key))

(defun time-slot-in-place/html (time-slot place)
  (if-let ((event (find time-slot
                        (remove-if #'null (rest place))
                        :test #'equal
                        :key (rcurry #'getf :time-slot))))
    (event-reference/html event :name (second event) :briefp t)
    ""))

(defun time-slot-in-place (time-slot place)
  (if-let ((event (find time-slot
                        (remove-if #'null (rest place))
                        :test #'equal
                        :key (rcurry #'getf :time-slot))))
    (@ (second event))
    ""))

(defun print-daily-grid/html (day nice-grid)
  (let ((time-slots (extract-time-slots nice-grid)))
    (format t "~% <center>
<h1>TEG FPG Schedule for ~A<a name=\"~:*~A\"></a></h1>
~%<table class=\"grid\">
<tr><td class=\"grid-corner\"></td><th>~{~A~^</th><th>~}</th></tr>"
            (day-name day)
            time-slots)
    (dolist (place nice-grid)
      (format t "~%<tr><th>~A</th><td>~{~A~^</td><td>~}</td></tr>"
              (location-reference/html (car place))
              (mapcar (rcurry #'time-slot-in-place/html place) time-slots)))
    (format t "</table>~%</center>~%")))

(defun print-daily-grid (day nice-grid)
  (format t "~& ☠ Daily events grid for ~A (LaTeX)" day)
  (with-output-to-file (*standard-output* (format nil "Grid-~A.tex" day)
                                          :if-exists :supersede)
    (let ((time-slots (extract-time-slots nice-grid)))
      (format t "~% \\begin{center}
\\section{TEG FPG Schedule for ~A}
~%\\begin{tabular}{|r|~{~A~^|~}|}
\\hline~% & ~{\\textbf{~A}~^ & ~} \\\\"
              (day-name day)
              (times (length time-slots) "l")
              time-slots)
      (dolist (place nice-grid)
        (format t "~%\\hline~%\\textbf{~A} & ~{~A~^ & ~} \\\\" (@ (car place))
                (mapcar (rcurry #'time-slot-in-place place) time-slots)))
      (format t "~%\\hline~%\\end{tabular}
\\end{center}"))))

(defun seq (start end) (loop for i from start upto end collecting i))

(defun nice-grid (grid)
  (remove-if (lambda (row) (every #'null (subseq row 1))) grid))

(defun dishonor (string)
  (loop for honorific in '("Dr\.? " "Mrs?\.? " "M(is)?s\.? " "Rev\.? ")
     do (setf string (regex-rep-a))
       (@ string)))

(defun print-kids-book ()
  (format t "~& ☠ Kids' Handbook")
  nil)

(defun print-red-tent-insert ()
  (format t "~& ☠ Red Tent special insert")
  (with-output-to-file 
   (*standard-output* "handbook-red-tent.tex"
                      :if-exists :supersede)
   (format t "~{$\\bullet$ ~A ~}"
           (mapcar (rcurry #'event-reference :by-location-p nil)
                   (sort-events-chronologically 
                    (get-events-in-place "Red Tent"))))))

(defun print-venue-sheets ()
  (format t "~& ☠ Location venue sheets for ~R location~:P" (- (length *schedule*) 2))
  (loop for place in (remove-if #'null (mapcar #'car (subseq *schedule* 2)))
     do (with-output-to-file (*standard-output* (format nil "Venue: ~A.tex"
                                                        (substitute #\& #\/ place))
                                                :if-exists :supersede)
          (print-latex-header)
          (format t
                  "\\thispagestyle{headings}\\pagestyle{headings}
\\makeevenhead{headings}{}{~A~:*}{}
\\makeoddhead{headings}{}{~A~:*}{}
\\makeoddfoot{headings}{}{TEG FPG ~/fest/~:*}{}
\\makeevenfoot{headings}{}{TEG FPG ~/fest/~:*}{}
~% \\begin{tabular}{cl} \\begin{minipage}{4in}
~1@*~@[ \\includegraphics[width=1.5in]{red-tent} ~] {\\HUGE ~0@*~A}
\\end{minipage} & \\begin{minipage}{2in}
  \\includegraphics[width=1.5in]{teg-fpg-logo.png}
~% TEG FPG ~/fest/~:* ~% \\end{minipage} \\\\
\\end{tabular}
\\vspace{18pt}
~% This area is being used for the following workshops \\& events:
~% \\begin{multicols}{2}~%"
                  (@ place)
                  (string-equal place "Red Tent"))
          (mapcar (rcurry #'print-event-for-face-sheet-latex nil)
                  (sort-events-chronologically (get-events-in-place place)))
          (format t "~2%\\vfill~2%(End of scheduled events -- effective \\today)
\\end{multicols} ~%~% \\end{document}~%~%"))))

(defun day-key (day)
  (ecase (intern (string-upcase (string day)) :keyword)
    (nil nil) (:tue -1) (:wed 0) (:thu 1) (:fri 2) (:sat 3) (:sun 4)))

(defun time-key (time)
  (let ((key (and time (+ (if (find #\p (subseq time 0 (min 7 (length time)))) 12 0)
                          (parse-integer time :junk-allowed t)))))
    (if (= 1 key) 13 key)))

(defun event-time-key (event) (time-key (getf event :time-slot)))

(defun event-day-key (event) (day-key (getf event :day)))

(defun event-by-name (event)
  (find event (all-events) :key #'car :test #'string-equal))

(defun get-all-places ()
  (remove-if #'null (mapcar #'car (subseq *schedule* 2))))

(defun sort-events-chronologically (events)
  (sort-list (sort-list events
                        #'< :key #'event-time-key)
             #'< :key #'event-day-key))

(defun string<dishonor (a b)
  (string< (dishonor a) (dishonor b)))

(defun get-kids-events (set)
  (remove-if-not (lambda (event)
                   (< (or (car (parse-ages (getf event :ages))) 0)
                      13))
                 (get-grown-events set)))

(defun get-grown-events (set)
  (remove-if (compose (curry #'char= #\+) #'last-elt #'car)
	     (remove-if (compose #'null #'car) set)))

(defun get-events-in-place (place)
  (remove-if-not (curry #'string-equal place) (all-events)
                 :key (rcurry #'getf :location)))

(defun print-event-for-face-sheet-latex (event with-private-details-p)
  (format t "~2%\\vspace{18pt} \\hline
\\subsection*{ ~A }
~% ~@[\\textbf{Presenter:} ~A~]
~% \\textbf{Time:} ~A on ~A
~% \\textbf{Description:} ~A
~% \\textbf{Attendees:} ~A~@[; ~A~]~@[; ~A~]
 ~@[~2% * \\textbf{NOTES:} ~A~]
 ~@[~2% * \\textbf{PRESENTER NEEDS:} ~A~]"
          (getf event :name)
          (when-let ((p (getf event :presenter)))
            (or (getf (find p *presenters*
                            :test #'equal :key #'car) :name)
                (warn "Unknown presenter “~A” for event “~A”"
                      p (second event))))
          (getf event :time-slot)
          (getf event :day)
          (getf event :description)
          (interpret-age (getf event :ages))
          (@ (interpret-time (getf event :duration)))
          (interpret-sex (getf event :♂p) (getf event :♀p))
          (when with-private-details-p
            (getf event :notes))
          (when with-private-details-p
            (getf event :presenter-needs))))

(defun print-location-face-sheets ()
  (format t "~& ☠ Location face sheets for ~R location~:P" (- (length *schedule*) 2))
  (dolist (place (get-all-places))
    (with-output-to-file (*standard-output* (merge-pathnames 
                                             (format nil "Location: ~A.tex"
                                                     (substitute #\& #\/ place)))
                                            :if-exists :supersede)
      (print-latex-header)
      (format t
              "{\\HUGE  Internal Use }
\\thispagestyle{headings}
\\makeevenhead{headings}{}{~A~:*}{}
\\makeoddhead{headings}{}{~A~:*}{}
\\makeoddfoot{headings}{\\thepage}{}{~/fest/~:*}
\\makeevenfoot{headings}{~/fest/~:*}{}{\\thepage}
~% \\section*{\\HUGE $\\star{}$ ~A — Face Sheet}"
              (@ place))
      (mapcar (rcurry #'print-event-for-face-sheet-latex t)
              (sort-events-chronologically (get-events-in-place place)))
      (format t "\\end{document}~%~%"))))

(defun get-all-presenters ()
  (remove-duplicates
   (remove-if #'null
              (mapcar (rcurry #'getf :presenter) (all-events)))
   :test #'equal))

(defun presenter-by-name (presenter)
  (or (find presenter *presenters* :key #'car :test #'equal)
      (warn "No presenter with ID ~S" presenter)))

(defun vendor-by-name (vendor)
  (find vendor *vendors* :key #'car :test #'equal))

(defun location-reference/html (name)
  (if name
      (format nil "<a rel=\"location\" href=\"venues.html#~A\">~A</a>"
              name (~@ name))
      ""))

(defun presenter-reference/html (nickname)
  (if nickname
      (format nil "<a rel=\"presenter\" href=\"presenters.html#~A\">~A</a>"
              nickname (~@ (getf (presenter-by-name nickname) :name)))
      ""))

(defun event-reference/html (event &key (by-location-p t) (name (getf event :name))
                                     (briefp nil))
  (format nil "<a rel=\"event\" href=\"Events-~A.html#~A\">~A </a>~@[~*(~A&nbsp;on&nbsp;~A)~]"
          (string-upcase (getf event :day))
          (car event)
          (~@ name)
          (not briefp)
          (if by-location-p
              (location-reference/html (getf event :location))
              (if-let ((who (getf event :presenter)))
                (concatenate 'string "with " (presenter-reference/html who))
                ""))
          (getf event :day)))

(defun event-reference (event &key (by-location-p t))
  (assert event)
  (format nil "~A (~A~~on~~~A;~~p.\\pageref{~:(~A~)-~A})"
          (@ (getf event :name))
          (if by-location-p
              (@ (getf event :location))
              (format nil "~@[with ~A~]"
                      (if-let ((who (@ (getf event :presenter))))
                        (getf (presenter-by-name who) :name))))
          (getf event :day)
          (string-upcase (getf event :day))
          (car event)))

(defun events-for-presenter (presenter)
  (remove-if-not (curry #'string-equal presenter) (all-events)
                 :key (rcurry #'getf :presenter)))

(defun print-bio/html (file normalp name bio evenp photo events
                       no-recording-p super-headliner-p firep)
  (format file
          "<a name=\"~1@*~A\"></a>
~4@*~:[
~8@*~@[<br><img style=\"width:1in\" src=\"Dee.png\"> ~%~]
<h~0@*~:[~*3~;2~]>~1@*~A</h~0@*~:[~*3~;2~]>
 ~0@*~@[ <small> ~] ~2@*~A ~0@*~@[ </small> ~]
~5@*~A
~6@*~@[ <small>~@[(No recording)~]</small> ~%~]
~;<br clear=\"both\" >
<div><div class=\"headliner~3@*~:[-left~;-right~]\"> <h2>~1@*~A</h2>
<img style=\"width:~7@*~:[1in~;1.5in~]\" src=\"~4@*~A.png\"></div>
~2@*~A ~5@*~A ~6@*~@[ <small>~@[(No recording)~]</small></div> ~%~]
~]"
          normalp name bio              ; 0 1 2
          evenp photo events            ; 3 4 5
          no-recording-p                ; 6 7 8
          super-headliner-p firep))

(defun print-bio-latex (file normalp name bio evenp photo events
                             no-recording-p super-headliner-p firep)
  (if normalp
      (print-bio-latex/normal file normalp name bio evenp photo events
                              no-recording-p super-headliner-p firep)
    (print-bio-latex/headliner file normalp name bio evenp photo events
                               no-recording-p super-headliner-p firep))
  ;; (format file
  ;;           "~4@*~:[ % Non-headliner form %
  ;; ~8@*~@[\\includegraphics[width=\\columnwidth]{Dee.png} ~%~]
  ;; \\sub~0@*~@[~*sub~]section{~1@*~A} %
  ;; { ~0@*~@[ \\small ~] ~2@*~A } %
  ;; ~5@*~A
  ;; ~6@*~@[ {\\small ~@[(No recording)~]} ~%~]
  ;; ~; %
  ;; % Bio with photo
  ;;  \\begin{tabular}~
  ;; ~3@*~:[{r|l} % Photo first
  ;; \\begin{minipage}{~7@*~:[1in~;1.5in~]} \\subsection{~1@*~A} %
  ;; \\includegraphics[width=~7@*~:[1in~;1.5in~]]{~4@*~A.png} %
  ;; \\vfill \\end{minipage} & \\begin{minipage}{~7@*~:[6~;5.5~]in} \\begin{multicols}{2}
  ;; ~2@*~A ~5@*~A ~6@*~@[ {\\small ~@[(No recording)~]} ~%~]
  ;; \\end{multicols} \\end{minipage}
  ;; ~;{l|r} % Photo last
  ;; \\begin{minipage}{~7@*~:[6~;5.5~]in} \\begin{multicols}{2}
  ;; ~2@*~A ~5@*~A ~6@*~@[ {\\small ~@[(No recording)~]} ~%~]
  ;; \\end{multicols} \\end{minipage} & \\begin{minipage}{~7@*~:[1in~;1.5in~]}
  ;; \\subsection{~1@*~A} \\includegraphics[width=~7@*~:[1in~;1.5in~]]{~4@*~A.png} %
  ;; \\\\ \\vfill \\end{minipage}
  ;; ~] % end photo swap
  ;; ~] % end presenter bio
  ;; ~4@*~@[\\\\~% \\end{tabular} \\vfill ~%~]
  ;; \\vspace{6pt}
  ;; "
  ;;           normalp name bio              ; 0 1 2
  ;;           evenp photo events            ; 3 4 5
  ;;           no-recording-p                ; 6 7 8
  ;;           super-headliner-p firep)
  )

(defun print-bio-latex/headliner (file normalp name bio evenp photo events
                                       no-recording-p super-headliner-p firep)
  (format file
          "\\subsection{~1@*~A} 

\\begingroup
 \\begin{wrapfigure}{~3@*~:[l~;r~]}{1in}
%\\begin{center}
  \\includegraphics[width=1in]{~4@*~A.png} %
%\\end{center}
  \\end{wrapfigure}

{ ~2@*~A 

} ~5@*~A
~6@*~@[ {\\small ~@[(No recording)~]} ~%~]

\\endgroup

\\vspace{6pt}
"
          normalp name bio              ; 0 1 2
          evenp photo events            ; 3 4 5
          no-recording-p                ; 6 7 8
          super-headliner-p firep))

(defun print-bio-latex/normal (file normalp name bio evenp photo events
                                    no-recording-p super-headliner-p firep)
  (format file
          "% Non-headliner form %
~8@*~@[\\includegraphics[width=\\columnwidth]{Dee.png} ~%~]
\\subsubsection{~1@*~A} %
{  \\small  ~2@*~A } %
~5@*~A
~6@*~@[ {\\small ~@[(No recording)~]} ~%~]
\\vspace{6pt}
"
          normalp name bio              ; 0 1 2
          evenp photo events            ; 3 4 5
          no-recording-p                ; 6 7 8
          super-headliner-p firep))

(defun print-presenter-bios/html ()
  (format t "~& ☠ Presenter bios (HTML)")
  (with-output-to-file (workshop-bios "presenters.html"
                                      :if-exists :supersede)
    (print-preamble/html "Workshop Presenters" :stream workshop-bios)
    (with-output-to-file (music-bios "musical.html"
                                     :if-exists :supersede)
      (print-preamble/html "Musical Guests" :stream music-bios)
      (with-output-to-file (headliner-bios "headliners.html"
                                           :if-exists :supersede)
        (print-preamble/html "Headliners" :stream headliner-bios)
        (loop
           for i from 1
           for nickname in (get-all-presenters)
           for info = (presenter-by-name nickname)
           for headlinerp = (getf info :headlinerp)
           for musicalp = (getf info :musicalp)
           do (print-bio/html
               (cond (headlinerp headliner-bios)
                     (musicalp music-bios)
                     (t workshop-bios))
               (not (or headlinerp musicalp))
               (or (@ (getf info :name))
                   (format nil "<b>Presenter code <tt>~A</tt></b>" nickname))
               (or (@ (getf info :bio))
                   (prog1 "(No biography available yet.)"
                     (warn "No bio for “~A”" nickname)))
               (evenp i)
               (when (or headlinerp musicalp)
                 (substitute #\- #\Space (car info)))
               (format nil
                       "&nbsp; &nbsp; ~{~A~^ •&nbsp;~}"
                       (mapcar #'event-reference/html
                               (events-for-presenter nickname)))
               (not (getf info :can-record-p))
               (equal #\! headlinerp)
               (or (string-equal nickname "Dee")
                   (string-equal nickname "Pullen")
                   (string-equal nickname "fire")))

           unless (getf info :confirmedp)
           do (warn "Presenter “~A” has not been confirmed" nickname))
        (print-closing/html :stream headliner-bios))
      (print-closing/html :stream music-bios))
    (print-closing/html :stream workshop-bios)))

(defun print-presenter-bios ()
  (format t "~& ☠ Presenter bios")
  (with-output-to-file (workshop-bios "handbook-workshop-bios.tex"
                                      :if-exists :supersede)
    (with-output-to-file (music-bios "handbook-music-bios.tex"
                                     :if-exists :supersede)
      (with-output-to-file (headliner-bios "handbook-headliner-bios.tex"
                                           :if-exists :supersede)
        (let ((h.i 0) (m.i 0))
         (loop
            for info in (sort (mapcar #'presenter-by-name (get-all-presenters))
                              #'string<dishonor :key (rcurry #'getf :name))
            for nickname = (car info)
            for headlinerp = (getf info :headlinerp)
            for musicalp = (getf info :musicalp)
            unless (equal nickname "Main Ritual")
            do (print-bio-latex
                (cond (headlinerp headliner-bios)
                      (musicalp music-bios)
                      (t workshop-bios))
                (not (or headlinerp musicalp))
                (or (@ (getf info :name))
                    (format nil "\\textbf{Presenter code \\texttt{~A}}" nickname))
                (or (@ (getf info :bio))
                    (prog1 "\\footnote{No biography available yet.}"
                      (warn "No bio for “~A”" nickname)))
                (or (and headlinerp (evenp (incf h.i)))
                    (and musicalp (evenp (incf m.i))))
                (when (or headlinerp musicalp)
                  (substitute #\- #\Space (car info)))
                (format nil
                        "\\hspace{2em} {\\footnotesize ~{~A~^ $\\bullet$~~~}}"
                        (mapcar #'event-reference
                                (get-grown-events
                                 (events-for-presenter nickname))))
                (not (getf info :can-record-p))
                (equal #\! headlinerp)
                (or (string-equal nickname "Dee")
                    (string-equal nickname "Pullen")
                    (string-equal nickname "fire")))

            unless (getf info :confirmedp)
            do (warn "Presenter “~A” has not been confirmed" nickname)))))))

(defun print-all-presenters-mail ()
  (with-output-to-file (*standard-output* "All Presenters.smtp"
                                          :if-exists :supersede)
    (format t "MAIL FROM: workshops@flapagan.org
RCPT TO: webmaster1@flapagan.org
DATA
From: \"TEG FPG Workshops\" <workshops@flapagan.org>
Reply-To: \"TEG FPG Workshops\" <workshops@flapagan.org>
To: <webmaster1@flapagan.org>
Subject: TEG FPG Workshops Scheduled
Content-Type: text/plain

************************************************************************
All FPG Scheduled Events
************************************************************************

")
    (loop for presenter in (get-all-presenters)
       for info = (presenter-by-name presenter)
       do (format t
                  "

========================================================================

PRESENTER: ~A

~A

~@[~*Recording or photography MAY BE permitted at their events.~]

"
                  (getf info :name)
                  (or (getf info :bio) "(No bio yet available.)")
                  (getf info :can-record-p))
       do (loop for event in (events-for-presenter presenter)
             do (format t
                        "~2%
------------------------------------------------------------------------

~A

Location: ~A

Time: ~A  ~:(~A~)

Description:

~A

Attendees: Ages: ~A~@[; ~A~]

"
                        (getf event :name)
                        (getf event :location)
                        (getf event :time-slot)
                        (getf event :day)
                        (getf event :description)
                        (interpret-age (getf event :ages))
                        (interpret-sex (getf event :♂p) (getf event :♀p)))))

    (format t "
************************************************************************
End of listing.
************************************************************************


~C~C.~C~C"
            #\Return #\Linefeed #\Return #\Linefeed)))

(defun print-presenter-mails ()
  (let ((have-mail 0))
    (loop for nickname in (get-all-presenters)
       for host = (presenter-by-name nickname)

       do (format t "~& ☠ Presenter mail for ~A" (getf host :name))
       do (if (when-let ((mail (getf host :email)))
                (find #\@ mail))
              (with-output-to-file (*standard-output* 
                                    (format nil "Presenter%~A.smtp" (first host))
                                    :if-exists :supersede)
                (incf have-mail)
                (format t
                        "MAIL FROM: workshops@flapagan.org
RCPT TO: ~1@*~A~0@*
DATA
From: \"TEG FPG Workshops\" <workshops@flapagan.org>
Reply-To: \"TEG FPG Workshops\" <workshops@flapagan.org>
To: \"~0@*~A\" <~1@*~A>
Subject: TEG FPG Workshops Scheduled
Content-Type: text/plain


Dear ~0@*~A:

Thank you  for joining us at  Florida Pagan Gathering! We're  so happy
that  you've  chosen  to  share  your  wisdom  and  talents  with  the
FPG family.

Your workshops (or events) have been scheduled for ~4@*~A!

In order to ensure that everything  goes smoothly, we have three staff
members  dedicated   to  supporting  your  events.    Mystral  is  the
Coördinator for  our Production  Division.  Sage and  Bruce-Robert are
Lugals (managers) assisting  her. Naturally, any of  our staff members
will be happy to assist you in whatever way they can as well.

PLEASE  check in  with  any of  these  three as  soon  as you  arrive!
Our Registration staff by the front  gate can direct you to where they
can be found, or raise them on our camp-wide walkie-talkie system.

Please also ensure  that you let the Production Division  team know in
which cabin, lodge,  or other area you're camping ---  in case we need
to reach you during the Festival.

The following information lists the events for which you're scheduled.
If you see any errors or omissions, please let the Production Division
team   know   as   soon   as    possible   so   that   we   can   make
alternate arrangements.

Note that most of this information is also found in the FPG programmes
handed out at Registration.

Your contact information: ~@[~A~] ~@[~A~]

~:[Recording and photography will NOT be allowed at your events.
~;Recording or photography MAY BE permitted at your events.~]

NOTE:

The time slot shown  for an event is where it  appears on the schedule
grid in the programme.

The “Short (Grid)  Name” is the (possibly abbreviated)  name that will
appear on the  schedule grid. The full title will  be displayed in the
events listing.

Some information may have been edited for brevity.

Your “Notes” and  “Needs” will not be published in  the programme, but
are being shared with our Production Division team to make sure things
go as smoothly as possible.

------------------------------------------------------------------------

Your biography text:

~A

"
                        (getf host :name)
                        (getf host :email)
                        (getf host :phone)
                        (getf host :can-record-p)
                        (getf host :bio)
                        (current-festival))
                (dolist (event (events-for-presenter nickname))
                  (format t
                          "~%
------------------------------------------------------------------------
~% ~A
~% Short (Grid) Name: ~A
~% Location: ~A
~% Time: ~A  ~:(~A~)~@[ (duration: ~A)~]
~% Description:
~% ~A
~% Attendees: Ages: ~A; Men: ~:[No~;Yes~]; Women: ~:[No~;Yes~]
~% ~@[~2% ⋆ NOTES: ~A~]~@[~2% ⋆ NICKNAME NEEDS: ~A~]~2%"
                          (getf event :name)
                          (second event)
                          (getf event :location)
                          (getf event :time-slot)
                          (getf event :day)
                          (interpret-time (getf event :duration))
                          (getf event :description)
                          (interpret-age (getf event :ages))
                          (getf event :♂p) (getf event :♀p)
                          (getf event :notes)
                          (getf event :nickname-needs)))
                (format t "~C~C.~C~C"
                        #\Return #\Linefeed #\Return #\Linefeed))
              (warn " ✗ No eMail for ~A" nickname)))

    (format t "~&Mails generated for ~R presenter~:P" have-mail)))

(defun print-presenter-face-sheets ()
  (let* ((all-presenters (get-all-presenters)))
    (format t "~& ☠ Presenter face sheets for ~:D presenter~:P" (length all-presenters))
    (loop for presenter in all-presenters
       for info = (presenter-by-name presenter)
       do (with-output-to-file (*standard-output* 
                                (merge-pathnames 
                                 (format nil "~A: ~A.tex"
                                         (cond ((getf info :headlinerp) "Headlining Presenter")
                                               ((getf info :musicalp) "Musical Guest")
                                               (t "Presenter"))
                                         presenter))
                                :if-exists :supersede)
            (print-latex-header)

            (format t
                    "\\thispagestyle{headings}
\\makeevenhead{headings}{}{~1@*~A}{}
\\makeoddhead{headings}{}{~1@*~A}{}
\\makeoddfoot{headings}{}{TEG FPG ~0@*~A}{}
\\makeevenfoot{headings}{}{TEG FPG ~0@*~A}{}

\\begin{tabular}{cl}
{\\HUGE ~A} & \\begin{minipage}{2in}
              \\includegraphics[width=1.5in]{teg-fpg-logo.png}

              TEG FPG ~0@*~A
              \\end{minipage} \\\\
\\end{tabular}

Dear ~1@*~A~*:

Thank you for joining us at Florida Pagan Gathering! We're
so happy that you've chosen to share your wisdom and talents with the
FPG family.

In order to ensure that everything goes smoothly, we have three staff
members dedicated to supporting your events. Mystral is the
Co\\\"ordinator for our Production Division. Sage and Bruce-Robert are
Lugals (managers) assisting her. Naturally, any of our staff members
will be happy to assist you in whatever way they can as well.

\\emph{Please} check in with any of these three as soon as you arrive!
Our Registration staff by the front gate can direct you to where they
can be found, or raise them on our camp-wide walkie-talkie system.

Please also ensure that you let the Production Division team know in
which cabin, lodge, or other area you're camping --- in case we
need to reach you during the Festival.

The following information lists the events for which you're
scheduled. If you see any errors or omissions, please let the
Production Division team know as soon as possible so that we can make
alternate arrangements.

Note that most of this information is also found in the FPG programmes
handed out at Registration.

Your contact information: ~@[~A~] ~@[~A~]

~:[Recording and photography will \\emph{not} be allowed at your events.
~;Recording or photography \\emph{may be} permitted at your events.~]

\\subsection*{Note:}

The time slot shown for an event is where it appears on the schedule
grid in the programme.

The ``Short (Grid) Name'' is the possibly-abbreviated name that will
appear on the schedule grid. The full title will be displayed in the
events listing.

"
                    (@ (current-festival))
                    (@ (getf info :name))
                    (@ (getf info :email))
                    (@ (getf info :phone))
                    (getf info :can-record-p) nil)
            (dolist (event (events-for-presenter presenter))
              do (format t
                         "~2%\\vspace{12pt}\\hline\\vspace{12pt}
~% \\section*{~A}
~% \\textbf{Short (Grid) Name:} ~A
~% \\textbf{Location:} ~A
~% \\textbf{Time:} ~A  ~:(~A~)~@[ (duration: ~A)~]
~% \\textbf{Description:} ~A
~% Attendees: ~A~@[; ~A~]
~@[~2% $\\star$ NOTES: ~A~]~@[~2% $\\star$ PRESENTER NEEDS: ~A~]

\\vfill"
                         (@ (getf event :name))
                         (@ (second event))
                         (@ (getf event :location))
                         (@ (getf event :time-slot))
                         (@ (getf event :day))
                         (@ (interpret-time (getf event :duration)))
                         (@ (getf event :description))
                         (@ (interpret-age (getf event :ages)))
                         (@ (interpret-sex (getf event :♂p) (getf event :♀p)))
                         (@ (getf event :notes))
                         (@ (getf event :presenter-needs))))
            (format t "\\end{document}~%~%")))))

(defun print-preamble/html (title &key (stream *standard-output*))
  (format stream
          "<!DOCTYPE html>
<html>
 <head>
  <title>~A — TEG FPG ~A</title>
  <link rel=\"stylesheet\" href=\"flapagan-herald.css\" >
  <meta charset=\"utf-8\">
  <meta name=\"viewport\" content=\"initial-scale=1\" >
  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" >
 </head>
 <body>
  <h1>~0@*~A — TEG FPG ~1@*~A</h1>

  <nav id=\"pagenav\">
   <a class=\"index-link\" href=\"index.html\">~:*~A</a>
   <a href=\"headliners.html\">Headliners <br> </a>
   <a href=\"musical.html\">Musical <br> Guests</a>
   <a href=\"presenters.html\">Workshop <br> Presenters</a>
   <a href=\"Grid.html\">Schedule <br> Overview</a>
   <a href=\"Events-WED.html\">★ Wednesday's <br> Events</a>
   <a href=\"Events-THU.html\">★ Thursday's <br> Events</a>
   <a href=\"Events-FRI.html\">★ Friday's <br> Events</a>
   <a href=\"Events-SAT.html\">★ Saturday's <br> Events</a>
   <a href=\"Events-SUN.html\">★ Sunday's <br> Event</a>
  </nav>
"
          (~@ title)
          (~@ (current-festival))))

(defun print-closing/html (&key (stream *standard-output*))
  (princ "</body></html>" stream))

#+oldserver
(defun ~@ (s)
  (typecase s
    (null nil)
    (string (cl-ppcre:regex-replace-all "\\n\\n" (hunchentoot:escape-for-html s) "<br>"))
    (t (~@ (princ-to-string s)))))

(defun print-daily-events/html (day)
  (format t "~& ☠ Daily events for ~A (HTML)" day)
  (with-output-to-file (*standard-output* (format nil "Events-~A.html" day)
                                          :if-exists :supersede)
    (print-preamble/html (concatenate 'string "★ Events for " (day-name day)))
    (let ((day-name (day-name day))
          (day-events (remove-if-not (curry #'string-equal day) (all-events)
                                     :key (rcurry #'getf :day))))
      (loop for time in (sort-list (remove-duplicates
                                    (mapcar (rcurry #'getf :time-slot)
                                            day-events)
                                    :test #'string-equal)
                                   #'< :key #'time-key)
         for time-events = (remove-if-not (curry #'equal time) day-events
                                          :key (rcurry #'getf :time-slot))
         do (when (plusp (length time-events))
              (format t "~4%<h2 class=\"day-time\">~:(~A~) ~A</h2>" day-name time)
              (mapcar #'print-event-details/html time-events))))
    (print-closing/html)))

(defvar *html-grid* nil)

(defun print-schedule (day)
  (let* ((columns (loop for col in (cdr (car *schedule*))
                     for i from 1
                     when (string-equal col (string day))
                     collect i))
         (nice-grid (nice-grid (grid-for-columns columns))))

    (print-daily-grid day nice-grid)
    (when *html-grid*
      (let ((*standard-output* *html-grid*))
        (print-daily-grid/html day nice-grid)))
    (print-daily-events day)
    (print-daily-events/html day)))

(defun print-vendors-row ()
  (with-output-to-file (*standard-output* "Vendors' Row.tex"
                                          :if-exists :supersede)
    (print-latex-header :landscapep t)
    (format t "\\chapter{Vendors' Row Layout}
\\begin{tabular}{|rrl||||rlr|}
\\hline
")
    (loop for row in
         (append (loop for n from 1 upto 19 collecting (list n (+ 19 n)))
                 '((nil nil) (39 41) (40 42) (nil 43) (nil 44)))
       if (or (first row) (second row))
       do (format t "~& ~:D & ~A & ~A & ~:D \\\\ ~% \\hline ~%"
                  (or (first row) "")
                  (if (first row) (or (when-let ((vendor (aref *vendors-row* (first row))))
                                        (concatenate 'string (@ vendor)
                                                     (if (getf (vendor-by-name vendor) :lockedp)
                                                         " \\heartsuit " " ")
                                                     " & "
                                                     (@ (getf (vendor-by-name vendor) :first-name))
                                                     " "
                                                     (@ (getf (vendor-by-name vendor) :last-name))))
                                      "--- & ")
                      " & ")
                  (if (second row) (or (when-let ((vendor (aref *vendors-row* (second row))))
                                         (concatenate 'string (@ vendor)
                                                      (if (getf (vendor-by-name vendor) :lockedp)
                                                          " \\heartsuit " " ")
                                                      " & "
                                                      (@ (getf (vendor-by-name vendor) :first-name))
                                                      " "
                                                      (@ (getf (vendor-by-name vendor) :last-name))))
                                       "& ---")
                      " & ")
                  (or (second row) ""))
       else do (format t "~& \\hline \\hline \\hline \\hline \\hline "))
    (format t "\\end{tabular}
\\end{document}~%")))

(defun print-vendor-mails ()
  (let ((have-mail 0))
    (dolist (vendor (remove-if-not (rcurry #'getf :slip-1) *vendors*))
      (format t "~& ☠ Vendor mail for ~A" (car vendor))
      (if (when-let ((mail (getf vendor :email)))
            (find #\@ mail))
          (with-output-to-file (*standard-output* (format nil "Vendor%~A.smtp" (car vendor))
                                                  :if-exists :supersede)
            (incf have-mail)
            (format t
                    "MAIL FROM: vendors@flapagan.org
RCPT TO: ~4@*~A
DATA
From: \"TEG FPG Vendor Lugals\" <vendors@flapagan.org>
Reply-To: \"TEG FPG Vendor Lugals\" <vendors@flapagan.org>
To: \"~0@*~A\" <~4@*~A>
Subject: TEG FPG Vendors Scheduled
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary=\"XXXXXXXX~4@*~A~~0408\"

This is a multipart message.

--XXXXXXXX~4@*~A~~0408
Content-Type: text/plain; charset=UTF-8

Dear ~1@*~A ~2@*~A:

Thank you  for joining us at  Florida Pagan Gathering! We're  so happy
that you've chosen to join us as an FPG Vendor.

In  order to  ensure that  everything goes  smoothly, we  have *three*
staff  members  dedicated  to  supporting our  vendors  (and  workshop
presenters).   Mystral  is   the   Coördinator   for  our   Production
Division. Sage and Bruce-Robert are Lugals (managers) assisting her --
collectively, we are your Production team.

Unlike in  previous FPG  Festivals, where  only one  designated Vendor
Lugal could  handle most of your  needs, *any of these  three* will be
able to  assist you with most  needs.  You'll usually find  (at least)
one of us  near the four-way crossroads near the  west end of Vendors'
Row  and the  entrance to  the Forest;  look for  the purple-and-green
vertical banners  for the “Production Office.”  (On Wednesday morning,
as most of  you are arriving, one of us  will be “patrolling” Vendors'
row, as well.)

*PLEASE*  remember   that  immediately   after  checking  in   at  the
Registration trailer/tent by  the main gate, you *must*  check in with
the Production team before unpacking.

Naturally, any of our TEG staff members will be happy to assist you in
whatever way they  can as well, or they can  reach the Production team
member “on duty” on the radio.

Our Registration  staff by the front  gate can direct you  to where we
can be found, or raise us on our camp-wide walkie-talkie system.

Please also ensure  that you let the Production Division  team know in
which cabin, lodge,  or other area you're camping ---  in case we need
to reach you during the Festival.

------------------------------------------------------------------------

Your contact information on file:

Phone: ~3@*~A

eMail: ~4@*~A

Due to the last-minute staffing changes, *PLEASE* advise us of your
needs or any arrangements you may have made with the previous
staff members.

★ ★ If it is not written here, we do *not* know it. ★ ★

Your Comments/Needs: ~A

 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

~5@*~@[
 ★ Food vendor ★

 Please  note that  you will  be located  away from  the Vendors'  Row
 area. Most things will work just the  same, but we'll be able to make
 some  different accomodations  —  particularly with  regards to  your
 vehicles. We  also understand that  you will need power  and possibly
 water hook-ups.

 DUE TO THE LAST-MINUTE STAFFING CHANGES, *PLEASE* ADVISE US OF YOUR
 NEEDS OR ANY ARRANGEMENTS YOU MAY HAVE MADE WITH THE PREVIOUS
 STAFF MEMBERS.

 IF IT IS NOT WRITTEN HERE, WE DO *NOT* KNOW IT.


~]

Your Handbook advertisement: ~6@*~:[ (none) ~; ~A ~]

  ★ SPECIAL NOTE — we MAY be able to accept changes for the handbook
    if you eMail us TODAY.


For any questions or issues, you can contact all three of us by eMail
before (or after) Festival at: vendor@flapagan.org

------------------------------------------------------------------------

In an emergency, you can contact Sage by telephone at +1 724-374-3411

--- that's +1 SAGES-HE-411
\(Like, “Sage's (the guy), he (has the) information.”)

Contacting us by eMail is preferred as it goes to whichever of the
three of us happens to be available first.

Once we are on-site (on Tuesday), we may only be checking eMail or
voicemail sporadically, so please be patient.

************************************************************************

Pre-Festival/Registration Information

• To register on line, visit: http://www.flapagan.org/store/

• The registration fee is $140.00 until April 21st.

  • If you have not registered yet, the deadline is
    rapidly approaching!

  • This covers one person and one 10´×10´ space.

  • Any others who accompany you have to pay the regular
    attendee admission.

  • Additional vending spaces can be purchased for $25.00 per
    10´×10´ space.


• Due to these  last-minute staff changes, we \\emph{may  not} be able
  to provide assistance through the Yahoo!  group, as has been done in
  the past. Please contact us by eMail.

• Spaces are \\emph{assigned}.   During Festival: if you  want to keep
  your  space for  the  following Festival  you  must Pre-register  on
  Saturday afternoon and state that you want the same spot.

• Once Registered --- Please eMail that you have registered. We do not
  always receive  notifications from  the Registration  office quickly
  (but we are working to improve this).

• We  do  provide small  advertisements  on  our  webpage and  in  our
  programmes (handbooks). This  is free. If you  are interested please
  eMail us a 25  word blurb for the handbook, and a  50 word blurb for
  the    website.    See    http://www.flapagan.org/vendor.html    for
  samples. These are due by March 15th.

************************************************************************

What You Can Expect As A Vendor

• Vendors are allowed entry on-site Wednesday morning after 9am

• Vendors are *required to check  in* with site Registration *and* the
  Production  team upon  arrival, and  *prior* to  starting to  unload
  their vehicle.

• Unloading vehicles  must take *no  longer than*  2 hours —  then all
  vehicles must be moved to the parking lot. Anyone parked on Vendors'
  Row for more than  2 hours for unloading will *not*  be welcome as a
  vendor at future festivals.

• Vendors are assigned a 10´×10´ space  with a 1´—2´ space between for
  tie-downs and/or walkway. You are  *only* guaranteed 10´×10´. If you
  need  more  than  10  feet  wide  it  would  be  best  to  secure  2
  spaces. Most spaces are *not* more than 10´ deep.

• Camping  directly behind  your space  *may* be  available in  *some*
  spaces, but  not all.  If you  are able to  camp behind  your space,
  please keep  in mind your  camping area  cannot exceed the  width of
  your vending space.

• RV's or any  vehicles that attendees sleep in must  be parked in the
  RV area within 2 hours after arrival on site.

• Fresh food  and beverages may only  be sold or bartered  by properly
  licensed vendors  who have the  prior approval  of the TEG  Board of
  Directors    or   their    designee.   However,    non-refrigerated,
  non-perishable, prepackaged  and marked for individual  resale items
  may be sold by any vendor.

• *No  one*  may  sell  or barter  *anything*  containing  alcohol  on
  vendor's row, unless  proper local, State, and  Federal licensure is
  in place.  (You must present  copies of your license  information in
  advance to  the Production team and  are usually required to  post a
  copy  by  the  relevent  agencies.) This  includes  free  gift  with
  purchase, recipes, bottles, corks, bottle bags, etched bottles, etc…
  Selling  items containing  alcohol on  Vendors' Row  will result  in
  expulsion from the festival with no refund of entry fees.

• The  sale of  smokeable herbs  is OK  as long  as the  sales are  in
  compliance with State and Federal law. The festival does *not* allow
  the sale of pipes, bongs, or any other smoking paraphernalia.

• Healers who provide hands-on healing  (*any* touching of the client)
  and receive  any compensation, or  fee for services,  which includes
  gifts, donations, money, services or material, *must* be licensed by
  the State of Florida.

• Electricity is *not* available at any space on Vendors' Row, without
  prior  written  approval from  the  Board  of Directors,  Production
  Division  Coördinator, and  Vendor  Lugal.  Generators or  extension
  cords to cabins  or workshop areas are *not*  permitted.  Battery or
  solar power systems are allowed.

• All  Vendors  must  be  off-site  by  *no  later  than*  1pm  Sunday
  afternoon. If you are not able to get off site by this time you will
  not be welcome back as a vendor for future festivals.

• A Charging  station is  provided at the  Community Center.   It will
  *not*  be  supervised;  please  watch your own devices to make  sure
  they don't escape into the woods. Bring your own charger.

--XXXXXXXX~4@*~A~~0408
Content-Type: application/pdf
Content-Disposition: attachment; filename=FPG-~:(~A~)-Vendor-Info-~A.pdf
Content-Transfer-Encoding: base64
Content-Description: \"FPG ~:(~2:*~A~) Vendor Info. ~A (PDF)\"~%~%"
                    (@ (car vendor))
                    (@ (getf vendor :first-name))
                    (@ (getf vendor :last-name))
                    (@ (getf vendor :phone))
                    (@ (getf vendor :email))
                    (@ (getf vendor :comments))
                    (find #\Y (string-upcase (getf vendor :food-vendor-p)))
                    (@ (getf vendor :description))
                    *season* *year*)
            (with-open-file (pdf-file (merge-pathnames
                                       (format nil "Vendor: ~A (~:(~A~) ~A).pdf"
                                               (car vendor) *season* *year*))
                                      :direction :input
                                      :element-type '(unsigned-byte 8)
                                      :if-does-not-exist :error)
	      ;; (s-base64:encode-base64 pdf-file *standard-output*)
	      )
            (format t "~%~%--XXXXXXXX~A~~0408~%~%~C~C.~C~C"
                    (@ (getf vendor :email))
                    #\Return #\Linefeed #\Return #\Linefeed))
          (warn " ✗ No eMail for ~A" (car vendor))))
    (format t "~&Mails generated for ~R vendor~:P" have-mail)))

(defun print-vendor-face-sheets ()
  (let ((have 0))
    (dolist (vendor (remove-if-not (rcurry #'getf :slip-1)
                                   *vendors*))
      (with-output-to-file (*standard-output* (format nil "Vendor: ~A.tex" (car vendor))
                                              :if-exists :supersede)
        (print-latex-header)
        (incf have)
        (format t
                "\\thispagestyle{headings}
\\makeevenhead{headings}{~A~:*}{}{TEG FPG Vendor}
\\makeoddhead{headings}{~A}{}{TEG FPG Vendor}
\\makeoddfoot{headings}{\\thepage}{}{~A~:*}
\\makeevenfoot{headings}{\\thepage}{}{~A~2:*}

\\begin{tabular}{cl}
\\begin{minipage}{4in}
{\\HUGE ~A}
\\end{minipage} & \\begin{minipage}{2in}
              \\includegraphics[width=1.5in]{teg-fpg-logo.png}

              TEG FPG ~A
              \\end{minipage} \\\\
\\end{tabular}

\\section*{ $\\star$ ~0@*~A~* $\\star$ }

Dear {\\Large ~A ~A }:

\\subsection{Welcome!}

\\begin{multicols}{2}

In order  to ensure that everything  goes smoothly, we have  a dedicated
Vendor   Concierge,  Erin   (``Rin'')   Dowd.  In   addition,  we   have
\\emph{three}  staff members  dedicated to  supporting our  vendors (and
workshop presenters). Mystral is  the Co\\\"ordinator for our Production
Division. Sage and  Bruce-Robert are Lugals (managers)  assisting her --
collectively, we are your Production team.

You'll usually  find (at least) one  of us near the  four-way crossroads
near the west end  of Vendors' Row and the entrance  to the Forest; look
for  the Elysium  vertical banners  for the  ``Production Office.''  (On
Wednesday  morning,   as  most  of   you  are  arriving,  Rin   will  be
``patrolling'' Vendors' row, as well.)

{ \\Large \\emph{Please} remember that immediately after checking in
at the Registration trailer/tent by the main gate, you \\emph{must}
check in with the Production team before unpacking. }

Naturally, any of our TEG staff members will be happy to assist you in
whatever way they can as well, or they can reach the Production team
member ``on duty'' on the radio.

Our Registration staff by the front gate can direct you to where they
can be found, or raise them on our camp-wide walkie-talkie system.

Please also ensure that you let the Production Division team know in
which cabin, lodge, or other area you're camping --- in case we
need to reach you during the Festival.

\\end{multicols}

\\vspace{1in}

Your contact information on file:

\\textbf{Phone:} ~A

\\textbf{eMail:} ~A

~@[\\textbf{Your Comments:} ~A ~]

~@[ \\vfill {\\Huge $\\star$ Food vendor ~*}

 Please  note that  you will  be located  away from  the Vendors'  Row
 area. Most things will work just the  same, but we'll be able to make
 some  different   accomodations  —   particularly  with   regards  to
 your vehicles.

\\vfill
~]

\\textbf{Your Handbook advertisement:} ~:[ (none) ~; ~:* ~A ~]


For any questions or issues, you can contact all three of us by eMail
before (or after) Festival at: \\texttt{vendor@flapagan.org}

\\vfill

In an emergency, you can contact Sage by telephone at \\texttt{+1
724-374-3411} --- that's \\texttt{+1 SAGES-HE-411}. \\
{\\small (Like, ``Sage's (the guy), he (has the) information''.)}

Contacting us by eMail is preferred as it goes to whichever of the
three of us happens to be available first.

Once we are on-site (on Tuesday), we may only be checking eMail or
voicemail sporadically, so please be patient.

\\newpage

\\subsection{What You Can Expect As A Vendor}
\\begin{enumerate}

\\item Vendors are allowed entry on-site Wednesday morning after 9am

\\item Vendors are \\emph{required to check in} with site Registration
\\emph{and} the Production team upon arrival, and \\emph{prior} to
starting to unload their vehicle.

\\item Unloading vehicles must take \\emph{no longer than} 2 hours ---
then all vehicles must be moved to the parking lot. Anyone parked on
Vendors' Row for more than 2 hours for unloading will \\emph{not} be
welcome as a vendor at future festivals.

\\item Vendors are assigned a $10^\\prime\\times10^\\prime$ space with a
$1^\\prime - 2^\\prime$ space between for tie-downs and/or walkway. You
are \\emph{only} guaranteed $10^\\prime\\times10^\\prime$. If you need more
than 10 feet wide it would be best to secure 2 spaces. Most spaces are
\\emph{not} more than $10^\\prime$ deep.

\\item Camping directly behind your space \\emph{may} be available in
\\emph{some} spaces, but not all. If you are able to camp behind your
space, please keep in mind your camping area cannot exceed the width
of your vending space.

\\item Spaces are \\emph{assigned}.  During Festival: if you want to
keep your space for the following Festival you must Pre-register on
Saturday afternoon and state that you want the same spot.

\\item Once Registered --- Please eMail that you have registered. We do
not always receive notifications from the Registration office
quickly (but we are working to improve this).

\\item We do provide small advertisements on our webpage and in our
programmes (handbooks). This is free. If you are interested please
eMail us a 25 word blurb for the handbook, and a 50 word blurb for the
website. See \\texttt{http://www.flapagan.org/vendor.html} for
samples. 

\\item RV's or any vehicles that attendees sleep in must be parked in
the RV area within 2 hours after arrival on site.

\\item Fresh food and beverages may only be sold or bartered by
properly licensed vendors who have the prior approval of the TEG Board
of Directors or their designee. However, non-refrigerated,
non-perishable, prepackaged and marked for individual resale items may
be sold by any vendor.

\\item \\emph{No one} may sell or barter \\emph{anything} containing
alcohol on vendor's row, unless proper local, State, and Federal
licensure is in place. (You must present copies of your license
information in advance to the Production team and are usually required
to post a copy by the relevent agencies.) This includes free gift with
purchase, recipes, bottles, corks, bottle bags, etched bottles,
etc\\ldots Selling items containing alcohol on Vendors' Row will
result in expulsion from the festival with no refund of entry fees.

\\item The sale of smokeable herbs is OK as long as the sales are in
compliance with State and Federal law. The festival does \\emph{not}
allow the sale of pipes, bongs, or any other smoking paraphernalia.

\\item Healers who provide hands-on healing (\\emph{any} touching of the
client) and receive any compensation, or fee for services, which
includes gifts, donations, money, services or material, \\emph{must} be
licensed by the State of Florida.

\\item Electricity is \\emph{not available} at any space on Vendors'
Row, without prior written approval from the Board of Directors,
production Division Co\\\"ordinator, and Vendor Lugal. Generators or
extension cords to cabins or workshop areas are \\emph{not}
permitted. Battery or solar power systems are allowed.

\\item All Vendors must be off-site by \\emph{no later than} 1pm Sunday
afternoon. If you are not able to get off site by this
time you will not be welcome back as a vendor for future festivals.

\\item A Charging station is provided at the Dining Hall. It will
\\emph{not} be supervised; please watch your own devices to make sure
they don't escape into the woods. Bring your own charger.

\\end{enumerate}

\\end{multicols}

\\vfill
"
                (@ (car vendor))
                (@ (current-festival))
                (@ (getf vendor :first-name))
                (@ (getf vendor :last-name))
                (@ (getf vendor :phone))
                (@ (getf vendor :email))
                (@ (getf vendor :comments))
                (find #\Y (string-upcase (getf vendor :food-vendor-p)))
                (@ (getf vendor :description))
                (remove-if #'null (mapcar (curry #'getf vendor) '(:slip-1 :slip-2 :slip-3))))

        (let ((slips (remove-if #'null (mapcar (curry #'getf vendor) '(:slip-1 :slip-2 :slip-3)))))
          (if (getf vendor :lockedp)
              (format t "~2% \\section*{Pre-Registered}

{ \\large Since  you had pre-registered at the prior  Festival, you have
reserved your slip~P; ~{~A~^ and ~}. }"
                      (length slips) slips)
              (format t "{\\small registry  ~S }" slips)))

        (format t "\\end{document}~%~%")))
    (format t "~& ☠ Presenter face sheets for ~R vendor~:P" have)))

(defun print-vendors ()
  (format t "~& ☠ Vendors")
  (with-output-to-file (vendors "handbook-vendors.tex"
                                :if-exists :supersede)
    (with-output-to-file (food-vendors "handbook-food-vendors.tex"
                                       :if-exists :supersede)
      (loop for vendor in (remove-if-not (rcurry #'getf :description)
                                         (remove-if-not (lambda (vendor)
                                                          (or (mapcar (curry #'getf vendor)
                                                                      '(:slip-1 :slip-2 :slip-3))))
                                                        *vendors*))
         for file = (cond ((getf vendor :food-vendor-p) food-vendors)
                          (t vendors))
         do (format file
                    "~2%\\subsubsection{~A} { \\small ~A } "
                    (@ (getf vendor :booth-name))
                    (@ (getf vendor :description))))
      (format vendors "~2% \\subsection{Other Vendors:} ~2%\\indent ")
      (loop for vendor in (remove-if (rcurry #'getf :description)
                                     (remove-if-not
                                      (lambda (vendor)
                                        (or (mapcar (curry #'getf vendor)
                                                    '(:slip-1 :slip-2 :slip-3))))
                                      *vendors*))
         for file = (cond ((getf vendor :food-vendor-p) food-vendors)
                          (t vendors))
         when (getf vendor :booth-name)
         do (format file
                    "~3% $ \\bullet $ ~A "
                    (@ (getf vendor :booth-name))))
      (format vendors "~2%"))))

(defun print-grid/html ()
  (with-open-file (*html-grid* "Grid.html" :direction :output :if-exists :supersede)
    (print-preamble/html "Schedule Grid" :stream *html-grid*)
    (loop for day in '(:wed :thu :fri :sat :sun) do (print-schedule day))
    (print-red-tent-insert)
    (print-closing/html :stream *html-grid*)))

(defvar *http-acceptor* nil)

#+oldserver
(defun kill-server-for-restart (force-restart-p)
  (when *http-acceptor*
    (if (or force-restart-p (yes-or-no-p "Existing HTTP listener exists: ~S~%Terminate it first? " *http-acceptor*))
        (unwind-protect (hunchentoot:stop *http-acceptor*))
        (cerror "Try to continue" "Existing HTTP acceptor not terminated"))
    (setf *http-acceptor* nil)))

#+oldserver
(defun start-hunchentoot (&key (port 80) force-restart-p)
  (kill-server-for-restart force-restart-p)
  (setf *http-acceptor* (make-instance 'hunchentoot:easy-acceptor
                                       :port port
                                       :document-root *default-pathname-defaults*
                                       :name "FPG Herald"))
  (hunchentoot:start *http-acceptor*))

#+oldserver
(defun start-server (&key (port 80))
  (format t "~|~2% ☿ Good Morning. Starting up Herald server. ☿")
  (format t "~2% ☿ Loading static data files for baseline…")
  (load-files)
  (format t "~2% ☠ Running schedule for all days… ")
  (print-grid/html)
  (print-presenter-bios/html)
  (print-vendors-row)
  (print-vendors)
  (format t "~2% ☿ Starting web server process…")
  (start-hunchentoot :port port))

(defun prep-mails-to-presenters ()
  (load-files)
  (format t "~2% ☠ Generating eMail for presenters… ")
  (print-presenter-mails)
  (format t "~2% ☠☠☠ Done ☠☠☠~|"))

(defun prep-mails-to-vendors ()
  (load-files)
  (format t "~2% ☠ Generating eMail for vendors… ")
  (print-vendor-mails)
  (format t "~2% ☠☠☠ Done ☠☠☠~|"))

(defun print-event/html (event-id)
  (let ((details (event-by-name event-id)))
    (print-preamble/html (getf details :name))
    (print-event-details/html details)
    (print-closing/html)))

(defun find-event-day-time-place (day time venue)
  (loop for ev in (all-events)
     when (and (eql (getf ev :day) day)
               (eql (getf ev :time) time)
               (eql (getf ev :location) venue))
     return ev))

(defun reschedule-event (event day time venue)
  (let ((old-day (getf event :day)))
    (let ((scheduled (find-event-day-time-place day time venue)))
      (unless (null scheduled)
        (error "Can't schedule ~A for ~A at ~A in ~A, ~A is scheduled then & there."
               (car event) day time venue (getf scheduled :name))))
    (setf (getf event :day) day
          (getf event :time) time
          (getf event :location) venue)
    (print-daily-events/html day)
    (unless (eql day old-day)
      (print-daily-events/html old-day))
    (print-event/html event)))

(defun test/round-trip-files ()
  (load-files :from-csv-p t)
  (let ((presenters *presenters*)
        (schedule *schedule*)
        (vendors *vendors*)
        (whiteboard *whiteboard*)
        (events (all-events)))
    (save-files)
    (load-files :from-csv-p nil)
    (assert (equalp presenters *presenters*))
    (assert (equalp schedule *schedule*))
    (assert (equalp vendors *vendors*))
    (assert (equalp whiteboard *whiteboard*))
    (assert (equalp events (all-events)))))

#+oldserver
(defun authorizedp ()
  (multiple-value-bind (user password) (hunchentoot:authorization)
    (or (and (equal user "sage") (equal password "victory"))
        (and (equal user "brp") (equal password "qapla"))
        (and (equal user "mystral") (equal password "winner"))
        (and (equal user "office") (equal password "whatever")))))

#+oldserver
(hunchentoot:define-easy-handler (test :uri "/test")
    ((thing :parameter-type 'keyword))
  (error "~&Foo. ~S" thing))

(defgeneric perform-edit (type id fast-keyword))

(defmethod perform-edit ((type t) id fast-keyword)
  (error "No handler to edit objects of type: ~S" type))

(defmacro progs (&body body)
  (let ((buf (gensym "BUFFER")))
    `(let ((,buf (make-array 0 :element-type 'character :fill-pointer t :initial-contents "")))
       (with-output-to-string (*standard-output* ,buf)
         ,@body
         ,buf))))

(defmacro define-edit-search (type-symbol type-name list name-function sort-key)
  `(defmethod perform-edit ((type (eql ,type-symbol)) (id null) fast-keyword)
     (progs
       (print-preamble/html ,(concatenate 'string "Edit: search for " type-name))
       (when fast-keyword
         (format t "<p><small> The keyword ~S will immediately be added to their Whiteboard. </small></p>"
                 fast-keyword))
       (princ "<ul>")
       (format t ,(concatenate 'string
                               "~{~%~{ <li><a href=\"edit?type="
                               (string-downcase (string type-symbol))
                               "&id=~A~@[&fast-keyword=~A~]\">~A</a></li> ~}~}")
               (mapcar (lambda (item)
                         (list (car item) fast-keyword (funcall ,name-function item)))
                       (sort-list ,list #'string< :key ,sort-key)))
       (princ "</ul>")
       (print-closing/html))))

(define-edit-search :presenter "workshop presenter" *presenters*
                    (lambda (who)
                      (format nil "~A <br>(<small>~A</small>)"
                              (getf who :name)
                              (second who))) (rcurry #'getf :name))
(define-edit-search :location "workshop venue" 
  (mapcar #'car (subseq *schedule* 2)) #'identity #'identity)
(define-edit-search :vendor "vendor" *vendors* #'car #'car)
(define-edit-search :event "event" (all-events)
                    #1=(lambda (event) (or (second event) (getf event :name) (car event)))
                    #1#)

(defun prefix-equalp (a b)
  (let ((shorter (min (length a) (length b))))
    (if (zerop shorter)
        nil
        (equalp (subseq a 0 shorter) (subseq b 0 shorter)))))

(defun read-whiteboard (&rest match)
  (remove-if-not (curry #'prefix-equalp match) *whiteboard* :key #'car))

(defun next-whiteboard-sequence (match)
  (append match
          (cons (let ((match-length (length match)))
                  (1+ (reduce #'max 
                              (or (mapcar (compose #'car (rcurry #'subseq match-length))
                                          (remove-if-not (curry #'prefix-equalp match)
                                                         (mapcar #'car *whiteboard*)))
                                  (cons -1 nil)))))
                nil)))

(defun post-whiteboard (match note user)
  (push (cons (next-whiteboard-sequence match)
              (list note user (get-universal-time))) *whiteboard*))

(defun weekday-name (num) 
  (ecase num
    ((0 7) "Sunday")
    (1 "Monday")
    (2 "Tuesday")
    (3 "Wednesday")
    (4 "Thursday")
    (5 "Friday")
    (6 "Saturday")))

(defun month-name (num) 
  (ecase num
    (1 "January")
    (2 "February")
    (3 "March")
    (4 "April")
    (5 "May")
    (6 "June")
    (7 "July")
    (8 "August")
    (9 "September")
    (10 "October")
    (11 "November")
    (12 "December")))

(defun full-time-format (then-timestamp)
  (format-timestring
   nil then-timestamp :format 
   (list "On "
         (weekday-name (timestamp-day-of-week then-timestamp))
         " (the " (format nil "~:R" (timestamp-day then-timestamp)) " of "
         (month-name (timestamp-month then-timestamp)) "),"
         " at " :hour #\: :min #\: :sec)))

(defun friendly-timestamp (then-universal)
  (let ((now-universal (get-universal-time))
        (then-timestamp (universal-to-timestamp then-universal)))
    (cond
      ((> then-universal now-universal)
       (concatenate 'string "In the future; " (full-time-format then-timestamp)))
      ((> then-universal (- now-universal (* 60 60 12)))
       (let ((day (ecase (timestamp-hour then-timestamp)
                    ((0 1 2 3) "In the wee hours, at ")
                    ((4 5 6) "Before dawn this morning, at ")
                    ((7 8 9 10 11) "This morning at ")
                    (12 "Just after noon today, at ")
                    ((13 14 15 16 17) "This afternoon, at ")
                    ((18 19 20 21 22 23) "This evening, at "))))
         (format-timestring
          nil then-timestamp :format (list day :hour #\: :min #\: :sec))))
      ((= (timestamp-day then-timestamp)
          (mod (1- (timestamp-day
                    (universal-to-timestamp now-universal))) 30))
       (format-timestring 
        nil then-timestamp :format
        (list (format nil "Yesterday (~A) at "
                      (weekday-name (timestamp-day-of-week then-timestamp)))3
                      :hour #\: :min #\: :sec)))
      (t (full-time-format then-timestamp)))))

(defun whiteboard->html (post)
  (format nil "<div class=\"whiteboard-post\">~A
<span class=\"whiteboard-author\">~A</span>
<span class=\"whiteboard-timestamp\">~A</span></div>"
          (second post) (third post)
          (friendly-timestamp (fourth post))))

(defgeneric edit-for-field (type field value))
(defmethod  edit-for-field ((type t) (field t) value)
  (declare (ignore type))
  (format t "~%<dt><label for=\"~A~:*\">~:(~A~):</label></dt><dd><input name=\"~:*~A\" value=\"~A\"></dd>" field value))

(defmethod edit-for-field ((type (eql :presenter)) (field (eql :headlinerp)) value)
  (format t "~%<dt>~:(~A~):</dt><dd><select size=1 name=\"~:*~A\">" field)
  (loop for tag  in '(nil #\Y #\!)
     for display in '("normal presenter/performer" "headliner" "featured headliner")
     do (format t "~% <option~@[~* selected~] value=\"~A\">~A</option>" (equalp (princ-to-string tag)
                                                                                (princ-to-string value)) tag display))
  (princ "</select></dd>"))

(defmethod edit-for-field ((type (eql :event)) (field (eql :day)) value)
  (format t "~%<dt>~:(~A~):</dt><dd><select size=1 name=\"~:*~A\">" field)
  (loop for day in '("Wed" "Thu" "Fri" "Sat" "Sun")
     do (format t "~% <option~@[~* selected~]>~A</option>" (string-equal day value) day))
  (princ "</select></dd>"))

(defmethod edit-for-field ((type (eql :event)) (field (eql :ages)) value)
  (format t "~%<dt>~:(~A~):</dt><dd><select size=1 name=\"~:*~A\">" field)
  (loop for ages in '(:* :21+ :adult :teen :teen+ :+ :<12)
     do (format t "~% <option~@[~* selected~] value=\"~A\">~A</option>"
                (string-equal ages value) ages (interpret-age ages)))
  (princ "</select></dd>"))

(defmethod edit-for-field ((type (eql :event)) (field (eql :location)) value)
  (format t "~%<dt>~:(~A~):</dt><dd><select size=1 name=\"~:*~A\">" field)
  (loop for slot in (remove-duplicates 
                     (sort-list (append (list "☽ on the moon")
                                        (remove-if #'null 
                                                   (mapcar #'car (subseq *schedule* 2))))
                                #'string<)
                     :test #'string-equal)
     do (format t "~% <option~@[~* selected~]>~A</option>" (string-equal slot value) slot))
  (princ "</select></dd>"))

(defmethod edit-for-field ((type (eql :event)) (field (eql :time-slot)) value)
  (format t "~%<dt>~:(~A~):</dt><dd><select size=1 name=\"~:*~A\">" field)
  (loop for slot in (remove-duplicates (sort-list (remove-if-not #'time-key (cdr (second *schedule*)))
                                                  #'< :key #'time-key)
                                       :test #'string-equal)
     do (format t "~% <option~@[~* selected~]>~A</option>" (string-equal slot value) slot))
  (princ "</select></dd>"))

(defun text-field-edit (field value)
  (format t "~%<dt>~A</dt><dd><textarea rows=\"~:D\" cols=\"40\">~A</textarea></dd>"
          field (min 6 (max 3 (count #\Newline value) (/ (length value) 40))) value))

(defmacro define-text-fields (type (&rest fields))
  `(progn ,@(loop for field in fields collecting
                 `(defmethod edit-for-field ((type (eql ,type)) (field (eql ,field)) value)
                    (text-field-edit ,field value)))))

(defun boolean-field-edit (field value)
  (format t "~%<dt><label><input type=checkbox ~@[~*checked~] value=t name=\"~A\"> ~:(~:*~A~)</label></dt>"
          value field))

(defmacro define-boolean-fields (type (&rest fields))
  `(progn ,@(loop for field in fields collecting
                 `(defmethod edit-for-field ((type (eql ,type)) (field (eql ,field)) value)
                    (boolean-field-edit ,field value)))))

(define-text-fields :event (:description :notes :presenter-needs))
(define-boolean-fields :event (:♂p :♀p))
(define-text-fields :presenter (:bio))
(define-boolean-fields :presenter (:confirmedp :musicalp :can-record-p))

#+oldserver
(defmacro establish-plist-editor (type-symbol type-name
                                  description record-find-function
                                  (&rest prefix-fields-list)
                                     (&rest minor-fields-list)
                                  &body commit-function)
  (let ((num-prefix (length prefix-fields-list)))
    `(defmethod perform-edit ((type (eql ,type-symbol)) (id string) fast-keyword)
       (progs
        (when (hunchentoot:post-parameter "-submit-")
          ,@commit-function)
        (when-let ((whiteboard (or (and fast-keyword (format nil "~S" fast-keyword))
                                   (and (hunchentoot:post-parameter "-whiteboard-")
                                        (hunchentoot:post-parameter "*whiteboard")))))
          (post-whiteboard (list ,type-symbol id)
                           whiteboard
                           (hunchentoot:authorization)))
        (if-let ((record (,record-find-function id)))

          (progn (print-preamble/html (format nil "Editing ~A ~A" ,type-name id))
                 (princ ,description)
                 (princ "<form method=\"POST\"><dl>")
                 (format t "~%<input type=\"hidden\" name=\"-id-\" value=\"~A\">" id)
                 (format t "~%<dt>~:(~A~):</dt><dd>~A</dd>" ',(car prefix-fields-list) (~@ (car record)))
                 (loop for prefix-field from 1 upto ,(1- num-prefix)
                    for prefix-field-name in ',(cdr prefix-fields-list)
                    do (edit-for-field ,type-symbol prefix-field-name (~@ (nth prefix-field record))))
                 (loop for (key value) on (nthcdr ,num-prefix record) by #'cddr
                    unless ,(if minor-fields-list
                                `(member key '(,@minor-fields-list))
                                'nil)
                    do (edit-for-field ,type-symbol key (~@ value)))
                 (princ "<hr>")
                 ,(when minor-fields-list
                        `(loop for (key value) on (nthcdr ,num-prefix record) by #'cddr
                            when (member key '(,@minor-fields-list))
                            do (edit-for-field ,type-symbol key (~@ value))))
                 (princ "</dl>")
                 (princ "<input type=\"reset\"><input type=\"submit\" name=\"-submit-\" value=\"Save Changes\"></form>")
                 (format t "~%<h3>Whiteboard</h3>~%<p>Leave notes here. Keywords beginning with : will be indexed for searches.
<small>Example: checking in sets the keyword <code>:CHECKIN</code> on the whiteboard.</small> </p>
<form method=\"POST\"><textarea name=\"*whiteboard\" rows=4></textarea>
<input type=\"hidden\" name=\"type\" value=\"~A\">
<input type=\"hidden\" name=\"id\" value=\"~A\">
<input type=\"submit\" name=\"-whiteboard-\" value=\"Post\"></form>~%<hr>~%~{~%~%~A~}"
                         ,type-symbol id
                         (mapcar #'whiteboard->html
                                 (read-whiteboard ,type-symbol id)))
                 (format t "~%<hr><nav><a href=\"edit?type=~A\">All <br><small>(~A)</small></a>"
                         ,type-symbol ,type-name)
                 (print-closing/html))

          (error "No object found with type ~S and ID ~S" ,type-symbol id))))))

(establish-plist-editor :presenter "workshop presenter"
                        "<p>Workshop presenters, headliners, and musical guests have their
biographical information stored here.</p>" presenter-by-name
(code-name mundane-name) ()

(error "I didn't write a COMMIT function yet ☠"))

#+oldserver
(establish-plist-editor :vendor "vendor"
                        "<p>vendors…</p>" vendor-by-name
                        (booth-name blurb) (:address :address-2 :city :state :zip-code
                                                     :registered :reg-fee :type-admission
                                                     :cabin-fee :cabin-number :rv-space :meal-plan
                                                     :tshirt-fee :tote-bags
                                                     :water-bottle :fpg*mugs
                                                     :scholarship-donations :paid-check-or-cash-reg-fee
                                                     :paid-check-or-cash-vendor-fee
                                                     :paid-pay-pal-reg-fee :paid-pay-pal-vendor-fee
                                                     :due-on-site :vendor-foo)

                        (error "I didn't write a COMMIT function yet ☠"))

#+oldserver
(establish-plist-editor :event "event"
                        "<p>event…</p>" event-by-name
                        (event-name thingie) (:requested :submitted)
                        
                        (let ((index (position (hunchentoot:post-parameter "-id-") (all-events)
                                               :key #'car :test #'string-equal)))
                          (assert index)
                          (setf (nth index (all-events))
                                (append (list (hunchentoot:post-parameter "-id-")
                                              (hunchentoot:post-parameter "THINGIE"))
                                        (mapcan (lambda (pair) (list (intern (car pair) :keyword)
                                                                     (cdr pair)))
                                                (remove-if (rcurry #'member '("-id-" "THINGIE" "-submit-")
                                                                   :test #'equal)
                                                           (hunchentoot:post-parameters hunchentoot:*request*)
                                                           :key #'car)))))
                        (print-grid/html))

#+oldserver
(establish-plist-editor :presenter "workshop presenter"
                        "<p>Workshop presenters, headliners, and musical guests have their
biographical information stored here.</p>" presenter-by-name
(code-name mundane-name) ()

(error "I didn't write a COMMIT function yet ☠"))

#+oldserver
(defmethod perform-edit ((type (eql :clock)) (id null) (fast-keyword null))
  (declare (ignore id fast-keyword))
  (progs (print-preamble/html "Set Clock")
         (when (hunchentoot:post-parameter "-submit-")
           (let ((hhmm (hunchentoot:post-parameter "hhmm"))
                 (yyyymmdd (hunchentoot:post-parameter "yyyymmdd")))
             (format t "~%<div> You want me to set date ~A time ~A </div>" yyyymmdd hhmm)))
         (let ((now (universal-to-timestamp (get-universal-time))))
           (format t "<div> <big> ~2,'0D:~2,'0D </big> <br> ~A, the ~:D° ~A, ~:D </div>
~0@*
<form method=\"POST\">
Set Time: <input name=\"hhmm\" value=\"~2,'0D~2,'0D\" style=\"width:5em\">
Date: <input name=\"yyyymmdd\" value=\"~5@*~4,'0D-~2,'0D-~3@*~2,'0D\" style=\"width:10em\">
<input type=\"submit\" name=\"-submit-\" value=\"Set Clock\"></form> "

                   (timestamp-hour now)
                   (timestamp-minute now)
                   (weekday-name (timestamp-day-of-week now))
                   (timestamp-day now)
                   (month-name (timestamp-month now))
                   (timestamp-year now)
                   (timestamp-month now)))
         (print-closing/html)))

#+oldserver
(hunchentoot:define-easy-handler (edit :uri "/edit")
    ((type :parameter-type 'keyword)
     (id :parameter-type 'string)
     (fast-keyword :parameter-type 'string))
  (unless (authorizedp)
    (hunchentoot:require-authorization "Herald"))
  (perform-edit type id fast-keyword))

#+oldserver
(setf hunchentoot:*show-lisp-errors-p* t)
#+oldserver
(setf hunchentoot:*show-lisp-backtraces-p* t)


(defvar *access-permissions* nil)
(defvar *access-user* nil)

(defun field->slot (field-name &key &allow-other-keys)
  (list field-name))

(defun permission-p (required)
  (etypecase required
    (cons (cond ((eql (car required) 'or)
                 (reduce #'logior
                         (mapcar 
                          (rcurry #'member *access-permissions*)
                          (cdr required))))
                ((eql (car required) 'and)
                 (every (rcurry #'member *access-permissions*)
                        (cdr required)))
                ((symbolp (car required)) (member required *access-permissions*))
                (t (error "Unknown permission type: ~A" required))))))

(defun field-accessors (class
                    field-name &key (read-by :others) 
                                 (write-by (or :owner :adm))
                                 check-type
                                 validate
                                 &allow-other-keys)
  `(progn
     (defgeneric ,field-name (object))
     (defgeneric (setf ,field-name) (value object))
     (defmethod ,field-name ((object ,class))
       (unless (permission-p ,read-by)
         (error 'access-denied :target (,class ,field-name)
                :access :read))
       (slot-value object `',field-name))
     (defmethod (setf ,field-name) (value (object ,class))
       ,(when check-type
              (typecase check-type
                (cons `(check-type value ,@check-type))
                (t `(check-type value ,check-type))))
       (unless (permission-p ,write-by)
         (error 'access-denied :target (,class ,field-name)
                :access :write))
       ,(when validate
              `(assert 
               ,(etypecase validate
                           (symbol `(funcall (function ',validate) value)))
               (value) "Validation of the ~A field ~:(~A~) failed"
               (or (and (consp check-type) (car check-type)) 
                   check-type
                   "general")
               field-name))
       (setf (slot-value object `',field-name)))))

(defmacro define-record (name (&rest attributes) &body fields)
  (declare (ignore attributes))
  `(progn
     (defclass ,name (data-record)
       (,@(mapcar (curry #'apply #'field->slot) fields)))
     ,@(mapcar (curry #'apply #'field-accessors `',name) fields)))

(defun title-case-properly (string)
  (cl-ppcre:regex-replace-all 
   "\\'S"
   (cl-ppcre:regex-replace-all 
    " (To|The|By|With|Of|A|An|And|Or|For) " (string-capitalize string)
    (lambda (target-string start end match-start match-end reg-starts reg-ends)
      (declare (ignore start end reg-starts reg-ends))
      (string-downcase (subseq target-string match-start match-end))))
   "'s"))

(defun insert-includes (in-file out-file)
  (let* ((include "#include")
         (length-include (length include)))
    (with-input-from-file (in in-file)
      (with-output-to-file (out out-file :if-exists :supersede)
        (loop for line = (read-line in nil)
           for in-line from 1
           for trim-line = (and line (string-trim " " line))
           while line
           do (if (and (> (length trim-line) length-include)
                       (string-equal include trim-line :end2 length-include))
                  (let* ((other-file-name (read-from-string (subseq trim-line (1+ length-include))))
                         (other-file (make-pathname :defaults out-file
                                                    :name other-file-name
                                                    :type nil)))
                    (if (probe-file other-file)
                        (write-string (read-file-into-string other-file) out)
                        (error "Inclusion failed: Can't find ~a~%Include at ~a line ~:d, while generating ~a"
                               other-file in-file in-line out-file)))
                  (progn (write-string line out)
                         (terpri out))))))))

(defun copy-templates ()
  (uiop:run-program (format nil "cp ~~/Projects/Herald/insert-*.tex ~~/Projects/Herald/Announcements-???.tex  ~
 ~~/Projects/Herald/bw-cover.pdf ~~/Projects/Herald/map.pdf ~
 ~~/Projects/Herald/*.{png,jpeg,ttf,woff,css,html,eps} '~a'"
                            (festival-work-dir))))

(defun latex-render (tex-file)
  (unwind-protect 
       (tagbody tex-again
          (restart-case
              (block keep-on-texing
                (format t "~& … Rendering LaTｅΧ file ~a" tex-file)
                (loop repeat 5
                   do (multiple-value-bind (output error status)
                          (uiop:run-program (format nil "cd '~a'; xelatex '~a'"
                                                    (make-pathname :directory (pathname-directory tex-file))
                                                    (pathname-name tex-file)) 
                                            :ignore-error-status t 
                                            :output :string
                                            :error-output :string)
                        (declare (ignorable error))
                        (when (zerop status) (return-from keep-on-texing t))
                        (when (search (coerce #(#\newline #\!) 'string) output)
                          (cerror "Ignore and continue" "XeLaTｅΧ output contains errors"))
                        #+ (or)
                        (format *error-output*
                                "~& → XeLaTｅΧ ~a returned ~d; re-running…~%~{~%  (out) ~a~}~%~{~%  (err) ~a~}~2%"
                                tex-file
                                status
                                (split-sequence #\newline output)
                                (split-sequence #\newline error))
                        (finish-output *error-output*))))
            (show-log ()
              :report "Show the log in Emacs"
              :test (lambda (c) (declare (ignore c))
                            (ignore-errors (swank:connection-info)))
              (swank:ed-in-emacs (make-pathname :defaults tex-file
                                                :type "log"))
              (go tex-again))))
    (dolist (ext '("out" "aux" "toc"))
      (let ((file (make-pathname :defaults tex-file :type ext)))
        (when (probe-file file)
          (delete-file file))))))

(defun pdf-info (pdf-file)
  (alist-plist
   (mapcar (lambda (pair)
             (cons (make-keyword  
                    (string-upcase (substitute #\- #\space (string-trim " " (car pair)))))
                   (let ((value (string-trim " " (format nil "~{~a~^:~}" (cdr pair)))))
                     (if (and (plusp (length value))
                              (every #'digit-char-p value))
                         (parse-integer value)
                         value))))
           (mapcar (curry #'split-sequence #\:)
                   (split-sequence #\Newline
                                   (uiop:run-program (format nil "pdfinfo '~a' | grep :" pdf-file) :output :string))))))

(defun pdf-page-count (pdf-file)
  (getf (pdf-info pdf-file) :pages))

(defun round-up (number &optional (divisor 1))
  (multiple-value-bind (quotient remainder)
      (floor number divisor)
    (if (plusp remainder)
        (1+ quotient)
        quotient)))

(defun make-signatures (pdf-file out-file)
  (uiop:run-program (format nil "pdfjam --booklet true --landscape --signatures ~d --outfile '~a' -- '~a' "
                            (round-up (pdf-page-count pdf-file) 4)
                            out-file pdf-file)))

(define-constant +templates+
    '(:handbook "~/Projects/Herald/handbook-inserts-little.tex"
      :grids "~/Projects/Herald/grids-inserts.tex")
  :test #'equalp)

(defun render-book (template-name &optional output-suffix)
  (if (keywordp template-name)
      (render-book (getf +templates+ template-name)
                   (string-capitalize (symbol-name template-name)))
      (tagbody do-over
         (format t "~& ☠ Rendering ~a" output-suffix)
         (restart-case
             (let ((book-name (make-pathname :defaults (festival-work-dir)
                                             :name (concatenate 'string (current-festival) 
                                                                " " output-suffix)
                                             :type "tex")))
               (insert-includes template-name book-name)
               (latex-render book-name)
               #+ (or)
               (make-signatures (make-pathname :defaults book-name :type "pdf")
                                (make-pathname :name (concatenate 'string (pathname-name book-name)
                                                                  " Signatures")
                                               :type "pdf")))
           (do-over ()
             :report "Try running it again"
             (go do-over))))))

(defun string-starts-with (needle haystack)
  (let ((length (length needle)))
    (and (<= length (length haystack))
         (string-equal needle haystack :end2 length))))

(defun render-all ()
  (lparallel:pmapcar #'latex-render
                     (remove-if-not
                      (lambda (path)
                        (or (string-starts-with "Vendor:" (pathname-name path))
                            (string-starts-with "Presenter:" (pathname-name path))
                            (string-starts-with "Headlining Presenter:" (pathname-name path))
                            (string-starts-with "Musical Guest:" (pathname-name path))
                            (string-starts-with "Venue:" (pathname-name path))))
                      (directory (make-pathname :defaults (festival-work-dir)
                                                :name :wild :type "tex"))))
  (render-book :handbook)
  (render-book :grids)
  #+ (or)  (render-book "~/Projects/Herald/handbook-kids-inserts.tex" "Kids Handbook"))

(defun print-festinfo-file ()
  (with-output-to-file (out "festinfo.tex" :if-exists :supersede)
    (format out "
\\def\\festseason{~:(~a~)}
\\def\\festyear{~a}
"
            *season* *year*)))




(defun run (&key
              ((:season *season*) (guess-season)) 
              ((:year *year*) (guess-year))
              (download-files-p :auto))
  (let ((*default-pathname-defaults* (festival-work-dir)))
    (format t "~&~|~2% ☠ Herald preparing the ~:(~a~) ~d festival …" *season* *year*)
    (copy-templates)
    (when (eql t download-files-p)
      (download-files))
    (load-files)
    (format t "~2% ☠ Running schedule for all days… ")
    (print-grid/html)
    (print-festinfo-file)
    (print-location-face-sheets)
    (print-venue-sheets)
    (print-presenter-face-sheets)
    (print-presenter-bios)
    (print-presenter-bios/html)
    (print-vendors-row)
    (print-vendor-face-sheets)
    (print-vendors)
    (render-all)
    (format t "~2% ☠☠☠ Done ☠☠☠~|")))

