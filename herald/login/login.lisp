(defpackage :herald-login
  (:use :cl :herald-util :split-sequence)
  (:export :logged-in-p :request-login :find-person-with-ident
           :ident :ident->string :string->ident)) 
(in-package :herald-login)

(require :drakma)

(defvar *known-ident-services* ()
  "Enumerates the identity service symbols available. These should be symbols (probably keywords) which are suitable for
  passing to eg `IDENT-SERVICE-NAME' and friends to explore the features of each service.")

(defgeneric logged-in-p (service)
  (:documentation "Returns true if a person is (known or though to be) logged-in through a service currently."))

(defgeneric ident-service-name (service))

(defgeneric ident-service-register-link (service))

(defgeneric ident-service-log-out-link (service))

(defgeneric ident-service-icon-url (service))

(defgeneric request-login (service person))

(defgeneric find-person-with-ident (ident))

(defclass ident () ())

(defgeneric ident->string (ident))

(defgeneric string->ident (string))

(defgeneric ident=person (ident person))

(defgeneric ident= (ident))

(defgeneric ident-about-me-link (ident))

(defgeneric ident-change-password-link (ident))

(defgeneric ident-forgot-password-link (ident))

(defgeneric ident-profile-link (ident))

(defgeneric ident-profile-photo (ident))

(defgeneric ident-personal-info (ident))


