(ns censorius.vendor
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]
   
   [censorius.data :as d]
   [censorius.guest-list :as guest-list]
   [censorius.guest :as guest]
   [censorius.text :as text]
   [censorius.utils :as util]))



(defonce vending (reagent/atom
                  {:title nil, :blurb nil, :notes nil, :qty 0, :agreement false}))



(defn can-be-vendor? []
  (some #(and (guest/adult? %)
              (nil? (:days @%)))
        @guest-list/guests))

(defn vendor-agreement []
  [:div [:div {:key "vendor-agreement"
               :style {:display (if (or (not (can-be-vendor?))
                                        (:agreement @vending))
                                  "none" "block")}}
         [:h3 "Vendor agreement"]
         [:p "Before you can become an vendor, you need to agree to the festival's vendor rules."]
         [:a {:href "http://fpgrocks.org/news/vendor-faq"
              :target "VendorFAQ"} 
          [:button {:class "true"} "Read Vendor Rules"]]
         [:button {:on-click #(swap! vending assoc :agreement true)}
          "□ Accept the vendor agreement"]]
   [:div {:key "vendor-agreement-abort"
          :style {:display (if (:agreement @vending)
                             "block" "none")}}
    [:label [:input {:type "checkbox" 
                     :checked true
                     :on-click #(swap! vending assoc :agreement false)}]
     "Vendor agreement accepted"]]])



(defn vendor-info []
  [:div
   [text/text-input {:cursor vending
                     :keys :title
                     :label "Vending Booth Name"
                     :placeholder (rand-nth ["Plonkee Plonkee Shoppe"
                                             "Donder und Blitzen"
                                             "Crazy Carla's Koala Kingdom"
                                             "Stuff to Hide from the In-Laws"
                                             "Owls in Paradise"
                                             "Shiny Bits to Buy"])
                     :format util/name-case
                     :validate util/name-like?
                     :rows 1}]
   [text/text-input {:cursor vending
                     :keys :blurb
                     :label "Description (Handbook/Web)"
                     :placeholder (rand-nth ["Come and have lots of fun with our widgets and doodads! You'll want to collect all nine."
                                             "Sometimes an Athame is just an Athame"
                                             "We've got all the whirlygigs and whinny-diddles you'll ever need"
                                             "Plenty of whimsical things unlikely to cause permanent harm"])
                     :validate #(> 250 (count %) 32)
                     :rows 3}]
   [text/text-input {:cursor vending
                     :keys :notes
                     :label "Requests/Notes (for Vendor Concierge)"
                     :placeholder "Need to bring a helper? Arriving Thursday?"
                     :rows 2}]])



(defn price-vendor []
  (* (:vendor @d/prices) (:qty @vending)))

(defn slip-box [slip]
  (let [enough? (<= slip (:qty @vending))]
    [:span {:class "slip"}
     [:input {:key (str "vendor-slip-" slip)
              :id (str "vendor-slip-" slip)
              :type "checkbox"
              :checked enough?
              :on-click #(swap! vending assoc :qty (cond (:food-vendor? @vending) 1
                                                         enough? (- (:qty @vending) 1)
                                                         :else slip))}]
     [:label {:for (str "vendor-slip-" slip)}]]))


(defn validate-mqa-license []
  [:button {:on-click #(do
                         (if (some #{\& \| \; \= \? \- \_ \, }  (:mqa-license @vending))
                           (js/alert "The license number has invalid characters in it. It should consist of only letters and digits.")
                           (js/window.open (str "https://appsmqa.doh.state.fl.us/IRM00PRAES/PRASLIST.ASP?SearchTypeButton=ALL&PROFESSIONBOX=99999&ACTION=SEARCH&LICENSEBOX="
                                                (:mqa-license @vending)))))}
   "Check License →"])

(defn validate-bpr-license []
  ;; TODO : POST the hSearchType, hDivision, LicNbr fields.
  [:button {:on-click #(do
                         (if (some #{\& \| \; \= \? \- \_ \, }  (:bpr-license @vending))
                           (js/alert "The license number has invalid characters in it. It should consist of only letters and digits.")
                           (js/window.open (str "https://www.myfloridalicense.com/wl11.asp?mode=2&search=LicNbr&SID=&brd=&typ=N&hSearchType=LicNbr&hDivision=ALL&LicNbr="
                                                (:bpr-license @vending)))))}
   "Check License →"])



(defn vendor-license [category symbol license-symbol]
  [:div {:key (str "vendor/" (util/keyword->string symbol))
         :style {:display (if (and (can-be-vendor?)
                                   (:agreement @vending))
                            "block" "none")}}
   [:label [:input {:type "checkbox"
                    :on-change (if (get @vending symbol)
                                 #(swap! vending assoc symbol false)
                                 #(do (swap! vending assoc symbol true)
                                      (when (= :food-vendor? symbol)
                                        (swap! vending assoc :qty 1))))
                    :checked (get @vending symbol)
                    :name (str "license-needed/" (util/keyword->string symbol))}
            category]]
   [:span {:style {:display (if (get @vending symbol)
                              "block" "none")}}
    "State license number:"
    [text/text-input {:cursor vending
                      :keys license-symbol
                      :label "State license number"
                      :placeholder (case license-symbol
                                     :mqa-license "ME99999"
                                     :bpr-license ""
                                     "")
                      :rows 0}]
    "(" (util/keyword->string license-symbol) ")"
    (case license-symbol
      :mqa-license [validate-mqa-license]
      :bpr-license [validate-bpr-license])]])



(defn vendor-slips []
  [:div {:key "vendor-slips"
         :style {:display (if (:agreement @vending)
                            "block" "none")}}
   [:span {:style {:display (if (:food-vendor? @vending)
                              "none" "inline-block")}}
    [:span {:id "vendor-slips"}
     [slip-box 1] [slip-box 2] [slip-box 3]]
    [:span {:style {:width "3em"}} "   "]
    (util/counting (:qty @vending) "vendor slip")
    [:small {:key "slip-space"}
     " (" (if (< 1 (:qty @vending))
            [:strong (* 10 (:qty @vending))]
            10) "´×10´)"
     [:span {:key "slip-price"} " @ " (util/format-money (:vendor @d/prices)) " each slip."]]]
   [:span {:key "price-total" :class "hint"}
    (cond 
      (:food-vendor? @vending) "Food vendors  will be located near the
        cafeteria. Price: $25."
      (< 1 (:qty @vending)) (str " (total " (util/format-money (price-vendor)) ")")
      :else " (Click the green box to reserve vending space)")]
   [:div {:style {:display (if (pos? (:qty @vending))
                             "block" "none")}}
    [vendor-info]
    [vendor-license "Food vendor" :food-vendor? :bpr-license]
    [:div {:style {:display (if (:food-vendor? @vending) 
                              "block" "none")}}
     [:label [:input {:type "checkbox"
                      :on-change (if (:meal-plan? @vending)
                                   #(swap! vending assoc :meal-plan? false)
                                   #(swap! vending assoc :meal-plan? true))
                      :checked (:meal-plan? @vending)
                      :name "meal-plan"}
              "Check here if you offer a Wed→Sun meal plan for pre-purchase."]
      [:p {:class "hint"} "Since FPG is not offering a camp meal plan at
this Festival, we are relying more  upon our food vendors. If you'd like
to  be featured  as  a  source for  pre-paid  meal  plans, please  check
this box."]]
     [text/text-input {:cursor vending
                       :keys :menu
                       :label "Menu (Optional) for www.flapagan.org"
                       :placeholder "Enter your menu information here, if you have it."
                       :validate #(> 7500 (count %) 32)
                       :rows 10}]]
    [vendor-license "Massage or other MQA license" :masseur? :mqa-license]]])




(defn vendor-requires-admission []
  [:div {:key "requires-admission"
         :style {:display (if (not (can-be-vendor?))
                            "block" "none")}}
   [:p "Vendors must have at least one adult, full
 Festival (Wed→Sun) admission."]
   [:p {:class "hint"}
    "You may  see it written that  vendor admission prices
     are $140 (with discounts for buying early). This includes the price
     of  an adult  admission for  the vendor  plus $25  for one  10´×10´
     vending  space.  You may  purchase  addtiional  vending spaces  and
     additional admissions as you like.  Vendors can arrive on Wednesday
     or Thursday."]])




(defn vendor-box []
  (fn []
    [:section {:key "vending" :class "card"
               :style {:display (if (empty? @guest-list/guests)
                                  "none" "block")}}
     [:h2 "Vending"]
     [:div {:key "vending"}
      [vendor-requires-admission]
      [vendor-agreement]
      [vendor-slips]]]))
