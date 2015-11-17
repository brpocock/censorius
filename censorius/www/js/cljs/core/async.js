// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async7716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7716 = (function (fn_handler,f,meta7717){
this.fn_handler = fn_handler;
this.f = f;
this.meta7717 = meta7717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7718,meta7717__$1){
var self__ = this;
var _7718__$1 = this;
return (new cljs.core.async.t_cljs$core$async7716(self__.fn_handler,self__.f,meta7717__$1));
});

cljs.core.async.t_cljs$core$async7716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7718){
var self__ = this;
var _7718__$1 = this;
return self__.meta7717;
});

cljs.core.async.t_cljs$core$async7716.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta7717","meta7717",-609319284,null)], null);
});

cljs.core.async.t_cljs$core$async7716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7716";

cljs.core.async.t_cljs$core$async7716.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7716");
});

cljs.core.async.__GT_t_cljs$core$async7716 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async7716(fn_handler__$1,f__$1,meta7717){
return (new cljs.core.async.t_cljs$core$async7716(fn_handler__$1,f__$1,meta7717));
});

}

return (new cljs.core.async.t_cljs$core$async7716(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args7721 = [];
var len__5726__auto___7724 = arguments.length;
var i__5727__auto___7725 = (0);
while(true){
if((i__5727__auto___7725 < len__5726__auto___7724)){
args7721.push((arguments[i__5727__auto___7725]));

var G__7726 = (i__5727__auto___7725 + (1));
i__5727__auto___7725 = G__7726;
continue;
} else {
}
break;
}

var G__7723 = args7721.length;
switch (G__7723) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7721.length)].join('')));

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
var args7728 = [];
var len__5726__auto___7731 = arguments.length;
var i__5727__auto___7732 = (0);
while(true){
if((i__5727__auto___7732 < len__5726__auto___7731)){
args7728.push((arguments[i__5727__auto___7732]));

var G__7733 = (i__5727__auto___7732 + (1));
i__5727__auto___7732 = G__7733;
continue;
} else {
}
break;
}

var G__7730 = args7728.length;
switch (G__7730) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7728.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7735 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7735);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7735,ret){
return (function (){
return fn1.call(null,val_7735);
});})(val_7735,ret))
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
var args7736 = [];
var len__5726__auto___7739 = arguments.length;
var i__5727__auto___7740 = (0);
while(true){
if((i__5727__auto___7740 < len__5726__auto___7739)){
args7736.push((arguments[i__5727__auto___7740]));

var G__7741 = (i__5727__auto___7740 + (1));
i__5727__auto___7740 = G__7741;
continue;
} else {
}
break;
}

var G__7738 = args7736.length;
switch (G__7738) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7736.length)].join('')));

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
var n__5571__auto___7743 = n;
var x_7744 = (0);
while(true){
if((x_7744 < n__5571__auto___7743)){
(a[x_7744] = (0));

var G__7745 = (x_7744 + (1));
x_7744 = G__7745;
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

var G__7746 = (i + (1));
i = G__7746;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7750 = (function (alt_flag,flag,meta7751){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7751 = meta7751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7752,meta7751__$1){
var self__ = this;
var _7752__$1 = this;
return (new cljs.core.async.t_cljs$core$async7750(self__.alt_flag,self__.flag,meta7751__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7752){
var self__ = this;
var _7752__$1 = this;
return self__.meta7751;
});})(flag))
;

cljs.core.async.t_cljs$core$async7750.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7750.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7750.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7750.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7751","meta7751",-549854267,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7750";

cljs.core.async.t_cljs$core$async7750.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7750");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7750 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7750(alt_flag__$1,flag__$1,meta7751){
return (new cljs.core.async.t_cljs$core$async7750(alt_flag__$1,flag__$1,meta7751));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7750(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7756 = (function (alt_handler,flag,cb,meta7757){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7757 = meta7757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7758,meta7757__$1){
var self__ = this;
var _7758__$1 = this;
return (new cljs.core.async.t_cljs$core$async7756(self__.alt_handler,self__.flag,self__.cb,meta7757__$1));
});

cljs.core.async.t_cljs$core$async7756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7758){
var self__ = this;
var _7758__$1 = this;
return self__.meta7757;
});

cljs.core.async.t_cljs$core$async7756.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7757","meta7757",-1273026810,null)], null);
});

cljs.core.async.t_cljs$core$async7756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7756";

cljs.core.async.t_cljs$core$async7756.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7756");
});

cljs.core.async.__GT_t_cljs$core$async7756 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7756(alt_handler__$1,flag__$1,cb__$1,meta7757){
return (new cljs.core.async.t_cljs$core$async7756(alt_handler__$1,flag__$1,cb__$1,meta7757));
});

}

return (new cljs.core.async.t_cljs$core$async7756(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__7759_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7759_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7760_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7760_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4668__auto__ = wport;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7761 = (i + (1));
i = G__7761;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4668__auto__ = ret;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4656__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4656__auto__;
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
var args__5733__auto__ = [];
var len__5726__auto___7767 = arguments.length;
var i__5727__auto___7768 = (0);
while(true){
if((i__5727__auto___7768 < len__5726__auto___7767)){
args__5733__auto__.push((arguments[i__5727__auto___7768]));

var G__7769 = (i__5727__auto___7768 + (1));
i__5727__auto___7768 = G__7769;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7764){
var map__7765 = p__7764;
var map__7765__$1 = ((((!((map__7765 == null)))?((((map__7765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7765):map__7765);
var opts = map__7765__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7762){
var G__7763 = cljs.core.first.call(null,seq7762);
var seq7762__$1 = cljs.core.next.call(null,seq7762);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7763,seq7762__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args7770 = [];
var len__5726__auto___7820 = arguments.length;
var i__5727__auto___7821 = (0);
while(true){
if((i__5727__auto___7821 < len__5726__auto___7820)){
args7770.push((arguments[i__5727__auto___7821]));

var G__7822 = (i__5727__auto___7821 + (1));
i__5727__auto___7821 = G__7822;
continue;
} else {
}
break;
}

var G__7772 = args7770.length;
switch (G__7772) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7770.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7668__auto___7824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___7824){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___7824){
return (function (state_7796){
var state_val_7797 = (state_7796[(1)]);
if((state_val_7797 === (7))){
var inst_7792 = (state_7796[(2)]);
var state_7796__$1 = state_7796;
var statearr_7798_7825 = state_7796__$1;
(statearr_7798_7825[(2)] = inst_7792);

(statearr_7798_7825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7797 === (1))){
var state_7796__$1 = state_7796;
var statearr_7799_7826 = state_7796__$1;
(statearr_7799_7826[(2)] = null);

(statearr_7799_7826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7797 === (4))){
var inst_7775 = (state_7796[(7)]);
var inst_7775__$1 = (state_7796[(2)]);
var inst_7776 = (inst_7775__$1 == null);
var state_7796__$1 = (function (){var statearr_7800 = state_7796;
(statearr_7800[(7)] = inst_7775__$1);

return statearr_7800;
})();
if(cljs.core.truth_(inst_7776)){
var statearr_7801_7827 = state_7796__$1;
(statearr_7801_7827[(1)] = (5));

} else {
var statearr_7802_7828 = state_7796__$1;
(statearr_7802_7828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7797 === (13))){
var state_7796__$1 = state_7796;
var statearr_7803_7829 = state_7796__$1;
(statearr_7803_7829[(2)] = null);

(statearr_7803_7829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7797 === (6))){
var inst_7775 = (state_7796[(7)]);
var state_7796__$1 = state_7796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7796__$1,(11),to,inst_7775);
} else {
if((state_val_7797 === (3))){
var inst_7794 = (state_7796[(2)]);
var state_7796__$1 = state_7796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7796__$1,inst_7794);
} else {
if((state_val_7797 === (12))){
var state_7796__$1 = state_7796;
var statearr_7804_7830 = state_7796__$1;
(statearr_7804_7830[(2)] = null);

(statearr_7804_7830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7797 === (2))){
var state_7796__$1 = state_7796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7796__$1,(4),from);
} else {
if((state_val_7797 === (11))){
var inst_7785 = (state_7796[(2)]);
var state_7796__$1 = state_7796;
if(cljs.core.truth_(inst_7785)){
var statearr_7805_7831 = state_7796__$1;
(statearr_7805_7831[(1)] = (12));

} else {
var statearr_7806_7832 = state_7796__$1;
(statearr_7806_7832[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7797 === (9))){
var state_7796__$1 = state_7796;
var statearr_7807_7833 = state_7796__$1;
(statearr_7807_7833[(2)] = null);

(statearr_7807_7833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7797 === (5))){
var state_7796__$1 = state_7796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7808_7834 = state_7796__$1;
(statearr_7808_7834[(1)] = (8));

} else {
var statearr_7809_7835 = state_7796__$1;
(statearr_7809_7835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7797 === (14))){
var inst_7790 = (state_7796[(2)]);
var state_7796__$1 = state_7796;
var statearr_7810_7836 = state_7796__$1;
(statearr_7810_7836[(2)] = inst_7790);

(statearr_7810_7836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7797 === (10))){
var inst_7782 = (state_7796[(2)]);
var state_7796__$1 = state_7796;
var statearr_7811_7837 = state_7796__$1;
(statearr_7811_7837[(2)] = inst_7782);

(statearr_7811_7837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7797 === (8))){
var inst_7779 = cljs.core.async.close_BANG_.call(null,to);
var state_7796__$1 = state_7796;
var statearr_7812_7838 = state_7796__$1;
(statearr_7812_7838[(2)] = inst_7779);

(statearr_7812_7838[(1)] = (10));


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
});})(c__7668__auto___7824))
;
return ((function (switch__7556__auto__,c__7668__auto___7824){
return (function() {
var cljs$core$async$state_machine__7557__auto__ = null;
var cljs$core$async$state_machine__7557__auto____0 = (function (){
var statearr_7816 = [null,null,null,null,null,null,null,null];
(statearr_7816[(0)] = cljs$core$async$state_machine__7557__auto__);

(statearr_7816[(1)] = (1));

return statearr_7816;
});
var cljs$core$async$state_machine__7557__auto____1 = (function (state_7796){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_7796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e7817){if((e7817 instanceof Object)){
var ex__7560__auto__ = e7817;
var statearr_7818_7839 = state_7796;
(statearr_7818_7839[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7840 = state_7796;
state_7796 = G__7840;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$state_machine__7557__auto__ = function(state_7796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7557__auto____1.call(this,state_7796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7557__auto____0;
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7557__auto____1;
return cljs$core$async$state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___7824))
})();
var state__7670__auto__ = (function (){var statearr_7819 = f__7669__auto__.call(null);
(statearr_7819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___7824);

return statearr_7819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___7824))
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
return (function (p__8024){
var vec__8025 = p__8024;
var v = cljs.core.nth.call(null,vec__8025,(0),null);
var p = cljs.core.nth.call(null,vec__8025,(1),null);
var job = vec__8025;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7668__auto___8207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___8207,res,vec__8025,v,p,job,jobs,results){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___8207,res,vec__8025,v,p,job,jobs,results){
return (function (state_8030){
var state_val_8031 = (state_8030[(1)]);
if((state_val_8031 === (1))){
var state_8030__$1 = state_8030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8030__$1,(2),res,v);
} else {
if((state_val_8031 === (2))){
var inst_8027 = (state_8030[(2)]);
var inst_8028 = cljs.core.async.close_BANG_.call(null,res);
var state_8030__$1 = (function (){var statearr_8032 = state_8030;
(statearr_8032[(7)] = inst_8027);

return statearr_8032;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8030__$1,inst_8028);
} else {
return null;
}
}
});})(c__7668__auto___8207,res,vec__8025,v,p,job,jobs,results))
;
return ((function (switch__7556__auto__,c__7668__auto___8207,res,vec__8025,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0 = (function (){
var statearr_8036 = [null,null,null,null,null,null,null,null];
(statearr_8036[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__);

(statearr_8036[(1)] = (1));

return statearr_8036;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1 = (function (state_8030){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_8030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e8037){if((e8037 instanceof Object)){
var ex__7560__auto__ = e8037;
var statearr_8038_8208 = state_8030;
(statearr_8038_8208[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8209 = state_8030;
state_8030 = G__8209;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__ = function(state_8030){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1.call(this,state_8030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___8207,res,vec__8025,v,p,job,jobs,results))
})();
var state__7670__auto__ = (function (){var statearr_8039 = f__7669__auto__.call(null);
(statearr_8039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___8207);

return statearr_8039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___8207,res,vec__8025,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8040){
var vec__8041 = p__8040;
var v = cljs.core.nth.call(null,vec__8041,(0),null);
var p = cljs.core.nth.call(null,vec__8041,(1),null);
var job = vec__8041;
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
var n__5571__auto___8210 = n;
var __8211 = (0);
while(true){
if((__8211 < n__5571__auto___8210)){
var G__8042_8212 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__8042_8212) {
case "compute":
var c__7668__auto___8214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8211,c__7668__auto___8214,G__8042_8212,n__5571__auto___8210,jobs,results,process,async){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (__8211,c__7668__auto___8214,G__8042_8212,n__5571__auto___8210,jobs,results,process,async){
return (function (state_8055){
var state_val_8056 = (state_8055[(1)]);
if((state_val_8056 === (1))){
var state_8055__$1 = state_8055;
var statearr_8057_8215 = state_8055__$1;
(statearr_8057_8215[(2)] = null);

(statearr_8057_8215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8056 === (2))){
var state_8055__$1 = state_8055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8055__$1,(4),jobs);
} else {
if((state_val_8056 === (3))){
var inst_8053 = (state_8055[(2)]);
var state_8055__$1 = state_8055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8055__$1,inst_8053);
} else {
if((state_val_8056 === (4))){
var inst_8045 = (state_8055[(2)]);
var inst_8046 = process.call(null,inst_8045);
var state_8055__$1 = state_8055;
if(cljs.core.truth_(inst_8046)){
var statearr_8058_8216 = state_8055__$1;
(statearr_8058_8216[(1)] = (5));

} else {
var statearr_8059_8217 = state_8055__$1;
(statearr_8059_8217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8056 === (5))){
var state_8055__$1 = state_8055;
var statearr_8060_8218 = state_8055__$1;
(statearr_8060_8218[(2)] = null);

(statearr_8060_8218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8056 === (6))){
var state_8055__$1 = state_8055;
var statearr_8061_8219 = state_8055__$1;
(statearr_8061_8219[(2)] = null);

(statearr_8061_8219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8056 === (7))){
var inst_8051 = (state_8055[(2)]);
var state_8055__$1 = state_8055;
var statearr_8062_8220 = state_8055__$1;
(statearr_8062_8220[(2)] = inst_8051);

(statearr_8062_8220[(1)] = (3));


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
});})(__8211,c__7668__auto___8214,G__8042_8212,n__5571__auto___8210,jobs,results,process,async))
;
return ((function (__8211,switch__7556__auto__,c__7668__auto___8214,G__8042_8212,n__5571__auto___8210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0 = (function (){
var statearr_8066 = [null,null,null,null,null,null,null];
(statearr_8066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__);

(statearr_8066[(1)] = (1));

return statearr_8066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1 = (function (state_8055){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_8055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e8067){if((e8067 instanceof Object)){
var ex__7560__auto__ = e8067;
var statearr_8068_8221 = state_8055;
(statearr_8068_8221[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8222 = state_8055;
state_8055 = G__8222;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__ = function(state_8055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1.call(this,state_8055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__;
})()
;})(__8211,switch__7556__auto__,c__7668__auto___8214,G__8042_8212,n__5571__auto___8210,jobs,results,process,async))
})();
var state__7670__auto__ = (function (){var statearr_8069 = f__7669__auto__.call(null);
(statearr_8069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___8214);

return statearr_8069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(__8211,c__7668__auto___8214,G__8042_8212,n__5571__auto___8210,jobs,results,process,async))
);


break;
case "async":
var c__7668__auto___8223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8211,c__7668__auto___8223,G__8042_8212,n__5571__auto___8210,jobs,results,process,async){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (__8211,c__7668__auto___8223,G__8042_8212,n__5571__auto___8210,jobs,results,process,async){
return (function (state_8082){
var state_val_8083 = (state_8082[(1)]);
if((state_val_8083 === (1))){
var state_8082__$1 = state_8082;
var statearr_8084_8224 = state_8082__$1;
(statearr_8084_8224[(2)] = null);

(statearr_8084_8224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8083 === (2))){
var state_8082__$1 = state_8082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8082__$1,(4),jobs);
} else {
if((state_val_8083 === (3))){
var inst_8080 = (state_8082[(2)]);
var state_8082__$1 = state_8082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8082__$1,inst_8080);
} else {
if((state_val_8083 === (4))){
var inst_8072 = (state_8082[(2)]);
var inst_8073 = async.call(null,inst_8072);
var state_8082__$1 = state_8082;
if(cljs.core.truth_(inst_8073)){
var statearr_8085_8225 = state_8082__$1;
(statearr_8085_8225[(1)] = (5));

} else {
var statearr_8086_8226 = state_8082__$1;
(statearr_8086_8226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8083 === (5))){
var state_8082__$1 = state_8082;
var statearr_8087_8227 = state_8082__$1;
(statearr_8087_8227[(2)] = null);

(statearr_8087_8227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8083 === (6))){
var state_8082__$1 = state_8082;
var statearr_8088_8228 = state_8082__$1;
(statearr_8088_8228[(2)] = null);

(statearr_8088_8228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8083 === (7))){
var inst_8078 = (state_8082[(2)]);
var state_8082__$1 = state_8082;
var statearr_8089_8229 = state_8082__$1;
(statearr_8089_8229[(2)] = inst_8078);

(statearr_8089_8229[(1)] = (3));


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
});})(__8211,c__7668__auto___8223,G__8042_8212,n__5571__auto___8210,jobs,results,process,async))
;
return ((function (__8211,switch__7556__auto__,c__7668__auto___8223,G__8042_8212,n__5571__auto___8210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0 = (function (){
var statearr_8093 = [null,null,null,null,null,null,null];
(statearr_8093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__);

(statearr_8093[(1)] = (1));

return statearr_8093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1 = (function (state_8082){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_8082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e8094){if((e8094 instanceof Object)){
var ex__7560__auto__ = e8094;
var statearr_8095_8230 = state_8082;
(statearr_8095_8230[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8231 = state_8082;
state_8082 = G__8231;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__ = function(state_8082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1.call(this,state_8082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__;
})()
;})(__8211,switch__7556__auto__,c__7668__auto___8223,G__8042_8212,n__5571__auto___8210,jobs,results,process,async))
})();
var state__7670__auto__ = (function (){var statearr_8096 = f__7669__auto__.call(null);
(statearr_8096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___8223);

return statearr_8096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(__8211,c__7668__auto___8223,G__8042_8212,n__5571__auto___8210,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__8232 = (__8211 + (1));
__8211 = G__8232;
continue;
} else {
}
break;
}

var c__7668__auto___8233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___8233,jobs,results,process,async){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___8233,jobs,results,process,async){
return (function (state_8118){
var state_val_8119 = (state_8118[(1)]);
if((state_val_8119 === (1))){
var state_8118__$1 = state_8118;
var statearr_8120_8234 = state_8118__$1;
(statearr_8120_8234[(2)] = null);

(statearr_8120_8234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (2))){
var state_8118__$1 = state_8118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8118__$1,(4),from);
} else {
if((state_val_8119 === (3))){
var inst_8116 = (state_8118[(2)]);
var state_8118__$1 = state_8118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8118__$1,inst_8116);
} else {
if((state_val_8119 === (4))){
var inst_8099 = (state_8118[(7)]);
var inst_8099__$1 = (state_8118[(2)]);
var inst_8100 = (inst_8099__$1 == null);
var state_8118__$1 = (function (){var statearr_8121 = state_8118;
(statearr_8121[(7)] = inst_8099__$1);

return statearr_8121;
})();
if(cljs.core.truth_(inst_8100)){
var statearr_8122_8235 = state_8118__$1;
(statearr_8122_8235[(1)] = (5));

} else {
var statearr_8123_8236 = state_8118__$1;
(statearr_8123_8236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (5))){
var inst_8102 = cljs.core.async.close_BANG_.call(null,jobs);
var state_8118__$1 = state_8118;
var statearr_8124_8237 = state_8118__$1;
(statearr_8124_8237[(2)] = inst_8102);

(statearr_8124_8237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (6))){
var inst_8099 = (state_8118[(7)]);
var inst_8104 = (state_8118[(8)]);
var inst_8104__$1 = cljs.core.async.chan.call(null,(1));
var inst_8105 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8106 = [inst_8099,inst_8104__$1];
var inst_8107 = (new cljs.core.PersistentVector(null,2,(5),inst_8105,inst_8106,null));
var state_8118__$1 = (function (){var statearr_8125 = state_8118;
(statearr_8125[(8)] = inst_8104__$1);

return statearr_8125;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8118__$1,(8),jobs,inst_8107);
} else {
if((state_val_8119 === (7))){
var inst_8114 = (state_8118[(2)]);
var state_8118__$1 = state_8118;
var statearr_8126_8238 = state_8118__$1;
(statearr_8126_8238[(2)] = inst_8114);

(statearr_8126_8238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8119 === (8))){
var inst_8104 = (state_8118[(8)]);
var inst_8109 = (state_8118[(2)]);
var state_8118__$1 = (function (){var statearr_8127 = state_8118;
(statearr_8127[(9)] = inst_8109);

return statearr_8127;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8118__$1,(9),results,inst_8104);
} else {
if((state_val_8119 === (9))){
var inst_8111 = (state_8118[(2)]);
var state_8118__$1 = (function (){var statearr_8128 = state_8118;
(statearr_8128[(10)] = inst_8111);

return statearr_8128;
})();
var statearr_8129_8239 = state_8118__$1;
(statearr_8129_8239[(2)] = null);

(statearr_8129_8239[(1)] = (2));


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
});})(c__7668__auto___8233,jobs,results,process,async))
;
return ((function (switch__7556__auto__,c__7668__auto___8233,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0 = (function (){
var statearr_8133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__);

(statearr_8133[(1)] = (1));

return statearr_8133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1 = (function (state_8118){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_8118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e8134){if((e8134 instanceof Object)){
var ex__7560__auto__ = e8134;
var statearr_8135_8240 = state_8118;
(statearr_8135_8240[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8241 = state_8118;
state_8118 = G__8241;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__ = function(state_8118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1.call(this,state_8118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___8233,jobs,results,process,async))
})();
var state__7670__auto__ = (function (){var statearr_8136 = f__7669__auto__.call(null);
(statearr_8136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___8233);

return statearr_8136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___8233,jobs,results,process,async))
);


var c__7668__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto__,jobs,results,process,async){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto__,jobs,results,process,async){
return (function (state_8174){
var state_val_8175 = (state_8174[(1)]);
if((state_val_8175 === (7))){
var inst_8170 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8176_8242 = state_8174__$1;
(statearr_8176_8242[(2)] = inst_8170);

(statearr_8176_8242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (20))){
var state_8174__$1 = state_8174;
var statearr_8177_8243 = state_8174__$1;
(statearr_8177_8243[(2)] = null);

(statearr_8177_8243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (1))){
var state_8174__$1 = state_8174;
var statearr_8178_8244 = state_8174__$1;
(statearr_8178_8244[(2)] = null);

(statearr_8178_8244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (4))){
var inst_8139 = (state_8174[(7)]);
var inst_8139__$1 = (state_8174[(2)]);
var inst_8140 = (inst_8139__$1 == null);
var state_8174__$1 = (function (){var statearr_8179 = state_8174;
(statearr_8179[(7)] = inst_8139__$1);

return statearr_8179;
})();
if(cljs.core.truth_(inst_8140)){
var statearr_8180_8245 = state_8174__$1;
(statearr_8180_8245[(1)] = (5));

} else {
var statearr_8181_8246 = state_8174__$1;
(statearr_8181_8246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (15))){
var inst_8152 = (state_8174[(8)]);
var state_8174__$1 = state_8174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8174__$1,(18),to,inst_8152);
} else {
if((state_val_8175 === (21))){
var inst_8165 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8182_8247 = state_8174__$1;
(statearr_8182_8247[(2)] = inst_8165);

(statearr_8182_8247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (13))){
var inst_8167 = (state_8174[(2)]);
var state_8174__$1 = (function (){var statearr_8183 = state_8174;
(statearr_8183[(9)] = inst_8167);

return statearr_8183;
})();
var statearr_8184_8248 = state_8174__$1;
(statearr_8184_8248[(2)] = null);

(statearr_8184_8248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (6))){
var inst_8139 = (state_8174[(7)]);
var state_8174__$1 = state_8174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8174__$1,(11),inst_8139);
} else {
if((state_val_8175 === (17))){
var inst_8160 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
if(cljs.core.truth_(inst_8160)){
var statearr_8185_8249 = state_8174__$1;
(statearr_8185_8249[(1)] = (19));

} else {
var statearr_8186_8250 = state_8174__$1;
(statearr_8186_8250[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (3))){
var inst_8172 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8174__$1,inst_8172);
} else {
if((state_val_8175 === (12))){
var inst_8149 = (state_8174[(10)]);
var state_8174__$1 = state_8174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8174__$1,(14),inst_8149);
} else {
if((state_val_8175 === (2))){
var state_8174__$1 = state_8174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8174__$1,(4),results);
} else {
if((state_val_8175 === (19))){
var state_8174__$1 = state_8174;
var statearr_8187_8251 = state_8174__$1;
(statearr_8187_8251[(2)] = null);

(statearr_8187_8251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (11))){
var inst_8149 = (state_8174[(2)]);
var state_8174__$1 = (function (){var statearr_8188 = state_8174;
(statearr_8188[(10)] = inst_8149);

return statearr_8188;
})();
var statearr_8189_8252 = state_8174__$1;
(statearr_8189_8252[(2)] = null);

(statearr_8189_8252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (9))){
var state_8174__$1 = state_8174;
var statearr_8190_8253 = state_8174__$1;
(statearr_8190_8253[(2)] = null);

(statearr_8190_8253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (5))){
var state_8174__$1 = state_8174;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8191_8254 = state_8174__$1;
(statearr_8191_8254[(1)] = (8));

} else {
var statearr_8192_8255 = state_8174__$1;
(statearr_8192_8255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (14))){
var inst_8152 = (state_8174[(8)]);
var inst_8154 = (state_8174[(11)]);
var inst_8152__$1 = (state_8174[(2)]);
var inst_8153 = (inst_8152__$1 == null);
var inst_8154__$1 = cljs.core.not.call(null,inst_8153);
var state_8174__$1 = (function (){var statearr_8193 = state_8174;
(statearr_8193[(8)] = inst_8152__$1);

(statearr_8193[(11)] = inst_8154__$1);

return statearr_8193;
})();
if(inst_8154__$1){
var statearr_8194_8256 = state_8174__$1;
(statearr_8194_8256[(1)] = (15));

} else {
var statearr_8195_8257 = state_8174__$1;
(statearr_8195_8257[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (16))){
var inst_8154 = (state_8174[(11)]);
var state_8174__$1 = state_8174;
var statearr_8196_8258 = state_8174__$1;
(statearr_8196_8258[(2)] = inst_8154);

(statearr_8196_8258[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (10))){
var inst_8146 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8197_8259 = state_8174__$1;
(statearr_8197_8259[(2)] = inst_8146);

(statearr_8197_8259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (18))){
var inst_8157 = (state_8174[(2)]);
var state_8174__$1 = state_8174;
var statearr_8198_8260 = state_8174__$1;
(statearr_8198_8260[(2)] = inst_8157);

(statearr_8198_8260[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8175 === (8))){
var inst_8143 = cljs.core.async.close_BANG_.call(null,to);
var state_8174__$1 = state_8174;
var statearr_8199_8261 = state_8174__$1;
(statearr_8199_8261[(2)] = inst_8143);

(statearr_8199_8261[(1)] = (10));


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
});})(c__7668__auto__,jobs,results,process,async))
;
return ((function (switch__7556__auto__,c__7668__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0 = (function (){
var statearr_8203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__);

(statearr_8203[(1)] = (1));

return statearr_8203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1 = (function (state_8174){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_8174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e8204){if((e8204 instanceof Object)){
var ex__7560__auto__ = e8204;
var statearr_8205_8262 = state_8174;
(statearr_8205_8262[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8263 = state_8174;
state_8174 = G__8263;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__ = function(state_8174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1.call(this,state_8174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7557__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto__,jobs,results,process,async))
})();
var state__7670__auto__ = (function (){var statearr_8206 = f__7669__auto__.call(null);
(statearr_8206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto__);

return statearr_8206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto__,jobs,results,process,async))
);

return c__7668__auto__;
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
var args8264 = [];
var len__5726__auto___8267 = arguments.length;
var i__5727__auto___8268 = (0);
while(true){
if((i__5727__auto___8268 < len__5726__auto___8267)){
args8264.push((arguments[i__5727__auto___8268]));

var G__8269 = (i__5727__auto___8268 + (1));
i__5727__auto___8268 = G__8269;
continue;
} else {
}
break;
}

var G__8266 = args8264.length;
switch (G__8266) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8264.length)].join('')));

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
var args8271 = [];
var len__5726__auto___8274 = arguments.length;
var i__5727__auto___8275 = (0);
while(true){
if((i__5727__auto___8275 < len__5726__auto___8274)){
args8271.push((arguments[i__5727__auto___8275]));

var G__8276 = (i__5727__auto___8275 + (1));
i__5727__auto___8275 = G__8276;
continue;
} else {
}
break;
}

var G__8273 = args8271.length;
switch (G__8273) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8271.length)].join('')));

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
var args8278 = [];
var len__5726__auto___8331 = arguments.length;
var i__5727__auto___8332 = (0);
while(true){
if((i__5727__auto___8332 < len__5726__auto___8331)){
args8278.push((arguments[i__5727__auto___8332]));

var G__8333 = (i__5727__auto___8332 + (1));
i__5727__auto___8332 = G__8333;
continue;
} else {
}
break;
}

var G__8280 = args8278.length;
switch (G__8280) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8278.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7668__auto___8335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___8335,tc,fc){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___8335,tc,fc){
return (function (state_8306){
var state_val_8307 = (state_8306[(1)]);
if((state_val_8307 === (7))){
var inst_8302 = (state_8306[(2)]);
var state_8306__$1 = state_8306;
var statearr_8308_8336 = state_8306__$1;
(statearr_8308_8336[(2)] = inst_8302);

(statearr_8308_8336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (1))){
var state_8306__$1 = state_8306;
var statearr_8309_8337 = state_8306__$1;
(statearr_8309_8337[(2)] = null);

(statearr_8309_8337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (4))){
var inst_8283 = (state_8306[(7)]);
var inst_8283__$1 = (state_8306[(2)]);
var inst_8284 = (inst_8283__$1 == null);
var state_8306__$1 = (function (){var statearr_8310 = state_8306;
(statearr_8310[(7)] = inst_8283__$1);

return statearr_8310;
})();
if(cljs.core.truth_(inst_8284)){
var statearr_8311_8338 = state_8306__$1;
(statearr_8311_8338[(1)] = (5));

} else {
var statearr_8312_8339 = state_8306__$1;
(statearr_8312_8339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (13))){
var state_8306__$1 = state_8306;
var statearr_8313_8340 = state_8306__$1;
(statearr_8313_8340[(2)] = null);

(statearr_8313_8340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (6))){
var inst_8283 = (state_8306[(7)]);
var inst_8289 = p.call(null,inst_8283);
var state_8306__$1 = state_8306;
if(cljs.core.truth_(inst_8289)){
var statearr_8314_8341 = state_8306__$1;
(statearr_8314_8341[(1)] = (9));

} else {
var statearr_8315_8342 = state_8306__$1;
(statearr_8315_8342[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (3))){
var inst_8304 = (state_8306[(2)]);
var state_8306__$1 = state_8306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8306__$1,inst_8304);
} else {
if((state_val_8307 === (12))){
var state_8306__$1 = state_8306;
var statearr_8316_8343 = state_8306__$1;
(statearr_8316_8343[(2)] = null);

(statearr_8316_8343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (2))){
var state_8306__$1 = state_8306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8306__$1,(4),ch);
} else {
if((state_val_8307 === (11))){
var inst_8283 = (state_8306[(7)]);
var inst_8293 = (state_8306[(2)]);
var state_8306__$1 = state_8306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8306__$1,(8),inst_8293,inst_8283);
} else {
if((state_val_8307 === (9))){
var state_8306__$1 = state_8306;
var statearr_8317_8344 = state_8306__$1;
(statearr_8317_8344[(2)] = tc);

(statearr_8317_8344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (5))){
var inst_8286 = cljs.core.async.close_BANG_.call(null,tc);
var inst_8287 = cljs.core.async.close_BANG_.call(null,fc);
var state_8306__$1 = (function (){var statearr_8318 = state_8306;
(statearr_8318[(8)] = inst_8286);

return statearr_8318;
})();
var statearr_8319_8345 = state_8306__$1;
(statearr_8319_8345[(2)] = inst_8287);

(statearr_8319_8345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (14))){
var inst_8300 = (state_8306[(2)]);
var state_8306__$1 = state_8306;
var statearr_8320_8346 = state_8306__$1;
(statearr_8320_8346[(2)] = inst_8300);

(statearr_8320_8346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (10))){
var state_8306__$1 = state_8306;
var statearr_8321_8347 = state_8306__$1;
(statearr_8321_8347[(2)] = fc);

(statearr_8321_8347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8307 === (8))){
var inst_8295 = (state_8306[(2)]);
var state_8306__$1 = state_8306;
if(cljs.core.truth_(inst_8295)){
var statearr_8322_8348 = state_8306__$1;
(statearr_8322_8348[(1)] = (12));

} else {
var statearr_8323_8349 = state_8306__$1;
(statearr_8323_8349[(1)] = (13));

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
});})(c__7668__auto___8335,tc,fc))
;
return ((function (switch__7556__auto__,c__7668__auto___8335,tc,fc){
return (function() {
var cljs$core$async$state_machine__7557__auto__ = null;
var cljs$core$async$state_machine__7557__auto____0 = (function (){
var statearr_8327 = [null,null,null,null,null,null,null,null,null];
(statearr_8327[(0)] = cljs$core$async$state_machine__7557__auto__);

(statearr_8327[(1)] = (1));

return statearr_8327;
});
var cljs$core$async$state_machine__7557__auto____1 = (function (state_8306){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_8306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e8328){if((e8328 instanceof Object)){
var ex__7560__auto__ = e8328;
var statearr_8329_8350 = state_8306;
(statearr_8329_8350[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8351 = state_8306;
state_8306 = G__8351;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$state_machine__7557__auto__ = function(state_8306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7557__auto____1.call(this,state_8306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7557__auto____0;
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7557__auto____1;
return cljs$core$async$state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___8335,tc,fc))
})();
var state__7670__auto__ = (function (){var statearr_8330 = f__7669__auto__.call(null);
(statearr_8330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___8335);

return statearr_8330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___8335,tc,fc))
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
var c__7668__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto__){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto__){
return (function (state_8398){
var state_val_8399 = (state_8398[(1)]);
if((state_val_8399 === (1))){
var inst_8384 = init;
var state_8398__$1 = (function (){var statearr_8400 = state_8398;
(statearr_8400[(7)] = inst_8384);

return statearr_8400;
})();
var statearr_8401_8416 = state_8398__$1;
(statearr_8401_8416[(2)] = null);

(statearr_8401_8416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8399 === (2))){
var state_8398__$1 = state_8398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8398__$1,(4),ch);
} else {
if((state_val_8399 === (3))){
var inst_8396 = (state_8398[(2)]);
var state_8398__$1 = state_8398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8398__$1,inst_8396);
} else {
if((state_val_8399 === (4))){
var inst_8387 = (state_8398[(8)]);
var inst_8387__$1 = (state_8398[(2)]);
var inst_8388 = (inst_8387__$1 == null);
var state_8398__$1 = (function (){var statearr_8402 = state_8398;
(statearr_8402[(8)] = inst_8387__$1);

return statearr_8402;
})();
if(cljs.core.truth_(inst_8388)){
var statearr_8403_8417 = state_8398__$1;
(statearr_8403_8417[(1)] = (5));

} else {
var statearr_8404_8418 = state_8398__$1;
(statearr_8404_8418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8399 === (5))){
var inst_8384 = (state_8398[(7)]);
var state_8398__$1 = state_8398;
var statearr_8405_8419 = state_8398__$1;
(statearr_8405_8419[(2)] = inst_8384);

(statearr_8405_8419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8399 === (6))){
var inst_8387 = (state_8398[(8)]);
var inst_8384 = (state_8398[(7)]);
var inst_8391 = f.call(null,inst_8384,inst_8387);
var inst_8384__$1 = inst_8391;
var state_8398__$1 = (function (){var statearr_8406 = state_8398;
(statearr_8406[(7)] = inst_8384__$1);

return statearr_8406;
})();
var statearr_8407_8420 = state_8398__$1;
(statearr_8407_8420[(2)] = null);

(statearr_8407_8420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8399 === (7))){
var inst_8394 = (state_8398[(2)]);
var state_8398__$1 = state_8398;
var statearr_8408_8421 = state_8398__$1;
(statearr_8408_8421[(2)] = inst_8394);

(statearr_8408_8421[(1)] = (3));


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
});})(c__7668__auto__))
;
return ((function (switch__7556__auto__,c__7668__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7557__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7557__auto____0 = (function (){
var statearr_8412 = [null,null,null,null,null,null,null,null,null];
(statearr_8412[(0)] = cljs$core$async$reduce_$_state_machine__7557__auto__);

(statearr_8412[(1)] = (1));

return statearr_8412;
});
var cljs$core$async$reduce_$_state_machine__7557__auto____1 = (function (state_8398){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_8398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e8413){if((e8413 instanceof Object)){
var ex__7560__auto__ = e8413;
var statearr_8414_8422 = state_8398;
(statearr_8414_8422[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8423 = state_8398;
state_8398 = G__8423;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7557__auto__ = function(state_8398){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7557__auto____1.call(this,state_8398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7557__auto____0;
cljs$core$async$reduce_$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7557__auto____1;
return cljs$core$async$reduce_$_state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto__))
})();
var state__7670__auto__ = (function (){var statearr_8415 = f__7669__auto__.call(null);
(statearr_8415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto__);

return statearr_8415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto__))
);

return c__7668__auto__;
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
var args8424 = [];
var len__5726__auto___8476 = arguments.length;
var i__5727__auto___8477 = (0);
while(true){
if((i__5727__auto___8477 < len__5726__auto___8476)){
args8424.push((arguments[i__5727__auto___8477]));

var G__8478 = (i__5727__auto___8477 + (1));
i__5727__auto___8477 = G__8478;
continue;
} else {
}
break;
}

var G__8426 = args8424.length;
switch (G__8426) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8424.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7668__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto__){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto__){
return (function (state_8451){
var state_val_8452 = (state_8451[(1)]);
if((state_val_8452 === (7))){
var inst_8433 = (state_8451[(2)]);
var state_8451__$1 = state_8451;
var statearr_8453_8480 = state_8451__$1;
(statearr_8453_8480[(2)] = inst_8433);

(statearr_8453_8480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (1))){
var inst_8427 = cljs.core.seq.call(null,coll);
var inst_8428 = inst_8427;
var state_8451__$1 = (function (){var statearr_8454 = state_8451;
(statearr_8454[(7)] = inst_8428);

return statearr_8454;
})();
var statearr_8455_8481 = state_8451__$1;
(statearr_8455_8481[(2)] = null);

(statearr_8455_8481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (4))){
var inst_8428 = (state_8451[(7)]);
var inst_8431 = cljs.core.first.call(null,inst_8428);
var state_8451__$1 = state_8451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8451__$1,(7),ch,inst_8431);
} else {
if((state_val_8452 === (13))){
var inst_8445 = (state_8451[(2)]);
var state_8451__$1 = state_8451;
var statearr_8456_8482 = state_8451__$1;
(statearr_8456_8482[(2)] = inst_8445);

(statearr_8456_8482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (6))){
var inst_8436 = (state_8451[(2)]);
var state_8451__$1 = state_8451;
if(cljs.core.truth_(inst_8436)){
var statearr_8457_8483 = state_8451__$1;
(statearr_8457_8483[(1)] = (8));

} else {
var statearr_8458_8484 = state_8451__$1;
(statearr_8458_8484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (3))){
var inst_8449 = (state_8451[(2)]);
var state_8451__$1 = state_8451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8451__$1,inst_8449);
} else {
if((state_val_8452 === (12))){
var state_8451__$1 = state_8451;
var statearr_8459_8485 = state_8451__$1;
(statearr_8459_8485[(2)] = null);

(statearr_8459_8485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (2))){
var inst_8428 = (state_8451[(7)]);
var state_8451__$1 = state_8451;
if(cljs.core.truth_(inst_8428)){
var statearr_8460_8486 = state_8451__$1;
(statearr_8460_8486[(1)] = (4));

} else {
var statearr_8461_8487 = state_8451__$1;
(statearr_8461_8487[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (11))){
var inst_8442 = cljs.core.async.close_BANG_.call(null,ch);
var state_8451__$1 = state_8451;
var statearr_8462_8488 = state_8451__$1;
(statearr_8462_8488[(2)] = inst_8442);

(statearr_8462_8488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (9))){
var state_8451__$1 = state_8451;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8463_8489 = state_8451__$1;
(statearr_8463_8489[(1)] = (11));

} else {
var statearr_8464_8490 = state_8451__$1;
(statearr_8464_8490[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (5))){
var inst_8428 = (state_8451[(7)]);
var state_8451__$1 = state_8451;
var statearr_8465_8491 = state_8451__$1;
(statearr_8465_8491[(2)] = inst_8428);

(statearr_8465_8491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (10))){
var inst_8447 = (state_8451[(2)]);
var state_8451__$1 = state_8451;
var statearr_8466_8492 = state_8451__$1;
(statearr_8466_8492[(2)] = inst_8447);

(statearr_8466_8492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8452 === (8))){
var inst_8428 = (state_8451[(7)]);
var inst_8438 = cljs.core.next.call(null,inst_8428);
var inst_8428__$1 = inst_8438;
var state_8451__$1 = (function (){var statearr_8467 = state_8451;
(statearr_8467[(7)] = inst_8428__$1);

return statearr_8467;
})();
var statearr_8468_8493 = state_8451__$1;
(statearr_8468_8493[(2)] = null);

(statearr_8468_8493[(1)] = (2));


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
});})(c__7668__auto__))
;
return ((function (switch__7556__auto__,c__7668__auto__){
return (function() {
var cljs$core$async$state_machine__7557__auto__ = null;
var cljs$core$async$state_machine__7557__auto____0 = (function (){
var statearr_8472 = [null,null,null,null,null,null,null,null];
(statearr_8472[(0)] = cljs$core$async$state_machine__7557__auto__);

(statearr_8472[(1)] = (1));

return statearr_8472;
});
var cljs$core$async$state_machine__7557__auto____1 = (function (state_8451){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_8451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e8473){if((e8473 instanceof Object)){
var ex__7560__auto__ = e8473;
var statearr_8474_8494 = state_8451;
(statearr_8474_8494[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8495 = state_8451;
state_8451 = G__8495;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$state_machine__7557__auto__ = function(state_8451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7557__auto____1.call(this,state_8451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7557__auto____0;
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7557__auto____1;
return cljs$core$async$state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto__))
})();
var state__7670__auto__ = (function (){var statearr_8475 = f__7669__auto__.call(null);
(statearr_8475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto__);

return statearr_8475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto__))
);

return c__7668__auto__;
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
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,_);
} else {
var m__5324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,_);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async8717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8717 = (function (mult,ch,cs,meta8718){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8718 = meta8718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8719,meta8718__$1){
var self__ = this;
var _8719__$1 = this;
return (new cljs.core.async.t_cljs$core$async8717(self__.mult,self__.ch,self__.cs,meta8718__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8719){
var self__ = this;
var _8719__$1 = this;
return self__.meta8718;
});})(cs))
;

cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8717.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8717.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8718","meta8718",-749164987,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8717";

cljs.core.async.t_cljs$core$async8717.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8717");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8717 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8717(mult__$1,ch__$1,cs__$1,meta8718){
return (new cljs.core.async.t_cljs$core$async8717(mult__$1,ch__$1,cs__$1,meta8718));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8717(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7668__auto___8938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___8938,cs,m,dchan,dctr,done){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___8938,cs,m,dchan,dctr,done){
return (function (state_8850){
var state_val_8851 = (state_8850[(1)]);
if((state_val_8851 === (7))){
var inst_8846 = (state_8850[(2)]);
var state_8850__$1 = state_8850;
var statearr_8852_8939 = state_8850__$1;
(statearr_8852_8939[(2)] = inst_8846);

(statearr_8852_8939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (20))){
var inst_8751 = (state_8850[(7)]);
var inst_8761 = cljs.core.first.call(null,inst_8751);
var inst_8762 = cljs.core.nth.call(null,inst_8761,(0),null);
var inst_8763 = cljs.core.nth.call(null,inst_8761,(1),null);
var state_8850__$1 = (function (){var statearr_8853 = state_8850;
(statearr_8853[(8)] = inst_8762);

return statearr_8853;
})();
if(cljs.core.truth_(inst_8763)){
var statearr_8854_8940 = state_8850__$1;
(statearr_8854_8940[(1)] = (22));

} else {
var statearr_8855_8941 = state_8850__$1;
(statearr_8855_8941[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (27))){
var inst_8722 = (state_8850[(9)]);
var inst_8798 = (state_8850[(10)]);
var inst_8791 = (state_8850[(11)]);
var inst_8793 = (state_8850[(12)]);
var inst_8798__$1 = cljs.core._nth.call(null,inst_8791,inst_8793);
var inst_8799 = cljs.core.async.put_BANG_.call(null,inst_8798__$1,inst_8722,done);
var state_8850__$1 = (function (){var statearr_8856 = state_8850;
(statearr_8856[(10)] = inst_8798__$1);

return statearr_8856;
})();
if(cljs.core.truth_(inst_8799)){
var statearr_8857_8942 = state_8850__$1;
(statearr_8857_8942[(1)] = (30));

} else {
var statearr_8858_8943 = state_8850__$1;
(statearr_8858_8943[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (1))){
var state_8850__$1 = state_8850;
var statearr_8859_8944 = state_8850__$1;
(statearr_8859_8944[(2)] = null);

(statearr_8859_8944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (24))){
var inst_8751 = (state_8850[(7)]);
var inst_8768 = (state_8850[(2)]);
var inst_8769 = cljs.core.next.call(null,inst_8751);
var inst_8731 = inst_8769;
var inst_8732 = null;
var inst_8733 = (0);
var inst_8734 = (0);
var state_8850__$1 = (function (){var statearr_8860 = state_8850;
(statearr_8860[(13)] = inst_8734);

(statearr_8860[(14)] = inst_8732);

(statearr_8860[(15)] = inst_8731);

(statearr_8860[(16)] = inst_8768);

(statearr_8860[(17)] = inst_8733);

return statearr_8860;
})();
var statearr_8861_8945 = state_8850__$1;
(statearr_8861_8945[(2)] = null);

(statearr_8861_8945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (39))){
var state_8850__$1 = state_8850;
var statearr_8865_8946 = state_8850__$1;
(statearr_8865_8946[(2)] = null);

(statearr_8865_8946[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (4))){
var inst_8722 = (state_8850[(9)]);
var inst_8722__$1 = (state_8850[(2)]);
var inst_8723 = (inst_8722__$1 == null);
var state_8850__$1 = (function (){var statearr_8866 = state_8850;
(statearr_8866[(9)] = inst_8722__$1);

return statearr_8866;
})();
if(cljs.core.truth_(inst_8723)){
var statearr_8867_8947 = state_8850__$1;
(statearr_8867_8947[(1)] = (5));

} else {
var statearr_8868_8948 = state_8850__$1;
(statearr_8868_8948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (15))){
var inst_8734 = (state_8850[(13)]);
var inst_8732 = (state_8850[(14)]);
var inst_8731 = (state_8850[(15)]);
var inst_8733 = (state_8850[(17)]);
var inst_8747 = (state_8850[(2)]);
var inst_8748 = (inst_8734 + (1));
var tmp8862 = inst_8732;
var tmp8863 = inst_8731;
var tmp8864 = inst_8733;
var inst_8731__$1 = tmp8863;
var inst_8732__$1 = tmp8862;
var inst_8733__$1 = tmp8864;
var inst_8734__$1 = inst_8748;
var state_8850__$1 = (function (){var statearr_8869 = state_8850;
(statearr_8869[(18)] = inst_8747);

(statearr_8869[(13)] = inst_8734__$1);

(statearr_8869[(14)] = inst_8732__$1);

(statearr_8869[(15)] = inst_8731__$1);

(statearr_8869[(17)] = inst_8733__$1);

return statearr_8869;
})();
var statearr_8870_8949 = state_8850__$1;
(statearr_8870_8949[(2)] = null);

(statearr_8870_8949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (21))){
var inst_8772 = (state_8850[(2)]);
var state_8850__$1 = state_8850;
var statearr_8874_8950 = state_8850__$1;
(statearr_8874_8950[(2)] = inst_8772);

(statearr_8874_8950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (31))){
var inst_8798 = (state_8850[(10)]);
var inst_8802 = done.call(null,null);
var inst_8803 = cljs.core.async.untap_STAR_.call(null,m,inst_8798);
var state_8850__$1 = (function (){var statearr_8875 = state_8850;
(statearr_8875[(19)] = inst_8802);

return statearr_8875;
})();
var statearr_8876_8951 = state_8850__$1;
(statearr_8876_8951[(2)] = inst_8803);

(statearr_8876_8951[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (32))){
var inst_8790 = (state_8850[(20)]);
var inst_8792 = (state_8850[(21)]);
var inst_8791 = (state_8850[(11)]);
var inst_8793 = (state_8850[(12)]);
var inst_8805 = (state_8850[(2)]);
var inst_8806 = (inst_8793 + (1));
var tmp8871 = inst_8790;
var tmp8872 = inst_8792;
var tmp8873 = inst_8791;
var inst_8790__$1 = tmp8871;
var inst_8791__$1 = tmp8873;
var inst_8792__$1 = tmp8872;
var inst_8793__$1 = inst_8806;
var state_8850__$1 = (function (){var statearr_8877 = state_8850;
(statearr_8877[(20)] = inst_8790__$1);

(statearr_8877[(21)] = inst_8792__$1);

(statearr_8877[(22)] = inst_8805);

(statearr_8877[(11)] = inst_8791__$1);

(statearr_8877[(12)] = inst_8793__$1);

return statearr_8877;
})();
var statearr_8878_8952 = state_8850__$1;
(statearr_8878_8952[(2)] = null);

(statearr_8878_8952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (40))){
var inst_8818 = (state_8850[(23)]);
var inst_8822 = done.call(null,null);
var inst_8823 = cljs.core.async.untap_STAR_.call(null,m,inst_8818);
var state_8850__$1 = (function (){var statearr_8879 = state_8850;
(statearr_8879[(24)] = inst_8822);

return statearr_8879;
})();
var statearr_8880_8953 = state_8850__$1;
(statearr_8880_8953[(2)] = inst_8823);

(statearr_8880_8953[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (33))){
var inst_8809 = (state_8850[(25)]);
var inst_8811 = cljs.core.chunked_seq_QMARK_.call(null,inst_8809);
var state_8850__$1 = state_8850;
if(inst_8811){
var statearr_8881_8954 = state_8850__$1;
(statearr_8881_8954[(1)] = (36));

} else {
var statearr_8882_8955 = state_8850__$1;
(statearr_8882_8955[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (13))){
var inst_8741 = (state_8850[(26)]);
var inst_8744 = cljs.core.async.close_BANG_.call(null,inst_8741);
var state_8850__$1 = state_8850;
var statearr_8883_8956 = state_8850__$1;
(statearr_8883_8956[(2)] = inst_8744);

(statearr_8883_8956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (22))){
var inst_8762 = (state_8850[(8)]);
var inst_8765 = cljs.core.async.close_BANG_.call(null,inst_8762);
var state_8850__$1 = state_8850;
var statearr_8884_8957 = state_8850__$1;
(statearr_8884_8957[(2)] = inst_8765);

(statearr_8884_8957[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (36))){
var inst_8809 = (state_8850[(25)]);
var inst_8813 = cljs.core.chunk_first.call(null,inst_8809);
var inst_8814 = cljs.core.chunk_rest.call(null,inst_8809);
var inst_8815 = cljs.core.count.call(null,inst_8813);
var inst_8790 = inst_8814;
var inst_8791 = inst_8813;
var inst_8792 = inst_8815;
var inst_8793 = (0);
var state_8850__$1 = (function (){var statearr_8885 = state_8850;
(statearr_8885[(20)] = inst_8790);

(statearr_8885[(21)] = inst_8792);

(statearr_8885[(11)] = inst_8791);

(statearr_8885[(12)] = inst_8793);

return statearr_8885;
})();
var statearr_8886_8958 = state_8850__$1;
(statearr_8886_8958[(2)] = null);

(statearr_8886_8958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (41))){
var inst_8809 = (state_8850[(25)]);
var inst_8825 = (state_8850[(2)]);
var inst_8826 = cljs.core.next.call(null,inst_8809);
var inst_8790 = inst_8826;
var inst_8791 = null;
var inst_8792 = (0);
var inst_8793 = (0);
var state_8850__$1 = (function (){var statearr_8887 = state_8850;
(statearr_8887[(20)] = inst_8790);

(statearr_8887[(21)] = inst_8792);

(statearr_8887[(11)] = inst_8791);

(statearr_8887[(12)] = inst_8793);

(statearr_8887[(27)] = inst_8825);

return statearr_8887;
})();
var statearr_8888_8959 = state_8850__$1;
(statearr_8888_8959[(2)] = null);

(statearr_8888_8959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (43))){
var state_8850__$1 = state_8850;
var statearr_8889_8960 = state_8850__$1;
(statearr_8889_8960[(2)] = null);

(statearr_8889_8960[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (29))){
var inst_8834 = (state_8850[(2)]);
var state_8850__$1 = state_8850;
var statearr_8890_8961 = state_8850__$1;
(statearr_8890_8961[(2)] = inst_8834);

(statearr_8890_8961[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (44))){
var inst_8843 = (state_8850[(2)]);
var state_8850__$1 = (function (){var statearr_8891 = state_8850;
(statearr_8891[(28)] = inst_8843);

return statearr_8891;
})();
var statearr_8892_8962 = state_8850__$1;
(statearr_8892_8962[(2)] = null);

(statearr_8892_8962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (6))){
var inst_8782 = (state_8850[(29)]);
var inst_8781 = cljs.core.deref.call(null,cs);
var inst_8782__$1 = cljs.core.keys.call(null,inst_8781);
var inst_8783 = cljs.core.count.call(null,inst_8782__$1);
var inst_8784 = cljs.core.reset_BANG_.call(null,dctr,inst_8783);
var inst_8789 = cljs.core.seq.call(null,inst_8782__$1);
var inst_8790 = inst_8789;
var inst_8791 = null;
var inst_8792 = (0);
var inst_8793 = (0);
var state_8850__$1 = (function (){var statearr_8893 = state_8850;
(statearr_8893[(29)] = inst_8782__$1);

(statearr_8893[(20)] = inst_8790);

(statearr_8893[(21)] = inst_8792);

(statearr_8893[(30)] = inst_8784);

(statearr_8893[(11)] = inst_8791);

(statearr_8893[(12)] = inst_8793);

return statearr_8893;
})();
var statearr_8894_8963 = state_8850__$1;
(statearr_8894_8963[(2)] = null);

(statearr_8894_8963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (28))){
var inst_8809 = (state_8850[(25)]);
var inst_8790 = (state_8850[(20)]);
var inst_8809__$1 = cljs.core.seq.call(null,inst_8790);
var state_8850__$1 = (function (){var statearr_8895 = state_8850;
(statearr_8895[(25)] = inst_8809__$1);

return statearr_8895;
})();
if(inst_8809__$1){
var statearr_8896_8964 = state_8850__$1;
(statearr_8896_8964[(1)] = (33));

} else {
var statearr_8897_8965 = state_8850__$1;
(statearr_8897_8965[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (25))){
var inst_8792 = (state_8850[(21)]);
var inst_8793 = (state_8850[(12)]);
var inst_8795 = (inst_8793 < inst_8792);
var inst_8796 = inst_8795;
var state_8850__$1 = state_8850;
if(cljs.core.truth_(inst_8796)){
var statearr_8898_8966 = state_8850__$1;
(statearr_8898_8966[(1)] = (27));

} else {
var statearr_8899_8967 = state_8850__$1;
(statearr_8899_8967[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (34))){
var state_8850__$1 = state_8850;
var statearr_8900_8968 = state_8850__$1;
(statearr_8900_8968[(2)] = null);

(statearr_8900_8968[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (17))){
var state_8850__$1 = state_8850;
var statearr_8901_8969 = state_8850__$1;
(statearr_8901_8969[(2)] = null);

(statearr_8901_8969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (3))){
var inst_8848 = (state_8850[(2)]);
var state_8850__$1 = state_8850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8850__$1,inst_8848);
} else {
if((state_val_8851 === (12))){
var inst_8777 = (state_8850[(2)]);
var state_8850__$1 = state_8850;
var statearr_8902_8970 = state_8850__$1;
(statearr_8902_8970[(2)] = inst_8777);

(statearr_8902_8970[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (2))){
var state_8850__$1 = state_8850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8850__$1,(4),ch);
} else {
if((state_val_8851 === (23))){
var state_8850__$1 = state_8850;
var statearr_8903_8971 = state_8850__$1;
(statearr_8903_8971[(2)] = null);

(statearr_8903_8971[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (35))){
var inst_8832 = (state_8850[(2)]);
var state_8850__$1 = state_8850;
var statearr_8904_8972 = state_8850__$1;
(statearr_8904_8972[(2)] = inst_8832);

(statearr_8904_8972[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (19))){
var inst_8751 = (state_8850[(7)]);
var inst_8755 = cljs.core.chunk_first.call(null,inst_8751);
var inst_8756 = cljs.core.chunk_rest.call(null,inst_8751);
var inst_8757 = cljs.core.count.call(null,inst_8755);
var inst_8731 = inst_8756;
var inst_8732 = inst_8755;
var inst_8733 = inst_8757;
var inst_8734 = (0);
var state_8850__$1 = (function (){var statearr_8905 = state_8850;
(statearr_8905[(13)] = inst_8734);

(statearr_8905[(14)] = inst_8732);

(statearr_8905[(15)] = inst_8731);

(statearr_8905[(17)] = inst_8733);

return statearr_8905;
})();
var statearr_8906_8973 = state_8850__$1;
(statearr_8906_8973[(2)] = null);

(statearr_8906_8973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (11))){
var inst_8731 = (state_8850[(15)]);
var inst_8751 = (state_8850[(7)]);
var inst_8751__$1 = cljs.core.seq.call(null,inst_8731);
var state_8850__$1 = (function (){var statearr_8907 = state_8850;
(statearr_8907[(7)] = inst_8751__$1);

return statearr_8907;
})();
if(inst_8751__$1){
var statearr_8908_8974 = state_8850__$1;
(statearr_8908_8974[(1)] = (16));

} else {
var statearr_8909_8975 = state_8850__$1;
(statearr_8909_8975[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (9))){
var inst_8779 = (state_8850[(2)]);
var state_8850__$1 = state_8850;
var statearr_8910_8976 = state_8850__$1;
(statearr_8910_8976[(2)] = inst_8779);

(statearr_8910_8976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (5))){
var inst_8729 = cljs.core.deref.call(null,cs);
var inst_8730 = cljs.core.seq.call(null,inst_8729);
var inst_8731 = inst_8730;
var inst_8732 = null;
var inst_8733 = (0);
var inst_8734 = (0);
var state_8850__$1 = (function (){var statearr_8911 = state_8850;
(statearr_8911[(13)] = inst_8734);

(statearr_8911[(14)] = inst_8732);

(statearr_8911[(15)] = inst_8731);

(statearr_8911[(17)] = inst_8733);

return statearr_8911;
})();
var statearr_8912_8977 = state_8850__$1;
(statearr_8912_8977[(2)] = null);

(statearr_8912_8977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (14))){
var state_8850__$1 = state_8850;
var statearr_8913_8978 = state_8850__$1;
(statearr_8913_8978[(2)] = null);

(statearr_8913_8978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (45))){
var inst_8840 = (state_8850[(2)]);
var state_8850__$1 = state_8850;
var statearr_8914_8979 = state_8850__$1;
(statearr_8914_8979[(2)] = inst_8840);

(statearr_8914_8979[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (26))){
var inst_8782 = (state_8850[(29)]);
var inst_8836 = (state_8850[(2)]);
var inst_8837 = cljs.core.seq.call(null,inst_8782);
var state_8850__$1 = (function (){var statearr_8915 = state_8850;
(statearr_8915[(31)] = inst_8836);

return statearr_8915;
})();
if(inst_8837){
var statearr_8916_8980 = state_8850__$1;
(statearr_8916_8980[(1)] = (42));

} else {
var statearr_8917_8981 = state_8850__$1;
(statearr_8917_8981[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (16))){
var inst_8751 = (state_8850[(7)]);
var inst_8753 = cljs.core.chunked_seq_QMARK_.call(null,inst_8751);
var state_8850__$1 = state_8850;
if(inst_8753){
var statearr_8918_8982 = state_8850__$1;
(statearr_8918_8982[(1)] = (19));

} else {
var statearr_8919_8983 = state_8850__$1;
(statearr_8919_8983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (38))){
var inst_8829 = (state_8850[(2)]);
var state_8850__$1 = state_8850;
var statearr_8920_8984 = state_8850__$1;
(statearr_8920_8984[(2)] = inst_8829);

(statearr_8920_8984[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (30))){
var state_8850__$1 = state_8850;
var statearr_8921_8985 = state_8850__$1;
(statearr_8921_8985[(2)] = null);

(statearr_8921_8985[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (10))){
var inst_8734 = (state_8850[(13)]);
var inst_8732 = (state_8850[(14)]);
var inst_8740 = cljs.core._nth.call(null,inst_8732,inst_8734);
var inst_8741 = cljs.core.nth.call(null,inst_8740,(0),null);
var inst_8742 = cljs.core.nth.call(null,inst_8740,(1),null);
var state_8850__$1 = (function (){var statearr_8922 = state_8850;
(statearr_8922[(26)] = inst_8741);

return statearr_8922;
})();
if(cljs.core.truth_(inst_8742)){
var statearr_8923_8986 = state_8850__$1;
(statearr_8923_8986[(1)] = (13));

} else {
var statearr_8924_8987 = state_8850__$1;
(statearr_8924_8987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (18))){
var inst_8775 = (state_8850[(2)]);
var state_8850__$1 = state_8850;
var statearr_8925_8988 = state_8850__$1;
(statearr_8925_8988[(2)] = inst_8775);

(statearr_8925_8988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (42))){
var state_8850__$1 = state_8850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8850__$1,(45),dchan);
} else {
if((state_val_8851 === (37))){
var inst_8809 = (state_8850[(25)]);
var inst_8722 = (state_8850[(9)]);
var inst_8818 = (state_8850[(23)]);
var inst_8818__$1 = cljs.core.first.call(null,inst_8809);
var inst_8819 = cljs.core.async.put_BANG_.call(null,inst_8818__$1,inst_8722,done);
var state_8850__$1 = (function (){var statearr_8926 = state_8850;
(statearr_8926[(23)] = inst_8818__$1);

return statearr_8926;
})();
if(cljs.core.truth_(inst_8819)){
var statearr_8927_8989 = state_8850__$1;
(statearr_8927_8989[(1)] = (39));

} else {
var statearr_8928_8990 = state_8850__$1;
(statearr_8928_8990[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8851 === (8))){
var inst_8734 = (state_8850[(13)]);
var inst_8733 = (state_8850[(17)]);
var inst_8736 = (inst_8734 < inst_8733);
var inst_8737 = inst_8736;
var state_8850__$1 = state_8850;
if(cljs.core.truth_(inst_8737)){
var statearr_8929_8991 = state_8850__$1;
(statearr_8929_8991[(1)] = (10));

} else {
var statearr_8930_8992 = state_8850__$1;
(statearr_8930_8992[(1)] = (11));

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
});})(c__7668__auto___8938,cs,m,dchan,dctr,done))
;
return ((function (switch__7556__auto__,c__7668__auto___8938,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7557__auto__ = null;
var cljs$core$async$mult_$_state_machine__7557__auto____0 = (function (){
var statearr_8934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8934[(0)] = cljs$core$async$mult_$_state_machine__7557__auto__);

(statearr_8934[(1)] = (1));

return statearr_8934;
});
var cljs$core$async$mult_$_state_machine__7557__auto____1 = (function (state_8850){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_8850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e8935){if((e8935 instanceof Object)){
var ex__7560__auto__ = e8935;
var statearr_8936_8993 = state_8850;
(statearr_8936_8993[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8994 = state_8850;
state_8850 = G__8994;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7557__auto__ = function(state_8850){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7557__auto____1.call(this,state_8850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7557__auto____0;
cljs$core$async$mult_$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7557__auto____1;
return cljs$core$async$mult_$_state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___8938,cs,m,dchan,dctr,done))
})();
var state__7670__auto__ = (function (){var statearr_8937 = f__7669__auto__.call(null);
(statearr_8937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___8938);

return statearr_8937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___8938,cs,m,dchan,dctr,done))
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
var args8995 = [];
var len__5726__auto___8998 = arguments.length;
var i__5727__auto___8999 = (0);
while(true){
if((i__5727__auto___8999 < len__5726__auto___8998)){
args8995.push((arguments[i__5727__auto___8999]));

var G__9000 = (i__5727__auto___8999 + (1));
i__5727__auto___8999 = G__9000;
continue;
} else {
}
break;
}

var G__8997 = args8995.length;
switch (G__8997) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8995.length)].join('')));

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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,state_map);
} else {
var m__5324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,state_map);
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,mode);
} else {
var m__5324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___9012 = arguments.length;
var i__5727__auto___9013 = (0);
while(true){
if((i__5727__auto___9013 < len__5726__auto___9012)){
args__5733__auto__.push((arguments[i__5727__auto___9013]));

var G__9014 = (i__5727__auto___9013 + (1));
i__5727__auto___9013 = G__9014;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9006){
var map__9007 = p__9006;
var map__9007__$1 = ((((!((map__9007 == null)))?((((map__9007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9007):map__9007);
var opts = map__9007__$1;
var statearr_9009_9015 = state;
(statearr_9009_9015[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__9007,map__9007__$1,opts){
return (function (val){
var statearr_9010_9016 = state;
(statearr_9010_9016[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__9007,map__9007__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_9011_9017 = state;
(statearr_9011_9017[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9002){
var G__9003 = cljs.core.first.call(null,seq9002);
var seq9002__$1 = cljs.core.next.call(null,seq9002);
var G__9004 = cljs.core.first.call(null,seq9002__$1);
var seq9002__$2 = cljs.core.next.call(null,seq9002__$1);
var G__9005 = cljs.core.first.call(null,seq9002__$2);
var seq9002__$3 = cljs.core.next.call(null,seq9002__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9003,G__9004,G__9005,seq9002__$3);
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
if(typeof cljs.core.async.t_cljs$core$async9181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9181 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9182){
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
this.meta9182 = meta9182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9183,meta9182__$1){
var self__ = this;
var _9183__$1 = this;
return (new cljs.core.async.t_cljs$core$async9181(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9182__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9183){
var self__ = this;
var _9183__$1 = this;
return self__.meta9182;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9181.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9181.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9181.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async9181.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9181.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9181.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9181.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9181.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async9181.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta9182","meta9182",-1992824299,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9181";

cljs.core.async.t_cljs$core$async9181.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9181");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async9181 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9181(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9182){
return (new cljs.core.async.t_cljs$core$async9181(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9182));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9181(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7668__auto___9344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___9344,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___9344,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9281){
var state_val_9282 = (state_9281[(1)]);
if((state_val_9282 === (7))){
var inst_9199 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
var statearr_9283_9345 = state_9281__$1;
(statearr_9283_9345[(2)] = inst_9199);

(statearr_9283_9345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (20))){
var inst_9211 = (state_9281[(7)]);
var state_9281__$1 = state_9281;
var statearr_9284_9346 = state_9281__$1;
(statearr_9284_9346[(2)] = inst_9211);

(statearr_9284_9346[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (27))){
var state_9281__$1 = state_9281;
var statearr_9285_9347 = state_9281__$1;
(statearr_9285_9347[(2)] = null);

(statearr_9285_9347[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (1))){
var inst_9187 = (state_9281[(8)]);
var inst_9187__$1 = calc_state.call(null);
var inst_9189 = (inst_9187__$1 == null);
var inst_9190 = cljs.core.not.call(null,inst_9189);
var state_9281__$1 = (function (){var statearr_9286 = state_9281;
(statearr_9286[(8)] = inst_9187__$1);

return statearr_9286;
})();
if(inst_9190){
var statearr_9287_9348 = state_9281__$1;
(statearr_9287_9348[(1)] = (2));

} else {
var statearr_9288_9349 = state_9281__$1;
(statearr_9288_9349[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (24))){
var inst_9241 = (state_9281[(9)]);
var inst_9255 = (state_9281[(10)]);
var inst_9234 = (state_9281[(11)]);
var inst_9255__$1 = inst_9234.call(null,inst_9241);
var state_9281__$1 = (function (){var statearr_9289 = state_9281;
(statearr_9289[(10)] = inst_9255__$1);

return statearr_9289;
})();
if(cljs.core.truth_(inst_9255__$1)){
var statearr_9290_9350 = state_9281__$1;
(statearr_9290_9350[(1)] = (29));

} else {
var statearr_9291_9351 = state_9281__$1;
(statearr_9291_9351[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (4))){
var inst_9202 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
if(cljs.core.truth_(inst_9202)){
var statearr_9292_9352 = state_9281__$1;
(statearr_9292_9352[(1)] = (8));

} else {
var statearr_9293_9353 = state_9281__$1;
(statearr_9293_9353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (15))){
var inst_9228 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
if(cljs.core.truth_(inst_9228)){
var statearr_9294_9354 = state_9281__$1;
(statearr_9294_9354[(1)] = (19));

} else {
var statearr_9295_9355 = state_9281__$1;
(statearr_9295_9355[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (21))){
var inst_9233 = (state_9281[(12)]);
var inst_9233__$1 = (state_9281[(2)]);
var inst_9234 = cljs.core.get.call(null,inst_9233__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9235 = cljs.core.get.call(null,inst_9233__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9236 = cljs.core.get.call(null,inst_9233__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9281__$1 = (function (){var statearr_9296 = state_9281;
(statearr_9296[(13)] = inst_9235);

(statearr_9296[(12)] = inst_9233__$1);

(statearr_9296[(11)] = inst_9234);

return statearr_9296;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9281__$1,(22),inst_9236);
} else {
if((state_val_9282 === (31))){
var inst_9263 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
if(cljs.core.truth_(inst_9263)){
var statearr_9297_9356 = state_9281__$1;
(statearr_9297_9356[(1)] = (32));

} else {
var statearr_9298_9357 = state_9281__$1;
(statearr_9298_9357[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (32))){
var inst_9240 = (state_9281[(14)]);
var state_9281__$1 = state_9281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9281__$1,(35),out,inst_9240);
} else {
if((state_val_9282 === (33))){
var inst_9233 = (state_9281[(12)]);
var inst_9211 = inst_9233;
var state_9281__$1 = (function (){var statearr_9299 = state_9281;
(statearr_9299[(7)] = inst_9211);

return statearr_9299;
})();
var statearr_9300_9358 = state_9281__$1;
(statearr_9300_9358[(2)] = null);

(statearr_9300_9358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (13))){
var inst_9211 = (state_9281[(7)]);
var inst_9218 = inst_9211.cljs$lang$protocol_mask$partition0$;
var inst_9219 = (inst_9218 & (64));
var inst_9220 = inst_9211.cljs$core$ISeq$;
var inst_9221 = (inst_9219) || (inst_9220);
var state_9281__$1 = state_9281;
if(cljs.core.truth_(inst_9221)){
var statearr_9301_9359 = state_9281__$1;
(statearr_9301_9359[(1)] = (16));

} else {
var statearr_9302_9360 = state_9281__$1;
(statearr_9302_9360[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (22))){
var inst_9241 = (state_9281[(9)]);
var inst_9240 = (state_9281[(14)]);
var inst_9239 = (state_9281[(2)]);
var inst_9240__$1 = cljs.core.nth.call(null,inst_9239,(0),null);
var inst_9241__$1 = cljs.core.nth.call(null,inst_9239,(1),null);
var inst_9242 = (inst_9240__$1 == null);
var inst_9243 = cljs.core._EQ_.call(null,inst_9241__$1,change);
var inst_9244 = (inst_9242) || (inst_9243);
var state_9281__$1 = (function (){var statearr_9303 = state_9281;
(statearr_9303[(9)] = inst_9241__$1);

(statearr_9303[(14)] = inst_9240__$1);

return statearr_9303;
})();
if(cljs.core.truth_(inst_9244)){
var statearr_9304_9361 = state_9281__$1;
(statearr_9304_9361[(1)] = (23));

} else {
var statearr_9305_9362 = state_9281__$1;
(statearr_9305_9362[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (36))){
var inst_9233 = (state_9281[(12)]);
var inst_9211 = inst_9233;
var state_9281__$1 = (function (){var statearr_9306 = state_9281;
(statearr_9306[(7)] = inst_9211);

return statearr_9306;
})();
var statearr_9307_9363 = state_9281__$1;
(statearr_9307_9363[(2)] = null);

(statearr_9307_9363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (29))){
var inst_9255 = (state_9281[(10)]);
var state_9281__$1 = state_9281;
var statearr_9308_9364 = state_9281__$1;
(statearr_9308_9364[(2)] = inst_9255);

(statearr_9308_9364[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (6))){
var state_9281__$1 = state_9281;
var statearr_9309_9365 = state_9281__$1;
(statearr_9309_9365[(2)] = false);

(statearr_9309_9365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (28))){
var inst_9251 = (state_9281[(2)]);
var inst_9252 = calc_state.call(null);
var inst_9211 = inst_9252;
var state_9281__$1 = (function (){var statearr_9310 = state_9281;
(statearr_9310[(15)] = inst_9251);

(statearr_9310[(7)] = inst_9211);

return statearr_9310;
})();
var statearr_9311_9366 = state_9281__$1;
(statearr_9311_9366[(2)] = null);

(statearr_9311_9366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (25))){
var inst_9277 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
var statearr_9312_9367 = state_9281__$1;
(statearr_9312_9367[(2)] = inst_9277);

(statearr_9312_9367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (34))){
var inst_9275 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
var statearr_9313_9368 = state_9281__$1;
(statearr_9313_9368[(2)] = inst_9275);

(statearr_9313_9368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (17))){
var state_9281__$1 = state_9281;
var statearr_9314_9369 = state_9281__$1;
(statearr_9314_9369[(2)] = false);

(statearr_9314_9369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (3))){
var state_9281__$1 = state_9281;
var statearr_9315_9370 = state_9281__$1;
(statearr_9315_9370[(2)] = false);

(statearr_9315_9370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (12))){
var inst_9279 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9281__$1,inst_9279);
} else {
if((state_val_9282 === (2))){
var inst_9187 = (state_9281[(8)]);
var inst_9192 = inst_9187.cljs$lang$protocol_mask$partition0$;
var inst_9193 = (inst_9192 & (64));
var inst_9194 = inst_9187.cljs$core$ISeq$;
var inst_9195 = (inst_9193) || (inst_9194);
var state_9281__$1 = state_9281;
if(cljs.core.truth_(inst_9195)){
var statearr_9316_9371 = state_9281__$1;
(statearr_9316_9371[(1)] = (5));

} else {
var statearr_9317_9372 = state_9281__$1;
(statearr_9317_9372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (23))){
var inst_9240 = (state_9281[(14)]);
var inst_9246 = (inst_9240 == null);
var state_9281__$1 = state_9281;
if(cljs.core.truth_(inst_9246)){
var statearr_9318_9373 = state_9281__$1;
(statearr_9318_9373[(1)] = (26));

} else {
var statearr_9319_9374 = state_9281__$1;
(statearr_9319_9374[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (35))){
var inst_9266 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
if(cljs.core.truth_(inst_9266)){
var statearr_9320_9375 = state_9281__$1;
(statearr_9320_9375[(1)] = (36));

} else {
var statearr_9321_9376 = state_9281__$1;
(statearr_9321_9376[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (19))){
var inst_9211 = (state_9281[(7)]);
var inst_9230 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9211);
var state_9281__$1 = state_9281;
var statearr_9322_9377 = state_9281__$1;
(statearr_9322_9377[(2)] = inst_9230);

(statearr_9322_9377[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (11))){
var inst_9211 = (state_9281[(7)]);
var inst_9215 = (inst_9211 == null);
var inst_9216 = cljs.core.not.call(null,inst_9215);
var state_9281__$1 = state_9281;
if(inst_9216){
var statearr_9323_9378 = state_9281__$1;
(statearr_9323_9378[(1)] = (13));

} else {
var statearr_9324_9379 = state_9281__$1;
(statearr_9324_9379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (9))){
var inst_9187 = (state_9281[(8)]);
var state_9281__$1 = state_9281;
var statearr_9325_9380 = state_9281__$1;
(statearr_9325_9380[(2)] = inst_9187);

(statearr_9325_9380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (5))){
var state_9281__$1 = state_9281;
var statearr_9326_9381 = state_9281__$1;
(statearr_9326_9381[(2)] = true);

(statearr_9326_9381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (14))){
var state_9281__$1 = state_9281;
var statearr_9327_9382 = state_9281__$1;
(statearr_9327_9382[(2)] = false);

(statearr_9327_9382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (26))){
var inst_9241 = (state_9281[(9)]);
var inst_9248 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9241);
var state_9281__$1 = state_9281;
var statearr_9328_9383 = state_9281__$1;
(statearr_9328_9383[(2)] = inst_9248);

(statearr_9328_9383[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (16))){
var state_9281__$1 = state_9281;
var statearr_9329_9384 = state_9281__$1;
(statearr_9329_9384[(2)] = true);

(statearr_9329_9384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (38))){
var inst_9271 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
var statearr_9330_9385 = state_9281__$1;
(statearr_9330_9385[(2)] = inst_9271);

(statearr_9330_9385[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (30))){
var inst_9241 = (state_9281[(9)]);
var inst_9235 = (state_9281[(13)]);
var inst_9234 = (state_9281[(11)]);
var inst_9258 = cljs.core.empty_QMARK_.call(null,inst_9234);
var inst_9259 = inst_9235.call(null,inst_9241);
var inst_9260 = cljs.core.not.call(null,inst_9259);
var inst_9261 = (inst_9258) && (inst_9260);
var state_9281__$1 = state_9281;
var statearr_9331_9386 = state_9281__$1;
(statearr_9331_9386[(2)] = inst_9261);

(statearr_9331_9386[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (10))){
var inst_9187 = (state_9281[(8)]);
var inst_9207 = (state_9281[(2)]);
var inst_9208 = cljs.core.get.call(null,inst_9207,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9209 = cljs.core.get.call(null,inst_9207,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9210 = cljs.core.get.call(null,inst_9207,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9211 = inst_9187;
var state_9281__$1 = (function (){var statearr_9332 = state_9281;
(statearr_9332[(16)] = inst_9209);

(statearr_9332[(17)] = inst_9210);

(statearr_9332[(7)] = inst_9211);

(statearr_9332[(18)] = inst_9208);

return statearr_9332;
})();
var statearr_9333_9387 = state_9281__$1;
(statearr_9333_9387[(2)] = null);

(statearr_9333_9387[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (18))){
var inst_9225 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
var statearr_9334_9388 = state_9281__$1;
(statearr_9334_9388[(2)] = inst_9225);

(statearr_9334_9388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (37))){
var state_9281__$1 = state_9281;
var statearr_9335_9389 = state_9281__$1;
(statearr_9335_9389[(2)] = null);

(statearr_9335_9389[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9282 === (8))){
var inst_9187 = (state_9281[(8)]);
var inst_9204 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9187);
var state_9281__$1 = state_9281;
var statearr_9336_9390 = state_9281__$1;
(statearr_9336_9390[(2)] = inst_9204);

(statearr_9336_9390[(1)] = (10));


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
});})(c__7668__auto___9344,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7556__auto__,c__7668__auto___9344,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7557__auto__ = null;
var cljs$core$async$mix_$_state_machine__7557__auto____0 = (function (){
var statearr_9340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9340[(0)] = cljs$core$async$mix_$_state_machine__7557__auto__);

(statearr_9340[(1)] = (1));

return statearr_9340;
});
var cljs$core$async$mix_$_state_machine__7557__auto____1 = (function (state_9281){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_9281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e9341){if((e9341 instanceof Object)){
var ex__7560__auto__ = e9341;
var statearr_9342_9391 = state_9281;
(statearr_9342_9391[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9392 = state_9281;
state_9281 = G__9392;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7557__auto__ = function(state_9281){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7557__auto____1.call(this,state_9281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7557__auto____0;
cljs$core$async$mix_$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7557__auto____1;
return cljs$core$async$mix_$_state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___9344,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7670__auto__ = (function (){var statearr_9343 = f__7669__auto__.call(null);
(statearr_9343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___9344);

return statearr_9343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___9344,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args9393 = [];
var len__5726__auto___9396 = arguments.length;
var i__5727__auto___9397 = (0);
while(true){
if((i__5727__auto___9397 < len__5726__auto___9396)){
args9393.push((arguments[i__5727__auto___9397]));

var G__9398 = (i__5727__auto___9397 + (1));
i__5727__auto___9397 = G__9398;
continue;
} else {
}
break;
}

var G__9395 = args9393.length;
switch (G__9395) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9393.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p);
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
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v);
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
var args9401 = [];
var len__5726__auto___9526 = arguments.length;
var i__5727__auto___9527 = (0);
while(true){
if((i__5727__auto___9527 < len__5726__auto___9526)){
args9401.push((arguments[i__5727__auto___9527]));

var G__9528 = (i__5727__auto___9527 + (1));
i__5727__auto___9527 = G__9528;
continue;
} else {
}
break;
}

var G__9403 = args9401.length;
switch (G__9403) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9401.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4668__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4668__auto__,mults){
return (function (p1__9400_SHARP_){
if(cljs.core.truth_(p1__9400_SHARP_.call(null,topic))){
return p1__9400_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__9400_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async9404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9404 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9405){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9405 = meta9405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9406,meta9405__$1){
var self__ = this;
var _9406__$1 = this;
return (new cljs.core.async.t_cljs$core$async9404(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9405__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9406){
var self__ = this;
var _9406__$1 = this;
return self__.meta9405;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9404.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9404.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9404.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async9404.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9404.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async9404.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9404.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9404.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9405","meta9405",-424446901,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9404";

cljs.core.async.t_cljs$core$async9404.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9404");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async9404 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9404(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9405){
return (new cljs.core.async.t_cljs$core$async9404(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9405));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9404(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7668__auto___9530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___9530,mults,ensure_mult,p){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___9530,mults,ensure_mult,p){
return (function (state_9478){
var state_val_9479 = (state_9478[(1)]);
if((state_val_9479 === (7))){
var inst_9474 = (state_9478[(2)]);
var state_9478__$1 = state_9478;
var statearr_9480_9531 = state_9478__$1;
(statearr_9480_9531[(2)] = inst_9474);

(statearr_9480_9531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (20))){
var state_9478__$1 = state_9478;
var statearr_9481_9532 = state_9478__$1;
(statearr_9481_9532[(2)] = null);

(statearr_9481_9532[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (1))){
var state_9478__$1 = state_9478;
var statearr_9482_9533 = state_9478__$1;
(statearr_9482_9533[(2)] = null);

(statearr_9482_9533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (24))){
var inst_9457 = (state_9478[(7)]);
var inst_9466 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9457);
var state_9478__$1 = state_9478;
var statearr_9483_9534 = state_9478__$1;
(statearr_9483_9534[(2)] = inst_9466);

(statearr_9483_9534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (4))){
var inst_9409 = (state_9478[(8)]);
var inst_9409__$1 = (state_9478[(2)]);
var inst_9410 = (inst_9409__$1 == null);
var state_9478__$1 = (function (){var statearr_9484 = state_9478;
(statearr_9484[(8)] = inst_9409__$1);

return statearr_9484;
})();
if(cljs.core.truth_(inst_9410)){
var statearr_9485_9535 = state_9478__$1;
(statearr_9485_9535[(1)] = (5));

} else {
var statearr_9486_9536 = state_9478__$1;
(statearr_9486_9536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (15))){
var inst_9451 = (state_9478[(2)]);
var state_9478__$1 = state_9478;
var statearr_9487_9537 = state_9478__$1;
(statearr_9487_9537[(2)] = inst_9451);

(statearr_9487_9537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (21))){
var inst_9471 = (state_9478[(2)]);
var state_9478__$1 = (function (){var statearr_9488 = state_9478;
(statearr_9488[(9)] = inst_9471);

return statearr_9488;
})();
var statearr_9489_9538 = state_9478__$1;
(statearr_9489_9538[(2)] = null);

(statearr_9489_9538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (13))){
var inst_9433 = (state_9478[(10)]);
var inst_9435 = cljs.core.chunked_seq_QMARK_.call(null,inst_9433);
var state_9478__$1 = state_9478;
if(inst_9435){
var statearr_9490_9539 = state_9478__$1;
(statearr_9490_9539[(1)] = (16));

} else {
var statearr_9491_9540 = state_9478__$1;
(statearr_9491_9540[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (22))){
var inst_9463 = (state_9478[(2)]);
var state_9478__$1 = state_9478;
if(cljs.core.truth_(inst_9463)){
var statearr_9492_9541 = state_9478__$1;
(statearr_9492_9541[(1)] = (23));

} else {
var statearr_9493_9542 = state_9478__$1;
(statearr_9493_9542[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (6))){
var inst_9459 = (state_9478[(11)]);
var inst_9409 = (state_9478[(8)]);
var inst_9457 = (state_9478[(7)]);
var inst_9457__$1 = topic_fn.call(null,inst_9409);
var inst_9458 = cljs.core.deref.call(null,mults);
var inst_9459__$1 = cljs.core.get.call(null,inst_9458,inst_9457__$1);
var state_9478__$1 = (function (){var statearr_9494 = state_9478;
(statearr_9494[(11)] = inst_9459__$1);

(statearr_9494[(7)] = inst_9457__$1);

return statearr_9494;
})();
if(cljs.core.truth_(inst_9459__$1)){
var statearr_9495_9543 = state_9478__$1;
(statearr_9495_9543[(1)] = (19));

} else {
var statearr_9496_9544 = state_9478__$1;
(statearr_9496_9544[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (25))){
var inst_9468 = (state_9478[(2)]);
var state_9478__$1 = state_9478;
var statearr_9497_9545 = state_9478__$1;
(statearr_9497_9545[(2)] = inst_9468);

(statearr_9497_9545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (17))){
var inst_9433 = (state_9478[(10)]);
var inst_9442 = cljs.core.first.call(null,inst_9433);
var inst_9443 = cljs.core.async.muxch_STAR_.call(null,inst_9442);
var inst_9444 = cljs.core.async.close_BANG_.call(null,inst_9443);
var inst_9445 = cljs.core.next.call(null,inst_9433);
var inst_9419 = inst_9445;
var inst_9420 = null;
var inst_9421 = (0);
var inst_9422 = (0);
var state_9478__$1 = (function (){var statearr_9498 = state_9478;
(statearr_9498[(12)] = inst_9421);

(statearr_9498[(13)] = inst_9444);

(statearr_9498[(14)] = inst_9419);

(statearr_9498[(15)] = inst_9420);

(statearr_9498[(16)] = inst_9422);

return statearr_9498;
})();
var statearr_9499_9546 = state_9478__$1;
(statearr_9499_9546[(2)] = null);

(statearr_9499_9546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (3))){
var inst_9476 = (state_9478[(2)]);
var state_9478__$1 = state_9478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9478__$1,inst_9476);
} else {
if((state_val_9479 === (12))){
var inst_9453 = (state_9478[(2)]);
var state_9478__$1 = state_9478;
var statearr_9500_9547 = state_9478__$1;
(statearr_9500_9547[(2)] = inst_9453);

(statearr_9500_9547[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (2))){
var state_9478__$1 = state_9478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9478__$1,(4),ch);
} else {
if((state_val_9479 === (23))){
var state_9478__$1 = state_9478;
var statearr_9501_9548 = state_9478__$1;
(statearr_9501_9548[(2)] = null);

(statearr_9501_9548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (19))){
var inst_9459 = (state_9478[(11)]);
var inst_9409 = (state_9478[(8)]);
var inst_9461 = cljs.core.async.muxch_STAR_.call(null,inst_9459);
var state_9478__$1 = state_9478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9478__$1,(22),inst_9461,inst_9409);
} else {
if((state_val_9479 === (11))){
var inst_9433 = (state_9478[(10)]);
var inst_9419 = (state_9478[(14)]);
var inst_9433__$1 = cljs.core.seq.call(null,inst_9419);
var state_9478__$1 = (function (){var statearr_9502 = state_9478;
(statearr_9502[(10)] = inst_9433__$1);

return statearr_9502;
})();
if(inst_9433__$1){
var statearr_9503_9549 = state_9478__$1;
(statearr_9503_9549[(1)] = (13));

} else {
var statearr_9504_9550 = state_9478__$1;
(statearr_9504_9550[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (9))){
var inst_9455 = (state_9478[(2)]);
var state_9478__$1 = state_9478;
var statearr_9505_9551 = state_9478__$1;
(statearr_9505_9551[(2)] = inst_9455);

(statearr_9505_9551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (5))){
var inst_9416 = cljs.core.deref.call(null,mults);
var inst_9417 = cljs.core.vals.call(null,inst_9416);
var inst_9418 = cljs.core.seq.call(null,inst_9417);
var inst_9419 = inst_9418;
var inst_9420 = null;
var inst_9421 = (0);
var inst_9422 = (0);
var state_9478__$1 = (function (){var statearr_9506 = state_9478;
(statearr_9506[(12)] = inst_9421);

(statearr_9506[(14)] = inst_9419);

(statearr_9506[(15)] = inst_9420);

(statearr_9506[(16)] = inst_9422);

return statearr_9506;
})();
var statearr_9507_9552 = state_9478__$1;
(statearr_9507_9552[(2)] = null);

(statearr_9507_9552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (14))){
var state_9478__$1 = state_9478;
var statearr_9511_9553 = state_9478__$1;
(statearr_9511_9553[(2)] = null);

(statearr_9511_9553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (16))){
var inst_9433 = (state_9478[(10)]);
var inst_9437 = cljs.core.chunk_first.call(null,inst_9433);
var inst_9438 = cljs.core.chunk_rest.call(null,inst_9433);
var inst_9439 = cljs.core.count.call(null,inst_9437);
var inst_9419 = inst_9438;
var inst_9420 = inst_9437;
var inst_9421 = inst_9439;
var inst_9422 = (0);
var state_9478__$1 = (function (){var statearr_9512 = state_9478;
(statearr_9512[(12)] = inst_9421);

(statearr_9512[(14)] = inst_9419);

(statearr_9512[(15)] = inst_9420);

(statearr_9512[(16)] = inst_9422);

return statearr_9512;
})();
var statearr_9513_9554 = state_9478__$1;
(statearr_9513_9554[(2)] = null);

(statearr_9513_9554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (10))){
var inst_9421 = (state_9478[(12)]);
var inst_9419 = (state_9478[(14)]);
var inst_9420 = (state_9478[(15)]);
var inst_9422 = (state_9478[(16)]);
var inst_9427 = cljs.core._nth.call(null,inst_9420,inst_9422);
var inst_9428 = cljs.core.async.muxch_STAR_.call(null,inst_9427);
var inst_9429 = cljs.core.async.close_BANG_.call(null,inst_9428);
var inst_9430 = (inst_9422 + (1));
var tmp9508 = inst_9421;
var tmp9509 = inst_9419;
var tmp9510 = inst_9420;
var inst_9419__$1 = tmp9509;
var inst_9420__$1 = tmp9510;
var inst_9421__$1 = tmp9508;
var inst_9422__$1 = inst_9430;
var state_9478__$1 = (function (){var statearr_9514 = state_9478;
(statearr_9514[(17)] = inst_9429);

(statearr_9514[(12)] = inst_9421__$1);

(statearr_9514[(14)] = inst_9419__$1);

(statearr_9514[(15)] = inst_9420__$1);

(statearr_9514[(16)] = inst_9422__$1);

return statearr_9514;
})();
var statearr_9515_9555 = state_9478__$1;
(statearr_9515_9555[(2)] = null);

(statearr_9515_9555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (18))){
var inst_9448 = (state_9478[(2)]);
var state_9478__$1 = state_9478;
var statearr_9516_9556 = state_9478__$1;
(statearr_9516_9556[(2)] = inst_9448);

(statearr_9516_9556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9479 === (8))){
var inst_9421 = (state_9478[(12)]);
var inst_9422 = (state_9478[(16)]);
var inst_9424 = (inst_9422 < inst_9421);
var inst_9425 = inst_9424;
var state_9478__$1 = state_9478;
if(cljs.core.truth_(inst_9425)){
var statearr_9517_9557 = state_9478__$1;
(statearr_9517_9557[(1)] = (10));

} else {
var statearr_9518_9558 = state_9478__$1;
(statearr_9518_9558[(1)] = (11));

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
});})(c__7668__auto___9530,mults,ensure_mult,p))
;
return ((function (switch__7556__auto__,c__7668__auto___9530,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7557__auto__ = null;
var cljs$core$async$state_machine__7557__auto____0 = (function (){
var statearr_9522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9522[(0)] = cljs$core$async$state_machine__7557__auto__);

(statearr_9522[(1)] = (1));

return statearr_9522;
});
var cljs$core$async$state_machine__7557__auto____1 = (function (state_9478){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_9478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e9523){if((e9523 instanceof Object)){
var ex__7560__auto__ = e9523;
var statearr_9524_9559 = state_9478;
(statearr_9524_9559[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9560 = state_9478;
state_9478 = G__9560;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$state_machine__7557__auto__ = function(state_9478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7557__auto____1.call(this,state_9478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7557__auto____0;
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7557__auto____1;
return cljs$core$async$state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___9530,mults,ensure_mult,p))
})();
var state__7670__auto__ = (function (){var statearr_9525 = f__7669__auto__.call(null);
(statearr_9525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___9530);

return statearr_9525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___9530,mults,ensure_mult,p))
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
var args9561 = [];
var len__5726__auto___9564 = arguments.length;
var i__5727__auto___9565 = (0);
while(true){
if((i__5727__auto___9565 < len__5726__auto___9564)){
args9561.push((arguments[i__5727__auto___9565]));

var G__9566 = (i__5727__auto___9565 + (1));
i__5727__auto___9565 = G__9566;
continue;
} else {
}
break;
}

var G__9563 = args9561.length;
switch (G__9563) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9561.length)].join('')));

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
var args9568 = [];
var len__5726__auto___9571 = arguments.length;
var i__5727__auto___9572 = (0);
while(true){
if((i__5727__auto___9572 < len__5726__auto___9571)){
args9568.push((arguments[i__5727__auto___9572]));

var G__9573 = (i__5727__auto___9572 + (1));
i__5727__auto___9572 = G__9573;
continue;
} else {
}
break;
}

var G__9570 = args9568.length;
switch (G__9570) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9568.length)].join('')));

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
var args9575 = [];
var len__5726__auto___9646 = arguments.length;
var i__5727__auto___9647 = (0);
while(true){
if((i__5727__auto___9647 < len__5726__auto___9646)){
args9575.push((arguments[i__5727__auto___9647]));

var G__9648 = (i__5727__auto___9647 + (1));
i__5727__auto___9647 = G__9648;
continue;
} else {
}
break;
}

var G__9577 = args9575.length;
switch (G__9577) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9575.length)].join('')));

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
var c__7668__auto___9650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___9650,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___9650,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9616){
var state_val_9617 = (state_9616[(1)]);
if((state_val_9617 === (7))){
var state_9616__$1 = state_9616;
var statearr_9618_9651 = state_9616__$1;
(statearr_9618_9651[(2)] = null);

(statearr_9618_9651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9617 === (1))){
var state_9616__$1 = state_9616;
var statearr_9619_9652 = state_9616__$1;
(statearr_9619_9652[(2)] = null);

(statearr_9619_9652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9617 === (4))){
var inst_9580 = (state_9616[(7)]);
var inst_9582 = (inst_9580 < cnt);
var state_9616__$1 = state_9616;
if(cljs.core.truth_(inst_9582)){
var statearr_9620_9653 = state_9616__$1;
(statearr_9620_9653[(1)] = (6));

} else {
var statearr_9621_9654 = state_9616__$1;
(statearr_9621_9654[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9617 === (15))){
var inst_9612 = (state_9616[(2)]);
var state_9616__$1 = state_9616;
var statearr_9622_9655 = state_9616__$1;
(statearr_9622_9655[(2)] = inst_9612);

(statearr_9622_9655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9617 === (13))){
var inst_9605 = cljs.core.async.close_BANG_.call(null,out);
var state_9616__$1 = state_9616;
var statearr_9623_9656 = state_9616__$1;
(statearr_9623_9656[(2)] = inst_9605);

(statearr_9623_9656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9617 === (6))){
var state_9616__$1 = state_9616;
var statearr_9624_9657 = state_9616__$1;
(statearr_9624_9657[(2)] = null);

(statearr_9624_9657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9617 === (3))){
var inst_9614 = (state_9616[(2)]);
var state_9616__$1 = state_9616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9616__$1,inst_9614);
} else {
if((state_val_9617 === (12))){
var inst_9602 = (state_9616[(8)]);
var inst_9602__$1 = (state_9616[(2)]);
var inst_9603 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9602__$1);
var state_9616__$1 = (function (){var statearr_9625 = state_9616;
(statearr_9625[(8)] = inst_9602__$1);

return statearr_9625;
})();
if(cljs.core.truth_(inst_9603)){
var statearr_9626_9658 = state_9616__$1;
(statearr_9626_9658[(1)] = (13));

} else {
var statearr_9627_9659 = state_9616__$1;
(statearr_9627_9659[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9617 === (2))){
var inst_9579 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9580 = (0);
var state_9616__$1 = (function (){var statearr_9628 = state_9616;
(statearr_9628[(7)] = inst_9580);

(statearr_9628[(9)] = inst_9579);

return statearr_9628;
})();
var statearr_9629_9660 = state_9616__$1;
(statearr_9629_9660[(2)] = null);

(statearr_9629_9660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9617 === (11))){
var inst_9580 = (state_9616[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9616,(10),Object,null,(9));
var inst_9589 = chs__$1.call(null,inst_9580);
var inst_9590 = done.call(null,inst_9580);
var inst_9591 = cljs.core.async.take_BANG_.call(null,inst_9589,inst_9590);
var state_9616__$1 = state_9616;
var statearr_9630_9661 = state_9616__$1;
(statearr_9630_9661[(2)] = inst_9591);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9616__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9617 === (9))){
var inst_9580 = (state_9616[(7)]);
var inst_9593 = (state_9616[(2)]);
var inst_9594 = (inst_9580 + (1));
var inst_9580__$1 = inst_9594;
var state_9616__$1 = (function (){var statearr_9631 = state_9616;
(statearr_9631[(7)] = inst_9580__$1);

(statearr_9631[(10)] = inst_9593);

return statearr_9631;
})();
var statearr_9632_9662 = state_9616__$1;
(statearr_9632_9662[(2)] = null);

(statearr_9632_9662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9617 === (5))){
var inst_9600 = (state_9616[(2)]);
var state_9616__$1 = (function (){var statearr_9633 = state_9616;
(statearr_9633[(11)] = inst_9600);

return statearr_9633;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9616__$1,(12),dchan);
} else {
if((state_val_9617 === (14))){
var inst_9602 = (state_9616[(8)]);
var inst_9607 = cljs.core.apply.call(null,f,inst_9602);
var state_9616__$1 = state_9616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9616__$1,(16),out,inst_9607);
} else {
if((state_val_9617 === (16))){
var inst_9609 = (state_9616[(2)]);
var state_9616__$1 = (function (){var statearr_9634 = state_9616;
(statearr_9634[(12)] = inst_9609);

return statearr_9634;
})();
var statearr_9635_9663 = state_9616__$1;
(statearr_9635_9663[(2)] = null);

(statearr_9635_9663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9617 === (10))){
var inst_9584 = (state_9616[(2)]);
var inst_9585 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9616__$1 = (function (){var statearr_9636 = state_9616;
(statearr_9636[(13)] = inst_9584);

return statearr_9636;
})();
var statearr_9637_9664 = state_9616__$1;
(statearr_9637_9664[(2)] = inst_9585);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9616__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9617 === (8))){
var inst_9598 = (state_9616[(2)]);
var state_9616__$1 = state_9616;
var statearr_9638_9665 = state_9616__$1;
(statearr_9638_9665[(2)] = inst_9598);

(statearr_9638_9665[(1)] = (5));


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
});})(c__7668__auto___9650,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7556__auto__,c__7668__auto___9650,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7557__auto__ = null;
var cljs$core$async$state_machine__7557__auto____0 = (function (){
var statearr_9642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9642[(0)] = cljs$core$async$state_machine__7557__auto__);

(statearr_9642[(1)] = (1));

return statearr_9642;
});
var cljs$core$async$state_machine__7557__auto____1 = (function (state_9616){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_9616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e9643){if((e9643 instanceof Object)){
var ex__7560__auto__ = e9643;
var statearr_9644_9666 = state_9616;
(statearr_9644_9666[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9667 = state_9616;
state_9616 = G__9667;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$state_machine__7557__auto__ = function(state_9616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7557__auto____1.call(this,state_9616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7557__auto____0;
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7557__auto____1;
return cljs$core$async$state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___9650,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7670__auto__ = (function (){var statearr_9645 = f__7669__auto__.call(null);
(statearr_9645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___9650);

return statearr_9645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___9650,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args9669 = [];
var len__5726__auto___9725 = arguments.length;
var i__5727__auto___9726 = (0);
while(true){
if((i__5727__auto___9726 < len__5726__auto___9725)){
args9669.push((arguments[i__5727__auto___9726]));

var G__9727 = (i__5727__auto___9726 + (1));
i__5727__auto___9726 = G__9727;
continue;
} else {
}
break;
}

var G__9671 = args9669.length;
switch (G__9671) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9669.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7668__auto___9729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___9729,out){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___9729,out){
return (function (state_9701){
var state_val_9702 = (state_9701[(1)]);
if((state_val_9702 === (7))){
var inst_9680 = (state_9701[(7)]);
var inst_9681 = (state_9701[(8)]);
var inst_9680__$1 = (state_9701[(2)]);
var inst_9681__$1 = cljs.core.nth.call(null,inst_9680__$1,(0),null);
var inst_9682 = cljs.core.nth.call(null,inst_9680__$1,(1),null);
var inst_9683 = (inst_9681__$1 == null);
var state_9701__$1 = (function (){var statearr_9703 = state_9701;
(statearr_9703[(7)] = inst_9680__$1);

(statearr_9703[(9)] = inst_9682);

(statearr_9703[(8)] = inst_9681__$1);

return statearr_9703;
})();
if(cljs.core.truth_(inst_9683)){
var statearr_9704_9730 = state_9701__$1;
(statearr_9704_9730[(1)] = (8));

} else {
var statearr_9705_9731 = state_9701__$1;
(statearr_9705_9731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9702 === (1))){
var inst_9672 = cljs.core.vec.call(null,chs);
var inst_9673 = inst_9672;
var state_9701__$1 = (function (){var statearr_9706 = state_9701;
(statearr_9706[(10)] = inst_9673);

return statearr_9706;
})();
var statearr_9707_9732 = state_9701__$1;
(statearr_9707_9732[(2)] = null);

(statearr_9707_9732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9702 === (4))){
var inst_9673 = (state_9701[(10)]);
var state_9701__$1 = state_9701;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9701__$1,(7),inst_9673);
} else {
if((state_val_9702 === (6))){
var inst_9697 = (state_9701[(2)]);
var state_9701__$1 = state_9701;
var statearr_9708_9733 = state_9701__$1;
(statearr_9708_9733[(2)] = inst_9697);

(statearr_9708_9733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9702 === (3))){
var inst_9699 = (state_9701[(2)]);
var state_9701__$1 = state_9701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9701__$1,inst_9699);
} else {
if((state_val_9702 === (2))){
var inst_9673 = (state_9701[(10)]);
var inst_9675 = cljs.core.count.call(null,inst_9673);
var inst_9676 = (inst_9675 > (0));
var state_9701__$1 = state_9701;
if(cljs.core.truth_(inst_9676)){
var statearr_9710_9734 = state_9701__$1;
(statearr_9710_9734[(1)] = (4));

} else {
var statearr_9711_9735 = state_9701__$1;
(statearr_9711_9735[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9702 === (11))){
var inst_9673 = (state_9701[(10)]);
var inst_9690 = (state_9701[(2)]);
var tmp9709 = inst_9673;
var inst_9673__$1 = tmp9709;
var state_9701__$1 = (function (){var statearr_9712 = state_9701;
(statearr_9712[(10)] = inst_9673__$1);

(statearr_9712[(11)] = inst_9690);

return statearr_9712;
})();
var statearr_9713_9736 = state_9701__$1;
(statearr_9713_9736[(2)] = null);

(statearr_9713_9736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9702 === (9))){
var inst_9681 = (state_9701[(8)]);
var state_9701__$1 = state_9701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9701__$1,(11),out,inst_9681);
} else {
if((state_val_9702 === (5))){
var inst_9695 = cljs.core.async.close_BANG_.call(null,out);
var state_9701__$1 = state_9701;
var statearr_9714_9737 = state_9701__$1;
(statearr_9714_9737[(2)] = inst_9695);

(statearr_9714_9737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9702 === (10))){
var inst_9693 = (state_9701[(2)]);
var state_9701__$1 = state_9701;
var statearr_9715_9738 = state_9701__$1;
(statearr_9715_9738[(2)] = inst_9693);

(statearr_9715_9738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9702 === (8))){
var inst_9680 = (state_9701[(7)]);
var inst_9682 = (state_9701[(9)]);
var inst_9673 = (state_9701[(10)]);
var inst_9681 = (state_9701[(8)]);
var inst_9685 = (function (){var cs = inst_9673;
var vec__9678 = inst_9680;
var v = inst_9681;
var c = inst_9682;
return ((function (cs,vec__9678,v,c,inst_9680,inst_9682,inst_9673,inst_9681,state_val_9702,c__7668__auto___9729,out){
return (function (p1__9668_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9668_SHARP_);
});
;})(cs,vec__9678,v,c,inst_9680,inst_9682,inst_9673,inst_9681,state_val_9702,c__7668__auto___9729,out))
})();
var inst_9686 = cljs.core.filterv.call(null,inst_9685,inst_9673);
var inst_9673__$1 = inst_9686;
var state_9701__$1 = (function (){var statearr_9716 = state_9701;
(statearr_9716[(10)] = inst_9673__$1);

return statearr_9716;
})();
var statearr_9717_9739 = state_9701__$1;
(statearr_9717_9739[(2)] = null);

(statearr_9717_9739[(1)] = (2));


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
});})(c__7668__auto___9729,out))
;
return ((function (switch__7556__auto__,c__7668__auto___9729,out){
return (function() {
var cljs$core$async$state_machine__7557__auto__ = null;
var cljs$core$async$state_machine__7557__auto____0 = (function (){
var statearr_9721 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9721[(0)] = cljs$core$async$state_machine__7557__auto__);

(statearr_9721[(1)] = (1));

return statearr_9721;
});
var cljs$core$async$state_machine__7557__auto____1 = (function (state_9701){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_9701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e9722){if((e9722 instanceof Object)){
var ex__7560__auto__ = e9722;
var statearr_9723_9740 = state_9701;
(statearr_9723_9740[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9741 = state_9701;
state_9701 = G__9741;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$state_machine__7557__auto__ = function(state_9701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7557__auto____1.call(this,state_9701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7557__auto____0;
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7557__auto____1;
return cljs$core$async$state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___9729,out))
})();
var state__7670__auto__ = (function (){var statearr_9724 = f__7669__auto__.call(null);
(statearr_9724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___9729);

return statearr_9724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___9729,out))
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
var args9742 = [];
var len__5726__auto___9791 = arguments.length;
var i__5727__auto___9792 = (0);
while(true){
if((i__5727__auto___9792 < len__5726__auto___9791)){
args9742.push((arguments[i__5727__auto___9792]));

var G__9793 = (i__5727__auto___9792 + (1));
i__5727__auto___9792 = G__9793;
continue;
} else {
}
break;
}

var G__9744 = args9742.length;
switch (G__9744) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9742.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7668__auto___9795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___9795,out){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___9795,out){
return (function (state_9768){
var state_val_9769 = (state_9768[(1)]);
if((state_val_9769 === (7))){
var inst_9750 = (state_9768[(7)]);
var inst_9750__$1 = (state_9768[(2)]);
var inst_9751 = (inst_9750__$1 == null);
var inst_9752 = cljs.core.not.call(null,inst_9751);
var state_9768__$1 = (function (){var statearr_9770 = state_9768;
(statearr_9770[(7)] = inst_9750__$1);

return statearr_9770;
})();
if(inst_9752){
var statearr_9771_9796 = state_9768__$1;
(statearr_9771_9796[(1)] = (8));

} else {
var statearr_9772_9797 = state_9768__$1;
(statearr_9772_9797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9769 === (1))){
var inst_9745 = (0);
var state_9768__$1 = (function (){var statearr_9773 = state_9768;
(statearr_9773[(8)] = inst_9745);

return statearr_9773;
})();
var statearr_9774_9798 = state_9768__$1;
(statearr_9774_9798[(2)] = null);

(statearr_9774_9798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9769 === (4))){
var state_9768__$1 = state_9768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9768__$1,(7),ch);
} else {
if((state_val_9769 === (6))){
var inst_9763 = (state_9768[(2)]);
var state_9768__$1 = state_9768;
var statearr_9775_9799 = state_9768__$1;
(statearr_9775_9799[(2)] = inst_9763);

(statearr_9775_9799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9769 === (3))){
var inst_9765 = (state_9768[(2)]);
var inst_9766 = cljs.core.async.close_BANG_.call(null,out);
var state_9768__$1 = (function (){var statearr_9776 = state_9768;
(statearr_9776[(9)] = inst_9765);

return statearr_9776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9768__$1,inst_9766);
} else {
if((state_val_9769 === (2))){
var inst_9745 = (state_9768[(8)]);
var inst_9747 = (inst_9745 < n);
var state_9768__$1 = state_9768;
if(cljs.core.truth_(inst_9747)){
var statearr_9777_9800 = state_9768__$1;
(statearr_9777_9800[(1)] = (4));

} else {
var statearr_9778_9801 = state_9768__$1;
(statearr_9778_9801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9769 === (11))){
var inst_9745 = (state_9768[(8)]);
var inst_9755 = (state_9768[(2)]);
var inst_9756 = (inst_9745 + (1));
var inst_9745__$1 = inst_9756;
var state_9768__$1 = (function (){var statearr_9779 = state_9768;
(statearr_9779[(10)] = inst_9755);

(statearr_9779[(8)] = inst_9745__$1);

return statearr_9779;
})();
var statearr_9780_9802 = state_9768__$1;
(statearr_9780_9802[(2)] = null);

(statearr_9780_9802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9769 === (9))){
var state_9768__$1 = state_9768;
var statearr_9781_9803 = state_9768__$1;
(statearr_9781_9803[(2)] = null);

(statearr_9781_9803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9769 === (5))){
var state_9768__$1 = state_9768;
var statearr_9782_9804 = state_9768__$1;
(statearr_9782_9804[(2)] = null);

(statearr_9782_9804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9769 === (10))){
var inst_9760 = (state_9768[(2)]);
var state_9768__$1 = state_9768;
var statearr_9783_9805 = state_9768__$1;
(statearr_9783_9805[(2)] = inst_9760);

(statearr_9783_9805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9769 === (8))){
var inst_9750 = (state_9768[(7)]);
var state_9768__$1 = state_9768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9768__$1,(11),out,inst_9750);
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
});})(c__7668__auto___9795,out))
;
return ((function (switch__7556__auto__,c__7668__auto___9795,out){
return (function() {
var cljs$core$async$state_machine__7557__auto__ = null;
var cljs$core$async$state_machine__7557__auto____0 = (function (){
var statearr_9787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9787[(0)] = cljs$core$async$state_machine__7557__auto__);

(statearr_9787[(1)] = (1));

return statearr_9787;
});
var cljs$core$async$state_machine__7557__auto____1 = (function (state_9768){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_9768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e9788){if((e9788 instanceof Object)){
var ex__7560__auto__ = e9788;
var statearr_9789_9806 = state_9768;
(statearr_9789_9806[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9807 = state_9768;
state_9768 = G__9807;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$state_machine__7557__auto__ = function(state_9768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7557__auto____1.call(this,state_9768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7557__auto____0;
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7557__auto____1;
return cljs$core$async$state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___9795,out))
})();
var state__7670__auto__ = (function (){var statearr_9790 = f__7669__auto__.call(null);
(statearr_9790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___9795);

return statearr_9790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___9795,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9815 = (function (map_LT_,f,ch,meta9816){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9816 = meta9816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9817,meta9816__$1){
var self__ = this;
var _9817__$1 = this;
return (new cljs.core.async.t_cljs$core$async9815(self__.map_LT_,self__.f,self__.ch,meta9816__$1));
});

cljs.core.async.t_cljs$core$async9815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9817){
var self__ = this;
var _9817__$1 = this;
return self__.meta9816;
});

cljs.core.async.t_cljs$core$async9815.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9815.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9815.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9815.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9815.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9818 = (function (map_LT_,f,ch,meta9816,_,fn1,meta9819){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9816 = meta9816;
this._ = _;
this.fn1 = fn1;
this.meta9819 = meta9819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9820,meta9819__$1){
var self__ = this;
var _9820__$1 = this;
return (new cljs.core.async.t_cljs$core$async9818(self__.map_LT_,self__.f,self__.ch,self__.meta9816,self__._,self__.fn1,meta9819__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9820){
var self__ = this;
var _9820__$1 = this;
return self__.meta9819;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9818.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9808_SHARP_){
return f1.call(null,(((p1__9808_SHARP_ == null))?null:self__.f.call(null,p1__9808_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9818.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9816","meta9816",-754374341,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9815","cljs.core.async/t_cljs$core$async9815",1827206264,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9819","meta9819",1500649241,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9818";

cljs.core.async.t_cljs$core$async9818.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9818");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9818 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9818(map_LT___$1,f__$1,ch__$1,meta9816__$1,___$2,fn1__$1,meta9819){
return (new cljs.core.async.t_cljs$core$async9818(map_LT___$1,f__$1,ch__$1,meta9816__$1,___$2,fn1__$1,meta9819));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9818(self__.map_LT_,self__.f,self__.ch,self__.meta9816,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4656__auto__ = ret;
if(cljs.core.truth_(and__4656__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9815.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9815.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9816","meta9816",-754374341,null)], null);
});

cljs.core.async.t_cljs$core$async9815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9815";

cljs.core.async.t_cljs$core$async9815.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9815");
});

cljs.core.async.__GT_t_cljs$core$async9815 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9815(map_LT___$1,f__$1,ch__$1,meta9816){
return (new cljs.core.async.t_cljs$core$async9815(map_LT___$1,f__$1,ch__$1,meta9816));
});

}

return (new cljs.core.async.t_cljs$core$async9815(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9824 = (function (map_GT_,f,ch,meta9825){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9825 = meta9825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9826,meta9825__$1){
var self__ = this;
var _9826__$1 = this;
return (new cljs.core.async.t_cljs$core$async9824(self__.map_GT_,self__.f,self__.ch,meta9825__$1));
});

cljs.core.async.t_cljs$core$async9824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9826){
var self__ = this;
var _9826__$1 = this;
return self__.meta9825;
});

cljs.core.async.t_cljs$core$async9824.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9824.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9824.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9824.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9824.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9824.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9825","meta9825",-343337227,null)], null);
});

cljs.core.async.t_cljs$core$async9824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9824";

cljs.core.async.t_cljs$core$async9824.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9824");
});

cljs.core.async.__GT_t_cljs$core$async9824 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9824(map_GT___$1,f__$1,ch__$1,meta9825){
return (new cljs.core.async.t_cljs$core$async9824(map_GT___$1,f__$1,ch__$1,meta9825));
});

}

return (new cljs.core.async.t_cljs$core$async9824(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9830 = (function (filter_GT_,p,ch,meta9831){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9831 = meta9831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9832,meta9831__$1){
var self__ = this;
var _9832__$1 = this;
return (new cljs.core.async.t_cljs$core$async9830(self__.filter_GT_,self__.p,self__.ch,meta9831__$1));
});

cljs.core.async.t_cljs$core$async9830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9832){
var self__ = this;
var _9832__$1 = this;
return self__.meta9831;
});

cljs.core.async.t_cljs$core$async9830.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9830.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9830.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9830.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9830.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9831","meta9831",-1674228599,null)], null);
});

cljs.core.async.t_cljs$core$async9830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9830";

cljs.core.async.t_cljs$core$async9830.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9830");
});

cljs.core.async.__GT_t_cljs$core$async9830 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9830(filter_GT___$1,p__$1,ch__$1,meta9831){
return (new cljs.core.async.t_cljs$core$async9830(filter_GT___$1,p__$1,ch__$1,meta9831));
});

}

return (new cljs.core.async.t_cljs$core$async9830(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args9833 = [];
var len__5726__auto___9877 = arguments.length;
var i__5727__auto___9878 = (0);
while(true){
if((i__5727__auto___9878 < len__5726__auto___9877)){
args9833.push((arguments[i__5727__auto___9878]));

var G__9879 = (i__5727__auto___9878 + (1));
i__5727__auto___9878 = G__9879;
continue;
} else {
}
break;
}

var G__9835 = args9833.length;
switch (G__9835) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9833.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7668__auto___9881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___9881,out){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___9881,out){
return (function (state_9856){
var state_val_9857 = (state_9856[(1)]);
if((state_val_9857 === (7))){
var inst_9852 = (state_9856[(2)]);
var state_9856__$1 = state_9856;
var statearr_9858_9882 = state_9856__$1;
(statearr_9858_9882[(2)] = inst_9852);

(statearr_9858_9882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9857 === (1))){
var state_9856__$1 = state_9856;
var statearr_9859_9883 = state_9856__$1;
(statearr_9859_9883[(2)] = null);

(statearr_9859_9883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9857 === (4))){
var inst_9838 = (state_9856[(7)]);
var inst_9838__$1 = (state_9856[(2)]);
var inst_9839 = (inst_9838__$1 == null);
var state_9856__$1 = (function (){var statearr_9860 = state_9856;
(statearr_9860[(7)] = inst_9838__$1);

return statearr_9860;
})();
if(cljs.core.truth_(inst_9839)){
var statearr_9861_9884 = state_9856__$1;
(statearr_9861_9884[(1)] = (5));

} else {
var statearr_9862_9885 = state_9856__$1;
(statearr_9862_9885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9857 === (6))){
var inst_9838 = (state_9856[(7)]);
var inst_9843 = p.call(null,inst_9838);
var state_9856__$1 = state_9856;
if(cljs.core.truth_(inst_9843)){
var statearr_9863_9886 = state_9856__$1;
(statearr_9863_9886[(1)] = (8));

} else {
var statearr_9864_9887 = state_9856__$1;
(statearr_9864_9887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9857 === (3))){
var inst_9854 = (state_9856[(2)]);
var state_9856__$1 = state_9856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9856__$1,inst_9854);
} else {
if((state_val_9857 === (2))){
var state_9856__$1 = state_9856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9856__$1,(4),ch);
} else {
if((state_val_9857 === (11))){
var inst_9846 = (state_9856[(2)]);
var state_9856__$1 = state_9856;
var statearr_9865_9888 = state_9856__$1;
(statearr_9865_9888[(2)] = inst_9846);

(statearr_9865_9888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9857 === (9))){
var state_9856__$1 = state_9856;
var statearr_9866_9889 = state_9856__$1;
(statearr_9866_9889[(2)] = null);

(statearr_9866_9889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9857 === (5))){
var inst_9841 = cljs.core.async.close_BANG_.call(null,out);
var state_9856__$1 = state_9856;
var statearr_9867_9890 = state_9856__$1;
(statearr_9867_9890[(2)] = inst_9841);

(statearr_9867_9890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9857 === (10))){
var inst_9849 = (state_9856[(2)]);
var state_9856__$1 = (function (){var statearr_9868 = state_9856;
(statearr_9868[(8)] = inst_9849);

return statearr_9868;
})();
var statearr_9869_9891 = state_9856__$1;
(statearr_9869_9891[(2)] = null);

(statearr_9869_9891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9857 === (8))){
var inst_9838 = (state_9856[(7)]);
var state_9856__$1 = state_9856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9856__$1,(11),out,inst_9838);
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
});})(c__7668__auto___9881,out))
;
return ((function (switch__7556__auto__,c__7668__auto___9881,out){
return (function() {
var cljs$core$async$state_machine__7557__auto__ = null;
var cljs$core$async$state_machine__7557__auto____0 = (function (){
var statearr_9873 = [null,null,null,null,null,null,null,null,null];
(statearr_9873[(0)] = cljs$core$async$state_machine__7557__auto__);

(statearr_9873[(1)] = (1));

return statearr_9873;
});
var cljs$core$async$state_machine__7557__auto____1 = (function (state_9856){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_9856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e9874){if((e9874 instanceof Object)){
var ex__7560__auto__ = e9874;
var statearr_9875_9892 = state_9856;
(statearr_9875_9892[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9893 = state_9856;
state_9856 = G__9893;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$state_machine__7557__auto__ = function(state_9856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7557__auto____1.call(this,state_9856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7557__auto____0;
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7557__auto____1;
return cljs$core$async$state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___9881,out))
})();
var state__7670__auto__ = (function (){var statearr_9876 = f__7669__auto__.call(null);
(statearr_9876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___9881);

return statearr_9876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___9881,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args9894 = [];
var len__5726__auto___9897 = arguments.length;
var i__5727__auto___9898 = (0);
while(true){
if((i__5727__auto___9898 < len__5726__auto___9897)){
args9894.push((arguments[i__5727__auto___9898]));

var G__9899 = (i__5727__auto___9898 + (1));
i__5727__auto___9898 = G__9899;
continue;
} else {
}
break;
}

var G__9896 = args9894.length;
switch (G__9896) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9894.length)].join('')));

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
var c__7668__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto__){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto__){
return (function (state_10066){
var state_val_10067 = (state_10066[(1)]);
if((state_val_10067 === (7))){
var inst_10062 = (state_10066[(2)]);
var state_10066__$1 = state_10066;
var statearr_10068_10109 = state_10066__$1;
(statearr_10068_10109[(2)] = inst_10062);

(statearr_10068_10109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (20))){
var inst_10032 = (state_10066[(7)]);
var inst_10043 = (state_10066[(2)]);
var inst_10044 = cljs.core.next.call(null,inst_10032);
var inst_10018 = inst_10044;
var inst_10019 = null;
var inst_10020 = (0);
var inst_10021 = (0);
var state_10066__$1 = (function (){var statearr_10069 = state_10066;
(statearr_10069[(8)] = inst_10018);

(statearr_10069[(9)] = inst_10043);

(statearr_10069[(10)] = inst_10021);

(statearr_10069[(11)] = inst_10020);

(statearr_10069[(12)] = inst_10019);

return statearr_10069;
})();
var statearr_10070_10110 = state_10066__$1;
(statearr_10070_10110[(2)] = null);

(statearr_10070_10110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (1))){
var state_10066__$1 = state_10066;
var statearr_10071_10111 = state_10066__$1;
(statearr_10071_10111[(2)] = null);

(statearr_10071_10111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (4))){
var inst_10007 = (state_10066[(13)]);
var inst_10007__$1 = (state_10066[(2)]);
var inst_10008 = (inst_10007__$1 == null);
var state_10066__$1 = (function (){var statearr_10072 = state_10066;
(statearr_10072[(13)] = inst_10007__$1);

return statearr_10072;
})();
if(cljs.core.truth_(inst_10008)){
var statearr_10073_10112 = state_10066__$1;
(statearr_10073_10112[(1)] = (5));

} else {
var statearr_10074_10113 = state_10066__$1;
(statearr_10074_10113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (15))){
var state_10066__$1 = state_10066;
var statearr_10078_10114 = state_10066__$1;
(statearr_10078_10114[(2)] = null);

(statearr_10078_10114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (21))){
var state_10066__$1 = state_10066;
var statearr_10079_10115 = state_10066__$1;
(statearr_10079_10115[(2)] = null);

(statearr_10079_10115[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (13))){
var inst_10018 = (state_10066[(8)]);
var inst_10021 = (state_10066[(10)]);
var inst_10020 = (state_10066[(11)]);
var inst_10019 = (state_10066[(12)]);
var inst_10028 = (state_10066[(2)]);
var inst_10029 = (inst_10021 + (1));
var tmp10075 = inst_10018;
var tmp10076 = inst_10020;
var tmp10077 = inst_10019;
var inst_10018__$1 = tmp10075;
var inst_10019__$1 = tmp10077;
var inst_10020__$1 = tmp10076;
var inst_10021__$1 = inst_10029;
var state_10066__$1 = (function (){var statearr_10080 = state_10066;
(statearr_10080[(8)] = inst_10018__$1);

(statearr_10080[(10)] = inst_10021__$1);

(statearr_10080[(11)] = inst_10020__$1);

(statearr_10080[(14)] = inst_10028);

(statearr_10080[(12)] = inst_10019__$1);

return statearr_10080;
})();
var statearr_10081_10116 = state_10066__$1;
(statearr_10081_10116[(2)] = null);

(statearr_10081_10116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (22))){
var state_10066__$1 = state_10066;
var statearr_10082_10117 = state_10066__$1;
(statearr_10082_10117[(2)] = null);

(statearr_10082_10117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (6))){
var inst_10007 = (state_10066[(13)]);
var inst_10016 = f.call(null,inst_10007);
var inst_10017 = cljs.core.seq.call(null,inst_10016);
var inst_10018 = inst_10017;
var inst_10019 = null;
var inst_10020 = (0);
var inst_10021 = (0);
var state_10066__$1 = (function (){var statearr_10083 = state_10066;
(statearr_10083[(8)] = inst_10018);

(statearr_10083[(10)] = inst_10021);

(statearr_10083[(11)] = inst_10020);

(statearr_10083[(12)] = inst_10019);

return statearr_10083;
})();
var statearr_10084_10118 = state_10066__$1;
(statearr_10084_10118[(2)] = null);

(statearr_10084_10118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (17))){
var inst_10032 = (state_10066[(7)]);
var inst_10036 = cljs.core.chunk_first.call(null,inst_10032);
var inst_10037 = cljs.core.chunk_rest.call(null,inst_10032);
var inst_10038 = cljs.core.count.call(null,inst_10036);
var inst_10018 = inst_10037;
var inst_10019 = inst_10036;
var inst_10020 = inst_10038;
var inst_10021 = (0);
var state_10066__$1 = (function (){var statearr_10085 = state_10066;
(statearr_10085[(8)] = inst_10018);

(statearr_10085[(10)] = inst_10021);

(statearr_10085[(11)] = inst_10020);

(statearr_10085[(12)] = inst_10019);

return statearr_10085;
})();
var statearr_10086_10119 = state_10066__$1;
(statearr_10086_10119[(2)] = null);

(statearr_10086_10119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (3))){
var inst_10064 = (state_10066[(2)]);
var state_10066__$1 = state_10066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10066__$1,inst_10064);
} else {
if((state_val_10067 === (12))){
var inst_10052 = (state_10066[(2)]);
var state_10066__$1 = state_10066;
var statearr_10087_10120 = state_10066__$1;
(statearr_10087_10120[(2)] = inst_10052);

(statearr_10087_10120[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (2))){
var state_10066__$1 = state_10066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10066__$1,(4),in$);
} else {
if((state_val_10067 === (23))){
var inst_10060 = (state_10066[(2)]);
var state_10066__$1 = state_10066;
var statearr_10088_10121 = state_10066__$1;
(statearr_10088_10121[(2)] = inst_10060);

(statearr_10088_10121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (19))){
var inst_10047 = (state_10066[(2)]);
var state_10066__$1 = state_10066;
var statearr_10089_10122 = state_10066__$1;
(statearr_10089_10122[(2)] = inst_10047);

(statearr_10089_10122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (11))){
var inst_10032 = (state_10066[(7)]);
var inst_10018 = (state_10066[(8)]);
var inst_10032__$1 = cljs.core.seq.call(null,inst_10018);
var state_10066__$1 = (function (){var statearr_10090 = state_10066;
(statearr_10090[(7)] = inst_10032__$1);

return statearr_10090;
})();
if(inst_10032__$1){
var statearr_10091_10123 = state_10066__$1;
(statearr_10091_10123[(1)] = (14));

} else {
var statearr_10092_10124 = state_10066__$1;
(statearr_10092_10124[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (9))){
var inst_10054 = (state_10066[(2)]);
var inst_10055 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_10066__$1 = (function (){var statearr_10093 = state_10066;
(statearr_10093[(15)] = inst_10054);

return statearr_10093;
})();
if(cljs.core.truth_(inst_10055)){
var statearr_10094_10125 = state_10066__$1;
(statearr_10094_10125[(1)] = (21));

} else {
var statearr_10095_10126 = state_10066__$1;
(statearr_10095_10126[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (5))){
var inst_10010 = cljs.core.async.close_BANG_.call(null,out);
var state_10066__$1 = state_10066;
var statearr_10096_10127 = state_10066__$1;
(statearr_10096_10127[(2)] = inst_10010);

(statearr_10096_10127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (14))){
var inst_10032 = (state_10066[(7)]);
var inst_10034 = cljs.core.chunked_seq_QMARK_.call(null,inst_10032);
var state_10066__$1 = state_10066;
if(inst_10034){
var statearr_10097_10128 = state_10066__$1;
(statearr_10097_10128[(1)] = (17));

} else {
var statearr_10098_10129 = state_10066__$1;
(statearr_10098_10129[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (16))){
var inst_10050 = (state_10066[(2)]);
var state_10066__$1 = state_10066;
var statearr_10099_10130 = state_10066__$1;
(statearr_10099_10130[(2)] = inst_10050);

(statearr_10099_10130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10067 === (10))){
var inst_10021 = (state_10066[(10)]);
var inst_10019 = (state_10066[(12)]);
var inst_10026 = cljs.core._nth.call(null,inst_10019,inst_10021);
var state_10066__$1 = state_10066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10066__$1,(13),out,inst_10026);
} else {
if((state_val_10067 === (18))){
var inst_10032 = (state_10066[(7)]);
var inst_10041 = cljs.core.first.call(null,inst_10032);
var state_10066__$1 = state_10066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10066__$1,(20),out,inst_10041);
} else {
if((state_val_10067 === (8))){
var inst_10021 = (state_10066[(10)]);
var inst_10020 = (state_10066[(11)]);
var inst_10023 = (inst_10021 < inst_10020);
var inst_10024 = inst_10023;
var state_10066__$1 = state_10066;
if(cljs.core.truth_(inst_10024)){
var statearr_10100_10131 = state_10066__$1;
(statearr_10100_10131[(1)] = (10));

} else {
var statearr_10101_10132 = state_10066__$1;
(statearr_10101_10132[(1)] = (11));

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
});})(c__7668__auto__))
;
return ((function (switch__7556__auto__,c__7668__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7557__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7557__auto____0 = (function (){
var statearr_10105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10105[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7557__auto__);

(statearr_10105[(1)] = (1));

return statearr_10105;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7557__auto____1 = (function (state_10066){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_10066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e10106){if((e10106 instanceof Object)){
var ex__7560__auto__ = e10106;
var statearr_10107_10133 = state_10066;
(statearr_10107_10133[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10134 = state_10066;
state_10066 = G__10134;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7557__auto__ = function(state_10066){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7557__auto____1.call(this,state_10066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7557__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7557__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto__))
})();
var state__7670__auto__ = (function (){var statearr_10108 = f__7669__auto__.call(null);
(statearr_10108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto__);

return statearr_10108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto__))
);

return c__7668__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args10135 = [];
var len__5726__auto___10138 = arguments.length;
var i__5727__auto___10139 = (0);
while(true){
if((i__5727__auto___10139 < len__5726__auto___10138)){
args10135.push((arguments[i__5727__auto___10139]));

var G__10140 = (i__5727__auto___10139 + (1));
i__5727__auto___10139 = G__10140;
continue;
} else {
}
break;
}

var G__10137 = args10135.length;
switch (G__10137) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10135.length)].join('')));

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
var args10142 = [];
var len__5726__auto___10145 = arguments.length;
var i__5727__auto___10146 = (0);
while(true){
if((i__5727__auto___10146 < len__5726__auto___10145)){
args10142.push((arguments[i__5727__auto___10146]));

var G__10147 = (i__5727__auto___10146 + (1));
i__5727__auto___10146 = G__10147;
continue;
} else {
}
break;
}

var G__10144 = args10142.length;
switch (G__10144) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10142.length)].join('')));

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
var args10149 = [];
var len__5726__auto___10200 = arguments.length;
var i__5727__auto___10201 = (0);
while(true){
if((i__5727__auto___10201 < len__5726__auto___10200)){
args10149.push((arguments[i__5727__auto___10201]));

var G__10202 = (i__5727__auto___10201 + (1));
i__5727__auto___10201 = G__10202;
continue;
} else {
}
break;
}

var G__10151 = args10149.length;
switch (G__10151) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10149.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7668__auto___10204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___10204,out){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___10204,out){
return (function (state_10175){
var state_val_10176 = (state_10175[(1)]);
if((state_val_10176 === (7))){
var inst_10170 = (state_10175[(2)]);
var state_10175__$1 = state_10175;
var statearr_10177_10205 = state_10175__$1;
(statearr_10177_10205[(2)] = inst_10170);

(statearr_10177_10205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (1))){
var inst_10152 = null;
var state_10175__$1 = (function (){var statearr_10178 = state_10175;
(statearr_10178[(7)] = inst_10152);

return statearr_10178;
})();
var statearr_10179_10206 = state_10175__$1;
(statearr_10179_10206[(2)] = null);

(statearr_10179_10206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (4))){
var inst_10155 = (state_10175[(8)]);
var inst_10155__$1 = (state_10175[(2)]);
var inst_10156 = (inst_10155__$1 == null);
var inst_10157 = cljs.core.not.call(null,inst_10156);
var state_10175__$1 = (function (){var statearr_10180 = state_10175;
(statearr_10180[(8)] = inst_10155__$1);

return statearr_10180;
})();
if(inst_10157){
var statearr_10181_10207 = state_10175__$1;
(statearr_10181_10207[(1)] = (5));

} else {
var statearr_10182_10208 = state_10175__$1;
(statearr_10182_10208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (6))){
var state_10175__$1 = state_10175;
var statearr_10183_10209 = state_10175__$1;
(statearr_10183_10209[(2)] = null);

(statearr_10183_10209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (3))){
var inst_10172 = (state_10175[(2)]);
var inst_10173 = cljs.core.async.close_BANG_.call(null,out);
var state_10175__$1 = (function (){var statearr_10184 = state_10175;
(statearr_10184[(9)] = inst_10172);

return statearr_10184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10175__$1,inst_10173);
} else {
if((state_val_10176 === (2))){
var state_10175__$1 = state_10175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10175__$1,(4),ch);
} else {
if((state_val_10176 === (11))){
var inst_10155 = (state_10175[(8)]);
var inst_10164 = (state_10175[(2)]);
var inst_10152 = inst_10155;
var state_10175__$1 = (function (){var statearr_10185 = state_10175;
(statearr_10185[(7)] = inst_10152);

(statearr_10185[(10)] = inst_10164);

return statearr_10185;
})();
var statearr_10186_10210 = state_10175__$1;
(statearr_10186_10210[(2)] = null);

(statearr_10186_10210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (9))){
var inst_10155 = (state_10175[(8)]);
var state_10175__$1 = state_10175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10175__$1,(11),out,inst_10155);
} else {
if((state_val_10176 === (5))){
var inst_10155 = (state_10175[(8)]);
var inst_10152 = (state_10175[(7)]);
var inst_10159 = cljs.core._EQ_.call(null,inst_10155,inst_10152);
var state_10175__$1 = state_10175;
if(inst_10159){
var statearr_10188_10211 = state_10175__$1;
(statearr_10188_10211[(1)] = (8));

} else {
var statearr_10189_10212 = state_10175__$1;
(statearr_10189_10212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (10))){
var inst_10167 = (state_10175[(2)]);
var state_10175__$1 = state_10175;
var statearr_10190_10213 = state_10175__$1;
(statearr_10190_10213[(2)] = inst_10167);

(statearr_10190_10213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10176 === (8))){
var inst_10152 = (state_10175[(7)]);
var tmp10187 = inst_10152;
var inst_10152__$1 = tmp10187;
var state_10175__$1 = (function (){var statearr_10191 = state_10175;
(statearr_10191[(7)] = inst_10152__$1);

return statearr_10191;
})();
var statearr_10192_10214 = state_10175__$1;
(statearr_10192_10214[(2)] = null);

(statearr_10192_10214[(1)] = (2));


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
});})(c__7668__auto___10204,out))
;
return ((function (switch__7556__auto__,c__7668__auto___10204,out){
return (function() {
var cljs$core$async$state_machine__7557__auto__ = null;
var cljs$core$async$state_machine__7557__auto____0 = (function (){
var statearr_10196 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10196[(0)] = cljs$core$async$state_machine__7557__auto__);

(statearr_10196[(1)] = (1));

return statearr_10196;
});
var cljs$core$async$state_machine__7557__auto____1 = (function (state_10175){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_10175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e10197){if((e10197 instanceof Object)){
var ex__7560__auto__ = e10197;
var statearr_10198_10215 = state_10175;
(statearr_10198_10215[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10216 = state_10175;
state_10175 = G__10216;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$state_machine__7557__auto__ = function(state_10175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7557__auto____1.call(this,state_10175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7557__auto____0;
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7557__auto____1;
return cljs$core$async$state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___10204,out))
})();
var state__7670__auto__ = (function (){var statearr_10199 = f__7669__auto__.call(null);
(statearr_10199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___10204);

return statearr_10199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___10204,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args10217 = [];
var len__5726__auto___10287 = arguments.length;
var i__5727__auto___10288 = (0);
while(true){
if((i__5727__auto___10288 < len__5726__auto___10287)){
args10217.push((arguments[i__5727__auto___10288]));

var G__10289 = (i__5727__auto___10288 + (1));
i__5727__auto___10288 = G__10289;
continue;
} else {
}
break;
}

var G__10219 = args10217.length;
switch (G__10219) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10217.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7668__auto___10291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___10291,out){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___10291,out){
return (function (state_10257){
var state_val_10258 = (state_10257[(1)]);
if((state_val_10258 === (7))){
var inst_10253 = (state_10257[(2)]);
var state_10257__$1 = state_10257;
var statearr_10259_10292 = state_10257__$1;
(statearr_10259_10292[(2)] = inst_10253);

(statearr_10259_10292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10258 === (1))){
var inst_10220 = (new Array(n));
var inst_10221 = inst_10220;
var inst_10222 = (0);
var state_10257__$1 = (function (){var statearr_10260 = state_10257;
(statearr_10260[(7)] = inst_10221);

(statearr_10260[(8)] = inst_10222);

return statearr_10260;
})();
var statearr_10261_10293 = state_10257__$1;
(statearr_10261_10293[(2)] = null);

(statearr_10261_10293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10258 === (4))){
var inst_10225 = (state_10257[(9)]);
var inst_10225__$1 = (state_10257[(2)]);
var inst_10226 = (inst_10225__$1 == null);
var inst_10227 = cljs.core.not.call(null,inst_10226);
var state_10257__$1 = (function (){var statearr_10262 = state_10257;
(statearr_10262[(9)] = inst_10225__$1);

return statearr_10262;
})();
if(inst_10227){
var statearr_10263_10294 = state_10257__$1;
(statearr_10263_10294[(1)] = (5));

} else {
var statearr_10264_10295 = state_10257__$1;
(statearr_10264_10295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10258 === (15))){
var inst_10247 = (state_10257[(2)]);
var state_10257__$1 = state_10257;
var statearr_10265_10296 = state_10257__$1;
(statearr_10265_10296[(2)] = inst_10247);

(statearr_10265_10296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10258 === (13))){
var state_10257__$1 = state_10257;
var statearr_10266_10297 = state_10257__$1;
(statearr_10266_10297[(2)] = null);

(statearr_10266_10297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10258 === (6))){
var inst_10222 = (state_10257[(8)]);
var inst_10243 = (inst_10222 > (0));
var state_10257__$1 = state_10257;
if(cljs.core.truth_(inst_10243)){
var statearr_10267_10298 = state_10257__$1;
(statearr_10267_10298[(1)] = (12));

} else {
var statearr_10268_10299 = state_10257__$1;
(statearr_10268_10299[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10258 === (3))){
var inst_10255 = (state_10257[(2)]);
var state_10257__$1 = state_10257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10257__$1,inst_10255);
} else {
if((state_val_10258 === (12))){
var inst_10221 = (state_10257[(7)]);
var inst_10245 = cljs.core.vec.call(null,inst_10221);
var state_10257__$1 = state_10257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10257__$1,(15),out,inst_10245);
} else {
if((state_val_10258 === (2))){
var state_10257__$1 = state_10257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10257__$1,(4),ch);
} else {
if((state_val_10258 === (11))){
var inst_10237 = (state_10257[(2)]);
var inst_10238 = (new Array(n));
var inst_10221 = inst_10238;
var inst_10222 = (0);
var state_10257__$1 = (function (){var statearr_10269 = state_10257;
(statearr_10269[(7)] = inst_10221);

(statearr_10269[(8)] = inst_10222);

(statearr_10269[(10)] = inst_10237);

return statearr_10269;
})();
var statearr_10270_10300 = state_10257__$1;
(statearr_10270_10300[(2)] = null);

(statearr_10270_10300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10258 === (9))){
var inst_10221 = (state_10257[(7)]);
var inst_10235 = cljs.core.vec.call(null,inst_10221);
var state_10257__$1 = state_10257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10257__$1,(11),out,inst_10235);
} else {
if((state_val_10258 === (5))){
var inst_10221 = (state_10257[(7)]);
var inst_10222 = (state_10257[(8)]);
var inst_10225 = (state_10257[(9)]);
var inst_10230 = (state_10257[(11)]);
var inst_10229 = (inst_10221[inst_10222] = inst_10225);
var inst_10230__$1 = (inst_10222 + (1));
var inst_10231 = (inst_10230__$1 < n);
var state_10257__$1 = (function (){var statearr_10271 = state_10257;
(statearr_10271[(11)] = inst_10230__$1);

(statearr_10271[(12)] = inst_10229);

return statearr_10271;
})();
if(cljs.core.truth_(inst_10231)){
var statearr_10272_10301 = state_10257__$1;
(statearr_10272_10301[(1)] = (8));

} else {
var statearr_10273_10302 = state_10257__$1;
(statearr_10273_10302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10258 === (14))){
var inst_10250 = (state_10257[(2)]);
var inst_10251 = cljs.core.async.close_BANG_.call(null,out);
var state_10257__$1 = (function (){var statearr_10275 = state_10257;
(statearr_10275[(13)] = inst_10250);

return statearr_10275;
})();
var statearr_10276_10303 = state_10257__$1;
(statearr_10276_10303[(2)] = inst_10251);

(statearr_10276_10303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10258 === (10))){
var inst_10241 = (state_10257[(2)]);
var state_10257__$1 = state_10257;
var statearr_10277_10304 = state_10257__$1;
(statearr_10277_10304[(2)] = inst_10241);

(statearr_10277_10304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10258 === (8))){
var inst_10221 = (state_10257[(7)]);
var inst_10230 = (state_10257[(11)]);
var tmp10274 = inst_10221;
var inst_10221__$1 = tmp10274;
var inst_10222 = inst_10230;
var state_10257__$1 = (function (){var statearr_10278 = state_10257;
(statearr_10278[(7)] = inst_10221__$1);

(statearr_10278[(8)] = inst_10222);

return statearr_10278;
})();
var statearr_10279_10305 = state_10257__$1;
(statearr_10279_10305[(2)] = null);

(statearr_10279_10305[(1)] = (2));


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
});})(c__7668__auto___10291,out))
;
return ((function (switch__7556__auto__,c__7668__auto___10291,out){
return (function() {
var cljs$core$async$state_machine__7557__auto__ = null;
var cljs$core$async$state_machine__7557__auto____0 = (function (){
var statearr_10283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10283[(0)] = cljs$core$async$state_machine__7557__auto__);

(statearr_10283[(1)] = (1));

return statearr_10283;
});
var cljs$core$async$state_machine__7557__auto____1 = (function (state_10257){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_10257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e10284){if((e10284 instanceof Object)){
var ex__7560__auto__ = e10284;
var statearr_10285_10306 = state_10257;
(statearr_10285_10306[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10307 = state_10257;
state_10257 = G__10307;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$state_machine__7557__auto__ = function(state_10257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7557__auto____1.call(this,state_10257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7557__auto____0;
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7557__auto____1;
return cljs$core$async$state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___10291,out))
})();
var state__7670__auto__ = (function (){var statearr_10286 = f__7669__auto__.call(null);
(statearr_10286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___10291);

return statearr_10286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___10291,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args10308 = [];
var len__5726__auto___10382 = arguments.length;
var i__5727__auto___10383 = (0);
while(true){
if((i__5727__auto___10383 < len__5726__auto___10382)){
args10308.push((arguments[i__5727__auto___10383]));

var G__10384 = (i__5727__auto___10383 + (1));
i__5727__auto___10383 = G__10384;
continue;
} else {
}
break;
}

var G__10310 = args10308.length;
switch (G__10310) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10308.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7668__auto___10386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7668__auto___10386,out){
return (function (){
var f__7669__auto__ = (function (){var switch__7556__auto__ = ((function (c__7668__auto___10386,out){
return (function (state_10352){
var state_val_10353 = (state_10352[(1)]);
if((state_val_10353 === (7))){
var inst_10348 = (state_10352[(2)]);
var state_10352__$1 = state_10352;
var statearr_10354_10387 = state_10352__$1;
(statearr_10354_10387[(2)] = inst_10348);

(statearr_10354_10387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (1))){
var inst_10311 = [];
var inst_10312 = inst_10311;
var inst_10313 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10352__$1 = (function (){var statearr_10355 = state_10352;
(statearr_10355[(7)] = inst_10313);

(statearr_10355[(8)] = inst_10312);

return statearr_10355;
})();
var statearr_10356_10388 = state_10352__$1;
(statearr_10356_10388[(2)] = null);

(statearr_10356_10388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (4))){
var inst_10316 = (state_10352[(9)]);
var inst_10316__$1 = (state_10352[(2)]);
var inst_10317 = (inst_10316__$1 == null);
var inst_10318 = cljs.core.not.call(null,inst_10317);
var state_10352__$1 = (function (){var statearr_10357 = state_10352;
(statearr_10357[(9)] = inst_10316__$1);

return statearr_10357;
})();
if(inst_10318){
var statearr_10358_10389 = state_10352__$1;
(statearr_10358_10389[(1)] = (5));

} else {
var statearr_10359_10390 = state_10352__$1;
(statearr_10359_10390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (15))){
var inst_10342 = (state_10352[(2)]);
var state_10352__$1 = state_10352;
var statearr_10360_10391 = state_10352__$1;
(statearr_10360_10391[(2)] = inst_10342);

(statearr_10360_10391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (13))){
var state_10352__$1 = state_10352;
var statearr_10361_10392 = state_10352__$1;
(statearr_10361_10392[(2)] = null);

(statearr_10361_10392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (6))){
var inst_10312 = (state_10352[(8)]);
var inst_10337 = inst_10312.length;
var inst_10338 = (inst_10337 > (0));
var state_10352__$1 = state_10352;
if(cljs.core.truth_(inst_10338)){
var statearr_10362_10393 = state_10352__$1;
(statearr_10362_10393[(1)] = (12));

} else {
var statearr_10363_10394 = state_10352__$1;
(statearr_10363_10394[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (3))){
var inst_10350 = (state_10352[(2)]);
var state_10352__$1 = state_10352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10352__$1,inst_10350);
} else {
if((state_val_10353 === (12))){
var inst_10312 = (state_10352[(8)]);
var inst_10340 = cljs.core.vec.call(null,inst_10312);
var state_10352__$1 = state_10352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10352__$1,(15),out,inst_10340);
} else {
if((state_val_10353 === (2))){
var state_10352__$1 = state_10352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10352__$1,(4),ch);
} else {
if((state_val_10353 === (11))){
var inst_10316 = (state_10352[(9)]);
var inst_10320 = (state_10352[(10)]);
var inst_10330 = (state_10352[(2)]);
var inst_10331 = [];
var inst_10332 = inst_10331.push(inst_10316);
var inst_10312 = inst_10331;
var inst_10313 = inst_10320;
var state_10352__$1 = (function (){var statearr_10364 = state_10352;
(statearr_10364[(11)] = inst_10332);

(statearr_10364[(7)] = inst_10313);

(statearr_10364[(8)] = inst_10312);

(statearr_10364[(12)] = inst_10330);

return statearr_10364;
})();
var statearr_10365_10395 = state_10352__$1;
(statearr_10365_10395[(2)] = null);

(statearr_10365_10395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (9))){
var inst_10312 = (state_10352[(8)]);
var inst_10328 = cljs.core.vec.call(null,inst_10312);
var state_10352__$1 = state_10352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10352__$1,(11),out,inst_10328);
} else {
if((state_val_10353 === (5))){
var inst_10316 = (state_10352[(9)]);
var inst_10313 = (state_10352[(7)]);
var inst_10320 = (state_10352[(10)]);
var inst_10320__$1 = f.call(null,inst_10316);
var inst_10321 = cljs.core._EQ_.call(null,inst_10320__$1,inst_10313);
var inst_10322 = cljs.core.keyword_identical_QMARK_.call(null,inst_10313,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10323 = (inst_10321) || (inst_10322);
var state_10352__$1 = (function (){var statearr_10366 = state_10352;
(statearr_10366[(10)] = inst_10320__$1);

return statearr_10366;
})();
if(cljs.core.truth_(inst_10323)){
var statearr_10367_10396 = state_10352__$1;
(statearr_10367_10396[(1)] = (8));

} else {
var statearr_10368_10397 = state_10352__$1;
(statearr_10368_10397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (14))){
var inst_10345 = (state_10352[(2)]);
var inst_10346 = cljs.core.async.close_BANG_.call(null,out);
var state_10352__$1 = (function (){var statearr_10370 = state_10352;
(statearr_10370[(13)] = inst_10345);

return statearr_10370;
})();
var statearr_10371_10398 = state_10352__$1;
(statearr_10371_10398[(2)] = inst_10346);

(statearr_10371_10398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (10))){
var inst_10335 = (state_10352[(2)]);
var state_10352__$1 = state_10352;
var statearr_10372_10399 = state_10352__$1;
(statearr_10372_10399[(2)] = inst_10335);

(statearr_10372_10399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (8))){
var inst_10316 = (state_10352[(9)]);
var inst_10312 = (state_10352[(8)]);
var inst_10320 = (state_10352[(10)]);
var inst_10325 = inst_10312.push(inst_10316);
var tmp10369 = inst_10312;
var inst_10312__$1 = tmp10369;
var inst_10313 = inst_10320;
var state_10352__$1 = (function (){var statearr_10373 = state_10352;
(statearr_10373[(7)] = inst_10313);

(statearr_10373[(8)] = inst_10312__$1);

(statearr_10373[(14)] = inst_10325);

return statearr_10373;
})();
var statearr_10374_10400 = state_10352__$1;
(statearr_10374_10400[(2)] = null);

(statearr_10374_10400[(1)] = (2));


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
});})(c__7668__auto___10386,out))
;
return ((function (switch__7556__auto__,c__7668__auto___10386,out){
return (function() {
var cljs$core$async$state_machine__7557__auto__ = null;
var cljs$core$async$state_machine__7557__auto____0 = (function (){
var statearr_10378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10378[(0)] = cljs$core$async$state_machine__7557__auto__);

(statearr_10378[(1)] = (1));

return statearr_10378;
});
var cljs$core$async$state_machine__7557__auto____1 = (function (state_10352){
while(true){
var ret_value__7558__auto__ = (function (){try{while(true){
var result__7559__auto__ = switch__7556__auto__.call(null,state_10352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7559__auto__;
}
break;
}
}catch (e10379){if((e10379 instanceof Object)){
var ex__7560__auto__ = e10379;
var statearr_10380_10401 = state_10352;
(statearr_10380_10401[(5)] = ex__7560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10402 = state_10352;
state_10352 = G__10402;
continue;
} else {
return ret_value__7558__auto__;
}
break;
}
});
cljs$core$async$state_machine__7557__auto__ = function(state_10352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7557__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7557__auto____1.call(this,state_10352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7557__auto____0;
cljs$core$async$state_machine__7557__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7557__auto____1;
return cljs$core$async$state_machine__7557__auto__;
})()
;})(switch__7556__auto__,c__7668__auto___10386,out))
})();
var state__7670__auto__ = (function (){var statearr_10381 = f__7669__auto__.call(null);
(statearr_10381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7668__auto___10386);

return statearr_10381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7670__auto__);
});})(c__7668__auto___10386,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map