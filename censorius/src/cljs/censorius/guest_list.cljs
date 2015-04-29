(ns censorius.guest-list
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]
   [censorius.data :as d]
   [censorius.guest :as guest]
   [censorius.text :as text]
   [censorius.utils :as util]))

(defn add-person-row [nada children this]
  (let [new-name (atom  {:new-name-entered ""})
        add-to-party (fn [event]
                       (let [name (:new-name-entered @new-name)
                             name-parts (string/split (string/trim name) #"\s+")
                             [given surname] (cond (= 2 (count name-parts))
                                                   [(first name-parts) (second name-parts)]
                                                   (= 1 (count name-parts))
                                                   [(first name-parts) (:surname (deref (first @d/guests)))]
                                                   true
                                                   [(first name-parts) (apply str (rest name-parts))])]
                         (js/alert (str  "Adding " name " → " given " / " surname))
                         (reset! new-name (reagent/atom  {:new-name-entered ""}))
                         (when (not (string/blank? given))
                           (swap! d/guests conj {:called-by nil :given-name given :surname surname
                                                 :e-mail nil :telephone nil
                                                 :adult? true :staff? false :lugal+? false
                                                 :sleep :tent :eat nil
                                                 :t-shirt nil :coffee false :tote false}))))]
    (fn [nada children this] 
      (util/log "guest-list-add-row (name " (:new-name-entered @new-name) ")")
      (let [name$ (:new-name-entered @new-name)
            named? (and name$
                        (string? name$)
                        (not (string/blank? name$)))]
        [:tr {:key "|add|"}
         [:td {:col-span 10
               :style {:border "2pt solid black"
                       :border-radius "1ex"
                       :padding "8pt"}}
          [text/text-input {:cursor new-name
                            :keys :new-name-entered
                            :label "Add this person"
                            :placeholder (str "John " (if (or (empty? @d/guests)
                                                              (empty? (:surname (deref (first @d/guests)))))
                                                        "Doe"
                                                        (:surname (deref (first @d/guests)))))
                            :format util/name-case
                            :validate (fn [new-name] 
                                        (reagent/force-update-all)
                                        (util/a-name? new-name))
                            :rows 0}]
          name$ " = " (if named? "ok" "not")
          [:button
           {:on-click #(if named?
                         add-to-party
                         (js/alert "Enter the person's name, first"))
            :class (str (if named?
                          (if (zero? (count @d/guests))
                            "true urgent"
                            "true")
                          "disabled"))}
           (str (if named? "+" "🚭") " Add to party")]]]))))
