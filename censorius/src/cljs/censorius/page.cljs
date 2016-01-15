(ns censorius.page
  (:require
   [cljs.reader :as reader]
   [clojure.string :as string]
   
   [goog.events :as events]
   [goog.history.EventType :as EventType]
   [reagent.core :as reagent :refer [atom]]
   ;; [reagent.session :as session]
   [secretary.core :as secretary :refer-macros [defroute]]

   [censorius.assistant :as assistant]
   [censorius.data :as d]
   [censorius.editable :as editable]
   [censorius.guest :as guest]
   [censorius.guest-list :as guest-list]
   [censorius.invoice :as invoice]
   [censorius.merch :as merch]
   [censorius.text :as text]
   [censorius.utils :as util]
   [censorius.vendor :as vendor]
   [censorius.workshops :as workshops])
  (:import [goog.history EventType]
           [goog events]
           [goog History]))



(enable-console-print!)

(util/log "Censorius loading…")



(defn scholarship-box []
  [:section {:class "card"}
   [:h2 "Scholarship Donations"]
   [:p {:class "hint"} "Suggested donation: $5.00+"]
   [:table
    [:tbody
     [:tr [:th "Pagans Helping Pagans"
           [:span {:class "hint"}
            "These funds are used to provide scholarships for guests who would
    like to attend FPG but need financial assistance."]]
      [:td [text/text-input {:cursor invoice/scholarships
                             :keys :php
                             :label "Pagans Helping Pagans Fund"
                             :placeholder "$5.00"
                             :format util/format-money
                             :validate util/money?
                             :size 6
                             :rows 0}]]]
     [:tr [:th "Robert Baiardi Memorial"
           [:span {:class "hint"}
            "Named in remembrance of Robert Baiardi, the husband of a member
    of FPG staff who passed away shortly after FPG Samhain 2012. This
    fund has been set up to provide financial assistance for
    staff admissions."]]
      [:td [text/text-input {:cursor invoice/scholarships
                             :keys :baiardi
                             :label "Robert Baiardi Memorial Fund"
                             :placeholder "$5.00"
                             :format util/format-money
                             :validate util/money?
                             :size 6
                             :rows 0}]]]
     [:tr [:th "Seva"
           [:span {:class "hint"}
            "The Seva Scholarship offers financial assistance to FPG staff members who need it."]]
      [:td [text/text-input {:cursor invoice/scholarships
                             :keys :seva
                             :label "Seva Fund"
                             :placeholder "$5.00"
                             :format util/format-money
                             :validate util/money?
                             :size 6
                             :rows 0}]]]]]])


(defn print-trailer []
  [:div {:class "print-only"}
   [:p "This is a copy of the registration web page, formatted for printing. This is "
    [:em "not"] " the eMail receipt, and it does "
    [:em "not"]
    " indicate proof  of payment. However, we hope that  it will provide
    a convenient record of your Festival plans."]
   [:p "If you are mailing a payment, send a printed copy of this registration form to us; but, please "
    [:em "also"]
    " suspend the on-line registration."]
   [:div {:style {:margin "1in"
                  :font-size "14pt"}}
    [:div "TEG Registrations"] 
    [:div "PO Box 1784"]
    [:div "Pinellas Park, FL 33780"]]
   [:p "Produced by Censorius Herald software. Software copyright © 2013-2015."]
   [:p "Your web browser (or other user agent application) is " js/navigator.userAgent]])


(defn closed?-div []
  [:section {:class "card"
             :style {:display (if (:closed @d/general) "block" "none")}}
   [:h2 "Closed Invoice!"]
   [:p "Your registration has been completed,  and paid for. If you need
   to make  any changes, your  payment balance  may need to  be manually
   adjusted by the Registration team."] 
   [:p "It is recommended that you "
    [:a {:href (str "mailto:register@flapagan.org&subject=Invoice+" (:invoice @d/general))}
     "contact the Registration team"]
    " if you need to make any changes."]])


(defn registration-page []
  [:div
   ;; [:h2 "Testing"]
   ;; [:h3 "You're early — tread lightly. This is almost ready …"]
   ;; [:p "This  page is still being  tested. Payments are "  [:em "not"] "
   ;; yet being accepted through this page. We expect the payment system to
   ;; be  on-line  to  the  public   Monday,  23  November,  2015,  but  we
   ;; are " [:em "not"] " enabling  payments until our volunteers have been
   ;; able  to thoroughly  review  the  system and  ensure  that there  are
   ;; no problems."]
   [closed?-div]
   [guest/staff-applications]
   [guest-list/guest-list-box]
   [merch/merch-box]
   [vendor/vendor-box]
   [workshops/workshop-box]
   [scholarship-box]
   [assistant/assistant-box]
   [invoice/check-out-box]
   [editable/nightshade]
   [print-trailer]
   ;; [:div [:a {:href "#" :on-click #(invoice/recall-invoice 4153 "gtp/feAgJYYJ")}
   ;;        4153]]
   ])


(defn about-page []
  [:section
   [:h1 "About Censorius"]
   [:p "Copyright © 2014-2015, Bruce-Robert Fenn Pocock."]
   [:a {:href "#/"} [:button "← Back to Registration"]]])



(defn staff-apply [guest$]
  (let [guest (get @guest-list/guests guest$)]
    (if (not guest)
      [:section [:h1 "Staff Application"]
       [:div {:class "card"}
        ]]
      [:section [:h1 "Staff Application"]
       [:div {:class "card"}
        [:h2 "Confirm Name"]
        [guest/name-edit-box guest]]
       [:div {:class "card"}
        [:h2 "Already on Staff?"]
        [:p "If you're already a staff member, you can get your Lugal's
    confirmation and get your staff discount. You must have already
    applied, been accepted, and been assigned to your Lugal to receive
    the discount."]
        [:a {:href "#/staff-confirm"} [:button "Confirm Staff"]]
        [:p {:class "hint"} "If you're a Lugal, Division Coördinator,
    Director, Guardian, Shiny Happy People Drum Tribe, Headliner, or
    other individual who should receive a discounted admission, make
    sure that you've entered your eMail address and that it matches the
    one you gave to the Festival previously. If your discount does not
    appear, then "]
        [:a {:href "mailto:festival-censorius@star-hope.org"} "send an eMail"]
        "with the details of your problem and I'll look into it."]
       [:div {:class "card"}
        [:a {:href "#/"} [:button "← Back to Registration"]]]])))



(defn vendor-quiz []
  [:section [:h1 "Vendor Quiz"]
   [:div {:class "card"} ]
   [:div {:class "card"}
    [:a {:href "#/"} [:button "← Back to Registration"]]]])



(defn staff-confirm []
  [:section [:h1 "Staff Confirmation"]
   [:a {:href "#/staff-apply"} [:button "Apply for Staff"]]
   [:a {:href "#/"} [:button "← Back to Registration"]]])


(defn page-404 []
  [:div [:h1 "404: Incorrect link"]
   [:section {:class "card"}
    [:h2 "Festival Registration"]
    [:p "The link you followed is not valid; but you can "
     [:a {:href "#/"} "return to Registration"] " here."]]])


;; Routes

(def uri-view (reagent/atom  {:current-page registration-page
                              :id nil
                              :filter nil}))

(secretary/set-config! :prefix "#!")
(defn location-hash [x] (set! (.-hash (.-location js/window)) x))

(secretary/defroute "/" []
  (swap! uri-view assoc :current-page registration-page))

(secretary/defroute "/recall/:invoice/:verify" [{:keys [invoice verify]}]
  (invoice/recall-invoice invoice verify nil)
  (swap! uri-view assoc :current-page registration-page))

(secretary/defroute "/about" []
  (swap! uri-view assoc  :current-page about-page))

(secretary/defroute "/vendor-agreement" []
  (swap! uri-view assoc  :current-page vendor-quiz))

(secretary/defroute "/staff-apply/:id" [{:keys [id]}]
  (swap! uri-view assoc  :current-page staff-apply :id id))

(secretary/defroute "/staff-confirm/:id" [{:keys [id]}]
  (swap! uri-view assoc  :current-page staff-confirm :id id))





;; Initialize app

;; need to run this after routes have been defined

(defn init! []
  #_ (reader/read-string "(defn boo [] (js/alert \"boo\"))")
  (set! js/document.title (str "Registration for TEG FPG " (:season @d/festival) " " (:year @d/festival)))
  
  (set! js/window.onbeforeunload (fn [x]
                                   "This application is asking you to confirm that you want to quit. Your registration information will not be saved."))
  
  (reagent/render-component [(:current-page @uri-view) uri-view] (.getElementById js/document "censorius")))


;; History
(defn revisit []
  (when-let [recall (js/window.location.hash.indexOf "/recall/")]
    (let [slash2 (.indexOf (js/window.location.hash.substring (+ 8 recall)) \/)
          invoice (js/window.location.hash.substring (+ 8 recall) (+ 8 recall slash2))
          cookie (js/window.location.hash.substring (+ 9 recall slash2))]
      (util/log " Recall invoice# " (js/parseInt invoice) 
                " with verification cookie " (js/decodeURIComponent cookie))
      (when (> invoice 4000)
        (invoice/recall-invoice (js/parseInt invoice) (js/decodeURIComponent cookie))))))

(def *allow-leaving* (atom false))

(defn hook-browser-navigation! []
  (let [history (History.)]
    (goog.events/listen history EventType/NAVIGATE #(revisit))
    (doto history (.setEnabled true))))



(defn main []
  (js/window.clearTimeout js/not-loaded)
  (hook-browser-navigation!)
  (revisit)
  (init!))

(main)
