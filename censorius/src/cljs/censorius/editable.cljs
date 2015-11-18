(ns censorius.editable
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]
   [censorius.utils :as util]))

(defn click-edit [editing label]
  {:on-click (fn [event] 
               (reset! editing (not @editing))
               (.stopPropagation event))
   :class (str (.substring (str label) 1 (count (str label)))
               " editable-clickable "
               (if @editing
                 "editing"
                 "display"))})

(defn close [editing]
  (util/modality #(reset! editing false)
                 [:button {:class "close true"} 
                  "✓ Close"]))




