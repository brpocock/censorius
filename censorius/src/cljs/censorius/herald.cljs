(ns censorius.herald
  (:require [ajax.core :refer [GET PUT POST]]))

(defn validate-mqa-license [license-number]
  (POST "https://appsmqa.doh.state.fl.us/IRM00PRAES/PRASLIST.ASP"
        {:body (doto (js/FormData.)
                 (.append "SearchTypeButton" "ALL")
                 (.append "SEARCH" "Find Provider")
                 (.append "PROFESSIONBOX" "99999")
                 (.append "LICENSEBOX" license-number)
                 (.append "LASTNAMEBOX" "")
                 (.append "FIRSTNAMEBOX" "")
                 (.append "COUNTYBOX" "- ALL -")
                 (.append "BUSINESSNAMEBOX" "")
                 (.append "ACTION" "SEARCH"))}))

(defn validate-bpr-license [license-number]
  (POST "https://www.myfloridalicense.com/wl11.asp?mode=2&search=LicNbr&SID=&brd=&typ=N"
        {:body (doto (js/FormData.)
                 (.append "hSearchType" "LicNbr")
                 (.append "LicNbr" license-number)
                 (.append "hDivision" "ALL"))}))

(defn hash-atom->json (hash-atom)
  (let [hash @hash-atom]
    (map (fn [[key value]]
           [(keyword->string key) value]
           hash))))

(defn hash-atoms->form (table hash-atoms)
  (let [rows (atom [])
        counter (atom 0)
        fields (atom {})]
    (doseq [hash-atom @hash-atoms] 
      (let [hash @hash-atom
            row @counter]
        (swap! counter inc)
        (swap! rows conj row)
        (doseq [[key value] hash]
          (swap! fields assoc-in (str table "∋" row "∋" (keyword->string key)) value))))
    (swap! fields assoc (str table "∋#") (string/join \, rows))))

(defn json->invoice [jso]
  ())

(defun read-invoice [number]
  (ajax/ajax-request {:uri "//herald.cgi"
                      :method :post
                      :params {:verb "read-invoice"
                               :invoice number
                               :token token}
                      :format (ajax/json-request-format)
                      :response-format (ajax/json-response-format {:keywords? true})
                      :handler (fn [[ok? response]]
                                 (if ok?
                                   (json->invoice response)
                                   (js/alert (str "Failure; got " response))))}))

(defun submit-invoice []
  (ajax/ajax-request {:uri "//herald.cgi"
                      :method :post
                      :params (reduce conj 
                                      (list {:verb "save"
                                             :invoice (or (:invoice @d/general) "*")
                                             :token (or (:invoice-token @d/general) "*")
                                             :note (:note @d/general)
                                             :signature (:signature @d/general)
                                             :scholarship∋# "php,seva,baiardi"
                                             :scholarship∋php∋scholarship "php"
                                             :scholarship∋php∋amount (:php @d/scholarships)
                                             :scholarship∋seva∋scholarship "seva"
                                             :scholarship∋seva∋amount (:seva @d/scholarships)
                                             :scholarship∋baiardi∋scholarship "baiardi"
                                             :scholarship∋baiardi∋amount (:baiardi @d/scholarships)}
                                            
                                            (hash-atoms->form "guests" @d/guests)
                                            (hash-atoms->form "extras" @d/merch)
                                            (hash-atoms->form "vending" @d/vending)
                                            (hash-atoms->form "workshops" @d/workshops)))
                      :format (ajax/json-request-format)
                      :response-format (ajax/json-response-format {:keywords? true})
                      :handler (fn [[ok? response]]
                                 (if ok?
                                   (js/alert (str "Submitted. Reply: " response))
                                   (js/alert (str "Failure; got " response))))}))

