// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('censorius.utils')) {
goog.provide('censorius.utils');
}
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('reagent.session');
goog.require('clojure.data');
goog.require('goog.string.format');
goog.require('clojure.string');
censorius.utils.gensymreally = (function gensymreally(string){
if(cljs.core.truth_((function (){var and__3787__auto__ = string;
if(cljs.core.truth_(and__3787__auto__)){
return (typeof string === 'string') && (cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,string)));
} else {
return and__3787__auto__;
}
})())){
return cljs.core.gensym.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,string,/[^A-Za-z0-9]+/,"-"),"-","_"));
} else {
return cljs.core.gensym.call(null,"G");
}
});
censorius.utils.log10 = (function log10(x){
return (Math.log(x) / Math.LN10);
});
censorius.utils.stringerific = (function stringerific(thing){
var naïve = [cljs.core.str(thing)].join('');
if(cljs.core._EQ_.call(null,"[object Object]",naïve)){
try{return JSON.stringify(thing,null,(4));
}catch (e23436){if((e23436 instanceof TypeError)){
var e = e23436;
try{return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (e,naïve){
return (function (p__23438){
var vec__23439 = p__23438;
var key = cljs.core.nth.call(null,vec__23439,(0),null);
var value = cljs.core.nth.call(null,vec__23439,(1),null);
return [cljs.core.str(key),cljs.core.str(" \u2190 "),cljs.core.str(value),cljs.core.str(";  ")].join('');
});})(e,naïve))
,cljs.core.js__GT_clj.call(null,thing,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
}catch (e23437){var e__$1 = e23437;
return thing;
}} else {
throw e23436;

}
}} else {
return naïve;
}
});
/**
* @param {...*} var_args
*/
censorius.utils.log = (function() { 
var log__delegate = function (stuff){
return console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,censorius.utils.stringerific,stuff)));
};
var log = function (var_args){
var stuff = null;
if (arguments.length > 0) {
var G__23440__i = 0, G__23440__a = new Array(arguments.length -  0);
while (G__23440__i < G__23440__a.length) {G__23440__a[G__23440__i] = arguments[G__23440__i + 0]; ++G__23440__i;}
  stuff = new cljs.core.IndexedSeq(G__23440__a,0);
} 
return log__delegate.call(this,stuff);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__23441){
var stuff = cljs.core.seq(arglist__23441);
return log__delegate(stuff);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
censorius.utils.unique_key = (function unique_key(prefix){
return [cljs.core.str(cljs.core.gensym.call(null,prefix))].join('');
});
censorius.utils.now = (function now(){
return (new Date());
});
censorius.utils.no_spaces = (function no_spaces(word){
return clojure.string.replace.call(null,word,/\s+/,"");
});
censorius.utils.format_email = (function format_email(address){
var parts = clojure.string.split.call(null,censorius.utils.no_spaces.call(null,address),/@/);
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,parts))){
return [cljs.core.str(cljs.core.first.call(null,parts)),cljs.core.str("@"),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.last.call(null,parts)))].join('');
} else {
return censorius.utils.no_spaces.call(null,address);
}
});
censorius.utils._PLUS_digit_chars_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["0",null,"1",null,"2",null,"3",null,"4",null,"5",null,"6",null,"7",null,"8",null,"9",null], null), null);
censorius.utils.just_digits = (function just_digits(string){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,censorius.utils._PLUS_digit_chars_PLUS_,string));
});
censorius.utils.just_decimal = (function just_decimal(string){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,(function (char$){
var or__3799__auto__ = cljs.core.some.call(null,censorius.utils._PLUS_digit_chars_PLUS_,char$);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return cljs.core._EQ_.call(null,".",char$);
}
}),[cljs.core.str(string)].join('')));
});
censorius.utils.just_digits_PLUS__PLUS_ = (function just_digits_PLUS__PLUS_(string){
var digits = cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,censorius.utils._PLUS_digit_chars_PLUS_,string));
if(cljs.core._EQ_.call(null,"+",cljs.core.first.call(null,string))){
return [cljs.core.str("+"),cljs.core.str(digits)].join('');
} else {
return digits;
}
});
censorius.utils.just_number = (function just_number(string){
return [cljs.core.str(parseInt(censorius.utils.just_digits.call(null,string)))].join('');
});
censorius.utils.just_digits_QMARK_ = (function just_digits_QMARK_(string){
return cljs.core._EQ_.call(null,string,censorius.utils.just_digits.call(null,string));
});
censorius.utils._PLUS_uk_4_PLUS_5_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 40, ["827",null,"695",null,"488",null,"384",null,"647",null,"527",null,"364",null,"404",null,"995",null,"480",null,"884",null,"949",null,"297",null,"837",null,"420",null,"562",null,"659",null,"629",null,"768",null,"363",null,"386",null,"208",null,"276",null,"726",null,"524",null,"635",null,"606",null,"461",null,"935",null,"750",null,"744",null,"254",null,"460",null,"298",null,"963",null,"946",null,"566",null,"204",null,"905",null,"900",null], null), null);
censorius.utils._PLUS_uk_5_PLUS_5_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["7687",null,"6973",null,"6974",null,"3873",null,"5396",null,"5242",null,"7684",null,"6977",null,"5395",null,"9467",null,"5394",null,"7683",null], null), null);
censorius.utils.format_phone = (function format_phone(number){
var formatted = (function (){var digits = cljs.core.apply.call(null,cljs.core.str,censorius.utils.just_digits.call(null,number));
var length = cljs.core.count.call(null,digits);
if(((length > (4))) && (cljs.core._EQ_.call(null,"+",cljs.core.first.call(null,number))) && (cljs.core._EQ_.call(null,"353",digits.substring((0),(3))))){
return [cljs.core.str("+353 "),cljs.core.str((((length < (10)))?digits.substring((3),length):(((length < (12)))?[cljs.core.str(digits.substring((3),(5))),cljs.core.str(" "),cljs.core.str(digits.substring((5),length))].join(''):(((cljs.core._EQ_.call(null,"0",cljs.core.nth.call(null,digits,(3)))) && (cljs.core._EQ_.call(null,"1",cljs.core.nth.call(null,digits,(4)))))?[cljs.core.str("(01) "),cljs.core.str(digits.substring((5),(8))),cljs.core.str(" "),cljs.core.str(digits.substring((8),length))].join(''):(cljs.core.truth_((function (){var and__3787__auto__ = cljs.core._EQ_.call(null,"0",cljs.core.nth.call(null,digits,(3)));
if(and__3787__auto__){
var and__3787__auto____$1 = (function (){var or__3799__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["2",null,"5",null,"6",null,"7",null], null), null).call(null,cljs.core.nth.call(null,digits,(4)));
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return (cljs.core._EQ_.call(null,"4",cljs.core.nth.call(null,digits,(4)))) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["0",null,"8",null], null), null).call(null,cljs.core.nth.call(null,digits,(5)))));
}
})();
if(cljs.core.truth_(and__3787__auto____$1)){
return (cljs.core.not_EQ_.call(null,"8",cljs.core.nth.call(null,digits,(4)))) || (cljs.core.not_EQ_.call(null,"5",cljs.core.nth.call(null,digits,(6))));
} else {
return and__3787__auto____$1;
}
} else {
return and__3787__auto__;
}
})())?[cljs.core.str("("),cljs.core.str(digits.substring((3),(6))),cljs.core.str(") "),cljs.core.str(digits.substring((6),(9))),cljs.core.str(" "),cljs.core.str(digits.substring((9),length))].join(''):(((cljs.core._EQ_.call(null,"0",cljs.core.nth.call(null,digits,(3)))) && (cljs.core._EQ_.call(null,"8",cljs.core.nth.call(null,digits,(4)))) && (cljs.core._EQ_.call(null,"5",cljs.core.nth.call(null,digits,(6)))))?[cljs.core.str("\uD83D\uDCF2 ("),cljs.core.str(digits.substring((3),(6))),cljs.core.str(") 5 "),cljs.core.str(digits.substring((7),(10))),cljs.core.str(" "),cljs.core.str(digits.substring((10),length))].join(''):(((cljs.core._EQ_.call(null,"0",cljs.core.nth.call(null,digits,(3)))) && (cljs.core._EQ_.call(null,"8",cljs.core.nth.call(null,digits,(4)))))?[cljs.core.str("\uD83D\uDCF1 ("),cljs.core.str(digits.substring((3),(6))),cljs.core.str(") "),cljs.core.str(digits.substring((6),(9))),cljs.core.str(" "),cljs.core.str(digits.substring((9),length))].join(''):(((cljs.core._EQ_.call(null,"0",cljs.core.nth.call(null,digits,(3)))) && (cljs.core._EQ_.call(null,"4",cljs.core.nth.call(null,digits,(4)))))?[cljs.core.str("("),cljs.core.str(digits.substring((3),(7))),cljs.core.str(") "),cljs.core.str(digits.substring((7),(10))),cljs.core.str(" "),cljs.core.str(digits.substring((10),length))].join(''):digits.substring((3),length)
))))))))].join('');
} else {
if(((length > (3))) && (cljs.core._EQ_.call(null,"+",cljs.core.first.call(null,number))) && (cljs.core._EQ_.call(null,"4",cljs.core.nth.call(null,digits,(0)),cljs.core.nth.call(null,digits,(1))))){
return [cljs.core.str("+44 "),cljs.core.str((((length < (12)))?digits.substring((2),length):((cljs.core.not_EQ_.call(null,"0",cljs.core.nth.call(null,digits,(2))))?digits.substring((2),length):(((cljs.core._EQ_.call(null,"1",cljs.core.nth.call(null,digits,(3)))) && (!((cljs.core._EQ_.call(null,"1",cljs.core.nth.call(null,digits,(4)))) || (cljs.core._EQ_.call(null,"1",cljs.core.nth.call(null,digits,(5)))))))?[cljs.core.str("("),cljs.core.str(digits.substring((2),(7))),cljs.core.str(") "),cljs.core.str(digits.substring((7),length))].join(''):(((cljs.core._EQ_.call(null,"1",cljs.core.nth.call(null,digits,(3)))) && ((cljs.core._EQ_.call(null,"1",cljs.core.nth.call(null,digits,(4)))) || (cljs.core._EQ_.call(null,"1",cljs.core.nth.call(null,digits,(5))))))?[cljs.core.str("("),cljs.core.str(digits.substring((2),(6))),cljs.core.str(") "),cljs.core.str(digits.substring((6),(9))),cljs.core.str(" "),cljs.core.str(digits.substring((9),length))].join(''):((cljs.core._EQ_.call(null,"2",cljs.core.nth.call(null,digits,(3))))?[cljs.core.str("("),cljs.core.str(digits.substring((2),(5))),cljs.core.str(") "),cljs.core.str(digits.substring((5),(9))),cljs.core.str(" "),cljs.core.str(digits.substring((9),length))].join(''):(cljs.core.truth_((function (){var and__3787__auto__ = cljs.core._EQ_.call(null,"1",cljs.core.nth.call(null,digits,(3)));
if(and__3787__auto__){
return censorius.utils._PLUS_uk_5_PLUS_5_PLUS_.call(null,digits.substring((4),(7)));
} else {
return and__3787__auto__;
}
})())?[cljs.core.str("("),cljs.core.str(digits.substring((2),(7))),cljs.core.str(") "),cljs.core.str(digits.substring((7),length))].join(''):(cljs.core.truth_((function (){var and__3787__auto__ = cljs.core._EQ_.call(null,"7",cljs.core.nth.call(null,digits,(3)));
if(and__3787__auto__){
var or__3799__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["4",null,"5",null,"7",null,"8",null,"9",null], null), null).call(null,cljs.core.nth.call(null,digits,(4)));
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return cljs.core._EQ_.call(null,"624",digits.substring((4),(7)));
}
} else {
return and__3787__auto__;
}
})())?[cljs.core.str("\uD83D\uDCF1 "),cljs.core.str(digits.substring((2),(7))),cljs.core.str(" "),cljs.core.str(digits.substring((7),length))].join(''):((cljs.core._EQ_.call(null,"70",digits.substring((3),(5))))?[cljs.core.str("\uD83D\uDC81 "),cljs.core.str(digits.substring((2),(5))),cljs.core.str(" "),cljs.core.str(digits.substring((5),(9))),cljs.core.str(" "),cljs.core.str(digits.substring((9),length))].join(''):((cljs.core._EQ_.call(null,"76",digits.substring((3),(5))))?[cljs.core.str("\uD83D\uDCDF "),cljs.core.str(digits.substring((2),(5))),cljs.core.str(" "),cljs.core.str(digits.substring((5),(9))),cljs.core.str(" "),cljs.core.str(digits.substring((9),length))].join(''):((cljs.core._EQ_.call(null,"3",cljs.core.nth.call(null,digits,(3))))?[cljs.core.str(digits.substring((2),(6))),cljs.core.str(" "),cljs.core.str(digits.substring((6),(9))),cljs.core.str(" "),cljs.core.str(digits.substring((9),length))].join(''):(((cljs.core._EQ_.call(null,"5",cljs.core.nth.call(null,digits,(3)))) && (cljs.core._EQ_.call(null,"0",cljs.core.nth.call(null,digits,(4)),cljs.core.nth.call(null,digits,(5)))))?[cljs.core.str("0500 "),cljs.core.str(digits.substring((6),length))].join(''):(((cljs.core._EQ_.call(null,"8",cljs.core.nth.call(null,digits,(3)))) && (cljs.core._EQ_.call(null,"0",cljs.core.nth.call(null,digits,(4)),cljs.core.nth.call(null,digits,(5)))) && ((length < (13))))?[cljs.core.str(digits.substring((2),(6))),cljs.core.str(" "),cljs.core.str(digits.substring((6),length))].join(''):(cljs.core.truth_((function (){var and__3787__auto__ = cljs.core._EQ_.call(null,"8",cljs.core.nth.call(null,digits,(3)));
if(and__3787__auto__){
var and__3787__auto____$1 = cljs.core._EQ_.call(null,"0",cljs.core.nth.call(null,digits,(4)));
if(and__3787__auto____$1){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["0",null,"8",null], null), null).call(null,cljs.core.nth.call(null,digits,(5)));
} else {
return and__3787__auto____$1;
}
} else {
return and__3787__auto__;
}
})())?[cljs.core.str(digits.substring((2),(6))),cljs.core.str(" "),cljs.core.str(digits.substring((6),(9))),cljs.core.str(" "),cljs.core.str(digits.substring((9),length))].join(''):(cljs.core.truth_((function (){var and__3787__auto__ = cljs.core._EQ_.call(null,"8",cljs.core.nth.call(null,digits,(3)));
if(and__3787__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["2",null,"4",null,"7",null], null), null).call(null,cljs.core.nth.call(null,digits,(4)));
} else {
return and__3787__auto__;
}
})())?[cljs.core.str(digits.substring((2),(6))),cljs.core.str(" "),cljs.core.str(digits.substring((6),(9))),cljs.core.str(" "),cljs.core.str(digits.substring((9),length))].join(''):((cljs.core._EQ_.call(null,"5",cljs.core.nth.call(null,digits,(3))))?[cljs.core.str(digits.substring((2),(5))),cljs.core.str(" "),cljs.core.str(digits.substring((5),(9))),cljs.core.str(" "),cljs.core.str(digits.substring((9),length))].join(''):digits.substring((2),length)
))))))))))))))))].join('');
} else {
if((cljs.core._EQ_.call(null,"+",cljs.core.first.call(null,number))) && (cljs.core.not_EQ_.call(null,"1",cljs.core.first.call(null,digits)))){
return number;
} else {
if(cljs.core._EQ_.call(null,"1",cljs.core.first.call(null,digits))){
return [cljs.core.str("+1 "),cljs.core.str(format_phone.call(null,cljs.core.rest.call(null,digits)))].join('');
} else {
if((length < (7))){
return digits;
} else {
if((length < (10))){
return [cljs.core.str(digits.substring((0),(length - (4)))),cljs.core.str("-"),cljs.core.str(digits.substring((length - (4)),length))].join('');
} else {
if(cljs.core._EQ_.call(null,length,(10))){
return [cljs.core.str("("),cljs.core.str(digits.substring((0),(3))),cljs.core.str(") "),cljs.core.str(digits.substring((3),(6))),cljs.core.str("-"),cljs.core.str(digits.substring((6),(10)))].join('');
} else {
return [cljs.core.str("("),cljs.core.str(digits.substring((0),(3))),cljs.core.str(") "),cljs.core.str(digits.substring((3),(6))),cljs.core.str("-"),cljs.core.str(digits.substring((6),(10))),cljs.core.str(" x"),cljs.core.str(digits.substring((10),length))].join('');

}
}
}
}
}
}
}
})();
return formatted;
});
/**
* @param {...*} var_args
*/
censorius.utils.no_op = (function() { 
var no_op__delegate = function (any){
return censorius.utils.log.call(null,"Ignoring: ",any);
};
var no_op = function (var_args){
var any = null;
if (arguments.length > 0) {
var G__23442__i = 0, G__23442__a = new Array(arguments.length -  0);
while (G__23442__i < G__23442__a.length) {G__23442__a[G__23442__i] = arguments[G__23442__i + 0]; ++G__23442__i;}
  any = new cljs.core.IndexedSeq(G__23442__a,0);
} 
return no_op__delegate.call(this,any);};
no_op.cljs$lang$maxFixedArity = 0;
no_op.cljs$lang$applyTo = (function (arglist__23443){
var any = cljs.core.seq(arglist__23443);
return no_op__delegate(any);
});
no_op.cljs$core$IFn$_invoke$arity$variadic = no_op__delegate;
return no_op;
})()
;
censorius.utils.area_code_cache = cljs.core.PersistentArrayMap.EMPTY;
censorius.utils.mkfun_area_code_reply = (function mkfun_area_code_reply(code){
return (function (reply){
var response = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core._EQ_.call(null,"success",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
var seq__23450 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"area-codes","area-codes",-1828703223).cljs$core$IFn$_invoke$arity$1(response));
var chunk__23451 = null;
var count__23452 = (0);
var i__23453 = (0);
while(true){
if((i__23453 < count__23452)){
var map__23454 = cljs.core._nth.call(null,chunk__23451,i__23453);
var map__23454__$1 = ((cljs.core.seq_QMARK_.call(null,map__23454))?cljs.core.apply.call(null,cljs.core.hash_map,map__23454):map__23454);
var state = cljs.core.get.call(null,map__23454__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var area_code = cljs.core.get.call(null,map__23454__$1,new cljs.core.Keyword(null,"area-code","area-code",10244836));
cljs.core.swap_BANG_.call(null,censorius.utils.area_code_cache,cljs.core.assoc,area_code,cljs.core.not_EQ_.call(null,"",state));

var G__23456 = seq__23450;
var G__23457 = chunk__23451;
var G__23458 = count__23452;
var G__23459 = (i__23453 + (1));
seq__23450 = G__23456;
chunk__23451 = G__23457;
count__23452 = G__23458;
i__23453 = G__23459;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__23450);
if(temp__4126__auto__){
var seq__23450__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23450__$1)){
var c__4586__auto__ = cljs.core.chunk_first.call(null,seq__23450__$1);
var G__23460 = cljs.core.chunk_rest.call(null,seq__23450__$1);
var G__23461 = c__4586__auto__;
var G__23462 = cljs.core.count.call(null,c__4586__auto__);
var G__23463 = (0);
seq__23450 = G__23460;
chunk__23451 = G__23461;
count__23452 = G__23462;
i__23453 = G__23463;
continue;
} else {
var map__23455 = cljs.core.first.call(null,seq__23450__$1);
var map__23455__$1 = ((cljs.core.seq_QMARK_.call(null,map__23455))?cljs.core.apply.call(null,cljs.core.hash_map,map__23455):map__23455);
var state = cljs.core.get.call(null,map__23455__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var area_code = cljs.core.get.call(null,map__23455__$1,new cljs.core.Keyword(null,"area-code","area-code",10244836));
cljs.core.swap_BANG_.call(null,censorius.utils.area_code_cache,cljs.core.assoc,area_code,cljs.core.not_EQ_.call(null,"",state));

var G__23464 = cljs.core.next.call(null,seq__23450__$1);
var G__23465 = null;
var G__23466 = (0);
var G__23467 = (0);
seq__23450 = G__23464;
chunk__23451 = G__23465;
count__23452 = G__23466;
i__23453 = G__23467;
continue;
}
} else {
return null;
}
}
break;
}
} else {
censorius.utils.log.call(null,"Error response from area codes API for code ",code,": \u201C",new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(response),"\u201D");

return cljs.core.swap_BANG_.call(null,censorius.utils.area_code_cache,cljs.core.assoc,code,false);
}
});
});
censorius.utils.all_nanpa_area_codes = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.str,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 362, [(920),null,(972),null,(519),null,(716),null,(530),null,(929),null,(586),null,(410),null,(765),null,(443),null,(779),null,(970),null,(249),null,(734),null,(702),null,(949),null,(218),null,(812),null,(774),null,(475),null,(580),null,(769),null,(430),null,(641),null,(240),null,(620),null,(931),null,(989),null,(210),null,(229),null,(213),null,(670),null,(343),null,(473),null,(830),null,(613),null,(224),null,(610),null,(806),null,(571),null,(770),null,(814),null,(859),null,(980),null,(205),null,(510),null,(662),null,(352),null,(416),null,(631),null,(901),null,(713),null,(385),null,(773),null,(360),null,(763),null,(269),null,(206),null,(715),null,(721),null,(862),null,(615),null,(681),null,(225),null,(865),null,(805),null,(217),null,(682),null,(508),null,(415),null,(239),null,(478),null,(878),null,(345),null,(204),null,(470),null,(646),null,(405),null,(940),null,(902),null,(518),null,(260),null,(267),null,(319),null,(534),null,(603),null,(450),null,(504),null,(819),null,(818),null,(505),null,(863),null,(512),null,(502),null,(801),null,(307),null,(758),null,(517),null,(361),null,(264),null,(678),null,(234),null,(856),null,(817),null,(242),null,(832),null,(956),null,(917),null,(251),null,(585),null,(437),null,(516),null,(848),null,(709),null,(540),null,(479),null,(630),null,(916),null,(815),null,(281),null,(402),null,(669),null,(781),null,(740),null,(309),null,(458),null,(952),null,(626),null,(407),null,(847),null,(506),null,(581),null,(331),null,(284),null,(208),null,(305),null,(708),null,(256),null,(657),null,(514),null,(731),null,(619),null,(985),null,(214),null,(804),null,(869),null,(785),null,(442),null,(561),null,(954),null,(607),null,(314),null,(782),null,(226),null,(418),null,(262),null,(304),null,(401),null,(317),null,(810),null,(364),null,(515),null,(412),null,(601),null,(308),null,(908),null,(649),null,(531),null,(419),null,(365),null,(417),null,(979),null,(867),null,(618),null,(909),null,(947),null,(347),null,(501),null,(872),null,(216),null,(829),null,(707),null,(551),null,(971),null,(316),null,(303),null,(671),null,(905),null,(310),null,(313),null,(567),null,(845),null,(219),null,(604),null,(541),null,(351),null,(873),null,(231),null,(413),null,(784),null,(575),null,(250),null,(539),null,(301),null,(424),null,(684),null,(951),null,(573),null,(408),null,(563),null,(850),null,(616),null,(608),null,(737),null,(623),null,(816),null,(334),null,(323),null,(808),null,(248),null,(587),null,(507),null,(724),null,(941),null,(201),null,(904),null,(778),null,(252),null,(978),null,(775),null,(325),null,(828),null,(813),null,(876),null,(228),null,(907),null,(306),null,(276),null,(340),null,(312),null,(606),null,(520),null,(760),null,(720),null,(440),null,(330),null,(803),null,(435),null,(703),null,(973),null,(484),null,(236),null,(727),null,(772),null,(570),null,(757),null,(984),null,(719),null,(786),null,(870),null,(849),null,(910),null,(302),null,(701),null,(787),null,(718),null,(215),null,(704),null,(938),null,(609),null,(202),null,(868),null,(339),null,(431),null,(337),null,(503),null,(857),null,(706),null,(831),null,(918),null,(289),null,(925),null,(712),null,(414),null,(802),null,(860),null,(732),null,(661),null,(913),null,(906),null,(254),null,(404),null,(617),null,(513),null,(705),null,(959),null,(346),null,(650),null,(639),null,(647),null,(559),null,(562),null,(912),null,(664),null,(315),null,(914),null,(480),null,(203),null,(667),null,(807),null,(321),null,(441),null,(268),null,(320),null,(605),null,(636),null,(423),null,(614),null,(762),null,(409),null,(574),null,(747),null,(843),null,(767),null,(928),null,(809),null,(509),null,(207),null,(434),null,(336),null,(937),null,(660),null,(272),null,(903),null,(386),null,(270),null,(717),null,(403),null,(469),null,(253),null,(612),null,(209),null,(425),null,(864),null,(602),null,(318),null,(651),null,(725),null,(406),null,(438),null,(780),null,(939),null,(579),null,(919),null,(714),null,(754),null,(432),null,(212),null,(246),null,(915),null,(936),null,(858),null], null), null)));
censorius.utils.phone_number_QMARK_ = (function phone_number_QMARK_(number){
var validp = (function (){var digits = censorius.utils.just_digits.call(null,number);
var length = cljs.core.count.call(null,digits);
if(((length > (4))) && (cljs.core._EQ_.call(null,"+",cljs.core.first.call(null,number))) && (cljs.core._EQ_.call(null,"353",digits.substring((0),(3))))){
var and__3787__auto__ = cljs.core._EQ_.call(null,"0",cljs.core.nth.call(null,digits,(3)));
if(and__3787__auto__){
var or__3799__auto__ = (cljs.core._EQ_.call(null,length,(12))) && (cljs.core._EQ_.call(null,"1",cljs.core.nth.call(null,digits,(4))));
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (cljs.core._EQ_.call(null,length,(14))) && (cljs.core._EQ_.call(null,"5",cljs.core.nth.call(null,digits,(6)))) && (cljs.core._EQ_.call(null,"8",cljs.core.nth.call(null,digits,(4))));
if(or__3799__auto____$1){
return or__3799__auto____$1;
} else {
var or__3799__auto____$2 = (function (){var and__3787__auto____$1 = cljs.core._EQ_.call(null,length,(13));
if(and__3787__auto____$1){
var or__3799__auto____$2 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["2",null,"5",null,"6",null,"7",null,"8",null], null), null).call(null,cljs.core.nth.call(null,digits,(4)));
if(cljs.core.truth_(or__3799__auto____$2)){
return or__3799__auto____$2;
} else {
return (cljs.core._EQ_.call(null,"4",cljs.core.nth.call(null,digits,(4)))) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["0",null,"8",null], null), null).call(null,cljs.core.nth.call(null,digits,(5)))));
}
} else {
return and__3787__auto____$1;
}
})();
if(cljs.core.truth_(or__3799__auto____$2)){
return or__3799__auto____$2;
} else {
return (cljs.core._EQ_.call(null,length,(14))) && (cljs.core._EQ_.call(null,"4",cljs.core.nth.call(null,digits,(4))));
}
}
}
} else {
return and__3787__auto__;
}
} else {
if(((length > (3))) && (cljs.core._EQ_.call(null,"+",cljs.core.first.call(null,number))) && (cljs.core._EQ_.call(null,"4",cljs.core.nth.call(null,digits,(0)),cljs.core.nth.call(null,digits,(1))))){
var and__3787__auto__ = cljs.core._EQ_.call(null,"0",cljs.core.nth.call(null,digits,(2)));
if(and__3787__auto__){
var and__3787__auto____$1 = (function (){var or__3799__auto__ = (function (){var and__3787__auto____$1 = cljs.core._EQ_.call(null,length,(12));
if(and__3787__auto____$1){
var or__3799__auto__ = cljs.core._EQ_.call(null,"800",digits.substring((3),(6)));
if(or__3799__auto__){
return or__3799__auto__;
} else {
return cljs.core.PersistentHashSet.fromArray([censorius.utils._PLUS_uk_4_PLUS_5_PLUS_], true).call(null,digits.substring((4),(7)));
}
} else {
return and__3787__auto____$1;
}
})();
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return cljs.core._EQ_.call(null,length,(13));
}
})();
if(cljs.core.truth_(and__3787__auto____$1)){
var and__3787__auto____$2 = (function (){var or__3799__auto__ = cljs.core._EQ_.call(null,(13),length);
if(or__3799__auto__){
return or__3799__auto__;
} else {
var and__3787__auto____$2 = cljs.core._EQ_.call(null,(12),length);
if(and__3787__auto____$2){
var and__3787__auto____$3 = cljs.core._EQ_.call(null,"1",cljs.core.nth.call(null,digits,(3)));
if(and__3787__auto____$3){
return censorius.utils._PLUS_uk_4_PLUS_5_PLUS_.call(null,digits.substring((4),(6)));
} else {
return and__3787__auto____$3;
}
} else {
return and__3787__auto____$2;
}
}
})();
if(cljs.core.truth_(and__3787__auto____$2)){
var and__3787__auto____$3 = cljs.core._EQ_.call(null,"0",cljs.core.nth.call(null,digits,(2)));
if(and__3787__auto____$3){
var or__3799__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["1",null,"2",null,"7",null], null), null).call(null,cljs.core.nth.call(null,digits,(3)));
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = (function (){var and__3787__auto____$4 = cljs.core._EQ_.call(null,"3",cljs.core.nth.call(null,digits,(3)));
if(and__3787__auto____$4){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["0",null,"3",null,"4",null,"7",null], null), null).call(null,cljs.core.nth.call(null,digits,(4)));
} else {
return and__3787__auto____$4;
}
})();
if(cljs.core.truth_(or__3799__auto____$1)){
return or__3799__auto____$1;
} else {
var or__3799__auto____$2 = (function (){var and__3787__auto____$4 = cljs.core._EQ_.call(null,"5",cljs.core.nth.call(null,digits,(3)));
if(and__3787__auto____$4){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["5",null,"6",null], null), null).call(null,cljs.core.nth.call(null,digits,(4)));
} else {
return and__3787__auto____$4;
}
})();
if(cljs.core.truth_(or__3799__auto____$2)){
return or__3799__auto____$2;
} else {
var and__3787__auto____$4 = cljs.core._EQ_.call(null,"8",cljs.core.nth.call(null,digits,(3)));
if(and__3787__auto____$4){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["0",null,"2",null,"4",null,"7",null], null), null).call(null,cljs.core.nth.call(null,digits,(4)));
} else {
return and__3787__auto____$4;
}
}
}
}
} else {
return and__3787__auto____$3;
}
} else {
return and__3787__auto____$2;
}
} else {
return and__3787__auto____$1;
}
} else {
return and__3787__auto__;
}
} else {
if((cljs.core._EQ_.call(null,"+",cljs.core.first.call(null,number))) && (cljs.core.not_EQ_.call(null,"1",cljs.core.first.call(null,digits)))){
return null;
} else {
if(cljs.core._EQ_.call(null,"1",cljs.core.first.call(null,digits))){
return phone_number_QMARK_.call(null,digits.substring((1),cljs.core.count.call(null,digits)));
} else {
var or__3799__auto__ = (function (){var and__3787__auto__ = cljs.core.not_EQ_.call(null,"+",cljs.core.first.call(null,number));
if(and__3787__auto__){
var and__3787__auto____$1 = (cljs.core._EQ_.call(null,length,(10))) || ((((15) >= length)) && ((length >= (13))));
if(and__3787__auto____$1){
var and__3787__auto____$2 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["0",null,"1",null], null), null).call(null,cljs.core.first.call(null,digits)));
if(and__3787__auto____$2){
var and__3787__auto____$3 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["0",null,"1",null], null), null).call(null,cljs.core.nth.call(null,digits,(3))));
if(and__3787__auto____$3){
var and__3787__auto____$4 = !(cljs.core._EQ_.call(null,"1",cljs.core.second.call(null,digits),cljs.core.nth.call(null,digits,(2))));
if(and__3787__auto____$4){
var and__3787__auto____$5 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["456",null,"666",null,"999",null,"555",null,"900",null], null), null).call(null,digits.substring((0),(3))));
if(and__3787__auto____$5){
var and__3787__auto____$6 = !(cljs.core._EQ_.call(null,"555",digits.substring((3),(6))));
if(and__3787__auto____$6){
var or__3799__auto__ = (function (){var and__3787__auto____$7 = cljs.core._EQ_.call(null,"8",cljs.core.first.call(null,digits));
if(and__3787__auto____$7){
var and__3787__auto____$8 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["0",null,"5",null,"6",null,"7",null,"8",null], null), null).call(null,cljs.core.second.call(null,digits));
if(cljs.core.truth_(and__3787__auto____$8)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,digits),cljs.core.nth.call(null,digits,(2)));
} else {
return and__3787__auto____$8;
}
} else {
return and__3787__auto____$7;
}
})();
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return cljs.core.contains_QMARK_.call(null,censorius.utils.all_nanpa_area_codes,digits.substring((0),(3)));
}
} else {
return and__3787__auto____$6;
}
} else {
return and__3787__auto____$5;
}
} else {
return and__3787__auto____$4;
}
} else {
return and__3787__auto____$3;
}
} else {
return and__3787__auto____$2;
}
} else {
return and__3787__auto____$1;
}
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return false;
}

}
}
}
}
})();
return validp;
});
censorius.utils.email_QMARK_ = (function email_QMARK_(address){
var or__3799__auto__ = (function (){var and__3787__auto__ = address;
if(cljs.core.truth_(and__3787__auto__)){
var and__3787__auto____$1 = typeof address === 'string';
if(and__3787__auto____$1){
var and__3787__auto____$2 = cljs.core.re_matches.call(null,/^[-!#-'*+\/-9=?A-Z^-~]+(\.[-!#-'*+\/-9=?A-Z^-~]+)*@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+$/,address);
if(cljs.core.truth_(and__3787__auto____$2)){
return (cljs.core.not.call(null,cljs.core.re_matches.call(null,/@example\.com$/,address))) && (true);
} else {
return and__3787__auto____$2;
}
} else {
return and__3787__auto____$1;
}
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return false;
}
});
censorius.utils.a_name_QMARK_ = (function a_name_QMARK_(word){
var or__3799__auto__ = cljs.core._EQ_.call(null,word,"Ng");
if(or__3799__auto__){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["A",null,"E",null,"I",null,"O",null,"U",null,"Y",null], null), null),clojure.string.upper_case.call(null,word));
if(cljs.core.truth_(or__3799__auto____$1)){
return or__3799__auto____$1;
} else {
return true;
}
}
});
censorius.utils.name_like_QMARK_ = (function name_like_QMARK_(s){
var and__3787__auto__ = (cljs.core.count.call(null,s) > (5));
if(and__3787__auto__){
var and__3787__auto____$1 = cljs.core.some.call(null,censorius.utils.a_name_QMARK_,clojure.string.split.call(null,s,/\s+/));
if(cljs.core.truth_(and__3787__auto____$1)){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),clojure.string.trim.call(null,s));
} else {
return and__3787__auto____$1;
}
} else {
return and__3787__auto__;
}
});
censorius.utils.name_case = (function name_case(string){
var trailing_space_QMARK_ = cljs.core._EQ_.call(null," ",cljs.core.last.call(null,string));
var joined = clojure.string.join.call(null," ",cljs.core.map.call(null,((function (trailing_space_QMARK_){
return (function (p1__23468_SHARP_){
if(cljs.core.truth_((function (){var or__3799__auto__ = cljs.core._EQ_.call(null,p1__23468_SHARP_,clojure.string.lower_case.call(null,p1__23468_SHARP_));
if(or__3799__auto__){
return or__3799__auto__;
} else {
var and__3787__auto__ = cljs.core._EQ_.call(null,p1__23468_SHARP_,clojure.string.upper_case.call(null,p1__23468_SHARP_));
if(and__3787__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["A",null,"E",null,"I",null,"O",null,"U",null,"Y",null], null), null),p1__23468_SHARP_);
} else {
return and__3787__auto__;
}
}
})())){
return clojure.string.capitalize.call(null,p1__23468_SHARP_);
} else {
return p1__23468_SHARP_;
}
});})(trailing_space_QMARK_))
,clojure.string.split.call(null,string,/\s+/)));
if(trailing_space_QMARK_){
return [cljs.core.str(joined),cljs.core.str(" ")].join('');
} else {
return joined;
}
});
censorius.utils._PLUS_numbers_PLUS_ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve"], null);
censorius.utils.counting = (function() {
var counting = null;
var counting__2 = (function (number,singular){
return counting.call(null,number,singular,[cljs.core.str(((cljs.core._EQ_.call(null,"y",cljs.core.last.call(null,singular)))?[cljs.core.str(cljs.core.subs.call(null,singular,(0),(cljs.core.count.call(null,singular) - (1)))),cljs.core.str("ie")].join(''):singular)),cljs.core.str("s")].join(''));
});
var counting__3 = (function (number,singular,plural){
if(((0) > number)){
return [cljs.core.str("Negative "),cljs.core.str(counting.call(null,(- number),singular,plural))].join('');
} else {
if((number === (0))){
return [cljs.core.str("No "),cljs.core.str(plural)].join('');
} else {
if(cljs.core._EQ_.call(null,(1),number)){
return [cljs.core.str("One "),cljs.core.str(singular)].join('');
} else {
if((cljs.core.integer_QMARK_.call(null,number)) && (((13) > number))){
return [cljs.core.str(cljs.core.nth.call(null,censorius.utils._PLUS_numbers_PLUS_,number)),cljs.core.str(" "),cljs.core.str(plural)].join('');
} else {
return [cljs.core.str(number),cljs.core.str(" "),cljs.core.str(plural)].join('');

}
}
}
}
});
counting = function(number,singular,plural){
switch(arguments.length){
case 2:
return counting__2.call(this,number,singular);
case 3:
return counting__3.call(this,number,singular,plural);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
counting.cljs$core$IFn$_invoke$arity$2 = counting__2;
counting.cljs$core$IFn$_invoke$arity$3 = counting__3;
return counting;
})()
;
if(cljs.core._EQ_.call(null,censorius.utils.counting.call(null,(4),"dog"),"Four dogs")){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"counting","counting",-503196071,null),(4),"dog"),"Four dogs")))].join('')));
}
if(cljs.core._EQ_.call(null,censorius.utils.counting.call(null,(0),"pony"),"No ponies")){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"counting","counting",-503196071,null),(0),"pony"),"No ponies")))].join('')));
}
censorius.utils.biz_day_QMARK_ = (function biz_day_QMARK_(date){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(1),null,(4),null,(3),null,(2),null,(5),null], null), null).call(null,cljs.core.apply.call(null,date.getWeekday(),date));
});
censorius.utils.make_time_friendly = (function make_time_friendly(time){

return "Some time";
});
censorius.utils.next_biz_day = (function next_biz_day(date){
if(cljs.core.not.call(null,censorius.utils.biz_day_QMARK_.call(null,date))){
return next_biz_day.call(null,date.setDate(((1) + date.getDate())));
} else {
return null;
}
});
censorius.utils.parse_time_string = (function parse_time_string(time_string){
var and__3787__auto__ = time_string;
if(cljs.core.truth_(and__3787__auto__)){
var and__3787__auto____$1 = typeof time_string === 'string';
if(and__3787__auto____$1){
var vec__23472 = cljs.core.re_matches.call(null,/([01]?\d)(?:\:(\d\d))?(?:\:(\d\d))?(?:\.(\d\d\d))? *([aApP][mM]?)?/,time_string);
var _ = cljs.core.nth.call(null,vec__23472,(0),null);
var hours = cljs.core.nth.call(null,vec__23472,(1),null);
var minutes = cljs.core.nth.call(null,vec__23472,(2),null);
var seconds = cljs.core.nth.call(null,vec__23472,(3),null);
var msec = cljs.core.nth.call(null,vec__23472,(4),null);
var am_pm = cljs.core.nth.call(null,vec__23472,(5),null);
var pm_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["P",null,"p",null], null), null).call(null,cljs.core.first.call(null,am_pm));
if((cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,am_pm))) || (cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,minutes)))){
censorius.utils.log.call(null,"Time-string parts = ",hours,":",minutes,":",seconds,".",msec," ",am_pm);

return (new Date((2000),(1),(1),(hours + (cljs.core.truth_(pm_QMARK_)?(12):(0))),(function (){var or__3799__auto__ = minutes;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return (0);
}
})(),(function (){var or__3799__auto__ = seconds;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return (0);
}
})(),(function (){var or__3799__auto__ = msec;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
} else {
return and__3787__auto____$1;
}
} else {
return and__3787__auto__;
}
});
censorius.utils.format_time_of_day = (function format_time_of_day(time_string){
var canonical = censorius.utils.parse_time_string.call(null,time_string);
if(cljs.core.truth_((function (){var and__3787__auto__ = canonical;
if(cljs.core.truth_(and__3787__auto__)){
return (canonical.getTime() > (0));
} else {
return and__3787__auto__;
}
})())){
censorius.utils.log.call(null,"time-string ",time_string," parses to ",canonical);

var hh = canonical.getHours();
var modulo = cljs.core.mod.call(null,hh,(12));
var twelve_hours = (((modulo === (0)))?(12):modulo);
var pm_QMARK_ = (hh > (11));
censorius.utils.log.call(null,"hours of that are = ",hh,"; which is ",twelve_hours,((pm_QMARK_)?"PM":"AM"));

return [cljs.core.str(goog.string.format("%d:%02d",twelve_hours,canonical.getMinutes())),cljs.core.str((function (){var sec = canonical.getSeconds();
var ms = canonical.getMilliseconds();
if(((sec === (0))) && ((ms === (0)))){
return "";
} else {
if((ms === (0))){
return goog.string.format(":%02d",sec);
} else {
return goog.string.format(":%02d.03d",sec,ms);

}
}
})()),cljs.core.str(" "),cljs.core.str(((pm_QMARK_)?"PM":"AM"))].join('');
} else {
censorius.utils.log.call(null,"Can't parse time-string: ",time_string,"; got ",canonical);

return time_string;
}
});
censorius.utils.time_of_day_QMARK_ = (function time_of_day_QMARK_(time_string){
var canonical = censorius.utils.parse_time_string.call(null,time_string);
var and__3787__auto__ = canonical;
if(cljs.core.truth_(and__3787__auto__)){
return (canonical.getTime() > (0));
} else {
return and__3787__auto__;
}
});
censorius.utils.format_zip_code = (function format_zip_code(code){
var digits = censorius.utils.just_digits.call(null,code);
if(cljs.core._EQ_.call(null,(5),cljs.core.count.call(null,digits))){
return digits;
} else {
if(cljs.core._EQ_.call(null,(9),cljs.core.count.call(null,digits))){
return [cljs.core.str(digits.substring((0),(5))),cljs.core.str("-"),cljs.core.str(digits.substring((5),(10)))].join('');
} else {
return code;

}
}
});
censorius.utils._PLUS_zip_states_PLUS_ = cljs.core.PersistentHashMap.fromArrays(["273","281","191","279","984","784","388","061","977","641","445","180","089","739","735","780","499","219","733","728","108","392","965","945","955","765","275","334","365","581","042","827","258","978","528","253","188","083","582","831","458","097","370","704","665","303","381","277","158","422","941","432","438","048","671","612","402","450","545","041","466","382","452","572","498","321","488","201","820","549","359","380","681","467","813","567","719","439","265","057","910","840","722","650","141","227","767","415","384","649","647","430","584","691","263","139","413","530","017","157","185","266","616","408","932","600","305","411","865","175","066","508","300","027","155","807","745","604","781","049","688","883","815","290","368","939","522","471","843","202","527","038","364","404","809","315","084","657","857","914","195","304","972","793","707","930","082","234","674","118","913","805","475","391","193","479","093","087","423","520","051","295","655","105","058","469","454","090","224","504","743","923","369","095","911","763","196","063","346","282","875","237","448","789","532","975","040","613","396","634","207","302","752","135","238","270","011","701","995","885","394","015","123","760","776","543","599","414","336","557","012","836","355","101","462","979","662","993","231","826","116","441","958","689","395","811","251","480","035","064","996","737","169","630","607","232","736","927","472","274","020","644","556","884","299","943","957","949","485","179","091","037","389","385","156","547","525","871","588","561","065","043","587","426","492","443","329","985","387","585","603","953","159","221","661","442","425","592","908","700","055","916","328","942","925","162","192","332","766","033","490","738","068","759","358","113","405","318","484","338","705","586","684","167","026","714","259","476","877","197","521","894","598","107","712","437","656","830","782","249","605","797","658","268","401","354","716","998","374","456","503","493","226","021","802","296","362","890","798","512","449","228","727","070","594","777","740","903","032","814","553","326","115","244","954","769","297","687","988","618","379","609","837","225","111","639","350","383","294","019","747","203","172","278","573","544","489","631","754","311","176","610","850","741","028","645","119","706","247","420","562","898","626","212","145","356","882","036","128","199","008","686","210","186","901","938","924","703","983","056","261","856","096","583","152","050","554","341","181","629","357","860","788","284","876","636","825","637","768","400","904","044","184","100","973","668","363","761","045","497","024","969","106","482","531","757","833","386","654","173","246","921","074","678","680","190","846","112","852","477","842","075","025","222","459","878","250","148","790","289","787","666","511","483","267","873","307","844","283","999","496","721","455","919","560","208","936","564","648","720","652","440","137","799","312","753","601","874","276","783","086","590","140","623","748","891","597","960","136","718","337","433","726","948","347","548","166","121","006","218","591","851","542","968","335","989","685","331","352","651","194","633","992","168","376","534","360","399","764","241","571","293","474","751","772","154","725","540","524","823","257","209","239","635","240","577","918","928","870","110","915","537","606","092","007","059","080","710","970","653","835","463","558","034","580","559","308","271","174","053","575","039","171","507","069","863","130","200","976","461","431","023","183","313","481","619","470","982","223","627","502","072","272","576","730","810","966","546","640","510","538","570","541","779","320","859","325","773","880","013","693","758","205","052","306","812","287","864","122","229","071","486","596","316","149","120","421","235","418","005","550","206","410","895","660","216","144","416","134","030","990","146","217","505","677","935","177","434","473","565","750","744","094","664","344","832","125","902","729","403","398","791","104","535","602","593","828","085","881","047","669","324","667","926","551","260","390","102","377","165","153","079","509","526","734","301","317","617","409","676","444","855","801","808","406","254","595","555","563","986","062","142","804","211","340","967","755","280","841","614","127","731","646","845","078","366","286","109","124","342","723","906","853","792","847","774","838","917","262","252","947","971","076","500","460","756","937","775","778","077","138","319","054","256","009","611","803","298","994","806","114","795","014","963","453","322","067","746","367","690","457","198","424","220","339","427","288","022","946","495","622","412","133","147","491","615","151","708","436","821","233","974","625","182","264","962","829","446","189","711","016","126","373","940","255","539","824","566","816","236","310","327","204","796","514","506","081","478","920","934","143","333","178","749","098","515","375","879","670","692","905","170","624","046","516","786","713","088","897","245","407","131","922","103","060","248","285","494","762","378","900","951","291","933","961","673","981","513","330","679","073","683","952","161","230","242","129","187","214","018","717","465","164","980","361","163","349","010","675","323","447","215","397","907","785","393","620","464","468","959","834","417","451","822","351","501","487","770","608","724","672","523","889","956","292","931","435","243","800","309","160","628","912","794","031","150","944","117","372","371","029","638","574","950","893","964","991","997","132","314"],["NC","NC","PA","NC","WA","TX","TN","CT","OR","MO","OH","PA","NJ","TX","OK","TX","MI","MD","TX","AR","NY","MS","AP","CA","CA","TX","NC","FL","AL","ND","ME","WY","WV","OR","IA","WV","PA","NJ","ND","WY","OH","AE","TN","LA","MO","GA","TN","NC","PA","TN","CA","OH","OH","ME","KS","IL","KY","OH","WI","ME","IN","TN","OH","SD","MI","FL","MI","VA","WY","WI","AL","TN","NE","IN","NM","ND","AR","PA","PA","VT","CA","UT","AR","MO","NY","VA","TX","WV","TN","MO","MO","OH","ND","NE","WV","NY","KY","WI","MA","PA","PA","WV","IL","TN","CA","IL","GA","WV","NM","PA","NY","IA","GA","RI","PA","CO","OK","IL","TX","ME","NE","TX","CO","SC","AL","CA","IA","KY","UT","DC","IL","NH","AL","KY","CO","FL","NJ","MO","AZ","CA","PA","GA","OR","TX","LA","CA","NJ","VA","KS","NY","CA","CO","IN","MS","DE","IN","AE","NJ","IN","IA","VT","SC","MO","NY","VT","IN","OH","AE","VA","IA","OK","CA","MS","AE","CA","TX","PA","CT","FL","NC","NM","VA","OH","TX","WI","OR","ME","IL","MS","MO","MD","GA","TX","NY","VA","NC","CT","LA","AK","TX","MS","MA","NY","TX","TX","WI","MT","KY","FL","MN","CT","ID","AL","NY","IN","ID",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KS","MO"], null),"WA","VA","WY","NY","OH","CA","NE","MS","CO","WV","MI","VT","CT","AK","OK","PA","MO","IL","VA","OK","CA","IN","NC","MA","MO","MN","NM","SC","CA","CA","CA","MI","PA","AE","VT","MS","TN","PA","WI","IA","NM","ND","MN","CT","ME","ND","TN","MI","OH","FL","WA","MS","ND","IL","CA","PA","VA","MO","OH","TN","MT","CA","LA","MA","CA","FL","CA","CA","PA","PA","FL","TX","NH","MI","OK","NY","TX","AL","NY","KY","GA","MI","FL","LA","ND","NE","PA","RI","LA","WV","IN","NM","DE","IA","NV","MT","NY","LA","OH","MO","WY","TX","WV","IL","TX","MO","VA","KY","AL","AR","AK","TN","OH","IA","MI","VA","MA","CO","SC","AL","NV","TX","SD","OH","VA","AR","NJ","MT","TX","OK","CA","NH","CO","MN","FL","NY","VA","CA","TX","NC","NE","WA","IL","TN","IL","ID","VA","NY","MO","AL","TN","SC","MA","OK","DC","PA","NC","SD","WI","MI","MO","TX","GA","PA","IL","AZ","OK","RI","MO","NY","LA","WV","KY","MN","NV","IL","MD","NY","AL","TX","VT","NY","DE","PR","NE","MD","PA","CA","CA","CA","LA","WA","VT","WV","AZ","AE","ND","PA","VT","MN","FL","PA","MO","AL","AZ","TX","NC","NM","MO","WY","MO","TX","KY","CA","ME","PA","NY","OR","MO","AL","TX","ME","MI","MA","GU","NY","MI","WI","TX","ID","TN","MO","PA","WV","CA","NJ","KS","NE","PA","UT","NY","AZ","IN","UT","NJ","RI","VA","OH","NM","WV","NY","TX","NC","TX","MO","SD","MI","MD","NM","TN","UT","NC","AK","MI","AR","OH","CA","MN","MD","CA","MN","MO","AR","MO","OH","NY","TX","GA","TX","IL","NM","NC","TX","NJ","MT","NY","IL","OK","NV","MT","CA","NY","LA","FL","OH","AR","CA","FL","WI","PA","NY","PR","MD","MT","AZ","WI","HI","FL","WA","NE","FL","AL","MO","PA","MO","WA","PA","TN","WI","AL","GA","TX","VA","SD","SC","IN","TX","TX","PA","AR","MN","IA","WY","WV","MD","VA","MO","VA","SD","CA","CA","NM","NY","CA","WI","IL","AE","PR","VT","NJ","LA","OR","MO","WA","IN","MN","NH","ND","MN","GA","NC","PA","VT","SD","ME","PA","IA","NY","AZ","NY","DC","OR","IN","OH","MA","PA","FL","MI","IL","OH","WA","VA","IL","IA","NJ","NC","ND","OK","CO","AP","WI","MO","SD","WI","SD","WI","TX","FL","AZ","FL","TX","TX","MA","NE","TX","DC","VT","GA","CO","NC","NV","NY","VA","NJ","MI","MT","FL","NY","NY","TN","VA","TN","NY","MN","MD","OH","NV","MO","MD","NY","WV","NY","NH","WA","NY","MD","IA","NE","CA","PA","OH","IN","ND","TX","OK","AE","MO","FL","ID","NY","CA","AR","KY","FL","TX","NY","WI","IL","MT","WY","NJ","TX","ME","KS","FL","MO","CA","MN","PA","MS","NY","TN","PA","PA","NJ","IA","IL","OK","GA","FL","IL","TN","KS","OH","AZ","CO","CO","KY","MD","MT","MN","MN","OR","CT","NY","CO","MD","AA","HI","LA","NC","UT","IL","NY","OK","MO","UT","NJ","AL","NC","NY","NY","FL","TN","CA","AZ","TX","UT","TX","WA","CA","WV","WV","CA","OR","NJ","IA","IN","LA","CA","TX","TX","NJ","NY","GA","VT","WV","PR","IL","CO","GA","WA","CO","NY","TX","MA","AP","OH","FL","CT","OK","AL","NE","OH","DE","IN","VA","FL","KY","NC","MA","CA","MI","MO","WV","NY","NY","MI","IL","PA","LA","OH","WY","VA","OR","IL","PA","WV","AP","WY","OH","PA","LA","MA","NY","TN","CA","WV","WI","WY","MN","CO","VA","GA","FL","DC","TX","IA","IA","NJ","IN","CA","CA","NY","FL","PA","OK","AE","NE","TN","NM","KS","NE","CA","PA","IL","ME","NE","TX","LA","NJ","NV","VA","TN","NY","CA","NY","CT","WV","NC","MI","TX","TN","CA","CA","SC","CA","NV","KS","WA","SD","FL","TX","NJ","NE","CA","PA","VA","TN","NY","PA","MD","MA","AR","IN","PA","WA","AL","PA","FL","CT","KS","FL","OH","MD","MS","CA","TX","MS","MO","IN","IN","CA","ID","TN","OH","WY","AL","IA","MI","TX","IL","TN","KS","IA","NV","CA","SC","CA","OH","VA","CO","GA","PA","MO","CA","TX","NH","PA","CA","NY","TN","TN","RI","MO","SD","CA","NV","AP","WA","AK","NY","FL"]);
censorius.utils.zip_3_to_state = (function zip_3_to_state(zip_3){
return cljs.core.get.call(null,censorius.utils._PLUS_zip_states_PLUS_,zip_3);
});
censorius.utils.zip_code_QMARK_ = (function zip_code_QMARK_(code){
var and__3787__auto__ = (cljs.core._EQ_.call(null,(5),cljs.core.count.call(null,code),cljs.core.count.call(null,censorius.utils.just_digits.call(null,code)))) || ((cljs.core._EQ_.call(null,(10),cljs.core.count.call(null,code))) && (cljs.core._EQ_.call(null,(9),cljs.core.count.call(null,censorius.utils.just_digits.call(null,code)))) && (cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,code,(5))))) || (cljs.core._EQ_.call(null,(9),cljs.core.count.call(null,code),cljs.core.count.call(null,censorius.utils.just_digits.call(null,code))));
if(and__3787__auto__){
return cljs.core.get.call(null,censorius.utils._PLUS_zip_states_PLUS_,code.substring((0),(3)));
} else {
return and__3787__auto__;
}
});
censorius.utils.blank_QMARK_ = (function blank_QMARK_(s){
var and__3787__auto__ = s;
if(cljs.core.truth_(and__3787__auto__)){
return (typeof s === 'string') && ((cljs.core.count.call(null,s) > (0)));
} else {
return and__3787__auto__;
}
});
censorius.utils.to_integer = (function to_integer(n){
var or__3799__auto__ = (function (){var and__3787__auto__ = cljs.core.integer_QMARK_.call(null,n);
if(and__3787__auto__){
return n;
} else {
return and__3787__auto__;
}
})();
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
var and__3787__auto__ = typeof n === 'string';
if(and__3787__auto__){
return parseInt(n);
} else {
return and__3787__auto__;
}
}
});
censorius.utils.reasonable_birth_year_QMARK_ = (function reasonable_birth_year_QMARK_(n){
return (((1900) < n)) && ((n < (new Date()).getYear()));
});
censorius.utils.positions = (function positions(pred,coll){
return cljs.core.keep_indexed.call(null,(function (idx,x){
if(cljs.core.truth_(pred.call(null,x))){
return idx;
} else {
return null;
}
}),coll);
});
censorius.utils.format_money = (function format_money(amount){
if(typeof amount === 'string'){
var amount__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u00A2",null,"c",null], null), null).call(null,cljs.core.last.call(null,amount.trim())))?(censorius.utils.just_decimal.call(null,amount) / 100.0):censorius.utils.just_decimal.call(null,amount));
return format_money.call(null,parseFloat(amount__$1));
} else {
if(cljs.core.integer_QMARK_.call(null,amount)){
return goog.string.format("$ %d.",amount);
} else {
if(((1) > amount)){
return goog.string.format(" %d \u00A2",((100) * amount));
} else {
if((amount === (0))){
return null;
} else {
return goog.string.format("$ %.02f",amount);

}
}
}
}
});
censorius.utils.money_QMARK_ = (function money_QMARK_(string){
var or__3799__auto__ = parseFloat(censorius.utils.just_decimal.call(null,string));
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
var vec__23474 = cljs.core.re_matches.call(null,/\$?\s*(\d*\.\d*)/,string);
var _ = cljs.core.nth.call(null,vec__23474,(0),null);
var amount = cljs.core.nth.call(null,vec__23474,(1),null);
return money_QMARK_.call(null,amount);
}
});
censorius.utils.modality = (function modality(function$,element){
var docs_23475 = document.getElementsByTagName("html");
var doc_23476 = (function (){var or__3799__auto__ = docs_23475.item((0));
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return censorius.utils.log.call(null,"boo");
}
})();
doc_23476.onClick = ((function (docs_23475,doc_23476){
return (function (event){
if(cljs.core.truth_(function$)){
return cljs.core.apply.call(null,function$,event);
} else {
return null;
}
});})(docs_23475,doc_23476))
;

element.onClick = ((function (docs_23475,doc_23476){
return (function (event){
doc_23476.onClick = null;

return event.stopPropagation();
});})(docs_23475,doc_23476))
;

return element;
});
censorius.utils.keyword__GT_string = (function keyword__GT_string(keyword){
if(typeof keyword === 'string'){
return keyword;
} else {
if((keyword instanceof cljs.core.Keyword)){
var s = [cljs.core.str(keyword)].join('');
return s.substring((1),cljs.core.count.call(null,s));
} else {
return [cljs.core.str(keyword)].join('');

}
}
});
censorius.utils.hidden = (function hidden(is_hidden){
if(is_hidden){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
censorius.utils.alert_hint = (function alert_hint(event){
return alert(event.target.getAttribute("title"));
});
censorius.utils.abbr = (function() {
var abbr = null;
var abbr__2 = (function (short$,long$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),long$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert([cljs.core.str(short$),cljs.core.str(": "),cljs.core.str(long$)].join(''));
})], null),short$,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ellide hint"], null)," ",long$], null)], null);
});
var abbr__3 = (function (short$,long$,longer){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),long$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert([cljs.core.str(short$),cljs.core.str(" ("),cljs.core.str(long$),cljs.core.str("): "),cljs.core.str(longer)].join(''));
})], null),short$,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ellide hint"], null)," ",long$], null)], null);
});
abbr = function(short$,long$,longer){
switch(arguments.length){
case 2:
return abbr__2.call(this,short$,long$);
case 3:
return abbr__3.call(this,short$,long$,longer);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
abbr.cljs$core$IFn$_invoke$arity$2 = abbr__2;
abbr.cljs$core$IFn$_invoke$arity$3 = abbr__3;
return abbr;
})()
;

//# sourceMappingURL=utils.js.map