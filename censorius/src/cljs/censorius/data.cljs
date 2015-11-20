(ns censorius.data
  (:require 
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]))

(defonce general (reagent/atom {:note nil :invoice nil}))

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

(defonce festival (reagent/atom {:season "Beltane" :year 2016
                                 :starting "2015-05-04"
                                 :ending "2015-05-08"}))



