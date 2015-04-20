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
return cljs.core.reduce.call(null,(function (p1__17152_SHARP_,p2__17153_SHARP_){
return cljs.core.conj.call(null,p1__17152_SHARP_,datascript.impl.entity.entity.call(null,db,p2__17153_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.call(null,(function (p1__17154_SHARP_,p2__17155_SHARP_){
return cljs.core.conj.call(null,p1__17154_SHARP_,p2__17155_SHARP_.v);
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
var temp__4126__auto___17156 = cljs.core.not_empty.call(null,datascript.core._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__4126__auto___17156)){
var datoms_17157 = temp__4126__auto___17156;
e.touched = true;

e.cache = datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_17157);
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
return (function (p1__17158_SHARP_,p2__17159_SHARP_){
return cljs.core.conj.call(null,p1__17158_SHARP_,datascript.impl.entity.entity.call(null,db,p2__17159_SHARP_.e));
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

var iter__4555__auto__ = (function iter__17168(s__17169){
return (new cljs.core.LazySeq(null,(function (){
var s__17169__$1 = s__17169;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17169__$1);
if(temp__4126__auto__){
var s__17169__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17169__$2)){
var c__4553__auto__ = cljs.core.chunk_first.call(null,s__17169__$2);
var size__4554__auto__ = cljs.core.count.call(null,c__4553__auto__);
var b__17171 = cljs.core.chunk_buffer.call(null,size__4554__auto__);
if((function (){var i__17170 = (0);
while(true){
if((i__17170 < size__4554__auto__)){
var vec__17174 = cljs.core._nth.call(null,c__4553__auto__,i__17170);
var a = cljs.core.nth.call(null,vec__17174,(0),null);
var v = cljs.core.nth.call(null,vec__17174,(1),null);
cljs.core.chunk_append.call(null,b__17171,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__17176 = (i__17170 + (1));
i__17170 = G__17176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17171),iter__17168.call(null,cljs.core.chunk_rest.call(null,s__17169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17171),null);
}
} else {
var vec__17175 = cljs.core.first.call(null,s__17169__$2);
var a = cljs.core.nth.call(null,vec__17175,(0),null);
var v = cljs.core.nth.call(null,vec__17175,(1),null);
return cljs.core.cons.call(null,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__17168.call(null,cljs.core.rest.call(null,s__17169__$2)));
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
var G__17192 = null;
var G__17192__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__17192__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__17192 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__17192__2.call(this,self__,k);
case 3:
return G__17192__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17192.cljs$core$IFn$_invoke$arity$2 = G__17192__2;
G__17192.cljs$core$IFn$_invoke$arity$3 = G__17192__3;
return G__17192;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args17177){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17177)));
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
var G__17193 = null;
var G__17193__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__17178 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__17179 = null;
var count__17180 = (0);
var i__17181 = (0);
while(true){
if((i__17181 < count__17180)){
var vec__17182 = cljs.core._nth.call(null,chunk__17179,i__17181);
var a = cljs.core.nth.call(null,vec__17182,(0),null);
var v = cljs.core.nth.call(null,vec__17182,(1),null);
f.call(null,v,a,this$);

var G__17194 = seq__17178;
var G__17195 = chunk__17179;
var G__17196 = count__17180;
var G__17197 = (i__17181 + (1));
seq__17178 = G__17194;
chunk__17179 = G__17195;
count__17180 = G__17196;
i__17181 = G__17197;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17178);
if(temp__4126__auto__){
var seq__17178__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17178__$1)){
var c__4586__auto__ = cljs.core.chunk_first.call(null,seq__17178__$1);
var G__17198 = cljs.core.chunk_rest.call(null,seq__17178__$1);
var G__17199 = c__4586__auto__;
var G__17200 = cljs.core.count.call(null,c__4586__auto__);
var G__17201 = (0);
seq__17178 = G__17198;
chunk__17179 = G__17199;
count__17180 = G__17200;
i__17181 = G__17201;
continue;
} else {
var vec__17183 = cljs.core.first.call(null,seq__17178__$1);
var a = cljs.core.nth.call(null,vec__17183,(0),null);
var v = cljs.core.nth.call(null,vec__17183,(1),null);
f.call(null,v,a,this$);

var G__17202 = cljs.core.next.call(null,seq__17178__$1);
var G__17203 = null;
var G__17204 = (0);
var G__17205 = (0);
seq__17178 = G__17202;
chunk__17179 = G__17203;
count__17180 = G__17204;
i__17181 = G__17205;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__17193__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__17184 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__17185 = null;
var count__17186 = (0);
var i__17187 = (0);
while(true){
if((i__17187 < count__17186)){
var vec__17188 = cljs.core._nth.call(null,chunk__17185,i__17187);
var a = cljs.core.nth.call(null,vec__17188,(0),null);
var v = cljs.core.nth.call(null,vec__17188,(1),null);
f.call(use_as_this,v,a,this$);

var G__17206 = seq__17184;
var G__17207 = chunk__17185;
var G__17208 = count__17186;
var G__17209 = (i__17187 + (1));
seq__17184 = G__17206;
chunk__17185 = G__17207;
count__17186 = G__17208;
i__17187 = G__17209;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__17184);
if(temp__4126__auto__){
var seq__17184__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17184__$1)){
var c__4586__auto__ = cljs.core.chunk_first.call(null,seq__17184__$1);
var G__17210 = cljs.core.chunk_rest.call(null,seq__17184__$1);
var G__17211 = c__4586__auto__;
var G__17212 = cljs.core.count.call(null,c__4586__auto__);
var G__17213 = (0);
seq__17184 = G__17210;
chunk__17185 = G__17211;
count__17186 = G__17212;
i__17187 = G__17213;
continue;
} else {
var vec__17189 = cljs.core.first.call(null,seq__17184__$1);
var a = cljs.core.nth.call(null,vec__17189,(0),null);
var v = cljs.core.nth.call(null,vec__17189,(1),null);
f.call(use_as_this,v,a,this$);

var G__17214 = cljs.core.next.call(null,seq__17184__$1);
var G__17215 = null;
var G__17216 = (0);
var G__17217 = (0);
seq__17184 = G__17214;
chunk__17185 = G__17215;
count__17186 = G__17216;
i__17187 = G__17217;
continue;
}
} else {
return null;
}
}
break;
}
});
G__17193 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__17193__1.call(this,f);
case 2:
return G__17193__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17193.cljs$core$IFn$_invoke$arity$1 = G__17193__1;
G__17193.cljs$core$IFn$_invoke$arity$2 = G__17193__2;
return G__17193;
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
var vec__17190 = temp__4124__auto__;
var _ = cljs.core.nth.call(null,vec__17190,(0),null);
var ns = cljs.core.nth.call(null,vec__17190,(1),null);
var name = cljs.core.nth.call(null,vec__17190,(2),null);
var attr__$1 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,attr__$1,null));
} else {
var G__17191 = cljs.core._lookup.call(null,this$,attr);
var G__17191__$1 = ((datascript.core.multival_QMARK_.call(null,self__.db,attr))?datascript.impl.entity.multival__GT_js.call(null,G__17191):G__17191);
return G__17191__$1;
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
