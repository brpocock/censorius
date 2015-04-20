// Compiled by ClojureScript 0.0-2665 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t17920 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17920 = (function (f,fn_handler,meta17921){
this.f = f;
this.fn_handler = fn_handler;
this.meta17921 = meta17921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17920.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17922){
var self__ = this;
var _17922__$1 = this;
return self__.meta17921;
});

cljs.core.async.t17920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17922,meta17921__$1){
var self__ = this;
var _17922__$1 = this;
return (new cljs.core.async.t17920(self__.f,self__.fn_handler,meta17921__$1));
});

cljs.core.async.t17920.cljs$lang$type = true;

cljs.core.async.t17920.cljs$lang$ctorStr = "cljs.core.async/t17920";

cljs.core.async.t17920.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t17920");
});

cljs.core.async.__GT_t17920 = (function __GT_t17920(f__$1,fn_handler__$1,meta17921){
return (new cljs.core.async.t17920(f__$1,fn_handler__$1,meta17921));
});

}

return (new cljs.core.async.t17920(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__17924 = buff;
if(G__17924){
var bit__4480__auto__ = null;
if(cljs.core.truth_((function (){var or__3799__auto__ = bit__4480__auto__;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return G__17924.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17924.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17924);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17924);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17925 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17925);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17925,ret){
return (function (){
return fn1.call(null,val_17925);
});})(val_17925,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4686__auto___17926 = n;
var x_17927 = (0);
while(true){
if((x_17927 < n__4686__auto___17926)){
(a[x_17927] = (0));

var G__17928 = (x_17927 + (1));
x_17927 = G__17928;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17929 = (i + (1));
i = G__17929;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t17933 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17933 = (function (flag,alt_flag,meta17934){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17934 = meta17934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17933.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t17933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t17933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17935){
var self__ = this;
var _17935__$1 = this;
return self__.meta17934;
});})(flag))
;

cljs.core.async.t17933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17935,meta17934__$1){
var self__ = this;
var _17935__$1 = this;
return (new cljs.core.async.t17933(self__.flag,self__.alt_flag,meta17934__$1));
});})(flag))
;

cljs.core.async.t17933.cljs$lang$type = true;

cljs.core.async.t17933.cljs$lang$ctorStr = "cljs.core.async/t17933";

cljs.core.async.t17933.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t17933");
});})(flag))
;

cljs.core.async.__GT_t17933 = ((function (flag){
return (function __GT_t17933(flag__$1,alt_flag__$1,meta17934){
return (new cljs.core.async.t17933(flag__$1,alt_flag__$1,meta17934));
});})(flag))
;

}

return (new cljs.core.async.t17933(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t17939 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17939 = (function (cb,flag,alt_handler,meta17940){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17940 = meta17940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17939.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17939.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t17939.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t17939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17941){
var self__ = this;
var _17941__$1 = this;
return self__.meta17940;
});

cljs.core.async.t17939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17941,meta17940__$1){
var self__ = this;
var _17941__$1 = this;
return (new cljs.core.async.t17939(self__.cb,self__.flag,self__.alt_handler,meta17940__$1));
});

cljs.core.async.t17939.cljs$lang$type = true;

cljs.core.async.t17939.cljs$lang$ctorStr = "cljs.core.async/t17939";

cljs.core.async.t17939.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t17939");
});

cljs.core.async.__GT_t17939 = (function __GT_t17939(cb__$1,flag__$1,alt_handler__$1,meta17940){
return (new cljs.core.async.t17939(cb__$1,flag__$1,alt_handler__$1,meta17940));
});

}

return (new cljs.core.async.t17939(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17942_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17942_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17943_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17943_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3799__auto__ = wport;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17944 = (i + (1));
i = G__17944;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3799__auto__ = ret;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3787__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3787__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__17945){
var map__17947 = p__17945;
var map__17947__$1 = ((cljs.core.seq_QMARK_.call(null,map__17947))?cljs.core.apply.call(null,cljs.core.hash_map,map__17947):map__17947);
var opts = map__17947__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__17945 = null;
if (arguments.length > 1) {
var G__17948__i = 0, G__17948__a = new Array(arguments.length -  1);
while (G__17948__i < G__17948__a.length) {G__17948__a[G__17948__i] = arguments[G__17948__i + 1]; ++G__17948__i;}
  p__17945 = new cljs.core.IndexedSeq(G__17948__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__17945);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17949){
var ports = cljs.core.first(arglist__17949);
var p__17945 = cljs.core.rest(arglist__17949);
return alts_BANG___delegate(ports,p__17945);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6861__auto___18044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___18044){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___18044){
return (function (state_18020){
var state_val_18021 = (state_18020[(1)]);
if((state_val_18021 === (7))){
var inst_18016 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
var statearr_18022_18045 = state_18020__$1;
(statearr_18022_18045[(2)] = inst_18016);

(statearr_18022_18045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (1))){
var state_18020__$1 = state_18020;
var statearr_18023_18046 = state_18020__$1;
(statearr_18023_18046[(2)] = null);

(statearr_18023_18046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (4))){
var inst_17999 = (state_18020[(7)]);
var inst_17999__$1 = (state_18020[(2)]);
var inst_18000 = (inst_17999__$1 == null);
var state_18020__$1 = (function (){var statearr_18024 = state_18020;
(statearr_18024[(7)] = inst_17999__$1);

return statearr_18024;
})();
if(cljs.core.truth_(inst_18000)){
var statearr_18025_18047 = state_18020__$1;
(statearr_18025_18047[(1)] = (5));

} else {
var statearr_18026_18048 = state_18020__$1;
(statearr_18026_18048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (13))){
var state_18020__$1 = state_18020;
var statearr_18027_18049 = state_18020__$1;
(statearr_18027_18049[(2)] = null);

(statearr_18027_18049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (6))){
var inst_17999 = (state_18020[(7)]);
var state_18020__$1 = state_18020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18020__$1,(11),to,inst_17999);
} else {
if((state_val_18021 === (3))){
var inst_18018 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18020__$1,inst_18018);
} else {
if((state_val_18021 === (12))){
var state_18020__$1 = state_18020;
var statearr_18028_18050 = state_18020__$1;
(statearr_18028_18050[(2)] = null);

(statearr_18028_18050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (2))){
var state_18020__$1 = state_18020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18020__$1,(4),from);
} else {
if((state_val_18021 === (11))){
var inst_18009 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
if(cljs.core.truth_(inst_18009)){
var statearr_18029_18051 = state_18020__$1;
(statearr_18029_18051[(1)] = (12));

} else {
var statearr_18030_18052 = state_18020__$1;
(statearr_18030_18052[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (9))){
var state_18020__$1 = state_18020;
var statearr_18031_18053 = state_18020__$1;
(statearr_18031_18053[(2)] = null);

(statearr_18031_18053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (5))){
var state_18020__$1 = state_18020;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18032_18054 = state_18020__$1;
(statearr_18032_18054[(1)] = (8));

} else {
var statearr_18033_18055 = state_18020__$1;
(statearr_18033_18055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (14))){
var inst_18014 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
var statearr_18034_18056 = state_18020__$1;
(statearr_18034_18056[(2)] = inst_18014);

(statearr_18034_18056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (10))){
var inst_18006 = (state_18020[(2)]);
var state_18020__$1 = state_18020;
var statearr_18035_18057 = state_18020__$1;
(statearr_18035_18057[(2)] = inst_18006);

(statearr_18035_18057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18021 === (8))){
var inst_18003 = cljs.core.async.close_BANG_.call(null,to);
var state_18020__$1 = state_18020;
var statearr_18036_18058 = state_18020__$1;
(statearr_18036_18058[(2)] = inst_18003);

(statearr_18036_18058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___18044))
;
return ((function (switch__6805__auto__,c__6861__auto___18044){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18040 = [null,null,null,null,null,null,null,null];
(statearr_18040[(0)] = state_machine__6806__auto__);

(statearr_18040[(1)] = (1));

return statearr_18040;
});
var state_machine__6806__auto____1 = (function (state_18020){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18041){if((e18041 instanceof Object)){
var ex__6809__auto__ = e18041;
var statearr_18042_18059 = state_18020;
(statearr_18042_18059[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18060 = state_18020;
state_18020 = G__18060;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18020){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___18044))
})();
var state__6863__auto__ = (function (){var statearr_18043 = f__6862__auto__.call(null);
(statearr_18043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___18044);

return statearr_18043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___18044))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__18244){
var vec__18245 = p__18244;
var v = cljs.core.nth.call(null,vec__18245,(0),null);
var p = cljs.core.nth.call(null,vec__18245,(1),null);
var job = vec__18245;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6861__auto___18427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___18427,res,vec__18245,v,p,job,jobs,results){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___18427,res,vec__18245,v,p,job,jobs,results){
return (function (state_18250){
var state_val_18251 = (state_18250[(1)]);
if((state_val_18251 === (2))){
var inst_18247 = (state_18250[(2)]);
var inst_18248 = cljs.core.async.close_BANG_.call(null,res);
var state_18250__$1 = (function (){var statearr_18252 = state_18250;
(statearr_18252[(7)] = inst_18247);

return statearr_18252;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18250__$1,inst_18248);
} else {
if((state_val_18251 === (1))){
var state_18250__$1 = state_18250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18250__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6861__auto___18427,res,vec__18245,v,p,job,jobs,results))
;
return ((function (switch__6805__auto__,c__6861__auto___18427,res,vec__18245,v,p,job,jobs,results){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18256 = [null,null,null,null,null,null,null,null];
(statearr_18256[(0)] = state_machine__6806__auto__);

(statearr_18256[(1)] = (1));

return statearr_18256;
});
var state_machine__6806__auto____1 = (function (state_18250){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18257){if((e18257 instanceof Object)){
var ex__6809__auto__ = e18257;
var statearr_18258_18428 = state_18250;
(statearr_18258_18428[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18429 = state_18250;
state_18250 = G__18429;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18250){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___18427,res,vec__18245,v,p,job,jobs,results))
})();
var state__6863__auto__ = (function (){var statearr_18259 = f__6862__auto__.call(null);
(statearr_18259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___18427);

return statearr_18259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___18427,res,vec__18245,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18260){
var vec__18261 = p__18260;
var v = cljs.core.nth.call(null,vec__18261,(0),null);
var p = cljs.core.nth.call(null,vec__18261,(1),null);
var job = vec__18261;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4686__auto___18430 = n;
var __18431 = (0);
while(true){
if((__18431 < n__4686__auto___18430)){
var G__18262_18432 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18262_18432) {
case "async":
var c__6861__auto___18434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18431,c__6861__auto___18434,G__18262_18432,n__4686__auto___18430,jobs,results,process,async){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (__18431,c__6861__auto___18434,G__18262_18432,n__4686__auto___18430,jobs,results,process,async){
return (function (state_18275){
var state_val_18276 = (state_18275[(1)]);
if((state_val_18276 === (7))){
var inst_18271 = (state_18275[(2)]);
var state_18275__$1 = state_18275;
var statearr_18277_18435 = state_18275__$1;
(statearr_18277_18435[(2)] = inst_18271);

(statearr_18277_18435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18276 === (6))){
var state_18275__$1 = state_18275;
var statearr_18278_18436 = state_18275__$1;
(statearr_18278_18436[(2)] = null);

(statearr_18278_18436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18276 === (5))){
var state_18275__$1 = state_18275;
var statearr_18279_18437 = state_18275__$1;
(statearr_18279_18437[(2)] = null);

(statearr_18279_18437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18276 === (4))){
var inst_18265 = (state_18275[(2)]);
var inst_18266 = async.call(null,inst_18265);
var state_18275__$1 = state_18275;
if(cljs.core.truth_(inst_18266)){
var statearr_18280_18438 = state_18275__$1;
(statearr_18280_18438[(1)] = (5));

} else {
var statearr_18281_18439 = state_18275__$1;
(statearr_18281_18439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18276 === (3))){
var inst_18273 = (state_18275[(2)]);
var state_18275__$1 = state_18275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18275__$1,inst_18273);
} else {
if((state_val_18276 === (2))){
var state_18275__$1 = state_18275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18275__$1,(4),jobs);
} else {
if((state_val_18276 === (1))){
var state_18275__$1 = state_18275;
var statearr_18282_18440 = state_18275__$1;
(statearr_18282_18440[(2)] = null);

(statearr_18282_18440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18431,c__6861__auto___18434,G__18262_18432,n__4686__auto___18430,jobs,results,process,async))
;
return ((function (__18431,switch__6805__auto__,c__6861__auto___18434,G__18262_18432,n__4686__auto___18430,jobs,results,process,async){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18286 = [null,null,null,null,null,null,null];
(statearr_18286[(0)] = state_machine__6806__auto__);

(statearr_18286[(1)] = (1));

return statearr_18286;
});
var state_machine__6806__auto____1 = (function (state_18275){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18287){if((e18287 instanceof Object)){
var ex__6809__auto__ = e18287;
var statearr_18288_18441 = state_18275;
(statearr_18288_18441[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18442 = state_18275;
state_18275 = G__18442;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18275){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(__18431,switch__6805__auto__,c__6861__auto___18434,G__18262_18432,n__4686__auto___18430,jobs,results,process,async))
})();
var state__6863__auto__ = (function (){var statearr_18289 = f__6862__auto__.call(null);
(statearr_18289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___18434);

return statearr_18289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(__18431,c__6861__auto___18434,G__18262_18432,n__4686__auto___18430,jobs,results,process,async))
);


break;
case "compute":
var c__6861__auto___18443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18431,c__6861__auto___18443,G__18262_18432,n__4686__auto___18430,jobs,results,process,async){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (__18431,c__6861__auto___18443,G__18262_18432,n__4686__auto___18430,jobs,results,process,async){
return (function (state_18302){
var state_val_18303 = (state_18302[(1)]);
if((state_val_18303 === (7))){
var inst_18298 = (state_18302[(2)]);
var state_18302__$1 = state_18302;
var statearr_18304_18444 = state_18302__$1;
(statearr_18304_18444[(2)] = inst_18298);

(statearr_18304_18444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18303 === (6))){
var state_18302__$1 = state_18302;
var statearr_18305_18445 = state_18302__$1;
(statearr_18305_18445[(2)] = null);

(statearr_18305_18445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18303 === (5))){
var state_18302__$1 = state_18302;
var statearr_18306_18446 = state_18302__$1;
(statearr_18306_18446[(2)] = null);

(statearr_18306_18446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18303 === (4))){
var inst_18292 = (state_18302[(2)]);
var inst_18293 = process.call(null,inst_18292);
var state_18302__$1 = state_18302;
if(cljs.core.truth_(inst_18293)){
var statearr_18307_18447 = state_18302__$1;
(statearr_18307_18447[(1)] = (5));

} else {
var statearr_18308_18448 = state_18302__$1;
(statearr_18308_18448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18303 === (3))){
var inst_18300 = (state_18302[(2)]);
var state_18302__$1 = state_18302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18302__$1,inst_18300);
} else {
if((state_val_18303 === (2))){
var state_18302__$1 = state_18302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18302__$1,(4),jobs);
} else {
if((state_val_18303 === (1))){
var state_18302__$1 = state_18302;
var statearr_18309_18449 = state_18302__$1;
(statearr_18309_18449[(2)] = null);

(statearr_18309_18449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18431,c__6861__auto___18443,G__18262_18432,n__4686__auto___18430,jobs,results,process,async))
;
return ((function (__18431,switch__6805__auto__,c__6861__auto___18443,G__18262_18432,n__4686__auto___18430,jobs,results,process,async){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18313 = [null,null,null,null,null,null,null];
(statearr_18313[(0)] = state_machine__6806__auto__);

(statearr_18313[(1)] = (1));

return statearr_18313;
});
var state_machine__6806__auto____1 = (function (state_18302){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18314){if((e18314 instanceof Object)){
var ex__6809__auto__ = e18314;
var statearr_18315_18450 = state_18302;
(statearr_18315_18450[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18451 = state_18302;
state_18302 = G__18451;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18302){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(__18431,switch__6805__auto__,c__6861__auto___18443,G__18262_18432,n__4686__auto___18430,jobs,results,process,async))
})();
var state__6863__auto__ = (function (){var statearr_18316 = f__6862__auto__.call(null);
(statearr_18316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___18443);

return statearr_18316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(__18431,c__6861__auto___18443,G__18262_18432,n__4686__auto___18430,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18452 = (__18431 + (1));
__18431 = G__18452;
continue;
} else {
}
break;
}

var c__6861__auto___18453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___18453,jobs,results,process,async){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___18453,jobs,results,process,async){
return (function (state_18338){
var state_val_18339 = (state_18338[(1)]);
if((state_val_18339 === (9))){
var inst_18331 = (state_18338[(2)]);
var state_18338__$1 = (function (){var statearr_18340 = state_18338;
(statearr_18340[(7)] = inst_18331);

return statearr_18340;
})();
var statearr_18341_18454 = state_18338__$1;
(statearr_18341_18454[(2)] = null);

(statearr_18341_18454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18339 === (8))){
var inst_18324 = (state_18338[(8)]);
var inst_18329 = (state_18338[(2)]);
var state_18338__$1 = (function (){var statearr_18342 = state_18338;
(statearr_18342[(9)] = inst_18329);

return statearr_18342;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18338__$1,(9),results,inst_18324);
} else {
if((state_val_18339 === (7))){
var inst_18334 = (state_18338[(2)]);
var state_18338__$1 = state_18338;
var statearr_18343_18455 = state_18338__$1;
(statearr_18343_18455[(2)] = inst_18334);

(statearr_18343_18455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18339 === (6))){
var inst_18324 = (state_18338[(8)]);
var inst_18319 = (state_18338[(10)]);
var inst_18324__$1 = cljs.core.async.chan.call(null,(1));
var inst_18325 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18326 = [inst_18319,inst_18324__$1];
var inst_18327 = (new cljs.core.PersistentVector(null,2,(5),inst_18325,inst_18326,null));
var state_18338__$1 = (function (){var statearr_18344 = state_18338;
(statearr_18344[(8)] = inst_18324__$1);

return statearr_18344;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18338__$1,(8),jobs,inst_18327);
} else {
if((state_val_18339 === (5))){
var inst_18322 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18338__$1 = state_18338;
var statearr_18345_18456 = state_18338__$1;
(statearr_18345_18456[(2)] = inst_18322);

(statearr_18345_18456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18339 === (4))){
var inst_18319 = (state_18338[(10)]);
var inst_18319__$1 = (state_18338[(2)]);
var inst_18320 = (inst_18319__$1 == null);
var state_18338__$1 = (function (){var statearr_18346 = state_18338;
(statearr_18346[(10)] = inst_18319__$1);

return statearr_18346;
})();
if(cljs.core.truth_(inst_18320)){
var statearr_18347_18457 = state_18338__$1;
(statearr_18347_18457[(1)] = (5));

} else {
var statearr_18348_18458 = state_18338__$1;
(statearr_18348_18458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18339 === (3))){
var inst_18336 = (state_18338[(2)]);
var state_18338__$1 = state_18338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18338__$1,inst_18336);
} else {
if((state_val_18339 === (2))){
var state_18338__$1 = state_18338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18338__$1,(4),from);
} else {
if((state_val_18339 === (1))){
var state_18338__$1 = state_18338;
var statearr_18349_18459 = state_18338__$1;
(statearr_18349_18459[(2)] = null);

(statearr_18349_18459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___18453,jobs,results,process,async))
;
return ((function (switch__6805__auto__,c__6861__auto___18453,jobs,results,process,async){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18353 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18353[(0)] = state_machine__6806__auto__);

(statearr_18353[(1)] = (1));

return statearr_18353;
});
var state_machine__6806__auto____1 = (function (state_18338){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18354){if((e18354 instanceof Object)){
var ex__6809__auto__ = e18354;
var statearr_18355_18460 = state_18338;
(statearr_18355_18460[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18461 = state_18338;
state_18338 = G__18461;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18338){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___18453,jobs,results,process,async))
})();
var state__6863__auto__ = (function (){var statearr_18356 = f__6862__auto__.call(null);
(statearr_18356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___18453);

return statearr_18356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___18453,jobs,results,process,async))
);


var c__6861__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto__,jobs,results,process,async){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto__,jobs,results,process,async){
return (function (state_18394){
var state_val_18395 = (state_18394[(1)]);
if((state_val_18395 === (7))){
var inst_18390 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
var statearr_18396_18462 = state_18394__$1;
(statearr_18396_18462[(2)] = inst_18390);

(statearr_18396_18462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (20))){
var state_18394__$1 = state_18394;
var statearr_18397_18463 = state_18394__$1;
(statearr_18397_18463[(2)] = null);

(statearr_18397_18463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (1))){
var state_18394__$1 = state_18394;
var statearr_18398_18464 = state_18394__$1;
(statearr_18398_18464[(2)] = null);

(statearr_18398_18464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (4))){
var inst_18359 = (state_18394[(7)]);
var inst_18359__$1 = (state_18394[(2)]);
var inst_18360 = (inst_18359__$1 == null);
var state_18394__$1 = (function (){var statearr_18399 = state_18394;
(statearr_18399[(7)] = inst_18359__$1);

return statearr_18399;
})();
if(cljs.core.truth_(inst_18360)){
var statearr_18400_18465 = state_18394__$1;
(statearr_18400_18465[(1)] = (5));

} else {
var statearr_18401_18466 = state_18394__$1;
(statearr_18401_18466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (15))){
var inst_18372 = (state_18394[(8)]);
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18394__$1,(18),to,inst_18372);
} else {
if((state_val_18395 === (21))){
var inst_18385 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
var statearr_18402_18467 = state_18394__$1;
(statearr_18402_18467[(2)] = inst_18385);

(statearr_18402_18467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (13))){
var inst_18387 = (state_18394[(2)]);
var state_18394__$1 = (function (){var statearr_18403 = state_18394;
(statearr_18403[(9)] = inst_18387);

return statearr_18403;
})();
var statearr_18404_18468 = state_18394__$1;
(statearr_18404_18468[(2)] = null);

(statearr_18404_18468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (6))){
var inst_18359 = (state_18394[(7)]);
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18394__$1,(11),inst_18359);
} else {
if((state_val_18395 === (17))){
var inst_18380 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
if(cljs.core.truth_(inst_18380)){
var statearr_18405_18469 = state_18394__$1;
(statearr_18405_18469[(1)] = (19));

} else {
var statearr_18406_18470 = state_18394__$1;
(statearr_18406_18470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (3))){
var inst_18392 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18394__$1,inst_18392);
} else {
if((state_val_18395 === (12))){
var inst_18369 = (state_18394[(10)]);
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18394__$1,(14),inst_18369);
} else {
if((state_val_18395 === (2))){
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18394__$1,(4),results);
} else {
if((state_val_18395 === (19))){
var state_18394__$1 = state_18394;
var statearr_18407_18471 = state_18394__$1;
(statearr_18407_18471[(2)] = null);

(statearr_18407_18471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (11))){
var inst_18369 = (state_18394[(2)]);
var state_18394__$1 = (function (){var statearr_18408 = state_18394;
(statearr_18408[(10)] = inst_18369);

return statearr_18408;
})();
var statearr_18409_18472 = state_18394__$1;
(statearr_18409_18472[(2)] = null);

(statearr_18409_18472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (9))){
var state_18394__$1 = state_18394;
var statearr_18410_18473 = state_18394__$1;
(statearr_18410_18473[(2)] = null);

(statearr_18410_18473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (5))){
var state_18394__$1 = state_18394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18411_18474 = state_18394__$1;
(statearr_18411_18474[(1)] = (8));

} else {
var statearr_18412_18475 = state_18394__$1;
(statearr_18412_18475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (14))){
var inst_18372 = (state_18394[(8)]);
var inst_18374 = (state_18394[(11)]);
var inst_18372__$1 = (state_18394[(2)]);
var inst_18373 = (inst_18372__$1 == null);
var inst_18374__$1 = cljs.core.not.call(null,inst_18373);
var state_18394__$1 = (function (){var statearr_18413 = state_18394;
(statearr_18413[(8)] = inst_18372__$1);

(statearr_18413[(11)] = inst_18374__$1);

return statearr_18413;
})();
if(inst_18374__$1){
var statearr_18414_18476 = state_18394__$1;
(statearr_18414_18476[(1)] = (15));

} else {
var statearr_18415_18477 = state_18394__$1;
(statearr_18415_18477[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (16))){
var inst_18374 = (state_18394[(11)]);
var state_18394__$1 = state_18394;
var statearr_18416_18478 = state_18394__$1;
(statearr_18416_18478[(2)] = inst_18374);

(statearr_18416_18478[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (10))){
var inst_18366 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
var statearr_18417_18479 = state_18394__$1;
(statearr_18417_18479[(2)] = inst_18366);

(statearr_18417_18479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (18))){
var inst_18377 = (state_18394[(2)]);
var state_18394__$1 = state_18394;
var statearr_18418_18480 = state_18394__$1;
(statearr_18418_18480[(2)] = inst_18377);

(statearr_18418_18480[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18395 === (8))){
var inst_18363 = cljs.core.async.close_BANG_.call(null,to);
var state_18394__$1 = state_18394;
var statearr_18419_18481 = state_18394__$1;
(statearr_18419_18481[(2)] = inst_18363);

(statearr_18419_18481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto__,jobs,results,process,async))
;
return ((function (switch__6805__auto__,c__6861__auto__,jobs,results,process,async){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18423 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18423[(0)] = state_machine__6806__auto__);

(statearr_18423[(1)] = (1));

return statearr_18423;
});
var state_machine__6806__auto____1 = (function (state_18394){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18424){if((e18424 instanceof Object)){
var ex__6809__auto__ = e18424;
var statearr_18425_18482 = state_18394;
(statearr_18425_18482[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18483 = state_18394;
state_18394 = G__18483;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18394){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto__,jobs,results,process,async))
})();
var state__6863__auto__ = (function (){var statearr_18426 = f__6862__auto__.call(null);
(statearr_18426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto__);

return statearr_18426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto__,jobs,results,process,async))
);

return c__6861__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6861__auto___18584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___18584,tc,fc){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___18584,tc,fc){
return (function (state_18559){
var state_val_18560 = (state_18559[(1)]);
if((state_val_18560 === (7))){
var inst_18555 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18561_18585 = state_18559__$1;
(statearr_18561_18585[(2)] = inst_18555);

(statearr_18561_18585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (1))){
var state_18559__$1 = state_18559;
var statearr_18562_18586 = state_18559__$1;
(statearr_18562_18586[(2)] = null);

(statearr_18562_18586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (4))){
var inst_18536 = (state_18559[(7)]);
var inst_18536__$1 = (state_18559[(2)]);
var inst_18537 = (inst_18536__$1 == null);
var state_18559__$1 = (function (){var statearr_18563 = state_18559;
(statearr_18563[(7)] = inst_18536__$1);

return statearr_18563;
})();
if(cljs.core.truth_(inst_18537)){
var statearr_18564_18587 = state_18559__$1;
(statearr_18564_18587[(1)] = (5));

} else {
var statearr_18565_18588 = state_18559__$1;
(statearr_18565_18588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (13))){
var state_18559__$1 = state_18559;
var statearr_18566_18589 = state_18559__$1;
(statearr_18566_18589[(2)] = null);

(statearr_18566_18589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (6))){
var inst_18536 = (state_18559[(7)]);
var inst_18542 = p.call(null,inst_18536);
var state_18559__$1 = state_18559;
if(cljs.core.truth_(inst_18542)){
var statearr_18567_18590 = state_18559__$1;
(statearr_18567_18590[(1)] = (9));

} else {
var statearr_18568_18591 = state_18559__$1;
(statearr_18568_18591[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (3))){
var inst_18557 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18559__$1,inst_18557);
} else {
if((state_val_18560 === (12))){
var state_18559__$1 = state_18559;
var statearr_18569_18592 = state_18559__$1;
(statearr_18569_18592[(2)] = null);

(statearr_18569_18592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (2))){
var state_18559__$1 = state_18559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18559__$1,(4),ch);
} else {
if((state_val_18560 === (11))){
var inst_18536 = (state_18559[(7)]);
var inst_18546 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18559__$1,(8),inst_18546,inst_18536);
} else {
if((state_val_18560 === (9))){
var state_18559__$1 = state_18559;
var statearr_18570_18593 = state_18559__$1;
(statearr_18570_18593[(2)] = tc);

(statearr_18570_18593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (5))){
var inst_18539 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18540 = cljs.core.async.close_BANG_.call(null,fc);
var state_18559__$1 = (function (){var statearr_18571 = state_18559;
(statearr_18571[(8)] = inst_18539);

return statearr_18571;
})();
var statearr_18572_18594 = state_18559__$1;
(statearr_18572_18594[(2)] = inst_18540);

(statearr_18572_18594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (14))){
var inst_18553 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18573_18595 = state_18559__$1;
(statearr_18573_18595[(2)] = inst_18553);

(statearr_18573_18595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (10))){
var state_18559__$1 = state_18559;
var statearr_18574_18596 = state_18559__$1;
(statearr_18574_18596[(2)] = fc);

(statearr_18574_18596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (8))){
var inst_18548 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
if(cljs.core.truth_(inst_18548)){
var statearr_18575_18597 = state_18559__$1;
(statearr_18575_18597[(1)] = (12));

} else {
var statearr_18576_18598 = state_18559__$1;
(statearr_18576_18598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___18584,tc,fc))
;
return ((function (switch__6805__auto__,c__6861__auto___18584,tc,fc){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18580 = [null,null,null,null,null,null,null,null,null];
(statearr_18580[(0)] = state_machine__6806__auto__);

(statearr_18580[(1)] = (1));

return statearr_18580;
});
var state_machine__6806__auto____1 = (function (state_18559){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18581){if((e18581 instanceof Object)){
var ex__6809__auto__ = e18581;
var statearr_18582_18599 = state_18559;
(statearr_18582_18599[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18600 = state_18559;
state_18559 = G__18600;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18559){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___18584,tc,fc))
})();
var state__6863__auto__ = (function (){var statearr_18583 = f__6862__auto__.call(null);
(statearr_18583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___18584);

return statearr_18583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___18584,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6861__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto__){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto__){
return (function (state_18647){
var state_val_18648 = (state_18647[(1)]);
if((state_val_18648 === (7))){
var inst_18643 = (state_18647[(2)]);
var state_18647__$1 = state_18647;
var statearr_18649_18665 = state_18647__$1;
(statearr_18649_18665[(2)] = inst_18643);

(statearr_18649_18665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (6))){
var inst_18633 = (state_18647[(7)]);
var inst_18636 = (state_18647[(8)]);
var inst_18640 = f.call(null,inst_18633,inst_18636);
var inst_18633__$1 = inst_18640;
var state_18647__$1 = (function (){var statearr_18650 = state_18647;
(statearr_18650[(7)] = inst_18633__$1);

return statearr_18650;
})();
var statearr_18651_18666 = state_18647__$1;
(statearr_18651_18666[(2)] = null);

(statearr_18651_18666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (5))){
var inst_18633 = (state_18647[(7)]);
var state_18647__$1 = state_18647;
var statearr_18652_18667 = state_18647__$1;
(statearr_18652_18667[(2)] = inst_18633);

(statearr_18652_18667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (4))){
var inst_18636 = (state_18647[(8)]);
var inst_18636__$1 = (state_18647[(2)]);
var inst_18637 = (inst_18636__$1 == null);
var state_18647__$1 = (function (){var statearr_18653 = state_18647;
(statearr_18653[(8)] = inst_18636__$1);

return statearr_18653;
})();
if(cljs.core.truth_(inst_18637)){
var statearr_18654_18668 = state_18647__$1;
(statearr_18654_18668[(1)] = (5));

} else {
var statearr_18655_18669 = state_18647__$1;
(statearr_18655_18669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (3))){
var inst_18645 = (state_18647[(2)]);
var state_18647__$1 = state_18647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18647__$1,inst_18645);
} else {
if((state_val_18648 === (2))){
var state_18647__$1 = state_18647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18647__$1,(4),ch);
} else {
if((state_val_18648 === (1))){
var inst_18633 = init;
var state_18647__$1 = (function (){var statearr_18656 = state_18647;
(statearr_18656[(7)] = inst_18633);

return statearr_18656;
})();
var statearr_18657_18670 = state_18647__$1;
(statearr_18657_18670[(2)] = null);

(statearr_18657_18670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6861__auto__))
;
return ((function (switch__6805__auto__,c__6861__auto__){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18661 = [null,null,null,null,null,null,null,null,null];
(statearr_18661[(0)] = state_machine__6806__auto__);

(statearr_18661[(1)] = (1));

return statearr_18661;
});
var state_machine__6806__auto____1 = (function (state_18647){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18662){if((e18662 instanceof Object)){
var ex__6809__auto__ = e18662;
var statearr_18663_18671 = state_18647;
(statearr_18663_18671[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18672 = state_18647;
state_18647 = G__18672;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18647){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto__))
})();
var state__6863__auto__ = (function (){var statearr_18664 = f__6862__auto__.call(null);
(statearr_18664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto__);

return statearr_18664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto__))
);

return c__6861__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6861__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto__){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto__){
return (function (state_18746){
var state_val_18747 = (state_18746[(1)]);
if((state_val_18747 === (7))){
var inst_18728 = (state_18746[(2)]);
var state_18746__$1 = state_18746;
var statearr_18748_18771 = state_18746__$1;
(statearr_18748_18771[(2)] = inst_18728);

(statearr_18748_18771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18747 === (1))){
var inst_18722 = cljs.core.seq.call(null,coll);
var inst_18723 = inst_18722;
var state_18746__$1 = (function (){var statearr_18749 = state_18746;
(statearr_18749[(7)] = inst_18723);

return statearr_18749;
})();
var statearr_18750_18772 = state_18746__$1;
(statearr_18750_18772[(2)] = null);

(statearr_18750_18772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18747 === (4))){
var inst_18723 = (state_18746[(7)]);
var inst_18726 = cljs.core.first.call(null,inst_18723);
var state_18746__$1 = state_18746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18746__$1,(7),ch,inst_18726);
} else {
if((state_val_18747 === (13))){
var inst_18740 = (state_18746[(2)]);
var state_18746__$1 = state_18746;
var statearr_18751_18773 = state_18746__$1;
(statearr_18751_18773[(2)] = inst_18740);

(statearr_18751_18773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18747 === (6))){
var inst_18731 = (state_18746[(2)]);
var state_18746__$1 = state_18746;
if(cljs.core.truth_(inst_18731)){
var statearr_18752_18774 = state_18746__$1;
(statearr_18752_18774[(1)] = (8));

} else {
var statearr_18753_18775 = state_18746__$1;
(statearr_18753_18775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18747 === (3))){
var inst_18744 = (state_18746[(2)]);
var state_18746__$1 = state_18746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18746__$1,inst_18744);
} else {
if((state_val_18747 === (12))){
var state_18746__$1 = state_18746;
var statearr_18754_18776 = state_18746__$1;
(statearr_18754_18776[(2)] = null);

(statearr_18754_18776[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18747 === (2))){
var inst_18723 = (state_18746[(7)]);
var state_18746__$1 = state_18746;
if(cljs.core.truth_(inst_18723)){
var statearr_18755_18777 = state_18746__$1;
(statearr_18755_18777[(1)] = (4));

} else {
var statearr_18756_18778 = state_18746__$1;
(statearr_18756_18778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18747 === (11))){
var inst_18737 = cljs.core.async.close_BANG_.call(null,ch);
var state_18746__$1 = state_18746;
var statearr_18757_18779 = state_18746__$1;
(statearr_18757_18779[(2)] = inst_18737);

(statearr_18757_18779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18747 === (9))){
var state_18746__$1 = state_18746;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18758_18780 = state_18746__$1;
(statearr_18758_18780[(1)] = (11));

} else {
var statearr_18759_18781 = state_18746__$1;
(statearr_18759_18781[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18747 === (5))){
var inst_18723 = (state_18746[(7)]);
var state_18746__$1 = state_18746;
var statearr_18760_18782 = state_18746__$1;
(statearr_18760_18782[(2)] = inst_18723);

(statearr_18760_18782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18747 === (10))){
var inst_18742 = (state_18746[(2)]);
var state_18746__$1 = state_18746;
var statearr_18761_18783 = state_18746__$1;
(statearr_18761_18783[(2)] = inst_18742);

(statearr_18761_18783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18747 === (8))){
var inst_18723 = (state_18746[(7)]);
var inst_18733 = cljs.core.next.call(null,inst_18723);
var inst_18723__$1 = inst_18733;
var state_18746__$1 = (function (){var statearr_18762 = state_18746;
(statearr_18762[(7)] = inst_18723__$1);

return statearr_18762;
})();
var statearr_18763_18784 = state_18746__$1;
(statearr_18763_18784[(2)] = null);

(statearr_18763_18784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto__))
;
return ((function (switch__6805__auto__,c__6861__auto__){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18767 = [null,null,null,null,null,null,null,null];
(statearr_18767[(0)] = state_machine__6806__auto__);

(statearr_18767[(1)] = (1));

return statearr_18767;
});
var state_machine__6806__auto____1 = (function (state_18746){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18768){if((e18768 instanceof Object)){
var ex__6809__auto__ = e18768;
var statearr_18769_18785 = state_18746;
(statearr_18769_18785[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18786 = state_18746;
state_18746 = G__18786;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18746){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto__))
})();
var state__6863__auto__ = (function (){var statearr_18770 = f__6862__auto__.call(null);
(statearr_18770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto__);

return statearr_18770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto__))
);

return c__6861__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj18788 = {};
return obj18788;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3787__auto__ = _;
if(and__3787__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3787__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4443__auto__ = (((_ == null))?null:_);
return (function (){var or__3799__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj18790 = {};
return obj18790;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3787__auto__ = m;
if(and__3787__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3787__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4443__auto__ = (((m == null))?null:m);
return (function (){var or__3799__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3787__auto__ = m;
if(and__3787__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3787__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4443__auto__ = (((m == null))?null:m);
return (function (){var or__3799__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3787__auto__ = m;
if(and__3787__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3787__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4443__auto__ = (((m == null))?null:m);
return (function (){var or__3799__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t19012 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19012 = (function (cs,ch,mult,meta19013){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19013 = meta19013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19012.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19012.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19012.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19012.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t19012.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19014){
var self__ = this;
var _19014__$1 = this;
return self__.meta19013;
});})(cs))
;

cljs.core.async.t19012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19014,meta19013__$1){
var self__ = this;
var _19014__$1 = this;
return (new cljs.core.async.t19012(self__.cs,self__.ch,self__.mult,meta19013__$1));
});})(cs))
;

cljs.core.async.t19012.cljs$lang$type = true;

cljs.core.async.t19012.cljs$lang$ctorStr = "cljs.core.async/t19012";

cljs.core.async.t19012.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19012");
});})(cs))
;

cljs.core.async.__GT_t19012 = ((function (cs){
return (function __GT_t19012(cs__$1,ch__$1,mult__$1,meta19013){
return (new cljs.core.async.t19012(cs__$1,ch__$1,mult__$1,meta19013));
});})(cs))
;

}

return (new cljs.core.async.t19012(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6861__auto___19233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___19233,cs,m,dchan,dctr,done){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___19233,cs,m,dchan,dctr,done){
return (function (state_19145){
var state_val_19146 = (state_19145[(1)]);
if((state_val_19146 === (7))){
var inst_19141 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19147_19234 = state_19145__$1;
(statearr_19147_19234[(2)] = inst_19141);

(statearr_19147_19234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (20))){
var inst_19046 = (state_19145[(7)]);
var inst_19056 = cljs.core.first.call(null,inst_19046);
var inst_19057 = cljs.core.nth.call(null,inst_19056,(0),null);
var inst_19058 = cljs.core.nth.call(null,inst_19056,(1),null);
var state_19145__$1 = (function (){var statearr_19148 = state_19145;
(statearr_19148[(8)] = inst_19057);

return statearr_19148;
})();
if(cljs.core.truth_(inst_19058)){
var statearr_19149_19235 = state_19145__$1;
(statearr_19149_19235[(1)] = (22));

} else {
var statearr_19150_19236 = state_19145__$1;
(statearr_19150_19236[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (27))){
var inst_19093 = (state_19145[(9)]);
var inst_19017 = (state_19145[(10)]);
var inst_19086 = (state_19145[(11)]);
var inst_19088 = (state_19145[(12)]);
var inst_19093__$1 = cljs.core._nth.call(null,inst_19086,inst_19088);
var inst_19094 = cljs.core.async.put_BANG_.call(null,inst_19093__$1,inst_19017,done);
var state_19145__$1 = (function (){var statearr_19151 = state_19145;
(statearr_19151[(9)] = inst_19093__$1);

return statearr_19151;
})();
if(cljs.core.truth_(inst_19094)){
var statearr_19152_19237 = state_19145__$1;
(statearr_19152_19237[(1)] = (30));

} else {
var statearr_19153_19238 = state_19145__$1;
(statearr_19153_19238[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (1))){
var state_19145__$1 = state_19145;
var statearr_19154_19239 = state_19145__$1;
(statearr_19154_19239[(2)] = null);

(statearr_19154_19239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (24))){
var inst_19046 = (state_19145[(7)]);
var inst_19063 = (state_19145[(2)]);
var inst_19064 = cljs.core.next.call(null,inst_19046);
var inst_19026 = inst_19064;
var inst_19027 = null;
var inst_19028 = (0);
var inst_19029 = (0);
var state_19145__$1 = (function (){var statearr_19155 = state_19145;
(statearr_19155[(13)] = inst_19029);

(statearr_19155[(14)] = inst_19028);

(statearr_19155[(15)] = inst_19063);

(statearr_19155[(16)] = inst_19027);

(statearr_19155[(17)] = inst_19026);

return statearr_19155;
})();
var statearr_19156_19240 = state_19145__$1;
(statearr_19156_19240[(2)] = null);

(statearr_19156_19240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (39))){
var state_19145__$1 = state_19145;
var statearr_19160_19241 = state_19145__$1;
(statearr_19160_19241[(2)] = null);

(statearr_19160_19241[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (4))){
var inst_19017 = (state_19145[(10)]);
var inst_19017__$1 = (state_19145[(2)]);
var inst_19018 = (inst_19017__$1 == null);
var state_19145__$1 = (function (){var statearr_19161 = state_19145;
(statearr_19161[(10)] = inst_19017__$1);

return statearr_19161;
})();
if(cljs.core.truth_(inst_19018)){
var statearr_19162_19242 = state_19145__$1;
(statearr_19162_19242[(1)] = (5));

} else {
var statearr_19163_19243 = state_19145__$1;
(statearr_19163_19243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (15))){
var inst_19029 = (state_19145[(13)]);
var inst_19028 = (state_19145[(14)]);
var inst_19027 = (state_19145[(16)]);
var inst_19026 = (state_19145[(17)]);
var inst_19042 = (state_19145[(2)]);
var inst_19043 = (inst_19029 + (1));
var tmp19157 = inst_19028;
var tmp19158 = inst_19027;
var tmp19159 = inst_19026;
var inst_19026__$1 = tmp19159;
var inst_19027__$1 = tmp19158;
var inst_19028__$1 = tmp19157;
var inst_19029__$1 = inst_19043;
var state_19145__$1 = (function (){var statearr_19164 = state_19145;
(statearr_19164[(13)] = inst_19029__$1);

(statearr_19164[(14)] = inst_19028__$1);

(statearr_19164[(18)] = inst_19042);

(statearr_19164[(16)] = inst_19027__$1);

(statearr_19164[(17)] = inst_19026__$1);

return statearr_19164;
})();
var statearr_19165_19244 = state_19145__$1;
(statearr_19165_19244[(2)] = null);

(statearr_19165_19244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (21))){
var inst_19067 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19169_19245 = state_19145__$1;
(statearr_19169_19245[(2)] = inst_19067);

(statearr_19169_19245[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (31))){
var inst_19093 = (state_19145[(9)]);
var inst_19097 = done.call(null,null);
var inst_19098 = cljs.core.async.untap_STAR_.call(null,m,inst_19093);
var state_19145__$1 = (function (){var statearr_19170 = state_19145;
(statearr_19170[(19)] = inst_19097);

return statearr_19170;
})();
var statearr_19171_19246 = state_19145__$1;
(statearr_19171_19246[(2)] = inst_19098);

(statearr_19171_19246[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (32))){
var inst_19087 = (state_19145[(20)]);
var inst_19086 = (state_19145[(11)]);
var inst_19088 = (state_19145[(12)]);
var inst_19085 = (state_19145[(21)]);
var inst_19100 = (state_19145[(2)]);
var inst_19101 = (inst_19088 + (1));
var tmp19166 = inst_19087;
var tmp19167 = inst_19086;
var tmp19168 = inst_19085;
var inst_19085__$1 = tmp19168;
var inst_19086__$1 = tmp19167;
var inst_19087__$1 = tmp19166;
var inst_19088__$1 = inst_19101;
var state_19145__$1 = (function (){var statearr_19172 = state_19145;
(statearr_19172[(22)] = inst_19100);

(statearr_19172[(20)] = inst_19087__$1);

(statearr_19172[(11)] = inst_19086__$1);

(statearr_19172[(12)] = inst_19088__$1);

(statearr_19172[(21)] = inst_19085__$1);

return statearr_19172;
})();
var statearr_19173_19247 = state_19145__$1;
(statearr_19173_19247[(2)] = null);

(statearr_19173_19247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (40))){
var inst_19113 = (state_19145[(23)]);
var inst_19117 = done.call(null,null);
var inst_19118 = cljs.core.async.untap_STAR_.call(null,m,inst_19113);
var state_19145__$1 = (function (){var statearr_19174 = state_19145;
(statearr_19174[(24)] = inst_19117);

return statearr_19174;
})();
var statearr_19175_19248 = state_19145__$1;
(statearr_19175_19248[(2)] = inst_19118);

(statearr_19175_19248[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (33))){
var inst_19104 = (state_19145[(25)]);
var inst_19106 = cljs.core.chunked_seq_QMARK_.call(null,inst_19104);
var state_19145__$1 = state_19145;
if(inst_19106){
var statearr_19176_19249 = state_19145__$1;
(statearr_19176_19249[(1)] = (36));

} else {
var statearr_19177_19250 = state_19145__$1;
(statearr_19177_19250[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (13))){
var inst_19036 = (state_19145[(26)]);
var inst_19039 = cljs.core.async.close_BANG_.call(null,inst_19036);
var state_19145__$1 = state_19145;
var statearr_19178_19251 = state_19145__$1;
(statearr_19178_19251[(2)] = inst_19039);

(statearr_19178_19251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (22))){
var inst_19057 = (state_19145[(8)]);
var inst_19060 = cljs.core.async.close_BANG_.call(null,inst_19057);
var state_19145__$1 = state_19145;
var statearr_19179_19252 = state_19145__$1;
(statearr_19179_19252[(2)] = inst_19060);

(statearr_19179_19252[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (36))){
var inst_19104 = (state_19145[(25)]);
var inst_19108 = cljs.core.chunk_first.call(null,inst_19104);
var inst_19109 = cljs.core.chunk_rest.call(null,inst_19104);
var inst_19110 = cljs.core.count.call(null,inst_19108);
var inst_19085 = inst_19109;
var inst_19086 = inst_19108;
var inst_19087 = inst_19110;
var inst_19088 = (0);
var state_19145__$1 = (function (){var statearr_19180 = state_19145;
(statearr_19180[(20)] = inst_19087);

(statearr_19180[(11)] = inst_19086);

(statearr_19180[(12)] = inst_19088);

(statearr_19180[(21)] = inst_19085);

return statearr_19180;
})();
var statearr_19181_19253 = state_19145__$1;
(statearr_19181_19253[(2)] = null);

(statearr_19181_19253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (41))){
var inst_19104 = (state_19145[(25)]);
var inst_19120 = (state_19145[(2)]);
var inst_19121 = cljs.core.next.call(null,inst_19104);
var inst_19085 = inst_19121;
var inst_19086 = null;
var inst_19087 = (0);
var inst_19088 = (0);
var state_19145__$1 = (function (){var statearr_19182 = state_19145;
(statearr_19182[(27)] = inst_19120);

(statearr_19182[(20)] = inst_19087);

(statearr_19182[(11)] = inst_19086);

(statearr_19182[(12)] = inst_19088);

(statearr_19182[(21)] = inst_19085);

return statearr_19182;
})();
var statearr_19183_19254 = state_19145__$1;
(statearr_19183_19254[(2)] = null);

(statearr_19183_19254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (43))){
var state_19145__$1 = state_19145;
var statearr_19184_19255 = state_19145__$1;
(statearr_19184_19255[(2)] = null);

(statearr_19184_19255[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (29))){
var inst_19129 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19185_19256 = state_19145__$1;
(statearr_19185_19256[(2)] = inst_19129);

(statearr_19185_19256[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (44))){
var inst_19138 = (state_19145[(2)]);
var state_19145__$1 = (function (){var statearr_19186 = state_19145;
(statearr_19186[(28)] = inst_19138);

return statearr_19186;
})();
var statearr_19187_19257 = state_19145__$1;
(statearr_19187_19257[(2)] = null);

(statearr_19187_19257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (6))){
var inst_19077 = (state_19145[(29)]);
var inst_19076 = cljs.core.deref.call(null,cs);
var inst_19077__$1 = cljs.core.keys.call(null,inst_19076);
var inst_19078 = cljs.core.count.call(null,inst_19077__$1);
var inst_19079 = cljs.core.reset_BANG_.call(null,dctr,inst_19078);
var inst_19084 = cljs.core.seq.call(null,inst_19077__$1);
var inst_19085 = inst_19084;
var inst_19086 = null;
var inst_19087 = (0);
var inst_19088 = (0);
var state_19145__$1 = (function (){var statearr_19188 = state_19145;
(statearr_19188[(30)] = inst_19079);

(statearr_19188[(29)] = inst_19077__$1);

(statearr_19188[(20)] = inst_19087);

(statearr_19188[(11)] = inst_19086);

(statearr_19188[(12)] = inst_19088);

(statearr_19188[(21)] = inst_19085);

return statearr_19188;
})();
var statearr_19189_19258 = state_19145__$1;
(statearr_19189_19258[(2)] = null);

(statearr_19189_19258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (28))){
var inst_19104 = (state_19145[(25)]);
var inst_19085 = (state_19145[(21)]);
var inst_19104__$1 = cljs.core.seq.call(null,inst_19085);
var state_19145__$1 = (function (){var statearr_19190 = state_19145;
(statearr_19190[(25)] = inst_19104__$1);

return statearr_19190;
})();
if(inst_19104__$1){
var statearr_19191_19259 = state_19145__$1;
(statearr_19191_19259[(1)] = (33));

} else {
var statearr_19192_19260 = state_19145__$1;
(statearr_19192_19260[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (25))){
var inst_19087 = (state_19145[(20)]);
var inst_19088 = (state_19145[(12)]);
var inst_19090 = (inst_19088 < inst_19087);
var inst_19091 = inst_19090;
var state_19145__$1 = state_19145;
if(cljs.core.truth_(inst_19091)){
var statearr_19193_19261 = state_19145__$1;
(statearr_19193_19261[(1)] = (27));

} else {
var statearr_19194_19262 = state_19145__$1;
(statearr_19194_19262[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (34))){
var state_19145__$1 = state_19145;
var statearr_19195_19263 = state_19145__$1;
(statearr_19195_19263[(2)] = null);

(statearr_19195_19263[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (17))){
var state_19145__$1 = state_19145;
var statearr_19196_19264 = state_19145__$1;
(statearr_19196_19264[(2)] = null);

(statearr_19196_19264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (3))){
var inst_19143 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19145__$1,inst_19143);
} else {
if((state_val_19146 === (12))){
var inst_19072 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19197_19265 = state_19145__$1;
(statearr_19197_19265[(2)] = inst_19072);

(statearr_19197_19265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (2))){
var state_19145__$1 = state_19145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19145__$1,(4),ch);
} else {
if((state_val_19146 === (23))){
var state_19145__$1 = state_19145;
var statearr_19198_19266 = state_19145__$1;
(statearr_19198_19266[(2)] = null);

(statearr_19198_19266[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (35))){
var inst_19127 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19199_19267 = state_19145__$1;
(statearr_19199_19267[(2)] = inst_19127);

(statearr_19199_19267[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (19))){
var inst_19046 = (state_19145[(7)]);
var inst_19050 = cljs.core.chunk_first.call(null,inst_19046);
var inst_19051 = cljs.core.chunk_rest.call(null,inst_19046);
var inst_19052 = cljs.core.count.call(null,inst_19050);
var inst_19026 = inst_19051;
var inst_19027 = inst_19050;
var inst_19028 = inst_19052;
var inst_19029 = (0);
var state_19145__$1 = (function (){var statearr_19200 = state_19145;
(statearr_19200[(13)] = inst_19029);

(statearr_19200[(14)] = inst_19028);

(statearr_19200[(16)] = inst_19027);

(statearr_19200[(17)] = inst_19026);

return statearr_19200;
})();
var statearr_19201_19268 = state_19145__$1;
(statearr_19201_19268[(2)] = null);

(statearr_19201_19268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (11))){
var inst_19046 = (state_19145[(7)]);
var inst_19026 = (state_19145[(17)]);
var inst_19046__$1 = cljs.core.seq.call(null,inst_19026);
var state_19145__$1 = (function (){var statearr_19202 = state_19145;
(statearr_19202[(7)] = inst_19046__$1);

return statearr_19202;
})();
if(inst_19046__$1){
var statearr_19203_19269 = state_19145__$1;
(statearr_19203_19269[(1)] = (16));

} else {
var statearr_19204_19270 = state_19145__$1;
(statearr_19204_19270[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (9))){
var inst_19074 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19205_19271 = state_19145__$1;
(statearr_19205_19271[(2)] = inst_19074);

(statearr_19205_19271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (5))){
var inst_19024 = cljs.core.deref.call(null,cs);
var inst_19025 = cljs.core.seq.call(null,inst_19024);
var inst_19026 = inst_19025;
var inst_19027 = null;
var inst_19028 = (0);
var inst_19029 = (0);
var state_19145__$1 = (function (){var statearr_19206 = state_19145;
(statearr_19206[(13)] = inst_19029);

(statearr_19206[(14)] = inst_19028);

(statearr_19206[(16)] = inst_19027);

(statearr_19206[(17)] = inst_19026);

return statearr_19206;
})();
var statearr_19207_19272 = state_19145__$1;
(statearr_19207_19272[(2)] = null);

(statearr_19207_19272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (14))){
var state_19145__$1 = state_19145;
var statearr_19208_19273 = state_19145__$1;
(statearr_19208_19273[(2)] = null);

(statearr_19208_19273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (45))){
var inst_19135 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19209_19274 = state_19145__$1;
(statearr_19209_19274[(2)] = inst_19135);

(statearr_19209_19274[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (26))){
var inst_19077 = (state_19145[(29)]);
var inst_19131 = (state_19145[(2)]);
var inst_19132 = cljs.core.seq.call(null,inst_19077);
var state_19145__$1 = (function (){var statearr_19210 = state_19145;
(statearr_19210[(31)] = inst_19131);

return statearr_19210;
})();
if(inst_19132){
var statearr_19211_19275 = state_19145__$1;
(statearr_19211_19275[(1)] = (42));

} else {
var statearr_19212_19276 = state_19145__$1;
(statearr_19212_19276[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (16))){
var inst_19046 = (state_19145[(7)]);
var inst_19048 = cljs.core.chunked_seq_QMARK_.call(null,inst_19046);
var state_19145__$1 = state_19145;
if(inst_19048){
var statearr_19213_19277 = state_19145__$1;
(statearr_19213_19277[(1)] = (19));

} else {
var statearr_19214_19278 = state_19145__$1;
(statearr_19214_19278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (38))){
var inst_19124 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19215_19279 = state_19145__$1;
(statearr_19215_19279[(2)] = inst_19124);

(statearr_19215_19279[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (30))){
var state_19145__$1 = state_19145;
var statearr_19216_19280 = state_19145__$1;
(statearr_19216_19280[(2)] = null);

(statearr_19216_19280[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (10))){
var inst_19029 = (state_19145[(13)]);
var inst_19027 = (state_19145[(16)]);
var inst_19035 = cljs.core._nth.call(null,inst_19027,inst_19029);
var inst_19036 = cljs.core.nth.call(null,inst_19035,(0),null);
var inst_19037 = cljs.core.nth.call(null,inst_19035,(1),null);
var state_19145__$1 = (function (){var statearr_19217 = state_19145;
(statearr_19217[(26)] = inst_19036);

return statearr_19217;
})();
if(cljs.core.truth_(inst_19037)){
var statearr_19218_19281 = state_19145__$1;
(statearr_19218_19281[(1)] = (13));

} else {
var statearr_19219_19282 = state_19145__$1;
(statearr_19219_19282[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (18))){
var inst_19070 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19220_19283 = state_19145__$1;
(statearr_19220_19283[(2)] = inst_19070);

(statearr_19220_19283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (42))){
var state_19145__$1 = state_19145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19145__$1,(45),dchan);
} else {
if((state_val_19146 === (37))){
var inst_19113 = (state_19145[(23)]);
var inst_19017 = (state_19145[(10)]);
var inst_19104 = (state_19145[(25)]);
var inst_19113__$1 = cljs.core.first.call(null,inst_19104);
var inst_19114 = cljs.core.async.put_BANG_.call(null,inst_19113__$1,inst_19017,done);
var state_19145__$1 = (function (){var statearr_19221 = state_19145;
(statearr_19221[(23)] = inst_19113__$1);

return statearr_19221;
})();
if(cljs.core.truth_(inst_19114)){
var statearr_19222_19284 = state_19145__$1;
(statearr_19222_19284[(1)] = (39));

} else {
var statearr_19223_19285 = state_19145__$1;
(statearr_19223_19285[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (8))){
var inst_19029 = (state_19145[(13)]);
var inst_19028 = (state_19145[(14)]);
var inst_19031 = (inst_19029 < inst_19028);
var inst_19032 = inst_19031;
var state_19145__$1 = state_19145;
if(cljs.core.truth_(inst_19032)){
var statearr_19224_19286 = state_19145__$1;
(statearr_19224_19286[(1)] = (10));

} else {
var statearr_19225_19287 = state_19145__$1;
(statearr_19225_19287[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___19233,cs,m,dchan,dctr,done))
;
return ((function (switch__6805__auto__,c__6861__auto___19233,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_19229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19229[(0)] = state_machine__6806__auto__);

(statearr_19229[(1)] = (1));

return statearr_19229;
});
var state_machine__6806__auto____1 = (function (state_19145){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_19145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e19230){if((e19230 instanceof Object)){
var ex__6809__auto__ = e19230;
var statearr_19231_19288 = state_19145;
(statearr_19231_19288[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19289 = state_19145;
state_19145 = G__19289;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_19145){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_19145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___19233,cs,m,dchan,dctr,done))
})();
var state__6863__auto__ = (function (){var statearr_19232 = f__6862__auto__.call(null);
(statearr_19232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___19233);

return statearr_19232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___19233,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj19291 = {};
return obj19291;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3787__auto__ = m;
if(and__3787__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3787__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4443__auto__ = (((m == null))?null:m);
return (function (){var or__3799__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3787__auto__ = m;
if(and__3787__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3787__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4443__auto__ = (((m == null))?null:m);
return (function (){var or__3799__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3787__auto__ = m;
if(and__3787__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3787__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4443__auto__ = (((m == null))?null:m);
return (function (){var or__3799__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3787__auto__ = m;
if(and__3787__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3787__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4443__auto__ = (((m == null))?null:m);
return (function (){var or__3799__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3787__auto__ = m;
if(and__3787__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3787__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4443__auto__ = (((m == null))?null:m);
return (function (){var or__3799__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19292){
var map__19297 = p__19292;
var map__19297__$1 = ((cljs.core.seq_QMARK_.call(null,map__19297))?cljs.core.apply.call(null,cljs.core.hash_map,map__19297):map__19297);
var opts = map__19297__$1;
var statearr_19298_19301 = state;
(statearr_19298_19301[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__19297,map__19297__$1,opts){
return (function (val){
var statearr_19299_19302 = state;
(statearr_19299_19302[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19297,map__19297__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_19300_19303 = state;
(statearr_19300_19303[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19292 = null;
if (arguments.length > 3) {
var G__19304__i = 0, G__19304__a = new Array(arguments.length -  3);
while (G__19304__i < G__19304__a.length) {G__19304__a[G__19304__i] = arguments[G__19304__i + 3]; ++G__19304__i;}
  p__19292 = new cljs.core.IndexedSeq(G__19304__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19292);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19305){
var state = cljs.core.first(arglist__19305);
arglist__19305 = cljs.core.next(arglist__19305);
var cont_block = cljs.core.first(arglist__19305);
arglist__19305 = cljs.core.next(arglist__19305);
var ports = cljs.core.first(arglist__19305);
var p__19292 = cljs.core.rest(arglist__19305);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__19292);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t19425 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19425 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19426){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19426 = meta19426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19425.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t19425.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19425.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19425.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19425.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19425.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19425.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19427){
var self__ = this;
var _19427__$1 = this;
return self__.meta19426;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19427,meta19426__$1){
var self__ = this;
var _19427__$1 = this;
return (new cljs.core.async.t19425(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19426__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19425.cljs$lang$type = true;

cljs.core.async.t19425.cljs$lang$ctorStr = "cljs.core.async/t19425";

cljs.core.async.t19425.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19425");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t19425 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19425(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19426){
return (new cljs.core.async.t19425(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19426));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t19425(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var c__6861__auto___19544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___19544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___19544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19497){
var state_val_19498 = (state_19497[(1)]);
if((state_val_19498 === (7))){
var inst_19441 = (state_19497[(7)]);
var inst_19446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19441);
var state_19497__$1 = state_19497;
var statearr_19499_19545 = state_19497__$1;
(statearr_19499_19545[(2)] = inst_19446);

(statearr_19499_19545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (20))){
var inst_19456 = (state_19497[(8)]);
var state_19497__$1 = state_19497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19497__$1,(23),out,inst_19456);
} else {
if((state_val_19498 === (1))){
var inst_19431 = (state_19497[(9)]);
var inst_19431__$1 = calc_state.call(null);
var inst_19432 = cljs.core.seq_QMARK_.call(null,inst_19431__$1);
var state_19497__$1 = (function (){var statearr_19500 = state_19497;
(statearr_19500[(9)] = inst_19431__$1);

return statearr_19500;
})();
if(inst_19432){
var statearr_19501_19546 = state_19497__$1;
(statearr_19501_19546[(1)] = (2));

} else {
var statearr_19502_19547 = state_19497__$1;
(statearr_19502_19547[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (24))){
var inst_19449 = (state_19497[(10)]);
var inst_19441 = inst_19449;
var state_19497__$1 = (function (){var statearr_19503 = state_19497;
(statearr_19503[(7)] = inst_19441);

return statearr_19503;
})();
var statearr_19504_19548 = state_19497__$1;
(statearr_19504_19548[(2)] = null);

(statearr_19504_19548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (4))){
var inst_19431 = (state_19497[(9)]);
var inst_19437 = (state_19497[(2)]);
var inst_19438 = cljs.core.get.call(null,inst_19437,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19439 = cljs.core.get.call(null,inst_19437,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19440 = cljs.core.get.call(null,inst_19437,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19441 = inst_19431;
var state_19497__$1 = (function (){var statearr_19505 = state_19497;
(statearr_19505[(11)] = inst_19440);

(statearr_19505[(12)] = inst_19438);

(statearr_19505[(7)] = inst_19441);

(statearr_19505[(13)] = inst_19439);

return statearr_19505;
})();
var statearr_19506_19549 = state_19497__$1;
(statearr_19506_19549[(2)] = null);

(statearr_19506_19549[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (15))){
var state_19497__$1 = state_19497;
var statearr_19507_19550 = state_19497__$1;
(statearr_19507_19550[(2)] = null);

(statearr_19507_19550[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (21))){
var inst_19449 = (state_19497[(10)]);
var inst_19441 = inst_19449;
var state_19497__$1 = (function (){var statearr_19508 = state_19497;
(statearr_19508[(7)] = inst_19441);

return statearr_19508;
})();
var statearr_19509_19551 = state_19497__$1;
(statearr_19509_19551[(2)] = null);

(statearr_19509_19551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (13))){
var inst_19493 = (state_19497[(2)]);
var state_19497__$1 = state_19497;
var statearr_19510_19552 = state_19497__$1;
(statearr_19510_19552[(2)] = inst_19493);

(statearr_19510_19552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (22))){
var inst_19491 = (state_19497[(2)]);
var state_19497__$1 = state_19497;
var statearr_19511_19553 = state_19497__$1;
(statearr_19511_19553[(2)] = inst_19491);

(statearr_19511_19553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (6))){
var inst_19495 = (state_19497[(2)]);
var state_19497__$1 = state_19497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19497__$1,inst_19495);
} else {
if((state_val_19498 === (25))){
var state_19497__$1 = state_19497;
var statearr_19512_19554 = state_19497__$1;
(statearr_19512_19554[(2)] = null);

(statearr_19512_19554[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (17))){
var inst_19471 = (state_19497[(14)]);
var state_19497__$1 = state_19497;
var statearr_19513_19555 = state_19497__$1;
(statearr_19513_19555[(2)] = inst_19471);

(statearr_19513_19555[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (3))){
var inst_19431 = (state_19497[(9)]);
var state_19497__$1 = state_19497;
var statearr_19514_19556 = state_19497__$1;
(statearr_19514_19556[(2)] = inst_19431);

(statearr_19514_19556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (12))){
var inst_19452 = (state_19497[(15)]);
var inst_19457 = (state_19497[(16)]);
var inst_19471 = (state_19497[(14)]);
var inst_19471__$1 = inst_19452.call(null,inst_19457);
var state_19497__$1 = (function (){var statearr_19515 = state_19497;
(statearr_19515[(14)] = inst_19471__$1);

return statearr_19515;
})();
if(cljs.core.truth_(inst_19471__$1)){
var statearr_19516_19557 = state_19497__$1;
(statearr_19516_19557[(1)] = (17));

} else {
var statearr_19517_19558 = state_19497__$1;
(statearr_19517_19558[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (2))){
var inst_19431 = (state_19497[(9)]);
var inst_19434 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19431);
var state_19497__$1 = state_19497;
var statearr_19518_19559 = state_19497__$1;
(statearr_19518_19559[(2)] = inst_19434);

(statearr_19518_19559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (23))){
var inst_19482 = (state_19497[(2)]);
var state_19497__$1 = state_19497;
if(cljs.core.truth_(inst_19482)){
var statearr_19519_19560 = state_19497__$1;
(statearr_19519_19560[(1)] = (24));

} else {
var statearr_19520_19561 = state_19497__$1;
(statearr_19520_19561[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (19))){
var inst_19479 = (state_19497[(2)]);
var state_19497__$1 = state_19497;
if(cljs.core.truth_(inst_19479)){
var statearr_19521_19562 = state_19497__$1;
(statearr_19521_19562[(1)] = (20));

} else {
var statearr_19522_19563 = state_19497__$1;
(statearr_19522_19563[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (11))){
var inst_19456 = (state_19497[(8)]);
var inst_19462 = (inst_19456 == null);
var state_19497__$1 = state_19497;
if(cljs.core.truth_(inst_19462)){
var statearr_19523_19564 = state_19497__$1;
(statearr_19523_19564[(1)] = (14));

} else {
var statearr_19524_19565 = state_19497__$1;
(statearr_19524_19565[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (9))){
var inst_19449 = (state_19497[(10)]);
var inst_19449__$1 = (state_19497[(2)]);
var inst_19450 = cljs.core.get.call(null,inst_19449__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19451 = cljs.core.get.call(null,inst_19449__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19452 = cljs.core.get.call(null,inst_19449__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_19497__$1 = (function (){var statearr_19525 = state_19497;
(statearr_19525[(10)] = inst_19449__$1);

(statearr_19525[(15)] = inst_19452);

(statearr_19525[(17)] = inst_19451);

return statearr_19525;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19497__$1,(10),inst_19450);
} else {
if((state_val_19498 === (5))){
var inst_19441 = (state_19497[(7)]);
var inst_19444 = cljs.core.seq_QMARK_.call(null,inst_19441);
var state_19497__$1 = state_19497;
if(inst_19444){
var statearr_19526_19566 = state_19497__$1;
(statearr_19526_19566[(1)] = (7));

} else {
var statearr_19527_19567 = state_19497__$1;
(statearr_19527_19567[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (14))){
var inst_19457 = (state_19497[(16)]);
var inst_19464 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19457);
var state_19497__$1 = state_19497;
var statearr_19528_19568 = state_19497__$1;
(statearr_19528_19568[(2)] = inst_19464);

(statearr_19528_19568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (26))){
var inst_19487 = (state_19497[(2)]);
var state_19497__$1 = state_19497;
var statearr_19529_19569 = state_19497__$1;
(statearr_19529_19569[(2)] = inst_19487);

(statearr_19529_19569[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (16))){
var inst_19467 = (state_19497[(2)]);
var inst_19468 = calc_state.call(null);
var inst_19441 = inst_19468;
var state_19497__$1 = (function (){var statearr_19530 = state_19497;
(statearr_19530[(18)] = inst_19467);

(statearr_19530[(7)] = inst_19441);

return statearr_19530;
})();
var statearr_19531_19570 = state_19497__$1;
(statearr_19531_19570[(2)] = null);

(statearr_19531_19570[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (10))){
var inst_19456 = (state_19497[(8)]);
var inst_19457 = (state_19497[(16)]);
var inst_19455 = (state_19497[(2)]);
var inst_19456__$1 = cljs.core.nth.call(null,inst_19455,(0),null);
var inst_19457__$1 = cljs.core.nth.call(null,inst_19455,(1),null);
var inst_19458 = (inst_19456__$1 == null);
var inst_19459 = cljs.core._EQ_.call(null,inst_19457__$1,change);
var inst_19460 = (inst_19458) || (inst_19459);
var state_19497__$1 = (function (){var statearr_19532 = state_19497;
(statearr_19532[(8)] = inst_19456__$1);

(statearr_19532[(16)] = inst_19457__$1);

return statearr_19532;
})();
if(cljs.core.truth_(inst_19460)){
var statearr_19533_19571 = state_19497__$1;
(statearr_19533_19571[(1)] = (11));

} else {
var statearr_19534_19572 = state_19497__$1;
(statearr_19534_19572[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (18))){
var inst_19452 = (state_19497[(15)]);
var inst_19451 = (state_19497[(17)]);
var inst_19457 = (state_19497[(16)]);
var inst_19474 = cljs.core.empty_QMARK_.call(null,inst_19452);
var inst_19475 = inst_19451.call(null,inst_19457);
var inst_19476 = cljs.core.not.call(null,inst_19475);
var inst_19477 = (inst_19474) && (inst_19476);
var state_19497__$1 = state_19497;
var statearr_19535_19573 = state_19497__$1;
(statearr_19535_19573[(2)] = inst_19477);

(statearr_19535_19573[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (8))){
var inst_19441 = (state_19497[(7)]);
var state_19497__$1 = state_19497;
var statearr_19536_19574 = state_19497__$1;
(statearr_19536_19574[(2)] = inst_19441);

(statearr_19536_19574[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___19544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6805__auto__,c__6861__auto___19544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_19540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19540[(0)] = state_machine__6806__auto__);

(statearr_19540[(1)] = (1));

return statearr_19540;
});
var state_machine__6806__auto____1 = (function (state_19497){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_19497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e19541){if((e19541 instanceof Object)){
var ex__6809__auto__ = e19541;
var statearr_19542_19575 = state_19497;
(statearr_19542_19575[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19576 = state_19497;
state_19497 = G__19576;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_19497){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_19497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___19544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6863__auto__ = (function (){var statearr_19543 = f__6862__auto__.call(null);
(statearr_19543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___19544);

return statearr_19543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___19544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj19578 = {};
return obj19578;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3787__auto__ = p;
if(and__3787__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3787__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4443__auto__ = (((p == null))?null:p);
return (function (){var or__3799__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3787__auto__ = p;
if(and__3787__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3787__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4443__auto__ = (((p == null))?null:p);
return (function (){var or__3799__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3787__auto__ = p;
if(and__3787__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3787__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4443__auto__ = (((p == null))?null:p);
return (function (){var or__3799__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3787__auto__ = p;
if(and__3787__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3787__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4443__auto__ = (((p == null))?null:p);
return (function (){var or__3799__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4443__auto__)]);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3799__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3799__auto__,mults){
return (function (p1__19579_SHARP_){
if(cljs.core.truth_(p1__19579_SHARP_.call(null,topic))){
return p1__19579_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19579_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3799__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19702 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19702 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19703){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19703 = meta19703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19702.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19702.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19702.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t19702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t19702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19702.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19704){
var self__ = this;
var _19704__$1 = this;
return self__.meta19703;
});})(mults,ensure_mult))
;

cljs.core.async.t19702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19704,meta19703__$1){
var self__ = this;
var _19704__$1 = this;
return (new cljs.core.async.t19702(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19703__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19702.cljs$lang$type = true;

cljs.core.async.t19702.cljs$lang$ctorStr = "cljs.core.async/t19702";

cljs.core.async.t19702.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19702");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19702 = ((function (mults,ensure_mult){
return (function __GT_t19702(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19703){
return (new cljs.core.async.t19702(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19703));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19702(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var c__6861__auto___19824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___19824,mults,ensure_mult,p){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___19824,mults,ensure_mult,p){
return (function (state_19776){
var state_val_19777 = (state_19776[(1)]);
if((state_val_19777 === (7))){
var inst_19772 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
var statearr_19778_19825 = state_19776__$1;
(statearr_19778_19825[(2)] = inst_19772);

(statearr_19778_19825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (20))){
var state_19776__$1 = state_19776;
var statearr_19779_19826 = state_19776__$1;
(statearr_19779_19826[(2)] = null);

(statearr_19779_19826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (1))){
var state_19776__$1 = state_19776;
var statearr_19780_19827 = state_19776__$1;
(statearr_19780_19827[(2)] = null);

(statearr_19780_19827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (24))){
var inst_19755 = (state_19776[(7)]);
var inst_19764 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19755);
var state_19776__$1 = state_19776;
var statearr_19781_19828 = state_19776__$1;
(statearr_19781_19828[(2)] = inst_19764);

(statearr_19781_19828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (4))){
var inst_19707 = (state_19776[(8)]);
var inst_19707__$1 = (state_19776[(2)]);
var inst_19708 = (inst_19707__$1 == null);
var state_19776__$1 = (function (){var statearr_19782 = state_19776;
(statearr_19782[(8)] = inst_19707__$1);

return statearr_19782;
})();
if(cljs.core.truth_(inst_19708)){
var statearr_19783_19829 = state_19776__$1;
(statearr_19783_19829[(1)] = (5));

} else {
var statearr_19784_19830 = state_19776__$1;
(statearr_19784_19830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (15))){
var inst_19749 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
var statearr_19785_19831 = state_19776__$1;
(statearr_19785_19831[(2)] = inst_19749);

(statearr_19785_19831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (21))){
var inst_19769 = (state_19776[(2)]);
var state_19776__$1 = (function (){var statearr_19786 = state_19776;
(statearr_19786[(9)] = inst_19769);

return statearr_19786;
})();
var statearr_19787_19832 = state_19776__$1;
(statearr_19787_19832[(2)] = null);

(statearr_19787_19832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (13))){
var inst_19731 = (state_19776[(10)]);
var inst_19733 = cljs.core.chunked_seq_QMARK_.call(null,inst_19731);
var state_19776__$1 = state_19776;
if(inst_19733){
var statearr_19788_19833 = state_19776__$1;
(statearr_19788_19833[(1)] = (16));

} else {
var statearr_19789_19834 = state_19776__$1;
(statearr_19789_19834[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (22))){
var inst_19761 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
if(cljs.core.truth_(inst_19761)){
var statearr_19790_19835 = state_19776__$1;
(statearr_19790_19835[(1)] = (23));

} else {
var statearr_19791_19836 = state_19776__$1;
(statearr_19791_19836[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (6))){
var inst_19755 = (state_19776[(7)]);
var inst_19757 = (state_19776[(11)]);
var inst_19707 = (state_19776[(8)]);
var inst_19755__$1 = topic_fn.call(null,inst_19707);
var inst_19756 = cljs.core.deref.call(null,mults);
var inst_19757__$1 = cljs.core.get.call(null,inst_19756,inst_19755__$1);
var state_19776__$1 = (function (){var statearr_19792 = state_19776;
(statearr_19792[(7)] = inst_19755__$1);

(statearr_19792[(11)] = inst_19757__$1);

return statearr_19792;
})();
if(cljs.core.truth_(inst_19757__$1)){
var statearr_19793_19837 = state_19776__$1;
(statearr_19793_19837[(1)] = (19));

} else {
var statearr_19794_19838 = state_19776__$1;
(statearr_19794_19838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (25))){
var inst_19766 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
var statearr_19795_19839 = state_19776__$1;
(statearr_19795_19839[(2)] = inst_19766);

(statearr_19795_19839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (17))){
var inst_19731 = (state_19776[(10)]);
var inst_19740 = cljs.core.first.call(null,inst_19731);
var inst_19741 = cljs.core.async.muxch_STAR_.call(null,inst_19740);
var inst_19742 = cljs.core.async.close_BANG_.call(null,inst_19741);
var inst_19743 = cljs.core.next.call(null,inst_19731);
var inst_19717 = inst_19743;
var inst_19718 = null;
var inst_19719 = (0);
var inst_19720 = (0);
var state_19776__$1 = (function (){var statearr_19796 = state_19776;
(statearr_19796[(12)] = inst_19718);

(statearr_19796[(13)] = inst_19719);

(statearr_19796[(14)] = inst_19720);

(statearr_19796[(15)] = inst_19717);

(statearr_19796[(16)] = inst_19742);

return statearr_19796;
})();
var statearr_19797_19840 = state_19776__$1;
(statearr_19797_19840[(2)] = null);

(statearr_19797_19840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (3))){
var inst_19774 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19776__$1,inst_19774);
} else {
if((state_val_19777 === (12))){
var inst_19751 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
var statearr_19798_19841 = state_19776__$1;
(statearr_19798_19841[(2)] = inst_19751);

(statearr_19798_19841[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (2))){
var state_19776__$1 = state_19776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19776__$1,(4),ch);
} else {
if((state_val_19777 === (23))){
var state_19776__$1 = state_19776;
var statearr_19799_19842 = state_19776__$1;
(statearr_19799_19842[(2)] = null);

(statearr_19799_19842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (19))){
var inst_19757 = (state_19776[(11)]);
var inst_19707 = (state_19776[(8)]);
var inst_19759 = cljs.core.async.muxch_STAR_.call(null,inst_19757);
var state_19776__$1 = state_19776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19776__$1,(22),inst_19759,inst_19707);
} else {
if((state_val_19777 === (11))){
var inst_19731 = (state_19776[(10)]);
var inst_19717 = (state_19776[(15)]);
var inst_19731__$1 = cljs.core.seq.call(null,inst_19717);
var state_19776__$1 = (function (){var statearr_19800 = state_19776;
(statearr_19800[(10)] = inst_19731__$1);

return statearr_19800;
})();
if(inst_19731__$1){
var statearr_19801_19843 = state_19776__$1;
(statearr_19801_19843[(1)] = (13));

} else {
var statearr_19802_19844 = state_19776__$1;
(statearr_19802_19844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (9))){
var inst_19753 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
var statearr_19803_19845 = state_19776__$1;
(statearr_19803_19845[(2)] = inst_19753);

(statearr_19803_19845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (5))){
var inst_19714 = cljs.core.deref.call(null,mults);
var inst_19715 = cljs.core.vals.call(null,inst_19714);
var inst_19716 = cljs.core.seq.call(null,inst_19715);
var inst_19717 = inst_19716;
var inst_19718 = null;
var inst_19719 = (0);
var inst_19720 = (0);
var state_19776__$1 = (function (){var statearr_19804 = state_19776;
(statearr_19804[(12)] = inst_19718);

(statearr_19804[(13)] = inst_19719);

(statearr_19804[(14)] = inst_19720);

(statearr_19804[(15)] = inst_19717);

return statearr_19804;
})();
var statearr_19805_19846 = state_19776__$1;
(statearr_19805_19846[(2)] = null);

(statearr_19805_19846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (14))){
var state_19776__$1 = state_19776;
var statearr_19809_19847 = state_19776__$1;
(statearr_19809_19847[(2)] = null);

(statearr_19809_19847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (16))){
var inst_19731 = (state_19776[(10)]);
var inst_19735 = cljs.core.chunk_first.call(null,inst_19731);
var inst_19736 = cljs.core.chunk_rest.call(null,inst_19731);
var inst_19737 = cljs.core.count.call(null,inst_19735);
var inst_19717 = inst_19736;
var inst_19718 = inst_19735;
var inst_19719 = inst_19737;
var inst_19720 = (0);
var state_19776__$1 = (function (){var statearr_19810 = state_19776;
(statearr_19810[(12)] = inst_19718);

(statearr_19810[(13)] = inst_19719);

(statearr_19810[(14)] = inst_19720);

(statearr_19810[(15)] = inst_19717);

return statearr_19810;
})();
var statearr_19811_19848 = state_19776__$1;
(statearr_19811_19848[(2)] = null);

(statearr_19811_19848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (10))){
var inst_19718 = (state_19776[(12)]);
var inst_19719 = (state_19776[(13)]);
var inst_19720 = (state_19776[(14)]);
var inst_19717 = (state_19776[(15)]);
var inst_19725 = cljs.core._nth.call(null,inst_19718,inst_19720);
var inst_19726 = cljs.core.async.muxch_STAR_.call(null,inst_19725);
var inst_19727 = cljs.core.async.close_BANG_.call(null,inst_19726);
var inst_19728 = (inst_19720 + (1));
var tmp19806 = inst_19718;
var tmp19807 = inst_19719;
var tmp19808 = inst_19717;
var inst_19717__$1 = tmp19808;
var inst_19718__$1 = tmp19806;
var inst_19719__$1 = tmp19807;
var inst_19720__$1 = inst_19728;
var state_19776__$1 = (function (){var statearr_19812 = state_19776;
(statearr_19812[(12)] = inst_19718__$1);

(statearr_19812[(17)] = inst_19727);

(statearr_19812[(13)] = inst_19719__$1);

(statearr_19812[(14)] = inst_19720__$1);

(statearr_19812[(15)] = inst_19717__$1);

return statearr_19812;
})();
var statearr_19813_19849 = state_19776__$1;
(statearr_19813_19849[(2)] = null);

(statearr_19813_19849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (18))){
var inst_19746 = (state_19776[(2)]);
var state_19776__$1 = state_19776;
var statearr_19814_19850 = state_19776__$1;
(statearr_19814_19850[(2)] = inst_19746);

(statearr_19814_19850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19777 === (8))){
var inst_19719 = (state_19776[(13)]);
var inst_19720 = (state_19776[(14)]);
var inst_19722 = (inst_19720 < inst_19719);
var inst_19723 = inst_19722;
var state_19776__$1 = state_19776;
if(cljs.core.truth_(inst_19723)){
var statearr_19815_19851 = state_19776__$1;
(statearr_19815_19851[(1)] = (10));

} else {
var statearr_19816_19852 = state_19776__$1;
(statearr_19816_19852[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___19824,mults,ensure_mult,p))
;
return ((function (switch__6805__auto__,c__6861__auto___19824,mults,ensure_mult,p){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_19820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19820[(0)] = state_machine__6806__auto__);

(statearr_19820[(1)] = (1));

return statearr_19820;
});
var state_machine__6806__auto____1 = (function (state_19776){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_19776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e19821){if((e19821 instanceof Object)){
var ex__6809__auto__ = e19821;
var statearr_19822_19853 = state_19776;
(statearr_19822_19853[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19854 = state_19776;
state_19776 = G__19854;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_19776){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_19776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___19824,mults,ensure_mult,p))
})();
var state__6863__auto__ = (function (){var statearr_19823 = f__6862__auto__.call(null);
(statearr_19823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___19824);

return statearr_19823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___19824,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6861__auto___19991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___19991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___19991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19961){
var state_val_19962 = (state_19961[(1)]);
if((state_val_19962 === (7))){
var state_19961__$1 = state_19961;
var statearr_19963_19992 = state_19961__$1;
(statearr_19963_19992[(2)] = null);

(statearr_19963_19992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19962 === (1))){
var state_19961__$1 = state_19961;
var statearr_19964_19993 = state_19961__$1;
(statearr_19964_19993[(2)] = null);

(statearr_19964_19993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19962 === (4))){
var inst_19925 = (state_19961[(7)]);
var inst_19927 = (inst_19925 < cnt);
var state_19961__$1 = state_19961;
if(cljs.core.truth_(inst_19927)){
var statearr_19965_19994 = state_19961__$1;
(statearr_19965_19994[(1)] = (6));

} else {
var statearr_19966_19995 = state_19961__$1;
(statearr_19966_19995[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19962 === (15))){
var inst_19957 = (state_19961[(2)]);
var state_19961__$1 = state_19961;
var statearr_19967_19996 = state_19961__$1;
(statearr_19967_19996[(2)] = inst_19957);

(statearr_19967_19996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19962 === (13))){
var inst_19950 = cljs.core.async.close_BANG_.call(null,out);
var state_19961__$1 = state_19961;
var statearr_19968_19997 = state_19961__$1;
(statearr_19968_19997[(2)] = inst_19950);

(statearr_19968_19997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19962 === (6))){
var state_19961__$1 = state_19961;
var statearr_19969_19998 = state_19961__$1;
(statearr_19969_19998[(2)] = null);

(statearr_19969_19998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19962 === (3))){
var inst_19959 = (state_19961[(2)]);
var state_19961__$1 = state_19961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19961__$1,inst_19959);
} else {
if((state_val_19962 === (12))){
var inst_19947 = (state_19961[(8)]);
var inst_19947__$1 = (state_19961[(2)]);
var inst_19948 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19947__$1);
var state_19961__$1 = (function (){var statearr_19970 = state_19961;
(statearr_19970[(8)] = inst_19947__$1);

return statearr_19970;
})();
if(cljs.core.truth_(inst_19948)){
var statearr_19971_19999 = state_19961__$1;
(statearr_19971_19999[(1)] = (13));

} else {
var statearr_19972_20000 = state_19961__$1;
(statearr_19972_20000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19962 === (2))){
var inst_19924 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19925 = (0);
var state_19961__$1 = (function (){var statearr_19973 = state_19961;
(statearr_19973[(9)] = inst_19924);

(statearr_19973[(7)] = inst_19925);

return statearr_19973;
})();
var statearr_19974_20001 = state_19961__$1;
(statearr_19974_20001[(2)] = null);

(statearr_19974_20001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19962 === (11))){
var inst_19925 = (state_19961[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19961,(10),Object,null,(9));
var inst_19934 = chs__$1.call(null,inst_19925);
var inst_19935 = done.call(null,inst_19925);
var inst_19936 = cljs.core.async.take_BANG_.call(null,inst_19934,inst_19935);
var state_19961__$1 = state_19961;
var statearr_19975_20002 = state_19961__$1;
(statearr_19975_20002[(2)] = inst_19936);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19961__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19962 === (9))){
var inst_19925 = (state_19961[(7)]);
var inst_19938 = (state_19961[(2)]);
var inst_19939 = (inst_19925 + (1));
var inst_19925__$1 = inst_19939;
var state_19961__$1 = (function (){var statearr_19976 = state_19961;
(statearr_19976[(10)] = inst_19938);

(statearr_19976[(7)] = inst_19925__$1);

return statearr_19976;
})();
var statearr_19977_20003 = state_19961__$1;
(statearr_19977_20003[(2)] = null);

(statearr_19977_20003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19962 === (5))){
var inst_19945 = (state_19961[(2)]);
var state_19961__$1 = (function (){var statearr_19978 = state_19961;
(statearr_19978[(11)] = inst_19945);

return statearr_19978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19961__$1,(12),dchan);
} else {
if((state_val_19962 === (14))){
var inst_19947 = (state_19961[(8)]);
var inst_19952 = cljs.core.apply.call(null,f,inst_19947);
var state_19961__$1 = state_19961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19961__$1,(16),out,inst_19952);
} else {
if((state_val_19962 === (16))){
var inst_19954 = (state_19961[(2)]);
var state_19961__$1 = (function (){var statearr_19979 = state_19961;
(statearr_19979[(12)] = inst_19954);

return statearr_19979;
})();
var statearr_19980_20004 = state_19961__$1;
(statearr_19980_20004[(2)] = null);

(statearr_19980_20004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19962 === (10))){
var inst_19929 = (state_19961[(2)]);
var inst_19930 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19961__$1 = (function (){var statearr_19981 = state_19961;
(statearr_19981[(13)] = inst_19929);

return statearr_19981;
})();
var statearr_19982_20005 = state_19961__$1;
(statearr_19982_20005[(2)] = inst_19930);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19961__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19962 === (8))){
var inst_19943 = (state_19961[(2)]);
var state_19961__$1 = state_19961;
var statearr_19983_20006 = state_19961__$1;
(statearr_19983_20006[(2)] = inst_19943);

(statearr_19983_20006[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___19991,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6805__auto__,c__6861__auto___19991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_19987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19987[(0)] = state_machine__6806__auto__);

(statearr_19987[(1)] = (1));

return statearr_19987;
});
var state_machine__6806__auto____1 = (function (state_19961){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_19961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e19988){if((e19988 instanceof Object)){
var ex__6809__auto__ = e19988;
var statearr_19989_20007 = state_19961;
(statearr_19989_20007[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20008 = state_19961;
state_19961 = G__20008;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_19961){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_19961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___19991,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6863__auto__ = (function (){var statearr_19990 = f__6862__auto__.call(null);
(statearr_19990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___19991);

return statearr_19990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___19991,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6861__auto___20116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___20116,out){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___20116,out){
return (function (state_20092){
var state_val_20093 = (state_20092[(1)]);
if((state_val_20093 === (7))){
var inst_20072 = (state_20092[(7)]);
var inst_20071 = (state_20092[(8)]);
var inst_20071__$1 = (state_20092[(2)]);
var inst_20072__$1 = cljs.core.nth.call(null,inst_20071__$1,(0),null);
var inst_20073 = cljs.core.nth.call(null,inst_20071__$1,(1),null);
var inst_20074 = (inst_20072__$1 == null);
var state_20092__$1 = (function (){var statearr_20094 = state_20092;
(statearr_20094[(7)] = inst_20072__$1);

(statearr_20094[(9)] = inst_20073);

(statearr_20094[(8)] = inst_20071__$1);

return statearr_20094;
})();
if(cljs.core.truth_(inst_20074)){
var statearr_20095_20117 = state_20092__$1;
(statearr_20095_20117[(1)] = (8));

} else {
var statearr_20096_20118 = state_20092__$1;
(statearr_20096_20118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (1))){
var inst_20063 = cljs.core.vec.call(null,chs);
var inst_20064 = inst_20063;
var state_20092__$1 = (function (){var statearr_20097 = state_20092;
(statearr_20097[(10)] = inst_20064);

return statearr_20097;
})();
var statearr_20098_20119 = state_20092__$1;
(statearr_20098_20119[(2)] = null);

(statearr_20098_20119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (4))){
var inst_20064 = (state_20092[(10)]);
var state_20092__$1 = state_20092;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20092__$1,(7),inst_20064);
} else {
if((state_val_20093 === (6))){
var inst_20088 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20099_20120 = state_20092__$1;
(statearr_20099_20120[(2)] = inst_20088);

(statearr_20099_20120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (3))){
var inst_20090 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20092__$1,inst_20090);
} else {
if((state_val_20093 === (2))){
var inst_20064 = (state_20092[(10)]);
var inst_20066 = cljs.core.count.call(null,inst_20064);
var inst_20067 = (inst_20066 > (0));
var state_20092__$1 = state_20092;
if(cljs.core.truth_(inst_20067)){
var statearr_20101_20121 = state_20092__$1;
(statearr_20101_20121[(1)] = (4));

} else {
var statearr_20102_20122 = state_20092__$1;
(statearr_20102_20122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (11))){
var inst_20064 = (state_20092[(10)]);
var inst_20081 = (state_20092[(2)]);
var tmp20100 = inst_20064;
var inst_20064__$1 = tmp20100;
var state_20092__$1 = (function (){var statearr_20103 = state_20092;
(statearr_20103[(11)] = inst_20081);

(statearr_20103[(10)] = inst_20064__$1);

return statearr_20103;
})();
var statearr_20104_20123 = state_20092__$1;
(statearr_20104_20123[(2)] = null);

(statearr_20104_20123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (9))){
var inst_20072 = (state_20092[(7)]);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20092__$1,(11),out,inst_20072);
} else {
if((state_val_20093 === (5))){
var inst_20086 = cljs.core.async.close_BANG_.call(null,out);
var state_20092__$1 = state_20092;
var statearr_20105_20124 = state_20092__$1;
(statearr_20105_20124[(2)] = inst_20086);

(statearr_20105_20124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (10))){
var inst_20084 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20106_20125 = state_20092__$1;
(statearr_20106_20125[(2)] = inst_20084);

(statearr_20106_20125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (8))){
var inst_20072 = (state_20092[(7)]);
var inst_20073 = (state_20092[(9)]);
var inst_20071 = (state_20092[(8)]);
var inst_20064 = (state_20092[(10)]);
var inst_20076 = (function (){var c = inst_20073;
var v = inst_20072;
var vec__20069 = inst_20071;
var cs = inst_20064;
return ((function (c,v,vec__20069,cs,inst_20072,inst_20073,inst_20071,inst_20064,state_val_20093,c__6861__auto___20116,out){
return (function (p1__20009_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20009_SHARP_);
});
;})(c,v,vec__20069,cs,inst_20072,inst_20073,inst_20071,inst_20064,state_val_20093,c__6861__auto___20116,out))
})();
var inst_20077 = cljs.core.filterv.call(null,inst_20076,inst_20064);
var inst_20064__$1 = inst_20077;
var state_20092__$1 = (function (){var statearr_20107 = state_20092;
(statearr_20107[(10)] = inst_20064__$1);

return statearr_20107;
})();
var statearr_20108_20126 = state_20092__$1;
(statearr_20108_20126[(2)] = null);

(statearr_20108_20126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___20116,out))
;
return ((function (switch__6805__auto__,c__6861__auto___20116,out){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20112 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20112[(0)] = state_machine__6806__auto__);

(statearr_20112[(1)] = (1));

return statearr_20112;
});
var state_machine__6806__auto____1 = (function (state_20092){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20113){if((e20113 instanceof Object)){
var ex__6809__auto__ = e20113;
var statearr_20114_20127 = state_20092;
(statearr_20114_20127[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20128 = state_20092;
state_20092 = G__20128;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20092){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___20116,out))
})();
var state__6863__auto__ = (function (){var statearr_20115 = f__6862__auto__.call(null);
(statearr_20115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___20116);

return statearr_20115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___20116,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6861__auto___20221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___20221,out){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___20221,out){
return (function (state_20198){
var state_val_20199 = (state_20198[(1)]);
if((state_val_20199 === (7))){
var inst_20180 = (state_20198[(7)]);
var inst_20180__$1 = (state_20198[(2)]);
var inst_20181 = (inst_20180__$1 == null);
var inst_20182 = cljs.core.not.call(null,inst_20181);
var state_20198__$1 = (function (){var statearr_20200 = state_20198;
(statearr_20200[(7)] = inst_20180__$1);

return statearr_20200;
})();
if(inst_20182){
var statearr_20201_20222 = state_20198__$1;
(statearr_20201_20222[(1)] = (8));

} else {
var statearr_20202_20223 = state_20198__$1;
(statearr_20202_20223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (1))){
var inst_20175 = (0);
var state_20198__$1 = (function (){var statearr_20203 = state_20198;
(statearr_20203[(8)] = inst_20175);

return statearr_20203;
})();
var statearr_20204_20224 = state_20198__$1;
(statearr_20204_20224[(2)] = null);

(statearr_20204_20224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (4))){
var state_20198__$1 = state_20198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20198__$1,(7),ch);
} else {
if((state_val_20199 === (6))){
var inst_20193 = (state_20198[(2)]);
var state_20198__$1 = state_20198;
var statearr_20205_20225 = state_20198__$1;
(statearr_20205_20225[(2)] = inst_20193);

(statearr_20205_20225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (3))){
var inst_20195 = (state_20198[(2)]);
var inst_20196 = cljs.core.async.close_BANG_.call(null,out);
var state_20198__$1 = (function (){var statearr_20206 = state_20198;
(statearr_20206[(9)] = inst_20195);

return statearr_20206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20198__$1,inst_20196);
} else {
if((state_val_20199 === (2))){
var inst_20175 = (state_20198[(8)]);
var inst_20177 = (inst_20175 < n);
var state_20198__$1 = state_20198;
if(cljs.core.truth_(inst_20177)){
var statearr_20207_20226 = state_20198__$1;
(statearr_20207_20226[(1)] = (4));

} else {
var statearr_20208_20227 = state_20198__$1;
(statearr_20208_20227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (11))){
var inst_20175 = (state_20198[(8)]);
var inst_20185 = (state_20198[(2)]);
var inst_20186 = (inst_20175 + (1));
var inst_20175__$1 = inst_20186;
var state_20198__$1 = (function (){var statearr_20209 = state_20198;
(statearr_20209[(8)] = inst_20175__$1);

(statearr_20209[(10)] = inst_20185);

return statearr_20209;
})();
var statearr_20210_20228 = state_20198__$1;
(statearr_20210_20228[(2)] = null);

(statearr_20210_20228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (9))){
var state_20198__$1 = state_20198;
var statearr_20211_20229 = state_20198__$1;
(statearr_20211_20229[(2)] = null);

(statearr_20211_20229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (5))){
var state_20198__$1 = state_20198;
var statearr_20212_20230 = state_20198__$1;
(statearr_20212_20230[(2)] = null);

(statearr_20212_20230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (10))){
var inst_20190 = (state_20198[(2)]);
var state_20198__$1 = state_20198;
var statearr_20213_20231 = state_20198__$1;
(statearr_20213_20231[(2)] = inst_20190);

(statearr_20213_20231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20199 === (8))){
var inst_20180 = (state_20198[(7)]);
var state_20198__$1 = state_20198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20198__$1,(11),out,inst_20180);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___20221,out))
;
return ((function (switch__6805__auto__,c__6861__auto___20221,out){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20217[(0)] = state_machine__6806__auto__);

(statearr_20217[(1)] = (1));

return statearr_20217;
});
var state_machine__6806__auto____1 = (function (state_20198){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20218){if((e20218 instanceof Object)){
var ex__6809__auto__ = e20218;
var statearr_20219_20232 = state_20198;
(statearr_20219_20232[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20233 = state_20198;
state_20198 = G__20233;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20198){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___20221,out))
})();
var state__6863__auto__ = (function (){var statearr_20220 = f__6862__auto__.call(null);
(statearr_20220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___20221);

return statearr_20220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___20221,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t20241 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20241 = (function (ch,f,map_LT_,meta20242){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20242 = meta20242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20241.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t20241.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t20244 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20244 = (function (fn1,_,meta20242,map_LT_,f,ch,meta20245){
this.fn1 = fn1;
this._ = _;
this.meta20242 = meta20242;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20245 = meta20245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20244.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t20244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20234_SHARP_){
return f1.call(null,(((p1__20234_SHARP_ == null))?null:self__.f.call(null,p1__20234_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t20244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20246){
var self__ = this;
var _20246__$1 = this;
return self__.meta20245;
});})(___$1))
;

cljs.core.async.t20244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20246,meta20245__$1){
var self__ = this;
var _20246__$1 = this;
return (new cljs.core.async.t20244(self__.fn1,self__._,self__.meta20242,self__.map_LT_,self__.f,self__.ch,meta20245__$1));
});})(___$1))
;

cljs.core.async.t20244.cljs$lang$type = true;

cljs.core.async.t20244.cljs$lang$ctorStr = "cljs.core.async/t20244";

cljs.core.async.t20244.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t20244");
});})(___$1))
;

cljs.core.async.__GT_t20244 = ((function (___$1){
return (function __GT_t20244(fn1__$1,___$2,meta20242__$1,map_LT___$1,f__$1,ch__$1,meta20245){
return (new cljs.core.async.t20244(fn1__$1,___$2,meta20242__$1,map_LT___$1,f__$1,ch__$1,meta20245));
});})(___$1))
;

}

return (new cljs.core.async.t20244(fn1,___$1,self__.meta20242,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3787__auto__ = ret;
if(cljs.core.truth_(and__3787__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3787__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t20241.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20241.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20243){
var self__ = this;
var _20243__$1 = this;
return self__.meta20242;
});

cljs.core.async.t20241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20243,meta20242__$1){
var self__ = this;
var _20243__$1 = this;
return (new cljs.core.async.t20241(self__.ch,self__.f,self__.map_LT_,meta20242__$1));
});

cljs.core.async.t20241.cljs$lang$type = true;

cljs.core.async.t20241.cljs$lang$ctorStr = "cljs.core.async/t20241";

cljs.core.async.t20241.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t20241");
});

cljs.core.async.__GT_t20241 = (function __GT_t20241(ch__$1,f__$1,map_LT___$1,meta20242){
return (new cljs.core.async.t20241(ch__$1,f__$1,map_LT___$1,meta20242));
});

}

return (new cljs.core.async.t20241(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t20250 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20250 = (function (ch,f,map_GT_,meta20251){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20251 = meta20251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20250.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20250.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t20250.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20250.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20250.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20250.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20252){
var self__ = this;
var _20252__$1 = this;
return self__.meta20251;
});

cljs.core.async.t20250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20252,meta20251__$1){
var self__ = this;
var _20252__$1 = this;
return (new cljs.core.async.t20250(self__.ch,self__.f,self__.map_GT_,meta20251__$1));
});

cljs.core.async.t20250.cljs$lang$type = true;

cljs.core.async.t20250.cljs$lang$ctorStr = "cljs.core.async/t20250";

cljs.core.async.t20250.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t20250");
});

cljs.core.async.__GT_t20250 = (function __GT_t20250(ch__$1,f__$1,map_GT___$1,meta20251){
return (new cljs.core.async.t20250(ch__$1,f__$1,map_GT___$1,meta20251));
});

}

return (new cljs.core.async.t20250(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t20256 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20256 = (function (ch,p,filter_GT_,meta20257){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20257 = meta20257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20256.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t20256.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20256.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20256.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20258){
var self__ = this;
var _20258__$1 = this;
return self__.meta20257;
});

cljs.core.async.t20256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20258,meta20257__$1){
var self__ = this;
var _20258__$1 = this;
return (new cljs.core.async.t20256(self__.ch,self__.p,self__.filter_GT_,meta20257__$1));
});

cljs.core.async.t20256.cljs$lang$type = true;

cljs.core.async.t20256.cljs$lang$ctorStr = "cljs.core.async/t20256";

cljs.core.async.t20256.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t20256");
});

cljs.core.async.__GT_t20256 = (function __GT_t20256(ch__$1,p__$1,filter_GT___$1,meta20257){
return (new cljs.core.async.t20256(ch__$1,p__$1,filter_GT___$1,meta20257));
});

}

return (new cljs.core.async.t20256(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6861__auto___20341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___20341,out){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___20341,out){
return (function (state_20320){
var state_val_20321 = (state_20320[(1)]);
if((state_val_20321 === (7))){
var inst_20316 = (state_20320[(2)]);
var state_20320__$1 = state_20320;
var statearr_20322_20342 = state_20320__$1;
(statearr_20322_20342[(2)] = inst_20316);

(statearr_20322_20342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (1))){
var state_20320__$1 = state_20320;
var statearr_20323_20343 = state_20320__$1;
(statearr_20323_20343[(2)] = null);

(statearr_20323_20343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (4))){
var inst_20302 = (state_20320[(7)]);
var inst_20302__$1 = (state_20320[(2)]);
var inst_20303 = (inst_20302__$1 == null);
var state_20320__$1 = (function (){var statearr_20324 = state_20320;
(statearr_20324[(7)] = inst_20302__$1);

return statearr_20324;
})();
if(cljs.core.truth_(inst_20303)){
var statearr_20325_20344 = state_20320__$1;
(statearr_20325_20344[(1)] = (5));

} else {
var statearr_20326_20345 = state_20320__$1;
(statearr_20326_20345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (6))){
var inst_20302 = (state_20320[(7)]);
var inst_20307 = p.call(null,inst_20302);
var state_20320__$1 = state_20320;
if(cljs.core.truth_(inst_20307)){
var statearr_20327_20346 = state_20320__$1;
(statearr_20327_20346[(1)] = (8));

} else {
var statearr_20328_20347 = state_20320__$1;
(statearr_20328_20347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (3))){
var inst_20318 = (state_20320[(2)]);
var state_20320__$1 = state_20320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20320__$1,inst_20318);
} else {
if((state_val_20321 === (2))){
var state_20320__$1 = state_20320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20320__$1,(4),ch);
} else {
if((state_val_20321 === (11))){
var inst_20310 = (state_20320[(2)]);
var state_20320__$1 = state_20320;
var statearr_20329_20348 = state_20320__$1;
(statearr_20329_20348[(2)] = inst_20310);

(statearr_20329_20348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (9))){
var state_20320__$1 = state_20320;
var statearr_20330_20349 = state_20320__$1;
(statearr_20330_20349[(2)] = null);

(statearr_20330_20349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (5))){
var inst_20305 = cljs.core.async.close_BANG_.call(null,out);
var state_20320__$1 = state_20320;
var statearr_20331_20350 = state_20320__$1;
(statearr_20331_20350[(2)] = inst_20305);

(statearr_20331_20350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (10))){
var inst_20313 = (state_20320[(2)]);
var state_20320__$1 = (function (){var statearr_20332 = state_20320;
(statearr_20332[(8)] = inst_20313);

return statearr_20332;
})();
var statearr_20333_20351 = state_20320__$1;
(statearr_20333_20351[(2)] = null);

(statearr_20333_20351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (8))){
var inst_20302 = (state_20320[(7)]);
var state_20320__$1 = state_20320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20320__$1,(11),out,inst_20302);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___20341,out))
;
return ((function (switch__6805__auto__,c__6861__auto___20341,out){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20337 = [null,null,null,null,null,null,null,null,null];
(statearr_20337[(0)] = state_machine__6806__auto__);

(statearr_20337[(1)] = (1));

return statearr_20337;
});
var state_machine__6806__auto____1 = (function (state_20320){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20338){if((e20338 instanceof Object)){
var ex__6809__auto__ = e20338;
var statearr_20339_20352 = state_20320;
(statearr_20339_20352[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20353 = state_20320;
state_20320 = G__20353;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20320){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___20341,out))
})();
var state__6863__auto__ = (function (){var statearr_20340 = f__6862__auto__.call(null);
(statearr_20340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___20341);

return statearr_20340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___20341,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6861__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto__){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto__){
return (function (state_20519){
var state_val_20520 = (state_20519[(1)]);
if((state_val_20520 === (7))){
var inst_20515 = (state_20519[(2)]);
var state_20519__$1 = state_20519;
var statearr_20521_20562 = state_20519__$1;
(statearr_20521_20562[(2)] = inst_20515);

(statearr_20521_20562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (20))){
var inst_20485 = (state_20519[(7)]);
var inst_20496 = (state_20519[(2)]);
var inst_20497 = cljs.core.next.call(null,inst_20485);
var inst_20471 = inst_20497;
var inst_20472 = null;
var inst_20473 = (0);
var inst_20474 = (0);
var state_20519__$1 = (function (){var statearr_20522 = state_20519;
(statearr_20522[(8)] = inst_20496);

(statearr_20522[(9)] = inst_20471);

(statearr_20522[(10)] = inst_20474);

(statearr_20522[(11)] = inst_20472);

(statearr_20522[(12)] = inst_20473);

return statearr_20522;
})();
var statearr_20523_20563 = state_20519__$1;
(statearr_20523_20563[(2)] = null);

(statearr_20523_20563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (1))){
var state_20519__$1 = state_20519;
var statearr_20524_20564 = state_20519__$1;
(statearr_20524_20564[(2)] = null);

(statearr_20524_20564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (4))){
var inst_20460 = (state_20519[(13)]);
var inst_20460__$1 = (state_20519[(2)]);
var inst_20461 = (inst_20460__$1 == null);
var state_20519__$1 = (function (){var statearr_20525 = state_20519;
(statearr_20525[(13)] = inst_20460__$1);

return statearr_20525;
})();
if(cljs.core.truth_(inst_20461)){
var statearr_20526_20565 = state_20519__$1;
(statearr_20526_20565[(1)] = (5));

} else {
var statearr_20527_20566 = state_20519__$1;
(statearr_20527_20566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (15))){
var state_20519__$1 = state_20519;
var statearr_20531_20567 = state_20519__$1;
(statearr_20531_20567[(2)] = null);

(statearr_20531_20567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (21))){
var state_20519__$1 = state_20519;
var statearr_20532_20568 = state_20519__$1;
(statearr_20532_20568[(2)] = null);

(statearr_20532_20568[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (13))){
var inst_20471 = (state_20519[(9)]);
var inst_20474 = (state_20519[(10)]);
var inst_20472 = (state_20519[(11)]);
var inst_20473 = (state_20519[(12)]);
var inst_20481 = (state_20519[(2)]);
var inst_20482 = (inst_20474 + (1));
var tmp20528 = inst_20471;
var tmp20529 = inst_20472;
var tmp20530 = inst_20473;
var inst_20471__$1 = tmp20528;
var inst_20472__$1 = tmp20529;
var inst_20473__$1 = tmp20530;
var inst_20474__$1 = inst_20482;
var state_20519__$1 = (function (){var statearr_20533 = state_20519;
(statearr_20533[(9)] = inst_20471__$1);

(statearr_20533[(10)] = inst_20474__$1);

(statearr_20533[(14)] = inst_20481);

(statearr_20533[(11)] = inst_20472__$1);

(statearr_20533[(12)] = inst_20473__$1);

return statearr_20533;
})();
var statearr_20534_20569 = state_20519__$1;
(statearr_20534_20569[(2)] = null);

(statearr_20534_20569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (22))){
var state_20519__$1 = state_20519;
var statearr_20535_20570 = state_20519__$1;
(statearr_20535_20570[(2)] = null);

(statearr_20535_20570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (6))){
var inst_20460 = (state_20519[(13)]);
var inst_20469 = f.call(null,inst_20460);
var inst_20470 = cljs.core.seq.call(null,inst_20469);
var inst_20471 = inst_20470;
var inst_20472 = null;
var inst_20473 = (0);
var inst_20474 = (0);
var state_20519__$1 = (function (){var statearr_20536 = state_20519;
(statearr_20536[(9)] = inst_20471);

(statearr_20536[(10)] = inst_20474);

(statearr_20536[(11)] = inst_20472);

(statearr_20536[(12)] = inst_20473);

return statearr_20536;
})();
var statearr_20537_20571 = state_20519__$1;
(statearr_20537_20571[(2)] = null);

(statearr_20537_20571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (17))){
var inst_20485 = (state_20519[(7)]);
var inst_20489 = cljs.core.chunk_first.call(null,inst_20485);
var inst_20490 = cljs.core.chunk_rest.call(null,inst_20485);
var inst_20491 = cljs.core.count.call(null,inst_20489);
var inst_20471 = inst_20490;
var inst_20472 = inst_20489;
var inst_20473 = inst_20491;
var inst_20474 = (0);
var state_20519__$1 = (function (){var statearr_20538 = state_20519;
(statearr_20538[(9)] = inst_20471);

(statearr_20538[(10)] = inst_20474);

(statearr_20538[(11)] = inst_20472);

(statearr_20538[(12)] = inst_20473);

return statearr_20538;
})();
var statearr_20539_20572 = state_20519__$1;
(statearr_20539_20572[(2)] = null);

(statearr_20539_20572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (3))){
var inst_20517 = (state_20519[(2)]);
var state_20519__$1 = state_20519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20519__$1,inst_20517);
} else {
if((state_val_20520 === (12))){
var inst_20505 = (state_20519[(2)]);
var state_20519__$1 = state_20519;
var statearr_20540_20573 = state_20519__$1;
(statearr_20540_20573[(2)] = inst_20505);

(statearr_20540_20573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (2))){
var state_20519__$1 = state_20519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20519__$1,(4),in$);
} else {
if((state_val_20520 === (23))){
var inst_20513 = (state_20519[(2)]);
var state_20519__$1 = state_20519;
var statearr_20541_20574 = state_20519__$1;
(statearr_20541_20574[(2)] = inst_20513);

(statearr_20541_20574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (19))){
var inst_20500 = (state_20519[(2)]);
var state_20519__$1 = state_20519;
var statearr_20542_20575 = state_20519__$1;
(statearr_20542_20575[(2)] = inst_20500);

(statearr_20542_20575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (11))){
var inst_20485 = (state_20519[(7)]);
var inst_20471 = (state_20519[(9)]);
var inst_20485__$1 = cljs.core.seq.call(null,inst_20471);
var state_20519__$1 = (function (){var statearr_20543 = state_20519;
(statearr_20543[(7)] = inst_20485__$1);

return statearr_20543;
})();
if(inst_20485__$1){
var statearr_20544_20576 = state_20519__$1;
(statearr_20544_20576[(1)] = (14));

} else {
var statearr_20545_20577 = state_20519__$1;
(statearr_20545_20577[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (9))){
var inst_20507 = (state_20519[(2)]);
var inst_20508 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20519__$1 = (function (){var statearr_20546 = state_20519;
(statearr_20546[(15)] = inst_20507);

return statearr_20546;
})();
if(cljs.core.truth_(inst_20508)){
var statearr_20547_20578 = state_20519__$1;
(statearr_20547_20578[(1)] = (21));

} else {
var statearr_20548_20579 = state_20519__$1;
(statearr_20548_20579[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (5))){
var inst_20463 = cljs.core.async.close_BANG_.call(null,out);
var state_20519__$1 = state_20519;
var statearr_20549_20580 = state_20519__$1;
(statearr_20549_20580[(2)] = inst_20463);

(statearr_20549_20580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (14))){
var inst_20485 = (state_20519[(7)]);
var inst_20487 = cljs.core.chunked_seq_QMARK_.call(null,inst_20485);
var state_20519__$1 = state_20519;
if(inst_20487){
var statearr_20550_20581 = state_20519__$1;
(statearr_20550_20581[(1)] = (17));

} else {
var statearr_20551_20582 = state_20519__$1;
(statearr_20551_20582[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (16))){
var inst_20503 = (state_20519[(2)]);
var state_20519__$1 = state_20519;
var statearr_20552_20583 = state_20519__$1;
(statearr_20552_20583[(2)] = inst_20503);

(statearr_20552_20583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (10))){
var inst_20474 = (state_20519[(10)]);
var inst_20472 = (state_20519[(11)]);
var inst_20479 = cljs.core._nth.call(null,inst_20472,inst_20474);
var state_20519__$1 = state_20519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20519__$1,(13),out,inst_20479);
} else {
if((state_val_20520 === (18))){
var inst_20485 = (state_20519[(7)]);
var inst_20494 = cljs.core.first.call(null,inst_20485);
var state_20519__$1 = state_20519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20519__$1,(20),out,inst_20494);
} else {
if((state_val_20520 === (8))){
var inst_20474 = (state_20519[(10)]);
var inst_20473 = (state_20519[(12)]);
var inst_20476 = (inst_20474 < inst_20473);
var inst_20477 = inst_20476;
var state_20519__$1 = state_20519;
if(cljs.core.truth_(inst_20477)){
var statearr_20553_20584 = state_20519__$1;
(statearr_20553_20584[(1)] = (10));

} else {
var statearr_20554_20585 = state_20519__$1;
(statearr_20554_20585[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto__))
;
return ((function (switch__6805__auto__,c__6861__auto__){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20558[(0)] = state_machine__6806__auto__);

(statearr_20558[(1)] = (1));

return statearr_20558;
});
var state_machine__6806__auto____1 = (function (state_20519){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20559){if((e20559 instanceof Object)){
var ex__6809__auto__ = e20559;
var statearr_20560_20586 = state_20519;
(statearr_20560_20586[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20587 = state_20519;
state_20519 = G__20587;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20519){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto__))
})();
var state__6863__auto__ = (function (){var statearr_20561 = f__6862__auto__.call(null);
(statearr_20561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto__);

return statearr_20561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto__))
);

return c__6861__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6861__auto___20684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___20684,out){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___20684,out){
return (function (state_20659){
var state_val_20660 = (state_20659[(1)]);
if((state_val_20660 === (7))){
var inst_20654 = (state_20659[(2)]);
var state_20659__$1 = state_20659;
var statearr_20661_20685 = state_20659__$1;
(statearr_20661_20685[(2)] = inst_20654);

(statearr_20661_20685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (1))){
var inst_20636 = null;
var state_20659__$1 = (function (){var statearr_20662 = state_20659;
(statearr_20662[(7)] = inst_20636);

return statearr_20662;
})();
var statearr_20663_20686 = state_20659__$1;
(statearr_20663_20686[(2)] = null);

(statearr_20663_20686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (4))){
var inst_20639 = (state_20659[(8)]);
var inst_20639__$1 = (state_20659[(2)]);
var inst_20640 = (inst_20639__$1 == null);
var inst_20641 = cljs.core.not.call(null,inst_20640);
var state_20659__$1 = (function (){var statearr_20664 = state_20659;
(statearr_20664[(8)] = inst_20639__$1);

return statearr_20664;
})();
if(inst_20641){
var statearr_20665_20687 = state_20659__$1;
(statearr_20665_20687[(1)] = (5));

} else {
var statearr_20666_20688 = state_20659__$1;
(statearr_20666_20688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (6))){
var state_20659__$1 = state_20659;
var statearr_20667_20689 = state_20659__$1;
(statearr_20667_20689[(2)] = null);

(statearr_20667_20689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (3))){
var inst_20656 = (state_20659[(2)]);
var inst_20657 = cljs.core.async.close_BANG_.call(null,out);
var state_20659__$1 = (function (){var statearr_20668 = state_20659;
(statearr_20668[(9)] = inst_20656);

return statearr_20668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20659__$1,inst_20657);
} else {
if((state_val_20660 === (2))){
var state_20659__$1 = state_20659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20659__$1,(4),ch);
} else {
if((state_val_20660 === (11))){
var inst_20639 = (state_20659[(8)]);
var inst_20648 = (state_20659[(2)]);
var inst_20636 = inst_20639;
var state_20659__$1 = (function (){var statearr_20669 = state_20659;
(statearr_20669[(10)] = inst_20648);

(statearr_20669[(7)] = inst_20636);

return statearr_20669;
})();
var statearr_20670_20690 = state_20659__$1;
(statearr_20670_20690[(2)] = null);

(statearr_20670_20690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (9))){
var inst_20639 = (state_20659[(8)]);
var state_20659__$1 = state_20659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20659__$1,(11),out,inst_20639);
} else {
if((state_val_20660 === (5))){
var inst_20639 = (state_20659[(8)]);
var inst_20636 = (state_20659[(7)]);
var inst_20643 = cljs.core._EQ_.call(null,inst_20639,inst_20636);
var state_20659__$1 = state_20659;
if(inst_20643){
var statearr_20672_20691 = state_20659__$1;
(statearr_20672_20691[(1)] = (8));

} else {
var statearr_20673_20692 = state_20659__$1;
(statearr_20673_20692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (10))){
var inst_20651 = (state_20659[(2)]);
var state_20659__$1 = state_20659;
var statearr_20674_20693 = state_20659__$1;
(statearr_20674_20693[(2)] = inst_20651);

(statearr_20674_20693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20660 === (8))){
var inst_20636 = (state_20659[(7)]);
var tmp20671 = inst_20636;
var inst_20636__$1 = tmp20671;
var state_20659__$1 = (function (){var statearr_20675 = state_20659;
(statearr_20675[(7)] = inst_20636__$1);

return statearr_20675;
})();
var statearr_20676_20694 = state_20659__$1;
(statearr_20676_20694[(2)] = null);

(statearr_20676_20694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___20684,out))
;
return ((function (switch__6805__auto__,c__6861__auto___20684,out){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20680[(0)] = state_machine__6806__auto__);

(statearr_20680[(1)] = (1));

return statearr_20680;
});
var state_machine__6806__auto____1 = (function (state_20659){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20681){if((e20681 instanceof Object)){
var ex__6809__auto__ = e20681;
var statearr_20682_20695 = state_20659;
(statearr_20682_20695[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20696 = state_20659;
state_20659 = G__20696;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20659){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___20684,out))
})();
var state__6863__auto__ = (function (){var statearr_20683 = f__6862__auto__.call(null);
(statearr_20683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___20684);

return statearr_20683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___20684,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6861__auto___20831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___20831,out){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___20831,out){
return (function (state_20801){
var state_val_20802 = (state_20801[(1)]);
if((state_val_20802 === (7))){
var inst_20797 = (state_20801[(2)]);
var state_20801__$1 = state_20801;
var statearr_20803_20832 = state_20801__$1;
(statearr_20803_20832[(2)] = inst_20797);

(statearr_20803_20832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (1))){
var inst_20764 = (new Array(n));
var inst_20765 = inst_20764;
var inst_20766 = (0);
var state_20801__$1 = (function (){var statearr_20804 = state_20801;
(statearr_20804[(7)] = inst_20766);

(statearr_20804[(8)] = inst_20765);

return statearr_20804;
})();
var statearr_20805_20833 = state_20801__$1;
(statearr_20805_20833[(2)] = null);

(statearr_20805_20833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (4))){
var inst_20769 = (state_20801[(9)]);
var inst_20769__$1 = (state_20801[(2)]);
var inst_20770 = (inst_20769__$1 == null);
var inst_20771 = cljs.core.not.call(null,inst_20770);
var state_20801__$1 = (function (){var statearr_20806 = state_20801;
(statearr_20806[(9)] = inst_20769__$1);

return statearr_20806;
})();
if(inst_20771){
var statearr_20807_20834 = state_20801__$1;
(statearr_20807_20834[(1)] = (5));

} else {
var statearr_20808_20835 = state_20801__$1;
(statearr_20808_20835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (15))){
var inst_20791 = (state_20801[(2)]);
var state_20801__$1 = state_20801;
var statearr_20809_20836 = state_20801__$1;
(statearr_20809_20836[(2)] = inst_20791);

(statearr_20809_20836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (13))){
var state_20801__$1 = state_20801;
var statearr_20810_20837 = state_20801__$1;
(statearr_20810_20837[(2)] = null);

(statearr_20810_20837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (6))){
var inst_20766 = (state_20801[(7)]);
var inst_20787 = (inst_20766 > (0));
var state_20801__$1 = state_20801;
if(cljs.core.truth_(inst_20787)){
var statearr_20811_20838 = state_20801__$1;
(statearr_20811_20838[(1)] = (12));

} else {
var statearr_20812_20839 = state_20801__$1;
(statearr_20812_20839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (3))){
var inst_20799 = (state_20801[(2)]);
var state_20801__$1 = state_20801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20801__$1,inst_20799);
} else {
if((state_val_20802 === (12))){
var inst_20765 = (state_20801[(8)]);
var inst_20789 = cljs.core.vec.call(null,inst_20765);
var state_20801__$1 = state_20801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20801__$1,(15),out,inst_20789);
} else {
if((state_val_20802 === (2))){
var state_20801__$1 = state_20801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20801__$1,(4),ch);
} else {
if((state_val_20802 === (11))){
var inst_20781 = (state_20801[(2)]);
var inst_20782 = (new Array(n));
var inst_20765 = inst_20782;
var inst_20766 = (0);
var state_20801__$1 = (function (){var statearr_20813 = state_20801;
(statearr_20813[(10)] = inst_20781);

(statearr_20813[(7)] = inst_20766);

(statearr_20813[(8)] = inst_20765);

return statearr_20813;
})();
var statearr_20814_20840 = state_20801__$1;
(statearr_20814_20840[(2)] = null);

(statearr_20814_20840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (9))){
var inst_20765 = (state_20801[(8)]);
var inst_20779 = cljs.core.vec.call(null,inst_20765);
var state_20801__$1 = state_20801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20801__$1,(11),out,inst_20779);
} else {
if((state_val_20802 === (5))){
var inst_20766 = (state_20801[(7)]);
var inst_20765 = (state_20801[(8)]);
var inst_20774 = (state_20801[(11)]);
var inst_20769 = (state_20801[(9)]);
var inst_20773 = (inst_20765[inst_20766] = inst_20769);
var inst_20774__$1 = (inst_20766 + (1));
var inst_20775 = (inst_20774__$1 < n);
var state_20801__$1 = (function (){var statearr_20815 = state_20801;
(statearr_20815[(12)] = inst_20773);

(statearr_20815[(11)] = inst_20774__$1);

return statearr_20815;
})();
if(cljs.core.truth_(inst_20775)){
var statearr_20816_20841 = state_20801__$1;
(statearr_20816_20841[(1)] = (8));

} else {
var statearr_20817_20842 = state_20801__$1;
(statearr_20817_20842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (14))){
var inst_20794 = (state_20801[(2)]);
var inst_20795 = cljs.core.async.close_BANG_.call(null,out);
var state_20801__$1 = (function (){var statearr_20819 = state_20801;
(statearr_20819[(13)] = inst_20794);

return statearr_20819;
})();
var statearr_20820_20843 = state_20801__$1;
(statearr_20820_20843[(2)] = inst_20795);

(statearr_20820_20843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (10))){
var inst_20785 = (state_20801[(2)]);
var state_20801__$1 = state_20801;
var statearr_20821_20844 = state_20801__$1;
(statearr_20821_20844[(2)] = inst_20785);

(statearr_20821_20844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (8))){
var inst_20765 = (state_20801[(8)]);
var inst_20774 = (state_20801[(11)]);
var tmp20818 = inst_20765;
var inst_20765__$1 = tmp20818;
var inst_20766 = inst_20774;
var state_20801__$1 = (function (){var statearr_20822 = state_20801;
(statearr_20822[(7)] = inst_20766);

(statearr_20822[(8)] = inst_20765__$1);

return statearr_20822;
})();
var statearr_20823_20845 = state_20801__$1;
(statearr_20823_20845[(2)] = null);

(statearr_20823_20845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___20831,out))
;
return ((function (switch__6805__auto__,c__6861__auto___20831,out){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20827[(0)] = state_machine__6806__auto__);

(statearr_20827[(1)] = (1));

return statearr_20827;
});
var state_machine__6806__auto____1 = (function (state_20801){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20828){if((e20828 instanceof Object)){
var ex__6809__auto__ = e20828;
var statearr_20829_20846 = state_20801;
(statearr_20829_20846[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20847 = state_20801;
state_20801 = G__20847;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20801){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___20831,out))
})();
var state__6863__auto__ = (function (){var statearr_20830 = f__6862__auto__.call(null);
(statearr_20830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___20831);

return statearr_20830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___20831,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6861__auto___20990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___20990,out){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___20990,out){
return (function (state_20960){
var state_val_20961 = (state_20960[(1)]);
if((state_val_20961 === (7))){
var inst_20956 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
var statearr_20962_20991 = state_20960__$1;
(statearr_20962_20991[(2)] = inst_20956);

(statearr_20962_20991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (1))){
var inst_20919 = [];
var inst_20920 = inst_20919;
var inst_20921 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20960__$1 = (function (){var statearr_20963 = state_20960;
(statearr_20963[(7)] = inst_20920);

(statearr_20963[(8)] = inst_20921);

return statearr_20963;
})();
var statearr_20964_20992 = state_20960__$1;
(statearr_20964_20992[(2)] = null);

(statearr_20964_20992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (4))){
var inst_20924 = (state_20960[(9)]);
var inst_20924__$1 = (state_20960[(2)]);
var inst_20925 = (inst_20924__$1 == null);
var inst_20926 = cljs.core.not.call(null,inst_20925);
var state_20960__$1 = (function (){var statearr_20965 = state_20960;
(statearr_20965[(9)] = inst_20924__$1);

return statearr_20965;
})();
if(inst_20926){
var statearr_20966_20993 = state_20960__$1;
(statearr_20966_20993[(1)] = (5));

} else {
var statearr_20967_20994 = state_20960__$1;
(statearr_20967_20994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (15))){
var inst_20950 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
var statearr_20968_20995 = state_20960__$1;
(statearr_20968_20995[(2)] = inst_20950);

(statearr_20968_20995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (13))){
var state_20960__$1 = state_20960;
var statearr_20969_20996 = state_20960__$1;
(statearr_20969_20996[(2)] = null);

(statearr_20969_20996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (6))){
var inst_20920 = (state_20960[(7)]);
var inst_20945 = inst_20920.length;
var inst_20946 = (inst_20945 > (0));
var state_20960__$1 = state_20960;
if(cljs.core.truth_(inst_20946)){
var statearr_20970_20997 = state_20960__$1;
(statearr_20970_20997[(1)] = (12));

} else {
var statearr_20971_20998 = state_20960__$1;
(statearr_20971_20998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (3))){
var inst_20958 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20960__$1,inst_20958);
} else {
if((state_val_20961 === (12))){
var inst_20920 = (state_20960[(7)]);
var inst_20948 = cljs.core.vec.call(null,inst_20920);
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20960__$1,(15),out,inst_20948);
} else {
if((state_val_20961 === (2))){
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20960__$1,(4),ch);
} else {
if((state_val_20961 === (11))){
var inst_20924 = (state_20960[(9)]);
var inst_20928 = (state_20960[(10)]);
var inst_20938 = (state_20960[(2)]);
var inst_20939 = [];
var inst_20940 = inst_20939.push(inst_20924);
var inst_20920 = inst_20939;
var inst_20921 = inst_20928;
var state_20960__$1 = (function (){var statearr_20972 = state_20960;
(statearr_20972[(11)] = inst_20940);

(statearr_20972[(7)] = inst_20920);

(statearr_20972[(8)] = inst_20921);

(statearr_20972[(12)] = inst_20938);

return statearr_20972;
})();
var statearr_20973_20999 = state_20960__$1;
(statearr_20973_20999[(2)] = null);

(statearr_20973_20999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (9))){
var inst_20920 = (state_20960[(7)]);
var inst_20936 = cljs.core.vec.call(null,inst_20920);
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20960__$1,(11),out,inst_20936);
} else {
if((state_val_20961 === (5))){
var inst_20924 = (state_20960[(9)]);
var inst_20921 = (state_20960[(8)]);
var inst_20928 = (state_20960[(10)]);
var inst_20928__$1 = f.call(null,inst_20924);
var inst_20929 = cljs.core._EQ_.call(null,inst_20928__$1,inst_20921);
var inst_20930 = cljs.core.keyword_identical_QMARK_.call(null,inst_20921,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20931 = (inst_20929) || (inst_20930);
var state_20960__$1 = (function (){var statearr_20974 = state_20960;
(statearr_20974[(10)] = inst_20928__$1);

return statearr_20974;
})();
if(cljs.core.truth_(inst_20931)){
var statearr_20975_21000 = state_20960__$1;
(statearr_20975_21000[(1)] = (8));

} else {
var statearr_20976_21001 = state_20960__$1;
(statearr_20976_21001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (14))){
var inst_20953 = (state_20960[(2)]);
var inst_20954 = cljs.core.async.close_BANG_.call(null,out);
var state_20960__$1 = (function (){var statearr_20978 = state_20960;
(statearr_20978[(13)] = inst_20953);

return statearr_20978;
})();
var statearr_20979_21002 = state_20960__$1;
(statearr_20979_21002[(2)] = inst_20954);

(statearr_20979_21002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (10))){
var inst_20943 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
var statearr_20980_21003 = state_20960__$1;
(statearr_20980_21003[(2)] = inst_20943);

(statearr_20980_21003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (8))){
var inst_20924 = (state_20960[(9)]);
var inst_20920 = (state_20960[(7)]);
var inst_20928 = (state_20960[(10)]);
var inst_20933 = inst_20920.push(inst_20924);
var tmp20977 = inst_20920;
var inst_20920__$1 = tmp20977;
var inst_20921 = inst_20928;
var state_20960__$1 = (function (){var statearr_20981 = state_20960;
(statearr_20981[(7)] = inst_20920__$1);

(statearr_20981[(8)] = inst_20921);

(statearr_20981[(14)] = inst_20933);

return statearr_20981;
})();
var statearr_20982_21004 = state_20960__$1;
(statearr_20982_21004[(2)] = null);

(statearr_20982_21004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6861__auto___20990,out))
;
return ((function (switch__6805__auto__,c__6861__auto___20990,out){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20986[(0)] = state_machine__6806__auto__);

(statearr_20986[(1)] = (1));

return statearr_20986;
});
var state_machine__6806__auto____1 = (function (state_20960){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20987){if((e20987 instanceof Object)){
var ex__6809__auto__ = e20987;
var statearr_20988_21005 = state_20960;
(statearr_20988_21005[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21006 = state_20960;
state_20960 = G__21006;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20960){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___20990,out))
})();
var state__6863__auto__ = (function (){var statearr_20989 = f__6862__auto__.call(null);
(statearr_20989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___20990);

return statearr_20989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___20990,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
