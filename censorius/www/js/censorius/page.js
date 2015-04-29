// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('censorius.page')) {
goog.provide('censorius.page');
}
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('censorius.guest');
goog.require('reagent.session');
goog.require('censorius.text');
goog.require('datascript');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('censorius.utils');
goog.require('clojure.string');
goog.require('censorius.guest_list');
goog.require('censorius.data');
cljs.core.enable_console_print_BANG_.call(null);
censorius.utils.log.call(null,"Censorius loading\u2026");
censorius.page.guests_thead = (function guests_thead(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),censorius.utils.abbr.call(null,"Name","Name of each party member")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),censorius.utils.abbr.call(null,"\u2709","eMail")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),censorius.utils.abbr.call(null,"\uD83D\uDCDE","Phone#")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),censorius.utils.abbr.call(null,"\uD83D\uDEB8","Ticket","The type of ticket \u2014 adult or child")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),censorius.utils.abbr.call(null,"\uD83D\uDCC5","Days")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),censorius.utils.abbr.call(null,"\u26FA/\uD83C\uDFE0","Sleep","The lodging for each person: tent, cabin, or lodge bed.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),censorius.utils.abbr.call(null,"\uD83C\uDF72\uD83C\uDF74","Meals","Purchase the Bubbling Cauldron meal plan here.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),censorius.utils.abbr.call(null,"\uD83D\uDC55","T-Shirt","FPG T-shirt for this Festival. (Buy other shirts in the \u201CExtras\u201D box)")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),censorius.utils.abbr.call(null,"\uD83D\uDCBC","Tote","FPG tote bags")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),censorius.utils.abbr.call(null,"\uD83C\uDF7A","Mug","FPG 20th Anniversary hot & cold beverage mugs. (Buy other mugs in the \u201CExtras\u201D box)")], null)], null)], null);
});
censorius.page.guest_price = (function guest_price(guest){
return ((((((cljs.core.truth_(new cljs.core.Keyword(null,"lugal+?","lugal+?",1775456646).cljs$core$IFn$_invoke$arity$1(guest))?(0):(cljs.core.truth_(new cljs.core.Keyword(null,"staff?","staff?",1233722098).cljs$core$IFn$_invoke$arity$1(guest))?(300):(cljs.core.truth_(new cljs.core.Keyword(null,"adult?","adult?",-133070051).cljs$core$IFn$_invoke$arity$1(guest))?(function (){var G__11178 = new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(guest);
if(cljs.core._EQ_.call(null,null,G__11178)){
return 950.13;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"week-end","week-end",-1868033285),G__11178)){
return 762.39;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"day","day",-274800446),G__11178)){
return 490.24;
} else {
censorius.utils.log.call(null,"bad days ",new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(guest));

return (0);

}
}
}
})():178.2
))) + (function (){var G__11179 = (((new cljs.core.Keyword(null,"sleep","sleep",-1932665860).cljs$core$IFn$_invoke$arity$1(guest) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"sleep","sleep",-1932665860).cljs$core$IFn$_invoke$arity$1(guest).fqn:null);
switch (G__11179) {
case "lodge":
return (2000);

break;
case "cabin":
return (85);

break;
case "tent":
return (0);

break;
default:
censorius.utils.log.call(null,"bad sleeping \u201C",new cljs.core.Keyword(null,"sleep","sleep",-1932665860).cljs$core$IFn$_invoke$arity$1(guest),"\u201D for guest ",guest);

return (0);

}
})()) + (function (){var G__11180 = (((new cljs.core.Keyword(null,"eat","eat",1686757401).cljs$core$IFn$_invoke$arity$1(guest) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"eat","eat",1686757401).cljs$core$IFn$_invoke$arity$1(guest).fqn:null);
switch (G__11180) {
case "cauldron":
return (7000);

break;
case "looney":
return 1.000000001E7;

break;
default:
return (0);

}
})()) + (cljs.core.truth_(new cljs.core.Keyword(null,"t-shirt","t-shirt",-2121900800).cljs$core$IFn$_invoke$arity$1(guest))?new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"festival-shirt","festival-shirt",-336123619).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.merch)))):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"coffee?","coffee?",-1296287323).cljs$core$IFn$_invoke$arity$1(guest))?new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"coffee","coffee",23772871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.merch)))):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"tote?","tote?",-1225962794).cljs$core$IFn$_invoke$arity$1(guest))?new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"tote-bag","tote-bag",-1462493277).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.merch)))):(0)));
});
censorius.page.price_all_guests = (function price_all_guests(){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,censorius.page.guest_price,cljs.core.deref.call(null,censorius.data.guests)));
});
censorius.page.guests_price_sum = (function guests_price_sum(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),censorius.utils.format_money.call(null,censorius.page.price_all_guests.call(null))], null);
});
censorius.page.guest_list_box = (function guest_list_box(){
censorius.utils.log.call(null,"Guests = ",cljs.core.deref.call(null,censorius.data.guests));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Registration for ",new cljs.core.Keyword(null,"season","season",851675697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.festival))," ",new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.festival)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/load"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Load a previous registration"], null),"\uD83D\uDCC2"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(function (){var temp__4124__auto__ = cljs.core.first.call(null,cljs.core.deref.call(null,censorius.data.guests));
if(cljs.core.truth_(temp__4124__auto__)){
var leader = temp__4124__auto__;
return [cljs.core.str((function (){var or__3799__auto__ = new cljs.core.Keyword(null,"surname","surname",1407918027).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,leader));
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return "No name yet";
}
})()),cljs.core.str(" \u2014 "),cljs.core.str(" Party of "),cljs.core.str(censorius.utils.counting.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,censorius.data.guests)),"Guest"))].join('');
} else {
return "New party";
}
})()], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"people"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.page.guests_thead], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4555__auto__ = (function iter__11187(s__11188){
return (new cljs.core.LazySeq(null,(function (){
var s__11188__$1 = s__11188;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11188__$1);
if(temp__4126__auto__){
var s__11188__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11188__$2)){
var c__4553__auto__ = cljs.core.chunk_first.call(null,s__11188__$2);
var size__4554__auto__ = cljs.core.count.call(null,c__4553__auto__);
var b__11190 = cljs.core.chunk_buffer.call(null,size__4554__auto__);
if((function (){var i__11189 = (0);
while(true){
if((i__11189 < size__4554__auto__)){
var guest = cljs.core._nth.call(null,c__4553__auto__,i__11189);
cljs.core.chunk_append.call(null,b__11190,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.guest.guest_row,cljs.core.deref.call(null,guest)], null));

var G__11191 = (i__11189 + (1));
i__11189 = G__11191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11190),iter__11187.call(null,cljs.core.chunk_rest.call(null,s__11188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11190),null);
}
} else {
var guest = cljs.core.first.call(null,s__11188__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.guest.guest_row,cljs.core.deref.call(null,guest)], null),iter__11187.call(null,cljs.core.rest.call(null,s__11188__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4555__auto__.call(null,cljs.core.deref.call(null,censorius.data.guests));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.guest_list.add_person_row], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"|subtotal|"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(7)], null),"Subtotal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"right"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.page.guests_price_sum], null)], null)], null)], null)], null)], null)], null);
});
censorius.page.running_out_style = (function running_out_style(style){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"warning"], null),"Please change your order."], null),"Only ",clojure.string.lower_case.call(null,censorius.utils.counting.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style),"item"))," of this style remain. You'll need to remove ",clojure.string.lower_case.call(null,censorius.utils.counting.call(null,(new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(style) - new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style)),"item"))," from your order.",(function (){var left = new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"false",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (left){
return (function (){
return cljs.core.swap_BANG_.call(null,style,new cljs.core.Keyword(null,"qty","qty",155560951),left);
});})(left))
], null),"\uD83D\uDE26 Change to ",left], null);
})()], null);
});
censorius.page.merch_product_style = (function merch_product_style(style){
if((new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style) === (0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(style)," \u2014 Sold out."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),style,new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(style),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0",new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"format","format",-1306924766),censorius.utils.just_digits,new cljs.core.Keyword(null,"validate","validate",-201300827),censorius.utils.just_digits_QMARK_], null)], null),((((10) > new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),censorius.utils.counting.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style),"item")," left"], null):null),(((new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style) < new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(style)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.page.running_out_style,style], null):null)], null);
} else {
return null;
}
});
censorius.page.merch_product_style_1 = (function merch_product_style_1(style){
if((new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style) === (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"Sold out."], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style) < new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(style)))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"warning"], null),"Please change your order."], null)," Only ",clojure.string.lower_case.call(null,censorius.utils.counting.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style),"item"))," of this style remain. You'll need to remove ",clojure.string.lower_case.call(null,censorius.utils.counting.call(null,(new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(style) - new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style)),"item"))," from your order.",(function (){var left = new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"false",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (left){
return (function (){
return cljs.core.swap_BANG_.call(null,style,cljs.core.assoc,new cljs.core.Keyword(null,"qty","qty",155560951),left);
});})(left))
], null),"\uD83D\uDE26 Change to ",left], null);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),style,new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0",new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"format","format",-1306924766),censorius.utils.just_digits,new cljs.core.Keyword(null,"validate","validate",-201300827),censorius.utils.just_digits_QMARK_], null)], null)),((((10) > new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),censorius.utils.counting.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style),"item")," left"], null):null),(((new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(style) < new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(style)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.page.running_out_style,style], null):null)], null);
}
});
censorius.page.product_row = (function product_row(p__11193){
var vec__11195 = p__11193;
var id = cljs.core.nth.call(null,vec__11195,(0),null);
var item = cljs.core.nth.call(null,vec__11195,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"class","class",-2030961996),"merch-thumb"], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),censorius.utils.format_money.call(null,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(item))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new cljs.core.Keyword(null,"styles","styles",1954480375).cljs$core$IFn$_invoke$arity$1(item))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.page.merch_product_style_1,cljs.core.first.call(null,new cljs.core.Keyword(null,"styles","styles",1954480375).cljs$core$IFn$_invoke$arity$1(item))], null):cljs.core.map.call(null,censorius.page.merch_product_style,new cljs.core.Keyword(null,"styles","styles",1954480375).cljs$core$IFn$_invoke$arity$1(item)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),censorius.utils.format_money.call(null,(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__11195,id,item){
return (function (p1__11192_SHARP_){
return new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(p1__11192_SHARP_);
});})(vec__11195,id,item))
,new cljs.core.Keyword(null,"styles","styles",1954480375).cljs$core$IFn$_invoke$arity$1(item))) * new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(item)))], null)], null);
});
censorius.page.price_all_merch = (function price_all_merch(){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (item){
return (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__11196_SHARP_){
return new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(p1__11196_SHARP_);
}),new cljs.core.Keyword(null,"styles","styles",1954480375).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,item)))) * new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,item)));
}),cljs.core.vals.call(null,cljs.core.deref.call(null,censorius.data.merch))));
});
censorius.page.sum_merch_prices = (function sum_merch_prices(){
return censorius.utils.format_money.call(null,censorius.page.price_all_merch.call(null));
});
censorius.page.merch_box = (function merch_box(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Extras"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"extras"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Item"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Price Ea."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Style / Qty."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Subtotal"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,censorius.page.product_row,cljs.core.deref.call(null,censorius.data.merch))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(3)], null),"Subtotal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.page.sum_merch_prices], null)], null)], null)], null)], null)], null);
});
censorius.page.workshop_box = (function workshop_box(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Workshops"], null),(((cljs.core.count.call(null,cljs.core.deref.call(null,censorius.data.workshops)) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Workshop Requests"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Presenter"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4555__auto__ = (function iter__11201(s__11202){
return (new cljs.core.LazySeq(null,(function (){
var s__11202__$1 = s__11202;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11202__$1);
if(temp__4126__auto__){
var s__11202__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11202__$2)){
var c__4553__auto__ = cljs.core.chunk_first.call(null,s__11202__$2);
var size__4554__auto__ = cljs.core.count.call(null,c__4553__auto__);
var b__11204 = cljs.core.chunk_buffer.call(null,size__4554__auto__);
if((function (){var i__11203 = (0);
while(true){
if((i__11203 < size__4554__auto__)){
var workshop = cljs.core._nth.call(null,c__4553__auto__,i__11203);
cljs.core.chunk_append.call(null,b__11204,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/workshops/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,workshop)))].join('')], null),new cljs.core.Keyword(null,"long-name","long-name",184126232).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,workshop))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"formal-name","formal-name",2039222000).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"presenter","presenter",-436645309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,workshop)))], null)], null));

var G__11205 = (i__11203 + (1));
i__11203 = G__11205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11204),iter__11201.call(null,cljs.core.chunk_rest.call(null,s__11202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11204),null);
}
} else {
var workshop = cljs.core.first.call(null,s__11202__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#/workshops/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,workshop)))].join('')], null),new cljs.core.Keyword(null,"long-name","long-name",184126232).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,workshop))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"formal-name","formal-name",2039222000).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"presenter","presenter",-436645309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,workshop)))], null)], null),iter__11201.call(null,cljs.core.rest.call(null,s__11202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4555__auto__.call(null,cljs.core.deref.call(null,censorius.data.workshops));
})()], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/add-workshop"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"true"], null),(((cljs.core.count.call(null,cljs.core.deref.call(null,censorius.data.workshops)) === (0)))?"\u2042 Present a workshop":"+ Add another")], null)], null)], null);
});
censorius.page.price_vendor = (function price_vendor(){
return (new cljs.core.Keyword(null,"vendor","vendor",1931975424).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.prices)) * new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.vending)));
});
censorius.page.vendor_box = (function vendor_box(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Vending"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,censorius.data.guests)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Vendors must have at least one paid, adult admission"], null),"No "], null):((cljs.core.not.call(null,new cljs.core.Keyword(null,"agreement","agreement",-156381462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.vending))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Vendor agreement"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Before you can become an vendor, you need to agree to the festival's vendor rules."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/vendor-agreement"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"true"], null),"Vendor Rules"], null)], null),"No "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),censorius.data.vending,new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"label","label",1718410804),"Quantity",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0",new cljs.core.Keyword(null,"format","format",-1306924766),censorius.utils.just_number,new cljs.core.Keyword(null,"validate","validate",-201300827),censorius.utils.just_digits_QMARK_,new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)], null)
))," vendor ",((cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.vending))))?"slip":"slips")," (",((((1) < new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.vending))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),((10) * new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.vending)))], null):(10)),"\u2032\u00D710\u2032) @ ",censorius.utils.format_money.call(null,new cljs.core.Keyword(null,"vendor","vendor",1931975424).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.prices)))," each",((((1) < new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.vending))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null)," (total ",censorius.utils.format_money.call(null,censorius.page.price_vendor.call(null)),")"], null):null)], null),(((new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.data.vending)) > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),censorius.data.vending,new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804),"Vending Booth Name",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Plonkee Plonkee Shoppe",new cljs.core.Keyword(null,"format","format",-1306924766),censorius.utils.name_case,new cljs.core.Keyword(null,"validate","validate",-201300827),censorius.utils.name_like_QMARK_,new cljs.core.Keyword(null,"rows","rows",850049680),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),censorius.data.vending,new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"blurb","blurb",-769928228),new cljs.core.Keyword(null,"label","label",1718410804),"Description (Handbook/Web)",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Come and have lots of fun with our widgets and doodads! You'll want to collect all nine.",new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__11206_SHARP_){
return (((250) > cljs.core.count.call(null,p1__11206_SHARP_))) && ((cljs.core.count.call(null,p1__11206_SHARP_) > (32)));
}),new cljs.core.Keyword(null,"rows","rows",850049680),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),censorius.data.vending,new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"label","label",1718410804),"Requests/Notes",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"rows","rows",850049680),(2)], null)], null)], null):null)], null);
});
censorius.page.assistant_box = (function assistant_box(props,children,self){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"assistant"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Assistant"], null),(((cljs.core.count.call(null,cljs.core.deref.call(null,censorius.data.guests)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Getting Started"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"First, enter the (legal) name of your party's leader. Since\n                                      you're entering this, that's\n                                      probably you! This will be the\n                                      name that your registration will\n                                      be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),"filed under"], null)," when you arrive at the Festival. Then, click (or tap) ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"+ Add to Party"], null),"."], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Editing your Party"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For each person in your party, click the buttons under each\n       column to fill in their complete details."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The information you fill in for your party leader will\n       become the default for other party members, so check out your\n       options first."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can add as many party members as you need to."], null)], null)),(((cljs.core.filter.call(null,(function (p1__11207_SHARP_){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"adult","adult",-1130256462),new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505).cljs$core$IFn$_invoke$arity$1(p1__11207_SHARP_))) && (!((new cljs.core.Keyword(null,"e-mail","e-mail",270044236).cljs$core$IFn$_invoke$arity$1(p1__11207_SHARP_) == null)));
}),cljs.core.deref.call(null,censorius.data.guests)) == null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"warning"], null),"eMail Address Needed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The eMail address of at least one adult in the party must be provided."], null)], null):null),(function (){var babies = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__11208_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"baby","baby",-1305225347),new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505).cljs$core$IFn$_invoke$arity$1(p1__11208_SHARP_));
}),cljs.core.deref.call(null,censorius.data.guests)));
var children__$1 = cljs.core.count.call(null,cljs.core.filter.call(null,((function (babies){
return (function (p1__11209_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505).cljs$core$IFn$_invoke$arity$1(p1__11209_SHARP_));
});})(babies))
,cljs.core.deref.call(null,censorius.data.guests)));
var adults = cljs.core.count.call(null,cljs.core.filter.call(null,((function (babies,children__$1){
return (function (p1__11210_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"adult","adult",-1130256462),new cljs.core.Keyword(null,"ticket-type","ticket-type",-847802505).cljs$core$IFn$_invoke$arity$1(p1__11210_SHARP_));
});})(babies,children__$1))
,cljs.core.deref.call(null,censorius.data.guests)));
var adults_needed = (babies + (((children__$1 > (0)))?(1):(0)));
if((adults_needed > adults)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"warning"], null),censorius.utils.counting.call(null,(adults_needed - adults),"Adult")," Required"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"At least ",clojure.string.lower_case.call(null,censorius.utils.counting.call(null,adults_needed,"adult"))," must accompany ",(((babies > (0)))?[cljs.core.str(clojure.string.lower_case.call(null,censorius.utils.counting.call(null,babies,"child"))),cljs.core.str(" under 5"),cljs.core.str((((children__$1 > (0)))?" and":null))].join(''):null),(((children__$1 > (0)))?[cljs.core.str(clojure.string.lower_case.call(null,censorius.utils.counting.call(null,children__$1,"child"))),cljs.core.str((((babies > (0)))?" ages 5-17":null))].join(''):null),"."], null)], null);
} else {
return null;
}
})(),((((1) < cljs.core.count.call(null,cljs.core.deref.call(null,censorius.data.guests))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Removing tickets"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"To remove someone from your party, click on their name, then click the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Remove from Party"], null)," button."], null)], null):null),(cljs.core.truth_(cljs.core.some.call(null,(function (guest_atom){
var guest = cljs.core.deref.call(null,guest_atom);
var or__3799__auto__ = new cljs.core.Keyword(null,"t-shirt","t-shirt",-2121900800).cljs$core$IFn$_invoke$arity$1(guest);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
var or__3799__auto____$1 = new cljs.core.Keyword(null,"coffee?","coffee?",-1296287323).cljs$core$IFn$_invoke$arity$1(guest);
if(cljs.core.truth_(or__3799__auto____$1)){
return or__3799__auto____$1;
} else {
return new cljs.core.Keyword(null,"tote?","tote?",-1225962794).cljs$core$IFn$_invoke$arity$1(guest);
}
}
}),cljs.core.deref.call(null,censorius.data.guests)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Merchandise"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can purchase great merchandise for every member of your party, and order extra items to take home from the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Extras"], null)," box as well. There are additional items, like general T-shirts, also available this way."], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Merchandise"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Buy your festival T-shirts for every party member, or order more merchandise from the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Extras"], null)," box."], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Vendors"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Set up your vending booth by picking the number of spaces you'll\n                                                     need, then put in\n                                                     your booth's name\n                                                     and description to\n                                                     appear in\n                                                     the handbook."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Workshops"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If any members of your party want to present a workshop at FPG, just fill out the information here."], null)], null)], null);
});
censorius.page.scholarship_box = (function scholarship_box(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Scholarship Donations"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Pagans Helping Pagans",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"These funds are used to provide scholarships for guests who would like to attend FPG but need financial assistance."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),censorius.data.scholarships,new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"php","php",-97199496),new cljs.core.Keyword(null,"label","label",1718410804),"Pagans Helping Pagans Fund",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"$5.00",new cljs.core.Keyword(null,"format","format",-1306924766),censorius.utils.format_money,new cljs.core.Keyword(null,"validate","validate",-201300827),censorius.utils.money_QMARK_,new cljs.core.Keyword(null,"size","size",1098693007),(6),new cljs.core.Keyword(null,"rows","rows",850049680),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Robert Baiardi Memorial",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"Named in remembrance of Robert Baiardi, the husband of a member of FPG staff who passed away shortly after FPG Samhain 2012. This fund has been set up to provide financial assistance for staff admissions."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),censorius.data.scholarships,new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"baiardi","baiardi",-146956275),new cljs.core.Keyword(null,"label","label",1718410804),"Robert Baiardi Memorial Fund",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"$5.00",new cljs.core.Keyword(null,"format","format",-1306924766),censorius.utils.format_money,new cljs.core.Keyword(null,"validate","validate",-201300827),censorius.utils.money_QMARK_,new cljs.core.Keyword(null,"size","size",1098693007),(6),new cljs.core.Keyword(null,"rows","rows",850049680),(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Seva",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"The Seva Scholarship offers financial assistance to FPG staff members who need it."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.text.text_input,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),censorius.data.scholarships,new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"seva","seva",-1044185878),new cljs.core.Keyword(null,"label","label",1718410804),"Seva Fund",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"$5.00",new cljs.core.Keyword(null,"format","format",-1306924766),censorius.utils.format_money,new cljs.core.Keyword(null,"validate","validate",-201300827),censorius.utils.money_QMARK_,new cljs.core.Keyword(null,"size","size",1098693007),(6),new cljs.core.Keyword(null,"rows","rows",850049680),(0)], null)], null)], null)], null)], null)], null)], null);
});
censorius.page.check_out_box = (function check_out_box(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Ready to check out?"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buttonBox"], null)," Total: ",censorius.utils.format_money.call(null,(((censorius.page.price_all_guests.call(null) + censorius.page.price_all_merch.call(null)) + censorius.page.price_vendor.call(null)) + cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,censorius.utils.just_decimal,cljs.core.vals.call(null,cljs.core.deref.call(null,censorius.data.scholarships))))))," + scholarships ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Pay Now"], null)], null)], null);
});
censorius.page.registration_page = (function registration_page(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.page.guest_list_box], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.page.workshop_box], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.page.scholarship_box], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.page.assistant_box], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.page.check_out_box], null)], null);
});
censorius.page.about_page = (function about_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About Censorius"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Copyright \u00A9 2014-2015, Bruce-Robert Fenn Pocock."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"\u2190 Back to Registration"], null)], null)], null);
});
censorius.page.staff_apply = (function staff_apply(guest$){
var guest = cljs.core.get.call(null,cljs.core.deref.call(null,censorius.data.guests),guest$);
if(cljs.core.not.call(null,guest)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Staff Application"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Staff Application"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Confirm Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [censorius.guest.name_edit_box,guest], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Already on Staff?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If you're already a staff member, you can get your Lugal's\n    confirmation and get your staff discount. You must have already\n    applied, been accepted, and been assigned to your Lugal to receive\n    the discount."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/staff-confirm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Confirm Staff"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint"], null),"If you're a Lugal, Division Co\u00F6rdinator,\n    Director, Guardian, Shiny Happy People Drum Tribe, Headliner, or\n    other individual who should receive a discounted admission, make\n    sure that you've entered your eMail address and that it matches the\n    one you gave to the Festival previously. If your discount does not\n    appear, then "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:festival-censorius@star-hope.org"], null),"send an eMail"], null),"with the details of your problem and I'll look into it."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"\u2190 Back to Registration"], null)], null)], null)], null);
}
});
censorius.page.vendor_quiz = (function vendor_quiz(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Staff Application"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"\u2190 Back to Registration"], null)], null)], null)], null);
});
censorius.page.staff_confirm = (function staff_confirm(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Staff Confirmation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/staff-apply"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Apply for Staff"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"\u2190 Back to Registration"], null)], null)], null);
});
censorius.page.page_404 = (function page_404(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"404: Incorrect link"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"card"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Festival Registration"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The link you followed is not valid; but you can ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"return to Registration"], null)," here."], null)], null)], null);
});
censorius.page.uri_view = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),censorius.page.registration_page,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"filter","filter",-948537934),null], null));
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
censorius.page.location_hash = (function location_hash(x){
return window.location.hash = x;
});
var action__10230__auto___11213 = (function (params__10231__auto__){
if(cljs.core.map_QMARK_.call(null,params__10231__auto__)){
var map__11211 = params__10231__auto__;
var map__11211__$1 = ((cljs.core.seq_QMARK_.call(null,map__11211))?cljs.core.apply.call(null,cljs.core.hash_map,map__11211):map__11211);
return cljs.core.swap_BANG_.call(null,censorius.page.uri_view,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),censorius.page.registration_page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__10231__auto__)){
var vec__11212 = params__10231__auto__;
return cljs.core.swap_BANG_.call(null,censorius.page.uri_view,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),censorius.page.registration_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__10230__auto___11213);

var action__10230__auto___11216 = (function (params__10231__auto__){
if(cljs.core.map_QMARK_.call(null,params__10231__auto__)){
var map__11214 = params__10231__auto__;
var map__11214__$1 = ((cljs.core.seq_QMARK_.call(null,map__11214))?cljs.core.apply.call(null,cljs.core.hash_map,map__11214):map__11214);
return cljs.core.swap_BANG_.call(null,censorius.page.uri_view,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),censorius.page.about_page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__10231__auto__)){
var vec__11215 = params__10231__auto__;
return cljs.core.swap_BANG_.call(null,censorius.page.uri_view,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),censorius.page.about_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__10230__auto___11216);

var action__10230__auto___11219 = (function (params__10231__auto__){
if(cljs.core.map_QMARK_.call(null,params__10231__auto__)){
var map__11217 = params__10231__auto__;
var map__11217__$1 = ((cljs.core.seq_QMARK_.call(null,map__11217))?cljs.core.apply.call(null,cljs.core.hash_map,map__11217):map__11217);
return cljs.core.swap_BANG_.call(null,censorius.page.uri_view,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),censorius.page.vendor_quiz);
} else {
if(cljs.core.vector_QMARK_.call(null,params__10231__auto__)){
var vec__11218 = params__10231__auto__;
return cljs.core.swap_BANG_.call(null,censorius.page.uri_view,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),censorius.page.vendor_quiz);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/vendor-agreement",action__10230__auto___11219);

var action__10230__auto___11224 = (function (params__10231__auto__){
if(cljs.core.map_QMARK_.call(null,params__10231__auto__)){
var map__11220 = params__10231__auto__;
var map__11220__$1 = ((cljs.core.seq_QMARK_.call(null,map__11220))?cljs.core.apply.call(null,cljs.core.hash_map,map__11220):map__11220);
var map__11221 = cljs.core.get.call(null,map__11220__$1,new cljs.core.Keyword(null,"{:keys [id]}","{:keys [id]}",-1604799786));
var map__11221__$1 = ((cljs.core.seq_QMARK_.call(null,map__11221))?cljs.core.apply.call(null,cljs.core.hash_map,map__11221):map__11221);
var id = cljs.core.get.call(null,map__11221__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.call(null,censorius.page.uri_view,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),censorius.page.staff_apply,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__10231__auto__)){
var vec__11222 = params__10231__auto__;
var map__11223 = cljs.core.nth.call(null,vec__11222,(0),null);
var map__11223__$1 = ((cljs.core.seq_QMARK_.call(null,map__11223))?cljs.core.apply.call(null,cljs.core.hash_map,map__11223):map__11223);
var id = cljs.core.get.call(null,map__11223__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.call(null,censorius.page.uri_view,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),censorius.page.staff_apply,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/staff-apply/:id",action__10230__auto___11224);

var action__10230__auto___11229 = (function (params__10231__auto__){
if(cljs.core.map_QMARK_.call(null,params__10231__auto__)){
var map__11225 = params__10231__auto__;
var map__11225__$1 = ((cljs.core.seq_QMARK_.call(null,map__11225))?cljs.core.apply.call(null,cljs.core.hash_map,map__11225):map__11225);
var map__11226 = cljs.core.get.call(null,map__11225__$1,new cljs.core.Keyword(null,"{:keys [id]}","{:keys [id]}",-1604799786));
var map__11226__$1 = ((cljs.core.seq_QMARK_.call(null,map__11226))?cljs.core.apply.call(null,cljs.core.hash_map,map__11226):map__11226);
var id = cljs.core.get.call(null,map__11226__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.call(null,censorius.page.uri_view,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),censorius.page.staff_confirm,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__10231__auto__)){
var vec__11227 = params__10231__auto__;
var map__11228 = cljs.core.nth.call(null,vec__11227,(0),null);
var map__11228__$1 = ((cljs.core.seq_QMARK_.call(null,map__11228))?cljs.core.apply.call(null,cljs.core.hash_map,map__11228):map__11228);
var id = cljs.core.get.call(null,map__11228__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.call(null,censorius.page.uri_view,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),censorius.page.staff_confirm,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/staff-confirm/:id",action__10230__auto___11229);

censorius.page.init_BANG_ = (function init_BANG_(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,censorius.page.uri_view)),censorius.page.uri_view], null),document.getElementById("censorius"));
});
censorius.page.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){
var history = (new goog.History());
goog.events.listen(history,goog.history.EventType.NAVIGATE,((function (history){
return (function (p1__11230_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__11230_SHARP_.token);
});})(history))
);

var G__11232 = history;
G__11232.setEnabled(true);

return G__11232;
});
censorius.page.main = (function main(){
censorius.utils.log.call(null,"clearTimeout ",not_loaded);

window.clearTimeout(not_loaded);

censorius.page.hook_browser_navigation_BANG_.call(null);

return censorius.page.init_BANG_.call(null);
});
censorius.page.main.call(null);

//# sourceMappingURL=page.js.map