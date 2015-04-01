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
if(typeof cljs.core.async.t16973 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16973 = (function (f,fn_handler,meta16974){
this.f = f;
this.fn_handler = fn_handler;
this.meta16974 = meta16974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16973.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16975){
var self__ = this;
var _16975__$1 = this;
return self__.meta16974;
});

cljs.core.async.t16973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16975,meta16974__$1){
var self__ = this;
var _16975__$1 = this;
return (new cljs.core.async.t16973(self__.f,self__.fn_handler,meta16974__$1));
});

cljs.core.async.t16973.cljs$lang$type = true;

cljs.core.async.t16973.cljs$lang$ctorStr = "cljs.core.async/t16973";

cljs.core.async.t16973.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t16973");
});

cljs.core.async.__GT_t16973 = (function __GT_t16973(f__$1,fn_handler__$1,meta16974){
return (new cljs.core.async.t16973(f__$1,fn_handler__$1,meta16974));
});

}

return (new cljs.core.async.t16973(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var G__16977 = buff;
if(G__16977){
var bit__4480__auto__ = null;
if(cljs.core.truth_((function (){var or__3799__auto__ = bit__4480__auto__;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return G__16977.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16977.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16977);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16977);
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
var val_16978 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16978);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16978,ret){
return (function (){
return fn1.call(null,val_16978);
});})(val_16978,ret))
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
var n__4686__auto___16979 = n;
var x_16980 = (0);
while(true){
if((x_16980 < n__4686__auto___16979)){
(a[x_16980] = (0));

var G__16981 = (x_16980 + (1));
x_16980 = G__16981;
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

var G__16982 = (i + (1));
i = G__16982;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16986 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16986 = (function (flag,alt_flag,meta16987){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16987 = meta16987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16986.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16986.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16988){
var self__ = this;
var _16988__$1 = this;
return self__.meta16987;
});})(flag))
;

cljs.core.async.t16986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16988,meta16987__$1){
var self__ = this;
var _16988__$1 = this;
return (new cljs.core.async.t16986(self__.flag,self__.alt_flag,meta16987__$1));
});})(flag))
;

cljs.core.async.t16986.cljs$lang$type = true;

cljs.core.async.t16986.cljs$lang$ctorStr = "cljs.core.async/t16986";

cljs.core.async.t16986.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t16986");
});})(flag))
;

cljs.core.async.__GT_t16986 = ((function (flag){
return (function __GT_t16986(flag__$1,alt_flag__$1,meta16987){
return (new cljs.core.async.t16986(flag__$1,alt_flag__$1,meta16987));
});})(flag))
;

}

return (new cljs.core.async.t16986(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16992 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16992 = (function (cb,flag,alt_handler,meta16993){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16993 = meta16993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16992.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16994){
var self__ = this;
var _16994__$1 = this;
return self__.meta16993;
});

cljs.core.async.t16992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16994,meta16993__$1){
var self__ = this;
var _16994__$1 = this;
return (new cljs.core.async.t16992(self__.cb,self__.flag,self__.alt_handler,meta16993__$1));
});

cljs.core.async.t16992.cljs$lang$type = true;

cljs.core.async.t16992.cljs$lang$ctorStr = "cljs.core.async/t16992";

cljs.core.async.t16992.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t16992");
});

cljs.core.async.__GT_t16992 = (function __GT_t16992(cb__$1,flag__$1,alt_handler__$1,meta16993){
return (new cljs.core.async.t16992(cb__$1,flag__$1,alt_handler__$1,meta16993));
});

}

return (new cljs.core.async.t16992(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
return (function (p1__16995_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16995_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16996_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16996_SHARP_,port], null));
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
var G__16997 = (i + (1));
i = G__16997;
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
var alts_BANG___delegate = function (ports,p__16998){
var map__17000 = p__16998;
var map__17000__$1 = ((cljs.core.seq_QMARK_.call(null,map__17000))?cljs.core.apply.call(null,cljs.core.hash_map,map__17000):map__17000);
var opts = map__17000__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16998 = null;
if (arguments.length > 1) {
var G__17001__i = 0, G__17001__a = new Array(arguments.length -  1);
while (G__17001__i < G__17001__a.length) {G__17001__a[G__17001__i] = arguments[G__17001__i + 1]; ++G__17001__i;}
  p__16998 = new cljs.core.IndexedSeq(G__17001__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__16998);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17002){
var ports = cljs.core.first(arglist__17002);
var p__16998 = cljs.core.rest(arglist__17002);
return alts_BANG___delegate(ports,p__16998);
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
var c__6777__auto___17097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___17097){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___17097){
return (function (state_17073){
var state_val_17074 = (state_17073[(1)]);
if((state_val_17074 === (7))){
var inst_17069 = (state_17073[(2)]);
var state_17073__$1 = state_17073;
var statearr_17075_17098 = state_17073__$1;
(statearr_17075_17098[(2)] = inst_17069);

(statearr_17075_17098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (1))){
var state_17073__$1 = state_17073;
var statearr_17076_17099 = state_17073__$1;
(statearr_17076_17099[(2)] = null);

(statearr_17076_17099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (4))){
var inst_17052 = (state_17073[(7)]);
var inst_17052__$1 = (state_17073[(2)]);
var inst_17053 = (inst_17052__$1 == null);
var state_17073__$1 = (function (){var statearr_17077 = state_17073;
(statearr_17077[(7)] = inst_17052__$1);

return statearr_17077;
})();
if(cljs.core.truth_(inst_17053)){
var statearr_17078_17100 = state_17073__$1;
(statearr_17078_17100[(1)] = (5));

} else {
var statearr_17079_17101 = state_17073__$1;
(statearr_17079_17101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (13))){
var state_17073__$1 = state_17073;
var statearr_17080_17102 = state_17073__$1;
(statearr_17080_17102[(2)] = null);

(statearr_17080_17102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (6))){
var inst_17052 = (state_17073[(7)]);
var state_17073__$1 = state_17073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17073__$1,(11),to,inst_17052);
} else {
if((state_val_17074 === (3))){
var inst_17071 = (state_17073[(2)]);
var state_17073__$1 = state_17073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17073__$1,inst_17071);
} else {
if((state_val_17074 === (12))){
var state_17073__$1 = state_17073;
var statearr_17081_17103 = state_17073__$1;
(statearr_17081_17103[(2)] = null);

(statearr_17081_17103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (2))){
var state_17073__$1 = state_17073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17073__$1,(4),from);
} else {
if((state_val_17074 === (11))){
var inst_17062 = (state_17073[(2)]);
var state_17073__$1 = state_17073;
if(cljs.core.truth_(inst_17062)){
var statearr_17082_17104 = state_17073__$1;
(statearr_17082_17104[(1)] = (12));

} else {
var statearr_17083_17105 = state_17073__$1;
(statearr_17083_17105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (9))){
var state_17073__$1 = state_17073;
var statearr_17084_17106 = state_17073__$1;
(statearr_17084_17106[(2)] = null);

(statearr_17084_17106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (5))){
var state_17073__$1 = state_17073;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17085_17107 = state_17073__$1;
(statearr_17085_17107[(1)] = (8));

} else {
var statearr_17086_17108 = state_17073__$1;
(statearr_17086_17108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (14))){
var inst_17067 = (state_17073[(2)]);
var state_17073__$1 = state_17073;
var statearr_17087_17109 = state_17073__$1;
(statearr_17087_17109[(2)] = inst_17067);

(statearr_17087_17109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (10))){
var inst_17059 = (state_17073[(2)]);
var state_17073__$1 = state_17073;
var statearr_17088_17110 = state_17073__$1;
(statearr_17088_17110[(2)] = inst_17059);

(statearr_17088_17110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (8))){
var inst_17056 = cljs.core.async.close_BANG_.call(null,to);
var state_17073__$1 = state_17073;
var statearr_17089_17111 = state_17073__$1;
(statearr_17089_17111[(2)] = inst_17056);

(statearr_17089_17111[(1)] = (10));


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
});})(c__6777__auto___17097))
;
return ((function (switch__6721__auto__,c__6777__auto___17097){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17093 = [null,null,null,null,null,null,null,null];
(statearr_17093[(0)] = state_machine__6722__auto__);

(statearr_17093[(1)] = (1));

return statearr_17093;
});
var state_machine__6722__auto____1 = (function (state_17073){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17094){if((e17094 instanceof Object)){
var ex__6725__auto__ = e17094;
var statearr_17095_17112 = state_17073;
(statearr_17095_17112[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17113 = state_17073;
state_17073 = G__17113;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17073){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___17097))
})();
var state__6779__auto__ = (function (){var statearr_17096 = f__6778__auto__.call(null);
(statearr_17096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17097);

return statearr_17096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___17097))
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
return (function (p__17297){
var vec__17298 = p__17297;
var v = cljs.core.nth.call(null,vec__17298,(0),null);
var p = cljs.core.nth.call(null,vec__17298,(1),null);
var job = vec__17298;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6777__auto___17480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___17480,res,vec__17298,v,p,job,jobs,results){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___17480,res,vec__17298,v,p,job,jobs,results){
return (function (state_17303){
var state_val_17304 = (state_17303[(1)]);
if((state_val_17304 === (2))){
var inst_17300 = (state_17303[(2)]);
var inst_17301 = cljs.core.async.close_BANG_.call(null,res);
var state_17303__$1 = (function (){var statearr_17305 = state_17303;
(statearr_17305[(7)] = inst_17300);

return statearr_17305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17303__$1,inst_17301);
} else {
if((state_val_17304 === (1))){
var state_17303__$1 = state_17303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17303__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6777__auto___17480,res,vec__17298,v,p,job,jobs,results))
;
return ((function (switch__6721__auto__,c__6777__auto___17480,res,vec__17298,v,p,job,jobs,results){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17309 = [null,null,null,null,null,null,null,null];
(statearr_17309[(0)] = state_machine__6722__auto__);

(statearr_17309[(1)] = (1));

return statearr_17309;
});
var state_machine__6722__auto____1 = (function (state_17303){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17310){if((e17310 instanceof Object)){
var ex__6725__auto__ = e17310;
var statearr_17311_17481 = state_17303;
(statearr_17311_17481[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17482 = state_17303;
state_17303 = G__17482;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17303){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___17480,res,vec__17298,v,p,job,jobs,results))
})();
var state__6779__auto__ = (function (){var statearr_17312 = f__6778__auto__.call(null);
(statearr_17312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17480);

return statearr_17312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___17480,res,vec__17298,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17313){
var vec__17314 = p__17313;
var v = cljs.core.nth.call(null,vec__17314,(0),null);
var p = cljs.core.nth.call(null,vec__17314,(1),null);
var job = vec__17314;
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
var n__4686__auto___17483 = n;
var __17484 = (0);
while(true){
if((__17484 < n__4686__auto___17483)){
var G__17315_17485 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17315_17485) {
case "async":
var c__6777__auto___17487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17484,c__6777__auto___17487,G__17315_17485,n__4686__auto___17483,jobs,results,process,async){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (__17484,c__6777__auto___17487,G__17315_17485,n__4686__auto___17483,jobs,results,process,async){
return (function (state_17328){
var state_val_17329 = (state_17328[(1)]);
if((state_val_17329 === (7))){
var inst_17324 = (state_17328[(2)]);
var state_17328__$1 = state_17328;
var statearr_17330_17488 = state_17328__$1;
(statearr_17330_17488[(2)] = inst_17324);

(statearr_17330_17488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17329 === (6))){
var state_17328__$1 = state_17328;
var statearr_17331_17489 = state_17328__$1;
(statearr_17331_17489[(2)] = null);

(statearr_17331_17489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17329 === (5))){
var state_17328__$1 = state_17328;
var statearr_17332_17490 = state_17328__$1;
(statearr_17332_17490[(2)] = null);

(statearr_17332_17490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17329 === (4))){
var inst_17318 = (state_17328[(2)]);
var inst_17319 = async.call(null,inst_17318);
var state_17328__$1 = state_17328;
if(cljs.core.truth_(inst_17319)){
var statearr_17333_17491 = state_17328__$1;
(statearr_17333_17491[(1)] = (5));

} else {
var statearr_17334_17492 = state_17328__$1;
(statearr_17334_17492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17329 === (3))){
var inst_17326 = (state_17328[(2)]);
var state_17328__$1 = state_17328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17328__$1,inst_17326);
} else {
if((state_val_17329 === (2))){
var state_17328__$1 = state_17328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17328__$1,(4),jobs);
} else {
if((state_val_17329 === (1))){
var state_17328__$1 = state_17328;
var statearr_17335_17493 = state_17328__$1;
(statearr_17335_17493[(2)] = null);

(statearr_17335_17493[(1)] = (2));


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
});})(__17484,c__6777__auto___17487,G__17315_17485,n__4686__auto___17483,jobs,results,process,async))
;
return ((function (__17484,switch__6721__auto__,c__6777__auto___17487,G__17315_17485,n__4686__auto___17483,jobs,results,process,async){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17339 = [null,null,null,null,null,null,null];
(statearr_17339[(0)] = state_machine__6722__auto__);

(statearr_17339[(1)] = (1));

return statearr_17339;
});
var state_machine__6722__auto____1 = (function (state_17328){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17340){if((e17340 instanceof Object)){
var ex__6725__auto__ = e17340;
var statearr_17341_17494 = state_17328;
(statearr_17341_17494[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17495 = state_17328;
state_17328 = G__17495;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17328){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(__17484,switch__6721__auto__,c__6777__auto___17487,G__17315_17485,n__4686__auto___17483,jobs,results,process,async))
})();
var state__6779__auto__ = (function (){var statearr_17342 = f__6778__auto__.call(null);
(statearr_17342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17487);

return statearr_17342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(__17484,c__6777__auto___17487,G__17315_17485,n__4686__auto___17483,jobs,results,process,async))
);


break;
case "compute":
var c__6777__auto___17496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17484,c__6777__auto___17496,G__17315_17485,n__4686__auto___17483,jobs,results,process,async){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (__17484,c__6777__auto___17496,G__17315_17485,n__4686__auto___17483,jobs,results,process,async){
return (function (state_17355){
var state_val_17356 = (state_17355[(1)]);
if((state_val_17356 === (7))){
var inst_17351 = (state_17355[(2)]);
var state_17355__$1 = state_17355;
var statearr_17357_17497 = state_17355__$1;
(statearr_17357_17497[(2)] = inst_17351);

(statearr_17357_17497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (6))){
var state_17355__$1 = state_17355;
var statearr_17358_17498 = state_17355__$1;
(statearr_17358_17498[(2)] = null);

(statearr_17358_17498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (5))){
var state_17355__$1 = state_17355;
var statearr_17359_17499 = state_17355__$1;
(statearr_17359_17499[(2)] = null);

(statearr_17359_17499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (4))){
var inst_17345 = (state_17355[(2)]);
var inst_17346 = process.call(null,inst_17345);
var state_17355__$1 = state_17355;
if(cljs.core.truth_(inst_17346)){
var statearr_17360_17500 = state_17355__$1;
(statearr_17360_17500[(1)] = (5));

} else {
var statearr_17361_17501 = state_17355__$1;
(statearr_17361_17501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (3))){
var inst_17353 = (state_17355[(2)]);
var state_17355__$1 = state_17355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17355__$1,inst_17353);
} else {
if((state_val_17356 === (2))){
var state_17355__$1 = state_17355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17355__$1,(4),jobs);
} else {
if((state_val_17356 === (1))){
var state_17355__$1 = state_17355;
var statearr_17362_17502 = state_17355__$1;
(statearr_17362_17502[(2)] = null);

(statearr_17362_17502[(1)] = (2));


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
});})(__17484,c__6777__auto___17496,G__17315_17485,n__4686__auto___17483,jobs,results,process,async))
;
return ((function (__17484,switch__6721__auto__,c__6777__auto___17496,G__17315_17485,n__4686__auto___17483,jobs,results,process,async){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17366 = [null,null,null,null,null,null,null];
(statearr_17366[(0)] = state_machine__6722__auto__);

(statearr_17366[(1)] = (1));

return statearr_17366;
});
var state_machine__6722__auto____1 = (function (state_17355){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17367){if((e17367 instanceof Object)){
var ex__6725__auto__ = e17367;
var statearr_17368_17503 = state_17355;
(statearr_17368_17503[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17504 = state_17355;
state_17355 = G__17504;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17355){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(__17484,switch__6721__auto__,c__6777__auto___17496,G__17315_17485,n__4686__auto___17483,jobs,results,process,async))
})();
var state__6779__auto__ = (function (){var statearr_17369 = f__6778__auto__.call(null);
(statearr_17369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17496);

return statearr_17369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(__17484,c__6777__auto___17496,G__17315_17485,n__4686__auto___17483,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17505 = (__17484 + (1));
__17484 = G__17505;
continue;
} else {
}
break;
}

var c__6777__auto___17506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___17506,jobs,results,process,async){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___17506,jobs,results,process,async){
return (function (state_17391){
var state_val_17392 = (state_17391[(1)]);
if((state_val_17392 === (9))){
var inst_17384 = (state_17391[(2)]);
var state_17391__$1 = (function (){var statearr_17393 = state_17391;
(statearr_17393[(7)] = inst_17384);

return statearr_17393;
})();
var statearr_17394_17507 = state_17391__$1;
(statearr_17394_17507[(2)] = null);

(statearr_17394_17507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17392 === (8))){
var inst_17377 = (state_17391[(8)]);
var inst_17382 = (state_17391[(2)]);
var state_17391__$1 = (function (){var statearr_17395 = state_17391;
(statearr_17395[(9)] = inst_17382);

return statearr_17395;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17391__$1,(9),results,inst_17377);
} else {
if((state_val_17392 === (7))){
var inst_17387 = (state_17391[(2)]);
var state_17391__$1 = state_17391;
var statearr_17396_17508 = state_17391__$1;
(statearr_17396_17508[(2)] = inst_17387);

(statearr_17396_17508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17392 === (6))){
var inst_17377 = (state_17391[(8)]);
var inst_17372 = (state_17391[(10)]);
var inst_17377__$1 = cljs.core.async.chan.call(null,(1));
var inst_17378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17379 = [inst_17372,inst_17377__$1];
var inst_17380 = (new cljs.core.PersistentVector(null,2,(5),inst_17378,inst_17379,null));
var state_17391__$1 = (function (){var statearr_17397 = state_17391;
(statearr_17397[(8)] = inst_17377__$1);

return statearr_17397;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17391__$1,(8),jobs,inst_17380);
} else {
if((state_val_17392 === (5))){
var inst_17375 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17391__$1 = state_17391;
var statearr_17398_17509 = state_17391__$1;
(statearr_17398_17509[(2)] = inst_17375);

(statearr_17398_17509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17392 === (4))){
var inst_17372 = (state_17391[(10)]);
var inst_17372__$1 = (state_17391[(2)]);
var inst_17373 = (inst_17372__$1 == null);
var state_17391__$1 = (function (){var statearr_17399 = state_17391;
(statearr_17399[(10)] = inst_17372__$1);

return statearr_17399;
})();
if(cljs.core.truth_(inst_17373)){
var statearr_17400_17510 = state_17391__$1;
(statearr_17400_17510[(1)] = (5));

} else {
var statearr_17401_17511 = state_17391__$1;
(statearr_17401_17511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17392 === (3))){
var inst_17389 = (state_17391[(2)]);
var state_17391__$1 = state_17391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17391__$1,inst_17389);
} else {
if((state_val_17392 === (2))){
var state_17391__$1 = state_17391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17391__$1,(4),from);
} else {
if((state_val_17392 === (1))){
var state_17391__$1 = state_17391;
var statearr_17402_17512 = state_17391__$1;
(statearr_17402_17512[(2)] = null);

(statearr_17402_17512[(1)] = (2));


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
});})(c__6777__auto___17506,jobs,results,process,async))
;
return ((function (switch__6721__auto__,c__6777__auto___17506,jobs,results,process,async){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17406[(0)] = state_machine__6722__auto__);

(statearr_17406[(1)] = (1));

return statearr_17406;
});
var state_machine__6722__auto____1 = (function (state_17391){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17407){if((e17407 instanceof Object)){
var ex__6725__auto__ = e17407;
var statearr_17408_17513 = state_17391;
(statearr_17408_17513[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17514 = state_17391;
state_17391 = G__17514;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17391){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___17506,jobs,results,process,async))
})();
var state__6779__auto__ = (function (){var statearr_17409 = f__6778__auto__.call(null);
(statearr_17409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17506);

return statearr_17409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___17506,jobs,results,process,async))
);


var c__6777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto__,jobs,results,process,async){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto__,jobs,results,process,async){
return (function (state_17447){
var state_val_17448 = (state_17447[(1)]);
if((state_val_17448 === (7))){
var inst_17443 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
var statearr_17449_17515 = state_17447__$1;
(statearr_17449_17515[(2)] = inst_17443);

(statearr_17449_17515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (20))){
var state_17447__$1 = state_17447;
var statearr_17450_17516 = state_17447__$1;
(statearr_17450_17516[(2)] = null);

(statearr_17450_17516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (1))){
var state_17447__$1 = state_17447;
var statearr_17451_17517 = state_17447__$1;
(statearr_17451_17517[(2)] = null);

(statearr_17451_17517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (4))){
var inst_17412 = (state_17447[(7)]);
var inst_17412__$1 = (state_17447[(2)]);
var inst_17413 = (inst_17412__$1 == null);
var state_17447__$1 = (function (){var statearr_17452 = state_17447;
(statearr_17452[(7)] = inst_17412__$1);

return statearr_17452;
})();
if(cljs.core.truth_(inst_17413)){
var statearr_17453_17518 = state_17447__$1;
(statearr_17453_17518[(1)] = (5));

} else {
var statearr_17454_17519 = state_17447__$1;
(statearr_17454_17519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (15))){
var inst_17425 = (state_17447[(8)]);
var state_17447__$1 = state_17447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17447__$1,(18),to,inst_17425);
} else {
if((state_val_17448 === (21))){
var inst_17438 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
var statearr_17455_17520 = state_17447__$1;
(statearr_17455_17520[(2)] = inst_17438);

(statearr_17455_17520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (13))){
var inst_17440 = (state_17447[(2)]);
var state_17447__$1 = (function (){var statearr_17456 = state_17447;
(statearr_17456[(9)] = inst_17440);

return statearr_17456;
})();
var statearr_17457_17521 = state_17447__$1;
(statearr_17457_17521[(2)] = null);

(statearr_17457_17521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (6))){
var inst_17412 = (state_17447[(7)]);
var state_17447__$1 = state_17447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17447__$1,(11),inst_17412);
} else {
if((state_val_17448 === (17))){
var inst_17433 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
if(cljs.core.truth_(inst_17433)){
var statearr_17458_17522 = state_17447__$1;
(statearr_17458_17522[(1)] = (19));

} else {
var statearr_17459_17523 = state_17447__$1;
(statearr_17459_17523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (3))){
var inst_17445 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17447__$1,inst_17445);
} else {
if((state_val_17448 === (12))){
var inst_17422 = (state_17447[(10)]);
var state_17447__$1 = state_17447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17447__$1,(14),inst_17422);
} else {
if((state_val_17448 === (2))){
var state_17447__$1 = state_17447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17447__$1,(4),results);
} else {
if((state_val_17448 === (19))){
var state_17447__$1 = state_17447;
var statearr_17460_17524 = state_17447__$1;
(statearr_17460_17524[(2)] = null);

(statearr_17460_17524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (11))){
var inst_17422 = (state_17447[(2)]);
var state_17447__$1 = (function (){var statearr_17461 = state_17447;
(statearr_17461[(10)] = inst_17422);

return statearr_17461;
})();
var statearr_17462_17525 = state_17447__$1;
(statearr_17462_17525[(2)] = null);

(statearr_17462_17525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (9))){
var state_17447__$1 = state_17447;
var statearr_17463_17526 = state_17447__$1;
(statearr_17463_17526[(2)] = null);

(statearr_17463_17526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (5))){
var state_17447__$1 = state_17447;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17464_17527 = state_17447__$1;
(statearr_17464_17527[(1)] = (8));

} else {
var statearr_17465_17528 = state_17447__$1;
(statearr_17465_17528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (14))){
var inst_17427 = (state_17447[(11)]);
var inst_17425 = (state_17447[(8)]);
var inst_17425__$1 = (state_17447[(2)]);
var inst_17426 = (inst_17425__$1 == null);
var inst_17427__$1 = cljs.core.not.call(null,inst_17426);
var state_17447__$1 = (function (){var statearr_17466 = state_17447;
(statearr_17466[(11)] = inst_17427__$1);

(statearr_17466[(8)] = inst_17425__$1);

return statearr_17466;
})();
if(inst_17427__$1){
var statearr_17467_17529 = state_17447__$1;
(statearr_17467_17529[(1)] = (15));

} else {
var statearr_17468_17530 = state_17447__$1;
(statearr_17468_17530[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (16))){
var inst_17427 = (state_17447[(11)]);
var state_17447__$1 = state_17447;
var statearr_17469_17531 = state_17447__$1;
(statearr_17469_17531[(2)] = inst_17427);

(statearr_17469_17531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (10))){
var inst_17419 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
var statearr_17470_17532 = state_17447__$1;
(statearr_17470_17532[(2)] = inst_17419);

(statearr_17470_17532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (18))){
var inst_17430 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
var statearr_17471_17533 = state_17447__$1;
(statearr_17471_17533[(2)] = inst_17430);

(statearr_17471_17533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (8))){
var inst_17416 = cljs.core.async.close_BANG_.call(null,to);
var state_17447__$1 = state_17447;
var statearr_17472_17534 = state_17447__$1;
(statearr_17472_17534[(2)] = inst_17416);

(statearr_17472_17534[(1)] = (10));


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
var statearr_17476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17476[(0)] = state_machine__6722__auto__);

(statearr_17476[(1)] = (1));

return statearr_17476;
});
var state_machine__6722__auto____1 = (function (state_17447){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17477){if((e17477 instanceof Object)){
var ex__6725__auto__ = e17477;
var statearr_17478_17535 = state_17447;
(statearr_17478_17535[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17536 = state_17447;
state_17447 = G__17536;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17447){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__,jobs,results,process,async))
})();
var state__6779__auto__ = (function (){var statearr_17479 = f__6778__auto__.call(null);
(statearr_17479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_17479;
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
var c__6777__auto___17637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___17637,tc,fc){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___17637,tc,fc){
return (function (state_17612){
var state_val_17613 = (state_17612[(1)]);
if((state_val_17613 === (7))){
var inst_17608 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17614_17638 = state_17612__$1;
(statearr_17614_17638[(2)] = inst_17608);

(statearr_17614_17638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (1))){
var state_17612__$1 = state_17612;
var statearr_17615_17639 = state_17612__$1;
(statearr_17615_17639[(2)] = null);

(statearr_17615_17639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (4))){
var inst_17589 = (state_17612[(7)]);
var inst_17589__$1 = (state_17612[(2)]);
var inst_17590 = (inst_17589__$1 == null);
var state_17612__$1 = (function (){var statearr_17616 = state_17612;
(statearr_17616[(7)] = inst_17589__$1);

return statearr_17616;
})();
if(cljs.core.truth_(inst_17590)){
var statearr_17617_17640 = state_17612__$1;
(statearr_17617_17640[(1)] = (5));

} else {
var statearr_17618_17641 = state_17612__$1;
(statearr_17618_17641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (13))){
var state_17612__$1 = state_17612;
var statearr_17619_17642 = state_17612__$1;
(statearr_17619_17642[(2)] = null);

(statearr_17619_17642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (6))){
var inst_17589 = (state_17612[(7)]);
var inst_17595 = p.call(null,inst_17589);
var state_17612__$1 = state_17612;
if(cljs.core.truth_(inst_17595)){
var statearr_17620_17643 = state_17612__$1;
(statearr_17620_17643[(1)] = (9));

} else {
var statearr_17621_17644 = state_17612__$1;
(statearr_17621_17644[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (3))){
var inst_17610 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17612__$1,inst_17610);
} else {
if((state_val_17613 === (12))){
var state_17612__$1 = state_17612;
var statearr_17622_17645 = state_17612__$1;
(statearr_17622_17645[(2)] = null);

(statearr_17622_17645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (2))){
var state_17612__$1 = state_17612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17612__$1,(4),ch);
} else {
if((state_val_17613 === (11))){
var inst_17589 = (state_17612[(7)]);
var inst_17599 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17612__$1,(8),inst_17599,inst_17589);
} else {
if((state_val_17613 === (9))){
var state_17612__$1 = state_17612;
var statearr_17623_17646 = state_17612__$1;
(statearr_17623_17646[(2)] = tc);

(statearr_17623_17646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (5))){
var inst_17592 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17593 = cljs.core.async.close_BANG_.call(null,fc);
var state_17612__$1 = (function (){var statearr_17624 = state_17612;
(statearr_17624[(8)] = inst_17592);

return statearr_17624;
})();
var statearr_17625_17647 = state_17612__$1;
(statearr_17625_17647[(2)] = inst_17593);

(statearr_17625_17647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (14))){
var inst_17606 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17626_17648 = state_17612__$1;
(statearr_17626_17648[(2)] = inst_17606);

(statearr_17626_17648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (10))){
var state_17612__$1 = state_17612;
var statearr_17627_17649 = state_17612__$1;
(statearr_17627_17649[(2)] = fc);

(statearr_17627_17649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (8))){
var inst_17601 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
if(cljs.core.truth_(inst_17601)){
var statearr_17628_17650 = state_17612__$1;
(statearr_17628_17650[(1)] = (12));

} else {
var statearr_17629_17651 = state_17612__$1;
(statearr_17629_17651[(1)] = (13));

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
});})(c__6777__auto___17637,tc,fc))
;
return ((function (switch__6721__auto__,c__6777__auto___17637,tc,fc){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17633 = [null,null,null,null,null,null,null,null,null];
(statearr_17633[(0)] = state_machine__6722__auto__);

(statearr_17633[(1)] = (1));

return statearr_17633;
});
var state_machine__6722__auto____1 = (function (state_17612){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17634){if((e17634 instanceof Object)){
var ex__6725__auto__ = e17634;
var statearr_17635_17652 = state_17612;
(statearr_17635_17652[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17653 = state_17612;
state_17612 = G__17653;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17612){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___17637,tc,fc))
})();
var state__6779__auto__ = (function (){var statearr_17636 = f__6778__auto__.call(null);
(statearr_17636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17637);

return statearr_17636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___17637,tc,fc))
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
return (function (state_17700){
var state_val_17701 = (state_17700[(1)]);
if((state_val_17701 === (7))){
var inst_17696 = (state_17700[(2)]);
var state_17700__$1 = state_17700;
var statearr_17702_17718 = state_17700__$1;
(statearr_17702_17718[(2)] = inst_17696);

(statearr_17702_17718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17701 === (6))){
var inst_17689 = (state_17700[(7)]);
var inst_17686 = (state_17700[(8)]);
var inst_17693 = f.call(null,inst_17686,inst_17689);
var inst_17686__$1 = inst_17693;
var state_17700__$1 = (function (){var statearr_17703 = state_17700;
(statearr_17703[(8)] = inst_17686__$1);

return statearr_17703;
})();
var statearr_17704_17719 = state_17700__$1;
(statearr_17704_17719[(2)] = null);

(statearr_17704_17719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17701 === (5))){
var inst_17686 = (state_17700[(8)]);
var state_17700__$1 = state_17700;
var statearr_17705_17720 = state_17700__$1;
(statearr_17705_17720[(2)] = inst_17686);

(statearr_17705_17720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17701 === (4))){
var inst_17689 = (state_17700[(7)]);
var inst_17689__$1 = (state_17700[(2)]);
var inst_17690 = (inst_17689__$1 == null);
var state_17700__$1 = (function (){var statearr_17706 = state_17700;
(statearr_17706[(7)] = inst_17689__$1);

return statearr_17706;
})();
if(cljs.core.truth_(inst_17690)){
var statearr_17707_17721 = state_17700__$1;
(statearr_17707_17721[(1)] = (5));

} else {
var statearr_17708_17722 = state_17700__$1;
(statearr_17708_17722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17701 === (3))){
var inst_17698 = (state_17700[(2)]);
var state_17700__$1 = state_17700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17700__$1,inst_17698);
} else {
if((state_val_17701 === (2))){
var state_17700__$1 = state_17700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17700__$1,(4),ch);
} else {
if((state_val_17701 === (1))){
var inst_17686 = init;
var state_17700__$1 = (function (){var statearr_17709 = state_17700;
(statearr_17709[(8)] = inst_17686);

return statearr_17709;
})();
var statearr_17710_17723 = state_17700__$1;
(statearr_17710_17723[(2)] = null);

(statearr_17710_17723[(1)] = (2));


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
var statearr_17714 = [null,null,null,null,null,null,null,null,null];
(statearr_17714[(0)] = state_machine__6722__auto__);

(statearr_17714[(1)] = (1));

return statearr_17714;
});
var state_machine__6722__auto____1 = (function (state_17700){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17715){if((e17715 instanceof Object)){
var ex__6725__auto__ = e17715;
var statearr_17716_17724 = state_17700;
(statearr_17716_17724[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17725 = state_17700;
state_17700 = G__17725;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17700){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__))
})();
var state__6779__auto__ = (function (){var statearr_17717 = f__6778__auto__.call(null);
(statearr_17717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_17717;
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
return (function (state_17799){
var state_val_17800 = (state_17799[(1)]);
if((state_val_17800 === (7))){
var inst_17781 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
var statearr_17801_17824 = state_17799__$1;
(statearr_17801_17824[(2)] = inst_17781);

(statearr_17801_17824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (1))){
var inst_17775 = cljs.core.seq.call(null,coll);
var inst_17776 = inst_17775;
var state_17799__$1 = (function (){var statearr_17802 = state_17799;
(statearr_17802[(7)] = inst_17776);

return statearr_17802;
})();
var statearr_17803_17825 = state_17799__$1;
(statearr_17803_17825[(2)] = null);

(statearr_17803_17825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (4))){
var inst_17776 = (state_17799[(7)]);
var inst_17779 = cljs.core.first.call(null,inst_17776);
var state_17799__$1 = state_17799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17799__$1,(7),ch,inst_17779);
} else {
if((state_val_17800 === (13))){
var inst_17793 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
var statearr_17804_17826 = state_17799__$1;
(statearr_17804_17826[(2)] = inst_17793);

(statearr_17804_17826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (6))){
var inst_17784 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
if(cljs.core.truth_(inst_17784)){
var statearr_17805_17827 = state_17799__$1;
(statearr_17805_17827[(1)] = (8));

} else {
var statearr_17806_17828 = state_17799__$1;
(statearr_17806_17828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (3))){
var inst_17797 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17799__$1,inst_17797);
} else {
if((state_val_17800 === (12))){
var state_17799__$1 = state_17799;
var statearr_17807_17829 = state_17799__$1;
(statearr_17807_17829[(2)] = null);

(statearr_17807_17829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (2))){
var inst_17776 = (state_17799[(7)]);
var state_17799__$1 = state_17799;
if(cljs.core.truth_(inst_17776)){
var statearr_17808_17830 = state_17799__$1;
(statearr_17808_17830[(1)] = (4));

} else {
var statearr_17809_17831 = state_17799__$1;
(statearr_17809_17831[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (11))){
var inst_17790 = cljs.core.async.close_BANG_.call(null,ch);
var state_17799__$1 = state_17799;
var statearr_17810_17832 = state_17799__$1;
(statearr_17810_17832[(2)] = inst_17790);

(statearr_17810_17832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (9))){
var state_17799__$1 = state_17799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17811_17833 = state_17799__$1;
(statearr_17811_17833[(1)] = (11));

} else {
var statearr_17812_17834 = state_17799__$1;
(statearr_17812_17834[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (5))){
var inst_17776 = (state_17799[(7)]);
var state_17799__$1 = state_17799;
var statearr_17813_17835 = state_17799__$1;
(statearr_17813_17835[(2)] = inst_17776);

(statearr_17813_17835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (10))){
var inst_17795 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
var statearr_17814_17836 = state_17799__$1;
(statearr_17814_17836[(2)] = inst_17795);

(statearr_17814_17836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (8))){
var inst_17776 = (state_17799[(7)]);
var inst_17786 = cljs.core.next.call(null,inst_17776);
var inst_17776__$1 = inst_17786;
var state_17799__$1 = (function (){var statearr_17815 = state_17799;
(statearr_17815[(7)] = inst_17776__$1);

return statearr_17815;
})();
var statearr_17816_17837 = state_17799__$1;
(statearr_17816_17837[(2)] = null);

(statearr_17816_17837[(1)] = (2));


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
var statearr_17820 = [null,null,null,null,null,null,null,null];
(statearr_17820[(0)] = state_machine__6722__auto__);

(statearr_17820[(1)] = (1));

return statearr_17820;
});
var state_machine__6722__auto____1 = (function (state_17799){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17821){if((e17821 instanceof Object)){
var ex__6725__auto__ = e17821;
var statearr_17822_17838 = state_17799;
(statearr_17822_17838[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17839 = state_17799;
state_17799 = G__17839;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17799){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__))
})();
var state__6779__auto__ = (function (){var statearr_17823 = f__6778__auto__.call(null);
(statearr_17823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_17823;
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

cljs.core.async.Mux = (function (){var obj17841 = {};
return obj17841;
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


cljs.core.async.Mult = (function (){var obj17843 = {};
return obj17843;
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
if(typeof cljs.core.async.t18065 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18065 = (function (cs,ch,mult,meta18066){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18066 = meta18066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18065.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18065.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18065.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18065.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t18065.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18067){
var self__ = this;
var _18067__$1 = this;
return self__.meta18066;
});})(cs))
;

cljs.core.async.t18065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18067,meta18066__$1){
var self__ = this;
var _18067__$1 = this;
return (new cljs.core.async.t18065(self__.cs,self__.ch,self__.mult,meta18066__$1));
});})(cs))
;

cljs.core.async.t18065.cljs$lang$type = true;

cljs.core.async.t18065.cljs$lang$ctorStr = "cljs.core.async/t18065";

cljs.core.async.t18065.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t18065");
});})(cs))
;

cljs.core.async.__GT_t18065 = ((function (cs){
return (function __GT_t18065(cs__$1,ch__$1,mult__$1,meta18066){
return (new cljs.core.async.t18065(cs__$1,ch__$1,mult__$1,meta18066));
});})(cs))
;

}

return (new cljs.core.async.t18065(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var c__6777__auto___18286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___18286,cs,m,dchan,dctr,done){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___18286,cs,m,dchan,dctr,done){
return (function (state_18198){
var state_val_18199 = (state_18198[(1)]);
if((state_val_18199 === (7))){
var inst_18194 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18200_18287 = state_18198__$1;
(statearr_18200_18287[(2)] = inst_18194);

(statearr_18200_18287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (20))){
var inst_18099 = (state_18198[(7)]);
var inst_18109 = cljs.core.first.call(null,inst_18099);
var inst_18110 = cljs.core.nth.call(null,inst_18109,(0),null);
var inst_18111 = cljs.core.nth.call(null,inst_18109,(1),null);
var state_18198__$1 = (function (){var statearr_18201 = state_18198;
(statearr_18201[(8)] = inst_18110);

return statearr_18201;
})();
if(cljs.core.truth_(inst_18111)){
var statearr_18202_18288 = state_18198__$1;
(statearr_18202_18288[(1)] = (22));

} else {
var statearr_18203_18289 = state_18198__$1;
(statearr_18203_18289[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (27))){
var inst_18139 = (state_18198[(9)]);
var inst_18141 = (state_18198[(10)]);
var inst_18146 = (state_18198[(11)]);
var inst_18070 = (state_18198[(12)]);
var inst_18146__$1 = cljs.core._nth.call(null,inst_18139,inst_18141);
var inst_18147 = cljs.core.async.put_BANG_.call(null,inst_18146__$1,inst_18070,done);
var state_18198__$1 = (function (){var statearr_18204 = state_18198;
(statearr_18204[(11)] = inst_18146__$1);

return statearr_18204;
})();
if(cljs.core.truth_(inst_18147)){
var statearr_18205_18290 = state_18198__$1;
(statearr_18205_18290[(1)] = (30));

} else {
var statearr_18206_18291 = state_18198__$1;
(statearr_18206_18291[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (1))){
var state_18198__$1 = state_18198;
var statearr_18207_18292 = state_18198__$1;
(statearr_18207_18292[(2)] = null);

(statearr_18207_18292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (24))){
var inst_18099 = (state_18198[(7)]);
var inst_18116 = (state_18198[(2)]);
var inst_18117 = cljs.core.next.call(null,inst_18099);
var inst_18079 = inst_18117;
var inst_18080 = null;
var inst_18081 = (0);
var inst_18082 = (0);
var state_18198__$1 = (function (){var statearr_18208 = state_18198;
(statearr_18208[(13)] = inst_18116);

(statearr_18208[(14)] = inst_18080);

(statearr_18208[(15)] = inst_18081);

(statearr_18208[(16)] = inst_18082);

(statearr_18208[(17)] = inst_18079);

return statearr_18208;
})();
var statearr_18209_18293 = state_18198__$1;
(statearr_18209_18293[(2)] = null);

(statearr_18209_18293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (39))){
var state_18198__$1 = state_18198;
var statearr_18213_18294 = state_18198__$1;
(statearr_18213_18294[(2)] = null);

(statearr_18213_18294[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (4))){
var inst_18070 = (state_18198[(12)]);
var inst_18070__$1 = (state_18198[(2)]);
var inst_18071 = (inst_18070__$1 == null);
var state_18198__$1 = (function (){var statearr_18214 = state_18198;
(statearr_18214[(12)] = inst_18070__$1);

return statearr_18214;
})();
if(cljs.core.truth_(inst_18071)){
var statearr_18215_18295 = state_18198__$1;
(statearr_18215_18295[(1)] = (5));

} else {
var statearr_18216_18296 = state_18198__$1;
(statearr_18216_18296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (15))){
var inst_18080 = (state_18198[(14)]);
var inst_18081 = (state_18198[(15)]);
var inst_18082 = (state_18198[(16)]);
var inst_18079 = (state_18198[(17)]);
var inst_18095 = (state_18198[(2)]);
var inst_18096 = (inst_18082 + (1));
var tmp18210 = inst_18080;
var tmp18211 = inst_18081;
var tmp18212 = inst_18079;
var inst_18079__$1 = tmp18212;
var inst_18080__$1 = tmp18210;
var inst_18081__$1 = tmp18211;
var inst_18082__$1 = inst_18096;
var state_18198__$1 = (function (){var statearr_18217 = state_18198;
(statearr_18217[(14)] = inst_18080__$1);

(statearr_18217[(15)] = inst_18081__$1);

(statearr_18217[(16)] = inst_18082__$1);

(statearr_18217[(18)] = inst_18095);

(statearr_18217[(17)] = inst_18079__$1);

return statearr_18217;
})();
var statearr_18218_18297 = state_18198__$1;
(statearr_18218_18297[(2)] = null);

(statearr_18218_18297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (21))){
var inst_18120 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18222_18298 = state_18198__$1;
(statearr_18222_18298[(2)] = inst_18120);

(statearr_18222_18298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (31))){
var inst_18146 = (state_18198[(11)]);
var inst_18150 = done.call(null,null);
var inst_18151 = cljs.core.async.untap_STAR_.call(null,m,inst_18146);
var state_18198__$1 = (function (){var statearr_18223 = state_18198;
(statearr_18223[(19)] = inst_18150);

return statearr_18223;
})();
var statearr_18224_18299 = state_18198__$1;
(statearr_18224_18299[(2)] = inst_18151);

(statearr_18224_18299[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (32))){
var inst_18139 = (state_18198[(9)]);
var inst_18141 = (state_18198[(10)]);
var inst_18138 = (state_18198[(20)]);
var inst_18140 = (state_18198[(21)]);
var inst_18153 = (state_18198[(2)]);
var inst_18154 = (inst_18141 + (1));
var tmp18219 = inst_18139;
var tmp18220 = inst_18138;
var tmp18221 = inst_18140;
var inst_18138__$1 = tmp18220;
var inst_18139__$1 = tmp18219;
var inst_18140__$1 = tmp18221;
var inst_18141__$1 = inst_18154;
var state_18198__$1 = (function (){var statearr_18225 = state_18198;
(statearr_18225[(9)] = inst_18139__$1);

(statearr_18225[(10)] = inst_18141__$1);

(statearr_18225[(20)] = inst_18138__$1);

(statearr_18225[(21)] = inst_18140__$1);

(statearr_18225[(22)] = inst_18153);

return statearr_18225;
})();
var statearr_18226_18300 = state_18198__$1;
(statearr_18226_18300[(2)] = null);

(statearr_18226_18300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (40))){
var inst_18166 = (state_18198[(23)]);
var inst_18170 = done.call(null,null);
var inst_18171 = cljs.core.async.untap_STAR_.call(null,m,inst_18166);
var state_18198__$1 = (function (){var statearr_18227 = state_18198;
(statearr_18227[(24)] = inst_18170);

return statearr_18227;
})();
var statearr_18228_18301 = state_18198__$1;
(statearr_18228_18301[(2)] = inst_18171);

(statearr_18228_18301[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (33))){
var inst_18157 = (state_18198[(25)]);
var inst_18159 = cljs.core.chunked_seq_QMARK_.call(null,inst_18157);
var state_18198__$1 = state_18198;
if(inst_18159){
var statearr_18229_18302 = state_18198__$1;
(statearr_18229_18302[(1)] = (36));

} else {
var statearr_18230_18303 = state_18198__$1;
(statearr_18230_18303[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (13))){
var inst_18089 = (state_18198[(26)]);
var inst_18092 = cljs.core.async.close_BANG_.call(null,inst_18089);
var state_18198__$1 = state_18198;
var statearr_18231_18304 = state_18198__$1;
(statearr_18231_18304[(2)] = inst_18092);

(statearr_18231_18304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (22))){
var inst_18110 = (state_18198[(8)]);
var inst_18113 = cljs.core.async.close_BANG_.call(null,inst_18110);
var state_18198__$1 = state_18198;
var statearr_18232_18305 = state_18198__$1;
(statearr_18232_18305[(2)] = inst_18113);

(statearr_18232_18305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (36))){
var inst_18157 = (state_18198[(25)]);
var inst_18161 = cljs.core.chunk_first.call(null,inst_18157);
var inst_18162 = cljs.core.chunk_rest.call(null,inst_18157);
var inst_18163 = cljs.core.count.call(null,inst_18161);
var inst_18138 = inst_18162;
var inst_18139 = inst_18161;
var inst_18140 = inst_18163;
var inst_18141 = (0);
var state_18198__$1 = (function (){var statearr_18233 = state_18198;
(statearr_18233[(9)] = inst_18139);

(statearr_18233[(10)] = inst_18141);

(statearr_18233[(20)] = inst_18138);

(statearr_18233[(21)] = inst_18140);

return statearr_18233;
})();
var statearr_18234_18306 = state_18198__$1;
(statearr_18234_18306[(2)] = null);

(statearr_18234_18306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (41))){
var inst_18157 = (state_18198[(25)]);
var inst_18173 = (state_18198[(2)]);
var inst_18174 = cljs.core.next.call(null,inst_18157);
var inst_18138 = inst_18174;
var inst_18139 = null;
var inst_18140 = (0);
var inst_18141 = (0);
var state_18198__$1 = (function (){var statearr_18235 = state_18198;
(statearr_18235[(9)] = inst_18139);

(statearr_18235[(10)] = inst_18141);

(statearr_18235[(20)] = inst_18138);

(statearr_18235[(27)] = inst_18173);

(statearr_18235[(21)] = inst_18140);

return statearr_18235;
})();
var statearr_18236_18307 = state_18198__$1;
(statearr_18236_18307[(2)] = null);

(statearr_18236_18307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (43))){
var state_18198__$1 = state_18198;
var statearr_18237_18308 = state_18198__$1;
(statearr_18237_18308[(2)] = null);

(statearr_18237_18308[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (29))){
var inst_18182 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18238_18309 = state_18198__$1;
(statearr_18238_18309[(2)] = inst_18182);

(statearr_18238_18309[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (44))){
var inst_18191 = (state_18198[(2)]);
var state_18198__$1 = (function (){var statearr_18239 = state_18198;
(statearr_18239[(28)] = inst_18191);

return statearr_18239;
})();
var statearr_18240_18310 = state_18198__$1;
(statearr_18240_18310[(2)] = null);

(statearr_18240_18310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (6))){
var inst_18130 = (state_18198[(29)]);
var inst_18129 = cljs.core.deref.call(null,cs);
var inst_18130__$1 = cljs.core.keys.call(null,inst_18129);
var inst_18131 = cljs.core.count.call(null,inst_18130__$1);
var inst_18132 = cljs.core.reset_BANG_.call(null,dctr,inst_18131);
var inst_18137 = cljs.core.seq.call(null,inst_18130__$1);
var inst_18138 = inst_18137;
var inst_18139 = null;
var inst_18140 = (0);
var inst_18141 = (0);
var state_18198__$1 = (function (){var statearr_18241 = state_18198;
(statearr_18241[(9)] = inst_18139);

(statearr_18241[(10)] = inst_18141);

(statearr_18241[(30)] = inst_18132);

(statearr_18241[(20)] = inst_18138);

(statearr_18241[(29)] = inst_18130__$1);

(statearr_18241[(21)] = inst_18140);

return statearr_18241;
})();
var statearr_18242_18311 = state_18198__$1;
(statearr_18242_18311[(2)] = null);

(statearr_18242_18311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (28))){
var inst_18138 = (state_18198[(20)]);
var inst_18157 = (state_18198[(25)]);
var inst_18157__$1 = cljs.core.seq.call(null,inst_18138);
var state_18198__$1 = (function (){var statearr_18243 = state_18198;
(statearr_18243[(25)] = inst_18157__$1);

return statearr_18243;
})();
if(inst_18157__$1){
var statearr_18244_18312 = state_18198__$1;
(statearr_18244_18312[(1)] = (33));

} else {
var statearr_18245_18313 = state_18198__$1;
(statearr_18245_18313[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (25))){
var inst_18141 = (state_18198[(10)]);
var inst_18140 = (state_18198[(21)]);
var inst_18143 = (inst_18141 < inst_18140);
var inst_18144 = inst_18143;
var state_18198__$1 = state_18198;
if(cljs.core.truth_(inst_18144)){
var statearr_18246_18314 = state_18198__$1;
(statearr_18246_18314[(1)] = (27));

} else {
var statearr_18247_18315 = state_18198__$1;
(statearr_18247_18315[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (34))){
var state_18198__$1 = state_18198;
var statearr_18248_18316 = state_18198__$1;
(statearr_18248_18316[(2)] = null);

(statearr_18248_18316[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (17))){
var state_18198__$1 = state_18198;
var statearr_18249_18317 = state_18198__$1;
(statearr_18249_18317[(2)] = null);

(statearr_18249_18317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (3))){
var inst_18196 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18198__$1,inst_18196);
} else {
if((state_val_18199 === (12))){
var inst_18125 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18250_18318 = state_18198__$1;
(statearr_18250_18318[(2)] = inst_18125);

(statearr_18250_18318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (2))){
var state_18198__$1 = state_18198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18198__$1,(4),ch);
} else {
if((state_val_18199 === (23))){
var state_18198__$1 = state_18198;
var statearr_18251_18319 = state_18198__$1;
(statearr_18251_18319[(2)] = null);

(statearr_18251_18319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (35))){
var inst_18180 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18252_18320 = state_18198__$1;
(statearr_18252_18320[(2)] = inst_18180);

(statearr_18252_18320[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (19))){
var inst_18099 = (state_18198[(7)]);
var inst_18103 = cljs.core.chunk_first.call(null,inst_18099);
var inst_18104 = cljs.core.chunk_rest.call(null,inst_18099);
var inst_18105 = cljs.core.count.call(null,inst_18103);
var inst_18079 = inst_18104;
var inst_18080 = inst_18103;
var inst_18081 = inst_18105;
var inst_18082 = (0);
var state_18198__$1 = (function (){var statearr_18253 = state_18198;
(statearr_18253[(14)] = inst_18080);

(statearr_18253[(15)] = inst_18081);

(statearr_18253[(16)] = inst_18082);

(statearr_18253[(17)] = inst_18079);

return statearr_18253;
})();
var statearr_18254_18321 = state_18198__$1;
(statearr_18254_18321[(2)] = null);

(statearr_18254_18321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (11))){
var inst_18099 = (state_18198[(7)]);
var inst_18079 = (state_18198[(17)]);
var inst_18099__$1 = cljs.core.seq.call(null,inst_18079);
var state_18198__$1 = (function (){var statearr_18255 = state_18198;
(statearr_18255[(7)] = inst_18099__$1);

return statearr_18255;
})();
if(inst_18099__$1){
var statearr_18256_18322 = state_18198__$1;
(statearr_18256_18322[(1)] = (16));

} else {
var statearr_18257_18323 = state_18198__$1;
(statearr_18257_18323[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (9))){
var inst_18127 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18258_18324 = state_18198__$1;
(statearr_18258_18324[(2)] = inst_18127);

(statearr_18258_18324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (5))){
var inst_18077 = cljs.core.deref.call(null,cs);
var inst_18078 = cljs.core.seq.call(null,inst_18077);
var inst_18079 = inst_18078;
var inst_18080 = null;
var inst_18081 = (0);
var inst_18082 = (0);
var state_18198__$1 = (function (){var statearr_18259 = state_18198;
(statearr_18259[(14)] = inst_18080);

(statearr_18259[(15)] = inst_18081);

(statearr_18259[(16)] = inst_18082);

(statearr_18259[(17)] = inst_18079);

return statearr_18259;
})();
var statearr_18260_18325 = state_18198__$1;
(statearr_18260_18325[(2)] = null);

(statearr_18260_18325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (14))){
var state_18198__$1 = state_18198;
var statearr_18261_18326 = state_18198__$1;
(statearr_18261_18326[(2)] = null);

(statearr_18261_18326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (45))){
var inst_18188 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18262_18327 = state_18198__$1;
(statearr_18262_18327[(2)] = inst_18188);

(statearr_18262_18327[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (26))){
var inst_18130 = (state_18198[(29)]);
var inst_18184 = (state_18198[(2)]);
var inst_18185 = cljs.core.seq.call(null,inst_18130);
var state_18198__$1 = (function (){var statearr_18263 = state_18198;
(statearr_18263[(31)] = inst_18184);

return statearr_18263;
})();
if(inst_18185){
var statearr_18264_18328 = state_18198__$1;
(statearr_18264_18328[(1)] = (42));

} else {
var statearr_18265_18329 = state_18198__$1;
(statearr_18265_18329[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (16))){
var inst_18099 = (state_18198[(7)]);
var inst_18101 = cljs.core.chunked_seq_QMARK_.call(null,inst_18099);
var state_18198__$1 = state_18198;
if(inst_18101){
var statearr_18266_18330 = state_18198__$1;
(statearr_18266_18330[(1)] = (19));

} else {
var statearr_18267_18331 = state_18198__$1;
(statearr_18267_18331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (38))){
var inst_18177 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18268_18332 = state_18198__$1;
(statearr_18268_18332[(2)] = inst_18177);

(statearr_18268_18332[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (30))){
var state_18198__$1 = state_18198;
var statearr_18269_18333 = state_18198__$1;
(statearr_18269_18333[(2)] = null);

(statearr_18269_18333[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (10))){
var inst_18080 = (state_18198[(14)]);
var inst_18082 = (state_18198[(16)]);
var inst_18088 = cljs.core._nth.call(null,inst_18080,inst_18082);
var inst_18089 = cljs.core.nth.call(null,inst_18088,(0),null);
var inst_18090 = cljs.core.nth.call(null,inst_18088,(1),null);
var state_18198__$1 = (function (){var statearr_18270 = state_18198;
(statearr_18270[(26)] = inst_18089);

return statearr_18270;
})();
if(cljs.core.truth_(inst_18090)){
var statearr_18271_18334 = state_18198__$1;
(statearr_18271_18334[(1)] = (13));

} else {
var statearr_18272_18335 = state_18198__$1;
(statearr_18272_18335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (18))){
var inst_18123 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18273_18336 = state_18198__$1;
(statearr_18273_18336[(2)] = inst_18123);

(statearr_18273_18336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (42))){
var state_18198__$1 = state_18198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18198__$1,(45),dchan);
} else {
if((state_val_18199 === (37))){
var inst_18157 = (state_18198[(25)]);
var inst_18070 = (state_18198[(12)]);
var inst_18166 = (state_18198[(23)]);
var inst_18166__$1 = cljs.core.first.call(null,inst_18157);
var inst_18167 = cljs.core.async.put_BANG_.call(null,inst_18166__$1,inst_18070,done);
var state_18198__$1 = (function (){var statearr_18274 = state_18198;
(statearr_18274[(23)] = inst_18166__$1);

return statearr_18274;
})();
if(cljs.core.truth_(inst_18167)){
var statearr_18275_18337 = state_18198__$1;
(statearr_18275_18337[(1)] = (39));

} else {
var statearr_18276_18338 = state_18198__$1;
(statearr_18276_18338[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (8))){
var inst_18081 = (state_18198[(15)]);
var inst_18082 = (state_18198[(16)]);
var inst_18084 = (inst_18082 < inst_18081);
var inst_18085 = inst_18084;
var state_18198__$1 = state_18198;
if(cljs.core.truth_(inst_18085)){
var statearr_18277_18339 = state_18198__$1;
(statearr_18277_18339[(1)] = (10));

} else {
var statearr_18278_18340 = state_18198__$1;
(statearr_18278_18340[(1)] = (11));

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
});})(c__6777__auto___18286,cs,m,dchan,dctr,done))
;
return ((function (switch__6721__auto__,c__6777__auto___18286,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_18282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18282[(0)] = state_machine__6722__auto__);

(statearr_18282[(1)] = (1));

return statearr_18282;
});
var state_machine__6722__auto____1 = (function (state_18198){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_18198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e18283){if((e18283 instanceof Object)){
var ex__6725__auto__ = e18283;
var statearr_18284_18341 = state_18198;
(statearr_18284_18341[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18342 = state_18198;
state_18198 = G__18342;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_18198){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_18198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___18286,cs,m,dchan,dctr,done))
})();
var state__6779__auto__ = (function (){var statearr_18285 = f__6778__auto__.call(null);
(statearr_18285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___18286);

return statearr_18285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___18286,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj18344 = {};
return obj18344;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18345){
var map__18350 = p__18345;
var map__18350__$1 = ((cljs.core.seq_QMARK_.call(null,map__18350))?cljs.core.apply.call(null,cljs.core.hash_map,map__18350):map__18350);
var opts = map__18350__$1;
var statearr_18351_18354 = state;
(statearr_18351_18354[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18350,map__18350__$1,opts){
return (function (val){
var statearr_18352_18355 = state;
(statearr_18352_18355[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18350,map__18350__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18353_18356 = state;
(statearr_18353_18356[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18345 = null;
if (arguments.length > 3) {
var G__18357__i = 0, G__18357__a = new Array(arguments.length -  3);
while (G__18357__i < G__18357__a.length) {G__18357__a[G__18357__i] = arguments[G__18357__i + 3]; ++G__18357__i;}
  p__18345 = new cljs.core.IndexedSeq(G__18357__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18345);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18358){
var state = cljs.core.first(arglist__18358);
arglist__18358 = cljs.core.next(arglist__18358);
var cont_block = cljs.core.first(arglist__18358);
arglist__18358 = cljs.core.next(arglist__18358);
var ports = cljs.core.first(arglist__18358);
var p__18345 = cljs.core.rest(arglist__18358);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18345);
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
if(typeof cljs.core.async.t18478 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18478 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18479){
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
this.meta18479 = meta18479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18478.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18478.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18478.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18478.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18478.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18478.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18478.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18478.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18480){
var self__ = this;
var _18480__$1 = this;
return self__.meta18479;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18480,meta18479__$1){
var self__ = this;
var _18480__$1 = this;
return (new cljs.core.async.t18478(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18479__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18478.cljs$lang$type = true;

cljs.core.async.t18478.cljs$lang$ctorStr = "cljs.core.async/t18478";

cljs.core.async.t18478.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t18478");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18478 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18478(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18479){
return (new cljs.core.async.t18478(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18479));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18478(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var c__6777__auto___18597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___18597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___18597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18550){
var state_val_18551 = (state_18550[(1)]);
if((state_val_18551 === (7))){
var inst_18494 = (state_18550[(7)]);
var inst_18499 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18494);
var state_18550__$1 = state_18550;
var statearr_18552_18598 = state_18550__$1;
(statearr_18552_18598[(2)] = inst_18499);

(statearr_18552_18598[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (20))){
var inst_18509 = (state_18550[(8)]);
var state_18550__$1 = state_18550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18550__$1,(23),out,inst_18509);
} else {
if((state_val_18551 === (1))){
var inst_18484 = (state_18550[(9)]);
var inst_18484__$1 = calc_state.call(null);
var inst_18485 = cljs.core.seq_QMARK_.call(null,inst_18484__$1);
var state_18550__$1 = (function (){var statearr_18553 = state_18550;
(statearr_18553[(9)] = inst_18484__$1);

return statearr_18553;
})();
if(inst_18485){
var statearr_18554_18599 = state_18550__$1;
(statearr_18554_18599[(1)] = (2));

} else {
var statearr_18555_18600 = state_18550__$1;
(statearr_18555_18600[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (24))){
var inst_18502 = (state_18550[(10)]);
var inst_18494 = inst_18502;
var state_18550__$1 = (function (){var statearr_18556 = state_18550;
(statearr_18556[(7)] = inst_18494);

return statearr_18556;
})();
var statearr_18557_18601 = state_18550__$1;
(statearr_18557_18601[(2)] = null);

(statearr_18557_18601[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (4))){
var inst_18484 = (state_18550[(9)]);
var inst_18490 = (state_18550[(2)]);
var inst_18491 = cljs.core.get.call(null,inst_18490,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18492 = cljs.core.get.call(null,inst_18490,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18493 = cljs.core.get.call(null,inst_18490,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18494 = inst_18484;
var state_18550__$1 = (function (){var statearr_18558 = state_18550;
(statearr_18558[(11)] = inst_18491);

(statearr_18558[(12)] = inst_18493);

(statearr_18558[(7)] = inst_18494);

(statearr_18558[(13)] = inst_18492);

return statearr_18558;
})();
var statearr_18559_18602 = state_18550__$1;
(statearr_18559_18602[(2)] = null);

(statearr_18559_18602[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (15))){
var state_18550__$1 = state_18550;
var statearr_18560_18603 = state_18550__$1;
(statearr_18560_18603[(2)] = null);

(statearr_18560_18603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (21))){
var inst_18502 = (state_18550[(10)]);
var inst_18494 = inst_18502;
var state_18550__$1 = (function (){var statearr_18561 = state_18550;
(statearr_18561[(7)] = inst_18494);

return statearr_18561;
})();
var statearr_18562_18604 = state_18550__$1;
(statearr_18562_18604[(2)] = null);

(statearr_18562_18604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (13))){
var inst_18546 = (state_18550[(2)]);
var state_18550__$1 = state_18550;
var statearr_18563_18605 = state_18550__$1;
(statearr_18563_18605[(2)] = inst_18546);

(statearr_18563_18605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (22))){
var inst_18544 = (state_18550[(2)]);
var state_18550__$1 = state_18550;
var statearr_18564_18606 = state_18550__$1;
(statearr_18564_18606[(2)] = inst_18544);

(statearr_18564_18606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (6))){
var inst_18548 = (state_18550[(2)]);
var state_18550__$1 = state_18550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18550__$1,inst_18548);
} else {
if((state_val_18551 === (25))){
var state_18550__$1 = state_18550;
var statearr_18565_18607 = state_18550__$1;
(statearr_18565_18607[(2)] = null);

(statearr_18565_18607[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (17))){
var inst_18524 = (state_18550[(14)]);
var state_18550__$1 = state_18550;
var statearr_18566_18608 = state_18550__$1;
(statearr_18566_18608[(2)] = inst_18524);

(statearr_18566_18608[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (3))){
var inst_18484 = (state_18550[(9)]);
var state_18550__$1 = state_18550;
var statearr_18567_18609 = state_18550__$1;
(statearr_18567_18609[(2)] = inst_18484);

(statearr_18567_18609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (12))){
var inst_18524 = (state_18550[(14)]);
var inst_18505 = (state_18550[(15)]);
var inst_18510 = (state_18550[(16)]);
var inst_18524__$1 = inst_18505.call(null,inst_18510);
var state_18550__$1 = (function (){var statearr_18568 = state_18550;
(statearr_18568[(14)] = inst_18524__$1);

return statearr_18568;
})();
if(cljs.core.truth_(inst_18524__$1)){
var statearr_18569_18610 = state_18550__$1;
(statearr_18569_18610[(1)] = (17));

} else {
var statearr_18570_18611 = state_18550__$1;
(statearr_18570_18611[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (2))){
var inst_18484 = (state_18550[(9)]);
var inst_18487 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18484);
var state_18550__$1 = state_18550;
var statearr_18571_18612 = state_18550__$1;
(statearr_18571_18612[(2)] = inst_18487);

(statearr_18571_18612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (23))){
var inst_18535 = (state_18550[(2)]);
var state_18550__$1 = state_18550;
if(cljs.core.truth_(inst_18535)){
var statearr_18572_18613 = state_18550__$1;
(statearr_18572_18613[(1)] = (24));

} else {
var statearr_18573_18614 = state_18550__$1;
(statearr_18573_18614[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (19))){
var inst_18532 = (state_18550[(2)]);
var state_18550__$1 = state_18550;
if(cljs.core.truth_(inst_18532)){
var statearr_18574_18615 = state_18550__$1;
(statearr_18574_18615[(1)] = (20));

} else {
var statearr_18575_18616 = state_18550__$1;
(statearr_18575_18616[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (11))){
var inst_18509 = (state_18550[(8)]);
var inst_18515 = (inst_18509 == null);
var state_18550__$1 = state_18550;
if(cljs.core.truth_(inst_18515)){
var statearr_18576_18617 = state_18550__$1;
(statearr_18576_18617[(1)] = (14));

} else {
var statearr_18577_18618 = state_18550__$1;
(statearr_18577_18618[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (9))){
var inst_18502 = (state_18550[(10)]);
var inst_18502__$1 = (state_18550[(2)]);
var inst_18503 = cljs.core.get.call(null,inst_18502__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18504 = cljs.core.get.call(null,inst_18502__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18505 = cljs.core.get.call(null,inst_18502__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18550__$1 = (function (){var statearr_18578 = state_18550;
(statearr_18578[(10)] = inst_18502__$1);

(statearr_18578[(15)] = inst_18505);

(statearr_18578[(17)] = inst_18504);

return statearr_18578;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18550__$1,(10),inst_18503);
} else {
if((state_val_18551 === (5))){
var inst_18494 = (state_18550[(7)]);
var inst_18497 = cljs.core.seq_QMARK_.call(null,inst_18494);
var state_18550__$1 = state_18550;
if(inst_18497){
var statearr_18579_18619 = state_18550__$1;
(statearr_18579_18619[(1)] = (7));

} else {
var statearr_18580_18620 = state_18550__$1;
(statearr_18580_18620[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (14))){
var inst_18510 = (state_18550[(16)]);
var inst_18517 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18510);
var state_18550__$1 = state_18550;
var statearr_18581_18621 = state_18550__$1;
(statearr_18581_18621[(2)] = inst_18517);

(statearr_18581_18621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (26))){
var inst_18540 = (state_18550[(2)]);
var state_18550__$1 = state_18550;
var statearr_18582_18622 = state_18550__$1;
(statearr_18582_18622[(2)] = inst_18540);

(statearr_18582_18622[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (16))){
var inst_18520 = (state_18550[(2)]);
var inst_18521 = calc_state.call(null);
var inst_18494 = inst_18521;
var state_18550__$1 = (function (){var statearr_18583 = state_18550;
(statearr_18583[(7)] = inst_18494);

(statearr_18583[(18)] = inst_18520);

return statearr_18583;
})();
var statearr_18584_18623 = state_18550__$1;
(statearr_18584_18623[(2)] = null);

(statearr_18584_18623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (10))){
var inst_18509 = (state_18550[(8)]);
var inst_18510 = (state_18550[(16)]);
var inst_18508 = (state_18550[(2)]);
var inst_18509__$1 = cljs.core.nth.call(null,inst_18508,(0),null);
var inst_18510__$1 = cljs.core.nth.call(null,inst_18508,(1),null);
var inst_18511 = (inst_18509__$1 == null);
var inst_18512 = cljs.core._EQ_.call(null,inst_18510__$1,change);
var inst_18513 = (inst_18511) || (inst_18512);
var state_18550__$1 = (function (){var statearr_18585 = state_18550;
(statearr_18585[(8)] = inst_18509__$1);

(statearr_18585[(16)] = inst_18510__$1);

return statearr_18585;
})();
if(cljs.core.truth_(inst_18513)){
var statearr_18586_18624 = state_18550__$1;
(statearr_18586_18624[(1)] = (11));

} else {
var statearr_18587_18625 = state_18550__$1;
(statearr_18587_18625[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (18))){
var inst_18505 = (state_18550[(15)]);
var inst_18510 = (state_18550[(16)]);
var inst_18504 = (state_18550[(17)]);
var inst_18527 = cljs.core.empty_QMARK_.call(null,inst_18505);
var inst_18528 = inst_18504.call(null,inst_18510);
var inst_18529 = cljs.core.not.call(null,inst_18528);
var inst_18530 = (inst_18527) && (inst_18529);
var state_18550__$1 = state_18550;
var statearr_18588_18626 = state_18550__$1;
(statearr_18588_18626[(2)] = inst_18530);

(statearr_18588_18626[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18551 === (8))){
var inst_18494 = (state_18550[(7)]);
var state_18550__$1 = state_18550;
var statearr_18589_18627 = state_18550__$1;
(statearr_18589_18627[(2)] = inst_18494);

(statearr_18589_18627[(1)] = (9));


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
});})(c__6777__auto___18597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6721__auto__,c__6777__auto___18597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_18593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18593[(0)] = state_machine__6722__auto__);

(statearr_18593[(1)] = (1));

return statearr_18593;
});
var state_machine__6722__auto____1 = (function (state_18550){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_18550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e18594){if((e18594 instanceof Object)){
var ex__6725__auto__ = e18594;
var statearr_18595_18628 = state_18550;
(statearr_18595_18628[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18629 = state_18550;
state_18550 = G__18629;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_18550){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_18550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___18597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6779__auto__ = (function (){var statearr_18596 = f__6778__auto__.call(null);
(statearr_18596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___18597);

return statearr_18596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___18597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18631 = {};
return obj18631;
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
return (function (p1__18632_SHARP_){
if(cljs.core.truth_(p1__18632_SHARP_.call(null,topic))){
return p1__18632_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18632_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3799__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18755 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18755 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18756){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18756 = meta18756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18755.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18755.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18755.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18755.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18757){
var self__ = this;
var _18757__$1 = this;
return self__.meta18756;
});})(mults,ensure_mult))
;

cljs.core.async.t18755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18757,meta18756__$1){
var self__ = this;
var _18757__$1 = this;
return (new cljs.core.async.t18755(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18756__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18755.cljs$lang$type = true;

cljs.core.async.t18755.cljs$lang$ctorStr = "cljs.core.async/t18755";

cljs.core.async.t18755.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t18755");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18755 = ((function (mults,ensure_mult){
return (function __GT_t18755(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18756){
return (new cljs.core.async.t18755(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18756));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18755(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var c__6777__auto___18877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___18877,mults,ensure_mult,p){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___18877,mults,ensure_mult,p){
return (function (state_18829){
var state_val_18830 = (state_18829[(1)]);
if((state_val_18830 === (7))){
var inst_18825 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
var statearr_18831_18878 = state_18829__$1;
(statearr_18831_18878[(2)] = inst_18825);

(statearr_18831_18878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (20))){
var state_18829__$1 = state_18829;
var statearr_18832_18879 = state_18829__$1;
(statearr_18832_18879[(2)] = null);

(statearr_18832_18879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (1))){
var state_18829__$1 = state_18829;
var statearr_18833_18880 = state_18829__$1;
(statearr_18833_18880[(2)] = null);

(statearr_18833_18880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (24))){
var inst_18808 = (state_18829[(7)]);
var inst_18817 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18808);
var state_18829__$1 = state_18829;
var statearr_18834_18881 = state_18829__$1;
(statearr_18834_18881[(2)] = inst_18817);

(statearr_18834_18881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (4))){
var inst_18760 = (state_18829[(8)]);
var inst_18760__$1 = (state_18829[(2)]);
var inst_18761 = (inst_18760__$1 == null);
var state_18829__$1 = (function (){var statearr_18835 = state_18829;
(statearr_18835[(8)] = inst_18760__$1);

return statearr_18835;
})();
if(cljs.core.truth_(inst_18761)){
var statearr_18836_18882 = state_18829__$1;
(statearr_18836_18882[(1)] = (5));

} else {
var statearr_18837_18883 = state_18829__$1;
(statearr_18837_18883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (15))){
var inst_18802 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
var statearr_18838_18884 = state_18829__$1;
(statearr_18838_18884[(2)] = inst_18802);

(statearr_18838_18884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (21))){
var inst_18822 = (state_18829[(2)]);
var state_18829__$1 = (function (){var statearr_18839 = state_18829;
(statearr_18839[(9)] = inst_18822);

return statearr_18839;
})();
var statearr_18840_18885 = state_18829__$1;
(statearr_18840_18885[(2)] = null);

(statearr_18840_18885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (13))){
var inst_18784 = (state_18829[(10)]);
var inst_18786 = cljs.core.chunked_seq_QMARK_.call(null,inst_18784);
var state_18829__$1 = state_18829;
if(inst_18786){
var statearr_18841_18886 = state_18829__$1;
(statearr_18841_18886[(1)] = (16));

} else {
var statearr_18842_18887 = state_18829__$1;
(statearr_18842_18887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (22))){
var inst_18814 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
if(cljs.core.truth_(inst_18814)){
var statearr_18843_18888 = state_18829__$1;
(statearr_18843_18888[(1)] = (23));

} else {
var statearr_18844_18889 = state_18829__$1;
(statearr_18844_18889[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (6))){
var inst_18760 = (state_18829[(8)]);
var inst_18808 = (state_18829[(7)]);
var inst_18810 = (state_18829[(11)]);
var inst_18808__$1 = topic_fn.call(null,inst_18760);
var inst_18809 = cljs.core.deref.call(null,mults);
var inst_18810__$1 = cljs.core.get.call(null,inst_18809,inst_18808__$1);
var state_18829__$1 = (function (){var statearr_18845 = state_18829;
(statearr_18845[(7)] = inst_18808__$1);

(statearr_18845[(11)] = inst_18810__$1);

return statearr_18845;
})();
if(cljs.core.truth_(inst_18810__$1)){
var statearr_18846_18890 = state_18829__$1;
(statearr_18846_18890[(1)] = (19));

} else {
var statearr_18847_18891 = state_18829__$1;
(statearr_18847_18891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (25))){
var inst_18819 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
var statearr_18848_18892 = state_18829__$1;
(statearr_18848_18892[(2)] = inst_18819);

(statearr_18848_18892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (17))){
var inst_18784 = (state_18829[(10)]);
var inst_18793 = cljs.core.first.call(null,inst_18784);
var inst_18794 = cljs.core.async.muxch_STAR_.call(null,inst_18793);
var inst_18795 = cljs.core.async.close_BANG_.call(null,inst_18794);
var inst_18796 = cljs.core.next.call(null,inst_18784);
var inst_18770 = inst_18796;
var inst_18771 = null;
var inst_18772 = (0);
var inst_18773 = (0);
var state_18829__$1 = (function (){var statearr_18849 = state_18829;
(statearr_18849[(12)] = inst_18795);

(statearr_18849[(13)] = inst_18773);

(statearr_18849[(14)] = inst_18771);

(statearr_18849[(15)] = inst_18770);

(statearr_18849[(16)] = inst_18772);

return statearr_18849;
})();
var statearr_18850_18893 = state_18829__$1;
(statearr_18850_18893[(2)] = null);

(statearr_18850_18893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (3))){
var inst_18827 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18829__$1,inst_18827);
} else {
if((state_val_18830 === (12))){
var inst_18804 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
var statearr_18851_18894 = state_18829__$1;
(statearr_18851_18894[(2)] = inst_18804);

(statearr_18851_18894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (2))){
var state_18829__$1 = state_18829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18829__$1,(4),ch);
} else {
if((state_val_18830 === (23))){
var state_18829__$1 = state_18829;
var statearr_18852_18895 = state_18829__$1;
(statearr_18852_18895[(2)] = null);

(statearr_18852_18895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (19))){
var inst_18760 = (state_18829[(8)]);
var inst_18810 = (state_18829[(11)]);
var inst_18812 = cljs.core.async.muxch_STAR_.call(null,inst_18810);
var state_18829__$1 = state_18829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18829__$1,(22),inst_18812,inst_18760);
} else {
if((state_val_18830 === (11))){
var inst_18770 = (state_18829[(15)]);
var inst_18784 = (state_18829[(10)]);
var inst_18784__$1 = cljs.core.seq.call(null,inst_18770);
var state_18829__$1 = (function (){var statearr_18853 = state_18829;
(statearr_18853[(10)] = inst_18784__$1);

return statearr_18853;
})();
if(inst_18784__$1){
var statearr_18854_18896 = state_18829__$1;
(statearr_18854_18896[(1)] = (13));

} else {
var statearr_18855_18897 = state_18829__$1;
(statearr_18855_18897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (9))){
var inst_18806 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
var statearr_18856_18898 = state_18829__$1;
(statearr_18856_18898[(2)] = inst_18806);

(statearr_18856_18898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (5))){
var inst_18767 = cljs.core.deref.call(null,mults);
var inst_18768 = cljs.core.vals.call(null,inst_18767);
var inst_18769 = cljs.core.seq.call(null,inst_18768);
var inst_18770 = inst_18769;
var inst_18771 = null;
var inst_18772 = (0);
var inst_18773 = (0);
var state_18829__$1 = (function (){var statearr_18857 = state_18829;
(statearr_18857[(13)] = inst_18773);

(statearr_18857[(14)] = inst_18771);

(statearr_18857[(15)] = inst_18770);

(statearr_18857[(16)] = inst_18772);

return statearr_18857;
})();
var statearr_18858_18899 = state_18829__$1;
(statearr_18858_18899[(2)] = null);

(statearr_18858_18899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (14))){
var state_18829__$1 = state_18829;
var statearr_18862_18900 = state_18829__$1;
(statearr_18862_18900[(2)] = null);

(statearr_18862_18900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (16))){
var inst_18784 = (state_18829[(10)]);
var inst_18788 = cljs.core.chunk_first.call(null,inst_18784);
var inst_18789 = cljs.core.chunk_rest.call(null,inst_18784);
var inst_18790 = cljs.core.count.call(null,inst_18788);
var inst_18770 = inst_18789;
var inst_18771 = inst_18788;
var inst_18772 = inst_18790;
var inst_18773 = (0);
var state_18829__$1 = (function (){var statearr_18863 = state_18829;
(statearr_18863[(13)] = inst_18773);

(statearr_18863[(14)] = inst_18771);

(statearr_18863[(15)] = inst_18770);

(statearr_18863[(16)] = inst_18772);

return statearr_18863;
})();
var statearr_18864_18901 = state_18829__$1;
(statearr_18864_18901[(2)] = null);

(statearr_18864_18901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (10))){
var inst_18773 = (state_18829[(13)]);
var inst_18771 = (state_18829[(14)]);
var inst_18770 = (state_18829[(15)]);
var inst_18772 = (state_18829[(16)]);
var inst_18778 = cljs.core._nth.call(null,inst_18771,inst_18773);
var inst_18779 = cljs.core.async.muxch_STAR_.call(null,inst_18778);
var inst_18780 = cljs.core.async.close_BANG_.call(null,inst_18779);
var inst_18781 = (inst_18773 + (1));
var tmp18859 = inst_18771;
var tmp18860 = inst_18770;
var tmp18861 = inst_18772;
var inst_18770__$1 = tmp18860;
var inst_18771__$1 = tmp18859;
var inst_18772__$1 = tmp18861;
var inst_18773__$1 = inst_18781;
var state_18829__$1 = (function (){var statearr_18865 = state_18829;
(statearr_18865[(13)] = inst_18773__$1);

(statearr_18865[(14)] = inst_18771__$1);

(statearr_18865[(17)] = inst_18780);

(statearr_18865[(15)] = inst_18770__$1);

(statearr_18865[(16)] = inst_18772__$1);

return statearr_18865;
})();
var statearr_18866_18902 = state_18829__$1;
(statearr_18866_18902[(2)] = null);

(statearr_18866_18902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (18))){
var inst_18799 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
var statearr_18867_18903 = state_18829__$1;
(statearr_18867_18903[(2)] = inst_18799);

(statearr_18867_18903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18830 === (8))){
var inst_18773 = (state_18829[(13)]);
var inst_18772 = (state_18829[(16)]);
var inst_18775 = (inst_18773 < inst_18772);
var inst_18776 = inst_18775;
var state_18829__$1 = state_18829;
if(cljs.core.truth_(inst_18776)){
var statearr_18868_18904 = state_18829__$1;
(statearr_18868_18904[(1)] = (10));

} else {
var statearr_18869_18905 = state_18829__$1;
(statearr_18869_18905[(1)] = (11));

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
});})(c__6777__auto___18877,mults,ensure_mult,p))
;
return ((function (switch__6721__auto__,c__6777__auto___18877,mults,ensure_mult,p){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_18873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18873[(0)] = state_machine__6722__auto__);

(statearr_18873[(1)] = (1));

return statearr_18873;
});
var state_machine__6722__auto____1 = (function (state_18829){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_18829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e18874){if((e18874 instanceof Object)){
var ex__6725__auto__ = e18874;
var statearr_18875_18906 = state_18829;
(statearr_18875_18906[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18907 = state_18829;
state_18829 = G__18907;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_18829){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_18829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___18877,mults,ensure_mult,p))
})();
var state__6779__auto__ = (function (){var statearr_18876 = f__6778__auto__.call(null);
(statearr_18876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___18877);

return statearr_18876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___18877,mults,ensure_mult,p))
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
var c__6777__auto___19044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19044,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19044,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19014){
var state_val_19015 = (state_19014[(1)]);
if((state_val_19015 === (7))){
var state_19014__$1 = state_19014;
var statearr_19016_19045 = state_19014__$1;
(statearr_19016_19045[(2)] = null);

(statearr_19016_19045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (1))){
var state_19014__$1 = state_19014;
var statearr_19017_19046 = state_19014__$1;
(statearr_19017_19046[(2)] = null);

(statearr_19017_19046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (4))){
var inst_18978 = (state_19014[(7)]);
var inst_18980 = (inst_18978 < cnt);
var state_19014__$1 = state_19014;
if(cljs.core.truth_(inst_18980)){
var statearr_19018_19047 = state_19014__$1;
(statearr_19018_19047[(1)] = (6));

} else {
var statearr_19019_19048 = state_19014__$1;
(statearr_19019_19048[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (15))){
var inst_19010 = (state_19014[(2)]);
var state_19014__$1 = state_19014;
var statearr_19020_19049 = state_19014__$1;
(statearr_19020_19049[(2)] = inst_19010);

(statearr_19020_19049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (13))){
var inst_19003 = cljs.core.async.close_BANG_.call(null,out);
var state_19014__$1 = state_19014;
var statearr_19021_19050 = state_19014__$1;
(statearr_19021_19050[(2)] = inst_19003);

(statearr_19021_19050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (6))){
var state_19014__$1 = state_19014;
var statearr_19022_19051 = state_19014__$1;
(statearr_19022_19051[(2)] = null);

(statearr_19022_19051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (3))){
var inst_19012 = (state_19014[(2)]);
var state_19014__$1 = state_19014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19014__$1,inst_19012);
} else {
if((state_val_19015 === (12))){
var inst_19000 = (state_19014[(8)]);
var inst_19000__$1 = (state_19014[(2)]);
var inst_19001 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19000__$1);
var state_19014__$1 = (function (){var statearr_19023 = state_19014;
(statearr_19023[(8)] = inst_19000__$1);

return statearr_19023;
})();
if(cljs.core.truth_(inst_19001)){
var statearr_19024_19052 = state_19014__$1;
(statearr_19024_19052[(1)] = (13));

} else {
var statearr_19025_19053 = state_19014__$1;
(statearr_19025_19053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (2))){
var inst_18977 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18978 = (0);
var state_19014__$1 = (function (){var statearr_19026 = state_19014;
(statearr_19026[(9)] = inst_18977);

(statearr_19026[(7)] = inst_18978);

return statearr_19026;
})();
var statearr_19027_19054 = state_19014__$1;
(statearr_19027_19054[(2)] = null);

(statearr_19027_19054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (11))){
var inst_18978 = (state_19014[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19014,(10),Object,null,(9));
var inst_18987 = chs__$1.call(null,inst_18978);
var inst_18988 = done.call(null,inst_18978);
var inst_18989 = cljs.core.async.take_BANG_.call(null,inst_18987,inst_18988);
var state_19014__$1 = state_19014;
var statearr_19028_19055 = state_19014__$1;
(statearr_19028_19055[(2)] = inst_18989);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (9))){
var inst_18978 = (state_19014[(7)]);
var inst_18991 = (state_19014[(2)]);
var inst_18992 = (inst_18978 + (1));
var inst_18978__$1 = inst_18992;
var state_19014__$1 = (function (){var statearr_19029 = state_19014;
(statearr_19029[(7)] = inst_18978__$1);

(statearr_19029[(10)] = inst_18991);

return statearr_19029;
})();
var statearr_19030_19056 = state_19014__$1;
(statearr_19030_19056[(2)] = null);

(statearr_19030_19056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (5))){
var inst_18998 = (state_19014[(2)]);
var state_19014__$1 = (function (){var statearr_19031 = state_19014;
(statearr_19031[(11)] = inst_18998);

return statearr_19031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19014__$1,(12),dchan);
} else {
if((state_val_19015 === (14))){
var inst_19000 = (state_19014[(8)]);
var inst_19005 = cljs.core.apply.call(null,f,inst_19000);
var state_19014__$1 = state_19014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19014__$1,(16),out,inst_19005);
} else {
if((state_val_19015 === (16))){
var inst_19007 = (state_19014[(2)]);
var state_19014__$1 = (function (){var statearr_19032 = state_19014;
(statearr_19032[(12)] = inst_19007);

return statearr_19032;
})();
var statearr_19033_19057 = state_19014__$1;
(statearr_19033_19057[(2)] = null);

(statearr_19033_19057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (10))){
var inst_18982 = (state_19014[(2)]);
var inst_18983 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19014__$1 = (function (){var statearr_19034 = state_19014;
(statearr_19034[(13)] = inst_18982);

return statearr_19034;
})();
var statearr_19035_19058 = state_19014__$1;
(statearr_19035_19058[(2)] = inst_18983);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (8))){
var inst_18996 = (state_19014[(2)]);
var state_19014__$1 = state_19014;
var statearr_19036_19059 = state_19014__$1;
(statearr_19036_19059[(2)] = inst_18996);

(statearr_19036_19059[(1)] = (5));


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
});})(c__6777__auto___19044,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6721__auto__,c__6777__auto___19044,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19040[(0)] = state_machine__6722__auto__);

(statearr_19040[(1)] = (1));

return statearr_19040;
});
var state_machine__6722__auto____1 = (function (state_19014){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19041){if((e19041 instanceof Object)){
var ex__6725__auto__ = e19041;
var statearr_19042_19060 = state_19014;
(statearr_19042_19060[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19061 = state_19014;
state_19014 = G__19061;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19014){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19044,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6779__auto__ = (function (){var statearr_19043 = f__6778__auto__.call(null);
(statearr_19043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19044);

return statearr_19043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19044,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6777__auto___19169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19169,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19169,out){
return (function (state_19145){
var state_val_19146 = (state_19145[(1)]);
if((state_val_19146 === (7))){
var inst_19124 = (state_19145[(7)]);
var inst_19125 = (state_19145[(8)]);
var inst_19124__$1 = (state_19145[(2)]);
var inst_19125__$1 = cljs.core.nth.call(null,inst_19124__$1,(0),null);
var inst_19126 = cljs.core.nth.call(null,inst_19124__$1,(1),null);
var inst_19127 = (inst_19125__$1 == null);
var state_19145__$1 = (function (){var statearr_19147 = state_19145;
(statearr_19147[(9)] = inst_19126);

(statearr_19147[(7)] = inst_19124__$1);

(statearr_19147[(8)] = inst_19125__$1);

return statearr_19147;
})();
if(cljs.core.truth_(inst_19127)){
var statearr_19148_19170 = state_19145__$1;
(statearr_19148_19170[(1)] = (8));

} else {
var statearr_19149_19171 = state_19145__$1;
(statearr_19149_19171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (1))){
var inst_19116 = cljs.core.vec.call(null,chs);
var inst_19117 = inst_19116;
var state_19145__$1 = (function (){var statearr_19150 = state_19145;
(statearr_19150[(10)] = inst_19117);

return statearr_19150;
})();
var statearr_19151_19172 = state_19145__$1;
(statearr_19151_19172[(2)] = null);

(statearr_19151_19172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (4))){
var inst_19117 = (state_19145[(10)]);
var state_19145__$1 = state_19145;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19145__$1,(7),inst_19117);
} else {
if((state_val_19146 === (6))){
var inst_19141 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19152_19173 = state_19145__$1;
(statearr_19152_19173[(2)] = inst_19141);

(statearr_19152_19173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (3))){
var inst_19143 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19145__$1,inst_19143);
} else {
if((state_val_19146 === (2))){
var inst_19117 = (state_19145[(10)]);
var inst_19119 = cljs.core.count.call(null,inst_19117);
var inst_19120 = (inst_19119 > (0));
var state_19145__$1 = state_19145;
if(cljs.core.truth_(inst_19120)){
var statearr_19154_19174 = state_19145__$1;
(statearr_19154_19174[(1)] = (4));

} else {
var statearr_19155_19175 = state_19145__$1;
(statearr_19155_19175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (11))){
var inst_19117 = (state_19145[(10)]);
var inst_19134 = (state_19145[(2)]);
var tmp19153 = inst_19117;
var inst_19117__$1 = tmp19153;
var state_19145__$1 = (function (){var statearr_19156 = state_19145;
(statearr_19156[(11)] = inst_19134);

(statearr_19156[(10)] = inst_19117__$1);

return statearr_19156;
})();
var statearr_19157_19176 = state_19145__$1;
(statearr_19157_19176[(2)] = null);

(statearr_19157_19176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (9))){
var inst_19125 = (state_19145[(8)]);
var state_19145__$1 = state_19145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19145__$1,(11),out,inst_19125);
} else {
if((state_val_19146 === (5))){
var inst_19139 = cljs.core.async.close_BANG_.call(null,out);
var state_19145__$1 = state_19145;
var statearr_19158_19177 = state_19145__$1;
(statearr_19158_19177[(2)] = inst_19139);

(statearr_19158_19177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (10))){
var inst_19137 = (state_19145[(2)]);
var state_19145__$1 = state_19145;
var statearr_19159_19178 = state_19145__$1;
(statearr_19159_19178[(2)] = inst_19137);

(statearr_19159_19178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19146 === (8))){
var inst_19126 = (state_19145[(9)]);
var inst_19124 = (state_19145[(7)]);
var inst_19117 = (state_19145[(10)]);
var inst_19125 = (state_19145[(8)]);
var inst_19129 = (function (){var c = inst_19126;
var v = inst_19125;
var vec__19122 = inst_19124;
var cs = inst_19117;
return ((function (c,v,vec__19122,cs,inst_19126,inst_19124,inst_19117,inst_19125,state_val_19146,c__6777__auto___19169,out){
return (function (p1__19062_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19062_SHARP_);
});
;})(c,v,vec__19122,cs,inst_19126,inst_19124,inst_19117,inst_19125,state_val_19146,c__6777__auto___19169,out))
})();
var inst_19130 = cljs.core.filterv.call(null,inst_19129,inst_19117);
var inst_19117__$1 = inst_19130;
var state_19145__$1 = (function (){var statearr_19160 = state_19145;
(statearr_19160[(10)] = inst_19117__$1);

return statearr_19160;
})();
var statearr_19161_19179 = state_19145__$1;
(statearr_19161_19179[(2)] = null);

(statearr_19161_19179[(1)] = (2));


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
});})(c__6777__auto___19169,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19169,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19165 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19165[(0)] = state_machine__6722__auto__);

(statearr_19165[(1)] = (1));

return statearr_19165;
});
var state_machine__6722__auto____1 = (function (state_19145){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19166){if((e19166 instanceof Object)){
var ex__6725__auto__ = e19166;
var statearr_19167_19180 = state_19145;
(statearr_19167_19180[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19181 = state_19145;
state_19145 = G__19181;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19145){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19169,out))
})();
var state__6779__auto__ = (function (){var statearr_19168 = f__6778__auto__.call(null);
(statearr_19168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19169);

return statearr_19168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19169,out))
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
var c__6777__auto___19274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19274,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19274,out){
return (function (state_19251){
var state_val_19252 = (state_19251[(1)]);
if((state_val_19252 === (7))){
var inst_19233 = (state_19251[(7)]);
var inst_19233__$1 = (state_19251[(2)]);
var inst_19234 = (inst_19233__$1 == null);
var inst_19235 = cljs.core.not.call(null,inst_19234);
var state_19251__$1 = (function (){var statearr_19253 = state_19251;
(statearr_19253[(7)] = inst_19233__$1);

return statearr_19253;
})();
if(inst_19235){
var statearr_19254_19275 = state_19251__$1;
(statearr_19254_19275[(1)] = (8));

} else {
var statearr_19255_19276 = state_19251__$1;
(statearr_19255_19276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (1))){
var inst_19228 = (0);
var state_19251__$1 = (function (){var statearr_19256 = state_19251;
(statearr_19256[(8)] = inst_19228);

return statearr_19256;
})();
var statearr_19257_19277 = state_19251__$1;
(statearr_19257_19277[(2)] = null);

(statearr_19257_19277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (4))){
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19251__$1,(7),ch);
} else {
if((state_val_19252 === (6))){
var inst_19246 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19258_19278 = state_19251__$1;
(statearr_19258_19278[(2)] = inst_19246);

(statearr_19258_19278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (3))){
var inst_19248 = (state_19251[(2)]);
var inst_19249 = cljs.core.async.close_BANG_.call(null,out);
var state_19251__$1 = (function (){var statearr_19259 = state_19251;
(statearr_19259[(9)] = inst_19248);

return statearr_19259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19251__$1,inst_19249);
} else {
if((state_val_19252 === (2))){
var inst_19228 = (state_19251[(8)]);
var inst_19230 = (inst_19228 < n);
var state_19251__$1 = state_19251;
if(cljs.core.truth_(inst_19230)){
var statearr_19260_19279 = state_19251__$1;
(statearr_19260_19279[(1)] = (4));

} else {
var statearr_19261_19280 = state_19251__$1;
(statearr_19261_19280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (11))){
var inst_19228 = (state_19251[(8)]);
var inst_19238 = (state_19251[(2)]);
var inst_19239 = (inst_19228 + (1));
var inst_19228__$1 = inst_19239;
var state_19251__$1 = (function (){var statearr_19262 = state_19251;
(statearr_19262[(8)] = inst_19228__$1);

(statearr_19262[(10)] = inst_19238);

return statearr_19262;
})();
var statearr_19263_19281 = state_19251__$1;
(statearr_19263_19281[(2)] = null);

(statearr_19263_19281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (9))){
var state_19251__$1 = state_19251;
var statearr_19264_19282 = state_19251__$1;
(statearr_19264_19282[(2)] = null);

(statearr_19264_19282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (5))){
var state_19251__$1 = state_19251;
var statearr_19265_19283 = state_19251__$1;
(statearr_19265_19283[(2)] = null);

(statearr_19265_19283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (10))){
var inst_19243 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19266_19284 = state_19251__$1;
(statearr_19266_19284[(2)] = inst_19243);

(statearr_19266_19284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (8))){
var inst_19233 = (state_19251[(7)]);
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19251__$1,(11),out,inst_19233);
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
});})(c__6777__auto___19274,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19274,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19270[(0)] = state_machine__6722__auto__);

(statearr_19270[(1)] = (1));

return statearr_19270;
});
var state_machine__6722__auto____1 = (function (state_19251){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19271){if((e19271 instanceof Object)){
var ex__6725__auto__ = e19271;
var statearr_19272_19285 = state_19251;
(statearr_19272_19285[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19286 = state_19251;
state_19251 = G__19286;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19251){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19274,out))
})();
var state__6779__auto__ = (function (){var statearr_19273 = f__6778__auto__.call(null);
(statearr_19273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19274);

return statearr_19273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19274,out))
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
if(typeof cljs.core.async.t19294 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19294 = (function (ch,f,map_LT_,meta19295){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19295 = meta19295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19294.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19294.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19297 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19297 = (function (fn1,_,meta19295,map_LT_,f,ch,meta19298){
this.fn1 = fn1;
this._ = _;
this.meta19295 = meta19295;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19298 = meta19298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19297.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19287_SHARP_){
return f1.call(null,(((p1__19287_SHARP_ == null))?null:self__.f.call(null,p1__19287_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19299){
var self__ = this;
var _19299__$1 = this;
return self__.meta19298;
});})(___$1))
;

cljs.core.async.t19297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19299,meta19298__$1){
var self__ = this;
var _19299__$1 = this;
return (new cljs.core.async.t19297(self__.fn1,self__._,self__.meta19295,self__.map_LT_,self__.f,self__.ch,meta19298__$1));
});})(___$1))
;

cljs.core.async.t19297.cljs$lang$type = true;

cljs.core.async.t19297.cljs$lang$ctorStr = "cljs.core.async/t19297";

cljs.core.async.t19297.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19297");
});})(___$1))
;

cljs.core.async.__GT_t19297 = ((function (___$1){
return (function __GT_t19297(fn1__$1,___$2,meta19295__$1,map_LT___$1,f__$1,ch__$1,meta19298){
return (new cljs.core.async.t19297(fn1__$1,___$2,meta19295__$1,map_LT___$1,f__$1,ch__$1,meta19298));
});})(___$1))
;

}

return (new cljs.core.async.t19297(fn1,___$1,self__.meta19295,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t19294.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19294.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19296){
var self__ = this;
var _19296__$1 = this;
return self__.meta19295;
});

cljs.core.async.t19294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19296,meta19295__$1){
var self__ = this;
var _19296__$1 = this;
return (new cljs.core.async.t19294(self__.ch,self__.f,self__.map_LT_,meta19295__$1));
});

cljs.core.async.t19294.cljs$lang$type = true;

cljs.core.async.t19294.cljs$lang$ctorStr = "cljs.core.async/t19294";

cljs.core.async.t19294.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19294");
});

cljs.core.async.__GT_t19294 = (function __GT_t19294(ch__$1,f__$1,map_LT___$1,meta19295){
return (new cljs.core.async.t19294(ch__$1,f__$1,map_LT___$1,meta19295));
});

}

return (new cljs.core.async.t19294(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19303 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19303 = (function (ch,f,map_GT_,meta19304){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19304 = meta19304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19303.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19303.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19303.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19305){
var self__ = this;
var _19305__$1 = this;
return self__.meta19304;
});

cljs.core.async.t19303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19305,meta19304__$1){
var self__ = this;
var _19305__$1 = this;
return (new cljs.core.async.t19303(self__.ch,self__.f,self__.map_GT_,meta19304__$1));
});

cljs.core.async.t19303.cljs$lang$type = true;

cljs.core.async.t19303.cljs$lang$ctorStr = "cljs.core.async/t19303";

cljs.core.async.t19303.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19303");
});

cljs.core.async.__GT_t19303 = (function __GT_t19303(ch__$1,f__$1,map_GT___$1,meta19304){
return (new cljs.core.async.t19303(ch__$1,f__$1,map_GT___$1,meta19304));
});

}

return (new cljs.core.async.t19303(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19309 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19309 = (function (ch,p,filter_GT_,meta19310){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19310 = meta19310;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19309.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19309.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19309.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19309.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19309.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19309.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19309.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19311){
var self__ = this;
var _19311__$1 = this;
return self__.meta19310;
});

cljs.core.async.t19309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19311,meta19310__$1){
var self__ = this;
var _19311__$1 = this;
return (new cljs.core.async.t19309(self__.ch,self__.p,self__.filter_GT_,meta19310__$1));
});

cljs.core.async.t19309.cljs$lang$type = true;

cljs.core.async.t19309.cljs$lang$ctorStr = "cljs.core.async/t19309";

cljs.core.async.t19309.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19309");
});

cljs.core.async.__GT_t19309 = (function __GT_t19309(ch__$1,p__$1,filter_GT___$1,meta19310){
return (new cljs.core.async.t19309(ch__$1,p__$1,filter_GT___$1,meta19310));
});

}

return (new cljs.core.async.t19309(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var c__6777__auto___19394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19394,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19394,out){
return (function (state_19373){
var state_val_19374 = (state_19373[(1)]);
if((state_val_19374 === (7))){
var inst_19369 = (state_19373[(2)]);
var state_19373__$1 = state_19373;
var statearr_19375_19395 = state_19373__$1;
(statearr_19375_19395[(2)] = inst_19369);

(statearr_19375_19395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19374 === (1))){
var state_19373__$1 = state_19373;
var statearr_19376_19396 = state_19373__$1;
(statearr_19376_19396[(2)] = null);

(statearr_19376_19396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19374 === (4))){
var inst_19355 = (state_19373[(7)]);
var inst_19355__$1 = (state_19373[(2)]);
var inst_19356 = (inst_19355__$1 == null);
var state_19373__$1 = (function (){var statearr_19377 = state_19373;
(statearr_19377[(7)] = inst_19355__$1);

return statearr_19377;
})();
if(cljs.core.truth_(inst_19356)){
var statearr_19378_19397 = state_19373__$1;
(statearr_19378_19397[(1)] = (5));

} else {
var statearr_19379_19398 = state_19373__$1;
(statearr_19379_19398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19374 === (6))){
var inst_19355 = (state_19373[(7)]);
var inst_19360 = p.call(null,inst_19355);
var state_19373__$1 = state_19373;
if(cljs.core.truth_(inst_19360)){
var statearr_19380_19399 = state_19373__$1;
(statearr_19380_19399[(1)] = (8));

} else {
var statearr_19381_19400 = state_19373__$1;
(statearr_19381_19400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19374 === (3))){
var inst_19371 = (state_19373[(2)]);
var state_19373__$1 = state_19373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19373__$1,inst_19371);
} else {
if((state_val_19374 === (2))){
var state_19373__$1 = state_19373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19373__$1,(4),ch);
} else {
if((state_val_19374 === (11))){
var inst_19363 = (state_19373[(2)]);
var state_19373__$1 = state_19373;
var statearr_19382_19401 = state_19373__$1;
(statearr_19382_19401[(2)] = inst_19363);

(statearr_19382_19401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19374 === (9))){
var state_19373__$1 = state_19373;
var statearr_19383_19402 = state_19373__$1;
(statearr_19383_19402[(2)] = null);

(statearr_19383_19402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19374 === (5))){
var inst_19358 = cljs.core.async.close_BANG_.call(null,out);
var state_19373__$1 = state_19373;
var statearr_19384_19403 = state_19373__$1;
(statearr_19384_19403[(2)] = inst_19358);

(statearr_19384_19403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19374 === (10))){
var inst_19366 = (state_19373[(2)]);
var state_19373__$1 = (function (){var statearr_19385 = state_19373;
(statearr_19385[(8)] = inst_19366);

return statearr_19385;
})();
var statearr_19386_19404 = state_19373__$1;
(statearr_19386_19404[(2)] = null);

(statearr_19386_19404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19374 === (8))){
var inst_19355 = (state_19373[(7)]);
var state_19373__$1 = state_19373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19373__$1,(11),out,inst_19355);
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
});})(c__6777__auto___19394,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19394,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19390 = [null,null,null,null,null,null,null,null,null];
(statearr_19390[(0)] = state_machine__6722__auto__);

(statearr_19390[(1)] = (1));

return statearr_19390;
});
var state_machine__6722__auto____1 = (function (state_19373){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19391){if((e19391 instanceof Object)){
var ex__6725__auto__ = e19391;
var statearr_19392_19405 = state_19373;
(statearr_19392_19405[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19406 = state_19373;
state_19373 = G__19406;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19373){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19394,out))
})();
var state__6779__auto__ = (function (){var statearr_19393 = f__6778__auto__.call(null);
(statearr_19393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19394);

return statearr_19393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19394,out))
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
return (function (state_19572){
var state_val_19573 = (state_19572[(1)]);
if((state_val_19573 === (7))){
var inst_19568 = (state_19572[(2)]);
var state_19572__$1 = state_19572;
var statearr_19574_19615 = state_19572__$1;
(statearr_19574_19615[(2)] = inst_19568);

(statearr_19574_19615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (20))){
var inst_19538 = (state_19572[(7)]);
var inst_19549 = (state_19572[(2)]);
var inst_19550 = cljs.core.next.call(null,inst_19538);
var inst_19524 = inst_19550;
var inst_19525 = null;
var inst_19526 = (0);
var inst_19527 = (0);
var state_19572__$1 = (function (){var statearr_19575 = state_19572;
(statearr_19575[(8)] = inst_19526);

(statearr_19575[(9)] = inst_19527);

(statearr_19575[(10)] = inst_19524);

(statearr_19575[(11)] = inst_19549);

(statearr_19575[(12)] = inst_19525);

return statearr_19575;
})();
var statearr_19576_19616 = state_19572__$1;
(statearr_19576_19616[(2)] = null);

(statearr_19576_19616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (1))){
var state_19572__$1 = state_19572;
var statearr_19577_19617 = state_19572__$1;
(statearr_19577_19617[(2)] = null);

(statearr_19577_19617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (4))){
var inst_19513 = (state_19572[(13)]);
var inst_19513__$1 = (state_19572[(2)]);
var inst_19514 = (inst_19513__$1 == null);
var state_19572__$1 = (function (){var statearr_19578 = state_19572;
(statearr_19578[(13)] = inst_19513__$1);

return statearr_19578;
})();
if(cljs.core.truth_(inst_19514)){
var statearr_19579_19618 = state_19572__$1;
(statearr_19579_19618[(1)] = (5));

} else {
var statearr_19580_19619 = state_19572__$1;
(statearr_19580_19619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (15))){
var state_19572__$1 = state_19572;
var statearr_19584_19620 = state_19572__$1;
(statearr_19584_19620[(2)] = null);

(statearr_19584_19620[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (21))){
var state_19572__$1 = state_19572;
var statearr_19585_19621 = state_19572__$1;
(statearr_19585_19621[(2)] = null);

(statearr_19585_19621[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (13))){
var inst_19526 = (state_19572[(8)]);
var inst_19527 = (state_19572[(9)]);
var inst_19524 = (state_19572[(10)]);
var inst_19525 = (state_19572[(12)]);
var inst_19534 = (state_19572[(2)]);
var inst_19535 = (inst_19527 + (1));
var tmp19581 = inst_19526;
var tmp19582 = inst_19524;
var tmp19583 = inst_19525;
var inst_19524__$1 = tmp19582;
var inst_19525__$1 = tmp19583;
var inst_19526__$1 = tmp19581;
var inst_19527__$1 = inst_19535;
var state_19572__$1 = (function (){var statearr_19586 = state_19572;
(statearr_19586[(14)] = inst_19534);

(statearr_19586[(8)] = inst_19526__$1);

(statearr_19586[(9)] = inst_19527__$1);

(statearr_19586[(10)] = inst_19524__$1);

(statearr_19586[(12)] = inst_19525__$1);

return statearr_19586;
})();
var statearr_19587_19622 = state_19572__$1;
(statearr_19587_19622[(2)] = null);

(statearr_19587_19622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (22))){
var state_19572__$1 = state_19572;
var statearr_19588_19623 = state_19572__$1;
(statearr_19588_19623[(2)] = null);

(statearr_19588_19623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (6))){
var inst_19513 = (state_19572[(13)]);
var inst_19522 = f.call(null,inst_19513);
var inst_19523 = cljs.core.seq.call(null,inst_19522);
var inst_19524 = inst_19523;
var inst_19525 = null;
var inst_19526 = (0);
var inst_19527 = (0);
var state_19572__$1 = (function (){var statearr_19589 = state_19572;
(statearr_19589[(8)] = inst_19526);

(statearr_19589[(9)] = inst_19527);

(statearr_19589[(10)] = inst_19524);

(statearr_19589[(12)] = inst_19525);

return statearr_19589;
})();
var statearr_19590_19624 = state_19572__$1;
(statearr_19590_19624[(2)] = null);

(statearr_19590_19624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (17))){
var inst_19538 = (state_19572[(7)]);
var inst_19542 = cljs.core.chunk_first.call(null,inst_19538);
var inst_19543 = cljs.core.chunk_rest.call(null,inst_19538);
var inst_19544 = cljs.core.count.call(null,inst_19542);
var inst_19524 = inst_19543;
var inst_19525 = inst_19542;
var inst_19526 = inst_19544;
var inst_19527 = (0);
var state_19572__$1 = (function (){var statearr_19591 = state_19572;
(statearr_19591[(8)] = inst_19526);

(statearr_19591[(9)] = inst_19527);

(statearr_19591[(10)] = inst_19524);

(statearr_19591[(12)] = inst_19525);

return statearr_19591;
})();
var statearr_19592_19625 = state_19572__$1;
(statearr_19592_19625[(2)] = null);

(statearr_19592_19625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (3))){
var inst_19570 = (state_19572[(2)]);
var state_19572__$1 = state_19572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19572__$1,inst_19570);
} else {
if((state_val_19573 === (12))){
var inst_19558 = (state_19572[(2)]);
var state_19572__$1 = state_19572;
var statearr_19593_19626 = state_19572__$1;
(statearr_19593_19626[(2)] = inst_19558);

(statearr_19593_19626[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (2))){
var state_19572__$1 = state_19572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19572__$1,(4),in$);
} else {
if((state_val_19573 === (23))){
var inst_19566 = (state_19572[(2)]);
var state_19572__$1 = state_19572;
var statearr_19594_19627 = state_19572__$1;
(statearr_19594_19627[(2)] = inst_19566);

(statearr_19594_19627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (19))){
var inst_19553 = (state_19572[(2)]);
var state_19572__$1 = state_19572;
var statearr_19595_19628 = state_19572__$1;
(statearr_19595_19628[(2)] = inst_19553);

(statearr_19595_19628[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (11))){
var inst_19538 = (state_19572[(7)]);
var inst_19524 = (state_19572[(10)]);
var inst_19538__$1 = cljs.core.seq.call(null,inst_19524);
var state_19572__$1 = (function (){var statearr_19596 = state_19572;
(statearr_19596[(7)] = inst_19538__$1);

return statearr_19596;
})();
if(inst_19538__$1){
var statearr_19597_19629 = state_19572__$1;
(statearr_19597_19629[(1)] = (14));

} else {
var statearr_19598_19630 = state_19572__$1;
(statearr_19598_19630[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (9))){
var inst_19560 = (state_19572[(2)]);
var inst_19561 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19572__$1 = (function (){var statearr_19599 = state_19572;
(statearr_19599[(15)] = inst_19560);

return statearr_19599;
})();
if(cljs.core.truth_(inst_19561)){
var statearr_19600_19631 = state_19572__$1;
(statearr_19600_19631[(1)] = (21));

} else {
var statearr_19601_19632 = state_19572__$1;
(statearr_19601_19632[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (5))){
var inst_19516 = cljs.core.async.close_BANG_.call(null,out);
var state_19572__$1 = state_19572;
var statearr_19602_19633 = state_19572__$1;
(statearr_19602_19633[(2)] = inst_19516);

(statearr_19602_19633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (14))){
var inst_19538 = (state_19572[(7)]);
var inst_19540 = cljs.core.chunked_seq_QMARK_.call(null,inst_19538);
var state_19572__$1 = state_19572;
if(inst_19540){
var statearr_19603_19634 = state_19572__$1;
(statearr_19603_19634[(1)] = (17));

} else {
var statearr_19604_19635 = state_19572__$1;
(statearr_19604_19635[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (16))){
var inst_19556 = (state_19572[(2)]);
var state_19572__$1 = state_19572;
var statearr_19605_19636 = state_19572__$1;
(statearr_19605_19636[(2)] = inst_19556);

(statearr_19605_19636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19573 === (10))){
var inst_19527 = (state_19572[(9)]);
var inst_19525 = (state_19572[(12)]);
var inst_19532 = cljs.core._nth.call(null,inst_19525,inst_19527);
var state_19572__$1 = state_19572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19572__$1,(13),out,inst_19532);
} else {
if((state_val_19573 === (18))){
var inst_19538 = (state_19572[(7)]);
var inst_19547 = cljs.core.first.call(null,inst_19538);
var state_19572__$1 = state_19572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19572__$1,(20),out,inst_19547);
} else {
if((state_val_19573 === (8))){
var inst_19526 = (state_19572[(8)]);
var inst_19527 = (state_19572[(9)]);
var inst_19529 = (inst_19527 < inst_19526);
var inst_19530 = inst_19529;
var state_19572__$1 = state_19572;
if(cljs.core.truth_(inst_19530)){
var statearr_19606_19637 = state_19572__$1;
(statearr_19606_19637[(1)] = (10));

} else {
var statearr_19607_19638 = state_19572__$1;
(statearr_19607_19638[(1)] = (11));

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
var statearr_19611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19611[(0)] = state_machine__6722__auto__);

(statearr_19611[(1)] = (1));

return statearr_19611;
});
var state_machine__6722__auto____1 = (function (state_19572){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19612){if((e19612 instanceof Object)){
var ex__6725__auto__ = e19612;
var statearr_19613_19639 = state_19572;
(statearr_19613_19639[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19640 = state_19572;
state_19572 = G__19640;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19572){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__))
})();
var state__6779__auto__ = (function (){var statearr_19614 = f__6778__auto__.call(null);
(statearr_19614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_19614;
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
var c__6777__auto___19737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19737,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19737,out){
return (function (state_19712){
var state_val_19713 = (state_19712[(1)]);
if((state_val_19713 === (7))){
var inst_19707 = (state_19712[(2)]);
var state_19712__$1 = state_19712;
var statearr_19714_19738 = state_19712__$1;
(statearr_19714_19738[(2)] = inst_19707);

(statearr_19714_19738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19713 === (1))){
var inst_19689 = null;
var state_19712__$1 = (function (){var statearr_19715 = state_19712;
(statearr_19715[(7)] = inst_19689);

return statearr_19715;
})();
var statearr_19716_19739 = state_19712__$1;
(statearr_19716_19739[(2)] = null);

(statearr_19716_19739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19713 === (4))){
var inst_19692 = (state_19712[(8)]);
var inst_19692__$1 = (state_19712[(2)]);
var inst_19693 = (inst_19692__$1 == null);
var inst_19694 = cljs.core.not.call(null,inst_19693);
var state_19712__$1 = (function (){var statearr_19717 = state_19712;
(statearr_19717[(8)] = inst_19692__$1);

return statearr_19717;
})();
if(inst_19694){
var statearr_19718_19740 = state_19712__$1;
(statearr_19718_19740[(1)] = (5));

} else {
var statearr_19719_19741 = state_19712__$1;
(statearr_19719_19741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19713 === (6))){
var state_19712__$1 = state_19712;
var statearr_19720_19742 = state_19712__$1;
(statearr_19720_19742[(2)] = null);

(statearr_19720_19742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19713 === (3))){
var inst_19709 = (state_19712[(2)]);
var inst_19710 = cljs.core.async.close_BANG_.call(null,out);
var state_19712__$1 = (function (){var statearr_19721 = state_19712;
(statearr_19721[(9)] = inst_19709);

return statearr_19721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19712__$1,inst_19710);
} else {
if((state_val_19713 === (2))){
var state_19712__$1 = state_19712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19712__$1,(4),ch);
} else {
if((state_val_19713 === (11))){
var inst_19692 = (state_19712[(8)]);
var inst_19701 = (state_19712[(2)]);
var inst_19689 = inst_19692;
var state_19712__$1 = (function (){var statearr_19722 = state_19712;
(statearr_19722[(7)] = inst_19689);

(statearr_19722[(10)] = inst_19701);

return statearr_19722;
})();
var statearr_19723_19743 = state_19712__$1;
(statearr_19723_19743[(2)] = null);

(statearr_19723_19743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19713 === (9))){
var inst_19692 = (state_19712[(8)]);
var state_19712__$1 = state_19712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19712__$1,(11),out,inst_19692);
} else {
if((state_val_19713 === (5))){
var inst_19692 = (state_19712[(8)]);
var inst_19689 = (state_19712[(7)]);
var inst_19696 = cljs.core._EQ_.call(null,inst_19692,inst_19689);
var state_19712__$1 = state_19712;
if(inst_19696){
var statearr_19725_19744 = state_19712__$1;
(statearr_19725_19744[(1)] = (8));

} else {
var statearr_19726_19745 = state_19712__$1;
(statearr_19726_19745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19713 === (10))){
var inst_19704 = (state_19712[(2)]);
var state_19712__$1 = state_19712;
var statearr_19727_19746 = state_19712__$1;
(statearr_19727_19746[(2)] = inst_19704);

(statearr_19727_19746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19713 === (8))){
var inst_19689 = (state_19712[(7)]);
var tmp19724 = inst_19689;
var inst_19689__$1 = tmp19724;
var state_19712__$1 = (function (){var statearr_19728 = state_19712;
(statearr_19728[(7)] = inst_19689__$1);

return statearr_19728;
})();
var statearr_19729_19747 = state_19712__$1;
(statearr_19729_19747[(2)] = null);

(statearr_19729_19747[(1)] = (2));


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
});})(c__6777__auto___19737,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19737,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19733 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19733[(0)] = state_machine__6722__auto__);

(statearr_19733[(1)] = (1));

return statearr_19733;
});
var state_machine__6722__auto____1 = (function (state_19712){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19734){if((e19734 instanceof Object)){
var ex__6725__auto__ = e19734;
var statearr_19735_19748 = state_19712;
(statearr_19735_19748[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19749 = state_19712;
state_19712 = G__19749;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19712){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19737,out))
})();
var state__6779__auto__ = (function (){var statearr_19736 = f__6778__auto__.call(null);
(statearr_19736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19737);

return statearr_19736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19737,out))
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
var c__6777__auto___19884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19884,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19884,out){
return (function (state_19854){
var state_val_19855 = (state_19854[(1)]);
if((state_val_19855 === (7))){
var inst_19850 = (state_19854[(2)]);
var state_19854__$1 = state_19854;
var statearr_19856_19885 = state_19854__$1;
(statearr_19856_19885[(2)] = inst_19850);

(statearr_19856_19885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19855 === (1))){
var inst_19817 = (new Array(n));
var inst_19818 = inst_19817;
var inst_19819 = (0);
var state_19854__$1 = (function (){var statearr_19857 = state_19854;
(statearr_19857[(7)] = inst_19818);

(statearr_19857[(8)] = inst_19819);

return statearr_19857;
})();
var statearr_19858_19886 = state_19854__$1;
(statearr_19858_19886[(2)] = null);

(statearr_19858_19886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19855 === (4))){
var inst_19822 = (state_19854[(9)]);
var inst_19822__$1 = (state_19854[(2)]);
var inst_19823 = (inst_19822__$1 == null);
var inst_19824 = cljs.core.not.call(null,inst_19823);
var state_19854__$1 = (function (){var statearr_19859 = state_19854;
(statearr_19859[(9)] = inst_19822__$1);

return statearr_19859;
})();
if(inst_19824){
var statearr_19860_19887 = state_19854__$1;
(statearr_19860_19887[(1)] = (5));

} else {
var statearr_19861_19888 = state_19854__$1;
(statearr_19861_19888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19855 === (15))){
var inst_19844 = (state_19854[(2)]);
var state_19854__$1 = state_19854;
var statearr_19862_19889 = state_19854__$1;
(statearr_19862_19889[(2)] = inst_19844);

(statearr_19862_19889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19855 === (13))){
var state_19854__$1 = state_19854;
var statearr_19863_19890 = state_19854__$1;
(statearr_19863_19890[(2)] = null);

(statearr_19863_19890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19855 === (6))){
var inst_19819 = (state_19854[(8)]);
var inst_19840 = (inst_19819 > (0));
var state_19854__$1 = state_19854;
if(cljs.core.truth_(inst_19840)){
var statearr_19864_19891 = state_19854__$1;
(statearr_19864_19891[(1)] = (12));

} else {
var statearr_19865_19892 = state_19854__$1;
(statearr_19865_19892[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19855 === (3))){
var inst_19852 = (state_19854[(2)]);
var state_19854__$1 = state_19854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19854__$1,inst_19852);
} else {
if((state_val_19855 === (12))){
var inst_19818 = (state_19854[(7)]);
var inst_19842 = cljs.core.vec.call(null,inst_19818);
var state_19854__$1 = state_19854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19854__$1,(15),out,inst_19842);
} else {
if((state_val_19855 === (2))){
var state_19854__$1 = state_19854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19854__$1,(4),ch);
} else {
if((state_val_19855 === (11))){
var inst_19834 = (state_19854[(2)]);
var inst_19835 = (new Array(n));
var inst_19818 = inst_19835;
var inst_19819 = (0);
var state_19854__$1 = (function (){var statearr_19866 = state_19854;
(statearr_19866[(7)] = inst_19818);

(statearr_19866[(10)] = inst_19834);

(statearr_19866[(8)] = inst_19819);

return statearr_19866;
})();
var statearr_19867_19893 = state_19854__$1;
(statearr_19867_19893[(2)] = null);

(statearr_19867_19893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19855 === (9))){
var inst_19818 = (state_19854[(7)]);
var inst_19832 = cljs.core.vec.call(null,inst_19818);
var state_19854__$1 = state_19854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19854__$1,(11),out,inst_19832);
} else {
if((state_val_19855 === (5))){
var inst_19818 = (state_19854[(7)]);
var inst_19822 = (state_19854[(9)]);
var inst_19827 = (state_19854[(11)]);
var inst_19819 = (state_19854[(8)]);
var inst_19826 = (inst_19818[inst_19819] = inst_19822);
var inst_19827__$1 = (inst_19819 + (1));
var inst_19828 = (inst_19827__$1 < n);
var state_19854__$1 = (function (){var statearr_19868 = state_19854;
(statearr_19868[(12)] = inst_19826);

(statearr_19868[(11)] = inst_19827__$1);

return statearr_19868;
})();
if(cljs.core.truth_(inst_19828)){
var statearr_19869_19894 = state_19854__$1;
(statearr_19869_19894[(1)] = (8));

} else {
var statearr_19870_19895 = state_19854__$1;
(statearr_19870_19895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19855 === (14))){
var inst_19847 = (state_19854[(2)]);
var inst_19848 = cljs.core.async.close_BANG_.call(null,out);
var state_19854__$1 = (function (){var statearr_19872 = state_19854;
(statearr_19872[(13)] = inst_19847);

return statearr_19872;
})();
var statearr_19873_19896 = state_19854__$1;
(statearr_19873_19896[(2)] = inst_19848);

(statearr_19873_19896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19855 === (10))){
var inst_19838 = (state_19854[(2)]);
var state_19854__$1 = state_19854;
var statearr_19874_19897 = state_19854__$1;
(statearr_19874_19897[(2)] = inst_19838);

(statearr_19874_19897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19855 === (8))){
var inst_19818 = (state_19854[(7)]);
var inst_19827 = (state_19854[(11)]);
var tmp19871 = inst_19818;
var inst_19818__$1 = tmp19871;
var inst_19819 = inst_19827;
var state_19854__$1 = (function (){var statearr_19875 = state_19854;
(statearr_19875[(7)] = inst_19818__$1);

(statearr_19875[(8)] = inst_19819);

return statearr_19875;
})();
var statearr_19876_19898 = state_19854__$1;
(statearr_19876_19898[(2)] = null);

(statearr_19876_19898[(1)] = (2));


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
});})(c__6777__auto___19884,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19884,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19880[(0)] = state_machine__6722__auto__);

(statearr_19880[(1)] = (1));

return statearr_19880;
});
var state_machine__6722__auto____1 = (function (state_19854){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19881){if((e19881 instanceof Object)){
var ex__6725__auto__ = e19881;
var statearr_19882_19899 = state_19854;
(statearr_19882_19899[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19900 = state_19854;
state_19854 = G__19900;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19854){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19884,out))
})();
var state__6779__auto__ = (function (){var statearr_19883 = f__6778__auto__.call(null);
(statearr_19883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19884);

return statearr_19883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19884,out))
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
var c__6777__auto___20043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___20043,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___20043,out){
return (function (state_20013){
var state_val_20014 = (state_20013[(1)]);
if((state_val_20014 === (7))){
var inst_20009 = (state_20013[(2)]);
var state_20013__$1 = state_20013;
var statearr_20015_20044 = state_20013__$1;
(statearr_20015_20044[(2)] = inst_20009);

(statearr_20015_20044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (1))){
var inst_19972 = [];
var inst_19973 = inst_19972;
var inst_19974 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20013__$1 = (function (){var statearr_20016 = state_20013;
(statearr_20016[(7)] = inst_19973);

(statearr_20016[(8)] = inst_19974);

return statearr_20016;
})();
var statearr_20017_20045 = state_20013__$1;
(statearr_20017_20045[(2)] = null);

(statearr_20017_20045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (4))){
var inst_19977 = (state_20013[(9)]);
var inst_19977__$1 = (state_20013[(2)]);
var inst_19978 = (inst_19977__$1 == null);
var inst_19979 = cljs.core.not.call(null,inst_19978);
var state_20013__$1 = (function (){var statearr_20018 = state_20013;
(statearr_20018[(9)] = inst_19977__$1);

return statearr_20018;
})();
if(inst_19979){
var statearr_20019_20046 = state_20013__$1;
(statearr_20019_20046[(1)] = (5));

} else {
var statearr_20020_20047 = state_20013__$1;
(statearr_20020_20047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (15))){
var inst_20003 = (state_20013[(2)]);
var state_20013__$1 = state_20013;
var statearr_20021_20048 = state_20013__$1;
(statearr_20021_20048[(2)] = inst_20003);

(statearr_20021_20048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (13))){
var state_20013__$1 = state_20013;
var statearr_20022_20049 = state_20013__$1;
(statearr_20022_20049[(2)] = null);

(statearr_20022_20049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (6))){
var inst_19973 = (state_20013[(7)]);
var inst_19998 = inst_19973.length;
var inst_19999 = (inst_19998 > (0));
var state_20013__$1 = state_20013;
if(cljs.core.truth_(inst_19999)){
var statearr_20023_20050 = state_20013__$1;
(statearr_20023_20050[(1)] = (12));

} else {
var statearr_20024_20051 = state_20013__$1;
(statearr_20024_20051[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (3))){
var inst_20011 = (state_20013[(2)]);
var state_20013__$1 = state_20013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20013__$1,inst_20011);
} else {
if((state_val_20014 === (12))){
var inst_19973 = (state_20013[(7)]);
var inst_20001 = cljs.core.vec.call(null,inst_19973);
var state_20013__$1 = state_20013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20013__$1,(15),out,inst_20001);
} else {
if((state_val_20014 === (2))){
var state_20013__$1 = state_20013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20013__$1,(4),ch);
} else {
if((state_val_20014 === (11))){
var inst_19977 = (state_20013[(9)]);
var inst_19981 = (state_20013[(10)]);
var inst_19991 = (state_20013[(2)]);
var inst_19992 = [];
var inst_19993 = inst_19992.push(inst_19977);
var inst_19973 = inst_19992;
var inst_19974 = inst_19981;
var state_20013__$1 = (function (){var statearr_20025 = state_20013;
(statearr_20025[(11)] = inst_19991);

(statearr_20025[(7)] = inst_19973);

(statearr_20025[(12)] = inst_19993);

(statearr_20025[(8)] = inst_19974);

return statearr_20025;
})();
var statearr_20026_20052 = state_20013__$1;
(statearr_20026_20052[(2)] = null);

(statearr_20026_20052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (9))){
var inst_19973 = (state_20013[(7)]);
var inst_19989 = cljs.core.vec.call(null,inst_19973);
var state_20013__$1 = state_20013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20013__$1,(11),out,inst_19989);
} else {
if((state_val_20014 === (5))){
var inst_19974 = (state_20013[(8)]);
var inst_19977 = (state_20013[(9)]);
var inst_19981 = (state_20013[(10)]);
var inst_19981__$1 = f.call(null,inst_19977);
var inst_19982 = cljs.core._EQ_.call(null,inst_19981__$1,inst_19974);
var inst_19983 = cljs.core.keyword_identical_QMARK_.call(null,inst_19974,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19984 = (inst_19982) || (inst_19983);
var state_20013__$1 = (function (){var statearr_20027 = state_20013;
(statearr_20027[(10)] = inst_19981__$1);

return statearr_20027;
})();
if(cljs.core.truth_(inst_19984)){
var statearr_20028_20053 = state_20013__$1;
(statearr_20028_20053[(1)] = (8));

} else {
var statearr_20029_20054 = state_20013__$1;
(statearr_20029_20054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (14))){
var inst_20006 = (state_20013[(2)]);
var inst_20007 = cljs.core.async.close_BANG_.call(null,out);
var state_20013__$1 = (function (){var statearr_20031 = state_20013;
(statearr_20031[(13)] = inst_20006);

return statearr_20031;
})();
var statearr_20032_20055 = state_20013__$1;
(statearr_20032_20055[(2)] = inst_20007);

(statearr_20032_20055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (10))){
var inst_19996 = (state_20013[(2)]);
var state_20013__$1 = state_20013;
var statearr_20033_20056 = state_20013__$1;
(statearr_20033_20056[(2)] = inst_19996);

(statearr_20033_20056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (8))){
var inst_19973 = (state_20013[(7)]);
var inst_19977 = (state_20013[(9)]);
var inst_19981 = (state_20013[(10)]);
var inst_19986 = inst_19973.push(inst_19977);
var tmp20030 = inst_19973;
var inst_19973__$1 = tmp20030;
var inst_19974 = inst_19981;
var state_20013__$1 = (function (){var statearr_20034 = state_20013;
(statearr_20034[(7)] = inst_19973__$1);

(statearr_20034[(14)] = inst_19986);

(statearr_20034[(8)] = inst_19974);

return statearr_20034;
})();
var statearr_20035_20057 = state_20013__$1;
(statearr_20035_20057[(2)] = null);

(statearr_20035_20057[(1)] = (2));


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
});})(c__6777__auto___20043,out))
;
return ((function (switch__6721__auto__,c__6777__auto___20043,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_20039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20039[(0)] = state_machine__6722__auto__);

(statearr_20039[(1)] = (1));

return statearr_20039;
});
var state_machine__6722__auto____1 = (function (state_20013){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_20013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e20040){if((e20040 instanceof Object)){
var ex__6725__auto__ = e20040;
var statearr_20041_20058 = state_20013;
(statearr_20041_20058[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20059 = state_20013;
state_20013 = G__20059;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_20013){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_20013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___20043,out))
})();
var state__6779__auto__ = (function (){var statearr_20042 = f__6778__auto__.call(null);
(statearr_20042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___20043);

return statearr_20042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___20043,out))
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
