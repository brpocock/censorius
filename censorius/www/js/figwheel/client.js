// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client')) {
goog.provide('figwheel.client');
}
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__21190,args){
var map__21192 = p__21190;
var map__21192__$1 = ((cljs.core.seq_QMARK_.call(null,map__21192))?cljs.core.apply.call(null,cljs.core.hash_map,map__21192):map__21192);
var debug = cljs.core.get.call(null,map__21192__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__21190,var_args){
var args = null;
if (arguments.length > 1) {
var G__21193__i = 0, G__21193__a = new Array(arguments.length -  1);
while (G__21193__i < G__21193__a.length) {G__21193__a[G__21193__i] = arguments[G__21193__i + 1]; ++G__21193__i;}
  args = new cljs.core.IndexedSeq(G__21193__a,0);
} 
return log__delegate.call(this,p__21190,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__21194){
var p__21190 = cljs.core.first(arglist__21194);
var args = cljs.core.rest(arglist__21194);
return log__delegate(p__21190,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__21195){
var map__21197 = p__21195;
var map__21197__$1 = ((cljs.core.seq_QMARK_.call(null,map__21197))?cljs.core.apply.call(null,cljs.core.hash_map,map__21197):map__21197);
var websocket_url = cljs.core.get.call(null,map__21197__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__21198,callback){
var map__21200 = p__21198;
var map__21200__$1 = ((cljs.core.seq_QMARK_.call(null,map__21200))?cljs.core.apply.call(null,cljs.core.hash_map,map__21200):map__21200);
var msg = map__21200__$1;
var dependency_file = cljs.core.get.call(null,map__21200__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__21200__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__21200__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__3799__auto__ = dependency_file;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__21200,map__21200__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__21200,map__21200__$1,msg,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){

return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__21201,p__21202){
var map__21205 = p__21201;
var map__21205__$1 = ((cljs.core.seq_QMARK_.call(null,map__21205))?cljs.core.apply.call(null,cljs.core.hash_map,map__21205):map__21205);
var opts = map__21205__$1;
var url_rewriter = cljs.core.get.call(null,map__21205__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__21206 = p__21202;
var map__21206__$1 = ((cljs.core.seq_QMARK_.call(null,map__21206))?cljs.core.apply.call(null,cljs.core.hash_map,map__21206):map__21206);
var d = map__21206__$1;
var file = cljs.core.get.call(null,map__21206__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__21207,p__21208){
var map__21250 = p__21207;
var map__21250__$1 = ((cljs.core.seq_QMARK_.call(null,map__21250))?cljs.core.apply.call(null,cljs.core.hash_map,map__21250):map__21250);
var opts = map__21250__$1;
var on_jsload = cljs.core.get.call(null,map__21250__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__21250__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__21251 = p__21208;
var map__21251__$1 = ((cljs.core.seq_QMARK_.call(null,map__21251))?cljs.core.apply.call(null,cljs.core.hash_map,map__21251):map__21251);
var files = cljs.core.get.call(null,map__21251__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6861__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto__,map__21250,map__21250__$1,opts,on_jsload,before_jsload,map__21251,map__21251__$1,files){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto__,map__21250,map__21250__$1,opts,on_jsload,before_jsload,map__21251,map__21251__$1,files){
return (function (state_21274){
var state_val_21275 = (state_21274[(1)]);
if((state_val_21275 === (6))){
var inst_21256 = (state_21274[(7)]);
var inst_21265 = (state_21274[(2)]);
var inst_21266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21267 = [inst_21256];
var inst_21268 = (new cljs.core.PersistentVector(null,1,(5),inst_21266,inst_21267,null));
var inst_21269 = cljs.core.apply.call(null,on_jsload,inst_21268);
var state_21274__$1 = (function (){var statearr_21276 = state_21274;
(statearr_21276[(8)] = inst_21265);

return statearr_21276;
})();
var statearr_21277_21291 = state_21274__$1;
(statearr_21277_21291[(2)] = inst_21269);

(statearr_21277_21291[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21275 === (5))){
var inst_21272 = (state_21274[(2)]);
var state_21274__$1 = state_21274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21274__$1,inst_21272);
} else {
if((state_val_21275 === (4))){
var state_21274__$1 = state_21274;
var statearr_21278_21292 = state_21274__$1;
(statearr_21278_21292[(2)] = null);

(statearr_21278_21292[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21275 === (3))){
var inst_21256 = (state_21274[(7)]);
var inst_21259 = console.debug("Figwheel: loaded these files");
var inst_21260 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21256);
var inst_21261 = cljs.core.prn_str.call(null,inst_21260);
var inst_21262 = console.log(inst_21261);
var inst_21263 = cljs.core.async.timeout.call(null,(10));
var state_21274__$1 = (function (){var statearr_21279 = state_21274;
(statearr_21279[(9)] = inst_21262);

(statearr_21279[(10)] = inst_21259);

return statearr_21279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21274__$1,(6),inst_21263);
} else {
if((state_val_21275 === (2))){
var inst_21256 = (state_21274[(7)]);
var inst_21256__$1 = (state_21274[(2)]);
var inst_21257 = cljs.core.not_empty.call(null,inst_21256__$1);
var state_21274__$1 = (function (){var statearr_21280 = state_21274;
(statearr_21280[(7)] = inst_21256__$1);

return statearr_21280;
})();
if(cljs.core.truth_(inst_21257)){
var statearr_21281_21293 = state_21274__$1;
(statearr_21281_21293[(1)] = (3));

} else {
var statearr_21282_21294 = state_21274__$1;
(statearr_21282_21294[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21275 === (1))){
var inst_21252 = before_jsload.call(null,files);
var inst_21253 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_21254 = figwheel.client.load_all_js_files.call(null,inst_21253);
var state_21274__$1 = (function (){var statearr_21283 = state_21274;
(statearr_21283[(11)] = inst_21252);

return statearr_21283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21274__$1,(2),inst_21254);
} else {
return null;
}
}
}
}
}
}
});})(c__6861__auto__,map__21250,map__21250__$1,opts,on_jsload,before_jsload,map__21251,map__21251__$1,files))
;
return ((function (switch__6805__auto__,c__6861__auto__,map__21250,map__21250__$1,opts,on_jsload,before_jsload,map__21251,map__21251__$1,files){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_21287 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21287[(0)] = state_machine__6806__auto__);

(statearr_21287[(1)] = (1));

return statearr_21287;
});
var state_machine__6806__auto____1 = (function (state_21274){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_21274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e21288){if((e21288 instanceof Object)){
var ex__6809__auto__ = e21288;
var statearr_21289_21295 = state_21274;
(statearr_21289_21295[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21296 = state_21274;
state_21274 = G__21296;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_21274){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_21274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto__,map__21250,map__21250__$1,opts,on_jsload,before_jsload,map__21251,map__21251__$1,files))
})();
var state__6863__auto__ = (function (){var statearr_21290 = f__6862__auto__.call(null);
(statearr_21290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto__);

return statearr_21290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto__,map__21250,map__21250__$1,opts,on_jsload,before_jsload,map__21251,map__21251__$1,files))
);

return c__6861__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__21297,link_href){
var map__21299 = p__21297;
var map__21299__$1 = ((cljs.core.seq_QMARK_.call(null,map__21299))?cljs.core.apply.call(null,cljs.core.hash_map,map__21299):map__21299);
var request_url = cljs.core.get.call(null,map__21299__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__21299__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.add_cache_buster.call(null,url);

return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__6861__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto__,parent){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto__,parent){
return (function (state_21320){
var state_val_21321 = (state_21320[(1)]);
if((state_val_21321 === (2))){
var inst_21317 = (state_21320[(2)]);
var inst_21318 = parent.removeChild(orig_link);
var state_21320__$1 = (function (){var statearr_21322 = state_21320;
(statearr_21322[(7)] = inst_21317);

return statearr_21322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21320__$1,inst_21318);
} else {
if((state_val_21321 === (1))){
var inst_21315 = cljs.core.async.timeout.call(null,(200));
var state_21320__$1 = state_21320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21320__$1,(2),inst_21315);
} else {
return null;
}
}
});})(c__6861__auto__,parent))
;
return ((function (switch__6805__auto__,c__6861__auto__,parent){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_21326 = [null,null,null,null,null,null,null,null];
(statearr_21326[(0)] = state_machine__6806__auto__);

(statearr_21326[(1)] = (1));

return statearr_21326;
});
var state_machine__6806__auto____1 = (function (state_21320){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_21320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e21327){if((e21327 instanceof Object)){
var ex__6809__auto__ = e21327;
var statearr_21328_21330 = state_21320;
(statearr_21328_21330[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21331 = state_21320;
state_21320 = G__21331;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_21320){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_21320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto__,parent))
})();
var state__6863__auto__ = (function (){var statearr_21329 = f__6862__auto__.call(null);
(statearr_21329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto__);

return statearr_21329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto__,parent))
);

return c__6861__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__21332){
var map__21334 = p__21332;
var map__21334__$1 = ((cljs.core.seq_QMARK_.call(null,map__21334))?cljs.core.apply.call(null,cljs.core.hash_map,map__21334):map__21334);
var f_data = map__21334__$1;
var request_url = cljs.core.get.call(null,map__21334__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__21334__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__21335,files_msg){
var map__21357 = p__21335;
var map__21357__$1 = ((cljs.core.seq_QMARK_.call(null,map__21357))?cljs.core.apply.call(null,cljs.core.hash_map,map__21357):map__21357);
var opts = map__21357__$1;
var on_cssload = cljs.core.get.call(null,map__21357__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__21358_21378 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__21359_21379 = null;
var count__21360_21380 = (0);
var i__21361_21381 = (0);
while(true){
if((i__21361_21381 < count__21360_21380)){
var f_21382 = cljs.core._nth.call(null,chunk__21359_21379,i__21361_21381);
figwheel.client.reload_css_file.call(null,f_21382);

var G__21383 = seq__21358_21378;
var G__21384 = chunk__21359_21379;
var G__21385 = count__21360_21380;
var G__21386 = (i__21361_21381 + (1));
seq__21358_21378 = G__21383;
chunk__21359_21379 = G__21384;
count__21360_21380 = G__21385;
i__21361_21381 = G__21386;
continue;
} else {
var temp__4126__auto___21387 = cljs.core.seq.call(null,seq__21358_21378);
if(temp__4126__auto___21387){
var seq__21358_21388__$1 = temp__4126__auto___21387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21358_21388__$1)){
var c__4586__auto___21389 = cljs.core.chunk_first.call(null,seq__21358_21388__$1);
var G__21390 = cljs.core.chunk_rest.call(null,seq__21358_21388__$1);
var G__21391 = c__4586__auto___21389;
var G__21392 = cljs.core.count.call(null,c__4586__auto___21389);
var G__21393 = (0);
seq__21358_21378 = G__21390;
chunk__21359_21379 = G__21391;
count__21360_21380 = G__21392;
i__21361_21381 = G__21393;
continue;
} else {
var f_21394 = cljs.core.first.call(null,seq__21358_21388__$1);
figwheel.client.reload_css_file.call(null,f_21394);

var G__21395 = cljs.core.next.call(null,seq__21358_21388__$1);
var G__21396 = null;
var G__21397 = (0);
var G__21398 = (0);
seq__21358_21378 = G__21395;
chunk__21359_21379 = G__21396;
count__21360_21380 = G__21397;
i__21361_21381 = G__21398;
continue;
}
} else {
}
}
break;
}

var c__6861__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6861__auto__,map__21357,map__21357__$1,opts,on_cssload){
return (function (){
var f__6862__auto__ = (function (){var switch__6805__auto__ = ((function (c__6861__auto__,map__21357,map__21357__$1,opts,on_cssload){
return (function (state_21368){
var state_val_21369 = (state_21368[(1)]);
if((state_val_21369 === (2))){
var inst_21364 = (state_21368[(2)]);
var inst_21365 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_21366 = on_cssload.call(null,inst_21365);
var state_21368__$1 = (function (){var statearr_21370 = state_21368;
(statearr_21370[(7)] = inst_21364);

return statearr_21370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21368__$1,inst_21366);
} else {
if((state_val_21369 === (1))){
var inst_21362 = cljs.core.async.timeout.call(null,(100));
var state_21368__$1 = state_21368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21368__$1,(2),inst_21362);
} else {
return null;
}
}
});})(c__6861__auto__,map__21357,map__21357__$1,opts,on_cssload))
;
return ((function (switch__6805__auto__,c__6861__auto__,map__21357,map__21357__$1,opts,on_cssload){
return (function() {
var state_machine__6806__auto__ = null;
var state_machine__6806__auto____0 = (function (){
var statearr_21374 = [null,null,null,null,null,null,null,null];
(statearr_21374[(0)] = state_machine__6806__auto__);

(statearr_21374[(1)] = (1));

return statearr_21374;
});
var state_machine__6806__auto____1 = (function (state_21368){
while(true){
var ret_value__6807__auto__ = (function (){try{while(true){
var result__6808__auto__ = switch__6805__auto__.call(null,state_21368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6808__auto__;
}
break;
}
}catch (e21375){if((e21375 instanceof Object)){
var ex__6809__auto__ = e21375;
var statearr_21376_21399 = state_21368;
(statearr_21376_21399[(5)] = ex__6809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21400 = state_21368;
state_21368 = G__21400;
continue;
} else {
return ret_value__6807__auto__;
}
break;
}
});
state_machine__6806__auto__ = function(state_21368){
switch(arguments.length){
case 0:
return state_machine__6806__auto____0.call(this);
case 1:
return state_machine__6806__auto____1.call(this,state_21368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6806__auto____0;
state_machine__6806__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6806__auto____1;
return state_machine__6806__auto__;
})()
;})(switch__6805__auto__,c__6861__auto__,map__21357,map__21357__$1,opts,on_cssload))
})();
var state__6863__auto__ = (function (){var statearr_21377 = f__6862__auto__.call(null);
(statearr_21377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6861__auto__);

return statearr_21377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6863__auto__);
});})(c__6861__auto__,map__21357,map__21357__$1,opts,on_cssload))
);

return c__6861__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){
return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__21401){
var map__21406 = p__21401;
var map__21406__$1 = ((cljs.core.seq_QMARK_.call(null,map__21406))?cljs.core.apply.call(null,cljs.core.hash_map,map__21406):map__21406);
var opts = map__21406__$1;
var on_compile_fail = cljs.core.get.call(null,map__21406__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__21406__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__21406__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__21406__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__21406,map__21406__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__21407 = cljs.core._EQ_;
var expr__21408 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__21407.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__21408))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__21407.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__21408))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__21407.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__21408))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__21406,map__21406__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__21406,map__21406__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__21406,map__21406__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__21406,map__21406__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__21406,map__21406__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__21406,map__21406__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__21406,map__21406__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__21406,map__21406__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__21406,map__21406__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj21413 = {"detail":url};
return obj21413;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__21414){
var map__21416 = p__21414;
var map__21416__$1 = ((cljs.core.seq_QMARK_.call(null,map__21416))?cljs.core.apply.call(null,cljs.core.hash_map,map__21416):map__21416);
var class$ = cljs.core.get.call(null,map__21416__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__21416__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__21417){
var map__21423 = p__21417;
var map__21423__$1 = ((cljs.core.seq_QMARK_.call(null,map__21423))?cljs.core.apply.call(null,cljs.core.hash_map,map__21423):map__21423);
var ed = map__21423__$1;
var exception_data = cljs.core.get.call(null,map__21423__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__21423__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__21424_21428 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__21425_21429 = null;
var count__21426_21430 = (0);
var i__21427_21431 = (0);
while(true){
if((i__21427_21431 < count__21426_21430)){
var msg_21432 = cljs.core._nth.call(null,chunk__21425_21429,i__21427_21431);
console.log(msg_21432);

var G__21433 = seq__21424_21428;
var G__21434 = chunk__21425_21429;
var G__21435 = count__21426_21430;
var G__21436 = (i__21427_21431 + (1));
seq__21424_21428 = G__21433;
chunk__21425_21429 = G__21434;
count__21426_21430 = G__21435;
i__21427_21431 = G__21436;
continue;
} else {
var temp__4126__auto___21437 = cljs.core.seq.call(null,seq__21424_21428);
if(temp__4126__auto___21437){
var seq__21424_21438__$1 = temp__4126__auto___21437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21424_21438__$1)){
var c__4586__auto___21439 = cljs.core.chunk_first.call(null,seq__21424_21438__$1);
var G__21440 = cljs.core.chunk_rest.call(null,seq__21424_21438__$1);
var G__21441 = c__4586__auto___21439;
var G__21442 = cljs.core.count.call(null,c__4586__auto___21439);
var G__21443 = (0);
seq__21424_21428 = G__21440;
chunk__21425_21429 = G__21441;
count__21426_21430 = G__21442;
i__21427_21431 = G__21443;
continue;
} else {
var msg_21444 = cljs.core.first.call(null,seq__21424_21438__$1);
console.log(msg_21444);

var G__21445 = cljs.core.next.call(null,seq__21424_21438__$1);
var G__21446 = null;
var G__21447 = (0);
var G__21448 = (0);
seq__21424_21428 = G__21445;
chunk__21425_21429 = G__21446;
count__21426_21430 = G__21447;
i__21427_21431 = G__21448;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: loading files");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){
if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton"))){
return null;
} else {
figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3799__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__21449){
var map__21451 = p__21449;
var map__21451__$1 = ((cljs.core.seq_QMARK_.call(null,map__21451))?cljs.core.apply.call(null,cljs.core.hash_map,map__21451):map__21451);
var opts = map__21451__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__21449 = null;
if (arguments.length > 0) {
var G__21452__i = 0, G__21452__a = new Array(arguments.length -  0);
while (G__21452__i < G__21452__a.length) {G__21452__a[G__21452__i] = arguments[G__21452__i + 0]; ++G__21452__i;}
  p__21449 = new cljs.core.IndexedSeq(G__21452__a,0);
} 
return watch_and_reload__delegate.call(this,p__21449);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__21453){
var p__21449 = cljs.core.seq(arglist__21453);
return watch_and_reload__delegate(p__21449);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map