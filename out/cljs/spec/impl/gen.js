// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__26960__auto__,writer__26961__auto__,opt__26962__auto__){
return cljs.core._write.call(null,writer__26961__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35795 = arguments.length;
var i__27463__auto___35796 = (0);
while(true){
if((i__27463__auto___35796 < len__27462__auto___35795)){
args__27469__auto__.push((arguments[i__27463__auto___35796]));

var G__35797 = (i__27463__auto___35796 + (1));
i__27463__auto___35796 = G__35797;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35794){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35794));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35799 = arguments.length;
var i__27463__auto___35800 = (0);
while(true){
if((i__27463__auto___35800 < len__27462__auto___35799)){
args__27469__auto__.push((arguments[i__27463__auto___35800]));

var G__35801 = (i__27463__auto___35800 + (1));
i__27463__auto___35800 = G__35801;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35798){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35798));
});

var g_QMARK__35802 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_35803 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35802){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__35802))
,null));
var mkg_35804 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35802,g_35803){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__35802,g_35803))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35802,g_35803,mkg_35804){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35802).call(null,x);
});})(g_QMARK__35802,g_35803,mkg_35804))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35802,g_35803,mkg_35804){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35804).call(null,gfn);
});})(g_QMARK__35802,g_35803,mkg_35804))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35802,g_35803,mkg_35804){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35803).call(null,generator);
});})(g_QMARK__35802,g_35803,mkg_35804))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35766__auto___35824 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__35766__auto___35824){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35825 = arguments.length;
var i__27463__auto___35826 = (0);
while(true){
if((i__27463__auto___35826 < len__27462__auto___35825)){
args__27469__auto__.push((arguments[i__27463__auto___35826]));

var G__35827 = (i__27463__auto___35826 + (1));
i__27463__auto___35826 = G__35827;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35824))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35824){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35824),args);
});})(g__35766__auto___35824))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__35766__auto___35824){
return (function (seq35805){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35805));
});})(g__35766__auto___35824))
;


var g__35766__auto___35828 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__35766__auto___35828){
return (function cljs$spec$impl$gen$list(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35829 = arguments.length;
var i__27463__auto___35830 = (0);
while(true){
if((i__27463__auto___35830 < len__27462__auto___35829)){
args__27469__auto__.push((arguments[i__27463__auto___35830]));

var G__35831 = (i__27463__auto___35830 + (1));
i__27463__auto___35830 = G__35831;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35828))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35828){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35828),args);
});})(g__35766__auto___35828))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__35766__auto___35828){
return (function (seq35806){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35806));
});})(g__35766__auto___35828))
;


var g__35766__auto___35832 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__35766__auto___35832){
return (function cljs$spec$impl$gen$map(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35833 = arguments.length;
var i__27463__auto___35834 = (0);
while(true){
if((i__27463__auto___35834 < len__27462__auto___35833)){
args__27469__auto__.push((arguments[i__27463__auto___35834]));

var G__35835 = (i__27463__auto___35834 + (1));
i__27463__auto___35834 = G__35835;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35832))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35832){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35832),args);
});})(g__35766__auto___35832))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__35766__auto___35832){
return (function (seq35807){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35807));
});})(g__35766__auto___35832))
;


var g__35766__auto___35836 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__35766__auto___35836){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35837 = arguments.length;
var i__27463__auto___35838 = (0);
while(true){
if((i__27463__auto___35838 < len__27462__auto___35837)){
args__27469__auto__.push((arguments[i__27463__auto___35838]));

var G__35839 = (i__27463__auto___35838 + (1));
i__27463__auto___35838 = G__35839;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35836))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35836){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35836),args);
});})(g__35766__auto___35836))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__35766__auto___35836){
return (function (seq35808){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35808));
});})(g__35766__auto___35836))
;


var g__35766__auto___35840 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__35766__auto___35840){
return (function cljs$spec$impl$gen$set(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35841 = arguments.length;
var i__27463__auto___35842 = (0);
while(true){
if((i__27463__auto___35842 < len__27462__auto___35841)){
args__27469__auto__.push((arguments[i__27463__auto___35842]));

var G__35843 = (i__27463__auto___35842 + (1));
i__27463__auto___35842 = G__35843;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35840))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35840){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35840),args);
});})(g__35766__auto___35840))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__35766__auto___35840){
return (function (seq35809){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35809));
});})(g__35766__auto___35840))
;


var g__35766__auto___35844 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__35766__auto___35844){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35845 = arguments.length;
var i__27463__auto___35846 = (0);
while(true){
if((i__27463__auto___35846 < len__27462__auto___35845)){
args__27469__auto__.push((arguments[i__27463__auto___35846]));

var G__35847 = (i__27463__auto___35846 + (1));
i__27463__auto___35846 = G__35847;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35844))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35844){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35844),args);
});})(g__35766__auto___35844))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__35766__auto___35844){
return (function (seq35810){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35810));
});})(g__35766__auto___35844))
;


var g__35766__auto___35848 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__35766__auto___35848){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35849 = arguments.length;
var i__27463__auto___35850 = (0);
while(true){
if((i__27463__auto___35850 < len__27462__auto___35849)){
args__27469__auto__.push((arguments[i__27463__auto___35850]));

var G__35851 = (i__27463__auto___35850 + (1));
i__27463__auto___35850 = G__35851;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35848))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35848){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35848),args);
});})(g__35766__auto___35848))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__35766__auto___35848){
return (function (seq35811){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35811));
});})(g__35766__auto___35848))
;


var g__35766__auto___35852 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__35766__auto___35852){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35853 = arguments.length;
var i__27463__auto___35854 = (0);
while(true){
if((i__27463__auto___35854 < len__27462__auto___35853)){
args__27469__auto__.push((arguments[i__27463__auto___35854]));

var G__35855 = (i__27463__auto___35854 + (1));
i__27463__auto___35854 = G__35855;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35852))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35852){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35852),args);
});})(g__35766__auto___35852))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__35766__auto___35852){
return (function (seq35812){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35812));
});})(g__35766__auto___35852))
;


var g__35766__auto___35856 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__35766__auto___35856){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35857 = arguments.length;
var i__27463__auto___35858 = (0);
while(true){
if((i__27463__auto___35858 < len__27462__auto___35857)){
args__27469__auto__.push((arguments[i__27463__auto___35858]));

var G__35859 = (i__27463__auto___35858 + (1));
i__27463__auto___35858 = G__35859;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35856))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35856){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35856),args);
});})(g__35766__auto___35856))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__35766__auto___35856){
return (function (seq35813){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35813));
});})(g__35766__auto___35856))
;


var g__35766__auto___35860 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__35766__auto___35860){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35861 = arguments.length;
var i__27463__auto___35862 = (0);
while(true){
if((i__27463__auto___35862 < len__27462__auto___35861)){
args__27469__auto__.push((arguments[i__27463__auto___35862]));

var G__35863 = (i__27463__auto___35862 + (1));
i__27463__auto___35862 = G__35863;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35860))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35860){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35860),args);
});})(g__35766__auto___35860))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__35766__auto___35860){
return (function (seq35814){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35814));
});})(g__35766__auto___35860))
;


var g__35766__auto___35864 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__35766__auto___35864){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35865 = arguments.length;
var i__27463__auto___35866 = (0);
while(true){
if((i__27463__auto___35866 < len__27462__auto___35865)){
args__27469__auto__.push((arguments[i__27463__auto___35866]));

var G__35867 = (i__27463__auto___35866 + (1));
i__27463__auto___35866 = G__35867;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35864))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35864){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35864),args);
});})(g__35766__auto___35864))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__35766__auto___35864){
return (function (seq35815){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35815));
});})(g__35766__auto___35864))
;


var g__35766__auto___35868 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__35766__auto___35868){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35869 = arguments.length;
var i__27463__auto___35870 = (0);
while(true){
if((i__27463__auto___35870 < len__27462__auto___35869)){
args__27469__auto__.push((arguments[i__27463__auto___35870]));

var G__35871 = (i__27463__auto___35870 + (1));
i__27463__auto___35870 = G__35871;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35868))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35868){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35868),args);
});})(g__35766__auto___35868))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__35766__auto___35868){
return (function (seq35816){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35816));
});})(g__35766__auto___35868))
;


var g__35766__auto___35872 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__35766__auto___35872){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35873 = arguments.length;
var i__27463__auto___35874 = (0);
while(true){
if((i__27463__auto___35874 < len__27462__auto___35873)){
args__27469__auto__.push((arguments[i__27463__auto___35874]));

var G__35875 = (i__27463__auto___35874 + (1));
i__27463__auto___35874 = G__35875;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35872))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35872){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35872),args);
});})(g__35766__auto___35872))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__35766__auto___35872){
return (function (seq35817){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35817));
});})(g__35766__auto___35872))
;


var g__35766__auto___35876 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__35766__auto___35876){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35877 = arguments.length;
var i__27463__auto___35878 = (0);
while(true){
if((i__27463__auto___35878 < len__27462__auto___35877)){
args__27469__auto__.push((arguments[i__27463__auto___35878]));

var G__35879 = (i__27463__auto___35878 + (1));
i__27463__auto___35878 = G__35879;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35876))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35876){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35876),args);
});})(g__35766__auto___35876))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__35766__auto___35876){
return (function (seq35818){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35818));
});})(g__35766__auto___35876))
;


var g__35766__auto___35880 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__35766__auto___35880){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35881 = arguments.length;
var i__27463__auto___35882 = (0);
while(true){
if((i__27463__auto___35882 < len__27462__auto___35881)){
args__27469__auto__.push((arguments[i__27463__auto___35882]));

var G__35883 = (i__27463__auto___35882 + (1));
i__27463__auto___35882 = G__35883;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35880))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35880){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35880),args);
});})(g__35766__auto___35880))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__35766__auto___35880){
return (function (seq35819){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35819));
});})(g__35766__auto___35880))
;


var g__35766__auto___35884 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__35766__auto___35884){
return (function cljs$spec$impl$gen$return(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35885 = arguments.length;
var i__27463__auto___35886 = (0);
while(true){
if((i__27463__auto___35886 < len__27462__auto___35885)){
args__27469__auto__.push((arguments[i__27463__auto___35886]));

var G__35887 = (i__27463__auto___35886 + (1));
i__27463__auto___35886 = G__35887;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35884))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35884){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35884),args);
});})(g__35766__auto___35884))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__35766__auto___35884){
return (function (seq35820){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35820));
});})(g__35766__auto___35884))
;


var g__35766__auto___35888 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__35766__auto___35888){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35889 = arguments.length;
var i__27463__auto___35890 = (0);
while(true){
if((i__27463__auto___35890 < len__27462__auto___35889)){
args__27469__auto__.push((arguments[i__27463__auto___35890]));

var G__35891 = (i__27463__auto___35890 + (1));
i__27463__auto___35890 = G__35891;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35888))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35888){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35888),args);
});})(g__35766__auto___35888))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35766__auto___35888){
return (function (seq35821){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35821));
});})(g__35766__auto___35888))
;


var g__35766__auto___35892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__35766__auto___35892){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35893 = arguments.length;
var i__27463__auto___35894 = (0);
while(true){
if((i__27463__auto___35894 < len__27462__auto___35893)){
args__27469__auto__.push((arguments[i__27463__auto___35894]));

var G__35895 = (i__27463__auto___35894 + (1));
i__27463__auto___35894 = G__35895;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35892))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35892){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35892),args);
});})(g__35766__auto___35892))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__35766__auto___35892){
return (function (seq35822){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35822));
});})(g__35766__auto___35892))
;


var g__35766__auto___35896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__35766__auto___35896){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35897 = arguments.length;
var i__27463__auto___35898 = (0);
while(true){
if((i__27463__auto___35898 < len__27462__auto___35897)){
args__27469__auto__.push((arguments[i__27463__auto___35898]));

var G__35899 = (i__27463__auto___35898 + (1));
i__27463__auto___35898 = G__35899;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35766__auto___35896))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35766__auto___35896){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35766__auto___35896),args);
});})(g__35766__auto___35896))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__35766__auto___35896){
return (function (seq35823){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35823));
});})(g__35766__auto___35896))
;

var g__35779__auto___35921 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35779__auto___35921){
return (function cljs$spec$impl$gen$any(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35922 = arguments.length;
var i__27463__auto___35923 = (0);
while(true){
if((i__27463__auto___35923 < len__27462__auto___35922)){
args__27469__auto__.push((arguments[i__27463__auto___35923]));

var G__35924 = (i__27463__auto___35923 + (1));
i__27463__auto___35923 = G__35924;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35921))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35921){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35921);
});})(g__35779__auto___35921))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35779__auto___35921){
return (function (seq35900){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35900));
});})(g__35779__auto___35921))
;


var g__35779__auto___35925 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35779__auto___35925){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35926 = arguments.length;
var i__27463__auto___35927 = (0);
while(true){
if((i__27463__auto___35927 < len__27462__auto___35926)){
args__27469__auto__.push((arguments[i__27463__auto___35927]));

var G__35928 = (i__27463__auto___35927 + (1));
i__27463__auto___35927 = G__35928;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35925))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35925){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35925);
});})(g__35779__auto___35925))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35779__auto___35925){
return (function (seq35901){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35901));
});})(g__35779__auto___35925))
;


var g__35779__auto___35929 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35779__auto___35929){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35930 = arguments.length;
var i__27463__auto___35931 = (0);
while(true){
if((i__27463__auto___35931 < len__27462__auto___35930)){
args__27469__auto__.push((arguments[i__27463__auto___35931]));

var G__35932 = (i__27463__auto___35931 + (1));
i__27463__auto___35931 = G__35932;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35929))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35929){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35929);
});})(g__35779__auto___35929))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35779__auto___35929){
return (function (seq35902){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35902));
});})(g__35779__auto___35929))
;


var g__35779__auto___35933 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35779__auto___35933){
return (function cljs$spec$impl$gen$char(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35934 = arguments.length;
var i__27463__auto___35935 = (0);
while(true){
if((i__27463__auto___35935 < len__27462__auto___35934)){
args__27469__auto__.push((arguments[i__27463__auto___35935]));

var G__35936 = (i__27463__auto___35935 + (1));
i__27463__auto___35935 = G__35936;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35933))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35933){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35933);
});})(g__35779__auto___35933))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35779__auto___35933){
return (function (seq35903){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35903));
});})(g__35779__auto___35933))
;


var g__35779__auto___35937 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35779__auto___35937){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35938 = arguments.length;
var i__27463__auto___35939 = (0);
while(true){
if((i__27463__auto___35939 < len__27462__auto___35938)){
args__27469__auto__.push((arguments[i__27463__auto___35939]));

var G__35940 = (i__27463__auto___35939 + (1));
i__27463__auto___35939 = G__35940;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35937))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35937){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35937);
});})(g__35779__auto___35937))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35779__auto___35937){
return (function (seq35904){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35904));
});})(g__35779__auto___35937))
;


var g__35779__auto___35941 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35779__auto___35941){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35942 = arguments.length;
var i__27463__auto___35943 = (0);
while(true){
if((i__27463__auto___35943 < len__27462__auto___35942)){
args__27469__auto__.push((arguments[i__27463__auto___35943]));

var G__35944 = (i__27463__auto___35943 + (1));
i__27463__auto___35943 = G__35944;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35941))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35941){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35941);
});})(g__35779__auto___35941))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35779__auto___35941){
return (function (seq35905){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35905));
});})(g__35779__auto___35941))
;


var g__35779__auto___35945 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35779__auto___35945){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35946 = arguments.length;
var i__27463__auto___35947 = (0);
while(true){
if((i__27463__auto___35947 < len__27462__auto___35946)){
args__27469__auto__.push((arguments[i__27463__auto___35947]));

var G__35948 = (i__27463__auto___35947 + (1));
i__27463__auto___35947 = G__35948;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35945))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35945){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35945);
});})(g__35779__auto___35945))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35779__auto___35945){
return (function (seq35906){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35906));
});})(g__35779__auto___35945))
;


var g__35779__auto___35949 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35779__auto___35949){
return (function cljs$spec$impl$gen$double(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35950 = arguments.length;
var i__27463__auto___35951 = (0);
while(true){
if((i__27463__auto___35951 < len__27462__auto___35950)){
args__27469__auto__.push((arguments[i__27463__auto___35951]));

var G__35952 = (i__27463__auto___35951 + (1));
i__27463__auto___35951 = G__35952;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35949))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35949){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35949);
});})(g__35779__auto___35949))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35779__auto___35949){
return (function (seq35907){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35907));
});})(g__35779__auto___35949))
;


var g__35779__auto___35953 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35779__auto___35953){
return (function cljs$spec$impl$gen$int(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35954 = arguments.length;
var i__27463__auto___35955 = (0);
while(true){
if((i__27463__auto___35955 < len__27462__auto___35954)){
args__27469__auto__.push((arguments[i__27463__auto___35955]));

var G__35956 = (i__27463__auto___35955 + (1));
i__27463__auto___35955 = G__35956;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35953))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35953){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35953);
});})(g__35779__auto___35953))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35779__auto___35953){
return (function (seq35908){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35908));
});})(g__35779__auto___35953))
;


var g__35779__auto___35957 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35779__auto___35957){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35958 = arguments.length;
var i__27463__auto___35959 = (0);
while(true){
if((i__27463__auto___35959 < len__27462__auto___35958)){
args__27469__auto__.push((arguments[i__27463__auto___35959]));

var G__35960 = (i__27463__auto___35959 + (1));
i__27463__auto___35959 = G__35960;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35957))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35957){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35957);
});})(g__35779__auto___35957))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35779__auto___35957){
return (function (seq35909){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35909));
});})(g__35779__auto___35957))
;


var g__35779__auto___35961 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35779__auto___35961){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35962 = arguments.length;
var i__27463__auto___35963 = (0);
while(true){
if((i__27463__auto___35963 < len__27462__auto___35962)){
args__27469__auto__.push((arguments[i__27463__auto___35963]));

var G__35964 = (i__27463__auto___35963 + (1));
i__27463__auto___35963 = G__35964;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35961))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35961){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35961);
});})(g__35779__auto___35961))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35779__auto___35961){
return (function (seq35910){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35910));
});})(g__35779__auto___35961))
;


var g__35779__auto___35965 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35779__auto___35965){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35966 = arguments.length;
var i__27463__auto___35967 = (0);
while(true){
if((i__27463__auto___35967 < len__27462__auto___35966)){
args__27469__auto__.push((arguments[i__27463__auto___35967]));

var G__35968 = (i__27463__auto___35967 + (1));
i__27463__auto___35967 = G__35968;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35965))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35965){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35965);
});})(g__35779__auto___35965))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35779__auto___35965){
return (function (seq35911){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35911));
});})(g__35779__auto___35965))
;


var g__35779__auto___35969 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35779__auto___35969){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35970 = arguments.length;
var i__27463__auto___35971 = (0);
while(true){
if((i__27463__auto___35971 < len__27462__auto___35970)){
args__27469__auto__.push((arguments[i__27463__auto___35971]));

var G__35972 = (i__27463__auto___35971 + (1));
i__27463__auto___35971 = G__35972;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35969))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35969){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35969);
});})(g__35779__auto___35969))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35779__auto___35969){
return (function (seq35912){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35912));
});})(g__35779__auto___35969))
;


var g__35779__auto___35973 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35779__auto___35973){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35974 = arguments.length;
var i__27463__auto___35975 = (0);
while(true){
if((i__27463__auto___35975 < len__27462__auto___35974)){
args__27469__auto__.push((arguments[i__27463__auto___35975]));

var G__35976 = (i__27463__auto___35975 + (1));
i__27463__auto___35975 = G__35976;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35973))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35973){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35973);
});})(g__35779__auto___35973))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35779__auto___35973){
return (function (seq35913){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35913));
});})(g__35779__auto___35973))
;


var g__35779__auto___35977 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35779__auto___35977){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35978 = arguments.length;
var i__27463__auto___35979 = (0);
while(true){
if((i__27463__auto___35979 < len__27462__auto___35978)){
args__27469__auto__.push((arguments[i__27463__auto___35979]));

var G__35980 = (i__27463__auto___35979 + (1));
i__27463__auto___35979 = G__35980;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35977))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35977){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35977);
});})(g__35779__auto___35977))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35779__auto___35977){
return (function (seq35914){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35914));
});})(g__35779__auto___35977))
;


var g__35779__auto___35981 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35779__auto___35981){
return (function cljs$spec$impl$gen$string(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35982 = arguments.length;
var i__27463__auto___35983 = (0);
while(true){
if((i__27463__auto___35983 < len__27462__auto___35982)){
args__27469__auto__.push((arguments[i__27463__auto___35983]));

var G__35984 = (i__27463__auto___35983 + (1));
i__27463__auto___35983 = G__35984;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35981))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35981){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35981);
});})(g__35779__auto___35981))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35779__auto___35981){
return (function (seq35915){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35915));
});})(g__35779__auto___35981))
;


var g__35779__auto___35985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35779__auto___35985){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35986 = arguments.length;
var i__27463__auto___35987 = (0);
while(true){
if((i__27463__auto___35987 < len__27462__auto___35986)){
args__27469__auto__.push((arguments[i__27463__auto___35987]));

var G__35988 = (i__27463__auto___35987 + (1));
i__27463__auto___35987 = G__35988;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35985))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35985){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35985);
});})(g__35779__auto___35985))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35779__auto___35985){
return (function (seq35916){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35916));
});})(g__35779__auto___35985))
;


var g__35779__auto___35989 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35779__auto___35989){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35990 = arguments.length;
var i__27463__auto___35991 = (0);
while(true){
if((i__27463__auto___35991 < len__27462__auto___35990)){
args__27469__auto__.push((arguments[i__27463__auto___35991]));

var G__35992 = (i__27463__auto___35991 + (1));
i__27463__auto___35991 = G__35992;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35989))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35989){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35989);
});})(g__35779__auto___35989))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35779__auto___35989){
return (function (seq35917){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35917));
});})(g__35779__auto___35989))
;


var g__35779__auto___35993 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35779__auto___35993){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35994 = arguments.length;
var i__27463__auto___35995 = (0);
while(true){
if((i__27463__auto___35995 < len__27462__auto___35994)){
args__27469__auto__.push((arguments[i__27463__auto___35995]));

var G__35996 = (i__27463__auto___35995 + (1));
i__27463__auto___35995 = G__35996;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35993))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35993){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35993);
});})(g__35779__auto___35993))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35779__auto___35993){
return (function (seq35918){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35918));
});})(g__35779__auto___35993))
;


var g__35779__auto___35997 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35779__auto___35997){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27469__auto__ = [];
var len__27462__auto___35998 = arguments.length;
var i__27463__auto___35999 = (0);
while(true){
if((i__27463__auto___35999 < len__27462__auto___35998)){
args__27469__auto__.push((arguments[i__27463__auto___35999]));

var G__36000 = (i__27463__auto___35999 + (1));
i__27463__auto___35999 = G__36000;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___35997))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___35997){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___35997);
});})(g__35779__auto___35997))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35779__auto___35997){
return (function (seq35919){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35919));
});})(g__35779__auto___35997))
;


var g__35779__auto___36001 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35779__auto___36001){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27469__auto__ = [];
var len__27462__auto___36002 = arguments.length;
var i__27463__auto___36003 = (0);
while(true){
if((i__27463__auto___36003 < len__27462__auto___36002)){
args__27469__auto__.push((arguments[i__27463__auto___36003]));

var G__36004 = (i__27463__auto___36003 + (1));
i__27463__auto___36003 = G__36004;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});})(g__35779__auto___36001))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35779__auto___36001){
return (function (args){
return cljs.core.deref.call(null,g__35779__auto___36001);
});})(g__35779__auto___36001))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35779__auto___36001){
return (function (seq35920){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35920));
});})(g__35779__auto___36001))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27469__auto__ = [];
var len__27462__auto___36007 = arguments.length;
var i__27463__auto___36008 = (0);
while(true){
if((i__27463__auto___36008 < len__27462__auto___36007)){
args__27469__auto__.push((arguments[i__27463__auto___36008]));

var G__36009 = (i__27463__auto___36008 + (1));
i__27463__auto___36008 = G__36009;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((0) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27470__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__36005_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36005_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq36006){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36006));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__36010_SHARP_){
return (new Date(p1__36010_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1494451920702