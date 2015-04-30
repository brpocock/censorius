(ns censorius.guest-list
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]
   [censorius.data :as d]
   [censorius.guest :as guest]
   [censorius.text :as text]
   [censorius.utils :as util]))

(defn add-to-party [new-name]
  (fn [event]
    (let [name (:new-name-entered @new-name)
          name-parts (string/split (string/trim name) #"\s+")
          [given surname] (cond (= 2 (count name-parts))
                                [(first name-parts) (second name-parts)]
                                
                                (= 1 (count name-parts))
                                [(first name-parts) (:surname (deref (first @d/guests)))]
                                
                                :else
                                [(first name-parts) (apply str (rest name-parts))])]
      (if (and (not (empty? given))
               (not (empty? surname)))
        (let [num-given (count (filter #(and (= given (:given-name (deref %)))
                                             (= surname (:surname (deref %)))) 
                                       @d/guests))
              ;; given (if (zero? num-given)
              ;;         given
              ;;         (str given " (#" (inc num-given) ")"))
              ]
          (if (zero? num-given)
            (do 
              (util/log "given " given " surname " surname)
              (reset! new-name {:new-name-entered ""})
              (swap! d/guests conj (atom {:called-by nil :given-name given :surname surname
                                          :e-mail nil :telephone nil
                                          :adult? true :staff? false :lugal+? false
                                          :sleep :tent :eat nil
                                          :t-shirt nil :coffee false :tote false})))
            (js/alert (str "We can't actually handle two party members with exactly the same given & surnames. For now, could you please put down the second “" 
                           given " " surname 
                           "” with a number or a Jr on their given name? Like: “" 
                           given "-Jr " surname "” or “" 
                           given "2 " surname 
                           "”?  Sorry for the inconvenience ☹ (~brfp)"))))
        
        (js/alert "Please enter the person's legal given (first) name and surname (family name). EG: “John Doe”")))))

(defn add-person-row [_ children this]
  (let [new-name (atom  {:new-name-entered ""})]
    (reagent/create-class
     {:reagent-render
      (fn [_ children this]
        (let [name$ (:new-name-entered @new-name)
              named? (and name$
                          (string? name$)
                          (not (string/blank? name$)))]
          [:tr {:key "☠|add|"}
           [:td {:col-span 10
                 :style {:border "2pt solid black"
                         :border-radius "1ex"
                         :padding "8pt"}}
            (when (empty? @d/guests)
              [:div "To get started: Enter your first and last name (or
              the first and last name of the party's “leader.”) Your
              registration will be “filed under” this person's
              name. Please use your name as it appears on your ID. (If
              you have two first names, enter them with a hyphen:
              Bruce-Robert, Ann-Marie, Billy-Bob.)"])
            
            ^{:key (str "add-person-" (inc (count @d/guests)))}
            [text/text-input {:cursor new-name
                              :keys :new-name-entered
                              :label (if (empty? @d/guests) "Start with this person" "Add this person")
                              :placeholder (str 
                                            (if (empty? @d/guests)
                                              "John"
                                              (case (:given-name (deref (first @d/guests)))
                                                "John" "Jane"
                                                "Adam" "Yves"
                                                "Jennifer" "Eric"
                                                "John")) 
                                            " "
                                            (if (or (empty? @d/guests)
                                                    (empty? (:surname (deref (first @d/guests)))))
                                              "Doe"
                                              (:surname (deref (first @d/guests)))))
                              :format util/name-case
                              :validate (fn [new-name] 
                                          (reagent/force-update-all)
                                          (util/a-name? new-name))
                              :rows 1}]
            " \u00a0 \u00a0 \u00a0 "
            [:button
             {:on-click (add-to-party new-name)
              :class (str (if named?
                            (if (zero? (count @d/guests))
                              "true urgent"
                              "true")
                            "disabled"))}
             (str (if named? "+" "✗") " Add to party")]]]))})))
