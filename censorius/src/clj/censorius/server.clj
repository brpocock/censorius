(ns censorius.server
  (:require [clojure.java.io :as io]
            [censorius.dev :refer [dev? inject-devmode-html browser-repl start-figwheel]]
            [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [resources]]
            [compojure.handler :refer [api]]
            [net.cgrand.enlive-html :refer [deftemplate]]
            [ring.middleware.reload :as reload]
            [environ.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]))

(deftemplate page
  (io/resource "index.html") [] [:body] (if dev?
                                          inject-devmode-html
                                          identity))
y
(defroutes routes
  (resources "/reg" {:root "resources"})
  (resources "/react" {:root "react"})
  (GET "/register" req (page)))

(def http-handler
  (if dev?
    (reload/wrap-reload (api #'routes))
    (api routes)))

(defn run [& [port]]
  (defonce ^:private server
    (do
      (if dev? (start-figwheel))
      (let [port (Integer. (or port (env :port) 10555))]
        (print "Starting web server on port" port ".\n")
        (run-jetty http-handler {:port port
                          :join? false}))))
  server)

(defn -main [& [port]]
  (run port))
