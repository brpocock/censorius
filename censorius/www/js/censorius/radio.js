// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('censorius.radio')) {
goog.provide('censorius.radio');
}
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('clojure.data');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('censorius.utils');
goog.require('clojure.string');
censorius.radio.write_select = (function write_select(cursor,label,korks,tags,size,name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cursor,korks),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return cljs.core.swap_BANG_.call(null,cursor,cljs.core.assoc,korks,event.target.value);
})], null),cljs.core.map.call(null,(function (p__10322){
var vec__10323 = p__10322;
var tag = cljs.core.nth.call(null,vec__10323,(0),null);
var name__$1 = cljs.core.nth.call(null,vec__10323,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(tag)].join('')], null),name__$1], null);
}),tags)], null);
});
censorius.radio.radio_set = (function radio_set(p__10324,children,this$){
var map__10330 = p__10324;
var map__10330__$1 = ((cljs.core.seq_QMARK_.call(null,map__10330))?cljs.core.apply.call(null,cljs.core.hash_map,map__10330):map__10330);
var tags = cljs.core.get.call(null,map__10330__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var korks = cljs.core.get.call(null,map__10330__$1,new cljs.core.Keyword(null,"korks","korks",-1343842342));
var label = cljs.core.get.call(null,map__10330__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var cursor = cljs.core.get.call(null,map__10330__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var name = censorius.utils.gensymreally.call(null,label);
var key_string = censorius.utils.keyword__GT_string.call(null,korks);
return ((function (name,key_string,map__10330,map__10330__$1,tags,korks,label,cursor){
return (function (cursor__$1,p__10331){
var map__10332 = p__10331;
var map__10332__$1 = ((cljs.core.seq_QMARK_.call(null,map__10332))?cljs.core.apply.call(null,cljs.core.hash_map,map__10332):map__10332);
var tags__$1 = cljs.core.get.call(null,map__10332__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var korks__$1 = cljs.core.get.call(null,map__10332__$1,new cljs.core.Keyword(null,"korks","korks",-1343842342));
var label__$1 = cljs.core.get.call(null,map__10332__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var cursor__$2 = cljs.core.get.call(null,map__10332__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
if(((15) > cljs.core.count.call(null,tags__$1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),name], null),label__$1], null)], null),censorius.radio.write_select.call(null,cursor__$2,label__$1,korks__$1,tags__$1,(10),name)], null);
} else {
if(((5) > cljs.core.count.call(null,tags__$1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label__$1,censorius.radio.write_select.call(null,cursor__$2,label__$1,korks__$1,tags__$1,(1),name)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label__$1], null)], null),cljs.core.map.call(null,((function (map__10332,map__10332__$1,tags__$1,korks__$1,label__$1,cursor__$2,name,key_string,map__10330,map__10330__$1,tags,korks,label,cursor){
return (function (p__10333){
var vec__10334 = p__10333;
var tag = cljs.core.nth.call(null,vec__10334,(0),null);
var name__$1 = cljs.core.nth.call(null,vec__10334,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(name__$1),cljs.core.str("-"),cljs.core.str(key_string)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(tag)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__10334,tag,name__$1,map__10332,map__10332__$1,tags__$1,korks__$1,label__$1,cursor__$2,name,key_string,map__10330,map__10330__$1,tags,korks,label,cursor){
return (function (event){
var node = event.target;
var checked = node.checked;
if(cljs.core.truth_(checked)){
return cljs.core.swap_BANG_.call(null,cursor__$2,cljs.core.assoc,korks__$1,tag);
} else {
return null;
}
});})(vec__10334,tag,name__$1,map__10332,map__10332__$1,tags__$1,korks__$1,label__$1,cursor__$2,name,key_string,map__10330,map__10330__$1,tags,korks,label,cursor))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,tag,cljs.core.get.call(null,cursor__$2,korks__$1))], null)], null),name__$1], null)], null);
});})(map__10332,map__10332__$1,tags__$1,korks__$1,label__$1,cursor__$2,name,key_string,map__10330,map__10330__$1,tags,korks,label,cursor))
,tags__$1)], null);

}
}
});
;})(name,key_string,map__10330,map__10330__$1,tags,korks,label,cursor))
});

//# sourceMappingURL=radio.js.map