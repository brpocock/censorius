(ns censorius.text
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



(def +clear+ 12)
(def +return+ 13)
(def +escape+ 27)

(defn confirm-change [label text]
  (js/window.confirm (str
                      "“"
                      text
                      "” does not appear valid for “"
                      label
                      "”.\nDo you want to submit it?\n\nClick OK to confirm this value, or Cancel to edit.")))

(defn do-validate [props new-text]
  (let [validate (:validate @props)
        could-validate? (and validate 
                             (string? new-text)
                             (not (string/blank? (.trim new-text))))
        validated? (and could-validate?
                        (apply validate (list new-text)))]
    (swap! props assoc :validated? (cond 
                                     (not could-validate?) nil
                                     validated? true
                                     true false))
    (and (or validated? (not could-validate?)) 
         true)))

(defn validate-submission [props text can-prompt?]
  (let [valid-1? (do-validate props text)
        valid-2? (or valid-1?
                     (and can-prompt? 
                          (when (confirm-change (:label props) text)
                            (util/log "User confirms, store invalid value.")
                            (swap! props assoc :validated? nil)
                            true)))]
    (or valid-1? valid-2?)))


(defn submit 
  ([event props]
   (submit event props false))
  ([event props suppress-prompt?]
   (let [text (:text @props)
         keys (:keys @props)
         old-text (get (deref props) keys)]
     (cond (= old-text text) (util/log "no change to " keys)
           
           (not (validate-submission props text (not suppress-prompt?)))
           (util/log "no change to " keys ": validation failed")
           
           true
           (let [formatter (:format @props)
                 final-text (if formatter 
                              (apply formatter (list text))
                              text)]
             (when (not= text final-text)
               (swap! props assoc :text final-text))
             (util/log keys " ← “" final-text "”")
             (swap! props assoc-in keys final-text
                    [:orig-text] final-text))))
   false))

(defn mkfun-validity-submit [props]
  (fn [event]
    (when (.contains (.-className (.-target event)) "valid-false")
      (util/log "Field doesn't seem valid. Verifying user intent." event)
      (submit event props))))

(defn do-change [props new-text]
  (when (string? new-text)
    (do-validate props new-text)
    (swap! props assoc :text new-text)))

(defn key-down [event props want-return?]
  (cond (#{+escape+ +clear+} (.-keyCode event)) 
        (do-change props (:orig-text props))
        
        (and want-return?
             (== +return+ (.-keyCode event))) (submit event props)
             
             true nil))

(defn text-input [{:keys [props keys label rows size
                          placeholder validate
                          format input-type ellipsis]}]
  (let [name (util/gensymreally label)
        ;; props (atom {:keys keys
        ;;                    :label label
        ;;                    :rows (or rows 1)
        ;;                    :placeholder placeholder
        ;;                    :text (or (get-in props keys) "")
        ;;                    :orig-text (or (get-in props keys) "")
        ;;                    :validate validate
        ;;                    :validated? nil
        ;;                    :input-type input-type
        ;;                    :ellipsis ellipsis
        ;;                    :size size
        ;;                    :format format})
        ]
    
    (fn ^{:component-will-receive-props 
          (fn [this new-props]
            (let [before (:orig-text @props)
                  current (:text @props)
                  after (get-in new-props keys)]
              (when (and (= before current)
                         (not= before after)
                         (string? after))
                (do (util/log "Resetting " name " from " keys
                              " ⇒ “" after
                              "”")
                    (do-change props after)
                    (swap! props assoc :orig-text after)))))
          :component-will-mount
          (fn [this]
            (do-validate props (:text @props)))
          ;;:component-did-update (fn [this old-props old-children] (when
          ;; (:needs-focus props) (when-let [node (util/get-child
          ;; props name)] (let [length (.-length (.-value node))]
          ;; (.focus node) (.setSelectionRange node length length)))
          ;; (swap! props assoc-in :needs-focus nil)) (when-let
          ;; [where-to (:needs-props-set props)] (when-let [node
          ;; (util/get-child props name)] (.setSelectionRange node
          ;; where-to where-to)) (swap! props assoc-in
          ;; :needs-props-set nil)) )
          } 
      
      ;; actual render ƒ now that we're done with metadata
      [{:keys [label text placeholder rows input-type 
               keys validate validated?] :as props}]
      (let [[validity validity-sigil]
            (case validated?
              false [false "✗"]
              true [true "⛤"]
              nil ["unknown" " "])]
        (cond
          
          ;; inline
          (= 0 rows)
          [:span [:input {:name name
                          :type (or input-type "text")
                          :id name
                          :value text
                          :size size
                          :class (str "valid-" validity " size-" size)
                          :placeholder placeholder
                          :on-blur #(submit % props true)
                          :on-change #(do-change props (.-value (.-target %)))
                          :on-key-down #(key-down % props true)
                          :title label}]
           (when ellipsis
             [:button {:on-click #(apply ellipsis keys)} "…"])
           (when validate
             [:span {:class (str "marker valid-" validity)
                     :on-click (mkfun-validity-submit props)}
              validity-sigil])]
          
          ;; text-entry box, single-row
          (or (not rows) (= 1 rows)) 
          [:div [:label {:class "two-column"}
                 (str label ":")
                 [:input {:name name
                          :type (or input-type "text")
                          :id name
                          :value text
                          :class (str "valid-" validity " size-" size)
                          :placeholder placeholder
                          :on-blur #(submit % props true)
                          :on-change #(do-change props (.-value (.-target %)))
                          :on-key-down #(key-down % props true)
                          :title (if placeholder
                                   (str label " (" placeholder ")")
                                   label)}]
                 (when ellipsis
                   [:button {:on-click #(apply ellipsis props)} "…"])
                 (when validate
                   [:span {:class (str "marker " 
                                       (str "valid-" validity))
                           :on-click (mkfun-validity-submit props)}
                    validity-sigil])]]
          
          
          ;; text-entry area, multi-row
          true
          [:fieldset [:legend [:label {:for (str "textarea-" name)} label] 
                      (when ellipsis
                        [:button {:on-click #(apply ellipsis keys)} "…"])
                      (when validate
                        [:span {:class (str "marker valid-" validity)} 
                         validity-sigil])]
           [:textarea {:name name
                       :id name
                       :rows rows
                       :class validity
                       :placeholder placeholder
                       :title (str label (if placeholder
                                           (str " (" placeholder ")")
                                           ""))
                       :on-blur #(submit % props true)
                       :on-change #(do-change props (.-value (.-target %)))
                       :on-key-down #(key-down % props false)
                       :value text}]])))))




