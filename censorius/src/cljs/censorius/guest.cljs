(ns censorius.guest
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :refer [put! chan <!]]
   [clojure.data :as data]
   [clojure.string :as string]
   [goog.events :as events]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [secretary.core :as secretary]

   [censorius.staff :as staff]
   [censorius.utils :as util]
   [censorius.text :as text]
   [censorius.radio :as radio]
   [censorius.data :as d])
  (:import [goog History]
           [goog.history EventType]))

(defn set-edit! [editing tag]
  (reset! editing (if (= @editing tag)
                    nil
                    tag)))

(defn click-edit% [editing tag]
  {:on-click #(set-edit! editing tag)
   :class (str (.substring (str tag) 1 (count (str tag)))
               " "
               (if (= tag @editing)
                 "display"
                 "editing"))})

(defn close-edit! [editing]
  (util/log "Closing edits")
  (reset! editing nil))

(defn person-icon [guest]
  (case (:gender guest) :m "👨" :f "👩"))

(defn couple-icon
  ([guest] (couple-icon [guest (:spouse guest)]))
  ([guest spouse]
   (let [gender1 (or (:gender guest) (rand-nth [:m :f]))
         gender2 (and spouse (or (:gender spouse)
                                 (rand-nth [:m :f])))]
     (cond
       (not spouse) (person-icon guest)
       (not= gender1 gender2) "👫"
       (= gender2 :f) "👭"
       true "👬"))))


(def +t-shirt-long-names+
  [[:xs "Extra-small"]
   [:s "Small"]
   [:m "Medium"]
   [:l "Large"]
   [:xl "Extra-large"]
   [:2xl "Double extra-large"]
   [:3xl "Triple extra-large"]
   [:4xl "Quadruple extra-large"]
   [:5xl "Quintuple extra-large"]])

(defn t-shirt-size-long-name [size]
  (some (fn [[k v]] (if (= k size) v)) +t-shirt-long-names+))

(defn t-shirt-size-short-name [size]
  (string/upper-case (util/keyword->string size)))


(defn lugal+-spouse? [guest]
  (and (:spouse guest)
       (staff/lugal+? (:spouse guest))))

(defn unmarried-lugal+? [guest]
  (and (= :adult (:ticket-type guest))
       (nil? (:spouse guest))))

(defn married-line [{:keys [from to]} children self]
  [:span 
   (couple-icon from to)
   " "
   (case (:gender from)
     :m "husband"
     :f "wife"
     "married")
   " to "
   (when (staff/lugal+? to)
     "𒈗 ")
   (or (:called-by to) (:given-name to))
   " "
   (:surname to)])

(defn marry! [one other]
  (when (and (nil? (:spouse one))
             (nil? (:spouse other)))
    (swap! one assoc :spouse other)
    (swap! other assoc :spouse one)))

(defn divorce! [one other]
  (when (and (= other (:spouse one))
             (= one (:spouse other)))
    (swap! one assoc :spouse nil)
    (swap! other assoc :spouse nil)))



(defn marital-edit [{:keys [guest]} children this]
  (when (= :adult (:ticket-type guest))
    (let [bachelors (filter unmarried-lugal+? @d/guests)
          spouse (:spouse guest)]
      [:fieldset [:legend "Lugal Spouse?"]
       (cond (and spouse (staff/lugal+? spouse))
             [:p {:class "hint"} "As a spouse to a lugal (or
            higher) staff member, you receive discounted admission."]

             (not (empty? bachelors))
             [:p {:class "hint"} "A lugal (or higher) staff member's
                 spouse receives a discounted admission."])
       [:label [:input {:type "checkbox"
                        :on-click #(divorce! guest spouse)
                        :name (str name "/spouse")
                        :checked true}]
        [married-line {:from guest :to spouse}]]
       (when (not (empty? bachelors))
         (for [bachelor bachelors]
           [:label [:input {:type "checkbox"
                            :on-click #(marry! guest bachelor)
                            :name (util/gensymreally (str name "/marry"))
                            :checked false}]
            [married-line {:from guest :to bachelor}]]))])))

(defn name-edit-box [{:keys [guest]} children this]
  [:div
   (conj [] children)
   [text/text-input {:cursor guest
                     :keys :given-name
                     :label "Given name"
                     :placeholder "John"
                     :format util/name-case
                     :validate util/a-name?
                     :rows 1}]
   [text/text-input {:cursor guest
                     :keys :surname
                     :label "Surname"
                     :placeholder "Doe"
                     :format util/name-case
                     :validate util/a-name?
                     :rows 1}]
   [text/text-input {:cursor guest
                     :keys :called-by
                     :label "Called by"
                     :placeholder "Fuzzy Owl"
                     :format util/name-case
                     :validate util/a-name?
                     :rows 1}]

   [radio/radio-set guest {:label "Gender"
                           :key :gender
                           :tags  [[nil "⊕ (not required)"]
                                   [:m "♂ Male"]
                                   [:f "♀ Female"]]}]])

(defn suggest-staff-apply [props children this]
  [:fieldset [:legend "Join the Staff!"]
   [:p {:class "hint"}
    "Join the FPG staff for discounted admission and more. Give back to the community too!"]
   children
   [:ul
    [:li [:a {:href "#/staff-apply"} "Apply now"]]
    [:li [:a {:href "#/staff-confirm"} "On Staff"]]]])

(defn guest-row [{:keys [guest]}]
  (let [name (util/gensymreally "guest")
        editing (atom nil)]
    (fn [guest]
      [:tr [:td (click-edit% editing :name)
            (when (= :name @editing)
              [:div {:class "pop-out"}
               [name-edit-box guest]

               (when (> (count @d/guests) 1)
                 [:div [:button {:class "false"
                                 :on-click #(js/alert "Should delete but TODO")}
                        "Remove from party"]])

               [:button {:class "close true"
                         :on-click #(close-edit! editing)} "✓"]])
            (util/abbr (or (:called-by guest)
                      (:given-name guest))
              (str (:given-name guest)
                   " "
                   (:surname guest)))]
       
       [:td (click-edit% editing :mail)
        (when (= :mail @editing)
          (util/modality #(reset! editing nil)
                         [:div {:class "pop-out"}
                          [text/text-input {:cursor guest
                                            :keys :e-mail
                                            :label "eMail address"
                                            :placeholder "jdoe@example.com"
                                            :format util/format-email
                                            :validate util/email?
                                            :rows 1}]
                          [:button {:class "close true"
                                    :on-click #(close-edit! editing)} "✓"]]))
        (if-let [mail (:e-mail guest)]
          (util/abbr "✉" mail)
          (util/abbr "⃠" "No e-mail address"))]
       
       [:td (click-edit% editing :phone)
        (when (= :phone @editing)
          [:div {:class "pop-out"}
           [text/text-input {:cursor guest
                             :keys :telephone
                             :label "Phone number"
                             :placeholder "(305) 555-1234"
                             :format util/format-phone
                             :validate util/phone-number?
                             :rows 1}]
           [:button {:class "close true"
                     :on-click #(close-edit! editing)} "✓"]])
        (if-let [phone (:telephone guest)]
          (util/abbr "📞" phone)
          (util/abbr "⃠" "No telephone number"))]
       
       [:td (click-edit% editing :ticket-type)
        (when (= :ticket-type @editing)
          (cond
            (staff/lugal+? guest)
            [:p {:class "hint"} "As a lugal (or higher) staff member,
            your admission is free. You may also admit your spouse at a
            discounted rate."]

            (:staff? guest)
            [:p {:class "hint"} "Staff members receive discounted admission."])

          (let [tag-list [[:adult "🎫 Adult"]]
                tag-list (if (nil? (:spouse guest))
                           (conj tag-list [:child "🎫🚸 Child (ages 5→17)"])
                           tag-list)
                tag-list (if (not (:staff? guest))
                           (conj tag-list [:baby "🎫🚶 Child (birth→4 years)"])
                           tag-list)]
            [radio/radio-set {:label "Ticket type"
                              :cursor guest
                              :key :ticket-type
                              :tags tag-list}])
          (when (not= :baby (:ticket-type guest))
            [suggest-staff-apply])
          [marital-edit {:guest guest}])

        [:div (case (:ticket-type guest)
                :adult (util/abbr "🎫" "Adult")
                :child (util/abbr "🎫🚸" "Child")
                :baby (util/abbr "🎫🚶" "Baby"))

         " "
         (cond
           (staff/lugal+? guest) (util/abbr "𒈗" "Lugal")
           (lugal+-spouse? guest) (util/abbr (str "𒈗" (couple-icon guest)) "Lugal spouse")
           (:staff? guest) (util/abbr "⛤" "Staff"))]]
       
       [:td (click-edit% editing :days)
        (if (= :days @editing)
          [:div {:class "pop-out"}
           (if (:staff? guest)
             [:span "Tuesday→Sunday"
              [:span {:class "hint"} "Staff members are always a full week admission"]]
             [radio/radio-set guest {:label "Days attending"
                                     :key :days
                                     :tags [[nil "Wednesday→Sunday" ]
                                            [:week-end "Friday→Sunday"]
                                            [:day "One day"]]}])
           [:button {:class "close true"
                     :on-click #(close-edit! editing)} "✓"]]
          (util/abbr (case (:days guest)
                  :day "Day"
                  :week-end "Fri-Sun"
                  nil (str (if (:staff? guest)
                             "Tue"
                             "Wed") "-Sun"))
            (case (:days guest)
              :day "Any one day"
              :week-end "Week-end only, Friday→Sunday"
              nil (str "Full week, "
                       (if (:staff? guest)
                         "Tuesday"
                         "Wednesday") "→Sunday"))))]
       
       [:td (click-edit% editing :sleep)
        (if (= :sleep @editing)
          [:div {:class "pop-out"}
           [radio/radio-set guest {:label "Sleeping Arrangements"
                                   :key :sleep
                                   :tags [ [:tent "⛺ Tent camping"]
                                           [:cabin "🏡 Cabin camping"]
                                           [:lodge "🏠 Lodge camping"] ]}]
           [:button {:class "close true"
                     :on-click #(close-edit! editing)} "✓"]]
          (case (:sleep guest)
            :tent (util/abbr "⛺" "Tent camping")
            :cabin (util/abbr "🏡" "Cabin camping")
            :lodge (util/abbr "🏠" "Lodge camping")))]
       
       [:td (click-edit% editing :eat)
        (if (= :eat @editing)
          [:div {:class "pop-out"}
           [radio/radio-set guest {:label "Eating Arrangements"
                                   :key :eat
                                   :tags [ [:looney
                                            "🍱🐇 Looney Bin secret meal plan"]
                                           [:cauldron
                                            "🍲🍴 Bubbling Cauldron meal plan"]
                                           [nil "⃠ Bringing food along or eating with food vendors"] ]}]
           [:button {:class "close true"
                     :on-click #(close-edit! editing)} "✓"]]
          (case (:eat guest)
            :looney (util/abbr "🍱🐇" "Looney Bin secret meal plan")
            :cauldron (util/abbr "🍲🍴" "Bubbling Cauldron meal plan")
            nil (util/abbr "⃠" "Bringing food along")))]
       
       [:td (click-edit% editing :t-shirt)
        (if (= :t-shirt @editing)
          [:div {:class "pop-out"}
           [radio/radio-set guest {:label "Buy a Festival T-shirt"
                                   :key :t-shirt
                                   :tags (conj
                                          +t-shirt-long-names+
                                          [nil "🗽 Not buying a T-shirt"]) }]
           [:p {:class "hint"} "Buy other T-shirts and merchandise below, under "
            [:q "Extras."]]
           [:button {:class "close true"
                     :on-click #(close-edit! editing)} "✓"]]
          (if (:t-shirt guest)
            (util/abbr (str "👕 " (t-shirt-size-short-name (:t-shirt guest)))
              (str (:season @d/festival)
                   " "
                   (:year @d/festival)
                   "T-shirt: "
                   (t-shirt-size-long-name (:t-shirt guest))))
            (util/abbr "⃠" "No T-shirt")))]
       
       [:td (click-edit% editing :tote)
        (when (= :tote @editing)
          [:div {:class "pop-out"}
           [radio/radio-set guest {:label "Buy a Festival Tote Bag"
                                   :key :tote?
                                   :tags [[true "💼 Tote bag"]
                                          [false "⃠ No tote bag"]] }]
           [:p {:class "hint"}
            "Buy other merchandise below, under "
            [:q "Extras."]]
           [:button {:class "close true"
                     :on-click #(close-edit! editing)} "✓"]])
        (if (:tote? guest)
          (util/abbr "💼" "Tote Bag")
          (util/abbr "⃠" "No tote mug"))]
       
       [:td (click-edit% editing :coffee)
        (when (= :coffee @editing)
          [:div {:class "pop-out"}
           [radio/radio-set guest {:label "Buy a Festival Coffee Mug"
                                   :key :coffee?
                                   :tags [[true "🍺 Coffee Mug"]
                                          [false "⃠ No coffee bag"]] }]
           [:p {:class "hint"}
            "Buy other merchandise below, under "
            [:q "Extras."]]
           [:button {:class "close true"
                     :on-click #(close-edit! editing)} "✓"]])
        (if (:coffee? guest)
          (util/abbr "🍺" "Coffee Mug")
          (util/abbr "⃠" "No coffee mug"))]])))
