(ns censorius.dev
  (:require [censorius.page :as page]
            ;; [figwheel.client :as figwheel :include-macros true]
            ;; [weasel.repl :as weasel]
            ))

(enable-console-print!)

;; (figwheel/watch-and-reload
;;   :websocket-url "ws://localhost:3449/figwheel-ws"
;;   :jsload-callback (fn [] (page/main)))

;; (weasel/connect "ws://localhost:9001" :verbose true)

(page/main)
