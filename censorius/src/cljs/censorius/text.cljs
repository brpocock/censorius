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

(defn accessor 
  ([cursor keys] (if keys (get @cursor keys) @cursor))
  ([props] (accessor (:cursor @props) (:keys @props))))

(defn validate% [props new-text]
  (let [validate (:validate @props)
        could-validate? (and validate
                             (string? new-text)
                             (not (string/blank? (.trim new-text))))
        validated? (and could-validate?
                        (apply validate (list new-text)))]
    (swap! props assoc :validated? (cond (not could-validate?) nil
                                         validated? true
                                         true false))
    
    ;; (util/log "validate% new text " new-text " could validate? " could-validate? " validated? " validated?)
    (or validated? 
        (not could-validate?))))

(defn valid-submission? [props text can-prompt?]
  (let [valid-1? (validate% props text)
        valid-2? (or valid-1?
                     (and can-prompt?
                          (when (confirm-change (:label @props) text)
                            ;; (util/log "User confirms, store invalid value.")
                            (swap! props assoc :validated? nil)
                            true)))]
    (or valid-1? valid-2?)))


(defn submit
  ([event props]
   (submit event props false))
  ([event props suppress-prompt?]
   (let [text (:text @props)
         keys (:keys @props)
         cursor (:cursor @props)
         old-text (if keys (get @cursor keys) @props)]
     (cond (= old-text text)  nil ;; (util/log "no change to " keys)

           (not (valid-submission? props text (not suppress-prompt?)))
           nil
           ;; (util/log "no change to " keys ": validation failed")
           true
           (let [formatter (:format @props)
                 final-text (if formatter
                              (apply formatter (list text))
                              text)]
             (when (not= text final-text)
               (swap! props assoc :text final-text))
             (util/log keys " ← “" final-text "”")
             (swap! cursor (if (seq? keys) assoc-in assoc) keys final-text)
             (swap! props assoc :orig-text final-text))))
   (.stopPropagation event)
   false))

(defn mkfun-validity-submit [props]
  (fn [event]
    (when (.contains (.-className (.-target event)) "valid-false")
      (util/log "Field doesn't seem valid. Verifying user intent." event)
      (submit event props))
    true))

(defn do-change [props new-text]
  ;; (util/log "do-change “" new-text "” (string? "
  ;;           (string? new-text) "; validate%? " 
  ;;           (validate% props new-text) ")")
  (when (and (string? new-text)
             (validate% props new-text))
    (swap! props assoc :text new-text)
    ;; (util/log "changed to " (:text @props))
    )
  true)

(defn key-down [event props want-return?]
  (cond (#{+escape+ +clear+} (.-keyCode event))
        (do ;; (util/log "clearing field to " (:orig-text @props))
          (do-change props (:orig-text @props)))

        (and want-return?
             (== +return+ (.-keyCode event))) (submit event props)

             true nil))

(defn text-input [{:keys [cursor keys label rows size
                          placeholder validate
                          format input-type ellipsis]} children]
  (let [name (util/gensymreally label)
        props (atom {:cursor cursor
                     :ellipsis ellipsis
                     :format format
                     :input-type input-type
                     :keys keys
                     :label label
                     :needs-focus-p false
                     :needs-props-set-p false
                     :orig-text (accessor cursor keys)
                     :placeholder placeholder
                     :rows rows
                     :size size
                     :text (accessor cursor keys)
                     :validate validate
                     :validated? false})]
    
    (reagent/create-class
     {:component-will-receive-props 
      (fn [this new-props]
        (when (:placeholder new-props)
          (swap! props assoc :placeholder (:placeholder new-props)))
        
        (when (:label new-props)
          (swap! props assoc :label (:label new-props)))
        (swap! props assoc 
               :orig-text (accessor cursor keys) 
               :text (accessor cursor keys))
        ;; (let [before (:orig-text @props)
        ;;       current (:text @props)
        ;;       after (:text new-props)]
        ;;   (if (and (= before current)
        ;;            (not= before after)
        ;;            (string? after))
        ;;     (do (util/log "Resetting " name " from " keys
        ;;                   " ⇒ “" after
        ;;                   "”")
        ;;         (do-change props after)
        ;;         (swap! props assoc :orig-text after))
        ;;     (util/log "ignoring new props value = " new-props)))
        true)
      ;; :component-will-mount (fn [this]
      ;;                         (validate% props (:text props)))
      ;; :component-did-update (fn [this old-props old-children]
      ;;                         (when
      ;;                             (:needs-focus-p @props)
      ;;                           (when-let [node nil ; FIXME ;; (util/get-child props name)
      ;;                                      ]
      ;;                             (let [length (.-length (.-value node))]
      ;;                               (.focus node) (.setSelectionRange node length length)))
      ;;                           (swap! props assoc-in :needs-focus-p nil))
      ;;                         (when-let [where-to (:needs-props-set-p props)]
      ;;                           (when-let [node nil ; FIXME ;; (util/get-child props name)
      ;;                                      ]
      ;;                             (.setSelectionRange node where-to where-to))
      ;;                           (swap! props assoc :needs-props-set-p nil)))
      
      :reagent-render (fn [props-in]
                        
                        ;; (util/log "rendering text edit " name " with value " (:text @props))
                        
                        (let [[validity validity-sigil]
                              (case (:validated? @props)
                                false [false "✗"]
                                true [true "⛤"]
                                nil ["unknown" " "])]
                          (cond
                            
                            ;; inline
                            (= 0 rows)
                            [:span [:input {:name (:name @props)
                                            :type (or (:input-type @props) "text")
                                            :id (:name @props)
                                            :value (:text @props)
                                            :size (:size @props)
                                            :class (str "valid-" (:validity @props) " size-" (:size @props))
                                            :placeholder (or (:placeholder @props) "")
                                            :on-blur (fn [ev] (submit ev props true) true)
                                            :on-change (fn [ev] (do-change props (.-value (.-target ev))) true)
                                            :on-key-down (fn [ev] (key-down ev props true) true)
                                            :title (:label @props)}]
                             (when (:ellipsis @props)
                               [:button {:on-click (fn [_] (apply (:ellipsis @props) (:keys @props)) true)} "…"])
                             (when (:validate @props)
                               [:span {:class (str "marker valid-" validity)
                                       :on-click (fn [_] (apply (mkfun-validity-submit props)) true)}
                                validity-sigil])]
                            
                            ;; text-entry box, single-row
                            (or (not (:rows @props)) (= 1 (:rows @props)))
                            [:div [:label {:class "two-column"}
                                   (if (empty? (:label @props)) "" (str (:label @props) ":"))
                                   [:input {:name (:name @props)
                                            :type (or (:input-type @props) "text")
                                            :id (:name @props)
                                            :value (:text @props)
                                            :size (:size @props)
                                            :class (str "valid-" (:validity @props) " size-" (:size @props))
                                            :placeholder (or (:placeholder @props) "")
                                            :on-blur (fn [ev] (submit ev props true) true)
                                            :on-change (fn [ev] (do-change props (.-value (.-target ev))) true)
                                            :on-key-down (fn [ev] (key-down ev props true) true)
                                            :title (:label @props)}]
                                   (when (:ellipsis @props)
                                     [:button {:on-click (fn [_] (apply (:ellipsis @props) @props) true)} "…"])
                                   (when (:validate @props)
                                     [:span {:class (str "marker "
                                                         (str "valid-" (:validity @props)))
                                             :on-click (fn [] (apply (mkfun-validity-submit props)) true)}
                                      validity-sigil])]]
                            
                            ;; text-entry area, multi-row
                            true
                            [:fieldset [:legend [:label {:for (str "textarea-" (:name @props))} (:label @props)]
                                        (when (:ellipsis @props)
                                          [:button {:on-click (fn [_]  (apply (:ellipsis @props) (:keys @props)) true)} "…"])
                                        (when (:validate @props)
                                          [:span {:class (str "marker valid-" (:validity @props))}
                                           validity-sigil])]
                             [:textarea {:name (:name @props)
                                         :id (:name @props)
                                         :rows (:rows @props)
                                         :class (:validity @props)
                                         :placeholder (:placeholder @props)
                                         :title (str (:label @props) (if (:placeholder @props)
                                                                       (str " (" (:placeholder @props) ")")
                                                                       ""))
                                         :on-blur (fn [ev] (submit ev props true) true)
                                         :on-change (fn [ev] (do-change props (.-value (.-target ev))) true)
                                         :on-key-down (fn [ev] (key-down ev props false) true)
                                         :value (:text @props)}]])))})))


;;; (util/log "Text-entry module loaded")


