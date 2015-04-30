(ns censorius.data
  (:require [clojure.string :as string]
            [reagent.core :as reagent :refer [atom]]))

(defonce guests (atom [(atom { :called-by "Sage" :given-name "John" :surname "Fenn Pocock"
                              :formal-name nil :presenter-bio nil :presenter-requests nil
                              :e-mail "sage@star-hope.org" :telephone nil
                              :sleep :tent :eat :looney :day nil
                              :gender :m
                              :t-shirt :xs :coffee? false :tote? false }) ]))

(defonce extras (atom []))

(defonce vending (atom {:title nil, :blurb nil, :notes nil, :qty 0, :agreement false}))

(defonce workshops (atom []))

(defonce festival (atom {:season "Samhain" :year 2015}))

(defonce scholarships (atom {:php 0 :seva 0 :baiardi 0}))
(defonce prices (atom {:ticket { :adult 95
                                :child 30
                                :under5 0
                                :lugal-so 30
                                :staff 30}
                       :vendor 25
                       :cauldron { :fri-sun 45
                                  :adult 65
                                  :child 30
                                  :under5 0}
                       :cabin {:regular 45 :staff 25}
                       :lodge {:regular 60 :staff 45}}))


(defonce merch (atom {:general-shirt 
                      (atom {:title "FPG General T-Shirt"
                             :description "The FPG general T-shirt"
                             :image "/merch/tshirt_Gen.png"
                             :price 175
                             :styles [{:id :xs :title "Extra-small" :qty 0 :inventory 0}
                                      {:id :s :title "Small" :qty 0 :inventory 2}
                                      {:id :m :title "Medium" :qty 0 :inventory 0}
                                      {:id :l :title "Large" :qty 0 :inventory 0}
                                      {:id :xl :title "Extra-large" :qty 0 :inventory 0}
                                      {:id :x2l :title "Double extra-large" :qty 0 :inventory 1}
                                      {:id :x3l :title "Triple extra-large" :qty 0 :inventory 3}
                                      {:id :x4l :title "Quadruple extra-large" :qty 0 :inventory 2}
                                      {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 2}]})
                      :tote-bag 
                      (atom {:title "FPG Tote Bag"
                             :description "The FPG general T-shirt"
                             :image "/merch/tote-bag.jpeg"
                             :price 325
                             :styles [{:id :tote :title "Tote Bag" :qty 0 :inventory 13}]})
                      :coffee
                      (atom {:title "FPG Coffee Mug"
                             :price 325
                             :description "The FPG thermal coffee mug is great for other beverages, too"
                             :image "/merch/tote-bag.jpeg"
                             :styles [{:id :tote :title "Coffee mug" :qty 0 :inventory 140}]})
                      :water
                      (atom {:title "FPG Water Bottle"
                             :price 325
                             :description "The FPG water bottle is great for other beverages, too"
                             :image "/merch/tote-bag.jpeg"
                             :styles [{:id :tote :title "Water bottle" :qty 0 :inventory 62}]})
                      :festival-shirt
                      (atom {:title "Festival T-Shirt"
                             :description "The new T-shirt for Beltane 2015"
                             :image "/merch/tshirtS14.png"
                             :price 798
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
                      (atom {:title "Beltane 2013 T-shirt"
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
                      (atom {:title "Samhain 2013 T-shirt"
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
                      (atom {:title "Samhain 2013 Tank top"
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
                                      {:id :x5l :title "Quintuple extra-large" :qty 0 :inventory 0}]})}))



(defonce people (atom {:brfp {:given-name ["Bruce-Robert"]
                              :surname ["Pocock"]
                              :dob {:year 1977 :month 10 :day 21}
                              :e-mail [[:personal "brpocock@star-hope.org"]
                                       [:personal "brpocock@gmail.com"]]
                              :phone [[:mobile "321-396-2625"]]
                              :rel [[:spouse :sage]]}
                       :diane {:given-name ["Diane"]}
                       :sage {:given-name ["John"]
                              :surname ["Starkie"]
                              :called-by ["Sage"]
                              :rel [[:spouse :brfp]]}
                       :annemarie {:given-name ["Ann Marie"]
                                   :surname ["Augustino"]
                                   :e-mail [[:personal "ama422@aol.com"]]}
                       :mystral {:given-name ["Sue Anne"]
                                 :surname ["Gould"]
                                 :called-by ["Mystral"]
                                 :rel [[:spouse :thor]
                                       [:child :soren]]}
                       :thor {:given-name ["John"]
                              :surname ["Gould"]
                              :called-by ["Thor"]
                              :rel [[:spouse :mystral]
                                    [:child :soren]]}

                       :soren {:given-name ["Soren"]
                               :surname ["Gould"]
                               :rel [[:parent :mystral]
                                     [:parent :thor]]}}))
