(ns censorius.staff
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [censorius.utils :as util]))

(def +staff-mail+ {"ama422@aol.com" :ann-marie,
                   "brpocock@star-hope.org" :brfp,
                   "sage@star-hope.org" :sage
                   "suannegould@gmail.com" :mystral
                   "x1@example.com" :lady-rae
                   "x2@example.com" :medea
                   "x3@example.com" :teresa
                   "x4@example.com" :paul
                   "x5@example.com" :alysia
                   "x6@example.com" :narissa
                   "x7@example.com" :bobbi-jo
                   "x8@example.com" :doug
                   "x9@example.com" :sandi
                   "xa@example.com" :thor
                   "xb@example.com" :jade
                   "xc@example.com" :paul
                   "xd@example.com" :diane
                   "xe@example.com" :dee
                   "xf@example.com" :perseus
                   "xg@example.com" :cowboy
                   "xh@example.com" :roger
                   "xi@example.com" :scion
                   "xj@example.com" :amanda
                   "xk@example.com" :jim
                   "xl@example.com" :geoffrey
                   "xm@example.com" :jessica
                   "xn@example.com" :beth
                   "xo@example.com" :stu
                   "xp@example.com" :soren
                   "xq@example.com" :aurora
                   "xr@example.com" :jim-hines
                   "xs@example.com" :beth
                   "xt@example.com" :galan
                   "xu@example.com" :thundar
                   "xv@example.com" :guardian-bob
                   "xw@example.com" :arachne
                   "xx@example.com" :sqrl
                   "xy@example.com" :fox
                   "xz@example.com" :nicole})

(def +bod+ [:ann-marie :lady-rae :medea :teresa :paul])
(def +div+ {:cauldron {:coord :alysia :name "Bubbling Cauldron"}
            :hearth {:coord :narissa :name "Guest Hearth"}
            :ops {:coord :mystral :name "Operations"}
            :registration {:coord :bobbi-jo :name "Registration"}
            :site {:coord :doug :name "Site"}
            :staff {:coord :sandi :name "Staff Services"}
            :bod {:coord :ann-marie :name "Board of Directors' Division"}})

(def +advisory+ [])
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
                    :registration {:lugal [:amanda :jim]
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
                    :taxi {:lugal [:aurora :jim*hines]
                           :div :hearth :name "Taxi/Trolley"}
                    :teen {:lugal nil
                           :div :ops :name "Teen Forge"}
                    :tech {:lugal :brfp
                           :div :ops :name "Technology"}
                    :trash {:lugal :stu
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
  (and staff-id
       (or (when (get +bod+ staff-id)
             :bod)
           ;; (when-let [div (filter (fn [[div info]]
           ;;                          (when (= staff-id (:coord info))
           ;;                            div))
           ;;                        +div+)]
           ;;   (first div))
           
           (when (some (partial = staff-id) (map (fn [[id div]]
                                                   (:coord div)) +div+))
             :dc)
           ;; (when (get +advisory+ staff-id)
           ;;   :advisory-board)
           (when (get +elders+ staff-id)
             :elder)
           (when (some (fn [lugal-s] 
                         (if (seq? lugal-s)
                           (some (partial = staff-id) lugal-s)
                           (= staff-id lugal-s))) 
                       (map (fn [[id dept]]
                              (:lugal dept)) +departments+))
             :lugal)
           (when (get +guardians+ staff-id)
             :guardian)
           (when (get +drummers+ staff-id)
             :drummer)
           (when (some #(get (:staff (get +departments+ %)) staff-id) (keys +departments+))
             :staff)
           nil)))

(defn staff-id [mail]
  #_ (util/log "staff-id ← " mail " = " (get +staff-mail+ mail))
  (get +staff-mail+ mail))

(defn staff? [person]
  (let [staffy (or (and (:e-mail person)
                        (highest-job? (staff-id (:e-mail person))))
                   (:staff-department person))]
    #_ (util/log "Staff? → " staffy)
    staffy))

(defn lugal+? [person]
  (when-let [staff-id (staff-id (:e-mail person))]
    #_ (util/log "Lugal+ for staff ID ? " staff-id)
    (let [job (highest-job? staff-id)]
      (when (#{:lugal :elder :advisory-board :dc :bod} job)
        #_ (util/log "Yes, Lugal+ — " job)
        job))))

