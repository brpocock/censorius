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

(defn write-option [cursor key [tag name]]
  [:option {:value (or (and (nil? tag) "∅") 
                       (str tag))
            :key (str name "∈" (or tag "∞")) } 
   name])

(defn write-select [cursor label key key-string tags size name]
  [:select {:size size :name key-string
            :value (let [tag (get @cursor key)]
                     (case tag nil "∅" tag))
            :on-change (fn [event]
                         (swap! cursor assoc key (fix-nil (.-value (.-target event))))
                         true)}
   (map (partial write-option cursor key) tags)])

(defn radio-button [key key-string cursor [tag name]]
  #_(util/log " radio button key " key " key-string " key-string " tag " tag " name " name)
  [:div {:key (str name "∈" (or tag "∞"))} 
   [:label 
    [:input {:name key-string
             :type "radio"
             :value (or (and (nil? tag) "∅") 
                        (str tag))
             :on-change (fn [event]
                          (when (.-checked (.-target event))
                            (swap! cursor assoc key (fix-nil tag)))
                          true)
             :checked (= tag (get @cursor key))}]
    name]])

(defn write-radio-set [cursor label key key-string tags name] 
  #_(util/log "mapping set label " label " key-string " key-string " over tags " tags)
  [:fieldset 
   (when (not (empty? label)) [:legend label])
   (doall (map (partial radio-button key key-string cursor) tags))])

(defn radio-set [{:keys [cursor label key tags]} children this]
  (let [name (util/gensymreally label)
        key-string (util/keyword->string key)]
    (fn [{:keys [cursor label key tags]} kids self]
      #_(util/log "Radio set label " label " with " (count tags) " tags " tags)
      [:div
       (cond
         (< 15 (count tags))
         [:fieldset [:legend [:label {:for name} label]]
          [write-select cursor label key key-string tags 10 name]]
         
         (< 5 (count tags))
         [:label label 
          [write-select cursor label key key-string tags 1 name]]
         
         true
         [write-radio-set cursor label key key-string tags name])])))
