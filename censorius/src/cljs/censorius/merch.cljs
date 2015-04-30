(ns censorius.merch
  (:require [clojure.string :as string]
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

(defn product-style [item index]
  (let [style (get (:styles @item) index)]
    [:div {:key (str (:id @item) "∋" (:id style))} 
     ;; (println " style " style " for item " (:id @item))
     (if (zero? (:inventory style))
       [:div [:small (:title style) " — Sold out."]]
       [:div [:strong (:qty style) " × " (.toUpperCase (str (:id style)))] " — "
        [:button {:on-click #(swap! item assoc-in [:styles index :qty] 
                                    (max 0 
                                         (dec (get-in @item [:styles index :qty]))))
                  :class (when (pos? (:qty style)) "false")
                  :disabled (zero? (:qty style))}
         "-"]
        (util/counting (get-in @item [:styles index :qty]) (:title style))
        [:button {:on-click #(swap! item assoc-in [:styles index :qty] 
                                    (min (get-in @item [:styles index :inventory]) 
                                         (inc (get-in @item [:styles index :qty]))))
                  :class (when (< (:qty style) (:inventory style)) "true")
                  :disabled (>= (:qty style) (:inventory style))}
         "+"]
        #_
        [text/text-input {:cursor item
                          :keys [:styles index :qty]
                          :label (:title style)
                          :placeholder "0"
                          :size 3
                          :format util/just-digits
                          :validate util/just-digits?}]
        (when (> 10 (:inventory style))
          [:div {:class "hint"} (util/counting (:inventory style) "item") " left"])])]))

#_ (defn product-style-1 [item]
     (let [style (first (:styles @item))]
       [:div {:key (str (:id @item) "∋" (:id style))} 
        (if (zero? (:inventory style))
          [:div {:class "hint"} "Sold out."]
          [:div (when (< (:inventory style) (:qty style))
                  [:p [:strong {:class "warning"}
                       "Please change your order."]
                   " Only " (string/lower-case (util/counting (:inventory style) "item"))
                   " of this style remain. You'll need to remove "
                   (string/lower-case (util/counting (- (:qty style) (:inventory style))
                                                     "item"))
                   " from your order."
                   (let [left (:inventory style)]
                     [:button {:class "false" :on-click #(swap! style assoc :qty left)}
                      "😦 Change to " left])])
           [text/text-input {:cursor item
                             :keys [:styles 0 :qty]
                             :placeholder "0"
                             :rows 0 :size 3
                             :format util/just-digits
                             :validate util/just-digits?}]
           (when (> 10 (:inventory style))
             [:div {:class "hint"}
              (util/counting (:inventory style) "item") " left"])
           (when (< (:inventory style) (:qty style))
             [running-out-style style])])]))

(defn product-row [[id item]]
  (let [open? (atom false)]
    (fn [[id item]]
      [:tr {:key (str "merch-" id)
            :class "merch-rows"}
       [:th [:img {:src (:image @item)
                   :class "merch-thumb"}] (:title @item)
        [:p {:class "hint"} (:description @item)]]
       [:td (util/format-money (:price @item))]
       [:td (if (= 1 (count (:styles @item)))
              [product-style item 0]
              (if (and (zero? (reduce + (map :qty (:styles @item))))
                       (not @open?)) 
                [:div {:on-click (fn [_] (swap! open? (fn [_] true)) nil)
                       :class "zoom"}
                 [:strong "Styles: "] 
                 [:small 
                  (let [styles (map :title (filter #(not (zero? (:inventory %))) (:styles @item)))
                        styles (if (< 3 (count styles))
                                 (flatten [(take 3 styles)
                                           (str "and "
                                                (.toLowerCase (util/counting (- (count styles) 4) "other")))])
                                 styles)]
                    (string/join ", " styles))]
                 [:button "⍐"]]
                [:div
                 (doall (map #(product-style item %) (range (count (:styles @item)))))
                 (when (zero? (reduce + (map :qty (:styles @item))))
                   (censorius.editable/close open?))]))
        (when (#{:festival-shirt :coffee :tote-bag} id)
          (let [guest-tag (get id {:festival-shirt :t-shirt
                                   :coffee :coffee?
                                   :tote-bag :tote?})
                purchased (count (filter #(get (deref %) guest-tag) 
                                         @d/guests))] 
            [:p {:class "hint"}
             "Plus "  (util/counting purchased (:title @item)) " purchased for "
             (if (= 1 purchased) " a guest " " guests ")
             " (above)."]))]
       [:td (util/format-money (* (reduce + (map :qty (:styles @item)))
                                  (:price @item)))]])))

(defn price-t-shirt [] (:price (deref (:festival-shirt @d/merch))))
(defn price-coffee-mug [] (:price (deref (:coffee @d/merch))))
(defn price-tote [] (:price (deref (:tote-bag @d/merch))))

(defn merch-box []
  (when (pos? (count @d/guests))
    [:section {:class "card"}
     [:h2 "Extras"]
     [:table {:class "extras"}
      [:thead [:tr 
               [:th {:class "merch-item-col"} "Item"] 
               [:th {:class "merch-price-col"} "Price"] 
               [:th {:class "merch-wide-col"} "Style / Qty."] 
               [:th {:class "merch-subtotal-col"} ""]]]
      [:tbody (doall (map (fn [item] [product-row item]) @d/merch))]
      [:tfoot [:tr [:th {:col-span 3} "Subtotal"]
               [:td [sum-merch-prices]]]]]]))
