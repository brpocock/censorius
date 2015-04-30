(ns censorius.editable
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]))

(defn click-edit [editing label]
  {:on-click (fn [_] 
               (reset! editing (not @editing))
               true)
   :class (str (.substring (str label) 1 (count (str label)))
               " editable-clickable "
               (if @editing
                 "editing"
                 "display"))})

(defn close [editing]
  [:button {:class "close true"
            :on-click #(reset! editing false)} 
   "✓"])




