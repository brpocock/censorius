// Compiled by ClojureScript 0.0-2665 {}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('datascript.impl.entity');
goog.require('datascript.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('cljs.reader');

/**
* @constructor
* @param {*} rels
* @param {*} sources
* @param {*} rules
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4402__auto__,k__4403__auto__){
var self__ = this;
var this__4402__auto____$1 = this;
return cljs.core._lookup.call(null,this__4402__auto____$1,k__4403__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4404__auto__,k17423,else__4405__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
var G__17425 = (((k17423 instanceof cljs.core.Keyword))?k17423.fqn:null);
switch (G__17425) {
case "rules":
return self__.rules;

break;
case "sources":
return self__.sources;

break;
case "rels":
return self__.rels;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17423,else__4405__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4416__auto__,writer__4417__auto__,opts__4418__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
var pr_pair__4419__auto__ = ((function (this__4416__auto____$1){
return (function (keyval__4420__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4417__auto__,cljs.core.pr_writer,""," ","",opts__4418__auto__,keyval__4420__auto__);
});})(this__4416__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4417__auto__,pr_pair__4419__auto__,"#datascript.query.Context{",", ","}",opts__4418__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4400__auto__){
var self__ = this;
var this__4400__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4396__auto__){
var self__ = this;
var this__4396__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4406__auto__){
var self__ = this;
var this__4406__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
var h__4220__auto__ = self__.__hash;
if(!((h__4220__auto__ == null))){
return h__4220__auto__;
} else {
var h__4220__auto____$1 = cljs.core.hash_imap.call(null,this__4397__auto____$1);
self__.__hash = h__4220__auto____$1;

return h__4220__auto____$1;
}
});

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4398__auto__,other__4399__auto__){
var self__ = this;
var this__4398__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3787__auto__ = other__4399__auto__;
if(cljs.core.truth_(and__3787__auto__)){
return ((this__4398__auto____$1.constructor === other__4399__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4398__auto____$1,other__4399__auto__));
} else {
return and__3787__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4411__auto__,k__4412__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__4412__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4411__auto____$1),self__.__meta),k__4412__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4412__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4409__auto__,k__4410__auto__,G__17422){
var self__ = this;
var this__4409__auto____$1 = this;
var pred__17426 = cljs.core.keyword_identical_QMARK_;
var expr__17427 = k__4410__auto__;
if(cljs.core.truth_(pred__17426.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__17427))){
return (new datascript.query.Context(G__17422,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17426.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__17427))){
return (new datascript.query.Context(self__.rels,G__17422,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17426.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__17427))){
return (new datascript.query.Context(self__.rels,self__.sources,G__17422,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4410__auto__,G__17422),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4414__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4401__auto__,G__17422){
var self__ = this;
var this__4401__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__17422,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4407__auto__,entry__4408__auto__){
var self__ = this;
var this__4407__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4408__auto__)){
return cljs.core._assoc.call(null,this__4407__auto____$1,cljs.core._nth.call(null,entry__4408__auto__,(0)),cljs.core._nth.call(null,entry__4408__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4407__auto____$1,entry__4408__auto__);
}
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4436__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.query/Context");
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4436__auto__,writer__4437__auto__){
return cljs.core._write.call(null,writer__4437__auto__,"datascript.query/Context");
});

datascript.query.__GT_Context = (function __GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

datascript.query.map__GT_Context = (function map__GT_Context(G__17424){
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__17424),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__17424),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__17424),null,cljs.core.dissoc.call(null,G__17424,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)),null));
});


/**
* @constructor
* @param {*} attrs
* @param {*} tuples
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4402__auto__,k__4403__auto__){
var self__ = this;
var this__4402__auto____$1 = this;
return cljs.core._lookup.call(null,this__4402__auto____$1,k__4403__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4404__auto__,k17431,else__4405__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
var G__17433 = (((k17431 instanceof cljs.core.Keyword))?k17431.fqn:null);
switch (G__17433) {
case "tuples":
return self__.tuples;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17431,else__4405__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4416__auto__,writer__4417__auto__,opts__4418__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
var pr_pair__4419__auto__ = ((function (this__4416__auto____$1){
return (function (keyval__4420__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4417__auto__,cljs.core.pr_writer,""," ","",opts__4418__auto__,keyval__4420__auto__);
});})(this__4416__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4417__auto__,pr_pair__4419__auto__,"#datascript.query.Relation{",", ","}",opts__4418__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4400__auto__){
var self__ = this;
var this__4400__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4396__auto__){
var self__ = this;
var this__4396__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4406__auto__){
var self__ = this;
var this__4406__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
var h__4220__auto__ = self__.__hash;
if(!((h__4220__auto__ == null))){
return h__4220__auto__;
} else {
var h__4220__auto____$1 = cljs.core.hash_imap.call(null,this__4397__auto____$1);
self__.__hash = h__4220__auto____$1;

return h__4220__auto____$1;
}
});

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4398__auto__,other__4399__auto__){
var self__ = this;
var this__4398__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3787__auto__ = other__4399__auto__;
if(cljs.core.truth_(and__3787__auto__)){
return ((this__4398__auto____$1.constructor === other__4399__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4398__auto____$1,other__4399__auto__));
} else {
return and__3787__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4411__auto__,k__4412__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4412__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4411__auto____$1),self__.__meta),k__4412__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4412__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4409__auto__,k__4410__auto__,G__17430){
var self__ = this;
var this__4409__auto____$1 = this;
var pred__17434 = cljs.core.keyword_identical_QMARK_;
var expr__17435 = k__4410__auto__;
if(cljs.core.truth_(pred__17434.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__17435))){
return (new datascript.query.Relation(G__17430,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17434.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__17435))){
return (new datascript.query.Relation(self__.attrs,G__17430,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4410__auto__,G__17430),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4414__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4401__auto__,G__17430){
var self__ = this;
var this__4401__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__17430,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4407__auto__,entry__4408__auto__){
var self__ = this;
var this__4407__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4408__auto__)){
return cljs.core._assoc.call(null,this__4407__auto____$1,cljs.core._nth.call(null,entry__4408__auto__,(0)),cljs.core._nth.call(null,entry__4408__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4407__auto____$1,entry__4408__auto__);
}
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4436__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.query/Relation");
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4436__auto__,writer__4437__auto__){
return cljs.core._write.call(null,writer__4437__auto__,"datascript.query/Relation");
});

datascript.query.__GT_Relation = (function __GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

datascript.query.map__GT_Relation = (function map__GT_Relation(G__17432){
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__17432),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__17432),null,cljs.core.dissoc.call(null,G__17432,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)),null));
});

datascript.query.intersect_keys = (function intersect_keys(attrs1,attrs2){
return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs1)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)));
});
/**
* @param {...*} var_args
*/
datascript.query.concatv = (function() { 
var concatv__delegate = function (xs){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,xs));
};
var concatv = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17438__i = 0, G__17438__a = new Array(arguments.length -  0);
while (G__17438__i < G__17438__a.length) {G__17438__a[G__17438__i] = arguments[G__17438__i + 0]; ++G__17438__i;}
  xs = new cljs.core.IndexedSeq(G__17438__a,0);
} 
return concatv__delegate.call(this,xs);};
concatv.cljs$lang$maxFixedArity = 0;
concatv.cljs$lang$applyTo = (function (arglist__17439){
var xs = cljs.core.seq(arglist__17439);
return concatv__delegate(xs);
});
concatv.cljs$core$IFn$_invoke$arity$variadic = concatv__delegate;
return concatv;
})()
;
datascript.query.source_QMARK_ = (function source_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,sym))));
});
datascript.query.free_var_QMARK_ = (function free_var_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,sym)))) && (cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),sym));
});
datascript.query.looks_like_QMARK_ = (function looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_.call(null,form);
} else {
if(cljs.core.sequential_QMARK_.call(null,pattern)){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__17446){
var vec__17447 = p__17446;
var pattern_el = cljs.core.nth.call(null,vec__17447,(0),null);
var form_el = cljs.core.nth.call(null,vec__17447,(1),null);
return looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form)));
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.call(null,form,pattern);
} else {
return pattern.call(null,form);

}
}
}
}
});
datascript.query.join_tuples = (function join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = (new Array((l1 + l2)));
var n__4686__auto___17448 = l1;
var i_17449 = (0);
while(true){
if((i_17449 < n__4686__auto___17448)){
(res[i_17449] = (t1[(idxs1[i_17449])]));

var G__17450 = (i_17449 + (1));
i_17449 = G__17450;
continue;
} else {
}
break;
}

var n__4686__auto___17451 = l2;
var i_17452 = (0);
while(true){
if((i_17452 < n__4686__auto___17451)){
(res[(l1 + i_17452)] = (t2[(idxs2[i_17452])]));

var G__17453 = (i_17452 + (1));
i_17452 = G__17453;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function sum_rel(a,b){
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(a),cljs.core.concat.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(b)),null,null,null));
});
datascript.query.prod_rel = (function() {
var prod_rel = null;
var prod_rel__0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[]], null),null,null,null));
});
var prod_rel__2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,attrs1,attrs2),cljs.core.range.call(null)),(function (){var iter__4555__auto__ = ((function (attrs1,attrs2,idxs1,idxs2){
return (function iter__17460(s__17461){
return (new cljs.core.LazySeq(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (){
var s__17461__$1 = s__17461;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17461__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var t1 = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4551__auto__ = ((function (s__17461__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function iter__17462(s__17463){
return (new cljs.core.LazySeq(null,((function (s__17461__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function (){
var s__17463__$1 = s__17463;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__17463__$1);
if(temp__4126__auto____$1){
var s__17463__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17463__$2)){
var c__4553__auto__ = cljs.core.chunk_first.call(null,s__17463__$2);
var size__4554__auto__ = cljs.core.count.call(null,c__4553__auto__);
var b__17465 = cljs.core.chunk_buffer.call(null,size__4554__auto__);
if((function (){var i__17464 = (0);
while(true){
if((i__17464 < size__4554__auto__)){
var t2 = cljs.core._nth.call(null,c__4553__auto__,i__17464);
cljs.core.chunk_append.call(null,b__17465,datascript.query.join_tuples.call(null,t1,idxs1,t2,idxs2));

var G__17466 = (i__17464 + (1));
i__17464 = G__17466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17465),iter__17462.call(null,cljs.core.chunk_rest.call(null,s__17463__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17465),null);
}
} else {
var t2 = cljs.core.first.call(null,s__17463__$2);
return cljs.core.cons.call(null,datascript.query.join_tuples.call(null,t1,idxs1,t2,idxs2),iter__17462.call(null,cljs.core.rest.call(null,s__17463__$2)));
}
} else {
return null;
}
break;
}
});})(s__17461__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(s__17461__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
;
var fs__4552__auto__ = cljs.core.seq.call(null,iterys__4551__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2)));
if(fs__4552__auto__){
return cljs.core.concat.call(null,fs__4552__auto__,iter__17460.call(null,cljs.core.rest.call(null,s__17461__$1)));
} else {
var G__17467 = cljs.core.rest.call(null,s__17461__$1);
s__17461__$1 = G__17467;
continue;
}
} else {
return null;
}
break;
}
});})(attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(attrs1,attrs2,idxs1,idxs2))
;
return iter__4555__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1));
})(),null,null,null));
});
prod_rel = function(rel1,rel2){
switch(arguments.length){
case 0:
return prod_rel__0.call(this);
case 2:
return prod_rel__2.call(this,rel1,rel2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prod_rel.cljs$core$IFn$_invoke$arity$0 = prod_rel__0;
prod_rel.cljs$core$IFn$_invoke$arity$2 = prod_rel__2;
return prod_rel;
})()
;
/**
* @param {...*} var_args
*/
datascript.query._differ_QMARK_ = (function() { 
var _differ_QMARK___delegate = function (xs){
var l = cljs.core.count.call(null,xs);
return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / (2)),xs),cljs.core.drop.call(null,(l / (2)),xs));
};
var _differ_QMARK_ = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__17468__i = 0, G__17468__a = new Array(arguments.length -  0);
while (G__17468__i < G__17468__a.length) {G__17468__a[G__17468__i] = arguments[G__17468__i + 0]; ++G__17468__i;}
  xs = new cljs.core.IndexedSeq(G__17468__a,0);
} 
return _differ_QMARK___delegate.call(this,xs);};
_differ_QMARK_.cljs$lang$maxFixedArity = 0;
_differ_QMARK_.cljs$lang$applyTo = (function (arglist__17469){
var xs = cljs.core.seq(arglist__17469);
return _differ_QMARK___delegate(xs);
});
_differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = _differ_QMARK___delegate;
return _differ_QMARK_;
})()
;
datascript.query._get_else = (function _get_else(db,e,a,else_val){
var temp__4124__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__4124__auto__)){
var datom = temp__4124__auto__;
return datom.v;
} else {
return else_val;
}
});
/**
* @param {...*} var_args
*/
datascript.query._get_some = (function() { 
var _get_some__delegate = function (db,e,as){
return cljs.core.reduce.call(null,(function (_,a){
var temp__4126__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__4126__auto__)){
var datom = temp__4126__auto__;
return cljs.core.reduced.call(null,datom.v);
} else {
return null;
}
}),null,as);
};
var _get_some = function (db,e,var_args){
var as = null;
if (arguments.length > 2) {
var G__17470__i = 0, G__17470__a = new Array(arguments.length -  2);
while (G__17470__i < G__17470__a.length) {G__17470__a[G__17470__i] = arguments[G__17470__i + 2]; ++G__17470__i;}
  as = new cljs.core.IndexedSeq(G__17470__a,0);
} 
return _get_some__delegate.call(this,db,e,as);};
_get_some.cljs$lang$maxFixedArity = 2;
_get_some.cljs$lang$applyTo = (function (arglist__17471){
var db = cljs.core.first(arglist__17471);
arglist__17471 = cljs.core.next(arglist__17471);
var e = cljs.core.first(arglist__17471);
var as = cljs.core.rest(arglist__17471);
return _get_some__delegate(db,e,as);
});
_get_some.cljs$core$IFn$_invoke$arity$variadic = _get_some__delegate;
return _get_some;
})()
;
datascript.query._missing_QMARK_ = (function _missing_QMARK_(db,e,a){
return (cljs.core.get.call(null,datascript.impl.entity.entity.call(null,db,e),a) == null);
});
datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null)],[cljs.core.true_QMARK_,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core._GT_,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core._EQ__EQ_,cljs.core.max,cljs.core._STAR_,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core._,cljs.core.pos_QMARK_,cljs.core.mod,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.neg_QMARK_]);
datascript.query.built_in_aggregates = (function (){var sum = (function sum(coll){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),coll);
});
var avg = (function avg(coll){
return (sum.call(null,coll) / cljs.core.count.call(null,coll));
});
var median = (function median(coll){
var terms = cljs.core.sort.call(null,coll);
var size = cljs.core.count.call(null,coll);
var med = (size >> (1));
var G__17483 = cljs.core.nth.call(null,terms,med);
var G__17483__$1 = ((cljs.core.even_QMARK_.call(null,size))?((G__17483 + cljs.core.nth.call(null,terms,(med - (1)))) / (2)):G__17483);
return G__17483__$1;
});
var variance = (function variance(coll){
var mean = avg.call(null,coll);
var sum__$1 = sum.call(null,(function (){var iter__4555__auto__ = ((function (mean){
return (function iter__17488(s__17489){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__17489__$1 = s__17489;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17489__$1);
if(temp__4126__auto__){
var s__17489__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17489__$2)){
var c__4553__auto__ = cljs.core.chunk_first.call(null,s__17489__$2);
var size__4554__auto__ = cljs.core.count.call(null,c__4553__auto__);
var b__17491 = cljs.core.chunk_buffer.call(null,size__4554__auto__);
if((function (){var i__17490 = (0);
while(true){
if((i__17490 < size__4554__auto__)){
var x = cljs.core._nth.call(null,c__4553__auto__,i__17490);
var delta = (x - mean);
cljs.core.chunk_append.call(null,b__17491,(delta * delta));

var G__17492 = (i__17490 + (1));
i__17490 = G__17492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17491),iter__17488.call(null,cljs.core.chunk_rest.call(null,s__17489__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17491),null);
}
} else {
var x = cljs.core.first.call(null,s__17489__$2);
var delta = (x - mean);
return cljs.core.cons.call(null,(delta * delta),iter__17488.call(null,cljs.core.rest.call(null,s__17489__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__4555__auto__.call(null,coll);
})());
return (sum__$1 / cljs.core.count.call(null,coll));
});
var stddev = (function stddev(coll){
return Math.sqrt(variance.call(null,coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__17493 = null;
var G__17493__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((datascript.core.cmp_val.call(null,x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__17493__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,datascript.core.cmp_val,cljs.core.conj.call(null,acc,x));
} else {
if((datascript.core.cmp_val.call(null,x,cljs.core.last.call(null,acc)) < (0))){
return cljs.core.sort.call(null,datascript.core.cmp_val,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__17493 = function(n,coll){
switch(arguments.length){
case 1:
return G__17493__1.call(this,n);
case 2:
return G__17493__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17493.cljs$core$IFn$_invoke$arity$1 = G__17493__1;
G__17493.cljs$core$IFn$_invoke$arity$2 = G__17493__2;
return G__17493;
})()
,(function() {
var G__17494 = null;
var G__17494__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((datascript.core.cmp_val.call(null,x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__17494__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,datascript.core.cmp_val,cljs.core.conj.call(null,acc,x));
} else {
if((datascript.core.cmp_val.call(null,x,cljs.core.first.call(null,acc)) > (0))){
return cljs.core.sort.call(null,datascript.core.cmp_val,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__17494 = function(n,coll){
switch(arguments.length){
case 1:
return G__17494__1.call(this,n);
case 2:
return G__17494__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17494.cljs$core$IFn$_invoke$arity$1 = G__17494__1;
G__17494.cljs$core$IFn$_invoke$arity$2 = G__17494__2;
return G__17494;
})()
,(function (coll){
return cljs.core.count.call(null,cljs.core.distinct.call(null,coll));
}),cljs.core.comp.call(null,cljs.core.vec,cljs.core.distinct),avg,stddev,(function() {
var G__17495 = null;
var G__17495__1 = (function (coll){
return cljs.core.rand_nth.call(null,coll);
});
var G__17495__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_nth.call(null,coll);
})));
});
G__17495 = function(n,coll){
switch(arguments.length){
case 1:
return G__17495__1.call(this,n);
case 2:
return G__17495__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17495.cljs$core$IFn$_invoke$arity$1 = G__17495__1;
G__17495.cljs$core$IFn$_invoke$arity$2 = G__17495__2;
return G__17495;
})()
,(function (n,coll){
return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
})]);
})();
datascript.query.in__GT_rel = (function() {
var in__GT_rel = null;
var in__GT_rel__1 = (function (form){
var attrs = (function (){var form__$1 = form;
var form__$2 = cljs.core.flatten.call(null,form__$1);
var form__$3 = cljs.core.filter.call(null,((function (form__$1,form__$2){
return (function (p1__17496_SHARP_){
return ((p1__17496_SHARP_ instanceof cljs.core.Symbol)) && (cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),p1__17496_SHARP_)) && (cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__17496_SHARP_));
});})(form__$1,form__$2))
,form__$2);
var form__$4 = cljs.core.zipmap.call(null,form__$3,cljs.core.range.call(null));
return form__$4;
})();
return (new datascript.query.Relation(attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
});
var in__GT_rel__2 = (function (form,value){
var pred__17503 = datascript.query.looks_like_QMARK_;
var expr__17504 = form;
if(cljs.core.truth_(pred__17503.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),expr__17504))){
if(cljs.core.empty_QMARK_.call(null,value)){
return in__GT_rel.call(null,form);
} else {
return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (pred__17503,expr__17504){
return (function (p1__17497_SHARP_){
return in__GT_rel.call(null,cljs.core.first.call(null,form),p1__17497_SHARP_);
});})(pred__17503,expr__17504))
,value));
}
} else {
if(cljs.core.truth_(pred__17503.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__17504))){
return in__GT_rel.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),value);
} else {
if(cljs.core.truth_(pred__17503.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__17504))){
return cljs.core.reduce.call(null,datascript.query.prod_rel,cljs.core.map.call(null,((function (pred__17503,expr__17504){
return (function (p1__17498_SHARP_,p2__17499_SHARP_){
return in__GT_rel.call(null,p1__17498_SHARP_,p2__17499_SHARP_);
});})(pred__17503,expr__17504))
,form,value));
} else {
if(cljs.core.truth_(pred__17503.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),expr__17504))){
return (new datascript.query.Relation(new cljs.core.PersistentArrayMap.fromArray([form,(0)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[value]], null),null,null,null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__17504)].join('')));
}
}
}
}
});
in__GT_rel = function(form,value){
switch(arguments.length){
case 1:
return in__GT_rel__1.call(this,form);
case 2:
return in__GT_rel__2.call(this,form,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
in__GT_rel.cljs$core$IFn$_invoke$arity$1 = in__GT_rel__1;
in__GT_rel.cljs$core$IFn$_invoke$arity$2 = in__GT_rel__2;
return in__GT_rel;
})()
;
datascript.query.parse_rules = (function parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.call(null,rules):rules);
return cljs.core.group_by.call(null,cljs.core.ffirst,rules__$1);
});
datascript.query.parse_in = (function parse_in(context,p__17506){
var vec__17508 = p__17506;
var in$ = cljs.core.nth.call(null,vec__17508,(0),null);
var value = cljs.core.nth.call(null,vec__17508,(1),null);
if(datascript.query.source_QMARK_.call(null,in$)){
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424)], null),cljs.core.assoc,in$,value);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),in$)){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules.call(null,value));
} else {
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,datascript.query.in__GT_rel.call(null,in$,value));

}
}
});
datascript.query.parse_ins = (function parse_ins(context,ins,values){
return cljs.core.reduce.call(null,datascript.query.parse_in,context,cljs.core.map.call(null,cljs.core.vector,ins,values));
});
datascript.query.tuple_key_fn = (function tuple_key_fn(idxs){
if((cljs.core.count.call(null,idxs) === (1))){
var idx = cljs.core.first.call(null,idxs);
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
} else {
var idxs__$1 = cljs.core.to_array.call(null,idxs);
return ((function (idxs__$1){
return (function (tuple){
return cljs.core.list_STAR_.call(null,idxs__$1.map(((function (idxs__$1){
return (function (p1__17509_SHARP_){
return (tuple[p1__17509_SHARP_]);
});})(idxs__$1))
));
});
;})(idxs__$1))
}
});
datascript.query.hash_attrs = (function hash_attrs(idxs,tuples){
var key_fn = datascript.query.tuple_key_fn.call(null,idxs);
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__4124__auto__ = cljs.core.first.call(null,tuples__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var tuple = temp__4124__auto__;
var key = key_fn.call(null,tuple);
var G__17510 = cljs.core.next.call(null,tuples__$1);
var G__17511 = cljs.core.assoc_BANG_.call(null,hash_table,key,cljs.core.conj.call(null,cljs.core.get.call(null,hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__17510;
hash_table = G__17511;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,hash_table);
}
break;
}
});
datascript.query.hash_join = (function hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_idxs1 = cljs.core.map.call(null,attrs1,common_attrs);
var common_idxs2 = cljs.core.map.call(null,attrs2,common_attrs);
var keep_attrs1 = cljs.core.keys.call(null,attrs1);
var keep_attrs2 = cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs1))));
var keep_idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs2,keep_attrs2));
var hash = datascript.query.hash_attrs.call(null,common_idxs1,tuples1);
var key_fn = datascript.query.tuple_key_fn.call(null,common_idxs2);
var new_tuples = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc,tuple2){
var key = key_fn.call(null,tuple2);
var temp__4124__auto__ = cljs.core.get.call(null,hash,key);
if(cljs.core.truth_(temp__4124__auto__)){
var tuples1__$1 = temp__4124__auto__;
return cljs.core.reduce.call(null,((function (tuples1__$1,temp__4124__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__4124__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn))
,acc,tuples1__$1);
} else {
return acc;
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,keep_attrs1,keep_attrs2),cljs.core.range.call(null)),new_tuples,null,null,null));
});
datascript.query.lookup_pattern_db = (function lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.call(null,(function (p1__17512_SHARP_){
if((p1__17512_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__17512_SHARP_;
}
}),pattern);
var datoms = datascript.core._search.call(null,db,search_pattern);
var attr__GT_prop = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (search_pattern,datoms){
return (function (p__17515){
var vec__17516 = p__17515;
var s = cljs.core.nth.call(null,vec__17516,(0),null);
var _ = cljs.core.nth.call(null,vec__17516,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
});})(search_pattern,datoms))
,cljs.core.map.call(null,cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__3787__auto__ = tuple__$1;
if(cljs.core.truth_(and__3787__auto__)){
return pattern__$1;
} else {
return and__3787__auto__;
}
})())){
var t = cljs.core.first.call(null,tuple__$1);
var p = cljs.core.first.call(null,pattern__$1);
if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.call(null,t,p))){
var G__17517 = cljs.core.next.call(null,tuple__$1);
var G__17518 = cljs.core.next.call(null,pattern__$1);
tuple__$1 = G__17517;
pattern__$1 = G__17518;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.call(null,(function (p1__17519_SHARP_){
return datascript.query.matches_pattern_QMARK_.call(null,pattern,p1__17519_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (data){
return (function (p__17522){
var vec__17523 = p__17522;
var s = cljs.core.nth.call(null,vec__17523,(0),null);
var _ = cljs.core.nth.call(null,vec__17523,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
});})(data))
,cljs.core.map.call(null,cljs.core.vector,pattern,cljs.core.range.call(null))));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.call(null,cljs.core.to_array,data),null,null,null));
});
datascript.query.lookup_pattern = (function lookup_pattern(context,clause){
var vec__17526 = ((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clause),cljs.core.next.call(null,clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));
var source_sym = cljs.core.nth.call(null,vec__17526,(0),null);
var pattern = cljs.core.nth.call(null,vec__17526,(1),null);
var source = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
if((function (){var G__17527 = source;
if(G__17527){
var bit__4480__auto__ = null;
if(cljs.core.truth_((function (){var or__3799__auto__ = bit__4480__auto__;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return G__17527.datascript$core$ISearch$;
}
})())){
return true;
} else {
if((!G__17527.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.ISearch,G__17527);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.ISearch,G__17527);
}
})()){
return datascript.query.lookup_pattern_db.call(null,source,pattern);
} else {
return datascript.query.lookup_pattern_coll.call(null,source,pattern);

}
});
datascript.query.collapse_rels = (function collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4124__auto__ = cljs.core.first.call(null,rels__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var rel = temp__4124__auto__;
if(cljs.core.truth_(cljs.core.not_empty.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__17528 = cljs.core.next.call(null,rels__$1);
var G__17529 = datascript.query.hash_join.call(null,rel,new_rel__$1);
var G__17530 = acc;
rels__$1 = G__17528;
new_rel__$1 = G__17529;
acc = G__17530;
continue;
} else {
var G__17531 = cljs.core.next.call(null,rels__$1);
var G__17532 = new_rel__$1;
var G__17533 = cljs.core.conj.call(null,acc,rel);
rels__$1 = G__17531;
new_rel__$1 = G__17532;
acc = G__17533;
continue;
}
} else {
return cljs.core.conj.call(null,acc,new_rel__$1);
}
break;
}
});
datascript.query.context_resolve_val = (function context_resolve_val(context,sym){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__17534_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__17534_SHARP_),sym);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
if(cljs.core.truth_(temp__4126__auto__)){
var rel = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.first.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if(cljs.core.truth_(temp__4126__auto____$1)){
var tuple = temp__4126__auto____$1;
return (tuple[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else {
return null;
}
} else {
return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function rel_contains_attrs_QMARK_(rel,attrs){
return !(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,attrs),cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.call(null,(function (p1__17535_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_.call(null,p1__17535_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.call(null,datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),((function (rels,production){
return (function (p1__17536_SHARP_){
return cljs.core.remove.call(null,cljs.core.set.call(null,rels),p1__17536_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function _call_fn(context,rel,f,args){
return (function (tuple){
var resolved_args = cljs.core.map.call(null,(function (p1__17537_SHARP_){
if((p1__17537_SHARP_ instanceof cljs.core.Symbol)){
var or__3799__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),p1__17537_SHARP_);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return (tuple[cljs.core.get.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__17537_SHARP_)]);
}
} else {
return p1__17537_SHARP_;
}
}),args);
return cljs.core.apply.call(null,f,resolved_args);
});
});
datascript.query.filter_by_pred = (function filter_by_pred(context,clause){
var vec__17542 = clause;
var vec__17543 = cljs.core.nth.call(null,vec__17542,(0),null);
var f = cljs.core.nth.call(null,vec__17543,(0),null);
var args = cljs.core.nthnext.call(null,vec__17543,(1));
var pred = (function (){var or__3799__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return datascript.query.context_resolve_val.call(null,context,f);
}
})();
var vec__17544 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__17544,(0),null);
var production = cljs.core.nth.call(null,vec__17544,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn.call(null,context__$1,production,pred,args);
return cljs.core.update_in.call(null,production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),((function (tuple_pred,vec__17542,vec__17543,f,args,pred,vec__17544,context__$1,production){
return (function (p1__17538_SHARP_){
return cljs.core.filter.call(null,tuple_pred,p1__17538_SHARP_);
});})(tuple_pred,vec__17542,vec__17543,f,args,pred,vec__17544,context__$1,production))
);
})():cljs.core.assoc.call(null,production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),cljs.core.PersistentVector.EMPTY));
return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function bind_by_fn(context,clause){
var vec__17549 = clause;
var vec__17550 = cljs.core.nth.call(null,vec__17549,(0),null);
var f = cljs.core.nth.call(null,vec__17550,(0),null);
var args = cljs.core.nthnext.call(null,vec__17550,(1));
var out = cljs.core.nth.call(null,vec__17549,(1),null);
var fun = (function (){var or__3799__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return datascript.query.context_resolve_val.call(null,context,f);
}
})();
var vec__17551 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__17551,(0),null);
var production = cljs.core.nth.call(null,vec__17551,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn.call(null,context__$1,production,fun,args);
var temp__4124__auto__ = cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
if(cljs.core.truth_(temp__4124__auto__)){
var tuples = temp__4124__auto__;
return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (tuples,temp__4124__auto__,tuple_fn,vec__17549,vec__17550,f,args,out,fun,vec__17551,context__$1,production){
return (function (p1__17545_SHARP_){
var val = tuple_fn.call(null,p1__17545_SHARP_);
var rel = datascript.query.in__GT_rel.call(null,out,val);
return datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17545_SHARP_], null),null,null,null)),rel);
});})(tuples,temp__4124__auto__,tuple_fn,vec__17549,vec__17550,f,args,out,fun,vec__17551,context__$1,production))
,tuples));
} else {
return datascript.query.prod_rel.call(null,production,datascript.query.in__GT_rel.call(null,out));
}
})():datascript.query.prod_rel.call(null,cljs.core.assoc.call(null,production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),cljs.core.PersistentVector.EMPTY),datascript.query.in__GT_rel.call(null,out)));
return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.rule_QMARK_ = (function rule_QMARK_(context,clause){
return (cljs.core.sequential_QMARK_.call(null,clause)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?cljs.core.second.call(null,clause):cljs.core.first.call(null,clause))));
});
datascript.query.rule_seqid = cljs.core.atom.call(null,(0));
datascript.query.expand_rule = (function expand_rule(clause,context,used_args){
var vec__17566 = clause;
var rule = cljs.core.nth.call(null,vec__17566,(0),null);
var call_args = cljs.core.nthnext.call(null,vec__17566,(1));
var seqid = cljs.core.swap_BANG_.call(null,datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4555__auto__ = ((function (vec__17566,rule,call_args,seqid,branches){
return (function iter__17567(s__17568){
return (new cljs.core.LazySeq(null,((function (vec__17566,rule,call_args,seqid,branches){
return (function (){
var s__17568__$1 = s__17568;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17568__$1);
if(temp__4126__auto__){
var s__17568__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17568__$2)){
var c__4553__auto__ = cljs.core.chunk_first.call(null,s__17568__$2);
var size__4554__auto__ = cljs.core.count.call(null,c__4553__auto__);
var b__17570 = cljs.core.chunk_buffer.call(null,size__4554__auto__);
if((function (){var i__17569 = (0);
while(true){
if((i__17569 < size__4554__auto__)){
var branch = cljs.core._nth.call(null,c__4553__auto__,i__17569);
var vec__17575 = branch;
var vec__17576 = cljs.core.nth.call(null,vec__17575,(0),null);
var _ = cljs.core.nth.call(null,vec__17576,(0),null);
var rule_args = cljs.core.nthnext.call(null,vec__17576,(1));
var clauses = cljs.core.nthnext.call(null,vec__17575,(1));
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
cljs.core.chunk_append.call(null,b__17570,clojure.walk.postwalk.call(null,((function (i__17569,vec__17575,vec__17576,_,rule_args,clauses,replacements,branch,c__4553__auto__,size__4554__auto__,b__17570,s__17568__$2,temp__4126__auto__,vec__17566,rule,call_args,seqid,branches){
return (function (p1__17552_SHARP_){
if(datascript.query.free_var_QMARK_.call(null,p1__17552_SHARP_)){
var or__3799__auto__ = replacements.call(null,p1__17552_SHARP_);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(cljs.core.name.call(null,p1__17552_SHARP_)),cljs.core.str("__auto__"),cljs.core.str(seqid)].join(''));
}
} else {
return p1__17552_SHARP_;
}
});})(i__17569,vec__17575,vec__17576,_,rule_args,clauses,replacements,branch,c__4553__auto__,size__4554__auto__,b__17570,s__17568__$2,temp__4126__auto__,vec__17566,rule,call_args,seqid,branches))
,clauses));

var G__17579 = (i__17569 + (1));
i__17569 = G__17579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17570),iter__17567.call(null,cljs.core.chunk_rest.call(null,s__17568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17570),null);
}
} else {
var branch = cljs.core.first.call(null,s__17568__$2);
var vec__17577 = branch;
var vec__17578 = cljs.core.nth.call(null,vec__17577,(0),null);
var _ = cljs.core.nth.call(null,vec__17578,(0),null);
var rule_args = cljs.core.nthnext.call(null,vec__17578,(1));
var clauses = cljs.core.nthnext.call(null,vec__17577,(1));
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
return cljs.core.cons.call(null,clojure.walk.postwalk.call(null,((function (vec__17577,vec__17578,_,rule_args,clauses,replacements,branch,s__17568__$2,temp__4126__auto__,vec__17566,rule,call_args,seqid,branches){
return (function (p1__17552_SHARP_){
if(datascript.query.free_var_QMARK_.call(null,p1__17552_SHARP_)){
var or__3799__auto__ = replacements.call(null,p1__17552_SHARP_);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(cljs.core.name.call(null,p1__17552_SHARP_)),cljs.core.str("__auto__"),cljs.core.str(seqid)].join(''));
}
} else {
return p1__17552_SHARP_;
}
});})(vec__17577,vec__17578,_,rule_args,clauses,replacements,branch,s__17568__$2,temp__4126__auto__,vec__17566,rule,call_args,seqid,branches))
,clauses),iter__17567.call(null,cljs.core.rest.call(null,s__17568__$2)));
}
} else {
return null;
}
break;
}
});})(vec__17566,rule,call_args,seqid,branches))
,null,null));
});})(vec__17566,rule,call_args,seqid,branches))
;
return iter__4555__auto__.call(null,branches);
});
datascript.query.remove_pairs = (function remove_pairs(xs,ys){
var pairs = cljs.core.remove.call(null,(function (p__17582){
var vec__17583 = p__17582;
var x = cljs.core.nth.call(null,vec__17583,(0),null);
var y = cljs.core.nth.call(null,vec__17583,(1),null);
return cljs.core._EQ_.call(null,x,y);
}),cljs.core.map.call(null,cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,pairs),cljs.core.map.call(null,cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function rule_gen_guards(rule_clause,used_args){
var vec__17593 = rule_clause;
var rule = cljs.core.nth.call(null,vec__17593,(0),null);
var call_args = cljs.core.nthnext.call(null,vec__17593,(1));
var prev_call_args = cljs.core.get.call(null,used_args,rule);
var iter__4555__auto__ = ((function (vec__17593,rule,call_args,prev_call_args){
return (function iter__17594(s__17595){
return (new cljs.core.LazySeq(null,((function (vec__17593,rule,call_args,prev_call_args){
return (function (){
var s__17595__$1 = s__17595;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17595__$1);
if(temp__4126__auto__){
var s__17595__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17595__$2)){
var c__4553__auto__ = cljs.core.chunk_first.call(null,s__17595__$2);
var size__4554__auto__ = cljs.core.count.call(null,c__4553__auto__);
var b__17597 = cljs.core.chunk_buffer.call(null,size__4554__auto__);
if((function (){var i__17596 = (0);
while(true){
if((i__17596 < size__4554__auto__)){
var prev_args = cljs.core._nth.call(null,c__4553__auto__,i__17596);
var vec__17600 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__17600,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__17600,(1),null);
cljs.core.chunk_append.call(null,b__17597,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null));

var G__17602 = (i__17596 + (1));
i__17596 = G__17602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17597),iter__17594.call(null,cljs.core.chunk_rest.call(null,s__17595__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17597),null);
}
} else {
var prev_args = cljs.core.first.call(null,s__17595__$2);
var vec__17601 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__17601,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__17601,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null),iter__17594.call(null,cljs.core.rest.call(null,s__17595__$2)));
}
} else {
return null;
}
break;
}
});})(vec__17593,rule,call_args,prev_call_args))
,null,null));
});})(vec__17593,rule,call_args,prev_call_args))
;
return iter__4555__auto__.call(null,prev_call_args);
});
datascript.query.walk_collect = (function walk_collect(form,pred){
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk.call(null,((function (res){
return (function (p1__17603_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__17603_SHARP_))){
cljs.core.swap_BANG_.call(null,res,cljs.core.conj,p1__17603_SHARP_);
} else {
}

return p1__17603_SHARP_;
});})(res))
,form);

return cljs.core.deref.call(null,res);
});
datascript.query.split_guards = (function split_guards(clauses,guards){
var bound_vars = cljs.core.set.call(null,datascript.query.walk_collect.call(null,clauses,datascript.query.free_var_QMARK_));
var pred = ((function (bound_vars){
return (function (p__17607){
var vec__17608 = p__17607;
var vec__17609 = cljs.core.nth.call(null,vec__17608,(0),null);
var _ = cljs.core.nth.call(null,vec__17609,(0),null);
var vars = cljs.core.nthnext.call(null,vec__17609,(1));
return cljs.core.every_QMARK_.call(null,bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,pred,guards),cljs.core.remove.call(null,pred,guards)], null);
});
datascript.query.solve_rule = (function solve_rule(context,clause){
var final_attrs = cljs.core.filter.call(null,datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap.call(null,final_attrs,cljs.core.range.call(null));
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.call(null,datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some.call(null,((function (final_attrs,final_attrs_map,solve){
return (function (p1__17610_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__17610_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__4124__auto__ = cljs.core.first.call(null,stack);
if(cljs.core.truth_(temp__4124__auto__)){
var frame = temp__4124__auto__;
var vec__17621 = cljs.core.split_with.call(null,((function (stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__17611_SHARP_){
return !(datascript.query.rule_QMARK_.call(null,context,p1__17611_SHARP_));
});})(stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.call(null,vec__17621,(0),null);
var vec__17622 = cljs.core.nth.call(null,vec__17621,(1),null);
var rule_clause = cljs.core.nth.call(null,vec__17622,(0),null);
var next_clauses = cljs.core.nthnext.call(null,vec__17622,(1));
if((rule_clause == null)){
var context__$1 = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = datascript.query._collect.call(null,context__$1,final_attrs);
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__17629 = cljs.core.next.call(null,stack);
var G__17630 = datascript.query.sum_rel.call(null,rel,new_rel);
stack = G__17629;
rel = G__17630;
continue;
} else {
var vec__17623 = rule_clause;
var rule = cljs.core.nth.call(null,vec__17623,(0),null);
var call_args = cljs.core.nthnext.call(null,vec__17623,(1));
var guards = datascript.query.rule_gen_guards.call(null,rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__17624 = datascript.query.split_guards.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.call(null,guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.call(null,vec__17624,(0),null);
var pending_gs = cljs.core.nth.call(null,vec__17624,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (stack,rel,vec__17623,rule,call_args,guards,vec__17624,active_gs,pending_gs,vec__17621,clauses,vec__17622,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__17612_SHARP_){
return cljs.core._EQ_.call(null,p1__17612_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__17623,rule,call_args,guards,vec__17624,active_gs,pending_gs,vec__17621,clauses,vec__17622,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__17631 = cljs.core.next.call(null,stack);
var G__17632 = rel;
stack = G__17631;
rel = G__17632;
continue;
} else {
var prefix_clauses = cljs.core.concat.call(null,clauses,active_gs);
var prefix_context = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_.call(null,prefix_context))){
var G__17633 = cljs.core.next.call(null,stack);
var G__17634 = rel;
stack = G__17633;
rel = G__17634;
continue;
} else {
var used_args = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule.call(null,rule_clause,context,used_args);
var G__17635 = cljs.core.concat.call(null,(function (){var iter__4555__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__17623,rule,call_args,guards,vec__17624,active_gs,pending_gs,vec__17621,clauses,vec__17622,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function iter__17625(s__17626){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__17623,rule,call_args,guards,vec__17624,active_gs,pending_gs,vec__17621,clauses,vec__17622,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__17626__$1 = s__17626;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17626__$1);
if(temp__4126__auto__){
var s__17626__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17626__$2)){
var c__4553__auto__ = cljs.core.chunk_first.call(null,s__17626__$2);
var size__4554__auto__ = cljs.core.count.call(null,c__4553__auto__);
var b__17628 = cljs.core.chunk_buffer.call(null,size__4554__auto__);
if((function (){var i__17627 = (0);
while(true){
if((i__17627 < size__4554__auto__)){
var branch = cljs.core._nth.call(null,c__4553__auto__,i__17627);
cljs.core.chunk_append.call(null,b__17628,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__17637 = (i__17627 + (1));
i__17627 = G__17637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17628),iter__17625.call(null,cljs.core.chunk_rest.call(null,s__17626__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17628),null);
}
} else {
var branch = cljs.core.first.call(null,s__17626__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),iter__17625.call(null,cljs.core.rest.call(null,s__17626__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__17623,rule,call_args,guards,vec__17624,active_gs,pending_gs,vec__17621,clauses,vec__17622,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__17623,rule,call_args,guards,vec__17624,active_gs,pending_gs,vec__17621,clauses,vec__17622,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4555__auto__.call(null,branches);
})(),cljs.core.next.call(null,stack));
var G__17636 = rel;
stack = G__17635;
rel = G__17636;
continue;
}
}
}
} else {
return rel;
}
break;
}
});
datascript.query._resolve_clause = (function _resolve_clause(context,clause){
var pred__17641 = datascript.query.looks_like_QMARK_;
var expr__17642 = clause;
if(cljs.core.truth_(pred__17641.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__17642))){
return datascript.query.filter_by_pred.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__17641.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),expr__17642))){
return datascript.query.bind_by_fn.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__17641.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__17642))){
var relation = datascript.query.lookup_pattern.call(null,context,clause);
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,relation);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__17642)].join('')));
}
}
}
});
datascript.query.resolve_clause = (function resolve_clause(context,clause){
if(datascript.query.rule_QMARK_.call(null,context,clause)){
var vec__17645 = ((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clause),cljs.core.next.call(null,clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));
var source = cljs.core.nth.call(null,vec__17645,(0),null);
var rule = cljs.core.nth.call(null,vec__17645,(1),null);
var source__$1 = cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),source], null));
var rel = datascript.query.solve_rule.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1580747756,null),source__$1], null)),rule);
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,rel);
} else {
return datascript.query._resolve_clause.call(null,context,clause);
}
});
datascript.query._q = (function _q(context,clauses){
return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
});
datascript.query._collect = (function() {
var _collect = null;
var _collect__2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return _collect.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Array(cljs.core.count.call(null,symbols)))], null),rels,symbols);
});
var _collect__3 = (function (acc,rels,symbols){
while(true){
var temp__4124__auto__ = cljs.core.first.call(null,rels);
if(cljs.core.truth_(temp__4124__auto__)){
var rel = temp__4124__auto__;
var keep_attrs = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_.call(null,keep_attrs)){
var G__17659 = acc;
var G__17660 = cljs.core.next.call(null,rels);
var G__17661 = symbols;
acc = G__17659;
rels = G__17660;
symbols = G__17661;
continue;
} else {
var copy_map = cljs.core.to_array.call(null,cljs.core.map.call(null,((function (acc,rels,symbols,keep_attrs,rel,temp__4124__auto__){
return (function (p1__17646_SHARP_){
return cljs.core.get.call(null,keep_attrs,p1__17646_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__4124__auto__))
,symbols));
var len = cljs.core.count.call(null,symbols);
var G__17662 = (function (){var iter__4555__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__17653(s__17654){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){
var s__17654__$1 = s__17654;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17654__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var t1 = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4551__auto__ = ((function (s__17654__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__17655(s__17656){
return (new cljs.core.LazySeq(null,((function (s__17654__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){
var s__17656__$1 = s__17656;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__17656__$1);
if(temp__4126__auto____$1){
var s__17656__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17656__$2)){
var c__4553__auto__ = cljs.core.chunk_first.call(null,s__17656__$2);
var size__4554__auto__ = cljs.core.count.call(null,c__4553__auto__);
var b__17658 = cljs.core.chunk_buffer.call(null,size__4554__auto__);
if((function (){var i__17657 = (0);
while(true){
if((i__17657 < size__4554__auto__)){
var t2 = cljs.core._nth.call(null,c__4553__auto__,i__17657);
cljs.core.chunk_append.call(null,b__17658,(function (){var res = cljs.core.aclone.call(null,t1);
var n__4686__auto___17665 = len;
var i_17666 = (0);
while(true){
if((i_17666 < n__4686__auto___17665)){
var temp__4126__auto___17667__$2 = (copy_map[i_17666]);
if(cljs.core.truth_(temp__4126__auto___17667__$2)){
var idx_17668 = temp__4126__auto___17667__$2;
(res[i_17666] = (t2[idx_17668]));
} else {
}

var G__17669 = (i_17666 + (1));
i_17666 = G__17669;
continue;
} else {
}
break;
}

return res;
})());

var G__17670 = (i__17657 + (1));
i__17657 = G__17670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17658),iter__17655.call(null,cljs.core.chunk_rest.call(null,s__17656__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17658),null);
}
} else {
var t2 = cljs.core.first.call(null,s__17656__$2);
return cljs.core.cons.call(null,(function (){var res = cljs.core.aclone.call(null,t1);
var n__4686__auto___17671 = len;
var i_17672 = (0);
while(true){
if((i_17672 < n__4686__auto___17671)){
var temp__4126__auto___17673__$2 = (copy_map[i_17672]);
if(cljs.core.truth_(temp__4126__auto___17673__$2)){
var idx_17674 = temp__4126__auto___17673__$2;
(res[i_17672] = (t2[idx_17674]));
} else {
}

var G__17675 = (i_17672 + (1));
i_17672 = G__17675;
continue;
} else {
}
break;
}

return res;
})(),iter__17655.call(null,cljs.core.rest.call(null,s__17656__$2)));
}
} else {
return null;
}
break;
}
});})(s__17654__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(s__17654__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;
var fs__4552__auto__ = cljs.core.seq.call(null,iterys__4551__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4552__auto__){
return cljs.core.concat.call(null,fs__4552__auto__,iter__17653.call(null,cljs.core.rest.call(null,s__17654__$1)));
} else {
var G__17676 = cljs.core.rest.call(null,s__17654__$1);
s__17654__$1 = G__17676;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;
return iter__4555__auto__.call(null,acc);
})();
var G__17663 = cljs.core.next.call(null,rels);
var G__17664 = symbols;
acc = G__17662;
rels = G__17663;
symbols = G__17664;
continue;
}
} else {
return acc;
}
break;
}
});
_collect = function(acc,rels,symbols){
switch(arguments.length){
case 2:
return _collect__2.call(this,acc,rels);
case 3:
return _collect__3.call(this,acc,rels,symbols);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_collect.cljs$core$IFn$_invoke$arity$2 = _collect__2;
_collect.cljs$core$IFn$_invoke$arity$3 = _collect__3;
return _collect;
})()
;
datascript.query.collect = (function collect(context,symbols){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.vec,datascript.query._collect.call(null,context,symbols)));
});
datascript.query.find_attrs = (function find_attrs(q){
return cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__17677_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__17677_SHARP_)){
return cljs.core.last.call(null,p1__17677_SHARP_);
} else {
return p1__17677_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
});
datascript.query._aggregate = (function _aggregate(q,context,tuples){
return cljs.core.mapv.call(null,(function (form,fixed_value,i){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__17681 = form;
var f = cljs.core.nth.call(null,vec__17681,(0),null);
var args = cljs.core.nthnext.call(null,vec__17681,(1));
var vals = cljs.core.map.call(null,((function (vec__17681,f,args){
return (function (p1__17678_SHARP_){
return cljs.core.nth.call(null,p1__17678_SHARP_,i);
});})(vec__17681,f,args))
,tuples);
var args__$1 = cljs.core.map.call(null,((function (vec__17681,f,args,vals){
return (function (p1__17679_SHARP_){
if((p1__17679_SHARP_ instanceof cljs.core.Symbol)){
return datascript.query.context_resolve_val.call(null,context,p1__17679_SHARP_);
} else {
return p1__17679_SHARP_;
}
});})(vec__17681,f,args,vals))
,cljs.core.butlast.call(null,args));
var f__$1 = (function (){var or__3799__auto__ = datascript.query.built_in_aggregates.call(null,f);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return datascript.query.context_resolve_val.call(null,context,f);
}
})();
return cljs.core.apply.call(null,f__$1,cljs.core.concat.call(null,args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.first.call(null,tuples),cljs.core.range.call(null));
});
datascript.query.aggregate = (function aggregate(q,context,resultset){
var group_idxs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__17682_SHARP_,p2__17683_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__17682_SHARP_)){
return null;
} else {
return p2__17683_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.range.call(null)));
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.call(null,((function (group_idxs){
return (function (p1__17684_SHARP_){
return cljs.core.nth.call(null,tuple,p1__17684_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by.call(null,group_fn,resultset);
var iter__4555__auto__ = ((function (group_idxs,group_fn,grouped){
return (function iter__17693(s__17694){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__17694__$1 = s__17694;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17694__$1);
if(temp__4126__auto__){
var s__17694__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17694__$2)){
var c__4553__auto__ = cljs.core.chunk_first.call(null,s__17694__$2);
var size__4554__auto__ = cljs.core.count.call(null,c__4553__auto__);
var b__17696 = cljs.core.chunk_buffer.call(null,size__4554__auto__);
if((function (){var i__17695 = (0);
while(true){
if((i__17695 < size__4554__auto__)){
var vec__17699 = cljs.core._nth.call(null,c__4553__auto__,i__17695);
var _ = cljs.core.nth.call(null,vec__17699,(0),null);
var tuples = cljs.core.nth.call(null,vec__17699,(1),null);
cljs.core.chunk_append.call(null,b__17696,datascript.query._aggregate.call(null,q,context,tuples));

var G__17701 = (i__17695 + (1));
i__17695 = G__17701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17696),iter__17693.call(null,cljs.core.chunk_rest.call(null,s__17694__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17696),null);
}
} else {
var vec__17700 = cljs.core.first.call(null,s__17694__$2);
var _ = cljs.core.nth.call(null,vec__17700,(0),null);
var tuples = cljs.core.nth.call(null,vec__17700,(1),null);
return cljs.core.cons.call(null,datascript.query._aggregate.call(null,q,context,tuples),iter__17693.call(null,cljs.core.rest.call(null,s__17694__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__4555__auto__.call(null,grouped);
});
datascript.query.parse_query = (function parse_query(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4124__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4124__auto__)){
var q = temp__4124__auto__;
if((q instanceof cljs.core.Keyword)){
var G__17702 = parsed;
var G__17703 = q;
var G__17704 = cljs.core.next.call(null,qs);
parsed = G__17702;
key = G__17703;
qs = G__17704;
continue;
} else {
var G__17705 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__17706 = key;
var G__17707 = cljs.core.next.call(null,qs);
parsed = G__17705;
key = G__17706;
qs = G__17707;
continue;
}
} else {
return parsed;
}
break;
}
});
/**
* @param {...*} var_args
*/
datascript.query.q = (function() { 
var q__delegate = function (q__$1,inputs){
var q__$2 = ((cljs.core.sequential_QMARK_.call(null,q__$1))?datascript.query.parse_query.call(null,q__$1):q__$1);
var find = datascript.query.find_attrs.call(null,q__$2);
var ins = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(q__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null));
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$2);
var context = datascript.query.parse_ins.call(null,(new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),ins,inputs);
var resultset = datascript.query.collect.call(null,datascript.query._q.call(null,context,wheres),find);
var G__17710 = resultset;
var G__17710__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$2))?cljs.core.mapv.call(null,((function (G__17710,q__$2,find,ins,wheres,context,resultset){
return (function (p1__17708_SHARP_){
return cljs.core.subvec.call(null,p1__17708_SHARP_,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2)));
});})(G__17710,q__$2,find,ins,wheres,context,resultset))
,G__17710):G__17710);
var G__17710__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2))))?datascript.query.aggregate.call(null,q__$2,context,G__17710__$1):G__17710__$1);
return G__17710__$2;
};
var q = function (q__$1,var_args){
var inputs = null;
if (arguments.length > 1) {
var G__17711__i = 0, G__17711__a = new Array(arguments.length -  1);
while (G__17711__i < G__17711__a.length) {G__17711__a[G__17711__i] = arguments[G__17711__i + 1]; ++G__17711__i;}
  inputs = new cljs.core.IndexedSeq(G__17711__a,0);
} 
return q__delegate.call(this,q__$1,inputs);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__17712){
var q__$1 = cljs.core.first(arglist__17712);
var inputs = cljs.core.rest(arglist__17712);
return q__delegate(q__$1,inputs);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
