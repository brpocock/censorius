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
   [censorius.merch :as merch]
   [censorius.utils :as util]
   [censorius.text :as text]
   [censorius.radio :as radio]
   [censorius.data :as d]
   [censorius.editable :as ed])
  (:import [goog History]
           [goog.history EventType]))

(defn abbr* [short & more]
  [:abbr {:title (str short " " (string/join " " more))}
   short])

(defn mmap [m f a] (->> m (f a) (into (empty m))))

(defn person-icon [guest]
  (case (or (:gender @guest)
            (rand-nth [:m :f])) :m "👨" :f "👩"))

(defn couple-icon
  ([guest spouse]
   (let [gender1 (or (:gender @guest) 
                     (rand-nth [:m :f]))
         gender2 (and spouse
                      (or (:gender @spouse)
                          (rand-nth [:m :f])))]
     (cond
       (not spouse) (person-icon guest)
       (not= gender1 gender2) "👫"
       (= gender2 :f) "👭"
       :else "👬")))
  ([guest] (couple-icon [guest (:spouse @guest)])))

(defn cauldron-price [guest]
  (cond 
    (= :salad-bar (:eat @guest))
    (:salad-bar @d/prices)
    
    (not= :cauldron (:eat @guest))
    0
    
    (= :child (:ticket-type @guest))
    (:child (:cauldron @d/prices))
    
    (= :baby (:ticket-type @guest))
    (:under5 (:cauldron @d/prices))
    
    :else                               ; adult
    (case (:days @guest)
      :day (:fri-sun (:cauldron @d/prices))
      :week-end (:fri-sun (:cauldron @d/prices))
      (:adult (:cauldron @d/prices)))))

(defn lugal+-spouse? [guest]
  (and (:spouse guest)
       (staff/lugal+? (deref (:spouse guest)))))

(defn ticket-price [guest]
  (util/log "guest spouse " (:spouse @guest) " lugal+ " (staff/lugal+? (:spouse @guest)))
  (cond
    (staff/lugal+? @guest) 
    0
    
    (staff/staff? @guest) 
    (:staff (:ticket @d/prices))
    
    (= :child (:ticket-type @guest))
    (:child (:ticket @d/prices))
    
    (= :baby (:ticket-type @guest))
    (:under5 (:ticket @d/prices))
    
    :else                               ; adult
    (case (:days @guest)
      :day (:day-pass (:ticket @d/prices))
      :week-end (:week-end (:ticket @d/prices))
      (if (lugal+-spouse? @guest)
        (:staff (:ticket @d/prices))
        (:adult (:ticket @d/prices))))))

(defn cabin-price [guest]
  ((if (staff/staff? @guest) :staff :regular)
   (:cabin @d/prices)))

(defn lodge-price [guest]
  ((if (staff/staff? @guest) :staff :regular)
   (:lodge @d/prices)))

(defn sleep-price [guest]
  (case (:sleep @guest)
    :cabin (cabin-price guest)
    :lodge (lodge-price guest)
    0))

(defn price [guest]
  (+ (ticket-price guest)
     
     (sleep-price guest)
     
     (cauldron-price guest)
     
     (if (:t-shirt @guest)
       (merch/price-t-shirt)
       0)
     
     (if (:coffee? @guest)
       (merch/price-coffee-mug)
       0)
     
     (if (:tote? @guest)
       (merch/price-tote)
       0)))

(defn unmarried-lugal+? [guest]
  (and (= :adult (:ticket-type @guest))
       (staff/lugal+? @guest)
       (nil? (:spouse @guest))))

(defn married-line [{:keys [from to]} children self]
  [:span 
   (couple-icon from to)
   " "
   (case (:gender @from)
     :m "husband"
     :f "wife"
     "married")
   " to "
   (when (staff/lugal+? @to)
     "𒈗 ")
   (or (:called-by @to) (:given-name @to))
   " "
   (:surname @to)])

(defn marry! [one other]
  (when (and (nil? (:spouse one))
             (nil? (:spouse other))
             (not= one other))
    (swap! one assoc :spouse other)
    (swap! other assoc :spouse one)))

(defn divorce! [one other]
  (if (or (and (= (:given-name @one) "Bruce-Robert")
               (= (:given-name @other) "John"))
          (and (= (:given-name @other) "Bruce-Robert")
               (= (:given-name @one) "John")))
    (js/alert "Yeah, no way. ♥ You're stuck with me, Mr Fenn Pocock. ☺ ♥")
    (do
      (swap! one assoc :spouse nil)
      (swap! other assoc :spouse nil))))



(defn marital-edit [guest]
  (fn [guest]
    (let [bachelors (filter #(and (nil? (:spouse @%))
                                  (= :adult (:ticket-type @%))
                                  (not (and (= (:given-name @guest) (:given-name @%))
                                            (= (:surname @guest) (:surname @%))))) 
                            @d/guests)
          spouse (:spouse @guest)] 
      
      (util/log "spouse " spouse "; bachelors " bachelors)
      
      (cond 
        
        (not= :adult (:ticket-type @guest))
        [:div {:key "lugal-kid"}
         (if (some (partial staff/lugal+?) @d/guests)
           [:p {:class "hint"} 
            (str  "Are you  my "
                  (rand-nth ["mommy" "daddy"])
                  "?  If you're  a  lugal  or DC,  your  child could  get
       a  discount on  their cabin  or lodge  bunk. Add  a note  to your
       Registration to have the discount applied.")]
           [:p {:class "hint"} "Discounted (child) admission with adult admission."])]
        
        (and (nil? spouse)
             (empty? bachelors))
        [:span]
        
        (lugal+-spouse? @guest)
        [:div {:key "divorce-lugal"}
         [:label [:input {:type "checkbox"
                          :on-change #(divorce! guest spouse)
                          :name (str name "/spouse")
                          :checked true}]
          [married-line {:from guest :to spouse}]]
         [:p {:class "hint"} 
          "The spouse of a Lugal staff member receives discounted admission."]]
        
        spouse
        [:div {:key "divorce-from-lugal"}
         [:label [:input {:type "checkbox"
                          :on-change #(divorce! guest spouse)
                          :name (str name "/spouse")
                          :checked true}]
          [married-line {:from guest :to spouse}]]]
        
        :else
        [:fieldset [:legend "Spouse/Partner?"]
         (when (some (partial staff/lugal+?) bachelors)
           [:p  {:class  "hint"} "A  Lugal  (or  DC/BoD) staff  member's
                 spouse or domestic partner receives a discounted admission."])
         (doall
          (map (fn [bachelor]
                 [:div
                  [:label {:key (str "marry-" (or (:called-by @bachelor)
                                                  (:given-name @bachelor))
                                     "-" (:surname @bachelor))}
                   [:input {:type "checkbox"
                            :on-change #(marry! guest bachelor)
                            :name (util/gensymreally (str name "/marry"))
                            :checked false}]
                   [married-line {:from guest :to bachelor}]]]) 
            bachelors))]))))

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
                     :placeholder (rand-nth ["Fuzzy Owl"
                                             "Super Mario"
                                             "Amy Amazing"
                                             "Happy Gilmore"
                                             "Glowworm"
                                             "Revered Moon Pie"
                                             "Stevie"
                                             "Joey"
                                             "Anthrocite"
                                             "Antimony"])
                     :format util/name-case
                     :validate util/a-name?
                     :rows 1}]

   [:div [radio/radio-set {:label "Gender (optional)"
                           :cursor guest
                           :key :gender
                           :tags  [[nil "⊕ (not given/other)"]
                                   [:m "♂ Male"]
                                   [:f "♀ Female"]]}]
    [:small "(Gender  is used  only for  selecting pronouns  or courtesy
    titles,  eg   Mr/Ms.  It  does   not  affect  the   registration  in
    any other way.)"]]])

(defn staff-application [guest]
  [:div
   [:h3 "Staff Application"]
   [text/text-input {:cursor guest
                     :keys :address
                     :rows 2
                     :label "Street address"}]
   [text/text-input {:cursor guest
                     :keys :city
                     :rows 1
                     :format util/name-case
                     :validate util/a-name?
                     :label "City"}]
   [:div "State, ZIP/Postal code, Country " " "
    [text/text-input {:cursor guest
                      :keys :state
                      :rows 0
                      :size 3
                      :label "State"
                      :placeholder "FL"}]
    [text/text-input {:cursor guest
                      :keys :postal-code
                      :rows 0
                      :size 6
                      :label "ZIP/Postal Code"
                      :placeholder "32109"}]
    [text/text-input {:cursor guest
                      :keys :country
                      :rows 0
                      :size 3
                      :label "Country"
                      :placeholder "US"}]]
   [text/text-input {:cursor guest
                     :keys :social-network
                     :label "Social network info"
                     :rows 3
                     :placeholder "I camp with the Pillaging Spores"}]
   [text/text-input {:cursor guest
                     :keys :coven
                     :label "Coven/group affiliations"
                     :rows 3
                     :placeholder "I worship with the Bitter Bunny Coven"}]
   [text/text-input {:cursor guest
                     :keys :spiritual-path
                     :label "Spiritual path"
                     :rows 1
                     :placeholder "Standing Stones Wicca"}]
   [text/text-input {:cursor guest
                     :keys :staff-rec
                     :label "Staff member(s) who recommended you"
                     :rows 2}]
   [text/text-input {:cursor guest
                     :keys :why-staff
                     :label "Why do you want to join the FPG Staff?"
                     :rows 3}]
   [text/text-input {:cursor guest
                     :keys :staff-job-wanted
                     :label "What staff job(s) would you like to do?"
                     :rows 3}]
   [text/text-input {:cursor guest
                     :keys :physical-limits
                     :label "List any physical limitations which might
                          limit your ability to perform some staff jobs"
                     :rows 3}]
   [text/text-input {:cursor guest
                     :keys :ksa
                     :label "List any special knowlege, skills, or
                          abilities that might be useful"
                     :rows 3}]
   [text/text-input {:cursor guest
                     :keys :staff-wed-sun
                     :label "All staff are expected to be on-site from
                          Wednesday morning, until the entire camp is packed
                          up Sunday afternoon/evening. Would this pose any
                          problems for you?"
                     :rows 1}]
   [text/text-input {:cursor guest
                     :keys :staff-tue-sun
                     :label "Some staff are expected to be on-site
                          starting Tuesday. Would this pose any problems
                          for you?"
                     :rows 1}]
   [text/text-input {:cursor guest
                     :keys :staff-notes
                     :label "Any other notes you'd like to share with
                          FPG Staffing?"
                     :rows 3}]
   [radio/radio-set {:cursor guest
                     :keys :staff-submit
                     :tags [[:yes "Yes, please submit my staff application"]
                            [:no "I've changed my mind. Disregard this."]]}]
   [:p "Staff applications are submitted with your registration. Click ←
        or ✓ to continue with you registration."]])

(defn staff-department-select [guest]
  [:fieldset [:legend "Already a staff member?"]
   (str "Please select the name of " (or (:called-by @guest)
                                         (:given-name @guest)) "'s department.")
   [:p {:class "hint"} "A Lugal, DC, or member of the Board should " 
    [:em "instead of this"]
    " set their eMail address. Click "
    [:strong "✓Close"]
    " and then click the button under eMail."]
   [radio/radio-set {:cursor guest
                     :key :staff-department 
                     :label "Department"
                     :tags (conj (doall (map (fn [[dept-label {:keys [name]}]] 
                                               [dept-label name])
                                          staff/+departments+))
                                 [nil (str (or (:called-by @guest)
                                               (:given-name @guest)) "is not on staff")])}]
   (when-not (:staff-department guest)
     [:button {:on-click (fn []
                           (swap! guest assoc :staff-verify? false)
                           true)}
      "←"])])

(defn suggest-staff-apply [guest children this]
  (when (= :adult (:ticket-type @guest))
    (cond
      (:staff-apply? @guest)
      [:fieldset [:legend "Apply for a staff position"]
       "For questions about staff applications, send an eMail to "
       [:a {:href "mailto:staffing@flapagan.org&subject=Application+for+staff+position"}
        "staffing@flapagan.org"]
       [staff-application guest]
       [:button {:on-click (fn []
                             (swap! guest assoc :staff-apply? false)
                             true)}
        "←"]]
      
      (or (staff/staff? @guest)
          (:staff-verify? @guest))
      [staff-department-select guest]
      
      :else
      [:fieldset [:legend "Join the Staff!"]
       [:p {:class "hint"}
        "Join the FPG staff for discounted admission and more. Give back to the community too!"]
       children
       [:ul
        [:li [:button 
              {:on-click (fn [_] 
                           (swap! guest assoc :staff-apply? true)
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
                                                               (or (:called-by @guest) (:given-name @guest))
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
           [:big (or (:called-by @guest)
                     (:given-name @guest))] ]])])))


(defn email-cell [guest]
  (let [editing (atom false)] 
    (fn [guest]
      [:td 
       (if @editing
         [:div {:class "pop-out"}
          [text/text-input {:cursor guest
                            :keys :e-mail
                            :label "eMail address"
                            :placeholder (.toLowerCase (str (first (:given-name @guest))
                                                            (:surname @guest)
                                                            "@example.com"))
                            :format util/format-email
                            :validate util/email?
                            :rows 1}]
          (ed/close editing) ]
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

(defn edit-ticket-cell [guest editing]
  [:div {:class "pop-out"}
   (cond
     (staff/lugal+? @guest)
     [:div
      [:h3 {:style {:font-size "48pt"}}
       "𒈗 Lugal+"]
      [:p {:class "hint"} "As a Lugal (or DC/BoD) staff member, your admission
            is free. You may also admit your spouse at a discounted rate, and
            apply discounted rates to spouse and children's cabin or
            lodge bunks."]]
     
     (staff/staff? @guest)
     [:div 
      [:p {:class "hint"} 
       "Staff members receive discounted admission."]
      [:p (or (:called-by @guest) (:given-name @guest))
       " is in the " 
       (or (:name (get staff/+departments+ 
                       (:staff-department @guest)))
           (:staff-department @guest)) 
       " Department."]
      [:button {:on-click (fn [_]
                            (swap! guest assoc :staff-department nil)
                            true)
                :class "false"}
       " ✗ Not a staff member"]]
     
     :else
     (let [tag-list [[:adult (str "🎫" (person-icon guest) " Adult"
                                  (if (lugal+-spouse? @guest)
                                    " (Lugal+ spouse discount)"
                                    ""))]]
           tag-list (if (nil? (:spouse @guest))
                      (conj 
                       (conj tag-list 
                             [:child "🎫🚸 Child (ages 5→17)"])
                       [:baby "🎫👶 Child (birth→4 years)"])
                      tag-list)]
       [:div 
        [radio/radio-set {:label "Ticket type"
                          :cursor guest
                          :key :ticket-type
                          :tags tag-list}]
        (when (not= :baby (:ticket-type @guest))
          [suggest-staff-apply guest])]))
   
   [:div "With currently-selected days, " 
    (util/format-money (ticket-price guest))]
   
   [marital-edit guest]
   (ed/close editing)])

(defn ticket-cell-icon [guest editing]
  [:div (ed/click-edit editing :ticket-type)
   (case (:ticket-type @guest)
     :child (abbr* "🎫🚸" "Child" "Children from ages 5 through 17")
     :baby (abbr* "🎫👶" "Baby" "Children from birth to 4 years old")
     (abbr* (str "🎫" (person-icon guest))
            "Adult" "Adults (18+)"))
   
   " "
   (cond
     (staff/lugal+? @guest)
     (abbr* "𒈗" "Lugal+" "Lugals head each department. This ticket type also
     includes Division Coördinators or members of the Board of Directors.")
     
     (lugal+-spouse? @guest)
     (abbr* (str "𒈗" (couple-icon guest (:spouse @guest))) "Lugal+ spouse"
            "Spouse of a lugal (or DC or board member)")
     
     (staff/staff? @guest) 
     (abbr* "⛤" "Staff" "General staff members (not a lugal)"))])

(defn ticket-cell [guest]
  (let [editing (atom false)]
    (fn [guest]
      [:td (if @editing
             [edit-ticket-cell guest editing]
             [ticket-cell-icon guest editing])])))

(defn editing-days-cell [guest editing]
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
   (ed/close editing)])

(defn fixed-days-cell [guest editing]
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
                       "Wednesday") "→Sunday")))])

(defn days-cell [guest]
  (let [editing (atom false)]
    (fn [guest]
      [:td (if @editing
             [editing-days-cell guest editing]
             [fixed-days-cell guest editing])])))

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
                                    [:cabin (str "🏡 Cabin bunk (" 
                                                 (util/format-money 
                                                  (cabin-price guest)) ")")]
                                    [:lodge (str "🏠 Lodge bunk ("
                                                 (util/format-money 
                                                  (lodge-price guest)) ")")] ]}]
          (ed/close editing)]
         [:div (ed/click-edit editing :sleep)
          (case (:sleep @guest)
            :cabin (abbr* "🏡" "Cabin camping")
            :lodge (abbr* "🏠" "Lodge camping")
            (abbr* "⛺" "Tent camping"))])])))

(defn food-cell [guest]
  (let [editing (atom false)]
    (fn [guest]
      [:td 
       (if @editing
         [:div {:class "pop-out"}
          [radio/radio-set {:label "Eating Arrangements"
                            :key :eat
                            :cursor guest
                            :tags [ 
                                   ;; (when 
                                   ;;     [:looney "🍱🐇 Looney Bin secret meal plan"])
                                   [:salad-bar
                                    (str "🍲 Bubbling Cauldron soup&salad bar only ("
                                         (util/format-money (:salad-bar @d/prices))
                                         ")")]
                                   [:cauldron
                                    (str "🍲🍴 Bubbling Cauldron meal plan ("
                                         (cond
                                           (= :child (:ticket-type @guest))
                                           (str (util/format-money (:child (:cauldron @d/prices)))
                                                " (*child)")
                                           (= :baby (:ticket-type @guest))
                                           (str (util/format-money (:under5 (:cauldron @d/prices)))
                                                " (*under 5)")
                                           :else
                                           (case (:days @guest)
                                             :day 
                                             (str (util/format-money (:fri-sun (:cauldron @d/prices)))
                                                  " (*one day)")
                                             :week-end 
                                             (str (util/format-money (:fri-sun (:cauldron @d/prices)))
                                                  " (*Fri→Sun)")
                                             (util/format-money (:adult (:cauldron @d/prices))))) 
                                         ")")]
                                   [nil "⃠ Bringing food along or eating with food vendors"] ]}]
          [:div "Price: " (util/format-money (cauldron-price guest))]
          (ed/close editing)]
         [:div (ed/click-edit editing :eat)
          (case (:eat @guest)
            :looney (abbr* "🍱🐇" "Looney Bin secret meal plan")
            :salad-bar (abbr* "🍲" "Bubbling Cauldron soup&salad bar only")
            :cauldron (abbr* "🍲🍴" "Bubbling Cauldron meal plan")
            nil (abbr* "⃠" "Bringing food along or eating with food vendors"))])])))

(defn t-shirt-cell [guest]
  (let [editing (atom false)]
    (fn [guest]
      [:td 
       (if @editing
         [:div {:class "pop-out"}
          [radio/radio-set {:label "Buy a Festival T-shirt"
                            :key :t-shirt
                            :cursor guest
                            :tags (conj
                                   merch/+t-shirt-long-names+
                                   [nil "🗽 Not buying a T-shirt"]) }]
          [:div (str "Price: " (util/format-money (merch/price-t-shirt)))]
          [:p {:class "hint"} "Buy other T-shirts and merchandise below, under "
           [:q "Extras."]]
          (ed/close editing)]
         
         [:div (ed/click-edit editing :t-shirt)
          (if (:t-shirt @guest)
            (abbr* (str "👕 " (merch/t-shirt-size-short-name (:t-shirt @guest)))
                   (str (:season @d/festival)
                        " "
                        (:year @d/festival)
                        " T-shirt, size "
                        (merch/t-shirt-size-long-name (:t-shirt @guest))))
            (abbr* "⃠" "No T-shirt"))])])))

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
          [:div (str "Price: " (util/format-money (merch/price-tote)))]
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
                                   [false "⃠ No coffee mug"]] }]
          [:div (str "Price: " (util/format-money (merch/price-coffee-mug)))]
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
      ;; (println "guest row for " @guest)
      [:tr
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
