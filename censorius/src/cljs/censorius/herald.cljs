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

(defn json->invoice [jso]
  ())

(defun read-invoice [number]
  (ajax/ajax-request {:uri "//reg/herald.cgi"
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
  (ajax/ajax-request {:uri "//reg/herald.cgi"
                      :method :post
                      :params {:verb "submit-invoice"
                               :invoice (or @d/invoice "*")
                               :guests (map hash-atom->json @d/guests)
                               :merch (map hash-atom->json @d/extras)
                               :vending (hash-atom->json @d/vending)
                               :workshops (map hash-atom->json @d/workshops)
                               :scholarships (hash-atom->json @d/scholarships)}
                      :format (ajax/json-request-format)
                      :response-format (ajax/json-response-format {:keywords? true})
                      :handler (fn [[ok? response]]
                                 (if ok?
                                   (js/alert (str "Submitted. Reply: " response))
                                   (js/alert (str "Failure; got " response))))}))

