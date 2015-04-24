(ns censorius.address
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [cljs.core.async :refer [put! chan <!]]
   [clojure.data :as data]
   [clojure.string :as string]
   [goog.events :as events]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [secretary.core :as secretary]
   
   [censorius.utils :as util]
   [censorius.text :as text])
  (:import [goog History]
           [goog.history EventType]))

;; 

;; (def +clear+ 12)
;; (def +return+ 13)
;; (def +escape+ 27)

;; (defn confirm-change [address]
;;   (let [label (:label address)
;;         text "ADDRESS♪FIXME"]
;;     (js/window.confirm (str "“" text "” does not appear valid for “" label
;;                             "”.\nDo you want to submit it?\n\nClick OK to confirm this value, or Cancel to edit."))))

;; (defn do-validate [address]
;;   (and (map text/do-validate (om/children address))
;;        (let [zip3 (.substring (get address :zip) 0 3)]
;;          (or (and (= zip3 "662")
;;                   (#{"KS" "MO"} (get address :state)))
;;              (= (get util/+zip-states+ zip3)
;;                 (get address :state))))))

;; (defn validate-submission [address can-prompt?]
;;   (let [valid-1? (do-validate address)
;;         valid-2? (or valid-1?
;;                      (and can-prompt? 
;;                           (when (confirm-change address)
;;                             (util/log "User confirms, store invalid value.")
;;                             (swap! address assoc :validated? nil)
;;                             true)))]
;;     #_ (util/log "validation of " text " ⇒ " valid-1? "; " valid-2?)
;;     (or valid-1? valid-2?)))

;; (defn submit 
;;   ([event cursor address]
;;    (submit event cursor address false))
;;   ([event cursor address suppress-prompt?]
;;    (let [text (:text address)
;;          keys (:keys address)
;;          old-text (get (deref cursor) keys)]
;;      #_ (util/log "Considering to submit change to " keys)
;;      (cond 
;;        (= old-text text)
;;        (util/log "no change to " keys)

;;        (not (validate-submission address (not suppress-prompt?)))
;;        (util/log "no change to " keys ": validation failed")

;;        true
;;        (let [formatter (om/get-state address :format)
;;              final-text (if formatter 
;;                           (apply formatter (list text))
;;                           text)]
;;          (when (not= text final-text)
;;            (om/set-state! address :text final-text))
;;          (util/log keys " ← “" final-text "”")
;;          (om/update! cursor keys final-text)
;;          (om/set-state! address :orig-text final-text))))
;;    false))

;; (defn mkfun-validity-submit [cursor address]
;;   (fn [event]
;;     (when (.contains (.-className (.-target event)) "valid-false")
;;       (util/log "Field doesn't seem valid. Verifying user intent." event)
;;       (submit event cursor address))))

;; (defn address [cursor {:cursor address
;;:keys  [keys label note]
;; }]
;;   (let [name (util/gensymreally label)
;;         local {:keys keys
;;                :label label
;;                :note note}] 

;;     (when (om/get-state address :needs-focus)
;;       (when-let [node (util/get-child address name)]
;;         (let [length (.-length (.-value node))]
;;           (.focus node)
;;           (.setSelectionRange node length length)))
;;       (om/set-state! address :needs-focus nil))
;;     (when-let [where-to (om/get-state address :needs-cursor-set)]
;;       (when-let [node (util/get-child address name)]
;;         (.setSelectionRange node where-to where-to))
;;       (om/set-state! address :needs-cursor-set nil))

;;     (fn [self {:keys [label keys]}]
;;                   #_ (util/log "render-state “" label "” (" name ") " 
;;                                (case validated?
;;                                  false "✗"
;;                                  true "✓"
;;                                  nil "⁇"))
;;                   (let [[validity validity-sigil]
;;                         (case (do-validate self)
;;                           false [false "✗"]
;;                           true [true "✓"]
;;                           nil ["unknown" " "])]
;;                     [:fieldset {:class "address-edit"}
;;                      [:legend nil
;;                       [:label label]
;;                       [:span {:class (str "marker valid-" validity)}
;;                        validity-sigil]]
;;                      [:div [text/text-input {:cursor address
;;:keys  :address1

;;                                                      :label "Street address (line 1)"
;;                                                      :rows 0
;;                                                      :formatter util/name-case
;;                                                      :placeholder "123 Main St."}]]
;;                      [:div [text/text-input {:cursor address
;;:keys  :address2

;;                                                      :label "Street address (line 2)"
;;                                                      :rows 0
;;                                                      :formatter util/name-case
;;                                                      :placeholder "Ste. 123"}]]
;;                      [:div [text/text-input {:cursor address
;;:keys  :city

;;                                                      :label "City"
;;                                                      :rows 0
;;                                                      :formatter util/name-case
;;                                                      :placeholder "Nicetown"}]
;;                       ", "
;;                       [text/text-input {:cursor address
;;:keys  :state

;;                                                 :label "State"
;;                                                 :rows 0
;;                                                 :formatter string/upper-case
;;                                                 :placeholder "FL"}]
;;                       "   "
;;                       [text/text-input {:cursor address
;;:keys  :zip

;;                                                 :label "ZIP code"
;;                                                 :rows 0
;;                                                 :formatter util/format-zip-code
;;                                                 :validate util/zip-code?
;;                                                 :placeholder "32123"}]]]))))


