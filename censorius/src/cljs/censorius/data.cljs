(ns censorius.data
  (:require 
   [clojure.string :as string]
   [alandipert.storage-atom :refer [local-storage]]
   [reagent.core :as reagent :refer [atom]]))


(defonce general (local-storage (reagent/atom {:note nil :invoice nil})
                                :reg-general))



(defonce festival (reagent/atom {:season "Beltane" :year 2016
                                 :starting "2015-05-04"
                                 :ending "2015-05-08"}))



