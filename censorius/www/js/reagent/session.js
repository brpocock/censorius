// Compiled by ClojureScript 0.0-2665 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Get the key's value from the session, returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get = (function() { 
var get__delegate = function (k,p__10667){
var vec__10669 = p__10667;
var default$ = cljs.core.nth.call(null,vec__10669,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__10667 = null;
if (arguments.length > 1) {
var G__10670__i = 0, G__10670__a = new Array(arguments.length -  1);
while (G__10670__i < G__10670__a.length) {G__10670__a[G__10670__i] = arguments[G__10670__i + 1]; ++G__10670__i;}
  p__10667 = new cljs.core.IndexedSeq(G__10670__a,0);
} 
return get__delegate.call(this,k,p__10667);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__10671){
var k = cljs.core.first(arglist__10671);
var p__10667 = cljs.core.rest(arglist__10671);
return get__delegate(k,p__10667);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
reagent.session.put_BANG_ = (function put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
* Gets the value at the path specified by the vector ks from the session,
* returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get_in = (function() { 
var get_in__delegate = function (ks,p__10672){
var vec__10674 = p__10672;
var default$ = cljs.core.nth.call(null,vec__10674,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__10672 = null;
if (arguments.length > 1) {
var G__10675__i = 0, G__10675__a = new Array(arguments.length -  1);
while (G__10675__i < G__10675__a.length) {G__10675__a[G__10675__i] = arguments[G__10675__i + 1]; ++G__10675__i;}
  p__10672 = new cljs.core.IndexedSeq(G__10675__a,0);
} 
return get_in__delegate.call(this,ks,p__10672);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__10676){
var ks = cljs.core.first(arglist__10676);
var p__10672 = cljs.core.rest(arglist__10676);
return get_in__delegate(ks,p__10672);
});
get_in.cljs$core$IFn$_invoke$arity$variadic = get_in__delegate;
return get_in;
})()
;
/**
* Replace the current session's value with the result of executing f with
* the current value and args.
* @param {...*} var_args
*/
reagent.session.swap_BANG_ = (function() { 
var swap_BANG___delegate = function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
};
var swap_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__10677__i = 0, G__10677__a = new Array(arguments.length -  1);
while (G__10677__i < G__10677__a.length) {G__10677__a[G__10677__i] = arguments[G__10677__i + 1]; ++G__10677__i;}
  args = new cljs.core.IndexedSeq(G__10677__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__10678){
var f = cljs.core.first(arglist__10678);
var args = cljs.core.rest(arglist__10678);
return swap_BANG___delegate(f,args);
});
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___delegate;
return swap_BANG_;
})()
;
/**
* Remove all data from the session and start over cleanly.
*/
reagent.session.clear_BANG_ = (function clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
* Remove a key from the session
*/
reagent.session.remove_BANG_ = (function remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
* Associates a value in the session, where ks is a
* sequence of keys and v is the new value and returns
* a new nested structure. If any levels do not exist,
* hash-maps will be created.
*/
reagent.session.assoc_in_BANG_ = (function assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__10679_SHARP_){
return cljs.core.assoc_in.call(null,p1__10679_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__10680){
var vec__10682 = p__10680;
var default$ = cljs.core.nth.call(null,vec__10682,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__10680 = null;
if (arguments.length > 1) {
var G__10683__i = 0, G__10683__a = new Array(arguments.length -  1);
while (G__10683__i < G__10683__a.length) {G__10683__a[G__10683__i] = arguments[G__10683__i + 1]; ++G__10683__i;}
  p__10680 = new cljs.core.IndexedSeq(G__10683__a,0);
} 
return get_BANG___delegate.call(this,k,p__10680);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__10684){
var k = cljs.core.first(arglist__10684);
var p__10680 = cljs.core.rest(arglist__10684);
return get_BANG___delegate(k,p__10680);
});
get_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_BANG___delegate;
return get_BANG_;
})()
;
/**
* Destructive get from the session. This returns the current value of the path
* specified by the vector ks and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_in_BANG_ = (function() { 
var get_in_BANG___delegate = function (ks,p__10685){
var vec__10687 = p__10685;
var default$ = cljs.core.nth.call(null,vec__10687,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__10685 = null;
if (arguments.length > 1) {
var G__10688__i = 0, G__10688__a = new Array(arguments.length -  1);
while (G__10688__i < G__10688__a.length) {G__10688__a[G__10688__i] = arguments[G__10688__i + 1]; ++G__10688__i;}
  p__10685 = new cljs.core.IndexedSeq(G__10688__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__10685);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__10689){
var ks = cljs.core.first(arglist__10689);
var p__10685 = cljs.core.rest(arglist__10689);
return get_in_BANG___delegate(ks,p__10685);
});
get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_in_BANG___delegate;
return get_in_BANG_;
})()
;
/**
* 'Updates' a value in the session, where ks is a
* sequence of keys and f is a function that will
* take the old value along with any supplied args and return
* the new value. If any levels do not exist, hash-maps
* will be created.
* @param {...*} var_args
*/
reagent.session.update_in_BANG_ = (function() { 
var update_in_BANG___delegate = function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__10690_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__10690_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__10691__i = 0, G__10691__a = new Array(arguments.length -  2);
while (G__10691__i < G__10691__a.length) {G__10691__a[G__10691__i] = arguments[G__10691__i + 2]; ++G__10691__i;}
  args = new cljs.core.IndexedSeq(G__10691__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__10692){
var ks = cljs.core.first(arglist__10692);
arglist__10692 = cljs.core.next(arglist__10692);
var f = cljs.core.first(arglist__10692);
var args = cljs.core.rest(arglist__10692);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;
