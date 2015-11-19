(ns censorius.guest-list
  (:require
   [clojure.string :as string]
   [alandipert.storage-atom :refer [local-storage]]
   [reagent.core :as reagent :refer [atom]]
   
   [censorius.data :as d]
   [censorius.guest :as guest]
   [censorius.text :as text]
   [censorius.utils :as util]))

(defonce guests (local-storage 
                 (reagent/atom 
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
                                  :tote? false })])
                 :reg-guests))



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

(defn guess-gender [name]
  (case name
    "John" :m
    "James" :m
    "Bruce-Robert" :m
    "Bruce-robert" :m
    "Suanne" :f
    "Ann-Marie" :f
    "Mary" :f
    "Ann" :f
    "Bobbi-Jo" :f
    "Bobbi" :f
    "Roberta" :f
    "Paul" :m
    "Dawn" :f
    "Scott" :m
    "Orianna" :f
    "Narissa" :f
    "Georgiana" :f
    "Georgianna" :f
    "Heather" :f
    "Susan" :f
    "Brian" :m
    "Brianna" :f
    "Soren" :f
    "Faith" :f
    "Constance" :f
    "Jayden" :m
    "Randy" :m
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
                            (if (zero? (count @guests))
                              "true urgent"
                              "true")
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

(defn party-title []
  [:span (let [leader (first @guests)]
           (case (count @guests)
             0
             "New Party: Please Register"
             
             1
             (str (case (:gender @leader)
                    :m "Mr "
                    :f "Ms "
                    "") 
                  (or (:called-by @leader) (:given-name @leader)) " " (:surname @leader))
             
             2
             (let [partner (second @guests)]
               (if (= (:surname @leader) (:surname @partner))
                 (str (cond (= (:gender @leader) (:gender @partner) :m)
                            "Messrs "
                            (= (:gender @leader) (:gender @partner) :f)
                            "Mtrss "
                            (or (nil? (:gender @leader)) (nil? (:gender @partner)))
                            ""
                            :else
                            (case (:gender @leader)
                              :m "Mr & Ms "
                              :f "Ms & Mr "))
                      (or (:called-by @leader) (:given-name @leader))
                      " & "
                      (or (:called-by @partner) (:given-name @partner))
                      " "
                      (:surname @leader))
                 (str (case (:gender @leader)
                        :m "Mr "
                        :f "Ms "
                        "") 
                      (or (:called-by @leader) (:given-name @leader)) " " (:surname @leader)
                      " & "
                      (case (:gender @partner)
                        :m "Mr "
                        :f "Ms "
                        "") 
                      (or (:called-by @partner) (:given-name @partner)) " " (:surname @partner))))
             
             (if (every? #(= (:surname @%) (:surname @leader)) @guests)
               (str "The " (:surname @leader) " Party of " (util/counting (count @guests) "Guest"))
               (str (case (:gender @leader)
                      :m "Mr "
                      :f "Ms "
                      "") 
                    (or (:called-by @leader) (:given-name @leader)) " " (:surname @leader)
                    " &  " (util/counting (- (count @guests) 1) "Guest")))))])


(defn count-adults []
  (count (filter #(= (:ticket-type @%) :adult) @guests)))



