(defproject censorius "0.1.0-SNAPSHOT"
  :description "Festival management program"
  :url "http://star-hope.org/censurius"
  :license {:name "Gnu Affero General Public License"
            :url "http://www.gnu.org/licenses/agpl/"}

  :jar-exclusions [#"\.cljx\.swp|\.swo|\.DS_Store|~"]
  
  :source-paths ["src/clj" "src/cljs"]

  :dependencies [ ;; -- (these come first, to be safe)
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2665" ;; :scope "provided"
                  ]
                 ;; --- (sorted, to make life easier)
                 [com.cemerick/piggieback "0.1.4"]
                 [com.facebook/react "0.12.2"]
                 [cljs-ajax "0.3.9"]
                 [compojure "1.3.1"]
                 [datascript "0.7.2"]
                 [enlive "1.1.5"]
                 [environ "1.0.0"]
                 [figwheel "0.1.5-SNAPSHOT"]
                 [hickory "0.5.4"]
                 [leiningen "2.5.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [prone "0.8.0"]
                 [reagent "0.5.0"]
                 [reagent-utils "0.1.0"]
                 [ring "1.3.2"]
                 [ring/ring-defaults "0.1.3"]
                 [secretary "1.2.1"]
                 [selmer "0.7.9"]
                 [weasel "0.5.0"]
                 ;; ---
                 ]

  :plugins [ ;; --- (sorted, to make life easier)
            [cider/cider-nrepl "0.8.2-SNAPSHOT"]
            [lein-asset-minifier "0.2.0"]
            [lein-cljsbuild "1.0.5"]
            [lein-environ "1.0.0"]
            [lein-less "1.7.2"]
            [lein-ring "0.9.0"]
            ;; ---
            ]

  :ring {:handler censorius.page/app}

  :min-lein-version "2.5.0"

  :uberjar-name "censorius.jar"

  :minify-assets
  {:assets
   {"www/css/style.min.css" "www/css/style.css"}}

  :cljsbuild {:builds {:app {:source-paths ["src/cljs"]
                             :compiler {:output-to     "www/js/app.js"
                                        :output-dir    "www/js"
                                        ;; :source-map    "www/js/app.js.map"
                                        ;; :preamble ["react/react.min.js"]
                                        ;; :externs       ["react/externs/react.js"]
                                        :optimizations :none
                                        :main "censorius.page"
                                        :print-input-delimiter true
                                        :pretty-print  true}}}}
  
  :figwheel {:http-server-root "www"
             
             ;; :server-port 3449
             ;; default
             
             ;; CSS reloading (optional)
             ;; if :css-dirs is set figwheel will detect css file changes and
             ;; send them to the browser
             :css-dirs ["www/css"]
             
             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server
             ;; :ring-handler example.server/handler
             }

  :profiles {:dev {:repl-options {:init-ns censorius.server
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :dependencies [[ring-mock "0.1.5"]
                                  [ring/ring-devel "1.3.2"]
                                  [pjstadig/humane-test-output "0.6.0"]]

                   :plugins [[lein-figwheel "0.2.0-SNAPSHOT"]]

                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)]

                   :figwheel {:http-server-root "www"
                              :port 3449
                              :css-dirs ["www/css"]}

                   :env {:dev? true}

                   :cljsbuild {:builds {:app {:source-paths ["src/cljs" "env/dev/cljs"]
                                              :pretty-print true
                                              :optimizations :none ; true
                                              :compiler {:source-map  "www/js/app.js.map"}}}}}

             :uberjar {:hooks [leiningen.cljsbuild minify-assets.plugin/hooks]
                       :env {:production true}
                       :aot :all
                       :omit-source true
                       ;;TODO: figure out how to clean properly
                       ;;  :prep-tasks [["cljsbuild" "clean"]]
                       
                       :cljsbuild {:jar true
                                   :builds {:app
                                            {:source-paths ["env/prod/cljs"]
                                             :compiler
                                             {:optimizations :advanced
                                              :pretty-print false}}}}}

             :production {:ring {:open-browser? false
                                 :stacktraces?  false
                                 :auto-reload?  false}}})
