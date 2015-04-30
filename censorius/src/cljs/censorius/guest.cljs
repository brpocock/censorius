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
   [censorius.data :as d]
   [censorius.editable :as ed])
  (:import [goog History]
           [goog.history EventType]))



(defn abbr* [short & more]
  [:span short])


(defn mmap [m f a] (->> m (f a) (into (empty m))))


(defn person-icon [guest]
  (case (or (:gender @guest)
            (rand-nth [:m :f])) :m "👨" :f "👩"))

(defn couple-icon
  ([guest] (couple-icon [guest (:spouse @guest)]))
  ([guest spouse]
   (let [gender1 (or (:gender @guest) (rand-nth [:m :f]))
         gender2 (and spouse (or (:gender @spouse)
                                 (rand-nth [:m :f])))]
     (cond
       (not spouse) (person-icon @guest)
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
  (and (:spouse @guest)
       (staff/lugal+? (:spouse @guest))))

(defn unmarried-lugal+? [guest]
  (and (= :adult (:ticket-type @guest))
       (nil? (:spouse @guest))))

(defn married-line [{:keys [from to]} children self]
  [:span 
   (couple-icon from to)
   " "
   (case (:gender (deref from))
     :m "husband"
     :f "wife"
     "married")
   " to "
   (when (staff/lugal+? (deref to))
     "𒈗 ")
   (or (:called-by (deref to)) (:given-name (deref to)))
   " "
   (:surname (deref to))])

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



(defn marital-edit [guest]
  (if (= :adult (:ticket-type @guest))
    (let [bachelors (filter unmarried-lugal+? @d/guests)
          spouse (:spouse @guest)]
      [:fieldset [:legend "Lugal Spouse?"]
       (cond (and spouse (staff/lugal+? spouse))
             [:p {:class "hint"} "As a spouse to a lugal (or
            higher) staff member, you receive discounted admission."]

             (and (not spouse)
                  (not (empty? bachelors)))
             [:p {:class "hint"} "A lugal (or higher) staff member's
                 spouse receives a discounted admission."])
       [:label [:input {:type "checkbox"
                        :on-change #(divorce! guest spouse)
                        :name (str name "/spouse")
                        :checked true}]
        [married-line {:from guest :to spouse}]]
       (when (not (empty? bachelors))
         (for [bachelor bachelors]
           [:label [:input {:type "checkbox"
                            :on-change #(marry! guest bachelor)
                            :name (util/gensymreally (str name "/marry"))
                            :checked false}]
            [married-line {:from guest :to bachelor}]]))])
    [:span "TODO remove this should be blank: " (str (:ticket-type @guest))]))

(defn name-edit-box [guest children this]
  [:div
   children
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
                     :placeholder "Fuzzy Oywl"
                     :format util/name-case
                     :validate util/a-name?
                     :rows 1}]

   [radio/radio-set {:label "Gender (optional)"
                     :cursor guest
                     :key :gender
                     :tags  [[nil "⊕ (not given)"]
                             [:m "♂ Male"]
                             [:f "♀ Female"]]}]])

(defn suggest-staff-apply [guest children this]
  (when (= :adult (:ticket-type @guest))
    (cond
      (:staff-apply? @guest)
      [:fieldset [:legend "Apply for a staff position"]
       "The staff application is not online yet. Please send an eMail to "
       [:a {:href "mailto:staffing@flapagan.org&subject=Application+for+staff+position"}
        "staffing@flapagan.org"]
       [:button {:on-click (fn []
                             (swap! guest assoc :staff-apply? false)
                             true)}
        "←"]]
      
      (:staff-verify? @guest)
      [:fieldset [:legend "Already a staff member?"]
       "Please select the name of the lugal to whom you report:"
       "TODO"]
      
      :else
      [:fieldset [:legend "Join the Staff!"]
       
       [:p {:class "hint"}
        "Join the FPG staff for discounted admission and more. Give back to the community too!"]
       children
       [:ul
        [:li [:button 
              {:on-click (fn [_] (swap! guest assoc :staff-apply? true)
                           true)}
              "Apply now"]]
        [:li [:button 
              {:on-click (fn [_]
                           (swap! guest assoc :staff-verify? true)
                           true)}
              "Already on Staff"]]]])))


(defn name-cell [guest] 
  (let [editing (atom false)]
    (fn [guest]
      [:td 
       (if @editing
         [:div {:class "pop-out"}
          [name-edit-box guest]
          
          (when (< 1 (count @d/guests))
            [:div [:button {:class "false"
                            :on-click (fn [_]
                                        (when (js/confirm (str "Remove "
                                                               (or (:called-by @guest) (:given @guest))
                                                               " from your party?"))
                                          (swap! d/guests mmap remove (fn [it] (= (deref it) @guest))))
                                        true)}
                   "Remove from party"]])
          
          (ed/close editing)]
         [:div (ed/click-edit editing :name) 
          [:abbr {:title (str (:given-name @guest)
                              " "
                              (or (:called-by @guest) "")
                              " "
                              (:surname @guest))}
           (or (:called-by @guest)
               (:given-name @guest)) ]])])))


(defn email-cell [guest]
  (let [editing (atom false)] 
    (fn [guest]
      [:td 
       (if @editing
         (util/modality #(reset! editing false)
                        [:div {:class "pop-out"}
                         [text/text-input {:cursor guest
                                           :keys :e-mail
                                           :label "eMail address"
                                           :placeholder "jdoe@example.com"
                                           :format util/format-email
                                           :validate util/email?
                                           :rows 1}]
                         (ed/close editing)])
         [:div (ed/click-edit editing :mail)
          (if-let [mail (:e-mail @guest)]
            (abbr* "✉" mail)
            (abbr* "⃠" "No e-mail address"))])])))

(defn phone-cell [guest]
  (let [editing (atom false)]
    (fn [guest]
      [:td
       (if @editing
         [:div {:class "pop-out"}
          [text/text-input {:cursor guest
                            :keys :telephone
                            :label "Phone number"
                            :placeholder "(305) 555-1234"
                            :format util/format-phone
                            :validate util/phone-number?
                            :rows 1}]
          (ed/close editing)]
         [:div  (ed/click-edit editing :phone)
          (if-let [phone (:telephone @guest)]
            (abbr* "📞" phone)
            (abbr* "⃠" "No telephone number"))])])))

(defn ticket-cell [guest]
  (let [editing (atom false)]
    (fn [guest]
      [:td 
       (if @editing
         [:div {:class "pop-out"}
          (cond
            (staff/lugal+? guest)
            [:p {:class "hint"} "As a lugal (or higher) staff member,
            your admission is free. You may also admit your spouse at a
            discounted rate."]
            
            (staff/staff? @guest)
            [:p {:class "hint"} "Staff members receive discounted admission."]
            
            :else
            (let [tag-list [[:adult (str "🎫" (person-icon guest) " Adult")]]
                  tag-list (if (nil? (:spouse @guest))
                             (conj 
                              (conj tag-list 
                                    [:child "🎫🚸 Child (ages 5→17)"])
                              [:baby "🎫🚶 Child (birth→4 years)"])
                             tag-list)]
              [:div 
               [radio/radio-set {:label "Ticket type"
                                 :cursor guest
                                 :key :ticket-type
                                 :tags tag-list}]
               (when (not= :baby (:ticket-type @guest))
                 [suggest-staff-apply guest])]))
          [marital-edit guest]
          (ed/close editing)]
         
         [:div (ed/click-edit editing :ticket-type)
          (case (:ticket-type @guest)
            :child (abbr* "🎫🚸" "Child" "Childrpn from ages 5 through 17")
            :baby (abbr* "🎫🚶" "Baby" "Children from birth to 4 years old")
            (abbr* "🎫" "Adult"))
          
          " "
          (cond
            (staff/lugal+? guest)
            (abbr* "𒈗" "Lugal" "Lugals head each department. This ticket type also includes Division Coördinators or members of the Board of Directors.")
            
            (lugal+-spouse? guest) 
            (abbr* (str "𒈗" (couple-icon @guest)) "Lugal spouse" "Spouse of a lugal (or DC or board member)")
            
            (staff/staff? @guest) 
            (abbr* "⛤" "Staff" "General staff members (not a lugal)"))])])))

(defn days-cell [guest]
  (let [editing (atom false)]
    (fn [guest]
      
      [:td 
       (if @editing
         [:div {:class "pop-out"}
          (if (staff/staff? @guest)
            [:div "Tuesday→Sunday"
             [:div {:class "hint"} "Staff members are always a full week admission"]]
            [radio/radio-set {:label "Days attending"
                              :key :days
                              :cursor guest
                              :tags [[nil "Wednesday→Sunday" ]
                                     [:week-end "Friday→Sunday"]
                                     [:day "Any one day"]]}])
          (ed/close editing)]
         [:div (ed/click-edit editing :days)
          (abbr* (case (:days @guest)
                   :day "Day"
                   :week-end "Fri-Sun"
                   nil (str (if (staff/staff? @guest)
                              "Tue"
                              "Wed") "-Sun"))
                 (case (:days @guest)
                   :day "Any one day"
                   :week-end "Week-end only, Friday→Sunday"
                   nil (str "Full week, "
                            (if (staff/staff? @guest)
                              "Tuesday"
                              "Wednesday") "→Sunday")))])])))

(defn lodging-cell [guest]
  (let [editing (atom false)]
    (fn [guest]
      [:td 
       (if @editing
         [:div {:class "pop-out"}
          [radio/radio-set {:label "Sleeping Arrangements"
                            :key :sleep
                            :cursor guest
                            :tags [ [:tent "⛺ Tent camping"]
                                    [:cabin "🏡 Cabin camping"]
                                    [:lodge "🏠 Lodge camping"] ]}]
          (ed/close editing)]
         [:div (ed/click-edit editing :sleep)
          (case (:sleep @guest)
            :cabin (abbr* "🏡" "Cabin camping")
            :lodge (abbr* "🏠" "Lodge camping")
            (abbr* "⛺" "Tent camping"))])])))

(defn food-cell [guest]
  (let [editing (atom false)]
    (fn [guest]
      [:td (ed/click-edit editing :eat)
       (if @editing
         [:div {:class "pop-out"}
          [radio/radio-set {:label "Eating Arrangements"
                            :key :eat
                            :cursor guest
                            :tags [ [:looney
                                     "🍱🐇 Looney Bin secret meal plan"]
                                    [:cauldron
                                     "🍲🍴 Bubbling Cauldron meal plan"]
                                    [nil "⃠ Bringing food along or eating with food vendors"] ]}]
          (ed/close editing)]
         (case (:eat @guest)
           :looney (abbr* "🍱🐇" "Looney Bin secret meal plan")
           :cauldron (abbr* "🍲🍴" "Bubbling Cauldron meal plan")
           nil (abbr* "⃠" "Bringing food along")))])))

(defn t-shirt-cell [guest]
  (let [editing (atom false)]
    (fn [guest]
      [:td (ed/click-edit editing :t-shirt)
       (if @editing
         [:div {:class "pop-out"}
          [radio/radio-set {:label "Buy a Festival T-shirt"
                            :key :t-shirt
                            :cursor guest
                            :tags (conj
                                   +t-shirt-long-names+
                                   [nil "🗽 Not buying a T-shirt"]) }]
          [:p {:class "hint"} "Buy other T-shirts and merchandise below, under "
           [:q "Extras."]]
          (ed/close editing)]
         (if (:t-shirt @guest)
           (abbr* (str "👕 " (t-shirt-size-short-name (:t-shirt @guest)))
                  (str (:season @d/festival)
                       " "
                       (:year @d/festival)
                       "T-shirt: "
                       (t-shirt-size-long-name (:t-shirt @guest))))
           (abbr* "⃠" "No T-shirt")))])))

(defn tote-bag-cell [guest]
  (let [editing (atom false)]
    (fn [guest]
      [:td
       (if @editing
         [:div {:class "pop-out"}
          [radio/radio-set {:label "Buy a Festival Tote Bag"
                            :cursor guest
                            :key :tote?
                            :tags [[true "💼 Tote bag"]
                                   [false "⃠ No tote bag"]] }]
          [:p {:class "hint"}
           "Buy other merchandise below, under "
           [:q "Extras."]]
          (ed/close editing)]
         [:div (ed/click-edit editing :tote)
          (if (:tote? @guest)
            (abbr* "💼" "Tote Bag")
            (abbr* "⃠" "No tote mug"))])])))
      
(defn mug-cell [guest]
  (let [editing (atom false)]
    (fn [guest]
      [:td 
       (if @editing
         [:div {:class "pop-out"}
          [radio/radio-set {:label "Buy a Festival Coffee Mug"
                            :key :coffee?
                            :cursor guest
                            :tags [[true "🍺 Coffee Mug"]
                                   [false "⃠ No coffee bag"]] }]
          [:p {:class "hint"}
           "Buy other merchandise below, under "
           [:q "Extras."]]
          (ed/close editing)]
         [:div (ed/click-edit editing :coffee)
          (if (:coffee? @guest)
            (abbr* "🍺" "Coffee Mug")
            (abbr* "⃠" "No coffee mug"))])])))


(defn guest-row [guest]
  (let [name (util/gensymreally "guest")]
    (fn [guest]
      (println "guest row for " @guest)
      [:tr {:key guest}
       [name-cell guest]
       [email-cell guest]
       [phone-cell guest]
       [ticket-cell guest]
       [days-cell guest]
       [lodging-cell guest]
       [food-cell guest]
       [t-shirt-cell guest]
       [tote-bag-cell guest]
       [mug-cell guest]])))
