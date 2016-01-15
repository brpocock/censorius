(ns censorius.editable
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]
   [censorius.utils :as util]))

(def nightshade? (atom false))

(defn nightshade []
  (fn []
    [:div {:id "nightshade"
           :style {:display (if @nightshade?
                              "block"
                              "none")}}]))

(defn click-edit [editing? label]
  {:on-click (fn [event]
               (reset! editing? true)
               (reset! nightshade? true #_ false #_ @editing?)
               (.stopPropagation event))
   :on-destroy (reset! nightshade? false)
   :style {:display (if @editing? "none" "block")}
   :class (str (.substring (str label) 1 (count (str label)))
               " editable-clickable "
               (if @editing?
                 "editing?"
                 "display"))})

(defn close [editing?]
  (when-not editing?
    (js/alert "Error: Close button unlinked from pop-up dialog box."))
  [:button {:class "close true"
            :on-click (fn [event] 
                        (reset! nightshade? false)
                        (reset! editing? false)
                        (.stopPropagation event))} 
   "✓ Close"])

