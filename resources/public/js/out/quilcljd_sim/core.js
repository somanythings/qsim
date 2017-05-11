// Compiled by ClojureScript 1.9.473 {}
goog.provide('quilcljd_sim.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
quilcljd_sim.core.setup = (function quilcljd_sim$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.text_font.call(null,quil.core.create_font.call(null,"Arial",(28),true));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(5),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(30),(20),(10),(50),(60),(10),(1)], null),new cljs.core.Keyword(null,"desks","desks",1163435797),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(110),(50),(20),(0),(50),(20)], null)], null);
});
quilcljd_sim.core.desk_width = (40);
quilcljd_sim.core.desk_gap = (5);
quilcljd_sim.core.update_state = (function quilcljd_sim$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"desks","desks",1163435797),cljs.core.map.call(null,(function (n){
return cljs.core.mod.call(null,(n - 0.6),(255));
}),new cljs.core.Keyword(null,"desks","desks",1163435797).cljs$core$IFn$_invoke$arity$1(state))], null);
});
quilcljd_sim.core.draw_desks = (function quilcljd_sim$core$draw_desks(desks){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,n){
var space = (quilcljd_sim.core.desk_gap + quilcljd_sim.core.desk_width);
quil.core.fill.call(null,(55),n,(255));

return quil.core.rect.call(null,(i * space),(20),quilcljd_sim.core.desk_width,quilcljd_sim.core.desk_width);
}),desks));
});
quilcljd_sim.core.draw_state = (function quilcljd_sim$core$draw_state(state){
quil.core.background.call(null,(240));

var desks_30475 = new cljs.core.Keyword(null,"desks","desks",1163435797).cljs$core$IFn$_invoke$arity$1(state);
quilcljd_sim.core.draw_desks.call(null,desks_30475);

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__27933__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__27933__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
quilcljd_sim.core.quilcljd_sim = (function quilcljd_sim$core$quilcljd_sim(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"quilcljd-sim",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,quilcljd_sim.core.update_state))?(function() { 
var G__30476__delegate = function (args){
return cljs.core.apply.call(null,quilcljd_sim.core.update_state,args);
};
var G__30476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30477__i = 0, G__30477__a = new Array(arguments.length -  0);
while (G__30477__i < G__30477__a.length) {G__30477__a[G__30477__i] = arguments[G__30477__i + 0]; ++G__30477__i;}
  args = new cljs.core.IndexedSeq(G__30477__a,0);
} 
return G__30476__delegate.call(this,args);};
G__30476.cljs$lang$maxFixedArity = 0;
G__30476.cljs$lang$applyTo = (function (arglist__30478){
var args = cljs.core.seq(arglist__30478);
return G__30476__delegate(args);
});
G__30476.cljs$core$IFn$_invoke$arity$variadic = G__30476__delegate;
return G__30476;
})()
:quilcljd_sim.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,quilcljd_sim.core.setup))?(function() { 
var G__30479__delegate = function (args){
return cljs.core.apply.call(null,quilcljd_sim.core.setup,args);
};
var G__30479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30480__i = 0, G__30480__a = new Array(arguments.length -  0);
while (G__30480__i < G__30480__a.length) {G__30480__a[G__30480__i] = arguments[G__30480__i + 0]; ++G__30480__i;}
  args = new cljs.core.IndexedSeq(G__30480__a,0);
} 
return G__30479__delegate.call(this,args);};
G__30479.cljs$lang$maxFixedArity = 0;
G__30479.cljs$lang$applyTo = (function (arglist__30481){
var args = cljs.core.seq(arglist__30481);
return G__30479__delegate(args);
});
G__30479.cljs$core$IFn$_invoke$arity$variadic = G__30479__delegate;
return G__30479;
})()
:quilcljd_sim.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,quilcljd_sim.core.draw_state))?(function() { 
var G__30482__delegate = function (args){
return cljs.core.apply.call(null,quilcljd_sim.core.draw_state,args);
};
var G__30482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30483__i = 0, G__30483__a = new Array(arguments.length -  0);
while (G__30483__i < G__30483__a.length) {G__30483__a[G__30483__i] = arguments[G__30483__i + 0]; ++G__30483__i;}
  args = new cljs.core.IndexedSeq(G__30483__a,0);
} 
return G__30482__delegate.call(this,args);};
G__30482.cljs$lang$maxFixedArity = 0;
G__30482.cljs$lang$applyTo = (function (arglist__30484){
var args = cljs.core.seq(arglist__30484);
return G__30482__delegate(args);
});
G__30482.cljs$core$IFn$_invoke$arity$variadic = G__30482__delegate;
return G__30482;
})()
:quilcljd_sim.core.draw_state));
});
goog.exportSymbol('quilcljd_sim.core.quilcljd_sim', quilcljd_sim.core.quilcljd_sim);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27546__27547__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27546__27547__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),quilcljd_sim.core.quilcljd_sim,new cljs.core.Keyword(null,"host-id","host-id",742376279),"quilcljd-sim"], null));
}

//# sourceMappingURL=core.js.map?rel=1494460722027