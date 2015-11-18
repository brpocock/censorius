(ns censorius.page
  (:require
   [cljs.reader :as reader]
   [goog.events :as events]
   [goog.history.EventType :as EventType]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [secretary.core :as secretary :refer-macros [defroute]]

   [censorius.assistant :as assistant]
   [censorius.data :as d]
   [censorius.editable :as ed]
   [censorius.guest :as guest]
   [censorius.guest-list :as guest-list]
   [censorius.merch :as merch]
   [censorius.radio :as radio]
   [censorius.text :as text]
   [censorius.utils :as util]
   [censorius.vendor :as vendor])
  (:import [goog History] [goog events]))


(enable-console-print!)



(util/log "Censorius loading…")



(defn workshop-box []
  (let [new (atom {:title "" :presenter nil})]
    (fn [] 
      (when-not (empty? @d/guests)
        [:section {:class "card"}
         [:h2 "Workshops"]
         (when (pos? (count @d/workshops))
           [:fieldset [:legend "Workshop Requests"]
            [:table
             [:thead [:tr [:th "Title"] [:th "Presenter"]]]
             [:tbody
              (for [workshop @d/workshops]
                [:tr [:td (:long-name @workshop)]
                 [:td (or (:called-by (:presenter @workshop))
                          (:given-name (:presenter @workshop)))]])]]])
         [:div "Please contact " [:a {:href "mailto:workshops@flapagan.org"}
                                  "workshops@flapagan.org"] 
          " to put in any workshops that you'd like to present."]
         #_ [:tfoot [:tr [:td {:col-span 2}
                          [text/text-input {:cursor new
                                            :keys :title 
                                            :label "Workshop title"
                                            :placeholder (rand-nth ["Tarot Reading"
                                                                    "Basket Weaving"
                                                                    "Familiar Grooming"
                                                                    "Water Prayers"
                                                                    "Fire Prayers"
                                                                    "Wind Prayers"
                                                                    "Wood Prayers"
                                                                    "Metal Prayers"
                                                                    "Bell Ringing"
                                                                    "Spirit Prayers"
                                                                    "Wicca at Work"
                                                                    "Men's Mysteries"
                                                                    "Women's Mysteries"
                                                                    "Exploring Karma"
                                                                    "Viking Hairstyles"])
                                            :rows 1}]
                          [radio/radio-set {:label "Presenter" 
                                            :cursor new
                                            :key :presenter
                                            :tags (map (fn [guest]
                                                         (let [n (str (or (:called-by @guest)
                                                                          (:given-name @guest))
                                                                      " "
                                                                      (:surname @guest))]
                                                           [n n]))
                                                    @d/guests)}]
                          (when (and (:presenter new)
                                     (not (empty? (:title new)))) 
                            [:button {:class "true"
                                      :on-click (fn [_]
                                                  (swap! d/workshops conj (atom {:long-name (:title @new)
                                                                                 :presenter 
                                                                                 (let [n (:presenter @new)] 
                                                                                   (filter #(or (= n (str (:called-by @%) " "(:surname @%)))
                                                                                                (= n (str (:given-name @%) " "(:surname @%))))
                                                                                           @d/guests))}))
                                                  (swap! new assoc :titie ""))}
                             (if (zero? (count @d/workshops))
                               "⁂ Present a workshop"
                               "+ Add another")])]]]]))))


(defn need-adult-email []
  (empty? (filter #(and (= :adult (:ticket-type @%))
                        (util/email? (:e-mail @%))) 
                  @d/guests)))



(defn scholarship-box []
  [:section {:class "card"}
   [:h2 "Scholarship Donations"]
   [:p {:class "hint"} "Suggested donation: $5.00+"]
   [:table
    [:tbody
     [:tr [:th "Pagans Helping Pagans"
           [:span {:class "hint"}
            "These funds are used to provide scholarships for guests who would
    like to attend FPG but need financial assistance."]]
      [:td [text/text-input {:cursor d/scholarships
                             :keys :php
                             :label "Pagans Helping Pagans Fund"
                             :placeholder "$5.00"
                             :format util/format-money
                             :validate util/money?
                             :size 6
                             :rows 0}]]]
     [:tr [:th "Robert Baiardi Memorial"
           [:span {:class "hint"}
            "Named in remembrance of Robert Baiardi, the husband of a member
    of FPG staff who passed away shortly after FPG Samhain 2012. This
    fund has been set up to provide financial assistance for
    staff admissions."]]
      [:td [text/text-input {:cursor d/scholarships
                             :keys :baiardi
                             :label "Robert Baiardi Memorial Fund"
                             :placeholder "$5.00"
                             :format util/format-money
                             :validate util/money?
                             :size 6
                             :rows 0}]]]
     [:tr [:th "Seva"
           [:span {:class "hint"}
            "The Seva Scholarship offers financial assistance to FPG staff members who need it."]]
      [:td [text/text-input {:cursor d/scholarships
                             :keys :seva
                             :label "Seva Fund"
                             :placeholder "$5.00"
                             :format util/format-money
                             :validate util/money?
                             :size 6
                             :rows 0}]]]]]])



(defn scholarship-donations-amount []
  (reduce + (map util/just-decimal (vals @d/scholarships))))

(defn total-due []
  (+ (guest-list/price-all-guests)
     (merch/price-all-merch)
     (vendor/price-vendor)
     (scholarship-donations-amount)
     (- (reduce + (map #(:amount %) @d/payments)))))

(defn try-check-out []
  (js/alert "This is in Testing Mode.

You   are  about   to   be  asked   to   provide  payment   information. This  information  will  be  checked  for validity  —  eg,  whether  the credit-card number is valid. However, you SHOULD NOT BE CHARGED.

Your registration is FAKE right now, for TESTING PURPOSES ONLY.

In the  unlikely event that you  are actually charged, somehow,  we will credit it back to you immediately (but most banks will take a day or two to actually clear your account).

Make sure that the testing mode shows up on PayPal!")
  (js/alert "Just kidding! Disabled while I test some things. ~brfp"))

(defn save-action []
  (cond (empty? (:note @d/general))
        (js/alert "Please supply a note for the Regsitration staff as to what needs to be done.")
        
        (need-adult-email)
        (js/alert "At least one adult's  eMail address must be supplied. Otherwise,  the   Registration  staff   will  not  be   able  to  contact you.")
        
        :ok 
        (js/alert "Save with note: Disabled for testing. Pretend it worked. ~brfp")))

(defn display-payment [payment]
  [:dl [:dt {:key (str "payment-" (:cleared payment))}
        (util/format-money (:amount payment))
        " via " (:via payment)
        " at " (:cleared payment)]
   [:dd (when (:note payment) 
          [:span [:q (:note payment)] " — "]) " confirmation: "
    (or (:confirmation payment)
        "(none)")]])

(defn invoice-header []
  (when (:invoice @d/general) 
    [:thead
     [:tr {:key "invoice-header"}
      [:th "Invoice Number"]
      [:td (str (:invoice @d/general))]]]))

(defn invoice-guests-section []
  [:tr {:key "invoice-guests"} 
   [:th "Guests"] [:td (util/format-money (guest-list/price-all-guests))
                   (doall (map (fn [guest] 
                                 [:li {:key (str "guest-price-" (:given-name @guest) "-" (:surname @guest)) }
                                  (util/format-money (guest/price guest)) " for " (or (:called-by @guest) (:given-name @guest))]) 
                            @d/guests))]])

(defn invoice-merch-section []
  (when (pos? (merch/price-all-merch)) 
    [:tr {:key "invoice-extras"}
     [:th "Extras"] [:td (util/format-money (merch/price-all-merch))]]))

(defn invoice-vendor-section []
  (when (pos? (vendor/price-vendor))
    [:tr {:key "invoice-vending"}
     [:th "Vending"] [:td (util/format-money (vendor/price-vendor))]]))

(defn invoice-scholarships-section []
  (when (pos? (scholarship-donations-amount)) 
    [:tr {:key "invoice-scholarships"} 
     [:th "Scholarships"] [:td (util/format-money (scholarship-donations-amount))]]))

(defn invoice-payments-section []
  (when (pos? (count @d/payments))
    [:tr {:key "invoice-payments"}
     [:th "Payments"] [:td (doall (map display-payment @d/payments))]]))

(defn invoice-footer []
  [:tfoot
   [:tr {:key "invoice-total"} 
    [:th [:big " Balance Due: "]] 
    [:td [:big (util/format-money (total-due))]]]])

(defn check-out-invoice []
  @d/guests @d/merch @d/vending
  [:table {:style {:width "10em"}}
   [invoice-header]
   [:tbody
    [invoice-guests-section]
    [invoice-merch-section]
    [invoice-vendor-section]
    [invoice-scholarships-section]
    [invoice-payments-section]]
   [invoice-footer]])

(defn sign-fpg-waiver []
  [:div 
   [:h2 "Sign the FPG Release"]
   
   [:h3 "Release, Waiver, and Indemnity Agreement"]
   
   "I am an  adult over 18 years  of age and wish to  participate in the
    Florida Pagan Gathering (“EVENT”). In  addition, I give my children,
    if any,  permission to participate  in the  EVENT and I  assume full
    responsibility for the conduct and safety of my children."
   
   [:p "This “Release, Waiver, and Indemnity Agreement” (“AGREEMENT”) is
    for the purpose of promoting a safe and happy religious event and to
    assure that continued religious events may be held in the future."]

   [:p  "In consideration  for my  participation and  attendance at  the
    EVENT, I do hereby understand and hereby agree to the following:"]

   [:ol
    [:li  "I become  a member  of the  Temple of  Earth Gathering,  Inc.
    by registering and paying an entrance fee to attend the EVENT;"]

    [:li "I agree  to RELEASE, WAIVE, DISCHARGE AND COVENANT  NOT TO SUE
           the  promoter(s); the  participant(s);  the  Temple of  Earth
           Gathering, Inc.,  its members,  its officers,  its employees,
           its volunteers; any of the  Temple of Earth Gathering, Inc.’s
           affiliates;    and,    owners     and    lessees    of    the
           premises (hereinafter the “RELEASEES”); "]

    [:li "I agree not to hold the  RELEASEES liable to me; members of my
           family or  my guests;  my personal  representatives, assigns,
           heirs; and, next  of kin for any and all  loss or damage, and
           any claims  or demands therefore  on account of injury  to my
           person or my  property or resulting in my  death, arising out
           my attendance  and participation at the  EVENT whether caused
           by the negligence or otherwise of the RELEASEES;"]
    
    [:li "I  understand that there  are dangerous animals,  insects, and
           plants  located   on  the  campgrounds,  including   a  lake.
           Attendance  at the  EVENT involves  a risk  of injury  and/or
           death and/or property damage. As such, I VOLUNTARILY AGREE TO
           ACCEPT ALL RISKS reasonably associated with my attendance and
           participation in activities at the EVENT;"]
    
    [:li "I accept full responsibility  for minor children who accompany
           me. I  understand that there are  dangerous animals, insects,
           and  plants located  on  the campgrounds,  including a  lake.
           Attendance  at the  EVENT involves  a risk  of injury  and/or
           death and/or property damage. As such, I VOLUNTARILY AGREE TO
           ACCEPT ALL RISKS reasonably associated with my attendance and
           participation in activities at the EVENT; "]

    [:li "I AGREE TO HOLD THE RELEASEES harmless and indemnify RELEASEES
           for any claim judgment or  expense of the RELEASEES that they
           may incur arising out of my  activities or my presence at the
           EVENT; "]

    [:li "I understand further that  the foregoing AGREEMENT is intended
           to be as broad and inclusive  as is permitted by the state of
           Florida and that  if any portion thereof is  held invalid, it
           is agreed  that the balance shall,  notwithstanding, continue
           in full legal force and effect;"]

    [:li  "Notwithstanding the  express  provisions  of this  AGREEMENT,
           I  agree that  if I  elect to  file suit  against any  of the
           aforementioned  RELEASEES  on  the  basis  of  negligence  or
           otherwise,  I  agree  to  be liable  for  attorney  fees  and
           costs. "]

    [:li "I HAVE READ AND  HAVE VOLUNTARILY SIGNED THIS “RELEASE, WAIVER
           AND  INDEMNITY  AGREEMENT” and  further  agree  that no  oral
           representations,  statements or  inducements  apart from  the
           foregoing written agreement have been made. "]]
   
   [:h3 "Camera Use Policy"]
   
   [:ol
    
    [:li "Only guests  and staff who have signed this  Camera Use Policy
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
    
    [:li "Be polite and ask  vendors for permission before photographing
            anything in their vending tent."]
    
    [:li  "Those who  fail to  comply with  these rules  are subject  to
            having  their film  and/or camera  (including camera  phone)
            confiscated and including, but not limited to, being removed
            from the event site without a refund."]]
   
   [:hr]
   
   [:p "To signal your agreement, enter your legal name below.
(Florida Statute 668.004 provides that your electronic signature is
legally binding.)"]
   
   [text/text-input {:cursor d/general
                     :keys :waiver-signature
                     :label "Sign here"
                     :placeholder (map #(str (:given-name @%) " " (:surname @%))
                                    (first 
                                     (filter #(= (:ticket-type @%) :adult)
                                             @d/guests)))
                     :rows 1}]])

(defn waiver-signed? []
  (some #(= % (:waiver-signature @d/general))
        (map #(str (:given-name @%) " " (:surname @%))
          (filter #(= (:ticket-type @%) :adult)
                  @d/guests))))

(defn adult-email-prevent-checkout []
  [:p {:class "warning"}
   "At  least  one  adult  eMail  address  is  needed,  before  you  can
   check out."
   
   [:span {:class "hint"} "Click on the box under " [:q "eMail"] 
    "next to any adult member of the party (probably yourself!)
             and enter  a valid  address. The first  one (from  the top)
             that  you   provide  is   who  will   receive  registration
             correspondence, like your confirmation.  If you're a Lugal,
             Division Coördinator, or  Board member, be sure  to use the
             same eMail  address you use  for other FPG business,  so we
             can apply any discounts."]])

(defn check-out-button-box []
  [:div {:class "buttonBox"}
   (when (pos? (total-due)) 
     [:button
      {:on-click try-check-out}
      "Ready, Make Payment →"])])

(defn need-adults-warning []
  [:p {:class "warning"}
   "There are  not enough adults  registered for the  number of
            children. (Check the " [:strong [:q "Ticket"]] " column.)"])

(defn check-out-notes []
  [:div {:key "notes-div"}
   [text/text-input {:cursor d/general
                     :keys :note
                     :label "Notes or comments"
                     :placeholder "Cabin assignment requests? Special discounts or notes?"
                     :rows 3}]
   [:p {:key "note-hint" :class "hint no-print"}
    "If there's  something else that  you want to get  sorted-out, enter
 a note above,  and your registration will be "  [:em "suspended"] " and
 brought to the attention of our Registration staff. "
    (when (need-adult-email)
      [:big "You " [:em "must"] 
       " have at least one adult's eMail address entered as well."])]])

(defn check-out-action []
  (let [pay? (atom false)]
    (fn []
      (cond (let [[adults-needed adults & _] (guest-list/adults-needed)]
              (> adults-needed adults))
            [need-adults-warning]
            
            (need-adult-email) [adult-email-prevent-checkout]
            
            (and @pay? (waiver-signed?)) "Signed. sealed, delivered."
            
            @pay? [sign-fpg-waiver]
            
            :ready [check-out-button-box]))))

(defn check-out-box []
  (if (and false
           (zero? (total-due))
           (zero? (count @d/payments)))
    
    [:span {:id "check-out"}] ; placeholder, nil
    
    [:section {:class "card" :id "check-out"}
     [:h2 "Check Out"]
     [check-out-invoice]
     [check-out-action]
     [check-out-notes]
     [:button {:on-click save-action
               :disabled (or (empty? (:note @d/general))
                             (need-adult-email))}
      "Suspend registration and send to Reg. staff"]]))



(defn print-trailer []
  [:div {:class "print-only"}
   [:p "This is a copy of the registration web page, formatted for printing. This is "
    [:em "not"] " the eMail receipt, and it does "
    [:em "not"] 
    " indicate proof  of payment. However, we hope that  it will provide
    a convenient record of your Festival plans."]
   [:p "Produced by Censorius Herald software. Software copyright © 2013-2015."]
   [:p "Your web browser or other user agent is " js/navigator.userAgent]])



(defn registration-page []
  @d/guests
  [:div
   [guest-list/guest-list-box]
   [merch/merch-box]
   [vendorvendor-box]
   [workshop-box]
   [scholarship-box]
   [assistant/assistant-box]
   [check-out-box]
   [ed/nightshade]
   [print-trailer]])


(defn about-page []
  [:section
   [:h1 "About Censorius"]
   [:p "Copyright © 2014-2015, Bruce-Robert Fenn Pocock."]
   [:a {:href "#/"} [:button "← Back to Registration"]]])



(defn staff-apply [guest$]
  (let [guest (get @d/guests guest$)]
    (if (not guest)
      [:section [:h1 "Staff Application"]
       [:div {:class "card"}
        ]]
      [:section [:h1 "Staff Application"]
       [:div {:class "card"}
        [:h2 "Confirm Name"]
        [guest/name-edit-box guest]]
       [:div {:class "card"}
        [:h2 "Already on Staff?"]
        [:p "If you're already a staff member, you can get your Lugal's
    confirmation and get your staff discount. You must have already
    applied, been accepted, and been assigned to your Lugal to receive
    the discount."]
        [:a {:href "#/staff-confirm"} [:button "Confirm Staff"]]
        [:p {:class "hint"} "If you're a Lugal, Division Coördinator,
    Director, Guardian, Shiny Happy People Drum Tribe, Headliner, or
    other individual who should receive a discounted admission, make
    sure that you've entered your eMail address and that it matches the
    one you gave to the Festival previously. If your discount does not
    appear, then "]
        [:a {:href "mailto:festival-censorius@star-hope.org"} "send an eMail"]
        "with the details of your problem and I'll look into it."]
       [:div {:class "card"}
        [:a {:href "#/"} [:button "← Back to Registration"]]]])))



(defn vendor-quiz []
  [:section [:h1 "Staff Application"]
   [:div {:class "card"}
    ]
   [:div {:class "card"}
    [:a {:href "#/"} [:button "← Back to Registration"]]]])



(defn staff-confirm []
  [:section [:h1 "Staff Confirmation"]
   [:a {:href "#/staff-apply"} [:button "Apply for Staff"]]
   [:a {:href "#/"} [:button "← Back to Registration"]]])


(defn page-404 []
  [:div [:h1 "404: Incorrect link"]
   [:section {:class "card"}
    [:h2 "Festival Registration"]
    [:p "The link you followed is not valid; but you can "
    [:a {:href "#/"} "return to Registration"] " here."]]])


;; Routes

(def uri-view (reagent/atom  {:current-page registration-page
                              :id nil
                              :filter nil}))

(secretary/set-config! :prefix "#")
(defn location-hash [x] (set! (.-hash (.-location js/window)) x))

(secretary/defroute "/" []
  (swap! uri-view assoc :current-page registration-page))

(secretary/defroute "/about" []
  (swap! uri-view assoc  :current-page about-page))

(secretary/defroute "/vendor-agreement" []
  (swap! uri-view assoc  :current-page vendor-quiz))

(secretary/defroute "/staff-apply/:id" [{:keys [id]}]
  (swap! uri-view assoc  :current-page staff-apply :id id))

(secretary/defroute "/staff-confirm/:id" [{:keys [id]}]
  (swap! uri-view assoc  :current-page staff-confirm :id id))


;; Initialize app

;; need to run this after routes have been defined

(defn init! []
  (reader/read-string "(defn boo [] (js/alert \"boo\"))")
  (set! js/document.title (str "Registration for TEG FPG " (:season @d/festival) " " (:year @d/festival)))
  (reagent/render-component [(:current-page @uri-view) uri-view] (.getElementById js/document "censorius")))


;; History
(defn hook-browser-navigation! []
  (let [history (History.)]
    (goog.events/listen history EventType/NAVIGATE
                        #(secretary/dispatch! (.-token %)))
    (doto history (.setEnabled true))))


(defn main []
  (js/window.clearTimeout js/not-loaded)
  (hook-browser-navigation!)
  (init!))

(main)
