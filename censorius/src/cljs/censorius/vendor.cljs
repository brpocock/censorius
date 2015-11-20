(ns censorius.vendor
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]
   
   [censorius.data :as d]
   [censorius.guest-list :as guest-list]
   [censorius.text :as text]
   [censorius.utils :as util]))



(defonce vending (reagent/atom
                  {:title nil, :blurb nil, :notes nil, :qty 0, :agreement false}))



(defn vendor-agreement []
  [:div {:key "vendor-agreement"}
   [:h3 "Vendor agreement"]
   [:p "Before you can become an vendor, you need to agree to the festival's vendor rules."]
   [:a {:href "http://fpgrocks.org/news/vendor-faq"
        :target "VendorFAQ"} 
    [:button {:class "true"} "Read Vendor Rules"]]
   [:button {:on-click #(swap! vending assoc :agreement true)}
    "✓ Accept the vendor agreement"]])



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
                     :placeholder ""
                     :rows 2}]])



(defn price-vendor []
  (* (:vendor @d/prices) (:qty @vending)))

(defn slip-box [slip]
  (let [enough? (< (- slip 1) (:qty @vending))]
    [:input {:key (str "vendor-slip-" slip)
             :type "checkbox"
             :checked enough?
             :on-click #(swap! vending assoc :qty ((if enough? - +) (:qty @vending) 1)) }]))

(defn vendor-slips []
  [:div {:key "vendor-slips"}
   [slip-box 1]
   [slip-box 2]
   [slip-box 3]
   (util/counting (:qty @vending) "vendor slip")
   [:span {:key "slip-space"}
    " (" (if (< 1 (:qty @vending))
           [:strong (* 10 (:qty @vending))]
           10)
    "′×10′)"]
   [:span {:key "slip-price"}
    " @ " (util/format-money (:vendor @d/prices)) " each slip."]
   (if (< 1 (:qty @vending))
     [:span {:key "price-total" :class "hint"}
      " (total " (util/format-money (price-vendor)) ")"]
     [:span {:key "price-total"}])
   (if (pos? (:qty @vending))
     [vendor-info])])



(defn vendor-requires-admission []
  [:div   [:p   "Vendors   must   have  at   least   one   adult,   full
  Festival (Wed→Sun) admission."]
   [:p {:class "hint"}
    "You may  see it written that  vendor admission prices
     are $140 (with discounts for buying early). This includes the price
     of  an adult  admission for  the vendor  plus $25  for one  10´×10´
     vending  space.  You may  purchase  addtiional  vending spaces  and
     additional admissions as you like.  Vendors can arrive on Wednesday
     or Thursday."]])



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
  [:div {:key (str "vendor/" (util/keyword->string symbol))}
   [:h4 category]
   [:label [:input {:type "checkbox"
                    :on-change (if (get @vending symbol)
                                 #(swap! @vending assoc symbol false)
                                 #(swap! @vending assoc symbol true))
                    :checked (get @vending symbol)
                    :name (str "license-needed/" (util/keyword->string symbol))}
            category 
            [:span {:style {:disabled (not (get @vending symbol))}}
             [text/text-input {:cursor vending
                               :keys license-symbol
                               :label "State license number"
                               :placeholder (case license-symbol
                                              :mqa-license "ME99999"
                                              :bpr-license ""
                                              "")
                               :rows 1}]
             (case license-symbol
               :mqa-license [validate-mqa-license]
               :bpr-license [validate-bpr-license])]]]])



(defn vendor-box []
  (fn []
    [:section {:key "vending" :class "card"}
     [:h2 "Vending"]
     [:div {:key "vending"}
      (cond (not (some #(and (nil? (:days @%))
                             (= (:ticket-type @%) :adult))
                       @guest-list/guests))
            [vendor-requires-admission]
            
            (not (:agreement @vending))
            [vendor-agreement]
            
            true
            [vendor-slips])]]))
