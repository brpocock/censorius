(ns censorius.data
  (:require [clojure.string :as string]
            [alandipert.storage-atom :refer [local-storage]]
            [reagent.core :as reagent :refer [atom]]))

(defonce vending (local-storage (reagent/atom {:title nil, :blurb nil, :notes nil, :qty 0, :agreement false}) 
                                :reg-vending))
(defonce general (local-storage (reagent/atom {:note nil :invoice nil})
                                :reg-general))
(defonce workshops (local-storage (reagent/atom [])
                                  :reg-workshops))
(defonce scholarships (local-storage (reagent/atom {:php 0 :seva 0 :baiardi 0})
                                     :reg-scholarships))

(defonce festival (reagent/atom {:season "Beltane" :year 2016
                                 :starting "2015-05-04"
                                 :ending "2015-05-08"}))

(defonce payments (reagent/atom []))

(defonce prices (reagent/atom {:ticket { :adult 95
                                        :child 30
                                        :under5 0
                                        :week-end 40 ; TODO?
                                        :day-pass 30 ; TODO?
                                        :lugal-so 30
                                        :staff 30}
                               :vendor 25
                               :cauldron {:fri-sun 45
                                          :adult 65
                                          :child 30
                                          :under5 0}
                               :salad-bar 35
                               :cabin {:regular 45 :staff 25}
                               :lodge {:regular 60 :staff 45}}))

