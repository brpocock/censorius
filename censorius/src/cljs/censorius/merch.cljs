(ns censorius.merch
  (:require
   [clojure.string :as string]
   
   [reagent.core :as reagent :refer [atom]]
   
   [censorius.editable :as editable]
   [censorius.utils :as util]
   [censorius.data :as d]
   [censorius.staff :as staff]))

(defonce merch (reagent/atom 
                [ (reagent/atom {:id :tote-bag
                                 :title "FPG Tote Bag"
                                 :description "The tote bag with the FPG logo"
                                 :image "/merch/tote-bag.jpeg"
                                 :price 10
                                 :styles [{:id :tote :title "Tote Bag" :qty 0 :inventory 13}]})
                 (reagent/atom {:id :coffee
                                :title "FPG Coffee Mug"
                                :price 7
                                :description "The FPG thermal coffee mug is great for other beverages, too"
                                :image "/merch/tote-bag.jpeg"
                                :styles [{:id :mug :title "Coffee mug" :qty 0 :inventory 140}]})
                 (reagent/atom {:id :water
                                :title "FPG Water Bottle"
                                :price 25
                                :description "The FPG water bottle is great for other beverages, too"
                                :image "/merch/tote-bag.jpeg"
                                :styles [{:id :water :title "Water bottle" :qty 0 :inventory 62}]})
                 (reagent/atom {:id :festival-shirt
                                :title "Festival T-Shirt"
                                :description "The new T-shirt for this festival"
                                :image "/merch/tshirt-fest.png"
                                :price 15
                                :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 999}
                                         {:id :s :title "Small" :qty 0 :inventory 999}
                                         {:id :m :title "Medium" :qty 0 :inventory 999}
                                         {:id :l :title "Large" :qty 0 :inventory 999}
                                         {:id :xl :title "Extra-large" :qty 0 :inventory 999}
                                         {:id :x2l :title "Double extra-large" :qty 0 :inventory 999}
                                         {:id :x3l :title "Triple extra-large" :qty 0 :inventory 999}
                                         {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 999}
                                         {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 999}]})
                 (reagent/atom {:id :general-fpg-shirt
                                :title "General FPG T-Shirt"
                                :description "The general T-shirt for FPG"
                                :image "/merch/tshirt-general.png"
                                :price 15
                                :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 999}
                                         {:id :s :title "Small" :qty 0 :inventory 999}
                                         {:id :m :title "Medium" :qty 0 :inventory 999}
                                         {:id :l :title "Large" :qty 0 :inventory 999}
                                         {:id :xl :title "Extra-large" :qty 0 :inventory 999}
                                         {:id :x2l :title "Double extra-large" :qty 0 :inventory 999}
                                         {:id :x3l :title "Triple extra-large" :qty 0 :inventory 999}
                                         {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 999}
                                         {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 999}]})
                 (reagent/atom {:title "Beltane 2013 T-shirt"
                                :description "The T-shirt from Beltane 2013"
                                :image "/merch/tshirtB13.png"
                                :price 798
                                :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 0}
                                         {:id :s :title "Small" :qty 0 :inventory 0}
                                         {:id :m :title "Medium" :qty 0 :inventory 0}
                                         {:id :l :title "Large" :qty 0 :inventory 0}
                                         {:id :xl :title "Extra-large" :qty 0 :inventory 0}
                                         {:id :x2l :title "Double extra-large" :qty 0 :inventory 1}
                                         {:id :x3l :title "Triple extra-large" :qty 0 :inventory 3}
                                         {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 0}
                                         {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 1}]})
                 (reagent/atom {:title "Samhain 2013 T-shirt"
                                :description "The T-shirt from Samhain 2013"
                                :image "/merch/tshirtS13.png"
                                :price 798
                                :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 0}
                                         {:id :s :title "Small" :qty 0 :inventory 0}
                                         {:id :m :title "Medium" :qty 0 :inventory 0}
                                         {:id :l :title "Large" :qty 0 :inventory 0}
                                         {:id :xl :title "Extra-large" :qty 0 :inventory 0}
                                         {:id :x2l :title "Double extra-large" :qty 0 :inventory 3}
                                         {:id :x3l :title "Triple extra-large" :qty 0 :inventory 0}
                                         {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 1}
                                         {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 1}]})
                 (reagent/atom {:title "Samhain 2013 Tank top"
                                :description "The Tank top shirt from Samhain 2013"
                                :image "/merch/tshirtS13.png"
                                :price 798
                                :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 0}
                                         {:id :s :title "Small" :qty 0 :inventory 1}
                                         {:id :m :title "Medium" :qty 0 :inventory 3}
                                         {:id :l :title "Large" :qty 0 :inventory 3}
                                         {:id :xl :title "Extra-large" :qty 0 :inventory 3}
                                         {:id :x2l :title "Double extra-large" :qty 0 :inventory 1}
                                         {:id :x3l :title "Triple extra-large" :qty 0 :inventory 1}
                                         {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 0}
                                         {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 0}]})
                 (reagent/atom {:id :staff-shirt
                                :title "Staff T-Shirt"
                                :description "The staff T-shirt"
                                :image "/merch/tshirt-staff.png"
                                :price 15
                                :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 999}
                                         {:id :s :title "Small" :qty 0 :inventory 999}
                                         {:id :m :title "Medium" :qty 0 :inventory 999}
                                         {:id :l :title "Large" :qty 0 :inventory 999}
                                         {:id :xl :title "Extra-large" :qty 0 :inventory 999}
                                         {:id :x2l :title "Double extra-large" :qty 0 :inventory 999}
                                         {:id :x3l :title "Triple extra-large" :qty 0 :inventory 999}
                                         {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 999}
                                         {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 999}]})]))

(def +t-shirt-long-names+
  [[:xs "Extra-small"]
   [:s "Small"]
   [:m "Medium"]
   [:l "Large"]
   [:xl "Extra-large"]
   [:2xl "Double extra-large"]
   [:3xl "Triple extra-large"]
   [:4xl "Quadruple extra-large"]
   [:5xl "Quintuple extra-large"]])

(defn t-shirt-size-long-name [size]
  (some (fn [[k v]] (if (= k size) v)) +t-shirt-long-names+))

(defn t-shirt-size-short-name [size]
  (string/upper-case (util/keyword->string size)))

(defn purchased-items-price [item]
  (* (reduce + (map :qty (:styles @item)))
     (:price @item)))

(defn price-all-merch []
  (reduce + (map #(purchased-items-price %) @merch)))

(defn sum-merch-prices []
  [:span (util/format-money (price-all-merch))])

(defn position-if [predicate sequence]
  (first (keep-indexed 
          (fn [i element] (when (predicate element) i))
          sequence)))

(defn purchase< [item style style-index can<?]
  [:td {:key (str (:id @item) "∋" (:id style) "/less")}
   [:button {:on-click #(swap! item assoc-in [:styles style-index :qty] 
                               (max 0
                                    (dec (get-in @item [:styles style-index :qty]))))
             :class (when can<? "false")
             :disabled (not can<?)}
    "-"]])

(defn purchase> [item style style-index can>?]
  [:td {:key (str (:id @item) "∋" (:id style) "/more")}
   [:button {:on-click #(swap! item assoc-in [:styles style-index :qty] 
                               (min (get-in @item [:styles style-index :inventory]) 
                                    (inc (:qty style))))
             :class (when can>? "true")
             :disabled (not can>?)}
    "+"]])

(defn sellout-warning [item style]
  [:tr {:key (str (:id @item) "∋" (:id style) "⚠")} 
   [:td {:key (str (:id @item) "∋" (:id style) "⚠☉")} ""]
   [:td {:key (str (:id @item) "∋" (:id style) "⚠sellout") 
         :col-span 3 :class "hint"} 
    (str "only " (util/counting (:inventory style) "item") " left")]])

(defn sold-out [item style]
  [:tr {:key (str (:id @item) "∋" (:id style))}
   [:td {:key (str (:id @item) "∋" (:id style))
         :col-span 4}
    [:small (:title style) " — Sold out."]]])

(defn no-such-style [item style]
  [:tr {:key (str (:id @item) "∋" (:id style))}
   [:td {:key (str (:id @item) "∋" (:id style))
         :col-span 4}
    [:small (:title style) " — not available"]]])

(defn product-style [item style]
  (let [style-index (position-if #(= (:id %) (:id style)) (:styles @item))
        sold (+ (:qty style)
                (censorius.guest-list/purchased-for-guests (:id @item)))]
    (util/log "item " (:id @item) " style " style " index " style-index)
    (if (nil? style-index)
      [no-such-style item style]
      
      (if (zero? (:inventory style))
        [sold-out item style]
        [:tr {:key (str (:id @item) "∋" (:id style) "/styles")}
         ;; # sold
         [:td {:key (str (:id @item) "∋" (:id style) "/sold")
               :style {:margin-right "1ex"}}
          [:strong sold "×" (.toUpperCase (str (:id style)))]]
         [purchase< item style style-index (pos? (:qty style))]
         ;; qty sold
         [:td {:key (str (:id @item) "∋" (:id style) "/qty")}
          (util/counting sold (:title style))]
         [purchase> item style style-index (< sold (:inventory style))]
         ;; sellout warning
         (when (> (max 10 (- sold 5)) (:inventory style))
           [sellout-warning item style])]))))


(defn available-styles [item]
  (filter #(pos? (:inventory %)) (:styles item)))

(defn style-names-string [styles]
  (if (< 3 (count styles))
    (flatten [(take 3 styles)
              (str "and "
                   (.toLowerCase (util/counting (- (count styles) 4) "other")))])
    styles))


(defn plus-grid-sales [item]
  (let [purchased (censorius.guest-list/purchased-for-guests (:id @item))]
    (when (pos? purchased)
      [:p {:class "hint"}
       "*Plus, " (util/counting purchased (:title @item)) " purchased for "
       (if (= 1 purchased) " a guest " " guests ")
       " (above)."])))

(defn product-style-hidden [item open?]
  [:td {:key (str (:id @item) "-styles-hidden")
        :on-click (fn [_] (swap! open? (fn [_] true)) nil)
        :class "zoom"}
   [:strong "Styles: "] 
   [:small (string/join ", " (style-names-string (map :title (available-styles @item))))]
   [:button "⍐"]])

(defn product-style-open [item open?]
  [:td {:key (str (:id @item) "-styles")}
   [:table
    (for [style (available-styles @item)] 
      [product-style item style])]
   [plus-grid-sales item]
   (when (zero? (reduce + (map :qty (:styles @item))))
     (editable/close open?))])

(defn product-style-auto-hide [item open?]
  (if (and (zero? (reduce + (map :qty (:styles @item))))
           (not @open?)) 
    [product-style-hidden item open?]
    [product-style-open item open?]))

(defn product-row [item]
  (let [open? (atom false)]
    (fn [item]
      [:tr {:key (str "merch-" (:id @item))
            :class "merch-rows"}
       [:th {:key (str "merch-" (:id @item) "/title")}
        (:title @item)
        #_ (when (:image @item)
             [:img {:src (:image @item)
                    :class "merch-thumb"}])
        [:p {:class "hint"} (:description @item)]]
       
       [:td {:key (str "merch-" (:id item) "/price")}
        (util/format-money (:price @item))]
       
       (if (= 1 (count (:styles @item)))
         
         [:td {:key (str "merch-" (:id @item) "/monostyle")}
          [:table [:tbody [product-style item (first (:styles @item))]]]]
         
         [product-style-auto-hide item open?])
       
       [:td {:key (str "merch-" (:id @item) "/cost")}
        (util/format-money (purchased-items-price item))]])))

(defn find-by-id [id]
  @(first (filter (= (:id #) id) @merch)))

(defn price-t-shirt [] (:price (find-by-id :festival-shirt)))
(defn price-coffee-mug [] (:price (find-by-id :coffee)))
(defn price-tote [] (:price @(find-by-id :tote-bag)))

(defn merch-header-row []
  [:thead [:tr {:key "merch-header-row"}
           [:th {:class "merch-item-col"} "Item"] 
           [:th {:class "merch-price-col"} "Price"] 
           [:th {:class "merch-styles-qty-col"} "Style / Qty."] 
           [:th {:class "merch-subtotal-col"} "Sum"]]])

(defn available-products []
  ;; if there  are no staff members  in the ticket,
  ;; hide  all  items  with an  ID  beginning  with
  ;; “staff-”
  (filter (if (some #(staff/staff? @%) @censorius.guest-list/guests)
            identity
            #(not= (.substring (str (:id %)) 0 7)
                   ":staff-"))
          @merch))

(defn merch-box []
  (when (pos? (count @guest-list/guests))
    [:section {:class "card" :key "merch-box"}
     [:h2 "Extras"]
     [:p "This section is being revised and styles/sizes will display erratically for now. TODO"]
     [:table {:class "extras"}
      [merch-header-row]
      [:tbody (for [product (available-products)] 
                [product-row product] )]
      [:tfoot [:tr {:key "merch-footer-row"} 
               [:th {:key "merch-footer/subtotal-label" :col-span 3} "Subtotal"]
               [:td {:key "merch-footer/subtotal"} [sum-merch-prices]]]]]]))
