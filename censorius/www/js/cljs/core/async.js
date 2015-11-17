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
if(typeof cljs.core.async.t_cljs$core$async7847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7847 = (function (fn_handler,f,meta7848){
this.fn_handler = fn_handler;
this.f = f;
this.meta7848 = meta7848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7849,meta7848__$1){
var self__ = this;
var _7849__$1 = this;
return (new cljs.core.async.t_cljs$core$async7847(self__.fn_handler,self__.f,meta7848__$1));
});

cljs.core.async.t_cljs$core$async7847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7849){
var self__ = this;
var _7849__$1 = this;
return self__.meta7848;
});

cljs.core.async.t_cljs$core$async7847.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta7848","meta7848",773950278,null)], null);
});

cljs.core.async.t_cljs$core$async7847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7847";

cljs.core.async.t_cljs$core$async7847.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7847");
});

cljs.core.async.__GT_t_cljs$core$async7847 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async7847(fn_handler__$1,f__$1,meta7848){
return (new cljs.core.async.t_cljs$core$async7847(fn_handler__$1,f__$1,meta7848));
});

}

return (new cljs.core.async.t_cljs$core$async7847(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args7852 = [];
var len__5726__auto___7855 = arguments.length;
var i__5727__auto___7856 = (0);
while(true){
if((i__5727__auto___7856 < len__5726__auto___7855)){
args7852.push((arguments[i__5727__auto___7856]));

var G__7857 = (i__5727__auto___7856 + (1));
i__5727__auto___7856 = G__7857;
continue;
} else {
}
break;
}

var G__7854 = args7852.length;
switch (G__7854) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7852.length)].join('')));

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
var args7859 = [];
var len__5726__auto___7862 = arguments.length;
var i__5727__auto___7863 = (0);
while(true){
if((i__5727__auto___7863 < len__5726__auto___7862)){
args7859.push((arguments[i__5727__auto___7863]));

var G__7864 = (i__5727__auto___7863 + (1));
i__5727__auto___7863 = G__7864;
continue;
} else {
}
break;
}

var G__7861 = args7859.length;
switch (G__7861) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7859.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7866 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7866);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7866,ret){
return (function (){
return fn1.call(null,val_7866);
});})(val_7866,ret))
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
var args7867 = [];
var len__5726__auto___7870 = arguments.length;
var i__5727__auto___7871 = (0);
while(true){
if((i__5727__auto___7871 < len__5726__auto___7870)){
args7867.push((arguments[i__5727__auto___7871]));

var G__7872 = (i__5727__auto___7871 + (1));
i__5727__auto___7871 = G__7872;
continue;
} else {
}
break;
}

var G__7869 = args7867.length;
switch (G__7869) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7867.length)].join('')));

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
var n__5571__auto___7874 = n;
var x_7875 = (0);
while(true){
if((x_7875 < n__5571__auto___7874)){
(a[x_7875] = (0));

var G__7876 = (x_7875 + (1));
x_7875 = G__7876;
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

var G__7877 = (i + (1));
i = G__7877;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7881 = (function (alt_flag,flag,meta7882){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7882 = meta7882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7883,meta7882__$1){
var self__ = this;
var _7883__$1 = this;
return (new cljs.core.async.t_cljs$core$async7881(self__.alt_flag,self__.flag,meta7882__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7883){
var self__ = this;
var _7883__$1 = this;
return self__.meta7882;
});})(flag))
;

cljs.core.async.t_cljs$core$async7881.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7881.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7882","meta7882",977954407,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7881";

cljs.core.async.t_cljs$core$async7881.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7881");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7881 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7881(alt_flag__$1,flag__$1,meta7882){
return (new cljs.core.async.t_cljs$core$async7881(alt_flag__$1,flag__$1,meta7882));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7881(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7887 = (function (alt_handler,flag,cb,meta7888){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7888 = meta7888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7889,meta7888__$1){
var self__ = this;
var _7889__$1 = this;
return (new cljs.core.async.t_cljs$core$async7887(self__.alt_handler,self__.flag,self__.cb,meta7888__$1));
});

cljs.core.async.t_cljs$core$async7887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7889){
var self__ = this;
var _7889__$1 = this;
return self__.meta7888;
});

cljs.core.async.t_cljs$core$async7887.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7887.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7887.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7888","meta7888",-1841802175,null)], null);
});

cljs.core.async.t_cljs$core$async7887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7887";

cljs.core.async.t_cljs$core$async7887.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7887");
});

cljs.core.async.__GT_t_cljs$core$async7887 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7887(alt_handler__$1,flag__$1,cb__$1,meta7888){
return (new cljs.core.async.t_cljs$core$async7887(alt_handler__$1,flag__$1,cb__$1,meta7888));
});

}

return (new cljs.core.async.t_cljs$core$async7887(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__7890_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7890_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7891_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7891_SHARP_,port], null));
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
var G__7892 = (i + (1));
i = G__7892;
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
var len__5726__auto___7898 = arguments.length;
var i__5727__auto___7899 = (0);
while(true){
if((i__5727__auto___7899 < len__5726__auto___7898)){
args__5733__auto__.push((arguments[i__5727__auto___7899]));

var G__7900 = (i__5727__auto___7899 + (1));
i__5727__auto___7899 = G__7900;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7895){
var map__7896 = p__7895;
var map__7896__$1 = ((((!((map__7896 == null)))?((((map__7896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7896):map__7896);
var opts = map__7896__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7893){
var G__7894 = cljs.core.first.call(null,seq7893);
var seq7893__$1 = cljs.core.next.call(null,seq7893);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7894,seq7893__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args7901 = [];
var len__5726__auto___7951 = arguments.length;
var i__5727__auto___7952 = (0);
while(true){
if((i__5727__auto___7952 < len__5726__auto___7951)){
args7901.push((arguments[i__5727__auto___7952]));

var G__7953 = (i__5727__auto___7952 + (1));
i__5727__auto___7952 = G__7953;
continue;
} else {
}
break;
}

var G__7903 = args7901.length;
switch (G__7903) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7901.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7799__auto___7955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___7955){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___7955){
return (function (state_7927){
var state_val_7928 = (state_7927[(1)]);
if((state_val_7928 === (7))){
var inst_7923 = (state_7927[(2)]);
var state_7927__$1 = state_7927;
var statearr_7929_7956 = state_7927__$1;
(statearr_7929_7956[(2)] = inst_7923);

(statearr_7929_7956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (1))){
var state_7927__$1 = state_7927;
var statearr_7930_7957 = state_7927__$1;
(statearr_7930_7957[(2)] = null);

(statearr_7930_7957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (4))){
var inst_7906 = (state_7927[(7)]);
var inst_7906__$1 = (state_7927[(2)]);
var inst_7907 = (inst_7906__$1 == null);
var state_7927__$1 = (function (){var statearr_7931 = state_7927;
(statearr_7931[(7)] = inst_7906__$1);

return statearr_7931;
})();
if(cljs.core.truth_(inst_7907)){
var statearr_7932_7958 = state_7927__$1;
(statearr_7932_7958[(1)] = (5));

} else {
var statearr_7933_7959 = state_7927__$1;
(statearr_7933_7959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (13))){
var state_7927__$1 = state_7927;
var statearr_7934_7960 = state_7927__$1;
(statearr_7934_7960[(2)] = null);

(statearr_7934_7960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (6))){
var inst_7906 = (state_7927[(7)]);
var state_7927__$1 = state_7927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7927__$1,(11),to,inst_7906);
} else {
if((state_val_7928 === (3))){
var inst_7925 = (state_7927[(2)]);
var state_7927__$1 = state_7927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7927__$1,inst_7925);
} else {
if((state_val_7928 === (12))){
var state_7927__$1 = state_7927;
var statearr_7935_7961 = state_7927__$1;
(statearr_7935_7961[(2)] = null);

(statearr_7935_7961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (2))){
var state_7927__$1 = state_7927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7927__$1,(4),from);
} else {
if((state_val_7928 === (11))){
var inst_7916 = (state_7927[(2)]);
var state_7927__$1 = state_7927;
if(cljs.core.truth_(inst_7916)){
var statearr_7936_7962 = state_7927__$1;
(statearr_7936_7962[(1)] = (12));

} else {
var statearr_7937_7963 = state_7927__$1;
(statearr_7937_7963[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (9))){
var state_7927__$1 = state_7927;
var statearr_7938_7964 = state_7927__$1;
(statearr_7938_7964[(2)] = null);

(statearr_7938_7964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (5))){
var state_7927__$1 = state_7927;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7939_7965 = state_7927__$1;
(statearr_7939_7965[(1)] = (8));

} else {
var statearr_7940_7966 = state_7927__$1;
(statearr_7940_7966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (14))){
var inst_7921 = (state_7927[(2)]);
var state_7927__$1 = state_7927;
var statearr_7941_7967 = state_7927__$1;
(statearr_7941_7967[(2)] = inst_7921);

(statearr_7941_7967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (10))){
var inst_7913 = (state_7927[(2)]);
var state_7927__$1 = state_7927;
var statearr_7942_7968 = state_7927__$1;
(statearr_7942_7968[(2)] = inst_7913);

(statearr_7942_7968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7928 === (8))){
var inst_7910 = cljs.core.async.close_BANG_.call(null,to);
var state_7927__$1 = state_7927;
var statearr_7943_7969 = state_7927__$1;
(statearr_7943_7969[(2)] = inst_7910);

(statearr_7943_7969[(1)] = (10));


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
});})(c__7799__auto___7955))
;
return ((function (switch__7743__auto__,c__7799__auto___7955){
return (function() {
var cljs$core$async$state_machine__7744__auto__ = null;
var cljs$core$async$state_machine__7744__auto____0 = (function (){
var statearr_7947 = [null,null,null,null,null,null,null,null];
(statearr_7947[(0)] = cljs$core$async$state_machine__7744__auto__);

(statearr_7947[(1)] = (1));

return statearr_7947;
});
var cljs$core$async$state_machine__7744__auto____1 = (function (state_7927){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_7927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e7948){if((e7948 instanceof Object)){
var ex__7747__auto__ = e7948;
var statearr_7949_7970 = state_7927;
(statearr_7949_7970[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7971 = state_7927;
state_7927 = G__7971;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$state_machine__7744__auto__ = function(state_7927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7744__auto____1.call(this,state_7927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7744__auto____0;
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7744__auto____1;
return cljs$core$async$state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___7955))
})();
var state__7801__auto__ = (function (){var statearr_7950 = f__7800__auto__.call(null);
(statearr_7950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___7955);

return statearr_7950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___7955))
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
return (function (p__8155){
var vec__8156 = p__8155;
var v = cljs.core.nth.call(null,vec__8156,(0),null);
var p = cljs.core.nth.call(null,vec__8156,(1),null);
var job = vec__8156;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7799__auto___8338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___8338,res,vec__8156,v,p,job,jobs,results){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___8338,res,vec__8156,v,p,job,jobs,results){
return (function (state_8161){
var state_val_8162 = (state_8161[(1)]);
if((state_val_8162 === (1))){
var state_8161__$1 = state_8161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8161__$1,(2),res,v);
} else {
if((state_val_8162 === (2))){
var inst_8158 = (state_8161[(2)]);
var inst_8159 = cljs.core.async.close_BANG_.call(null,res);
var state_8161__$1 = (function (){var statearr_8163 = state_8161;
(statearr_8163[(7)] = inst_8158);

return statearr_8163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8161__$1,inst_8159);
} else {
return null;
}
}
});})(c__7799__auto___8338,res,vec__8156,v,p,job,jobs,results))
;
return ((function (switch__7743__auto__,c__7799__auto___8338,res,vec__8156,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0 = (function (){
var statearr_8167 = [null,null,null,null,null,null,null,null];
(statearr_8167[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__);

(statearr_8167[(1)] = (1));

return statearr_8167;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1 = (function (state_8161){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_8161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e8168){if((e8168 instanceof Object)){
var ex__7747__auto__ = e8168;
var statearr_8169_8339 = state_8161;
(statearr_8169_8339[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8340 = state_8161;
state_8161 = G__8340;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__ = function(state_8161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1.call(this,state_8161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___8338,res,vec__8156,v,p,job,jobs,results))
})();
var state__7801__auto__ = (function (){var statearr_8170 = f__7800__auto__.call(null);
(statearr_8170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___8338);

return statearr_8170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___8338,res,vec__8156,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8171){
var vec__8172 = p__8171;
var v = cljs.core.nth.call(null,vec__8172,(0),null);
var p = cljs.core.nth.call(null,vec__8172,(1),null);
var job = vec__8172;
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
var n__5571__auto___8341 = n;
var __8342 = (0);
while(true){
if((__8342 < n__5571__auto___8341)){
var G__8173_8343 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__8173_8343) {
case "compute":
var c__7799__auto___8345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8342,c__7799__auto___8345,G__8173_8343,n__5571__auto___8341,jobs,results,process,async){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (__8342,c__7799__auto___8345,G__8173_8343,n__5571__auto___8341,jobs,results,process,async){
return (function (state_8186){
var state_val_8187 = (state_8186[(1)]);
if((state_val_8187 === (1))){
var state_8186__$1 = state_8186;
var statearr_8188_8346 = state_8186__$1;
(statearr_8188_8346[(2)] = null);

(statearr_8188_8346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8187 === (2))){
var state_8186__$1 = state_8186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8186__$1,(4),jobs);
} else {
if((state_val_8187 === (3))){
var inst_8184 = (state_8186[(2)]);
var state_8186__$1 = state_8186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8186__$1,inst_8184);
} else {
if((state_val_8187 === (4))){
var inst_8176 = (state_8186[(2)]);
var inst_8177 = process.call(null,inst_8176);
var state_8186__$1 = state_8186;
if(cljs.core.truth_(inst_8177)){
var statearr_8189_8347 = state_8186__$1;
(statearr_8189_8347[(1)] = (5));

} else {
var statearr_8190_8348 = state_8186__$1;
(statearr_8190_8348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8187 === (5))){
var state_8186__$1 = state_8186;
var statearr_8191_8349 = state_8186__$1;
(statearr_8191_8349[(2)] = null);

(statearr_8191_8349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8187 === (6))){
var state_8186__$1 = state_8186;
var statearr_8192_8350 = state_8186__$1;
(statearr_8192_8350[(2)] = null);

(statearr_8192_8350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8187 === (7))){
var inst_8182 = (state_8186[(2)]);
var state_8186__$1 = state_8186;
var statearr_8193_8351 = state_8186__$1;
(statearr_8193_8351[(2)] = inst_8182);

(statearr_8193_8351[(1)] = (3));


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
});})(__8342,c__7799__auto___8345,G__8173_8343,n__5571__auto___8341,jobs,results,process,async))
;
return ((function (__8342,switch__7743__auto__,c__7799__auto___8345,G__8173_8343,n__5571__auto___8341,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0 = (function (){
var statearr_8197 = [null,null,null,null,null,null,null];
(statearr_8197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__);

(statearr_8197[(1)] = (1));

return statearr_8197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1 = (function (state_8186){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_8186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e8198){if((e8198 instanceof Object)){
var ex__7747__auto__ = e8198;
var statearr_8199_8352 = state_8186;
(statearr_8199_8352[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8353 = state_8186;
state_8186 = G__8353;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__ = function(state_8186){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1.call(this,state_8186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__;
})()
;})(__8342,switch__7743__auto__,c__7799__auto___8345,G__8173_8343,n__5571__auto___8341,jobs,results,process,async))
})();
var state__7801__auto__ = (function (){var statearr_8200 = f__7800__auto__.call(null);
(statearr_8200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___8345);

return statearr_8200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(__8342,c__7799__auto___8345,G__8173_8343,n__5571__auto___8341,jobs,results,process,async))
);


break;
case "async":
var c__7799__auto___8354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8342,c__7799__auto___8354,G__8173_8343,n__5571__auto___8341,jobs,results,process,async){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (__8342,c__7799__auto___8354,G__8173_8343,n__5571__auto___8341,jobs,results,process,async){
return (function (state_8213){
var state_val_8214 = (state_8213[(1)]);
if((state_val_8214 === (1))){
var state_8213__$1 = state_8213;
var statearr_8215_8355 = state_8213__$1;
(statearr_8215_8355[(2)] = null);

(statearr_8215_8355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8214 === (2))){
var state_8213__$1 = state_8213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8213__$1,(4),jobs);
} else {
if((state_val_8214 === (3))){
var inst_8211 = (state_8213[(2)]);
var state_8213__$1 = state_8213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8213__$1,inst_8211);
} else {
if((state_val_8214 === (4))){
var inst_8203 = (state_8213[(2)]);
var inst_8204 = async.call(null,inst_8203);
var state_8213__$1 = state_8213;
if(cljs.core.truth_(inst_8204)){
var statearr_8216_8356 = state_8213__$1;
(statearr_8216_8356[(1)] = (5));

} else {
var statearr_8217_8357 = state_8213__$1;
(statearr_8217_8357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8214 === (5))){
var state_8213__$1 = state_8213;
var statearr_8218_8358 = state_8213__$1;
(statearr_8218_8358[(2)] = null);

(statearr_8218_8358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8214 === (6))){
var state_8213__$1 = state_8213;
var statearr_8219_8359 = state_8213__$1;
(statearr_8219_8359[(2)] = null);

(statearr_8219_8359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8214 === (7))){
var inst_8209 = (state_8213[(2)]);
var state_8213__$1 = state_8213;
var statearr_8220_8360 = state_8213__$1;
(statearr_8220_8360[(2)] = inst_8209);

(statearr_8220_8360[(1)] = (3));


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
});})(__8342,c__7799__auto___8354,G__8173_8343,n__5571__auto___8341,jobs,results,process,async))
;
return ((function (__8342,switch__7743__auto__,c__7799__auto___8354,G__8173_8343,n__5571__auto___8341,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0 = (function (){
var statearr_8224 = [null,null,null,null,null,null,null];
(statearr_8224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__);

(statearr_8224[(1)] = (1));

return statearr_8224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1 = (function (state_8213){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_8213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e8225){if((e8225 instanceof Object)){
var ex__7747__auto__ = e8225;
var statearr_8226_8361 = state_8213;
(statearr_8226_8361[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8362 = state_8213;
state_8213 = G__8362;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__ = function(state_8213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1.call(this,state_8213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__;
})()
;})(__8342,switch__7743__auto__,c__7799__auto___8354,G__8173_8343,n__5571__auto___8341,jobs,results,process,async))
})();
var state__7801__auto__ = (function (){var statearr_8227 = f__7800__auto__.call(null);
(statearr_8227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___8354);

return statearr_8227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(__8342,c__7799__auto___8354,G__8173_8343,n__5571__auto___8341,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__8363 = (__8342 + (1));
__8342 = G__8363;
continue;
} else {
}
break;
}

var c__7799__auto___8364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___8364,jobs,results,process,async){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___8364,jobs,results,process,async){
return (function (state_8249){
var state_val_8250 = (state_8249[(1)]);
if((state_val_8250 === (1))){
var state_8249__$1 = state_8249;
var statearr_8251_8365 = state_8249__$1;
(statearr_8251_8365[(2)] = null);

(statearr_8251_8365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8250 === (2))){
var state_8249__$1 = state_8249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8249__$1,(4),from);
} else {
if((state_val_8250 === (3))){
var inst_8247 = (state_8249[(2)]);
var state_8249__$1 = state_8249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8249__$1,inst_8247);
} else {
if((state_val_8250 === (4))){
var inst_8230 = (state_8249[(7)]);
var inst_8230__$1 = (state_8249[(2)]);
var inst_8231 = (inst_8230__$1 == null);
var state_8249__$1 = (function (){var statearr_8252 = state_8249;
(statearr_8252[(7)] = inst_8230__$1);

return statearr_8252;
})();
if(cljs.core.truth_(inst_8231)){
var statearr_8253_8366 = state_8249__$1;
(statearr_8253_8366[(1)] = (5));

} else {
var statearr_8254_8367 = state_8249__$1;
(statearr_8254_8367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8250 === (5))){
var inst_8233 = cljs.core.async.close_BANG_.call(null,jobs);
var state_8249__$1 = state_8249;
var statearr_8255_8368 = state_8249__$1;
(statearr_8255_8368[(2)] = inst_8233);

(statearr_8255_8368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8250 === (6))){
var inst_8230 = (state_8249[(7)]);
var inst_8235 = (state_8249[(8)]);
var inst_8235__$1 = cljs.core.async.chan.call(null,(1));
var inst_8236 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8237 = [inst_8230,inst_8235__$1];
var inst_8238 = (new cljs.core.PersistentVector(null,2,(5),inst_8236,inst_8237,null));
var state_8249__$1 = (function (){var statearr_8256 = state_8249;
(statearr_8256[(8)] = inst_8235__$1);

return statearr_8256;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8249__$1,(8),jobs,inst_8238);
} else {
if((state_val_8250 === (7))){
var inst_8245 = (state_8249[(2)]);
var state_8249__$1 = state_8249;
var statearr_8257_8369 = state_8249__$1;
(statearr_8257_8369[(2)] = inst_8245);

(statearr_8257_8369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8250 === (8))){
var inst_8235 = (state_8249[(8)]);
var inst_8240 = (state_8249[(2)]);
var state_8249__$1 = (function (){var statearr_8258 = state_8249;
(statearr_8258[(9)] = inst_8240);

return statearr_8258;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8249__$1,(9),results,inst_8235);
} else {
if((state_val_8250 === (9))){
var inst_8242 = (state_8249[(2)]);
var state_8249__$1 = (function (){var statearr_8259 = state_8249;
(statearr_8259[(10)] = inst_8242);

return statearr_8259;
})();
var statearr_8260_8370 = state_8249__$1;
(statearr_8260_8370[(2)] = null);

(statearr_8260_8370[(1)] = (2));


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
});})(c__7799__auto___8364,jobs,results,process,async))
;
return ((function (switch__7743__auto__,c__7799__auto___8364,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0 = (function (){
var statearr_8264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__);

(statearr_8264[(1)] = (1));

return statearr_8264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1 = (function (state_8249){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_8249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e8265){if((e8265 instanceof Object)){
var ex__7747__auto__ = e8265;
var statearr_8266_8371 = state_8249;
(statearr_8266_8371[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8372 = state_8249;
state_8249 = G__8372;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__ = function(state_8249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1.call(this,state_8249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___8364,jobs,results,process,async))
})();
var state__7801__auto__ = (function (){var statearr_8267 = f__7800__auto__.call(null);
(statearr_8267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___8364);

return statearr_8267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___8364,jobs,results,process,async))
);


var c__7799__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto__,jobs,results,process,async){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto__,jobs,results,process,async){
return (function (state_8305){
var state_val_8306 = (state_8305[(1)]);
if((state_val_8306 === (7))){
var inst_8301 = (state_8305[(2)]);
var state_8305__$1 = state_8305;
var statearr_8307_8373 = state_8305__$1;
(statearr_8307_8373[(2)] = inst_8301);

(statearr_8307_8373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (20))){
var state_8305__$1 = state_8305;
var statearr_8308_8374 = state_8305__$1;
(statearr_8308_8374[(2)] = null);

(statearr_8308_8374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (1))){
var state_8305__$1 = state_8305;
var statearr_8309_8375 = state_8305__$1;
(statearr_8309_8375[(2)] = null);

(statearr_8309_8375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (4))){
var inst_8270 = (state_8305[(7)]);
var inst_8270__$1 = (state_8305[(2)]);
var inst_8271 = (inst_8270__$1 == null);
var state_8305__$1 = (function (){var statearr_8310 = state_8305;
(statearr_8310[(7)] = inst_8270__$1);

return statearr_8310;
})();
if(cljs.core.truth_(inst_8271)){
var statearr_8311_8376 = state_8305__$1;
(statearr_8311_8376[(1)] = (5));

} else {
var statearr_8312_8377 = state_8305__$1;
(statearr_8312_8377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (15))){
var inst_8283 = (state_8305[(8)]);
var state_8305__$1 = state_8305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8305__$1,(18),to,inst_8283);
} else {
if((state_val_8306 === (21))){
var inst_8296 = (state_8305[(2)]);
var state_8305__$1 = state_8305;
var statearr_8313_8378 = state_8305__$1;
(statearr_8313_8378[(2)] = inst_8296);

(statearr_8313_8378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (13))){
var inst_8298 = (state_8305[(2)]);
var state_8305__$1 = (function (){var statearr_8314 = state_8305;
(statearr_8314[(9)] = inst_8298);

return statearr_8314;
})();
var statearr_8315_8379 = state_8305__$1;
(statearr_8315_8379[(2)] = null);

(statearr_8315_8379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (6))){
var inst_8270 = (state_8305[(7)]);
var state_8305__$1 = state_8305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8305__$1,(11),inst_8270);
} else {
if((state_val_8306 === (17))){
var inst_8291 = (state_8305[(2)]);
var state_8305__$1 = state_8305;
if(cljs.core.truth_(inst_8291)){
var statearr_8316_8380 = state_8305__$1;
(statearr_8316_8380[(1)] = (19));

} else {
var statearr_8317_8381 = state_8305__$1;
(statearr_8317_8381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (3))){
var inst_8303 = (state_8305[(2)]);
var state_8305__$1 = state_8305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8305__$1,inst_8303);
} else {
if((state_val_8306 === (12))){
var inst_8280 = (state_8305[(10)]);
var state_8305__$1 = state_8305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8305__$1,(14),inst_8280);
} else {
if((state_val_8306 === (2))){
var state_8305__$1 = state_8305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8305__$1,(4),results);
} else {
if((state_val_8306 === (19))){
var state_8305__$1 = state_8305;
var statearr_8318_8382 = state_8305__$1;
(statearr_8318_8382[(2)] = null);

(statearr_8318_8382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (11))){
var inst_8280 = (state_8305[(2)]);
var state_8305__$1 = (function (){var statearr_8319 = state_8305;
(statearr_8319[(10)] = inst_8280);

return statearr_8319;
})();
var statearr_8320_8383 = state_8305__$1;
(statearr_8320_8383[(2)] = null);

(statearr_8320_8383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (9))){
var state_8305__$1 = state_8305;
var statearr_8321_8384 = state_8305__$1;
(statearr_8321_8384[(2)] = null);

(statearr_8321_8384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (5))){
var state_8305__$1 = state_8305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8322_8385 = state_8305__$1;
(statearr_8322_8385[(1)] = (8));

} else {
var statearr_8323_8386 = state_8305__$1;
(statearr_8323_8386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (14))){
var inst_8285 = (state_8305[(11)]);
var inst_8283 = (state_8305[(8)]);
var inst_8283__$1 = (state_8305[(2)]);
var inst_8284 = (inst_8283__$1 == null);
var inst_8285__$1 = cljs.core.not.call(null,inst_8284);
var state_8305__$1 = (function (){var statearr_8324 = state_8305;
(statearr_8324[(11)] = inst_8285__$1);

(statearr_8324[(8)] = inst_8283__$1);

return statearr_8324;
})();
if(inst_8285__$1){
var statearr_8325_8387 = state_8305__$1;
(statearr_8325_8387[(1)] = (15));

} else {
var statearr_8326_8388 = state_8305__$1;
(statearr_8326_8388[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (16))){
var inst_8285 = (state_8305[(11)]);
var state_8305__$1 = state_8305;
var statearr_8327_8389 = state_8305__$1;
(statearr_8327_8389[(2)] = inst_8285);

(statearr_8327_8389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (10))){
var inst_8277 = (state_8305[(2)]);
var state_8305__$1 = state_8305;
var statearr_8328_8390 = state_8305__$1;
(statearr_8328_8390[(2)] = inst_8277);

(statearr_8328_8390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (18))){
var inst_8288 = (state_8305[(2)]);
var state_8305__$1 = state_8305;
var statearr_8329_8391 = state_8305__$1;
(statearr_8329_8391[(2)] = inst_8288);

(statearr_8329_8391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8306 === (8))){
var inst_8274 = cljs.core.async.close_BANG_.call(null,to);
var state_8305__$1 = state_8305;
var statearr_8330_8392 = state_8305__$1;
(statearr_8330_8392[(2)] = inst_8274);

(statearr_8330_8392[(1)] = (10));


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
});})(c__7799__auto__,jobs,results,process,async))
;
return ((function (switch__7743__auto__,c__7799__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0 = (function (){
var statearr_8334 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__);

(statearr_8334[(1)] = (1));

return statearr_8334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1 = (function (state_8305){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_8305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e8335){if((e8335 instanceof Object)){
var ex__7747__auto__ = e8335;
var statearr_8336_8393 = state_8305;
(statearr_8336_8393[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8394 = state_8305;
state_8305 = G__8394;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__ = function(state_8305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1.call(this,state_8305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto__,jobs,results,process,async))
})();
var state__7801__auto__ = (function (){var statearr_8337 = f__7800__auto__.call(null);
(statearr_8337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto__);

return statearr_8337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto__,jobs,results,process,async))
);

return c__7799__auto__;
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
var args8395 = [];
var len__5726__auto___8398 = arguments.length;
var i__5727__auto___8399 = (0);
while(true){
if((i__5727__auto___8399 < len__5726__auto___8398)){
args8395.push((arguments[i__5727__auto___8399]));

var G__8400 = (i__5727__auto___8399 + (1));
i__5727__auto___8399 = G__8400;
continue;
} else {
}
break;
}

var G__8397 = args8395.length;
switch (G__8397) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8395.length)].join('')));

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
var args8402 = [];
var len__5726__auto___8405 = arguments.length;
var i__5727__auto___8406 = (0);
while(true){
if((i__5727__auto___8406 < len__5726__auto___8405)){
args8402.push((arguments[i__5727__auto___8406]));

var G__8407 = (i__5727__auto___8406 + (1));
i__5727__auto___8406 = G__8407;
continue;
} else {
}
break;
}

var G__8404 = args8402.length;
switch (G__8404) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8402.length)].join('')));

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
var args8409 = [];
var len__5726__auto___8462 = arguments.length;
var i__5727__auto___8463 = (0);
while(true){
if((i__5727__auto___8463 < len__5726__auto___8462)){
args8409.push((arguments[i__5727__auto___8463]));

var G__8464 = (i__5727__auto___8463 + (1));
i__5727__auto___8463 = G__8464;
continue;
} else {
}
break;
}

var G__8411 = args8409.length;
switch (G__8411) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8409.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7799__auto___8466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___8466,tc,fc){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___8466,tc,fc){
return (function (state_8437){
var state_val_8438 = (state_8437[(1)]);
if((state_val_8438 === (7))){
var inst_8433 = (state_8437[(2)]);
var state_8437__$1 = state_8437;
var statearr_8439_8467 = state_8437__$1;
(statearr_8439_8467[(2)] = inst_8433);

(statearr_8439_8467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8438 === (1))){
var state_8437__$1 = state_8437;
var statearr_8440_8468 = state_8437__$1;
(statearr_8440_8468[(2)] = null);

(statearr_8440_8468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8438 === (4))){
var inst_8414 = (state_8437[(7)]);
var inst_8414__$1 = (state_8437[(2)]);
var inst_8415 = (inst_8414__$1 == null);
var state_8437__$1 = (function (){var statearr_8441 = state_8437;
(statearr_8441[(7)] = inst_8414__$1);

return statearr_8441;
})();
if(cljs.core.truth_(inst_8415)){
var statearr_8442_8469 = state_8437__$1;
(statearr_8442_8469[(1)] = (5));

} else {
var statearr_8443_8470 = state_8437__$1;
(statearr_8443_8470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8438 === (13))){
var state_8437__$1 = state_8437;
var statearr_8444_8471 = state_8437__$1;
(statearr_8444_8471[(2)] = null);

(statearr_8444_8471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8438 === (6))){
var inst_8414 = (state_8437[(7)]);
var inst_8420 = p.call(null,inst_8414);
var state_8437__$1 = state_8437;
if(cljs.core.truth_(inst_8420)){
var statearr_8445_8472 = state_8437__$1;
(statearr_8445_8472[(1)] = (9));

} else {
var statearr_8446_8473 = state_8437__$1;
(statearr_8446_8473[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8438 === (3))){
var inst_8435 = (state_8437[(2)]);
var state_8437__$1 = state_8437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8437__$1,inst_8435);
} else {
if((state_val_8438 === (12))){
var state_8437__$1 = state_8437;
var statearr_8447_8474 = state_8437__$1;
(statearr_8447_8474[(2)] = null);

(statearr_8447_8474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8438 === (2))){
var state_8437__$1 = state_8437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8437__$1,(4),ch);
} else {
if((state_val_8438 === (11))){
var inst_8414 = (state_8437[(7)]);
var inst_8424 = (state_8437[(2)]);
var state_8437__$1 = state_8437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8437__$1,(8),inst_8424,inst_8414);
} else {
if((state_val_8438 === (9))){
var state_8437__$1 = state_8437;
var statearr_8448_8475 = state_8437__$1;
(statearr_8448_8475[(2)] = tc);

(statearr_8448_8475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8438 === (5))){
var inst_8417 = cljs.core.async.close_BANG_.call(null,tc);
var inst_8418 = cljs.core.async.close_BANG_.call(null,fc);
var state_8437__$1 = (function (){var statearr_8449 = state_8437;
(statearr_8449[(8)] = inst_8417);

return statearr_8449;
})();
var statearr_8450_8476 = state_8437__$1;
(statearr_8450_8476[(2)] = inst_8418);

(statearr_8450_8476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8438 === (14))){
var inst_8431 = (state_8437[(2)]);
var state_8437__$1 = state_8437;
var statearr_8451_8477 = state_8437__$1;
(statearr_8451_8477[(2)] = inst_8431);

(statearr_8451_8477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8438 === (10))){
var state_8437__$1 = state_8437;
var statearr_8452_8478 = state_8437__$1;
(statearr_8452_8478[(2)] = fc);

(statearr_8452_8478[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8438 === (8))){
var inst_8426 = (state_8437[(2)]);
var state_8437__$1 = state_8437;
if(cljs.core.truth_(inst_8426)){
var statearr_8453_8479 = state_8437__$1;
(statearr_8453_8479[(1)] = (12));

} else {
var statearr_8454_8480 = state_8437__$1;
(statearr_8454_8480[(1)] = (13));

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
});})(c__7799__auto___8466,tc,fc))
;
return ((function (switch__7743__auto__,c__7799__auto___8466,tc,fc){
return (function() {
var cljs$core$async$state_machine__7744__auto__ = null;
var cljs$core$async$state_machine__7744__auto____0 = (function (){
var statearr_8458 = [null,null,null,null,null,null,null,null,null];
(statearr_8458[(0)] = cljs$core$async$state_machine__7744__auto__);

(statearr_8458[(1)] = (1));

return statearr_8458;
});
var cljs$core$async$state_machine__7744__auto____1 = (function (state_8437){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_8437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e8459){if((e8459 instanceof Object)){
var ex__7747__auto__ = e8459;
var statearr_8460_8481 = state_8437;
(statearr_8460_8481[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8482 = state_8437;
state_8437 = G__8482;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$state_machine__7744__auto__ = function(state_8437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7744__auto____1.call(this,state_8437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7744__auto____0;
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7744__auto____1;
return cljs$core$async$state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___8466,tc,fc))
})();
var state__7801__auto__ = (function (){var statearr_8461 = f__7800__auto__.call(null);
(statearr_8461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___8466);

return statearr_8461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___8466,tc,fc))
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
var c__7799__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto__){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto__){
return (function (state_8529){
var state_val_8530 = (state_8529[(1)]);
if((state_val_8530 === (1))){
var inst_8515 = init;
var state_8529__$1 = (function (){var statearr_8531 = state_8529;
(statearr_8531[(7)] = inst_8515);

return statearr_8531;
})();
var statearr_8532_8547 = state_8529__$1;
(statearr_8532_8547[(2)] = null);

(statearr_8532_8547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8530 === (2))){
var state_8529__$1 = state_8529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8529__$1,(4),ch);
} else {
if((state_val_8530 === (3))){
var inst_8527 = (state_8529[(2)]);
var state_8529__$1 = state_8529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8529__$1,inst_8527);
} else {
if((state_val_8530 === (4))){
var inst_8518 = (state_8529[(8)]);
var inst_8518__$1 = (state_8529[(2)]);
var inst_8519 = (inst_8518__$1 == null);
var state_8529__$1 = (function (){var statearr_8533 = state_8529;
(statearr_8533[(8)] = inst_8518__$1);

return statearr_8533;
})();
if(cljs.core.truth_(inst_8519)){
var statearr_8534_8548 = state_8529__$1;
(statearr_8534_8548[(1)] = (5));

} else {
var statearr_8535_8549 = state_8529__$1;
(statearr_8535_8549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8530 === (5))){
var inst_8515 = (state_8529[(7)]);
var state_8529__$1 = state_8529;
var statearr_8536_8550 = state_8529__$1;
(statearr_8536_8550[(2)] = inst_8515);

(statearr_8536_8550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8530 === (6))){
var inst_8518 = (state_8529[(8)]);
var inst_8515 = (state_8529[(7)]);
var inst_8522 = f.call(null,inst_8515,inst_8518);
var inst_8515__$1 = inst_8522;
var state_8529__$1 = (function (){var statearr_8537 = state_8529;
(statearr_8537[(7)] = inst_8515__$1);

return statearr_8537;
})();
var statearr_8538_8551 = state_8529__$1;
(statearr_8538_8551[(2)] = null);

(statearr_8538_8551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8530 === (7))){
var inst_8525 = (state_8529[(2)]);
var state_8529__$1 = state_8529;
var statearr_8539_8552 = state_8529__$1;
(statearr_8539_8552[(2)] = inst_8525);

(statearr_8539_8552[(1)] = (3));


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
});})(c__7799__auto__))
;
return ((function (switch__7743__auto__,c__7799__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7744__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7744__auto____0 = (function (){
var statearr_8543 = [null,null,null,null,null,null,null,null,null];
(statearr_8543[(0)] = cljs$core$async$reduce_$_state_machine__7744__auto__);

(statearr_8543[(1)] = (1));

return statearr_8543;
});
var cljs$core$async$reduce_$_state_machine__7744__auto____1 = (function (state_8529){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_8529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e8544){if((e8544 instanceof Object)){
var ex__7747__auto__ = e8544;
var statearr_8545_8553 = state_8529;
(statearr_8545_8553[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8554 = state_8529;
state_8529 = G__8554;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7744__auto__ = function(state_8529){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7744__auto____1.call(this,state_8529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7744__auto____0;
cljs$core$async$reduce_$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7744__auto____1;
return cljs$core$async$reduce_$_state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto__))
})();
var state__7801__auto__ = (function (){var statearr_8546 = f__7800__auto__.call(null);
(statearr_8546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto__);

return statearr_8546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto__))
);

return c__7799__auto__;
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
var args8555 = [];
var len__5726__auto___8607 = arguments.length;
var i__5727__auto___8608 = (0);
while(true){
if((i__5727__auto___8608 < len__5726__auto___8607)){
args8555.push((arguments[i__5727__auto___8608]));

var G__8609 = (i__5727__auto___8608 + (1));
i__5727__auto___8608 = G__8609;
continue;
} else {
}
break;
}

var G__8557 = args8555.length;
switch (G__8557) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8555.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7799__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto__){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto__){
return (function (state_8582){
var state_val_8583 = (state_8582[(1)]);
if((state_val_8583 === (7))){
var inst_8564 = (state_8582[(2)]);
var state_8582__$1 = state_8582;
var statearr_8584_8611 = state_8582__$1;
(statearr_8584_8611[(2)] = inst_8564);

(statearr_8584_8611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (1))){
var inst_8558 = cljs.core.seq.call(null,coll);
var inst_8559 = inst_8558;
var state_8582__$1 = (function (){var statearr_8585 = state_8582;
(statearr_8585[(7)] = inst_8559);

return statearr_8585;
})();
var statearr_8586_8612 = state_8582__$1;
(statearr_8586_8612[(2)] = null);

(statearr_8586_8612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (4))){
var inst_8559 = (state_8582[(7)]);
var inst_8562 = cljs.core.first.call(null,inst_8559);
var state_8582__$1 = state_8582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8582__$1,(7),ch,inst_8562);
} else {
if((state_val_8583 === (13))){
var inst_8576 = (state_8582[(2)]);
var state_8582__$1 = state_8582;
var statearr_8587_8613 = state_8582__$1;
(statearr_8587_8613[(2)] = inst_8576);

(statearr_8587_8613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (6))){
var inst_8567 = (state_8582[(2)]);
var state_8582__$1 = state_8582;
if(cljs.core.truth_(inst_8567)){
var statearr_8588_8614 = state_8582__$1;
(statearr_8588_8614[(1)] = (8));

} else {
var statearr_8589_8615 = state_8582__$1;
(statearr_8589_8615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (3))){
var inst_8580 = (state_8582[(2)]);
var state_8582__$1 = state_8582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8582__$1,inst_8580);
} else {
if((state_val_8583 === (12))){
var state_8582__$1 = state_8582;
var statearr_8590_8616 = state_8582__$1;
(statearr_8590_8616[(2)] = null);

(statearr_8590_8616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (2))){
var inst_8559 = (state_8582[(7)]);
var state_8582__$1 = state_8582;
if(cljs.core.truth_(inst_8559)){
var statearr_8591_8617 = state_8582__$1;
(statearr_8591_8617[(1)] = (4));

} else {
var statearr_8592_8618 = state_8582__$1;
(statearr_8592_8618[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (11))){
var inst_8573 = cljs.core.async.close_BANG_.call(null,ch);
var state_8582__$1 = state_8582;
var statearr_8593_8619 = state_8582__$1;
(statearr_8593_8619[(2)] = inst_8573);

(statearr_8593_8619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (9))){
var state_8582__$1 = state_8582;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8594_8620 = state_8582__$1;
(statearr_8594_8620[(1)] = (11));

} else {
var statearr_8595_8621 = state_8582__$1;
(statearr_8595_8621[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (5))){
var inst_8559 = (state_8582[(7)]);
var state_8582__$1 = state_8582;
var statearr_8596_8622 = state_8582__$1;
(statearr_8596_8622[(2)] = inst_8559);

(statearr_8596_8622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (10))){
var inst_8578 = (state_8582[(2)]);
var state_8582__$1 = state_8582;
var statearr_8597_8623 = state_8582__$1;
(statearr_8597_8623[(2)] = inst_8578);

(statearr_8597_8623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8583 === (8))){
var inst_8559 = (state_8582[(7)]);
var inst_8569 = cljs.core.next.call(null,inst_8559);
var inst_8559__$1 = inst_8569;
var state_8582__$1 = (function (){var statearr_8598 = state_8582;
(statearr_8598[(7)] = inst_8559__$1);

return statearr_8598;
})();
var statearr_8599_8624 = state_8582__$1;
(statearr_8599_8624[(2)] = null);

(statearr_8599_8624[(1)] = (2));


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
});})(c__7799__auto__))
;
return ((function (switch__7743__auto__,c__7799__auto__){
return (function() {
var cljs$core$async$state_machine__7744__auto__ = null;
var cljs$core$async$state_machine__7744__auto____0 = (function (){
var statearr_8603 = [null,null,null,null,null,null,null,null];
(statearr_8603[(0)] = cljs$core$async$state_machine__7744__auto__);

(statearr_8603[(1)] = (1));

return statearr_8603;
});
var cljs$core$async$state_machine__7744__auto____1 = (function (state_8582){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_8582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e8604){if((e8604 instanceof Object)){
var ex__7747__auto__ = e8604;
var statearr_8605_8625 = state_8582;
(statearr_8605_8625[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8626 = state_8582;
state_8582 = G__8626;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$state_machine__7744__auto__ = function(state_8582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7744__auto____1.call(this,state_8582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7744__auto____0;
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7744__auto____1;
return cljs$core$async$state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto__))
})();
var state__7801__auto__ = (function (){var statearr_8606 = f__7800__auto__.call(null);
(statearr_8606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto__);

return statearr_8606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto__))
);

return c__7799__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async8848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8848 = (function (mult,ch,cs,meta8849){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8849 = meta8849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8850,meta8849__$1){
var self__ = this;
var _8850__$1 = this;
return (new cljs.core.async.t_cljs$core$async8848(self__.mult,self__.ch,self__.cs,meta8849__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8850){
var self__ = this;
var _8850__$1 = this;
return self__.meta8849;
});})(cs))
;

cljs.core.async.t_cljs$core$async8848.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8848.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8848.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8848.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8848.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8848.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8849","meta8849",-989269127,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8848";

cljs.core.async.t_cljs$core$async8848.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8848");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8848 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8848(mult__$1,ch__$1,cs__$1,meta8849){
return (new cljs.core.async.t_cljs$core$async8848(mult__$1,ch__$1,cs__$1,meta8849));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8848(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7799__auto___9069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___9069,cs,m,dchan,dctr,done){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___9069,cs,m,dchan,dctr,done){
return (function (state_8981){
var state_val_8982 = (state_8981[(1)]);
if((state_val_8982 === (7))){
var inst_8977 = (state_8981[(2)]);
var state_8981__$1 = state_8981;
var statearr_8983_9070 = state_8981__$1;
(statearr_8983_9070[(2)] = inst_8977);

(statearr_8983_9070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (20))){
var inst_8882 = (state_8981[(7)]);
var inst_8892 = cljs.core.first.call(null,inst_8882);
var inst_8893 = cljs.core.nth.call(null,inst_8892,(0),null);
var inst_8894 = cljs.core.nth.call(null,inst_8892,(1),null);
var state_8981__$1 = (function (){var statearr_8984 = state_8981;
(statearr_8984[(8)] = inst_8893);

return statearr_8984;
})();
if(cljs.core.truth_(inst_8894)){
var statearr_8985_9071 = state_8981__$1;
(statearr_8985_9071[(1)] = (22));

} else {
var statearr_8986_9072 = state_8981__$1;
(statearr_8986_9072[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (27))){
var inst_8924 = (state_8981[(9)]);
var inst_8853 = (state_8981[(10)]);
var inst_8929 = (state_8981[(11)]);
var inst_8922 = (state_8981[(12)]);
var inst_8929__$1 = cljs.core._nth.call(null,inst_8922,inst_8924);
var inst_8930 = cljs.core.async.put_BANG_.call(null,inst_8929__$1,inst_8853,done);
var state_8981__$1 = (function (){var statearr_8987 = state_8981;
(statearr_8987[(11)] = inst_8929__$1);

return statearr_8987;
})();
if(cljs.core.truth_(inst_8930)){
var statearr_8988_9073 = state_8981__$1;
(statearr_8988_9073[(1)] = (30));

} else {
var statearr_8989_9074 = state_8981__$1;
(statearr_8989_9074[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (1))){
var state_8981__$1 = state_8981;
var statearr_8990_9075 = state_8981__$1;
(statearr_8990_9075[(2)] = null);

(statearr_8990_9075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (24))){
var inst_8882 = (state_8981[(7)]);
var inst_8899 = (state_8981[(2)]);
var inst_8900 = cljs.core.next.call(null,inst_8882);
var inst_8862 = inst_8900;
var inst_8863 = null;
var inst_8864 = (0);
var inst_8865 = (0);
var state_8981__$1 = (function (){var statearr_8991 = state_8981;
(statearr_8991[(13)] = inst_8899);

(statearr_8991[(14)] = inst_8864);

(statearr_8991[(15)] = inst_8863);

(statearr_8991[(16)] = inst_8862);

(statearr_8991[(17)] = inst_8865);

return statearr_8991;
})();
var statearr_8992_9076 = state_8981__$1;
(statearr_8992_9076[(2)] = null);

(statearr_8992_9076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (39))){
var state_8981__$1 = state_8981;
var statearr_8996_9077 = state_8981__$1;
(statearr_8996_9077[(2)] = null);

(statearr_8996_9077[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (4))){
var inst_8853 = (state_8981[(10)]);
var inst_8853__$1 = (state_8981[(2)]);
var inst_8854 = (inst_8853__$1 == null);
var state_8981__$1 = (function (){var statearr_8997 = state_8981;
(statearr_8997[(10)] = inst_8853__$1);

return statearr_8997;
})();
if(cljs.core.truth_(inst_8854)){
var statearr_8998_9078 = state_8981__$1;
(statearr_8998_9078[(1)] = (5));

} else {
var statearr_8999_9079 = state_8981__$1;
(statearr_8999_9079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (15))){
var inst_8864 = (state_8981[(14)]);
var inst_8863 = (state_8981[(15)]);
var inst_8862 = (state_8981[(16)]);
var inst_8865 = (state_8981[(17)]);
var inst_8878 = (state_8981[(2)]);
var inst_8879 = (inst_8865 + (1));
var tmp8993 = inst_8864;
var tmp8994 = inst_8863;
var tmp8995 = inst_8862;
var inst_8862__$1 = tmp8995;
var inst_8863__$1 = tmp8994;
var inst_8864__$1 = tmp8993;
var inst_8865__$1 = inst_8879;
var state_8981__$1 = (function (){var statearr_9000 = state_8981;
(statearr_9000[(14)] = inst_8864__$1);

(statearr_9000[(18)] = inst_8878);

(statearr_9000[(15)] = inst_8863__$1);

(statearr_9000[(16)] = inst_8862__$1);

(statearr_9000[(17)] = inst_8865__$1);

return statearr_9000;
})();
var statearr_9001_9080 = state_8981__$1;
(statearr_9001_9080[(2)] = null);

(statearr_9001_9080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (21))){
var inst_8903 = (state_8981[(2)]);
var state_8981__$1 = state_8981;
var statearr_9005_9081 = state_8981__$1;
(statearr_9005_9081[(2)] = inst_8903);

(statearr_9005_9081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (31))){
var inst_8929 = (state_8981[(11)]);
var inst_8933 = done.call(null,null);
var inst_8934 = cljs.core.async.untap_STAR_.call(null,m,inst_8929);
var state_8981__$1 = (function (){var statearr_9006 = state_8981;
(statearr_9006[(19)] = inst_8933);

return statearr_9006;
})();
var statearr_9007_9082 = state_8981__$1;
(statearr_9007_9082[(2)] = inst_8934);

(statearr_9007_9082[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (32))){
var inst_8924 = (state_8981[(9)]);
var inst_8921 = (state_8981[(20)]);
var inst_8923 = (state_8981[(21)]);
var inst_8922 = (state_8981[(12)]);
var inst_8936 = (state_8981[(2)]);
var inst_8937 = (inst_8924 + (1));
var tmp9002 = inst_8921;
var tmp9003 = inst_8923;
var tmp9004 = inst_8922;
var inst_8921__$1 = tmp9002;
var inst_8922__$1 = tmp9004;
var inst_8923__$1 = tmp9003;
var inst_8924__$1 = inst_8937;
var state_8981__$1 = (function (){var statearr_9008 = state_8981;
(statearr_9008[(22)] = inst_8936);

(statearr_9008[(9)] = inst_8924__$1);

(statearr_9008[(20)] = inst_8921__$1);

(statearr_9008[(21)] = inst_8923__$1);

(statearr_9008[(12)] = inst_8922__$1);

return statearr_9008;
})();
var statearr_9009_9083 = state_8981__$1;
(statearr_9009_9083[(2)] = null);

(statearr_9009_9083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (40))){
var inst_8949 = (state_8981[(23)]);
var inst_8953 = done.call(null,null);
var inst_8954 = cljs.core.async.untap_STAR_.call(null,m,inst_8949);
var state_8981__$1 = (function (){var statearr_9010 = state_8981;
(statearr_9010[(24)] = inst_8953);

return statearr_9010;
})();
var statearr_9011_9084 = state_8981__$1;
(statearr_9011_9084[(2)] = inst_8954);

(statearr_9011_9084[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (33))){
var inst_8940 = (state_8981[(25)]);
var inst_8942 = cljs.core.chunked_seq_QMARK_.call(null,inst_8940);
var state_8981__$1 = state_8981;
if(inst_8942){
var statearr_9012_9085 = state_8981__$1;
(statearr_9012_9085[(1)] = (36));

} else {
var statearr_9013_9086 = state_8981__$1;
(statearr_9013_9086[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (13))){
var inst_8872 = (state_8981[(26)]);
var inst_8875 = cljs.core.async.close_BANG_.call(null,inst_8872);
var state_8981__$1 = state_8981;
var statearr_9014_9087 = state_8981__$1;
(statearr_9014_9087[(2)] = inst_8875);

(statearr_9014_9087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (22))){
var inst_8893 = (state_8981[(8)]);
var inst_8896 = cljs.core.async.close_BANG_.call(null,inst_8893);
var state_8981__$1 = state_8981;
var statearr_9015_9088 = state_8981__$1;
(statearr_9015_9088[(2)] = inst_8896);

(statearr_9015_9088[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (36))){
var inst_8940 = (state_8981[(25)]);
var inst_8944 = cljs.core.chunk_first.call(null,inst_8940);
var inst_8945 = cljs.core.chunk_rest.call(null,inst_8940);
var inst_8946 = cljs.core.count.call(null,inst_8944);
var inst_8921 = inst_8945;
var inst_8922 = inst_8944;
var inst_8923 = inst_8946;
var inst_8924 = (0);
var state_8981__$1 = (function (){var statearr_9016 = state_8981;
(statearr_9016[(9)] = inst_8924);

(statearr_9016[(20)] = inst_8921);

(statearr_9016[(21)] = inst_8923);

(statearr_9016[(12)] = inst_8922);

return statearr_9016;
})();
var statearr_9017_9089 = state_8981__$1;
(statearr_9017_9089[(2)] = null);

(statearr_9017_9089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (41))){
var inst_8940 = (state_8981[(25)]);
var inst_8956 = (state_8981[(2)]);
var inst_8957 = cljs.core.next.call(null,inst_8940);
var inst_8921 = inst_8957;
var inst_8922 = null;
var inst_8923 = (0);
var inst_8924 = (0);
var state_8981__$1 = (function (){var statearr_9018 = state_8981;
(statearr_9018[(27)] = inst_8956);

(statearr_9018[(9)] = inst_8924);

(statearr_9018[(20)] = inst_8921);

(statearr_9018[(21)] = inst_8923);

(statearr_9018[(12)] = inst_8922);

return statearr_9018;
})();
var statearr_9019_9090 = state_8981__$1;
(statearr_9019_9090[(2)] = null);

(statearr_9019_9090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (43))){
var state_8981__$1 = state_8981;
var statearr_9020_9091 = state_8981__$1;
(statearr_9020_9091[(2)] = null);

(statearr_9020_9091[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (29))){
var inst_8965 = (state_8981[(2)]);
var state_8981__$1 = state_8981;
var statearr_9021_9092 = state_8981__$1;
(statearr_9021_9092[(2)] = inst_8965);

(statearr_9021_9092[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (44))){
var inst_8974 = (state_8981[(2)]);
var state_8981__$1 = (function (){var statearr_9022 = state_8981;
(statearr_9022[(28)] = inst_8974);

return statearr_9022;
})();
var statearr_9023_9093 = state_8981__$1;
(statearr_9023_9093[(2)] = null);

(statearr_9023_9093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (6))){
var inst_8913 = (state_8981[(29)]);
var inst_8912 = cljs.core.deref.call(null,cs);
var inst_8913__$1 = cljs.core.keys.call(null,inst_8912);
var inst_8914 = cljs.core.count.call(null,inst_8913__$1);
var inst_8915 = cljs.core.reset_BANG_.call(null,dctr,inst_8914);
var inst_8920 = cljs.core.seq.call(null,inst_8913__$1);
var inst_8921 = inst_8920;
var inst_8922 = null;
var inst_8923 = (0);
var inst_8924 = (0);
var state_8981__$1 = (function (){var statearr_9024 = state_8981;
(statearr_9024[(9)] = inst_8924);

(statearr_9024[(20)] = inst_8921);

(statearr_9024[(29)] = inst_8913__$1);

(statearr_9024[(30)] = inst_8915);

(statearr_9024[(21)] = inst_8923);

(statearr_9024[(12)] = inst_8922);

return statearr_9024;
})();
var statearr_9025_9094 = state_8981__$1;
(statearr_9025_9094[(2)] = null);

(statearr_9025_9094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (28))){
var inst_8940 = (state_8981[(25)]);
var inst_8921 = (state_8981[(20)]);
var inst_8940__$1 = cljs.core.seq.call(null,inst_8921);
var state_8981__$1 = (function (){var statearr_9026 = state_8981;
(statearr_9026[(25)] = inst_8940__$1);

return statearr_9026;
})();
if(inst_8940__$1){
var statearr_9027_9095 = state_8981__$1;
(statearr_9027_9095[(1)] = (33));

} else {
var statearr_9028_9096 = state_8981__$1;
(statearr_9028_9096[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (25))){
var inst_8924 = (state_8981[(9)]);
var inst_8923 = (state_8981[(21)]);
var inst_8926 = (inst_8924 < inst_8923);
var inst_8927 = inst_8926;
var state_8981__$1 = state_8981;
if(cljs.core.truth_(inst_8927)){
var statearr_9029_9097 = state_8981__$1;
(statearr_9029_9097[(1)] = (27));

} else {
var statearr_9030_9098 = state_8981__$1;
(statearr_9030_9098[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (34))){
var state_8981__$1 = state_8981;
var statearr_9031_9099 = state_8981__$1;
(statearr_9031_9099[(2)] = null);

(statearr_9031_9099[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (17))){
var state_8981__$1 = state_8981;
var statearr_9032_9100 = state_8981__$1;
(statearr_9032_9100[(2)] = null);

(statearr_9032_9100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (3))){
var inst_8979 = (state_8981[(2)]);
var state_8981__$1 = state_8981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8981__$1,inst_8979);
} else {
if((state_val_8982 === (12))){
var inst_8908 = (state_8981[(2)]);
var state_8981__$1 = state_8981;
var statearr_9033_9101 = state_8981__$1;
(statearr_9033_9101[(2)] = inst_8908);

(statearr_9033_9101[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (2))){
var state_8981__$1 = state_8981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8981__$1,(4),ch);
} else {
if((state_val_8982 === (23))){
var state_8981__$1 = state_8981;
var statearr_9034_9102 = state_8981__$1;
(statearr_9034_9102[(2)] = null);

(statearr_9034_9102[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (35))){
var inst_8963 = (state_8981[(2)]);
var state_8981__$1 = state_8981;
var statearr_9035_9103 = state_8981__$1;
(statearr_9035_9103[(2)] = inst_8963);

(statearr_9035_9103[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (19))){
var inst_8882 = (state_8981[(7)]);
var inst_8886 = cljs.core.chunk_first.call(null,inst_8882);
var inst_8887 = cljs.core.chunk_rest.call(null,inst_8882);
var inst_8888 = cljs.core.count.call(null,inst_8886);
var inst_8862 = inst_8887;
var inst_8863 = inst_8886;
var inst_8864 = inst_8888;
var inst_8865 = (0);
var state_8981__$1 = (function (){var statearr_9036 = state_8981;
(statearr_9036[(14)] = inst_8864);

(statearr_9036[(15)] = inst_8863);

(statearr_9036[(16)] = inst_8862);

(statearr_9036[(17)] = inst_8865);

return statearr_9036;
})();
var statearr_9037_9104 = state_8981__$1;
(statearr_9037_9104[(2)] = null);

(statearr_9037_9104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (11))){
var inst_8862 = (state_8981[(16)]);
var inst_8882 = (state_8981[(7)]);
var inst_8882__$1 = cljs.core.seq.call(null,inst_8862);
var state_8981__$1 = (function (){var statearr_9038 = state_8981;
(statearr_9038[(7)] = inst_8882__$1);

return statearr_9038;
})();
if(inst_8882__$1){
var statearr_9039_9105 = state_8981__$1;
(statearr_9039_9105[(1)] = (16));

} else {
var statearr_9040_9106 = state_8981__$1;
(statearr_9040_9106[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (9))){
var inst_8910 = (state_8981[(2)]);
var state_8981__$1 = state_8981;
var statearr_9041_9107 = state_8981__$1;
(statearr_9041_9107[(2)] = inst_8910);

(statearr_9041_9107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (5))){
var inst_8860 = cljs.core.deref.call(null,cs);
var inst_8861 = cljs.core.seq.call(null,inst_8860);
var inst_8862 = inst_8861;
var inst_8863 = null;
var inst_8864 = (0);
var inst_8865 = (0);
var state_8981__$1 = (function (){var statearr_9042 = state_8981;
(statearr_9042[(14)] = inst_8864);

(statearr_9042[(15)] = inst_8863);

(statearr_9042[(16)] = inst_8862);

(statearr_9042[(17)] = inst_8865);

return statearr_9042;
})();
var statearr_9043_9108 = state_8981__$1;
(statearr_9043_9108[(2)] = null);

(statearr_9043_9108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (14))){
var state_8981__$1 = state_8981;
var statearr_9044_9109 = state_8981__$1;
(statearr_9044_9109[(2)] = null);

(statearr_9044_9109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (45))){
var inst_8971 = (state_8981[(2)]);
var state_8981__$1 = state_8981;
var statearr_9045_9110 = state_8981__$1;
(statearr_9045_9110[(2)] = inst_8971);

(statearr_9045_9110[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (26))){
var inst_8913 = (state_8981[(29)]);
var inst_8967 = (state_8981[(2)]);
var inst_8968 = cljs.core.seq.call(null,inst_8913);
var state_8981__$1 = (function (){var statearr_9046 = state_8981;
(statearr_9046[(31)] = inst_8967);

return statearr_9046;
})();
if(inst_8968){
var statearr_9047_9111 = state_8981__$1;
(statearr_9047_9111[(1)] = (42));

} else {
var statearr_9048_9112 = state_8981__$1;
(statearr_9048_9112[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (16))){
var inst_8882 = (state_8981[(7)]);
var inst_8884 = cljs.core.chunked_seq_QMARK_.call(null,inst_8882);
var state_8981__$1 = state_8981;
if(inst_8884){
var statearr_9049_9113 = state_8981__$1;
(statearr_9049_9113[(1)] = (19));

} else {
var statearr_9050_9114 = state_8981__$1;
(statearr_9050_9114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (38))){
var inst_8960 = (state_8981[(2)]);
var state_8981__$1 = state_8981;
var statearr_9051_9115 = state_8981__$1;
(statearr_9051_9115[(2)] = inst_8960);

(statearr_9051_9115[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (30))){
var state_8981__$1 = state_8981;
var statearr_9052_9116 = state_8981__$1;
(statearr_9052_9116[(2)] = null);

(statearr_9052_9116[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (10))){
var inst_8863 = (state_8981[(15)]);
var inst_8865 = (state_8981[(17)]);
var inst_8871 = cljs.core._nth.call(null,inst_8863,inst_8865);
var inst_8872 = cljs.core.nth.call(null,inst_8871,(0),null);
var inst_8873 = cljs.core.nth.call(null,inst_8871,(1),null);
var state_8981__$1 = (function (){var statearr_9053 = state_8981;
(statearr_9053[(26)] = inst_8872);

return statearr_9053;
})();
if(cljs.core.truth_(inst_8873)){
var statearr_9054_9117 = state_8981__$1;
(statearr_9054_9117[(1)] = (13));

} else {
var statearr_9055_9118 = state_8981__$1;
(statearr_9055_9118[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (18))){
var inst_8906 = (state_8981[(2)]);
var state_8981__$1 = state_8981;
var statearr_9056_9119 = state_8981__$1;
(statearr_9056_9119[(2)] = inst_8906);

(statearr_9056_9119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (42))){
var state_8981__$1 = state_8981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8981__$1,(45),dchan);
} else {
if((state_val_8982 === (37))){
var inst_8940 = (state_8981[(25)]);
var inst_8949 = (state_8981[(23)]);
var inst_8853 = (state_8981[(10)]);
var inst_8949__$1 = cljs.core.first.call(null,inst_8940);
var inst_8950 = cljs.core.async.put_BANG_.call(null,inst_8949__$1,inst_8853,done);
var state_8981__$1 = (function (){var statearr_9057 = state_8981;
(statearr_9057[(23)] = inst_8949__$1);

return statearr_9057;
})();
if(cljs.core.truth_(inst_8950)){
var statearr_9058_9120 = state_8981__$1;
(statearr_9058_9120[(1)] = (39));

} else {
var statearr_9059_9121 = state_8981__$1;
(statearr_9059_9121[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8982 === (8))){
var inst_8864 = (state_8981[(14)]);
var inst_8865 = (state_8981[(17)]);
var inst_8867 = (inst_8865 < inst_8864);
var inst_8868 = inst_8867;
var state_8981__$1 = state_8981;
if(cljs.core.truth_(inst_8868)){
var statearr_9060_9122 = state_8981__$1;
(statearr_9060_9122[(1)] = (10));

} else {
var statearr_9061_9123 = state_8981__$1;
(statearr_9061_9123[(1)] = (11));

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
});})(c__7799__auto___9069,cs,m,dchan,dctr,done))
;
return ((function (switch__7743__auto__,c__7799__auto___9069,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7744__auto__ = null;
var cljs$core$async$mult_$_state_machine__7744__auto____0 = (function (){
var statearr_9065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9065[(0)] = cljs$core$async$mult_$_state_machine__7744__auto__);

(statearr_9065[(1)] = (1));

return statearr_9065;
});
var cljs$core$async$mult_$_state_machine__7744__auto____1 = (function (state_8981){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_8981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e9066){if((e9066 instanceof Object)){
var ex__7747__auto__ = e9066;
var statearr_9067_9124 = state_8981;
(statearr_9067_9124[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9125 = state_8981;
state_8981 = G__9125;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7744__auto__ = function(state_8981){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7744__auto____1.call(this,state_8981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7744__auto____0;
cljs$core$async$mult_$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7744__auto____1;
return cljs$core$async$mult_$_state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___9069,cs,m,dchan,dctr,done))
})();
var state__7801__auto__ = (function (){var statearr_9068 = f__7800__auto__.call(null);
(statearr_9068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___9069);

return statearr_9068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___9069,cs,m,dchan,dctr,done))
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
var args9126 = [];
var len__5726__auto___9129 = arguments.length;
var i__5727__auto___9130 = (0);
while(true){
if((i__5727__auto___9130 < len__5726__auto___9129)){
args9126.push((arguments[i__5727__auto___9130]));

var G__9131 = (i__5727__auto___9130 + (1));
i__5727__auto___9130 = G__9131;
continue;
} else {
}
break;
}

var G__9128 = args9126.length;
switch (G__9128) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9126.length)].join('')));

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
var len__5726__auto___9143 = arguments.length;
var i__5727__auto___9144 = (0);
while(true){
if((i__5727__auto___9144 < len__5726__auto___9143)){
args__5733__auto__.push((arguments[i__5727__auto___9144]));

var G__9145 = (i__5727__auto___9144 + (1));
i__5727__auto___9144 = G__9145;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9137){
var map__9138 = p__9137;
var map__9138__$1 = ((((!((map__9138 == null)))?((((map__9138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9138):map__9138);
var opts = map__9138__$1;
var statearr_9140_9146 = state;
(statearr_9140_9146[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__9138,map__9138__$1,opts){
return (function (val){
var statearr_9141_9147 = state;
(statearr_9141_9147[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__9138,map__9138__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_9142_9148 = state;
(statearr_9142_9148[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9133){
var G__9134 = cljs.core.first.call(null,seq9133);
var seq9133__$1 = cljs.core.next.call(null,seq9133);
var G__9135 = cljs.core.first.call(null,seq9133__$1);
var seq9133__$2 = cljs.core.next.call(null,seq9133__$1);
var G__9136 = cljs.core.first.call(null,seq9133__$2);
var seq9133__$3 = cljs.core.next.call(null,seq9133__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9134,G__9135,G__9136,seq9133__$3);
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
if(typeof cljs.core.async.t_cljs$core$async9312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9312 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9313){
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
this.meta9313 = meta9313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9314,meta9313__$1){
var self__ = this;
var _9314__$1 = this;
return (new cljs.core.async.t_cljs$core$async9312(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9313__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9314){
var self__ = this;
var _9314__$1 = this;
return self__.meta9313;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9312.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async9312.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta9313","meta9313",1127723478,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9312";

cljs.core.async.t_cljs$core$async9312.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9312");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async9312 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9312(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9313){
return (new cljs.core.async.t_cljs$core$async9312(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9313));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9312(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7799__auto___9475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___9475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___9475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9412){
var state_val_9413 = (state_9412[(1)]);
if((state_val_9413 === (7))){
var inst_9330 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
var statearr_9414_9476 = state_9412__$1;
(statearr_9414_9476[(2)] = inst_9330);

(statearr_9414_9476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (20))){
var inst_9342 = (state_9412[(7)]);
var state_9412__$1 = state_9412;
var statearr_9415_9477 = state_9412__$1;
(statearr_9415_9477[(2)] = inst_9342);

(statearr_9415_9477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (27))){
var state_9412__$1 = state_9412;
var statearr_9416_9478 = state_9412__$1;
(statearr_9416_9478[(2)] = null);

(statearr_9416_9478[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (1))){
var inst_9318 = (state_9412[(8)]);
var inst_9318__$1 = calc_state.call(null);
var inst_9320 = (inst_9318__$1 == null);
var inst_9321 = cljs.core.not.call(null,inst_9320);
var state_9412__$1 = (function (){var statearr_9417 = state_9412;
(statearr_9417[(8)] = inst_9318__$1);

return statearr_9417;
})();
if(inst_9321){
var statearr_9418_9479 = state_9412__$1;
(statearr_9418_9479[(1)] = (2));

} else {
var statearr_9419_9480 = state_9412__$1;
(statearr_9419_9480[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (24))){
var inst_9372 = (state_9412[(9)]);
var inst_9365 = (state_9412[(10)]);
var inst_9386 = (state_9412[(11)]);
var inst_9386__$1 = inst_9365.call(null,inst_9372);
var state_9412__$1 = (function (){var statearr_9420 = state_9412;
(statearr_9420[(11)] = inst_9386__$1);

return statearr_9420;
})();
if(cljs.core.truth_(inst_9386__$1)){
var statearr_9421_9481 = state_9412__$1;
(statearr_9421_9481[(1)] = (29));

} else {
var statearr_9422_9482 = state_9412__$1;
(statearr_9422_9482[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (4))){
var inst_9333 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
if(cljs.core.truth_(inst_9333)){
var statearr_9423_9483 = state_9412__$1;
(statearr_9423_9483[(1)] = (8));

} else {
var statearr_9424_9484 = state_9412__$1;
(statearr_9424_9484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (15))){
var inst_9359 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
if(cljs.core.truth_(inst_9359)){
var statearr_9425_9485 = state_9412__$1;
(statearr_9425_9485[(1)] = (19));

} else {
var statearr_9426_9486 = state_9412__$1;
(statearr_9426_9486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (21))){
var inst_9364 = (state_9412[(12)]);
var inst_9364__$1 = (state_9412[(2)]);
var inst_9365 = cljs.core.get.call(null,inst_9364__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9366 = cljs.core.get.call(null,inst_9364__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9367 = cljs.core.get.call(null,inst_9364__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9412__$1 = (function (){var statearr_9427 = state_9412;
(statearr_9427[(13)] = inst_9366);

(statearr_9427[(10)] = inst_9365);

(statearr_9427[(12)] = inst_9364__$1);

return statearr_9427;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9412__$1,(22),inst_9367);
} else {
if((state_val_9413 === (31))){
var inst_9394 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
if(cljs.core.truth_(inst_9394)){
var statearr_9428_9487 = state_9412__$1;
(statearr_9428_9487[(1)] = (32));

} else {
var statearr_9429_9488 = state_9412__$1;
(statearr_9429_9488[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (32))){
var inst_9371 = (state_9412[(14)]);
var state_9412__$1 = state_9412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9412__$1,(35),out,inst_9371);
} else {
if((state_val_9413 === (33))){
var inst_9364 = (state_9412[(12)]);
var inst_9342 = inst_9364;
var state_9412__$1 = (function (){var statearr_9430 = state_9412;
(statearr_9430[(7)] = inst_9342);

return statearr_9430;
})();
var statearr_9431_9489 = state_9412__$1;
(statearr_9431_9489[(2)] = null);

(statearr_9431_9489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (13))){
var inst_9342 = (state_9412[(7)]);
var inst_9349 = inst_9342.cljs$lang$protocol_mask$partition0$;
var inst_9350 = (inst_9349 & (64));
var inst_9351 = inst_9342.cljs$core$ISeq$;
var inst_9352 = (inst_9350) || (inst_9351);
var state_9412__$1 = state_9412;
if(cljs.core.truth_(inst_9352)){
var statearr_9432_9490 = state_9412__$1;
(statearr_9432_9490[(1)] = (16));

} else {
var statearr_9433_9491 = state_9412__$1;
(statearr_9433_9491[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (22))){
var inst_9371 = (state_9412[(14)]);
var inst_9372 = (state_9412[(9)]);
var inst_9370 = (state_9412[(2)]);
var inst_9371__$1 = cljs.core.nth.call(null,inst_9370,(0),null);
var inst_9372__$1 = cljs.core.nth.call(null,inst_9370,(1),null);
var inst_9373 = (inst_9371__$1 == null);
var inst_9374 = cljs.core._EQ_.call(null,inst_9372__$1,change);
var inst_9375 = (inst_9373) || (inst_9374);
var state_9412__$1 = (function (){var statearr_9434 = state_9412;
(statearr_9434[(14)] = inst_9371__$1);

(statearr_9434[(9)] = inst_9372__$1);

return statearr_9434;
})();
if(cljs.core.truth_(inst_9375)){
var statearr_9435_9492 = state_9412__$1;
(statearr_9435_9492[(1)] = (23));

} else {
var statearr_9436_9493 = state_9412__$1;
(statearr_9436_9493[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (36))){
var inst_9364 = (state_9412[(12)]);
var inst_9342 = inst_9364;
var state_9412__$1 = (function (){var statearr_9437 = state_9412;
(statearr_9437[(7)] = inst_9342);

return statearr_9437;
})();
var statearr_9438_9494 = state_9412__$1;
(statearr_9438_9494[(2)] = null);

(statearr_9438_9494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (29))){
var inst_9386 = (state_9412[(11)]);
var state_9412__$1 = state_9412;
var statearr_9439_9495 = state_9412__$1;
(statearr_9439_9495[(2)] = inst_9386);

(statearr_9439_9495[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (6))){
var state_9412__$1 = state_9412;
var statearr_9440_9496 = state_9412__$1;
(statearr_9440_9496[(2)] = false);

(statearr_9440_9496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (28))){
var inst_9382 = (state_9412[(2)]);
var inst_9383 = calc_state.call(null);
var inst_9342 = inst_9383;
var state_9412__$1 = (function (){var statearr_9441 = state_9412;
(statearr_9441[(15)] = inst_9382);

(statearr_9441[(7)] = inst_9342);

return statearr_9441;
})();
var statearr_9442_9497 = state_9412__$1;
(statearr_9442_9497[(2)] = null);

(statearr_9442_9497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (25))){
var inst_9408 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
var statearr_9443_9498 = state_9412__$1;
(statearr_9443_9498[(2)] = inst_9408);

(statearr_9443_9498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (34))){
var inst_9406 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
var statearr_9444_9499 = state_9412__$1;
(statearr_9444_9499[(2)] = inst_9406);

(statearr_9444_9499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (17))){
var state_9412__$1 = state_9412;
var statearr_9445_9500 = state_9412__$1;
(statearr_9445_9500[(2)] = false);

(statearr_9445_9500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (3))){
var state_9412__$1 = state_9412;
var statearr_9446_9501 = state_9412__$1;
(statearr_9446_9501[(2)] = false);

(statearr_9446_9501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (12))){
var inst_9410 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9412__$1,inst_9410);
} else {
if((state_val_9413 === (2))){
var inst_9318 = (state_9412[(8)]);
var inst_9323 = inst_9318.cljs$lang$protocol_mask$partition0$;
var inst_9324 = (inst_9323 & (64));
var inst_9325 = inst_9318.cljs$core$ISeq$;
var inst_9326 = (inst_9324) || (inst_9325);
var state_9412__$1 = state_9412;
if(cljs.core.truth_(inst_9326)){
var statearr_9447_9502 = state_9412__$1;
(statearr_9447_9502[(1)] = (5));

} else {
var statearr_9448_9503 = state_9412__$1;
(statearr_9448_9503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (23))){
var inst_9371 = (state_9412[(14)]);
var inst_9377 = (inst_9371 == null);
var state_9412__$1 = state_9412;
if(cljs.core.truth_(inst_9377)){
var statearr_9449_9504 = state_9412__$1;
(statearr_9449_9504[(1)] = (26));

} else {
var statearr_9450_9505 = state_9412__$1;
(statearr_9450_9505[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (35))){
var inst_9397 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
if(cljs.core.truth_(inst_9397)){
var statearr_9451_9506 = state_9412__$1;
(statearr_9451_9506[(1)] = (36));

} else {
var statearr_9452_9507 = state_9412__$1;
(statearr_9452_9507[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (19))){
var inst_9342 = (state_9412[(7)]);
var inst_9361 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9342);
var state_9412__$1 = state_9412;
var statearr_9453_9508 = state_9412__$1;
(statearr_9453_9508[(2)] = inst_9361);

(statearr_9453_9508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (11))){
var inst_9342 = (state_9412[(7)]);
var inst_9346 = (inst_9342 == null);
var inst_9347 = cljs.core.not.call(null,inst_9346);
var state_9412__$1 = state_9412;
if(inst_9347){
var statearr_9454_9509 = state_9412__$1;
(statearr_9454_9509[(1)] = (13));

} else {
var statearr_9455_9510 = state_9412__$1;
(statearr_9455_9510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (9))){
var inst_9318 = (state_9412[(8)]);
var state_9412__$1 = state_9412;
var statearr_9456_9511 = state_9412__$1;
(statearr_9456_9511[(2)] = inst_9318);

(statearr_9456_9511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (5))){
var state_9412__$1 = state_9412;
var statearr_9457_9512 = state_9412__$1;
(statearr_9457_9512[(2)] = true);

(statearr_9457_9512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (14))){
var state_9412__$1 = state_9412;
var statearr_9458_9513 = state_9412__$1;
(statearr_9458_9513[(2)] = false);

(statearr_9458_9513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (26))){
var inst_9372 = (state_9412[(9)]);
var inst_9379 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9372);
var state_9412__$1 = state_9412;
var statearr_9459_9514 = state_9412__$1;
(statearr_9459_9514[(2)] = inst_9379);

(statearr_9459_9514[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (16))){
var state_9412__$1 = state_9412;
var statearr_9460_9515 = state_9412__$1;
(statearr_9460_9515[(2)] = true);

(statearr_9460_9515[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (38))){
var inst_9402 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
var statearr_9461_9516 = state_9412__$1;
(statearr_9461_9516[(2)] = inst_9402);

(statearr_9461_9516[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (30))){
var inst_9366 = (state_9412[(13)]);
var inst_9372 = (state_9412[(9)]);
var inst_9365 = (state_9412[(10)]);
var inst_9389 = cljs.core.empty_QMARK_.call(null,inst_9365);
var inst_9390 = inst_9366.call(null,inst_9372);
var inst_9391 = cljs.core.not.call(null,inst_9390);
var inst_9392 = (inst_9389) && (inst_9391);
var state_9412__$1 = state_9412;
var statearr_9462_9517 = state_9412__$1;
(statearr_9462_9517[(2)] = inst_9392);

(statearr_9462_9517[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (10))){
var inst_9318 = (state_9412[(8)]);
var inst_9338 = (state_9412[(2)]);
var inst_9339 = cljs.core.get.call(null,inst_9338,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9340 = cljs.core.get.call(null,inst_9338,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9341 = cljs.core.get.call(null,inst_9338,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9342 = inst_9318;
var state_9412__$1 = (function (){var statearr_9463 = state_9412;
(statearr_9463[(16)] = inst_9339);

(statearr_9463[(17)] = inst_9340);

(statearr_9463[(18)] = inst_9341);

(statearr_9463[(7)] = inst_9342);

return statearr_9463;
})();
var statearr_9464_9518 = state_9412__$1;
(statearr_9464_9518[(2)] = null);

(statearr_9464_9518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (18))){
var inst_9356 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
var statearr_9465_9519 = state_9412__$1;
(statearr_9465_9519[(2)] = inst_9356);

(statearr_9465_9519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (37))){
var state_9412__$1 = state_9412;
var statearr_9466_9520 = state_9412__$1;
(statearr_9466_9520[(2)] = null);

(statearr_9466_9520[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9413 === (8))){
var inst_9318 = (state_9412[(8)]);
var inst_9335 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9318);
var state_9412__$1 = state_9412;
var statearr_9467_9521 = state_9412__$1;
(statearr_9467_9521[(2)] = inst_9335);

(statearr_9467_9521[(1)] = (10));


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
});})(c__7799__auto___9475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7743__auto__,c__7799__auto___9475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7744__auto__ = null;
var cljs$core$async$mix_$_state_machine__7744__auto____0 = (function (){
var statearr_9471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9471[(0)] = cljs$core$async$mix_$_state_machine__7744__auto__);

(statearr_9471[(1)] = (1));

return statearr_9471;
});
var cljs$core$async$mix_$_state_machine__7744__auto____1 = (function (state_9412){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_9412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e9472){if((e9472 instanceof Object)){
var ex__7747__auto__ = e9472;
var statearr_9473_9522 = state_9412;
(statearr_9473_9522[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9523 = state_9412;
state_9412 = G__9523;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7744__auto__ = function(state_9412){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7744__auto____1.call(this,state_9412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7744__auto____0;
cljs$core$async$mix_$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7744__auto____1;
return cljs$core$async$mix_$_state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___9475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7801__auto__ = (function (){var statearr_9474 = f__7800__auto__.call(null);
(statearr_9474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___9475);

return statearr_9474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___9475,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args9524 = [];
var len__5726__auto___9527 = arguments.length;
var i__5727__auto___9528 = (0);
while(true){
if((i__5727__auto___9528 < len__5726__auto___9527)){
args9524.push((arguments[i__5727__auto___9528]));

var G__9529 = (i__5727__auto___9528 + (1));
i__5727__auto___9528 = G__9529;
continue;
} else {
}
break;
}

var G__9526 = args9524.length;
switch (G__9526) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9524.length)].join('')));

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
var args9532 = [];
var len__5726__auto___9657 = arguments.length;
var i__5727__auto___9658 = (0);
while(true){
if((i__5727__auto___9658 < len__5726__auto___9657)){
args9532.push((arguments[i__5727__auto___9658]));

var G__9659 = (i__5727__auto___9658 + (1));
i__5727__auto___9658 = G__9659;
continue;
} else {
}
break;
}

var G__9534 = args9532.length;
switch (G__9534) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9532.length)].join('')));

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
return (function (p1__9531_SHARP_){
if(cljs.core.truth_(p1__9531_SHARP_.call(null,topic))){
return p1__9531_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__9531_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async9535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9535 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9536){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9536 = meta9536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9537,meta9536__$1){
var self__ = this;
var _9537__$1 = this;
return (new cljs.core.async.t_cljs$core$async9535(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9536__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9537){
var self__ = this;
var _9537__$1 = this;
return self__.meta9536;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9535.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9535.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async9535.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9535.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async9535.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9535.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9535.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9536","meta9536",-1500074647,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9535";

cljs.core.async.t_cljs$core$async9535.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9535");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async9535 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9535(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9536){
return (new cljs.core.async.t_cljs$core$async9535(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9536));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9535(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7799__auto___9661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___9661,mults,ensure_mult,p){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___9661,mults,ensure_mult,p){
return (function (state_9609){
var state_val_9610 = (state_9609[(1)]);
if((state_val_9610 === (7))){
var inst_9605 = (state_9609[(2)]);
var state_9609__$1 = state_9609;
var statearr_9611_9662 = state_9609__$1;
(statearr_9611_9662[(2)] = inst_9605);

(statearr_9611_9662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (20))){
var state_9609__$1 = state_9609;
var statearr_9612_9663 = state_9609__$1;
(statearr_9612_9663[(2)] = null);

(statearr_9612_9663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (1))){
var state_9609__$1 = state_9609;
var statearr_9613_9664 = state_9609__$1;
(statearr_9613_9664[(2)] = null);

(statearr_9613_9664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (24))){
var inst_9588 = (state_9609[(7)]);
var inst_9597 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9588);
var state_9609__$1 = state_9609;
var statearr_9614_9665 = state_9609__$1;
(statearr_9614_9665[(2)] = inst_9597);

(statearr_9614_9665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (4))){
var inst_9540 = (state_9609[(8)]);
var inst_9540__$1 = (state_9609[(2)]);
var inst_9541 = (inst_9540__$1 == null);
var state_9609__$1 = (function (){var statearr_9615 = state_9609;
(statearr_9615[(8)] = inst_9540__$1);

return statearr_9615;
})();
if(cljs.core.truth_(inst_9541)){
var statearr_9616_9666 = state_9609__$1;
(statearr_9616_9666[(1)] = (5));

} else {
var statearr_9617_9667 = state_9609__$1;
(statearr_9617_9667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (15))){
var inst_9582 = (state_9609[(2)]);
var state_9609__$1 = state_9609;
var statearr_9618_9668 = state_9609__$1;
(statearr_9618_9668[(2)] = inst_9582);

(statearr_9618_9668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (21))){
var inst_9602 = (state_9609[(2)]);
var state_9609__$1 = (function (){var statearr_9619 = state_9609;
(statearr_9619[(9)] = inst_9602);

return statearr_9619;
})();
var statearr_9620_9669 = state_9609__$1;
(statearr_9620_9669[(2)] = null);

(statearr_9620_9669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (13))){
var inst_9564 = (state_9609[(10)]);
var inst_9566 = cljs.core.chunked_seq_QMARK_.call(null,inst_9564);
var state_9609__$1 = state_9609;
if(inst_9566){
var statearr_9621_9670 = state_9609__$1;
(statearr_9621_9670[(1)] = (16));

} else {
var statearr_9622_9671 = state_9609__$1;
(statearr_9622_9671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (22))){
var inst_9594 = (state_9609[(2)]);
var state_9609__$1 = state_9609;
if(cljs.core.truth_(inst_9594)){
var statearr_9623_9672 = state_9609__$1;
(statearr_9623_9672[(1)] = (23));

} else {
var statearr_9624_9673 = state_9609__$1;
(statearr_9624_9673[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (6))){
var inst_9540 = (state_9609[(8)]);
var inst_9588 = (state_9609[(7)]);
var inst_9590 = (state_9609[(11)]);
var inst_9588__$1 = topic_fn.call(null,inst_9540);
var inst_9589 = cljs.core.deref.call(null,mults);
var inst_9590__$1 = cljs.core.get.call(null,inst_9589,inst_9588__$1);
var state_9609__$1 = (function (){var statearr_9625 = state_9609;
(statearr_9625[(7)] = inst_9588__$1);

(statearr_9625[(11)] = inst_9590__$1);

return statearr_9625;
})();
if(cljs.core.truth_(inst_9590__$1)){
var statearr_9626_9674 = state_9609__$1;
(statearr_9626_9674[(1)] = (19));

} else {
var statearr_9627_9675 = state_9609__$1;
(statearr_9627_9675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (25))){
var inst_9599 = (state_9609[(2)]);
var state_9609__$1 = state_9609;
var statearr_9628_9676 = state_9609__$1;
(statearr_9628_9676[(2)] = inst_9599);

(statearr_9628_9676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (17))){
var inst_9564 = (state_9609[(10)]);
var inst_9573 = cljs.core.first.call(null,inst_9564);
var inst_9574 = cljs.core.async.muxch_STAR_.call(null,inst_9573);
var inst_9575 = cljs.core.async.close_BANG_.call(null,inst_9574);
var inst_9576 = cljs.core.next.call(null,inst_9564);
var inst_9550 = inst_9576;
var inst_9551 = null;
var inst_9552 = (0);
var inst_9553 = (0);
var state_9609__$1 = (function (){var statearr_9629 = state_9609;
(statearr_9629[(12)] = inst_9550);

(statearr_9629[(13)] = inst_9552);

(statearr_9629[(14)] = inst_9575);

(statearr_9629[(15)] = inst_9553);

(statearr_9629[(16)] = inst_9551);

return statearr_9629;
})();
var statearr_9630_9677 = state_9609__$1;
(statearr_9630_9677[(2)] = null);

(statearr_9630_9677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (3))){
var inst_9607 = (state_9609[(2)]);
var state_9609__$1 = state_9609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9609__$1,inst_9607);
} else {
if((state_val_9610 === (12))){
var inst_9584 = (state_9609[(2)]);
var state_9609__$1 = state_9609;
var statearr_9631_9678 = state_9609__$1;
(statearr_9631_9678[(2)] = inst_9584);

(statearr_9631_9678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (2))){
var state_9609__$1 = state_9609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9609__$1,(4),ch);
} else {
if((state_val_9610 === (23))){
var state_9609__$1 = state_9609;
var statearr_9632_9679 = state_9609__$1;
(statearr_9632_9679[(2)] = null);

(statearr_9632_9679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (19))){
var inst_9540 = (state_9609[(8)]);
var inst_9590 = (state_9609[(11)]);
var inst_9592 = cljs.core.async.muxch_STAR_.call(null,inst_9590);
var state_9609__$1 = state_9609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9609__$1,(22),inst_9592,inst_9540);
} else {
if((state_val_9610 === (11))){
var inst_9550 = (state_9609[(12)]);
var inst_9564 = (state_9609[(10)]);
var inst_9564__$1 = cljs.core.seq.call(null,inst_9550);
var state_9609__$1 = (function (){var statearr_9633 = state_9609;
(statearr_9633[(10)] = inst_9564__$1);

return statearr_9633;
})();
if(inst_9564__$1){
var statearr_9634_9680 = state_9609__$1;
(statearr_9634_9680[(1)] = (13));

} else {
var statearr_9635_9681 = state_9609__$1;
(statearr_9635_9681[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (9))){
var inst_9586 = (state_9609[(2)]);
var state_9609__$1 = state_9609;
var statearr_9636_9682 = state_9609__$1;
(statearr_9636_9682[(2)] = inst_9586);

(statearr_9636_9682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (5))){
var inst_9547 = cljs.core.deref.call(null,mults);
var inst_9548 = cljs.core.vals.call(null,inst_9547);
var inst_9549 = cljs.core.seq.call(null,inst_9548);
var inst_9550 = inst_9549;
var inst_9551 = null;
var inst_9552 = (0);
var inst_9553 = (0);
var state_9609__$1 = (function (){var statearr_9637 = state_9609;
(statearr_9637[(12)] = inst_9550);

(statearr_9637[(13)] = inst_9552);

(statearr_9637[(15)] = inst_9553);

(statearr_9637[(16)] = inst_9551);

return statearr_9637;
})();
var statearr_9638_9683 = state_9609__$1;
(statearr_9638_9683[(2)] = null);

(statearr_9638_9683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (14))){
var state_9609__$1 = state_9609;
var statearr_9642_9684 = state_9609__$1;
(statearr_9642_9684[(2)] = null);

(statearr_9642_9684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (16))){
var inst_9564 = (state_9609[(10)]);
var inst_9568 = cljs.core.chunk_first.call(null,inst_9564);
var inst_9569 = cljs.core.chunk_rest.call(null,inst_9564);
var inst_9570 = cljs.core.count.call(null,inst_9568);
var inst_9550 = inst_9569;
var inst_9551 = inst_9568;
var inst_9552 = inst_9570;
var inst_9553 = (0);
var state_9609__$1 = (function (){var statearr_9643 = state_9609;
(statearr_9643[(12)] = inst_9550);

(statearr_9643[(13)] = inst_9552);

(statearr_9643[(15)] = inst_9553);

(statearr_9643[(16)] = inst_9551);

return statearr_9643;
})();
var statearr_9644_9685 = state_9609__$1;
(statearr_9644_9685[(2)] = null);

(statearr_9644_9685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (10))){
var inst_9550 = (state_9609[(12)]);
var inst_9552 = (state_9609[(13)]);
var inst_9553 = (state_9609[(15)]);
var inst_9551 = (state_9609[(16)]);
var inst_9558 = cljs.core._nth.call(null,inst_9551,inst_9553);
var inst_9559 = cljs.core.async.muxch_STAR_.call(null,inst_9558);
var inst_9560 = cljs.core.async.close_BANG_.call(null,inst_9559);
var inst_9561 = (inst_9553 + (1));
var tmp9639 = inst_9550;
var tmp9640 = inst_9552;
var tmp9641 = inst_9551;
var inst_9550__$1 = tmp9639;
var inst_9551__$1 = tmp9641;
var inst_9552__$1 = tmp9640;
var inst_9553__$1 = inst_9561;
var state_9609__$1 = (function (){var statearr_9645 = state_9609;
(statearr_9645[(17)] = inst_9560);

(statearr_9645[(12)] = inst_9550__$1);

(statearr_9645[(13)] = inst_9552__$1);

(statearr_9645[(15)] = inst_9553__$1);

(statearr_9645[(16)] = inst_9551__$1);

return statearr_9645;
})();
var statearr_9646_9686 = state_9609__$1;
(statearr_9646_9686[(2)] = null);

(statearr_9646_9686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (18))){
var inst_9579 = (state_9609[(2)]);
var state_9609__$1 = state_9609;
var statearr_9647_9687 = state_9609__$1;
(statearr_9647_9687[(2)] = inst_9579);

(statearr_9647_9687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9610 === (8))){
var inst_9552 = (state_9609[(13)]);
var inst_9553 = (state_9609[(15)]);
var inst_9555 = (inst_9553 < inst_9552);
var inst_9556 = inst_9555;
var state_9609__$1 = state_9609;
if(cljs.core.truth_(inst_9556)){
var statearr_9648_9688 = state_9609__$1;
(statearr_9648_9688[(1)] = (10));

} else {
var statearr_9649_9689 = state_9609__$1;
(statearr_9649_9689[(1)] = (11));

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
});})(c__7799__auto___9661,mults,ensure_mult,p))
;
return ((function (switch__7743__auto__,c__7799__auto___9661,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7744__auto__ = null;
var cljs$core$async$state_machine__7744__auto____0 = (function (){
var statearr_9653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9653[(0)] = cljs$core$async$state_machine__7744__auto__);

(statearr_9653[(1)] = (1));

return statearr_9653;
});
var cljs$core$async$state_machine__7744__auto____1 = (function (state_9609){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_9609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e9654){if((e9654 instanceof Object)){
var ex__7747__auto__ = e9654;
var statearr_9655_9690 = state_9609;
(statearr_9655_9690[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9691 = state_9609;
state_9609 = G__9691;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$state_machine__7744__auto__ = function(state_9609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7744__auto____1.call(this,state_9609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7744__auto____0;
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7744__auto____1;
return cljs$core$async$state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___9661,mults,ensure_mult,p))
})();
var state__7801__auto__ = (function (){var statearr_9656 = f__7800__auto__.call(null);
(statearr_9656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___9661);

return statearr_9656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___9661,mults,ensure_mult,p))
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
var args9692 = [];
var len__5726__auto___9695 = arguments.length;
var i__5727__auto___9696 = (0);
while(true){
if((i__5727__auto___9696 < len__5726__auto___9695)){
args9692.push((arguments[i__5727__auto___9696]));

var G__9697 = (i__5727__auto___9696 + (1));
i__5727__auto___9696 = G__9697;
continue;
} else {
}
break;
}

var G__9694 = args9692.length;
switch (G__9694) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9692.length)].join('')));

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
var args9699 = [];
var len__5726__auto___9702 = arguments.length;
var i__5727__auto___9703 = (0);
while(true){
if((i__5727__auto___9703 < len__5726__auto___9702)){
args9699.push((arguments[i__5727__auto___9703]));

var G__9704 = (i__5727__auto___9703 + (1));
i__5727__auto___9703 = G__9704;
continue;
} else {
}
break;
}

var G__9701 = args9699.length;
switch (G__9701) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9699.length)].join('')));

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
var args9706 = [];
var len__5726__auto___9777 = arguments.length;
var i__5727__auto___9778 = (0);
while(true){
if((i__5727__auto___9778 < len__5726__auto___9777)){
args9706.push((arguments[i__5727__auto___9778]));

var G__9779 = (i__5727__auto___9778 + (1));
i__5727__auto___9778 = G__9779;
continue;
} else {
}
break;
}

var G__9708 = args9706.length;
switch (G__9708) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9706.length)].join('')));

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
var c__7799__auto___9781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___9781,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___9781,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9747){
var state_val_9748 = (state_9747[(1)]);
if((state_val_9748 === (7))){
var state_9747__$1 = state_9747;
var statearr_9749_9782 = state_9747__$1;
(statearr_9749_9782[(2)] = null);

(statearr_9749_9782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9748 === (1))){
var state_9747__$1 = state_9747;
var statearr_9750_9783 = state_9747__$1;
(statearr_9750_9783[(2)] = null);

(statearr_9750_9783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9748 === (4))){
var inst_9711 = (state_9747[(7)]);
var inst_9713 = (inst_9711 < cnt);
var state_9747__$1 = state_9747;
if(cljs.core.truth_(inst_9713)){
var statearr_9751_9784 = state_9747__$1;
(statearr_9751_9784[(1)] = (6));

} else {
var statearr_9752_9785 = state_9747__$1;
(statearr_9752_9785[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9748 === (15))){
var inst_9743 = (state_9747[(2)]);
var state_9747__$1 = state_9747;
var statearr_9753_9786 = state_9747__$1;
(statearr_9753_9786[(2)] = inst_9743);

(statearr_9753_9786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9748 === (13))){
var inst_9736 = cljs.core.async.close_BANG_.call(null,out);
var state_9747__$1 = state_9747;
var statearr_9754_9787 = state_9747__$1;
(statearr_9754_9787[(2)] = inst_9736);

(statearr_9754_9787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9748 === (6))){
var state_9747__$1 = state_9747;
var statearr_9755_9788 = state_9747__$1;
(statearr_9755_9788[(2)] = null);

(statearr_9755_9788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9748 === (3))){
var inst_9745 = (state_9747[(2)]);
var state_9747__$1 = state_9747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9747__$1,inst_9745);
} else {
if((state_val_9748 === (12))){
var inst_9733 = (state_9747[(8)]);
var inst_9733__$1 = (state_9747[(2)]);
var inst_9734 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9733__$1);
var state_9747__$1 = (function (){var statearr_9756 = state_9747;
(statearr_9756[(8)] = inst_9733__$1);

return statearr_9756;
})();
if(cljs.core.truth_(inst_9734)){
var statearr_9757_9789 = state_9747__$1;
(statearr_9757_9789[(1)] = (13));

} else {
var statearr_9758_9790 = state_9747__$1;
(statearr_9758_9790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9748 === (2))){
var inst_9710 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9711 = (0);
var state_9747__$1 = (function (){var statearr_9759 = state_9747;
(statearr_9759[(9)] = inst_9710);

(statearr_9759[(7)] = inst_9711);

return statearr_9759;
})();
var statearr_9760_9791 = state_9747__$1;
(statearr_9760_9791[(2)] = null);

(statearr_9760_9791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9748 === (11))){
var inst_9711 = (state_9747[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9747,(10),Object,null,(9));
var inst_9720 = chs__$1.call(null,inst_9711);
var inst_9721 = done.call(null,inst_9711);
var inst_9722 = cljs.core.async.take_BANG_.call(null,inst_9720,inst_9721);
var state_9747__$1 = state_9747;
var statearr_9761_9792 = state_9747__$1;
(statearr_9761_9792[(2)] = inst_9722);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9747__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9748 === (9))){
var inst_9711 = (state_9747[(7)]);
var inst_9724 = (state_9747[(2)]);
var inst_9725 = (inst_9711 + (1));
var inst_9711__$1 = inst_9725;
var state_9747__$1 = (function (){var statearr_9762 = state_9747;
(statearr_9762[(10)] = inst_9724);

(statearr_9762[(7)] = inst_9711__$1);

return statearr_9762;
})();
var statearr_9763_9793 = state_9747__$1;
(statearr_9763_9793[(2)] = null);

(statearr_9763_9793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9748 === (5))){
var inst_9731 = (state_9747[(2)]);
var state_9747__$1 = (function (){var statearr_9764 = state_9747;
(statearr_9764[(11)] = inst_9731);

return statearr_9764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9747__$1,(12),dchan);
} else {
if((state_val_9748 === (14))){
var inst_9733 = (state_9747[(8)]);
var inst_9738 = cljs.core.apply.call(null,f,inst_9733);
var state_9747__$1 = state_9747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9747__$1,(16),out,inst_9738);
} else {
if((state_val_9748 === (16))){
var inst_9740 = (state_9747[(2)]);
var state_9747__$1 = (function (){var statearr_9765 = state_9747;
(statearr_9765[(12)] = inst_9740);

return statearr_9765;
})();
var statearr_9766_9794 = state_9747__$1;
(statearr_9766_9794[(2)] = null);

(statearr_9766_9794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9748 === (10))){
var inst_9715 = (state_9747[(2)]);
var inst_9716 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9747__$1 = (function (){var statearr_9767 = state_9747;
(statearr_9767[(13)] = inst_9715);

return statearr_9767;
})();
var statearr_9768_9795 = state_9747__$1;
(statearr_9768_9795[(2)] = inst_9716);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9747__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9748 === (8))){
var inst_9729 = (state_9747[(2)]);
var state_9747__$1 = state_9747;
var statearr_9769_9796 = state_9747__$1;
(statearr_9769_9796[(2)] = inst_9729);

(statearr_9769_9796[(1)] = (5));


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
});})(c__7799__auto___9781,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7743__auto__,c__7799__auto___9781,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7744__auto__ = null;
var cljs$core$async$state_machine__7744__auto____0 = (function (){
var statearr_9773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9773[(0)] = cljs$core$async$state_machine__7744__auto__);

(statearr_9773[(1)] = (1));

return statearr_9773;
});
var cljs$core$async$state_machine__7744__auto____1 = (function (state_9747){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_9747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e9774){if((e9774 instanceof Object)){
var ex__7747__auto__ = e9774;
var statearr_9775_9797 = state_9747;
(statearr_9775_9797[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9798 = state_9747;
state_9747 = G__9798;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$state_machine__7744__auto__ = function(state_9747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7744__auto____1.call(this,state_9747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7744__auto____0;
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7744__auto____1;
return cljs$core$async$state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___9781,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7801__auto__ = (function (){var statearr_9776 = f__7800__auto__.call(null);
(statearr_9776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___9781);

return statearr_9776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___9781,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args9800 = [];
var len__5726__auto___9856 = arguments.length;
var i__5727__auto___9857 = (0);
while(true){
if((i__5727__auto___9857 < len__5726__auto___9856)){
args9800.push((arguments[i__5727__auto___9857]));

var G__9858 = (i__5727__auto___9857 + (1));
i__5727__auto___9857 = G__9858;
continue;
} else {
}
break;
}

var G__9802 = args9800.length;
switch (G__9802) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9800.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7799__auto___9860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___9860,out){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___9860,out){
return (function (state_9832){
var state_val_9833 = (state_9832[(1)]);
if((state_val_9833 === (7))){
var inst_9812 = (state_9832[(7)]);
var inst_9811 = (state_9832[(8)]);
var inst_9811__$1 = (state_9832[(2)]);
var inst_9812__$1 = cljs.core.nth.call(null,inst_9811__$1,(0),null);
var inst_9813 = cljs.core.nth.call(null,inst_9811__$1,(1),null);
var inst_9814 = (inst_9812__$1 == null);
var state_9832__$1 = (function (){var statearr_9834 = state_9832;
(statearr_9834[(9)] = inst_9813);

(statearr_9834[(7)] = inst_9812__$1);

(statearr_9834[(8)] = inst_9811__$1);

return statearr_9834;
})();
if(cljs.core.truth_(inst_9814)){
var statearr_9835_9861 = state_9832__$1;
(statearr_9835_9861[(1)] = (8));

} else {
var statearr_9836_9862 = state_9832__$1;
(statearr_9836_9862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9833 === (1))){
var inst_9803 = cljs.core.vec.call(null,chs);
var inst_9804 = inst_9803;
var state_9832__$1 = (function (){var statearr_9837 = state_9832;
(statearr_9837[(10)] = inst_9804);

return statearr_9837;
})();
var statearr_9838_9863 = state_9832__$1;
(statearr_9838_9863[(2)] = null);

(statearr_9838_9863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9833 === (4))){
var inst_9804 = (state_9832[(10)]);
var state_9832__$1 = state_9832;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9832__$1,(7),inst_9804);
} else {
if((state_val_9833 === (6))){
var inst_9828 = (state_9832[(2)]);
var state_9832__$1 = state_9832;
var statearr_9839_9864 = state_9832__$1;
(statearr_9839_9864[(2)] = inst_9828);

(statearr_9839_9864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9833 === (3))){
var inst_9830 = (state_9832[(2)]);
var state_9832__$1 = state_9832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9832__$1,inst_9830);
} else {
if((state_val_9833 === (2))){
var inst_9804 = (state_9832[(10)]);
var inst_9806 = cljs.core.count.call(null,inst_9804);
var inst_9807 = (inst_9806 > (0));
var state_9832__$1 = state_9832;
if(cljs.core.truth_(inst_9807)){
var statearr_9841_9865 = state_9832__$1;
(statearr_9841_9865[(1)] = (4));

} else {
var statearr_9842_9866 = state_9832__$1;
(statearr_9842_9866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9833 === (11))){
var inst_9804 = (state_9832[(10)]);
var inst_9821 = (state_9832[(2)]);
var tmp9840 = inst_9804;
var inst_9804__$1 = tmp9840;
var state_9832__$1 = (function (){var statearr_9843 = state_9832;
(statearr_9843[(11)] = inst_9821);

(statearr_9843[(10)] = inst_9804__$1);

return statearr_9843;
})();
var statearr_9844_9867 = state_9832__$1;
(statearr_9844_9867[(2)] = null);

(statearr_9844_9867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9833 === (9))){
var inst_9812 = (state_9832[(7)]);
var state_9832__$1 = state_9832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9832__$1,(11),out,inst_9812);
} else {
if((state_val_9833 === (5))){
var inst_9826 = cljs.core.async.close_BANG_.call(null,out);
var state_9832__$1 = state_9832;
var statearr_9845_9868 = state_9832__$1;
(statearr_9845_9868[(2)] = inst_9826);

(statearr_9845_9868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9833 === (10))){
var inst_9824 = (state_9832[(2)]);
var state_9832__$1 = state_9832;
var statearr_9846_9869 = state_9832__$1;
(statearr_9846_9869[(2)] = inst_9824);

(statearr_9846_9869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9833 === (8))){
var inst_9813 = (state_9832[(9)]);
var inst_9812 = (state_9832[(7)]);
var inst_9804 = (state_9832[(10)]);
var inst_9811 = (state_9832[(8)]);
var inst_9816 = (function (){var cs = inst_9804;
var vec__9809 = inst_9811;
var v = inst_9812;
var c = inst_9813;
return ((function (cs,vec__9809,v,c,inst_9813,inst_9812,inst_9804,inst_9811,state_val_9833,c__7799__auto___9860,out){
return (function (p1__9799_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9799_SHARP_);
});
;})(cs,vec__9809,v,c,inst_9813,inst_9812,inst_9804,inst_9811,state_val_9833,c__7799__auto___9860,out))
})();
var inst_9817 = cljs.core.filterv.call(null,inst_9816,inst_9804);
var inst_9804__$1 = inst_9817;
var state_9832__$1 = (function (){var statearr_9847 = state_9832;
(statearr_9847[(10)] = inst_9804__$1);

return statearr_9847;
})();
var statearr_9848_9870 = state_9832__$1;
(statearr_9848_9870[(2)] = null);

(statearr_9848_9870[(1)] = (2));


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
});})(c__7799__auto___9860,out))
;
return ((function (switch__7743__auto__,c__7799__auto___9860,out){
return (function() {
var cljs$core$async$state_machine__7744__auto__ = null;
var cljs$core$async$state_machine__7744__auto____0 = (function (){
var statearr_9852 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9852[(0)] = cljs$core$async$state_machine__7744__auto__);

(statearr_9852[(1)] = (1));

return statearr_9852;
});
var cljs$core$async$state_machine__7744__auto____1 = (function (state_9832){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_9832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e9853){if((e9853 instanceof Object)){
var ex__7747__auto__ = e9853;
var statearr_9854_9871 = state_9832;
(statearr_9854_9871[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9872 = state_9832;
state_9832 = G__9872;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$state_machine__7744__auto__ = function(state_9832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7744__auto____1.call(this,state_9832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7744__auto____0;
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7744__auto____1;
return cljs$core$async$state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___9860,out))
})();
var state__7801__auto__ = (function (){var statearr_9855 = f__7800__auto__.call(null);
(statearr_9855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___9860);

return statearr_9855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___9860,out))
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
var args9873 = [];
var len__5726__auto___9922 = arguments.length;
var i__5727__auto___9923 = (0);
while(true){
if((i__5727__auto___9923 < len__5726__auto___9922)){
args9873.push((arguments[i__5727__auto___9923]));

var G__9924 = (i__5727__auto___9923 + (1));
i__5727__auto___9923 = G__9924;
continue;
} else {
}
break;
}

var G__9875 = args9873.length;
switch (G__9875) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9873.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7799__auto___9926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___9926,out){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___9926,out){
return (function (state_9899){
var state_val_9900 = (state_9899[(1)]);
if((state_val_9900 === (7))){
var inst_9881 = (state_9899[(7)]);
var inst_9881__$1 = (state_9899[(2)]);
var inst_9882 = (inst_9881__$1 == null);
var inst_9883 = cljs.core.not.call(null,inst_9882);
var state_9899__$1 = (function (){var statearr_9901 = state_9899;
(statearr_9901[(7)] = inst_9881__$1);

return statearr_9901;
})();
if(inst_9883){
var statearr_9902_9927 = state_9899__$1;
(statearr_9902_9927[(1)] = (8));

} else {
var statearr_9903_9928 = state_9899__$1;
(statearr_9903_9928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9900 === (1))){
var inst_9876 = (0);
var state_9899__$1 = (function (){var statearr_9904 = state_9899;
(statearr_9904[(8)] = inst_9876);

return statearr_9904;
})();
var statearr_9905_9929 = state_9899__$1;
(statearr_9905_9929[(2)] = null);

(statearr_9905_9929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9900 === (4))){
var state_9899__$1 = state_9899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9899__$1,(7),ch);
} else {
if((state_val_9900 === (6))){
var inst_9894 = (state_9899[(2)]);
var state_9899__$1 = state_9899;
var statearr_9906_9930 = state_9899__$1;
(statearr_9906_9930[(2)] = inst_9894);

(statearr_9906_9930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9900 === (3))){
var inst_9896 = (state_9899[(2)]);
var inst_9897 = cljs.core.async.close_BANG_.call(null,out);
var state_9899__$1 = (function (){var statearr_9907 = state_9899;
(statearr_9907[(9)] = inst_9896);

return statearr_9907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9899__$1,inst_9897);
} else {
if((state_val_9900 === (2))){
var inst_9876 = (state_9899[(8)]);
var inst_9878 = (inst_9876 < n);
var state_9899__$1 = state_9899;
if(cljs.core.truth_(inst_9878)){
var statearr_9908_9931 = state_9899__$1;
(statearr_9908_9931[(1)] = (4));

} else {
var statearr_9909_9932 = state_9899__$1;
(statearr_9909_9932[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9900 === (11))){
var inst_9876 = (state_9899[(8)]);
var inst_9886 = (state_9899[(2)]);
var inst_9887 = (inst_9876 + (1));
var inst_9876__$1 = inst_9887;
var state_9899__$1 = (function (){var statearr_9910 = state_9899;
(statearr_9910[(8)] = inst_9876__$1);

(statearr_9910[(10)] = inst_9886);

return statearr_9910;
})();
var statearr_9911_9933 = state_9899__$1;
(statearr_9911_9933[(2)] = null);

(statearr_9911_9933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9900 === (9))){
var state_9899__$1 = state_9899;
var statearr_9912_9934 = state_9899__$1;
(statearr_9912_9934[(2)] = null);

(statearr_9912_9934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9900 === (5))){
var state_9899__$1 = state_9899;
var statearr_9913_9935 = state_9899__$1;
(statearr_9913_9935[(2)] = null);

(statearr_9913_9935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9900 === (10))){
var inst_9891 = (state_9899[(2)]);
var state_9899__$1 = state_9899;
var statearr_9914_9936 = state_9899__$1;
(statearr_9914_9936[(2)] = inst_9891);

(statearr_9914_9936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9900 === (8))){
var inst_9881 = (state_9899[(7)]);
var state_9899__$1 = state_9899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9899__$1,(11),out,inst_9881);
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
});})(c__7799__auto___9926,out))
;
return ((function (switch__7743__auto__,c__7799__auto___9926,out){
return (function() {
var cljs$core$async$state_machine__7744__auto__ = null;
var cljs$core$async$state_machine__7744__auto____0 = (function (){
var statearr_9918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9918[(0)] = cljs$core$async$state_machine__7744__auto__);

(statearr_9918[(1)] = (1));

return statearr_9918;
});
var cljs$core$async$state_machine__7744__auto____1 = (function (state_9899){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_9899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e9919){if((e9919 instanceof Object)){
var ex__7747__auto__ = e9919;
var statearr_9920_9937 = state_9899;
(statearr_9920_9937[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9938 = state_9899;
state_9899 = G__9938;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$state_machine__7744__auto__ = function(state_9899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7744__auto____1.call(this,state_9899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7744__auto____0;
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7744__auto____1;
return cljs$core$async$state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___9926,out))
})();
var state__7801__auto__ = (function (){var statearr_9921 = f__7800__auto__.call(null);
(statearr_9921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___9926);

return statearr_9921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___9926,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9946 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9946 = (function (map_LT_,f,ch,meta9947){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9947 = meta9947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9948,meta9947__$1){
var self__ = this;
var _9948__$1 = this;
return (new cljs.core.async.t_cljs$core$async9946(self__.map_LT_,self__.f,self__.ch,meta9947__$1));
});

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9948){
var self__ = this;
var _9948__$1 = this;
return self__.meta9947;
});

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9949 = (function (map_LT_,f,ch,meta9947,_,fn1,meta9950){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9947 = meta9947;
this._ = _;
this.fn1 = fn1;
this.meta9950 = meta9950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9951,meta9950__$1){
var self__ = this;
var _9951__$1 = this;
return (new cljs.core.async.t_cljs$core$async9949(self__.map_LT_,self__.f,self__.ch,self__.meta9947,self__._,self__.fn1,meta9950__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9951){
var self__ = this;
var _9951__$1 = this;
return self__.meta9950;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9939_SHARP_){
return f1.call(null,(((p1__9939_SHARP_ == null))?null:self__.f.call(null,p1__9939_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9949.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9947","meta9947",-982418637,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9946","cljs.core.async/t_cljs$core$async9946",-1028030240,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9950","meta9950",-1742629574,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9949";

cljs.core.async.t_cljs$core$async9949.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9949");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9949 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9949(map_LT___$1,f__$1,ch__$1,meta9947__$1,___$2,fn1__$1,meta9950){
return (new cljs.core.async.t_cljs$core$async9949(map_LT___$1,f__$1,ch__$1,meta9947__$1,___$2,fn1__$1,meta9950));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9949(self__.map_LT_,self__.f,self__.ch,self__.meta9947,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9947","meta9947",-982418637,null)], null);
});

cljs.core.async.t_cljs$core$async9946.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9946";

cljs.core.async.t_cljs$core$async9946.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9946");
});

cljs.core.async.__GT_t_cljs$core$async9946 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9946(map_LT___$1,f__$1,ch__$1,meta9947){
return (new cljs.core.async.t_cljs$core$async9946(map_LT___$1,f__$1,ch__$1,meta9947));
});

}

return (new cljs.core.async.t_cljs$core$async9946(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9955 = (function (map_GT_,f,ch,meta9956){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9956 = meta9956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9957,meta9956__$1){
var self__ = this;
var _9957__$1 = this;
return (new cljs.core.async.t_cljs$core$async9955(self__.map_GT_,self__.f,self__.ch,meta9956__$1));
});

cljs.core.async.t_cljs$core$async9955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9957){
var self__ = this;
var _9957__$1 = this;
return self__.meta9956;
});

cljs.core.async.t_cljs$core$async9955.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9955.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9955.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9956","meta9956",1995747044,null)], null);
});

cljs.core.async.t_cljs$core$async9955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9955";

cljs.core.async.t_cljs$core$async9955.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9955");
});

cljs.core.async.__GT_t_cljs$core$async9955 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9955(map_GT___$1,f__$1,ch__$1,meta9956){
return (new cljs.core.async.t_cljs$core$async9955(map_GT___$1,f__$1,ch__$1,meta9956));
});

}

return (new cljs.core.async.t_cljs$core$async9955(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9961 = (function (filter_GT_,p,ch,meta9962){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9962 = meta9962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9963,meta9962__$1){
var self__ = this;
var _9963__$1 = this;
return (new cljs.core.async.t_cljs$core$async9961(self__.filter_GT_,self__.p,self__.ch,meta9962__$1));
});

cljs.core.async.t_cljs$core$async9961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9963){
var self__ = this;
var _9963__$1 = this;
return self__.meta9962;
});

cljs.core.async.t_cljs$core$async9961.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9961.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9961.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9961.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9961.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9961.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9961.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9962","meta9962",1295439451,null)], null);
});

cljs.core.async.t_cljs$core$async9961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9961";

cljs.core.async.t_cljs$core$async9961.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9961");
});

cljs.core.async.__GT_t_cljs$core$async9961 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9961(filter_GT___$1,p__$1,ch__$1,meta9962){
return (new cljs.core.async.t_cljs$core$async9961(filter_GT___$1,p__$1,ch__$1,meta9962));
});

}

return (new cljs.core.async.t_cljs$core$async9961(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args9964 = [];
var len__5726__auto___10008 = arguments.length;
var i__5727__auto___10009 = (0);
while(true){
if((i__5727__auto___10009 < len__5726__auto___10008)){
args9964.push((arguments[i__5727__auto___10009]));

var G__10010 = (i__5727__auto___10009 + (1));
i__5727__auto___10009 = G__10010;
continue;
} else {
}
break;
}

var G__9966 = args9964.length;
switch (G__9966) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9964.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7799__auto___10012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___10012,out){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___10012,out){
return (function (state_9987){
var state_val_9988 = (state_9987[(1)]);
if((state_val_9988 === (7))){
var inst_9983 = (state_9987[(2)]);
var state_9987__$1 = state_9987;
var statearr_9989_10013 = state_9987__$1;
(statearr_9989_10013[(2)] = inst_9983);

(statearr_9989_10013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (1))){
var state_9987__$1 = state_9987;
var statearr_9990_10014 = state_9987__$1;
(statearr_9990_10014[(2)] = null);

(statearr_9990_10014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (4))){
var inst_9969 = (state_9987[(7)]);
var inst_9969__$1 = (state_9987[(2)]);
var inst_9970 = (inst_9969__$1 == null);
var state_9987__$1 = (function (){var statearr_9991 = state_9987;
(statearr_9991[(7)] = inst_9969__$1);

return statearr_9991;
})();
if(cljs.core.truth_(inst_9970)){
var statearr_9992_10015 = state_9987__$1;
(statearr_9992_10015[(1)] = (5));

} else {
var statearr_9993_10016 = state_9987__$1;
(statearr_9993_10016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (6))){
var inst_9969 = (state_9987[(7)]);
var inst_9974 = p.call(null,inst_9969);
var state_9987__$1 = state_9987;
if(cljs.core.truth_(inst_9974)){
var statearr_9994_10017 = state_9987__$1;
(statearr_9994_10017[(1)] = (8));

} else {
var statearr_9995_10018 = state_9987__$1;
(statearr_9995_10018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (3))){
var inst_9985 = (state_9987[(2)]);
var state_9987__$1 = state_9987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9987__$1,inst_9985);
} else {
if((state_val_9988 === (2))){
var state_9987__$1 = state_9987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9987__$1,(4),ch);
} else {
if((state_val_9988 === (11))){
var inst_9977 = (state_9987[(2)]);
var state_9987__$1 = state_9987;
var statearr_9996_10019 = state_9987__$1;
(statearr_9996_10019[(2)] = inst_9977);

(statearr_9996_10019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (9))){
var state_9987__$1 = state_9987;
var statearr_9997_10020 = state_9987__$1;
(statearr_9997_10020[(2)] = null);

(statearr_9997_10020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (5))){
var inst_9972 = cljs.core.async.close_BANG_.call(null,out);
var state_9987__$1 = state_9987;
var statearr_9998_10021 = state_9987__$1;
(statearr_9998_10021[(2)] = inst_9972);

(statearr_9998_10021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (10))){
var inst_9980 = (state_9987[(2)]);
var state_9987__$1 = (function (){var statearr_9999 = state_9987;
(statearr_9999[(8)] = inst_9980);

return statearr_9999;
})();
var statearr_10000_10022 = state_9987__$1;
(statearr_10000_10022[(2)] = null);

(statearr_10000_10022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9988 === (8))){
var inst_9969 = (state_9987[(7)]);
var state_9987__$1 = state_9987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9987__$1,(11),out,inst_9969);
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
});})(c__7799__auto___10012,out))
;
return ((function (switch__7743__auto__,c__7799__auto___10012,out){
return (function() {
var cljs$core$async$state_machine__7744__auto__ = null;
var cljs$core$async$state_machine__7744__auto____0 = (function (){
var statearr_10004 = [null,null,null,null,null,null,null,null,null];
(statearr_10004[(0)] = cljs$core$async$state_machine__7744__auto__);

(statearr_10004[(1)] = (1));

return statearr_10004;
});
var cljs$core$async$state_machine__7744__auto____1 = (function (state_9987){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_9987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e10005){if((e10005 instanceof Object)){
var ex__7747__auto__ = e10005;
var statearr_10006_10023 = state_9987;
(statearr_10006_10023[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10024 = state_9987;
state_9987 = G__10024;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$state_machine__7744__auto__ = function(state_9987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7744__auto____1.call(this,state_9987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7744__auto____0;
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7744__auto____1;
return cljs$core$async$state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___10012,out))
})();
var state__7801__auto__ = (function (){var statearr_10007 = f__7800__auto__.call(null);
(statearr_10007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___10012);

return statearr_10007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___10012,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args10025 = [];
var len__5726__auto___10028 = arguments.length;
var i__5727__auto___10029 = (0);
while(true){
if((i__5727__auto___10029 < len__5726__auto___10028)){
args10025.push((arguments[i__5727__auto___10029]));

var G__10030 = (i__5727__auto___10029 + (1));
i__5727__auto___10029 = G__10030;
continue;
} else {
}
break;
}

var G__10027 = args10025.length;
switch (G__10027) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10025.length)].join('')));

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
var c__7799__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto__){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto__){
return (function (state_10197){
var state_val_10198 = (state_10197[(1)]);
if((state_val_10198 === (7))){
var inst_10193 = (state_10197[(2)]);
var state_10197__$1 = state_10197;
var statearr_10199_10240 = state_10197__$1;
(statearr_10199_10240[(2)] = inst_10193);

(statearr_10199_10240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (20))){
var inst_10163 = (state_10197[(7)]);
var inst_10174 = (state_10197[(2)]);
var inst_10175 = cljs.core.next.call(null,inst_10163);
var inst_10149 = inst_10175;
var inst_10150 = null;
var inst_10151 = (0);
var inst_10152 = (0);
var state_10197__$1 = (function (){var statearr_10200 = state_10197;
(statearr_10200[(8)] = inst_10150);

(statearr_10200[(9)] = inst_10152);

(statearr_10200[(10)] = inst_10151);

(statearr_10200[(11)] = inst_10174);

(statearr_10200[(12)] = inst_10149);

return statearr_10200;
})();
var statearr_10201_10241 = state_10197__$1;
(statearr_10201_10241[(2)] = null);

(statearr_10201_10241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (1))){
var state_10197__$1 = state_10197;
var statearr_10202_10242 = state_10197__$1;
(statearr_10202_10242[(2)] = null);

(statearr_10202_10242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (4))){
var inst_10138 = (state_10197[(13)]);
var inst_10138__$1 = (state_10197[(2)]);
var inst_10139 = (inst_10138__$1 == null);
var state_10197__$1 = (function (){var statearr_10203 = state_10197;
(statearr_10203[(13)] = inst_10138__$1);

return statearr_10203;
})();
if(cljs.core.truth_(inst_10139)){
var statearr_10204_10243 = state_10197__$1;
(statearr_10204_10243[(1)] = (5));

} else {
var statearr_10205_10244 = state_10197__$1;
(statearr_10205_10244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (15))){
var state_10197__$1 = state_10197;
var statearr_10209_10245 = state_10197__$1;
(statearr_10209_10245[(2)] = null);

(statearr_10209_10245[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (21))){
var state_10197__$1 = state_10197;
var statearr_10210_10246 = state_10197__$1;
(statearr_10210_10246[(2)] = null);

(statearr_10210_10246[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (13))){
var inst_10150 = (state_10197[(8)]);
var inst_10152 = (state_10197[(9)]);
var inst_10151 = (state_10197[(10)]);
var inst_10149 = (state_10197[(12)]);
var inst_10159 = (state_10197[(2)]);
var inst_10160 = (inst_10152 + (1));
var tmp10206 = inst_10150;
var tmp10207 = inst_10151;
var tmp10208 = inst_10149;
var inst_10149__$1 = tmp10208;
var inst_10150__$1 = tmp10206;
var inst_10151__$1 = tmp10207;
var inst_10152__$1 = inst_10160;
var state_10197__$1 = (function (){var statearr_10211 = state_10197;
(statearr_10211[(8)] = inst_10150__$1);

(statearr_10211[(9)] = inst_10152__$1);

(statearr_10211[(10)] = inst_10151__$1);

(statearr_10211[(12)] = inst_10149__$1);

(statearr_10211[(14)] = inst_10159);

return statearr_10211;
})();
var statearr_10212_10247 = state_10197__$1;
(statearr_10212_10247[(2)] = null);

(statearr_10212_10247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (22))){
var state_10197__$1 = state_10197;
var statearr_10213_10248 = state_10197__$1;
(statearr_10213_10248[(2)] = null);

(statearr_10213_10248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (6))){
var inst_10138 = (state_10197[(13)]);
var inst_10147 = f.call(null,inst_10138);
var inst_10148 = cljs.core.seq.call(null,inst_10147);
var inst_10149 = inst_10148;
var inst_10150 = null;
var inst_10151 = (0);
var inst_10152 = (0);
var state_10197__$1 = (function (){var statearr_10214 = state_10197;
(statearr_10214[(8)] = inst_10150);

(statearr_10214[(9)] = inst_10152);

(statearr_10214[(10)] = inst_10151);

(statearr_10214[(12)] = inst_10149);

return statearr_10214;
})();
var statearr_10215_10249 = state_10197__$1;
(statearr_10215_10249[(2)] = null);

(statearr_10215_10249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (17))){
var inst_10163 = (state_10197[(7)]);
var inst_10167 = cljs.core.chunk_first.call(null,inst_10163);
var inst_10168 = cljs.core.chunk_rest.call(null,inst_10163);
var inst_10169 = cljs.core.count.call(null,inst_10167);
var inst_10149 = inst_10168;
var inst_10150 = inst_10167;
var inst_10151 = inst_10169;
var inst_10152 = (0);
var state_10197__$1 = (function (){var statearr_10216 = state_10197;
(statearr_10216[(8)] = inst_10150);

(statearr_10216[(9)] = inst_10152);

(statearr_10216[(10)] = inst_10151);

(statearr_10216[(12)] = inst_10149);

return statearr_10216;
})();
var statearr_10217_10250 = state_10197__$1;
(statearr_10217_10250[(2)] = null);

(statearr_10217_10250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (3))){
var inst_10195 = (state_10197[(2)]);
var state_10197__$1 = state_10197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10197__$1,inst_10195);
} else {
if((state_val_10198 === (12))){
var inst_10183 = (state_10197[(2)]);
var state_10197__$1 = state_10197;
var statearr_10218_10251 = state_10197__$1;
(statearr_10218_10251[(2)] = inst_10183);

(statearr_10218_10251[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (2))){
var state_10197__$1 = state_10197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10197__$1,(4),in$);
} else {
if((state_val_10198 === (23))){
var inst_10191 = (state_10197[(2)]);
var state_10197__$1 = state_10197;
var statearr_10219_10252 = state_10197__$1;
(statearr_10219_10252[(2)] = inst_10191);

(statearr_10219_10252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (19))){
var inst_10178 = (state_10197[(2)]);
var state_10197__$1 = state_10197;
var statearr_10220_10253 = state_10197__$1;
(statearr_10220_10253[(2)] = inst_10178);

(statearr_10220_10253[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (11))){
var inst_10163 = (state_10197[(7)]);
var inst_10149 = (state_10197[(12)]);
var inst_10163__$1 = cljs.core.seq.call(null,inst_10149);
var state_10197__$1 = (function (){var statearr_10221 = state_10197;
(statearr_10221[(7)] = inst_10163__$1);

return statearr_10221;
})();
if(inst_10163__$1){
var statearr_10222_10254 = state_10197__$1;
(statearr_10222_10254[(1)] = (14));

} else {
var statearr_10223_10255 = state_10197__$1;
(statearr_10223_10255[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (9))){
var inst_10185 = (state_10197[(2)]);
var inst_10186 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_10197__$1 = (function (){var statearr_10224 = state_10197;
(statearr_10224[(15)] = inst_10185);

return statearr_10224;
})();
if(cljs.core.truth_(inst_10186)){
var statearr_10225_10256 = state_10197__$1;
(statearr_10225_10256[(1)] = (21));

} else {
var statearr_10226_10257 = state_10197__$1;
(statearr_10226_10257[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (5))){
var inst_10141 = cljs.core.async.close_BANG_.call(null,out);
var state_10197__$1 = state_10197;
var statearr_10227_10258 = state_10197__$1;
(statearr_10227_10258[(2)] = inst_10141);

(statearr_10227_10258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (14))){
var inst_10163 = (state_10197[(7)]);
var inst_10165 = cljs.core.chunked_seq_QMARK_.call(null,inst_10163);
var state_10197__$1 = state_10197;
if(inst_10165){
var statearr_10228_10259 = state_10197__$1;
(statearr_10228_10259[(1)] = (17));

} else {
var statearr_10229_10260 = state_10197__$1;
(statearr_10229_10260[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (16))){
var inst_10181 = (state_10197[(2)]);
var state_10197__$1 = state_10197;
var statearr_10230_10261 = state_10197__$1;
(statearr_10230_10261[(2)] = inst_10181);

(statearr_10230_10261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10198 === (10))){
var inst_10150 = (state_10197[(8)]);
var inst_10152 = (state_10197[(9)]);
var inst_10157 = cljs.core._nth.call(null,inst_10150,inst_10152);
var state_10197__$1 = state_10197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10197__$1,(13),out,inst_10157);
} else {
if((state_val_10198 === (18))){
var inst_10163 = (state_10197[(7)]);
var inst_10172 = cljs.core.first.call(null,inst_10163);
var state_10197__$1 = state_10197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10197__$1,(20),out,inst_10172);
} else {
if((state_val_10198 === (8))){
var inst_10152 = (state_10197[(9)]);
var inst_10151 = (state_10197[(10)]);
var inst_10154 = (inst_10152 < inst_10151);
var inst_10155 = inst_10154;
var state_10197__$1 = state_10197;
if(cljs.core.truth_(inst_10155)){
var statearr_10231_10262 = state_10197__$1;
(statearr_10231_10262[(1)] = (10));

} else {
var statearr_10232_10263 = state_10197__$1;
(statearr_10232_10263[(1)] = (11));

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
});})(c__7799__auto__))
;
return ((function (switch__7743__auto__,c__7799__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7744__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7744__auto____0 = (function (){
var statearr_10236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10236[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7744__auto__);

(statearr_10236[(1)] = (1));

return statearr_10236;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7744__auto____1 = (function (state_10197){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_10197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e10237){if((e10237 instanceof Object)){
var ex__7747__auto__ = e10237;
var statearr_10238_10264 = state_10197;
(statearr_10238_10264[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10265 = state_10197;
state_10197 = G__10265;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7744__auto__ = function(state_10197){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7744__auto____1.call(this,state_10197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7744__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7744__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto__))
})();
var state__7801__auto__ = (function (){var statearr_10239 = f__7800__auto__.call(null);
(statearr_10239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto__);

return statearr_10239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto__))
);

return c__7799__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args10266 = [];
var len__5726__auto___10269 = arguments.length;
var i__5727__auto___10270 = (0);
while(true){
if((i__5727__auto___10270 < len__5726__auto___10269)){
args10266.push((arguments[i__5727__auto___10270]));

var G__10271 = (i__5727__auto___10270 + (1));
i__5727__auto___10270 = G__10271;
continue;
} else {
}
break;
}

var G__10268 = args10266.length;
switch (G__10268) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10266.length)].join('')));

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
var args10273 = [];
var len__5726__auto___10276 = arguments.length;
var i__5727__auto___10277 = (0);
while(true){
if((i__5727__auto___10277 < len__5726__auto___10276)){
args10273.push((arguments[i__5727__auto___10277]));

var G__10278 = (i__5727__auto___10277 + (1));
i__5727__auto___10277 = G__10278;
continue;
} else {
}
break;
}

var G__10275 = args10273.length;
switch (G__10275) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10273.length)].join('')));

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
var args10280 = [];
var len__5726__auto___10331 = arguments.length;
var i__5727__auto___10332 = (0);
while(true){
if((i__5727__auto___10332 < len__5726__auto___10331)){
args10280.push((arguments[i__5727__auto___10332]));

var G__10333 = (i__5727__auto___10332 + (1));
i__5727__auto___10332 = G__10333;
continue;
} else {
}
break;
}

var G__10282 = args10280.length;
switch (G__10282) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10280.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7799__auto___10335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___10335,out){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___10335,out){
return (function (state_10306){
var state_val_10307 = (state_10306[(1)]);
if((state_val_10307 === (7))){
var inst_10301 = (state_10306[(2)]);
var state_10306__$1 = state_10306;
var statearr_10308_10336 = state_10306__$1;
(statearr_10308_10336[(2)] = inst_10301);

(statearr_10308_10336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10307 === (1))){
var inst_10283 = null;
var state_10306__$1 = (function (){var statearr_10309 = state_10306;
(statearr_10309[(7)] = inst_10283);

return statearr_10309;
})();
var statearr_10310_10337 = state_10306__$1;
(statearr_10310_10337[(2)] = null);

(statearr_10310_10337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10307 === (4))){
var inst_10286 = (state_10306[(8)]);
var inst_10286__$1 = (state_10306[(2)]);
var inst_10287 = (inst_10286__$1 == null);
var inst_10288 = cljs.core.not.call(null,inst_10287);
var state_10306__$1 = (function (){var statearr_10311 = state_10306;
(statearr_10311[(8)] = inst_10286__$1);

return statearr_10311;
})();
if(inst_10288){
var statearr_10312_10338 = state_10306__$1;
(statearr_10312_10338[(1)] = (5));

} else {
var statearr_10313_10339 = state_10306__$1;
(statearr_10313_10339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10307 === (6))){
var state_10306__$1 = state_10306;
var statearr_10314_10340 = state_10306__$1;
(statearr_10314_10340[(2)] = null);

(statearr_10314_10340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10307 === (3))){
var inst_10303 = (state_10306[(2)]);
var inst_10304 = cljs.core.async.close_BANG_.call(null,out);
var state_10306__$1 = (function (){var statearr_10315 = state_10306;
(statearr_10315[(9)] = inst_10303);

return statearr_10315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10306__$1,inst_10304);
} else {
if((state_val_10307 === (2))){
var state_10306__$1 = state_10306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10306__$1,(4),ch);
} else {
if((state_val_10307 === (11))){
var inst_10286 = (state_10306[(8)]);
var inst_10295 = (state_10306[(2)]);
var inst_10283 = inst_10286;
var state_10306__$1 = (function (){var statearr_10316 = state_10306;
(statearr_10316[(7)] = inst_10283);

(statearr_10316[(10)] = inst_10295);

return statearr_10316;
})();
var statearr_10317_10341 = state_10306__$1;
(statearr_10317_10341[(2)] = null);

(statearr_10317_10341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10307 === (9))){
var inst_10286 = (state_10306[(8)]);
var state_10306__$1 = state_10306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10306__$1,(11),out,inst_10286);
} else {
if((state_val_10307 === (5))){
var inst_10283 = (state_10306[(7)]);
var inst_10286 = (state_10306[(8)]);
var inst_10290 = cljs.core._EQ_.call(null,inst_10286,inst_10283);
var state_10306__$1 = state_10306;
if(inst_10290){
var statearr_10319_10342 = state_10306__$1;
(statearr_10319_10342[(1)] = (8));

} else {
var statearr_10320_10343 = state_10306__$1;
(statearr_10320_10343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10307 === (10))){
var inst_10298 = (state_10306[(2)]);
var state_10306__$1 = state_10306;
var statearr_10321_10344 = state_10306__$1;
(statearr_10321_10344[(2)] = inst_10298);

(statearr_10321_10344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10307 === (8))){
var inst_10283 = (state_10306[(7)]);
var tmp10318 = inst_10283;
var inst_10283__$1 = tmp10318;
var state_10306__$1 = (function (){var statearr_10322 = state_10306;
(statearr_10322[(7)] = inst_10283__$1);

return statearr_10322;
})();
var statearr_10323_10345 = state_10306__$1;
(statearr_10323_10345[(2)] = null);

(statearr_10323_10345[(1)] = (2));


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
});})(c__7799__auto___10335,out))
;
return ((function (switch__7743__auto__,c__7799__auto___10335,out){
return (function() {
var cljs$core$async$state_machine__7744__auto__ = null;
var cljs$core$async$state_machine__7744__auto____0 = (function (){
var statearr_10327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10327[(0)] = cljs$core$async$state_machine__7744__auto__);

(statearr_10327[(1)] = (1));

return statearr_10327;
});
var cljs$core$async$state_machine__7744__auto____1 = (function (state_10306){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_10306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e10328){if((e10328 instanceof Object)){
var ex__7747__auto__ = e10328;
var statearr_10329_10346 = state_10306;
(statearr_10329_10346[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10347 = state_10306;
state_10306 = G__10347;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$state_machine__7744__auto__ = function(state_10306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7744__auto____1.call(this,state_10306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7744__auto____0;
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7744__auto____1;
return cljs$core$async$state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___10335,out))
})();
var state__7801__auto__ = (function (){var statearr_10330 = f__7800__auto__.call(null);
(statearr_10330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___10335);

return statearr_10330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___10335,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args10348 = [];
var len__5726__auto___10418 = arguments.length;
var i__5727__auto___10419 = (0);
while(true){
if((i__5727__auto___10419 < len__5726__auto___10418)){
args10348.push((arguments[i__5727__auto___10419]));

var G__10420 = (i__5727__auto___10419 + (1));
i__5727__auto___10419 = G__10420;
continue;
} else {
}
break;
}

var G__10350 = args10348.length;
switch (G__10350) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10348.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7799__auto___10422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___10422,out){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___10422,out){
return (function (state_10388){
var state_val_10389 = (state_10388[(1)]);
if((state_val_10389 === (7))){
var inst_10384 = (state_10388[(2)]);
var state_10388__$1 = state_10388;
var statearr_10390_10423 = state_10388__$1;
(statearr_10390_10423[(2)] = inst_10384);

(statearr_10390_10423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10389 === (1))){
var inst_10351 = (new Array(n));
var inst_10352 = inst_10351;
var inst_10353 = (0);
var state_10388__$1 = (function (){var statearr_10391 = state_10388;
(statearr_10391[(7)] = inst_10352);

(statearr_10391[(8)] = inst_10353);

return statearr_10391;
})();
var statearr_10392_10424 = state_10388__$1;
(statearr_10392_10424[(2)] = null);

(statearr_10392_10424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10389 === (4))){
var inst_10356 = (state_10388[(9)]);
var inst_10356__$1 = (state_10388[(2)]);
var inst_10357 = (inst_10356__$1 == null);
var inst_10358 = cljs.core.not.call(null,inst_10357);
var state_10388__$1 = (function (){var statearr_10393 = state_10388;
(statearr_10393[(9)] = inst_10356__$1);

return statearr_10393;
})();
if(inst_10358){
var statearr_10394_10425 = state_10388__$1;
(statearr_10394_10425[(1)] = (5));

} else {
var statearr_10395_10426 = state_10388__$1;
(statearr_10395_10426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10389 === (15))){
var inst_10378 = (state_10388[(2)]);
var state_10388__$1 = state_10388;
var statearr_10396_10427 = state_10388__$1;
(statearr_10396_10427[(2)] = inst_10378);

(statearr_10396_10427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10389 === (13))){
var state_10388__$1 = state_10388;
var statearr_10397_10428 = state_10388__$1;
(statearr_10397_10428[(2)] = null);

(statearr_10397_10428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10389 === (6))){
var inst_10353 = (state_10388[(8)]);
var inst_10374 = (inst_10353 > (0));
var state_10388__$1 = state_10388;
if(cljs.core.truth_(inst_10374)){
var statearr_10398_10429 = state_10388__$1;
(statearr_10398_10429[(1)] = (12));

} else {
var statearr_10399_10430 = state_10388__$1;
(statearr_10399_10430[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10389 === (3))){
var inst_10386 = (state_10388[(2)]);
var state_10388__$1 = state_10388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10388__$1,inst_10386);
} else {
if((state_val_10389 === (12))){
var inst_10352 = (state_10388[(7)]);
var inst_10376 = cljs.core.vec.call(null,inst_10352);
var state_10388__$1 = state_10388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10388__$1,(15),out,inst_10376);
} else {
if((state_val_10389 === (2))){
var state_10388__$1 = state_10388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10388__$1,(4),ch);
} else {
if((state_val_10389 === (11))){
var inst_10368 = (state_10388[(2)]);
var inst_10369 = (new Array(n));
var inst_10352 = inst_10369;
var inst_10353 = (0);
var state_10388__$1 = (function (){var statearr_10400 = state_10388;
(statearr_10400[(7)] = inst_10352);

(statearr_10400[(8)] = inst_10353);

(statearr_10400[(10)] = inst_10368);

return statearr_10400;
})();
var statearr_10401_10431 = state_10388__$1;
(statearr_10401_10431[(2)] = null);

(statearr_10401_10431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10389 === (9))){
var inst_10352 = (state_10388[(7)]);
var inst_10366 = cljs.core.vec.call(null,inst_10352);
var state_10388__$1 = state_10388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10388__$1,(11),out,inst_10366);
} else {
if((state_val_10389 === (5))){
var inst_10352 = (state_10388[(7)]);
var inst_10361 = (state_10388[(11)]);
var inst_10356 = (state_10388[(9)]);
var inst_10353 = (state_10388[(8)]);
var inst_10360 = (inst_10352[inst_10353] = inst_10356);
var inst_10361__$1 = (inst_10353 + (1));
var inst_10362 = (inst_10361__$1 < n);
var state_10388__$1 = (function (){var statearr_10402 = state_10388;
(statearr_10402[(11)] = inst_10361__$1);

(statearr_10402[(12)] = inst_10360);

return statearr_10402;
})();
if(cljs.core.truth_(inst_10362)){
var statearr_10403_10432 = state_10388__$1;
(statearr_10403_10432[(1)] = (8));

} else {
var statearr_10404_10433 = state_10388__$1;
(statearr_10404_10433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10389 === (14))){
var inst_10381 = (state_10388[(2)]);
var inst_10382 = cljs.core.async.close_BANG_.call(null,out);
var state_10388__$1 = (function (){var statearr_10406 = state_10388;
(statearr_10406[(13)] = inst_10381);

return statearr_10406;
})();
var statearr_10407_10434 = state_10388__$1;
(statearr_10407_10434[(2)] = inst_10382);

(statearr_10407_10434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10389 === (10))){
var inst_10372 = (state_10388[(2)]);
var state_10388__$1 = state_10388;
var statearr_10408_10435 = state_10388__$1;
(statearr_10408_10435[(2)] = inst_10372);

(statearr_10408_10435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10389 === (8))){
var inst_10352 = (state_10388[(7)]);
var inst_10361 = (state_10388[(11)]);
var tmp10405 = inst_10352;
var inst_10352__$1 = tmp10405;
var inst_10353 = inst_10361;
var state_10388__$1 = (function (){var statearr_10409 = state_10388;
(statearr_10409[(7)] = inst_10352__$1);

(statearr_10409[(8)] = inst_10353);

return statearr_10409;
})();
var statearr_10410_10436 = state_10388__$1;
(statearr_10410_10436[(2)] = null);

(statearr_10410_10436[(1)] = (2));


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
});})(c__7799__auto___10422,out))
;
return ((function (switch__7743__auto__,c__7799__auto___10422,out){
return (function() {
var cljs$core$async$state_machine__7744__auto__ = null;
var cljs$core$async$state_machine__7744__auto____0 = (function (){
var statearr_10414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10414[(0)] = cljs$core$async$state_machine__7744__auto__);

(statearr_10414[(1)] = (1));

return statearr_10414;
});
var cljs$core$async$state_machine__7744__auto____1 = (function (state_10388){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_10388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e10415){if((e10415 instanceof Object)){
var ex__7747__auto__ = e10415;
var statearr_10416_10437 = state_10388;
(statearr_10416_10437[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10438 = state_10388;
state_10388 = G__10438;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$state_machine__7744__auto__ = function(state_10388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7744__auto____1.call(this,state_10388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7744__auto____0;
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7744__auto____1;
return cljs$core$async$state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___10422,out))
})();
var state__7801__auto__ = (function (){var statearr_10417 = f__7800__auto__.call(null);
(statearr_10417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___10422);

return statearr_10417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___10422,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args10439 = [];
var len__5726__auto___10513 = arguments.length;
var i__5727__auto___10514 = (0);
while(true){
if((i__5727__auto___10514 < len__5726__auto___10513)){
args10439.push((arguments[i__5727__auto___10514]));

var G__10515 = (i__5727__auto___10514 + (1));
i__5727__auto___10514 = G__10515;
continue;
} else {
}
break;
}

var G__10441 = args10439.length;
switch (G__10441) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10439.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7799__auto___10517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7799__auto___10517,out){
return (function (){
var f__7800__auto__ = (function (){var switch__7743__auto__ = ((function (c__7799__auto___10517,out){
return (function (state_10483){
var state_val_10484 = (state_10483[(1)]);
if((state_val_10484 === (7))){
var inst_10479 = (state_10483[(2)]);
var state_10483__$1 = state_10483;
var statearr_10485_10518 = state_10483__$1;
(statearr_10485_10518[(2)] = inst_10479);

(statearr_10485_10518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10484 === (1))){
var inst_10442 = [];
var inst_10443 = inst_10442;
var inst_10444 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10483__$1 = (function (){var statearr_10486 = state_10483;
(statearr_10486[(7)] = inst_10444);

(statearr_10486[(8)] = inst_10443);

return statearr_10486;
})();
var statearr_10487_10519 = state_10483__$1;
(statearr_10487_10519[(2)] = null);

(statearr_10487_10519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10484 === (4))){
var inst_10447 = (state_10483[(9)]);
var inst_10447__$1 = (state_10483[(2)]);
var inst_10448 = (inst_10447__$1 == null);
var inst_10449 = cljs.core.not.call(null,inst_10448);
var state_10483__$1 = (function (){var statearr_10488 = state_10483;
(statearr_10488[(9)] = inst_10447__$1);

return statearr_10488;
})();
if(inst_10449){
var statearr_10489_10520 = state_10483__$1;
(statearr_10489_10520[(1)] = (5));

} else {
var statearr_10490_10521 = state_10483__$1;
(statearr_10490_10521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10484 === (15))){
var inst_10473 = (state_10483[(2)]);
var state_10483__$1 = state_10483;
var statearr_10491_10522 = state_10483__$1;
(statearr_10491_10522[(2)] = inst_10473);

(statearr_10491_10522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10484 === (13))){
var state_10483__$1 = state_10483;
var statearr_10492_10523 = state_10483__$1;
(statearr_10492_10523[(2)] = null);

(statearr_10492_10523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10484 === (6))){
var inst_10443 = (state_10483[(8)]);
var inst_10468 = inst_10443.length;
var inst_10469 = (inst_10468 > (0));
var state_10483__$1 = state_10483;
if(cljs.core.truth_(inst_10469)){
var statearr_10493_10524 = state_10483__$1;
(statearr_10493_10524[(1)] = (12));

} else {
var statearr_10494_10525 = state_10483__$1;
(statearr_10494_10525[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10484 === (3))){
var inst_10481 = (state_10483[(2)]);
var state_10483__$1 = state_10483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10483__$1,inst_10481);
} else {
if((state_val_10484 === (12))){
var inst_10443 = (state_10483[(8)]);
var inst_10471 = cljs.core.vec.call(null,inst_10443);
var state_10483__$1 = state_10483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10483__$1,(15),out,inst_10471);
} else {
if((state_val_10484 === (2))){
var state_10483__$1 = state_10483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10483__$1,(4),ch);
} else {
if((state_val_10484 === (11))){
var inst_10447 = (state_10483[(9)]);
var inst_10451 = (state_10483[(10)]);
var inst_10461 = (state_10483[(2)]);
var inst_10462 = [];
var inst_10463 = inst_10462.push(inst_10447);
var inst_10443 = inst_10462;
var inst_10444 = inst_10451;
var state_10483__$1 = (function (){var statearr_10495 = state_10483;
(statearr_10495[(7)] = inst_10444);

(statearr_10495[(11)] = inst_10463);

(statearr_10495[(8)] = inst_10443);

(statearr_10495[(12)] = inst_10461);

return statearr_10495;
})();
var statearr_10496_10526 = state_10483__$1;
(statearr_10496_10526[(2)] = null);

(statearr_10496_10526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10484 === (9))){
var inst_10443 = (state_10483[(8)]);
var inst_10459 = cljs.core.vec.call(null,inst_10443);
var state_10483__$1 = state_10483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10483__$1,(11),out,inst_10459);
} else {
if((state_val_10484 === (5))){
var inst_10444 = (state_10483[(7)]);
var inst_10447 = (state_10483[(9)]);
var inst_10451 = (state_10483[(10)]);
var inst_10451__$1 = f.call(null,inst_10447);
var inst_10452 = cljs.core._EQ_.call(null,inst_10451__$1,inst_10444);
var inst_10453 = cljs.core.keyword_identical_QMARK_.call(null,inst_10444,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10454 = (inst_10452) || (inst_10453);
var state_10483__$1 = (function (){var statearr_10497 = state_10483;
(statearr_10497[(10)] = inst_10451__$1);

return statearr_10497;
})();
if(cljs.core.truth_(inst_10454)){
var statearr_10498_10527 = state_10483__$1;
(statearr_10498_10527[(1)] = (8));

} else {
var statearr_10499_10528 = state_10483__$1;
(statearr_10499_10528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10484 === (14))){
var inst_10476 = (state_10483[(2)]);
var inst_10477 = cljs.core.async.close_BANG_.call(null,out);
var state_10483__$1 = (function (){var statearr_10501 = state_10483;
(statearr_10501[(13)] = inst_10476);

return statearr_10501;
})();
var statearr_10502_10529 = state_10483__$1;
(statearr_10502_10529[(2)] = inst_10477);

(statearr_10502_10529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10484 === (10))){
var inst_10466 = (state_10483[(2)]);
var state_10483__$1 = state_10483;
var statearr_10503_10530 = state_10483__$1;
(statearr_10503_10530[(2)] = inst_10466);

(statearr_10503_10530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10484 === (8))){
var inst_10447 = (state_10483[(9)]);
var inst_10451 = (state_10483[(10)]);
var inst_10443 = (state_10483[(8)]);
var inst_10456 = inst_10443.push(inst_10447);
var tmp10500 = inst_10443;
var inst_10443__$1 = tmp10500;
var inst_10444 = inst_10451;
var state_10483__$1 = (function (){var statearr_10504 = state_10483;
(statearr_10504[(7)] = inst_10444);

(statearr_10504[(14)] = inst_10456);

(statearr_10504[(8)] = inst_10443__$1);

return statearr_10504;
})();
var statearr_10505_10531 = state_10483__$1;
(statearr_10505_10531[(2)] = null);

(statearr_10505_10531[(1)] = (2));


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
});})(c__7799__auto___10517,out))
;
return ((function (switch__7743__auto__,c__7799__auto___10517,out){
return (function() {
var cljs$core$async$state_machine__7744__auto__ = null;
var cljs$core$async$state_machine__7744__auto____0 = (function (){
var statearr_10509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10509[(0)] = cljs$core$async$state_machine__7744__auto__);

(statearr_10509[(1)] = (1));

return statearr_10509;
});
var cljs$core$async$state_machine__7744__auto____1 = (function (state_10483){
while(true){
var ret_value__7745__auto__ = (function (){try{while(true){
var result__7746__auto__ = switch__7743__auto__.call(null,state_10483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7746__auto__;
}
break;
}
}catch (e10510){if((e10510 instanceof Object)){
var ex__7747__auto__ = e10510;
var statearr_10511_10532 = state_10483;
(statearr_10511_10532[(5)] = ex__7747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10533 = state_10483;
state_10483 = G__10533;
continue;
} else {
return ret_value__7745__auto__;
}
break;
}
});
cljs$core$async$state_machine__7744__auto__ = function(state_10483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7744__auto____1.call(this,state_10483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7744__auto____0;
cljs$core$async$state_machine__7744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7744__auto____1;
return cljs$core$async$state_machine__7744__auto__;
})()
;})(switch__7743__auto__,c__7799__auto___10517,out))
})();
var state__7801__auto__ = (function (){var statearr_10512 = f__7800__auto__.call(null);
(statearr_10512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7799__auto___10517);

return statearr_10512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7801__auto__);
});})(c__7799__auto___10517,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map