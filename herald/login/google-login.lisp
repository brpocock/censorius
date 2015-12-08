(in-package :herald-login)
;;; return URL http://flapagan.org/reg/herald.cgi/verb=ident-return


;;; https://developers.google.com/identity/toolkit/web/configure-service

(pushnew :google *known-ident-services*)

(defmethod logged-in-p ((service (eql :google))))

(defmethod request-login ((service (eql :google)) person))

(defclass google-ident (ident) ())

(defmethod find-person-with-ident ((ident google-ident)))

(defmethod ident->string ((ident google-ident)))

(defmethod string->ident (string))

(defmethod ident=person ((ident google-ident) person))

(defmethod ident= ((ident google-ident)))

(defmethod ident-about-me-link ((ident google-ident)))

(defmethod ident-change-password-link ((ident google-ident)))

(defmethod ident-forgot-password-link ((ident google-ident)))

(defmethod ident-profile-link ((ident google-ident)))

(defmethod ident-profile-photo ((ident google-ident)))

(defmethod ident-personal-info ((ident google-ident)))


