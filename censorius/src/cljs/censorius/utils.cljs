(ns censorius.utils
  (:require
   ;;[ajax.core :refer [GET POST]]
   [clojure.data :as data]
   [clojure.string :as string]
   [goog.string :as gstring] 
   [goog.string.format :as format]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   ))


;;; utility functions for javascript

(defn gensymreally [string]
  (if (and string
           (string? string)
           (not (string/blank? string)))
    (gensym (string/replace (string/replace string #"[^A-Za-z0-9]+" "-")
                            "-" "_"))
    (gensym "G")))

(defn stringerific [thing]
  (let [naïve (str thing)]
    (if (= "[object Object]" naïve)
      (try 
        (js/JSON.stringify thing nil 4)
        (catch js/TypeError e
          (try (apply str (map (fn [[key value]]
                                 (str key " ← " value ";  ")) 
                            (js->clj thing :keywordize-keys true)))
               (catch :default e
                 thing))))
      naïve)))

(defn log [& stuff]
  (js/console.log (apply str (map stringerific stuff))))

(defn unique-key [prefix]
  (str (gensym prefix)))

(defn now []
  (js/Date.))

;;; Generic utility functions

(defn no-spaces [word]
  (string/replace word #"\s+" ""))

(defn format-email [address]
  (let [parts (string/split (no-spaces address) #"@")]
    (if (= 2 (count parts))
      (str (first parts) "@" (string/lower-case (last parts)))
      (no-spaces address))))

(def +digit-chars+ #{\0 \1 \2 \3 \4 \5 \6 \7 \8 \9})

(defn just-digits [string]
  (apply str (filter +digit-chars+ string)))

(defn just-digits++ [string]
  (let [digits (apply str (filter +digit-chars+ string))]
    (if (= \+ (first string))
      (str \+ digits)
      digits)))

(defn just-number [string]
  (str (.parseInt (just-digits string))))

(defn just-digits? [string]
  (= string (just-digits string)))

(def +uk-4+5+ #{"204" "208" "254" "276" "297" "298" "363" "364" "384" "386"
                "404" "420" "460" "461" "480" "488" "524" "527" "562" "566"
                "606" "629" "635" "647" "659" "695"
                "726" "744" "750" "768" "827" "837" "884" 
                "900" "905" "935" "946" "949" "963" "995"})

(def +uk-5+5+ #{"3873" "5242" "5394" "5395" "5396"
                "6973" "6974" "6977" "7683" "7684" "7687" "9467"})

(defn format-phone [number]
  (let [formatted
        (let [digits (apply str (just-digits number))
              length (count digits)]
          (cond 
            
            (and (> length 4)
                 (= \+ (first number))
                 (= "353" (.substring digits 0 3)))
            (str "+353 " (cond (< length 10)
                               (.substring digits 3 length)
                               
                               (< length 12)
                               (str (.substring digits 3 5) " " (.substring digits 5 length))
                               
                               (and (= \0 (nth digits 3))
                                    (= \1 (nth digits 4)))
                               (str "(01) " (.substring digits 5 8) " "
                                    (.substring digits 8 length))
                               
                               (and (= \0 (nth digits 3))
                                    (or (#{\2 \5 \6 \7} (nth digits 4))
                                        (and (= \4 (nth digits 4))
                                             (not (#{\0 \8} (nth digits 5)))))
                                    (or (not= \8 (nth digits 4))
                                        (not= \5 (nth digits 6))))
                               (str "(" (.substring digits 3 6) ") "
                                    
                                    (.substring digits 6 9) " " (.substring digits 9 length))
                               
                               (and (= \0 (nth digits 3))
                                    (= \8 (nth digits 4))
                                    (= \5 (nth digits 6)))
                               (str "📲 (" (.substring digits 3 6) ") 5 "
                                    (.substring digits 7 10) " " (.substring digits 10 length))
                               
                               (and (= \0 (nth digits 3))
                                    (= \8 (nth digits 4)))
                               (str "📱 (" (.substring digits 3 6) ") "
                                    (.substring digits 6 9) " " (.substring digits 9 length))
                               
                               (and (= \0 (nth digits 3))
                                    (= \4 (nth digits 4)))
                               (str "(" (.substring digits 3 7) ") "
                                    (.substring digits 7 10) " " (.substring digits 10 length))
                               
                               true
                               (.substring digits 3 length)))
            
            (and (> length 3)
                 (= \+ (first number))
                 (= \4 (nth digits 0) (nth digits 1)))
            (str "+44 " (cond (< length 12)
                              (.substring digits 2 length)
                              
                              (not= \0 (nth digits 2)) 
                              (.substring digits 2 length)
                              
                              (and (= \1 (nth digits 3))
                                   (not (or (= \1 (nth digits 4))
                                            (= \1 (nth digits 5)))))
                              (str "(" (.substring digits 2 7) ") " (.substring digits 7 length))
                              
                              (and (= \1 (nth digits 3))
                                   (or (= \1 (nth digits 4))
                                       (= \1 (nth digits 5))))
                              (str "(" (.substring digits 2 6) ") " (.substring digits 6 9)
                                   " " (.substring digits 9 length))
                              
                              (and (= \2 (nth digits 3)))
                              (str "(" (.substring digits 2 5) ") " (.substring digits 5 9)
                                   " " (.substring digits 9 length))
                              
                              (and (= \1 (nth digits 3))
                                   (+uk-5+5+ (.substring digits 4 7)))
                              (str "(" (.substring digits 2 7) ") " 
                                   (.substring digits 7 length))
                              
                              (and (= \7 (nth digits 3))
                                   (or (#{\4 \5 \7 \8 \9} (nth digits 4))
                                       (= "624" (.substring digits 4 7))))
                              (str "📱 " (.substring digits 2 7) " " (.substring digits 7 length))
                              
                              (= "70" (.substring digits 3 5))
                              (str "💁 "(.substring digits 2 5) " " (.substring digits 5 9)
                                   " " (.substring digits 9 length))
                              
                              (= "76" (.substring digits 3 5))
                              (str "📟 "(.substring digits 2 5) " " (.substring digits 5 9)
                                   " " (.substring digits 9 length))
                              
                              (= \3 (nth digits 3))
                              (str (.substring digits 2 6)
                                   " " (.substring digits 6 9)
                                   " " (.substring digits 9 length))
                              
                              (and (= \5 (nth digits 3))
                                   (= \0 (nth digits 4) (nth digits 5)))
                              (str "0500 " (.substring digits 6 length))
                              
                              (and (= \8 (nth digits 3))
                                   (= \0 (nth digits 4) (nth digits 5))
                                   (< length 13))
                              (str (.substring digits 2 6) " " (.substring digits 6 length))
                              
                              (and (= \8 (nth digits 3))
                                   (= \0 (nth digits 4))
                                   (#{\0 \8} (nth digits 5)))
                              (str (.substring digits 2 6) " " (.substring digits 6 9)
                                   " " (.substring digits 9 length))
                              
                              (and (= \8 (nth digits 3))
                                   (#{\2 \4 \7} (nth digits 4)))
                              (str (.substring digits 2 6) " " (.substring digits 6 9)
                                   " " (.substring digits 9 length))
                              
                              (= \5 (nth digits 3))
                              (str (.substring digits 2 5)
                                   " " (.substring digits 5 9)
                                   " " (.substring digits 9 length))
                              
                              true
                              (.substring digits 2 length)))
            
            (and (= \+ (first number))
                 (not= \1 (first digits))) number
                 
                 (= \1 (first digits)) (str "+1 " (format-phone (rest digits)))
                 
                 (< length 7) digits
                 (< length 10) (str (.substring digits 0 (- length 4)) 
                                    "-" 
                                    (.substring digits (- length 4) length))
                 (= length 10) (str "("
                                    (.substring digits 0 3)
                                    ") "
                                    (.substring digits 3 6)
                                    "-" 
                                    (.substring digits 6 10))
                 true (str "("
                           (.substring digits 0 3)
                           ") "
                           (.substring digits 3 6)
                           "-" 
                           (.substring digits 6 10)
                           " x"
                           (.substring digits 10 length))))]
    #_ (log "Format phone number " number " ⇒ " formatted)
    formatted))

(defn no-op [& any]
  (log "Ignoring: " any))

(def area-code-cache {})

(defn mkfun-area-code-reply [code]
  (fn [reply]
    (let [response (js->clj (.getResponseJson (.-target reply))
                            :keywordize-keys true)]
      (if (= "success" (:status response))
        (doseq [{:keys [area-code state]} (:area-codes response)]
          (swap! area-code-cache assoc area-code 
                 (not= "" state)))
        (do
          (log "Error response from area codes API for code " code ": “"
               (:error-message response) "”")
          (swap! area-code-cache assoc code false))))))

;; (defn check-area-code-allareacodes-dot-com [code]
;;   (if-let [result (get area-code-cache code)]
;;     result
;;     (GET "http://www.allareacodes.com/api/1.0/api.json"
;;          {:params {:tracking-email "brpocock+areacodetest@mcna.net" 
;;                    :tracking_url "http://mcna.net" 
;;                    :npa code}
;;           :handler (mkfun-area-code-reply code)
;;           :error-handler no-op
;;           :timeout 200})))


;;; periodically may need to update from 
;;; http://www.nanpa.com/enas/geoAreaCodeNumberReport.do
(def all-nanpa-area-codes 
  (set (map str 
         #{201 202 203 204 205 206 207 208 209 
           210 212 213 214 215 216 217 218 219 
           224 225 226 228 229 231 234 236 239
           240 242 246 248 249 250 251 252 253 254 256 
           260 262 264 267 268 269 270 272 276
           281 284 289 
           301 302 303 304 305 306 307 308 309
           310 312 313 314 315 316 317 318 319
           320 321 323 325 330 331 334 336 337 339
           340 343 345 346 347 351 352 360 361 364 365 385 386
           401 402 403 404 405 406 407 408 409
           410 412 413 414 415 416 417 418 419 423 424 425
           430 431 432 434 435 437 438 440 441 442 443 450 458 469
           470 473 475 478 479 480 484
           501 502 503 504 505 506 507 508 509 
           510 512 513 514 515 516 517 518 519
           520 530 531 534 539 540 541 551 559 561 562 563 567
           570 571 573 574 575 579 580 581 585 586 587
           601 602 603 604 605 606 607 608 609
           610 612 613 614 615 616 617 618 619
           620 623 626 630 631 636 639 641 646 647 649 650 651 657
           660 661 662 664 667 669 670 671 678 
           681 682 684 701 702 703 704 705 706 707 708 709
           712 713 714 715 716 717 718 719 720 721 724 725 727
           731 732 734 737 740 747 754 757 758
           760 762 763 765 767 769 770 772 773 774 775 778 779 
           780 781 782 784 785 786 787 
           801 802 803 804 805 806 807 808 809
           810 812 813 814 815 816 817 818 819 828 829
           830 831 832 843 845 847 848 849
           850 856 857 858 859 860 862 863 864 865 867 868 869
           870 872 873 876 878 901 902 903 904 905 906 907 908 909
           910 912 913 914 915 916 917 918 919 920 925 928 929
           931 936 937 938 939 940 941 947 949
           951 952 954 956 959 970 971 972 973 978 979 980 984 985 989})))

(defn phone-number? [number]
  (let [validp 
        (let [digits (just-digits number)
              length (count digits)]
          (cond 
            
            ;; Valid Irish numbers
            (and (> length 4)
                 (= \+ (first number))
                 (= "353" (.substring digits 0 3)))
            (and (= \0 (nth digits 3))
                 (or (and (= length 12)
                          (= \1 (nth digits 4)))
                     (and (= length 14)
                          (= \5 (nth digits 6))
                          (= \8 (nth digits 4)))
                     (and (= length 13)
                          (or (#{\2 \5 \6 \7 \8} (nth digits 4))
                              (and (= \4 (nth digits 4))
                                   (not (#{\0 \8} (nth digits 5))))))
                     (and (= length 14)
                          (= \4 (nth digits 4)))))
            
            ;; Valid UK numbers
            (and (> length 3)
                 (= \+ (first number))
                 (= \4 (nth digits 0) (nth digits 1)))
            (and (= \0 (nth digits 2))
                 (or (and (= length 12)
                          (or (= "800" (.substring digits 3 6))
                              (#{+uk-4+5+} (.substring digits 4 7))))
                     (= length 13))
                 (or (= 13 length)
                     (and (= 12 length)
                          (= \1 (nth digits 3))
                          ;; some geographical area codes still allow 10-digit
                          ;; numbers. We could actually check the following
                          ;; digits to determine whether 10- or 11-digit
                          ;; numbers are expected, but for our purposes,
                          ;; merely accepting that the number can still be 10
                          ;; digits is probably sufficient.
                          (+uk-4+5+ (.substring digits 4 6))))
                 (= \0 (nth digits 2))
                 (or (#{\1 \2 \7} (nth digits 3))
                     (and (= \3 (nth digits 3))
                          (#{\0 \3 \4 \7} (nth digits 4)))
                     (and (= \5 (nth digits 3))
                          (#{\5 \6} (nth digits 4)))
                     (and (= \8 (nth digits 3))
                          (#{\0 \2 \4 \7} (nth digits 4)))))
            
            ;; Some other country … let's hope it's OK.
            (and (= \+ (first number))
                 (not= \1 (first digits))) 
            nil ;;; good enough, for now.
            
            ;; US/NANPA numbers with explicit +1 or 1 leading
            (= \1 (first digits))
            (phone-number? (.substring digits 1 (count digits)))
            
            ;; US/NANPA number without explicit +1 (default)
            true
            (or (and (not= \+ (first number)) 
                     (or (= length 10)
                         (>= 15 length 13))
                     ;; area code and exchange can't begin with 0 nor 1.
                     (not (#{\0 \1} (first digits)))
                     (not (#{\0 \1} (nth digits 3)))
                     (not (= \1 (second digits) (nth digits 2)))
                     (not (#{"456" "555" "666" "900" "999"}
                           (.substring digits 0 3)))
                     (not (= "555" (.substring digits 3 6)))
                     (or (and (= \8 (first digits))
                              (#{\5 \6 \7 \8 \0} (second digits))
                              (= (second digits) (nth digits 2)))
                         (contains? all-nanpa-area-codes
                                    (.substring digits 0 3))))
                false)))]
    ;; (log " “" number "” ∈ phone-number ? " validp)
    validp))

(defn email? [address]
  (or (and address
           (string? address)
           (re-matches 
                   ;; Mostly RFC-5322 compliant, but requires a DNS host name and
                   ;; doesn't do whitespace folding or quoted local-parts.
                   #"^[-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+$"
                   address)
           (not (re-matches #"@example\.com$" address))
           true)
      false))

(defn a-name? [word]
  (or (= word "Ng")
      (some #{\A \E \I \O \U \Y} (string/upper-case word))
      true))

(defn name-like? [s] 
  (and (> (count s) 5)
       (some a-name? (string/split s #"\s+"))
       (some #{\space} (string/trim s))))

(defn name-case [string]
  (let [trailing-space? (= " " (last string))
        joined (string/join " " (map #(if (or (= % (string/lower-case %))
                                              (and (= % (string/upper-case %))
                                                   (some #{\A \E \I \O \U \Y} %)))
                                        (string/capitalize %)
                                        %) 
                                  (string/split string #"\s+")))]
    (if trailing-space?
      (str joined " ")
      joined)))

(def +numbers+
  ["Zero" "One" "Two" "Three" "Four" "Five" "Six"
   "Seven" "Eight" "Nine" "Ten" "Eleven" "Twelve"])

(defn counting
  ([number singular]
   (counting number singular (str (if (= \y (last singular))
                                    (str (subs singular 0 (- (count singular) 1)) "ie")
                                    singular) "s")))
  ([number singular plural]
   (cond
     (> 0 number) (str "Negative " (counting (- number) singular plural))
     (zero? number) (str "No " plural)
     (= 1 number) (str "One " singular)
     (and (integer? number)
          (> 13 number)) (str (nth +numbers+ number) " " plural)
          true (str number " " plural))))

(assert (= (counting 4 "dog") "Four dogs"))
(assert (= (counting 0 "pony") "No ponies"))

;;; Date/time utility functions

(defn biz-day? [date]
  (#{1 2 3 4 5} (apply (.getWeekday date) date)))

(defn make-time-friendly [time]
  "TODO"
  "Some time")

(defn next-biz-day [date]
  (if (not (biz-day? date))
    (next-biz-day (.setDate date (+ 1 (.getDate date))))))

(defn parse-time-string [time-string]
  (and time-string
       (string? time-string)
       (let [[_ hours minutes seconds msec am-pm] 
                        (re-matches
                         #"([01]?\d)(?:\:(\d\d))?(?:\:(\d\d))?(?:\.(\d\d\d))? *([aApP][mM]?)?" 
                         time-string)
                        pm? (#{\p \P} (first am-pm))]
                    (when (or (not (string/blank? am-pm))
                              (not (string/blank? minutes)))
                      (log "Time-string parts = " hours ":" minutes ":" seconds "." msec " " am-pm)
                      (js/Date. 2000 1 1 (+ hours (if pm? 12 0))
                                (or minutes 0) (or seconds 0) (or msec 0))))))

(defn format-time-of-day [time-string]
  (let [canonical (parse-time-string time-string)]
    (if (and canonical (pos? (.getTime canonical)))
      (do (log "time-string " time-string " parses to " canonical)
          (let [hh (.getHours canonical)
                modulo (mod hh 12)
                twelve-hours (if (zero? modulo) 
                               12
                               modulo)
                pm? (> hh 11)]
            (log "hours of that are = " hh "; which is " twelve-hours (if pm? "PM" "AM"))
            (str (gstring/format "%d:%02d" twelve-hours (.getMinutes canonical))
                 (let [sec (.getSeconds canonical)
                       ms (.getMilliseconds canonical)]
                   (cond
                     (and (zero? sec) (zero? ms)) ""
                     (zero? ms) (gstring/format ":%02d" sec)
                     true (gstring/format ":%02d.03d" sec ms)))
                 " "
                 (if pm? "PM" "AM"))))
      (do
        (log "Can't parse time-string: " time-string "; got " canonical)
        time-string))))

(defn time-of-day? [time-string]
  (let [canonical (parse-time-string time-string)]
    (and canonical (pos? (.getTime canonical)))))

(defn format-zip-code [code]
  (let [digits (just-digits code)]
    (cond
      (= 5 (count digits)) digits
      (= 9 (count digits)) (str (.substring digits 0 5) "-" (.substring digits 5 10))
      true code)))

;;; http://pe.usps.gov/text/LabelingLists/L002.htm
;;;cat zip-002 | perl\d\d)/) { print "\"$2\" \"$1\"\n" }' | sort | uniq | perl -e 'while (<>) { chomp; if (0 == ($. % 5)) { print "\n\t" } print "$_, " }' > zip-002.tab

;; hand fixup on 662 as a special case
(def +zip-states+
  {"005" "NY", "006" "PR", "007" "PR", "008" "PR", 
   "009" "PR", "010" "CT", "011" "CT", "012" "CT", "013" "MA", 
   "014" "MA", "015" "MA", "016" "MA", "017" "MA", "018" "MA", 
   "019" "MA", "020" "MA", "021" "MA", "022" "MA", "023" "MA", 
   "024" "MA", "025" "RI", "026" "RI", "027" "RI", "028" "RI", 
   "029" "RI", "030" "NH", "031" "NH", "032" "NH", "033" "NH", 
   "034" "NH", "035" "VT", "036" "VT", "037" "VT", "038" "NH", 
   "039" "ME", "040" "ME", "041" "ME", "042" "ME", "043" "ME", 
   "044" "ME", "045" "ME", "046" "ME", "047" "ME", "048" "ME", 
   "049" "ME", "050" "VT", "051" "VT", "052" "VT", "053" "VT", 
   "054" "VT", "055" "MA", "056" "VT", "057" "VT", "058" "VT", 
   "059" "VT", "060" "CT", "061" "CT", "062" "CT", "063" "CT", 
   "064" "CT", "065" "CT", "066" "NY", "067" "CT", "068" "NY", 
   "069" "NY", "070" "NJ", "071" "NJ", "072" "NJ", "073" "NJ", 
   "074" "NJ", "075" "NJ", "076" "NJ", "077" "NJ", "078" "NJ", 
   "079" "NJ", "080" "NJ", "081" "NJ", "082" "NJ", "083" "NJ", 
   "084" "NJ", "085" "NJ", "086" "NJ", "087" "NJ", "088" "NJ", 
   "089" "NJ", "090" "AE", "091" "AE", "092" "AE", "093" "AE", 
   "094" "AE", "095" "AE", "096" "AE", "097" "AE", "098" "AE", 
   "100" "NY", "101" "NY", "102" "NY", "103" "NY", "104" "NY", 
   "105" "NY", "106" "NY", "107" "NY", "108" "NY", "109" "NY", 
   "110" "NY", "111" "NY", "112" "NY", "113" "NY", "114" "NY", 
   "115" "NY", "116" "NY", "117" "NY", "118" "NY", "119" "NY", 
   "120" "NY", "121" "NY", "122" "NY", "123" "NY", "124" "NY", 
   "125" "NY", "126" "NY", "127" "NY", "128" "NY", "129" "NY", 
   "130" "NY", "131" "NY", "132" "NY", "133" "NY", "134" "NY", 
   "135" "NY", "136" "NY", "137" "NY", "138" "NY", "139" "NY", 
   "140" "NY", "141" "NY", "142" "NY", "143" "NY", "144" "NY", 
   "145" "NY", "146" "NY", "147" "NY", "148" "NY", "149" "NY", 
   "150" "PA", "151" "PA", "152" "PA", "153" "PA", "154" "PA", 
   "155" "PA", "156" "PA", "157" "PA", "158" "PA", "159" "PA", 
   "160" "PA", "161" "PA", "162" "PA", "163" "PA", "164" "PA", 
   "165" "PA", "166" "PA", "167" "PA", "168" "PA", "169" "PA", 
   "170" "PA", "171" "PA", "172" "PA", "173" "PA", "174" "PA", 
   "175" "PA", "176" "PA", "177" "PA", "178" "PA", "179" "PA", 
   "180" "PA", "181" "PA", "182" "PA", "183" "PA", "184" "PA", 
   "185" "PA", "186" "PA", "187" "PA", "188" "PA", "189" "PA", 
   "190" "PA", "191" "PA", "192" "PA", "193" "DE", "194" "PA", 
   "195" "PA", "196" "PA", "197" "DE", "198" "DE", "199" "DE", 
   "200" "DC", "201" "VA", "202" "DC", "203" "DC", "204" "DC", 
   "205" "DC", "206" "MD", "207" "MD", "208" "MD", "209" "MD", 
   "210" "MD", "211" "MD", "212" "MD", "214" "MD", "215" "MD", 
   "216" "MD", "217" "MD", "218" "MD", "219" "MD", "220" "VA", 
   "221" "VA", "222" "VA", "223" "VA", "224" "VA", "225" "VA", 
   "226" "VA", "227" "VA", "228" "VA", "229" "VA", "230" "VA", 
   "231" "VA", "232" "VA", "233" "VA", "234" "VA", "235" "VA", 
   "236" "VA", "237" "VA", "238" "VA", "239" "VA", "240" "VA", 
   "241" "VA", "242" "TN", "243" "VA", "244" "VA", "245" "VA", 
   "246" "WV", "247" "WV", "248" "WV", "249" "WV", "250" "WV", 
   "251" "WV", "252" "WV", "253" "WV", "254" "MD", "255" "WV", 
   "256" "WV", "257" "WV", "258" "WV", "259" "WV", "260" "PA", 
   "261" "WV", "262" "WV", "263" "WV", "264" "WV", "265" "PA", 
   "266" "WV", "267" "MD", "268" "VA", "270" "NC", "271" "NC", 
   "272" "NC", "273" "NC", "274" "NC", "275" "NC", "276" "NC", 
   "277" "NC", "278" "NC", "279" "NC", "280" "NC", "281" "NC", 
   "282" "NC", "283" "NC", "284" "NC", "285" "NC", "286" "NC", 
   "287" "NC", "288" "NC", "289" "NC", "290" "SC", "291" "SC", 
   "292" "SC", "293" "SC", "294" "SC", "295" "SC", "296" "SC", 
   "297" "NC", "298" "GA", "299" "SC", "300" "GA", "301" "GA", 
   "302" "GA", "303" "GA", "304" "GA", "305" "GA", "306" "GA", 
   "307" "TN", "308" "GA", "309" "GA", "310" "GA", "311" "GA", 
   "312" "GA", "313" "FL", "314" "FL", "315" "FL", "316" "FL", 
   "317" "FL", "318" "GA", "319" "GA", "320" "FL", "321" "FL", 
   "322" "FL", "323" "FL", "324" "FL", "325" "FL", "326" "FL", 
   "327" "FL", "328" "FL", "329" "FL", "330" "FL", "331" "FL", 
   "332" "FL", "333" "FL", "334" "FL", "335" "FL", "336" "FL", 
   "337" "FL", "338" "FL", "339" "FL", "340" "AA", "341" "FL", 
   "342" "FL", "344" "FL", "346" "FL", "347" "FL", "349" "FL", 
   "350" "AL", "351" "AL", "352" "AL", "354" "AL", "355" "AL", 
   "356" "AL", "357" "AL", "358" "AL", "359" "AL", "360" "AL", 
   "361" "AL", "362" "AL", "363" "AL", "364" "AL", "365" "AL", 
   "366" "AL", "367" "AL", "368" "AL", "369" "MS", "370" "TN", 
   "371" "TN", "372" "TN", "373" "TN", "374" "TN", "375" "TN", 
   "376" "TN", "377" "TN", "378" "TN", "379" "TN", "380" "TN", 
   "381" "TN", "382" "TN", "383" "TN", "384" "TN", "385" "TN", 
   "386" "TN", "387" "MS", "388" "TN", "389" "MS", "390" "MS", 
   "391" "MS", "392" "MS", "393" "MS", "394" "MS", "395" "MS", 
   "396" "MS", "397" "MS", "398" "FL", "399" "GA", "400" "KY", 
   "401" "KY", "402" "KY", "403" "KY", "404" "KY", "405" "KY", 
   "406" "KY", "407" "TN", "408" "TN", "409" "TN", "410" "OH", 
   "411" "WV", "412" "WV", "413" "KY", "414" "KY", "415" "WV", 
   "416" "WV", "417" "TN", "418" "TN", "420" "KY", "421" "TN", 
   "422" "TN", "423" "IN", "424" "IN", "425" "TN", "426" "TN", 
   "427" "KY", "430" "OH", "431" "OH", "432" "OH", "433" "OH", 
   "434" "OH", "435" "OH", "436" "OH", "437" "OH", "438" "OH", 
   "439" "PA", "440" "OH", "441" "OH", "442" "OH", "443" "OH", 
   "444" "OH", "445" "OH", "446" "OH", "447" "OH", "448" "OH", 
   "449" "OH", "450" "OH", "451" "OH", "452" "OH", "453" "OH", 
   "454" "OH", "455" "OH", "456" "OH", "457" "OH", "458" "OH", 
   "459" "OH", "460" "IN", "461" "IN", "462" "IN", "463" "IN", 
   "464" "IN", "465" "IN", "466" "IN", "467" "IN", "468" "IN", 
   "469" "IN", "470" "OH", "471" "KY", "472" "IN", "473" "IN", 
   "474" "IN", "475" "IN", "476" "IN", "477" "IN", "478" "IN", 
   "479" "IN", "480" "MI", "481" "MI", "482" "MI", "483" "MI", 
   "484" "MI", "485" "MI", "486" "MI", "487" "MI", "488" "MI", 
   "489" "MI", "490" "MI", "491" "MI", "492" "MI", "493" "MI", 
   "494" "MI", "495" "MI", "496" "MI", "497" "MI", "498" "MI", 
   "499" "MI", "500" "IA", "501" "IA", "502" "IA", "503" "IA", 
   "504" "IA", "505" "IA", "506" "IA", "507" "IA", "508" "IA", 
   "509" "IA", "510" "SD", "511" "SD", "512" "SD", "513" "SD", 
   "514" "IA", "515" "NE", "516" "NE", "520" "IA", "521" "IA", 
   "522" "IA", "523" "IA", "524" "IA", "525" "IA", "526" "IL", 
   "527" "IL", "528" "IA", "530" "WI", "531" "WI", "532" "WI", 
   "534" "WI", "535" "WI", "537" "WI", "538" "WI", "539" "WI", 
   "540" "MN", "541" "WI", "542" "WI", "543" "WI", "544" "WI", 
   "545" "WI", "546" "WI", "547" "WI", "548" "WI", "549" "WI", 
   "550" "MN", "551" "MN", "553" "MN", "554" "MN", "555" "MN", 
   "556" "MN", "557" "MN", "558" "MN", "559" "MN", "560" "MN", 
   "561" "MN", "562" "MN", "563" "MN", "564" "MN", "565" "ND", 
   "566" "MN", "567" "ND", "570" "SD", "571" "SD", "572" "SD", 
   "573" "SD", "574" "SD", "575" "SD", "576" "ND", "577" "SD", 
   "580" "ND", "581" "ND", "582" "ND", "583" "ND", "584" "ND", 
   "585" "ND", "586" "ND", "587" "ND", "588" "ND", "590" "MT", 
   "591" "MT", "592" "MT", "593" "MT", "594" "MT", "595" "MT", 
   "596" "MT", "597" "MT", "598" "MT", "599" "MT", "600" "IL", 
   "601" "IL", "602" "IL", "603" "IL", "604" "IL", "605" "IL", 
   "606" "IL", "607" "IL", "608" "IL", "609" "IL", "610" "IL", 
   "611" "IL", "612" "IL", "613" "IL", "614" "IL", "615" "IL", 
   "616" "IL", "617" "IL", "618" "IL", "619" "IL", "620" "MO", 
   "622" "MO", "623" "IL", "624" "IL", "625" "IL", "626" "IL", 
   "627" "IL", "628" "MO", "629" "MO", "630" "MO", "631" "MO", 
   "633" "MO", "634" "MO", "635" "MO", "636" "MO", "637" "MO", 
   "638" "MO", "639" "MO", "640" "MO", "641" "MO", "644" "MO", 
   "645" "MO", "646" "MO", "647" "MO", "648" "MO", "649" "MO", 
   "650" "MO", "651" "MO", "652" "MO", "653" "MO", "654" "MO", 
   "655" "MO", "656" "MO", "657" "MO", "658" "MO", "660" "MO", 
   "661" "MO", "662" ["KS","MO"], "664" "MO", "665" "MO", 
   "666" "MO", "667" "MO", "668" "MO", "669" "KS", "670" "KS", 
   "671" "KS", "672" "KS", "673" "KS", "674" "KS", "675" "KS", 
   "676" "KS", "677" "NE", "678" "KS", "679" "TX", "680" "NE", 
   "681" "NE", "683" "NE", "684" "NE", "685" "NE", "686" "NE", 
   "687" "NE", "688" "NE", "689" "NE", "690" "NE", "691" "NE", 
   "692" "NE", "693" "NE", "700" "LA", "701" "LA", "703" "LA", 
   "704" "LA", "705" "LA", "706" "LA", "707" "LA", "708" "LA", 
   "710" "LA", "711" "LA", "712" "LA", "713" "LA", "714" "LA", 
   "716" "AR", "717" "AR", "718" "LA", "719" "AR", "720" "AR", 
   "721" "AR", "722" "AR", "723" "TN", "724" "TN", "725" "AR", 
   "726" "AR", "727" "AR", "728" "AR", "729" "AR", "730" "OK", 
   "731" "OK", "733" "TX", "734" "OK", "735" "OK", "736" "OK", 
   "737" "OK", "738" "OK", "739" "TX", "740" "OK", "741" "OK", 
   "743" "OK", "744" "OK", "745" "OK", "746" "OK", "747" "OK", 
   "748" "OK", "749" "OK", "750" "TX", "751" "TX", "752" "TX", 
   "753" "TX", "754" "TX", "755" "LA", "756" "LA", "757" "TX", 
   "758" "TX", "759" "TX", "760" "TX", "761" "TX", "762" "TX", 
   "763" "TX", "764" "TX", "765" "TX", "766" "TX", "767" "TX", 
   "768" "TX", "769" "TX", "770" "TX", "772" "TX", "773" "TX", 
   "774" "TX", "775" "TX", "776" "TX", "777" "TX", "778" "TX", 
   "779" "TX", "780" "TX", "781" "TX", "782" "TX", "783" "TX", 
   "784" "TX", "785" "TX", "786" "TX", "787" "TX", "788" "TX", 
   "789" "TX", "790" "TX", "791" "TX", "792" "TX", "793" "TX", 
   "794" "TX", "795" "TX", "796" "TX", "797" "TX", "798" "TX", 
   "799" "TX", "800" "CO", "801" "CO", "802" "CO", "803" "CO", 
   "804" "CO", "805" "CO", "806" "CO", "807" "CO", "808" "CO", 
   "809" "CO", "810" "CO", "811" "CO", "812" "CO", "813" "NM", 
   "814" "CO", "815" "CO", "816" "CO", "820" "WY", "821" "WY", 
   "822" "WY", "823" "WY", "824" "WY", "825" "WY", "826" "WY", 
   "827" "WY", "828" "WY", "829" "WY", "830" "WY", "831" "WY", 
   "832" "ID", "833" "ID", "834" "ID", "835" "WA", "836" "ID", 
   "837" "ID", "838" "WA", "840" "UT", "841" "UT", "842" "UT", 
   "843" "UT", "844" "UT", "845" "UT", "846" "UT", "847" "UT", 
   "850" "AZ", "851" "AZ", "852" "AZ", "853" "AZ", "855" "AZ", 
   "856" "AZ", "857" "AZ", "859" "AZ", "860" "AZ", "863" "AZ", 
   "864" "NV", "865" "NM", "870" "NM", "871" "NM", "873" "NM", 
   "874" "NM", "875" "NM", "876" "NM", "877" "NM", "878" "NM", 
   "879" "NM", "880" "TX", "881" "TX", "882" "TX", "883" "TX", 
   "884" "NM", "885" "TX", "889" "NV", "890" "NV", "891" "NV", 
   "893" "NV", "894" "NV", "895" "NV", "897" "NV", "898" "NV", 
   "900" "CA", "901" "CA", "902" "CA", "903" "CA", "904" "CA", 
   "905" "CA", "906" "CA", "907" "CA", "908" "CA", "910" "CA", 
   "911" "CA", "912" "CA", "913" "CA", "914" "CA", "915" "CA", 
   "916" "CA", "917" "CA", "918" "CA", "919" "CA", "920" "CA", 
   "921" "CA", "922" "CA", "923" "CA", "924" "CA", "925" "CA", 
   "926" "CA", "927" "CA", "928" "CA", "930" "CA", "931" "CA", 
   "932" "CA", "933" "CA", "934" "CA", "935" "CA", "936" "CA", 
   "937" "CA", "938" "CA", "939" "CA", "940" "CA", "941" "CA", 
   "942" "CA", "943" "CA", "944" "CA", "945" "CA", "946" "CA", 
   "947" "CA", "948" "CA", "949" "CA", "950" "CA", "951" "CA", 
   "952" "CA", "953" "CA", "954" "CA", "955" "CA", "956" "CA", 
   "957" "CA", "958" "CA", "959" "CA", "960" "CA", "961" "NV", 
   "962" "AP", "963" "AP", "964" "AP", "965" "AP", "966" "AP", 
   "967" "HI", "968" "HI", "969" "GU", "970" "OR", "971" "OR", 
   "972" "OR", "973" "OR", "974" "OR", "975" "OR", "976" "OR", 
   "977" "OR", "978" "OR", "979" "ID", "980" "WA", "981" "WA", 
   "982" "WA", "983" "WA", "984" "WA", "985" "WA", "986" "OR", 
   "988" "WA", "989" "WA", "990" "WA", "991" "WA", "992" "WA", 
   "993" "WA", "994" "WA", "995" "AK", "996" "AK", "997" "AK", 
   "998" "AK", "999" "AK", })



(defn zip-3-to-state [zip-3]
  (get +zip-states+ zip-3))

(defn zip-code? [code]
  (and (or (= 5
              (count code)
              (count (just-digits code)))
           
           (and (= 10 (count code))
                (= 9 (count (just-digits code)))
                (= \- (nth code 5)))
           
           (and (= 9
                   (count code)
                   (count (just-digits code)))))
       (get +zip-states+ (.substring code 0 3))))

(defn blank? [s]
  (and s (string? s) (pos? (count s))))

(defn to-integer [n]
  (or (and (integer? n) n)
      (and (string? n)
           (js/parseInt n))))

(defn reasonable-birth-year? [n]
  (< 1900 n (.getYear (js/Date.))))

(defn positions [pred coll]
  (keep-indexed (fn [idx x]
                  (when (pred x) idx))
                coll))

(defn format-money [amount]
  (if (string? amount)
    (let [[_ amount] (re-matches #"\$?\s*(\d*\.\d\d?)?" amount)]
      (format-money (.parseFloat amount)))
    
    (cond
     (integer? amount)
     (gstring/format "$ %d." amount)
     
     (< 1 amount)
     (gstring/format "$ %.02f" amount)
     
     (zero? amount)
     "$ 0"
     
     true
     (gstring/format "$ .%02f" amount))))

(defn money? [string]
  (or (.parseFloat string)
      (let [[_ amount] (re-matches #"\$?\s*(\d*\.\d*)" string)]
        (money? amount))))

(defn modality [function element]
  (let [docs (js/document.getElementsByTagName "html")
        doc (or (.item docs 0) (log "boo"))]
    (set! (.-onClick doc) (fn [event] 
                            (when function
                              (apply function event))))
    (set! (.-onClick element) (fn [event]
                                (set! (.-onClick doc) nil)
                                (.stopPropagation event))))
  element)

(defn keyword->string [keyword]
  (cond
    (string? keyword) keyword
    (keyword? keyword) (let [s (str keyword)] 
                         (.substring s 1 (count s)))
    true (str keyword)))



