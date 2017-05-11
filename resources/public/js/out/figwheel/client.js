// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37589 = [];
var len__27462__auto___37592 = arguments.length;
var i__27463__auto___37593 = (0);
while(true){
if((i__27463__auto___37593 < len__27462__auto___37592)){
args37589.push((arguments[i__27463__auto___37593]));

var G__37594 = (i__27463__auto___37593 + (1));
i__27463__auto___37593 = G__37594;
continue;
} else {
}
break;
}

var G__37591 = args37589.length;
switch (G__37591) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37589.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27469__auto__ = [];
var len__27462__auto___37597 = arguments.length;
var i__27463__auto___37598 = (0);
while(true){
if((i__27463__auto___37598 < len__27462__auto___37597)){
args__27469__auto__.push((arguments[i__27463__auto___37598]));

var G__37599 = (i__27463__auto___37598 + (1));
i__27463__auto___37598 = G__37599;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37596){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37596));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27469__auto__ = [];
var len__27462__auto___37601 = arguments.length;
var i__27463__auto___37602 = (0);
while(true){
if((i__27463__auto___37602 < len__27462__auto___37601)){
args__27469__auto__.push((arguments[i__27463__auto___37602]));

var G__37603 = (i__27463__auto___37602 + (1));
i__27463__auto___37602 = G__37603;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37600){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37600));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37604){
var map__37607 = p__37604;
var map__37607__$1 = ((((!((map__37607 == null)))?((((map__37607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37607):map__37607);
var message = cljs.core.get.call(null,map__37607__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37607__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26349__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26349__auto__)){
return or__26349__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26337__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26337__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26337__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28559__auto___37769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___37769,ch){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___37769,ch){
return (function (state_37738){
var state_val_37739 = (state_37738[(1)]);
if((state_val_37739 === (7))){
var inst_37734 = (state_37738[(2)]);
var state_37738__$1 = state_37738;
var statearr_37740_37770 = state_37738__$1;
(statearr_37740_37770[(2)] = inst_37734);

(statearr_37740_37770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (1))){
var state_37738__$1 = state_37738;
var statearr_37741_37771 = state_37738__$1;
(statearr_37741_37771[(2)] = null);

(statearr_37741_37771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (4))){
var inst_37691 = (state_37738[(7)]);
var inst_37691__$1 = (state_37738[(2)]);
var state_37738__$1 = (function (){var statearr_37742 = state_37738;
(statearr_37742[(7)] = inst_37691__$1);

return statearr_37742;
})();
if(cljs.core.truth_(inst_37691__$1)){
var statearr_37743_37772 = state_37738__$1;
(statearr_37743_37772[(1)] = (5));

} else {
var statearr_37744_37773 = state_37738__$1;
(statearr_37744_37773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (15))){
var inst_37698 = (state_37738[(8)]);
var inst_37713 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37698);
var inst_37714 = cljs.core.first.call(null,inst_37713);
var inst_37715 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37714);
var inst_37716 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37715)].join('');
var inst_37717 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37716);
var state_37738__$1 = state_37738;
var statearr_37745_37774 = state_37738__$1;
(statearr_37745_37774[(2)] = inst_37717);

(statearr_37745_37774[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (13))){
var inst_37722 = (state_37738[(2)]);
var state_37738__$1 = state_37738;
var statearr_37746_37775 = state_37738__$1;
(statearr_37746_37775[(2)] = inst_37722);

(statearr_37746_37775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (6))){
var state_37738__$1 = state_37738;
var statearr_37747_37776 = state_37738__$1;
(statearr_37747_37776[(2)] = null);

(statearr_37747_37776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (17))){
var inst_37720 = (state_37738[(2)]);
var state_37738__$1 = state_37738;
var statearr_37748_37777 = state_37738__$1;
(statearr_37748_37777[(2)] = inst_37720);

(statearr_37748_37777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (3))){
var inst_37736 = (state_37738[(2)]);
var state_37738__$1 = state_37738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37738__$1,inst_37736);
} else {
if((state_val_37739 === (12))){
var inst_37697 = (state_37738[(9)]);
var inst_37711 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37697,opts);
var state_37738__$1 = state_37738;
if(cljs.core.truth_(inst_37711)){
var statearr_37749_37778 = state_37738__$1;
(statearr_37749_37778[(1)] = (15));

} else {
var statearr_37750_37779 = state_37738__$1;
(statearr_37750_37779[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (2))){
var state_37738__$1 = state_37738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37738__$1,(4),ch);
} else {
if((state_val_37739 === (11))){
var inst_37698 = (state_37738[(8)]);
var inst_37703 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37704 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37698);
var inst_37705 = cljs.core.async.timeout.call(null,(1000));
var inst_37706 = [inst_37704,inst_37705];
var inst_37707 = (new cljs.core.PersistentVector(null,2,(5),inst_37703,inst_37706,null));
var state_37738__$1 = state_37738;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37738__$1,(14),inst_37707);
} else {
if((state_val_37739 === (9))){
var inst_37698 = (state_37738[(8)]);
var inst_37724 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37725 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37698);
var inst_37726 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37725);
var inst_37727 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37726)].join('');
var inst_37728 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37727);
var state_37738__$1 = (function (){var statearr_37751 = state_37738;
(statearr_37751[(10)] = inst_37724);

return statearr_37751;
})();
var statearr_37752_37780 = state_37738__$1;
(statearr_37752_37780[(2)] = inst_37728);

(statearr_37752_37780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (5))){
var inst_37691 = (state_37738[(7)]);
var inst_37693 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37694 = (new cljs.core.PersistentArrayMap(null,2,inst_37693,null));
var inst_37695 = (new cljs.core.PersistentHashSet(null,inst_37694,null));
var inst_37696 = figwheel.client.focus_msgs.call(null,inst_37695,inst_37691);
var inst_37697 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37696);
var inst_37698 = cljs.core.first.call(null,inst_37696);
var inst_37699 = figwheel.client.autoload_QMARK_.call(null);
var state_37738__$1 = (function (){var statearr_37753 = state_37738;
(statearr_37753[(8)] = inst_37698);

(statearr_37753[(9)] = inst_37697);

return statearr_37753;
})();
if(cljs.core.truth_(inst_37699)){
var statearr_37754_37781 = state_37738__$1;
(statearr_37754_37781[(1)] = (8));

} else {
var statearr_37755_37782 = state_37738__$1;
(statearr_37755_37782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (14))){
var inst_37709 = (state_37738[(2)]);
var state_37738__$1 = state_37738;
var statearr_37756_37783 = state_37738__$1;
(statearr_37756_37783[(2)] = inst_37709);

(statearr_37756_37783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (16))){
var state_37738__$1 = state_37738;
var statearr_37757_37784 = state_37738__$1;
(statearr_37757_37784[(2)] = null);

(statearr_37757_37784[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (10))){
var inst_37730 = (state_37738[(2)]);
var state_37738__$1 = (function (){var statearr_37758 = state_37738;
(statearr_37758[(11)] = inst_37730);

return statearr_37758;
})();
var statearr_37759_37785 = state_37738__$1;
(statearr_37759_37785[(2)] = null);

(statearr_37759_37785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37739 === (8))){
var inst_37697 = (state_37738[(9)]);
var inst_37701 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37697,opts);
var state_37738__$1 = state_37738;
if(cljs.core.truth_(inst_37701)){
var statearr_37760_37786 = state_37738__$1;
(statearr_37760_37786[(1)] = (11));

} else {
var statearr_37761_37787 = state_37738__$1;
(statearr_37761_37787[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__28559__auto___37769,ch))
;
return ((function (switch__28447__auto__,c__28559__auto___37769,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28448__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28448__auto____0 = (function (){
var statearr_37765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37765[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28448__auto__);

(statearr_37765[(1)] = (1));

return statearr_37765;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28448__auto____1 = (function (state_37738){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_37738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e37766){if((e37766 instanceof Object)){
var ex__28451__auto__ = e37766;
var statearr_37767_37788 = state_37738;
(statearr_37767_37788[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37789 = state_37738;
state_37738 = G__37789;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28448__auto__ = function(state_37738){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28448__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28448__auto____1.call(this,state_37738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28448__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28448__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___37769,ch))
})();
var state__28561__auto__ = (function (){var statearr_37768 = f__28560__auto__.call(null);
(statearr_37768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___37769);

return statearr_37768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___37769,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37790_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37790_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37793 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37793){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37792){if((e37792 instanceof Error)){
var e = e37792;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37793], null));
} else {
var e = e37792;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37793))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37794){
var map__37803 = p__37794;
var map__37803__$1 = ((((!((map__37803 == null)))?((((map__37803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37803):map__37803);
var opts = map__37803__$1;
var build_id = cljs.core.get.call(null,map__37803__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37803,map__37803__$1,opts,build_id){
return (function (p__37805){
var vec__37806 = p__37805;
var seq__37807 = cljs.core.seq.call(null,vec__37806);
var first__37808 = cljs.core.first.call(null,seq__37807);
var seq__37807__$1 = cljs.core.next.call(null,seq__37807);
var map__37809 = first__37808;
var map__37809__$1 = ((((!((map__37809 == null)))?((((map__37809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37809):map__37809);
var msg = map__37809__$1;
var msg_name = cljs.core.get.call(null,map__37809__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37807__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37806,seq__37807,first__37808,seq__37807__$1,map__37809,map__37809__$1,msg,msg_name,_,map__37803,map__37803__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37806,seq__37807,first__37808,seq__37807__$1,map__37809,map__37809__$1,msg,msg_name,_,map__37803,map__37803__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37803,map__37803__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37817){
var vec__37818 = p__37817;
var seq__37819 = cljs.core.seq.call(null,vec__37818);
var first__37820 = cljs.core.first.call(null,seq__37819);
var seq__37819__$1 = cljs.core.next.call(null,seq__37819);
var map__37821 = first__37820;
var map__37821__$1 = ((((!((map__37821 == null)))?((((map__37821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37821):map__37821);
var msg = map__37821__$1;
var msg_name = cljs.core.get.call(null,map__37821__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37819__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37823){
var map__37835 = p__37823;
var map__37835__$1 = ((((!((map__37835 == null)))?((((map__37835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37835):map__37835);
var on_compile_warning = cljs.core.get.call(null,map__37835__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37835__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37835,map__37835__$1,on_compile_warning,on_compile_fail){
return (function (p__37837){
var vec__37838 = p__37837;
var seq__37839 = cljs.core.seq.call(null,vec__37838);
var first__37840 = cljs.core.first.call(null,seq__37839);
var seq__37839__$1 = cljs.core.next.call(null,seq__37839);
var map__37841 = first__37840;
var map__37841__$1 = ((((!((map__37841 == null)))?((((map__37841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37841):map__37841);
var msg = map__37841__$1;
var msg_name = cljs.core.get.call(null,map__37841__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37839__$1;
var pred__37843 = cljs.core._EQ_;
var expr__37844 = msg_name;
if(cljs.core.truth_(pred__37843.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37844))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37843.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37844))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37835,map__37835__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto__,msg_hist,msg_names,msg){
return (function (state_38072){
var state_val_38073 = (state_38072[(1)]);
if((state_val_38073 === (7))){
var inst_37992 = (state_38072[(2)]);
var state_38072__$1 = state_38072;
if(cljs.core.truth_(inst_37992)){
var statearr_38074_38124 = state_38072__$1;
(statearr_38074_38124[(1)] = (8));

} else {
var statearr_38075_38125 = state_38072__$1;
(statearr_38075_38125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (20))){
var inst_38066 = (state_38072[(2)]);
var state_38072__$1 = state_38072;
var statearr_38076_38126 = state_38072__$1;
(statearr_38076_38126[(2)] = inst_38066);

(statearr_38076_38126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (27))){
var inst_38062 = (state_38072[(2)]);
var state_38072__$1 = state_38072;
var statearr_38077_38127 = state_38072__$1;
(statearr_38077_38127[(2)] = inst_38062);

(statearr_38077_38127[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (1))){
var inst_37985 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38072__$1 = state_38072;
if(cljs.core.truth_(inst_37985)){
var statearr_38078_38128 = state_38072__$1;
(statearr_38078_38128[(1)] = (2));

} else {
var statearr_38079_38129 = state_38072__$1;
(statearr_38079_38129[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (24))){
var inst_38064 = (state_38072[(2)]);
var state_38072__$1 = state_38072;
var statearr_38080_38130 = state_38072__$1;
(statearr_38080_38130[(2)] = inst_38064);

(statearr_38080_38130[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (4))){
var inst_38070 = (state_38072[(2)]);
var state_38072__$1 = state_38072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38072__$1,inst_38070);
} else {
if((state_val_38073 === (15))){
var inst_38068 = (state_38072[(2)]);
var state_38072__$1 = state_38072;
var statearr_38081_38131 = state_38072__$1;
(statearr_38081_38131[(2)] = inst_38068);

(statearr_38081_38131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (21))){
var inst_38021 = (state_38072[(2)]);
var inst_38022 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38023 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38022);
var state_38072__$1 = (function (){var statearr_38082 = state_38072;
(statearr_38082[(7)] = inst_38021);

return statearr_38082;
})();
var statearr_38083_38132 = state_38072__$1;
(statearr_38083_38132[(2)] = inst_38023);

(statearr_38083_38132[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (31))){
var inst_38051 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38072__$1 = state_38072;
if(cljs.core.truth_(inst_38051)){
var statearr_38084_38133 = state_38072__$1;
(statearr_38084_38133[(1)] = (34));

} else {
var statearr_38085_38134 = state_38072__$1;
(statearr_38085_38134[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (32))){
var inst_38060 = (state_38072[(2)]);
var state_38072__$1 = state_38072;
var statearr_38086_38135 = state_38072__$1;
(statearr_38086_38135[(2)] = inst_38060);

(statearr_38086_38135[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (33))){
var inst_38047 = (state_38072[(2)]);
var inst_38048 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38049 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38048);
var state_38072__$1 = (function (){var statearr_38087 = state_38072;
(statearr_38087[(8)] = inst_38047);

return statearr_38087;
})();
var statearr_38088_38136 = state_38072__$1;
(statearr_38088_38136[(2)] = inst_38049);

(statearr_38088_38136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (13))){
var inst_38006 = figwheel.client.heads_up.clear.call(null);
var state_38072__$1 = state_38072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38072__$1,(16),inst_38006);
} else {
if((state_val_38073 === (22))){
var inst_38027 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38028 = figwheel.client.heads_up.append_warning_message.call(null,inst_38027);
var state_38072__$1 = state_38072;
var statearr_38089_38137 = state_38072__$1;
(statearr_38089_38137[(2)] = inst_38028);

(statearr_38089_38137[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (36))){
var inst_38058 = (state_38072[(2)]);
var state_38072__$1 = state_38072;
var statearr_38090_38138 = state_38072__$1;
(statearr_38090_38138[(2)] = inst_38058);

(statearr_38090_38138[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (29))){
var inst_38038 = (state_38072[(2)]);
var inst_38039 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38040 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38039);
var state_38072__$1 = (function (){var statearr_38091 = state_38072;
(statearr_38091[(9)] = inst_38038);

return statearr_38091;
})();
var statearr_38092_38139 = state_38072__$1;
(statearr_38092_38139[(2)] = inst_38040);

(statearr_38092_38139[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (6))){
var inst_37987 = (state_38072[(10)]);
var state_38072__$1 = state_38072;
var statearr_38093_38140 = state_38072__$1;
(statearr_38093_38140[(2)] = inst_37987);

(statearr_38093_38140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (28))){
var inst_38034 = (state_38072[(2)]);
var inst_38035 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38036 = figwheel.client.heads_up.display_warning.call(null,inst_38035);
var state_38072__$1 = (function (){var statearr_38094 = state_38072;
(statearr_38094[(11)] = inst_38034);

return statearr_38094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38072__$1,(29),inst_38036);
} else {
if((state_val_38073 === (25))){
var inst_38032 = figwheel.client.heads_up.clear.call(null);
var state_38072__$1 = state_38072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38072__$1,(28),inst_38032);
} else {
if((state_val_38073 === (34))){
var inst_38053 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38072__$1 = state_38072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38072__$1,(37),inst_38053);
} else {
if((state_val_38073 === (17))){
var inst_38012 = (state_38072[(2)]);
var inst_38013 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38014 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38013);
var state_38072__$1 = (function (){var statearr_38095 = state_38072;
(statearr_38095[(12)] = inst_38012);

return statearr_38095;
})();
var statearr_38096_38141 = state_38072__$1;
(statearr_38096_38141[(2)] = inst_38014);

(statearr_38096_38141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (3))){
var inst_38004 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38072__$1 = state_38072;
if(cljs.core.truth_(inst_38004)){
var statearr_38097_38142 = state_38072__$1;
(statearr_38097_38142[(1)] = (13));

} else {
var statearr_38098_38143 = state_38072__$1;
(statearr_38098_38143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (12))){
var inst_38000 = (state_38072[(2)]);
var state_38072__$1 = state_38072;
var statearr_38099_38144 = state_38072__$1;
(statearr_38099_38144[(2)] = inst_38000);

(statearr_38099_38144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (2))){
var inst_37987 = (state_38072[(10)]);
var inst_37987__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38072__$1 = (function (){var statearr_38100 = state_38072;
(statearr_38100[(10)] = inst_37987__$1);

return statearr_38100;
})();
if(cljs.core.truth_(inst_37987__$1)){
var statearr_38101_38145 = state_38072__$1;
(statearr_38101_38145[(1)] = (5));

} else {
var statearr_38102_38146 = state_38072__$1;
(statearr_38102_38146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (23))){
var inst_38030 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38072__$1 = state_38072;
if(cljs.core.truth_(inst_38030)){
var statearr_38103_38147 = state_38072__$1;
(statearr_38103_38147[(1)] = (25));

} else {
var statearr_38104_38148 = state_38072__$1;
(statearr_38104_38148[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (35))){
var state_38072__$1 = state_38072;
var statearr_38105_38149 = state_38072__$1;
(statearr_38105_38149[(2)] = null);

(statearr_38105_38149[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (19))){
var inst_38025 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38072__$1 = state_38072;
if(cljs.core.truth_(inst_38025)){
var statearr_38106_38150 = state_38072__$1;
(statearr_38106_38150[(1)] = (22));

} else {
var statearr_38107_38151 = state_38072__$1;
(statearr_38107_38151[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (11))){
var inst_37996 = (state_38072[(2)]);
var state_38072__$1 = state_38072;
var statearr_38108_38152 = state_38072__$1;
(statearr_38108_38152[(2)] = inst_37996);

(statearr_38108_38152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (9))){
var inst_37998 = figwheel.client.heads_up.clear.call(null);
var state_38072__$1 = state_38072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38072__$1,(12),inst_37998);
} else {
if((state_val_38073 === (5))){
var inst_37989 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38072__$1 = state_38072;
var statearr_38109_38153 = state_38072__$1;
(statearr_38109_38153[(2)] = inst_37989);

(statearr_38109_38153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (14))){
var inst_38016 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38072__$1 = state_38072;
if(cljs.core.truth_(inst_38016)){
var statearr_38110_38154 = state_38072__$1;
(statearr_38110_38154[(1)] = (18));

} else {
var statearr_38111_38155 = state_38072__$1;
(statearr_38111_38155[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (26))){
var inst_38042 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38072__$1 = state_38072;
if(cljs.core.truth_(inst_38042)){
var statearr_38112_38156 = state_38072__$1;
(statearr_38112_38156[(1)] = (30));

} else {
var statearr_38113_38157 = state_38072__$1;
(statearr_38113_38157[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (16))){
var inst_38008 = (state_38072[(2)]);
var inst_38009 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38010 = figwheel.client.heads_up.display_exception.call(null,inst_38009);
var state_38072__$1 = (function (){var statearr_38114 = state_38072;
(statearr_38114[(13)] = inst_38008);

return statearr_38114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38072__$1,(17),inst_38010);
} else {
if((state_val_38073 === (30))){
var inst_38044 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38045 = figwheel.client.heads_up.display_warning.call(null,inst_38044);
var state_38072__$1 = state_38072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38072__$1,(33),inst_38045);
} else {
if((state_val_38073 === (10))){
var inst_38002 = (state_38072[(2)]);
var state_38072__$1 = state_38072;
var statearr_38115_38158 = state_38072__$1;
(statearr_38115_38158[(2)] = inst_38002);

(statearr_38115_38158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (18))){
var inst_38018 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38019 = figwheel.client.heads_up.display_exception.call(null,inst_38018);
var state_38072__$1 = state_38072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38072__$1,(21),inst_38019);
} else {
if((state_val_38073 === (37))){
var inst_38055 = (state_38072[(2)]);
var state_38072__$1 = state_38072;
var statearr_38116_38159 = state_38072__$1;
(statearr_38116_38159[(2)] = inst_38055);

(statearr_38116_38159[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38073 === (8))){
var inst_37994 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38072__$1 = state_38072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38072__$1,(11),inst_37994);
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
}
}
}
}
}
});})(c__28559__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28447__auto__,c__28559__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28448__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28448__auto____0 = (function (){
var statearr_38120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38120[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28448__auto__);

(statearr_38120[(1)] = (1));

return statearr_38120;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28448__auto____1 = (function (state_38072){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_38072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e38121){if((e38121 instanceof Object)){
var ex__28451__auto__ = e38121;
var statearr_38122_38160 = state_38072;
(statearr_38122_38160[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38161 = state_38072;
state_38072 = G__38161;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28448__auto__ = function(state_38072){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28448__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28448__auto____1.call(this,state_38072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28448__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28448__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto__,msg_hist,msg_names,msg))
})();
var state__28561__auto__ = (function (){var statearr_38123 = f__28560__auto__.call(null);
(statearr_38123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto__);

return statearr_38123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto__,msg_hist,msg_names,msg))
);

return c__28559__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28559__auto___38224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___38224,ch){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___38224,ch){
return (function (state_38207){
var state_val_38208 = (state_38207[(1)]);
if((state_val_38208 === (1))){
var state_38207__$1 = state_38207;
var statearr_38209_38225 = state_38207__$1;
(statearr_38209_38225[(2)] = null);

(statearr_38209_38225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38208 === (2))){
var state_38207__$1 = state_38207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38207__$1,(4),ch);
} else {
if((state_val_38208 === (3))){
var inst_38205 = (state_38207[(2)]);
var state_38207__$1 = state_38207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38207__$1,inst_38205);
} else {
if((state_val_38208 === (4))){
var inst_38195 = (state_38207[(7)]);
var inst_38195__$1 = (state_38207[(2)]);
var state_38207__$1 = (function (){var statearr_38210 = state_38207;
(statearr_38210[(7)] = inst_38195__$1);

return statearr_38210;
})();
if(cljs.core.truth_(inst_38195__$1)){
var statearr_38211_38226 = state_38207__$1;
(statearr_38211_38226[(1)] = (5));

} else {
var statearr_38212_38227 = state_38207__$1;
(statearr_38212_38227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38208 === (5))){
var inst_38195 = (state_38207[(7)]);
var inst_38197 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38195);
var state_38207__$1 = state_38207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38207__$1,(8),inst_38197);
} else {
if((state_val_38208 === (6))){
var state_38207__$1 = state_38207;
var statearr_38213_38228 = state_38207__$1;
(statearr_38213_38228[(2)] = null);

(statearr_38213_38228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38208 === (7))){
var inst_38203 = (state_38207[(2)]);
var state_38207__$1 = state_38207;
var statearr_38214_38229 = state_38207__$1;
(statearr_38214_38229[(2)] = inst_38203);

(statearr_38214_38229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38208 === (8))){
var inst_38199 = (state_38207[(2)]);
var state_38207__$1 = (function (){var statearr_38215 = state_38207;
(statearr_38215[(8)] = inst_38199);

return statearr_38215;
})();
var statearr_38216_38230 = state_38207__$1;
(statearr_38216_38230[(2)] = null);

(statearr_38216_38230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__28559__auto___38224,ch))
;
return ((function (switch__28447__auto__,c__28559__auto___38224,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28448__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28448__auto____0 = (function (){
var statearr_38220 = [null,null,null,null,null,null,null,null,null];
(statearr_38220[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28448__auto__);

(statearr_38220[(1)] = (1));

return statearr_38220;
});
var figwheel$client$heads_up_plugin_$_state_machine__28448__auto____1 = (function (state_38207){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_38207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e38221){if((e38221 instanceof Object)){
var ex__28451__auto__ = e38221;
var statearr_38222_38231 = state_38207;
(statearr_38222_38231[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38232 = state_38207;
state_38207 = G__38232;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28448__auto__ = function(state_38207){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28448__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28448__auto____1.call(this,state_38207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28448__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28448__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___38224,ch))
})();
var state__28561__auto__ = (function (){var statearr_38223 = f__28560__auto__.call(null);
(statearr_38223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___38224);

return statearr_38223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___38224,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto__){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto__){
return (function (state_38253){
var state_val_38254 = (state_38253[(1)]);
if((state_val_38254 === (1))){
var inst_38248 = cljs.core.async.timeout.call(null,(3000));
var state_38253__$1 = state_38253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38253__$1,(2),inst_38248);
} else {
if((state_val_38254 === (2))){
var inst_38250 = (state_38253[(2)]);
var inst_38251 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38253__$1 = (function (){var statearr_38255 = state_38253;
(statearr_38255[(7)] = inst_38250);

return statearr_38255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38253__$1,inst_38251);
} else {
return null;
}
}
});})(c__28559__auto__))
;
return ((function (switch__28447__auto__,c__28559__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28448__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28448__auto____0 = (function (){
var statearr_38259 = [null,null,null,null,null,null,null,null];
(statearr_38259[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28448__auto__);

(statearr_38259[(1)] = (1));

return statearr_38259;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28448__auto____1 = (function (state_38253){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_38253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e38260){if((e38260 instanceof Object)){
var ex__28451__auto__ = e38260;
var statearr_38261_38263 = state_38253;
(statearr_38261_38263[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38264 = state_38253;
state_38253 = G__38264;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28448__auto__ = function(state_38253){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28448__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28448__auto____1.call(this,state_38253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28448__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28448__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto__))
})();
var state__28561__auto__ = (function (){var statearr_38262 = f__28560__auto__.call(null);
(statearr_38262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto__);

return statearr_38262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto__))
);

return c__28559__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38287){
var state_val_38288 = (state_38287[(1)]);
if((state_val_38288 === (1))){
var inst_38281 = cljs.core.async.timeout.call(null,(2000));
var state_38287__$1 = state_38287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38287__$1,(2),inst_38281);
} else {
if((state_val_38288 === (2))){
var inst_38283 = (state_38287[(2)]);
var inst_38284 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38285 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38284);
var state_38287__$1 = (function (){var statearr_38289 = state_38287;
(statearr_38289[(7)] = inst_38283);

return statearr_38289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38287__$1,inst_38285);
} else {
return null;
}
}
});})(c__28559__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28447__auto__,c__28559__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28448__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28448__auto____0 = (function (){
var statearr_38293 = [null,null,null,null,null,null,null,null];
(statearr_38293[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28448__auto__);

(statearr_38293[(1)] = (1));

return statearr_38293;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28448__auto____1 = (function (state_38287){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_38287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e38294){if((e38294 instanceof Object)){
var ex__28451__auto__ = e38294;
var statearr_38295_38297 = state_38287;
(statearr_38295_38297[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38298 = state_38287;
state_38287 = G__38298;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28448__auto__ = function(state_38287){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28448__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28448__auto____1.call(this,state_38287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28448__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28448__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28561__auto__ = (function (){var statearr_38296 = f__28560__auto__.call(null);
(statearr_38296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto__);

return statearr_38296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto__,figwheel_version,temp__4657__auto__))
);

return c__28559__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38299){
var map__38303 = p__38299;
var map__38303__$1 = ((((!((map__38303 == null)))?((((map__38303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38303):map__38303);
var file = cljs.core.get.call(null,map__38303__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38303__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38303__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38305 = "";
var G__38305__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38305),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38305);
var G__38305__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38305__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38305__$1);
if(cljs.core.truth_((function (){var and__26337__auto__ = line;
if(cljs.core.truth_(and__26337__auto__)){
return column;
} else {
return and__26337__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38305__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38305__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38306){
var map__38313 = p__38306;
var map__38313__$1 = ((((!((map__38313 == null)))?((((map__38313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38313):map__38313);
var ed = map__38313__$1;
var formatted_exception = cljs.core.get.call(null,map__38313__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38313__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38313__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38315_38319 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38316_38320 = null;
var count__38317_38321 = (0);
var i__38318_38322 = (0);
while(true){
if((i__38318_38322 < count__38317_38321)){
var msg_38323 = cljs.core._nth.call(null,chunk__38316_38320,i__38318_38322);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38323);

var G__38324 = seq__38315_38319;
var G__38325 = chunk__38316_38320;
var G__38326 = count__38317_38321;
var G__38327 = (i__38318_38322 + (1));
seq__38315_38319 = G__38324;
chunk__38316_38320 = G__38325;
count__38317_38321 = G__38326;
i__38318_38322 = G__38327;
continue;
} else {
var temp__4657__auto___38328 = cljs.core.seq.call(null,seq__38315_38319);
if(temp__4657__auto___38328){
var seq__38315_38329__$1 = temp__4657__auto___38328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38315_38329__$1)){
var c__27168__auto___38330 = cljs.core.chunk_first.call(null,seq__38315_38329__$1);
var G__38331 = cljs.core.chunk_rest.call(null,seq__38315_38329__$1);
var G__38332 = c__27168__auto___38330;
var G__38333 = cljs.core.count.call(null,c__27168__auto___38330);
var G__38334 = (0);
seq__38315_38319 = G__38331;
chunk__38316_38320 = G__38332;
count__38317_38321 = G__38333;
i__38318_38322 = G__38334;
continue;
} else {
var msg_38335 = cljs.core.first.call(null,seq__38315_38329__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38335);

var G__38336 = cljs.core.next.call(null,seq__38315_38329__$1);
var G__38337 = null;
var G__38338 = (0);
var G__38339 = (0);
seq__38315_38319 = G__38336;
chunk__38316_38320 = G__38337;
count__38317_38321 = G__38338;
i__38318_38322 = G__38339;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38340){
var map__38343 = p__38340;
var map__38343__$1 = ((((!((map__38343 == null)))?((((map__38343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38343):map__38343);
var w = map__38343__$1;
var message = cljs.core.get.call(null,map__38343__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26337__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26337__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26337__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38355 = cljs.core.seq.call(null,plugins);
var chunk__38356 = null;
var count__38357 = (0);
var i__38358 = (0);
while(true){
if((i__38358 < count__38357)){
var vec__38359 = cljs.core._nth.call(null,chunk__38356,i__38358);
var k = cljs.core.nth.call(null,vec__38359,(0),null);
var plugin = cljs.core.nth.call(null,vec__38359,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38365 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38355,chunk__38356,count__38357,i__38358,pl_38365,vec__38359,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38365.call(null,msg_hist);
});})(seq__38355,chunk__38356,count__38357,i__38358,pl_38365,vec__38359,k,plugin))
);
} else {
}

var G__38366 = seq__38355;
var G__38367 = chunk__38356;
var G__38368 = count__38357;
var G__38369 = (i__38358 + (1));
seq__38355 = G__38366;
chunk__38356 = G__38367;
count__38357 = G__38368;
i__38358 = G__38369;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38355);
if(temp__4657__auto__){
var seq__38355__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38355__$1)){
var c__27168__auto__ = cljs.core.chunk_first.call(null,seq__38355__$1);
var G__38370 = cljs.core.chunk_rest.call(null,seq__38355__$1);
var G__38371 = c__27168__auto__;
var G__38372 = cljs.core.count.call(null,c__27168__auto__);
var G__38373 = (0);
seq__38355 = G__38370;
chunk__38356 = G__38371;
count__38357 = G__38372;
i__38358 = G__38373;
continue;
} else {
var vec__38362 = cljs.core.first.call(null,seq__38355__$1);
var k = cljs.core.nth.call(null,vec__38362,(0),null);
var plugin = cljs.core.nth.call(null,vec__38362,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38374 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38355,chunk__38356,count__38357,i__38358,pl_38374,vec__38362,k,plugin,seq__38355__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38374.call(null,msg_hist);
});})(seq__38355,chunk__38356,count__38357,i__38358,pl_38374,vec__38362,k,plugin,seq__38355__$1,temp__4657__auto__))
);
} else {
}

var G__38375 = cljs.core.next.call(null,seq__38355__$1);
var G__38376 = null;
var G__38377 = (0);
var G__38378 = (0);
seq__38355 = G__38375;
chunk__38356 = G__38376;
count__38357 = G__38377;
i__38358 = G__38378;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38379 = [];
var len__27462__auto___38386 = arguments.length;
var i__27463__auto___38387 = (0);
while(true){
if((i__27463__auto___38387 < len__27462__auto___38386)){
args38379.push((arguments[i__27463__auto___38387]));

var G__38388 = (i__27463__auto___38387 + (1));
i__27463__auto___38387 = G__38388;
continue;
} else {
}
break;
}

var G__38381 = args38379.length;
switch (G__38381) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38379.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38382_38390 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38383_38391 = null;
var count__38384_38392 = (0);
var i__38385_38393 = (0);
while(true){
if((i__38385_38393 < count__38384_38392)){
var msg_38394 = cljs.core._nth.call(null,chunk__38383_38391,i__38385_38393);
figwheel.client.socket.handle_incoming_message.call(null,msg_38394);

var G__38395 = seq__38382_38390;
var G__38396 = chunk__38383_38391;
var G__38397 = count__38384_38392;
var G__38398 = (i__38385_38393 + (1));
seq__38382_38390 = G__38395;
chunk__38383_38391 = G__38396;
count__38384_38392 = G__38397;
i__38385_38393 = G__38398;
continue;
} else {
var temp__4657__auto___38399 = cljs.core.seq.call(null,seq__38382_38390);
if(temp__4657__auto___38399){
var seq__38382_38400__$1 = temp__4657__auto___38399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38382_38400__$1)){
var c__27168__auto___38401 = cljs.core.chunk_first.call(null,seq__38382_38400__$1);
var G__38402 = cljs.core.chunk_rest.call(null,seq__38382_38400__$1);
var G__38403 = c__27168__auto___38401;
var G__38404 = cljs.core.count.call(null,c__27168__auto___38401);
var G__38405 = (0);
seq__38382_38390 = G__38402;
chunk__38383_38391 = G__38403;
count__38384_38392 = G__38404;
i__38385_38393 = G__38405;
continue;
} else {
var msg_38406 = cljs.core.first.call(null,seq__38382_38400__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38406);

var G__38407 = cljs.core.next.call(null,seq__38382_38400__$1);
var G__38408 = null;
var G__38409 = (0);
var G__38410 = (0);
seq__38382_38390 = G__38407;
chunk__38383_38391 = G__38408;
count__38384_38392 = G__38409;
i__38385_38393 = G__38410;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27469__auto__ = [];
var len__27462__auto___38415 = arguments.length;
var i__27463__auto___38416 = (0);
while(true){
if((i__27463__auto___38416 < len__27462__auto___38415)){
args__27469__auto__.push((arguments[i__27463__auto___38416]));

var G__38417 = (i__27463__auto___38416 + (1));
i__27463__auto___38416 = G__38417;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38412){
var map__38413 = p__38412;
var map__38413__$1 = ((((!((map__38413 == null)))?((((map__38413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38413):map__38413);
var opts = map__38413__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38411){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38411));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38419){if((e38419 instanceof Error)){
var e = e38419;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38419;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38423){
var map__38424 = p__38423;
var map__38424__$1 = ((((!((map__38424 == null)))?((((map__38424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38424):map__38424);
var msg_name = cljs.core.get.call(null,map__38424__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1494453161716