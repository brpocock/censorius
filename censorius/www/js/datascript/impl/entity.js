// Compiled by ClojureScript 0.0-2665 {}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){
return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.entity_attr = (function entity_attr(db,a,datoms){
if(datascript.core.multival_QMARK_.call(null,db,a)){
if(datascript.core.ref_QMARK_.call(null,db,a)){
return cljs.core.reduce.call(null,(function (p1__20452_SHARP_,p2__20453_SHARP_){
return cljs.core.conj.call(null,p1__20452_SHARP_,datascript.impl.entity.entity.call(null,db,p2__20453_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.call(null,(function (p1__20454_SHARP_,p2__20455_SHARP_){
return cljs.core.conj.call(null,p1__20454_SHARP_,p2__20455_SHARP_.v);
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.core.ref_QMARK_.call(null,db,a)){
return datascript.impl.entity.entity.call(null,db,cljs.core.first.call(null,datoms).v);
} else {
return cljs.core.first.call(null,datoms).v;
}
}
});
datascript.impl.entity.datoms__GT_cache = (function datoms__GT_cache(db,datoms){
return cljs.core.reduce.call(null,(function (acc,part){
var a = cljs.core.first.call(null,part).a;
return cljs.core.assoc.call(null,acc,a,datascript.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function touch(e){
if(cljs.core.truth_(e.touched)){
} else {
var temp__4126__auto___20456 = cljs.core.not_empty.call(null,datascript.core._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__4126__auto___20456)){
var datoms_20457 = temp__4126__auto___20456;
e.touched = true;

e.cache = datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_20457);
} else {
}
}

return e;
});
datascript.impl.entity._lookup_backwards = (function _lookup_backwards(db,eid,attr,not_found){
var temp__4124__auto__ = cljs.core.not_empty.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__4124__auto__)){
var datoms = temp__4124__auto__;
return cljs.core.reduce.call(null,((function (datoms,temp__4124__auto__){
return (function (p1__20458_SHARP_,p2__20459_SHARP_){
return cljs.core.conj.call(null,p1__20458_SHARP_,datascript.impl.entity.entity.call(null,db,p2__20459_SHARP_.e));
});})(datoms,temp__4124__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array.call(null,val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function js_seq(e){
datascript.impl.entity.touch.call(null,e);

var iter__4555__auto__ = (function iter__20468(s__20469){
return (new cljs.core.LazySeq(null,(function (){
var s__20469__$1 = s__20469;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20469__$1);
if(temp__4126__auto__){
var s__20469__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20469__$2)){
var c__4553__auto__ = cljs.core.chunk_first.call(null,s__20469__$2);
var size__4554__auto__ = cljs.core.count.call(null,c__4553__auto__);
var b__20471 = cljs.core.chunk_buffer.call(null,size__4554__auto__);
if((function (){var i__20470 = (0);
while(true){
if((i__20470 < size__4554__auto__)){
var vec__20474 = cljs.core._nth.call(null,c__4553__auto__,i__20470);
var a = cljs.core.nth.call(null,vec__20474,(0),null);
var v = cljs.core.nth.call(null,vec__20474,(1),null);
cljs.core.chunk_append.call(null,b__20471,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__20476 = (i__20470 + (1));
i__20470 = G__20476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20471),iter__20468.call(null,cljs.core.chunk_rest.call(null,s__20469__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20471),null);
}
} else {
var vec__20475 = cljs.core.first.call(null,s__20469__$2);
var a = cljs.core.nth.call(null,vec__20475,(0),null);
var v = cljs.core.nth.call(null,vec__20475,(1),null);
return cljs.core.cons.call(null,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__20468.call(null,cljs.core.rest.call(null,s__20469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4555__auto__.call(null,e.cache);
});

/**
* @constructor
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
})
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__20492 = null;
var G__20492__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__20492__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__20492 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20492__2.call(this,self__,k);
case 3:
return G__20492__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20492.cljs$core$IFn$_invoke$arity$2 = G__20492__2;
G__20492.cljs$core$IFn$_invoke$arity$3 = G__20492__3;
return G__20492;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args20477){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20477)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),cljs.core._lookup.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,attr,null);
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,attr,not_found){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return self__.eid;
} else {
var temp__4124__auto__ = datascript.core.reverse_ref.call(null,attr);
if(cljs.core.truth_(temp__4124__auto__)){
var attr__$1 = temp__4124__auto__;
return datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,attr__$1,not_found);
} else {
var or__3799__auto__ = self__.cache.call(null,attr);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
if(cljs.core.truth_(self__.touched)){
return not_found;
} else {
var temp__4124__auto____$1 = cljs.core.not_empty.call(null,datascript.core._search.call(null,self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));
if(cljs.core.truth_(temp__4124__auto____$1)){
var datoms = temp__4124__auto____$1;
self__.cache = cljs.core.assoc.call(null,self__.cache,attr,datascript.impl.entity.entity_attr.call(null,self__.db,attr,datoms));

return self__.cache.call(null,attr);
} else {
return not_found;
}
}
}
}
}
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.count.call(null,self__.cache);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.seq.call(null,self__.cache);
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return ((o instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.call(null,self__.eid,o.eid));
});

datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__20493 = null;
var G__20493__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__20478 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__20479 = null;
var count__20480 = (0);
var i__20481 = (0);
while(true){
if((i__20481 < count__20480)){
var vec__20482 = cljs.core._nth.call(null,chunk__20479,i__20481);
var a = cljs.core.nth.call(null,vec__20482,(0),null);
var v = cljs.core.nth.call(null,vec__20482,(1),null);
f.call(null,v,a,this$);

var G__20494 = seq__20478;
var G__20495 = chunk__20479;
var G__20496 = count__20480;
var G__20497 = (i__20481 + (1));
seq__20478 = G__20494;
chunk__20479 = G__20495;
count__20480 = G__20496;
i__20481 = G__20497;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20478);
if(temp__4126__auto__){
var seq__20478__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20478__$1)){
var c__4586__auto__ = cljs.core.chunk_first.call(null,seq__20478__$1);
var G__20498 = cljs.core.chunk_rest.call(null,seq__20478__$1);
var G__20499 = c__4586__auto__;
var G__20500 = cljs.core.count.call(null,c__4586__auto__);
var G__20501 = (0);
seq__20478 = G__20498;
chunk__20479 = G__20499;
count__20480 = G__20500;
i__20481 = G__20501;
continue;
} else {
var vec__20483 = cljs.core.first.call(null,seq__20478__$1);
var a = cljs.core.nth.call(null,vec__20483,(0),null);
var v = cljs.core.nth.call(null,vec__20483,(1),null);
f.call(null,v,a,this$);

var G__20502 = cljs.core.next.call(null,seq__20478__$1);
var G__20503 = null;
var G__20504 = (0);
var G__20505 = (0);
seq__20478 = G__20502;
chunk__20479 = G__20503;
count__20480 = G__20504;
i__20481 = G__20505;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__20493__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__20484 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__20485 = null;
var count__20486 = (0);
var i__20487 = (0);
while(true){
if((i__20487 < count__20486)){
var vec__20488 = cljs.core._nth.call(null,chunk__20485,i__20487);
var a = cljs.core.nth.call(null,vec__20488,(0),null);
var v = cljs.core.nth.call(null,vec__20488,(1),null);
f.call(use_as_this,v,a,this$);

var G__20506 = seq__20484;
var G__20507 = chunk__20485;
var G__20508 = count__20486;
var G__20509 = (i__20487 + (1));
seq__20484 = G__20506;
chunk__20485 = G__20507;
count__20486 = G__20508;
i__20487 = G__20509;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20484);
if(temp__4126__auto__){
var seq__20484__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20484__$1)){
var c__4586__auto__ = cljs.core.chunk_first.call(null,seq__20484__$1);
var G__20510 = cljs.core.chunk_rest.call(null,seq__20484__$1);
var G__20511 = c__4586__auto__;
var G__20512 = cljs.core.count.call(null,c__4586__auto__);
var G__20513 = (0);
seq__20484 = G__20510;
chunk__20485 = G__20511;
count__20486 = G__20512;
i__20487 = G__20513;
continue;
} else {
var vec__20489 = cljs.core.first.call(null,seq__20484__$1);
var a = cljs.core.nth.call(null,vec__20489,(0),null);
var v = cljs.core.nth.call(null,vec__20489,(1),null);
f.call(use_as_this,v,a,this$);

var G__20514 = cljs.core.next.call(null,seq__20484__$1);
var G__20515 = null;
var G__20516 = (0);
var G__20517 = (0);
seq__20484 = G__20514;
chunk__20485 = G__20515;
count__20486 = G__20516;
i__20487 = G__20517;
continue;
}
} else {
return null;
}
}
break;
}
});
G__20493 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__20493__1.call(this,f);
case 2:
return G__20493__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20493.cljs$core$IFn$_invoke$arity$1 = G__20493__1;
G__20493.cljs$core$IFn$_invoke$arity$2 = G__20493__2;
return G__20493;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.call(null,attr,":db/id")){
return self__.eid;
} else {
var temp__4124__auto__ = cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?_([^\/]+)/,attr);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__20490 = temp__4124__auto__;
var _ = cljs.core.nth.call(null,vec__20490,(0),null);
var ns = cljs.core.nth.call(null,vec__20490,(1),null);
var name = cljs.core.nth.call(null,vec__20490,(2),null);
var attr__$1 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,attr__$1,null));
} else {
var G__20491 = cljs.core._lookup.call(null,this$,attr);
var G__20491__$1 = ((datascript.core.multival_QMARK_.call(null,self__.db,attr))?datascript.impl.entity.multival__GT_js.call(null,G__20491):G__20491);
return G__20491__$1;
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator.call(null,datascript.impl.entity.js_seq.call(null,this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function __GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

goog.exportSymbol("datascript.impl.entity.Entity.prototype.get",datascript.impl.entity.Entity.prototype.get);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.has",datascript.impl.entity.Entity.prototype.has);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.forEach",datascript.impl.entity.Entity.prototype.forEach);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.key_set",datascript.impl.entity.Entity.prototype.key_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.value_set",datascript.impl.entity.Entity.prototype.value_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.entry_set",datascript.impl.entity.Entity.prototype.entry_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.keys",datascript.impl.entity.Entity.prototype.keys);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.values",datascript.impl.entity.Entity.prototype.values);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.entries",datascript.impl.entity.Entity.prototype.entries);
goog.exportSymbol("cljs.core.ES6Iterator.prototype.next",cljs.core.ES6Iterator.prototype.next);
goog.exportSymbol("cljs.core.ES6EntriesIterator.prototype.next",cljs.core.ES6EntriesIterator.prototype.next);
