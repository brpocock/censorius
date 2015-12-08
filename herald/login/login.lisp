(defpackage :herald-login
  (:use :cl :herald-util :split-sequence)
  (:export :logged-in-p :request-login :find-person-with-identity
           :identity :identity->string :string->identity)) 
(in-package :herald-login)

(require :drakma)
(defgeneric logged-in-p :and ())

(defgeneric request-login (suggest-service person))

(defgeneric find-person-with-identity (identity))

(defclass identity () ())

(defgeneric identity->string (identity))

(defgeneric string->identity (string))

(defgeneric identity=person (identity person))

(defgeneric identity= (identity))

(defgeneric identity-about-me-link (identity))

(defgeneric identity-change-password-link (identity))

(defgeneric identity-forgot-password-link (identity))

(defgeneric identity-profile-link (identity))

(defgeneric identity-profile-photo (identity))

(defgeneric identity-personal-info (identity))


