(ns censorius.editable
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]))

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
               (reset! nightshade? @editing?)
               (.stopPropagation event))
   :class (str (.substring (str label) 1 (count (str label)))
               " editable-clickable "
               (if @editing?
                 "editing?"
                 "display"))})

(defn close [editing?]
  [:button {:class "close true"
            :on-click (fn [event] 
                        (reset! nightshade? false)
                        (reset! editing? false)
                        (.stopPropagation event)
                        true)} 
   "✓ Close"])

