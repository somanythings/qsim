// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28604 = [];
var len__27462__auto___28610 = arguments.length;
var i__27463__auto___28611 = (0);
while(true){
if((i__27463__auto___28611 < len__27462__auto___28610)){
args28604.push((arguments[i__27463__auto___28611]));

var G__28612 = (i__27463__auto___28611 + (1));
i__27463__auto___28611 = G__28612;
continue;
} else {
}
break;
}

var G__28606 = args28604.length;
switch (G__28606) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28604.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28607 = (function (f,blockable,meta28608){
this.f = f;
this.blockable = blockable;
this.meta28608 = meta28608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28609,meta28608__$1){
var self__ = this;
var _28609__$1 = this;
return (new cljs.core.async.t_cljs$core$async28607(self__.f,self__.blockable,meta28608__$1));
});

cljs.core.async.t_cljs$core$async28607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28609){
var self__ = this;
var _28609__$1 = this;
return self__.meta28608;
});

cljs.core.async.t_cljs$core$async28607.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28607.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28608","meta28608",14619423,null)], null);
});

cljs.core.async.t_cljs$core$async28607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28607";

cljs.core.async.t_cljs$core$async28607.cljs$lang$ctorPrWriter = (function (this__26960__auto__,writer__26961__auto__,opt__26962__auto__){
return cljs.core._write.call(null,writer__26961__auto__,"cljs.core.async/t_cljs$core$async28607");
});

cljs.core.async.__GT_t_cljs$core$async28607 = (function cljs$core$async$__GT_t_cljs$core$async28607(f__$1,blockable__$1,meta28608){
return (new cljs.core.async.t_cljs$core$async28607(f__$1,blockable__$1,meta28608));
});

}

return (new cljs.core.async.t_cljs$core$async28607(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28616 = [];
var len__27462__auto___28619 = arguments.length;
var i__27463__auto___28620 = (0);
while(true){
if((i__27463__auto___28620 < len__27462__auto___28619)){
args28616.push((arguments[i__27463__auto___28620]));

var G__28621 = (i__27463__auto___28620 + (1));
i__27463__auto___28620 = G__28621;
continue;
} else {
}
break;
}

var G__28618 = args28616.length;
switch (G__28618) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28616.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28623 = [];
var len__27462__auto___28626 = arguments.length;
var i__27463__auto___28627 = (0);
while(true){
if((i__27463__auto___28627 < len__27462__auto___28626)){
args28623.push((arguments[i__27463__auto___28627]));

var G__28628 = (i__27463__auto___28627 + (1));
i__27463__auto___28627 = G__28628;
continue;
} else {
}
break;
}

var G__28625 = args28623.length;
switch (G__28625) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28623.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28630 = [];
var len__27462__auto___28633 = arguments.length;
var i__27463__auto___28634 = (0);
while(true){
if((i__27463__auto___28634 < len__27462__auto___28633)){
args28630.push((arguments[i__27463__auto___28634]));

var G__28635 = (i__27463__auto___28634 + (1));
i__27463__auto___28634 = G__28635;
continue;
} else {
}
break;
}

var G__28632 = args28630.length;
switch (G__28632) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28630.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28637 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28637);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28637,ret){
return (function (){
return fn1.call(null,val_28637);
});})(val_28637,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28638 = [];
var len__27462__auto___28641 = arguments.length;
var i__27463__auto___28642 = (0);
while(true){
if((i__27463__auto___28642 < len__27462__auto___28641)){
args28638.push((arguments[i__27463__auto___28642]));

var G__28643 = (i__27463__auto___28642 + (1));
i__27463__auto___28642 = G__28643;
continue;
} else {
}
break;
}

var G__28640 = args28638.length;
switch (G__28640) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28638.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27272__auto___28645 = n;
var x_28646 = (0);
while(true){
if((x_28646 < n__27272__auto___28645)){
(a[x_28646] = (0));

var G__28647 = (x_28646 + (1));
x_28646 = G__28647;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28648 = (i + (1));
i = G__28648;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28652 = (function (flag,meta28653){
this.flag = flag;
this.meta28653 = meta28653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28654,meta28653__$1){
var self__ = this;
var _28654__$1 = this;
return (new cljs.core.async.t_cljs$core$async28652(self__.flag,meta28653__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28654){
var self__ = this;
var _28654__$1 = this;
return self__.meta28653;
});})(flag))
;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28652.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28653","meta28653",703352099,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28652";

cljs.core.async.t_cljs$core$async28652.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26960__auto__,writer__26961__auto__,opt__26962__auto__){
return cljs.core._write.call(null,writer__26961__auto__,"cljs.core.async/t_cljs$core$async28652");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28652 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28652(flag__$1,meta28653){
return (new cljs.core.async.t_cljs$core$async28652(flag__$1,meta28653));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28652(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28658 = (function (flag,cb,meta28659){
this.flag = flag;
this.cb = cb;
this.meta28659 = meta28659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28660,meta28659__$1){
var self__ = this;
var _28660__$1 = this;
return (new cljs.core.async.t_cljs$core$async28658(self__.flag,self__.cb,meta28659__$1));
});

cljs.core.async.t_cljs$core$async28658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28660){
var self__ = this;
var _28660__$1 = this;
return self__.meta28659;
});

cljs.core.async.t_cljs$core$async28658.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28658.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28658.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28658.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28659","meta28659",567229592,null)], null);
});

cljs.core.async.t_cljs$core$async28658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28658";

cljs.core.async.t_cljs$core$async28658.cljs$lang$ctorPrWriter = (function (this__26960__auto__,writer__26961__auto__,opt__26962__auto__){
return cljs.core._write.call(null,writer__26961__auto__,"cljs.core.async/t_cljs$core$async28658");
});

cljs.core.async.__GT_t_cljs$core$async28658 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28658(flag__$1,cb__$1,meta28659){
return (new cljs.core.async.t_cljs$core$async28658(flag__$1,cb__$1,meta28659));
});

}

return (new cljs.core.async.t_cljs$core$async28658(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28661_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28661_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28662_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28662_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26349__auto__ = wport;
if(cljs.core.truth_(or__26349__auto__)){
return or__26349__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28663 = (i + (1));
i = G__28663;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26349__auto__ = ret;
if(cljs.core.truth_(or__26349__auto__)){
return or__26349__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26337__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26337__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26337__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27469__auto__ = [];
var len__27462__auto___28669 = arguments.length;
var i__27463__auto___28670 = (0);
while(true){
if((i__27463__auto___28670 < len__27462__auto___28669)){
args__27469__auto__.push((arguments[i__27463__auto___28670]));

var G__28671 = (i__27463__auto___28670 + (1));
i__27463__auto___28670 = G__28671;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((1) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27470__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28666){
var map__28667 = p__28666;
var map__28667__$1 = ((((!((map__28667 == null)))?((((map__28667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28667):map__28667);
var opts = map__28667__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28664){
var G__28665 = cljs.core.first.call(null,seq28664);
var seq28664__$1 = cljs.core.next.call(null,seq28664);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28665,seq28664__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28672 = [];
var len__27462__auto___28722 = arguments.length;
var i__27463__auto___28723 = (0);
while(true){
if((i__27463__auto___28723 < len__27462__auto___28722)){
args28672.push((arguments[i__27463__auto___28723]));

var G__28724 = (i__27463__auto___28723 + (1));
i__27463__auto___28723 = G__28724;
continue;
} else {
}
break;
}

var G__28674 = args28672.length;
switch (G__28674) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28672.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28559__auto___28726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___28726){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___28726){
return (function (state_28698){
var state_val_28699 = (state_28698[(1)]);
if((state_val_28699 === (7))){
var inst_28694 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
var statearr_28700_28727 = state_28698__$1;
(statearr_28700_28727[(2)] = inst_28694);

(statearr_28700_28727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (1))){
var state_28698__$1 = state_28698;
var statearr_28701_28728 = state_28698__$1;
(statearr_28701_28728[(2)] = null);

(statearr_28701_28728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (4))){
var inst_28677 = (state_28698[(7)]);
var inst_28677__$1 = (state_28698[(2)]);
var inst_28678 = (inst_28677__$1 == null);
var state_28698__$1 = (function (){var statearr_28702 = state_28698;
(statearr_28702[(7)] = inst_28677__$1);

return statearr_28702;
})();
if(cljs.core.truth_(inst_28678)){
var statearr_28703_28729 = state_28698__$1;
(statearr_28703_28729[(1)] = (5));

} else {
var statearr_28704_28730 = state_28698__$1;
(statearr_28704_28730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (13))){
var state_28698__$1 = state_28698;
var statearr_28705_28731 = state_28698__$1;
(statearr_28705_28731[(2)] = null);

(statearr_28705_28731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (6))){
var inst_28677 = (state_28698[(7)]);
var state_28698__$1 = state_28698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28698__$1,(11),to,inst_28677);
} else {
if((state_val_28699 === (3))){
var inst_28696 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28698__$1,inst_28696);
} else {
if((state_val_28699 === (12))){
var state_28698__$1 = state_28698;
var statearr_28706_28732 = state_28698__$1;
(statearr_28706_28732[(2)] = null);

(statearr_28706_28732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (2))){
var state_28698__$1 = state_28698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28698__$1,(4),from);
} else {
if((state_val_28699 === (11))){
var inst_28687 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
if(cljs.core.truth_(inst_28687)){
var statearr_28707_28733 = state_28698__$1;
(statearr_28707_28733[(1)] = (12));

} else {
var statearr_28708_28734 = state_28698__$1;
(statearr_28708_28734[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (9))){
var state_28698__$1 = state_28698;
var statearr_28709_28735 = state_28698__$1;
(statearr_28709_28735[(2)] = null);

(statearr_28709_28735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (5))){
var state_28698__$1 = state_28698;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28710_28736 = state_28698__$1;
(statearr_28710_28736[(1)] = (8));

} else {
var statearr_28711_28737 = state_28698__$1;
(statearr_28711_28737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (14))){
var inst_28692 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
var statearr_28712_28738 = state_28698__$1;
(statearr_28712_28738[(2)] = inst_28692);

(statearr_28712_28738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (10))){
var inst_28684 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
var statearr_28713_28739 = state_28698__$1;
(statearr_28713_28739[(2)] = inst_28684);

(statearr_28713_28739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (8))){
var inst_28681 = cljs.core.async.close_BANG_.call(null,to);
var state_28698__$1 = state_28698;
var statearr_28714_28740 = state_28698__$1;
(statearr_28714_28740[(2)] = inst_28681);

(statearr_28714_28740[(1)] = (10));


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
});})(c__28559__auto___28726))
;
return ((function (switch__28447__auto__,c__28559__auto___28726){
return (function() {
var cljs$core$async$state_machine__28448__auto__ = null;
var cljs$core$async$state_machine__28448__auto____0 = (function (){
var statearr_28718 = [null,null,null,null,null,null,null,null];
(statearr_28718[(0)] = cljs$core$async$state_machine__28448__auto__);

(statearr_28718[(1)] = (1));

return statearr_28718;
});
var cljs$core$async$state_machine__28448__auto____1 = (function (state_28698){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_28698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e28719){if((e28719 instanceof Object)){
var ex__28451__auto__ = e28719;
var statearr_28720_28741 = state_28698;
(statearr_28720_28741[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28742 = state_28698;
state_28698 = G__28742;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$state_machine__28448__auto__ = function(state_28698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28448__auto____1.call(this,state_28698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28448__auto____0;
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28448__auto____1;
return cljs$core$async$state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___28726))
})();
var state__28561__auto__ = (function (){var statearr_28721 = f__28560__auto__.call(null);
(statearr_28721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___28726);

return statearr_28721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___28726))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28930){
var vec__28931 = p__28930;
var v = cljs.core.nth.call(null,vec__28931,(0),null);
var p = cljs.core.nth.call(null,vec__28931,(1),null);
var job = vec__28931;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28559__auto___29117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___29117,res,vec__28931,v,p,job,jobs,results){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___29117,res,vec__28931,v,p,job,jobs,results){
return (function (state_28938){
var state_val_28939 = (state_28938[(1)]);
if((state_val_28939 === (1))){
var state_28938__$1 = state_28938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28938__$1,(2),res,v);
} else {
if((state_val_28939 === (2))){
var inst_28935 = (state_28938[(2)]);
var inst_28936 = cljs.core.async.close_BANG_.call(null,res);
var state_28938__$1 = (function (){var statearr_28940 = state_28938;
(statearr_28940[(7)] = inst_28935);

return statearr_28940;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28938__$1,inst_28936);
} else {
return null;
}
}
});})(c__28559__auto___29117,res,vec__28931,v,p,job,jobs,results))
;
return ((function (switch__28447__auto__,c__28559__auto___29117,res,vec__28931,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0 = (function (){
var statearr_28944 = [null,null,null,null,null,null,null,null];
(statearr_28944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__);

(statearr_28944[(1)] = (1));

return statearr_28944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1 = (function (state_28938){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_28938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e28945){if((e28945 instanceof Object)){
var ex__28451__auto__ = e28945;
var statearr_28946_29118 = state_28938;
(statearr_28946_29118[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29119 = state_28938;
state_28938 = G__29119;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__ = function(state_28938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1.call(this,state_28938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___29117,res,vec__28931,v,p,job,jobs,results))
})();
var state__28561__auto__ = (function (){var statearr_28947 = f__28560__auto__.call(null);
(statearr_28947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___29117);

return statearr_28947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___29117,res,vec__28931,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28948){
var vec__28949 = p__28948;
var v = cljs.core.nth.call(null,vec__28949,(0),null);
var p = cljs.core.nth.call(null,vec__28949,(1),null);
var job = vec__28949;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27272__auto___29120 = n;
var __29121 = (0);
while(true){
if((__29121 < n__27272__auto___29120)){
var G__28952_29122 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28952_29122) {
case "compute":
var c__28559__auto___29124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29121,c__28559__auto___29124,G__28952_29122,n__27272__auto___29120,jobs,results,process,async){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (__29121,c__28559__auto___29124,G__28952_29122,n__27272__auto___29120,jobs,results,process,async){
return (function (state_28965){
var state_val_28966 = (state_28965[(1)]);
if((state_val_28966 === (1))){
var state_28965__$1 = state_28965;
var statearr_28967_29125 = state_28965__$1;
(statearr_28967_29125[(2)] = null);

(statearr_28967_29125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (2))){
var state_28965__$1 = state_28965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28965__$1,(4),jobs);
} else {
if((state_val_28966 === (3))){
var inst_28963 = (state_28965[(2)]);
var state_28965__$1 = state_28965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28965__$1,inst_28963);
} else {
if((state_val_28966 === (4))){
var inst_28955 = (state_28965[(2)]);
var inst_28956 = process.call(null,inst_28955);
var state_28965__$1 = state_28965;
if(cljs.core.truth_(inst_28956)){
var statearr_28968_29126 = state_28965__$1;
(statearr_28968_29126[(1)] = (5));

} else {
var statearr_28969_29127 = state_28965__$1;
(statearr_28969_29127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (5))){
var state_28965__$1 = state_28965;
var statearr_28970_29128 = state_28965__$1;
(statearr_28970_29128[(2)] = null);

(statearr_28970_29128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (6))){
var state_28965__$1 = state_28965;
var statearr_28971_29129 = state_28965__$1;
(statearr_28971_29129[(2)] = null);

(statearr_28971_29129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (7))){
var inst_28961 = (state_28965[(2)]);
var state_28965__$1 = state_28965;
var statearr_28972_29130 = state_28965__$1;
(statearr_28972_29130[(2)] = inst_28961);

(statearr_28972_29130[(1)] = (3));


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
});})(__29121,c__28559__auto___29124,G__28952_29122,n__27272__auto___29120,jobs,results,process,async))
;
return ((function (__29121,switch__28447__auto__,c__28559__auto___29124,G__28952_29122,n__27272__auto___29120,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0 = (function (){
var statearr_28976 = [null,null,null,null,null,null,null];
(statearr_28976[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__);

(statearr_28976[(1)] = (1));

return statearr_28976;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1 = (function (state_28965){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_28965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e28977){if((e28977 instanceof Object)){
var ex__28451__auto__ = e28977;
var statearr_28978_29131 = state_28965;
(statearr_28978_29131[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29132 = state_28965;
state_28965 = G__29132;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__ = function(state_28965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1.call(this,state_28965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__;
})()
;})(__29121,switch__28447__auto__,c__28559__auto___29124,G__28952_29122,n__27272__auto___29120,jobs,results,process,async))
})();
var state__28561__auto__ = (function (){var statearr_28979 = f__28560__auto__.call(null);
(statearr_28979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___29124);

return statearr_28979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(__29121,c__28559__auto___29124,G__28952_29122,n__27272__auto___29120,jobs,results,process,async))
);


break;
case "async":
var c__28559__auto___29133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29121,c__28559__auto___29133,G__28952_29122,n__27272__auto___29120,jobs,results,process,async){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (__29121,c__28559__auto___29133,G__28952_29122,n__27272__auto___29120,jobs,results,process,async){
return (function (state_28992){
var state_val_28993 = (state_28992[(1)]);
if((state_val_28993 === (1))){
var state_28992__$1 = state_28992;
var statearr_28994_29134 = state_28992__$1;
(statearr_28994_29134[(2)] = null);

(statearr_28994_29134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (2))){
var state_28992__$1 = state_28992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28992__$1,(4),jobs);
} else {
if((state_val_28993 === (3))){
var inst_28990 = (state_28992[(2)]);
var state_28992__$1 = state_28992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28992__$1,inst_28990);
} else {
if((state_val_28993 === (4))){
var inst_28982 = (state_28992[(2)]);
var inst_28983 = async.call(null,inst_28982);
var state_28992__$1 = state_28992;
if(cljs.core.truth_(inst_28983)){
var statearr_28995_29135 = state_28992__$1;
(statearr_28995_29135[(1)] = (5));

} else {
var statearr_28996_29136 = state_28992__$1;
(statearr_28996_29136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (5))){
var state_28992__$1 = state_28992;
var statearr_28997_29137 = state_28992__$1;
(statearr_28997_29137[(2)] = null);

(statearr_28997_29137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (6))){
var state_28992__$1 = state_28992;
var statearr_28998_29138 = state_28992__$1;
(statearr_28998_29138[(2)] = null);

(statearr_28998_29138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28993 === (7))){
var inst_28988 = (state_28992[(2)]);
var state_28992__$1 = state_28992;
var statearr_28999_29139 = state_28992__$1;
(statearr_28999_29139[(2)] = inst_28988);

(statearr_28999_29139[(1)] = (3));


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
});})(__29121,c__28559__auto___29133,G__28952_29122,n__27272__auto___29120,jobs,results,process,async))
;
return ((function (__29121,switch__28447__auto__,c__28559__auto___29133,G__28952_29122,n__27272__auto___29120,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0 = (function (){
var statearr_29003 = [null,null,null,null,null,null,null];
(statearr_29003[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__);

(statearr_29003[(1)] = (1));

return statearr_29003;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1 = (function (state_28992){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_28992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e29004){if((e29004 instanceof Object)){
var ex__28451__auto__ = e29004;
var statearr_29005_29140 = state_28992;
(statearr_29005_29140[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29141 = state_28992;
state_28992 = G__29141;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__ = function(state_28992){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1.call(this,state_28992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__;
})()
;})(__29121,switch__28447__auto__,c__28559__auto___29133,G__28952_29122,n__27272__auto___29120,jobs,results,process,async))
})();
var state__28561__auto__ = (function (){var statearr_29006 = f__28560__auto__.call(null);
(statearr_29006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___29133);

return statearr_29006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(__29121,c__28559__auto___29133,G__28952_29122,n__27272__auto___29120,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__29142 = (__29121 + (1));
__29121 = G__29142;
continue;
} else {
}
break;
}

var c__28559__auto___29143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___29143,jobs,results,process,async){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___29143,jobs,results,process,async){
return (function (state_29028){
var state_val_29029 = (state_29028[(1)]);
if((state_val_29029 === (1))){
var state_29028__$1 = state_29028;
var statearr_29030_29144 = state_29028__$1;
(statearr_29030_29144[(2)] = null);

(statearr_29030_29144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (2))){
var state_29028__$1 = state_29028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29028__$1,(4),from);
} else {
if((state_val_29029 === (3))){
var inst_29026 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29028__$1,inst_29026);
} else {
if((state_val_29029 === (4))){
var inst_29009 = (state_29028[(7)]);
var inst_29009__$1 = (state_29028[(2)]);
var inst_29010 = (inst_29009__$1 == null);
var state_29028__$1 = (function (){var statearr_29031 = state_29028;
(statearr_29031[(7)] = inst_29009__$1);

return statearr_29031;
})();
if(cljs.core.truth_(inst_29010)){
var statearr_29032_29145 = state_29028__$1;
(statearr_29032_29145[(1)] = (5));

} else {
var statearr_29033_29146 = state_29028__$1;
(statearr_29033_29146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (5))){
var inst_29012 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29028__$1 = state_29028;
var statearr_29034_29147 = state_29028__$1;
(statearr_29034_29147[(2)] = inst_29012);

(statearr_29034_29147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (6))){
var inst_29014 = (state_29028[(8)]);
var inst_29009 = (state_29028[(7)]);
var inst_29014__$1 = cljs.core.async.chan.call(null,(1));
var inst_29015 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29016 = [inst_29009,inst_29014__$1];
var inst_29017 = (new cljs.core.PersistentVector(null,2,(5),inst_29015,inst_29016,null));
var state_29028__$1 = (function (){var statearr_29035 = state_29028;
(statearr_29035[(8)] = inst_29014__$1);

return statearr_29035;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29028__$1,(8),jobs,inst_29017);
} else {
if((state_val_29029 === (7))){
var inst_29024 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
var statearr_29036_29148 = state_29028__$1;
(statearr_29036_29148[(2)] = inst_29024);

(statearr_29036_29148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (8))){
var inst_29014 = (state_29028[(8)]);
var inst_29019 = (state_29028[(2)]);
var state_29028__$1 = (function (){var statearr_29037 = state_29028;
(statearr_29037[(9)] = inst_29019);

return statearr_29037;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29028__$1,(9),results,inst_29014);
} else {
if((state_val_29029 === (9))){
var inst_29021 = (state_29028[(2)]);
var state_29028__$1 = (function (){var statearr_29038 = state_29028;
(statearr_29038[(10)] = inst_29021);

return statearr_29038;
})();
var statearr_29039_29149 = state_29028__$1;
(statearr_29039_29149[(2)] = null);

(statearr_29039_29149[(1)] = (2));


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
});})(c__28559__auto___29143,jobs,results,process,async))
;
return ((function (switch__28447__auto__,c__28559__auto___29143,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0 = (function (){
var statearr_29043 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__);

(statearr_29043[(1)] = (1));

return statearr_29043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1 = (function (state_29028){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_29028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e29044){if((e29044 instanceof Object)){
var ex__28451__auto__ = e29044;
var statearr_29045_29150 = state_29028;
(statearr_29045_29150[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29151 = state_29028;
state_29028 = G__29151;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__ = function(state_29028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1.call(this,state_29028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___29143,jobs,results,process,async))
})();
var state__28561__auto__ = (function (){var statearr_29046 = f__28560__auto__.call(null);
(statearr_29046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___29143);

return statearr_29046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___29143,jobs,results,process,async))
);


var c__28559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto__,jobs,results,process,async){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto__,jobs,results,process,async){
return (function (state_29084){
var state_val_29085 = (state_29084[(1)]);
if((state_val_29085 === (7))){
var inst_29080 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29086_29152 = state_29084__$1;
(statearr_29086_29152[(2)] = inst_29080);

(statearr_29086_29152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (20))){
var state_29084__$1 = state_29084;
var statearr_29087_29153 = state_29084__$1;
(statearr_29087_29153[(2)] = null);

(statearr_29087_29153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (1))){
var state_29084__$1 = state_29084;
var statearr_29088_29154 = state_29084__$1;
(statearr_29088_29154[(2)] = null);

(statearr_29088_29154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (4))){
var inst_29049 = (state_29084[(7)]);
var inst_29049__$1 = (state_29084[(2)]);
var inst_29050 = (inst_29049__$1 == null);
var state_29084__$1 = (function (){var statearr_29089 = state_29084;
(statearr_29089[(7)] = inst_29049__$1);

return statearr_29089;
})();
if(cljs.core.truth_(inst_29050)){
var statearr_29090_29155 = state_29084__$1;
(statearr_29090_29155[(1)] = (5));

} else {
var statearr_29091_29156 = state_29084__$1;
(statearr_29091_29156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (15))){
var inst_29062 = (state_29084[(8)]);
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29084__$1,(18),to,inst_29062);
} else {
if((state_val_29085 === (21))){
var inst_29075 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29092_29157 = state_29084__$1;
(statearr_29092_29157[(2)] = inst_29075);

(statearr_29092_29157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (13))){
var inst_29077 = (state_29084[(2)]);
var state_29084__$1 = (function (){var statearr_29093 = state_29084;
(statearr_29093[(9)] = inst_29077);

return statearr_29093;
})();
var statearr_29094_29158 = state_29084__$1;
(statearr_29094_29158[(2)] = null);

(statearr_29094_29158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (6))){
var inst_29049 = (state_29084[(7)]);
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29084__$1,(11),inst_29049);
} else {
if((state_val_29085 === (17))){
var inst_29070 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
if(cljs.core.truth_(inst_29070)){
var statearr_29095_29159 = state_29084__$1;
(statearr_29095_29159[(1)] = (19));

} else {
var statearr_29096_29160 = state_29084__$1;
(statearr_29096_29160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (3))){
var inst_29082 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29084__$1,inst_29082);
} else {
if((state_val_29085 === (12))){
var inst_29059 = (state_29084[(10)]);
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29084__$1,(14),inst_29059);
} else {
if((state_val_29085 === (2))){
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29084__$1,(4),results);
} else {
if((state_val_29085 === (19))){
var state_29084__$1 = state_29084;
var statearr_29097_29161 = state_29084__$1;
(statearr_29097_29161[(2)] = null);

(statearr_29097_29161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (11))){
var inst_29059 = (state_29084[(2)]);
var state_29084__$1 = (function (){var statearr_29098 = state_29084;
(statearr_29098[(10)] = inst_29059);

return statearr_29098;
})();
var statearr_29099_29162 = state_29084__$1;
(statearr_29099_29162[(2)] = null);

(statearr_29099_29162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (9))){
var state_29084__$1 = state_29084;
var statearr_29100_29163 = state_29084__$1;
(statearr_29100_29163[(2)] = null);

(statearr_29100_29163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (5))){
var state_29084__$1 = state_29084;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29101_29164 = state_29084__$1;
(statearr_29101_29164[(1)] = (8));

} else {
var statearr_29102_29165 = state_29084__$1;
(statearr_29102_29165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (14))){
var inst_29064 = (state_29084[(11)]);
var inst_29062 = (state_29084[(8)]);
var inst_29062__$1 = (state_29084[(2)]);
var inst_29063 = (inst_29062__$1 == null);
var inst_29064__$1 = cljs.core.not.call(null,inst_29063);
var state_29084__$1 = (function (){var statearr_29103 = state_29084;
(statearr_29103[(11)] = inst_29064__$1);

(statearr_29103[(8)] = inst_29062__$1);

return statearr_29103;
})();
if(inst_29064__$1){
var statearr_29104_29166 = state_29084__$1;
(statearr_29104_29166[(1)] = (15));

} else {
var statearr_29105_29167 = state_29084__$1;
(statearr_29105_29167[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (16))){
var inst_29064 = (state_29084[(11)]);
var state_29084__$1 = state_29084;
var statearr_29106_29168 = state_29084__$1;
(statearr_29106_29168[(2)] = inst_29064);

(statearr_29106_29168[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (10))){
var inst_29056 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29107_29169 = state_29084__$1;
(statearr_29107_29169[(2)] = inst_29056);

(statearr_29107_29169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (18))){
var inst_29067 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29108_29170 = state_29084__$1;
(statearr_29108_29170[(2)] = inst_29067);

(statearr_29108_29170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (8))){
var inst_29053 = cljs.core.async.close_BANG_.call(null,to);
var state_29084__$1 = state_29084;
var statearr_29109_29171 = state_29084__$1;
(statearr_29109_29171[(2)] = inst_29053);

(statearr_29109_29171[(1)] = (10));


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
});})(c__28559__auto__,jobs,results,process,async))
;
return ((function (switch__28447__auto__,c__28559__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0 = (function (){
var statearr_29113 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__);

(statearr_29113[(1)] = (1));

return statearr_29113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1 = (function (state_29084){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_29084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e29114){if((e29114 instanceof Object)){
var ex__28451__auto__ = e29114;
var statearr_29115_29172 = state_29084;
(statearr_29115_29172[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29173 = state_29084;
state_29084 = G__29173;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__ = function(state_29084){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1.call(this,state_29084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28448__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto__,jobs,results,process,async))
})();
var state__28561__auto__ = (function (){var statearr_29116 = f__28560__auto__.call(null);
(statearr_29116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto__);

return statearr_29116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto__,jobs,results,process,async))
);

return c__28559__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29174 = [];
var len__27462__auto___29177 = arguments.length;
var i__27463__auto___29178 = (0);
while(true){
if((i__27463__auto___29178 < len__27462__auto___29177)){
args29174.push((arguments[i__27463__auto___29178]));

var G__29179 = (i__27463__auto___29178 + (1));
i__27463__auto___29178 = G__29179;
continue;
} else {
}
break;
}

var G__29176 = args29174.length;
switch (G__29176) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29174.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29181 = [];
var len__27462__auto___29184 = arguments.length;
var i__27463__auto___29185 = (0);
while(true){
if((i__27463__auto___29185 < len__27462__auto___29184)){
args29181.push((arguments[i__27463__auto___29185]));

var G__29186 = (i__27463__auto___29185 + (1));
i__27463__auto___29185 = G__29186;
continue;
} else {
}
break;
}

var G__29183 = args29181.length;
switch (G__29183) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29181.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29188 = [];
var len__27462__auto___29241 = arguments.length;
var i__27463__auto___29242 = (0);
while(true){
if((i__27463__auto___29242 < len__27462__auto___29241)){
args29188.push((arguments[i__27463__auto___29242]));

var G__29243 = (i__27463__auto___29242 + (1));
i__27463__auto___29242 = G__29243;
continue;
} else {
}
break;
}

var G__29190 = args29188.length;
switch (G__29190) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29188.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28559__auto___29245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___29245,tc,fc){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___29245,tc,fc){
return (function (state_29216){
var state_val_29217 = (state_29216[(1)]);
if((state_val_29217 === (7))){
var inst_29212 = (state_29216[(2)]);
var state_29216__$1 = state_29216;
var statearr_29218_29246 = state_29216__$1;
(statearr_29218_29246[(2)] = inst_29212);

(statearr_29218_29246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29217 === (1))){
var state_29216__$1 = state_29216;
var statearr_29219_29247 = state_29216__$1;
(statearr_29219_29247[(2)] = null);

(statearr_29219_29247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29217 === (4))){
var inst_29193 = (state_29216[(7)]);
var inst_29193__$1 = (state_29216[(2)]);
var inst_29194 = (inst_29193__$1 == null);
var state_29216__$1 = (function (){var statearr_29220 = state_29216;
(statearr_29220[(7)] = inst_29193__$1);

return statearr_29220;
})();
if(cljs.core.truth_(inst_29194)){
var statearr_29221_29248 = state_29216__$1;
(statearr_29221_29248[(1)] = (5));

} else {
var statearr_29222_29249 = state_29216__$1;
(statearr_29222_29249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29217 === (13))){
var state_29216__$1 = state_29216;
var statearr_29223_29250 = state_29216__$1;
(statearr_29223_29250[(2)] = null);

(statearr_29223_29250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29217 === (6))){
var inst_29193 = (state_29216[(7)]);
var inst_29199 = p.call(null,inst_29193);
var state_29216__$1 = state_29216;
if(cljs.core.truth_(inst_29199)){
var statearr_29224_29251 = state_29216__$1;
(statearr_29224_29251[(1)] = (9));

} else {
var statearr_29225_29252 = state_29216__$1;
(statearr_29225_29252[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29217 === (3))){
var inst_29214 = (state_29216[(2)]);
var state_29216__$1 = state_29216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29216__$1,inst_29214);
} else {
if((state_val_29217 === (12))){
var state_29216__$1 = state_29216;
var statearr_29226_29253 = state_29216__$1;
(statearr_29226_29253[(2)] = null);

(statearr_29226_29253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29217 === (2))){
var state_29216__$1 = state_29216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29216__$1,(4),ch);
} else {
if((state_val_29217 === (11))){
var inst_29193 = (state_29216[(7)]);
var inst_29203 = (state_29216[(2)]);
var state_29216__$1 = state_29216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29216__$1,(8),inst_29203,inst_29193);
} else {
if((state_val_29217 === (9))){
var state_29216__$1 = state_29216;
var statearr_29227_29254 = state_29216__$1;
(statearr_29227_29254[(2)] = tc);

(statearr_29227_29254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29217 === (5))){
var inst_29196 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29197 = cljs.core.async.close_BANG_.call(null,fc);
var state_29216__$1 = (function (){var statearr_29228 = state_29216;
(statearr_29228[(8)] = inst_29196);

return statearr_29228;
})();
var statearr_29229_29255 = state_29216__$1;
(statearr_29229_29255[(2)] = inst_29197);

(statearr_29229_29255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29217 === (14))){
var inst_29210 = (state_29216[(2)]);
var state_29216__$1 = state_29216;
var statearr_29230_29256 = state_29216__$1;
(statearr_29230_29256[(2)] = inst_29210);

(statearr_29230_29256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29217 === (10))){
var state_29216__$1 = state_29216;
var statearr_29231_29257 = state_29216__$1;
(statearr_29231_29257[(2)] = fc);

(statearr_29231_29257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29217 === (8))){
var inst_29205 = (state_29216[(2)]);
var state_29216__$1 = state_29216;
if(cljs.core.truth_(inst_29205)){
var statearr_29232_29258 = state_29216__$1;
(statearr_29232_29258[(1)] = (12));

} else {
var statearr_29233_29259 = state_29216__$1;
(statearr_29233_29259[(1)] = (13));

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
});})(c__28559__auto___29245,tc,fc))
;
return ((function (switch__28447__auto__,c__28559__auto___29245,tc,fc){
return (function() {
var cljs$core$async$state_machine__28448__auto__ = null;
var cljs$core$async$state_machine__28448__auto____0 = (function (){
var statearr_29237 = [null,null,null,null,null,null,null,null,null];
(statearr_29237[(0)] = cljs$core$async$state_machine__28448__auto__);

(statearr_29237[(1)] = (1));

return statearr_29237;
});
var cljs$core$async$state_machine__28448__auto____1 = (function (state_29216){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_29216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e29238){if((e29238 instanceof Object)){
var ex__28451__auto__ = e29238;
var statearr_29239_29260 = state_29216;
(statearr_29239_29260[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29261 = state_29216;
state_29216 = G__29261;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$state_machine__28448__auto__ = function(state_29216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28448__auto____1.call(this,state_29216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28448__auto____0;
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28448__auto____1;
return cljs$core$async$state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___29245,tc,fc))
})();
var state__28561__auto__ = (function (){var statearr_29240 = f__28560__auto__.call(null);
(statearr_29240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___29245);

return statearr_29240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___29245,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto__){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto__){
return (function (state_29325){
var state_val_29326 = (state_29325[(1)]);
if((state_val_29326 === (7))){
var inst_29321 = (state_29325[(2)]);
var state_29325__$1 = state_29325;
var statearr_29327_29348 = state_29325__$1;
(statearr_29327_29348[(2)] = inst_29321);

(statearr_29327_29348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (1))){
var inst_29305 = init;
var state_29325__$1 = (function (){var statearr_29328 = state_29325;
(statearr_29328[(7)] = inst_29305);

return statearr_29328;
})();
var statearr_29329_29349 = state_29325__$1;
(statearr_29329_29349[(2)] = null);

(statearr_29329_29349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (4))){
var inst_29308 = (state_29325[(8)]);
var inst_29308__$1 = (state_29325[(2)]);
var inst_29309 = (inst_29308__$1 == null);
var state_29325__$1 = (function (){var statearr_29330 = state_29325;
(statearr_29330[(8)] = inst_29308__$1);

return statearr_29330;
})();
if(cljs.core.truth_(inst_29309)){
var statearr_29331_29350 = state_29325__$1;
(statearr_29331_29350[(1)] = (5));

} else {
var statearr_29332_29351 = state_29325__$1;
(statearr_29332_29351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (6))){
var inst_29305 = (state_29325[(7)]);
var inst_29308 = (state_29325[(8)]);
var inst_29312 = (state_29325[(9)]);
var inst_29312__$1 = f.call(null,inst_29305,inst_29308);
var inst_29313 = cljs.core.reduced_QMARK_.call(null,inst_29312__$1);
var state_29325__$1 = (function (){var statearr_29333 = state_29325;
(statearr_29333[(9)] = inst_29312__$1);

return statearr_29333;
})();
if(inst_29313){
var statearr_29334_29352 = state_29325__$1;
(statearr_29334_29352[(1)] = (8));

} else {
var statearr_29335_29353 = state_29325__$1;
(statearr_29335_29353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (3))){
var inst_29323 = (state_29325[(2)]);
var state_29325__$1 = state_29325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29325__$1,inst_29323);
} else {
if((state_val_29326 === (2))){
var state_29325__$1 = state_29325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29325__$1,(4),ch);
} else {
if((state_val_29326 === (9))){
var inst_29312 = (state_29325[(9)]);
var inst_29305 = inst_29312;
var state_29325__$1 = (function (){var statearr_29336 = state_29325;
(statearr_29336[(7)] = inst_29305);

return statearr_29336;
})();
var statearr_29337_29354 = state_29325__$1;
(statearr_29337_29354[(2)] = null);

(statearr_29337_29354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (5))){
var inst_29305 = (state_29325[(7)]);
var state_29325__$1 = state_29325;
var statearr_29338_29355 = state_29325__$1;
(statearr_29338_29355[(2)] = inst_29305);

(statearr_29338_29355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (10))){
var inst_29319 = (state_29325[(2)]);
var state_29325__$1 = state_29325;
var statearr_29339_29356 = state_29325__$1;
(statearr_29339_29356[(2)] = inst_29319);

(statearr_29339_29356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29326 === (8))){
var inst_29312 = (state_29325[(9)]);
var inst_29315 = cljs.core.deref.call(null,inst_29312);
var state_29325__$1 = state_29325;
var statearr_29340_29357 = state_29325__$1;
(statearr_29340_29357[(2)] = inst_29315);

(statearr_29340_29357[(1)] = (10));


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
});})(c__28559__auto__))
;
return ((function (switch__28447__auto__,c__28559__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28448__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28448__auto____0 = (function (){
var statearr_29344 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29344[(0)] = cljs$core$async$reduce_$_state_machine__28448__auto__);

(statearr_29344[(1)] = (1));

return statearr_29344;
});
var cljs$core$async$reduce_$_state_machine__28448__auto____1 = (function (state_29325){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_29325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e29345){if((e29345 instanceof Object)){
var ex__28451__auto__ = e29345;
var statearr_29346_29358 = state_29325;
(statearr_29346_29358[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29359 = state_29325;
state_29325 = G__29359;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28448__auto__ = function(state_29325){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28448__auto____1.call(this,state_29325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28448__auto____0;
cljs$core$async$reduce_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28448__auto____1;
return cljs$core$async$reduce_$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto__))
})();
var state__28561__auto__ = (function (){var statearr_29347 = f__28560__auto__.call(null);
(statearr_29347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto__);

return statearr_29347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto__))
);

return c__28559__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto__,f__$1){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto__,f__$1){
return (function (state_29379){
var state_val_29380 = (state_29379[(1)]);
if((state_val_29380 === (1))){
var inst_29374 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29379__$1,(2),inst_29374);
} else {
if((state_val_29380 === (2))){
var inst_29376 = (state_29379[(2)]);
var inst_29377 = f__$1.call(null,inst_29376);
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29379__$1,inst_29377);
} else {
return null;
}
}
});})(c__28559__auto__,f__$1))
;
return ((function (switch__28447__auto__,c__28559__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28448__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28448__auto____0 = (function (){
var statearr_29384 = [null,null,null,null,null,null,null];
(statearr_29384[(0)] = cljs$core$async$transduce_$_state_machine__28448__auto__);

(statearr_29384[(1)] = (1));

return statearr_29384;
});
var cljs$core$async$transduce_$_state_machine__28448__auto____1 = (function (state_29379){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_29379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e29385){if((e29385 instanceof Object)){
var ex__28451__auto__ = e29385;
var statearr_29386_29388 = state_29379;
(statearr_29386_29388[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29389 = state_29379;
state_29379 = G__29389;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28448__auto__ = function(state_29379){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28448__auto____1.call(this,state_29379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28448__auto____0;
cljs$core$async$transduce_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28448__auto____1;
return cljs$core$async$transduce_$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto__,f__$1))
})();
var state__28561__auto__ = (function (){var statearr_29387 = f__28560__auto__.call(null);
(statearr_29387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto__);

return statearr_29387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto__,f__$1))
);

return c__28559__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29390 = [];
var len__27462__auto___29442 = arguments.length;
var i__27463__auto___29443 = (0);
while(true){
if((i__27463__auto___29443 < len__27462__auto___29442)){
args29390.push((arguments[i__27463__auto___29443]));

var G__29444 = (i__27463__auto___29443 + (1));
i__27463__auto___29443 = G__29444;
continue;
} else {
}
break;
}

var G__29392 = args29390.length;
switch (G__29392) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29390.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto__){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto__){
return (function (state_29417){
var state_val_29418 = (state_29417[(1)]);
if((state_val_29418 === (7))){
var inst_29399 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
var statearr_29419_29446 = state_29417__$1;
(statearr_29419_29446[(2)] = inst_29399);

(statearr_29419_29446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (1))){
var inst_29393 = cljs.core.seq.call(null,coll);
var inst_29394 = inst_29393;
var state_29417__$1 = (function (){var statearr_29420 = state_29417;
(statearr_29420[(7)] = inst_29394);

return statearr_29420;
})();
var statearr_29421_29447 = state_29417__$1;
(statearr_29421_29447[(2)] = null);

(statearr_29421_29447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (4))){
var inst_29394 = (state_29417[(7)]);
var inst_29397 = cljs.core.first.call(null,inst_29394);
var state_29417__$1 = state_29417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29417__$1,(7),ch,inst_29397);
} else {
if((state_val_29418 === (13))){
var inst_29411 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
var statearr_29422_29448 = state_29417__$1;
(statearr_29422_29448[(2)] = inst_29411);

(statearr_29422_29448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (6))){
var inst_29402 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
if(cljs.core.truth_(inst_29402)){
var statearr_29423_29449 = state_29417__$1;
(statearr_29423_29449[(1)] = (8));

} else {
var statearr_29424_29450 = state_29417__$1;
(statearr_29424_29450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (3))){
var inst_29415 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29417__$1,inst_29415);
} else {
if((state_val_29418 === (12))){
var state_29417__$1 = state_29417;
var statearr_29425_29451 = state_29417__$1;
(statearr_29425_29451[(2)] = null);

(statearr_29425_29451[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (2))){
var inst_29394 = (state_29417[(7)]);
var state_29417__$1 = state_29417;
if(cljs.core.truth_(inst_29394)){
var statearr_29426_29452 = state_29417__$1;
(statearr_29426_29452[(1)] = (4));

} else {
var statearr_29427_29453 = state_29417__$1;
(statearr_29427_29453[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (11))){
var inst_29408 = cljs.core.async.close_BANG_.call(null,ch);
var state_29417__$1 = state_29417;
var statearr_29428_29454 = state_29417__$1;
(statearr_29428_29454[(2)] = inst_29408);

(statearr_29428_29454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (9))){
var state_29417__$1 = state_29417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29429_29455 = state_29417__$1;
(statearr_29429_29455[(1)] = (11));

} else {
var statearr_29430_29456 = state_29417__$1;
(statearr_29430_29456[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (5))){
var inst_29394 = (state_29417[(7)]);
var state_29417__$1 = state_29417;
var statearr_29431_29457 = state_29417__$1;
(statearr_29431_29457[(2)] = inst_29394);

(statearr_29431_29457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (10))){
var inst_29413 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
var statearr_29432_29458 = state_29417__$1;
(statearr_29432_29458[(2)] = inst_29413);

(statearr_29432_29458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (8))){
var inst_29394 = (state_29417[(7)]);
var inst_29404 = cljs.core.next.call(null,inst_29394);
var inst_29394__$1 = inst_29404;
var state_29417__$1 = (function (){var statearr_29433 = state_29417;
(statearr_29433[(7)] = inst_29394__$1);

return statearr_29433;
})();
var statearr_29434_29459 = state_29417__$1;
(statearr_29434_29459[(2)] = null);

(statearr_29434_29459[(1)] = (2));


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
});})(c__28559__auto__))
;
return ((function (switch__28447__auto__,c__28559__auto__){
return (function() {
var cljs$core$async$state_machine__28448__auto__ = null;
var cljs$core$async$state_machine__28448__auto____0 = (function (){
var statearr_29438 = [null,null,null,null,null,null,null,null];
(statearr_29438[(0)] = cljs$core$async$state_machine__28448__auto__);

(statearr_29438[(1)] = (1));

return statearr_29438;
});
var cljs$core$async$state_machine__28448__auto____1 = (function (state_29417){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_29417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e29439){if((e29439 instanceof Object)){
var ex__28451__auto__ = e29439;
var statearr_29440_29460 = state_29417;
(statearr_29440_29460[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29461 = state_29417;
state_29417 = G__29461;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$state_machine__28448__auto__ = function(state_29417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28448__auto____1.call(this,state_29417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28448__auto____0;
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28448__auto____1;
return cljs$core$async$state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto__))
})();
var state__28561__auto__ = (function (){var statearr_29441 = f__28560__auto__.call(null);
(statearr_29441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto__);

return statearr_29441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto__))
);

return c__28559__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27017__auto__ = (((_ == null))?null:_);
var m__27018__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,_);
} else {
var m__27018__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27017__auto__ = (((m == null))?null:m);
var m__27018__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27018__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27017__auto__ = (((m == null))?null:m);
var m__27018__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,m,ch);
} else {
var m__27018__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27017__auto__ = (((m == null))?null:m);
var m__27018__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,m);
} else {
var m__27018__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29687 = (function (ch,cs,meta29688){
this.ch = ch;
this.cs = cs;
this.meta29688 = meta29688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29689,meta29688__$1){
var self__ = this;
var _29689__$1 = this;
return (new cljs.core.async.t_cljs$core$async29687(self__.ch,self__.cs,meta29688__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29689){
var self__ = this;
var _29689__$1 = this;
return self__.meta29688;
});})(cs))
;

cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29687.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29687.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29688","meta29688",876233580,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29687";

cljs.core.async.t_cljs$core$async29687.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26960__auto__,writer__26961__auto__,opt__26962__auto__){
return cljs.core._write.call(null,writer__26961__auto__,"cljs.core.async/t_cljs$core$async29687");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29687 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29687(ch__$1,cs__$1,meta29688){
return (new cljs.core.async.t_cljs$core$async29687(ch__$1,cs__$1,meta29688));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29687(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28559__auto___29912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___29912,cs,m,dchan,dctr,done){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___29912,cs,m,dchan,dctr,done){
return (function (state_29824){
var state_val_29825 = (state_29824[(1)]);
if((state_val_29825 === (7))){
var inst_29820 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29826_29913 = state_29824__$1;
(statearr_29826_29913[(2)] = inst_29820);

(statearr_29826_29913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (20))){
var inst_29723 = (state_29824[(7)]);
var inst_29735 = cljs.core.first.call(null,inst_29723);
var inst_29736 = cljs.core.nth.call(null,inst_29735,(0),null);
var inst_29737 = cljs.core.nth.call(null,inst_29735,(1),null);
var state_29824__$1 = (function (){var statearr_29827 = state_29824;
(statearr_29827[(8)] = inst_29736);

return statearr_29827;
})();
if(cljs.core.truth_(inst_29737)){
var statearr_29828_29914 = state_29824__$1;
(statearr_29828_29914[(1)] = (22));

} else {
var statearr_29829_29915 = state_29824__$1;
(statearr_29829_29915[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (27))){
var inst_29692 = (state_29824[(9)]);
var inst_29767 = (state_29824[(10)]);
var inst_29772 = (state_29824[(11)]);
var inst_29765 = (state_29824[(12)]);
var inst_29772__$1 = cljs.core._nth.call(null,inst_29765,inst_29767);
var inst_29773 = cljs.core.async.put_BANG_.call(null,inst_29772__$1,inst_29692,done);
var state_29824__$1 = (function (){var statearr_29830 = state_29824;
(statearr_29830[(11)] = inst_29772__$1);

return statearr_29830;
})();
if(cljs.core.truth_(inst_29773)){
var statearr_29831_29916 = state_29824__$1;
(statearr_29831_29916[(1)] = (30));

} else {
var statearr_29832_29917 = state_29824__$1;
(statearr_29832_29917[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (1))){
var state_29824__$1 = state_29824;
var statearr_29833_29918 = state_29824__$1;
(statearr_29833_29918[(2)] = null);

(statearr_29833_29918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (24))){
var inst_29723 = (state_29824[(7)]);
var inst_29742 = (state_29824[(2)]);
var inst_29743 = cljs.core.next.call(null,inst_29723);
var inst_29701 = inst_29743;
var inst_29702 = null;
var inst_29703 = (0);
var inst_29704 = (0);
var state_29824__$1 = (function (){var statearr_29834 = state_29824;
(statearr_29834[(13)] = inst_29703);

(statearr_29834[(14)] = inst_29701);

(statearr_29834[(15)] = inst_29702);

(statearr_29834[(16)] = inst_29704);

(statearr_29834[(17)] = inst_29742);

return statearr_29834;
})();
var statearr_29835_29919 = state_29824__$1;
(statearr_29835_29919[(2)] = null);

(statearr_29835_29919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (39))){
var state_29824__$1 = state_29824;
var statearr_29839_29920 = state_29824__$1;
(statearr_29839_29920[(2)] = null);

(statearr_29839_29920[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (4))){
var inst_29692 = (state_29824[(9)]);
var inst_29692__$1 = (state_29824[(2)]);
var inst_29693 = (inst_29692__$1 == null);
var state_29824__$1 = (function (){var statearr_29840 = state_29824;
(statearr_29840[(9)] = inst_29692__$1);

return statearr_29840;
})();
if(cljs.core.truth_(inst_29693)){
var statearr_29841_29921 = state_29824__$1;
(statearr_29841_29921[(1)] = (5));

} else {
var statearr_29842_29922 = state_29824__$1;
(statearr_29842_29922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (15))){
var inst_29703 = (state_29824[(13)]);
var inst_29701 = (state_29824[(14)]);
var inst_29702 = (state_29824[(15)]);
var inst_29704 = (state_29824[(16)]);
var inst_29719 = (state_29824[(2)]);
var inst_29720 = (inst_29704 + (1));
var tmp29836 = inst_29703;
var tmp29837 = inst_29701;
var tmp29838 = inst_29702;
var inst_29701__$1 = tmp29837;
var inst_29702__$1 = tmp29838;
var inst_29703__$1 = tmp29836;
var inst_29704__$1 = inst_29720;
var state_29824__$1 = (function (){var statearr_29843 = state_29824;
(statearr_29843[(18)] = inst_29719);

(statearr_29843[(13)] = inst_29703__$1);

(statearr_29843[(14)] = inst_29701__$1);

(statearr_29843[(15)] = inst_29702__$1);

(statearr_29843[(16)] = inst_29704__$1);

return statearr_29843;
})();
var statearr_29844_29923 = state_29824__$1;
(statearr_29844_29923[(2)] = null);

(statearr_29844_29923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (21))){
var inst_29746 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29848_29924 = state_29824__$1;
(statearr_29848_29924[(2)] = inst_29746);

(statearr_29848_29924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (31))){
var inst_29772 = (state_29824[(11)]);
var inst_29776 = done.call(null,null);
var inst_29777 = cljs.core.async.untap_STAR_.call(null,m,inst_29772);
var state_29824__$1 = (function (){var statearr_29849 = state_29824;
(statearr_29849[(19)] = inst_29776);

return statearr_29849;
})();
var statearr_29850_29925 = state_29824__$1;
(statearr_29850_29925[(2)] = inst_29777);

(statearr_29850_29925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (32))){
var inst_29764 = (state_29824[(20)]);
var inst_29767 = (state_29824[(10)]);
var inst_29765 = (state_29824[(12)]);
var inst_29766 = (state_29824[(21)]);
var inst_29779 = (state_29824[(2)]);
var inst_29780 = (inst_29767 + (1));
var tmp29845 = inst_29764;
var tmp29846 = inst_29765;
var tmp29847 = inst_29766;
var inst_29764__$1 = tmp29845;
var inst_29765__$1 = tmp29846;
var inst_29766__$1 = tmp29847;
var inst_29767__$1 = inst_29780;
var state_29824__$1 = (function (){var statearr_29851 = state_29824;
(statearr_29851[(22)] = inst_29779);

(statearr_29851[(20)] = inst_29764__$1);

(statearr_29851[(10)] = inst_29767__$1);

(statearr_29851[(12)] = inst_29765__$1);

(statearr_29851[(21)] = inst_29766__$1);

return statearr_29851;
})();
var statearr_29852_29926 = state_29824__$1;
(statearr_29852_29926[(2)] = null);

(statearr_29852_29926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (40))){
var inst_29792 = (state_29824[(23)]);
var inst_29796 = done.call(null,null);
var inst_29797 = cljs.core.async.untap_STAR_.call(null,m,inst_29792);
var state_29824__$1 = (function (){var statearr_29853 = state_29824;
(statearr_29853[(24)] = inst_29796);

return statearr_29853;
})();
var statearr_29854_29927 = state_29824__$1;
(statearr_29854_29927[(2)] = inst_29797);

(statearr_29854_29927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (33))){
var inst_29783 = (state_29824[(25)]);
var inst_29785 = cljs.core.chunked_seq_QMARK_.call(null,inst_29783);
var state_29824__$1 = state_29824;
if(inst_29785){
var statearr_29855_29928 = state_29824__$1;
(statearr_29855_29928[(1)] = (36));

} else {
var statearr_29856_29929 = state_29824__$1;
(statearr_29856_29929[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (13))){
var inst_29713 = (state_29824[(26)]);
var inst_29716 = cljs.core.async.close_BANG_.call(null,inst_29713);
var state_29824__$1 = state_29824;
var statearr_29857_29930 = state_29824__$1;
(statearr_29857_29930[(2)] = inst_29716);

(statearr_29857_29930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (22))){
var inst_29736 = (state_29824[(8)]);
var inst_29739 = cljs.core.async.close_BANG_.call(null,inst_29736);
var state_29824__$1 = state_29824;
var statearr_29858_29931 = state_29824__$1;
(statearr_29858_29931[(2)] = inst_29739);

(statearr_29858_29931[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (36))){
var inst_29783 = (state_29824[(25)]);
var inst_29787 = cljs.core.chunk_first.call(null,inst_29783);
var inst_29788 = cljs.core.chunk_rest.call(null,inst_29783);
var inst_29789 = cljs.core.count.call(null,inst_29787);
var inst_29764 = inst_29788;
var inst_29765 = inst_29787;
var inst_29766 = inst_29789;
var inst_29767 = (0);
var state_29824__$1 = (function (){var statearr_29859 = state_29824;
(statearr_29859[(20)] = inst_29764);

(statearr_29859[(10)] = inst_29767);

(statearr_29859[(12)] = inst_29765);

(statearr_29859[(21)] = inst_29766);

return statearr_29859;
})();
var statearr_29860_29932 = state_29824__$1;
(statearr_29860_29932[(2)] = null);

(statearr_29860_29932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (41))){
var inst_29783 = (state_29824[(25)]);
var inst_29799 = (state_29824[(2)]);
var inst_29800 = cljs.core.next.call(null,inst_29783);
var inst_29764 = inst_29800;
var inst_29765 = null;
var inst_29766 = (0);
var inst_29767 = (0);
var state_29824__$1 = (function (){var statearr_29861 = state_29824;
(statearr_29861[(20)] = inst_29764);

(statearr_29861[(10)] = inst_29767);

(statearr_29861[(27)] = inst_29799);

(statearr_29861[(12)] = inst_29765);

(statearr_29861[(21)] = inst_29766);

return statearr_29861;
})();
var statearr_29862_29933 = state_29824__$1;
(statearr_29862_29933[(2)] = null);

(statearr_29862_29933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (43))){
var state_29824__$1 = state_29824;
var statearr_29863_29934 = state_29824__$1;
(statearr_29863_29934[(2)] = null);

(statearr_29863_29934[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (29))){
var inst_29808 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29864_29935 = state_29824__$1;
(statearr_29864_29935[(2)] = inst_29808);

(statearr_29864_29935[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (44))){
var inst_29817 = (state_29824[(2)]);
var state_29824__$1 = (function (){var statearr_29865 = state_29824;
(statearr_29865[(28)] = inst_29817);

return statearr_29865;
})();
var statearr_29866_29936 = state_29824__$1;
(statearr_29866_29936[(2)] = null);

(statearr_29866_29936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (6))){
var inst_29756 = (state_29824[(29)]);
var inst_29755 = cljs.core.deref.call(null,cs);
var inst_29756__$1 = cljs.core.keys.call(null,inst_29755);
var inst_29757 = cljs.core.count.call(null,inst_29756__$1);
var inst_29758 = cljs.core.reset_BANG_.call(null,dctr,inst_29757);
var inst_29763 = cljs.core.seq.call(null,inst_29756__$1);
var inst_29764 = inst_29763;
var inst_29765 = null;
var inst_29766 = (0);
var inst_29767 = (0);
var state_29824__$1 = (function (){var statearr_29867 = state_29824;
(statearr_29867[(20)] = inst_29764);

(statearr_29867[(10)] = inst_29767);

(statearr_29867[(30)] = inst_29758);

(statearr_29867[(29)] = inst_29756__$1);

(statearr_29867[(12)] = inst_29765);

(statearr_29867[(21)] = inst_29766);

return statearr_29867;
})();
var statearr_29868_29937 = state_29824__$1;
(statearr_29868_29937[(2)] = null);

(statearr_29868_29937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (28))){
var inst_29764 = (state_29824[(20)]);
var inst_29783 = (state_29824[(25)]);
var inst_29783__$1 = cljs.core.seq.call(null,inst_29764);
var state_29824__$1 = (function (){var statearr_29869 = state_29824;
(statearr_29869[(25)] = inst_29783__$1);

return statearr_29869;
})();
if(inst_29783__$1){
var statearr_29870_29938 = state_29824__$1;
(statearr_29870_29938[(1)] = (33));

} else {
var statearr_29871_29939 = state_29824__$1;
(statearr_29871_29939[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (25))){
var inst_29767 = (state_29824[(10)]);
var inst_29766 = (state_29824[(21)]);
var inst_29769 = (inst_29767 < inst_29766);
var inst_29770 = inst_29769;
var state_29824__$1 = state_29824;
if(cljs.core.truth_(inst_29770)){
var statearr_29872_29940 = state_29824__$1;
(statearr_29872_29940[(1)] = (27));

} else {
var statearr_29873_29941 = state_29824__$1;
(statearr_29873_29941[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (34))){
var state_29824__$1 = state_29824;
var statearr_29874_29942 = state_29824__$1;
(statearr_29874_29942[(2)] = null);

(statearr_29874_29942[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (17))){
var state_29824__$1 = state_29824;
var statearr_29875_29943 = state_29824__$1;
(statearr_29875_29943[(2)] = null);

(statearr_29875_29943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (3))){
var inst_29822 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29824__$1,inst_29822);
} else {
if((state_val_29825 === (12))){
var inst_29751 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29876_29944 = state_29824__$1;
(statearr_29876_29944[(2)] = inst_29751);

(statearr_29876_29944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (2))){
var state_29824__$1 = state_29824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29824__$1,(4),ch);
} else {
if((state_val_29825 === (23))){
var state_29824__$1 = state_29824;
var statearr_29877_29945 = state_29824__$1;
(statearr_29877_29945[(2)] = null);

(statearr_29877_29945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (35))){
var inst_29806 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29878_29946 = state_29824__$1;
(statearr_29878_29946[(2)] = inst_29806);

(statearr_29878_29946[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (19))){
var inst_29723 = (state_29824[(7)]);
var inst_29727 = cljs.core.chunk_first.call(null,inst_29723);
var inst_29728 = cljs.core.chunk_rest.call(null,inst_29723);
var inst_29729 = cljs.core.count.call(null,inst_29727);
var inst_29701 = inst_29728;
var inst_29702 = inst_29727;
var inst_29703 = inst_29729;
var inst_29704 = (0);
var state_29824__$1 = (function (){var statearr_29879 = state_29824;
(statearr_29879[(13)] = inst_29703);

(statearr_29879[(14)] = inst_29701);

(statearr_29879[(15)] = inst_29702);

(statearr_29879[(16)] = inst_29704);

return statearr_29879;
})();
var statearr_29880_29947 = state_29824__$1;
(statearr_29880_29947[(2)] = null);

(statearr_29880_29947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (11))){
var inst_29723 = (state_29824[(7)]);
var inst_29701 = (state_29824[(14)]);
var inst_29723__$1 = cljs.core.seq.call(null,inst_29701);
var state_29824__$1 = (function (){var statearr_29881 = state_29824;
(statearr_29881[(7)] = inst_29723__$1);

return statearr_29881;
})();
if(inst_29723__$1){
var statearr_29882_29948 = state_29824__$1;
(statearr_29882_29948[(1)] = (16));

} else {
var statearr_29883_29949 = state_29824__$1;
(statearr_29883_29949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (9))){
var inst_29753 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29884_29950 = state_29824__$1;
(statearr_29884_29950[(2)] = inst_29753);

(statearr_29884_29950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (5))){
var inst_29699 = cljs.core.deref.call(null,cs);
var inst_29700 = cljs.core.seq.call(null,inst_29699);
var inst_29701 = inst_29700;
var inst_29702 = null;
var inst_29703 = (0);
var inst_29704 = (0);
var state_29824__$1 = (function (){var statearr_29885 = state_29824;
(statearr_29885[(13)] = inst_29703);

(statearr_29885[(14)] = inst_29701);

(statearr_29885[(15)] = inst_29702);

(statearr_29885[(16)] = inst_29704);

return statearr_29885;
})();
var statearr_29886_29951 = state_29824__$1;
(statearr_29886_29951[(2)] = null);

(statearr_29886_29951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (14))){
var state_29824__$1 = state_29824;
var statearr_29887_29952 = state_29824__$1;
(statearr_29887_29952[(2)] = null);

(statearr_29887_29952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (45))){
var inst_29814 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29888_29953 = state_29824__$1;
(statearr_29888_29953[(2)] = inst_29814);

(statearr_29888_29953[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (26))){
var inst_29756 = (state_29824[(29)]);
var inst_29810 = (state_29824[(2)]);
var inst_29811 = cljs.core.seq.call(null,inst_29756);
var state_29824__$1 = (function (){var statearr_29889 = state_29824;
(statearr_29889[(31)] = inst_29810);

return statearr_29889;
})();
if(inst_29811){
var statearr_29890_29954 = state_29824__$1;
(statearr_29890_29954[(1)] = (42));

} else {
var statearr_29891_29955 = state_29824__$1;
(statearr_29891_29955[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (16))){
var inst_29723 = (state_29824[(7)]);
var inst_29725 = cljs.core.chunked_seq_QMARK_.call(null,inst_29723);
var state_29824__$1 = state_29824;
if(inst_29725){
var statearr_29892_29956 = state_29824__$1;
(statearr_29892_29956[(1)] = (19));

} else {
var statearr_29893_29957 = state_29824__$1;
(statearr_29893_29957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (38))){
var inst_29803 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29894_29958 = state_29824__$1;
(statearr_29894_29958[(2)] = inst_29803);

(statearr_29894_29958[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (30))){
var state_29824__$1 = state_29824;
var statearr_29895_29959 = state_29824__$1;
(statearr_29895_29959[(2)] = null);

(statearr_29895_29959[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (10))){
var inst_29702 = (state_29824[(15)]);
var inst_29704 = (state_29824[(16)]);
var inst_29712 = cljs.core._nth.call(null,inst_29702,inst_29704);
var inst_29713 = cljs.core.nth.call(null,inst_29712,(0),null);
var inst_29714 = cljs.core.nth.call(null,inst_29712,(1),null);
var state_29824__$1 = (function (){var statearr_29896 = state_29824;
(statearr_29896[(26)] = inst_29713);

return statearr_29896;
})();
if(cljs.core.truth_(inst_29714)){
var statearr_29897_29960 = state_29824__$1;
(statearr_29897_29960[(1)] = (13));

} else {
var statearr_29898_29961 = state_29824__$1;
(statearr_29898_29961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (18))){
var inst_29749 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29899_29962 = state_29824__$1;
(statearr_29899_29962[(2)] = inst_29749);

(statearr_29899_29962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (42))){
var state_29824__$1 = state_29824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29824__$1,(45),dchan);
} else {
if((state_val_29825 === (37))){
var inst_29692 = (state_29824[(9)]);
var inst_29792 = (state_29824[(23)]);
var inst_29783 = (state_29824[(25)]);
var inst_29792__$1 = cljs.core.first.call(null,inst_29783);
var inst_29793 = cljs.core.async.put_BANG_.call(null,inst_29792__$1,inst_29692,done);
var state_29824__$1 = (function (){var statearr_29900 = state_29824;
(statearr_29900[(23)] = inst_29792__$1);

return statearr_29900;
})();
if(cljs.core.truth_(inst_29793)){
var statearr_29901_29963 = state_29824__$1;
(statearr_29901_29963[(1)] = (39));

} else {
var statearr_29902_29964 = state_29824__$1;
(statearr_29902_29964[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (8))){
var inst_29703 = (state_29824[(13)]);
var inst_29704 = (state_29824[(16)]);
var inst_29706 = (inst_29704 < inst_29703);
var inst_29707 = inst_29706;
var state_29824__$1 = state_29824;
if(cljs.core.truth_(inst_29707)){
var statearr_29903_29965 = state_29824__$1;
(statearr_29903_29965[(1)] = (10));

} else {
var statearr_29904_29966 = state_29824__$1;
(statearr_29904_29966[(1)] = (11));

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
});})(c__28559__auto___29912,cs,m,dchan,dctr,done))
;
return ((function (switch__28447__auto__,c__28559__auto___29912,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28448__auto__ = null;
var cljs$core$async$mult_$_state_machine__28448__auto____0 = (function (){
var statearr_29908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29908[(0)] = cljs$core$async$mult_$_state_machine__28448__auto__);

(statearr_29908[(1)] = (1));

return statearr_29908;
});
var cljs$core$async$mult_$_state_machine__28448__auto____1 = (function (state_29824){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_29824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e29909){if((e29909 instanceof Object)){
var ex__28451__auto__ = e29909;
var statearr_29910_29967 = state_29824;
(statearr_29910_29967[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29968 = state_29824;
state_29824 = G__29968;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28448__auto__ = function(state_29824){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28448__auto____1.call(this,state_29824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28448__auto____0;
cljs$core$async$mult_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28448__auto____1;
return cljs$core$async$mult_$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___29912,cs,m,dchan,dctr,done))
})();
var state__28561__auto__ = (function (){var statearr_29911 = f__28560__auto__.call(null);
(statearr_29911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___29912);

return statearr_29911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___29912,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29969 = [];
var len__27462__auto___29972 = arguments.length;
var i__27463__auto___29973 = (0);
while(true){
if((i__27463__auto___29973 < len__27462__auto___29972)){
args29969.push((arguments[i__27463__auto___29973]));

var G__29974 = (i__27463__auto___29973 + (1));
i__27463__auto___29973 = G__29974;
continue;
} else {
}
break;
}

var G__29971 = args29969.length;
switch (G__29971) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29969.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27017__auto__ = (((m == null))?null:m);
var m__27018__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,m,ch);
} else {
var m__27018__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27017__auto__ = (((m == null))?null:m);
var m__27018__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,m,ch);
} else {
var m__27018__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27017__auto__ = (((m == null))?null:m);
var m__27018__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,m);
} else {
var m__27018__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27017__auto__ = (((m == null))?null:m);
var m__27018__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,m,state_map);
} else {
var m__27018__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27017__auto__ = (((m == null))?null:m);
var m__27018__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,m,mode);
} else {
var m__27018__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27469__auto__ = [];
var len__27462__auto___29986 = arguments.length;
var i__27463__auto___29987 = (0);
while(true){
if((i__27463__auto___29987 < len__27462__auto___29986)){
args__27469__auto__.push((arguments[i__27463__auto___29987]));

var G__29988 = (i__27463__auto___29987 + (1));
i__27463__auto___29987 = G__29988;
continue;
} else {
}
break;
}

var argseq__27470__auto__ = ((((3) < args__27469__auto__.length))?(new cljs.core.IndexedSeq(args__27469__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27470__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29980){
var map__29981 = p__29980;
var map__29981__$1 = ((((!((map__29981 == null)))?((((map__29981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29981):map__29981);
var opts = map__29981__$1;
var statearr_29983_29989 = state;
(statearr_29983_29989[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29981,map__29981__$1,opts){
return (function (val){
var statearr_29984_29990 = state;
(statearr_29984_29990[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29981,map__29981__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29985_29991 = state;
(statearr_29985_29991[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29976){
var G__29977 = cljs.core.first.call(null,seq29976);
var seq29976__$1 = cljs.core.next.call(null,seq29976);
var G__29978 = cljs.core.first.call(null,seq29976__$1);
var seq29976__$2 = cljs.core.next.call(null,seq29976__$1);
var G__29979 = cljs.core.first.call(null,seq29976__$2);
var seq29976__$3 = cljs.core.next.call(null,seq29976__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29977,G__29978,G__29979,seq29976__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30159 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30160){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30160 = meta30160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30161,meta30160__$1){
var self__ = this;
var _30161__$1 = this;
return (new cljs.core.async.t_cljs$core$async30159(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30160__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30161){
var self__ = this;
var _30161__$1 = this;
return self__.meta30160;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30159.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30159.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30160","meta30160",1707774631,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30159";

cljs.core.async.t_cljs$core$async30159.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26960__auto__,writer__26961__auto__,opt__26962__auto__){
return cljs.core._write.call(null,writer__26961__auto__,"cljs.core.async/t_cljs$core$async30159");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30159 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30159(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30160){
return (new cljs.core.async.t_cljs$core$async30159(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30160));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30159(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28559__auto___30326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___30326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___30326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30263){
var state_val_30264 = (state_30263[(1)]);
if((state_val_30264 === (7))){
var inst_30178 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
var statearr_30265_30327 = state_30263__$1;
(statearr_30265_30327[(2)] = inst_30178);

(statearr_30265_30327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (20))){
var inst_30190 = (state_30263[(7)]);
var state_30263__$1 = state_30263;
var statearr_30266_30328 = state_30263__$1;
(statearr_30266_30328[(2)] = inst_30190);

(statearr_30266_30328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (27))){
var state_30263__$1 = state_30263;
var statearr_30267_30329 = state_30263__$1;
(statearr_30267_30329[(2)] = null);

(statearr_30267_30329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (1))){
var inst_30165 = (state_30263[(8)]);
var inst_30165__$1 = calc_state.call(null);
var inst_30167 = (inst_30165__$1 == null);
var inst_30168 = cljs.core.not.call(null,inst_30167);
var state_30263__$1 = (function (){var statearr_30268 = state_30263;
(statearr_30268[(8)] = inst_30165__$1);

return statearr_30268;
})();
if(inst_30168){
var statearr_30269_30330 = state_30263__$1;
(statearr_30269_30330[(1)] = (2));

} else {
var statearr_30270_30331 = state_30263__$1;
(statearr_30270_30331[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (24))){
var inst_30214 = (state_30263[(9)]);
var inst_30223 = (state_30263[(10)]);
var inst_30237 = (state_30263[(11)]);
var inst_30237__$1 = inst_30214.call(null,inst_30223);
var state_30263__$1 = (function (){var statearr_30271 = state_30263;
(statearr_30271[(11)] = inst_30237__$1);

return statearr_30271;
})();
if(cljs.core.truth_(inst_30237__$1)){
var statearr_30272_30332 = state_30263__$1;
(statearr_30272_30332[(1)] = (29));

} else {
var statearr_30273_30333 = state_30263__$1;
(statearr_30273_30333[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (4))){
var inst_30181 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
if(cljs.core.truth_(inst_30181)){
var statearr_30274_30334 = state_30263__$1;
(statearr_30274_30334[(1)] = (8));

} else {
var statearr_30275_30335 = state_30263__$1;
(statearr_30275_30335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (15))){
var inst_30208 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
if(cljs.core.truth_(inst_30208)){
var statearr_30276_30336 = state_30263__$1;
(statearr_30276_30336[(1)] = (19));

} else {
var statearr_30277_30337 = state_30263__$1;
(statearr_30277_30337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (21))){
var inst_30213 = (state_30263[(12)]);
var inst_30213__$1 = (state_30263[(2)]);
var inst_30214 = cljs.core.get.call(null,inst_30213__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30215 = cljs.core.get.call(null,inst_30213__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30216 = cljs.core.get.call(null,inst_30213__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30263__$1 = (function (){var statearr_30278 = state_30263;
(statearr_30278[(9)] = inst_30214);

(statearr_30278[(13)] = inst_30215);

(statearr_30278[(12)] = inst_30213__$1);

return statearr_30278;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30263__$1,(22),inst_30216);
} else {
if((state_val_30264 === (31))){
var inst_30245 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
if(cljs.core.truth_(inst_30245)){
var statearr_30279_30338 = state_30263__$1;
(statearr_30279_30338[(1)] = (32));

} else {
var statearr_30280_30339 = state_30263__$1;
(statearr_30280_30339[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (32))){
var inst_30222 = (state_30263[(14)]);
var state_30263__$1 = state_30263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30263__$1,(35),out,inst_30222);
} else {
if((state_val_30264 === (33))){
var inst_30213 = (state_30263[(12)]);
var inst_30190 = inst_30213;
var state_30263__$1 = (function (){var statearr_30281 = state_30263;
(statearr_30281[(7)] = inst_30190);

return statearr_30281;
})();
var statearr_30282_30340 = state_30263__$1;
(statearr_30282_30340[(2)] = null);

(statearr_30282_30340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (13))){
var inst_30190 = (state_30263[(7)]);
var inst_30197 = inst_30190.cljs$lang$protocol_mask$partition0$;
var inst_30198 = (inst_30197 & (64));
var inst_30199 = inst_30190.cljs$core$ISeq$;
var inst_30200 = (cljs.core.PROTOCOL_SENTINEL === inst_30199);
var inst_30201 = (inst_30198) || (inst_30200);
var state_30263__$1 = state_30263;
if(cljs.core.truth_(inst_30201)){
var statearr_30283_30341 = state_30263__$1;
(statearr_30283_30341[(1)] = (16));

} else {
var statearr_30284_30342 = state_30263__$1;
(statearr_30284_30342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (22))){
var inst_30222 = (state_30263[(14)]);
var inst_30223 = (state_30263[(10)]);
var inst_30221 = (state_30263[(2)]);
var inst_30222__$1 = cljs.core.nth.call(null,inst_30221,(0),null);
var inst_30223__$1 = cljs.core.nth.call(null,inst_30221,(1),null);
var inst_30224 = (inst_30222__$1 == null);
var inst_30225 = cljs.core._EQ_.call(null,inst_30223__$1,change);
var inst_30226 = (inst_30224) || (inst_30225);
var state_30263__$1 = (function (){var statearr_30285 = state_30263;
(statearr_30285[(14)] = inst_30222__$1);

(statearr_30285[(10)] = inst_30223__$1);

return statearr_30285;
})();
if(cljs.core.truth_(inst_30226)){
var statearr_30286_30343 = state_30263__$1;
(statearr_30286_30343[(1)] = (23));

} else {
var statearr_30287_30344 = state_30263__$1;
(statearr_30287_30344[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (36))){
var inst_30213 = (state_30263[(12)]);
var inst_30190 = inst_30213;
var state_30263__$1 = (function (){var statearr_30288 = state_30263;
(statearr_30288[(7)] = inst_30190);

return statearr_30288;
})();
var statearr_30289_30345 = state_30263__$1;
(statearr_30289_30345[(2)] = null);

(statearr_30289_30345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (29))){
var inst_30237 = (state_30263[(11)]);
var state_30263__$1 = state_30263;
var statearr_30290_30346 = state_30263__$1;
(statearr_30290_30346[(2)] = inst_30237);

(statearr_30290_30346[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (6))){
var state_30263__$1 = state_30263;
var statearr_30291_30347 = state_30263__$1;
(statearr_30291_30347[(2)] = false);

(statearr_30291_30347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (28))){
var inst_30233 = (state_30263[(2)]);
var inst_30234 = calc_state.call(null);
var inst_30190 = inst_30234;
var state_30263__$1 = (function (){var statearr_30292 = state_30263;
(statearr_30292[(7)] = inst_30190);

(statearr_30292[(15)] = inst_30233);

return statearr_30292;
})();
var statearr_30293_30348 = state_30263__$1;
(statearr_30293_30348[(2)] = null);

(statearr_30293_30348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (25))){
var inst_30259 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
var statearr_30294_30349 = state_30263__$1;
(statearr_30294_30349[(2)] = inst_30259);

(statearr_30294_30349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (34))){
var inst_30257 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
var statearr_30295_30350 = state_30263__$1;
(statearr_30295_30350[(2)] = inst_30257);

(statearr_30295_30350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (17))){
var state_30263__$1 = state_30263;
var statearr_30296_30351 = state_30263__$1;
(statearr_30296_30351[(2)] = false);

(statearr_30296_30351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (3))){
var state_30263__$1 = state_30263;
var statearr_30297_30352 = state_30263__$1;
(statearr_30297_30352[(2)] = false);

(statearr_30297_30352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (12))){
var inst_30261 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30263__$1,inst_30261);
} else {
if((state_val_30264 === (2))){
var inst_30165 = (state_30263[(8)]);
var inst_30170 = inst_30165.cljs$lang$protocol_mask$partition0$;
var inst_30171 = (inst_30170 & (64));
var inst_30172 = inst_30165.cljs$core$ISeq$;
var inst_30173 = (cljs.core.PROTOCOL_SENTINEL === inst_30172);
var inst_30174 = (inst_30171) || (inst_30173);
var state_30263__$1 = state_30263;
if(cljs.core.truth_(inst_30174)){
var statearr_30298_30353 = state_30263__$1;
(statearr_30298_30353[(1)] = (5));

} else {
var statearr_30299_30354 = state_30263__$1;
(statearr_30299_30354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (23))){
var inst_30222 = (state_30263[(14)]);
var inst_30228 = (inst_30222 == null);
var state_30263__$1 = state_30263;
if(cljs.core.truth_(inst_30228)){
var statearr_30300_30355 = state_30263__$1;
(statearr_30300_30355[(1)] = (26));

} else {
var statearr_30301_30356 = state_30263__$1;
(statearr_30301_30356[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (35))){
var inst_30248 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
if(cljs.core.truth_(inst_30248)){
var statearr_30302_30357 = state_30263__$1;
(statearr_30302_30357[(1)] = (36));

} else {
var statearr_30303_30358 = state_30263__$1;
(statearr_30303_30358[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (19))){
var inst_30190 = (state_30263[(7)]);
var inst_30210 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30190);
var state_30263__$1 = state_30263;
var statearr_30304_30359 = state_30263__$1;
(statearr_30304_30359[(2)] = inst_30210);

(statearr_30304_30359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (11))){
var inst_30190 = (state_30263[(7)]);
var inst_30194 = (inst_30190 == null);
var inst_30195 = cljs.core.not.call(null,inst_30194);
var state_30263__$1 = state_30263;
if(inst_30195){
var statearr_30305_30360 = state_30263__$1;
(statearr_30305_30360[(1)] = (13));

} else {
var statearr_30306_30361 = state_30263__$1;
(statearr_30306_30361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (9))){
var inst_30165 = (state_30263[(8)]);
var state_30263__$1 = state_30263;
var statearr_30307_30362 = state_30263__$1;
(statearr_30307_30362[(2)] = inst_30165);

(statearr_30307_30362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (5))){
var state_30263__$1 = state_30263;
var statearr_30308_30363 = state_30263__$1;
(statearr_30308_30363[(2)] = true);

(statearr_30308_30363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (14))){
var state_30263__$1 = state_30263;
var statearr_30309_30364 = state_30263__$1;
(statearr_30309_30364[(2)] = false);

(statearr_30309_30364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (26))){
var inst_30223 = (state_30263[(10)]);
var inst_30230 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30223);
var state_30263__$1 = state_30263;
var statearr_30310_30365 = state_30263__$1;
(statearr_30310_30365[(2)] = inst_30230);

(statearr_30310_30365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (16))){
var state_30263__$1 = state_30263;
var statearr_30311_30366 = state_30263__$1;
(statearr_30311_30366[(2)] = true);

(statearr_30311_30366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (38))){
var inst_30253 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
var statearr_30312_30367 = state_30263__$1;
(statearr_30312_30367[(2)] = inst_30253);

(statearr_30312_30367[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (30))){
var inst_30214 = (state_30263[(9)]);
var inst_30215 = (state_30263[(13)]);
var inst_30223 = (state_30263[(10)]);
var inst_30240 = cljs.core.empty_QMARK_.call(null,inst_30214);
var inst_30241 = inst_30215.call(null,inst_30223);
var inst_30242 = cljs.core.not.call(null,inst_30241);
var inst_30243 = (inst_30240) && (inst_30242);
var state_30263__$1 = state_30263;
var statearr_30313_30368 = state_30263__$1;
(statearr_30313_30368[(2)] = inst_30243);

(statearr_30313_30368[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (10))){
var inst_30165 = (state_30263[(8)]);
var inst_30186 = (state_30263[(2)]);
var inst_30187 = cljs.core.get.call(null,inst_30186,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30188 = cljs.core.get.call(null,inst_30186,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30189 = cljs.core.get.call(null,inst_30186,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30190 = inst_30165;
var state_30263__$1 = (function (){var statearr_30314 = state_30263;
(statearr_30314[(7)] = inst_30190);

(statearr_30314[(16)] = inst_30187);

(statearr_30314[(17)] = inst_30188);

(statearr_30314[(18)] = inst_30189);

return statearr_30314;
})();
var statearr_30315_30369 = state_30263__$1;
(statearr_30315_30369[(2)] = null);

(statearr_30315_30369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (18))){
var inst_30205 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
var statearr_30316_30370 = state_30263__$1;
(statearr_30316_30370[(2)] = inst_30205);

(statearr_30316_30370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (37))){
var state_30263__$1 = state_30263;
var statearr_30317_30371 = state_30263__$1;
(statearr_30317_30371[(2)] = null);

(statearr_30317_30371[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (8))){
var inst_30165 = (state_30263[(8)]);
var inst_30183 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30165);
var state_30263__$1 = state_30263;
var statearr_30318_30372 = state_30263__$1;
(statearr_30318_30372[(2)] = inst_30183);

(statearr_30318_30372[(1)] = (10));


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
});})(c__28559__auto___30326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28447__auto__,c__28559__auto___30326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28448__auto__ = null;
var cljs$core$async$mix_$_state_machine__28448__auto____0 = (function (){
var statearr_30322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30322[(0)] = cljs$core$async$mix_$_state_machine__28448__auto__);

(statearr_30322[(1)] = (1));

return statearr_30322;
});
var cljs$core$async$mix_$_state_machine__28448__auto____1 = (function (state_30263){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_30263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e30323){if((e30323 instanceof Object)){
var ex__28451__auto__ = e30323;
var statearr_30324_30373 = state_30263;
(statearr_30324_30373[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30374 = state_30263;
state_30263 = G__30374;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28448__auto__ = function(state_30263){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28448__auto____1.call(this,state_30263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28448__auto____0;
cljs$core$async$mix_$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28448__auto____1;
return cljs$core$async$mix_$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___30326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28561__auto__ = (function (){var statearr_30325 = f__28560__auto__.call(null);
(statearr_30325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___30326);

return statearr_30325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___30326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27017__auto__ = (((p == null))?null:p);
var m__27018__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27018__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27017__auto__ = (((p == null))?null:p);
var m__27018__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,p,v,ch);
} else {
var m__27018__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30375 = [];
var len__27462__auto___30378 = arguments.length;
var i__27463__auto___30379 = (0);
while(true){
if((i__27463__auto___30379 < len__27462__auto___30378)){
args30375.push((arguments[i__27463__auto___30379]));

var G__30380 = (i__27463__auto___30379 + (1));
i__27463__auto___30379 = G__30380;
continue;
} else {
}
break;
}

var G__30377 = args30375.length;
switch (G__30377) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30375.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27017__auto__ = (((p == null))?null:p);
var m__27018__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,p);
} else {
var m__27018__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27017__auto__ = (((p == null))?null:p);
var m__27018__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27017__auto__)]);
if(!((m__27018__auto__ == null))){
return m__27018__auto__.call(null,p,v);
} else {
var m__27018__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27018__auto____$1 == null))){
return m__27018__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30383 = [];
var len__27462__auto___30508 = arguments.length;
var i__27463__auto___30509 = (0);
while(true){
if((i__27463__auto___30509 < len__27462__auto___30508)){
args30383.push((arguments[i__27463__auto___30509]));

var G__30510 = (i__27463__auto___30509 + (1));
i__27463__auto___30509 = G__30510;
continue;
} else {
}
break;
}

var G__30385 = args30383.length;
switch (G__30385) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30383.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26349__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26349__auto__)){
return or__26349__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26349__auto__,mults){
return (function (p1__30382_SHARP_){
if(cljs.core.truth_(p1__30382_SHARP_.call(null,topic))){
return p1__30382_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30382_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26349__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30386 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30387){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30387 = meta30387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30388,meta30387__$1){
var self__ = this;
var _30388__$1 = this;
return (new cljs.core.async.t_cljs$core$async30386(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30387__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30388){
var self__ = this;
var _30388__$1 = this;
return self__.meta30387;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30386.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30386.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30386.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30386.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30386.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30386.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30386.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30387","meta30387",-65714491,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30386";

cljs.core.async.t_cljs$core$async30386.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26960__auto__,writer__26961__auto__,opt__26962__auto__){
return cljs.core._write.call(null,writer__26961__auto__,"cljs.core.async/t_cljs$core$async30386");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30386 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30386(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30387){
return (new cljs.core.async.t_cljs$core$async30386(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30387));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30386(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28559__auto___30512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___30512,mults,ensure_mult,p){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___30512,mults,ensure_mult,p){
return (function (state_30460){
var state_val_30461 = (state_30460[(1)]);
if((state_val_30461 === (7))){
var inst_30456 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30462_30513 = state_30460__$1;
(statearr_30462_30513[(2)] = inst_30456);

(statearr_30462_30513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (20))){
var state_30460__$1 = state_30460;
var statearr_30463_30514 = state_30460__$1;
(statearr_30463_30514[(2)] = null);

(statearr_30463_30514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (1))){
var state_30460__$1 = state_30460;
var statearr_30464_30515 = state_30460__$1;
(statearr_30464_30515[(2)] = null);

(statearr_30464_30515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (24))){
var inst_30439 = (state_30460[(7)]);
var inst_30448 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30439);
var state_30460__$1 = state_30460;
var statearr_30465_30516 = state_30460__$1;
(statearr_30465_30516[(2)] = inst_30448);

(statearr_30465_30516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (4))){
var inst_30391 = (state_30460[(8)]);
var inst_30391__$1 = (state_30460[(2)]);
var inst_30392 = (inst_30391__$1 == null);
var state_30460__$1 = (function (){var statearr_30466 = state_30460;
(statearr_30466[(8)] = inst_30391__$1);

return statearr_30466;
})();
if(cljs.core.truth_(inst_30392)){
var statearr_30467_30517 = state_30460__$1;
(statearr_30467_30517[(1)] = (5));

} else {
var statearr_30468_30518 = state_30460__$1;
(statearr_30468_30518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (15))){
var inst_30433 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30469_30519 = state_30460__$1;
(statearr_30469_30519[(2)] = inst_30433);

(statearr_30469_30519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (21))){
var inst_30453 = (state_30460[(2)]);
var state_30460__$1 = (function (){var statearr_30470 = state_30460;
(statearr_30470[(9)] = inst_30453);

return statearr_30470;
})();
var statearr_30471_30520 = state_30460__$1;
(statearr_30471_30520[(2)] = null);

(statearr_30471_30520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (13))){
var inst_30415 = (state_30460[(10)]);
var inst_30417 = cljs.core.chunked_seq_QMARK_.call(null,inst_30415);
var state_30460__$1 = state_30460;
if(inst_30417){
var statearr_30472_30521 = state_30460__$1;
(statearr_30472_30521[(1)] = (16));

} else {
var statearr_30473_30522 = state_30460__$1;
(statearr_30473_30522[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (22))){
var inst_30445 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
if(cljs.core.truth_(inst_30445)){
var statearr_30474_30523 = state_30460__$1;
(statearr_30474_30523[(1)] = (23));

} else {
var statearr_30475_30524 = state_30460__$1;
(statearr_30475_30524[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (6))){
var inst_30441 = (state_30460[(11)]);
var inst_30391 = (state_30460[(8)]);
var inst_30439 = (state_30460[(7)]);
var inst_30439__$1 = topic_fn.call(null,inst_30391);
var inst_30440 = cljs.core.deref.call(null,mults);
var inst_30441__$1 = cljs.core.get.call(null,inst_30440,inst_30439__$1);
var state_30460__$1 = (function (){var statearr_30476 = state_30460;
(statearr_30476[(11)] = inst_30441__$1);

(statearr_30476[(7)] = inst_30439__$1);

return statearr_30476;
})();
if(cljs.core.truth_(inst_30441__$1)){
var statearr_30477_30525 = state_30460__$1;
(statearr_30477_30525[(1)] = (19));

} else {
var statearr_30478_30526 = state_30460__$1;
(statearr_30478_30526[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (25))){
var inst_30450 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30479_30527 = state_30460__$1;
(statearr_30479_30527[(2)] = inst_30450);

(statearr_30479_30527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (17))){
var inst_30415 = (state_30460[(10)]);
var inst_30424 = cljs.core.first.call(null,inst_30415);
var inst_30425 = cljs.core.async.muxch_STAR_.call(null,inst_30424);
var inst_30426 = cljs.core.async.close_BANG_.call(null,inst_30425);
var inst_30427 = cljs.core.next.call(null,inst_30415);
var inst_30401 = inst_30427;
var inst_30402 = null;
var inst_30403 = (0);
var inst_30404 = (0);
var state_30460__$1 = (function (){var statearr_30480 = state_30460;
(statearr_30480[(12)] = inst_30404);

(statearr_30480[(13)] = inst_30426);

(statearr_30480[(14)] = inst_30403);

(statearr_30480[(15)] = inst_30401);

(statearr_30480[(16)] = inst_30402);

return statearr_30480;
})();
var statearr_30481_30528 = state_30460__$1;
(statearr_30481_30528[(2)] = null);

(statearr_30481_30528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (3))){
var inst_30458 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30460__$1,inst_30458);
} else {
if((state_val_30461 === (12))){
var inst_30435 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30482_30529 = state_30460__$1;
(statearr_30482_30529[(2)] = inst_30435);

(statearr_30482_30529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (2))){
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30460__$1,(4),ch);
} else {
if((state_val_30461 === (23))){
var state_30460__$1 = state_30460;
var statearr_30483_30530 = state_30460__$1;
(statearr_30483_30530[(2)] = null);

(statearr_30483_30530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (19))){
var inst_30441 = (state_30460[(11)]);
var inst_30391 = (state_30460[(8)]);
var inst_30443 = cljs.core.async.muxch_STAR_.call(null,inst_30441);
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30460__$1,(22),inst_30443,inst_30391);
} else {
if((state_val_30461 === (11))){
var inst_30401 = (state_30460[(15)]);
var inst_30415 = (state_30460[(10)]);
var inst_30415__$1 = cljs.core.seq.call(null,inst_30401);
var state_30460__$1 = (function (){var statearr_30484 = state_30460;
(statearr_30484[(10)] = inst_30415__$1);

return statearr_30484;
})();
if(inst_30415__$1){
var statearr_30485_30531 = state_30460__$1;
(statearr_30485_30531[(1)] = (13));

} else {
var statearr_30486_30532 = state_30460__$1;
(statearr_30486_30532[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (9))){
var inst_30437 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30487_30533 = state_30460__$1;
(statearr_30487_30533[(2)] = inst_30437);

(statearr_30487_30533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (5))){
var inst_30398 = cljs.core.deref.call(null,mults);
var inst_30399 = cljs.core.vals.call(null,inst_30398);
var inst_30400 = cljs.core.seq.call(null,inst_30399);
var inst_30401 = inst_30400;
var inst_30402 = null;
var inst_30403 = (0);
var inst_30404 = (0);
var state_30460__$1 = (function (){var statearr_30488 = state_30460;
(statearr_30488[(12)] = inst_30404);

(statearr_30488[(14)] = inst_30403);

(statearr_30488[(15)] = inst_30401);

(statearr_30488[(16)] = inst_30402);

return statearr_30488;
})();
var statearr_30489_30534 = state_30460__$1;
(statearr_30489_30534[(2)] = null);

(statearr_30489_30534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (14))){
var state_30460__$1 = state_30460;
var statearr_30493_30535 = state_30460__$1;
(statearr_30493_30535[(2)] = null);

(statearr_30493_30535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (16))){
var inst_30415 = (state_30460[(10)]);
var inst_30419 = cljs.core.chunk_first.call(null,inst_30415);
var inst_30420 = cljs.core.chunk_rest.call(null,inst_30415);
var inst_30421 = cljs.core.count.call(null,inst_30419);
var inst_30401 = inst_30420;
var inst_30402 = inst_30419;
var inst_30403 = inst_30421;
var inst_30404 = (0);
var state_30460__$1 = (function (){var statearr_30494 = state_30460;
(statearr_30494[(12)] = inst_30404);

(statearr_30494[(14)] = inst_30403);

(statearr_30494[(15)] = inst_30401);

(statearr_30494[(16)] = inst_30402);

return statearr_30494;
})();
var statearr_30495_30536 = state_30460__$1;
(statearr_30495_30536[(2)] = null);

(statearr_30495_30536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (10))){
var inst_30404 = (state_30460[(12)]);
var inst_30403 = (state_30460[(14)]);
var inst_30401 = (state_30460[(15)]);
var inst_30402 = (state_30460[(16)]);
var inst_30409 = cljs.core._nth.call(null,inst_30402,inst_30404);
var inst_30410 = cljs.core.async.muxch_STAR_.call(null,inst_30409);
var inst_30411 = cljs.core.async.close_BANG_.call(null,inst_30410);
var inst_30412 = (inst_30404 + (1));
var tmp30490 = inst_30403;
var tmp30491 = inst_30401;
var tmp30492 = inst_30402;
var inst_30401__$1 = tmp30491;
var inst_30402__$1 = tmp30492;
var inst_30403__$1 = tmp30490;
var inst_30404__$1 = inst_30412;
var state_30460__$1 = (function (){var statearr_30496 = state_30460;
(statearr_30496[(12)] = inst_30404__$1);

(statearr_30496[(14)] = inst_30403__$1);

(statearr_30496[(17)] = inst_30411);

(statearr_30496[(15)] = inst_30401__$1);

(statearr_30496[(16)] = inst_30402__$1);

return statearr_30496;
})();
var statearr_30497_30537 = state_30460__$1;
(statearr_30497_30537[(2)] = null);

(statearr_30497_30537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (18))){
var inst_30430 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30498_30538 = state_30460__$1;
(statearr_30498_30538[(2)] = inst_30430);

(statearr_30498_30538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (8))){
var inst_30404 = (state_30460[(12)]);
var inst_30403 = (state_30460[(14)]);
var inst_30406 = (inst_30404 < inst_30403);
var inst_30407 = inst_30406;
var state_30460__$1 = state_30460;
if(cljs.core.truth_(inst_30407)){
var statearr_30499_30539 = state_30460__$1;
(statearr_30499_30539[(1)] = (10));

} else {
var statearr_30500_30540 = state_30460__$1;
(statearr_30500_30540[(1)] = (11));

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
});})(c__28559__auto___30512,mults,ensure_mult,p))
;
return ((function (switch__28447__auto__,c__28559__auto___30512,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28448__auto__ = null;
var cljs$core$async$state_machine__28448__auto____0 = (function (){
var statearr_30504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30504[(0)] = cljs$core$async$state_machine__28448__auto__);

(statearr_30504[(1)] = (1));

return statearr_30504;
});
var cljs$core$async$state_machine__28448__auto____1 = (function (state_30460){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_30460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e30505){if((e30505 instanceof Object)){
var ex__28451__auto__ = e30505;
var statearr_30506_30541 = state_30460;
(statearr_30506_30541[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30542 = state_30460;
state_30460 = G__30542;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$state_machine__28448__auto__ = function(state_30460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28448__auto____1.call(this,state_30460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28448__auto____0;
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28448__auto____1;
return cljs$core$async$state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___30512,mults,ensure_mult,p))
})();
var state__28561__auto__ = (function (){var statearr_30507 = f__28560__auto__.call(null);
(statearr_30507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___30512);

return statearr_30507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___30512,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30543 = [];
var len__27462__auto___30546 = arguments.length;
var i__27463__auto___30547 = (0);
while(true){
if((i__27463__auto___30547 < len__27462__auto___30546)){
args30543.push((arguments[i__27463__auto___30547]));

var G__30548 = (i__27463__auto___30547 + (1));
i__27463__auto___30547 = G__30548;
continue;
} else {
}
break;
}

var G__30545 = args30543.length;
switch (G__30545) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30543.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30550 = [];
var len__27462__auto___30553 = arguments.length;
var i__27463__auto___30554 = (0);
while(true){
if((i__27463__auto___30554 < len__27462__auto___30553)){
args30550.push((arguments[i__27463__auto___30554]));

var G__30555 = (i__27463__auto___30554 + (1));
i__27463__auto___30554 = G__30555;
continue;
} else {
}
break;
}

var G__30552 = args30550.length;
switch (G__30552) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30550.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30557 = [];
var len__27462__auto___30628 = arguments.length;
var i__27463__auto___30629 = (0);
while(true){
if((i__27463__auto___30629 < len__27462__auto___30628)){
args30557.push((arguments[i__27463__auto___30629]));

var G__30630 = (i__27463__auto___30629 + (1));
i__27463__auto___30629 = G__30630;
continue;
} else {
}
break;
}

var G__30559 = args30557.length;
switch (G__30559) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30557.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28559__auto___30632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___30632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___30632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30598){
var state_val_30599 = (state_30598[(1)]);
if((state_val_30599 === (7))){
var state_30598__$1 = state_30598;
var statearr_30600_30633 = state_30598__$1;
(statearr_30600_30633[(2)] = null);

(statearr_30600_30633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30599 === (1))){
var state_30598__$1 = state_30598;
var statearr_30601_30634 = state_30598__$1;
(statearr_30601_30634[(2)] = null);

(statearr_30601_30634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30599 === (4))){
var inst_30562 = (state_30598[(7)]);
var inst_30564 = (inst_30562 < cnt);
var state_30598__$1 = state_30598;
if(cljs.core.truth_(inst_30564)){
var statearr_30602_30635 = state_30598__$1;
(statearr_30602_30635[(1)] = (6));

} else {
var statearr_30603_30636 = state_30598__$1;
(statearr_30603_30636[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30599 === (15))){
var inst_30594 = (state_30598[(2)]);
var state_30598__$1 = state_30598;
var statearr_30604_30637 = state_30598__$1;
(statearr_30604_30637[(2)] = inst_30594);

(statearr_30604_30637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30599 === (13))){
var inst_30587 = cljs.core.async.close_BANG_.call(null,out);
var state_30598__$1 = state_30598;
var statearr_30605_30638 = state_30598__$1;
(statearr_30605_30638[(2)] = inst_30587);

(statearr_30605_30638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30599 === (6))){
var state_30598__$1 = state_30598;
var statearr_30606_30639 = state_30598__$1;
(statearr_30606_30639[(2)] = null);

(statearr_30606_30639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30599 === (3))){
var inst_30596 = (state_30598[(2)]);
var state_30598__$1 = state_30598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30598__$1,inst_30596);
} else {
if((state_val_30599 === (12))){
var inst_30584 = (state_30598[(8)]);
var inst_30584__$1 = (state_30598[(2)]);
var inst_30585 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30584__$1);
var state_30598__$1 = (function (){var statearr_30607 = state_30598;
(statearr_30607[(8)] = inst_30584__$1);

return statearr_30607;
})();
if(cljs.core.truth_(inst_30585)){
var statearr_30608_30640 = state_30598__$1;
(statearr_30608_30640[(1)] = (13));

} else {
var statearr_30609_30641 = state_30598__$1;
(statearr_30609_30641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30599 === (2))){
var inst_30561 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30562 = (0);
var state_30598__$1 = (function (){var statearr_30610 = state_30598;
(statearr_30610[(7)] = inst_30562);

(statearr_30610[(9)] = inst_30561);

return statearr_30610;
})();
var statearr_30611_30642 = state_30598__$1;
(statearr_30611_30642[(2)] = null);

(statearr_30611_30642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30599 === (11))){
var inst_30562 = (state_30598[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30598,(10),Object,null,(9));
var inst_30571 = chs__$1.call(null,inst_30562);
var inst_30572 = done.call(null,inst_30562);
var inst_30573 = cljs.core.async.take_BANG_.call(null,inst_30571,inst_30572);
var state_30598__$1 = state_30598;
var statearr_30612_30643 = state_30598__$1;
(statearr_30612_30643[(2)] = inst_30573);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30598__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30599 === (9))){
var inst_30562 = (state_30598[(7)]);
var inst_30575 = (state_30598[(2)]);
var inst_30576 = (inst_30562 + (1));
var inst_30562__$1 = inst_30576;
var state_30598__$1 = (function (){var statearr_30613 = state_30598;
(statearr_30613[(7)] = inst_30562__$1);

(statearr_30613[(10)] = inst_30575);

return statearr_30613;
})();
var statearr_30614_30644 = state_30598__$1;
(statearr_30614_30644[(2)] = null);

(statearr_30614_30644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30599 === (5))){
var inst_30582 = (state_30598[(2)]);
var state_30598__$1 = (function (){var statearr_30615 = state_30598;
(statearr_30615[(11)] = inst_30582);

return statearr_30615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30598__$1,(12),dchan);
} else {
if((state_val_30599 === (14))){
var inst_30584 = (state_30598[(8)]);
var inst_30589 = cljs.core.apply.call(null,f,inst_30584);
var state_30598__$1 = state_30598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30598__$1,(16),out,inst_30589);
} else {
if((state_val_30599 === (16))){
var inst_30591 = (state_30598[(2)]);
var state_30598__$1 = (function (){var statearr_30616 = state_30598;
(statearr_30616[(12)] = inst_30591);

return statearr_30616;
})();
var statearr_30617_30645 = state_30598__$1;
(statearr_30617_30645[(2)] = null);

(statearr_30617_30645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30599 === (10))){
var inst_30566 = (state_30598[(2)]);
var inst_30567 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30598__$1 = (function (){var statearr_30618 = state_30598;
(statearr_30618[(13)] = inst_30566);

return statearr_30618;
})();
var statearr_30619_30646 = state_30598__$1;
(statearr_30619_30646[(2)] = inst_30567);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30598__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30599 === (8))){
var inst_30580 = (state_30598[(2)]);
var state_30598__$1 = state_30598;
var statearr_30620_30647 = state_30598__$1;
(statearr_30620_30647[(2)] = inst_30580);

(statearr_30620_30647[(1)] = (5));


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
});})(c__28559__auto___30632,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28447__auto__,c__28559__auto___30632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28448__auto__ = null;
var cljs$core$async$state_machine__28448__auto____0 = (function (){
var statearr_30624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30624[(0)] = cljs$core$async$state_machine__28448__auto__);

(statearr_30624[(1)] = (1));

return statearr_30624;
});
var cljs$core$async$state_machine__28448__auto____1 = (function (state_30598){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_30598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e30625){if((e30625 instanceof Object)){
var ex__28451__auto__ = e30625;
var statearr_30626_30648 = state_30598;
(statearr_30626_30648[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30649 = state_30598;
state_30598 = G__30649;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$state_machine__28448__auto__ = function(state_30598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28448__auto____1.call(this,state_30598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28448__auto____0;
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28448__auto____1;
return cljs$core$async$state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___30632,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28561__auto__ = (function (){var statearr_30627 = f__28560__auto__.call(null);
(statearr_30627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___30632);

return statearr_30627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___30632,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30651 = [];
var len__27462__auto___30709 = arguments.length;
var i__27463__auto___30710 = (0);
while(true){
if((i__27463__auto___30710 < len__27462__auto___30709)){
args30651.push((arguments[i__27463__auto___30710]));

var G__30711 = (i__27463__auto___30710 + (1));
i__27463__auto___30710 = G__30711;
continue;
} else {
}
break;
}

var G__30653 = args30651.length;
switch (G__30653) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30651.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28559__auto___30713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___30713,out){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___30713,out){
return (function (state_30685){
var state_val_30686 = (state_30685[(1)]);
if((state_val_30686 === (7))){
var inst_30664 = (state_30685[(7)]);
var inst_30665 = (state_30685[(8)]);
var inst_30664__$1 = (state_30685[(2)]);
var inst_30665__$1 = cljs.core.nth.call(null,inst_30664__$1,(0),null);
var inst_30666 = cljs.core.nth.call(null,inst_30664__$1,(1),null);
var inst_30667 = (inst_30665__$1 == null);
var state_30685__$1 = (function (){var statearr_30687 = state_30685;
(statearr_30687[(7)] = inst_30664__$1);

(statearr_30687[(9)] = inst_30666);

(statearr_30687[(8)] = inst_30665__$1);

return statearr_30687;
})();
if(cljs.core.truth_(inst_30667)){
var statearr_30688_30714 = state_30685__$1;
(statearr_30688_30714[(1)] = (8));

} else {
var statearr_30689_30715 = state_30685__$1;
(statearr_30689_30715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (1))){
var inst_30654 = cljs.core.vec.call(null,chs);
var inst_30655 = inst_30654;
var state_30685__$1 = (function (){var statearr_30690 = state_30685;
(statearr_30690[(10)] = inst_30655);

return statearr_30690;
})();
var statearr_30691_30716 = state_30685__$1;
(statearr_30691_30716[(2)] = null);

(statearr_30691_30716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (4))){
var inst_30655 = (state_30685[(10)]);
var state_30685__$1 = state_30685;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30685__$1,(7),inst_30655);
} else {
if((state_val_30686 === (6))){
var inst_30681 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
var statearr_30692_30717 = state_30685__$1;
(statearr_30692_30717[(2)] = inst_30681);

(statearr_30692_30717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (3))){
var inst_30683 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30685__$1,inst_30683);
} else {
if((state_val_30686 === (2))){
var inst_30655 = (state_30685[(10)]);
var inst_30657 = cljs.core.count.call(null,inst_30655);
var inst_30658 = (inst_30657 > (0));
var state_30685__$1 = state_30685;
if(cljs.core.truth_(inst_30658)){
var statearr_30694_30718 = state_30685__$1;
(statearr_30694_30718[(1)] = (4));

} else {
var statearr_30695_30719 = state_30685__$1;
(statearr_30695_30719[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (11))){
var inst_30655 = (state_30685[(10)]);
var inst_30674 = (state_30685[(2)]);
var tmp30693 = inst_30655;
var inst_30655__$1 = tmp30693;
var state_30685__$1 = (function (){var statearr_30696 = state_30685;
(statearr_30696[(11)] = inst_30674);

(statearr_30696[(10)] = inst_30655__$1);

return statearr_30696;
})();
var statearr_30697_30720 = state_30685__$1;
(statearr_30697_30720[(2)] = null);

(statearr_30697_30720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (9))){
var inst_30665 = (state_30685[(8)]);
var state_30685__$1 = state_30685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30685__$1,(11),out,inst_30665);
} else {
if((state_val_30686 === (5))){
var inst_30679 = cljs.core.async.close_BANG_.call(null,out);
var state_30685__$1 = state_30685;
var statearr_30698_30721 = state_30685__$1;
(statearr_30698_30721[(2)] = inst_30679);

(statearr_30698_30721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (10))){
var inst_30677 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
var statearr_30699_30722 = state_30685__$1;
(statearr_30699_30722[(2)] = inst_30677);

(statearr_30699_30722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (8))){
var inst_30664 = (state_30685[(7)]);
var inst_30666 = (state_30685[(9)]);
var inst_30665 = (state_30685[(8)]);
var inst_30655 = (state_30685[(10)]);
var inst_30669 = (function (){var cs = inst_30655;
var vec__30660 = inst_30664;
var v = inst_30665;
var c = inst_30666;
return ((function (cs,vec__30660,v,c,inst_30664,inst_30666,inst_30665,inst_30655,state_val_30686,c__28559__auto___30713,out){
return (function (p1__30650_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30650_SHARP_);
});
;})(cs,vec__30660,v,c,inst_30664,inst_30666,inst_30665,inst_30655,state_val_30686,c__28559__auto___30713,out))
})();
var inst_30670 = cljs.core.filterv.call(null,inst_30669,inst_30655);
var inst_30655__$1 = inst_30670;
var state_30685__$1 = (function (){var statearr_30700 = state_30685;
(statearr_30700[(10)] = inst_30655__$1);

return statearr_30700;
})();
var statearr_30701_30723 = state_30685__$1;
(statearr_30701_30723[(2)] = null);

(statearr_30701_30723[(1)] = (2));


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
});})(c__28559__auto___30713,out))
;
return ((function (switch__28447__auto__,c__28559__auto___30713,out){
return (function() {
var cljs$core$async$state_machine__28448__auto__ = null;
var cljs$core$async$state_machine__28448__auto____0 = (function (){
var statearr_30705 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30705[(0)] = cljs$core$async$state_machine__28448__auto__);

(statearr_30705[(1)] = (1));

return statearr_30705;
});
var cljs$core$async$state_machine__28448__auto____1 = (function (state_30685){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_30685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e30706){if((e30706 instanceof Object)){
var ex__28451__auto__ = e30706;
var statearr_30707_30724 = state_30685;
(statearr_30707_30724[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30725 = state_30685;
state_30685 = G__30725;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$state_machine__28448__auto__ = function(state_30685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28448__auto____1.call(this,state_30685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28448__auto____0;
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28448__auto____1;
return cljs$core$async$state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___30713,out))
})();
var state__28561__auto__ = (function (){var statearr_30708 = f__28560__auto__.call(null);
(statearr_30708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___30713);

return statearr_30708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___30713,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30726 = [];
var len__27462__auto___30775 = arguments.length;
var i__27463__auto___30776 = (0);
while(true){
if((i__27463__auto___30776 < len__27462__auto___30775)){
args30726.push((arguments[i__27463__auto___30776]));

var G__30777 = (i__27463__auto___30776 + (1));
i__27463__auto___30776 = G__30777;
continue;
} else {
}
break;
}

var G__30728 = args30726.length;
switch (G__30728) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30726.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28559__auto___30779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___30779,out){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___30779,out){
return (function (state_30752){
var state_val_30753 = (state_30752[(1)]);
if((state_val_30753 === (7))){
var inst_30734 = (state_30752[(7)]);
var inst_30734__$1 = (state_30752[(2)]);
var inst_30735 = (inst_30734__$1 == null);
var inst_30736 = cljs.core.not.call(null,inst_30735);
var state_30752__$1 = (function (){var statearr_30754 = state_30752;
(statearr_30754[(7)] = inst_30734__$1);

return statearr_30754;
})();
if(inst_30736){
var statearr_30755_30780 = state_30752__$1;
(statearr_30755_30780[(1)] = (8));

} else {
var statearr_30756_30781 = state_30752__$1;
(statearr_30756_30781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (1))){
var inst_30729 = (0);
var state_30752__$1 = (function (){var statearr_30757 = state_30752;
(statearr_30757[(8)] = inst_30729);

return statearr_30757;
})();
var statearr_30758_30782 = state_30752__$1;
(statearr_30758_30782[(2)] = null);

(statearr_30758_30782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (4))){
var state_30752__$1 = state_30752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30752__$1,(7),ch);
} else {
if((state_val_30753 === (6))){
var inst_30747 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30759_30783 = state_30752__$1;
(statearr_30759_30783[(2)] = inst_30747);

(statearr_30759_30783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (3))){
var inst_30749 = (state_30752[(2)]);
var inst_30750 = cljs.core.async.close_BANG_.call(null,out);
var state_30752__$1 = (function (){var statearr_30760 = state_30752;
(statearr_30760[(9)] = inst_30749);

return statearr_30760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30752__$1,inst_30750);
} else {
if((state_val_30753 === (2))){
var inst_30729 = (state_30752[(8)]);
var inst_30731 = (inst_30729 < n);
var state_30752__$1 = state_30752;
if(cljs.core.truth_(inst_30731)){
var statearr_30761_30784 = state_30752__$1;
(statearr_30761_30784[(1)] = (4));

} else {
var statearr_30762_30785 = state_30752__$1;
(statearr_30762_30785[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (11))){
var inst_30729 = (state_30752[(8)]);
var inst_30739 = (state_30752[(2)]);
var inst_30740 = (inst_30729 + (1));
var inst_30729__$1 = inst_30740;
var state_30752__$1 = (function (){var statearr_30763 = state_30752;
(statearr_30763[(8)] = inst_30729__$1);

(statearr_30763[(10)] = inst_30739);

return statearr_30763;
})();
var statearr_30764_30786 = state_30752__$1;
(statearr_30764_30786[(2)] = null);

(statearr_30764_30786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (9))){
var state_30752__$1 = state_30752;
var statearr_30765_30787 = state_30752__$1;
(statearr_30765_30787[(2)] = null);

(statearr_30765_30787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (5))){
var state_30752__$1 = state_30752;
var statearr_30766_30788 = state_30752__$1;
(statearr_30766_30788[(2)] = null);

(statearr_30766_30788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (10))){
var inst_30744 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30767_30789 = state_30752__$1;
(statearr_30767_30789[(2)] = inst_30744);

(statearr_30767_30789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (8))){
var inst_30734 = (state_30752[(7)]);
var state_30752__$1 = state_30752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30752__$1,(11),out,inst_30734);
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
});})(c__28559__auto___30779,out))
;
return ((function (switch__28447__auto__,c__28559__auto___30779,out){
return (function() {
var cljs$core$async$state_machine__28448__auto__ = null;
var cljs$core$async$state_machine__28448__auto____0 = (function (){
var statearr_30771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30771[(0)] = cljs$core$async$state_machine__28448__auto__);

(statearr_30771[(1)] = (1));

return statearr_30771;
});
var cljs$core$async$state_machine__28448__auto____1 = (function (state_30752){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_30752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e30772){if((e30772 instanceof Object)){
var ex__28451__auto__ = e30772;
var statearr_30773_30790 = state_30752;
(statearr_30773_30790[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30791 = state_30752;
state_30752 = G__30791;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$state_machine__28448__auto__ = function(state_30752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28448__auto____1.call(this,state_30752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28448__auto____0;
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28448__auto____1;
return cljs$core$async$state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___30779,out))
})();
var state__28561__auto__ = (function (){var statearr_30774 = f__28560__auto__.call(null);
(statearr_30774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___30779);

return statearr_30774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___30779,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30799 = (function (f,ch,meta30800){
this.f = f;
this.ch = ch;
this.meta30800 = meta30800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30801,meta30800__$1){
var self__ = this;
var _30801__$1 = this;
return (new cljs.core.async.t_cljs$core$async30799(self__.f,self__.ch,meta30800__$1));
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30801){
var self__ = this;
var _30801__$1 = this;
return self__.meta30800;
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30802 = (function (f,ch,meta30800,_,fn1,meta30803){
this.f = f;
this.ch = ch;
this.meta30800 = meta30800;
this._ = _;
this.fn1 = fn1;
this.meta30803 = meta30803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30804,meta30803__$1){
var self__ = this;
var _30804__$1 = this;
return (new cljs.core.async.t_cljs$core$async30802(self__.f,self__.ch,self__.meta30800,self__._,self__.fn1,meta30803__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30804){
var self__ = this;
var _30804__$1 = this;
return self__.meta30803;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30792_SHARP_){
return f1.call(null,(((p1__30792_SHARP_ == null))?null:self__.f.call(null,p1__30792_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30802.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30800","meta30800",1897670116,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30799","cljs.core.async/t_cljs$core$async30799",1481101351,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30803","meta30803",-594904097,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30802";

cljs.core.async.t_cljs$core$async30802.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26960__auto__,writer__26961__auto__,opt__26962__auto__){
return cljs.core._write.call(null,writer__26961__auto__,"cljs.core.async/t_cljs$core$async30802");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30802 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30802(f__$1,ch__$1,meta30800__$1,___$2,fn1__$1,meta30803){
return (new cljs.core.async.t_cljs$core$async30802(f__$1,ch__$1,meta30800__$1,___$2,fn1__$1,meta30803));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30802(self__.f,self__.ch,self__.meta30800,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26337__auto__ = ret;
if(cljs.core.truth_(and__26337__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26337__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30800","meta30800",1897670116,null)], null);
});

cljs.core.async.t_cljs$core$async30799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30799";

cljs.core.async.t_cljs$core$async30799.cljs$lang$ctorPrWriter = (function (this__26960__auto__,writer__26961__auto__,opt__26962__auto__){
return cljs.core._write.call(null,writer__26961__auto__,"cljs.core.async/t_cljs$core$async30799");
});

cljs.core.async.__GT_t_cljs$core$async30799 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30799(f__$1,ch__$1,meta30800){
return (new cljs.core.async.t_cljs$core$async30799(f__$1,ch__$1,meta30800));
});

}

return (new cljs.core.async.t_cljs$core$async30799(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30808 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30808 = (function (f,ch,meta30809){
this.f = f;
this.ch = ch;
this.meta30809 = meta30809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30810,meta30809__$1){
var self__ = this;
var _30810__$1 = this;
return (new cljs.core.async.t_cljs$core$async30808(self__.f,self__.ch,meta30809__$1));
});

cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30810){
var self__ = this;
var _30810__$1 = this;
return self__.meta30809;
});

cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30809","meta30809",1884724072,null)], null);
});

cljs.core.async.t_cljs$core$async30808.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30808";

cljs.core.async.t_cljs$core$async30808.cljs$lang$ctorPrWriter = (function (this__26960__auto__,writer__26961__auto__,opt__26962__auto__){
return cljs.core._write.call(null,writer__26961__auto__,"cljs.core.async/t_cljs$core$async30808");
});

cljs.core.async.__GT_t_cljs$core$async30808 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30808(f__$1,ch__$1,meta30809){
return (new cljs.core.async.t_cljs$core$async30808(f__$1,ch__$1,meta30809));
});

}

return (new cljs.core.async.t_cljs$core$async30808(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30814 = (function (p,ch,meta30815){
this.p = p;
this.ch = ch;
this.meta30815 = meta30815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30816,meta30815__$1){
var self__ = this;
var _30816__$1 = this;
return (new cljs.core.async.t_cljs$core$async30814(self__.p,self__.ch,meta30815__$1));
});

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30816){
var self__ = this;
var _30816__$1 = this;
return self__.meta30815;
});

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30815","meta30815",-1002893388,null)], null);
});

cljs.core.async.t_cljs$core$async30814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30814";

cljs.core.async.t_cljs$core$async30814.cljs$lang$ctorPrWriter = (function (this__26960__auto__,writer__26961__auto__,opt__26962__auto__){
return cljs.core._write.call(null,writer__26961__auto__,"cljs.core.async/t_cljs$core$async30814");
});

cljs.core.async.__GT_t_cljs$core$async30814 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30814(p__$1,ch__$1,meta30815){
return (new cljs.core.async.t_cljs$core$async30814(p__$1,ch__$1,meta30815));
});

}

return (new cljs.core.async.t_cljs$core$async30814(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30817 = [];
var len__27462__auto___30861 = arguments.length;
var i__27463__auto___30862 = (0);
while(true){
if((i__27463__auto___30862 < len__27462__auto___30861)){
args30817.push((arguments[i__27463__auto___30862]));

var G__30863 = (i__27463__auto___30862 + (1));
i__27463__auto___30862 = G__30863;
continue;
} else {
}
break;
}

var G__30819 = args30817.length;
switch (G__30819) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30817.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28559__auto___30865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___30865,out){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___30865,out){
return (function (state_30840){
var state_val_30841 = (state_30840[(1)]);
if((state_val_30841 === (7))){
var inst_30836 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30842_30866 = state_30840__$1;
(statearr_30842_30866[(2)] = inst_30836);

(statearr_30842_30866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (1))){
var state_30840__$1 = state_30840;
var statearr_30843_30867 = state_30840__$1;
(statearr_30843_30867[(2)] = null);

(statearr_30843_30867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (4))){
var inst_30822 = (state_30840[(7)]);
var inst_30822__$1 = (state_30840[(2)]);
var inst_30823 = (inst_30822__$1 == null);
var state_30840__$1 = (function (){var statearr_30844 = state_30840;
(statearr_30844[(7)] = inst_30822__$1);

return statearr_30844;
})();
if(cljs.core.truth_(inst_30823)){
var statearr_30845_30868 = state_30840__$1;
(statearr_30845_30868[(1)] = (5));

} else {
var statearr_30846_30869 = state_30840__$1;
(statearr_30846_30869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (6))){
var inst_30822 = (state_30840[(7)]);
var inst_30827 = p.call(null,inst_30822);
var state_30840__$1 = state_30840;
if(cljs.core.truth_(inst_30827)){
var statearr_30847_30870 = state_30840__$1;
(statearr_30847_30870[(1)] = (8));

} else {
var statearr_30848_30871 = state_30840__$1;
(statearr_30848_30871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (3))){
var inst_30838 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30840__$1,inst_30838);
} else {
if((state_val_30841 === (2))){
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30840__$1,(4),ch);
} else {
if((state_val_30841 === (11))){
var inst_30830 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30849_30872 = state_30840__$1;
(statearr_30849_30872[(2)] = inst_30830);

(statearr_30849_30872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (9))){
var state_30840__$1 = state_30840;
var statearr_30850_30873 = state_30840__$1;
(statearr_30850_30873[(2)] = null);

(statearr_30850_30873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (5))){
var inst_30825 = cljs.core.async.close_BANG_.call(null,out);
var state_30840__$1 = state_30840;
var statearr_30851_30874 = state_30840__$1;
(statearr_30851_30874[(2)] = inst_30825);

(statearr_30851_30874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (10))){
var inst_30833 = (state_30840[(2)]);
var state_30840__$1 = (function (){var statearr_30852 = state_30840;
(statearr_30852[(8)] = inst_30833);

return statearr_30852;
})();
var statearr_30853_30875 = state_30840__$1;
(statearr_30853_30875[(2)] = null);

(statearr_30853_30875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (8))){
var inst_30822 = (state_30840[(7)]);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30840__$1,(11),out,inst_30822);
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
});})(c__28559__auto___30865,out))
;
return ((function (switch__28447__auto__,c__28559__auto___30865,out){
return (function() {
var cljs$core$async$state_machine__28448__auto__ = null;
var cljs$core$async$state_machine__28448__auto____0 = (function (){
var statearr_30857 = [null,null,null,null,null,null,null,null,null];
(statearr_30857[(0)] = cljs$core$async$state_machine__28448__auto__);

(statearr_30857[(1)] = (1));

return statearr_30857;
});
var cljs$core$async$state_machine__28448__auto____1 = (function (state_30840){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_30840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e30858){if((e30858 instanceof Object)){
var ex__28451__auto__ = e30858;
var statearr_30859_30876 = state_30840;
(statearr_30859_30876[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30877 = state_30840;
state_30840 = G__30877;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$state_machine__28448__auto__ = function(state_30840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28448__auto____1.call(this,state_30840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28448__auto____0;
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28448__auto____1;
return cljs$core$async$state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___30865,out))
})();
var state__28561__auto__ = (function (){var statearr_30860 = f__28560__auto__.call(null);
(statearr_30860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___30865);

return statearr_30860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___30865,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30878 = [];
var len__27462__auto___30881 = arguments.length;
var i__27463__auto___30882 = (0);
while(true){
if((i__27463__auto___30882 < len__27462__auto___30881)){
args30878.push((arguments[i__27463__auto___30882]));

var G__30883 = (i__27463__auto___30882 + (1));
i__27463__auto___30882 = G__30883;
continue;
} else {
}
break;
}

var G__30880 = args30878.length;
switch (G__30880) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30878.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto__){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto__){
return (function (state_31050){
var state_val_31051 = (state_31050[(1)]);
if((state_val_31051 === (7))){
var inst_31046 = (state_31050[(2)]);
var state_31050__$1 = state_31050;
var statearr_31052_31093 = state_31050__$1;
(statearr_31052_31093[(2)] = inst_31046);

(statearr_31052_31093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (20))){
var inst_31016 = (state_31050[(7)]);
var inst_31027 = (state_31050[(2)]);
var inst_31028 = cljs.core.next.call(null,inst_31016);
var inst_31002 = inst_31028;
var inst_31003 = null;
var inst_31004 = (0);
var inst_31005 = (0);
var state_31050__$1 = (function (){var statearr_31053 = state_31050;
(statearr_31053[(8)] = inst_31004);

(statearr_31053[(9)] = inst_31002);

(statearr_31053[(10)] = inst_31005);

(statearr_31053[(11)] = inst_31027);

(statearr_31053[(12)] = inst_31003);

return statearr_31053;
})();
var statearr_31054_31094 = state_31050__$1;
(statearr_31054_31094[(2)] = null);

(statearr_31054_31094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (1))){
var state_31050__$1 = state_31050;
var statearr_31055_31095 = state_31050__$1;
(statearr_31055_31095[(2)] = null);

(statearr_31055_31095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (4))){
var inst_30991 = (state_31050[(13)]);
var inst_30991__$1 = (state_31050[(2)]);
var inst_30992 = (inst_30991__$1 == null);
var state_31050__$1 = (function (){var statearr_31056 = state_31050;
(statearr_31056[(13)] = inst_30991__$1);

return statearr_31056;
})();
if(cljs.core.truth_(inst_30992)){
var statearr_31057_31096 = state_31050__$1;
(statearr_31057_31096[(1)] = (5));

} else {
var statearr_31058_31097 = state_31050__$1;
(statearr_31058_31097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (15))){
var state_31050__$1 = state_31050;
var statearr_31062_31098 = state_31050__$1;
(statearr_31062_31098[(2)] = null);

(statearr_31062_31098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (21))){
var state_31050__$1 = state_31050;
var statearr_31063_31099 = state_31050__$1;
(statearr_31063_31099[(2)] = null);

(statearr_31063_31099[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (13))){
var inst_31004 = (state_31050[(8)]);
var inst_31002 = (state_31050[(9)]);
var inst_31005 = (state_31050[(10)]);
var inst_31003 = (state_31050[(12)]);
var inst_31012 = (state_31050[(2)]);
var inst_31013 = (inst_31005 + (1));
var tmp31059 = inst_31004;
var tmp31060 = inst_31002;
var tmp31061 = inst_31003;
var inst_31002__$1 = tmp31060;
var inst_31003__$1 = tmp31061;
var inst_31004__$1 = tmp31059;
var inst_31005__$1 = inst_31013;
var state_31050__$1 = (function (){var statearr_31064 = state_31050;
(statearr_31064[(8)] = inst_31004__$1);

(statearr_31064[(9)] = inst_31002__$1);

(statearr_31064[(10)] = inst_31005__$1);

(statearr_31064[(14)] = inst_31012);

(statearr_31064[(12)] = inst_31003__$1);

return statearr_31064;
})();
var statearr_31065_31100 = state_31050__$1;
(statearr_31065_31100[(2)] = null);

(statearr_31065_31100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (22))){
var state_31050__$1 = state_31050;
var statearr_31066_31101 = state_31050__$1;
(statearr_31066_31101[(2)] = null);

(statearr_31066_31101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (6))){
var inst_30991 = (state_31050[(13)]);
var inst_31000 = f.call(null,inst_30991);
var inst_31001 = cljs.core.seq.call(null,inst_31000);
var inst_31002 = inst_31001;
var inst_31003 = null;
var inst_31004 = (0);
var inst_31005 = (0);
var state_31050__$1 = (function (){var statearr_31067 = state_31050;
(statearr_31067[(8)] = inst_31004);

(statearr_31067[(9)] = inst_31002);

(statearr_31067[(10)] = inst_31005);

(statearr_31067[(12)] = inst_31003);

return statearr_31067;
})();
var statearr_31068_31102 = state_31050__$1;
(statearr_31068_31102[(2)] = null);

(statearr_31068_31102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (17))){
var inst_31016 = (state_31050[(7)]);
var inst_31020 = cljs.core.chunk_first.call(null,inst_31016);
var inst_31021 = cljs.core.chunk_rest.call(null,inst_31016);
var inst_31022 = cljs.core.count.call(null,inst_31020);
var inst_31002 = inst_31021;
var inst_31003 = inst_31020;
var inst_31004 = inst_31022;
var inst_31005 = (0);
var state_31050__$1 = (function (){var statearr_31069 = state_31050;
(statearr_31069[(8)] = inst_31004);

(statearr_31069[(9)] = inst_31002);

(statearr_31069[(10)] = inst_31005);

(statearr_31069[(12)] = inst_31003);

return statearr_31069;
})();
var statearr_31070_31103 = state_31050__$1;
(statearr_31070_31103[(2)] = null);

(statearr_31070_31103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (3))){
var inst_31048 = (state_31050[(2)]);
var state_31050__$1 = state_31050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31050__$1,inst_31048);
} else {
if((state_val_31051 === (12))){
var inst_31036 = (state_31050[(2)]);
var state_31050__$1 = state_31050;
var statearr_31071_31104 = state_31050__$1;
(statearr_31071_31104[(2)] = inst_31036);

(statearr_31071_31104[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (2))){
var state_31050__$1 = state_31050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31050__$1,(4),in$);
} else {
if((state_val_31051 === (23))){
var inst_31044 = (state_31050[(2)]);
var state_31050__$1 = state_31050;
var statearr_31072_31105 = state_31050__$1;
(statearr_31072_31105[(2)] = inst_31044);

(statearr_31072_31105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (19))){
var inst_31031 = (state_31050[(2)]);
var state_31050__$1 = state_31050;
var statearr_31073_31106 = state_31050__$1;
(statearr_31073_31106[(2)] = inst_31031);

(statearr_31073_31106[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (11))){
var inst_31002 = (state_31050[(9)]);
var inst_31016 = (state_31050[(7)]);
var inst_31016__$1 = cljs.core.seq.call(null,inst_31002);
var state_31050__$1 = (function (){var statearr_31074 = state_31050;
(statearr_31074[(7)] = inst_31016__$1);

return statearr_31074;
})();
if(inst_31016__$1){
var statearr_31075_31107 = state_31050__$1;
(statearr_31075_31107[(1)] = (14));

} else {
var statearr_31076_31108 = state_31050__$1;
(statearr_31076_31108[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (9))){
var inst_31038 = (state_31050[(2)]);
var inst_31039 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31050__$1 = (function (){var statearr_31077 = state_31050;
(statearr_31077[(15)] = inst_31038);

return statearr_31077;
})();
if(cljs.core.truth_(inst_31039)){
var statearr_31078_31109 = state_31050__$1;
(statearr_31078_31109[(1)] = (21));

} else {
var statearr_31079_31110 = state_31050__$1;
(statearr_31079_31110[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (5))){
var inst_30994 = cljs.core.async.close_BANG_.call(null,out);
var state_31050__$1 = state_31050;
var statearr_31080_31111 = state_31050__$1;
(statearr_31080_31111[(2)] = inst_30994);

(statearr_31080_31111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (14))){
var inst_31016 = (state_31050[(7)]);
var inst_31018 = cljs.core.chunked_seq_QMARK_.call(null,inst_31016);
var state_31050__$1 = state_31050;
if(inst_31018){
var statearr_31081_31112 = state_31050__$1;
(statearr_31081_31112[(1)] = (17));

} else {
var statearr_31082_31113 = state_31050__$1;
(statearr_31082_31113[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (16))){
var inst_31034 = (state_31050[(2)]);
var state_31050__$1 = state_31050;
var statearr_31083_31114 = state_31050__$1;
(statearr_31083_31114[(2)] = inst_31034);

(statearr_31083_31114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31051 === (10))){
var inst_31005 = (state_31050[(10)]);
var inst_31003 = (state_31050[(12)]);
var inst_31010 = cljs.core._nth.call(null,inst_31003,inst_31005);
var state_31050__$1 = state_31050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31050__$1,(13),out,inst_31010);
} else {
if((state_val_31051 === (18))){
var inst_31016 = (state_31050[(7)]);
var inst_31025 = cljs.core.first.call(null,inst_31016);
var state_31050__$1 = state_31050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31050__$1,(20),out,inst_31025);
} else {
if((state_val_31051 === (8))){
var inst_31004 = (state_31050[(8)]);
var inst_31005 = (state_31050[(10)]);
var inst_31007 = (inst_31005 < inst_31004);
var inst_31008 = inst_31007;
var state_31050__$1 = state_31050;
if(cljs.core.truth_(inst_31008)){
var statearr_31084_31115 = state_31050__$1;
(statearr_31084_31115[(1)] = (10));

} else {
var statearr_31085_31116 = state_31050__$1;
(statearr_31085_31116[(1)] = (11));

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
});})(c__28559__auto__))
;
return ((function (switch__28447__auto__,c__28559__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28448__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28448__auto____0 = (function (){
var statearr_31089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31089[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28448__auto__);

(statearr_31089[(1)] = (1));

return statearr_31089;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28448__auto____1 = (function (state_31050){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_31050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e31090){if((e31090 instanceof Object)){
var ex__28451__auto__ = e31090;
var statearr_31091_31117 = state_31050;
(statearr_31091_31117[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31118 = state_31050;
state_31050 = G__31118;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28448__auto__ = function(state_31050){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28448__auto____1.call(this,state_31050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28448__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28448__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto__))
})();
var state__28561__auto__ = (function (){var statearr_31092 = f__28560__auto__.call(null);
(statearr_31092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto__);

return statearr_31092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto__))
);

return c__28559__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31119 = [];
var len__27462__auto___31122 = arguments.length;
var i__27463__auto___31123 = (0);
while(true){
if((i__27463__auto___31123 < len__27462__auto___31122)){
args31119.push((arguments[i__27463__auto___31123]));

var G__31124 = (i__27463__auto___31123 + (1));
i__27463__auto___31123 = G__31124;
continue;
} else {
}
break;
}

var G__31121 = args31119.length;
switch (G__31121) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31119.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31126 = [];
var len__27462__auto___31129 = arguments.length;
var i__27463__auto___31130 = (0);
while(true){
if((i__27463__auto___31130 < len__27462__auto___31129)){
args31126.push((arguments[i__27463__auto___31130]));

var G__31131 = (i__27463__auto___31130 + (1));
i__27463__auto___31130 = G__31131;
continue;
} else {
}
break;
}

var G__31128 = args31126.length;
switch (G__31128) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31126.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31133 = [];
var len__27462__auto___31184 = arguments.length;
var i__27463__auto___31185 = (0);
while(true){
if((i__27463__auto___31185 < len__27462__auto___31184)){
args31133.push((arguments[i__27463__auto___31185]));

var G__31186 = (i__27463__auto___31185 + (1));
i__27463__auto___31185 = G__31186;
continue;
} else {
}
break;
}

var G__31135 = args31133.length;
switch (G__31135) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31133.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28559__auto___31188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___31188,out){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___31188,out){
return (function (state_31159){
var state_val_31160 = (state_31159[(1)]);
if((state_val_31160 === (7))){
var inst_31154 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
var statearr_31161_31189 = state_31159__$1;
(statearr_31161_31189[(2)] = inst_31154);

(statearr_31161_31189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (1))){
var inst_31136 = null;
var state_31159__$1 = (function (){var statearr_31162 = state_31159;
(statearr_31162[(7)] = inst_31136);

return statearr_31162;
})();
var statearr_31163_31190 = state_31159__$1;
(statearr_31163_31190[(2)] = null);

(statearr_31163_31190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (4))){
var inst_31139 = (state_31159[(8)]);
var inst_31139__$1 = (state_31159[(2)]);
var inst_31140 = (inst_31139__$1 == null);
var inst_31141 = cljs.core.not.call(null,inst_31140);
var state_31159__$1 = (function (){var statearr_31164 = state_31159;
(statearr_31164[(8)] = inst_31139__$1);

return statearr_31164;
})();
if(inst_31141){
var statearr_31165_31191 = state_31159__$1;
(statearr_31165_31191[(1)] = (5));

} else {
var statearr_31166_31192 = state_31159__$1;
(statearr_31166_31192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (6))){
var state_31159__$1 = state_31159;
var statearr_31167_31193 = state_31159__$1;
(statearr_31167_31193[(2)] = null);

(statearr_31167_31193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (3))){
var inst_31156 = (state_31159[(2)]);
var inst_31157 = cljs.core.async.close_BANG_.call(null,out);
var state_31159__$1 = (function (){var statearr_31168 = state_31159;
(statearr_31168[(9)] = inst_31156);

return statearr_31168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31159__$1,inst_31157);
} else {
if((state_val_31160 === (2))){
var state_31159__$1 = state_31159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31159__$1,(4),ch);
} else {
if((state_val_31160 === (11))){
var inst_31139 = (state_31159[(8)]);
var inst_31148 = (state_31159[(2)]);
var inst_31136 = inst_31139;
var state_31159__$1 = (function (){var statearr_31169 = state_31159;
(statearr_31169[(7)] = inst_31136);

(statearr_31169[(10)] = inst_31148);

return statearr_31169;
})();
var statearr_31170_31194 = state_31159__$1;
(statearr_31170_31194[(2)] = null);

(statearr_31170_31194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (9))){
var inst_31139 = (state_31159[(8)]);
var state_31159__$1 = state_31159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31159__$1,(11),out,inst_31139);
} else {
if((state_val_31160 === (5))){
var inst_31139 = (state_31159[(8)]);
var inst_31136 = (state_31159[(7)]);
var inst_31143 = cljs.core._EQ_.call(null,inst_31139,inst_31136);
var state_31159__$1 = state_31159;
if(inst_31143){
var statearr_31172_31195 = state_31159__$1;
(statearr_31172_31195[(1)] = (8));

} else {
var statearr_31173_31196 = state_31159__$1;
(statearr_31173_31196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (10))){
var inst_31151 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
var statearr_31174_31197 = state_31159__$1;
(statearr_31174_31197[(2)] = inst_31151);

(statearr_31174_31197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (8))){
var inst_31136 = (state_31159[(7)]);
var tmp31171 = inst_31136;
var inst_31136__$1 = tmp31171;
var state_31159__$1 = (function (){var statearr_31175 = state_31159;
(statearr_31175[(7)] = inst_31136__$1);

return statearr_31175;
})();
var statearr_31176_31198 = state_31159__$1;
(statearr_31176_31198[(2)] = null);

(statearr_31176_31198[(1)] = (2));


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
});})(c__28559__auto___31188,out))
;
return ((function (switch__28447__auto__,c__28559__auto___31188,out){
return (function() {
var cljs$core$async$state_machine__28448__auto__ = null;
var cljs$core$async$state_machine__28448__auto____0 = (function (){
var statearr_31180 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31180[(0)] = cljs$core$async$state_machine__28448__auto__);

(statearr_31180[(1)] = (1));

return statearr_31180;
});
var cljs$core$async$state_machine__28448__auto____1 = (function (state_31159){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_31159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e31181){if((e31181 instanceof Object)){
var ex__28451__auto__ = e31181;
var statearr_31182_31199 = state_31159;
(statearr_31182_31199[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31200 = state_31159;
state_31159 = G__31200;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$state_machine__28448__auto__ = function(state_31159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28448__auto____1.call(this,state_31159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28448__auto____0;
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28448__auto____1;
return cljs$core$async$state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___31188,out))
})();
var state__28561__auto__ = (function (){var statearr_31183 = f__28560__auto__.call(null);
(statearr_31183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___31188);

return statearr_31183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___31188,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31201 = [];
var len__27462__auto___31271 = arguments.length;
var i__27463__auto___31272 = (0);
while(true){
if((i__27463__auto___31272 < len__27462__auto___31271)){
args31201.push((arguments[i__27463__auto___31272]));

var G__31273 = (i__27463__auto___31272 + (1));
i__27463__auto___31272 = G__31273;
continue;
} else {
}
break;
}

var G__31203 = args31201.length;
switch (G__31203) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31201.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28559__auto___31275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___31275,out){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___31275,out){
return (function (state_31241){
var state_val_31242 = (state_31241[(1)]);
if((state_val_31242 === (7))){
var inst_31237 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31243_31276 = state_31241__$1;
(statearr_31243_31276[(2)] = inst_31237);

(statearr_31243_31276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (1))){
var inst_31204 = (new Array(n));
var inst_31205 = inst_31204;
var inst_31206 = (0);
var state_31241__$1 = (function (){var statearr_31244 = state_31241;
(statearr_31244[(7)] = inst_31206);

(statearr_31244[(8)] = inst_31205);

return statearr_31244;
})();
var statearr_31245_31277 = state_31241__$1;
(statearr_31245_31277[(2)] = null);

(statearr_31245_31277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (4))){
var inst_31209 = (state_31241[(9)]);
var inst_31209__$1 = (state_31241[(2)]);
var inst_31210 = (inst_31209__$1 == null);
var inst_31211 = cljs.core.not.call(null,inst_31210);
var state_31241__$1 = (function (){var statearr_31246 = state_31241;
(statearr_31246[(9)] = inst_31209__$1);

return statearr_31246;
})();
if(inst_31211){
var statearr_31247_31278 = state_31241__$1;
(statearr_31247_31278[(1)] = (5));

} else {
var statearr_31248_31279 = state_31241__$1;
(statearr_31248_31279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (15))){
var inst_31231 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31249_31280 = state_31241__$1;
(statearr_31249_31280[(2)] = inst_31231);

(statearr_31249_31280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (13))){
var state_31241__$1 = state_31241;
var statearr_31250_31281 = state_31241__$1;
(statearr_31250_31281[(2)] = null);

(statearr_31250_31281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (6))){
var inst_31206 = (state_31241[(7)]);
var inst_31227 = (inst_31206 > (0));
var state_31241__$1 = state_31241;
if(cljs.core.truth_(inst_31227)){
var statearr_31251_31282 = state_31241__$1;
(statearr_31251_31282[(1)] = (12));

} else {
var statearr_31252_31283 = state_31241__$1;
(statearr_31252_31283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (3))){
var inst_31239 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31241__$1,inst_31239);
} else {
if((state_val_31242 === (12))){
var inst_31205 = (state_31241[(8)]);
var inst_31229 = cljs.core.vec.call(null,inst_31205);
var state_31241__$1 = state_31241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31241__$1,(15),out,inst_31229);
} else {
if((state_val_31242 === (2))){
var state_31241__$1 = state_31241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31241__$1,(4),ch);
} else {
if((state_val_31242 === (11))){
var inst_31221 = (state_31241[(2)]);
var inst_31222 = (new Array(n));
var inst_31205 = inst_31222;
var inst_31206 = (0);
var state_31241__$1 = (function (){var statearr_31253 = state_31241;
(statearr_31253[(10)] = inst_31221);

(statearr_31253[(7)] = inst_31206);

(statearr_31253[(8)] = inst_31205);

return statearr_31253;
})();
var statearr_31254_31284 = state_31241__$1;
(statearr_31254_31284[(2)] = null);

(statearr_31254_31284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (9))){
var inst_31205 = (state_31241[(8)]);
var inst_31219 = cljs.core.vec.call(null,inst_31205);
var state_31241__$1 = state_31241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31241__$1,(11),out,inst_31219);
} else {
if((state_val_31242 === (5))){
var inst_31214 = (state_31241[(11)]);
var inst_31206 = (state_31241[(7)]);
var inst_31209 = (state_31241[(9)]);
var inst_31205 = (state_31241[(8)]);
var inst_31213 = (inst_31205[inst_31206] = inst_31209);
var inst_31214__$1 = (inst_31206 + (1));
var inst_31215 = (inst_31214__$1 < n);
var state_31241__$1 = (function (){var statearr_31255 = state_31241;
(statearr_31255[(12)] = inst_31213);

(statearr_31255[(11)] = inst_31214__$1);

return statearr_31255;
})();
if(cljs.core.truth_(inst_31215)){
var statearr_31256_31285 = state_31241__$1;
(statearr_31256_31285[(1)] = (8));

} else {
var statearr_31257_31286 = state_31241__$1;
(statearr_31257_31286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (14))){
var inst_31234 = (state_31241[(2)]);
var inst_31235 = cljs.core.async.close_BANG_.call(null,out);
var state_31241__$1 = (function (){var statearr_31259 = state_31241;
(statearr_31259[(13)] = inst_31234);

return statearr_31259;
})();
var statearr_31260_31287 = state_31241__$1;
(statearr_31260_31287[(2)] = inst_31235);

(statearr_31260_31287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (10))){
var inst_31225 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31261_31288 = state_31241__$1;
(statearr_31261_31288[(2)] = inst_31225);

(statearr_31261_31288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (8))){
var inst_31214 = (state_31241[(11)]);
var inst_31205 = (state_31241[(8)]);
var tmp31258 = inst_31205;
var inst_31205__$1 = tmp31258;
var inst_31206 = inst_31214;
var state_31241__$1 = (function (){var statearr_31262 = state_31241;
(statearr_31262[(7)] = inst_31206);

(statearr_31262[(8)] = inst_31205__$1);

return statearr_31262;
})();
var statearr_31263_31289 = state_31241__$1;
(statearr_31263_31289[(2)] = null);

(statearr_31263_31289[(1)] = (2));


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
});})(c__28559__auto___31275,out))
;
return ((function (switch__28447__auto__,c__28559__auto___31275,out){
return (function() {
var cljs$core$async$state_machine__28448__auto__ = null;
var cljs$core$async$state_machine__28448__auto____0 = (function (){
var statearr_31267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31267[(0)] = cljs$core$async$state_machine__28448__auto__);

(statearr_31267[(1)] = (1));

return statearr_31267;
});
var cljs$core$async$state_machine__28448__auto____1 = (function (state_31241){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_31241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e31268){if((e31268 instanceof Object)){
var ex__28451__auto__ = e31268;
var statearr_31269_31290 = state_31241;
(statearr_31269_31290[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31291 = state_31241;
state_31241 = G__31291;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$state_machine__28448__auto__ = function(state_31241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28448__auto____1.call(this,state_31241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28448__auto____0;
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28448__auto____1;
return cljs$core$async$state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___31275,out))
})();
var state__28561__auto__ = (function (){var statearr_31270 = f__28560__auto__.call(null);
(statearr_31270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___31275);

return statearr_31270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___31275,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31292 = [];
var len__27462__auto___31366 = arguments.length;
var i__27463__auto___31367 = (0);
while(true){
if((i__27463__auto___31367 < len__27462__auto___31366)){
args31292.push((arguments[i__27463__auto___31367]));

var G__31368 = (i__27463__auto___31367 + (1));
i__27463__auto___31367 = G__31368;
continue;
} else {
}
break;
}

var G__31294 = args31292.length;
switch (G__31294) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31292.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28559__auto___31370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28559__auto___31370,out){
return (function (){
var f__28560__auto__ = (function (){var switch__28447__auto__ = ((function (c__28559__auto___31370,out){
return (function (state_31336){
var state_val_31337 = (state_31336[(1)]);
if((state_val_31337 === (7))){
var inst_31332 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31338_31371 = state_31336__$1;
(statearr_31338_31371[(2)] = inst_31332);

(statearr_31338_31371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (1))){
var inst_31295 = [];
var inst_31296 = inst_31295;
var inst_31297 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31336__$1 = (function (){var statearr_31339 = state_31336;
(statearr_31339[(7)] = inst_31296);

(statearr_31339[(8)] = inst_31297);

return statearr_31339;
})();
var statearr_31340_31372 = state_31336__$1;
(statearr_31340_31372[(2)] = null);

(statearr_31340_31372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (4))){
var inst_31300 = (state_31336[(9)]);
var inst_31300__$1 = (state_31336[(2)]);
var inst_31301 = (inst_31300__$1 == null);
var inst_31302 = cljs.core.not.call(null,inst_31301);
var state_31336__$1 = (function (){var statearr_31341 = state_31336;
(statearr_31341[(9)] = inst_31300__$1);

return statearr_31341;
})();
if(inst_31302){
var statearr_31342_31373 = state_31336__$1;
(statearr_31342_31373[(1)] = (5));

} else {
var statearr_31343_31374 = state_31336__$1;
(statearr_31343_31374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (15))){
var inst_31326 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31344_31375 = state_31336__$1;
(statearr_31344_31375[(2)] = inst_31326);

(statearr_31344_31375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (13))){
var state_31336__$1 = state_31336;
var statearr_31345_31376 = state_31336__$1;
(statearr_31345_31376[(2)] = null);

(statearr_31345_31376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (6))){
var inst_31296 = (state_31336[(7)]);
var inst_31321 = inst_31296.length;
var inst_31322 = (inst_31321 > (0));
var state_31336__$1 = state_31336;
if(cljs.core.truth_(inst_31322)){
var statearr_31346_31377 = state_31336__$1;
(statearr_31346_31377[(1)] = (12));

} else {
var statearr_31347_31378 = state_31336__$1;
(statearr_31347_31378[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (3))){
var inst_31334 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31336__$1,inst_31334);
} else {
if((state_val_31337 === (12))){
var inst_31296 = (state_31336[(7)]);
var inst_31324 = cljs.core.vec.call(null,inst_31296);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31336__$1,(15),out,inst_31324);
} else {
if((state_val_31337 === (2))){
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31336__$1,(4),ch);
} else {
if((state_val_31337 === (11))){
var inst_31300 = (state_31336[(9)]);
var inst_31304 = (state_31336[(10)]);
var inst_31314 = (state_31336[(2)]);
var inst_31315 = [];
var inst_31316 = inst_31315.push(inst_31300);
var inst_31296 = inst_31315;
var inst_31297 = inst_31304;
var state_31336__$1 = (function (){var statearr_31348 = state_31336;
(statearr_31348[(11)] = inst_31316);

(statearr_31348[(7)] = inst_31296);

(statearr_31348[(8)] = inst_31297);

(statearr_31348[(12)] = inst_31314);

return statearr_31348;
})();
var statearr_31349_31379 = state_31336__$1;
(statearr_31349_31379[(2)] = null);

(statearr_31349_31379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (9))){
var inst_31296 = (state_31336[(7)]);
var inst_31312 = cljs.core.vec.call(null,inst_31296);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31336__$1,(11),out,inst_31312);
} else {
if((state_val_31337 === (5))){
var inst_31297 = (state_31336[(8)]);
var inst_31300 = (state_31336[(9)]);
var inst_31304 = (state_31336[(10)]);
var inst_31304__$1 = f.call(null,inst_31300);
var inst_31305 = cljs.core._EQ_.call(null,inst_31304__$1,inst_31297);
var inst_31306 = cljs.core.keyword_identical_QMARK_.call(null,inst_31297,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31307 = (inst_31305) || (inst_31306);
var state_31336__$1 = (function (){var statearr_31350 = state_31336;
(statearr_31350[(10)] = inst_31304__$1);

return statearr_31350;
})();
if(cljs.core.truth_(inst_31307)){
var statearr_31351_31380 = state_31336__$1;
(statearr_31351_31380[(1)] = (8));

} else {
var statearr_31352_31381 = state_31336__$1;
(statearr_31352_31381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (14))){
var inst_31329 = (state_31336[(2)]);
var inst_31330 = cljs.core.async.close_BANG_.call(null,out);
var state_31336__$1 = (function (){var statearr_31354 = state_31336;
(statearr_31354[(13)] = inst_31329);

return statearr_31354;
})();
var statearr_31355_31382 = state_31336__$1;
(statearr_31355_31382[(2)] = inst_31330);

(statearr_31355_31382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (10))){
var inst_31319 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31356_31383 = state_31336__$1;
(statearr_31356_31383[(2)] = inst_31319);

(statearr_31356_31383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (8))){
var inst_31296 = (state_31336[(7)]);
var inst_31300 = (state_31336[(9)]);
var inst_31304 = (state_31336[(10)]);
var inst_31309 = inst_31296.push(inst_31300);
var tmp31353 = inst_31296;
var inst_31296__$1 = tmp31353;
var inst_31297 = inst_31304;
var state_31336__$1 = (function (){var statearr_31357 = state_31336;
(statearr_31357[(14)] = inst_31309);

(statearr_31357[(7)] = inst_31296__$1);

(statearr_31357[(8)] = inst_31297);

return statearr_31357;
})();
var statearr_31358_31384 = state_31336__$1;
(statearr_31358_31384[(2)] = null);

(statearr_31358_31384[(1)] = (2));


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
});})(c__28559__auto___31370,out))
;
return ((function (switch__28447__auto__,c__28559__auto___31370,out){
return (function() {
var cljs$core$async$state_machine__28448__auto__ = null;
var cljs$core$async$state_machine__28448__auto____0 = (function (){
var statearr_31362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31362[(0)] = cljs$core$async$state_machine__28448__auto__);

(statearr_31362[(1)] = (1));

return statearr_31362;
});
var cljs$core$async$state_machine__28448__auto____1 = (function (state_31336){
while(true){
var ret_value__28449__auto__ = (function (){try{while(true){
var result__28450__auto__ = switch__28447__auto__.call(null,state_31336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28450__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28450__auto__;
}
break;
}
}catch (e31363){if((e31363 instanceof Object)){
var ex__28451__auto__ = e31363;
var statearr_31364_31385 = state_31336;
(statearr_31364_31385[(5)] = ex__28451__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31386 = state_31336;
state_31336 = G__31386;
continue;
} else {
return ret_value__28449__auto__;
}
break;
}
});
cljs$core$async$state_machine__28448__auto__ = function(state_31336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28448__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28448__auto____1.call(this,state_31336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28448__auto____0;
cljs$core$async$state_machine__28448__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28448__auto____1;
return cljs$core$async$state_machine__28448__auto__;
})()
;})(switch__28447__auto__,c__28559__auto___31370,out))
})();
var state__28561__auto__ = (function (){var statearr_31365 = f__28560__auto__.call(null);
(statearr_31365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28559__auto___31370);

return statearr_31365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28561__auto__);
});})(c__28559__auto___31370,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1494453153605