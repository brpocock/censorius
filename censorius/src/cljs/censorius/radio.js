(ns censorius.radio
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :refer [put! chan <!]]
   [clojure.data :as data]
   [clojure.string :as string]
   [goog.events :as events]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [secretary.core :as secretary]
            
   [censorius.utils :as util])
  (:import [goog History]
           [goog.history EventType]))

(defn write-select [cursor label korks tags size name]
  [:select {:size size :name name
            :value (get cursor korks)
            :on-change (fn [event]
                         (let [node (.-target event)
                               value (.-value node)]
                           (swap! cursor assoc korks value)))}
   (map (fn [[tag name]]
          [:option {:value (str tag)} name]) 
     tags)])

(defn radio-set [{:keys [cursor label korks tags]} children this]
  (let [name (util/gensymreally label)
        key-string (util/keyword->string korks)]
    (fn [cursor {:keys [label key tags]}]
      (cond
        (> 15 (count tags))
        [:fieldset [:legend [:label {:for name} label] "BOO!"]
         (write-select cursor label korks tags 10 name)]
        
        (> 5 (count tags))
        [:label label 
         (write-select cursor label korks tags 1 name)]
        
        true
        [:fieldset [:legend [:label label "Dingoes ate my baby"]]
         (for [[tag name] tags]
           (doall 
            [:div [:label [:input {:name (str name "-" korks-string)
                                   :type "radio"
                                   :value (str tag)
                                   :on-click
                                   (fn [event]
                                     (let [node (.-target event)
                                           checked (.-checked node)]
                                       (if checked
                                         (swap! cursor assoc korks tag))))
                                   :checked (= tag (get cursor korks))}]
                   name]]))]))))
