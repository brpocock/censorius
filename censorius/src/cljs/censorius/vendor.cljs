(ns censorius.vendor
  (:require [clojure.string :as string]
            
            [censorius.data :as d]
            [censorius.guest :as guest]
            [censorius.guest-list :as guest-list]
            [censorius.text :as text]
            [censorius.utils :as util]))

(defn vendor-agreement []
  [:div [:h3 "Vendor agreement"]
   [:p "Before you can become an vendor, you need to agree to the festival's vendor rules."]
   [:a {:href "http://fpgrocks.org/news/vendor-faq"
        :target "VendorFAQ"} 
    [:button {:class "true"} "Read Vendor Rules"]]
   [:button {:on-click (fn [_] 
                         (swap! d/vending assoc :agreement true))}
    "✓ Accept the vendor agreement"]])

(defn vendor-info []
  [:div
   [text/text-input {:cursor d/vending
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
   [text/text-input {:cursor d/vending
                     :keys :blurb
                     :label "Description (Handbook/Web)"
                     :placeholder (rand-nth ["Come and have lots of fun with our widgets and doodads! You'll want to collect all nine."
                                             "Sometimes an Athame is just an Athame"
                                             "We've got all the whirlygigs and whinny-diddles you'll ever need"
                                             "Plenty of whimsical things unlikely to cause permanent harm"])
                     :validate #(> 250 (count %) 32)
                     :rows 3}]
   [text/text-input {:cursor d/vending
                     :keys :notes
                     :label "Requests/Notes (for Vendor Concierge)"
                     :placeholder ""
                     :rows 2}]])



(defn vendor-slips []
  [:div [text/text-input {:cursor d/vending
                          :keys :qty
                          :label "Quantity"
                          :placeholder "0"
                          :format util/just-number
                          :validate #(and (or (= 1 (count %)) 
                                              (and (= 2 (count %))
                                                   (= \0 (.charAt % 0))))
                                          (every? #{\1 \2 \3 \0} %))
                          :rows 0
                          :size 3}]
   " vendor " (if (= 1 (:qty @d/vending)) "slip" "slips")
   " (" (if (< 1 (:qty @d/vending))
          [:strong (* 10 (:qty @d/vending))]
          10)
   "′×10′) @ " (util/format-money (:vendor @d/prices)) " each slip."
   (when (< 1 (:qty @d/vending))
     [:span {:class "hint"}
      " (total " (util/format-money (price-vendor)) ")"])
   (when (pos? (:qty @d/vending))
     [vendor-info])])

(defn price-vendor []
  (* (:vendor @d/prices) (:qty @d/vending)))

(defn validate-mqa-license []
  [:button {:on-click #(do
                         (if (some #{\& \| \; \= \? \- \_ \, }  (:mqa-license @d/vending))
                           (js/alert "The license number has invalid characters in it. It should consist of only letters and digits.")
                           (js/window.open (str "https://appsmqa.doh.state.fl.us/IRM00PRAES/PRASLIST.ASP?SearchTypeButton=ALL&PROFESSIONBOX=99999&ACTION=SEARCH&LICENSEBOX="
                                                (:mqa-license @d/vending)))))}
   "Check License →"])

(defn validate-bpr-license []
  ;; TODO : POST the hSearchType, hDivision, LicNbr fields.
  [:button {:on-click #(do
                         (if (some #{\& \| \; \= \? \- \_ \, }  (:bpr-license @d/vending))
                           (js/alert "The license number has invalid characters in it. It should consist of only letters and digits.")
                           (js/window.open (str "https://www.myfloridalicense.com/wl11.asp?mode=2&search=LicNbr&SID=&brd=&typ=N&hSearchType=LicNbr&hDivision=ALL&LicNbr="
                                                (:bpr-license @d/vending)))))}
   "Check License →"])

(defn vendor-license [category symbol license-symbol]
  [:div {:key (str "vendor/" (util/keyword->string symbol))}
   [:h4 category]
   [:label [:input {:type "checkbox"
                    :on-change (if (get @d/vending symbol)
                                 #(swap! @d/vending assoc symbol false)
                                 #(swap! @d/vending assoc symbol true))
                    :checked (get @d/vending symbol)
                    :name (str "license-needed/" (util/keyword->string symbol))}
            category 
            [:span {:style {:disabled (not (get @d/vending symbol))}}
             [text/text-input {:cursor d/vending
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

(defn vendor-box []
  (fn []
    [:section {:key "vending" :class "card"}
     [:h2 "Vending"]
     [:div
      (cond (not (some #(nil? (:days @%))
                       (filter #(= (:ticket-type @%) :adult) 
                               @guest-list/guests)))
            [vendor-requires-admission]
            
            (not (:agreement @d/vending))
            [vendor-agreement]
            
            true
            [vendor-slips])]]))
