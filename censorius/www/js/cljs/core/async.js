// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async9424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9424 = (function (fn_handler,f,meta9425){
this.fn_handler = fn_handler;
this.f = f;
this.meta9425 = meta9425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9426,meta9425__$1){
var self__ = this;
var _9426__$1 = this;
return (new cljs.core.async.t_cljs$core$async9424(self__.fn_handler,self__.f,meta9425__$1));
});

cljs.core.async.t_cljs$core$async9424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9426){
var self__ = this;
var _9426__$1 = this;
return self__.meta9425;
});

cljs.core.async.t_cljs$core$async9424.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta9425","meta9425",-486978521,null)], null);
});

cljs.core.async.t_cljs$core$async9424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9424";

cljs.core.async.t_cljs$core$async9424.cljs$lang$ctorPrWriter = (function (this__6737__auto__,writer__6738__auto__,opt__6739__auto__){
return cljs.core._write.call(null,writer__6738__auto__,"cljs.core.async/t_cljs$core$async9424");
});

cljs.core.async.__GT_t_cljs$core$async9424 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async9424(fn_handler__$1,f__$1,meta9425){
return (new cljs.core.async.t_cljs$core$async9424(fn_handler__$1,f__$1,meta9425));
});

}

return (new cljs.core.async.t_cljs$core$async9424(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args9429 = [];
var len__7197__auto___9432 = arguments.length;
var i__7198__auto___9433 = (0);
while(true){
if((i__7198__auto___9433 < len__7197__auto___9432)){
args9429.push((arguments[i__7198__auto___9433]));

var G__9434 = (i__7198__auto___9433 + (1));
i__7198__auto___9433 = G__9434;
continue;
} else {
}
break;
}

var G__9431 = args9429.length;
switch (G__9431) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9429.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
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

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args9436 = [];
var len__7197__auto___9439 = arguments.length;
var i__7198__auto___9440 = (0);
while(true){
if((i__7198__auto___9440 < len__7197__auto___9439)){
args9436.push((arguments[i__7198__auto___9440]));

var G__9441 = (i__7198__auto___9440 + (1));
i__7198__auto___9440 = G__9441;
continue;
} else {
}
break;
}

var G__9438 = args9436.length;
switch (G__9438) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9436.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9443 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9443);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9443,ret){
return (function (){
return fn1.call(null,val_9443);
});})(val_9443,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args9444 = [];
var len__7197__auto___9447 = arguments.length;
var i__7198__auto___9448 = (0);
while(true){
if((i__7198__auto___9448 < len__7197__auto___9447)){
args9444.push((arguments[i__7198__auto___9448]));

var G__9449 = (i__7198__auto___9448 + (1));
i__7198__auto___9448 = G__9449;
continue;
} else {
}
break;
}

var G__9446 = args9444.length;
switch (G__9446) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9444.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7042__auto___9451 = n;
var x_9452 = (0);
while(true){
if((x_9452 < n__7042__auto___9451)){
(a[x_9452] = (0));

var G__9453 = (x_9452 + (1));
x_9452 = G__9453;
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

var G__9454 = (i + (1));
i = G__9454;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9458 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9458 = (function (alt_flag,flag,meta9459){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9459 = meta9459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9460,meta9459__$1){
var self__ = this;
var _9460__$1 = this;
return (new cljs.core.async.t_cljs$core$async9458(self__.alt_flag,self__.flag,meta9459__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9460){
var self__ = this;
var _9460__$1 = this;
return self__.meta9459;
});})(flag))
;

cljs.core.async.t_cljs$core$async9458.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9458.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9458.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9458.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9459","meta9459",359013413,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9458.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9458";

cljs.core.async.t_cljs$core$async9458.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6737__auto__,writer__6738__auto__,opt__6739__auto__){
return cljs.core._write.call(null,writer__6738__auto__,"cljs.core.async/t_cljs$core$async9458");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9458 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9458(alt_flag__$1,flag__$1,meta9459){
return (new cljs.core.async.t_cljs$core$async9458(alt_flag__$1,flag__$1,meta9459));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9458(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9464 = (function (alt_handler,flag,cb,meta9465){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9465 = meta9465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9466,meta9465__$1){
var self__ = this;
var _9466__$1 = this;
return (new cljs.core.async.t_cljs$core$async9464(self__.alt_handler,self__.flag,self__.cb,meta9465__$1));
});

cljs.core.async.t_cljs$core$async9464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9466){
var self__ = this;
var _9466__$1 = this;
return self__.meta9465;
});

cljs.core.async.t_cljs$core$async9464.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9464.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9464.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9465","meta9465",1173492087,null)], null);
});

cljs.core.async.t_cljs$core$async9464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9464";

cljs.core.async.t_cljs$core$async9464.cljs$lang$ctorPrWriter = (function (this__6737__auto__,writer__6738__auto__,opt__6739__auto__){
return cljs.core._write.call(null,writer__6738__auto__,"cljs.core.async/t_cljs$core$async9464");
});

cljs.core.async.__GT_t_cljs$core$async9464 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9464(alt_handler__$1,flag__$1,cb__$1,meta9465){
return (new cljs.core.async.t_cljs$core$async9464(alt_handler__$1,flag__$1,cb__$1,meta9465));
});

}

return (new cljs.core.async.t_cljs$core$async9464(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__9467_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9467_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9468_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9468_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6139__auto__ = wport;
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9469 = (i + (1));
i = G__9469;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6139__auto__ = ret;
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__6127__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6127__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6127__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7204__auto__ = [];
var len__7197__auto___9475 = arguments.length;
var i__7198__auto___9476 = (0);
while(true){
if((i__7198__auto___9476 < len__7197__auto___9475)){
args__7204__auto__.push((arguments[i__7198__auto___9476]));

var G__9477 = (i__7198__auto___9476 + (1));
i__7198__auto___9476 = G__9477;
continue;
} else {
}
break;
}

var argseq__7205__auto__ = ((((1) < args__7204__auto__.length))?(new cljs.core.IndexedSeq(args__7204__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7205__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9472){
var map__9473 = p__9472;
var map__9473__$1 = ((((!((map__9473 == null)))?((((map__9473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9473):map__9473);
var opts = map__9473__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9470){
var G__9471 = cljs.core.first.call(null,seq9470);
var seq9470__$1 = cljs.core.next.call(null,seq9470);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9471,seq9470__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args9478 = [];
var len__7197__auto___9528 = arguments.length;
var i__7198__auto___9529 = (0);
while(true){
if((i__7198__auto___9529 < len__7197__auto___9528)){
args9478.push((arguments[i__7198__auto___9529]));

var G__9530 = (i__7198__auto___9529 + (1));
i__7198__auto___9529 = G__9530;
continue;
} else {
}
break;
}

var G__9480 = args9478.length;
switch (G__9480) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9478.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9376__auto___9532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___9532){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___9532){
return (function (state_9504){
var state_val_9505 = (state_9504[(1)]);
if((state_val_9505 === (7))){
var inst_9500 = (state_9504[(2)]);
var state_9504__$1 = state_9504;
var statearr_9506_9533 = state_9504__$1;
(statearr_9506_9533[(2)] = inst_9500);

(statearr_9506_9533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9505 === (1))){
var state_9504__$1 = state_9504;
var statearr_9507_9534 = state_9504__$1;
(statearr_9507_9534[(2)] = null);

(statearr_9507_9534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9505 === (4))){
var inst_9483 = (state_9504[(7)]);
var inst_9483__$1 = (state_9504[(2)]);
var inst_9484 = (inst_9483__$1 == null);
var state_9504__$1 = (function (){var statearr_9508 = state_9504;
(statearr_9508[(7)] = inst_9483__$1);

return statearr_9508;
})();
if(cljs.core.truth_(inst_9484)){
var statearr_9509_9535 = state_9504__$1;
(statearr_9509_9535[(1)] = (5));

} else {
var statearr_9510_9536 = state_9504__$1;
(statearr_9510_9536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9505 === (13))){
var state_9504__$1 = state_9504;
var statearr_9511_9537 = state_9504__$1;
(statearr_9511_9537[(2)] = null);

(statearr_9511_9537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9505 === (6))){
var inst_9483 = (state_9504[(7)]);
var state_9504__$1 = state_9504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9504__$1,(11),to,inst_9483);
} else {
if((state_val_9505 === (3))){
var inst_9502 = (state_9504[(2)]);
var state_9504__$1 = state_9504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9504__$1,inst_9502);
} else {
if((state_val_9505 === (12))){
var state_9504__$1 = state_9504;
var statearr_9512_9538 = state_9504__$1;
(statearr_9512_9538[(2)] = null);

(statearr_9512_9538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9505 === (2))){
var state_9504__$1 = state_9504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9504__$1,(4),from);
} else {
if((state_val_9505 === (11))){
var inst_9493 = (state_9504[(2)]);
var state_9504__$1 = state_9504;
if(cljs.core.truth_(inst_9493)){
var statearr_9513_9539 = state_9504__$1;
(statearr_9513_9539[(1)] = (12));

} else {
var statearr_9514_9540 = state_9504__$1;
(statearr_9514_9540[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9505 === (9))){
var state_9504__$1 = state_9504;
var statearr_9515_9541 = state_9504__$1;
(statearr_9515_9541[(2)] = null);

(statearr_9515_9541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9505 === (5))){
var state_9504__$1 = state_9504;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9516_9542 = state_9504__$1;
(statearr_9516_9542[(1)] = (8));

} else {
var statearr_9517_9543 = state_9504__$1;
(statearr_9517_9543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9505 === (14))){
var inst_9498 = (state_9504[(2)]);
var state_9504__$1 = state_9504;
var statearr_9518_9544 = state_9504__$1;
(statearr_9518_9544[(2)] = inst_9498);

(statearr_9518_9544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9505 === (10))){
var inst_9490 = (state_9504[(2)]);
var state_9504__$1 = state_9504;
var statearr_9519_9545 = state_9504__$1;
(statearr_9519_9545[(2)] = inst_9490);

(statearr_9519_9545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9505 === (8))){
var inst_9487 = cljs.core.async.close_BANG_.call(null,to);
var state_9504__$1 = state_9504;
var statearr_9520_9546 = state_9504__$1;
(statearr_9520_9546[(2)] = inst_9487);

(statearr_9520_9546[(1)] = (10));


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
});})(c__9376__auto___9532))
;
return ((function (switch__9264__auto__,c__9376__auto___9532){
return (function() {
var cljs$core$async$state_machine__9265__auto__ = null;
var cljs$core$async$state_machine__9265__auto____0 = (function (){
var statearr_9524 = [null,null,null,null,null,null,null,null];
(statearr_9524[(0)] = cljs$core$async$state_machine__9265__auto__);

(statearr_9524[(1)] = (1));

return statearr_9524;
});
var cljs$core$async$state_machine__9265__auto____1 = (function (state_9504){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_9504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e9525){if((e9525 instanceof Object)){
var ex__9268__auto__ = e9525;
var statearr_9526_9547 = state_9504;
(statearr_9526_9547[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9548 = state_9504;
state_9504 = G__9548;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$state_machine__9265__auto__ = function(state_9504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9265__auto____1.call(this,state_9504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9265__auto____0;
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9265__auto____1;
return cljs$core$async$state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___9532))
})();
var state__9378__auto__ = (function (){var statearr_9527 = f__9377__auto__.call(null);
(statearr_9527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___9532);

return statearr_9527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___9532))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9732){
var vec__9733 = p__9732;
var v = cljs.core.nth.call(null,vec__9733,(0),null);
var p = cljs.core.nth.call(null,vec__9733,(1),null);
var job = vec__9733;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9376__auto___9915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___9915,res,vec__9733,v,p,job,jobs,results){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___9915,res,vec__9733,v,p,job,jobs,results){
return (function (state_9738){
var state_val_9739 = (state_9738[(1)]);
if((state_val_9739 === (1))){
var state_9738__$1 = state_9738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9738__$1,(2),res,v);
} else {
if((state_val_9739 === (2))){
var inst_9735 = (state_9738[(2)]);
var inst_9736 = cljs.core.async.close_BANG_.call(null,res);
var state_9738__$1 = (function (){var statearr_9740 = state_9738;
(statearr_9740[(7)] = inst_9735);

return statearr_9740;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9738__$1,inst_9736);
} else {
return null;
}
}
});})(c__9376__auto___9915,res,vec__9733,v,p,job,jobs,results))
;
return ((function (switch__9264__auto__,c__9376__auto___9915,res,vec__9733,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0 = (function (){
var statearr_9744 = [null,null,null,null,null,null,null,null];
(statearr_9744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__);

(statearr_9744[(1)] = (1));

return statearr_9744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1 = (function (state_9738){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_9738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e9745){if((e9745 instanceof Object)){
var ex__9268__auto__ = e9745;
var statearr_9746_9916 = state_9738;
(statearr_9746_9916[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9917 = state_9738;
state_9738 = G__9917;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__ = function(state_9738){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1.call(this,state_9738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___9915,res,vec__9733,v,p,job,jobs,results))
})();
var state__9378__auto__ = (function (){var statearr_9747 = f__9377__auto__.call(null);
(statearr_9747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___9915);

return statearr_9747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___9915,res,vec__9733,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9748){
var vec__9749 = p__9748;
var v = cljs.core.nth.call(null,vec__9749,(0),null);
var p = cljs.core.nth.call(null,vec__9749,(1),null);
var job = vec__9749;
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
var n__7042__auto___9918 = n;
var __9919 = (0);
while(true){
if((__9919 < n__7042__auto___9918)){
var G__9750_9920 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9750_9920) {
case "compute":
var c__9376__auto___9922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9919,c__9376__auto___9922,G__9750_9920,n__7042__auto___9918,jobs,results,process,async){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (__9919,c__9376__auto___9922,G__9750_9920,n__7042__auto___9918,jobs,results,process,async){
return (function (state_9763){
var state_val_9764 = (state_9763[(1)]);
if((state_val_9764 === (1))){
var state_9763__$1 = state_9763;
var statearr_9765_9923 = state_9763__$1;
(statearr_9765_9923[(2)] = null);

(statearr_9765_9923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9764 === (2))){
var state_9763__$1 = state_9763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9763__$1,(4),jobs);
} else {
if((state_val_9764 === (3))){
var inst_9761 = (state_9763[(2)]);
var state_9763__$1 = state_9763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9763__$1,inst_9761);
} else {
if((state_val_9764 === (4))){
var inst_9753 = (state_9763[(2)]);
var inst_9754 = process.call(null,inst_9753);
var state_9763__$1 = state_9763;
if(cljs.core.truth_(inst_9754)){
var statearr_9766_9924 = state_9763__$1;
(statearr_9766_9924[(1)] = (5));

} else {
var statearr_9767_9925 = state_9763__$1;
(statearr_9767_9925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9764 === (5))){
var state_9763__$1 = state_9763;
var statearr_9768_9926 = state_9763__$1;
(statearr_9768_9926[(2)] = null);

(statearr_9768_9926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9764 === (6))){
var state_9763__$1 = state_9763;
var statearr_9769_9927 = state_9763__$1;
(statearr_9769_9927[(2)] = null);

(statearr_9769_9927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9764 === (7))){
var inst_9759 = (state_9763[(2)]);
var state_9763__$1 = state_9763;
var statearr_9770_9928 = state_9763__$1;
(statearr_9770_9928[(2)] = inst_9759);

(statearr_9770_9928[(1)] = (3));


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
});})(__9919,c__9376__auto___9922,G__9750_9920,n__7042__auto___9918,jobs,results,process,async))
;
return ((function (__9919,switch__9264__auto__,c__9376__auto___9922,G__9750_9920,n__7042__auto___9918,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0 = (function (){
var statearr_9774 = [null,null,null,null,null,null,null];
(statearr_9774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__);

(statearr_9774[(1)] = (1));

return statearr_9774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1 = (function (state_9763){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_9763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e9775){if((e9775 instanceof Object)){
var ex__9268__auto__ = e9775;
var statearr_9776_9929 = state_9763;
(statearr_9776_9929[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9930 = state_9763;
state_9763 = G__9930;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__ = function(state_9763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1.call(this,state_9763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__;
})()
;})(__9919,switch__9264__auto__,c__9376__auto___9922,G__9750_9920,n__7042__auto___9918,jobs,results,process,async))
})();
var state__9378__auto__ = (function (){var statearr_9777 = f__9377__auto__.call(null);
(statearr_9777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___9922);

return statearr_9777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(__9919,c__9376__auto___9922,G__9750_9920,n__7042__auto___9918,jobs,results,process,async))
);


break;
case "async":
var c__9376__auto___9931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9919,c__9376__auto___9931,G__9750_9920,n__7042__auto___9918,jobs,results,process,async){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (__9919,c__9376__auto___9931,G__9750_9920,n__7042__auto___9918,jobs,results,process,async){
return (function (state_9790){
var state_val_9791 = (state_9790[(1)]);
if((state_val_9791 === (1))){
var state_9790__$1 = state_9790;
var statearr_9792_9932 = state_9790__$1;
(statearr_9792_9932[(2)] = null);

(statearr_9792_9932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9791 === (2))){
var state_9790__$1 = state_9790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9790__$1,(4),jobs);
} else {
if((state_val_9791 === (3))){
var inst_9788 = (state_9790[(2)]);
var state_9790__$1 = state_9790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9790__$1,inst_9788);
} else {
if((state_val_9791 === (4))){
var inst_9780 = (state_9790[(2)]);
var inst_9781 = async.call(null,inst_9780);
var state_9790__$1 = state_9790;
if(cljs.core.truth_(inst_9781)){
var statearr_9793_9933 = state_9790__$1;
(statearr_9793_9933[(1)] = (5));

} else {
var statearr_9794_9934 = state_9790__$1;
(statearr_9794_9934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9791 === (5))){
var state_9790__$1 = state_9790;
var statearr_9795_9935 = state_9790__$1;
(statearr_9795_9935[(2)] = null);

(statearr_9795_9935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9791 === (6))){
var state_9790__$1 = state_9790;
var statearr_9796_9936 = state_9790__$1;
(statearr_9796_9936[(2)] = null);

(statearr_9796_9936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9791 === (7))){
var inst_9786 = (state_9790[(2)]);
var state_9790__$1 = state_9790;
var statearr_9797_9937 = state_9790__$1;
(statearr_9797_9937[(2)] = inst_9786);

(statearr_9797_9937[(1)] = (3));


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
});})(__9919,c__9376__auto___9931,G__9750_9920,n__7042__auto___9918,jobs,results,process,async))
;
return ((function (__9919,switch__9264__auto__,c__9376__auto___9931,G__9750_9920,n__7042__auto___9918,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0 = (function (){
var statearr_9801 = [null,null,null,null,null,null,null];
(statearr_9801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__);

(statearr_9801[(1)] = (1));

return statearr_9801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1 = (function (state_9790){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_9790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e9802){if((e9802 instanceof Object)){
var ex__9268__auto__ = e9802;
var statearr_9803_9938 = state_9790;
(statearr_9803_9938[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9939 = state_9790;
state_9790 = G__9939;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__ = function(state_9790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1.call(this,state_9790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__;
})()
;})(__9919,switch__9264__auto__,c__9376__auto___9931,G__9750_9920,n__7042__auto___9918,jobs,results,process,async))
})();
var state__9378__auto__ = (function (){var statearr_9804 = f__9377__auto__.call(null);
(statearr_9804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___9931);

return statearr_9804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(__9919,c__9376__auto___9931,G__9750_9920,n__7042__auto___9918,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9940 = (__9919 + (1));
__9919 = G__9940;
continue;
} else {
}
break;
}

var c__9376__auto___9941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___9941,jobs,results,process,async){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___9941,jobs,results,process,async){
return (function (state_9826){
var state_val_9827 = (state_9826[(1)]);
if((state_val_9827 === (1))){
var state_9826__$1 = state_9826;
var statearr_9828_9942 = state_9826__$1;
(statearr_9828_9942[(2)] = null);

(statearr_9828_9942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (2))){
var state_9826__$1 = state_9826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9826__$1,(4),from);
} else {
if((state_val_9827 === (3))){
var inst_9824 = (state_9826[(2)]);
var state_9826__$1 = state_9826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9826__$1,inst_9824);
} else {
if((state_val_9827 === (4))){
var inst_9807 = (state_9826[(7)]);
var inst_9807__$1 = (state_9826[(2)]);
var inst_9808 = (inst_9807__$1 == null);
var state_9826__$1 = (function (){var statearr_9829 = state_9826;
(statearr_9829[(7)] = inst_9807__$1);

return statearr_9829;
})();
if(cljs.core.truth_(inst_9808)){
var statearr_9830_9943 = state_9826__$1;
(statearr_9830_9943[(1)] = (5));

} else {
var statearr_9831_9944 = state_9826__$1;
(statearr_9831_9944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (5))){
var inst_9810 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9826__$1 = state_9826;
var statearr_9832_9945 = state_9826__$1;
(statearr_9832_9945[(2)] = inst_9810);

(statearr_9832_9945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (6))){
var inst_9812 = (state_9826[(8)]);
var inst_9807 = (state_9826[(7)]);
var inst_9812__$1 = cljs.core.async.chan.call(null,(1));
var inst_9813 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9814 = [inst_9807,inst_9812__$1];
var inst_9815 = (new cljs.core.PersistentVector(null,2,(5),inst_9813,inst_9814,null));
var state_9826__$1 = (function (){var statearr_9833 = state_9826;
(statearr_9833[(8)] = inst_9812__$1);

return statearr_9833;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9826__$1,(8),jobs,inst_9815);
} else {
if((state_val_9827 === (7))){
var inst_9822 = (state_9826[(2)]);
var state_9826__$1 = state_9826;
var statearr_9834_9946 = state_9826__$1;
(statearr_9834_9946[(2)] = inst_9822);

(statearr_9834_9946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9827 === (8))){
var inst_9812 = (state_9826[(8)]);
var inst_9817 = (state_9826[(2)]);
var state_9826__$1 = (function (){var statearr_9835 = state_9826;
(statearr_9835[(9)] = inst_9817);

return statearr_9835;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9826__$1,(9),results,inst_9812);
} else {
if((state_val_9827 === (9))){
var inst_9819 = (state_9826[(2)]);
var state_9826__$1 = (function (){var statearr_9836 = state_9826;
(statearr_9836[(10)] = inst_9819);

return statearr_9836;
})();
var statearr_9837_9947 = state_9826__$1;
(statearr_9837_9947[(2)] = null);

(statearr_9837_9947[(1)] = (2));


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
});})(c__9376__auto___9941,jobs,results,process,async))
;
return ((function (switch__9264__auto__,c__9376__auto___9941,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0 = (function (){
var statearr_9841 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9841[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__);

(statearr_9841[(1)] = (1));

return statearr_9841;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1 = (function (state_9826){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_9826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e9842){if((e9842 instanceof Object)){
var ex__9268__auto__ = e9842;
var statearr_9843_9948 = state_9826;
(statearr_9843_9948[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9949 = state_9826;
state_9826 = G__9949;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__ = function(state_9826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1.call(this,state_9826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___9941,jobs,results,process,async))
})();
var state__9378__auto__ = (function (){var statearr_9844 = f__9377__auto__.call(null);
(statearr_9844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___9941);

return statearr_9844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___9941,jobs,results,process,async))
);


var c__9376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto__,jobs,results,process,async){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto__,jobs,results,process,async){
return (function (state_9882){
var state_val_9883 = (state_9882[(1)]);
if((state_val_9883 === (7))){
var inst_9878 = (state_9882[(2)]);
var state_9882__$1 = state_9882;
var statearr_9884_9950 = state_9882__$1;
(statearr_9884_9950[(2)] = inst_9878);

(statearr_9884_9950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (20))){
var state_9882__$1 = state_9882;
var statearr_9885_9951 = state_9882__$1;
(statearr_9885_9951[(2)] = null);

(statearr_9885_9951[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (1))){
var state_9882__$1 = state_9882;
var statearr_9886_9952 = state_9882__$1;
(statearr_9886_9952[(2)] = null);

(statearr_9886_9952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (4))){
var inst_9847 = (state_9882[(7)]);
var inst_9847__$1 = (state_9882[(2)]);
var inst_9848 = (inst_9847__$1 == null);
var state_9882__$1 = (function (){var statearr_9887 = state_9882;
(statearr_9887[(7)] = inst_9847__$1);

return statearr_9887;
})();
if(cljs.core.truth_(inst_9848)){
var statearr_9888_9953 = state_9882__$1;
(statearr_9888_9953[(1)] = (5));

} else {
var statearr_9889_9954 = state_9882__$1;
(statearr_9889_9954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (15))){
var inst_9860 = (state_9882[(8)]);
var state_9882__$1 = state_9882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9882__$1,(18),to,inst_9860);
} else {
if((state_val_9883 === (21))){
var inst_9873 = (state_9882[(2)]);
var state_9882__$1 = state_9882;
var statearr_9890_9955 = state_9882__$1;
(statearr_9890_9955[(2)] = inst_9873);

(statearr_9890_9955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (13))){
var inst_9875 = (state_9882[(2)]);
var state_9882__$1 = (function (){var statearr_9891 = state_9882;
(statearr_9891[(9)] = inst_9875);

return statearr_9891;
})();
var statearr_9892_9956 = state_9882__$1;
(statearr_9892_9956[(2)] = null);

(statearr_9892_9956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (6))){
var inst_9847 = (state_9882[(7)]);
var state_9882__$1 = state_9882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9882__$1,(11),inst_9847);
} else {
if((state_val_9883 === (17))){
var inst_9868 = (state_9882[(2)]);
var state_9882__$1 = state_9882;
if(cljs.core.truth_(inst_9868)){
var statearr_9893_9957 = state_9882__$1;
(statearr_9893_9957[(1)] = (19));

} else {
var statearr_9894_9958 = state_9882__$1;
(statearr_9894_9958[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (3))){
var inst_9880 = (state_9882[(2)]);
var state_9882__$1 = state_9882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9882__$1,inst_9880);
} else {
if((state_val_9883 === (12))){
var inst_9857 = (state_9882[(10)]);
var state_9882__$1 = state_9882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9882__$1,(14),inst_9857);
} else {
if((state_val_9883 === (2))){
var state_9882__$1 = state_9882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9882__$1,(4),results);
} else {
if((state_val_9883 === (19))){
var state_9882__$1 = state_9882;
var statearr_9895_9959 = state_9882__$1;
(statearr_9895_9959[(2)] = null);

(statearr_9895_9959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (11))){
var inst_9857 = (state_9882[(2)]);
var state_9882__$1 = (function (){var statearr_9896 = state_9882;
(statearr_9896[(10)] = inst_9857);

return statearr_9896;
})();
var statearr_9897_9960 = state_9882__$1;
(statearr_9897_9960[(2)] = null);

(statearr_9897_9960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (9))){
var state_9882__$1 = state_9882;
var statearr_9898_9961 = state_9882__$1;
(statearr_9898_9961[(2)] = null);

(statearr_9898_9961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (5))){
var state_9882__$1 = state_9882;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9899_9962 = state_9882__$1;
(statearr_9899_9962[(1)] = (8));

} else {
var statearr_9900_9963 = state_9882__$1;
(statearr_9900_9963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (14))){
var inst_9862 = (state_9882[(11)]);
var inst_9860 = (state_9882[(8)]);
var inst_9860__$1 = (state_9882[(2)]);
var inst_9861 = (inst_9860__$1 == null);
var inst_9862__$1 = cljs.core.not.call(null,inst_9861);
var state_9882__$1 = (function (){var statearr_9901 = state_9882;
(statearr_9901[(11)] = inst_9862__$1);

(statearr_9901[(8)] = inst_9860__$1);

return statearr_9901;
})();
if(inst_9862__$1){
var statearr_9902_9964 = state_9882__$1;
(statearr_9902_9964[(1)] = (15));

} else {
var statearr_9903_9965 = state_9882__$1;
(statearr_9903_9965[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (16))){
var inst_9862 = (state_9882[(11)]);
var state_9882__$1 = state_9882;
var statearr_9904_9966 = state_9882__$1;
(statearr_9904_9966[(2)] = inst_9862);

(statearr_9904_9966[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (10))){
var inst_9854 = (state_9882[(2)]);
var state_9882__$1 = state_9882;
var statearr_9905_9967 = state_9882__$1;
(statearr_9905_9967[(2)] = inst_9854);

(statearr_9905_9967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (18))){
var inst_9865 = (state_9882[(2)]);
var state_9882__$1 = state_9882;
var statearr_9906_9968 = state_9882__$1;
(statearr_9906_9968[(2)] = inst_9865);

(statearr_9906_9968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (8))){
var inst_9851 = cljs.core.async.close_BANG_.call(null,to);
var state_9882__$1 = state_9882;
var statearr_9907_9969 = state_9882__$1;
(statearr_9907_9969[(2)] = inst_9851);

(statearr_9907_9969[(1)] = (10));


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
});})(c__9376__auto__,jobs,results,process,async))
;
return ((function (switch__9264__auto__,c__9376__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0 = (function (){
var statearr_9911 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9911[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__);

(statearr_9911[(1)] = (1));

return statearr_9911;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1 = (function (state_9882){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_9882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e9912){if((e9912 instanceof Object)){
var ex__9268__auto__ = e9912;
var statearr_9913_9970 = state_9882;
(statearr_9913_9970[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9971 = state_9882;
state_9882 = G__9971;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__ = function(state_9882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1.call(this,state_9882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9265__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto__,jobs,results,process,async))
})();
var state__9378__auto__ = (function (){var statearr_9914 = f__9377__auto__.call(null);
(statearr_9914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_9914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto__,jobs,results,process,async))
);

return c__9376__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args9972 = [];
var len__7197__auto___9975 = arguments.length;
var i__7198__auto___9976 = (0);
while(true){
if((i__7198__auto___9976 < len__7197__auto___9975)){
args9972.push((arguments[i__7198__auto___9976]));

var G__9977 = (i__7198__auto___9976 + (1));
i__7198__auto___9976 = G__9977;
continue;
} else {
}
break;
}

var G__9974 = args9972.length;
switch (G__9974) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9972.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args9979 = [];
var len__7197__auto___9982 = arguments.length;
var i__7198__auto___9983 = (0);
while(true){
if((i__7198__auto___9983 < len__7197__auto___9982)){
args9979.push((arguments[i__7198__auto___9983]));

var G__9984 = (i__7198__auto___9983 + (1));
i__7198__auto___9983 = G__9984;
continue;
} else {
}
break;
}

var G__9981 = args9979.length;
switch (G__9981) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9979.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args9986 = [];
var len__7197__auto___10039 = arguments.length;
var i__7198__auto___10040 = (0);
while(true){
if((i__7198__auto___10040 < len__7197__auto___10039)){
args9986.push((arguments[i__7198__auto___10040]));

var G__10041 = (i__7198__auto___10040 + (1));
i__7198__auto___10040 = G__10041;
continue;
} else {
}
break;
}

var G__9988 = args9986.length;
switch (G__9988) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9986.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9376__auto___10043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___10043,tc,fc){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___10043,tc,fc){
return (function (state_10014){
var state_val_10015 = (state_10014[(1)]);
if((state_val_10015 === (7))){
var inst_10010 = (state_10014[(2)]);
var state_10014__$1 = state_10014;
var statearr_10016_10044 = state_10014__$1;
(statearr_10016_10044[(2)] = inst_10010);

(statearr_10016_10044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10015 === (1))){
var state_10014__$1 = state_10014;
var statearr_10017_10045 = state_10014__$1;
(statearr_10017_10045[(2)] = null);

(statearr_10017_10045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10015 === (4))){
var inst_9991 = (state_10014[(7)]);
var inst_9991__$1 = (state_10014[(2)]);
var inst_9992 = (inst_9991__$1 == null);
var state_10014__$1 = (function (){var statearr_10018 = state_10014;
(statearr_10018[(7)] = inst_9991__$1);

return statearr_10018;
})();
if(cljs.core.truth_(inst_9992)){
var statearr_10019_10046 = state_10014__$1;
(statearr_10019_10046[(1)] = (5));

} else {
var statearr_10020_10047 = state_10014__$1;
(statearr_10020_10047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10015 === (13))){
var state_10014__$1 = state_10014;
var statearr_10021_10048 = state_10014__$1;
(statearr_10021_10048[(2)] = null);

(statearr_10021_10048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10015 === (6))){
var inst_9991 = (state_10014[(7)]);
var inst_9997 = p.call(null,inst_9991);
var state_10014__$1 = state_10014;
if(cljs.core.truth_(inst_9997)){
var statearr_10022_10049 = state_10014__$1;
(statearr_10022_10049[(1)] = (9));

} else {
var statearr_10023_10050 = state_10014__$1;
(statearr_10023_10050[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10015 === (3))){
var inst_10012 = (state_10014[(2)]);
var state_10014__$1 = state_10014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10014__$1,inst_10012);
} else {
if((state_val_10015 === (12))){
var state_10014__$1 = state_10014;
var statearr_10024_10051 = state_10014__$1;
(statearr_10024_10051[(2)] = null);

(statearr_10024_10051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10015 === (2))){
var state_10014__$1 = state_10014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10014__$1,(4),ch);
} else {
if((state_val_10015 === (11))){
var inst_9991 = (state_10014[(7)]);
var inst_10001 = (state_10014[(2)]);
var state_10014__$1 = state_10014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10014__$1,(8),inst_10001,inst_9991);
} else {
if((state_val_10015 === (9))){
var state_10014__$1 = state_10014;
var statearr_10025_10052 = state_10014__$1;
(statearr_10025_10052[(2)] = tc);

(statearr_10025_10052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10015 === (5))){
var inst_9994 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9995 = cljs.core.async.close_BANG_.call(null,fc);
var state_10014__$1 = (function (){var statearr_10026 = state_10014;
(statearr_10026[(8)] = inst_9994);

return statearr_10026;
})();
var statearr_10027_10053 = state_10014__$1;
(statearr_10027_10053[(2)] = inst_9995);

(statearr_10027_10053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10015 === (14))){
var inst_10008 = (state_10014[(2)]);
var state_10014__$1 = state_10014;
var statearr_10028_10054 = state_10014__$1;
(statearr_10028_10054[(2)] = inst_10008);

(statearr_10028_10054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10015 === (10))){
var state_10014__$1 = state_10014;
var statearr_10029_10055 = state_10014__$1;
(statearr_10029_10055[(2)] = fc);

(statearr_10029_10055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10015 === (8))){
var inst_10003 = (state_10014[(2)]);
var state_10014__$1 = state_10014;
if(cljs.core.truth_(inst_10003)){
var statearr_10030_10056 = state_10014__$1;
(statearr_10030_10056[(1)] = (12));

} else {
var statearr_10031_10057 = state_10014__$1;
(statearr_10031_10057[(1)] = (13));

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
});})(c__9376__auto___10043,tc,fc))
;
return ((function (switch__9264__auto__,c__9376__auto___10043,tc,fc){
return (function() {
var cljs$core$async$state_machine__9265__auto__ = null;
var cljs$core$async$state_machine__9265__auto____0 = (function (){
var statearr_10035 = [null,null,null,null,null,null,null,null,null];
(statearr_10035[(0)] = cljs$core$async$state_machine__9265__auto__);

(statearr_10035[(1)] = (1));

return statearr_10035;
});
var cljs$core$async$state_machine__9265__auto____1 = (function (state_10014){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_10014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e10036){if((e10036 instanceof Object)){
var ex__9268__auto__ = e10036;
var statearr_10037_10058 = state_10014;
(statearr_10037_10058[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10059 = state_10014;
state_10014 = G__10059;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$state_machine__9265__auto__ = function(state_10014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9265__auto____1.call(this,state_10014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9265__auto____0;
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9265__auto____1;
return cljs$core$async$state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___10043,tc,fc))
})();
var state__9378__auto__ = (function (){var statearr_10038 = f__9377__auto__.call(null);
(statearr_10038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___10043);

return statearr_10038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___10043,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__9376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto__){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto__){
return (function (state_10106){
var state_val_10107 = (state_10106[(1)]);
if((state_val_10107 === (1))){
var inst_10092 = init;
var state_10106__$1 = (function (){var statearr_10108 = state_10106;
(statearr_10108[(7)] = inst_10092);

return statearr_10108;
})();
var statearr_10109_10124 = state_10106__$1;
(statearr_10109_10124[(2)] = null);

(statearr_10109_10124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10107 === (2))){
var state_10106__$1 = state_10106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10106__$1,(4),ch);
} else {
if((state_val_10107 === (3))){
var inst_10104 = (state_10106[(2)]);
var state_10106__$1 = state_10106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10106__$1,inst_10104);
} else {
if((state_val_10107 === (4))){
var inst_10095 = (state_10106[(8)]);
var inst_10095__$1 = (state_10106[(2)]);
var inst_10096 = (inst_10095__$1 == null);
var state_10106__$1 = (function (){var statearr_10110 = state_10106;
(statearr_10110[(8)] = inst_10095__$1);

return statearr_10110;
})();
if(cljs.core.truth_(inst_10096)){
var statearr_10111_10125 = state_10106__$1;
(statearr_10111_10125[(1)] = (5));

} else {
var statearr_10112_10126 = state_10106__$1;
(statearr_10112_10126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10107 === (5))){
var inst_10092 = (state_10106[(7)]);
var state_10106__$1 = state_10106;
var statearr_10113_10127 = state_10106__$1;
(statearr_10113_10127[(2)] = inst_10092);

(statearr_10113_10127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10107 === (6))){
var inst_10092 = (state_10106[(7)]);
var inst_10095 = (state_10106[(8)]);
var inst_10099 = f.call(null,inst_10092,inst_10095);
var inst_10092__$1 = inst_10099;
var state_10106__$1 = (function (){var statearr_10114 = state_10106;
(statearr_10114[(7)] = inst_10092__$1);

return statearr_10114;
})();
var statearr_10115_10128 = state_10106__$1;
(statearr_10115_10128[(2)] = null);

(statearr_10115_10128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10107 === (7))){
var inst_10102 = (state_10106[(2)]);
var state_10106__$1 = state_10106;
var statearr_10116_10129 = state_10106__$1;
(statearr_10116_10129[(2)] = inst_10102);

(statearr_10116_10129[(1)] = (3));


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
});})(c__9376__auto__))
;
return ((function (switch__9264__auto__,c__9376__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9265__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9265__auto____0 = (function (){
var statearr_10120 = [null,null,null,null,null,null,null,null,null];
(statearr_10120[(0)] = cljs$core$async$reduce_$_state_machine__9265__auto__);

(statearr_10120[(1)] = (1));

return statearr_10120;
});
var cljs$core$async$reduce_$_state_machine__9265__auto____1 = (function (state_10106){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_10106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e10121){if((e10121 instanceof Object)){
var ex__9268__auto__ = e10121;
var statearr_10122_10130 = state_10106;
(statearr_10122_10130[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10131 = state_10106;
state_10106 = G__10131;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9265__auto__ = function(state_10106){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9265__auto____1.call(this,state_10106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9265__auto____0;
cljs$core$async$reduce_$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9265__auto____1;
return cljs$core$async$reduce_$_state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto__))
})();
var state__9378__auto__ = (function (){var statearr_10123 = f__9377__auto__.call(null);
(statearr_10123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_10123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto__))
);

return c__9376__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args10132 = [];
var len__7197__auto___10184 = arguments.length;
var i__7198__auto___10185 = (0);
while(true){
if((i__7198__auto___10185 < len__7197__auto___10184)){
args10132.push((arguments[i__7198__auto___10185]));

var G__10186 = (i__7198__auto___10185 + (1));
i__7198__auto___10185 = G__10186;
continue;
} else {
}
break;
}

var G__10134 = args10132.length;
switch (G__10134) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10132.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto__){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto__){
return (function (state_10159){
var state_val_10160 = (state_10159[(1)]);
if((state_val_10160 === (7))){
var inst_10141 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
var statearr_10161_10188 = state_10159__$1;
(statearr_10161_10188[(2)] = inst_10141);

(statearr_10161_10188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10160 === (1))){
var inst_10135 = cljs.core.seq.call(null,coll);
var inst_10136 = inst_10135;
var state_10159__$1 = (function (){var statearr_10162 = state_10159;
(statearr_10162[(7)] = inst_10136);

return statearr_10162;
})();
var statearr_10163_10189 = state_10159__$1;
(statearr_10163_10189[(2)] = null);

(statearr_10163_10189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10160 === (4))){
var inst_10136 = (state_10159[(7)]);
var inst_10139 = cljs.core.first.call(null,inst_10136);
var state_10159__$1 = state_10159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10159__$1,(7),ch,inst_10139);
} else {
if((state_val_10160 === (13))){
var inst_10153 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
var statearr_10164_10190 = state_10159__$1;
(statearr_10164_10190[(2)] = inst_10153);

(statearr_10164_10190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10160 === (6))){
var inst_10144 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
if(cljs.core.truth_(inst_10144)){
var statearr_10165_10191 = state_10159__$1;
(statearr_10165_10191[(1)] = (8));

} else {
var statearr_10166_10192 = state_10159__$1;
(statearr_10166_10192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10160 === (3))){
var inst_10157 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10159__$1,inst_10157);
} else {
if((state_val_10160 === (12))){
var state_10159__$1 = state_10159;
var statearr_10167_10193 = state_10159__$1;
(statearr_10167_10193[(2)] = null);

(statearr_10167_10193[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10160 === (2))){
var inst_10136 = (state_10159[(7)]);
var state_10159__$1 = state_10159;
if(cljs.core.truth_(inst_10136)){
var statearr_10168_10194 = state_10159__$1;
(statearr_10168_10194[(1)] = (4));

} else {
var statearr_10169_10195 = state_10159__$1;
(statearr_10169_10195[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10160 === (11))){
var inst_10150 = cljs.core.async.close_BANG_.call(null,ch);
var state_10159__$1 = state_10159;
var statearr_10170_10196 = state_10159__$1;
(statearr_10170_10196[(2)] = inst_10150);

(statearr_10170_10196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10160 === (9))){
var state_10159__$1 = state_10159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10171_10197 = state_10159__$1;
(statearr_10171_10197[(1)] = (11));

} else {
var statearr_10172_10198 = state_10159__$1;
(statearr_10172_10198[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10160 === (5))){
var inst_10136 = (state_10159[(7)]);
var state_10159__$1 = state_10159;
var statearr_10173_10199 = state_10159__$1;
(statearr_10173_10199[(2)] = inst_10136);

(statearr_10173_10199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10160 === (10))){
var inst_10155 = (state_10159[(2)]);
var state_10159__$1 = state_10159;
var statearr_10174_10200 = state_10159__$1;
(statearr_10174_10200[(2)] = inst_10155);

(statearr_10174_10200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10160 === (8))){
var inst_10136 = (state_10159[(7)]);
var inst_10146 = cljs.core.next.call(null,inst_10136);
var inst_10136__$1 = inst_10146;
var state_10159__$1 = (function (){var statearr_10175 = state_10159;
(statearr_10175[(7)] = inst_10136__$1);

return statearr_10175;
})();
var statearr_10176_10201 = state_10159__$1;
(statearr_10176_10201[(2)] = null);

(statearr_10176_10201[(1)] = (2));


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
});})(c__9376__auto__))
;
return ((function (switch__9264__auto__,c__9376__auto__){
return (function() {
var cljs$core$async$state_machine__9265__auto__ = null;
var cljs$core$async$state_machine__9265__auto____0 = (function (){
var statearr_10180 = [null,null,null,null,null,null,null,null];
(statearr_10180[(0)] = cljs$core$async$state_machine__9265__auto__);

(statearr_10180[(1)] = (1));

return statearr_10180;
});
var cljs$core$async$state_machine__9265__auto____1 = (function (state_10159){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_10159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e10181){if((e10181 instanceof Object)){
var ex__9268__auto__ = e10181;
var statearr_10182_10202 = state_10159;
(statearr_10182_10202[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10203 = state_10159;
state_10159 = G__10203;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$state_machine__9265__auto__ = function(state_10159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9265__auto____1.call(this,state_10159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9265__auto____0;
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9265__auto____1;
return cljs$core$async$state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto__))
})();
var state__9378__auto__ = (function (){var statearr_10183 = f__9377__auto__.call(null);
(statearr_10183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_10183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto__))
);

return c__9376__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6794__auto__ = (((_ == null))?null:_);
var m__6795__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,_);
} else {
var m__6795__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6794__auto__ = (((m == null))?null:m);
var m__6795__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6795__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6794__auto__ = (((m == null))?null:m);
var m__6795__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,m,ch);
} else {
var m__6795__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6794__auto__ = (((m == null))?null:m);
var m__6795__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,m);
} else {
var m__6795__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10425 = (function (mult,ch,cs,meta10426){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10426 = meta10426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10427,meta10426__$1){
var self__ = this;
var _10427__$1 = this;
return (new cljs.core.async.t_cljs$core$async10425(self__.mult,self__.ch,self__.cs,meta10426__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10427){
var self__ = this;
var _10427__$1 = this;
return self__.meta10426;
});})(cs))
;

cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10425.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10425.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10426","meta10426",-497470261,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10425";

cljs.core.async.t_cljs$core$async10425.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6737__auto__,writer__6738__auto__,opt__6739__auto__){
return cljs.core._write.call(null,writer__6738__auto__,"cljs.core.async/t_cljs$core$async10425");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10425 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10425(mult__$1,ch__$1,cs__$1,meta10426){
return (new cljs.core.async.t_cljs$core$async10425(mult__$1,ch__$1,cs__$1,meta10426));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10425(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9376__auto___10646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___10646,cs,m,dchan,dctr,done){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___10646,cs,m,dchan,dctr,done){
return (function (state_10558){
var state_val_10559 = (state_10558[(1)]);
if((state_val_10559 === (7))){
var inst_10554 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
var statearr_10560_10647 = state_10558__$1;
(statearr_10560_10647[(2)] = inst_10554);

(statearr_10560_10647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (20))){
var inst_10459 = (state_10558[(7)]);
var inst_10469 = cljs.core.first.call(null,inst_10459);
var inst_10470 = cljs.core.nth.call(null,inst_10469,(0),null);
var inst_10471 = cljs.core.nth.call(null,inst_10469,(1),null);
var state_10558__$1 = (function (){var statearr_10561 = state_10558;
(statearr_10561[(8)] = inst_10470);

return statearr_10561;
})();
if(cljs.core.truth_(inst_10471)){
var statearr_10562_10648 = state_10558__$1;
(statearr_10562_10648[(1)] = (22));

} else {
var statearr_10563_10649 = state_10558__$1;
(statearr_10563_10649[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (27))){
var inst_10506 = (state_10558[(9)]);
var inst_10501 = (state_10558[(10)]);
var inst_10499 = (state_10558[(11)]);
var inst_10430 = (state_10558[(12)]);
var inst_10506__$1 = cljs.core._nth.call(null,inst_10499,inst_10501);
var inst_10507 = cljs.core.async.put_BANG_.call(null,inst_10506__$1,inst_10430,done);
var state_10558__$1 = (function (){var statearr_10564 = state_10558;
(statearr_10564[(9)] = inst_10506__$1);

return statearr_10564;
})();
if(cljs.core.truth_(inst_10507)){
var statearr_10565_10650 = state_10558__$1;
(statearr_10565_10650[(1)] = (30));

} else {
var statearr_10566_10651 = state_10558__$1;
(statearr_10566_10651[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (1))){
var state_10558__$1 = state_10558;
var statearr_10567_10652 = state_10558__$1;
(statearr_10567_10652[(2)] = null);

(statearr_10567_10652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (24))){
var inst_10459 = (state_10558[(7)]);
var inst_10476 = (state_10558[(2)]);
var inst_10477 = cljs.core.next.call(null,inst_10459);
var inst_10439 = inst_10477;
var inst_10440 = null;
var inst_10441 = (0);
var inst_10442 = (0);
var state_10558__$1 = (function (){var statearr_10568 = state_10558;
(statearr_10568[(13)] = inst_10476);

(statearr_10568[(14)] = inst_10439);

(statearr_10568[(15)] = inst_10441);

(statearr_10568[(16)] = inst_10440);

(statearr_10568[(17)] = inst_10442);

return statearr_10568;
})();
var statearr_10569_10653 = state_10558__$1;
(statearr_10569_10653[(2)] = null);

(statearr_10569_10653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (39))){
var state_10558__$1 = state_10558;
var statearr_10573_10654 = state_10558__$1;
(statearr_10573_10654[(2)] = null);

(statearr_10573_10654[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (4))){
var inst_10430 = (state_10558[(12)]);
var inst_10430__$1 = (state_10558[(2)]);
var inst_10431 = (inst_10430__$1 == null);
var state_10558__$1 = (function (){var statearr_10574 = state_10558;
(statearr_10574[(12)] = inst_10430__$1);

return statearr_10574;
})();
if(cljs.core.truth_(inst_10431)){
var statearr_10575_10655 = state_10558__$1;
(statearr_10575_10655[(1)] = (5));

} else {
var statearr_10576_10656 = state_10558__$1;
(statearr_10576_10656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (15))){
var inst_10439 = (state_10558[(14)]);
var inst_10441 = (state_10558[(15)]);
var inst_10440 = (state_10558[(16)]);
var inst_10442 = (state_10558[(17)]);
var inst_10455 = (state_10558[(2)]);
var inst_10456 = (inst_10442 + (1));
var tmp10570 = inst_10439;
var tmp10571 = inst_10441;
var tmp10572 = inst_10440;
var inst_10439__$1 = tmp10570;
var inst_10440__$1 = tmp10572;
var inst_10441__$1 = tmp10571;
var inst_10442__$1 = inst_10456;
var state_10558__$1 = (function (){var statearr_10577 = state_10558;
(statearr_10577[(14)] = inst_10439__$1);

(statearr_10577[(15)] = inst_10441__$1);

(statearr_10577[(16)] = inst_10440__$1);

(statearr_10577[(17)] = inst_10442__$1);

(statearr_10577[(18)] = inst_10455);

return statearr_10577;
})();
var statearr_10578_10657 = state_10558__$1;
(statearr_10578_10657[(2)] = null);

(statearr_10578_10657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (21))){
var inst_10480 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
var statearr_10582_10658 = state_10558__$1;
(statearr_10582_10658[(2)] = inst_10480);

(statearr_10582_10658[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (31))){
var inst_10506 = (state_10558[(9)]);
var inst_10510 = done.call(null,null);
var inst_10511 = cljs.core.async.untap_STAR_.call(null,m,inst_10506);
var state_10558__$1 = (function (){var statearr_10583 = state_10558;
(statearr_10583[(19)] = inst_10510);

return statearr_10583;
})();
var statearr_10584_10659 = state_10558__$1;
(statearr_10584_10659[(2)] = inst_10511);

(statearr_10584_10659[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (32))){
var inst_10500 = (state_10558[(20)]);
var inst_10498 = (state_10558[(21)]);
var inst_10501 = (state_10558[(10)]);
var inst_10499 = (state_10558[(11)]);
var inst_10513 = (state_10558[(2)]);
var inst_10514 = (inst_10501 + (1));
var tmp10579 = inst_10500;
var tmp10580 = inst_10498;
var tmp10581 = inst_10499;
var inst_10498__$1 = tmp10580;
var inst_10499__$1 = tmp10581;
var inst_10500__$1 = tmp10579;
var inst_10501__$1 = inst_10514;
var state_10558__$1 = (function (){var statearr_10585 = state_10558;
(statearr_10585[(20)] = inst_10500__$1);

(statearr_10585[(21)] = inst_10498__$1);

(statearr_10585[(22)] = inst_10513);

(statearr_10585[(10)] = inst_10501__$1);

(statearr_10585[(11)] = inst_10499__$1);

return statearr_10585;
})();
var statearr_10586_10660 = state_10558__$1;
(statearr_10586_10660[(2)] = null);

(statearr_10586_10660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (40))){
var inst_10526 = (state_10558[(23)]);
var inst_10530 = done.call(null,null);
var inst_10531 = cljs.core.async.untap_STAR_.call(null,m,inst_10526);
var state_10558__$1 = (function (){var statearr_10587 = state_10558;
(statearr_10587[(24)] = inst_10530);

return statearr_10587;
})();
var statearr_10588_10661 = state_10558__$1;
(statearr_10588_10661[(2)] = inst_10531);

(statearr_10588_10661[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (33))){
var inst_10517 = (state_10558[(25)]);
var inst_10519 = cljs.core.chunked_seq_QMARK_.call(null,inst_10517);
var state_10558__$1 = state_10558;
if(inst_10519){
var statearr_10589_10662 = state_10558__$1;
(statearr_10589_10662[(1)] = (36));

} else {
var statearr_10590_10663 = state_10558__$1;
(statearr_10590_10663[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (13))){
var inst_10449 = (state_10558[(26)]);
var inst_10452 = cljs.core.async.close_BANG_.call(null,inst_10449);
var state_10558__$1 = state_10558;
var statearr_10591_10664 = state_10558__$1;
(statearr_10591_10664[(2)] = inst_10452);

(statearr_10591_10664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (22))){
var inst_10470 = (state_10558[(8)]);
var inst_10473 = cljs.core.async.close_BANG_.call(null,inst_10470);
var state_10558__$1 = state_10558;
var statearr_10592_10665 = state_10558__$1;
(statearr_10592_10665[(2)] = inst_10473);

(statearr_10592_10665[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (36))){
var inst_10517 = (state_10558[(25)]);
var inst_10521 = cljs.core.chunk_first.call(null,inst_10517);
var inst_10522 = cljs.core.chunk_rest.call(null,inst_10517);
var inst_10523 = cljs.core.count.call(null,inst_10521);
var inst_10498 = inst_10522;
var inst_10499 = inst_10521;
var inst_10500 = inst_10523;
var inst_10501 = (0);
var state_10558__$1 = (function (){var statearr_10593 = state_10558;
(statearr_10593[(20)] = inst_10500);

(statearr_10593[(21)] = inst_10498);

(statearr_10593[(10)] = inst_10501);

(statearr_10593[(11)] = inst_10499);

return statearr_10593;
})();
var statearr_10594_10666 = state_10558__$1;
(statearr_10594_10666[(2)] = null);

(statearr_10594_10666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (41))){
var inst_10517 = (state_10558[(25)]);
var inst_10533 = (state_10558[(2)]);
var inst_10534 = cljs.core.next.call(null,inst_10517);
var inst_10498 = inst_10534;
var inst_10499 = null;
var inst_10500 = (0);
var inst_10501 = (0);
var state_10558__$1 = (function (){var statearr_10595 = state_10558;
(statearr_10595[(20)] = inst_10500);

(statearr_10595[(27)] = inst_10533);

(statearr_10595[(21)] = inst_10498);

(statearr_10595[(10)] = inst_10501);

(statearr_10595[(11)] = inst_10499);

return statearr_10595;
})();
var statearr_10596_10667 = state_10558__$1;
(statearr_10596_10667[(2)] = null);

(statearr_10596_10667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (43))){
var state_10558__$1 = state_10558;
var statearr_10597_10668 = state_10558__$1;
(statearr_10597_10668[(2)] = null);

(statearr_10597_10668[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (29))){
var inst_10542 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
var statearr_10598_10669 = state_10558__$1;
(statearr_10598_10669[(2)] = inst_10542);

(statearr_10598_10669[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (44))){
var inst_10551 = (state_10558[(2)]);
var state_10558__$1 = (function (){var statearr_10599 = state_10558;
(statearr_10599[(28)] = inst_10551);

return statearr_10599;
})();
var statearr_10600_10670 = state_10558__$1;
(statearr_10600_10670[(2)] = null);

(statearr_10600_10670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (6))){
var inst_10490 = (state_10558[(29)]);
var inst_10489 = cljs.core.deref.call(null,cs);
var inst_10490__$1 = cljs.core.keys.call(null,inst_10489);
var inst_10491 = cljs.core.count.call(null,inst_10490__$1);
var inst_10492 = cljs.core.reset_BANG_.call(null,dctr,inst_10491);
var inst_10497 = cljs.core.seq.call(null,inst_10490__$1);
var inst_10498 = inst_10497;
var inst_10499 = null;
var inst_10500 = (0);
var inst_10501 = (0);
var state_10558__$1 = (function (){var statearr_10601 = state_10558;
(statearr_10601[(20)] = inst_10500);

(statearr_10601[(21)] = inst_10498);

(statearr_10601[(30)] = inst_10492);

(statearr_10601[(10)] = inst_10501);

(statearr_10601[(11)] = inst_10499);

(statearr_10601[(29)] = inst_10490__$1);

return statearr_10601;
})();
var statearr_10602_10671 = state_10558__$1;
(statearr_10602_10671[(2)] = null);

(statearr_10602_10671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (28))){
var inst_10517 = (state_10558[(25)]);
var inst_10498 = (state_10558[(21)]);
var inst_10517__$1 = cljs.core.seq.call(null,inst_10498);
var state_10558__$1 = (function (){var statearr_10603 = state_10558;
(statearr_10603[(25)] = inst_10517__$1);

return statearr_10603;
})();
if(inst_10517__$1){
var statearr_10604_10672 = state_10558__$1;
(statearr_10604_10672[(1)] = (33));

} else {
var statearr_10605_10673 = state_10558__$1;
(statearr_10605_10673[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (25))){
var inst_10500 = (state_10558[(20)]);
var inst_10501 = (state_10558[(10)]);
var inst_10503 = (inst_10501 < inst_10500);
var inst_10504 = inst_10503;
var state_10558__$1 = state_10558;
if(cljs.core.truth_(inst_10504)){
var statearr_10606_10674 = state_10558__$1;
(statearr_10606_10674[(1)] = (27));

} else {
var statearr_10607_10675 = state_10558__$1;
(statearr_10607_10675[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (34))){
var state_10558__$1 = state_10558;
var statearr_10608_10676 = state_10558__$1;
(statearr_10608_10676[(2)] = null);

(statearr_10608_10676[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (17))){
var state_10558__$1 = state_10558;
var statearr_10609_10677 = state_10558__$1;
(statearr_10609_10677[(2)] = null);

(statearr_10609_10677[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (3))){
var inst_10556 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10558__$1,inst_10556);
} else {
if((state_val_10559 === (12))){
var inst_10485 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
var statearr_10610_10678 = state_10558__$1;
(statearr_10610_10678[(2)] = inst_10485);

(statearr_10610_10678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (2))){
var state_10558__$1 = state_10558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10558__$1,(4),ch);
} else {
if((state_val_10559 === (23))){
var state_10558__$1 = state_10558;
var statearr_10611_10679 = state_10558__$1;
(statearr_10611_10679[(2)] = null);

(statearr_10611_10679[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (35))){
var inst_10540 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
var statearr_10612_10680 = state_10558__$1;
(statearr_10612_10680[(2)] = inst_10540);

(statearr_10612_10680[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (19))){
var inst_10459 = (state_10558[(7)]);
var inst_10463 = cljs.core.chunk_first.call(null,inst_10459);
var inst_10464 = cljs.core.chunk_rest.call(null,inst_10459);
var inst_10465 = cljs.core.count.call(null,inst_10463);
var inst_10439 = inst_10464;
var inst_10440 = inst_10463;
var inst_10441 = inst_10465;
var inst_10442 = (0);
var state_10558__$1 = (function (){var statearr_10613 = state_10558;
(statearr_10613[(14)] = inst_10439);

(statearr_10613[(15)] = inst_10441);

(statearr_10613[(16)] = inst_10440);

(statearr_10613[(17)] = inst_10442);

return statearr_10613;
})();
var statearr_10614_10681 = state_10558__$1;
(statearr_10614_10681[(2)] = null);

(statearr_10614_10681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (11))){
var inst_10439 = (state_10558[(14)]);
var inst_10459 = (state_10558[(7)]);
var inst_10459__$1 = cljs.core.seq.call(null,inst_10439);
var state_10558__$1 = (function (){var statearr_10615 = state_10558;
(statearr_10615[(7)] = inst_10459__$1);

return statearr_10615;
})();
if(inst_10459__$1){
var statearr_10616_10682 = state_10558__$1;
(statearr_10616_10682[(1)] = (16));

} else {
var statearr_10617_10683 = state_10558__$1;
(statearr_10617_10683[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (9))){
var inst_10487 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
var statearr_10618_10684 = state_10558__$1;
(statearr_10618_10684[(2)] = inst_10487);

(statearr_10618_10684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (5))){
var inst_10437 = cljs.core.deref.call(null,cs);
var inst_10438 = cljs.core.seq.call(null,inst_10437);
var inst_10439 = inst_10438;
var inst_10440 = null;
var inst_10441 = (0);
var inst_10442 = (0);
var state_10558__$1 = (function (){var statearr_10619 = state_10558;
(statearr_10619[(14)] = inst_10439);

(statearr_10619[(15)] = inst_10441);

(statearr_10619[(16)] = inst_10440);

(statearr_10619[(17)] = inst_10442);

return statearr_10619;
})();
var statearr_10620_10685 = state_10558__$1;
(statearr_10620_10685[(2)] = null);

(statearr_10620_10685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (14))){
var state_10558__$1 = state_10558;
var statearr_10621_10686 = state_10558__$1;
(statearr_10621_10686[(2)] = null);

(statearr_10621_10686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (45))){
var inst_10548 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
var statearr_10622_10687 = state_10558__$1;
(statearr_10622_10687[(2)] = inst_10548);

(statearr_10622_10687[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (26))){
var inst_10490 = (state_10558[(29)]);
var inst_10544 = (state_10558[(2)]);
var inst_10545 = cljs.core.seq.call(null,inst_10490);
var state_10558__$1 = (function (){var statearr_10623 = state_10558;
(statearr_10623[(31)] = inst_10544);

return statearr_10623;
})();
if(inst_10545){
var statearr_10624_10688 = state_10558__$1;
(statearr_10624_10688[(1)] = (42));

} else {
var statearr_10625_10689 = state_10558__$1;
(statearr_10625_10689[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (16))){
var inst_10459 = (state_10558[(7)]);
var inst_10461 = cljs.core.chunked_seq_QMARK_.call(null,inst_10459);
var state_10558__$1 = state_10558;
if(inst_10461){
var statearr_10626_10690 = state_10558__$1;
(statearr_10626_10690[(1)] = (19));

} else {
var statearr_10627_10691 = state_10558__$1;
(statearr_10627_10691[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (38))){
var inst_10537 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
var statearr_10628_10692 = state_10558__$1;
(statearr_10628_10692[(2)] = inst_10537);

(statearr_10628_10692[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (30))){
var state_10558__$1 = state_10558;
var statearr_10629_10693 = state_10558__$1;
(statearr_10629_10693[(2)] = null);

(statearr_10629_10693[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (10))){
var inst_10440 = (state_10558[(16)]);
var inst_10442 = (state_10558[(17)]);
var inst_10448 = cljs.core._nth.call(null,inst_10440,inst_10442);
var inst_10449 = cljs.core.nth.call(null,inst_10448,(0),null);
var inst_10450 = cljs.core.nth.call(null,inst_10448,(1),null);
var state_10558__$1 = (function (){var statearr_10630 = state_10558;
(statearr_10630[(26)] = inst_10449);

return statearr_10630;
})();
if(cljs.core.truth_(inst_10450)){
var statearr_10631_10694 = state_10558__$1;
(statearr_10631_10694[(1)] = (13));

} else {
var statearr_10632_10695 = state_10558__$1;
(statearr_10632_10695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (18))){
var inst_10483 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
var statearr_10633_10696 = state_10558__$1;
(statearr_10633_10696[(2)] = inst_10483);

(statearr_10633_10696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (42))){
var state_10558__$1 = state_10558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10558__$1,(45),dchan);
} else {
if((state_val_10559 === (37))){
var inst_10526 = (state_10558[(23)]);
var inst_10517 = (state_10558[(25)]);
var inst_10430 = (state_10558[(12)]);
var inst_10526__$1 = cljs.core.first.call(null,inst_10517);
var inst_10527 = cljs.core.async.put_BANG_.call(null,inst_10526__$1,inst_10430,done);
var state_10558__$1 = (function (){var statearr_10634 = state_10558;
(statearr_10634[(23)] = inst_10526__$1);

return statearr_10634;
})();
if(cljs.core.truth_(inst_10527)){
var statearr_10635_10697 = state_10558__$1;
(statearr_10635_10697[(1)] = (39));

} else {
var statearr_10636_10698 = state_10558__$1;
(statearr_10636_10698[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (8))){
var inst_10441 = (state_10558[(15)]);
var inst_10442 = (state_10558[(17)]);
var inst_10444 = (inst_10442 < inst_10441);
var inst_10445 = inst_10444;
var state_10558__$1 = state_10558;
if(cljs.core.truth_(inst_10445)){
var statearr_10637_10699 = state_10558__$1;
(statearr_10637_10699[(1)] = (10));

} else {
var statearr_10638_10700 = state_10558__$1;
(statearr_10638_10700[(1)] = (11));

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
});})(c__9376__auto___10646,cs,m,dchan,dctr,done))
;
return ((function (switch__9264__auto__,c__9376__auto___10646,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9265__auto__ = null;
var cljs$core$async$mult_$_state_machine__9265__auto____0 = (function (){
var statearr_10642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10642[(0)] = cljs$core$async$mult_$_state_machine__9265__auto__);

(statearr_10642[(1)] = (1));

return statearr_10642;
});
var cljs$core$async$mult_$_state_machine__9265__auto____1 = (function (state_10558){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_10558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e10643){if((e10643 instanceof Object)){
var ex__9268__auto__ = e10643;
var statearr_10644_10701 = state_10558;
(statearr_10644_10701[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10702 = state_10558;
state_10558 = G__10702;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9265__auto__ = function(state_10558){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9265__auto____1.call(this,state_10558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9265__auto____0;
cljs$core$async$mult_$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9265__auto____1;
return cljs$core$async$mult_$_state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___10646,cs,m,dchan,dctr,done))
})();
var state__9378__auto__ = (function (){var statearr_10645 = f__9377__auto__.call(null);
(statearr_10645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___10646);

return statearr_10645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___10646,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args10703 = [];
var len__7197__auto___10706 = arguments.length;
var i__7198__auto___10707 = (0);
while(true){
if((i__7198__auto___10707 < len__7197__auto___10706)){
args10703.push((arguments[i__7198__auto___10707]));

var G__10708 = (i__7198__auto___10707 + (1));
i__7198__auto___10707 = G__10708;
continue;
} else {
}
break;
}

var G__10705 = args10703.length;
switch (G__10705) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10703.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6794__auto__ = (((m == null))?null:m);
var m__6795__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,m,ch);
} else {
var m__6795__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6794__auto__ = (((m == null))?null:m);
var m__6795__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,m,ch);
} else {
var m__6795__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6794__auto__ = (((m == null))?null:m);
var m__6795__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,m);
} else {
var m__6795__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6794__auto__ = (((m == null))?null:m);
var m__6795__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,m,state_map);
} else {
var m__6795__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6794__auto__ = (((m == null))?null:m);
var m__6795__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,m,mode);
} else {
var m__6795__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7204__auto__ = [];
var len__7197__auto___10720 = arguments.length;
var i__7198__auto___10721 = (0);
while(true){
if((i__7198__auto___10721 < len__7197__auto___10720)){
args__7204__auto__.push((arguments[i__7198__auto___10721]));

var G__10722 = (i__7198__auto___10721 + (1));
i__7198__auto___10721 = G__10722;
continue;
} else {
}
break;
}

var argseq__7205__auto__ = ((((3) < args__7204__auto__.length))?(new cljs.core.IndexedSeq(args__7204__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7205__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10714){
var map__10715 = p__10714;
var map__10715__$1 = ((((!((map__10715 == null)))?((((map__10715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10715):map__10715);
var opts = map__10715__$1;
var statearr_10717_10723 = state;
(statearr_10717_10723[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__10715,map__10715__$1,opts){
return (function (val){
var statearr_10718_10724 = state;
(statearr_10718_10724[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10715,map__10715__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_10719_10725 = state;
(statearr_10719_10725[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10710){
var G__10711 = cljs.core.first.call(null,seq10710);
var seq10710__$1 = cljs.core.next.call(null,seq10710);
var G__10712 = cljs.core.first.call(null,seq10710__$1);
var seq10710__$2 = cljs.core.next.call(null,seq10710__$1);
var G__10713 = cljs.core.first.call(null,seq10710__$2);
var seq10710__$3 = cljs.core.next.call(null,seq10710__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10711,G__10712,G__10713,seq10710__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
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
if(typeof cljs.core.async.t_cljs$core$async10889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10889 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10890){
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
this.meta10890 = meta10890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10891,meta10890__$1){
var self__ = this;
var _10891__$1 = this;
return (new cljs.core.async.t_cljs$core$async10889(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10890__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10891){
var self__ = this;
var _10891__$1 = this;
return self__.meta10890;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10889.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10889.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10889.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10889.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10889.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10889.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10889.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10889.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async10889.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10890","meta10890",2070014576,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10889";

cljs.core.async.t_cljs$core$async10889.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6737__auto__,writer__6738__auto__,opt__6739__auto__){
return cljs.core._write.call(null,writer__6738__auto__,"cljs.core.async/t_cljs$core$async10889");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10889 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10889(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10890){
return (new cljs.core.async.t_cljs$core$async10889(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10890));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10889(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9376__auto___11052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___11052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___11052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10989){
var state_val_10990 = (state_10989[(1)]);
if((state_val_10990 === (7))){
var inst_10907 = (state_10989[(2)]);
var state_10989__$1 = state_10989;
var statearr_10991_11053 = state_10989__$1;
(statearr_10991_11053[(2)] = inst_10907);

(statearr_10991_11053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (20))){
var inst_10919 = (state_10989[(7)]);
var state_10989__$1 = state_10989;
var statearr_10992_11054 = state_10989__$1;
(statearr_10992_11054[(2)] = inst_10919);

(statearr_10992_11054[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (27))){
var state_10989__$1 = state_10989;
var statearr_10993_11055 = state_10989__$1;
(statearr_10993_11055[(2)] = null);

(statearr_10993_11055[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (1))){
var inst_10895 = (state_10989[(8)]);
var inst_10895__$1 = calc_state.call(null);
var inst_10897 = (inst_10895__$1 == null);
var inst_10898 = cljs.core.not.call(null,inst_10897);
var state_10989__$1 = (function (){var statearr_10994 = state_10989;
(statearr_10994[(8)] = inst_10895__$1);

return statearr_10994;
})();
if(inst_10898){
var statearr_10995_11056 = state_10989__$1;
(statearr_10995_11056[(1)] = (2));

} else {
var statearr_10996_11057 = state_10989__$1;
(statearr_10996_11057[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (24))){
var inst_10949 = (state_10989[(9)]);
var inst_10942 = (state_10989[(10)]);
var inst_10963 = (state_10989[(11)]);
var inst_10963__$1 = inst_10942.call(null,inst_10949);
var state_10989__$1 = (function (){var statearr_10997 = state_10989;
(statearr_10997[(11)] = inst_10963__$1);

return statearr_10997;
})();
if(cljs.core.truth_(inst_10963__$1)){
var statearr_10998_11058 = state_10989__$1;
(statearr_10998_11058[(1)] = (29));

} else {
var statearr_10999_11059 = state_10989__$1;
(statearr_10999_11059[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (4))){
var inst_10910 = (state_10989[(2)]);
var state_10989__$1 = state_10989;
if(cljs.core.truth_(inst_10910)){
var statearr_11000_11060 = state_10989__$1;
(statearr_11000_11060[(1)] = (8));

} else {
var statearr_11001_11061 = state_10989__$1;
(statearr_11001_11061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (15))){
var inst_10936 = (state_10989[(2)]);
var state_10989__$1 = state_10989;
if(cljs.core.truth_(inst_10936)){
var statearr_11002_11062 = state_10989__$1;
(statearr_11002_11062[(1)] = (19));

} else {
var statearr_11003_11063 = state_10989__$1;
(statearr_11003_11063[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (21))){
var inst_10941 = (state_10989[(12)]);
var inst_10941__$1 = (state_10989[(2)]);
var inst_10942 = cljs.core.get.call(null,inst_10941__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10943 = cljs.core.get.call(null,inst_10941__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10944 = cljs.core.get.call(null,inst_10941__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10989__$1 = (function (){var statearr_11004 = state_10989;
(statearr_11004[(10)] = inst_10942);

(statearr_11004[(13)] = inst_10943);

(statearr_11004[(12)] = inst_10941__$1);

return statearr_11004;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10989__$1,(22),inst_10944);
} else {
if((state_val_10990 === (31))){
var inst_10971 = (state_10989[(2)]);
var state_10989__$1 = state_10989;
if(cljs.core.truth_(inst_10971)){
var statearr_11005_11064 = state_10989__$1;
(statearr_11005_11064[(1)] = (32));

} else {
var statearr_11006_11065 = state_10989__$1;
(statearr_11006_11065[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (32))){
var inst_10948 = (state_10989[(14)]);
var state_10989__$1 = state_10989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10989__$1,(35),out,inst_10948);
} else {
if((state_val_10990 === (33))){
var inst_10941 = (state_10989[(12)]);
var inst_10919 = inst_10941;
var state_10989__$1 = (function (){var statearr_11007 = state_10989;
(statearr_11007[(7)] = inst_10919);

return statearr_11007;
})();
var statearr_11008_11066 = state_10989__$1;
(statearr_11008_11066[(2)] = null);

(statearr_11008_11066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (13))){
var inst_10919 = (state_10989[(7)]);
var inst_10926 = inst_10919.cljs$lang$protocol_mask$partition0$;
var inst_10927 = (inst_10926 & (64));
var inst_10928 = inst_10919.cljs$core$ISeq$;
var inst_10929 = (inst_10927) || (inst_10928);
var state_10989__$1 = state_10989;
if(cljs.core.truth_(inst_10929)){
var statearr_11009_11067 = state_10989__$1;
(statearr_11009_11067[(1)] = (16));

} else {
var statearr_11010_11068 = state_10989__$1;
(statearr_11010_11068[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (22))){
var inst_10949 = (state_10989[(9)]);
var inst_10948 = (state_10989[(14)]);
var inst_10947 = (state_10989[(2)]);
var inst_10948__$1 = cljs.core.nth.call(null,inst_10947,(0),null);
var inst_10949__$1 = cljs.core.nth.call(null,inst_10947,(1),null);
var inst_10950 = (inst_10948__$1 == null);
var inst_10951 = cljs.core._EQ_.call(null,inst_10949__$1,change);
var inst_10952 = (inst_10950) || (inst_10951);
var state_10989__$1 = (function (){var statearr_11011 = state_10989;
(statearr_11011[(9)] = inst_10949__$1);

(statearr_11011[(14)] = inst_10948__$1);

return statearr_11011;
})();
if(cljs.core.truth_(inst_10952)){
var statearr_11012_11069 = state_10989__$1;
(statearr_11012_11069[(1)] = (23));

} else {
var statearr_11013_11070 = state_10989__$1;
(statearr_11013_11070[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (36))){
var inst_10941 = (state_10989[(12)]);
var inst_10919 = inst_10941;
var state_10989__$1 = (function (){var statearr_11014 = state_10989;
(statearr_11014[(7)] = inst_10919);

return statearr_11014;
})();
var statearr_11015_11071 = state_10989__$1;
(statearr_11015_11071[(2)] = null);

(statearr_11015_11071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (29))){
var inst_10963 = (state_10989[(11)]);
var state_10989__$1 = state_10989;
var statearr_11016_11072 = state_10989__$1;
(statearr_11016_11072[(2)] = inst_10963);

(statearr_11016_11072[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (6))){
var state_10989__$1 = state_10989;
var statearr_11017_11073 = state_10989__$1;
(statearr_11017_11073[(2)] = false);

(statearr_11017_11073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (28))){
var inst_10959 = (state_10989[(2)]);
var inst_10960 = calc_state.call(null);
var inst_10919 = inst_10960;
var state_10989__$1 = (function (){var statearr_11018 = state_10989;
(statearr_11018[(15)] = inst_10959);

(statearr_11018[(7)] = inst_10919);

return statearr_11018;
})();
var statearr_11019_11074 = state_10989__$1;
(statearr_11019_11074[(2)] = null);

(statearr_11019_11074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (25))){
var inst_10985 = (state_10989[(2)]);
var state_10989__$1 = state_10989;
var statearr_11020_11075 = state_10989__$1;
(statearr_11020_11075[(2)] = inst_10985);

(statearr_11020_11075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (34))){
var inst_10983 = (state_10989[(2)]);
var state_10989__$1 = state_10989;
var statearr_11021_11076 = state_10989__$1;
(statearr_11021_11076[(2)] = inst_10983);

(statearr_11021_11076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (17))){
var state_10989__$1 = state_10989;
var statearr_11022_11077 = state_10989__$1;
(statearr_11022_11077[(2)] = false);

(statearr_11022_11077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (3))){
var state_10989__$1 = state_10989;
var statearr_11023_11078 = state_10989__$1;
(statearr_11023_11078[(2)] = false);

(statearr_11023_11078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (12))){
var inst_10987 = (state_10989[(2)]);
var state_10989__$1 = state_10989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10989__$1,inst_10987);
} else {
if((state_val_10990 === (2))){
var inst_10895 = (state_10989[(8)]);
var inst_10900 = inst_10895.cljs$lang$protocol_mask$partition0$;
var inst_10901 = (inst_10900 & (64));
var inst_10902 = inst_10895.cljs$core$ISeq$;
var inst_10903 = (inst_10901) || (inst_10902);
var state_10989__$1 = state_10989;
if(cljs.core.truth_(inst_10903)){
var statearr_11024_11079 = state_10989__$1;
(statearr_11024_11079[(1)] = (5));

} else {
var statearr_11025_11080 = state_10989__$1;
(statearr_11025_11080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (23))){
var inst_10948 = (state_10989[(14)]);
var inst_10954 = (inst_10948 == null);
var state_10989__$1 = state_10989;
if(cljs.core.truth_(inst_10954)){
var statearr_11026_11081 = state_10989__$1;
(statearr_11026_11081[(1)] = (26));

} else {
var statearr_11027_11082 = state_10989__$1;
(statearr_11027_11082[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (35))){
var inst_10974 = (state_10989[(2)]);
var state_10989__$1 = state_10989;
if(cljs.core.truth_(inst_10974)){
var statearr_11028_11083 = state_10989__$1;
(statearr_11028_11083[(1)] = (36));

} else {
var statearr_11029_11084 = state_10989__$1;
(statearr_11029_11084[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (19))){
var inst_10919 = (state_10989[(7)]);
var inst_10938 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10919);
var state_10989__$1 = state_10989;
var statearr_11030_11085 = state_10989__$1;
(statearr_11030_11085[(2)] = inst_10938);

(statearr_11030_11085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (11))){
var inst_10919 = (state_10989[(7)]);
var inst_10923 = (inst_10919 == null);
var inst_10924 = cljs.core.not.call(null,inst_10923);
var state_10989__$1 = state_10989;
if(inst_10924){
var statearr_11031_11086 = state_10989__$1;
(statearr_11031_11086[(1)] = (13));

} else {
var statearr_11032_11087 = state_10989__$1;
(statearr_11032_11087[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (9))){
var inst_10895 = (state_10989[(8)]);
var state_10989__$1 = state_10989;
var statearr_11033_11088 = state_10989__$1;
(statearr_11033_11088[(2)] = inst_10895);

(statearr_11033_11088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (5))){
var state_10989__$1 = state_10989;
var statearr_11034_11089 = state_10989__$1;
(statearr_11034_11089[(2)] = true);

(statearr_11034_11089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (14))){
var state_10989__$1 = state_10989;
var statearr_11035_11090 = state_10989__$1;
(statearr_11035_11090[(2)] = false);

(statearr_11035_11090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (26))){
var inst_10949 = (state_10989[(9)]);
var inst_10956 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10949);
var state_10989__$1 = state_10989;
var statearr_11036_11091 = state_10989__$1;
(statearr_11036_11091[(2)] = inst_10956);

(statearr_11036_11091[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (16))){
var state_10989__$1 = state_10989;
var statearr_11037_11092 = state_10989__$1;
(statearr_11037_11092[(2)] = true);

(statearr_11037_11092[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (38))){
var inst_10979 = (state_10989[(2)]);
var state_10989__$1 = state_10989;
var statearr_11038_11093 = state_10989__$1;
(statearr_11038_11093[(2)] = inst_10979);

(statearr_11038_11093[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (30))){
var inst_10949 = (state_10989[(9)]);
var inst_10942 = (state_10989[(10)]);
var inst_10943 = (state_10989[(13)]);
var inst_10966 = cljs.core.empty_QMARK_.call(null,inst_10942);
var inst_10967 = inst_10943.call(null,inst_10949);
var inst_10968 = cljs.core.not.call(null,inst_10967);
var inst_10969 = (inst_10966) && (inst_10968);
var state_10989__$1 = state_10989;
var statearr_11039_11094 = state_10989__$1;
(statearr_11039_11094[(2)] = inst_10969);

(statearr_11039_11094[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (10))){
var inst_10895 = (state_10989[(8)]);
var inst_10915 = (state_10989[(2)]);
var inst_10916 = cljs.core.get.call(null,inst_10915,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10917 = cljs.core.get.call(null,inst_10915,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10918 = cljs.core.get.call(null,inst_10915,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10919 = inst_10895;
var state_10989__$1 = (function (){var statearr_11040 = state_10989;
(statearr_11040[(16)] = inst_10917);

(statearr_11040[(17)] = inst_10916);

(statearr_11040[(18)] = inst_10918);

(statearr_11040[(7)] = inst_10919);

return statearr_11040;
})();
var statearr_11041_11095 = state_10989__$1;
(statearr_11041_11095[(2)] = null);

(statearr_11041_11095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (18))){
var inst_10933 = (state_10989[(2)]);
var state_10989__$1 = state_10989;
var statearr_11042_11096 = state_10989__$1;
(statearr_11042_11096[(2)] = inst_10933);

(statearr_11042_11096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (37))){
var state_10989__$1 = state_10989;
var statearr_11043_11097 = state_10989__$1;
(statearr_11043_11097[(2)] = null);

(statearr_11043_11097[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10990 === (8))){
var inst_10895 = (state_10989[(8)]);
var inst_10912 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10895);
var state_10989__$1 = state_10989;
var statearr_11044_11098 = state_10989__$1;
(statearr_11044_11098[(2)] = inst_10912);

(statearr_11044_11098[(1)] = (10));


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
});})(c__9376__auto___11052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9264__auto__,c__9376__auto___11052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9265__auto__ = null;
var cljs$core$async$mix_$_state_machine__9265__auto____0 = (function (){
var statearr_11048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11048[(0)] = cljs$core$async$mix_$_state_machine__9265__auto__);

(statearr_11048[(1)] = (1));

return statearr_11048;
});
var cljs$core$async$mix_$_state_machine__9265__auto____1 = (function (state_10989){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_10989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e11049){if((e11049 instanceof Object)){
var ex__9268__auto__ = e11049;
var statearr_11050_11099 = state_10989;
(statearr_11050_11099[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11100 = state_10989;
state_10989 = G__11100;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9265__auto__ = function(state_10989){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9265__auto____1.call(this,state_10989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9265__auto____0;
cljs$core$async$mix_$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9265__auto____1;
return cljs$core$async$mix_$_state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___11052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9378__auto__ = (function (){var statearr_11051 = f__9377__auto__.call(null);
(statearr_11051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___11052);

return statearr_11051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___11052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6794__auto__ = (((p == null))?null:p);
var m__6795__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6795__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6794__auto__ = (((p == null))?null:p);
var m__6795__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,p,v,ch);
} else {
var m__6795__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11101 = [];
var len__7197__auto___11104 = arguments.length;
var i__7198__auto___11105 = (0);
while(true){
if((i__7198__auto___11105 < len__7197__auto___11104)){
args11101.push((arguments[i__7198__auto___11105]));

var G__11106 = (i__7198__auto___11105 + (1));
i__7198__auto___11105 = G__11106;
continue;
} else {
}
break;
}

var G__11103 = args11101.length;
switch (G__11103) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11101.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6794__auto__ = (((p == null))?null:p);
var m__6795__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,p);
} else {
var m__6795__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6794__auto__ = (((p == null))?null:p);
var m__6795__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,p,v);
} else {
var m__6795__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args11109 = [];
var len__7197__auto___11234 = arguments.length;
var i__7198__auto___11235 = (0);
while(true){
if((i__7198__auto___11235 < len__7197__auto___11234)){
args11109.push((arguments[i__7198__auto___11235]));

var G__11236 = (i__7198__auto___11235 + (1));
i__7198__auto___11235 = G__11236;
continue;
} else {
}
break;
}

var G__11111 = args11109.length;
switch (G__11111) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11109.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6139__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6139__auto__,mults){
return (function (p1__11108_SHARP_){
if(cljs.core.truth_(p1__11108_SHARP_.call(null,topic))){
return p1__11108_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11108_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6139__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11112 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11112 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11113){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11113 = meta11113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11114,meta11113__$1){
var self__ = this;
var _11114__$1 = this;
return (new cljs.core.async.t_cljs$core$async11112(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11113__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11112.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11114){
var self__ = this;
var _11114__$1 = this;
return self__.meta11113;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11112.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11112.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11112.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async11112.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11112.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11112.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11112.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11112.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11113","meta11113",-1562530630,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11112.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11112";

cljs.core.async.t_cljs$core$async11112.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6737__auto__,writer__6738__auto__,opt__6739__auto__){
return cljs.core._write.call(null,writer__6738__auto__,"cljs.core.async/t_cljs$core$async11112");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11112 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11112(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11113){
return (new cljs.core.async.t_cljs$core$async11112(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11113));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11112(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9376__auto___11238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___11238,mults,ensure_mult,p){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___11238,mults,ensure_mult,p){
return (function (state_11186){
var state_val_11187 = (state_11186[(1)]);
if((state_val_11187 === (7))){
var inst_11182 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11188_11239 = state_11186__$1;
(statearr_11188_11239[(2)] = inst_11182);

(statearr_11188_11239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (20))){
var state_11186__$1 = state_11186;
var statearr_11189_11240 = state_11186__$1;
(statearr_11189_11240[(2)] = null);

(statearr_11189_11240[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (1))){
var state_11186__$1 = state_11186;
var statearr_11190_11241 = state_11186__$1;
(statearr_11190_11241[(2)] = null);

(statearr_11190_11241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (24))){
var inst_11165 = (state_11186[(7)]);
var inst_11174 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11165);
var state_11186__$1 = state_11186;
var statearr_11191_11242 = state_11186__$1;
(statearr_11191_11242[(2)] = inst_11174);

(statearr_11191_11242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (4))){
var inst_11117 = (state_11186[(8)]);
var inst_11117__$1 = (state_11186[(2)]);
var inst_11118 = (inst_11117__$1 == null);
var state_11186__$1 = (function (){var statearr_11192 = state_11186;
(statearr_11192[(8)] = inst_11117__$1);

return statearr_11192;
})();
if(cljs.core.truth_(inst_11118)){
var statearr_11193_11243 = state_11186__$1;
(statearr_11193_11243[(1)] = (5));

} else {
var statearr_11194_11244 = state_11186__$1;
(statearr_11194_11244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (15))){
var inst_11159 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11195_11245 = state_11186__$1;
(statearr_11195_11245[(2)] = inst_11159);

(statearr_11195_11245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (21))){
var inst_11179 = (state_11186[(2)]);
var state_11186__$1 = (function (){var statearr_11196 = state_11186;
(statearr_11196[(9)] = inst_11179);

return statearr_11196;
})();
var statearr_11197_11246 = state_11186__$1;
(statearr_11197_11246[(2)] = null);

(statearr_11197_11246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (13))){
var inst_11141 = (state_11186[(10)]);
var inst_11143 = cljs.core.chunked_seq_QMARK_.call(null,inst_11141);
var state_11186__$1 = state_11186;
if(inst_11143){
var statearr_11198_11247 = state_11186__$1;
(statearr_11198_11247[(1)] = (16));

} else {
var statearr_11199_11248 = state_11186__$1;
(statearr_11199_11248[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (22))){
var inst_11171 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
if(cljs.core.truth_(inst_11171)){
var statearr_11200_11249 = state_11186__$1;
(statearr_11200_11249[(1)] = (23));

} else {
var statearr_11201_11250 = state_11186__$1;
(statearr_11201_11250[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (6))){
var inst_11117 = (state_11186[(8)]);
var inst_11165 = (state_11186[(7)]);
var inst_11167 = (state_11186[(11)]);
var inst_11165__$1 = topic_fn.call(null,inst_11117);
var inst_11166 = cljs.core.deref.call(null,mults);
var inst_11167__$1 = cljs.core.get.call(null,inst_11166,inst_11165__$1);
var state_11186__$1 = (function (){var statearr_11202 = state_11186;
(statearr_11202[(7)] = inst_11165__$1);

(statearr_11202[(11)] = inst_11167__$1);

return statearr_11202;
})();
if(cljs.core.truth_(inst_11167__$1)){
var statearr_11203_11251 = state_11186__$1;
(statearr_11203_11251[(1)] = (19));

} else {
var statearr_11204_11252 = state_11186__$1;
(statearr_11204_11252[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (25))){
var inst_11176 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11205_11253 = state_11186__$1;
(statearr_11205_11253[(2)] = inst_11176);

(statearr_11205_11253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (17))){
var inst_11141 = (state_11186[(10)]);
var inst_11150 = cljs.core.first.call(null,inst_11141);
var inst_11151 = cljs.core.async.muxch_STAR_.call(null,inst_11150);
var inst_11152 = cljs.core.async.close_BANG_.call(null,inst_11151);
var inst_11153 = cljs.core.next.call(null,inst_11141);
var inst_11127 = inst_11153;
var inst_11128 = null;
var inst_11129 = (0);
var inst_11130 = (0);
var state_11186__$1 = (function (){var statearr_11206 = state_11186;
(statearr_11206[(12)] = inst_11152);

(statearr_11206[(13)] = inst_11127);

(statearr_11206[(14)] = inst_11129);

(statearr_11206[(15)] = inst_11130);

(statearr_11206[(16)] = inst_11128);

return statearr_11206;
})();
var statearr_11207_11254 = state_11186__$1;
(statearr_11207_11254[(2)] = null);

(statearr_11207_11254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (3))){
var inst_11184 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11186__$1,inst_11184);
} else {
if((state_val_11187 === (12))){
var inst_11161 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11208_11255 = state_11186__$1;
(statearr_11208_11255[(2)] = inst_11161);

(statearr_11208_11255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (2))){
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11186__$1,(4),ch);
} else {
if((state_val_11187 === (23))){
var state_11186__$1 = state_11186;
var statearr_11209_11256 = state_11186__$1;
(statearr_11209_11256[(2)] = null);

(statearr_11209_11256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (19))){
var inst_11117 = (state_11186[(8)]);
var inst_11167 = (state_11186[(11)]);
var inst_11169 = cljs.core.async.muxch_STAR_.call(null,inst_11167);
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11186__$1,(22),inst_11169,inst_11117);
} else {
if((state_val_11187 === (11))){
var inst_11127 = (state_11186[(13)]);
var inst_11141 = (state_11186[(10)]);
var inst_11141__$1 = cljs.core.seq.call(null,inst_11127);
var state_11186__$1 = (function (){var statearr_11210 = state_11186;
(statearr_11210[(10)] = inst_11141__$1);

return statearr_11210;
})();
if(inst_11141__$1){
var statearr_11211_11257 = state_11186__$1;
(statearr_11211_11257[(1)] = (13));

} else {
var statearr_11212_11258 = state_11186__$1;
(statearr_11212_11258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (9))){
var inst_11163 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11213_11259 = state_11186__$1;
(statearr_11213_11259[(2)] = inst_11163);

(statearr_11213_11259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (5))){
var inst_11124 = cljs.core.deref.call(null,mults);
var inst_11125 = cljs.core.vals.call(null,inst_11124);
var inst_11126 = cljs.core.seq.call(null,inst_11125);
var inst_11127 = inst_11126;
var inst_11128 = null;
var inst_11129 = (0);
var inst_11130 = (0);
var state_11186__$1 = (function (){var statearr_11214 = state_11186;
(statearr_11214[(13)] = inst_11127);

(statearr_11214[(14)] = inst_11129);

(statearr_11214[(15)] = inst_11130);

(statearr_11214[(16)] = inst_11128);

return statearr_11214;
})();
var statearr_11215_11260 = state_11186__$1;
(statearr_11215_11260[(2)] = null);

(statearr_11215_11260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (14))){
var state_11186__$1 = state_11186;
var statearr_11219_11261 = state_11186__$1;
(statearr_11219_11261[(2)] = null);

(statearr_11219_11261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (16))){
var inst_11141 = (state_11186[(10)]);
var inst_11145 = cljs.core.chunk_first.call(null,inst_11141);
var inst_11146 = cljs.core.chunk_rest.call(null,inst_11141);
var inst_11147 = cljs.core.count.call(null,inst_11145);
var inst_11127 = inst_11146;
var inst_11128 = inst_11145;
var inst_11129 = inst_11147;
var inst_11130 = (0);
var state_11186__$1 = (function (){var statearr_11220 = state_11186;
(statearr_11220[(13)] = inst_11127);

(statearr_11220[(14)] = inst_11129);

(statearr_11220[(15)] = inst_11130);

(statearr_11220[(16)] = inst_11128);

return statearr_11220;
})();
var statearr_11221_11262 = state_11186__$1;
(statearr_11221_11262[(2)] = null);

(statearr_11221_11262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (10))){
var inst_11127 = (state_11186[(13)]);
var inst_11129 = (state_11186[(14)]);
var inst_11130 = (state_11186[(15)]);
var inst_11128 = (state_11186[(16)]);
var inst_11135 = cljs.core._nth.call(null,inst_11128,inst_11130);
var inst_11136 = cljs.core.async.muxch_STAR_.call(null,inst_11135);
var inst_11137 = cljs.core.async.close_BANG_.call(null,inst_11136);
var inst_11138 = (inst_11130 + (1));
var tmp11216 = inst_11127;
var tmp11217 = inst_11129;
var tmp11218 = inst_11128;
var inst_11127__$1 = tmp11216;
var inst_11128__$1 = tmp11218;
var inst_11129__$1 = tmp11217;
var inst_11130__$1 = inst_11138;
var state_11186__$1 = (function (){var statearr_11222 = state_11186;
(statearr_11222[(17)] = inst_11137);

(statearr_11222[(13)] = inst_11127__$1);

(statearr_11222[(14)] = inst_11129__$1);

(statearr_11222[(15)] = inst_11130__$1);

(statearr_11222[(16)] = inst_11128__$1);

return statearr_11222;
})();
var statearr_11223_11263 = state_11186__$1;
(statearr_11223_11263[(2)] = null);

(statearr_11223_11263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (18))){
var inst_11156 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11224_11264 = state_11186__$1;
(statearr_11224_11264[(2)] = inst_11156);

(statearr_11224_11264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (8))){
var inst_11129 = (state_11186[(14)]);
var inst_11130 = (state_11186[(15)]);
var inst_11132 = (inst_11130 < inst_11129);
var inst_11133 = inst_11132;
var state_11186__$1 = state_11186;
if(cljs.core.truth_(inst_11133)){
var statearr_11225_11265 = state_11186__$1;
(statearr_11225_11265[(1)] = (10));

} else {
var statearr_11226_11266 = state_11186__$1;
(statearr_11226_11266[(1)] = (11));

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
});})(c__9376__auto___11238,mults,ensure_mult,p))
;
return ((function (switch__9264__auto__,c__9376__auto___11238,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9265__auto__ = null;
var cljs$core$async$state_machine__9265__auto____0 = (function (){
var statearr_11230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11230[(0)] = cljs$core$async$state_machine__9265__auto__);

(statearr_11230[(1)] = (1));

return statearr_11230;
});
var cljs$core$async$state_machine__9265__auto____1 = (function (state_11186){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_11186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e11231){if((e11231 instanceof Object)){
var ex__9268__auto__ = e11231;
var statearr_11232_11267 = state_11186;
(statearr_11232_11267[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11268 = state_11186;
state_11186 = G__11268;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$state_machine__9265__auto__ = function(state_11186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9265__auto____1.call(this,state_11186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9265__auto____0;
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9265__auto____1;
return cljs$core$async$state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___11238,mults,ensure_mult,p))
})();
var state__9378__auto__ = (function (){var statearr_11233 = f__9377__auto__.call(null);
(statearr_11233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___11238);

return statearr_11233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___11238,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args11269 = [];
var len__7197__auto___11272 = arguments.length;
var i__7198__auto___11273 = (0);
while(true){
if((i__7198__auto___11273 < len__7197__auto___11272)){
args11269.push((arguments[i__7198__auto___11273]));

var G__11274 = (i__7198__auto___11273 + (1));
i__7198__auto___11273 = G__11274;
continue;
} else {
}
break;
}

var G__11271 = args11269.length;
switch (G__11271) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11269.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args11276 = [];
var len__7197__auto___11279 = arguments.length;
var i__7198__auto___11280 = (0);
while(true){
if((i__7198__auto___11280 < len__7197__auto___11279)){
args11276.push((arguments[i__7198__auto___11280]));

var G__11281 = (i__7198__auto___11280 + (1));
i__7198__auto___11280 = G__11281;
continue;
} else {
}
break;
}

var G__11278 = args11276.length;
switch (G__11278) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11276.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args11283 = [];
var len__7197__auto___11354 = arguments.length;
var i__7198__auto___11355 = (0);
while(true){
if((i__7198__auto___11355 < len__7197__auto___11354)){
args11283.push((arguments[i__7198__auto___11355]));

var G__11356 = (i__7198__auto___11355 + (1));
i__7198__auto___11355 = G__11356;
continue;
} else {
}
break;
}

var G__11285 = args11283.length;
switch (G__11285) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11283.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
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
var c__9376__auto___11358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___11358,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___11358,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11324){
var state_val_11325 = (state_11324[(1)]);
if((state_val_11325 === (7))){
var state_11324__$1 = state_11324;
var statearr_11326_11359 = state_11324__$1;
(statearr_11326_11359[(2)] = null);

(statearr_11326_11359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (1))){
var state_11324__$1 = state_11324;
var statearr_11327_11360 = state_11324__$1;
(statearr_11327_11360[(2)] = null);

(statearr_11327_11360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (4))){
var inst_11288 = (state_11324[(7)]);
var inst_11290 = (inst_11288 < cnt);
var state_11324__$1 = state_11324;
if(cljs.core.truth_(inst_11290)){
var statearr_11328_11361 = state_11324__$1;
(statearr_11328_11361[(1)] = (6));

} else {
var statearr_11329_11362 = state_11324__$1;
(statearr_11329_11362[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (15))){
var inst_11320 = (state_11324[(2)]);
var state_11324__$1 = state_11324;
var statearr_11330_11363 = state_11324__$1;
(statearr_11330_11363[(2)] = inst_11320);

(statearr_11330_11363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (13))){
var inst_11313 = cljs.core.async.close_BANG_.call(null,out);
var state_11324__$1 = state_11324;
var statearr_11331_11364 = state_11324__$1;
(statearr_11331_11364[(2)] = inst_11313);

(statearr_11331_11364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (6))){
var state_11324__$1 = state_11324;
var statearr_11332_11365 = state_11324__$1;
(statearr_11332_11365[(2)] = null);

(statearr_11332_11365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (3))){
var inst_11322 = (state_11324[(2)]);
var state_11324__$1 = state_11324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11324__$1,inst_11322);
} else {
if((state_val_11325 === (12))){
var inst_11310 = (state_11324[(8)]);
var inst_11310__$1 = (state_11324[(2)]);
var inst_11311 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11310__$1);
var state_11324__$1 = (function (){var statearr_11333 = state_11324;
(statearr_11333[(8)] = inst_11310__$1);

return statearr_11333;
})();
if(cljs.core.truth_(inst_11311)){
var statearr_11334_11366 = state_11324__$1;
(statearr_11334_11366[(1)] = (13));

} else {
var statearr_11335_11367 = state_11324__$1;
(statearr_11335_11367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (2))){
var inst_11287 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11288 = (0);
var state_11324__$1 = (function (){var statearr_11336 = state_11324;
(statearr_11336[(9)] = inst_11287);

(statearr_11336[(7)] = inst_11288);

return statearr_11336;
})();
var statearr_11337_11368 = state_11324__$1;
(statearr_11337_11368[(2)] = null);

(statearr_11337_11368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (11))){
var inst_11288 = (state_11324[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11324,(10),Object,null,(9));
var inst_11297 = chs__$1.call(null,inst_11288);
var inst_11298 = done.call(null,inst_11288);
var inst_11299 = cljs.core.async.take_BANG_.call(null,inst_11297,inst_11298);
var state_11324__$1 = state_11324;
var statearr_11338_11369 = state_11324__$1;
(statearr_11338_11369[(2)] = inst_11299);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (9))){
var inst_11288 = (state_11324[(7)]);
var inst_11301 = (state_11324[(2)]);
var inst_11302 = (inst_11288 + (1));
var inst_11288__$1 = inst_11302;
var state_11324__$1 = (function (){var statearr_11339 = state_11324;
(statearr_11339[(10)] = inst_11301);

(statearr_11339[(7)] = inst_11288__$1);

return statearr_11339;
})();
var statearr_11340_11370 = state_11324__$1;
(statearr_11340_11370[(2)] = null);

(statearr_11340_11370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (5))){
var inst_11308 = (state_11324[(2)]);
var state_11324__$1 = (function (){var statearr_11341 = state_11324;
(statearr_11341[(11)] = inst_11308);

return statearr_11341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11324__$1,(12),dchan);
} else {
if((state_val_11325 === (14))){
var inst_11310 = (state_11324[(8)]);
var inst_11315 = cljs.core.apply.call(null,f,inst_11310);
var state_11324__$1 = state_11324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11324__$1,(16),out,inst_11315);
} else {
if((state_val_11325 === (16))){
var inst_11317 = (state_11324[(2)]);
var state_11324__$1 = (function (){var statearr_11342 = state_11324;
(statearr_11342[(12)] = inst_11317);

return statearr_11342;
})();
var statearr_11343_11371 = state_11324__$1;
(statearr_11343_11371[(2)] = null);

(statearr_11343_11371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (10))){
var inst_11292 = (state_11324[(2)]);
var inst_11293 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11324__$1 = (function (){var statearr_11344 = state_11324;
(statearr_11344[(13)] = inst_11292);

return statearr_11344;
})();
var statearr_11345_11372 = state_11324__$1;
(statearr_11345_11372[(2)] = inst_11293);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11325 === (8))){
var inst_11306 = (state_11324[(2)]);
var state_11324__$1 = state_11324;
var statearr_11346_11373 = state_11324__$1;
(statearr_11346_11373[(2)] = inst_11306);

(statearr_11346_11373[(1)] = (5));


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
});})(c__9376__auto___11358,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9264__auto__,c__9376__auto___11358,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9265__auto__ = null;
var cljs$core$async$state_machine__9265__auto____0 = (function (){
var statearr_11350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11350[(0)] = cljs$core$async$state_machine__9265__auto__);

(statearr_11350[(1)] = (1));

return statearr_11350;
});
var cljs$core$async$state_machine__9265__auto____1 = (function (state_11324){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_11324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e11351){if((e11351 instanceof Object)){
var ex__9268__auto__ = e11351;
var statearr_11352_11374 = state_11324;
(statearr_11352_11374[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11375 = state_11324;
state_11324 = G__11375;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$state_machine__9265__auto__ = function(state_11324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9265__auto____1.call(this,state_11324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9265__auto____0;
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9265__auto____1;
return cljs$core$async$state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___11358,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9378__auto__ = (function (){var statearr_11353 = f__9377__auto__.call(null);
(statearr_11353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___11358);

return statearr_11353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___11358,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args11377 = [];
var len__7197__auto___11433 = arguments.length;
var i__7198__auto___11434 = (0);
while(true){
if((i__7198__auto___11434 < len__7197__auto___11433)){
args11377.push((arguments[i__7198__auto___11434]));

var G__11435 = (i__7198__auto___11434 + (1));
i__7198__auto___11434 = G__11435;
continue;
} else {
}
break;
}

var G__11379 = args11377.length;
switch (G__11379) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11377.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9376__auto___11437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___11437,out){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___11437,out){
return (function (state_11409){
var state_val_11410 = (state_11409[(1)]);
if((state_val_11410 === (7))){
var inst_11388 = (state_11409[(7)]);
var inst_11389 = (state_11409[(8)]);
var inst_11388__$1 = (state_11409[(2)]);
var inst_11389__$1 = cljs.core.nth.call(null,inst_11388__$1,(0),null);
var inst_11390 = cljs.core.nth.call(null,inst_11388__$1,(1),null);
var inst_11391 = (inst_11389__$1 == null);
var state_11409__$1 = (function (){var statearr_11411 = state_11409;
(statearr_11411[(9)] = inst_11390);

(statearr_11411[(7)] = inst_11388__$1);

(statearr_11411[(8)] = inst_11389__$1);

return statearr_11411;
})();
if(cljs.core.truth_(inst_11391)){
var statearr_11412_11438 = state_11409__$1;
(statearr_11412_11438[(1)] = (8));

} else {
var statearr_11413_11439 = state_11409__$1;
(statearr_11413_11439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11410 === (1))){
var inst_11380 = cljs.core.vec.call(null,chs);
var inst_11381 = inst_11380;
var state_11409__$1 = (function (){var statearr_11414 = state_11409;
(statearr_11414[(10)] = inst_11381);

return statearr_11414;
})();
var statearr_11415_11440 = state_11409__$1;
(statearr_11415_11440[(2)] = null);

(statearr_11415_11440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11410 === (4))){
var inst_11381 = (state_11409[(10)]);
var state_11409__$1 = state_11409;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11409__$1,(7),inst_11381);
} else {
if((state_val_11410 === (6))){
var inst_11405 = (state_11409[(2)]);
var state_11409__$1 = state_11409;
var statearr_11416_11441 = state_11409__$1;
(statearr_11416_11441[(2)] = inst_11405);

(statearr_11416_11441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11410 === (3))){
var inst_11407 = (state_11409[(2)]);
var state_11409__$1 = state_11409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11409__$1,inst_11407);
} else {
if((state_val_11410 === (2))){
var inst_11381 = (state_11409[(10)]);
var inst_11383 = cljs.core.count.call(null,inst_11381);
var inst_11384 = (inst_11383 > (0));
var state_11409__$1 = state_11409;
if(cljs.core.truth_(inst_11384)){
var statearr_11418_11442 = state_11409__$1;
(statearr_11418_11442[(1)] = (4));

} else {
var statearr_11419_11443 = state_11409__$1;
(statearr_11419_11443[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11410 === (11))){
var inst_11381 = (state_11409[(10)]);
var inst_11398 = (state_11409[(2)]);
var tmp11417 = inst_11381;
var inst_11381__$1 = tmp11417;
var state_11409__$1 = (function (){var statearr_11420 = state_11409;
(statearr_11420[(11)] = inst_11398);

(statearr_11420[(10)] = inst_11381__$1);

return statearr_11420;
})();
var statearr_11421_11444 = state_11409__$1;
(statearr_11421_11444[(2)] = null);

(statearr_11421_11444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11410 === (9))){
var inst_11389 = (state_11409[(8)]);
var state_11409__$1 = state_11409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11409__$1,(11),out,inst_11389);
} else {
if((state_val_11410 === (5))){
var inst_11403 = cljs.core.async.close_BANG_.call(null,out);
var state_11409__$1 = state_11409;
var statearr_11422_11445 = state_11409__$1;
(statearr_11422_11445[(2)] = inst_11403);

(statearr_11422_11445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11410 === (10))){
var inst_11401 = (state_11409[(2)]);
var state_11409__$1 = state_11409;
var statearr_11423_11446 = state_11409__$1;
(statearr_11423_11446[(2)] = inst_11401);

(statearr_11423_11446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11410 === (8))){
var inst_11390 = (state_11409[(9)]);
var inst_11388 = (state_11409[(7)]);
var inst_11389 = (state_11409[(8)]);
var inst_11381 = (state_11409[(10)]);
var inst_11393 = (function (){var cs = inst_11381;
var vec__11386 = inst_11388;
var v = inst_11389;
var c = inst_11390;
return ((function (cs,vec__11386,v,c,inst_11390,inst_11388,inst_11389,inst_11381,state_val_11410,c__9376__auto___11437,out){
return (function (p1__11376_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11376_SHARP_);
});
;})(cs,vec__11386,v,c,inst_11390,inst_11388,inst_11389,inst_11381,state_val_11410,c__9376__auto___11437,out))
})();
var inst_11394 = cljs.core.filterv.call(null,inst_11393,inst_11381);
var inst_11381__$1 = inst_11394;
var state_11409__$1 = (function (){var statearr_11424 = state_11409;
(statearr_11424[(10)] = inst_11381__$1);

return statearr_11424;
})();
var statearr_11425_11447 = state_11409__$1;
(statearr_11425_11447[(2)] = null);

(statearr_11425_11447[(1)] = (2));


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
});})(c__9376__auto___11437,out))
;
return ((function (switch__9264__auto__,c__9376__auto___11437,out){
return (function() {
var cljs$core$async$state_machine__9265__auto__ = null;
var cljs$core$async$state_machine__9265__auto____0 = (function (){
var statearr_11429 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11429[(0)] = cljs$core$async$state_machine__9265__auto__);

(statearr_11429[(1)] = (1));

return statearr_11429;
});
var cljs$core$async$state_machine__9265__auto____1 = (function (state_11409){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_11409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e11430){if((e11430 instanceof Object)){
var ex__9268__auto__ = e11430;
var statearr_11431_11448 = state_11409;
(statearr_11431_11448[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11449 = state_11409;
state_11409 = G__11449;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$state_machine__9265__auto__ = function(state_11409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9265__auto____1.call(this,state_11409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9265__auto____0;
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9265__auto____1;
return cljs$core$async$state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___11437,out))
})();
var state__9378__auto__ = (function (){var statearr_11432 = f__9377__auto__.call(null);
(statearr_11432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___11437);

return statearr_11432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___11437,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args11450 = [];
var len__7197__auto___11499 = arguments.length;
var i__7198__auto___11500 = (0);
while(true){
if((i__7198__auto___11500 < len__7197__auto___11499)){
args11450.push((arguments[i__7198__auto___11500]));

var G__11501 = (i__7198__auto___11500 + (1));
i__7198__auto___11500 = G__11501;
continue;
} else {
}
break;
}

var G__11452 = args11450.length;
switch (G__11452) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11450.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9376__auto___11503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___11503,out){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___11503,out){
return (function (state_11476){
var state_val_11477 = (state_11476[(1)]);
if((state_val_11477 === (7))){
var inst_11458 = (state_11476[(7)]);
var inst_11458__$1 = (state_11476[(2)]);
var inst_11459 = (inst_11458__$1 == null);
var inst_11460 = cljs.core.not.call(null,inst_11459);
var state_11476__$1 = (function (){var statearr_11478 = state_11476;
(statearr_11478[(7)] = inst_11458__$1);

return statearr_11478;
})();
if(inst_11460){
var statearr_11479_11504 = state_11476__$1;
(statearr_11479_11504[(1)] = (8));

} else {
var statearr_11480_11505 = state_11476__$1;
(statearr_11480_11505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11477 === (1))){
var inst_11453 = (0);
var state_11476__$1 = (function (){var statearr_11481 = state_11476;
(statearr_11481[(8)] = inst_11453);

return statearr_11481;
})();
var statearr_11482_11506 = state_11476__$1;
(statearr_11482_11506[(2)] = null);

(statearr_11482_11506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11477 === (4))){
var state_11476__$1 = state_11476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11476__$1,(7),ch);
} else {
if((state_val_11477 === (6))){
var inst_11471 = (state_11476[(2)]);
var state_11476__$1 = state_11476;
var statearr_11483_11507 = state_11476__$1;
(statearr_11483_11507[(2)] = inst_11471);

(statearr_11483_11507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11477 === (3))){
var inst_11473 = (state_11476[(2)]);
var inst_11474 = cljs.core.async.close_BANG_.call(null,out);
var state_11476__$1 = (function (){var statearr_11484 = state_11476;
(statearr_11484[(9)] = inst_11473);

return statearr_11484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11476__$1,inst_11474);
} else {
if((state_val_11477 === (2))){
var inst_11453 = (state_11476[(8)]);
var inst_11455 = (inst_11453 < n);
var state_11476__$1 = state_11476;
if(cljs.core.truth_(inst_11455)){
var statearr_11485_11508 = state_11476__$1;
(statearr_11485_11508[(1)] = (4));

} else {
var statearr_11486_11509 = state_11476__$1;
(statearr_11486_11509[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11477 === (11))){
var inst_11453 = (state_11476[(8)]);
var inst_11463 = (state_11476[(2)]);
var inst_11464 = (inst_11453 + (1));
var inst_11453__$1 = inst_11464;
var state_11476__$1 = (function (){var statearr_11487 = state_11476;
(statearr_11487[(8)] = inst_11453__$1);

(statearr_11487[(10)] = inst_11463);

return statearr_11487;
})();
var statearr_11488_11510 = state_11476__$1;
(statearr_11488_11510[(2)] = null);

(statearr_11488_11510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11477 === (9))){
var state_11476__$1 = state_11476;
var statearr_11489_11511 = state_11476__$1;
(statearr_11489_11511[(2)] = null);

(statearr_11489_11511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11477 === (5))){
var state_11476__$1 = state_11476;
var statearr_11490_11512 = state_11476__$1;
(statearr_11490_11512[(2)] = null);

(statearr_11490_11512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11477 === (10))){
var inst_11468 = (state_11476[(2)]);
var state_11476__$1 = state_11476;
var statearr_11491_11513 = state_11476__$1;
(statearr_11491_11513[(2)] = inst_11468);

(statearr_11491_11513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11477 === (8))){
var inst_11458 = (state_11476[(7)]);
var state_11476__$1 = state_11476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11476__$1,(11),out,inst_11458);
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
});})(c__9376__auto___11503,out))
;
return ((function (switch__9264__auto__,c__9376__auto___11503,out){
return (function() {
var cljs$core$async$state_machine__9265__auto__ = null;
var cljs$core$async$state_machine__9265__auto____0 = (function (){
var statearr_11495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11495[(0)] = cljs$core$async$state_machine__9265__auto__);

(statearr_11495[(1)] = (1));

return statearr_11495;
});
var cljs$core$async$state_machine__9265__auto____1 = (function (state_11476){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_11476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e11496){if((e11496 instanceof Object)){
var ex__9268__auto__ = e11496;
var statearr_11497_11514 = state_11476;
(statearr_11497_11514[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11515 = state_11476;
state_11476 = G__11515;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$state_machine__9265__auto__ = function(state_11476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9265__auto____1.call(this,state_11476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9265__auto____0;
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9265__auto____1;
return cljs$core$async$state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___11503,out))
})();
var state__9378__auto__ = (function (){var statearr_11498 = f__9377__auto__.call(null);
(statearr_11498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___11503);

return statearr_11498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___11503,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11523 = (function (map_LT_,f,ch,meta11524){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11524 = meta11524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11525,meta11524__$1){
var self__ = this;
var _11525__$1 = this;
return (new cljs.core.async.t_cljs$core$async11523(self__.map_LT_,self__.f,self__.ch,meta11524__$1));
});

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11525){
var self__ = this;
var _11525__$1 = this;
return self__.meta11524;
});

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11526 = (function (map_LT_,f,ch,meta11524,_,fn1,meta11527){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11524 = meta11524;
this._ = _;
this.fn1 = fn1;
this.meta11527 = meta11527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11528,meta11527__$1){
var self__ = this;
var _11528__$1 = this;
return (new cljs.core.async.t_cljs$core$async11526(self__.map_LT_,self__.f,self__.ch,self__.meta11524,self__._,self__.fn1,meta11527__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11528){
var self__ = this;
var _11528__$1 = this;
return self__.meta11527;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11516_SHARP_){
return f1.call(null,(((p1__11516_SHARP_ == null))?null:self__.f.call(null,p1__11516_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11526.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11524","meta11524",1149239094,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11523","cljs.core.async/t_cljs$core$async11523",-245365199,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11527","meta11527",-315535505,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11526";

cljs.core.async.t_cljs$core$async11526.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6737__auto__,writer__6738__auto__,opt__6739__auto__){
return cljs.core._write.call(null,writer__6738__auto__,"cljs.core.async/t_cljs$core$async11526");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11526 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11526(map_LT___$1,f__$1,ch__$1,meta11524__$1,___$2,fn1__$1,meta11527){
return (new cljs.core.async.t_cljs$core$async11526(map_LT___$1,f__$1,ch__$1,meta11524__$1,___$2,fn1__$1,meta11527));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11526(self__.map_LT_,self__.f,self__.ch,self__.meta11524,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6127__auto__ = ret;
if(cljs.core.truth_(and__6127__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6127__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11524","meta11524",1149239094,null)], null);
});

cljs.core.async.t_cljs$core$async11523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11523";

cljs.core.async.t_cljs$core$async11523.cljs$lang$ctorPrWriter = (function (this__6737__auto__,writer__6738__auto__,opt__6739__auto__){
return cljs.core._write.call(null,writer__6738__auto__,"cljs.core.async/t_cljs$core$async11523");
});

cljs.core.async.__GT_t_cljs$core$async11523 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11523(map_LT___$1,f__$1,ch__$1,meta11524){
return (new cljs.core.async.t_cljs$core$async11523(map_LT___$1,f__$1,ch__$1,meta11524));
});

}

return (new cljs.core.async.t_cljs$core$async11523(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11532 = (function (map_GT_,f,ch,meta11533){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11533 = meta11533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11534,meta11533__$1){
var self__ = this;
var _11534__$1 = this;
return (new cljs.core.async.t_cljs$core$async11532(self__.map_GT_,self__.f,self__.ch,meta11533__$1));
});

cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11534){
var self__ = this;
var _11534__$1 = this;
return self__.meta11533;
});

cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11533","meta11533",-1975641634,null)], null);
});

cljs.core.async.t_cljs$core$async11532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11532";

cljs.core.async.t_cljs$core$async11532.cljs$lang$ctorPrWriter = (function (this__6737__auto__,writer__6738__auto__,opt__6739__auto__){
return cljs.core._write.call(null,writer__6738__auto__,"cljs.core.async/t_cljs$core$async11532");
});

cljs.core.async.__GT_t_cljs$core$async11532 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11532(map_GT___$1,f__$1,ch__$1,meta11533){
return (new cljs.core.async.t_cljs$core$async11532(map_GT___$1,f__$1,ch__$1,meta11533));
});

}

return (new cljs.core.async.t_cljs$core$async11532(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11538 = (function (filter_GT_,p,ch,meta11539){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11539 = meta11539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11540,meta11539__$1){
var self__ = this;
var _11540__$1 = this;
return (new cljs.core.async.t_cljs$core$async11538(self__.filter_GT_,self__.p,self__.ch,meta11539__$1));
});

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11540){
var self__ = this;
var _11540__$1 = this;
return self__.meta11539;
});

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11539","meta11539",461059651,null)], null);
});

cljs.core.async.t_cljs$core$async11538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11538";

cljs.core.async.t_cljs$core$async11538.cljs$lang$ctorPrWriter = (function (this__6737__auto__,writer__6738__auto__,opt__6739__auto__){
return cljs.core._write.call(null,writer__6738__auto__,"cljs.core.async/t_cljs$core$async11538");
});

cljs.core.async.__GT_t_cljs$core$async11538 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11538(filter_GT___$1,p__$1,ch__$1,meta11539){
return (new cljs.core.async.t_cljs$core$async11538(filter_GT___$1,p__$1,ch__$1,meta11539));
});

}

return (new cljs.core.async.t_cljs$core$async11538(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args11541 = [];
var len__7197__auto___11585 = arguments.length;
var i__7198__auto___11586 = (0);
while(true){
if((i__7198__auto___11586 < len__7197__auto___11585)){
args11541.push((arguments[i__7198__auto___11586]));

var G__11587 = (i__7198__auto___11586 + (1));
i__7198__auto___11586 = G__11587;
continue;
} else {
}
break;
}

var G__11543 = args11541.length;
switch (G__11543) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11541.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9376__auto___11589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___11589,out){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___11589,out){
return (function (state_11564){
var state_val_11565 = (state_11564[(1)]);
if((state_val_11565 === (7))){
var inst_11560 = (state_11564[(2)]);
var state_11564__$1 = state_11564;
var statearr_11566_11590 = state_11564__$1;
(statearr_11566_11590[(2)] = inst_11560);

(statearr_11566_11590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11565 === (1))){
var state_11564__$1 = state_11564;
var statearr_11567_11591 = state_11564__$1;
(statearr_11567_11591[(2)] = null);

(statearr_11567_11591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11565 === (4))){
var inst_11546 = (state_11564[(7)]);
var inst_11546__$1 = (state_11564[(2)]);
var inst_11547 = (inst_11546__$1 == null);
var state_11564__$1 = (function (){var statearr_11568 = state_11564;
(statearr_11568[(7)] = inst_11546__$1);

return statearr_11568;
})();
if(cljs.core.truth_(inst_11547)){
var statearr_11569_11592 = state_11564__$1;
(statearr_11569_11592[(1)] = (5));

} else {
var statearr_11570_11593 = state_11564__$1;
(statearr_11570_11593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11565 === (6))){
var inst_11546 = (state_11564[(7)]);
var inst_11551 = p.call(null,inst_11546);
var state_11564__$1 = state_11564;
if(cljs.core.truth_(inst_11551)){
var statearr_11571_11594 = state_11564__$1;
(statearr_11571_11594[(1)] = (8));

} else {
var statearr_11572_11595 = state_11564__$1;
(statearr_11572_11595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11565 === (3))){
var inst_11562 = (state_11564[(2)]);
var state_11564__$1 = state_11564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11564__$1,inst_11562);
} else {
if((state_val_11565 === (2))){
var state_11564__$1 = state_11564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11564__$1,(4),ch);
} else {
if((state_val_11565 === (11))){
var inst_11554 = (state_11564[(2)]);
var state_11564__$1 = state_11564;
var statearr_11573_11596 = state_11564__$1;
(statearr_11573_11596[(2)] = inst_11554);

(statearr_11573_11596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11565 === (9))){
var state_11564__$1 = state_11564;
var statearr_11574_11597 = state_11564__$1;
(statearr_11574_11597[(2)] = null);

(statearr_11574_11597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11565 === (5))){
var inst_11549 = cljs.core.async.close_BANG_.call(null,out);
var state_11564__$1 = state_11564;
var statearr_11575_11598 = state_11564__$1;
(statearr_11575_11598[(2)] = inst_11549);

(statearr_11575_11598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11565 === (10))){
var inst_11557 = (state_11564[(2)]);
var state_11564__$1 = (function (){var statearr_11576 = state_11564;
(statearr_11576[(8)] = inst_11557);

return statearr_11576;
})();
var statearr_11577_11599 = state_11564__$1;
(statearr_11577_11599[(2)] = null);

(statearr_11577_11599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11565 === (8))){
var inst_11546 = (state_11564[(7)]);
var state_11564__$1 = state_11564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11564__$1,(11),out,inst_11546);
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
});})(c__9376__auto___11589,out))
;
return ((function (switch__9264__auto__,c__9376__auto___11589,out){
return (function() {
var cljs$core$async$state_machine__9265__auto__ = null;
var cljs$core$async$state_machine__9265__auto____0 = (function (){
var statearr_11581 = [null,null,null,null,null,null,null,null,null];
(statearr_11581[(0)] = cljs$core$async$state_machine__9265__auto__);

(statearr_11581[(1)] = (1));

return statearr_11581;
});
var cljs$core$async$state_machine__9265__auto____1 = (function (state_11564){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_11564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e11582){if((e11582 instanceof Object)){
var ex__9268__auto__ = e11582;
var statearr_11583_11600 = state_11564;
(statearr_11583_11600[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11601 = state_11564;
state_11564 = G__11601;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$state_machine__9265__auto__ = function(state_11564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9265__auto____1.call(this,state_11564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9265__auto____0;
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9265__auto____1;
return cljs$core$async$state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___11589,out))
})();
var state__9378__auto__ = (function (){var statearr_11584 = f__9377__auto__.call(null);
(statearr_11584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___11589);

return statearr_11584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___11589,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11602 = [];
var len__7197__auto___11605 = arguments.length;
var i__7198__auto___11606 = (0);
while(true){
if((i__7198__auto___11606 < len__7197__auto___11605)){
args11602.push((arguments[i__7198__auto___11606]));

var G__11607 = (i__7198__auto___11606 + (1));
i__7198__auto___11606 = G__11607;
continue;
} else {
}
break;
}

var G__11604 = args11602.length;
switch (G__11604) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11602.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto__){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto__){
return (function (state_11774){
var state_val_11775 = (state_11774[(1)]);
if((state_val_11775 === (7))){
var inst_11770 = (state_11774[(2)]);
var state_11774__$1 = state_11774;
var statearr_11776_11817 = state_11774__$1;
(statearr_11776_11817[(2)] = inst_11770);

(statearr_11776_11817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (20))){
var inst_11740 = (state_11774[(7)]);
var inst_11751 = (state_11774[(2)]);
var inst_11752 = cljs.core.next.call(null,inst_11740);
var inst_11726 = inst_11752;
var inst_11727 = null;
var inst_11728 = (0);
var inst_11729 = (0);
var state_11774__$1 = (function (){var statearr_11777 = state_11774;
(statearr_11777[(8)] = inst_11729);

(statearr_11777[(9)] = inst_11728);

(statearr_11777[(10)] = inst_11751);

(statearr_11777[(11)] = inst_11726);

(statearr_11777[(12)] = inst_11727);

return statearr_11777;
})();
var statearr_11778_11818 = state_11774__$1;
(statearr_11778_11818[(2)] = null);

(statearr_11778_11818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (1))){
var state_11774__$1 = state_11774;
var statearr_11779_11819 = state_11774__$1;
(statearr_11779_11819[(2)] = null);

(statearr_11779_11819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (4))){
var inst_11715 = (state_11774[(13)]);
var inst_11715__$1 = (state_11774[(2)]);
var inst_11716 = (inst_11715__$1 == null);
var state_11774__$1 = (function (){var statearr_11780 = state_11774;
(statearr_11780[(13)] = inst_11715__$1);

return statearr_11780;
})();
if(cljs.core.truth_(inst_11716)){
var statearr_11781_11820 = state_11774__$1;
(statearr_11781_11820[(1)] = (5));

} else {
var statearr_11782_11821 = state_11774__$1;
(statearr_11782_11821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (15))){
var state_11774__$1 = state_11774;
var statearr_11786_11822 = state_11774__$1;
(statearr_11786_11822[(2)] = null);

(statearr_11786_11822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (21))){
var state_11774__$1 = state_11774;
var statearr_11787_11823 = state_11774__$1;
(statearr_11787_11823[(2)] = null);

(statearr_11787_11823[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (13))){
var inst_11729 = (state_11774[(8)]);
var inst_11728 = (state_11774[(9)]);
var inst_11726 = (state_11774[(11)]);
var inst_11727 = (state_11774[(12)]);
var inst_11736 = (state_11774[(2)]);
var inst_11737 = (inst_11729 + (1));
var tmp11783 = inst_11728;
var tmp11784 = inst_11726;
var tmp11785 = inst_11727;
var inst_11726__$1 = tmp11784;
var inst_11727__$1 = tmp11785;
var inst_11728__$1 = tmp11783;
var inst_11729__$1 = inst_11737;
var state_11774__$1 = (function (){var statearr_11788 = state_11774;
(statearr_11788[(14)] = inst_11736);

(statearr_11788[(8)] = inst_11729__$1);

(statearr_11788[(9)] = inst_11728__$1);

(statearr_11788[(11)] = inst_11726__$1);

(statearr_11788[(12)] = inst_11727__$1);

return statearr_11788;
})();
var statearr_11789_11824 = state_11774__$1;
(statearr_11789_11824[(2)] = null);

(statearr_11789_11824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (22))){
var state_11774__$1 = state_11774;
var statearr_11790_11825 = state_11774__$1;
(statearr_11790_11825[(2)] = null);

(statearr_11790_11825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (6))){
var inst_11715 = (state_11774[(13)]);
var inst_11724 = f.call(null,inst_11715);
var inst_11725 = cljs.core.seq.call(null,inst_11724);
var inst_11726 = inst_11725;
var inst_11727 = null;
var inst_11728 = (0);
var inst_11729 = (0);
var state_11774__$1 = (function (){var statearr_11791 = state_11774;
(statearr_11791[(8)] = inst_11729);

(statearr_11791[(9)] = inst_11728);

(statearr_11791[(11)] = inst_11726);

(statearr_11791[(12)] = inst_11727);

return statearr_11791;
})();
var statearr_11792_11826 = state_11774__$1;
(statearr_11792_11826[(2)] = null);

(statearr_11792_11826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (17))){
var inst_11740 = (state_11774[(7)]);
var inst_11744 = cljs.core.chunk_first.call(null,inst_11740);
var inst_11745 = cljs.core.chunk_rest.call(null,inst_11740);
var inst_11746 = cljs.core.count.call(null,inst_11744);
var inst_11726 = inst_11745;
var inst_11727 = inst_11744;
var inst_11728 = inst_11746;
var inst_11729 = (0);
var state_11774__$1 = (function (){var statearr_11793 = state_11774;
(statearr_11793[(8)] = inst_11729);

(statearr_11793[(9)] = inst_11728);

(statearr_11793[(11)] = inst_11726);

(statearr_11793[(12)] = inst_11727);

return statearr_11793;
})();
var statearr_11794_11827 = state_11774__$1;
(statearr_11794_11827[(2)] = null);

(statearr_11794_11827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (3))){
var inst_11772 = (state_11774[(2)]);
var state_11774__$1 = state_11774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11774__$1,inst_11772);
} else {
if((state_val_11775 === (12))){
var inst_11760 = (state_11774[(2)]);
var state_11774__$1 = state_11774;
var statearr_11795_11828 = state_11774__$1;
(statearr_11795_11828[(2)] = inst_11760);

(statearr_11795_11828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (2))){
var state_11774__$1 = state_11774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11774__$1,(4),in$);
} else {
if((state_val_11775 === (23))){
var inst_11768 = (state_11774[(2)]);
var state_11774__$1 = state_11774;
var statearr_11796_11829 = state_11774__$1;
(statearr_11796_11829[(2)] = inst_11768);

(statearr_11796_11829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (19))){
var inst_11755 = (state_11774[(2)]);
var state_11774__$1 = state_11774;
var statearr_11797_11830 = state_11774__$1;
(statearr_11797_11830[(2)] = inst_11755);

(statearr_11797_11830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (11))){
var inst_11740 = (state_11774[(7)]);
var inst_11726 = (state_11774[(11)]);
var inst_11740__$1 = cljs.core.seq.call(null,inst_11726);
var state_11774__$1 = (function (){var statearr_11798 = state_11774;
(statearr_11798[(7)] = inst_11740__$1);

return statearr_11798;
})();
if(inst_11740__$1){
var statearr_11799_11831 = state_11774__$1;
(statearr_11799_11831[(1)] = (14));

} else {
var statearr_11800_11832 = state_11774__$1;
(statearr_11800_11832[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (9))){
var inst_11762 = (state_11774[(2)]);
var inst_11763 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11774__$1 = (function (){var statearr_11801 = state_11774;
(statearr_11801[(15)] = inst_11762);

return statearr_11801;
})();
if(cljs.core.truth_(inst_11763)){
var statearr_11802_11833 = state_11774__$1;
(statearr_11802_11833[(1)] = (21));

} else {
var statearr_11803_11834 = state_11774__$1;
(statearr_11803_11834[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (5))){
var inst_11718 = cljs.core.async.close_BANG_.call(null,out);
var state_11774__$1 = state_11774;
var statearr_11804_11835 = state_11774__$1;
(statearr_11804_11835[(2)] = inst_11718);

(statearr_11804_11835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (14))){
var inst_11740 = (state_11774[(7)]);
var inst_11742 = cljs.core.chunked_seq_QMARK_.call(null,inst_11740);
var state_11774__$1 = state_11774;
if(inst_11742){
var statearr_11805_11836 = state_11774__$1;
(statearr_11805_11836[(1)] = (17));

} else {
var statearr_11806_11837 = state_11774__$1;
(statearr_11806_11837[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (16))){
var inst_11758 = (state_11774[(2)]);
var state_11774__$1 = state_11774;
var statearr_11807_11838 = state_11774__$1;
(statearr_11807_11838[(2)] = inst_11758);

(statearr_11807_11838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (10))){
var inst_11729 = (state_11774[(8)]);
var inst_11727 = (state_11774[(12)]);
var inst_11734 = cljs.core._nth.call(null,inst_11727,inst_11729);
var state_11774__$1 = state_11774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11774__$1,(13),out,inst_11734);
} else {
if((state_val_11775 === (18))){
var inst_11740 = (state_11774[(7)]);
var inst_11749 = cljs.core.first.call(null,inst_11740);
var state_11774__$1 = state_11774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11774__$1,(20),out,inst_11749);
} else {
if((state_val_11775 === (8))){
var inst_11729 = (state_11774[(8)]);
var inst_11728 = (state_11774[(9)]);
var inst_11731 = (inst_11729 < inst_11728);
var inst_11732 = inst_11731;
var state_11774__$1 = state_11774;
if(cljs.core.truth_(inst_11732)){
var statearr_11808_11839 = state_11774__$1;
(statearr_11808_11839[(1)] = (10));

} else {
var statearr_11809_11840 = state_11774__$1;
(statearr_11809_11840[(1)] = (11));

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
});})(c__9376__auto__))
;
return ((function (switch__9264__auto__,c__9376__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9265__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9265__auto____0 = (function (){
var statearr_11813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11813[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9265__auto__);

(statearr_11813[(1)] = (1));

return statearr_11813;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9265__auto____1 = (function (state_11774){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_11774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e11814){if((e11814 instanceof Object)){
var ex__9268__auto__ = e11814;
var statearr_11815_11841 = state_11774;
(statearr_11815_11841[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11842 = state_11774;
state_11774 = G__11842;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9265__auto__ = function(state_11774){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9265__auto____1.call(this,state_11774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9265__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9265__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto__))
})();
var state__9378__auto__ = (function (){var statearr_11816 = f__9377__auto__.call(null);
(statearr_11816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto__))
);

return c__9376__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11843 = [];
var len__7197__auto___11846 = arguments.length;
var i__7198__auto___11847 = (0);
while(true){
if((i__7198__auto___11847 < len__7197__auto___11846)){
args11843.push((arguments[i__7198__auto___11847]));

var G__11848 = (i__7198__auto___11847 + (1));
i__7198__auto___11847 = G__11848;
continue;
} else {
}
break;
}

var G__11845 = args11843.length;
switch (G__11845) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11843.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11850 = [];
var len__7197__auto___11853 = arguments.length;
var i__7198__auto___11854 = (0);
while(true){
if((i__7198__auto___11854 < len__7197__auto___11853)){
args11850.push((arguments[i__7198__auto___11854]));

var G__11855 = (i__7198__auto___11854 + (1));
i__7198__auto___11854 = G__11855;
continue;
} else {
}
break;
}

var G__11852 = args11850.length;
switch (G__11852) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11850.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11857 = [];
var len__7197__auto___11908 = arguments.length;
var i__7198__auto___11909 = (0);
while(true){
if((i__7198__auto___11909 < len__7197__auto___11908)){
args11857.push((arguments[i__7198__auto___11909]));

var G__11910 = (i__7198__auto___11909 + (1));
i__7198__auto___11909 = G__11910;
continue;
} else {
}
break;
}

var G__11859 = args11857.length;
switch (G__11859) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11857.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9376__auto___11912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___11912,out){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___11912,out){
return (function (state_11883){
var state_val_11884 = (state_11883[(1)]);
if((state_val_11884 === (7))){
var inst_11878 = (state_11883[(2)]);
var state_11883__$1 = state_11883;
var statearr_11885_11913 = state_11883__$1;
(statearr_11885_11913[(2)] = inst_11878);

(statearr_11885_11913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (1))){
var inst_11860 = null;
var state_11883__$1 = (function (){var statearr_11886 = state_11883;
(statearr_11886[(7)] = inst_11860);

return statearr_11886;
})();
var statearr_11887_11914 = state_11883__$1;
(statearr_11887_11914[(2)] = null);

(statearr_11887_11914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (4))){
var inst_11863 = (state_11883[(8)]);
var inst_11863__$1 = (state_11883[(2)]);
var inst_11864 = (inst_11863__$1 == null);
var inst_11865 = cljs.core.not.call(null,inst_11864);
var state_11883__$1 = (function (){var statearr_11888 = state_11883;
(statearr_11888[(8)] = inst_11863__$1);

return statearr_11888;
})();
if(inst_11865){
var statearr_11889_11915 = state_11883__$1;
(statearr_11889_11915[(1)] = (5));

} else {
var statearr_11890_11916 = state_11883__$1;
(statearr_11890_11916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (6))){
var state_11883__$1 = state_11883;
var statearr_11891_11917 = state_11883__$1;
(statearr_11891_11917[(2)] = null);

(statearr_11891_11917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (3))){
var inst_11880 = (state_11883[(2)]);
var inst_11881 = cljs.core.async.close_BANG_.call(null,out);
var state_11883__$1 = (function (){var statearr_11892 = state_11883;
(statearr_11892[(9)] = inst_11880);

return statearr_11892;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11883__$1,inst_11881);
} else {
if((state_val_11884 === (2))){
var state_11883__$1 = state_11883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11883__$1,(4),ch);
} else {
if((state_val_11884 === (11))){
var inst_11863 = (state_11883[(8)]);
var inst_11872 = (state_11883[(2)]);
var inst_11860 = inst_11863;
var state_11883__$1 = (function (){var statearr_11893 = state_11883;
(statearr_11893[(7)] = inst_11860);

(statearr_11893[(10)] = inst_11872);

return statearr_11893;
})();
var statearr_11894_11918 = state_11883__$1;
(statearr_11894_11918[(2)] = null);

(statearr_11894_11918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (9))){
var inst_11863 = (state_11883[(8)]);
var state_11883__$1 = state_11883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11883__$1,(11),out,inst_11863);
} else {
if((state_val_11884 === (5))){
var inst_11860 = (state_11883[(7)]);
var inst_11863 = (state_11883[(8)]);
var inst_11867 = cljs.core._EQ_.call(null,inst_11863,inst_11860);
var state_11883__$1 = state_11883;
if(inst_11867){
var statearr_11896_11919 = state_11883__$1;
(statearr_11896_11919[(1)] = (8));

} else {
var statearr_11897_11920 = state_11883__$1;
(statearr_11897_11920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (10))){
var inst_11875 = (state_11883[(2)]);
var state_11883__$1 = state_11883;
var statearr_11898_11921 = state_11883__$1;
(statearr_11898_11921[(2)] = inst_11875);

(statearr_11898_11921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11884 === (8))){
var inst_11860 = (state_11883[(7)]);
var tmp11895 = inst_11860;
var inst_11860__$1 = tmp11895;
var state_11883__$1 = (function (){var statearr_11899 = state_11883;
(statearr_11899[(7)] = inst_11860__$1);

return statearr_11899;
})();
var statearr_11900_11922 = state_11883__$1;
(statearr_11900_11922[(2)] = null);

(statearr_11900_11922[(1)] = (2));


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
});})(c__9376__auto___11912,out))
;
return ((function (switch__9264__auto__,c__9376__auto___11912,out){
return (function() {
var cljs$core$async$state_machine__9265__auto__ = null;
var cljs$core$async$state_machine__9265__auto____0 = (function (){
var statearr_11904 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11904[(0)] = cljs$core$async$state_machine__9265__auto__);

(statearr_11904[(1)] = (1));

return statearr_11904;
});
var cljs$core$async$state_machine__9265__auto____1 = (function (state_11883){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_11883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e11905){if((e11905 instanceof Object)){
var ex__9268__auto__ = e11905;
var statearr_11906_11923 = state_11883;
(statearr_11906_11923[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11924 = state_11883;
state_11883 = G__11924;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$state_machine__9265__auto__ = function(state_11883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9265__auto____1.call(this,state_11883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9265__auto____0;
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9265__auto____1;
return cljs$core$async$state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___11912,out))
})();
var state__9378__auto__ = (function (){var statearr_11907 = f__9377__auto__.call(null);
(statearr_11907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___11912);

return statearr_11907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___11912,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11925 = [];
var len__7197__auto___11995 = arguments.length;
var i__7198__auto___11996 = (0);
while(true){
if((i__7198__auto___11996 < len__7197__auto___11995)){
args11925.push((arguments[i__7198__auto___11996]));

var G__11997 = (i__7198__auto___11996 + (1));
i__7198__auto___11996 = G__11997;
continue;
} else {
}
break;
}

var G__11927 = args11925.length;
switch (G__11927) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11925.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9376__auto___11999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___11999,out){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___11999,out){
return (function (state_11965){
var state_val_11966 = (state_11965[(1)]);
if((state_val_11966 === (7))){
var inst_11961 = (state_11965[(2)]);
var state_11965__$1 = state_11965;
var statearr_11967_12000 = state_11965__$1;
(statearr_11967_12000[(2)] = inst_11961);

(statearr_11967_12000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (1))){
var inst_11928 = (new Array(n));
var inst_11929 = inst_11928;
var inst_11930 = (0);
var state_11965__$1 = (function (){var statearr_11968 = state_11965;
(statearr_11968[(7)] = inst_11929);

(statearr_11968[(8)] = inst_11930);

return statearr_11968;
})();
var statearr_11969_12001 = state_11965__$1;
(statearr_11969_12001[(2)] = null);

(statearr_11969_12001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (4))){
var inst_11933 = (state_11965[(9)]);
var inst_11933__$1 = (state_11965[(2)]);
var inst_11934 = (inst_11933__$1 == null);
var inst_11935 = cljs.core.not.call(null,inst_11934);
var state_11965__$1 = (function (){var statearr_11970 = state_11965;
(statearr_11970[(9)] = inst_11933__$1);

return statearr_11970;
})();
if(inst_11935){
var statearr_11971_12002 = state_11965__$1;
(statearr_11971_12002[(1)] = (5));

} else {
var statearr_11972_12003 = state_11965__$1;
(statearr_11972_12003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (15))){
var inst_11955 = (state_11965[(2)]);
var state_11965__$1 = state_11965;
var statearr_11973_12004 = state_11965__$1;
(statearr_11973_12004[(2)] = inst_11955);

(statearr_11973_12004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (13))){
var state_11965__$1 = state_11965;
var statearr_11974_12005 = state_11965__$1;
(statearr_11974_12005[(2)] = null);

(statearr_11974_12005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (6))){
var inst_11930 = (state_11965[(8)]);
var inst_11951 = (inst_11930 > (0));
var state_11965__$1 = state_11965;
if(cljs.core.truth_(inst_11951)){
var statearr_11975_12006 = state_11965__$1;
(statearr_11975_12006[(1)] = (12));

} else {
var statearr_11976_12007 = state_11965__$1;
(statearr_11976_12007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (3))){
var inst_11963 = (state_11965[(2)]);
var state_11965__$1 = state_11965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11965__$1,inst_11963);
} else {
if((state_val_11966 === (12))){
var inst_11929 = (state_11965[(7)]);
var inst_11953 = cljs.core.vec.call(null,inst_11929);
var state_11965__$1 = state_11965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11965__$1,(15),out,inst_11953);
} else {
if((state_val_11966 === (2))){
var state_11965__$1 = state_11965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11965__$1,(4),ch);
} else {
if((state_val_11966 === (11))){
var inst_11945 = (state_11965[(2)]);
var inst_11946 = (new Array(n));
var inst_11929 = inst_11946;
var inst_11930 = (0);
var state_11965__$1 = (function (){var statearr_11977 = state_11965;
(statearr_11977[(7)] = inst_11929);

(statearr_11977[(8)] = inst_11930);

(statearr_11977[(10)] = inst_11945);

return statearr_11977;
})();
var statearr_11978_12008 = state_11965__$1;
(statearr_11978_12008[(2)] = null);

(statearr_11978_12008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (9))){
var inst_11929 = (state_11965[(7)]);
var inst_11943 = cljs.core.vec.call(null,inst_11929);
var state_11965__$1 = state_11965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11965__$1,(11),out,inst_11943);
} else {
if((state_val_11966 === (5))){
var inst_11929 = (state_11965[(7)]);
var inst_11930 = (state_11965[(8)]);
var inst_11933 = (state_11965[(9)]);
var inst_11938 = (state_11965[(11)]);
var inst_11937 = (inst_11929[inst_11930] = inst_11933);
var inst_11938__$1 = (inst_11930 + (1));
var inst_11939 = (inst_11938__$1 < n);
var state_11965__$1 = (function (){var statearr_11979 = state_11965;
(statearr_11979[(12)] = inst_11937);

(statearr_11979[(11)] = inst_11938__$1);

return statearr_11979;
})();
if(cljs.core.truth_(inst_11939)){
var statearr_11980_12009 = state_11965__$1;
(statearr_11980_12009[(1)] = (8));

} else {
var statearr_11981_12010 = state_11965__$1;
(statearr_11981_12010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (14))){
var inst_11958 = (state_11965[(2)]);
var inst_11959 = cljs.core.async.close_BANG_.call(null,out);
var state_11965__$1 = (function (){var statearr_11983 = state_11965;
(statearr_11983[(13)] = inst_11958);

return statearr_11983;
})();
var statearr_11984_12011 = state_11965__$1;
(statearr_11984_12011[(2)] = inst_11959);

(statearr_11984_12011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (10))){
var inst_11949 = (state_11965[(2)]);
var state_11965__$1 = state_11965;
var statearr_11985_12012 = state_11965__$1;
(statearr_11985_12012[(2)] = inst_11949);

(statearr_11985_12012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11966 === (8))){
var inst_11929 = (state_11965[(7)]);
var inst_11938 = (state_11965[(11)]);
var tmp11982 = inst_11929;
var inst_11929__$1 = tmp11982;
var inst_11930 = inst_11938;
var state_11965__$1 = (function (){var statearr_11986 = state_11965;
(statearr_11986[(7)] = inst_11929__$1);

(statearr_11986[(8)] = inst_11930);

return statearr_11986;
})();
var statearr_11987_12013 = state_11965__$1;
(statearr_11987_12013[(2)] = null);

(statearr_11987_12013[(1)] = (2));


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
});})(c__9376__auto___11999,out))
;
return ((function (switch__9264__auto__,c__9376__auto___11999,out){
return (function() {
var cljs$core$async$state_machine__9265__auto__ = null;
var cljs$core$async$state_machine__9265__auto____0 = (function (){
var statearr_11991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11991[(0)] = cljs$core$async$state_machine__9265__auto__);

(statearr_11991[(1)] = (1));

return statearr_11991;
});
var cljs$core$async$state_machine__9265__auto____1 = (function (state_11965){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_11965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e11992){if((e11992 instanceof Object)){
var ex__9268__auto__ = e11992;
var statearr_11993_12014 = state_11965;
(statearr_11993_12014[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12015 = state_11965;
state_11965 = G__12015;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$state_machine__9265__auto__ = function(state_11965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9265__auto____1.call(this,state_11965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9265__auto____0;
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9265__auto____1;
return cljs$core$async$state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___11999,out))
})();
var state__9378__auto__ = (function (){var statearr_11994 = f__9377__auto__.call(null);
(statearr_11994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___11999);

return statearr_11994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___11999,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12016 = [];
var len__7197__auto___12090 = arguments.length;
var i__7198__auto___12091 = (0);
while(true){
if((i__7198__auto___12091 < len__7197__auto___12090)){
args12016.push((arguments[i__7198__auto___12091]));

var G__12092 = (i__7198__auto___12091 + (1));
i__7198__auto___12091 = G__12092;
continue;
} else {
}
break;
}

var G__12018 = args12016.length;
switch (G__12018) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12016.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9376__auto___12094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto___12094,out){
return (function (){
var f__9377__auto__ = (function (){var switch__9264__auto__ = ((function (c__9376__auto___12094,out){
return (function (state_12060){
var state_val_12061 = (state_12060[(1)]);
if((state_val_12061 === (7))){
var inst_12056 = (state_12060[(2)]);
var state_12060__$1 = state_12060;
var statearr_12062_12095 = state_12060__$1;
(statearr_12062_12095[(2)] = inst_12056);

(statearr_12062_12095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (1))){
var inst_12019 = [];
var inst_12020 = inst_12019;
var inst_12021 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12060__$1 = (function (){var statearr_12063 = state_12060;
(statearr_12063[(7)] = inst_12021);

(statearr_12063[(8)] = inst_12020);

return statearr_12063;
})();
var statearr_12064_12096 = state_12060__$1;
(statearr_12064_12096[(2)] = null);

(statearr_12064_12096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (4))){
var inst_12024 = (state_12060[(9)]);
var inst_12024__$1 = (state_12060[(2)]);
var inst_12025 = (inst_12024__$1 == null);
var inst_12026 = cljs.core.not.call(null,inst_12025);
var state_12060__$1 = (function (){var statearr_12065 = state_12060;
(statearr_12065[(9)] = inst_12024__$1);

return statearr_12065;
})();
if(inst_12026){
var statearr_12066_12097 = state_12060__$1;
(statearr_12066_12097[(1)] = (5));

} else {
var statearr_12067_12098 = state_12060__$1;
(statearr_12067_12098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (15))){
var inst_12050 = (state_12060[(2)]);
var state_12060__$1 = state_12060;
var statearr_12068_12099 = state_12060__$1;
(statearr_12068_12099[(2)] = inst_12050);

(statearr_12068_12099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (13))){
var state_12060__$1 = state_12060;
var statearr_12069_12100 = state_12060__$1;
(statearr_12069_12100[(2)] = null);

(statearr_12069_12100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (6))){
var inst_12020 = (state_12060[(8)]);
var inst_12045 = inst_12020.length;
var inst_12046 = (inst_12045 > (0));
var state_12060__$1 = state_12060;
if(cljs.core.truth_(inst_12046)){
var statearr_12070_12101 = state_12060__$1;
(statearr_12070_12101[(1)] = (12));

} else {
var statearr_12071_12102 = state_12060__$1;
(statearr_12071_12102[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (3))){
var inst_12058 = (state_12060[(2)]);
var state_12060__$1 = state_12060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12060__$1,inst_12058);
} else {
if((state_val_12061 === (12))){
var inst_12020 = (state_12060[(8)]);
var inst_12048 = cljs.core.vec.call(null,inst_12020);
var state_12060__$1 = state_12060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12060__$1,(15),out,inst_12048);
} else {
if((state_val_12061 === (2))){
var state_12060__$1 = state_12060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12060__$1,(4),ch);
} else {
if((state_val_12061 === (11))){
var inst_12024 = (state_12060[(9)]);
var inst_12028 = (state_12060[(10)]);
var inst_12038 = (state_12060[(2)]);
var inst_12039 = [];
var inst_12040 = inst_12039.push(inst_12024);
var inst_12020 = inst_12039;
var inst_12021 = inst_12028;
var state_12060__$1 = (function (){var statearr_12072 = state_12060;
(statearr_12072[(7)] = inst_12021);

(statearr_12072[(11)] = inst_12038);

(statearr_12072[(8)] = inst_12020);

(statearr_12072[(12)] = inst_12040);

return statearr_12072;
})();
var statearr_12073_12103 = state_12060__$1;
(statearr_12073_12103[(2)] = null);

(statearr_12073_12103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (9))){
var inst_12020 = (state_12060[(8)]);
var inst_12036 = cljs.core.vec.call(null,inst_12020);
var state_12060__$1 = state_12060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12060__$1,(11),out,inst_12036);
} else {
if((state_val_12061 === (5))){
var inst_12021 = (state_12060[(7)]);
var inst_12024 = (state_12060[(9)]);
var inst_12028 = (state_12060[(10)]);
var inst_12028__$1 = f.call(null,inst_12024);
var inst_12029 = cljs.core._EQ_.call(null,inst_12028__$1,inst_12021);
var inst_12030 = cljs.core.keyword_identical_QMARK_.call(null,inst_12021,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12031 = (inst_12029) || (inst_12030);
var state_12060__$1 = (function (){var statearr_12074 = state_12060;
(statearr_12074[(10)] = inst_12028__$1);

return statearr_12074;
})();
if(cljs.core.truth_(inst_12031)){
var statearr_12075_12104 = state_12060__$1;
(statearr_12075_12104[(1)] = (8));

} else {
var statearr_12076_12105 = state_12060__$1;
(statearr_12076_12105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (14))){
var inst_12053 = (state_12060[(2)]);
var inst_12054 = cljs.core.async.close_BANG_.call(null,out);
var state_12060__$1 = (function (){var statearr_12078 = state_12060;
(statearr_12078[(13)] = inst_12053);

return statearr_12078;
})();
var statearr_12079_12106 = state_12060__$1;
(statearr_12079_12106[(2)] = inst_12054);

(statearr_12079_12106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (10))){
var inst_12043 = (state_12060[(2)]);
var state_12060__$1 = state_12060;
var statearr_12080_12107 = state_12060__$1;
(statearr_12080_12107[(2)] = inst_12043);

(statearr_12080_12107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (8))){
var inst_12020 = (state_12060[(8)]);
var inst_12024 = (state_12060[(9)]);
var inst_12028 = (state_12060[(10)]);
var inst_12033 = inst_12020.push(inst_12024);
var tmp12077 = inst_12020;
var inst_12020__$1 = tmp12077;
var inst_12021 = inst_12028;
var state_12060__$1 = (function (){var statearr_12081 = state_12060;
(statearr_12081[(14)] = inst_12033);

(statearr_12081[(7)] = inst_12021);

(statearr_12081[(8)] = inst_12020__$1);

return statearr_12081;
})();
var statearr_12082_12108 = state_12060__$1;
(statearr_12082_12108[(2)] = null);

(statearr_12082_12108[(1)] = (2));


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
});})(c__9376__auto___12094,out))
;
return ((function (switch__9264__auto__,c__9376__auto___12094,out){
return (function() {
var cljs$core$async$state_machine__9265__auto__ = null;
var cljs$core$async$state_machine__9265__auto____0 = (function (){
var statearr_12086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12086[(0)] = cljs$core$async$state_machine__9265__auto__);

(statearr_12086[(1)] = (1));

return statearr_12086;
});
var cljs$core$async$state_machine__9265__auto____1 = (function (state_12060){
while(true){
var ret_value__9266__auto__ = (function (){try{while(true){
var result__9267__auto__ = switch__9264__auto__.call(null,state_12060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9267__auto__;
}
break;
}
}catch (e12087){if((e12087 instanceof Object)){
var ex__9268__auto__ = e12087;
var statearr_12088_12109 = state_12060;
(statearr_12088_12109[(5)] = ex__9268__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12110 = state_12060;
state_12060 = G__12110;
continue;
} else {
return ret_value__9266__auto__;
}
break;
}
});
cljs$core$async$state_machine__9265__auto__ = function(state_12060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9265__auto____1.call(this,state_12060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9265__auto____0;
cljs$core$async$state_machine__9265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9265__auto____1;
return cljs$core$async$state_machine__9265__auto__;
})()
;})(switch__9264__auto__,c__9376__auto___12094,out))
})();
var state__9378__auto__ = (function (){var statearr_12089 = f__9377__auto__.call(null);
(statearr_12089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto___12094);

return statearr_12089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto___12094,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map