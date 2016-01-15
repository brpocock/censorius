// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');

/**
 * @interface
 */
cljs.reader.PushbackReader = function(){};

/**
 * Returns the next char from the Reader,
 * nil if the end of stream has been reached
 */
cljs.reader.read_char = (function cljs$reader$read_char(reader){
if((!((reader == null))) && (!((reader.cljs$reader$PushbackReader$read_char$arity$1 == null)))){
return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else {
var x__6794__auto__ = (((reader == null))?null:reader);
var m__6795__auto__ = (cljs.reader.read_char[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,reader);
} else {
var m__6795__auto____$1 = (cljs.reader.read_char["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,reader);
} else {
throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
}
});

/**
 * Push back a single character on to the stream
 */
cljs.reader.unread = (function cljs$reader$unread(reader,ch){
if((!((reader == null))) && (!((reader.cljs$reader$PushbackReader$unread$arity$2 == null)))){
return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else {
var x__6794__auto__ = (((reader == null))?null:reader);
var m__6795__auto__ = (cljs.reader.unread[goog.typeOf(x__6794__auto__)]);
if(!((m__6795__auto__ == null))){
return m__6795__auto__.call(null,reader,ch);
} else {
var m__6795__auto____$1 = (cljs.reader.unread["_"]);
if(!((m__6795__auto____$1 == null))){
return m__6795__auto____$1.call(null,reader,ch);
} else {
throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
}
});


/**
* @constructor
 * @implements {cljs.reader.PushbackReader}
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var self__ = this;
var reader__$1 = this;
if((self__.buffer.length === (0))){
self__.idx = (self__.idx + (1));

return (self__.s[self__.idx]);
} else {
return self__.buffer.pop();
}
});

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
var reader__$1 = this;
return self__.buffer.push(ch);
});

cljs.reader.StringPushbackReader.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.reader.StringPushbackReader.cljs$lang$type = true;

cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";

cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__6737__auto__,writer__6738__auto__,opt__6739__auto__){
return cljs.core._write.call(null,writer__6738__auto__,"cljs.reader/StringPushbackReader");
});

cljs.reader.__GT_StringPushbackReader = (function cljs$reader$__GT_StringPushbackReader(s,buffer,idx){
return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});

cljs.reader.push_back_reader = (function cljs$reader$push_back_reader(s){

return (new cljs.reader.StringPushbackReader(s,[],(-1)));
});
/**
 * Checks whether a given character is whitespace
 */
cljs.reader.whitespace_QMARK_ = (function cljs$reader$whitespace_QMARK_(ch){
var or__6139__auto__ = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return ("," === ch);
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.reader.numeric_QMARK_ = (function cljs$reader$numeric_QMARK_(ch){
return goog.string.isNumeric(ch);
});
/**
 * Checks whether the character begins a comment.
 */
cljs.reader.comment_prefix_QMARK_ = (function cljs$reader$comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
 * Checks whether the reader is at the start of a number literal
 */
cljs.reader.number_literal_QMARK_ = (function cljs$reader$number_literal_QMARK_(reader,initch){
return (cljs.reader.numeric_QMARK_.call(null,initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch);

return next_ch;
})())));
});


cljs.reader.reader_error = (function cljs$reader$reader_error(var_args){
var args__7204__auto__ = [];
<<<<<<< HEAD
var len__7197__auto___54777 = arguments.length;
var i__7198__auto___54778 = (0);
while(true){
if((i__7198__auto___54778 < len__7197__auto___54777)){
args__7204__auto__.push((arguments[i__7198__auto___54778]));

var G__54779 = (i__7198__auto___54778 + (1));
i__7198__auto___54778 = G__54779;
=======
var len__7197__auto___12876 = arguments.length;
var i__7198__auto___12877 = (0);
while(true){
if((i__7198__auto___12877 < len__7197__auto___12876)){
args__7204__auto__.push((arguments[i__7198__auto___12877]));

var G__12878 = (i__7198__auto___12877 + (1));
i__7198__auto___12877 = G__12878;
>>>>>>> hotfix
continue;
} else {
}
break;
}

var argseq__7205__auto__ = ((((1) < args__7204__auto__.length))?(new cljs.core.IndexedSeq(args__7204__auto__.slice((1)),(0))):null);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7205__auto__);
});

cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msg){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
});

cljs.reader.reader_error.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
cljs.reader.reader_error.cljs$lang$applyTo = (function (seq54775){
var G__54776 = cljs.core.first.call(null,seq54775);
var seq54775__$1 = cljs.core.next.call(null,seq54775);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(G__54776,seq54775__$1);
=======
cljs.reader.reader_error.cljs$lang$applyTo = (function (seq12874){
var G__12875 = cljs.core.first.call(null,seq12874);
var seq12874__$1 = cljs.core.next.call(null,seq12874);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(G__12875,seq12874__$1);
>>>>>>> hotfix
});
cljs.reader.macro_terminating_QMARK_ = (function cljs$reader$macro_terminating_QMARK_(ch){
var and__6127__auto__ = !((ch === "#"));
if(and__6127__auto__){
var and__6127__auto____$1 = !((ch === "'"));
if(and__6127__auto____$1){
var and__6127__auto____$2 = !((ch === ":"));
if(and__6127__auto____$2){
return cljs.reader.macros.call(null,ch);
} else {
return and__6127__auto____$2;
}
} else {
return and__6127__auto____$1;
}
} else {
return and__6127__auto__;
}
});
cljs.reader.read_token = (function cljs$reader$read_token(rdr,initch){
var sb = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char.call(null,rdr);
while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_.call(null,ch)) || (cljs.reader.macro_terminating_QMARK_.call(null,ch))){
cljs.reader.unread.call(null,rdr,ch);

return sb.toString();
} else {
<<<<<<< HEAD
var G__54780 = (function (){
=======
var G__12879 = (function (){
>>>>>>> hotfix
sb.append(ch);

return sb;
})()
;
<<<<<<< HEAD
var G__54781 = cljs.reader.read_char.call(null,rdr);
sb = G__54780;
ch = G__54781;
=======
var G__12880 = cljs.reader.read_char.call(null,rdr);
sb = G__12879;
ch = G__12880;
>>>>>>> hotfix
continue;
}
break;
}
});
/**
 * Advances the reader to the end of a line. Returns the reader
 */
cljs.reader.skip_line = (function cljs$reader$skip_line(reader,_){
while(true){
var ch = cljs.reader.read_char.call(null,reader);
if(((ch === "\n")) || ((ch === "\r")) || ((ch == null))){
return reader;
} else {
continue;
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function cljs$reader$re_matches_STAR_(re,s){
var matches = re.exec(s);
if((!((matches == null))) && (((matches[(0)]) === s))){
if((matches.length === (1))){
return (matches[(0)]);
} else {
return matches;
}
} else {
return null;
}
});
cljs.reader.match_int = (function cljs$reader$match_int(s){
var groups = cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s);
var ie8_fix = (groups[(2)]);
var zero = ((cljs.core._EQ_.call(null,ie8_fix,""))?null:ie8_fix);
if(!((zero == null))){
return (0);
} else {
var a = (cljs.core.truth_((groups[(3)]))?[(groups[(3)]),(10)]:(cljs.core.truth_((groups[(4)]))?[(groups[(4)]),(16)]:(cljs.core.truth_((groups[(5)]))?[(groups[(5)]),(8)]:(cljs.core.truth_((groups[(6)]))?[(groups[(7)]),parseInt((groups[(6)]),(10))]:[null,null]
))));
var n = (a[(0)]);
var radix = (a[(1)]);
if((n == null)){
return null;
} else {
var parsed = parseInt(n,radix);
if(("-" === (groups[(1)]))){
return (- parsed);
} else {
return parsed;
}
}
}
});
cljs.reader.match_ratio = (function cljs$reader$match_ratio(s){
var groups = cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator = (groups[(1)]);
var denominator = (groups[(2)]);
return (parseInt(numinator,(10)) / parseInt(denominator,(10)));
});
cljs.reader.match_float = (function cljs$reader$match_float(s){
return parseFloat(s);
});
cljs.reader.match_number = (function cljs$reader$match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s))){
return cljs.reader.match_int.call(null,s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s))){
return cljs.reader.match_ratio.call(null,s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s))){
return cljs.reader.match_float.call(null,s);
} else {
return null;
}
}
}
});
cljs.reader.escape_char_map = (function cljs$reader$escape_char_map(c){
if((c === "t")){
return "\t";
} else {
if((c === "r")){
return "\r";
} else {
if((c === "n")){
return "\n";
} else {
if((c === "\\")){
return "\\";
} else {
if((c === "\"")){
return "\"";
} else {
if((c === "b")){
return "\b";
} else {
if((c === "f")){
return "\f";
} else {
return null;

}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function cljs$reader$read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.read_4_chars = (function cljs$reader$read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function cljs$reader$validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str))){
return unicode_str;
} else {
return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
cljs.reader.make_unicode_char = (function cljs$reader$make_unicode_char(code_str){
var code = parseInt(code_str,(16));
return String.fromCharCode(code);
});
cljs.reader.escape_char = (function cljs$reader$escape_char(buffer,reader){
var ch = cljs.reader.read_char.call(null,reader);
var mapresult = cljs.reader.escape_char_map.call(null,ch);
if(cljs.core.truth_(mapresult)){
return mapresult;
} else {
if((ch === "x")){
return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars.call(null,reader)));
} else {
if((ch === "u")){
return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars.call(null,reader)));
} else {
if(cljs.reader.numeric_QMARK_.call(null,ch)){
return String.fromCharCode(ch);
} else {
return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch);

}
}
}
}
});
/**
 * Read until first character that doesn't match pred, returning
 * char.
 */
cljs.reader.read_past = (function cljs$reader$read_past(pred,rdr){
var ch = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch))){
<<<<<<< HEAD
var G__54782 = cljs.reader.read_char.call(null,rdr);
ch = G__54782;
=======
var G__12881 = cljs.reader.read_char.call(null,rdr);
ch = G__12881;
>>>>>>> hotfix
continue;
} else {
return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function cljs$reader$read_delimited_list(delim,rdr,recursive_QMARK_){
var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}

if((delim === ch)){
return cljs.core.persistent_BANG_.call(null,a);
} else {
var temp__4423__auto__ = cljs.reader.macros.call(null,ch);
if(cljs.core.truth_(temp__4423__auto__)){
var macrofn = temp__4423__auto__;
var mret = macrofn.call(null,rdr,ch);
<<<<<<< HEAD
var G__54783 = (((mret === rdr))?a:cljs.core.conj_BANG_.call(null,a,mret));
a = G__54783;
=======
var G__12882 = (((mret === rdr))?a:cljs.core.conj_BANG_.call(null,a,mret));
a = G__12882;
>>>>>>> hotfix
continue;
} else {
cljs.reader.unread.call(null,rdr,ch);

var o = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
<<<<<<< HEAD
var G__54784 = (((o === rdr))?a:cljs.core.conj_BANG_.call(null,a,o));
a = G__54784;
=======
var G__12883 = (((o === rdr))?a:cljs.core.conj_BANG_.call(null,a,o));
a = G__12883;
>>>>>>> hotfix
continue;
}
}
break;
}
});
cljs.reader.not_implemented = (function cljs$reader$not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function cljs$reader$read_dispatch(rdr,_){
var ch = cljs.reader.read_char.call(null,rdr);
var dm = cljs.reader.dispatch_macros.call(null,ch);
if(cljs.core.truth_(dm)){
return dm.call(null,rdr,_);
} else {
var temp__4423__auto__ = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch);
if(cljs.core.truth_(temp__4423__auto__)){
var obj = temp__4423__auto__;
return obj;
} else {
return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch);
}
}
});
cljs.reader.read_unmatched_delimiter = (function cljs$reader$read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
});
cljs.reader.read_list = (function cljs$reader$read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function cljs$reader$read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function cljs$reader$read_map(rdr,_){
var l = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l))){
cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else {
}

return cljs.core.apply.call(null,cljs.core.hash_map,l);
});
cljs.reader.read_number = (function cljs$reader$read_number(reader,initch){
var buffer = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__6139__auto__ = (ch == null);
if(or__6139__auto__){
return or__6139__auto__;
} else {
var or__6139__auto____$1 = cljs.reader.whitespace_QMARK_.call(null,ch);
if(or__6139__auto____$1){
return or__6139__auto____$1;
} else {
return cljs.reader.macros.call(null,ch);
}
}
})())){
cljs.reader.unread.call(null,reader,ch);

var s = buffer.toString();
var or__6139__auto__ = cljs.reader.match_number.call(null,s);
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else {
<<<<<<< HEAD
var G__54785 = (function (){
=======
var G__12884 = (function (){
>>>>>>> hotfix
buffer.append(ch);

return buffer;
})()
;
<<<<<<< HEAD
var G__54786 = cljs.reader.read_char.call(null,reader);
buffer = G__54785;
ch = G__54786;
=======
var G__12885 = cljs.reader.read_char.call(null,reader);
buffer = G__12884;
ch = G__12885;
>>>>>>> hotfix
continue;
}
break;
}
});
cljs.reader.read_string_STAR_ = (function cljs$reader$read_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char.call(null,reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else {
if(("\\" === ch)){
<<<<<<< HEAD
var G__54787 = (function (){
=======
var G__12886 = (function (){
>>>>>>> hotfix
buffer.append(cljs.reader.escape_char.call(null,buffer,reader));

return buffer;
})()
;
<<<<<<< HEAD
var G__54788 = cljs.reader.read_char.call(null,reader);
buffer = G__54787;
ch = G__54788;
=======
var G__12887 = cljs.reader.read_char.call(null,reader);
buffer = G__12886;
ch = G__12887;
>>>>>>> hotfix
continue;
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
<<<<<<< HEAD
var G__54789 = (function (){
=======
var G__12888 = (function (){
>>>>>>> hotfix
buffer.append(ch);

return buffer;
})()
;
<<<<<<< HEAD
var G__54790 = cljs.reader.read_char.call(null,reader);
buffer = G__54789;
ch = G__54790;
=======
var G__12889 = cljs.reader.read_char.call(null,reader);
buffer = G__12888;
ch = G__12889;
>>>>>>> hotfix
continue;

}
}
}
break;
}
});
cljs.reader.read_raw_string_STAR_ = (function cljs$reader$read_raw_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char.call(null,reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else {
if(("\\" === ch)){
buffer.append(ch);

var nch = cljs.reader.read_char.call(null,reader);
if((nch == null)){
return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else {
<<<<<<< HEAD
var G__54795 = (function (){var G__54793 = buffer;
G__54793.append(nch);

return G__54793;
})();
var G__54796 = cljs.reader.read_char.call(null,reader);
buffer = G__54795;
ch = G__54796;
=======
var G__12894 = (function (){var G__12892 = buffer;
G__12892.append(nch);

return G__12892;
})();
var G__12895 = cljs.reader.read_char.call(null,reader);
buffer = G__12894;
ch = G__12895;
>>>>>>> hotfix
continue;
}
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
<<<<<<< HEAD
var G__54797 = (function (){var G__54794 = buffer;
G__54794.append(ch);

return G__54794;
})();
var G__54798 = cljs.reader.read_char.call(null,reader);
buffer = G__54797;
ch = G__54798;
=======
var G__12896 = (function (){var G__12893 = buffer;
G__12893.append(ch);

return G__12893;
})();
var G__12897 = cljs.reader.read_char.call(null,reader);
buffer = G__12896;
ch = G__12897;
>>>>>>> hotfix
continue;

}
}
}
break;
}
});
cljs.reader.special_symbols = (function cljs$reader$special_symbols(t,not_found){
if((t === "nil")){
return null;
} else {
if((t === "true")){
return true;
} else {
if((t === "false")){
return false;
} else {
if((t === "/")){
return new cljs.core.Symbol(null,"/","/",-1371932971,null);
} else {
return not_found;

}
}
}
}
});
cljs.reader.read_symbol = (function cljs$reader$read_symbol(reader,initch){
var token = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_((function (){var and__6127__auto__ = goog.string.contains(token,"/");
if(cljs.core.truth_(and__6127__auto__)){
return !((token.length === (1)));
} else {
return and__6127__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.subs.call(null,token,(0),token.indexOf("/")),cljs.core.subs.call(null,token,(token.indexOf("/") + (1)),token.length));
} else {
return cljs.reader.special_symbols.call(null,token,cljs.core.symbol.call(null,token));
}
});
cljs.reader.read_literal = (function cljs$reader$read_literal(rdr,ch){
var token = cljs.reader.read_token.call(null,rdr,ch);
var chars = cljs.core.subs.call(null,token,(1));
if((chars.length === (1))){
return chars;
} else {
if((chars === "tab")){
return "\t";
} else {
if((chars === "return")){
return "\r";
} else {
if((chars === "newline")){
return "\n";
} else {
if((chars === "space")){
return " ";
} else {
if((chars === "backspace")){
return "\b";
} else {
if((chars === "formfeed")){
return "\f";
} else {
if((chars.charAt((0)) === "u")){
return cljs.reader.make_unicode_char.call(null,cljs.core.subs.call(null,chars,(1)));
} else {
if((chars.charAt((0)) === "o")){
return cljs.reader.not_implemented.call(null,rdr,token);
} else {
return cljs.reader.reader_error.call(null,rdr,"Unknown character literal: ",token);

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
cljs.reader.read_keyword = (function cljs$reader$read_keyword(reader,initch){
var token = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token);
var token__$1 = (a[(0)]);
var ns = (a[(1)]);
var name = (a[(2)]);
if(((!((void 0 === ns))) && ((ns.substring((ns.length - (2)),ns.length) === ":/"))) || (((name[(name.length - (1))]) === ":")) || (!((token__$1.indexOf("::",(1)) === (-1))))){
return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__$1);
} else {
if((!((ns == null))) && ((ns.length > (0)))){
return cljs.core.keyword.call(null,ns.substring((0),ns.indexOf("/")),name);
} else {
return cljs.core.keyword.call(null,token__$1);
}
}
});
cljs.reader.desugar_meta = (function cljs$reader$desugar_meta(f){
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else {
return f;

}
}
}
});
cljs.reader.wrapping_reader = (function cljs$reader$wrapping_reader(sym){
return (function (rdr,_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.reader.read.call(null,rdr,true,null,true)),sym);
});
});
cljs.reader.throwing_reader = (function cljs$reader$throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function cljs$reader$read_meta(rdr,_){
var m = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m)){
} else {
cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}

var o = cljs.reader.read.call(null,rdr,true,null,true);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || (o.cljs$core$IWithMeta$))?true:(((!o.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,o))){
return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m));
} else {
return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function cljs$reader$read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function cljs$reader$read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_raw_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function cljs$reader$read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);

return rdr;
});
cljs.reader.macros = (function cljs$reader$macros(c){
if((c === "\"")){
return cljs.reader.read_string_STAR_;
} else {
if((c === ":")){
return cljs.reader.read_keyword;
} else {
if((c === ";")){
return cljs.reader.read_comment;
} else {
if((c === "'")){
return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null));
} else {
if((c === "@")){
return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"deref","deref",1494944732,null));
} else {
if((c === "^")){
return cljs.reader.read_meta;
} else {
if((c === "`")){
return cljs.reader.not_implemented;
} else {
if((c === "~")){
return cljs.reader.not_implemented;
} else {
if((c === "(")){
return cljs.reader.read_list;
} else {
if((c === ")")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "[")){
return cljs.reader.read_vector;
} else {
if((c === "]")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "{")){
return cljs.reader.read_map;
} else {
if((c === "}")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "\\")){
return cljs.reader.read_literal;
} else {
if((c === "#")){
return cljs.reader.read_dispatch;
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
}
}
}
}
}
}
}
});
cljs.reader.dispatch_macros = (function cljs$reader$dispatch_macros(s){
if((s === "{")){
return cljs.reader.read_set;
} else {
if((s === "<")){
return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else {
if((s === "\"")){
return cljs.reader.read_regex;
} else {
if((s === "!")){
return cljs.reader.read_comment;
} else {
if((s === "_")){
return cljs.reader.read_discard;
} else {
return null;

}
}
}
}
}
});
/**
 * Reads the first object from a PushbackReader. Returns the object read.
 * If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
 * 
 * Only supports edn (similar to clojure.edn/read)
 */
cljs.reader.read = (function cljs$reader$read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch = cljs.reader.read_char.call(null,reader);
if((ch == null)){
if(cljs.core.truth_(eof_is_error)){
return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else {
return sentinel;
}
} else {
if(cljs.reader.whitespace_QMARK_.call(null,ch)){
<<<<<<< HEAD
var G__54801 = reader;
var G__54802 = eof_is_error;
var G__54803 = sentinel;
var G__54804 = is_recursive;
reader = G__54801;
eof_is_error = G__54802;
sentinel = G__54803;
is_recursive = G__54804;
continue;
} else {
if(cljs.reader.comment_prefix_QMARK_.call(null,ch)){
var G__54805 = cljs.reader.read_comment.call(null,reader,ch);
var G__54806 = eof_is_error;
var G__54807 = sentinel;
var G__54808 = is_recursive;
reader = G__54805;
eof_is_error = G__54806;
sentinel = G__54807;
is_recursive = G__54808;
=======
var G__12900 = reader;
var G__12901 = eof_is_error;
var G__12902 = sentinel;
var G__12903 = is_recursive;
reader = G__12900;
eof_is_error = G__12901;
sentinel = G__12902;
is_recursive = G__12903;
continue;
} else {
if(cljs.reader.comment_prefix_QMARK_.call(null,ch)){
var G__12904 = cljs.reader.read_comment.call(null,reader,ch);
var G__12905 = eof_is_error;
var G__12906 = sentinel;
var G__12907 = is_recursive;
reader = G__12904;
eof_is_error = G__12905;
sentinel = G__12906;
is_recursive = G__12907;
>>>>>>> hotfix
continue;
} else {
var f = cljs.reader.macros.call(null,ch);
var res = (cljs.core.truth_(f)?f.call(null,reader,ch):((cljs.reader.number_literal_QMARK_.call(null,reader,ch))?cljs.reader.read_number.call(null,reader,ch):cljs.reader.read_symbol.call(null,reader,ch)
));
if((res === reader)){
<<<<<<< HEAD
var G__54809 = reader;
var G__54810 = eof_is_error;
var G__54811 = sentinel;
var G__54812 = is_recursive;
reader = G__54809;
eof_is_error = G__54810;
sentinel = G__54811;
is_recursive = G__54812;
=======
var G__12908 = reader;
var G__12909 = eof_is_error;
var G__12910 = sentinel;
var G__12911 = is_recursive;
reader = G__12908;
eof_is_error = G__12909;
sentinel = G__12910;
is_recursive = G__12911;
>>>>>>> hotfix
continue;
} else {
return res;
}

}
}
}
break;
}
});
/**
 * Reads one object from the string s
 */
cljs.reader.read_string = (function cljs$reader$read_string(s){
if(typeof s === 'string'){
} else {
throw (new Error("Cannot read from non-string object."));
}

var r = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s))){
return s;
} else {
if((width < cljs.core.count.call(null,s))){
return cljs.core.subs.call(null,s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
<<<<<<< HEAD
var G__54813 = b.append("0");
b = G__54813;
=======
var G__12912 = b.append("0");
b = G__12912;
>>>>>>> hotfix
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod.call(null,num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__6127__auto__ = cljs.reader.divisible_QMARK_.call(null,year,(4));
if(cljs.core.truth_(and__6127__auto__)){
var or__6139__auto__ = cljs.reader.indivisible_QMARK_.call(null,year,(100));
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return cljs.reader.divisible_QMARK_.call(null,year,(400));
}
} else {
return and__6127__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not.call(null,isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
cljs.reader.reader_error.call(null,null,[cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join(''));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
<<<<<<< HEAD
var vec__54815 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.call(null,vec__54815,(0),null);
var years = cljs.core.nth.call(null,vec__54815,(1),null);
var months = cljs.core.nth.call(null,vec__54815,(2),null);
var days = cljs.core.nth.call(null,vec__54815,(3),null);
var hours = cljs.core.nth.call(null,vec__54815,(4),null);
var minutes = cljs.core.nth.call(null,vec__54815,(5),null);
var seconds = cljs.core.nth.call(null,vec__54815,(6),null);
var fraction = cljs.core.nth.call(null,vec__54815,(7),null);
var offset_sign = cljs.core.nth.call(null,vec__54815,(8),null);
var offset_hours = cljs.core.nth.call(null,vec__54815,(9),null);
var offset_minutes = cljs.core.nth.call(null,vec__54815,(10),null);
var v = vec__54815;
=======
var vec__12914 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.call(null,vec__12914,(0),null);
var years = cljs.core.nth.call(null,vec__12914,(1),null);
var months = cljs.core.nth.call(null,vec__12914,(2),null);
var days = cljs.core.nth.call(null,vec__12914,(3),null);
var hours = cljs.core.nth.call(null,vec__12914,(4),null);
var minutes = cljs.core.nth.call(null,vec__12914,(5),null);
var seconds = cljs.core.nth.call(null,vec__12914,(6),null);
var fraction = cljs.core.nth.call(null,vec__12914,(7),null);
var offset_sign = cljs.core.nth.call(null,vec__12914,(8),null);
var offset_hours = cljs.core.nth.call(null,vec__12914,(9),null);
var offset_minutes = cljs.core.nth.call(null,vec__12914,(10),null);
var v = vec__12914;
>>>>>>> hotfix
if(cljs.core.not.call(null,v)){
return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(s)].join(''));
} else {
var years__$1 = cljs.reader.parse_int.call(null,years);
var months__$1 = (function (){var or__6139__auto__ = cljs.reader.parse_int.call(null,months);
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__6139__auto__ = cljs.reader.parse_int.call(null,days);
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__6139__auto__ = cljs.reader.parse_int.call(null,hours);
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__6139__auto__ = cljs.reader.parse_int.call(null,minutes);
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__6139__auto__ = cljs.reader.parse_int.call(null,seconds);
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__6139__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,(3)));
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__6139__auto__ = cljs.reader.parse_int.call(null,offset_hours);
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__6139__auto__ = cljs.reader.parse_int.call(null,offset_minutes);
if(cljs.core.truth_(or__6139__auto__)){
return or__6139__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check.call(null,(1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,(1),days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,(0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,(0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,(0),seconds__$1,((cljs.core._EQ_.call(null,minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,(0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__4423__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__4423__auto__)){
<<<<<<< HEAD
var vec__54817 = temp__4423__auto__;
var years = cljs.core.nth.call(null,vec__54817,(0),null);
var months = cljs.core.nth.call(null,vec__54817,(1),null);
var days = cljs.core.nth.call(null,vec__54817,(2),null);
var hours = cljs.core.nth.call(null,vec__54817,(3),null);
var minutes = cljs.core.nth.call(null,vec__54817,(4),null);
var seconds = cljs.core.nth.call(null,vec__54817,(5),null);
var ms = cljs.core.nth.call(null,vec__54817,(6),null);
var offset = cljs.core.nth.call(null,vec__54817,(7),null);
=======
var vec__12916 = temp__4423__auto__;
var years = cljs.core.nth.call(null,vec__12916,(0),null);
var months = cljs.core.nth.call(null,vec__12916,(1),null);
var days = cljs.core.nth.call(null,vec__12916,(2),null);
var hours = cljs.core.nth.call(null,vec__12916,(3),null);
var minutes = cljs.core.nth.call(null,vec__12916,(4),null);
var seconds = cljs.core.nth.call(null,vec__12916,(5),null);
var ms = cljs.core.nth.call(null,vec__12916,(6),null);
var offset = cljs.core.nth.call(null,vec__12916,(7),null);
>>>>>>> hotfix
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp.call(null,s);
} else {
return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems)){
return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else {
return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_.call(null,form)){
var arr = [];
<<<<<<< HEAD
var seq__54830_54842 = cljs.core.seq.call(null,form);
var chunk__54831_54843 = null;
var count__54832_54844 = (0);
var i__54833_54845 = (0);
while(true){
if((i__54833_54845 < count__54832_54844)){
var x_54846 = cljs.core._nth.call(null,chunk__54831_54843,i__54833_54845);
arr.push(x_54846);

var G__54847 = seq__54830_54842;
var G__54848 = chunk__54831_54843;
var G__54849 = count__54832_54844;
var G__54850 = (i__54833_54845 + (1));
seq__54830_54842 = G__54847;
chunk__54831_54843 = G__54848;
count__54832_54844 = G__54849;
i__54833_54845 = G__54850;
continue;
} else {
var temp__4425__auto___54851 = cljs.core.seq.call(null,seq__54830_54842);
if(temp__4425__auto___54851){
var seq__54830_54852__$1 = temp__4425__auto___54851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54830_54852__$1)){
var c__6942__auto___54853 = cljs.core.chunk_first.call(null,seq__54830_54852__$1);
var G__54854 = cljs.core.chunk_rest.call(null,seq__54830_54852__$1);
var G__54855 = c__6942__auto___54853;
var G__54856 = cljs.core.count.call(null,c__6942__auto___54853);
var G__54857 = (0);
seq__54830_54842 = G__54854;
chunk__54831_54843 = G__54855;
count__54832_54844 = G__54856;
i__54833_54845 = G__54857;
continue;
} else {
var x_54858 = cljs.core.first.call(null,seq__54830_54852__$1);
arr.push(x_54858);

var G__54859 = cljs.core.next.call(null,seq__54830_54852__$1);
var G__54860 = null;
var G__54861 = (0);
var G__54862 = (0);
seq__54830_54842 = G__54859;
chunk__54831_54843 = G__54860;
count__54832_54844 = G__54861;
i__54833_54845 = G__54862;
=======
var seq__12929_12941 = cljs.core.seq.call(null,form);
var chunk__12930_12942 = null;
var count__12931_12943 = (0);
var i__12932_12944 = (0);
while(true){
if((i__12932_12944 < count__12931_12943)){
var x_12945 = cljs.core._nth.call(null,chunk__12930_12942,i__12932_12944);
arr.push(x_12945);

var G__12946 = seq__12929_12941;
var G__12947 = chunk__12930_12942;
var G__12948 = count__12931_12943;
var G__12949 = (i__12932_12944 + (1));
seq__12929_12941 = G__12946;
chunk__12930_12942 = G__12947;
count__12931_12943 = G__12948;
i__12932_12944 = G__12949;
continue;
} else {
var temp__4425__auto___12950 = cljs.core.seq.call(null,seq__12929_12941);
if(temp__4425__auto___12950){
var seq__12929_12951__$1 = temp__4425__auto___12950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12929_12951__$1)){
var c__6942__auto___12952 = cljs.core.chunk_first.call(null,seq__12929_12951__$1);
var G__12953 = cljs.core.chunk_rest.call(null,seq__12929_12951__$1);
var G__12954 = c__6942__auto___12952;
var G__12955 = cljs.core.count.call(null,c__6942__auto___12952);
var G__12956 = (0);
seq__12929_12941 = G__12953;
chunk__12930_12942 = G__12954;
count__12931_12943 = G__12955;
i__12932_12944 = G__12956;
continue;
} else {
var x_12957 = cljs.core.first.call(null,seq__12929_12951__$1);
arr.push(x_12957);

var G__12958 = cljs.core.next.call(null,seq__12929_12951__$1);
var G__12959 = null;
var G__12960 = (0);
var G__12961 = (0);
seq__12929_12941 = G__12958;
chunk__12930_12942 = G__12959;
count__12931_12943 = G__12960;
i__12932_12944 = G__12961;
>>>>>>> hotfix
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_.call(null,form)){
var obj = {};
<<<<<<< HEAD
var seq__54836_54863 = cljs.core.seq.call(null,form);
var chunk__54837_54864 = null;
var count__54838_54865 = (0);
var i__54839_54866 = (0);
while(true){
if((i__54839_54866 < count__54838_54865)){
var vec__54840_54867 = cljs.core._nth.call(null,chunk__54837_54864,i__54839_54866);
var k_54868 = cljs.core.nth.call(null,vec__54840_54867,(0),null);
var v_54869 = cljs.core.nth.call(null,vec__54840_54867,(1),null);
(obj[cljs.core.name.call(null,k_54868)] = v_54869);

var G__54870 = seq__54836_54863;
var G__54871 = chunk__54837_54864;
var G__54872 = count__54838_54865;
var G__54873 = (i__54839_54866 + (1));
seq__54836_54863 = G__54870;
chunk__54837_54864 = G__54871;
count__54838_54865 = G__54872;
i__54839_54866 = G__54873;
continue;
} else {
var temp__4425__auto___54874 = cljs.core.seq.call(null,seq__54836_54863);
if(temp__4425__auto___54874){
var seq__54836_54875__$1 = temp__4425__auto___54874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54836_54875__$1)){
var c__6942__auto___54876 = cljs.core.chunk_first.call(null,seq__54836_54875__$1);
var G__54877 = cljs.core.chunk_rest.call(null,seq__54836_54875__$1);
var G__54878 = c__6942__auto___54876;
var G__54879 = cljs.core.count.call(null,c__6942__auto___54876);
var G__54880 = (0);
seq__54836_54863 = G__54877;
chunk__54837_54864 = G__54878;
count__54838_54865 = G__54879;
i__54839_54866 = G__54880;
continue;
} else {
var vec__54841_54881 = cljs.core.first.call(null,seq__54836_54875__$1);
var k_54882 = cljs.core.nth.call(null,vec__54841_54881,(0),null);
var v_54883 = cljs.core.nth.call(null,vec__54841_54881,(1),null);
(obj[cljs.core.name.call(null,k_54882)] = v_54883);

var G__54884 = cljs.core.next.call(null,seq__54836_54875__$1);
var G__54885 = null;
var G__54886 = (0);
var G__54887 = (0);
seq__54836_54863 = G__54884;
chunk__54837_54864 = G__54885;
count__54838_54865 = G__54886;
i__54839_54866 = G__54887;
=======
var seq__12935_12962 = cljs.core.seq.call(null,form);
var chunk__12936_12963 = null;
var count__12937_12964 = (0);
var i__12938_12965 = (0);
while(true){
if((i__12938_12965 < count__12937_12964)){
var vec__12939_12966 = cljs.core._nth.call(null,chunk__12936_12963,i__12938_12965);
var k_12967 = cljs.core.nth.call(null,vec__12939_12966,(0),null);
var v_12968 = cljs.core.nth.call(null,vec__12939_12966,(1),null);
(obj[cljs.core.name.call(null,k_12967)] = v_12968);

var G__12969 = seq__12935_12962;
var G__12970 = chunk__12936_12963;
var G__12971 = count__12937_12964;
var G__12972 = (i__12938_12965 + (1));
seq__12935_12962 = G__12969;
chunk__12936_12963 = G__12970;
count__12937_12964 = G__12971;
i__12938_12965 = G__12972;
continue;
} else {
var temp__4425__auto___12973 = cljs.core.seq.call(null,seq__12935_12962);
if(temp__4425__auto___12973){
var seq__12935_12974__$1 = temp__4425__auto___12973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12935_12974__$1)){
var c__6942__auto___12975 = cljs.core.chunk_first.call(null,seq__12935_12974__$1);
var G__12976 = cljs.core.chunk_rest.call(null,seq__12935_12974__$1);
var G__12977 = c__6942__auto___12975;
var G__12978 = cljs.core.count.call(null,c__6942__auto___12975);
var G__12979 = (0);
seq__12935_12962 = G__12976;
chunk__12936_12963 = G__12977;
count__12937_12964 = G__12978;
i__12938_12965 = G__12979;
continue;
} else {
var vec__12940_12980 = cljs.core.first.call(null,seq__12935_12974__$1);
var k_12981 = cljs.core.nth.call(null,vec__12940_12980,(0),null);
var v_12982 = cljs.core.nth.call(null,vec__12940_12980,(1),null);
(obj[cljs.core.name.call(null,k_12981)] = v_12982);

var G__12983 = cljs.core.next.call(null,seq__12935_12974__$1);
var G__12984 = null;
var G__12985 = (0);
var G__12986 = (0);
seq__12935_12962 = G__12983;
chunk__12936_12963 = G__12984;
count__12937_12964 = G__12985;
i__12938_12965 = G__12986;
>>>>>>> hotfix
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return cljs.reader.reader_error.call(null,null,[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join(''));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid.call(null,uuid);
} else {
return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null));
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,null);
cljs.reader.maybe_read_tagged_type = (function cljs$reader$maybe_read_tagged_type(rdr,initch){
var tag = cljs.reader.read_symbol.call(null,rdr,initch);
var pfn = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),[cljs.core.str(tag)].join(''));
var dfn = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
if(cljs.core.truth_(pfn)){
return pfn.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else {
if(cljs.core.truth_(dfn)){
return dfn.call(null,tag,cljs.reader.read.call(null,rdr,true,null,false));
} else {
return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",[cljs.core.str(tag)].join('')," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));

}
}
});
cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});

//# sourceMappingURL=reader.js.map