// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('reagent.ratom')) {
goog.provide('reagent.ratom');
}
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_10810 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_10810;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj10812 = {};
return obj10812;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__10816__delegate = function (x,p__10813){
var map__10815 = p__10813;
var map__10815__$1 = ((cljs.core.seq_QMARK_.call(null,map__10815))?cljs.core.apply.call(null,cljs.core.hash_map,map__10815):map__10815);
var validator = cljs.core.get.call(null,map__10815__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__10815__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__10816 = function (x,var_args){
var p__10813 = null;
if (arguments.length > 1) {
var G__10817__i = 0, G__10817__a = new Array(arguments.length -  1);
while (G__10817__i < G__10817__a.length) {G__10817__a[G__10817__i] = arguments[G__10817__i + 1]; ++G__10817__i;}
  p__10813 = new cljs.core.IndexedSeq(G__10817__a,0);
} 
return G__10816__delegate.call(this,x,p__10813);};
G__10816.cljs$lang$maxFixedArity = 1;
G__10816.cljs$lang$applyTo = (function (arglist__10818){
var x = cljs.core.first(arglist__10818);
var p__10813 = cljs.core.rest(arglist__10818);
return G__10816__delegate(x,p__10813);
});
G__10816.cljs$core$IFn$_invoke$arity$variadic = G__10816__delegate;
return G__10816;
})()
;
atom = function(x,var_args){
var p__10813 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__10819 = null;
if (arguments.length > 1) {
var G__10820__i = 0, G__10820__a = new Array(arguments.length -  1);
while (G__10820__i < G__10820__a.length) {G__10820__a[G__10820__i] = arguments[G__10820__i + 1]; ++G__10820__i;}
G__10819 = new cljs.core.IndexedSeq(G__10820__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__10819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__10827 = self__.ratom;
if(G__10827){
var bit__4480__auto__ = (G__10827.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4480__auto__) || (G__10827.cljs$core$IDeref$)){
return true;
} else {
if((!G__10827.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__10827);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__10827);
}
})())?reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?((function (this$){
return (function (p1__10822_SHARP_,p2__10821_SHARP_){
return cljs.core.reset_BANG_.call(null,self__.ratom,p2__10821_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__10824_SHARP_,p2__10823_SHARP_){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__10823_SHARP_);
});})(this$))
)):reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return self__.ratom.call(null,self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((function (this$){
return (function (p1__10826_SHARP_,p2__10825_SHARP_){
return self__.ratom.call(null,self__.path,p2__10825_SHARP_);
});})(this$))
));
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_10828 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = null;

return cljs.core._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_10828;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer.call(null,a__$1._peek(),writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref.call(null,this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function cursor(src,path){
if((function (){var G__10833 = path;
if(G__10833){
var bit__4480__auto__ = (G__10833.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4480__auto__) || (G__10833.cljs$core$IDeref$)){
return true;
} else {
if((!G__10833.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__10833);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__10833);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,path)),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__10834 = path;
if(G__10834){
var bit__4480__auto__ = null;
if(cljs.core.truth_((function (){var or__3799__auto__ = bit__4480__auto__;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return G__10834.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__10834.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__10834);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__10834);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.call(null,path))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__3799__auto__ = (function (){var G__10836 = src;
if(G__10836){
var bit__4480__auto__ = null;
if(cljs.core.truth_((function (){var or__3799__auto__ = bit__4480__auto__;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return G__10836.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__10836.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__10836);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__10836);
}
})();
if(or__3799__auto__){
return or__3799__auto__;
} else {
return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.call(null,src))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj10838 = {};
return obj10838;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3787__auto__ = this$;
if(and__3787__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3787__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4443__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3799__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj10840 = {};
return obj10840;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3787__auto__ = this$;
if(and__3787__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3787__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4443__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3799__auto__ = (reagent.ratom.run[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (reagent.ratom.run["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj10842 = {};
return obj10842;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3787__auto__ = this$;
if(and__3787__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3787__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4443__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3799__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3787__auto__ = k;
if(and__3787__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3787__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4443__auto__ = (((k == null))?null:k);
return (function (){var or__3799__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function _peek_at(this$){
if((function (){var and__3787__auto__ = this$;
if(and__3787__auto__){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__3787__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__4443__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3799__auto__ = (reagent.ratom._peek_at[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (reagent.ratom._peek_at["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3787__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3787__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3787__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3799__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__10843_10856 = cljs.core.seq.call(null,derefed);
var chunk__10844_10857 = null;
var count__10845_10858 = (0);
var i__10846_10859 = (0);
while(true){
if((i__10846_10859 < count__10845_10858)){
var w_10860 = cljs.core._nth.call(null,chunk__10844_10857,i__10846_10859);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_10860)){
} else {
cljs.core.add_watch.call(null,w_10860,this$__$1,reagent.ratom._handle_change);
}

var G__10861 = seq__10843_10856;
var G__10862 = chunk__10844_10857;
var G__10863 = count__10845_10858;
var G__10864 = (i__10846_10859 + (1));
seq__10843_10856 = G__10861;
chunk__10844_10857 = G__10862;
count__10845_10858 = G__10863;
i__10846_10859 = G__10864;
continue;
} else {
var temp__4126__auto___10865 = cljs.core.seq.call(null,seq__10843_10856);
if(temp__4126__auto___10865){
var seq__10843_10866__$1 = temp__4126__auto___10865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10843_10866__$1)){
var c__4586__auto___10867 = cljs.core.chunk_first.call(null,seq__10843_10866__$1);
var G__10868 = cljs.core.chunk_rest.call(null,seq__10843_10866__$1);
var G__10869 = c__4586__auto___10867;
var G__10870 = cljs.core.count.call(null,c__4586__auto___10867);
var G__10871 = (0);
seq__10843_10856 = G__10868;
chunk__10844_10857 = G__10869;
count__10845_10858 = G__10870;
i__10846_10859 = G__10871;
continue;
} else {
var w_10872 = cljs.core.first.call(null,seq__10843_10866__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_10872)){
} else {
cljs.core.add_watch.call(null,w_10872,this$__$1,reagent.ratom._handle_change);
}

var G__10873 = cljs.core.next.call(null,seq__10843_10866__$1);
var G__10874 = null;
var G__10875 = (0);
var G__10876 = (0);
seq__10843_10856 = G__10873;
chunk__10844_10857 = G__10874;
count__10845_10858 = G__10875;
i__10846_10859 = G__10876;
continue;
}
} else {
}
}
break;
}

var seq__10847_10877 = cljs.core.seq.call(null,self__.watching);
var chunk__10848_10878 = null;
var count__10849_10879 = (0);
var i__10850_10880 = (0);
while(true){
if((i__10850_10880 < count__10849_10879)){
var w_10881 = cljs.core._nth.call(null,chunk__10848_10878,i__10850_10880);
if(cljs.core.contains_QMARK_.call(null,derefed,w_10881)){
} else {
cljs.core.remove_watch.call(null,w_10881,this$__$1);
}

var G__10882 = seq__10847_10877;
var G__10883 = chunk__10848_10878;
var G__10884 = count__10849_10879;
var G__10885 = (i__10850_10880 + (1));
seq__10847_10877 = G__10882;
chunk__10848_10878 = G__10883;
count__10849_10879 = G__10884;
i__10850_10880 = G__10885;
continue;
} else {
var temp__4126__auto___10886 = cljs.core.seq.call(null,seq__10847_10877);
if(temp__4126__auto___10886){
var seq__10847_10887__$1 = temp__4126__auto___10886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10847_10887__$1)){
var c__4586__auto___10888 = cljs.core.chunk_first.call(null,seq__10847_10887__$1);
var G__10889 = cljs.core.chunk_rest.call(null,seq__10847_10887__$1);
var G__10890 = c__4586__auto___10888;
var G__10891 = cljs.core.count.call(null,c__4586__auto___10888);
var G__10892 = (0);
seq__10847_10877 = G__10889;
chunk__10848_10878 = G__10890;
count__10849_10879 = G__10891;
i__10850_10880 = G__10892;
continue;
} else {
var w_10893 = cljs.core.first.call(null,seq__10847_10887__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_10893)){
} else {
cljs.core.remove_watch.call(null,w_10893,this$__$1);
}

var G__10894 = cljs.core.next.call(null,seq__10847_10887__$1);
var G__10895 = null;
var G__10896 = (0);
var G__10897 = (0);
seq__10847_10877 = G__10894;
chunk__10848_10878 = G__10895;
count__10849_10879 = G__10896;
i__10850_10880 = G__10897;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_10851 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = null;

return cljs.core._deref.call(null,this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_10851;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__10852_10898 = cljs.core.seq.call(null,self__.watching);
var chunk__10853_10899 = null;
var count__10854_10900 = (0);
var i__10855_10901 = (0);
while(true){
if((i__10855_10901 < count__10854_10900)){
var w_10902 = cljs.core._nth.call(null,chunk__10853_10899,i__10855_10901);
cljs.core.remove_watch.call(null,w_10902,this$__$1);

var G__10903 = seq__10852_10898;
var G__10904 = chunk__10853_10899;
var G__10905 = count__10854_10900;
var G__10906 = (i__10855_10901 + (1));
seq__10852_10898 = G__10903;
chunk__10853_10899 = G__10904;
count__10854_10900 = G__10905;
i__10855_10901 = G__10906;
continue;
} else {
var temp__4126__auto___10907 = cljs.core.seq.call(null,seq__10852_10898);
if(temp__4126__auto___10907){
var seq__10852_10908__$1 = temp__4126__auto___10907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10852_10908__$1)){
var c__4586__auto___10909 = cljs.core.chunk_first.call(null,seq__10852_10908__$1);
var G__10910 = cljs.core.chunk_rest.call(null,seq__10852_10908__$1);
var G__10911 = c__4586__auto___10909;
var G__10912 = cljs.core.count.call(null,c__4586__auto___10909);
var G__10913 = (0);
seq__10852_10898 = G__10910;
chunk__10853_10899 = G__10911;
count__10854_10900 = G__10912;
i__10855_10901 = G__10913;
continue;
} else {
var w_10914 = cljs.core.first.call(null,seq__10852_10908__$1);
cljs.core.remove_watch.call(null,w_10914,this$__$1);

var G__10915 = cljs.core.next.call(null,seq__10852_10908__$1);
var G__10916 = null;
var G__10917 = (0);
var G__10918 = (0);
seq__10852_10898 = G__10915;
chunk__10853_10899 = G__10916;
count__10854_10900 = G__10917;
i__10855_10901 = G__10918;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

self__.on_set.call(null,oldval,newval);
} else {
}

cljs.core._notify_watches.call(null,a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1)));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,reagent.ratom._peek_at.call(null,a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches.call(null,this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f__$1){
f__$1.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if((cljs.core.empty_QMARK_.call(null,self__.watches)) && (cljs.core.not.call(null,self__.auto_run))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__3799__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_10919 = self__.state;
self__.state = self__.f.call(null);

if((oldstate_10919 === self__.state)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldstate_10919,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__10920){
var map__10922 = p__10920;
var map__10922__$1 = ((cljs.core.seq_QMARK_.call(null,map__10922))?cljs.core.apply.call(null,cljs.core.hash_map,map__10922):map__10922);
var derefed = cljs.core.get.call(null,map__10922__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__10922__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__10922__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__10922__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__10920 = null;
if (arguments.length > 1) {
var G__10923__i = 0, G__10923__a = new Array(arguments.length -  1);
while (G__10923__i < G__10923__a.length) {G__10923__a[G__10923__i] = arguments[G__10923__i + 1]; ++G__10923__i;}
  p__10920 = new cljs.core.IndexedSeq(G__10923__a,0);
} 
return make_reaction__delegate.call(this,f,p__10920);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__10924){
var f = cljs.core.first(arglist__10924);
var p__10920 = cljs.core.rest(arglist__10924);
return make_reaction__delegate(f,p__10920);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<wrap: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldval,newval);
}

self__.callback.call(null,newval);

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3787__auto__ = self__.changed;
if(cljs.core.truth_(and__3787__auto__)){
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__3787__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map