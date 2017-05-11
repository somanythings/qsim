// Compiled by ClojureScript 1.9.473 {}
goog.provide('quilcljd_sim.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
quilcljd_sim.core.setup = (function quilcljd_sim$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
quilcljd_sim.core.update_state = (function quilcljd_sim$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
quilcljd_sim.core.draw_state = (function quilcljd_sim$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__35633__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__35633__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
quilcljd_sim.core.quilcljd_sim = (function quilcljd_sim$core$quilcljd_sim(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"quilcljd-sim",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,quilcljd_sim.core.update_state))?(function() { 
var G__35733__delegate = function (args){
return cljs.core.apply.call(null,quilcljd_sim.core.update_state,args);
};
var G__35733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35734__i = 0, G__35734__a = new Array(arguments.length -  0);
while (G__35734__i < G__35734__a.length) {G__35734__a[G__35734__i] = arguments[G__35734__i + 0]; ++G__35734__i;}
  args = new cljs.core.IndexedSeq(G__35734__a,0);
} 
return G__35733__delegate.call(this,args);};
G__35733.cljs$lang$maxFixedArity = 0;
G__35733.cljs$lang$applyTo = (function (arglist__35735){
var args = cljs.core.seq(arglist__35735);
return G__35733__delegate(args);
});
G__35733.cljs$core$IFn$_invoke$arity$variadic = G__35733__delegate;
return G__35733;
})()
:quilcljd_sim.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,quilcljd_sim.core.setup))?(function() { 
var G__35736__delegate = function (args){
return cljs.core.apply.call(null,quilcljd_sim.core.setup,args);
};
var G__35736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35737__i = 0, G__35737__a = new Array(arguments.length -  0);
while (G__35737__i < G__35737__a.length) {G__35737__a[G__35737__i] = arguments[G__35737__i + 0]; ++G__35737__i;}
  args = new cljs.core.IndexedSeq(G__35737__a,0);
} 
return G__35736__delegate.call(this,args);};
G__35736.cljs$lang$maxFixedArity = 0;
G__35736.cljs$lang$applyTo = (function (arglist__35738){
var args = cljs.core.seq(arglist__35738);
return G__35736__delegate(args);
});
G__35736.cljs$core$IFn$_invoke$arity$variadic = G__35736__delegate;
return G__35736;
})()
:quilcljd_sim.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,quilcljd_sim.core.draw_state))?(function() { 
var G__35739__delegate = function (args){
return cljs.core.apply.call(null,quilcljd_sim.core.draw_state,args);
};
var G__35739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35740__i = 0, G__35740__a = new Array(arguments.length -  0);
while (G__35740__i < G__35740__a.length) {G__35740__a[G__35740__i] = arguments[G__35740__i + 0]; ++G__35740__i;}
  args = new cljs.core.IndexedSeq(G__35740__a,0);
} 
return G__35739__delegate.call(this,args);};
G__35739.cljs$lang$maxFixedArity = 0;
G__35739.cljs$lang$applyTo = (function (arglist__35741){
var args = cljs.core.seq(arglist__35741);
return G__35739__delegate(args);
});
G__35739.cljs$core$IFn$_invoke$arity$variadic = G__35739__delegate;
return G__35739;
})()
:quilcljd_sim.core.draw_state));
});
goog.exportSymbol('quilcljd_sim.core.quilcljd_sim', quilcljd_sim.core.quilcljd_sim);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__34462__34463__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__34462__34463__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),quilcljd_sim.core.quilcljd_sim,new cljs.core.Keyword(null,"host-id","host-id",742376279),"quilcljd-sim"], null));
}

//# sourceMappingURL=core.js.map?rel=1494451920350