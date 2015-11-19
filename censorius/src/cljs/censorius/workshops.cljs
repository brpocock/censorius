(ns censorius.workshops
  (:require
   [censorius.assistant :as assistant]
   [censorius.data :as d]
   [censorius.editable :as ed]
   [censorius.guest :as guest]
   [censorius.guest-list :as guest-list]
   [censorius.merch :as merch]
   [censorius.radio :as radio]
   [censorius.text :as text]
   [censorius.utils :as util]
   [censorius.vendor :as vendor]))

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
  (or (last (first (filter #(and (= min (first row))
                                 (= max (second row))) +common-age-ranges+)))
      (str "Ages from " (or min "birth") " to " (or max "death"))))

(defn add-workshop-button [new]
  [:button {:class "true"
            :on-click (fn [_]
                        (swap! d/workshops conj (atom {:long-name (:title @new)
                                                       :short-name (:title @new)
                                                       :presenter (:presenter @new)
                                                       :description ""
                                                       :extra-web-description ""
                                                       :duration 1
                                                       :age-min nil
                                                       :age-max nil
                                                       :♂? true
                                                       :♀? true
                                                       :workshop-needs ""
                                                       :needs ""
                                                       :allow-recording false ""}))
                        (when-not (:formal-name @guest)
                          (swap! guest assoc :formal-name (str (or (:called-by @guest)
                                                                   (:given-name @guest))
                                                               " "
                                                               (:surname @guest))))
                        (when-not (:headliner? @guest)
                          (swap! guest assoc :headliner? false))
                        (when-not (:music? @guest)
                          (swap! guest assoc :music? false))
                        (when-not (:presenter-needs @gues)
                          (swap! guest assoc :presenter-needs ""))
                        (swap! new assoc :title ""))}
   (if (zero? (count @d/workshops))
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
                                                   (let [n (str (or (:called-by @guest)
                                                                    (:given-name @guest))
                                                                " "
                                                                (:surname @guest))]
                                                     [guest n]))
                                              @d/guests)}]
                    (when (and (:presenter new)
                               (not (empty? (:title new)))) 
                      [add-workshop-button new])]]])))

(defn workshop-box []
  (when-not (empty? @d/guests)
    [:section {:class "card"}
     [:h2 "Workshops"]
     (when (pos? (count @d/workshops))
       [:fieldset [:legend "Workshop Requests"]
        [:table
         [:thead [:tr [:th "Title"] [:th "Presenter"]]]
         [:tbody
          (map #([workshop-info %]) @d/workshops)]]])
     (if :true-dont-accept-workshop-submissions
       [:div "Please contact " [:a {:href "mailto:workshops@flapagan.org"}
                                "workshops@flapagan.org"] 
        " to put in any workshops that you'd like to present."]
       [add-workshop-box])]))
