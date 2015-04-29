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
if(typeof cljs.core.async.t16924 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16924 = (function (f,fn_handler,meta16925){
this.f = f;
this.fn_handler = fn_handler;
this.meta16925 = meta16925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16924.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16926){
var self__ = this;
var _16926__$1 = this;
return self__.meta16925;
});

cljs.core.async.t16924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16926,meta16925__$1){
var self__ = this;
var _16926__$1 = this;
return (new cljs.core.async.t16924(self__.f,self__.fn_handler,meta16925__$1));
});

cljs.core.async.t16924.cljs$lang$type = true;

cljs.core.async.t16924.cljs$lang$ctorStr = "cljs.core.async/t16924";

cljs.core.async.t16924.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t16924");
});

cljs.core.async.__GT_t16924 = (function __GT_t16924(f__$1,fn_handler__$1,meta16925){
return (new cljs.core.async.t16924(f__$1,fn_handler__$1,meta16925));
});

}

return (new cljs.core.async.t16924(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var G__16928 = buff;
if(G__16928){
var bit__4480__auto__ = null;
if(cljs.core.truth_((function (){var or__3799__auto__ = bit__4480__auto__;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return G__16928.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16928.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16928);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16928);
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
var val_16929 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16929);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16929,ret){
return (function (){
return fn1.call(null,val_16929);
});})(val_16929,ret))
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
var n__4686__auto___16930 = n;
var x_16931 = (0);
while(true){
if((x_16931 < n__4686__auto___16930)){
(a[x_16931] = (0));

var G__16932 = (x_16931 + (1));
x_16931 = G__16932;
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

var G__16933 = (i + (1));
i = G__16933;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16937 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16937 = (function (flag,alt_flag,meta16938){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16938 = meta16938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16937.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16939){
var self__ = this;
var _16939__$1 = this;
return self__.meta16938;
});})(flag))
;

cljs.core.async.t16937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16939,meta16938__$1){
var self__ = this;
var _16939__$1 = this;
return (new cljs.core.async.t16937(self__.flag,self__.alt_flag,meta16938__$1));
});})(flag))
;

cljs.core.async.t16937.cljs$lang$type = true;

cljs.core.async.t16937.cljs$lang$ctorStr = "cljs.core.async/t16937";

cljs.core.async.t16937.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t16937");
});})(flag))
;

cljs.core.async.__GT_t16937 = ((function (flag){
return (function __GT_t16937(flag__$1,alt_flag__$1,meta16938){
return (new cljs.core.async.t16937(flag__$1,alt_flag__$1,meta16938));
});})(flag))
;

}

return (new cljs.core.async.t16937(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16943 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16943 = (function (cb,flag,alt_handler,meta16944){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16944 = meta16944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16943.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16945){
var self__ = this;
var _16945__$1 = this;
return self__.meta16944;
});

cljs.core.async.t16943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16945,meta16944__$1){
var self__ = this;
var _16945__$1 = this;
return (new cljs.core.async.t16943(self__.cb,self__.flag,self__.alt_handler,meta16944__$1));
});

cljs.core.async.t16943.cljs$lang$type = true;

cljs.core.async.t16943.cljs$lang$ctorStr = "cljs.core.async/t16943";

cljs.core.async.t16943.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t16943");
});

cljs.core.async.__GT_t16943 = (function __GT_t16943(cb__$1,flag__$1,alt_handler__$1,meta16944){
return (new cljs.core.async.t16943(cb__$1,flag__$1,alt_handler__$1,meta16944));
});

}

return (new cljs.core.async.t16943(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
return (function (p1__16946_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16946_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16947_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16947_SHARP_,port], null));
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
var G__16948 = (i + (1));
i = G__16948;
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
var alts_BANG___delegate = function (ports,p__16949){
var map__16951 = p__16949;
var map__16951__$1 = ((cljs.core.seq_QMARK_.call(null,map__16951))?cljs.core.apply.call(null,cljs.core.hash_map,map__16951):map__16951);
var opts = map__16951__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16949 = null;
if (arguments.length > 1) {
var G__16952__i = 0, G__16952__a = new Array(arguments.length -  1);
while (G__16952__i < G__16952__a.length) {G__16952__a[G__16952__i] = arguments[G__16952__i + 1]; ++G__16952__i;}
  p__16949 = new cljs.core.IndexedSeq(G__16952__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__16949);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16953){
var ports = cljs.core.first(arglist__16953);
var p__16949 = cljs.core.rest(arglist__16953);
return alts_BANG___delegate(ports,p__16949);
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
var c__6777__auto___17048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___17048){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___17048){
return (function (state_17024){
var state_val_17025 = (state_17024[(1)]);
if((state_val_17025 === (7))){
var inst_17020 = (state_17024[(2)]);
var state_17024__$1 = state_17024;
var statearr_17026_17049 = state_17024__$1;
(statearr_17026_17049[(2)] = inst_17020);

(statearr_17026_17049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17025 === (1))){
var state_17024__$1 = state_17024;
var statearr_17027_17050 = state_17024__$1;
(statearr_17027_17050[(2)] = null);

(statearr_17027_17050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17025 === (4))){
var inst_17003 = (state_17024[(7)]);
var inst_17003__$1 = (state_17024[(2)]);
var inst_17004 = (inst_17003__$1 == null);
var state_17024__$1 = (function (){var statearr_17028 = state_17024;
(statearr_17028[(7)] = inst_17003__$1);

return statearr_17028;
})();
if(cljs.core.truth_(inst_17004)){
var statearr_17029_17051 = state_17024__$1;
(statearr_17029_17051[(1)] = (5));

} else {
var statearr_17030_17052 = state_17024__$1;
(statearr_17030_17052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17025 === (13))){
var state_17024__$1 = state_17024;
var statearr_17031_17053 = state_17024__$1;
(statearr_17031_17053[(2)] = null);

(statearr_17031_17053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17025 === (6))){
var inst_17003 = (state_17024[(7)]);
var state_17024__$1 = state_17024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17024__$1,(11),to,inst_17003);
} else {
if((state_val_17025 === (3))){
var inst_17022 = (state_17024[(2)]);
var state_17024__$1 = state_17024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17024__$1,inst_17022);
} else {
if((state_val_17025 === (12))){
var state_17024__$1 = state_17024;
var statearr_17032_17054 = state_17024__$1;
(statearr_17032_17054[(2)] = null);

(statearr_17032_17054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17025 === (2))){
var state_17024__$1 = state_17024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17024__$1,(4),from);
} else {
if((state_val_17025 === (11))){
var inst_17013 = (state_17024[(2)]);
var state_17024__$1 = state_17024;
if(cljs.core.truth_(inst_17013)){
var statearr_17033_17055 = state_17024__$1;
(statearr_17033_17055[(1)] = (12));

} else {
var statearr_17034_17056 = state_17024__$1;
(statearr_17034_17056[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17025 === (9))){
var state_17024__$1 = state_17024;
var statearr_17035_17057 = state_17024__$1;
(statearr_17035_17057[(2)] = null);

(statearr_17035_17057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17025 === (5))){
var state_17024__$1 = state_17024;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17036_17058 = state_17024__$1;
(statearr_17036_17058[(1)] = (8));

} else {
var statearr_17037_17059 = state_17024__$1;
(statearr_17037_17059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17025 === (14))){
var inst_17018 = (state_17024[(2)]);
var state_17024__$1 = state_17024;
var statearr_17038_17060 = state_17024__$1;
(statearr_17038_17060[(2)] = inst_17018);

(statearr_17038_17060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17025 === (10))){
var inst_17010 = (state_17024[(2)]);
var state_17024__$1 = state_17024;
var statearr_17039_17061 = state_17024__$1;
(statearr_17039_17061[(2)] = inst_17010);

(statearr_17039_17061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17025 === (8))){
var inst_17007 = cljs.core.async.close_BANG_.call(null,to);
var state_17024__$1 = state_17024;
var statearr_17040_17062 = state_17024__$1;
(statearr_17040_17062[(2)] = inst_17007);

(statearr_17040_17062[(1)] = (10));


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
});})(c__6777__auto___17048))
;
return ((function (switch__6721__auto__,c__6777__auto___17048){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17044 = [null,null,null,null,null,null,null,null];
(statearr_17044[(0)] = state_machine__6722__auto__);

(statearr_17044[(1)] = (1));

return statearr_17044;
});
var state_machine__6722__auto____1 = (function (state_17024){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17045){if((e17045 instanceof Object)){
var ex__6725__auto__ = e17045;
var statearr_17046_17063 = state_17024;
(statearr_17046_17063[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17064 = state_17024;
state_17024 = G__17064;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17024){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___17048))
})();
var state__6779__auto__ = (function (){var statearr_17047 = f__6778__auto__.call(null);
(statearr_17047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17048);

return statearr_17047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___17048))
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
return (function (p__17248){
var vec__17249 = p__17248;
var v = cljs.core.nth.call(null,vec__17249,(0),null);
var p = cljs.core.nth.call(null,vec__17249,(1),null);
var job = vec__17249;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6777__auto___17431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___17431,res,vec__17249,v,p,job,jobs,results){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___17431,res,vec__17249,v,p,job,jobs,results){
return (function (state_17254){
var state_val_17255 = (state_17254[(1)]);
if((state_val_17255 === (2))){
var inst_17251 = (state_17254[(2)]);
var inst_17252 = cljs.core.async.close_BANG_.call(null,res);
var state_17254__$1 = (function (){var statearr_17256 = state_17254;
(statearr_17256[(7)] = inst_17251);

return statearr_17256;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17254__$1,inst_17252);
} else {
if((state_val_17255 === (1))){
var state_17254__$1 = state_17254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17254__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6777__auto___17431,res,vec__17249,v,p,job,jobs,results))
;
return ((function (switch__6721__auto__,c__6777__auto___17431,res,vec__17249,v,p,job,jobs,results){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17260 = [null,null,null,null,null,null,null,null];
(statearr_17260[(0)] = state_machine__6722__auto__);

(statearr_17260[(1)] = (1));

return statearr_17260;
});
var state_machine__6722__auto____1 = (function (state_17254){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17261){if((e17261 instanceof Object)){
var ex__6725__auto__ = e17261;
var statearr_17262_17432 = state_17254;
(statearr_17262_17432[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17433 = state_17254;
state_17254 = G__17433;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17254){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___17431,res,vec__17249,v,p,job,jobs,results))
})();
var state__6779__auto__ = (function (){var statearr_17263 = f__6778__auto__.call(null);
(statearr_17263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17431);

return statearr_17263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___17431,res,vec__17249,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17264){
var vec__17265 = p__17264;
var v = cljs.core.nth.call(null,vec__17265,(0),null);
var p = cljs.core.nth.call(null,vec__17265,(1),null);
var job = vec__17265;
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
var n__4686__auto___17434 = n;
var __17435 = (0);
while(true){
if((__17435 < n__4686__auto___17434)){
var G__17266_17436 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17266_17436) {
case "async":
var c__6777__auto___17438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17435,c__6777__auto___17438,G__17266_17436,n__4686__auto___17434,jobs,results,process,async){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (__17435,c__6777__auto___17438,G__17266_17436,n__4686__auto___17434,jobs,results,process,async){
return (function (state_17279){
var state_val_17280 = (state_17279[(1)]);
if((state_val_17280 === (7))){
var inst_17275 = (state_17279[(2)]);
var state_17279__$1 = state_17279;
var statearr_17281_17439 = state_17279__$1;
(statearr_17281_17439[(2)] = inst_17275);

(statearr_17281_17439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (6))){
var state_17279__$1 = state_17279;
var statearr_17282_17440 = state_17279__$1;
(statearr_17282_17440[(2)] = null);

(statearr_17282_17440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (5))){
var state_17279__$1 = state_17279;
var statearr_17283_17441 = state_17279__$1;
(statearr_17283_17441[(2)] = null);

(statearr_17283_17441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (4))){
var inst_17269 = (state_17279[(2)]);
var inst_17270 = async.call(null,inst_17269);
var state_17279__$1 = state_17279;
if(cljs.core.truth_(inst_17270)){
var statearr_17284_17442 = state_17279__$1;
(statearr_17284_17442[(1)] = (5));

} else {
var statearr_17285_17443 = state_17279__$1;
(statearr_17285_17443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17280 === (3))){
var inst_17277 = (state_17279[(2)]);
var state_17279__$1 = state_17279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17279__$1,inst_17277);
} else {
if((state_val_17280 === (2))){
var state_17279__$1 = state_17279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17279__$1,(4),jobs);
} else {
if((state_val_17280 === (1))){
var state_17279__$1 = state_17279;
var statearr_17286_17444 = state_17279__$1;
(statearr_17286_17444[(2)] = null);

(statearr_17286_17444[(1)] = (2));


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
});})(__17435,c__6777__auto___17438,G__17266_17436,n__4686__auto___17434,jobs,results,process,async))
;
return ((function (__17435,switch__6721__auto__,c__6777__auto___17438,G__17266_17436,n__4686__auto___17434,jobs,results,process,async){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17290 = [null,null,null,null,null,null,null];
(statearr_17290[(0)] = state_machine__6722__auto__);

(statearr_17290[(1)] = (1));

return statearr_17290;
});
var state_machine__6722__auto____1 = (function (state_17279){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17291){if((e17291 instanceof Object)){
var ex__6725__auto__ = e17291;
var statearr_17292_17445 = state_17279;
(statearr_17292_17445[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17446 = state_17279;
state_17279 = G__17446;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17279){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(__17435,switch__6721__auto__,c__6777__auto___17438,G__17266_17436,n__4686__auto___17434,jobs,results,process,async))
})();
var state__6779__auto__ = (function (){var statearr_17293 = f__6778__auto__.call(null);
(statearr_17293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17438);

return statearr_17293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(__17435,c__6777__auto___17438,G__17266_17436,n__4686__auto___17434,jobs,results,process,async))
);


break;
case "compute":
var c__6777__auto___17447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17435,c__6777__auto___17447,G__17266_17436,n__4686__auto___17434,jobs,results,process,async){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (__17435,c__6777__auto___17447,G__17266_17436,n__4686__auto___17434,jobs,results,process,async){
return (function (state_17306){
var state_val_17307 = (state_17306[(1)]);
if((state_val_17307 === (7))){
var inst_17302 = (state_17306[(2)]);
var state_17306__$1 = state_17306;
var statearr_17308_17448 = state_17306__$1;
(statearr_17308_17448[(2)] = inst_17302);

(statearr_17308_17448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17307 === (6))){
var state_17306__$1 = state_17306;
var statearr_17309_17449 = state_17306__$1;
(statearr_17309_17449[(2)] = null);

(statearr_17309_17449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17307 === (5))){
var state_17306__$1 = state_17306;
var statearr_17310_17450 = state_17306__$1;
(statearr_17310_17450[(2)] = null);

(statearr_17310_17450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17307 === (4))){
var inst_17296 = (state_17306[(2)]);
var inst_17297 = process.call(null,inst_17296);
var state_17306__$1 = state_17306;
if(cljs.core.truth_(inst_17297)){
var statearr_17311_17451 = state_17306__$1;
(statearr_17311_17451[(1)] = (5));

} else {
var statearr_17312_17452 = state_17306__$1;
(statearr_17312_17452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17307 === (3))){
var inst_17304 = (state_17306[(2)]);
var state_17306__$1 = state_17306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17306__$1,inst_17304);
} else {
if((state_val_17307 === (2))){
var state_17306__$1 = state_17306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17306__$1,(4),jobs);
} else {
if((state_val_17307 === (1))){
var state_17306__$1 = state_17306;
var statearr_17313_17453 = state_17306__$1;
(statearr_17313_17453[(2)] = null);

(statearr_17313_17453[(1)] = (2));


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
});})(__17435,c__6777__auto___17447,G__17266_17436,n__4686__auto___17434,jobs,results,process,async))
;
return ((function (__17435,switch__6721__auto__,c__6777__auto___17447,G__17266_17436,n__4686__auto___17434,jobs,results,process,async){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17317 = [null,null,null,null,null,null,null];
(statearr_17317[(0)] = state_machine__6722__auto__);

(statearr_17317[(1)] = (1));

return statearr_17317;
});
var state_machine__6722__auto____1 = (function (state_17306){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17318){if((e17318 instanceof Object)){
var ex__6725__auto__ = e17318;
var statearr_17319_17454 = state_17306;
(statearr_17319_17454[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17455 = state_17306;
state_17306 = G__17455;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17306){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(__17435,switch__6721__auto__,c__6777__auto___17447,G__17266_17436,n__4686__auto___17434,jobs,results,process,async))
})();
var state__6779__auto__ = (function (){var statearr_17320 = f__6778__auto__.call(null);
(statearr_17320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17447);

return statearr_17320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(__17435,c__6777__auto___17447,G__17266_17436,n__4686__auto___17434,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17456 = (__17435 + (1));
__17435 = G__17456;
continue;
} else {
}
break;
}

var c__6777__auto___17457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___17457,jobs,results,process,async){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___17457,jobs,results,process,async){
return (function (state_17342){
var state_val_17343 = (state_17342[(1)]);
if((state_val_17343 === (9))){
var inst_17335 = (state_17342[(2)]);
var state_17342__$1 = (function (){var statearr_17344 = state_17342;
(statearr_17344[(7)] = inst_17335);

return statearr_17344;
})();
var statearr_17345_17458 = state_17342__$1;
(statearr_17345_17458[(2)] = null);

(statearr_17345_17458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17343 === (8))){
var inst_17328 = (state_17342[(8)]);
var inst_17333 = (state_17342[(2)]);
var state_17342__$1 = (function (){var statearr_17346 = state_17342;
(statearr_17346[(9)] = inst_17333);

return statearr_17346;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17342__$1,(9),results,inst_17328);
} else {
if((state_val_17343 === (7))){
var inst_17338 = (state_17342[(2)]);
var state_17342__$1 = state_17342;
var statearr_17347_17459 = state_17342__$1;
(statearr_17347_17459[(2)] = inst_17338);

(statearr_17347_17459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17343 === (6))){
var inst_17328 = (state_17342[(8)]);
var inst_17323 = (state_17342[(10)]);
var inst_17328__$1 = cljs.core.async.chan.call(null,(1));
var inst_17329 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17330 = [inst_17323,inst_17328__$1];
var inst_17331 = (new cljs.core.PersistentVector(null,2,(5),inst_17329,inst_17330,null));
var state_17342__$1 = (function (){var statearr_17348 = state_17342;
(statearr_17348[(8)] = inst_17328__$1);

return statearr_17348;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17342__$1,(8),jobs,inst_17331);
} else {
if((state_val_17343 === (5))){
var inst_17326 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17342__$1 = state_17342;
var statearr_17349_17460 = state_17342__$1;
(statearr_17349_17460[(2)] = inst_17326);

(statearr_17349_17460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17343 === (4))){
var inst_17323 = (state_17342[(10)]);
var inst_17323__$1 = (state_17342[(2)]);
var inst_17324 = (inst_17323__$1 == null);
var state_17342__$1 = (function (){var statearr_17350 = state_17342;
(statearr_17350[(10)] = inst_17323__$1);

return statearr_17350;
})();
if(cljs.core.truth_(inst_17324)){
var statearr_17351_17461 = state_17342__$1;
(statearr_17351_17461[(1)] = (5));

} else {
var statearr_17352_17462 = state_17342__$1;
(statearr_17352_17462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17343 === (3))){
var inst_17340 = (state_17342[(2)]);
var state_17342__$1 = state_17342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17342__$1,inst_17340);
} else {
if((state_val_17343 === (2))){
var state_17342__$1 = state_17342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17342__$1,(4),from);
} else {
if((state_val_17343 === (1))){
var state_17342__$1 = state_17342;
var statearr_17353_17463 = state_17342__$1;
(statearr_17353_17463[(2)] = null);

(statearr_17353_17463[(1)] = (2));


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
});})(c__6777__auto___17457,jobs,results,process,async))
;
return ((function (switch__6721__auto__,c__6777__auto___17457,jobs,results,process,async){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17357 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17357[(0)] = state_machine__6722__auto__);

(statearr_17357[(1)] = (1));

return statearr_17357;
});
var state_machine__6722__auto____1 = (function (state_17342){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17358){if((e17358 instanceof Object)){
var ex__6725__auto__ = e17358;
var statearr_17359_17464 = state_17342;
(statearr_17359_17464[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17465 = state_17342;
state_17342 = G__17465;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17342){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___17457,jobs,results,process,async))
})();
var state__6779__auto__ = (function (){var statearr_17360 = f__6778__auto__.call(null);
(statearr_17360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17457);

return statearr_17360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___17457,jobs,results,process,async))
);


var c__6777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto__,jobs,results,process,async){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto__,jobs,results,process,async){
return (function (state_17398){
var state_val_17399 = (state_17398[(1)]);
if((state_val_17399 === (7))){
var inst_17394 = (state_17398[(2)]);
var state_17398__$1 = state_17398;
var statearr_17400_17466 = state_17398__$1;
(statearr_17400_17466[(2)] = inst_17394);

(statearr_17400_17466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (20))){
var state_17398__$1 = state_17398;
var statearr_17401_17467 = state_17398__$1;
(statearr_17401_17467[(2)] = null);

(statearr_17401_17467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (1))){
var state_17398__$1 = state_17398;
var statearr_17402_17468 = state_17398__$1;
(statearr_17402_17468[(2)] = null);

(statearr_17402_17468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (4))){
var inst_17363 = (state_17398[(7)]);
var inst_17363__$1 = (state_17398[(2)]);
var inst_17364 = (inst_17363__$1 == null);
var state_17398__$1 = (function (){var statearr_17403 = state_17398;
(statearr_17403[(7)] = inst_17363__$1);

return statearr_17403;
})();
if(cljs.core.truth_(inst_17364)){
var statearr_17404_17469 = state_17398__$1;
(statearr_17404_17469[(1)] = (5));

} else {
var statearr_17405_17470 = state_17398__$1;
(statearr_17405_17470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (15))){
var inst_17376 = (state_17398[(8)]);
var state_17398__$1 = state_17398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17398__$1,(18),to,inst_17376);
} else {
if((state_val_17399 === (21))){
var inst_17389 = (state_17398[(2)]);
var state_17398__$1 = state_17398;
var statearr_17406_17471 = state_17398__$1;
(statearr_17406_17471[(2)] = inst_17389);

(statearr_17406_17471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (13))){
var inst_17391 = (state_17398[(2)]);
var state_17398__$1 = (function (){var statearr_17407 = state_17398;
(statearr_17407[(9)] = inst_17391);

return statearr_17407;
})();
var statearr_17408_17472 = state_17398__$1;
(statearr_17408_17472[(2)] = null);

(statearr_17408_17472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (6))){
var inst_17363 = (state_17398[(7)]);
var state_17398__$1 = state_17398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17398__$1,(11),inst_17363);
} else {
if((state_val_17399 === (17))){
var inst_17384 = (state_17398[(2)]);
var state_17398__$1 = state_17398;
if(cljs.core.truth_(inst_17384)){
var statearr_17409_17473 = state_17398__$1;
(statearr_17409_17473[(1)] = (19));

} else {
var statearr_17410_17474 = state_17398__$1;
(statearr_17410_17474[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (3))){
var inst_17396 = (state_17398[(2)]);
var state_17398__$1 = state_17398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17398__$1,inst_17396);
} else {
if((state_val_17399 === (12))){
var inst_17373 = (state_17398[(10)]);
var state_17398__$1 = state_17398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17398__$1,(14),inst_17373);
} else {
if((state_val_17399 === (2))){
var state_17398__$1 = state_17398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17398__$1,(4),results);
} else {
if((state_val_17399 === (19))){
var state_17398__$1 = state_17398;
var statearr_17411_17475 = state_17398__$1;
(statearr_17411_17475[(2)] = null);

(statearr_17411_17475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (11))){
var inst_17373 = (state_17398[(2)]);
var state_17398__$1 = (function (){var statearr_17412 = state_17398;
(statearr_17412[(10)] = inst_17373);

return statearr_17412;
})();
var statearr_17413_17476 = state_17398__$1;
(statearr_17413_17476[(2)] = null);

(statearr_17413_17476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (9))){
var state_17398__$1 = state_17398;
var statearr_17414_17477 = state_17398__$1;
(statearr_17414_17477[(2)] = null);

(statearr_17414_17477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (5))){
var state_17398__$1 = state_17398;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17415_17478 = state_17398__$1;
(statearr_17415_17478[(1)] = (8));

} else {
var statearr_17416_17479 = state_17398__$1;
(statearr_17416_17479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (14))){
var inst_17378 = (state_17398[(11)]);
var inst_17376 = (state_17398[(8)]);
var inst_17376__$1 = (state_17398[(2)]);
var inst_17377 = (inst_17376__$1 == null);
var inst_17378__$1 = cljs.core.not.call(null,inst_17377);
var state_17398__$1 = (function (){var statearr_17417 = state_17398;
(statearr_17417[(11)] = inst_17378__$1);

(statearr_17417[(8)] = inst_17376__$1);

return statearr_17417;
})();
if(inst_17378__$1){
var statearr_17418_17480 = state_17398__$1;
(statearr_17418_17480[(1)] = (15));

} else {
var statearr_17419_17481 = state_17398__$1;
(statearr_17419_17481[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (16))){
var inst_17378 = (state_17398[(11)]);
var state_17398__$1 = state_17398;
var statearr_17420_17482 = state_17398__$1;
(statearr_17420_17482[(2)] = inst_17378);

(statearr_17420_17482[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (10))){
var inst_17370 = (state_17398[(2)]);
var state_17398__$1 = state_17398;
var statearr_17421_17483 = state_17398__$1;
(statearr_17421_17483[(2)] = inst_17370);

(statearr_17421_17483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (18))){
var inst_17381 = (state_17398[(2)]);
var state_17398__$1 = state_17398;
var statearr_17422_17484 = state_17398__$1;
(statearr_17422_17484[(2)] = inst_17381);

(statearr_17422_17484[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17399 === (8))){
var inst_17367 = cljs.core.async.close_BANG_.call(null,to);
var state_17398__$1 = state_17398;
var statearr_17423_17485 = state_17398__$1;
(statearr_17423_17485[(2)] = inst_17367);

(statearr_17423_17485[(1)] = (10));


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
var statearr_17427 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17427[(0)] = state_machine__6722__auto__);

(statearr_17427[(1)] = (1));

return statearr_17427;
});
var state_machine__6722__auto____1 = (function (state_17398){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17428){if((e17428 instanceof Object)){
var ex__6725__auto__ = e17428;
var statearr_17429_17486 = state_17398;
(statearr_17429_17486[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17487 = state_17398;
state_17398 = G__17487;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17398){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__,jobs,results,process,async))
})();
var state__6779__auto__ = (function (){var statearr_17430 = f__6778__auto__.call(null);
(statearr_17430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_17430;
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
var c__6777__auto___17588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___17588,tc,fc){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___17588,tc,fc){
return (function (state_17563){
var state_val_17564 = (state_17563[(1)]);
if((state_val_17564 === (7))){
var inst_17559 = (state_17563[(2)]);
var state_17563__$1 = state_17563;
var statearr_17565_17589 = state_17563__$1;
(statearr_17565_17589[(2)] = inst_17559);

(statearr_17565_17589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (1))){
var state_17563__$1 = state_17563;
var statearr_17566_17590 = state_17563__$1;
(statearr_17566_17590[(2)] = null);

(statearr_17566_17590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (4))){
var inst_17540 = (state_17563[(7)]);
var inst_17540__$1 = (state_17563[(2)]);
var inst_17541 = (inst_17540__$1 == null);
var state_17563__$1 = (function (){var statearr_17567 = state_17563;
(statearr_17567[(7)] = inst_17540__$1);

return statearr_17567;
})();
if(cljs.core.truth_(inst_17541)){
var statearr_17568_17591 = state_17563__$1;
(statearr_17568_17591[(1)] = (5));

} else {
var statearr_17569_17592 = state_17563__$1;
(statearr_17569_17592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (13))){
var state_17563__$1 = state_17563;
var statearr_17570_17593 = state_17563__$1;
(statearr_17570_17593[(2)] = null);

(statearr_17570_17593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (6))){
var inst_17540 = (state_17563[(7)]);
var inst_17546 = p.call(null,inst_17540);
var state_17563__$1 = state_17563;
if(cljs.core.truth_(inst_17546)){
var statearr_17571_17594 = state_17563__$1;
(statearr_17571_17594[(1)] = (9));

} else {
var statearr_17572_17595 = state_17563__$1;
(statearr_17572_17595[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (3))){
var inst_17561 = (state_17563[(2)]);
var state_17563__$1 = state_17563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17563__$1,inst_17561);
} else {
if((state_val_17564 === (12))){
var state_17563__$1 = state_17563;
var statearr_17573_17596 = state_17563__$1;
(statearr_17573_17596[(2)] = null);

(statearr_17573_17596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (2))){
var state_17563__$1 = state_17563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17563__$1,(4),ch);
} else {
if((state_val_17564 === (11))){
var inst_17540 = (state_17563[(7)]);
var inst_17550 = (state_17563[(2)]);
var state_17563__$1 = state_17563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17563__$1,(8),inst_17550,inst_17540);
} else {
if((state_val_17564 === (9))){
var state_17563__$1 = state_17563;
var statearr_17574_17597 = state_17563__$1;
(statearr_17574_17597[(2)] = tc);

(statearr_17574_17597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (5))){
var inst_17543 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17544 = cljs.core.async.close_BANG_.call(null,fc);
var state_17563__$1 = (function (){var statearr_17575 = state_17563;
(statearr_17575[(8)] = inst_17543);

return statearr_17575;
})();
var statearr_17576_17598 = state_17563__$1;
(statearr_17576_17598[(2)] = inst_17544);

(statearr_17576_17598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (14))){
var inst_17557 = (state_17563[(2)]);
var state_17563__$1 = state_17563;
var statearr_17577_17599 = state_17563__$1;
(statearr_17577_17599[(2)] = inst_17557);

(statearr_17577_17599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (10))){
var state_17563__$1 = state_17563;
var statearr_17578_17600 = state_17563__$1;
(statearr_17578_17600[(2)] = fc);

(statearr_17578_17600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17564 === (8))){
var inst_17552 = (state_17563[(2)]);
var state_17563__$1 = state_17563;
if(cljs.core.truth_(inst_17552)){
var statearr_17579_17601 = state_17563__$1;
(statearr_17579_17601[(1)] = (12));

} else {
var statearr_17580_17602 = state_17563__$1;
(statearr_17580_17602[(1)] = (13));

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
});})(c__6777__auto___17588,tc,fc))
;
return ((function (switch__6721__auto__,c__6777__auto___17588,tc,fc){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_17584 = [null,null,null,null,null,null,null,null,null];
(statearr_17584[(0)] = state_machine__6722__auto__);

(statearr_17584[(1)] = (1));

return statearr_17584;
});
var state_machine__6722__auto____1 = (function (state_17563){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17585){if((e17585 instanceof Object)){
var ex__6725__auto__ = e17585;
var statearr_17586_17603 = state_17563;
(statearr_17586_17603[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17604 = state_17563;
state_17563 = G__17604;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17563){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___17588,tc,fc))
})();
var state__6779__auto__ = (function (){var statearr_17587 = f__6778__auto__.call(null);
(statearr_17587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___17588);

return statearr_17587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___17588,tc,fc))
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
return (function (state_17651){
var state_val_17652 = (state_17651[(1)]);
if((state_val_17652 === (7))){
var inst_17647 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
var statearr_17653_17669 = state_17651__$1;
(statearr_17653_17669[(2)] = inst_17647);

(statearr_17653_17669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (6))){
var inst_17640 = (state_17651[(7)]);
var inst_17637 = (state_17651[(8)]);
var inst_17644 = f.call(null,inst_17637,inst_17640);
var inst_17637__$1 = inst_17644;
var state_17651__$1 = (function (){var statearr_17654 = state_17651;
(statearr_17654[(8)] = inst_17637__$1);

return statearr_17654;
})();
var statearr_17655_17670 = state_17651__$1;
(statearr_17655_17670[(2)] = null);

(statearr_17655_17670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (5))){
var inst_17637 = (state_17651[(8)]);
var state_17651__$1 = state_17651;
var statearr_17656_17671 = state_17651__$1;
(statearr_17656_17671[(2)] = inst_17637);

(statearr_17656_17671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (4))){
var inst_17640 = (state_17651[(7)]);
var inst_17640__$1 = (state_17651[(2)]);
var inst_17641 = (inst_17640__$1 == null);
var state_17651__$1 = (function (){var statearr_17657 = state_17651;
(statearr_17657[(7)] = inst_17640__$1);

return statearr_17657;
})();
if(cljs.core.truth_(inst_17641)){
var statearr_17658_17672 = state_17651__$1;
(statearr_17658_17672[(1)] = (5));

} else {
var statearr_17659_17673 = state_17651__$1;
(statearr_17659_17673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (3))){
var inst_17649 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17651__$1,inst_17649);
} else {
if((state_val_17652 === (2))){
var state_17651__$1 = state_17651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17651__$1,(4),ch);
} else {
if((state_val_17652 === (1))){
var inst_17637 = init;
var state_17651__$1 = (function (){var statearr_17660 = state_17651;
(statearr_17660[(8)] = inst_17637);

return statearr_17660;
})();
var statearr_17661_17674 = state_17651__$1;
(statearr_17661_17674[(2)] = null);

(statearr_17661_17674[(1)] = (2));


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
var statearr_17665 = [null,null,null,null,null,null,null,null,null];
(statearr_17665[(0)] = state_machine__6722__auto__);

(statearr_17665[(1)] = (1));

return statearr_17665;
});
var state_machine__6722__auto____1 = (function (state_17651){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17666){if((e17666 instanceof Object)){
var ex__6725__auto__ = e17666;
var statearr_17667_17675 = state_17651;
(statearr_17667_17675[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17676 = state_17651;
state_17651 = G__17676;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17651){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__))
})();
var state__6779__auto__ = (function (){var statearr_17668 = f__6778__auto__.call(null);
(statearr_17668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_17668;
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
return (function (state_17750){
var state_val_17751 = (state_17750[(1)]);
if((state_val_17751 === (7))){
var inst_17732 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17752_17775 = state_17750__$1;
(statearr_17752_17775[(2)] = inst_17732);

(statearr_17752_17775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (1))){
var inst_17726 = cljs.core.seq.call(null,coll);
var inst_17727 = inst_17726;
var state_17750__$1 = (function (){var statearr_17753 = state_17750;
(statearr_17753[(7)] = inst_17727);

return statearr_17753;
})();
var statearr_17754_17776 = state_17750__$1;
(statearr_17754_17776[(2)] = null);

(statearr_17754_17776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (4))){
var inst_17727 = (state_17750[(7)]);
var inst_17730 = cljs.core.first.call(null,inst_17727);
var state_17750__$1 = state_17750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17750__$1,(7),ch,inst_17730);
} else {
if((state_val_17751 === (13))){
var inst_17744 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17755_17777 = state_17750__$1;
(statearr_17755_17777[(2)] = inst_17744);

(statearr_17755_17777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (6))){
var inst_17735 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
if(cljs.core.truth_(inst_17735)){
var statearr_17756_17778 = state_17750__$1;
(statearr_17756_17778[(1)] = (8));

} else {
var statearr_17757_17779 = state_17750__$1;
(statearr_17757_17779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (3))){
var inst_17748 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17750__$1,inst_17748);
} else {
if((state_val_17751 === (12))){
var state_17750__$1 = state_17750;
var statearr_17758_17780 = state_17750__$1;
(statearr_17758_17780[(2)] = null);

(statearr_17758_17780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (2))){
var inst_17727 = (state_17750[(7)]);
var state_17750__$1 = state_17750;
if(cljs.core.truth_(inst_17727)){
var statearr_17759_17781 = state_17750__$1;
(statearr_17759_17781[(1)] = (4));

} else {
var statearr_17760_17782 = state_17750__$1;
(statearr_17760_17782[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (11))){
var inst_17741 = cljs.core.async.close_BANG_.call(null,ch);
var state_17750__$1 = state_17750;
var statearr_17761_17783 = state_17750__$1;
(statearr_17761_17783[(2)] = inst_17741);

(statearr_17761_17783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (9))){
var state_17750__$1 = state_17750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17762_17784 = state_17750__$1;
(statearr_17762_17784[(1)] = (11));

} else {
var statearr_17763_17785 = state_17750__$1;
(statearr_17763_17785[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (5))){
var inst_17727 = (state_17750[(7)]);
var state_17750__$1 = state_17750;
var statearr_17764_17786 = state_17750__$1;
(statearr_17764_17786[(2)] = inst_17727);

(statearr_17764_17786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (10))){
var inst_17746 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17765_17787 = state_17750__$1;
(statearr_17765_17787[(2)] = inst_17746);

(statearr_17765_17787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (8))){
var inst_17727 = (state_17750[(7)]);
var inst_17737 = cljs.core.next.call(null,inst_17727);
var inst_17727__$1 = inst_17737;
var state_17750__$1 = (function (){var statearr_17766 = state_17750;
(statearr_17766[(7)] = inst_17727__$1);

return statearr_17766;
})();
var statearr_17767_17788 = state_17750__$1;
(statearr_17767_17788[(2)] = null);

(statearr_17767_17788[(1)] = (2));


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
var statearr_17771 = [null,null,null,null,null,null,null,null];
(statearr_17771[(0)] = state_machine__6722__auto__);

(statearr_17771[(1)] = (1));

return statearr_17771;
});
var state_machine__6722__auto____1 = (function (state_17750){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_17750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e17772){if((e17772 instanceof Object)){
var ex__6725__auto__ = e17772;
var statearr_17773_17789 = state_17750;
(statearr_17773_17789[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17790 = state_17750;
state_17750 = G__17790;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_17750){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_17750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__))
})();
var state__6779__auto__ = (function (){var statearr_17774 = f__6778__auto__.call(null);
(statearr_17774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_17774;
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

cljs.core.async.Mux = (function (){var obj17792 = {};
return obj17792;
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


cljs.core.async.Mult = (function (){var obj17794 = {};
return obj17794;
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
if(typeof cljs.core.async.t18016 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18016 = (function (cs,ch,mult,meta18017){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18017 = meta18017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18016.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18016.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18016.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18016.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t18016.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18018){
var self__ = this;
var _18018__$1 = this;
return self__.meta18017;
});})(cs))
;

cljs.core.async.t18016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18018,meta18017__$1){
var self__ = this;
var _18018__$1 = this;
return (new cljs.core.async.t18016(self__.cs,self__.ch,self__.mult,meta18017__$1));
});})(cs))
;

cljs.core.async.t18016.cljs$lang$type = true;

cljs.core.async.t18016.cljs$lang$ctorStr = "cljs.core.async/t18016";

cljs.core.async.t18016.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t18016");
});})(cs))
;

cljs.core.async.__GT_t18016 = ((function (cs){
return (function __GT_t18016(cs__$1,ch__$1,mult__$1,meta18017){
return (new cljs.core.async.t18016(cs__$1,ch__$1,mult__$1,meta18017));
});})(cs))
;

}

return (new cljs.core.async.t18016(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var c__6777__auto___18237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___18237,cs,m,dchan,dctr,done){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___18237,cs,m,dchan,dctr,done){
return (function (state_18149){
var state_val_18150 = (state_18149[(1)]);
if((state_val_18150 === (7))){
var inst_18145 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18151_18238 = state_18149__$1;
(statearr_18151_18238[(2)] = inst_18145);

(statearr_18151_18238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (20))){
var inst_18050 = (state_18149[(7)]);
var inst_18060 = cljs.core.first.call(null,inst_18050);
var inst_18061 = cljs.core.nth.call(null,inst_18060,(0),null);
var inst_18062 = cljs.core.nth.call(null,inst_18060,(1),null);
var state_18149__$1 = (function (){var statearr_18152 = state_18149;
(statearr_18152[(8)] = inst_18061);

return statearr_18152;
})();
if(cljs.core.truth_(inst_18062)){
var statearr_18153_18239 = state_18149__$1;
(statearr_18153_18239[(1)] = (22));

} else {
var statearr_18154_18240 = state_18149__$1;
(statearr_18154_18240[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (27))){
var inst_18090 = (state_18149[(9)]);
var inst_18097 = (state_18149[(10)]);
var inst_18092 = (state_18149[(11)]);
var inst_18021 = (state_18149[(12)]);
var inst_18097__$1 = cljs.core._nth.call(null,inst_18090,inst_18092);
var inst_18098 = cljs.core.async.put_BANG_.call(null,inst_18097__$1,inst_18021,done);
var state_18149__$1 = (function (){var statearr_18155 = state_18149;
(statearr_18155[(10)] = inst_18097__$1);

return statearr_18155;
})();
if(cljs.core.truth_(inst_18098)){
var statearr_18156_18241 = state_18149__$1;
(statearr_18156_18241[(1)] = (30));

} else {
var statearr_18157_18242 = state_18149__$1;
(statearr_18157_18242[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (1))){
var state_18149__$1 = state_18149;
var statearr_18158_18243 = state_18149__$1;
(statearr_18158_18243[(2)] = null);

(statearr_18158_18243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (24))){
var inst_18050 = (state_18149[(7)]);
var inst_18067 = (state_18149[(2)]);
var inst_18068 = cljs.core.next.call(null,inst_18050);
var inst_18030 = inst_18068;
var inst_18031 = null;
var inst_18032 = (0);
var inst_18033 = (0);
var state_18149__$1 = (function (){var statearr_18159 = state_18149;
(statearr_18159[(13)] = inst_18031);

(statearr_18159[(14)] = inst_18067);

(statearr_18159[(15)] = inst_18030);

(statearr_18159[(16)] = inst_18033);

(statearr_18159[(17)] = inst_18032);

return statearr_18159;
})();
var statearr_18160_18244 = state_18149__$1;
(statearr_18160_18244[(2)] = null);

(statearr_18160_18244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (39))){
var state_18149__$1 = state_18149;
var statearr_18164_18245 = state_18149__$1;
(statearr_18164_18245[(2)] = null);

(statearr_18164_18245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (4))){
var inst_18021 = (state_18149[(12)]);
var inst_18021__$1 = (state_18149[(2)]);
var inst_18022 = (inst_18021__$1 == null);
var state_18149__$1 = (function (){var statearr_18165 = state_18149;
(statearr_18165[(12)] = inst_18021__$1);

return statearr_18165;
})();
if(cljs.core.truth_(inst_18022)){
var statearr_18166_18246 = state_18149__$1;
(statearr_18166_18246[(1)] = (5));

} else {
var statearr_18167_18247 = state_18149__$1;
(statearr_18167_18247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (15))){
var inst_18031 = (state_18149[(13)]);
var inst_18030 = (state_18149[(15)]);
var inst_18033 = (state_18149[(16)]);
var inst_18032 = (state_18149[(17)]);
var inst_18046 = (state_18149[(2)]);
var inst_18047 = (inst_18033 + (1));
var tmp18161 = inst_18031;
var tmp18162 = inst_18030;
var tmp18163 = inst_18032;
var inst_18030__$1 = tmp18162;
var inst_18031__$1 = tmp18161;
var inst_18032__$1 = tmp18163;
var inst_18033__$1 = inst_18047;
var state_18149__$1 = (function (){var statearr_18168 = state_18149;
(statearr_18168[(13)] = inst_18031__$1);

(statearr_18168[(15)] = inst_18030__$1);

(statearr_18168[(18)] = inst_18046);

(statearr_18168[(16)] = inst_18033__$1);

(statearr_18168[(17)] = inst_18032__$1);

return statearr_18168;
})();
var statearr_18169_18248 = state_18149__$1;
(statearr_18169_18248[(2)] = null);

(statearr_18169_18248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (21))){
var inst_18071 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18173_18249 = state_18149__$1;
(statearr_18173_18249[(2)] = inst_18071);

(statearr_18173_18249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (31))){
var inst_18097 = (state_18149[(10)]);
var inst_18101 = done.call(null,null);
var inst_18102 = cljs.core.async.untap_STAR_.call(null,m,inst_18097);
var state_18149__$1 = (function (){var statearr_18174 = state_18149;
(statearr_18174[(19)] = inst_18101);

return statearr_18174;
})();
var statearr_18175_18250 = state_18149__$1;
(statearr_18175_18250[(2)] = inst_18102);

(statearr_18175_18250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (32))){
var inst_18090 = (state_18149[(9)]);
var inst_18091 = (state_18149[(20)]);
var inst_18089 = (state_18149[(21)]);
var inst_18092 = (state_18149[(11)]);
var inst_18104 = (state_18149[(2)]);
var inst_18105 = (inst_18092 + (1));
var tmp18170 = inst_18090;
var tmp18171 = inst_18091;
var tmp18172 = inst_18089;
var inst_18089__$1 = tmp18172;
var inst_18090__$1 = tmp18170;
var inst_18091__$1 = tmp18171;
var inst_18092__$1 = inst_18105;
var state_18149__$1 = (function (){var statearr_18176 = state_18149;
(statearr_18176[(22)] = inst_18104);

(statearr_18176[(9)] = inst_18090__$1);

(statearr_18176[(20)] = inst_18091__$1);

(statearr_18176[(21)] = inst_18089__$1);

(statearr_18176[(11)] = inst_18092__$1);

return statearr_18176;
})();
var statearr_18177_18251 = state_18149__$1;
(statearr_18177_18251[(2)] = null);

(statearr_18177_18251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (40))){
var inst_18117 = (state_18149[(23)]);
var inst_18121 = done.call(null,null);
var inst_18122 = cljs.core.async.untap_STAR_.call(null,m,inst_18117);
var state_18149__$1 = (function (){var statearr_18178 = state_18149;
(statearr_18178[(24)] = inst_18121);

return statearr_18178;
})();
var statearr_18179_18252 = state_18149__$1;
(statearr_18179_18252[(2)] = inst_18122);

(statearr_18179_18252[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (33))){
var inst_18108 = (state_18149[(25)]);
var inst_18110 = cljs.core.chunked_seq_QMARK_.call(null,inst_18108);
var state_18149__$1 = state_18149;
if(inst_18110){
var statearr_18180_18253 = state_18149__$1;
(statearr_18180_18253[(1)] = (36));

} else {
var statearr_18181_18254 = state_18149__$1;
(statearr_18181_18254[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (13))){
var inst_18040 = (state_18149[(26)]);
var inst_18043 = cljs.core.async.close_BANG_.call(null,inst_18040);
var state_18149__$1 = state_18149;
var statearr_18182_18255 = state_18149__$1;
(statearr_18182_18255[(2)] = inst_18043);

(statearr_18182_18255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (22))){
var inst_18061 = (state_18149[(8)]);
var inst_18064 = cljs.core.async.close_BANG_.call(null,inst_18061);
var state_18149__$1 = state_18149;
var statearr_18183_18256 = state_18149__$1;
(statearr_18183_18256[(2)] = inst_18064);

(statearr_18183_18256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (36))){
var inst_18108 = (state_18149[(25)]);
var inst_18112 = cljs.core.chunk_first.call(null,inst_18108);
var inst_18113 = cljs.core.chunk_rest.call(null,inst_18108);
var inst_18114 = cljs.core.count.call(null,inst_18112);
var inst_18089 = inst_18113;
var inst_18090 = inst_18112;
var inst_18091 = inst_18114;
var inst_18092 = (0);
var state_18149__$1 = (function (){var statearr_18184 = state_18149;
(statearr_18184[(9)] = inst_18090);

(statearr_18184[(20)] = inst_18091);

(statearr_18184[(21)] = inst_18089);

(statearr_18184[(11)] = inst_18092);

return statearr_18184;
})();
var statearr_18185_18257 = state_18149__$1;
(statearr_18185_18257[(2)] = null);

(statearr_18185_18257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (41))){
var inst_18108 = (state_18149[(25)]);
var inst_18124 = (state_18149[(2)]);
var inst_18125 = cljs.core.next.call(null,inst_18108);
var inst_18089 = inst_18125;
var inst_18090 = null;
var inst_18091 = (0);
var inst_18092 = (0);
var state_18149__$1 = (function (){var statearr_18186 = state_18149;
(statearr_18186[(27)] = inst_18124);

(statearr_18186[(9)] = inst_18090);

(statearr_18186[(20)] = inst_18091);

(statearr_18186[(21)] = inst_18089);

(statearr_18186[(11)] = inst_18092);

return statearr_18186;
})();
var statearr_18187_18258 = state_18149__$1;
(statearr_18187_18258[(2)] = null);

(statearr_18187_18258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (43))){
var state_18149__$1 = state_18149;
var statearr_18188_18259 = state_18149__$1;
(statearr_18188_18259[(2)] = null);

(statearr_18188_18259[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (29))){
var inst_18133 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18189_18260 = state_18149__$1;
(statearr_18189_18260[(2)] = inst_18133);

(statearr_18189_18260[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (44))){
var inst_18142 = (state_18149[(2)]);
var state_18149__$1 = (function (){var statearr_18190 = state_18149;
(statearr_18190[(28)] = inst_18142);

return statearr_18190;
})();
var statearr_18191_18261 = state_18149__$1;
(statearr_18191_18261[(2)] = null);

(statearr_18191_18261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (6))){
var inst_18081 = (state_18149[(29)]);
var inst_18080 = cljs.core.deref.call(null,cs);
var inst_18081__$1 = cljs.core.keys.call(null,inst_18080);
var inst_18082 = cljs.core.count.call(null,inst_18081__$1);
var inst_18083 = cljs.core.reset_BANG_.call(null,dctr,inst_18082);
var inst_18088 = cljs.core.seq.call(null,inst_18081__$1);
var inst_18089 = inst_18088;
var inst_18090 = null;
var inst_18091 = (0);
var inst_18092 = (0);
var state_18149__$1 = (function (){var statearr_18192 = state_18149;
(statearr_18192[(9)] = inst_18090);

(statearr_18192[(30)] = inst_18083);

(statearr_18192[(20)] = inst_18091);

(statearr_18192[(21)] = inst_18089);

(statearr_18192[(29)] = inst_18081__$1);

(statearr_18192[(11)] = inst_18092);

return statearr_18192;
})();
var statearr_18193_18262 = state_18149__$1;
(statearr_18193_18262[(2)] = null);

(statearr_18193_18262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (28))){
var inst_18108 = (state_18149[(25)]);
var inst_18089 = (state_18149[(21)]);
var inst_18108__$1 = cljs.core.seq.call(null,inst_18089);
var state_18149__$1 = (function (){var statearr_18194 = state_18149;
(statearr_18194[(25)] = inst_18108__$1);

return statearr_18194;
})();
if(inst_18108__$1){
var statearr_18195_18263 = state_18149__$1;
(statearr_18195_18263[(1)] = (33));

} else {
var statearr_18196_18264 = state_18149__$1;
(statearr_18196_18264[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (25))){
var inst_18091 = (state_18149[(20)]);
var inst_18092 = (state_18149[(11)]);
var inst_18094 = (inst_18092 < inst_18091);
var inst_18095 = inst_18094;
var state_18149__$1 = state_18149;
if(cljs.core.truth_(inst_18095)){
var statearr_18197_18265 = state_18149__$1;
(statearr_18197_18265[(1)] = (27));

} else {
var statearr_18198_18266 = state_18149__$1;
(statearr_18198_18266[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (34))){
var state_18149__$1 = state_18149;
var statearr_18199_18267 = state_18149__$1;
(statearr_18199_18267[(2)] = null);

(statearr_18199_18267[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (17))){
var state_18149__$1 = state_18149;
var statearr_18200_18268 = state_18149__$1;
(statearr_18200_18268[(2)] = null);

(statearr_18200_18268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (3))){
var inst_18147 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18149__$1,inst_18147);
} else {
if((state_val_18150 === (12))){
var inst_18076 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18201_18269 = state_18149__$1;
(statearr_18201_18269[(2)] = inst_18076);

(statearr_18201_18269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (2))){
var state_18149__$1 = state_18149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18149__$1,(4),ch);
} else {
if((state_val_18150 === (23))){
var state_18149__$1 = state_18149;
var statearr_18202_18270 = state_18149__$1;
(statearr_18202_18270[(2)] = null);

(statearr_18202_18270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (35))){
var inst_18131 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18203_18271 = state_18149__$1;
(statearr_18203_18271[(2)] = inst_18131);

(statearr_18203_18271[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (19))){
var inst_18050 = (state_18149[(7)]);
var inst_18054 = cljs.core.chunk_first.call(null,inst_18050);
var inst_18055 = cljs.core.chunk_rest.call(null,inst_18050);
var inst_18056 = cljs.core.count.call(null,inst_18054);
var inst_18030 = inst_18055;
var inst_18031 = inst_18054;
var inst_18032 = inst_18056;
var inst_18033 = (0);
var state_18149__$1 = (function (){var statearr_18204 = state_18149;
(statearr_18204[(13)] = inst_18031);

(statearr_18204[(15)] = inst_18030);

(statearr_18204[(16)] = inst_18033);

(statearr_18204[(17)] = inst_18032);

return statearr_18204;
})();
var statearr_18205_18272 = state_18149__$1;
(statearr_18205_18272[(2)] = null);

(statearr_18205_18272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (11))){
var inst_18050 = (state_18149[(7)]);
var inst_18030 = (state_18149[(15)]);
var inst_18050__$1 = cljs.core.seq.call(null,inst_18030);
var state_18149__$1 = (function (){var statearr_18206 = state_18149;
(statearr_18206[(7)] = inst_18050__$1);

return statearr_18206;
})();
if(inst_18050__$1){
var statearr_18207_18273 = state_18149__$1;
(statearr_18207_18273[(1)] = (16));

} else {
var statearr_18208_18274 = state_18149__$1;
(statearr_18208_18274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (9))){
var inst_18078 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18209_18275 = state_18149__$1;
(statearr_18209_18275[(2)] = inst_18078);

(statearr_18209_18275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (5))){
var inst_18028 = cljs.core.deref.call(null,cs);
var inst_18029 = cljs.core.seq.call(null,inst_18028);
var inst_18030 = inst_18029;
var inst_18031 = null;
var inst_18032 = (0);
var inst_18033 = (0);
var state_18149__$1 = (function (){var statearr_18210 = state_18149;
(statearr_18210[(13)] = inst_18031);

(statearr_18210[(15)] = inst_18030);

(statearr_18210[(16)] = inst_18033);

(statearr_18210[(17)] = inst_18032);

return statearr_18210;
})();
var statearr_18211_18276 = state_18149__$1;
(statearr_18211_18276[(2)] = null);

(statearr_18211_18276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (14))){
var state_18149__$1 = state_18149;
var statearr_18212_18277 = state_18149__$1;
(statearr_18212_18277[(2)] = null);

(statearr_18212_18277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (45))){
var inst_18139 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18213_18278 = state_18149__$1;
(statearr_18213_18278[(2)] = inst_18139);

(statearr_18213_18278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (26))){
var inst_18081 = (state_18149[(29)]);
var inst_18135 = (state_18149[(2)]);
var inst_18136 = cljs.core.seq.call(null,inst_18081);
var state_18149__$1 = (function (){var statearr_18214 = state_18149;
(statearr_18214[(31)] = inst_18135);

return statearr_18214;
})();
if(inst_18136){
var statearr_18215_18279 = state_18149__$1;
(statearr_18215_18279[(1)] = (42));

} else {
var statearr_18216_18280 = state_18149__$1;
(statearr_18216_18280[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (16))){
var inst_18050 = (state_18149[(7)]);
var inst_18052 = cljs.core.chunked_seq_QMARK_.call(null,inst_18050);
var state_18149__$1 = state_18149;
if(inst_18052){
var statearr_18217_18281 = state_18149__$1;
(statearr_18217_18281[(1)] = (19));

} else {
var statearr_18218_18282 = state_18149__$1;
(statearr_18218_18282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (38))){
var inst_18128 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18219_18283 = state_18149__$1;
(statearr_18219_18283[(2)] = inst_18128);

(statearr_18219_18283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (30))){
var state_18149__$1 = state_18149;
var statearr_18220_18284 = state_18149__$1;
(statearr_18220_18284[(2)] = null);

(statearr_18220_18284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (10))){
var inst_18031 = (state_18149[(13)]);
var inst_18033 = (state_18149[(16)]);
var inst_18039 = cljs.core._nth.call(null,inst_18031,inst_18033);
var inst_18040 = cljs.core.nth.call(null,inst_18039,(0),null);
var inst_18041 = cljs.core.nth.call(null,inst_18039,(1),null);
var state_18149__$1 = (function (){var statearr_18221 = state_18149;
(statearr_18221[(26)] = inst_18040);

return statearr_18221;
})();
if(cljs.core.truth_(inst_18041)){
var statearr_18222_18285 = state_18149__$1;
(statearr_18222_18285[(1)] = (13));

} else {
var statearr_18223_18286 = state_18149__$1;
(statearr_18223_18286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (18))){
var inst_18074 = (state_18149[(2)]);
var state_18149__$1 = state_18149;
var statearr_18224_18287 = state_18149__$1;
(statearr_18224_18287[(2)] = inst_18074);

(statearr_18224_18287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (42))){
var state_18149__$1 = state_18149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18149__$1,(45),dchan);
} else {
if((state_val_18150 === (37))){
var inst_18108 = (state_18149[(25)]);
var inst_18117 = (state_18149[(23)]);
var inst_18021 = (state_18149[(12)]);
var inst_18117__$1 = cljs.core.first.call(null,inst_18108);
var inst_18118 = cljs.core.async.put_BANG_.call(null,inst_18117__$1,inst_18021,done);
var state_18149__$1 = (function (){var statearr_18225 = state_18149;
(statearr_18225[(23)] = inst_18117__$1);

return statearr_18225;
})();
if(cljs.core.truth_(inst_18118)){
var statearr_18226_18288 = state_18149__$1;
(statearr_18226_18288[(1)] = (39));

} else {
var statearr_18227_18289 = state_18149__$1;
(statearr_18227_18289[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18150 === (8))){
var inst_18033 = (state_18149[(16)]);
var inst_18032 = (state_18149[(17)]);
var inst_18035 = (inst_18033 < inst_18032);
var inst_18036 = inst_18035;
var state_18149__$1 = state_18149;
if(cljs.core.truth_(inst_18036)){
var statearr_18228_18290 = state_18149__$1;
(statearr_18228_18290[(1)] = (10));

} else {
var statearr_18229_18291 = state_18149__$1;
(statearr_18229_18291[(1)] = (11));

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
});})(c__6777__auto___18237,cs,m,dchan,dctr,done))
;
return ((function (switch__6721__auto__,c__6777__auto___18237,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_18233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18233[(0)] = state_machine__6722__auto__);

(statearr_18233[(1)] = (1));

return statearr_18233;
});
var state_machine__6722__auto____1 = (function (state_18149){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_18149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e18234){if((e18234 instanceof Object)){
var ex__6725__auto__ = e18234;
var statearr_18235_18292 = state_18149;
(statearr_18235_18292[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18293 = state_18149;
state_18149 = G__18293;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_18149){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_18149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___18237,cs,m,dchan,dctr,done))
})();
var state__6779__auto__ = (function (){var statearr_18236 = f__6778__auto__.call(null);
(statearr_18236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___18237);

return statearr_18236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___18237,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj18295 = {};
return obj18295;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18296){
var map__18301 = p__18296;
var map__18301__$1 = ((cljs.core.seq_QMARK_.call(null,map__18301))?cljs.core.apply.call(null,cljs.core.hash_map,map__18301):map__18301);
var opts = map__18301__$1;
var statearr_18302_18305 = state;
(statearr_18302_18305[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18301,map__18301__$1,opts){
return (function (val){
var statearr_18303_18306 = state;
(statearr_18303_18306[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18301,map__18301__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18304_18307 = state;
(statearr_18304_18307[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18296 = null;
if (arguments.length > 3) {
var G__18308__i = 0, G__18308__a = new Array(arguments.length -  3);
while (G__18308__i < G__18308__a.length) {G__18308__a[G__18308__i] = arguments[G__18308__i + 3]; ++G__18308__i;}
  p__18296 = new cljs.core.IndexedSeq(G__18308__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18296);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18309){
var state = cljs.core.first(arglist__18309);
arglist__18309 = cljs.core.next(arglist__18309);
var cont_block = cljs.core.first(arglist__18309);
arglist__18309 = cljs.core.next(arglist__18309);
var ports = cljs.core.first(arglist__18309);
var p__18296 = cljs.core.rest(arglist__18309);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18296);
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
if(typeof cljs.core.async.t18429 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18429 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18430){
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
this.meta18430 = meta18430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18429.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18429.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18429.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18429.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18429.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18429.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18429.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18429.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18431){
var self__ = this;
var _18431__$1 = this;
return self__.meta18430;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18431,meta18430__$1){
var self__ = this;
var _18431__$1 = this;
return (new cljs.core.async.t18429(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18430__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18429.cljs$lang$type = true;

cljs.core.async.t18429.cljs$lang$ctorStr = "cljs.core.async/t18429";

cljs.core.async.t18429.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t18429");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18429 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18429(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18430){
return (new cljs.core.async.t18429(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18430));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18429(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var c__6777__auto___18548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___18548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___18548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18501){
var state_val_18502 = (state_18501[(1)]);
if((state_val_18502 === (7))){
var inst_18445 = (state_18501[(7)]);
var inst_18450 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18445);
var state_18501__$1 = state_18501;
var statearr_18503_18549 = state_18501__$1;
(statearr_18503_18549[(2)] = inst_18450);

(statearr_18503_18549[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (20))){
var inst_18460 = (state_18501[(8)]);
var state_18501__$1 = state_18501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18501__$1,(23),out,inst_18460);
} else {
if((state_val_18502 === (1))){
var inst_18435 = (state_18501[(9)]);
var inst_18435__$1 = calc_state.call(null);
var inst_18436 = cljs.core.seq_QMARK_.call(null,inst_18435__$1);
var state_18501__$1 = (function (){var statearr_18504 = state_18501;
(statearr_18504[(9)] = inst_18435__$1);

return statearr_18504;
})();
if(inst_18436){
var statearr_18505_18550 = state_18501__$1;
(statearr_18505_18550[(1)] = (2));

} else {
var statearr_18506_18551 = state_18501__$1;
(statearr_18506_18551[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (24))){
var inst_18453 = (state_18501[(10)]);
var inst_18445 = inst_18453;
var state_18501__$1 = (function (){var statearr_18507 = state_18501;
(statearr_18507[(7)] = inst_18445);

return statearr_18507;
})();
var statearr_18508_18552 = state_18501__$1;
(statearr_18508_18552[(2)] = null);

(statearr_18508_18552[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (4))){
var inst_18435 = (state_18501[(9)]);
var inst_18441 = (state_18501[(2)]);
var inst_18442 = cljs.core.get.call(null,inst_18441,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18443 = cljs.core.get.call(null,inst_18441,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18444 = cljs.core.get.call(null,inst_18441,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18445 = inst_18435;
var state_18501__$1 = (function (){var statearr_18509 = state_18501;
(statearr_18509[(7)] = inst_18445);

(statearr_18509[(11)] = inst_18443);

(statearr_18509[(12)] = inst_18444);

(statearr_18509[(13)] = inst_18442);

return statearr_18509;
})();
var statearr_18510_18553 = state_18501__$1;
(statearr_18510_18553[(2)] = null);

(statearr_18510_18553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (15))){
var state_18501__$1 = state_18501;
var statearr_18511_18554 = state_18501__$1;
(statearr_18511_18554[(2)] = null);

(statearr_18511_18554[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (21))){
var inst_18453 = (state_18501[(10)]);
var inst_18445 = inst_18453;
var state_18501__$1 = (function (){var statearr_18512 = state_18501;
(statearr_18512[(7)] = inst_18445);

return statearr_18512;
})();
var statearr_18513_18555 = state_18501__$1;
(statearr_18513_18555[(2)] = null);

(statearr_18513_18555[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (13))){
var inst_18497 = (state_18501[(2)]);
var state_18501__$1 = state_18501;
var statearr_18514_18556 = state_18501__$1;
(statearr_18514_18556[(2)] = inst_18497);

(statearr_18514_18556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (22))){
var inst_18495 = (state_18501[(2)]);
var state_18501__$1 = state_18501;
var statearr_18515_18557 = state_18501__$1;
(statearr_18515_18557[(2)] = inst_18495);

(statearr_18515_18557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (6))){
var inst_18499 = (state_18501[(2)]);
var state_18501__$1 = state_18501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18501__$1,inst_18499);
} else {
if((state_val_18502 === (25))){
var state_18501__$1 = state_18501;
var statearr_18516_18558 = state_18501__$1;
(statearr_18516_18558[(2)] = null);

(statearr_18516_18558[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (17))){
var inst_18475 = (state_18501[(14)]);
var state_18501__$1 = state_18501;
var statearr_18517_18559 = state_18501__$1;
(statearr_18517_18559[(2)] = inst_18475);

(statearr_18517_18559[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (3))){
var inst_18435 = (state_18501[(9)]);
var state_18501__$1 = state_18501;
var statearr_18518_18560 = state_18501__$1;
(statearr_18518_18560[(2)] = inst_18435);

(statearr_18518_18560[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (12))){
var inst_18461 = (state_18501[(15)]);
var inst_18456 = (state_18501[(16)]);
var inst_18475 = (state_18501[(14)]);
var inst_18475__$1 = inst_18456.call(null,inst_18461);
var state_18501__$1 = (function (){var statearr_18519 = state_18501;
(statearr_18519[(14)] = inst_18475__$1);

return statearr_18519;
})();
if(cljs.core.truth_(inst_18475__$1)){
var statearr_18520_18561 = state_18501__$1;
(statearr_18520_18561[(1)] = (17));

} else {
var statearr_18521_18562 = state_18501__$1;
(statearr_18521_18562[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (2))){
var inst_18435 = (state_18501[(9)]);
var inst_18438 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18435);
var state_18501__$1 = state_18501;
var statearr_18522_18563 = state_18501__$1;
(statearr_18522_18563[(2)] = inst_18438);

(statearr_18522_18563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (23))){
var inst_18486 = (state_18501[(2)]);
var state_18501__$1 = state_18501;
if(cljs.core.truth_(inst_18486)){
var statearr_18523_18564 = state_18501__$1;
(statearr_18523_18564[(1)] = (24));

} else {
var statearr_18524_18565 = state_18501__$1;
(statearr_18524_18565[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (19))){
var inst_18483 = (state_18501[(2)]);
var state_18501__$1 = state_18501;
if(cljs.core.truth_(inst_18483)){
var statearr_18525_18566 = state_18501__$1;
(statearr_18525_18566[(1)] = (20));

} else {
var statearr_18526_18567 = state_18501__$1;
(statearr_18526_18567[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (11))){
var inst_18460 = (state_18501[(8)]);
var inst_18466 = (inst_18460 == null);
var state_18501__$1 = state_18501;
if(cljs.core.truth_(inst_18466)){
var statearr_18527_18568 = state_18501__$1;
(statearr_18527_18568[(1)] = (14));

} else {
var statearr_18528_18569 = state_18501__$1;
(statearr_18528_18569[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (9))){
var inst_18453 = (state_18501[(10)]);
var inst_18453__$1 = (state_18501[(2)]);
var inst_18454 = cljs.core.get.call(null,inst_18453__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18455 = cljs.core.get.call(null,inst_18453__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18456 = cljs.core.get.call(null,inst_18453__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18501__$1 = (function (){var statearr_18529 = state_18501;
(statearr_18529[(16)] = inst_18456);

(statearr_18529[(10)] = inst_18453__$1);

(statearr_18529[(17)] = inst_18455);

return statearr_18529;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18501__$1,(10),inst_18454);
} else {
if((state_val_18502 === (5))){
var inst_18445 = (state_18501[(7)]);
var inst_18448 = cljs.core.seq_QMARK_.call(null,inst_18445);
var state_18501__$1 = state_18501;
if(inst_18448){
var statearr_18530_18570 = state_18501__$1;
(statearr_18530_18570[(1)] = (7));

} else {
var statearr_18531_18571 = state_18501__$1;
(statearr_18531_18571[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (14))){
var inst_18461 = (state_18501[(15)]);
var inst_18468 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18461);
var state_18501__$1 = state_18501;
var statearr_18532_18572 = state_18501__$1;
(statearr_18532_18572[(2)] = inst_18468);

(statearr_18532_18572[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (26))){
var inst_18491 = (state_18501[(2)]);
var state_18501__$1 = state_18501;
var statearr_18533_18573 = state_18501__$1;
(statearr_18533_18573[(2)] = inst_18491);

(statearr_18533_18573[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (16))){
var inst_18471 = (state_18501[(2)]);
var inst_18472 = calc_state.call(null);
var inst_18445 = inst_18472;
var state_18501__$1 = (function (){var statearr_18534 = state_18501;
(statearr_18534[(7)] = inst_18445);

(statearr_18534[(18)] = inst_18471);

return statearr_18534;
})();
var statearr_18535_18574 = state_18501__$1;
(statearr_18535_18574[(2)] = null);

(statearr_18535_18574[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (10))){
var inst_18461 = (state_18501[(15)]);
var inst_18460 = (state_18501[(8)]);
var inst_18459 = (state_18501[(2)]);
var inst_18460__$1 = cljs.core.nth.call(null,inst_18459,(0),null);
var inst_18461__$1 = cljs.core.nth.call(null,inst_18459,(1),null);
var inst_18462 = (inst_18460__$1 == null);
var inst_18463 = cljs.core._EQ_.call(null,inst_18461__$1,change);
var inst_18464 = (inst_18462) || (inst_18463);
var state_18501__$1 = (function (){var statearr_18536 = state_18501;
(statearr_18536[(15)] = inst_18461__$1);

(statearr_18536[(8)] = inst_18460__$1);

return statearr_18536;
})();
if(cljs.core.truth_(inst_18464)){
var statearr_18537_18575 = state_18501__$1;
(statearr_18537_18575[(1)] = (11));

} else {
var statearr_18538_18576 = state_18501__$1;
(statearr_18538_18576[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (18))){
var inst_18461 = (state_18501[(15)]);
var inst_18456 = (state_18501[(16)]);
var inst_18455 = (state_18501[(17)]);
var inst_18478 = cljs.core.empty_QMARK_.call(null,inst_18456);
var inst_18479 = inst_18455.call(null,inst_18461);
var inst_18480 = cljs.core.not.call(null,inst_18479);
var inst_18481 = (inst_18478) && (inst_18480);
var state_18501__$1 = state_18501;
var statearr_18539_18577 = state_18501__$1;
(statearr_18539_18577[(2)] = inst_18481);

(statearr_18539_18577[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18502 === (8))){
var inst_18445 = (state_18501[(7)]);
var state_18501__$1 = state_18501;
var statearr_18540_18578 = state_18501__$1;
(statearr_18540_18578[(2)] = inst_18445);

(statearr_18540_18578[(1)] = (9));


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
});})(c__6777__auto___18548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6721__auto__,c__6777__auto___18548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_18544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18544[(0)] = state_machine__6722__auto__);

(statearr_18544[(1)] = (1));

return statearr_18544;
});
var state_machine__6722__auto____1 = (function (state_18501){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_18501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e18545){if((e18545 instanceof Object)){
var ex__6725__auto__ = e18545;
var statearr_18546_18579 = state_18501;
(statearr_18546_18579[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18580 = state_18501;
state_18501 = G__18580;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_18501){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_18501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___18548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6779__auto__ = (function (){var statearr_18547 = f__6778__auto__.call(null);
(statearr_18547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___18548);

return statearr_18547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___18548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18582 = {};
return obj18582;
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
return (function (p1__18583_SHARP_){
if(cljs.core.truth_(p1__18583_SHARP_.call(null,topic))){
return p1__18583_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18583_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3799__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18706 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18706 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18707){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18707 = meta18707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18706.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18706.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18706.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18706.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18706.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18706.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18708){
var self__ = this;
var _18708__$1 = this;
return self__.meta18707;
});})(mults,ensure_mult))
;

cljs.core.async.t18706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18708,meta18707__$1){
var self__ = this;
var _18708__$1 = this;
return (new cljs.core.async.t18706(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18707__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18706.cljs$lang$type = true;

cljs.core.async.t18706.cljs$lang$ctorStr = "cljs.core.async/t18706";

cljs.core.async.t18706.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t18706");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18706 = ((function (mults,ensure_mult){
return (function __GT_t18706(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18707){
return (new cljs.core.async.t18706(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18707));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18706(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
})()
;
var c__6777__auto___18828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___18828,mults,ensure_mult,p){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___18828,mults,ensure_mult,p){
return (function (state_18780){
var state_val_18781 = (state_18780[(1)]);
if((state_val_18781 === (7))){
var inst_18776 = (state_18780[(2)]);
var state_18780__$1 = state_18780;
var statearr_18782_18829 = state_18780__$1;
(statearr_18782_18829[(2)] = inst_18776);

(statearr_18782_18829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (20))){
var state_18780__$1 = state_18780;
var statearr_18783_18830 = state_18780__$1;
(statearr_18783_18830[(2)] = null);

(statearr_18783_18830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (1))){
var state_18780__$1 = state_18780;
var statearr_18784_18831 = state_18780__$1;
(statearr_18784_18831[(2)] = null);

(statearr_18784_18831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (24))){
var inst_18759 = (state_18780[(7)]);
var inst_18768 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18759);
var state_18780__$1 = state_18780;
var statearr_18785_18832 = state_18780__$1;
(statearr_18785_18832[(2)] = inst_18768);

(statearr_18785_18832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (4))){
var inst_18711 = (state_18780[(8)]);
var inst_18711__$1 = (state_18780[(2)]);
var inst_18712 = (inst_18711__$1 == null);
var state_18780__$1 = (function (){var statearr_18786 = state_18780;
(statearr_18786[(8)] = inst_18711__$1);

return statearr_18786;
})();
if(cljs.core.truth_(inst_18712)){
var statearr_18787_18833 = state_18780__$1;
(statearr_18787_18833[(1)] = (5));

} else {
var statearr_18788_18834 = state_18780__$1;
(statearr_18788_18834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (15))){
var inst_18753 = (state_18780[(2)]);
var state_18780__$1 = state_18780;
var statearr_18789_18835 = state_18780__$1;
(statearr_18789_18835[(2)] = inst_18753);

(statearr_18789_18835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (21))){
var inst_18773 = (state_18780[(2)]);
var state_18780__$1 = (function (){var statearr_18790 = state_18780;
(statearr_18790[(9)] = inst_18773);

return statearr_18790;
})();
var statearr_18791_18836 = state_18780__$1;
(statearr_18791_18836[(2)] = null);

(statearr_18791_18836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (13))){
var inst_18735 = (state_18780[(10)]);
var inst_18737 = cljs.core.chunked_seq_QMARK_.call(null,inst_18735);
var state_18780__$1 = state_18780;
if(inst_18737){
var statearr_18792_18837 = state_18780__$1;
(statearr_18792_18837[(1)] = (16));

} else {
var statearr_18793_18838 = state_18780__$1;
(statearr_18793_18838[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (22))){
var inst_18765 = (state_18780[(2)]);
var state_18780__$1 = state_18780;
if(cljs.core.truth_(inst_18765)){
var statearr_18794_18839 = state_18780__$1;
(statearr_18794_18839[(1)] = (23));

} else {
var statearr_18795_18840 = state_18780__$1;
(statearr_18795_18840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (6))){
var inst_18711 = (state_18780[(8)]);
var inst_18761 = (state_18780[(11)]);
var inst_18759 = (state_18780[(7)]);
var inst_18759__$1 = topic_fn.call(null,inst_18711);
var inst_18760 = cljs.core.deref.call(null,mults);
var inst_18761__$1 = cljs.core.get.call(null,inst_18760,inst_18759__$1);
var state_18780__$1 = (function (){var statearr_18796 = state_18780;
(statearr_18796[(11)] = inst_18761__$1);

(statearr_18796[(7)] = inst_18759__$1);

return statearr_18796;
})();
if(cljs.core.truth_(inst_18761__$1)){
var statearr_18797_18841 = state_18780__$1;
(statearr_18797_18841[(1)] = (19));

} else {
var statearr_18798_18842 = state_18780__$1;
(statearr_18798_18842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (25))){
var inst_18770 = (state_18780[(2)]);
var state_18780__$1 = state_18780;
var statearr_18799_18843 = state_18780__$1;
(statearr_18799_18843[(2)] = inst_18770);

(statearr_18799_18843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (17))){
var inst_18735 = (state_18780[(10)]);
var inst_18744 = cljs.core.first.call(null,inst_18735);
var inst_18745 = cljs.core.async.muxch_STAR_.call(null,inst_18744);
var inst_18746 = cljs.core.async.close_BANG_.call(null,inst_18745);
var inst_18747 = cljs.core.next.call(null,inst_18735);
var inst_18721 = inst_18747;
var inst_18722 = null;
var inst_18723 = (0);
var inst_18724 = (0);
var state_18780__$1 = (function (){var statearr_18800 = state_18780;
(statearr_18800[(12)] = inst_18722);

(statearr_18800[(13)] = inst_18721);

(statearr_18800[(14)] = inst_18723);

(statearr_18800[(15)] = inst_18746);

(statearr_18800[(16)] = inst_18724);

return statearr_18800;
})();
var statearr_18801_18844 = state_18780__$1;
(statearr_18801_18844[(2)] = null);

(statearr_18801_18844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (3))){
var inst_18778 = (state_18780[(2)]);
var state_18780__$1 = state_18780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18780__$1,inst_18778);
} else {
if((state_val_18781 === (12))){
var inst_18755 = (state_18780[(2)]);
var state_18780__$1 = state_18780;
var statearr_18802_18845 = state_18780__$1;
(statearr_18802_18845[(2)] = inst_18755);

(statearr_18802_18845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (2))){
var state_18780__$1 = state_18780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18780__$1,(4),ch);
} else {
if((state_val_18781 === (23))){
var state_18780__$1 = state_18780;
var statearr_18803_18846 = state_18780__$1;
(statearr_18803_18846[(2)] = null);

(statearr_18803_18846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (19))){
var inst_18711 = (state_18780[(8)]);
var inst_18761 = (state_18780[(11)]);
var inst_18763 = cljs.core.async.muxch_STAR_.call(null,inst_18761);
var state_18780__$1 = state_18780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18780__$1,(22),inst_18763,inst_18711);
} else {
if((state_val_18781 === (11))){
var inst_18721 = (state_18780[(13)]);
var inst_18735 = (state_18780[(10)]);
var inst_18735__$1 = cljs.core.seq.call(null,inst_18721);
var state_18780__$1 = (function (){var statearr_18804 = state_18780;
(statearr_18804[(10)] = inst_18735__$1);

return statearr_18804;
})();
if(inst_18735__$1){
var statearr_18805_18847 = state_18780__$1;
(statearr_18805_18847[(1)] = (13));

} else {
var statearr_18806_18848 = state_18780__$1;
(statearr_18806_18848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (9))){
var inst_18757 = (state_18780[(2)]);
var state_18780__$1 = state_18780;
var statearr_18807_18849 = state_18780__$1;
(statearr_18807_18849[(2)] = inst_18757);

(statearr_18807_18849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (5))){
var inst_18718 = cljs.core.deref.call(null,mults);
var inst_18719 = cljs.core.vals.call(null,inst_18718);
var inst_18720 = cljs.core.seq.call(null,inst_18719);
var inst_18721 = inst_18720;
var inst_18722 = null;
var inst_18723 = (0);
var inst_18724 = (0);
var state_18780__$1 = (function (){var statearr_18808 = state_18780;
(statearr_18808[(12)] = inst_18722);

(statearr_18808[(13)] = inst_18721);

(statearr_18808[(14)] = inst_18723);

(statearr_18808[(16)] = inst_18724);

return statearr_18808;
})();
var statearr_18809_18850 = state_18780__$1;
(statearr_18809_18850[(2)] = null);

(statearr_18809_18850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (14))){
var state_18780__$1 = state_18780;
var statearr_18813_18851 = state_18780__$1;
(statearr_18813_18851[(2)] = null);

(statearr_18813_18851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (16))){
var inst_18735 = (state_18780[(10)]);
var inst_18739 = cljs.core.chunk_first.call(null,inst_18735);
var inst_18740 = cljs.core.chunk_rest.call(null,inst_18735);
var inst_18741 = cljs.core.count.call(null,inst_18739);
var inst_18721 = inst_18740;
var inst_18722 = inst_18739;
var inst_18723 = inst_18741;
var inst_18724 = (0);
var state_18780__$1 = (function (){var statearr_18814 = state_18780;
(statearr_18814[(12)] = inst_18722);

(statearr_18814[(13)] = inst_18721);

(statearr_18814[(14)] = inst_18723);

(statearr_18814[(16)] = inst_18724);

return statearr_18814;
})();
var statearr_18815_18852 = state_18780__$1;
(statearr_18815_18852[(2)] = null);

(statearr_18815_18852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (10))){
var inst_18722 = (state_18780[(12)]);
var inst_18721 = (state_18780[(13)]);
var inst_18723 = (state_18780[(14)]);
var inst_18724 = (state_18780[(16)]);
var inst_18729 = cljs.core._nth.call(null,inst_18722,inst_18724);
var inst_18730 = cljs.core.async.muxch_STAR_.call(null,inst_18729);
var inst_18731 = cljs.core.async.close_BANG_.call(null,inst_18730);
var inst_18732 = (inst_18724 + (1));
var tmp18810 = inst_18722;
var tmp18811 = inst_18721;
var tmp18812 = inst_18723;
var inst_18721__$1 = tmp18811;
var inst_18722__$1 = tmp18810;
var inst_18723__$1 = tmp18812;
var inst_18724__$1 = inst_18732;
var state_18780__$1 = (function (){var statearr_18816 = state_18780;
(statearr_18816[(17)] = inst_18731);

(statearr_18816[(12)] = inst_18722__$1);

(statearr_18816[(13)] = inst_18721__$1);

(statearr_18816[(14)] = inst_18723__$1);

(statearr_18816[(16)] = inst_18724__$1);

return statearr_18816;
})();
var statearr_18817_18853 = state_18780__$1;
(statearr_18817_18853[(2)] = null);

(statearr_18817_18853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (18))){
var inst_18750 = (state_18780[(2)]);
var state_18780__$1 = state_18780;
var statearr_18818_18854 = state_18780__$1;
(statearr_18818_18854[(2)] = inst_18750);

(statearr_18818_18854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18781 === (8))){
var inst_18723 = (state_18780[(14)]);
var inst_18724 = (state_18780[(16)]);
var inst_18726 = (inst_18724 < inst_18723);
var inst_18727 = inst_18726;
var state_18780__$1 = state_18780;
if(cljs.core.truth_(inst_18727)){
var statearr_18819_18855 = state_18780__$1;
(statearr_18819_18855[(1)] = (10));

} else {
var statearr_18820_18856 = state_18780__$1;
(statearr_18820_18856[(1)] = (11));

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
});})(c__6777__auto___18828,mults,ensure_mult,p))
;
return ((function (switch__6721__auto__,c__6777__auto___18828,mults,ensure_mult,p){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_18824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18824[(0)] = state_machine__6722__auto__);

(statearr_18824[(1)] = (1));

return statearr_18824;
});
var state_machine__6722__auto____1 = (function (state_18780){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_18780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e18825){if((e18825 instanceof Object)){
var ex__6725__auto__ = e18825;
var statearr_18826_18857 = state_18780;
(statearr_18826_18857[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18858 = state_18780;
state_18780 = G__18858;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_18780){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_18780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___18828,mults,ensure_mult,p))
})();
var state__6779__auto__ = (function (){var statearr_18827 = f__6778__auto__.call(null);
(statearr_18827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___18828);

return statearr_18827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___18828,mults,ensure_mult,p))
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
var c__6777__auto___18995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___18995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___18995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18965){
var state_val_18966 = (state_18965[(1)]);
if((state_val_18966 === (7))){
var state_18965__$1 = state_18965;
var statearr_18967_18996 = state_18965__$1;
(statearr_18967_18996[(2)] = null);

(statearr_18967_18996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (1))){
var state_18965__$1 = state_18965;
var statearr_18968_18997 = state_18965__$1;
(statearr_18968_18997[(2)] = null);

(statearr_18968_18997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (4))){
var inst_18929 = (state_18965[(7)]);
var inst_18931 = (inst_18929 < cnt);
var state_18965__$1 = state_18965;
if(cljs.core.truth_(inst_18931)){
var statearr_18969_18998 = state_18965__$1;
(statearr_18969_18998[(1)] = (6));

} else {
var statearr_18970_18999 = state_18965__$1;
(statearr_18970_18999[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (15))){
var inst_18961 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_18971_19000 = state_18965__$1;
(statearr_18971_19000[(2)] = inst_18961);

(statearr_18971_19000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (13))){
var inst_18954 = cljs.core.async.close_BANG_.call(null,out);
var state_18965__$1 = state_18965;
var statearr_18972_19001 = state_18965__$1;
(statearr_18972_19001[(2)] = inst_18954);

(statearr_18972_19001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (6))){
var state_18965__$1 = state_18965;
var statearr_18973_19002 = state_18965__$1;
(statearr_18973_19002[(2)] = null);

(statearr_18973_19002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (3))){
var inst_18963 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18965__$1,inst_18963);
} else {
if((state_val_18966 === (12))){
var inst_18951 = (state_18965[(8)]);
var inst_18951__$1 = (state_18965[(2)]);
var inst_18952 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18951__$1);
var state_18965__$1 = (function (){var statearr_18974 = state_18965;
(statearr_18974[(8)] = inst_18951__$1);

return statearr_18974;
})();
if(cljs.core.truth_(inst_18952)){
var statearr_18975_19003 = state_18965__$1;
(statearr_18975_19003[(1)] = (13));

} else {
var statearr_18976_19004 = state_18965__$1;
(statearr_18976_19004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (2))){
var inst_18928 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18929 = (0);
var state_18965__$1 = (function (){var statearr_18977 = state_18965;
(statearr_18977[(9)] = inst_18928);

(statearr_18977[(7)] = inst_18929);

return statearr_18977;
})();
var statearr_18978_19005 = state_18965__$1;
(statearr_18978_19005[(2)] = null);

(statearr_18978_19005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (11))){
var inst_18929 = (state_18965[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18965,(10),Object,null,(9));
var inst_18938 = chs__$1.call(null,inst_18929);
var inst_18939 = done.call(null,inst_18929);
var inst_18940 = cljs.core.async.take_BANG_.call(null,inst_18938,inst_18939);
var state_18965__$1 = state_18965;
var statearr_18979_19006 = state_18965__$1;
(statearr_18979_19006[(2)] = inst_18940);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18965__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (9))){
var inst_18929 = (state_18965[(7)]);
var inst_18942 = (state_18965[(2)]);
var inst_18943 = (inst_18929 + (1));
var inst_18929__$1 = inst_18943;
var state_18965__$1 = (function (){var statearr_18980 = state_18965;
(statearr_18980[(7)] = inst_18929__$1);

(statearr_18980[(10)] = inst_18942);

return statearr_18980;
})();
var statearr_18981_19007 = state_18965__$1;
(statearr_18981_19007[(2)] = null);

(statearr_18981_19007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (5))){
var inst_18949 = (state_18965[(2)]);
var state_18965__$1 = (function (){var statearr_18982 = state_18965;
(statearr_18982[(11)] = inst_18949);

return statearr_18982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18965__$1,(12),dchan);
} else {
if((state_val_18966 === (14))){
var inst_18951 = (state_18965[(8)]);
var inst_18956 = cljs.core.apply.call(null,f,inst_18951);
var state_18965__$1 = state_18965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18965__$1,(16),out,inst_18956);
} else {
if((state_val_18966 === (16))){
var inst_18958 = (state_18965[(2)]);
var state_18965__$1 = (function (){var statearr_18983 = state_18965;
(statearr_18983[(12)] = inst_18958);

return statearr_18983;
})();
var statearr_18984_19008 = state_18965__$1;
(statearr_18984_19008[(2)] = null);

(statearr_18984_19008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (10))){
var inst_18933 = (state_18965[(2)]);
var inst_18934 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18965__$1 = (function (){var statearr_18985 = state_18965;
(statearr_18985[(13)] = inst_18933);

return statearr_18985;
})();
var statearr_18986_19009 = state_18965__$1;
(statearr_18986_19009[(2)] = inst_18934);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18965__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18966 === (8))){
var inst_18947 = (state_18965[(2)]);
var state_18965__$1 = state_18965;
var statearr_18987_19010 = state_18965__$1;
(statearr_18987_19010[(2)] = inst_18947);

(statearr_18987_19010[(1)] = (5));


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
});})(c__6777__auto___18995,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6721__auto__,c__6777__auto___18995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_18991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18991[(0)] = state_machine__6722__auto__);

(statearr_18991[(1)] = (1));

return statearr_18991;
});
var state_machine__6722__auto____1 = (function (state_18965){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_18965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e18992){if((e18992 instanceof Object)){
var ex__6725__auto__ = e18992;
var statearr_18993_19011 = state_18965;
(statearr_18993_19011[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19012 = state_18965;
state_18965 = G__19012;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_18965){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_18965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___18995,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6779__auto__ = (function (){var statearr_18994 = f__6778__auto__.call(null);
(statearr_18994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___18995);

return statearr_18994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___18995,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6777__auto___19120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19120,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19120,out){
return (function (state_19096){
var state_val_19097 = (state_19096[(1)]);
if((state_val_19097 === (7))){
var inst_19075 = (state_19096[(7)]);
var inst_19076 = (state_19096[(8)]);
var inst_19075__$1 = (state_19096[(2)]);
var inst_19076__$1 = cljs.core.nth.call(null,inst_19075__$1,(0),null);
var inst_19077 = cljs.core.nth.call(null,inst_19075__$1,(1),null);
var inst_19078 = (inst_19076__$1 == null);
var state_19096__$1 = (function (){var statearr_19098 = state_19096;
(statearr_19098[(9)] = inst_19077);

(statearr_19098[(7)] = inst_19075__$1);

(statearr_19098[(8)] = inst_19076__$1);

return statearr_19098;
})();
if(cljs.core.truth_(inst_19078)){
var statearr_19099_19121 = state_19096__$1;
(statearr_19099_19121[(1)] = (8));

} else {
var statearr_19100_19122 = state_19096__$1;
(statearr_19100_19122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (1))){
var inst_19067 = cljs.core.vec.call(null,chs);
var inst_19068 = inst_19067;
var state_19096__$1 = (function (){var statearr_19101 = state_19096;
(statearr_19101[(10)] = inst_19068);

return statearr_19101;
})();
var statearr_19102_19123 = state_19096__$1;
(statearr_19102_19123[(2)] = null);

(statearr_19102_19123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (4))){
var inst_19068 = (state_19096[(10)]);
var state_19096__$1 = state_19096;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19096__$1,(7),inst_19068);
} else {
if((state_val_19097 === (6))){
var inst_19092 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19103_19124 = state_19096__$1;
(statearr_19103_19124[(2)] = inst_19092);

(statearr_19103_19124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (3))){
var inst_19094 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19096__$1,inst_19094);
} else {
if((state_val_19097 === (2))){
var inst_19068 = (state_19096[(10)]);
var inst_19070 = cljs.core.count.call(null,inst_19068);
var inst_19071 = (inst_19070 > (0));
var state_19096__$1 = state_19096;
if(cljs.core.truth_(inst_19071)){
var statearr_19105_19125 = state_19096__$1;
(statearr_19105_19125[(1)] = (4));

} else {
var statearr_19106_19126 = state_19096__$1;
(statearr_19106_19126[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (11))){
var inst_19068 = (state_19096[(10)]);
var inst_19085 = (state_19096[(2)]);
var tmp19104 = inst_19068;
var inst_19068__$1 = tmp19104;
var state_19096__$1 = (function (){var statearr_19107 = state_19096;
(statearr_19107[(10)] = inst_19068__$1);

(statearr_19107[(11)] = inst_19085);

return statearr_19107;
})();
var statearr_19108_19127 = state_19096__$1;
(statearr_19108_19127[(2)] = null);

(statearr_19108_19127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (9))){
var inst_19076 = (state_19096[(8)]);
var state_19096__$1 = state_19096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19096__$1,(11),out,inst_19076);
} else {
if((state_val_19097 === (5))){
var inst_19090 = cljs.core.async.close_BANG_.call(null,out);
var state_19096__$1 = state_19096;
var statearr_19109_19128 = state_19096__$1;
(statearr_19109_19128[(2)] = inst_19090);

(statearr_19109_19128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (10))){
var inst_19088 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19110_19129 = state_19096__$1;
(statearr_19110_19129[(2)] = inst_19088);

(statearr_19110_19129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19097 === (8))){
var inst_19077 = (state_19096[(9)]);
var inst_19075 = (state_19096[(7)]);
var inst_19068 = (state_19096[(10)]);
var inst_19076 = (state_19096[(8)]);
var inst_19080 = (function (){var c = inst_19077;
var v = inst_19076;
var vec__19073 = inst_19075;
var cs = inst_19068;
return ((function (c,v,vec__19073,cs,inst_19077,inst_19075,inst_19068,inst_19076,state_val_19097,c__6777__auto___19120,out){
return (function (p1__19013_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19013_SHARP_);
});
;})(c,v,vec__19073,cs,inst_19077,inst_19075,inst_19068,inst_19076,state_val_19097,c__6777__auto___19120,out))
})();
var inst_19081 = cljs.core.filterv.call(null,inst_19080,inst_19068);
var inst_19068__$1 = inst_19081;
var state_19096__$1 = (function (){var statearr_19111 = state_19096;
(statearr_19111[(10)] = inst_19068__$1);

return statearr_19111;
})();
var statearr_19112_19130 = state_19096__$1;
(statearr_19112_19130[(2)] = null);

(statearr_19112_19130[(1)] = (2));


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
});})(c__6777__auto___19120,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19120,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19116 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19116[(0)] = state_machine__6722__auto__);

(statearr_19116[(1)] = (1));

return statearr_19116;
});
var state_machine__6722__auto____1 = (function (state_19096){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19117){if((e19117 instanceof Object)){
var ex__6725__auto__ = e19117;
var statearr_19118_19131 = state_19096;
(statearr_19118_19131[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19132 = state_19096;
state_19096 = G__19132;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19096){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19120,out))
})();
var state__6779__auto__ = (function (){var statearr_19119 = f__6778__auto__.call(null);
(statearr_19119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19120);

return statearr_19119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19120,out))
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
var c__6777__auto___19225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19225,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19225,out){
return (function (state_19202){
var state_val_19203 = (state_19202[(1)]);
if((state_val_19203 === (7))){
var inst_19184 = (state_19202[(7)]);
var inst_19184__$1 = (state_19202[(2)]);
var inst_19185 = (inst_19184__$1 == null);
var inst_19186 = cljs.core.not.call(null,inst_19185);
var state_19202__$1 = (function (){var statearr_19204 = state_19202;
(statearr_19204[(7)] = inst_19184__$1);

return statearr_19204;
})();
if(inst_19186){
var statearr_19205_19226 = state_19202__$1;
(statearr_19205_19226[(1)] = (8));

} else {
var statearr_19206_19227 = state_19202__$1;
(statearr_19206_19227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (1))){
var inst_19179 = (0);
var state_19202__$1 = (function (){var statearr_19207 = state_19202;
(statearr_19207[(8)] = inst_19179);

return statearr_19207;
})();
var statearr_19208_19228 = state_19202__$1;
(statearr_19208_19228[(2)] = null);

(statearr_19208_19228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (4))){
var state_19202__$1 = state_19202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19202__$1,(7),ch);
} else {
if((state_val_19203 === (6))){
var inst_19197 = (state_19202[(2)]);
var state_19202__$1 = state_19202;
var statearr_19209_19229 = state_19202__$1;
(statearr_19209_19229[(2)] = inst_19197);

(statearr_19209_19229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (3))){
var inst_19199 = (state_19202[(2)]);
var inst_19200 = cljs.core.async.close_BANG_.call(null,out);
var state_19202__$1 = (function (){var statearr_19210 = state_19202;
(statearr_19210[(9)] = inst_19199);

return statearr_19210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19202__$1,inst_19200);
} else {
if((state_val_19203 === (2))){
var inst_19179 = (state_19202[(8)]);
var inst_19181 = (inst_19179 < n);
var state_19202__$1 = state_19202;
if(cljs.core.truth_(inst_19181)){
var statearr_19211_19230 = state_19202__$1;
(statearr_19211_19230[(1)] = (4));

} else {
var statearr_19212_19231 = state_19202__$1;
(statearr_19212_19231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (11))){
var inst_19179 = (state_19202[(8)]);
var inst_19189 = (state_19202[(2)]);
var inst_19190 = (inst_19179 + (1));
var inst_19179__$1 = inst_19190;
var state_19202__$1 = (function (){var statearr_19213 = state_19202;
(statearr_19213[(8)] = inst_19179__$1);

(statearr_19213[(10)] = inst_19189);

return statearr_19213;
})();
var statearr_19214_19232 = state_19202__$1;
(statearr_19214_19232[(2)] = null);

(statearr_19214_19232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (9))){
var state_19202__$1 = state_19202;
var statearr_19215_19233 = state_19202__$1;
(statearr_19215_19233[(2)] = null);

(statearr_19215_19233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (5))){
var state_19202__$1 = state_19202;
var statearr_19216_19234 = state_19202__$1;
(statearr_19216_19234[(2)] = null);

(statearr_19216_19234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (10))){
var inst_19194 = (state_19202[(2)]);
var state_19202__$1 = state_19202;
var statearr_19217_19235 = state_19202__$1;
(statearr_19217_19235[(2)] = inst_19194);

(statearr_19217_19235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (8))){
var inst_19184 = (state_19202[(7)]);
var state_19202__$1 = state_19202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19202__$1,(11),out,inst_19184);
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
});})(c__6777__auto___19225,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19225,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19221[(0)] = state_machine__6722__auto__);

(statearr_19221[(1)] = (1));

return statearr_19221;
});
var state_machine__6722__auto____1 = (function (state_19202){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19222){if((e19222 instanceof Object)){
var ex__6725__auto__ = e19222;
var statearr_19223_19236 = state_19202;
(statearr_19223_19236[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19237 = state_19202;
state_19202 = G__19237;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19202){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19225,out))
})();
var state__6779__auto__ = (function (){var statearr_19224 = f__6778__auto__.call(null);
(statearr_19224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19225);

return statearr_19224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19225,out))
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
if(typeof cljs.core.async.t19245 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19245 = (function (ch,f,map_LT_,meta19246){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19246 = meta19246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19245.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19245.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19245.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19245.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19248 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19248 = (function (fn1,_,meta19246,map_LT_,f,ch,meta19249){
this.fn1 = fn1;
this._ = _;
this.meta19246 = meta19246;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19249 = meta19249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19248.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19238_SHARP_){
return f1.call(null,(((p1__19238_SHARP_ == null))?null:self__.f.call(null,p1__19238_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19250){
var self__ = this;
var _19250__$1 = this;
return self__.meta19249;
});})(___$1))
;

cljs.core.async.t19248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19250,meta19249__$1){
var self__ = this;
var _19250__$1 = this;
return (new cljs.core.async.t19248(self__.fn1,self__._,self__.meta19246,self__.map_LT_,self__.f,self__.ch,meta19249__$1));
});})(___$1))
;

cljs.core.async.t19248.cljs$lang$type = true;

cljs.core.async.t19248.cljs$lang$ctorStr = "cljs.core.async/t19248";

cljs.core.async.t19248.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19248");
});})(___$1))
;

cljs.core.async.__GT_t19248 = ((function (___$1){
return (function __GT_t19248(fn1__$1,___$2,meta19246__$1,map_LT___$1,f__$1,ch__$1,meta19249){
return (new cljs.core.async.t19248(fn1__$1,___$2,meta19246__$1,map_LT___$1,f__$1,ch__$1,meta19249));
});})(___$1))
;

}

return (new cljs.core.async.t19248(fn1,___$1,self__.meta19246,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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

cljs.core.async.t19245.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19245.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19245.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19247){
var self__ = this;
var _19247__$1 = this;
return self__.meta19246;
});

cljs.core.async.t19245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19247,meta19246__$1){
var self__ = this;
var _19247__$1 = this;
return (new cljs.core.async.t19245(self__.ch,self__.f,self__.map_LT_,meta19246__$1));
});

cljs.core.async.t19245.cljs$lang$type = true;

cljs.core.async.t19245.cljs$lang$ctorStr = "cljs.core.async/t19245";

cljs.core.async.t19245.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19245");
});

cljs.core.async.__GT_t19245 = (function __GT_t19245(ch__$1,f__$1,map_LT___$1,meta19246){
return (new cljs.core.async.t19245(ch__$1,f__$1,map_LT___$1,meta19246));
});

}

return (new cljs.core.async.t19245(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19254 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19254 = (function (ch,f,map_GT_,meta19255){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19255 = meta19255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19254.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19254.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19254.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19256){
var self__ = this;
var _19256__$1 = this;
return self__.meta19255;
});

cljs.core.async.t19254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19256,meta19255__$1){
var self__ = this;
var _19256__$1 = this;
return (new cljs.core.async.t19254(self__.ch,self__.f,self__.map_GT_,meta19255__$1));
});

cljs.core.async.t19254.cljs$lang$type = true;

cljs.core.async.t19254.cljs$lang$ctorStr = "cljs.core.async/t19254";

cljs.core.async.t19254.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19254");
});

cljs.core.async.__GT_t19254 = (function __GT_t19254(ch__$1,f__$1,map_GT___$1,meta19255){
return (new cljs.core.async.t19254(ch__$1,f__$1,map_GT___$1,meta19255));
});

}

return (new cljs.core.async.t19254(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19260 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19260 = (function (ch,p,filter_GT_,meta19261){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19261 = meta19261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19260.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19260.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19260.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19260.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19260.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19260.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19260.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19262){
var self__ = this;
var _19262__$1 = this;
return self__.meta19261;
});

cljs.core.async.t19260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19262,meta19261__$1){
var self__ = this;
var _19262__$1 = this;
return (new cljs.core.async.t19260(self__.ch,self__.p,self__.filter_GT_,meta19261__$1));
});

cljs.core.async.t19260.cljs$lang$type = true;

cljs.core.async.t19260.cljs$lang$ctorStr = "cljs.core.async/t19260";

cljs.core.async.t19260.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"cljs.core.async/t19260");
});

cljs.core.async.__GT_t19260 = (function __GT_t19260(ch__$1,p__$1,filter_GT___$1,meta19261){
return (new cljs.core.async.t19260(ch__$1,p__$1,filter_GT___$1,meta19261));
});

}

return (new cljs.core.async.t19260(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/cljs/core/async.cljs"], null)));
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
var c__6777__auto___19345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19345,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19345,out){
return (function (state_19324){
var state_val_19325 = (state_19324[(1)]);
if((state_val_19325 === (7))){
var inst_19320 = (state_19324[(2)]);
var state_19324__$1 = state_19324;
var statearr_19326_19346 = state_19324__$1;
(statearr_19326_19346[(2)] = inst_19320);

(statearr_19326_19346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (1))){
var state_19324__$1 = state_19324;
var statearr_19327_19347 = state_19324__$1;
(statearr_19327_19347[(2)] = null);

(statearr_19327_19347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (4))){
var inst_19306 = (state_19324[(7)]);
var inst_19306__$1 = (state_19324[(2)]);
var inst_19307 = (inst_19306__$1 == null);
var state_19324__$1 = (function (){var statearr_19328 = state_19324;
(statearr_19328[(7)] = inst_19306__$1);

return statearr_19328;
})();
if(cljs.core.truth_(inst_19307)){
var statearr_19329_19348 = state_19324__$1;
(statearr_19329_19348[(1)] = (5));

} else {
var statearr_19330_19349 = state_19324__$1;
(statearr_19330_19349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (6))){
var inst_19306 = (state_19324[(7)]);
var inst_19311 = p.call(null,inst_19306);
var state_19324__$1 = state_19324;
if(cljs.core.truth_(inst_19311)){
var statearr_19331_19350 = state_19324__$1;
(statearr_19331_19350[(1)] = (8));

} else {
var statearr_19332_19351 = state_19324__$1;
(statearr_19332_19351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (3))){
var inst_19322 = (state_19324[(2)]);
var state_19324__$1 = state_19324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19324__$1,inst_19322);
} else {
if((state_val_19325 === (2))){
var state_19324__$1 = state_19324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19324__$1,(4),ch);
} else {
if((state_val_19325 === (11))){
var inst_19314 = (state_19324[(2)]);
var state_19324__$1 = state_19324;
var statearr_19333_19352 = state_19324__$1;
(statearr_19333_19352[(2)] = inst_19314);

(statearr_19333_19352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (9))){
var state_19324__$1 = state_19324;
var statearr_19334_19353 = state_19324__$1;
(statearr_19334_19353[(2)] = null);

(statearr_19334_19353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (5))){
var inst_19309 = cljs.core.async.close_BANG_.call(null,out);
var state_19324__$1 = state_19324;
var statearr_19335_19354 = state_19324__$1;
(statearr_19335_19354[(2)] = inst_19309);

(statearr_19335_19354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (10))){
var inst_19317 = (state_19324[(2)]);
var state_19324__$1 = (function (){var statearr_19336 = state_19324;
(statearr_19336[(8)] = inst_19317);

return statearr_19336;
})();
var statearr_19337_19355 = state_19324__$1;
(statearr_19337_19355[(2)] = null);

(statearr_19337_19355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (8))){
var inst_19306 = (state_19324[(7)]);
var state_19324__$1 = state_19324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19324__$1,(11),out,inst_19306);
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
});})(c__6777__auto___19345,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19345,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19341 = [null,null,null,null,null,null,null,null,null];
(statearr_19341[(0)] = state_machine__6722__auto__);

(statearr_19341[(1)] = (1));

return statearr_19341;
});
var state_machine__6722__auto____1 = (function (state_19324){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19342){if((e19342 instanceof Object)){
var ex__6725__auto__ = e19342;
var statearr_19343_19356 = state_19324;
(statearr_19343_19356[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19357 = state_19324;
state_19324 = G__19357;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19324){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19345,out))
})();
var state__6779__auto__ = (function (){var statearr_19344 = f__6778__auto__.call(null);
(statearr_19344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19345);

return statearr_19344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19345,out))
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
return (function (state_19523){
var state_val_19524 = (state_19523[(1)]);
if((state_val_19524 === (7))){
var inst_19519 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
var statearr_19525_19566 = state_19523__$1;
(statearr_19525_19566[(2)] = inst_19519);

(statearr_19525_19566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (20))){
var inst_19489 = (state_19523[(7)]);
var inst_19500 = (state_19523[(2)]);
var inst_19501 = cljs.core.next.call(null,inst_19489);
var inst_19475 = inst_19501;
var inst_19476 = null;
var inst_19477 = (0);
var inst_19478 = (0);
var state_19523__$1 = (function (){var statearr_19526 = state_19523;
(statearr_19526[(8)] = inst_19476);

(statearr_19526[(9)] = inst_19478);

(statearr_19526[(10)] = inst_19477);

(statearr_19526[(11)] = inst_19500);

(statearr_19526[(12)] = inst_19475);

return statearr_19526;
})();
var statearr_19527_19567 = state_19523__$1;
(statearr_19527_19567[(2)] = null);

(statearr_19527_19567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (1))){
var state_19523__$1 = state_19523;
var statearr_19528_19568 = state_19523__$1;
(statearr_19528_19568[(2)] = null);

(statearr_19528_19568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (4))){
var inst_19464 = (state_19523[(13)]);
var inst_19464__$1 = (state_19523[(2)]);
var inst_19465 = (inst_19464__$1 == null);
var state_19523__$1 = (function (){var statearr_19529 = state_19523;
(statearr_19529[(13)] = inst_19464__$1);

return statearr_19529;
})();
if(cljs.core.truth_(inst_19465)){
var statearr_19530_19569 = state_19523__$1;
(statearr_19530_19569[(1)] = (5));

} else {
var statearr_19531_19570 = state_19523__$1;
(statearr_19531_19570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (15))){
var state_19523__$1 = state_19523;
var statearr_19535_19571 = state_19523__$1;
(statearr_19535_19571[(2)] = null);

(statearr_19535_19571[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (21))){
var state_19523__$1 = state_19523;
var statearr_19536_19572 = state_19523__$1;
(statearr_19536_19572[(2)] = null);

(statearr_19536_19572[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (13))){
var inst_19476 = (state_19523[(8)]);
var inst_19478 = (state_19523[(9)]);
var inst_19477 = (state_19523[(10)]);
var inst_19475 = (state_19523[(12)]);
var inst_19485 = (state_19523[(2)]);
var inst_19486 = (inst_19478 + (1));
var tmp19532 = inst_19476;
var tmp19533 = inst_19477;
var tmp19534 = inst_19475;
var inst_19475__$1 = tmp19534;
var inst_19476__$1 = tmp19532;
var inst_19477__$1 = tmp19533;
var inst_19478__$1 = inst_19486;
var state_19523__$1 = (function (){var statearr_19537 = state_19523;
(statearr_19537[(8)] = inst_19476__$1);

(statearr_19537[(14)] = inst_19485);

(statearr_19537[(9)] = inst_19478__$1);

(statearr_19537[(10)] = inst_19477__$1);

(statearr_19537[(12)] = inst_19475__$1);

return statearr_19537;
})();
var statearr_19538_19573 = state_19523__$1;
(statearr_19538_19573[(2)] = null);

(statearr_19538_19573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (22))){
var state_19523__$1 = state_19523;
var statearr_19539_19574 = state_19523__$1;
(statearr_19539_19574[(2)] = null);

(statearr_19539_19574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (6))){
var inst_19464 = (state_19523[(13)]);
var inst_19473 = f.call(null,inst_19464);
var inst_19474 = cljs.core.seq.call(null,inst_19473);
var inst_19475 = inst_19474;
var inst_19476 = null;
var inst_19477 = (0);
var inst_19478 = (0);
var state_19523__$1 = (function (){var statearr_19540 = state_19523;
(statearr_19540[(8)] = inst_19476);

(statearr_19540[(9)] = inst_19478);

(statearr_19540[(10)] = inst_19477);

(statearr_19540[(12)] = inst_19475);

return statearr_19540;
})();
var statearr_19541_19575 = state_19523__$1;
(statearr_19541_19575[(2)] = null);

(statearr_19541_19575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (17))){
var inst_19489 = (state_19523[(7)]);
var inst_19493 = cljs.core.chunk_first.call(null,inst_19489);
var inst_19494 = cljs.core.chunk_rest.call(null,inst_19489);
var inst_19495 = cljs.core.count.call(null,inst_19493);
var inst_19475 = inst_19494;
var inst_19476 = inst_19493;
var inst_19477 = inst_19495;
var inst_19478 = (0);
var state_19523__$1 = (function (){var statearr_19542 = state_19523;
(statearr_19542[(8)] = inst_19476);

(statearr_19542[(9)] = inst_19478);

(statearr_19542[(10)] = inst_19477);

(statearr_19542[(12)] = inst_19475);

return statearr_19542;
})();
var statearr_19543_19576 = state_19523__$1;
(statearr_19543_19576[(2)] = null);

(statearr_19543_19576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (3))){
var inst_19521 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19523__$1,inst_19521);
} else {
if((state_val_19524 === (12))){
var inst_19509 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
var statearr_19544_19577 = state_19523__$1;
(statearr_19544_19577[(2)] = inst_19509);

(statearr_19544_19577[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (2))){
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19523__$1,(4),in$);
} else {
if((state_val_19524 === (23))){
var inst_19517 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
var statearr_19545_19578 = state_19523__$1;
(statearr_19545_19578[(2)] = inst_19517);

(statearr_19545_19578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (19))){
var inst_19504 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
var statearr_19546_19579 = state_19523__$1;
(statearr_19546_19579[(2)] = inst_19504);

(statearr_19546_19579[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (11))){
var inst_19489 = (state_19523[(7)]);
var inst_19475 = (state_19523[(12)]);
var inst_19489__$1 = cljs.core.seq.call(null,inst_19475);
var state_19523__$1 = (function (){var statearr_19547 = state_19523;
(statearr_19547[(7)] = inst_19489__$1);

return statearr_19547;
})();
if(inst_19489__$1){
var statearr_19548_19580 = state_19523__$1;
(statearr_19548_19580[(1)] = (14));

} else {
var statearr_19549_19581 = state_19523__$1;
(statearr_19549_19581[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (9))){
var inst_19511 = (state_19523[(2)]);
var inst_19512 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19523__$1 = (function (){var statearr_19550 = state_19523;
(statearr_19550[(15)] = inst_19511);

return statearr_19550;
})();
if(cljs.core.truth_(inst_19512)){
var statearr_19551_19582 = state_19523__$1;
(statearr_19551_19582[(1)] = (21));

} else {
var statearr_19552_19583 = state_19523__$1;
(statearr_19552_19583[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (5))){
var inst_19467 = cljs.core.async.close_BANG_.call(null,out);
var state_19523__$1 = state_19523;
var statearr_19553_19584 = state_19523__$1;
(statearr_19553_19584[(2)] = inst_19467);

(statearr_19553_19584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (14))){
var inst_19489 = (state_19523[(7)]);
var inst_19491 = cljs.core.chunked_seq_QMARK_.call(null,inst_19489);
var state_19523__$1 = state_19523;
if(inst_19491){
var statearr_19554_19585 = state_19523__$1;
(statearr_19554_19585[(1)] = (17));

} else {
var statearr_19555_19586 = state_19523__$1;
(statearr_19555_19586[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (16))){
var inst_19507 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
var statearr_19556_19587 = state_19523__$1;
(statearr_19556_19587[(2)] = inst_19507);

(statearr_19556_19587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (10))){
var inst_19476 = (state_19523[(8)]);
var inst_19478 = (state_19523[(9)]);
var inst_19483 = cljs.core._nth.call(null,inst_19476,inst_19478);
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19523__$1,(13),out,inst_19483);
} else {
if((state_val_19524 === (18))){
var inst_19489 = (state_19523[(7)]);
var inst_19498 = cljs.core.first.call(null,inst_19489);
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19523__$1,(20),out,inst_19498);
} else {
if((state_val_19524 === (8))){
var inst_19478 = (state_19523[(9)]);
var inst_19477 = (state_19523[(10)]);
var inst_19480 = (inst_19478 < inst_19477);
var inst_19481 = inst_19480;
var state_19523__$1 = state_19523;
if(cljs.core.truth_(inst_19481)){
var statearr_19557_19588 = state_19523__$1;
(statearr_19557_19588[(1)] = (10));

} else {
var statearr_19558_19589 = state_19523__$1;
(statearr_19558_19589[(1)] = (11));

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
var statearr_19562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19562[(0)] = state_machine__6722__auto__);

(statearr_19562[(1)] = (1));

return statearr_19562;
});
var state_machine__6722__auto____1 = (function (state_19523){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19563){if((e19563 instanceof Object)){
var ex__6725__auto__ = e19563;
var statearr_19564_19590 = state_19523;
(statearr_19564_19590[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19591 = state_19523;
state_19523 = G__19591;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19523){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__))
})();
var state__6779__auto__ = (function (){var statearr_19565 = f__6778__auto__.call(null);
(statearr_19565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_19565;
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
var c__6777__auto___19688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19688,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19688,out){
return (function (state_19663){
var state_val_19664 = (state_19663[(1)]);
if((state_val_19664 === (7))){
var inst_19658 = (state_19663[(2)]);
var state_19663__$1 = state_19663;
var statearr_19665_19689 = state_19663__$1;
(statearr_19665_19689[(2)] = inst_19658);

(statearr_19665_19689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19664 === (1))){
var inst_19640 = null;
var state_19663__$1 = (function (){var statearr_19666 = state_19663;
(statearr_19666[(7)] = inst_19640);

return statearr_19666;
})();
var statearr_19667_19690 = state_19663__$1;
(statearr_19667_19690[(2)] = null);

(statearr_19667_19690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19664 === (4))){
var inst_19643 = (state_19663[(8)]);
var inst_19643__$1 = (state_19663[(2)]);
var inst_19644 = (inst_19643__$1 == null);
var inst_19645 = cljs.core.not.call(null,inst_19644);
var state_19663__$1 = (function (){var statearr_19668 = state_19663;
(statearr_19668[(8)] = inst_19643__$1);

return statearr_19668;
})();
if(inst_19645){
var statearr_19669_19691 = state_19663__$1;
(statearr_19669_19691[(1)] = (5));

} else {
var statearr_19670_19692 = state_19663__$1;
(statearr_19670_19692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19664 === (6))){
var state_19663__$1 = state_19663;
var statearr_19671_19693 = state_19663__$1;
(statearr_19671_19693[(2)] = null);

(statearr_19671_19693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19664 === (3))){
var inst_19660 = (state_19663[(2)]);
var inst_19661 = cljs.core.async.close_BANG_.call(null,out);
var state_19663__$1 = (function (){var statearr_19672 = state_19663;
(statearr_19672[(9)] = inst_19660);

return statearr_19672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19663__$1,inst_19661);
} else {
if((state_val_19664 === (2))){
var state_19663__$1 = state_19663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19663__$1,(4),ch);
} else {
if((state_val_19664 === (11))){
var inst_19643 = (state_19663[(8)]);
var inst_19652 = (state_19663[(2)]);
var inst_19640 = inst_19643;
var state_19663__$1 = (function (){var statearr_19673 = state_19663;
(statearr_19673[(7)] = inst_19640);

(statearr_19673[(10)] = inst_19652);

return statearr_19673;
})();
var statearr_19674_19694 = state_19663__$1;
(statearr_19674_19694[(2)] = null);

(statearr_19674_19694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19664 === (9))){
var inst_19643 = (state_19663[(8)]);
var state_19663__$1 = state_19663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19663__$1,(11),out,inst_19643);
} else {
if((state_val_19664 === (5))){
var inst_19640 = (state_19663[(7)]);
var inst_19643 = (state_19663[(8)]);
var inst_19647 = cljs.core._EQ_.call(null,inst_19643,inst_19640);
var state_19663__$1 = state_19663;
if(inst_19647){
var statearr_19676_19695 = state_19663__$1;
(statearr_19676_19695[(1)] = (8));

} else {
var statearr_19677_19696 = state_19663__$1;
(statearr_19677_19696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19664 === (10))){
var inst_19655 = (state_19663[(2)]);
var state_19663__$1 = state_19663;
var statearr_19678_19697 = state_19663__$1;
(statearr_19678_19697[(2)] = inst_19655);

(statearr_19678_19697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19664 === (8))){
var inst_19640 = (state_19663[(7)]);
var tmp19675 = inst_19640;
var inst_19640__$1 = tmp19675;
var state_19663__$1 = (function (){var statearr_19679 = state_19663;
(statearr_19679[(7)] = inst_19640__$1);

return statearr_19679;
})();
var statearr_19680_19698 = state_19663__$1;
(statearr_19680_19698[(2)] = null);

(statearr_19680_19698[(1)] = (2));


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
});})(c__6777__auto___19688,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19688,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19684 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19684[(0)] = state_machine__6722__auto__);

(statearr_19684[(1)] = (1));

return statearr_19684;
});
var state_machine__6722__auto____1 = (function (state_19663){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19685){if((e19685 instanceof Object)){
var ex__6725__auto__ = e19685;
var statearr_19686_19699 = state_19663;
(statearr_19686_19699[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19700 = state_19663;
state_19663 = G__19700;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19663){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19688,out))
})();
var state__6779__auto__ = (function (){var statearr_19687 = f__6778__auto__.call(null);
(statearr_19687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19688);

return statearr_19687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19688,out))
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
var c__6777__auto___19835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19835,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19835,out){
return (function (state_19805){
var state_val_19806 = (state_19805[(1)]);
if((state_val_19806 === (7))){
var inst_19801 = (state_19805[(2)]);
var state_19805__$1 = state_19805;
var statearr_19807_19836 = state_19805__$1;
(statearr_19807_19836[(2)] = inst_19801);

(statearr_19807_19836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19806 === (1))){
var inst_19768 = (new Array(n));
var inst_19769 = inst_19768;
var inst_19770 = (0);
var state_19805__$1 = (function (){var statearr_19808 = state_19805;
(statearr_19808[(7)] = inst_19769);

(statearr_19808[(8)] = inst_19770);

return statearr_19808;
})();
var statearr_19809_19837 = state_19805__$1;
(statearr_19809_19837[(2)] = null);

(statearr_19809_19837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19806 === (4))){
var inst_19773 = (state_19805[(9)]);
var inst_19773__$1 = (state_19805[(2)]);
var inst_19774 = (inst_19773__$1 == null);
var inst_19775 = cljs.core.not.call(null,inst_19774);
var state_19805__$1 = (function (){var statearr_19810 = state_19805;
(statearr_19810[(9)] = inst_19773__$1);

return statearr_19810;
})();
if(inst_19775){
var statearr_19811_19838 = state_19805__$1;
(statearr_19811_19838[(1)] = (5));

} else {
var statearr_19812_19839 = state_19805__$1;
(statearr_19812_19839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19806 === (15))){
var inst_19795 = (state_19805[(2)]);
var state_19805__$1 = state_19805;
var statearr_19813_19840 = state_19805__$1;
(statearr_19813_19840[(2)] = inst_19795);

(statearr_19813_19840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19806 === (13))){
var state_19805__$1 = state_19805;
var statearr_19814_19841 = state_19805__$1;
(statearr_19814_19841[(2)] = null);

(statearr_19814_19841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19806 === (6))){
var inst_19770 = (state_19805[(8)]);
var inst_19791 = (inst_19770 > (0));
var state_19805__$1 = state_19805;
if(cljs.core.truth_(inst_19791)){
var statearr_19815_19842 = state_19805__$1;
(statearr_19815_19842[(1)] = (12));

} else {
var statearr_19816_19843 = state_19805__$1;
(statearr_19816_19843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19806 === (3))){
var inst_19803 = (state_19805[(2)]);
var state_19805__$1 = state_19805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19805__$1,inst_19803);
} else {
if((state_val_19806 === (12))){
var inst_19769 = (state_19805[(7)]);
var inst_19793 = cljs.core.vec.call(null,inst_19769);
var state_19805__$1 = state_19805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19805__$1,(15),out,inst_19793);
} else {
if((state_val_19806 === (2))){
var state_19805__$1 = state_19805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19805__$1,(4),ch);
} else {
if((state_val_19806 === (11))){
var inst_19785 = (state_19805[(2)]);
var inst_19786 = (new Array(n));
var inst_19769 = inst_19786;
var inst_19770 = (0);
var state_19805__$1 = (function (){var statearr_19817 = state_19805;
(statearr_19817[(10)] = inst_19785);

(statearr_19817[(7)] = inst_19769);

(statearr_19817[(8)] = inst_19770);

return statearr_19817;
})();
var statearr_19818_19844 = state_19805__$1;
(statearr_19818_19844[(2)] = null);

(statearr_19818_19844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19806 === (9))){
var inst_19769 = (state_19805[(7)]);
var inst_19783 = cljs.core.vec.call(null,inst_19769);
var state_19805__$1 = state_19805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19805__$1,(11),out,inst_19783);
} else {
if((state_val_19806 === (5))){
var inst_19778 = (state_19805[(11)]);
var inst_19773 = (state_19805[(9)]);
var inst_19769 = (state_19805[(7)]);
var inst_19770 = (state_19805[(8)]);
var inst_19777 = (inst_19769[inst_19770] = inst_19773);
var inst_19778__$1 = (inst_19770 + (1));
var inst_19779 = (inst_19778__$1 < n);
var state_19805__$1 = (function (){var statearr_19819 = state_19805;
(statearr_19819[(11)] = inst_19778__$1);

(statearr_19819[(12)] = inst_19777);

return statearr_19819;
})();
if(cljs.core.truth_(inst_19779)){
var statearr_19820_19845 = state_19805__$1;
(statearr_19820_19845[(1)] = (8));

} else {
var statearr_19821_19846 = state_19805__$1;
(statearr_19821_19846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19806 === (14))){
var inst_19798 = (state_19805[(2)]);
var inst_19799 = cljs.core.async.close_BANG_.call(null,out);
var state_19805__$1 = (function (){var statearr_19823 = state_19805;
(statearr_19823[(13)] = inst_19798);

return statearr_19823;
})();
var statearr_19824_19847 = state_19805__$1;
(statearr_19824_19847[(2)] = inst_19799);

(statearr_19824_19847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19806 === (10))){
var inst_19789 = (state_19805[(2)]);
var state_19805__$1 = state_19805;
var statearr_19825_19848 = state_19805__$1;
(statearr_19825_19848[(2)] = inst_19789);

(statearr_19825_19848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19806 === (8))){
var inst_19778 = (state_19805[(11)]);
var inst_19769 = (state_19805[(7)]);
var tmp19822 = inst_19769;
var inst_19769__$1 = tmp19822;
var inst_19770 = inst_19778;
var state_19805__$1 = (function (){var statearr_19826 = state_19805;
(statearr_19826[(7)] = inst_19769__$1);

(statearr_19826[(8)] = inst_19770);

return statearr_19826;
})();
var statearr_19827_19849 = state_19805__$1;
(statearr_19827_19849[(2)] = null);

(statearr_19827_19849[(1)] = (2));


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
});})(c__6777__auto___19835,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19835,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19831[(0)] = state_machine__6722__auto__);

(statearr_19831[(1)] = (1));

return statearr_19831;
});
var state_machine__6722__auto____1 = (function (state_19805){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19832){if((e19832 instanceof Object)){
var ex__6725__auto__ = e19832;
var statearr_19833_19850 = state_19805;
(statearr_19833_19850[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19851 = state_19805;
state_19805 = G__19851;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19805){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19835,out))
})();
var state__6779__auto__ = (function (){var statearr_19834 = f__6778__auto__.call(null);
(statearr_19834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19835);

return statearr_19834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19835,out))
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
var c__6777__auto___19994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto___19994,out){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto___19994,out){
return (function (state_19964){
var state_val_19965 = (state_19964[(1)]);
if((state_val_19965 === (7))){
var inst_19960 = (state_19964[(2)]);
var state_19964__$1 = state_19964;
var statearr_19966_19995 = state_19964__$1;
(statearr_19966_19995[(2)] = inst_19960);

(statearr_19966_19995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (1))){
var inst_19923 = [];
var inst_19924 = inst_19923;
var inst_19925 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19964__$1 = (function (){var statearr_19967 = state_19964;
(statearr_19967[(7)] = inst_19924);

(statearr_19967[(8)] = inst_19925);

return statearr_19967;
})();
var statearr_19968_19996 = state_19964__$1;
(statearr_19968_19996[(2)] = null);

(statearr_19968_19996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (4))){
var inst_19928 = (state_19964[(9)]);
var inst_19928__$1 = (state_19964[(2)]);
var inst_19929 = (inst_19928__$1 == null);
var inst_19930 = cljs.core.not.call(null,inst_19929);
var state_19964__$1 = (function (){var statearr_19969 = state_19964;
(statearr_19969[(9)] = inst_19928__$1);

return statearr_19969;
})();
if(inst_19930){
var statearr_19970_19997 = state_19964__$1;
(statearr_19970_19997[(1)] = (5));

} else {
var statearr_19971_19998 = state_19964__$1;
(statearr_19971_19998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (15))){
var inst_19954 = (state_19964[(2)]);
var state_19964__$1 = state_19964;
var statearr_19972_19999 = state_19964__$1;
(statearr_19972_19999[(2)] = inst_19954);

(statearr_19972_19999[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (13))){
var state_19964__$1 = state_19964;
var statearr_19973_20000 = state_19964__$1;
(statearr_19973_20000[(2)] = null);

(statearr_19973_20000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (6))){
var inst_19924 = (state_19964[(7)]);
var inst_19949 = inst_19924.length;
var inst_19950 = (inst_19949 > (0));
var state_19964__$1 = state_19964;
if(cljs.core.truth_(inst_19950)){
var statearr_19974_20001 = state_19964__$1;
(statearr_19974_20001[(1)] = (12));

} else {
var statearr_19975_20002 = state_19964__$1;
(statearr_19975_20002[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (3))){
var inst_19962 = (state_19964[(2)]);
var state_19964__$1 = state_19964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19964__$1,inst_19962);
} else {
if((state_val_19965 === (12))){
var inst_19924 = (state_19964[(7)]);
var inst_19952 = cljs.core.vec.call(null,inst_19924);
var state_19964__$1 = state_19964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19964__$1,(15),out,inst_19952);
} else {
if((state_val_19965 === (2))){
var state_19964__$1 = state_19964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19964__$1,(4),ch);
} else {
if((state_val_19965 === (11))){
var inst_19928 = (state_19964[(9)]);
var inst_19932 = (state_19964[(10)]);
var inst_19942 = (state_19964[(2)]);
var inst_19943 = [];
var inst_19944 = inst_19943.push(inst_19928);
var inst_19924 = inst_19943;
var inst_19925 = inst_19932;
var state_19964__$1 = (function (){var statearr_19976 = state_19964;
(statearr_19976[(11)] = inst_19942);

(statearr_19976[(7)] = inst_19924);

(statearr_19976[(8)] = inst_19925);

(statearr_19976[(12)] = inst_19944);

return statearr_19976;
})();
var statearr_19977_20003 = state_19964__$1;
(statearr_19977_20003[(2)] = null);

(statearr_19977_20003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (9))){
var inst_19924 = (state_19964[(7)]);
var inst_19940 = cljs.core.vec.call(null,inst_19924);
var state_19964__$1 = state_19964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19964__$1,(11),out,inst_19940);
} else {
if((state_val_19965 === (5))){
var inst_19925 = (state_19964[(8)]);
var inst_19928 = (state_19964[(9)]);
var inst_19932 = (state_19964[(10)]);
var inst_19932__$1 = f.call(null,inst_19928);
var inst_19933 = cljs.core._EQ_.call(null,inst_19932__$1,inst_19925);
var inst_19934 = cljs.core.keyword_identical_QMARK_.call(null,inst_19925,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19935 = (inst_19933) || (inst_19934);
var state_19964__$1 = (function (){var statearr_19978 = state_19964;
(statearr_19978[(10)] = inst_19932__$1);

return statearr_19978;
})();
if(cljs.core.truth_(inst_19935)){
var statearr_19979_20004 = state_19964__$1;
(statearr_19979_20004[(1)] = (8));

} else {
var statearr_19980_20005 = state_19964__$1;
(statearr_19980_20005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (14))){
var inst_19957 = (state_19964[(2)]);
var inst_19958 = cljs.core.async.close_BANG_.call(null,out);
var state_19964__$1 = (function (){var statearr_19982 = state_19964;
(statearr_19982[(13)] = inst_19957);

return statearr_19982;
})();
var statearr_19983_20006 = state_19964__$1;
(statearr_19983_20006[(2)] = inst_19958);

(statearr_19983_20006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (10))){
var inst_19947 = (state_19964[(2)]);
var state_19964__$1 = state_19964;
var statearr_19984_20007 = state_19964__$1;
(statearr_19984_20007[(2)] = inst_19947);

(statearr_19984_20007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19965 === (8))){
var inst_19924 = (state_19964[(7)]);
var inst_19928 = (state_19964[(9)]);
var inst_19932 = (state_19964[(10)]);
var inst_19937 = inst_19924.push(inst_19928);
var tmp19981 = inst_19924;
var inst_19924__$1 = tmp19981;
var inst_19925 = inst_19932;
var state_19964__$1 = (function (){var statearr_19985 = state_19964;
(statearr_19985[(7)] = inst_19924__$1);

(statearr_19985[(8)] = inst_19925);

(statearr_19985[(14)] = inst_19937);

return statearr_19985;
})();
var statearr_19986_20008 = state_19964__$1;
(statearr_19986_20008[(2)] = null);

(statearr_19986_20008[(1)] = (2));


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
});})(c__6777__auto___19994,out))
;
return ((function (switch__6721__auto__,c__6777__auto___19994,out){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_19990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19990[(0)] = state_machine__6722__auto__);

(statearr_19990[(1)] = (1));

return statearr_19990;
});
var state_machine__6722__auto____1 = (function (state_19964){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_19964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e19991){if((e19991 instanceof Object)){
var ex__6725__auto__ = e19991;
var statearr_19992_20009 = state_19964;
(statearr_19992_20009[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20010 = state_19964;
state_19964 = G__20010;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_19964){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_19964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto___19994,out))
})();
var state__6779__auto__ = (function (){var statearr_19993 = f__6778__auto__.call(null);
(statearr_19993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto___19994);

return statearr_19993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto___19994,out))
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