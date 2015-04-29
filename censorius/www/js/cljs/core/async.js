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
if(typeof cljs.core.async.t16975 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16975 = (function (f,fn_handler,meta16976){
this.f = f;
this.fn_handler = fn_handler;
this.meta16976 = meta16976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16975.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16977){
var self__ = this;
var _16977__$1 = this;
return self__.meta16976;
});

cljs.core.async.t16975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16977,meta16976__$1){
var self__ = this;
var _16977__$1 = this;
return (new cljs.core.async.t16975(self__.f,self__.fn_handler,meta16976__$1));
});

cljs.core.async.t16975.cljs$lang$type = true;

cljs.core.async.t16975.cljs$lang$ctorStr = "cljs.core.async/t16975";

cljs.core.async.t16975.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t16975");
});

cljs.core.async.__GT_t16975 = (function __GT_t16975(f__$1,fn_handler__$1,meta16976){
return (new cljs.core.async.t16975(f__$1,fn_handler__$1,meta16976));
});

}

return (new cljs.core.async.t16975(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var G__16979 = buff;
if(G__16979){
var bit__4480__auto__ = null;
if(cljs.core.truth_((function (){var or__3799__auto__ = bit__4480__auto__;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return G__16979.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16979.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16979);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16979);
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
var val_16980 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16980);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16980,ret){
return (function (){
return fn1.call(null,val_16980);
});})(val_16980,ret))
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
var n__4686__auto___16981 = n;
var x_16982 = (0);
while(true){
if((x_16982 < n__4686__auto___16981)){
(a[x_16982] = (0));

var G__16983 = (x_16982 + (1));
x_16982 = G__16983;
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

var G__16984 = (i + (1));
i = G__16984;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16988 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16988 = (function (flag,alt_flag,meta16989){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16989 = meta16989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16988.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16990){
var self__ = this;
var _16990__$1 = this;
return self__.meta16989;
});})(flag))
;

cljs.core.async.t16988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16990,meta16989__$1){
var self__ = this;
var _16990__$1 = this;
return (new cljs.core.async.t16988(self__.flag,self__.alt_flag,meta16989__$1));
});})(flag))
;

cljs.core.async.t16988.cljs$lang$type = true;

cljs.core.async.t16988.cljs$lang$ctorStr = "cljs.core.async/t16988";

cljs.core.async.t16988.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t16988");
});})(flag))
;

cljs.core.async.__GT_t16988 = ((function (flag){
return (function __GT_t16988(flag__$1,alt_flag__$1,meta16989){
return (new cljs.core.async.t16988(flag__$1,alt_flag__$1,meta16989));
});})(flag))
;

}

return (new cljs.core.async.t16988(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16994 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16994 = (function (cb,flag,alt_handler,meta16995){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16995 = meta16995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16994.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16996){
var self__ = this;
var _16996__$1 = this;
return self__.meta16995;
});

cljs.core.async.t16994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16996,meta16995__$1){
var self__ = this;
var _16996__$1 = this;
return (new cljs.core.async.t16994(self__.cb,self__.flag,self__.alt_handler,meta16995__$1));
});

cljs.core.async.t16994.cljs$lang$type = true;

cljs.core.async.t16994.cljs$lang$ctorStr = "cljs.core.async/t16994";

cljs.core.async.t16994.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t16994");
});

cljs.core.async.__GT_t16994 = (function __GT_t16994(cb__$1,flag__$1,alt_handler__$1,meta16995){
return (new cljs.core.async.t16994(cb__$1,flag__$1,alt_handler__$1,meta16995));
});

}

return (new cljs.core.async.t16994(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
return (function (p1__16997_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16997_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16998_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16998_SHARP_,port], null));
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
var G__16999 = (i + (1));
i = G__16999;
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
var alts_BANG___delegate = function (ports,p__17000){
var map__17002 = p__17000;
var map__17002__$1 = ((cljs.core.seq_QMARK_.call(null,map__17002))?cljs.core.apply.call(null,cljs.core.hash_map,map__17002):map__17002);
var opts = map__17002__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__17000 = null;
if (arguments.length > 1) {
var G__17003__i = 0, G__17003__a = new Array(arguments.length -  1);
while (G__17003__i < G__17003__a.length) {G__17003__a[G__17003__i] = arguments[G__17003__i + 1]; ++G__17003__i;}
  p__17000 = new cljs.core.IndexedSeq(G__17003__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__17000);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17004){
var ports = cljs.core.first(arglist__17004);
var p__17000 = cljs.core.rest(arglist__17004);
return alts_BANG___delegate(ports,p__17000);
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
var c__6777__auto___17099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___17099){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___17099){
return (function (state_17075){
var state_val_17076 = (state_17075[(1)]);
if((state_val_17076 === (7))){
var inst_17071 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
var statearr_17077_17100 = state_17075__$1;
(statearr_17077_17100[(2)] = inst_17071);

(statearr_17077_17100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (1))){
var state_17075__$1 = state_17075;
var statearr_17078_17101 = state_17075__$1;
(statearr_17078_17101[(2)] = null);

(statearr_17078_17101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (4))){
var inst_17054 = (state_17075[(7)]);
var inst_17054__$1 = (state_17075[(2)]);
var inst_17055 = (inst_17054__$1 == null);
var state_17075__$1 = (function (){var statearr_17079 = state_17075;
(statearr_17079[(7)] = inst_17054__$1);

return statearr_17079;
})();
if(cljs.core.truth_(inst_17055)){
var statearr_17080_17102 = state_17075__$1;
(statearr_17080_17102[(1)] = (5));

} else {
var statearr_17081_17103 = state_17075__$1;
(statearr_17081_17103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (13))){
var state_17075__$1 = state_17075;
var statearr_17082_17104 = state_17075__$1;
(statearr_17082_17104[(2)] = null);

(statearr_17082_17104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (6))){
var inst_17054 = (state_17075[(7)]);
var state_17075__$1 = state_17075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17075__$1,(11),to,inst_17054);
} else {
if((state_val_17076 === (3))){
var inst_17073 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17075__$1,inst_17073);
} else {
if((state_val_17076 === (12))){
var state_17075__$1 = state_17075;
var statearr_17083_17105 = state_17075__$1;
(statearr_17083_17105[(2)] = null);

(statearr_17083_17105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (2))){
var state_17075__$1 = state_17075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17075__$1,(4),from);
} else {
if((state_val_17076 === (11))){
var inst_17064 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
if(cljs.core.truth_(inst_17064)){
var statearr_17084_17106 = state_17075__$1;
(statearr_17084_17106[(1)] = (12));

} else {
var statearr_17085_17107 = state_17075__$1;
(statearr_17085_17107[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (9))){
var state_17075__$1 = state_17075;
var statearr_17086_17108 = state_17075__$1;
(statearr_17086_17108[(2)] = null);

(statearr_17086_17108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (5))){
var state_17075__$1 = state_17075;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17087_17109 = state_17075__$1;
(statearr_17087_17109[(1)] = (8));

} else {
var statearr_17088_17110 = state_17075__$1;
(statearr_17088_17110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (14))){
var inst_17069 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
var statearr_17089_17111 = state_17075__$1;
(statearr_17089_17111[(2)] = inst_17069);

(statearr_17089_17111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (10))){
var inst_17061 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
var statearr_17090_17112 = state_17075__$1;
(statearr_17090_17112[(2)] = inst_17061);

(statearr_17090_17112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (8))){
var inst_17058 = cljs.core.async.close_BANG_.call(null,to);
var state_17075__$1 = state_17075;
var statearr_17091_17113 = state_17075__$1;
(statearr_17091_17113[(2)] = inst_17058);

(statearr_17091_17113[(1)] = (10));


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
});})(c__6777__auto___17099))
;
return ((function (switch__6721__auto__,c__6777__auto___17099){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17095 = [null,null,null,null,null,null,null,null];
(statearr_17095[(0)] = state_machine__6722__auto__);

(statearr_17095[(1)] = (1));

return statearr_17095;
});
var state_machine__6722__auto____1 = (function (state_17075){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17096){if((e17096 instanceof Object)){
var ex__6725__auto__ = e17096;
var statearr_17097_17114 = state_17075;
(statearr_17097_17114[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17115 = state_17075;
state_17075 = G__17115;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17075){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___17099))
})();
var state__6779__auto__ = (function (){var statearr_17098 = f__6778__auto__.call(null);
(statearr_17098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17099);

return statearr_17098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___17099))
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
return (function (p__17299){
var vec__17300 = p__17299;
var v = cljs.core.nth.call(null,vec__17300,(0),null);
var p = cljs.core.nth.call(null,vec__17300,(1),null);
var job = vec__17300;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6777__auto___17482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___17482,res,vec__17300,v,p,job,jobs,results){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___17482,res,vec__17300,v,p,job,jobs,results){
return (function (state_17305){
var state_val_17306 = (state_17305[(1)]);
if((state_val_17306 === (2))){
var inst_17302 = (state_17305[(2)]);
var inst_17303 = cljs.core.async.close_BANG_.call(null,res);
var state_17305__$1 = (function (){var statearr_17307 = state_17305;
(statearr_17307[(7)] = inst_17302);

return statearr_17307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17305__$1,inst_17303);
} else {
if((state_val_17306 === (1))){
var state_17305__$1 = state_17305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17305__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6777__auto___17482,res,vec__17300,v,p,job,jobs,results))
;
return ((function (switch__6721__auto__,c__6777__auto___17482,res,vec__17300,v,p,job,jobs,results){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17311 = [null,null,null,null,null,null,null,null];
(statearr_17311[(0)] = state_machine__6722__auto__);

(statearr_17311[(1)] = (1));

return statearr_17311;
});
var state_machine__6722__auto____1 = (function (state_17305){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17312){if((e17312 instanceof Object)){
var ex__6725__auto__ = e17312;
var statearr_17313_17483 = state_17305;
(statearr_17313_17483[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17484 = state_17305;
state_17305 = G__17484;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17305){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___17482,res,vec__17300,v,p,job,jobs,results))
})();
var state__6779__auto__ = (function (){var statearr_17314 = f__6778__auto__.call(null);
(statearr_17314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17482);

return statearr_17314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___17482,res,vec__17300,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17315){
var vec__17316 = p__17315;
var v = cljs.core.nth.call(null,vec__17316,(0),null);
var p = cljs.core.nth.call(null,vec__17316,(1),null);
var job = vec__17316;
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
var n__4686__auto___17485 = n;
var __17486 = (0);
while(true){
if((__17486 < n__4686__auto___17485)){
var G__17317_17487 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17317_17487) {
case "async":
var c__6777__auto___17489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17486,c__6777__auto___17489,G__17317_17487,n__4686__auto___17485,jobs,results,process,async){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (__17486,c__6777__auto___17489,G__17317_17487,n__4686__auto___17485,jobs,results,process,async){
return (function (state_17330){
var state_val_17331 = (state_17330[(1)]);
if((state_val_17331 === (7))){
var inst_17326 = (state_17330[(2)]);
var state_17330__$1 = state_17330;
var statearr_17332_17490 = state_17330__$1;
(statearr_17332_17490[(2)] = inst_17326);

(statearr_17332_17490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (6))){
var state_17330__$1 = state_17330;
var statearr_17333_17491 = state_17330__$1;
(statearr_17333_17491[(2)] = null);

(statearr_17333_17491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (5))){
var state_17330__$1 = state_17330;
var statearr_17334_17492 = state_17330__$1;
(statearr_17334_17492[(2)] = null);

(statearr_17334_17492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (4))){
var inst_17320 = (state_17330[(2)]);
var inst_17321 = async.call(null,inst_17320);
var state_17330__$1 = state_17330;
if(cljs.core.truth_(inst_17321)){
var statearr_17335_17493 = state_17330__$1;
(statearr_17335_17493[(1)] = (5));

} else {
var statearr_17336_17494 = state_17330__$1;
(statearr_17336_17494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (3))){
var inst_17328 = (state_17330[(2)]);
var state_17330__$1 = state_17330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17330__$1,inst_17328);
} else {
if((state_val_17331 === (2))){
var state_17330__$1 = state_17330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17330__$1,(4),jobs);
} else {
if((state_val_17331 === (1))){
var state_17330__$1 = state_17330;
var statearr_17337_17495 = state_17330__$1;
(statearr_17337_17495[(2)] = null);

(statearr_17337_17495[(1)] = (2));


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
});})(__17486,c__6777__auto___17489,G__17317_17487,n__4686__auto___17485,jobs,results,process,async))
;
return ((function (__17486,switch__6721__auto__,c__6777__auto___17489,G__17317_17487,n__4686__auto___17485,jobs,results,process,async){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17341 = [null,null,null,null,null,null,null];
(statearr_17341[(0)] = state_machine__6722__auto__);

(statearr_17341[(1)] = (1));

return statearr_17341;
});
var state_machine__6722__auto____1 = (function (state_17330){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17342){if((e17342 instanceof Object)){
var ex__6725__auto__ = e17342;
var statearr_17343_17496 = state_17330;
(statearr_17343_17496[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17497 = state_17330;
state_17330 = G__17497;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17330){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(__17486,switch__6721__auto__,c__6777__auto___17489,G__17317_17487,n__4686__auto___17485,jobs,results,process,async))
})();
var state__6779__auto__ = (function (){var statearr_17344 = f__6778__auto__.call(null);
(statearr_17344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17489);

return statearr_17344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(__17486,c__6777__auto___17489,G__17317_17487,n__4686__auto___17485,jobs,results,process,async))
);


break;
case "compute":
var c__6777__auto___17498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17486,c__6777__auto___17498,G__17317_17487,n__4686__auto___17485,jobs,results,process,async){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (__17486,c__6777__auto___17498,G__17317_17487,n__4686__auto___17485,jobs,results,process,async){
return (function (state_17357){
var state_val_17358 = (state_17357[(1)]);
if((state_val_17358 === (7))){
var inst_17353 = (state_17357[(2)]);
var state_17357__$1 = state_17357;
var statearr_17359_17499 = state_17357__$1;
(statearr_17359_17499[(2)] = inst_17353);

(statearr_17359_17499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17358 === (6))){
var state_17357__$1 = state_17357;
var statearr_17360_17500 = state_17357__$1;
(statearr_17360_17500[(2)] = null);

(statearr_17360_17500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17358 === (5))){
var state_17357__$1 = state_17357;
var statearr_17361_17501 = state_17357__$1;
(statearr_17361_17501[(2)] = null);

(statearr_17361_17501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17358 === (4))){
var inst_17347 = (state_17357[(2)]);
var inst_17348 = process.call(null,inst_17347);
var state_17357__$1 = state_17357;
if(cljs.core.truth_(inst_17348)){
var statearr_17362_17502 = state_17357__$1;
(statearr_17362_17502[(1)] = (5));

} else {
var statearr_17363_17503 = state_17357__$1;
(statearr_17363_17503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17358 === (3))){
var inst_17355 = (state_17357[(2)]);
var state_17357__$1 = state_17357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17357__$1,inst_17355);
} else {
if((state_val_17358 === (2))){
var state_17357__$1 = state_17357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17357__$1,(4),jobs);
} else {
if((state_val_17358 === (1))){
var state_17357__$1 = state_17357;
var statearr_17364_17504 = state_17357__$1;
(statearr_17364_17504[(2)] = null);

(statearr_17364_17504[(1)] = (2));


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
});})(__17486,c__6777__auto___17498,G__17317_17487,n__4686__auto___17485,jobs,results,process,async))
;
return ((function (__17486,switch__6721__auto__,c__6777__auto___17498,G__17317_17487,n__4686__auto___17485,jobs,results,process,async){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17368 = [null,null,null,null,null,null,null];
(statearr_17368[(0)] = state_machine__6722__auto__);

(statearr_17368[(1)] = (1));

return statearr_17368;
});
var state_machine__6722__auto____1 = (function (state_17357){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17369){if((e17369 instanceof Object)){
var ex__6725__auto__ = e17369;
var statearr_17370_17505 = state_17357;
(statearr_17370_17505[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17506 = state_17357;
state_17357 = G__17506;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17357){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(__17486,switch__6721__auto__,c__6777__auto___17498,G__17317_17487,n__4686__auto___17485,jobs,results,process,async))
})();
var state__6779__auto__ = (function (){var statearr_17371 = f__6778__auto__.call(null);
(statearr_17371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17498);

return statearr_17371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(__17486,c__6777__auto___17498,G__17317_17487,n__4686__auto___17485,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17507 = (__17486 + (1));
__17486 = G__17507;
continue;
} else {
}
break;
}

var c__6777__auto___17508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___17508,jobs,results,process,async){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___17508,jobs,results,process,async){
return (function (state_17393){
var state_val_17394 = (state_17393[(1)]);
if((state_val_17394 === (9))){
var inst_17386 = (state_17393[(2)]);
var state_17393__$1 = (function (){var statearr_17395 = state_17393;
(statearr_17395[(7)] = inst_17386);

return statearr_17395;
})();
var statearr_17396_17509 = state_17393__$1;
(statearr_17396_17509[(2)] = null);

(statearr_17396_17509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (8))){
var inst_17379 = (state_17393[(8)]);
var inst_17384 = (state_17393[(2)]);
var state_17393__$1 = (function (){var statearr_17397 = state_17393;
(statearr_17397[(9)] = inst_17384);

return statearr_17397;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17393__$1,(9),results,inst_17379);
} else {
if((state_val_17394 === (7))){
var inst_17389 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
var statearr_17398_17510 = state_17393__$1;
(statearr_17398_17510[(2)] = inst_17389);

(statearr_17398_17510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (6))){
var inst_17374 = (state_17393[(10)]);
var inst_17379 = (state_17393[(8)]);
var inst_17379__$1 = cljs.core.async.chan.call(null,(1));
var inst_17380 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17381 = [inst_17374,inst_17379__$1];
var inst_17382 = (new cljs.core.PersistentVector(null,2,(5),inst_17380,inst_17381,null));
var state_17393__$1 = (function (){var statearr_17399 = state_17393;
(statearr_17399[(8)] = inst_17379__$1);

return statearr_17399;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17393__$1,(8),jobs,inst_17382);
} else {
if((state_val_17394 === (5))){
var inst_17377 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17393__$1 = state_17393;
var statearr_17400_17511 = state_17393__$1;
(statearr_17400_17511[(2)] = inst_17377);

(statearr_17400_17511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (4))){
var inst_17374 = (state_17393[(10)]);
var inst_17374__$1 = (state_17393[(2)]);
var inst_17375 = (inst_17374__$1 == null);
var state_17393__$1 = (function (){var statearr_17401 = state_17393;
(statearr_17401[(10)] = inst_17374__$1);

return statearr_17401;
})();
if(cljs.core.truth_(inst_17375)){
var statearr_17402_17512 = state_17393__$1;
(statearr_17402_17512[(1)] = (5));

} else {
var statearr_17403_17513 = state_17393__$1;
(statearr_17403_17513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (3))){
var inst_17391 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17393__$1,inst_17391);
} else {
if((state_val_17394 === (2))){
var state_17393__$1 = state_17393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17393__$1,(4),from);
} else {
if((state_val_17394 === (1))){
var state_17393__$1 = state_17393;
var statearr_17404_17514 = state_17393__$1;
(statearr_17404_17514[(2)] = null);

(statearr_17404_17514[(1)] = (2));


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
});})(c__6777__auto___17508,jobs,results,process,async))
;
return ((function (switch__6721__auto__,c__6777__auto___17508,jobs,results,process,async){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17408 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17408[(0)] = state_machine__6722__auto__);

(statearr_17408[(1)] = (1));

return statearr_17408;
});
var state_machine__6722__auto____1 = (function (state_17393){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17409){if((e17409 instanceof Object)){
var ex__6725__auto__ = e17409;
var statearr_17410_17515 = state_17393;
(statearr_17410_17515[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17516 = state_17393;
state_17393 = G__17516;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17393){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___17508,jobs,results,process,async))
})();
var state__6779__auto__ = (function (){var statearr_17411 = f__6778__auto__.call(null);
(statearr_17411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17508);

return statearr_17411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___17508,jobs,results,process,async))
);


var c__6777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto__,jobs,results,process,async){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto__,jobs,results,process,async){
return (function (state_17449){
var state_val_17450 = (state_17449[(1)]);
if((state_val_17450 === (7))){
var inst_17445 = (state_17449[(2)]);
var state_17449__$1 = state_17449;
var statearr_17451_17517 = state_17449__$1;
(statearr_17451_17517[(2)] = inst_17445);

(statearr_17451_17517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (20))){
var state_17449__$1 = state_17449;
var statearr_17452_17518 = state_17449__$1;
(statearr_17452_17518[(2)] = null);

(statearr_17452_17518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (1))){
var state_17449__$1 = state_17449;
var statearr_17453_17519 = state_17449__$1;
(statearr_17453_17519[(2)] = null);

(statearr_17453_17519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (4))){
var inst_17414 = (state_17449[(7)]);
var inst_17414__$1 = (state_17449[(2)]);
var inst_17415 = (inst_17414__$1 == null);
var state_17449__$1 = (function (){var statearr_17454 = state_17449;
(statearr_17454[(7)] = inst_17414__$1);

return statearr_17454;
})();
if(cljs.core.truth_(inst_17415)){
var statearr_17455_17520 = state_17449__$1;
(statearr_17455_17520[(1)] = (5));

} else {
var statearr_17456_17521 = state_17449__$1;
(statearr_17456_17521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (15))){
var inst_17427 = (state_17449[(8)]);
var state_17449__$1 = state_17449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17449__$1,(18),to,inst_17427);
} else {
if((state_val_17450 === (21))){
var inst_17440 = (state_17449[(2)]);
var state_17449__$1 = state_17449;
var statearr_17457_17522 = state_17449__$1;
(statearr_17457_17522[(2)] = inst_17440);

(statearr_17457_17522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (13))){
var inst_17442 = (state_17449[(2)]);
var state_17449__$1 = (function (){var statearr_17458 = state_17449;
(statearr_17458[(9)] = inst_17442);

return statearr_17458;
})();
var statearr_17459_17523 = state_17449__$1;
(statearr_17459_17523[(2)] = null);

(statearr_17459_17523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (6))){
var inst_17414 = (state_17449[(7)]);
var state_17449__$1 = state_17449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17449__$1,(11),inst_17414);
} else {
if((state_val_17450 === (17))){
var inst_17435 = (state_17449[(2)]);
var state_17449__$1 = state_17449;
if(cljs.core.truth_(inst_17435)){
var statearr_17460_17524 = state_17449__$1;
(statearr_17460_17524[(1)] = (19));

} else {
var statearr_17461_17525 = state_17449__$1;
(statearr_17461_17525[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (3))){
var inst_17447 = (state_17449[(2)]);
var state_17449__$1 = state_17449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17449__$1,inst_17447);
} else {
if((state_val_17450 === (12))){
var inst_17424 = (state_17449[(10)]);
var state_17449__$1 = state_17449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17449__$1,(14),inst_17424);
} else {
if((state_val_17450 === (2))){
var state_17449__$1 = state_17449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17449__$1,(4),results);
} else {
if((state_val_17450 === (19))){
var state_17449__$1 = state_17449;
var statearr_17462_17526 = state_17449__$1;
(statearr_17462_17526[(2)] = null);

(statearr_17462_17526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (11))){
var inst_17424 = (state_17449[(2)]);
var state_17449__$1 = (function (){var statearr_17463 = state_17449;
(statearr_17463[(10)] = inst_17424);

return statearr_17463;
})();
var statearr_17464_17527 = state_17449__$1;
(statearr_17464_17527[(2)] = null);

(statearr_17464_17527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (9))){
var state_17449__$1 = state_17449;
var statearr_17465_17528 = state_17449__$1;
(statearr_17465_17528[(2)] = null);

(statearr_17465_17528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (5))){
var state_17449__$1 = state_17449;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17466_17529 = state_17449__$1;
(statearr_17466_17529[(1)] = (8));

} else {
var statearr_17467_17530 = state_17449__$1;
(statearr_17467_17530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (14))){
var inst_17427 = (state_17449[(8)]);
var inst_17429 = (state_17449[(11)]);
var inst_17427__$1 = (state_17449[(2)]);
var inst_17428 = (inst_17427__$1 == null);
var inst_17429__$1 = cljs.core.not.call(null,inst_17428);
var state_17449__$1 = (function (){var statearr_17468 = state_17449;
(statearr_17468[(8)] = inst_17427__$1);

(statearr_17468[(11)] = inst_17429__$1);

return statearr_17468;
})();
if(inst_17429__$1){
var statearr_17469_17531 = state_17449__$1;
(statearr_17469_17531[(1)] = (15));

} else {
var statearr_17470_17532 = state_17449__$1;
(statearr_17470_17532[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (16))){
var inst_17429 = (state_17449[(11)]);
var state_17449__$1 = state_17449;
var statearr_17471_17533 = state_17449__$1;
(statearr_17471_17533[(2)] = inst_17429);

(statearr_17471_17533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (10))){
var inst_17421 = (state_17449[(2)]);
var state_17449__$1 = state_17449;
var statearr_17472_17534 = state_17449__$1;
(statearr_17472_17534[(2)] = inst_17421);

(statearr_17472_17534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (18))){
var inst_17432 = (state_17449[(2)]);
var state_17449__$1 = state_17449;
var statearr_17473_17535 = state_17449__$1;
(statearr_17473_17535[(2)] = inst_17432);

(statearr_17473_17535[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17450 === (8))){
var inst_17418 = cljs.core.async.close_BANG_.call(null,to);
var state_17449__$1 = state_17449;
var statearr_17474_17536 = state_17449__$1;
(statearr_17474_17536[(2)] = inst_17418);

(statearr_17474_17536[(1)] = (10));


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
});})(c__6777__auto__,jobs,results,process,async))
;
return ((function (switch__6721__auto__,c__6777__auto__,jobs,results,process,async){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17478 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17478[(0)] = state_machine__6722__auto__);

(statearr_17478[(1)] = (1));

return statearr_17478;
});
var state_machine__6722__auto____1 = (function (state_17449){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17479){if((e17479 instanceof Object)){
var ex__6725__auto__ = e17479;
var statearr_17480_17537 = state_17449;
(statearr_17480_17537[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17538 = state_17449;
state_17449 = G__17538;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17449){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__,jobs,results,process,async))
})();
var state__6779__auto__ = (function (){var statearr_17481 = f__6778__auto__.call(null);
(statearr_17481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_17481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto__,jobs,results,process,async))
);

return c__6777__auto__;
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
var c__6777__auto___17639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___17639,tc,fc){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___17639,tc,fc){
return (function (state_17614){
var state_val_17615 = (state_17614[(1)]);
if((state_val_17615 === (7))){
var inst_17610 = (state_17614[(2)]);
var state_17614__$1 = state_17614;
var statearr_17616_17640 = state_17614__$1;
(statearr_17616_17640[(2)] = inst_17610);

(statearr_17616_17640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (1))){
var state_17614__$1 = state_17614;
var statearr_17617_17641 = state_17614__$1;
(statearr_17617_17641[(2)] = null);

(statearr_17617_17641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (4))){
var inst_17591 = (state_17614[(7)]);
var inst_17591__$1 = (state_17614[(2)]);
var inst_17592 = (inst_17591__$1 == null);
var state_17614__$1 = (function (){var statearr_17618 = state_17614;
(statearr_17618[(7)] = inst_17591__$1);

return statearr_17618;
})();
if(cljs.core.truth_(inst_17592)){
var statearr_17619_17642 = state_17614__$1;
(statearr_17619_17642[(1)] = (5));

} else {
var statearr_17620_17643 = state_17614__$1;
(statearr_17620_17643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (13))){
var state_17614__$1 = state_17614;
var statearr_17621_17644 = state_17614__$1;
(statearr_17621_17644[(2)] = null);

(statearr_17621_17644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (6))){
var inst_17591 = (state_17614[(7)]);
var inst_17597 = p.call(null,inst_17591);
var state_17614__$1 = state_17614;
if(cljs.core.truth_(inst_17597)){
var statearr_17622_17645 = state_17614__$1;
(statearr_17622_17645[(1)] = (9));

} else {
var statearr_17623_17646 = state_17614__$1;
(statearr_17623_17646[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (3))){
var inst_17612 = (state_17614[(2)]);
var state_17614__$1 = state_17614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17614__$1,inst_17612);
} else {
if((state_val_17615 === (12))){
var state_17614__$1 = state_17614;
var statearr_17624_17647 = state_17614__$1;
(statearr_17624_17647[(2)] = null);

(statearr_17624_17647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (2))){
var state_17614__$1 = state_17614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17614__$1,(4),ch);
} else {
if((state_val_17615 === (11))){
var inst_17591 = (state_17614[(7)]);
var inst_17601 = (state_17614[(2)]);
var state_17614__$1 = state_17614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17614__$1,(8),inst_17601,inst_17591);
} else {
if((state_val_17615 === (9))){
var state_17614__$1 = state_17614;
var statearr_17625_17648 = state_17614__$1;
(statearr_17625_17648[(2)] = tc);

(statearr_17625_17648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (5))){
var inst_17594 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17595 = cljs.core.async.close_BANG_.call(null,fc);
var state_17614__$1 = (function (){var statearr_17626 = state_17614;
(statearr_17626[(8)] = inst_17594);

return statearr_17626;
})();
var statearr_17627_17649 = state_17614__$1;
(statearr_17627_17649[(2)] = inst_17595);

(statearr_17627_17649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (14))){
var inst_17608 = (state_17614[(2)]);
var state_17614__$1 = state_17614;
var statearr_17628_17650 = state_17614__$1;
(statearr_17628_17650[(2)] = inst_17608);

(statearr_17628_17650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (10))){
var state_17614__$1 = state_17614;
var statearr_17629_17651 = state_17614__$1;
(statearr_17629_17651[(2)] = fc);

(statearr_17629_17651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17615 === (8))){
var inst_17603 = (state_17614[(2)]);
var state_17614__$1 = state_17614;
if(cljs.core.truth_(inst_17603)){
var statearr_17630_17652 = state_17614__$1;
(statearr_17630_17652[(1)] = (12));

} else {
var statearr_17631_17653 = state_17614__$1;
(statearr_17631_17653[(1)] = (13));

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
});})(c__6777__auto___17639,tc,fc))
;
return ((function (switch__6721__auto__,c__6777__auto___17639,tc,fc){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17635 = [null,null,null,null,null,null,null,null,null];
(statearr_17635[(0)] = state_machine__6722__auto__);

(statearr_17635[(1)] = (1));

return statearr_17635;
});
var state_machine__6722__auto____1 = (function (state_17614){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17636){if((e17636 instanceof Object)){
var ex__6725__auto__ = e17636;
var statearr_17637_17654 = state_17614;
(statearr_17637_17654[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17655 = state_17614;
state_17614 = G__17655;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17614){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___17639,tc,fc))
})();
var state__6779__auto__ = (function (){var statearr_17638 = f__6778__auto__.call(null);
(statearr_17638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17639);

return statearr_17638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___17639,tc,fc))
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
var c__6777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto__){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto__){
return (function (state_17702){
var state_val_17703 = (state_17702[(1)]);
if((state_val_17703 === (7))){
var inst_17698 = (state_17702[(2)]);
var state_17702__$1 = state_17702;
var statearr_17704_17720 = state_17702__$1;
(statearr_17704_17720[(2)] = inst_17698);

(statearr_17704_17720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (6))){
var inst_17691 = (state_17702[(7)]);
var inst_17688 = (state_17702[(8)]);
var inst_17695 = f.call(null,inst_17688,inst_17691);
var inst_17688__$1 = inst_17695;
var state_17702__$1 = (function (){var statearr_17705 = state_17702;
(statearr_17705[(8)] = inst_17688__$1);

return statearr_17705;
})();
var statearr_17706_17721 = state_17702__$1;
(statearr_17706_17721[(2)] = null);

(statearr_17706_17721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (5))){
var inst_17688 = (state_17702[(8)]);
var state_17702__$1 = state_17702;
var statearr_17707_17722 = state_17702__$1;
(statearr_17707_17722[(2)] = inst_17688);

(statearr_17707_17722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (4))){
var inst_17691 = (state_17702[(7)]);
var inst_17691__$1 = (state_17702[(2)]);
var inst_17692 = (inst_17691__$1 == null);
var state_17702__$1 = (function (){var statearr_17708 = state_17702;
(statearr_17708[(7)] = inst_17691__$1);

return statearr_17708;
})();
if(cljs.core.truth_(inst_17692)){
var statearr_17709_17723 = state_17702__$1;
(statearr_17709_17723[(1)] = (5));

} else {
var statearr_17710_17724 = state_17702__$1;
(statearr_17710_17724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (3))){
var inst_17700 = (state_17702[(2)]);
var state_17702__$1 = state_17702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17702__$1,inst_17700);
} else {
if((state_val_17703 === (2))){
var state_17702__$1 = state_17702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17702__$1,(4),ch);
} else {
if((state_val_17703 === (1))){
var inst_17688 = init;
var state_17702__$1 = (function (){var statearr_17711 = state_17702;
(statearr_17711[(8)] = inst_17688);

return statearr_17711;
})();
var statearr_17712_17725 = state_17702__$1;
(statearr_17712_17725[(2)] = null);

(statearr_17712_17725[(1)] = (2));


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
});})(c__6777__auto__))
;
return ((function (switch__6721__auto__,c__6777__auto__){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17716 = [null,null,null,null,null,null,null,null,null];
(statearr_17716[(0)] = state_machine__6722__auto__);

(statearr_17716[(1)] = (1));

return statearr_17716;
});
var state_machine__6722__auto____1 = (function (state_17702){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17717){if((e17717 instanceof Object)){
var ex__6725__auto__ = e17717;
var statearr_17718_17726 = state_17702;
(statearr_17718_17726[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17727 = state_17702;
state_17702 = G__17727;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17702){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__))
})();
var state__6779__auto__ = (function (){var statearr_17719 = f__6778__auto__.call(null);
(statearr_17719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_17719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto__))
);

return c__6777__auto__;
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
var c__6777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto__){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto__){
return (function (state_17801){
var state_val_17802 = (state_17801[(1)]);
if((state_val_17802 === (7))){
var inst_17783 = (state_17801[(2)]);
var state_17801__$1 = state_17801;
var statearr_17803_17826 = state_17801__$1;
(statearr_17803_17826[(2)] = inst_17783);

(statearr_17803_17826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (1))){
var inst_17777 = cljs.core.seq.call(null,coll);
var inst_17778 = inst_17777;
var state_17801__$1 = (function (){var statearr_17804 = state_17801;
(statearr_17804[(7)] = inst_17778);

return statearr_17804;
})();
var statearr_17805_17827 = state_17801__$1;
(statearr_17805_17827[(2)] = null);

(statearr_17805_17827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (4))){
var inst_17778 = (state_17801[(7)]);
var inst_17781 = cljs.core.first.call(null,inst_17778);
var state_17801__$1 = state_17801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17801__$1,(7),ch,inst_17781);
} else {
if((state_val_17802 === (13))){
var inst_17795 = (state_17801[(2)]);
var state_17801__$1 = state_17801;
var statearr_17806_17828 = state_17801__$1;
(statearr_17806_17828[(2)] = inst_17795);

(statearr_17806_17828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (6))){
var inst_17786 = (state_17801[(2)]);
var state_17801__$1 = state_17801;
if(cljs.core.truth_(inst_17786)){
var statearr_17807_17829 = state_17801__$1;
(statearr_17807_17829[(1)] = (8));

} else {
var statearr_17808_17830 = state_17801__$1;
(statearr_17808_17830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (3))){
var inst_17799 = (state_17801[(2)]);
var state_17801__$1 = state_17801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17801__$1,inst_17799);
} else {
if((state_val_17802 === (12))){
var state_17801__$1 = state_17801;
var statearr_17809_17831 = state_17801__$1;
(statearr_17809_17831[(2)] = null);

(statearr_17809_17831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (2))){
var inst_17778 = (state_17801[(7)]);
var state_17801__$1 = state_17801;
if(cljs.core.truth_(inst_17778)){
var statearr_17810_17832 = state_17801__$1;
(statearr_17810_17832[(1)] = (4));

} else {
var statearr_17811_17833 = state_17801__$1;
(statearr_17811_17833[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (11))){
var inst_17792 = cljs.core.async.close_BANG_.call(null,ch);
var state_17801__$1 = state_17801;
var statearr_17812_17834 = state_17801__$1;
(statearr_17812_17834[(2)] = inst_17792);

(statearr_17812_17834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (9))){
var state_17801__$1 = state_17801;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17813_17835 = state_17801__$1;
(statearr_17813_17835[(1)] = (11));

} else {
var statearr_17814_17836 = state_17801__$1;
(statearr_17814_17836[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (5))){
var inst_17778 = (state_17801[(7)]);
var state_17801__$1 = state_17801;
var statearr_17815_17837 = state_17801__$1;
(statearr_17815_17837[(2)] = inst_17778);

(statearr_17815_17837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (10))){
var inst_17797 = (state_17801[(2)]);
var state_17801__$1 = state_17801;
var statearr_17816_17838 = state_17801__$1;
(statearr_17816_17838[(2)] = inst_17797);

(statearr_17816_17838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (8))){
var inst_17778 = (state_17801[(7)]);
var inst_17788 = cljs.core.next.call(null,inst_17778);
var inst_17778__$1 = inst_17788;
var state_17801__$1 = (function (){var statearr_17817 = state_17801;
(statearr_17817[(7)] = inst_17778__$1);

return statearr_17817;
})();
var statearr_17818_17839 = state_17801__$1;
(statearr_17818_17839[(2)] = null);

(statearr_17818_17839[(1)] = (2));


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
});})(c__6777__auto__))
;
return ((function (switch__6721__auto__,c__6777__auto__){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17822 = [null,null,null,null,null,null,null,null];
(statearr_17822[(0)] = state_machine__6722__auto__);

(statearr_17822[(1)] = (1));

return statearr_17822;
});
var state_machine__6722__auto____1 = (function (state_17801){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17823){if((e17823 instanceof Object)){
var ex__6725__auto__ = e17823;
var statearr_17824_17840 = state_17801;
(statearr_17824_17840[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17841 = state_17801;
state_17801 = G__17841;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17801){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__))
})();
var state__6779__auto__ = (function (){var statearr_17825 = f__6778__auto__.call(null);
(statearr_17825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_17825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto__))
);

return c__6777__auto__;
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

cljs.core.async.Mux = (function (){var obj17843 = {};
return obj17843;
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


cljs.core.async.Mult = (function (){var obj17845 = {};
return obj17845;
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
if(typeof cljs.core.async.t18067 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18067 = (function (cs,ch,mult,meta18068){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18068 = meta18068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18067.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18067.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18067.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18067.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t18067.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18069){
var self__ = this;
var _18069__$1 = this;
return self__.meta18068;
});})(cs))
;

cljs.core.async.t18067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18069,meta18068__$1){
var self__ = this;
var _18069__$1 = this;
return (new cljs.core.async.t18067(self__.cs,self__.ch,self__.mult,meta18068__$1));
});})(cs))
;

cljs.core.async.t18067.cljs$lang$type = true;

cljs.core.async.t18067.cljs$lang$ctorStr = "cljs.core.async/t18067";

cljs.core.async.t18067.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t18067");
});})(cs))
;

cljs.core.async.__GT_t18067 = ((function (cs){
return (function __GT_t18067(cs__$1,ch__$1,mult__$1,meta18068){
return (new cljs.core.async.t18067(cs__$1,ch__$1,mult__$1,meta18068));
});})(cs))
;

}

return (new cljs.core.async.t18067(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var c__6777__auto___18288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___18288,cs,m,dchan,dctr,done){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___18288,cs,m,dchan,dctr,done){
return (function (state_18200){
var state_val_18201 = (state_18200[(1)]);
if((state_val_18201 === (7))){
var inst_18196 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18202_18289 = state_18200__$1;
(statearr_18202_18289[(2)] = inst_18196);

(statearr_18202_18289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (20))){
var inst_18101 = (state_18200[(7)]);
var inst_18111 = cljs.core.first.call(null,inst_18101);
var inst_18112 = cljs.core.nth.call(null,inst_18111,(0),null);
var inst_18113 = cljs.core.nth.call(null,inst_18111,(1),null);
var state_18200__$1 = (function (){var statearr_18203 = state_18200;
(statearr_18203[(8)] = inst_18112);

return statearr_18203;
})();
if(cljs.core.truth_(inst_18113)){
var statearr_18204_18290 = state_18200__$1;
(statearr_18204_18290[(1)] = (22));

} else {
var statearr_18205_18291 = state_18200__$1;
(statearr_18205_18291[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (27))){
var inst_18148 = (state_18200[(9)]);
var inst_18141 = (state_18200[(10)]);
var inst_18072 = (state_18200[(11)]);
var inst_18143 = (state_18200[(12)]);
var inst_18148__$1 = cljs.core._nth.call(null,inst_18141,inst_18143);
var inst_18149 = cljs.core.async.put_BANG_.call(null,inst_18148__$1,inst_18072,done);
var state_18200__$1 = (function (){var statearr_18206 = state_18200;
(statearr_18206[(9)] = inst_18148__$1);

return statearr_18206;
})();
if(cljs.core.truth_(inst_18149)){
var statearr_18207_18292 = state_18200__$1;
(statearr_18207_18292[(1)] = (30));

} else {
var statearr_18208_18293 = state_18200__$1;
(statearr_18208_18293[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (1))){
var state_18200__$1 = state_18200;
var statearr_18209_18294 = state_18200__$1;
(statearr_18209_18294[(2)] = null);

(statearr_18209_18294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (24))){
var inst_18101 = (state_18200[(7)]);
var inst_18118 = (state_18200[(2)]);
var inst_18119 = cljs.core.next.call(null,inst_18101);
var inst_18081 = inst_18119;
var inst_18082 = null;
var inst_18083 = (0);
var inst_18084 = (0);
var state_18200__$1 = (function (){var statearr_18210 = state_18200;
(statearr_18210[(13)] = inst_18118);

(statearr_18210[(14)] = inst_18084);

(statearr_18210[(15)] = inst_18083);

(statearr_18210[(16)] = inst_18081);

(statearr_18210[(17)] = inst_18082);

return statearr_18210;
})();
var statearr_18211_18295 = state_18200__$1;
(statearr_18211_18295[(2)] = null);

(statearr_18211_18295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (39))){
var state_18200__$1 = state_18200;
var statearr_18215_18296 = state_18200__$1;
(statearr_18215_18296[(2)] = null);

(statearr_18215_18296[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (4))){
var inst_18072 = (state_18200[(11)]);
var inst_18072__$1 = (state_18200[(2)]);
var inst_18073 = (inst_18072__$1 == null);
var state_18200__$1 = (function (){var statearr_18216 = state_18200;
(statearr_18216[(11)] = inst_18072__$1);

return statearr_18216;
})();
if(cljs.core.truth_(inst_18073)){
var statearr_18217_18297 = state_18200__$1;
(statearr_18217_18297[(1)] = (5));

} else {
var statearr_18218_18298 = state_18200__$1;
(statearr_18218_18298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (15))){
var inst_18084 = (state_18200[(14)]);
var inst_18083 = (state_18200[(15)]);
var inst_18081 = (state_18200[(16)]);
var inst_18082 = (state_18200[(17)]);
var inst_18097 = (state_18200[(2)]);
var inst_18098 = (inst_18084 + (1));
var tmp18212 = inst_18083;
var tmp18213 = inst_18081;
var tmp18214 = inst_18082;
var inst_18081__$1 = tmp18213;
var inst_18082__$1 = tmp18214;
var inst_18083__$1 = tmp18212;
var inst_18084__$1 = inst_18098;
var state_18200__$1 = (function (){var statearr_18219 = state_18200;
(statearr_18219[(14)] = inst_18084__$1);

(statearr_18219[(18)] = inst_18097);

(statearr_18219[(15)] = inst_18083__$1);

(statearr_18219[(16)] = inst_18081__$1);

(statearr_18219[(17)] = inst_18082__$1);

return statearr_18219;
})();
var statearr_18220_18299 = state_18200__$1;
(statearr_18220_18299[(2)] = null);

(statearr_18220_18299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (21))){
var inst_18122 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18224_18300 = state_18200__$1;
(statearr_18224_18300[(2)] = inst_18122);

(statearr_18224_18300[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (31))){
var inst_18148 = (state_18200[(9)]);
var inst_18152 = done.call(null,null);
var inst_18153 = cljs.core.async.untap_STAR_.call(null,m,inst_18148);
var state_18200__$1 = (function (){var statearr_18225 = state_18200;
(statearr_18225[(19)] = inst_18152);

return statearr_18225;
})();
var statearr_18226_18301 = state_18200__$1;
(statearr_18226_18301[(2)] = inst_18153);

(statearr_18226_18301[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (32))){
var inst_18142 = (state_18200[(20)]);
var inst_18141 = (state_18200[(10)]);
var inst_18140 = (state_18200[(21)]);
var inst_18143 = (state_18200[(12)]);
var inst_18155 = (state_18200[(2)]);
var inst_18156 = (inst_18143 + (1));
var tmp18221 = inst_18142;
var tmp18222 = inst_18141;
var tmp18223 = inst_18140;
var inst_18140__$1 = tmp18223;
var inst_18141__$1 = tmp18222;
var inst_18142__$1 = tmp18221;
var inst_18143__$1 = inst_18156;
var state_18200__$1 = (function (){var statearr_18227 = state_18200;
(statearr_18227[(20)] = inst_18142__$1);

(statearr_18227[(10)] = inst_18141__$1);

(statearr_18227[(21)] = inst_18140__$1);

(statearr_18227[(22)] = inst_18155);

(statearr_18227[(12)] = inst_18143__$1);

return statearr_18227;
})();
var statearr_18228_18302 = state_18200__$1;
(statearr_18228_18302[(2)] = null);

(statearr_18228_18302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (40))){
var inst_18168 = (state_18200[(23)]);
var inst_18172 = done.call(null,null);
var inst_18173 = cljs.core.async.untap_STAR_.call(null,m,inst_18168);
var state_18200__$1 = (function (){var statearr_18229 = state_18200;
(statearr_18229[(24)] = inst_18172);

return statearr_18229;
})();
var statearr_18230_18303 = state_18200__$1;
(statearr_18230_18303[(2)] = inst_18173);

(statearr_18230_18303[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (33))){
var inst_18159 = (state_18200[(25)]);
var inst_18161 = cljs.core.chunked_seq_QMARK_.call(null,inst_18159);
var state_18200__$1 = state_18200;
if(inst_18161){
var statearr_18231_18304 = state_18200__$1;
(statearr_18231_18304[(1)] = (36));

} else {
var statearr_18232_18305 = state_18200__$1;
(statearr_18232_18305[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (13))){
var inst_18091 = (state_18200[(26)]);
var inst_18094 = cljs.core.async.close_BANG_.call(null,inst_18091);
var state_18200__$1 = state_18200;
var statearr_18233_18306 = state_18200__$1;
(statearr_18233_18306[(2)] = inst_18094);

(statearr_18233_18306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (22))){
var inst_18112 = (state_18200[(8)]);
var inst_18115 = cljs.core.async.close_BANG_.call(null,inst_18112);
var state_18200__$1 = state_18200;
var statearr_18234_18307 = state_18200__$1;
(statearr_18234_18307[(2)] = inst_18115);

(statearr_18234_18307[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (36))){
var inst_18159 = (state_18200[(25)]);
var inst_18163 = cljs.core.chunk_first.call(null,inst_18159);
var inst_18164 = cljs.core.chunk_rest.call(null,inst_18159);
var inst_18165 = cljs.core.count.call(null,inst_18163);
var inst_18140 = inst_18164;
var inst_18141 = inst_18163;
var inst_18142 = inst_18165;
var inst_18143 = (0);
var state_18200__$1 = (function (){var statearr_18235 = state_18200;
(statearr_18235[(20)] = inst_18142);

(statearr_18235[(10)] = inst_18141);

(statearr_18235[(21)] = inst_18140);

(statearr_18235[(12)] = inst_18143);

return statearr_18235;
})();
var statearr_18236_18308 = state_18200__$1;
(statearr_18236_18308[(2)] = null);

(statearr_18236_18308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (41))){
var inst_18159 = (state_18200[(25)]);
var inst_18175 = (state_18200[(2)]);
var inst_18176 = cljs.core.next.call(null,inst_18159);
var inst_18140 = inst_18176;
var inst_18141 = null;
var inst_18142 = (0);
var inst_18143 = (0);
var state_18200__$1 = (function (){var statearr_18237 = state_18200;
(statearr_18237[(20)] = inst_18142);

(statearr_18237[(10)] = inst_18141);

(statearr_18237[(27)] = inst_18175);

(statearr_18237[(21)] = inst_18140);

(statearr_18237[(12)] = inst_18143);

return statearr_18237;
})();
var statearr_18238_18309 = state_18200__$1;
(statearr_18238_18309[(2)] = null);

(statearr_18238_18309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (43))){
var state_18200__$1 = state_18200;
var statearr_18239_18310 = state_18200__$1;
(statearr_18239_18310[(2)] = null);

(statearr_18239_18310[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (29))){
var inst_18184 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18240_18311 = state_18200__$1;
(statearr_18240_18311[(2)] = inst_18184);

(statearr_18240_18311[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (44))){
var inst_18193 = (state_18200[(2)]);
var state_18200__$1 = (function (){var statearr_18241 = state_18200;
(statearr_18241[(28)] = inst_18193);

return statearr_18241;
})();
var statearr_18242_18312 = state_18200__$1;
(statearr_18242_18312[(2)] = null);

(statearr_18242_18312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (6))){
var inst_18132 = (state_18200[(29)]);
var inst_18131 = cljs.core.deref.call(null,cs);
var inst_18132__$1 = cljs.core.keys.call(null,inst_18131);
var inst_18133 = cljs.core.count.call(null,inst_18132__$1);
var inst_18134 = cljs.core.reset_BANG_.call(null,dctr,inst_18133);
var inst_18139 = cljs.core.seq.call(null,inst_18132__$1);
var inst_18140 = inst_18139;
var inst_18141 = null;
var inst_18142 = (0);
var inst_18143 = (0);
var state_18200__$1 = (function (){var statearr_18243 = state_18200;
(statearr_18243[(30)] = inst_18134);

(statearr_18243[(20)] = inst_18142);

(statearr_18243[(10)] = inst_18141);

(statearr_18243[(29)] = inst_18132__$1);

(statearr_18243[(21)] = inst_18140);

(statearr_18243[(12)] = inst_18143);

return statearr_18243;
})();
var statearr_18244_18313 = state_18200__$1;
(statearr_18244_18313[(2)] = null);

(statearr_18244_18313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (28))){
var inst_18159 = (state_18200[(25)]);
var inst_18140 = (state_18200[(21)]);
var inst_18159__$1 = cljs.core.seq.call(null,inst_18140);
var state_18200__$1 = (function (){var statearr_18245 = state_18200;
(statearr_18245[(25)] = inst_18159__$1);

return statearr_18245;
})();
if(inst_18159__$1){
var statearr_18246_18314 = state_18200__$1;
(statearr_18246_18314[(1)] = (33));

} else {
var statearr_18247_18315 = state_18200__$1;
(statearr_18247_18315[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (25))){
var inst_18142 = (state_18200[(20)]);
var inst_18143 = (state_18200[(12)]);
var inst_18145 = (inst_18143 < inst_18142);
var inst_18146 = inst_18145;
var state_18200__$1 = state_18200;
if(cljs.core.truth_(inst_18146)){
var statearr_18248_18316 = state_18200__$1;
(statearr_18248_18316[(1)] = (27));

} else {
var statearr_18249_18317 = state_18200__$1;
(statearr_18249_18317[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (34))){
var state_18200__$1 = state_18200;
var statearr_18250_18318 = state_18200__$1;
(statearr_18250_18318[(2)] = null);

(statearr_18250_18318[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (17))){
var state_18200__$1 = state_18200;
var statearr_18251_18319 = state_18200__$1;
(statearr_18251_18319[(2)] = null);

(statearr_18251_18319[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (3))){
var inst_18198 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18200__$1,inst_18198);
} else {
if((state_val_18201 === (12))){
var inst_18127 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18252_18320 = state_18200__$1;
(statearr_18252_18320[(2)] = inst_18127);

(statearr_18252_18320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (2))){
var state_18200__$1 = state_18200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18200__$1,(4),ch);
} else {
if((state_val_18201 === (23))){
var state_18200__$1 = state_18200;
var statearr_18253_18321 = state_18200__$1;
(statearr_18253_18321[(2)] = null);

(statearr_18253_18321[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (35))){
var inst_18182 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18254_18322 = state_18200__$1;
(statearr_18254_18322[(2)] = inst_18182);

(statearr_18254_18322[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (19))){
var inst_18101 = (state_18200[(7)]);
var inst_18105 = cljs.core.chunk_first.call(null,inst_18101);
var inst_18106 = cljs.core.chunk_rest.call(null,inst_18101);
var inst_18107 = cljs.core.count.call(null,inst_18105);
var inst_18081 = inst_18106;
var inst_18082 = inst_18105;
var inst_18083 = inst_18107;
var inst_18084 = (0);
var state_18200__$1 = (function (){var statearr_18255 = state_18200;
(statearr_18255[(14)] = inst_18084);

(statearr_18255[(15)] = inst_18083);

(statearr_18255[(16)] = inst_18081);

(statearr_18255[(17)] = inst_18082);

return statearr_18255;
})();
var statearr_18256_18323 = state_18200__$1;
(statearr_18256_18323[(2)] = null);

(statearr_18256_18323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (11))){
var inst_18101 = (state_18200[(7)]);
var inst_18081 = (state_18200[(16)]);
var inst_18101__$1 = cljs.core.seq.call(null,inst_18081);
var state_18200__$1 = (function (){var statearr_18257 = state_18200;
(statearr_18257[(7)] = inst_18101__$1);

return statearr_18257;
})();
if(inst_18101__$1){
var statearr_18258_18324 = state_18200__$1;
(statearr_18258_18324[(1)] = (16));

} else {
var statearr_18259_18325 = state_18200__$1;
(statearr_18259_18325[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (9))){
var inst_18129 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18260_18326 = state_18200__$1;
(statearr_18260_18326[(2)] = inst_18129);

(statearr_18260_18326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (5))){
var inst_18079 = cljs.core.deref.call(null,cs);
var inst_18080 = cljs.core.seq.call(null,inst_18079);
var inst_18081 = inst_18080;
var inst_18082 = null;
var inst_18083 = (0);
var inst_18084 = (0);
var state_18200__$1 = (function (){var statearr_18261 = state_18200;
(statearr_18261[(14)] = inst_18084);

(statearr_18261[(15)] = inst_18083);

(statearr_18261[(16)] = inst_18081);

(statearr_18261[(17)] = inst_18082);

return statearr_18261;
})();
var statearr_18262_18327 = state_18200__$1;
(statearr_18262_18327[(2)] = null);

(statearr_18262_18327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (14))){
var state_18200__$1 = state_18200;
var statearr_18263_18328 = state_18200__$1;
(statearr_18263_18328[(2)] = null);

(statearr_18263_18328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (45))){
var inst_18190 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18264_18329 = state_18200__$1;
(statearr_18264_18329[(2)] = inst_18190);

(statearr_18264_18329[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (26))){
var inst_18132 = (state_18200[(29)]);
var inst_18186 = (state_18200[(2)]);
var inst_18187 = cljs.core.seq.call(null,inst_18132);
var state_18200__$1 = (function (){var statearr_18265 = state_18200;
(statearr_18265[(31)] = inst_18186);

return statearr_18265;
})();
if(inst_18187){
var statearr_18266_18330 = state_18200__$1;
(statearr_18266_18330[(1)] = (42));

} else {
var statearr_18267_18331 = state_18200__$1;
(statearr_18267_18331[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (16))){
var inst_18101 = (state_18200[(7)]);
var inst_18103 = cljs.core.chunked_seq_QMARK_.call(null,inst_18101);
var state_18200__$1 = state_18200;
if(inst_18103){
var statearr_18268_18332 = state_18200__$1;
(statearr_18268_18332[(1)] = (19));

} else {
var statearr_18269_18333 = state_18200__$1;
(statearr_18269_18333[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (38))){
var inst_18179 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18270_18334 = state_18200__$1;
(statearr_18270_18334[(2)] = inst_18179);

(statearr_18270_18334[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (30))){
var state_18200__$1 = state_18200;
var statearr_18271_18335 = state_18200__$1;
(statearr_18271_18335[(2)] = null);

(statearr_18271_18335[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (10))){
var inst_18084 = (state_18200[(14)]);
var inst_18082 = (state_18200[(17)]);
var inst_18090 = cljs.core._nth.call(null,inst_18082,inst_18084);
var inst_18091 = cljs.core.nth.call(null,inst_18090,(0),null);
var inst_18092 = cljs.core.nth.call(null,inst_18090,(1),null);
var state_18200__$1 = (function (){var statearr_18272 = state_18200;
(statearr_18272[(26)] = inst_18091);

return statearr_18272;
})();
if(cljs.core.truth_(inst_18092)){
var statearr_18273_18336 = state_18200__$1;
(statearr_18273_18336[(1)] = (13));

} else {
var statearr_18274_18337 = state_18200__$1;
(statearr_18274_18337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (18))){
var inst_18125 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18275_18338 = state_18200__$1;
(statearr_18275_18338[(2)] = inst_18125);

(statearr_18275_18338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (42))){
var state_18200__$1 = state_18200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18200__$1,(45),dchan);
} else {
if((state_val_18201 === (37))){
var inst_18159 = (state_18200[(25)]);
var inst_18072 = (state_18200[(11)]);
var inst_18168 = (state_18200[(23)]);
var inst_18168__$1 = cljs.core.first.call(null,inst_18159);
var inst_18169 = cljs.core.async.put_BANG_.call(null,inst_18168__$1,inst_18072,done);
var state_18200__$1 = (function (){var statearr_18276 = state_18200;
(statearr_18276[(23)] = inst_18168__$1);

return statearr_18276;
})();
if(cljs.core.truth_(inst_18169)){
var statearr_18277_18339 = state_18200__$1;
(statearr_18277_18339[(1)] = (39));

} else {
var statearr_18278_18340 = state_18200__$1;
(statearr_18278_18340[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18201 === (8))){
var inst_18084 = (state_18200[(14)]);
var inst_18083 = (state_18200[(15)]);
var inst_18086 = (inst_18084 < inst_18083);
var inst_18087 = inst_18086;
var state_18200__$1 = state_18200;
if(cljs.core.truth_(inst_18087)){
var statearr_18279_18341 = state_18200__$1;
(statearr_18279_18341[(1)] = (10));

} else {
var statearr_18280_18342 = state_18200__$1;
(statearr_18280_18342[(1)] = (11));

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
});})(c__6777__auto___18288,cs,m,dchan,dctr,done))
;
return ((function (switch__6721__auto__,c__6777__auto___18288,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_18284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18284[(0)] = state_machine__6722__auto__);

(statearr_18284[(1)] = (1));

return statearr_18284;
});
var state_machine__6722__auto____1 = (function (state_18200){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_18200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e18285){if((e18285 instanceof Object)){
var ex__6725__auto__ = e18285;
var statearr_18286_18343 = state_18200;
(statearr_18286_18343[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18344 = state_18200;
state_18200 = G__18344;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_18200){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_18200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___18288,cs,m,dchan,dctr,done))
})();
var state__6779__auto__ = (function (){var statearr_18287 = f__6778__auto__.call(null);
(statearr_18287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___18288);

return statearr_18287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___18288,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj18346 = {};
return obj18346;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18347){
var map__18352 = p__18347;
var map__18352__$1 = ((cljs.core.seq_QMARK_.call(null,map__18352))?cljs.core.apply.call(null,cljs.core.hash_map,map__18352):map__18352);
var opts = map__18352__$1;
var statearr_18353_18356 = state;
(statearr_18353_18356[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18352,map__18352__$1,opts){
return (function (val){
var statearr_18354_18357 = state;
(statearr_18354_18357[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18352,map__18352__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18355_18358 = state;
(statearr_18355_18358[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18347 = null;
if (arguments.length > 3) {
var G__18359__i = 0, G__18359__a = new Array(arguments.length -  3);
while (G__18359__i < G__18359__a.length) {G__18359__a[G__18359__i] = arguments[G__18359__i + 3]; ++G__18359__i;}
  p__18347 = new cljs.core.IndexedSeq(G__18359__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18347);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18360){
var state = cljs.core.first(arglist__18360);
arglist__18360 = cljs.core.next(arglist__18360);
var cont_block = cljs.core.first(arglist__18360);
arglist__18360 = cljs.core.next(arglist__18360);
var ports = cljs.core.first(arglist__18360);
var p__18347 = cljs.core.rest(arglist__18360);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18347);
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
if(typeof cljs.core.async.t18480 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18480 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18481){
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
this.meta18481 = meta18481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18480.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18480.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18480.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18480.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18480.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18480.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18480.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18482){
var self__ = this;
var _18482__$1 = this;
return self__.meta18481;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18482,meta18481__$1){
var self__ = this;
var _18482__$1 = this;
return (new cljs.core.async.t18480(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18481__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18480.cljs$lang$type = true;

cljs.core.async.t18480.cljs$lang$ctorStr = "cljs.core.async/t18480";

cljs.core.async.t18480.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t18480");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18480 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18480(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18481){
return (new cljs.core.async.t18480(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18481));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18480(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var c__6777__auto___18599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___18599,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___18599,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18552){
var state_val_18553 = (state_18552[(1)]);
if((state_val_18553 === (7))){
var inst_18496 = (state_18552[(7)]);
var inst_18501 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18496);
var state_18552__$1 = state_18552;
var statearr_18554_18600 = state_18552__$1;
(statearr_18554_18600[(2)] = inst_18501);

(statearr_18554_18600[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (20))){
var inst_18511 = (state_18552[(8)]);
var state_18552__$1 = state_18552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18552__$1,(23),out,inst_18511);
} else {
if((state_val_18553 === (1))){
var inst_18486 = (state_18552[(9)]);
var inst_18486__$1 = calc_state.call(null);
var inst_18487 = cljs.core.seq_QMARK_.call(null,inst_18486__$1);
var state_18552__$1 = (function (){var statearr_18555 = state_18552;
(statearr_18555[(9)] = inst_18486__$1);

return statearr_18555;
})();
if(inst_18487){
var statearr_18556_18601 = state_18552__$1;
(statearr_18556_18601[(1)] = (2));

} else {
var statearr_18557_18602 = state_18552__$1;
(statearr_18557_18602[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (24))){
var inst_18504 = (state_18552[(10)]);
var inst_18496 = inst_18504;
var state_18552__$1 = (function (){var statearr_18558 = state_18552;
(statearr_18558[(7)] = inst_18496);

return statearr_18558;
})();
var statearr_18559_18603 = state_18552__$1;
(statearr_18559_18603[(2)] = null);

(statearr_18559_18603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (4))){
var inst_18486 = (state_18552[(9)]);
var inst_18492 = (state_18552[(2)]);
var inst_18493 = cljs.core.get.call(null,inst_18492,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18494 = cljs.core.get.call(null,inst_18492,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18495 = cljs.core.get.call(null,inst_18492,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18496 = inst_18486;
var state_18552__$1 = (function (){var statearr_18560 = state_18552;
(statearr_18560[(11)] = inst_18493);

(statearr_18560[(12)] = inst_18494);

(statearr_18560[(13)] = inst_18495);

(statearr_18560[(7)] = inst_18496);

return statearr_18560;
})();
var statearr_18561_18604 = state_18552__$1;
(statearr_18561_18604[(2)] = null);

(statearr_18561_18604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (15))){
var state_18552__$1 = state_18552;
var statearr_18562_18605 = state_18552__$1;
(statearr_18562_18605[(2)] = null);

(statearr_18562_18605[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (21))){
var inst_18504 = (state_18552[(10)]);
var inst_18496 = inst_18504;
var state_18552__$1 = (function (){var statearr_18563 = state_18552;
(statearr_18563[(7)] = inst_18496);

return statearr_18563;
})();
var statearr_18564_18606 = state_18552__$1;
(statearr_18564_18606[(2)] = null);

(statearr_18564_18606[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (13))){
var inst_18548 = (state_18552[(2)]);
var state_18552__$1 = state_18552;
var statearr_18565_18607 = state_18552__$1;
(statearr_18565_18607[(2)] = inst_18548);

(statearr_18565_18607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (22))){
var inst_18546 = (state_18552[(2)]);
var state_18552__$1 = state_18552;
var statearr_18566_18608 = state_18552__$1;
(statearr_18566_18608[(2)] = inst_18546);

(statearr_18566_18608[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (6))){
var inst_18550 = (state_18552[(2)]);
var state_18552__$1 = state_18552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18552__$1,inst_18550);
} else {
if((state_val_18553 === (25))){
var state_18552__$1 = state_18552;
var statearr_18567_18609 = state_18552__$1;
(statearr_18567_18609[(2)] = null);

(statearr_18567_18609[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (17))){
var inst_18526 = (state_18552[(14)]);
var state_18552__$1 = state_18552;
var statearr_18568_18610 = state_18552__$1;
(statearr_18568_18610[(2)] = inst_18526);

(statearr_18568_18610[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (3))){
var inst_18486 = (state_18552[(9)]);
var state_18552__$1 = state_18552;
var statearr_18569_18611 = state_18552__$1;
(statearr_18569_18611[(2)] = inst_18486);

(statearr_18569_18611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (12))){
var inst_18526 = (state_18552[(14)]);
var inst_18507 = (state_18552[(15)]);
var inst_18512 = (state_18552[(16)]);
var inst_18526__$1 = inst_18507.call(null,inst_18512);
var state_18552__$1 = (function (){var statearr_18570 = state_18552;
(statearr_18570[(14)] = inst_18526__$1);

return statearr_18570;
})();
if(cljs.core.truth_(inst_18526__$1)){
var statearr_18571_18612 = state_18552__$1;
(statearr_18571_18612[(1)] = (17));

} else {
var statearr_18572_18613 = state_18552__$1;
(statearr_18572_18613[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (2))){
var inst_18486 = (state_18552[(9)]);
var inst_18489 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18486);
var state_18552__$1 = state_18552;
var statearr_18573_18614 = state_18552__$1;
(statearr_18573_18614[(2)] = inst_18489);

(statearr_18573_18614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (23))){
var inst_18537 = (state_18552[(2)]);
var state_18552__$1 = state_18552;
if(cljs.core.truth_(inst_18537)){
var statearr_18574_18615 = state_18552__$1;
(statearr_18574_18615[(1)] = (24));

} else {
var statearr_18575_18616 = state_18552__$1;
(statearr_18575_18616[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (19))){
var inst_18534 = (state_18552[(2)]);
var state_18552__$1 = state_18552;
if(cljs.core.truth_(inst_18534)){
var statearr_18576_18617 = state_18552__$1;
(statearr_18576_18617[(1)] = (20));

} else {
var statearr_18577_18618 = state_18552__$1;
(statearr_18577_18618[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (11))){
var inst_18511 = (state_18552[(8)]);
var inst_18517 = (inst_18511 == null);
var state_18552__$1 = state_18552;
if(cljs.core.truth_(inst_18517)){
var statearr_18578_18619 = state_18552__$1;
(statearr_18578_18619[(1)] = (14));

} else {
var statearr_18579_18620 = state_18552__$1;
(statearr_18579_18620[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (9))){
var inst_18504 = (state_18552[(10)]);
var inst_18504__$1 = (state_18552[(2)]);
var inst_18505 = cljs.core.get.call(null,inst_18504__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18506 = cljs.core.get.call(null,inst_18504__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18507 = cljs.core.get.call(null,inst_18504__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18552__$1 = (function (){var statearr_18580 = state_18552;
(statearr_18580[(17)] = inst_18506);

(statearr_18580[(15)] = inst_18507);

(statearr_18580[(10)] = inst_18504__$1);

return statearr_18580;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18552__$1,(10),inst_18505);
} else {
if((state_val_18553 === (5))){
var inst_18496 = (state_18552[(7)]);
var inst_18499 = cljs.core.seq_QMARK_.call(null,inst_18496);
var state_18552__$1 = state_18552;
if(inst_18499){
var statearr_18581_18621 = state_18552__$1;
(statearr_18581_18621[(1)] = (7));

} else {
var statearr_18582_18622 = state_18552__$1;
(statearr_18582_18622[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (14))){
var inst_18512 = (state_18552[(16)]);
var inst_18519 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18512);
var state_18552__$1 = state_18552;
var statearr_18583_18623 = state_18552__$1;
(statearr_18583_18623[(2)] = inst_18519);

(statearr_18583_18623[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (26))){
var inst_18542 = (state_18552[(2)]);
var state_18552__$1 = state_18552;
var statearr_18584_18624 = state_18552__$1;
(statearr_18584_18624[(2)] = inst_18542);

(statearr_18584_18624[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (16))){
var inst_18522 = (state_18552[(2)]);
var inst_18523 = calc_state.call(null);
var inst_18496 = inst_18523;
var state_18552__$1 = (function (){var statearr_18585 = state_18552;
(statearr_18585[(18)] = inst_18522);

(statearr_18585[(7)] = inst_18496);

return statearr_18585;
})();
var statearr_18586_18625 = state_18552__$1;
(statearr_18586_18625[(2)] = null);

(statearr_18586_18625[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (10))){
var inst_18511 = (state_18552[(8)]);
var inst_18512 = (state_18552[(16)]);
var inst_18510 = (state_18552[(2)]);
var inst_18511__$1 = cljs.core.nth.call(null,inst_18510,(0),null);
var inst_18512__$1 = cljs.core.nth.call(null,inst_18510,(1),null);
var inst_18513 = (inst_18511__$1 == null);
var inst_18514 = cljs.core._EQ_.call(null,inst_18512__$1,change);
var inst_18515 = (inst_18513) || (inst_18514);
var state_18552__$1 = (function (){var statearr_18587 = state_18552;
(statearr_18587[(8)] = inst_18511__$1);

(statearr_18587[(16)] = inst_18512__$1);

return statearr_18587;
})();
if(cljs.core.truth_(inst_18515)){
var statearr_18588_18626 = state_18552__$1;
(statearr_18588_18626[(1)] = (11));

} else {
var statearr_18589_18627 = state_18552__$1;
(statearr_18589_18627[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (18))){
var inst_18506 = (state_18552[(17)]);
var inst_18507 = (state_18552[(15)]);
var inst_18512 = (state_18552[(16)]);
var inst_18529 = cljs.core.empty_QMARK_.call(null,inst_18507);
var inst_18530 = inst_18506.call(null,inst_18512);
var inst_18531 = cljs.core.not.call(null,inst_18530);
var inst_18532 = (inst_18529) && (inst_18531);
var state_18552__$1 = state_18552;
var statearr_18590_18628 = state_18552__$1;
(statearr_18590_18628[(2)] = inst_18532);

(statearr_18590_18628[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18553 === (8))){
var inst_18496 = (state_18552[(7)]);
var state_18552__$1 = state_18552;
var statearr_18591_18629 = state_18552__$1;
(statearr_18591_18629[(2)] = inst_18496);

(statearr_18591_18629[(1)] = (9));


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
});})(c__6777__auto___18599,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6721__auto__,c__6777__auto___18599,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_18595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18595[(0)] = state_machine__6722__auto__);

(statearr_18595[(1)] = (1));

return statearr_18595;
});
var state_machine__6722__auto____1 = (function (state_18552){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_18552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e18596){if((e18596 instanceof Object)){
var ex__6725__auto__ = e18596;
var statearr_18597_18630 = state_18552;
(statearr_18597_18630[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18631 = state_18552;
state_18552 = G__18631;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_18552){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_18552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___18599,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6779__auto__ = (function (){var statearr_18598 = f__6778__auto__.call(null);
(statearr_18598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___18599);

return statearr_18598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___18599,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18633 = {};
return obj18633;
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
return (function (p1__18634_SHARP_){
if(cljs.core.truth_(p1__18634_SHARP_.call(null,topic))){
return p1__18634_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18634_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3799__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18757 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18757 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18758){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18758 = meta18758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18757.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18757.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18757.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18757.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18757.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18759){
var self__ = this;
var _18759__$1 = this;
return self__.meta18758;
});})(mults,ensure_mult))
;

cljs.core.async.t18757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18759,meta18758__$1){
var self__ = this;
var _18759__$1 = this;
return (new cljs.core.async.t18757(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18758__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18757.cljs$lang$type = true;

cljs.core.async.t18757.cljs$lang$ctorStr = "cljs.core.async/t18757";

cljs.core.async.t18757.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t18757");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18757 = ((function (mults,ensure_mult){
return (function __GT_t18757(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18758){
return (new cljs.core.async.t18757(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18758));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18757(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var c__6777__auto___18879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___18879,mults,ensure_mult,p){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___18879,mults,ensure_mult,p){
return (function (state_18831){
var state_val_18832 = (state_18831[(1)]);
if((state_val_18832 === (7))){
var inst_18827 = (state_18831[(2)]);
var state_18831__$1 = state_18831;
var statearr_18833_18880 = state_18831__$1;
(statearr_18833_18880[(2)] = inst_18827);

(statearr_18833_18880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (20))){
var state_18831__$1 = state_18831;
var statearr_18834_18881 = state_18831__$1;
(statearr_18834_18881[(2)] = null);

(statearr_18834_18881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (1))){
var state_18831__$1 = state_18831;
var statearr_18835_18882 = state_18831__$1;
(statearr_18835_18882[(2)] = null);

(statearr_18835_18882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (24))){
var inst_18810 = (state_18831[(7)]);
var inst_18819 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18810);
var state_18831__$1 = state_18831;
var statearr_18836_18883 = state_18831__$1;
(statearr_18836_18883[(2)] = inst_18819);

(statearr_18836_18883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (4))){
var inst_18762 = (state_18831[(8)]);
var inst_18762__$1 = (state_18831[(2)]);
var inst_18763 = (inst_18762__$1 == null);
var state_18831__$1 = (function (){var statearr_18837 = state_18831;
(statearr_18837[(8)] = inst_18762__$1);

return statearr_18837;
})();
if(cljs.core.truth_(inst_18763)){
var statearr_18838_18884 = state_18831__$1;
(statearr_18838_18884[(1)] = (5));

} else {
var statearr_18839_18885 = state_18831__$1;
(statearr_18839_18885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (15))){
var inst_18804 = (state_18831[(2)]);
var state_18831__$1 = state_18831;
var statearr_18840_18886 = state_18831__$1;
(statearr_18840_18886[(2)] = inst_18804);

(statearr_18840_18886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (21))){
var inst_18824 = (state_18831[(2)]);
var state_18831__$1 = (function (){var statearr_18841 = state_18831;
(statearr_18841[(9)] = inst_18824);

return statearr_18841;
})();
var statearr_18842_18887 = state_18831__$1;
(statearr_18842_18887[(2)] = null);

(statearr_18842_18887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (13))){
var inst_18786 = (state_18831[(10)]);
var inst_18788 = cljs.core.chunked_seq_QMARK_.call(null,inst_18786);
var state_18831__$1 = state_18831;
if(inst_18788){
var statearr_18843_18888 = state_18831__$1;
(statearr_18843_18888[(1)] = (16));

} else {
var statearr_18844_18889 = state_18831__$1;
(statearr_18844_18889[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (22))){
var inst_18816 = (state_18831[(2)]);
var state_18831__$1 = state_18831;
if(cljs.core.truth_(inst_18816)){
var statearr_18845_18890 = state_18831__$1;
(statearr_18845_18890[(1)] = (23));

} else {
var statearr_18846_18891 = state_18831__$1;
(statearr_18846_18891[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (6))){
var inst_18762 = (state_18831[(8)]);
var inst_18812 = (state_18831[(11)]);
var inst_18810 = (state_18831[(7)]);
var inst_18810__$1 = topic_fn.call(null,inst_18762);
var inst_18811 = cljs.core.deref.call(null,mults);
var inst_18812__$1 = cljs.core.get.call(null,inst_18811,inst_18810__$1);
var state_18831__$1 = (function (){var statearr_18847 = state_18831;
(statearr_18847[(11)] = inst_18812__$1);

(statearr_18847[(7)] = inst_18810__$1);

return statearr_18847;
})();
if(cljs.core.truth_(inst_18812__$1)){
var statearr_18848_18892 = state_18831__$1;
(statearr_18848_18892[(1)] = (19));

} else {
var statearr_18849_18893 = state_18831__$1;
(statearr_18849_18893[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (25))){
var inst_18821 = (state_18831[(2)]);
var state_18831__$1 = state_18831;
var statearr_18850_18894 = state_18831__$1;
(statearr_18850_18894[(2)] = inst_18821);

(statearr_18850_18894[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (17))){
var inst_18786 = (state_18831[(10)]);
var inst_18795 = cljs.core.first.call(null,inst_18786);
var inst_18796 = cljs.core.async.muxch_STAR_.call(null,inst_18795);
var inst_18797 = cljs.core.async.close_BANG_.call(null,inst_18796);
var inst_18798 = cljs.core.next.call(null,inst_18786);
var inst_18772 = inst_18798;
var inst_18773 = null;
var inst_18774 = (0);
var inst_18775 = (0);
var state_18831__$1 = (function (){var statearr_18851 = state_18831;
(statearr_18851[(12)] = inst_18774);

(statearr_18851[(13)] = inst_18773);

(statearr_18851[(14)] = inst_18797);

(statearr_18851[(15)] = inst_18775);

(statearr_18851[(16)] = inst_18772);

return statearr_18851;
})();
var statearr_18852_18895 = state_18831__$1;
(statearr_18852_18895[(2)] = null);

(statearr_18852_18895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (3))){
var inst_18829 = (state_18831[(2)]);
var state_18831__$1 = state_18831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18831__$1,inst_18829);
} else {
if((state_val_18832 === (12))){
var inst_18806 = (state_18831[(2)]);
var state_18831__$1 = state_18831;
var statearr_18853_18896 = state_18831__$1;
(statearr_18853_18896[(2)] = inst_18806);

(statearr_18853_18896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (2))){
var state_18831__$1 = state_18831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18831__$1,(4),ch);
} else {
if((state_val_18832 === (23))){
var state_18831__$1 = state_18831;
var statearr_18854_18897 = state_18831__$1;
(statearr_18854_18897[(2)] = null);

(statearr_18854_18897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (19))){
var inst_18762 = (state_18831[(8)]);
var inst_18812 = (state_18831[(11)]);
var inst_18814 = cljs.core.async.muxch_STAR_.call(null,inst_18812);
var state_18831__$1 = state_18831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18831__$1,(22),inst_18814,inst_18762);
} else {
if((state_val_18832 === (11))){
var inst_18786 = (state_18831[(10)]);
var inst_18772 = (state_18831[(16)]);
var inst_18786__$1 = cljs.core.seq.call(null,inst_18772);
var state_18831__$1 = (function (){var statearr_18855 = state_18831;
(statearr_18855[(10)] = inst_18786__$1);

return statearr_18855;
})();
if(inst_18786__$1){
var statearr_18856_18898 = state_18831__$1;
(statearr_18856_18898[(1)] = (13));

} else {
var statearr_18857_18899 = state_18831__$1;
(statearr_18857_18899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (9))){
var inst_18808 = (state_18831[(2)]);
var state_18831__$1 = state_18831;
var statearr_18858_18900 = state_18831__$1;
(statearr_18858_18900[(2)] = inst_18808);

(statearr_18858_18900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (5))){
var inst_18769 = cljs.core.deref.call(null,mults);
var inst_18770 = cljs.core.vals.call(null,inst_18769);
var inst_18771 = cljs.core.seq.call(null,inst_18770);
var inst_18772 = inst_18771;
var inst_18773 = null;
var inst_18774 = (0);
var inst_18775 = (0);
var state_18831__$1 = (function (){var statearr_18859 = state_18831;
(statearr_18859[(12)] = inst_18774);

(statearr_18859[(13)] = inst_18773);

(statearr_18859[(15)] = inst_18775);

(statearr_18859[(16)] = inst_18772);

return statearr_18859;
})();
var statearr_18860_18901 = state_18831__$1;
(statearr_18860_18901[(2)] = null);

(statearr_18860_18901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (14))){
var state_18831__$1 = state_18831;
var statearr_18864_18902 = state_18831__$1;
(statearr_18864_18902[(2)] = null);

(statearr_18864_18902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (16))){
var inst_18786 = (state_18831[(10)]);
var inst_18790 = cljs.core.chunk_first.call(null,inst_18786);
var inst_18791 = cljs.core.chunk_rest.call(null,inst_18786);
var inst_18792 = cljs.core.count.call(null,inst_18790);
var inst_18772 = inst_18791;
var inst_18773 = inst_18790;
var inst_18774 = inst_18792;
var inst_18775 = (0);
var state_18831__$1 = (function (){var statearr_18865 = state_18831;
(statearr_18865[(12)] = inst_18774);

(statearr_18865[(13)] = inst_18773);

(statearr_18865[(15)] = inst_18775);

(statearr_18865[(16)] = inst_18772);

return statearr_18865;
})();
var statearr_18866_18903 = state_18831__$1;
(statearr_18866_18903[(2)] = null);

(statearr_18866_18903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (10))){
var inst_18774 = (state_18831[(12)]);
var inst_18773 = (state_18831[(13)]);
var inst_18775 = (state_18831[(15)]);
var inst_18772 = (state_18831[(16)]);
var inst_18780 = cljs.core._nth.call(null,inst_18773,inst_18775);
var inst_18781 = cljs.core.async.muxch_STAR_.call(null,inst_18780);
var inst_18782 = cljs.core.async.close_BANG_.call(null,inst_18781);
var inst_18783 = (inst_18775 + (1));
var tmp18861 = inst_18774;
var tmp18862 = inst_18773;
var tmp18863 = inst_18772;
var inst_18772__$1 = tmp18863;
var inst_18773__$1 = tmp18862;
var inst_18774__$1 = tmp18861;
var inst_18775__$1 = inst_18783;
var state_18831__$1 = (function (){var statearr_18867 = state_18831;
(statearr_18867[(12)] = inst_18774__$1);

(statearr_18867[(13)] = inst_18773__$1);

(statearr_18867[(17)] = inst_18782);

(statearr_18867[(15)] = inst_18775__$1);

(statearr_18867[(16)] = inst_18772__$1);

return statearr_18867;
})();
var statearr_18868_18904 = state_18831__$1;
(statearr_18868_18904[(2)] = null);

(statearr_18868_18904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (18))){
var inst_18801 = (state_18831[(2)]);
var state_18831__$1 = state_18831;
var statearr_18869_18905 = state_18831__$1;
(statearr_18869_18905[(2)] = inst_18801);

(statearr_18869_18905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18832 === (8))){
var inst_18774 = (state_18831[(12)]);
var inst_18775 = (state_18831[(15)]);
var inst_18777 = (inst_18775 < inst_18774);
var inst_18778 = inst_18777;
var state_18831__$1 = state_18831;
if(cljs.core.truth_(inst_18778)){
var statearr_18870_18906 = state_18831__$1;
(statearr_18870_18906[(1)] = (10));

} else {
var statearr_18871_18907 = state_18831__$1;
(statearr_18871_18907[(1)] = (11));

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
});})(c__6777__auto___18879,mults,ensure_mult,p))
;
return ((function (switch__6721__auto__,c__6777__auto___18879,mults,ensure_mult,p){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_18875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18875[(0)] = state_machine__6722__auto__);

(statearr_18875[(1)] = (1));

return statearr_18875;
});
var state_machine__6722__auto____1 = (function (state_18831){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_18831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e18876){if((e18876 instanceof Object)){
var ex__6725__auto__ = e18876;
var statearr_18877_18908 = state_18831;
(statearr_18877_18908[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18909 = state_18831;
state_18831 = G__18909;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_18831){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_18831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___18879,mults,ensure_mult,p))
})();
var state__6779__auto__ = (function (){var statearr_18878 = f__6778__auto__.call(null);
(statearr_18878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___18879);

return statearr_18878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___18879,mults,ensure_mult,p))
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
var c__6777__auto___19046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19046,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19046,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19016){
var state_val_19017 = (state_19016[(1)]);
if((state_val_19017 === (7))){
var state_19016__$1 = state_19016;
var statearr_19018_19047 = state_19016__$1;
(statearr_19018_19047[(2)] = null);

(statearr_19018_19047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (1))){
var state_19016__$1 = state_19016;
var statearr_19019_19048 = state_19016__$1;
(statearr_19019_19048[(2)] = null);

(statearr_19019_19048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (4))){
var inst_18980 = (state_19016[(7)]);
var inst_18982 = (inst_18980 < cnt);
var state_19016__$1 = state_19016;
if(cljs.core.truth_(inst_18982)){
var statearr_19020_19049 = state_19016__$1;
(statearr_19020_19049[(1)] = (6));

} else {
var statearr_19021_19050 = state_19016__$1;
(statearr_19021_19050[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (15))){
var inst_19012 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19022_19051 = state_19016__$1;
(statearr_19022_19051[(2)] = inst_19012);

(statearr_19022_19051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (13))){
var inst_19005 = cljs.core.async.close_BANG_.call(null,out);
var state_19016__$1 = state_19016;
var statearr_19023_19052 = state_19016__$1;
(statearr_19023_19052[(2)] = inst_19005);

(statearr_19023_19052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (6))){
var state_19016__$1 = state_19016;
var statearr_19024_19053 = state_19016__$1;
(statearr_19024_19053[(2)] = null);

(statearr_19024_19053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (3))){
var inst_19014 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19016__$1,inst_19014);
} else {
if((state_val_19017 === (12))){
var inst_19002 = (state_19016[(8)]);
var inst_19002__$1 = (state_19016[(2)]);
var inst_19003 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19002__$1);
var state_19016__$1 = (function (){var statearr_19025 = state_19016;
(statearr_19025[(8)] = inst_19002__$1);

return statearr_19025;
})();
if(cljs.core.truth_(inst_19003)){
var statearr_19026_19054 = state_19016__$1;
(statearr_19026_19054[(1)] = (13));

} else {
var statearr_19027_19055 = state_19016__$1;
(statearr_19027_19055[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (2))){
var inst_18979 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18980 = (0);
var state_19016__$1 = (function (){var statearr_19028 = state_19016;
(statearr_19028[(7)] = inst_18980);

(statearr_19028[(9)] = inst_18979);

return statearr_19028;
})();
var statearr_19029_19056 = state_19016__$1;
(statearr_19029_19056[(2)] = null);

(statearr_19029_19056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (11))){
var inst_18980 = (state_19016[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19016,(10),Object,null,(9));
var inst_18989 = chs__$1.call(null,inst_18980);
var inst_18990 = done.call(null,inst_18980);
var inst_18991 = cljs.core.async.take_BANG_.call(null,inst_18989,inst_18990);
var state_19016__$1 = state_19016;
var statearr_19030_19057 = state_19016__$1;
(statearr_19030_19057[(2)] = inst_18991);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19016__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (9))){
var inst_18980 = (state_19016[(7)]);
var inst_18993 = (state_19016[(2)]);
var inst_18994 = (inst_18980 + (1));
var inst_18980__$1 = inst_18994;
var state_19016__$1 = (function (){var statearr_19031 = state_19016;
(statearr_19031[(10)] = inst_18993);

(statearr_19031[(7)] = inst_18980__$1);

return statearr_19031;
})();
var statearr_19032_19058 = state_19016__$1;
(statearr_19032_19058[(2)] = null);

(statearr_19032_19058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (5))){
var inst_19000 = (state_19016[(2)]);
var state_19016__$1 = (function (){var statearr_19033 = state_19016;
(statearr_19033[(11)] = inst_19000);

return statearr_19033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19016__$1,(12),dchan);
} else {
if((state_val_19017 === (14))){
var inst_19002 = (state_19016[(8)]);
var inst_19007 = cljs.core.apply.call(null,f,inst_19002);
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19016__$1,(16),out,inst_19007);
} else {
if((state_val_19017 === (16))){
var inst_19009 = (state_19016[(2)]);
var state_19016__$1 = (function (){var statearr_19034 = state_19016;
(statearr_19034[(12)] = inst_19009);

return statearr_19034;
})();
var statearr_19035_19059 = state_19016__$1;
(statearr_19035_19059[(2)] = null);

(statearr_19035_19059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (10))){
var inst_18984 = (state_19016[(2)]);
var inst_18985 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19016__$1 = (function (){var statearr_19036 = state_19016;
(statearr_19036[(13)] = inst_18984);

return statearr_19036;
})();
var statearr_19037_19060 = state_19016__$1;
(statearr_19037_19060[(2)] = inst_18985);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19016__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (8))){
var inst_18998 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19038_19061 = state_19016__$1;
(statearr_19038_19061[(2)] = inst_18998);

(statearr_19038_19061[(1)] = (5));


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
});})(c__6777__auto___19046,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6721__auto__,c__6777__auto___19046,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19042[(0)] = state_machine__6722__auto__);

(statearr_19042[(1)] = (1));

return statearr_19042;
});
var state_machine__6722__auto____1 = (function (state_19016){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19043){if((e19043 instanceof Object)){
var ex__6725__auto__ = e19043;
var statearr_19044_19062 = state_19016;
(statearr_19044_19062[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19063 = state_19016;
state_19016 = G__19063;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19016){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19046,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6779__auto__ = (function (){var statearr_19045 = f__6778__auto__.call(null);
(statearr_19045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19046);

return statearr_19045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19046,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6777__auto___19171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19171,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19171,out){
return (function (state_19147){
var state_val_19148 = (state_19147[(1)]);
if((state_val_19148 === (7))){
var inst_19126 = (state_19147[(7)]);
var inst_19127 = (state_19147[(8)]);
var inst_19126__$1 = (state_19147[(2)]);
var inst_19127__$1 = cljs.core.nth.call(null,inst_19126__$1,(0),null);
var inst_19128 = cljs.core.nth.call(null,inst_19126__$1,(1),null);
var inst_19129 = (inst_19127__$1 == null);
var state_19147__$1 = (function (){var statearr_19149 = state_19147;
(statearr_19149[(7)] = inst_19126__$1);

(statearr_19149[(9)] = inst_19128);

(statearr_19149[(8)] = inst_19127__$1);

return statearr_19149;
})();
if(cljs.core.truth_(inst_19129)){
var statearr_19150_19172 = state_19147__$1;
(statearr_19150_19172[(1)] = (8));

} else {
var statearr_19151_19173 = state_19147__$1;
(statearr_19151_19173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (1))){
var inst_19118 = cljs.core.vec.call(null,chs);
var inst_19119 = inst_19118;
var state_19147__$1 = (function (){var statearr_19152 = state_19147;
(statearr_19152[(10)] = inst_19119);

return statearr_19152;
})();
var statearr_19153_19174 = state_19147__$1;
(statearr_19153_19174[(2)] = null);

(statearr_19153_19174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (4))){
var inst_19119 = (state_19147[(10)]);
var state_19147__$1 = state_19147;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19147__$1,(7),inst_19119);
} else {
if((state_val_19148 === (6))){
var inst_19143 = (state_19147[(2)]);
var state_19147__$1 = state_19147;
var statearr_19154_19175 = state_19147__$1;
(statearr_19154_19175[(2)] = inst_19143);

(statearr_19154_19175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (3))){
var inst_19145 = (state_19147[(2)]);
var state_19147__$1 = state_19147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19147__$1,inst_19145);
} else {
if((state_val_19148 === (2))){
var inst_19119 = (state_19147[(10)]);
var inst_19121 = cljs.core.count.call(null,inst_19119);
var inst_19122 = (inst_19121 > (0));
var state_19147__$1 = state_19147;
if(cljs.core.truth_(inst_19122)){
var statearr_19156_19176 = state_19147__$1;
(statearr_19156_19176[(1)] = (4));

} else {
var statearr_19157_19177 = state_19147__$1;
(statearr_19157_19177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (11))){
var inst_19119 = (state_19147[(10)]);
var inst_19136 = (state_19147[(2)]);
var tmp19155 = inst_19119;
var inst_19119__$1 = tmp19155;
var state_19147__$1 = (function (){var statearr_19158 = state_19147;
(statearr_19158[(11)] = inst_19136);

(statearr_19158[(10)] = inst_19119__$1);

return statearr_19158;
})();
var statearr_19159_19178 = state_19147__$1;
(statearr_19159_19178[(2)] = null);

(statearr_19159_19178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (9))){
var inst_19127 = (state_19147[(8)]);
var state_19147__$1 = state_19147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19147__$1,(11),out,inst_19127);
} else {
if((state_val_19148 === (5))){
var inst_19141 = cljs.core.async.close_BANG_.call(null,out);
var state_19147__$1 = state_19147;
var statearr_19160_19179 = state_19147__$1;
(statearr_19160_19179[(2)] = inst_19141);

(statearr_19160_19179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (10))){
var inst_19139 = (state_19147[(2)]);
var state_19147__$1 = state_19147;
var statearr_19161_19180 = state_19147__$1;
(statearr_19161_19180[(2)] = inst_19139);

(statearr_19161_19180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19148 === (8))){
var inst_19126 = (state_19147[(7)]);
var inst_19128 = (state_19147[(9)]);
var inst_19127 = (state_19147[(8)]);
var inst_19119 = (state_19147[(10)]);
var inst_19131 = (function (){var c = inst_19128;
var v = inst_19127;
var vec__19124 = inst_19126;
var cs = inst_19119;
return ((function (c,v,vec__19124,cs,inst_19126,inst_19128,inst_19127,inst_19119,state_val_19148,c__6777__auto___19171,out){
return (function (p1__19064_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19064_SHARP_);
});
;})(c,v,vec__19124,cs,inst_19126,inst_19128,inst_19127,inst_19119,state_val_19148,c__6777__auto___19171,out))
})();
var inst_19132 = cljs.core.filterv.call(null,inst_19131,inst_19119);
var inst_19119__$1 = inst_19132;
var state_19147__$1 = (function (){var statearr_19162 = state_19147;
(statearr_19162[(10)] = inst_19119__$1);

return statearr_19162;
})();
var statearr_19163_19181 = state_19147__$1;
(statearr_19163_19181[(2)] = null);

(statearr_19163_19181[(1)] = (2));


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
});})(c__6777__auto___19171,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19171,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19167 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19167[(0)] = state_machine__6722__auto__);

(statearr_19167[(1)] = (1));

return statearr_19167;
});
var state_machine__6722__auto____1 = (function (state_19147){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19168){if((e19168 instanceof Object)){
var ex__6725__auto__ = e19168;
var statearr_19169_19182 = state_19147;
(statearr_19169_19182[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19183 = state_19147;
state_19147 = G__19183;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19147){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19171,out))
})();
var state__6779__auto__ = (function (){var statearr_19170 = f__6778__auto__.call(null);
(statearr_19170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19171);

return statearr_19170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19171,out))
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
var c__6777__auto___19276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19276,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19276,out){
return (function (state_19253){
var state_val_19254 = (state_19253[(1)]);
if((state_val_19254 === (7))){
var inst_19235 = (state_19253[(7)]);
var inst_19235__$1 = (state_19253[(2)]);
var inst_19236 = (inst_19235__$1 == null);
var inst_19237 = cljs.core.not.call(null,inst_19236);
var state_19253__$1 = (function (){var statearr_19255 = state_19253;
(statearr_19255[(7)] = inst_19235__$1);

return statearr_19255;
})();
if(inst_19237){
var statearr_19256_19277 = state_19253__$1;
(statearr_19256_19277[(1)] = (8));

} else {
var statearr_19257_19278 = state_19253__$1;
(statearr_19257_19278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (1))){
var inst_19230 = (0);
var state_19253__$1 = (function (){var statearr_19258 = state_19253;
(statearr_19258[(8)] = inst_19230);

return statearr_19258;
})();
var statearr_19259_19279 = state_19253__$1;
(statearr_19259_19279[(2)] = null);

(statearr_19259_19279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (4))){
var state_19253__$1 = state_19253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19253__$1,(7),ch);
} else {
if((state_val_19254 === (6))){
var inst_19248 = (state_19253[(2)]);
var state_19253__$1 = state_19253;
var statearr_19260_19280 = state_19253__$1;
(statearr_19260_19280[(2)] = inst_19248);

(statearr_19260_19280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (3))){
var inst_19250 = (state_19253[(2)]);
var inst_19251 = cljs.core.async.close_BANG_.call(null,out);
var state_19253__$1 = (function (){var statearr_19261 = state_19253;
(statearr_19261[(9)] = inst_19250);

return statearr_19261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19253__$1,inst_19251);
} else {
if((state_val_19254 === (2))){
var inst_19230 = (state_19253[(8)]);
var inst_19232 = (inst_19230 < n);
var state_19253__$1 = state_19253;
if(cljs.core.truth_(inst_19232)){
var statearr_19262_19281 = state_19253__$1;
(statearr_19262_19281[(1)] = (4));

} else {
var statearr_19263_19282 = state_19253__$1;
(statearr_19263_19282[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (11))){
var inst_19230 = (state_19253[(8)]);
var inst_19240 = (state_19253[(2)]);
var inst_19241 = (inst_19230 + (1));
var inst_19230__$1 = inst_19241;
var state_19253__$1 = (function (){var statearr_19264 = state_19253;
(statearr_19264[(8)] = inst_19230__$1);

(statearr_19264[(10)] = inst_19240);

return statearr_19264;
})();
var statearr_19265_19283 = state_19253__$1;
(statearr_19265_19283[(2)] = null);

(statearr_19265_19283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (9))){
var state_19253__$1 = state_19253;
var statearr_19266_19284 = state_19253__$1;
(statearr_19266_19284[(2)] = null);

(statearr_19266_19284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (5))){
var state_19253__$1 = state_19253;
var statearr_19267_19285 = state_19253__$1;
(statearr_19267_19285[(2)] = null);

(statearr_19267_19285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (10))){
var inst_19245 = (state_19253[(2)]);
var state_19253__$1 = state_19253;
var statearr_19268_19286 = state_19253__$1;
(statearr_19268_19286[(2)] = inst_19245);

(statearr_19268_19286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19254 === (8))){
var inst_19235 = (state_19253[(7)]);
var state_19253__$1 = state_19253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19253__$1,(11),out,inst_19235);
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
});})(c__6777__auto___19276,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19276,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19272[(0)] = state_machine__6722__auto__);

(statearr_19272[(1)] = (1));

return statearr_19272;
});
var state_machine__6722__auto____1 = (function (state_19253){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19273){if((e19273 instanceof Object)){
var ex__6725__auto__ = e19273;
var statearr_19274_19287 = state_19253;
(statearr_19274_19287[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19288 = state_19253;
state_19253 = G__19288;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19253){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19276,out))
})();
var state__6779__auto__ = (function (){var statearr_19275 = f__6778__auto__.call(null);
(statearr_19275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19276);

return statearr_19275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19276,out))
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
if(typeof cljs.core.async.t19296 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19296 = (function (ch,f,map_LT_,meta19297){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19297 = meta19297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19296.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19296.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19299 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19299 = (function (fn1,_,meta19297,map_LT_,f,ch,meta19300){
this.fn1 = fn1;
this._ = _;
this.meta19297 = meta19297;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19300 = meta19300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19299.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19289_SHARP_){
return f1.call(null,(((p1__19289_SHARP_ == null))?null:self__.f.call(null,p1__19289_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19301){
var self__ = this;
var _19301__$1 = this;
return self__.meta19300;
});})(___$1))
;

cljs.core.async.t19299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19301,meta19300__$1){
var self__ = this;
var _19301__$1 = this;
return (new cljs.core.async.t19299(self__.fn1,self__._,self__.meta19297,self__.map_LT_,self__.f,self__.ch,meta19300__$1));
});})(___$1))
;

cljs.core.async.t19299.cljs$lang$type = true;

cljs.core.async.t19299.cljs$lang$ctorStr = "cljs.core.async/t19299";

cljs.core.async.t19299.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19299");
});})(___$1))
;

cljs.core.async.__GT_t19299 = ((function (___$1){
return (function __GT_t19299(fn1__$1,___$2,meta19297__$1,map_LT___$1,f__$1,ch__$1,meta19300){
return (new cljs.core.async.t19299(fn1__$1,___$2,meta19297__$1,map_LT___$1,f__$1,ch__$1,meta19300));
});})(___$1))
;

}

return (new cljs.core.async.t19299(fn1,___$1,self__.meta19297,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t19296.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19296.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19298){
var self__ = this;
var _19298__$1 = this;
return self__.meta19297;
});

cljs.core.async.t19296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19298,meta19297__$1){
var self__ = this;
var _19298__$1 = this;
return (new cljs.core.async.t19296(self__.ch,self__.f,self__.map_LT_,meta19297__$1));
});

cljs.core.async.t19296.cljs$lang$type = true;

cljs.core.async.t19296.cljs$lang$ctorStr = "cljs.core.async/t19296";

cljs.core.async.t19296.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19296");
});

cljs.core.async.__GT_t19296 = (function __GT_t19296(ch__$1,f__$1,map_LT___$1,meta19297){
return (new cljs.core.async.t19296(ch__$1,f__$1,map_LT___$1,meta19297));
});

}

return (new cljs.core.async.t19296(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19305 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19305 = (function (ch,f,map_GT_,meta19306){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19306 = meta19306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19305.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19307){
var self__ = this;
var _19307__$1 = this;
return self__.meta19306;
});

cljs.core.async.t19305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19307,meta19306__$1){
var self__ = this;
var _19307__$1 = this;
return (new cljs.core.async.t19305(self__.ch,self__.f,self__.map_GT_,meta19306__$1));
});

cljs.core.async.t19305.cljs$lang$type = true;

cljs.core.async.t19305.cljs$lang$ctorStr = "cljs.core.async/t19305";

cljs.core.async.t19305.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19305");
});

cljs.core.async.__GT_t19305 = (function __GT_t19305(ch__$1,f__$1,map_GT___$1,meta19306){
return (new cljs.core.async.t19305(ch__$1,f__$1,map_GT___$1,meta19306));
});

}

return (new cljs.core.async.t19305(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19311 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19311 = (function (ch,p,filter_GT_,meta19312){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19312 = meta19312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19311.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19311.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19311.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19311.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19313){
var self__ = this;
var _19313__$1 = this;
return self__.meta19312;
});

cljs.core.async.t19311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19313,meta19312__$1){
var self__ = this;
var _19313__$1 = this;
return (new cljs.core.async.t19311(self__.ch,self__.p,self__.filter_GT_,meta19312__$1));
});

cljs.core.async.t19311.cljs$lang$type = true;

cljs.core.async.t19311.cljs$lang$ctorStr = "cljs.core.async/t19311";

cljs.core.async.t19311.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19311");
});

cljs.core.async.__GT_t19311 = (function __GT_t19311(ch__$1,p__$1,filter_GT___$1,meta19312){
return (new cljs.core.async.t19311(ch__$1,p__$1,filter_GT___$1,meta19312));
});

}

return (new cljs.core.async.t19311(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var c__6777__auto___19396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19396,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19396,out){
return (function (state_19375){
var state_val_19376 = (state_19375[(1)]);
if((state_val_19376 === (7))){
var inst_19371 = (state_19375[(2)]);
var state_19375__$1 = state_19375;
var statearr_19377_19397 = state_19375__$1;
(statearr_19377_19397[(2)] = inst_19371);

(statearr_19377_19397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (1))){
var state_19375__$1 = state_19375;
var statearr_19378_19398 = state_19375__$1;
(statearr_19378_19398[(2)] = null);

(statearr_19378_19398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (4))){
var inst_19357 = (state_19375[(7)]);
var inst_19357__$1 = (state_19375[(2)]);
var inst_19358 = (inst_19357__$1 == null);
var state_19375__$1 = (function (){var statearr_19379 = state_19375;
(statearr_19379[(7)] = inst_19357__$1);

return statearr_19379;
})();
if(cljs.core.truth_(inst_19358)){
var statearr_19380_19399 = state_19375__$1;
(statearr_19380_19399[(1)] = (5));

} else {
var statearr_19381_19400 = state_19375__$1;
(statearr_19381_19400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (6))){
var inst_19357 = (state_19375[(7)]);
var inst_19362 = p.call(null,inst_19357);
var state_19375__$1 = state_19375;
if(cljs.core.truth_(inst_19362)){
var statearr_19382_19401 = state_19375__$1;
(statearr_19382_19401[(1)] = (8));

} else {
var statearr_19383_19402 = state_19375__$1;
(statearr_19383_19402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (3))){
var inst_19373 = (state_19375[(2)]);
var state_19375__$1 = state_19375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19375__$1,inst_19373);
} else {
if((state_val_19376 === (2))){
var state_19375__$1 = state_19375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19375__$1,(4),ch);
} else {
if((state_val_19376 === (11))){
var inst_19365 = (state_19375[(2)]);
var state_19375__$1 = state_19375;
var statearr_19384_19403 = state_19375__$1;
(statearr_19384_19403[(2)] = inst_19365);

(statearr_19384_19403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (9))){
var state_19375__$1 = state_19375;
var statearr_19385_19404 = state_19375__$1;
(statearr_19385_19404[(2)] = null);

(statearr_19385_19404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (5))){
var inst_19360 = cljs.core.async.close_BANG_.call(null,out);
var state_19375__$1 = state_19375;
var statearr_19386_19405 = state_19375__$1;
(statearr_19386_19405[(2)] = inst_19360);

(statearr_19386_19405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (10))){
var inst_19368 = (state_19375[(2)]);
var state_19375__$1 = (function (){var statearr_19387 = state_19375;
(statearr_19387[(8)] = inst_19368);

return statearr_19387;
})();
var statearr_19388_19406 = state_19375__$1;
(statearr_19388_19406[(2)] = null);

(statearr_19388_19406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (8))){
var inst_19357 = (state_19375[(7)]);
var state_19375__$1 = state_19375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19375__$1,(11),out,inst_19357);
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
});})(c__6777__auto___19396,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19396,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19392 = [null,null,null,null,null,null,null,null,null];
(statearr_19392[(0)] = state_machine__6722__auto__);

(statearr_19392[(1)] = (1));

return statearr_19392;
});
var state_machine__6722__auto____1 = (function (state_19375){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19393){if((e19393 instanceof Object)){
var ex__6725__auto__ = e19393;
var statearr_19394_19407 = state_19375;
(statearr_19394_19407[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19408 = state_19375;
state_19375 = G__19408;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19375){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19396,out))
})();
var state__6779__auto__ = (function (){var statearr_19395 = f__6778__auto__.call(null);
(statearr_19395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19396);

return statearr_19395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19396,out))
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
var c__6777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto__){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto__){
return (function (state_19574){
var state_val_19575 = (state_19574[(1)]);
if((state_val_19575 === (7))){
var inst_19570 = (state_19574[(2)]);
var state_19574__$1 = state_19574;
var statearr_19576_19617 = state_19574__$1;
(statearr_19576_19617[(2)] = inst_19570);

(statearr_19576_19617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (20))){
var inst_19540 = (state_19574[(7)]);
var inst_19551 = (state_19574[(2)]);
var inst_19552 = cljs.core.next.call(null,inst_19540);
var inst_19526 = inst_19552;
var inst_19527 = null;
var inst_19528 = (0);
var inst_19529 = (0);
var state_19574__$1 = (function (){var statearr_19577 = state_19574;
(statearr_19577[(8)] = inst_19526);

(statearr_19577[(9)] = inst_19528);

(statearr_19577[(10)] = inst_19527);

(statearr_19577[(11)] = inst_19529);

(statearr_19577[(12)] = inst_19551);

return statearr_19577;
})();
var statearr_19578_19618 = state_19574__$1;
(statearr_19578_19618[(2)] = null);

(statearr_19578_19618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (1))){
var state_19574__$1 = state_19574;
var statearr_19579_19619 = state_19574__$1;
(statearr_19579_19619[(2)] = null);

(statearr_19579_19619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (4))){
var inst_19515 = (state_19574[(13)]);
var inst_19515__$1 = (state_19574[(2)]);
var inst_19516 = (inst_19515__$1 == null);
var state_19574__$1 = (function (){var statearr_19580 = state_19574;
(statearr_19580[(13)] = inst_19515__$1);

return statearr_19580;
})();
if(cljs.core.truth_(inst_19516)){
var statearr_19581_19620 = state_19574__$1;
(statearr_19581_19620[(1)] = (5));

} else {
var statearr_19582_19621 = state_19574__$1;
(statearr_19582_19621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (15))){
var state_19574__$1 = state_19574;
var statearr_19586_19622 = state_19574__$1;
(statearr_19586_19622[(2)] = null);

(statearr_19586_19622[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (21))){
var state_19574__$1 = state_19574;
var statearr_19587_19623 = state_19574__$1;
(statearr_19587_19623[(2)] = null);

(statearr_19587_19623[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (13))){
var inst_19526 = (state_19574[(8)]);
var inst_19528 = (state_19574[(9)]);
var inst_19527 = (state_19574[(10)]);
var inst_19529 = (state_19574[(11)]);
var inst_19536 = (state_19574[(2)]);
var inst_19537 = (inst_19529 + (1));
var tmp19583 = inst_19526;
var tmp19584 = inst_19528;
var tmp19585 = inst_19527;
var inst_19526__$1 = tmp19583;
var inst_19527__$1 = tmp19585;
var inst_19528__$1 = tmp19584;
var inst_19529__$1 = inst_19537;
var state_19574__$1 = (function (){var statearr_19588 = state_19574;
(statearr_19588[(8)] = inst_19526__$1);

(statearr_19588[(9)] = inst_19528__$1);

(statearr_19588[(10)] = inst_19527__$1);

(statearr_19588[(11)] = inst_19529__$1);

(statearr_19588[(14)] = inst_19536);

return statearr_19588;
})();
var statearr_19589_19624 = state_19574__$1;
(statearr_19589_19624[(2)] = null);

(statearr_19589_19624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (22))){
var state_19574__$1 = state_19574;
var statearr_19590_19625 = state_19574__$1;
(statearr_19590_19625[(2)] = null);

(statearr_19590_19625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (6))){
var inst_19515 = (state_19574[(13)]);
var inst_19524 = f.call(null,inst_19515);
var inst_19525 = cljs.core.seq.call(null,inst_19524);
var inst_19526 = inst_19525;
var inst_19527 = null;
var inst_19528 = (0);
var inst_19529 = (0);
var state_19574__$1 = (function (){var statearr_19591 = state_19574;
(statearr_19591[(8)] = inst_19526);

(statearr_19591[(9)] = inst_19528);

(statearr_19591[(10)] = inst_19527);

(statearr_19591[(11)] = inst_19529);

return statearr_19591;
})();
var statearr_19592_19626 = state_19574__$1;
(statearr_19592_19626[(2)] = null);

(statearr_19592_19626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (17))){
var inst_19540 = (state_19574[(7)]);
var inst_19544 = cljs.core.chunk_first.call(null,inst_19540);
var inst_19545 = cljs.core.chunk_rest.call(null,inst_19540);
var inst_19546 = cljs.core.count.call(null,inst_19544);
var inst_19526 = inst_19545;
var inst_19527 = inst_19544;
var inst_19528 = inst_19546;
var inst_19529 = (0);
var state_19574__$1 = (function (){var statearr_19593 = state_19574;
(statearr_19593[(8)] = inst_19526);

(statearr_19593[(9)] = inst_19528);

(statearr_19593[(10)] = inst_19527);

(statearr_19593[(11)] = inst_19529);

return statearr_19593;
})();
var statearr_19594_19627 = state_19574__$1;
(statearr_19594_19627[(2)] = null);

(statearr_19594_19627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (3))){
var inst_19572 = (state_19574[(2)]);
var state_19574__$1 = state_19574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19574__$1,inst_19572);
} else {
if((state_val_19575 === (12))){
var inst_19560 = (state_19574[(2)]);
var state_19574__$1 = state_19574;
var statearr_19595_19628 = state_19574__$1;
(statearr_19595_19628[(2)] = inst_19560);

(statearr_19595_19628[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (2))){
var state_19574__$1 = state_19574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19574__$1,(4),in$);
} else {
if((state_val_19575 === (23))){
var inst_19568 = (state_19574[(2)]);
var state_19574__$1 = state_19574;
var statearr_19596_19629 = state_19574__$1;
(statearr_19596_19629[(2)] = inst_19568);

(statearr_19596_19629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (19))){
var inst_19555 = (state_19574[(2)]);
var state_19574__$1 = state_19574;
var statearr_19597_19630 = state_19574__$1;
(statearr_19597_19630[(2)] = inst_19555);

(statearr_19597_19630[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (11))){
var inst_19526 = (state_19574[(8)]);
var inst_19540 = (state_19574[(7)]);
var inst_19540__$1 = cljs.core.seq.call(null,inst_19526);
var state_19574__$1 = (function (){var statearr_19598 = state_19574;
(statearr_19598[(7)] = inst_19540__$1);

return statearr_19598;
})();
if(inst_19540__$1){
var statearr_19599_19631 = state_19574__$1;
(statearr_19599_19631[(1)] = (14));

} else {
var statearr_19600_19632 = state_19574__$1;
(statearr_19600_19632[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (9))){
var inst_19562 = (state_19574[(2)]);
var inst_19563 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19574__$1 = (function (){var statearr_19601 = state_19574;
(statearr_19601[(15)] = inst_19562);

return statearr_19601;
})();
if(cljs.core.truth_(inst_19563)){
var statearr_19602_19633 = state_19574__$1;
(statearr_19602_19633[(1)] = (21));

} else {
var statearr_19603_19634 = state_19574__$1;
(statearr_19603_19634[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (5))){
var inst_19518 = cljs.core.async.close_BANG_.call(null,out);
var state_19574__$1 = state_19574;
var statearr_19604_19635 = state_19574__$1;
(statearr_19604_19635[(2)] = inst_19518);

(statearr_19604_19635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (14))){
var inst_19540 = (state_19574[(7)]);
var inst_19542 = cljs.core.chunked_seq_QMARK_.call(null,inst_19540);
var state_19574__$1 = state_19574;
if(inst_19542){
var statearr_19605_19636 = state_19574__$1;
(statearr_19605_19636[(1)] = (17));

} else {
var statearr_19606_19637 = state_19574__$1;
(statearr_19606_19637[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (16))){
var inst_19558 = (state_19574[(2)]);
var state_19574__$1 = state_19574;
var statearr_19607_19638 = state_19574__$1;
(statearr_19607_19638[(2)] = inst_19558);

(statearr_19607_19638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (10))){
var inst_19527 = (state_19574[(10)]);
var inst_19529 = (state_19574[(11)]);
var inst_19534 = cljs.core._nth.call(null,inst_19527,inst_19529);
var state_19574__$1 = state_19574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19574__$1,(13),out,inst_19534);
} else {
if((state_val_19575 === (18))){
var inst_19540 = (state_19574[(7)]);
var inst_19549 = cljs.core.first.call(null,inst_19540);
var state_19574__$1 = state_19574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19574__$1,(20),out,inst_19549);
} else {
if((state_val_19575 === (8))){
var inst_19528 = (state_19574[(9)]);
var inst_19529 = (state_19574[(11)]);
var inst_19531 = (inst_19529 < inst_19528);
var inst_19532 = inst_19531;
var state_19574__$1 = state_19574;
if(cljs.core.truth_(inst_19532)){
var statearr_19608_19639 = state_19574__$1;
(statearr_19608_19639[(1)] = (10));

} else {
var statearr_19609_19640 = state_19574__$1;
(statearr_19609_19640[(1)] = (11));

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
});})(c__6777__auto__))
;
return ((function (switch__6721__auto__,c__6777__auto__){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19613[(0)] = state_machine__6722__auto__);

(statearr_19613[(1)] = (1));

return statearr_19613;
});
var state_machine__6722__auto____1 = (function (state_19574){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19614){if((e19614 instanceof Object)){
var ex__6725__auto__ = e19614;
var statearr_19615_19641 = state_19574;
(statearr_19615_19641[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19642 = state_19574;
state_19574 = G__19642;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19574){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__))
})();
var state__6779__auto__ = (function (){var statearr_19616 = f__6778__auto__.call(null);
(statearr_19616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_19616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto__))
);

return c__6777__auto__;
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
var c__6777__auto___19739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19739,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19739,out){
return (function (state_19714){
var state_val_19715 = (state_19714[(1)]);
if((state_val_19715 === (7))){
var inst_19709 = (state_19714[(2)]);
var state_19714__$1 = state_19714;
var statearr_19716_19740 = state_19714__$1;
(statearr_19716_19740[(2)] = inst_19709);

(statearr_19716_19740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19715 === (1))){
var inst_19691 = null;
var state_19714__$1 = (function (){var statearr_19717 = state_19714;
(statearr_19717[(7)] = inst_19691);

return statearr_19717;
})();
var statearr_19718_19741 = state_19714__$1;
(statearr_19718_19741[(2)] = null);

(statearr_19718_19741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19715 === (4))){
var inst_19694 = (state_19714[(8)]);
var inst_19694__$1 = (state_19714[(2)]);
var inst_19695 = (inst_19694__$1 == null);
var inst_19696 = cljs.core.not.call(null,inst_19695);
var state_19714__$1 = (function (){var statearr_19719 = state_19714;
(statearr_19719[(8)] = inst_19694__$1);

return statearr_19719;
})();
if(inst_19696){
var statearr_19720_19742 = state_19714__$1;
(statearr_19720_19742[(1)] = (5));

} else {
var statearr_19721_19743 = state_19714__$1;
(statearr_19721_19743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19715 === (6))){
var state_19714__$1 = state_19714;
var statearr_19722_19744 = state_19714__$1;
(statearr_19722_19744[(2)] = null);

(statearr_19722_19744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19715 === (3))){
var inst_19711 = (state_19714[(2)]);
var inst_19712 = cljs.core.async.close_BANG_.call(null,out);
var state_19714__$1 = (function (){var statearr_19723 = state_19714;
(statearr_19723[(9)] = inst_19711);

return statearr_19723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19714__$1,inst_19712);
} else {
if((state_val_19715 === (2))){
var state_19714__$1 = state_19714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19714__$1,(4),ch);
} else {
if((state_val_19715 === (11))){
var inst_19694 = (state_19714[(8)]);
var inst_19703 = (state_19714[(2)]);
var inst_19691 = inst_19694;
var state_19714__$1 = (function (){var statearr_19724 = state_19714;
(statearr_19724[(10)] = inst_19703);

(statearr_19724[(7)] = inst_19691);

return statearr_19724;
})();
var statearr_19725_19745 = state_19714__$1;
(statearr_19725_19745[(2)] = null);

(statearr_19725_19745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19715 === (9))){
var inst_19694 = (state_19714[(8)]);
var state_19714__$1 = state_19714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19714__$1,(11),out,inst_19694);
} else {
if((state_val_19715 === (5))){
var inst_19691 = (state_19714[(7)]);
var inst_19694 = (state_19714[(8)]);
var inst_19698 = cljs.core._EQ_.call(null,inst_19694,inst_19691);
var state_19714__$1 = state_19714;
if(inst_19698){
var statearr_19727_19746 = state_19714__$1;
(statearr_19727_19746[(1)] = (8));

} else {
var statearr_19728_19747 = state_19714__$1;
(statearr_19728_19747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19715 === (10))){
var inst_19706 = (state_19714[(2)]);
var state_19714__$1 = state_19714;
var statearr_19729_19748 = state_19714__$1;
(statearr_19729_19748[(2)] = inst_19706);

(statearr_19729_19748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19715 === (8))){
var inst_19691 = (state_19714[(7)]);
var tmp19726 = inst_19691;
var inst_19691__$1 = tmp19726;
var state_19714__$1 = (function (){var statearr_19730 = state_19714;
(statearr_19730[(7)] = inst_19691__$1);

return statearr_19730;
})();
var statearr_19731_19749 = state_19714__$1;
(statearr_19731_19749[(2)] = null);

(statearr_19731_19749[(1)] = (2));


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
});})(c__6777__auto___19739,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19739,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19735 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19735[(0)] = state_machine__6722__auto__);

(statearr_19735[(1)] = (1));

return statearr_19735;
});
var state_machine__6722__auto____1 = (function (state_19714){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19736){if((e19736 instanceof Object)){
var ex__6725__auto__ = e19736;
var statearr_19737_19750 = state_19714;
(statearr_19737_19750[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19751 = state_19714;
state_19714 = G__19751;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19714){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19739,out))
})();
var state__6779__auto__ = (function (){var statearr_19738 = f__6778__auto__.call(null);
(statearr_19738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19739);

return statearr_19738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19739,out))
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
var c__6777__auto___19886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19886,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19886,out){
return (function (state_19856){
var state_val_19857 = (state_19856[(1)]);
if((state_val_19857 === (7))){
var inst_19852 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
var statearr_19858_19887 = state_19856__$1;
(statearr_19858_19887[(2)] = inst_19852);

(statearr_19858_19887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (1))){
var inst_19819 = (new Array(n));
var inst_19820 = inst_19819;
var inst_19821 = (0);
var state_19856__$1 = (function (){var statearr_19859 = state_19856;
(statearr_19859[(7)] = inst_19820);

(statearr_19859[(8)] = inst_19821);

return statearr_19859;
})();
var statearr_19860_19888 = state_19856__$1;
(statearr_19860_19888[(2)] = null);

(statearr_19860_19888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (4))){
var inst_19824 = (state_19856[(9)]);
var inst_19824__$1 = (state_19856[(2)]);
var inst_19825 = (inst_19824__$1 == null);
var inst_19826 = cljs.core.not.call(null,inst_19825);
var state_19856__$1 = (function (){var statearr_19861 = state_19856;
(statearr_19861[(9)] = inst_19824__$1);

return statearr_19861;
})();
if(inst_19826){
var statearr_19862_19889 = state_19856__$1;
(statearr_19862_19889[(1)] = (5));

} else {
var statearr_19863_19890 = state_19856__$1;
(statearr_19863_19890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (15))){
var inst_19846 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
var statearr_19864_19891 = state_19856__$1;
(statearr_19864_19891[(2)] = inst_19846);

(statearr_19864_19891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (13))){
var state_19856__$1 = state_19856;
var statearr_19865_19892 = state_19856__$1;
(statearr_19865_19892[(2)] = null);

(statearr_19865_19892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (6))){
var inst_19821 = (state_19856[(8)]);
var inst_19842 = (inst_19821 > (0));
var state_19856__$1 = state_19856;
if(cljs.core.truth_(inst_19842)){
var statearr_19866_19893 = state_19856__$1;
(statearr_19866_19893[(1)] = (12));

} else {
var statearr_19867_19894 = state_19856__$1;
(statearr_19867_19894[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (3))){
var inst_19854 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19856__$1,inst_19854);
} else {
if((state_val_19857 === (12))){
var inst_19820 = (state_19856[(7)]);
var inst_19844 = cljs.core.vec.call(null,inst_19820);
var state_19856__$1 = state_19856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19856__$1,(15),out,inst_19844);
} else {
if((state_val_19857 === (2))){
var state_19856__$1 = state_19856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19856__$1,(4),ch);
} else {
if((state_val_19857 === (11))){
var inst_19836 = (state_19856[(2)]);
var inst_19837 = (new Array(n));
var inst_19820 = inst_19837;
var inst_19821 = (0);
var state_19856__$1 = (function (){var statearr_19868 = state_19856;
(statearr_19868[(7)] = inst_19820);

(statearr_19868[(8)] = inst_19821);

(statearr_19868[(10)] = inst_19836);

return statearr_19868;
})();
var statearr_19869_19895 = state_19856__$1;
(statearr_19869_19895[(2)] = null);

(statearr_19869_19895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (9))){
var inst_19820 = (state_19856[(7)]);
var inst_19834 = cljs.core.vec.call(null,inst_19820);
var state_19856__$1 = state_19856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19856__$1,(11),out,inst_19834);
} else {
if((state_val_19857 === (5))){
var inst_19820 = (state_19856[(7)]);
var inst_19829 = (state_19856[(11)]);
var inst_19821 = (state_19856[(8)]);
var inst_19824 = (state_19856[(9)]);
var inst_19828 = (inst_19820[inst_19821] = inst_19824);
var inst_19829__$1 = (inst_19821 + (1));
var inst_19830 = (inst_19829__$1 < n);
var state_19856__$1 = (function (){var statearr_19870 = state_19856;
(statearr_19870[(12)] = inst_19828);

(statearr_19870[(11)] = inst_19829__$1);

return statearr_19870;
})();
if(cljs.core.truth_(inst_19830)){
var statearr_19871_19896 = state_19856__$1;
(statearr_19871_19896[(1)] = (8));

} else {
var statearr_19872_19897 = state_19856__$1;
(statearr_19872_19897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (14))){
var inst_19849 = (state_19856[(2)]);
var inst_19850 = cljs.core.async.close_BANG_.call(null,out);
var state_19856__$1 = (function (){var statearr_19874 = state_19856;
(statearr_19874[(13)] = inst_19849);

return statearr_19874;
})();
var statearr_19875_19898 = state_19856__$1;
(statearr_19875_19898[(2)] = inst_19850);

(statearr_19875_19898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (10))){
var inst_19840 = (state_19856[(2)]);
var state_19856__$1 = state_19856;
var statearr_19876_19899 = state_19856__$1;
(statearr_19876_19899[(2)] = inst_19840);

(statearr_19876_19899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19857 === (8))){
var inst_19820 = (state_19856[(7)]);
var inst_19829 = (state_19856[(11)]);
var tmp19873 = inst_19820;
var inst_19820__$1 = tmp19873;
var inst_19821 = inst_19829;
var state_19856__$1 = (function (){var statearr_19877 = state_19856;
(statearr_19877[(7)] = inst_19820__$1);

(statearr_19877[(8)] = inst_19821);

return statearr_19877;
})();
var statearr_19878_19900 = state_19856__$1;
(statearr_19878_19900[(2)] = null);

(statearr_19878_19900[(1)] = (2));


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
});})(c__6777__auto___19886,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19886,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19882[(0)] = state_machine__6722__auto__);

(statearr_19882[(1)] = (1));

return statearr_19882;
});
var state_machine__6722__auto____1 = (function (state_19856){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19883){if((e19883 instanceof Object)){
var ex__6725__auto__ = e19883;
var statearr_19884_19901 = state_19856;
(statearr_19884_19901[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19902 = state_19856;
state_19856 = G__19902;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19856){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19886,out))
})();
var state__6779__auto__ = (function (){var statearr_19885 = f__6778__auto__.call(null);
(statearr_19885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19886);

return statearr_19885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19886,out))
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
var c__6777__auto___20045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___20045,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___20045,out){
return (function (state_20015){
var state_val_20016 = (state_20015[(1)]);
if((state_val_20016 === (7))){
var inst_20011 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
var statearr_20017_20046 = state_20015__$1;
(statearr_20017_20046[(2)] = inst_20011);

(statearr_20017_20046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (1))){
var inst_19974 = [];
var inst_19975 = inst_19974;
var inst_19976 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20015__$1 = (function (){var statearr_20018 = state_20015;
(statearr_20018[(7)] = inst_19975);

(statearr_20018[(8)] = inst_19976);

return statearr_20018;
})();
var statearr_20019_20047 = state_20015__$1;
(statearr_20019_20047[(2)] = null);

(statearr_20019_20047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (4))){
var inst_19979 = (state_20015[(9)]);
var inst_19979__$1 = (state_20015[(2)]);
var inst_19980 = (inst_19979__$1 == null);
var inst_19981 = cljs.core.not.call(null,inst_19980);
var state_20015__$1 = (function (){var statearr_20020 = state_20015;
(statearr_20020[(9)] = inst_19979__$1);

return statearr_20020;
})();
if(inst_19981){
var statearr_20021_20048 = state_20015__$1;
(statearr_20021_20048[(1)] = (5));

} else {
var statearr_20022_20049 = state_20015__$1;
(statearr_20022_20049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (15))){
var inst_20005 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
var statearr_20023_20050 = state_20015__$1;
(statearr_20023_20050[(2)] = inst_20005);

(statearr_20023_20050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (13))){
var state_20015__$1 = state_20015;
var statearr_20024_20051 = state_20015__$1;
(statearr_20024_20051[(2)] = null);

(statearr_20024_20051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (6))){
var inst_19975 = (state_20015[(7)]);
var inst_20000 = inst_19975.length;
var inst_20001 = (inst_20000 > (0));
var state_20015__$1 = state_20015;
if(cljs.core.truth_(inst_20001)){
var statearr_20025_20052 = state_20015__$1;
(statearr_20025_20052[(1)] = (12));

} else {
var statearr_20026_20053 = state_20015__$1;
(statearr_20026_20053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (3))){
var inst_20013 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20015__$1,inst_20013);
} else {
if((state_val_20016 === (12))){
var inst_19975 = (state_20015[(7)]);
var inst_20003 = cljs.core.vec.call(null,inst_19975);
var state_20015__$1 = state_20015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20015__$1,(15),out,inst_20003);
} else {
if((state_val_20016 === (2))){
var state_20015__$1 = state_20015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20015__$1,(4),ch);
} else {
if((state_val_20016 === (11))){
var inst_19979 = (state_20015[(9)]);
var inst_19983 = (state_20015[(10)]);
var inst_19993 = (state_20015[(2)]);
var inst_19994 = [];
var inst_19995 = inst_19994.push(inst_19979);
var inst_19975 = inst_19994;
var inst_19976 = inst_19983;
var state_20015__$1 = (function (){var statearr_20027 = state_20015;
(statearr_20027[(11)] = inst_19995);

(statearr_20027[(12)] = inst_19993);

(statearr_20027[(7)] = inst_19975);

(statearr_20027[(8)] = inst_19976);

return statearr_20027;
})();
var statearr_20028_20054 = state_20015__$1;
(statearr_20028_20054[(2)] = null);

(statearr_20028_20054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (9))){
var inst_19975 = (state_20015[(7)]);
var inst_19991 = cljs.core.vec.call(null,inst_19975);
var state_20015__$1 = state_20015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20015__$1,(11),out,inst_19991);
} else {
if((state_val_20016 === (5))){
var inst_19979 = (state_20015[(9)]);
var inst_19983 = (state_20015[(10)]);
var inst_19976 = (state_20015[(8)]);
var inst_19983__$1 = f.call(null,inst_19979);
var inst_19984 = cljs.core._EQ_.call(null,inst_19983__$1,inst_19976);
var inst_19985 = cljs.core.keyword_identical_QMARK_.call(null,inst_19976,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19986 = (inst_19984) || (inst_19985);
var state_20015__$1 = (function (){var statearr_20029 = state_20015;
(statearr_20029[(10)] = inst_19983__$1);

return statearr_20029;
})();
if(cljs.core.truth_(inst_19986)){
var statearr_20030_20055 = state_20015__$1;
(statearr_20030_20055[(1)] = (8));

} else {
var statearr_20031_20056 = state_20015__$1;
(statearr_20031_20056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (14))){
var inst_20008 = (state_20015[(2)]);
var inst_20009 = cljs.core.async.close_BANG_.call(null,out);
var state_20015__$1 = (function (){var statearr_20033 = state_20015;
(statearr_20033[(13)] = inst_20008);

return statearr_20033;
})();
var statearr_20034_20057 = state_20015__$1;
(statearr_20034_20057[(2)] = inst_20009);

(statearr_20034_20057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (10))){
var inst_19998 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
var statearr_20035_20058 = state_20015__$1;
(statearr_20035_20058[(2)] = inst_19998);

(statearr_20035_20058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (8))){
var inst_19979 = (state_20015[(9)]);
var inst_19983 = (state_20015[(10)]);
var inst_19975 = (state_20015[(7)]);
var inst_19988 = inst_19975.push(inst_19979);
var tmp20032 = inst_19975;
var inst_19975__$1 = tmp20032;
var inst_19976 = inst_19983;
var state_20015__$1 = (function (){var statearr_20036 = state_20015;
(statearr_20036[(14)] = inst_19988);

(statearr_20036[(7)] = inst_19975__$1);

(statearr_20036[(8)] = inst_19976);

return statearr_20036;
})();
var statearr_20037_20059 = state_20015__$1;
(statearr_20037_20059[(2)] = null);

(statearr_20037_20059[(1)] = (2));


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
});})(c__6777__auto___20045,out))
;
return ((function (switch__6721__auto__,c__6777__auto___20045,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_20041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20041[(0)] = state_machine__6722__auto__);

(statearr_20041[(1)] = (1));

return statearr_20041;
});
var state_machine__6722__auto____1 = (function (state_20015){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_20015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e20042){if((e20042 instanceof Object)){
var ex__6725__auto__ = e20042;
var statearr_20043_20060 = state_20015;
(statearr_20043_20060[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20061 = state_20015;
state_20015 = G__20061;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_20015){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_20015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___20045,out))
})();
var state__6779__auto__ = (function (){var statearr_20044 = f__6778__auto__.call(null);
(statearr_20044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___20045);

return statearr_20044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___20045,out))
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
