(ns censorius.data
  (:require [clojure.string :as string]
            [alandipert.storage-atom :refer [local-storage]]
            [reagent.core :as reagent :refer [atom]]))

(defonce guests (local-storage (reagent/atom [ #_ (reagent/atom { :called-by "Sage" :given-name "John" :surname "Fenn Pocock"
                                                                 :formal-name nil :presenter-bio nil :presenter-requests nil
                                                                 :e-mail "sage@star-hope.org" :telephone nil
                                                                 :sleep :tent :eat nil :day nil
                                                                 :gender :m :ticket-type :adult
                                                                 :t-shirt :xs :coffee? false :tote? false }) ])
                               :reg-guests))

(defonce extras (local-storage (reagent/atom []) 
                               :reg-merch))
(defonce vending (local-storage (reagent/atom {:title nil, :blurb nil, :notes nil, :qty 0, :agreement false}) 
                                :reg-vending))
(defonce general (local-storage (reagent/atom {:note nil})
                                :reg-general))
(defonce workshops (local-storage (reagent/atom [])
                                  :reg-workshops))
(defonce scholarships (local-storage (reagent/atom {:php 0 :seva 0 :baiardi 0})
                                     :reg-scholarships))

(defonce festival (reagent/atom {:season "Samhain" :year 2015}))

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


(defonce merch (reagent/atom {
                              ;; :general-shirt 
                              ;; (reagent/atom {:title "FPG General T-Shirt"
                              ;;        :description "The FPG general T-shirt"
                              ;;        :image "/merch/tshirt_Gen.png"
                              ;;        :price 50
                              ;;        :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 0}
                              ;;                 {:id :s :title "Small" :qty 0 :inventory 2}
                              ;;                 {:id :m :title "Medium" :qty 0 :inventory 0}
                              ;;                 {:id :l :title "Large" :qty 0 :inventory 0}
                              ;;                 {:id :xl :title "Extra-large" :qty 0 :inventory 0}
                              ;;                 {:id :x2l :title "Double extra-large" :qty 0 :inventory 1}
                              ;;                 {:id :x3l :title "Triple extra-large" :qty 0 :inventory 3}
                              ;;                 {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 2}
                              ;;                 {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 2}]})
                              :tote-bag 
                              (reagent/atom {:id :tote-bag
                                             :title "FPG Tote Bag"
                                             :description "The tote bag with the FPG logo"
                                             :image "/merch/tote-bag.jpeg"
                                             :price 10
                                             :styles [{:id :tote :title "Tote Bag" :qty 0 :inventory 13}]})
                              :coffee
                              (reagent/atom {:id :coffee
                                             :title "FPG Coffee Mug"
                                             :price 7
                                             :description "The FPG thermal coffee mug is great for other beverages, too"
                                             :image "/merch/tote-bag.jpeg"
                                             :styles [{:id :mug :title "Coffee mug" :qty 0 :inventory 140}]})
                              :water
                              (reagent/atom {:id :water
                                             :title "FPG Water Bottle"
                                             :price 25
                                             :description "The FPG water bottle is great for other beverages, too"
                                             :image "/merch/tote-bag.jpeg"
                                             :styles [{:id :water :title "Water bottle" :qty 0 :inventory 62}]})
                              :festival-shirt
                              (reagent/atom {:id :festival-shirt
                                             :title "Festival T-Shirt"
                                             :description "The new T-shirt for this festival"
                                             :image "/merch/tshirt-fest.png"
                                             :price 15
                                             :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 999}
                                                      {:id :s :title "Small" :qty 0 :inventory 999}
                                                      {:id :m :title "Medium" :qty 0 :inventory 999}
                                                      {:id :l :title "Large" :qty 0 :inventory 999}
                                                      {:id :xl :title "Extra-large" :qty 0 :inventory 999}
                                                      {:id :x2l :title "Double extra-large" :qty 0 :inventory 999}
                                                      {:id :x3l :title "Triple extra-large" :qty 0 :inventory 999}
                                                      {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 999}
                                                      {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 999}]})
                              :general-fpg-shirt
                              (reagent/atom {:id :general-fpg-shirt
                                             :title "General FPG T-Shirt"
                                             :description "The general T-shirt for FPG"
                                             :image "/merch/tshirt-general.png"
                                             :price 15
                                             :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 999}
                                                      {:id :s :title "Small" :qty 0 :inventory 999}
                                                      {:id :m :title "Medium" :qty 0 :inventory 999}
                                                      {:id :l :title "Large" :qty 0 :inventory 999}
                                                      {:id :xl :title "Extra-large" :qty 0 :inventory 999}
                                                      {:id :x2l :title "Double extra-large" :qty 0 :inventory 999}
                                                      {:id :x3l :title "Triple extra-large" :qty 0 :inventory 999}
                                                      {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 999}
                                                      {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 999}]})
                              :shirt-b13
                              (reagent/atom {:title "Beltane 2013 T-shirt"
                                             :description "The T-shirt from Beltane 2013"
                                             :image "/merch/tshirtB13.png"
                                             :price 798
                                             :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 0}
                                                      {:id :s :title "Small" :qty 0 :inventory 0}
                                                      {:id :m :title "Medium" :qty 0 :inventory 0}
                                                      {:id :l :title "Large" :qty 0 :inventory 0}
                                                      {:id :xl :title "Extra-large" :qty 0 :inventory 0}
                                                      {:id :x2l :title "Double extra-large" :qty 0 :inventory 1}
                                                      {:id :x3l :title "Triple extra-large" :qty 0 :inventory 3}
                                                      {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 0}
                                                      {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 1}]})
                              :shirt-s13
                              (reagent/atom {:title "Samhain 2013 T-shirt"
                                             :description "The T-shirt from Samhain 2013"
                                             :image "/merch/tshirtS13.png"
                                             :price 798
                                             :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 0}
                                                      {:id :s :title "Small" :qty 0 :inventory 0}
                                                      {:id :m :title "Medium" :qty 0 :inventory 0}
                                                      {:id :l :title "Large" :qty 0 :inventory 0}
                                                      {:id :xl :title "Extra-large" :qty 0 :inventory 0}
                                                      {:id :x2l :title "Double extra-large" :qty 0 :inventory 3}
                                                      {:id :x3l :title "Triple extra-large" :qty 0 :inventory 0}
                                                      {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 1}
                                                      {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 1}]})
                              :tank-s13
                              (reagent/atom {:title "Samhain 2013 Tank top"
                                             :description "The Tank top shirt from Samhain 2013"
                                             :image "/merch/tshirtS13.png"
                                             :price 798
                                             :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 0}
                                                      {:id :s :title "Small" :qty 0 :inventory 1}
                                                      {:id :m :title "Medium" :qty 0 :inventory 3}
                                                      {:id :l :title "Large" :qty 0 :inventory 3}
                                                      {:id :xl :title "Extra-large" :qty 0 :inventory 3}
                                                      {:id :x2l :title "Double extra-large" :qty 0 :inventory 1}
                                                      {:id :x3l :title "Triple extra-large" :qty 0 :inventory 1}
                                                      {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 0}
                                                      {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 0}]})
                              :staff-shirt
                              (reagent/atom {:id :staff-shirt
                                             :title "Staff T-Shirt"
                                             :description "The staff T-shirt"
                                             :image "/merch/tshirt-staff.png"
                                             :price 15
                                             :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 999}
                                                      {:id :s :title "Small" :qty 0 :inventory 999}
                                                      {:id :m :title "Medium" :qty 0 :inventory 999}
                                                      {:id :l :title "Large" :qty 0 :inventory 999}
                                                      {:id :xl :title "Extra-large" :qty 0 :inventory 999}
                                                      {:id :x2l :title "Double extra-large" :qty 0 :inventory 999}
                                                      {:id :x3l :title "Triple extra-large" :qty 0 :inventory 999}
                                                      {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 999}
                                                      {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 999}]})
                              }))



;; (defonce people (reagent/atom {:brfp {:given-name ["Bruce-Robert"]
;;                               :surname ["Pocock"]
;;                               :dob {:year 1977 :month 10 :day 21}
;;                               :e-mail [[:personal "brpocock@star-hope.org"]
;;                                        [:personal "brpocock@gmail.com"]]
;;                               :phone [[:mobile "321-396-2625"]]
;;                               :rel [[:spouse :sage]]}
;;                        :diane {:given-name ["Diane"]}
;;                        :sage {:given-name ["John"]
;;                               :surname ["Starkie"]
;;                               :called-by ["Sage"]
;;                               :rel [[:spouse :brfp]]}
;;                        :annemarie {:given-name ["Ann Marie"]
;;                                    :surname ["Augustino"]
;;                                    :e-mail [[:personal "ama422@aol.com"]]}
;;                        :mystral {:given-name ["Sue Anne"]
;;                                  :surname ["Gould"]
;;                                  :called-by ["Mystral"]
;;                                  :rel [[:spouse :thor]
;;                                        [:child :soren]]}
;;                        :thor {:given-name ["John"]
;;                               :surname ["Gould"]
;;                               :called-by ["Thor"]
;;                               :rel [[:spouse :mystral]
;;                                     [:child :soren]]}

;;                        :soren {:given-name ["Soren"]
;;                                :surname ["Gould"]
;;                                :rel [[:parent :mystral]
;;                                      [:parent :thor]]}}))
