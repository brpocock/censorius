// Compiled by ClojureScript 0.0-2665 {}
goog.provide('censorius.guest');
goog.require('cljs.core');
goog.require('censorius.staff');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('censorius.text');
goog.require('clojure.data');
goog.require('goog.history.EventType');
goog.require('censorius.radio');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('censorius.utils');
goog.require('clojure.string');
goog.require('censorius.data');
censorius.guest.set_edit_BANG_ = (function set_edit_BANG_(editing,tag){
return cljs.core.reset_BANG_.call(null,editing,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,editing),tag))?null:tag));
});
censorius.guest.click_edit_PERCENT_ = (function click_edit_PERCENT_(editing,tag){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return censorius.guest.set_edit_BANG_.call(null,editing,tag);
}),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str([cljs.core.str(tag)].join('').substring((1),cljs.core.count.call(null,[cljs.core.str(tag)].join('')))),cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,tag,cljs.core.deref.call(null,editing)))?"display":"editing"))].join('')], null);
});
censorius.guest.close_edit_BANG_ = (function close_edit_BANG_(editing){
censorius.utils.log.call(null,"Closing edits");

return cljs.core.reset_BANG_.call(null,editing,null);
});
censorius.guest.person_icon = (function person_icon(guest){
var G__9770 = (((new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(guest) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(guest).fqn:null);
switch (G__9770) {
case "f":
return "\uD83D\uDC69";

break;
case "m":
return "\uD83D\uDC68";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(guest))].join('')));

}
});
censorius.guest.couple_icon = (function() {
var couple_icon = null;
var couple_icon__1 = (function (guest){
return couple_icon.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [guest,new cljs.core.Keyword(null,"spouse","spouse",-750497167).cljs$core$IFn$_invoke$arity$1(guest)], null));
});
var couple_icon__2 = (function (guest,spouse){
var gender1 = (function (){var or__3799__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(guest);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"f","f",-1597136552)], null));
}
})();
var gender2 = (function (){var and__3787__auto__ = spouse;
if(cljs.core.truth_(and__3787__auto__)){
var or__3799__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(spouse);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"f","f",-1597136552)], null));
}
} else {
return and__3787__auto__;
}
})();
if(cljs.core.not.call(null,spouse)){
return censorius.guest.person_icon.call(null,guest);
} else {
if(cljs.core.not_EQ_.call(null,gender1,gender2)){
return "\uD83D\uDC6B";
} else {
if(cljs.core._EQ_.call(null,gender2,new cljs.core.Keyword(null,"f","f",-1597136552))){
return "\uD83D\uDC6D";
} else {
return "\uD83D\uDC6C";

}
}
}
});
couple_icon = function(guest,spouse){
switch(arguments.length){
case 1:
return couple_icon__1.call(this,guest);
case 2:
return couple_icon__2.call(this,guest,spouse);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
couple_icon.cljs$core$IFn$_invoke$arity$1 = couple_icon__1;
couple_icon.cljs$core$IFn$_invoke$arity$2 = couple_icon__2;
return couple_icon;
})()
;
censorius.guest._PLUS_t_shirt_long_names_PLUS_ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341),"Extra-small"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),"Small"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),"Medium"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423),"Large"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xl","xl",-1689552936),"Extra-large"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2xl","2xl",54696595),"Double extra-large"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"3xl","3xl",661405837),"Triple extra-large"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"4xl","4xl",1642175821),"Quadruple extra-large"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"5xl","5xl",-1819661541),"Quintuple extra-large"], null)], null);
censorius.guest.t_shirt_size_long_name = (function t_shirt_size_long_name(size){
return cljs.core.some.call(null,(function (p__9774){
var vec__9775 = p__9774;
var k = cljs.core.nth.call(null,vec__9775,(0),null);
var v = cljs.core.nth.call(null,vec__9775,(1),null);
if(cljs.core._EQ_.call(null,k,size)){
return v;
} else {
return null;
}
}),censorius.guest._PLUS_t_shirt_long_names_PLUS_);
});
censorius.guest.t_shirt_size_short_name = (function t_shirt_size_short_name(size){
return clojure.string.upper_case.call(null,censorius.utils.keyword__GT_string.call(null,size));
});
censorius.guest.abbr = (function abbr(short$,long$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),long$], null),short$,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ellide hint"], null)," ",long$], null)], null);
});
censorius.guest.lugal_PLUS__spouse_QMARK_ = (function lugal_PLUS__spouse_QMARK_(guest){
var and__3787__auto__ = new cljs.core.Keyword(null,"spouse","spouse",-750497167).cljs$core$IFn$_invoke$arity$1(guest);
if(cljs.core.truth_(and__3787__auto__)){
return censorius.staff.lugal_PLUS__QMARK_.call(null,new cljs.core.Keyword(null,"spouse","spouse",-750497167).cljs$core$IFn$_invoke$arity$1(guest));
} else {
return and__3787__auto__;
}
});
censorius.guest.unmarried_lugal_PLUS__QMARK_ = (function unmarried_lugal_PLUS__QMARK_(guest){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"adult","adult",-1130256462),new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505).cljs$core$IFn$_invoke$arity$1(guest))) && ((new cljs.core.Keyword(null,"spouse","spouse",-750497167).cljs$core$IFn$_invoke$arity$1(guest) == null));
});
censorius.guest.married_line = (function married_line(p__9776,children,self){
var map__9779 = p__9776;
var map__9779__$1 = ((cljs.core.seq_QMARK_.call(null,map__9779))?cljs.core.apply.call(null,cljs.core.hash_map,map__9779):map__9779);
var to = cljs.core.get.call(null,map__9779__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__9779__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),censorius.guest.couple_icon.call(null,from,to)," ",(function (){var G__9780 = (((new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(from) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(from).fqn:null);
switch (G__9780) {
case "f":
return "wife";

break;
case "m":
return "husband";

break;
default:
return "married";

}
})()," to ",(cljs.core.truth_(censorius.staff.lugal_PLUS__QMARK_.call(null,to))?"\uD808\uDE17 ":null),(function (){var or__3799__auto__ = new cljs.core.Keyword(null,"called-by","called-by",-644178399).cljs$core$IFn$_invoke$arity$1(to);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return new cljs.core.Keyword(null,"given-name","given-name",208174286).cljs$core$IFn$_invoke$arity$1(to);
}
})()," ",new cljs.core.Keyword(null,"surname","surname",1407918027).cljs$core$IFn$_invoke$arity$1(to)], null);
});
censorius.guest.marry_BANG_ = (function marry_BANG_(one,other){
if(((new cljs.core.Keyword(null,"spouse","spouse",-750497167).cljs$core$IFn$_invoke$arity$1(one) == null)) && ((new cljs.core.Keyword(null,"spouse","spouse",-750497167).cljs$core$IFn$_invoke$arity$1(other) == null))){
cljs.core.swap_BANG_.call(null,one,cljs.core.assoc,new cljs.core.Keyword(null,"spouse","spouse",-750497167),other);

return cljs.core.swap_BANG_.call(null,other,cljs.core.assoc,new cljs.core.Keyword(null,"spouse","spouse",-750497167),one);
} else {
return null;
}
});
censorius.guest.divorce_BANG_ = (function divorce_BANG_(one,other){
if((cljs.core._EQ_.call(null,other,new cljs.core.Keyword(null,"spouse","spouse",-750497167).cljs$core$IFn$_invoke$arity$1(one))) && (cljs.core._EQ_.call(null,one,new cljs.core.Keyword(null,"spouse","spouse",-750497167).cljs$core$IFn$_invoke$arity$1(other)))){
cljs.core.swap_BANG_.call(null,one,cljs.core.assoc,new cljs.core.Keyword(null,"spouse","spouse",-750497167),null);

return cljs.core.swap_BANG_.call(null,other,cljs.core.assoc,new cljs.core.Keyword(null,"spouse","spouse",-750497167),null);
} else {
return null;
}
});
censorius.guest.marital_edit = (function marital_edit(p__9782,children,this$){
var map__9788 = p__9782;
var map__9788__$1 = ((cljs.core.seq_QMARK_.call(null,map__9788))?cljs.core.apply.call(null,cljs.core.hash_map,map__9788):map__9788);
var guest = cljs.core.get.call(null,map__9788__$1,new cljs.core.Keyword(null,"guest","guest",692663006));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"adult","adult",-1130256462),new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505).cljs$core$IFn$_invoke$arity$1(guest))){
var bachelors = cljs.core.filter.call(null,censorius.guest.unmarried_lugal_PLUS__QMARK_,cljs.core.deref.call(null,censorius.data.guests));
var spouse = new cljs.core.Keyword(null,"spouse","spouse",-750497167).cljs$core$IFn$_invoke$arity$1(guest);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Lugal Spouse?"], null),(cljs.core.truth_((function (){var and__3787__auto__ = spouse;
if(cljs.core.truth_(and__3787__auto__)){
return censorius.staff.lugal_PLUS__QMARK_.call(null,spouse);
} else {
return and__3787__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"As a spouse to a lugal (or\n            higher) staff member, you receive discounted admission."], null):((!(cljs.core.empty_QMARK_.call(null,bachelors)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"A lugal (or higher) staff member's\n                 spouse receives a discounted admission."], null):null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (bachelors,spouse,map__9788,map__9788__$1,guest){
return (function (){
return censorius.guest.divorce_BANG_.call(null,guest,spouse);
});})(bachelors,spouse,map__9788,map__9788__$1,guest))
,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(cljs.core.name),cljs.core.str("/spouse")].join(''),new cljs.core.Keyword(null,"checked","checked",-50955819),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.guest.married_line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),guest,new cljs.core.Keyword(null,"to","to",192099007),spouse], null)], null)], null),((!(cljs.core.empty_QMARK_.call(null,bachelors)))?(function (){var iter__4555__auto__ = ((function (bachelors,spouse,map__9788,map__9788__$1,guest){
return (function iter__9789(s__9790){
return (new cljs.core.LazySeq(null,((function (bachelors,spouse,map__9788,map__9788__$1,guest){
return (function (){
var s__9790__$1 = s__9790;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9790__$1);
if(temp__4126__auto__){
var s__9790__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9790__$2)){
var c__4553__auto__ = cljs.core.chunk_first.call(null,s__9790__$2);
var size__4554__auto__ = cljs.core.count.call(null,c__4553__auto__);
var b__9792 = cljs.core.chunk_buffer.call(null,size__4554__auto__);
if((function (){var i__9791 = (0);
while(true){
if((i__9791 < size__4554__auto__)){
var bachelor = cljs.core._nth.call(null,c__4553__auto__,i__9791);
cljs.core.chunk_append.call(null,b__9792,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__9791,bachelor,c__4553__auto__,size__4554__auto__,b__9792,s__9790__$2,temp__4126__auto__,bachelors,spouse,map__9788,map__9788__$1,guest){
return (function (){
return censorius.guest.marry_BANG_.call(null,guest,bachelor);
});})(i__9791,bachelor,c__4553__auto__,size__4554__auto__,b__9792,s__9790__$2,temp__4126__auto__,bachelors,spouse,map__9788,map__9788__$1,guest))
,new cljs.core.Keyword(null,"name","name",1843675177),censorius.utils.gensymreally.call(null,[cljs.core.str(cljs.core.name),cljs.core.str("/marry")].join('')),new cljs.core.Keyword(null,"checked","checked",-50955819),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.guest.married_line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),guest,new cljs.core.Keyword(null,"to","to",192099007),bachelor], null)], null)], null));

var G__9793 = (i__9791 + (1));
i__9791 = G__9793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9792),iter__9789.call(null,cljs.core.chunk_rest.call(null,s__9790__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9792),null);
}
} else {
var bachelor = cljs.core.first.call(null,s__9790__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (bachelor,s__9790__$2,temp__4126__auto__,bachelors,spouse,map__9788,map__9788__$1,guest){
return (function (){
return censorius.guest.marry_BANG_.call(null,guest,bachelor);
});})(bachelor,s__9790__$2,temp__4126__auto__,bachelors,spouse,map__9788,map__9788__$1,guest))
,new cljs.core.Keyword(null,"name","name",1843675177),censorius.utils.gensymreally.call(null,[cljs.core.str(cljs.core.name),cljs.core.str("/marry")].join('')),new cljs.core.Keyword(null,"checked","checked",-50955819),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.guest.married_line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),guest,new cljs.core.Keyword(null,"to","to",192099007),bachelor], null)], null)], null),iter__9789.call(null,cljs.core.rest.call(null,s__9790__$2)));
}
} else {
return null;
}
break;
}
});})(bachelors,spouse,map__9788,map__9788__$1,guest))
,null,null));
});})(bachelors,spouse,map__9788,map__9788__$1,guest))
;
return iter__4555__auto__.call(null,bachelors);
})():null)], null);
} else {
return null;
}
});
censorius.guest.name_edit_box = (function name_edit_box(p__9794,children,this$){
var map__9796 = p__9794;
var map__9796__$1 = ((cljs.core.seq_QMARK_.call(null,map__9796))?cljs.core.apply.call(null,cljs.core.hash_map,map__9796):map__9796);
var guest = cljs.core.get.call(null,map__9796__$1,new cljs.core.Keyword(null,"guest","guest",692663006));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,children),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),guest,new cljs.core.Keyword(null,"korks","korks",-1343842342),new cljs.core.Keyword(null,"given-name","given-name",208174286),new cljs.core.Keyword(null,"label","label",1718410804),"Given name",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"John",new cljs.core.Keyword(null,"format","format",-1306924766),censorius.utils.name_case,new cljs.core.Keyword(null,"validate","validate",-201300827),censorius.utils.a_name_QMARK_,new cljs.core.Keyword(null,"rows","rows",850049680),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),guest,new cljs.core.Keyword(null,"korks","korks",-1343842342),new cljs.core.Keyword(null,"surname","surname",1407918027),new cljs.core.Keyword(null,"label","label",1718410804),"Surname",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Doe",new cljs.core.Keyword(null,"format","format",-1306924766),censorius.utils.name_case,new cljs.core.Keyword(null,"validate","validate",-201300827),censorius.utils.a_name_QMARK_,new cljs.core.Keyword(null,"rows","rows",850049680),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),guest,new cljs.core.Keyword(null,"korks","korks",-1343842342),new cljs.core.Keyword(null,"called-by","called-by",-644178399),new cljs.core.Keyword(null,"label","label",1718410804),"Called by",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Fuzzy Owl",new cljs.core.Keyword(null,"format","format",-1306924766),censorius.utils.name_case,new cljs.core.Keyword(null,"validate","validate",-201300827),censorius.utils.a_name_QMARK_,new cljs.core.Keyword(null,"rows","rows",850049680),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.radio.radio_set,guest,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Gender",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"gender","gender",-733930727),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\u2295 (not required)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),"\u2642 Male"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),"\u2640 Female"], null)], null)], null)], null)], null);
});
censorius.guest.suggest_staff_apply = (function suggest_staff_apply(props,children,this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Join the Staff!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"Join the FPG staff for discounted admission and more. Give back to the community too!"], null),children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/staff-apply"], null),"Apply now"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/staff-confirm"], null),"On Staff"], null)], null)], null)], null);
});
censorius.guest.guest_row = (function guest_row(p__9797){
var map__9804 = p__9797;
var map__9804__$1 = ((cljs.core.seq_QMARK_.call(null,map__9804))?cljs.core.apply.call(null,cljs.core.hash_map,map__9804):map__9804);
var guest = cljs.core.get.call(null,map__9804__$1,new cljs.core.Keyword(null,"guest","guest",692663006));
var name = censorius.utils.gensymreally.call(null,"guest");
var editing = reagent.core.atom.call(null,null);
return ((function (name,editing,map__9804,map__9804__$1,guest){
return (function (guest__$1){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),censorius.guest.click_edit_PERCENT_.call(null,editing,new cljs.core.Keyword(null,"name","name",1843675177)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref.call(null,editing)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pop-out"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.guest.name_edit_box,guest__$1], null),(((cljs.core.count.call(null,cljs.core.deref.call(null,censorius.data.guests)) > (1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"false",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,editing,map__9804,map__9804__$1,guest){
return (function (){
return alert("Should delete but TODO");
});})(name,editing,map__9804,map__9804__$1,guest))
], null),"Remove from party"], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"close true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,editing,map__9804,map__9804__$1,guest){
return (function (){
return censorius.guest.close_edit_BANG_.call(null,editing);
});})(name,editing,map__9804,map__9804__$1,guest))
], null),"\u2713"], null)], null):null),censorius.guest.abbr.call(null,(function (){var or__3799__auto__ = new cljs.core.Keyword(null,"called-by","called-by",-644178399).cljs$core$IFn$_invoke$arity$1(guest__$1);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return new cljs.core.Keyword(null,"given-name","given-name",208174286).cljs$core$IFn$_invoke$arity$1(guest__$1);
}
})(),[cljs.core.str(new cljs.core.Keyword(null,"given-name","given-name",208174286).cljs$core$IFn$_invoke$arity$1(guest__$1)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"surname","surname",1407918027).cljs$core$IFn$_invoke$arity$1(guest__$1))].join(''))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),censorius.guest.click_edit_PERCENT_.call(null,editing,new cljs.core.Keyword(null,"mail","mail",795732905)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mail","mail",795732905),cljs.core.deref.call(null,editing)))?censorius.utils.modality.call(null,((function (name,editing,map__9804,map__9804__$1,guest){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,null);
});})(name,editing,map__9804,map__9804__$1,guest))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pop-out"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),guest__$1,new cljs.core.Keyword(null,"korks","korks",-1343842342),new cljs.core.Keyword(null,"e-mail","e-mail",270044236),new cljs.core.Keyword(null,"label","label",1718410804),"eMail address",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"jdoe@example.com",new cljs.core.Keyword(null,"format","format",-1306924766),censorius.utils.format_email,new cljs.core.Keyword(null,"validate","validate",-201300827),censorius.utils.email_QMARK_,new cljs.core.Keyword(null,"rows","rows",850049680),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"close true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,editing,map__9804,map__9804__$1,guest){
return (function (){
return censorius.guest.close_edit_BANG_.call(null,editing);
});})(name,editing,map__9804,map__9804__$1,guest))
], null),"\u2713"], null)], null)):null),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"e-mail","e-mail",270044236).cljs$core$IFn$_invoke$arity$1(guest__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var mail = temp__4124__auto__;
return censorius.guest.abbr.call(null,"\u2709",mail);
} else {
return censorius.guest.abbr.call(null,"\u20E0","No e-mail address");
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),censorius.guest.click_edit_PERCENT_.call(null,editing,new cljs.core.Keyword(null,"phone","phone",-763596057)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"phone","phone",-763596057),cljs.core.deref.call(null,editing)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pop-out"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),guest__$1,new cljs.core.Keyword(null,"korks","korks",-1343842342),new cljs.core.Keyword(null,"telephone","telephone",1304285416),new cljs.core.Keyword(null,"label","label",1718410804),"Phone number",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"(305) 555-1234",new cljs.core.Keyword(null,"format","format",-1306924766),censorius.utils.format_phone,new cljs.core.Keyword(null,"validate","validate",-201300827),censorius.utils.phone_number_QMARK_,new cljs.core.Keyword(null,"rows","rows",850049680),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"close true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,editing,map__9804,map__9804__$1,guest){
return (function (){
return censorius.guest.close_edit_BANG_.call(null,editing);
});})(name,editing,map__9804,map__9804__$1,guest))
], null),"\u2713"], null)], null):null),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"telephone","telephone",1304285416).cljs$core$IFn$_invoke$arity$1(guest__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var phone = temp__4124__auto__;
return censorius.guest.abbr.call(null,"\uD83D\uDCDE",phone);
} else {
return censorius.guest.abbr.call(null,"\u20E0","No telephone number");
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),censorius.guest.click_edit_PERCENT_.call(null,editing,new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505),cljs.core.deref.call(null,editing)))?(function (){
if(cljs.core.truth_(censorius.staff.lugal_PLUS__QMARK_.call(null,guest__$1))){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"As a lugal (or higher) staff member,\n            your admission is free. You may also admit your spouse at a\n            discounted rate."], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"staff?","staff?",1233722098).cljs$core$IFn$_invoke$arity$1(guest__$1))){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"Staff members receive discounted admission."], null);
} else {
}
}

var tag_list_9810 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adult","adult",-1130256462),"\uD83C\uDFAB Adult"], null)], null);
var tag_list_9811__$1 = (((new cljs.core.Keyword(null,"spouse","spouse",-750497167).cljs$core$IFn$_invoke$arity$1(guest__$1) == null))?cljs.core.conj.call(null,tag_list_9810,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child","child",623967545),"\uD83C\uDFAB\uD83D\uDEB8 Child (ages 5\u219217)"], null)):tag_list_9810);
var tag_list_9812__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"staff?","staff?",1233722098).cljs$core$IFn$_invoke$arity$1(guest__$1)))?cljs.core.conj.call(null,tag_list_9811__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"baby","baby",-1305225347),"\uD83C\uDFAB\uD83D\uDEB6 Child (birth\u21924 years)"], null)):tag_list_9811__$1);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.radio.radio_set,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Ticket type",new cljs.core.Keyword(null,"cursor","cursor",1011937484),guest__$1,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505),new cljs.core.Keyword(null,"tags","tags",1771418977),tag_list_9812__$2], null)], null);

if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"baby","baby",-1305225347),new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505).cljs$core$IFn$_invoke$arity$1(guest__$1))){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.guest.suggest_staff_apply], null);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.guest.marital_edit,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guest","guest",692663006),guest__$1], null)], null);
})()
:null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__9805 = (((new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505).cljs$core$IFn$_invoke$arity$1(guest__$1) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505).cljs$core$IFn$_invoke$arity$1(guest__$1).fqn:null);
switch (G__9805) {
case "baby":
return censorius.guest.abbr.call(null,"\uD83C\uDFAB\uD83D\uDEB6","Baby");

break;
case "child":
return censorius.guest.abbr.call(null,"\uD83C\uDFAB\uD83D\uDEB8","Child");

break;
case "adult":
return censorius.guest.abbr.call(null,"\uD83C\uDFAB","Adult");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505).cljs$core$IFn$_invoke$arity$1(guest__$1))].join('')));

}
})()," ",(cljs.core.truth_(censorius.staff.lugal_PLUS__QMARK_.call(null,guest__$1))?censorius.guest.abbr.call(null,"\uD808\uDE17","Lugal"):(cljs.core.truth_(censorius.guest.lugal_PLUS__spouse_QMARK_.call(null,guest__$1))?censorius.guest.abbr.call(null,[cljs.core.str("\uD808\uDE17"),cljs.core.str(censorius.guest.couple_icon.call(null,guest__$1))].join(''),"Lugal spouse"):(cljs.core.truth_(new cljs.core.Keyword(null,"staff?","staff?",1233722098).cljs$core$IFn$_invoke$arity$1(guest__$1))?censorius.guest.abbr.call(null,"\u26E4","Staff"):null)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),censorius.guest.click_edit_PERCENT_.call(null,editing,new cljs.core.Keyword(null,"days","days",-1394072564)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.deref.call(null,editing)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pop-out"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"staff?","staff?",1233722098).cljs$core$IFn$_invoke$arity$1(guest__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Tuesday\u2192Sunday",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"Staff members are always a full week admission"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.radio.radio_set,guest__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Days attending",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"Wednesday\u2192Sunday"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"week-end","week-end",-1868033285),"Friday\u2192Sunday"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),"One day"], null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"close true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,editing,map__9804,map__9804__$1,guest){
return (function (){
return censorius.guest.close_edit_BANG_.call(null,editing);
});})(name,editing,map__9804,map__9804__$1,guest))
], null),"\u2713"], null)], null):censorius.guest.abbr.call(null,(function (){var G__9806 = new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(guest__$1);
if(cljs.core._EQ_.call(null,null,G__9806)){
return [cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"staff?","staff?",1233722098).cljs$core$IFn$_invoke$arity$1(guest__$1))?"Tue":"Wed")),cljs.core.str("-Sun")].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"week-end","week-end",-1868033285),G__9806)){
return "Fri-Sun";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"day","day",-274800446),G__9806)){
return "Day";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(guest__$1))].join('')));

}
}
}
})(),(function (){var G__9807 = new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(guest__$1);
if(cljs.core._EQ_.call(null,null,G__9807)){
return [cljs.core.str("Full week, "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"staff?","staff?",1233722098).cljs$core$IFn$_invoke$arity$1(guest__$1))?"Tuesday":"Wednesday")),cljs.core.str("\u2192Sunday")].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"week-end","week-end",-1868033285),G__9807)){
return "Week-end only, Friday\u2192Sunday";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"day","day",-274800446),G__9807)){
return "Any one day";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(guest__$1))].join('')));

}
}
}
})()))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),censorius.guest.click_edit_PERCENT_.call(null,editing,new cljs.core.Keyword(null,"sleep","sleep",-1932665860)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sleep","sleep",-1932665860),cljs.core.deref.call(null,editing)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pop-out"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.radio.radio_set,guest__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Sleeping Arrangements",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"sleep","sleep",-1932665860),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tent","tent",1392898711),"\u26FA Tent camping"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cabin","cabin",-2096716613),"\uD83C\uDFE1 Cabin camping"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lodge","lodge",2044562092),"\uD83C\uDFE0 Lodge camping"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"close true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,editing,map__9804,map__9804__$1,guest){
return (function (){
return censorius.guest.close_edit_BANG_.call(null,editing);
});})(name,editing,map__9804,map__9804__$1,guest))
], null),"\u2713"], null)], null):(function (){var G__9808 = (((new cljs.core.Keyword(null,"sleep","sleep",-1932665860).cljs$core$IFn$_invoke$arity$1(guest__$1) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"sleep","sleep",-1932665860).cljs$core$IFn$_invoke$arity$1(guest__$1).fqn:null);
switch (G__9808) {
case "lodge":
return censorius.guest.abbr.call(null,"\uD83C\uDFE0","Lodge camping");

break;
case "cabin":
return censorius.guest.abbr.call(null,"\uD83C\uDFE1","Cabin camping");

break;
case "tent":
return censorius.guest.abbr.call(null,"\u26FA","Tent camping");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"sleep","sleep",-1932665860).cljs$core$IFn$_invoke$arity$1(guest__$1))].join('')));

}
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),censorius.guest.click_edit_PERCENT_.call(null,editing,new cljs.core.Keyword(null,"eat","eat",1686757401)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"eat","eat",1686757401),cljs.core.deref.call(null,editing)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pop-out"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.radio.radio_set,guest__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Eating Arrangements",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"eat","eat",1686757401),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looney","looney",-1976949904),"\uD83C\uDF71\uD83D\uDC07 Looney Bin secret meal plan"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cauldron","cauldron",-203144344),"\uD83C\uDF72\uD83C\uDF74 Bubbling Cauldron meal plan"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\u20E0 Bringing food along or eating with food vendors"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"close true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,editing,map__9804,map__9804__$1,guest){
return (function (){
return censorius.guest.close_edit_BANG_.call(null,editing);
});})(name,editing,map__9804,map__9804__$1,guest))
], null),"\u2713"], null)], null):(function (){var G__9809 = new cljs.core.Keyword(null,"eat","eat",1686757401).cljs$core$IFn$_invoke$arity$1(guest__$1);
if(cljs.core._EQ_.call(null,null,G__9809)){
return censorius.guest.abbr.call(null,"\u20E0","Bringing food along");
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cauldron","cauldron",-203144344),G__9809)){
return censorius.guest.abbr.call(null,"\uD83C\uDF72\uD83C\uDF74","Bubbling Cauldron meal plan");
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"looney","looney",-1976949904),G__9809)){
return censorius.guest.abbr.call(null,"\uD83C\uDF71\uD83D\uDC07","Looney Bin secret meal plan");
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"eat","eat",1686757401).cljs$core$IFn$_invoke$arity$1(guest__$1))].join('')));

}
}
}
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),censorius.guest.click_edit_PERCENT_.call(null,editing,new cljs.core.Keyword(null,"t-shirt","t-shirt",-2121900800)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"t-shirt","t-shirt",-2121900800),cljs.core.deref.call(null,editing)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pop-out"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.radio.radio_set,guest__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Buy a Festival T-shirt",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"t-shirt","t-shirt",-2121900800),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.conj.call(null,censorius.guest._PLUS_t_shirt_long_names_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDDFD Not buying a T-shirt"], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"Buy other T-shirts and merchandise below, under ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),"Extras."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"close true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,editing,map__9804,map__9804__$1,guest){
return (function (){
return censorius.guest.close_edit_BANG_.call(null,editing);
});})(name,editing,map__9804,map__9804__$1,guest))
], null),"\u2713"], null)], null):(cljs.core.truth_(new cljs.core.Keyword(null,"t-shirt","t-shirt",-2121900800).cljs$core$IFn$_invoke$arity$1(guest__$1))?censorius.guest.abbr.call(null,[cljs.core.str("\uD83D\uDC55 "),cljs.core.str(censorius.guest.t_shirt_size_short_name.call(null,new cljs.core.Keyword(null,"t-shirt","t-shirt",-2121900800).cljs$core$IFn$_invoke$arity$1(guest__$1)))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"season","season",851675697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.festival))),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.festival))),cljs.core.str("T-shirt: "),cljs.core.str(censorius.guest.t_shirt_size_long_name.call(null,new cljs.core.Keyword(null,"t-shirt","t-shirt",-2121900800).cljs$core$IFn$_invoke$arity$1(guest__$1)))].join('')):censorius.guest.abbr.call(null,"\u20E0","No T-shirt")))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),censorius.guest.click_edit_PERCENT_.call(null,editing,new cljs.core.Keyword(null,"tote","tote",1783327514)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tote","tote",1783327514),cljs.core.deref.call(null,editing)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pop-out"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.radio.radio_set,guest__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Buy a Festival Tote Bag",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tote?","tote?",-1225962794),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,"\uD83D\uDCBC Tote bag"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,"\u20E0 No tote bag"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"Buy other merchandise below, under ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),"Extras."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"close true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,editing,map__9804,map__9804__$1,guest){
return (function (){
return censorius.guest.close_edit_BANG_.call(null,editing);
});})(name,editing,map__9804,map__9804__$1,guest))
], null),"\u2713"], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"tote?","tote?",-1225962794).cljs$core$IFn$_invoke$arity$1(guest__$1))?censorius.guest.abbr.call(null,"\uD83D\uDCBC","Tote Bag"):censorius.guest.abbr.call(null,"\u20E0","No tote mug"))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),censorius.guest.click_edit_PERCENT_.call(null,editing,new cljs.core.Keyword(null,"coffee","coffee",23772871)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"coffee","coffee",23772871),cljs.core.deref.call(null,editing)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pop-out"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.radio.radio_set,guest__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Buy a Festival Coffee Mug",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"coffee?","coffee?",-1296287323),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,"\uD83C\uDF7A Coffee Mug"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,"\u20E0 No coffee bag"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"Buy other merchandise below, under ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),"Extras."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"close true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,editing,map__9804,map__9804__$1,guest){
return (function (){
return censorius.guest.close_edit_BANG_.call(null,editing);
});})(name,editing,map__9804,map__9804__$1,guest))
], null),"\u2713"], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"coffee?","coffee?",-1296287323).cljs$core$IFn$_invoke$arity$1(guest__$1))?censorius.guest.abbr.call(null,"\uD83C\uDF7A","Coffee Mug"):censorius.guest.abbr.call(null,"\u20E0","No coffee mug"))], null)], null);
});
;})(name,editing,map__9804,map__9804__$1,guest))
});
