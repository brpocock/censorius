(ns censorius.workshops
  (:require
   [alandipert.storage-atom :refer [local-storage]]
   [reagent.core :as reagent :refer [atom]]
   
   [censorius.data :as d]
   [censorius.guest-list :as guest-list]
   [censorius.radio :as radio]
   [censorius.text :as text]))

(defonce workshops (local-storage (reagent/atom [])
                                  :reg-workshops))

(defn workshop-info [workshop]
  [:tr [:td (:long-name @workshop)]
   [:td (or (:called-by (:presenter @workshop))
            (:given-name (:presenter @workshop)))]])

(def +silly-workshop-names+
  ["Tarot Reading"
   "Basket Weaving"
   "Familiar Grooming"
   "Water Prayers"
   "Fire Prayers"
   "Wind Prayers"
   "Wood Prayers"
   "Metal Prayers"
   "Bell Ringing"
   "Spirit Prayers"
   "Wicca at Work"
   "Men's Mysteries"
   "Women's Mysteries"
   "Exploring Karma"
   "Viking Hairstyles"])

(def +common-age-ranges+
  [[0 9 "Kids' Realm"]
   [10 12 "Tween Time"]
   [13 17 "Teens"]
   [18 nil "Adults Only"]
   [21 nil "Drinking Age"]])

(defn format-age-range [min max]
  (or (last (first (filter #(and (= min (first %))
                                 (= max (second %))) +common-age-ranges+)))
      (str "Ages from " (or min "birth") " to " (or max "death"))))

(defn make-create-workshop-function [new]
  (fn []
    (let [guest (first (filter (fn [guest] 
                                 (= (:presenter @new)
                                    (or (:formal-name @guest)
                                        (str (or (:called-by @guest)
                                                 (:given-name @guest))
                                             " "
                                             (:surname @guest)))))
                               @guest-list/guests))]
      (swap! workshops conj (atom {:long-name (:title @new)
                                   :short-name (:title @new)
                                   :presenter guest
                                   :description ""
                                   :extra-web-description ""
                                   :duration 1
                                   :age-min nil
                                   :age-max nil
                                   :♂? true
                                   :♀? true
                                   :workshop-needs ""
                                   :needs ""
                                   :allow-recording false}))
      (when-not (:formal-name @guest)
        (swap! guest assoc :formal-name (str (or (:called-by @guest)
                                                 (:given-name @guest))
                                             " "
                                             (:surname @guest))))
      (when-not (:headliner? @guest)
        (swap! guest assoc :headliner? false))
      (when-not (:music? @guest)
        (swap! guest assoc :music? false))
      (when-not (:presenter-needs @guest)
        (swap! guest assoc :presenter-needs ""))
      (swap! new assoc :title ""))))

(defn add-workshop-button [new]
  [:button {:class "true"
            :on-click (make-create-workshop-function new)}
   (if (zero? (count @workshops))
     "⁂ Present a workshop"
     "+ Add another")])

(defn add-workshop-box []
  (let [new (atom {:title "" :presenter nil})]
    (fn []  
      [:tfoot [:tr [:td {:col-span 2}
                    [text/text-input {:cursor new
                                      :keys :title 
                                      :label "Workshop title"
                                      :placeholder (rand-nth +silly-workshop-names+)
                                      :rows 1}]
                    [radio/radio-set {:label "Presenter" 
                                      :cursor new
                                      :key :presenter
                                      :tags (map (fn [guest]
                                                   (let [n (or (:formal-name @guest)
                                                               (str (or (:called-by @guest)
                                                                        (:given-name @guest))
                                                                    " "
                                                                    (:surname @guest)))]
                                                     [n n]))
                                              @guest-list/guests)}]
                    (when (and (:presenter new)
                               (not (empty? (:title new)))) 
                      [add-workshop-button new])]]])))

(defn workshop-box []
  (when-not (empty? @guest-list/guests)
    [:section {:class "card"}
     [:h2 "Workshops"]
     (when (pos? (count @workshops))
       [:fieldset [:legend "Workshop Requests"]
        [:table
         [:thead [:tr [:th "Title"] [:th "Presenter"]]]
         [:tbody
          (map #([workshop-info %]) @workshops)]]])
     (if :true-dont-accept-workshop-submissions
       [:div "Please contact " [:a {:href "mailto:workshops@flapagan.org"}
                                "workshops@flapagan.org"] 
        " to put in any workshops that you'd like to present."]
       [add-workshop-box])]))
