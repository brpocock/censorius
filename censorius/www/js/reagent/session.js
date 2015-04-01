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
var get__delegate = function (k,p__10665){
var vec__10667 = p__10665;
var default$ = cljs.core.nth.call(null,vec__10667,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__10665 = null;
if (arguments.length > 1) {
var G__10668__i = 0, G__10668__a = new Array(arguments.length -  1);
while (G__10668__i < G__10668__a.length) {G__10668__a[G__10668__i] = arguments[G__10668__i + 1]; ++G__10668__i;}
  p__10665 = new cljs.core.IndexedSeq(G__10668__a,0);
} 
return get__delegate.call(this,k,p__10665);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__10669){
var k = cljs.core.first(arglist__10669);
var p__10665 = cljs.core.rest(arglist__10669);
return get__delegate(k,p__10665);
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
var get_in__delegate = function (ks,p__10670){
var vec__10672 = p__10670;
var default$ = cljs.core.nth.call(null,vec__10672,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__10670 = null;
if (arguments.length > 1) {
var G__10673__i = 0, G__10673__a = new Array(arguments.length -  1);
while (G__10673__i < G__10673__a.length) {G__10673__a[G__10673__i] = arguments[G__10673__i + 1]; ++G__10673__i;}
  p__10670 = new cljs.core.IndexedSeq(G__10673__a,0);
} 
return get_in__delegate.call(this,ks,p__10670);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__10674){
var ks = cljs.core.first(arglist__10674);
var p__10670 = cljs.core.rest(arglist__10674);
return get_in__delegate(ks,p__10670);
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
var G__10675__i = 0, G__10675__a = new Array(arguments.length -  1);
while (G__10675__i < G__10675__a.length) {G__10675__a[G__10675__i] = arguments[G__10675__i + 1]; ++G__10675__i;}
  args = new cljs.core.IndexedSeq(G__10675__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__10676){
var f = cljs.core.first(arglist__10676);
var args = cljs.core.rest(arglist__10676);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__10677_SHARP_){
return cljs.core.assoc_in.call(null,p1__10677_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__10678){
var vec__10680 = p__10678;
var default$ = cljs.core.nth.call(null,vec__10680,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__10678 = null;
if (arguments.length > 1) {
var G__10681__i = 0, G__10681__a = new Array(arguments.length -  1);
while (G__10681__i < G__10681__a.length) {G__10681__a[G__10681__i] = arguments[G__10681__i + 1]; ++G__10681__i;}
  p__10678 = new cljs.core.IndexedSeq(G__10681__a,0);
} 
return get_BANG___delegate.call(this,k,p__10678);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__10682){
var k = cljs.core.first(arglist__10682);
var p__10678 = cljs.core.rest(arglist__10682);
return get_BANG___delegate(k,p__10678);
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
var get_in_BANG___delegate = function (ks,p__10683){
var vec__10685 = p__10683;
var default$ = cljs.core.nth.call(null,vec__10685,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__10683 = null;
if (arguments.length > 1) {
var G__10686__i = 0, G__10686__a = new Array(arguments.length -  1);
while (G__10686__i < G__10686__a.length) {G__10686__a[G__10686__i] = arguments[G__10686__i + 1]; ++G__10686__i;}
  p__10683 = new cljs.core.IndexedSeq(G__10686__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__10683);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__10687){
var ks = cljs.core.first(arglist__10687);
var p__10683 = cljs.core.rest(arglist__10687);
return get_in_BANG___delegate(ks,p__10683);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__10688_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__10688_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__10689__i = 0, G__10689__a = new Array(arguments.length -  2);
while (G__10689__i < G__10689__a.length) {G__10689__a[G__10689__i] = arguments[G__10689__i + 2]; ++G__10689__i;}
  args = new cljs.core.IndexedSeq(G__10689__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__10690){
var ks = cljs.core.first(arglist__10690);
arglist__10690 = cljs.core.next(arglist__10690);
var f = cljs.core.first(arglist__10690);
var args = cljs.core.rest(arglist__10690);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;
