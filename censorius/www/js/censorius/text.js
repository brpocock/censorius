// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('censorius.text')) {
goog.provide('censorius.text');
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
censorius.text._PLUS_clear_PLUS_ = (12);
censorius.text._PLUS_return_PLUS_ = (13);
censorius.text._PLUS_escape_PLUS_ = (27);
censorius.text.confirm_change = (function confirm_change(label,text){
return window.confirm([cljs.core.str("\u201C"),cljs.core.str(text),cljs.core.str("\u201D does not appear valid for \u201C"),cljs.core.str(label),cljs.core.str("\u201D.\nDo you want to submit it?\n\nClick OK to confirm this value, or Cancel to edit.")].join(''));
});
censorius.text.accessor = (function() {
var accessor = null;
var accessor__1 = (function (props){
return accessor.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)));
});
var accessor__2 = (function (cursor,keys){
if(cljs.core.truth_(keys)){
return cljs.core.get.call(null,cljs.core.deref.call(null,cursor),keys);
} else {
return cljs.core.deref.call(null,cursor);
}
});
accessor = function(cursor,keys){
switch(arguments.length){
case 1:
return accessor__1.call(this,cursor);
case 2:
return accessor__2.call(this,cursor,keys);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accessor.cljs$core$IFn$_invoke$arity$1 = accessor__1;
accessor.cljs$core$IFn$_invoke$arity$2 = accessor__2;
return accessor;
})()
;
censorius.text.validate_PERCENT_ = (function validate_PERCENT_(props,new_text){
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

var or__3799__auto__ = validated_QMARK_;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return cljs.core.not.call(null,could_validate_QMARK_);
}
});
censorius.text.valid_submission_QMARK_ = (function valid_submission_QMARK_(props,text,can_prompt_QMARK_){
var valid_1_QMARK_ = censorius.text.validate_PERCENT_.call(null,props,text);
var valid_2_QMARK_ = (function (){var or__3799__auto__ = valid_1_QMARK_;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
var and__3787__auto__ = can_prompt_QMARK_;
if(cljs.core.truth_(and__3787__auto__)){
if(cljs.core.truth_(censorius.text.confirm_change.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),text))){
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
var text_13464 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props));
var keys_13465 = new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props));
var old_text_13466 = (cljs.core.truth_(keys_13465)?cljs.core.get.call(null,cljs.core.deref.call(null,props),keys_13465):cljs.core.deref.call(null,props));
if(cljs.core._EQ_.call(null,old_text_13466,text_13464)){
} else {
if(cljs.core.not.call(null,censorius.text.valid_submission_QMARK_.call(null,props,text_13464,cljs.core.not.call(null,suppress_prompt_QMARK_)))){
} else {
var formatter_13467 = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props));
var final_text_13468 = (cljs.core.truth_(formatter_13467)?cljs.core.apply.call(null,formatter_13467,cljs.core._conj.call(null,cljs.core.List.EMPTY,text_13464)):text_13464);
if(cljs.core.not_EQ_.call(null,text_13464,final_text_13468)){
cljs.core.swap_BANG_.call(null,props,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),final_text_13468);
} else {
}

cljs.core.swap_BANG_.call(null,props,cljs.core.assoc,new cljs.core.Keyword(null,"orig-text","orig-text",650637509),final_text_13468);

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

censorius.text.submit.call(null,event,props);
} else {
}

return true;
});
});
censorius.text.do_change = (function do_change(props,new_text){
if(cljs.core.truth_((function (){var and__3787__auto__ = typeof new_text === 'string';
if(and__3787__auto__){
return censorius.text.validate_PERCENT_.call(null,props,new_text);
} else {
return and__3787__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,props,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),new_text);

return censorius.utils.log.call(null,"changed to ",new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)));
} else {
return null;
}
});
censorius.text.key_down = (function key_down(event,props,want_return_QMARK_){
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([censorius.text._PLUS_clear_PLUS_,censorius.text._PLUS_escape_PLUS_], true).call(null,event.keyCode))){
return censorius.text.do_change.call(null,props,new cljs.core.Keyword(null,"orig-text","orig-text",650637509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)));
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
censorius.text.text_input = (function text_input(p__13478,children){
var map__13482 = p__13478;
var map__13482__$1 = ((cljs.core.seq_QMARK_.call(null,map__13482))?cljs.core.apply.call(null,cljs.core.hash_map,map__13482):map__13482);
var format = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var placeholder = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var validate = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var ellipsis = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738));
var cursor = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var size = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var input_type = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"input-type","input-type",856973840));
var rows = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var keys = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var label = cljs.core.get.call(null,map__13482__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var name = censorius.utils.gensymreally.call(null,label);
var props = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"validate","validate",-201300827),new cljs.core.Keyword(null,"orig-text","orig-text",650637509),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"needs-props-set-p","needs-props-set-p",-1016745743),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"needs-focus-p","needs-focus-p",-293047430),new cljs.core.Keyword(null,"validated?","validated?",923640924),new cljs.core.Keyword(null,"text","text",-1790561697)],[format,validate,censorius.text.accessor.call(null,cursor,keys),placeholder,ellipsis,cursor,size,input_type,rows,false,keys,label,false,false,censorius.text.accessor.call(null,cursor,keys)]));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (props_in){
var vec__13483 = (function (){var G__13484 = new cljs.core.Keyword(null,"validated?","validated?",923640924).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props));
if(cljs.core._EQ_.call(null,null,G__13484)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unknown"," "], null);
} else {
if(cljs.core._EQ_.call(null,true,G__13484)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,"\u26E4"], null);
} else {
if(cljs.core._EQ_.call(null,false,G__13484)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,"\u2717"], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"validated?","validated?",923640924).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))].join('')));

}
}
}
})();
var validity = cljs.core.nth.call(null,vec__13483,(0),null);
var validity_sigil = cljs.core.nth.call(null,vec__13483,(1),null);
if(cljs.core._EQ_.call(null,(0),rows)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[(function (){var or__3799__auto__ = new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props));
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),((function (vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (p1__13469_SHARP_){
return censorius.text.submit.call(null,p1__13469_SHARP_,props,true);
});})(vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
,(function (){var or__3799__auto__ = new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props));
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),[cljs.core.str("valid-"),cljs.core.str(new cljs.core.Keyword(null,"validity","validity",890377214).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props))),cljs.core.str(" size-"),cljs.core.str(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))].join(''),((function (vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (p1__13470_SHARP_){
return censorius.text.do_change.call(null,props,p1__13470_SHARP_.target.value);
});})(vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
,((function (vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (p1__13471_SHARP_){
return censorius.text.key_down.call(null,p1__13471_SHARP_,props,true);
});})(vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
])], null),(cljs.core.truth_(new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)));
});})(vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
], null),"\u2026"], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("marker valid-"),cljs.core.str(validity)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),censorius.text.mkfun_validity_submit.call(null,props)], null),validity_sigil], null):null)], null);
} else {
if((cljs.core.not.call(null,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))) || (cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"two-column"], null),((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props))))?"":[cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props))),cljs.core.str(":")].join('')),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[(function (){var or__3799__auto__ = new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props));
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),censorius.text.accessor.call(null,props),((function (vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (p1__13472_SHARP_){
return censorius.text.submit.call(null,p1__13472_SHARP_,props,true);
});})(vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
,(function (){var or__3799__auto__ = new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props));
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return "text";
}
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))?[cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props))),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props))),cljs.core.str(")")].join(''):new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props))),name,[cljs.core.str("valid-"),cljs.core.str(new cljs.core.Keyword(null,"validity","validity",890377214).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props))),cljs.core.str(" size-"),cljs.core.str(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))].join(''),((function (vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (p1__13473_SHARP_){
return censorius.text.do_change.call(null,props,p1__13473_SHARP_.target.value);
});})(vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
,((function (vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (p1__13474_SHARP_){
return censorius.text.key_down.call(null,p1__13474_SHARP_,props,true);
});})(vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
])], null),(cljs.core.truth_(new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),cljs.core.deref.call(null,props));
});})(vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
], null),"\u2026"], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("marker "),cljs.core.str([cljs.core.str("valid-"),cljs.core.str(new cljs.core.Keyword(null,"validity","validity",890377214).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),censorius.text.mkfun_validity_submit.call(null,props)], null),validity_sigil], null):null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),[cljs.core.str("textarea-"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))].join('')], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)));
});})(vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
], null),"\u2026"], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("marker valid-"),cljs.core.str(new cljs.core.Keyword(null,"validity","validity",890377214).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))].join('')], null),validity_sigil], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),((function (vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (p1__13475_SHARP_){
return censorius.text.submit.call(null,p1__13475_SHARP_,props,true);
});})(vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
,[cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props))),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)))?[cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props))),cljs.core.str(")")].join(''):""))].join(''),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),new cljs.core.Keyword(null,"validity","validity",890377214).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)),((function (vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (p1__13476_SHARP_){
return censorius.text.do_change.call(null,props,p1__13476_SHARP_.target.value);
});})(vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
,((function (vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label){
return (function (p1__13477_SHARP_){
return censorius.text.key_down.call(null,p1__13477_SHARP_,props,false);
});})(vec__13483,validity,validity_sigil,name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
])], null)], null);

}
}
});})(name,props,map__13482,map__13482__$1,format,placeholder,validate,ellipsis,cursor,size,input_type,rows,keys,label))
], null));
});

//# sourceMappingURL=text.js.map