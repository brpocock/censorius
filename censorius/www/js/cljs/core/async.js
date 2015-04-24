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
if(typeof cljs.core.async.t17936 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17936 = (function (f,fn_handler,meta17937){
this.f = f;
this.fn_handler = fn_handler;
this.meta17937 = meta17937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17936.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17938){
var self__ = this;
var _17938__$1 = this;
return self__.meta17937;
});

cljs.core.async.t17936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17938,meta17937__$1){
var self__ = this;
var _17938__$1 = this;
return (new cljs.core.async.t17936(self__.f,self__.fn_handler,meta17937__$1));
});

cljs.core.async.t17936.cljs$lang$type = true;

cljs.core.async.t17936.cljs$lang$ctorStr = "cljs.core.async/t17936";

cljs.core.async.t17936.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t17936");
});

cljs.core.async.__GT_t17936 = (function __GT_t17936(f__$1,fn_handler__$1,meta17937){
return (new cljs.core.async.t17936(f__$1,fn_handler__$1,meta17937));
});

}

return (new cljs.core.async.t17936(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var G__17940 = buff;
if(G__17940){
var bit__4480__auto__ = null;
if(cljs.core.truth_((function (){var or__3799__auto__ = bit__4480__auto__;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return G__17940.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17940.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17940);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17940);
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
var val_17941 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17941);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17941,ret){
return (function (){
return fn1.call(null,val_17941);
});})(val_17941,ret))
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
var n__4686__auto___17942 = n;
var x_17943 = (0);
while(true){
if((x_17943 < n__4686__auto___17942)){
(a[x_17943] = (0));

var G__17944 = (x_17943 + (1));
x_17943 = G__17944;
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

var G__17945 = (i + (1));
i = G__17945;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t17949 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17949 = (function (flag,alt_flag,meta17950){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17950 = meta17950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17949.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t17949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t17949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17951){
var self__ = this;
var _17951__$1 = this;
return self__.meta17950;
});})(flag))
;

cljs.core.async.t17949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17951,meta17950__$1){
var self__ = this;
var _17951__$1 = this;
return (new cljs.core.async.t17949(self__.flag,self__.alt_flag,meta17950__$1));
});})(flag))
;

cljs.core.async.t17949.cljs$lang$type = true;

cljs.core.async.t17949.cljs$lang$ctorStr = "cljs.core.async/t17949";

cljs.core.async.t17949.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t17949");
});})(flag))
;

cljs.core.async.__GT_t17949 = ((function (flag){
return (function __GT_t17949(flag__$1,alt_flag__$1,meta17950){
return (new cljs.core.async.t17949(flag__$1,alt_flag__$1,meta17950));
});})(flag))
;

}

return (new cljs.core.async.t17949(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t17955 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17955 = (function (cb,flag,alt_handler,meta17956){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17956 = meta17956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17955.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t17955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t17955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17957){
var self__ = this;
var _17957__$1 = this;
return self__.meta17956;
});

cljs.core.async.t17955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17957,meta17956__$1){
var self__ = this;
var _17957__$1 = this;
return (new cljs.core.async.t17955(self__.cb,self__.flag,self__.alt_handler,meta17956__$1));
});

cljs.core.async.t17955.cljs$lang$type = true;

cljs.core.async.t17955.cljs$lang$ctorStr = "cljs.core.async/t17955";

cljs.core.async.t17955.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t17955");
});

cljs.core.async.__GT_t17955 = (function __GT_t17955(cb__$1,flag__$1,alt_handler__$1,meta17956){
return (new cljs.core.async.t17955(cb__$1,flag__$1,alt_handler__$1,meta17956));
});

}

return (new cljs.core.async.t17955(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
return (function (p1__17958_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17958_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17959_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17959_SHARP_,port], null));
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
var G__17960 = (i + (1));
i = G__17960;
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
var alts_BANG___delegate = function (ports,p__17961){
var map__17963 = p__17961;
var map__17963__$1 = ((cljs.core.seq_QMARK_.call(null,map__17963))?cljs.core.apply.call(null,cljs.core.hash_map,map__17963):map__17963);
var opts = map__17963__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__17961 = null;
if (arguments.length > 1) {
var G__17964__i = 0, G__17964__a = new Array(arguments.length -  1);
while (G__17964__i < G__17964__a.length) {G__17964__a[G__17964__i] = arguments[G__17964__i + 1]; ++G__17964__i;}
  p__17961 = new cljs.core.IndexedSeq(G__17964__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__17961);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17965){
var ports = cljs.core.first(arglist__17965);
var p__17961 = cljs.core.rest(arglist__17965);
return alts_BANG___delegate(ports,p__17961);
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
var c__6861__auto___18060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___18060){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___18060){
return (function (state_18036){
var state_val_18037 = (state_18036[(1)]);
if((state_val_18037 === (7))){
var inst_18032 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
var statearr_18038_18061 = state_18036__$1;
(statearr_18038_18061[(2)] = inst_18032);

(statearr_18038_18061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (1))){
var state_18036__$1 = state_18036;
var statearr_18039_18062 = state_18036__$1;
(statearr_18039_18062[(2)] = null);

(statearr_18039_18062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (4))){
var inst_18015 = (state_18036[(7)]);
var inst_18015__$1 = (state_18036[(2)]);
var inst_18016 = (inst_18015__$1 == null);
var state_18036__$1 = (function (){var statearr_18040 = state_18036;
(statearr_18040[(7)] = inst_18015__$1);

return statearr_18040;
})();
if(cljs.core.truth_(inst_18016)){
var statearr_18041_18063 = state_18036__$1;
(statearr_18041_18063[(1)] = (5));

} else {
var statearr_18042_18064 = state_18036__$1;
(statearr_18042_18064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (13))){
var state_18036__$1 = state_18036;
var statearr_18043_18065 = state_18036__$1;
(statearr_18043_18065[(2)] = null);

(statearr_18043_18065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (6))){
var inst_18015 = (state_18036[(7)]);
var state_18036__$1 = state_18036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18036__$1,(11),to,inst_18015);
} else {
if((state_val_18037 === (3))){
var inst_18034 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18036__$1,inst_18034);
} else {
if((state_val_18037 === (12))){
var state_18036__$1 = state_18036;
var statearr_18044_18066 = state_18036__$1;
(statearr_18044_18066[(2)] = null);

(statearr_18044_18066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (2))){
var state_18036__$1 = state_18036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18036__$1,(4),from);
} else {
if((state_val_18037 === (11))){
var inst_18025 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
if(cljs.core.truth_(inst_18025)){
var statearr_18045_18067 = state_18036__$1;
(statearr_18045_18067[(1)] = (12));

} else {
var statearr_18046_18068 = state_18036__$1;
(statearr_18046_18068[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (9))){
var state_18036__$1 = state_18036;
var statearr_18047_18069 = state_18036__$1;
(statearr_18047_18069[(2)] = null);

(statearr_18047_18069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (5))){
var state_18036__$1 = state_18036;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18048_18070 = state_18036__$1;
(statearr_18048_18070[(1)] = (8));

} else {
var statearr_18049_18071 = state_18036__$1;
(statearr_18049_18071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (14))){
var inst_18030 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
var statearr_18050_18072 = state_18036__$1;
(statearr_18050_18072[(2)] = inst_18030);

(statearr_18050_18072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (10))){
var inst_18022 = (state_18036[(2)]);
var state_18036__$1 = state_18036;
var statearr_18051_18073 = state_18036__$1;
(statearr_18051_18073[(2)] = inst_18022);

(statearr_18051_18073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18037 === (8))){
var inst_18019 = cljs.core.async.close_BANG_.call(null,to);
var state_18036__$1 = state_18036;
var statearr_18052_18074 = state_18036__$1;
(statearr_18052_18074[(2)] = inst_18019);

(statearr_18052_18074[(1)] = (10));


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
});})(c__6861__auto___18060))
;
return ((function (switch__6805__auto__,c__6861__auto___18060){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18056 = [null,null,null,null,null,null,null,null];
(statearr_18056[(0)] = state_machine__6806__auto__);

(statearr_18056[(1)] = (1));

return statearr_18056;
});
var state_machine__6806__auto____1 = (function (state_18036){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18057){if((e18057 instanceof Object)){
var ex__6809__auto__ = e18057;
var statearr_18058_18075 = state_18036;
(statearr_18058_18075[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18076 = state_18036;
state_18036 = G__18076;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18036){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___18060))
})();
var state__6863__auto__ = (function (){var statearr_18059 = f__6862__auto__.call(null);
(statearr_18059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___18060);

return statearr_18059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___18060))
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
return (function (p__18260){
var vec__18261 = p__18260;
var v = cljs.core.nth.call(null,vec__18261,(0),null);
var p = cljs.core.nth.call(null,vec__18261,(1),null);
var job = vec__18261;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6861__auto___18443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___18443,res,vec__18261,v,p,job,jobs,results){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___18443,res,vec__18261,v,p,job,jobs,results){
return (function (state_18266){
var state_val_18267 = (state_18266[(1)]);
if((state_val_18267 === (2))){
var inst_18263 = (state_18266[(2)]);
var inst_18264 = cljs.core.async.close_BANG_.call(null,res);
var state_18266__$1 = (function (){var statearr_18268 = state_18266;
(statearr_18268[(7)] = inst_18263);

return statearr_18268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18266__$1,inst_18264);
} else {
if((state_val_18267 === (1))){
var state_18266__$1 = state_18266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18266__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6861__auto___18443,res,vec__18261,v,p,job,jobs,results))
;
return ((function (switch__6805__auto__,c__6861__auto___18443,res,vec__18261,v,p,job,jobs,results){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18272 = [null,null,null,null,null,null,null,null];
(statearr_18272[(0)] = state_machine__6806__auto__);

(statearr_18272[(1)] = (1));

return statearr_18272;
});
var state_machine__6806__auto____1 = (function (state_18266){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18273){if((e18273 instanceof Object)){
var ex__6809__auto__ = e18273;
var statearr_18274_18444 = state_18266;
(statearr_18274_18444[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18445 = state_18266;
state_18266 = G__18445;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18266){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___18443,res,vec__18261,v,p,job,jobs,results))
})();
var state__6863__auto__ = (function (){var statearr_18275 = f__6862__auto__.call(null);
(statearr_18275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___18443);

return statearr_18275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___18443,res,vec__18261,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18276){
var vec__18277 = p__18276;
var v = cljs.core.nth.call(null,vec__18277,(0),null);
var p = cljs.core.nth.call(null,vec__18277,(1),null);
var job = vec__18277;
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
var n__4686__auto___18446 = n;
var __18447 = (0);
while(true){
if((__18447 < n__4686__auto___18446)){
var G__18278_18448 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18278_18448) {
case "async":
var c__6861__auto___18450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18447,c__6861__auto___18450,G__18278_18448,n__4686__auto___18446,jobs,results,process,async){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (__18447,c__6861__auto___18450,G__18278_18448,n__4686__auto___18446,jobs,results,process,async){
return (function (state_18291){
var state_val_18292 = (state_18291[(1)]);
if((state_val_18292 === (7))){
var inst_18287 = (state_18291[(2)]);
var state_18291__$1 = state_18291;
var statearr_18293_18451 = state_18291__$1;
(statearr_18293_18451[(2)] = inst_18287);

(statearr_18293_18451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18292 === (6))){
var state_18291__$1 = state_18291;
var statearr_18294_18452 = state_18291__$1;
(statearr_18294_18452[(2)] = null);

(statearr_18294_18452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18292 === (5))){
var state_18291__$1 = state_18291;
var statearr_18295_18453 = state_18291__$1;
(statearr_18295_18453[(2)] = null);

(statearr_18295_18453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18292 === (4))){
var inst_18281 = (state_18291[(2)]);
var inst_18282 = async.call(null,inst_18281);
var state_18291__$1 = state_18291;
if(cljs.core.truth_(inst_18282)){
var statearr_18296_18454 = state_18291__$1;
(statearr_18296_18454[(1)] = (5));

} else {
var statearr_18297_18455 = state_18291__$1;
(statearr_18297_18455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18292 === (3))){
var inst_18289 = (state_18291[(2)]);
var state_18291__$1 = state_18291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18291__$1,inst_18289);
} else {
if((state_val_18292 === (2))){
var state_18291__$1 = state_18291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18291__$1,(4),jobs);
} else {
if((state_val_18292 === (1))){
var state_18291__$1 = state_18291;
var statearr_18298_18456 = state_18291__$1;
(statearr_18298_18456[(2)] = null);

(statearr_18298_18456[(1)] = (2));


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
});})(__18447,c__6861__auto___18450,G__18278_18448,n__4686__auto___18446,jobs,results,process,async))
;
return ((function (__18447,switch__6805__auto__,c__6861__auto___18450,G__18278_18448,n__4686__auto___18446,jobs,results,process,async){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18302 = [null,null,null,null,null,null,null];
(statearr_18302[(0)] = state_machine__6806__auto__);

(statearr_18302[(1)] = (1));

return statearr_18302;
});
var state_machine__6806__auto____1 = (function (state_18291){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18303){if((e18303 instanceof Object)){
var ex__6809__auto__ = e18303;
var statearr_18304_18457 = state_18291;
(statearr_18304_18457[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18458 = state_18291;
state_18291 = G__18458;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18291){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(__18447,switch__6805__auto__,c__6861__auto___18450,G__18278_18448,n__4686__auto___18446,jobs,results,process,async))
})();
var state__6863__auto__ = (function (){var statearr_18305 = f__6862__auto__.call(null);
(statearr_18305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___18450);

return statearr_18305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(__18447,c__6861__auto___18450,G__18278_18448,n__4686__auto___18446,jobs,results,process,async))
);


break;
case "compute":
var c__6861__auto___18459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18447,c__6861__auto___18459,G__18278_18448,n__4686__auto___18446,jobs,results,process,async){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (__18447,c__6861__auto___18459,G__18278_18448,n__4686__auto___18446,jobs,results,process,async){
return (function (state_18318){
var state_val_18319 = (state_18318[(1)]);
if((state_val_18319 === (7))){
var inst_18314 = (state_18318[(2)]);
var state_18318__$1 = state_18318;
var statearr_18320_18460 = state_18318__$1;
(statearr_18320_18460[(2)] = inst_18314);

(statearr_18320_18460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (6))){
var state_18318__$1 = state_18318;
var statearr_18321_18461 = state_18318__$1;
(statearr_18321_18461[(2)] = null);

(statearr_18321_18461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (5))){
var state_18318__$1 = state_18318;
var statearr_18322_18462 = state_18318__$1;
(statearr_18322_18462[(2)] = null);

(statearr_18322_18462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (4))){
var inst_18308 = (state_18318[(2)]);
var inst_18309 = process.call(null,inst_18308);
var state_18318__$1 = state_18318;
if(cljs.core.truth_(inst_18309)){
var statearr_18323_18463 = state_18318__$1;
(statearr_18323_18463[(1)] = (5));

} else {
var statearr_18324_18464 = state_18318__$1;
(statearr_18324_18464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (3))){
var inst_18316 = (state_18318[(2)]);
var state_18318__$1 = state_18318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18318__$1,inst_18316);
} else {
if((state_val_18319 === (2))){
var state_18318__$1 = state_18318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18318__$1,(4),jobs);
} else {
if((state_val_18319 === (1))){
var state_18318__$1 = state_18318;
var statearr_18325_18465 = state_18318__$1;
(statearr_18325_18465[(2)] = null);

(statearr_18325_18465[(1)] = (2));


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
});})(__18447,c__6861__auto___18459,G__18278_18448,n__4686__auto___18446,jobs,results,process,async))
;
return ((function (__18447,switch__6805__auto__,c__6861__auto___18459,G__18278_18448,n__4686__auto___18446,jobs,results,process,async){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18329 = [null,null,null,null,null,null,null];
(statearr_18329[(0)] = state_machine__6806__auto__);

(statearr_18329[(1)] = (1));

return statearr_18329;
});
var state_machine__6806__auto____1 = (function (state_18318){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18330){if((e18330 instanceof Object)){
var ex__6809__auto__ = e18330;
var statearr_18331_18466 = state_18318;
(statearr_18331_18466[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18467 = state_18318;
state_18318 = G__18467;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18318){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(__18447,switch__6805__auto__,c__6861__auto___18459,G__18278_18448,n__4686__auto___18446,jobs,results,process,async))
})();
var state__6863__auto__ = (function (){var statearr_18332 = f__6862__auto__.call(null);
(statearr_18332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___18459);

return statearr_18332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(__18447,c__6861__auto___18459,G__18278_18448,n__4686__auto___18446,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18468 = (__18447 + (1));
__18447 = G__18468;
continue;
} else {
}
break;
}

var c__6861__auto___18469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___18469,jobs,results,process,async){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___18469,jobs,results,process,async){
return (function (state_18354){
var state_val_18355 = (state_18354[(1)]);
if((state_val_18355 === (9))){
var inst_18347 = (state_18354[(2)]);
var state_18354__$1 = (function (){var statearr_18356 = state_18354;
(statearr_18356[(7)] = inst_18347);

return statearr_18356;
})();
var statearr_18357_18470 = state_18354__$1;
(statearr_18357_18470[(2)] = null);

(statearr_18357_18470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18355 === (8))){
var inst_18340 = (state_18354[(8)]);
var inst_18345 = (state_18354[(2)]);
var state_18354__$1 = (function (){var statearr_18358 = state_18354;
(statearr_18358[(9)] = inst_18345);

return statearr_18358;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18354__$1,(9),results,inst_18340);
} else {
if((state_val_18355 === (7))){
var inst_18350 = (state_18354[(2)]);
var state_18354__$1 = state_18354;
var statearr_18359_18471 = state_18354__$1;
(statearr_18359_18471[(2)] = inst_18350);

(statearr_18359_18471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18355 === (6))){
var inst_18335 = (state_18354[(10)]);
var inst_18340 = (state_18354[(8)]);
var inst_18340__$1 = cljs.core.async.chan.call(null,(1));
var inst_18341 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18342 = [inst_18335,inst_18340__$1];
var inst_18343 = (new cljs.core.PersistentVector(null,2,(5),inst_18341,inst_18342,null));
var state_18354__$1 = (function (){var statearr_18360 = state_18354;
(statearr_18360[(8)] = inst_18340__$1);

return statearr_18360;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18354__$1,(8),jobs,inst_18343);
} else {
if((state_val_18355 === (5))){
var inst_18338 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18354__$1 = state_18354;
var statearr_18361_18472 = state_18354__$1;
(statearr_18361_18472[(2)] = inst_18338);

(statearr_18361_18472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18355 === (4))){
var inst_18335 = (state_18354[(10)]);
var inst_18335__$1 = (state_18354[(2)]);
var inst_18336 = (inst_18335__$1 == null);
var state_18354__$1 = (function (){var statearr_18362 = state_18354;
(statearr_18362[(10)] = inst_18335__$1);

return statearr_18362;
})();
if(cljs.core.truth_(inst_18336)){
var statearr_18363_18473 = state_18354__$1;
(statearr_18363_18473[(1)] = (5));

} else {
var statearr_18364_18474 = state_18354__$1;
(statearr_18364_18474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18355 === (3))){
var inst_18352 = (state_18354[(2)]);
var state_18354__$1 = state_18354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18354__$1,inst_18352);
} else {
if((state_val_18355 === (2))){
var state_18354__$1 = state_18354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18354__$1,(4),from);
} else {
if((state_val_18355 === (1))){
var state_18354__$1 = state_18354;
var statearr_18365_18475 = state_18354__$1;
(statearr_18365_18475[(2)] = null);

(statearr_18365_18475[(1)] = (2));


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
});})(c__6861__auto___18469,jobs,results,process,async))
;
return ((function (switch__6805__auto__,c__6861__auto___18469,jobs,results,process,async){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18369 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18369[(0)] = state_machine__6806__auto__);

(statearr_18369[(1)] = (1));

return statearr_18369;
});
var state_machine__6806__auto____1 = (function (state_18354){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18370){if((e18370 instanceof Object)){
var ex__6809__auto__ = e18370;
var statearr_18371_18476 = state_18354;
(statearr_18371_18476[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18477 = state_18354;
state_18354 = G__18477;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18354){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___18469,jobs,results,process,async))
})();
var state__6863__auto__ = (function (){var statearr_18372 = f__6862__auto__.call(null);
(statearr_18372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___18469);

return statearr_18372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___18469,jobs,results,process,async))
);


var c__6861__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto__,jobs,results,process,async){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto__,jobs,results,process,async){
return (function (state_18410){
var state_val_18411 = (state_18410[(1)]);
if((state_val_18411 === (7))){
var inst_18406 = (state_18410[(2)]);
var state_18410__$1 = state_18410;
var statearr_18412_18478 = state_18410__$1;
(statearr_18412_18478[(2)] = inst_18406);

(statearr_18412_18478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (20))){
var state_18410__$1 = state_18410;
var statearr_18413_18479 = state_18410__$1;
(statearr_18413_18479[(2)] = null);

(statearr_18413_18479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (1))){
var state_18410__$1 = state_18410;
var statearr_18414_18480 = state_18410__$1;
(statearr_18414_18480[(2)] = null);

(statearr_18414_18480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (4))){
var inst_18375 = (state_18410[(7)]);
var inst_18375__$1 = (state_18410[(2)]);
var inst_18376 = (inst_18375__$1 == null);
var state_18410__$1 = (function (){var statearr_18415 = state_18410;
(statearr_18415[(7)] = inst_18375__$1);

return statearr_18415;
})();
if(cljs.core.truth_(inst_18376)){
var statearr_18416_18481 = state_18410__$1;
(statearr_18416_18481[(1)] = (5));

} else {
var statearr_18417_18482 = state_18410__$1;
(statearr_18417_18482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (15))){
var inst_18388 = (state_18410[(8)]);
var state_18410__$1 = state_18410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18410__$1,(18),to,inst_18388);
} else {
if((state_val_18411 === (21))){
var inst_18401 = (state_18410[(2)]);
var state_18410__$1 = state_18410;
var statearr_18418_18483 = state_18410__$1;
(statearr_18418_18483[(2)] = inst_18401);

(statearr_18418_18483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (13))){
var inst_18403 = (state_18410[(2)]);
var state_18410__$1 = (function (){var statearr_18419 = state_18410;
(statearr_18419[(9)] = inst_18403);

return statearr_18419;
})();
var statearr_18420_18484 = state_18410__$1;
(statearr_18420_18484[(2)] = null);

(statearr_18420_18484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (6))){
var inst_18375 = (state_18410[(7)]);
var state_18410__$1 = state_18410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18410__$1,(11),inst_18375);
} else {
if((state_val_18411 === (17))){
var inst_18396 = (state_18410[(2)]);
var state_18410__$1 = state_18410;
if(cljs.core.truth_(inst_18396)){
var statearr_18421_18485 = state_18410__$1;
(statearr_18421_18485[(1)] = (19));

} else {
var statearr_18422_18486 = state_18410__$1;
(statearr_18422_18486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (3))){
var inst_18408 = (state_18410[(2)]);
var state_18410__$1 = state_18410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18410__$1,inst_18408);
} else {
if((state_val_18411 === (12))){
var inst_18385 = (state_18410[(10)]);
var state_18410__$1 = state_18410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18410__$1,(14),inst_18385);
} else {
if((state_val_18411 === (2))){
var state_18410__$1 = state_18410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18410__$1,(4),results);
} else {
if((state_val_18411 === (19))){
var state_18410__$1 = state_18410;
var statearr_18423_18487 = state_18410__$1;
(statearr_18423_18487[(2)] = null);

(statearr_18423_18487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (11))){
var inst_18385 = (state_18410[(2)]);
var state_18410__$1 = (function (){var statearr_18424 = state_18410;
(statearr_18424[(10)] = inst_18385);

return statearr_18424;
})();
var statearr_18425_18488 = state_18410__$1;
(statearr_18425_18488[(2)] = null);

(statearr_18425_18488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (9))){
var state_18410__$1 = state_18410;
var statearr_18426_18489 = state_18410__$1;
(statearr_18426_18489[(2)] = null);

(statearr_18426_18489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (5))){
var state_18410__$1 = state_18410;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18427_18490 = state_18410__$1;
(statearr_18427_18490[(1)] = (8));

} else {
var statearr_18428_18491 = state_18410__$1;
(statearr_18428_18491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (14))){
var inst_18388 = (state_18410[(8)]);
var inst_18390 = (state_18410[(11)]);
var inst_18388__$1 = (state_18410[(2)]);
var inst_18389 = (inst_18388__$1 == null);
var inst_18390__$1 = cljs.core.not.call(null,inst_18389);
var state_18410__$1 = (function (){var statearr_18429 = state_18410;
(statearr_18429[(8)] = inst_18388__$1);

(statearr_18429[(11)] = inst_18390__$1);

return statearr_18429;
})();
if(inst_18390__$1){
var statearr_18430_18492 = state_18410__$1;
(statearr_18430_18492[(1)] = (15));

} else {
var statearr_18431_18493 = state_18410__$1;
(statearr_18431_18493[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (16))){
var inst_18390 = (state_18410[(11)]);
var state_18410__$1 = state_18410;
var statearr_18432_18494 = state_18410__$1;
(statearr_18432_18494[(2)] = inst_18390);

(statearr_18432_18494[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (10))){
var inst_18382 = (state_18410[(2)]);
var state_18410__$1 = state_18410;
var statearr_18433_18495 = state_18410__$1;
(statearr_18433_18495[(2)] = inst_18382);

(statearr_18433_18495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (18))){
var inst_18393 = (state_18410[(2)]);
var state_18410__$1 = state_18410;
var statearr_18434_18496 = state_18410__$1;
(statearr_18434_18496[(2)] = inst_18393);

(statearr_18434_18496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18411 === (8))){
var inst_18379 = cljs.core.async.close_BANG_.call(null,to);
var state_18410__$1 = state_18410;
var statearr_18435_18497 = state_18410__$1;
(statearr_18435_18497[(2)] = inst_18379);

(statearr_18435_18497[(1)] = (10));


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
var statearr_18439 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18439[(0)] = state_machine__6806__auto__);

(statearr_18439[(1)] = (1));

return statearr_18439;
});
var state_machine__6806__auto____1 = (function (state_18410){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18440){if((e18440 instanceof Object)){
var ex__6809__auto__ = e18440;
var statearr_18441_18498 = state_18410;
(statearr_18441_18498[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18499 = state_18410;
state_18410 = G__18499;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18410){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto__,jobs,results,process,async))
})();
var state__6863__auto__ = (function (){var statearr_18442 = f__6862__auto__.call(null);
(statearr_18442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto__);

return statearr_18442;
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
var c__6861__auto___18600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___18600,tc,fc){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___18600,tc,fc){
return (function (state_18575){
var state_val_18576 = (state_18575[(1)]);
if((state_val_18576 === (7))){
var inst_18571 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18577_18601 = state_18575__$1;
(statearr_18577_18601[(2)] = inst_18571);

(statearr_18577_18601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (1))){
var state_18575__$1 = state_18575;
var statearr_18578_18602 = state_18575__$1;
(statearr_18578_18602[(2)] = null);

(statearr_18578_18602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (4))){
var inst_18552 = (state_18575[(7)]);
var inst_18552__$1 = (state_18575[(2)]);
var inst_18553 = (inst_18552__$1 == null);
var state_18575__$1 = (function (){var statearr_18579 = state_18575;
(statearr_18579[(7)] = inst_18552__$1);

return statearr_18579;
})();
if(cljs.core.truth_(inst_18553)){
var statearr_18580_18603 = state_18575__$1;
(statearr_18580_18603[(1)] = (5));

} else {
var statearr_18581_18604 = state_18575__$1;
(statearr_18581_18604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (13))){
var state_18575__$1 = state_18575;
var statearr_18582_18605 = state_18575__$1;
(statearr_18582_18605[(2)] = null);

(statearr_18582_18605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (6))){
var inst_18552 = (state_18575[(7)]);
var inst_18558 = p.call(null,inst_18552);
var state_18575__$1 = state_18575;
if(cljs.core.truth_(inst_18558)){
var statearr_18583_18606 = state_18575__$1;
(statearr_18583_18606[(1)] = (9));

} else {
var statearr_18584_18607 = state_18575__$1;
(statearr_18584_18607[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (3))){
var inst_18573 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18575__$1,inst_18573);
} else {
if((state_val_18576 === (12))){
var state_18575__$1 = state_18575;
var statearr_18585_18608 = state_18575__$1;
(statearr_18585_18608[(2)] = null);

(statearr_18585_18608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (2))){
var state_18575__$1 = state_18575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18575__$1,(4),ch);
} else {
if((state_val_18576 === (11))){
var inst_18552 = (state_18575[(7)]);
var inst_18562 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18575__$1,(8),inst_18562,inst_18552);
} else {
if((state_val_18576 === (9))){
var state_18575__$1 = state_18575;
var statearr_18586_18609 = state_18575__$1;
(statearr_18586_18609[(2)] = tc);

(statearr_18586_18609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (5))){
var inst_18555 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18556 = cljs.core.async.close_BANG_.call(null,fc);
var state_18575__$1 = (function (){var statearr_18587 = state_18575;
(statearr_18587[(8)] = inst_18555);

return statearr_18587;
})();
var statearr_18588_18610 = state_18575__$1;
(statearr_18588_18610[(2)] = inst_18556);

(statearr_18588_18610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (14))){
var inst_18569 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18589_18611 = state_18575__$1;
(statearr_18589_18611[(2)] = inst_18569);

(statearr_18589_18611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (10))){
var state_18575__$1 = state_18575;
var statearr_18590_18612 = state_18575__$1;
(statearr_18590_18612[(2)] = fc);

(statearr_18590_18612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (8))){
var inst_18564 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
if(cljs.core.truth_(inst_18564)){
var statearr_18591_18613 = state_18575__$1;
(statearr_18591_18613[(1)] = (12));

} else {
var statearr_18592_18614 = state_18575__$1;
(statearr_18592_18614[(1)] = (13));

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
});})(c__6861__auto___18600,tc,fc))
;
return ((function (switch__6805__auto__,c__6861__auto___18600,tc,fc){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_18596 = [null,null,null,null,null,null,null,null,null];
(statearr_18596[(0)] = state_machine__6806__auto__);

(statearr_18596[(1)] = (1));

return statearr_18596;
});
var state_machine__6806__auto____1 = (function (state_18575){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18597){if((e18597 instanceof Object)){
var ex__6809__auto__ = e18597;
var statearr_18598_18615 = state_18575;
(statearr_18598_18615[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18616 = state_18575;
state_18575 = G__18616;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18575){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___18600,tc,fc))
})();
var state__6863__auto__ = (function (){var statearr_18599 = f__6862__auto__.call(null);
(statearr_18599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___18600);

return statearr_18599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___18600,tc,fc))
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
return (function (state_18663){
var state_val_18664 = (state_18663[(1)]);
if((state_val_18664 === (7))){
var inst_18659 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18665_18681 = state_18663__$1;
(statearr_18665_18681[(2)] = inst_18659);

(statearr_18665_18681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (6))){
var inst_18649 = (state_18663[(7)]);
var inst_18652 = (state_18663[(8)]);
var inst_18656 = f.call(null,inst_18649,inst_18652);
var inst_18649__$1 = inst_18656;
var state_18663__$1 = (function (){var statearr_18666 = state_18663;
(statearr_18666[(7)] = inst_18649__$1);

return statearr_18666;
})();
var statearr_18667_18682 = state_18663__$1;
(statearr_18667_18682[(2)] = null);

(statearr_18667_18682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (5))){
var inst_18649 = (state_18663[(7)]);
var state_18663__$1 = state_18663;
var statearr_18668_18683 = state_18663__$1;
(statearr_18668_18683[(2)] = inst_18649);

(statearr_18668_18683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (4))){
var inst_18652 = (state_18663[(8)]);
var inst_18652__$1 = (state_18663[(2)]);
var inst_18653 = (inst_18652__$1 == null);
var state_18663__$1 = (function (){var statearr_18669 = state_18663;
(statearr_18669[(8)] = inst_18652__$1);

return statearr_18669;
})();
if(cljs.core.truth_(inst_18653)){
var statearr_18670_18684 = state_18663__$1;
(statearr_18670_18684[(1)] = (5));

} else {
var statearr_18671_18685 = state_18663__$1;
(statearr_18671_18685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18664 === (3))){
var inst_18661 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18663__$1,inst_18661);
} else {
if((state_val_18664 === (2))){
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18663__$1,(4),ch);
} else {
if((state_val_18664 === (1))){
var inst_18649 = init;
var state_18663__$1 = (function (){var statearr_18672 = state_18663;
(statearr_18672[(7)] = inst_18649);

return statearr_18672;
})();
var statearr_18673_18686 = state_18663__$1;
(statearr_18673_18686[(2)] = null);

(statearr_18673_18686[(1)] = (2));


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
var statearr_18677 = [null,null,null,null,null,null,null,null,null];
(statearr_18677[(0)] = state_machine__6806__auto__);

(statearr_18677[(1)] = (1));

return statearr_18677;
});
var state_machine__6806__auto____1 = (function (state_18663){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18678){if((e18678 instanceof Object)){
var ex__6809__auto__ = e18678;
var statearr_18679_18687 = state_18663;
(statearr_18679_18687[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18688 = state_18663;
state_18663 = G__18688;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18663){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto__))
})();
var state__6863__auto__ = (function (){var statearr_18680 = f__6862__auto__.call(null);
(statearr_18680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto__);

return statearr_18680;
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
return (function (state_18762){
var state_val_18763 = (state_18762[(1)]);
if((state_val_18763 === (7))){
var inst_18744 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18764_18787 = state_18762__$1;
(statearr_18764_18787[(2)] = inst_18744);

(statearr_18764_18787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (1))){
var inst_18738 = cljs.core.seq.call(null,coll);
var inst_18739 = inst_18738;
var state_18762__$1 = (function (){var statearr_18765 = state_18762;
(statearr_18765[(7)] = inst_18739);

return statearr_18765;
})();
var statearr_18766_18788 = state_18762__$1;
(statearr_18766_18788[(2)] = null);

(statearr_18766_18788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (4))){
var inst_18739 = (state_18762[(7)]);
var inst_18742 = cljs.core.first.call(null,inst_18739);
var state_18762__$1 = state_18762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18762__$1,(7),ch,inst_18742);
} else {
if((state_val_18763 === (13))){
var inst_18756 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18767_18789 = state_18762__$1;
(statearr_18767_18789[(2)] = inst_18756);

(statearr_18767_18789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (6))){
var inst_18747 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
if(cljs.core.truth_(inst_18747)){
var statearr_18768_18790 = state_18762__$1;
(statearr_18768_18790[(1)] = (8));

} else {
var statearr_18769_18791 = state_18762__$1;
(statearr_18769_18791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (3))){
var inst_18760 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18762__$1,inst_18760);
} else {
if((state_val_18763 === (12))){
var state_18762__$1 = state_18762;
var statearr_18770_18792 = state_18762__$1;
(statearr_18770_18792[(2)] = null);

(statearr_18770_18792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (2))){
var inst_18739 = (state_18762[(7)]);
var state_18762__$1 = state_18762;
if(cljs.core.truth_(inst_18739)){
var statearr_18771_18793 = state_18762__$1;
(statearr_18771_18793[(1)] = (4));

} else {
var statearr_18772_18794 = state_18762__$1;
(statearr_18772_18794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (11))){
var inst_18753 = cljs.core.async.close_BANG_.call(null,ch);
var state_18762__$1 = state_18762;
var statearr_18773_18795 = state_18762__$1;
(statearr_18773_18795[(2)] = inst_18753);

(statearr_18773_18795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (9))){
var state_18762__$1 = state_18762;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18774_18796 = state_18762__$1;
(statearr_18774_18796[(1)] = (11));

} else {
var statearr_18775_18797 = state_18762__$1;
(statearr_18775_18797[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (5))){
var inst_18739 = (state_18762[(7)]);
var state_18762__$1 = state_18762;
var statearr_18776_18798 = state_18762__$1;
(statearr_18776_18798[(2)] = inst_18739);

(statearr_18776_18798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (10))){
var inst_18758 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18777_18799 = state_18762__$1;
(statearr_18777_18799[(2)] = inst_18758);

(statearr_18777_18799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18763 === (8))){
var inst_18739 = (state_18762[(7)]);
var inst_18749 = cljs.core.next.call(null,inst_18739);
var inst_18739__$1 = inst_18749;
var state_18762__$1 = (function (){var statearr_18778 = state_18762;
(statearr_18778[(7)] = inst_18739__$1);

return statearr_18778;
})();
var statearr_18779_18800 = state_18762__$1;
(statearr_18779_18800[(2)] = null);

(statearr_18779_18800[(1)] = (2));


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
var statearr_18783 = [null,null,null,null,null,null,null,null];
(statearr_18783[(0)] = state_machine__6806__auto__);

(statearr_18783[(1)] = (1));

return statearr_18783;
});
var state_machine__6806__auto____1 = (function (state_18762){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_18762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e18784){if((e18784 instanceof Object)){
var ex__6809__auto__ = e18784;
var statearr_18785_18801 = state_18762;
(statearr_18785_18801[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18802 = state_18762;
state_18762 = G__18802;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_18762){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_18762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto__))
})();
var state__6863__auto__ = (function (){var statearr_18786 = f__6862__auto__.call(null);
(statearr_18786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto__);

return statearr_18786;
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

cljs.core.async.Mux = (function (){var obj18804 = {};
return obj18804;
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


cljs.core.async.Mult = (function (){var obj18806 = {};
return obj18806;
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
if(typeof cljs.core.async.t19028 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19028 = (function (cs,ch,mult,meta19029){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19029 = meta19029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19028.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19028.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19028.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19028.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t19028.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19028.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19030){
var self__ = this;
var _19030__$1 = this;
return self__.meta19029;
});})(cs))
;

cljs.core.async.t19028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19030,meta19029__$1){
var self__ = this;
var _19030__$1 = this;
return (new cljs.core.async.t19028(self__.cs,self__.ch,self__.mult,meta19029__$1));
});})(cs))
;

cljs.core.async.t19028.cljs$lang$type = true;

cljs.core.async.t19028.cljs$lang$ctorStr = "cljs.core.async/t19028";

cljs.core.async.t19028.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19028");
});})(cs))
;

cljs.core.async.__GT_t19028 = ((function (cs){
return (function __GT_t19028(cs__$1,ch__$1,mult__$1,meta19029){
return (new cljs.core.async.t19028(cs__$1,ch__$1,mult__$1,meta19029));
});})(cs))
;

}

return (new cljs.core.async.t19028(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var c__6861__auto___19249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___19249,cs,m,dchan,dctr,done){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___19249,cs,m,dchan,dctr,done){
return (function (state_19161){
var state_val_19162 = (state_19161[(1)]);
if((state_val_19162 === (7))){
var inst_19157 = (state_19161[(2)]);
var state_19161__$1 = state_19161;
var statearr_19163_19250 = state_19161__$1;
(statearr_19163_19250[(2)] = inst_19157);

(statearr_19163_19250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (20))){
var inst_19062 = (state_19161[(7)]);
var inst_19072 = cljs.core.first.call(null,inst_19062);
var inst_19073 = cljs.core.nth.call(null,inst_19072,(0),null);
var inst_19074 = cljs.core.nth.call(null,inst_19072,(1),null);
var state_19161__$1 = (function (){var statearr_19164 = state_19161;
(statearr_19164[(8)] = inst_19073);

return statearr_19164;
})();
if(cljs.core.truth_(inst_19074)){
var statearr_19165_19251 = state_19161__$1;
(statearr_19165_19251[(1)] = (22));

} else {
var statearr_19166_19252 = state_19161__$1;
(statearr_19166_19252[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (27))){
var inst_19109 = (state_19161[(9)]);
var inst_19102 = (state_19161[(10)]);
var inst_19104 = (state_19161[(11)]);
var inst_19033 = (state_19161[(12)]);
var inst_19109__$1 = cljs.core._nth.call(null,inst_19102,inst_19104);
var inst_19110 = cljs.core.async.put_BANG_.call(null,inst_19109__$1,inst_19033,done);
var state_19161__$1 = (function (){var statearr_19167 = state_19161;
(statearr_19167[(9)] = inst_19109__$1);

return statearr_19167;
})();
if(cljs.core.truth_(inst_19110)){
var statearr_19168_19253 = state_19161__$1;
(statearr_19168_19253[(1)] = (30));

} else {
var statearr_19169_19254 = state_19161__$1;
(statearr_19169_19254[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (1))){
var state_19161__$1 = state_19161;
var statearr_19170_19255 = state_19161__$1;
(statearr_19170_19255[(2)] = null);

(statearr_19170_19255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (24))){
var inst_19062 = (state_19161[(7)]);
var inst_19079 = (state_19161[(2)]);
var inst_19080 = cljs.core.next.call(null,inst_19062);
var inst_19042 = inst_19080;
var inst_19043 = null;
var inst_19044 = (0);
var inst_19045 = (0);
var state_19161__$1 = (function (){var statearr_19171 = state_19161;
(statearr_19171[(13)] = inst_19079);

(statearr_19171[(14)] = inst_19043);

(statearr_19171[(15)] = inst_19045);

(statearr_19171[(16)] = inst_19042);

(statearr_19171[(17)] = inst_19044);

return statearr_19171;
})();
var statearr_19172_19256 = state_19161__$1;
(statearr_19172_19256[(2)] = null);

(statearr_19172_19256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (39))){
var state_19161__$1 = state_19161;
var statearr_19176_19257 = state_19161__$1;
(statearr_19176_19257[(2)] = null);

(statearr_19176_19257[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (4))){
var inst_19033 = (state_19161[(12)]);
var inst_19033__$1 = (state_19161[(2)]);
var inst_19034 = (inst_19033__$1 == null);
var state_19161__$1 = (function (){var statearr_19177 = state_19161;
(statearr_19177[(12)] = inst_19033__$1);

return statearr_19177;
})();
if(cljs.core.truth_(inst_19034)){
var statearr_19178_19258 = state_19161__$1;
(statearr_19178_19258[(1)] = (5));

} else {
var statearr_19179_19259 = state_19161__$1;
(statearr_19179_19259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (15))){
var inst_19043 = (state_19161[(14)]);
var inst_19045 = (state_19161[(15)]);
var inst_19042 = (state_19161[(16)]);
var inst_19044 = (state_19161[(17)]);
var inst_19058 = (state_19161[(2)]);
var inst_19059 = (inst_19045 + (1));
var tmp19173 = inst_19043;
var tmp19174 = inst_19042;
var tmp19175 = inst_19044;
var inst_19042__$1 = tmp19174;
var inst_19043__$1 = tmp19173;
var inst_19044__$1 = tmp19175;
var inst_19045__$1 = inst_19059;
var state_19161__$1 = (function (){var statearr_19180 = state_19161;
(statearr_19180[(14)] = inst_19043__$1);

(statearr_19180[(15)] = inst_19045__$1);

(statearr_19180[(16)] = inst_19042__$1);

(statearr_19180[(18)] = inst_19058);

(statearr_19180[(17)] = inst_19044__$1);

return statearr_19180;
})();
var statearr_19181_19260 = state_19161__$1;
(statearr_19181_19260[(2)] = null);

(statearr_19181_19260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (21))){
var inst_19083 = (state_19161[(2)]);
var state_19161__$1 = state_19161;
var statearr_19185_19261 = state_19161__$1;
(statearr_19185_19261[(2)] = inst_19083);

(statearr_19185_19261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (31))){
var inst_19109 = (state_19161[(9)]);
var inst_19113 = done.call(null,null);
var inst_19114 = cljs.core.async.untap_STAR_.call(null,m,inst_19109);
var state_19161__$1 = (function (){var statearr_19186 = state_19161;
(statearr_19186[(19)] = inst_19113);

return statearr_19186;
})();
var statearr_19187_19262 = state_19161__$1;
(statearr_19187_19262[(2)] = inst_19114);

(statearr_19187_19262[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (32))){
var inst_19103 = (state_19161[(20)]);
var inst_19102 = (state_19161[(10)]);
var inst_19104 = (state_19161[(11)]);
var inst_19101 = (state_19161[(21)]);
var inst_19116 = (state_19161[(2)]);
var inst_19117 = (inst_19104 + (1));
var tmp19182 = inst_19103;
var tmp19183 = inst_19102;
var tmp19184 = inst_19101;
var inst_19101__$1 = tmp19184;
var inst_19102__$1 = tmp19183;
var inst_19103__$1 = tmp19182;
var inst_19104__$1 = inst_19117;
var state_19161__$1 = (function (){var statearr_19188 = state_19161;
(statearr_19188[(20)] = inst_19103__$1);

(statearr_19188[(10)] = inst_19102__$1);

(statearr_19188[(22)] = inst_19116);

(statearr_19188[(11)] = inst_19104__$1);

(statearr_19188[(21)] = inst_19101__$1);

return statearr_19188;
})();
var statearr_19189_19263 = state_19161__$1;
(statearr_19189_19263[(2)] = null);

(statearr_19189_19263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (40))){
var inst_19129 = (state_19161[(23)]);
var inst_19133 = done.call(null,null);
var inst_19134 = cljs.core.async.untap_STAR_.call(null,m,inst_19129);
var state_19161__$1 = (function (){var statearr_19190 = state_19161;
(statearr_19190[(24)] = inst_19133);

return statearr_19190;
})();
var statearr_19191_19264 = state_19161__$1;
(statearr_19191_19264[(2)] = inst_19134);

(statearr_19191_19264[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (33))){
var inst_19120 = (state_19161[(25)]);
var inst_19122 = cljs.core.chunked_seq_QMARK_.call(null,inst_19120);
var state_19161__$1 = state_19161;
if(inst_19122){
var statearr_19192_19265 = state_19161__$1;
(statearr_19192_19265[(1)] = (36));

} else {
var statearr_19193_19266 = state_19161__$1;
(statearr_19193_19266[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (13))){
var inst_19052 = (state_19161[(26)]);
var inst_19055 = cljs.core.async.close_BANG_.call(null,inst_19052);
var state_19161__$1 = state_19161;
var statearr_19194_19267 = state_19161__$1;
(statearr_19194_19267[(2)] = inst_19055);

(statearr_19194_19267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (22))){
var inst_19073 = (state_19161[(8)]);
var inst_19076 = cljs.core.async.close_BANG_.call(null,inst_19073);
var state_19161__$1 = state_19161;
var statearr_19195_19268 = state_19161__$1;
(statearr_19195_19268[(2)] = inst_19076);

(statearr_19195_19268[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (36))){
var inst_19120 = (state_19161[(25)]);
var inst_19124 = cljs.core.chunk_first.call(null,inst_19120);
var inst_19125 = cljs.core.chunk_rest.call(null,inst_19120);
var inst_19126 = cljs.core.count.call(null,inst_19124);
var inst_19101 = inst_19125;
var inst_19102 = inst_19124;
var inst_19103 = inst_19126;
var inst_19104 = (0);
var state_19161__$1 = (function (){var statearr_19196 = state_19161;
(statearr_19196[(20)] = inst_19103);

(statearr_19196[(10)] = inst_19102);

(statearr_19196[(11)] = inst_19104);

(statearr_19196[(21)] = inst_19101);

return statearr_19196;
})();
var statearr_19197_19269 = state_19161__$1;
(statearr_19197_19269[(2)] = null);

(statearr_19197_19269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (41))){
var inst_19120 = (state_19161[(25)]);
var inst_19136 = (state_19161[(2)]);
var inst_19137 = cljs.core.next.call(null,inst_19120);
var inst_19101 = inst_19137;
var inst_19102 = null;
var inst_19103 = (0);
var inst_19104 = (0);
var state_19161__$1 = (function (){var statearr_19198 = state_19161;
(statearr_19198[(20)] = inst_19103);

(statearr_19198[(10)] = inst_19102);

(statearr_19198[(27)] = inst_19136);

(statearr_19198[(11)] = inst_19104);

(statearr_19198[(21)] = inst_19101);

return statearr_19198;
})();
var statearr_19199_19270 = state_19161__$1;
(statearr_19199_19270[(2)] = null);

(statearr_19199_19270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (43))){
var state_19161__$1 = state_19161;
var statearr_19200_19271 = state_19161__$1;
(statearr_19200_19271[(2)] = null);

(statearr_19200_19271[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (29))){
var inst_19145 = (state_19161[(2)]);
var state_19161__$1 = state_19161;
var statearr_19201_19272 = state_19161__$1;
(statearr_19201_19272[(2)] = inst_19145);

(statearr_19201_19272[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (44))){
var inst_19154 = (state_19161[(2)]);
var state_19161__$1 = (function (){var statearr_19202 = state_19161;
(statearr_19202[(28)] = inst_19154);

return statearr_19202;
})();
var statearr_19203_19273 = state_19161__$1;
(statearr_19203_19273[(2)] = null);

(statearr_19203_19273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (6))){
var inst_19093 = (state_19161[(29)]);
var inst_19092 = cljs.core.deref.call(null,cs);
var inst_19093__$1 = cljs.core.keys.call(null,inst_19092);
var inst_19094 = cljs.core.count.call(null,inst_19093__$1);
var inst_19095 = cljs.core.reset_BANG_.call(null,dctr,inst_19094);
var inst_19100 = cljs.core.seq.call(null,inst_19093__$1);
var inst_19101 = inst_19100;
var inst_19102 = null;
var inst_19103 = (0);
var inst_19104 = (0);
var state_19161__$1 = (function (){var statearr_19204 = state_19161;
(statearr_19204[(20)] = inst_19103);

(statearr_19204[(29)] = inst_19093__$1);

(statearr_19204[(10)] = inst_19102);

(statearr_19204[(30)] = inst_19095);

(statearr_19204[(11)] = inst_19104);

(statearr_19204[(21)] = inst_19101);

return statearr_19204;
})();
var statearr_19205_19274 = state_19161__$1;
(statearr_19205_19274[(2)] = null);

(statearr_19205_19274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (28))){
var inst_19120 = (state_19161[(25)]);
var inst_19101 = (state_19161[(21)]);
var inst_19120__$1 = cljs.core.seq.call(null,inst_19101);
var state_19161__$1 = (function (){var statearr_19206 = state_19161;
(statearr_19206[(25)] = inst_19120__$1);

return statearr_19206;
})();
if(inst_19120__$1){
var statearr_19207_19275 = state_19161__$1;
(statearr_19207_19275[(1)] = (33));

} else {
var statearr_19208_19276 = state_19161__$1;
(statearr_19208_19276[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (25))){
var inst_19103 = (state_19161[(20)]);
var inst_19104 = (state_19161[(11)]);
var inst_19106 = (inst_19104 < inst_19103);
var inst_19107 = inst_19106;
var state_19161__$1 = state_19161;
if(cljs.core.truth_(inst_19107)){
var statearr_19209_19277 = state_19161__$1;
(statearr_19209_19277[(1)] = (27));

} else {
var statearr_19210_19278 = state_19161__$1;
(statearr_19210_19278[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (34))){
var state_19161__$1 = state_19161;
var statearr_19211_19279 = state_19161__$1;
(statearr_19211_19279[(2)] = null);

(statearr_19211_19279[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (17))){
var state_19161__$1 = state_19161;
var statearr_19212_19280 = state_19161__$1;
(statearr_19212_19280[(2)] = null);

(statearr_19212_19280[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (3))){
var inst_19159 = (state_19161[(2)]);
var state_19161__$1 = state_19161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19161__$1,inst_19159);
} else {
if((state_val_19162 === (12))){
var inst_19088 = (state_19161[(2)]);
var state_19161__$1 = state_19161;
var statearr_19213_19281 = state_19161__$1;
(statearr_19213_19281[(2)] = inst_19088);

(statearr_19213_19281[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (2))){
var state_19161__$1 = state_19161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19161__$1,(4),ch);
} else {
if((state_val_19162 === (23))){
var state_19161__$1 = state_19161;
var statearr_19214_19282 = state_19161__$1;
(statearr_19214_19282[(2)] = null);

(statearr_19214_19282[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (35))){
var inst_19143 = (state_19161[(2)]);
var state_19161__$1 = state_19161;
var statearr_19215_19283 = state_19161__$1;
(statearr_19215_19283[(2)] = inst_19143);

(statearr_19215_19283[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (19))){
var inst_19062 = (state_19161[(7)]);
var inst_19066 = cljs.core.chunk_first.call(null,inst_19062);
var inst_19067 = cljs.core.chunk_rest.call(null,inst_19062);
var inst_19068 = cljs.core.count.call(null,inst_19066);
var inst_19042 = inst_19067;
var inst_19043 = inst_19066;
var inst_19044 = inst_19068;
var inst_19045 = (0);
var state_19161__$1 = (function (){var statearr_19216 = state_19161;
(statearr_19216[(14)] = inst_19043);

(statearr_19216[(15)] = inst_19045);

(statearr_19216[(16)] = inst_19042);

(statearr_19216[(17)] = inst_19044);

return statearr_19216;
})();
var statearr_19217_19284 = state_19161__$1;
(statearr_19217_19284[(2)] = null);

(statearr_19217_19284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (11))){
var inst_19042 = (state_19161[(16)]);
var inst_19062 = (state_19161[(7)]);
var inst_19062__$1 = cljs.core.seq.call(null,inst_19042);
var state_19161__$1 = (function (){var statearr_19218 = state_19161;
(statearr_19218[(7)] = inst_19062__$1);

return statearr_19218;
})();
if(inst_19062__$1){
var statearr_19219_19285 = state_19161__$1;
(statearr_19219_19285[(1)] = (16));

} else {
var statearr_19220_19286 = state_19161__$1;
(statearr_19220_19286[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (9))){
var inst_19090 = (state_19161[(2)]);
var state_19161__$1 = state_19161;
var statearr_19221_19287 = state_19161__$1;
(statearr_19221_19287[(2)] = inst_19090);

(statearr_19221_19287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (5))){
var inst_19040 = cljs.core.deref.call(null,cs);
var inst_19041 = cljs.core.seq.call(null,inst_19040);
var inst_19042 = inst_19041;
var inst_19043 = null;
var inst_19044 = (0);
var inst_19045 = (0);
var state_19161__$1 = (function (){var statearr_19222 = state_19161;
(statearr_19222[(14)] = inst_19043);

(statearr_19222[(15)] = inst_19045);

(statearr_19222[(16)] = inst_19042);

(statearr_19222[(17)] = inst_19044);

return statearr_19222;
})();
var statearr_19223_19288 = state_19161__$1;
(statearr_19223_19288[(2)] = null);

(statearr_19223_19288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (14))){
var state_19161__$1 = state_19161;
var statearr_19224_19289 = state_19161__$1;
(statearr_19224_19289[(2)] = null);

(statearr_19224_19289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (45))){
var inst_19151 = (state_19161[(2)]);
var state_19161__$1 = state_19161;
var statearr_19225_19290 = state_19161__$1;
(statearr_19225_19290[(2)] = inst_19151);

(statearr_19225_19290[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (26))){
var inst_19093 = (state_19161[(29)]);
var inst_19147 = (state_19161[(2)]);
var inst_19148 = cljs.core.seq.call(null,inst_19093);
var state_19161__$1 = (function (){var statearr_19226 = state_19161;
(statearr_19226[(31)] = inst_19147);

return statearr_19226;
})();
if(inst_19148){
var statearr_19227_19291 = state_19161__$1;
(statearr_19227_19291[(1)] = (42));

} else {
var statearr_19228_19292 = state_19161__$1;
(statearr_19228_19292[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (16))){
var inst_19062 = (state_19161[(7)]);
var inst_19064 = cljs.core.chunked_seq_QMARK_.call(null,inst_19062);
var state_19161__$1 = state_19161;
if(inst_19064){
var statearr_19229_19293 = state_19161__$1;
(statearr_19229_19293[(1)] = (19));

} else {
var statearr_19230_19294 = state_19161__$1;
(statearr_19230_19294[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (38))){
var inst_19140 = (state_19161[(2)]);
var state_19161__$1 = state_19161;
var statearr_19231_19295 = state_19161__$1;
(statearr_19231_19295[(2)] = inst_19140);

(statearr_19231_19295[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (30))){
var state_19161__$1 = state_19161;
var statearr_19232_19296 = state_19161__$1;
(statearr_19232_19296[(2)] = null);

(statearr_19232_19296[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (10))){
var inst_19043 = (state_19161[(14)]);
var inst_19045 = (state_19161[(15)]);
var inst_19051 = cljs.core._nth.call(null,inst_19043,inst_19045);
var inst_19052 = cljs.core.nth.call(null,inst_19051,(0),null);
var inst_19053 = cljs.core.nth.call(null,inst_19051,(1),null);
var state_19161__$1 = (function (){var statearr_19233 = state_19161;
(statearr_19233[(26)] = inst_19052);

return statearr_19233;
})();
if(cljs.core.truth_(inst_19053)){
var statearr_19234_19297 = state_19161__$1;
(statearr_19234_19297[(1)] = (13));

} else {
var statearr_19235_19298 = state_19161__$1;
(statearr_19235_19298[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (18))){
var inst_19086 = (state_19161[(2)]);
var state_19161__$1 = state_19161;
var statearr_19236_19299 = state_19161__$1;
(statearr_19236_19299[(2)] = inst_19086);

(statearr_19236_19299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (42))){
var state_19161__$1 = state_19161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19161__$1,(45),dchan);
} else {
if((state_val_19162 === (37))){
var inst_19129 = (state_19161[(23)]);
var inst_19120 = (state_19161[(25)]);
var inst_19033 = (state_19161[(12)]);
var inst_19129__$1 = cljs.core.first.call(null,inst_19120);
var inst_19130 = cljs.core.async.put_BANG_.call(null,inst_19129__$1,inst_19033,done);
var state_19161__$1 = (function (){var statearr_19237 = state_19161;
(statearr_19237[(23)] = inst_19129__$1);

return statearr_19237;
})();
if(cljs.core.truth_(inst_19130)){
var statearr_19238_19300 = state_19161__$1;
(statearr_19238_19300[(1)] = (39));

} else {
var statearr_19239_19301 = state_19161__$1;
(statearr_19239_19301[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19162 === (8))){
var inst_19045 = (state_19161[(15)]);
var inst_19044 = (state_19161[(17)]);
var inst_19047 = (inst_19045 < inst_19044);
var inst_19048 = inst_19047;
var state_19161__$1 = state_19161;
if(cljs.core.truth_(inst_19048)){
var statearr_19240_19302 = state_19161__$1;
(statearr_19240_19302[(1)] = (10));

} else {
var statearr_19241_19303 = state_19161__$1;
(statearr_19241_19303[(1)] = (11));

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
});})(c__6861__auto___19249,cs,m,dchan,dctr,done))
;
return ((function (switch__6805__auto__,c__6861__auto___19249,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_19245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19245[(0)] = state_machine__6806__auto__);

(statearr_19245[(1)] = (1));

return statearr_19245;
});
var state_machine__6806__auto____1 = (function (state_19161){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_19161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e19246){if((e19246 instanceof Object)){
var ex__6809__auto__ = e19246;
var statearr_19247_19304 = state_19161;
(statearr_19247_19304[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19305 = state_19161;
state_19161 = G__19305;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_19161){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_19161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___19249,cs,m,dchan,dctr,done))
})();
var state__6863__auto__ = (function (){var statearr_19248 = f__6862__auto__.call(null);
(statearr_19248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___19249);

return statearr_19248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___19249,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj19307 = {};
return obj19307;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19308){
var map__19313 = p__19308;
var map__19313__$1 = ((cljs.core.seq_QMARK_.call(null,map__19313))?cljs.core.apply.call(null,cljs.core.hash_map,map__19313):map__19313);
var opts = map__19313__$1;
var statearr_19314_19317 = state;
(statearr_19314_19317[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__19313,map__19313__$1,opts){
return (function (val){
var statearr_19315_19318 = state;
(statearr_19315_19318[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19313,map__19313__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_19316_19319 = state;
(statearr_19316_19319[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19308 = null;
if (arguments.length > 3) {
var G__19320__i = 0, G__19320__a = new Array(arguments.length -  3);
while (G__19320__i < G__19320__a.length) {G__19320__a[G__19320__i] = arguments[G__19320__i + 3]; ++G__19320__i;}
  p__19308 = new cljs.core.IndexedSeq(G__19320__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19308);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19321){
var state = cljs.core.first(arglist__19321);
arglist__19321 = cljs.core.next(arglist__19321);
var cont_block = cljs.core.first(arglist__19321);
arglist__19321 = cljs.core.next(arglist__19321);
var ports = cljs.core.first(arglist__19321);
var p__19308 = cljs.core.rest(arglist__19321);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__19308);
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
if(typeof cljs.core.async.t19441 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19441 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19442){
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
this.meta19442 = meta19442;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19441.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t19441.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19441.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19441.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19441.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19441.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t19441.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19441.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19443){
var self__ = this;
var _19443__$1 = this;
return self__.meta19442;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19443,meta19442__$1){
var self__ = this;
var _19443__$1 = this;
return (new cljs.core.async.t19441(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19442__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19441.cljs$lang$type = true;

cljs.core.async.t19441.cljs$lang$ctorStr = "cljs.core.async/t19441";

cljs.core.async.t19441.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19441");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t19441 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19441(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19442){
return (new cljs.core.async.t19441(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19442));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t19441(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var c__6861__auto___19560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___19560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___19560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19513){
var state_val_19514 = (state_19513[(1)]);
if((state_val_19514 === (7))){
var inst_19457 = (state_19513[(7)]);
var inst_19462 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19457);
var state_19513__$1 = state_19513;
var statearr_19515_19561 = state_19513__$1;
(statearr_19515_19561[(2)] = inst_19462);

(statearr_19515_19561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (20))){
var inst_19472 = (state_19513[(8)]);
var state_19513__$1 = state_19513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19513__$1,(23),out,inst_19472);
} else {
if((state_val_19514 === (1))){
var inst_19447 = (state_19513[(9)]);
var inst_19447__$1 = calc_state.call(null);
var inst_19448 = cljs.core.seq_QMARK_.call(null,inst_19447__$1);
var state_19513__$1 = (function (){var statearr_19516 = state_19513;
(statearr_19516[(9)] = inst_19447__$1);

return statearr_19516;
})();
if(inst_19448){
var statearr_19517_19562 = state_19513__$1;
(statearr_19517_19562[(1)] = (2));

} else {
var statearr_19518_19563 = state_19513__$1;
(statearr_19518_19563[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (24))){
var inst_19465 = (state_19513[(10)]);
var inst_19457 = inst_19465;
var state_19513__$1 = (function (){var statearr_19519 = state_19513;
(statearr_19519[(7)] = inst_19457);

return statearr_19519;
})();
var statearr_19520_19564 = state_19513__$1;
(statearr_19520_19564[(2)] = null);

(statearr_19520_19564[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (4))){
var inst_19447 = (state_19513[(9)]);
var inst_19453 = (state_19513[(2)]);
var inst_19454 = cljs.core.get.call(null,inst_19453,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19455 = cljs.core.get.call(null,inst_19453,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19456 = cljs.core.get.call(null,inst_19453,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19457 = inst_19447;
var state_19513__$1 = (function (){var statearr_19521 = state_19513;
(statearr_19521[(11)] = inst_19454);

(statearr_19521[(12)] = inst_19456);

(statearr_19521[(7)] = inst_19457);

(statearr_19521[(13)] = inst_19455);

return statearr_19521;
})();
var statearr_19522_19565 = state_19513__$1;
(statearr_19522_19565[(2)] = null);

(statearr_19522_19565[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (15))){
var state_19513__$1 = state_19513;
var statearr_19523_19566 = state_19513__$1;
(statearr_19523_19566[(2)] = null);

(statearr_19523_19566[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (21))){
var inst_19465 = (state_19513[(10)]);
var inst_19457 = inst_19465;
var state_19513__$1 = (function (){var statearr_19524 = state_19513;
(statearr_19524[(7)] = inst_19457);

return statearr_19524;
})();
var statearr_19525_19567 = state_19513__$1;
(statearr_19525_19567[(2)] = null);

(statearr_19525_19567[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (13))){
var inst_19509 = (state_19513[(2)]);
var state_19513__$1 = state_19513;
var statearr_19526_19568 = state_19513__$1;
(statearr_19526_19568[(2)] = inst_19509);

(statearr_19526_19568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (22))){
var inst_19507 = (state_19513[(2)]);
var state_19513__$1 = state_19513;
var statearr_19527_19569 = state_19513__$1;
(statearr_19527_19569[(2)] = inst_19507);

(statearr_19527_19569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (6))){
var inst_19511 = (state_19513[(2)]);
var state_19513__$1 = state_19513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19513__$1,inst_19511);
} else {
if((state_val_19514 === (25))){
var state_19513__$1 = state_19513;
var statearr_19528_19570 = state_19513__$1;
(statearr_19528_19570[(2)] = null);

(statearr_19528_19570[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (17))){
var inst_19487 = (state_19513[(14)]);
var state_19513__$1 = state_19513;
var statearr_19529_19571 = state_19513__$1;
(statearr_19529_19571[(2)] = inst_19487);

(statearr_19529_19571[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (3))){
var inst_19447 = (state_19513[(9)]);
var state_19513__$1 = state_19513;
var statearr_19530_19572 = state_19513__$1;
(statearr_19530_19572[(2)] = inst_19447);

(statearr_19530_19572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (12))){
var inst_19473 = (state_19513[(15)]);
var inst_19468 = (state_19513[(16)]);
var inst_19487 = (state_19513[(14)]);
var inst_19487__$1 = inst_19468.call(null,inst_19473);
var state_19513__$1 = (function (){var statearr_19531 = state_19513;
(statearr_19531[(14)] = inst_19487__$1);

return statearr_19531;
})();
if(cljs.core.truth_(inst_19487__$1)){
var statearr_19532_19573 = state_19513__$1;
(statearr_19532_19573[(1)] = (17));

} else {
var statearr_19533_19574 = state_19513__$1;
(statearr_19533_19574[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (2))){
var inst_19447 = (state_19513[(9)]);
var inst_19450 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19447);
var state_19513__$1 = state_19513;
var statearr_19534_19575 = state_19513__$1;
(statearr_19534_19575[(2)] = inst_19450);

(statearr_19534_19575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (23))){
var inst_19498 = (state_19513[(2)]);
var state_19513__$1 = state_19513;
if(cljs.core.truth_(inst_19498)){
var statearr_19535_19576 = state_19513__$1;
(statearr_19535_19576[(1)] = (24));

} else {
var statearr_19536_19577 = state_19513__$1;
(statearr_19536_19577[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (19))){
var inst_19495 = (state_19513[(2)]);
var state_19513__$1 = state_19513;
if(cljs.core.truth_(inst_19495)){
var statearr_19537_19578 = state_19513__$1;
(statearr_19537_19578[(1)] = (20));

} else {
var statearr_19538_19579 = state_19513__$1;
(statearr_19538_19579[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (11))){
var inst_19472 = (state_19513[(8)]);
var inst_19478 = (inst_19472 == null);
var state_19513__$1 = state_19513;
if(cljs.core.truth_(inst_19478)){
var statearr_19539_19580 = state_19513__$1;
(statearr_19539_19580[(1)] = (14));

} else {
var statearr_19540_19581 = state_19513__$1;
(statearr_19540_19581[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (9))){
var inst_19465 = (state_19513[(10)]);
var inst_19465__$1 = (state_19513[(2)]);
var inst_19466 = cljs.core.get.call(null,inst_19465__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19467 = cljs.core.get.call(null,inst_19465__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19468 = cljs.core.get.call(null,inst_19465__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_19513__$1 = (function (){var statearr_19541 = state_19513;
(statearr_19541[(17)] = inst_19467);

(statearr_19541[(10)] = inst_19465__$1);

(statearr_19541[(16)] = inst_19468);

return statearr_19541;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19513__$1,(10),inst_19466);
} else {
if((state_val_19514 === (5))){
var inst_19457 = (state_19513[(7)]);
var inst_19460 = cljs.core.seq_QMARK_.call(null,inst_19457);
var state_19513__$1 = state_19513;
if(inst_19460){
var statearr_19542_19582 = state_19513__$1;
(statearr_19542_19582[(1)] = (7));

} else {
var statearr_19543_19583 = state_19513__$1;
(statearr_19543_19583[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (14))){
var inst_19473 = (state_19513[(15)]);
var inst_19480 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19473);
var state_19513__$1 = state_19513;
var statearr_19544_19584 = state_19513__$1;
(statearr_19544_19584[(2)] = inst_19480);

(statearr_19544_19584[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (26))){
var inst_19503 = (state_19513[(2)]);
var state_19513__$1 = state_19513;
var statearr_19545_19585 = state_19513__$1;
(statearr_19545_19585[(2)] = inst_19503);

(statearr_19545_19585[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (16))){
var inst_19483 = (state_19513[(2)]);
var inst_19484 = calc_state.call(null);
var inst_19457 = inst_19484;
var state_19513__$1 = (function (){var statearr_19546 = state_19513;
(statearr_19546[(7)] = inst_19457);

(statearr_19546[(18)] = inst_19483);

return statearr_19546;
})();
var statearr_19547_19586 = state_19513__$1;
(statearr_19547_19586[(2)] = null);

(statearr_19547_19586[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (10))){
var inst_19473 = (state_19513[(15)]);
var inst_19472 = (state_19513[(8)]);
var inst_19471 = (state_19513[(2)]);
var inst_19472__$1 = cljs.core.nth.call(null,inst_19471,(0),null);
var inst_19473__$1 = cljs.core.nth.call(null,inst_19471,(1),null);
var inst_19474 = (inst_19472__$1 == null);
var inst_19475 = cljs.core._EQ_.call(null,inst_19473__$1,change);
var inst_19476 = (inst_19474) || (inst_19475);
var state_19513__$1 = (function (){var statearr_19548 = state_19513;
(statearr_19548[(15)] = inst_19473__$1);

(statearr_19548[(8)] = inst_19472__$1);

return statearr_19548;
})();
if(cljs.core.truth_(inst_19476)){
var statearr_19549_19587 = state_19513__$1;
(statearr_19549_19587[(1)] = (11));

} else {
var statearr_19550_19588 = state_19513__$1;
(statearr_19550_19588[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (18))){
var inst_19467 = (state_19513[(17)]);
var inst_19473 = (state_19513[(15)]);
var inst_19468 = (state_19513[(16)]);
var inst_19490 = cljs.core.empty_QMARK_.call(null,inst_19468);
var inst_19491 = inst_19467.call(null,inst_19473);
var inst_19492 = cljs.core.not.call(null,inst_19491);
var inst_19493 = (inst_19490) && (inst_19492);
var state_19513__$1 = state_19513;
var statearr_19551_19589 = state_19513__$1;
(statearr_19551_19589[(2)] = inst_19493);

(statearr_19551_19589[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19514 === (8))){
var inst_19457 = (state_19513[(7)]);
var state_19513__$1 = state_19513;
var statearr_19552_19590 = state_19513__$1;
(statearr_19552_19590[(2)] = inst_19457);

(statearr_19552_19590[(1)] = (9));


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
});})(c__6861__auto___19560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6805__auto__,c__6861__auto___19560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_19556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19556[(0)] = state_machine__6806__auto__);

(statearr_19556[(1)] = (1));

return statearr_19556;
});
var state_machine__6806__auto____1 = (function (state_19513){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_19513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e19557){if((e19557 instanceof Object)){
var ex__6809__auto__ = e19557;
var statearr_19558_19591 = state_19513;
(statearr_19558_19591[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19592 = state_19513;
state_19513 = G__19592;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_19513){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_19513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___19560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6863__auto__ = (function (){var statearr_19559 = f__6862__auto__.call(null);
(statearr_19559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___19560);

return statearr_19559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___19560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj19594 = {};
return obj19594;
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
return (function (p1__19595_SHARP_){
if(cljs.core.truth_(p1__19595_SHARP_.call(null,topic))){
return p1__19595_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19595_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3799__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19718 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19718 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19719){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19719 = meta19719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19718.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19718.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19718.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t19718.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t19718.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19718.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19720){
var self__ = this;
var _19720__$1 = this;
return self__.meta19719;
});})(mults,ensure_mult))
;

cljs.core.async.t19718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19720,meta19719__$1){
var self__ = this;
var _19720__$1 = this;
return (new cljs.core.async.t19718(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19719__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19718.cljs$lang$type = true;

cljs.core.async.t19718.cljs$lang$ctorStr = "cljs.core.async/t19718";

cljs.core.async.t19718.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19718");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19718 = ((function (mults,ensure_mult){
return (function __GT_t19718(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19719){
return (new cljs.core.async.t19718(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19719));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19718(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var c__6861__auto___19840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___19840,mults,ensure_mult,p){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___19840,mults,ensure_mult,p){
return (function (state_19792){
var state_val_19793 = (state_19792[(1)]);
if((state_val_19793 === (7))){
var inst_19788 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
var statearr_19794_19841 = state_19792__$1;
(statearr_19794_19841[(2)] = inst_19788);

(statearr_19794_19841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (20))){
var state_19792__$1 = state_19792;
var statearr_19795_19842 = state_19792__$1;
(statearr_19795_19842[(2)] = null);

(statearr_19795_19842[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (1))){
var state_19792__$1 = state_19792;
var statearr_19796_19843 = state_19792__$1;
(statearr_19796_19843[(2)] = null);

(statearr_19796_19843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (24))){
var inst_19771 = (state_19792[(7)]);
var inst_19780 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19771);
var state_19792__$1 = state_19792;
var statearr_19797_19844 = state_19792__$1;
(statearr_19797_19844[(2)] = inst_19780);

(statearr_19797_19844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (4))){
var inst_19723 = (state_19792[(8)]);
var inst_19723__$1 = (state_19792[(2)]);
var inst_19724 = (inst_19723__$1 == null);
var state_19792__$1 = (function (){var statearr_19798 = state_19792;
(statearr_19798[(8)] = inst_19723__$1);

return statearr_19798;
})();
if(cljs.core.truth_(inst_19724)){
var statearr_19799_19845 = state_19792__$1;
(statearr_19799_19845[(1)] = (5));

} else {
var statearr_19800_19846 = state_19792__$1;
(statearr_19800_19846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (15))){
var inst_19765 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
var statearr_19801_19847 = state_19792__$1;
(statearr_19801_19847[(2)] = inst_19765);

(statearr_19801_19847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (21))){
var inst_19785 = (state_19792[(2)]);
var state_19792__$1 = (function (){var statearr_19802 = state_19792;
(statearr_19802[(9)] = inst_19785);

return statearr_19802;
})();
var statearr_19803_19848 = state_19792__$1;
(statearr_19803_19848[(2)] = null);

(statearr_19803_19848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (13))){
var inst_19747 = (state_19792[(10)]);
var inst_19749 = cljs.core.chunked_seq_QMARK_.call(null,inst_19747);
var state_19792__$1 = state_19792;
if(inst_19749){
var statearr_19804_19849 = state_19792__$1;
(statearr_19804_19849[(1)] = (16));

} else {
var statearr_19805_19850 = state_19792__$1;
(statearr_19805_19850[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (22))){
var inst_19777 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
if(cljs.core.truth_(inst_19777)){
var statearr_19806_19851 = state_19792__$1;
(statearr_19806_19851[(1)] = (23));

} else {
var statearr_19807_19852 = state_19792__$1;
(statearr_19807_19852[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (6))){
var inst_19771 = (state_19792[(7)]);
var inst_19773 = (state_19792[(11)]);
var inst_19723 = (state_19792[(8)]);
var inst_19771__$1 = topic_fn.call(null,inst_19723);
var inst_19772 = cljs.core.deref.call(null,mults);
var inst_19773__$1 = cljs.core.get.call(null,inst_19772,inst_19771__$1);
var state_19792__$1 = (function (){var statearr_19808 = state_19792;
(statearr_19808[(7)] = inst_19771__$1);

(statearr_19808[(11)] = inst_19773__$1);

return statearr_19808;
})();
if(cljs.core.truth_(inst_19773__$1)){
var statearr_19809_19853 = state_19792__$1;
(statearr_19809_19853[(1)] = (19));

} else {
var statearr_19810_19854 = state_19792__$1;
(statearr_19810_19854[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (25))){
var inst_19782 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
var statearr_19811_19855 = state_19792__$1;
(statearr_19811_19855[(2)] = inst_19782);

(statearr_19811_19855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (17))){
var inst_19747 = (state_19792[(10)]);
var inst_19756 = cljs.core.first.call(null,inst_19747);
var inst_19757 = cljs.core.async.muxch_STAR_.call(null,inst_19756);
var inst_19758 = cljs.core.async.close_BANG_.call(null,inst_19757);
var inst_19759 = cljs.core.next.call(null,inst_19747);
var inst_19733 = inst_19759;
var inst_19734 = null;
var inst_19735 = (0);
var inst_19736 = (0);
var state_19792__$1 = (function (){var statearr_19812 = state_19792;
(statearr_19812[(12)] = inst_19733);

(statearr_19812[(13)] = inst_19734);

(statearr_19812[(14)] = inst_19735);

(statearr_19812[(15)] = inst_19758);

(statearr_19812[(16)] = inst_19736);

return statearr_19812;
})();
var statearr_19813_19856 = state_19792__$1;
(statearr_19813_19856[(2)] = null);

(statearr_19813_19856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (3))){
var inst_19790 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19792__$1,inst_19790);
} else {
if((state_val_19793 === (12))){
var inst_19767 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
var statearr_19814_19857 = state_19792__$1;
(statearr_19814_19857[(2)] = inst_19767);

(statearr_19814_19857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (2))){
var state_19792__$1 = state_19792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19792__$1,(4),ch);
} else {
if((state_val_19793 === (23))){
var state_19792__$1 = state_19792;
var statearr_19815_19858 = state_19792__$1;
(statearr_19815_19858[(2)] = null);

(statearr_19815_19858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (19))){
var inst_19773 = (state_19792[(11)]);
var inst_19723 = (state_19792[(8)]);
var inst_19775 = cljs.core.async.muxch_STAR_.call(null,inst_19773);
var state_19792__$1 = state_19792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19792__$1,(22),inst_19775,inst_19723);
} else {
if((state_val_19793 === (11))){
var inst_19733 = (state_19792[(12)]);
var inst_19747 = (state_19792[(10)]);
var inst_19747__$1 = cljs.core.seq.call(null,inst_19733);
var state_19792__$1 = (function (){var statearr_19816 = state_19792;
(statearr_19816[(10)] = inst_19747__$1);

return statearr_19816;
})();
if(inst_19747__$1){
var statearr_19817_19859 = state_19792__$1;
(statearr_19817_19859[(1)] = (13));

} else {
var statearr_19818_19860 = state_19792__$1;
(statearr_19818_19860[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (9))){
var inst_19769 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
var statearr_19819_19861 = state_19792__$1;
(statearr_19819_19861[(2)] = inst_19769);

(statearr_19819_19861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (5))){
var inst_19730 = cljs.core.deref.call(null,mults);
var inst_19731 = cljs.core.vals.call(null,inst_19730);
var inst_19732 = cljs.core.seq.call(null,inst_19731);
var inst_19733 = inst_19732;
var inst_19734 = null;
var inst_19735 = (0);
var inst_19736 = (0);
var state_19792__$1 = (function (){var statearr_19820 = state_19792;
(statearr_19820[(12)] = inst_19733);

(statearr_19820[(13)] = inst_19734);

(statearr_19820[(14)] = inst_19735);

(statearr_19820[(16)] = inst_19736);

return statearr_19820;
})();
var statearr_19821_19862 = state_19792__$1;
(statearr_19821_19862[(2)] = null);

(statearr_19821_19862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (14))){
var state_19792__$1 = state_19792;
var statearr_19825_19863 = state_19792__$1;
(statearr_19825_19863[(2)] = null);

(statearr_19825_19863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (16))){
var inst_19747 = (state_19792[(10)]);
var inst_19751 = cljs.core.chunk_first.call(null,inst_19747);
var inst_19752 = cljs.core.chunk_rest.call(null,inst_19747);
var inst_19753 = cljs.core.count.call(null,inst_19751);
var inst_19733 = inst_19752;
var inst_19734 = inst_19751;
var inst_19735 = inst_19753;
var inst_19736 = (0);
var state_19792__$1 = (function (){var statearr_19826 = state_19792;
(statearr_19826[(12)] = inst_19733);

(statearr_19826[(13)] = inst_19734);

(statearr_19826[(14)] = inst_19735);

(statearr_19826[(16)] = inst_19736);

return statearr_19826;
})();
var statearr_19827_19864 = state_19792__$1;
(statearr_19827_19864[(2)] = null);

(statearr_19827_19864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (10))){
var inst_19733 = (state_19792[(12)]);
var inst_19734 = (state_19792[(13)]);
var inst_19735 = (state_19792[(14)]);
var inst_19736 = (state_19792[(16)]);
var inst_19741 = cljs.core._nth.call(null,inst_19734,inst_19736);
var inst_19742 = cljs.core.async.muxch_STAR_.call(null,inst_19741);
var inst_19743 = cljs.core.async.close_BANG_.call(null,inst_19742);
var inst_19744 = (inst_19736 + (1));
var tmp19822 = inst_19733;
var tmp19823 = inst_19734;
var tmp19824 = inst_19735;
var inst_19733__$1 = tmp19822;
var inst_19734__$1 = tmp19823;
var inst_19735__$1 = tmp19824;
var inst_19736__$1 = inst_19744;
var state_19792__$1 = (function (){var statearr_19828 = state_19792;
(statearr_19828[(12)] = inst_19733__$1);

(statearr_19828[(13)] = inst_19734__$1);

(statearr_19828[(14)] = inst_19735__$1);

(statearr_19828[(17)] = inst_19743);

(statearr_19828[(16)] = inst_19736__$1);

return statearr_19828;
})();
var statearr_19829_19865 = state_19792__$1;
(statearr_19829_19865[(2)] = null);

(statearr_19829_19865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (18))){
var inst_19762 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
var statearr_19830_19866 = state_19792__$1;
(statearr_19830_19866[(2)] = inst_19762);

(statearr_19830_19866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (8))){
var inst_19735 = (state_19792[(14)]);
var inst_19736 = (state_19792[(16)]);
var inst_19738 = (inst_19736 < inst_19735);
var inst_19739 = inst_19738;
var state_19792__$1 = state_19792;
if(cljs.core.truth_(inst_19739)){
var statearr_19831_19867 = state_19792__$1;
(statearr_19831_19867[(1)] = (10));

} else {
var statearr_19832_19868 = state_19792__$1;
(statearr_19832_19868[(1)] = (11));

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
});})(c__6861__auto___19840,mults,ensure_mult,p))
;
return ((function (switch__6805__auto__,c__6861__auto___19840,mults,ensure_mult,p){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_19836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19836[(0)] = state_machine__6806__auto__);

(statearr_19836[(1)] = (1));

return statearr_19836;
});
var state_machine__6806__auto____1 = (function (state_19792){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_19792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e19837){if((e19837 instanceof Object)){
var ex__6809__auto__ = e19837;
var statearr_19838_19869 = state_19792;
(statearr_19838_19869[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19870 = state_19792;
state_19792 = G__19870;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_19792){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_19792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___19840,mults,ensure_mult,p))
})();
var state__6863__auto__ = (function (){var statearr_19839 = f__6862__auto__.call(null);
(statearr_19839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___19840);

return statearr_19839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___19840,mults,ensure_mult,p))
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
var c__6861__auto___20007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___20007,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___20007,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19977){
var state_val_19978 = (state_19977[(1)]);
if((state_val_19978 === (7))){
var state_19977__$1 = state_19977;
var statearr_19979_20008 = state_19977__$1;
(statearr_19979_20008[(2)] = null);

(statearr_19979_20008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (1))){
var state_19977__$1 = state_19977;
var statearr_19980_20009 = state_19977__$1;
(statearr_19980_20009[(2)] = null);

(statearr_19980_20009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (4))){
var inst_19941 = (state_19977[(7)]);
var inst_19943 = (inst_19941 < cnt);
var state_19977__$1 = state_19977;
if(cljs.core.truth_(inst_19943)){
var statearr_19981_20010 = state_19977__$1;
(statearr_19981_20010[(1)] = (6));

} else {
var statearr_19982_20011 = state_19977__$1;
(statearr_19982_20011[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (15))){
var inst_19973 = (state_19977[(2)]);
var state_19977__$1 = state_19977;
var statearr_19983_20012 = state_19977__$1;
(statearr_19983_20012[(2)] = inst_19973);

(statearr_19983_20012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (13))){
var inst_19966 = cljs.core.async.close_BANG_.call(null,out);
var state_19977__$1 = state_19977;
var statearr_19984_20013 = state_19977__$1;
(statearr_19984_20013[(2)] = inst_19966);

(statearr_19984_20013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (6))){
var state_19977__$1 = state_19977;
var statearr_19985_20014 = state_19977__$1;
(statearr_19985_20014[(2)] = null);

(statearr_19985_20014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (3))){
var inst_19975 = (state_19977[(2)]);
var state_19977__$1 = state_19977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19977__$1,inst_19975);
} else {
if((state_val_19978 === (12))){
var inst_19963 = (state_19977[(8)]);
var inst_19963__$1 = (state_19977[(2)]);
var inst_19964 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19963__$1);
var state_19977__$1 = (function (){var statearr_19986 = state_19977;
(statearr_19986[(8)] = inst_19963__$1);

return statearr_19986;
})();
if(cljs.core.truth_(inst_19964)){
var statearr_19987_20015 = state_19977__$1;
(statearr_19987_20015[(1)] = (13));

} else {
var statearr_19988_20016 = state_19977__$1;
(statearr_19988_20016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (2))){
var inst_19940 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19941 = (0);
var state_19977__$1 = (function (){var statearr_19989 = state_19977;
(statearr_19989[(7)] = inst_19941);

(statearr_19989[(9)] = inst_19940);

return statearr_19989;
})();
var statearr_19990_20017 = state_19977__$1;
(statearr_19990_20017[(2)] = null);

(statearr_19990_20017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (11))){
var inst_19941 = (state_19977[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19977,(10),Object,null,(9));
var inst_19950 = chs__$1.call(null,inst_19941);
var inst_19951 = done.call(null,inst_19941);
var inst_19952 = cljs.core.async.take_BANG_.call(null,inst_19950,inst_19951);
var state_19977__$1 = state_19977;
var statearr_19991_20018 = state_19977__$1;
(statearr_19991_20018[(2)] = inst_19952);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19977__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (9))){
var inst_19941 = (state_19977[(7)]);
var inst_19954 = (state_19977[(2)]);
var inst_19955 = (inst_19941 + (1));
var inst_19941__$1 = inst_19955;
var state_19977__$1 = (function (){var statearr_19992 = state_19977;
(statearr_19992[(7)] = inst_19941__$1);

(statearr_19992[(10)] = inst_19954);

return statearr_19992;
})();
var statearr_19993_20019 = state_19977__$1;
(statearr_19993_20019[(2)] = null);

(statearr_19993_20019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (5))){
var inst_19961 = (state_19977[(2)]);
var state_19977__$1 = (function (){var statearr_19994 = state_19977;
(statearr_19994[(11)] = inst_19961);

return statearr_19994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19977__$1,(12),dchan);
} else {
if((state_val_19978 === (14))){
var inst_19963 = (state_19977[(8)]);
var inst_19968 = cljs.core.apply.call(null,f,inst_19963);
var state_19977__$1 = state_19977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19977__$1,(16),out,inst_19968);
} else {
if((state_val_19978 === (16))){
var inst_19970 = (state_19977[(2)]);
var state_19977__$1 = (function (){var statearr_19995 = state_19977;
(statearr_19995[(12)] = inst_19970);

return statearr_19995;
})();
var statearr_19996_20020 = state_19977__$1;
(statearr_19996_20020[(2)] = null);

(statearr_19996_20020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (10))){
var inst_19945 = (state_19977[(2)]);
var inst_19946 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19977__$1 = (function (){var statearr_19997 = state_19977;
(statearr_19997[(13)] = inst_19945);

return statearr_19997;
})();
var statearr_19998_20021 = state_19977__$1;
(statearr_19998_20021[(2)] = inst_19946);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19977__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (8))){
var inst_19959 = (state_19977[(2)]);
var state_19977__$1 = state_19977;
var statearr_19999_20022 = state_19977__$1;
(statearr_19999_20022[(2)] = inst_19959);

(statearr_19999_20022[(1)] = (5));


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
});})(c__6861__auto___20007,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6805__auto__,c__6861__auto___20007,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20003[(0)] = state_machine__6806__auto__);

(statearr_20003[(1)] = (1));

return statearr_20003;
});
var state_machine__6806__auto____1 = (function (state_19977){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_19977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20004){if((e20004 instanceof Object)){
var ex__6809__auto__ = e20004;
var statearr_20005_20023 = state_19977;
(statearr_20005_20023[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20024 = state_19977;
state_19977 = G__20024;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_19977){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_19977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___20007,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6863__auto__ = (function (){var statearr_20006 = f__6862__auto__.call(null);
(statearr_20006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___20007);

return statearr_20006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___20007,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6861__auto___20132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___20132,out){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___20132,out){
return (function (state_20108){
var state_val_20109 = (state_20108[(1)]);
if((state_val_20109 === (7))){
var inst_20088 = (state_20108[(7)]);
var inst_20087 = (state_20108[(8)]);
var inst_20087__$1 = (state_20108[(2)]);
var inst_20088__$1 = cljs.core.nth.call(null,inst_20087__$1,(0),null);
var inst_20089 = cljs.core.nth.call(null,inst_20087__$1,(1),null);
var inst_20090 = (inst_20088__$1 == null);
var state_20108__$1 = (function (){var statearr_20110 = state_20108;
(statearr_20110[(9)] = inst_20089);

(statearr_20110[(7)] = inst_20088__$1);

(statearr_20110[(8)] = inst_20087__$1);

return statearr_20110;
})();
if(cljs.core.truth_(inst_20090)){
var statearr_20111_20133 = state_20108__$1;
(statearr_20111_20133[(1)] = (8));

} else {
var statearr_20112_20134 = state_20108__$1;
(statearr_20112_20134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20109 === (1))){
var inst_20079 = cljs.core.vec.call(null,chs);
var inst_20080 = inst_20079;
var state_20108__$1 = (function (){var statearr_20113 = state_20108;
(statearr_20113[(10)] = inst_20080);

return statearr_20113;
})();
var statearr_20114_20135 = state_20108__$1;
(statearr_20114_20135[(2)] = null);

(statearr_20114_20135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20109 === (4))){
var inst_20080 = (state_20108[(10)]);
var state_20108__$1 = state_20108;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20108__$1,(7),inst_20080);
} else {
if((state_val_20109 === (6))){
var inst_20104 = (state_20108[(2)]);
var state_20108__$1 = state_20108;
var statearr_20115_20136 = state_20108__$1;
(statearr_20115_20136[(2)] = inst_20104);

(statearr_20115_20136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20109 === (3))){
var inst_20106 = (state_20108[(2)]);
var state_20108__$1 = state_20108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20108__$1,inst_20106);
} else {
if((state_val_20109 === (2))){
var inst_20080 = (state_20108[(10)]);
var inst_20082 = cljs.core.count.call(null,inst_20080);
var inst_20083 = (inst_20082 > (0));
var state_20108__$1 = state_20108;
if(cljs.core.truth_(inst_20083)){
var statearr_20117_20137 = state_20108__$1;
(statearr_20117_20137[(1)] = (4));

} else {
var statearr_20118_20138 = state_20108__$1;
(statearr_20118_20138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20109 === (11))){
var inst_20080 = (state_20108[(10)]);
var inst_20097 = (state_20108[(2)]);
var tmp20116 = inst_20080;
var inst_20080__$1 = tmp20116;
var state_20108__$1 = (function (){var statearr_20119 = state_20108;
(statearr_20119[(11)] = inst_20097);

(statearr_20119[(10)] = inst_20080__$1);

return statearr_20119;
})();
var statearr_20120_20139 = state_20108__$1;
(statearr_20120_20139[(2)] = null);

(statearr_20120_20139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20109 === (9))){
var inst_20088 = (state_20108[(7)]);
var state_20108__$1 = state_20108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20108__$1,(11),out,inst_20088);
} else {
if((state_val_20109 === (5))){
var inst_20102 = cljs.core.async.close_BANG_.call(null,out);
var state_20108__$1 = state_20108;
var statearr_20121_20140 = state_20108__$1;
(statearr_20121_20140[(2)] = inst_20102);

(statearr_20121_20140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20109 === (10))){
var inst_20100 = (state_20108[(2)]);
var state_20108__$1 = state_20108;
var statearr_20122_20141 = state_20108__$1;
(statearr_20122_20141[(2)] = inst_20100);

(statearr_20122_20141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20109 === (8))){
var inst_20089 = (state_20108[(9)]);
var inst_20088 = (state_20108[(7)]);
var inst_20087 = (state_20108[(8)]);
var inst_20080 = (state_20108[(10)]);
var inst_20092 = (function (){var c = inst_20089;
var v = inst_20088;
var vec__20085 = inst_20087;
var cs = inst_20080;
return ((function (c,v,vec__20085,cs,inst_20089,inst_20088,inst_20087,inst_20080,state_val_20109,c__6861__auto___20132,out){
return (function (p1__20025_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20025_SHARP_);
});
;})(c,v,vec__20085,cs,inst_20089,inst_20088,inst_20087,inst_20080,state_val_20109,c__6861__auto___20132,out))
})();
var inst_20093 = cljs.core.filterv.call(null,inst_20092,inst_20080);
var inst_20080__$1 = inst_20093;
var state_20108__$1 = (function (){var statearr_20123 = state_20108;
(statearr_20123[(10)] = inst_20080__$1);

return statearr_20123;
})();
var statearr_20124_20142 = state_20108__$1;
(statearr_20124_20142[(2)] = null);

(statearr_20124_20142[(1)] = (2));


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
});})(c__6861__auto___20132,out))
;
return ((function (switch__6805__auto__,c__6861__auto___20132,out){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20128 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20128[(0)] = state_machine__6806__auto__);

(statearr_20128[(1)] = (1));

return statearr_20128;
});
var state_machine__6806__auto____1 = (function (state_20108){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20129){if((e20129 instanceof Object)){
var ex__6809__auto__ = e20129;
var statearr_20130_20143 = state_20108;
(statearr_20130_20143[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20144 = state_20108;
state_20108 = G__20144;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20108){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___20132,out))
})();
var state__6863__auto__ = (function (){var statearr_20131 = f__6862__auto__.call(null);
(statearr_20131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___20132);

return statearr_20131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___20132,out))
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
var c__6861__auto___20237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___20237,out){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___20237,out){
return (function (state_20214){
var state_val_20215 = (state_20214[(1)]);
if((state_val_20215 === (7))){
var inst_20196 = (state_20214[(7)]);
var inst_20196__$1 = (state_20214[(2)]);
var inst_20197 = (inst_20196__$1 == null);
var inst_20198 = cljs.core.not.call(null,inst_20197);
var state_20214__$1 = (function (){var statearr_20216 = state_20214;
(statearr_20216[(7)] = inst_20196__$1);

return statearr_20216;
})();
if(inst_20198){
var statearr_20217_20238 = state_20214__$1;
(statearr_20217_20238[(1)] = (8));

} else {
var statearr_20218_20239 = state_20214__$1;
(statearr_20218_20239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (1))){
var inst_20191 = (0);
var state_20214__$1 = (function (){var statearr_20219 = state_20214;
(statearr_20219[(8)] = inst_20191);

return statearr_20219;
})();
var statearr_20220_20240 = state_20214__$1;
(statearr_20220_20240[(2)] = null);

(statearr_20220_20240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (4))){
var state_20214__$1 = state_20214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20214__$1,(7),ch);
} else {
if((state_val_20215 === (6))){
var inst_20209 = (state_20214[(2)]);
var state_20214__$1 = state_20214;
var statearr_20221_20241 = state_20214__$1;
(statearr_20221_20241[(2)] = inst_20209);

(statearr_20221_20241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (3))){
var inst_20211 = (state_20214[(2)]);
var inst_20212 = cljs.core.async.close_BANG_.call(null,out);
var state_20214__$1 = (function (){var statearr_20222 = state_20214;
(statearr_20222[(9)] = inst_20211);

return statearr_20222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20214__$1,inst_20212);
} else {
if((state_val_20215 === (2))){
var inst_20191 = (state_20214[(8)]);
var inst_20193 = (inst_20191 < n);
var state_20214__$1 = state_20214;
if(cljs.core.truth_(inst_20193)){
var statearr_20223_20242 = state_20214__$1;
(statearr_20223_20242[(1)] = (4));

} else {
var statearr_20224_20243 = state_20214__$1;
(statearr_20224_20243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (11))){
var inst_20191 = (state_20214[(8)]);
var inst_20201 = (state_20214[(2)]);
var inst_20202 = (inst_20191 + (1));
var inst_20191__$1 = inst_20202;
var state_20214__$1 = (function (){var statearr_20225 = state_20214;
(statearr_20225[(10)] = inst_20201);

(statearr_20225[(8)] = inst_20191__$1);

return statearr_20225;
})();
var statearr_20226_20244 = state_20214__$1;
(statearr_20226_20244[(2)] = null);

(statearr_20226_20244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (9))){
var state_20214__$1 = state_20214;
var statearr_20227_20245 = state_20214__$1;
(statearr_20227_20245[(2)] = null);

(statearr_20227_20245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (5))){
var state_20214__$1 = state_20214;
var statearr_20228_20246 = state_20214__$1;
(statearr_20228_20246[(2)] = null);

(statearr_20228_20246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (10))){
var inst_20206 = (state_20214[(2)]);
var state_20214__$1 = state_20214;
var statearr_20229_20247 = state_20214__$1;
(statearr_20229_20247[(2)] = inst_20206);

(statearr_20229_20247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (8))){
var inst_20196 = (state_20214[(7)]);
var state_20214__$1 = state_20214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20214__$1,(11),out,inst_20196);
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
});})(c__6861__auto___20237,out))
;
return ((function (switch__6805__auto__,c__6861__auto___20237,out){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20233 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20233[(0)] = state_machine__6806__auto__);

(statearr_20233[(1)] = (1));

return statearr_20233;
});
var state_machine__6806__auto____1 = (function (state_20214){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20234){if((e20234 instanceof Object)){
var ex__6809__auto__ = e20234;
var statearr_20235_20248 = state_20214;
(statearr_20235_20248[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20249 = state_20214;
state_20214 = G__20249;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20214){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___20237,out))
})();
var state__6863__auto__ = (function (){var statearr_20236 = f__6862__auto__.call(null);
(statearr_20236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___20237);

return statearr_20236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___20237,out))
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
if(typeof cljs.core.async.t20257 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20257 = (function (ch,f,map_LT_,meta20258){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20258 = meta20258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20257.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t20257.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t20260 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20260 = (function (fn1,_,meta20258,map_LT_,f,ch,meta20261){
this.fn1 = fn1;
this._ = _;
this.meta20258 = meta20258;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20261 = meta20261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20260.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t20260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20250_SHARP_){
return f1.call(null,(((p1__20250_SHARP_ == null))?null:self__.f.call(null,p1__20250_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t20260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20262){
var self__ = this;
var _20262__$1 = this;
return self__.meta20261;
});})(___$1))
;

cljs.core.async.t20260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20262,meta20261__$1){
var self__ = this;
var _20262__$1 = this;
return (new cljs.core.async.t20260(self__.fn1,self__._,self__.meta20258,self__.map_LT_,self__.f,self__.ch,meta20261__$1));
});})(___$1))
;

cljs.core.async.t20260.cljs$lang$type = true;

cljs.core.async.t20260.cljs$lang$ctorStr = "cljs.core.async/t20260";

cljs.core.async.t20260.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t20260");
});})(___$1))
;

cljs.core.async.__GT_t20260 = ((function (___$1){
return (function __GT_t20260(fn1__$1,___$2,meta20258__$1,map_LT___$1,f__$1,ch__$1,meta20261){
return (new cljs.core.async.t20260(fn1__$1,___$2,meta20258__$1,map_LT___$1,f__$1,ch__$1,meta20261));
});})(___$1))
;

}

return (new cljs.core.async.t20260(fn1,___$1,self__.meta20258,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t20257.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20257.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20259){
var self__ = this;
var _20259__$1 = this;
return self__.meta20258;
});

cljs.core.async.t20257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20259,meta20258__$1){
var self__ = this;
var _20259__$1 = this;
return (new cljs.core.async.t20257(self__.ch,self__.f,self__.map_LT_,meta20258__$1));
});

cljs.core.async.t20257.cljs$lang$type = true;

cljs.core.async.t20257.cljs$lang$ctorStr = "cljs.core.async/t20257";

cljs.core.async.t20257.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t20257");
});

cljs.core.async.__GT_t20257 = (function __GT_t20257(ch__$1,f__$1,map_LT___$1,meta20258){
return (new cljs.core.async.t20257(ch__$1,f__$1,map_LT___$1,meta20258));
});

}

return (new cljs.core.async.t20257(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t20266 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20266 = (function (ch,f,map_GT_,meta20267){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20267 = meta20267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20266.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t20266.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20266.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20268){
var self__ = this;
var _20268__$1 = this;
return self__.meta20267;
});

cljs.core.async.t20266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20268,meta20267__$1){
var self__ = this;
var _20268__$1 = this;
return (new cljs.core.async.t20266(self__.ch,self__.f,self__.map_GT_,meta20267__$1));
});

cljs.core.async.t20266.cljs$lang$type = true;

cljs.core.async.t20266.cljs$lang$ctorStr = "cljs.core.async/t20266";

cljs.core.async.t20266.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t20266");
});

cljs.core.async.__GT_t20266 = (function __GT_t20266(ch__$1,f__$1,map_GT___$1,meta20267){
return (new cljs.core.async.t20266(ch__$1,f__$1,map_GT___$1,meta20267));
});

}

return (new cljs.core.async.t20266(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t20272 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20272 = (function (ch,p,filter_GT_,meta20273){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20273 = meta20273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20272.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t20272.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20272.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20272.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20274){
var self__ = this;
var _20274__$1 = this;
return self__.meta20273;
});

cljs.core.async.t20272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20274,meta20273__$1){
var self__ = this;
var _20274__$1 = this;
return (new cljs.core.async.t20272(self__.ch,self__.p,self__.filter_GT_,meta20273__$1));
});

cljs.core.async.t20272.cljs$lang$type = true;

cljs.core.async.t20272.cljs$lang$ctorStr = "cljs.core.async/t20272";

cljs.core.async.t20272.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t20272");
});

cljs.core.async.__GT_t20272 = (function __GT_t20272(ch__$1,p__$1,filter_GT___$1,meta20273){
return (new cljs.core.async.t20272(ch__$1,p__$1,filter_GT___$1,meta20273));
});

}

return (new cljs.core.async.t20272(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var c__6861__auto___20357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___20357,out){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___20357,out){
return (function (state_20336){
var state_val_20337 = (state_20336[(1)]);
if((state_val_20337 === (7))){
var inst_20332 = (state_20336[(2)]);
var state_20336__$1 = state_20336;
var statearr_20338_20358 = state_20336__$1;
(statearr_20338_20358[(2)] = inst_20332);

(statearr_20338_20358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20337 === (1))){
var state_20336__$1 = state_20336;
var statearr_20339_20359 = state_20336__$1;
(statearr_20339_20359[(2)] = null);

(statearr_20339_20359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20337 === (4))){
var inst_20318 = (state_20336[(7)]);
var inst_20318__$1 = (state_20336[(2)]);
var inst_20319 = (inst_20318__$1 == null);
var state_20336__$1 = (function (){var statearr_20340 = state_20336;
(statearr_20340[(7)] = inst_20318__$1);

return statearr_20340;
})();
if(cljs.core.truth_(inst_20319)){
var statearr_20341_20360 = state_20336__$1;
(statearr_20341_20360[(1)] = (5));

} else {
var statearr_20342_20361 = state_20336__$1;
(statearr_20342_20361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20337 === (6))){
var inst_20318 = (state_20336[(7)]);
var inst_20323 = p.call(null,inst_20318);
var state_20336__$1 = state_20336;
if(cljs.core.truth_(inst_20323)){
var statearr_20343_20362 = state_20336__$1;
(statearr_20343_20362[(1)] = (8));

} else {
var statearr_20344_20363 = state_20336__$1;
(statearr_20344_20363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20337 === (3))){
var inst_20334 = (state_20336[(2)]);
var state_20336__$1 = state_20336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20336__$1,inst_20334);
} else {
if((state_val_20337 === (2))){
var state_20336__$1 = state_20336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20336__$1,(4),ch);
} else {
if((state_val_20337 === (11))){
var inst_20326 = (state_20336[(2)]);
var state_20336__$1 = state_20336;
var statearr_20345_20364 = state_20336__$1;
(statearr_20345_20364[(2)] = inst_20326);

(statearr_20345_20364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20337 === (9))){
var state_20336__$1 = state_20336;
var statearr_20346_20365 = state_20336__$1;
(statearr_20346_20365[(2)] = null);

(statearr_20346_20365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20337 === (5))){
var inst_20321 = cljs.core.async.close_BANG_.call(null,out);
var state_20336__$1 = state_20336;
var statearr_20347_20366 = state_20336__$1;
(statearr_20347_20366[(2)] = inst_20321);

(statearr_20347_20366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20337 === (10))){
var inst_20329 = (state_20336[(2)]);
var state_20336__$1 = (function (){var statearr_20348 = state_20336;
(statearr_20348[(8)] = inst_20329);

return statearr_20348;
})();
var statearr_20349_20367 = state_20336__$1;
(statearr_20349_20367[(2)] = null);

(statearr_20349_20367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20337 === (8))){
var inst_20318 = (state_20336[(7)]);
var state_20336__$1 = state_20336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20336__$1,(11),out,inst_20318);
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
});})(c__6861__auto___20357,out))
;
return ((function (switch__6805__auto__,c__6861__auto___20357,out){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20353 = [null,null,null,null,null,null,null,null,null];
(statearr_20353[(0)] = state_machine__6806__auto__);

(statearr_20353[(1)] = (1));

return statearr_20353;
});
var state_machine__6806__auto____1 = (function (state_20336){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20354){if((e20354 instanceof Object)){
var ex__6809__auto__ = e20354;
var statearr_20355_20368 = state_20336;
(statearr_20355_20368[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20369 = state_20336;
state_20336 = G__20369;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20336){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___20357,out))
})();
var state__6863__auto__ = (function (){var statearr_20356 = f__6862__auto__.call(null);
(statearr_20356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___20357);

return statearr_20356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___20357,out))
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
return (function (state_20535){
var state_val_20536 = (state_20535[(1)]);
if((state_val_20536 === (7))){
var inst_20531 = (state_20535[(2)]);
var state_20535__$1 = state_20535;
var statearr_20537_20578 = state_20535__$1;
(statearr_20537_20578[(2)] = inst_20531);

(statearr_20537_20578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (20))){
var inst_20501 = (state_20535[(7)]);
var inst_20512 = (state_20535[(2)]);
var inst_20513 = cljs.core.next.call(null,inst_20501);
var inst_20487 = inst_20513;
var inst_20488 = null;
var inst_20489 = (0);
var inst_20490 = (0);
var state_20535__$1 = (function (){var statearr_20538 = state_20535;
(statearr_20538[(8)] = inst_20487);

(statearr_20538[(9)] = inst_20488);

(statearr_20538[(10)] = inst_20490);

(statearr_20538[(11)] = inst_20512);

(statearr_20538[(12)] = inst_20489);

return statearr_20538;
})();
var statearr_20539_20579 = state_20535__$1;
(statearr_20539_20579[(2)] = null);

(statearr_20539_20579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (1))){
var state_20535__$1 = state_20535;
var statearr_20540_20580 = state_20535__$1;
(statearr_20540_20580[(2)] = null);

(statearr_20540_20580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (4))){
var inst_20476 = (state_20535[(13)]);
var inst_20476__$1 = (state_20535[(2)]);
var inst_20477 = (inst_20476__$1 == null);
var state_20535__$1 = (function (){var statearr_20541 = state_20535;
(statearr_20541[(13)] = inst_20476__$1);

return statearr_20541;
})();
if(cljs.core.truth_(inst_20477)){
var statearr_20542_20581 = state_20535__$1;
(statearr_20542_20581[(1)] = (5));

} else {
var statearr_20543_20582 = state_20535__$1;
(statearr_20543_20582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (15))){
var state_20535__$1 = state_20535;
var statearr_20547_20583 = state_20535__$1;
(statearr_20547_20583[(2)] = null);

(statearr_20547_20583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (21))){
var state_20535__$1 = state_20535;
var statearr_20548_20584 = state_20535__$1;
(statearr_20548_20584[(2)] = null);

(statearr_20548_20584[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (13))){
var inst_20487 = (state_20535[(8)]);
var inst_20488 = (state_20535[(9)]);
var inst_20490 = (state_20535[(10)]);
var inst_20489 = (state_20535[(12)]);
var inst_20497 = (state_20535[(2)]);
var inst_20498 = (inst_20490 + (1));
var tmp20544 = inst_20487;
var tmp20545 = inst_20488;
var tmp20546 = inst_20489;
var inst_20487__$1 = tmp20544;
var inst_20488__$1 = tmp20545;
var inst_20489__$1 = tmp20546;
var inst_20490__$1 = inst_20498;
var state_20535__$1 = (function (){var statearr_20549 = state_20535;
(statearr_20549[(14)] = inst_20497);

(statearr_20549[(8)] = inst_20487__$1);

(statearr_20549[(9)] = inst_20488__$1);

(statearr_20549[(10)] = inst_20490__$1);

(statearr_20549[(12)] = inst_20489__$1);

return statearr_20549;
})();
var statearr_20550_20585 = state_20535__$1;
(statearr_20550_20585[(2)] = null);

(statearr_20550_20585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (22))){
var state_20535__$1 = state_20535;
var statearr_20551_20586 = state_20535__$1;
(statearr_20551_20586[(2)] = null);

(statearr_20551_20586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (6))){
var inst_20476 = (state_20535[(13)]);
var inst_20485 = f.call(null,inst_20476);
var inst_20486 = cljs.core.seq.call(null,inst_20485);
var inst_20487 = inst_20486;
var inst_20488 = null;
var inst_20489 = (0);
var inst_20490 = (0);
var state_20535__$1 = (function (){var statearr_20552 = state_20535;
(statearr_20552[(8)] = inst_20487);

(statearr_20552[(9)] = inst_20488);

(statearr_20552[(10)] = inst_20490);

(statearr_20552[(12)] = inst_20489);

return statearr_20552;
})();
var statearr_20553_20587 = state_20535__$1;
(statearr_20553_20587[(2)] = null);

(statearr_20553_20587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (17))){
var inst_20501 = (state_20535[(7)]);
var inst_20505 = cljs.core.chunk_first.call(null,inst_20501);
var inst_20506 = cljs.core.chunk_rest.call(null,inst_20501);
var inst_20507 = cljs.core.count.call(null,inst_20505);
var inst_20487 = inst_20506;
var inst_20488 = inst_20505;
var inst_20489 = inst_20507;
var inst_20490 = (0);
var state_20535__$1 = (function (){var statearr_20554 = state_20535;
(statearr_20554[(8)] = inst_20487);

(statearr_20554[(9)] = inst_20488);

(statearr_20554[(10)] = inst_20490);

(statearr_20554[(12)] = inst_20489);

return statearr_20554;
})();
var statearr_20555_20588 = state_20535__$1;
(statearr_20555_20588[(2)] = null);

(statearr_20555_20588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (3))){
var inst_20533 = (state_20535[(2)]);
var state_20535__$1 = state_20535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20535__$1,inst_20533);
} else {
if((state_val_20536 === (12))){
var inst_20521 = (state_20535[(2)]);
var state_20535__$1 = state_20535;
var statearr_20556_20589 = state_20535__$1;
(statearr_20556_20589[(2)] = inst_20521);

(statearr_20556_20589[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (2))){
var state_20535__$1 = state_20535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20535__$1,(4),in$);
} else {
if((state_val_20536 === (23))){
var inst_20529 = (state_20535[(2)]);
var state_20535__$1 = state_20535;
var statearr_20557_20590 = state_20535__$1;
(statearr_20557_20590[(2)] = inst_20529);

(statearr_20557_20590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (19))){
var inst_20516 = (state_20535[(2)]);
var state_20535__$1 = state_20535;
var statearr_20558_20591 = state_20535__$1;
(statearr_20558_20591[(2)] = inst_20516);

(statearr_20558_20591[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (11))){
var inst_20487 = (state_20535[(8)]);
var inst_20501 = (state_20535[(7)]);
var inst_20501__$1 = cljs.core.seq.call(null,inst_20487);
var state_20535__$1 = (function (){var statearr_20559 = state_20535;
(statearr_20559[(7)] = inst_20501__$1);

return statearr_20559;
})();
if(inst_20501__$1){
var statearr_20560_20592 = state_20535__$1;
(statearr_20560_20592[(1)] = (14));

} else {
var statearr_20561_20593 = state_20535__$1;
(statearr_20561_20593[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (9))){
var inst_20523 = (state_20535[(2)]);
var inst_20524 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20535__$1 = (function (){var statearr_20562 = state_20535;
(statearr_20562[(15)] = inst_20523);

return statearr_20562;
})();
if(cljs.core.truth_(inst_20524)){
var statearr_20563_20594 = state_20535__$1;
(statearr_20563_20594[(1)] = (21));

} else {
var statearr_20564_20595 = state_20535__$1;
(statearr_20564_20595[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (5))){
var inst_20479 = cljs.core.async.close_BANG_.call(null,out);
var state_20535__$1 = state_20535;
var statearr_20565_20596 = state_20535__$1;
(statearr_20565_20596[(2)] = inst_20479);

(statearr_20565_20596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (14))){
var inst_20501 = (state_20535[(7)]);
var inst_20503 = cljs.core.chunked_seq_QMARK_.call(null,inst_20501);
var state_20535__$1 = state_20535;
if(inst_20503){
var statearr_20566_20597 = state_20535__$1;
(statearr_20566_20597[(1)] = (17));

} else {
var statearr_20567_20598 = state_20535__$1;
(statearr_20567_20598[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (16))){
var inst_20519 = (state_20535[(2)]);
var state_20535__$1 = state_20535;
var statearr_20568_20599 = state_20535__$1;
(statearr_20568_20599[(2)] = inst_20519);

(statearr_20568_20599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20536 === (10))){
var inst_20488 = (state_20535[(9)]);
var inst_20490 = (state_20535[(10)]);
var inst_20495 = cljs.core._nth.call(null,inst_20488,inst_20490);
var state_20535__$1 = state_20535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20535__$1,(13),out,inst_20495);
} else {
if((state_val_20536 === (18))){
var inst_20501 = (state_20535[(7)]);
var inst_20510 = cljs.core.first.call(null,inst_20501);
var state_20535__$1 = state_20535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20535__$1,(20),out,inst_20510);
} else {
if((state_val_20536 === (8))){
var inst_20490 = (state_20535[(10)]);
var inst_20489 = (state_20535[(12)]);
var inst_20492 = (inst_20490 < inst_20489);
var inst_20493 = inst_20492;
var state_20535__$1 = state_20535;
if(cljs.core.truth_(inst_20493)){
var statearr_20569_20600 = state_20535__$1;
(statearr_20569_20600[(1)] = (10));

} else {
var statearr_20570_20601 = state_20535__$1;
(statearr_20570_20601[(1)] = (11));

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
var statearr_20574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20574[(0)] = state_machine__6806__auto__);

(statearr_20574[(1)] = (1));

return statearr_20574;
});
var state_machine__6806__auto____1 = (function (state_20535){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20575){if((e20575 instanceof Object)){
var ex__6809__auto__ = e20575;
var statearr_20576_20602 = state_20535;
(statearr_20576_20602[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20603 = state_20535;
state_20535 = G__20603;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20535){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto__))
})();
var state__6863__auto__ = (function (){var statearr_20577 = f__6862__auto__.call(null);
(statearr_20577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto__);

return statearr_20577;
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
var c__6861__auto___20700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___20700,out){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___20700,out){
return (function (state_20675){
var state_val_20676 = (state_20675[(1)]);
if((state_val_20676 === (7))){
var inst_20670 = (state_20675[(2)]);
var state_20675__$1 = state_20675;
var statearr_20677_20701 = state_20675__$1;
(statearr_20677_20701[(2)] = inst_20670);

(statearr_20677_20701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20676 === (1))){
var inst_20652 = null;
var state_20675__$1 = (function (){var statearr_20678 = state_20675;
(statearr_20678[(7)] = inst_20652);

return statearr_20678;
})();
var statearr_20679_20702 = state_20675__$1;
(statearr_20679_20702[(2)] = null);

(statearr_20679_20702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20676 === (4))){
var inst_20655 = (state_20675[(8)]);
var inst_20655__$1 = (state_20675[(2)]);
var inst_20656 = (inst_20655__$1 == null);
var inst_20657 = cljs.core.not.call(null,inst_20656);
var state_20675__$1 = (function (){var statearr_20680 = state_20675;
(statearr_20680[(8)] = inst_20655__$1);

return statearr_20680;
})();
if(inst_20657){
var statearr_20681_20703 = state_20675__$1;
(statearr_20681_20703[(1)] = (5));

} else {
var statearr_20682_20704 = state_20675__$1;
(statearr_20682_20704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20676 === (6))){
var state_20675__$1 = state_20675;
var statearr_20683_20705 = state_20675__$1;
(statearr_20683_20705[(2)] = null);

(statearr_20683_20705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20676 === (3))){
var inst_20672 = (state_20675[(2)]);
var inst_20673 = cljs.core.async.close_BANG_.call(null,out);
var state_20675__$1 = (function (){var statearr_20684 = state_20675;
(statearr_20684[(9)] = inst_20672);

return statearr_20684;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20675__$1,inst_20673);
} else {
if((state_val_20676 === (2))){
var state_20675__$1 = state_20675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20675__$1,(4),ch);
} else {
if((state_val_20676 === (11))){
var inst_20655 = (state_20675[(8)]);
var inst_20664 = (state_20675[(2)]);
var inst_20652 = inst_20655;
var state_20675__$1 = (function (){var statearr_20685 = state_20675;
(statearr_20685[(10)] = inst_20664);

(statearr_20685[(7)] = inst_20652);

return statearr_20685;
})();
var statearr_20686_20706 = state_20675__$1;
(statearr_20686_20706[(2)] = null);

(statearr_20686_20706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20676 === (9))){
var inst_20655 = (state_20675[(8)]);
var state_20675__$1 = state_20675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20675__$1,(11),out,inst_20655);
} else {
if((state_val_20676 === (5))){
var inst_20655 = (state_20675[(8)]);
var inst_20652 = (state_20675[(7)]);
var inst_20659 = cljs.core._EQ_.call(null,inst_20655,inst_20652);
var state_20675__$1 = state_20675;
if(inst_20659){
var statearr_20688_20707 = state_20675__$1;
(statearr_20688_20707[(1)] = (8));

} else {
var statearr_20689_20708 = state_20675__$1;
(statearr_20689_20708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20676 === (10))){
var inst_20667 = (state_20675[(2)]);
var state_20675__$1 = state_20675;
var statearr_20690_20709 = state_20675__$1;
(statearr_20690_20709[(2)] = inst_20667);

(statearr_20690_20709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20676 === (8))){
var inst_20652 = (state_20675[(7)]);
var tmp20687 = inst_20652;
var inst_20652__$1 = tmp20687;
var state_20675__$1 = (function (){var statearr_20691 = state_20675;
(statearr_20691[(7)] = inst_20652__$1);

return statearr_20691;
})();
var statearr_20692_20710 = state_20675__$1;
(statearr_20692_20710[(2)] = null);

(statearr_20692_20710[(1)] = (2));


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
});})(c__6861__auto___20700,out))
;
return ((function (switch__6805__auto__,c__6861__auto___20700,out){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20696 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20696[(0)] = state_machine__6806__auto__);

(statearr_20696[(1)] = (1));

return statearr_20696;
});
var state_machine__6806__auto____1 = (function (state_20675){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20697){if((e20697 instanceof Object)){
var ex__6809__auto__ = e20697;
var statearr_20698_20711 = state_20675;
(statearr_20698_20711[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20712 = state_20675;
state_20675 = G__20712;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20675){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___20700,out))
})();
var state__6863__auto__ = (function (){var statearr_20699 = f__6862__auto__.call(null);
(statearr_20699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___20700);

return statearr_20699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___20700,out))
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
var c__6861__auto___20847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___20847,out){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___20847,out){
return (function (state_20817){
var state_val_20818 = (state_20817[(1)]);
if((state_val_20818 === (7))){
var inst_20813 = (state_20817[(2)]);
var state_20817__$1 = state_20817;
var statearr_20819_20848 = state_20817__$1;
(statearr_20819_20848[(2)] = inst_20813);

(statearr_20819_20848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20818 === (1))){
var inst_20780 = (new Array(n));
var inst_20781 = inst_20780;
var inst_20782 = (0);
var state_20817__$1 = (function (){var statearr_20820 = state_20817;
(statearr_20820[(7)] = inst_20781);

(statearr_20820[(8)] = inst_20782);

return statearr_20820;
})();
var statearr_20821_20849 = state_20817__$1;
(statearr_20821_20849[(2)] = null);

(statearr_20821_20849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20818 === (4))){
var inst_20785 = (state_20817[(9)]);
var inst_20785__$1 = (state_20817[(2)]);
var inst_20786 = (inst_20785__$1 == null);
var inst_20787 = cljs.core.not.call(null,inst_20786);
var state_20817__$1 = (function (){var statearr_20822 = state_20817;
(statearr_20822[(9)] = inst_20785__$1);

return statearr_20822;
})();
if(inst_20787){
var statearr_20823_20850 = state_20817__$1;
(statearr_20823_20850[(1)] = (5));

} else {
var statearr_20824_20851 = state_20817__$1;
(statearr_20824_20851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20818 === (15))){
var inst_20807 = (state_20817[(2)]);
var state_20817__$1 = state_20817;
var statearr_20825_20852 = state_20817__$1;
(statearr_20825_20852[(2)] = inst_20807);

(statearr_20825_20852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20818 === (13))){
var state_20817__$1 = state_20817;
var statearr_20826_20853 = state_20817__$1;
(statearr_20826_20853[(2)] = null);

(statearr_20826_20853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20818 === (6))){
var inst_20782 = (state_20817[(8)]);
var inst_20803 = (inst_20782 > (0));
var state_20817__$1 = state_20817;
if(cljs.core.truth_(inst_20803)){
var statearr_20827_20854 = state_20817__$1;
(statearr_20827_20854[(1)] = (12));

} else {
var statearr_20828_20855 = state_20817__$1;
(statearr_20828_20855[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20818 === (3))){
var inst_20815 = (state_20817[(2)]);
var state_20817__$1 = state_20817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20817__$1,inst_20815);
} else {
if((state_val_20818 === (12))){
var inst_20781 = (state_20817[(7)]);
var inst_20805 = cljs.core.vec.call(null,inst_20781);
var state_20817__$1 = state_20817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20817__$1,(15),out,inst_20805);
} else {
if((state_val_20818 === (2))){
var state_20817__$1 = state_20817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20817__$1,(4),ch);
} else {
if((state_val_20818 === (11))){
var inst_20797 = (state_20817[(2)]);
var inst_20798 = (new Array(n));
var inst_20781 = inst_20798;
var inst_20782 = (0);
var state_20817__$1 = (function (){var statearr_20829 = state_20817;
(statearr_20829[(7)] = inst_20781);

(statearr_20829[(8)] = inst_20782);

(statearr_20829[(10)] = inst_20797);

return statearr_20829;
})();
var statearr_20830_20856 = state_20817__$1;
(statearr_20830_20856[(2)] = null);

(statearr_20830_20856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20818 === (9))){
var inst_20781 = (state_20817[(7)]);
var inst_20795 = cljs.core.vec.call(null,inst_20781);
var state_20817__$1 = state_20817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20817__$1,(11),out,inst_20795);
} else {
if((state_val_20818 === (5))){
var inst_20781 = (state_20817[(7)]);
var inst_20790 = (state_20817[(11)]);
var inst_20785 = (state_20817[(9)]);
var inst_20782 = (state_20817[(8)]);
var inst_20789 = (inst_20781[inst_20782] = inst_20785);
var inst_20790__$1 = (inst_20782 + (1));
var inst_20791 = (inst_20790__$1 < n);
var state_20817__$1 = (function (){var statearr_20831 = state_20817;
(statearr_20831[(11)] = inst_20790__$1);

(statearr_20831[(12)] = inst_20789);

return statearr_20831;
})();
if(cljs.core.truth_(inst_20791)){
var statearr_20832_20857 = state_20817__$1;
(statearr_20832_20857[(1)] = (8));

} else {
var statearr_20833_20858 = state_20817__$1;
(statearr_20833_20858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20818 === (14))){
var inst_20810 = (state_20817[(2)]);
var inst_20811 = cljs.core.async.close_BANG_.call(null,out);
var state_20817__$1 = (function (){var statearr_20835 = state_20817;
(statearr_20835[(13)] = inst_20810);

return statearr_20835;
})();
var statearr_20836_20859 = state_20817__$1;
(statearr_20836_20859[(2)] = inst_20811);

(statearr_20836_20859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20818 === (10))){
var inst_20801 = (state_20817[(2)]);
var state_20817__$1 = state_20817;
var statearr_20837_20860 = state_20817__$1;
(statearr_20837_20860[(2)] = inst_20801);

(statearr_20837_20860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20818 === (8))){
var inst_20781 = (state_20817[(7)]);
var inst_20790 = (state_20817[(11)]);
var tmp20834 = inst_20781;
var inst_20781__$1 = tmp20834;
var inst_20782 = inst_20790;
var state_20817__$1 = (function (){var statearr_20838 = state_20817;
(statearr_20838[(7)] = inst_20781__$1);

(statearr_20838[(8)] = inst_20782);

return statearr_20838;
})();
var statearr_20839_20861 = state_20817__$1;
(statearr_20839_20861[(2)] = null);

(statearr_20839_20861[(1)] = (2));


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
});})(c__6861__auto___20847,out))
;
return ((function (switch__6805__auto__,c__6861__auto___20847,out){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_20843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20843[(0)] = state_machine__6806__auto__);

(statearr_20843[(1)] = (1));

return statearr_20843;
});
var state_machine__6806__auto____1 = (function (state_20817){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e20844){if((e20844 instanceof Object)){
var ex__6809__auto__ = e20844;
var statearr_20845_20862 = state_20817;
(statearr_20845_20862[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20863 = state_20817;
state_20817 = G__20863;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20817){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___20847,out))
})();
var state__6863__auto__ = (function (){var statearr_20846 = f__6862__auto__.call(null);
(statearr_20846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___20847);

return statearr_20846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___20847,out))
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
var c__6861__auto___21006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto___21006,out){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto___21006,out){
return (function (state_20976){
var state_val_20977 = (state_20976[(1)]);
if((state_val_20977 === (7))){
var inst_20972 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
var statearr_20978_21007 = state_20976__$1;
(statearr_20978_21007[(2)] = inst_20972);

(statearr_20978_21007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (1))){
var inst_20935 = [];
var inst_20936 = inst_20935;
var inst_20937 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20976__$1 = (function (){var statearr_20979 = state_20976;
(statearr_20979[(7)] = inst_20936);

(statearr_20979[(8)] = inst_20937);

return statearr_20979;
})();
var statearr_20980_21008 = state_20976__$1;
(statearr_20980_21008[(2)] = null);

(statearr_20980_21008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (4))){
var inst_20940 = (state_20976[(9)]);
var inst_20940__$1 = (state_20976[(2)]);
var inst_20941 = (inst_20940__$1 == null);
var inst_20942 = cljs.core.not.call(null,inst_20941);
var state_20976__$1 = (function (){var statearr_20981 = state_20976;
(statearr_20981[(9)] = inst_20940__$1);

return statearr_20981;
})();
if(inst_20942){
var statearr_20982_21009 = state_20976__$1;
(statearr_20982_21009[(1)] = (5));

} else {
var statearr_20983_21010 = state_20976__$1;
(statearr_20983_21010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (15))){
var inst_20966 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
var statearr_20984_21011 = state_20976__$1;
(statearr_20984_21011[(2)] = inst_20966);

(statearr_20984_21011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (13))){
var state_20976__$1 = state_20976;
var statearr_20985_21012 = state_20976__$1;
(statearr_20985_21012[(2)] = null);

(statearr_20985_21012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (6))){
var inst_20936 = (state_20976[(7)]);
var inst_20961 = inst_20936.length;
var inst_20962 = (inst_20961 > (0));
var state_20976__$1 = state_20976;
if(cljs.core.truth_(inst_20962)){
var statearr_20986_21013 = state_20976__$1;
(statearr_20986_21013[(1)] = (12));

} else {
var statearr_20987_21014 = state_20976__$1;
(statearr_20987_21014[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (3))){
var inst_20974 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20976__$1,inst_20974);
} else {
if((state_val_20977 === (12))){
var inst_20936 = (state_20976[(7)]);
var inst_20964 = cljs.core.vec.call(null,inst_20936);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20976__$1,(15),out,inst_20964);
} else {
if((state_val_20977 === (2))){
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20976__$1,(4),ch);
} else {
if((state_val_20977 === (11))){
var inst_20940 = (state_20976[(9)]);
var inst_20944 = (state_20976[(10)]);
var inst_20954 = (state_20976[(2)]);
var inst_20955 = [];
var inst_20956 = inst_20955.push(inst_20940);
var inst_20936 = inst_20955;
var inst_20937 = inst_20944;
var state_20976__$1 = (function (){var statearr_20988 = state_20976;
(statearr_20988[(11)] = inst_20956);

(statearr_20988[(7)] = inst_20936);

(statearr_20988[(12)] = inst_20954);

(statearr_20988[(8)] = inst_20937);

return statearr_20988;
})();
var statearr_20989_21015 = state_20976__$1;
(statearr_20989_21015[(2)] = null);

(statearr_20989_21015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (9))){
var inst_20936 = (state_20976[(7)]);
var inst_20952 = cljs.core.vec.call(null,inst_20936);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20976__$1,(11),out,inst_20952);
} else {
if((state_val_20977 === (5))){
var inst_20940 = (state_20976[(9)]);
var inst_20944 = (state_20976[(10)]);
var inst_20937 = (state_20976[(8)]);
var inst_20944__$1 = f.call(null,inst_20940);
var inst_20945 = cljs.core._EQ_.call(null,inst_20944__$1,inst_20937);
var inst_20946 = cljs.core.keyword_identical_QMARK_.call(null,inst_20937,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20947 = (inst_20945) || (inst_20946);
var state_20976__$1 = (function (){var statearr_20990 = state_20976;
(statearr_20990[(10)] = inst_20944__$1);

return statearr_20990;
})();
if(cljs.core.truth_(inst_20947)){
var statearr_20991_21016 = state_20976__$1;
(statearr_20991_21016[(1)] = (8));

} else {
var statearr_20992_21017 = state_20976__$1;
(statearr_20992_21017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (14))){
var inst_20969 = (state_20976[(2)]);
var inst_20970 = cljs.core.async.close_BANG_.call(null,out);
var state_20976__$1 = (function (){var statearr_20994 = state_20976;
(statearr_20994[(13)] = inst_20969);

return statearr_20994;
})();
var statearr_20995_21018 = state_20976__$1;
(statearr_20995_21018[(2)] = inst_20970);

(statearr_20995_21018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (10))){
var inst_20959 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
var statearr_20996_21019 = state_20976__$1;
(statearr_20996_21019[(2)] = inst_20959);

(statearr_20996_21019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (8))){
var inst_20940 = (state_20976[(9)]);
var inst_20944 = (state_20976[(10)]);
var inst_20936 = (state_20976[(7)]);
var inst_20949 = inst_20936.push(inst_20940);
var tmp20993 = inst_20936;
var inst_20936__$1 = tmp20993;
var inst_20937 = inst_20944;
var state_20976__$1 = (function (){var statearr_20997 = state_20976;
(statearr_20997[(7)] = inst_20936__$1);

(statearr_20997[(8)] = inst_20937);

(statearr_20997[(14)] = inst_20949);

return statearr_20997;
})();
var statearr_20998_21020 = state_20976__$1;
(statearr_20998_21020[(2)] = null);

(statearr_20998_21020[(1)] = (2));


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
});})(c__6861__auto___21006,out))
;
return ((function (switch__6805__auto__,c__6861__auto___21006,out){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_21002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21002[(0)] = state_machine__6806__auto__);

(statearr_21002[(1)] = (1));

return statearr_21002;
});
var state_machine__6806__auto____1 = (function (state_20976){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_20976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e21003){if((e21003 instanceof Object)){
var ex__6809__auto__ = e21003;
var statearr_21004_21021 = state_20976;
(statearr_21004_21021[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21022 = state_20976;
state_20976 = G__21022;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_20976){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_20976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto___21006,out))
})();
var state__6863__auto__ = (function (){var statearr_21005 = f__6862__auto__.call(null);
(statearr_21005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto___21006);

return statearr_21005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto___21006,out))
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