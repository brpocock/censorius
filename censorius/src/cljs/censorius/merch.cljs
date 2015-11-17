(ns censorius.merch
  (:require [clojure.string :as string]
            [censorius.editable :as editable]
            [censorius.utils :as util]
            [censorius.data :as d]
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

(defn purchased-for-guests [id]
  (if (#{:festival-shirt :coffee :tote-bag} id)
    (let [guest-tag (get id {:festival-shirt :t-shirt
                             :coffee :coffee?
                             :tote-bag :tote?})]
      (count (filter #(get (deref %) guest-tag) 
                     @d/guests)))
    0))

(defn product-style [item index monostyle?]
  (fn []
    (let [style (get (:styles @item) index)
          sold (+ (:qty style)
                  (purchased-for-guests item))]
      (if (zero? (:inventory style))
        [:tr {:key (str (:id @item) "∋" (:id style))} 
         [:td {:col-span 4}
          [:small (:title style) " — Sold out."]]]
        (let [can< (> (:qty style) (purchased-for-guests item))
              can> (< sold (:inventory style))]
          [:tr {:key (str (:id @item) "∋" (:id style))} 
           [:td {:key (str (:id @item) "∋" (:id style) "/sold")}
            [:strong sold "×"  
             (if monostyle?
               (.toUpperCase (str (:id style)))
               "")]]
           [:td {:key (str (:id @item) "∋" (:id style) "/less")}
            [:button {:on-click #(swap! item assoc-in [:styles index :qty] 
                                        (max 0
                                             (dec (get-in @item [:styles index :qty]))))
                      :class (when can< "false")
                      :disabled (not can<)}
             "-"]]
           [:td {:key (str (:id @item) "∋" (:id style) "/qty")}
            (util/counting sold (:title style))]
           [:td {:key (str (:id @item) "∋" (:id style) "/more")}
            [:button {:on-click #(swap! item assoc-in [:styles index :qty] 
                                        (min (get-in @item [:styles index :inventory]) 
                                             (inc (:qty style))))
                      :class (when can> "true")
                      :disabled (not can>)}
             "+"]]]
          (when (> (max 10 (- sold 5)) (:inventory style))
            [:tr {:key (str (:id @item) "∋" (:id style) "⚠")} 
             [:td {:key (str (:id @item) "∋" (:id style) "⚠☉")} ""]
             [:td {:key (str (:id @item) "∋" (:id style) "⚠sellout") 
                   :col-span 3 :class "hint"} (util/counting (:inventory style) "item") " left"]]))))))

(defn available-styles [item]
  (map :title (filter #(not (zero? (:inventory %))) (:styles @item))))

(defn style-names-string [styles]
  (if (< 3 (count styles))
    (flatten [(take 3 styles)
              (str "and "
                   (.toLowerCase (util/counting (- (count styles) 4) "other")))])
    styles))

(defn product-style-hidden [item open?]
  (if (and (zero? (reduce + (map :qty (:styles @item))))
           (not @open?)) 
    [:td {:key (str (:id @item) "-styles-hidden")
          :on-click (fn [_] (swap! open? (fn [_] true)) nil)
          :class "zoom"}
     [:strong "Styles: "] 
     [:small (string/join ", " (style-names-string (available-styles item)))]
     [:button "⍐"]]
    [:td {:key (:id @item)}
     [:table
      (doall (map (fn [style-index] [product-style item style-index true]) 
               (range (count (:styles @item)))))]
     (when (zero? (reduce + (map :qty (:styles @item))))
       (editable/close open?))]))

(defn product-row [[id item]]
  (let [open? (atom false)]
    (fn [[id item]]
      [:tr {:key (str "merch-" id)
            :class "merch-rows"}
       [:th {:key (str "merch-" id "/title")}
        
        ;; [:img {:src (:image @item)
        ;;        :class "merch-thumb"}]
        (:title @item)
        [:p {:class "hint"} (:description @item)]]
       [:td {:key (str "merch-" id "/price")}
        (util/format-money (:price @item))]
       (if (= 1 (count (:styles @item)))
         [:td {:key (str "merch-" id "/monostyle")}
          [:table [product-style item 0 true]]]
         [product-style-hidden item open?])

       (let [purchased (purchased-for-guests id)]
         (if (pos? purchased)
           [:p {:class "hint"}
            "Plus " (util/counting purchased (:title @item)) " purchased for "
            (if (= 1 purchased) " a guest " " guests ")
            " (above)."]))
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
     [:table {:class "extras"}
      [:thead [:tr {:key "merch-header-row"}
               [:th {:class "merch-item-col"} "Item"] 
               [:th {:class "merch-price-col"} "Price"] 
               [:th {:class "merch-wide-col"} "Style / Qty."] 
               [:th {:class "merch-subtotal-col"} "Sum"]]]
      [:tbody (doall (map (fn [item] [product-row item]) @d/merch))]
      [:tfoot [:tr {:key "merch-footer-row"} 
               [:th {:col-span 3} "Subtotal"]
               [:td [sum-merch-prices]]]]]]))
