// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26349__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26349__auto__){
return or__26349__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26349__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26349__auto__)){
return or__26349__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33323_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33323_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33328 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33329 = null;
var count__33330 = (0);
var i__33331 = (0);
while(true){
if((i__33331 < count__33330)){
var n = cljs.core._nth.call(null,chunk__33329,i__33331);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33332 = seq__33328;
var G__33333 = chunk__33329;
var G__33334 = count__33330;
var G__33335 = (i__33331 + (1));
seq__33328 = G__33332;
chunk__33329 = G__33333;
count__33330 = G__33334;
i__33331 = G__33335;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33328);
if(temp__4657__auto__){
var seq__33328__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33328__$1)){
var c__27168__auto__ = cljs.core.chunk_first.call(null,seq__33328__$1);
var G__33336 = cljs.core.chunk_rest.call(null,seq__33328__$1);
var G__33337 = c__27168__auto__;
var G__33338 = cljs.core.count.call(null,c__27168__auto__);
var G__33339 = (0);
seq__33328 = G__33336;
chunk__33329 = G__33337;
count__33330 = G__33338;
i__33331 = G__33339;
continue;
} else {
var n = cljs.core.first.call(null,seq__33328__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33340 = cljs.core.next.call(null,seq__33328__$1);
var G__33341 = null;
var G__33342 = (0);
var G__33343 = (0);
seq__33328 = G__33340;
chunk__33329 = G__33341;
count__33330 = G__33342;
i__33331 = G__33343;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33394_33405 = cljs.core.seq.call(null,deps);
var chunk__33395_33406 = null;
var count__33396_33407 = (0);
var i__33397_33408 = (0);
while(true){
if((i__33397_33408 < count__33396_33407)){
var dep_33409 = cljs.core._nth.call(null,chunk__33395_33406,i__33397_33408);
topo_sort_helper_STAR_.call(null,dep_33409,(depth + (1)),state);

var G__33410 = seq__33394_33405;
var G__33411 = chunk__33395_33406;
var G__33412 = count__33396_33407;
var G__33413 = (i__33397_33408 + (1));
seq__33394_33405 = G__33410;
chunk__33395_33406 = G__33411;
count__33396_33407 = G__33412;
i__33397_33408 = G__33413;
continue;
} else {
var temp__4657__auto___33414 = cljs.core.seq.call(null,seq__33394_33405);
if(temp__4657__auto___33414){
var seq__33394_33415__$1 = temp__4657__auto___33414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33394_33415__$1)){
var c__27168__auto___33416 = cljs.core.chunk_first.call(null,seq__33394_33415__$1);
var G__33417 = cljs.core.chunk_rest.call(null,seq__33394_33415__$1);
var G__33418 = c__27168__auto___33416;
var G__33419 = cljs.core.count.call(null,c__27168__auto___33416);
var G__33420 = (0);
seq__33394_33405 = G__33417;
chunk__33395_33406 = G__33418;
count__33396_33407 = G__33419;
i__33397_33408 = G__33420;
continue;
} else {
var dep_33421 = cljs.core.first.call(null,seq__33394_33415__$1);
topo_sort_helper_STAR_.call(null,dep_33421,(depth + (1)),state);

var G__33422 = cljs.core.next.call(null,seq__33394_33415__$1);
var G__33423 = null;
var G__33424 = (0);
var G__33425 = (0);
seq__33394_33405 = G__33422;
chunk__33395_33406 = G__33423;
count__33396_33407 = G__33424;
i__33397_33408 = G__33425;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33398){
var vec__33402 = p__33398;
var seq__33403 = cljs.core.seq.call(null,vec__33402);
var first__33404 = cljs.core.first.call(null,seq__33403);
var seq__33403__$1 = cljs.core.next.call(null,seq__33403);
var x = first__33404;
var xs = seq__33403__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33402,seq__33403,first__33404,seq__33403__$1,x,xs,get_deps__$1){
return (function (p1__33344_SHARP_){
return clojure.set.difference.call(null,p1__33344_SHARP_,x);
});})(vec__33402,seq__33403,first__33404,seq__33403__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33438 = cljs.core.seq.call(null,provides);
var chunk__33439 = null;
var count__33440 = (0);
var i__33441 = (0);
while(true){
if((i__33441 < count__33440)){
var prov = cljs.core._nth.call(null,chunk__33439,i__33441);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33442_33450 = cljs.core.seq.call(null,requires);
var chunk__33443_33451 = null;
var count__33444_33452 = (0);
var i__33445_33453 = (0);
while(true){
if((i__33445_33453 < count__33444_33452)){
var req_33454 = cljs.core._nth.call(null,chunk__33443_33451,i__33445_33453);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33454,prov);

var G__33455 = seq__33442_33450;
var G__33456 = chunk__33443_33451;
var G__33457 = count__33444_33452;
var G__33458 = (i__33445_33453 + (1));
seq__33442_33450 = G__33455;
chunk__33443_33451 = G__33456;
count__33444_33452 = G__33457;
i__33445_33453 = G__33458;
continue;
} else {
var temp__4657__auto___33459 = cljs.core.seq.call(null,seq__33442_33450);
if(temp__4657__auto___33459){
var seq__33442_33460__$1 = temp__4657__auto___33459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33442_33460__$1)){
var c__27168__auto___33461 = cljs.core.chunk_first.call(null,seq__33442_33460__$1);
var G__33462 = cljs.core.chunk_rest.call(null,seq__33442_33460__$1);
var G__33463 = c__27168__auto___33461;
var G__33464 = cljs.core.count.call(null,c__27168__auto___33461);
var G__33465 = (0);
seq__33442_33450 = G__33462;
chunk__33443_33451 = G__33463;
count__33444_33452 = G__33464;
i__33445_33453 = G__33465;
continue;
} else {
var req_33466 = cljs.core.first.call(null,seq__33442_33460__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33466,prov);

var G__33467 = cljs.core.next.call(null,seq__33442_33460__$1);
var G__33468 = null;
var G__33469 = (0);
var G__33470 = (0);
seq__33442_33450 = G__33467;
chunk__33443_33451 = G__33468;
count__33444_33452 = G__33469;
i__33445_33453 = G__33470;
continue;
}
} else {
}
}
break;
}

var G__33471 = seq__33438;
var G__33472 = chunk__33439;
var G__33473 = count__33440;
var G__33474 = (i__33441 + (1));
seq__33438 = G__33471;
chunk__33439 = G__33472;
count__33440 = G__33473;
i__33441 = G__33474;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33438);
if(temp__4657__auto__){
var seq__33438__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33438__$1)){
var c__27168__auto__ = cljs.core.chunk_first.call(null,seq__33438__$1);
var G__33475 = cljs.core.chunk_rest.call(null,seq__33438__$1);
var G__33476 = c__27168__auto__;
var G__33477 = cljs.core.count.call(null,c__27168__auto__);
var G__33478 = (0);
seq__33438 = G__33475;
chunk__33439 = G__33476;
count__33440 = G__33477;
i__33441 = G__33478;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33438__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33446_33479 = cljs.core.seq.call(null,requires);
var chunk__33447_33480 = null;
var count__33448_33481 = (0);
var i__33449_33482 = (0);
while(true){
if((i__33449_33482 < count__33448_33481)){
var req_33483 = cljs.core._nth.call(null,chunk__33447_33480,i__33449_33482);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33483,prov);

var G__33484 = seq__33446_33479;
var G__33485 = chunk__33447_33480;
var G__33486 = count__33448_33481;
var G__33487 = (i__33449_33482 + (1));
seq__33446_33479 = G__33484;
chunk__33447_33480 = G__33485;
count__33448_33481 = G__33486;
i__33449_33482 = G__33487;
continue;
} else {
var temp__4657__auto___33488__$1 = cljs.core.seq.call(null,seq__33446_33479);
if(temp__4657__auto___33488__$1){
var seq__33446_33489__$1 = temp__4657__auto___33488__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33446_33489__$1)){
var c__27168__auto___33490 = cljs.core.chunk_first.call(null,seq__33446_33489__$1);
var G__33491 = cljs.core.chunk_rest.call(null,seq__33446_33489__$1);
var G__33492 = c__27168__auto___33490;
var G__33493 = cljs.core.count.call(null,c__27168__auto___33490);
var G__33494 = (0);
seq__33446_33479 = G__33491;
chunk__33447_33480 = G__33492;
count__33448_33481 = G__33493;
i__33449_33482 = G__33494;
continue;
} else {
var req_33495 = cljs.core.first.call(null,seq__33446_33489__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33495,prov);

var G__33496 = cljs.core.next.call(null,seq__33446_33489__$1);
var G__33497 = null;
var G__33498 = (0);
var G__33499 = (0);
seq__33446_33479 = G__33496;
chunk__33447_33480 = G__33497;
count__33448_33481 = G__33498;
i__33449_33482 = G__33499;
continue;
}
} else {
}
}
break;
}

var G__33500 = cljs.core.next.call(null,seq__33438__$1);
var G__33501 = null;
var G__33502 = (0);
var G__33503 = (0);
seq__33438 = G__33500;
chunk__33439 = G__33501;
count__33440 = G__33502;
i__33441 = G__33503;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33508_33512 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33509_33513 = null;
var count__33510_33514 = (0);
var i__33511_33515 = (0);
while(true){
if((i__33511_33515 < count__33510_33514)){
var ns_33516 = cljs.core._nth.call(null,chunk__33509_33513,i__33511_33515);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33516);

var G__33517 = seq__33508_33512;
var G__33518 = chunk__33509_33513;
var G__33519 = count__33510_33514;
var G__33520 = (i__33511_33515 + (1));
seq__33508_33512 = G__33517;
chunk__33509_33513 = G__33518;
count__33510_33514 = G__33519;
i__33511_33515 = G__33520;
continue;
} else {
var temp__4657__auto___33521 = cljs.core.seq.call(null,seq__33508_33512);
if(temp__4657__auto___33521){
var seq__33508_33522__$1 = temp__4657__auto___33521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33508_33522__$1)){
var c__27168__auto___33523 = cljs.core.chunk_first.call(null,seq__33508_33522__$1);
var G__33524 = cljs.core.chunk_rest.call(null,seq__33508_33522__$1);
var G__33525 = c__27168__auto___33523;
var G__33526 = cljs.core.count.call(null,c__27168__auto___33523);
var G__33527 = (0);
seq__33508_33512 = G__33524;
chunk__33509_33513 = G__33525;
count__33510_33514 = G__33526;
i__33511_33515 = G__33527;
continue;
} else {
var ns_33528 = cljs.core.first.call(null,seq__33508_33522__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33528);

var G__33529 = cljs.core.next.call(null,seq__33508_33522__$1);
var G__33530 = null;
var G__33531 = (0);
var G__33532 = (0);
seq__33508_33512 = G__33529;
chunk__33509_33513 = G__33530;
count__33510_33514 = G__33531;
i__33511_33515 = G__33532;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26349__auto__ = goog.require__;
if(cljs.core.truth_(or__26349__auto__)){
return or__26349__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33533__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33534__i = 0, G__33534__a = new Array(arguments.length -  0);
while (G__33534__i < G__33534__a.length) {G__33534__a[G__33534__i] = arguments[G__33534__i + 0]; ++G__33534__i;}
  args = new cljs.core.IndexedSeq(G__33534__a,0);
} 
return G__33533__delegate.call(this,args);};
G__33533.cljs$lang$maxFixedArity = 0;
G__33533.cljs$lang$applyTo = (function (arglist__33535){
var args = cljs.core.seq(arglist__33535);
return G__33533__delegate(args);
});
G__33533.cljs$core$IFn$_invoke$arity$variadic = G__33533__delegate;
return G__33533;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33536 = cljs.core._EQ_;
var expr__33537 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33536.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33537))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33536,expr__33537){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33536,expr__33537))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33536,expr__33537){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33539){if((e33539 instanceof Error)){
var e = e33539;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33539;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33536,expr__33537))
} else {
if(cljs.core.truth_(pred__33536.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33537))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33536.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33537))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33536.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33537))){
return ((function (pred__33536,expr__33537){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33540){if((e33540 instanceof Error)){
var e = e33540;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33540;

}
}})());
});
;})(pred__33536,expr__33537))
} else {
return ((function (pred__33536,expr__33537){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33536,expr__33537))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33541,callback){
var map__33544 = p__33541;
var map__33544__$1 = ((((!((map__33544 == null)))?((((map__33544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33544):map__33544);
var file_msg = map__33544__$1;
var request_url = cljs.core.get.call(null,map__33544__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33544,map__33544__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33544,map__33544__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto__){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto__){
return (function (state_33568){
var state_val_33569 = (state_33568[(1)]);
if((state_val_33569 === (7))){
var inst_33564 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33570_33590 = state_33568__$1;
(statearr_33570_33590[(2)] = inst_33564);

(statearr_33570_33590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (1))){
var state_33568__$1 = state_33568;
var statearr_33571_33591 = state_33568__$1;
(statearr_33571_33591[(2)] = null);

(statearr_33571_33591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (4))){
var inst_33548 = (state_33568[(7)]);
var inst_33548__$1 = (state_33568[(2)]);
var state_33568__$1 = (function (){var statearr_33572 = state_33568;
(statearr_33572[(7)] = inst_33548__$1);

return statearr_33572;
})();
if(cljs.core.truth_(inst_33548__$1)){
var statearr_33573_33592 = state_33568__$1;
(statearr_33573_33592[(1)] = (5));

} else {
var statearr_33574_33593 = state_33568__$1;
(statearr_33574_33593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (6))){
var state_33568__$1 = state_33568;
var statearr_33575_33594 = state_33568__$1;
(statearr_33575_33594[(2)] = null);

(statearr_33575_33594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (3))){
var inst_33566 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33568__$1,inst_33566);
} else {
if((state_val_33569 === (2))){
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33568__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33569 === (11))){
var inst_33560 = (state_33568[(2)]);
var state_33568__$1 = (function (){var statearr_33576 = state_33568;
(statearr_33576[(8)] = inst_33560);

return statearr_33576;
})();
var statearr_33577_33595 = state_33568__$1;
(statearr_33577_33595[(2)] = null);

(statearr_33577_33595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (9))){
var inst_33552 = (state_33568[(9)]);
var inst_33554 = (state_33568[(10)]);
var inst_33556 = inst_33554.call(null,inst_33552);
var state_33568__$1 = state_33568;
var statearr_33578_33596 = state_33568__$1;
(statearr_33578_33596[(2)] = inst_33556);

(statearr_33578_33596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (5))){
var inst_33548 = (state_33568[(7)]);
var inst_33550 = figwheel.client.file_reloading.blocking_load.call(null,inst_33548);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33568__$1,(8),inst_33550);
} else {
if((state_val_33569 === (10))){
var inst_33552 = (state_33568[(9)]);
var inst_33558 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33552);
var state_33568__$1 = state_33568;
var statearr_33579_33597 = state_33568__$1;
(statearr_33579_33597[(2)] = inst_33558);

(statearr_33579_33597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (8))){
var inst_33548 = (state_33568[(7)]);
var inst_33554 = (state_33568[(10)]);
var inst_33552 = (state_33568[(2)]);
var inst_33553 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33554__$1 = cljs.core.get.call(null,inst_33553,inst_33548);
var state_33568__$1 = (function (){var statearr_33580 = state_33568;
(statearr_33580[(9)] = inst_33552);

(statearr_33580[(10)] = inst_33554__$1);

return statearr_33580;
})();
if(cljs.core.truth_(inst_33554__$1)){
var statearr_33581_33598 = state_33568__$1;
(statearr_33581_33598[(1)] = (9));

} else {
var statearr_33582_33599 = state_33568__$1;
(statearr_33582_33599[(1)] = (10));

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
});})(c__28559__auto__))
;
return ((function (switch__28447__auto__,c__28559__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28448__auto__ = null;
var figwheel$client$file_reloading$state_machine__28448__auto____0 = (function (){
var statearr_33586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33586[(0)] = figwheel$client$file_reloading$state_machine__28448__auto__);

(statearr_33586[(1)] = (1));

return statearr_33586;
});
var figwheel$client$file_reloading$state_machine__28448__auto____1 = (function (state_33568){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_33568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e33587){if((e33587 instanceof Object)){
var ex__28451__auto__ = e33587;
var statearr_33588_33600 = state_33568;
(statearr_33588_33600[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33601 = state_33568;
state_33568 = G__33601;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28448__auto__ = function(state_33568){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28448__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28448__auto____1.call(this,state_33568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28448__auto____0;
figwheel$client$file_reloading$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28448__auto____1;
return figwheel$client$file_reloading$state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto__))
})();
var state__28561__auto__ = (function (){var statearr_33589 = f__28560__auto__.call(null);
(statearr_33589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto__);

return statearr_33589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto__))
);

return c__28559__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33602,callback){
var map__33605 = p__33602;
var map__33605__$1 = ((((!((map__33605 == null)))?((((map__33605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33605):map__33605);
var file_msg = map__33605__$1;
var namespace = cljs.core.get.call(null,map__33605__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33605,map__33605__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33605,map__33605__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33607){
var map__33610 = p__33607;
var map__33610__$1 = ((((!((map__33610 == null)))?((((map__33610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33610):map__33610);
var file_msg = map__33610__$1;
var namespace = cljs.core.get.call(null,map__33610__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33612){
var map__33615 = p__33612;
var map__33615__$1 = ((((!((map__33615 == null)))?((((map__33615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33615):map__33615);
var file_msg = map__33615__$1;
var namespace = cljs.core.get.call(null,map__33615__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26337__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__26337__auto__){
var or__26349__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26349__auto__)){
return or__26349__auto__;
} else {
var or__26349__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26349__auto____$1)){
return or__26349__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26337__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33617,callback){
var map__33620 = p__33617;
var map__33620__$1 = ((((!((map__33620 == null)))?((((map__33620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33620):map__33620);
var file_msg = map__33620__$1;
var request_url = cljs.core.get.call(null,map__33620__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33620__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28559__auto___33724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___33724,out){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___33724,out){
return (function (state_33706){
var state_val_33707 = (state_33706[(1)]);
if((state_val_33707 === (1))){
var inst_33680 = cljs.core.seq.call(null,files);
var inst_33681 = cljs.core.first.call(null,inst_33680);
var inst_33682 = cljs.core.next.call(null,inst_33680);
var inst_33683 = files;
var state_33706__$1 = (function (){var statearr_33708 = state_33706;
(statearr_33708[(7)] = inst_33681);

(statearr_33708[(8)] = inst_33682);

(statearr_33708[(9)] = inst_33683);

return statearr_33708;
})();
var statearr_33709_33725 = state_33706__$1;
(statearr_33709_33725[(2)] = null);

(statearr_33709_33725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33707 === (2))){
var inst_33689 = (state_33706[(10)]);
var inst_33683 = (state_33706[(9)]);
var inst_33688 = cljs.core.seq.call(null,inst_33683);
var inst_33689__$1 = cljs.core.first.call(null,inst_33688);
var inst_33690 = cljs.core.next.call(null,inst_33688);
var inst_33691 = (inst_33689__$1 == null);
var inst_33692 = cljs.core.not.call(null,inst_33691);
var state_33706__$1 = (function (){var statearr_33710 = state_33706;
(statearr_33710[(11)] = inst_33690);

(statearr_33710[(10)] = inst_33689__$1);

return statearr_33710;
})();
if(inst_33692){
var statearr_33711_33726 = state_33706__$1;
(statearr_33711_33726[(1)] = (4));

} else {
var statearr_33712_33727 = state_33706__$1;
(statearr_33712_33727[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33707 === (3))){
var inst_33704 = (state_33706[(2)]);
var state_33706__$1 = state_33706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33706__$1,inst_33704);
} else {
if((state_val_33707 === (4))){
var inst_33689 = (state_33706[(10)]);
var inst_33694 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33689);
var state_33706__$1 = state_33706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33706__$1,(7),inst_33694);
} else {
if((state_val_33707 === (5))){
var inst_33700 = cljs.core.async.close_BANG_.call(null,out);
var state_33706__$1 = state_33706;
var statearr_33713_33728 = state_33706__$1;
(statearr_33713_33728[(2)] = inst_33700);

(statearr_33713_33728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33707 === (6))){
var inst_33702 = (state_33706[(2)]);
var state_33706__$1 = state_33706;
var statearr_33714_33729 = state_33706__$1;
(statearr_33714_33729[(2)] = inst_33702);

(statearr_33714_33729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33707 === (7))){
var inst_33690 = (state_33706[(11)]);
var inst_33696 = (state_33706[(2)]);
var inst_33697 = cljs.core.async.put_BANG_.call(null,out,inst_33696);
var inst_33683 = inst_33690;
var state_33706__$1 = (function (){var statearr_33715 = state_33706;
(statearr_33715[(9)] = inst_33683);

(statearr_33715[(12)] = inst_33697);

return statearr_33715;
})();
var statearr_33716_33730 = state_33706__$1;
(statearr_33716_33730[(2)] = null);

(statearr_33716_33730[(1)] = (2));


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
});})(c__28559__auto___33724,out))
;
return ((function (switch__28447__auto__,c__28559__auto___33724,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28448__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28448__auto____0 = (function (){
var statearr_33720 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33720[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28448__auto__);

(statearr_33720[(1)] = (1));

return statearr_33720;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28448__auto____1 = (function (state_33706){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_33706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e33721){if((e33721 instanceof Object)){
var ex__28451__auto__ = e33721;
var statearr_33722_33731 = state_33706;
(statearr_33722_33731[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33732 = state_33706;
state_33706 = G__33732;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28448__auto__ = function(state_33706){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28448__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28448__auto____1.call(this,state_33706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28448__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28448__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___33724,out))
})();
var state__28561__auto__ = (function (){var statearr_33723 = f__28560__auto__.call(null);
(statearr_33723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___33724);

return statearr_33723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___33724,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33733,opts){
var map__33737 = p__33733;
var map__33737__$1 = ((((!((map__33737 == null)))?((((map__33737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33737):map__33737);
var eval_body = cljs.core.get.call(null,map__33737__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26337__auto__ = eval_body;
if(cljs.core.truth_(and__26337__auto__)){
return typeof eval_body === 'string';
} else {
return and__26337__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33739){var e = e33739;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33740_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33740_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33749){
var vec__33750 = p__33749;
var k = cljs.core.nth.call(null,vec__33750,(0),null);
var v = cljs.core.nth.call(null,vec__33750,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33753){
var vec__33754 = p__33753;
var k = cljs.core.nth.call(null,vec__33754,(0),null);
var v = cljs.core.nth.call(null,vec__33754,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33760,p__33761){
var map__34009 = p__33760;
var map__34009__$1 = ((((!((map__34009 == null)))?((((map__34009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34009):map__34009);
var opts = map__34009__$1;
var before_jsload = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34010 = p__33761;
var map__34010__$1 = ((((!((map__34010 == null)))?((((map__34010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34010):map__34010);
var msg = map__34010__$1;
var files = cljs.core.get.call(null,map__34010__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34010__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34010__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34164){
var state_val_34165 = (state_34164[(1)]);
if((state_val_34165 === (7))){
var inst_34024 = (state_34164[(7)]);
var inst_34027 = (state_34164[(8)]);
var inst_34025 = (state_34164[(9)]);
var inst_34026 = (state_34164[(10)]);
var inst_34032 = cljs.core._nth.call(null,inst_34025,inst_34027);
var inst_34033 = figwheel.client.file_reloading.eval_body.call(null,inst_34032,opts);
var inst_34034 = (inst_34027 + (1));
var tmp34166 = inst_34024;
var tmp34167 = inst_34025;
var tmp34168 = inst_34026;
var inst_34024__$1 = tmp34166;
var inst_34025__$1 = tmp34167;
var inst_34026__$1 = tmp34168;
var inst_34027__$1 = inst_34034;
var state_34164__$1 = (function (){var statearr_34169 = state_34164;
(statearr_34169[(11)] = inst_34033);

(statearr_34169[(7)] = inst_34024__$1);

(statearr_34169[(8)] = inst_34027__$1);

(statearr_34169[(9)] = inst_34025__$1);

(statearr_34169[(10)] = inst_34026__$1);

return statearr_34169;
})();
var statearr_34170_34256 = state_34164__$1;
(statearr_34170_34256[(2)] = null);

(statearr_34170_34256[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (20))){
var inst_34067 = (state_34164[(12)]);
var inst_34075 = figwheel.client.file_reloading.sort_files.call(null,inst_34067);
var state_34164__$1 = state_34164;
var statearr_34171_34257 = state_34164__$1;
(statearr_34171_34257[(2)] = inst_34075);

(statearr_34171_34257[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (27))){
var state_34164__$1 = state_34164;
var statearr_34172_34258 = state_34164__$1;
(statearr_34172_34258[(2)] = null);

(statearr_34172_34258[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (1))){
var inst_34016 = (state_34164[(13)]);
var inst_34013 = before_jsload.call(null,files);
var inst_34014 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34015 = (function (){return ((function (inst_34016,inst_34013,inst_34014,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33757_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33757_SHARP_);
});
;})(inst_34016,inst_34013,inst_34014,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34016__$1 = cljs.core.filter.call(null,inst_34015,files);
var inst_34017 = cljs.core.not_empty.call(null,inst_34016__$1);
var state_34164__$1 = (function (){var statearr_34173 = state_34164;
(statearr_34173[(13)] = inst_34016__$1);

(statearr_34173[(14)] = inst_34014);

(statearr_34173[(15)] = inst_34013);

return statearr_34173;
})();
if(cljs.core.truth_(inst_34017)){
var statearr_34174_34259 = state_34164__$1;
(statearr_34174_34259[(1)] = (2));

} else {
var statearr_34175_34260 = state_34164__$1;
(statearr_34175_34260[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (24))){
var state_34164__$1 = state_34164;
var statearr_34176_34261 = state_34164__$1;
(statearr_34176_34261[(2)] = null);

(statearr_34176_34261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (39))){
var inst_34117 = (state_34164[(16)]);
var state_34164__$1 = state_34164;
var statearr_34177_34262 = state_34164__$1;
(statearr_34177_34262[(2)] = inst_34117);

(statearr_34177_34262[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (46))){
var inst_34159 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34178_34263 = state_34164__$1;
(statearr_34178_34263[(2)] = inst_34159);

(statearr_34178_34263[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (4))){
var inst_34061 = (state_34164[(2)]);
var inst_34062 = cljs.core.List.EMPTY;
var inst_34063 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34062);
var inst_34064 = (function (){return ((function (inst_34061,inst_34062,inst_34063,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33758_SHARP_){
var and__26337__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33758_SHARP_);
if(cljs.core.truth_(and__26337__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33758_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33758_SHARP_)));
} else {
return and__26337__auto__;
}
});
;})(inst_34061,inst_34062,inst_34063,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34065 = cljs.core.filter.call(null,inst_34064,files);
var inst_34066 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34067 = cljs.core.concat.call(null,inst_34065,inst_34066);
var state_34164__$1 = (function (){var statearr_34179 = state_34164;
(statearr_34179[(17)] = inst_34063);

(statearr_34179[(18)] = inst_34061);

(statearr_34179[(12)] = inst_34067);

return statearr_34179;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34180_34264 = state_34164__$1;
(statearr_34180_34264[(1)] = (16));

} else {
var statearr_34181_34265 = state_34164__$1;
(statearr_34181_34265[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (15))){
var inst_34051 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34182_34266 = state_34164__$1;
(statearr_34182_34266[(2)] = inst_34051);

(statearr_34182_34266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (21))){
var inst_34077 = (state_34164[(19)]);
var inst_34077__$1 = (state_34164[(2)]);
var inst_34078 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34077__$1);
var state_34164__$1 = (function (){var statearr_34183 = state_34164;
(statearr_34183[(19)] = inst_34077__$1);

return statearr_34183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34164__$1,(22),inst_34078);
} else {
if((state_val_34165 === (31))){
var inst_34162 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34164__$1,inst_34162);
} else {
if((state_val_34165 === (32))){
var inst_34117 = (state_34164[(16)]);
var inst_34122 = inst_34117.cljs$lang$protocol_mask$partition0$;
var inst_34123 = (inst_34122 & (64));
var inst_34124 = inst_34117.cljs$core$ISeq$;
var inst_34125 = (cljs.core.PROTOCOL_SENTINEL === inst_34124);
var inst_34126 = (inst_34123) || (inst_34125);
var state_34164__$1 = state_34164;
if(cljs.core.truth_(inst_34126)){
var statearr_34184_34267 = state_34164__$1;
(statearr_34184_34267[(1)] = (35));

} else {
var statearr_34185_34268 = state_34164__$1;
(statearr_34185_34268[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (40))){
var inst_34139 = (state_34164[(20)]);
var inst_34138 = (state_34164[(2)]);
var inst_34139__$1 = cljs.core.get.call(null,inst_34138,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34140 = cljs.core.get.call(null,inst_34138,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34141 = cljs.core.not_empty.call(null,inst_34139__$1);
var state_34164__$1 = (function (){var statearr_34186 = state_34164;
(statearr_34186[(20)] = inst_34139__$1);

(statearr_34186[(21)] = inst_34140);

return statearr_34186;
})();
if(cljs.core.truth_(inst_34141)){
var statearr_34187_34269 = state_34164__$1;
(statearr_34187_34269[(1)] = (41));

} else {
var statearr_34188_34270 = state_34164__$1;
(statearr_34188_34270[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (33))){
var state_34164__$1 = state_34164;
var statearr_34189_34271 = state_34164__$1;
(statearr_34189_34271[(2)] = false);

(statearr_34189_34271[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (13))){
var inst_34037 = (state_34164[(22)]);
var inst_34041 = cljs.core.chunk_first.call(null,inst_34037);
var inst_34042 = cljs.core.chunk_rest.call(null,inst_34037);
var inst_34043 = cljs.core.count.call(null,inst_34041);
var inst_34024 = inst_34042;
var inst_34025 = inst_34041;
var inst_34026 = inst_34043;
var inst_34027 = (0);
var state_34164__$1 = (function (){var statearr_34190 = state_34164;
(statearr_34190[(7)] = inst_34024);

(statearr_34190[(8)] = inst_34027);

(statearr_34190[(9)] = inst_34025);

(statearr_34190[(10)] = inst_34026);

return statearr_34190;
})();
var statearr_34191_34272 = state_34164__$1;
(statearr_34191_34272[(2)] = null);

(statearr_34191_34272[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (22))){
var inst_34081 = (state_34164[(23)]);
var inst_34077 = (state_34164[(19)]);
var inst_34080 = (state_34164[(24)]);
var inst_34085 = (state_34164[(25)]);
var inst_34080__$1 = (state_34164[(2)]);
var inst_34081__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34080__$1);
var inst_34082 = (function (){var all_files = inst_34077;
var res_SINGLEQUOTE_ = inst_34080__$1;
var res = inst_34081__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34081,inst_34077,inst_34080,inst_34085,inst_34080__$1,inst_34081__$1,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33759_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33759_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34081,inst_34077,inst_34080,inst_34085,inst_34080__$1,inst_34081__$1,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34083 = cljs.core.filter.call(null,inst_34082,inst_34080__$1);
var inst_34084 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34085__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34084);
var inst_34086 = cljs.core.not_empty.call(null,inst_34085__$1);
var state_34164__$1 = (function (){var statearr_34192 = state_34164;
(statearr_34192[(26)] = inst_34083);

(statearr_34192[(23)] = inst_34081__$1);

(statearr_34192[(24)] = inst_34080__$1);

(statearr_34192[(25)] = inst_34085__$1);

return statearr_34192;
})();
if(cljs.core.truth_(inst_34086)){
var statearr_34193_34273 = state_34164__$1;
(statearr_34193_34273[(1)] = (23));

} else {
var statearr_34194_34274 = state_34164__$1;
(statearr_34194_34274[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (36))){
var state_34164__$1 = state_34164;
var statearr_34195_34275 = state_34164__$1;
(statearr_34195_34275[(2)] = false);

(statearr_34195_34275[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (41))){
var inst_34139 = (state_34164[(20)]);
var inst_34143 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34144 = cljs.core.map.call(null,inst_34143,inst_34139);
var inst_34145 = cljs.core.pr_str.call(null,inst_34144);
var inst_34146 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34145)].join('');
var inst_34147 = figwheel.client.utils.log.call(null,inst_34146);
var state_34164__$1 = state_34164;
var statearr_34196_34276 = state_34164__$1;
(statearr_34196_34276[(2)] = inst_34147);

(statearr_34196_34276[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (43))){
var inst_34140 = (state_34164[(21)]);
var inst_34150 = (state_34164[(2)]);
var inst_34151 = cljs.core.not_empty.call(null,inst_34140);
var state_34164__$1 = (function (){var statearr_34197 = state_34164;
(statearr_34197[(27)] = inst_34150);

return statearr_34197;
})();
if(cljs.core.truth_(inst_34151)){
var statearr_34198_34277 = state_34164__$1;
(statearr_34198_34277[(1)] = (44));

} else {
var statearr_34199_34278 = state_34164__$1;
(statearr_34199_34278[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (29))){
var inst_34083 = (state_34164[(26)]);
var inst_34081 = (state_34164[(23)]);
var inst_34077 = (state_34164[(19)]);
var inst_34080 = (state_34164[(24)]);
var inst_34085 = (state_34164[(25)]);
var inst_34117 = (state_34164[(16)]);
var inst_34113 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34116 = (function (){var all_files = inst_34077;
var res_SINGLEQUOTE_ = inst_34080;
var res = inst_34081;
var files_not_loaded = inst_34083;
var dependencies_that_loaded = inst_34085;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34083,inst_34081,inst_34077,inst_34080,inst_34085,inst_34117,inst_34113,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34115){
var map__34200 = p__34115;
var map__34200__$1 = ((((!((map__34200 == null)))?((((map__34200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34200):map__34200);
var namespace = cljs.core.get.call(null,map__34200__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34083,inst_34081,inst_34077,inst_34080,inst_34085,inst_34117,inst_34113,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34117__$1 = cljs.core.group_by.call(null,inst_34116,inst_34083);
var inst_34119 = (inst_34117__$1 == null);
var inst_34120 = cljs.core.not.call(null,inst_34119);
var state_34164__$1 = (function (){var statearr_34202 = state_34164;
(statearr_34202[(28)] = inst_34113);

(statearr_34202[(16)] = inst_34117__$1);

return statearr_34202;
})();
if(inst_34120){
var statearr_34203_34279 = state_34164__$1;
(statearr_34203_34279[(1)] = (32));

} else {
var statearr_34204_34280 = state_34164__$1;
(statearr_34204_34280[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (44))){
var inst_34140 = (state_34164[(21)]);
var inst_34153 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34140);
var inst_34154 = cljs.core.pr_str.call(null,inst_34153);
var inst_34155 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34154)].join('');
var inst_34156 = figwheel.client.utils.log.call(null,inst_34155);
var state_34164__$1 = state_34164;
var statearr_34205_34281 = state_34164__$1;
(statearr_34205_34281[(2)] = inst_34156);

(statearr_34205_34281[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (6))){
var inst_34058 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34206_34282 = state_34164__$1;
(statearr_34206_34282[(2)] = inst_34058);

(statearr_34206_34282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (28))){
var inst_34083 = (state_34164[(26)]);
var inst_34110 = (state_34164[(2)]);
var inst_34111 = cljs.core.not_empty.call(null,inst_34083);
var state_34164__$1 = (function (){var statearr_34207 = state_34164;
(statearr_34207[(29)] = inst_34110);

return statearr_34207;
})();
if(cljs.core.truth_(inst_34111)){
var statearr_34208_34283 = state_34164__$1;
(statearr_34208_34283[(1)] = (29));

} else {
var statearr_34209_34284 = state_34164__$1;
(statearr_34209_34284[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (25))){
var inst_34081 = (state_34164[(23)]);
var inst_34097 = (state_34164[(2)]);
var inst_34098 = cljs.core.not_empty.call(null,inst_34081);
var state_34164__$1 = (function (){var statearr_34210 = state_34164;
(statearr_34210[(30)] = inst_34097);

return statearr_34210;
})();
if(cljs.core.truth_(inst_34098)){
var statearr_34211_34285 = state_34164__$1;
(statearr_34211_34285[(1)] = (26));

} else {
var statearr_34212_34286 = state_34164__$1;
(statearr_34212_34286[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (34))){
var inst_34133 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
if(cljs.core.truth_(inst_34133)){
var statearr_34213_34287 = state_34164__$1;
(statearr_34213_34287[(1)] = (38));

} else {
var statearr_34214_34288 = state_34164__$1;
(statearr_34214_34288[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (17))){
var state_34164__$1 = state_34164;
var statearr_34215_34289 = state_34164__$1;
(statearr_34215_34289[(2)] = recompile_dependents);

(statearr_34215_34289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (3))){
var state_34164__$1 = state_34164;
var statearr_34216_34290 = state_34164__$1;
(statearr_34216_34290[(2)] = null);

(statearr_34216_34290[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (12))){
var inst_34054 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34217_34291 = state_34164__$1;
(statearr_34217_34291[(2)] = inst_34054);

(statearr_34217_34291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (2))){
var inst_34016 = (state_34164[(13)]);
var inst_34023 = cljs.core.seq.call(null,inst_34016);
var inst_34024 = inst_34023;
var inst_34025 = null;
var inst_34026 = (0);
var inst_34027 = (0);
var state_34164__$1 = (function (){var statearr_34218 = state_34164;
(statearr_34218[(7)] = inst_34024);

(statearr_34218[(8)] = inst_34027);

(statearr_34218[(9)] = inst_34025);

(statearr_34218[(10)] = inst_34026);

return statearr_34218;
})();
var statearr_34219_34292 = state_34164__$1;
(statearr_34219_34292[(2)] = null);

(statearr_34219_34292[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (23))){
var inst_34083 = (state_34164[(26)]);
var inst_34081 = (state_34164[(23)]);
var inst_34077 = (state_34164[(19)]);
var inst_34080 = (state_34164[(24)]);
var inst_34085 = (state_34164[(25)]);
var inst_34088 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34090 = (function (){var all_files = inst_34077;
var res_SINGLEQUOTE_ = inst_34080;
var res = inst_34081;
var files_not_loaded = inst_34083;
var dependencies_that_loaded = inst_34085;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34083,inst_34081,inst_34077,inst_34080,inst_34085,inst_34088,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34089){
var map__34220 = p__34089;
var map__34220__$1 = ((((!((map__34220 == null)))?((((map__34220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34220):map__34220);
var request_url = cljs.core.get.call(null,map__34220__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34083,inst_34081,inst_34077,inst_34080,inst_34085,inst_34088,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34091 = cljs.core.reverse.call(null,inst_34085);
var inst_34092 = cljs.core.map.call(null,inst_34090,inst_34091);
var inst_34093 = cljs.core.pr_str.call(null,inst_34092);
var inst_34094 = figwheel.client.utils.log.call(null,inst_34093);
var state_34164__$1 = (function (){var statearr_34222 = state_34164;
(statearr_34222[(31)] = inst_34088);

return statearr_34222;
})();
var statearr_34223_34293 = state_34164__$1;
(statearr_34223_34293[(2)] = inst_34094);

(statearr_34223_34293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (35))){
var state_34164__$1 = state_34164;
var statearr_34224_34294 = state_34164__$1;
(statearr_34224_34294[(2)] = true);

(statearr_34224_34294[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (19))){
var inst_34067 = (state_34164[(12)]);
var inst_34073 = figwheel.client.file_reloading.expand_files.call(null,inst_34067);
var state_34164__$1 = state_34164;
var statearr_34225_34295 = state_34164__$1;
(statearr_34225_34295[(2)] = inst_34073);

(statearr_34225_34295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (11))){
var state_34164__$1 = state_34164;
var statearr_34226_34296 = state_34164__$1;
(statearr_34226_34296[(2)] = null);

(statearr_34226_34296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (9))){
var inst_34056 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34227_34297 = state_34164__$1;
(statearr_34227_34297[(2)] = inst_34056);

(statearr_34227_34297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (5))){
var inst_34027 = (state_34164[(8)]);
var inst_34026 = (state_34164[(10)]);
var inst_34029 = (inst_34027 < inst_34026);
var inst_34030 = inst_34029;
var state_34164__$1 = state_34164;
if(cljs.core.truth_(inst_34030)){
var statearr_34228_34298 = state_34164__$1;
(statearr_34228_34298[(1)] = (7));

} else {
var statearr_34229_34299 = state_34164__$1;
(statearr_34229_34299[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (14))){
var inst_34037 = (state_34164[(22)]);
var inst_34046 = cljs.core.first.call(null,inst_34037);
var inst_34047 = figwheel.client.file_reloading.eval_body.call(null,inst_34046,opts);
var inst_34048 = cljs.core.next.call(null,inst_34037);
var inst_34024 = inst_34048;
var inst_34025 = null;
var inst_34026 = (0);
var inst_34027 = (0);
var state_34164__$1 = (function (){var statearr_34230 = state_34164;
(statearr_34230[(32)] = inst_34047);

(statearr_34230[(7)] = inst_34024);

(statearr_34230[(8)] = inst_34027);

(statearr_34230[(9)] = inst_34025);

(statearr_34230[(10)] = inst_34026);

return statearr_34230;
})();
var statearr_34231_34300 = state_34164__$1;
(statearr_34231_34300[(2)] = null);

(statearr_34231_34300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (45))){
var state_34164__$1 = state_34164;
var statearr_34232_34301 = state_34164__$1;
(statearr_34232_34301[(2)] = null);

(statearr_34232_34301[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (26))){
var inst_34083 = (state_34164[(26)]);
var inst_34081 = (state_34164[(23)]);
var inst_34077 = (state_34164[(19)]);
var inst_34080 = (state_34164[(24)]);
var inst_34085 = (state_34164[(25)]);
var inst_34100 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34102 = (function (){var all_files = inst_34077;
var res_SINGLEQUOTE_ = inst_34080;
var res = inst_34081;
var files_not_loaded = inst_34083;
var dependencies_that_loaded = inst_34085;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34083,inst_34081,inst_34077,inst_34080,inst_34085,inst_34100,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34101){
var map__34233 = p__34101;
var map__34233__$1 = ((((!((map__34233 == null)))?((((map__34233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34233):map__34233);
var namespace = cljs.core.get.call(null,map__34233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34083,inst_34081,inst_34077,inst_34080,inst_34085,inst_34100,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34103 = cljs.core.map.call(null,inst_34102,inst_34081);
var inst_34104 = cljs.core.pr_str.call(null,inst_34103);
var inst_34105 = figwheel.client.utils.log.call(null,inst_34104);
var inst_34106 = (function (){var all_files = inst_34077;
var res_SINGLEQUOTE_ = inst_34080;
var res = inst_34081;
var files_not_loaded = inst_34083;
var dependencies_that_loaded = inst_34085;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34083,inst_34081,inst_34077,inst_34080,inst_34085,inst_34100,inst_34102,inst_34103,inst_34104,inst_34105,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34083,inst_34081,inst_34077,inst_34080,inst_34085,inst_34100,inst_34102,inst_34103,inst_34104,inst_34105,state_val_34165,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34107 = setTimeout(inst_34106,(10));
var state_34164__$1 = (function (){var statearr_34235 = state_34164;
(statearr_34235[(33)] = inst_34100);

(statearr_34235[(34)] = inst_34105);

return statearr_34235;
})();
var statearr_34236_34302 = state_34164__$1;
(statearr_34236_34302[(2)] = inst_34107);

(statearr_34236_34302[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (16))){
var state_34164__$1 = state_34164;
var statearr_34237_34303 = state_34164__$1;
(statearr_34237_34303[(2)] = reload_dependents);

(statearr_34237_34303[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (38))){
var inst_34117 = (state_34164[(16)]);
var inst_34135 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34117);
var state_34164__$1 = state_34164;
var statearr_34238_34304 = state_34164__$1;
(statearr_34238_34304[(2)] = inst_34135);

(statearr_34238_34304[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (30))){
var state_34164__$1 = state_34164;
var statearr_34239_34305 = state_34164__$1;
(statearr_34239_34305[(2)] = null);

(statearr_34239_34305[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (10))){
var inst_34037 = (state_34164[(22)]);
var inst_34039 = cljs.core.chunked_seq_QMARK_.call(null,inst_34037);
var state_34164__$1 = state_34164;
if(inst_34039){
var statearr_34240_34306 = state_34164__$1;
(statearr_34240_34306[(1)] = (13));

} else {
var statearr_34241_34307 = state_34164__$1;
(statearr_34241_34307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (18))){
var inst_34071 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
if(cljs.core.truth_(inst_34071)){
var statearr_34242_34308 = state_34164__$1;
(statearr_34242_34308[(1)] = (19));

} else {
var statearr_34243_34309 = state_34164__$1;
(statearr_34243_34309[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (42))){
var state_34164__$1 = state_34164;
var statearr_34244_34310 = state_34164__$1;
(statearr_34244_34310[(2)] = null);

(statearr_34244_34310[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (37))){
var inst_34130 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34245_34311 = state_34164__$1;
(statearr_34245_34311[(2)] = inst_34130);

(statearr_34245_34311[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (8))){
var inst_34024 = (state_34164[(7)]);
var inst_34037 = (state_34164[(22)]);
var inst_34037__$1 = cljs.core.seq.call(null,inst_34024);
var state_34164__$1 = (function (){var statearr_34246 = state_34164;
(statearr_34246[(22)] = inst_34037__$1);

return statearr_34246;
})();
if(inst_34037__$1){
var statearr_34247_34312 = state_34164__$1;
(statearr_34247_34312[(1)] = (10));

} else {
var statearr_34248_34313 = state_34164__$1;
(statearr_34248_34313[(1)] = (11));

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
});})(c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28447__auto__,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28448__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28448__auto____0 = (function (){
var statearr_34252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34252[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28448__auto__);

(statearr_34252[(1)] = (1));

return statearr_34252;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28448__auto____1 = (function (state_34164){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_34164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e34253){if((e34253 instanceof Object)){
var ex__28451__auto__ = e34253;
var statearr_34254_34314 = state_34164;
(statearr_34254_34314[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34315 = state_34164;
state_34164 = G__34315;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28448__auto__ = function(state_34164){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28448__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28448__auto____1.call(this,state_34164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28448__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28448__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28561__auto__ = (function (){var statearr_34255 = f__28560__auto__.call(null);
(statearr_34255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto__);

return statearr_34255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto__,map__34009,map__34009__$1,opts,before_jsload,on_jsload,reload_dependents,map__34010,map__34010__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28559__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34318,link){
var map__34321 = p__34318;
var map__34321__$1 = ((((!((map__34321 == null)))?((((map__34321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34321):map__34321);
var file = cljs.core.get.call(null,map__34321__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34321,map__34321__$1,file){
return (function (p1__34316_SHARP_,p2__34317_SHARP_){
if(cljs.core._EQ_.call(null,p1__34316_SHARP_,p2__34317_SHARP_)){
return p1__34316_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34321,map__34321__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34327){
var map__34328 = p__34327;
var map__34328__$1 = ((((!((map__34328 == null)))?((((map__34328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34328):map__34328);
var match_length = cljs.core.get.call(null,map__34328__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34328__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34323_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34323_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34330_SHARP_,p2__34331_SHARP_){
return cljs.core.assoc.call(null,p1__34330_SHARP_,cljs.core.get.call(null,p2__34331_SHARP_,key),p2__34331_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34332 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34332);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34332);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34333,p__34334){
var map__34339 = p__34333;
var map__34339__$1 = ((((!((map__34339 == null)))?((((map__34339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34339):map__34339);
var on_cssload = cljs.core.get.call(null,map__34339__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34340 = p__34334;
var map__34340__$1 = ((((!((map__34340 == null)))?((((map__34340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34340):map__34340);
var files_msg = map__34340__$1;
var files = cljs.core.get.call(null,map__34340__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1494453156731