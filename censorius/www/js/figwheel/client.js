// Compiled by ClojureScript 0.0-2665 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__21174,args){
var map__21176 = p__21174;
var map__21176__$1 = ((cljs.core.seq_QMARK_.call(null,map__21176))?cljs.core.apply.call(null,cljs.core.hash_map,map__21176):map__21176);
var debug = cljs.core.get.call(null,map__21176__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__21174,var_args){
var args = null;
if (arguments.length > 1) {
var G__21177__i = 0, G__21177__a = new Array(arguments.length -  1);
while (G__21177__i < G__21177__a.length) {G__21177__a[G__21177__i] = arguments[G__21177__i + 1]; ++G__21177__i;}
  args = new cljs.core.IndexedSeq(G__21177__a,0);
} 
return log__delegate.call(this,p__21174,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__21178){
var p__21174 = cljs.core.first(arglist__21178);
var args = cljs.core.rest(arglist__21178);
return log__delegate(p__21174,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__21179){
var map__21181 = p__21179;
var map__21181__$1 = ((cljs.core.seq_QMARK_.call(null,map__21181))?cljs.core.apply.call(null,cljs.core.hash_map,map__21181):map__21181);
var websocket_url = cljs.core.get.call(null,map__21181__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__21182,callback){
var map__21184 = p__21182;
var map__21184__$1 = ((cljs.core.seq_QMARK_.call(null,map__21184))?cljs.core.apply.call(null,cljs.core.hash_map,map__21184):map__21184);
var msg = map__21184__$1;
var dependency_file = cljs.core.get.call(null,map__21184__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__21184__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__21184__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__3799__auto__ = dependency_file;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__21184,map__21184__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__21184,map__21184__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__21185,p__21186){
var map__21189 = p__21185;
var map__21189__$1 = ((cljs.core.seq_QMARK_.call(null,map__21189))?cljs.core.apply.call(null,cljs.core.hash_map,map__21189):map__21189);
var opts = map__21189__$1;
var url_rewriter = cljs.core.get.call(null,map__21189__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__21190 = p__21186;
var map__21190__$1 = ((cljs.core.seq_QMARK_.call(null,map__21190))?cljs.core.apply.call(null,cljs.core.hash_map,map__21190):map__21190);
var d = map__21190__$1;
var file = cljs.core.get.call(null,map__21190__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__21191,p__21192){
var map__21234 = p__21191;
var map__21234__$1 = ((cljs.core.seq_QMARK_.call(null,map__21234))?cljs.core.apply.call(null,cljs.core.hash_map,map__21234):map__21234);
var opts = map__21234__$1;
var on_jsload = cljs.core.get.call(null,map__21234__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__21234__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__21235 = p__21192;
var map__21235__$1 = ((cljs.core.seq_QMARK_.call(null,map__21235))?cljs.core.apply.call(null,cljs.core.hash_map,map__21235):map__21235);
var files = cljs.core.get.call(null,map__21235__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto__,map__21234,map__21234__$1,opts,on_jsload,before_jsload,map__21235,map__21235__$1,files){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto__,map__21234,map__21234__$1,opts,on_jsload,before_jsload,map__21235,map__21235__$1,files){
return (function (state_21258){
var state_val_21259 = (state_21258[(1)]);
if((state_val_21259 === (6))){
var inst_21240 = (state_21258[(7)]);
var inst_21249 = (state_21258[(2)]);
var inst_21250 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21251 = [inst_21240];
var inst_21252 = (new cljs.core.PersistentVector(null,1,(5),inst_21250,inst_21251,null));
var inst_21253 = cljs.core.apply.call(null,on_jsload,inst_21252);
var state_21258__$1 = (function (){var statearr_21260 = state_21258;
(statearr_21260[(8)] = inst_21249);

return statearr_21260;
})();
var statearr_21261_21275 = state_21258__$1;
(statearr_21261_21275[(2)] = inst_21253);

(statearr_21261_21275[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (5))){
var inst_21256 = (state_21258[(2)]);
var state_21258__$1 = state_21258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21258__$1,inst_21256);
} else {
if((state_val_21259 === (4))){
var state_21258__$1 = state_21258;
var statearr_21262_21276 = state_21258__$1;
(statearr_21262_21276[(2)] = null);

(statearr_21262_21276[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (3))){
var inst_21240 = (state_21258[(7)]);
var inst_21243 = console.debug("Figwheel: loaded these files");
var inst_21244 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21240);
var inst_21245 = cljs.core.prn_str.call(null,inst_21244);
var inst_21246 = console.log(inst_21245);
var inst_21247 = cljs.core.async.timeout.call(null,(10));
var state_21258__$1 = (function (){var statearr_21263 = state_21258;
(statearr_21263[(9)] = inst_21246);

(statearr_21263[(10)] = inst_21243);

return statearr_21263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21258__$1,(6),inst_21247);
} else {
if((state_val_21259 === (2))){
var inst_21240 = (state_21258[(7)]);
var inst_21240__$1 = (state_21258[(2)]);
var inst_21241 = cljs.core.not_empty.call(null,inst_21240__$1);
var state_21258__$1 = (function (){var statearr_21264 = state_21258;
(statearr_21264[(7)] = inst_21240__$1);

return statearr_21264;
})();
if(cljs.core.truth_(inst_21241)){
var statearr_21265_21277 = state_21258__$1;
(statearr_21265_21277[(1)] = (3));

} else {
var statearr_21266_21278 = state_21258__$1;
(statearr_21266_21278[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (1))){
var inst_21236 = before_jsload.call(null,files);
var inst_21237 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_21238 = figwheel.client.load_all_js_files.call(null,inst_21237);
var state_21258__$1 = (function (){var statearr_21267 = state_21258;
(statearr_21267[(11)] = inst_21236);

return statearr_21267;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21258__$1,(2),inst_21238);
} else {
return null;
}
}
}
}
}
}
});})(c__6777__auto__,map__21234,map__21234__$1,opts,on_jsload,before_jsload,map__21235,map__21235__$1,files))
;
return ((function (switch__6721__auto__,c__6777__auto__,map__21234,map__21234__$1,opts,on_jsload,before_jsload,map__21235,map__21235__$1,files){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_21271 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21271[(0)] = state_machine__6722__auto__);

(statearr_21271[(1)] = (1));

return statearr_21271;
});
var state_machine__6722__auto____1 = (function (state_21258){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_21258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e21272){if((e21272 instanceof Object)){
var ex__6725__auto__ = e21272;
var statearr_21273_21279 = state_21258;
(statearr_21273_21279[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21280 = state_21258;
state_21258 = G__21280;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_21258){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_21258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__,map__21234,map__21234__$1,opts,on_jsload,before_jsload,map__21235,map__21235__$1,files))
})();
var state__6779__auto__ = (function (){var statearr_21274 = f__6778__auto__.call(null);
(statearr_21274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_21274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto__,map__21234,map__21234__$1,opts,on_jsload,before_jsload,map__21235,map__21235__$1,files))
);

return c__6777__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__21281,link_href){
var map__21283 = p__21281;
var map__21283__$1 = ((cljs.core.seq_QMARK_.call(null,map__21283))?cljs.core.apply.call(null,cljs.core.hash_map,map__21283):map__21283);
var request_url = cljs.core.get.call(null,map__21283__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__21283__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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

var c__6777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto__,parent){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto__,parent){
return (function (state_21304){
var state_val_21305 = (state_21304[(1)]);
if((state_val_21305 === (2))){
var inst_21301 = (state_21304[(2)]);
var inst_21302 = parent.removeChild(orig_link);
var state_21304__$1 = (function (){var statearr_21306 = state_21304;
(statearr_21306[(7)] = inst_21301);

return statearr_21306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21304__$1,inst_21302);
} else {
if((state_val_21305 === (1))){
var inst_21299 = cljs.core.async.timeout.call(null,(200));
var state_21304__$1 = state_21304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21304__$1,(2),inst_21299);
} else {
return null;
}
}
});})(c__6777__auto__,parent))
;
return ((function (switch__6721__auto__,c__6777__auto__,parent){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_21310 = [null,null,null,null,null,null,null,null];
(statearr_21310[(0)] = state_machine__6722__auto__);

(statearr_21310[(1)] = (1));

return statearr_21310;
});
var state_machine__6722__auto____1 = (function (state_21304){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_21304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e21311){if((e21311 instanceof Object)){
var ex__6725__auto__ = e21311;
var statearr_21312_21314 = state_21304;
(statearr_21312_21314[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21315 = state_21304;
state_21304 = G__21315;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_21304){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_21304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__,parent))
})();
var state__6779__auto__ = (function (){var statearr_21313 = f__6778__auto__.call(null);
(statearr_21313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_21313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto__,parent))
);

return c__6777__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__21316){
var map__21318 = p__21316;
var map__21318__$1 = ((cljs.core.seq_QMARK_.call(null,map__21318))?cljs.core.apply.call(null,cljs.core.hash_map,map__21318):map__21318);
var f_data = map__21318__$1;
var request_url = cljs.core.get.call(null,map__21318__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__21318__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__21319,files_msg){
var map__21341 = p__21319;
var map__21341__$1 = ((cljs.core.seq_QMARK_.call(null,map__21341))?cljs.core.apply.call(null,cljs.core.hash_map,map__21341):map__21341);
var opts = map__21341__$1;
var on_cssload = cljs.core.get.call(null,map__21341__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__21342_21362 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__21343_21363 = null;
var count__21344_21364 = (0);
var i__21345_21365 = (0);
while(true){
if((i__21345_21365 < count__21344_21364)){
var f_21366 = cljs.core._nth.call(null,chunk__21343_21363,i__21345_21365);
figwheel.client.reload_css_file.call(null,f_21366);

var G__21367 = seq__21342_21362;
var G__21368 = chunk__21343_21363;
var G__21369 = count__21344_21364;
var G__21370 = (i__21345_21365 + (1));
seq__21342_21362 = G__21367;
chunk__21343_21363 = G__21368;
count__21344_21364 = G__21369;
i__21345_21365 = G__21370;
continue;
} else {
var temp__4126__auto___21371 = cljs.core.seq.call(null,seq__21342_21362);
if(temp__4126__auto___21371){
var seq__21342_21372__$1 = temp__4126__auto___21371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21342_21372__$1)){
var c__4586__auto___21373 = cljs.core.chunk_first.call(null,seq__21342_21372__$1);
var G__21374 = cljs.core.chunk_rest.call(null,seq__21342_21372__$1);
var G__21375 = c__4586__auto___21373;
var G__21376 = cljs.core.count.call(null,c__4586__auto___21373);
var G__21377 = (0);
seq__21342_21362 = G__21374;
chunk__21343_21363 = G__21375;
count__21344_21364 = G__21376;
i__21345_21365 = G__21377;
continue;
} else {
var f_21378 = cljs.core.first.call(null,seq__21342_21372__$1);
figwheel.client.reload_css_file.call(null,f_21378);

var G__21379 = cljs.core.next.call(null,seq__21342_21372__$1);
var G__21380 = null;
var G__21381 = (0);
var G__21382 = (0);
seq__21342_21362 = G__21379;
chunk__21343_21363 = G__21380;
count__21344_21364 = G__21381;
i__21345_21365 = G__21382;
continue;
}
} else {
}
}
break;
}

var c__6777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto__,map__21341,map__21341__$1,opts,on_cssload){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto__,map__21341,map__21341__$1,opts,on_cssload){
return (function (state_21352){
var state_val_21353 = (state_21352[(1)]);
if((state_val_21353 === (2))){
var inst_21348 = (state_21352[(2)]);
var inst_21349 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_21350 = on_cssload.call(null,inst_21349);
var state_21352__$1 = (function (){var statearr_21354 = state_21352;
(statearr_21354[(7)] = inst_21348);

return statearr_21354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21352__$1,inst_21350);
} else {
if((state_val_21353 === (1))){
var inst_21346 = cljs.core.async.timeout.call(null,(100));
var state_21352__$1 = state_21352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21352__$1,(2),inst_21346);
} else {
return null;
}
}
});})(c__6777__auto__,map__21341,map__21341__$1,opts,on_cssload))
;
return ((function (switch__6721__auto__,c__6777__auto__,map__21341,map__21341__$1,opts,on_cssload){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_21358 = [null,null,null,null,null,null,null,null];
(statearr_21358[(0)] = state_machine__6722__auto__);

(statearr_21358[(1)] = (1));

return statearr_21358;
});
var state_machine__6722__auto____1 = (function (state_21352){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_21352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e21359){if((e21359 instanceof Object)){
var ex__6725__auto__ = e21359;
var statearr_21360_21383 = state_21352;
(statearr_21360_21383[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21384 = state_21352;
state_21352 = G__21384;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_21352){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_21352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__,map__21341,map__21341__$1,opts,on_cssload))
})();
var state__6779__auto__ = (function (){var statearr_21361 = f__6778__auto__.call(null);
(statearr_21361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_21361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto__,map__21341,map__21341__$1,opts,on_cssload))
);

return c__6777__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__21385){
var map__21390 = p__21385;
var map__21390__$1 = ((cljs.core.seq_QMARK_.call(null,map__21390))?cljs.core.apply.call(null,cljs.core.hash_map,map__21390):map__21390);
var opts = map__21390__$1;
var on_compile_fail = cljs.core.get.call(null,map__21390__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__21390__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__21390__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__21390__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__21390,map__21390__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__21391 = cljs.core._EQ_;
var expr__21392 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__21391.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__21392))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__21391.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__21392))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__21391.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__21392))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__21390,map__21390__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__21390,map__21390__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__21390,map__21390__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__21390,map__21390__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__21390,map__21390__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__21390,map__21390__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__21390,map__21390__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__21390,map__21390__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__21390,map__21390__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj21397 = {"detail":url};
return obj21397;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__21398){
var map__21400 = p__21398;
var map__21400__$1 = ((cljs.core.seq_QMARK_.call(null,map__21400))?cljs.core.apply.call(null,cljs.core.hash_map,map__21400):map__21400);
var class$ = cljs.core.get.call(null,map__21400__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__21400__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__21401){
var map__21407 = p__21401;
var map__21407__$1 = ((cljs.core.seq_QMARK_.call(null,map__21407))?cljs.core.apply.call(null,cljs.core.hash_map,map__21407):map__21407);
var ed = map__21407__$1;
var exception_data = cljs.core.get.call(null,map__21407__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__21407__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__21408_21412 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__21409_21413 = null;
var count__21410_21414 = (0);
var i__21411_21415 = (0);
while(true){
if((i__21411_21415 < count__21410_21414)){
var msg_21416 = cljs.core._nth.call(null,chunk__21409_21413,i__21411_21415);
console.log(msg_21416);

var G__21417 = seq__21408_21412;
var G__21418 = chunk__21409_21413;
var G__21419 = count__21410_21414;
var G__21420 = (i__21411_21415 + (1));
seq__21408_21412 = G__21417;
chunk__21409_21413 = G__21418;
count__21410_21414 = G__21419;
i__21411_21415 = G__21420;
continue;
} else {
var temp__4126__auto___21421 = cljs.core.seq.call(null,seq__21408_21412);
if(temp__4126__auto___21421){
var seq__21408_21422__$1 = temp__4126__auto___21421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21408_21422__$1)){
var c__4586__auto___21423 = cljs.core.chunk_first.call(null,seq__21408_21422__$1);
var G__21424 = cljs.core.chunk_rest.call(null,seq__21408_21422__$1);
var G__21425 = c__4586__auto___21423;
var G__21426 = cljs.core.count.call(null,c__4586__auto___21423);
var G__21427 = (0);
seq__21408_21412 = G__21424;
chunk__21409_21413 = G__21425;
count__21410_21414 = G__21426;
i__21411_21415 = G__21427;
continue;
} else {
var msg_21428 = cljs.core.first.call(null,seq__21408_21422__$1);
console.log(msg_21428);

var G__21429 = cljs.core.next.call(null,seq__21408_21422__$1);
var G__21430 = null;
var G__21431 = (0);
var G__21432 = (0);
seq__21408_21412 = G__21429;
chunk__21409_21413 = G__21430;
count__21410_21414 = G__21431;
i__21411_21415 = G__21432;
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
var watch_and_reload__delegate = function (p__21433){
var map__21435 = p__21433;
var map__21435__$1 = ((cljs.core.seq_QMARK_.call(null,map__21435))?cljs.core.apply.call(null,cljs.core.hash_map,map__21435):map__21435);
var opts = map__21435__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__21433 = null;
if (arguments.length > 0) {
var G__21436__i = 0, G__21436__a = new Array(arguments.length -  0);
while (G__21436__i < G__21436__a.length) {G__21436__a[G__21436__i] = arguments[G__21436__i + 0]; ++G__21436__i;}
  p__21433 = new cljs.core.IndexedSeq(G__21436__a,0);
} 
return watch_and_reload__delegate.call(this,p__21433);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__21437){
var p__21433 = cljs.core.seq(arglist__21437);
return watch_and_reload__delegate(p__21433);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
