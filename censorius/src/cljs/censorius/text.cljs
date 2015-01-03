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

(defn do-validate [local-state new-text]
  (let [validate (:validate @local-state)
        could-validate? (and validate 
                             (string? new-text)
                             (not (string/blank? (.trim new-text))))
        validated? (and could-validate?
                        (apply validate (list new-text)))]
    (swap! local-state assoc :validated? (cond 
                                           (not could-validate?) nil
                                           validated? true
                                           true false))
    (and (or validated? (not could-validate?)) 
         true)))

(defn validate-submission [local-state text can-prompt?]
  (let [valid-1? (do-validate local-state text)
        valid-2? (or valid-1?
                     (and can-prompt? 
                          (when (confirm-change (:label local-state) text)
                            (util/log "User confirms, store invalid value.")
                            (swap! local-state assoc :validated? nil)
                            true)))]
    (or valid-1? valid-2?)))


(defn submit 
  ([event props local-state]
   (submit event props local-state false))
  ([event props local-state suppress-prompt?]
   (let [text (:text @local-state)
         korks (:korks @local-state)
         old-text (get (deref props) korks)]
     (cond (= old-text text) (util/log "no change to " korks)
           
           (not (validate-submission local-state text (not suppress-prompt?)))
           (util/log "no change to " korks ": validation failed")
           
           true
           (let [formatter (:format @local-state)
                 final-text (if formatter 
                              (apply formatter (list text))
                              text)]
             (when (not= text final-text)
               (swap! local-state assoc :text final-text))
             (util/log korks " ← “" final-text "”")
             (swap! props assoc-in korks final-text
                    [:orig-text] final-text))))
   false))

(defn mkfun-validity-submit [props local-state]
  (fn [event]
    (when (.contains (.-className (.-target event)) "valid-false")
      (util/log "Field doesn't seem valid. Verifying user intent." event)
      (submit event props local-state))))

(defn do-change [local-state new-text]
  (when (string? new-text)
    (do-validate local-state new-text)
    (swap! local-state assoc :text new-text)))

(defn key-down [event props local-state want-return?]
  (cond (#{+escape+ +clear+} (.-keyCode event)) 
        (do-change local-state (:orig-text local-state))
        
        (and want-return?
             (== +return+ (.-keyCode event))) (submit event props local-state)
             
             true nil))

(defn change [event local-state]
  (let [node (.-target event)
        new-text (.-value node)]
    (do-change local-state new-text)))

(defn text-input [{:keys [props korks label rows size
                          placeholder validate
                          format input-type ellipsis]}]
  (let [name (util/gensymreally label)
        local-state (atom {:korks korks
                           :label label
                           :rows (or rows 1)
                           :placeholder placeholder
                           :text (or (get-in props korks) "")
                           :orig-text (or (get-in props korks) "")
                           :validate validate
                           :validated? nil
                           :input-type input-type
                           :ellipsis ellipsis
                           :size size
                           :format format})]
    
    (fn ^{:component-will-receive-props 
          (fn [this new-props]
            (let [before (:orig-text @local-state)
                  current (:text @local-state)
                  after (get-in new-props korks)]
              (when (and (= before current)
                         (not= before after)
                         (string? after))
                (do (util/log "Resetting " name " from " korks
                              " ⇒ “" after
                              "”")
                    (do-change local-state after)
                    (swap! local-state assoc :orig-text after)))))
          :component-will-mount
          (fn [this]
            (do-validate local-state (:text @local-state)))
          ;;:component-did-update (fn [this old-props old-children] (when
          ;; (:needs-focus local-state) (when-let [node (util/get-child
          ;; local-state name)] (let [length (.-length (.-value node))]
          ;; (.focus node) (.setSelectionRange node length length)))
          ;; (swap! local-state assoc-in :needs-focus nil)) (when-let
          ;; [where-to (:needs-props-set local-state)] (when-let [node
          ;; (util/get-child local-state name)] (.setSelectionRange node
          ;; where-to where-to)) (swap! local-state assoc-in
          ;; :needs-props-set nil)) )
          } 
      
      ;; actual render ƒ now that we're done with metadata
      [{:keys [label text placeholder rows input-type 
               korks validate validated?]}]
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
                          :on-blur #(submit % props local-state true)
                          :on-change #(change % local-state)
                          :on-key-down #(key-down % props local-state true)
                          :title label}]
           (when ellipsis
             [:button {:on-click #(apply ellipsis korks)} "…"])
           (when validate
             [:span {:class (str "marker valid-" validity)
                     :on-click (mkfun-validity-submit props local-state)}
              validity-sigil])]
          
          ;; text-entry box, single-row
          (= 1 rows)
          [:div [:label {:class "two-column"}
                 (str label ":")
                 [:input {:name name
                          :type (or input-type "text")
                          :id name
                          :value text
                          :class (str "valid-" validity " size-" size)
                          :placeholder placeholder
                          :on-blur #(submit % props local-state true)
                          :on-change #(change % local-state)
                          :on-key-down #(key-down % props local-state true)
                          :title (if placeholder
                                   (str label " (" placeholder ")")
                                   label)}]
                 (when ellipsis
                   [:button {:on-click #(apply ellipsis local-state)} "…"])
                 (when validate
                   [:span {:class (str "marker " 
                                       (str "valid-" validity))
                           :on-click (mkfun-validity-submit props local-state)}
                    validity-sigil])]]
          
          
          ;; text-entry area, multi-row
          true
          [:fieldset [:legend [:label {:for (str "textarea-" name)} label] 
                      (when ellipsis
                        [:button {:on-click #(apply ellipsis korks)} "…"])
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
                       :on-blur #(submit % props local-state true)
                       :on-change #(change % local-state)
                       :on-key-down #(key-down % props local-state false)
                       :value text}]])))))




