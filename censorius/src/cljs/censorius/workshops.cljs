(ns censorius.workshops
  (:require
   [reagent.core :as reagent :refer [atom]]
   
   [censorius.data :as d]
   [censorius.guest :as guest]
   [censorius.guest-list :as guest-list]
   [censorius.radio :as radio]
   [censorius.text :as text]))



(defonce workshops (reagent/atom []))



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

(defn allowed-presenter? [guest]
  (and (guest/adult? guest)
       (:e-mail @guest)))
;; TODO: check blacklist?

(defn presenter-name [guest]
  (or (:formal-name @guest)
      (str (or (:called-by @guest)
               (:given-name @guest))
           " "
           (:surname @guest))))

(defn all-possible-presenters []
  (map (fn [guest]
         (let [n (presenter-name guest)]
           [n n]))
    (filter allowed-presenter? @guest-list/guests)))

(defn adding-workshops? []
  (and (pos? (count (all-possible-presenters)))
       (= (:note @d/general) "⁂")))

(defn add-workshop-box []
  (let [new (atom {:title "" :presenter nil})]
    (fn []  
      [:tfoot 
       [:tr {:style {:display (if (adding-workshops?) "table-row" "none")}}
        [:td {:col-span 2}
         [text/text-input {:cursor new
                           :keys :title 
                           :label "Workshop title"
                           :placeholder (rand-nth +silly-workshop-names+)
                           :rows 1}]
         [radio/radio-set {:label "Presenter" 
                           :cursor new
                           :key :presenter
                           :tags (all-possible-presenters)}]
         [:div {:style {:display (if (and (:presenter new)
                                          (< 5 (count (:title new)))) 
                                   "block" "none")}} 
          [add-workshop-button new]]]]])))

(defn workshop-box []
  (when-not (empty? @guest-list/guests)
    [:section {:class "card"}
     [:h2 "Workshops"]
     [:fieldset
      {:style {:display (if (or (pos? (count @workshops))
                                (adding-workshops?))
                          "block" "none")}}
      [:legend "Workshop Requests"]
      [:table
       [:thead [:tr
                {:style {:display (if (pos? (count @workshops))
                                    "table-row" "none")}}
                [:th "Title"] [:th "Presenter"]]]
       [:tbody
        (map #([workshop-info %]) @workshops)]
       [add-workshop-box]]]
     [:div {:style {:display (if (adding-workshops?) "none" "block")}}
      "Please contact " [:a {:href "mailto:workshops@flapagan.org"}
                         "workshops@flapagan.org"] 
      " to put in any workshops that you'd like to present, or submit through "
      [:a {:href "https://docs.google.com/a/star-hope.org/forms/d/1C7smFWCgZXzIqQwccJGYPvuP6BNEb291JD0KbRug5Mc/edit?usp=docslist_api"}
       "this form"] " in the interim."]]))
