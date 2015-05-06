(ns censorius.page
  (:require
   [clojure.string :as string]
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
         [:div "Disabled for now. Contact " [:a {:href "mailto:workshops@flapagan.org"}
                                             "workshops@flapagan.org"] ", please."]
         
         [:tfoot [:tr [:td {:col-span 2}
                       [text/text-input {:cursor new
                                         :keys :title 
                                         :label "Workshop title"
                                         :placeholder "Underwater basket weaving"
                                         :rows 1}]
                       [radio/radio-set {:label "Presenter" 
                                         :cursor new
                                         :key :presenter
                                         :tags [(map (fn [guest]
                                                       (let [n (or (:called-by guest)
                                                                   (:given-name guest))]
                                                         [n n])))]}]
                       [:button {:class "true"
                                 :on-click (fn [_]
                                             (swap! d/workshops conj {:long-name (:title @new)
                                                                      :presenter 
                                                                      (let [n (:presenter @new)] 
                                                                        (filter #(or (= n (:called-by %))
                                                                                     (= n (:given-name %)))
                                                                                @d/guests))})
                                             (swap! new assoc :titie ""))}
                        (if (zero? (count @d/workshops))
                          "⁂ Present a workshop"
                          "+ Add another")]]]]]
        ))))

(defn price-vendor []
  (* (:vendor @d/prices) (:qty @d/vending)))

(defn adults-needed []
  (let [babies (count (filter #(= :baby (:ticket-type %)) @d/guests))
        children (count (filter #(= :child (:ticket-type %)) @d/guests))
        adults (count (filter #(= :adult (:ticket-type %)) @d/guests))]
    [(+ babies (if (pos? children) 1 0)) adults children babies]))

(defn vendor-agreement []
  [:div [:h3 "Vendor agreement"]
   [:p "Before you can become an vendor, you need to agree to the festival's vendor rules."]
   [:a {:href "/news/2015/04/vendor-faq"
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
                     :placeholder "Plonkee Plonkee Shoppe"
                     :format util/name-case
                     :validate util/name-like?
                     :rows 1}]
   [text/text-input {:cursor d/vending
                     :keys :blurb
                     :label "Description (Handbook/Web)"
                     :placeholder "Come and have lots of fun with our widgets and doodads! You'll want to collect all nine."
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
                          :validate util/just-digits?
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

(defn vendor-card [adults]
  [:section {:class "card"}
   [:h2 "Vending"]
   [:div
    (cond
      (zero? adults)
      [:p "Vendors must have at least one adult admission"]
      
      (not (:agreement @d/vending))
      [vendor-agreement]
      
      true
      [vendor-slips])]])

(defn vendor-box []
  (let [[_ adults] (adults-needed)]
    (when (or (pos? adults)
              (pos? (:qty @d/vending)))
      [vendor-card adults])))

(defn need-adult-email []
  (empty? (filter #(and (= :adult (:ticket-type %))
                        (not (nil? (:e-mail %)))) 
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
       column to fill in their complete details."]
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
   [:p "The eMail address of at least one adult in the party must be provided."]])

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
  [:div
   [:h4 "Workshops"]
   [:p "If any members of your party want to present a workshop at FPG, just
   fill out the information here."]])

(defn assistant-box [props children self]
  [:section {:id "assistant"}
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
  (js/alert "Try checkout"))

(defn save-action []
  (cond (empty? (:note @d/general))
        (js/alert "Please supply a note for the Regsitration staff as to what
        needs to be done.")
        
        (need-adult-email)
        (js/alert "At least one adult's eMail address must be supplied.")
        
        :ok 
        (js/alert "Save with note")))

(defn check-out-invoice []
  @d/guests @d/merch @d/vending
  [:table {:style {:width "10em"}}
   [:tbody 
    [:tr [:th "Guests"] [:td (util/format-money (guest-list/price-all-guests))
                         (map (fn [el] [:li el]) (map guest/price @d/guests))]]
    [:tr [:th "Extras"] [:td (util/format-money (merch/price-all-merch))]]
    [:tr [:th "Vending"] [:td (util/format-money (price-vendor))]]
    [:tr [:th "Scholarships"] [:td (util/format-money (scholarship-donations-amount))]]]
   [:tfoot
    [:tr [:th [:big " Total: "]] [:td [:big (util/format-money (total-due))]]]]])

(defn check-out-box []
  (let [pay (atom nil)]
    (fn []
      @d/guests @d/merch @d/vending
      (if (or true (pos? (total-due)))
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
            "At least one adult eMail address is needed."]
           
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
         [:p {:class "hint"}
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
        [:span {:id "check-out"}]))))

(defn registration-page []
  [:div
   [guest-list/guest-list-box]
   [merch/merch-box]
   [vendor-box]
   [workshop-box]
   [scholarship-box]
   [assistant-box]
   [check-out-box]])


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
  (reagent/render-component [(:current-page @uri-view) uri-view] (.getElementById js/document "censorius")))


;; History
(defn hook-browser-navigation! []
  (let [history (History.)]
    (goog.events/listen history EventType/NAVIGATE
                        #(secretary/dispatch! (.-token %)))
    (doto history (.setEnabled true))))


(defn main []
  (util/log "clearTimeout " js/not-loaded)
  (js/window.clearTimeout js/not-loaded)
  (hook-browser-navigation!)
  (init!))

(main)
