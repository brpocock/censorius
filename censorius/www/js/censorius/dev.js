// Compiled by ClojureScript 0.0-2665 {}
goog.provide('censorius.dev');
goog.require('cljs.core');
goog.require('weasel.repl');
goog.require('figwheel.client');
goog.require('censorius.page');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return censorius.page.main.call(null);
}));
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
censorius.page.main.call(null);
