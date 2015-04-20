(ns censorius.page
  (:require

   ;; [cljs-uuid-utils :as uuid]
   [clojure.string :as string]
   [datascript :as data]
   ;; [goog.events :as events]
   ;; [goog.history :as history]
   ;; [goog.history.EventType :as EventType]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [secretary.core :as secretary :refer-macros [defroute]]

   ;; [censorius.address :as address]
   [censorius.data :as d]
   [censorius.guest :as guest]
   [censorius.text :as text]
   [censorius.utils :as util])
  (:import [goog History] [goog events]))

(enable-console-print!)

(def +escape-key+ 27)
(def +return-key+ 13)




(util/log "Censorius loading…")

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



(defn guests-thead []
  [:thead
   [:tr [:th (abbr "Name" "Name of each party member")]
    [:th (abbr "✉" "eMail")]
    [:th (abbr "📞" "Phone#")]
    [:th (abbr "🚸" "Ticket" "The type of ticket — adult or child")]
    [:th (abbr "📅" "Days")]
    [:th (abbr "⛺/🏠" "Sleep" "The lodging for each person: tent, cabin, or lodge bed.")]
    [:th (abbr "🍲🍴" "Meals" "Purchase the Bubbling Cauldron meal plan here.")]
    [:th (abbr "👕" "T-Shirt" "FPG T-shirt for this Festival. (Buy other shirts in the “Extras” box)")]
    [:th (abbr "💼" "Tote" "FPG tote bags")]
    [:th (abbr "🍺" "Mug" "FPG 20th Anniversary hot & cold beverage mugs. (Buy other mugs in the “Extras” box)")]]])

(defn guest-price [guest]
  (+ (cond
       (:lugal+? guest) 0
       (:staff? guest) 300
       (:adult? guest)

       (case (:days guest)
         :day 490.24
         :week-end 762.39
         nil 950.13
         (do (util/log "bad days " (:days guest))
             0))
       ;; child
       true 178.20)

     (case (:sleep guest)
       :tent 0
       :cabin 85
       :lodge 2000
       (do (util/log "bad sleeping “" (:sleep guest) "” for guest " guest)
           0))

     (case (:eat guest)
       :looney 10000000.01
       :cauldron 7000
       (do (util/log "bad eating " (:eat guest))
           0))

     (if (:t-shirt guest) (:price (deref (:festival-shirt @d/merch))) 0)
     (if (:coffee? guest) (:price (deref (:coffee @d/merch))) 0)
     (if (:tote? guest) (:price (deref (:tote-bag @d/merch))) 0)))

(defn guests-price-sum []
  [:span (util/format-money (reduce + (map guest-price @d/guests)))])

(let [new-name (atom {:new-name ""})]
  (defn add-to-party [event]
    (let [name (:new-name @new-name)
          name-parts (string/split (string/trim name) #"\s+")
          [given surname] (if (= 2 name-parts)
                            [(first name-parts) (second name-parts)]
                            [(first name-parts) (:surname (deref (first @d/guests)))])]
      (when (not (string/blank? given))
        (reset! new-name {:new-name ""})
        (swap! d/guests conj {:called-by nil :given-name given :surname surname
                              :e-mail nil :telephone nil
                              :adult? true :staff? false :lugal+? false
                              :sleep :tent :eat nil
                              :t-shirt nil :coffee false :tote false}))))

  (defn guest-list-add-row []
    [:tr [:td {:col-span 10}
          [text/text-input new-name {:korks :new-name
                                     :label "Add a person"
                                     :placeholder "John Doe"
                                     :format util/name-case
                                     :validate util/a-name?
                                     :rows 0}]
          [:button
           (let [name$ (:new-name new-name)
                 named? (and name$
                             (string? name$)
                             (string/blank? name$))]
             {:on-click (if named? add-to-party (fn [] nil))
              :class (str (if named?
                            "disabled"
                            "true ")
                      (if (zero? (count @d/guests))
                        " urgent"
                        ""))})
           "+ Add to party"]]]))

(defn guest-list-box []

  (util/log "Guests = " @d/guests)
  
  [:section [:h1 "Registration for " (:season @d/festival) " " (:year @d/festival)
             [:a {:href "#/load"} [:button {:title "Load a previous registration"} "📂"]]]
   [:section {:class "card"}
    [:h2 (if-let [leader (first @d/guests)]
           (str (or (:surname @leader)
                    "No name yet")
                " — "
                " Party of " (util/counting (count @d/guests) "Guest"))
           "New party")]
    [:table {:class "people"}
     [guests-thead]
     [:tbody (map guest/guest-row @d/guests)]
     [:tfoot [guest-list-add-row]
      [:tr [:th {:col-span 7} "Subtotal"] [:td {:col-span 3} [guests-price-sum]]]]]]])

(defn running-out-style [style]
  [:p [:strong {:class "warning"} "Please change your order."]
   "Only " (string/lower-case (util/counting (:inventory style) "item"))
   " of this style remain. You'll need to remove "
   (string/lower-case (util/counting (- (:qty style) (:inventory style))
                                     "item"))
   " from your order."
   (let [left (:inventory style)]
     [:button {:class "false" :on-click #(swap! style :qty left)}
      "😦 Change to " left])])

(defn merch-product-style [style]
  (if (zero? (:inventory style))
    [[:p {:class "hint"} (:title style) " — Sold out."]
     [text/text-input style {:korks :qty
                             :label (:title style)
                             :placeholder "0"
                             :size 3
                             :format util/just-digits
                             :validate util/just-digits?}]
     (when (> 10 (:inventory style))
       [:div {:class "hint"} (util/counting (:inventory style) "item") " left"])
     (when (< (:inventory style) (:qty style))
       [running-out-style style])]))

(defn merch-product-style-1 [style]
  (if (zero? (:inventory style))
    [:div {:class "hint"} "Sold out."]
    [:div (if (< (:inventory style) (:qty style))
            [:p [:strong {:class "warning"}
                 "Please change your order."]
             " Only " (string/lower-case (util/counting (:inventory style) "item"))
             " of this style remain. You'll need to remove "
             (string/lower-case (util/counting (- (:qty style) (:inventory style))
                                               "item"))
             " from your order."
             (let [left (:inventory style)]
               [:button {:class "false" :on-click #(swap! style assoc :qty left)}
                "😦 Change to " left])]
            [text/text-input style {:korks :qty
                                    :placeholder "0"
                                    :rows 0 :size 3
                                    :format util/just-digits
                                    :validate util/just-digits?}])
     (when (> 10 (:inventory style))
       [:div {:class "hint"}
        (util/counting (:inventory style) "item") " left"])
     (when (< (:inventory style) (:qty style))
       [running-out-style style])]))

(defn product-row [[id item]]
  [:tr [:th [:img {:src (:image item)
                   :class "merch-thumb"}] (:title item)
        [:p {:class "hint"} (:description item)]]
   [:td (util/format-money (:price item))]
   [:td (if (= 1 (count (:styles item)))
          [merch-product-style-1 (first (:styles item))]
          (map merch-product-style
            (:styles item)))]
   [:td (util/format-money (* (reduce + (map #(:qty %)
                                          (:styles item)))
                              (:price item)))]])

(defn sum-merch-prices []
  (util/format-money (reduce + (map (fn [style] (get style :qty))
                                 (map (fn [item] (:styles (deref item)))
                                   @d/merch)))))

(defn merch-box []
  [:section {:class "card"}
   [:h2 "Extras"]
   [:table {:class "extras"}
    [:thead [:tr [:th "Item"] [:th "Price Ea."] [:th "Style / Qty."] [:th "Subtotal"]]]
    [:tbody (map product-row @d/merch )]
    [:tfoot [:tr [:th {:col-span 3} "Subtotal"]
             [:td [sum-merch-prices]]]]]])

(defn workshop-box []
  [:section {:class "card"}
   [:h2 "Workshops"]
   (when (pos? (count @d/workshops))
     [:fieldset [:legend "Workshop Requests"]
      [:table
       [:thead [:tr [:th "Title"] [:th "Presenter"]]]
       [:tbody 
        (for [workshop @d/workshops]
          [:tr [:td [:a {:href (str "#/workshops/" (:id @workshop))}
                     (:long-name @workshop)]]
           [:td (:formal-name (:presenter @workshop))]])]]])
   [:a {:href "#/add-workshop"} [:button {:class "true"} 
                                 (if (zero? (count @d/workshops))
                                   "⁂ Present a workshop"
                                   "+ Add another")]]])

(defn vendor-box []
  [:section {:class "card"}
   [:h2 "Vending"]
   [:div
    (cond
      (empty? @d/guests)
      [[:p "Vendors must have at least one paid, adult admission"]

       "No "]

      (not (:agreement @d/vending))
      [[:h3 "Vendor agreement"]
       [:p "Before you can become an vendor, you need to agree to the festival's vendor rules."]
       [:a {:href "#/vendor-agreement"} [:button {:class "true"} "Vendor Rules"]]
       "No "]

      true
      [text/text-input @d/vending {:korks :qty
                                   :label "Quantity"
                                   :placeholder "0"
                                   :format util/just-number
                                   :validate util/just-digits?
                                   :rows 0
                                   :size 3}])
    " vendor "
    (if (= 1 (:qty @d/vending)) "slip" "slips")
    " (" (if (< 1 (:qty @d/vending))
           [:strong (* 10 (:qty @d/vending))]
           10)
    "′×10′) @ " (util/format-money (:vendor @d/prices)) " each"
    (when (< 1 (:qty @d/vending))
      [:span {:class "hint"}
       " (total " (util/format-money (* (:vendor @d/prices) (:qty @d/vending))) ")"])]
   (when (pos? (:qty @d/vending))
     [:div
      [text/text-input @d/vending {:korks :title
                                   :label "Vending Booth Name"
                                   :placeholder "Plonkee Plonkee Shoppe"
                                   :format util/name-case
                                   :validate util/name-like?
                                   :rows 1}]
      [text/text-input @d/vending {:korks :blurb
                                   :label "Description (Handbook/Web)"
                                   :placeholder "Come and have lots of fun with our widgets and doodads! You'll want to collect all nine."
                                   :validate #(> 250 (count %) 32)
                                   :rows 3}]
      [text/text-input @d/vending {:korks :notes
                                   :label "Requests/Notes"
                                   :placeholder ""
                                   :rows 2}]])])

(defn assistant-box [props children self]
  [:section {:id "assistant"}
   [:h2 "Assistant"]

   (if (zero? (count @d/guests))
     [:div [:h4 "Getting Started"]
      [:p "First, enter the (legal) name of your party's leader. Since
                                      you're entering this, that's
                                      probably you! This will be the
                                      name that your registration will
                                      be "
       [:q "filed under"]
       " when you arrive at the Festival. Then, click (or tap) "
       [:strong "+ Add to Party"] "."]]
     [:div
      [:h4 "Editing your Party"]
      [:p "For each person in your party, click the buttons under each
       column to fill in their complete details."]
      [:p "The information you fill in for your party leader will
       become the default for other party members, so check out your
       options first."]
      [:p "You can add as many party members as you need to."]])

   (if (nil? (filter #(and (= :adult (:ticket-type %))
                           (not (nil? (:e-mail %)))) @d/guests))
     [:div [:h4 {:class "warning"} "eMail Address Needed"]
      [:p "The eMail address of at least one adult in the party must be provided."]])

   (let [babies (count (filter #(= :baby (:ticket-type %)) @d/guests))
         children (count (filter #(= :child (:ticket-type %)) @d/guests))
         adults (count (filter #(= :adult (:ticket-type %)) @d/guests))
         adults-needed (+ babies (if (pos? children) 1 0))]
     (if (> adults-needed adults)
       [:div [:h4 {:class "warning"} (util/counting (- adults-needed adults) "Adult") " Required"]
        [:p "At least "
         (string/lower-case (util/counting adults-needed "adult"))
         " must accompany "
         (when (pos? babies) (str (string/lower-case (util/counting babies "child")) " under 5"
                                  (when (pos? children) " and")))
         (when (pos? children) (str (string/lower-case (util/counting children "child"))
                                    (when (pos? babies) " ages 5-17")))
         "."]]))

   (if (< 1 (count @d/guests))
     [:div
      [:h4 "Removing tickets"]
      [:p "To remove someone from your party, click on their name, then click the "
       [:strong "Remove from Party"] " button."]])

   (if (some (fn [guest-atom]
               (let [guest (deref guest-atom)] (or (:t-shirt guest)
                                                   (:coffee? guest)
                                                   (:tote? guest)))) @d/guests)
     [:div
      [:h4 "Merchandise"]
      [:p
       "You can purchase great merchandise for every member of your party, and order extra items to take home from the "
       [:strong "Extras"]
       " box as well. There are additional items, like general T-shirts, also available this way."]]
     [:div
      [:h4 "Merchandise"]
      [:p
       "Buy your festival T-shirts for every party member, or order more merchandise from the "
       [:strong "Extras"] " box."]])

   [:div
    [:h4 "Vendors"]
    [:p
     "Set up your vending booth by picking the number of spaces you'll
                                                     need, then put in
                                                     your booth's name
                                                     and description to
                                                     appear in
                                                     the handbook."]]
   [:div
    [:h4 "Workshops"]
    [:p "If any members of your party want to present a workshop at FPG, just fill out the information here."]]])

(defn scholarship-box []
  [:section {:class "card"}
   [:h2 "Scholarship Donations"]
   [:table
    [:tbody
     [:tr [:th "Pagans Helping Pagans"
           [:span {:class "hint"}
            "These funds are used to provide scholarships for guests who would like to attend FPG but need financial assistance."]]
      [:td [text/text-input @d/scholarships {:korks :php
                                             :label "Pagans Helping Pagans Fund"
                                             :placeholder "$5.00"
                                             :format util/format-money
                                             :validate util/money?
                                             :size 6
                                             :rows 0}]]]
     [:tr [:th "Robert Baiardi Memorial"
           [:span {:class "hint"}
            "Named in remembrance of Robert Baiardi, the husband of a member of FPG staff who passed away shortly after FPG Samhain 2012. This fund has been set up to provide financial assistance for staff admissions."]]
      [:td [ text/text-input @d/scholarships {:korks :baiardi
                                              :label "Robert Baiardi Memorial Fund"
                                              :placeholder "$5.00"
                                              :format util/format-money
                                              :validate util/money?
                                              :size 6
                                              :rows 0}]]]
     [:tr [:th "Seva"
           [:span {:class "hint"}
            "The Seva Scholarship offers financial assistance to FPG staff members who need it."]]
      [:td [text/text-input @d/scholarships  {:korks :seva
                                              :label "Seva Fund"
                                              :placeholder "$5.00"
                                              :format util/format-money
                                              :validate util/money?
                                              :size 6
                                              :rows 0}]]]]]])

(defn check-out-box []
  [:section {:class "card"}
   [:h2 "Ready to check out?"]
   [:div {:class "buttonBox"}
    " Total: " "$399.97" " "
    [:button "Pay Now"]]])

(defn registration-page []
  [:div
   [guest-list-box]
   [merch-box]
   ;;    [vendor-box]
   [workshop-box]
   [scholarship-box]
   [assistant-box]
   [check-out-box]
   ])


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

(def uri-view (atom {:current-page registration-page
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
