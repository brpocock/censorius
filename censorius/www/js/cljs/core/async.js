// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('cljs.core.async')) {
goog.provide('cljs.core.async');
}
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t16862 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16862 = (function (f,fn_handler,meta16863){
this.f = f;
this.fn_handler = fn_handler;
this.meta16863 = meta16863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16862.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16864){
var self__ = this;
var _16864__$1 = this;
return self__.meta16863;
});

cljs.core.async.t16862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16864,meta16863__$1){
var self__ = this;
var _16864__$1 = this;
return (new cljs.core.async.t16862(self__.f,self__.fn_handler,meta16863__$1));
});

cljs.core.async.t16862.cljs$lang$type = true;

cljs.core.async.t16862.cljs$lang$ctorStr = "cljs.core.async/t16862";

cljs.core.async.t16862.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t16862");
});

cljs.core.async.__GT_t16862 = (function __GT_t16862(f__$1,fn_handler__$1,meta16863){
return (new cljs.core.async.t16862(f__$1,fn_handler__$1,meta16863));
});

}

return (new cljs.core.async.t16862(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var G__16866 = buff;
if(G__16866){
var bit__4480__auto__ = null;
if(cljs.core.truth_((function (){var or__3799__auto__ = bit__4480__auto__;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return G__16866.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16866.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16866);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16866);
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
var val_16867 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16867);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16867,ret){
return (function (){
return fn1.call(null,val_16867);
});})(val_16867,ret))
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
var n__4686__auto___16868 = n;
var x_16869 = (0);
while(true){
if((x_16869 < n__4686__auto___16868)){
(a[x_16869] = (0));

var G__16870 = (x_16869 + (1));
x_16869 = G__16870;
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

var G__16871 = (i + (1));
i = G__16871;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16875 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16875 = (function (flag,alt_flag,meta16876){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16876 = meta16876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16875.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16877){
var self__ = this;
var _16877__$1 = this;
return self__.meta16876;
});})(flag))
;

cljs.core.async.t16875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16877,meta16876__$1){
var self__ = this;
var _16877__$1 = this;
return (new cljs.core.async.t16875(self__.flag,self__.alt_flag,meta16876__$1));
});})(flag))
;

cljs.core.async.t16875.cljs$lang$type = true;

cljs.core.async.t16875.cljs$lang$ctorStr = "cljs.core.async/t16875";

cljs.core.async.t16875.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t16875");
});})(flag))
;

cljs.core.async.__GT_t16875 = ((function (flag){
return (function __GT_t16875(flag__$1,alt_flag__$1,meta16876){
return (new cljs.core.async.t16875(flag__$1,alt_flag__$1,meta16876));
});})(flag))
;

}

return (new cljs.core.async.t16875(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16881 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16881 = (function (cb,flag,alt_handler,meta16882){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16882 = meta16882;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16881.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16883){
var self__ = this;
var _16883__$1 = this;
return self__.meta16882;
});

cljs.core.async.t16881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16883,meta16882__$1){
var self__ = this;
var _16883__$1 = this;
return (new cljs.core.async.t16881(self__.cb,self__.flag,self__.alt_handler,meta16882__$1));
});

cljs.core.async.t16881.cljs$lang$type = true;

cljs.core.async.t16881.cljs$lang$ctorStr = "cljs.core.async/t16881";

cljs.core.async.t16881.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t16881");
});

cljs.core.async.__GT_t16881 = (function __GT_t16881(cb__$1,flag__$1,alt_handler__$1,meta16882){
return (new cljs.core.async.t16881(cb__$1,flag__$1,alt_handler__$1,meta16882));
});

}

return (new cljs.core.async.t16881(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
return (function (p1__16884_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16884_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16885_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16885_SHARP_,port], null));
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
var G__16886 = (i + (1));
i = G__16886;
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
var alts_BANG___delegate = function (ports,p__16887){
var map__16889 = p__16887;
var map__16889__$1 = ((cljs.core.seq_QMARK_.call(null,map__16889))?cljs.core.apply.call(null,cljs.core.hash_map,map__16889):map__16889);
var opts = map__16889__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16887 = null;
if (arguments.length > 1) {
var G__16890__i = 0, G__16890__a = new Array(arguments.length -  1);
while (G__16890__i < G__16890__a.length) {G__16890__a[G__16890__i] = arguments[G__16890__i + 1]; ++G__16890__i;}
  p__16887 = new cljs.core.IndexedSeq(G__16890__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__16887);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16891){
var ports = cljs.core.first(arglist__16891);
var p__16887 = cljs.core.rest(arglist__16891);
return alts_BANG___delegate(ports,p__16887);
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
var c__6859__auto___16986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___16986){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___16986){
return (function (state_16962){
var state_val_16963 = (state_16962[(1)]);
if((state_val_16963 === (7))){
var inst_16958 = (state_16962[(2)]);
var state_16962__$1 = state_16962;
var statearr_16964_16987 = state_16962__$1;
(statearr_16964_16987[(2)] = inst_16958);

(statearr_16964_16987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (1))){
var state_16962__$1 = state_16962;
var statearr_16965_16988 = state_16962__$1;
(statearr_16965_16988[(2)] = null);

(statearr_16965_16988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (4))){
var inst_16941 = (state_16962[(7)]);
var inst_16941__$1 = (state_16962[(2)]);
var inst_16942 = (inst_16941__$1 == null);
var state_16962__$1 = (function (){var statearr_16966 = state_16962;
(statearr_16966[(7)] = inst_16941__$1);

return statearr_16966;
})();
if(cljs.core.truth_(inst_16942)){
var statearr_16967_16989 = state_16962__$1;
(statearr_16967_16989[(1)] = (5));

} else {
var statearr_16968_16990 = state_16962__$1;
(statearr_16968_16990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (13))){
var state_16962__$1 = state_16962;
var statearr_16969_16991 = state_16962__$1;
(statearr_16969_16991[(2)] = null);

(statearr_16969_16991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (6))){
var inst_16941 = (state_16962[(7)]);
var state_16962__$1 = state_16962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16962__$1,(11),to,inst_16941);
} else {
if((state_val_16963 === (3))){
var inst_16960 = (state_16962[(2)]);
var state_16962__$1 = state_16962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16962__$1,inst_16960);
} else {
if((state_val_16963 === (12))){
var state_16962__$1 = state_16962;
var statearr_16970_16992 = state_16962__$1;
(statearr_16970_16992[(2)] = null);

(statearr_16970_16992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (2))){
var state_16962__$1 = state_16962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16962__$1,(4),from);
} else {
if((state_val_16963 === (11))){
var inst_16951 = (state_16962[(2)]);
var state_16962__$1 = state_16962;
if(cljs.core.truth_(inst_16951)){
var statearr_16971_16993 = state_16962__$1;
(statearr_16971_16993[(1)] = (12));

} else {
var statearr_16972_16994 = state_16962__$1;
(statearr_16972_16994[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (9))){
var state_16962__$1 = state_16962;
var statearr_16973_16995 = state_16962__$1;
(statearr_16973_16995[(2)] = null);

(statearr_16973_16995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (5))){
var state_16962__$1 = state_16962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16974_16996 = state_16962__$1;
(statearr_16974_16996[(1)] = (8));

} else {
var statearr_16975_16997 = state_16962__$1;
(statearr_16975_16997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (14))){
var inst_16956 = (state_16962[(2)]);
var state_16962__$1 = state_16962;
var statearr_16976_16998 = state_16962__$1;
(statearr_16976_16998[(2)] = inst_16956);

(statearr_16976_16998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (10))){
var inst_16948 = (state_16962[(2)]);
var state_16962__$1 = state_16962;
var statearr_16977_16999 = state_16962__$1;
(statearr_16977_16999[(2)] = inst_16948);

(statearr_16977_16999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (8))){
var inst_16945 = cljs.core.async.close_BANG_.call(null,to);
var state_16962__$1 = state_16962;
var statearr_16978_17000 = state_16962__$1;
(statearr_16978_17000[(2)] = inst_16945);

(statearr_16978_17000[(1)] = (10));


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
});})(c__6859__auto___16986))
;
return ((function (switch__6803__auto__,c__6859__auto___16986){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_16982 = [null,null,null,null,null,null,null,null];
(statearr_16982[(0)] = state_machine__6804__auto__);

(statearr_16982[(1)] = (1));

return statearr_16982;
});
var state_machine__6804__auto____1 = (function (state_16962){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_16962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e16983){if((e16983 instanceof Object)){
var ex__6807__auto__ = e16983;
var statearr_16984_17001 = state_16962;
(statearr_16984_17001[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17002 = state_16962;
state_16962 = G__17002;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_16962){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_16962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___16986))
})();
var state__6861__auto__ = (function (){var statearr_16985 = f__6860__auto__.call(null);
(statearr_16985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___16986);

return statearr_16985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___16986))
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
return (function (p__17186){
var vec__17187 = p__17186;
var v = cljs.core.nth.call(null,vec__17187,(0),null);
var p = cljs.core.nth.call(null,vec__17187,(1),null);
var job = vec__17187;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6859__auto___17369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___17369,res,vec__17187,v,p,job,jobs,results){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___17369,res,vec__17187,v,p,job,jobs,results){
return (function (state_17192){
var state_val_17193 = (state_17192[(1)]);
if((state_val_17193 === (2))){
var inst_17189 = (state_17192[(2)]);
var inst_17190 = cljs.core.async.close_BANG_.call(null,res);
var state_17192__$1 = (function (){var statearr_17194 = state_17192;
(statearr_17194[(7)] = inst_17189);

return statearr_17194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17192__$1,inst_17190);
} else {
if((state_val_17193 === (1))){
var state_17192__$1 = state_17192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17192__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6859__auto___17369,res,vec__17187,v,p,job,jobs,results))
;
return ((function (switch__6803__auto__,c__6859__auto___17369,res,vec__17187,v,p,job,jobs,results){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_17198 = [null,null,null,null,null,null,null,null];
(statearr_17198[(0)] = state_machine__6804__auto__);

(statearr_17198[(1)] = (1));

return statearr_17198;
});
var state_machine__6804__auto____1 = (function (state_17192){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_17192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e17199){if((e17199 instanceof Object)){
var ex__6807__auto__ = e17199;
var statearr_17200_17370 = state_17192;
(statearr_17200_17370[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17371 = state_17192;
state_17192 = G__17371;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_17192){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_17192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___17369,res,vec__17187,v,p,job,jobs,results))
})();
var state__6861__auto__ = (function (){var statearr_17201 = f__6860__auto__.call(null);
(statearr_17201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___17369);

return statearr_17201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___17369,res,vec__17187,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17202){
var vec__17203 = p__17202;
var v = cljs.core.nth.call(null,vec__17203,(0),null);
var p = cljs.core.nth.call(null,vec__17203,(1),null);
var job = vec__17203;
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
var n__4686__auto___17372 = n;
var __17373 = (0);
while(true){
if((__17373 < n__4686__auto___17372)){
var G__17204_17374 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17204_17374) {
case "async":
var c__6859__auto___17376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17373,c__6859__auto___17376,G__17204_17374,n__4686__auto___17372,jobs,results,process,async){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (__17373,c__6859__auto___17376,G__17204_17374,n__4686__auto___17372,jobs,results,process,async){
return (function (state_17217){
var state_val_17218 = (state_17217[(1)]);
if((state_val_17218 === (7))){
var inst_17213 = (state_17217[(2)]);
var state_17217__$1 = state_17217;
var statearr_17219_17377 = state_17217__$1;
(statearr_17219_17377[(2)] = inst_17213);

(statearr_17219_17377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17218 === (6))){
var state_17217__$1 = state_17217;
var statearr_17220_17378 = state_17217__$1;
(statearr_17220_17378[(2)] = null);

(statearr_17220_17378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17218 === (5))){
var state_17217__$1 = state_17217;
var statearr_17221_17379 = state_17217__$1;
(statearr_17221_17379[(2)] = null);

(statearr_17221_17379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17218 === (4))){
var inst_17207 = (state_17217[(2)]);
var inst_17208 = async.call(null,inst_17207);
var state_17217__$1 = state_17217;
if(cljs.core.truth_(inst_17208)){
var statearr_17222_17380 = state_17217__$1;
(statearr_17222_17380[(1)] = (5));

} else {
var statearr_17223_17381 = state_17217__$1;
(statearr_17223_17381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17218 === (3))){
var inst_17215 = (state_17217[(2)]);
var state_17217__$1 = state_17217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17217__$1,inst_17215);
} else {
if((state_val_17218 === (2))){
var state_17217__$1 = state_17217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17217__$1,(4),jobs);
} else {
if((state_val_17218 === (1))){
var state_17217__$1 = state_17217;
var statearr_17224_17382 = state_17217__$1;
(statearr_17224_17382[(2)] = null);

(statearr_17224_17382[(1)] = (2));


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
});})(__17373,c__6859__auto___17376,G__17204_17374,n__4686__auto___17372,jobs,results,process,async))
;
return ((function (__17373,switch__6803__auto__,c__6859__auto___17376,G__17204_17374,n__4686__auto___17372,jobs,results,process,async){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_17228 = [null,null,null,null,null,null,null];
(statearr_17228[(0)] = state_machine__6804__auto__);

(statearr_17228[(1)] = (1));

return statearr_17228;
});
var state_machine__6804__auto____1 = (function (state_17217){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_17217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e17229){if((e17229 instanceof Object)){
var ex__6807__auto__ = e17229;
var statearr_17230_17383 = state_17217;
(statearr_17230_17383[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17384 = state_17217;
state_17217 = G__17384;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_17217){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_17217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(__17373,switch__6803__auto__,c__6859__auto___17376,G__17204_17374,n__4686__auto___17372,jobs,results,process,async))
})();
var state__6861__auto__ = (function (){var statearr_17231 = f__6860__auto__.call(null);
(statearr_17231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___17376);

return statearr_17231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(__17373,c__6859__auto___17376,G__17204_17374,n__4686__auto___17372,jobs,results,process,async))
);


break;
case "compute":
var c__6859__auto___17385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17373,c__6859__auto___17385,G__17204_17374,n__4686__auto___17372,jobs,results,process,async){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (__17373,c__6859__auto___17385,G__17204_17374,n__4686__auto___17372,jobs,results,process,async){
return (function (state_17244){
var state_val_17245 = (state_17244[(1)]);
if((state_val_17245 === (7))){
var inst_17240 = (state_17244[(2)]);
var state_17244__$1 = state_17244;
var statearr_17246_17386 = state_17244__$1;
(statearr_17246_17386[(2)] = inst_17240);

(statearr_17246_17386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17245 === (6))){
var state_17244__$1 = state_17244;
var statearr_17247_17387 = state_17244__$1;
(statearr_17247_17387[(2)] = null);

(statearr_17247_17387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17245 === (5))){
var state_17244__$1 = state_17244;
var statearr_17248_17388 = state_17244__$1;
(statearr_17248_17388[(2)] = null);

(statearr_17248_17388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17245 === (4))){
var inst_17234 = (state_17244[(2)]);
var inst_17235 = process.call(null,inst_17234);
var state_17244__$1 = state_17244;
if(cljs.core.truth_(inst_17235)){
var statearr_17249_17389 = state_17244__$1;
(statearr_17249_17389[(1)] = (5));

} else {
var statearr_17250_17390 = state_17244__$1;
(statearr_17250_17390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17245 === (3))){
var inst_17242 = (state_17244[(2)]);
var state_17244__$1 = state_17244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17244__$1,inst_17242);
} else {
if((state_val_17245 === (2))){
var state_17244__$1 = state_17244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17244__$1,(4),jobs);
} else {
if((state_val_17245 === (1))){
var state_17244__$1 = state_17244;
var statearr_17251_17391 = state_17244__$1;
(statearr_17251_17391[(2)] = null);

(statearr_17251_17391[(1)] = (2));


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
});})(__17373,c__6859__auto___17385,G__17204_17374,n__4686__auto___17372,jobs,results,process,async))
;
return ((function (__17373,switch__6803__auto__,c__6859__auto___17385,G__17204_17374,n__4686__auto___17372,jobs,results,process,async){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_17255 = [null,null,null,null,null,null,null];
(statearr_17255[(0)] = state_machine__6804__auto__);

(statearr_17255[(1)] = (1));

return statearr_17255;
});
var state_machine__6804__auto____1 = (function (state_17244){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_17244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e17256){if((e17256 instanceof Object)){
var ex__6807__auto__ = e17256;
var statearr_17257_17392 = state_17244;
(statearr_17257_17392[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17393 = state_17244;
state_17244 = G__17393;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_17244){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_17244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(__17373,switch__6803__auto__,c__6859__auto___17385,G__17204_17374,n__4686__auto___17372,jobs,results,process,async))
})();
var state__6861__auto__ = (function (){var statearr_17258 = f__6860__auto__.call(null);
(statearr_17258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___17385);

return statearr_17258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(__17373,c__6859__auto___17385,G__17204_17374,n__4686__auto___17372,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17394 = (__17373 + (1));
__17373 = G__17394;
continue;
} else {
}
break;
}

var c__6859__auto___17395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___17395,jobs,results,process,async){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___17395,jobs,results,process,async){
return (function (state_17280){
var state_val_17281 = (state_17280[(1)]);
if((state_val_17281 === (9))){
var inst_17273 = (state_17280[(2)]);
var state_17280__$1 = (function (){var statearr_17282 = state_17280;
(statearr_17282[(7)] = inst_17273);

return statearr_17282;
})();
var statearr_17283_17396 = state_17280__$1;
(statearr_17283_17396[(2)] = null);

(statearr_17283_17396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (8))){
var inst_17266 = (state_17280[(8)]);
var inst_17271 = (state_17280[(2)]);
var state_17280__$1 = (function (){var statearr_17284 = state_17280;
(statearr_17284[(9)] = inst_17271);

return statearr_17284;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17280__$1,(9),results,inst_17266);
} else {
if((state_val_17281 === (7))){
var inst_17276 = (state_17280[(2)]);
var state_17280__$1 = state_17280;
var statearr_17285_17397 = state_17280__$1;
(statearr_17285_17397[(2)] = inst_17276);

(statearr_17285_17397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (6))){
var inst_17266 = (state_17280[(8)]);
var inst_17261 = (state_17280[(10)]);
var inst_17266__$1 = cljs.core.async.chan.call(null,(1));
var inst_17267 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17268 = [inst_17261,inst_17266__$1];
var inst_17269 = (new cljs.core.PersistentVector(null,2,(5),inst_17267,inst_17268,null));
var state_17280__$1 = (function (){var statearr_17286 = state_17280;
(statearr_17286[(8)] = inst_17266__$1);

return statearr_17286;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17280__$1,(8),jobs,inst_17269);
} else {
if((state_val_17281 === (5))){
var inst_17264 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17280__$1 = state_17280;
var statearr_17287_17398 = state_17280__$1;
(statearr_17287_17398[(2)] = inst_17264);

(statearr_17287_17398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (4))){
var inst_17261 = (state_17280[(10)]);
var inst_17261__$1 = (state_17280[(2)]);
var inst_17262 = (inst_17261__$1 == null);
var state_17280__$1 = (function (){var statearr_17288 = state_17280;
(statearr_17288[(10)] = inst_17261__$1);

return statearr_17288;
})();
if(cljs.core.truth_(inst_17262)){
var statearr_17289_17399 = state_17280__$1;
(statearr_17289_17399[(1)] = (5));

} else {
var statearr_17290_17400 = state_17280__$1;
(statearr_17290_17400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (3))){
var inst_17278 = (state_17280[(2)]);
var state_17280__$1 = state_17280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17280__$1,inst_17278);
} else {
if((state_val_17281 === (2))){
var state_17280__$1 = state_17280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17280__$1,(4),from);
} else {
if((state_val_17281 === (1))){
var state_17280__$1 = state_17280;
var statearr_17291_17401 = state_17280__$1;
(statearr_17291_17401[(2)] = null);

(statearr_17291_17401[(1)] = (2));


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
});})(c__6859__auto___17395,jobs,results,process,async))
;
return ((function (switch__6803__auto__,c__6859__auto___17395,jobs,results,process,async){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_17295 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17295[(0)] = state_machine__6804__auto__);

(statearr_17295[(1)] = (1));

return statearr_17295;
});
var state_machine__6804__auto____1 = (function (state_17280){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_17280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e17296){if((e17296 instanceof Object)){
var ex__6807__auto__ = e17296;
var statearr_17297_17402 = state_17280;
(statearr_17297_17402[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17403 = state_17280;
state_17280 = G__17403;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_17280){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_17280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___17395,jobs,results,process,async))
})();
var state__6861__auto__ = (function (){var statearr_17298 = f__6860__auto__.call(null);
(statearr_17298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___17395);

return statearr_17298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___17395,jobs,results,process,async))
);


var c__6859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto__,jobs,results,process,async){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto__,jobs,results,process,async){
return (function (state_17336){
var state_val_17337 = (state_17336[(1)]);
if((state_val_17337 === (7))){
var inst_17332 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17338_17404 = state_17336__$1;
(statearr_17338_17404[(2)] = inst_17332);

(statearr_17338_17404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (20))){
var state_17336__$1 = state_17336;
var statearr_17339_17405 = state_17336__$1;
(statearr_17339_17405[(2)] = null);

(statearr_17339_17405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (1))){
var state_17336__$1 = state_17336;
var statearr_17340_17406 = state_17336__$1;
(statearr_17340_17406[(2)] = null);

(statearr_17340_17406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (4))){
var inst_17301 = (state_17336[(7)]);
var inst_17301__$1 = (state_17336[(2)]);
var inst_17302 = (inst_17301__$1 == null);
var state_17336__$1 = (function (){var statearr_17341 = state_17336;
(statearr_17341[(7)] = inst_17301__$1);

return statearr_17341;
})();
if(cljs.core.truth_(inst_17302)){
var statearr_17342_17407 = state_17336__$1;
(statearr_17342_17407[(1)] = (5));

} else {
var statearr_17343_17408 = state_17336__$1;
(statearr_17343_17408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (15))){
var inst_17314 = (state_17336[(8)]);
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17336__$1,(18),to,inst_17314);
} else {
if((state_val_17337 === (21))){
var inst_17327 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17344_17409 = state_17336__$1;
(statearr_17344_17409[(2)] = inst_17327);

(statearr_17344_17409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (13))){
var inst_17329 = (state_17336[(2)]);
var state_17336__$1 = (function (){var statearr_17345 = state_17336;
(statearr_17345[(9)] = inst_17329);

return statearr_17345;
})();
var statearr_17346_17410 = state_17336__$1;
(statearr_17346_17410[(2)] = null);

(statearr_17346_17410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (6))){
var inst_17301 = (state_17336[(7)]);
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17336__$1,(11),inst_17301);
} else {
if((state_val_17337 === (17))){
var inst_17322 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
if(cljs.core.truth_(inst_17322)){
var statearr_17347_17411 = state_17336__$1;
(statearr_17347_17411[(1)] = (19));

} else {
var statearr_17348_17412 = state_17336__$1;
(statearr_17348_17412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (3))){
var inst_17334 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17336__$1,inst_17334);
} else {
if((state_val_17337 === (12))){
var inst_17311 = (state_17336[(10)]);
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17336__$1,(14),inst_17311);
} else {
if((state_val_17337 === (2))){
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17336__$1,(4),results);
} else {
if((state_val_17337 === (19))){
var state_17336__$1 = state_17336;
var statearr_17349_17413 = state_17336__$1;
(statearr_17349_17413[(2)] = null);

(statearr_17349_17413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (11))){
var inst_17311 = (state_17336[(2)]);
var state_17336__$1 = (function (){var statearr_17350 = state_17336;
(statearr_17350[(10)] = inst_17311);

return statearr_17350;
})();
var statearr_17351_17414 = state_17336__$1;
(statearr_17351_17414[(2)] = null);

(statearr_17351_17414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (9))){
var state_17336__$1 = state_17336;
var statearr_17352_17415 = state_17336__$1;
(statearr_17352_17415[(2)] = null);

(statearr_17352_17415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (5))){
var state_17336__$1 = state_17336;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17353_17416 = state_17336__$1;
(statearr_17353_17416[(1)] = (8));

} else {
var statearr_17354_17417 = state_17336__$1;
(statearr_17354_17417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (14))){
var inst_17314 = (state_17336[(8)]);
var inst_17316 = (state_17336[(11)]);
var inst_17314__$1 = (state_17336[(2)]);
var inst_17315 = (inst_17314__$1 == null);
var inst_17316__$1 = cljs.core.not.call(null,inst_17315);
var state_17336__$1 = (function (){var statearr_17355 = state_17336;
(statearr_17355[(8)] = inst_17314__$1);

(statearr_17355[(11)] = inst_17316__$1);

return statearr_17355;
})();
if(inst_17316__$1){
var statearr_17356_17418 = state_17336__$1;
(statearr_17356_17418[(1)] = (15));

} else {
var statearr_17357_17419 = state_17336__$1;
(statearr_17357_17419[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (16))){
var inst_17316 = (state_17336[(11)]);
var state_17336__$1 = state_17336;
var statearr_17358_17420 = state_17336__$1;
(statearr_17358_17420[(2)] = inst_17316);

(statearr_17358_17420[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (10))){
var inst_17308 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17359_17421 = state_17336__$1;
(statearr_17359_17421[(2)] = inst_17308);

(statearr_17359_17421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (18))){
var inst_17319 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17360_17422 = state_17336__$1;
(statearr_17360_17422[(2)] = inst_17319);

(statearr_17360_17422[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17337 === (8))){
var inst_17305 = cljs.core.async.close_BANG_.call(null,to);
var state_17336__$1 = state_17336;
var statearr_17361_17423 = state_17336__$1;
(statearr_17361_17423[(2)] = inst_17305);

(statearr_17361_17423[(1)] = (10));


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
});})(c__6859__auto__,jobs,results,process,async))
;
return ((function (switch__6803__auto__,c__6859__auto__,jobs,results,process,async){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_17365 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17365[(0)] = state_machine__6804__auto__);

(statearr_17365[(1)] = (1));

return statearr_17365;
});
var state_machine__6804__auto____1 = (function (state_17336){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_17336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e17366){if((e17366 instanceof Object)){
var ex__6807__auto__ = e17366;
var statearr_17367_17424 = state_17336;
(statearr_17367_17424[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17425 = state_17336;
state_17336 = G__17425;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_17336){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_17336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto__,jobs,results,process,async))
})();
var state__6861__auto__ = (function (){var statearr_17368 = f__6860__auto__.call(null);
(statearr_17368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto__);

return statearr_17368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto__,jobs,results,process,async))
);

return c__6859__auto__;
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
var c__6859__auto___17526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___17526,tc,fc){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___17526,tc,fc){
return (function (state_17501){
var state_val_17502 = (state_17501[(1)]);
if((state_val_17502 === (7))){
var inst_17497 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
var statearr_17503_17527 = state_17501__$1;
(statearr_17503_17527[(2)] = inst_17497);

(statearr_17503_17527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (1))){
var state_17501__$1 = state_17501;
var statearr_17504_17528 = state_17501__$1;
(statearr_17504_17528[(2)] = null);

(statearr_17504_17528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (4))){
var inst_17478 = (state_17501[(7)]);
var inst_17478__$1 = (state_17501[(2)]);
var inst_17479 = (inst_17478__$1 == null);
var state_17501__$1 = (function (){var statearr_17505 = state_17501;
(statearr_17505[(7)] = inst_17478__$1);

return statearr_17505;
})();
if(cljs.core.truth_(inst_17479)){
var statearr_17506_17529 = state_17501__$1;
(statearr_17506_17529[(1)] = (5));

} else {
var statearr_17507_17530 = state_17501__$1;
(statearr_17507_17530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (13))){
var state_17501__$1 = state_17501;
var statearr_17508_17531 = state_17501__$1;
(statearr_17508_17531[(2)] = null);

(statearr_17508_17531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (6))){
var inst_17478 = (state_17501[(7)]);
var inst_17484 = p.call(null,inst_17478);
var state_17501__$1 = state_17501;
if(cljs.core.truth_(inst_17484)){
var statearr_17509_17532 = state_17501__$1;
(statearr_17509_17532[(1)] = (9));

} else {
var statearr_17510_17533 = state_17501__$1;
(statearr_17510_17533[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (3))){
var inst_17499 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17501__$1,inst_17499);
} else {
if((state_val_17502 === (12))){
var state_17501__$1 = state_17501;
var statearr_17511_17534 = state_17501__$1;
(statearr_17511_17534[(2)] = null);

(statearr_17511_17534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (2))){
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17501__$1,(4),ch);
} else {
if((state_val_17502 === (11))){
var inst_17478 = (state_17501[(7)]);
var inst_17488 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17501__$1,(8),inst_17488,inst_17478);
} else {
if((state_val_17502 === (9))){
var state_17501__$1 = state_17501;
var statearr_17512_17535 = state_17501__$1;
(statearr_17512_17535[(2)] = tc);

(statearr_17512_17535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (5))){
var inst_17481 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17482 = cljs.core.async.close_BANG_.call(null,fc);
var state_17501__$1 = (function (){var statearr_17513 = state_17501;
(statearr_17513[(8)] = inst_17481);

return statearr_17513;
})();
var statearr_17514_17536 = state_17501__$1;
(statearr_17514_17536[(2)] = inst_17482);

(statearr_17514_17536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (14))){
var inst_17495 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
var statearr_17515_17537 = state_17501__$1;
(statearr_17515_17537[(2)] = inst_17495);

(statearr_17515_17537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (10))){
var state_17501__$1 = state_17501;
var statearr_17516_17538 = state_17501__$1;
(statearr_17516_17538[(2)] = fc);

(statearr_17516_17538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (8))){
var inst_17490 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
if(cljs.core.truth_(inst_17490)){
var statearr_17517_17539 = state_17501__$1;
(statearr_17517_17539[(1)] = (12));

} else {
var statearr_17518_17540 = state_17501__$1;
(statearr_17518_17540[(1)] = (13));

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
});})(c__6859__auto___17526,tc,fc))
;
return ((function (switch__6803__auto__,c__6859__auto___17526,tc,fc){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_17522 = [null,null,null,null,null,null,null,null,null];
(statearr_17522[(0)] = state_machine__6804__auto__);

(statearr_17522[(1)] = (1));

return statearr_17522;
});
var state_machine__6804__auto____1 = (function (state_17501){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_17501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e17523){if((e17523 instanceof Object)){
var ex__6807__auto__ = e17523;
var statearr_17524_17541 = state_17501;
(statearr_17524_17541[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17542 = state_17501;
state_17501 = G__17542;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_17501){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_17501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___17526,tc,fc))
})();
var state__6861__auto__ = (function (){var statearr_17525 = f__6860__auto__.call(null);
(statearr_17525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___17526);

return statearr_17525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___17526,tc,fc))
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
var c__6859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto__){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto__){
return (function (state_17589){
var state_val_17590 = (state_17589[(1)]);
if((state_val_17590 === (7))){
var inst_17585 = (state_17589[(2)]);
var state_17589__$1 = state_17589;
var statearr_17591_17607 = state_17589__$1;
(statearr_17591_17607[(2)] = inst_17585);

(statearr_17591_17607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17590 === (6))){
var inst_17575 = (state_17589[(7)]);
var inst_17578 = (state_17589[(8)]);
var inst_17582 = f.call(null,inst_17575,inst_17578);
var inst_17575__$1 = inst_17582;
var state_17589__$1 = (function (){var statearr_17592 = state_17589;
(statearr_17592[(7)] = inst_17575__$1);

return statearr_17592;
})();
var statearr_17593_17608 = state_17589__$1;
(statearr_17593_17608[(2)] = null);

(statearr_17593_17608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17590 === (5))){
var inst_17575 = (state_17589[(7)]);
var state_17589__$1 = state_17589;
var statearr_17594_17609 = state_17589__$1;
(statearr_17594_17609[(2)] = inst_17575);

(statearr_17594_17609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17590 === (4))){
var inst_17578 = (state_17589[(8)]);
var inst_17578__$1 = (state_17589[(2)]);
var inst_17579 = (inst_17578__$1 == null);
var state_17589__$1 = (function (){var statearr_17595 = state_17589;
(statearr_17595[(8)] = inst_17578__$1);

return statearr_17595;
})();
if(cljs.core.truth_(inst_17579)){
var statearr_17596_17610 = state_17589__$1;
(statearr_17596_17610[(1)] = (5));

} else {
var statearr_17597_17611 = state_17589__$1;
(statearr_17597_17611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17590 === (3))){
var inst_17587 = (state_17589[(2)]);
var state_17589__$1 = state_17589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17589__$1,inst_17587);
} else {
if((state_val_17590 === (2))){
var state_17589__$1 = state_17589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17589__$1,(4),ch);
} else {
if((state_val_17590 === (1))){
var inst_17575 = init;
var state_17589__$1 = (function (){var statearr_17598 = state_17589;
(statearr_17598[(7)] = inst_17575);

return statearr_17598;
})();
var statearr_17599_17612 = state_17589__$1;
(statearr_17599_17612[(2)] = null);

(statearr_17599_17612[(1)] = (2));


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
});})(c__6859__auto__))
;
return ((function (switch__6803__auto__,c__6859__auto__){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_17603 = [null,null,null,null,null,null,null,null,null];
(statearr_17603[(0)] = state_machine__6804__auto__);

(statearr_17603[(1)] = (1));

return statearr_17603;
});
var state_machine__6804__auto____1 = (function (state_17589){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_17589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e17604){if((e17604 instanceof Object)){
var ex__6807__auto__ = e17604;
var statearr_17605_17613 = state_17589;
(statearr_17605_17613[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17614 = state_17589;
state_17589 = G__17614;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_17589){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_17589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto__))
})();
var state__6861__auto__ = (function (){var statearr_17606 = f__6860__auto__.call(null);
(statearr_17606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto__);

return statearr_17606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto__))
);

return c__6859__auto__;
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
var c__6859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto__){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto__){
return (function (state_17688){
var state_val_17689 = (state_17688[(1)]);
if((state_val_17689 === (7))){
var inst_17670 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
var statearr_17690_17713 = state_17688__$1;
(statearr_17690_17713[(2)] = inst_17670);

(statearr_17690_17713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (1))){
var inst_17664 = cljs.core.seq.call(null,coll);
var inst_17665 = inst_17664;
var state_17688__$1 = (function (){var statearr_17691 = state_17688;
(statearr_17691[(7)] = inst_17665);

return statearr_17691;
})();
var statearr_17692_17714 = state_17688__$1;
(statearr_17692_17714[(2)] = null);

(statearr_17692_17714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (4))){
var inst_17665 = (state_17688[(7)]);
var inst_17668 = cljs.core.first.call(null,inst_17665);
var state_17688__$1 = state_17688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17688__$1,(7),ch,inst_17668);
} else {
if((state_val_17689 === (13))){
var inst_17682 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
var statearr_17693_17715 = state_17688__$1;
(statearr_17693_17715[(2)] = inst_17682);

(statearr_17693_17715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (6))){
var inst_17673 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
if(cljs.core.truth_(inst_17673)){
var statearr_17694_17716 = state_17688__$1;
(statearr_17694_17716[(1)] = (8));

} else {
var statearr_17695_17717 = state_17688__$1;
(statearr_17695_17717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (3))){
var inst_17686 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17688__$1,inst_17686);
} else {
if((state_val_17689 === (12))){
var state_17688__$1 = state_17688;
var statearr_17696_17718 = state_17688__$1;
(statearr_17696_17718[(2)] = null);

(statearr_17696_17718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (2))){
var inst_17665 = (state_17688[(7)]);
var state_17688__$1 = state_17688;
if(cljs.core.truth_(inst_17665)){
var statearr_17697_17719 = state_17688__$1;
(statearr_17697_17719[(1)] = (4));

} else {
var statearr_17698_17720 = state_17688__$1;
(statearr_17698_17720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (11))){
var inst_17679 = cljs.core.async.close_BANG_.call(null,ch);
var state_17688__$1 = state_17688;
var statearr_17699_17721 = state_17688__$1;
(statearr_17699_17721[(2)] = inst_17679);

(statearr_17699_17721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (9))){
var state_17688__$1 = state_17688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17700_17722 = state_17688__$1;
(statearr_17700_17722[(1)] = (11));

} else {
var statearr_17701_17723 = state_17688__$1;
(statearr_17701_17723[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (5))){
var inst_17665 = (state_17688[(7)]);
var state_17688__$1 = state_17688;
var statearr_17702_17724 = state_17688__$1;
(statearr_17702_17724[(2)] = inst_17665);

(statearr_17702_17724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (10))){
var inst_17684 = (state_17688[(2)]);
var state_17688__$1 = state_17688;
var statearr_17703_17725 = state_17688__$1;
(statearr_17703_17725[(2)] = inst_17684);

(statearr_17703_17725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17689 === (8))){
var inst_17665 = (state_17688[(7)]);
var inst_17675 = cljs.core.next.call(null,inst_17665);
var inst_17665__$1 = inst_17675;
var state_17688__$1 = (function (){var statearr_17704 = state_17688;
(statearr_17704[(7)] = inst_17665__$1);

return statearr_17704;
})();
var statearr_17705_17726 = state_17688__$1;
(statearr_17705_17726[(2)] = null);

(statearr_17705_17726[(1)] = (2));


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
});})(c__6859__auto__))
;
return ((function (switch__6803__auto__,c__6859__auto__){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_17709 = [null,null,null,null,null,null,null,null];
(statearr_17709[(0)] = state_machine__6804__auto__);

(statearr_17709[(1)] = (1));

return statearr_17709;
});
var state_machine__6804__auto____1 = (function (state_17688){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_17688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e17710){if((e17710 instanceof Object)){
var ex__6807__auto__ = e17710;
var statearr_17711_17727 = state_17688;
(statearr_17711_17727[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17728 = state_17688;
state_17688 = G__17728;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_17688){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_17688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto__))
})();
var state__6861__auto__ = (function (){var statearr_17712 = f__6860__auto__.call(null);
(statearr_17712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto__);

return statearr_17712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto__))
);

return c__6859__auto__;
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

cljs.core.async.Mux = (function (){var obj17730 = {};
return obj17730;
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


cljs.core.async.Mult = (function (){var obj17732 = {};
return obj17732;
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
if(typeof cljs.core.async.t17954 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17954 = (function (cs,ch,mult,meta17955){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17955 = meta17955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17954.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17954.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17954.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17954.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17954.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17956){
var self__ = this;
var _17956__$1 = this;
return self__.meta17955;
});})(cs))
;

cljs.core.async.t17954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17956,meta17955__$1){
var self__ = this;
var _17956__$1 = this;
return (new cljs.core.async.t17954(self__.cs,self__.ch,self__.mult,meta17955__$1));
});})(cs))
;

cljs.core.async.t17954.cljs$lang$type = true;

cljs.core.async.t17954.cljs$lang$ctorStr = "cljs.core.async/t17954";

cljs.core.async.t17954.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t17954");
});})(cs))
;

cljs.core.async.__GT_t17954 = ((function (cs){
return (function __GT_t17954(cs__$1,ch__$1,mult__$1,meta17955){
return (new cljs.core.async.t17954(cs__$1,ch__$1,mult__$1,meta17955));
});})(cs))
;

}

return (new cljs.core.async.t17954(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var c__6859__auto___18175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___18175,cs,m,dchan,dctr,done){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___18175,cs,m,dchan,dctr,done){
return (function (state_18087){
var state_val_18088 = (state_18087[(1)]);
if((state_val_18088 === (7))){
var inst_18083 = (state_18087[(2)]);
var state_18087__$1 = state_18087;
var statearr_18089_18176 = state_18087__$1;
(statearr_18089_18176[(2)] = inst_18083);

(statearr_18089_18176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (20))){
var inst_17988 = (state_18087[(7)]);
var inst_17998 = cljs.core.first.call(null,inst_17988);
var inst_17999 = cljs.core.nth.call(null,inst_17998,(0),null);
var inst_18000 = cljs.core.nth.call(null,inst_17998,(1),null);
var state_18087__$1 = (function (){var statearr_18090 = state_18087;
(statearr_18090[(8)] = inst_17999);

return statearr_18090;
})();
if(cljs.core.truth_(inst_18000)){
var statearr_18091_18177 = state_18087__$1;
(statearr_18091_18177[(1)] = (22));

} else {
var statearr_18092_18178 = state_18087__$1;
(statearr_18092_18178[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (27))){
var inst_17959 = (state_18087[(9)]);
var inst_18030 = (state_18087[(10)]);
var inst_18035 = (state_18087[(11)]);
var inst_18028 = (state_18087[(12)]);
var inst_18035__$1 = cljs.core._nth.call(null,inst_18028,inst_18030);
var inst_18036 = cljs.core.async.put_BANG_.call(null,inst_18035__$1,inst_17959,done);
var state_18087__$1 = (function (){var statearr_18093 = state_18087;
(statearr_18093[(11)] = inst_18035__$1);

return statearr_18093;
})();
if(cljs.core.truth_(inst_18036)){
var statearr_18094_18179 = state_18087__$1;
(statearr_18094_18179[(1)] = (30));

} else {
var statearr_18095_18180 = state_18087__$1;
(statearr_18095_18180[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (1))){
var state_18087__$1 = state_18087;
var statearr_18096_18181 = state_18087__$1;
(statearr_18096_18181[(2)] = null);

(statearr_18096_18181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (24))){
var inst_17988 = (state_18087[(7)]);
var inst_18005 = (state_18087[(2)]);
var inst_18006 = cljs.core.next.call(null,inst_17988);
var inst_17968 = inst_18006;
var inst_17969 = null;
var inst_17970 = (0);
var inst_17971 = (0);
var state_18087__$1 = (function (){var statearr_18097 = state_18087;
(statearr_18097[(13)] = inst_18005);

(statearr_18097[(14)] = inst_17969);

(statearr_18097[(15)] = inst_17968);

(statearr_18097[(16)] = inst_17970);

(statearr_18097[(17)] = inst_17971);

return statearr_18097;
})();
var statearr_18098_18182 = state_18087__$1;
(statearr_18098_18182[(2)] = null);

(statearr_18098_18182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (39))){
var state_18087__$1 = state_18087;
var statearr_18102_18183 = state_18087__$1;
(statearr_18102_18183[(2)] = null);

(statearr_18102_18183[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (4))){
var inst_17959 = (state_18087[(9)]);
var inst_17959__$1 = (state_18087[(2)]);
var inst_17960 = (inst_17959__$1 == null);
var state_18087__$1 = (function (){var statearr_18103 = state_18087;
(statearr_18103[(9)] = inst_17959__$1);

return statearr_18103;
})();
if(cljs.core.truth_(inst_17960)){
var statearr_18104_18184 = state_18087__$1;
(statearr_18104_18184[(1)] = (5));

} else {
var statearr_18105_18185 = state_18087__$1;
(statearr_18105_18185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (15))){
var inst_17969 = (state_18087[(14)]);
var inst_17968 = (state_18087[(15)]);
var inst_17970 = (state_18087[(16)]);
var inst_17971 = (state_18087[(17)]);
var inst_17984 = (state_18087[(2)]);
var inst_17985 = (inst_17971 + (1));
var tmp18099 = inst_17969;
var tmp18100 = inst_17968;
var tmp18101 = inst_17970;
var inst_17968__$1 = tmp18100;
var inst_17969__$1 = tmp18099;
var inst_17970__$1 = tmp18101;
var inst_17971__$1 = inst_17985;
var state_18087__$1 = (function (){var statearr_18106 = state_18087;
(statearr_18106[(18)] = inst_17984);

(statearr_18106[(14)] = inst_17969__$1);

(statearr_18106[(15)] = inst_17968__$1);

(statearr_18106[(16)] = inst_17970__$1);

(statearr_18106[(17)] = inst_17971__$1);

return statearr_18106;
})();
var statearr_18107_18186 = state_18087__$1;
(statearr_18107_18186[(2)] = null);

(statearr_18107_18186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (21))){
var inst_18009 = (state_18087[(2)]);
var state_18087__$1 = state_18087;
var statearr_18111_18187 = state_18087__$1;
(statearr_18111_18187[(2)] = inst_18009);

(statearr_18111_18187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (31))){
var inst_18035 = (state_18087[(11)]);
var inst_18039 = done.call(null,null);
var inst_18040 = cljs.core.async.untap_STAR_.call(null,m,inst_18035);
var state_18087__$1 = (function (){var statearr_18112 = state_18087;
(statearr_18112[(19)] = inst_18039);

return statearr_18112;
})();
var statearr_18113_18188 = state_18087__$1;
(statearr_18113_18188[(2)] = inst_18040);

(statearr_18113_18188[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (32))){
var inst_18030 = (state_18087[(10)]);
var inst_18027 = (state_18087[(20)]);
var inst_18028 = (state_18087[(12)]);
var inst_18029 = (state_18087[(21)]);
var inst_18042 = (state_18087[(2)]);
var inst_18043 = (inst_18030 + (1));
var tmp18108 = inst_18027;
var tmp18109 = inst_18028;
var tmp18110 = inst_18029;
var inst_18027__$1 = tmp18108;
var inst_18028__$1 = tmp18109;
var inst_18029__$1 = tmp18110;
var inst_18030__$1 = inst_18043;
var state_18087__$1 = (function (){var statearr_18114 = state_18087;
(statearr_18114[(22)] = inst_18042);

(statearr_18114[(10)] = inst_18030__$1);

(statearr_18114[(20)] = inst_18027__$1);

(statearr_18114[(12)] = inst_18028__$1);

(statearr_18114[(21)] = inst_18029__$1);

return statearr_18114;
})();
var statearr_18115_18189 = state_18087__$1;
(statearr_18115_18189[(2)] = null);

(statearr_18115_18189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (40))){
var inst_18055 = (state_18087[(23)]);
var inst_18059 = done.call(null,null);
var inst_18060 = cljs.core.async.untap_STAR_.call(null,m,inst_18055);
var state_18087__$1 = (function (){var statearr_18116 = state_18087;
(statearr_18116[(24)] = inst_18059);

return statearr_18116;
})();
var statearr_18117_18190 = state_18087__$1;
(statearr_18117_18190[(2)] = inst_18060);

(statearr_18117_18190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (33))){
var inst_18046 = (state_18087[(25)]);
var inst_18048 = cljs.core.chunked_seq_QMARK_.call(null,inst_18046);
var state_18087__$1 = state_18087;
if(inst_18048){
var statearr_18118_18191 = state_18087__$1;
(statearr_18118_18191[(1)] = (36));

} else {
var statearr_18119_18192 = state_18087__$1;
(statearr_18119_18192[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (13))){
var inst_17978 = (state_18087[(26)]);
var inst_17981 = cljs.core.async.close_BANG_.call(null,inst_17978);
var state_18087__$1 = state_18087;
var statearr_18120_18193 = state_18087__$1;
(statearr_18120_18193[(2)] = inst_17981);

(statearr_18120_18193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (22))){
var inst_17999 = (state_18087[(8)]);
var inst_18002 = cljs.core.async.close_BANG_.call(null,inst_17999);
var state_18087__$1 = state_18087;
var statearr_18121_18194 = state_18087__$1;
(statearr_18121_18194[(2)] = inst_18002);

(statearr_18121_18194[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (36))){
var inst_18046 = (state_18087[(25)]);
var inst_18050 = cljs.core.chunk_first.call(null,inst_18046);
var inst_18051 = cljs.core.chunk_rest.call(null,inst_18046);
var inst_18052 = cljs.core.count.call(null,inst_18050);
var inst_18027 = inst_18051;
var inst_18028 = inst_18050;
var inst_18029 = inst_18052;
var inst_18030 = (0);
var state_18087__$1 = (function (){var statearr_18122 = state_18087;
(statearr_18122[(10)] = inst_18030);

(statearr_18122[(20)] = inst_18027);

(statearr_18122[(12)] = inst_18028);

(statearr_18122[(21)] = inst_18029);

return statearr_18122;
})();
var statearr_18123_18195 = state_18087__$1;
(statearr_18123_18195[(2)] = null);

(statearr_18123_18195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (41))){
var inst_18046 = (state_18087[(25)]);
var inst_18062 = (state_18087[(2)]);
var inst_18063 = cljs.core.next.call(null,inst_18046);
var inst_18027 = inst_18063;
var inst_18028 = null;
var inst_18029 = (0);
var inst_18030 = (0);
var state_18087__$1 = (function (){var statearr_18124 = state_18087;
(statearr_18124[(10)] = inst_18030);

(statearr_18124[(20)] = inst_18027);

(statearr_18124[(12)] = inst_18028);

(statearr_18124[(27)] = inst_18062);

(statearr_18124[(21)] = inst_18029);

return statearr_18124;
})();
var statearr_18125_18196 = state_18087__$1;
(statearr_18125_18196[(2)] = null);

(statearr_18125_18196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (43))){
var state_18087__$1 = state_18087;
var statearr_18126_18197 = state_18087__$1;
(statearr_18126_18197[(2)] = null);

(statearr_18126_18197[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (29))){
var inst_18071 = (state_18087[(2)]);
var state_18087__$1 = state_18087;
var statearr_18127_18198 = state_18087__$1;
(statearr_18127_18198[(2)] = inst_18071);

(statearr_18127_18198[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (44))){
var inst_18080 = (state_18087[(2)]);
var state_18087__$1 = (function (){var statearr_18128 = state_18087;
(statearr_18128[(28)] = inst_18080);

return statearr_18128;
})();
var statearr_18129_18199 = state_18087__$1;
(statearr_18129_18199[(2)] = null);

(statearr_18129_18199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (6))){
var inst_18019 = (state_18087[(29)]);
var inst_18018 = cljs.core.deref.call(null,cs);
var inst_18019__$1 = cljs.core.keys.call(null,inst_18018);
var inst_18020 = cljs.core.count.call(null,inst_18019__$1);
var inst_18021 = cljs.core.reset_BANG_.call(null,dctr,inst_18020);
var inst_18026 = cljs.core.seq.call(null,inst_18019__$1);
var inst_18027 = inst_18026;
var inst_18028 = null;
var inst_18029 = (0);
var inst_18030 = (0);
var state_18087__$1 = (function (){var statearr_18130 = state_18087;
(statearr_18130[(10)] = inst_18030);

(statearr_18130[(29)] = inst_18019__$1);

(statearr_18130[(20)] = inst_18027);

(statearr_18130[(12)] = inst_18028);

(statearr_18130[(30)] = inst_18021);

(statearr_18130[(21)] = inst_18029);

return statearr_18130;
})();
var statearr_18131_18200 = state_18087__$1;
(statearr_18131_18200[(2)] = null);

(statearr_18131_18200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (28))){
var inst_18027 = (state_18087[(20)]);
var inst_18046 = (state_18087[(25)]);
var inst_18046__$1 = cljs.core.seq.call(null,inst_18027);
var state_18087__$1 = (function (){var statearr_18132 = state_18087;
(statearr_18132[(25)] = inst_18046__$1);

return statearr_18132;
})();
if(inst_18046__$1){
var statearr_18133_18201 = state_18087__$1;
(statearr_18133_18201[(1)] = (33));

} else {
var statearr_18134_18202 = state_18087__$1;
(statearr_18134_18202[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (25))){
var inst_18030 = (state_18087[(10)]);
var inst_18029 = (state_18087[(21)]);
var inst_18032 = (inst_18030 < inst_18029);
var inst_18033 = inst_18032;
var state_18087__$1 = state_18087;
if(cljs.core.truth_(inst_18033)){
var statearr_18135_18203 = state_18087__$1;
(statearr_18135_18203[(1)] = (27));

} else {
var statearr_18136_18204 = state_18087__$1;
(statearr_18136_18204[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (34))){
var state_18087__$1 = state_18087;
var statearr_18137_18205 = state_18087__$1;
(statearr_18137_18205[(2)] = null);

(statearr_18137_18205[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (17))){
var state_18087__$1 = state_18087;
var statearr_18138_18206 = state_18087__$1;
(statearr_18138_18206[(2)] = null);

(statearr_18138_18206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (3))){
var inst_18085 = (state_18087[(2)]);
var state_18087__$1 = state_18087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18087__$1,inst_18085);
} else {
if((state_val_18088 === (12))){
var inst_18014 = (state_18087[(2)]);
var state_18087__$1 = state_18087;
var statearr_18139_18207 = state_18087__$1;
(statearr_18139_18207[(2)] = inst_18014);

(statearr_18139_18207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (2))){
var state_18087__$1 = state_18087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18087__$1,(4),ch);
} else {
if((state_val_18088 === (23))){
var state_18087__$1 = state_18087;
var statearr_18140_18208 = state_18087__$1;
(statearr_18140_18208[(2)] = null);

(statearr_18140_18208[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (35))){
var inst_18069 = (state_18087[(2)]);
var state_18087__$1 = state_18087;
var statearr_18141_18209 = state_18087__$1;
(statearr_18141_18209[(2)] = inst_18069);

(statearr_18141_18209[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (19))){
var inst_17988 = (state_18087[(7)]);
var inst_17992 = cljs.core.chunk_first.call(null,inst_17988);
var inst_17993 = cljs.core.chunk_rest.call(null,inst_17988);
var inst_17994 = cljs.core.count.call(null,inst_17992);
var inst_17968 = inst_17993;
var inst_17969 = inst_17992;
var inst_17970 = inst_17994;
var inst_17971 = (0);
var state_18087__$1 = (function (){var statearr_18142 = state_18087;
(statearr_18142[(14)] = inst_17969);

(statearr_18142[(15)] = inst_17968);

(statearr_18142[(16)] = inst_17970);

(statearr_18142[(17)] = inst_17971);

return statearr_18142;
})();
var statearr_18143_18210 = state_18087__$1;
(statearr_18143_18210[(2)] = null);

(statearr_18143_18210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (11))){
var inst_17968 = (state_18087[(15)]);
var inst_17988 = (state_18087[(7)]);
var inst_17988__$1 = cljs.core.seq.call(null,inst_17968);
var state_18087__$1 = (function (){var statearr_18144 = state_18087;
(statearr_18144[(7)] = inst_17988__$1);

return statearr_18144;
})();
if(inst_17988__$1){
var statearr_18145_18211 = state_18087__$1;
(statearr_18145_18211[(1)] = (16));

} else {
var statearr_18146_18212 = state_18087__$1;
(statearr_18146_18212[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (9))){
var inst_18016 = (state_18087[(2)]);
var state_18087__$1 = state_18087;
var statearr_18147_18213 = state_18087__$1;
(statearr_18147_18213[(2)] = inst_18016);

(statearr_18147_18213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (5))){
var inst_17966 = cljs.core.deref.call(null,cs);
var inst_17967 = cljs.core.seq.call(null,inst_17966);
var inst_17968 = inst_17967;
var inst_17969 = null;
var inst_17970 = (0);
var inst_17971 = (0);
var state_18087__$1 = (function (){var statearr_18148 = state_18087;
(statearr_18148[(14)] = inst_17969);

(statearr_18148[(15)] = inst_17968);

(statearr_18148[(16)] = inst_17970);

(statearr_18148[(17)] = inst_17971);

return statearr_18148;
})();
var statearr_18149_18214 = state_18087__$1;
(statearr_18149_18214[(2)] = null);

(statearr_18149_18214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (14))){
var state_18087__$1 = state_18087;
var statearr_18150_18215 = state_18087__$1;
(statearr_18150_18215[(2)] = null);

(statearr_18150_18215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (45))){
var inst_18077 = (state_18087[(2)]);
var state_18087__$1 = state_18087;
var statearr_18151_18216 = state_18087__$1;
(statearr_18151_18216[(2)] = inst_18077);

(statearr_18151_18216[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (26))){
var inst_18019 = (state_18087[(29)]);
var inst_18073 = (state_18087[(2)]);
var inst_18074 = cljs.core.seq.call(null,inst_18019);
var state_18087__$1 = (function (){var statearr_18152 = state_18087;
(statearr_18152[(31)] = inst_18073);

return statearr_18152;
})();
if(inst_18074){
var statearr_18153_18217 = state_18087__$1;
(statearr_18153_18217[(1)] = (42));

} else {
var statearr_18154_18218 = state_18087__$1;
(statearr_18154_18218[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (16))){
var inst_17988 = (state_18087[(7)]);
var inst_17990 = cljs.core.chunked_seq_QMARK_.call(null,inst_17988);
var state_18087__$1 = state_18087;
if(inst_17990){
var statearr_18155_18219 = state_18087__$1;
(statearr_18155_18219[(1)] = (19));

} else {
var statearr_18156_18220 = state_18087__$1;
(statearr_18156_18220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (38))){
var inst_18066 = (state_18087[(2)]);
var state_18087__$1 = state_18087;
var statearr_18157_18221 = state_18087__$1;
(statearr_18157_18221[(2)] = inst_18066);

(statearr_18157_18221[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (30))){
var state_18087__$1 = state_18087;
var statearr_18158_18222 = state_18087__$1;
(statearr_18158_18222[(2)] = null);

(statearr_18158_18222[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (10))){
var inst_17969 = (state_18087[(14)]);
var inst_17971 = (state_18087[(17)]);
var inst_17977 = cljs.core._nth.call(null,inst_17969,inst_17971);
var inst_17978 = cljs.core.nth.call(null,inst_17977,(0),null);
var inst_17979 = cljs.core.nth.call(null,inst_17977,(1),null);
var state_18087__$1 = (function (){var statearr_18159 = state_18087;
(statearr_18159[(26)] = inst_17978);

return statearr_18159;
})();
if(cljs.core.truth_(inst_17979)){
var statearr_18160_18223 = state_18087__$1;
(statearr_18160_18223[(1)] = (13));

} else {
var statearr_18161_18224 = state_18087__$1;
(statearr_18161_18224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (18))){
var inst_18012 = (state_18087[(2)]);
var state_18087__$1 = state_18087;
var statearr_18162_18225 = state_18087__$1;
(statearr_18162_18225[(2)] = inst_18012);

(statearr_18162_18225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (42))){
var state_18087__$1 = state_18087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18087__$1,(45),dchan);
} else {
if((state_val_18088 === (37))){
var inst_17959 = (state_18087[(9)]);
var inst_18046 = (state_18087[(25)]);
var inst_18055 = (state_18087[(23)]);
var inst_18055__$1 = cljs.core.first.call(null,inst_18046);
var inst_18056 = cljs.core.async.put_BANG_.call(null,inst_18055__$1,inst_17959,done);
var state_18087__$1 = (function (){var statearr_18163 = state_18087;
(statearr_18163[(23)] = inst_18055__$1);

return statearr_18163;
})();
if(cljs.core.truth_(inst_18056)){
var statearr_18164_18226 = state_18087__$1;
(statearr_18164_18226[(1)] = (39));

} else {
var statearr_18165_18227 = state_18087__$1;
(statearr_18165_18227[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18088 === (8))){
var inst_17970 = (state_18087[(16)]);
var inst_17971 = (state_18087[(17)]);
var inst_17973 = (inst_17971 < inst_17970);
var inst_17974 = inst_17973;
var state_18087__$1 = state_18087;
if(cljs.core.truth_(inst_17974)){
var statearr_18166_18228 = state_18087__$1;
(statearr_18166_18228[(1)] = (10));

} else {
var statearr_18167_18229 = state_18087__$1;
(statearr_18167_18229[(1)] = (11));

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
});})(c__6859__auto___18175,cs,m,dchan,dctr,done))
;
return ((function (switch__6803__auto__,c__6859__auto___18175,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_18171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18171[(0)] = state_machine__6804__auto__);

(statearr_18171[(1)] = (1));

return statearr_18171;
});
var state_machine__6804__auto____1 = (function (state_18087){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_18087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e18172){if((e18172 instanceof Object)){
var ex__6807__auto__ = e18172;
var statearr_18173_18230 = state_18087;
(statearr_18173_18230[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18231 = state_18087;
state_18087 = G__18231;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_18087){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_18087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___18175,cs,m,dchan,dctr,done))
})();
var state__6861__auto__ = (function (){var statearr_18174 = f__6860__auto__.call(null);
(statearr_18174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___18175);

return statearr_18174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___18175,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj18233 = {};
return obj18233;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18234){
var map__18239 = p__18234;
var map__18239__$1 = ((cljs.core.seq_QMARK_.call(null,map__18239))?cljs.core.apply.call(null,cljs.core.hash_map,map__18239):map__18239);
var opts = map__18239__$1;
var statearr_18240_18243 = state;
(statearr_18240_18243[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18239,map__18239__$1,opts){
return (function (val){
var statearr_18241_18244 = state;
(statearr_18241_18244[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18239,map__18239__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18242_18245 = state;
(statearr_18242_18245[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18234 = null;
if (arguments.length > 3) {
var G__18246__i = 0, G__18246__a = new Array(arguments.length -  3);
while (G__18246__i < G__18246__a.length) {G__18246__a[G__18246__i] = arguments[G__18246__i + 3]; ++G__18246__i;}
  p__18234 = new cljs.core.IndexedSeq(G__18246__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18234);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18247){
var state = cljs.core.first(arglist__18247);
arglist__18247 = cljs.core.next(arglist__18247);
var cont_block = cljs.core.first(arglist__18247);
arglist__18247 = cljs.core.next(arglist__18247);
var ports = cljs.core.first(arglist__18247);
var p__18234 = cljs.core.rest(arglist__18247);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18234);
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
if(typeof cljs.core.async.t18367 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18367 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18368){
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
this.meta18368 = meta18368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18367.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18367.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18367.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18367.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18367.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18367.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18367.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18369){
var self__ = this;
var _18369__$1 = this;
return self__.meta18368;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18369,meta18368__$1){
var self__ = this;
var _18369__$1 = this;
return (new cljs.core.async.t18367(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18368__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18367.cljs$lang$type = true;

cljs.core.async.t18367.cljs$lang$ctorStr = "cljs.core.async/t18367";

cljs.core.async.t18367.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t18367");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18367 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18367(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18368){
return (new cljs.core.async.t18367(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18368));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18367(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var c__6859__auto___18486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___18486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___18486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18439){
var state_val_18440 = (state_18439[(1)]);
if((state_val_18440 === (7))){
var inst_18383 = (state_18439[(7)]);
var inst_18388 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18383);
var state_18439__$1 = state_18439;
var statearr_18441_18487 = state_18439__$1;
(statearr_18441_18487[(2)] = inst_18388);

(statearr_18441_18487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (20))){
var inst_18398 = (state_18439[(8)]);
var state_18439__$1 = state_18439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18439__$1,(23),out,inst_18398);
} else {
if((state_val_18440 === (1))){
var inst_18373 = (state_18439[(9)]);
var inst_18373__$1 = calc_state.call(null);
var inst_18374 = cljs.core.seq_QMARK_.call(null,inst_18373__$1);
var state_18439__$1 = (function (){var statearr_18442 = state_18439;
(statearr_18442[(9)] = inst_18373__$1);

return statearr_18442;
})();
if(inst_18374){
var statearr_18443_18488 = state_18439__$1;
(statearr_18443_18488[(1)] = (2));

} else {
var statearr_18444_18489 = state_18439__$1;
(statearr_18444_18489[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (24))){
var inst_18391 = (state_18439[(10)]);
var inst_18383 = inst_18391;
var state_18439__$1 = (function (){var statearr_18445 = state_18439;
(statearr_18445[(7)] = inst_18383);

return statearr_18445;
})();
var statearr_18446_18490 = state_18439__$1;
(statearr_18446_18490[(2)] = null);

(statearr_18446_18490[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (4))){
var inst_18373 = (state_18439[(9)]);
var inst_18379 = (state_18439[(2)]);
var inst_18380 = cljs.core.get.call(null,inst_18379,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18381 = cljs.core.get.call(null,inst_18379,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18382 = cljs.core.get.call(null,inst_18379,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18383 = inst_18373;
var state_18439__$1 = (function (){var statearr_18447 = state_18439;
(statearr_18447[(11)] = inst_18380);

(statearr_18447[(12)] = inst_18382);

(statearr_18447[(7)] = inst_18383);

(statearr_18447[(13)] = inst_18381);

return statearr_18447;
})();
var statearr_18448_18491 = state_18439__$1;
(statearr_18448_18491[(2)] = null);

(statearr_18448_18491[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (15))){
var state_18439__$1 = state_18439;
var statearr_18449_18492 = state_18439__$1;
(statearr_18449_18492[(2)] = null);

(statearr_18449_18492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (21))){
var inst_18391 = (state_18439[(10)]);
var inst_18383 = inst_18391;
var state_18439__$1 = (function (){var statearr_18450 = state_18439;
(statearr_18450[(7)] = inst_18383);

return statearr_18450;
})();
var statearr_18451_18493 = state_18439__$1;
(statearr_18451_18493[(2)] = null);

(statearr_18451_18493[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (13))){
var inst_18435 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18452_18494 = state_18439__$1;
(statearr_18452_18494[(2)] = inst_18435);

(statearr_18452_18494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (22))){
var inst_18433 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18453_18495 = state_18439__$1;
(statearr_18453_18495[(2)] = inst_18433);

(statearr_18453_18495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (6))){
var inst_18437 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18439__$1,inst_18437);
} else {
if((state_val_18440 === (25))){
var state_18439__$1 = state_18439;
var statearr_18454_18496 = state_18439__$1;
(statearr_18454_18496[(2)] = null);

(statearr_18454_18496[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (17))){
var inst_18413 = (state_18439[(14)]);
var state_18439__$1 = state_18439;
var statearr_18455_18497 = state_18439__$1;
(statearr_18455_18497[(2)] = inst_18413);

(statearr_18455_18497[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (3))){
var inst_18373 = (state_18439[(9)]);
var state_18439__$1 = state_18439;
var statearr_18456_18498 = state_18439__$1;
(statearr_18456_18498[(2)] = inst_18373);

(statearr_18456_18498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (12))){
var inst_18413 = (state_18439[(14)]);
var inst_18399 = (state_18439[(15)]);
var inst_18394 = (state_18439[(16)]);
var inst_18413__$1 = inst_18394.call(null,inst_18399);
var state_18439__$1 = (function (){var statearr_18457 = state_18439;
(statearr_18457[(14)] = inst_18413__$1);

return statearr_18457;
})();
if(cljs.core.truth_(inst_18413__$1)){
var statearr_18458_18499 = state_18439__$1;
(statearr_18458_18499[(1)] = (17));

} else {
var statearr_18459_18500 = state_18439__$1;
(statearr_18459_18500[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (2))){
var inst_18373 = (state_18439[(9)]);
var inst_18376 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18373);
var state_18439__$1 = state_18439;
var statearr_18460_18501 = state_18439__$1;
(statearr_18460_18501[(2)] = inst_18376);

(statearr_18460_18501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (23))){
var inst_18424 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
if(cljs.core.truth_(inst_18424)){
var statearr_18461_18502 = state_18439__$1;
(statearr_18461_18502[(1)] = (24));

} else {
var statearr_18462_18503 = state_18439__$1;
(statearr_18462_18503[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (19))){
var inst_18421 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
if(cljs.core.truth_(inst_18421)){
var statearr_18463_18504 = state_18439__$1;
(statearr_18463_18504[(1)] = (20));

} else {
var statearr_18464_18505 = state_18439__$1;
(statearr_18464_18505[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (11))){
var inst_18398 = (state_18439[(8)]);
var inst_18404 = (inst_18398 == null);
var state_18439__$1 = state_18439;
if(cljs.core.truth_(inst_18404)){
var statearr_18465_18506 = state_18439__$1;
(statearr_18465_18506[(1)] = (14));

} else {
var statearr_18466_18507 = state_18439__$1;
(statearr_18466_18507[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (9))){
var inst_18391 = (state_18439[(10)]);
var inst_18391__$1 = (state_18439[(2)]);
var inst_18392 = cljs.core.get.call(null,inst_18391__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18393 = cljs.core.get.call(null,inst_18391__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18394 = cljs.core.get.call(null,inst_18391__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18439__$1 = (function (){var statearr_18467 = state_18439;
(statearr_18467[(17)] = inst_18393);

(statearr_18467[(10)] = inst_18391__$1);

(statearr_18467[(16)] = inst_18394);

return statearr_18467;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18439__$1,(10),inst_18392);
} else {
if((state_val_18440 === (5))){
var inst_18383 = (state_18439[(7)]);
var inst_18386 = cljs.core.seq_QMARK_.call(null,inst_18383);
var state_18439__$1 = state_18439;
if(inst_18386){
var statearr_18468_18508 = state_18439__$1;
(statearr_18468_18508[(1)] = (7));

} else {
var statearr_18469_18509 = state_18439__$1;
(statearr_18469_18509[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (14))){
var inst_18399 = (state_18439[(15)]);
var inst_18406 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18399);
var state_18439__$1 = state_18439;
var statearr_18470_18510 = state_18439__$1;
(statearr_18470_18510[(2)] = inst_18406);

(statearr_18470_18510[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (26))){
var inst_18429 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18471_18511 = state_18439__$1;
(statearr_18471_18511[(2)] = inst_18429);

(statearr_18471_18511[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (16))){
var inst_18409 = (state_18439[(2)]);
var inst_18410 = calc_state.call(null);
var inst_18383 = inst_18410;
var state_18439__$1 = (function (){var statearr_18472 = state_18439;
(statearr_18472[(7)] = inst_18383);

(statearr_18472[(18)] = inst_18409);

return statearr_18472;
})();
var statearr_18473_18512 = state_18439__$1;
(statearr_18473_18512[(2)] = null);

(statearr_18473_18512[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (10))){
var inst_18398 = (state_18439[(8)]);
var inst_18399 = (state_18439[(15)]);
var inst_18397 = (state_18439[(2)]);
var inst_18398__$1 = cljs.core.nth.call(null,inst_18397,(0),null);
var inst_18399__$1 = cljs.core.nth.call(null,inst_18397,(1),null);
var inst_18400 = (inst_18398__$1 == null);
var inst_18401 = cljs.core._EQ_.call(null,inst_18399__$1,change);
var inst_18402 = (inst_18400) || (inst_18401);
var state_18439__$1 = (function (){var statearr_18474 = state_18439;
(statearr_18474[(8)] = inst_18398__$1);

(statearr_18474[(15)] = inst_18399__$1);

return statearr_18474;
})();
if(cljs.core.truth_(inst_18402)){
var statearr_18475_18513 = state_18439__$1;
(statearr_18475_18513[(1)] = (11));

} else {
var statearr_18476_18514 = state_18439__$1;
(statearr_18476_18514[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (18))){
var inst_18393 = (state_18439[(17)]);
var inst_18399 = (state_18439[(15)]);
var inst_18394 = (state_18439[(16)]);
var inst_18416 = cljs.core.empty_QMARK_.call(null,inst_18394);
var inst_18417 = inst_18393.call(null,inst_18399);
var inst_18418 = cljs.core.not.call(null,inst_18417);
var inst_18419 = (inst_18416) && (inst_18418);
var state_18439__$1 = state_18439;
var statearr_18477_18515 = state_18439__$1;
(statearr_18477_18515[(2)] = inst_18419);

(statearr_18477_18515[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (8))){
var inst_18383 = (state_18439[(7)]);
var state_18439__$1 = state_18439;
var statearr_18478_18516 = state_18439__$1;
(statearr_18478_18516[(2)] = inst_18383);

(statearr_18478_18516[(1)] = (9));


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
});})(c__6859__auto___18486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6803__auto__,c__6859__auto___18486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_18482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18482[(0)] = state_machine__6804__auto__);

(statearr_18482[(1)] = (1));

return statearr_18482;
});
var state_machine__6804__auto____1 = (function (state_18439){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_18439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e18483){if((e18483 instanceof Object)){
var ex__6807__auto__ = e18483;
var statearr_18484_18517 = state_18439;
(statearr_18484_18517[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18518 = state_18439;
state_18439 = G__18518;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_18439){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_18439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___18486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6861__auto__ = (function (){var statearr_18485 = f__6860__auto__.call(null);
(statearr_18485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___18486);

return statearr_18485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___18486,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18520 = {};
return obj18520;
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
return (function (p1__18521_SHARP_){
if(cljs.core.truth_(p1__18521_SHARP_.call(null,topic))){
return p1__18521_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18521_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3799__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18644 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18644 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18645){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18645 = meta18645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18644.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18644.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18644.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18644.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18644.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18644.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18646){
var self__ = this;
var _18646__$1 = this;
return self__.meta18645;
});})(mults,ensure_mult))
;

cljs.core.async.t18644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18646,meta18645__$1){
var self__ = this;
var _18646__$1 = this;
return (new cljs.core.async.t18644(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18645__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18644.cljs$lang$type = true;

cljs.core.async.t18644.cljs$lang$ctorStr = "cljs.core.async/t18644";

cljs.core.async.t18644.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t18644");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18644 = ((function (mults,ensure_mult){
return (function __GT_t18644(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18645){
return (new cljs.core.async.t18644(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18645));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18644(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var c__6859__auto___18766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___18766,mults,ensure_mult,p){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___18766,mults,ensure_mult,p){
return (function (state_18718){
var state_val_18719 = (state_18718[(1)]);
if((state_val_18719 === (7))){
var inst_18714 = (state_18718[(2)]);
var state_18718__$1 = state_18718;
var statearr_18720_18767 = state_18718__$1;
(statearr_18720_18767[(2)] = inst_18714);

(statearr_18720_18767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (20))){
var state_18718__$1 = state_18718;
var statearr_18721_18768 = state_18718__$1;
(statearr_18721_18768[(2)] = null);

(statearr_18721_18768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (1))){
var state_18718__$1 = state_18718;
var statearr_18722_18769 = state_18718__$1;
(statearr_18722_18769[(2)] = null);

(statearr_18722_18769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (24))){
var inst_18697 = (state_18718[(7)]);
var inst_18706 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18697);
var state_18718__$1 = state_18718;
var statearr_18723_18770 = state_18718__$1;
(statearr_18723_18770[(2)] = inst_18706);

(statearr_18723_18770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (4))){
var inst_18649 = (state_18718[(8)]);
var inst_18649__$1 = (state_18718[(2)]);
var inst_18650 = (inst_18649__$1 == null);
var state_18718__$1 = (function (){var statearr_18724 = state_18718;
(statearr_18724[(8)] = inst_18649__$1);

return statearr_18724;
})();
if(cljs.core.truth_(inst_18650)){
var statearr_18725_18771 = state_18718__$1;
(statearr_18725_18771[(1)] = (5));

} else {
var statearr_18726_18772 = state_18718__$1;
(statearr_18726_18772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (15))){
var inst_18691 = (state_18718[(2)]);
var state_18718__$1 = state_18718;
var statearr_18727_18773 = state_18718__$1;
(statearr_18727_18773[(2)] = inst_18691);

(statearr_18727_18773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (21))){
var inst_18711 = (state_18718[(2)]);
var state_18718__$1 = (function (){var statearr_18728 = state_18718;
(statearr_18728[(9)] = inst_18711);

return statearr_18728;
})();
var statearr_18729_18774 = state_18718__$1;
(statearr_18729_18774[(2)] = null);

(statearr_18729_18774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (13))){
var inst_18673 = (state_18718[(10)]);
var inst_18675 = cljs.core.chunked_seq_QMARK_.call(null,inst_18673);
var state_18718__$1 = state_18718;
if(inst_18675){
var statearr_18730_18775 = state_18718__$1;
(statearr_18730_18775[(1)] = (16));

} else {
var statearr_18731_18776 = state_18718__$1;
(statearr_18731_18776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (22))){
var inst_18703 = (state_18718[(2)]);
var state_18718__$1 = state_18718;
if(cljs.core.truth_(inst_18703)){
var statearr_18732_18777 = state_18718__$1;
(statearr_18732_18777[(1)] = (23));

} else {
var statearr_18733_18778 = state_18718__$1;
(statearr_18733_18778[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (6))){
var inst_18649 = (state_18718[(8)]);
var inst_18697 = (state_18718[(7)]);
var inst_18699 = (state_18718[(11)]);
var inst_18697__$1 = topic_fn.call(null,inst_18649);
var inst_18698 = cljs.core.deref.call(null,mults);
var inst_18699__$1 = cljs.core.get.call(null,inst_18698,inst_18697__$1);
var state_18718__$1 = (function (){var statearr_18734 = state_18718;
(statearr_18734[(7)] = inst_18697__$1);

(statearr_18734[(11)] = inst_18699__$1);

return statearr_18734;
})();
if(cljs.core.truth_(inst_18699__$1)){
var statearr_18735_18779 = state_18718__$1;
(statearr_18735_18779[(1)] = (19));

} else {
var statearr_18736_18780 = state_18718__$1;
(statearr_18736_18780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (25))){
var inst_18708 = (state_18718[(2)]);
var state_18718__$1 = state_18718;
var statearr_18737_18781 = state_18718__$1;
(statearr_18737_18781[(2)] = inst_18708);

(statearr_18737_18781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (17))){
var inst_18673 = (state_18718[(10)]);
var inst_18682 = cljs.core.first.call(null,inst_18673);
var inst_18683 = cljs.core.async.muxch_STAR_.call(null,inst_18682);
var inst_18684 = cljs.core.async.close_BANG_.call(null,inst_18683);
var inst_18685 = cljs.core.next.call(null,inst_18673);
var inst_18659 = inst_18685;
var inst_18660 = null;
var inst_18661 = (0);
var inst_18662 = (0);
var state_18718__$1 = (function (){var statearr_18738 = state_18718;
(statearr_18738[(12)] = inst_18662);

(statearr_18738[(13)] = inst_18684);

(statearr_18738[(14)] = inst_18660);

(statearr_18738[(15)] = inst_18661);

(statearr_18738[(16)] = inst_18659);

return statearr_18738;
})();
var statearr_18739_18782 = state_18718__$1;
(statearr_18739_18782[(2)] = null);

(statearr_18739_18782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (3))){
var inst_18716 = (state_18718[(2)]);
var state_18718__$1 = state_18718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18718__$1,inst_18716);
} else {
if((state_val_18719 === (12))){
var inst_18693 = (state_18718[(2)]);
var state_18718__$1 = state_18718;
var statearr_18740_18783 = state_18718__$1;
(statearr_18740_18783[(2)] = inst_18693);

(statearr_18740_18783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (2))){
var state_18718__$1 = state_18718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18718__$1,(4),ch);
} else {
if((state_val_18719 === (23))){
var state_18718__$1 = state_18718;
var statearr_18741_18784 = state_18718__$1;
(statearr_18741_18784[(2)] = null);

(statearr_18741_18784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (19))){
var inst_18649 = (state_18718[(8)]);
var inst_18699 = (state_18718[(11)]);
var inst_18701 = cljs.core.async.muxch_STAR_.call(null,inst_18699);
var state_18718__$1 = state_18718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18718__$1,(22),inst_18701,inst_18649);
} else {
if((state_val_18719 === (11))){
var inst_18673 = (state_18718[(10)]);
var inst_18659 = (state_18718[(16)]);
var inst_18673__$1 = cljs.core.seq.call(null,inst_18659);
var state_18718__$1 = (function (){var statearr_18742 = state_18718;
(statearr_18742[(10)] = inst_18673__$1);

return statearr_18742;
})();
if(inst_18673__$1){
var statearr_18743_18785 = state_18718__$1;
(statearr_18743_18785[(1)] = (13));

} else {
var statearr_18744_18786 = state_18718__$1;
(statearr_18744_18786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (9))){
var inst_18695 = (state_18718[(2)]);
var state_18718__$1 = state_18718;
var statearr_18745_18787 = state_18718__$1;
(statearr_18745_18787[(2)] = inst_18695);

(statearr_18745_18787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (5))){
var inst_18656 = cljs.core.deref.call(null,mults);
var inst_18657 = cljs.core.vals.call(null,inst_18656);
var inst_18658 = cljs.core.seq.call(null,inst_18657);
var inst_18659 = inst_18658;
var inst_18660 = null;
var inst_18661 = (0);
var inst_18662 = (0);
var state_18718__$1 = (function (){var statearr_18746 = state_18718;
(statearr_18746[(12)] = inst_18662);

(statearr_18746[(14)] = inst_18660);

(statearr_18746[(15)] = inst_18661);

(statearr_18746[(16)] = inst_18659);

return statearr_18746;
})();
var statearr_18747_18788 = state_18718__$1;
(statearr_18747_18788[(2)] = null);

(statearr_18747_18788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (14))){
var state_18718__$1 = state_18718;
var statearr_18751_18789 = state_18718__$1;
(statearr_18751_18789[(2)] = null);

(statearr_18751_18789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (16))){
var inst_18673 = (state_18718[(10)]);
var inst_18677 = cljs.core.chunk_first.call(null,inst_18673);
var inst_18678 = cljs.core.chunk_rest.call(null,inst_18673);
var inst_18679 = cljs.core.count.call(null,inst_18677);
var inst_18659 = inst_18678;
var inst_18660 = inst_18677;
var inst_18661 = inst_18679;
var inst_18662 = (0);
var state_18718__$1 = (function (){var statearr_18752 = state_18718;
(statearr_18752[(12)] = inst_18662);

(statearr_18752[(14)] = inst_18660);

(statearr_18752[(15)] = inst_18661);

(statearr_18752[(16)] = inst_18659);

return statearr_18752;
})();
var statearr_18753_18790 = state_18718__$1;
(statearr_18753_18790[(2)] = null);

(statearr_18753_18790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (10))){
var inst_18662 = (state_18718[(12)]);
var inst_18660 = (state_18718[(14)]);
var inst_18661 = (state_18718[(15)]);
var inst_18659 = (state_18718[(16)]);
var inst_18667 = cljs.core._nth.call(null,inst_18660,inst_18662);
var inst_18668 = cljs.core.async.muxch_STAR_.call(null,inst_18667);
var inst_18669 = cljs.core.async.close_BANG_.call(null,inst_18668);
var inst_18670 = (inst_18662 + (1));
var tmp18748 = inst_18660;
var tmp18749 = inst_18661;
var tmp18750 = inst_18659;
var inst_18659__$1 = tmp18750;
var inst_18660__$1 = tmp18748;
var inst_18661__$1 = tmp18749;
var inst_18662__$1 = inst_18670;
var state_18718__$1 = (function (){var statearr_18754 = state_18718;
(statearr_18754[(12)] = inst_18662__$1);

(statearr_18754[(14)] = inst_18660__$1);

(statearr_18754[(15)] = inst_18661__$1);

(statearr_18754[(16)] = inst_18659__$1);

(statearr_18754[(17)] = inst_18669);

return statearr_18754;
})();
var statearr_18755_18791 = state_18718__$1;
(statearr_18755_18791[(2)] = null);

(statearr_18755_18791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (18))){
var inst_18688 = (state_18718[(2)]);
var state_18718__$1 = state_18718;
var statearr_18756_18792 = state_18718__$1;
(statearr_18756_18792[(2)] = inst_18688);

(statearr_18756_18792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18719 === (8))){
var inst_18662 = (state_18718[(12)]);
var inst_18661 = (state_18718[(15)]);
var inst_18664 = (inst_18662 < inst_18661);
var inst_18665 = inst_18664;
var state_18718__$1 = state_18718;
if(cljs.core.truth_(inst_18665)){
var statearr_18757_18793 = state_18718__$1;
(statearr_18757_18793[(1)] = (10));

} else {
var statearr_18758_18794 = state_18718__$1;
(statearr_18758_18794[(1)] = (11));

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
});})(c__6859__auto___18766,mults,ensure_mult,p))
;
return ((function (switch__6803__auto__,c__6859__auto___18766,mults,ensure_mult,p){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_18762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18762[(0)] = state_machine__6804__auto__);

(statearr_18762[(1)] = (1));

return statearr_18762;
});
var state_machine__6804__auto____1 = (function (state_18718){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_18718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e18763){if((e18763 instanceof Object)){
var ex__6807__auto__ = e18763;
var statearr_18764_18795 = state_18718;
(statearr_18764_18795[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18796 = state_18718;
state_18718 = G__18796;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_18718){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_18718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___18766,mults,ensure_mult,p))
})();
var state__6861__auto__ = (function (){var statearr_18765 = f__6860__auto__.call(null);
(statearr_18765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___18766);

return statearr_18765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___18766,mults,ensure_mult,p))
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
var c__6859__auto___18933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___18933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___18933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18903){
var state_val_18904 = (state_18903[(1)]);
if((state_val_18904 === (7))){
var state_18903__$1 = state_18903;
var statearr_18905_18934 = state_18903__$1;
(statearr_18905_18934[(2)] = null);

(statearr_18905_18934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (1))){
var state_18903__$1 = state_18903;
var statearr_18906_18935 = state_18903__$1;
(statearr_18906_18935[(2)] = null);

(statearr_18906_18935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (4))){
var inst_18867 = (state_18903[(7)]);
var inst_18869 = (inst_18867 < cnt);
var state_18903__$1 = state_18903;
if(cljs.core.truth_(inst_18869)){
var statearr_18907_18936 = state_18903__$1;
(statearr_18907_18936[(1)] = (6));

} else {
var statearr_18908_18937 = state_18903__$1;
(statearr_18908_18937[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (15))){
var inst_18899 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18909_18938 = state_18903__$1;
(statearr_18909_18938[(2)] = inst_18899);

(statearr_18909_18938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (13))){
var inst_18892 = cljs.core.async.close_BANG_.call(null,out);
var state_18903__$1 = state_18903;
var statearr_18910_18939 = state_18903__$1;
(statearr_18910_18939[(2)] = inst_18892);

(statearr_18910_18939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (6))){
var state_18903__$1 = state_18903;
var statearr_18911_18940 = state_18903__$1;
(statearr_18911_18940[(2)] = null);

(statearr_18911_18940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (3))){
var inst_18901 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18903__$1,inst_18901);
} else {
if((state_val_18904 === (12))){
var inst_18889 = (state_18903[(8)]);
var inst_18889__$1 = (state_18903[(2)]);
var inst_18890 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18889__$1);
var state_18903__$1 = (function (){var statearr_18912 = state_18903;
(statearr_18912[(8)] = inst_18889__$1);

return statearr_18912;
})();
if(cljs.core.truth_(inst_18890)){
var statearr_18913_18941 = state_18903__$1;
(statearr_18913_18941[(1)] = (13));

} else {
var statearr_18914_18942 = state_18903__$1;
(statearr_18914_18942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (2))){
var inst_18866 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18867 = (0);
var state_18903__$1 = (function (){var statearr_18915 = state_18903;
(statearr_18915[(7)] = inst_18867);

(statearr_18915[(9)] = inst_18866);

return statearr_18915;
})();
var statearr_18916_18943 = state_18903__$1;
(statearr_18916_18943[(2)] = null);

(statearr_18916_18943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (11))){
var inst_18867 = (state_18903[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18903,(10),Object,null,(9));
var inst_18876 = chs__$1.call(null,inst_18867);
var inst_18877 = done.call(null,inst_18867);
var inst_18878 = cljs.core.async.take_BANG_.call(null,inst_18876,inst_18877);
var state_18903__$1 = state_18903;
var statearr_18917_18944 = state_18903__$1;
(statearr_18917_18944[(2)] = inst_18878);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18903__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (9))){
var inst_18867 = (state_18903[(7)]);
var inst_18880 = (state_18903[(2)]);
var inst_18881 = (inst_18867 + (1));
var inst_18867__$1 = inst_18881;
var state_18903__$1 = (function (){var statearr_18918 = state_18903;
(statearr_18918[(7)] = inst_18867__$1);

(statearr_18918[(10)] = inst_18880);

return statearr_18918;
})();
var statearr_18919_18945 = state_18903__$1;
(statearr_18919_18945[(2)] = null);

(statearr_18919_18945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (5))){
var inst_18887 = (state_18903[(2)]);
var state_18903__$1 = (function (){var statearr_18920 = state_18903;
(statearr_18920[(11)] = inst_18887);

return statearr_18920;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18903__$1,(12),dchan);
} else {
if((state_val_18904 === (14))){
var inst_18889 = (state_18903[(8)]);
var inst_18894 = cljs.core.apply.call(null,f,inst_18889);
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18903__$1,(16),out,inst_18894);
} else {
if((state_val_18904 === (16))){
var inst_18896 = (state_18903[(2)]);
var state_18903__$1 = (function (){var statearr_18921 = state_18903;
(statearr_18921[(12)] = inst_18896);

return statearr_18921;
})();
var statearr_18922_18946 = state_18903__$1;
(statearr_18922_18946[(2)] = null);

(statearr_18922_18946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (10))){
var inst_18871 = (state_18903[(2)]);
var inst_18872 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18903__$1 = (function (){var statearr_18923 = state_18903;
(statearr_18923[(13)] = inst_18871);

return statearr_18923;
})();
var statearr_18924_18947 = state_18903__$1;
(statearr_18924_18947[(2)] = inst_18872);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18903__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (8))){
var inst_18885 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18925_18948 = state_18903__$1;
(statearr_18925_18948[(2)] = inst_18885);

(statearr_18925_18948[(1)] = (5));


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
});})(c__6859__auto___18933,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6803__auto__,c__6859__auto___18933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_18929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18929[(0)] = state_machine__6804__auto__);

(statearr_18929[(1)] = (1));

return statearr_18929;
});
var state_machine__6804__auto____1 = (function (state_18903){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_18903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e18930){if((e18930 instanceof Object)){
var ex__6807__auto__ = e18930;
var statearr_18931_18949 = state_18903;
(statearr_18931_18949[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18950 = state_18903;
state_18903 = G__18950;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_18903){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_18903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___18933,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6861__auto__ = (function (){var statearr_18932 = f__6860__auto__.call(null);
(statearr_18932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___18933);

return statearr_18932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___18933,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6859__auto___19058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___19058,out){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___19058,out){
return (function (state_19034){
var state_val_19035 = (state_19034[(1)]);
if((state_val_19035 === (7))){
var inst_19014 = (state_19034[(7)]);
var inst_19013 = (state_19034[(8)]);
var inst_19013__$1 = (state_19034[(2)]);
var inst_19014__$1 = cljs.core.nth.call(null,inst_19013__$1,(0),null);
var inst_19015 = cljs.core.nth.call(null,inst_19013__$1,(1),null);
var inst_19016 = (inst_19014__$1 == null);
var state_19034__$1 = (function (){var statearr_19036 = state_19034;
(statearr_19036[(9)] = inst_19015);

(statearr_19036[(7)] = inst_19014__$1);

(statearr_19036[(8)] = inst_19013__$1);

return statearr_19036;
})();
if(cljs.core.truth_(inst_19016)){
var statearr_19037_19059 = state_19034__$1;
(statearr_19037_19059[(1)] = (8));

} else {
var statearr_19038_19060 = state_19034__$1;
(statearr_19038_19060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (1))){
var inst_19005 = cljs.core.vec.call(null,chs);
var inst_19006 = inst_19005;
var state_19034__$1 = (function (){var statearr_19039 = state_19034;
(statearr_19039[(10)] = inst_19006);

return statearr_19039;
})();
var statearr_19040_19061 = state_19034__$1;
(statearr_19040_19061[(2)] = null);

(statearr_19040_19061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (4))){
var inst_19006 = (state_19034[(10)]);
var state_19034__$1 = state_19034;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19034__$1,(7),inst_19006);
} else {
if((state_val_19035 === (6))){
var inst_19030 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19041_19062 = state_19034__$1;
(statearr_19041_19062[(2)] = inst_19030);

(statearr_19041_19062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (3))){
var inst_19032 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19034__$1,inst_19032);
} else {
if((state_val_19035 === (2))){
var inst_19006 = (state_19034[(10)]);
var inst_19008 = cljs.core.count.call(null,inst_19006);
var inst_19009 = (inst_19008 > (0));
var state_19034__$1 = state_19034;
if(cljs.core.truth_(inst_19009)){
var statearr_19043_19063 = state_19034__$1;
(statearr_19043_19063[(1)] = (4));

} else {
var statearr_19044_19064 = state_19034__$1;
(statearr_19044_19064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (11))){
var inst_19006 = (state_19034[(10)]);
var inst_19023 = (state_19034[(2)]);
var tmp19042 = inst_19006;
var inst_19006__$1 = tmp19042;
var state_19034__$1 = (function (){var statearr_19045 = state_19034;
(statearr_19045[(11)] = inst_19023);

(statearr_19045[(10)] = inst_19006__$1);

return statearr_19045;
})();
var statearr_19046_19065 = state_19034__$1;
(statearr_19046_19065[(2)] = null);

(statearr_19046_19065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (9))){
var inst_19014 = (state_19034[(7)]);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19034__$1,(11),out,inst_19014);
} else {
if((state_val_19035 === (5))){
var inst_19028 = cljs.core.async.close_BANG_.call(null,out);
var state_19034__$1 = state_19034;
var statearr_19047_19066 = state_19034__$1;
(statearr_19047_19066[(2)] = inst_19028);

(statearr_19047_19066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (10))){
var inst_19026 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19048_19067 = state_19034__$1;
(statearr_19048_19067[(2)] = inst_19026);

(statearr_19048_19067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (8))){
var inst_19015 = (state_19034[(9)]);
var inst_19014 = (state_19034[(7)]);
var inst_19013 = (state_19034[(8)]);
var inst_19006 = (state_19034[(10)]);
var inst_19018 = (function (){var c = inst_19015;
var v = inst_19014;
var vec__19011 = inst_19013;
var cs = inst_19006;
return ((function (c,v,vec__19011,cs,inst_19015,inst_19014,inst_19013,inst_19006,state_val_19035,c__6859__auto___19058,out){
return (function (p1__18951_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18951_SHARP_);
});
;})(c,v,vec__19011,cs,inst_19015,inst_19014,inst_19013,inst_19006,state_val_19035,c__6859__auto___19058,out))
})();
var inst_19019 = cljs.core.filterv.call(null,inst_19018,inst_19006);
var inst_19006__$1 = inst_19019;
var state_19034__$1 = (function (){var statearr_19049 = state_19034;
(statearr_19049[(10)] = inst_19006__$1);

return statearr_19049;
})();
var statearr_19050_19068 = state_19034__$1;
(statearr_19050_19068[(2)] = null);

(statearr_19050_19068[(1)] = (2));


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
});})(c__6859__auto___19058,out))
;
return ((function (switch__6803__auto__,c__6859__auto___19058,out){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_19054 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19054[(0)] = state_machine__6804__auto__);

(statearr_19054[(1)] = (1));

return statearr_19054;
});
var state_machine__6804__auto____1 = (function (state_19034){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_19034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e19055){if((e19055 instanceof Object)){
var ex__6807__auto__ = e19055;
var statearr_19056_19069 = state_19034;
(statearr_19056_19069[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19070 = state_19034;
state_19034 = G__19070;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_19034){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_19034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___19058,out))
})();
var state__6861__auto__ = (function (){var statearr_19057 = f__6860__auto__.call(null);
(statearr_19057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___19058);

return statearr_19057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___19058,out))
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
var c__6859__auto___19163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___19163,out){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___19163,out){
return (function (state_19140){
var state_val_19141 = (state_19140[(1)]);
if((state_val_19141 === (7))){
var inst_19122 = (state_19140[(7)]);
var inst_19122__$1 = (state_19140[(2)]);
var inst_19123 = (inst_19122__$1 == null);
var inst_19124 = cljs.core.not.call(null,inst_19123);
var state_19140__$1 = (function (){var statearr_19142 = state_19140;
(statearr_19142[(7)] = inst_19122__$1);

return statearr_19142;
})();
if(inst_19124){
var statearr_19143_19164 = state_19140__$1;
(statearr_19143_19164[(1)] = (8));

} else {
var statearr_19144_19165 = state_19140__$1;
(statearr_19144_19165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19141 === (1))){
var inst_19117 = (0);
var state_19140__$1 = (function (){var statearr_19145 = state_19140;
(statearr_19145[(8)] = inst_19117);

return statearr_19145;
})();
var statearr_19146_19166 = state_19140__$1;
(statearr_19146_19166[(2)] = null);

(statearr_19146_19166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19141 === (4))){
var state_19140__$1 = state_19140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19140__$1,(7),ch);
} else {
if((state_val_19141 === (6))){
var inst_19135 = (state_19140[(2)]);
var state_19140__$1 = state_19140;
var statearr_19147_19167 = state_19140__$1;
(statearr_19147_19167[(2)] = inst_19135);

(statearr_19147_19167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19141 === (3))){
var inst_19137 = (state_19140[(2)]);
var inst_19138 = cljs.core.async.close_BANG_.call(null,out);
var state_19140__$1 = (function (){var statearr_19148 = state_19140;
(statearr_19148[(9)] = inst_19137);

return statearr_19148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19140__$1,inst_19138);
} else {
if((state_val_19141 === (2))){
var inst_19117 = (state_19140[(8)]);
var inst_19119 = (inst_19117 < n);
var state_19140__$1 = state_19140;
if(cljs.core.truth_(inst_19119)){
var statearr_19149_19168 = state_19140__$1;
(statearr_19149_19168[(1)] = (4));

} else {
var statearr_19150_19169 = state_19140__$1;
(statearr_19150_19169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19141 === (11))){
var inst_19117 = (state_19140[(8)]);
var inst_19127 = (state_19140[(2)]);
var inst_19128 = (inst_19117 + (1));
var inst_19117__$1 = inst_19128;
var state_19140__$1 = (function (){var statearr_19151 = state_19140;
(statearr_19151[(10)] = inst_19127);

(statearr_19151[(8)] = inst_19117__$1);

return statearr_19151;
})();
var statearr_19152_19170 = state_19140__$1;
(statearr_19152_19170[(2)] = null);

(statearr_19152_19170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19141 === (9))){
var state_19140__$1 = state_19140;
var statearr_19153_19171 = state_19140__$1;
(statearr_19153_19171[(2)] = null);

(statearr_19153_19171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19141 === (5))){
var state_19140__$1 = state_19140;
var statearr_19154_19172 = state_19140__$1;
(statearr_19154_19172[(2)] = null);

(statearr_19154_19172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19141 === (10))){
var inst_19132 = (state_19140[(2)]);
var state_19140__$1 = state_19140;
var statearr_19155_19173 = state_19140__$1;
(statearr_19155_19173[(2)] = inst_19132);

(statearr_19155_19173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19141 === (8))){
var inst_19122 = (state_19140[(7)]);
var state_19140__$1 = state_19140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19140__$1,(11),out,inst_19122);
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
});})(c__6859__auto___19163,out))
;
return ((function (switch__6803__auto__,c__6859__auto___19163,out){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_19159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19159[(0)] = state_machine__6804__auto__);

(statearr_19159[(1)] = (1));

return statearr_19159;
});
var state_machine__6804__auto____1 = (function (state_19140){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_19140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e19160){if((e19160 instanceof Object)){
var ex__6807__auto__ = e19160;
var statearr_19161_19174 = state_19140;
(statearr_19161_19174[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19175 = state_19140;
state_19140 = G__19175;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_19140){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_19140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___19163,out))
})();
var state__6861__auto__ = (function (){var statearr_19162 = f__6860__auto__.call(null);
(statearr_19162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___19163);

return statearr_19162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___19163,out))
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
if(typeof cljs.core.async.t19183 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19183 = (function (ch,f,map_LT_,meta19184){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19184 = meta19184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19183.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19183.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19186 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19186 = (function (fn1,_,meta19184,map_LT_,f,ch,meta19187){
this.fn1 = fn1;
this._ = _;
this.meta19184 = meta19184;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19187 = meta19187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19186.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19176_SHARP_){
return f1.call(null,(((p1__19176_SHARP_ == null))?null:self__.f.call(null,p1__19176_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19188){
var self__ = this;
var _19188__$1 = this;
return self__.meta19187;
});})(___$1))
;

cljs.core.async.t19186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19188,meta19187__$1){
var self__ = this;
var _19188__$1 = this;
return (new cljs.core.async.t19186(self__.fn1,self__._,self__.meta19184,self__.map_LT_,self__.f,self__.ch,meta19187__$1));
});})(___$1))
;

cljs.core.async.t19186.cljs$lang$type = true;

cljs.core.async.t19186.cljs$lang$ctorStr = "cljs.core.async/t19186";

cljs.core.async.t19186.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19186");
});})(___$1))
;

cljs.core.async.__GT_t19186 = ((function (___$1){
return (function __GT_t19186(fn1__$1,___$2,meta19184__$1,map_LT___$1,f__$1,ch__$1,meta19187){
return (new cljs.core.async.t19186(fn1__$1,___$2,meta19184__$1,map_LT___$1,f__$1,ch__$1,meta19187));
});})(___$1))
;

}

return (new cljs.core.async.t19186(fn1,___$1,self__.meta19184,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t19183.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19185){
var self__ = this;
var _19185__$1 = this;
return self__.meta19184;
});

cljs.core.async.t19183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19185,meta19184__$1){
var self__ = this;
var _19185__$1 = this;
return (new cljs.core.async.t19183(self__.ch,self__.f,self__.map_LT_,meta19184__$1));
});

cljs.core.async.t19183.cljs$lang$type = true;

cljs.core.async.t19183.cljs$lang$ctorStr = "cljs.core.async/t19183";

cljs.core.async.t19183.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19183");
});

cljs.core.async.__GT_t19183 = (function __GT_t19183(ch__$1,f__$1,map_LT___$1,meta19184){
return (new cljs.core.async.t19183(ch__$1,f__$1,map_LT___$1,meta19184));
});

}

return (new cljs.core.async.t19183(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19192 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19192 = (function (ch,f,map_GT_,meta19193){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19193 = meta19193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19192.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19192.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19192.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19194){
var self__ = this;
var _19194__$1 = this;
return self__.meta19193;
});

cljs.core.async.t19192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19194,meta19193__$1){
var self__ = this;
var _19194__$1 = this;
return (new cljs.core.async.t19192(self__.ch,self__.f,self__.map_GT_,meta19193__$1));
});

cljs.core.async.t19192.cljs$lang$type = true;

cljs.core.async.t19192.cljs$lang$ctorStr = "cljs.core.async/t19192";

cljs.core.async.t19192.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19192");
});

cljs.core.async.__GT_t19192 = (function __GT_t19192(ch__$1,f__$1,map_GT___$1,meta19193){
return (new cljs.core.async.t19192(ch__$1,f__$1,map_GT___$1,meta19193));
});

}

return (new cljs.core.async.t19192(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19198 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19198 = (function (ch,p,filter_GT_,meta19199){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19199 = meta19199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19198.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19198.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19198.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19198.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19198.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19198.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19198.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19200){
var self__ = this;
var _19200__$1 = this;
return self__.meta19199;
});

cljs.core.async.t19198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19200,meta19199__$1){
var self__ = this;
var _19200__$1 = this;
return (new cljs.core.async.t19198(self__.ch,self__.p,self__.filter_GT_,meta19199__$1));
});

cljs.core.async.t19198.cljs$lang$type = true;

cljs.core.async.t19198.cljs$lang$ctorStr = "cljs.core.async/t19198";

cljs.core.async.t19198.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19198");
});

cljs.core.async.__GT_t19198 = (function __GT_t19198(ch__$1,p__$1,filter_GT___$1,meta19199){
return (new cljs.core.async.t19198(ch__$1,p__$1,filter_GT___$1,meta19199));
});

}

return (new cljs.core.async.t19198(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var c__6859__auto___19283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___19283,out){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___19283,out){
return (function (state_19262){
var state_val_19263 = (state_19262[(1)]);
if((state_val_19263 === (7))){
var inst_19258 = (state_19262[(2)]);
var state_19262__$1 = state_19262;
var statearr_19264_19284 = state_19262__$1;
(statearr_19264_19284[(2)] = inst_19258);

(statearr_19264_19284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19263 === (1))){
var state_19262__$1 = state_19262;
var statearr_19265_19285 = state_19262__$1;
(statearr_19265_19285[(2)] = null);

(statearr_19265_19285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19263 === (4))){
var inst_19244 = (state_19262[(7)]);
var inst_19244__$1 = (state_19262[(2)]);
var inst_19245 = (inst_19244__$1 == null);
var state_19262__$1 = (function (){var statearr_19266 = state_19262;
(statearr_19266[(7)] = inst_19244__$1);

return statearr_19266;
})();
if(cljs.core.truth_(inst_19245)){
var statearr_19267_19286 = state_19262__$1;
(statearr_19267_19286[(1)] = (5));

} else {
var statearr_19268_19287 = state_19262__$1;
(statearr_19268_19287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19263 === (6))){
var inst_19244 = (state_19262[(7)]);
var inst_19249 = p.call(null,inst_19244);
var state_19262__$1 = state_19262;
if(cljs.core.truth_(inst_19249)){
var statearr_19269_19288 = state_19262__$1;
(statearr_19269_19288[(1)] = (8));

} else {
var statearr_19270_19289 = state_19262__$1;
(statearr_19270_19289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19263 === (3))){
var inst_19260 = (state_19262[(2)]);
var state_19262__$1 = state_19262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19262__$1,inst_19260);
} else {
if((state_val_19263 === (2))){
var state_19262__$1 = state_19262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19262__$1,(4),ch);
} else {
if((state_val_19263 === (11))){
var inst_19252 = (state_19262[(2)]);
var state_19262__$1 = state_19262;
var statearr_19271_19290 = state_19262__$1;
(statearr_19271_19290[(2)] = inst_19252);

(statearr_19271_19290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19263 === (9))){
var state_19262__$1 = state_19262;
var statearr_19272_19291 = state_19262__$1;
(statearr_19272_19291[(2)] = null);

(statearr_19272_19291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19263 === (5))){
var inst_19247 = cljs.core.async.close_BANG_.call(null,out);
var state_19262__$1 = state_19262;
var statearr_19273_19292 = state_19262__$1;
(statearr_19273_19292[(2)] = inst_19247);

(statearr_19273_19292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19263 === (10))){
var inst_19255 = (state_19262[(2)]);
var state_19262__$1 = (function (){var statearr_19274 = state_19262;
(statearr_19274[(8)] = inst_19255);

return statearr_19274;
})();
var statearr_19275_19293 = state_19262__$1;
(statearr_19275_19293[(2)] = null);

(statearr_19275_19293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19263 === (8))){
var inst_19244 = (state_19262[(7)]);
var state_19262__$1 = state_19262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19262__$1,(11),out,inst_19244);
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
});})(c__6859__auto___19283,out))
;
return ((function (switch__6803__auto__,c__6859__auto___19283,out){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_19279 = [null,null,null,null,null,null,null,null,null];
(statearr_19279[(0)] = state_machine__6804__auto__);

(statearr_19279[(1)] = (1));

return statearr_19279;
});
var state_machine__6804__auto____1 = (function (state_19262){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_19262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e19280){if((e19280 instanceof Object)){
var ex__6807__auto__ = e19280;
var statearr_19281_19294 = state_19262;
(statearr_19281_19294[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19295 = state_19262;
state_19262 = G__19295;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_19262){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_19262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___19283,out))
})();
var state__6861__auto__ = (function (){var statearr_19282 = f__6860__auto__.call(null);
(statearr_19282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___19283);

return statearr_19282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___19283,out))
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
var c__6859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto__){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto__){
return (function (state_19461){
var state_val_19462 = (state_19461[(1)]);
if((state_val_19462 === (7))){
var inst_19457 = (state_19461[(2)]);
var state_19461__$1 = state_19461;
var statearr_19463_19504 = state_19461__$1;
(statearr_19463_19504[(2)] = inst_19457);

(statearr_19463_19504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (20))){
var inst_19427 = (state_19461[(7)]);
var inst_19438 = (state_19461[(2)]);
var inst_19439 = cljs.core.next.call(null,inst_19427);
var inst_19413 = inst_19439;
var inst_19414 = null;
var inst_19415 = (0);
var inst_19416 = (0);
var state_19461__$1 = (function (){var statearr_19464 = state_19461;
(statearr_19464[(8)] = inst_19416);

(statearr_19464[(9)] = inst_19438);

(statearr_19464[(10)] = inst_19413);

(statearr_19464[(11)] = inst_19415);

(statearr_19464[(12)] = inst_19414);

return statearr_19464;
})();
var statearr_19465_19505 = state_19461__$1;
(statearr_19465_19505[(2)] = null);

(statearr_19465_19505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (1))){
var state_19461__$1 = state_19461;
var statearr_19466_19506 = state_19461__$1;
(statearr_19466_19506[(2)] = null);

(statearr_19466_19506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (4))){
var inst_19402 = (state_19461[(13)]);
var inst_19402__$1 = (state_19461[(2)]);
var inst_19403 = (inst_19402__$1 == null);
var state_19461__$1 = (function (){var statearr_19467 = state_19461;
(statearr_19467[(13)] = inst_19402__$1);

return statearr_19467;
})();
if(cljs.core.truth_(inst_19403)){
var statearr_19468_19507 = state_19461__$1;
(statearr_19468_19507[(1)] = (5));

} else {
var statearr_19469_19508 = state_19461__$1;
(statearr_19469_19508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (15))){
var state_19461__$1 = state_19461;
var statearr_19473_19509 = state_19461__$1;
(statearr_19473_19509[(2)] = null);

(statearr_19473_19509[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (21))){
var state_19461__$1 = state_19461;
var statearr_19474_19510 = state_19461__$1;
(statearr_19474_19510[(2)] = null);

(statearr_19474_19510[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (13))){
var inst_19416 = (state_19461[(8)]);
var inst_19413 = (state_19461[(10)]);
var inst_19415 = (state_19461[(11)]);
var inst_19414 = (state_19461[(12)]);
var inst_19423 = (state_19461[(2)]);
var inst_19424 = (inst_19416 + (1));
var tmp19470 = inst_19413;
var tmp19471 = inst_19415;
var tmp19472 = inst_19414;
var inst_19413__$1 = tmp19470;
var inst_19414__$1 = tmp19472;
var inst_19415__$1 = tmp19471;
var inst_19416__$1 = inst_19424;
var state_19461__$1 = (function (){var statearr_19475 = state_19461;
(statearr_19475[(8)] = inst_19416__$1);

(statearr_19475[(10)] = inst_19413__$1);

(statearr_19475[(14)] = inst_19423);

(statearr_19475[(11)] = inst_19415__$1);

(statearr_19475[(12)] = inst_19414__$1);

return statearr_19475;
})();
var statearr_19476_19511 = state_19461__$1;
(statearr_19476_19511[(2)] = null);

(statearr_19476_19511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (22))){
var state_19461__$1 = state_19461;
var statearr_19477_19512 = state_19461__$1;
(statearr_19477_19512[(2)] = null);

(statearr_19477_19512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (6))){
var inst_19402 = (state_19461[(13)]);
var inst_19411 = f.call(null,inst_19402);
var inst_19412 = cljs.core.seq.call(null,inst_19411);
var inst_19413 = inst_19412;
var inst_19414 = null;
var inst_19415 = (0);
var inst_19416 = (0);
var state_19461__$1 = (function (){var statearr_19478 = state_19461;
(statearr_19478[(8)] = inst_19416);

(statearr_19478[(10)] = inst_19413);

(statearr_19478[(11)] = inst_19415);

(statearr_19478[(12)] = inst_19414);

return statearr_19478;
})();
var statearr_19479_19513 = state_19461__$1;
(statearr_19479_19513[(2)] = null);

(statearr_19479_19513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (17))){
var inst_19427 = (state_19461[(7)]);
var inst_19431 = cljs.core.chunk_first.call(null,inst_19427);
var inst_19432 = cljs.core.chunk_rest.call(null,inst_19427);
var inst_19433 = cljs.core.count.call(null,inst_19431);
var inst_19413 = inst_19432;
var inst_19414 = inst_19431;
var inst_19415 = inst_19433;
var inst_19416 = (0);
var state_19461__$1 = (function (){var statearr_19480 = state_19461;
(statearr_19480[(8)] = inst_19416);

(statearr_19480[(10)] = inst_19413);

(statearr_19480[(11)] = inst_19415);

(statearr_19480[(12)] = inst_19414);

return statearr_19480;
})();
var statearr_19481_19514 = state_19461__$1;
(statearr_19481_19514[(2)] = null);

(statearr_19481_19514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (3))){
var inst_19459 = (state_19461[(2)]);
var state_19461__$1 = state_19461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19461__$1,inst_19459);
} else {
if((state_val_19462 === (12))){
var inst_19447 = (state_19461[(2)]);
var state_19461__$1 = state_19461;
var statearr_19482_19515 = state_19461__$1;
(statearr_19482_19515[(2)] = inst_19447);

(statearr_19482_19515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (2))){
var state_19461__$1 = state_19461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19461__$1,(4),in$);
} else {
if((state_val_19462 === (23))){
var inst_19455 = (state_19461[(2)]);
var state_19461__$1 = state_19461;
var statearr_19483_19516 = state_19461__$1;
(statearr_19483_19516[(2)] = inst_19455);

(statearr_19483_19516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (19))){
var inst_19442 = (state_19461[(2)]);
var state_19461__$1 = state_19461;
var statearr_19484_19517 = state_19461__$1;
(statearr_19484_19517[(2)] = inst_19442);

(statearr_19484_19517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (11))){
var inst_19413 = (state_19461[(10)]);
var inst_19427 = (state_19461[(7)]);
var inst_19427__$1 = cljs.core.seq.call(null,inst_19413);
var state_19461__$1 = (function (){var statearr_19485 = state_19461;
(statearr_19485[(7)] = inst_19427__$1);

return statearr_19485;
})();
if(inst_19427__$1){
var statearr_19486_19518 = state_19461__$1;
(statearr_19486_19518[(1)] = (14));

} else {
var statearr_19487_19519 = state_19461__$1;
(statearr_19487_19519[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (9))){
var inst_19449 = (state_19461[(2)]);
var inst_19450 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19461__$1 = (function (){var statearr_19488 = state_19461;
(statearr_19488[(15)] = inst_19449);

return statearr_19488;
})();
if(cljs.core.truth_(inst_19450)){
var statearr_19489_19520 = state_19461__$1;
(statearr_19489_19520[(1)] = (21));

} else {
var statearr_19490_19521 = state_19461__$1;
(statearr_19490_19521[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (5))){
var inst_19405 = cljs.core.async.close_BANG_.call(null,out);
var state_19461__$1 = state_19461;
var statearr_19491_19522 = state_19461__$1;
(statearr_19491_19522[(2)] = inst_19405);

(statearr_19491_19522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (14))){
var inst_19427 = (state_19461[(7)]);
var inst_19429 = cljs.core.chunked_seq_QMARK_.call(null,inst_19427);
var state_19461__$1 = state_19461;
if(inst_19429){
var statearr_19492_19523 = state_19461__$1;
(statearr_19492_19523[(1)] = (17));

} else {
var statearr_19493_19524 = state_19461__$1;
(statearr_19493_19524[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (16))){
var inst_19445 = (state_19461[(2)]);
var state_19461__$1 = state_19461;
var statearr_19494_19525 = state_19461__$1;
(statearr_19494_19525[(2)] = inst_19445);

(statearr_19494_19525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19462 === (10))){
var inst_19416 = (state_19461[(8)]);
var inst_19414 = (state_19461[(12)]);
var inst_19421 = cljs.core._nth.call(null,inst_19414,inst_19416);
var state_19461__$1 = state_19461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19461__$1,(13),out,inst_19421);
} else {
if((state_val_19462 === (18))){
var inst_19427 = (state_19461[(7)]);
var inst_19436 = cljs.core.first.call(null,inst_19427);
var state_19461__$1 = state_19461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19461__$1,(20),out,inst_19436);
} else {
if((state_val_19462 === (8))){
var inst_19416 = (state_19461[(8)]);
var inst_19415 = (state_19461[(11)]);
var inst_19418 = (inst_19416 < inst_19415);
var inst_19419 = inst_19418;
var state_19461__$1 = state_19461;
if(cljs.core.truth_(inst_19419)){
var statearr_19495_19526 = state_19461__$1;
(statearr_19495_19526[(1)] = (10));

} else {
var statearr_19496_19527 = state_19461__$1;
(statearr_19496_19527[(1)] = (11));

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
});})(c__6859__auto__))
;
return ((function (switch__6803__auto__,c__6859__auto__){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_19500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19500[(0)] = state_machine__6804__auto__);

(statearr_19500[(1)] = (1));

return statearr_19500;
});
var state_machine__6804__auto____1 = (function (state_19461){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_19461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e19501){if((e19501 instanceof Object)){
var ex__6807__auto__ = e19501;
var statearr_19502_19528 = state_19461;
(statearr_19502_19528[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19529 = state_19461;
state_19461 = G__19529;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_19461){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_19461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto__))
})();
var state__6861__auto__ = (function (){var statearr_19503 = f__6860__auto__.call(null);
(statearr_19503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto__);

return statearr_19503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto__))
);

return c__6859__auto__;
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
var c__6859__auto___19626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___19626,out){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___19626,out){
return (function (state_19601){
var state_val_19602 = (state_19601[(1)]);
if((state_val_19602 === (7))){
var inst_19596 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19603_19627 = state_19601__$1;
(statearr_19603_19627[(2)] = inst_19596);

(statearr_19603_19627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (1))){
var inst_19578 = null;
var state_19601__$1 = (function (){var statearr_19604 = state_19601;
(statearr_19604[(7)] = inst_19578);

return statearr_19604;
})();
var statearr_19605_19628 = state_19601__$1;
(statearr_19605_19628[(2)] = null);

(statearr_19605_19628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (4))){
var inst_19581 = (state_19601[(8)]);
var inst_19581__$1 = (state_19601[(2)]);
var inst_19582 = (inst_19581__$1 == null);
var inst_19583 = cljs.core.not.call(null,inst_19582);
var state_19601__$1 = (function (){var statearr_19606 = state_19601;
(statearr_19606[(8)] = inst_19581__$1);

return statearr_19606;
})();
if(inst_19583){
var statearr_19607_19629 = state_19601__$1;
(statearr_19607_19629[(1)] = (5));

} else {
var statearr_19608_19630 = state_19601__$1;
(statearr_19608_19630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (6))){
var state_19601__$1 = state_19601;
var statearr_19609_19631 = state_19601__$1;
(statearr_19609_19631[(2)] = null);

(statearr_19609_19631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (3))){
var inst_19598 = (state_19601[(2)]);
var inst_19599 = cljs.core.async.close_BANG_.call(null,out);
var state_19601__$1 = (function (){var statearr_19610 = state_19601;
(statearr_19610[(9)] = inst_19598);

return statearr_19610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19601__$1,inst_19599);
} else {
if((state_val_19602 === (2))){
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19601__$1,(4),ch);
} else {
if((state_val_19602 === (11))){
var inst_19581 = (state_19601[(8)]);
var inst_19590 = (state_19601[(2)]);
var inst_19578 = inst_19581;
var state_19601__$1 = (function (){var statearr_19611 = state_19601;
(statearr_19611[(10)] = inst_19590);

(statearr_19611[(7)] = inst_19578);

return statearr_19611;
})();
var statearr_19612_19632 = state_19601__$1;
(statearr_19612_19632[(2)] = null);

(statearr_19612_19632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (9))){
var inst_19581 = (state_19601[(8)]);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19601__$1,(11),out,inst_19581);
} else {
if((state_val_19602 === (5))){
var inst_19578 = (state_19601[(7)]);
var inst_19581 = (state_19601[(8)]);
var inst_19585 = cljs.core._EQ_.call(null,inst_19581,inst_19578);
var state_19601__$1 = state_19601;
if(inst_19585){
var statearr_19614_19633 = state_19601__$1;
(statearr_19614_19633[(1)] = (8));

} else {
var statearr_19615_19634 = state_19601__$1;
(statearr_19615_19634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (10))){
var inst_19593 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19616_19635 = state_19601__$1;
(statearr_19616_19635[(2)] = inst_19593);

(statearr_19616_19635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (8))){
var inst_19578 = (state_19601[(7)]);
var tmp19613 = inst_19578;
var inst_19578__$1 = tmp19613;
var state_19601__$1 = (function (){var statearr_19617 = state_19601;
(statearr_19617[(7)] = inst_19578__$1);

return statearr_19617;
})();
var statearr_19618_19636 = state_19601__$1;
(statearr_19618_19636[(2)] = null);

(statearr_19618_19636[(1)] = (2));


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
});})(c__6859__auto___19626,out))
;
return ((function (switch__6803__auto__,c__6859__auto___19626,out){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_19622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19622[(0)] = state_machine__6804__auto__);

(statearr_19622[(1)] = (1));

return statearr_19622;
});
var state_machine__6804__auto____1 = (function (state_19601){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_19601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e19623){if((e19623 instanceof Object)){
var ex__6807__auto__ = e19623;
var statearr_19624_19637 = state_19601;
(statearr_19624_19637[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19638 = state_19601;
state_19601 = G__19638;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_19601){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_19601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___19626,out))
})();
var state__6861__auto__ = (function (){var statearr_19625 = f__6860__auto__.call(null);
(statearr_19625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___19626);

return statearr_19625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___19626,out))
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
var c__6859__auto___19773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___19773,out){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___19773,out){
return (function (state_19743){
var state_val_19744 = (state_19743[(1)]);
if((state_val_19744 === (7))){
var inst_19739 = (state_19743[(2)]);
var state_19743__$1 = state_19743;
var statearr_19745_19774 = state_19743__$1;
(statearr_19745_19774[(2)] = inst_19739);

(statearr_19745_19774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19744 === (1))){
var inst_19706 = (new Array(n));
var inst_19707 = inst_19706;
var inst_19708 = (0);
var state_19743__$1 = (function (){var statearr_19746 = state_19743;
(statearr_19746[(7)] = inst_19707);

(statearr_19746[(8)] = inst_19708);

return statearr_19746;
})();
var statearr_19747_19775 = state_19743__$1;
(statearr_19747_19775[(2)] = null);

(statearr_19747_19775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19744 === (4))){
var inst_19711 = (state_19743[(9)]);
var inst_19711__$1 = (state_19743[(2)]);
var inst_19712 = (inst_19711__$1 == null);
var inst_19713 = cljs.core.not.call(null,inst_19712);
var state_19743__$1 = (function (){var statearr_19748 = state_19743;
(statearr_19748[(9)] = inst_19711__$1);

return statearr_19748;
})();
if(inst_19713){
var statearr_19749_19776 = state_19743__$1;
(statearr_19749_19776[(1)] = (5));

} else {
var statearr_19750_19777 = state_19743__$1;
(statearr_19750_19777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19744 === (15))){
var inst_19733 = (state_19743[(2)]);
var state_19743__$1 = state_19743;
var statearr_19751_19778 = state_19743__$1;
(statearr_19751_19778[(2)] = inst_19733);

(statearr_19751_19778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19744 === (13))){
var state_19743__$1 = state_19743;
var statearr_19752_19779 = state_19743__$1;
(statearr_19752_19779[(2)] = null);

(statearr_19752_19779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19744 === (6))){
var inst_19708 = (state_19743[(8)]);
var inst_19729 = (inst_19708 > (0));
var state_19743__$1 = state_19743;
if(cljs.core.truth_(inst_19729)){
var statearr_19753_19780 = state_19743__$1;
(statearr_19753_19780[(1)] = (12));

} else {
var statearr_19754_19781 = state_19743__$1;
(statearr_19754_19781[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19744 === (3))){
var inst_19741 = (state_19743[(2)]);
var state_19743__$1 = state_19743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19743__$1,inst_19741);
} else {
if((state_val_19744 === (12))){
var inst_19707 = (state_19743[(7)]);
var inst_19731 = cljs.core.vec.call(null,inst_19707);
var state_19743__$1 = state_19743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19743__$1,(15),out,inst_19731);
} else {
if((state_val_19744 === (2))){
var state_19743__$1 = state_19743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19743__$1,(4),ch);
} else {
if((state_val_19744 === (11))){
var inst_19723 = (state_19743[(2)]);
var inst_19724 = (new Array(n));
var inst_19707 = inst_19724;
var inst_19708 = (0);
var state_19743__$1 = (function (){var statearr_19755 = state_19743;
(statearr_19755[(7)] = inst_19707);

(statearr_19755[(8)] = inst_19708);

(statearr_19755[(10)] = inst_19723);

return statearr_19755;
})();
var statearr_19756_19782 = state_19743__$1;
(statearr_19756_19782[(2)] = null);

(statearr_19756_19782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19744 === (9))){
var inst_19707 = (state_19743[(7)]);
var inst_19721 = cljs.core.vec.call(null,inst_19707);
var state_19743__$1 = state_19743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19743__$1,(11),out,inst_19721);
} else {
if((state_val_19744 === (5))){
var inst_19711 = (state_19743[(9)]);
var inst_19716 = (state_19743[(11)]);
var inst_19707 = (state_19743[(7)]);
var inst_19708 = (state_19743[(8)]);
var inst_19715 = (inst_19707[inst_19708] = inst_19711);
var inst_19716__$1 = (inst_19708 + (1));
var inst_19717 = (inst_19716__$1 < n);
var state_19743__$1 = (function (){var statearr_19757 = state_19743;
(statearr_19757[(12)] = inst_19715);

(statearr_19757[(11)] = inst_19716__$1);

return statearr_19757;
})();
if(cljs.core.truth_(inst_19717)){
var statearr_19758_19783 = state_19743__$1;
(statearr_19758_19783[(1)] = (8));

} else {
var statearr_19759_19784 = state_19743__$1;
(statearr_19759_19784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19744 === (14))){
var inst_19736 = (state_19743[(2)]);
var inst_19737 = cljs.core.async.close_BANG_.call(null,out);
var state_19743__$1 = (function (){var statearr_19761 = state_19743;
(statearr_19761[(13)] = inst_19736);

return statearr_19761;
})();
var statearr_19762_19785 = state_19743__$1;
(statearr_19762_19785[(2)] = inst_19737);

(statearr_19762_19785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19744 === (10))){
var inst_19727 = (state_19743[(2)]);
var state_19743__$1 = state_19743;
var statearr_19763_19786 = state_19743__$1;
(statearr_19763_19786[(2)] = inst_19727);

(statearr_19763_19786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19744 === (8))){
var inst_19716 = (state_19743[(11)]);
var inst_19707 = (state_19743[(7)]);
var tmp19760 = inst_19707;
var inst_19707__$1 = tmp19760;
var inst_19708 = inst_19716;
var state_19743__$1 = (function (){var statearr_19764 = state_19743;
(statearr_19764[(7)] = inst_19707__$1);

(statearr_19764[(8)] = inst_19708);

return statearr_19764;
})();
var statearr_19765_19787 = state_19743__$1;
(statearr_19765_19787[(2)] = null);

(statearr_19765_19787[(1)] = (2));


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
});})(c__6859__auto___19773,out))
;
return ((function (switch__6803__auto__,c__6859__auto___19773,out){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_19769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19769[(0)] = state_machine__6804__auto__);

(statearr_19769[(1)] = (1));

return statearr_19769;
});
var state_machine__6804__auto____1 = (function (state_19743){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_19743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e19770){if((e19770 instanceof Object)){
var ex__6807__auto__ = e19770;
var statearr_19771_19788 = state_19743;
(statearr_19771_19788[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19789 = state_19743;
state_19743 = G__19789;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_19743){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_19743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___19773,out))
})();
var state__6861__auto__ = (function (){var statearr_19772 = f__6860__auto__.call(null);
(statearr_19772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___19773);

return statearr_19772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___19773,out))
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
var c__6859__auto___19932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6859__auto___19932,out){
return (function (){
var f__6860__auto__ = (function (){var switch__6803__auto__ = ((function (c__6859__auto___19932,out){
return (function (state_19902){
var state_val_19903 = (state_19902[(1)]);
if((state_val_19903 === (7))){
var inst_19898 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19904_19933 = state_19902__$1;
(statearr_19904_19933[(2)] = inst_19898);

(statearr_19904_19933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (1))){
var inst_19861 = [];
var inst_19862 = inst_19861;
var inst_19863 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19902__$1 = (function (){var statearr_19905 = state_19902;
(statearr_19905[(7)] = inst_19862);

(statearr_19905[(8)] = inst_19863);

return statearr_19905;
})();
var statearr_19906_19934 = state_19902__$1;
(statearr_19906_19934[(2)] = null);

(statearr_19906_19934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (4))){
var inst_19866 = (state_19902[(9)]);
var inst_19866__$1 = (state_19902[(2)]);
var inst_19867 = (inst_19866__$1 == null);
var inst_19868 = cljs.core.not.call(null,inst_19867);
var state_19902__$1 = (function (){var statearr_19907 = state_19902;
(statearr_19907[(9)] = inst_19866__$1);

return statearr_19907;
})();
if(inst_19868){
var statearr_19908_19935 = state_19902__$1;
(statearr_19908_19935[(1)] = (5));

} else {
var statearr_19909_19936 = state_19902__$1;
(statearr_19909_19936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (15))){
var inst_19892 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19910_19937 = state_19902__$1;
(statearr_19910_19937[(2)] = inst_19892);

(statearr_19910_19937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (13))){
var state_19902__$1 = state_19902;
var statearr_19911_19938 = state_19902__$1;
(statearr_19911_19938[(2)] = null);

(statearr_19911_19938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (6))){
var inst_19862 = (state_19902[(7)]);
var inst_19887 = inst_19862.length;
var inst_19888 = (inst_19887 > (0));
var state_19902__$1 = state_19902;
if(cljs.core.truth_(inst_19888)){
var statearr_19912_19939 = state_19902__$1;
(statearr_19912_19939[(1)] = (12));

} else {
var statearr_19913_19940 = state_19902__$1;
(statearr_19913_19940[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (3))){
var inst_19900 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19902__$1,inst_19900);
} else {
if((state_val_19903 === (12))){
var inst_19862 = (state_19902[(7)]);
var inst_19890 = cljs.core.vec.call(null,inst_19862);
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19902__$1,(15),out,inst_19890);
} else {
if((state_val_19903 === (2))){
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19902__$1,(4),ch);
} else {
if((state_val_19903 === (11))){
var inst_19870 = (state_19902[(10)]);
var inst_19866 = (state_19902[(9)]);
var inst_19880 = (state_19902[(2)]);
var inst_19881 = [];
var inst_19882 = inst_19881.push(inst_19866);
var inst_19862 = inst_19881;
var inst_19863 = inst_19870;
var state_19902__$1 = (function (){var statearr_19914 = state_19902;
(statearr_19914[(11)] = inst_19880);

(statearr_19914[(12)] = inst_19882);

(statearr_19914[(7)] = inst_19862);

(statearr_19914[(8)] = inst_19863);

return statearr_19914;
})();
var statearr_19915_19941 = state_19902__$1;
(statearr_19915_19941[(2)] = null);

(statearr_19915_19941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (9))){
var inst_19862 = (state_19902[(7)]);
var inst_19878 = cljs.core.vec.call(null,inst_19862);
var state_19902__$1 = state_19902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19902__$1,(11),out,inst_19878);
} else {
if((state_val_19903 === (5))){
var inst_19870 = (state_19902[(10)]);
var inst_19863 = (state_19902[(8)]);
var inst_19866 = (state_19902[(9)]);
var inst_19870__$1 = f.call(null,inst_19866);
var inst_19871 = cljs.core._EQ_.call(null,inst_19870__$1,inst_19863);
var inst_19872 = cljs.core.keyword_identical_QMARK_.call(null,inst_19863,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19873 = (inst_19871) || (inst_19872);
var state_19902__$1 = (function (){var statearr_19916 = state_19902;
(statearr_19916[(10)] = inst_19870__$1);

return statearr_19916;
})();
if(cljs.core.truth_(inst_19873)){
var statearr_19917_19942 = state_19902__$1;
(statearr_19917_19942[(1)] = (8));

} else {
var statearr_19918_19943 = state_19902__$1;
(statearr_19918_19943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (14))){
var inst_19895 = (state_19902[(2)]);
var inst_19896 = cljs.core.async.close_BANG_.call(null,out);
var state_19902__$1 = (function (){var statearr_19920 = state_19902;
(statearr_19920[(13)] = inst_19895);

return statearr_19920;
})();
var statearr_19921_19944 = state_19902__$1;
(statearr_19921_19944[(2)] = inst_19896);

(statearr_19921_19944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (10))){
var inst_19885 = (state_19902[(2)]);
var state_19902__$1 = state_19902;
var statearr_19922_19945 = state_19902__$1;
(statearr_19922_19945[(2)] = inst_19885);

(statearr_19922_19945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19903 === (8))){
var inst_19870 = (state_19902[(10)]);
var inst_19862 = (state_19902[(7)]);
var inst_19866 = (state_19902[(9)]);
var inst_19875 = inst_19862.push(inst_19866);
var tmp19919 = inst_19862;
var inst_19862__$1 = tmp19919;
var inst_19863 = inst_19870;
var state_19902__$1 = (function (){var statearr_19923 = state_19902;
(statearr_19923[(7)] = inst_19862__$1);

(statearr_19923[(14)] = inst_19875);

(statearr_19923[(8)] = inst_19863);

return statearr_19923;
})();
var statearr_19924_19946 = state_19902__$1;
(statearr_19924_19946[(2)] = null);

(statearr_19924_19946[(1)] = (2));


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
});})(c__6859__auto___19932,out))
;
return ((function (switch__6803__auto__,c__6859__auto___19932,out){
return (function() {
var state_machine__6804__auto__ = null;
var state_machine__6804__auto____0 = (function (){
var statearr_19928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19928[(0)] = state_machine__6804__auto__);

(statearr_19928[(1)] = (1));

return statearr_19928;
});
var state_machine__6804__auto____1 = (function (state_19902){
while(true){
var ret_value__6805__auto__ = (function (){try{while(true){
var result__6806__auto__ = switch__6803__auto__.call(null,state_19902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6806__auto__;
}
break;
}
}catch (e19929){if((e19929 instanceof Object)){
var ex__6807__auto__ = e19929;
var statearr_19930_19947 = state_19902;
(statearr_19930_19947[(5)] = ex__6807__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6805__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19948 = state_19902;
state_19902 = G__19948;
continue;
} else {
return ret_value__6805__auto__;
}
break;
}
});
state_machine__6804__auto__ = function(state_19902){
switch(arguments.length){
case 0:
return state_machine__6804__auto____0.call(this);
case 1:
return state_machine__6804__auto____1.call(this,state_19902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6804__auto____0;
state_machine__6804__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6804__auto____1;
return state_machine__6804__auto__;
})()
;})(switch__6803__auto__,c__6859__auto___19932,out))
})();
var state__6861__auto__ = (function (){var statearr_19931 = f__6860__auto__.call(null);
(statearr_19931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6859__auto___19932);

return statearr_19931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6861__auto__);
});})(c__6859__auto___19932,out))
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

//# sourceMappingURL=async.js.map