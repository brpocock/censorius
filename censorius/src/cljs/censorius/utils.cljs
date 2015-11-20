(ns censorius.utils
  (:require
   [clojure.data :as data]
   [clojure.string :as string]
   [goog.string :as gstring] 
   [goog.string.format :as format]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [reagent.core :as reagent :refer [atom]]))


;;; utility functions for javascript

(defn gensymreally [string]
  (if (and string
           (string? string)
           (not (string/blank? string)))
    (gensym (string/replace (string/replace string #"[^A-Za-z0-9]+" "-")
                            "-" "_"))
    (gensym "G")))

(defn log10 [x] (/ (js/Math.log x) (.-LN10 js/Math)))

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
                 (try 
                   (pr-str thing)
                   (catch :default e
                     (str "#<unprintable, due to " e ">")))))))
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

(defn just-decimal [string]
  (cond (string? string)
        (apply str (filter (fn [char]
                             (or (some +digit-chars+ char)
                                 (= \. char)))
                           (str string)))
        (number? string)
        string))

(defn just-digits? [string]
  (every? +digit-chars+ string))

(defn just-digits++ [string]
  (let [digits (apply str (filter +digit-chars+ string))]
    (if (= \+ (first string))
      (str \+ digits)
      digits)))

(def +fl-zip-codes+
  #{32003 32004 32006 32007 32008 32009 32011 32013 32024 32025 32026 32030 32033 32034 32035 32038 32040 32041 32042
    32043 32044 32046 32050 32052 32053 32054 32055 32056 32058 32059 32060 32061 32062 32063 32064 32065 32066 32067
    32068 32071 32072 32073 32079 32080 32081 32082 32083 32084 32085 32086 32087 32091 32092 32094 32095 32096 32097
    32099 32102 32105 32110 32111 32112 32113 32114 32115 32116 32117 32118 32119 32120 32121 32122 32123 32124 32125
    32126 32127 32128 32129 32130 32131 32132 32133 32134 32135 32136 32137 32138 32139 32140 32141 32142 32145 32147
    32148 32149 32157 32158 32159 32160 32162 32164 32168 32169 32170 32173 32174 32175 32176 32177 32178 32179 32180
    32181 32182 32183 32185 32187 32189 32190 32192 32193 32195 32198 32201 32202 32203 32204 32205 32206 32207 32208
    32209 32210 32211 32212 32214 32215 32216 32217 32218 32219 32220 32221 32222 32223 32224 32225 32226 32227 32228
    32229 32230 32231 32232 32233 32234 32235 32236 32237 32238 32239 32240 32241 32244 32245 32246 32247 32250 32254
    32255 32256 32257 32258 32259 32260 32266 32267 32277 32290 32301 32302 32303 32304 32305 32306 32307 32308 32309
    32310 32311 32312 32313 32314 32315 32316 32317 32318 32320 32321 32322 32323 32324 32326 32327 32328 32329 32330
    32331 32332 32333 32334 32335 32336 32337 32340 32341 32343 32344 32345 32346 32347 32348 32350 32351 32352 32353
    32355 32356 32357 32358 32359 32360 32361 32362 32395 32399 32401 32402 32403 32404 32405 32406 32407 32408 32409
    32410 32411 32412 32413 32417 32420 32421 32422 32423 32424 32425 32426 32427 32428 32430 32431 32432 32433 32434
    32435 32437 32438 32439 32440 32442 32443 32444 32445 32446 32447 32448 32449 32452 32454 32455 32456 32457 32459
    32460 32461 32462 32463 32464 32465 32466 32501 32502 32503 32504 32505 32506 32507 32508 32509 32511 32512 32513
    32514 32516 32520 32521 32522 32523 32524 32526 32530 32531 32533 32534 32535 32536 32537 32538 32539 32540 32541
    32542 32544 32547 32548 32549 32550 32559 32560 32561 32562 32563 32564 32565 32566 32567 32568 32569 32570 32571
    32572 32577 32578 32579 32580 32583 32588 32590 32591 32592 32601 32602 32603 32604 32605 32606 32607 32608 32609
    32610 32611 32612 32613 32614 32615 32616 32617 32618 32619 32621 32622 32625 32626 32627 32628 32631 32633 32634
    32635 32639 32640 32641 32643 32644 32648 32653 32654 32655 32656 32658 32662 32663 32664 32666 32667 32668 32669
    32680 32681 32683 32686 32692 32693 32694 32696 32697 32701 32702 32703 32704 32706 32707 32708 32709 32710 32712
    32713 32714 32715 32716 32718 32719 32720 32721 32722 32723 32724 32725 32726 32727 32728 32730 32732 32733 32735
    32736 32738 32739 32744 32745 32746 32747 32750 32751 32752 32753 32754 32756 32757 32759 32762 32763 32764 32765
    32766 32767 32768 32771 32772 32773 32774 32775 32776 32777 32778 32779 32780 32781 32782 32783 32784 32789 32790
    32791 32792 32793 32794 32795 32796 32798 32799 32801 32802 32803 32804 32805 32806 32807 32808 32809 32810 32811
    32812 32814 32815 32816 32817 32818 32819 32820 32821 32822 32824 32825 32826 32827 32828 32829 32830 32831 32832
    32833 32834 32835 32836 32837 32839 32853 32854 32855 32856 32857 32858 32859 32860 32861 32862 32867 32868 32869
    32872 32877 32878 32885 32886 32887 32890 32891 32893 32896 32897 32898 32899 32901 32902 32903 32904 32905 32906
    32907 32908 32909 32910 32911 32912 32919 32920 32922 32923 32924 32925 32926 32927 32931 32932 32934 32935 32936
    32937 32940 32941 32948 32949 32950 32951 32952 32953 32954 32955 32956 32957 32958 32959 32960 32961 32962 32963
    32964 32965 32966 32967 32968 32969 32970 32971 32976 32978 33001 33002 33004 33008 33009 33010 33011 33012 33013
    33014 33015 33016 33017 33018 33019 33020 33021 33022 33023 33024 33025 33026 33027 33028 33029 33030 33031 33032
    33033 33034 33035 33036 33037 33039 33040 33041 33042 33043 33045 33050 33051 33052 33054 33055 33056 33060 33061
    33062 33063 33064 33065 33066 33067 33068 33069 33070 33071 33072 33073 33074 33075 33076 33077 33081 33082 33083
    33084 33090 33092 33093 33097 33101 33102 33107 33109 33110 33111 33112 33114 33116 33119 33121 33122 33124
    33125 33126 33127 33128 33129 33130 33131 33132 33133 33134 33135 33136 33137 33138 33139 33140 33141 33142 33143
    33144 33145 33146 33147 33148 33149 33150 33151 33152 33153 33154 33155 33156 33157 33158 33159 33160 33161 33162
    33163 33164 33165 33166 33167 33168 33169 33170 33172 33173 33174 33175 33176 33177 33178 33179 33180 33181 33182
    33183 33184 33185 33186 33187 33188 33189 33190 33193 33194 33195 33196 33197 33199 33231 33233 33234 33238 33239
    33242 33243 33245 33247 33255 33256 33257 33261 33265 33266 33269 33280 33283 33296 33299 33301 33302 33303 33304
    33305 33306 33307 33308 33309 33310 33311 33312 33313 33314 33315 33316 33317 33318 33319 33320 33321 33322 33323
    33324 33325 33326 33327 33328 33329 33330 33331 33332 33334 33335 33336 33337 33338 33339 33340 33345 33346 33348
    33349 33351 33355 33359 33388 33394 33401 33402 33403 33404 33405 33406 33407 33408 33409 33410 33411 33412 33413
    33414 33415 33416 33417 33418 33419 33420 33421 33422 33424 33425 33426 33427 33428 33429 33430 33431 33432 33433
    33434 33435 33436 33437 33438 33439 33440 33441 33442 33443 33444 33445 33446 33447 33448 33454 33455 33458 33459
    33460 33461 33462 33463 33464 33465 33466 33467 33468 33469 33470 33471 33474 33475 33476 33477 33478 33480 33481
    33482 33483 33484 33486 33487 33488 33493 33496 33497 33498 33499 33503 33508 33509 33510 33511 33513 33514 33521
    33523 33524 33525 33526 33527 33530 33534 33537 33538 33539 33540 33541 33542 33543 33544 33547 33548 33549 33550
    33556 33558 33559 33563 33564 33565 33566 33567 33568 33569 33570 33571 33572 33573 33574 33575 33576 33583 33584
    33585 33586 33587 33592 33593 33594 33595 33597 33598 33601 33602 33603 33604 33605 33606 33607 33608 33609 33610
    33611 33612 33613 33614 33615 33616 33617 33618 33619 33620 33621 33622 33623 33624 33625 33626 33629 33630 33631
    33633 33634 33635 33637 33647 33650 33651 33655 33660 33661 33662 33663 33664 33672 33673 33674 33675 33677 33679
    33680 33681 33682 33684 33685 33686 33687 33688 33689 33690 33694 33697 33701 33702 33703 33704 33705 33706 33707
    33708 33709 33710 33711 33712 33713 33714 33715 33716 33729 33730 33731 33732 33733 33734 33736 33737 33738 33740
    33741 33742 33743 33744 33747 33755 33756 33757 33758 33759 33760 33761 33762 33763 33764 33765 33766 33767 33769
    33770 33771 33772 33773 33774 33775 33776 33777 33778 33779 33780 33781 33782 33784 33785 33786 33801 33802 33803
    33804 33805 33806 33807 33809 33810 33811 33812 33813 33815 33820 33823 33825 33826 33827 33830 33831 33834 33835
    33836 33837 33838 33839 33840 33841 33843 33844 33845 33846 33847 33848 33849 33850 33851 33852 33853 33854 33855
    33856 33857 33858 33859 33860 33862 33863 33865 33867 33868 33870 33871 33872 33873 33875 33876 33877 33880 33881
    33882 33883 33884 33885 33888 33890 33896 33897 33898 33901 33902 33903 33904 33905 33906 33907 33908 33909 33910
    33911 33912 33913 33914 33915 33916 33917 33918 33919 33920 33921 33922 33924 33927 33928 33930 33931 33932 33935
    33936 33938 33944 33945 33946 33947 33948 33949 33950 33951 33952 33953 33954 33955 33956 33957 33960 33965 33966
    33967 33970 33971 33972 33975 33980 33981 33982 33983 33990 33991 33993 33994 34101 34102 34103 34104 34105 34106
    34107 34108 34109 34110 34112 34113 34114 34116 34117 34119 34120 34133 34134 34135 34136 34137 34138 34139 34140
    34141 34142 34143 34145 34146 34201 34202 34203 34204 34205 34206 34207 34208 34209 34210 34211 34212 34215 34216
    34217 34218 34219 34220 34221 34222 34223 34224 34228 34229 34230 34231 34232 34233 34234 34235 34236 34237 34238
    34239 34240 34241 34242 34243 34250 34251 34260 34264 34265 34266 34267 34268 34269 34270 34272 34274 34275 34276
    34277 34278 34280 34281 34282 34284 34285 34286 34287 34288 34289 34292 34293 34295 34420 34421 34423 34428 34429
    34430 34431 34432 34433 34434 34436 34442 34445 34446 34447 34448 34449 34450 34451 34452 34453 34460 34461 34464
    34465 34470 34471 34472 34473 34474 34475 34476 34477 34478 34479 34480 34481 34482 34483 34484 34487 34488 34489
    34491 34492 34498 34601 34602 34603 34604 34605 34606 34607 34608 34609 34610 34611 34613 34614 34636 34637 34638
    34639 34652 34653 34654 34655 34656 34660 34661 34667 34668 34669 34673 34674 34677 34679 34680 34681 34682 34683
    34684 34685 34688 34689 34690 34691 34692 34695 34697 34698 34705 34711 34712 34713 34714 34715 34729 34731 34734
    34736 34737 34739 34740 34741 34742 34743 34744 34745 34746 34747 34748 34749 34753 34755 34756 34758 34759 34760
    34761 34762 34769 34770 34771 34772 34773 34777 34778 34785 34786 34787 34788 34789 34797 34945 34946 34947 34948
    34949 34950 34951 34952 34953 34954 34956 34957 34958 34972 34973 34974 34979 34981 34982 34983 34984 34985 34986
    34987 34988 34990 34991 34992 34994 34995 34996 34997})

(defn fl-zip-code? [string]
  (and (just-digits? string)
       (some +fl-zip-codes+ (js/parseInt string) )))

(defn just-number [string]
  (str (js/parseInt (just-digits string))))

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
    (log "Format phone number " number " ⇒ " formatted)
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
   (when-not (and singular plural (pos? (count singular)) (pos? (count plural)) (number? number))
     (js/console.warn (str "Counting bug, " number "×" singular "(" plural ")")))
   (let [singular (or (and (pos? (count singular)) singular) "thingie")
         plural (or (and (pos? (count plural)) plural) "thingies")]
     (cond
       (not (number? number)) (str "¿? " plural)
       (> 0 number) (str "Negative " (counting (- number) singular plural))
       (zero? number) (str "No " plural)
       (= 1 number) (str "One " singular)
       (and (integer? number)
            (> 13 number)) (str (nth +numbers+ number) " " plural)
       true (str number " " plural)))))

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
      (and (number? n) (js/Math.round n))
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
    (let [amount (if (#{\¢ \c} (last (.trim amount)))
                   (/ (just-decimal amount) 100.0)
                   (just-decimal amount))]
      (format-money (js/parseFloat amount)))
    
    (cond
      (integer? amount)
      (str "$ " amount ".")
      
      (> 1 amount)
      (str (* 100 amount) " ¢")
      
      (zero? amount)
      nil
      
      true
      (str "$ " (.toFixed amount 2)))))

(defn money? [string]
  (if-let [[_ pennies] (re-matches #"(\d+)\s*¢" string)]
    (/ (js/parseInt pennies) 100)
    (or (js/parseFloat (just-decimal string))
        (let [[_ amount] (re-matches #"\$?\s*(\d*\.\d*)" string)]
          (money? amount)))))

(defn keyword->string [keyword]
  (cond
    (string? keyword) keyword
    (keyword? keyword) (let [s (str keyword)] 
                         (.substring s 1))
    true (str keyword)))


(defn hidden [^boolean is-hidden]
  (if is-hidden
    {:display "none"}
    {}))

(defn alert-hint [event]
  (js/alert (.getAttribute (.-target event) "title")))

(defn abbr
  ([short long]
   [:abbr {:title long :on-click #(js/alert (str short ": " long))}
    short
    [:span {:class "ellide hint"}
     " " long]])
  ([short long longer]
   [:abbr {:title long :on-click #(js/alert (str short " (" long "): " longer))}
    short
    [:span {:class "ellide hint"}
     " " long]]))

