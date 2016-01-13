// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__7350__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7351__i = 0, G__7351__a = new Array(arguments.length -  0);
while (G__7351__i < G__7351__a.length) {G__7351__a[G__7351__i] = arguments[G__7351__i + 0]; ++G__7351__i;}
  args = new cljs.core.IndexedSeq(G__7351__a,0);
} 
return G__7350__delegate.call(this,args);};
G__7350.cljs$lang$maxFixedArity = 0;
G__7350.cljs$lang$applyTo = (function (arglist__7352){
var args = cljs.core.seq(arglist__7352);
return G__7350__delegate(args);
});
G__7350.cljs$core$IFn$_invoke$arity$variadic = G__7350__delegate;
return G__7350;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__7353__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7354__i = 0, G__7354__a = new Array(arguments.length -  0);
while (G__7354__i < G__7354__a.length) {G__7354__a[G__7354__i] = arguments[G__7354__i + 0]; ++G__7354__i;}
  args = new cljs.core.IndexedSeq(G__7354__a,0);
} 
return G__7353__delegate.call(this,args);};
G__7353.cljs$lang$maxFixedArity = 0;
G__7353.cljs$lang$applyTo = (function (arglist__7355){
var args = cljs.core.seq(arglist__7355);
return G__7353__delegate(args);
});
G__7353.cljs$core$IFn$_invoke$arity$variadic = G__7353__delegate;
return G__7353;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map