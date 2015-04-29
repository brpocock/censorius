// Compiled by ClojureScript 0.0-2665 {}
goog.provide('censorius.staff');
goog.require('cljs.core');
goog.require('reagent.session');
goog.require('reagent.core');
goog.require('clojure.string');
censorius.staff._PLUS_staff_mail_PLUS_ = new cljs.core.PersistentArrayMap(null, 3, ["ama422@aol.com",new cljs.core.Keyword(null,"ann-marie","ann-marie",1311777704),"brpocock@star-hope.org",new cljs.core.Keyword(null,"brfp","brfp",-453321611),"sage@star-hope.org",new cljs.core.Keyword(null,"sage","sage",-2121201294)], null);
censorius.staff._PLUS_bod_PLUS_ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ann-marie","ann-marie",1311777704),new cljs.core.Keyword(null,"lady-rae","lady-rae",-725479217),new cljs.core.Keyword(null,"medea","medea",1885392994),new cljs.core.Keyword(null,"teresa","teresa",-257696462),new cljs.core.Keyword(null,"paul","paul",692559859)], null);
censorius.staff._PLUS_div_PLUS_ = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cauldron","cauldron",-203144344),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"alysia","alysia",-719994884),new cljs.core.Keyword(null,"name","name",1843675177),"Bubbling Cauldron"], null),new cljs.core.Keyword(null,"hearth","hearth",2129007546),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"narissa","narissa",-445229323),new cljs.core.Keyword(null,"name","name",1843675177),"Guest Hearth"], null),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"mystral","mystral",-87066447),new cljs.core.Keyword(null,"name","name",1843675177),"Operations"], null),new cljs.core.Keyword(null,"registration","registration",1079145595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"bobbi-jo","bobbi-jo",1767669210),new cljs.core.Keyword(null,"name","name",1843675177),"Registration"], null),new cljs.core.Keyword(null,"site","site",-1852581499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"doug","doug",-1595921985),new cljs.core.Keyword(null,"name","name",1843675177),"Site"], null),new cljs.core.Keyword(null,"staff","staff",-921597568),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"sandi","sandi",-551873699),new cljs.core.Keyword(null,"name","name",1843675177),"Staff Services"], null),new cljs.core.Keyword(null,"bod","bod",276101359),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Board of Directors' Division"], null)], null);
censorius.staff._PLUS_service_leaders_PLUS_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guardian","guardian",-1005105625),new cljs.core.Keyword(null,"sqrl","sqrl",178580718),new cljs.core.Keyword(null,"drums","drums",641393692),new cljs.core.Keyword(null,"nicole","nicole",-437967428)], null);
censorius.staff._PLUS_advisory_PLUS_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scott-kelly","scott-kelly",-1093270568),new cljs.core.Keyword(null,"mystral","mystral",-87066447)], null);
censorius.staff._PLUS_elders_PLUS_ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"roger","roger",-24647299),new cljs.core.Keyword(null,"galan","galan",729267610),new cljs.core.Keyword(null,"thundar","thundar",-768471345),new cljs.core.Keyword(null,"guardian-bob","guardian-bob",-863988012),new cljs.core.Keyword(null,"arachne","arachne",-1788332555)], null);
censorius.staff._PLUS_departments_PLUS_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fire","fire",-144730624),new cljs.core.Keyword(null,"site","site",-1852581499),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"community","community",1600340198),new cljs.core.Keyword(null,"workshops","workshops",-154332472),new cljs.core.Keyword(null,"staffing","staffing",-485495093),new cljs.core.Keyword(null,"gungans","gungans",532803435),new cljs.core.Keyword(null,"vendors","vendors",-153040496),new cljs.core.Keyword(null,"office","office",-733494767),new cljs.core.Keyword(null,"parking","parking",-952236974),new cljs.core.Keyword(null,"comptroller","comptroller",197415026),new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword(null,"ritual","ritual",1818141075),new cljs.core.Keyword(null,"taxi","taxi",1533748116),new cljs.core.Keyword(null,"gate","gate",818072149),new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.Keyword(null,"design","design",1241338903),new cljs.core.Keyword(null,"hearth","hearth",2129007546),new cljs.core.Keyword(null,"registration","registration",1079145595),new cljs.core.Keyword(null,"tech","tech",-2100994563),new cljs.core.Keyword(null,"concert","concert",1864837917),new cljs.core.Keyword(null,"trash","trash",-1136970594),new cljs.core.Keyword(null,"teen","teen",-987391202),new cljs.core.Keyword(null,"web","web",-654701153)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"dee","dee",-1453464236),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"site","site",-1852581499),new cljs.core.Keyword(null,"name","name",1843675177),"Fire Circle"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cliff","cliff",175533848),new cljs.core.Keyword(null,"joe","joe",253775498)], null),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"site","site",-1852581499),new cljs.core.Keyword(null,"name","name",1843675177),"Site & Strike"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"beth","beth",1126685256),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Keyword(null,"name","name",1843675177),"Store Runner"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"thor","thor",-116169080),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Keyword(null,"name","name",1843675177),"Community Groups"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"sage","sage",-2121201294),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Keyword(null,"name","name",1843675177),"Workshops"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"medea","medea",1885392994),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"bod","bod",276101359),new cljs.core.Keyword(null,"name","name",1843675177),"Staffing"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"perseus","perseus",-187104979),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"site","site",-1852581499),new cljs.core.Keyword(null,"name","name",1843675177),"Gungans"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"sage","sage",-2121201294),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Keyword(null,"name","name",1843675177),"Vendors"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"jessica","jessica",-1730042811),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"staff","staff",-921597568),new cljs.core.Keyword(null,"name","name",1843675177),"Ministry of Magic"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"geoffrey","geoffrey",-2101332274),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"registration","registration",1079145595),new cljs.core.Keyword(null,"name","name",1843675177),"Parking"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ray","ray",-972479417),new cljs.core.Keyword(null,"jade","jade",-1018802444)], null),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"bod","bod",276101359),new cljs.core.Keyword(null,"name","name",1843675177),"Comptroller"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"jennifer","jennifer",55370407),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Keyword(null,"name","name",1843675177),"Kids' Realm"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"roger","roger",-24647299),new cljs.core.Keyword(null,"scion","scion",-476471628)], null),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"bod","bod",276101359),new cljs.core.Keyword(null,"name","name",1843675177),"Ritual"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aurora","aurora",-1771270263),new cljs.core.Keyword(null,"jim","jim",1658027601)], null),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"hearth","hearth",2129007546),new cljs.core.Keyword(null,"name","name",1843675177),"Taxi/Trolley"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"tony","tony",-215676110),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"registration","registration",1079145595),new cljs.core.Keyword(null,"name","name",1843675177),"Gate"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"soren","soren",-1209624393),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Keyword(null,"name","name",1843675177),"Tween Time"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mystral","mystral",-87066447),new cljs.core.Keyword(null,"diane","diane",1117169956),new cljs.core.Keyword(null,"medea","medea",1885392994)], null),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Keyword(null,"name","name",1843675177),"Design Team"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"cowboy","cowboy",-1169819704),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"hearth","hearth",2129007546),new cljs.core.Keyword(null,"name","name",1843675177),"Guest Hearth"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"amanda","amanda",-1928035343),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"registration","registration",1079145595),new cljs.core.Keyword(null,"name","name",1843675177),"Registration"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"brfp","brfp",-453321611),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Keyword(null,"name","name",1843675177),"Technology"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"paul","paul",692559859),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"bod","bod",276101359),new cljs.core.Keyword(null,"name","name",1843675177),"Concert Sound & Lights"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"site","site",-1852581499),new cljs.core.Keyword(null,"name","name",1843675177),"Trash"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Keyword(null,"name","name",1843675177),"Teen Forge"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lugal","lugal",-403063582),new cljs.core.Keyword(null,"diane","diane",1117169956),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"bod","bod",276101359),new cljs.core.Keyword(null,"name","name",1843675177),"Photography & Web Design"], null)]);
censorius.staff._PLUS_drummers_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nicole","nicole",-437967428),null], null), null);
censorius.staff._PLUS_guardians_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fox","fox",-471953117),null,new cljs.core.Keyword(null,"sqrl","sqrl",178580718),null], null), null);
censorius.staff.highest_job_QMARK_ = (function highest_job_QMARK_(staff_id){
var or__3799__auto__ = (function (){var and__3787__auto__ = cljs.core.get.call(null,censorius.staff._PLUS_bod_PLUS_,staff_id);
if(cljs.core.truth_(and__3787__auto__)){
return new cljs.core.Keyword(null,"bod","bod",276101359);
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (function (){var and__3787__auto__ = cljs.core.some.call(null,((function (or__3799__auto__){
return (function (p1__10360_SHARP_){
return cljs.core._EQ_.call(null,staff_id,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(censorius.staff._PLUS_div_PLUS_.call(null,p1__10360_SHARP_)));
});})(or__3799__auto__))
,cljs.core.keys.call(null,censorius.staff._PLUS_div_PLUS_));
if(cljs.core.truth_(and__3787__auto__)){
return new cljs.core.Keyword(null,"dc","dc",1726058308);
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(or__3799__auto____$1)){
return or__3799__auto____$1;
} else {
var or__3799__auto____$2 = (function (){var and__3787__auto__ = cljs.core.some.call(null,((function (or__3799__auto____$1,or__3799__auto__){
return (function (p1__10361_SHARP_){
return cljs.core._EQ_.call(null,staff_id,censorius.staff._PLUS_service_leaders_PLUS_.call(null,p1__10361_SHARP_));
});})(or__3799__auto____$1,or__3799__auto__))
,cljs.core.keys.call(null,censorius.staff._PLUS_service_leaders_PLUS_));
if(cljs.core.truth_(and__3787__auto__)){
return new cljs.core.Keyword(null,"service-leader","service-leader",-61065763);
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(or__3799__auto____$2)){
return or__3799__auto____$2;
} else {
var or__3799__auto____$3 = (function (){var and__3787__auto__ = cljs.core.get.call(null,censorius.staff._PLUS_advisory_PLUS_,staff_id);
if(cljs.core.truth_(and__3787__auto__)){
return new cljs.core.Keyword(null,"advisory-board","advisory-board",-2057412054);
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(or__3799__auto____$3)){
return or__3799__auto____$3;
} else {
var or__3799__auto____$4 = (function (){var and__3787__auto__ = cljs.core.get.call(null,censorius.staff._PLUS_elders_PLUS_,staff_id);
if(cljs.core.truth_(and__3787__auto__)){
return new cljs.core.Keyword(null,"elder","elder",-39663383);
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(or__3799__auto____$4)){
return or__3799__auto____$4;
} else {
var or__3799__auto____$5 = (function (){var and__3787__auto__ = cljs.core.some.call(null,((function (or__3799__auto____$4,or__3799__auto____$3,or__3799__auto____$2,or__3799__auto____$1,or__3799__auto__){
return (function (p1__10362_SHARP_){
return cljs.core._EQ_.call(null,staff_id,new cljs.core.Keyword(null,"lugal","lugal",-403063582).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,censorius.staff._PLUS_departments_PLUS_,p1__10362_SHARP_)));
});})(or__3799__auto____$4,or__3799__auto____$3,or__3799__auto____$2,or__3799__auto____$1,or__3799__auto__))
,cljs.core.keys.call(null,censorius.staff._PLUS_departments_PLUS_));
if(cljs.core.truth_(and__3787__auto__)){
return new cljs.core.Keyword(null,"lugal","lugal",-403063582);
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(or__3799__auto____$5)){
return or__3799__auto____$5;
} else {
var or__3799__auto____$6 = (function (){var and__3787__auto__ = cljs.core.get.call(null,censorius.staff._PLUS_guardians_PLUS_,staff_id);
if(cljs.core.truth_(and__3787__auto__)){
return new cljs.core.Keyword(null,"guardian","guardian",-1005105625);
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(or__3799__auto____$6)){
return or__3799__auto____$6;
} else {
var or__3799__auto____$7 = (function (){var and__3787__auto__ = cljs.core.get.call(null,censorius.staff._PLUS_drummers_PLUS_,staff_id);
if(cljs.core.truth_(and__3787__auto__)){
return new cljs.core.Keyword(null,"drummer","drummer",-1100253010);
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(or__3799__auto____$7)){
return or__3799__auto____$7;
} else {
var or__3799__auto____$8 = (function (){var and__3787__auto__ = cljs.core.some.call(null,((function (or__3799__auto____$7,or__3799__auto____$6,or__3799__auto____$5,or__3799__auto____$4,or__3799__auto____$3,or__3799__auto____$2,or__3799__auto____$1,or__3799__auto__){
return (function (p1__10363_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"staff","staff",-921597568).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,censorius.staff._PLUS_departments_PLUS_,p1__10363_SHARP_)),staff_id);
});})(or__3799__auto____$7,or__3799__auto____$6,or__3799__auto____$5,or__3799__auto____$4,or__3799__auto____$3,or__3799__auto____$2,or__3799__auto____$1,or__3799__auto__))
,cljs.core.keys.call(null,censorius.staff._PLUS_departments_PLUS_));
if(cljs.core.truth_(and__3787__auto__)){
return new cljs.core.Keyword(null,"staff","staff",-921597568);
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(or__3799__auto____$8)){
return or__3799__auto____$8;
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
});
censorius.staff.staff_id = (function staff_id(person){
return cljs.core.get.call(null,censorius.staff._PLUS_staff_mail_PLUS_,person);
});
censorius.staff.lugal_PLUS__QMARK_ = (function lugal_PLUS__QMARK_(person){
var temp__4126__auto__ = censorius.staff.staff_id.call(null,person);
if(cljs.core.truth_(temp__4126__auto__)){
var staff_id = temp__4126__auto__;
var job = censorius.staff.highest_job_QMARK_.call(null,staff_id);
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"staff","staff",-921597568),null], null), null).call(null,job));
} else {
return null;
}
});
