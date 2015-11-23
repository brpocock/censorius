(ns censorius.guest 
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]

   [censorius.data :as d]
   [censorius.editable :as ed]
   [censorius.merch :as merch]
   [censorius.radio :as radio]
   [censorius.staff :as staff]
   [censorius.text :as text]
   [censorius.utils :as util]))

(defn abbr* [short & more]
  [:abbr {:title (str short ":  " (string/join " " more))}
   short])


(defn mmap [m f a] (->> m (f a) (into (empty m))))

(defn same-person? [one other]
  (and (= (:given-name @one) (:given-name @other))
       (= (:surname @one) (:surname @other))))

(defn person-icon [guest]
  (case (or (:gender @guest)
            (rand-nth [:m :f])) :m "👨" :f "👩"))

(defn guest-list []
  censorius.guest-list/guests)

(defn everyone-else-but [guest]
  (filter #(not (same-person? guest %))
          @(guest-list)))

(defn personal-address [guest]
  (str (case (:gender @guest)
         :m "Mr "
         :f "Ms "
         "")
       (or (:called-by @guest) (:given-name @guest)) " " (:surname @guest)))

(defn spouse [guest]
  #_ (util/log " guest " (personal-address guest) " married? " (if (:spouse @guest) "married" "no"))
  (when (:spouse @guest)
    (let [spouse (first (filter #(= (:spouse @%)
                                    (:spouse @guest))
                                (everyone-else-but guest)))]
      #_ (if spouse
           (util/log " found spouse " (personal-address spouse))
           (util/log " no spouse?"))
      spouse)))

(defn adult? [guest]
  (= :adult (:ticket-type @guest)))

(defn bachelor? [guest]
  (and (nil? (spouse guest))
       (adult? guest)))

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
  ([guest] (couple-icon [guest (spouse guest)])))

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
      :thu (:fri-sun (:cauldron @d/prices))
      :fri (:fri-sun (:cauldron @d/prices))
      :sat (:fri-sun (:cauldron @d/prices))
      :week-end (:fri-sun (:cauldron @d/prices))
      (:adult (:cauldron @d/prices)))))

(defn lugal+-spouse? [guest]
  (and (spouse guest)
       (staff/lugal+? (spouse guest))))

(defn child? [guest]
  (= :child (:ticket-type @guest)))

(defn baby? [guest]
  (= :baby (:ticket-type @guest)))

(defn ticket-price [guest]

  (cond
    (staff/lugal+? guest)
    0

    (staff/staff? guest)
    (:staff (:ticket @d/prices))

    (child? guest)
    (:child (:ticket @d/prices))

    (baby? guest)
    (:under5 (:ticket @d/prices))

    :else                               ; adult
    (case (:days @guest)
      :thu (:day-pass (:ticket @d/prices))
      :fri (:day-pass (:ticket @d/prices))
      :sat (:day-pass (:ticket @d/prices))
      :week-end (:week-end (:ticket @d/prices))
      (if (lugal+-spouse? guest)
        (:staff (:ticket @d/prices))
        (:adult (:ticket @d/prices))))))

(defn cabin-price [guest]
  ((if (or (staff/staff? guest)
           (lugal+-spouse? guest)
           (and (not (adult? guest))
                (some staff/lugal+? @(guest-list)))) 
     :staff :regular)
   (:cabin @d/prices)))

(defn lodge-price [guest]
  ((if (or (staff/staff? guest)
           (lugal+-spouse? guest)
           (and (not (adult? guest))
                (some staff/lugal+? @(guest-list)))) 
     :staff :regular)
   (:lodge @d/prices)))

(defn sleep-price [guest]
  (case (:sleep @guest)
    :cabin (cabin-price guest)
    :lodge (lodge-price guest)
    0))

(defn price [guest]
  (if guest
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
         0))
    (do
      #_ (util/log "nil guest?")
      0.10)))

(defn unmarried-lugal+? [guest]
  (and (= :adult (:ticket-type @guest))
       (staff/lugal+? guest)
       (bachelor? guest)))

(defn married-line [from to]
  [:span (if (and from to)
           (str (couple-icon from to) " " (case (:gender @from)
                                            :m "husband"
                                            :f "wife"
                                            "partner")
                " of " (if (staff/lugal+? to) "𒈗 " "") (personal-address to))
           "")])

(defn legal-name [guest]
  (str (:given-name @guest) " " (:surname @guest)))

(defn make-couple-symbol [one other]
  (util/gensymreally (str "marriage-" (:surname @one) "+" (:surname @other) "/" (rand 100))))

(defn marry! [one other]
  (when (and (bachelor? one)
             (bachelor? other)
             (not (same-person? one other)))
    (let [marriage (make-couple-symbol one other)]
      (swap! one assoc :spouse marriage)
      (swap! other assoc :spouse marriage))))

(defn divorce! [one other]
  (if (or (and (= (.toLowerCase (:given-name @one)) "bruce-robert")
               (= (.toLowerCase (:given-name @other)) "john"))
          (and (= (.toLowerCase (:given-name @other)) "bruce-robert")
               (= (.toLowerCase (:given-name @one)) "john")))
    (js/alert "Yeah, no way.

♥ You're stuck with me, Mr Fenn Pocock. ☺ ♥")

    (do (swap! one assoc :spouse nil)
        (swap! other assoc :spouse nil))))



(defn divorce-box [guest spouse]
  [:div {:key "divorce-from-lugal"
         :style {:display (if spouse "block" "none")}}
   [:label [:input {:type "checkbox"
                    :on-change #(divorce! guest spouse)
                    :name (str name "/spouse")
                    :checked true}]
    [married-line guest spouse]]
   [:p {:class "hint"
        :style {:display (if (lugal+-spouse? guest)
                           "block" "none")}}
    "The spouse of a Lugal staff member receives discounted admission."]])

(defn eligible-bachelors-for [guest]
  #(and (adult? %)
        (bachelor? %)
        (not (same-person? guest %))))

(defn lugal-kid [guest]
  [:div {:key "lugal-kid"
         :style {:display (if (not (adult? guest))
                            "block" "none")}}
   [:p {:class "hint"}
    "Discounted (child) admission with adult admission."]])

(defn proposal [guest bachelor]
  [:div
   [:label {:key (str "marry-" (or (:called-by @bachelor)
                                   (:given-name @bachelor))
                      "-" (:surname @bachelor))}
    [:input {:type "checkbox"
             :on-change #(marry! guest bachelor)
             :name (util/gensymreally (str name "/marry"))
             :checked false}]
    [married-line guest bachelor]]])

(defn marry-someone [guest bachelors]
  [:fieldset {:style {:display (if (and (bachelor? guest)
                                        (pos? (count bachelors))
                                        (some staff/lugal+? @(guest-list)))
                                 "block" "none")}}
   [:legend "Spouse/Partner?"]
   [:div {:class "hint"
          :style {:display (if (some (partial staff/lugal+?) bachelors)
                             "block" "none")}}
    "A Lugal (or DC/BoD) staff member's spouse or domestic partner
                 receives a discounted admission."]
   (map (partial proposal guest) bachelors)])

(defn marital-edit [guest]
  (let [bachelors (filter (eligible-bachelors-for guest)
                          @(guest-list))
        spouse (spouse guest)]
    [:div
     [lugal-kid guest]
     [divorce-box guest spouse]
     [marry-someone guest bachelors]]))

(defn name-edit-box [guest children this]
  [:div
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
  [:section {:class "card"
             :style {:display (if (:staff-apply? guest)
                                "block" "none")}
             :key (legal-name guest)}
   [:h3 (str "Staff Application: " (legal-name guest))]
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
                     :keys :id-number
                     :label "Driver's License or State ID number"
                     :rows 1}]
   [text/text-input {:cursor guest
                     :keys :id-state
                     :label "State of issue of ID"
                     :rows 1}]
   [:label [:input {:type "checkbox"
                    :on-click #(swap! guest assoc :driver? (not (:driver? @guest)))
                    :checked (:driver? @guest)}]
    "Licensed driver"]
   [text/text-input {:cursor guest
                     :keys :social-network
                     :label "Social group info"
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
                     :keys :staff-tue-sun
                     :label "All  staff are expected to  be on-site from
                          Tuesday, until  the entire  camp is  packed up
                          Sunday afternoon/evening. Would  this pose any
                          problems for you?"
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
   [:p "Staff applications are submitted with your registration."]])

(defn staff-applications []
  [:div (doall (map staff-application (filter adult? @(guest-list))))])

(defn staff-department-select [guest editing? editing-email?]
  [:fieldset {:style {:display (if (and (not (staff/staff? guest))
                                        (:staff-verify? @guest))
                                 "block" "none")}}
   [:legend "Already a staff member?"]
   (str "Please select the name of "
        (or (:called-by @guest)
            (:given-name @guest)) "'s department.")
   [:p {:class "hint"} "A Lugal, DC, or member of the Board should "
    [:em "instead of this "]
    [:a {:href "#"
         :on-click (fn [event]
                     (reset! ed/nightshade? false)
                     (reset! editing? false)
                     (reset! editing-email? true))}
     "set their eMail address."]]
   [radio/radio-set {:cursor guest
                     :key :staff-department
                     :label "Department"
                     :tags (conj (doall (map (fn [[dept-label {:keys [name]}]]
                                               [dept-label name])
                                          staff/+departments+))
                                 [nil (str (or (:called-by @guest)
                                               (:given-name @guest)) "  is not on staff")])}]
   [:button {:on-click #(swap! guest assoc :staff-verify? false)
             :style {:display (if (:staff-verify? guest)
                                "block" "none")}}
    "←"]])


(defn staff-apply-hint [guest editing?]
  [:fieldset {:style {:display (if (and (adult? guest)
                                        (not (staff/staff? guest))
                                        (not (:staff-apply? @guest))
                                        (not (:staff-verify? @guest)))
                                 "block" "none")}}
   [:legend "Join the Staff!"]
   [:p {:class "hint"}
    "Join the FPG staff for discounted admission and more. Give back to the community too!"]

   [:ul
    [:li [:button
          {:on-click #(do (swap! guest assoc :staff-apply? true)
                          (reset! editing? false ))}
          "Apply now"]]
    [:li [:button
          {:on-click #(swap! guest assoc :staff-verify? true)}
          "Already on Staff"]]]])

(defn suggest-staff-apply [guest editing? editing-email?]
  [:div {:style {:display (if (and (adult? guest)
                                   (not (staff/lugal+? guest))
                                   (:staff-apply? @guest))
                            "block" "none")}}
   [:fieldset [:legend "Apply for a staff position"]
    [:p "Fill out the staff application, below, if you'd like to help "]
    "For questions about staff applications, send an eMail to "
    [:a {:href "mailto:staffing@flapagan.org&subject=Application+for+staff+position"}
     "staffing@flapagan.org"]
    [:button {:on-click #(swap! guest assoc :staff-apply? false)}
     "←"]] ])


(defn remove-guest [guest]
  (when (js/confirm (str "Remove "
                         (or (:called-by @guest) (:given-name @guest))
                         " from your party?"))
    (swap! (guest-list) mmap remove (fn [it] (= (deref it) @guest)))))

(defn name-cell [guest]
  (let [editing? (atom false)]
    (fn [guest]
      [:td (if @editing?

             [:div {:class "pop-out"}
              [name-edit-box guest]

              [:div {:style {:display (if (< 1 (count @(guest-list)))
                                        "block"
                                        "none")}}
               [:button {:class "false"
                         :on-click #(remove-guest guest)}
                "Remove from party"]]
              (ed/close editing?)]

             [:div (ed/click-edit editing? :name)
              [:abbr {:title (str (:given-name @guest)
                                  " "
                                  (if-let [nick (:called-by @guest)]
                                    (str "“" nick "”")
                                    "")
                                  " "
                                  (:surname @guest))}
               [:big (or (:called-by @guest)
                         (:given-name @guest))] ]])])))

(defn email-cell [guest editing?]
  [:td
   (if (adult? guest)
     (if @editing?
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
        (ed/close editing?) ]
       [:div (ed/click-edit editing? :mail)
        (if-let [mail (:e-mail @guest)]
          (abbr* "✉" mail)
          (abbr* "⃠" "No e-mail address"))])
     (abbr* "—" "We do not e-mail children"))])

(defn phone-cell [guest]
  (let [editing? (atom false)]
    (fn [guest]
      [:td
       (if (adult? guest)
         (if @editing?
           [:div {:class "pop-out"}
            [text/text-input {:cursor guest
                              :keys :telephone
                              :label "Phone number"
                              :placeholder "(305) 555-1234"
                              :format util/format-phone
                              :validate util/phone-number?
                              :rows 1}]
            (ed/close editing?)]
           [:div  (ed/click-edit editing? :phone)
            (if-let [phone (:telephone @guest)]
              (abbr* "📞" phone)
              (abbr* "⃠" "No telephone number"))])
         (abbr* "—" "We do not telephone children"))])))

(defn staff-discount-applied-box [guest]
  [:div {:style {:display (if (:staff-department @guest)
                            "block" "none")}}
   [:p {:class "hint"}
    "Staff members receive discounted admission."]
   [:p (or (:called-by @guest) (:given-name @guest))
    " is in the "
    (or (:name (get staff/+departments+ (:staff-department @guest)))
        (util/keyword->string (:staff-department @guest))
        "?")
    " Department."]
   [:button {:on-click (fn [event]
                         (swap! guest assoc :staff-department nil)
                         (.stopPropagation event))
             :class "false"}
    " ✗ Not a staff member"]])

(defn lugal+-discount-applied [guest]
  [:div {:style {:display (if (staff/lugal+? guest)
                            "block" "none")}}
   [:h3 {:style {:font-size "48pt"}}
    "𒈗 Lugal+"]
   [:p {:class "hint"} "As a Lugal (or DC/BoD) staff member, your admission
            is free. You may also admit your spouse at a discounted rate, and
            apply discounted rates to spouse and children's cabin or
            lodge bunks."]])

(defn edit-ticket-cell [guest editing? editing-email?]
  [:div {:class "pop-out"}
   [lugal+-discount-applied guest]
   [staff-discount-applied-box guest]
   (let [tag-list [[:adult (str "🎫" (person-icon guest) " Adult"
                                (if (lugal+-spouse? guest)
                                  " (Lugal+ spouse discount)"
                                  ""))]]
         tag-list (if (or (bachelor? guest)
                          (not (adult? guest)))
                    (conj (conj tag-list
                                [:child "🎫🚸 Child (ages 5→17)"])
                          [:baby "🎫👶 Child (birth→4 years)"])
                    ;; married: no becoming a kid.
                    tag-list)]
     [:div {:style {:display (if (staff/staff? guest)
                               "none" "block")} }
      [radio/radio-set {:label "Ticket type"
                        :cursor guest
                        :key :ticket-type
                        :tags tag-list}]
      [suggest-staff-apply guest editing? editing-email?]
      [staff-department-select guest editing? editing-email?]
      [staff-apply-hint guest editing?]])

   [marital-edit guest]
   [:div "With current selections: "
    (util/format-money (ticket-price guest))]
   
   (ed/close editing?)])

(defn ticket-cell-icon [guest editing?]
  [:div (ed/click-edit editing? :ticket-type)
   (cond
     (child? guest) (abbr* "🎫🚸" "Child" "Children from ages 5 through 17")
     (baby? guest) (abbr* "🎫👶" "Baby" "Children from birth to 4 years old")

     (staff/staff? guest)
     (abbr* "⛤" "Staff" "General staff members (not a lugal)")

     (staff/lugal+? guest)
     (abbr* (str "🎫" (person-icon guest) "𒈗")
            "Lugal+" "Lugals head each department. This ticket type also
     includes   Division   Coördinators   or  members   of   the   Board
     of Directors.")

     (lugal+-spouse? guest)
     (abbr* (str "𒈗" (couple-icon guest (spouse guest))) "Lugal+ spouse"
            "Spouse of a lugal (or DC or board member)")

     :else (abbr* (str "🎫" (person-icon guest))
                  "Adult" "Adults (18+)"))])

(defn ticket-cell [guest editing-email?]
  (let [editing? (atom false)]
    (fn [guest]
      [:td (if @editing?
             [edit-ticket-cell guest editing? editing-email?]
             [ticket-cell-icon guest editing?])])))

(defn staff-days []
  [:h5 "Tuesday→Sunday"
   [:p {:class "hint"}
    "Staff  members  are always  a  full  week admission.  All  staff
       members are expected on-site on Tuesday."]])

(defn editing-days-cell [guest editing?]
  [:div {:class "pop-out"}
   (if (staff/staff? guest)
     [staff-days]
     [radio/radio-set {:label "Days attending"
                       :key :days
                       :cursor guest
                       :tags [[nil "🗷🗷🗷🗷🗷 Wednesday→Sunday" ]
                              [:week-end "☐☐🗷🗷🗷 Friday→Sunday"]
                              [:thu "□☐☐🗷□ Thursday Day Pass"]
                              [:fri "□☐☐🗷□ Friday Day Pass"]
                              [:sat "□☐☐🗷□ Saturday Day Pass"]]}])
   (ed/close editing?)])

(defn fixed-days-cell [guest editing?]
  [:div (ed/click-edit editing? :days)
   (abbr* (case (:days @guest)
            :thu "Thu"
            :fri "Fri"
            :sat "Sat"
            :week-end "Fri→Sun"
            nil (str (if (staff/staff? guest)
                       "Tue"
                       "Wed")
                     "→Sun"))
          (case (:days @guest)
            :thu "Thursday"
            :fri "Friday"
            :sat "Saturday"
            :week-end "Week-end only, Friday→Sunday"
            nil (str "Full week, "
                     (if (staff/staff? guest)
                       "Tuesday"
                       "Wednesday") "→Sunday")))])

(defn days-cell [guest]
  (let [editing? (atom false)]
    (fn [guest]
      [:td (if @editing?
             [editing-days-cell guest editing?]
             [fixed-days-cell guest editing?])])))

(defn lodging-cell [guest]
  (let [editing? (atom false)]
    (fn [guest]
      [:td
       (if @editing?
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
          [:p {:class "hint"}
           (case (:sleep @guest)
             :cabin
             "Cabin  bunks  include  access   to  that  cabin's  private
             bathroom, including showers (often wheelchair-accessible)."
             :lodge
             "Lodge  bunks  include  access   to  that  lodge's  private
             bathroom, including  bath or shower, and  the kitchen (with
             range,  oven, sink,  and refrigerator;  but bring  your own
             pots, pans, plates, silver, etc.)"

             [:span "Tent camping is permitted in the Forest, around the cabins
             and lodges, or in the special " [:q "Quiet Area"]
              "  around the  Emerald City.  Tent campers  have access  to
             four (2 ♂,  2 ♀) public showers near the  pool, and daytime
             access to showers near Vendors' Row."])]
          [:div {:style {:display (if (#{:cabin :lodge} (:sleep @guest))
                                    "block" "none")}}
           [text/text-input {:label (fn [] (str (if (= :cabin (:sleep @guest))
                                                  "Cabin" "Lodge") " assignment request"))
                             :keys :cabin-request
                             :cursor guest
                             :placeholder "Any"
                             :size 16
                             :rows 1}]
           [:p {:class "hint"
                :style {:display (if (= :cabin (:sleep @guest))
                                   "block" "none")}}
            [:big {:style {:height "2 em"}} "♿"]
            "Cabin H is particularly well equipped for handicapped access."]]
          (ed/close editing?)]
         [:div (ed/click-edit editing? :sleep)
          (case (:sleep @guest)
            :cabin (abbr* "🏡" "Cabin camping")
            :lodge (abbr* "🏠" "Lodge camping")
            (abbr* "⛺" "Tent camping"))])])))

(defn food-cell [guest]
  (let [editing? (atom false)]
    (fn [guest]
      [:td
       (if @editing?
         [:div {:class "pop-out"}
          #_ [:p "A meal plan from Curbside Café can be purchased from them directly. Contact "
              [:a {:href "mailto:vendors@flapagan.org?subject=FPG+Beltane+2016+food+vendor+relay"} "Curbside Café"]
              " directly to make arrangements."]
          [:p "You may cook outdoors, or,  "
           (if (= :lodge (:sleep @guest))
             "since you're staying in a Lodge, "
             "if you change to a Lodge registration, ")
           "in  the lodge's  kitchen. "
           (if (= :cabin (:sleep @guest))
             "Cooking  is not  permitted inside  the Cabins, but you can bring a grill and cook outside. "
             "")]
          [:p "There  are numerous  stores and  restaurants nearby  in Lake
Wales, as well. "
           [:a {:href "https://www.google.com/maps/search/food/@27.8884748,-81.51927,11z/data=!3m1!4b1!4m8!2m7!3m6!1sfood!2sRetreats+by+The+Lake,+2819+Tiger+Lake+Rd,+Lake+Wales,+FL+33898!3s0x88dda4f089ba2327:0x654253b8021d0691!4m2!1d-81.375796!2d27.901445/"
                :target "food-map-window"}
            "(view map)"]]
          #_
          [radio/radio-set {:label "Eating Arrangements"
                            :key :eat
                            :cursor guest
                            :tags [ [:salad-bar
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
                                             :thu
                                             (str (util/format-money (:fri-sun (:cauldron @d/prices)))
                                                  " (*one day)")
                                             :fri
                                             (str (util/format-money (:fri-sun (:cauldron @d/prices)))
                                                  " (*one day)")
                                             :sat
                                             (str (util/format-money (:fri-sun (:cauldron @d/prices)))
                                                  " (*one day)")
                                             :week-end
                                             (str (util/format-money (:fri-sun (:cauldron @d/prices)))
                                                  " (*Fri→Sun)")
                                             (util/format-money (:adult (:cauldron @d/prices)))))
                                         ")")]
                                   [nil "⃠ Bringing food along or eating with food vendors"] ]}]
          [:div "Price: " (util/format-money (cauldron-price guest))]
          (ed/close editing?)]
         [:div (ed/click-edit editing? :eat)
          (case (:eat @guest)
            :looney (abbr* "🍱🐇" "Looney Bin secret meal plan")
            :salad-bar (abbr* "🍲" "Bubbling Cauldron soup&salad bar only")
            :cauldron (abbr* "🍲🍴" "Bubbling Cauldron meal plan")
            nil (abbr* #_ "⃠" "—" "Bringing food along or eating with food vendors"))])])))

(defn t-shirt-cell [guest]
  (let [editing? (atom false)]
    (fn [guest]
      [:td
       (if @editing?
         [:div {:class "pop-out"
                :key "t-shirt"}
          [radio/radio-set {:label "Buy a Festival T-shirt"
                            :key :t-shirt
                            :cursor guest
                            :tags (conj (map (fn [[tag label]]
                                               [tag (str "👕 " label)]) 
                                          merch/+t-shirt-long-names+)
                                        [nil "🗽 Not buying a T-shirt"]) }]
          [:div (if (adult? guest)
                  ""
                  [:p {:class "hint"}
                   "Note: T-shirts are in adult sizes."])]
          [:div (str "Price: " (util/format-money (merch/price-t-shirt)))]
          [:p {:class "hint"} "Buy other T-shirts and merchandise below, under "
           [:q "Extras."]]
          (ed/close editing?)]

         [:div (ed/click-edit editing? :t-shirt)
          (if (:t-shirt @guest)
            (abbr* (str "👕 " (merch/t-shirt-size-short-name (:t-shirt @guest)))
                   (str (:season @d/festival)
                        " "
                        (:year @d/festival)
                        " T-shirt, size "
                        (merch/t-shirt-size-long-name (:t-shirt @guest))))
            (abbr* "⃠" "No T-shirt"))])])))

(defn tote-bag-cell [guest]
  (let [editing? (atom false)]
    (fn [guest]
      [:td [:div {:class "pop-out"
                  :style {:display (if @editing? "block" "none")}}
            [radio/radio-set {:label "Buy a Festival Tote Bag"
                              :cursor guest
                              :key :tote?
                              :tags [[true "💼 Tote bag"]
                                     [false "⃠ No tote bag"]] }]
            [:div (str "Price: " (util/format-money (merch/price-tote)))]
            [:p {:class "hint"}
             "Buy other merchandise below, under "
             [:q "Extras."]]
            (ed/close editing?)]
       [:div (ed/click-edit editing? :tote)
        (if (:tote? @guest)
          (abbr* "💼" "Tote Bag")
          (abbr* "⃠" "No tote mug"))]])))

(defn mug-cell [guest]
  (let [editing? (atom false)]
    (fn [guest]
      [:td
       [:div {:class "pop-out"
              :style {:display (if @editing? "block" "none")}}
        [radio/radio-set {:label "Buy a Festival Coffee Mug"
                          :key :coffee?
                          :cursor guest
                          :tags [[true "🍺 Coffee Mug"]
                                 [false "⃠ No coffee mug"]] }]
        [:div (str "Price: " (util/format-money (merch/price-coffee-mug)))]
        [:p {:class "hint"}
         "Buy other merchandise below, under "
         [:q "Extras."]]
        (ed/close editing?)]
       [:div (ed/click-edit editing? :coffee)
        (if (:coffee? @guest)
          (abbr* "🍺" "Coffee Mug")
          (abbr* "⃠" "No coffee mug"))]])))

(defn bought-merch? [guest-atom]
  (let [guest (deref guest-atom)]
    (or (:t-shirt guest)
        (:coffee? guest)
        (:tote? guest))))

(defn guest-row [guest]
  (let [editing-email? (atom (not (pos? (count @(guest-list)))))]
    [:tr {:key (personal-address guest)
          :style {:border (cond
                            (> 5000 (:added @guest)) "3pt solid green"
                            (> 1000 (:added @guest)) "2pt dotted green"
                            :else "none")}}
     [name-cell guest]
     [email-cell guest editing-email?]
     [phone-cell guest]
     [ticket-cell guest editing-email?]
     [days-cell guest]
     [lodging-cell guest]
     [food-cell guest]
     [t-shirt-cell guest]
     [tote-bag-cell guest]
     [mug-cell guest]]))
