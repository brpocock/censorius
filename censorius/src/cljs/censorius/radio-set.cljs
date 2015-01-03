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

(defn write-select [cursor label key tags size]
  [:select {:size size :name name
            :value (get cursor key)
            :on-change (fn [event]
                         (let [node (.-target event)
                               value (.-value node)]
                           (swap! cursor assoc key value)))}
   (map (fn [[tag name]]
          [:option {:value (str tag)} name]) 
     tags)])

(defn radio-set [{:keys [cursor label key tags]} children this]
  (let [name (util/gensymreally label)
        key-string (util/keyword->string key)]
    (fn [cursor {:keys [label key tags]}]
      (cond
        (> 15 (count tags))
        [:fieldset [:legend [:label label :for name]]
         (write-select cursor label key tags 10)]
        
        (> 5 (count tags))
        [:label label
         (write-select cursor label key tags 1)]
        
        true
        [:fieldset [:legend [:label label]]
         (map (fn [[tag name]]
                [:div [:label [:input {:name (str name "-" key-string)
                                       :type "radio"
                                       :value (str tag)
                                       :on-click
                                       (fn [event]
                                         (let [node (.-target event)
                                               checked (.-checked node)]
                                           (if checked
                                             (swap! cursor assoc key tag))))
                                       :checked (= tag (get cursor key))}]
                       name]]) 
           tags)]))))
