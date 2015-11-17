(ns censorius.merch
  (:require [clojure.string :as string]
            [censorius.editable :as editable]
            [censorius.utils :as util]
            [censorius.data :as d]
            [censorius.staff :as staff]
            [censorius.text :as text]
            [reagent.core :as reagent :refer [atom]]))

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

(defn price-all-merch []
  (reduce + (map (fn [item]
                   (* (reduce + (map #(:qty %)
                                  (:styles @item)))
                      (:price @item)))
              (vals @d/merch))))

(defn sum-merch-prices []
  [:span (util/format-money (price-all-merch))])

(defn purchased-for-guests [id style]
  (case id
    :coffee
    (count (filter #(get @% :coffee?) @d/guests))
    :tote-bag
    (count (filter #(get @% :tote?) @d/guests))
    :festival-shirt
    (count (filter #(= style (get @% :t-shirt)) @d/guests))
    0))

(defn position-if [predicate sequence]
  (first (keep-indexed 
          (fn [i element] (when (predicate element) i))
          sequence)))

(defn product-style [item style]
  (let [style-index (position-if #(= (:id %) style) (:styles @item))
        sold (+ (:qty style)
                (purchased-for-guests (:id @item) (:id style)))]
    (util/log "item " (:id @item) " style " style " index " style-index)
    (if (nil? style-index)
      [:tr {:key (str (:id @item) "∋" (:id style))}
       [:td {:key (str (:id @item) "∋" (:id style))
             :col-span 4}
        [:small (:title style) " — ∞ we don't do that no more"]]]
      
      (if (zero? (:inventory style))
        [:tr {:key (str (:id @item) "∋" (:id style))}
         [:td {:key (str (:id @item) "∋" (:id style))
               :col-span 4}
          [:small (:title style) " — Sold out."]]]
        ;; available in inventory
        (let [can< (pos? (:qty style))
              can> (< sold (:inventory style))]
          [:tr {:key (str (:id @item) "∋" (:id style) "/styles")}
           ;; # sold
           [:td {:key (str (:id @item) "∋" (:id style) "/sold")
                 :style {:margin-right "1ex"}}
            [:strong sold "×" (.toUpperCase (str (:id style)))]]
           ;; <
           [:td {:key (str (:id @item) "∋" (:id style) "/less")}
            [:button {:on-click #(swap! item assoc-in [:styles style-index :qty] 
                                        (max 0
                                             (dec (get-in @item [:styles style-index :qty]))))
                      :class (when can< "false")
                      :disabled (not can<)}
             "-"]]
           ;; qty sold
           [:td {:key (str (:id @item) "∋" (:id style) "/qty")}
            (util/counting sold (:title style))]
           ;; >
           [:td {:key (str (:id @item) "∋" (:id style) "/more")}
            [:button {:on-click #(swap! item assoc-in [:styles style-index :qty] 
                                        (min (get-in @item [:styles style-index :inventory]) 
                                             (inc (:qty style))))
                      :class (when can> "true")
                      :disabled (not can>)}
             "+"]]
           ;; sellout warning
           (when (> (max 10 (- sold 5)) (:inventory style))
             [:tr {:key (str (:id @item) "∋" (:id style) "⚠")} 
              [:td {:key (str (:id @item) "∋" (:id style) "⚠☉")} ""]
              [:td {:key (str (:id @item) "∋" (:id style) "⚠sellout") 
                    :col-span 3 :class "hint"} (util/counting (:inventory style) "item") " left"]])])))))


(defn available-styles [item]
  (map :title (filter #(not (zero? (:inventory %))) (:styles @item))))

(defn style-names-string [styles]
  (if (< 3 (count styles))
    (flatten [(take 3 styles)
              (str "and "
                   (.toLowerCase (util/counting (- (count styles) 4) "other")))])
    styles))


(defn plus-grid-sales [item style]
  (let [purchased (purchased-for-guests (:id @item) (:id style))]
    (if (pos? purchased)
      [:p {:class "hint"}
       "*Including " (util/counting purchased (:title @item)) " purchased for "
       (if (= 1 purchased) " a guest " " guests ")
       " (above)."])))

(defn product-style-hidden [item open?]
  (if (and (zero? (reduce + (map :qty (:styles @item))))
           (not @open?)) 
    [:td {:key (str (:id @item) "-styles-hidden")
          :on-click (fn [_] (swap! open? (fn [_] true)) nil)
          :class "zoom"}
     [:strong "Styles: "] 
     [:small (string/join ", " (style-names-string (available-styles item)))]
     [:button "⍐"]]
    ;; opened
    [:td {:key (str (:id @item) "-styles")}
     [:table
      (doall (map #([product-style item %]) (available-styles @item)))]
     (plus-grid-sales (:id @item) (:id (first (:styles @item))))
     (when (zero? (reduce + (map :qty (:styles @item))))
       (editable/close open?))]))

(defn product-row [id item]
  (let [open? (atom false)]
    (fn [id item]
      [:tr {:key (str "merch-" id)
            :class "merch-rows"
            :style {:display (when (and (= id :staff-shirt)
                                        (not (some #(staff/staff? @%) @d/guests)))
                               "none")}}
       [:th {:key (str "merch-" id "/title")}
        (:title @item)
        #_ (when (:image @item)
             [:img {:src (:image @item)
                    :class "merch-thumb"}])
        [:p {:class "hint"} (:description @item)]]
       [:td {:key (str "merch-" id "/price")}
        (util/format-money (:price @item))]
       
       (if (= 1 (count (:styles @item)))
         
         [:td {:key (str "merch-" id "/monostyle")}
          [:table [:tbody [product-style item (first (:styles @item))]]]]
         
         [product-style-hidden item open?])

       
       [:td {:key (str "merch-" id "/cost")}
        (util/format-money (* (reduce + (map :qty (:styles @item)))
                              (:price @item)))]])))

(defn price-t-shirt [] (:price (deref (:festival-shirt @d/merch))))
(defn price-coffee-mug [] (:price (deref (:coffee @d/merch))))
(defn price-tote [] (:price (deref (:tote-bag @d/merch))))

(defn merch-box []
  (when (pos? (count @d/guests))
    [:section {:class "card" :key "merch-box"}
     [:h2 "Extras"]
     [:p "This section is being revised and styles/sizes will display erratically for now. TODO"]
     [:table {:class "extras"}
      [:thead [:tr {:key "merch-header-row"}
               [:th {:class "merch-item-col"} "Item"] 
               [:th {:class "merch-price-col"} "Price"] 
               [:th {:class "merch-styles-qty-col"} "Style / Qty."] 
               [:th {:class "merch-subtotal-col"} "Sum"]]]
      [:tbody (doall (map (fn [[id item]] [product-row id item]) @d/merch))]
      [:tfoot [:tr {:key "merch-footer-row"} 
               [:th {:key "merch-footer/subtotal-label" :col-span 3} "Subtotal"]
               [:td {:key "merch-footer/subtotal"} [sum-merch-prices]]]]]]))
