(ns censorius.staff
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   ))

(def +staff-mail+ {"ama422@aol.com" :ann-marie,
                   "brpocock@star-hope.org" :brfp,
                   "sage@star-hope.org" :sage
                   "suannegould@gmail.com" :mystral})

(def +bod+ [:ann-marie :lady-rae :medea :teresa :paul])
(def +div+ {:cauldron {:coord :alysia :name "Bubbling Cauldron"}
            :hearth {:coord :narissa :name "Guest Hearth"}
            :ops {:coord :mystral :name "Operations"}
            :registration {:coord :bobbi-jo :name "Registration"}
            :site {:coord :doug :name "Site"}
            :staff {:coord :sandi :name "Staff Services"}
            :bod {:name "Board of Directors' Division"}})

(def +advisory+ [:scott-kelly :mystral])
(def +elders+ [:roger :galan :thundar :guardian-bob :arachne])
(def +departments+ {:community {:lugal :thor
                                :div :ops :name "Community Groups"}
                    :comptroller {:lugal [:ray :jade]
                                  :div :bod :name "Comptroller"}
                    :concert {:lugal :paul
                              :div :bod :name "Concert Sound & Lights"}
                    :design {:lugal [:mystral :diane :medea]
                             :div :ops :name "Design Team"}
                    :fire {:lugal :dee
                           :div :site :name "Fire Circle"}
                    :gate {:lugal :tony
                           :div :registration :name "Gate"}
                    :gungans {:lugal :perseus
                              :div :site :name "Gungans"}
                    :hearth {:lugal :cowboy
                             :div :hearth :name "Guest Hearth"}
                    :kids {:lugal :jennifer
                           :div :ops :name "Kids' Realm"}
                    :parking {:lugal :geoffrey
                              :div :registration :name "Parking"}
                    :web {:lugal :diane 
                          :div :bod :name "Photography & Web Design"}
                    :registration {:lugal :amanda
                                   :div :registration :name "Registration"}
                    :ritual {:lugal [:roger :scion]
                             :div :bod :name "Ritual"}
                    :site {:lugal [:cliff :joe]
                           :div :site :name "Site & Strike"}
                    :office {:lugal :jessica
                             :div :staff :name "Ministry of Magic"}
                    :staffing {:lugal :medea
                               :div :bod :name "Staffing"}
                    :store {:lugal :beth
                            :div :ops :name "Store Runner"}
                    :taxi {:lugal [:aurora :jim]
                           :div :hearth :name "Taxi/Trolley"}
                    :teen {:lugal nil
                           :div :ops :name "Teen Forge"}
                    :tech {:lugal :brfp
                           :div :ops :name "Technology"}
                    :trash {:lugal nil
                            :div :site :name "Trash"}
                    :tween {:lugal :soren
                            :div :ops :name "Tween Time"}
                    :vendors {:lugal :sage
                              :div :ops :name "Vendors"}
                    :workshops {:lugal :sage
                                :div :ops :name "Workshops"}})

(def +drummers+ #{:nicole})

(def +guardians+ #{:sqrl :fox})

(defn highest-job? [staff-id]
  (or (when (get +bod+ staff-id)
        :bod)
      (when (some (partial = staff-id) (map (partial :coord) +div+))
        :dc)
      (when (get +advisory+ staff-id)
        :advisory-board)
      (when (get +elders+ staff-id)
        :elder)
      (when (some #(or (= % staff-id)
                       ((set %) staff-id)) (map (partial :lugal) +departments+))
        :lugal)
      (when (get +guardians+ staff-id)
        :guardian)
      (when (get +drummers+ staff-id)
        :drummer)
      (when (some #(get (:staff (get +departments+ %)) staff-id) (keys +departments+))
        :staff)
      nil))

(defn staff-id [person]
  (get +staff-mail+ person))

(defn staff? [person]
  (get +staff-mail+ (:e-mail person)))

(defn lugal+? [person]
  (when-let [staff-id (staff-id person)]
    (println "Lugal+ for staff ID " staff-id)
    (let [job (highest-job? staff-id)]
      (not (#{nil :staff :guardian :drummer} job)))))

