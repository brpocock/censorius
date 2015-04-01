// Compiled by ClojureScript 0.0-2665 {}
goog.provide('datascript');
goog.require('cljs.core');
goog.require('datascript.btset');
goog.require('datascript.impl.entity');
goog.require('datascript.query');
goog.require('datascript.core');
datascript.q = datascript.query.q;
datascript.entity = datascript.impl.entity.entity;
datascript.entity_db = (function entity_db(entity){
return entity.db;
});
datascript.touch = datascript.impl.entity.touch;
datascript.tx0 = datascript.core.tx0;
datascript.refs = (function refs(schema){
return cljs.core.reduce_kv.call(null,(function (acc,attr,v){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))){
return cljs.core.conj.call(null,acc,attr);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,schema);
});
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__20343){
var vec__20345 = p__20343;
var schema = cljs.core.nth.call(null,vec__20345,(0),null);
return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.tx0,new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs.call(null,schema)], null));
};
var empty_db = function (var_args){
var p__20343 = null;
if (arguments.length > 0) {
var G__20346__i = 0, G__20346__a = new Array(arguments.length -  0);
while (G__20346__i < G__20346__a.length) {G__20346__a[G__20346__i] = arguments[G__20346__i + 0]; ++G__20346__i;}
  p__20343 = new cljs.core.IndexedSeq(G__20346__a,0);
} 
return empty_db__delegate.call(this,p__20343);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__20347){
var p__20343 = cljs.core.seq(arglist__20347);
return empty_db__delegate(p__20343);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.init_db = (function() { 
var init_db__delegate = function (datoms,p__20349){
var vec__20351 = p__20349;
var schema = cljs.core.nth.call(null,vec__20351,(0),null);
var datoms__$1 = cljs.core.into_array.call(null,datoms);
var len = datoms__$1.length;
var eavt = datascript.btset._btset_from_sorted_arr.call(null,datoms__$1.sort(datascript.core.cmp_datoms_eavt_quick),datascript.core.cmp_datoms_eavt);
var max_eid = (((len > (0)))?(datoms__$1[(len - (1))]).e:(0));
var aevt = datascript.btset._btset_from_sorted_arr.call(null,datoms__$1.sort(datascript.core.cmp_datoms_aevt_quick),datascript.core.cmp_datoms_aevt);
var avet = datascript.btset._btset_from_sorted_arr.call(null,datoms__$1.sort(datascript.core.cmp_datoms_avet_quick),datascript.core.cmp_datoms_avet);
var max_tx = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (datoms__$1,len,eavt,max_eid,aevt,avet,vec__20351,schema){
return (function (p1__20348_SHARP_){
return p1__20348_SHARP_.tx;
});})(datoms__$1,len,eavt,max_eid,aevt,avet,vec__20351,schema))
),cljs.core.max,datascript.tx0,datoms__$1);
return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eavt,new cljs.core.Keyword(null,"aevt","aevt",-585148059),aevt,new cljs.core.Keyword(null,"avet","avet",1383857032),avet,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),max_eid,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),max_tx,new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs.call(null,schema)], null));
};
var init_db = function (datoms,var_args){
var p__20349 = null;
if (arguments.length > 1) {
var G__20352__i = 0, G__20352__a = new Array(arguments.length -  1);
while (G__20352__i < G__20352__a.length) {G__20352__a[G__20352__i] = arguments[G__20352__i + 1]; ++G__20352__i;}
  p__20349 = new cljs.core.IndexedSeq(G__20352__a,0);
} 
return init_db__delegate.call(this,datoms,p__20349);};
init_db.cljs$lang$maxFixedArity = 1;
init_db.cljs$lang$applyTo = (function (arglist__20353){
var datoms = cljs.core.first(arglist__20353);
var p__20349 = cljs.core.rest(arglist__20353);
return init_db__delegate(datoms,p__20349);
});
init_db.cljs$core$IFn$_invoke$arity$variadic = init_db__delegate;
return init_db;
})()
;
datascript.is_filtered = (function is_filtered(db){
return (db instanceof datascript.core.FilteredDB);
});
datascript.filter = (function filter(db,pred){
if(datascript.is_filtered.call(null,db)){
var u = db.unfiltered_db;
return (new datascript.core.FilteredDB(u,((function (u){
return (function (p1__20354_SHARP_){
var and__3787__auto__ = pred.call(null,u,p1__20354_SHARP_);
if(cljs.core.truth_(and__3787__auto__)){
return db.pred.call(null,p1__20354_SHARP_);
} else {
return and__3787__auto__;
}
});})(u))
,null,null,null));
} else {
return (new datascript.core.FilteredDB(db,(function (p1__20355_SHARP_){
return pred.call(null,db,p1__20355_SHARP_);
}),null,null,null));
}
});
/**
* @param {...*} var_args
*/
datascript.with$ = (function() { 
var with$__delegate = function (db,tx_data,p__20356){
var vec__20358 = p__20356;
var tx_meta = cljs.core.nth.call(null,vec__20358,(0),null);
if(datascript.is_filtered.call(null,db)){
throw (new Error("Filtered DB cannot be modified"));
} else {
return datascript.core.transact_tx_data.call(null,datascript.core.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
};
var with$ = function (db,tx_data,var_args){
var p__20356 = null;
if (arguments.length > 2) {
var G__20359__i = 0, G__20359__a = new Array(arguments.length -  2);
while (G__20359__i < G__20359__a.length) {G__20359__a[G__20359__i] = arguments[G__20359__i + 2]; ++G__20359__i;}
  p__20356 = new cljs.core.IndexedSeq(G__20359__a,0);
} 
return with$__delegate.call(this,db,tx_data,p__20356);};
with$.cljs$lang$maxFixedArity = 2;
with$.cljs$lang$applyTo = (function (arglist__20360){
var db = cljs.core.first(arglist__20360);
arglist__20360 = cljs.core.next(arglist__20360);
var tx_data = cljs.core.first(arglist__20360);
var p__20356 = cljs.core.rest(arglist__20360);
return with$__delegate(db,tx_data,p__20356);
});
with$.cljs$core$IFn$_invoke$arity$variadic = with$__delegate;
return with$;
})()
;
datascript.db_with = (function db_with(db,tx_data){
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$.call(null,db,tx_data));
});
/**
* @param {...*} var_args
*/
datascript.datoms = (function() { 
var datoms__delegate = function (db,index,cs){
return datascript.core._datoms.call(null,db,index,cs);
};
var datoms = function (db,index,var_args){
var cs = null;
if (arguments.length > 2) {
var G__20361__i = 0, G__20361__a = new Array(arguments.length -  2);
while (G__20361__i < G__20361__a.length) {G__20361__a[G__20361__i] = arguments[G__20361__i + 2]; ++G__20361__i;}
  cs = new cljs.core.IndexedSeq(G__20361__a,0);
} 
return datoms__delegate.call(this,db,index,cs);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__20362){
var db = cljs.core.first(arglist__20362);
arglist__20362 = cljs.core.next(arglist__20362);
var index = cljs.core.first(arglist__20362);
var cs = cljs.core.rest(arglist__20362);
return datoms__delegate(db,index,cs);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
/**
* @param {...*} var_args
*/
datascript.seek_datoms = (function() { 
var seek_datoms__delegate = function (db,index,cs){
return datascript.core._seek_datoms.call(null,db,index,cs);
};
var seek_datoms = function (db,index,var_args){
var cs = null;
if (arguments.length > 2) {
var G__20363__i = 0, G__20363__a = new Array(arguments.length -  2);
while (G__20363__i < G__20363__a.length) {G__20363__a[G__20363__i] = arguments[G__20363__i + 2]; ++G__20363__i;}
  cs = new cljs.core.IndexedSeq(G__20363__a,0);
} 
return seek_datoms__delegate.call(this,db,index,cs);};
seek_datoms.cljs$lang$maxFixedArity = 2;
seek_datoms.cljs$lang$applyTo = (function (arglist__20364){
var db = cljs.core.first(arglist__20364);
arglist__20364 = cljs.core.next(arglist__20364);
var index = cljs.core.first(arglist__20364);
var cs = cljs.core.rest(arglist__20364);
return seek_datoms__delegate(db,index,cs);
});
seek_datoms.cljs$core$IFn$_invoke$arity$variadic = seek_datoms__delegate;
return seek_datoms;
})()
;
datascript.index_range = (function index_range(db,attr,start,end){
return datascript.core._index_range.call(null,db,attr,start,end);
});
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__20365){
var vec__20367 = p__20365;
var schema = cljs.core.nth.call(null,vec__20367,(0),null);
return cljs.core.atom.call(null,datascript.empty_db.call(null,schema),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
};
var create_conn = function (var_args){
var p__20365 = null;
if (arguments.length > 0) {
var G__20368__i = 0, G__20368__a = new Array(arguments.length -  0);
while (G__20368__i < G__20368__a.length) {G__20368__a[G__20368__i] = arguments[G__20368__i + 0]; ++G__20368__i;}
  p__20365 = new cljs.core.IndexedSeq(G__20368__a,0);
} 
return create_conn__delegate.call(this,p__20365);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__20369){
var p__20365 = cljs.core.seq(arglist__20369);
return create_conn__delegate(p__20365);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data,tx_meta){
var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
/**
* @param {...*} var_args
*/
datascript.transact_BANG_ = (function() { 
var transact_BANG___delegate = function (conn,tx_data,p__20370){
var vec__20378 = p__20370;
var tx_meta = cljs.core.nth.call(null,vec__20378,(0),null);
var report = datascript._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__20379_20385 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__20380_20386 = null;
var count__20381_20387 = (0);
var i__20382_20388 = (0);
while(true){
if((i__20382_20388 < count__20381_20387)){
var vec__20383_20389 = cljs.core._nth.call(null,chunk__20380_20386,i__20382_20388);
var __20390 = cljs.core.nth.call(null,vec__20383_20389,(0),null);
var callback_20391 = cljs.core.nth.call(null,vec__20383_20389,(1),null);
callback_20391.call(null,report);

var G__20392 = seq__20379_20385;
var G__20393 = chunk__20380_20386;
var G__20394 = count__20381_20387;
var G__20395 = (i__20382_20388 + (1));
seq__20379_20385 = G__20392;
chunk__20380_20386 = G__20393;
count__20381_20387 = G__20394;
i__20382_20388 = G__20395;
continue;
} else {
var temp__4126__auto___20396 = cljs.core.seq.call(null,seq__20379_20385);
if(temp__4126__auto___20396){
var seq__20379_20397__$1 = temp__4126__auto___20396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20379_20397__$1)){
var c__4586__auto___20398 = cljs.core.chunk_first.call(null,seq__20379_20397__$1);
var G__20399 = cljs.core.chunk_rest.call(null,seq__20379_20397__$1);
var G__20400 = c__4586__auto___20398;
var G__20401 = cljs.core.count.call(null,c__4586__auto___20398);
var G__20402 = (0);
seq__20379_20385 = G__20399;
chunk__20380_20386 = G__20400;
count__20381_20387 = G__20401;
i__20382_20388 = G__20402;
continue;
} else {
var vec__20384_20403 = cljs.core.first.call(null,seq__20379_20397__$1);
var __20404 = cljs.core.nth.call(null,vec__20384_20403,(0),null);
var callback_20405 = cljs.core.nth.call(null,vec__20384_20403,(1),null);
callback_20405.call(null,report);

var G__20406 = cljs.core.next.call(null,seq__20379_20397__$1);
var G__20407 = null;
var G__20408 = (0);
var G__20409 = (0);
seq__20379_20385 = G__20406;
chunk__20380_20386 = G__20407;
count__20381_20387 = G__20408;
i__20382_20388 = G__20409;
continue;
}
} else {
}
}
break;
}

return report;
};
var transact_BANG_ = function (conn,tx_data,var_args){
var p__20370 = null;
if (arguments.length > 2) {
var G__20410__i = 0, G__20410__a = new Array(arguments.length -  2);
while (G__20410__i < G__20410__a.length) {G__20410__a[G__20410__i] = arguments[G__20410__i + 2]; ++G__20410__i;}
  p__20370 = new cljs.core.IndexedSeq(G__20410__a,0);
} 
return transact_BANG___delegate.call(this,conn,tx_data,p__20370);};
transact_BANG_.cljs$lang$maxFixedArity = 2;
transact_BANG_.cljs$lang$applyTo = (function (arglist__20411){
var conn = cljs.core.first(arglist__20411);
arglist__20411 = cljs.core.next(arglist__20411);
var tx_data = cljs.core.first(arglist__20411);
var p__20370 = cljs.core.rest(arglist__20411);
return transact_BANG___delegate(conn,tx_data,p__20370);
});
transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = transact_BANG___delegate;
return transact_BANG_;
})()
;
datascript.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (conn,callback){
return listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});
var listen_BANG___3 = (function (conn,key,callback){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});
listen_BANG_ = function(conn,key,callback){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,conn,key);
case 3:
return listen_BANG___3.call(this,conn,key,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
datascript.unlisten_BANG_ = (function unlisten_BANG_(conn,key){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,w,opts){
var d__$1 = this;
return cljs.core.pr_sequential_writer.call(null,w,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});
/**
* @param {...*} var_args
*/
datascript.datom = (function() { 
var datom__delegate = function (e,a,v,p__20412){
var vec__20414 = p__20412;
var tx = cljs.core.nth.call(null,vec__20414,(0),null);
var added = cljs.core.nth.call(null,vec__20414,(1),null);
return (new datascript.core.Datom(e,a,v,(function (){var or__3799__auto__ = tx;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return datascript.tx0;
}
})(),(((added == null))?true:added),null,null,null));
};
var datom = function (e,a,v,var_args){
var p__20412 = null;
if (arguments.length > 3) {
var G__20415__i = 0, G__20415__a = new Array(arguments.length -  3);
while (G__20415__i < G__20415__a.length) {G__20415__a[G__20415__i] = arguments[G__20415__i + 3]; ++G__20415__i;}
  p__20412 = new cljs.core.IndexedSeq(G__20415__a,0);
} 
return datom__delegate.call(this,e,a,v,p__20412);};
datom.cljs$lang$maxFixedArity = 3;
datom.cljs$lang$applyTo = (function (arglist__20416){
var e = cljs.core.first(arglist__20416);
arglist__20416 = cljs.core.next(arglist__20416);
var a = cljs.core.first(arglist__20416);
arglist__20416 = cljs.core.next(arglist__20416);
var v = cljs.core.first(arglist__20416);
var p__20412 = cljs.core.rest(arglist__20416);
return datom__delegate(e,a,v,p__20412);
});
datom.cljs$core$IFn$_invoke$arity$variadic = datom__delegate;
return datom;
})()
;
datascript.datom_from_reader = (function datom_from_reader(p__20417){
var vec__20419 = p__20417;
var e = cljs.core.nth.call(null,vec__20419,(0),null);
var a = cljs.core.nth.call(null,vec__20419,(1),null);
var v = cljs.core.nth.call(null,vec__20419,(2),null);
var tx = cljs.core.nth.call(null,vec__20419,(3),null);
var added = cljs.core.nth.call(null,vec__20419,(4),null);
return datascript.datom.call(null,e,a,v,tx,added);
});
datascript.pr_db = (function pr_db(db,w,opts){
cljs.core._write.call(null,w,"#datascript/DB {");

cljs.core._write.call(null,w,":schema ");

cljs.core.pr_writer.call(null,datascript.core._schema.call(null,db),w,opts);

cljs.core._write.call(null,w,", :datoms ");

cljs.core.pr_sequential_writer.call(null,w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer.call(null,w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
}),"["," ","]",opts,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));

return cljs.core._write.call(null,w,"}");
});
datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.pr_db.call(null,db__$1,w,opts);
});

datascript.core.DB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.pr_db.call(null,db__$1,w,opts);
});
datascript.db_from_reader = (function db_from_reader(p__20420){
var map__20424 = p__20420;
var map__20424__$1 = ((cljs.core.seq_QMARK_.call(null,map__20424))?cljs.core.apply.call(null,cljs.core.hash_map,map__20424):map__20424);
var datoms = cljs.core.get.call(null,map__20424__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
var schema = cljs.core.get.call(null,map__20424__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return datascript.init_db.call(null,cljs.core.map.call(null,((function (map__20424,map__20424__$1,datoms,schema){
return (function (p__20425){
var vec__20426 = p__20425;
var e = cljs.core.nth.call(null,vec__20426,(0),null);
var a = cljs.core.nth.call(null,vec__20426,(1),null);
var v = cljs.core.nth.call(null,vec__20426,(2),null);
var tx = cljs.core.nth.call(null,vec__20426,(3),null);
return (new datascript.core.Datom(e,a,v,tx,true,null,null,null));
});})(map__20424,map__20424__$1,datoms,schema))
,datoms),schema);
});
datascript.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.tempid = (function() {
var tempid = null;
var tempid__1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.last_tempid,cljs.core.dec);
}
});
var tempid__2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});
tempid = function(part,x){
switch(arguments.length){
case 1:
return tempid__1.call(this,part);
case 2:
return tempid__2.call(this,part,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tempid.cljs$core$IFn$_invoke$arity$1 = tempid__1;
tempid.cljs$core$IFn$_invoke$arity$2 = tempid__2;
return tempid;
})()
;
datascript.resolve_tempid = (function resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
datascript.db = cljs.core.deref;
/**
* @param {...*} var_args
*/
datascript.transact = (function() { 
var transact__delegate = function (conn,tx_data,p__20427){
var vec__20432 = p__20427;
var tx_meta = cljs.core.nth.call(null,vec__20432,(0),null);
var res = datascript.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.t20433 !== 'undefined'){
} else {

/**
* @constructor
*/
datascript.t20433 = (function (res,tx_meta,vec__20432,p__20427,tx_data,conn,transact,meta20434){
this.res = res;
this.tx_meta = tx_meta;
this.vec__20432 = vec__20432;
this.p__20427 = p__20427;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta20434 = meta20434;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t20433.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,vec__20432,tx_meta){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res,vec__20432,tx_meta))
;

datascript.t20433.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,vec__20432,tx_meta){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res,vec__20432,tx_meta))
;

datascript.t20433.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,vec__20432,tx_meta){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res,vec__20432,tx_meta))
;

datascript.t20433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,vec__20432,tx_meta){
return (function (_20435){
var self__ = this;
var _20435__$1 = this;
return self__.meta20434;
});})(res,vec__20432,tx_meta))
;

datascript.t20433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,vec__20432,tx_meta){
return (function (_20435,meta20434__$1){
var self__ = this;
var _20435__$1 = this;
return (new datascript.t20433(self__.res,self__.tx_meta,self__.vec__20432,self__.p__20427,self__.tx_data,self__.conn,self__.transact,meta20434__$1));
});})(res,vec__20432,tx_meta))
;

datascript.t20433.cljs$lang$type = true;

datascript.t20433.cljs$lang$ctorStr = "datascript/t20433";

datascript.t20433.cljs$lang$ctorPrWriter = ((function (res,vec__20432,tx_meta){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"datascript/t20433");
});})(res,vec__20432,tx_meta))
;

datascript.__GT_t20433 = ((function (res,vec__20432,tx_meta){
return (function __GT_t20433(res__$1,tx_meta__$1,vec__20432__$1,p__20427__$1,tx_data__$1,conn__$1,transact__$1,meta20434){
return (new datascript.t20433(res__$1,tx_meta__$1,vec__20432__$1,p__20427__$1,tx_data__$1,conn__$1,transact__$1,meta20434));
});})(res,vec__20432,tx_meta))
;

}

return (new datascript.t20433(res,tx_meta,vec__20432,p__20427,tx_data,conn,transact,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),29,new cljs.core.Keyword(null,"end-line","end-line",1837326455),178,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),172,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/datascript.cljs"], null)));
};
var transact = function (conn,tx_data,var_args){
var p__20427 = null;
if (arguments.length > 2) {
var G__20436__i = 0, G__20436__a = new Array(arguments.length -  2);
while (G__20436__i < G__20436__a.length) {G__20436__a[G__20436__i] = arguments[G__20436__i + 2]; ++G__20436__i;}
  p__20427 = new cljs.core.IndexedSeq(G__20436__a,0);
} 
return transact__delegate.call(this,conn,tx_data,p__20427);};
transact.cljs$lang$maxFixedArity = 2;
transact.cljs$lang$applyTo = (function (arglist__20437){
var conn = cljs.core.first(arglist__20437);
arglist__20437 = cljs.core.next(arglist__20437);
var tx_data = cljs.core.first(arglist__20437);
var p__20427 = cljs.core.rest(arglist__20437);
return transact__delegate(conn,tx_data,p__20427);
});
transact.cljs$core$IFn$_invoke$arity$variadic = transact__delegate;
return transact;
})()
;
datascript.future_call = (function future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.t20441 !== 'undefined'){
} else {

/**
* @constructor
*/
datascript.t20441 = (function (realized,res,f,future_call,meta20442){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta20442 = meta20442;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t20441.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.t20441.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.t20441.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.t20441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_20443){
var self__ = this;
var _20443__$1 = this;
return self__.meta20442;
});})(res,realized))
;

datascript.t20441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_20443,meta20442__$1){
var self__ = this;
var _20443__$1 = this;
return (new datascript.t20441(self__.realized,self__.res,self__.f,self__.future_call,meta20442__$1));
});})(res,realized))
;

datascript.t20441.cljs$lang$type = true;

datascript.t20441.cljs$lang$ctorStr = "datascript/t20441";

datascript.t20441.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__4386__auto__,writer__4387__auto__,opt__4388__auto__){
return cljs.core._write.call(null,writer__4387__auto__,"datascript/t20441");
});})(res,realized))
;

datascript.__GT_t20441 = ((function (res,realized){
return (function __GT_t20441(realized__$1,res__$1,f__$1,future_call__$1,meta20442){
return (new datascript.t20441(realized__$1,res__$1,f__$1,future_call__$1,meta20442));
});})(res,realized))
;

}

return (new datascript.t20441(realized,res,f,future_call,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),191,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),185,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/brpocock/Projects/censorius/censorius/www/js/datascript.cljs"], null)));
});
/**
* @param {...*} var_args
*/
datascript.transact_async = (function() { 
var transact_async__delegate = function (conn,tx_data,p__20444){
var vec__20446 = p__20444;
var tx_meta = cljs.core.nth.call(null,vec__20446,(0),null);
return datascript.future_call.call(null,((function (vec__20446,tx_meta){
return (function (){
return datascript.transact_BANG_.call(null,conn,tx_data,tx_meta);
});})(vec__20446,tx_meta))
);
};
var transact_async = function (conn,tx_data,var_args){
var p__20444 = null;
if (arguments.length > 2) {
var G__20447__i = 0, G__20447__a = new Array(arguments.length -  2);
while (G__20447__i < G__20447__a.length) {G__20447__a[G__20447__i] = arguments[G__20447__i + 2]; ++G__20447__i;}
  p__20444 = new cljs.core.IndexedSeq(G__20447__a,0);
} 
return transact_async__delegate.call(this,conn,tx_data,p__20444);};
transact_async.cljs$lang$maxFixedArity = 2;
transact_async.cljs$lang$applyTo = (function (arglist__20448){
var conn = cljs.core.first(arglist__20448);
arglist__20448 = cljs.core.next(arglist__20448);
var tx_data = cljs.core.first(arglist__20448);
var p__20444 = cljs.core.rest(arglist__20448);
return transact_async__delegate(conn,tx_data,p__20444);
});
transact_async.cljs$core$IFn$_invoke$arity$variadic = transact_async__delegate;
return transact_async;
})()
;
datascript.rand_bits = (function rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.squuid = (function squuid(){
return (new cljs.core.UUID([cljs.core.str(Math.round.call(null,((new Date()).getTime() / (1000))).toString((16))),cljs.core.str("-"),cljs.core.str(datascript.rand_bits.call(null,(16)).toString((16))),cljs.core.str("-"),cljs.core.str(((datascript.rand_bits.call(null,(16)) & (4095)) | (16384)).toString((16))),cljs.core.str("-"),cljs.core.str(((datascript.rand_bits.call(null,(16)) & (16383)) | (32768)).toString((16))),cljs.core.str("-"),cljs.core.str(datascript.rand_bits.call(null,(16)).toString((16))),cljs.core.str(datascript.rand_bits.call(null,(16)).toString((16))),cljs.core.str(datascript.rand_bits.call(null,(16)).toString((16)))].join('')));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,uuid.uuid,(0),(8)),(16)) * (1000));
});
