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
var log__delegate = function (p__21176,args){
var map__21178 = p__21176;
var map__21178__$1 = ((cljs.core.seq_QMARK_.call(null,map__21178))?cljs.core.apply.call(null,cljs.core.hash_map,map__21178):map__21178);
var debug = cljs.core.get.call(null,map__21178__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__21176,var_args){
var args = null;
if (arguments.length > 1) {
var G__21179__i = 0, G__21179__a = new Array(arguments.length -  1);
while (G__21179__i < G__21179__a.length) {G__21179__a[G__21179__i] = arguments[G__21179__i + 1]; ++G__21179__i;}
  args = new cljs.core.IndexedSeq(G__21179__a,0);
} 
return log__delegate.call(this,p__21176,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__21180){
var p__21176 = cljs.core.first(arglist__21180);
var args = cljs.core.rest(arglist__21180);
return log__delegate(p__21176,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__21181){
var map__21183 = p__21181;
var map__21183__$1 = ((cljs.core.seq_QMARK_.call(null,map__21183))?cljs.core.apply.call(null,cljs.core.hash_map,map__21183):map__21183);
var websocket_url = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__21184,callback){
var map__21186 = p__21184;
var map__21186__$1 = ((cljs.core.seq_QMARK_.call(null,map__21186))?cljs.core.apply.call(null,cljs.core.hash_map,map__21186):map__21186);
var msg = map__21186__$1;
var dependency_file = cljs.core.get.call(null,map__21186__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__21186__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__21186__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__3799__auto__ = dependency_file;
if(cljs.core.truth_(or__3799__auto__)){
return or__3799__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__21186,map__21186__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__21186,map__21186__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__21187,p__21188){
var map__21191 = p__21187;
var map__21191__$1 = ((cljs.core.seq_QMARK_.call(null,map__21191))?cljs.core.apply.call(null,cljs.core.hash_map,map__21191):map__21191);
var opts = map__21191__$1;
var url_rewriter = cljs.core.get.call(null,map__21191__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__21192 = p__21188;
var map__21192__$1 = ((cljs.core.seq_QMARK_.call(null,map__21192))?cljs.core.apply.call(null,cljs.core.hash_map,map__21192):map__21192);
var d = map__21192__$1;
var file = cljs.core.get.call(null,map__21192__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__21193,p__21194){
var map__21236 = p__21193;
var map__21236__$1 = ((cljs.core.seq_QMARK_.call(null,map__21236))?cljs.core.apply.call(null,cljs.core.hash_map,map__21236):map__21236);
var opts = map__21236__$1;
var on_jsload = cljs.core.get.call(null,map__21236__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__21236__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__21237 = p__21194;
var map__21237__$1 = ((cljs.core.seq_QMARK_.call(null,map__21237))?cljs.core.apply.call(null,cljs.core.hash_map,map__21237):map__21237);
var files = cljs.core.get.call(null,map__21237__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto__,map__21236,map__21236__$1,opts,on_jsload,before_jsload,map__21237,map__21237__$1,files){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto__,map__21236,map__21236__$1,opts,on_jsload,before_jsload,map__21237,map__21237__$1,files){
return (function (state_21260){
var state_val_21261 = (state_21260[(1)]);
if((state_val_21261 === (6))){
var inst_21242 = (state_21260[(7)]);
var inst_21251 = (state_21260[(2)]);
var inst_21252 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21253 = [inst_21242];
var inst_21254 = (new cljs.core.PersistentVector(null,1,(5),inst_21252,inst_21253,null));
var inst_21255 = cljs.core.apply.call(null,on_jsload,inst_21254);
var state_21260__$1 = (function (){var statearr_21262 = state_21260;
(statearr_21262[(8)] = inst_21251);

return statearr_21262;
})();
var statearr_21263_21277 = state_21260__$1;
(statearr_21263_21277[(2)] = inst_21255);

(statearr_21263_21277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21261 === (5))){
var inst_21258 = (state_21260[(2)]);
var state_21260__$1 = state_21260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21260__$1,inst_21258);
} else {
if((state_val_21261 === (4))){
var state_21260__$1 = state_21260;
var statearr_21264_21278 = state_21260__$1;
(statearr_21264_21278[(2)] = null);

(statearr_21264_21278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21261 === (3))){
var inst_21242 = (state_21260[(7)]);
var inst_21245 = console.debug("Figwheel: loaded these files");
var inst_21246 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21242);
var inst_21247 = cljs.core.prn_str.call(null,inst_21246);
var inst_21248 = console.log(inst_21247);
var inst_21249 = cljs.core.async.timeout.call(null,(10));
var state_21260__$1 = (function (){var statearr_21265 = state_21260;
(statearr_21265[(9)] = inst_21248);

(statearr_21265[(10)] = inst_21245);

return statearr_21265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21260__$1,(6),inst_21249);
} else {
if((state_val_21261 === (2))){
var inst_21242 = (state_21260[(7)]);
var inst_21242__$1 = (state_21260[(2)]);
var inst_21243 = cljs.core.not_empty.call(null,inst_21242__$1);
var state_21260__$1 = (function (){var statearr_21266 = state_21260;
(statearr_21266[(7)] = inst_21242__$1);

return statearr_21266;
})();
if(cljs.core.truth_(inst_21243)){
var statearr_21267_21279 = state_21260__$1;
(statearr_21267_21279[(1)] = (3));

} else {
var statearr_21268_21280 = state_21260__$1;
(statearr_21268_21280[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21261 === (1))){
var inst_21238 = before_jsload.call(null,files);
var inst_21239 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_21240 = figwheel.client.load_all_js_files.call(null,inst_21239);
var state_21260__$1 = (function (){var statearr_21269 = state_21260;
(statearr_21269[(11)] = inst_21238);

return statearr_21269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21260__$1,(2),inst_21240);
} else {
return null;
}
}
}
}
}
}
});})(c__6777__auto__,map__21236,map__21236__$1,opts,on_jsload,before_jsload,map__21237,map__21237__$1,files))
;
return ((function (switch__6721__auto__,c__6777__auto__,map__21236,map__21236__$1,opts,on_jsload,before_jsload,map__21237,map__21237__$1,files){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_21273 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21273[(0)] = state_machine__6722__auto__);

(statearr_21273[(1)] = (1));

return statearr_21273;
});
var state_machine__6722__auto____1 = (function (state_21260){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_21260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e21274){if((e21274 instanceof Object)){
var ex__6725__auto__ = e21274;
var statearr_21275_21281 = state_21260;
(statearr_21275_21281[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21282 = state_21260;
state_21260 = G__21282;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_21260){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_21260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__,map__21236,map__21236__$1,opts,on_jsload,before_jsload,map__21237,map__21237__$1,files))
})();
var state__6779__auto__ = (function (){var statearr_21276 = f__6778__auto__.call(null);
(statearr_21276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_21276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto__,map__21236,map__21236__$1,opts,on_jsload,before_jsload,map__21237,map__21237__$1,files))
);

return c__6777__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__21283,link_href){
var map__21285 = p__21283;
var map__21285__$1 = ((cljs.core.seq_QMARK_.call(null,map__21285))?cljs.core.apply.call(null,cljs.core.hash_map,map__21285):map__21285);
var request_url = cljs.core.get.call(null,map__21285__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__21285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
return (function (state_21306){
var state_val_21307 = (state_21306[(1)]);
if((state_val_21307 === (2))){
var inst_21303 = (state_21306[(2)]);
var inst_21304 = parent.removeChild(orig_link);
var state_21306__$1 = (function (){var statearr_21308 = state_21306;
(statearr_21308[(7)] = inst_21303);

return statearr_21308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21306__$1,inst_21304);
} else {
if((state_val_21307 === (1))){
var inst_21301 = cljs.core.async.timeout.call(null,(200));
var state_21306__$1 = state_21306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21306__$1,(2),inst_21301);
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
var statearr_21312 = [null,null,null,null,null,null,null,null];
(statearr_21312[(0)] = state_machine__6722__auto__);

(statearr_21312[(1)] = (1));

return statearr_21312;
});
var state_machine__6722__auto____1 = (function (state_21306){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_21306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e21313){if((e21313 instanceof Object)){
var ex__6725__auto__ = e21313;
var statearr_21314_21316 = state_21306;
(statearr_21314_21316[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21317 = state_21306;
state_21306 = G__21317;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_21306){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_21306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__,parent))
})();
var state__6779__auto__ = (function (){var statearr_21315 = f__6778__auto__.call(null);
(statearr_21315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_21315;
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
figwheel.client.reload_css_file = (function reload_css_file(p__21318){
var map__21320 = p__21318;
var map__21320__$1 = ((cljs.core.seq_QMARK_.call(null,map__21320))?cljs.core.apply.call(null,cljs.core.hash_map,map__21320):map__21320);
var f_data = map__21320__$1;
var request_url = cljs.core.get.call(null,map__21320__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__21320__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__21321,files_msg){
var map__21343 = p__21321;
var map__21343__$1 = ((cljs.core.seq_QMARK_.call(null,map__21343))?cljs.core.apply.call(null,cljs.core.hash_map,map__21343):map__21343);
var opts = map__21343__$1;
var on_cssload = cljs.core.get.call(null,map__21343__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__21344_21364 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__21345_21365 = null;
var count__21346_21366 = (0);
var i__21347_21367 = (0);
while(true){
if((i__21347_21367 < count__21346_21366)){
var f_21368 = cljs.core._nth.call(null,chunk__21345_21365,i__21347_21367);
figwheel.client.reload_css_file.call(null,f_21368);

var G__21369 = seq__21344_21364;
var G__21370 = chunk__21345_21365;
var G__21371 = count__21346_21366;
var G__21372 = (i__21347_21367 + (1));
seq__21344_21364 = G__21369;
chunk__21345_21365 = G__21370;
count__21346_21366 = G__21371;
i__21347_21367 = G__21372;
continue;
} else {
var temp__4126__auto___21373 = cljs.core.seq.call(null,seq__21344_21364);
if(temp__4126__auto___21373){
var seq__21344_21374__$1 = temp__4126__auto___21373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21344_21374__$1)){
var c__4586__auto___21375 = cljs.core.chunk_first.call(null,seq__21344_21374__$1);
var G__21376 = cljs.core.chunk_rest.call(null,seq__21344_21374__$1);
var G__21377 = c__4586__auto___21375;
var G__21378 = cljs.core.count.call(null,c__4586__auto___21375);
var G__21379 = (0);
seq__21344_21364 = G__21376;
chunk__21345_21365 = G__21377;
count__21346_21366 = G__21378;
i__21347_21367 = G__21379;
continue;
} else {
var f_21380 = cljs.core.first.call(null,seq__21344_21374__$1);
figwheel.client.reload_css_file.call(null,f_21380);

var G__21381 = cljs.core.next.call(null,seq__21344_21374__$1);
var G__21382 = null;
var G__21383 = (0);
var G__21384 = (0);
seq__21344_21364 = G__21381;
chunk__21345_21365 = G__21382;
count__21346_21366 = G__21383;
i__21347_21367 = G__21384;
continue;
}
} else {
}
}
break;
}

var c__6777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6777__auto__,map__21343,map__21343__$1,opts,on_cssload){
return (function (){
var f__6778__auto__ = (function (){var switch__6721__auto__ = ((function (c__6777__auto__,map__21343,map__21343__$1,opts,on_cssload){
return (function (state_21354){
var state_val_21355 = (state_21354[(1)]);
if((state_val_21355 === (2))){
var inst_21350 = (state_21354[(2)]);
var inst_21351 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_21352 = on_cssload.call(null,inst_21351);
var state_21354__$1 = (function (){var statearr_21356 = state_21354;
(statearr_21356[(7)] = inst_21350);

return statearr_21356;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21354__$1,inst_21352);
} else {
if((state_val_21355 === (1))){
var inst_21348 = cljs.core.async.timeout.call(null,(100));
var state_21354__$1 = state_21354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21354__$1,(2),inst_21348);
} else {
return null;
}
}
});})(c__6777__auto__,map__21343,map__21343__$1,opts,on_cssload))
;
return ((function (switch__6721__auto__,c__6777__auto__,map__21343,map__21343__$1,opts,on_cssload){
return (function() {
var state_machine__6722__auto__ = null;
var state_machine__6722__auto____0 = (function (){
var statearr_21360 = [null,null,null,null,null,null,null,null];
(statearr_21360[(0)] = state_machine__6722__auto__);

(statearr_21360[(1)] = (1));

return statearr_21360;
});
var state_machine__6722__auto____1 = (function (state_21354){
while(true){
var ret_value__6723__auto__ = (function (){try{while(true){
var result__6724__auto__ = switch__6721__auto__.call(null,state_21354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6724__auto__;
}
break;
}
}catch (e21361){if((e21361 instanceof Object)){
var ex__6725__auto__ = e21361;
var statearr_21362_21385 = state_21354;
(statearr_21362_21385[(5)] = ex__6725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21386 = state_21354;
state_21354 = G__21386;
continue;
} else {
return ret_value__6723__auto__;
}
break;
}
});
state_machine__6722__auto__ = function(state_21354){
switch(arguments.length){
case 0:
return state_machine__6722__auto____0.call(this);
case 1:
return state_machine__6722__auto____1.call(this,state_21354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6722__auto____0;
state_machine__6722__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6722__auto____1;
return state_machine__6722__auto__;
})()
;})(switch__6721__auto__,c__6777__auto__,map__21343,map__21343__$1,opts,on_cssload))
})();
var state__6779__auto__ = (function (){var statearr_21363 = f__6778__auto__.call(null);
(statearr_21363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6777__auto__);

return statearr_21363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6779__auto__);
});})(c__6777__auto__,map__21343,map__21343__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__21387){
var map__21392 = p__21387;
var map__21392__$1 = ((cljs.core.seq_QMARK_.call(null,map__21392))?cljs.core.apply.call(null,cljs.core.hash_map,map__21392):map__21392);
var opts = map__21392__$1;
var on_compile_fail = cljs.core.get.call(null,map__21392__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__21392__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__21392__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__21392__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__21392,map__21392__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__21393 = cljs.core._EQ_;
var expr__21394 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__21393.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__21394))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__21393.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__21394))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__21393.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__21394))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__21392,map__21392__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__21392,map__21392__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__21392,map__21392__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__21392,map__21392__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__21392,map__21392__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__21392,map__21392__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__21392,map__21392__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__21392,map__21392__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__21392,map__21392__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj21399 = {"detail":url};
return obj21399;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__21400){
var map__21402 = p__21400;
var map__21402__$1 = ((cljs.core.seq_QMARK_.call(null,map__21402))?cljs.core.apply.call(null,cljs.core.hash_map,map__21402):map__21402);
var class$ = cljs.core.get.call(null,map__21402__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__21402__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__21403){
var map__21409 = p__21403;
var map__21409__$1 = ((cljs.core.seq_QMARK_.call(null,map__21409))?cljs.core.apply.call(null,cljs.core.hash_map,map__21409):map__21409);
var ed = map__21409__$1;
var exception_data = cljs.core.get.call(null,map__21409__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__21409__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__21410_21414 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__21411_21415 = null;
var count__21412_21416 = (0);
var i__21413_21417 = (0);
while(true){
if((i__21413_21417 < count__21412_21416)){
var msg_21418 = cljs.core._nth.call(null,chunk__21411_21415,i__21413_21417);
console.log(msg_21418);

var G__21419 = seq__21410_21414;
var G__21420 = chunk__21411_21415;
var G__21421 = count__21412_21416;
var G__21422 = (i__21413_21417 + (1));
seq__21410_21414 = G__21419;
chunk__21411_21415 = G__21420;
count__21412_21416 = G__21421;
i__21413_21417 = G__21422;
continue;
} else {
var temp__4126__auto___21423 = cljs.core.seq.call(null,seq__21410_21414);
if(temp__4126__auto___21423){
var seq__21410_21424__$1 = temp__4126__auto___21423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21410_21424__$1)){
var c__4586__auto___21425 = cljs.core.chunk_first.call(null,seq__21410_21424__$1);
var G__21426 = cljs.core.chunk_rest.call(null,seq__21410_21424__$1);
var G__21427 = c__4586__auto___21425;
var G__21428 = cljs.core.count.call(null,c__4586__auto___21425);
var G__21429 = (0);
seq__21410_21414 = G__21426;
chunk__21411_21415 = G__21427;
count__21412_21416 = G__21428;
i__21413_21417 = G__21429;
continue;
} else {
var msg_21430 = cljs.core.first.call(null,seq__21410_21424__$1);
console.log(msg_21430);

var G__21431 = cljs.core.next.call(null,seq__21410_21424__$1);
var G__21432 = null;
var G__21433 = (0);
var G__21434 = (0);
seq__21410_21414 = G__21431;
chunk__21411_21415 = G__21432;
count__21412_21416 = G__21433;
i__21413_21417 = G__21434;
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
var watch_and_reload__delegate = function (p__21435){
var map__21437 = p__21435;
var map__21437__$1 = ((cljs.core.seq_QMARK_.call(null,map__21437))?cljs.core.apply.call(null,cljs.core.hash_map,map__21437):map__21437);
var opts = map__21437__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__21435 = null;
if (arguments.length > 0) {
var G__21438__i = 0, G__21438__a = new Array(arguments.length -  0);
while (G__21438__i < G__21438__a.length) {G__21438__a[G__21438__i] = arguments[G__21438__i + 0]; ++G__21438__i;}
  p__21435 = new cljs.core.IndexedSeq(G__21438__a,0);
} 
return watch_and_reload__delegate.call(this,p__21435);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__21439){
var p__21435 = cljs.core.seq(arglist__21439);
return watch_and_reload__delegate(p__21435);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
