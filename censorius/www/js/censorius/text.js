// Compiled by ClojureScript 0.0-2665 {}
goog.provide('censorius.text');
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
censorius.text._PLUS_clear_PLUS_ = (12);
censorius.text._PLUS_return_PLUS_ = (13);
censorius.text._PLUS_escape_PLUS_ = (27);
censorius.text.confirm_change = (function confirm_change(label,text){
return window.confirm([cljs.core.str("\u201C"),cljs.core.str(text),cljs.core.str("\u201D does not appear valid for \u201C"),cljs.core.str(label),cljs.core.str("\u201D.\nDo you want to submit it?\n\nClick OK to confirm this value, or Cancel to edit.")].join(''));
});
censorius.text.do_validate = (function do_validate(props,new_text){
var validate = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props));
var could_validate_QMARK_ = (function (){var and__3787__auto__ = validate;
if(cljs.core.truth_(and__3787__auto__)){
return (typeof new_text === 'string') && (cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,new_text.trim())));
} else {
return and__3787__auto__;
}
})();
var validated_QMARK_ = (function (){var and__3787__auto__ = could_validate_QMARK_;
if(cljs.core.truth_(and__3787__auto__)){
return cljs.core.apply.call(null,validate,cljs.core._conj.call(null,cljs.core.List.EMPTY,new_text));
} else {
return and__3787__auto__;
}
})();
cljs.core.swap_BANG_.call(null,props,cljs.core.assoc,new cljs.core.Keyword(null,"validated?","validated?",923640924),((cljs.core.not.call(null,could_validate_QMARK_))?null:(cljs.core.truth_(validated_QMARK_)?true:false
)));

var and__3787__auto__ = (function (){var or__3799__auto__ = validated_QMARK_;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return cljs.core.not.call(null,could_validate_QMARK_);
}
})();
if(cljs.core.truth_(and__3787__auto__)){
return true;
} else {
return and__3787__auto__;
}
});
censorius.text.validate_submission = (function validate_submission(props,text,can_prompt_QMARK_){
var valid_1_QMARK_ = censorius.text.do_validate.call(null,props,text);
var valid_2_QMARK_ = (function (){var or__3799__auto__ = valid_1_QMARK_;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
var and__3787__auto__ = can_prompt_QMARK_;
if(cljs.core.truth_(and__3787__auto__)){
if(cljs.core.truth_(censorius.text.confirm_change.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(props),text))){
censorius.utils.log.call(null,"User confirms, store invalid value.");

cljs.core.swap_BANG_.call(null,props,cljs.core.assoc,new cljs.core.Keyword(null,"validated?","validated?",923640924),null);

return true;
} else {
return null;
}
} else {
return and__3787__auto__;
}
}
})();
var or__3799__auto__ = valid_1_QMARK_;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return valid_2_QMARK_;
}
});
censorius.text.submit = (function() {
var submit = null;
var submit__2 = (function (event,props){
return submit.call(null,event,props,false);
});
var submit__3 = (function (event,props,suppress_prompt_QMARK_){
var text_10381 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props));
var keys_10382 = new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props));
var old_text_10383 = cljs.core.get.call(null,cljs.core.deref.call(null,props),keys_10382);
if(cljs.core._EQ_.call(null,old_text_10383,text_10381)){
censorius.utils.log.call(null,"no change to ",keys_10382);
} else {
if(cljs.core.not.call(null,censorius.text.validate_submission.call(null,props,text_10381,cljs.core.not.call(null,suppress_prompt_QMARK_)))){
censorius.utils.log.call(null,"no change to ",keys_10382,": validation failed");
} else {
var formatter_10384 = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props));
var final_text_10385 = (cljs.core.truth_(formatter_10384)?cljs.core.apply.call(null,formatter_10384,cljs.core._conj.call(null,cljs.core.List.EMPTY,text_10381)):text_10381);
if(cljs.core.not_EQ_.call(null,text_10381,final_text_10385)){
cljs.core.swap_BANG_.call(null,props,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),final_text_10385);
} else {
}

censorius.utils.log.call(null,keys_10382," \u2190 \u201C",final_text_10385,"\u201D");

cljs.core.swap_BANG_.call(null,props,cljs.core.assoc_in,keys_10382,final_text_10385,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orig-text","orig-text",650637509)], null),final_text_10385);

}
}

return false;
});
submit = function(event,props,suppress_prompt_QMARK_){
switch(arguments.length){
case 2:
return submit__2.call(this,event,props);
case 3:
return submit__3.call(this,event,props,suppress_prompt_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
submit.cljs$core$IFn$_invoke$arity$2 = submit__2;
submit.cljs$core$IFn$_invoke$arity$3 = submit__3;
return submit;
})()
;
censorius.text.mkfun_validity_submit = (function mkfun_validity_submit(props){
return (function (event){
if(cljs.core.truth_(event.target.className.contains("valid-false"))){
censorius.utils.log.call(null,"Field doesn't seem valid. Verifying user intent.",event);

return censorius.text.submit.call(null,event,props);
} else {
return null;
}
});
});
censorius.text.do_change = (function do_change(props,new_text){
if(typeof new_text === 'string'){
censorius.text.do_validate.call(null,props,new_text);

return cljs.core.swap_BANG_.call(null,props,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),new_text);
} else {
return null;
}
});
censorius.text.key_down = (function key_down(event,props,want_return_QMARK_){
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([censorius.text._PLUS_clear_PLUS_,censorius.text._PLUS_escape_PLUS_], true).call(null,event.keyCode))){
return censorius.text.do_change.call(null,props,new cljs.core.Keyword(null,"orig-text","orig-text",650637509).cljs$core$IFn$_invoke$arity$1(props));
} else {
if(cljs.core.truth_((function (){var and__3787__auto__ = want_return_QMARK_;
if(cljs.core.truth_(and__3787__auto__)){
return (censorius.text._PLUS_return_PLUS_ === event.keyCode);
} else {
return and__3787__auto__;
}
})())){
return censorius.text.submit.call(null,event,props);
} else {
return null;

}
}
});
censorius.text.text_input = (function text_input(p__10395){
var map__10401 = p__10395;
var map__10401__$1 = ((cljs.core.seq_QMARK_.call(null,map__10401))?cljs.core.apply.call(null,cljs.core.hash_map,map__10401):map__10401);
var props = cljs.core.get.call(null,map__10401__$1,new cljs.core.Keyword(null,"props","props",453281727));
var format = cljs.core.get.call(null,map__10401__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var placeholder = cljs.core.get.call(null,map__10401__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var validate = cljs.core.get.call(null,map__10401__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var ellipsis = cljs.core.get.call(null,map__10401__$1,new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738));
var size = cljs.core.get.call(null,map__10401__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var input_type = cljs.core.get.call(null,map__10401__$1,new cljs.core.Keyword(null,"input-type","input-type",856973840));
var rows = cljs.core.get.call(null,map__10401__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var keys = cljs.core.get.call(null,map__10401__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var label = cljs.core.get.call(null,map__10401__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var name = censorius.utils.gensymreally.call(null,label);
return ((function (name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (p__10402){
var map__10403 = p__10402;
var map__10403__$1 = ((cljs.core.seq_QMARK_.call(null,map__10403))?cljs.core.apply.call(null,cljs.core.hash_map,map__10403):map__10403);
var props__$1 = map__10403__$1;
var validated_QMARK_ = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"validated?","validated?",923640924));
var validate__$1 = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var keys__$1 = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var input_type__$1 = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"input-type","input-type",856973840));
var rows__$1 = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var placeholder__$1 = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var text = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var label__$1 = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var vec__10404 = (function (){var G__10405 = validated_QMARK_;
if(cljs.core._EQ_.call(null,null,G__10405)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unknown"," "], null);
} else {
if(cljs.core._EQ_.call(null,true,G__10405)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,"\u26E4"], null);
} else {
if(cljs.core._EQ_.call(null,false,G__10405)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,"\u2717"], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(validated_QMARK_)].join('')));

}
}
}
})();
var validity = cljs.core.nth.call(null,vec__10404,(0),null);
var validity_sigil = cljs.core.nth.call(null,vec__10404,(1),null);
if(cljs.core._EQ_.call(null,(0),rows__$1)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[placeholder__$1,name,text,((function (vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (p1__10386_SHARP_){
return censorius.text.submit.call(null,p1__10386_SHARP_,props__$1,true);
});})(vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
,(function (){var or__3799__auto__ = input_type__$1;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return "text";
}
})(),size,label__$1,name,[cljs.core.str("valid-"),cljs.core.str(validity),cljs.core.str(" size-"),cljs.core.str(size)].join(''),((function (vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (p1__10387_SHARP_){
return censorius.text.do_change.call(null,props__$1,p1__10387_SHARP_.target.value);
});})(vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
,((function (vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (p1__10388_SHARP_){
return censorius.text.key_down.call(null,p1__10388_SHARP_,props__$1,true);
});})(vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
])], null),(cljs.core.truth_(ellipsis)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (){
return cljs.core.apply.call(null,ellipsis,keys__$1);
});})(vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
], null),"\u2026"], null):null),(cljs.core.truth_(validate__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("marker valid-"),cljs.core.str(validity)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),censorius.text.mkfun_validity_submit.call(null,props__$1)], null),validity_sigil], null):null)], null);
} else {
if((cljs.core.not.call(null,rows__$1)) || (cljs.core._EQ_.call(null,(1),rows__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"two-column"], null),[cljs.core.str(label__$1),cljs.core.str(":")].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[placeholder__$1,name,text,((function (vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (p1__10389_SHARP_){
return censorius.text.submit.call(null,p1__10389_SHARP_,props__$1,true);
});})(vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
,(function (){var or__3799__auto__ = input_type__$1;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return "text";
}
})(),(cljs.core.truth_(placeholder__$1)?[cljs.core.str(label__$1),cljs.core.str(" ("),cljs.core.str(placeholder__$1),cljs.core.str(")")].join(''):label__$1),name,[cljs.core.str("valid-"),cljs.core.str(validity),cljs.core.str(" size-"),cljs.core.str(size)].join(''),((function (vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (p1__10390_SHARP_){
return censorius.text.do_change.call(null,props__$1,p1__10390_SHARP_.target.value);
});})(vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
,((function (vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (p1__10391_SHARP_){
return censorius.text.key_down.call(null,p1__10391_SHARP_,props__$1,true);
});})(vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
])], null),(cljs.core.truth_(ellipsis)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (){
return cljs.core.apply.call(null,ellipsis,props__$1);
});})(vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
], null),"\u2026"], null):null),(cljs.core.truth_(validate__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("marker "),cljs.core.str([cljs.core.str("valid-"),cljs.core.str(validity)].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),censorius.text.mkfun_validity_submit.call(null,props__$1)], null),validity_sigil], null):null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),[cljs.core.str("textarea-"),cljs.core.str(name)].join('')], null),label__$1], null),(cljs.core.truth_(ellipsis)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (){
return cljs.core.apply.call(null,ellipsis,keys__$1);
});})(vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
], null),"\u2026"], null):null),(cljs.core.truth_(validate__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("marker valid-"),cljs.core.str(validity)].join('')], null),validity_sigil], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[placeholder__$1,name,text,((function (vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (p1__10392_SHARP_){
return censorius.text.submit.call(null,p1__10392_SHARP_,props__$1,true);
});})(vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
,[cljs.core.str(label__$1),cljs.core.str((cljs.core.truth_(placeholder__$1)?[cljs.core.str(" ("),cljs.core.str(placeholder__$1),cljs.core.str(")")].join(''):""))].join(''),rows__$1,name,validity,((function (vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (p1__10393_SHARP_){
return censorius.text.do_change.call(null,props__$1,p1__10393_SHARP_.target.value);
});})(vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
,((function (vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label){
return (function (p1__10394_SHARP_){
return censorius.text.key_down.call(null,p1__10394_SHARP_,props__$1,false);
});})(vec__10404,validity,validity_sigil,map__10403,map__10403__$1,props__$1,validated_QMARK_,validate__$1,keys__$1,input_type__$1,rows__$1,placeholder__$1,text,label__$1,name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
])], null)], null);

}
}
});
;})(name,map__10401,map__10401__$1,props,format,placeholder,validate,ellipsis,size,input_type,rows,keys,label))
});
