(ns censorius.assistant
  (:require [clojure.string :as string]
            
            [censorius.data :as d]
            [censorius.guest :as guest]
            [censorius.guest-list :as guest-list]
            [censorius.utils :as util]))

(defn assistant-getting-started []
  [:div [:h4 "Getting Started"]
   [:p  "First,  enter   the  (legal)  name  of   your  party's  leader.
  Since you're entering this, that's probably you! This will be the name
  that your registration will be "
    [:q "filed under"]
    " when you arrive at the Festival. Then, click (or tap) "
    [:strong "+ Add to Party"] "."]
   [:p  "You can  set the  name  that you  prefer  to be  called by,  by
clicking on your name after you've been added to the list, and add other
members  of your  party. You'll  also want  to set  your eMail  address,
and (optionally) your telephone number."]])

(defn assistant-editing-party []
  [:div [:h4 "Editing your Party"]
   [:p "For  each person  in your  party, click  the buttons  under each
       column to fill in their complete details. (You can click on their
       name as well.) "]
   [:p "You can add as many party members as you need to."]
   [:p {:class "hint"}
    "If you are booking cabin reservations  or meal plans for your whole
party, make your selections for  yourself before adding other members of
your party. The leader's sleeping and eating arrangements will be copied
to new party members."]])

(defn assistant-need-adults []
  (let [[adults-needed adults children babies] (guest-list/adults-needed)]
    [:div [:h4 {:class "warning"} (util/counting (- adults-needed adults) "Adult") " Required"]
     [:p "At least "
      (string/lower-case (util/counting adults-needed "adult"))
      " must accompany "
      (when (pos? babies) (str (string/lower-case (util/counting babies "child")) " under 5"
                               (when (pos? children) " and")))
      (when (pos? children) (str (string/lower-case (util/counting children "child"))
                                 (when (pos? babies) " ages 5-17")))
      "."]]))

(defn assistant-need-adult-email []
  [:div [:h4 {:class "warning"} "eMail Address Needed"]
   [:p "The  eMail address of  at least one adult  in the party  must be
   provided. (Click on the box under the "
    [:q "eMail"] 
    " column to set one. For Lugals,  DCs, or members of the Board, make
    sure you use  the same eMail that you use  for FPG business, because
    you'll be eligible for discounts on some things.)"]])

(defn assistant-can-remove []
  [:div
   [:h4 "Removing tickets"]
   [:p "To remove someone from your party, click on their name, then click the "
    [:strong "Remove from Party"] " button."]])

(defn assistant-merch+ []
  [:div
   [:h4 "Merchandise"]
   [:p "You can purchase great merchandise for every member of your party,
    and order extra items to take home from the "
    [:strong "Extras"]
    " box as well. There are additional items, like general T-shirts, also
    available this way."]])

(defn assistant-merch []
  [:div
   [:h4 "Merchandise"]
   [:p "Buy your festival T-shirts for every party member, or order more
    merchandise from the "
    [:strong "Extras"] " box."]])

(defn assistant-vendors []
  [:div
   [:h4 "Vendors"]
   [:p
    "Set up your vending booth by picking the number of spaces you'll need,
    then put in your booth's name and description to appear in
    the handbook."]])

(defn assistant-workshops []
  #_  [:div
       [:h4 "Workshops"]
       [:p "If any members of your party want to present a workshop at FPG, just
    fill out the information here."]])

(defn assistant-box [props children self]
  [:section {:id "assistant"}
   [:a {:name "assistant"}]
   [:h2 "Assistant"]
   (if (empty? @guest-list/guests)
     [assistant-getting-started]
     [assistant-editing-party])
   (when (guest-list/need-adult-email)
     [assistant-need-adult-email])
   (let [[adults-needed adults & _] (guest-list/adults-needed)]
     (when (> adults-needed adults) [assistant-need-adults]))
   (when (< 1 (count @guest-list/guests))
     [assistant-can-remove])
   (when-not (empty? @guest-list/guests)
     (if (some guest/bought-merch @guest-list/guests)
       [assistant-merch+]
       [assistant-merch])
     [assistant-vendors]
     [assistant-workshops])])


