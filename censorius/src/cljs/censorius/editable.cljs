(ns censorius.editable
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]))

(defn click-edit [editing tag]
  {:on-click (fn [e] 
               (js/alert (str "Edit " tag " toggle (was " @editing ")"))
               (reset! editing (not @editing)))
   :class (str (.substring (str tag) 1 (count (str tag)))
               " "
               (if @editing
                 "editing"
                 "display"))}
  (when @editing "EDIT* "))
