(in-package :herald-login)
;;; return URL http://flapagan.org/reg/herald.cgi/verb=ident-return


;;; https://developers.google.com/identity/toolkit/web/configure-service

(defmethod logged-in-p :and ())

(defmethod request-login ((suggest-service (eql :google)) person))

(defclass google-identity (identity) ())

(defmethod find-person-with-identity ((identity google-identity)))

(defmethod identity->string ((identity google-identity)))

(defmethod string->identity (string))

(defmethod identity=person ((identity google-identity) person))

(defmethod identity= ((identity google-identity)))

(defmethod identity-about-me-link ((identity google-identity)))

(defmethod identity-change-password-link ((identity google-identity)))

(defmethod identity-forgot-password-link ((identity google-identity)))

(defmethod identity-profile-link ((identity google-identity)))

(defmethod identity-profile-photo ((identity google-identity)))

(defmethod identity-personal-info ((identity google-identity)))


