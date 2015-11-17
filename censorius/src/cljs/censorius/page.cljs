(ns censorius.page
  (:require
   [clojure.string :as string]
   [cljs.reader :as reader]
   [goog.events :as events]
   [goog.history.EventType :as EventType]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [secretary.core :as secretary :refer-macros [defroute]]

   [censorius.data :as d]
   [censorius.guest :as guest]
   [censorius.merch :as merch]
   [censorius.guest-list :as guest-list]
   [censorius.text :as text]
   [censorius.radio :as radio]
   [censorius.utils :as util])
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



(defn price-vendor []
  (* (:vendor @d/prices) (:qty @d/vending)))



(defn adults-needed []
  (let [babies (count (filter #(= :baby (:ticket-type %)) @d/guests))
        children (count (filter #(= :child (:ticket-type %)) @d/guests))
        adults (count (filter #(= :adult (:ticket-type %)) @d/guests))]
    [(+ babies (if (pos? children) 1 0)) 
     adults children babies]))



(defn vendor-agreement []
  [:div [:h3 "Vendor agreement"]
   [:p "Before you can become an vendor, you need to agree to the festival's vendor rules."]
   [:a {:href "http://fpgrocks.org/news/vendor-faq"
        :target "VendorFAQ"} 
    [:button {:class "true"} "Read Vendor Rules"]]
   [:button {:on-click (fn [_] 
                         (swap! d/vending assoc :agreement true))}
    "✓ Accept the vendor agreement"]])

(defn vendor-info []
  [:div
   [text/text-input {:cursor d/vending
                     :keys :title
                     :label "Vending Booth Name"
                     :placeholder (rand-nth ["Plonkee Plonkee Shoppe"
                                             "Donder und Blitzen"
                                             "Crazy Carla's Koala Kingdom"
                                             "Stuff to Hide from the In-Laws"
                                             "Owls in Paradise"
                                             "Shiny Bits to Buy"])
                     :format util/name-case
                     :validate util/name-like?
                     :rows 1}]
   [text/text-input {:cursor d/vending
                     :keys :blurb
                     :label "Description (Handbook/Web)"
                     :placeholder (rand-nth ["Come and have lots of fun with our widgets and doodads! You'll want to collect all nine."
                                             "Sometimes an Athame is just an Athame"
                                             "We've got all the whirlygigs and whinny-diddles you'll ever need"
                                             "Plenty of whimsical things unlikely to cause permanent harm"])
                     :validate #(> 250 (count %) 32)
                     :rows 3}]
   [text/text-input {:cursor d/vending
                     :keys :notes
                     :label "Requests/Notes (for Vendor Concierge)"
                     :placeholder ""
                     :rows 2}]])

(defn vendor-slips []
  [:div [text/text-input {:cursor d/vending
                          :keys :qty
                          :label "Quantity"
                          :placeholder "0"
                          :format util/just-number
                          :validate #(and (or (= 1 (count %)) 
                                              (and (= 2 (count %))
                                                   (= \0 (.charAt % 0))))
                                          (every? #{\1 \2 \3 \4 \0} %))
                          :rows 0
                          :size 3}]
   " vendor "
   (if (= 1 (:qty @d/vending)) "slip" "slips")
   " (" (if (< 1 (:qty @d/vending))
          [:strong (* 10 (:qty @d/vending))]
          10)
   "′×10′) @ " (util/format-money (:vendor @d/prices)) " each slip."
   (when (< 1 (:qty @d/vending))
     [:span {:class "hint"}
      " (total " (util/format-money (price-vendor)) ")"])
   (when (pos? (:qty @d/vending))
     [vendor-info])])

(defn vendor-box []
  (fn []
    (let [adults (count (filter #(= (:ticket-type @%) :adult) @d/guests))]
      (when (or (pos? adults)
                (pos? (:qty @d/vending)))
        [:section {:key "vending" :class "card"}
         [:h2 "Vending"]
         [:div
          (cond
            (zero? adults)
            [:div [:p "Vendors must have at least one adult admission."]
             [:p {:class "hint"}
              "You may see  it written that vendor  admission prices are
              $140 (with discounts for  buying early). This includes the
              price of  an adult admission  for the vendor plus  $25 for
              one  10´×10´ vending  space. You  may purchase  addtiional
              vending spaces and additional admissions as you like."]]
            
            (not (:agreement @d/vending))
            [vendor-agreement]
            
            true
            [vendor-slips])]]))))


(defn need-adult-email []
  (empty? (filter #(and (= :adult (:ticket-type @%))
                        (util/email? (:e-mail @%))) 
                  @d/guests)))



(defn assistant-getting-started []
  [:div 
   [:h4 "Getting Started"]
   [:p "First, enter the (legal) name of your party's leader. Since you're
                                      entering this, that's probably you! This
                                      will be the name that your registration
                                      will be "
    [:q "filed under"]
    " when you arrive at the Festival. Then, click (or tap) "
    [:strong "+ Add to Party"] "."]])

(defn assistant-editing-party []
  [:div
   [:h4 "Editing your Party"]
   [:p "For each person in your party, click the buttons under each
       column to fill in their complete details. (You can click on their name as well.) "]
   [:p "You can add as many party members as you need to."]])




(defn assistant-need-adults []
  (let [[adults-needed adults children babies] (adults-needed)]
    [:div [:h4 {:class "warning"} (util/counting (- adults-needed adults) "Adult") " Required"]
     [:p "At least "
      (string/lower-case (util/counting adults-needed "adult"))
      " must accompany "
      (when (pos? babies) (str (string/lower-case (util/counting babies "child")) " under 5"
                               (when (pos? children) " and")))
      (when (pos? children) (str (string/lower-case (util/counting children "child"))
                                 (when (pos? babies) " ages 5-17")))
      "."]]))

(defn assistant-need-adult-email []
  [:div [:h4 {:class "warning"} "eMail Address Needed"]
   [:p "The  eMail address of  at least one adult  in the party  must be
   provided. (Click on the box under the "
    [:q "eMail"] 
    " column to set one. For Lugals,  DCs, or members of the Board, make
    sure you use  the same eMail that you use  for FPG business, because
    you'll be eligible for discounts on some things.)"]])

(defn assistant-can-remove []
  [:div
   [:h4 "Removing tickets"]
   [:p "To remove someone from your party, click on their name, then click the "
    [:strong "Remove from Party"] " button."]])


(defn guest-bought-merch [guest-atom]
  (let [guest (deref guest-atom)] 
    (or (:t-shirt guest)
        (:coffee? guest)
        (:tote? guest))))

(defn assistant-merch+ []
  [:div
   [:h4 "Merchandise"]
   [:p
    "You can purchase great merchandise for every member of your party,
    and order extra items to take home from the "
    [:strong "Extras"]
    " box as well. There are additional items, like general T-shirts, also
    available this way."]])

(defn assistant-merch []
  [:div
   [:h4 "Merchandise"]
   [:p
    "Buy your festival T-shirts for every party member, or order more
    merchandise from the "
    [:strong "Extras"] " box."]])

(defn assistant-vendors []
  [:div
   [:h4 "Vendors"]
   [:p
    "Set up your vending booth by picking the number of spaces you'll need,
    then put in your booth's name and description to appear in
    the handbook."]])

(defn assistant-workshops []
  #_  [:div
       [:h4 "Workshops"]
       [:p "If any members of your party want to present a workshop at FPG, just
    fill out the information here."]])

(defn assistant-box [props children self]
  [:section {:id "assistant"}
   [:a {:name "assistant"}]
   [:h2 "Assistant"]
   (if (empty? @d/guests)
     [assistant-getting-started]
     [assistant-editing-party])
   (when (need-adult-email)
     [assistant-need-adult-email])
   (let [[adults-needed adults ] (adults-needed)]
     (when (> adults-needed adults) [assistant-need-adults]))
   (when (< 1 (count @d/guests))
     [assistant-can-remove])
   (when-not (empty? @d/guests)
     (if (some guest-bought-merch @d/guests)
       [assistant-merch+]
       [assistant-merch])
     [assistant-vendors]
     [assistant-workshops])])



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
     (price-vendor)
     (scholarship-donations-amount)))

(defn try-check-out []
  (js/alert "This is in Testing Mode.

You   are  about   to   be  asked   to   provide  payment   information. This  information  will  be  checked  for validity  —  eg,  whether  the credit-card number is valid. However, you SHOULD NOT BE CHARGED.

Your registration is FAKE right now, for TESTING PURPOSES ONLY.

In the  unlikely event that you  are actually charged, somehow,  we will credit it back to you immediately (but most banks will take a day or two to actually clear your account).

Make sure that the testing mode shows up on PayPal!")
  (js/alert "Just kidding! Disabled while I test some things. ~brfp"))

(defn save-action []
  (cond (empty? (:note @d/general))
        (js/alert "Please supply a note for the Regsitration staff as to what
    needs to be done.")
        
        (need-adult-email)
        (js/alert "At least one adult's  eMail address must be supplied. Otherwise,  the   Registration  staff   will  not  be   able  to  contact you.")
        
        :ok 
        (js/alert "Save with note: Disabled for testing. Pretend it worked. ~brfp")))

(defn check-out-invoice []
  @d/guests @d/merch @d/vending
  [:table {:style {:width "10em"}}
   [:tbody 
    [:tr {:key "invoice-guests"} 
     [:th "Guests"] [:td (util/format-money (guest-list/price-all-guests))
                     (doall (map (fn [guest] 
                                   [:li {:key (str "guest-price-" (:given-name @guest) "-" (:surname @guest)) }
                                    (util/format-money (guest/price guest)) " for " (or (:called-by @guest) (:given-name @guest))]) 
                              @d/guests))]]
    (if (pos? (merch/price-all-merch))
      [:tr {:key "invoice-extras"}
       [:th "Extras"] [:td (util/format-money (merch/price-all-merch))]])
    (if (pos? (price-vendor))
      [:tr {:key "invoice-vending"}
       [:th "Vending"] [:td (util/format-money (price-vendor))]])
    (if (pos? (scholarship-donations-amount)) 
      [:tr {:key "invoice-scholarships"} [:th "Scholarships"] [:td (util/format-money (scholarship-donations-amount))]])]
   [:tfoot
    [:tr {:key "invoice-total"} [:th [:big " Total: "]] [:td [:big (util/format-money (total-due))]]]]])

(defn check-out-box []
  (let [pay? (atom false)
        signature? (atom nil)]
    (fn []
      (if (or (pos? (total-due)))
        [:section {:class "card"
                   :id "check-out"}
         [:h2 "Ready to check out?"]
         [check-out-invoice]
         (cond
           (let [[adults-needed adults] (adults-needed)]
             (> adults-needed adults))
           [:p {:class "warning"}
            "There are not enough adults registered. (Check the " [:strong [:q "Ticket"]] " column.)"]
           
           (need-adult-email)
           [:p {:class "warning"}
            "At least one adult eMail address is needed."
            [:span {:class "hint"} "Click on the box under " [:q "eMail"] 
             "next to any adult member of the party (probably yourself!)
             and enter  a valid  address. The first  one (from  the top)
             that  you   provide  is   who  will   receive  registration
             correspondence, like your confirmation.  If you're a Lugal,
             Division Coördinator, or  Board member, be sure  to use the
             same eMail  address you use  for other FPG business,  so we
             can apply any discounts."]]
           
           (and @pay? signature?)
           "Signed. sealed, delivered"
           
           @pay?
           [:div 
            [:h2 "Sign the FPG Release"]
            
            [:h3 "Release, Waiver, and Indemnity Agreement"]
            
            "I, " (:given-name @(first @d/guests))
            " "
            (:surname @(first @d/guests))
            ", am an adult over 18 years of age and wish to participate in the
    Florida Pagan Gathering (“EVENT”).  In addition, I give my
    children, if any, permission to participate in the EVENT and I
    assume full responsibility for the conduct and safety of
    my children."
            
            [:p "This “Release, Waiver, and Indemnity Agreement” (“AGREEMENT”)
    is for the purpose of promoting a safe and happy religious event and to assure
    that continued religious events may be held in the future."]

            [:p "In consideration for my participation and attendance at the
    EVENT, I do hereby understand and hereby agree to the following:"]

            [:ol
             [:li "I become a member of the Temple of Earth Gathering, Inc. by
    registering and paying an entrance fee to attend the EVENT;"]

             [:li "I agree to RELEASE, WAIVE, DISCHARGE AND COVENANT NOT TO SUE
           the promoter(s); the participant(s); the Temple of Earth Gathering,
           Inc., its members, its officers, its employees, its volunteers; any
           of the Temple of Earth Gathering, Inc.’s affiliates; and, owners
           and lessees of the premises (hereinafter the “RELEASEES”); "]

             [:li "I agree not to hold the RELEASEES liable to me; members of
           my family or my guests; my personal representatives, assigns,
           heirs; and, next of kin for any and all loss or damage, and any
           claims or demands therefore on account of injury to my person or my
           property or resulting in my death, arising out my attendance and
           participation at the EVENT whether caused by the negligence or
           otherwise of the RELEASEES;"]
             
             [:li "I understand that there are dangerous animals, insects, and
           plants located on the campgrounds, including a lake.  Attendance at
           the EVENT involves a risk of injury and/or death and/or property
           damage.  As such, I VOLUNTARILY AGREE TO ACCEPT ALL RISKS
           reasonably associated with my attendance and participation in
           activities at the EVENT;"]
             
             [:li "I accept full responsibility for minor children who
           accompany me.  I understand that there are dangerous animals,
           insects, and plants located on the campgrounds, including a lake.
           Attendance at the EVENT involves a risk of injury and/or death
           and/or property damage.  As such, I VOLUNTARILY AGREE TO ACCEPT ALL
           RISKS reasonably associated with my attendance and participation in
           activities at the EVENT; "]

             [:li "I AGREE TO HOLD THE RELEASEES harmless and indemnify
           RELEASEES for any claim judgment or expense of the RELEASEES that
           they may incur arising out of my activities or my presence at the
           EVENT; "]

             [:li "I understand further that the foregoing AGREEMENT is
           intended to be as broad and inclusive as is permitted by the state
           of Florida and that if any portion thereof is held invalid, it is
           agreed that the balance shall, notwithstanding, continue in full
           legal force and effect;"]

             [:li "Notwithstanding the express provisions of this AGREEMENT, I
           agree that if I elect to file suit against any of the
           aforementioned RELEASEES on the basis of negligence or otherwise, I
           agree to be liable for attorney fees and costs.  "]

             [:li "I HAVE READ AND HAVE VOLUNTARILY SIGNED THIS “RELEASE,
           WAIVER AND INDEMNITY AGREEMENT” and further agree that no oral
           representations, statements or inducements apart from the foregoing
           written agreement have been made. "]]
            
            [:h3 "Camera Use Policy"]
            
            [:ol
             
             [:li "Only guests and staff who have signed this Camera Use Policy
            may take pictures while attending the Florida Pagan Gathering and
            then only of people who have given permission for you to
            photograph them. This includes Camera Phones and other
            recording devices."]
             
             [:li "You must ask permission of a child’s parent or legal
            guardian in order to photograph any child. AT NO TIME is it
            acceptable to photograph any nude children, photographing nude
            children is against Federal law."] 
             
             [:li "Cameras, Camera Phones or other recording devices are NOT
            allowed in the fire circle area unless you are one of the official
            FPG Staff Photographers.  ABSOLUTELY NO photography in the fire
            circle area after sundown."]
             
             [:li "Be polite and ask vendors for permission before
            photographing anything in their vending tent."]
             
             [:li "Those who fail to comply with these rules are subject to
            having their film and/or camera (including camera phone)
            confiscated and including, but not limited to, being removed from
            the event site without a refund."]]
            
            [:hr]
            
            [:p "To signal your agreement, enter your full, legal name below.
(Florida Statute 668.004 provides that your electronic signature is
legally binding.)"]
            
            [text/text-input {:cursor d/vending
                              :keys :title 
                              :label "Workshop title"
                              :placeholder "Underwater basket weaving"
                              :rows 1}]]

           
           
           :ready
           [:div {:class "buttonBox"}
            [:button
             {:on-click try-check-out}
             "Ready, Check Out →"]])
         
         [:div
          [text/text-input {:cursor d/general
                            :keys :note
                            :label "Notes or comments"
                            :placeholder "Cabin assignment requests? Special discounts or notes?"
                            :rows 3}]]
         [:p {:class "hint no-print"}
          "If there's something else that you want to get sorted-out, enter a
 note above, and your registration will be" [:em "suspended"] " and brought to
 the attention of our Registration staff. " 
          (when (need-adult-email)
            [:big "You " [:em "must"] 
             " have at least one adult's eMail address entered as well."])]
         [:button {:on-click save-action
                   :disabled (or (empty? (:note @d/general))
                                 (need-adult-email))}
          "Suspend registration and send to Reg. staff"]]
        ;; nothing to pay:
        [:span {:id "check-out"}]))))



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
   [vendor-box]
   [workshop-box]
   [scholarship-box]
   [assistant-box]
   [check-out-box]
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
