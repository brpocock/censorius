(ns censorius.invoice
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]
   
   [censorius.data :as d]
   [censorius.guest :as guest]
   [censorius.guest-list :as guest-list]
   [censorius.herald :as herald]
   [censorius.merch :as merch]
   [censorius.staff :as staff]
   [censorius.text :as text]
   [censorius.utils :as util]
   [censorius.vendor :as vendor]
   [censorius.workshops :as workshops])
  (:import [goog History] [goog events]))



(defonce payments (reagent/atom []))

(defonce scholarships (reagent/atom {:php 0 :seva 0 :baiardi 0}))



(defn scholarship-donations-amount []
  (reduce + (map js/parseFloat (map util/just-decimal (vals @scholarships)))))


(defn total-due []
  (+ (guest-list/price-all-guests)
     (merch/price-all-merch)
     (vendor/price-vendor)
     (scholarship-donations-amount)
     (- (reduce + (map #(:amount @%) (filter #(pos? (:amount @%)) @payments))))))



(defn fix-?-p [field]
  (if (= "?" (.substring (name field) (- (count (name field)) 1)))
    (keyword (str (.substring (name field) 0 (- (count (name field)) 2)) 
                  (if (some #(= % \-) (name field)) "-p" "p")))
    field))

(defn keyword-field [atom field]
  (let [host-field (fix-?-p field)]
    (swap! atom assoc field (keyword (get @atom host-field)))))

(defn fix-up-keywords []
  (doseq [guest @guest-list/guests]
    (doseq [field [:sleep :eat :days :gender :ticket-type :t-shirt :coffee? :tote?]]
      (keyword-field guest field)))
  (doseq [item @merch/merch]
    (keyword-field item :id))
  #_(util/log "merch = " @merch/merch))

(defn remap-styles [value]
  (let [s (vec (map (fn [style] 
                      (reduce conj (map (fn [[k v]]
                                          {(keyword k) 
                                           (if (= "id" k) (keyword v) v)}) 
                                     style))) 
                 value))]
    #_(util/log "styles " s " ← " value)
    s))

(defn reload-array-from-host [a atom-id data]
  #_ (util/log " data form a sequence")
  (reset! a [])
  (doseq [row data] 
    (let [row-atom (atom {})]
      (doseq [[key value] (seq row)]
        #_ (util/log " — row by row — " (keyword key) " ← " value)
        (if (and (= atom-id "merch")
                 (= key "styles"))
          (swap! row-atom assoc :styles (remap-styles value))
          (swap! row-atom assoc (keyword key) value)))
      (swap! a conj row-atom)
      #_(util/log " row end…" @row-atom)))
  #_(util/log "atom end … " @a))

(defn reload-hash-from-host [a atom-id data]
  #_ (util/log " data are a hash-table")
  #_ (reset! a {})
  (doseq [[key value] (seq data)]
    #_ (util/log " — set " (keyword key) " ← " value)
    (swap! a assoc (keyword key) value))
  #_ (util/log "atom end … " @a))

(def +atom-tags+ {:general d/general
                  :guests guest-list/guests
                  :merch merch/merch
                  :vending vendor/vending
                  :workshops censorius.workshops/workshops
                  :scholarships scholarships
                  :payments payments})

(defn accept-recalled-data [document]
  #_(util/log " reply: " document)
  (swap! d/general assoc :invoice (get document "invoice"))
  (swap! d/general assoc :invoice-token (get document "invoice-token"))
  (doseq [[atom-id data] (seq document)]
    #_(util/log " copying atom id " (keyword atom-id) " ← " data)
    (let [a (get +atom-tags+ (keyword atom-id))]
      (if a (do #_(util/log " atom found for " atom-id )
                (if (#{"guests" "merch" "workshops" "payments"} atom-id)
                  (reload-array-from-host a atom-id data)
                  (reload-hash-from-host a atom-id data)))
          (util/log " no atom matching " atom-id))))
  (fix-up-keywords)
  #_(util/log "(done recalling data)")
  (swap! d/general assoc :waiver-signature (:signature @d/general))
  (if (:closed @d/general)
    (js/alert (str "Recalled Closed invoice # " (get document "invoice")
                   " — Please contact the Registration team if you need to make changes."))
    (js/alert (str "Recalled invoice # " (get document "invoice")
                   " — Please check your choices if you plan to re-submit after editing. In particular, staff member selections, and tote bags or coffee mugs ordered for each guest (in the guest list grid) are sometimes de-selected when you recall your invoice. (I am working on this bug after Thanksgiving; sorry!)"))))

(defn recall-invoice 
  ([invoice user-key admin-key]
   (when (number? invoice)
     (herald/send-data "recall" accept-recalled-data 
                       (let [keyring {:invoice (.toString invoice 36)
                                      :verify user-key}]
                         (if admin-key
                           (conj keyring {:admin-key admin-key})
                           keyring)))))
  ([invoice user-key]
   (when (number? invoice)
     (herald/send-data "recall" accept-recalled-data 
                       {:invoice (.toString invoice 36)
                        :verify user-key}))))



(defn submission-data []
  {:general (conj @d/general {:signature (:waiver-signature @d/general)
                              :festival-season (:season @d/festival)
                              :festival-year (:year @d/festival)})
   :guests (map #(conj @% { :payment-due (censorius.guest/price %)}) @guest-list/guests)
   :merch (flatten (map (fn [item]
                          (map (fn [style]
                                 {:item (:id @item)
                                  :style (:id style)
                                  :qty (:qty style)
                                  :price (:price @item)
                                  :subtotal (* (:qty style) (:price @item))})
                            (filter #(pos? (:qty %))
                                    (:styles @item))))
                     @merch/merch))
   :vendor (conj @vendor/vending { :payment-due (vendor/price-vendor) })
   ;; :workshops nil
   :scholarships (conj @scholarships { :payment-due (scholarship-donations-amount)})
   :money { :balance-due (total-due)
           :prior-payments (reduce + (map :amount @payments))}})

(defn after-pay [reply]
  (let [invoice (get reply "invoice")
        token (get reply "token")
        next-hop (get reply "next-hop")]
    #_ (js/alert (str "Response from server: " (util/stringerific reply)))
    (swap! d/general assoc :invoice invoice)
    (swap! d/general assoc :token token)
    (set! js/window.location next-hop)))

(defn try-check-out []
  (if true
    (censorius.herald/send-data "pay"
                                after-pay
                                (submission-data))
    (js/alert "Disabled while I check a bug report. Back shortly.")))

(defn after-save [reply]
  (let [invoice (get reply "invoice")
        token (get reply "token")]
    #_ (js/alert (str "Response from server: " (util/stringerific reply)))
    (js/alert (str "Invoice suspended (#" invoice ")

An eMail has been sent to the Registration staff to review your registration. You will receive an eMail from the system as well."))
    (swap! d/general assoc :invoice invoice)
    (swap! d/general assoc :token token)
    (if (< invoice 4160)
      (accept-recalled-data reply)
      (set! js/window.location "/news/"))))



(defn save-action []
  (cond (empty? (:note @d/general))
        (js/alert "Please supply a note for the Regsitration staff as to what needs to be done.

If your registration is being suspended, one of our Registration staff will contact you to make payment arrangements. Please note that some prices (admission tickets) are discounted when you pre-register. This discount will be removed if your registration is not paid.

Cabin and lodge bunks are first-come, first-serve at the time that you pay for your registration.")
        
        (guest-list/need-adult-email?)
        (js/alert "At least one adult's  eMail address must be supplied. Otherwise,  the   Registration  staff   will  not  be   able  to  contact you.")
        
        :ok 
        (censorius.herald/send-data "save" 
                                    after-save 
                                    (submission-data))))





(defn invoice-header []
  [:thead
   [:tr {:key "invoice-header"
         :style {:display (if (:invoice @d/general) "table-row" "none")}}
    [:th {:style {:border-bottom "2pt solid brown"}} "Invoice Number"]
    [:td {:style {:border-bottom "2pt solid brown"}} (str (:invoice @d/general))]]])

(defn guest-price-line [guest]
  [:li (util/format-money (guest/price guest)) 
   " for " 
   (or (:called-by @guest) (:given-name @guest))])

(defn invoice-guests-section []
  [:tr {:key "invoice-guests"
        :style {:display (if (pos? (count @guest-list/guests)) 
                           "table-row" "none")}} 
   [:th "Guests"] [:td (util/format-money (guest-list/price-all-guests))
                   (doall (for [guest @guest-list/guests]
                            ^{:key (str "guest-price-" (:given-name @guest) "-" (:surname @guest)) }
                            [guest-price-line guest]))]])

(defn invoice-merch-section []
  [:tr {:key "invoice-extras"
        :style {:display (if (pos? (merch/price-all-merch)) "table-row" "none")}}
   [:th "Extras"] [:td (util/format-money (merch/price-all-merch))]])

(defn invoice-vendor-section []
  [:tr {:key "invoice-vending"
        :style {:display (if (pos? (vendor/price-vendor)) "table-row" "none")}}
   [:th "Vending"] [:td (util/format-money (vendor/price-vendor))]])

(defn invoice-scholarships-section []
  [:tr {:key "invoice-scholarships"
        :style {:display (if (pos? (scholarship-donations-amount)) "table-row" "none")}} 
   [:th "Scholarships"] [:td (util/format-money (scholarship-donations-amount))]])

(defn display-payment [payment]
  [:li
   #_(util/log (str "payment: " @payment))
   [:span "A " (if (pos? (:amount @payment)) "payment (or credit)" "bill")
    " for the amount " [:strong (util/format-money (if (pos? (:amount @payment))
                                                     (:amount @payment)
                                                     (- (:amount @payment))))]
    " was issued using " (or (:source @payment) "(I don't know how)")
    ".  Reference code: " (or [:tt (:via @payment)] "(I don't know?)")
    (if (and (pos? (:amount @payment))
             (:note @payment)
             (pos? (count (:note @payment))))
      (str "  Payment note: " (:note @payment))
      "")]])

(defn invoice-payments-section []
  [:tr {:key "invoice-payments"
        :style {:display (if (pos? (count @payments)) "table-row" "none")}}
   [:th "Payments"] 
   [:td [:ul (doall (map display-payment @payments))]]])

(defn invoice-footer []
  [:tfoot
   [:tr {:key "invoice-total"} 
    [:th [:big " Balance Due: "]] 
    [:td [:big (util/format-money (total-due))]
     [:div {:style {:display (if (neg? (total-due)) "block" "none")}}
      [:p "Based upon the current selections, you are eligible for a credit."]
      [:p {:class "hint"} "You appear to have paid already for more than
      the  total due.  This  usually  means that  you  are editing  your
      itinerary, perhaps by removing members of your party."]
      [:p "If you want to make arrangements to carry forward this credit, or
to find out about TEG's refund policy, enter a note in the "
       [:strong "Notes or comments"]
       " box and " [:strong "Suspend"] " your registration."]]]]])

(defn check-out-invoice []
  @guest-list/guests @merch/merch @vendor/vending
  [:table {:style {:width "10em"}}
   [invoice-header]
   [:tbody
    [invoice-guests-section]
    [invoice-merch-section]
    [invoice-vendor-section]
    [invoice-scholarships-section]
    [invoice-payments-section]]
   [invoice-footer]])



(defn waiver-signed? []
  (some #(= % (:waiver-signature @d/general))
        (map guest/legal-name (filter guest/adult? @guest-list/guests))))

(defn listify [adults]
  (case (count adults)
    0 "(um, wait. add some names, first!)"
    1 (first adults)
    2 (str (first adults) " or " (second adults))
    (str (first adults) ", " (listify (rest adults)))))

(defn sign-fpg-waiver []
  [:div
   [:div {:style {:display (if (and (some guest/adult? @guest-list/guests)
                                    (waiver-signed?))
                             "block" "none")}}
    "✓ "
    [:a {:href "/news/release-waiver-and-indemnity-agreement/"} "Release, Waiver, and Indemnity Agreement"] " signed. "]
   [:div {:style {:display (if (and (some guest/adult? @guest-list/guests)
                                    (not (waiver-signed?)))
                             "block" "none")}}
    [:h2 "Sign the FPG Release"]
    
    [:h3 "Release, Waiver, and Indemnity Agreement"]
    
    "I am an adult  over 18 years of age and wish  to participate in the
    Florida Pagan Gathering (“EVENT”). In  addition, I give my children,
    if any,  permission to participate  in the  EVENT and I  assume full
    responsibility for the conduct and safety of my children."
    
    [:p "This  “Release, Waiver, and Indemnity  Agreement” (“AGREEMENT”)
    is for the purpose of promoting a safe and happy religious event and
    to  assure   that  continued  religious   events  may  be   held  in
    the future."]

    [:p "In  consideration for  my participation  and attendance  at the
    EVENT, I do hereby understand and hereby agree to the following:"]

    [:ol
     [:li  "I become  a member  of the  Temple of  Earth Gathering,  Inc.
    by registering and paying an entrance fee to attend the EVENT;"]

     [:li "I agree to RELEASE, WAIVE,  DISCHARGE AND COVENANT NOT TO SUE
           the  promoter(s); the  participant(s);  the  Temple of  Earth
           Gathering, Inc.,  its members,  its officers,  its employees,
           its volunteers; any of the  Temple of Earth Gathering, Inc.’s
           affiliates;    and,    owners     and    lessees    of    the
           premises (hereinafter the “RELEASEES”); "]

     [:li "I agree not to hold the RELEASEES liable to me; members of my
           family or  my guests;  my personal  representatives, assigns,
           heirs; and, next  of kin for any and all  loss or damage, and
           any claims  or demands therefore  on account of injury  to my
           person or my  property or resulting in my  death, arising out
           my attendance  and participation at the  EVENT whether caused
           by the negligence or otherwise of the RELEASEES;"]
     
     [:li "I understand  that there are dangerous  animals, insects, and
           plants  located   on  the  campgrounds,  including   a  lake.
           Attendance  at the  EVENT involves  a risk  of injury  and/or
           death and/or property damage. As such, I VOLUNTARILY AGREE TO
           ACCEPT ALL RISKS reasonably associated with my attendance and
           participation in activities at the EVENT;"]
     
     [:li "I accept full responsibility for minor children who accompany
           me. I  understand that there are  dangerous animals, insects,
           and  plants located  on  the campgrounds,  including a  lake.
           Attendance  at the  EVENT involves  a risk  of injury  and/or
           death and/or property damage. As such, I VOLUNTARILY AGREE TO
           ACCEPT ALL RISKS reasonably associated with my attendance and
           participation in activities at the EVENT; "]

     [:li  "I  AGREE  TO  HOLD  THE  RELEASEES  harmless  and  indemnify
           RELEASEES for any claim judgment  or expense of the RELEASEES
           that  they may  incur  arising  out of  my  activities or  my
           presence at the EVENT; "]

     [:li "I understand further that the foregoing AGREEMENT is intended
           to be as broad and inclusive  as is permitted by the state of
           Florida and that  if any portion thereof is  held invalid, it
           is agreed  that the balance shall,  notwithstanding, continue
           in full legal force and effect;"]

     [:li  "Notwithstanding the  express provisions  of this  AGREEMENT,
           I  agree that  if I  elect to  file suit  against any  of the
           aforementioned  RELEASEES  on  the  basis  of  negligence  or
           otherwise,  I  agree  to  be liable  for  attorney  fees  and
           costs. "]

     [:li "I HAVE READ AND HAVE VOLUNTARILY SIGNED THIS “RELEASE, WAIVER
           AND  INDEMNITY  AGREEMENT” and  further  agree  that no  oral
           representations,  statements or  inducements  apart from  the
           foregoing written agreement have been made. "]]
    
    [:h3 "Camera Use Policy"]
    
    [:ol
     
     [:li "Only guests and staff who  have signed this Camera Use Policy
            may  take   pictures  while  attending  the   Florida  Pagan
            Gathering and then only of  people who have given permission
            for you to photograph them.  This includes Camera Phones and
            other recording devices."]
     
     [:li "You must ask permission of  a child’s parent or legal guardian
            in  order  to  photograph  any  child.  AT  NO  TIME  is  it
            acceptable  to photograph  any nude  children, photographing
            nude children is against Federal law."]
     
     [:li  "Cameras, Camera  Phones or  other recording  devices are  NOT
            allowed in  the fire circle area  unless you are one  of the
            official FPG Staff  Photographers. ABSOLUTELY NO photography
            in the fire circle area after sundown."]
     
     [:li "Be polite and ask vendors for permission before photographing
            anything in their vending tent."]
     
     [:li "Those  who fail  to comply  with these  rules are  subject to
            having  their film  and/or camera  (including camera  phone)
            confiscated and including, but not limited to, being removed
            from the event site without a refund."]]
    
    [:hr]
    
    [:p "To signal your agreement, enter your legal name below.
(Florida Statute 668.004 provides that your electronic signature is
legally binding.)"]]
   
   [:div {:id "waiver-signature"
          :style {:display (if (some guest/adult? @guest-list/guests)
                             "block" "none")}}
    [text/text-input {:cursor d/general
                      :keys :waiver-signature
                      :label "I agree to the waiver"
                      :placeholder #(let [grown (first (filter guest/adult?
                                                               @guest-list/guests))]
                                      (if grown (guest/legal-name grown) "John Hancock"))
                      :validate (fn [signature]
                                  (some #(= % signature)
                                        (map guest/legal-name (filter guest/adult? @guest-list/guests))))
                      :formatter util/name-case
                      :rows 1}]
    [:span {:class "hint"
            :style {:display (if (waiver-signed?) "none" "inline")}} 
     "The signature must be entered as " [:em "exactly "] 
     (listify (map guest/legal-name (filter guest/adult? @guest-list/guests)))
     ". You might need to press Tab or Return to accept your signature."]]])



(defn adult-email-prevent-checkout []
  [:p {:class "warning"
       :style {:display (if (guest-list/need-adult-email?)
                          "block" "none")}}
   "At  least  one  adult  eMail  address  is  needed,  before  you  can
   check out."
   
   [:span {:class "hint"} "Click on the box under " [:q "eMail"] 
    "next  to any  adult member  of the  party (probably  yourself!) and
             enter a  valid address. The  first one (from the  top) that
             you    provide   is    who   will    receive   registration
             correspondence, like your confirmation.  If you're a Lugal,
             Division Coördinator, or  Board member, be sure  to use the
             same eMail  address you use  for other FPG business,  so we
             can apply any discounts."]])

(defn need-adults-warning []
  [:p {:class "warning"
       :style {:display (if (let [[adults-needed adults & _] (guest-list/adults-needed)]
                              (> adults-needed adults))
                          "block" "none")}}
   "There  are   not  enough  adults   registered  for  the   number  of
            children. (Check the " [:strong [:q "Ticket"]] " column.)"])



(defn check-out-check-in []
  [:div {:style {:display (if (and (waiver-signed?)
                                   (not (guest-list/need-adult-email?)))
                            "block" "none")}}
   [:h3 "ID Check!"]
   [:p "At the gate, you will  need valid, State-issued photo ID for
   each adult  member of your  party. Please  be sure that  your party's
   legal names are: "
    (string/join ", " (map guest/legal-name @guest-list/guests))]
   [:h3 "Quick Check-In"]
   [:p "If you, " (:waiver-signature @d/general) 
    ", have a Florida ID or Driver's License, you may be able to use our
 new Quick Check-In by swiping your ID card on site. If you supply these
 extra address information, they'll be  used to verify your reservation.
 The Quick Check-In scanner will only work if you have a Florida ID with
 the magnetic stripe on the back. We use this information "
    [:em "only"] " for your registration check-in purposes."]
   [:p {:class "hint"} 
    "Example:  Bert and Ernie live  at 123 Sesame St,  Opa-Locka, FL,
   33054. They would enter " [:q "123"] " and " [:q "33054"] "below."]
   [:div
    [text/text-input {:cursor d/general
                      :keys :fast-check-in-address
                      :label "The house/building number on your street address (digits only)"
                      :placeholder "1234"
                      :validate util/just-digits?
                      :rows 1}]]
   [:div
    [text/text-input {:cursor d/general
                      :keys :fast-check-in-postal-code
                      :label "Your home ZIP code"
                      :placeholder "33000"
                      :validate util/fl-zip-code?
                      :rows 1}]]])

(defn check-out-button-box []
  [:div {:class "buttonBox"}
   [:div
    { :style {:display (if (and (pos? (total-due))
                                (waiver-signed?)
                                (not (guest-list/need-adult-email?)))
                         "block" "none")}}]
   
   [:button {:on-click try-check-out
             :style {:display (if (and (pos? (total-due))
                                       (waiver-signed?)
                                       (not (guest-list/need-adult-email?)))
                                "inline" "none")}}
    "Ready, Make Payment →"]
   [:button {:on-click try-check-out
             :style {:display (if (and (zero? (total-due))
                                       (waiver-signed?)
                                       (pos? (count @guest-list/guests))
                                       (some staff/lugal+? @guest-list/guests)
                                       (not (guest-list/need-adult-email?)))
                                "inline" "none")}}
    "Ready. Close Registration $0.00 →"]])

(defn check-out-notes []
  [:div {:key "notes-div"}
   [text/text-input {:cursor d/general
                     :keys :note
                     :label "Notes or comments"
                     :placeholder "Special discounts or notes? Mailing your payment?"
                     :rows 3}]
   [:p {:key "note-hint" :class "hint no-print"}
    "If there's  something else that  you want to get  sorted-out, enter
 a note above,  and your registration will be "  [:em "suspended"] " and
 brought to the attention of our  Registration staff. (You may also want
 to print out this page if you're mailing your payment.)"
    (when (guest-list/need-adult-email?)
      [:big "You " [:em "must"] 
       " have at least one adult's eMail address entered as well."])]])

(defn suspend-button []
  [:div {:style {:display (if (waiver-signed?) "inline" "none")}}
   [:p  "Can't  check   out?  If  you're  not  able   to  complete  your
   registration without  assistance on-line,  add a  note above  and you
   can "
    [:em "suspend"] 
    " your registration.  This will save the  information you've entered
    so far, and notify our registration team by eMail to assist you."]
   [:button {:on-click save-action}
    "Suspend registration and send to Reg. staff"]])

(defn check-out-box []
  (if (and false
           (zero? (total-due))
           (zero? (count @payments)))
    
    [:span {:id "check-out"}] ; placeholder, nil
    
    [:section {:class "card" :id "check-out"}
     [:h2 "Check Out"]
     [check-out-invoice]
     [check-out-notes]
     [need-adults-warning]
     [adult-email-prevent-checkout]
     [sign-fpg-waiver]
     [check-out-check-in]
     [check-out-button-box]
     [suspend-button]]))
