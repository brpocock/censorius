(ns censorius.staff
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [censorius.utils :as util]))

(def +staff-mail+ {"bjcalupca@aol.com" "bjcalupca@aol.com"
                   "sandiberlinratliff@yahoo.com" "sandiberlinratliff@yahoo.com"
                   "silvermoonlady9@yahoo.com" "silvermoonlady9@yahoo.com"
                   "suannegould@gmail.com" "suannegould@gmail.com"
                   "ama422@aol.com" "ama422@aol.com"
                   "brpocock@star-hope.org" "brpocock@star-hope.org"
                   "bigredog14@gmail.com" "bigredog14@gmail.com"
                   "constance.m.grimsley@gmail.com" "constance.m.grimsley@gmail.com"
                   "spence101878@gmail.com" "spence101878@gmail.com"
                   "phyrphlyeyez@gmail.com" "phyrphlyeyez@gmail.com"
                   "healthymom@hotmail.com" "healthymom@hotmail.com"
                   "ddolph1n@yahoo.com" "ddolph1n@yahoo.com"
                   "ladyunicornbeth@yahoo.com" "ladyunicornbeth@yahoo.com"
                   "dharmahog@gmail.com" "dharmahog@gmail.com"
                   "jade6969cp@yahoo.com" "jade6969cp@yahoo.com"
                   "nursejenn42@gmail.com" "nursejenn42@gmail.com"
                   "jennie0280@yahoo.com" "jennie0280@yahoo.com"
                   "jess_carpenter@hotmail.com" "jess_carpenter@hotmail.com"
                   "jim.dustman@gmail.com" "jim.dustman@gmail.com"
                   "jpocock@star-hope.org" "jpocock@star-hope.org"
                   "narissamyers@yahoo.com" "narissamyers@yahoo.com"
                   "c4life1@gmail.com" "c4life1@gmail.com"
                   "dethmoongypsy@yahoo.com" "dethmoongypsy@yahoo.com"
                   "lrblackhood@aol.com" "lrblackhood@aol.com"
                   "paultgarrett@gmail.com" "paultgarrett@gmail.com"
                   "freakboy@nightbirdsjourney.com" "freakboy@nightbirdsjourney.com"
                   "smshame@hotmail.com" "smshame@hotmail.com"
                   "beccasturgill@gmail.com" "beccasturgill@gmail.com"
                   "teresa.fpgstuff@gmail.com" "teresa.fpgstuff@gmail.com"
                   "tajredhawk@aol.com" "tajredhawk@aol.com" })

(def +bod+ ["ama422@aol.com" 
            "jennie0280@yahoo.com" 
            "lrblackhood@aol.com" 
            "paultgarrett@gmail.com" 
            "teresa.fpgstuff@gmail.com" 
            ])
(def +div+ {:cauldron { :name "Bubbling Cauldron"}
            :hearth {:coord "narissamyers@yahoo.com" :name "Guest Hearth"}
            :ops {:coord "suannegould@gmail.com" :name "Operations"}
            :registration {:coord "bjcalupca@aol.com" :name "Registration"}
            :site {  :name "Site"}
            :staff {:coord "sandiberlinratliff@yahoo.com" :name "Staff Services"}
            :bod {:coord "ama422@aol.com" :name "Board of Directors' Division"}})

(def +advisory+ [])
(def +elders+ [:roger :galan :thundar :guardian-bob :arachne])
(def +departments+ {:community {:lugal "constance.m.grimsley@gmail.com"
                                :div :ops :name "Community Center"}
                    :comptroller {:lugal "jade6969cp@yahoo.com"
                                  :div :bod :name "Comptroller"}
                    :concert {:lugal "paultgarrett@gmail.com"
                              :div :bod :name "Concert Sound & Lights"}
                    :design {:lugal ["suannegould@gmail.com"
                                     "ddolph1n@yahoo.com"]
                             :div :ops :name "Design Team"}
                    :fire {:lugal "healthymom@hotmail.com"
                           :div :site :name "Fire Circle"}
                    :gungans {:lugal :perseus
                              :div :site :name "Gungans"}
                    :hearth {:lugal :cowboy
                             :div :hearth :name "Guest Hearth"}
                    :kids {:lugal "nursejenn42@gmail.com"
                           :div :ops :name "Kids' Realm"}
                    :parking {:lugal "Dharmahog@gmail.com"
                              :div :registration :name "Parking"}
                    :web {:lugal "ddolph1n@yahoo.com"
                          :div :bod :name "Photography & Web Design"}
                    :registration {:lugal ["jim.dustman@gmail.com"]
                                   :div :registration :name "Registration"}
                    :ritual {:lugal [:roger "spence101878@gmail.com"]
                             :div :bod :name "Ritual"}
                    :site {:lugal ["c4life1@gmail.com" "Bigredog14@gmail.com"]
                           :div :site :name "Site & Strike"}
                    :office {:lugal "jess_carpenter@hotmail.com"
                             :div :staff :name "Ministry of Magic"}
                    :staffing {:lugal "jennie0280@yahoo.com"
                               :div :bod :name "Staffing"}
                    :store {:lugal "ladyunicornbeth@yahoo.com"
                            :div :ops :name "Store Runner"}
                    :taxi {:lugal ["phyrphlyeyez@gmail.com" :jim-hines]
                           :div :hearth :name "Taxi/Trolley"}
                    :teen {:lugal nil
                           :div :ops :name "Teen Forge"}
                    :tech {:lugal "brpocock@star-hope.org"
                           :div :ops :name "Technology"}
                    :trash {:lugal :stu
                            :div :site :name "Trash"}
                    :tween {:lugal :soren
                            :div :ops :name "Tween Time"}
                    :vendors {:lugal "jpocock@star-hope.org"
                              :div :ops :name "Vendors"}
                    :workshops {:lugal "jpocock@star-hope.org"
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

