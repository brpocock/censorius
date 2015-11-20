(ns censorius.guest-list
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]
   
   [censorius.data :as d]
   [censorius.text :as text]
   [censorius.staff :as staff]
   [censorius.utils :as util]))

(defonce guests (reagent/atom 
                 [ (reagent/atom { :called-by "Sage"
                                  :given-name "John"
                                  :surname "Fenn Pocock"
                                  :formal-name nil
                                  :presenter-bio nil
                                  :presenter-requests nil
                                  :e-mail "sage@star-hope.org"
                                  :telephone nil
                                  :sleep :tent
                                  :eat nil
                                  :day nil
                                  :gender :m
                                  :ticket-type :adult
                                  :t-shirt :xs
                                  :coffee? false
                                  :tote? false })
                  (reagent/atom { :called-by nil
                                 :given-name "Bruce-Robert"
                                 :surname "Fenn Pocock"
                                 :formal-name nil
                                 :presenter-bio nil
                                 :presenter-requests nil
                                 :e-mail "brpocock@star-hope.org"
                                 :telephone nil
                                 :sleep :tent
                                 :eat nil
                                 :day nil
                                 :gender :m
                                 :ticket-type :adult
                                 :t-shirt :s
                                 :coffee? false
                                 :tote? false })]))
(util/log "Seeded guest list : " @guests)

(defn need-adult-email []
  (empty? (filter #(and (= :adult (:ticket-type @%))
                        (util/email? (:e-mail @%))) 
                  @guests)))

(defn strip-final-number [string]
  (cond (< (count string) 4)
        string
        (some #{\0 \1 \2 \3 \4 \5 \6 \7 \8 \9 \-} (.substring string (- (count string) 1)))
        (strip-final-number (.substring string 0 (- (count string) 2)))
        (= (.substring string (- (count string) 3)) "-Jr")
        (.substring string 0 (- (count string) 3))
        (= (.substring string (- (count string) 3)) "-Sr")
        (.substring string 0 (- (count string) 3))
        :else
        string))

(defn adults-needed []
  (let [babies (count (filter #(= :baby (:ticket-type %)) @guests))
        children (count (filter #(= :child (:ticket-type %)) @guests))
        adults (count (filter #(= :adult (:ticket-type %)) @guests))]
    [(+ babies (if (pos? children) 1 0)) 
     adults children babies]))

(defn purchased-for-guests 
  ([id] (case id
          :coffee
          (count (filter #(:coffee? @%) @guests))
          :tote-bag
          (count (filter #(:tote? @%) @guests))
          :festival-shirt
          (count (filter #(:t-shirt @%) @guests))
          0))
  ([id style]
   (if (= id :festival-shirt)
     (count (filter (partial = style) (map (comp deref :t-shirt) @guests)))
     (purchased-for-guests id))))

(defn guess-gender [name]
  (case name
    "Amanda" :f
    "Andrew" :m
    "Ann" :f
    "Ann-Marie" :f
    "Beth" :f
    "Bobbi" :f
    "Bobbi-Jo" :f
    "Brian" :m
    "Brianna" :f
    "Bruce-Robert" :m
    "Bruce-robert" :m
    "Catherine" :f
    "Christopher" :m
    "Cliff" :m
    "Connue" :f
    "Constance" :f
    "Dave" :m
    "David" :m
    "Dawn" :f
    "Debora" :f
    "Deborah" :f
    "Debra" :f
    "Diana" :f
    "Diane" :f
    "Dick" :m
    "Donavon" :m
    "Donna" :f
    "Donovan" :m
    "Doug" :m
    "Douglas" :m
    "Elizabeth" :f
    "Ellen" :f
    "Eric" :m
    "Erick" :m
    "Erik" :m
    "Erin" :f
    "Evan" :m
    "Faith" :f
    "George" :m
    "Geoffrey" :m
    "Georgiana" :f
    "Georgianna" :f
    "Heather" :f
    "Holly" :f
    "Jackie" :f
    "Jacqueline" :f
    "Jade" :f
    "James" :m
    "Jayden" :m
    "Jeffrey" :m
    "Jennifer" :f
    "Jessica" :f
    "Jo" :f
    "Joe" :m
    "John" :m
    "Joseph" :m
    "Josephine" :f
    "Katrina" :f
    "Laura" :f
    "Lauren" :f
    "Laurie" :f
    "Leigh" :f
    "Lori" :f
    "Mark" :m
    "Mary" :f
    "Mandy" :f
    "Melissa" :f
    "Millicent" :f
    "Morgana" :f
    "Narissa" :f
    "Nikko" :m
    "Orianna" :f
    "Patrick" :m
    "Paul" :m
    "Penny" :f
    "Rachel" :f
    "Randy" :m
    "Rene" :m
    "Renee" :f
    "René" :m
    "Renée" :f
    "Richard" :m
    "Ricardo" :m
    "Rick" :m
    "Roberta" :f
    "Roger" :m
    "Robin" :m
    "Ruth" :f
    "Sara" :f
    "Sandra" :f
    "Sarah" :f
    "Scarlet" :f
    "Scott" :m
    "Sean" :m
    "Seán" :m
    "Shaun" :m
    "Shawn" :m
    "Shellie" :f
    "Soren" :f
    "Steven" :m
    "Stephen" :m
    "Stephanie" :f
    "Stewart" :m
    "Stuart" :m
    "Suanne" :f
    "Susan" :f
    "Tami" :f
    "Tammy" :f
    "Teresa" :f
    "Thayne" :m
    "Tina" :f
    "Troy" :m
    "Wilsner" :m
    nil))

(defn guess-nickname [given surname]
  (cond
    (or (and (= given "John") (= surname "Fenn Pocock"))
        (and (= given "John") (= surname "Pocock")))
    "Sage"
    
    (and (= given "Suanne") (= surname "Gould"))
    "Mystral"
    
    (and (= given "John") (= surname "Gould"))
    "Thor"))

(defn add-to-party! [new-name]
  (fn [event]
    (let [name (:new-name-entered @new-name)
          name-parts (string/split (string/trim name) #"\s+")
          [given surname] (cond (= 2 (count name-parts))
                                [(first name-parts) (second name-parts)]
                                
                                (and (= 1 (count name-parts))
                                     (not (empty? @guests)))
                                [(first name-parts) (:surname (deref (first @guests)))]
                                
                                (= 1  (count name-parts))
                                ["" ""]
                                
                                :else
                                [(first name-parts) (string/join " " (rest name-parts))])]
      (if (or (empty? given)
              (empty? surname))
        (js/alert "Please enter the person's legal given (first) name and surname (family name). EG: “John Doe”")
        
        (let [num-given (count (filter #(and (= given 
                                                (strip-final-number (:given-name (deref %))))
                                             (= surname (:surname (deref %)))) 
                                       @guests))
              ]
          (if (pos? num-given)
            (js/alert (str "I'm sorry: We can't actually handle two party members with exactly the same given & surnames.
For now, could you please put down the additional “" 
                           given " " surname 
                           "” with a number, or a -Jr, on their given name? Like: “" 
                           given "-Jr " surname "” or “" 
                           given (inc num-given) " " surname 
                           "”?  Sorry for the inconvenience ☹ (~brfp)"))
            (do 
              #_ (util/log "given " given " surname " surname)
              (reset! new-name {:new-name-entered ""})
              (if (empty? @guests)
                (do
                  (js/alert "Welcome! Now that you've added yourself, click each of the table cells to plan your Festival. 

(For example, click on your name first, then work your way across the columns.)

Add other members of your party, and watch the Assistant box for advice.")
                  (reset! guests  [(atom {:called-by (guess-nickname given surname) :given-name given :surname surname
                                          :e-mail nil :telephone nil
                                          :ticket-type :adult :staff-department nil
                                          :sleep :tent :eat nil
                                          :gender (guess-gender given)
                                          :t-shirt nil :coffee? false :tote? false})]))
                (let [leader @(first @guests)]
                  (swap! guests conj (atom {:called-by (guess-nickname given surname) :given-name given :surname surname
                                            :e-mail nil :telephone nil
                                            :ticket-type :adult :staff-department nil
                                            :sleep (:sleep leader) :eat (:eat leader)
                                            :gender (guess-gender given)
                                            :t-shirt nil :coffee? false :tote? false})))))))))))

(defn suggest-partner-name [guest]
  (case (:given-name @guest)
    "John" "Jane"
    "Adam" "Yves"
    "Jennifer" "Eric"
    "Eric" "Jennifer"
    "Paul" "Ann-Marie"
    "Ann-Marie" "Paul"
    "Theresa" "James"
    "Orianna" "James"
    "James" "Theresa"
    "Dawn" "Scott"
    "Scott" "Dawn"
    "John"))

(defn have-guests []
  (pos? (count @guests)))

(defn add-person-row [_ children this]
  (let [new-name (atom  {:new-name-entered ""})]
    (reagent/create-class
     {:reagent-render
      (fn [_ children this]
        #_ (util/log " Add person row to " (count @guests) " guests")
        (let [name$ (:new-name-entered @new-name)
              named? (and name$
                          (string? name$)
                          (not (string/blank? name$)))]
          [:tr {:key (if (empty @guests) "☠|add-first|" "☠|add-next|")
                :class "no-print"}
           [:td {:col-span 10
                 :style {:border "2pt solid black"
                         :border-radius "1ex"
                         :padding "8pt"}}
            (when (empty? @guests)
              [:div {:key (str "add-person-1") :class "no-print"}
               #_ (util/log " • first person intro")
               [:h3 "To get started:"]
               [:p [:big "Enter your first and last name, "]
                [:small "or the first and last name of the party's “leader.”
                Your registration will be “filed under” this person's
                name. "]]
               [:p "Please use your legal first name and surname as they appear on your ID. " 
                [:small "(If you have two first names, enter them with a
               hyphen: Bruce-Robert, Ann-Marie, Billy-Bob.)"]]])
            [text/text-input {:cursor new-name
                              :keys :new-name-entered
                              :label (fn [] (if (empty? @guests) 
                                              "Start with this person"
                                              "Add this person"))
                              :placeholder 
                              (fn [] (str (or (first 
                                               (filter (fn [name]
                                                         #_ (util/log "• anybody named " name " in " (map #(:given-name @%) @guests) "?")
                                                         (not (some #(= name %) 
                                                                    (map #(:given-name @%) @guests)))) 
                                                       (concat
                                                        (map suggest-partner-name @guests)
                                                        (list "John"
                                                              "Amy" "Brian" "Charlie" "David" "Elizabeth"
                                                              "Frank" "Gerri" "Harry" "Ingrid" "Jack"
                                                              "Kyle" "Laurel" "Michael" "Nancy" "Oscar"
                                                              "Peter" "Quentin" "Rose" "Sharon" "Tyler"
                                                              "Uma" "Vladimir" "Wilmena" "Xavier" "Zach"))))
                                              "John") 
                                          " "
                                          (if (or (empty? @guests)
                                                  (empty? (:surname (deref (first @guests)))))
                                            "Doe"
                                            (:surname (deref (first @guests))))))
                              :format util/name-case
                              :validate (fn [new-name] 
                                          (reagent/force-update-all)
                                          (and (util/a-name? new-name)
                                               (not (some #(or (= (str (:given-name %) " " (:surname %))
                                                                  new-name)
                                                               (= (:given-name %) new-name))
                                                          @guests))))
                              :rows 1}]
            " \u00a0 \u00a0 \u00a0 "
            [:button
             {:on-click (add-to-party! new-name)
              :class (str (if named?
                            (if (have-guests)
                              "true"
                              "true urgent")
                            "disabled"))}
             (str (if named? "+" "✗") " Add to party")]]]))})))



(defn guests-thead []
  [:thead
   [:tr [:th (util/abbr "Name" "Name of each party member")]
    [:th (util/abbr "✉" "eMail")]
    [:th (util/abbr "📞" "Phone#")]
    [:th (util/abbr "🚸" "Ticket" "The type of ticket — adult or child")]
    [:th (util/abbr "📅" "Days")]
    [:th (util/abbr "⛺/🏠" "Sleep" "The lodging for each person: tent, cabin, or lodge bed.")]
    [:th (util/abbr "🍲🍴" "Meals" "Purchase the Bubbling Cauldron meal plan here.")]
    [:th (util/abbr "👕" "T-Shirt" "FPG T-shirt for this Festival. (Buy other shirts in the “Extras” box)")]
    [:th (util/abbr "💼" "Tote" "FPG tote bags")]
    [:th (util/abbr "🍺" "Mug" "FPG 20th Anniversary hot & cold beverage mugs. (Buy more mugs in the “Extras” box)")]]])

(defn address-couple [one-person other-person]
  (if (= (:surname @one-person) (:surname @other-person))
    (str (cond (= (:gender @one-person) (:gender @other-person) :m)
               "Messrs "
               (= (:gender @one-person) (:gender @other-person) :f)
               "Mtrss "
               (or (nil? (:gender @one-person)) (nil? (:gender @other-person)))
               ""
               :else
               (case (:gender @one-person)
                 :m "Mr & Ms "
                 :f "Ms & Mr "))
         (or (:called-by @one-person) (:given-name @one-person))
         " & "
         (or (:called-by @other-person) (:given-name @other-person))
         " "
         (:surname @one-person))
    (str (case (:gender @one-person)
           :m "Mr "
           :f "Ms "
           "") 
         (or (:called-by @one-person) (:given-name @one-person)) " " (:surname @one-person)
         " & "
         (case (:gender @other-person)
           :m "Mr "
           :f "Ms "
           "") 
         (or (:called-by @other-person) (:given-name @other-person)) " " (:surname @other-person))))

(defn address-mixed-party [leader guests] 
  (if (every? #(= (:surname @%) (:surname @leader)) @guests)
    (str "The " (:surname @leader) " Party of " (util/counting (count @guests) "Guest"))
    (str (guest/personal-address leader)
         " &  " (util/counting (- (count @guests) 1) "Guest"))))

(defn party-title []
  [:span (let [leader (first @guests)]
           (case (count @guests)
             0
             "New Party: Please Register"
             
             1
             (personal-address leader)
             
             2
             (address-couple leader (second @guests))
             
             (address-mixed-party leader guests)))])


(defn count-adults []
  (count (filter #(= (:ticket-type @%) :adult) @guests)))

(defn guest-list-box-title []
  [:h1 "Registration for TEG FPG " (:season @d/festival) " " (:year @d/festival)
   (util/abbr "💁 Need Help?" "Look at the Assistant box for help!

The Assistant box appears to the right if you're viewing this full-screen on a PC; or below, if you're on a smaller-screen device. It will update to give you hints as you go along.")])

(defn price-all-guests [] 
  (reduce + (map censorius.guest/price @guests)))

(defn guest-list-subtotal-row []
  (when (have-guests)
    [:tr {:key "☠|subtotal|"}
     [:th {:col-span 7} "Subtotal"]
     [:td {:col-span 3 :style {:align "right"}}
      [:span (util/format-money (price-all-guests))]]]))

(defn maybe-guest-list []
  (util/log "Maybe guest list")
  (when (have-guests)
    (util/log "We have guests")
    (let [prog1 [:tbody
                 (doall (for [guest @guests] 
                          (do (util/log "Let's print a row for this guest …")
                              (util/log "Let's print a row for this guest; guest=" guest)
                              (censorius.guest/guest-row guest))))]]
      (util/log "generated a tree")
      (util/log "tree looks like: " (str prog1))
      prog1)))

(defn guest-list-box []
  (fn []
    [:section
     [guest-list-box-title]
     [:section {:class "card" :key "guest-list-box"}
      [:h2 [party-title]]

      [:table {:class "people"}
       (when (have-guests) 
         [guests-thead])
       [maybe-guest-list]
       [:tfoot
        [guest-list-subtotal-row]
        [add-person-row]]]]]))

(defn staff-in-party? []
  (some #(staff/staff? %) @guests))


