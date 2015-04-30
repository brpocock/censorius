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

(defn fix-nil [value] (case value "∅" nil value))

(defn write-select [cursor label key tags size name]
  [:select {:size size :name name
            :value (let [tag (get @cursor key)]
                     (case tag nil "∅" tag))
            :on-change (fn [event]
                         (swap! cursor assoc key (fix-nil (.-value (.-target event)))))}
   (map (fn [[tag name]]
          [:option {:value (or (and (nil? tag) "∅") 
                               (str tag))
                    :key (str name "∈" (or tag "∞"))} 
           name]) 
     tags)])

(defn radio-set [{:keys [cursor label key tags]} children this]
  (let [name (util/gensymreally label)
        key-string (util/keyword->string key)]
    (fn [{:keys [cursor label key tags]} kids self]
      [:div
       (cond
         (< 15 (count tags))
         [:fieldset [:legend [:label {:for name} label]]
          (write-select cursor label key tags 10 name)]
         
         (< 5 (count tags))
         [:label label 
          (write-select cursor label key tags 1 name)]
         
         true
         [:fieldset [:legend label]
          (doall (map (fn [[tag name]]
                        [:div {:key (str name "∈" (or tag "∞"))} 
                         [:label [:input {:name (str name "-" key-string)
                                          :type "radio"
                                          :value (or (and (nil? tag) "∅") 
                                                     (str tag))
                                          :on-change
                                          (fn [event]
                                            (if (.-checked (.-target event))
                                              (swap! cursor assoc key tag)))
                                          :checked (= tag (get @cursor key))}]
                          name]]) 
                   tags))])])))
