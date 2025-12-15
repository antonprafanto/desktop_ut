(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))s(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const S of m.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&s(S)}).observe(document,{childList:!0,subtree:!0});function c(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(f){if(f.ep)return;f.ep=!0;const m=c(f);fetch(f.href,m)}})();var Ns={exports:{}},Oi={};var Wm;function th(){if(Wm)return Oi;Wm=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function c(s,f,m){var S=null;if(m!==void 0&&(S=""+m),f.key!==void 0&&(S=""+f.key),"key"in f){m={};for(var E in f)E!=="key"&&(m[E]=f[E])}else m=f;return f=m.ref,{$$typeof:o,type:s,key:S,ref:f!==void 0?f:null,props:m}}return Oi.Fragment=d,Oi.jsx=c,Oi.jsxs=c,Oi}var Zm;function nh(){return Zm||(Zm=1,Ns.exports=th()),Ns.exports}var g=nh(),Rs={exports:{}},Z={};var $m;function ih(){if($m)return Z;$m=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),S=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),B=Symbol.iterator;function U(k){return k===null||typeof k!="object"?null:(k=B&&k[B]||k["@@iterator"],typeof k=="function"?k:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,I={};function _(k,R,J){this.props=k,this.context=R,this.refs=I,this.updater=J||F}_.prototype.isReactComponent={},_.prototype.setState=function(k,R){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,R,"setState")},_.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function G(){}G.prototype=_.prototype;function X(k,R,J){this.props=k,this.context=R,this.refs=I,this.updater=J||F}var ka=X.prototype=new G;ka.constructor=X,V(ka,_.prototype),ka.isPureReactComponent=!0;var Ta=Array.isArray;function Da(){}var W={H:null,A:null,T:null,S:null},Ja=Object.prototype.hasOwnProperty;function Ua(k,R,J){var K=J.ref;return{$$typeof:o,type:k,key:R,ref:K!==void 0?K:null,props:J}}function Qa(k,R){return Ua(k.type,R,k.props)}function Wa(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function _a(k){var R={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(J){return R[J]})}var Ot=/\/+/g;function Ie(k,R){return typeof k=="object"&&k!==null&&k.key!=null?_a(""+k.key):R.toString(36)}function De(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(Da,Da):(k.status="pending",k.then(function(R){k.status==="pending"&&(k.status="fulfilled",k.value=R)},function(R){k.status==="pending"&&(k.status="rejected",k.reason=R)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function L(k,R,J,K,$){var ta=typeof k;(ta==="undefined"||ta==="boolean")&&(k=null);var ca=!1;if(k===null)ca=!0;else switch(ta){case"bigint":case"string":case"number":ca=!0;break;case"object":switch(k.$$typeof){case o:case d:ca=!0;break;case j:return ca=k._init,L(ca(k._payload),R,J,K,$)}}if(ca)return $=$(k),ca=K===""?"."+Ie(k,0):K,Ta($)?(J="",ca!=null&&(J=ca.replace(Ot,"$&/")+"/"),L($,R,J,"",function(In){return In})):$!=null&&(Wa($)&&($=Qa($,J+($.key==null||k&&k.key===$.key?"":(""+$.key).replace(Ot,"$&/")+"/")+ca)),R.push($)),1;ca=0;var Za=K===""?".":K+":";if(Ta(k))for(var Ma=0;Ma<k.length;Ma++)K=k[Ma],ta=Za+Ie(K,Ma),ca+=L(K,R,J,ta,$);else if(Ma=U(k),typeof Ma=="function")for(k=Ma.call(k),Ma=0;!(K=k.next()).done;)K=K.value,ta=Za+Ie(K,Ma++),ca+=L(K,R,J,ta,$);else if(ta==="object"){if(typeof k.then=="function")return L(De(k),R,J,K,$);throw R=String(k),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return ca}function P(k,R,J){if(k==null)return k;var K=[],$=0;return L(k,K,"","",function(ta){return R.call(J,ta,$++)}),K}function Y(k){if(k._status===-1){var R=k._result;R=R(),R.then(function(J){(k._status===0||k._status===-1)&&(k._status=1,k._result=J)},function(J){(k._status===0||k._status===-1)&&(k._status=2,k._result=J)}),k._status===-1&&(k._status=0,k._result=R)}if(k._status===1)return k._result.default;throw k._result}var ga=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},Sa={map:P,forEach:function(k,R,J){P(k,function(){R.apply(this,arguments)},J)},count:function(k){var R=0;return P(k,function(){R++}),R},toArray:function(k){return P(k,function(R){return R})||[]},only:function(k){if(!Wa(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return Z.Activity=w,Z.Children=Sa,Z.Component=_,Z.Fragment=c,Z.Profiler=f,Z.PureComponent=X,Z.StrictMode=s,Z.Suspense=y,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Z.__COMPILER_RUNTIME={__proto__:null,c:function(k){return W.H.useMemoCache(k)}},Z.cache=function(k){return function(){return k.apply(null,arguments)}},Z.cacheSignal=function(){return null},Z.cloneElement=function(k,R,J){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var K=V({},k.props),$=k.key;if(R!=null)for(ta in R.key!==void 0&&($=""+R.key),R)!Ja.call(R,ta)||ta==="key"||ta==="__self"||ta==="__source"||ta==="ref"&&R.ref===void 0||(K[ta]=R[ta]);var ta=arguments.length-2;if(ta===1)K.children=J;else if(1<ta){for(var ca=Array(ta),Za=0;Za<ta;Za++)ca[Za]=arguments[Za+2];K.children=ca}return Ua(k.type,$,K)},Z.createContext=function(k){return k={$$typeof:S,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:m,_context:k},k},Z.createElement=function(k,R,J){var K,$={},ta=null;if(R!=null)for(K in R.key!==void 0&&(ta=""+R.key),R)Ja.call(R,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&($[K]=R[K]);var ca=arguments.length-2;if(ca===1)$.children=J;else if(1<ca){for(var Za=Array(ca),Ma=0;Ma<ca;Ma++)Za[Ma]=arguments[Ma+2];$.children=Za}if(k&&k.defaultProps)for(K in ca=k.defaultProps,ca)$[K]===void 0&&($[K]=ca[K]);return Ua(k,ta,$)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(k){return{$$typeof:E,render:k}},Z.isValidElement=Wa,Z.lazy=function(k){return{$$typeof:j,_payload:{_status:-1,_result:k},_init:Y}},Z.memo=function(k,R){return{$$typeof:h,type:k,compare:R===void 0?null:R}},Z.startTransition=function(k){var R=W.T,J={};W.T=J;try{var K=k(),$=W.S;$!==null&&$(J,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(Da,ga)}catch(ta){ga(ta)}finally{R!==null&&J.types!==null&&(R.types=J.types),W.T=R}},Z.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Z.use=function(k){return W.H.use(k)},Z.useActionState=function(k,R,J){return W.H.useActionState(k,R,J)},Z.useCallback=function(k,R){return W.H.useCallback(k,R)},Z.useContext=function(k){return W.H.useContext(k)},Z.useDebugValue=function(){},Z.useDeferredValue=function(k,R){return W.H.useDeferredValue(k,R)},Z.useEffect=function(k,R){return W.H.useEffect(k,R)},Z.useEffectEvent=function(k){return W.H.useEffectEvent(k)},Z.useId=function(){return W.H.useId()},Z.useImperativeHandle=function(k,R,J){return W.H.useImperativeHandle(k,R,J)},Z.useInsertionEffect=function(k,R){return W.H.useInsertionEffect(k,R)},Z.useLayoutEffect=function(k,R){return W.H.useLayoutEffect(k,R)},Z.useMemo=function(k,R){return W.H.useMemo(k,R)},Z.useOptimistic=function(k,R){return W.H.useOptimistic(k,R)},Z.useReducer=function(k,R,J){return W.H.useReducer(k,R,J)},Z.useRef=function(k){return W.H.useRef(k)},Z.useState=function(k){return W.H.useState(k)},Z.useSyncExternalStore=function(k,R,J){return W.H.useSyncExternalStore(k,R,J)},Z.useTransition=function(){return W.H.useTransition()},Z.version="19.2.3",Z}var ap;function zs(){return ap||(ap=1,Rs.exports=ih()),Rs.exports}var M=zs(),Bs={exports:{}},Ni={},Ps={exports:{}},Js={};var ep;function lh(){return ep||(ep=1,(function(o){function d(L,P){var Y=L.length;L.push(P);a:for(;0<Y;){var ga=Y-1>>>1,Sa=L[ga];if(0<f(Sa,P))L[ga]=P,L[Y]=Sa,Y=ga;else break a}}function c(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var P=L[0],Y=L.pop();if(Y!==P){L[0]=Y;a:for(var ga=0,Sa=L.length,k=Sa>>>1;ga<k;){var R=2*(ga+1)-1,J=L[R],K=R+1,$=L[K];if(0>f(J,Y))K<Sa&&0>f($,J)?(L[ga]=$,L[K]=Y,ga=K):(L[ga]=J,L[R]=Y,ga=R);else if(K<Sa&&0>f($,Y))L[ga]=$,L[K]=Y,ga=K;else break a}}return P}function f(L,P){var Y=L.sortIndex-P.sortIndex;return Y!==0?Y:L.id-P.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var S=Date,E=S.now();o.unstable_now=function(){return S.now()-E}}var y=[],h=[],j=1,w=null,B=3,U=!1,F=!1,V=!1,I=!1,_=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function ka(L){for(var P=c(h);P!==null;){if(P.callback===null)s(h);else if(P.startTime<=L)s(h),P.sortIndex=P.expirationTime,d(y,P);else break;P=c(h)}}function Ta(L){if(V=!1,ka(L),!F)if(c(y)!==null)F=!0,Da||(Da=!0,_a());else{var P=c(h);P!==null&&De(Ta,P.startTime-L)}}var Da=!1,W=-1,Ja=5,Ua=-1;function Qa(){return I?!0:!(o.unstable_now()-Ua<Ja)}function Wa(){if(I=!1,Da){var L=o.unstable_now();Ua=L;var P=!0;try{a:{F=!1,V&&(V=!1,G(W),W=-1),U=!0;var Y=B;try{e:{for(ka(L),w=c(y);w!==null&&!(w.expirationTime>L&&Qa());){var ga=w.callback;if(typeof ga=="function"){w.callback=null,B=w.priorityLevel;var Sa=ga(w.expirationTime<=L);if(L=o.unstable_now(),typeof Sa=="function"){w.callback=Sa,ka(L),P=!0;break e}w===c(y)&&s(y),ka(L)}else s(y);w=c(y)}if(w!==null)P=!0;else{var k=c(h);k!==null&&De(Ta,k.startTime-L),P=!1}}break a}finally{w=null,B=Y,U=!1}P=void 0}}finally{P?_a():Da=!1}}}var _a;if(typeof X=="function")_a=function(){X(Wa)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,Ie=Ot.port2;Ot.port1.onmessage=Wa,_a=function(){Ie.postMessage(null)}}else _a=function(){_(Wa,0)};function De(L,P){W=_(function(){L(o.unstable_now())},P)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ja=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return B},o.unstable_next=function(L){switch(B){case 1:case 2:case 3:var P=3;break;default:P=B}var Y=B;B=P;try{return L()}finally{B=Y}},o.unstable_requestPaint=function(){I=!0},o.unstable_runWithPriority=function(L,P){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=B;B=L;try{return P()}finally{B=Y}},o.unstable_scheduleCallback=function(L,P,Y){var ga=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ga+Y:ga):Y=ga,L){case 1:var Sa=-1;break;case 2:Sa=250;break;case 5:Sa=1073741823;break;case 4:Sa=1e4;break;default:Sa=5e3}return Sa=Y+Sa,L={id:j++,callback:P,priorityLevel:L,startTime:Y,expirationTime:Sa,sortIndex:-1},Y>ga?(L.sortIndex=Y,d(h,L),c(y)===null&&L===c(h)&&(V?(G(W),W=-1):V=!0,De(Ta,Y-ga))):(L.sortIndex=Sa,d(y,L),F||U||(F=!0,Da||(Da=!0,_a()))),L},o.unstable_shouldYield=Qa,o.unstable_wrapCallback=function(L){var P=B;return function(){var Y=B;B=P;try{return L.apply(this,arguments)}finally{B=Y}}}})(Js)),Js}var tp;function rh(){return tp||(tp=1,Ps.exports=lh()),Ps.exports}var Fs={exports:{}},Ya={};var np;function oh(){if(np)return Ya;np=1;var o=zs();function d(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)h+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(d(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(y,h,j){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:""+w,children:y,containerInfo:h,implementation:j}}var S=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ya.createPortal=function(y,h){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(d(299));return m(y,h,null,j)},Ya.flushSync=function(y){var h=S.T,j=s.p;try{if(S.T=null,s.p=2,y)return y()}finally{S.T=h,s.p=j,s.d.f()}},Ya.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(y,h))},Ya.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Ya.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var j=h.as,w=E(j,h.crossOrigin),B=typeof h.integrity=="string"?h.integrity:void 0,U=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;j==="style"?s.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:w,integrity:B,fetchPriority:U}):j==="script"&&s.d.X(y,{crossOrigin:w,integrity:B,fetchPriority:U,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ya.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var j=E(h.as,h.crossOrigin);s.d.M(y,{crossOrigin:j,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(y)},Ya.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var j=h.as,w=E(j,h.crossOrigin);s.d.L(y,j,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ya.preloadModule=function(y,h){if(typeof y=="string")if(h){var j=E(h.as,h.crossOrigin);s.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:j,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(y)},Ya.requestFormReset=function(y){s.d.r(y)},Ya.unstable_batchedUpdates=function(y,h){return y(h)},Ya.useFormState=function(y,h,j){return S.H.useFormState(y,h,j)},Ya.useFormStatus=function(){return S.H.useHostTransitionStatus()},Ya.version="19.2.3",Ya}var ip;function sh(){if(ip)return Fs.exports;ip=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Fs.exports=oh(),Fs.exports}var lp;function uh(){if(lp)return Ni;lp=1;var o=rh(),d=zs(),c=sh();function s(a){var e="https://react.dev/errors/"+a;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function m(a){var e=a,t=a;if(a.alternate)for(;e.return;)e=e.return;else{a=e;do e=a,(e.flags&4098)!==0&&(t=e.return),a=e.return;while(a)}return e.tag===3?t:null}function S(a){if(a.tag===13){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function E(a){if(a.tag===31){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function y(a){if(m(a)!==a)throw Error(s(188))}function h(a){var e=a.alternate;if(!e){if(e=m(a),e===null)throw Error(s(188));return e!==a?null:a}for(var t=a,n=e;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){t=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return y(i),a;if(l===n)return y(i),e;l=l.sibling}throw Error(s(188))}if(t.return!==n.return)t=i,n=l;else{for(var r=!1,u=i.child;u;){if(u===t){r=!0,t=i,n=l;break}if(u===n){r=!0,n=i,t=l;break}u=u.sibling}if(!r){for(u=l.child;u;){if(u===t){r=!0,t=l,n=i;break}if(u===n){r=!0,n=l,t=i;break}u=u.sibling}if(!r)throw Error(s(189))}}if(t.alternate!==n)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?a:e}function j(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a;for(a=a.child;a!==null;){if(e=j(a),e!==null)return e;a=a.sibling}return null}var w=Object.assign,B=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ka=Symbol.for("react.forward_ref"),Ta=Symbol.for("react.suspense"),Da=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ja=Symbol.for("react.lazy"),Ua=Symbol.for("react.activity"),Qa=Symbol.for("react.memo_cache_sentinel"),Wa=Symbol.iterator;function _a(a){return a===null||typeof a!="object"?null:(a=Wa&&a[Wa]||a["@@iterator"],typeof a=="function"?a:null)}var Ot=Symbol.for("react.client.reference");function Ie(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===Ot?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case V:return"Fragment";case _:return"Profiler";case I:return"StrictMode";case Ta:return"Suspense";case Da:return"SuspenseList";case Ua:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case F:return"Portal";case X:return a.displayName||"Context";case G:return(a._context.displayName||"Context")+".Consumer";case ka:var e=a.render;return a=a.displayName,a||(a=e.displayName||e.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case W:return e=a.displayName||null,e!==null?e:Ie(a.type)||"Memo";case Ja:e=a._payload,a=a._init;try{return Ie(a(e))}catch{}}return null}var De=Array.isArray,L=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ga=[],Sa=-1;function k(a){return{current:a}}function R(a){0>Sa||(a.current=ga[Sa],ga[Sa]=null,Sa--)}function J(a,e){Sa++,ga[Sa]=a.current,a.current=e}var K=k(null),$=k(null),ta=k(null),ca=k(null);function Za(a,e){switch(J(ta,e),J($,a),J(K,null),e.nodeType){case 9:case 11:a=(a=e.documentElement)&&(a=a.namespaceURI)?ym(a):0;break;default:if(a=e.tagName,e=e.namespaceURI)e=ym(e),a=vm(e,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}R(K),J(K,a)}function Ma(){R(K),R($),R(ta)}function In(a){a.memoizedState!==null&&J(ca,a);var e=K.current,t=vm(e,a.type);e!==t&&(J($,a),J(K,t))}function _i(a){$.current===a&&(R(K),R($)),ca.current===a&&(R(ca),Di._currentValue=Y)}var gr,Xs;function Nt(a){if(gr===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);gr=e&&e[1]||"",Xs=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gr+a+Xs}var fr=!1;function hr(a,e){if(!a||fr)return"";fr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(C){var A=C}Reflect.construct(a,[],N)}else{try{N.call()}catch(C){A=C}a.call(N.prototype)}}else{try{throw Error()}catch(C){A=C}(N=a())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(C){if(C&&A&&typeof C.stack=="string")return[C.stack,A.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),r=l[0],u=l[1];if(r&&u){var p=r.split(`
`),T=u.split(`
`);for(i=n=0;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(n===p.length||i===T.length)for(n=p.length-1,i=T.length-1;1<=n&&0<=i&&p[n]!==T[i];)i--;for(;1<=n&&0<=i;n--,i--)if(p[n]!==T[i]){if(n!==1||i!==1)do if(n--,i--,0>i||p[n]!==T[i]){var D=`
`+p[n].replace(" at new "," at ");return a.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",a.displayName)),D}while(1<=n&&0<=i);break}}}finally{fr=!1,Error.prepareStackTrace=t}return(t=a?a.displayName||a.name:"")?Nt(t):""}function Op(a,e){switch(a.tag){case 26:case 27:case 5:return Nt(a.type);case 16:return Nt("Lazy");case 13:return a.child!==e&&e!==null?Nt("Suspense Fallback"):Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 15:return hr(a.type,!1);case 11:return hr(a.type.render,!1);case 1:return hr(a.type,!0);case 31:return Nt("Activity");default:return""}}function Ws(a){try{var e="",t=null;do e+=Op(a,t),t=a,a=a.return;while(a);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var br=Object.prototype.hasOwnProperty,kr=o.unstable_scheduleCallback,Sr=o.unstable_cancelCallback,Np=o.unstable_shouldYield,Rp=o.unstable_requestPaint,oe=o.unstable_now,Bp=o.unstable_getCurrentPriorityLevel,Zs=o.unstable_ImmediatePriority,$s=o.unstable_UserBlockingPriority,Hi=o.unstable_NormalPriority,Pp=o.unstable_LowPriority,au=o.unstable_IdlePriority,Jp=o.log,Fp=o.unstable_setDisableYieldValue,Un=null,se=null;function rt(a){if(typeof Jp=="function"&&Fp(a),se&&typeof se.setStrictMode=="function")try{se.setStrictMode(Un,a)}catch{}}var ue=Math.clz32?Math.clz32:_p,Ip=Math.log,Up=Math.LN2;function _p(a){return a>>>=0,a===0?32:31-(Ip(a)/Up|0)|0}var Ki=256,zi=262144,Gi=4194304;function Rt(a){var e=a&42;if(e!==0)return e;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return a&261888;case 262144:case 524288:case 1048576:case 2097152:return a&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function Vi(a,e,t){var n=a.pendingLanes;if(n===0)return 0;var i=0,l=a.suspendedLanes,r=a.pingedLanes;a=a.warmLanes;var u=n&134217727;return u!==0?(n=u&~l,n!==0?i=Rt(n):(r&=u,r!==0?i=Rt(r):t||(t=u&~a,t!==0&&(i=Rt(t))))):(u=n&~l,u!==0?i=Rt(u):r!==0?i=Rt(r):t||(t=n&~a,t!==0&&(i=Rt(t)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,t=e&-e,l>=t||l===32&&(t&4194048)!==0)?e:i}function _n(a,e){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&e)===0}function Hp(a,e){switch(a){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eu(){var a=Gi;return Gi<<=1,(Gi&62914560)===0&&(Gi=4194304),a}function yr(a){for(var e=[],t=0;31>t;t++)e.push(a);return e}function Hn(a,e){a.pendingLanes|=e,e!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function Kp(a,e,t,n,i,l){var r=a.pendingLanes;a.pendingLanes=t,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=t,a.entangledLanes&=t,a.errorRecoveryDisabledLanes&=t,a.shellSuspendCounter=0;var u=a.entanglements,p=a.expirationTimes,T=a.hiddenUpdates;for(t=r&~t;0<t;){var D=31-ue(t),N=1<<D;u[D]=0,p[D]=-1;var A=T[D];if(A!==null)for(T[D]=null,D=0;D<A.length;D++){var C=A[D];C!==null&&(C.lane&=-536870913)}t&=~N}n!==0&&tu(a,n,0),l!==0&&i===0&&a.tag!==0&&(a.suspendedLanes|=l&~(r&~e))}function tu(a,e,t){a.pendingLanes|=e,a.suspendedLanes&=~e;var n=31-ue(e);a.entangledLanes|=e,a.entanglements[n]=a.entanglements[n]|1073741824|t&261930}function nu(a,e){var t=a.entangledLanes|=e;for(a=a.entanglements;t;){var n=31-ue(t),i=1<<n;i&e|a[n]&e&&(a[n]|=e),t&=~i}}function iu(a,e){var t=e&-e;return t=(t&42)!==0?1:vr(t),(t&(a.suspendedLanes|e))!==0?0:t}function vr(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function Er(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function lu(){var a=P.p;return a!==0?a:(a=window.event,a===void 0?32:zm(a.type))}function ru(a,e){var t=P.p;try{return P.p=a,e()}finally{P.p=t}}var ot=Math.random().toString(36).slice(2),Ha="__reactFiber$"+ot,ae="__reactProps$"+ot,$t="__reactContainer$"+ot,xr="__reactEvents$"+ot,zp="__reactListeners$"+ot,Gp="__reactHandles$"+ot,ou="__reactResources$"+ot,Kn="__reactMarker$"+ot;function Tr(a){delete a[Ha],delete a[ae],delete a[xr],delete a[zp],delete a[Gp]}function an(a){var e=a[Ha];if(e)return e;for(var t=a.parentNode;t;){if(e=t[$t]||t[Ha]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(a=Dm(a);a!==null;){if(t=a[Ha])return t;a=Dm(a)}return e}a=t,t=a.parentNode}return null}function en(a){if(a=a[Ha]||a[$t]){var e=a.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return a}return null}function zn(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a.stateNode;throw Error(s(33))}function tn(a){var e=a[ou];return e||(e=a[ou]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Fa(a){a[Kn]=!0}var su=new Set,uu={};function Bt(a,e){nn(a,e),nn(a+"Capture",e)}function nn(a,e){for(uu[a]=e,a=0;a<e.length;a++)su.add(e[a])}var Vp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),du={},cu={};function qp(a){return br.call(cu,a)?!0:br.call(du,a)?!1:Vp.test(a)?cu[a]=!0:(du[a]=!0,!1)}function qi(a,e,t){if(qp(e))if(t===null)a.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":a.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){a.removeAttribute(e);return}}a.setAttribute(e,""+t)}}function Qi(a,e,t){if(t===null)a.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(e);return}a.setAttribute(e,""+t)}}function Ue(a,e,t,n){if(n===null)a.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(t);return}a.setAttributeNS(e,t,""+n)}}function be(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function mu(a){var e=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qp(a,e,t){var n=Object.getOwnPropertyDescriptor(a.constructor.prototype,e);if(!a.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(a,e,{configurable:!0,get:function(){return i.call(this)},set:function(r){t=""+r,l.call(this,r)}}),Object.defineProperty(a,e,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){a._valueTracker=null,delete a[e]}}}}function Ar(a){if(!a._valueTracker){var e=mu(a)?"checked":"value";a._valueTracker=Qp(a,e,""+a[e])}}function pu(a){if(!a)return!1;var e=a._valueTracker;if(!e)return!0;var t=e.getValue(),n="";return a&&(n=mu(a)?a.checked?"true":"false":a.value),a=n,a!==t?(e.setValue(a),!0):!1}function Yi(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var Yp=/[\n"\\]/g;function ke(a){return a.replace(Yp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Cr(a,e,t,n,i,l,r,u){a.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?a.type=r:a.removeAttribute("type"),e!=null?r==="number"?(e===0&&a.value===""||a.value!=e)&&(a.value=""+be(e)):a.value!==""+be(e)&&(a.value=""+be(e)):r!=="submit"&&r!=="reset"||a.removeAttribute("value"),e!=null?wr(a,r,be(e)):t!=null?wr(a,r,be(t)):n!=null&&a.removeAttribute("value"),i==null&&l!=null&&(a.defaultChecked=!!l),i!=null&&(a.checked=i&&typeof i!="function"&&typeof i!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?a.name=""+be(u):a.removeAttribute("name")}function gu(a,e,t,n,i,l,r,u){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(a.type=l),e!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){Ar(a);return}t=t!=null?""+be(t):"",e=e!=null?""+be(e):t,u||e===a.value||(a.value=e),a.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,a.checked=u?a.checked:!!n,a.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(a.name=r),Ar(a)}function wr(a,e,t){e==="number"&&Yi(a.ownerDocument)===a||a.defaultValue===""+t||(a.defaultValue=""+t)}function ln(a,e,t,n){if(a=a.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<a.length;t++)i=e.hasOwnProperty("$"+a[t].value),a[t].selected!==i&&(a[t].selected=i),i&&n&&(a[t].defaultSelected=!0)}else{for(t=""+be(t),e=null,i=0;i<a.length;i++){if(a[i].value===t){a[i].selected=!0,n&&(a[i].defaultSelected=!0);return}e!==null||a[i].disabled||(e=a[i])}e!==null&&(e.selected=!0)}}function fu(a,e,t){if(e!=null&&(e=""+be(e),e!==a.value&&(a.value=e),t==null)){a.defaultValue!==e&&(a.defaultValue=e);return}a.defaultValue=t!=null?""+be(t):""}function hu(a,e,t,n){if(e==null){if(n!=null){if(t!=null)throw Error(s(92));if(De(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),e=t}t=be(e),a.defaultValue=t,n=a.textContent,n===t&&n!==""&&n!==null&&(a.value=n),Ar(a)}function rn(a,e){if(e){var t=a.firstChild;if(t&&t===a.lastChild&&t.nodeType===3){t.nodeValue=e;return}}a.textContent=e}var Xp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bu(a,e,t){var n=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?a.setProperty(e,""):e==="float"?a.cssFloat="":a[e]="":n?a.setProperty(e,t):typeof t!="number"||t===0||Xp.has(e)?e==="float"?a.cssFloat=t:a[e]=(""+t).trim():a[e]=t+"px"}function ku(a,e,t){if(e!=null&&typeof e!="object")throw Error(s(62));if(a=a.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?a.setProperty(n,""):n==="float"?a.cssFloat="":a[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&t[i]!==n&&bu(a,i,n)}else for(var l in e)e.hasOwnProperty(l)&&bu(a,l,e[l])}function Dr(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xi(a){return Zp.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}function _e(){}var Mr=null;function Lr(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var on=null,sn=null;function Su(a){var e=en(a);if(e&&(a=e.stateNode)){var t=a[ae]||null;a:switch(a=e.stateNode,e.type){case"input":if(Cr(a,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=a;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ke(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var n=t[e];if(n!==a&&n.form===a.form){var i=n[ae]||null;if(!i)throw Error(s(90));Cr(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<t.length;e++)n=t[e],n.form===a.form&&pu(n)}break a;case"textarea":fu(a,t.value,t.defaultValue);break a;case"select":e=t.value,e!=null&&ln(a,!!t.multiple,e,!1)}}}var jr=!1;function yu(a,e,t){if(jr)return a(e,t);jr=!0;try{var n=a(e);return n}finally{if(jr=!1,(on!==null||sn!==null)&&(Jl(),on&&(e=on,a=sn,sn=on=null,Su(e),a)))for(e=0;e<a.length;e++)Su(a[e])}}function Gn(a,e){var t=a.stateNode;if(t===null)return null;var n=t[ae]||null;if(n===null)return null;t=n[e];a:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(a=a.type,n=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!n;break a;default:a=!1}if(a)return null;if(t&&typeof t!="function")throw Error(s(231,e,typeof t));return t}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Or=!1;if(He)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Or=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Or=!1}var st=null,Nr=null,Wi=null;function vu(){if(Wi)return Wi;var a,e=Nr,t=e.length,n,i="value"in st?st.value:st.textContent,l=i.length;for(a=0;a<t&&e[a]===i[a];a++);var r=t-a;for(n=1;n<=r&&e[t-n]===i[l-n];n++);return Wi=i.slice(a,1<n?1-n:void 0)}function Zi(a){var e=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&e===13&&(a=13)):a=e,a===10&&(a=13),32<=a||a===13?a:0}function $i(){return!0}function Eu(){return!1}function ee(a){function e(t,n,i,l,r){this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var u in a)a.hasOwnProperty(u)&&(t=a[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?$i:Eu,this.isPropagationStopped=Eu,this}return w(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),e}var Pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=ee(Pt),qn=w({},Pt,{view:0,detail:0}),$p=ee(qn),Rr,Br,Qn,el=w({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jr,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==Qn&&(Qn&&a.type==="mousemove"?(Rr=a.screenX-Qn.screenX,Br=a.screenY-Qn.screenY):Br=Rr=0,Qn=a),Rr)},movementY:function(a){return"movementY"in a?a.movementY:Br}}),xu=ee(el),ag=w({},el,{dataTransfer:0}),eg=ee(ag),tg=w({},qn,{relatedTarget:0}),Pr=ee(tg),ng=w({},Pt,{animationName:0,elapsedTime:0,pseudoElement:0}),ig=ee(ng),lg=w({},Pt,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),rg=ee(lg),og=w({},Pt,{data:0}),Tu=ee(og),sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cg(a){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(a):(a=dg[a])?!!e[a]:!1}function Jr(){return cg}var mg=w({},qn,{key:function(a){if(a.key){var e=sg[a.key]||a.key;if(e!=="Unidentified")return e}return a.type==="keypress"?(a=Zi(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?ug[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jr,charCode:function(a){return a.type==="keypress"?Zi(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?Zi(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),pg=ee(mg),gg=w({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=ee(gg),fg=w({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jr}),hg=ee(fg),bg=w({},Pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),kg=ee(bg),Sg=w({},el,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=ee(Sg),vg=w({},Pt,{newState:0,oldState:0}),Eg=ee(vg),xg=[9,13,27,32],Fr=He&&"CompositionEvent"in window,Yn=null;He&&"documentMode"in document&&(Yn=document.documentMode);var Tg=He&&"TextEvent"in window&&!Yn,Cu=He&&(!Fr||Yn&&8<Yn&&11>=Yn),wu=" ",Du=!1;function Mu(a,e){switch(a){case"keyup":return xg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lu(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var un=!1;function Ag(a,e){switch(a){case"compositionend":return Lu(e);case"keypress":return e.which!==32?null:(Du=!0,wu);case"textInput":return a=e.data,a===wu&&Du?null:a;default:return null}}function Cg(a,e){if(un)return a==="compositionend"||!Fr&&Mu(a,e)?(a=vu(),Wi=Nr=st=null,un=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cu&&e.locale!=="ko"?null:e.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e==="input"?!!wg[a.type]:e==="textarea"}function Ou(a,e,t,n){on?sn?sn.push(n):sn=[n]:on=n,e=zl(e,"onChange"),0<e.length&&(t=new al("onChange","change",null,t,n),a.push({event:t,listeners:e}))}var Xn=null,Wn=null;function Dg(a){gm(a,0)}function tl(a){var e=zn(a);if(pu(e))return a}function Nu(a,e){if(a==="change")return e}var Ru=!1;if(He){var Ir;if(He){var Ur="oninput"in document;if(!Ur){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),Ur=typeof Bu.oninput=="function"}Ir=Ur}else Ir=!1;Ru=Ir&&(!document.documentMode||9<document.documentMode)}function Pu(){Xn&&(Xn.detachEvent("onpropertychange",Ju),Wn=Xn=null)}function Ju(a){if(a.propertyName==="value"&&tl(Wn)){var e=[];Ou(e,Wn,a,Lr(a)),yu(Dg,e)}}function Mg(a,e,t){a==="focusin"?(Pu(),Xn=e,Wn=t,Xn.attachEvent("onpropertychange",Ju)):a==="focusout"&&Pu()}function Lg(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return tl(Wn)}function jg(a,e){if(a==="click")return tl(e)}function Og(a,e){if(a==="input"||a==="change")return tl(e)}function Ng(a,e){return a===e&&(a!==0||1/a===1/e)||a!==a&&e!==e}var de=typeof Object.is=="function"?Object.is:Ng;function Zn(a,e){if(de(a,e))return!0;if(typeof a!="object"||a===null||typeof e!="object"||e===null)return!1;var t=Object.keys(a),n=Object.keys(e);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var i=t[n];if(!br.call(e,i)||!de(a[i],e[i]))return!1}return!0}function Fu(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Iu(a,e){var t=Fu(a);a=0;for(var n;t;){if(t.nodeType===3){if(n=a+t.textContent.length,a<=e&&n>=e)return{node:t,offset:e-a};a=n}a:{for(;t;){if(t.nextSibling){t=t.nextSibling;break a}t=t.parentNode}t=void 0}t=Fu(t)}}function Uu(a,e){return a&&e?a===e?!0:a&&a.nodeType===3?!1:e&&e.nodeType===3?Uu(a,e.parentNode):"contains"in a?a.contains(e):a.compareDocumentPosition?!!(a.compareDocumentPosition(e)&16):!1:!1}function _u(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var e=Yi(a.document);e instanceof a.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)a=e.contentWindow;else break;e=Yi(a.document)}return e}function _r(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e&&(e==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||e==="textarea"||a.contentEditable==="true")}var Rg=He&&"documentMode"in document&&11>=document.documentMode,dn=null,Hr=null,$n=null,Kr=!1;function Hu(a,e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Kr||dn==null||dn!==Yi(n)||(n=dn,"selectionStart"in n&&_r(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),$n&&Zn($n,n)||($n=n,n=zl(Hr,"onSelect"),0<n.length&&(e=new al("onSelect","select",null,e,t),a.push({event:e,listeners:n}),e.target=dn)))}function Jt(a,e){var t={};return t[a.toLowerCase()]=e.toLowerCase(),t["Webkit"+a]="webkit"+e,t["Moz"+a]="moz"+e,t}var cn={animationend:Jt("Animation","AnimationEnd"),animationiteration:Jt("Animation","AnimationIteration"),animationstart:Jt("Animation","AnimationStart"),transitionrun:Jt("Transition","TransitionRun"),transitionstart:Jt("Transition","TransitionStart"),transitioncancel:Jt("Transition","TransitionCancel"),transitionend:Jt("Transition","TransitionEnd")},zr={},Ku={};He&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function Ft(a){if(zr[a])return zr[a];if(!cn[a])return a;var e=cn[a],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ku)return zr[a]=e[t];return a}var zu=Ft("animationend"),Gu=Ft("animationiteration"),Vu=Ft("animationstart"),Bg=Ft("transitionrun"),Pg=Ft("transitionstart"),Jg=Ft("transitioncancel"),qu=Ft("transitionend"),Qu=new Map,Gr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gr.push("scrollEnd");function Me(a,e){Qu.set(a,e),Bt(e,[a])}var nl=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},Se=[],mn=0,Vr=0;function il(){for(var a=mn,e=Vr=mn=0;e<a;){var t=Se[e];Se[e++]=null;var n=Se[e];Se[e++]=null;var i=Se[e];Se[e++]=null;var l=Se[e];if(Se[e++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}l!==0&&Yu(t,i,l)}}function ll(a,e,t,n){Se[mn++]=a,Se[mn++]=e,Se[mn++]=t,Se[mn++]=n,Vr|=n,a.lanes|=n,a=a.alternate,a!==null&&(a.lanes|=n)}function qr(a,e,t,n){return ll(a,e,t,n),rl(a)}function It(a,e){return ll(a,null,null,e),rl(a)}function Yu(a,e,t){a.lanes|=t;var n=a.alternate;n!==null&&(n.lanes|=t);for(var i=!1,l=a.return;l!==null;)l.childLanes|=t,n=l.alternate,n!==null&&(n.childLanes|=t),l.tag===22&&(a=l.stateNode,a===null||a._visibility&1||(i=!0)),a=l,l=l.return;return a.tag===3?(l=a.stateNode,i&&e!==null&&(i=31-ue(t),a=l.hiddenUpdates,n=a[i],n===null?a[i]=[e]:n.push(e),e.lane=t|536870912),l):null}function rl(a){if(50<vi)throw vi=0,ns=null,Error(s(185));for(var e=a.return;e!==null;)a=e,e=a.return;return a.tag===3?a.stateNode:null}var pn={};function Fg(a,e,t,n){this.tag=a,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ce(a,e,t,n){return new Fg(a,e,t,n)}function Qr(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Ke(a,e){var t=a.alternate;return t===null?(t=ce(a.tag,e,a.key,a.mode),t.elementType=a.elementType,t.type=a.type,t.stateNode=a.stateNode,t.alternate=a,a.alternate=t):(t.pendingProps=e,t.type=a.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=a.flags&65011712,t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=a.sibling,t.index=a.index,t.ref=a.ref,t.refCleanup=a.refCleanup,t}function Xu(a,e){a.flags&=65011714;var t=a.alternate;return t===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,a.type=t.type,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a}function ol(a,e,t,n,i,l){var r=0;if(n=a,typeof a=="function")Qr(a)&&(r=1);else if(typeof a=="string")r=zf(a,t,K.current)?26:a==="html"||a==="head"||a==="body"?27:5;else a:switch(a){case Ua:return a=ce(31,t,e,i),a.elementType=Ua,a.lanes=l,a;case V:return Ut(t.children,i,l,e);case I:r=8,i|=24;break;case _:return a=ce(12,t,e,i|2),a.elementType=_,a.lanes=l,a;case Ta:return a=ce(13,t,e,i),a.elementType=Ta,a.lanes=l,a;case Da:return a=ce(19,t,e,i),a.elementType=Da,a.lanes=l,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case X:r=10;break a;case G:r=9;break a;case ka:r=11;break a;case W:r=14;break a;case Ja:r=16,n=null;break a}r=29,t=Error(s(130,a===null?"null":typeof a,"")),n=null}return e=ce(r,t,e,i),e.elementType=a,e.type=n,e.lanes=l,e}function Ut(a,e,t,n){return a=ce(7,a,n,e),a.lanes=t,a}function Yr(a,e,t){return a=ce(6,a,null,e),a.lanes=t,a}function Wu(a){var e=ce(18,null,null,0);return e.stateNode=a,e}function Xr(a,e,t){return e=ce(4,a.children!==null?a.children:[],a.key,e),e.lanes=t,e.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},e}var Zu=new WeakMap;function ye(a,e){if(typeof a=="object"&&a!==null){var t=Zu.get(a);return t!==void 0?t:(e={value:a,source:e,stack:Ws(e)},Zu.set(a,e),e)}return{value:a,source:e,stack:Ws(e)}}var gn=[],fn=0,sl=null,ai=0,ve=[],Ee=0,ut=null,Ne=1,Re="";function ze(a,e){gn[fn++]=ai,gn[fn++]=sl,sl=a,ai=e}function $u(a,e,t){ve[Ee++]=Ne,ve[Ee++]=Re,ve[Ee++]=ut,ut=a;var n=Ne;a=Re;var i=32-ue(n)-1;n&=~(1<<i),t+=1;var l=32-ue(e)+i;if(30<l){var r=i-i%5;l=(n&(1<<r)-1).toString(32),n>>=r,i-=r,Ne=1<<32-ue(e)+i|t<<i|n,Re=l+a}else Ne=1<<l|t<<i|n,Re=a}function Wr(a){a.return!==null&&(ze(a,1),$u(a,1,0))}function Zr(a){for(;a===sl;)sl=gn[--fn],gn[fn]=null,ai=gn[--fn],gn[fn]=null;for(;a===ut;)ut=ve[--Ee],ve[Ee]=null,Re=ve[--Ee],ve[Ee]=null,Ne=ve[--Ee],ve[Ee]=null}function ad(a,e){ve[Ee++]=Ne,ve[Ee++]=Re,ve[Ee++]=ut,Ne=e.id,Re=e.overflow,ut=a}var Ka=null,va=null,oa=!1,dt=null,xe=!1,$r=Error(s(519));function ct(a){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ei(ye(e,a)),$r}function ed(a){var e=a.stateNode,t=a.type,n=a.memoizedProps;switch(e[Ha]=a,e[ae]=n,t){case"dialog":ia("cancel",e),ia("close",e);break;case"iframe":case"object":case"embed":ia("load",e);break;case"video":case"audio":for(t=0;t<xi.length;t++)ia(xi[t],e);break;case"source":ia("error",e);break;case"img":case"image":case"link":ia("error",e),ia("load",e);break;case"details":ia("toggle",e);break;case"input":ia("invalid",e),gu(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ia("invalid",e);break;case"textarea":ia("invalid",e),hu(e,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||n.suppressHydrationWarning===!0||km(e.textContent,t)?(n.popover!=null&&(ia("beforetoggle",e),ia("toggle",e)),n.onScroll!=null&&ia("scroll",e),n.onScrollEnd!=null&&ia("scrollend",e),n.onClick!=null&&(e.onclick=_e),e=!0):e=!1,e||ct(a,!0)}function td(a){for(Ka=a.return;Ka;)switch(Ka.tag){case 5:case 31:case 13:xe=!1;return;case 27:case 3:xe=!0;return;default:Ka=Ka.return}}function hn(a){if(a!==Ka)return!1;if(!oa)return td(a),oa=!0,!1;var e=a.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=a.type,t=!(t!=="form"&&t!=="button")||ks(a.type,a.memoizedProps)),t=!t),t&&va&&ct(a),td(a),e===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));va=wm(a)}else if(e===31){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));va=wm(a)}else e===27?(e=va,At(a.type)?(a=xs,xs=null,va=a):va=e):va=Ka?Ae(a.stateNode.nextSibling):null;return!0}function _t(){va=Ka=null,oa=!1}function ao(){var a=dt;return a!==null&&(le===null?le=a:le.push.apply(le,a),dt=null),a}function ei(a){dt===null?dt=[a]:dt.push(a)}var eo=k(null),Ht=null,Ge=null;function mt(a,e,t){J(eo,e._currentValue),e._currentValue=t}function Ve(a){a._currentValue=eo.current,R(eo)}function to(a,e,t){for(;a!==null;){var n=a.alternate;if((a.childLanes&e)!==e?(a.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),a===t)break;a=a.return}}function no(a,e,t,n){var i=a.child;for(i!==null&&(i.return=a);i!==null;){var l=i.dependencies;if(l!==null){var r=i.child;l=l.firstContext;a:for(;l!==null;){var u=l;l=i;for(var p=0;p<e.length;p++)if(u.context===e[p]){l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),to(l.return,t,a),n||(r=null);break a}l=u.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(s(341));r.lanes|=t,l=r.alternate,l!==null&&(l.lanes|=t),to(r,t,a),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===a){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function bn(a,e,t,n){a=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(s(387));if(r=r.memoizedProps,r!==null){var u=i.type;de(i.pendingProps.value,r.value)||(a!==null?a.push(u):a=[u])}}else if(i===ca.current){if(r=i.alternate,r===null)throw Error(s(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(a!==null?a.push(Di):a=[Di])}i=i.return}a!==null&&no(e,a,t,n),e.flags|=262144}function ul(a){for(a=a.firstContext;a!==null;){if(!de(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Kt(a){Ht=a,Ge=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function za(a){return nd(Ht,a)}function dl(a,e){return Ht===null&&Kt(a),nd(a,e)}function nd(a,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Ge===null){if(a===null)throw Error(s(308));Ge=e,a.dependencies={lanes:0,firstContext:e},a.flags|=524288}else Ge=Ge.next=e;return t}var Ig=typeof AbortController<"u"?AbortController:function(){var a=[],e=this.signal={aborted:!1,addEventListener:function(t,n){a.push(n)}};this.abort=function(){e.aborted=!0,a.forEach(function(t){return t()})}},Ug=o.unstable_scheduleCallback,_g=o.unstable_NormalPriority,Oa={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function io(){return{controller:new Ig,data:new Map,refCount:0}}function ti(a){a.refCount--,a.refCount===0&&Ug(_g,function(){a.controller.abort()})}var ni=null,lo=0,kn=0,Sn=null;function Hg(a,e){if(ni===null){var t=ni=[];lo=0,kn=us(),Sn={status:"pending",value:void 0,then:function(n){t.push(n)}}}return lo++,e.then(id,id),e}function id(){if(--lo===0&&ni!==null){Sn!==null&&(Sn.status="fulfilled");var a=ni;ni=null,kn=0,Sn=null;for(var e=0;e<a.length;e++)(0,a[e])()}}function Kg(a,e){var t=[],n={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return a.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<t.length;i++)(0,t[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),n}var ld=L.S;L.S=function(a,e){Hc=oe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Hg(a,e),ld!==null&&ld(a,e)};var zt=k(null);function ro(){var a=zt.current;return a!==null?a:ya.pooledCache}function cl(a,e){e===null?J(zt,zt.current):J(zt,e.pool)}function rd(){var a=ro();return a===null?null:{parent:Oa._currentValue,pool:a}}var yn=Error(s(460)),oo=Error(s(474)),ml=Error(s(542)),pl={then:function(){}};function od(a){return a=a.status,a==="fulfilled"||a==="rejected"}function sd(a,e,t){switch(t=a[t],t===void 0?a.push(e):t!==e&&(e.then(_e,_e),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,dd(a),a;default:if(typeof e.status=="string")e.then(_e,_e);else{if(a=ya,a!==null&&100<a.shellSuspendCounter)throw Error(s(482));a=e,a.status="pending",a.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,dd(a),a}throw Vt=e,yn}}function Gt(a){try{var e=a._init;return e(a._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Vt=t,yn):t}}var Vt=null;function ud(){if(Vt===null)throw Error(s(459));var a=Vt;return Vt=null,a}function dd(a){if(a===yn||a===ml)throw Error(s(483))}var vn=null,ii=0;function gl(a){var e=ii;return ii+=1,vn===null&&(vn=[]),sd(vn,a,e)}function li(a,e){e=e.props.ref,a.ref=e!==void 0?e:null}function fl(a,e){throw e.$$typeof===B?Error(s(525)):(a=Object.prototype.toString.call(e),Error(s(31,a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)))}function cd(a){function e(v,b){if(a){var x=v.deletions;x===null?(v.deletions=[b],v.flags|=16):x.push(b)}}function t(v,b){if(!a)return null;for(;b!==null;)e(v,b),b=b.sibling;return null}function n(v){for(var b=new Map;v!==null;)v.key!==null?b.set(v.key,v):b.set(v.index,v),v=v.sibling;return b}function i(v,b){return v=Ke(v,b),v.index=0,v.sibling=null,v}function l(v,b,x){return v.index=x,a?(x=v.alternate,x!==null?(x=x.index,x<b?(v.flags|=67108866,b):x):(v.flags|=67108866,b)):(v.flags|=1048576,b)}function r(v){return a&&v.alternate===null&&(v.flags|=67108866),v}function u(v,b,x,O){return b===null||b.tag!==6?(b=Yr(x,v.mode,O),b.return=v,b):(b=i(b,x),b.return=v,b)}function p(v,b,x,O){var q=x.type;return q===V?D(v,b,x.props.children,O,x.key):b!==null&&(b.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ja&&Gt(q)===b.type)?(b=i(b,x.props),li(b,x),b.return=v,b):(b=ol(x.type,x.key,x.props,null,v.mode,O),li(b,x),b.return=v,b)}function T(v,b,x,O){return b===null||b.tag!==4||b.stateNode.containerInfo!==x.containerInfo||b.stateNode.implementation!==x.implementation?(b=Xr(x,v.mode,O),b.return=v,b):(b=i(b,x.children||[]),b.return=v,b)}function D(v,b,x,O,q){return b===null||b.tag!==7?(b=Ut(x,v.mode,O,q),b.return=v,b):(b=i(b,x),b.return=v,b)}function N(v,b,x){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Yr(""+b,v.mode,x),b.return=v,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case U:return x=ol(b.type,b.key,b.props,null,v.mode,x),li(x,b),x.return=v,x;case F:return b=Xr(b,v.mode,x),b.return=v,b;case Ja:return b=Gt(b),N(v,b,x)}if(De(b)||_a(b))return b=Ut(b,v.mode,x,null),b.return=v,b;if(typeof b.then=="function")return N(v,gl(b),x);if(b.$$typeof===X)return N(v,dl(v,b),x);fl(v,b)}return null}function A(v,b,x,O){var q=b!==null?b.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return q!==null?null:u(v,b,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case U:return x.key===q?p(v,b,x,O):null;case F:return x.key===q?T(v,b,x,O):null;case Ja:return x=Gt(x),A(v,b,x,O)}if(De(x)||_a(x))return q!==null?null:D(v,b,x,O,null);if(typeof x.then=="function")return A(v,b,gl(x),O);if(x.$$typeof===X)return A(v,b,dl(v,x),O);fl(v,x)}return null}function C(v,b,x,O,q){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return v=v.get(x)||null,u(b,v,""+O,q);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case U:return v=v.get(O.key===null?x:O.key)||null,p(b,v,O,q);case F:return v=v.get(O.key===null?x:O.key)||null,T(b,v,O,q);case Ja:return O=Gt(O),C(v,b,x,O,q)}if(De(O)||_a(O))return v=v.get(x)||null,D(b,v,O,q,null);if(typeof O.then=="function")return C(v,b,x,gl(O),q);if(O.$$typeof===X)return C(v,b,x,dl(b,O),q);fl(b,O)}return null}function H(v,b,x,O){for(var q=null,sa=null,z=b,ea=b=0,ra=null;z!==null&&ea<x.length;ea++){z.index>ea?(ra=z,z=null):ra=z.sibling;var ua=A(v,z,x[ea],O);if(ua===null){z===null&&(z=ra);break}a&&z&&ua.alternate===null&&e(v,z),b=l(ua,b,ea),sa===null?q=ua:sa.sibling=ua,sa=ua,z=ra}if(ea===x.length)return t(v,z),oa&&ze(v,ea),q;if(z===null){for(;ea<x.length;ea++)z=N(v,x[ea],O),z!==null&&(b=l(z,b,ea),sa===null?q=z:sa.sibling=z,sa=z);return oa&&ze(v,ea),q}for(z=n(z);ea<x.length;ea++)ra=C(z,v,ea,x[ea],O),ra!==null&&(a&&ra.alternate!==null&&z.delete(ra.key===null?ea:ra.key),b=l(ra,b,ea),sa===null?q=ra:sa.sibling=ra,sa=ra);return a&&z.forEach(function(Lt){return e(v,Lt)}),oa&&ze(v,ea),q}function Q(v,b,x,O){if(x==null)throw Error(s(151));for(var q=null,sa=null,z=b,ea=b=0,ra=null,ua=x.next();z!==null&&!ua.done;ea++,ua=x.next()){z.index>ea?(ra=z,z=null):ra=z.sibling;var Lt=A(v,z,ua.value,O);if(Lt===null){z===null&&(z=ra);break}a&&z&&Lt.alternate===null&&e(v,z),b=l(Lt,b,ea),sa===null?q=Lt:sa.sibling=Lt,sa=Lt,z=ra}if(ua.done)return t(v,z),oa&&ze(v,ea),q;if(z===null){for(;!ua.done;ea++,ua=x.next())ua=N(v,ua.value,O),ua!==null&&(b=l(ua,b,ea),sa===null?q=ua:sa.sibling=ua,sa=ua);return oa&&ze(v,ea),q}for(z=n(z);!ua.done;ea++,ua=x.next())ua=C(z,v,ea,ua.value,O),ua!==null&&(a&&ua.alternate!==null&&z.delete(ua.key===null?ea:ua.key),b=l(ua,b,ea),sa===null?q=ua:sa.sibling=ua,sa=ua);return a&&z.forEach(function(eh){return e(v,eh)}),oa&&ze(v,ea),q}function ba(v,b,x,O){if(typeof x=="object"&&x!==null&&x.type===V&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case U:a:{for(var q=x.key;b!==null;){if(b.key===q){if(q=x.type,q===V){if(b.tag===7){t(v,b.sibling),O=i(b,x.props.children),O.return=v,v=O;break a}}else if(b.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ja&&Gt(q)===b.type){t(v,b.sibling),O=i(b,x.props),li(O,x),O.return=v,v=O;break a}t(v,b);break}else e(v,b);b=b.sibling}x.type===V?(O=Ut(x.props.children,v.mode,O,x.key),O.return=v,v=O):(O=ol(x.type,x.key,x.props,null,v.mode,O),li(O,x),O.return=v,v=O)}return r(v);case F:a:{for(q=x.key;b!==null;){if(b.key===q)if(b.tag===4&&b.stateNode.containerInfo===x.containerInfo&&b.stateNode.implementation===x.implementation){t(v,b.sibling),O=i(b,x.children||[]),O.return=v,v=O;break a}else{t(v,b);break}else e(v,b);b=b.sibling}O=Xr(x,v.mode,O),O.return=v,v=O}return r(v);case Ja:return x=Gt(x),ba(v,b,x,O)}if(De(x))return H(v,b,x,O);if(_a(x)){if(q=_a(x),typeof q!="function")throw Error(s(150));return x=q.call(x),Q(v,b,x,O)}if(typeof x.then=="function")return ba(v,b,gl(x),O);if(x.$$typeof===X)return ba(v,b,dl(v,x),O);fl(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,b!==null&&b.tag===6?(t(v,b.sibling),O=i(b,x),O.return=v,v=O):(t(v,b),O=Yr(x,v.mode,O),O.return=v,v=O),r(v)):t(v,b)}return function(v,b,x,O){try{ii=0;var q=ba(v,b,x,O);return vn=null,q}catch(z){if(z===yn||z===ml)throw z;var sa=ce(29,z,null,v.mode);return sa.lanes=O,sa.return=v,sa}finally{}}}var qt=cd(!0),md=cd(!1),pt=!1;function so(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uo(a,e){a=a.updateQueue,e.updateQueue===a&&(e.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function gt(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function ft(a,e,t){var n=a.updateQueue;if(n===null)return null;if(n=n.shared,(da&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=rl(a),Yu(a,null,t),e}return ll(a,n,e,t),rl(a)}function ri(a,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var n=e.lanes;n&=a.pendingLanes,t|=n,e.lanes=t,nu(a,t)}}function co(a,e){var t=a.updateQueue,n=a.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var r={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=r:l=l.next=r,t=t.next}while(t!==null);l===null?i=l=e:l=l.next=e}else i=l=e;t={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},a.updateQueue=t;return}a=t.lastBaseUpdate,a===null?t.firstBaseUpdate=e:a.next=e,t.lastBaseUpdate=e}var mo=!1;function oi(){if(mo){var a=Sn;if(a!==null)throw a}}function si(a,e,t,n){mo=!1;var i=a.updateQueue;pt=!1;var l=i.firstBaseUpdate,r=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var p=u,T=p.next;p.next=null,r===null?l=T:r.next=T,r=p;var D=a.alternate;D!==null&&(D=D.updateQueue,u=D.lastBaseUpdate,u!==r&&(u===null?D.firstBaseUpdate=T:u.next=T,D.lastBaseUpdate=p))}if(l!==null){var N=i.baseState;r=0,D=T=p=null,u=l;do{var A=u.lane&-536870913,C=A!==u.lane;if(C?(la&A)===A:(n&A)===A){A!==0&&A===kn&&(mo=!0),D!==null&&(D=D.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});a:{var H=a,Q=u;A=e;var ba=t;switch(Q.tag){case 1:if(H=Q.payload,typeof H=="function"){N=H.call(ba,N,A);break a}N=H;break a;case 3:H.flags=H.flags&-65537|128;case 0:if(H=Q.payload,A=typeof H=="function"?H.call(ba,N,A):H,A==null)break a;N=w({},N,A);break a;case 2:pt=!0}}A=u.callback,A!==null&&(a.flags|=64,C&&(a.flags|=8192),C=i.callbacks,C===null?i.callbacks=[A]:C.push(A))}else C={lane:A,tag:u.tag,payload:u.payload,callback:u.callback,next:null},D===null?(T=D=C,p=N):D=D.next=C,r|=A;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;C=u,u=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);D===null&&(p=N),i.baseState=p,i.firstBaseUpdate=T,i.lastBaseUpdate=D,l===null&&(i.shared.lanes=0),yt|=r,a.lanes=r,a.memoizedState=N}}function pd(a,e){if(typeof a!="function")throw Error(s(191,a));a.call(e)}function gd(a,e){var t=a.callbacks;if(t!==null)for(a.callbacks=null,a=0;a<t.length;a++)pd(t[a],e)}var En=k(null),hl=k(0);function fd(a,e){a=et,J(hl,a),J(En,e),et=a|e.baseLanes}function po(){J(hl,et),J(En,En.current)}function go(){et=hl.current,R(En),R(hl)}var me=k(null),Te=null;function ht(a){var e=a.alternate;J(La,La.current&1),J(me,a),Te===null&&(e===null||En.current!==null||e.memoizedState!==null)&&(Te=a)}function fo(a){J(La,La.current),J(me,a),Te===null&&(Te=a)}function hd(a){a.tag===22?(J(La,La.current),J(me,a),Te===null&&(Te=a)):bt()}function bt(){J(La,La.current),J(me,me.current)}function pe(a){R(me),Te===a&&(Te=null),R(La)}var La=k(0);function bl(a){for(var e=a;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||vs(t)||Es(t)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qe=0,aa=null,fa=null,Na=null,kl=!1,xn=!1,Qt=!1,Sl=0,ui=0,Tn=null,zg=0;function Ca(){throw Error(s(321))}function ho(a,e){if(e===null)return!1;for(var t=0;t<e.length&&t<a.length;t++)if(!de(a[t],e[t]))return!1;return!0}function bo(a,e,t,n,i,l){return qe=l,aa=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,L.H=a===null||a.memoizedState===null?$d:Oo,Qt=!1,l=t(n,i),Qt=!1,xn&&(l=kd(e,t,n,i)),bd(a),l}function bd(a){L.H=mi;var e=fa!==null&&fa.next!==null;if(qe=0,Na=fa=aa=null,kl=!1,ui=0,Tn=null,e)throw Error(s(300));a===null||Ra||(a=a.dependencies,a!==null&&ul(a)&&(Ra=!0))}function kd(a,e,t,n){aa=a;var i=0;do{if(xn&&(Tn=null),ui=0,xn=!1,25<=i)throw Error(s(301));if(i+=1,Na=fa=null,a.updateQueue!=null){var l=a.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}L.H=ac,l=e(t,n)}while(xn);return l}function Gg(){var a=L.H,e=a.useState()[0];return e=typeof e.then=="function"?di(e):e,a=a.useState()[0],(fa!==null?fa.memoizedState:null)!==a&&(aa.flags|=1024),e}function ko(){var a=Sl!==0;return Sl=0,a}function So(a,e,t){e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~t}function yo(a){if(kl){for(a=a.memoizedState;a!==null;){var e=a.queue;e!==null&&(e.pending=null),a=a.next}kl=!1}qe=0,Na=fa=aa=null,xn=!1,ui=Sl=0,Tn=null}function $a(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Na===null?aa.memoizedState=Na=a:Na=Na.next=a,Na}function ja(){if(fa===null){var a=aa.alternate;a=a!==null?a.memoizedState:null}else a=fa.next;var e=Na===null?aa.memoizedState:Na.next;if(e!==null)Na=e,fa=a;else{if(a===null)throw aa.alternate===null?Error(s(467)):Error(s(310));fa=a,a={memoizedState:fa.memoizedState,baseState:fa.baseState,baseQueue:fa.baseQueue,queue:fa.queue,next:null},Na===null?aa.memoizedState=Na=a:Na=Na.next=a}return Na}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function di(a){var e=ui;return ui+=1,Tn===null&&(Tn=[]),a=sd(Tn,a,e),e=aa,(Na===null?e.memoizedState:Na.next)===null&&(e=e.alternate,L.H=e===null||e.memoizedState===null?$d:Oo),a}function vl(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return di(a);if(a.$$typeof===X)return za(a)}throw Error(s(438,String(a)))}function vo(a){var e=null,t=aa.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var n=aa.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=yl(),aa.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(a),n=0;n<a;n++)t[n]=Qa;return e.index++,t}function Qe(a,e){return typeof e=="function"?e(a):e}function El(a){var e=ja();return Eo(e,fa,a)}function Eo(a,e,t){var n=a.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var i=a.baseQueue,l=n.pending;if(l!==null){if(i!==null){var r=i.next;i.next=l.next,l.next=r}e.baseQueue=i=l,n.pending=null}if(l=a.baseState,i===null)a.memoizedState=l;else{e=i.next;var u=r=null,p=null,T=e,D=!1;do{var N=T.lane&-536870913;if(N!==T.lane?(la&N)===N:(qe&N)===N){var A=T.revertLane;if(A===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),N===kn&&(D=!0);else if((qe&A)===A){T=T.next,A===kn&&(D=!0);continue}else N={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},p===null?(u=p=N,r=l):p=p.next=N,aa.lanes|=A,yt|=A;N=T.action,Qt&&t(l,N),l=T.hasEagerState?T.eagerState:t(l,N)}else A={lane:N,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},p===null?(u=p=A,r=l):p=p.next=A,aa.lanes|=N,yt|=N;T=T.next}while(T!==null&&T!==e);if(p===null?r=l:p.next=u,!de(l,a.memoizedState)&&(Ra=!0,D&&(t=Sn,t!==null)))throw t;a.memoizedState=l,a.baseState=r,a.baseQueue=p,n.lastRenderedState=l}return i===null&&(n.lanes=0),[a.memoizedState,n.dispatch]}function xo(a){var e=ja(),t=e.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=a;var n=t.dispatch,i=t.pending,l=e.memoizedState;if(i!==null){t.pending=null;var r=i=i.next;do l=a(l,r.action),r=r.next;while(r!==i);de(l,e.memoizedState)||(Ra=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,n]}function Sd(a,e,t){var n=aa,i=ja(),l=oa;if(l){if(t===void 0)throw Error(s(407));t=t()}else t=e();var r=!de((fa||i).memoizedState,t);if(r&&(i.memoizedState=t,Ra=!0),i=i.queue,Co(Ed.bind(null,n,i,a),[a]),i.getSnapshot!==e||r||Na!==null&&Na.memoizedState.tag&1){if(n.flags|=2048,An(9,{destroy:void 0},vd.bind(null,n,i,t,e),null),ya===null)throw Error(s(349));l||(qe&127)!==0||yd(n,e,t)}return t}function yd(a,e,t){a.flags|=16384,a={getSnapshot:e,value:t},e=aa.updateQueue,e===null?(e=yl(),aa.updateQueue=e,e.stores=[a]):(t=e.stores,t===null?e.stores=[a]:t.push(a))}function vd(a,e,t,n){e.value=t,e.getSnapshot=n,xd(e)&&Td(a)}function Ed(a,e,t){return t(function(){xd(e)&&Td(a)})}function xd(a){var e=a.getSnapshot;a=a.value;try{var t=e();return!de(a,t)}catch{return!0}}function Td(a){var e=It(a,2);e!==null&&re(e,a,2)}function To(a){var e=$a();if(typeof a=="function"){var t=a;if(a=t(),Qt){rt(!0);try{t()}finally{rt(!1)}}}return e.memoizedState=e.baseState=a,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qe,lastRenderedState:a},e}function Ad(a,e,t,n){return a.baseState=t,Eo(a,fa,typeof n=="function"?n:Qe)}function Vg(a,e,t,n,i){if(Al(a))throw Error(s(485));if(a=e.action,a!==null){var l={payload:i,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};L.T!==null?t(!0):l.isTransition=!1,n(l),t=e.pending,t===null?(l.next=e.pending=l,Cd(e,l)):(l.next=t.next,e.pending=t.next=l)}}function Cd(a,e){var t=e.action,n=e.payload,i=a.state;if(e.isTransition){var l=L.T,r={};L.T=r;try{var u=t(i,n),p=L.S;p!==null&&p(r,u),wd(a,e,u)}catch(T){Ao(a,e,T)}finally{l!==null&&r.types!==null&&(l.types=r.types),L.T=l}}else try{l=t(i,n),wd(a,e,l)}catch(T){Ao(a,e,T)}}function wd(a,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){Dd(a,e,n)},function(n){return Ao(a,e,n)}):Dd(a,e,t)}function Dd(a,e,t){e.status="fulfilled",e.value=t,Md(e),a.state=t,e=a.pending,e!==null&&(t=e.next,t===e?a.pending=null:(t=t.next,e.next=t,Cd(a,t)))}function Ao(a,e,t){var n=a.pending;if(a.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=t,Md(e),e=e.next;while(e!==n)}a.action=null}function Md(a){a=a.listeners;for(var e=0;e<a.length;e++)(0,a[e])()}function Ld(a,e){return e}function jd(a,e){if(oa){var t=ya.formState;if(t!==null){a:{var n=aa;if(oa){if(va){e:{for(var i=va,l=xe;i.nodeType!==8;){if(!l){i=null;break e}if(i=Ae(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){va=Ae(i.nextSibling),n=i.data==="F!";break a}}ct(n)}n=!1}n&&(e=t[0])}}return t=$a(),t.memoizedState=t.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ld,lastRenderedState:e},t.queue=n,t=Xd.bind(null,aa,n),n.dispatch=t,n=To(!1),l=jo.bind(null,aa,!1,n.queue),n=$a(),i={state:e,dispatch:null,action:a,pending:null},n.queue=i,t=Vg.bind(null,aa,i,l,t),i.dispatch=t,n.memoizedState=a,[e,t,!1]}function Od(a){var e=ja();return Nd(e,fa,a)}function Nd(a,e,t){if(e=Eo(a,e,Ld)[0],a=El(Qe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=di(e)}catch(r){throw r===yn?ml:r}else n=e;e=ja();var i=e.queue,l=i.dispatch;return t!==e.memoizedState&&(aa.flags|=2048,An(9,{destroy:void 0},qg.bind(null,i,t),null)),[n,l,a]}function qg(a,e){a.action=e}function Rd(a){var e=ja(),t=fa;if(t!==null)return Nd(e,t,a);ja(),e=e.memoizedState,t=ja();var n=t.queue.dispatch;return t.memoizedState=a,[e,n,!1]}function An(a,e,t,n){return a={tag:a,create:t,deps:n,inst:e,next:null},e=aa.updateQueue,e===null&&(e=yl(),aa.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=a.next=a:(n=t.next,t.next=a,a.next=n,e.lastEffect=a),a}function Bd(){return ja().memoizedState}function xl(a,e,t,n){var i=$a();aa.flags|=a,i.memoizedState=An(1|e,{destroy:void 0},t,n===void 0?null:n)}function Tl(a,e,t,n){var i=ja();n=n===void 0?null:n;var l=i.memoizedState.inst;fa!==null&&n!==null&&ho(n,fa.memoizedState.deps)?i.memoizedState=An(e,l,t,n):(aa.flags|=a,i.memoizedState=An(1|e,l,t,n))}function Pd(a,e){xl(8390656,8,a,e)}function Co(a,e){Tl(2048,8,a,e)}function Qg(a){aa.flags|=4;var e=aa.updateQueue;if(e===null)e=yl(),aa.updateQueue=e,e.events=[a];else{var t=e.events;t===null?e.events=[a]:t.push(a)}}function Jd(a){var e=ja().memoizedState;return Qg({ref:e,nextImpl:a}),function(){if((da&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function Fd(a,e){return Tl(4,2,a,e)}function Id(a,e){return Tl(4,4,a,e)}function Ud(a,e){if(typeof e=="function"){a=a();var t=e(a);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return a=a(),e.current=a,function(){e.current=null}}function _d(a,e,t){t=t!=null?t.concat([a]):null,Tl(4,4,Ud.bind(null,e,a),t)}function wo(){}function Hd(a,e){var t=ja();e=e===void 0?null:e;var n=t.memoizedState;return e!==null&&ho(e,n[1])?n[0]:(t.memoizedState=[a,e],a)}function Kd(a,e){var t=ja();e=e===void 0?null:e;var n=t.memoizedState;if(e!==null&&ho(e,n[1]))return n[0];if(n=a(),Qt){rt(!0);try{a()}finally{rt(!1)}}return t.memoizedState=[n,e],n}function Do(a,e,t){return t===void 0||(qe&1073741824)!==0&&(la&261930)===0?a.memoizedState=e:(a.memoizedState=t,a=zc(),aa.lanes|=a,yt|=a,t)}function zd(a,e,t,n){return de(t,e)?t:En.current!==null?(a=Do(a,t,n),de(a,e)||(Ra=!0),a):(qe&42)===0||(qe&1073741824)!==0&&(la&261930)===0?(Ra=!0,a.memoizedState=t):(a=zc(),aa.lanes|=a,yt|=a,e)}function Gd(a,e,t,n,i){var l=P.p;P.p=l!==0&&8>l?l:8;var r=L.T,u={};L.T=u,jo(a,!1,e,t);try{var p=i(),T=L.S;if(T!==null&&T(u,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var D=Kg(p,n);ci(a,e,D,he(a))}else ci(a,e,n,he(a))}catch(N){ci(a,e,{then:function(){},status:"rejected",reason:N},he())}finally{P.p=l,r!==null&&u.types!==null&&(r.types=u.types),L.T=r}}function Yg(){}function Mo(a,e,t,n){if(a.tag!==5)throw Error(s(476));var i=Vd(a).queue;Gd(a,i,e,Y,t===null?Yg:function(){return qd(a),t(n)})}function Vd(a){var e=a.memoizedState;if(e!==null)return e;e={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qe,lastRenderedState:Y},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qe,lastRenderedState:t},next:null},a.memoizedState=e,a=a.alternate,a!==null&&(a.memoizedState=e),e}function qd(a){var e=Vd(a);e.next===null&&(e=a.alternate.memoizedState),ci(a,e.next.queue,{},he())}function Lo(){return za(Di)}function Qd(){return ja().memoizedState}function Yd(){return ja().memoizedState}function Xg(a){for(var e=a.return;e!==null;){switch(e.tag){case 24:case 3:var t=he();a=gt(t);var n=ft(e,a,t);n!==null&&(re(n,e,t),ri(n,e,t)),e={cache:io()},a.payload=e;return}e=e.return}}function Wg(a,e,t){var n=he();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Al(a)?Wd(e,t):(t=qr(a,e,t,n),t!==null&&(re(t,a,n),Zd(t,e,n)))}function Xd(a,e,t){var n=he();ci(a,e,t,n)}function ci(a,e,t,n){var i={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Al(a))Wd(e,i);else{var l=a.alternate;if(a.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var r=e.lastRenderedState,u=l(r,t);if(i.hasEagerState=!0,i.eagerState=u,de(u,r))return ll(a,e,i,0),ya===null&&il(),!1}catch{}finally{}if(t=qr(a,e,i,n),t!==null)return re(t,a,n),Zd(t,e,n),!0}return!1}function jo(a,e,t,n){if(n={lane:2,revertLane:us(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Al(a)){if(e)throw Error(s(479))}else e=qr(a,t,n,2),e!==null&&re(e,a,2)}function Al(a){var e=a.alternate;return a===aa||e!==null&&e===aa}function Wd(a,e){xn=kl=!0;var t=a.pending;t===null?e.next=e:(e.next=t.next,t.next=e),a.pending=e}function Zd(a,e,t){if((t&4194048)!==0){var n=e.lanes;n&=a.pendingLanes,t|=n,e.lanes=t,nu(a,t)}}var mi={readContext:za,use:vl,useCallback:Ca,useContext:Ca,useEffect:Ca,useImperativeHandle:Ca,useLayoutEffect:Ca,useInsertionEffect:Ca,useMemo:Ca,useReducer:Ca,useRef:Ca,useState:Ca,useDebugValue:Ca,useDeferredValue:Ca,useTransition:Ca,useSyncExternalStore:Ca,useId:Ca,useHostTransitionStatus:Ca,useFormState:Ca,useActionState:Ca,useOptimistic:Ca,useMemoCache:Ca,useCacheRefresh:Ca};mi.useEffectEvent=Ca;var $d={readContext:za,use:vl,useCallback:function(a,e){return $a().memoizedState=[a,e===void 0?null:e],a},useContext:za,useEffect:Pd,useImperativeHandle:function(a,e,t){t=t!=null?t.concat([a]):null,xl(4194308,4,Ud.bind(null,e,a),t)},useLayoutEffect:function(a,e){return xl(4194308,4,a,e)},useInsertionEffect:function(a,e){xl(4,2,a,e)},useMemo:function(a,e){var t=$a();e=e===void 0?null:e;var n=a();if(Qt){rt(!0);try{a()}finally{rt(!1)}}return t.memoizedState=[n,e],n},useReducer:function(a,e,t){var n=$a();if(t!==void 0){var i=t(e);if(Qt){rt(!0);try{t(e)}finally{rt(!1)}}}else i=e;return n.memoizedState=n.baseState=i,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:i},n.queue=a,a=a.dispatch=Wg.bind(null,aa,a),[n.memoizedState,a]},useRef:function(a){var e=$a();return a={current:a},e.memoizedState=a},useState:function(a){a=To(a);var e=a.queue,t=Xd.bind(null,aa,e);return e.dispatch=t,[a.memoizedState,t]},useDebugValue:wo,useDeferredValue:function(a,e){var t=$a();return Do(t,a,e)},useTransition:function(){var a=To(!1);return a=Gd.bind(null,aa,a.queue,!0,!1),$a().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,e,t){var n=aa,i=$a();if(oa){if(t===void 0)throw Error(s(407));t=t()}else{if(t=e(),ya===null)throw Error(s(349));(la&127)!==0||yd(n,e,t)}i.memoizedState=t;var l={value:t,getSnapshot:e};return i.queue=l,Pd(Ed.bind(null,n,l,a),[a]),n.flags|=2048,An(9,{destroy:void 0},vd.bind(null,n,l,t,e),null),t},useId:function(){var a=$a(),e=ya.identifierPrefix;if(oa){var t=Re,n=Ne;t=(n&~(1<<32-ue(n)-1)).toString(32)+t,e="_"+e+"R_"+t,t=Sl++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=zg++,e="_"+e+"r_"+t.toString(32)+"_";return a.memoizedState=e},useHostTransitionStatus:Lo,useFormState:jd,useActionState:jd,useOptimistic:function(a){var e=$a();e.memoizedState=e.baseState=a;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=jo.bind(null,aa,!0,t),t.dispatch=e,[a,e]},useMemoCache:vo,useCacheRefresh:function(){return $a().memoizedState=Xg.bind(null,aa)},useEffectEvent:function(a){var e=$a(),t={impl:a};return e.memoizedState=t,function(){if((da&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}},Oo={readContext:za,use:vl,useCallback:Hd,useContext:za,useEffect:Co,useImperativeHandle:_d,useInsertionEffect:Fd,useLayoutEffect:Id,useMemo:Kd,useReducer:El,useRef:Bd,useState:function(){return El(Qe)},useDebugValue:wo,useDeferredValue:function(a,e){var t=ja();return zd(t,fa.memoizedState,a,e)},useTransition:function(){var a=El(Qe)[0],e=ja().memoizedState;return[typeof a=="boolean"?a:di(a),e]},useSyncExternalStore:Sd,useId:Qd,useHostTransitionStatus:Lo,useFormState:Od,useActionState:Od,useOptimistic:function(a,e){var t=ja();return Ad(t,fa,a,e)},useMemoCache:vo,useCacheRefresh:Yd};Oo.useEffectEvent=Jd;var ac={readContext:za,use:vl,useCallback:Hd,useContext:za,useEffect:Co,useImperativeHandle:_d,useInsertionEffect:Fd,useLayoutEffect:Id,useMemo:Kd,useReducer:xo,useRef:Bd,useState:function(){return xo(Qe)},useDebugValue:wo,useDeferredValue:function(a,e){var t=ja();return fa===null?Do(t,a,e):zd(t,fa.memoizedState,a,e)},useTransition:function(){var a=xo(Qe)[0],e=ja().memoizedState;return[typeof a=="boolean"?a:di(a),e]},useSyncExternalStore:Sd,useId:Qd,useHostTransitionStatus:Lo,useFormState:Rd,useActionState:Rd,useOptimistic:function(a,e){var t=ja();return fa!==null?Ad(t,fa,a,e):(t.baseState=a,[a,t.queue.dispatch])},useMemoCache:vo,useCacheRefresh:Yd};ac.useEffectEvent=Jd;function No(a,e,t,n){e=a.memoizedState,t=t(n,e),t=t==null?e:w({},e,t),a.memoizedState=t,a.lanes===0&&(a.updateQueue.baseState=t)}var Ro={enqueueSetState:function(a,e,t){a=a._reactInternals;var n=he(),i=gt(n);i.payload=e,t!=null&&(i.callback=t),e=ft(a,i,n),e!==null&&(re(e,a,n),ri(e,a,n))},enqueueReplaceState:function(a,e,t){a=a._reactInternals;var n=he(),i=gt(n);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=ft(a,i,n),e!==null&&(re(e,a,n),ri(e,a,n))},enqueueForceUpdate:function(a,e){a=a._reactInternals;var t=he(),n=gt(t);n.tag=2,e!=null&&(n.callback=e),e=ft(a,n,t),e!==null&&(re(e,a,t),ri(e,a,t))}};function ec(a,e,t,n,i,l,r){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(n,l,r):e.prototype&&e.prototype.isPureReactComponent?!Zn(t,n)||!Zn(i,l):!0}function tc(a,e,t,n){a=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,n),e.state!==a&&Ro.enqueueReplaceState(e,e.state,null)}function Yt(a,e){var t=e;if("ref"in e){t={};for(var n in e)n!=="ref"&&(t[n]=e[n])}if(a=a.defaultProps){t===e&&(t=w({},t));for(var i in a)t[i]===void 0&&(t[i]=a[i])}return t}function nc(a){nl(a)}function ic(a){console.error(a)}function lc(a){nl(a)}function Cl(a,e){try{var t=a.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function rc(a,e,t){try{var n=a.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Bo(a,e,t){return t=gt(t),t.tag=3,t.payload={element:null},t.callback=function(){Cl(a,e)},t}function oc(a){return a=gt(a),a.tag=3,a}function sc(a,e,t,n){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;a.payload=function(){return i(l)},a.callback=function(){rc(e,t,n)}}var r=t.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(a.callback=function(){rc(e,t,n),typeof i!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function Zg(a,e,t,n,i){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=t.alternate,e!==null&&bn(e,t,i,!0),t=me.current,t!==null){switch(t.tag){case 31:case 13:return Te===null?Fl():t.alternate===null&&wa===0&&(wa=3),t.flags&=-257,t.flags|=65536,t.lanes=i,n===pl?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([n]):e.add(n),rs(a,n,i)),!1;case 22:return t.flags|=65536,n===pl?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([n]):t.add(n)),rs(a,n,i)),!1}throw Error(s(435,t.tag))}return rs(a,n,i),Fl(),!1}if(oa)return e=me.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==$r&&(a=Error(s(422),{cause:n}),ei(ye(a,t)))):(n!==$r&&(e=Error(s(423),{cause:n}),ei(ye(e,t))),a=a.current.alternate,a.flags|=65536,i&=-i,a.lanes|=i,n=ye(n,t),i=Bo(a.stateNode,n,i),co(a,i),wa!==4&&(wa=2)),!1;var l=Error(s(520),{cause:n});if(l=ye(l,t),yi===null?yi=[l]:yi.push(l),wa!==4&&(wa=2),e===null)return!0;n=ye(n,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,a=i&-i,t.lanes|=a,a=Bo(t.stateNode,n,a),co(t,a),!1;case 1:if(e=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(vt===null||!vt.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=oc(i),sc(i,a,t,n),co(t,i),!1}t=t.return}while(t!==null);return!1}var Po=Error(s(461)),Ra=!1;function Ga(a,e,t,n){e.child=a===null?md(e,null,t,n):qt(e,a.child,t,n)}function uc(a,e,t,n,i){t=t.render;var l=e.ref;if("ref"in n){var r={};for(var u in n)u!=="ref"&&(r[u]=n[u])}else r=n;return Kt(e),n=bo(a,e,t,r,l,i),u=ko(),a!==null&&!Ra?(So(a,e,i),Ye(a,e,i)):(oa&&u&&Wr(e),e.flags|=1,Ga(a,e,n,i),e.child)}function dc(a,e,t,n,i){if(a===null){var l=t.type;return typeof l=="function"&&!Qr(l)&&l.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=l,cc(a,e,l,n,i)):(a=ol(t.type,null,n,e,e.mode,i),a.ref=e.ref,a.return=e,e.child=a)}if(l=a.child,!zo(a,i)){var r=l.memoizedProps;if(t=t.compare,t=t!==null?t:Zn,t(r,n)&&a.ref===e.ref)return Ye(a,e,i)}return e.flags|=1,a=Ke(l,n),a.ref=e.ref,a.return=e,e.child=a}function cc(a,e,t,n,i){if(a!==null){var l=a.memoizedProps;if(Zn(l,n)&&a.ref===e.ref)if(Ra=!1,e.pendingProps=n=l,zo(a,i))(a.flags&131072)!==0&&(Ra=!0);else return e.lanes=a.lanes,Ye(a,e,i)}return Jo(a,e,t,n,i)}function mc(a,e,t,n){var i=n.children,l=a!==null?a.memoizedState:null;if(a===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,a!==null){for(n=e.child=a.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~l}else n=0,e.child=null;return pc(a,e,l,t,n)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},a!==null&&cl(e,l!==null?l.cachePool:null),l!==null?fd(e,l):po(),hd(e);else return n=e.lanes=536870912,pc(a,e,l!==null?l.baseLanes|t:t,t,n)}else l!==null?(cl(e,l.cachePool),fd(e,l),bt(),e.memoizedState=null):(a!==null&&cl(e,null),po(),bt());return Ga(a,e,i,t),e.child}function pi(a,e){return a!==null&&a.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function pc(a,e,t,n,i){var l=ro();return l=l===null?null:{parent:Oa._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},a!==null&&cl(e,null),po(),hd(e),a!==null&&bn(a,e,n,!0),e.childLanes=i,null}function wl(a,e){return e=Ml({mode:e.mode,children:e.children},a.mode),e.ref=a.ref,a.child=e,e.return=a,e}function gc(a,e,t){return qt(e,a.child,null,t),a=wl(e,e.pendingProps),a.flags|=2,pe(e),e.memoizedState=null,a}function $g(a,e,t){var n=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,a===null){if(oa){if(n.mode==="hidden")return a=wl(e,n),e.lanes=536870912,pi(null,a);if(fo(e),(a=va)?(a=Cm(a,xe),a=a!==null&&a.data==="&"?a:null,a!==null&&(e.memoizedState={dehydrated:a,treeContext:ut!==null?{id:Ne,overflow:Re}:null,retryLane:536870912,hydrationErrors:null},t=Wu(a),t.return=e,e.child=t,Ka=e,va=null)):a=null,a===null)throw ct(e);return e.lanes=536870912,null}return wl(e,n)}var l=a.memoizedState;if(l!==null){var r=l.dehydrated;if(fo(e),i)if(e.flags&256)e.flags&=-257,e=gc(a,e,t);else if(e.memoizedState!==null)e.child=a.child,e.flags|=128,e=null;else throw Error(s(558));else if(Ra||bn(a,e,t,!1),i=(t&a.childLanes)!==0,Ra||i){if(n=ya,n!==null&&(r=iu(n,t),r!==0&&r!==l.retryLane))throw l.retryLane=r,It(a,r),re(n,a,r),Po;Fl(),e=gc(a,e,t)}else a=l.treeContext,va=Ae(r.nextSibling),Ka=e,oa=!0,dt=null,xe=!1,a!==null&&ad(e,a),e=wl(e,n),e.flags|=4096;return e}return a=Ke(a.child,{mode:n.mode,children:n.children}),a.ref=e.ref,e.child=a,a.return=e,a}function Dl(a,e){var t=e.ref;if(t===null)a!==null&&a.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(s(284));(a===null||a.ref!==t)&&(e.flags|=4194816)}}function Jo(a,e,t,n,i){return Kt(e),t=bo(a,e,t,n,void 0,i),n=ko(),a!==null&&!Ra?(So(a,e,i),Ye(a,e,i)):(oa&&n&&Wr(e),e.flags|=1,Ga(a,e,t,i),e.child)}function fc(a,e,t,n,i,l){return Kt(e),e.updateQueue=null,t=kd(e,n,t,i),bd(a),n=ko(),a!==null&&!Ra?(So(a,e,l),Ye(a,e,l)):(oa&&n&&Wr(e),e.flags|=1,Ga(a,e,t,l),e.child)}function hc(a,e,t,n,i){if(Kt(e),e.stateNode===null){var l=pn,r=t.contextType;typeof r=="object"&&r!==null&&(l=za(r)),l=new t(n,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Ro,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=n,l.state=e.memoizedState,l.refs={},so(e),r=t.contextType,l.context=typeof r=="object"&&r!==null?za(r):pn,l.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(No(e,t,r,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Ro.enqueueReplaceState(l,l.state,null),si(e,n,l,i),oi(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(a===null){l=e.stateNode;var u=e.memoizedProps,p=Yt(t,u);l.props=p;var T=l.context,D=t.contextType;r=pn,typeof D=="object"&&D!==null&&(r=za(D));var N=t.getDerivedStateFromProps;D=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,D||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u||T!==r)&&tc(e,l,n,r),pt=!1;var A=e.memoizedState;l.state=A,si(e,n,l,i),oi(),T=e.memoizedState,u||A!==T||pt?(typeof N=="function"&&(No(e,t,N,n),T=e.memoizedState),(p=pt||ec(e,t,p,n,A,T,r))?(D||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=T),l.props=n,l.state=T,l.context=r,n=p):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{l=e.stateNode,uo(a,e),r=e.memoizedProps,D=Yt(t,r),l.props=D,N=e.pendingProps,A=l.context,T=t.contextType,p=pn,typeof T=="object"&&T!==null&&(p=za(T)),u=t.getDerivedStateFromProps,(T=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==N||A!==p)&&tc(e,l,n,p),pt=!1,A=e.memoizedState,l.state=A,si(e,n,l,i),oi();var C=e.memoizedState;r!==N||A!==C||pt||a!==null&&a.dependencies!==null&&ul(a.dependencies)?(typeof u=="function"&&(No(e,t,u,n),C=e.memoizedState),(D=pt||ec(e,t,D,n,A,C,p)||a!==null&&a.dependencies!==null&&ul(a.dependencies))?(T||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,C,p),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,C,p)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===a.memoizedProps&&A===a.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===a.memoizedProps&&A===a.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=C),l.props=n,l.state=C,l.context=p,n=D):(typeof l.componentDidUpdate!="function"||r===a.memoizedProps&&A===a.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===a.memoizedProps&&A===a.memoizedState||(e.flags|=1024),n=!1)}return l=n,Dl(a,e),n=(e.flags&128)!==0,l||n?(l=e.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,a!==null&&n?(e.child=qt(e,a.child,null,i),e.child=qt(e,null,t,i)):Ga(a,e,t,i),e.memoizedState=l.state,a=e.child):a=Ye(a,e,i),a}function bc(a,e,t,n){return _t(),e.flags|=256,Ga(a,e,t,n),e.child}var Fo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Io(a){return{baseLanes:a,cachePool:rd()}}function Uo(a,e,t){return a=a!==null?a.childLanes&~t:0,e&&(a|=fe),a}function kc(a,e,t){var n=e.pendingProps,i=!1,l=(e.flags&128)!==0,r;if((r=l)||(r=a!==null&&a.memoizedState===null?!1:(La.current&2)!==0),r&&(i=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,a===null){if(oa){if(i?ht(e):bt(),(a=va)?(a=Cm(a,xe),a=a!==null&&a.data!=="&"?a:null,a!==null&&(e.memoizedState={dehydrated:a,treeContext:ut!==null?{id:Ne,overflow:Re}:null,retryLane:536870912,hydrationErrors:null},t=Wu(a),t.return=e,e.child=t,Ka=e,va=null)):a=null,a===null)throw ct(e);return Es(a)?e.lanes=32:e.lanes=536870912,null}var u=n.children;return n=n.fallback,i?(bt(),i=e.mode,u=Ml({mode:"hidden",children:u},i),n=Ut(n,i,t,null),u.return=e,n.return=e,u.sibling=n,e.child=u,n=e.child,n.memoizedState=Io(t),n.childLanes=Uo(a,r,t),e.memoizedState=Fo,pi(null,n)):(ht(e),_o(e,u))}var p=a.memoizedState;if(p!==null&&(u=p.dehydrated,u!==null)){if(l)e.flags&256?(ht(e),e.flags&=-257,e=Ho(a,e,t)):e.memoizedState!==null?(bt(),e.child=a.child,e.flags|=128,e=null):(bt(),u=n.fallback,i=e.mode,n=Ml({mode:"visible",children:n.children},i),u=Ut(u,i,t,null),u.flags|=2,n.return=e,u.return=e,n.sibling=u,e.child=n,qt(e,a.child,null,t),n=e.child,n.memoizedState=Io(t),n.childLanes=Uo(a,r,t),e.memoizedState=Fo,e=pi(null,n));else if(ht(e),Es(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var T=r.dgst;r=T,n=Error(s(419)),n.stack="",n.digest=r,ei({value:n,source:null,stack:null}),e=Ho(a,e,t)}else if(Ra||bn(a,e,t,!1),r=(t&a.childLanes)!==0,Ra||r){if(r=ya,r!==null&&(n=iu(r,t),n!==0&&n!==p.retryLane))throw p.retryLane=n,It(a,n),re(r,a,n),Po;vs(u)||Fl(),e=Ho(a,e,t)}else vs(u)?(e.flags|=192,e.child=a.child,e=null):(a=p.treeContext,va=Ae(u.nextSibling),Ka=e,oa=!0,dt=null,xe=!1,a!==null&&ad(e,a),e=_o(e,n.children),e.flags|=4096);return e}return i?(bt(),u=n.fallback,i=e.mode,p=a.child,T=p.sibling,n=Ke(p,{mode:"hidden",children:n.children}),n.subtreeFlags=p.subtreeFlags&65011712,T!==null?u=Ke(T,u):(u=Ut(u,i,t,null),u.flags|=2),u.return=e,n.return=e,n.sibling=u,e.child=n,pi(null,n),n=e.child,u=a.child.memoizedState,u===null?u=Io(t):(i=u.cachePool,i!==null?(p=Oa._currentValue,i=i.parent!==p?{parent:p,pool:p}:i):i=rd(),u={baseLanes:u.baseLanes|t,cachePool:i}),n.memoizedState=u,n.childLanes=Uo(a,r,t),e.memoizedState=Fo,pi(a.child,n)):(ht(e),t=a.child,a=t.sibling,t=Ke(t,{mode:"visible",children:n.children}),t.return=e,t.sibling=null,a!==null&&(r=e.deletions,r===null?(e.deletions=[a],e.flags|=16):r.push(a)),e.child=t,e.memoizedState=null,t)}function _o(a,e){return e=Ml({mode:"visible",children:e},a.mode),e.return=a,a.child=e}function Ml(a,e){return a=ce(22,a,null,e),a.lanes=0,a}function Ho(a,e,t){return qt(e,a.child,null,t),a=_o(e,e.pendingProps.children),a.flags|=2,e.memoizedState=null,a}function Sc(a,e,t){a.lanes|=e;var n=a.alternate;n!==null&&(n.lanes|=e),to(a.return,e,t)}function Ko(a,e,t,n,i,l){var r=a.memoizedState;r===null?a.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:i,treeForkCount:l}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=t,r.tailMode=i,r.treeForkCount=l)}function yc(a,e,t){var n=e.pendingProps,i=n.revealOrder,l=n.tail;n=n.children;var r=La.current,u=(r&2)!==0;if(u?(r=r&1|2,e.flags|=128):r&=1,J(La,r),Ga(a,e,n,t),n=oa?ai:0,!u&&a!==null&&(a.flags&128)!==0)a:for(a=e.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Sc(a,t,e);else if(a.tag===19)Sc(a,t,e);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break a;for(;a.sibling===null;){if(a.return===null||a.return===e)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}switch(i){case"forwards":for(t=e.child,i=null;t!==null;)a=t.alternate,a!==null&&bl(a)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),Ko(e,!1,i,t,l,n);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(a=i.alternate,a!==null&&bl(a)===null){e.child=i;break}a=i.sibling,i.sibling=t,t=i,i=a}Ko(e,!0,t,null,l,n);break;case"together":Ko(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function Ye(a,e,t){if(a!==null&&(e.dependencies=a.dependencies),yt|=e.lanes,(t&e.childLanes)===0)if(a!==null){if(bn(a,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(a!==null&&e.child!==a.child)throw Error(s(153));if(e.child!==null){for(a=e.child,t=Ke(a,a.pendingProps),e.child=t,t.return=e;a.sibling!==null;)a=a.sibling,t=t.sibling=Ke(a,a.pendingProps),t.return=e;t.sibling=null}return e.child}function zo(a,e){return(a.lanes&e)!==0?!0:(a=a.dependencies,!!(a!==null&&ul(a)))}function af(a,e,t){switch(e.tag){case 3:Za(e,e.stateNode.containerInfo),mt(e,Oa,a.memoizedState.cache),_t();break;case 27:case 5:In(e);break;case 4:Za(e,e.stateNode.containerInfo);break;case 10:mt(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,fo(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(ht(e),e.flags|=128,null):(t&e.child.childLanes)!==0?kc(a,e,t):(ht(e),a=Ye(a,e,t),a!==null?a.sibling:null);ht(e);break;case 19:var i=(a.flags&128)!==0;if(n=(t&e.childLanes)!==0,n||(bn(a,e,t,!1),n=(t&e.childLanes)!==0),i){if(n)return yc(a,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(La,La.current),n)break;return null;case 22:return e.lanes=0,mc(a,e,t,e.pendingProps);case 24:mt(e,Oa,a.memoizedState.cache)}return Ye(a,e,t)}function vc(a,e,t){if(a!==null)if(a.memoizedProps!==e.pendingProps)Ra=!0;else{if(!zo(a,t)&&(e.flags&128)===0)return Ra=!1,af(a,e,t);Ra=(a.flags&131072)!==0}else Ra=!1,oa&&(e.flags&1048576)!==0&&$u(e,ai,e.index);switch(e.lanes=0,e.tag){case 16:a:{var n=e.pendingProps;if(a=Gt(e.elementType),e.type=a,typeof a=="function")Qr(a)?(n=Yt(a,n),e.tag=1,e=hc(null,e,a,n,t)):(e.tag=0,e=Jo(null,e,a,n,t));else{if(a!=null){var i=a.$$typeof;if(i===ka){e.tag=11,e=uc(null,e,a,n,t);break a}else if(i===W){e.tag=14,e=dc(null,e,a,n,t);break a}}throw e=Ie(a)||a,Error(s(306,e,""))}}return e;case 0:return Jo(a,e,e.type,e.pendingProps,t);case 1:return n=e.type,i=Yt(n,e.pendingProps),hc(a,e,n,i,t);case 3:a:{if(Za(e,e.stateNode.containerInfo),a===null)throw Error(s(387));n=e.pendingProps;var l=e.memoizedState;i=l.element,uo(a,e),si(e,n,null,t);var r=e.memoizedState;if(n=r.cache,mt(e,Oa,n),n!==l.cache&&no(e,[Oa],t,!0),oi(),n=r.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=bc(a,e,n,t);break a}else if(n!==i){i=ye(Error(s(424)),e),ei(i),e=bc(a,e,n,t);break a}else{switch(a=e.stateNode.containerInfo,a.nodeType){case 9:a=a.body;break;default:a=a.nodeName==="HTML"?a.ownerDocument.body:a}for(va=Ae(a.firstChild),Ka=e,oa=!0,dt=null,xe=!0,t=md(e,null,n,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(_t(),n===i){e=Ye(a,e,t);break a}Ga(a,e,n,t)}e=e.child}return e;case 26:return Dl(a,e),a===null?(t=Om(e.type,null,e.pendingProps,null))?e.memoizedState=t:oa||(t=e.type,a=e.pendingProps,n=Gl(ta.current).createElement(t),n[Ha]=e,n[ae]=a,Va(n,t,a),Fa(n),e.stateNode=n):e.memoizedState=Om(e.type,a.memoizedProps,e.pendingProps,a.memoizedState),null;case 27:return In(e),a===null&&oa&&(n=e.stateNode=Mm(e.type,e.pendingProps,ta.current),Ka=e,xe=!0,i=va,At(e.type)?(xs=i,va=Ae(n.firstChild)):va=i),Ga(a,e,e.pendingProps.children,t),Dl(a,e),a===null&&(e.flags|=4194304),e.child;case 5:return a===null&&oa&&((i=n=va)&&(n=jf(n,e.type,e.pendingProps,xe),n!==null?(e.stateNode=n,Ka=e,va=Ae(n.firstChild),xe=!1,i=!0):i=!1),i||ct(e)),In(e),i=e.type,l=e.pendingProps,r=a!==null?a.memoizedProps:null,n=l.children,ks(i,l)?n=null:r!==null&&ks(i,r)&&(e.flags|=32),e.memoizedState!==null&&(i=bo(a,e,Gg,null,null,t),Di._currentValue=i),Dl(a,e),Ga(a,e,n,t),e.child;case 6:return a===null&&oa&&((a=t=va)&&(t=Of(t,e.pendingProps,xe),t!==null?(e.stateNode=t,Ka=e,va=null,a=!0):a=!1),a||ct(e)),null;case 13:return kc(a,e,t);case 4:return Za(e,e.stateNode.containerInfo),n=e.pendingProps,a===null?e.child=qt(e,null,n,t):Ga(a,e,n,t),e.child;case 11:return uc(a,e,e.type,e.pendingProps,t);case 7:return Ga(a,e,e.pendingProps,t),e.child;case 8:return Ga(a,e,e.pendingProps.children,t),e.child;case 12:return Ga(a,e,e.pendingProps.children,t),e.child;case 10:return n=e.pendingProps,mt(e,e.type,n.value),Ga(a,e,n.children,t),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Kt(e),i=za(i),n=n(i),e.flags|=1,Ga(a,e,n,t),e.child;case 14:return dc(a,e,e.type,e.pendingProps,t);case 15:return cc(a,e,e.type,e.pendingProps,t);case 19:return yc(a,e,t);case 31:return $g(a,e,t);case 22:return mc(a,e,t,e.pendingProps);case 24:return Kt(e),n=za(Oa),a===null?(i=ro(),i===null&&(i=ya,l=io(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),e.memoizedState={parent:n,cache:i},so(e),mt(e,Oa,i)):((a.lanes&t)!==0&&(uo(a,e),si(e,null,null,t),oi()),i=a.memoizedState,l=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),mt(e,Oa,n)):(n=l.cache,mt(e,Oa,n),n!==i.cache&&no(e,[Oa],t,!0))),Ga(a,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function Xe(a){a.flags|=4}function Go(a,e,t,n,i){if((e=(a.mode&32)!==0)&&(e=!1),e){if(a.flags|=16777216,(i&335544128)===i)if(a.stateNode.complete)a.flags|=8192;else if(Qc())a.flags|=8192;else throw Vt=pl,oo}else a.flags&=-16777217}function Ec(a,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!Jm(e))if(Qc())a.flags|=8192;else throw Vt=pl,oo}function Ll(a,e){e!==null&&(a.flags|=4),a.flags&16384&&(e=a.tag!==22?eu():536870912,a.lanes|=e,Mn|=e)}function gi(a,e){if(!oa)switch(a.tailMode){case"hidden":e=a.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?a.tail=null:t.sibling=null;break;case"collapsed":t=a.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e||a.tail===null?a.tail=null:a.tail.sibling=null:n.sibling=null}}function Ea(a){var e=a.alternate!==null&&a.alternate.child===a.child,t=0,n=0;if(e)for(var i=a.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=a,i=i.sibling;else for(i=a.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=a,i=i.sibling;return a.subtreeFlags|=n,a.childLanes=t,e}function ef(a,e,t){var n=e.pendingProps;switch(Zr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ea(e),null;case 1:return Ea(e),null;case 3:return t=e.stateNode,n=null,a!==null&&(n=a.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Ve(Oa),Ma(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(a===null||a.child===null)&&(hn(e)?Xe(e):a===null||a.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ao())),Ea(e),null;case 26:var i=e.type,l=e.memoizedState;return a===null?(Xe(e),l!==null?(Ea(e),Ec(e,l)):(Ea(e),Go(e,i,null,n,t))):l?l!==a.memoizedState?(Xe(e),Ea(e),Ec(e,l)):(Ea(e),e.flags&=-16777217):(a=a.memoizedProps,a!==n&&Xe(e),Ea(e),Go(e,i,a,n,t)),null;case 27:if(_i(e),t=ta.current,i=e.type,a!==null&&e.stateNode!=null)a.memoizedProps!==n&&Xe(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return Ea(e),null}a=K.current,hn(e)?ed(e):(a=Mm(i,n,t),e.stateNode=a,Xe(e))}return Ea(e),null;case 5:if(_i(e),i=e.type,a!==null&&e.stateNode!=null)a.memoizedProps!==n&&Xe(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return Ea(e),null}if(l=K.current,hn(e))ed(e);else{var r=Gl(ta.current);switch(l){case 1:l=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=r.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?l.multiple=!0:n.size&&(l.size=n.size);break;default:l=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}l[Ha]=e,l[ae]=n;a:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)l.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break a;for(;r.sibling===null;){if(r.return===null||r.return===e)break a;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=l;a:switch(Va(l,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break a;case"img":n=!0;break a;default:n=!1}n&&Xe(e)}}return Ea(e),Go(e,e.type,a===null?null:a.memoizedProps,e.pendingProps,t),null;case 6:if(a&&e.stateNode!=null)a.memoizedProps!==n&&Xe(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(s(166));if(a=ta.current,hn(e)){if(a=e.stateNode,t=e.memoizedProps,n=null,i=Ka,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}a[Ha]=e,a=!!(a.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||km(a.nodeValue,t)),a||ct(e,!0)}else a=Gl(a).createTextNode(n),a[Ha]=e,e.stateNode=a}return Ea(e),null;case 31:if(t=e.memoizedState,a===null||a.memoizedState!==null){if(n=hn(e),t!==null){if(a===null){if(!n)throw Error(s(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(557));a[Ha]=e}else _t(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ea(e),a=!1}else t=ao(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=t),a=!0;if(!a)return e.flags&256?(pe(e),e):(pe(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Ea(e),null;case 13:if(n=e.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(i=hn(e),n!==null&&n.dehydrated!==null){if(a===null){if(!i)throw Error(s(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Ha]=e}else _t(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ea(e),i=!1}else i=ao(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(pe(e),e):(pe(e),null)}return pe(e),(e.flags&128)!==0?(e.lanes=t,e):(t=n!==null,a=a!==null&&a.memoizedState!==null,t&&(n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048)),t!==a&&t&&(e.child.flags|=8192),Ll(e,e.updateQueue),Ea(e),null);case 4:return Ma(),a===null&&ps(e.stateNode.containerInfo),Ea(e),null;case 10:return Ve(e.type),Ea(e),null;case 19:if(R(La),n=e.memoizedState,n===null)return Ea(e),null;if(i=(e.flags&128)!==0,l=n.rendering,l===null)if(i)gi(n,!1);else{if(wa!==0||a!==null&&(a.flags&128)!==0)for(a=e.child;a!==null;){if(l=bl(a),l!==null){for(e.flags|=128,gi(n,!1),a=l.updateQueue,e.updateQueue=a,Ll(e,a),e.subtreeFlags=0,a=t,t=e.child;t!==null;)Xu(t,a),t=t.sibling;return J(La,La.current&1|2),oa&&ze(e,n.treeForkCount),e.child}a=a.sibling}n.tail!==null&&oe()>Bl&&(e.flags|=128,i=!0,gi(n,!1),e.lanes=4194304)}else{if(!i)if(a=bl(l),a!==null){if(e.flags|=128,i=!0,a=a.updateQueue,e.updateQueue=a,Ll(e,a),gi(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!oa)return Ea(e),null}else 2*oe()-n.renderingStartTime>Bl&&t!==536870912&&(e.flags|=128,i=!0,gi(n,!1),e.lanes=4194304);n.isBackwards?(l.sibling=e.child,e.child=l):(a=n.last,a!==null?a.sibling=l:e.child=l,n.last=l)}return n.tail!==null?(a=n.tail,n.rendering=a,n.tail=a.sibling,n.renderingStartTime=oe(),a.sibling=null,t=La.current,J(La,i?t&1|2:t&1),oa&&ze(e,n.treeForkCount),a):(Ea(e),null);case 22:case 23:return pe(e),go(),n=e.memoizedState!==null,a!==null?a.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(t&536870912)!==0&&(e.flags&128)===0&&(Ea(e),e.subtreeFlags&6&&(e.flags|=8192)):Ea(e),t=e.updateQueue,t!==null&&Ll(e,t.retryQueue),t=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(e.flags|=2048),a!==null&&R(zt),null;case 24:return t=null,a!==null&&(t=a.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Ve(Oa),Ea(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function tf(a,e){switch(Zr(e),e.tag){case 1:return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 3:return Ve(Oa),Ma(),a=e.flags,(a&65536)!==0&&(a&128)===0?(e.flags=a&-65537|128,e):null;case 26:case 27:case 5:return _i(e),null;case 31:if(e.memoizedState!==null){if(pe(e),e.alternate===null)throw Error(s(340));_t()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 13:if(pe(e),a=e.memoizedState,a!==null&&a.dehydrated!==null){if(e.alternate===null)throw Error(s(340));_t()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 19:return R(La),null;case 4:return Ma(),null;case 10:return Ve(e.type),null;case 22:case 23:return pe(e),go(),a!==null&&R(zt),a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 24:return Ve(Oa),null;case 25:return null;default:return null}}function xc(a,e){switch(Zr(e),e.tag){case 3:Ve(Oa),Ma();break;case 26:case 27:case 5:_i(e);break;case 4:Ma();break;case 31:e.memoizedState!==null&&pe(e);break;case 13:pe(e);break;case 19:R(La);break;case 10:Ve(e.type);break;case 22:case 23:pe(e),go(),a!==null&&R(zt);break;case 24:Ve(Oa)}}function fi(a,e){try{var t=e.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var i=n.next;t=i;do{if((t.tag&a)===a){n=void 0;var l=t.create,r=t.inst;n=l(),r.destroy=n}t=t.next}while(t!==i)}}catch(u){pa(e,e.return,u)}}function kt(a,e,t){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&a)===a){var r=n.inst,u=r.destroy;if(u!==void 0){r.destroy=void 0,i=e;var p=t,T=u;try{T()}catch(D){pa(i,p,D)}}}n=n.next}while(n!==l)}}catch(D){pa(e,e.return,D)}}function Tc(a){var e=a.updateQueue;if(e!==null){var t=a.stateNode;try{gd(e,t)}catch(n){pa(a,a.return,n)}}}function Ac(a,e,t){t.props=Yt(a.type,a.memoizedProps),t.state=a.memoizedState;try{t.componentWillUnmount()}catch(n){pa(a,e,n)}}function hi(a,e){try{var t=a.ref;if(t!==null){switch(a.tag){case 26:case 27:case 5:var n=a.stateNode;break;case 30:n=a.stateNode;break;default:n=a.stateNode}typeof t=="function"?a.refCleanup=t(n):t.current=n}}catch(i){pa(a,e,i)}}function Be(a,e){var t=a.ref,n=a.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(i){pa(a,e,i)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){pa(a,e,i)}else t.current=null}function Cc(a){var e=a.type,t=a.memoizedProps,n=a.stateNode;try{a:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break a;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(i){pa(a,a.return,i)}}function Vo(a,e,t){try{var n=a.stateNode;Af(n,a.type,t,e),n[ae]=e}catch(i){pa(a,a.return,i)}}function wc(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&At(a.type)||a.tag===4}function qo(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||wc(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&At(a.type)||a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Qo(a,e,t){var n=a.tag;if(n===5||n===6)a=a.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(a,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(a),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=_e));else if(n!==4&&(n===27&&At(a.type)&&(t=a.stateNode,e=null),a=a.child,a!==null))for(Qo(a,e,t),a=a.sibling;a!==null;)Qo(a,e,t),a=a.sibling}function jl(a,e,t){var n=a.tag;if(n===5||n===6)a=a.stateNode,e?t.insertBefore(a,e):t.appendChild(a);else if(n!==4&&(n===27&&At(a.type)&&(t=a.stateNode),a=a.child,a!==null))for(jl(a,e,t),a=a.sibling;a!==null;)jl(a,e,t),a=a.sibling}function Dc(a){var e=a.stateNode,t=a.memoizedProps;try{for(var n=a.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Va(e,n,t),e[Ha]=a,e[ae]=t}catch(l){pa(a,a.return,l)}}var We=!1,Ba=!1,Yo=!1,Mc=typeof WeakSet=="function"?WeakSet:Set,Ia=null;function nf(a,e){if(a=a.containerInfo,hs=Zl,a=_u(a),_r(a)){if("selectionStart"in a)var t={start:a.selectionStart,end:a.selectionEnd};else a:{t=(t=a.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break a}var r=0,u=-1,p=-1,T=0,D=0,N=a,A=null;e:for(;;){for(var C;N!==t||i!==0&&N.nodeType!==3||(u=r+i),N!==l||n!==0&&N.nodeType!==3||(p=r+n),N.nodeType===3&&(r+=N.nodeValue.length),(C=N.firstChild)!==null;)A=N,N=C;for(;;){if(N===a)break e;if(A===t&&++T===i&&(u=r),A===l&&++D===n&&(p=r),(C=N.nextSibling)!==null)break;N=A,A=N.parentNode}N=C}t=u===-1||p===-1?null:{start:u,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(bs={focusedElem:a,selectionRange:t},Zl=!1,Ia=e;Ia!==null;)if(e=Ia,a=e.child,(e.subtreeFlags&1028)!==0&&a!==null)a.return=e,Ia=a;else for(;Ia!==null;){switch(e=Ia,l=e.alternate,a=e.flags,e.tag){case 0:if((a&4)!==0&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(t=0;t<a.length;t++)i=a[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((a&1024)!==0&&l!==null){a=void 0,t=e,i=l.memoizedProps,l=l.memoizedState,n=t.stateNode;try{var H=Yt(t.type,i);a=n.getSnapshotBeforeUpdate(H,l),n.__reactInternalSnapshotBeforeUpdate=a}catch(Q){pa(t,t.return,Q)}}break;case 3:if((a&1024)!==0){if(a=e.stateNode.containerInfo,t=a.nodeType,t===9)ys(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":ys(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(s(163))}if(a=e.sibling,a!==null){a.return=e.return,Ia=a;break}Ia=e.return}}function Lc(a,e,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:$e(a,t),n&4&&fi(5,t);break;case 1:if($e(a,t),n&4)if(a=t.stateNode,e===null)try{a.componentDidMount()}catch(r){pa(t,t.return,r)}else{var i=Yt(t.type,e.memoizedProps);e=e.memoizedState;try{a.componentDidUpdate(i,e,a.__reactInternalSnapshotBeforeUpdate)}catch(r){pa(t,t.return,r)}}n&64&&Tc(t),n&512&&hi(t,t.return);break;case 3:if($e(a,t),n&64&&(a=t.updateQueue,a!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{gd(a,e)}catch(r){pa(t,t.return,r)}}break;case 27:e===null&&n&4&&Dc(t);case 26:case 5:$e(a,t),e===null&&n&4&&Cc(t),n&512&&hi(t,t.return);break;case 12:$e(a,t);break;case 31:$e(a,t),n&4&&Nc(a,t);break;case 13:$e(a,t),n&4&&Rc(a,t),n&64&&(a=t.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(t=pf.bind(null,t),Nf(a,t))));break;case 22:if(n=t.memoizedState!==null||We,!n){e=e!==null&&e.memoizedState!==null||Ba,i=We;var l=Ba;We=n,(Ba=e)&&!l?at(a,t,(t.subtreeFlags&8772)!==0):$e(a,t),We=i,Ba=l}break;case 30:break;default:$e(a,t)}}function jc(a){var e=a.alternate;e!==null&&(a.alternate=null,jc(e)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(e=a.stateNode,e!==null&&Tr(e)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var xa=null,te=!1;function Ze(a,e,t){for(t=t.child;t!==null;)Oc(a,e,t),t=t.sibling}function Oc(a,e,t){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(Un,t)}catch{}switch(t.tag){case 26:Ba||Be(t,e),Ze(a,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ba||Be(t,e);var n=xa,i=te;At(t.type)&&(xa=t.stateNode,te=!1),Ze(a,e,t),Ai(t.stateNode),xa=n,te=i;break;case 5:Ba||Be(t,e);case 6:if(n=xa,i=te,xa=null,Ze(a,e,t),xa=n,te=i,xa!==null)if(te)try{(xa.nodeType===9?xa.body:xa.nodeName==="HTML"?xa.ownerDocument.body:xa).removeChild(t.stateNode)}catch(l){pa(t,e,l)}else try{xa.removeChild(t.stateNode)}catch(l){pa(t,e,l)}break;case 18:xa!==null&&(te?(a=xa,Tm(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.stateNode),Jn(a)):Tm(xa,t.stateNode));break;case 4:n=xa,i=te,xa=t.stateNode.containerInfo,te=!0,Ze(a,e,t),xa=n,te=i;break;case 0:case 11:case 14:case 15:kt(2,t,e),Ba||kt(4,t,e),Ze(a,e,t);break;case 1:Ba||(Be(t,e),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Ac(t,e,n)),Ze(a,e,t);break;case 21:Ze(a,e,t);break;case 22:Ba=(n=Ba)||t.memoizedState!==null,Ze(a,e,t),Ba=n;break;default:Ze(a,e,t)}}function Nc(a,e){if(e.memoizedState===null&&(a=e.alternate,a!==null&&(a=a.memoizedState,a!==null))){a=a.dehydrated;try{Jn(a)}catch(t){pa(e,e.return,t)}}}function Rc(a,e){if(e.memoizedState===null&&(a=e.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{Jn(a)}catch(t){pa(e,e.return,t)}}function lf(a){switch(a.tag){case 31:case 13:case 19:var e=a.stateNode;return e===null&&(e=a.stateNode=new Mc),e;case 22:return a=a.stateNode,e=a._retryCache,e===null&&(e=a._retryCache=new Mc),e;default:throw Error(s(435,a.tag))}}function Ol(a,e){var t=lf(a);e.forEach(function(n){if(!t.has(n)){t.add(n);var i=gf.bind(null,a,n);n.then(i,i)}})}function ne(a,e){var t=e.deletions;if(t!==null)for(var n=0;n<t.length;n++){var i=t[n],l=a,r=e,u=r;a:for(;u!==null;){switch(u.tag){case 27:if(At(u.type)){xa=u.stateNode,te=!1;break a}break;case 5:xa=u.stateNode,te=!1;break a;case 3:case 4:xa=u.stateNode.containerInfo,te=!0;break a}u=u.return}if(xa===null)throw Error(s(160));Oc(l,r,i),xa=null,te=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Bc(e,a),e=e.sibling}var Le=null;function Bc(a,e){var t=a.alternate,n=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ne(e,a),ie(a),n&4&&(kt(3,a,a.return),fi(3,a),kt(5,a,a.return));break;case 1:ne(e,a),ie(a),n&512&&(Ba||t===null||Be(t,t.return)),n&64&&We&&(a=a.updateQueue,a!==null&&(n=a.callbacks,n!==null&&(t=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var i=Le;if(ne(e,a),ie(a),n&512&&(Ba||t===null||Be(t,t.return)),n&4){var l=t!==null?t.memoizedState:null;if(n=a.memoizedState,t===null)if(n===null)if(a.stateNode===null){a:{n=a.type,t=a.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Kn]||l[Ha]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(n),i.head.insertBefore(l,i.querySelector("head > title"))),Va(l,n,t),l[Ha]=a,Fa(l),n=l;break a;case"link":var r=Bm("link","href",i).get(n+(t.href||""));if(r){for(var u=0;u<r.length;u++)if(l=r[u],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){r.splice(u,1);break e}}l=i.createElement(n),Va(l,n,t),i.head.appendChild(l);break;case"meta":if(r=Bm("meta","content",i).get(n+(t.content||""))){for(u=0;u<r.length;u++)if(l=r[u],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){r.splice(u,1);break e}}l=i.createElement(n),Va(l,n,t),i.head.appendChild(l);break;default:throw Error(s(468,n))}l[Ha]=a,Fa(l),n=l}a.stateNode=n}else Pm(i,a.type,a.stateNode);else a.stateNode=Rm(i,n,a.memoizedProps);else l!==n?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,n===null?Pm(i,a.type,a.stateNode):Rm(i,n,a.memoizedProps)):n===null&&a.stateNode!==null&&Vo(a,a.memoizedProps,t.memoizedProps)}break;case 27:ne(e,a),ie(a),n&512&&(Ba||t===null||Be(t,t.return)),t!==null&&n&4&&Vo(a,a.memoizedProps,t.memoizedProps);break;case 5:if(ne(e,a),ie(a),n&512&&(Ba||t===null||Be(t,t.return)),a.flags&32){i=a.stateNode;try{rn(i,"")}catch(H){pa(a,a.return,H)}}n&4&&a.stateNode!=null&&(i=a.memoizedProps,Vo(a,i,t!==null?t.memoizedProps:i)),n&1024&&(Yo=!0);break;case 6:if(ne(e,a),ie(a),n&4){if(a.stateNode===null)throw Error(s(162));n=a.memoizedProps,t=a.stateNode;try{t.nodeValue=n}catch(H){pa(a,a.return,H)}}break;case 3:if(Ql=null,i=Le,Le=Vl(e.containerInfo),ne(e,a),Le=i,ie(a),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Jn(e.containerInfo)}catch(H){pa(a,a.return,H)}Yo&&(Yo=!1,Pc(a));break;case 4:n=Le,Le=Vl(a.stateNode.containerInfo),ne(e,a),ie(a),Le=n;break;case 12:ne(e,a),ie(a);break;case 31:ne(e,a),ie(a),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,Ol(a,n)));break;case 13:ne(e,a),ie(a),a.child.flags&8192&&a.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Rl=oe()),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,Ol(a,n)));break;case 22:i=a.memoizedState!==null;var p=t!==null&&t.memoizedState!==null,T=We,D=Ba;if(We=T||i,Ba=D||p,ne(e,a),Ba=D,We=T,ie(a),n&8192)a:for(e=a.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(t===null||p||We||Ba||Xt(a)),t=null,e=a;;){if(e.tag===5||e.tag===26){if(t===null){p=t=e;try{if(l=p.stateNode,i)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{u=p.stateNode;var N=p.memoizedProps.style,A=N!=null&&N.hasOwnProperty("display")?N.display:null;u.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(H){pa(p,p.return,H)}}}else if(e.tag===6){if(t===null){p=e;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(H){pa(p,p.return,H)}}}else if(e.tag===18){if(t===null){p=e;try{var C=p.stateNode;i?Am(C,!0):Am(p.stateNode,!1)}catch(H){pa(p,p.return,H)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===a)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break a;for(;e.sibling===null;){if(e.return===null||e.return===a)break a;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=a.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,Ol(a,t))));break;case 19:ne(e,a),ie(a),n&4&&(n=a.updateQueue,n!==null&&(a.updateQueue=null,Ol(a,n)));break;case 30:break;case 21:break;default:ne(e,a),ie(a)}}function ie(a){var e=a.flags;if(e&2){try{for(var t,n=a.return;n!==null;){if(wc(n)){t=n;break}n=n.return}if(t==null)throw Error(s(160));switch(t.tag){case 27:var i=t.stateNode,l=qo(a);jl(a,l,i);break;case 5:var r=t.stateNode;t.flags&32&&(rn(r,""),t.flags&=-33);var u=qo(a);jl(a,u,r);break;case 3:case 4:var p=t.stateNode.containerInfo,T=qo(a);Qo(a,T,p);break;default:throw Error(s(161))}}catch(D){pa(a,a.return,D)}a.flags&=-3}e&4096&&(a.flags&=-4097)}function Pc(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var e=a;Pc(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),a=a.sibling}}function $e(a,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Lc(a,e.alternate,e),e=e.sibling}function Xt(a){for(a=a.child;a!==null;){var e=a;switch(e.tag){case 0:case 11:case 14:case 15:kt(4,e,e.return),Xt(e);break;case 1:Be(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Ac(e,e.return,t),Xt(e);break;case 27:Ai(e.stateNode);case 26:case 5:Be(e,e.return),Xt(e);break;case 22:e.memoizedState===null&&Xt(e);break;case 30:Xt(e);break;default:Xt(e)}a=a.sibling}}function at(a,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=a,l=e,r=l.flags;switch(l.tag){case 0:case 11:case 15:at(i,l,t),fi(4,l);break;case 1:if(at(i,l,t),n=l,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){pa(n,n.return,T)}if(n=l,i=n.updateQueue,i!==null){var u=n.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)pd(p[i],u)}catch(T){pa(n,n.return,T)}}t&&r&64&&Tc(l),hi(l,l.return);break;case 27:Dc(l);case 26:case 5:at(i,l,t),t&&n===null&&r&4&&Cc(l),hi(l,l.return);break;case 12:at(i,l,t);break;case 31:at(i,l,t),t&&r&4&&Nc(i,l);break;case 13:at(i,l,t),t&&r&4&&Rc(i,l);break;case 22:l.memoizedState===null&&at(i,l,t),hi(l,l.return);break;case 30:break;default:at(i,l,t)}e=e.sibling}}function Xo(a,e){var t=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(a!=null&&a.refCount++,t!=null&&ti(t))}function Wo(a,e){a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&ti(a))}function je(a,e,t,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jc(a,e,t,n),e=e.sibling}function Jc(a,e,t,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:je(a,e,t,n),i&2048&&fi(9,e);break;case 1:je(a,e,t,n);break;case 3:je(a,e,t,n),i&2048&&(a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&ti(a)));break;case 12:if(i&2048){je(a,e,t,n),a=e.stateNode;try{var l=e.memoizedProps,r=l.id,u=l.onPostCommit;typeof u=="function"&&u(r,e.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(p){pa(e,e.return,p)}}else je(a,e,t,n);break;case 31:je(a,e,t,n);break;case 13:je(a,e,t,n);break;case 23:break;case 22:l=e.stateNode,r=e.alternate,e.memoizedState!==null?l._visibility&2?je(a,e,t,n):bi(a,e):l._visibility&2?je(a,e,t,n):(l._visibility|=2,Cn(a,e,t,n,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Xo(r,e);break;case 24:je(a,e,t,n),i&2048&&Wo(e.alternate,e);break;default:je(a,e,t,n)}}function Cn(a,e,t,n,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=a,r=e,u=t,p=n,T=r.flags;switch(r.tag){case 0:case 11:case 15:Cn(l,r,u,p,i),fi(8,r);break;case 23:break;case 22:var D=r.stateNode;r.memoizedState!==null?D._visibility&2?Cn(l,r,u,p,i):bi(l,r):(D._visibility|=2,Cn(l,r,u,p,i)),i&&T&2048&&Xo(r.alternate,r);break;case 24:Cn(l,r,u,p,i),i&&T&2048&&Wo(r.alternate,r);break;default:Cn(l,r,u,p,i)}e=e.sibling}}function bi(a,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=a,n=e,i=n.flags;switch(n.tag){case 22:bi(t,n),i&2048&&Xo(n.alternate,n);break;case 24:bi(t,n),i&2048&&Wo(n.alternate,n);break;default:bi(t,n)}e=e.sibling}}var ki=8192;function wn(a,e,t){if(a.subtreeFlags&ki)for(a=a.child;a!==null;)Fc(a,e,t),a=a.sibling}function Fc(a,e,t){switch(a.tag){case 26:wn(a,e,t),a.flags&ki&&a.memoizedState!==null&&Gf(t,Le,a.memoizedState,a.memoizedProps);break;case 5:wn(a,e,t);break;case 3:case 4:var n=Le;Le=Vl(a.stateNode.containerInfo),wn(a,e,t),Le=n;break;case 22:a.memoizedState===null&&(n=a.alternate,n!==null&&n.memoizedState!==null?(n=ki,ki=16777216,wn(a,e,t),ki=n):wn(a,e,t));break;default:wn(a,e,t)}}function Ic(a){var e=a.alternate;if(e!==null&&(a=e.child,a!==null)){e.child=null;do e=a.sibling,a.sibling=null,a=e;while(a!==null)}}function Si(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var n=e[t];Ia=n,_c(n,a)}Ic(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Uc(a),a=a.sibling}function Uc(a){switch(a.tag){case 0:case 11:case 15:Si(a),a.flags&2048&&kt(9,a,a.return);break;case 3:Si(a);break;case 12:Si(a);break;case 22:var e=a.stateNode;a.memoizedState!==null&&e._visibility&2&&(a.return===null||a.return.tag!==13)?(e._visibility&=-3,Nl(a)):Si(a);break;default:Si(a)}}function Nl(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var n=e[t];Ia=n,_c(n,a)}Ic(a)}for(a=a.child;a!==null;){switch(e=a,e.tag){case 0:case 11:case 15:kt(8,e,e.return),Nl(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Nl(e));break;default:Nl(e)}a=a.sibling}}function _c(a,e){for(;Ia!==null;){var t=Ia;switch(t.tag){case 0:case 11:case 15:kt(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ti(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,Ia=n;else a:for(t=a;Ia!==null;){n=Ia;var i=n.sibling,l=n.return;if(jc(n),n===t){Ia=null;break a}if(i!==null){i.return=l,Ia=i;break a}Ia=l}}}var rf={getCacheForType:function(a){var e=za(Oa),t=e.data.get(a);return t===void 0&&(t=a(),e.data.set(a,t)),t},cacheSignal:function(){return za(Oa).controller.signal}},of=typeof WeakMap=="function"?WeakMap:Map,da=0,ya=null,na=null,la=0,ma=0,ge=null,St=!1,Dn=!1,Zo=!1,et=0,wa=0,yt=0,Wt=0,$o=0,fe=0,Mn=0,yi=null,le=null,as=!1,Rl=0,Hc=0,Bl=1/0,Pl=null,vt=null,Pa=0,Et=null,Ln=null,tt=0,es=0,ts=null,Kc=null,vi=0,ns=null;function he(){return(da&2)!==0&&la!==0?la&-la:L.T!==null?us():lu()}function zc(){if(fe===0)if((la&536870912)===0||oa){var a=zi;zi<<=1,(zi&3932160)===0&&(zi=262144),fe=a}else fe=536870912;return a=me.current,a!==null&&(a.flags|=32),fe}function re(a,e,t){(a===ya&&(ma===2||ma===9)||a.cancelPendingCommit!==null)&&(jn(a,0),xt(a,la,fe,!1)),Hn(a,t),((da&2)===0||a!==ya)&&(a===ya&&((da&2)===0&&(Wt|=t),wa===4&&xt(a,la,fe,!1)),Pe(a))}function Gc(a,e,t){if((da&6)!==0)throw Error(s(327));var n=!t&&(e&127)===0&&(e&a.expiredLanes)===0||_n(a,e),i=n?df(a,e):ls(a,e,!0),l=n;do{if(i===0){Dn&&!n&&xt(a,e,0,!1);break}else{if(t=a.current.alternate,l&&!sf(t)){i=ls(a,e,!1),l=!1;continue}if(i===2){if(l=e,a.errorRecoveryDisabledLanes&l)var r=0;else r=a.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;a:{var u=a;i=yi;var p=u.current.memoizedState.isDehydrated;if(p&&(jn(u,r).flags|=256),r=ls(u,r,!1),r!==2){if(Zo&&!p){u.errorRecoveryDisabledLanes|=l,Wt|=l,i=4;break a}l=le,le=i,l!==null&&(le===null?le=l:le.push.apply(le,l))}i=r}if(l=!1,i!==2)continue}}if(i===1){jn(a,0),xt(a,e,0,!0);break}a:{switch(n=a,l=i,l){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:xt(n,e,fe,!St);break a;case 2:le=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(i=Rl+300-oe(),10<i)){if(xt(n,e,fe,!St),Vi(n,0,!0)!==0)break a;tt=e,n.timeoutHandle=Em(Vc.bind(null,n,t,le,Pl,as,e,fe,Wt,Mn,St,l,"Throttled",-0,0),i);break a}Vc(n,t,le,Pl,as,e,fe,Wt,Mn,St,l,null,-0,0)}}break}while(!0);Pe(a)}function Vc(a,e,t,n,i,l,r,u,p,T,D,N,A,C){if(a.timeoutHandle=-1,N=e.subtreeFlags,N&8192||(N&16785408)===16785408){N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_e},Fc(e,l,N);var H=(l&62914560)===l?Rl-oe():(l&4194048)===l?Hc-oe():0;if(H=Vf(N,H),H!==null){tt=l,a.cancelPendingCommit=H(am.bind(null,a,e,l,t,n,i,r,u,p,D,N,null,A,C)),xt(a,l,r,!T);return}}am(a,e,l,t,n,i,r,u,p)}function sf(a){for(var e=a;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var i=t[n],l=i.getSnapshot;i=i.value;try{if(!de(l(),i))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xt(a,e,t,n){e&=~$o,e&=~Wt,a.suspendedLanes|=e,a.pingedLanes&=~e,n&&(a.warmLanes|=e),n=a.expirationTimes;for(var i=e;0<i;){var l=31-ue(i),r=1<<l;n[l]=-1,i&=~r}t!==0&&tu(a,t,e)}function Jl(){return(da&6)===0?(Ei(0),!1):!0}function is(){if(na!==null){if(ma===0)var a=na.return;else a=na,Ge=Ht=null,yo(a),vn=null,ii=0,a=na;for(;a!==null;)xc(a.alternate,a),a=a.return;na=null}}function jn(a,e){var t=a.timeoutHandle;t!==-1&&(a.timeoutHandle=-1,Df(t)),t=a.cancelPendingCommit,t!==null&&(a.cancelPendingCommit=null,t()),tt=0,is(),ya=a,na=t=Ke(a.current,null),la=e,ma=0,ge=null,St=!1,Dn=_n(a,e),Zo=!1,Mn=fe=$o=Wt=yt=wa=0,le=yi=null,as=!1,(e&8)!==0&&(e|=e&32);var n=a.entangledLanes;if(n!==0)for(a=a.entanglements,n&=e;0<n;){var i=31-ue(n),l=1<<i;e|=a[i],n&=~l}return et=e,il(),t}function qc(a,e){aa=null,L.H=mi,e===yn||e===ml?(e=ud(),ma=3):e===oo?(e=ud(),ma=4):ma=e===Po?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,na===null&&(wa=1,Cl(a,ye(e,a.current)))}function Qc(){var a=me.current;return a===null?!0:(la&4194048)===la?Te===null:(la&62914560)===la||(la&536870912)!==0?a===Te:!1}function Yc(){var a=L.H;return L.H=mi,a===null?mi:a}function Xc(){var a=L.A;return L.A=rf,a}function Fl(){wa=4,St||(la&4194048)!==la&&me.current!==null||(Dn=!0),(yt&134217727)===0&&(Wt&134217727)===0||ya===null||xt(ya,la,fe,!1)}function ls(a,e,t){var n=da;da|=2;var i=Yc(),l=Xc();(ya!==a||la!==e)&&(Pl=null,jn(a,e)),e=!1;var r=wa;a:do try{if(ma!==0&&na!==null){var u=na,p=ge;switch(ma){case 8:is(),r=6;break a;case 3:case 2:case 9:case 6:me.current===null&&(e=!0);var T=ma;if(ma=0,ge=null,On(a,u,p,T),t&&Dn){r=0;break a}break;default:T=ma,ma=0,ge=null,On(a,u,p,T)}}uf(),r=wa;break}catch(D){qc(a,D)}while(!0);return e&&a.shellSuspendCounter++,Ge=Ht=null,da=n,L.H=i,L.A=l,na===null&&(ya=null,la=0,il()),r}function uf(){for(;na!==null;)Wc(na)}function df(a,e){var t=da;da|=2;var n=Yc(),i=Xc();ya!==a||la!==e?(Pl=null,Bl=oe()+500,jn(a,e)):Dn=_n(a,e);a:do try{if(ma!==0&&na!==null){e=na;var l=ge;e:switch(ma){case 1:ma=0,ge=null,On(a,e,l,1);break;case 2:case 9:if(od(l)){ma=0,ge=null,Zc(e);break}e=function(){ma!==2&&ma!==9||ya!==a||(ma=7),Pe(a)},l.then(e,e);break a;case 3:ma=7;break a;case 4:ma=5;break a;case 7:od(l)?(ma=0,ge=null,Zc(e)):(ma=0,ge=null,On(a,e,l,7));break;case 5:var r=null;switch(na.tag){case 26:r=na.memoizedState;case 5:case 27:var u=na;if(r?Jm(r):u.stateNode.complete){ma=0,ge=null;var p=u.sibling;if(p!==null)na=p;else{var T=u.return;T!==null?(na=T,Il(T)):na=null}break e}}ma=0,ge=null,On(a,e,l,5);break;case 6:ma=0,ge=null,On(a,e,l,6);break;case 8:is(),wa=6;break a;default:throw Error(s(462))}}cf();break}catch(D){qc(a,D)}while(!0);return Ge=Ht=null,L.H=n,L.A=i,da=t,na!==null?0:(ya=null,la=0,il(),wa)}function cf(){for(;na!==null&&!Np();)Wc(na)}function Wc(a){var e=vc(a.alternate,a,et);a.memoizedProps=a.pendingProps,e===null?Il(a):na=e}function Zc(a){var e=a,t=e.alternate;switch(e.tag){case 15:case 0:e=fc(t,e,e.pendingProps,e.type,void 0,la);break;case 11:e=fc(t,e,e.pendingProps,e.type.render,e.ref,la);break;case 5:yo(e);default:xc(t,e),e=na=Xu(e,et),e=vc(t,e,et)}a.memoizedProps=a.pendingProps,e===null?Il(a):na=e}function On(a,e,t,n){Ge=Ht=null,yo(e),vn=null,ii=0;var i=e.return;try{if(Zg(a,i,e,t,la)){wa=1,Cl(a,ye(t,a.current)),na=null;return}}catch(l){if(i!==null)throw na=i,l;wa=1,Cl(a,ye(t,a.current)),na=null;return}e.flags&32768?(oa||n===1?a=!0:Dn||(la&536870912)!==0?a=!1:(St=a=!0,(n===2||n===9||n===3||n===6)&&(n=me.current,n!==null&&n.tag===13&&(n.flags|=16384))),$c(e,a)):Il(e)}function Il(a){var e=a;do{if((e.flags&32768)!==0){$c(e,St);return}a=e.return;var t=ef(e.alternate,e,et);if(t!==null){na=t;return}if(e=e.sibling,e!==null){na=e;return}na=e=a}while(e!==null);wa===0&&(wa=5)}function $c(a,e){do{var t=tf(a.alternate,a);if(t!==null){t.flags&=32767,na=t;return}if(t=a.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(a=a.sibling,a!==null)){na=a;return}na=a=t}while(a!==null);wa=6,na=null}function am(a,e,t,n,i,l,r,u,p){a.cancelPendingCommit=null;do Ul();while(Pa!==0);if((da&6)!==0)throw Error(s(327));if(e!==null){if(e===a.current)throw Error(s(177));if(l=e.lanes|e.childLanes,l|=Vr,Kp(a,t,l,r,u,p),a===ya&&(na=ya=null,la=0),Ln=e,Et=a,tt=t,es=l,ts=i,Kc=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,ff(Hi,function(){return lm(),null})):(a.callbackNode=null,a.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=L.T,L.T=null,i=P.p,P.p=2,r=da,da|=4;try{nf(a,e,t)}finally{da=r,P.p=i,L.T=n}}Pa=1,em(),tm(),nm()}}function em(){if(Pa===1){Pa=0;var a=Et,e=Ln,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=L.T,L.T=null;var n=P.p;P.p=2;var i=da;da|=4;try{Bc(e,a);var l=bs,r=_u(a.containerInfo),u=l.focusedElem,p=l.selectionRange;if(r!==u&&u&&u.ownerDocument&&Uu(u.ownerDocument.documentElement,u)){if(p!==null&&_r(u)){var T=p.start,D=p.end;if(D===void 0&&(D=T),"selectionStart"in u)u.selectionStart=T,u.selectionEnd=Math.min(D,u.value.length);else{var N=u.ownerDocument||document,A=N&&N.defaultView||window;if(A.getSelection){var C=A.getSelection(),H=u.textContent.length,Q=Math.min(p.start,H),ba=p.end===void 0?Q:Math.min(p.end,H);!C.extend&&Q>ba&&(r=ba,ba=Q,Q=r);var v=Iu(u,Q),b=Iu(u,ba);if(v&&b&&(C.rangeCount!==1||C.anchorNode!==v.node||C.anchorOffset!==v.offset||C.focusNode!==b.node||C.focusOffset!==b.offset)){var x=N.createRange();x.setStart(v.node,v.offset),C.removeAllRanges(),Q>ba?(C.addRange(x),C.extend(b.node,b.offset)):(x.setEnd(b.node,b.offset),C.addRange(x))}}}}for(N=[],C=u;C=C.parentNode;)C.nodeType===1&&N.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<N.length;u++){var O=N[u];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Zl=!!hs,bs=hs=null}finally{da=i,P.p=n,L.T=t}}a.current=e,Pa=2}}function tm(){if(Pa===2){Pa=0;var a=Et,e=Ln,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=L.T,L.T=null;var n=P.p;P.p=2;var i=da;da|=4;try{Lc(a,e.alternate,e)}finally{da=i,P.p=n,L.T=t}}Pa=3}}function nm(){if(Pa===4||Pa===3){Pa=0,Rp();var a=Et,e=Ln,t=tt,n=Kc;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Pa=5:(Pa=0,Ln=Et=null,im(a,a.pendingLanes));var i=a.pendingLanes;if(i===0&&(vt=null),Er(t),e=e.stateNode,se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(Un,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=L.T,i=P.p,P.p=2,L.T=null;try{for(var l=a.onRecoverableError,r=0;r<n.length;r++){var u=n[r];l(u.value,{componentStack:u.stack})}}finally{L.T=e,P.p=i}}(tt&3)!==0&&Ul(),Pe(a),i=a.pendingLanes,(t&261930)!==0&&(i&42)!==0?a===ns?vi++:(vi=0,ns=a):vi=0,Ei(0)}}function im(a,e){(a.pooledCacheLanes&=e)===0&&(e=a.pooledCache,e!=null&&(a.pooledCache=null,ti(e)))}function Ul(){return em(),tm(),nm(),lm()}function lm(){if(Pa!==5)return!1;var a=Et,e=es;es=0;var t=Er(tt),n=L.T,i=P.p;try{P.p=32>t?32:t,L.T=null,t=ts,ts=null;var l=Et,r=tt;if(Pa=0,Ln=Et=null,tt=0,(da&6)!==0)throw Error(s(331));var u=da;if(da|=4,Uc(l.current),Jc(l,l.current,r,t),da=u,Ei(0,!1),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(Un,l)}catch{}return!0}finally{P.p=i,L.T=n,im(a,e)}}function rm(a,e,t){e=ye(t,e),e=Bo(a.stateNode,e,2),a=ft(a,e,2),a!==null&&(Hn(a,2),Pe(a))}function pa(a,e,t){if(a.tag===3)rm(a,a,t);else for(;e!==null;){if(e.tag===3){rm(e,a,t);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(vt===null||!vt.has(n))){a=ye(t,a),t=oc(2),n=ft(e,t,2),n!==null&&(sc(t,n,e,a),Hn(n,2),Pe(n));break}}e=e.return}}function rs(a,e,t){var n=a.pingCache;if(n===null){n=a.pingCache=new of;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(t)||(Zo=!0,i.add(t),a=mf.bind(null,a,e,t),e.then(a,a))}function mf(a,e,t){var n=a.pingCache;n!==null&&n.delete(e),a.pingedLanes|=a.suspendedLanes&t,a.warmLanes&=~t,ya===a&&(la&t)===t&&(wa===4||wa===3&&(la&62914560)===la&&300>oe()-Rl?(da&2)===0&&jn(a,0):$o|=t,Mn===la&&(Mn=0)),Pe(a)}function om(a,e){e===0&&(e=eu()),a=It(a,e),a!==null&&(Hn(a,e),Pe(a))}function pf(a){var e=a.memoizedState,t=0;e!==null&&(t=e.retryLane),om(a,t)}function gf(a,e){var t=0;switch(a.tag){case 31:case 13:var n=a.stateNode,i=a.memoizedState;i!==null&&(t=i.retryLane);break;case 19:n=a.stateNode;break;case 22:n=a.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(e),om(a,t)}function ff(a,e){return kr(a,e)}var _l=null,Nn=null,os=!1,Hl=!1,ss=!1,Tt=0;function Pe(a){a!==Nn&&a.next===null&&(Nn===null?_l=Nn=a:Nn=Nn.next=a),Hl=!0,os||(os=!0,bf())}function Ei(a,e){if(!ss&&Hl){ss=!0;do for(var t=!1,n=_l;n!==null;){if(a!==0){var i=n.pendingLanes;if(i===0)var l=0;else{var r=n.suspendedLanes,u=n.pingedLanes;l=(1<<31-ue(42|a)+1)-1,l&=i&~(r&~u),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,cm(n,l))}else l=la,l=Vi(n,n===ya?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||_n(n,l)||(t=!0,cm(n,l));n=n.next}while(t);ss=!1}}function hf(){sm()}function sm(){Hl=os=!1;var a=0;Tt!==0&&wf()&&(a=Tt);for(var e=oe(),t=null,n=_l;n!==null;){var i=n.next,l=um(n,e);l===0?(n.next=null,t===null?_l=i:t.next=i,i===null&&(Nn=t)):(t=n,(a!==0||(l&3)!==0)&&(Hl=!0)),n=i}Pa!==0&&Pa!==5||Ei(a),Tt!==0&&(Tt=0)}function um(a,e){for(var t=a.suspendedLanes,n=a.pingedLanes,i=a.expirationTimes,l=a.pendingLanes&-62914561;0<l;){var r=31-ue(l),u=1<<r,p=i[r];p===-1?((u&t)===0||(u&n)!==0)&&(i[r]=Hp(u,e)):p<=e&&(a.expiredLanes|=u),l&=~u}if(e=ya,t=la,t=Vi(a,a===e?t:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),n=a.callbackNode,t===0||a===e&&(ma===2||ma===9)||a.cancelPendingCommit!==null)return n!==null&&n!==null&&Sr(n),a.callbackNode=null,a.callbackPriority=0;if((t&3)===0||_n(a,t)){if(e=t&-t,e===a.callbackPriority)return e;switch(n!==null&&Sr(n),Er(t)){case 2:case 8:t=$s;break;case 32:t=Hi;break;case 268435456:t=au;break;default:t=Hi}return n=dm.bind(null,a),t=kr(t,n),a.callbackPriority=e,a.callbackNode=t,e}return n!==null&&n!==null&&Sr(n),a.callbackPriority=2,a.callbackNode=null,2}function dm(a,e){if(Pa!==0&&Pa!==5)return a.callbackNode=null,a.callbackPriority=0,null;var t=a.callbackNode;if(Ul()&&a.callbackNode!==t)return null;var n=la;return n=Vi(a,a===ya?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),n===0?null:(Gc(a,n,e),um(a,oe()),a.callbackNode!=null&&a.callbackNode===t?dm.bind(null,a):null)}function cm(a,e){if(Ul())return null;Gc(a,e,!0)}function bf(){Mf(function(){(da&6)!==0?kr(Zs,hf):sm()})}function us(){if(Tt===0){var a=kn;a===0&&(a=Ki,Ki<<=1,(Ki&261888)===0&&(Ki=256)),Tt=a}return Tt}function mm(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:Xi(""+a)}function pm(a,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,a.id&&t.setAttribute("form",a.id),e.parentNode.insertBefore(t,e),a=new FormData(a),t.parentNode.removeChild(t),a}function kf(a,e,t,n,i){if(e==="submit"&&t&&t.stateNode===i){var l=mm((i[ae]||null).action),r=n.submitter;r&&(e=(e=r[ae]||null)?mm(e.formAction):r.getAttribute("formAction"),e!==null&&(l=e,r=null));var u=new al("action","action",null,n,i);a.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Tt!==0){var p=r?pm(i,r):new FormData(i);Mo(t,{pending:!0,data:p,method:i.method,action:l},null,p)}}else typeof l=="function"&&(u.preventDefault(),p=r?pm(i,r):new FormData(i),Mo(t,{pending:!0,data:p,method:i.method,action:l},l,p))},currentTarget:i}]})}}for(var ds=0;ds<Gr.length;ds++){var cs=Gr[ds],Sf=cs.toLowerCase(),yf=cs[0].toUpperCase()+cs.slice(1);Me(Sf,"on"+yf)}Me(zu,"onAnimationEnd"),Me(Gu,"onAnimationIteration"),Me(Vu,"onAnimationStart"),Me("dblclick","onDoubleClick"),Me("focusin","onFocus"),Me("focusout","onBlur"),Me(Bg,"onTransitionRun"),Me(Pg,"onTransitionStart"),Me(Jg,"onTransitionCancel"),Me(qu,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xi));function gm(a,e){e=(e&4)!==0;for(var t=0;t<a.length;t++){var n=a[t],i=n.event;n=n.listeners;a:{var l=void 0;if(e)for(var r=n.length-1;0<=r;r--){var u=n[r],p=u.instance,T=u.currentTarget;if(u=u.listener,p!==l&&i.isPropagationStopped())break a;l=u,i.currentTarget=T;try{l(i)}catch(D){nl(D)}i.currentTarget=null,l=p}else for(r=0;r<n.length;r++){if(u=n[r],p=u.instance,T=u.currentTarget,u=u.listener,p!==l&&i.isPropagationStopped())break a;l=u,i.currentTarget=T;try{l(i)}catch(D){nl(D)}i.currentTarget=null,l=p}}}}function ia(a,e){var t=e[xr];t===void 0&&(t=e[xr]=new Set);var n=a+"__bubble";t.has(n)||(fm(e,a,2,!1),t.add(n))}function ms(a,e,t){var n=0;e&&(n|=4),fm(t,a,n,e)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function ps(a){if(!a[Kl]){a[Kl]=!0,su.forEach(function(t){t!=="selectionchange"&&(vf.has(t)||ms(t,!1,a),ms(t,!0,a))});var e=a.nodeType===9?a:a.ownerDocument;e===null||e[Kl]||(e[Kl]=!0,ms("selectionchange",!1,e))}}function fm(a,e,t,n){switch(zm(e)){case 2:var i=Yf;break;case 8:i=Xf;break;default:i=Ds}t=i.bind(null,e,t,a),i=void 0,!Or||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?a.addEventListener(e,t,{capture:!0,passive:i}):a.addEventListener(e,t,!0):i!==void 0?a.addEventListener(e,t,{passive:i}):a.addEventListener(e,t,!1)}function gs(a,e,t,n,i){var l=n;if((e&1)===0&&(e&2)===0&&n!==null)a:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var u=n.stateNode.containerInfo;if(u===i)break;if(r===4)for(r=n.return;r!==null;){var p=r.tag;if((p===3||p===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;u!==null;){if(r=an(u),r===null)return;if(p=r.tag,p===5||p===6||p===26||p===27){n=l=r;continue a}u=u.parentNode}}n=n.return}yu(function(){var T=l,D=Lr(t),N=[];a:{var A=Qu.get(a);if(A!==void 0){var C=al,H=a;switch(a){case"keypress":if(Zi(t)===0)break a;case"keydown":case"keyup":C=pg;break;case"focusin":H="focus",C=Pr;break;case"focusout":H="blur",C=Pr;break;case"beforeblur":case"afterblur":C=Pr;break;case"click":if(t.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=hg;break;case zu:case Gu:case Vu:C=ig;break;case qu:C=kg;break;case"scroll":case"scrollend":C=$p;break;case"wheel":C=yg;break;case"copy":case"cut":case"paste":C=rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Au;break;case"toggle":case"beforetoggle":C=Eg}var Q=(e&4)!==0,ba=!Q&&(a==="scroll"||a==="scrollend"),v=Q?A!==null?A+"Capture":null:A;Q=[];for(var b=T,x;b!==null;){var O=b;if(x=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||x===null||v===null||(O=Gn(b,v),O!=null&&Q.push(Ti(b,O,x))),ba)break;b=b.return}0<Q.length&&(A=new C(A,H,null,t,D),N.push({event:A,listeners:Q}))}}if((e&7)===0){a:{if(A=a==="mouseover"||a==="pointerover",C=a==="mouseout"||a==="pointerout",A&&t!==Mr&&(H=t.relatedTarget||t.fromElement)&&(an(H)||H[$t]))break a;if((C||A)&&(A=D.window===D?D:(A=D.ownerDocument)?A.defaultView||A.parentWindow:window,C?(H=t.relatedTarget||t.toElement,C=T,H=H?an(H):null,H!==null&&(ba=m(H),Q=H.tag,H!==ba||Q!==5&&Q!==27&&Q!==6)&&(H=null)):(C=null,H=T),C!==H)){if(Q=xu,O="onMouseLeave",v="onMouseEnter",b="mouse",(a==="pointerout"||a==="pointerover")&&(Q=Au,O="onPointerLeave",v="onPointerEnter",b="pointer"),ba=C==null?A:zn(C),x=H==null?A:zn(H),A=new Q(O,b+"leave",C,t,D),A.target=ba,A.relatedTarget=x,O=null,an(D)===T&&(Q=new Q(v,b+"enter",H,t,D),Q.target=x,Q.relatedTarget=ba,O=Q),ba=O,C&&H)e:{for(Q=Ef,v=C,b=H,x=0,O=v;O;O=Q(O))x++;O=0;for(var q=b;q;q=Q(q))O++;for(;0<x-O;)v=Q(v),x--;for(;0<O-x;)b=Q(b),O--;for(;x--;){if(v===b||b!==null&&v===b.alternate){Q=v;break e}v=Q(v),b=Q(b)}Q=null}else Q=null;C!==null&&hm(N,A,C,Q,!1),H!==null&&ba!==null&&hm(N,ba,H,Q,!0)}}a:{if(A=T?zn(T):window,C=A.nodeName&&A.nodeName.toLowerCase(),C==="select"||C==="input"&&A.type==="file")var sa=Nu;else if(ju(A))if(Ru)sa=Og;else{sa=Lg;var z=Mg}else C=A.nodeName,!C||C.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&Dr(T.elementType)&&(sa=Nu):sa=jg;if(sa&&(sa=sa(a,T))){Ou(N,sa,t,D);break a}z&&z(a,A,T),a==="focusout"&&T&&A.type==="number"&&T.memoizedProps.value!=null&&wr(A,"number",A.value)}switch(z=T?zn(T):window,a){case"focusin":(ju(z)||z.contentEditable==="true")&&(dn=z,Hr=T,$n=null);break;case"focusout":$n=Hr=dn=null;break;case"mousedown":Kr=!0;break;case"contextmenu":case"mouseup":case"dragend":Kr=!1,Hu(N,t,D);break;case"selectionchange":if(Rg)break;case"keydown":case"keyup":Hu(N,t,D)}var ea;if(Fr)a:{switch(a){case"compositionstart":var ra="onCompositionStart";break a;case"compositionend":ra="onCompositionEnd";break a;case"compositionupdate":ra="onCompositionUpdate";break a}ra=void 0}else un?Mu(a,t)&&(ra="onCompositionEnd"):a==="keydown"&&t.keyCode===229&&(ra="onCompositionStart");ra&&(Cu&&t.locale!=="ko"&&(un||ra!=="onCompositionStart"?ra==="onCompositionEnd"&&un&&(ea=vu()):(st=D,Nr="value"in st?st.value:st.textContent,un=!0)),z=zl(T,ra),0<z.length&&(ra=new Tu(ra,a,null,t,D),N.push({event:ra,listeners:z}),ea?ra.data=ea:(ea=Lu(t),ea!==null&&(ra.data=ea)))),(ea=Tg?Ag(a,t):Cg(a,t))&&(ra=zl(T,"onBeforeInput"),0<ra.length&&(z=new Tu("onBeforeInput","beforeinput",null,t,D),N.push({event:z,listeners:ra}),z.data=ea)),kf(N,a,T,t,D)}gm(N,e)})}function Ti(a,e,t){return{instance:a,listener:e,currentTarget:t}}function zl(a,e){for(var t=e+"Capture",n=[];a!==null;){var i=a,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Gn(a,t),i!=null&&n.unshift(Ti(a,i,l)),i=Gn(a,e),i!=null&&n.push(Ti(a,i,l))),a.tag===3)return n;a=a.return}return[]}function Ef(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function hm(a,e,t,n,i){for(var l=e._reactName,r=[];t!==null&&t!==n;){var u=t,p=u.alternate,T=u.stateNode;if(u=u.tag,p!==null&&p===n)break;u!==5&&u!==26&&u!==27||T===null||(p=T,i?(T=Gn(t,l),T!=null&&r.unshift(Ti(t,T,p))):i||(T=Gn(t,l),T!=null&&r.push(Ti(t,T,p)))),t=t.return}r.length!==0&&a.push({event:e,listeners:r})}var xf=/\r\n?/g,Tf=/\u0000|\uFFFD/g;function bm(a){return(typeof a=="string"?a:""+a).replace(xf,`
`).replace(Tf,"")}function km(a,e){return e=bm(e),bm(a)===e}function ha(a,e,t,n,i,l){switch(t){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||rn(a,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&rn(a,""+n);break;case"className":Qi(a,"class",n);break;case"tabIndex":Qi(a,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Qi(a,t,n);break;case"style":ku(a,n,l);break;case"data":if(e!=="object"){Qi(a,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||t!=="href")){a.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){a.removeAttribute(t);break}n=Xi(""+n),a.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){a.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(e!=="input"&&ha(a,e,"name",i.name,i,null),ha(a,e,"formEncType",i.formEncType,i,null),ha(a,e,"formMethod",i.formMethod,i,null),ha(a,e,"formTarget",i.formTarget,i,null)):(ha(a,e,"encType",i.encType,i,null),ha(a,e,"method",i.method,i,null),ha(a,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){a.removeAttribute(t);break}n=Xi(""+n),a.setAttribute(t,n);break;case"onClick":n!=null&&(a.onclick=_e);break;case"onScroll":n!=null&&ia("scroll",a);break;case"onScrollEnd":n!=null&&ia("scrollend",a);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(t=n.__html,t!=null){if(i.children!=null)throw Error(s(60));a.innerHTML=t}}break;case"multiple":a.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":a.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){a.removeAttribute("xlink:href");break}t=Xi(""+n),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(t,""+n):a.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(t,""):a.removeAttribute(t);break;case"capture":case"download":n===!0?a.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?a.setAttribute(t,n):a.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?a.setAttribute(t,n):a.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?a.removeAttribute(t):a.setAttribute(t,n);break;case"popover":ia("beforetoggle",a),ia("toggle",a),qi(a,"popover",n);break;case"xlinkActuate":Ue(a,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ue(a,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ue(a,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ue(a,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ue(a,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ue(a,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ue(a,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ue(a,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ue(a,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":qi(a,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Wp.get(t)||t,qi(a,t,n))}}function fs(a,e,t,n,i,l){switch(t){case"style":ku(a,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(t=n.__html,t!=null){if(i.children!=null)throw Error(s(60));a.innerHTML=t}}break;case"children":typeof n=="string"?rn(a,n):(typeof n=="number"||typeof n=="bigint")&&rn(a,""+n);break;case"onScroll":n!=null&&ia("scroll",a);break;case"onScrollEnd":n!=null&&ia("scrollend",a);break;case"onClick":n!=null&&(a.onclick=_e);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uu.hasOwnProperty(t))a:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),e=t.slice(2,i?t.length-7:void 0),l=a[ae]||null,l=l!=null?l[t]:null,typeof l=="function"&&a.removeEventListener(e,l,i),typeof n=="function")){typeof l!="function"&&l!==null&&(t in a?a[t]=null:a.hasAttribute(t)&&a.removeAttribute(t)),a.addEventListener(e,n,i);break a}t in a?a[t]=n:n===!0?a.setAttribute(t,""):qi(a,t,n)}}}function Va(a,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ia("error",a),ia("load",a);var n=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var r=t[l];if(r!=null)switch(l){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:ha(a,e,l,r,t,null)}}i&&ha(a,e,"srcSet",t.srcSet,t,null),n&&ha(a,e,"src",t.src,t,null);return;case"input":ia("invalid",a);var u=l=r=i=null,p=null,T=null;for(n in t)if(t.hasOwnProperty(n)){var D=t[n];if(D!=null)switch(n){case"name":i=D;break;case"type":r=D;break;case"checked":p=D;break;case"defaultChecked":T=D;break;case"value":l=D;break;case"defaultValue":u=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,e));break;default:ha(a,e,n,D,t,null)}}gu(a,l,u,p,T,r,i,!1);return;case"select":ia("invalid",a),n=r=l=null;for(i in t)if(t.hasOwnProperty(i)&&(u=t[i],u!=null))switch(i){case"value":l=u;break;case"defaultValue":r=u;break;case"multiple":n=u;default:ha(a,e,i,u,t,null)}e=l,t=r,a.multiple=!!n,e!=null?ln(a,!!n,e,!1):t!=null&&ln(a,!!n,t,!0);return;case"textarea":ia("invalid",a),l=i=n=null;for(r in t)if(t.hasOwnProperty(r)&&(u=t[r],u!=null))switch(r){case"value":n=u;break;case"defaultValue":i=u;break;case"children":l=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:ha(a,e,r,u,t,null)}hu(a,n,i,l);return;case"option":for(p in t)if(t.hasOwnProperty(p)&&(n=t[p],n!=null))switch(p){case"selected":a.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ha(a,e,p,n,t,null)}return;case"dialog":ia("beforetoggle",a),ia("toggle",a),ia("cancel",a),ia("close",a);break;case"iframe":case"object":ia("load",a);break;case"video":case"audio":for(n=0;n<xi.length;n++)ia(xi[n],a);break;case"image":ia("error",a),ia("load",a);break;case"details":ia("toggle",a);break;case"embed":case"source":case"link":ia("error",a),ia("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in t)if(t.hasOwnProperty(T)&&(n=t[T],n!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:ha(a,e,T,n,t,null)}return;default:if(Dr(e)){for(D in t)t.hasOwnProperty(D)&&(n=t[D],n!==void 0&&fs(a,e,D,n,t,void 0));return}}for(u in t)t.hasOwnProperty(u)&&(n=t[u],n!=null&&ha(a,e,u,n,t,null))}function Af(a,e,t,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,r=null,u=null,p=null,T=null,D=null;for(C in t){var N=t[C];if(t.hasOwnProperty(C)&&N!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":p=N;default:n.hasOwnProperty(C)||ha(a,e,C,null,n,N)}}for(var A in n){var C=n[A];if(N=t[A],n.hasOwnProperty(A)&&(C!=null||N!=null))switch(A){case"type":l=C;break;case"name":i=C;break;case"checked":T=C;break;case"defaultChecked":D=C;break;case"value":r=C;break;case"defaultValue":u=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(137,e));break;default:C!==N&&ha(a,e,A,C,n,N)}}Cr(a,r,u,p,T,D,l,i);return;case"select":C=r=u=A=null;for(l in t)if(p=t[l],t.hasOwnProperty(l)&&p!=null)switch(l){case"value":break;case"multiple":C=p;default:n.hasOwnProperty(l)||ha(a,e,l,null,n,p)}for(i in n)if(l=n[i],p=t[i],n.hasOwnProperty(i)&&(l!=null||p!=null))switch(i){case"value":A=l;break;case"defaultValue":u=l;break;case"multiple":r=l;default:l!==p&&ha(a,e,i,l,n,p)}e=u,t=r,n=C,A!=null?ln(a,!!t,A,!1):!!n!=!!t&&(e!=null?ln(a,!!t,e,!0):ln(a,!!t,t?[]:"",!1));return;case"textarea":C=A=null;for(u in t)if(i=t[u],t.hasOwnProperty(u)&&i!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ha(a,e,u,null,n,i)}for(r in n)if(i=n[r],l=t[r],n.hasOwnProperty(r)&&(i!=null||l!=null))switch(r){case"value":A=i;break;case"defaultValue":C=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==l&&ha(a,e,r,i,n,l)}fu(a,A,C);return;case"option":for(var H in t)if(A=t[H],t.hasOwnProperty(H)&&A!=null&&!n.hasOwnProperty(H))switch(H){case"selected":a.selected=!1;break;default:ha(a,e,H,null,n,A)}for(p in n)if(A=n[p],C=t[p],n.hasOwnProperty(p)&&A!==C&&(A!=null||C!=null))switch(p){case"selected":a.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:ha(a,e,p,A,n,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in t)A=t[Q],t.hasOwnProperty(Q)&&A!=null&&!n.hasOwnProperty(Q)&&ha(a,e,Q,null,n,A);for(T in n)if(A=n[T],C=t[T],n.hasOwnProperty(T)&&A!==C&&(A!=null||C!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,e));break;default:ha(a,e,T,A,n,C)}return;default:if(Dr(e)){for(var ba in t)A=t[ba],t.hasOwnProperty(ba)&&A!==void 0&&!n.hasOwnProperty(ba)&&fs(a,e,ba,void 0,n,A);for(D in n)A=n[D],C=t[D],!n.hasOwnProperty(D)||A===C||A===void 0&&C===void 0||fs(a,e,D,A,n,C);return}}for(var v in t)A=t[v],t.hasOwnProperty(v)&&A!=null&&!n.hasOwnProperty(v)&&ha(a,e,v,null,n,A);for(N in n)A=n[N],C=t[N],!n.hasOwnProperty(N)||A===C||A==null&&C==null||ha(a,e,N,A,n,C)}function Sm(a){switch(a){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cf(){if(typeof performance.getEntriesByType=="function"){for(var a=0,e=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var i=t[n],l=i.transferSize,r=i.initiatorType,u=i.duration;if(l&&u&&Sm(r)){for(r=0,u=i.responseEnd,n+=1;n<t.length;n++){var p=t[n],T=p.startTime;if(T>u)break;var D=p.transferSize,N=p.initiatorType;D&&Sm(N)&&(p=p.responseEnd,r+=D*(p<u?1:(u-T)/(p-T)))}if(--n,e+=8*(l+r)/(i.duration/1e3),a++,10<a)break}}if(0<a)return e/a/1e6}return navigator.connection&&(a=navigator.connection.downlink,typeof a=="number")?a:5}var hs=null,bs=null;function Gl(a){return a.nodeType===9?a:a.ownerDocument}function ym(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vm(a,e){if(a===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&e==="foreignObject"?0:a}function ks(a,e){return a==="textarea"||a==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ss=null;function wf(){var a=window.event;return a&&a.type==="popstate"?a===Ss?!1:(Ss=a,!0):(Ss=null,!1)}var Em=typeof setTimeout=="function"?setTimeout:void 0,Df=typeof clearTimeout=="function"?clearTimeout:void 0,xm=typeof Promise=="function"?Promise:void 0,Mf=typeof queueMicrotask=="function"?queueMicrotask:typeof xm<"u"?function(a){return xm.resolve(null).then(a).catch(Lf)}:Em;function Lf(a){setTimeout(function(){throw a})}function At(a){return a==="head"}function Tm(a,e){var t=e,n=0;do{var i=t.nextSibling;if(a.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(n===0){a.removeChild(i),Jn(e);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")Ai(a.ownerDocument.documentElement);else if(t==="head"){t=a.ownerDocument.head,Ai(t);for(var l=t.firstChild;l;){var r=l.nextSibling,u=l.nodeName;l[Kn]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=r}}else t==="body"&&Ai(a.ownerDocument.body);t=i}while(t);Jn(e)}function Am(a,e){var t=a;a=0;do{var n=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(a===0)break;a--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||a++;t=n}while(t)}function ys(a){var e=a.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":ys(t),Tr(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}a.removeChild(t)}}function jf(a,e,t,n){for(;a.nodeType===1;){var i=t;if(a.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(n){if(!a[Kn])switch(e){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(l=a.getAttribute("rel"),l==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(l!==i.rel||a.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||a.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||a.getAttribute("title")!==(i.title==null?null:i.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(l=a.getAttribute("src"),(l!==(i.src==null?null:i.src)||a.getAttribute("type")!==(i.type==null?null:i.type)||a.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(e==="input"&&a.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&a.getAttribute("name")===l)return a}else return a;if(a=Ae(a.nextSibling),a===null)break}return null}function Of(a,e,t){if(e==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!t||(a=Ae(a.nextSibling),a===null))return null;return a}function Cm(a,e){for(;a.nodeType!==8;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!e||(a=Ae(a.nextSibling),a===null))return null;return a}function vs(a){return a.data==="$?"||a.data==="$~"}function Es(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState!=="loading"}function Nf(a,e){var t=a.ownerDocument;if(a.data==="$~")a._reactRetry=e;else if(a.data!=="$?"||t.readyState!=="loading")e();else{var n=function(){e(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),a._reactRetry=n}}function Ae(a){for(;a!=null;a=a.nextSibling){var e=a.nodeType;if(e===1||e===3)break;if(e===8){if(e=a.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return a}var xs=null;function wm(a){a=a.nextSibling;for(var e=0;a;){if(a.nodeType===8){var t=a.data;if(t==="/$"||t==="/&"){if(e===0)return Ae(a.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}a=a.nextSibling}return null}function Dm(a){a=a.previousSibling;for(var e=0;a;){if(a.nodeType===8){var t=a.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return a;e--}else t!=="/$"&&t!=="/&"||e++}a=a.previousSibling}return null}function Mm(a,e,t){switch(e=Gl(t),a){case"html":if(a=e.documentElement,!a)throw Error(s(452));return a;case"head":if(a=e.head,!a)throw Error(s(453));return a;case"body":if(a=e.body,!a)throw Error(s(454));return a;default:throw Error(s(451))}}function Ai(a){for(var e=a.attributes;e.length;)a.removeAttributeNode(e[0]);Tr(a)}var Ce=new Map,Lm=new Set;function Vl(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var nt=P.d;P.d={f:Rf,r:Bf,D:Pf,C:Jf,L:Ff,m:If,X:_f,S:Uf,M:Hf};function Rf(){var a=nt.f(),e=Jl();return a||e}function Bf(a){var e=en(a);e!==null&&e.tag===5&&e.type==="form"?qd(e):nt.r(a)}var Rn=typeof document>"u"?null:document;function jm(a,e,t){var n=Rn;if(n&&typeof e=="string"&&e){var i=ke(e);i='link[rel="'+a+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Lm.has(i)||(Lm.add(i),a={rel:a,crossOrigin:t,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),Va(e,"link",a),Fa(e),n.head.appendChild(e)))}}function Pf(a){nt.D(a),jm("dns-prefetch",a,null)}function Jf(a,e){nt.C(a,e),jm("preconnect",a,e)}function Ff(a,e,t){nt.L(a,e,t);var n=Rn;if(n&&a&&e){var i='link[rel="preload"][as="'+ke(e)+'"]';e==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+ke(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+ke(t.imageSizes)+'"]')):i+='[href="'+ke(a)+'"]';var l=i;switch(e){case"style":l=Bn(a);break;case"script":l=Pn(a)}Ce.has(l)||(a=w({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:a,as:e},t),Ce.set(l,a),n.querySelector(i)!==null||e==="style"&&n.querySelector(Ci(l))||e==="script"&&n.querySelector(wi(l))||(e=n.createElement("link"),Va(e,"link",a),Fa(e),n.head.appendChild(e)))}}function If(a,e){nt.m(a,e);var t=Rn;if(t&&a){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+ke(n)+'"][href="'+ke(a)+'"]',l=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Pn(a)}if(!Ce.has(l)&&(a=w({rel:"modulepreload",href:a},e),Ce.set(l,a),t.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(wi(l)))return}n=t.createElement("link"),Va(n,"link",a),Fa(n),t.head.appendChild(n)}}}function Uf(a,e,t){nt.S(a,e,t);var n=Rn;if(n&&a){var i=tn(n).hoistableStyles,l=Bn(a);e=e||"default";var r=i.get(l);if(!r){var u={loading:0,preload:null};if(r=n.querySelector(Ci(l)))u.loading=5;else{a=w({rel:"stylesheet",href:a,"data-precedence":e},t),(t=Ce.get(l))&&Ts(a,t);var p=r=n.createElement("link");Fa(p),Va(p,"link",a),p._p=new Promise(function(T,D){p.onload=T,p.onerror=D}),p.addEventListener("load",function(){u.loading|=1}),p.addEventListener("error",function(){u.loading|=2}),u.loading|=4,ql(r,e,n)}r={type:"stylesheet",instance:r,count:1,state:u},i.set(l,r)}}}function _f(a,e){nt.X(a,e);var t=Rn;if(t&&a){var n=tn(t).hoistableScripts,i=Pn(a),l=n.get(i);l||(l=t.querySelector(wi(i)),l||(a=w({src:a,async:!0},e),(e=Ce.get(i))&&As(a,e),l=t.createElement("script"),Fa(l),Va(l,"link",a),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Hf(a,e){nt.M(a,e);var t=Rn;if(t&&a){var n=tn(t).hoistableScripts,i=Pn(a),l=n.get(i);l||(l=t.querySelector(wi(i)),l||(a=w({src:a,async:!0,type:"module"},e),(e=Ce.get(i))&&As(a,e),l=t.createElement("script"),Fa(l),Va(l,"link",a),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Om(a,e,t,n){var i=(i=ta.current)?Vl(i):null;if(!i)throw Error(s(446));switch(a){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Bn(t.href),t=tn(i).hoistableStyles,n=t.get(e),n||(n={type:"style",instance:null,count:0,state:null},t.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){a=Bn(t.href);var l=tn(i).hoistableStyles,r=l.get(a);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(a,r),(l=i.querySelector(Ci(a)))&&!l._p&&(r.instance=l,r.state.loading=5),Ce.has(a)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ce.set(a,t),l||Kf(i,a,t,r.state))),e&&n===null)throw Error(s(528,""));return r}if(e&&n!==null)throw Error(s(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Pn(t),t=tn(i).hoistableScripts,n=t.get(e),n||(n={type:"script",instance:null,count:0,state:null},t.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,a))}}function Bn(a){return'href="'+ke(a)+'"'}function Ci(a){return'link[rel="stylesheet"]['+a+"]"}function Nm(a){return w({},a,{"data-precedence":a.precedence,precedence:null})}function Kf(a,e,t,n){a.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=a.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Va(e,"link",t),Fa(e),a.head.appendChild(e))}function Pn(a){return'[src="'+ke(a)+'"]'}function wi(a){return"script[async]"+a}function Rm(a,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var n=a.querySelector('style[data-href~="'+ke(t.href)+'"]');if(n)return e.instance=n,Fa(n),n;var i=w({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(a.ownerDocument||a).createElement("style"),Fa(n),Va(n,"style",i),ql(n,t.precedence,a),e.instance=n;case"stylesheet":i=Bn(t.href);var l=a.querySelector(Ci(i));if(l)return e.state.loading|=4,e.instance=l,Fa(l),l;n=Nm(t),(i=Ce.get(i))&&Ts(n,i),l=(a.ownerDocument||a).createElement("link"),Fa(l);var r=l;return r._p=new Promise(function(u,p){r.onload=u,r.onerror=p}),Va(l,"link",n),e.state.loading|=4,ql(l,t.precedence,a),e.instance=l;case"script":return l=Pn(t.src),(i=a.querySelector(wi(l)))?(e.instance=i,Fa(i),i):(n=t,(i=Ce.get(l))&&(n=w({},t),As(n,i)),a=a.ownerDocument||a,i=a.createElement("script"),Fa(i),Va(i,"link",n),a.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,ql(n,t.precedence,a));return e.instance}function ql(a,e,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,l=i,r=0;r<n.length;r++){var u=n[r];if(u.dataset.precedence===e)l=u;else if(l!==i)break}l?l.parentNode.insertBefore(a,l.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(a,e.firstChild))}function Ts(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.title==null&&(a.title=e.title)}function As(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.integrity==null&&(a.integrity=e.integrity)}var Ql=null;function Bm(a,e,t){if(Ql===null){var n=new Map,i=Ql=new Map;i.set(t,n)}else i=Ql,n=i.get(t),n||(n=new Map,i.set(t,n));if(n.has(a))return n;for(n.set(a,null),t=t.getElementsByTagName(a),i=0;i<t.length;i++){var l=t[i];if(!(l[Kn]||l[Ha]||a==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(e)||"";r=a+r;var u=n.get(r);u?u.push(l):n.set(r,[l])}}return n}function Pm(a,e,t){a=a.ownerDocument||a,a.head.insertBefore(t,e==="title"?a.querySelector("head > title"):null)}function zf(a,e,t){if(t===1||e.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return a=e.disabled,typeof e.precedence=="string"&&a==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Jm(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}function Gf(a,e,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Bn(n.href),l=e.querySelector(Ci(i));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Yl.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=l,Fa(l);return}l=e.ownerDocument||e,n=Nm(n),(i=Ce.get(i))&&Ts(n,i),l=l.createElement("link"),Fa(l);var r=l;r._p=new Promise(function(u,p){r.onload=u,r.onerror=p}),Va(l,"link",n),t.instance=l}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Yl.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}var Cs=0;function Vf(a,e){return a.stylesheets&&a.count===0&&Wl(a,a.stylesheets),0<a.count||0<a.imgCount?function(t){var n=setTimeout(function(){if(a.stylesheets&&Wl(a,a.stylesheets),a.unsuspend){var l=a.unsuspend;a.unsuspend=null,l()}},6e4+e);0<a.imgBytes&&Cs===0&&(Cs=62500*Cf());var i=setTimeout(function(){if(a.waitingForImages=!1,a.count===0&&(a.stylesheets&&Wl(a,a.stylesheets),a.unsuspend)){var l=a.unsuspend;a.unsuspend=null,l()}},(a.imgBytes>Cs?50:800)+e);return a.unsuspend=t,function(){a.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Yl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var Xl=null;function Wl(a,e){a.stylesheets=null,a.unsuspend!==null&&(a.count++,Xl=new Map,e.forEach(qf,a),Xl=null,Yl.call(a))}function qf(a,e){if(!(e.state.loading&4)){var t=Xl.get(a);if(t)var n=t.get(null);else{t=new Map,Xl.set(a,t);for(var i=a.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var r=i[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(t.set(r.dataset.precedence,r),n=r)}n&&t.set(null,n)}i=e.instance,r=i.getAttribute("data-precedence"),l=t.get(r)||n,l===n&&t.set(null,i),t.set(r,i),this.count++,n=Yl.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),l?l.parentNode.insertBefore(i,l.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(i,a.firstChild)),e.state.loading|=4}}var Di={$$typeof:X,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Qf(a,e,t,n,i,l,r,u,p){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yr(0),this.hiddenUpdates=yr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Fm(a,e,t,n,i,l,r,u,p,T,D,N){return a=new Qf(a,e,t,r,p,T,D,N,u),e=1,l===!0&&(e|=24),l=ce(3,null,null,e),a.current=l,l.stateNode=a,e=io(),e.refCount++,a.pooledCache=e,e.refCount++,l.memoizedState={element:n,isDehydrated:t,cache:e},so(l),a}function Im(a){return a?(a=pn,a):pn}function Um(a,e,t,n,i,l){i=Im(i),n.context===null?n.context=i:n.pendingContext=i,n=gt(e),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=ft(a,n,e),t!==null&&(re(t,a,e),ri(t,a,e))}function _m(a,e){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var t=a.retryLane;a.retryLane=t!==0&&t<e?t:e}}function ws(a,e){_m(a,e),(a=a.alternate)&&_m(a,e)}function Hm(a){if(a.tag===13||a.tag===31){var e=It(a,67108864);e!==null&&re(e,a,67108864),ws(a,67108864)}}function Km(a){if(a.tag===13||a.tag===31){var e=he();e=vr(e);var t=It(a,e);t!==null&&re(t,a,e),ws(a,e)}}var Zl=!0;function Yf(a,e,t,n){var i=L.T;L.T=null;var l=P.p;try{P.p=2,Ds(a,e,t,n)}finally{P.p=l,L.T=i}}function Xf(a,e,t,n){var i=L.T;L.T=null;var l=P.p;try{P.p=8,Ds(a,e,t,n)}finally{P.p=l,L.T=i}}function Ds(a,e,t,n){if(Zl){var i=Ms(n);if(i===null)gs(a,e,n,$l,t),Gm(a,n);else if(Zf(i,a,e,t,n))n.stopPropagation();else if(Gm(a,n),e&4&&-1<Wf.indexOf(a)){for(;i!==null;){var l=en(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=Rt(l.pendingLanes);if(r!==0){var u=l;for(u.pendingLanes|=2,u.entangledLanes|=2;r;){var p=1<<31-ue(r);u.entanglements[1]|=p,r&=~p}Pe(l),(da&6)===0&&(Bl=oe()+500,Ei(0))}}break;case 31:case 13:u=It(l,2),u!==null&&re(u,l,2),Jl(),ws(l,2)}if(l=Ms(n),l===null&&gs(a,e,n,$l,t),l===i)break;i=l}i!==null&&n.stopPropagation()}else gs(a,e,n,null,t)}}function Ms(a){return a=Lr(a),Ls(a)}var $l=null;function Ls(a){if($l=null,a=an(a),a!==null){var e=m(a);if(e===null)a=null;else{var t=e.tag;if(t===13){if(a=S(e),a!==null)return a;a=null}else if(t===31){if(a=E(e),a!==null)return a;a=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;a=null}else e!==a&&(a=null)}}return $l=a,null}function zm(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bp()){case Zs:return 2;case $s:return 8;case Hi:case Pp:return 32;case au:return 268435456;default:return 32}default:return 32}}var js=!1,Ct=null,wt=null,Dt=null,Mi=new Map,Li=new Map,Mt=[],Wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gm(a,e){switch(a){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Mi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(e.pointerId)}}function ji(a,e,t,n,i,l){return a===null||a.nativeEvent!==l?(a={blockedOn:e,domEventName:t,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},e!==null&&(e=en(e),e!==null&&Hm(e)),a):(a.eventSystemFlags|=n,e=a.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),a)}function Zf(a,e,t,n,i){switch(e){case"focusin":return Ct=ji(Ct,a,e,t,n,i),!0;case"dragenter":return wt=ji(wt,a,e,t,n,i),!0;case"mouseover":return Dt=ji(Dt,a,e,t,n,i),!0;case"pointerover":var l=i.pointerId;return Mi.set(l,ji(Mi.get(l)||null,a,e,t,n,i)),!0;case"gotpointercapture":return l=i.pointerId,Li.set(l,ji(Li.get(l)||null,a,e,t,n,i)),!0}return!1}function Vm(a){var e=an(a.target);if(e!==null){var t=m(e);if(t!==null){if(e=t.tag,e===13){if(e=S(t),e!==null){a.blockedOn=e,ru(a.priority,function(){Km(t)});return}}else if(e===31){if(e=E(t),e!==null){a.blockedOn=e,ru(a.priority,function(){Km(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){a.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}a.blockedOn=null}function ar(a){if(a.blockedOn!==null)return!1;for(var e=a.targetContainers;0<e.length;){var t=Ms(a.nativeEvent);if(t===null){t=a.nativeEvent;var n=new t.constructor(t.type,t);Mr=n,t.target.dispatchEvent(n),Mr=null}else return e=en(t),e!==null&&Hm(e),a.blockedOn=t,!1;e.shift()}return!0}function qm(a,e,t){ar(a)&&t.delete(e)}function $f(){js=!1,Ct!==null&&ar(Ct)&&(Ct=null),wt!==null&&ar(wt)&&(wt=null),Dt!==null&&ar(Dt)&&(Dt=null),Mi.forEach(qm),Li.forEach(qm)}function er(a,e){a.blockedOn===e&&(a.blockedOn=null,js||(js=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$f)))}var tr=null;function Qm(a){tr!==a&&(tr=a,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){tr===a&&(tr=null);for(var e=0;e<a.length;e+=3){var t=a[e],n=a[e+1],i=a[e+2];if(typeof n!="function"){if(Ls(n||t)===null)continue;break}var l=en(t);l!==null&&(a.splice(e,3),e-=3,Mo(l,{pending:!0,data:i,method:t.method,action:n},n,i))}}))}function Jn(a){function e(p){return er(p,a)}Ct!==null&&er(Ct,a),wt!==null&&er(wt,a),Dt!==null&&er(Dt,a),Mi.forEach(e),Li.forEach(e);for(var t=0;t<Mt.length;t++){var n=Mt[t];n.blockedOn===a&&(n.blockedOn=null)}for(;0<Mt.length&&(t=Mt[0],t.blockedOn===null);)Vm(t),t.blockedOn===null&&Mt.shift();if(t=(a.ownerDocument||a).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var i=t[n],l=t[n+1],r=i[ae]||null;if(typeof l=="function")r||Qm(t);else if(r){var u=null;if(l&&l.hasAttribute("formAction")){if(i=l,r=l[ae]||null)u=r.formAction;else if(Ls(i)!==null)continue}else u=r.action;typeof u=="function"?t[n+1]=u:(t.splice(n,3),n-=3),Qm(t)}}}function Ym(){function a(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",a),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",a),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Os(a){this._internalRoot=a}nr.prototype.render=Os.prototype.render=function(a){var e=this._internalRoot;if(e===null)throw Error(s(409));var t=e.current,n=he();Um(t,n,a,e,null,null)},nr.prototype.unmount=Os.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var e=a.containerInfo;Um(a.current,2,null,a,null,null),Jl(),e[$t]=null}};function nr(a){this._internalRoot=a}nr.prototype.unstable_scheduleHydration=function(a){if(a){var e=lu();a={blockedOn:null,target:a,priority:e};for(var t=0;t<Mt.length&&e!==0&&e<Mt[t].priority;t++);Mt.splice(t,0,a),t===0&&Vm(a)}};var Xm=d.version;if(Xm!=="19.2.3")throw Error(s(527,Xm,"19.2.3"));P.findDOMNode=function(a){var e=a._reactInternals;if(e===void 0)throw typeof a.render=="function"?Error(s(188)):(a=Object.keys(a).join(","),Error(s(268,a)));return a=h(e),a=a!==null?j(a):null,a=a===null?null:a.stateNode,a};var ah={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ir.isDisabled&&ir.supportsFiber)try{Un=ir.inject(ah),se=ir}catch{}}return Ni.createRoot=function(a,e){if(!f(a))throw Error(s(299));var t=!1,n="",i=nc,l=ic,r=lc;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Fm(a,1,!1,null,null,t,n,null,i,l,r,Ym),a[$t]=e.current,ps(a),new Os(e)},Ni.hydrateRoot=function(a,e,t){if(!f(a))throw Error(s(299));var n=!1,i="",l=nc,r=ic,u=lc,p=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.formState!==void 0&&(p=t.formState)),e=Fm(a,1,!0,e,t??null,n,i,p,l,r,u,Ym),e.context=Im(null),t=e.current,n=he(),n=vr(n),i=gt(n),i.callback=null,ft(t,i,n),t=n,e.current.lanes=t,Hn(e,t),Pe(e),a[$t]=e.current,ps(a),new nr(e)},Ni.version="19.2.3",Ni}var rp;function dh(){if(rp)return Bs.exports;rp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Bs.exports=uh(),Bs.exports}var ch=dh();var op="popstate";function mh(o={}){function d(f,m){let{pathname:S="/",search:E="",hash:y=""}=Zt(f.location.hash.substring(1));return!S.startsWith("/")&&!S.startsWith(".")&&(S="/"+S),Hs("",{pathname:S,search:E,hash:y},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function c(f,m){let S=f.document.querySelector("base"),E="";if(S&&S.getAttribute("href")){let y=f.location.href,h=y.indexOf("#");E=h===-1?y:y.slice(0,h)}return E+"#"+(typeof m=="string"?m:Pi(m))}function s(f,m){we(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return gh(d,c,s,o)}function Aa(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function we(o,d){if(!o){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function ph(){return Math.random().toString(36).substring(2,10)}function sp(o,d){return{usr:o.state,key:o.key,idx:d}}function Hs(o,d,c=null,s){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof d=="string"?Zt(d):d,state:c,key:d&&d.key||s||ph()}}function Pi({pathname:o="/",search:d="",hash:c=""}){return d&&d!=="?"&&(o+=d.charAt(0)==="?"?d:"?"+d),c&&c!=="#"&&(o+=c.charAt(0)==="#"?c:"#"+c),o}function Zt(o){let d={};if(o){let c=o.indexOf("#");c>=0&&(d.hash=o.substring(c),o=o.substring(0,c));let s=o.indexOf("?");s>=0&&(d.search=o.substring(s),o=o.substring(0,s)),o&&(d.pathname=o)}return d}function gh(o,d,c,s={}){let{window:f=document.defaultView,v5Compat:m=!1}=s,S=f.history,E="POP",y=null,h=j();h==null&&(h=0,S.replaceState({...S.state,idx:h},""));function j(){return(S.state||{idx:null}).idx}function w(){E="POP";let I=j(),_=I==null?null:I-h;h=I,y&&y({action:E,location:V.location,delta:_})}function B(I,_){E="PUSH";let G=Hs(V.location,I,_);c&&c(G,I),h=j()+1;let X=sp(G,h),ka=V.createHref(G);try{S.pushState(X,"",ka)}catch(Ta){if(Ta instanceof DOMException&&Ta.name==="DataCloneError")throw Ta;f.location.assign(ka)}m&&y&&y({action:E,location:V.location,delta:1})}function U(I,_){E="REPLACE";let G=Hs(V.location,I,_);c&&c(G,I),h=j();let X=sp(G,h),ka=V.createHref(G);S.replaceState(X,"",ka),m&&y&&y({action:E,location:V.location,delta:0})}function F(I){return fh(I)}let V={get action(){return E},get location(){return o(f,S)},listen(I){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(op,w),y=I,()=>{f.removeEventListener(op,w),y=null}},createHref(I){return d(f,I)},createURL:F,encodeLocation(I){let _=F(I);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:B,replace:U,go(I){return S.go(I)}};return V}function fh(o,d=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Aa(c,"No window.location.(origin|href) available to create URL");let s=typeof o=="string"?o:Pi(o);return s=s.replace(/ $/,"%20"),!d&&s.startsWith("//")&&(s=c+s),new URL(s,c)}function gp(o,d,c="/"){return hh(o,d,c,!1)}function hh(o,d,c,s){let f=typeof d=="string"?Zt(d):d,m=lt(f.pathname||"/",c);if(m==null)return null;let S=fp(o);bh(S);let E=null;for(let y=0;E==null&&y<S.length;++y){let h=Dh(m);E=Ch(S[y],h,s)}return E}function fp(o,d=[],c=[],s="",f=!1){let m=(S,E,y=f,h)=>{let j={relativePath:h===void 0?S.path||"":h,caseSensitive:S.caseSensitive===!0,childrenIndex:E,route:S};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(s)&&y)return;Aa(j.relativePath.startsWith(s),`Absolute route path "${j.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(s.length)}let w=it([s,j.relativePath]),B=c.concat(j);S.children&&S.children.length>0&&(Aa(S.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),fp(S.children,d,B,w,y)),!(S.path==null&&!S.index)&&d.push({path:w,score:Th(w,S.index),routesMeta:B})};return o.forEach((S,E)=>{if(S.path===""||!S.path?.includes("?"))m(S,E);else for(let y of hp(S.path))m(S,E,!0,y)}),d}function hp(o){let d=o.split("/");if(d.length===0)return[];let[c,...s]=d,f=c.endsWith("?"),m=c.replace(/\?$/,"");if(s.length===0)return f?[m,""]:[m];let S=hp(s.join("/")),E=[];return E.push(...S.map(y=>y===""?m:[m,y].join("/"))),f&&E.push(...S),E.map(y=>o.startsWith("/")&&y===""?"/":y)}function bh(o){o.sort((d,c)=>d.score!==c.score?c.score-d.score:Ah(d.routesMeta.map(s=>s.childrenIndex),c.routesMeta.map(s=>s.childrenIndex)))}var kh=/^:[\w-]+$/,Sh=3,yh=2,vh=1,Eh=10,xh=-2,up=o=>o==="*";function Th(o,d){let c=o.split("/"),s=c.length;return c.some(up)&&(s+=xh),d&&(s+=yh),c.filter(f=>!up(f)).reduce((f,m)=>f+(kh.test(m)?Sh:m===""?vh:Eh),s)}function Ah(o,d){return o.length===d.length&&o.slice(0,-1).every((s,f)=>s===d[f])?o[o.length-1]-d[d.length-1]:0}function Ch(o,d,c=!1){let{routesMeta:s}=o,f={},m="/",S=[];for(let E=0;E<s.length;++E){let y=s[E],h=E===s.length-1,j=m==="/"?d:d.slice(m.length)||"/",w=cr({path:y.relativePath,caseSensitive:y.caseSensitive,end:h},j),B=y.route;if(!w&&h&&c&&!s[s.length-1].route.index&&(w=cr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},j)),!w)return null;Object.assign(f,w.params),S.push({params:f,pathname:it([m,w.pathname]),pathnameBase:Nh(it([m,w.pathnameBase])),route:B}),w.pathnameBase!=="/"&&(m=it([m,w.pathnameBase]))}return S}function cr(o,d){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,s]=wh(o.path,o.caseSensitive,o.end),f=d.match(c);if(!f)return null;let m=f[0],S=m.replace(/(.)\/+$/,"$1"),E=f.slice(1);return{params:s.reduce((h,{paramName:j,isOptional:w},B)=>{if(j==="*"){let F=E[B]||"";S=m.slice(0,m.length-F.length).replace(/(.)\/+$/,"$1")}const U=E[B];return w&&!U?h[j]=void 0:h[j]=(U||"").replace(/%2F/g,"/"),h},{}),pathname:m,pathnameBase:S,pattern:o}}function wh(o,d=!1,c=!0){we(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let s=[],f="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,E,y)=>(s.push({paramName:E,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(s.push({paramName:"*"}),f+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":o!==""&&o!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,d?void 0:"i"),s]}function Dh(o){try{return o.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return we(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),o}}function lt(o,d){if(d==="/")return o;if(!o.toLowerCase().startsWith(d.toLowerCase()))return null;let c=d.endsWith("/")?d.length-1:d.length,s=o.charAt(c);return s&&s!=="/"?null:o.slice(c)||"/"}var Mh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lh=o=>Mh.test(o);function jh(o,d="/"){let{pathname:c,search:s="",hash:f=""}=typeof o=="string"?Zt(o):o,m;if(c)if(Lh(c))m=c;else{if(c.includes("//")){let S=c;c=c.replace(/\/\/+/g,"/"),we(!1,`Pathnames cannot have embedded double slashes - normalizing ${S} -> ${c}`)}c.startsWith("/")?m=dp(c.substring(1),"/"):m=dp(c,d)}else m=d;return{pathname:m,search:Rh(s),hash:Bh(f)}}function dp(o,d){let c=d.replace(/\/+$/,"").split("/");return o.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function Is(o,d,c,s){return`Cannot include a '${o}' character in a manually specified \`to.${d}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Oh(o){return o.filter((d,c)=>c===0||d.route.path&&d.route.path.length>0)}function bp(o){let d=Oh(o);return d.map((c,s)=>s===d.length-1?c.pathname:c.pathnameBase)}function kp(o,d,c,s=!1){let f;typeof o=="string"?f=Zt(o):(f={...o},Aa(!f.pathname||!f.pathname.includes("?"),Is("?","pathname","search",f)),Aa(!f.pathname||!f.pathname.includes("#"),Is("#","pathname","hash",f)),Aa(!f.search||!f.search.includes("#"),Is("#","search","hash",f)));let m=o===""||f.pathname==="",S=m?"/":f.pathname,E;if(S==null)E=c;else{let w=d.length-1;if(!s&&S.startsWith("..")){let B=S.split("/");for(;B[0]==="..";)B.shift(),w-=1;f.pathname=B.join("/")}E=w>=0?d[w]:"/"}let y=jh(f,E),h=S&&S!=="/"&&S.endsWith("/"),j=(m||S===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(h||j)&&(y.pathname+="/"),y}var it=o=>o.join("/").replace(/\/\/+/g,"/"),Nh=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Rh=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Bh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Ph(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Jh(o){return o.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sp=["POST","PUT","PATCH","DELETE"];new Set(Sp);var Fh=["GET",...Sp];new Set(Fh);var Fn=M.createContext(null);Fn.displayName="DataRouter";var mr=M.createContext(null);mr.displayName="DataRouterState";M.createContext(!1);var yp=M.createContext({isTransitioning:!1});yp.displayName="ViewTransition";var Ih=M.createContext(new Map);Ih.displayName="Fetchers";var Uh=M.createContext(null);Uh.displayName="Await";var Oe=M.createContext(null);Oe.displayName="Navigation";var Ji=M.createContext(null);Ji.displayName="Location";var Fe=M.createContext({outlet:null,matches:[],isDataRoute:!1});Fe.displayName="Route";var Gs=M.createContext(null);Gs.displayName="RouteError";function _h(o,{relative:d}={}){Aa(Fi(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:s}=M.useContext(Oe),{hash:f,pathname:m,search:S}=Ii(o,{relative:d}),E=m;return c!=="/"&&(E=m==="/"?c:it([c,m])),s.createHref({pathname:E,search:S,hash:f})}function Fi(){return M.useContext(Ji)!=null}function jt(){return Aa(Fi(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Ji).location}var vp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ep(o){M.useContext(Oe).static||M.useLayoutEffect(o)}function Hh(){let{isDataRoute:o}=M.useContext(Fe);return o?tb():Kh()}function Kh(){Aa(Fi(),"useNavigate() may be used only in the context of a <Router> component.");let o=M.useContext(Fn),{basename:d,navigator:c}=M.useContext(Oe),{matches:s}=M.useContext(Fe),{pathname:f}=jt(),m=JSON.stringify(bp(s)),S=M.useRef(!1);return Ep(()=>{S.current=!0}),M.useCallback((y,h={})=>{if(we(S.current,vp),!S.current)return;if(typeof y=="number"){c.go(y);return}let j=kp(y,JSON.parse(m),f,h.relative==="path");o==null&&d!=="/"&&(j.pathname=j.pathname==="/"?d:it([d,j.pathname])),(h.replace?c.replace:c.push)(j,h.state,h)},[d,c,m,f,o])}M.createContext(null);function zh(){let{matches:o}=M.useContext(Fe),d=o[o.length-1];return d?d.params:{}}function Ii(o,{relative:d}={}){let{matches:c}=M.useContext(Fe),{pathname:s}=jt(),f=JSON.stringify(bp(c));return M.useMemo(()=>kp(o,JSON.parse(f),s,d==="path"),[o,f,s,d])}function Gh(o,d){return xp(o,d)}function xp(o,d,c,s,f){Aa(Fi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=M.useContext(Oe),{matches:S}=M.useContext(Fe),E=S[S.length-1],y=E?E.params:{},h=E?E.pathname:"/",j=E?E.pathnameBase:"/",w=E&&E.route;{let G=w&&w.path||"";Tp(h,!w||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let B=jt(),U;if(d){let G=typeof d=="string"?Zt(d):d;Aa(j==="/"||G.pathname?.startsWith(j),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${G.pathname}" was given in the \`location\` prop.`),U=G}else U=B;let F=U.pathname||"/",V=F;if(j!=="/"){let G=j.replace(/^\//,"").split("/");V="/"+F.replace(/^\//,"").split("/").slice(G.length).join("/")}let I=gp(o,{pathname:V});we(w||I!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),we(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=Xh(I&&I.map(G=>Object.assign({},G,{params:Object.assign({},y,G.params),pathname:it([j,m.encodeLocation?m.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?j:it([j,m.encodeLocation?m.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),S,c,s,f);return d&&_?M.createElement(Ji.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},_):_}function Vh(){let o=eb(),d=Ph(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,s="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:s},m={padding:"2px 4px",backgroundColor:s},S=null;return console.error("Error handled by React Router default ErrorBoundary:",o),S=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:m},"ErrorBoundary")," or"," ",M.createElement("code",{style:m},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},d),c?M.createElement("pre",{style:f},c):null,S)}var qh=M.createElement(Vh,null),Qh=class extends M.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,d){return d.location!==o.location||d.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:d.error,location:d.location,revalidation:o.revalidation||d.revalidation}}componentDidCatch(o,d){this.props.onError?this.props.onError(o,d):console.error("React Router caught the following error during render",o)}render(){return this.state.error!==void 0?M.createElement(Fe.Provider,{value:this.props.routeContext},M.createElement(Gs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Yh({routeContext:o,match:d,children:c}){let s=M.useContext(Fn);return s&&s.static&&s.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=d.route.id),M.createElement(Fe.Provider,{value:o},c)}function Xh(o,d=[],c=null,s=null,f=null){if(o==null){if(!c)return null;if(c.errors)o=c.matches;else if(d.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let m=o,S=c?.errors;if(S!=null){let j=m.findIndex(w=>w.route.id&&S?.[w.route.id]!==void 0);Aa(j>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(S).join(",")}`),m=m.slice(0,Math.min(m.length,j+1))}let E=!1,y=-1;if(c)for(let j=0;j<m.length;j++){let w=m[j];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=j),w.route.id){let{loaderData:B,errors:U}=c,F=w.route.loader&&!B.hasOwnProperty(w.route.id)&&(!U||U[w.route.id]===void 0);if(w.route.lazy||F){E=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}let h=c&&s?(j,w)=>{s(j,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:Jh(c.matches),errorInfo:w})}:void 0;return m.reduceRight((j,w,B)=>{let U,F=!1,V=null,I=null;c&&(U=S&&w.route.id?S[w.route.id]:void 0,V=w.route.errorElement||qh,E&&(y<0&&B===0?(Tp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,I=null):y===B&&(F=!0,I=w.route.hydrateFallbackElement||null)));let _=d.concat(m.slice(0,B+1)),G=()=>{let X;return U?X=V:F?X=I:w.route.Component?X=M.createElement(w.route.Component,null):w.route.element?X=w.route.element:X=j,M.createElement(Yh,{match:w,routeContext:{outlet:j,matches:_,isDataRoute:c!=null},children:X})};return c&&(w.route.ErrorBoundary||w.route.errorElement||B===0)?M.createElement(Qh,{location:c.location,revalidation:c.revalidation,component:V,error:U,children:G(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:h}):G()},null)}function Vs(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wh(o){let d=M.useContext(Fn);return Aa(d,Vs(o)),d}function Zh(o){let d=M.useContext(mr);return Aa(d,Vs(o)),d}function $h(o){let d=M.useContext(Fe);return Aa(d,Vs(o)),d}function qs(o){let d=$h(o),c=d.matches[d.matches.length-1];return Aa(c.route.id,`${o} can only be used on routes that contain a unique "id"`),c.route.id}function ab(){return qs("useRouteId")}function eb(){let o=M.useContext(Gs),d=Zh("useRouteError"),c=qs("useRouteError");return o!==void 0?o:d.errors?.[c]}function tb(){let{router:o}=Wh("useNavigate"),d=qs("useNavigate"),c=M.useRef(!1);return Ep(()=>{c.current=!0}),M.useCallback(async(f,m={})=>{we(c.current,vp),c.current&&(typeof f=="number"?await o.navigate(f):await o.navigate(f,{fromRouteId:d,...m}))},[o,d])}var cp={};function Tp(o,d,c){!d&&!cp[o]&&(cp[o]=!0,we(!1,c))}M.memo(nb);function nb({routes:o,future:d,state:c,unstable_onError:s}){return xp(o,void 0,c,s,d)}function sr(o){Aa(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ib({basename:o="/",children:d=null,location:c,navigationType:s="POP",navigator:f,static:m=!1,unstable_useTransitions:S}){Aa(!Fi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=o.replace(/^\/*/,"/"),y=M.useMemo(()=>({basename:E,navigator:f,static:m,unstable_useTransitions:S,future:{}}),[E,f,m,S]);typeof c=="string"&&(c=Zt(c));let{pathname:h="/",search:j="",hash:w="",state:B=null,key:U="default"}=c,F=M.useMemo(()=>{let V=lt(h,E);return V==null?null:{location:{pathname:V,search:j,hash:w,state:B,key:U},navigationType:s}},[E,h,j,w,B,U,s]);return we(F!=null,`<Router basename="${E}"> is not able to match the URL "${h}${j}${w}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:M.createElement(Oe.Provider,{value:y},M.createElement(Ji.Provider,{children:d,value:F}))}function lb({children:o,location:d}){return Gh(Ks(o),d)}function Ks(o,d=[]){let c=[];return M.Children.forEach(o,(s,f)=>{if(!M.isValidElement(s))return;let m=[...d,f];if(s.type===M.Fragment){c.push.apply(c,Ks(s.props.children,m));return}Aa(s.type===sr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Aa(!s.props.index||!s.props.children,"An index route cannot have child routes.");let S={id:s.props.id||m.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(S.children=Ks(s.props.children,m)),c.push(S)}),c}var ur="get",dr="application/x-www-form-urlencoded";function pr(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function rb(o){return pr(o)&&o.tagName.toLowerCase()==="button"}function ob(o){return pr(o)&&o.tagName.toLowerCase()==="form"}function sb(o){return pr(o)&&o.tagName.toLowerCase()==="input"}function ub(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function db(o,d){return o.button===0&&(!d||d==="_self")&&!ub(o)}var lr=null;function cb(){if(lr===null)try{new FormData(document.createElement("form"),0),lr=!1}catch{lr=!0}return lr}var mb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Us(o){return o!=null&&!mb.has(o)?(we(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dr}"`),null):o}function pb(o,d){let c,s,f,m,S;if(ob(o)){let E=o.getAttribute("action");s=E?lt(E,d):null,c=o.getAttribute("method")||ur,f=Us(o.getAttribute("enctype"))||dr,m=new FormData(o)}else if(rb(o)||sb(o)&&(o.type==="submit"||o.type==="image")){let E=o.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=o.getAttribute("formaction")||E.getAttribute("action");if(s=y?lt(y,d):null,c=o.getAttribute("formmethod")||E.getAttribute("method")||ur,f=Us(o.getAttribute("formenctype"))||Us(E.getAttribute("enctype"))||dr,m=new FormData(E,o),!cb()){let{name:h,type:j,value:w}=o;if(j==="image"){let B=h?`${h}.`:"";m.append(`${B}x`,"0"),m.append(`${B}y`,"0")}else h&&m.append(h,w)}}else{if(pr(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=ur,s=null,f=dr,S=o}return m&&f==="text/plain"&&(S=m,m=void 0),{action:s,method:c.toLowerCase(),encType:f,formData:m,body:S}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qs(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function gb(o,d,c){let s=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return s.pathname==="/"?s.pathname=`_root.${c}`:d&&lt(s.pathname,d)==="/"?s.pathname=`${d.replace(/\/$/,"")}/_root.${c}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${c}`,s}async function fb(o,d){if(o.id in d)return d[o.id];try{let c=await import(o.module);return d[o.id]=c,c}catch(c){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hb(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function bb(o,d,c){let s=await Promise.all(o.map(async f=>{let m=d.routes[f.route.id];if(m){let S=await fb(m,c);return S.links?S.links():[]}return[]}));return vb(s.flat(1).filter(hb).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function mp(o,d,c,s,f,m){let S=(y,h)=>c[h]?y.route.id!==c[h].route.id:!0,E=(y,h)=>c[h].pathname!==y.pathname||c[h].route.path?.endsWith("*")&&c[h].params["*"]!==y.params["*"];return m==="assets"?d.filter((y,h)=>S(y,h)||E(y,h)):m==="data"?d.filter((y,h)=>{let j=s.routes[y.route.id];if(!j||!j.hasLoader)return!1;if(S(y,h)||E(y,h))return!0;if(y.route.shouldRevalidate){let w=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function kb(o,d,{includeHydrateFallback:c}={}){return Sb(o.map(s=>{let f=d.routes[s.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function Sb(o){return[...new Set(o)]}function yb(o){let d={},c=Object.keys(o).sort();for(let s of c)d[s]=o[s];return d}function vb(o,d){let c=new Set;return new Set(d),o.reduce((s,f)=>{let m=JSON.stringify(yb(f));return c.has(m)||(c.add(m),s.push({key:m,link:f})),s},[])}function Ap(){let o=M.useContext(Fn);return Qs(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Eb(){let o=M.useContext(mr);return Qs(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Ys=M.createContext(void 0);Ys.displayName="FrameworkContext";function Cp(){let o=M.useContext(Ys);return Qs(o,"You must render this element inside a <HydratedRouter> element"),o}function xb(o,d){let c=M.useContext(Ys),[s,f]=M.useState(!1),[m,S]=M.useState(!1),{onFocus:E,onBlur:y,onMouseEnter:h,onMouseLeave:j,onTouchStart:w}=d,B=M.useRef(null);M.useEffect(()=>{if(o==="render"&&S(!0),o==="viewport"){let V=_=>{_.forEach(G=>{S(G.isIntersecting)})},I=new IntersectionObserver(V,{threshold:.5});return B.current&&I.observe(B.current),()=>{I.disconnect()}}},[o]),M.useEffect(()=>{if(s){let V=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(V)}}},[s]);let U=()=>{f(!0)},F=()=>{f(!1),S(!1)};return c?o!=="intent"?[m,B,{}]:[m,B,{onFocus:Ri(E,U),onBlur:Ri(y,F),onMouseEnter:Ri(h,U),onMouseLeave:Ri(j,F),onTouchStart:Ri(w,U)}]:[!1,B,{}]}function Ri(o,d){return c=>{o&&o(c),c.defaultPrevented||d(c)}}function Tb({page:o,...d}){let{router:c}=Ap(),s=M.useMemo(()=>gp(c.routes,o,c.basename),[c.routes,o,c.basename]);return s?M.createElement(Cb,{page:o,matches:s,...d}):null}function Ab(o){let{manifest:d,routeModules:c}=Cp(),[s,f]=M.useState([]);return M.useEffect(()=>{let m=!1;return bb(o,d,c).then(S=>{m||f(S)}),()=>{m=!0}},[o,d,c]),s}function Cb({page:o,matches:d,...c}){let s=jt(),{manifest:f,routeModules:m}=Cp(),{basename:S}=Ap(),{loaderData:E,matches:y}=Eb(),h=M.useMemo(()=>mp(o,d,y,f,s,"data"),[o,d,y,f,s]),j=M.useMemo(()=>mp(o,d,y,f,s,"assets"),[o,d,y,f,s]),w=M.useMemo(()=>{if(o===s.pathname+s.search+s.hash)return[];let F=new Set,V=!1;if(d.forEach(_=>{let G=f.routes[_.route.id];!G||!G.hasLoader||(!h.some(X=>X.route.id===_.route.id)&&_.route.id in E&&m[_.route.id]?.shouldRevalidate||G.hasClientLoader?V=!0:F.add(_.route.id))}),F.size===0)return[];let I=gb(o,S,"data");return V&&F.size>0&&I.searchParams.set("_routes",d.filter(_=>F.has(_.route.id)).map(_=>_.route.id).join(",")),[I.pathname+I.search]},[S,E,s,f,h,d,o,m]),B=M.useMemo(()=>kb(j,f),[j,f]),U=Ab(j);return M.createElement(M.Fragment,null,w.map(F=>M.createElement("link",{key:F,rel:"prefetch",as:"fetch",href:F,...c})),B.map(F=>M.createElement("link",{key:F,rel:"modulepreload",href:F,...c})),U.map(({key:F,link:V})=>M.createElement("link",{key:F,nonce:c.nonce,...V})))}function wb(...o){return d=>{o.forEach(c=>{typeof c=="function"?c(d):c!=null&&(c.current=d)})}}var wp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{wp&&(window.__reactRouterVersion="7.10.1")}catch{}function Db({basename:o,children:d,unstable_useTransitions:c,window:s}){let f=M.useRef();f.current==null&&(f.current=mh({window:s,v5Compat:!0}));let m=f.current,[S,E]=M.useState({action:m.action,location:m.location}),y=M.useCallback(h=>{c===!1?E(h):M.startTransition(()=>E(h))},[c]);return M.useLayoutEffect(()=>m.listen(y),[m,y]),M.createElement(ib,{basename:o,children:d,location:S.location,navigationType:S.action,navigator:m,unstable_useTransitions:c===!0})}var Dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qa=M.forwardRef(function({onClick:d,discover:c="render",prefetch:s="none",relative:f,reloadDocument:m,replace:S,state:E,target:y,to:h,preventScrollReset:j,viewTransition:w,...B},U){let{basename:F,unstable_useTransitions:V}=M.useContext(Oe),I=typeof h=="string"&&Dp.test(h),_,G=!1;if(typeof h=="string"&&I&&(_=h,wp))try{let Qa=new URL(window.location.href),Wa=h.startsWith("//")?new URL(Qa.protocol+h):new URL(h),_a=lt(Wa.pathname,F);Wa.origin===Qa.origin&&_a!=null?h=_a+Wa.search+Wa.hash:G=!0}catch{we(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=_h(h,{relative:f}),[ka,Ta,Da]=xb(s,B),W=Ob(h,{replace:S,state:E,target:y,preventScrollReset:j,relative:f,viewTransition:w,unstable_useTransitions:V});function Ja(Qa){d&&d(Qa),Qa.defaultPrevented||W(Qa)}let Ua=M.createElement("a",{...B,...Da,href:_||X,onClick:G||m?d:Ja,ref:wb(U,Ta),target:y,"data-discover":!I&&c==="render"?"true":void 0});return ka&&!I?M.createElement(M.Fragment,null,Ua,M.createElement(Tb,{page:X})):Ua});qa.displayName="Link";var Mb=M.forwardRef(function({"aria-current":d="page",caseSensitive:c=!1,className:s="",end:f=!1,style:m,to:S,viewTransition:E,children:y,...h},j){let w=Ii(S,{relative:h.relative}),B=jt(),U=M.useContext(mr),{navigator:F,basename:V}=M.useContext(Oe),I=U!=null&&Jb(w)&&E===!0,_=F.encodeLocation?F.encodeLocation(w).pathname:w.pathname,G=B.pathname,X=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;c||(G=G.toLowerCase(),X=X?X.toLowerCase():null,_=_.toLowerCase()),X&&V&&(X=lt(X,V)||X);const ka=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let Ta=G===_||!f&&G.startsWith(_)&&G.charAt(ka)==="/",Da=X!=null&&(X===_||!f&&X.startsWith(_)&&X.charAt(_.length)==="/"),W={isActive:Ta,isPending:Da,isTransitioning:I},Ja=Ta?d:void 0,Ua;typeof s=="function"?Ua=s(W):Ua=[s,Ta?"active":null,Da?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let Qa=typeof m=="function"?m(W):m;return M.createElement(qa,{...h,"aria-current":Ja,className:Ua,ref:j,style:Qa,to:S,viewTransition:E},typeof y=="function"?y(W):y)});Mb.displayName="NavLink";var Lb=M.forwardRef(({discover:o="render",fetcherKey:d,navigate:c,reloadDocument:s,replace:f,state:m,method:S=ur,action:E,onSubmit:y,relative:h,preventScrollReset:j,viewTransition:w,...B},U)=>{let{unstable_useTransitions:F}=M.useContext(Oe),V=Bb(),I=Pb(E,{relative:h}),_=S.toLowerCase()==="get"?"get":"post",G=typeof E=="string"&&Dp.test(E),X=ka=>{if(y&&y(ka),ka.defaultPrevented)return;ka.preventDefault();let Ta=ka.nativeEvent.submitter,Da=Ta?.getAttribute("formmethod")||S,W=()=>V(Ta||ka.currentTarget,{fetcherKey:d,method:Da,navigate:c,replace:f,state:m,relative:h,preventScrollReset:j,viewTransition:w});F&&c!==!1?M.startTransition(()=>W()):W()};return M.createElement("form",{ref:U,method:_,action:I,onSubmit:s?y:X,...B,"data-discover":!G&&o==="render"?"true":void 0})});Lb.displayName="Form";function jb(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mp(o){let d=M.useContext(Fn);return Aa(d,jb(o)),d}function Ob(o,{target:d,replace:c,state:s,preventScrollReset:f,relative:m,viewTransition:S,unstable_useTransitions:E}={}){let y=Hh(),h=jt(),j=Ii(o,{relative:m});return M.useCallback(w=>{if(db(w,d)){w.preventDefault();let B=c!==void 0?c:Pi(h)===Pi(j),U=()=>y(o,{replace:B,state:s,preventScrollReset:f,relative:m,viewTransition:S});E?M.startTransition(()=>U()):U()}},[h,y,j,c,s,d,o,f,m,S,E])}var Nb=0,Rb=()=>`__${String(++Nb)}__`;function Bb(){let{router:o}=Mp("useSubmit"),{basename:d}=M.useContext(Oe),c=ab(),s=o.fetch,f=o.navigate;return M.useCallback(async(m,S={})=>{let{action:E,method:y,encType:h,formData:j,body:w}=pb(m,d);if(S.navigate===!1){let B=S.fetcherKey||Rb();await s(B,c,S.action||E,{preventScrollReset:S.preventScrollReset,formData:j,body:w,formMethod:S.method||y,formEncType:S.encType||h,flushSync:S.flushSync})}else await f(S.action||E,{preventScrollReset:S.preventScrollReset,formData:j,body:w,formMethod:S.method||y,formEncType:S.encType||h,replace:S.replace,state:S.state,fromRouteId:c,flushSync:S.flushSync,viewTransition:S.viewTransition})},[s,f,d,c])}function Pb(o,{relative:d}={}){let{basename:c}=M.useContext(Oe),s=M.useContext(Fe);Aa(s,"useFormAction must be used inside a RouteContext");let[f]=s.matches.slice(-1),m={...Ii(o||".",{relative:d})},S=jt();if(o==null){m.search=S.search;let E=new URLSearchParams(m.search),y=E.getAll("index");if(y.some(j=>j==="")){E.delete("index"),y.filter(w=>w).forEach(w=>E.append("index",w));let j=E.toString();m.search=j?`?${j}`:""}}return(!o||o===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(m.pathname=m.pathname==="/"?c:it([c,m.pathname])),Pi(m)}function Jb(o,{relative:d}={}){let c=M.useContext(yp);Aa(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Mp("useViewTransitionState"),f=Ii(o,{relative:d});if(!c.isTransitioning)return!1;let m=lt(c.currentLocation.pathname,s)||c.currentLocation.pathname,S=lt(c.nextLocation.pathname,s)||c.nextLocation.pathname;return cr(f.pathname,S)!=null||cr(f.pathname,m)!=null}const Fb=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ib=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,c,s)=>s?s.toUpperCase():c.toLowerCase()),pp=o=>{const d=Ib(o);return d.charAt(0).toUpperCase()+d.slice(1)},Lp=(...o)=>o.filter((d,c,s)=>!!d&&d.trim()!==""&&s.indexOf(d)===c).join(" ").trim(),Ub=o=>{for(const d in o)if(d.startsWith("aria-")||d==="role"||d==="title")return!0};var _b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Hb=M.forwardRef(({color:o="currentColor",size:d=24,strokeWidth:c=2,absoluteStrokeWidth:s,className:f="",children:m,iconNode:S,...E},y)=>M.createElement("svg",{ref:y,..._b,width:d,height:d,stroke:o,strokeWidth:s?Number(c)*24/Number(d):c,className:Lp("lucide",f),...!m&&!Ub(E)&&{"aria-hidden":"true"},...E},[...S.map(([h,j])=>M.createElement(h,j)),...Array.isArray(m)?m:[m]]));const Xa=(o,d)=>{const c=M.forwardRef(({className:s,...f},m)=>M.createElement(Hb,{ref:m,iconNode:d,className:Lp(`lucide-${Fb(pp(o))}`,`lucide-${o}`,s),...f}));return c.displayName=pp(o),c};const Kb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],zb=Xa("arrow-left",Kb);const Gb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Bi=Xa("arrow-right",Gb);const Vb=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],qb=Xa("award",Vb);const Qb=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ui=Xa("book-open",Qb);const Yb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Xb=Xa("check",Yb);const Wb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Zb=Xa("chevron-right",Wb);const $b=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ak=Xa("circle-check-big",$b);const ek=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],jp=Xa("clock",ek);const tk=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],nk=Xa("code",tk);const ik=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],lk=Xa("copy",ik);const rk=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ok=Xa("database",rk);const sk=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],uk=Xa("house",sk);const dk=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ck=Xa("menu",dk);const mk=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],pk=Xa("moon",mk);const gk=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],fk=Xa("sun",gk);const hk=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bk=Xa("x",hk);function kk({toggleSidebar:o,sidebarOpen:d}){const[c,s]=M.useState(!1);M.useEffect(()=>{const m=localStorage.getItem("darkMode")==="true";s(m),m&&document.documentElement.classList.add("dark")},[]);const f=()=>{const m=!c;s(m),localStorage.setItem("darkMode",m.toString()),m?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};return g.jsx("nav",{className:"bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50",children:g.jsx("div",{className:"max-w-full mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs("div",{className:"flex justify-between h-16",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx("button",{onClick:o,className:"p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden",children:d?g.jsx(bk,{size:24}):g.jsx(ck,{size:24})}),g.jsxs(qa,{to:"/",className:"flex items-center space-x-3 ml-2",children:[g.jsx(Ui,{className:"text-blue-600 dark:text-blue-400",size:32}),g.jsxs("div",{children:[g.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Java Desktop Programming"}),g.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Universitas Terbuka"})]})]})]}),g.jsx("div",{className:"flex items-center space-x-4",children:g.jsx("button",{onClick:f,className:"p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700","aria-label":"Toggle dark mode",children:c?g.jsx(fk,{size:20}):g.jsx(pk,{size:20})})})]})})})}const Je=[{id:1,title:"Pengenalan Pemrograman Desktop & Setup",slug:"pengenalan-setup",description:"Memahami dasar-dasar aplikasi desktop, perbedaannya dengan aplikasi lain, dan setup environment Java + NetBeans",duration:"2-3 jam",level:"Pemula",topics:["Apa itu aplikasi desktop?","Perbedaan desktop vs web vs mobile","Kenapa Java untuk desktop?","Download & install JDK","Download & install NetBeans IDE","Membuat project Java pertama","Menjalankan program Hello World"]},{id:2,title:"Dasar-Dasar Java",slug:"dasar-java",description:"Mempelajari fundamental pemrograman Java dari nol: variabel, operator, kondisional, dan perulangan",duration:"4-5 jam",level:"Pemula",topics:["Struktur program Java","Variabel dan tipe data","Input/Output (Scanner, System.out)","Operator (aritmatika, logika, perbandingan)","Kondisional (if-else, switch-case)","Perulangan (for, while, do-while)","Array dan ArrayList","String manipulation"]},{id:3,title:"Method & Function",slug:"method-function",description:"Memahami cara membuat dan menggunakan method untuk kode yang lebih terstruktur dan reusable",duration:"2-3 jam",level:"Pemula",topics:["Membuat dan memanggil method","Parameter dan return value","Method overloading","Static vs non-static","Scope variabel"]},{id:4,title:"Pemrograman Berorientasi Objek (OOP)",slug:"oop",description:"Konsep fundamental OOP: Class, Object, Encapsulation, Inheritance, dan Polymorphism",duration:"5-6 jam",level:"Menengah",topics:["Konsep Class dan Object","Constructor dan This keyword","Encapsulation (getter/setter)","Inheritance (extends, super)","Polymorphism (method overriding)","Interface dan Abstract class","Package dan Import"]},{id:5,title:"GUI dengan NetBeans - Dasar",slug:"gui-dasar",description:"Mulai membuat aplikasi GUI menggunakan Java Swing dan NetBeans GUI Builder",duration:"4-5 jam",level:"Menengah",topics:["Pengenalan Java Swing","Membuat JFrame pertama","NetBeans GUI Builder (drag & drop)","Komponen dasar: JLabel, JButton, JTextField","Event handling dasar (ActionListener)","Layout Manager","JPanel untuk grouping"]},{id:6,title:"GUI Lanjutan",slug:"gui-lanjutan",description:"Komponen GUI advanced dan styling untuk membuat aplikasi yang lebih profesional",duration:"4-5 jam",level:"Menengah",topics:["JComboBox, JList, JCheckBox, JRadioButton","JTable untuk data tabular","JTextArea, JScrollPane","JMenuBar dan JMenu","JDialog dan JOptionPane","Form validation","Custom styling"]},{id:7,title:"Database dengan Java",slug:"database",description:"Koneksi ke database dan operasi CRUD menggunakan JDBC",duration:"5-6 jam",level:"Menengah",topics:["Pengenalan database relasional","Install MySQL/SQLite","JDBC (Java Database Connectivity)","Koneksi ke database","CRUD operations","PreparedStatement","Menampilkan data ke JTable","Form input data ke database"]},{id:8,title:"File Handling",slug:"file-handling",description:"Membaca, menulis, dan memanipulasi file dalam aplikasi Java",duration:"2-3 jam",level:"Menengah",topics:["Membaca file teks","Menulis file teks","JFileChooser","Menyimpan konfigurasi","Export data ke CSV"]},{id:9,title:"Exception Handling & Debugging",slug:"exception-debugging",description:"Menangani error dengan baik dan debugging aplikasi di NetBeans",duration:"2-3 jam",level:"Menengah",topics:["Try-catch-finally","Jenis-jenis Exception","Throw dan Throws","Custom Exception","Debugging di NetBeans","Logging"]},{id:10,title:"Best Practices & Deployment",slug:"best-practices",description:"Code organization, design patterns, dan cara mendistribusikan aplikasi",duration:"3-4 jam",level:"Lanjutan",topics:["Code organization","Naming convention","Design patterns (MVC)","Membuat JAR file","Membuat installer","Icon dan branding"]},{id:11,title:"Project Akhir - Aplikasi CRUD Lengkap",slug:"project-akhir",description:"Implementasi aplikasi Manajemen Data Mahasiswa dari nol sampai selesai",duration:"8-10 jam",level:"Lanjutan",topics:["Spesifikasi aplikasi","Database design (ERD)","Setup database & tabel","Form login","Dashboard/menu utama","CRUD operations lengkap","Laporan sederhana","Testing & deployment"]}];function Sk({isOpen:o,closeSidebar:d}){const c=jt(),s=m=>c.pathname===m,f=[{path:"/",label:"Beranda",icon:uk},{path:"/modules",label:"Semua Modul",icon:Ui}];return g.jsxs(g.Fragment,{children:[o&&g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden",onClick:d}),g.jsx("aside",{className:`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto
          ${o?"translate-x-0":"-translate-x-full"} lg:translate-x-0`,children:g.jsxs("nav",{className:"p-4 space-y-2",children:[f.map(m=>{const S=m.icon;return g.jsxs(qa,{to:m.path,onClick:d,className:`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${s(m.path)?"bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`,children:[g.jsx(S,{size:20}),g.jsx("span",{className:"font-medium",children:m.label})]},m.path)}),g.jsx("div",{className:"border-t border-gray-200 dark:border-gray-700 my-4"}),g.jsxs("div",{className:"space-y-1",children:[g.jsx("h3",{className:"px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Modul Pembelajaran"}),Je.map(m=>g.jsxs(qa,{to:`/module/${m.slug}`,onClick:d,className:`flex items-start space-x-3 px-4 py-2.5 rounded-lg transition-colors ${s(`/module/${m.slug}`)?"bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300":"text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"}`,children:[g.jsx("span",{className:"flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-bold",children:m.id}),g.jsx("span",{className:"text-sm font-medium leading-tight",children:m.title})]},m.id))]})]})})]})}function yk(){return g.jsxs("div",{className:"space-y-12",children:[g.jsxs("section",{className:"text-center py-12 px-4",children:[g.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4",children:"Belajar Pemrograman Desktop dengan Java"}),g.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto",children:"Platform pembelajaran lengkap untuk mahasiswa Universitas Terbuka. Dari zero sampai hero dalam membangun aplikasi desktop profesional menggunakan Java dan NetBeans."}),g.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[g.jsxs(qa,{to:"/modules",className:"inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors",children:["Mulai Belajar",g.jsx(Bi,{className:"ml-2",size:20})]}),g.jsx(qa,{to:"/module/pengenalan-setup",className:"inline-flex items-center justify-center px-8 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors",children:"Lihat Modul Pertama"})]})]}),g.jsxs("section",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:[g.jsx(rr,{icon:g.jsx(Ui,{className:"text-blue-600 dark:text-blue-400",size:32}),title:"11 Modul Lengkap",description:"Kurikulum terstruktur dari dasar hingga mahir"}),g.jsx(rr,{icon:g.jsx(nk,{className:"text-green-600 dark:text-green-400",size:32}),title:"Contoh Code",description:"Ratusan contoh kode yang bisa langsung dicoba"}),g.jsx(rr,{icon:g.jsx(ok,{className:"text-purple-600 dark:text-purple-400",size:32}),title:"Project Real",description:"Bangun aplikasi CRUD lengkap dengan database"}),g.jsx(rr,{icon:g.jsx(qb,{className:"text-orange-600 dark:text-orange-400",size:32}),title:"Zero to Hero",description:"Cocok untuk pemula, tidak perlu pengalaman"})]}),g.jsxs("section",{children:[g.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-6",children:"Apa yang Akan Kamu Pelajari?"}),g.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[g.jsx(or,{title:"Fundamental Java",items:["Sintaks dasar Java dan OOP","Variabel, kondisional, perulangan","Class, Object, Inheritance","Exception handling dan debugging"]}),g.jsx(or,{title:"GUI Development",items:["Java Swing dan NetBeans GUI Builder","Komponen UI (Button, Table, Form)","Event handling dan validasi","Custom styling aplikasi"]}),g.jsx(or,{title:"Database Integration",items:["MySQL dan JDBC","CRUD operations","Koneksi database ke aplikasi","Menampilkan data di JTable"]}),g.jsx(or,{title:"Deployment",items:["Best practices dan design patterns","Membuat file JAR executable","Packaging dengan installer","Project akhir aplikasi lengkap"]})]})]}),g.jsxs("section",{children:[g.jsxs("div",{className:"flex justify-between items-center mb-6",children:[g.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mulai dari Modul Ini"}),g.jsxs(qa,{to:"/modules",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center",children:["Lihat Semua",g.jsx(Bi,{className:"ml-1",size:18})]})]}),g.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:Je.slice(0,3).map(o=>g.jsx(vk,{module:o},o.id))})]}),g.jsxs("section",{className:"bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 rounded-2xl p-12 text-center text-white",children:[g.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Siap Memulai Perjalanan Belajarmu?"}),g.jsx("p",{className:"text-xl mb-8 opacity-90",children:"Bergabunglah dengan ribuan mahasiswa yang sudah belajar pemrograman desktop"}),g.jsxs(qa,{to:"/module/pengenalan-setup",className:"inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors",children:["Mulai Modul Pertama",g.jsx(Bi,{className:"ml-2",size:20})]})]})]})}function rr({icon:o,title:d,description:c}){return g.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700",children:[g.jsx("div",{className:"mb-4",children:o}),g.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-white mb-2",children:d}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:c})]})}function or({title:o,items:d}){return g.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700",children:[g.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:o}),g.jsx("ul",{className:"space-y-2",children:d.map((c,s)=>g.jsxs("li",{className:"flex items-start",children:[g.jsx(ak,{className:"text-green-500 mr-2 flex-shrink-0 mt-0.5",size:18}),g.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:c})]},s))})]})}function vk({module:o}){const d={Pemula:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",Menengah:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",Lanjutan:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"};return g.jsxs(qa,{to:`/module/${o.slug}`,className:"bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1",children:[g.jsxs("div",{className:"flex items-center justify-between mb-3",children:[g.jsx("span",{className:"flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-bold",children:o.id}),g.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-semibold ${d[o.level]}`,children:o.level})]}),g.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-white mb-2",children:o.title}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-4",children:o.description}),g.jsxs("div",{className:"flex items-center text-sm text-gray-500 dark:text-gray-400",children:[g.jsx("svg",{className:"w-4 h-4 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),o.duration]})]})}function Ek(){const o={Pemula:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",Menengah:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",Lanjutan:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"};return g.jsxs("div",{className:"space-y-8",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4",children:"Semua Modul Pembelajaran"}),g.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"11 modul terstruktur untuk membawa Anda dari pemula hingga mahir dalam pemrograman desktop Java"})]}),g.jsx("div",{className:"grid gap-6",children:Je.map((d,c)=>g.jsx(qa,{to:`/module/${d.slug}`,className:"bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden",children:g.jsxs("div",{className:"p-6",children:[g.jsxs("div",{className:"flex items-start justify-between mb-4",children:[g.jsxs("div",{className:"flex items-start space-x-4 flex-1",children:[g.jsx("div",{className:"flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-bold text-lg",children:d.id}),g.jsxs("div",{className:"flex-1",children:[g.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:d.title}),g.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-semibold ${o[d.level]}`,children:d.level})]}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:d.description}),g.jsxs("div",{className:"flex items-center text-sm text-gray-500 dark:text-gray-400",children:[g.jsx(jp,{size:16,className:"mr-1"}),d.duration,g.jsx("span",{className:"mx-3",children:"•"}),g.jsx(Ui,{size:16,className:"mr-1"}),d.topics.length," topik"]})]})]}),g.jsx(Zb,{className:"text-gray-400 flex-shrink-0 ml-4",size:24})]}),g.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-200 dark:border-gray-700",children:[g.jsx("h3",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Yang akan dipelajari:"}),g.jsxs("div",{className:"grid md:grid-cols-2 gap-2",children:[d.topics.slice(0,4).map((s,f)=>g.jsxs("div",{className:"flex items-center text-sm text-gray-600 dark:text-gray-400",children:[g.jsx("span",{className:"w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"}),s]},f)),d.topics.length>4&&g.jsxs("div",{className:"text-sm text-blue-600 dark:text-blue-400 font-medium",children:["+",d.topics.length-4," topik lainnya"]})]})]})]})},d.id))}),g.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6",children:[g.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:"Total Pembelajaran"}),g.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mt-4",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-3xl font-bold text-blue-600 dark:text-blue-400",children:Je.length}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Modul"})]}),g.jsxs("div",{children:[g.jsx("p",{className:"text-3xl font-bold text-blue-600 dark:text-blue-400",children:Je.reduce((d,c)=>d+c.topics.length,0)}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Topik"})]}),g.jsxs("div",{children:[g.jsx("p",{className:"text-3xl font-bold text-blue-600 dark:text-blue-400",children:"40+"}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Jam Belajar"})]})]})]})]})}const xk={title:"Pengenalan Pemrograman Desktop & Setup",sections:[{id:"intro",title:"Apa itu Aplikasi Desktop?",content:`
Aplikasi desktop adalah program komputer yang dijalankan secara lokal di komputer atau laptop Anda,
tidak seperti aplikasi web yang berjalan di browser. Contoh aplikasi desktop yang sering Anda gunakan:

- **Microsoft Word** - Pengolah kata
- **Adobe Photoshop** - Editor gambar
- **VLC Media Player** - Pemutar video
- **Visual Studio Code** - Editor kode
- **NetBeans IDE** - Yang akan kita gunakan!

Aplikasi desktop memiliki beberapa keunggulan:
- **Performa lebih cepat** karena berjalan langsung di sistem
- **Akses penuh ke hardware** (file system, printer, dll)
- **Bisa berjalan offline** tanpa koneksi internet
- **Keamanan data** karena tersimpan lokal
      `},{id:"comparison",title:"Perbedaan Desktop vs Web vs Mobile",content:`
Mari kita bandingkan ketiga jenis aplikasi ini:

| Aspek | Desktop | Web | Mobile |
|-------|---------|-----|--------|
| **Platform** | Windows, Mac, Linux | Browser (Chrome, Firefox) | Android, iOS |
| **Instalasi** | Perlu install | Tidak perlu install | Install dari store |
| **Update** | Manual/otomatis | Otomatis | Dari app store |
| **Akses Offline** | ✅ Ya | ❌ Terbatas | ✅ Ya |
| **Performa** | ⚡ Sangat cepat | 🐢 Tergantung koneksi | ⚡ Cepat |
| **Akses Hardware** | ✅ Penuh | ❌ Terbatas | ⚙️ Terbatas (API) |

**Kapan menggunakan Desktop App?**
- Aplikasi yang membutuhkan performa tinggi (editing video, 3D rendering)
- Aplikasi yang perlu akses penuh ke file system
- Aplikasi yang harus berjalan offline
- Aplikasi enterprise/internal perusahaan
      `},{id:"why-java",title:"Kenapa Java untuk Desktop?",content:`
Java adalah pilihan yang sangat baik untuk pemrograman desktop, terutama untuk pemula. Berikut alasannya:

**1. Cross-Platform (Write Once, Run Anywhere)**
   - Aplikasi Java bisa berjalan di Windows, Mac, dan Linux
   - Tidak perlu compile ulang untuk setiap OS

**2. Mudah Dipelajari**
   - Sintaks yang jelas dan terstruktur
   - Dokumentasi lengkap
   - Banyak tutorial dan komunitas besar

**3. GUI Framework Mature**
   - Java Swing - Framework GUI yang sudah teruji
   - NetBeans GUI Builder - Drag & drop visual designer

**4. Gratis dan Open Source**
   - JDK (Java Development Kit) gratis
   - NetBeans IDE gratis
   - Library dan tools gratis

**5. Dipakai di Industri**
   - Banyak perusahaan menggunakan Java
   - Skill yang marketable
   - Banyak lowongan kerja

**Contoh Aplikasi Desktop Java:**
- NetBeans IDE
- IntelliJ IDEA
- Eclipse IDE
- Android Studio (berbasis IntelliJ)
      `},{id:"setup-jdk",title:"Download & Install JDK",content:`
**JDK (Java Development Kit)** adalah toolkit yang berisi semua yang Anda butuhkan untuk membuat aplikasi Java.

### Langkah-langkah Install JDK:

**1. Download JDK**
   - Kunjungi: [https://www.oracle.com/java/technologies/downloads/](https://www.oracle.com/java/technologies/downloads/)
   - Pilih versi: **JDK 17 LTS** atau **JDK 21 LTS** (Long Term Support)
   - Pilih sesuai OS Anda:
     - Windows: x64 Installer
     - Mac: macOS Installer
     - Linux: .deb atau .rpm

**2. Install JDK**
   - Jalankan installer yang sudah didownload
   - Ikuti wizard instalasi
   - Default location: \`C:\\Program Files\\Java\\jdk-17\` (Windows)
   - Klik Next > Next > Finish

**3. Verifikasi Instalasi**
   Buka Command Prompt (Windows) atau Terminal (Mac/Linux), ketik:
      `,code:{language:"bash",code:"java -version"},afterCode:`
Output yang diharapkan:
      `,code2:{language:"text",code:`java version "17.0.x"
Java(TM) SE Runtime Environment (build 17.0.x)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.x)`},afterCode2:`
Jika muncul output seperti di atas, berarti JDK sudah terinstall dengan benar! ✅

**Troubleshooting:**
- Jika muncul error "java is not recognized", Anda perlu set JAVA_HOME dan PATH
- Restart komputer setelah install
- Google: "how to set JAVA_HOME" + OS Anda
      `},{id:"setup-netbeans",title:"Download & Install NetBeans IDE",content:`
**NetBeans** adalah IDE (Integrated Development Environment) yang sangat cocok untuk pemula karena memiliki GUI Builder visual.

### Langkah-langkah Install NetBeans:

**1. Download NetBeans**
   - Kunjungi: [https://netbeans.apache.org/download/](https://netbeans.apache.org/download/)
   - Pilih versi terbaru (misal: NetBeans 19)
   - Download installer untuk OS Anda

**2. Install NetBeans**
   - Jalankan installer
   - Pastikan JDK sudah terdeteksi
   - Pilih komponen: **Java SE** (minimal)
   - Klik Next > Install
   - Tunggu proses instalasi (5-10 menit)

**3. Jalankan NetBeans**
   - Buka NetBeans dari Start Menu (Windows) atau Applications (Mac)
   - Tunggu NetBeans loading (pertama kali agak lama)
   - Jika ada update tersedia, update nanti saja

**Tampilan NetBeans:**
Ketika pertama kali dibuka, Anda akan melihat:
- **Menu Bar** - File, Edit, View, dll
- **Toolbar** - Tombol-tombol shortcut
- **Projects Panel** - Daftar project Anda
- **Editor Area** - Tempat menulis code
- **Output Panel** - Hasil compile/run program

Tips: Biasakan dengan tampilan NetBeans, karena ini akan menjadi "rumah" Anda selama belajar! 🏡
      `},{id:"first-project",title:"Membuat Project Java Pertama",content:`
Mari kita buat project Java pertama! Ikuti langkah-langkah ini dengan hati-hati:

### Langkah 1: New Project
1. Buka NetBeans
2. Klik **File > New Project** (atau Ctrl+Shift+N)
3. Pilih **Categories: Java with Maven**
4. Pilih **Projects: Java Application**
5. Klik **Next**

### Langkah 2: Configure Project
1. **Project Name:** HelloJava
2. **Project Location:** Pilih folder di Documents Anda
3. **Create Main Class:** ✅ Centang (otomatis membuat class Main)
4. Klik **Finish**

### Langkah 3: Explore Project
Setelah project dibuat, Anda akan melihat struktur seperti ini:

\`\`\`
HelloJava/
├── Source Packages
│   └── com.mycompany.hellojava
│       └── HelloJava.java  ← File utama kita
├── Libraries
│   └── JDK 17
└── pom.xml
\`\`\`

**Penjelasan:**
- **Source Packages** - Tempat kode Java Anda
- **Libraries** - Library/dependency yang digunakan
- **pom.xml** - File konfigurasi Maven (ignore dulu)

### Langkah 4: Lihat Code
Double-click **HelloJava.java**, Anda akan melihat code template:
      `,code:{language:"java",filename:"HelloJava.java",code:`package com.mycompany.hellojava;

public class HelloJava {

    public static void main(String[] args) {
        // TODO code application logic here
    }
}`},afterCode:"\n**Penjelasan Code:**\n- `package` - Organisasi code (seperti folder)\n- `public class HelloJava` - Nama class (harus sama dengan nama file)\n- `public static void main` - Method utama, entry point program\n- `// TODO` - Komentar, diabaikan saat dijalankan\n\nSelamat! Anda sudah membuat project Java pertama! 🎉\n      "},{id:"hello-world",title:"Menjalankan Program Hello World",content:`
Sekarang saatnya menulis code pertama dan menjalankannya!

### Langkah 1: Edit Code
Ganti comment \`// TODO\` dengan code ini:
      `,code:{language:"java",filename:"HelloJava.java",code:`package com.mycompany.hellojava;

public class HelloJava {

    public static void main(String[] args) {
        System.out.println("Hello World!");
        System.out.println("Selamat datang di dunia Java!");
        System.out.println("Nama saya: [isi nama Anda]");
    }
}`},afterCode:`
**Penjelasan:**
- \`System.out.println()\` - Mencetak text ke console
- Text harus di dalam tanda kutip \`"..."\`
- Setiap statement diakhiri dengan \`;\`

### Langkah 2: Run Program
Ada beberapa cara run program:

**Cara 1:** Klik kanan file > Run File (Shift+F6)
**Cara 2:** Klik tombol ▶️ hijau di toolbar
**Cara 3:** Tekan F6

### Langkah 3: Lihat Output
Setelah run, lihat panel **Output** di bawah. Anda akan melihat:
      `,code2:{language:"text",code:`Hello World!
Selamat datang di dunia Java!
Nama saya: [isi nama Anda]
BUILD SUCCESS`},afterCode2:`
**BUILD SUCCESS** artinya program Anda berhasil dijalankan! 🎉

### Latihan Mandiri:
1. Coba ganti text dalam \`println()\`
2. Tambahkan lebih banyak baris \`println()\`
3. Apa yang terjadi jika Anda lupa tanda \`;\`?
4. Apa yang terjadi jika Anda lupa tanda kutip \`"\`?

**Tips:** Jangan takut untuk bereksperimen dan membuat error!
Error adalah guru terbaik dalam programming. 💪
      `},{id:"summary",title:"Ringkasan Modul 1",content:`
Selamat! Anda telah menyelesaikan Modul 1! 🎊

**Yang sudah Anda pelajari:**
✅ Apa itu aplikasi desktop
✅ Perbedaan desktop, web, dan mobile
✅ Kenapa Java cocok untuk desktop
✅ Install JDK dan NetBeans
✅ Membuat project Java pertama
✅ Menulis dan menjalankan program Hello World

**Next Steps:**
Di modul berikutnya, kita akan belajar:
- Variabel dan tipe data
- Input dari user
- Operator matematika
- Dan banyak lagi!

**Tips Belajar:**
- Practice makes perfect! Jangan hanya baca, tapi ketik ulang codenya
- Jika ada error, baca pesan errornya dengan teliti
- Google adalah teman terbaik programmer
- Jangan skip modul, pelajari secara berurutan

Siap lanjut ke Modul 2? Let's go! 🚀
      `}]},Tk={title:"Dasar-Dasar Java",sections:[{id:"struktur",title:"Struktur Program Java",content:`
Setiap program Java memiliki struktur dasar yang harus diikuti. Mari kita pahami setiap bagiannya:
      `,code:{language:"java",filename:"ContohStruktur.java",code:`// 1. Package declaration (opsional)
package com.belajar.java;

// 2. Import statements (jika perlu library lain)
import java.util.Scanner;

// 3. Class declaration (WAJIB)
public class ContohStruktur {

    // 4. Main method (entry point program)
    public static void main(String[] args) {
        // 5. Statements/code Anda di sini
        System.out.println("Hello Java!");
    }
}`},afterCode:`
**Penjelasan Struktur:**

1. **Package** - Organisasi code, seperti folder
   - Opsional untuk program kecil
   - Format: \`package nama.paket;\`

2. **Import** - Menggunakan class dari package lain
   - Contoh: \`import java.util.Scanner;\` untuk input user

3. **Class Declaration** - Kontainer untuk code
   - Nama class harus sama dengan nama file
   - \`public\` = bisa diakses dari mana saja
   - \`class\` = keyword untuk membuat class

4. **Main Method** - Titik mulai program
   - Signature harus persis: \`public static void main(String[] args)\`
   - Program dimulai dari sini

5. **Statements** - Instruksi/perintah program
   - Diakhiri dengan \`;\` (semicolon)
   - Dijalankan dari atas ke bawah

**Aturan Penting:**
- Huruf besar/kecil berbeda (case-sensitive): \`Hello\` ≠ \`hello\`
- Nama file harus sama dengan nama class
- Setiap statement diakhiri \`;\`
- Code di dalam \`{}\` (curly braces)
      `},{id:"variabel",title:"Variabel dan Tipe Data",content:`
**Variabel** adalah tempat menyimpan data di memori. Bayangkan seperti kotak dengan label yang bisa diisi sesuatu.

**Tipe Data Dasar di Java:**

| Tipe Data | Untuk | Contoh | Ukuran |
|-----------|-------|--------|--------|
| \`int\` | Bilangan bulat | 42, -10, 0 | 4 bytes |
| \`double\` | Bilangan desimal | 3.14, -0.5 | 8 bytes |
| \`boolean\` | true/false | true, false | 1 bit |
| \`char\` | Karakter tunggal | 'A', '5', '@' | 2 bytes |
| \`String\` | Text/kalimat | "Hello" | Variable |

**Cara Deklarasi Variabel:**
      `,code:{language:"java",filename:"ContohVariabel.java",code:`public class ContohVariabel {
    public static void main(String[] args) {
        // Deklarasi + inisialisasi
        int umur = 20;
        double ipk = 3.75;
        boolean lulus = true;
        char grade = 'A';
        String nama = "Budi Santoso";

        // Print variabel
        System.out.println("Nama: " + nama);
        System.out.println("Umur: " + umur + " tahun");
        System.out.println("IPK: " + ipk);
        System.out.println("Grade: " + grade);
        System.out.println("Lulus: " + lulus);

        // Mengubah nilai variabel
        umur = 21;  // ulang tahun!
        System.out.println("Umur baru: " + umur);
    }
}`},afterCode:"\n**Output:**\n```\nNama: Budi Santoso\nUmur: 20 tahun\nIPK: 3.75\nGrade: A\nLulus: true\nUmur baru: 21\n```\n\n**Aturan Penamaan Variabel:**\n✅ DO:\n- Mulai dengan huruf kecil: `umur`, `namaMahasiswa`\n- CamelCase untuk multi-kata: `ipkSemesterIni`\n- Deskriptif: `jumlahMahasiswa` > `jm`\n\n❌ DON'T:\n- Dimulai angka: `1nama` ❌\n- Pakai spasi: `nama mahasiswa` ❌\n- Pakai karakter khusus: `nama@mahasiswa` ❌\n- Pakai keyword Java: `int`, `class`, dll ❌\n      "},{id:"input-output",title:"Input dan Output",content:"\n**Output** sudah kita pelajari: `System.out.println()`\n\nSekarang mari belajar **Input** dari user menggunakan `Scanner`:\n      ",code:{language:"java",filename:"ContohInput.java",code:`import java.util.Scanner;  // Jangan lupa import!

public class ContohInput {
    public static void main(String[] args) {
        // Buat Scanner object untuk input
        Scanner input = new Scanner(System.in);

        // Input String
        System.out.print("Masukkan nama Anda: ");
        String nama = input.nextLine();

        // Input int
        System.out.print("Masukkan umur Anda: ");
        int umur = input.nextInt();

        // Input double
        System.out.print("Masukkan IPK Anda: ");
        double ipk = input.nextDouble();

        // Tampilkan hasil
        System.out.println("\\n=== DATA MAHASISWA ===");
        System.out.println("Nama : " + nama);
        System.out.println("Umur : " + umur + " tahun");
        System.out.println("IPK  : " + ipk);

        // Tutup Scanner (good practice)
        input.close();
    }
}`},afterCode:"\n**Penjelasan:**\n- `Scanner input = new Scanner(System.in);` - Buat Scanner object\n- `input.nextLine()` - Baca String (satu baris)\n- `input.nextInt()` - Baca integer\n- `input.nextDouble()` - Baca double\n- `input.next()` - Baca String (satu kata)\n- `input.close()` - Tutup Scanner (hemat memory)\n\n**Method Scanner Lainnya:**\n- `nextBoolean()` - untuk boolean\n- `nextByte()` - untuk byte\n- `nextLong()` - untuk long\n\n**Tips:**\n- `print()` tidak pindah baris, `println()` pindah baris\n- `\\n` = new line (enter)\n- `\\t` = tab\n      "},{id:"operator",title:"Operator",content:`
Operator digunakan untuk melakukan operasi pada variabel dan nilai.

**1. Operator Aritmatika**
      `,code:{language:"java",code:`int a = 10, b = 3;

System.out.println(a + b);  // 13 (penjumlahan)
System.out.println(a - b);  // 7  (pengurangan)
System.out.println(a * b);  // 30 (perkalian)
System.out.println(a / b);  // 3  (pembagian bulat)
System.out.println(a % b);  // 1  (modulus/sisa bagi)

double x = 10.0, y = 3.0;
System.out.println(x / y);  // 3.333... (pembagian desimal)`},afterCode:`
**2. Operator Perbandingan** (hasil: boolean)
      `,code2:{language:"java",code:`int nilai = 85;

System.out.println(nilai == 85);   // true  (sama dengan)
System.out.println(nilai != 70);   // true  (tidak sama)
System.out.println(nilai > 80);    // true  (lebih besar)
System.out.println(nilai < 90);    // true  (lebih kecil)
System.out.println(nilai >= 85);   // true  (lebih besar atau sama)
System.out.println(nilai <= 84);   // false (lebih kecil atau sama)`},afterCode2:`
**3. Operator Logika** (untuk kondisi kompleks)
      `},{id:"operator-lanjutan",title:"Operator Logika & Assignment",content:`
**Operator Logika:**
      `,code:{language:"java",code:`int nilai = 85;
boolean hadir = true;

// AND (&&) - semua harus true
System.out.println(nilai >= 80 && hadir);  // true

// OR (||) - salah satu true
System.out.println(nilai >= 90 || hadir);  // true

// NOT (!) - kebalikan
System.out.println(!hadir);  // false`},afterCode:`
**Operator Assignment:**
      `,code2:{language:"java",code:`int x = 10;

x = x + 5;   // x sekarang 15
x += 5;      // sama dengan x = x + 5; (shorthand)

x -= 3;      // x = x - 3; (x sekarang 12)
x *= 2;      // x = x * 2; (x sekarang 24)
x /= 4;      // x = x / 4; (x sekarang 6)
x %= 4;      // x = x % 4; (x sekarang 2)

// Increment & Decrement
x++;         // x = x + 1; (x sekarang 3)
x--;         // x = x - 1; (x sekarang 2)`}},{id:"kondisional",title:"Kondisional (if-else, switch)",content:`
**Kondisional** memungkinkan program membuat keputusan.

**1. If Statement**
      `,code:{language:"java",filename:"ContohIf.java",code:`import java.util.Scanner;

public class ContohIf {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan nilai: ");
        int nilai = input.nextInt();

        // If sederhana
        if (nilai >= 80) {
            System.out.println("Selamat! Anda lulus dengan nilai A!");
        }

        // If-else
        if (nilai >= 60) {
            System.out.println("Anda LULUS");
        } else {
            System.out.println("Anda TIDAK LULUS");
        }

        // If-else if-else (multi kondisi)
        if (nilai >= 80) {
            System.out.println("Grade: A (Excellent!)");
        } else if (nilai >= 70) {
            System.out.println("Grade: B (Good!)");
        } else if (nilai >= 60) {
            System.out.println("Grade: C (Pass)");
        } else {
            System.out.println("Grade: D (Fail)");
        }

        input.close();
    }
}`},afterCode:`
**2. Switch Statement** (untuk multiple choice)
      `,code2:{language:"java",filename:"ContohSwitch.java",code:`import java.util.Scanner;

public class ContohSwitch {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("MENU MAKANAN:");
        System.out.println("1. Nasi Goreng - Rp 15.000");
        System.out.println("2. Mie Goreng  - Rp 12.000");
        System.out.println("3. Ayam Geprek - Rp 18.000");
        System.out.print("Pilih menu (1-3): ");

        int pilihan = input.nextInt();

        switch (pilihan) {
            case 1:
                System.out.println("Anda pesan Nasi Goreng");
                System.out.println("Total: Rp 15.000");
                break;  // Keluar dari switch
            case 2:
                System.out.println("Anda pesan Mie Goreng");
                System.out.println("Total: Rp 12.000");
                break;
            case 3:
                System.out.println("Anda pesan Ayam Geprek");
                System.out.println("Total: Rp 18.000");
                break;
            default:
                System.out.println("Menu tidak tersedia!");
        }

        input.close();
    }
}`},afterCode2:`
**Kapan pakai if vs switch?**
- **if-else**: Kondisi kompleks, range nilai (\`nilai >= 80\`)
- **switch**: Nilai pasti/discrete (1, 2, 3 atau "A", "B", "C")
- **break**: Penting! Tanpa break, code terus ke case berikutnya
      `},{id:"perulangan",title:"Perulangan (Loop)",content:`
**Loop** digunakan untuk mengulang code berkali-kali.

**1. For Loop** (tahu berapa kali ulang)
      `,code:{language:"java",code:`// Cetak angka 1-5
for (int i = 1; i <= 5; i++) {
    System.out.println("Angka: " + i);
}

// Output:
// Angka: 1
// Angka: 2
// Angka: 3
// Angka: 4
// Angka: 5

// Hitung mundur
for (int i = 5; i >= 1; i--) {
    System.out.println(i);
}
System.out.println("GO!");

// Loncat 2-2
for (int i = 0; i <= 10; i += 2) {
    System.out.println(i);  // 0, 2, 4, 6, 8, 10
}`},afterCode:"\n**Penjelasan For Loop:**\n`for (init; condition; update)`\n- **init**: `int i = 1` - Nilai awal\n- **condition**: `i <= 5` - Kapan loop berhenti\n- **update**: `i++` - Perubahan setiap iterasi\n\n**2. While Loop** (ulang selama kondisi true)\n      ",code2:{language:"java",code:`int i = 1;
while (i <= 5) {
    System.out.println("Angka: " + i);
    i++;
}

// Contoh: Input sampai benar
Scanner input = new Scanner(System.in);
int password = 1234;
int coba;

System.out.println("Masukkan password:");
coba = input.nextInt();

while (coba != password) {
    System.out.println("Password salah! Coba lagi:");
    coba = input.nextInt();
}

System.out.println("Password benar! Akses diberikan.");`}},{id:"perulangan-lanjutan",title:"Do-While & Nested Loop",content:`
**3. Do-While Loop** (eksekusi minimal 1 kali)
      `,code:{language:"java",code:`Scanner input = new Scanner(System.in);
int pilihan;

do {
    System.out.println("\\n=== MENU ===");
    System.out.println("1. Lihat Data");
    System.out.println("2. Tambah Data");
    System.out.println("3. Keluar");
    System.out.print("Pilih menu: ");
    pilihan = input.nextInt();

    switch (pilihan) {
        case 1:
            System.out.println("Menampilkan data...");
            break;
        case 2:
            System.out.println("Menambah data...");
            break;
        case 3:
            System.out.println("Terima kasih!");
            break;
        default:
            System.out.println("Pilihan tidak valid!");
    }
} while (pilihan != 3);  // Ulang sampai user pilih 3`},afterCode:`
**Perbedaan While vs Do-While:**
- **While**: Cek kondisi dulu, baru eksekusi
- **Do-While**: Eksekusi dulu, baru cek kondisi

**4. Nested Loop** (loop di dalam loop)
      `,code2:{language:"java",code:`// Cetak pola bintang
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}

// Output:
// *
// * *
// * * *
// * * * *
// * * * * *

// Tabel perkalian
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        System.out.print((i * j) + "\\t");
    }
    System.out.println();
}`},afterCode2:`
**Break & Continue:**
      `},{id:"break-continue",title:"Break & Continue",content:`
**Break** - Keluar dari loop
**Continue** - Skip iterasi saat ini, lanjut ke iterasi berikutnya
      `,code:{language:"java",code:`// BREAK - Berhenti saat ketemu angka 5
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;  // Keluar dari loop
    }
    System.out.println(i);
}
// Output: 1 2 3 4

// CONTINUE - Skip angka 5
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;  // Skip, lanjut ke i=6
    }
    System.out.println(i);
}
// Output: 1 2 3 4 6 7 8 9 10

// Contoh praktis: Cari bilangan prima
int n = 29;
boolean prima = true;

for (int i = 2; i <= n/2; i++) {
    if (n % i == 0) {
        prima = false;
        break;  // Sudah ketemu pembagi, tidak perlu lanjut
    }
}

if (prima) {
    System.out.println(n + " adalah bilangan prima");
} else {
    System.out.println(n + " bukan bilangan prima");
}`}},{id:"array",title:"Array dan ArrayList",content:`
**Array** adalah kumpulan variabel dengan tipe yang sama.

**1. Array Dasar**
      `,code:{language:"java",code:`// Deklarasi array
int[] nilai = new int[5];  // Array 5 elemen

// Mengisi array
nilai[0] = 85;
nilai[1] = 90;
nilai[2] = 78;
nilai[3] = 92;
nilai[4] = 88;

// Akses array
System.out.println("Nilai 1: " + nilai[0]);
System.out.println("Nilai 3: " + nilai[2]);

// Deklarasi dengan inisialisasi
String[] nama = {"Budi", "Ani", "Citra", "Doni"};

// Loop array
System.out.println("Daftar nama:");
for (int i = 0; i < nama.length; i++) {
    System.out.println((i+1) + ". " + nama[i]);
}

// Enhanced for loop (for-each)
System.out.println("\\nDengan for-each:");
for (String n : nama) {
    System.out.println("- " + n);
}`},afterCode:`
**2. ArrayList** (dynamic array, bisa grow/shrink)
      `,code2:{language:"java",code:`import java.util.ArrayList;

public class ContohArrayList {
    public static void main(String[] args) {
        // Buat ArrayList
        ArrayList<String> mahasiswa = new ArrayList<>();

        // Tambah elemen
        mahasiswa.add("Budi");
        mahasiswa.add("Ani");
        mahasiswa.add("Citra");

        // Akses elemen
        System.out.println("Mahasiswa 1: " + mahasiswa.get(0));

        // Ukuran
        System.out.println("Total mahasiswa: " + mahasiswa.size());

        // Update elemen
        mahasiswa.set(1, "Andi");  // Ganti "Ani" jadi "Andi"

        // Hapus elemen
        mahasiswa.remove(2);  // Hapus index 2
        mahasiswa.remove("Budi");  // Hapus by value

        // Loop ArrayList
        for (String mhs : mahasiswa) {
            System.out.println("- " + mhs);
        }

        // Cek ada/tidak
        if (mahasiswa.contains("Andi")) {
            System.out.println("Andi ada di list");
        }

        // Clear semua
        mahasiswa.clear();
        System.out.println("List dikosongkan");
    }
}`},afterCode2:"\n**Array vs ArrayList:**\n\n| Array | ArrayList |\n|-------|-----------|\n| Fixed size | Dynamic size |\n| `int[] arr = new int[5]` | `ArrayList<Integer> list = new ArrayList<>()` |\n| `arr[0]` | `list.get(0)` |\n| `arr.length` | `list.size()` |\n| Lebih cepat | Lebih fleksibel |\n      "},{id:"string",title:"String Manipulation",content:`
**String** adalah sequence of characters. String di Java adalah object, bukan primitive type.

**Method String yang Sering Digunakan:**
      `,code:{language:"java",code:`String nama = "Budi Santoso";
String email = "budi@email.com";

// 1. Length
System.out.println(nama.length());  // 13

// 2. Uppercase & Lowercase
System.out.println(nama.toUpperCase());  // BUDI SANTOSO
System.out.println(nama.toLowerCase());  // budi santoso

// 3. Substring (potong string)
System.out.println(nama.substring(0, 4));  // Budi
System.out.println(nama.substring(5));     // Santoso

// 4. Replace
System.out.println(nama.replace("Budi", "Andi"));  // Andi Santoso

// 5. Split (pecah string jadi array)
String[] parts = nama.split(" ");
System.out.println(parts[0]);  // Budi
System.out.println(parts[1]);  // Santoso

// 6. Contains (cek substring)
if (email.contains("@")) {
    System.out.println("Email valid");
}

// 7. Equals (bandingkan string)
String password = "rahasia123";
String input = "rahasia123";

if (password.equals(input)) {
    System.out.println("Password benar");
}

// JANGAN pakai == untuk string!
// Pakai .equals() atau .equalsIgnoreCase()

// 8. Trim (hapus spasi depan/belakang)
String text = "  hello  ";
System.out.println(text.trim());  // "hello"

// 9. charAt (ambil karakter di index)
System.out.println(nama.charAt(0));  // B

// 10. indexOf (cari posisi substring)
System.out.println(email.indexOf("@"));  // 4`},afterCode:`
**String Concatenation:**
      `,code2:{language:"java",code:`String firstName = "Budi";
String lastName = "Santoso";

// Cara 1: dengan +
String fullName = firstName + " " + lastName;

// Cara 2: dengan concat()
String fullName2 = firstName.concat(" ").concat(lastName);

// Cara 3: dengan String.format()
String fullName3 = String.format("%s %s", firstName, lastName);

// Untuk banyak concatenation, pakai StringBuilder (lebih efisien)
StringBuilder sb = new StringBuilder();
sb.append("Nama: ");
sb.append(firstName);
sb.append(" ");
sb.append(lastName);
String result = sb.toString();`}},{id:"latihan",title:"Latihan & Project Mini",content:`
Sekarang saatnya praktik! Coba buat program-program berikut:

**Latihan 1: Kalkulator Sederhana**
Buat program kalkulator yang bisa +, -, *, /
      `,code:{language:"java",filename:"Kalkulator.java",code:`import java.util.Scanner;

public class Kalkulator {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan angka 1: ");
        double num1 = input.nextDouble();

        System.out.print("Masukkan operator (+, -, *, /): ");
        char operator = input.next().charAt(0);

        System.out.print("Masukkan angka 2: ");
        double num2 = input.nextDouble();

        double hasil = 0;

        switch (operator) {
            case '+':
                hasil = num1 + num2;
                break;
            case '-':
                hasil = num1 - num2;
                break;
            case '*':
                hasil = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    hasil = num1 / num2;
                } else {
                    System.out.println("Error: Tidak bisa bagi 0!");
                    return;
                }
                break;
            default:
                System.out.println("Operator tidak valid!");
                return;
        }

        System.out.println("Hasil: " + hasil);
        input.close();
    }
}`},afterCode:`
**Latihan 2: Cek Bilangan Prima**
**Latihan 3: Tebak Angka**
**Latihan 4: Konversi Suhu**
**Latihan 5: Todo List dengan ArrayList**

Challenge: Coba buat sendiri tanpa lihat solusi dulu! 💪
      `},{id:"summary",title:"Ringkasan Modul 2",content:`
Hebat! Anda sudah menyelesaikan Modul 2! 🎉

**Yang sudah dipelajari:**
✅ Struktur program Java
✅ Variabel dan tipe data (int, double, String, boolean, char)
✅ Input/Output dengan Scanner
✅ Operator (aritmatika, perbandingan, logika)
✅ Kondisional (if-else, switch)
✅ Perulangan (for, while, do-while)
✅ Break & Continue
✅ Array dan ArrayList
✅ String manipulation

**Konsep Penting yang Harus Dikuasai:**
- Tipe data yang tepat untuk kebutuhan
- Logic kondisional (if-else vs switch)
- Pilih loop yang tepat (for vs while vs do-while)
- Array untuk fixed size, ArrayList untuk dynamic
- String manipulation untuk text processing

**Next: Modul 3 - Method & Function**
Di modul berikutnya kita akan belajar:
- Membuat method sendiri
- Parameter dan return value
- Method overloading
- Static vs non-static
- Scope variabel

**Tips Belajar:**
- PRAKTEK! Buat program kecil setiap hari
- Debug sendiri error Anda (belajar dari error)
- Coba variasi dari contoh yang diberikan
- Jangan copy-paste, ketik ulang untuk muscle memory

Selamat belajar! Lanjut ke Modul 3? 🚀
      `}]},Ak={title:"Method & Function",sections:[{id:"intro-method",title:"Apa itu Method?",content:`
**Method** (atau function) adalah blok kode yang dapat dipanggil berulang kali untuk melakukan tugas tertentu.

**Kenapa pakai Method?**
1. **DRY (Don't Repeat Yourself)** - Tidak perlu tulis code yang sama berkali-kali
2. **Modular** - Code lebih terorganisir dan mudah dipahami
3. **Reusable** - Bisa dipakai berkali-kali
4. **Maintainable** - Mudah update dan debug

**Analogi:**
Bayangkan method seperti resep masakan. Sekali bikin resep, bisa dipakai berkali-kali.

**Contoh tanpa method (repetitive):**
      `,code:{language:"java",code:`System.out.println("=== BIODATA ===");
System.out.println("Nama: Budi");
System.out.println("Umur: 20");
System.out.println("===============");

System.out.println("=== BIODATA ===");
System.out.println("Nama: Ani");
System.out.println("Umur: 21");
System.out.println("===============");

// Bayangkan ada 100 data? 😱`},afterCode:`
**Dengan method (clean & reusable):**
      `,code2:{language:"java",code:`public static void tampilkanBiodata(String nama, int umur) {
    System.out.println("=== BIODATA ===");
    System.out.println("Nama: " + nama);
    System.out.println("Umur: " + umur);
    System.out.println("===============");
}

// Panggil berkali-kali
tampilkanBiodata("Budi", 20);
tampilkanBiodata("Ani", 21);
// 100x juga gampang! 😎`}},{id:"membuat-method",title:"Membuat Method",content:`
**Sintaks Method:**

\`\`\`
accessModifier returnType namaMethod(parameter) {
    // code di sini
    return value; // jika ada return type
}
\`\`\`

**Penjelasan:**
- **accessModifier**: \`public\`, \`private\`, dll (kita pakai \`public\` dulu)
- **returnType**: Tipe data yang dikembalikan (\`void\` jika tidak return)
- **namaMethod**: Nama method (camelCase)
- **parameter**: Input untuk method (opsional)

**Contoh Method Sederhana:**
      `,code:{language:"java",filename:"ContohMethod.java",code:`public class ContohMethod {

    // Method tanpa parameter dan return (void)
    public static void sapaPengguna() {
        System.out.println("Halo! Selamat datang!");
        System.out.println("Semoga hari Anda menyenangkan!");
    }

    // Method dengan parameter, tanpa return
    public static void sapaNama(String nama) {
        System.out.println("Halo " + nama + "!");
        System.out.println("Selamat belajar Java!");
    }

    // Method tanpa parameter, dengan return
    public static String getDayName() {
        return "Senin";
    }

    // Method dengan parameter dan return
    public static int tambah(int a, int b) {
        int hasil = a + b;
        return hasil;
    }

    public static void main(String[] args) {
        // Panggil method
        sapaPengguna();

        sapaNama("Budi");
        sapaNama("Ani");

        String hari = getDayName();
        System.out.println("Hari ini: " + hari);

        int jumlah = tambah(5, 3);
        System.out.println("5 + 3 = " + jumlah);

        // Bisa langsung print
        System.out.println("10 + 20 = " + tambah(10, 20));
    }
}`},afterCode:`
**Output:**
\`\`\`
Halo! Selamat datang!
Semoga hari Anda menyenangkan!
Halo Budi!
Selamat belajar Java!
Halo Ani!
Selamat belajar Java!
Hari ini: Senin
5 + 3 = 8
10 + 20 = 30
\`\`\`
      `},{id:"parameter-return",title:"Parameter dan Return Value",content:`
**Parameter** adalah input yang diberikan ke method.
**Return value** adalah output yang dikembalikan oleh method.

**Jenis-jenis Method:**
      `,code:{language:"java",code:`// 1. Tanpa parameter, tanpa return
public static void greet() {
    System.out.println("Hello!");
}

// 2. Dengan parameter, tanpa return
public static void greetName(String name) {
    System.out.println("Hello " + name + "!");
}

// 3. Tanpa parameter, dengan return
public static int getRandomNumber() {
    return 42;
}

// 4. Dengan parameter, dengan return
public static double hitungLuasLingkaran(double radius) {
    double luas = 3.14 * radius * radius;
    return luas;
}

// 5. Multiple parameters
public static int hitungVolume(int panjang, int lebar, int tinggi) {
    return panjang * lebar * tinggi;
}`},afterCode:`
**Contoh Penggunaan Real:**
      `,code2:{language:"java",filename:"KalkulatorSederhana.java",code:`import java.util.Scanner;

public class KalkulatorSederhana {

    public static double tambah(double a, double b) {
        return a + b;
    }

    public static double kurang(double a, double b) {
        return a - b;
    }

    public static double kali(double a, double b) {
        return a * b;
    }

    public static double bagi(double a, double b) {
        if (b == 0) {
            System.out.println("Error: Tidak bisa bagi 0!");
            return 0;
        }
        return a / b;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan angka 1: ");
        double num1 = input.nextDouble();

        System.out.print("Masukkan angka 2: ");
        double num2 = input.nextDouble();

        System.out.println("\\nHasil:");
        System.out.println(num1 + " + " + num2 + " = " + tambah(num1, num2));
        System.out.println(num1 + " - " + num2 + " = " + kurang(num1, num2));
        System.out.println(num1 + " × " + num2 + " = " + kali(num1, num2));
        System.out.println(num1 + " ÷ " + num2 + " = " + bagi(num1, num2));

        input.close();
    }
}`}},{id:"method-overloading",title:"Method Overloading",content:`
**Method Overloading** adalah membuat beberapa method dengan nama sama tapi **parameter berbeda**.

**Kenapa perlu?**
Untuk fleksibilitas - method bisa handle berbagai jenis input.

**Aturan Overloading:**
1. Nama method **HARUS SAMA**
2. Parameter **HARUS BERBEDA** (jumlah atau tipe)
3. Return type **BOLEH BERBEDA**
      `,code:{language:"java",filename:"ContohOverloading.java",code:`public class ContohOverloading {

    // Method 1: Tambah 2 angka integer
    public static int tambah(int a, int b) {
        System.out.println("Memanggil tambah(int, int)");
        return a + b;
    }

    // Method 2: Tambah 3 angka integer
    public static int tambah(int a, int b, int c) {
        System.out.println("Memanggil tambah(int, int, int)");
        return a + b + c;
    }

    // Method 3: Tambah 2 angka double
    public static double tambah(double a, double b) {
        System.out.println("Memanggil tambah(double, double)");
        return a + b;
    }

    // Method 4: Gabung 2 string
    public static String tambah(String a, String b) {
        System.out.println("Memanggil tambah(String, String)");
        return a + b;
    }

    public static void main(String[] args) {
        // Java otomatis pilih method yang sesuai
        System.out.println(tambah(5, 3));              // int
        System.out.println(tambah(5, 3, 2));           // int (3 param)
        System.out.println(tambah(5.5, 3.2));          // double
        System.out.println(tambah("Hello ", "World")); // String
    }
}`},afterCode:`
**Output:**
\`\`\`
Memanggil tambah(int, int)
8
Memanggil tambah(int, int, int)
10
Memanggil tambah(double, double)
8.7
Memanggil tambah(String, String)
Hello World
\`\`\`

**Use Case Real - Volume:**
      `,code2:{language:"java",code:`public class HitungVolume {

    // Volume kubus (1 parameter)
    public static double volume(double sisi) {
        return sisi * sisi * sisi;
    }

    // Volume balok (3 parameter)
    public static double volume(double panjang, double lebar, double tinggi) {
        return panjang * lebar * tinggi;
    }

    // Volume silinder (2 parameter)
    public static double volume(double radius, double tinggi) {
        return 3.14 * radius * radius * tinggi;
    }

    public static void main(String[] args) {
        System.out.println("Volume kubus (sisi 5): " + volume(5.0));
        System.out.println("Volume balok (4x3x2): " + volume(4.0, 3.0, 2.0));
        System.out.println("Volume silinder (r=3, t=5): " + volume(3.0, 5.0));
    }
}`}},{id:"static-vs-nonstatic",title:"Static vs Non-Static",content:`
Sampai sekarang kita selalu pakai \`static\`. Apa bedanya dengan non-static?

**Static Method:**
- Bisa dipanggil **tanpa** membuat object
- Dipanggil dengan: \`NamaClass.namaMethod()\`
- Tidak bisa akses instance variable

**Non-Static Method (Instance Method):**
- **HARUS** membuat object dulu
- Dipanggil dengan: \`namaObject.namaMethod()\`
- Bisa akses instance variable
      `,code:{language:"java",filename:"StaticVsNonStatic.java",code:`public class StaticVsNonStatic {

    // Static variable (milik class)
    static int jumlahMobil = 0;

    // Instance variable (milik object)
    String merk;
    String warna;

    // Constructor
    public StaticVsNonStatic(String merk, String warna) {
        this.merk = merk;
        this.warna = warna;
        jumlahMobil++; // Tambah counter
    }

    // Static method - bisa dipanggil tanpa object
    public static void infoJumlahMobil() {
        System.out.println("Total mobil: " + jumlahMobil);
    }

    // Non-static method - perlu object
    public void infoMobil() {
        System.out.println("Mobil: " + merk + " warna " + warna);
    }

    public static void main(String[] args) {
        // Static method - langsung panggil
        StaticVsNonStatic.infoJumlahMobil(); // Total: 0

        // Non-static - harus buat object dulu
        StaticVsNonStatic mobil1 = new StaticVsNonStatic("Toyota", "Merah");
        StaticVsNonStatic mobil2 = new StaticVsNonStatic("Honda", "Hitam");

        mobil1.infoMobil(); // Mobil: Toyota warna Merah
        mobil2.infoMobil(); // Mobil: Honda warna Hitam

        StaticVsNonStatic.infoJumlahMobil(); // Total: 2
    }
}`},afterCode:`
**Kapan pakai Static?**
- ✅ Utility function (Math.sqrt, Math.pow)
- ✅ Konstanta (Math.PI)
- ✅ Main method
- ✅ Counter shared

**Kapan pakai Non-Static?**
- ✅ Method yang butuh data object
- ✅ Method yang berbeda per object
- ✅ Kebanyakan method di OOP
      `},{id:"scope",title:"Scope Variabel",content:`
**Scope** adalah "area hidup" sebuah variabel.

**Jenis-jenis Scope:**
1. **Local Variable** - Di dalam method/block
2. **Parameter** - Di signature method
3. **Instance Variable** - Di dalam class (non-static)
4. **Static Variable** - Di dalam class (static)
      `,code:{language:"java",filename:"ContohScope.java",code:`public class ContohScope {

    // Static variable - bisa diakses di semua static method
    static int globalCounter = 0;

    // Instance variable - bisa diakses di semua non-static method
    String nama;

    public static void metodeSatu() {
        // Local variable - hanya ada di method ini
        int localVar = 10;
        System.out.println("localVar: " + localVar);
        System.out.println("globalCounter: " + globalCounter);

        // System.out.println(nama); // ERROR! static method tidak bisa akses instance var
    }

    public static void metodeDua() {
        // System.out.println(localVar); // ERROR! localVar hanya ada di metodeSatu
        System.out.println("globalCounter: " + globalCounter); // OK!

        // Local variable dengan nama sama OK, karena beda scope
        int localVar = 20;
        System.out.println("localVar di metodeDua: " + localVar);
    }

    public void metodeInstance() {
        // Non-static method bisa akses semua
        System.out.println("nama: " + nama);
        System.out.println("globalCounter: " + globalCounter);

        int localVar = 30;
        System.out.println("localVar: " + localVar);
    }

    public static void contohParameter(int angka) {
        // 'angka' adalah parameter - scope nya di method ini
        System.out.println("Parameter angka: " + angka);
        angka = 100; // Ubah nilai - tidak effect variable di luar
    }

    public static void main(String[] args) {
        metodeSatu();
        metodeDua();

        ContohScope obj = new ContohScope();
        obj.nama = "Budi";
        obj.metodeInstance();

        int nilai = 50;
        contohParameter(nilai);
        System.out.println("nilai tetap: " + nilai); // Masih 50
    }
}`},afterCode:`
**Aturan Penting:**
1. Variable local hanya hidup di block \`{}\` nya
2. Parameter seperti local variable
3. Hindari nama variable yang sama di scope berbeda (confusing)
4. Static method tidak bisa akses instance variable
5. Non-static method bisa akses semua
      `},{id:"best-practices",title:"Best Practices Method",content:`
**Tips Membuat Method yang Baik:**

**1. Single Responsibility**
Method harus punya **satu tugas** saja.

❌ **Bad:**
      `,code:{language:"java",code:`public static void prosesData() {
    // Input
    Scanner input = new Scanner(System.in);
    int angka = input.nextInt();

    // Validasi
    if (angka < 0) return;

    // Hitung
    int hasil = angka * 2;

    // Save ke file
    // ...

    // Print
    System.out.println(hasil);
}`},afterCode:`
✅ **Good:**
      `,code2:{language:"java",code:`public static int inputAngka() {
    Scanner input = new Scanner(System.in);
    return input.nextInt();
}

public static boolean isValid(int angka) {
    return angka >= 0;
}

public static int hitungDouble(int angka) {
    return angka * 2;
}

public static void tampilkanHasil(int hasil) {
    System.out.println("Hasil: " + hasil);
}

// Di main:
int angka = inputAngka();
if (isValid(angka)) {
    int hasil = hitungDouble(angka);
    tampilkanHasil(hasil);
}`}},{id:"latihan",title:"Latihan & Challenge",content:`
Sekarang giliran Anda praktik! Coba buat program berikut:

**Latihan 1: Konversi Suhu**
Buat method untuk konversi suhu:
- \`celsiusToFahrenheit(double celsius)\`
- \`fahrenheitToCelsius(double fahrenheit)\`
- \`celsiusToKelvin(double celsius)\`

**Latihan 2: Validasi**
Buat method untuk validasi:
- \`isEven(int number)\` - cek genap
- \`isPrime(int number)\` - cek bilangan prima
- \`isValidEmail(String email)\` - cek email valid (ada @)

**Latihan 3: String Manipulation**
Buat method overloading untuk:
- \`format(String text)\` - uppercase
- \`format(String text, boolean uppercase)\` - upper/lower sesuai parameter
- \`format(String text, String prefix, String suffix)\` - tambah prefix & suffix

**Latihan 4: Kalkulator Advanced**
Buat kalkulator dengan method:
- \`hitung(char operator, double a, double b)\`
- Support: +, -, *, /, %, ^ (pangkat)
- Validasi input (division by zero, dll)

**Challenge: ATM Sederhana**
Buat program ATM dengan method:
- \`cekSaldo()\` - lihat saldo
- \`setor(double jumlah)\` - setor uang
- \`tarik(double jumlah)\` - tarik uang (validasi saldo cukup)
- \`transfer(double jumlah, String tujuan)\` - transfer
- Loop menu sampai user pilih keluar

**Tips:**
- Gunakan \`static\` variable untuk saldo
- Validasi semua input
- Beri pesan yang jelas

Coba kerjakan sendiri dulu sebelum lihat solusi! 💪
      `},{id:"summary",title:"Ringkasan Modul 3",content:`
Selamat! Anda sudah menguasai Method & Function! 🎉

**Yang Sudah Dipelajari:**
✅ Konsep method dan manfaatnya
✅ Membuat method (dengan/tanpa parameter & return)
✅ Parameter dan return value
✅ Method overloading
✅ Static vs non-static method
✅ Scope variabel (local, parameter, instance, static)
✅ Best practices method

**Konsep Penting:**
- Method membuat code DRY, modular, reusable
- Overloading = nama sama, parameter beda
- Static = langsung panggil, non-static = butuh object
- Variable local hanya hidup di scope nya
- One method, one responsibility

**Next: Modul 4 - OOP**
Di modul berikutnya kita akan belajar:
- Class dan Object
- Constructor
- Encapsulation
- Inheritance
- Polymorphism

Method adalah fondasi OOP! Anda sudah siap untuk level berikutnya! 🚀

**Tips Lanjutan:**
- Praktik buat method untuk tugas sehari-hari
- Refactor code lama: pisahkan jadi method-method kecil
- Naming yang jelas: \`hitungTotal()\` > \`calc()\`
- Jangan takut buat method baru jika diperlukan

Happy Coding! 💻
      `}]},Ck={title:"Pemrograman Berorientasi Objek (OOP)",sections:[{id:"intro-oop",title:"Apa itu OOP?",content:`
**OOP (Object-Oriented Programming)** adalah paradigma pemrograman yang mengorganisir code berdasarkan **objek** - kombinasi data dan fungsi.

**Kenapa OOP?**
- 🎯 **Modular** - Code terorganisir rapi
- 🔄 **Reusable** - Code bisa dipakai ulang
- 🛡️ **Maintainable** - Mudah update dan debug
- 🌍 **Real-world modeling** - Mirip dunia nyata

**Analogi Dunia Nyata:**

Bayangkan Anda ingin buat program untuk **Mobil**:

**❌ Tanpa OOP (Prosedural):**
\`\`\`
String merk1 = "Toyota";
String warna1 = "Merah";
int kecepatan1 = 0;

String merk2 = "Honda";
String warna2 = "Hitam";
int kecepatan2 = 0;

// Banyak variabel terpisah, susah manage!
\`\`\`

**✅ Dengan OOP:**
\`\`\`
Mobil mobil1 = new Mobil("Toyota", "Merah");
Mobil mobil2 = new Mobil("Honda", "Hitam");

mobil1.gas();
mobil2.rem();
// Terorganisir, mudah dipahami!
\`\`\`

**4 Pilar OOP:**
1. **Encapsulation** - Pembungkusan data
2. **Inheritance** - Pewarisan sifat
3. **Polymorphism** - Banyak bentuk
4. **Abstraction** - Penyembunyian detail

Mari kita pelajari satu per satu! 🚀
      `},{id:"class-object",title:"Class dan Object",content:`
**Class** = Blueprint/cetakan
**Object** = Hasil dari blueprint

**Analogi:**
- **Class** = Denah rumah
- **Object** = Rumah fisiknya

**Membuat Class:**
      `,code:{language:"java",filename:"Mobil.java",code:`public class Mobil {
    // Attribute (data/properties)
    String merk;
    String warna;
    int kecepatan;

    // Method (behavior/fungsi)
    public void gas() {
        kecepatan += 10;
        System.out.println(merk + " mempercepat! Kecepatan: " + kecepatan + " km/jam");
    }

    public void rem() {
        kecepatan -= 5;
        if (kecepatan < 0) kecepatan = 0;
        System.out.println(merk + " mengerem! Kecepatan: " + kecepatan + " km/jam");
    }

    public void info() {
        System.out.println("Mobil " + merk + " warna " + warna);
        System.out.println("Kecepatan saat ini: " + kecepatan + " km/jam");
    }
}`},afterCode:`
**Menggunakan Class (Membuat Object):**
      `,code2:{language:"java",filename:"Main.java",code:`public class Main {
    public static void main(String[] args) {
        // Membuat object dari class Mobil
        Mobil mobil1 = new Mobil();

        // Set attribute
        mobil1.merk = "Toyota Avanza";
        mobil1.warna = "Merah";
        mobil1.kecepatan = 0;

        // Panggil method
        mobil1.info();
        mobil1.gas();
        mobil1.gas();
        mobil1.rem();
        mobil1.info();

        System.out.println("\\n---\\n");

        // Buat object kedua
        Mobil mobil2 = new Mobil();
        mobil2.merk = "Honda Jazz";
        mobil2.warna = "Hitam";
        mobil2.kecepatan = 0;

        mobil2.gas();
        mobil2.info();
    }
}`},afterCode2:`
**Output:**
\`\`\`
Mobil Toyota Avanza warna Merah
Kecepatan saat ini: 0 km/jam
Toyota Avanza mempercepat! Kecepatan: 10 km/jam
Toyota Avanza mempercepat! Kecepatan: 20 km/jam
Toyota Avanza mengerem! Kecepatan: 15 km/jam
Mobil Toyota Avanza warna Merah
Kecepatan saat ini: 15 km/jam

---

Honda Jazz mempercepat! Kecepatan: 10 km/jam
Mobil Honda Jazz warna Hitam
Kecepatan saat ini: 10 km/jam
\`\`\`

**Poin Penting:**
- Satu class bisa buat **banyak object**
- Setiap object punya data sendiri (independen)
- Method dipanggil dengan: \`namaObject.namaMethod()\`
      `},{id:"constructor",title:"Constructor dan This",content:`
**Constructor** adalah method khusus yang dipanggil saat object dibuat.

**Karakteristik Constructor:**
- Nama **HARUS SAMA** dengan nama class
- **TIDAK** punya return type
- Dipanggil otomatis saat \`new ClassName()\`

**Tanpa Constructor (manual set):**
      `,code:{language:"java",code:`Mobil mobil = new Mobil();
mobil.merk = "Toyota";    // Ribet!
mobil.warna = "Merah";
mobil.kecepatan = 0;`},afterCode:`
**Dengan Constructor (clean):**
      `,code2:{language:"java",filename:"Mobil.java",code:`public class Mobil {
    String merk;
    String warna;
    int kecepatan;

    // Constructor tanpa parameter (default)
    public Mobil() {
        merk = "Unknown";
        warna = "White";
        kecepatan = 0;
        System.out.println("Mobil dibuat!");
    }

    // Constructor dengan parameter
    public Mobil(String merk, String warna) {
        this.merk = merk;     // 'this' = object saat ini
        this.warna = warna;
        this.kecepatan = 0;
        System.out.println("Mobil " + merk + " dibuat!");
    }

    // Constructor overloading
    public Mobil(String merk, String warna, int kecepatan) {
        this.merk = merk;
        this.warna = warna;
        this.kecepatan = kecepatan;
    }

    public void info() {
        System.out.println(merk + " (" + warna + ") - " + kecepatan + " km/jam");
    }
}`},afterCode2:`
**Penggunaan:**
      `},{id:"constructor-usage",title:"Menggunakan Constructor",content:`
**Contoh Lengkap:**
      `,code:{language:"java",filename:"Main.java",code:`public class Main {
    public static void main(String[] args) {
        // Pakai constructor default
        Mobil mobil1 = new Mobil();
        mobil1.info();  // Unknown (White) - 0 km/jam

        // Pakai constructor dengan 2 parameter
        Mobil mobil2 = new Mobil("Toyota", "Merah");
        mobil2.info();  // Toyota (Merah) - 0 km/jam

        // Pakai constructor dengan 3 parameter
        Mobil mobil3 = new Mobil("Honda", "Hitam", 50);
        mobil3.info();  // Honda (Hitam) - 50 km/jam
    }
}`},afterCode:`
**Keyword \`this\`:**

\`this\` merujuk ke **object saat ini**.

**Kapan pakai \`this\`?**
Saat nama parameter sama dengan nama attribute:
      `,code2:{language:"java",code:`public Mobil(String merk, String warna) {
    // TANPA this - SALAH!
    merk = merk;      // Parameter = parameter (tidak set attribute!)
    warna = warna;

    // DENGAN this - BENAR!
    this.merk = merk;      // this.merk (attribute) = merk (parameter)
    this.warna = warna;
}`},afterCode2:`
**Best Practice:**
Selalu pakai \`this\` untuk clarity, walaupun nama beda.
      `},{id:"encapsulation",title:"Encapsulation",content:`
**Encapsulation** = Pembungkusan data agar tidak bisa diakses langsung dari luar.

**Kenapa?**
- 🔒 **Data Protection** - Cegah perubahan sembarangan
- ✅ **Validation** - Kontrol input
- 🎯 **Flexibility** - Mudah ubah implementasi

**Access Modifier:**
- \`private\` - Hanya bisa diakses di class sendiri
- \`public\` - Bisa diakses dari mana saja
- \`protected\` - Bisa diakses di class sendiri & subclass
- *(default)* - Bisa diakses di package yang sama

**❌ Tanpa Encapsulation:**
      `,code:{language:"java",code:`public class BankAccount {
    public double saldo;  // BAHAYA! Bisa diubah sembarangan
}

// Di main:
BankAccount akun = new BankAccount();
akun.saldo = -1000000;  // WOW! Saldo negatif! 😱`},afterCode:`
**✅ Dengan Encapsulation:**
      `,code2:{language:"java",filename:"BankAccount.java",code:`public class BankAccount {
    // Attribute private - tidak bisa diakses langsung
    private String nomorRekening;
    private String pemilik;
    private double saldo;

    // Constructor
    public BankAccount(String nomor, String pemilik, double saldoAwal) {
        this.nomorRekening = nomor;
        this.pemilik = pemilik;
        this.saldo = saldoAwal;
    }

    // Getter - untuk baca data
    public String getPemilik() {
        return pemilik;
    }

    public double getSaldo() {
        return saldo;
    }

    // Setter dengan validasi
    public void setor(double jumlah) {
        if (jumlah > 0) {
            saldo += jumlah;
            System.out.println("Setor berhasil: Rp " + jumlah);
        } else {
            System.out.println("Jumlah harus positif!");
        }
    }

    public void tarik(double jumlah) {
        if (jumlah > 0 && jumlah <= saldo) {
            saldo -= jumlah;
            System.out.println("Tarik berhasil: Rp " + jumlah);
        } else if (jumlah > saldo) {
            System.out.println("Saldo tidak cukup!");
        } else {
            System.out.println("Jumlah harus positif!");
        }
    }

    public void infoRekening() {
        System.out.println("=== INFO REKENING ===");
        System.out.println("Nomor: " + nomorRekening);
        System.out.println("Pemilik: " + pemilik);
        System.out.println("Saldo: Rp " + saldo);
    }
}`}},{id:"inheritance",title:"Inheritance (Pewarisan)",content:`
**Inheritance** = Class anak mewarisi sifat dari class parent.

**Kenapa?**
- ♻️ **Code Reuse** - Tidak perlu tulis ulang
- 🎯 **Hierarchy** - Organisasi yang jelas
- 🔧 **Maintainability** - Update di satu tempat

**Keyword: \`extends\`**

**Contoh Hirarki:**
\`\`\`
        Kendaraan (Parent/Superclass)
           /    \\
       Mobil   Motor  (Child/Subclass)
\`\`\`
      `,code:{language:"java",filename:"Kendaraan.java",code:`// Parent class
public class Kendaraan {
    protected String merk;
    protected int kecepatan;

    public Kendaraan(String merk) {
        this.merk = merk;
        this.kecepatan = 0;
    }

    public void gas() {
        kecepatan += 10;
        System.out.println(merk + " mempercepat! Kecepatan: " + kecepatan);
    }

    public void rem() {
        kecepatan -= 5;
        if (kecepatan < 0) kecepatan = 0;
        System.out.println(merk + " mengerem! Kecepatan: " + kecepatan);
    }

    public void info() {
        System.out.println("Kendaraan: " + merk);
        System.out.println("Kecepatan: " + kecepatan + " km/jam");
    }
}`},afterCode:`
**Child class - Mobil:**
      `,code2:{language:"java",filename:"Mobil.java",code:`// Child class yang inherit dari Kendaraan
public class Mobil extends Kendaraan {
    private int jumlahPintu;

    public Mobil(String merk, int jumlahPintu) {
        super(merk);  // Panggil constructor parent
        this.jumlahPintu = jumlahPintu;
    }

    // Method tambahan khusus Mobil
    public void bukaPintu() {
        System.out.println("Membuka " + jumlahPintu + " pintu mobil");
    }

    // Override method parent
    @Override
    public void info() {
        super.info();  // Panggil method parent
        System.out.println("Jumlah pintu: " + jumlahPintu);
    }
}`}},{id:"inheritance-example",title:"Contoh Lengkap Inheritance",content:`
Mari kita lihat contoh lengkap dengan Motor juga:
      `,code:{language:"java",filename:"Motor.java",code:`public class Motor extends Kendaraan {
    private String jenisMotor; // sport, bebek, matic

    public Motor(String merk, String jenis) {
        super(merk);
        this.jenisMotor = jenis;
    }

    public void wheelie() {
        if (kecepatan > 30) {
            System.out.println(merk + " melakukan wheelie! 🏍️");
        } else {
            System.out.println("Kecepatan kurang untuk wheelie!");
        }
    }

    @Override
    public void info() {
        super.info();
        System.out.println("Jenis: " + jenisMotor);
    }
}`},afterCode:`
**Penggunaan:**
      `,code2:{language:"java",filename:"Main.java",code:`public class Main {
    public static void main(String[] args) {
        // Mobil inherit semua dari Kendaraan
        Mobil mobil = new Mobil("Toyota", 4);
        mobil.gas();        // Method dari parent
        mobil.gas();
        mobil.bukaPintu();  // Method sendiri
        mobil.info();       // Override method parent

        System.out.println("\\n---\\n");

        // Motor juga inherit dari Kendaraan
        Motor motor = new Motor("Honda CBR", "Sport");
        motor.gas();
        motor.gas();
        motor.gas();
        motor.gas();
        motor.wheelie();    // Method sendiri
        motor.info();
    }
}`},afterCode2:"\n**Keyword Penting:**\n- `extends` - Untuk inherit class\n- `super` - Akses constructor/method parent\n- `@Override` - Menandakan method override (best practice)\n- `protected` - Bisa diakses child class\n      "},{id:"polymorphism",title:"Polymorphism (Polimorfisme)",content:`
**Polymorphism** = Satu interface, banyak bentuk.

**2 Jenis:**
1. **Compile-time** - Method overloading (sudah dipelajari)
2. **Runtime** - Method overriding (inheritance)

**Contoh Runtime Polymorphism:**
      `,code:{language:"java",filename:"Hewan.java",code:`// Parent class
public class Hewan {
    public void bersuara() {
        System.out.println("Hewan bersuara");
    }
}

// Child classes
public class Kucing extends Hewan {
    @Override
    public void bersuara() {
        System.out.println("Meow meow! 🐱");
    }
}

public class Anjing extends Hewan {
    @Override
    public void bersuara() {
        System.out.println("Woof woof! 🐶");
    }
}

public class Sapi extends Hewan {
    @Override
    public void bersuara() {
        System.out.println("Moo moo! 🐮");
    }
}`},afterCode:`
**Magic of Polymorphism:**
      `,code2:{language:"java",filename:"Main.java",code:`public class Main {
    public static void main(String[] args) {
        // Polymorphism - parent reference, child object
        Hewan hewan1 = new Kucing();
        Hewan hewan2 = new Anjing();
        Hewan hewan3 = new Sapi();

        // Panggil method yang sama, hasil berbeda!
        hewan1.bersuara();  // Meow meow!
        hewan2.bersuara();  // Woof woof!
        hewan3.bersuara();  // Moo moo!

        System.out.println("\\n--- Array Polymorphism ---");

        // Array of parent type
        Hewan[] kandang = {
            new Kucing(),
            new Anjing(),
            new Sapi(),
            new Kucing()
        };

        // Loop - otomatis panggil method yang sesuai!
        for (Hewan h : kandang) {
            h.bersuara();
        }
    }
}`},afterCode2:`
**Output:**
\`\`\`
Meow meow! 🐱
Woof woof! 🐶
Moo moo! 🐮

--- Array Polymorphism ---
Meow meow! 🐱
Woof woof! 🐶
Moo moo! 🐮
Meow meow! 🐱
\`\`\`

**Manfaat:**
- Flexible code
- Easy to extend (tambah class baru tanpa ubah code lama)
- Clean & maintainable
      `},{id:"abstract",title:"Abstract Class & Interface",content:`
**Abstract Class** = Class yang tidak bisa di-instantiate (buat object), hanya untuk diwariskan.

**Kapan pakai Abstract?**
Saat Anda punya base class yang tidak masuk akal dibuat objectnya.

Contoh: Class \`Hewan\` - tidak ada "hewan" generic di dunia nyata, yang ada kucing, anjing, dll.
      `,code:{language:"java",filename:"BentukGeometri.java",code:`// Abstract class
public abstract class BentukGeometri {
    protected String nama;

    public BentukGeometri(String nama) {
        this.nama = nama;
    }

    // Abstract method - harus diimplementasi di child
    public abstract double hitungLuas();
    public abstract double hitungKeliling();

    // Concrete method - bisa langsung dipakai
    public void info() {
        System.out.println("Bentuk: " + nama);
        System.out.println("Luas: " + hitungLuas());
        System.out.println("Keliling: " + hitungKeliling());
    }
}

// Child class - HARUS implement abstract methods
public class Persegi extends BentukGeometri {
    private double sisi;

    public Persegi(double sisi) {
        super("Persegi");
        this.sisi = sisi;
    }

    @Override
    public double hitungLuas() {
        return sisi * sisi;
    }

    @Override
    public double hitungKeliling() {
        return 4 * sisi;
    }
}

public class Lingkaran extends BentukGeometri {
    private double radius;

    public Lingkaran(double radius) {
        super("Lingkaran");
        this.radius = radius;
    }

    @Override
    public double hitungLuas() {
        return 3.14 * radius * radius;
    }

    @Override
    public double hitungKeliling() {
        return 2 * 3.14 * radius;
    }
}`},afterCode:`
**Interface** = Kontrak yang harus diikuti oleh class.

**Perbedaan Abstract Class vs Interface:**

| Abstract Class | Interface |
|----------------|-----------|
| Bisa punya concrete method | Semua method abstract (Java < 8) |
| Bisa punya attribute | Hanya konstanta |
| Single inheritance | Multiple implementation |
| Keyword: \`extends\` | Keyword: \`implements\` |
      `,code2:{language:"java",code:`// Interface
public interface Terbang {
    void terbang();
    void mendarat();
}

public interface Berenang {
    void berenang();
}

// Class bisa implement multiple interfaces
public class Bebek implements Terbang, Berenang {
    @Override
    public void terbang() {
        System.out.println("Bebek terbang rendah");
    }

    @Override
    public void mendarat() {
        System.out.println("Bebek mendarat di air");
    }

    @Override
    public void berenang() {
        System.out.println("Bebek berenang di kolam");
    }
}`}},{id:"summary",title:"Ringkasan Modul 4",content:`
WOW! Anda sudah menguasai OOP - konsep paling penting di Java! 🎉🎉🎉

**Yang Sudah Dipelajari:**
✅ Konsep OOP dan manfaatnya
✅ Class dan Object
✅ Constructor dan keyword \`this\`
✅ Encapsulation (private, public, getter/setter)
✅ Inheritance (\`extends\`, \`super\`)
✅ Polymorphism (method overriding)
✅ Abstract class dan Interface

**4 Pilar OOP:**
1. **Encapsulation** ✅ - Lindungi data dengan private + getter/setter
2. **Inheritance** ✅ - Wariskan sifat dengan \`extends\`
3. **Polymorphism** ✅ - Satu method, banyak bentuk
4. **Abstraction** ✅ - Abstract class & Interface

**Konsep Penting:**
- Class = blueprint, Object = instance
- Constructor dipanggil saat \`new\`
- \`this\` = object saat ini, \`super\` = parent class
- Encapsulation = data hiding untuk protection
- Inheritance = code reuse dan hierarchy
- Polymorphism = flexibility
- Abstract = tidak bisa instantiate
- Interface = kontrak/aturan

**Next: Modul 5 - GUI dengan NetBeans**
Sekarang kita akan mulai bagian SERU - membuat aplikasi dengan GUI!
- Drag & drop komponen
- Button, TextField, Table
- Event handling
- Layout Manager

Anda sudah punya fondasi OOP yang kuat. GUI akan jadi mudah! 🎨

**Tips:**
- Praktik buat class untuk objek di sekitar Anda
- Pikirkan hirarki: apa parent, apa child
- Gunakan encapsulation SELALU untuk data sensitif
- Interface untuk contract, Abstract untuk shared code

Lanjut ke GUI? Ini akan SANGAT FUN! 🚀
      `}]},wk={title:"GUI dengan NetBeans - Dasar",sections:[{id:"intro-gui",title:"Pengenalan Java Swing",content:`
Selamat datang di bagian paling SERU! 🎨

Sekarang kita akan membuat aplikasi dengan **GUI (Graphical User Interface)** - tampilan visual yang bisa diklik-klik, tidak lagi text-based di console!

**Java Swing** adalah framework GUI untuk Java yang:
- ✅ **Mature & Stable** - Sudah teruji puluhan tahun
- ✅ **Rich Components** - Banyak komponen siap pakai (Button, TextField, Table, dll)
- ✅ **Visual Editor** - NetBeans punya GUI Builder drag & drop!
- ✅ **Cross-platform** - Jalan di Windows, Mac, Linux dengan tampilan sama

**Perbedaan Console vs GUI:**

**Console (yang sudah kita pelajari):**
\`\`\`
Masukkan nama: █
\`\`\`

**GUI (yang akan kita buat):**
\`\`\`
┌─────────────────────────┐
│ Nama:  [____________] │
│                         │
│      [ Submit ]         │
└─────────────────────────┘
\`\`\`

Jauh lebih menarik kan? Mari kita mulai! 🚀

**Komponen Utama Swing:**
- **JFrame** - Window/jendela aplikasi
- **JPanel** - Container untuk komponen lain
- **JButton** - Tombol yang bisa diklik
- **JLabel** - Text label
- **JTextField** - Input text
- **JTable** - Tabel data
- Dan masih banyak lagi!
      `},{id:"jframe-pertama",title:"Membuat JFrame Pertama",content:`
**JFrame** adalah window/jendela aplikasi. Semua komponen GUI akan ditaruh di JFrame.

**Cara 1: Code Manual (untuk belajar konsep)**
      `,code:{language:"java",filename:"FramePertama.java",code:`import javax.swing.JFrame;

public class FramePertama {
    public static void main(String[] args) {
        // Buat JFrame
        JFrame frame = new JFrame("Aplikasi Pertama Saya");

        // Set ukuran (width, height)
        frame.setSize(400, 300);

        // Set posisi di tengah layar
        frame.setLocationRelativeTo(null);

        // Set aksi saat close button diklik
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Tampilkan frame
        frame.setVisible(true);

        System.out.println("Frame ditampilkan!");
    }
}`},afterCode:"\n**Jalankan program**, dan... BOOM! 🎉 Window pertama Anda muncul!\n\n**Penjelasan Method:**\n- `setSize(width, height)` - Ukuran window dalam pixel\n- `setLocationRelativeTo(null)` - Posisi di tengah layar\n- `setDefaultCloseOperation()` - Apa yang terjadi saat user close window\n  - `EXIT_ON_CLOSE` - Program berhenti\n  - `HIDE_ON_CLOSE` - Window sembunyi tapi program masih jalan\n  - `DO_NOTHING_ON_CLOSE` - Tidak ada aksi\n- `setVisible(true)` - Tampilkan window (harus di akhir!)\n\n**Cara 2: Extend JFrame (OOP approach - recommended)**\n      ",code2:{language:"java",filename:"AplikasiBelajar.java",code:`import javax.swing.JFrame;

public class AplikasiBelajar extends JFrame {

    public AplikasiBelajar() {
        // Set title
        setTitle("Aplikasi Belajar Java");

        // Set ukuran
        setSize(500, 400);

        // Posisi tengah
        setLocationRelativeTo(null);

        // Close operation
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public static void main(String[] args) {
        // Buat instance dan tampilkan
        AplikasiBelajar app = new AplikasiBelajar();
        app.setVisible(true);
    }
}`},afterCode2:`
Dengan extend JFrame, kita bisa customize window lebih mudah. Ini approach yang lebih OOP dan akan kita pakai terus!
      `},{id:"komponen-dasar",title:"Komponen Dasar: JLabel, JButton, JTextField",content:`
Mari tambahkan komponen ke JFrame kita!

**JLabel** - Menampilkan text
**JButton** - Tombol yang bisa diklik
**JTextField** - Input text dari user
      `,code:{language:"java",filename:"FormSederhana.java",code:`import javax.swing.*;

public class FormSederhana extends JFrame {

    // Deklarasi komponen
    private JLabel labelNama;
    private JTextField textNama;
    private JButton buttonSubmit;

    public FormSederhana() {
        setTitle("Form Sederhana");
        setSize(400, 200);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Buat komponen
        labelNama = new JLabel("Nama:");
        textNama = new JTextField(20); // 20 = lebar kolom
        buttonSubmit = new JButton("Submit");

        // Buat panel untuk taruh komponen
        JPanel panel = new JPanel();
        panel.add(labelNama);
        panel.add(textNama);
        panel.add(buttonSubmit);

        // Tambahkan panel ke frame
        add(panel);
    }

    public static void main(String[] args) {
        FormSederhana form = new FormSederhana();
        form.setVisible(true);
    }
}`},afterCode:`
**Jalankan!** Anda akan lihat:
- Label "Nama:"
- Text field untuk input
- Button "Submit"

Semua dalam satu baris karena JPanel default pakai **FlowLayout**.

**Komponen Properties:**
      `,code2:{language:"java",code:`// JLabel
JLabel label = new JLabel("Text di sini");
label.setText("Ganti text");           // Ganti text
label.setFont(new Font("Arial", Font.BOLD, 16));  // Ganti font

// JTextField
JTextField text = new JTextField(20);
text.setText("Default value");         // Set value
String input = text.getText();         // Ambil value
text.setEditable(false);               // Read-only

// JButton
JButton button = new JButton("Klik Saya");
button.setText("Text baru");           // Ganti text
button.setEnabled(false);              // Disable button`}},{id:"event-handling",title:"Event Handling - Membuat Button Interaktif",content:`
Sekarang kita buat button yang **benar-benar berfungsi** saat diklik!

**Event Handling** = Merespon aksi user (klik, ketik, dll)

**ActionListener** = Interface untuk handle button click
      `,code:{language:"java",filename:"FormInteraktif.java",code:`import javax.swing.*;
import java.awt.event.*;

public class FormInteraktif extends JFrame {

    private JLabel labelNama, labelHasil;
    private JTextField textNama;
    private JButton buttonSapa;

    public FormInteraktif() {
        setTitle("Form Interaktif");
        setSize(400, 200);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Komponen
        labelNama = new JLabel("Nama:");
        textNama = new JTextField(15);
        buttonSapa = new JButton("Sapa Saya!");
        labelHasil = new JLabel("");

        // Event handling - saat button diklik
        buttonSapa.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Ambil input dari textfield
                String nama = textNama.getText();

                // Set ke label hasil
                labelHasil.setText("Halo, " + nama + "! Selamat belajar!");
            }
        });

        // Panel
        JPanel panel = new JPanel();
        panel.add(labelNama);
        panel.add(textNama);
        panel.add(buttonSapa);
        panel.add(labelHasil);

        add(panel);
    }

    public static void main(String[] args) {
        FormInteraktif form = new FormInteraktif();
        form.setVisible(true);
    }
}`},afterCode:`
**Coba jalankan:**
1. Ketik nama Anda di text field
2. Klik button "Sapa Saya!"
3. Lihat hasil muncul di bawah! 🎉

**Penjelasan Event:**
- \`addActionListener()\` - Tambah event listener ke button
- \`ActionEvent e\` - Object yang berisi info event
- \`actionPerformed()\` - Method yang dipanggil saat button diklik

**Cara lain (Lambda - Java 8+):**
      `,code2:{language:"java",code:`// Lebih ringkas dengan lambda
buttonSapa.addActionListener(e -> {
    String nama = textNama.getText();
    labelHasil.setText("Halo, " + nama + "!");
});`}},{id:"layout-manager",title:"Layout Manager",content:`
**Layout Manager** mengatur posisi dan ukuran komponen di container.

**3 Layout Paling Umum:**

**1. FlowLayout** - Default, komponen berjajar horizontal
      `,code:{language:"java",code:`JPanel panel = new JPanel(new FlowLayout());
panel.add(new JButton("1"));
panel.add(new JButton("2"));
panel.add(new JButton("3"));
// Hasil: [1] [2] [3]`},afterCode:`
**2. BorderLayout** - 5 region (NORTH, SOUTH, EAST, WEST, CENTER)
      `,code2:{language:"java",code:`JFrame frame = new JFrame();
frame.setLayout(new BorderLayout());

frame.add(new JButton("North"), BorderLayout.NORTH);
frame.add(new JButton("South"), BorderLayout.SOUTH);
frame.add(new JButton("East"), BorderLayout.EAST);
frame.add(new JButton("West"), BorderLayout.WEST);
frame.add(new JButton("Center"), BorderLayout.CENTER);

/*
┌──────────────────┐
│      North       │
├───┬─────────┬────┤
│   │         │    │
│ W │ Center  │ E  │
│   │         │    │
├───┴─────────┴────┤
│      South       │
└──────────────────┘
*/`}},{id:"gridlayout",title:"GridLayout & Contoh Layout",content:`
**3. GridLayout** - Grid seperti tabel (rows x cols)
      `,code:{language:"java",code:`// Grid 3 baris x 2 kolom
JPanel panel = new JPanel(new GridLayout(3, 2));
panel.add(new JButton("1"));
panel.add(new JButton("2"));
panel.add(new JButton("3"));
panel.add(new JButton("4"));
panel.add(new JButton("5"));
panel.add(new JButton("6"));

/*
┌────┬────┐
│ 1  │ 2  │
├────┼────┤
│ 3  │ 4  │
├────┼────┤
│ 5  │ 6  │
└────┴────┘
*/`},afterCode:`
**Contoh Aplikasi dengan BorderLayout:**
      `,code2:{language:"java",filename:"AplikasiLayout.java",code:`import javax.swing.*;
import java.awt.*;

public class AplikasiLayout extends JFrame {

    public AplikasiLayout() {
        setTitle("Contoh BorderLayout");
        setSize(500, 400);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Header
        JLabel header = new JLabel("Aplikasi Kalkulator", JLabel.CENTER);
        header.setFont(new Font("Arial", Font.BOLD, 20));
        add(header, BorderLayout.NORTH);

        // Panel tengah dengan GridLayout
        JPanel panelTengah = new JPanel(new GridLayout(2, 2, 10, 10));
        panelTengah.add(new JLabel("Angka 1:"));
        panelTengah.add(new JTextField());
        panelTengah.add(new JLabel("Angka 2:"));
        panelTengah.add(new JTextField());
        add(panelTengah, BorderLayout.CENTER);

        // Panel button di bawah
        JPanel panelButton = new JPanel(new FlowLayout());
        panelButton.add(new JButton("Tambah"));
        panelButton.add(new JButton("Kurang"));
        panelButton.add(new JButton("Kali"));
        panelButton.add(new JButton("Bagi"));
        add(panelButton, BorderLayout.SOUTH);
    }

    public static void main(String[] args) {
        AplikasiLayout app = new AplikasiLayout();
        app.setVisible(true);
    }
}`},afterCode2:`
**Tips Layout:**
- **FlowLayout** - Form sederhana, toolbar
- **BorderLayout** - Aplikasi dengan header/footer
- **GridLayout** - Kalkulator, keypad
- **null layout** - Positioning manual (tidak recommended)
      `},{id:"jpanel",title:"JPanel untuk Grouping",content:`
**JPanel** adalah container untuk grouping komponen. Sangat berguna untuk layout complex!

**Kenapa pakai JPanel?**
- 🎯 Grouping komponen logis
- 🎨 Beda layout di tiap panel
- 📦 Modular dan reusable

**Contoh: Form dengan Multiple Panels**
      `,code:{language:"java",filename:"FormDenganPanel.java",code:`import javax.swing.*;
import java.awt.*;

public class FormDenganPanel extends JFrame {

    public FormDenganPanel() {
        setTitle("Form Registrasi");
        setSize(400, 300);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Panel Header
        JPanel panelHeader = new JPanel();
        panelHeader.setBackground(Color.BLUE);
        JLabel labelJudul = new JLabel("FORM REGISTRASI");
        labelJudul.setForeground(Color.WHITE);
        labelJudul.setFont(new Font("Arial", Font.BOLD, 18));
        panelHeader.add(labelJudul);
        add(panelHeader, BorderLayout.NORTH);

        // Panel Form (tengah)
        JPanel panelForm = new JPanel(new GridLayout(3, 2, 10, 10));
        panelForm.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        panelForm.add(new JLabel("Nama:"));
        panelForm.add(new JTextField());
        panelForm.add(new JLabel("Email:"));
        panelForm.add(new JTextField());
        panelForm.add(new JLabel("Password:"));
        panelForm.add(new JPasswordField());

        add(panelForm, BorderLayout.CENTER);

        // Panel Button (bawah)
        JPanel panelButton = new JPanel(new FlowLayout());
        JButton btnDaftar = new JButton("Daftar");
        JButton btnBatal = new JButton("Batal");

        // Event
        btnDaftar.addActionListener(e -> {
            JOptionPane.showMessageDialog(this, "Registrasi berhasil!");
        });

        btnBatal.addActionListener(e -> {
            System.exit(0);
        });

        panelButton.add(btnDaftar);
        panelButton.add(btnBatal);
        add(panelButton, BorderLayout.SOUTH);
    }

    public static void main(String[] args) {
        FormDenganPanel form = new FormDenganPanel();
        form.setVisible(true);
    }
}`},afterCode:"\n**Fitur Baru:**\n- `JPasswordField` - Input password (hidden)\n- `setBorder()` - Tambah padding/margin\n- `setBackground()` - Warna background\n- `setForeground()` - Warna text\n- `JOptionPane.showMessageDialog()` - Popup message\n\n**Panel Nesting:**\nPanel bisa berisi panel lain! Sangat powerful untuk layout complex.\n      "},{id:"netbeans-gui-builder",title:"NetBeans GUI Builder (Drag & Drop)",content:`
Menulis code GUI manual itu bagus untuk belajar, tapi **NetBeans punya GUI Builder** yang bisa drag & drop! 🎨

**Cara Menggunakan GUI Builder:**

**1. Buat JFrame Form:**
- File > New File
- Categories: Java GUI Forms
- File Types: **JFrame Form**
- Klik Next
- Class Name: misalnya \`FormMahasiswa\`
- Klik Finish

**2. Design Mode:**
Anda akan lihat:
- **Design Area** - Canvas untuk drag & drop
- **Palette** - Komponen yang bisa ditambahkan
- **Properties** - Properties komponen yang dipilih
- **Navigator** - Hirarki komponen

**3. Drag & Drop Komponen:**
- Drag JLabel dari Palette ke Design Area
- Drag JTextField
- Drag JButton
- Atur posisi dengan drag
- Resize dengan handle di sudut

**4. Set Properties:**
- Klik komponen
- Lihat Properties panel
- Edit:
  - \`text\` - Text yang ditampilkan
  - \`font\` - Font
  - \`foreground\` - Warna text
  - \`variable name\` - Nama variable (penting!)

**5. Add Event:**
- Klik kanan button
- Events > Action > actionPerformed
- NetBeans generate method otomatis
- Tulis code di method tersebut

**Contoh Generated Code:**
NetBeans generate code di bagian "Generated Code" (collapsed, jangan edit manual!)

**Tips:**
- ✅ Pakai GUI Builder untuk layout complex
- ✅ Beri nama variable yang jelas (txtNama, btnSubmit, lblHasil)
- ✅ Design dulu baru code event
- ❌ Jangan edit "Generated Code" manual (bisa crash!)

**Advantages GUI Builder:**
- ⚡ Cepat untuk prototype
- 👁️ Visual feedback langsung
- 📐 Alignment otomatis
- 🎨 Bisa atur detail tanpa code banyak

**Best Practice:**
Untuk belajar, pahami dulu **code manual** (seperti yang kita pelajari).
Setelah paham konsep, pakai GUI Builder untuk productive! 🚀
      `},{id:"latihan",title:"Latihan & Mini Project",content:`
Saatnya praktik! Coba buat aplikasi berikut:

**Latihan 1: Kalkulator Sederhana**
Buat aplikasi dengan:
- 2 JTextField untuk input angka
- 4 JButton (+, -, *, /)
- 1 JLabel untuk hasil
- Event: saat button diklik, hitung dan tampilkan hasil

**Latihan 2: Form Login**
Buat form login dengan:
- JTextField untuk username
- JPasswordField untuk password
- JButton Login
- Event: cek username="admin" dan password="123"
  - Jika benar: popup "Login berhasil!"
  - Jika salah: popup "Login gagal!"

**Latihan 3: Konversi Suhu**
Buat aplikasi konversi Celsius ↔ Fahrenheit:
- JTextField input
- JComboBox pilih arah konversi
- JButton Konversi
- JLabel hasil
- Formula: F = (C × 9/5) + 32

**Mini Project: Aplikasi Biodata**
Buat form input biodata:
- Nama (JTextField)
- Jenis Kelamin (JRadioButton)
- Hobi (JCheckBox - multiple)
- Alamat (JTextArea)
- Button Simpan & Clear
- Event Simpan: tampilkan semua data di JTextArea hasil

**Challenge: Kombinasi Layout**
Buat aplikasi dengan layout:
- Header (NORTH) - Judul aplikasi
- Sidebar (WEST) - Menu button
- Content (CENTER) - Form/konten
- Footer (SOUTH) - Status bar

Tips: Pakai nested panels untuk struktur yang rapi!
      `},{id:"summary",title:"Ringkasan Modul 5",content:`
Mantap! Anda sudah bisa buat GUI! 🎨🎉

**Yang Sudah Dipelajari:**
✅ Pengenalan Java Swing
✅ JFrame - window aplikasi
✅ Komponen dasar: JLabel, JButton, JTextField
✅ Event handling dengan ActionListener
✅ Layout Manager (FlowLayout, BorderLayout, GridLayout)
✅ JPanel untuk grouping
✅ NetBeans GUI Builder (drag & drop)

**Komponen Swing:**
- \`JFrame\` - Window utama
- \`JPanel\` - Container
- \`JLabel\` - Text label
- \`JButton\` - Button
- \`JTextField\` - Input text
- \`JPasswordField\` - Input password

**Layout Manager:**
- \`FlowLayout\` - Horizontal flow
- \`BorderLayout\` - 5 regions
- \`GridLayout\` - Grid/tabel

**Event Handling:**
- \`ActionListener\` - Handle button click
- \`actionPerformed()\` - Method yang dipanggil

**Next: Modul 6 - GUI Lanjutan**
Di modul berikutnya kita akan belajar:
- JComboBox, JRadioButton, JCheckBox
- JTable untuk data tabular
- JTextArea, JScrollPane
- JMenu dan JMenuBar
- JDialog dan JOptionPane
- Form validation
- Custom styling

GUI dasar sudah dikuasai! Sekarang kita buat aplikasi yang lebih complex dan professional! 💼

**Tips Lanjutan:**
- Praktik dengan GUI Builder NetBeans
- Buat aplikasi kecil setiap hari
- Kombinasikan dengan OOP (tiap form = class)
- Lihat aplikasi existing untuk inspirasi layout

Happy GUI Programming! 🚀
      `}]},Dk={title:"GUI Lanjutan - Komponen & Teknik Advanced",slug:"gui-lanjutan",sections:[{id:"intro-gui-lanjutan",title:"Pengenalan GUI Lanjutan",content:`
        <h2>Mengapa Perlu Mempelajari Komponen GUI Lanjutan?</h2>
        <p>Setelah menguasai dasar-dasar GUI, saatnya kita tingkatkan kemampuan dengan komponen-komponen yang lebih canggih dan teknik-teknik profesional.</p>

        <h3>Yang Akan Dipelajari di Modul Ini:</h3>
        <ul>
          <li><strong>JComboBox</strong> - Dropdown pilihan</li>
          <li><strong>JList</strong> - Daftar pilihan berganda</li>
          <li><strong>JCheckBox & JRadioButton</strong> - Pilihan checkbox dan radio</li>
          <li><strong>JTable</strong> - Tabel data yang powerful</li>
          <li><strong>JTextArea & JScrollPane</strong> - Area teks dengan scroll</li>
          <li><strong>JMenuBar & JMenu</strong> - Menu bar profesional</li>
          <li><strong>JDialog & JOptionPane</strong> - Dialog dan popup</li>
          <li><strong>Form Validation</strong> - Validasi input pengguna</li>
          <li><strong>Custom Styling</strong> - Styling font, warna, dan border</li>
        </ul>

        <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
          <p><strong>💡 Tips:</strong> Modul ini akan banyak praktek! Pastikan NetBeans sudah siap dan ikuti setiap contoh dengan mengetiknya sendiri.</p>
        </div>
      `},{id:"jcombobox",title:"JComboBox - Dropdown Pilihan",content:`
        <h2>JComboBox - Komponen Dropdown</h2>
        <p><strong>JComboBox</strong> adalah komponen dropdown yang memungkinkan user memilih satu item dari daftar pilihan.</p>

        <h3>1. Membuat JComboBox Sederhana</h3>
        <p>Contoh membuat dropdown pilihan kota:</p>
      `,code:{language:"java",filename:"AplikasiComboBox.java",content:`import javax.swing.*;
import java.awt.*;

public class AplikasiComboBox extends JFrame {
    private JComboBox<String> comboKota;
    private JLabel labelHasil;

    public AplikasiComboBox() {
        setTitle("Demo JComboBox");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new FlowLayout(FlowLayout.LEFT, 20, 20));

        // Array pilihan kota
        String[] kota = {"Jakarta", "Bandung", "Surabaya", "Medan", "Makassar"};

        // Buat JComboBox
        comboKota = new JComboBox<>(kota);

        // Label untuk menampilkan hasil
        labelHasil = new JLabel("Pilih kota Anda");

        // Event listener
        comboKota.addActionListener(e -> {
            String kotaTerpilih = (String) comboKota.getSelectedItem();
            labelHasil.setText("Kota terpilih: " + kotaTerpilih);
        });

        add(new JLabel("Pilih Kota:"));
        add(comboKota);
        add(labelHasil);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new AplikasiComboBox().setVisible(true);
        });
    }
}`},additionalContent:`
        <h3>2. Menambahkan Item Secara Dinamis</h3>
        <p>Kita bisa menambah atau menghapus item dari ComboBox:</p>
      `,additionalCode:{language:"java",content:`// Menambah item baru
comboKota.addItem("Yogyakarta");

// Menghapus item
comboKota.removeItem("Jakarta");

// Menghapus semua item
comboKota.removeAllItems();

// Mendapatkan item terpilih
String selected = (String) comboKota.getSelectedItem();

// Mendapatkan index item terpilih
int index = comboKota.getSelectedIndex();`}},{id:"jlist-checkbox-radio",title:"JList, JCheckBox & JRadioButton",content:`
        <h2>Komponen Pilihan Multiple</h2>

        <h3>1. JList - Daftar Pilihan</h3>
        <p>JList memungkinkan user memilih satu atau beberapa item dari daftar:</p>
      `,code:{language:"java",filename:"DemoJList.java",content:`import javax.swing.*;
import java.awt.*;

public class DemoJList extends JFrame {
    public DemoJList() {
        setTitle("Demo JList");
        setSize(300, 250);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Data untuk JList
        String[] mataKuliah = {
            "Pemrograman Desktop",
            "Basis Data",
            "Struktur Data",
            "Jaringan Komputer",
            "Sistem Operasi"
        };

        // Buat JList
        JList<String> list = new JList<>(mataKuliah);
        list.setSelectionMode(ListSelectionModel.MULTIPLE_INTERVAL_SELECTION);

        // Tambahkan ke ScrollPane
        JScrollPane scrollPane = new JScrollPane(list);

        // Button untuk menampilkan pilihan
        JButton btnTampilkan = new JButton("Tampilkan Pilihan");
        btnTampilkan.addActionListener(e -> {
            java.util.List<String> terpilih = list.getSelectedValuesList();
            String hasil = "Mata kuliah terpilih:\\n" + String.join("\\n", terpilih);
            JOptionPane.showMessageDialog(this, hasil);
        });

        add(scrollPane, BorderLayout.CENTER);
        add(btnTampilkan, BorderLayout.SOUTH);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new DemoJList().setVisible(true);
        });
    }
}`},additionalContent:`
        <h3>2. JCheckBox - Checkbox</h3>
        <p>Checkbox untuk pilihan multiple (bisa pilih lebih dari satu):</p>
      `,additionalCode:{language:"java",filename:"DemoCheckBox.java",content:`import javax.swing.*;
import java.awt.*;

public class DemoCheckBox extends JFrame {
    private JCheckBox checkJava, checkPython, checkCpp;

    public DemoCheckBox() {
        setTitle("Demo CheckBox");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new FlowLayout(FlowLayout.LEFT, 20, 20));

        add(new JLabel("Pilih bahasa pemrograman yang dikuasai:"));

        checkJava = new JCheckBox("Java");
        checkPython = new JCheckBox("Python");
        checkCpp = new JCheckBox("C++");

        JButton btnSubmit = new JButton("Submit");
        btnSubmit.addActionListener(e -> {
            String hasil = "Bahasa yang dikuasai: ";
            if (checkJava.isSelected()) hasil += "Java ";
            if (checkPython.isSelected()) hasil += "Python ";
            if (checkCpp.isSelected()) hasil += "C++ ";
            JOptionPane.showMessageDialog(this, hasil);
        });

        add(checkJava);
        add(checkPython);
        add(checkCpp);
        add(btnSubmit);
    }
}`},additionalContent2:`
        <h3>3. JRadioButton - Radio Button</h3>
        <p>Radio button untuk pilihan tunggal (hanya bisa pilih satu):</p>
      `,additionalCode2:{language:"java",content:`import javax.swing.*;
import java.awt.*;

public class DemoRadioButton extends JFrame {
    private JRadioButton radioPria, radioWanita;
    private ButtonGroup group;

    public DemoRadioButton() {
        setTitle("Demo Radio Button");
        setSize(300, 150);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new FlowLayout(FlowLayout.LEFT, 20, 20));

        add(new JLabel("Jenis Kelamin:"));

        radioPria = new JRadioButton("Pria");
        radioWanita = new JRadioButton("Wanita");

        // ButtonGroup untuk mengelompokkan radio button
        // Hanya 1 yang bisa dipilih dalam 1 group
        group = new ButtonGroup();
        group.add(radioPria);
        group.add(radioWanita);

        JButton btnSubmit = new JButton("Submit");
        btnSubmit.addActionListener(e -> {
            String jk = radioPria.isSelected() ? "Pria" : "Wanita";
            JOptionPane.showMessageDialog(this, "Jenis Kelamin: " + jk);
        });

        add(radioPria);
        add(radioWanita);
        add(btnSubmit);
    }
}`}},{id:"jtable",title:"JTable - Tabel Data",content:`
        <h2>JTable - Menampilkan Data Tabular</h2>
        <p><strong>JTable</strong> adalah komponen powerful untuk menampilkan data dalam bentuk tabel (baris dan kolom).</p>

        <h3>Membuat JTable Sederhana</h3>
        <p>Contoh menampilkan data mahasiswa dalam tabel:</p>
      `,code:{language:"java",filename:"AplikasiTabel.java",content:`import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

public class AplikasiTabel extends JFrame {
    private JTable table;
    private DefaultTableModel model;

    public AplikasiTabel() {
        setTitle("Data Mahasiswa");
        setSize(600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Nama kolom
        String[] kolomNama = {"NIM", "Nama", "Jurusan", "IPK"};

        // Data mahasiswa (baris)
        Object[][] data = {
            {"2024001", "Budi Santoso", "Teknik Informatika", 3.75},
            {"2024002", "Siti Rahma", "Sistem Informasi", 3.82},
            {"2024003", "Andi Wijaya", "Teknik Informatika", 3.45},
            {"2024004", "Dewi Lestari", "Manajemen Informatika", 3.90},
            {"2024005", "Rudi Hartono", "Sistem Informasi", 3.65}
        };

        // Buat model tabel
        model = new DefaultTableModel(data, kolomNama);

        // Buat JTable dengan model
        table = new JTable(model);

        // Setting lebar kolom
        table.getColumnModel().getColumn(0).setPreferredWidth(80);
        table.getColumnModel().getColumn(1).setPreferredWidth(150);
        table.getColumnModel().getColumn(2).setPreferredWidth(180);
        table.getColumnModel().getColumn(3).setPreferredWidth(60);

        // Tambahkan ke ScrollPane (agar bisa scroll jika data banyak)
        JScrollPane scrollPane = new JScrollPane(table);

        // Panel button
        JPanel panelButton = new JPanel();
        JButton btnTambah = new JButton("Tambah Data");
        JButton btnHapus = new JButton("Hapus Data");

        btnTambah.addActionListener(e -> tambahData());
        btnHapus.addActionListener(e -> hapusData());

        panelButton.add(btnTambah);
        panelButton.add(btnHapus);

        add(scrollPane, BorderLayout.CENTER);
        add(panelButton, BorderLayout.SOUTH);
    }

    private void tambahData() {
        // Input data baru
        String nim = JOptionPane.showInputDialog("Masukkan NIM:");
        if (nim == null || nim.trim().isEmpty()) return;

        String nama = JOptionPane.showInputDialog("Masukkan Nama:");
        if (nama == null || nama.trim().isEmpty()) return;

        String jurusan = JOptionPane.showInputDialog("Masukkan Jurusan:");
        if (jurusan == null || jurusan.trim().isEmpty()) return;

        String ipkStr = JOptionPane.showInputDialog("Masukkan IPK:");
        if (ipkStr == null || ipkStr.trim().isEmpty()) return;

        try {
            double ipk = Double.parseDouble(ipkStr);

            // Tambahkan ke tabel
            Object[] barisBaru = {nim, nama, jurusan, ipk};
            model.addRow(barisBaru);

            JOptionPane.showMessageDialog(this, "Data berhasil ditambahkan!");
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "IPK harus berupa angka!",
                "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void hapusData() {
        int barisTerpilih = table.getSelectedRow();

        if (barisTerpilih == -1) {
            JOptionPane.showMessageDialog(this,
                "Pilih baris yang ingin dihapus!",
                "Peringatan", JOptionPane.WARNING_MESSAGE);
            return;
        }

        int konfirmasi = JOptionPane.showConfirmDialog(this,
            "Yakin ingin menghapus data ini?",
            "Konfirmasi", JOptionPane.YES_NO_OPTION);

        if (konfirmasi == JOptionPane.YES_OPTION) {
            model.removeRow(barisTerpilih);
            JOptionPane.showMessageDialog(this, "Data berhasil dihapus!");
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new AplikasiTabel().setVisible(true);
        });
    }
}`},additionalContent:`
        <div class="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4">
          <p><strong>⚠️ Catatan Penting:</strong></p>
          <ul>
            <li><code>DefaultTableModel</code> - Model untuk mengelola data tabel</li>
            <li><code>JScrollPane</code> - Agar tabel bisa di-scroll</li>
            <li><code>getSelectedRow()</code> - Mendapat baris yang dipilih</li>
            <li><code>addRow()</code> - Menambah baris baru</li>
            <li><code>removeRow()</code> - Menghapus baris</li>
          </ul>
        </div>
      `},{id:"jtextarea-scrollpane",title:"JTextArea & JScrollPane",content:`
        <h2>JTextArea - Area Teks Multi-baris</h2>
        <p><strong>JTextArea</strong> adalah komponen untuk input/output teks yang bisa lebih dari satu baris, biasa digunakan untuk catatan, komentar, atau log.</p>

        <h3>Membuat JTextArea dengan Scroll</h3>
      `,code:{language:"java",filename:"AplikasiCatatan.java",content:`import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class AplikasiCatatan extends JFrame {
    private JTextArea textArea;
    private JLabel labelInfo;

    public AplikasiCatatan() {
        setTitle("Aplikasi Catatan Sederhana");
        setSize(500, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Buat JTextArea
        textArea = new JTextArea();
        textArea.setLineWrap(true); // Auto wrap text
        textArea.setWrapStyleWord(true); // Wrap per kata
        textArea.setFont(new Font("Monospaced", Font.PLAIN, 14));

        // Tambahkan ke JScrollPane
        JScrollPane scrollPane = new JScrollPane(textArea);
        scrollPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_ALWAYS);

        // Panel atas dengan toolbar
        JPanel panelAtas = new JPanel(new FlowLayout(FlowLayout.LEFT));
        JButton btnBersihkan = new JButton("Bersihkan");
        JButton btnSalin = new JButton("Salin Semua");
        JButton btnHitung = new JButton("Hitung Kata");

        panelAtas.add(btnBersihkan);
        panelAtas.add(btnSalin);
        panelAtas.add(btnHitung);

        // Label info di bawah
        labelInfo = new JLabel("Karakter: 0 | Kata: 0");

        // Event handlers
        btnBersihkan.addActionListener(e -> {
            textArea.setText("");
            updateInfo();
        });

        btnSalin.addActionListener(e -> {
            textArea.selectAll();
            textArea.copy();
            JOptionPane.showMessageDialog(this, "Teks berhasil disalin!");
        });

        btnHitung.addActionListener(e -> {
            updateInfo();
        });

        // Update info saat mengetik
        textArea.addKeyListener(new KeyAdapter() {
            @Override
            public void keyReleased(KeyEvent e) {
                updateInfo();
            }
        });

        // Layout
        add(panelAtas, BorderLayout.NORTH);
        add(scrollPane, BorderLayout.CENTER);
        add(labelInfo, BorderLayout.SOUTH);
    }

    private void updateInfo() {
        String teks = textArea.getText();
        int jumlahKarakter = teks.length();

        // Hitung jumlah kata
        String[] kata = teks.trim().split("\\\\s+");
        int jumlahKata = teks.trim().isEmpty() ? 0 : kata.length;

        labelInfo.setText("Karakter: " + jumlahKarakter + " | Kata: " + jumlahKata);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new AplikasiCatatan().setVisible(true);
        });
    }
}`},additionalContent:`
        <h3>Method Penting JTextArea:</h3>
        <ul>
          <li><code>setText(String)</code> - Set teks</li>
          <li><code>getText()</code> - Ambil teks</li>
          <li><code>append(String)</code> - Tambah teks di akhir</li>
          <li><code>setLineWrap(boolean)</code> - Auto wrap baris</li>
          <li><code>setWrapStyleWord(boolean)</code> - Wrap per kata</li>
          <li><code>setEditable(boolean)</code> - Atur bisa edit atau tidak</li>
        </ul>
      `},{id:"jmenubar",title:"JMenuBar & JMenu - Menu Bar",content:`
        <h2>Membuat Menu Bar Profesional</h2>
        <p>Menu bar adalah komponen penting dalam aplikasi desktop profesional. Biasanya ada di bagian atas window.</p>

        <h3>Membuat Menu Bar Lengkap</h3>
      `,code:{language:"java",filename:"AplikasiDenganMenu.java",content:`import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class AplikasiDenganMenu extends JFrame {
    private JTextArea textArea;

    public AplikasiDenganMenu() {
        setTitle("Aplikasi dengan Menu Bar");
        setSize(600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Text area
        textArea = new JTextArea();
        add(new JScrollPane(textArea), BorderLayout.CENTER);

        // Buat menu bar
        buatMenuBar();
    }

    private void buatMenuBar() {
        // Menu Bar
        JMenuBar menuBar = new JMenuBar();

        // ========== MENU FILE ==========
        JMenu menuFile = new JMenu("File");
        menuFile.setMnemonic(KeyEvent.VK_F); // Alt+F

        JMenuItem itemNew = new JMenuItem("New", KeyEvent.VK_N);
        itemNew.setAccelerator(KeyStroke.getKeyStroke(
            KeyEvent.VK_N, ActionEvent.CTRL_MASK)); // Ctrl+N
        itemNew.addActionListener(e -> newFile());

        JMenuItem itemOpen = new JMenuItem("Open", KeyEvent.VK_O);
        itemOpen.setAccelerator(KeyStroke.getKeyStroke(
            KeyEvent.VK_O, ActionEvent.CTRL_MASK)); // Ctrl+O
        itemOpen.addActionListener(e -> openFile());

        JMenuItem itemSave = new JMenuItem("Save", KeyEvent.VK_S);
        itemSave.setAccelerator(KeyStroke.getKeyStroke(
            KeyEvent.VK_S, ActionEvent.CTRL_MASK)); // Ctrl+S
        itemSave.addActionListener(e -> saveFile());

        menuFile.add(itemNew);
        menuFile.add(itemOpen);
        menuFile.add(itemSave);
        menuFile.addSeparator(); // Garis pemisah

        JMenuItem itemExit = new JMenuItem("Exit", KeyEvent.VK_X);
        itemExit.addActionListener(e -> System.exit(0));
        menuFile.add(itemExit);

        // ========== MENU EDIT ==========
        JMenu menuEdit = new JMenu("Edit");
        menuEdit.setMnemonic(KeyEvent.VK_E);

        JMenuItem itemCut = new JMenuItem("Cut");
        itemCut.setAccelerator(KeyStroke.getKeyStroke(
            KeyEvent.VK_X, ActionEvent.CTRL_MASK));
        itemCut.addActionListener(e -> textArea.cut());

        JMenuItem itemCopy = new JMenuItem("Copy");
        itemCopy.setAccelerator(KeyStroke.getKeyStroke(
            KeyEvent.VK_C, ActionEvent.CTRL_MASK));
        itemCopy.addActionListener(e -> textArea.copy());

        JMenuItem itemPaste = new JMenuItem("Paste");
        itemPaste.setAccelerator(KeyStroke.getKeyStroke(
            KeyEvent.VK_V, ActionEvent.CTRL_MASK));
        itemPaste.addActionListener(e -> textArea.paste());

        menuEdit.add(itemCut);
        menuEdit.add(itemCopy);
        menuEdit.add(itemPaste);

        // ========== MENU VIEW ==========
        JMenu menuView = new JMenu("View");

        JCheckBoxMenuItem itemStatusBar = new JCheckBoxMenuItem("Status Bar");
        itemStatusBar.setSelected(true);
        itemStatusBar.addActionListener(e -> {
            // Toggle status bar
            JOptionPane.showMessageDialog(this,
                "Status bar: " + (itemStatusBar.isSelected() ? "ON" : "OFF"));
        });

        menuView.add(itemStatusBar);

        // ========== MENU HELP ==========
        JMenu menuHelp = new JMenu("Help");

        JMenuItem itemAbout = new JMenuItem("About");
        itemAbout.addActionListener(e -> {
            JOptionPane.showMessageDialog(this,
                "Aplikasi Demo Menu Bar\\nVersi 1.0\\n© 2024",
                "About", JOptionPane.INFORMATION_MESSAGE);
        });

        menuHelp.add(itemAbout);

        // Tambahkan semua menu ke menu bar
        menuBar.add(menuFile);
        menuBar.add(menuEdit);
        menuBar.add(menuView);
        menuBar.add(menuHelp);

        // Set menu bar ke frame
        setJMenuBar(menuBar);
    }

    private void newFile() {
        int result = JOptionPane.showConfirmDialog(this,
            "File belum tersimpan. Buat file baru?",
            "Konfirmasi", JOptionPane.YES_NO_OPTION);

        if (result == JOptionPane.YES_OPTION) {
            textArea.setText("");
        }
    }

    private void openFile() {
        JFileChooser fileChooser = new JFileChooser();
        int result = fileChooser.showOpenDialog(this);

        if (result == JFileChooser.APPROVE_OPTION) {
            JOptionPane.showMessageDialog(this,
                "File dipilih: " + fileChooser.getSelectedFile().getName());
        }
    }

    private void saveFile() {
        JFileChooser fileChooser = new JFileChooser();
        int result = fileChooser.showSaveDialog(this);

        if (result == JFileChooser.APPROVE_OPTION) {
            JOptionPane.showMessageDialog(this,
                "File disimpan: " + fileChooser.getSelectedFile().getName());
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new AplikasiDenganMenu().setVisible(true);
        });
    }
}`},additionalContent:`
        <h3>Komponen Menu:</h3>
        <ul>
          <li><code>JMenuBar</code> - Container untuk menu</li>
          <li><code>JMenu</code> - Menu utama (File, Edit, dll)</li>
          <li><code>JMenuItem</code> - Item dalam menu</li>
          <li><code>JCheckBoxMenuItem</code> - Menu item dengan checkbox</li>
          <li><code>addSeparator()</code> - Garis pemisah</li>
          <li><code>setMnemonic()</code> - Keyboard shortcut (Alt+huruf)</li>
          <li><code>setAccelerator()</code> - Keyboard shortcut (Ctrl+huruf)</li>
        </ul>
      `},{id:"jdialog-joptionpane",title:"JDialog & JOptionPane",content:`
        <h2>Dialog dan Popup Window</h2>

        <h3>1. JOptionPane - Dialog Cepat</h3>
        <p>JOptionPane menyediakan dialog standar yang mudah digunakan:</p>
      `,code:{language:"java",filename:"DemoJOptionPane.java",content:`import javax.swing.*;

public class DemoJOptionPane {
    public static void main(String[] args) {
        // 1. Message Dialog - Menampilkan pesan
        JOptionPane.showMessageDialog(null,
            "Ini adalah pesan informasi!",
            "Informasi",
            JOptionPane.INFORMATION_MESSAGE);

        // 2. Confirm Dialog - Konfirmasi Yes/No
        int result = JOptionPane.showConfirmDialog(null,
            "Apakah Anda yakin ingin keluar?",
            "Konfirmasi",
            JOptionPane.YES_NO_OPTION);

        if (result == JOptionPane.YES_OPTION) {
            System.out.println("User memilih Yes");
        }

        // 3. Input Dialog - Input dari user
        String nama = JOptionPane.showInputDialog(null,
            "Masukkan nama Anda:",
            "Input",
            JOptionPane.QUESTION_MESSAGE);

        System.out.println("Nama: " + nama);

        // 4. Option Dialog - Custom buttons
        Object[] options = {"Simpan", "Jangan Simpan", "Batal"};
        int pilihan = JOptionPane.showOptionDialog(null,
            "Simpan perubahan?",
            "Konfirmasi",
            JOptionPane.YES_NO_CANCEL_OPTION,
            JOptionPane.QUESTION_MESSAGE,
            null,
            options,
            options[0]);

        switch(pilihan) {
            case 0: System.out.println("Simpan"); break;
            case 1: System.out.println("Jangan Simpan"); break;
            case 2: System.out.println("Batal"); break;
        }

        // 5. Error Dialog
        JOptionPane.showMessageDialog(null,
            "Terjadi kesalahan!",
            "Error",
            JOptionPane.ERROR_MESSAGE);

        // 6. Warning Dialog
        JOptionPane.showMessageDialog(null,
            "Perhatian: Data akan dihapus!",
            "Peringatan",
            JOptionPane.WARNING_MESSAGE);
    }
}`},additionalContent:`
        <h3>2. JDialog - Custom Dialog</h3>
        <p>JDialog untuk membuat dialog window yang lebih custom:</p>
      `,additionalCode:{language:"java",filename:"CustomDialog.java",content:`import javax.swing.*;
import java.awt.*;

public class CustomDialog extends JDialog {
    private JTextField textNama;
    private JTextField textEmail;
    private String nama, email;
    private boolean isOk = false;

    public CustomDialog(JFrame parent) {
        super(parent, "Form Registrasi", true); // true = modal
        setSize(350, 200);
        setLocationRelativeTo(parent);
        setLayout(new BorderLayout(10, 10));

        // Panel form
        JPanel panelForm = new JPanel(new GridLayout(2, 2, 10, 10));
        panelForm.setBorder(BorderFactory.createEmptyBorder(20, 20, 10, 20));

        panelForm.add(new JLabel("Nama:"));
        textNama = new JTextField();
        panelForm.add(textNama);

        panelForm.add(new JLabel("Email:"));
        textEmail = new JTextField();
        panelForm.add(textEmail);

        // Panel button
        JPanel panelButton = new JPanel();
        JButton btnOk = new JButton("OK");
        JButton btnBatal = new JButton("Batal");

        btnOk.addActionListener(e -> {
            nama = textNama.getText();
            email = textEmail.getText();

            if (nama.isEmpty() || email.isEmpty()) {
                JOptionPane.showMessageDialog(this,
                    "Semua field harus diisi!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                return;
            }

            isOk = true;
            dispose();
        });

        btnBatal.addActionListener(e -> {
            isOk = false;
            dispose();
        });

        panelButton.add(btnOk);
        panelButton.add(btnBatal);

        add(panelForm, BorderLayout.CENTER);
        add(panelButton, BorderLayout.SOUTH);
    }

    public boolean isOk() {
        return isOk;
    }

    public String getNama() {
        return nama;
    }

    public String getEmail() {
        return email;
    }
}

// Cara menggunakan:
class MainApp extends JFrame {
    public MainApp() {
        setTitle("Main App");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        JButton btnDaftar = new JButton("Daftar");
        btnDaftar.addActionListener(e -> {
            CustomDialog dialog = new CustomDialog(this);
            dialog.setVisible(true);

            if (dialog.isOk()) {
                JOptionPane.showMessageDialog(this,
                    "Registrasi berhasil!\\n" +
                    "Nama: " + dialog.getNama() + "\\n" +
                    "Email: " + dialog.getEmail());
            }
        });

        add(btnDaftar);
    }
}`}},{id:"form-validation",title:"Form Validation & Error Handling",content:`
        <h2>Validasi Input Pengguna</h2>
        <p>Validasi input sangat penting untuk memastikan data yang dimasukkan user valid dan aman.</p>

        <h3>Contoh Form dengan Validasi Lengkap</h3>
      `,code:{language:"java",filename:"FormRegistrasi.java",content:`import javax.swing.*;
import java.awt.*;
import java.util.regex.Pattern;

public class FormRegistrasi extends JFrame {
    private JTextField textNama, textEmail, textTelepon;
    private JPasswordField textPassword, textKonfirmasiPassword;
    private JComboBox<String> comboJurusan;
    private JTextArea textAlamat;

    public FormRegistrasi() {
        setTitle("Form Registrasi Mahasiswa");
        setSize(500, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout(10, 10));

        // Panel form
        JPanel panelForm = new JPanel(new GridLayout(7, 2, 10, 10));
        panelForm.setBorder(BorderFactory.createEmptyBorder(20, 20, 10, 20));

        // Nama
        panelForm.add(new JLabel("Nama Lengkap:"));
        textNama = new JTextField();
        panelForm.add(textNama);

        // Email
        panelForm.add(new JLabel("Email:"));
        textEmail = new JTextField();
        panelForm.add(textEmail);

        // Telepon
        panelForm.add(new JLabel("Telepon:"));
        textTelepon = new JTextField();
        panelForm.add(textTelepon);

        // Jurusan
        panelForm.add(new JLabel("Jurusan:"));
        String[] jurusan = {"-- Pilih Jurusan --", "Teknik Informatika",
                           "Sistem Informasi", "Manajemen Informatika"};
        comboJurusan = new JComboBox<>(jurusan);
        panelForm.add(comboJurusan);

        // Password
        panelForm.add(new JLabel("Password:"));
        textPassword = new JPasswordField();
        panelForm.add(textPassword);

        // Konfirmasi Password
        panelForm.add(new JLabel("Konfirmasi Password:"));
        textKonfirmasiPassword = new JPasswordField();
        panelForm.add(textKonfirmasiPassword);

        // Alamat
        panelForm.add(new JLabel("Alamat:"));
        textAlamat = new JTextArea(3, 20);
        JScrollPane scrollAlamat = new JScrollPane(textAlamat);
        panelForm.add(scrollAlamat);

        // Button
        JPanel panelButton = new JPanel();
        JButton btnDaftar = new JButton("Daftar");
        JButton btnReset = new JButton("Reset");

        btnDaftar.addActionListener(e -> validasiDanDaftar());
        btnReset.addActionListener(e -> resetForm());

        panelButton.add(btnDaftar);
        panelButton.add(btnReset);

        add(panelForm, BorderLayout.CENTER);
        add(panelButton, BorderLayout.SOUTH);
    }

    private void validasiDanDaftar() {
        // 1. Validasi nama (tidak boleh kosong, min 3 karakter)
        String nama = textNama.getText().trim();
        if (nama.isEmpty()) {
            showError("Nama tidak boleh kosong!");
            textNama.requestFocus();
            return;
        }
        if (nama.length() < 3) {
            showError("Nama minimal 3 karakter!");
            textNama.requestFocus();
            return;
        }

        // 2. Validasi email (format email)
        String email = textEmail.getText().trim();
        if (!isValidEmail(email)) {
            showError("Format email tidak valid!\\nContoh: nama@email.com");
            textEmail.requestFocus();
            return;
        }

        // 3. Validasi telepon (hanya angka, 10-13 digit)
        String telepon = textTelepon.getText().trim();
        if (!isValidTelepon(telepon)) {
            showError("Telepon harus berupa angka 10-13 digit!\\nContoh: 08123456789");
            textTelepon.requestFocus();
            return;
        }

        // 4. Validasi jurusan (harus dipilih)
        if (comboJurusan.getSelectedIndex() == 0) {
            showError("Pilih jurusan terlebih dahulu!");
            comboJurusan.requestFocus();
            return;
        }

        // 5. Validasi password (min 6 karakter)
        String password = new String(textPassword.getPassword());
        if (password.length() < 6) {
            showError("Password minimal 6 karakter!");
            textPassword.requestFocus();
            return;
        }

        // 6. Validasi konfirmasi password (harus sama)
        String konfirmasiPassword = new String(textKonfirmasiPassword.getPassword());
        if (!password.equals(konfirmasiPassword)) {
            showError("Password dan konfirmasi password tidak sama!");
            textKonfirmasiPassword.requestFocus();
            return;
        }

        // 7. Validasi alamat (tidak boleh kosong)
        String alamat = textAlamat.getText().trim();
        if (alamat.isEmpty()) {
            showError("Alamat tidak boleh kosong!");
            textAlamat.requestFocus();
            return;
        }

        // Jika semua validasi lolos
        String hasil = "Registrasi Berhasil!\\n\\n" +
                      "Nama: " + nama + "\\n" +
                      "Email: " + email + "\\n" +
                      "Telepon: " + telepon + "\\n" +
                      "Jurusan: " + comboJurusan.getSelectedItem() + "\\n" +
                      "Alamat: " + alamat;

        JOptionPane.showMessageDialog(this, hasil, "Success",
            JOptionPane.INFORMATION_MESSAGE);

        resetForm();
    }

    private boolean isValidEmail(String email) {
        // Pattern untuk validasi email
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$";
        return Pattern.matches(emailRegex, email);
    }

    private boolean isValidTelepon(String telepon) {
        // Hanya angka, panjang 10-13
        return telepon.matches("\\\\d{10,13}");
    }

    private void showError(String message) {
        JOptionPane.showMessageDialog(this, message, "Validasi Error",
            JOptionPane.ERROR_MESSAGE);
    }

    private void resetForm() {
        textNama.setText("");
        textEmail.setText("");
        textTelepon.setText("");
        comboJurusan.setSelectedIndex(0);
        textPassword.setText("");
        textKonfirmasiPassword.setText("");
        textAlamat.setText("");
        textNama.requestFocus();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new FormRegistrasi().setVisible(true);
        });
    }
}`},additionalContent:`
        <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
          <h4>✅ Best Practices Validasi:</h4>
          <ol>
            <li>Validasi di sisi client (GUI) untuk UX yang baik</li>
            <li>Berikan pesan error yang jelas dan spesifik</li>
            <li>Set focus ke field yang error</li>
            <li>Gunakan regex untuk validasi format (email, telepon, dll)</li>
            <li>Validasi range (min/max karakter, min/max nilai)</li>
            <li>Gunakan try-catch untuk parsing angka</li>
          </ol>
        </div>
      `},{id:"custom-styling",title:"Custom Styling - Font, Warna & Border",content:`
        <h2>Styling Komponen GUI</h2>
        <p>Membuat aplikasi lebih menarik dengan custom font, warna, dan border.</p>

        <h3>Contoh Aplikasi dengan Custom Styling</h3>
      `,code:{language:"java",filename:"AplikasiStyled.java",content:`import javax.swing.*;
import javax.swing.border.*;
import java.awt.*;

public class AplikasiStyled extends JFrame {
    public AplikasiStyled() {
        setTitle("Demo Custom Styling");
        setSize(500, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout(10, 10));

        // Set warna background frame
        getContentPane().setBackground(new Color(240, 240, 245));

        // ========== PANEL HEADER ==========
        JPanel panelHeader = new JPanel();
        panelHeader.setBackground(new Color(63, 81, 181)); // Material Blue
        panelHeader.setPreferredSize(new Dimension(500, 80));

        JLabel labelJudul = new JLabel("Aplikasi dengan Custom Styling");
        labelJudul.setFont(new Font("Arial", Font.BOLD, 24));
        labelJudul.setForeground(Color.WHITE);
        panelHeader.add(labelJudul);

        // ========== PANEL KONTEN ==========
        JPanel panelKonten = new JPanel();
        panelKonten.setLayout(new BoxLayout(panelKonten, BoxLayout.Y_AXIS));
        panelKonten.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        panelKonten.setBackground(new Color(240, 240, 245));

        // Card 1: Custom Font
        JPanel card1 = buatCard("Custom Font", new Color(76, 175, 80));
        JLabel label1 = new JLabel("Font: Arial Bold 16px");
        label1.setFont(new Font("Arial", Font.BOLD, 16));
        card1.add(label1);

        // Card 2: Custom Border
        JPanel card2 = buatCard("Custom Border", new Color(255, 152, 0));
        JLabel label2 = new JLabel("Border: Line Border 3px");
        label2.setBorder(BorderFactory.createLineBorder(Color.RED, 3));
        label2.setFont(new Font("Verdana", Font.PLAIN, 14));
        card2.add(label2);

        // Card 3: Rounded Border
        JPanel card3 = buatCard("Rounded Border", new Color(156, 39, 176));
        JButton btnRounded = new JButton("Button dengan Border Bulat");
        btnRounded.setFont(new Font("Segoe UI", Font.BOLD, 14));
        btnRounded.setBackground(new Color(233, 30, 99));
        btnRounded.setForeground(Color.WHITE);
        btnRounded.setFocusPainted(false);
        btnRounded.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(194, 24, 91), 2),
            BorderFactory.createEmptyBorder(10, 20, 10, 20)
        ));
        card3.add(btnRounded);

        // Card 4: Multiple Borders
        JPanel card4 = buatCard("Compound Border", new Color(0, 188, 212));
        JTextArea textArea = new JTextArea(2, 30);
        textArea.setFont(new Font("Courier New", Font.PLAIN, 12));
        textArea.setText("TextArea dengan multiple borders:\\n- Titled Border\\n- Empty Border untuk padding");

        // Compound border: Titled + Line + Empty (padding)
        Border titleBorder = BorderFactory.createTitledBorder(
            BorderFactory.createLineBorder(new Color(0, 150, 136), 2),
            "Input Area",
            TitledBorder.LEFT,
            TitledBorder.TOP,
            new Font("Arial", Font.BOLD, 12),
            new Color(0, 150, 136)
        );
        Border paddingBorder = BorderFactory.createEmptyBorder(10, 10, 10, 10);
        textArea.setBorder(BorderFactory.createCompoundBorder(titleBorder, paddingBorder));

        card4.add(textArea);

        panelKonten.add(card1);
        panelKonten.add(Box.createVerticalStrut(10));
        panelKonten.add(card2);
        panelKonten.add(Box.createVerticalStrut(10));
        panelKonten.add(card3);
        panelKonten.add(Box.createVerticalStrut(10));
        panelKonten.add(card4);

        // Scroll pane untuk konten
        JScrollPane scrollPane = new JScrollPane(panelKonten);
        scrollPane.setBorder(null);

        add(panelHeader, BorderLayout.NORTH);
        add(scrollPane, BorderLayout.CENTER);
    }

    private JPanel buatCard(String judul, Color warna) {
        JPanel card = new JPanel();
        card.setLayout(new BoxLayout(card, BoxLayout.Y_AXIS));
        card.setBackground(Color.WHITE);
        card.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(200, 200, 200), 1),
            BorderFactory.createEmptyBorder(15, 15, 15, 15)
        ));
        card.setMaximumSize(new Dimension(Integer.MAX_VALUE, 150));

        JLabel labelJudul = new JLabel(judul);
        labelJudul.setFont(new Font("Arial", Font.BOLD, 16));
        labelJudul.setForeground(warna);
        labelJudul.setAlignmentX(Component.LEFT_ALIGNMENT);

        card.add(labelJudul);
        card.add(Box.createVerticalStrut(10));

        return card;
    }

    public static void main(String[] args) {
        // Set Look and Feel ke system
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            e.printStackTrace();
        }

        SwingUtilities.invokeLater(() -> {
            new AplikasiStyled().setVisible(true);
        });
    }
}`},additionalContent:`
        <h3>Referensi Styling:</h3>

        <h4>1. Font</h4>
        <ul>
          <li><code>new Font("Arial", Font.BOLD, 16)</code></li>
          <li>Style: PLAIN, BOLD, ITALIC, BOLD + ITALIC</li>
          <li>Common fonts: Arial, Verdana, Times New Roman, Courier New, Segoe UI</li>
        </ul>

        <h4>2. Warna (Color)</h4>
        <ul>
          <li><code>new Color(255, 0, 0)</code> - RGB</li>
          <li><code>Color.RED, Color.BLUE, Color.GREEN</code> - Predefined</li>
          <li><code>new Color(255, 0, 0, 128)</code> - RGBA (dengan transparansi)</li>
        </ul>

        <h4>3. Border</h4>
        <ul>
          <li><code>BorderFactory.createLineBorder(Color, thickness)</code> - Garis</li>
          <li><code>BorderFactory.createEmptyBorder(top, left, bottom, right)</code> - Padding</li>
          <li><code>BorderFactory.createTitledBorder("Title")</code> - Border dengan judul</li>
          <li><code>BorderFactory.createCompoundBorder(border1, border2)</code> - Kombinasi</li>
          <li><code>BorderFactory.createEtchedBorder()</code> - Border etched</li>
          <li><code>BorderFactory.createBevelBorder(type)</code> - Border 3D</li>
        </ul>

        <h4>4. Look and Feel</h4>
        <ul>
          <li><code>UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName())</code></li>
          <li>Membuat aplikasi mengikuti style system (Windows/Mac/Linux)</li>
        </ul>
      `},{id:"latihan-gui-lanjutan",title:"Latihan & Mini Project",content:`
        <h2>Latihan Praktik GUI Lanjutan</h2>

        <h3>Latihan 1: Form Pendaftaran Event</h3>
        <p><strong>Tugas:</strong> Buat form pendaftaran event dengan komponen:</p>
        <ul>
          <li>Nama (JTextField) - validasi min 3 karakter</li>
          <li>Email (JTextField) - validasi format email</li>
          <li>Jenis Event (JComboBox) - Workshop, Seminar, Webinar</li>
          <li>Sesi yang diikuti (JCheckBox) - Sesi 1, Sesi 2, Sesi 3</li>
          <li>Kategori Peserta (JRadioButton) - Mahasiswa, Dosen, Umum</li>
          <li>Catatan (JTextArea)</li>
          <li>Button Submit dengan validasi lengkap</li>
          <li>Tampilkan hasil dalam JTable</li>
        </ul>

        <h3>Latihan 2: Aplikasi To-Do List</h3>
        <p><strong>Tugas:</strong> Buat aplikasi To-Do List dengan fitur:</p>
        <ul>
          <li>Input task (JTextField + JButton "Add")</li>
          <li>Tampilkan tasks dalam JList</li>
          <li>Button "Delete" untuk menghapus task terpilih</li>
          <li>Button "Clear All" untuk menghapus semua tasks</li>
          <li>Counter jumlah tasks</li>
          <li>Menu Bar: File (New, Clear, Exit), Help (About)</li>
        </ul>

        <h3>Latihan 3: Kalkulator Sederhana</h3>
        <p><strong>Tugas:</strong> Buat kalkulator dengan:</p>
        <ul>
          <li>Display hasil (JTextField, setEditable(false))</li>
          <li>Button angka 0-9 (GridLayout 4x4)</li>
          <li>Button operasi (+, -, *, /)</li>
          <li>Button = untuk hasil</li>
          <li>Button C untuk clear</li>
          <li>Custom styling: warna button, font, border</li>
        </ul>

        <h3>Mini Project: Aplikasi Manajemen Kontak</h3>
        <p><strong>Deskripsi:</strong> Aplikasi lengkap untuk mengelola kontak dengan fitur:</p>
      `,code:{language:"java",filename:"ManajemenKontak.java",content:`// TEMPLATE MINI PROJECT
import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

public class ManajemenKontak extends JFrame {
    // Komponen GUI
    private JTable table;
    private DefaultTableModel model;
    private JTextField textNama, textTelepon, textEmail;
    private JTextArea textAlamat;
    private JComboBox<String> comboKategori;

    public ManajemenKontak() {
        setTitle("Aplikasi Manajemen Kontak");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // TODO: Implementasikan komponen-komponen berikut:

        // 1. Menu Bar
        //    - Menu File: New, Open, Save, Exit
        //    - Menu Edit: Add, Edit, Delete, Clear
        //    - Menu Help: About

        // 2. Panel Input (Kiri)
        //    - Field: Nama, Telepon, Email, Kategori (JComboBox), Alamat
        //    - Button: Tambah, Update, Hapus, Clear

        // 3. Panel Tabel (Kanan)
        //    - JTable dengan kolom: ID, Nama, Telepon, Email, Kategori
        //    - JScrollPane
        //    - Search bar di atas tabel

        // 4. Status Bar (Bawah)
        //    - Label untuk menampilkan jumlah kontak

        // 5. Fitur yang harus ada:
        //    - Validasi input (semua field tidak boleh kosong)
        //    - Validasi format email
        //    - Validasi telepon (hanya angka)
        //    - Click row di tabel untuk edit
        //    - Search/filter kontak
        //    - Konfirmasi sebelum delete
        //    - Custom styling

        buatMenuBar();
        buatPanelInput();
        buatPanelTabel();
        buatStatusBar();
    }

    private void buatMenuBar() {
        // Implementasi menu bar
    }

    private void buatPanelInput() {
        // Implementasi panel input
    }

    private void buatPanelTabel() {
        // Implementasi tabel
    }

    private void buatStatusBar() {
        // Implementasi status bar
    }

    private void tambahKontak() {
        // Implementasi tambah kontak dengan validasi
    }

    private void updateKontak() {
        // Implementasi update kontak
    }

    private void hapusKontak() {
        // Implementasi hapus kontak
    }

    private void cariKontak(String keyword) {
        // Implementasi search/filter
    }

    private boolean validasiInput() {
        // Implementasi validasi
        return true;
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new ManajemenKontak().setVisible(true);
        });
    }
}

// TIPS PENGERJAAN:
// 1. Kerjakan step by step, jangan langsung semua
// 2. Test setiap fitur yang sudah dibuat
// 3. Gunakan try-catch untuk error handling
// 4. Tambahkan JOptionPane untuk feedback ke user
// 5. Gunakan border dan padding untuk UI yang rapi`},additionalContent:`
        <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
          <h4>💡 Kriteria Mini Project:</h4>
          <ul>
            <li>✅ Semua fitur berfungsi dengan baik</li>
            <li>✅ Validasi input lengkap</li>
            <li>✅ UI rapi dan user-friendly</li>
            <li>✅ Error handling yang baik</li>
            <li>✅ Code terstruktur dan rapi</li>
            <li>✅ Ada komentar untuk code yang kompleks</li>
          </ul>
        </div>

        <h3>Bonus Challenge:</h3>
        <ul>
          <li>Tambahkan fitur export ke CSV</li>
          <li>Tambahkan fitur import dari CSV</li>
          <li>Tambahkan foto kontak (JLabel untuk display image)</li>
          <li>Dark mode toggle</li>
          <li>Sort berdasarkan kolom (click header tabel)</li>
        </ul>
      `},{id:"summary-gui-lanjutan",title:"Rangkuman Modul GUI Lanjutan",content:`
        <h2>🎯 Rangkuman Modul 6</h2>

        <h3>Yang Sudah Dipelajari:</h3>

        <h4>1. Komponen Input Lanjutan</h4>
        <ul>
          <li><strong>JComboBox</strong> - Dropdown pilihan, addItem(), removeItem()</li>
          <li><strong>JList</strong> - Daftar pilihan multiple dengan ScrollPane</li>
          <li><strong>JCheckBox</strong> - Checkbox untuk pilihan multiple</li>
          <li><strong>JRadioButton</strong> - Radio button dengan ButtonGroup</li>
        </ul>

        <h4>2. Komponen Display</h4>
        <ul>
          <li><strong>JTable</strong> - Tabel data dengan DefaultTableModel</li>
          <li><strong>JTextArea</strong> - Area teks multi-baris</li>
          <li><strong>JScrollPane</strong> - Scroll untuk komponen yang besar</li>
        </ul>

        <h4>3. Menu & Navigation</h4>
        <ul>
          <li><strong>JMenuBar</strong> - Menu bar utama</li>
          <li><strong>JMenu</strong> - Menu dropdown</li>
          <li><strong>JMenuItem</strong> - Item dalam menu</li>
          <li><strong>Keyboard Shortcuts</strong> - Mnemonic & Accelerator</li>
        </ul>

        <h4>4. Dialog & Popup</h4>
        <ul>
          <li><strong>JOptionPane</strong> - Dialog standar (message, confirm, input, option)</li>
          <li><strong>JDialog</strong> - Custom dialog window</li>
          <li><strong>JFileChooser</strong> - Dialog pilih file</li>
        </ul>

        <h4>5. Validasi & Error Handling</h4>
        <ul>
          <li>Validasi input field (kosong, min/max length)</li>
          <li>Validasi format (email, telepon dengan regex)</li>
          <li>Error message yang jelas</li>
          <li>Set focus ke field yang error</li>
        </ul>

        <h4>6. Custom Styling</h4>
        <ul>
          <li><strong>Font</strong> - new Font(name, style, size)</li>
          <li><strong>Color</strong> - new Color(r, g, b) atau Color.XXX</li>
          <li><strong>Border</strong> - Line, Empty, Titled, Compound</li>
          <li><strong>Look and Feel</strong> - UIManager untuk native look</li>
        </ul>

        <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
          <h4>✅ Checklist Kemampuan:</h4>
          <p>Setelah modul ini, Anda harus bisa:</p>
          <ul>
            <li>✅ Membuat form input lengkap dengan berbagai komponen</li>
            <li>✅ Menampilkan dan memanipulasi data dalam JTable</li>
            <li>✅ Membuat menu bar profesional dengan shortcuts</li>
            <li>✅ Menampilkan dialog dan mendapatkan input dari user</li>
            <li>✅ Melakukan validasi input yang comprehensive</li>
            <li>✅ Styling aplikasi agar terlihat menarik</li>
            <li>✅ Membuat aplikasi GUI yang kompleks dan user-friendly</li>
          </ul>
        </div>

        <h3>Tips Membuat Aplikasi GUI Profesional:</h3>
        <ol>
          <li><strong>Perencanaan</strong> - Buat mockup/sketch UI terlebih dahulu</li>
          <li><strong>Konsistensi</strong> - Gunakan font, warna, spacing yang konsisten</li>
          <li><strong>Feedback</strong> - Selalu beri feedback ke user (success, error, loading)</li>
          <li><strong>Validasi</strong> - Validasi semua input sebelum diproses</li>
          <li><strong>Error Handling</strong> - Tangkap dan handle semua possible error</li>
          <li><strong>Keyboard Support</strong> - Tambahkan shortcuts untuk efisiensi</li>
          <li><strong>Responsive</strong> - Pastikan UI tetap bagus di berbagai ukuran window</li>
          <li><strong>Clean Code</strong> - Pisahkan logic, UI, dan data</li>
        </ol>

        <div class="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4">
          <h4>🚀 Langkah Selanjutnya:</h4>
          <p>Setelah menguasai GUI Lanjutan, Anda siap untuk:</p>
          <ul>
            <li>Modul 7: <strong>Database dengan Java</strong> - Koneksi ke MySQL, CRUD operations</li>
            <li>Modul 8: <strong>File Handling</strong> - Baca/tulis file, serialization</li>
            <li>Modul 9: <strong>Exception Handling</strong> - Handle error dengan baik</li>
            <li>Modul 10: <strong>Best Practices</strong> - Design patterns, deployment</li>
            <li>Modul 11: <strong>Project Akhir</strong> - Aplikasi CRUD lengkap dengan database</li>
          </ul>
        </div>

        <h3>Referensi Tambahan:</h3>
        <ul>
          <li><a href="https://docs.oracle.com/javase/tutorial/uiswing/" target="_blank">Oracle Java Swing Tutorial</a></li>
          <li><a href="https://docs.oracle.com/javase/8/docs/api/javax/swing/package-summary.html" target="_blank">Java Swing API Documentation</a></li>
        </ul>

        <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
          <p><strong>💪 Selamat!</strong> Anda telah menyelesaikan Modul 6 - GUI Lanjutan. Sekarang Anda memiliki kemampuan untuk membuat aplikasi desktop yang kompleks dan profesional!</p>
          <p>Jangan lupa praktik dengan mengerjakan latihan dan mini project. <em>Practice makes perfect!</em></p>
        </div>
      `}]},Mk={title:"Database dengan Java - MySQL & JDBC",slug:"database-java",sections:[{id:"intro-database",title:"Pengenalan Database & MySQL",content:`
Selamat datang di modul Database! 🗄️

Sampai sejauh ini aplikasi kita masih **tidak menyimpan data secara permanen**. Ketika aplikasi ditutup, semua data hilang. Nah, di sini peran **Database** sangat penting!

**Apa itu Database?**

Database adalah sistem penyimpanan data yang terstruktur dan permanen. Data tersimpan di hard disk sehingga tidak hilang meskipun aplikasi ditutup atau komputer di-restart.

**Kenapa Perlu Database?**

✅ **Data Permanen** - Data tersimpan meskipun aplikasi ditutup
✅ **Terstruktur** - Data terorganisir dalam tabel (baris & kolom)
✅ **Cepat** - Query data dalam milidetik meski data jutaan
✅ **Multi-user** - Banyak user bisa akses bersamaan
✅ **Aman** - Ada sistem autentikasi dan hak akses

**MySQL - Database Pilihan Kita**

MySQL adalah database **relational** (tabel yang saling berhubungan) yang:
- **Gratis & Open Source**
- **Mudah dipelajari** - SQL syntax yang simple
- **Populer** - Banyak tutorial dan komunitas
- **Ringan** - Cocok untuk belajar dan production
- **Cross-platform** - Windows, Mac, Linux

**Konsep Dasar Database:**

\`\`\`
DATABASE (Java_Belajar)
  └── TABLE (mahasiswa)
       ├── COLUMN: id (int)
       ├── COLUMN: nama (varchar)
       ├── COLUMN: nim (varchar)
       ├── COLUMN: jurusan (varchar)
       └── ROWS: data mahasiswa
\`\`\`

**Contoh Data dalam Tabel:**

| id  | nama           | nim       | jurusan              |
|-----|----------------|-----------|----------------------|
| 1   | Budi Santoso   | 2024001   | Teknik Informatika   |
| 2   | Siti Rahma     | 2024002   | Sistem Informasi     |
| 3   | Andi Wijaya    | 2024003   | Teknik Informatika   |
      `},{id:"install-mysql",title:"Install & Setup MySQL",content:`
**Step 1: Download MySQL**

1. Buka https://dev.mysql.com/downloads/installer/
2. Download **MySQL Installer** untuk Windows
3. Pilih versi **mysql-installer-community** (gratis)

**Step 2: Install MySQL**

1. Jalankan installer
2. Pilih **Developer Default** (termasuk MySQL Server + Workbench)
3. Next sampai ke **MySQL Server Configuration**
4. Atur **root password** (INGAT password ini!)
   - Contoh password: \`root123\` (untuk belajar)
   - **JANGAN** gunakan password simpel di production!
5. Next sampai selesai

**Step 3: Verifikasi Instalasi**

Buka **MySQL Workbench** (sudah terinstall otomatis):
1. Klik **Local instance MySQL**
2. Masukkan password root
3. Kalau berhasil masuk, berarti instalasi sukses! ✅

**Step 4: Buat Database Pertama**

Di MySQL Workbench, ketik query ini:

\`\`\`sql
-- Buat database baru
CREATE DATABASE java_belajar;

-- Gunakan database ini
USE java_belajar;

-- Buat tabel mahasiswa
CREATE TABLE mahasiswa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(100) NOT NULL,
    nim VARCHAR(20) NOT NULL UNIQUE,
    jurusan VARCHAR(50) NOT NULL,
    ipk DECIMAL(3,2)
);

-- Insert data sample
INSERT INTO mahasiswa (nama, nim, jurusan, ipk) VALUES
('Budi Santoso', '2024001', 'Teknik Informatika', 3.75),
('Siti Rahma', '2024002', 'Sistem Informasi', 3.82),
('Andi Wijaya', '2024003', 'Teknik Informatika', 3.45);

-- Lihat semua data
SELECT * FROM mahasiswa;
\`\`\`

Klik tombol **Execute** (petir ⚡) untuk menjalankan query.

**Penjelasan SQL:**
- \`CREATE DATABASE\` - Buat database baru
- \`CREATE TABLE\` - Buat tabel dengan kolom-kolomnya
- \`PRIMARY KEY\` - Kolom yang unik untuk identifikasi
- \`AUTO_INCREMENT\` - Otomatis bertambah (1, 2, 3, ...)
- \`NOT NULL\` - Kolom wajib diisi
- \`UNIQUE\` - Tidak boleh duplikat
- \`INSERT INTO\` - Tambah data
- \`SELECT\` - Ambil/tampilkan data

Kalau muncul data 3 mahasiswa, berarti berhasil! 🎉
      `},{id:"jdbc-intro",title:"JDBC - Jembatan Java ke Database",content:`
**Apa itu JDBC?**

**JDBC (Java Database Connectivity)** adalah API Java untuk berkomunikasi dengan database. Ibarat jembatan yang menghubungkan aplikasi Java kita dengan MySQL.

**Cara Kerja JDBC:**

\`\`\`
[Aplikasi Java]
    ↓ (JDBC)
[MySQL Connector/J]
    ↓ (Network)
[MySQL Database]
\`\`\`

**Download MySQL Connector/J (JDBC Driver)**

1. Buka https://dev.mysql.com/downloads/connector/j/
2. Download **Platform Independent** (ZIP)
3. Extract ZIP
4. Cari file **mysql-connector-java-X.X.XX.jar**

**Setup di NetBeans:**

1. Buka project di NetBeans
2. Klik kanan **Libraries** → **Add JAR/Folder**
3. Pilih file **mysql-connector-java-X.X.XX.jar**
4. Klik **Open**
5. Sekarang JDBC sudah siap dipakai! ✅

**5 Langkah Koneksi Database dengan JDBC:**

1. **Load Driver** - Daftarkan MySQL driver
2. **Buat Koneksi** - Connect ke MySQL
3. **Buat Statement** - Objek untuk execute query
4. **Execute Query** - Jalankan SQL (SELECT, INSERT, dll)
5. **Close Koneksi** - Tutup koneksi (PENTING!)

**Informasi Koneksi yang Dibutuhkan:**

\`\`\`java
String url = "jdbc:mysql://localhost:3306/java_belajar";
String user = "root";
String password = "root123"; // password MySQL Anda
\`\`\`

Penjelasan URL:
- \`jdbc:mysql://\` - Protocol JDBC untuk MySQL
- \`localhost\` - Server database (di komputer kita)
- \`3306\` - Port MySQL (default)
- \`java_belajar\` - Nama database
      `},{id:"koneksi-database",title:"Koneksi ke Database",content:`
Mari kita buat koneksi pertama ke MySQL!

**Cara 1: Koneksi Sederhana (untuk belajar konsep)**
      `,code:{language:"java",filename:"KoneksiPertama.java",code:`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class KoneksiPertama {
    public static void main(String[] args) {
        // Informasi koneksi
        String url = "jdbc:mysql://localhost:3306/java_belajar";
        String user = "root";
        String password = "root123"; // Ganti dengan password Anda!

        Connection conn = null;

        try {
            // 1. Load MySQL Driver (optional di JDBC 4.0+)
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Buat koneksi
            conn = DriverManager.getConnection(url, user, password);

            // 3. Koneksi berhasil!
            System.out.println("Koneksi ke database berhasil!");
            System.out.println("Database: " + conn.getCatalog());

        } catch (ClassNotFoundException e) {
            System.out.println("Driver MySQL tidak ditemukan!");
            System.out.println("Pastikan sudah add mysql-connector-java.jar");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("Koneksi gagal!");
            System.out.println("Cek: URL, username, password, MySQL server");
            e.printStackTrace();
        } finally {
            // 4. SELALU tutup koneksi!
            try {
                if (conn != null && !conn.isClosed()) {
                    conn.close();
                    System.out.println("Koneksi ditutup.");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}`},afterCode:`
**Penjelasan:**
- \`Class.forName()\` - Load driver MySQL (opsional di versi baru)
- \`DriverManager.getConnection()\` - Buat koneksi ke database
- \`try-catch\` - Tangani error (driver tidak ada, password salah, dll)
- \`finally\` - Block yang **SELALU** dijalankan, untuk close koneksi
- \`conn.close()\` - WAJIB! Kalau tidak ditutup, koneksi menumpuk

**Jalankan program**, kalau muncul "Koneksi ke database berhasil!", berarti setup Anda sudah benar! 🎉

**Cara 2: Class Koneksi yang Reusable (Best Practice)**
      `,code2:{language:"java",filename:"DatabaseConnection.java",code:`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    // Database credentials
    private static final String URL = "jdbc:mysql://localhost:3306/java_belajar";
    private static final String USER = "root";
    private static final String PASSWORD = "root123";

    // Method untuk mendapatkan koneksi
    public static Connection getConnection() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            return DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (ClassNotFoundException e) {
            throw new SQLException("Driver MySQL tidak ditemukan!", e);
        }
    }

    // Method untuk test koneksi
    public static void testConnection() {
        try (Connection conn = getConnection()) {
            if (conn != null) {
                System.out.println("✅ Koneksi berhasil!");
                System.out.println("Database: " + conn.getCatalog());
            }
        } catch (SQLException e) {
            System.out.println("❌ Koneksi gagal!");
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        testConnection();
    }
}`},afterCode2:`
**Keunggulan Cara 2:**
✅ Konfigurasi database terpusat (di satu tempat)
✅ Mudah digunakan ulang di class lain
✅ Otomatis close dengan **try-with-resources**
✅ Lebih profesional dan clean code

Sekarang setiap kali butuh koneksi, tinggal:
\`\`\`java
Connection conn = DatabaseConnection.getConnection();
\`\`\`

**Try-with-resources** (Java 7+):
\`\`\`java
try (Connection conn = DatabaseConnection.getConnection()) {
    // Pakai koneksi
} // Otomatis close saat keluar try block!
\`\`\`

Lebih praktis dan aman!
      `},{id:"select-data",title:"SELECT - Mengambil Data",content:`
Sekarang kita belajar **membaca data** dari database dengan query **SELECT**.

**Konsep:**
\`\`\`
Java → SQL Query (SELECT) → MySQL → ResultSet → Java
\`\`\`

**ResultSet** adalah objek yang berisi hasil query, seperti tabel virtual yang bisa kita baca baris per baris.
      `,code:{language:"java",filename:"SelectData.java",code:`import java.sql.*;

public class SelectData {
    public static void main(String[] args) {
        String sql = "SELECT * FROM mahasiswa";

        try (Connection conn = DatabaseConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            System.out.println("=== DATA MAHASISWA ===");
            System.out.println("ID | Nama | NIM | Jurusan | IPK");
            System.out.println("-------------------------------------------");

            // Loop semua baris hasil query
            while (rs.next()) {
                int id = rs.getInt("id");
                String nama = rs.getString("nama");
                String nim = rs.getString("nim");
                String jurusan = rs.getString("jurusan");
                double ipk = rs.getDouble("ipk");

                System.out.printf("%d | %s | %s | %s | %.2f%n",
                    id, nama, nim, jurusan, ipk);
            }

        } catch (SQLException e) {
            System.out.println("Error saat mengambil data!");
            e.printStackTrace();
        }
    }
}`},afterCode:'\n**Penjelasan:**\n- `Statement` - Objek untuk execute SQL query\n- `executeQuery()` - Execute SELECT query, return ResultSet\n- `ResultSet` - Hasil query, seperti tabel\n- `rs.next()` - Pindah ke baris berikutnya (return false kalau sudah habis)\n- `rs.getInt("id")` - Ambil nilai kolom "id" sebagai integer\n- `rs.getString("nama")` - Ambil nilai kolom "nama" sebagai string\n- `rs.getDouble("ipk")` - Ambil nilai kolom "ipk" sebagai double\n\n**SELECT dengan WHERE (Filter)**\n      ',code2:{language:"java",filename:"SelectWithFilter.java",code:`import java.sql.*;

public class SelectWithFilter {
    public static void main(String[] args) {
        // Cari mahasiswa dengan IPK >= 3.5
        String sql = "SELECT * FROM mahasiswa WHERE ipk >= 3.5 ORDER BY ipk DESC";

        try (Connection conn = DatabaseConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            System.out.println("=== MAHASISWA DENGAN IPK >= 3.5 ===");

            while (rs.next()) {
                System.out.println("Nama  : " + rs.getString("nama"));
                System.out.println("NIM   : " + rs.getString("nim"));
                System.out.println("IPK   : " + rs.getDouble("ipk"));
                System.out.println("------------------------------");
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

// Contoh query SQL lainnya:
// WHERE jurusan = 'Teknik Informatika'
// WHERE nama LIKE '%Budi%'  -- Cari nama yang mengandung 'Budi'
// ORDER BY ipk DESC         -- Urutkan IPK dari tinggi ke rendah
// LIMIT 10                  -- Ambil 10 data pertama`}},{id:"insert-data",title:"INSERT - Menambah Data",content:`
Sekarang kita belajar **menambah data baru** ke database dengan **INSERT**.

**Cara 1: Statement (Simple tapi TIDAK AMAN)**
      `,code:{language:"java",filename:"InsertData.java",code:`import java.sql.*;

public class InsertData {
    public static void main(String[] args) {
        String sql = "INSERT INTO mahasiswa (nama, nim, jurusan, ipk) " +
                     "VALUES ('Dewi Lestari', '2024004', 'Manajemen Informatika', 3.90)";

        try (Connection conn = DatabaseConnection.getConnection();
             Statement stmt = conn.createStatement()) {

            // Execute INSERT query
            int rowsAffected = stmt.executeUpdate(sql);

            System.out.println("Data berhasil ditambahkan!");
            System.out.println("Jumlah baris: " + rowsAffected);

        } catch (SQLException e) {
            System.out.println("Gagal menambah data!");
            e.printStackTrace();
        }
    }
}`},afterCode:`
**Masalah Cara 1:**
❌ **SQL Injection vulnerability!** - Hacker bisa input SQL berbahaya
❌ Susah untuk data yang dinamis (dari user input)

**Cara 2: PreparedStatement (RECOMMENDED - Aman & Fleksibel)**
      `,code2:{language:"java",filename:"InsertDataPrepared.java",code:`import java.sql.*;
import java.util.Scanner;

public class InsertDataPrepared {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Input dari user
        System.out.print("Nama: ");
        String nama = input.nextLine();

        System.out.print("NIM: ");
        String nim = input.nextLine();

        System.out.print("Jurusan: ");
        String jurusan = input.nextLine();

        System.out.print("IPK: ");
        double ipk = input.nextDouble();

        // SQL dengan placeholder (?)
        String sql = "INSERT INTO mahasiswa (nama, nim, jurusan, ipk) VALUES (?, ?, ?, ?)";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            // Set nilai untuk setiap placeholder
            pstmt.setString(1, nama);      // Parameter 1
            pstmt.setString(2, nim);       // Parameter 2
            pstmt.setString(3, jurusan);   // Parameter 3
            pstmt.setDouble(4, ipk);       // Parameter 4

            // Execute
            int rowsAffected = pstmt.executeUpdate();

            System.out.println("✅ Data berhasil ditambahkan!");
            System.out.println("Baris terpengaruh: " + rowsAffected);

        } catch (SQLException e) {
            if (e.getMessage().contains("Duplicate entry")) {
                System.out.println("❌ NIM sudah terdaftar!");
            } else {
                System.out.println("❌ Gagal menambah data!");
                e.printStackTrace();
            }
        }

        input.close();
    }
}`},afterCode2:`
**Keunggulan PreparedStatement:**
✅ **Aman dari SQL Injection** - Input otomatis di-escape
✅ **Lebih cepat** - Query di-compile sekali, bisa dipakai berkali-kali
✅ **Mudah dibaca** - Placeholder (?) jelas
✅ **Otomatis handle tipe data** - setString, setInt, setDouble, dll

**Placeholder & Parameter:**
- \`?\` = Placeholder untuk nilai
- \`pstmt.setString(1, nilai)\` = Set parameter ke-1
- Parameter dimulai dari **1** (bukan 0!)

**Contoh dengan Return ID yang di-generate:**
      `,additionalCode:{language:"java",content:`// Insert dan dapatkan ID yang auto-generated
String sql = "INSERT INTO mahasiswa (nama, nim, jurusan, ipk) VALUES (?, ?, ?, ?)";

try (Connection conn = DatabaseConnection.getConnection();
     PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

    pstmt.setString(1, "Rudi Hartono");
    pstmt.setString(2, "2024005");
    pstmt.setString(3, "Sistem Informasi");
    pstmt.setDouble(4, 3.65);

    pstmt.executeUpdate();

    // Ambil ID yang baru saja di-generate
    ResultSet rs = pstmt.getGeneratedKeys();
    if (rs.next()) {
        int newId = rs.getInt(1);
        System.out.println("ID mahasiswa baru: " + newId);
    }
}`}},{id:"update-delete",title:"UPDATE & DELETE Data",content:`
**UPDATE - Mengubah Data yang Sudah Ada**
      `,code:{language:"java",filename:"UpdateData.java",code:`import java.sql.*;
import java.util.Scanner;

public class UpdateData {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("NIM mahasiswa yang akan diupdate: ");
        String nim = input.nextLine();

        System.out.print("IPK baru: ");
        double ipkBaru = input.nextDouble();

        // SQL UPDATE
        String sql = "UPDATE mahasiswa SET ipk = ? WHERE nim = ?";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setDouble(1, ipkBaru);
            pstmt.setString(2, nim);

            int rowsAffected = pstmt.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("✅ IPK berhasil diupdate!");
            } else {
                System.out.println("❌ NIM tidak ditemukan!");
            }

        } catch (SQLException e) {
            System.out.println("❌ Gagal update data!");
            e.printStackTrace();
        }

        input.close();
    }
}`},afterCode:`
**DELETE - Menghapus Data**
      `,code2:{language:"java",filename:"DeleteData.java",code:`import java.sql.*;
import java.util.Scanner;

public class DeleteData {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("NIM mahasiswa yang akan dihapus: ");
        String nim = input.nextLine();

        // Konfirmasi dulu
        System.out.print("Yakin ingin menghapus? (y/n): ");
        String konfirmasi = input.nextLine();

        if (!konfirmasi.equalsIgnoreCase("y")) {
            System.out.println("Penghapusan dibatalkan.");
            input.close();
            return;
        }

        // SQL DELETE
        String sql = "DELETE FROM mahasiswa WHERE nim = ?";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, nim);

            int rowsAffected = pstmt.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("✅ Data berhasil dihapus!");
            } else {
                System.out.println("❌ NIM tidak ditemukan!");
            }

        } catch (SQLException e) {
            System.out.println("❌ Gagal menghapus data!");
            e.printStackTrace();
        }

        input.close();
    }
}`},afterCode2:`
**Tips Penting:**

⚠️ **UPDATE & DELETE HARUS PAKAI WHERE!**

Kalau tidak pakai WHERE, **semua data** akan berubah/terhapus:
\`\`\`sql
UPDATE mahasiswa SET ipk = 4.0;  -- ❌ Semua IPK jadi 4.0!
DELETE FROM mahasiswa;            -- ❌ Semua data terhapus!
\`\`\`

✅ **Selalu pakai WHERE:**
\`\`\`sql
UPDATE mahasiswa SET ipk = 4.0 WHERE nim = '2024001';  -- ✅ Hanya 1 data
DELETE FROM mahasiswa WHERE nim = '2024001';            -- ✅ Hanya 1 data
\`\`\`

**Cek rowsAffected:**
- Return 0 = Tidak ada data yang berubah (WHERE tidak cocok)
- Return > 0 = Ada data yang berubah

**Best Practice:**
1. Selalu konfirmasi sebelum DELETE
2. Gunakan PreparedStatement untuk keamanan
3. Cek rowsAffected untuk validasi
4. Tangani exception dengan baik
      `},{id:"crud-class",title:"Membuat Class CRUD Lengkap",content:`
Sekarang kita gabungkan semua operasi (Create, Read, Update, Delete) dalam satu class yang rapi!

**Class Model: Mahasiswa.java**
      `,code:{language:"java",filename:"Mahasiswa.java",code:`public class Mahasiswa {
    private int id;
    private String nama;
    private String nim;
    private String jurusan;
    private double ipk;

    // Constructor
    public Mahasiswa(int id, String nama, String nim, String jurusan, double ipk) {
        this.id = id;
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.ipk = ipk;
    }

    // Constructor tanpa ID (untuk insert data baru)
    public Mahasiswa(String nama, String nim, String jurusan, double ipk) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.ipk = ipk;
    }

    // Getters & Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNama() { return nama; }
    public void setNama(String nama) { this.nama = nama; }

    public String getNim() { return nim; }
    public void setNim(String nim) { this.nim = nim; }

    public String getJurusan() { return jurusan; }
    public void setJurusan(String jurusan) { this.jurusan = jurusan; }

    public double getIpk() { return ipk; }
    public void setIpk(double ipk) { this.ipk = ipk; }

    @Override
    public String toString() {
        return String.format("ID: %d | %s (%s) | %s | IPK: %.2f",
            id, nama, nim, jurusan, ipk);
    }
}`},afterCode:`
**Class DAO (Data Access Object): MahasiswaDAO.java**

DAO adalah pattern untuk memisahkan logic database dari logic bisnis.
      `,code2:{language:"java",filename:"MahasiswaDAO.java",code:`import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class MahasiswaDAO {

    // CREATE - Tambah mahasiswa baru
    public boolean insert(Mahasiswa mhs) {
        String sql = "INSERT INTO mahasiswa (nama, nim, jurusan, ipk) VALUES (?, ?, ?, ?)";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, mhs.getNama());
            pstmt.setString(2, mhs.getNim());
            pstmt.setString(3, mhs.getJurusan());
            pstmt.setDouble(4, mhs.getIpk());

            return pstmt.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // READ - Ambil semua mahasiswa
    public List<Mahasiswa> getAll() {
        List<Mahasiswa> list = new ArrayList<>();
        String sql = "SELECT * FROM mahasiswa ORDER BY nama";

        try (Connection conn = DatabaseConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Mahasiswa mhs = new Mahasiswa(
                    rs.getInt("id"),
                    rs.getString("nama"),
                    rs.getString("nim"),
                    rs.getString("jurusan"),
                    rs.getDouble("ipk")
                );
                list.add(mhs);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }

    // READ - Cari berdasarkan NIM
    public Mahasiswa getByNim(String nim) {
        String sql = "SELECT * FROM mahasiswa WHERE nim = ?";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, nim);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return new Mahasiswa(
                    rs.getInt("id"),
                    rs.getString("nama"),
                    rs.getString("nim"),
                    rs.getString("jurusan"),
                    rs.getDouble("ipk")
                );
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null; // Tidak ditemukan
    }

    // UPDATE - Update data mahasiswa
    public boolean update(Mahasiswa mhs) {
        String sql = "UPDATE mahasiswa SET nama = ?, jurusan = ?, ipk = ? WHERE nim = ?";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, mhs.getNama());
            pstmt.setString(2, mhs.getJurusan());
            pstmt.setDouble(3, mhs.getIpk());
            pstmt.setString(4, mhs.getNim());

            return pstmt.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // DELETE - Hapus mahasiswa
    public boolean delete(String nim) {
        String sql = "DELETE FROM mahasiswa WHERE nim = ?";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, nim);
            return pstmt.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // SEARCH - Cari berdasarkan nama
    public List<Mahasiswa> search(String keyword) {
        List<Mahasiswa> list = new ArrayList<>();
        String sql = "SELECT * FROM mahasiswa WHERE nama LIKE ? OR jurusan LIKE ?";

        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            String pattern = "%" + keyword + "%";
            pstmt.setString(1, pattern);
            pstmt.setString(2, pattern);

            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                Mahasiswa mhs = new Mahasiswa(
                    rs.getInt("id"),
                    rs.getString("nama"),
                    rs.getString("nim"),
                    rs.getString("jurusan"),
                    rs.getDouble("ipk")
                );
                list.add(mhs);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }
}`},afterCode2:`
**Cara Menggunakan DAO:**
      `,additionalCode:{language:"java",filename:"TestMahasiswaDAO.java",content:`public class TestMahasiswaDAO {
    public static void main(String[] args) {
        MahasiswaDAO dao = new MahasiswaDAO();

        // 1. INSERT
        Mahasiswa mhsBaru = new Mahasiswa("Ahmad Yani", "2024010", "Teknik Informatika", 3.55);
        if (dao.insert(mhsBaru)) {
            System.out.println("✅ Data berhasil ditambahkan!");
        }

        // 2. GET ALL
        System.out.println("\\n=== SEMUA MAHASISWA ===");
        List<Mahasiswa> semua = dao.getAll();
        for (Mahasiswa mhs : semua) {
            System.out.println(mhs);
        }

        // 3. GET BY NIM
        System.out.println("\\n=== CARI NIM 2024001 ===");
        Mahasiswa mhs = dao.getByNim("2024001");
        if (mhs != null) {
            System.out.println(mhs);
        }

        // 4. UPDATE
        if (mhs != null) {
            mhs.setIpk(3.85);
            if (dao.update(mhs)) {
                System.out.println("✅ IPK berhasil diupdate!");
            }
        }

        // 5. SEARCH
        System.out.println("\\n=== CARI 'Teknik' ===");
        List<Mahasiswa> hasil = dao.search("Teknik");
        for (Mahasiswa m : hasil) {
            System.out.println(m);
        }

        // 6. DELETE
        // dao.delete("2024010");
    }
}`},additionalContent:`
<div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
  <h4>✅ Keunggulan Pattern DAO:</h4>
  <ul>
    <li><strong>Separation of Concerns</strong> - Logic database terpisah dari UI</li>
    <li><strong>Reusable</strong> - Bisa dipakai di mana saja (console, GUI, web)</li>
    <li><strong>Mudah di-maintain</strong> - Kalau ganti database, ubah di DAO saja</li>
    <li><strong>Testable</strong> - Mudah untuk unit testing</li>
    <li><strong>Clean Code</strong> - Kode lebih rapi dan terstruktur</li>
  </ul>
</div>
      `},{id:"gui-database",title:"Integrasi GUI + Database",content:`
Sekarang kita gabungkan GUI (Swing) dengan Database! Ini adalah aplikasi CRUD lengkap yang profesional.

**Mini Project: Aplikasi Manajemen Mahasiswa**

Template aplikasi dengan GUI + Database:
      `,code:{language:"java",filename:"AplikasiMahasiswaGUI.java",code:`import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.util.List;

public class AplikasiMahasiswaGUI extends JFrame {
    private JTextField textNama, textNIM, textJurusan, textIPK, textSearch;
    private JTable table;
    private DefaultTableModel tableModel;
    private MahasiswaDAO dao;

    public AplikasiMahasiswaGUI() {
        dao = new MahasiswaDAO();

        setTitle("Aplikasi Manajemen Mahasiswa");
        setSize(900, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout(10, 10));

        // Panel Input (Kiri)
        JPanel panelInput = createInputPanel();
        add(panelInput, BorderLayout.WEST);

        // Panel Tabel (Tengah)
        JPanel panelTabel = createTablePanel();
        add(panelTabel, BorderLayout.CENTER);

        // Load data awal
        loadData();
    }

    private JPanel createInputPanel() {
        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        panel.setPreferredSize(new Dimension(300, 0));

        // Title
        JLabel lblTitle = new JLabel("Form Mahasiswa");
        lblTitle.setFont(new Font("Arial", Font.BOLD, 18));
        lblTitle.setAlignmentX(Component.CENTER_ALIGNMENT);
        panel.add(lblTitle);
        panel.add(Box.createVerticalStrut(20));

        // Input fields
        panel.add(new JLabel("Nama:"));
        textNama = new JTextField();
        panel.add(textNama);
        panel.add(Box.createVerticalStrut(10));

        panel.add(new JLabel("NIM:"));
        textNIM = new JTextField();
        panel.add(textNIM);
        panel.add(Box.createVerticalStrut(10));

        panel.add(new JLabel("Jurusan:"));
        textJurusan = new JTextField();
        panel.add(textJurusan);
        panel.add(Box.createVerticalStrut(10));

        panel.add(new JLabel("IPK:"));
        textIPK = new JTextField();
        panel.add(textIPK);
        panel.add(Box.createVerticalStrut(20));

        // Buttons
        JButton btnTambah = new JButton("Tambah");
        btnTambah.addActionListener(e -> tambahData());
        panel.add(btnTambah);
        panel.add(Box.createVerticalStrut(10));

        JButton btnUpdate = new JButton("Update");
        btnUpdate.addActionListener(e -> updateData());
        panel.add(btnUpdate);
        panel.add(Box.createVerticalStrut(10));

        JButton btnHapus = new JButton("Hapus");
        btnHapus.addActionListener(e -> hapusData());
        panel.add(btnHapus);
        panel.add(Box.createVerticalStrut(10));

        JButton btnClear = new JButton("Clear");
        btnClear.addActionListener(e -> clearForm());
        panel.add(btnClear);

        return panel;
    }

    private JPanel createTablePanel() {
        JPanel panel = new JPanel(new BorderLayout(10, 10));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 0, 20, 20));

        // Search bar
        JPanel panelSearch = new JPanel(new FlowLayout(FlowLayout.LEFT));
        panelSearch.add(new JLabel("Search:"));
        textSearch = new JTextField(20);
        panelSearch.add(textSearch);
        JButton btnSearch = new JButton("Cari");
        btnSearch.addActionListener(e -> searchData());
        panelSearch.add(btnSearch);
        JButton btnRefresh = new JButton("Refresh");
        btnRefresh.addActionListener(e -> loadData());
        panelSearch.add(btnRefresh);

        panel.add(panelSearch, BorderLayout.NORTH);

        // Table
        String[] columnNames = {"ID", "Nama", "NIM", "Jurusan", "IPK"};
        tableModel = new DefaultTableModel(columnNames, 0) {
            @Override
            public boolean isCellEditable(int row, int column) {
                return false; // Tidak bisa edit langsung
            }
        };

        table = new JTable(tableModel);
        table.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        table.getSelectionModel().addListSelectionListener(e -> {
            if (!e.getValueIsAdjusting() && table.getSelectedRow() != -1) {
                fillFormFromTable();
            }
        });

        JScrollPane scrollPane = new JScrollPane(table);
        panel.add(scrollPane, BorderLayout.CENTER);

        return panel;
    }

    private void loadData() {
        tableModel.setRowCount(0); // Clear table
        List<Mahasiswa> list = dao.getAll();

        for (Mahasiswa mhs : list) {
            Object[] row = {
                mhs.getId(),
                mhs.getNama(),
                mhs.getNim(),
                mhs.getJurusan(),
                mhs.getIpk()
            };
            tableModel.addRow(row);
        }
    }

    private void tambahData() {
        if (!validateInput()) return;

        Mahasiswa mhs = new Mahasiswa(
            textNama.getText(),
            textNIM.getText(),
            textJurusan.getText(),
            Double.parseDouble(textIPK.getText())
        );

        if (dao.insert(mhs)) {
            JOptionPane.showMessageDialog(this, "Data berhasil ditambahkan!");
            loadData();
            clearForm();
        } else {
            JOptionPane.showMessageDialog(this, "Gagal menambah data!",
                "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void updateData() {
        if (table.getSelectedRow() == -1) {
            JOptionPane.showMessageDialog(this, "Pilih data yang akan diupdate!");
            return;
        }

        if (!validateInput()) return;

        Mahasiswa mhs = new Mahasiswa(
            textNama.getText(),
            textNIM.getText(),
            textJurusan.getText(),
            Double.parseDouble(textIPK.getText())
        );

        if (dao.update(mhs)) {
            JOptionPane.showMessageDialog(this, "Data berhasil diupdate!");
            loadData();
            clearForm();
        } else {
            JOptionPane.showMessageDialog(this, "Gagal update data!",
                "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void hapusData() {
        int row = table.getSelectedRow();
        if (row == -1) {
            JOptionPane.showMessageDialog(this, "Pilih data yang akan dihapus!");
            return;
        }

        int confirm = JOptionPane.showConfirmDialog(this,
            "Yakin ingin menghapus data ini?", "Konfirmasi",
            JOptionPane.YES_NO_OPTION);

        if (confirm == JOptionPane.YES_OPTION) {
            String nim = table.getValueAt(row, 2).toString();

            if (dao.delete(nim)) {
                JOptionPane.showMessageDialog(this, "Data berhasil dihapus!");
                loadData();
                clearForm();
            } else {
                JOptionPane.showMessageDialog(this, "Gagal menghapus data!",
                    "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
    }

    private void searchData() {
        String keyword = textSearch.getText().trim();
        if (keyword.isEmpty()) {
            loadData();
            return;
        }

        tableModel.setRowCount(0);
        List<Mahasiswa> list = dao.search(keyword);

        for (Mahasiswa mhs : list) {
            Object[] row = {
                mhs.getId(),
                mhs.getNama(),
                mhs.getNim(),
                mhs.getJurusan(),
                mhs.getIpk()
            };
            tableModel.addRow(row);
        }
    }

    private void fillFormFromTable() {
        int row = table.getSelectedRow();
        textNama.setText(table.getValueAt(row, 1).toString());
        textNIM.setText(table.getValueAt(row, 2).toString());
        textJurusan.setText(table.getValueAt(row, 3).toString());
        textIPK.setText(table.getValueAt(row, 4).toString());
    }

    private void clearForm() {
        textNama.setText("");
        textNIM.setText("");
        textJurusan.setText("");
        textIPK.setText("");
        textSearch.setText("");
        table.clearSelection();
    }

    private boolean validateInput() {
        if (textNama.getText().trim().isEmpty()) {
            JOptionPane.showMessageDialog(this, "Nama harus diisi!");
            textNama.requestFocus();
            return false;
        }

        if (textNIM.getText().trim().isEmpty()) {
            JOptionPane.showMessageDialog(this, "NIM harus diisi!");
            textNIM.requestFocus();
            return false;
        }

        if (textJurusan.getText().trim().isEmpty()) {
            JOptionPane.showMessageDialog(this, "Jurusan harus diisi!");
            textJurusan.requestFocus();
            return false;
        }

        try {
            double ipk = Double.parseDouble(textIPK.getText());
            if (ipk < 0 || ipk > 4.0) {
                JOptionPane.showMessageDialog(this, "IPK harus antara 0-4.0!");
                return false;
            }
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "IPK harus berupa angka!");
            textIPK.requestFocus();
            return false;
        }

        return true;
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new AplikasiMahasiswaGUI().setVisible(true);
        });
    }
}`},afterCode:`
**Fitur Aplikasi:**
✅ CREATE - Tambah mahasiswa baru
✅ READ - Tampilkan semua data di tabel
✅ UPDATE - Edit data yang ada
✅ DELETE - Hapus data dengan konfirmasi
✅ SEARCH - Cari berdasarkan nama/jurusan
✅ Form validation lengkap
✅ Click row untuk edit
✅ UI profesional dengan Swing

**Cara Menjalankan:**
1. Pastikan MySQL server running
2. Database \`java_belajar\` dan tabel \`mahasiswa\` sudah ada
3. File \`DatabaseConnection.java\`, \`Mahasiswa.java\`, dan \`MahasiswaDAO.java\` sudah ada
4. Jalankan \`AplikasiMahasiswaGUI.java\`

Selamat! Anda baru saja membuat **aplikasi desktop CRUD lengkap** dengan GUI + Database! 🎉
      `},{id:"best-practices",title:"Best Practices & Tips Database",content:`
**1. Selalu Gunakan PreparedStatement**

❌ **Jangan:**
\`\`\`java
String sql = "SELECT * FROM user WHERE username = '" + userInput + "'";
// Vulnerable to SQL Injection!
\`\`\`

✅ **Gunakan:**
\`\`\`java
String sql = "SELECT * FROM user WHERE username = ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, userInput);
// Safe from SQL Injection!
\`\`\`

**2. Selalu Close Koneksi**

✅ **Gunakan try-with-resources:**
\`\`\`java
try (Connection conn = getConnection();
     PreparedStatement pstmt = conn.prepareStatement(sql);
     ResultSet rs = pstmt.executeQuery()) {
    // Code
} // Otomatis close semua!
\`\`\`

**3. Handle Exception dengan Baik**

\`\`\`java
try {
    // Database operation
} catch (SQLException e) {
    // Log error
    logger.error("Database error", e);
    // Tampilkan pesan user-friendly
    JOptionPane.showMessageDialog(null,
        "Terjadi kesalahan saat menyimpan data. Coba lagi.");
}
\`\`\`

**4. Gunakan Connection Pooling (untuk aplikasi besar)**

\`\`\`java
// Alternatif: HikariCP (connection pooling)
// Lebih efisien untuk banyak koneksi
HikariConfig config = new HikariConfig();
config.setJdbcUrl("jdbc:mysql://localhost:3306/java_belajar");
config.setUsername("root");
config.setPassword("root123");
config.setMaximumPoolSize(10);

HikariDataSource dataSource = new HikariDataSource(config);
Connection conn = dataSource.getConnection();
\`\`\`

**5. Pisahkan Konfigurasi Database**

Simpan di file terpisah (config.properties):
\`\`\`properties
db.url=jdbc:mysql://localhost:3306/java_belajar
db.username=root
db.password=root123
\`\`\`

Load di Java:
\`\`\`java
Properties props = new Properties();
props.load(new FileInputStream("config.properties"));
String url = props.getProperty("db.url");
\`\`\`

**6. Gunakan Transaction untuk Multiple Operations**

\`\`\`java
Connection conn = null;
try {
    conn = getConnection();
    conn.setAutoCommit(false); // Start transaction

    // Multiple operations
    insertMahasiswa(conn, mhs1);
    updateJurusan(conn, jurusanId);
    deleteNilai(conn, nilaiId);

    conn.commit(); // Commit semua kalau sukses

} catch (SQLException e) {
    if (conn != null) {
        conn.rollback(); // Rollback kalau ada error
    }
    e.printStackTrace();
} finally {
    if (conn != null) {
        conn.setAutoCommit(true);
        conn.close();
    }
}
\`\`\`

**7. Indexing untuk Performa**

\`\`\`sql
-- Buat index untuk kolom yang sering dicari
CREATE INDEX idx_nim ON mahasiswa(nim);
CREATE INDEX idx_nama ON mahasiswa(nama);

-- Query jadi jauh lebih cepat!
\`\`\`

**8. Batasi Data dengan LIMIT**

\`\`\`sql
-- Jangan ambil semua data kalau tidak perlu
SELECT * FROM mahasiswa LIMIT 100;

-- Dengan pagination
SELECT * FROM mahasiswa LIMIT 20 OFFSET 40; -- Halaman 3
\`\`\`

**9. Gunakan Batch Processing untuk Insert Banyak Data**

\`\`\`java
String sql = "INSERT INTO mahasiswa (nama, nim, jurusan, ipk) VALUES (?, ?, ?, ?)";
PreparedStatement pstmt = conn.prepareStatement(sql);

for (Mahasiswa mhs : listMahasiswa) {
    pstmt.setString(1, mhs.getNama());
    pstmt.setString(2, mhs.getNim());
    pstmt.setString(3, mhs.getJurusan());
    pstmt.setDouble(4, mhs.getIpk());
    pstmt.addBatch(); // Tambah ke batch
}

pstmt.executeBatch(); // Execute semua sekaligus (lebih cepat!)
\`\`\`

**10. Backup Database Secara Berkala**

\`\`\`bash
# Backup MySQL database
mysqldump -u root -p java_belajar > backup_$(date +%Y%m%d).sql

# Restore dari backup
mysql -u root -p java_belajar < backup_20241213.sql
\`\`\`
      `},{id:"latihan-database",title:"Latihan & Project",content:`
**Latihan 1: Sistem Perpustakaan Sederhana**

Buat database dan aplikasi untuk perpustakaan dengan:

**Tabel \`buku\`:**
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- judul (VARCHAR)
- pengarang (VARCHAR)
- tahun_terbit (INT)
- stok (INT)

**Fitur:**
- CRUD buku
- Cari buku berdasarkan judul/pengarang
- Update stok buku
- Laporan: Total buku, buku dengan stok < 5

**Latihan 2: Sistem Penilaian Mahasiswa**

Buat 2 tabel yang berelasi:

**Tabel \`mahasiswa\`:** (sudah ada)

**Tabel \`nilai\`:**
- id (INT, PRIMARY KEY)
- mahasiswa_id (INT, FOREIGN KEY)
- mata_kuliah (VARCHAR)
- nilai (INT)
- semester (INT)

**Fitur:**
- CRUD nilai
- Lihat semua nilai mahasiswa (JOIN table)
- Hitung rata-rata nilai per mahasiswa
- Cari mahasiswa dengan nilai > 80

**Query JOIN:**
\`\`\`sql
SELECT m.nama, m.nim, n.mata_kuliah, n.nilai
FROM mahasiswa m
INNER JOIN nilai n ON m.id = n.mahasiswa_id
WHERE m.nim = '2024001';
\`\`\`

**Latihan 3: Mini Project - Aplikasi Kasir Sederhana**

**Tabel yang dibutuhkan:**

1. **produk** (id, nama, harga, stok)
2. **transaksi** (id, tanggal, total)
3. **detail_transaksi** (id, transaksi_id, produk_id, jumlah, subtotal)

**Fitur:**
- Kelola produk (CRUD)
- Input transaksi penjualan
- Kurangi stok otomatis saat transaksi
- Laporan penjualan harian
- Cari produk dengan stok habis

**Bonus Challenge:**
- Export data ke CSV
- Print struk transaksi
- Grafik penjualan (menggunakan library JFreeChart)
- User login dengan hak akses (admin, kasir)
      `},{id:"summary-database",title:"Rangkuman Modul Database",content:`
**🎯 Yang Sudah Dipelajari:**

**1. Konsep Database**
- Apa itu database dan kenapa penting
- MySQL sebagai RDBMS
- Tabel, kolom, baris, primary key

**2. SQL Dasar**
- CREATE DATABASE & TABLE
- INSERT - Tambah data
- SELECT - Ambil data (WHERE, ORDER BY, LIMIT)
- UPDATE - Ubah data
- DELETE - Hapus data

**3. JDBC - Java Database Connectivity**
- Setup MySQL Connector/J
- Koneksi ke database
- Statement vs PreparedStatement
- ResultSet untuk baca hasil query
- Try-with-resources untuk auto close

**4. CRUD Operations**
- Create - INSERT dengan PreparedStatement
- Read - SELECT dengan filter & search
- Update - UPDATE data yang ada
- Delete - DELETE dengan konfirmasi

**5. Design Pattern**
- Model class (Mahasiswa.java)
- DAO Pattern (Data Access Object)
- Separation of concerns

**6. GUI + Database Integration**
- JTable untuk display data
- Form input dengan validasi
- CRUD operations dari GUI
- Search & filter data
- Error handling yang baik

**7. Best Practices**
- Selalu gunakan PreparedStatement (SQL Injection protection)
- Close koneksi dengan try-with-resources
- Transaction untuk multiple operations
- Connection pooling untuk performa
- Indexing untuk query cepat
- Batch processing untuk insert banyak data

<div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
  <h4>✅ Checklist Kemampuan:</h4>
  <p>Setelah modul ini, Anda harus bisa:</p>
  <ul>
    <li>✅ Install & setup MySQL</li>
    <li>✅ Menulis query SQL dasar (CREATE, INSERT, SELECT, UPDATE, DELETE)</li>
    <li>✅ Koneksi Java ke MySQL menggunakan JDBC</li>
    <li>✅ Membuat aplikasi CRUD console</li>
    <li>✅ Membuat class DAO untuk akses database</li>
    <li>✅ Integrasi GUI Swing dengan database</li>
    <li>✅ Handle error dan validation</li>
    <li>✅ Membuat aplikasi desktop yang menyimpan data permanen</li>
  </ul>
</div>

**📚 Topik Lanjutan (Optional):**
- Stored Procedures & Functions
- Views
- Triggers
- Database Normalization
- ORM (Object-Relational Mapping) - Hibernate
- NoSQL databases (MongoDB)

<div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <h4>🚀 Langkah Selanjutnya:</h4>
  <p>Dengan menguasai Database, Anda sudah bisa membuat aplikasi yang REAL dan BERGUNA!</p>
  <ul>
    <li><strong>Modul 8:</strong> File Handling - Export/Import data, Read/Write file</li>
    <li><strong>Modul 9:</strong> Exception Handling - Handle error dengan profesional</li>
    <li><strong>Modul 10:</strong> Best Practices & Deployment - Packaging aplikasi</li>
    <li><strong>Modul 11:</strong> Project Akhir - Aplikasi CRUD lengkap production-ready</li>
  </ul>
</div>

**💡 Tips:**
Praktek adalah kunci! Coba buat minimal 2-3 aplikasi CRUD dengan domain berbeda (toko, sekolah, klinik, dll) untuk mengasah skill Anda.

**Selamat!** Anda sudah menyelesaikan salah satu modul paling penting dalam pemrograman desktop! 🎉
      `}]},Lk={title:"File Handling - Baca, Tulis & Export Data",slug:"file-handling",sections:[{id:"intro-file",title:"Pengenalan File Handling",content:`
Selamat datang di modul File Handling! 📁

**Apa itu File Handling?**

File handling adalah kemampuan aplikasi untuk **membaca dan menulis file** di sistem file komputer. Ini sangat penting untuk:

✅ **Menyimpan data** tanpa database
✅ **Export data** ke Excel/CSV
✅ **Import data** dari file external
✅ **Konfigurasi aplikasi** (settings, preferences)
✅ **Logging** - Catat aktivitas aplikasi
✅ **Backup & Restore** data

**Jenis File yang Akan Dipelajari:**

**1. Text Files (.txt)**
- File text biasa
- Mudah dibaca manusia
- Cocok untuk log, notes, konfigurasi sederhana

**2. CSV (Comma-Separated Values)**
- Format untuk data tabular
- Bisa dibuka di Excel
- Cocok untuk export/import data

**3. Properties Files (.properties)**
- Menyimpan konfigurasi key=value
- Standard untuk aplikasi Java
- Mudah di-maintain

**4. Serialization (.ser)**
- Simpan object Java langsung
- Binary format (tidak bisa dibaca manusia)
- Cocok untuk save/load state aplikasi

**5. JSON/XML (Bonus)**
- Format data yang populer
- Cross-platform
- Mudah di-parse

**Class Penting dalam Java File Handling:**

\`\`\`
java.io Package:
  ├── File           - Representasi file/folder
  ├── FileReader     - Baca file text
  ├── FileWriter     - Tulis file text
  ├── BufferedReader - Baca file efisien (per baris)
  ├── BufferedWriter - Tulis file efisien
  ├── Scanner        - Baca file dengan parsing
  └── PrintWriter    - Tulis file dengan format

java.nio Package (New IO - Lebih modern):
  └── Files          - Utility untuk file operations
\`\`\`

**Path & File:**
- Windows: \`C:\\\\Users\\\\Documents\\\\data.txt\`
- Linux/Mac: \`/home/user/documents/data.txt\`
- Relative: \`data/mahasiswa.txt\` (dari folder project)
      `},{id:"file-basics",title:"File Class - Operasi Dasar File",content:`
**File Class** adalah representasi file atau folder dalam Java. Kita bisa cek apakah file ada, buat folder, hapus file, dll.

**Operasi Dasar dengan File Class:**
      `,code:{language:"java",filename:"FileBasics.java",code:`import java.io.File;
import java.io.IOException;

public class FileBasics {
    public static void main(String[] args) {
        // 1. Buat object File
        File file = new File("data.txt");

        // 2. Cek apakah file ada
        if (file.exists()) {
            System.out.println("✅ File sudah ada");

            // Info file
            System.out.println("Nama: " + file.getName());
            System.out.println("Path: " + file.getAbsolutePath());
            System.out.println("Ukuran: " + file.length() + " bytes");
            System.out.println("Bisa dibaca: " + file.canRead());
            System.out.println("Bisa ditulis: " + file.canWrite());

        } else {
            System.out.println("❌ File belum ada");

            // Buat file baru
            try {
                if (file.createNewFile()) {
                    System.out.println("✅ File berhasil dibuat!");
                }
            } catch (IOException e) {
                System.out.println("❌ Gagal membuat file!");
                e.printStackTrace();
            }
        }

        // 3. Buat folder
        File folder = new File("data");
        if (!folder.exists()) {
            if (folder.mkdir()) {
                System.out.println("✅ Folder 'data' berhasil dibuat!");
            }
        }

        // 4. Buat file di dalam folder
        File fileInFolder = new File("data/mahasiswa.txt");
        try {
            fileInFolder.createNewFile();
            System.out.println("✅ File di folder berhasil dibuat!");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 5. List semua file di folder
        File[] files = folder.listFiles();
        if (files != null) {
            System.out.println("\\nFile di folder 'data':");
            for (File f : files) {
                System.out.println("  - " + f.getName());
            }
        }

        // 6. Hapus file (hati-hati!)
        // if (file.delete()) {
        //     System.out.println("File dihapus!");
        // }

        // 7. Rename file
        File newName = new File("data_baru.txt");
        if (file.renameTo(newName)) {
            System.out.println("✅ File berhasil direname!");
        }
    }
}`},afterCode:"\n**Method Penting File Class:**\n\n| Method | Fungsi |\n|--------|--------|\n| `exists()` | Cek file ada atau tidak |\n| `createNewFile()` | Buat file baru |\n| `mkdir()` | Buat folder (1 level) |\n| `mkdirs()` | Buat folder (multi-level) |\n| `delete()` | Hapus file/folder |\n| `renameTo()` | Rename/move file |\n| `isFile()` | Cek apakah file (bukan folder) |\n| `isDirectory()` | Cek apakah folder |\n| `length()` | Ukuran file dalam bytes |\n| `listFiles()` | List semua file di folder |\n| `getAbsolutePath()` | Path lengkap file |\n\n⚠️ **PENTING:**\n- `createNewFile()` dan `mkdir()` bisa throw **IOException**\n- Selalu cek dengan `exists()` sebelum operasi\n- Hati-hati dengan `delete()` - tidak bisa di-undo!\n      "},{id:"write-file",title:"Menulis File Text",content:`
Ada beberapa cara menulis file di Java. Mari kita pelajari dari yang sederhana sampai yang efisien!

**Cara 1: FileWriter - Sederhana**
      `,code:{language:"java",filename:"WriteFileSimple.java",code:`import java.io.FileWriter;
import java.io.IOException;

public class WriteFileSimple {
    public static void main(String[] args) {
        String fileName = "catatan.txt";
        String content = "Ini adalah baris pertama.\\n" +
                        "Ini adalah baris kedua.\\n" +
                        "Belajar Java File Handling!";

        try (FileWriter writer = new FileWriter(fileName)) {
            writer.write(content);
            System.out.println("✅ File berhasil ditulis!");

        } catch (IOException e) {
            System.out.println("❌ Gagal menulis file!");
            e.printStackTrace();
        }
    }
}`},afterCode:`
**Cara 2: BufferedWriter - Lebih Efisien**
      `,code2:{language:"java",filename:"WriteFileBuffered.java",code:`import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class WriteFileBuffered {
    public static void main(String[] args) {
        String fileName = "mahasiswa.txt";

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {

            // Tulis baris per baris
            writer.write("Daftar Mahasiswa:");
            writer.newLine(); // Baris baru
            writer.newLine();

            writer.write("1. Budi Santoso - 2024001");
            writer.newLine();

            writer.write("2. Siti Rahma - 2024002");
            writer.newLine();

            writer.write("3. Andi Wijaya - 2024003");
            writer.newLine();

            System.out.println("✅ Data mahasiswa berhasil ditulis!");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`},afterCode2:`
**Cara 3: PrintWriter - Paling Mudah (Recommended)**
      `,additionalCode:{language:"java",filename:"WriteFilePrintWriter.java",content:`import java.io.PrintWriter;
import java.io.IOException;

public class WriteFilePrintWriter {
    public static void main(String[] args) {
        String fileName = "data.txt";

        try (PrintWriter writer = new PrintWriter(fileName)) {

            // Seperti System.out.println()!
            writer.println("=== DATA MAHASISWA ===");
            writer.println();

            writer.printf("Nama: %s%n", "Budi Santoso");
            writer.printf("NIM: %s%n", "2024001");
            writer.printf("IPK: %.2f%n", 3.75);

            writer.println();
            writer.println("=== END ===");

            System.out.println("✅ File berhasil ditulis dengan PrintWriter!");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`},additionalContent:`
<h3>⚠️ Append vs Overwrite</h3>

<p>Secara default, <code>FileWriter</code> akan <strong>overwrite</strong> (timpa) file yang sudah ada.</p>

<p><strong>Untuk APPEND (tambahkan di akhir):</strong></p>

<pre><code class="language-java">// Append mode - data ditambahkan di akhir file
FileWriter writer = new FileWriter("data.txt", true); // true = append
writer.write("Baris baru di akhir file\\n");
</code></pre>

<h3>Perbandingan:</h3>

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Kelebihan</th>
      <th>Kapan Digunakan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>FileWriter</strong></td>
      <td>Paling sederhana</td>
      <td>Tulis string pendek</td>
    </tr>
    <tr>
      <td><strong>BufferedWriter</strong></td>
      <td>Lebih cepat untuk file besar</td>
      <td>Tulis banyak data</td>
    </tr>
    <tr>
      <td><strong>PrintWriter</strong></td>
      <td>Paling mudah (ada println, printf)</td>
      <td>Recommended untuk general purpose</td>
    </tr>
  </tbody>
</table>
      `},{id:"read-file",title:"Membaca File Text",content:`
**Cara 1: Scanner - Paling Mudah**
      `,code:{language:"java",filename:"ReadFileScanner.java",code:`import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFileScanner {
    public static void main(String[] args) {
        String fileName = "mahasiswa.txt";

        try (Scanner scanner = new Scanner(new File(fileName))) {

            System.out.println("=== ISI FILE ===");

            // Baca baris per baris
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                System.out.println(line);
            }

        } catch (FileNotFoundException e) {
            System.out.println("❌ File tidak ditemukan: " + fileName);
        }
    }
}`},afterCode:`
**Cara 2: BufferedReader - Lebih Efisien**
      `,code2:{language:"java",filename:"ReadFileBuffered.java",code:`import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadFileBuffered {
    public static void main(String[] args) {
        String fileName = "mahasiswa.txt";

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {

            String line;
            int lineNumber = 1;

            // Baca sampai akhir file
            while ((line = reader.readLine()) != null) {
                System.out.printf("%d: %s%n", lineNumber, line);
                lineNumber++;
            }

        } catch (IOException e) {
            System.out.println("❌ Error saat membaca file!");
            e.printStackTrace();
        }
    }
}`},afterCode2:`
**Cara 3: Files.readAllLines() - Paling Praktis (Java 7+)**
      `,additionalCode:{language:"java",filename:"ReadFileNIO.java",content:`import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;
import java.util.List;

public class ReadFileNIO {
    public static void main(String[] args) {
        Path path = Paths.get("mahasiswa.txt");

        try {
            // Baca semua baris sekaligus ke List
            List<String> lines = Files.readAllLines(path);

            System.out.println("Total baris: " + lines.size());
            System.out.println("\\n=== ISI FILE ===");

            for (String line : lines) {
                System.out.println(line);
            }

            // Atau baca semua jadi satu String
            String content = Files.readString(path); // Java 11+
            System.out.println("\\n" + content);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`},additionalContent:`
<h3>Parsing Data dari File</h3>

<p>Contoh: Baca data mahasiswa dari file dengan format: <code>NIM|Nama|IPK</code></p>
      `,additionalCode2:{language:"java",content:`import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

class Mahasiswa {
    String nim, nama;
    double ipk;

    public Mahasiswa(String nim, String nama, double ipk) {
        this.nim = nim;
        this.nama = nama;
        this.ipk = ipk;
    }

    @Override
    public String toString() {
        return String.format("%s - %s (IPK: %.2f)", nim, nama, ipk);
    }
}

public class ParseFile {
    public static void main(String[] args) {
        List<Mahasiswa> listMahasiswa = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader("data_mahasiswa.txt"))) {

            String line;
            while ((line = reader.readLine()) != null) {
                // Skip baris kosong atau komentar
                if (line.trim().isEmpty() || line.startsWith("#")) {
                    continue;
                }

                // Parse: 2024001|Budi Santoso|3.75
                String[] parts = line.split("\\\\|");

                if (parts.length == 3) {
                    String nim = parts[0].trim();
                    String nama = parts[1].trim();
                    double ipk = Double.parseDouble(parts[2].trim());

                    listMahasiswa.add(new Mahasiswa(nim, nama, ipk));
                }
            }

            // Tampilkan hasil
            System.out.println("=== DATA MAHASISWA ===");
            for (Mahasiswa mhs : listMahasiswa) {
                System.out.println(mhs);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`}},{id:"csv-handling",title:"Export & Import CSV",content:`
**CSV (Comma-Separated Values)** adalah format file yang sangat populer untuk data tabular. Bisa dibuka di Excel!

**Format CSV:**
\`\`\`csv
NIM,Nama,Jurusan,IPK
2024001,Budi Santoso,Teknik Informatika,3.75
2024002,Siti Rahma,Sistem Informasi,3.82
2024003,Andi Wijaya,Teknik Informatika,3.45
\`\`\`

**Export Data ke CSV**
      `,code:{language:"java",filename:"ExportToCSV.java",code:`import java.io.PrintWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

class Mahasiswa {
    String nim, nama, jurusan;
    double ipk;

    public Mahasiswa(String nim, String nama, String jurusan, double ipk) {
        this.nim = nim;
        this.nama = nama;
        this.jurusan = jurusan;
        this.ipk = ipk;
    }

    // Convert ke CSV format
    public String toCSV() {
        return String.format("%s,%s,%s,%.2f", nim, nama, jurusan, ipk);
    }
}

public class ExportToCSV {
    public static void main(String[] args) {
        // Data mahasiswa
        List<Mahasiswa> listMahasiswa = new ArrayList<>();
        listMahasiswa.add(new Mahasiswa("2024001", "Budi Santoso", "Teknik Informatika", 3.75));
        listMahasiswa.add(new Mahasiswa("2024002", "Siti Rahma", "Sistem Informasi", 3.82));
        listMahasiswa.add(new Mahasiswa("2024003", "Andi Wijaya", "Teknik Informatika", 3.45));

        String fileName = "data_mahasiswa.csv";

        try (PrintWriter writer = new PrintWriter(fileName)) {

            // Header CSV
            writer.println("NIM,Nama,Jurusan,IPK");

            // Data rows
            for (Mahasiswa mhs : listMahasiswa) {
                writer.println(mhs.toCSV());
            }

            System.out.println("✅ Data berhasil di-export ke " + fileName);
            System.out.println("Buka file dengan Excel untuk melihat hasilnya!");

        } catch (IOException e) {
            System.out.println("❌ Gagal export data!");
            e.printStackTrace();
        }
    }
}`},afterCode:`
**Import Data dari CSV**
      `,code2:{language:"java",filename:"ImportFromCSV.java",code:`import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ImportFromCSV {
    public static void main(String[] args) {
        String fileName = "data_mahasiswa.csv";
        List<Mahasiswa> listMahasiswa = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {

            // Skip header (baris pertama)
            String header = reader.readLine();
            System.out.println("Header: " + header);

            String line;
            int count = 0;

            while ((line = reader.readLine()) != null) {
                // Parse CSV: 2024001,Budi Santoso,Teknik Informatika,3.75
                String[] data = line.split(",");

                if (data.length == 4) {
                    String nim = data[0].trim();
                    String nama = data[1].trim();
                    String jurusan = data[2].trim();
                    double ipk = Double.parseDouble(data[3].trim());

                    Mahasiswa mhs = new Mahasiswa(nim, nama, jurusan, ipk);
                    listMahasiswa.add(mhs);
                    count++;
                }
            }

            System.out.println("\\n✅ Berhasil import " + count + " data mahasiswa!");

            // Tampilkan data
            System.out.println("\\n=== DATA MAHASISWA ===");
            for (Mahasiswa mhs : listMahasiswa) {
                System.out.printf("%s | %s | %s | %.2f%n",
                    mhs.nim, mhs.nama, mhs.jurusan, mhs.ipk);
            }

        } catch (IOException e) {
            System.out.println("❌ Gagal import data!");
            e.printStackTrace();
        } catch (NumberFormatException e) {
            System.out.println("❌ Format IPK tidak valid!");
            e.printStackTrace();
        }
    }
}`},afterCode2:`
**Handle CSV dengan Koma dalam Data**

Masalah: Kalau data ada koma, parsing jadi error.
Contoh: \`"Budi, S.Kom"\` → akan di-split jadi 2 kolom!

**Solusi:** Gunakan quotes untuk data yang ada koma:
\`\`\`csv
NIM,Nama,Jurusan,IPK
2024001,"Budi Santoso, S.Kom","Teknik Informatika",3.75
\`\`\`

**Library Recommended untuk CSV Complex:**
- **OpenCSV** - https://opencsv.sourceforge.net/
- **Apache Commons CSV** - https://commons.apache.org/proper/commons-csv/

Untuk project sederhana, split manual sudah cukup!
      `},{id:"properties-file",title:"Properties File - Konfigurasi Aplikasi",content:`
**Properties File** adalah cara standard Java untuk menyimpan konfigurasi aplikasi dalam format **key=value**.

**Format properties:**
\`\`\`properties
# Database Configuration
db.url=jdbc:mysql://localhost:3306/java_belajar
db.username=root
db.password=root123

# Application Settings
app.name=Aplikasi Mahasiswa
app.version=1.0.0
app.theme=dark
\`\`\`

**Menulis Properties File**
      `,code:{language:"java",filename:"WriteProperties.java",code:`import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

public class WriteProperties {
    public static void main(String[] args) {
        Properties prop = new Properties();

        // Set properties
        prop.setProperty("db.url", "jdbc:mysql://localhost:3306/java_belajar");
        prop.setProperty("db.username", "root");
        prop.setProperty("db.password", "root123");
        prop.setProperty("app.name", "Aplikasi Mahasiswa");
        prop.setProperty("app.version", "1.0.0");

        String fileName = "config.properties";

        try (FileOutputStream output = new FileOutputStream(fileName)) {

            // Simpan ke file dengan komentar
            prop.store(output, "Database & Application Configuration");

            System.out.println("✅ Config berhasil disimpan ke " + fileName);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`},afterCode:`
**Membaca Properties File**
      `,code2:{language:"java",filename:"ReadProperties.java",code:`import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ReadProperties {
    public static void main(String[] args) {
        Properties prop = new Properties();
        String fileName = "config.properties";

        try (FileInputStream input = new FileInputStream(fileName)) {

            // Load properties dari file
            prop.load(input);

            // Baca property
            String dbUrl = prop.getProperty("db.url");
            String dbUser = prop.getProperty("db.username");
            String dbPassword = prop.getProperty("db.password");
            String appName = prop.getProperty("app.name");
            String appVersion = prop.getProperty("app.version");

            // Tampilkan
            System.out.println("=== KONFIGURASI APLIKASI ===");
            System.out.println("Nama Aplikasi: " + appName);
            System.out.println("Versi: " + appVersion);
            System.out.println();
            System.out.println("=== DATABASE CONFIG ===");
            System.out.println("URL: " + dbUrl);
            System.out.println("Username: " + dbUser);
            System.out.println("Password: " + dbPassword);

            // Property dengan default value
            String theme = prop.getProperty("app.theme", "light"); // default: light
            System.out.println("\\nTheme: " + theme);

        } catch (IOException e) {
            System.out.println("❌ Gagal membaca config file!");
            e.printStackTrace();
        }
    }
}`},afterCode2:`
**Class ConfigManager - Best Practice**
      `,additionalCode:{language:"java",filename:"ConfigManager.java",content:`import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigManager {
    private static final String CONFIG_FILE = "app.properties";
    private static Properties properties;

    // Load config saat pertama kali dipanggil
    static {
        properties = new Properties();
        try (FileInputStream input = new FileInputStream(CONFIG_FILE)) {
            properties.load(input);
        } catch (IOException e) {
            System.out.println("Config file tidak ditemukan, menggunakan default.");
            setDefaultConfig();
        }
    }

    // Get config value
    public static String get(String key) {
        return properties.getProperty(key);
    }

    // Get dengan default value
    public static String get(String key, String defaultValue) {
        return properties.getProperty(key, defaultValue);
    }

    // Set config value
    public static void set(String key, String value) {
        properties.setProperty(key, value);
    }

    // Save config ke file
    public static void save() {
        try (FileOutputStream output = new FileOutputStream(CONFIG_FILE)) {
            properties.store(output, "Application Configuration");
            System.out.println("✅ Config berhasil disimpan!");
        } catch (IOException e) {
            System.out.println("❌ Gagal menyimpan config!");
            e.printStackTrace();
        }
    }

    // Set default config
    private static void setDefaultConfig() {
        properties.setProperty("db.url", "jdbc:mysql://localhost:3306/db");
        properties.setProperty("db.username", "root");
        properties.setProperty("db.password", "");
        properties.setProperty("app.theme", "light");
    }

    // Test
    public static void main(String[] args) {
        // Cara pakai
        String dbUrl = ConfigManager.get("db.url");
        System.out.println("DB URL: " + dbUrl);

        // Update config
        ConfigManager.set("app.theme", "dark");
        ConfigManager.save();
    }
}`}},{id:"serialization",title:"Object Serialization - Save Object ke File",content:`
**Serialization** adalah proses convert object Java menjadi byte stream yang bisa disimpan ke file atau dikirim via network.

**Kapan Digunakan:**
- Save/Load state aplikasi
- Save game progress
- Cache data object
- Kirim object via network

**Cara Kerja:**
\`\`\`
Object Java → Serialize → File .ser → Deserialize → Object Java
\`\`\`

**Contoh: Save & Load Object Mahasiswa**
      `,code:{language:"java",filename:"MahasiswaSerializable.java",code:`import java.io.*;

// Class harus implement Serializable
class Mahasiswa implements Serializable {
    // serialVersionUID untuk version control
    private static final long serialVersionUID = 1L;

    private String nim;
    private String nama;
    private String jurusan;
    private double ipk;

    public Mahasiswa(String nim, String nama, String jurusan, double ipk) {
        this.nim = nim;
        this.nama = nama;
        this.jurusan = jurusan;
        this.ipk = ipk;
    }

    @Override
    public String toString() {
        return String.format("%s - %s (%s) - IPK: %.2f", nim, nama, jurusan, ipk);
    }

    // Getters
    public String getNim() { return nim; }
    public String getNama() { return nama; }
    public String getJurusan() { return jurusan; }
    public double getIpk() { return ipk; }
}

public class SerializationExample {
    public static void main(String[] args) {
        // 1. SAVE OBJECT
        Mahasiswa mhs = new Mahasiswa("2024001", "Budi Santoso",
            "Teknik Informatika", 3.75);

        String fileName = "mahasiswa.ser";

        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream(fileName))) {

            oos.writeObject(mhs);
            System.out.println("✅ Object berhasil disimpan ke " + fileName);

        } catch (IOException e) {
            e.printStackTrace();
        }

        // 2. LOAD OBJECT
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream(fileName))) {

            Mahasiswa loaded = (Mahasiswa) ois.readObject();
            System.out.println("\\n✅ Object berhasil dimuat!");
            System.out.println("Data: " + loaded);

        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}`},afterCode:`
**Save Multiple Objects (List)**
      `,code2:{language:"java",filename:"SerializeList.java",code:`import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class SerializeList {
    public static void main(String[] args) {
        // Buat list mahasiswa
        List<Mahasiswa> listMahasiswa = new ArrayList<>();
        listMahasiswa.add(new Mahasiswa("2024001", "Budi", "TI", 3.75));
        listMahasiswa.add(new Mahasiswa("2024002", "Siti", "SI", 3.82));
        listMahasiswa.add(new Mahasiswa("2024003", "Andi", "TI", 3.45));

        String fileName = "data_mahasiswa.ser";

        // SAVE List
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream(fileName))) {

            oos.writeObject(listMahasiswa);
            System.out.println("✅ List berhasil disimpan!");

        } catch (IOException e) {
            e.printStackTrace();
        }

        // LOAD List
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream(fileName))) {

            @SuppressWarnings("unchecked")
            List<Mahasiswa> loaded = (List<Mahasiswa>) ois.readObject();

            System.out.println("\\n✅ List berhasil dimuat!");
            System.out.println("Total data: " + loaded.size());

            for (Mahasiswa mhs : loaded) {
                System.out.println("  - " + mhs);
            }

        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}`},afterCode2:`
**transient Keyword - Field yang Tidak Disimpan**

Kalau ada field yang tidak mau di-save (misal: password):
\`\`\`java
class User implements Serializable {
    private String username;
    private transient String password; // Tidak akan di-serialize!

    // ...
}
\`\`\`

**⚠️ Catatan:**
- File .ser adalah **binary**, tidak bisa dibaca manusia
- Class harus **implement Serializable**
- Kalau class berubah (tambah field), bisa error saat load (gunakan serialVersionUID)
- Untuk data yang perlu dibaca manusia, lebih baik pakai CSV/JSON
      `},{id:"file-chooser",title:"JFileChooser - Dialog Pilih File",content:`
**JFileChooser** adalah dialog GUI untuk memilih file atau folder. Seperti dialog "Open File" dan "Save File" di aplikasi pada umumnya.

**Open File Dialog**
      `,code:{language:"java",filename:"FileChooserExample.java",code:`import javax.swing.*;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class FileChooserExample extends JFrame {
    private JTextArea textArea;

    public FileChooserExample() {
        setTitle("File Chooser Demo");
        setSize(600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Text area untuk display isi file
        textArea = new JTextArea();
        textArea.setEditable(false);
        add(new JScrollPane(textArea), "Center");

        // Menu bar
        JMenuBar menuBar = new JMenuBar();
        JMenu menuFile = new JMenu("File");

        JMenuItem itemOpen = new JMenuItem("Open File");
        itemOpen.addActionListener(e -> openFile());
        menuFile.add(itemOpen);

        JMenuItem itemSave = new JMenuItem("Save File");
        itemSave.addActionListener(e -> saveFile());
        menuFile.add(itemSave);

        menuBar.add(menuFile);
        setJMenuBar(menuBar);
    }

    private void openFile() {
        JFileChooser fileChooser = new JFileChooser();

        // Set dialog title
        fileChooser.setDialogTitle("Pilih File untuk Dibuka");

        // Filter file type (optional)
        fileChooser.setFileFilter(new javax.swing.filechooser.FileNameExtensionFilter(
            "Text Files (*.txt)", "txt"));

        // Tampilkan dialog
        int result = fileChooser.showOpenDialog(this);

        if (result == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();

            try {
                // Baca isi file
                String content = Files.readString(file.toPath());
                textArea.setText(content);

                JOptionPane.showMessageDialog(this,
                    "File berhasil dibuka!\\n" + file.getName());

            } catch (IOException e) {
                JOptionPane.showMessageDialog(this,
                    "Gagal membaca file!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
    }

    private void saveFile() {
        JFileChooser fileChooser = new JFileChooser();

        // Set default filename
        fileChooser.setSelectedFile(new File("untitled.txt"));

        // Tampilkan Save dialog
        int result = fileChooser.showSaveDialog(this);

        if (result == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();

            // Cek apakah file sudah ada
            if (file.exists()) {
                int confirm = JOptionPane.showConfirmDialog(this,
                    "File sudah ada. Timpa?",
                    "Konfirmasi", JOptionPane.YES_NO_OPTION);

                if (confirm != JOptionPane.YES_OPTION) {
                    return;
                }
            }

            try {
                // Tulis isi text area ke file
                Files.writeString(file.toPath(), textArea.getText());

                JOptionPane.showMessageDialog(this,
                    "File berhasil disimpan!\\n" + file.getName());

            } catch (IOException e) {
                JOptionPane.showMessageDialog(this,
                    "Gagal menyimpan file!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new FileChooserExample().setVisible(true);
        });
    }
}`},afterCode:`
**Customize JFileChooser:**
      `,code2:{language:"java",content:`JFileChooser fileChooser = new JFileChooser();

// 1. Set direktori awal
fileChooser.setCurrentDirectory(new File(System.getProperty("user.home")));

// 2. Filter multiple extensions
FileNameExtensionFilter filter = new FileNameExtensionFilter(
    "Images (*.jpg, *.png, *.gif)", "jpg", "png", "gif");
fileChooser.setFileFilter(filter);

// 3. Pilih folder (bukan file)
fileChooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);

// 4. Multi-select files
fileChooser.setMultiSelectionEnabled(true);

int result = fileChooser.showOpenDialog(parent);
if (result == JFileChooser.APPROVE_OPTION) {
    File[] files = fileChooser.getSelectedFiles();
    for (File file : files) {
        System.out.println("File: " + file.getName());
    }
}`}},{id:"praktik-lengkap",title:"Praktik: Aplikasi CRUD dengan Export/Import",content:`
Sekarang kita buat aplikasi lengkap yang menggabungkan Database + File Handling!

**Mini Project: Aplikasi Mahasiswa dengan Export/Import CSV**

Fitur:
- CRUD mahasiswa (database)
- Export data ke CSV
- Import data dari CSV
- Backup data (serialization)
- Restore data dari backup
      `,code:{language:"java",filename:"MahasiswaExportImport.java",code:`import javax.swing.*;
import java.awt.*;
import java.io.*;
import java.util.List;

public class MahasiswaExportImport extends JFrame {
    private MahasiswaDAO dao;

    public MahasiswaExportImport() {
        dao = new MahasiswaDAO();

        setTitle("Aplikasi Mahasiswa - Export/Import");
        setSize(500, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Menu bar
        JMenuBar menuBar = new JMenuBar();

        JMenu menuFile = new JMenu("File");
        JMenuItem itemExport = new JMenuItem("Export to CSV");
        JMenuItem itemImport = new JMenuItem("Import from CSV");
        JMenuItem itemBackup = new JMenuItem("Backup Data");
        JMenuItem itemRestore = new JMenuItem("Restore Data");

        itemExport.addActionListener(e -> exportToCSV());
        itemImport.addActionListener(e -> importFromCSV());
        itemBackup.addActionListener(e -> backupData());
        itemRestore.addActionListener(e -> restoreData());

        menuFile.add(itemExport);
        menuFile.add(itemImport);
        menuFile.addSeparator();
        menuFile.add(itemBackup);
        menuFile.add(itemRestore);

        menuBar.add(menuFile);
        setJMenuBar(menuBar);

        // Content
        JLabel label = new JLabel("Gunakan menu File untuk Export/Import data",
            SwingConstants.CENTER);
        add(label, BorderLayout.CENTER);
    }

    private void exportToCSV() {
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setSelectedFile(new File("mahasiswa_export.csv"));

        if (fileChooser.showSaveDialog(this) == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();

            try (PrintWriter writer = new PrintWriter(file)) {

                // Header
                writer.println("NIM,Nama,Jurusan,IPK");

                // Data dari database
                List<Mahasiswa> list = dao.getAll();
                for (Mahasiswa mhs : list) {
                    writer.printf("%s,%s,%s,%.2f%n",
                        mhs.getNim(), mhs.getNama(),
                        mhs.getJurusan(), mhs.getIpk());
                }

                JOptionPane.showMessageDialog(this,
                    "✅ Export berhasil!\\n" +
                    "Total: " + list.size() + " data\\n" +
                    "File: " + file.getName());

            } catch (IOException e) {
                JOptionPane.showMessageDialog(this,
                    "❌ Export gagal!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
    }

    private void importFromCSV() {
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setFileFilter(new javax.swing.filechooser.FileNameExtensionFilter(
            "CSV Files", "csv"));

        if (fileChooser.showOpenDialog(this) == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();

            try (BufferedReader reader = new BufferedReader(new FileReader(file))) {

                // Skip header
                reader.readLine();

                int count = 0;
                String line;

                while ((line = reader.readLine()) != null) {
                    String[] data = line.split(",");

                    if (data.length == 4) {
                        Mahasiswa mhs = new Mahasiswa(
                            data[1].trim(), // nama
                            data[0].trim(), // nim
                            data[2].trim(), // jurusan
                            Double.parseDouble(data[3].trim()) // ipk
                        );

                        if (dao.insert(mhs)) {
                            count++;
                        }
                    }
                }

                JOptionPane.showMessageDialog(this,
                    "✅ Import berhasil!\\n" +
                    "Total: " + count + " data ditambahkan");

            } catch (IOException | NumberFormatException e) {
                JOptionPane.showMessageDialog(this,
                    "❌ Import gagal!\\nCek format CSV!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
    }

    private void backupData() {
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setSelectedFile(new File("backup_mahasiswa.ser"));

        if (fileChooser.showSaveDialog(this) == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();

            try (ObjectOutputStream oos = new ObjectOutputStream(
                    new FileOutputStream(file))) {

                List<Mahasiswa> list = dao.getAll();
                oos.writeObject(list);

                JOptionPane.showMessageDialog(this,
                    "✅ Backup berhasil!\\n" +
                    "Total: " + list.size() + " data\\n" +
                    "File: " + file.getName());

            } catch (IOException e) {
                JOptionPane.showMessageDialog(this,
                    "❌ Backup gagal!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
    }

    private void restoreData() {
        int confirm = JOptionPane.showConfirmDialog(this,
            "Restore akan menimpa data yang ada.\\nLanjutkan?",
            "Konfirmasi", JOptionPane.YES_NO_OPTION);

        if (confirm != JOptionPane.YES_OPTION) return;

        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setFileFilter(new javax.swing.filechooser.FileNameExtensionFilter(
            "Serialized Files", "ser"));

        if (fileChooser.showOpenDialog(this) == JFileChooser.APPROVE_OPTION) {
            File file = fileChooser.getSelectedFile();

            try (ObjectInputStream ois = new ObjectInputStream(
                    new FileInputStream(file))) {

                @SuppressWarnings("unchecked")
                List<Mahasiswa> list = (List<Mahasiswa>) ois.readObject();

                int count = 0;
                for (Mahasiswa mhs : list) {
                    if (dao.insert(mhs)) {
                        count++;
                    }
                }

                JOptionPane.showMessageDialog(this,
                    "✅ Restore berhasil!\\n" +
                    "Total: " + count + " data dipulihkan");

            } catch (IOException | ClassNotFoundException e) {
                JOptionPane.showMessageDialog(this,
                    "❌ Restore gagal!",
                    "Error", JOptionPane.ERROR_MESSAGE);
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new MahasiswaExportImport().setVisible(true);
        });
    }
}

// Note: Pastikan class Mahasiswa implement Serializable!
// class Mahasiswa implements Serializable { ... }`},afterCode:`
**Fitur yang Sudah Diimplementasikan:**
✅ Export data dari database ke CSV (bisa dibuka di Excel)
✅ Import data dari CSV ke database
✅ Backup semua data ke file binary (.ser)
✅ Restore data dari backup
✅ JFileChooser untuk pilih lokasi file
✅ Validasi & error handling

Aplikasi ini sudah production-ready dan sangat berguna!
      `},{id:"summary-file",title:"Rangkuman Modul File Handling",content:`
**🎯 Yang Sudah Dipelajari:**

**1. File Basics**
- File class - Operasi dasar (create, delete, rename, check exists)
- Folder operations (mkdir, list files)
- Path handling

**2. Write File**
- FileWriter - Sederhana
- BufferedWriter - Efisien
- PrintWriter - Paling mudah (recommended)
- Append vs Overwrite mode

**3. Read File**
- Scanner - Mudah untuk beginners
- BufferedReader - Efisien, baca per baris
- Files.readAllLines() - Modern & praktis (Java 7+)

**4. CSV Handling**
- Export data ke CSV (bisa dibuka Excel)
- Import data dari CSV
- Parse dengan split(",")

**5. Properties File**
- Simpan konfigurasi app (key=value)
- Properties class (load, store)
- ConfigManager pattern

**6. Object Serialization**
- Save object ke file binary (.ser)
- Serializable interface
- ObjectOutputStream & ObjectInputStream
- transient keyword

**7. GUI Integration**
- JFileChooser - Dialog pilih file
- Open & Save dialog
- File filter & multi-select

<div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4">
  <h4>✅ Checklist Kemampuan:</h4>
  <p>Setelah modul ini, Anda harus bisa:</p>
  <ul>
    <li>✅ Membaca dan menulis file text</li>
    <li>✅ Export data ke CSV</li>
    <li>✅ Import data dari CSV</li>
    <li>✅ Simpan konfigurasi aplikasi dengan Properties</li>
    <li>✅ Serialize & deserialize object</li>
    <li>✅ Gunakan JFileChooser di aplikasi GUI</li>
    <li>✅ Backup & restore data aplikasi</li>
    <li>✅ Handle IOException dengan baik</li>
  </ul>
</div>

**📚 Best Practices File Handling:**

1. **Selalu gunakan try-with-resources**
   \`\`\`java
   try (BufferedReader reader = new BufferedReader(...)) {
       // Auto close!
   }
   \`\`\`

2. **Cek file exists sebelum operasi**
   \`\`\`java
   if (file.exists()) {
       // Safe to read
   }
   \`\`\`

3. **Handle IOException**
   - Semua file operation bisa throw IOException
   - Berikan pesan error yang jelas ke user

4. **Validasi data saat import**
   - Cek format data
   - Handle NumberFormatException
   - Skip baris yang invalid

5. **Gunakan path yang portable**
   \`\`\`java
   // ❌ Jangan hardcode path
   File file = new File("C:\\\\\\\\Users\\\\\\\\...\\\\\\\\data.txt");

   // ✅ Gunakan relative path atau user.home
   File file = new File("data/mahasiswa.txt");
   String home = System.getProperty("user.home");
   \`\`\`

**Common Use Cases:**
- 📋 Export report ke Excel (CSV)
- ⚙️ Save user preferences
- 💾 Backup & restore application data
- 📝 Logging aplikasi
- 📊 Import data dari external source

<div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <h4>🚀 Langkah Selanjutnya:</h4>
  <p>Anda sudah menguasai GUI + Database + File Handling!</p>
  <p>Tinggal 3 modul lagi untuk menyelesaikan course:</p>
  <ul>
    <li><strong>Modul 9:</strong> Exception Handling & Debugging</li>
    <li><strong>Modul 10:</strong> Best Practices & Deployment</li>
    <li><strong>Modul 11:</strong> Project Akhir - Aplikasi CRUD Professional</li>
  </ul>
</div>

**💡 Project Ideas untuk Praktek:**
1. Aplikasi To-Do List dengan save/load ke file
2. Contact Manager dengan export ke CSV
3. Simple Text Editor dengan save/open file
4. Application Logger - catat semua aktivitas ke log file
5. Settings Manager - simpan preferences user

**Selamat!** File Handling adalah skill penting yang membuat aplikasi Anda lebih powerful! 🎉
      `}]},jk={sections:[{id:"what-are-exceptions",title:"Apa itu Exception?",content:`Exception adalah kejadian abnormal atau error yang terjadi saat program berjalan. Exception mengganggu alur normal program dan jika tidak ditangani dengan baik, dapat menyebabkan program crash.

Bayangkan Anda membuat aplikasi kasir. Jika user memasukkan huruf saat diminta input angka, program bisa crash. Exception handling membantu kita menangani situasi seperti ini dengan elegan.

**Mengapa Exception Handling Penting?**

1. **Mencegah Program Crash** - Program tetap berjalan meski ada error
2. **User Experience Lebih Baik** - Menampilkan pesan error yang informatif
3. **Debugging Lebih Mudah** - Kita tahu persis di mana dan kenapa error terjadi
4. **Aplikasi Lebih Robust** - Siap menghadapi situasi yang tidak terduga

**Hirarki Exception di Java:**

- Throwable (parent dari semua exception)
  - Error (serious problems, biasanya tidak kita handle)
  - Exception
    - RuntimeException (unchecked exceptions)
      - NullPointerException
      - NumberFormatException
      - ArrayIndexOutOfBoundsException
    - IOException (checked exceptions)
    - SQLException
    - FileNotFoundException`,code:{language:"java",filename:"ExceptionExample.java",content:`// Contoh program TANPA exception handling - BAHAYA!
public class TanpaExceptionHandling {
    public static void main(String[] args) {
        String input = "abc"; // Seharusnya angka

        // Program akan CRASH di baris ini!
        int angka = Integer.parseInt(input);

        // Baris ini tidak akan pernah dieksekusi
        System.out.println("Angka: " + angka);
    }
}

// Output:
// Exception in thread "main" java.lang.NumberFormatException: For input string: "abc"
//     at java.lang.Integer.parseInt(Integer.java:...)
// Program BERHENTI!`}},{id:"try-catch-basic",title:"Try-Catch: Menangkap Exception",content:`Try-catch adalah mekanisme dasar untuk menangani exception. Kita "mencoba" (try) menjalankan kode yang berpotensi error, dan "menangkap" (catch) exception jika terjadi.

**Sintaks Dasar:**

try {
    // Kode yang berpotensi error
} catch (TipeException e) {
    // Kode yang dijalankan jika exception terjadi
}

Dengan try-catch, program tidak akan crash. Exception akan ditangkap dan program bisa melanjutkan eksekusi.`,code:{language:"java",filename:"TryCatchExample.java",content:`public class TryCatchExample {
    public static void main(String[] args) {
        String input = "abc"; // Input yang salah

        try {
            // Kode yang berpotensi error
            int angka = Integer.parseInt(input);
            System.out.println("Angka: " + angka);

        } catch (NumberFormatException e) {
            // Kode ini dijalankan jika terjadi NumberFormatException
            System.out.println("Error: Input bukan angka yang valid!");
            System.out.println("Silakan masukkan angka.");
        }

        // Program TETAP BERJALAN sampai sini
        System.out.println("Program selesai dengan baik.");
    }
}

// Output:
// Error: Input bukan angka yang valid!
// Silakan masukkan angka.
// Program selesai dengan baik.`},afterCode:`<p><strong>Penjelasan:</strong></p>
<ul>
<li>Program mencoba parse "abc" menjadi integer</li>
<li>Karena "abc" bukan angka, terjadi NumberFormatException</li>
<li>Exception ditangkap oleh catch block</li>
<li>Pesan error ditampilkan ke user</li>
<li>Program melanjutkan eksekusi (tidak crash!)</li>
</ul>`},{id:"multiple-catch",title:"Multiple Catch Blocks",content:`Satu try block bisa memiliki beberapa catch block untuk menangani berbagai tipe exception yang berbeda. Ini sangat berguna karena kode yang sama bisa menghasilkan berbagai jenis exception.

**Aturan Multiple Catch:**

1. Catch yang lebih spesifik harus di atas
2. Catch yang lebih general harus di bawah
3. Hanya satu catch block yang akan dieksekusi`,code:{language:"java",filename:"MultipleCatchExample.java",content:`import javax.swing.*;

public class MultipleCatchExample {
    public static void main(String[] args) {
        try {
            // Minta input dari user
            String input = JOptionPane.showInputDialog("Masukkan angka:");

            // Bisa terjadi NumberFormatException
            int angka = Integer.parseInt(input);

            // Bisa terjadi ArithmeticException (pembagian dengan 0)
            int hasil = 100 / angka;

            System.out.println("Hasil: " + hasil);

        } catch (NumberFormatException e) {
            // Menangani input yang bukan angka
            JOptionPane.showMessageDialog(null,
                "Input harus berupa angka!",
                "Error",
                JOptionPane.ERROR_MESSAGE);

        } catch (ArithmeticException e) {
            // Menangani pembagian dengan 0
            JOptionPane.showMessageDialog(null,
                "Tidak bisa membagi dengan 0!",
                "Error",
                JOptionPane.ERROR_MESSAGE);

        } catch (NullPointerException e) {
            // User menekan Cancel
            System.out.println("Input dibatalkan oleh user");

        } catch (Exception e) {
            // Menangani semua exception lainnya (safety net)
            JOptionPane.showMessageDialog(null,
                "Terjadi error: " + e.getMessage(),
                "Error",
                JOptionPane.ERROR_MESSAGE);
        }

        System.out.println("Program selesai.");
    }
}`},afterCode:`<p><strong>Test Cases:</strong></p>
<ul>
<li><strong>Input "50"</strong> → Output: "Hasil: 2" ✅</li>
<li><strong>Input "abc"</strong> → Error: "Input harus berupa angka!" ⚠️</li>
<li><strong>Input "0"</strong> → Error: "Tidak bisa membagi dengan 0!" ⚠️</li>
<li><strong>Tekan Cancel</strong> → Output: "Input dibatalkan oleh user" ℹ️</li>
</ul>`},{id:"finally-block",title:"Finally Block: Kode yang Selalu Dijalankan",content:`Finally block adalah blok kode yang SELALU dijalankan, baik exception terjadi atau tidak. Ini sangat berguna untuk cleanup operations seperti menutup file, database connection, atau resource lainnya.

**Karakteristik Finally:**

1. Selalu dieksekusi, exception terjadi atau tidak
2. Dieksekusi bahkan jika ada return di try/catch
3. Ideal untuk cleanup dan release resources
4. Optional (boleh ada, boleh tidak)`,code:{language:"java",filename:"FinallyExample.java",content:`import java.sql.*;

public class FinallyExample {
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;

        try {
            // Koneksi ke database
            conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/toko_db",
                "root",
                ""
            );

            stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM produk");

            while (rs.next()) {
                System.out.println(rs.getString("nama_produk"));
            }

        } catch (SQLException e) {
            System.out.println("Database error: " + e.getMessage());

        } finally {
            // SELALU dijalankan untuk cleanup
            try {
                if (stmt != null) {
                    stmt.close();
                    System.out.println("Statement ditutup");
                }
                if (conn != null) {
                    conn.close();
                    System.out.println("Koneksi database ditutup");
                }
            } catch (SQLException e) {
                System.out.println("Error saat menutup koneksi: " + e.getMessage());
            }
        }

        System.out.println("Program selesai");
    }
}

// Output (jika berhasil):
// Laptop Asus
// Mouse Logitech
// Keyboard Mechanical
// Statement ditutup
// Koneksi database ditutup
// Program selesai

// Output (jika error):
// Database error: Connection refused
// Statement ditutup  (tetap dijalankan!)
// Koneksi database ditutup  (tetap dijalankan!)
// Program selesai`},afterCode:`<p><strong>Mengapa Finally Penting?</strong></p>
<ul>
<li><strong>Memory Leaks Prevention</strong> - Resource yang tidak ditutup akan makan memori</li>
<li><strong>Database Connection Limit</strong> - Koneksi yang tidak ditutup bisa habiskan slot koneksi</li>
<li><strong>File Locks</strong> - File yang tidak ditutup bisa terkunci dan tidak bisa diakses aplikasi lain</li>
</ul>

<p><strong>Try-with-resources (Java 7+):</strong><br>
Cara modern untuk auto-close resources tanpa perlu finally block manual.</p>`},{id:"common-exceptions",title:"Exception-Exception yang Sering Terjadi",content:"Berikut adalah exception yang paling sering ditemui saat membuat aplikasi Java Desktop, beserta penyebab dan cara mengatasinya.",code:{language:"java",filename:"CommonExceptions.java",content:`import javax.swing.*;
import java.io.*;
import java.sql.*;

public class CommonExceptions {

    // 1. NullPointerException - Exception paling umum!
    public static void contohNullPointer() {
        String nama = null;

        try {
            // CRASH! Tidak bisa panggil method pada object null
            int panjang = nama.length();

        } catch (NullPointerException e) {
            System.out.println("Error: Object adalah null!");
            // Solusi: selalu cek null sebelum akses
            if (nama != null) {
                System.out.println("Panjang: " + nama.length());
            }
        }
    }

    // 2. NumberFormatException - Saat parsing String ke angka
    public static void contohNumberFormat() {
        JTextField txtHarga = new JTextField();
        txtHarga.setText("12.500"); // Format Indonesia

        try {
            // Error! Titik bukan separator yang valid
            int harga = Integer.parseInt(txtHarga.getText());

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null,
                "Format harga salah! Gunakan angka tanpa titik/koma.",
                "Error Input",
                JOptionPane.ERROR_MESSAGE);

            // Solusi: clean input dulu
            String cleanInput = txtHarga.getText().replace(".", "");
            int harga = Integer.parseInt(cleanInput);
            System.out.println("Harga: " + harga);
        }
    }

    // 3. ArrayIndexOutOfBoundsException
    public static void contohArrayIndex() {
        String[] produk = {"Laptop", "Mouse", "Keyboard"};

        try {
            // Index 5 tidak ada! Array hanya punya index 0-2
            System.out.println(produk[5]);

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Index array melebihi batas!");
            System.out.println("Array hanya punya " + produk.length + " elemen");
        }
    }

    // 4. SQLException - Saat operasi database
    public static void contohSQL() {
        try {
            Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/database_salah", // Database tidak ada
                "root",
                ""
            );

        } catch (SQLException e) {
            System.out.println("Database Error:");
            System.out.println("Kode Error: " + e.getErrorCode());
            System.out.println("Pesan: " + e.getMessage());

            // Solusi: cek koneksi database
            JOptionPane.showMessageDialog(null,
                "Tidak dapat terhubung ke database!
" +
                "Pastikan MySQL sudah berjalan dan database sudah dibuat.",
                "Database Error",
                JOptionPane.ERROR_MESSAGE);
        }
    }

    // 5. FileNotFoundException - File tidak ditemukan
    public static void contohFileNotFound() {
        try {
            // File tidak ada
            FileReader file = new FileReader("data_tidak_ada.txt");

        } catch (FileNotFoundException e) {
            System.out.println("File tidak ditemukan!");

            // Solusi: buat file baru atau gunakan JFileChooser
            JFileChooser chooser = new JFileChooser();
            int result = chooser.showOpenDialog(null);

            if (result == JFileChooser.APPROVE_OPTION) {
                File selectedFile = chooser.getSelectedFile();
                System.out.println("File dipilih: " + selectedFile.getName());
            }
        }
    }

    // 6. ClassCastException - Casting yang salah
    public static void contohClassCast() {
        Object obj = "Ini String";

        try {
            // Error! String tidak bisa di-cast ke Integer
            Integer angka = (Integer) obj;

        } catch (ClassCastException e) {
            System.out.println("Error: Tipe data tidak compatible untuk casting!");

            // Solusi: gunakan instanceof untuk cek tipe
            if (obj instanceof Integer) {
                Integer angka = (Integer) obj;
            } else {
                System.out.println("Object bukan Integer, tapi " + obj.getClass().getSimpleName());
            }
        }
    }

    public static void main(String[] args) {
        System.out.println("=== Testing Common Exceptions ===
");

        contohNullPointer();
        System.out.println();

        contohNumberFormat();
        System.out.println();

        contohArrayIndex();
        System.out.println();

        contohSQL();
        System.out.println();

        contohFileNotFound();
        System.out.println();

        contohClassCast();
    }
}`},afterCode:`<p><strong>Tips Mencegah Exception:</strong></p>
<ul>
<li><strong>NullPointerException</strong>: Selalu cek null sebelum akses object</li>
<li><strong>NumberFormatException</strong>: Validasi input sebelum parsing</li>
<li><strong>ArrayIndexOutOfBoundsException</strong>: Cek panjang array sebelum akses</li>
<li><strong>SQLException</strong>: Test koneksi database di awal aplikasi</li>
<li><strong>FileNotFoundException</strong>: Cek file exists sebelum buka</li>
</ul>`},{id:"custom-exceptions",title:"Membuat Custom Exception",content:`Kadang exception bawaan Java tidak cukup spesifik untuk kebutuhan aplikasi kita. Kita bisa membuat custom exception untuk membuat kode lebih readable dan maintainable.

**Kapan Membuat Custom Exception?**

1. Business logic yang spesifik (contoh: SaldoTidakCukupException)
2. Validasi yang kompleks (contoh: EmailTidakValidException)
3. Domain-specific errors (contoh: ProdukHabisException)

Custom exception membuat kode lebih self-documenting dan mudah dipahami.`,code:{language:"java",filename:"CustomExceptionExample.java",content:`// 1. Buat Custom Exception Class
class SaldoTidakCukupException extends Exception {
    private double saldoSekarang;
    private double jumlahPenarikan;

    public SaldoTidakCukupException(double saldoSekarang, double jumlahPenarikan) {
        super("Saldo tidak cukup! Saldo: " + saldoSekarang + ", Penarikan: " + jumlahPenarikan);
        this.saldoSekarang = saldoSekarang;
        this.jumlahPenarikan = jumlahPenarikan;
    }

    public double getKekurangan() {
        return jumlahPenarikan - saldoSekarang;
    }
}

class ProdukHabisException extends Exception {
    private String namaProduk;

    public ProdukHabisException(String namaProduk) {
        super("Produk '" + namaProduk + "' sudah habis!");
        this.namaProduk = namaProduk;
    }

    public String getNamaProduk() {
        return namaProduk;
    }
}

// 2. Gunakan Custom Exception
class RekeningBank {
    private String noRekening;
    private double saldo;

    public RekeningBank(String noRekening, double saldoAwal) {
        this.noRekening = noRekening;
        this.saldo = saldoAwal;
    }

    public void tarikTunai(double jumlah) throws SaldoTidakCukupException {
        if (jumlah > saldo) {
            // Throw custom exception
            throw new SaldoTidakCukupException(saldo, jumlah);
        }

        saldo -= jumlah;
        System.out.println("Penarikan berhasil!");
        System.out.println("Saldo sekarang: Rp " + saldo);
    }

    public double getSaldo() {
        return saldo;
    }
}

class Toko {
    public void jualProduk(String namaProduk, int stok) throws ProdukHabisException {
        if (stok <= 0) {
            throw new ProdukHabisException(namaProduk);
        }

        System.out.println("Produk " + namaProduk + " berhasil dijual!");
    }
}

// 3. Main Class - Test Custom Exception
public class CustomExceptionExample {
    public static void main(String[] args) {
        // Test 1: Saldo Tidak Cukup
        RekeningBank rekening = new RekeningBank("001234", 500000);

        try {
            System.out.println("Saldo awal: Rp " + rekening.getSaldo());
            rekening.tarikTunai(750000); // Lebih dari saldo!

        } catch (SaldoTidakCukupException e) {
            System.out.println("ERROR: " + e.getMessage());
            System.out.println("Kekurangan: Rp " + e.getKekurangan());
            System.out.println("Silakan isi saldo terlebih dahulu.");
        }

        System.out.println("
" + "=".repeat(50) + "
");

        // Test 2: Produk Habis
        Toko toko = new Toko();

        try {
            toko.jualProduk("Laptop Gaming", 0); // Stok habis!

        } catch (ProdukHabisException e) {
            System.out.println("ERROR: " + e.getMessage());
            System.out.println("Produk: " + e.getNamaProduk());
            System.out.println("Silakan restok produk.");
        }
    }
}

// Output:
// Saldo awal: Rp 500000.0
// ERROR: Saldo tidak cukup! Saldo: 500000.0, Penarikan: 750000.0
// Kekurangan: Rp 250000.0
// Silakan isi saldo terlebih dahulu.
//
// ==================================================
//
// ERROR: Produk 'Laptop Gaming' sudah habis!
// Produk: Laptop Gaming
// Silakan restok produk.`},afterCode:`<p><strong>Keuntungan Custom Exception:</strong></p>
<ul>
<li><strong>Lebih Spesifik</strong>: Error message lebih jelas dan kontekstual</li>
<li><strong>Data Tambahan</strong>: Bisa menyimpan informasi tambahan (saldo, kekurangan, dll)</li>
<li><strong>Type Safety</strong>: Bisa catch exception yang spesifik</li>
<li><strong>Self-Documenting</strong>: Nama exception sudah menjelaskan masalahnya</li>
</ul>

<p><strong>Best Practice:</strong></p>
<ul>
<li>Extend <code>Exception</code> untuk checked exception (harus di-handle)</li>
<li>Extend <code>RuntimeException</code> untuk unchecked exception (optional handle)</li>
<li>Berikan constructor yang informatif</li>
<li>Tambahkan getter untuk data tambahan yang relevan</li>
</ul>`},{id:"debugging-netbeans",title:"Debugging dengan NetBeans",content:`Debugging adalah proses mencari dan memperbaiki bug dalam program. NetBeans memiliki tools debugging yang sangat powerful untuk membantu kita menemukan masalah dengan cepat.

**Tools Debugging di NetBeans:**

1. **Breakpoints** - Titik stop untuk examine program state
2. **Step Over (F8)** - Jalankan satu baris kode
3. **Step Into (F7)** - Masuk ke dalam method
4. **Step Out (Ctrl+F7)** - Keluar dari method
5. **Continue (F5)** - Lanjut ke breakpoint berikutnya
6. **Variables Window** - Lihat nilai semua variabel
7. **Call Stack** - Lihat urutan method yang dipanggil

**Cara Menggunakan Debugger:**

1. Klik di sebelah kiri nomor baris untuk set breakpoint (muncul tanda merah)
2. Klik tombol "Debug Project" (Ctrl+F5) atau Debug > Debug Main Project
3. Program akan berhenti di breakpoint
4. Gunakan F8 untuk step over, F7 untuk step into
5. Lihat Variables window untuk melihat nilai variabel
6. Gunakan F5 untuk melanjutkan eksekusi`,code:{language:"java",filename:"DebuggingExample.java",content:`public class DebuggingExample {

    public static int hitungTotal(int[] angka) {
        int total = 0;

        // Set BREAKPOINT di baris ini (klik di sebelah kiri nomor baris)
        for (int i = 0; i < angka.length; i++) {
            total += angka[i];
            // Saat debug, lihat nilai total di Variables window
            System.out.println("Iterasi " + i + ", total sekarang: " + total);
        }

        return total;
    }

    public static double hitungRataRata(int[] angka) {
        // Set BREAKPOINT di sini
        int total = hitungTotal(angka);

        // POTENTIAL BUG: Pembagian dengan 0!
        // Saat debug, cek nilai angka.length
        double rataRata = (double) total / angka.length;

        return rataRata;
    }

    public static void main(String[] args) {
        int[] nilaiUjian = {80, 75, 90, 85, 70};

        // Set BREAKPOINT di baris ini
        System.out.println("=== Debugging Example ===");

        // Step Into (F7) untuk masuk ke method hitungRataRata
        double rata = hitungRataRata(nilaiUjian);

        System.out.println("Rata-rata: " + rata);

        // Test dengan array kosong - akan error!
        int[] arrayKosong = {};

        try {
            // Set BREAKPOINT di sini untuk debug error
            double rataKosong = hitungRataRata(arrayKosong);
            System.out.println("Rata-rata array kosong: " + rataKosong);

        } catch (ArithmeticException e) {
            System.out.println("Error: Tidak bisa hitung rata-rata array kosong!");
        }
    }
}

/* LANGKAH-LANGKAH DEBUGGING:

1. Set breakpoint di baris 10 (for loop)
2. Klik Debug Project (Ctrl+F5)
3. Program akan stop di breakpoint
4. Lihat Variables window:
   - angka = {80, 75, 90, 85, 70}
   - total = 0
   - i = 0

5. Tekan F8 (Step Over) untuk jalankan satu baris
   - total sekarang = 80
   - i sekarang = 1

6. Tekan F8 lagi untuk iterasi berikutnya
   - Amati bagaimana total bertambah

7. Tekan F5 (Continue) untuk lanjut sampai breakpoint berikutnya

8. Di method hitungRataRata, cek nilai:
   - total = 400
   - angka.length = 5
   - rataRata akan = 80.0

9. Untuk debug error array kosong:
   - Set breakpoint di baris 39
   - Lihat angka.length = 0
   - Step Into ke hitungRataRata
   - Lihat pembagian dengan 0!
*/`},afterCode:`<p><strong>Tips Debugging Efektif:</strong></p>
<ol>
<li><strong>Gunakan Conditional Breakpoints</strong>: Klik kanan breakpoint → Properties → masukkan kondisi (contoh: i > 100)</li>
<li><strong>Watch Variables</strong>: Debug → New Watch → masukkan expression untuk monitor nilai spesifik</li>
<li><strong>Evaluate Expression</strong>: Saat debug, klik kanan → Evaluate Expression untuk test kode</li>
<li><strong>Step Over vs Step Into</strong>: Step Over (F8) untuk skip method detail, Step Into (F7) untuk masuk ke method</li>
<li><strong>Call Stack</strong>: Lihat window Call Stack untuk tahu urutan method yang dipanggil sampai titik sekarang</li>
</ol>

<p><strong>Shortcut Penting:</strong></p>
<ul>
<li><strong>Ctrl+F8</strong>: Toggle breakpoint</li>
<li><strong>Ctrl+F5</strong>: Debug project</li>
<li><strong>F7</strong>: Step into</li>
<li><strong>F8</strong>: Step over</li>
<li><strong>Ctrl+F7</strong>: Step out</li>
<li><strong>F5</strong>: Continue</li>
<li><strong>Shift+F5</strong>: Stop debugging</li>
</ul>`},{id:"logging",title:"Logging untuk Production",content:`Logging adalah proses mencatat aktivitas dan error dalam aplikasi. Berbeda dengan System.out.println() yang hanya untuk development, logging didesain untuk production dan memiliki level severity.

**Mengapa Perlu Logging?**

1. **Debugging Production Issues** - Bisa track error di aplikasi yang sudah di-deploy
2. **Audit Trail** - Rekam siapa melakukan apa dan kapan
3. **Performance Monitoring** - Track berapa lama operasi tertentu
4. **Security** - Detect aktivitas mencurigakan

**Log Levels (dari rendah ke tinggi):**

- **FINEST/TRACE**: Informasi sangat detail (jarang dipakai)
- **FINE/DEBUG**: Informasi untuk debugging
- **INFO**: Informasi umum (aplikasi started, user login, dll)
- **WARNING**: Situasi yang tidak normal tapi tidak fatal
- **SEVERE/ERROR**: Error yang perlu perhatian segera`,code:{language:"java",filename:"LoggingExample.java",content:`import java.util.logging.*;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;

public class LoggingExample {

    // Create Logger
    private static final Logger logger = Logger.getLogger(LoggingExample.class.getName());

    // Setup Logger di awal aplikasi
    public static void setupLogger() {
        try {
            // Buat folder logs jika belum ada
            File logDir = new File("logs");
            if (!logDir.exists()) {
                logDir.mkdir();
            }

            // File handler - simpan log ke file
            String timestamp = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
            FileHandler fileHandler = new FileHandler("logs/app_" + timestamp + ".log", true);

            // Format log yang bagus
            fileHandler.setFormatter(new SimpleFormatter() {
                @Override
                public String format(LogRecord record) {
                    return String.format(
                        "[%s] [%s] %s - %s%n",
                        new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(record.getMillis())),
                        record.getLevel(),
                        record.getSourceClassName(),
                        record.getMessage()
                    );
                }
            });

            // Add handler ke logger
            logger.addHandler(fileHandler);

            // Set level minimum yang di-log
            logger.setLevel(Level.ALL);

            // Disable output ke console (optional)
            logger.setUseParentHandlers(false);

            logger.info("Logger initialized successfully");

        } catch (IOException e) {
            System.err.println("Error setup logger: " + e.getMessage());
        }
    }

    // Contoh penggunaan di method login
    public static boolean login(String username, String password) {
        logger.info("Login attempt for user: " + username);

        try {
            // Simulasi validasi
            if (username == null || username.isEmpty()) {
                logger.warning("Login failed: Username is empty");
                return false;
            }

            if (password == null || password.length() < 6) {
                logger.warning("Login failed: Password too short for user " + username);
                return false;
            }

            // Simulasi login berhasil
            if (username.equals("admin") && password.equals("admin123")) {
                logger.info("Login successful for user: " + username);
                return true;
            }

            logger.warning("Login failed: Invalid credentials for user " + username);
            return false;

        } catch (Exception e) {
            logger.severe("Login error: " + e.getMessage());
            return false;
        }
    }

    // Contoh penggunaan di method CRUD
    public static void tambahProduk(String nama, double harga) {
        logger.info("Adding new product: " + nama + ", price: " + harga);

        try {
            // Validasi
            if (harga < 0) {
                logger.warning("Invalid price for product " + nama + ": " + harga);
                throw new IllegalArgumentException("Harga tidak boleh negatif");
            }

            // Simulasi insert ke database
            Thread.sleep(100); // Simulasi delay

            logger.info("Product added successfully: " + nama);

        } catch (IllegalArgumentException e) {
            logger.severe("Validation error: " + e.getMessage());
            throw e;

        } catch (Exception e) {
            logger.severe("Error adding product: " + e.getMessage());
            logger.severe("Stack trace: " + getStackTrace(e));
        }
    }

    // Helper method untuk get stack trace sebagai string
    private static String getStackTrace(Exception e) {
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
        e.printStackTrace(pw);
        return sw.toString();
    }

    public static void main(String[] args) {
        // Setup logger di awal aplikasi
        setupLogger();

        logger.info("=== Application Started ===");

        // Test logging di berbagai scenario
        login("admin", "admin123");
        login("user", "123"); // Password terlalu pendek
        login("", "password"); // Username kosong

        System.out.println();

        tambahProduk("Laptop", 5000000);

        try {
            tambahProduk("Mouse", -50000); // Harga negatif
        } catch (IllegalArgumentException e) {
            // Error sudah di-log
        }

        logger.info("=== Application Finished ===");

        System.out.println("
Cek file logs/app_" +
            new SimpleDateFormat("yyyy-MM-dd").format(new Date()) +
            ".log untuk melihat semua log!");
    }
}

/* ISI FILE LOG (logs/app_2025-01-15.log):

[2025-01-15 10:30:15] [INFO] LoggingExample - Logger initialized successfully
[2025-01-15 10:30:15] [INFO] LoggingExample - === Application Started ===
[2025-01-15 10:30:15] [INFO] LoggingExample - Login attempt for user: admin
[2025-01-15 10:30:15] [INFO] LoggingExample - Login successful for user: admin
[2025-01-15 10:30:15] [INFO] LoggingExample - Login attempt for user: user
[2025-01-15 10:30:15] [WARNING] LoggingExample - Login failed: Password too short for user user
[2025-01-15 10:30:15] [INFO] LoggingExample - Login attempt for user:
[2025-01-15 10:30:15] [WARNING] LoggingExample - Login failed: Username is empty
[2025-01-15 10:30:15] [INFO] LoggingExample - Adding new product: Laptop, price: 5000000.0
[2025-01-15 10:30:15] [INFO] LoggingExample - Product added successfully: Laptop
[2025-01-15 10:30:15] [INFO] LoggingExample - Adding new product: Mouse, price: -50000.0
[2025-01-15 10:30:15] [WARNING] LoggingExample - Invalid price for product Mouse: -50000.0
[2025-01-15 10:30:15] [SEVERE] LoggingExample - Validation error: Harga tidak boleh negatif
[2025-01-15 10:30:15] [INFO] LoggingExample - === Application Finished ===

*/`},afterCode:`<p><strong>Best Practices Logging:</strong></p>
<ul>
<li><strong>Jangan Log Sensitive Data</strong>: Password, credit card, data pribadi JANGAN di-log!</li>
<li><strong>Gunakan Level yang Tepat</strong>: INFO untuk normal flow, WARNING untuk anomali, SEVERE untuk error</li>
<li><strong>Log dengan Context</strong>: Sertakan informasi yang membantu debug (username, product ID, dll)</li>
<li><strong>Rotate Log Files</strong>: Gunakan RotatingFileHandler agar file log tidak membesar tanpa batas</li>
<li><strong>Performance</strong>: Jangan log di loop yang ketat, bisa slow down aplikasi</li>
</ul>

<p><strong>Alternatif Logging Framework:</strong></p>
<ul>
<li><strong>Log4j 2</strong>: Lebih powerful dan configurable</li>
<li><strong>SLF4J + Logback</strong>: Modern, fast, dan flexible</li>
<li><strong>java.util.logging</strong>: Built-in, simple, good untuk project kecil</li>
</ul>`},{id:"exception-best-practices",title:"Best Practices Exception Handling",content:"Berikut adalah best practices untuk exception handling yang akan membuat aplikasi Anda lebih robust, maintainable, dan professional.",code:{language:"java",filename:"BestPractices.java",content:`import javax.swing.*;
import java.sql.*;
import java.util.logging.*;

public class BestPractices {

    private static final Logger logger = Logger.getLogger(BestPractices.class.getName());

    // ❌ BAD: Catch exception tapi tidak berbuat apa-apa (Silent Failure)
    public static void badExample1() {
        try {
            int hasil = 10 / 0;
        } catch (ArithmeticException e) {
            // Kosong! Bug akan tersembunyi!
        }
    }

    // ✅ GOOD: Always handle or log exception
    public static void goodExample1() {
        try {
            int hasil = 10 / 0;
        } catch (ArithmeticException e) {
            logger.severe("Division by zero error: " + e.getMessage());
            JOptionPane.showMessageDialog(null,
                "Terjadi kesalahan perhitungan!",
                "Error",
                JOptionPane.ERROR_MESSAGE);
        }
    }

    // ❌ BAD: Catch Exception yang terlalu general
    public static void badExample2(String input) {
        try {
            int angka = Integer.parseInt(input);
            int hasil = 100 / angka;
            System.out.println("Hasil: " + hasil);
        } catch (Exception e) {
            // Terlalu general! Tidak tahu error apa yang terjadi
            System.out.println("Error!");
        }
    }

    // ✅ GOOD: Catch exception yang spesifik
    public static void goodExample2(String input) {
        try {
            int angka = Integer.parseInt(input);
            int hasil = 100 / angka;
            System.out.println("Hasil: " + hasil);

        } catch (NumberFormatException e) {
            logger.warning("Invalid input format: " + input);
            JOptionPane.showMessageDialog(null, "Input harus berupa angka!");

        } catch (ArithmeticException e) {
            logger.warning("Division by zero attempted");
            JOptionPane.showMessageDialog(null, "Tidak bisa membagi dengan 0!");
        }
    }

    // ❌ BAD: Throw Exception di dalam catch
    public static void badExample3() {
        try {
            // Some operation
        } catch (Exception e) {
            throw new RuntimeException(); // Informasi error hilang!
        }
    }

    // ✅ GOOD: Re-throw dengan cause
    public static void goodExample3() {
        try {
            // Some operation
        } catch (SQLException e) {
            // Preserve original exception sebagai cause
            throw new RuntimeException("Database operation failed", e);
        }
    }

    // ❌ BAD: Return di finally (berbahaya!)
    public static int badExample4() {
        try {
            return 10;
        } finally {
            return 20; // Ini yang akan di-return, sangat membingungkan!
        }
    }

    // ✅ GOOD: Jangan return di finally
    public static int goodExample4() {
        int result = 0;
        try {
            result = 10;
        } finally {
            // Cleanup saja, jangan return
            System.out.println("Cleanup done");
        }
        return result;
    }

    // ❌ BAD: Nested try-catch yang kompleks
    public static void badExample5() {
        try {
            try {
                try {
                    // Code
                } catch (Exception e1) {
                    // Handle
                }
            } catch (Exception e2) {
                // Handle
            }
        } catch (Exception e3) {
            // Handle
        }
        // Sangat susah dibaca!
    }

    // ✅ GOOD: Extract ke method terpisah
    public static void goodExample5() {
        try {
            step1();
            step2();
            step3();
        } catch (Exception e) {
            handleError(e);
        }
    }

    private static void step1() throws Exception {
        // Implementation
    }

    private static void step2() throws Exception {
        // Implementation
    }

    private static void step3() throws Exception {
        // Implementation
    }

    private static void handleError(Exception e) {
        logger.severe("Operation failed: " + e.getMessage());
        // Show user-friendly message
    }

    // ✅ BEST: Use try-with-resources (Java 7+)
    public static void tryWithResourcesExample() {
        // Auto-close resources, tidak perlu finally!
        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/db", "root", "");
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM produk")) {

            while (rs.next()) {
                System.out.println(rs.getString("nama"));
            }

        } catch (SQLException e) {
            logger.severe("Database error: " + e.getMessage());
        }
        // Connection, Statement, ResultSet auto-closed!
    }

    // ✅ GOOD: Validasi input sebelum processing (Fail Fast)
    public static void simpanProduk(String nama, double harga, int stok) {
        // Validasi di awal
        if (nama == null || nama.trim().isEmpty()) {
            throw new IllegalArgumentException("Nama produk tidak boleh kosong");
        }

        if (harga < 0) {
            throw new IllegalArgumentException("Harga tidak boleh negatif");
        }

        if (stok < 0) {
            throw new IllegalArgumentException("Stok tidak boleh negatif");
        }

        // Jika sampai sini, input pasti valid
        try {
            // Save to database
            logger.info("Product saved: " + nama);
        } catch (Exception e) {
            logger.severe("Error saving product: " + e.getMessage());
            throw new RuntimeException("Gagal menyimpan produk", e);
        }
    }

    // ✅ GOOD: User-friendly error messages
    public static void showUserFriendlyError(Exception e) {
        String userMessage;

        if (e instanceof SQLException) {
            userMessage = "Terjadi kesalahan koneksi database.
Silakan coba lagi atau hubungi administrator.";
        } else if (e instanceof FileNotFoundException) {
            userMessage = "File yang Anda cari tidak ditemukan.
Pastikan file ada dan path sudah benar.";
        } else if (e instanceof NumberFormatException) {
            userMessage = "Format input tidak valid.
Harap masukkan angka yang benar.";
        } else {
            userMessage = "Terjadi kesalahan tidak terduga.
Silakan hubungi support.";
        }

        // Log untuk developer
        logger.severe("Error: " + e.getClass().getName() + " - " + e.getMessage());

        // Show untuk user
        JOptionPane.showMessageDialog(null,
            userMessage,
            "Error",
            JOptionPane.ERROR_MESSAGE);
    }
}

/* RINGKASAN BEST PRACTICES:

1. ✅ ALWAYS handle atau log exception, jangan silent failure
2. ✅ Catch exception yang SPESIFIK, bukan Exception general
3. ✅ Preserve exception chain dengan cause
4. ✅ JANGAN return di finally block
5. ✅ Gunakan try-with-resources untuk auto-close
6. ✅ Validasi input di awal (fail fast)
7. ✅ Log untuk developer, user-friendly message untuk user
8. ✅ Extract complex try-catch ke method terpisah
9. ✅ Jangan expose technical details ke user
10. ✅ Dokumentasikan exception yang mungkin di-throw

*/`},afterCode:`<p><strong>Checklist Exception Handling yang Baik:</strong></p>
<ul>
<li>☑️ Semua exception di-handle atau di-log (no silent failures)</li>
<li>☑️ Error messages user-friendly untuk user, technical untuk log</li>
<li>☑️ Resources (database, file) selalu di-close (gunakan try-with-resources)</li>
<li>☑️ Input validation di awal method (fail fast principle)</li>
<li>☑️ Exception yang di-throw sudah didokumentasikan dengan @throws</li>
<li>☑️ Tidak ada nested try-catch yang kompleks</li>
<li>☑️ Custom exception untuk business logic yang spesifik</li>
<li>☑️ Logging dengan level yang tepat (INFO/WARNING/SEVERE)</li>
</ul>

<p><strong>Remember:</strong> Exception handling bukan hanya untuk mencegah crash, tapi juga untuk memberikan user experience yang baik dan memudahkan debugging saat ada masalah!</p>`}]},Ok={sections:[{id:"code-organization",title:"Organisasi Kode yang Baik",content:`Organisasi kode yang baik membuat aplikasi mudah di-maintain, mudah dipahami orang lain, dan mudah dikembangkan. Ini adalah fondasi dari software engineering yang professional.

**Prinsip Dasar Organisasi Kode:**

1. **Single Responsibility Principle (SRP)** - Satu class satu tanggung jawab
2. **Package Structure** - Kelompokkan class berdasarkan fungsi
3. **Naming Conventions** - Nama yang jelas dan konsisten
4. **Code Documentation** - Komentar yang bermakna
5. **Don't Repeat Yourself (DRY)** - Hindari duplikasi kode

**Struktur Package yang Recommended:**

com.namaaplikasi.
├── model/          → Class entity/POJO (Produk, User, dll)
├── dao/            → Data Access Object (database operations)
├── service/        → Business logic
├── view/           → GUI forms
├── controller/     → Controller untuk connect view dan model
├── util/           → Helper classes (Validator, Formatter, dll)
└── config/         → Configuration (DatabaseConfig, dll)`,code:{language:"java",filename:"PackageStructureExample.java",content:`// ===== 1. MODEL PACKAGE =====
package com.tokoapp.model;

public class Produk {
    private int id;
    private String nama;
    private double harga;
    private int stok;

    // Constructor
    public Produk(int id, String nama, double harga, int stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNama() { return nama; }
    public void setNama(String nama) { this.nama = nama; }

    public double getHarga() { return harga; }
    public void setHarga(double harga) { this.harga = harga; }

    public int getStok() { return stok; }
    public void setStok(int stok) { this.stok = stok; }
}

// ===== 2. DAO PACKAGE =====
package com.tokoapp.dao;

import com.tokoapp.model.Produk;
import java.sql.*;
import java.util.*;

// Interface untuk flexibility
public interface ProdukDAO {
    void tambah(Produk produk) throws SQLException;
    void update(Produk produk) throws SQLException;
    void hapus(int id) throws SQLException;
    Produk getById(int id) throws SQLException;
    List<Produk> getAll() throws SQLException;
}

// Implementation
public class ProdukDAOImpl implements ProdukDAO {
    private Connection conn;

    public ProdukDAOImpl(Connection conn) {
        this.conn = conn;
    }

    @Override
    public void tambah(Produk produk) throws SQLException {
        String sql = "INSERT INTO produk (nama, harga, stok) VALUES (?, ?, ?)";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, produk.getNama());
            ps.setDouble(2, produk.getHarga());
            ps.setInt(3, produk.getStok());
            ps.executeUpdate();
        }
    }

    @Override
    public List<Produk> getAll() throws SQLException {
        List<Produk> list = new ArrayList<>();
        String sql = "SELECT * FROM produk";

        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Produk p = new Produk(
                    rs.getInt("id"),
                    rs.getString("nama"),
                    rs.getDouble("harga"),
                    rs.getInt("stok")
                );
                list.add(p);
            }
        }

        return list;
    }

    // ... implement methods lainnya
}

// ===== 3. SERVICE PACKAGE =====
package com.tokoapp.service;

import com.tokoapp.model.Produk;
import com.tokoapp.dao.ProdukDAO;
import java.sql.SQLException;
import java.util.List;

// Business logic di sini
public class ProdukService {
    private ProdukDAO produkDAO;

    public ProdukService(ProdukDAO produkDAO) {
        this.produkDAO = produkDAO;
    }

    // Validasi sebelum tambah
    public void tambahProduk(Produk produk) throws IllegalArgumentException {
        // Business validation
        if (produk.getNama() == null || produk.getNama().trim().isEmpty()) {
            throw new IllegalArgumentException("Nama produk tidak boleh kosong");
        }

        if (produk.getHarga() < 0) {
            throw new IllegalArgumentException("Harga tidak boleh negatif");
        }

        if (produk.getStok() < 0) {
            throw new IllegalArgumentException("Stok tidak boleh negatif");
        }

        // Jika valid, simpan
        try {
            produkDAO.tambah(produk);
        } catch (SQLException e) {
            throw new RuntimeException("Gagal menyimpan produk: " + e.getMessage());
        }
    }

    public List<Produk> semuaProduk() {
        try {
            return produkDAO.getAll();
        } catch (SQLException e) {
            throw new RuntimeException("Gagal mengambil data produk: " + e.getMessage());
        }
    }

    // Business logic: cek stok tersedia
    public boolean stokTersedia(int produkId, int jumlah) {
        try {
            Produk produk = produkDAO.getById(produkId);
            return produk != null && produk.getStok() >= jumlah;
        } catch (SQLException e) {
            return false;
        }
    }
}

// ===== 4. UTIL PACKAGE =====
package com.tokoapp.util;

import java.text.NumberFormat;
import java.util.Locale;

public class FormatUtil {
    private static final NumberFormat rupiahFormat =
        NumberFormat.getCurrencyInstance(new Locale("id", "ID"));

    // Format harga ke Rupiah
    public static String formatRupiah(double harga) {
        return rupiahFormat.format(harga);
    }

    // Format angka dengan thousand separator
    public static String formatAngka(int angka) {
        return NumberFormat.getInstance(new Locale("id", "ID")).format(angka);
    }
}

public class Validator {
    // Validasi email
    public static boolean isEmailValid(String email) {
        return email != null && email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }

    // Validasi nomor HP Indonesia
    public static boolean isPhoneValid(String phone) {
        return phone != null && phone.matches("^(\\+62|62|0)[0-9]{9,12}$");
    }

    // Validasi string tidak kosong
    public static boolean isNotEmpty(String text) {
        return text != null && !text.trim().isEmpty();
    }
}

// ===== 5. CONFIG PACKAGE =====
package com.tokoapp.config;

import java.sql.*;

public class DatabaseConfig {
    private static final String URL = "jdbc:mysql://localhost:3306/toko_db";
    private static final String USER = "root";
    private static final String PASSWORD = "";

    private static Connection connection;

    // Singleton pattern
    public static Connection getConnection() throws SQLException {
        if (connection == null || connection.isClosed()) {
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
        }
        return connection;
    }

    public static void closeConnection() {
        try {
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

// ===== 6. VIEW PACKAGE - GOOD EXAMPLE =====
package com.tokoapp.view;

import com.tokoapp.model.Produk;
import com.tokoapp.service.ProdukService;
import com.tokoapp.util.*;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

public class FormProduk extends JFrame {
    // ✅ GOOD: Semua components sebagai instance variables
    private JTextField txtNama;
    private JTextField txtHarga;
    private JTextField txtStok;
    private JButton btnSimpan;
    private JTable tableProduk;

    private ProdukService produkService;

    public FormProduk(ProdukService produkService) {
        this.produkService = produkService;
        initComponents();
        loadData();
    }

    // ✅ GOOD: Pisahkan UI initialization
    private void initComponents() {
        setTitle("Data Produk");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Panel Input
        JPanel panelInput = createInputPanel();

        // Panel Table
        JPanel panelTable = createTablePanel();

        // Layout
        setLayout(new BorderLayout(10, 10));
        add(panelInput, BorderLayout.NORTH);
        add(panelTable, BorderLayout.CENTER);
    }

    // ✅ GOOD: Extract method untuk clarity
    private JPanel createInputPanel() {
        JPanel panel = new JPanel(new GridBagLayout());
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(5, 5, 5, 5);

        // Nama
        gbc.gridx = 0; gbc.gridy = 0;
        panel.add(new JLabel("Nama:"), gbc);

        gbc.gridx = 1;
        txtNama = new JTextField(20);
        panel.add(txtNama, gbc);

        // Harga
        gbc.gridx = 0; gbc.gridy = 1;
        panel.add(new JLabel("Harga:"), gbc);

        gbc.gridx = 1;
        txtHarga = new JTextField(20);
        panel.add(txtHarga, gbc);

        // Stok
        gbc.gridx = 0; gbc.gridy = 2;
        panel.add(new JLabel("Stok:"), gbc);

        gbc.gridx = 1;
        txtStok = new JTextField(20);
        panel.add(txtStok, gbc);

        // Button
        gbc.gridx = 1; gbc.gridy = 3;
        btnSimpan = new JButton("Simpan");
        btnSimpan.addActionListener(e -> simpanProduk());
        panel.add(btnSimpan, gbc);

        return panel;
    }

    private JPanel createTablePanel() {
        JPanel panel = new JPanel(new BorderLayout());

        String[] columns = {"ID", "Nama", "Harga", "Stok"};
        DefaultTableModel model = new DefaultTableModel(columns, 0);
        tableProduk = new JTable(model);

        JScrollPane scroll = new JScrollPane(tableProduk);
        panel.add(scroll, BorderLayout.CENTER);

        return panel;
    }

    // ✅ GOOD: Separate business logic dari UI
    private void simpanProduk() {
        try {
            // Validasi input
            if (!Validator.isNotEmpty(txtNama.getText())) {
                throw new IllegalArgumentException("Nama produk harus diisi!");
            }

            // Parse input
            String nama = txtNama.getText().trim();
            double harga = Double.parseDouble(txtHarga.getText());
            int stok = Integer.parseInt(txtStok.getText());

            // Buat object
            Produk produk = new Produk(0, nama, harga, stok);

            // Save via service
            produkService.tambahProduk(produk);

            // Success feedback
            JOptionPane.showMessageDialog(this,
                "Produk berhasil disimpan!",
                "Sukses",
                JOptionPane.INFORMATION_MESSAGE);

            // Refresh table dan clear form
            loadData();
            clearForm();

        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this,
                "Harga dan Stok harus berupa angka!",
                "Error",
                JOptionPane.ERROR_MESSAGE);

        } catch (IllegalArgumentException e) {
            JOptionPane.showMessageDialog(this,
                e.getMessage(),
                "Validasi Error",
                JOptionPane.WARNING_MESSAGE);

        } catch (Exception e) {
            JOptionPane.showMessageDialog(this,
                "Gagal menyimpan produk: " + e.getMessage(),
                "Error",
                JOptionPane.ERROR_MESSAGE);
        }
    }

    private void loadData() {
        DefaultTableModel model = (DefaultTableModel) tableProduk.getModel();
        model.setRowCount(0); // Clear table

        for (Produk p : produkService.semuaProduk()) {
            model.addRow(new Object[]{
                p.getId(),
                p.getNama(),
                FormatUtil.formatRupiah(p.getHarga()),
                FormatUtil.formatAngka(p.getStok())
            });
        }
    }

    private void clearForm() {
        txtNama.setText("");
        txtHarga.setText("");
        txtStok.setText("");
        txtNama.requestFocus();
    }
}`},afterCode:`<p><strong>Keuntungan Struktur yang Baik:</strong></p>
<ul>
<li><strong>Separation of Concerns</strong>: Setiap layer punya tanggung jawab yang jelas</li>
<li><strong>Reusability</strong>: Service dan DAO bisa dipakai di berbagai view</li>
<li><strong>Testability</strong>: Mudah di-test karena decoupled</li>
<li><strong>Maintainability</strong>: Mudah mencari dan modify kode</li>
<li><strong>Scalability</strong>: Mudah tambah fitur baru</li>
</ul>`},{id:"naming-conventions",title:"Naming Conventions dan Code Style",content:`Naming conventions yang konsisten membuat kode mudah dibaca dan dipahami. Di Java, ada standar yang diikuti oleh seluruh komunitas.

**Java Naming Conventions:**

1. **Class**: PascalCase (contoh: FormProduk, ProdukDAO)
2. **Method**: camelCase (contoh: tambahProduk, getAll)
3. **Variable**: camelCase (contoh: namaProduk, hargaTotal)
4. **Constant**: UPPER_SNAKE_CASE (contoh: MAX_RETRY, DEFAULT_TIMEOUT)
5. **Package**: lowercase (contoh: com.tokoapp.model)

**Nama yang Baik:**
- Descriptive (menjelaskan apa yang dilakukan)
- Not too short, not too long
- Menggunakan bahasa yang konsisten (semua Inggris atau semua Indonesia)`,code:{language:"java",filename:"NamingConventions.java",content:`// ❌ BAD NAMING
public class p {  // Terlalu pendek, tidak jelas
    private int x;  // Apa itu x?
    private String s;  // Apa itu s?

    public void m() {  // Method apa ini?
        int a = 10;  // Variable apa ini?
        // ...
    }
}

// ✅ GOOD NAMING
public class Produk {  // Jelas, PascalCase
    private int id;  // Jelas maksudnya
    private String nama;  // Descriptive
    private double harga;

    public void updateHarga(double hargaBaru) {  // Method name jelas, camelCase
        this.harga = hargaBaru;
    }

    public boolean isStokTersedia(int jumlahDiminta) {  // Boolean method dimulai dengan is/has
        return this.stok >= jumlahDiminta;
    }
}

// ❌ BAD: Inconsistent language
public class ProdukManager {
    private String nama;
    private String productName;  // Campur bahasa!
    private int jumlah;
    private int quantity;  // Tidak konsisten

    public void simpan() { }
    public void delete() { }  // Bahasa campur-campur!
}

// ✅ GOOD: Consistent language
public class ProdukManager {
    // Semua Indonesia
    private String nama;
    private int jumlah;
    private double harga;

    public void simpan() { }
    public void hapus() { }
    public void perbarui() { }
}

// atau semua Inggris
public class ProductManager {
    private String name;
    private int quantity;
    private double price;

    public void save() { }
    public void delete() { }
    public void update() { }
}

// ✅ GOOD: Constants
public class AppConfig {
    // Constants: UPPER_SNAKE_CASE
    public static final String DATABASE_URL = "jdbc:mysql://localhost:3306/toko_db";
    public static final int MAX_LOGIN_ATTEMPTS = 3;
    public static final int SESSION_TIMEOUT = 1800; // 30 minutes in seconds
    public static final double PAJAK_PPN = 0.11; // 11%
}

// ✅ GOOD: Boolean naming
public class User {
    private boolean aktif;  // atau isActive
    private boolean admin;  // atau isAdmin
    private boolean verified;

    // Boolean getter dengan prefix is/has
    public boolean isAktif() {
        return aktif;
    }

    public boolean isAdmin() {
        return admin;
    }

    public boolean hasVerified() {
        return verified;
    }
}

// ✅ GOOD: Collection naming
public class TokoManager {
    // Collection: gunakan plural
    private List<Produk> produkList;  // atau daftarProduk
    private Map<Integer, User> userMap;  // atau mapUser
    private Set<String> kategoriSet;  // atau setKategori

    // Array: gunakan array suffix atau plural
    private String[] namaKategori;
    private int[] hargaProduk;
}

// ✅ GOOD: Method naming patterns
public class ProdukService {

    // Get: mengambil data
    public Produk getProdukById(int id) { }
    public List<Produk> getAllProduk() { }

    // Set: mengubah nilai
    public void setHarga(double harga) { }

    // Is/Has: return boolean
    public boolean isProdukAktif(int id) { }
    public boolean hasStok(int id) { }

    // Add: menambah item
    public void addProduk(Produk produk) { }

    // Remove: menghapus item
    public void removeProduk(int id) { }

    // Create: membuat object baru
    public Produk createProduk(String nama, double harga) { }

    // Calculate: melakukan perhitungan
    public double calculateTotal(List<Produk> produk) { }

    // Validate: validasi data
    public boolean validateInput(String input) { }

    // Load/Save: file operations
    public void loadFromFile(String path) { }
    public void saveToFile(String path) { }
}

// ✅ GOOD: Descriptive variable names
public class KasirService {

    public double hitungTotalBelanja(List<Produk> produkDibeli, String kodeKupon) {
        // ❌ BAD
        // double t = 0;
        // for (Produk p : produkDibeli) {
        //     t += p.getHarga();
        // }

        // ✅ GOOD: Descriptive names
        double totalHarga = 0;

        for (Produk produk : produkDibeli) {
            totalHarga += produk.getHarga();
        }

        // Apply discount
        double diskon = getDiskonDariKupon(kodeKupon);
        double totalSetelahDiskon = totalHarga - (totalHarga * diskon);

        // Apply tax
        double pajak = totalSetelahDiskon * AppConfig.PAJAK_PPN;
        double totalAkhir = totalSetelahDiskon + pajak;

        return totalAkhir;
    }

    private double getDiskonDariKupon(String kodeKupon) {
        // Implementation
        return 0.1; // 10% discount
    }
}

// ✅ GOOD: Package naming
// com.namacompany.namaaplikasi.module

/*
com.tokoapp.
├── model
│   ├── Produk.java
│   ├── User.java
│   └── Transaksi.java
├── dao
│   ├── ProdukDAO.java
│   └── UserDAO.java
├── service
│   ├── ProdukService.java
│   └── UserService.java
└── view
    ├── FormProduk.java
    └── FormTransaksi.java
*/`},afterCode:`<p><strong>Tips Naming yang Baik:</strong></p>
<ul>
<li><strong>Be Consistent</strong>: Pilih satu bahasa (Indonesia/Inggris) dan stick with it</li>
<li><strong>Be Descriptive</strong>: Nama harus menjelaskan purpose-nya</li>
<li><strong>Avoid Abbreviations</strong>: Hindari singkatan yang tidak umum (prod, usr, tranx)</li>
<li><strong>Use Domain Language</strong>: Gunakan istilah yang dipakai di domain bisnis</li>
<li><strong>Follow Java Conventions</strong>: Ikuti standar yang sudah ada</li>
</ul>

<p><strong>Code Review Checklist:</strong></p>
<ul>
<li>☑️ Semua class menggunakan PascalCase?</li>
<li>☑️ Semua method dan variable menggunakan camelCase?</li>
<li>☑️ Constants menggunakan UPPER_SNAKE_CASE?</li>
<li>☑️ Boolean method dimulai dengan is/has?</li>
<li>☑️ Bahasa konsisten (tidak campur Indonesia-Inggris)?</li>
<li>☑️ Nama descriptive dan meaningful?</li>
</ul>`},{id:"version-control-git",title:"Version Control dengan Git",content:`Git adalah version control system yang wajib dikuasai programmer modern. Git membantu kita tracking perubahan kode, collaborate dengan tim, dan backup project dengan aman.

**Mengapa Perlu Git?**

1. **History Tracking** - Bisa lihat semua perubahan yang pernah dibuat
2. **Backup** - Kode tersimpan aman di cloud (GitHub/GitLab)
3. **Collaboration** - Bisa kerja bareng dengan tim tanpa conflict
4. **Branching** - Bisa develop fitur baru tanpa ganggu code yang stabil
5. **Rollback** - Bisa kembali ke versi sebelumnya jika ada masalah

**Workflow Git untuk Project Java Desktop:**

1. Init repository
2. Add .gitignore untuk exclude file yang tidak perlu
3. Commit secara berkala
4. Push ke remote (GitHub)
5. Gunakan branches untuk fitur baru`,code:{language:"bash",filename:"git-workflow.sh",content:`# 1. SETUP AWAL PROJECT

# Install Git dulu (download dari git-scm.com)

# Cek versi git
git --version

# Setup user (sekali saja di awal)
git config --global user.name "Nama Anda"
git config --global user.email "email@example.com"

# Masuk ke folder project
cd C:/Users/YourName/NetBeansProjects/TokoApp

# Initialize Git repository
git init

# Cek status
git status

# 2. CREATE .gitignore FILE

# Buat file .gitignore di root project
# Isi dengan file/folder yang TIDAK perlu di-commit

# ===== .gitignore untuk Java NetBeans =====
# Compiled class files
*.class

# Package files
*.jar
*.war
*.ear

# NetBeans specific
nbproject/private/
build/
nbbuild/
dist/
nbdist/
.nb-gradle/

# IDE files
.idea/
*.iml
.vscode/

# OS files
.DS_Store
Thumbs.db

# Log files
*.log

# Database files (jangan commit database!)
*.db
*.sqlite

# Config files dengan password (PENTING!)
config.properties
database.properties

# Temporary files
*.tmp
*.bak
*.swp
*~

# 3. FIRST COMMIT

# Add all files (yang tidak ada di .gitignore)
git add .

# Atau add file spesifik
git add src/com/tokoapp/model/Produk.java
git add src/com/tokoapp/view/FormProduk.java

# Cek apa yang akan di-commit
git status

# Commit dengan message yang jelas
git commit -m "Initial commit: Project structure and basic models"

# 4. REMOTE REPOSITORY (GitHub)

# Buat repository baru di GitHub (github.com)
# Jangan centang "Initialize with README"

# Add remote
git remote add origin https://github.com/username/toko-app.git

# Cek remote
git remote -v

# Push pertama kali
git push -u origin master

# Push berikutnya cukup:
git push

# 5. DAILY WORKFLOW

# Sebelum mulai coding, update dulu dari remote
git pull

# Lakukan perubahan pada code...
# Edit file, tambah file, dll

# Cek file apa yang berubah
git status

# Lihat detail perubahan
git diff

# Add file yang diubah
git add src/com/tokoapp/model/Produk.java
git add src/com/tokoapp/view/FormProduk.java

# Atau add semua perubahan
git add .

# Commit dengan message yang descriptive
git commit -m "Add validation to Produk form and fix price formatting"

# Push ke remote
git push

# 6. BRANCHING - Fitur Baru

# Buat branch baru untuk fitur
git checkout -b fitur-laporan

# Cek branch yang aktif
git branch

# Lakukan development di branch ini...
# Edit, add, commit seperti biasa

git add .
git commit -m "Add sales report feature"

# Push branch ke remote
git push -u origin fitur-laporan

# Setelah fitur selesai dan di-test, merge ke master

# Pindah ke master
git checkout master

# Update master
git pull

# Merge branch fitur
git merge fitur-laporan

# Push master yang sudah di-merge
git push

# Hapus branch yang sudah tidak terpakai (optional)
git branch -d fitur-laporan
git push origin --delete fitur-laporan

# 7. USEFUL COMMANDS

# Lihat history commit
git log

# Lihat history dengan grafik
git log --oneline --graph --all

# Lihat perubahan di commit tertentu
git show <commit-hash>

# Undo perubahan yang belum di-commit
git checkout -- namafile.java

# Undo commit terakhir (tapi keep changes)
git reset --soft HEAD~1

# Undo commit terakhir (discard changes) - HATI-HATI!
git reset --hard HEAD~1

# Lihat siapa yang ubah baris tertentu
git blame namafile.java

# Simpan perubahan sementara (tanpa commit)
git stash

# Apply stash
git stash pop

# 8. ROLLBACK KE COMMIT SEBELUMNYA

# Lihat history
git log --oneline

# Rollback ke commit tertentu (create new commit)
git revert <commit-hash>

# Atau reset hard ke commit tertentu (BAHAYA! Hilangkan history)
git reset --hard <commit-hash>

# 9. CONFLICT RESOLUTION

# Jika ada conflict saat merge/pull:
# 1. Git akan mark conflict di file
# 2. Buka file, cari marker <<<<<<< dan >>>>>>>
# 3. Edit manual untuk resolve conflict
# 4. Remove marker
# 5. Add dan commit

git add .
git commit -m "Resolve merge conflict in FormProduk.java"

# 10. CLONE PROJECT (untuk anggota tim lain)

# Clone repository
git clone https://github.com/username/toko-app.git

# Masuk ke folder
cd toko-app

# Buat branch untuk development
git checkout -b development

# Start coding!`},afterCode:`<p><strong>Git Commit Message Best Practices:</strong></p>
<ul>
<li><strong>Clear dan Descriptive</strong>: "Add validation to login form" bukan "update"</li>
<li><strong>Present Tense</strong>: "Add feature" bukan "Added feature"</li>
<li><strong>Capitalize First Letter</strong>: "Add feature" bukan "add feature"</li>
<li><strong>No Period at End</strong>: "Add feature" bukan "Add feature."</li>
<li><strong>Keep it Short</strong>: Max 50 karakter untuk judul</li>
</ul>

<p><strong>Kapan Harus Commit?</strong></p>
<ul>
<li>✅ Setelah menyelesaikan satu fitur kecil yang lengkap</li>
<li>✅ Setelah fix satu bug</li>
<li>✅ Sebelum refactoring besar</li>
<li>✅ Sebelum pulang kerja/belajar (end of day)</li>
<li>❌ Jangan commit kode yang error/belum selesai</li>
<li>❌ Jangan commit file besar (video, database backup)</li>
</ul>

<p><strong>PENTING:</strong> Jangan pernah commit file yang berisi password atau API keys! Gunakan environment variables atau config file yang di-ignore.</p>`},{id:"javadoc-documentation",title:"Dokumentasi dengan JavaDoc",content:`JavaDoc adalah tool bawaan Java untuk generate dokumentasi dari komentar di kode. Dokumentasi yang baik membuat kode mudah dipahami oleh programmer lain (atau diri sendiri di masa depan!).

**Kapan Perlu JavaDoc?**

1. Public class dan method (yang dipakai oleh class lain)
2. Complex algorithm atau business logic
3. API yang akan dipakai orang lain
4. Library atau framework yang Anda buat

**JavaDoc Tags yang Sering Dipakai:**

- @author - Nama pembuat
- @version - Versi
- @param - Parameter method
- @return - Return value
- @throws - Exception yang mungkin di-throw
- @see - Reference ke class/method lain
- @since - Sejak versi berapa
- @deprecated - Menandai method yang sudah tidak direkomendasikan`,code:{language:"java",filename:"JavaDocExample.java",content:`package com.tokoapp.model;

import java.util.Date;

/**
 * Class yang merepresentasikan data produk dalam sistem toko.
 * <p>
 * Class ini berisi informasi dasar produk seperti nama, harga, stok,
 * dan kategori. Digunakan sebagai model data untuk operasi CRUD produk.
 * </p>
 *
 * @author Nama Anda
 * @version 1.0
 * @since 2025-01-15
 */
public class Produk {

    /**
     * ID unik produk (auto-increment dari database)
     */
    private int id;

    /**
     * Nama produk (maksimal 100 karakter)
     */
    private String nama;

    /**
     * Harga produk dalam Rupiah
     */
    private double harga;

    /**
     * Jumlah stok yang tersedia
     */
    private int stok;

    /**
     * Kategori produk (contoh: Elektronik, Fashion, dll)
     */
    private String kategori;

    /**
     * Tanggal produk ditambahkan ke sistem
     */
    private Date tanggalDitambahkan;

    /**
     * Konstruktor untuk membuat object Produk baru.
     *
     * @param id ID unik produk
     * @param nama Nama produk (tidak boleh null atau kosong)
     * @param harga Harga produk (harus lebih dari 0)
     * @param stok Stok awal produk (tidak boleh negatif)
     * @throws IllegalArgumentException jika nama kosong atau harga/stok tidak valid
     */
    public Produk(int id, String nama, double harga, int stok) {
        if (nama == null || nama.trim().isEmpty()) {
            throw new IllegalArgumentException("Nama produk tidak boleh kosong");
        }

        if (harga <= 0) {
            throw new IllegalArgumentException("Harga harus lebih dari 0");
        }

        if (stok < 0) {
            throw new IllegalArgumentException("Stok tidak boleh negatif");
        }

        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
        this.tanggalDitambahkan = new Date();
    }

    /**
     * Mengurangi stok produk sesuai jumlah yang diminta.
     * <p>
     * Method ini akan mengurangi stok jika jumlah yang diminta tersedia.
     * Jika stok tidak cukup, akan throw exception.
     * </p>
     *
     * @param jumlah Jumlah stok yang akan dikurangi
     * @return true jika berhasil mengurangi stok
     * @throws IllegalArgumentException jika jumlah negatif atau lebih besar dari stok
     * @see #tambahStok(int)
     */
    public boolean kurangiStok(int jumlah) {
        if (jumlah < 0) {
            throw new IllegalArgumentException("Jumlah tidak boleh negatif");
        }

        if (jumlah > this.stok) {
            throw new IllegalArgumentException(
                "Stok tidak cukup. Tersedia: " + this.stok + ", Diminta: " + jumlah
            );
        }

        this.stok -= jumlah;
        return true;
    }

    /**
     * Menambah stok produk.
     *
     * @param jumlah Jumlah stok yang akan ditambahkan (harus positif)
     * @throws IllegalArgumentException jika jumlah tidak positif
     * @see #kurangiStok(int)
     */
    public void tambahStok(int jumlah) {
        if (jumlah <= 0) {
            throw new IllegalArgumentException("Jumlah harus lebih dari 0");
        }

        this.stok += jumlah;
    }

    /**
     * Cek apakah stok tersedia untuk jumlah tertentu.
     *
     * @param jumlah Jumlah yang ingin dicek
     * @return true jika stok mencukupi, false jika tidak
     */
    public boolean isStokTersedia(int jumlah) {
        return this.stok >= jumlah;
    }

    /**
     * Hitung total harga untuk jumlah tertentu.
     * <p>
     * Method ini mengalikan harga satuan dengan jumlah yang diminta.
     * Tidak mengecek ketersediaan stok.
     * </p>
     *
     * @param jumlah Jumlah produk
     * @return Total harga (harga × jumlah)
     */
    public double hitungTotalHarga(int jumlah) {
        return this.harga * jumlah;
    }

    /**
     * Apply diskon ke harga produk.
     *
     * @param persenDiskon Persentase diskon (0.0 - 1.0, contoh: 0.1 untuk 10%)
     * @return Harga setelah diskon
     * @throws IllegalArgumentException jika persenDiskon di luar range 0-1
     * @deprecated Gunakan {@link #hitungHargaSetelahDiskon(double)} sebagai gantinya.
     *             Method ini akan dihapus di versi 2.0
     */
    @Deprecated
    public double applyDiskon(double persenDiskon) {
        return hitungHargaSetelahDiskon(persenDiskon);
    }

    /**
     * Hitung harga setelah diskon.
     * <p>
     * Method ini menghitung harga akhir setelah dikurangi diskon.
     * Harga original tidak berubah.
     * </p>
     *
     * @param persenDiskon Persentase diskon (0.0 - 1.0)
     * @return Harga setelah diskon
     * @throws IllegalArgumentException jika persenDiskon < 0 atau > 1
     * @since 1.2
     */
    public double hitungHargaSetelahDiskon(double persenDiskon) {
        if (persenDiskon < 0 || persenDiskon > 1) {
            throw new IllegalArgumentException("Diskon harus antara 0 dan 1");
        }

        return this.harga - (this.harga * persenDiskon);
    }

    // Getters

    /**
     * Mendapatkan ID produk.
     *
     * @return ID produk
     */
    public int getId() {
        return id;
    }

    /**
     * Mendapatkan nama produk.
     *
     * @return Nama produk
     */
    public String getNama() {
        return nama;
    }

    /**
     * Mendapatkan harga produk.
     *
     * @return Harga produk dalam Rupiah
     */
    public double getHarga() {
        return harga;
    }

    /**
     * Mendapatkan stok produk yang tersedia.
     *
     * @return Jumlah stok
     */
    public int getStok() {
        return stok;
    }

    /**
     * Representasi string dari object Produk.
     * <p>
     * Format: "Produk{id=1, nama='Laptop', harga=5000000.0, stok=10}"
     * </p>
     *
     * @return String representation
     */
    @Override
    public String toString() {
        return "Produk{" +
                "id=" + id +
                ", nama='" + nama + ''' +
                ", harga=" + harga +
                ", stok=" + stok +
                '}';
    }
}

// ===== GENERATE JAVADOC =====

/*
Di NetBeans:
1. Klik kanan pada project
2. Pilih "Generate JavaDoc"
3. Pilih scope (Public, Protected, dll)
4. Klik "Generate"
5. JavaDoc akan di-generate di folder dist/javadoc/

Atau via command line:
javadoc -d docs -sourcepath src -subpackages com.tokoapp

Hasilnya akan berupa HTML documentation yang bisa dibuka di browser!
*/`},afterCode:`<p><strong>JavaDoc Best Practices:</strong></p>
<ul>
<li><strong>Write for Users</strong>: Jelaskan WHAT dan WHY, bukan HOW (kode sudah jelaskan HOW)</li>
<li><strong>Be Concise</strong>: Singkat tapi jelas, tidak bertele-tele</li>
<li><strong>Document Public API</strong>: Semua public class/method harus punya JavaDoc</li>
<li><strong>Update Documentation</strong>: Jika ubah kode, update JavaDoc-nya juga</li>
<li><strong>Use @param and @return</strong>: Jelaskan semua parameter dan return value</li>
<li><strong>Document Exceptions</strong>: Gunakan @throws untuk exception yang mungkin terjadi</li>
<li><strong>Add Examples</strong>: Jika complex, tambahkan contoh penggunaan di JavaDoc</li>
</ul>

<p><strong>Kapan TIDAK Perlu JavaDoc:</strong></p>
<ul>
<li>Private method yang trivial</li>
<li>Getter/Setter yang standard (kecuali ada behavior khusus)</li>
<li>Self-explanatory method (contoh: isEmpty(), toString())</li>
<li>Implementation details (gunakan // comment biasa)</li>
</ul>`},{id:"performance-optimization",title:"Optimasi Performance",content:`Performance optimization membuat aplikasi lebih cepat dan responsive. Tapi ingat prinsip: "Premature optimization is the root of all evil". Optimize hanya ketika ada masalah performance yang terukur.

**Prinsip Optimasi:**

1. **Measure First** - Jangan optimize tanpa data (gunakan profiler)
2. **Optimize Bottleneck** - Focus pada bagian yang paling lambat
3. **Test After** - Pastikan optimization benar-benar improve performance
4. **Don't Break Readability** - Code yang readable > code yang sedikit lebih cepat

**Common Performance Issues di Java Desktop:**

1. UI freezing (operation berat di EDT)
2. Memory leaks
3. Slow database queries
4. Inefficient algorithms`,code:{language:"java",filename:"PerformanceOptimization.java",content:`import javax.swing.*;
import java.awt.*;
import java.sql.*;
import java.util.*;
import java.util.List;
import javax.swing.table.DefaultTableModel;

public class PerformanceOptimization {

    // ===== 1. UI FREEZING - EVENT DISPATCH THREAD =====

    // ❌ BAD: Operasi berat di EDT (UI akan freeze!)
    public class BadFormProduk extends JFrame {
        private JButton btnLoad;
        private JTable table;

        private void loadDataBad() {
            btnLoad.addActionListener(e -> {
                // BAHAYA! Operasi database di EDT
                // UI akan freeze sampai query selesai
                try {
                    Connection conn = getConnection();
                    Statement stmt = conn.createStatement();
                    ResultSet rs = stmt.executeQuery("SELECT * FROM produk");

                    DefaultTableModel model = (DefaultTableModel) table.getModel();
                    model.setRowCount(0);

                    while (rs.next()) {
                        // Ini bisa lama jika data banyak
                        model.addRow(new Object[]{
                            rs.getInt("id"),
                            rs.getString("nama"),
                            rs.getDouble("harga")
                        });
                    }

                    // User tidak bisa klik apapun sampai selesai!

                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            });
        }
    }

    // ✅ GOOD: Operasi berat di background thread (SwingWorker)
    public class GoodFormProduk extends JFrame {
        private JButton btnLoad;
        private JTable table;
        private JProgressBar progressBar;

        private void loadDataGood() {
            btnLoad.addActionListener(e -> {
                // Disable button saat loading
                btnLoad.setEnabled(false);
                progressBar.setVisible(true);

                // Jalankan di background thread
                SwingWorker<List<Object[]>, Void> worker = new SwingWorker<>() {
                    @Override
                    protected List<Object[]> doInBackground() throws Exception {
                        // Operasi berat di sini (BUKAN di EDT)
                        List<Object[]> data = new ArrayList<>();

                        try (Connection conn = getConnection();
                             Statement stmt = conn.createStatement();
                             ResultSet rs = stmt.executeQuery("SELECT * FROM produk")) {

                            while (rs.next()) {
                                data.add(new Object[]{
                                    rs.getInt("id"),
                                    rs.getString("nama"),
                                    rs.getDouble("harga")
                                });
                            }
                        }

                        return data;
                    }

                    @Override
                    protected void done() {
                        // Update UI di EDT
                        try {
                            List<Object[]> data = get();

                            DefaultTableModel model = (DefaultTableModel) table.getModel();
                            model.setRowCount(0);

                            for (Object[] row : data) {
                                model.addRow(row);
                            }

                            JOptionPane.showMessageDialog(GoodFormProduk.this,
                                "Data berhasil dimuat!");

                        } catch (Exception ex) {
                            JOptionPane.showMessageDialog(GoodFormProduk.this,
                                "Error: " + ex.getMessage(),
                                "Error",
                                JOptionPane.ERROR_MESSAGE);

                        } finally {
                            // Re-enable button dan hide progress
                            btnLoad.setEnabled(true);
                            progressBar.setVisible(false);
                        }
                    }
                };

                worker.execute(); // Start background task
                // UI tetap responsive!
            });
        }
    }

    // ===== 2. DATABASE QUERY OPTIMIZATION =====

    // ❌ BAD: N+1 Query Problem
    public void loadProdukWithKategoriBad() throws SQLException {
        // Query 1: Get all produk
        String sql1 = "SELECT * FROM produk";
        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql1)) {

            while (rs.next()) {
                int produkId = rs.getInt("id");
                String produkNama = rs.getString("nama");

                // Query 2, 3, 4, ... N+1: Get kategori untuk setiap produk
                // SANGAT LAMBAT jika ada 1000 produk = 1001 queries!
                String sql2 = "SELECT nama FROM kategori WHERE id = " + rs.getInt("kategori_id");

                try (Statement stmt2 = conn.createStatement();
                     ResultSet rs2 = stmt2.executeQuery(sql2)) {

                    if (rs2.next()) {
                        String kategoriNama = rs2.getString("nama");
                        System.out.println(produkNama + " - " + kategoriNama);
                    }
                }
            }
        }
    }

    // ✅ GOOD: JOIN Query (hanya 1 query!)
    public void loadProdukWithKategoriGood() throws SQLException {
        // Hanya 1 query dengan JOIN!
        String sql = """
            SELECT p.id, p.nama, p.harga, k.nama as kategori_nama
            FROM produk p
            LEFT JOIN kategori k ON p.kategori_id = k.id
        """;

        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                System.out.println(
                    rs.getString("nama") + " - " + rs.getString("kategori_nama")
                );
            }
        }
        // JAUH LEBIH CEPAT! 1 query vs 1001 queries
    }

    // ✅ GOOD: Prepared Statement dengan Batch (untuk insert banyak)
    public void insertBanyakProdukGood(List<Produk> produkList) throws SQLException {
        String sql = "INSERT INTO produk (nama, harga, stok) VALUES (?, ?, ?)";

        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            conn.setAutoCommit(false); // Disable auto-commit untuk batch

            for (Produk p : produkList) {
                ps.setString(1, p.getNama());
                ps.setDouble(2, p.getHarga());
                ps.setInt(3, p.getStok());

                ps.addBatch(); // Add to batch

                // Execute every 100 records
                if (produkList.indexOf(p) % 100 == 0) {
                    ps.executeBatch();
                }
            }

            ps.executeBatch(); // Execute remaining
            conn.commit(); // Commit semua sekaligus

            // JAUH LEBIH CEPAT daripada insert satu-satu!
        }
    }

    // ===== 3. COLLECTION OPTIMIZATION =====

    // ❌ BAD: Inefficient collection choice
    public void cariProdukBad(List<Produk> produkList, int id) {
        // Linear search - O(n)
        // Jika ada 10,000 produk, worst case harus cek semua!
        for (Produk p : produkList) {
            if (p.getId() == id) {
                System.out.println("Found: " + p.getNama());
                return;
            }
        }
    }

    // ✅ GOOD: Gunakan HashMap untuk lookup cepat
    private Map<Integer, Produk> produkMap = new HashMap<>();

    public void cariProdukGood(int id) {
        // HashMap lookup - O(1)
        // Sangat cepat bahkan untuk jutaan data!
        Produk p = produkMap.get(id);

        if (p != null) {
            System.out.println("Found: " + p.getNama());
        }
    }

    // ===== 4. STRING CONCATENATION =====

    // ❌ BAD: String concatenation di loop
    public String buildReportBad(List<Produk> produkList) {
        String report = "";

        // SANGAT LAMBAT! String immutable, setiap += create object baru
        for (Produk p : produkList) {
            report += "ID: " + p.getId() + "
";
            report += "Nama: " + p.getNama() + "
";
            report += "Harga: " + p.getHarga() + "
";
            report += "---
";
        }
        // Jika 1000 produk, create 4000 object String!

        return report;
    }

    // ✅ GOOD: Gunakan StringBuilder
    public String buildReportGood(List<Produk> produkList) {
        StringBuilder sb = new StringBuilder();

        for (Produk p : produkList) {
            sb.append("ID: ").append(p.getId()).append("
");
            sb.append("Nama: ").append(p.getNama()).append("
");
            sb.append("Harga: ").append(p.getHarga()).append("
");
            sb.append("---
");
        }

        return sb.toString();
        // JAUH LEBIH CEPAT! Hanya 1 object StringBuilder
    }

    // ===== 5. LAZY LOADING =====

    // ❌ BAD: Load semua data di awal (slow startup)
    public class FormProdukBad extends JFrame {
        private List<Produk> allProduk;

        public FormProdukBad() {
            // Load 10,000 produk di constructor!
            // Aplikasi lama banget baru muncul
            try {
                allProduk = loadAllProduk(); // 10,000 records!
            } catch (SQLException e) {
                e.printStackTrace();
            }

            initComponents();
        }
    }

    // ✅ GOOD: Lazy loading (load on demand)
    public class FormProdukGood extends JFrame {
        private List<Produk> produkList = null;

        public FormProdukGood() {
            // Constructor cepat, tidak load data
            initComponents();
        }

        private void loadDataOnDemand() {
            // Load data hanya saat user butuh
            if (produkList == null) {
                try {
                    produkList = loadAllProduk();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }

        // Atau gunakan pagination untuk data banyak
        private List<Produk> loadProdukPagination(int page, int pageSize) throws SQLException {
            int offset = (page - 1) * pageSize;

            String sql = "SELECT * FROM produk LIMIT ? OFFSET ?";

            try (Connection conn = getConnection();
                 PreparedStatement ps = conn.prepareStatement(sql)) {

                ps.setInt(1, pageSize);
                ps.setInt(2, offset);

                // Return hanya 20 records per page
                // Jauh lebih cepat daripada load 10,000 sekaligus!

                ResultSet rs = ps.executeQuery();
                List<Produk> list = new ArrayList<>();

                while (rs.next()) {
                    // ... create Produk object
                }

                return list;
            }
        }
    }

    // ===== 6. MEMORY LEAKS - LISTENER =====

    // ❌ BAD: Memory leak karena listener tidak di-remove
    public class DialogProduk extends JDialog {
        private JButton btnSave;

        public DialogProduk(JFrame parent) {
            super(parent);

            btnSave.addActionListener(e -> {
                // Save logic
            });

            // BAHAYA! Dialog di-close tapi listener masih ada
            // Object tidak bisa di-garbage collect = memory leak!
        }
    }

    // ✅ GOOD: Remove listener saat tidak dipakai
    public class DialogProdukGood extends JDialog {
        private JButton btnSave;

        public DialogProdukGood(JFrame parent) {
            super(parent);

            // Gunakan method reference untuk bisa remove later
            btnSave.addActionListener(this::handleSave);

            // Cleanup saat dialog closing
            addWindowListener(new java.awt.event.WindowAdapter() {
                @Override
                public void windowClosing(java.awt.event.WindowEvent e) {
                    cleanup();
                }
            });
        }

        private void handleSave(java.awt.event.ActionEvent e) {
            // Save logic
        }

        private void cleanup() {
            // Remove listener untuk prevent memory leak
            for (var listener : btnSave.getActionListeners()) {
                btnSave.removeActionListener(listener);
            }
        }
    }

    // Helper method
    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/toko_db", "root", ""
        );
    }

    private List<Produk> loadAllProduk() throws SQLException {
        return new ArrayList<>();
    }

    // Dummy Produk class
    static class Produk {
        private int id;
        private String nama;
        private double harga;
        private int stok;

        public int getId() { return id; }
        public String getNama() { return nama; }
        public double getHarga() { return harga; }
        public int getStok() { return stok; }
    }
}

/* SUMMARY OPTIMIZATION TIPS:

1. ✅ Gunakan SwingWorker untuk operasi berat (database, file I/O)
2. ✅ Optimize database query (gunakan JOIN, PreparedStatement, Batch)
3. ✅ Pilih collection yang tepat (HashMap untuk lookup, ArrayList untuk iteration)
4. ✅ Gunakan StringBuilder untuk string concatenation di loop
5. ✅ Lazy loading - load data on demand, bukan di awal
6. ✅ Pagination untuk data banyak
7. ✅ Remove listener untuk prevent memory leaks
8. ✅ Close resource dengan try-with-resources

REMEMBER: Measure first, optimize second!
*/`},afterCode:`<p><strong>Performance Monitoring Tools:</strong></p>
<ul>
<li><strong>NetBeans Profiler</strong>: Profile → Profile Main Project → CPU/Memory analysis</li>
<li><strong>VisualVM</strong>: Monitor heap usage, threads, dan CPU</li>
<li><strong>System.currentTimeMillis()</strong>: Measure execution time sederhana</li>
</ul>

<p><strong>Performance Checklist:</strong></p>
<ul>
<li>☑️ Operasi berat (database, file I/O) dijalankan di background thread?</li>
<li>☑️ Database query sudah optimal (gunakan JOIN, tidak ada N+1 query)?</li>
<li>☑️ Gunakan StringBuilder untuk concatenation di loop?</li>
<li>☑️ Data banyak di-load pakai pagination?</li>
<li>☑️ Listener di-remove saat tidak dipakai?</li>
<li>☑️ Resource (Connection, Stream) di-close dengan try-with-resources?</li>
</ul>`},{id:"packaging-deployment",title:"Packaging dan Deployment",content:`Setelah aplikasi selesai, langkah terakhir adalah packaging dan deployment agar user bisa menggunakan aplikasi tanpa perlu install NetBeans atau Java development tools.

**Langkah Deployment:**

1. **Clean and Build** - Generate JAR file
2. **Include Dependencies** - Pastikan semua library ikut ter-package
3. **Database Setup** - Buat script untuk create database dan tables
4. **User Documentation** - Buat panduan instalasi dan penggunaan
5. **Installer (Optional)** - Buat installer untuk Windows/Mac/Linux

**Persyaratan untuk User:**

- Java Runtime Environment (JRE) harus terinstall
- MySQL Server (jika aplikasi pakai database)
- Koneksi internet (jika aplikasi perlu online)`,code:{language:"java",filename:"DeploymentGuide.java",content:`/* ===== STEP 1: CLEAN AND BUILD =====

Di NetBeans:
1. Klik kanan pada project
2. Pilih "Clean and Build"
3. JAR file akan ter-generate di folder dist/

Atau via command line:
cd C:/Users/YourName/NetBeansProjects/TokoApp
ant clean
ant jar

Output: dist/TokoApp.jar

*/

// ===== STEP 2: INCLUDE DEPENDENCIES =====

/*
Jika aplikasi menggunakan external libraries (MySQL Connector, dll),
library harus ikut di-package atau di-copy ke folder yang sama.

Option 1: Fat JAR (semua library di-merge ke 1 JAR)
- Klik kanan project → Properties
- Build → Packaging
- Centang "Copy Dependent Libraries"
- Build ulang

Option 2: Lib Folder
- Copy folder dist/lib/ bersamaan dengan dist/TokoApp.jar
- Struktur:
  TokoApp/
  ├── TokoApp.jar
  └── lib/
      ├── mysql-connector-java-8.0.30.jar
      └── library-lain.jar
*/

// ===== STEP 3: CONFIG FILE =====

/**
 * Buat config file agar user bisa ubah database setting tanpa recompile.
 * File: config.properties (di folder yang sama dengan JAR)
 */
public class AppConfig {
    private static Properties prop = new Properties();
    private static final String CONFIG_FILE = "config.properties";

    // Load config saat aplikasi start
    static {
        try (FileInputStream fis = new FileInputStream(CONFIG_FILE)) {
            prop.load(fis);
        } catch (IOException e) {
            // Jika file tidak ada, create default
            createDefaultConfig();
        }
    }

    private static void createDefaultConfig() {
        prop.setProperty("db.host", "localhost");
        prop.setProperty("db.port", "3306");
        prop.setProperty("db.name", "toko_db");
        prop.setProperty("db.user", "root");
        prop.setProperty("db.password", "");

        // Save to file
        try (FileOutputStream fos = new FileOutputStream(CONFIG_FILE)) {
            prop.store(fos, "Toko App Configuration");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String getDbUrl() {
        return String.format("jdbc:mysql://%s:%s/%s",
            prop.getProperty("db.host"),
            prop.getProperty("db.port"),
            prop.getProperty("db.name")
        );
    }

    public static String getDbUser() {
        return prop.getProperty("db.user");
    }

    public static String getDbPassword() {
        return prop.getProperty("db.password");
    }
}

// Gunakan di DatabaseConfig
public class DatabaseConfig {
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(
            AppConfig.getDbUrl(),
            AppConfig.getDbUser(),
            AppConfig.getDbPassword()
        );
    }
}

// ===== STEP 4: DATABASE SETUP SCRIPT =====

/*
Buat file SQL untuk setup database di komputer user.
File: database_setup.sql
*/

/*
-- Database Setup Script untuk Toko App
-- Author: Nama Anda
-- Date: 2025-01-15

-- 1. Create Database
CREATE DATABASE IF NOT EXISTS toko_db;
USE toko_db;

-- 2. Create Tables
CREATE TABLE IF NOT EXISTS kategori (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(50) NOT NULL,
    deskripsi TEXT
);

CREATE TABLE IF NOT EXISTS produk (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(100) NOT NULL,
    harga DOUBLE NOT NULL,
    stok INT NOT NULL DEFAULT 0,
    kategori_id INT,
    tanggal_ditambahkan DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (kategori_id) REFERENCES kategori(id)
);

CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    nama_lengkap VARCHAR(100),
    level ENUM('admin', 'kasir') DEFAULT 'kasir',
    aktif BOOLEAN DEFAULT TRUE,
    tanggal_dibuat DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS transaksi (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tanggal DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_id INT,
    total DOUBLE NOT NULL,
    bayar DOUBLE NOT NULL,
    kembalian DOUBLE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS transaksi_detail (
    id INT PRIMARY KEY AUTO_INCREMENT,
    transaksi_id INT,
    produk_id INT,
    jumlah INT NOT NULL,
    harga DOUBLE NOT NULL,
    subtotal DOUBLE NOT NULL,
    FOREIGN KEY (transaksi_id) REFERENCES transaksi(id),
    FOREIGN KEY (produk_id) REFERENCES produk(id)
);

-- 3. Insert Sample Data
INSERT INTO kategori (nama, deskripsi) VALUES
('Elektronik', 'Produk elektronik'),
('Fashion', 'Pakaian dan aksesoris'),
('Makanan', 'Makanan dan minuman');

INSERT INTO produk (nama, harga, stok, kategori_id) VALUES
('Laptop Asus', 5000000, 10, 1),
('Mouse Logitech', 150000, 50, 1),
('Keyboard Mechanical', 750000, 25, 1),
('Kaos Polos', 50000, 100, 2),
('Celana Jeans', 200000, 30, 2);

-- Default user: admin/admin123
INSERT INTO user (username, password, nama_lengkap, level) VALUES
('admin', 'admin123', 'Administrator', 'admin'),
('kasir', 'kasir123', 'Kasir 1', 'kasir');

-- 4. Create Indexes untuk Performance
CREATE INDEX idx_produk_nama ON produk(nama);
CREATE INDEX idx_transaksi_tanggal ON transaksi(tanggal);

-- DONE! Database siap digunakan.
*/

// ===== STEP 5: FIRST RUN CHECK =====

/**
 * Cek apakah database sudah ada, jika belum guide user untuk setup.
 */
public class FirstRunChecker {

    public static void checkDatabase() {
        try {
            Connection conn = DatabaseConfig.getConnection();

            // Cek apakah table produk ada
            DatabaseMetaData meta = conn.getMetaData();
            ResultSet rs = meta.getTables(null, null, "produk", null);

            if (!rs.next()) {
                // Table tidak ada, berarti first run
                showDatabaseSetupDialog();
            }

            rs.close();
            conn.close();

        } catch (SQLException e) {
            // Tidak bisa connect ke database
            showDatabaseSetupDialog();
        }
    }

    private static void showDatabaseSetupDialog() {
        String message = """
            Database belum tersetup!

            Langkah-langkah setup:
            1. Pastikan MySQL Server sudah berjalan
            2. Buka phpMyAdmin atau MySQL Workbench
            3. Import file 'database_setup.sql'
            4. Edit file 'config.properties' jika perlu (host, username, password)
            5. Restart aplikasi ini

            Apakah Anda ingin membuka panduan setup?
            """;

        int result = JOptionPane.showConfirmDialog(
            null,
            message,
            "Database Setup Required",
            JOptionPane.YES_NO_OPTION,
            JOptionPane.WARNING_MESSAGE
        );

        if (result == JOptionPane.YES_OPTION) {
            // Buka file README.txt atau URL dokumentasi
            try {
                Desktop.getDesktop().open(new File("README.txt"));
            } catch (IOException e) {
                JOptionPane.showMessageDialog(null,
                    "Silakan baca file README.txt untuk panduan setup.");
            }
        }

        System.exit(0); // Exit aplikasi
    }
}

// Main class - entry point aplikasi
public class Main {
    public static void main(String[] args) {
        // Set Look and Feel
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            e.printStackTrace();
        }

        // First run check
        FirstRunChecker.checkDatabase();

        // Show splash screen (optional)
        SplashScreen splash = new SplashScreen();
        splash.setVisible(true);

        // Simulate loading
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        splash.dispose();

        // Show login form
        SwingUtilities.invokeLater(() -> {
            FormLogin login = new FormLogin();
            login.setVisible(true);
        });
    }
}

// ===== STEP 6: AUTO-UPDATE (Advanced) =====

/**
 * Cek versi aplikasi dan notifikasi jika ada update baru.
 */
public class UpdateChecker {
    private static final String CURRENT_VERSION = "1.0.0";
    private static final String UPDATE_URL = "https://yoursite.com/tokoapp/version.txt";

    public static void checkForUpdates() {
        SwingWorker<String, Void> worker = new SwingWorker<>() {
            @Override
            protected String doInBackground() throws Exception {
                // Fetch latest version from server
                URL url = new URL(UPDATE_URL);
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();

                try (BufferedReader reader = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()))) {

                    return reader.readLine(); // "1.0.1"
                }
            }

            @Override
            protected void done() {
                try {
                    String latestVersion = get();

                    if (!CURRENT_VERSION.equals(latestVersion)) {
                        int result = JOptionPane.showConfirmDialog(null,
                            "Update tersedia: v" + latestVersion + "
" +
                            "Versi Anda: v" + CURRENT_VERSION + "

" +
                            "Download update sekarang?",
                            "Update Available",
                            JOptionPane.YES_NO_OPTION);

                        if (result == JOptionPane.YES_OPTION) {
                            Desktop.getDesktop().browse(
                                new URI("https://yoursite.com/tokoapp/download")
                            );
                        }
                    }

                } catch (Exception e) {
                    // Gagal cek update, no problem
                }
            }
        };

        worker.execute();
    }
}`},afterCode:`<p><strong>File yang Harus Di-distribute:</strong></p>
<ul>
<li>✅ <strong>TokoApp.jar</strong> - Aplikasi utama</li>
<li>✅ <strong>lib/</strong> - Folder berisi library dependencies</li>
<li>✅ <strong>config.properties</strong> - File konfigurasi (atau akan auto-generate)</li>
<li>✅ <strong>database_setup.sql</strong> - Script untuk setup database</li>
<li>✅ <strong>README.txt</strong> - Panduan instalasi dan penggunaan</li>
<li>✅ <strong>CHANGELOG.txt</strong> - Log perubahan versi</li>
</ul>

<p><strong>README.txt Template:</strong></p>
<pre>
===========================================
 TOKO APP - Aplikasi Kasir Desktop
 Version 1.0.0
===========================================

PERSYARATAN SISTEM:
- Windows 7/8/10/11 (atau Mac/Linux)
- Java Runtime Environment (JRE) 8 atau lebih baru
- MySQL Server 5.7 atau lebih baru
- Minimal RAM 2GB
- Minimal HDD 100MB

CARA INSTALASI:
1. Install JRE dari https://java.com/download
2. Install MySQL dari https://dev.mysql.com/downloads/mysql
3. Extract file TokoApp.zip
4. Import database_setup.sql ke MySQL
5. Edit config.properties (jika perlu)
6. Double-click TokoApp.jar untuk menjalankan

USER DEFAULT:
Username: admin
Password: admin123

TROUBLESHOOTING:
- Jika aplikasi tidak jalan, pastikan Java sudah terinstall
- Jika error database, cek MySQL sudah berjalan
- Jika error koneksi, cek config.properties

KONTAK SUPPORT:
Email: support@tokoapp.com
Phone: +62 xxx xxxx xxxx

(C) 2025 TokoApp. All rights reserved.
</pre>`},{id:"final-checklist",title:"Final Checklist Sebelum Deploy",content:"Sebelum men-deploy aplikasi ke production, pastikan semua checklist ini sudah terpenuhi untuk menghindari masalah di kemudian hari.",code:{language:"java",filename:"FinalChecklist.java",content:`/**
 * FINAL CHECKLIST SEBELUM DEPLOY
 *
 * Centang semua item di bawah sebelum release aplikasi!
 */

// ===== 1. CODE QUALITY =====

/* ☑ Code sudah clean dan readable?
   - Naming conventions konsisten
   - Tidak ada dead code (kode yang tidak terpakai)
   - Tidak ada komentar TODO yang belum selesai
   - Indentation konsisten
*/

// ❌ BAD: Dead code masih ada
public class ProdukService {
    public void tambahProduk(Produk p) {
        // TODO: Add validation <- Masih ada TODO!

        // Old implementation (tidak dipakai lagi)
        // if (p.getHarga() < 0) {
        //     throw new Exception();
        // }

        dao.save(p);
    }
}

// ✅ GOOD: Clean code
public class ProdukService {
    public void tambahProduk(Produk p) {
        // Validation complete
        if (p.getNama() == null || p.getNama().isEmpty()) {
            throw new IllegalArgumentException("Nama tidak boleh kosong");
        }

        if (p.getHarga() < 0) {
            throw new IllegalArgumentException("Harga tidak boleh negatif");
        }

        dao.save(p);
    }
}

// ===== 2. ERROR HANDLING =====

/* ☑ Semua exception di-handle dengan baik?
   - Tidak ada try-catch kosong
   - Error message user-friendly
   - Exception di-log untuk debugging
*/

// ❌ BAD: Silent failure
try {
    saveToDatabase();
} catch (Exception e) {
    // Kosong! Bug tersembunyi!
}

// ✅ GOOD: Proper error handling
try {
    saveToDatabase();
} catch (SQLException e) {
    logger.severe("Database error: " + e.getMessage());
    JOptionPane.showMessageDialog(null,
        "Gagal menyimpan data. Silakan coba lagi.",
        "Error",
        JOptionPane.ERROR_MESSAGE);
}

// ===== 3. SECURITY =====

/* ☑ Security checklist:
   - Password tidak di-hardcode di kode
   - Password di-hash sebelum disimpan
   - SQL Injection prevention (gunakan PreparedStatement)
   - Input validation
   - File path validation (prevent directory traversal)
*/

// ❌ BAD: Password hardcoded
public class DatabaseConfig {
    private static final String PASSWORD = "MySecretPass123"; // BAHAYA!
}

// ✅ GOOD: Password dari config file
public class DatabaseConfig {
    private static String password = AppConfig.getDbPassword();
}

// ❌ BAD: SQL Injection vulnerable
public void login(String username, String password) {
    String sql = "SELECT * FROM user WHERE username = '" + username +
                 "' AND password = '" + password + "'";
    // BAHAYA! Bisa di-inject: username = "admin' OR '1'='1"
}

// ✅ GOOD: Prepared Statement
public void login(String username, String password) {
    String sql = "SELECT * FROM user WHERE username = ? AND password = ?";

    try (PreparedStatement ps = conn.prepareStatement(sql)) {
        ps.setString(1, username);
        ps.setString(2, hashPassword(password)); // Hash password!

        ResultSet rs = ps.executeQuery();
        // Safe from SQL injection
    }
}

// ✅ GOOD: Hash password
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;

public class SecurityUtil {
    public static String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(password.getBytes(StandardCharsets.UTF_8));

            // Convert byte array to hex string
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }

            return hexString.toString();

        } catch (Exception e) {
            throw new RuntimeException("Error hashing password", e);
        }
    }
}

// ===== 4. RESOURCE MANAGEMENT =====

/* ☑ Resource management checklist:
   - Semua Connection di-close
   - Semua Stream di-close
   - Gunakan try-with-resources
   - Tidak ada memory leaks
*/

// ❌ BAD: Connection tidak di-close (memory leak!)
public void getData() throws SQLException {
    Connection conn = DriverManager.getConnection(...);
    Statement stmt = conn.createStatement();
    ResultSet rs = stmt.executeQuery("SELECT * FROM produk");

    // Process data...

    // LUPA CLOSE! Memory leak!
}

// ✅ GOOD: Try-with-resources
public void getData() throws SQLException {
    try (Connection conn = DriverManager.getConnection(...);
         Statement stmt = conn.createStatement();
         ResultSet rs = stmt.executeQuery("SELECT * FROM produk")) {

        // Process data...

    } // Auto-close semua resource!
}

// ===== 5. CONFIGURATION =====

/* ☑ Configuration checklist:
   - Database credentials dari config file, bukan hardcode
   - Config file di-ignore dari Git (.gitignore)
   - Ada config.properties.example sebagai template
*/

// config.properties.example
/*
# Database Configuration
db.host=localhost
db.port=3306
db.name=toko_db
db.user=root
db.password=

# Application Settings
app.title=Toko App
app.version=1.0.0
app.debug=false
*/

// ===== 6. TESTING =====

/* ☑ Testing checklist:
   - Test semua fitur utama
   - Test error handling (input salah, database error, dll)
   - Test di environment yang bersih (seperti komputer user)
   - Test dengan data yang banyak (performance)
   - Test semua user roles (admin, kasir, dll)
*/

public class TestingChecklist {
    public static void main(String[] args) {
        System.out.println("=== TESTING CHECKLIST ===
");

        // Test 1: Login
        System.out.println("☑ Test login dengan user valid");
        System.out.println("☑ Test login dengan user invalid");
        System.out.println("☑ Test login dengan password salah");
        System.out.println("☑ Test login dengan field kosong
");

        // Test 2: CRUD Produk
        System.out.println("☑ Test tambah produk");
        System.out.println("☑ Test tambah produk dengan data invalid");
        System.out.println("☑ Test edit produk");
        System.out.println("☑ Test hapus produk");
        System.out.println("☑ Test cari produk
");

        // Test 3: Transaksi
        System.out.println("☑ Test buat transaksi normal");
        System.out.println("☑ Test buat transaksi dengan stok habis");
        System.out.println("☑ Test buat transaksi dengan bayar kurang");
        System.out.println("☑ Test print struk
");

        // Test 4: Database Error
        System.out.println("☑ Test aplikasi saat database down");
        System.out.println("☑ Test aplikasi saat koneksi lambat");
        System.out.println("☑ Test aplikasi dengan data 1000+ records
");

        // Test 5: UI/UX
        System.out.println("☑ Test semua button berfungsi");
        System.out.println("☑ Test keyboard shortcuts (Tab, Enter, Esc)");
        System.out.println("☑ Test window resizing");
        System.out.println("☑ Test dark mode (jika ada)
");
    }
}

// ===== 7. DOCUMENTATION =====

/* ☑ Documentation checklist:
   - README.txt lengkap
   - JavaDoc untuk public API
   - User manual (jika perlu)
   - Database schema documentation
   - CHANGELOG.txt
*/

// CHANGELOG.txt
/*
===========================================
 CHANGELOG
===========================================

Version 1.0.0 (2025-01-15)
--------------------------
Initial Release

Features:
✨ Login system dengan role (admin, kasir)
✨ CRUD Produk
✨ CRUD Kategori
✨ Transaksi penjualan
✨ Laporan penjualan harian/bulanan
✨ Print struk
✨ Export laporan ke PDF/Excel

Bug Fixes:
🐛 N/A (initial release)

Known Issues:
⚠️ Print struk belum support semua jenis printer
⚠️ Export Excel butuh Microsoft Office terinstall

---

Version 1.0.1 (planned)
-----------------------
Planned Features:
- Barcode scanner support
- Dashboard dengan chart
- Backup/restore database
- Multi-branch support
*/

// ===== 8. PERFORMANCE =====

/* ☑ Performance checklist:
   - Aplikasi start dalam < 5 detik
   - UI tidak freeze saat operasi berat
   - Database query optimal (tidak ada N+1 query)
   - Memory usage reasonable (< 200MB untuk aplikasi kecil)
*/

// ===== 9. VERSION CONTROL =====

/* ☑ Git checklist:
   - Semua changes sudah di-commit
   - Tidak ada uncommitted changes
   - Tag versi sudah dibuat (git tag v1.0.0)
   - Push ke remote repository
*/

// Terminal:
// git status  (pastikan clean)
// git tag v1.0.0
// git push origin v1.0.0

// ===== 10. DEPLOYMENT PACKAGE =====

/* ☑ Package checklist:
   - JAR file ter-generate dengan benar
   - Semua dependencies included
   - database_setup.sql included
   - README.txt included
   - config.properties.example included
   - Semua file di-zip dengan rapi
*/

/*
TokoApp-v1.0.0.zip
├── TokoApp.jar
├── lib/
│   └── mysql-connector-java-8.0.30.jar
├── database_setup.sql
├── config.properties.example
├── README.txt
├── CHANGELOG.txt
└── LICENSE.txt
*/

// ===== FINAL CHECK =====
public class FinalDeploymentCheck {
    public static void main(String[] args) {
        System.out.println("===========================================");
        System.out.println(" FINAL DEPLOYMENT CHECKLIST");
        System.out.println("===========================================
");

        System.out.println("☑ 1. Code quality - Clean, readable, no dead code");
        System.out.println("☑ 2. Error handling - All exceptions handled properly");
        System.out.println("☑ 3. Security - No hardcoded passwords, SQL injection safe");
        System.out.println("☑ 4. Resource management - All resources closed properly");
        System.out.println("☑ 5. Configuration - Config from file, not hardcoded");
        System.out.println("☑ 6. Testing - All features tested thoroughly");
        System.out.println("☑ 7. Documentation - README, JavaDoc, user manual complete");
        System.out.println("☑ 8. Performance - App fast, UI responsive");
        System.out.println("☑ 9. Version control - All changes committed, tagged");
        System.out.println("☑ 10. Deployment package - All files included
");

        System.out.println("===========================================");
        System.out.println(" ✅ READY TO DEPLOY!");
        System.out.println("===========================================");
    }
}

/* SELAMAT! Aplikasi siap di-deploy ke production! 🎉 */`},afterCode:`<p><strong>Post-Deployment Tasks:</strong></p>
<ul>
<li>📝 Monitor error reports dari user</li>
<li>📊 Collect feedback untuk improvement</li>
<li>🐛 Fix bugs yang ditemukan segera</li>
<li>🔄 Plan untuk versi berikutnya</li>
<li>📚 Update dokumentasi jika ada perubahan</li>
<li>🎓 Provide training untuk user (jika perlu)</li>
</ul>

<p><strong>Version Numbering (Semantic Versioning):</strong></p>
<ul>
<li><strong>v1.0.0</strong> - MAJOR.MINOR.PATCH</li>
<li><strong>MAJOR</strong>: Breaking changes, incompatible dengan versi sebelumnya</li>
<li><strong>MINOR</strong>: New features, backward-compatible</li>
<li><strong>PATCH</strong>: Bug fixes, backward-compatible</li>
</ul>

<p><strong>Contoh:</strong></p>
<ul>
<li>v1.0.0 → Initial release</li>
<li>v1.0.1 → Bug fix</li>
<li>v1.1.0 → Tambah fitur barcode scanner</li>
<li>v2.0.0 → Redesign UI total (breaking changes)</li>
</ul>`}]},Nk={sections:[{id:"project-overview",title:"Overview Project Akhir",content:`Selamat! Anda sudah sampai di modul terakhir. Sekarang saatnya membuat project nyata untuk mengaplikasikan semua yang sudah dipelajari dari Modul 1 sampai 10.

**Project: Aplikasi Kasir Toko (Point of Sale)**

Kita akan membuat aplikasi kasir lengkap dengan fitur-fitur professional yang siap digunakan di toko nyata.

**Fitur-Fitur Aplikasi:**

1. **Login System** - Multi-user dengan role (Admin & Kasir)
2. **Dashboard** - Ringkasan penjualan hari ini
3. **Master Data Produk** - CRUD produk dengan kategori
4. **Transaksi Penjualan** - Kasir untuk proses jual beli
5. **Laporan** - Laporan penjualan harian/bulanan
6. **Manajemen User** - CRUD user (khusus admin)

**Teknologi yang Digunakan:**

- Java Swing untuk GUI
- MySQL untuk database
- JDBC untuk koneksi database
- Pattern: DAO (Data Access Object)
- MVC-like architecture

**Estimasi Waktu:** 8-12 jam untuk implementasi lengkap

**Struktur Database:**

- Table: user, kategori, produk, transaksi, transaksi_detail

Mari kita mulai step by step!`,code:{language:"sql",filename:"database_kasir.sql",content:`-- =============================================
-- DATABASE SCHEMA: Aplikasi Kasir Toko
-- =============================================

CREATE DATABASE IF NOT EXISTS kasir_toko;
USE kasir_toko;

-- 1. Table User (untuk login)
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    nama_lengkap VARCHAR(100) NOT NULL,
    level ENUM('admin', 'kasir') DEFAULT 'kasir',
    aktif BOOLEAN DEFAULT TRUE,
    tanggal_dibuat DATETIME DEFAULT CURRENT_TIMESTAMP,
    terakhir_login DATETIME NULL
);

-- 2. Table Kategori
CREATE TABLE kategori (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(50) UNIQUE NOT NULL,
    deskripsi TEXT,
    aktif BOOLEAN DEFAULT TRUE
);

-- 3. Table Produk
CREATE TABLE produk (
    id INT PRIMARY KEY AUTO_INCREMENT,
    kode VARCHAR(20) UNIQUE NOT NULL,
    nama VARCHAR(100) NOT NULL,
    kategori_id INT,
    harga DOUBLE NOT NULL,
    stok INT NOT NULL DEFAULT 0,
    stok_minimum INT DEFAULT 5,
    aktif BOOLEAN DEFAULT TRUE,
    tanggal_ditambahkan DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (kategori_id) REFERENCES kategori(id)
);

-- 4. Table Transaksi (header)
CREATE TABLE transaksi (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nomor_transaksi VARCHAR(20) UNIQUE NOT NULL,
    tanggal DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    subtotal DOUBLE NOT NULL,
    diskon DOUBLE DEFAULT 0,
    pajak DOUBLE DEFAULT 0,
    total DOUBLE NOT NULL,
    bayar DOUBLE NOT NULL,
    kembalian DOUBLE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- 5. Table Transaksi Detail (items)
CREATE TABLE transaksi_detail (
    id INT PRIMARY KEY AUTO_INCREMENT,
    transaksi_id INT NOT NULL,
    produk_id INT NOT NULL,
    nama_produk VARCHAR(100) NOT NULL,
    harga DOUBLE NOT NULL,
    jumlah INT NOT NULL,
    subtotal DOUBLE NOT NULL,
    FOREIGN KEY (transaksi_id) REFERENCES transaksi(id) ON DELETE CASCADE,
    FOREIGN KEY (produk_id) REFERENCES produk(id)
);

-- =============================================
-- INDEXES untuk Performance
-- =============================================

CREATE INDEX idx_produk_kode ON produk(kode);
CREATE INDEX idx_produk_nama ON produk(nama);
CREATE INDEX idx_transaksi_tanggal ON transaksi(tanggal);
CREATE INDEX idx_transaksi_nomor ON transaksi(nomor_transaksi);

-- =============================================
-- SAMPLE DATA
-- =============================================

-- Users (password: 123456 untuk semua)
INSERT INTO user (username, password, nama_lengkap, level) VALUES
('admin', 'e10adc3949ba59abbe56e057f20f883e', 'Administrator', 'admin'),
('kasir1', 'e10adc3949ba59abbe56e057f20f883e', 'Kasir Satu', 'kasir'),
('kasir2', 'e10adc3949ba59abbe56e057f20f883e', 'Kasir Dua', 'kasir');

-- Kategori
INSERT INTO kategori (nama, deskripsi) VALUES
('Elektronik', 'Produk elektronik dan gadget'),
('Fashion', 'Pakaian dan aksesoris'),
('Makanan', 'Makanan dan minuman'),
('Alat Tulis', 'Perlengkapan kantor dan sekolah'),
('Kesehatan', 'Produk kesehatan dan kecantikan');

-- Produk Sample
INSERT INTO produk (kode, nama, kategori_id, harga, stok, stok_minimum) VALUES
('ELK001', 'Mouse Wireless Logitech', 1, 125000, 50, 10),
('ELK002', 'Keyboard Mechanical', 1, 450000, 25, 5),
('ELK003', 'Headset Gaming', 1, 350000, 30, 10),
('ELK004', 'USB Flashdisk 32GB', 1, 85000, 100, 20),
('ELK005', 'Webcam HD 720p', 1, 275000, 15, 5),

('FSH001', 'Kaos Polos Hitam', 2, 45000, 100, 20),
('FSH002', 'Celana Jeans', 2, 185000, 50, 10),
('FSH003', 'Jaket Hoodie', 2, 225000, 40, 10),
('FSH004', 'Sepatu Sneakers', 2, 350000, 30, 5),
('FSH005', 'Tas Ransel', 2, 175000, 45, 10),

('MKN001', 'Kopi Arabica 100g', 3, 35000, 200, 50),
('MKN002', 'Teh Hijau Premium', 3, 25000, 150, 30),
('MKN003', 'Coklat Batangan', 3, 15000, 300, 50),
('MKN004', 'Biskuit Kaleng', 3, 45000, 100, 20),
('MKN005', 'Mie Instan Premium', 3, 8000, 500, 100),

('ATK001', 'Pulpen Gel 0.5mm', 4, 5000, 500, 100),
('ATK002', 'Buku Tulis 58 Lembar', 4, 7500, 300, 50),
('ATK003', 'Pensil 2B', 4, 3000, 400, 80),
('ATK004', 'Penghapus Putih', 4, 2500, 600, 100),
('ATK005', 'Spidol Permanent', 4, 12000, 200, 40),

('KSH001', 'Masker Wajah 50pcs', 5, 65000, 100, 20),
('KSH002', 'Hand Sanitizer 500ml', 5, 35000, 150, 30),
('KSH003', 'Vitamin C 1000mg', 5, 85000, 80, 15),
('KSH004', 'Sabun Mandi Cair', 5, 25000, 120, 25),
('KSH005', 'Shampoo Anti Ketombe', 5, 42000, 90, 20);

-- =============================================
-- VIEWS untuk Reporting
-- =============================================

-- View: Produk dengan Kategori
CREATE VIEW v_produk_lengkap AS
SELECT
    p.id,
    p.kode,
    p.nama,
    k.nama as kategori,
    p.harga,
    p.stok,
    p.stok_minimum,
    CASE
        WHEN p.stok <= p.stok_minimum THEN 'Stok Menipis'
        WHEN p.stok = 0 THEN 'Habis'
        ELSE 'Aman'
    END as status_stok,
    p.aktif
FROM produk p
LEFT JOIN kategori k ON p.kategori_id = k.id;

-- View: Transaksi Hari Ini
CREATE VIEW v_transaksi_hari_ini AS
SELECT
    t.id,
    t.nomor_transaksi,
    t.tanggal,
    u.nama_lengkap as kasir,
    t.total,
    COUNT(td.id) as jumlah_item
FROM transaksi t
JOIN user u ON t.user_id = u.id
LEFT JOIN transaksi_detail td ON t.id = td.transaksi_id
WHERE DATE(t.tanggal) = CURDATE()
GROUP BY t.id;

-- View: Laporan Penjualan per Produk
CREATE VIEW v_laporan_produk AS
SELECT
    p.kode,
    p.nama,
    k.nama as kategori,
    SUM(td.jumlah) as total_terjual,
    SUM(td.subtotal) as total_pendapatan
FROM transaksi_detail td
JOIN produk p ON td.produk_id = p.id
LEFT JOIN kategori k ON p.kategori_id = k.id
GROUP BY p.id;

-- =============================================
-- STORED PROCEDURES
-- =============================================

DELIMITER $$

-- Procedure: Generate Nomor Transaksi
CREATE PROCEDURE generate_nomor_transaksi(OUT nomor VARCHAR(20))
BEGIN
    DECLARE last_number INT;
    DECLARE today_prefix VARCHAR(10);

    SET today_prefix = DATE_FORMAT(NOW(), 'TRX%Y%m%d');

    SELECT IFNULL(MAX(CAST(SUBSTRING(nomor_transaksi, 12) AS UNSIGNED)), 0) + 1
    INTO last_number
    FROM transaksi
    WHERE nomor_transaksi LIKE CONCAT(today_prefix, '%');

    SET nomor = CONCAT(today_prefix, LPAD(last_number, 4, '0'));
END$$

-- Procedure: Get Dashboard Stats
CREATE PROCEDURE get_dashboard_stats(
    OUT total_penjualan_hari_ini DOUBLE,
    OUT jumlah_transaksi_hari_ini INT,
    OUT produk_terlaris VARCHAR(100),
    OUT stok_menipis INT
)
BEGIN
    -- Total penjualan hari ini
    SELECT IFNULL(SUM(total), 0) INTO total_penjualan_hari_ini
    FROM transaksi
    WHERE DATE(tanggal) = CURDATE();

    -- Jumlah transaksi hari ini
    SELECT COUNT(*) INTO jumlah_transaksi_hari_ini
    FROM transaksi
    WHERE DATE(tanggal) = CURDATE();

    -- Produk terlaris hari ini
    SELECT p.nama INTO produk_terlaris
    FROM transaksi_detail td
    JOIN transaksi t ON td.transaksi_id = t.id
    JOIN produk p ON td.produk_id = p.id
    WHERE DATE(t.tanggal) = CURDATE()
    GROUP BY td.produk_id
    ORDER BY SUM(td.jumlah) DESC
    LIMIT 1;

    -- Jumlah produk dengan stok menipis
    SELECT COUNT(*) INTO stok_menipis
    FROM produk
    WHERE stok <= stok_minimum AND aktif = TRUE;
END$$

DELIMITER ;

-- =============================================
-- TRIGGERS
-- =============================================

DELIMITER $$

-- Trigger: Update stok setelah transaksi
CREATE TRIGGER after_transaksi_detail_insert
AFTER INSERT ON transaksi_detail
FOR EACH ROW
BEGIN
    UPDATE produk
    SET stok = stok - NEW.jumlah
    WHERE id = NEW.produk_id;
END$$

-- Trigger: Validasi stok sebelum transaksi
CREATE TRIGGER before_transaksi_detail_insert
BEFORE INSERT ON transaksi_detail
FOR EACH ROW
BEGIN
    DECLARE stok_tersedia INT;

    SELECT stok INTO stok_tersedia
    FROM produk
    WHERE id = NEW.produk_id;

    IF stok_tersedia < NEW.jumlah THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Stok tidak mencukupi!';
    END IF;
END$$

DELIMITER ;

-- =============================================
-- DONE! Database siap digunakan
-- =============================================

SELECT 'Database kasir_toko berhasil dibuat!' as status;`}},{id:"project-structure",title:"Struktur Project",content:`Sebelum mulai coding, kita perlu setup struktur project yang rapi dan terorganisir dengan baik.

**Package Structure:**

com.kasirtoko.
├── model/              → Entity classes (User, Produk, Transaksi, dll)
├── dao/                → Data Access Object (interface & implementation)
├── service/            → Business logic layer
├── view/               → GUI Forms (JFrame, JDialog)
├── util/               → Helper classes (DatabaseUtil, FormatUtil, dll)
├── config/             → Configuration (AppConfig)
└── Main.java           → Entry point

**Design Pattern yang Digunakan:**

1. **DAO Pattern** - Separation antara business logic dan data access
2. **Singleton Pattern** - Untuk database connection
3. **MVC-like** - Model, View, Controller separation
4. **Factory Pattern** - Untuk create DAO objects`,code:{language:"java",filename:"ProjectStructure.java",content:`// ===== 1. UTIL PACKAGE =====
package com.kasirtoko.util;

import java.sql.*;

/**
 * Database connection utility dengan Singleton pattern
 */
public class DatabaseUtil {
    private static final String URL = "jdbc:mysql://localhost:3306/kasir_toko";
    private static final String USER = "root";
    private static final String PASSWORD = "";

    private static Connection connection;

    // Private constructor untuk Singleton
    private DatabaseUtil() {}

    public static Connection getConnection() throws SQLException {
        if (connection == null || connection.isClosed()) {
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                connection = DriverManager.getConnection(URL, USER, PASSWORD);
            } catch (ClassNotFoundException e) {
                throw new SQLException("Driver MySQL tidak ditemukan!", e);
            }
        }
        return connection;
    }

    public static void closeConnection() {
        try {
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Test connection
    public static boolean testConnection() {
        try {
            Connection conn = getConnection();
            return conn != null && !conn.isClosed();
        } catch (SQLException e) {
            return false;
        }
    }
}

package com.kasirtoko.util;

import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * Format utility untuk currency, date, dll
 */
public class FormatUtil {
    private static final NumberFormat rupiahFormat =
        NumberFormat.getCurrencyInstance(new Locale("id", "ID"));

    private static final SimpleDateFormat dateFormat =
        new SimpleDateFormat("dd/MM/yyyy");

    private static final SimpleDateFormat dateTimeFormat =
        new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

    public static String formatRupiah(double amount) {
        return rupiahFormat.format(amount);
    }

    public static String formatAngka(int number) {
        return NumberFormat.getInstance(new Locale("id", "ID")).format(number);
    }

    public static String formatTanggal(Date date) {
        return dateFormat.format(date);
    }

    public static String formatTanggalWaktu(Date date) {
        return dateTimeFormat.format(date);
    }
}

package com.kasirtoko.util;

import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;

/**
 * Security utility untuk hash password, dll
 */
public class SecurityUtil {

    // Hash password menggunakan MD5 (untuk kesederhanaan)
    // Note: Untuk production, gunakan BCrypt atau Argon2
    public static String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] hash = md.digest(password.getBytes(StandardCharsets.UTF_8));

            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }

            return hexString.toString();

        } catch (Exception e) {
            throw new RuntimeException("Error hashing password", e);
        }
    }

    // Validasi password
    public static boolean validatePassword(String input, String hashed) {
        return hashPassword(input).equals(hashed);
    }
}

package com.kasirtoko.util;

import javax.swing.table.DefaultTableModel;

/**
 * Table utility untuk Swing JTable
 */
public class TableUtil {

    // Create non-editable table model
    public static DefaultTableModel createNonEditableModel(String[] columns) {
        return new DefaultTableModel(columns, 0) {
            @Override
            public boolean isCellEditable(int row, int column) {
                return false; // Semua cell tidak bisa diedit
            }
        };
    }

    // Clear table
    public static void clearTable(DefaultTableModel model) {
        model.setRowCount(0);
    }

    // Get selected row ID
    public static Integer getSelectedId(javax.swing.JTable table, int idColumn) {
        int selectedRow = table.getSelectedRow();
        if (selectedRow == -1) {
            return null;
        }
        return (Integer) table.getValueAt(selectedRow, idColumn);
    }
}

// ===== 2. MODEL PACKAGE =====
package com.kasirtoko.model;

import java.util.Date;

public class User {
    private int id;
    private String username;
    private String password;
    private String namaLengkap;
    private String level; // "admin" atau "kasir"
    private boolean aktif;
    private Date tanggalDibuat;
    private Date terakhirLogin;

    // Constructors
    public User() {}

    public User(int id, String username, String namaLengkap, String level) {
        this.id = id;
        this.username = username;
        this.namaLengkap = namaLengkap;
        this.level = level;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getNamaLengkap() { return namaLengkap; }
    public void setNamaLengkap(String namaLengkap) { this.namaLengkap = namaLengkap; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }

    public boolean isAktif() { return aktif; }
    public void setAktif(boolean aktif) { this.aktif = aktif; }

    public Date getTanggalDibuat() { return tanggalDibuat; }
    public void setTanggalDibuat(Date tanggalDibuat) { this.tanggalDibuat = tanggalDibuat; }

    public Date getTerakhirLogin() { return terakhirLogin; }
    public void setTerakhirLogin(Date terakhirLogin) { this.terakhirLogin = terakhirLogin; }

    // Helper method
    public boolean isAdmin() {
        return "admin".equals(this.level);
    }
}

package com.kasirtoko.model;

public class Kategori {
    private int id;
    private String nama;
    private String deskripsi;
    private boolean aktif;

    public Kategori() {}

    public Kategori(int id, String nama) {
        this.id = id;
        this.nama = nama;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNama() { return nama; }
    public void setNama(String nama) { this.nama = nama; }

    public String getDeskripsi() { return deskripsi; }
    public void setDeskripsi(String deskripsi) { this.deskripsi = deskripsi; }

    public boolean isAktif() { return aktif; }
    public void setAktif(boolean aktif) { this.aktif = aktif; }

    @Override
    public String toString() {
        return nama; // Untuk ditampilkan di JComboBox
    }
}

package com.kasirtoko.model;

import java.util.Date;

public class Produk {
    private int id;
    private String kode;
    private String nama;
    private int kategoriId;
    private String kategoriNama; // Untuk join
    private double harga;
    private int stok;
    private int stokMinimum;
    private boolean aktif;
    private Date tanggalDitambahkan;

    public Produk() {}

    public Produk(int id, String kode, String nama, double harga, int stok) {
        this.id = id;
        this.kode = kode;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getKode() { return kode; }
    public void setKode(String kode) { this.kode = kode; }

    public String getNama() { return nama; }
    public void setNama(String nama) { this.nama = nama; }

    public int getKategoriId() { return kategoriId; }
    public void setKategoriId(int kategoriId) { this.kategoriId = kategoriId; }

    public String getKategoriNama() { return kategoriNama; }
    public void setKategoriNama(String kategoriNama) { this.kategoriNama = kategoriNama; }

    public double getHarga() { return harga; }
    public void setHarga(double harga) { this.harga = harga; }

    public int getStok() { return stok; }
    public void setStok(int stok) { this.stok = stok; }

    public int getStokMinimum() { return stokMinimum; }
    public void setStokMinimum(int stokMinimum) { this.stokMinimum = stokMinimum; }

    public boolean isAktif() { return aktif; }
    public void setAktif(boolean aktif) { this.aktif = aktif; }

    public Date getTanggalDitambahkan() { return tanggalDitambahkan; }
    public void setTanggalDitambahkan(Date tanggalDitambahkan) {
        this.tanggalDitambahkan = tanggalDitambahkan;
    }

    // Helper methods
    public boolean isStokMenipis() {
        return stok <= stokMinimum;
    }

    public String getStatusStok() {
        if (stok == 0) return "Habis";
        if (isStokMenipis()) return "Menipis";
        return "Aman";
    }
}

package com.kasirtoko.model;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

public class Transaksi {
    private int id;
    private String nomorTransaksi;
    private Date tanggal;
    private int userId;
    private String namaKasir; // Untuk join
    private double subtotal;
    private double diskon;
    private double pajak;
    private double total;
    private double bayar;
    private double kembalian;

    private List<TransaksiDetail> items = new ArrayList<>();

    public Transaksi() {}

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNomorTransaksi() { return nomorTransaksi; }
    public void setNomorTransaksi(String nomorTransaksi) {
        this.nomorTransaksi = nomorTransaksi;
    }

    public Date getTanggal() { return tanggal; }
    public void setTanggal(Date tanggal) { this.tanggal = tanggal; }

    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }

    public String getNamaKasir() { return namaKasir; }
    public void setNamaKasir(String namaKasir) { this.namaKasir = namaKasir; }

    public double getSubtotal() { return subtotal; }
    public void setSubtotal(double subtotal) { this.subtotal = subtotal; }

    public double getDiskon() { return diskon; }
    public void setDiskon(double diskon) { this.diskon = diskon; }

    public double getPajak() { return pajak; }
    public void setPajak(double pajak) { this.pajak = pajak; }

    public double getTotal() { return total; }
    public void setTotal(double total) { this.total = total; }

    public double getBayar() { return bayar; }
    public void setBayar(double bayar) { this.bayar = bayar; }

    public double getKembalian() { return kembalian; }
    public void setKembalian(double kembalian) { this.kembalian = kembalian; }

    public List<TransaksiDetail> getItems() { return items; }
    public void setItems(List<TransaksiDetail> items) { this.items = items; }

    public void addItem(TransaksiDetail item) {
        this.items.add(item);
    }
}

package com.kasirtoko.model;

public class TransaksiDetail {
    private int id;
    private int transaksiId;
    private int produkId;
    private String namaProduk;
    private double harga;
    private int jumlah;
    private double subtotal;

    public TransaksiDetail() {}

    public TransaksiDetail(int produkId, String namaProduk, double harga, int jumlah) {
        this.produkId = produkId;
        this.namaProduk = namaProduk;
        this.harga = harga;
        this.jumlah = jumlah;
        this.subtotal = harga * jumlah;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getTransaksiId() { return transaksiId; }
    public void setTransaksiId(int transaksiId) { this.transaksiId = transaksiId; }

    public int getProdukId() { return produkId; }
    public void setProdukId(int produkId) { this.produkId = produkId; }

    public String getNamaProduk() { return namaProduk; }
    public void setNamaProduk(String namaProduk) { this.namaProduk = namaProduk; }

    public double getHarga() { return harga; }
    public void setHarga(double harga) { this.harga = harga; }

    public int getJumlah() { return jumlah; }
    public void setJumlah(int jumlah) { this.jumlah = jumlah; }

    public double getSubtotal() { return subtotal; }
    public void setSubtotal(double subtotal) { this.subtotal = subtotal; }
}`},afterCode:`<p><strong>File Structure di NetBeans:</strong></p>
<pre>
KasirToko/
├── src/
│   └── com/
│       └── kasirtoko/
│           ├── model/
│           │   ├── User.java
│           │   ├── Kategori.java
│           │   ├── Produk.java
│           │   ├── Transaksi.java
│           │   └── TransaksiDetail.java
│           ├── util/
│           │   ├── DatabaseUtil.java
│           │   ├── FormatUtil.java
│           │   ├── SecurityUtil.java
│           │   └── TableUtil.java
│           ├── dao/           (akan dibuat di section berikutnya)
│           ├── service/       (akan dibuat di section berikutnya)
│           ├── view/          (akan dibuat di section berikutnya)
│           └── Main.java
├── lib/
│   └── mysql-connector-java-8.0.30.jar
└── database_kasir.sql
</pre>

<p><strong>Next Step:</strong> Kita akan membuat DAO layer untuk handle semua operasi database.</p>`},{id:"dao-layer",title:"DAO Layer - Data Access Object",content:`DAO (Data Access Object) adalah pattern untuk memisahkan business logic dari database access logic. Dengan DAO, kita bisa ganti database dengan mudah tanpa ubah business logic.

**Keuntungan DAO Pattern:**

1. **Separation of Concerns** - Database logic terpisah dari business logic
2. **Reusability** - DAO bisa dipakai di berbagai service
3. **Testability** - Mudah di-mock untuk testing
4. **Maintainability** - Perubahan database query tidak affect business logic

**DAO Interface + Implementation:**

Kita buat interface dulu, kemudian implementation. Ini memudahkan jika nanti mau ganti dari MySQL ke PostgreSQL misalnya.`,code:{language:"java",filename:"DAOLayer.java",content:`// ===== DAO INTERFACES =====
package com.kasirtoko.dao;

import com.kasirtoko.model.User;
import java.sql.SQLException;
import java.util.List;

public interface UserDAO {
    User login(String username, String password) throws SQLException;
    void updateLastLogin(int userId) throws SQLException;
    List<User> getAll() throws SQLException;
    User getById(int id) throws SQLException;
    void insert(User user) throws SQLException;
    void update(User user) throws SQLException;
    void delete(int id) throws SQLException;
}

package com.kasirtoko.dao;

import com.kasirtoko.model.Produk;
import java.sql.SQLException;
import java.util.List;

public interface ProdukDAO {
    List<Produk> getAll() throws SQLException;
    List<Produk> getAllAktif() throws SQLException;
    Produk getById(int id) throws SQLException;
    Produk getByKode(String kode) throws SQLException;
    List<Produk> searchByNama(String keyword) throws SQLException;
    void insert(Produk produk) throws SQLException;
    void update(Produk produk) throws SQLException;
    void delete(int id) throws SQLException;
    void updateStok(int produkId, int jumlah) throws SQLException;
}

// ===== DAO IMPLEMENTATIONS =====
package com.kasirtoko.dao.impl;

import com.kasirtoko.dao.UserDAO;
import com.kasirtoko.model.User;
import com.kasirtoko.util.*;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserDAOImpl implements UserDAO {
    private Connection conn;

    public UserDAOImpl() throws SQLException {
        this.conn = DatabaseUtil.getConnection();
    }

    @Override
    public User login(String username, String password) throws SQLException {
        String sql = "SELECT * FROM user WHERE username = ? AND password = ? AND aktif = TRUE";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, username);
            ps.setString(2, SecurityUtil.hashPassword(password));

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return mapResultSetToUser(rs);
            }

            return null; // Login gagal
        }
    }

    @Override
    public void updateLastLogin(int userId) throws SQLException {
        String sql = "UPDATE user SET terakhir_login = NOW() WHERE id = ?";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, userId);
            ps.executeUpdate();
        }
    }

    @Override
    public List<User> getAll() throws SQLException {
        List<User> list = new ArrayList<>();
        String sql = "SELECT * FROM user ORDER BY id DESC";

        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                list.add(mapResultSetToUser(rs));
            }
        }

        return list;
    }

    @Override
    public User getById(int id) throws SQLException {
        String sql = "SELECT * FROM user WHERE id = ?";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return mapResultSetToUser(rs);
            }
        }

        return null;
    }

    @Override
    public void insert(User user) throws SQLException {
        String sql = "INSERT INTO user (username, password, nama_lengkap, level, aktif) " +
                     "VALUES (?, ?, ?, ?, ?)";

        try (PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            ps.setString(1, user.getUsername());
            ps.setString(2, SecurityUtil.hashPassword(user.getPassword()));
            ps.setString(3, user.getNamaLengkap());
            ps.setString(4, user.getLevel());
            ps.setBoolean(5, user.isAktif());

            ps.executeUpdate();

            // Get generated ID
            ResultSet rs = ps.getGeneratedKeys();
            if (rs.next()) {
                user.setId(rs.getInt(1));
            }
        }
    }

    @Override
    public void update(User user) throws SQLException {
        String sql;

        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
            // Update dengan password baru
            sql = "UPDATE user SET username = ?, password = ?, nama_lengkap = ?, " +
                  "level = ?, aktif = ? WHERE id = ?";
        } else {
            // Update tanpa ubah password
            sql = "UPDATE user SET username = ?, nama_lengkap = ?, " +
                  "level = ?, aktif = ? WHERE id = ?";
        }

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            int paramIndex = 1;

            ps.setString(paramIndex++, user.getUsername());

            if (user.getPassword() != null && !user.getPassword().isEmpty()) {
                ps.setString(paramIndex++, SecurityUtil.hashPassword(user.getPassword()));
            }

            ps.setString(paramIndex++, user.getNamaLengkap());
            ps.setString(paramIndex++, user.getLevel());
            ps.setBoolean(paramIndex++, user.isAktif());
            ps.setInt(paramIndex, user.getId());

            ps.executeUpdate();
        }
    }

    @Override
    public void delete(int id) throws SQLException {
        String sql = "DELETE FROM user WHERE id = ?";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            ps.executeUpdate();
        }
    }

    // Helper method untuk mapping ResultSet ke User object
    private User mapResultSetToUser(ResultSet rs) throws SQLException {
        User user = new User();
        user.setId(rs.getInt("id"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password"));
        user.setNamaLengkap(rs.getString("nama_lengkap"));
        user.setLevel(rs.getString("level"));
        user.setAktif(rs.getBoolean("aktif"));
        user.setTanggalDibuat(rs.getTimestamp("tanggal_dibuat"));

        Timestamp lastLogin = rs.getTimestamp("terakhir_login");
        if (lastLogin != null) {
            user.setTerakhirLogin(lastLogin);
        }

        return user;
    }
}

package com.kasirtoko.dao.impl;

import com.kasirtoko.dao.ProdukDAO;
import com.kasirtoko.model.Produk;
import com.kasirtoko.util.DatabaseUtil;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProdukDAOImpl implements ProdukDAO {
    private Connection conn;

    public ProdukDAOImpl() throws SQLException {
        this.conn = DatabaseUtil.getConnection();
    }

    @Override
    public List<Produk> getAll() throws SQLException {
        List<Produk> list = new ArrayList<>();

        String sql = """
            SELECT p.*, k.nama as kategori_nama
            FROM produk p
            LEFT JOIN kategori k ON p.kategori_id = k.id
            ORDER BY p.id DESC
        """;

        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                list.add(mapResultSetToProduk(rs));
            }
        }

        return list;
    }

    @Override
    public List<Produk> getAllAktif() throws SQLException {
        List<Produk> list = new ArrayList<>();

        String sql = """
            SELECT p.*, k.nama as kategori_nama
            FROM produk p
            LEFT JOIN kategori k ON p.kategori_id = k.id
            WHERE p.aktif = TRUE
            ORDER BY p.nama
        """;

        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                list.add(mapResultSetToProduk(rs));
            }
        }

        return list;
    }

    @Override
    public Produk getById(int id) throws SQLException {
        String sql = """
            SELECT p.*, k.nama as kategori_nama
            FROM produk p
            LEFT JOIN kategori k ON p.kategori_id = k.id
            WHERE p.id = ?
        """;

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return mapResultSetToProduk(rs);
            }
        }

        return null;
    }

    @Override
    public Produk getByKode(String kode) throws SQLException {
        String sql = """
            SELECT p.*, k.nama as kategori_nama
            FROM produk p
            LEFT JOIN kategori k ON p.kategori_id = k.id
            WHERE p.kode = ?
        """;

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, kode);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                return mapResultSetToProduk(rs);
            }
        }

        return null;
    }

    @Override
    public List<Produk> searchByNama(String keyword) throws SQLException {
        List<Produk> list = new ArrayList<>();

        String sql = """
            SELECT p.*, k.nama as kategori_nama
            FROM produk p
            LEFT JOIN kategori k ON p.kategori_id = k.id
            WHERE p.nama LIKE ? AND p.aktif = TRUE
            ORDER BY p.nama
        """;

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, "%" + keyword + "%");
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                list.add(mapResultSetToProduk(rs));
            }
        }

        return list;
    }

    @Override
    public void insert(Produk produk) throws SQLException {
        String sql = """
            INSERT INTO produk (kode, nama, kategori_id, harga, stok, stok_minimum, aktif)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """;

        try (PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            ps.setString(1, produk.getKode());
            ps.setString(2, produk.getNama());
            ps.setInt(3, produk.getKategoriId());
            ps.setDouble(4, produk.getHarga());
            ps.setInt(5, produk.getStok());
            ps.setInt(6, produk.getStokMinimum());
            ps.setBoolean(7, produk.isAktif());

            ps.executeUpdate();

            ResultSet rs = ps.getGeneratedKeys();
            if (rs.next()) {
                produk.setId(rs.getInt(1));
            }
        }
    }

    @Override
    public void update(Produk produk) throws SQLException {
        String sql = """
            UPDATE produk SET
                kode = ?,
                nama = ?,
                kategori_id = ?,
                harga = ?,
                stok = ?,
                stok_minimum = ?,
                aktif = ?
            WHERE id = ?
        """;

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, produk.getKode());
            ps.setString(2, produk.getNama());
            ps.setInt(3, produk.getKategoriId());
            ps.setDouble(4, produk.getHarga());
            ps.setInt(5, produk.getStok());
            ps.setInt(6, produk.getStokMinimum());
            ps.setBoolean(7, produk.isAktif());
            ps.setInt(8, produk.getId());

            ps.executeUpdate();
        }
    }

    @Override
    public void delete(int id) throws SQLException {
        String sql = "DELETE FROM produk WHERE id = ?";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            ps.executeUpdate();
        }
    }

    @Override
    public void updateStok(int produkId, int jumlah) throws SQLException {
        String sql = "UPDATE produk SET stok = stok - ? WHERE id = ?";

        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, jumlah);
            ps.setInt(2, produkId);
            ps.executeUpdate();
        }
    }

    private Produk mapResultSetToProduk(ResultSet rs) throws SQLException {
        Produk produk = new Produk();
        produk.setId(rs.getInt("id"));
        produk.setKode(rs.getString("kode"));
        produk.setNama(rs.getString("nama"));
        produk.setKategoriId(rs.getInt("kategori_id"));
        produk.setKategoriNama(rs.getString("kategori_nama"));
        produk.setHarga(rs.getDouble("harga"));
        produk.setStok(rs.getInt("stok"));
        produk.setStokMinimum(rs.getInt("stok_minimum"));
        produk.setAktif(rs.getBoolean("aktif"));
        produk.setTanggalDitambahkan(rs.getTimestamp("tanggal_ditambahkan"));

        return produk;
    }
}`},afterCode:`<p><strong>Kenapa Pakai Interface?</strong></p>
<ul>
<li><strong>Flexibility</strong>: Bisa ganti implementation tanpa ubah code yang pakai DAO</li>
<li><strong>Testing</strong>: Mudah create mock object untuk unit testing</li>
<li><strong>Contract</strong>: Interface jadi contract yang harus diikuti implementation</li>
<li><strong>Decoupling</strong>: Business logic tidak depend pada implementation spesifik</li>
</ul>

<p><strong>DAO Pattern Best Practices:</strong></p>
<ul>
<li>✅ Satu DAO untuk satu entity (UserDAO untuk User, ProdukDAO untuk Produk)</li>
<li>✅ Method name descriptive (getAll, getById, insert, update, delete)</li>
<li>✅ Throw SQLException, let caller handle exception</li>
<li>✅ Use PreparedStatement untuk prevent SQL injection</li>
<li>✅ Helper method untuk map ResultSet ke Object (DRY principle)</li>
</ul>`},{id:"login-form",title:"Form Login",content:`Sekarang kita akan membuat Form Login sebagai entry point aplikasi. Form login ini akan validate username dan password, kemudian redirect ke dashboard jika berhasil.

**Fitur Form Login:**

1. Input username dan password
2. Validasi input
3. Authentication dengan database
4. Update last login timestamp
5. Simpan session user yang login
6. Error handling yang user-friendly`,code:{language:"java",filename:"FormLogin.java",content:`package com.kasirtoko.view;

import com.kasirtoko.dao.UserDAO;
import com.kasirtoko.dao.impl.UserDAOImpl;
import com.kasirtoko.model.User;
import com.kasirtoko.util.DatabaseUtil;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.SQLException;

public class FormLogin extends JFrame {

    private JTextField txtUsername;
    private JPasswordField txtPassword;
    private JButton btnLogin;
    private JCheckBox chkShowPassword;
    private JLabel lblStatus;

    private UserDAO userDAO;

    public FormLogin() {
        try {
            userDAO = new UserDAOImpl();
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this,
                "Tidak dapat terhubung ke database!
" + e.getMessage(),
                "Error Database",
                JOptionPane.ERROR_MESSAGE);
            System.exit(1);
        }

        initComponents();
    }

    private void initComponents() {
        setTitle("Login - Kasir Toko");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setResizable(false);

        // Main Panel dengan padding
        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new BorderLayout(20, 20));
        mainPanel.setBorder(BorderFactory.createEmptyBorder(30, 40, 30, 40));
        mainPanel.setBackground(new Color(240, 240, 240));

        // Header Panel
        JPanel headerPanel = new JPanel();
        headerPanel.setLayout(new BoxLayout(headerPanel, BoxLayout.Y_AXIS));
        headerPanel.setBackground(new Color(240, 240, 240));

        JLabel lblTitle = new JLabel("KASIR TOKO");
        lblTitle.setFont(new Font("Arial", Font.BOLD, 24));
        lblTitle.setAlignmentX(Component.CENTER_ALIGNMENT);

        JLabel lblSubtitle = new JLabel("Point of Sale System");
        lblSubtitle.setFont(new Font("Arial", Font.PLAIN, 12));
        lblSubtitle.setForeground(Color.GRAY);
        lblSubtitle.setAlignmentX(Component.CENTER_ALIGNMENT);

        headerPanel.add(lblTitle);
        headerPanel.add(Box.createVerticalStrut(5));
        headerPanel.add(lblSubtitle);

        // Form Panel
        JPanel formPanel = new JPanel(new GridBagLayout());
        formPanel.setBackground(Color.WHITE);
        formPanel.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(200, 200, 200)),
            BorderFactory.createEmptyBorder(20, 20, 20, 20)
        ));

        GridBagConstraints gbc = new GridBagConstraints();
        gbc.fill = GridBagConstraints.HORIZONTAL;
        gbc.insets = new Insets(5, 5, 5, 5);

        // Username
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.gridwidth = 2;
        JLabel lblUsername = new JLabel("Username:");
        lblUsername.setFont(new Font("Arial", Font.PLAIN, 12));
        formPanel.add(lblUsername, gbc);

        gbc.gridy = 1;
        txtUsername = new JTextField(20);
        txtUsername.setPreferredSize(new Dimension(250, 30));
        txtUsername.setFont(new Font("Arial", Font.PLAIN, 13));
        formPanel.add(txtUsername, gbc);

        // Password
        gbc.gridy = 2;
        JLabel lblPassword = new JLabel("Password:");
        lblPassword.setFont(new Font("Arial", Font.PLAIN, 12));
        formPanel.add(lblPassword, gbc);

        gbc.gridy = 3;
        txtPassword = new JPasswordField(20);
        txtPassword.setPreferredSize(new Dimension(250, 30));
        txtPassword.setFont(new Font("Arial", Font.PLAIN, 13));
        formPanel.add(txtPassword, gbc);

        // Show Password Checkbox
        gbc.gridy = 4;
        chkShowPassword = new JCheckBox("Show Password");
        chkShowPassword.setBackground(Color.WHITE);
        chkShowPassword.setFont(new Font("Arial", Font.PLAIN, 11));
        chkShowPassword.addActionListener(e -> togglePasswordVisibility());
        formPanel.add(chkShowPassword, gbc);

        // Login Button
        gbc.gridy = 5;
        gbc.insets = new Insets(15, 5, 5, 5);
        btnLogin = new JButton("LOGIN");
        btnLogin.setPreferredSize(new Dimension(250, 35));
        btnLogin.setFont(new Font("Arial", Font.BOLD, 13));
        btnLogin.setBackground(new Color(41, 128, 185));
        btnLogin.setForeground(Color.WHITE);
        btnLogin.setFocusPainted(false);
        btnLogin.setBorderPainted(false);
        btnLogin.setCursor(new Cursor(Cursor.HAND_CURSOR));
        btnLogin.addActionListener(e -> login());
        formPanel.add(btnLogin, gbc);

        // Status Label
        gbc.gridy = 6;
        gbc.insets = new Insets(10, 5, 5, 5);
        lblStatus = new JLabel(" ");
        lblStatus.setFont(new Font("Arial", Font.ITALIC, 11));
        lblStatus.setForeground(Color.RED);
        lblStatus.setHorizontalAlignment(SwingConstants.CENTER);
        formPanel.add(lblStatus, gbc);

        // Footer Panel
        JPanel footerPanel = new JPanel();
        footerPanel.setBackground(new Color(240, 240, 240));
        JLabel lblFooter = new JLabel("Default: admin/123456 atau kasir1/123456");
        lblFooter.setFont(new Font("Arial", Font.PLAIN, 10));
        lblFooter.setForeground(Color.GRAY);
        footerPanel.add(lblFooter);

        // Add panels to main panel
        mainPanel.add(headerPanel, BorderLayout.NORTH);
        mainPanel.add(formPanel, BorderLayout.CENTER);
        mainPanel.add(footerPanel, BorderLayout.SOUTH);

        add(mainPanel);

        // Enter key listener
        txtPassword.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                if (e.getKeyCode() == KeyEvent.VK_ENTER) {
                    login();
                }
            }
        });

        // Focus username saat form muncul
        addWindowListener(new WindowAdapter() {
            @Override
            public void windowOpened(WindowEvent e) {
                txtUsername.requestFocus();
            }
        });
    }

    private void togglePasswordVisibility() {
        if (chkShowPassword.isSelected()) {
            txtPassword.setEchoChar((char) 0);
        } else {
            txtPassword.setEchoChar('•');
        }
    }

    private void login() {
        // Clear status
        lblStatus.setText(" ");

        // Validasi input
        String username = txtUsername.getText().trim();
        String password = new String(txtPassword.getPassword());

        if (username.isEmpty()) {
            lblStatus.setText("Username harus diisi!");
            txtUsername.requestFocus();
            return;
        }

        if (password.isEmpty()) {
            lblStatus.setText("Password harus diisi!");
            txtPassword.requestFocus();
            return;
        }

        // Disable button saat proses login
        btnLogin.setEnabled(false);
        btnLogin.setText("Logging in...");
        lblStatus.setText("Memverifikasi...");
        lblStatus.setForeground(Color.BLUE);

        // Gunakan SwingWorker untuk tidak block UI
        SwingWorker<User, Void> worker = new SwingWorker<>() {
            @Override
            protected User doInBackground() throws Exception {
                // Authenticate
                User user = userDAO.login(username, password);

                if (user != null) {
                    // Update last login
                    userDAO.updateLastLogin(user.getId());
                }

                return user;
            }

            @Override
            protected void done() {
                try {
                    User user = get();

                    if (user != null) {
                        // Login berhasil
                        lblStatus.setText("Login berhasil!");
                        lblStatus.setForeground(new Color(46, 204, 113));

                        // Simpan session
                        SessionManager.setCurrentUser(user);

                        // Tunggu sebentar untuk user lihat status
                        Timer timer = new Timer(500, e -> {
                            // Open dashboard
                            FormDashboard dashboard = new FormDashboard();
                            dashboard.setVisible(true);

                            // Close login form
                            dispose();
                        });
                        timer.setRepeats(false);
                        timer.start();

                    } else {
                        // Login gagal
                        lblStatus.setText("Username atau password salah!");
                        lblStatus.setForeground(Color.RED);
                        btnLogin.setEnabled(true);
                        btnLogin.setText("LOGIN");
                        txtPassword.setText("");
                        txtPassword.requestFocus();
                    }

                } catch (Exception e) {
                    e.printStackTrace();
                    lblStatus.setText("Error: " + e.getMessage());
                    lblStatus.setForeground(Color.RED);
                    btnLogin.setEnabled(true);
                    btnLogin.setText("LOGIN");
                }
            }
        };

        worker.execute();
    }

    public static void main(String[] args) {
        // Set Look and Feel
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Test database connection
        if (!DatabaseUtil.testConnection()) {
            JOptionPane.showMessageDialog(null,
                "Tidak dapat terhubung ke database!

" +
                "Pastikan:
" +
                "1. MySQL Server sudah berjalan
" +
                "2. Database 'kasir_toko' sudah dibuat
" +
                "3. Import file database_kasir.sql
" +
                "4. Username dan password di DatabaseUtil sudah benar",
                "Error Koneksi Database",
                JOptionPane.ERROR_MESSAGE);
            System.exit(1);
        }

        SwingUtilities.invokeLater(() -> {
            FormLogin login = new FormLogin();
            login.setVisible(true);
        });
    }
}

// ===== SESSION MANAGER =====
package com.kasirtoko.util;

import com.kasirtoko.model.User;

/**
 * Singleton class untuk manage user session
 */
public class SessionManager {
    private static User currentUser;

    private SessionManager() {}

    public static void setCurrentUser(User user) {
        currentUser = user;
    }

    public static User getCurrentUser() {
        return currentUser;
    }

    public static void clearSession() {
        currentUser = null;
    }

    public static boolean isLoggedIn() {
        return currentUser != null;
    }

    public static boolean isAdmin() {
        return currentUser != null && currentUser.isAdmin();
    }
}`},afterCode:`<p><strong>Fitur Form Login:</strong></p>
<ul>
<li>✅ UI modern dengan warna yang nyaman</li>
<li>✅ Show/Hide password</li>
<li>✅ Input validation</li>
<li>✅ SwingWorker untuk async login (UI tidak freeze)</li>
<li>✅ Session management untuk track user yang login</li>
<li>✅ Enter key support</li>
<li>✅ Auto focus ke username</li>
<li>✅ Database connection test di awal</li>
<li>✅ User-friendly error messages</li>
</ul>

<p><strong>Test Login:</strong></p>
<ul>
<li><strong>Admin</strong>: username = <code>admin</code>, password = <code>123456</code></li>
<li><strong>Kasir</strong>: username = <code>kasir1</code>, password = <code>123456</code></li>
</ul>`},{id:"complete-application",title:"Aplikasi Lengkap - Dashboard & Master Data",content:`Sekarang kita akan melengkapi aplikasi dengan Dashboard dan Form Master Data Produk. Karena kode lengkap sangat panjang, di sini saya berikan struktur dan komponen utama yang perlu dibuat.

**Form yang Perlu Dibuat:**

1. **FormDashboard** - Main menu dan statistik penjualan
2. **FormProduk** - CRUD Master Data Produk
3. **FormKategori** - CRUD Master Data Kategori
4. **FormTransaksi** - Form kasir untuk transaksi
5. **FormLaporan** - Laporan penjualan

**Struktur Aplikasi Final:**

Login → Dashboard → Menu (Produk/Kategori/Transaksi/Laporan/Logout)

Karena keterbatasan space, berikut adalah template dan panduan untuk complete implementation.`,code:{language:"java",filename:"CompleteApp.java",content:`// ===== FORM DASHBOARD (Template) =====
package com.kasirtoko.view;

import com.kasirtoko.util.SessionManager;
import javax.swing.*;
import java.awt.*;

public class FormDashboard extends JFrame {

    private JLabel lblWelcome;
    private JButton btnProduk, btnKategori, btnTransaksi, btnLaporan, btnUser, btnLogout;

    // Dashboard Stats
    private JLabel lblTotalPenjualanHariIni;
    private JLabel lblJumlahTransaksi;
    private JLabel lblProdukTerlaris;
    private JLabel lblStokMenipis;

    public FormDashboard() {
        initComponents();
        loadDashboardStats();
    }

    private void initComponents() {
        setTitle("Dashboard - Kasir Toko");
        setSize(1000, 700);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Main Layout: BorderLayout
        setLayout(new BorderLayout(10, 10));

        // Top Panel: Header
        JPanel headerPanel = createHeaderPanel();
        add(headerPanel, BorderLayout.NORTH);

        // Center Panel: Dashboard Stats
        JPanel centerPanel = createDashboardPanel();
        add(centerPanel, BorderLayout.CENTER);

        // Left Panel: Menu
        JPanel menuPanel = createMenuPanel();
        add(menuPanel, BorderLayout.WEST);
    }

    private JPanel createHeaderPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBackground(new Color(52, 73, 94));
        panel.setBorder(BorderFactory.createEmptyBorder(15, 20, 15, 20));

        var user = SessionManager.getCurrentUser();

        JLabel lblTitle = new JLabel("KASIR TOKO - Point of Sale");
        lblTitle.setFont(new Font("Arial", Font.BOLD, 20));
        lblTitle.setForeground(Color.WHITE);

        lblWelcome = new JLabel("Welcome, " + user.getNamaLengkap() + " (" + user.getLevel() + ")");
        lblWelcome.setFont(new Font("Arial", Font.PLAIN, 13));
        lblWelcome.setForeground(Color.WHITE);

        panel.add(lblTitle, BorderLayout.WEST);
        panel.add(lblWelcome, BorderLayout.EAST);

        return panel;
    }

    private JPanel createMenuPanel() {
        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBackground(new Color(236, 240, 241));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 15, 20, 15));
        panel.setPreferredSize(new Dimension(200, 0));

        JLabel lblMenu = new JLabel("MENU");
        lblMenu.setFont(new Font("Arial", Font.BOLD, 14));
        lblMenu.setAlignmentX(Component.CENTER_ALIGNMENT);
        panel.add(lblMenu);
        panel.add(Box.createVerticalStrut(20));

        // Menu Buttons
        btnTransaksi = createMenuButton("💳 Transaksi");
        btnTransaksi.addActionListener(e -> openFormTransaksi());

        btnProduk = createMenuButton("📦 Master Produk");
        btnProduk.addActionListener(e -> openFormProduk());

        btnKategori = createMenuButton("📁 Master Kategori");
        btnKategori.addActionListener(e -> openFormKategori());

        btnLaporan = createMenuButton("📊 Laporan");
        btnLaporan.addActionListener(e -> openFormLaporan());

        btnUser = createMenuButton("👥 Manajemen User");
        btnUser.addActionListener(e -> openFormUser());
        btnUser.setEnabled(SessionManager.isAdmin()); // Hanya admin

        panel.add(btnTransaksi);
        panel.add(Box.createVerticalStrut(10));
        panel.add(btnProduk);
        panel.add(Box.createVerticalStrut(10));
        panel.add(btnKategori);
        panel.add(Box.createVerticalStrut(10));
        panel.add(btnLaporan);
        panel.add(Box.createVerticalStrut(10));
        panel.add(btnUser);
        panel.add(Box.createVerticalGlue());

        btnLogout = createMenuButton("🚪 Logout");
        btnLogout.setBackground(new Color(231, 76, 60));
        btnLogout.addActionListener(e -> logout());
        panel.add(btnLogout);

        return panel;
    }

    private JButton createMenuButton(String text) {
        JButton btn = new JButton(text);
        btn.setAlignmentX(Component.CENTER_ALIGNMENT);
        btn.setMaximumSize(new Dimension(170, 40));
        btn.setFont(new Font("Arial", Font.PLAIN, 13));
        btn.setBackground(new Color(41, 128, 185));
        btn.setForeground(Color.WHITE);
        btn.setFocusPainted(false);
        btn.setBorderPainted(false);
        btn.setCursor(new Cursor(Cursor.HAND_CURSOR));
        return btn;
    }

    private JPanel createDashboardPanel() {
        JPanel panel = new JPanel(new GridLayout(2, 2, 20, 20));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        panel.setBackground(Color.WHITE);

        // Card 1: Total Penjualan Hari Ini
        JPanel card1 = createStatsCard(
            "Total Penjualan Hari Ini",
            "Rp 0",
            new Color(46, 204, 113)
        );
        lblTotalPenjualanHariIni = (JLabel) card1.getComponent(1);

        // Card 2: Jumlah Transaksi
        JPanel card2 = createStatsCard(
            "Jumlah Transaksi",
            "0",
            new Color(52, 152, 219)
        );
        lblJumlahTransaksi = (JLabel) card2.getComponent(1);

        // Card 3: Produk Terlaris
        JPanel card3 = createStatsCard(
            "Produk Terlaris Hari Ini",
            "-",
            new Color(241, 196, 15)
        );
        lblProdukTerlaris = (JLabel) card3.getComponent(1);

        // Card 4: Stok Menipis
        JPanel card4 = createStatsCard(
            "Produk Stok Menipis",
            "0",
            new Color(231, 76, 60)
        );
        lblStokMenipis = (JLabel) card4.getComponent(1);

        panel.add(card1);
        panel.add(card2);
        panel.add(card3);
        panel.add(card4);

        return panel;
    }

    private JPanel createStatsCard(String title, String value, Color color) {
        JPanel card = new JPanel();
        card.setLayout(new BoxLayout(card, BoxLayout.Y_AXIS));
        card.setBackground(color);
        card.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        JLabel lblTitle = new JLabel(title);
        lblTitle.setFont(new Font("Arial", Font.PLAIN, 14));
        lblTitle.setForeground(Color.WHITE);
        lblTitle.setAlignmentX(Component.CENTER_ALIGNMENT);

        JLabel lblValue = new JLabel(value);
        lblValue.setFont(new Font("Arial", Font.BOLD, 28));
        lblValue.setForeground(Color.WHITE);
        lblValue.setAlignmentX(Component.CENTER_ALIGNMENT);

        card.add(lblTitle);
        card.add(Box.createVerticalStrut(15));
        card.add(lblValue);

        return card;
    }

    private void loadDashboardStats() {
        // TODO: Load dari database menggunakan stored procedure
        // CALL get_dashboard_stats(@total, @jumlah, @terlaris, @stok);

        // Dummy data untuk contoh
        lblTotalPenjualanHariIni.setText("Rp 5.750.000");
        lblJumlahTransaksi.setText("23");
        lblProdukTerlaris.setText("Mouse Wireless");
        lblStokMenipis.setText("5");
    }

    private void openFormTransaksi() {
        // TODO: Open FormTransaksi
        JOptionPane.showMessageDialog(this, "Form Transaksi belum dibuat");
    }

    private void openFormProduk() {
        FormProduk form = new FormProduk();
        form.setVisible(true);
    }

    private void openFormKategori() {
        // TODO: Open FormKategori
        JOptionPane.showMessageDialog(this, "Form Kategori belum dibuat");
    }

    private void openFormLaporan() {
        // TODO: Open FormLaporan
        JOptionPane.showMessageDialog(this, "Form Laporan belum dibuat");
    }

    private void openFormUser() {
        // TODO: Open FormUser (hanya admin)
        JOptionPane.showMessageDialog(this, "Form User belum dibuat");
    }

    private void logout() {
        int confirm = JOptionPane.showConfirmDialog(
            this,
            "Apakah Anda yakin ingin logout?",
            "Konfirmasi Logout",
            JOptionPane.YES_NO_OPTION
        );

        if (confirm == JOptionPane.YES_OPTION) {
            SessionManager.clearSession();

            FormLogin login = new FormLogin();
            login.setVisible(true);

            dispose();
        }
    }
}

/* ===== CHECKLIST IMPLEMENTASI LENGKAP =====

✅ Database Schema (database_kasir.sql)
✅ Model Classes (User, Produk, Kategori, Transaksi, TransaksiDetail)
✅ Util Classes (DatabaseUtil, FormatUtil, SecurityUtil, TableUtil, SessionManager)
✅ DAO Layer (UserDAO, ProdukDAO, KategoriDAO, TransaksiDAO)
✅ Form Login dengan authentication
✅ Form Dashboard dengan menu dan stats

🔲 Form Master Produk (CRUD lengkap dengan search, filter)
🔲 Form Master Kategori (Simple CRUD)
🔲 Form Transaksi (Kasir dengan keranjang belanja)
🔲 Form Laporan (Filter by date, export PDF/Excel)
🔲 Form Manajemen User (CRUD user, change password)

===== LANGKAH SELANJUTNYA =====

1. Buat FormProduk dengan fitur:
   - Table untuk display semua produk
   - Form input/edit produk
   - Search by nama/kode
   - Filter by kategori
   - Validasi (kode unique, harga > 0, dll)
   - Delete dengan confirmation

2. Buat FormTransaksi dengan fitur:
   - Search produk by kode/nama
   - Tambah item ke keranjang
   - Edit quantity
   - Hapus item dari keranjang
   - Calculate subtotal, diskon, pajak, total
   - Input pembayaran dan hitung kembalian
   - Generate nomor transaksi
   - Print struk (optional)

3. Buat FormLaporan dengan fitur:
   - Filter by date range
   - Summary penjualan
   - Detail per transaksi
   - Export ke PDF/Excel
   - Chart penjualan (optional)

===== RESOURCES =====

Untuk implementasi lengkap semua form:
1. Gunakan pattern yang sama dengan FormLogin
2. Gunakan SwingWorker untuk database operations
3. Validasi semua input sebelum save
4. User-friendly error messages
5. Confirmation untuk delete operations
6. Auto-refresh table setelah CRUD
7. Keyboard shortcuts (F5 refresh, Esc close, dll)

===== TIPS PENGEMBANGAN =====

✨ Start dengan satu form, test sampai benar, baru lanjut form berikutnya
✨ Gunakan Git untuk version control
✨ Commit setelah selesai satu fitur
✨ Test dengan data real (banyak records)
✨ Handle edge cases (stok habis, harga 0, dll)
✨ Add logging untuk debugging
✨ Create user manual documentation

SELAMAT MENGEMBANGKAN! 🎉

*/`},afterCode:`<p><strong>Project Final Structure:</strong></p>
<pre>
KasirToko/
├── src/
│   └── com/kasirtoko/
│       ├── model/          (5 files) ✅
│       ├── dao/            (6 files) ✅
│       ├── util/           (5 files) ✅
│       ├── view/
│       │   ├── FormLogin.java        ✅
│       │   ├── FormDashboard.java    ✅
│       │   ├── FormProduk.java       🔲
│       │   ├── FormKategori.java     🔲
│       │   ├── FormTransaksi.java    🔲
│       │   ├── FormLaporan.java      🔲
│       │   └── FormUser.java         🔲
│       └── Main.java                 ✅
├── lib/
│   └── mysql-connector-java.jar
└── database_kasir.sql                ✅
</pre>

<p><strong>Estimasi Waktu Pengembangan:</strong></p>
<ul>
<li>FormProduk (CRUD): 2-3 jam</li>
<li>FormKategori (CRUD): 1-2 jam</li>
<li>FormTransaksi (Kasir): 3-4 jam</li>
<li>FormLaporan: 2-3 jam</li>
<li>FormUser: 1-2 jam</li>
<li>Testing & Bug Fixing: 2-3 jam</li>
<li><strong>Total: 11-17 jam</strong></li>
</ul>

<p><strong>Next Steps untuk Anda:</strong></p>
<ol>
<li>✅ Setup database dengan run database_kasir.sql</li>
<li>✅ Test login dengan user default (admin/123456)</li>
<li>✅ Explore dashboard dan menu</li>
<li>🎯 Implementasi FormProduk mengikuti pattern FormLogin</li>
<li>🎯 Implementasi form-form lainnya satu per satu</li>
<li>🎯 Testing menyeluruh dengan berbagai scenario</li>
<li>🎯 Deploy dan dokumentasi</li>
</ol>

<p><strong>🎓 SELAMAT!</strong> Anda sudah menyelesaikan 11 modul pembelajaran Java Desktop! Sekarang saatnya practice dengan mengimplementasikan project ini secara lengkap. Jangan ragu untuk eksperimen dan tambahkan fitur-fitur kreatif Anda sendiri!</p>`}]};function _s({code:o,language:d="java",filename:c=""}){const[s,f]=M.useState(!1),m=()=>{navigator.clipboard.writeText(o),f(!0),setTimeout(()=>f(!1),2e3)};return g.jsxs("div",{className:"my-6 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600",children:[c&&g.jsx("div",{className:"bg-gray-200 dark:bg-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 font-mono",children:c}),g.jsxs("div",{className:"relative",children:[g.jsx("button",{onClick:m,className:"absolute top-3 right-3 p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition-colors",title:"Copy code",children:s?g.jsx(Xb,{size:16}):g.jsx(lk,{size:16})}),g.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:g.jsx("code",{className:`language-${d}`,children:o})})]})]})}function Rk({content:o}){const d=s=>{if(!s)return null;const f=s.split(`
`),m=[];let S=[],E=null,y=!1,h=[];const j=()=>{S.length>0&&(m.push(E==="ol"?g.jsx("ol",{className:"list-decimal list-outside ml-6 mb-4 space-y-2",children:S.map((B,U)=>g.jsx("li",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:c(B)},U))},m.length):g.jsx("ul",{className:"list-disc list-outside ml-6 mb-4 space-y-2",children:S.map((B,U)=>g.jsx("li",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:c(B)},U))},m.length)),S=[],E=null)},w=()=>{if(h.length>0){const B=h.length>0,U=B?h[0]:null,F=B?h.slice(1):h;m.push(g.jsx("div",{className:"overflow-x-auto my-6",children:g.jsxs("table",{className:"min-w-full border-collapse border border-gray-300 dark:border-gray-600",children:[U&&g.jsx("thead",{className:"bg-gray-100 dark:bg-gray-700",children:g.jsx("tr",{children:U.map((V,I)=>g.jsx("th",{className:"border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-bold text-gray-900 dark:text-white",children:c(V.trim())},I))})}),g.jsx("tbody",{children:F.map((V,I)=>g.jsx("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:V.map((_,G)=>g.jsx("td",{className:"border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300",children:c(_.trim())},G))},I))})]})},m.length)),h=[],y=!1}};return f.forEach((B,U)=>{const F=B.trim(),V=B;if(F.includes("|")){if(j(),/^\|[\s-|]+\|$/.test(F))return;const I=F.split("|").filter(_=>_.trim()).map(_=>_.trim());I.length>0&&(h.push(I),y=!0);return}if(y&&w(),!F){j(),w(),m.length>0&&m.push(g.jsx("div",{className:"h-2"},`space-${U}`));return}if(/^\d+\.\s+/.test(F)||/^\*\*\d+\.\*\*/.test(F)){E!=="ol"&&(j(),E="ol");const I=F.replace(/^\d+\.\s+/,"").replace(/^\*\*\d+\.\*\*\s*/,"");S.push(I);return}if(/^[-*]\s+/.test(F)||/^\s{2,}[-*]\s+/.test(V)){E!=="ul"&&(j(),E="ul");const I=F.replace(/^[-*]\s+/,"");S.push(I);return}if(j(),F.startsWith("###")){m.push(g.jsx("h4",{className:"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3",children:c(F.replace(/^###\s*/,""))},U));return}if(/^\*\*[^*]+:\*\*$/.test(F)){m.push(g.jsx("h4",{className:"text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3",children:c(F)},U));return}m.push(g.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed mb-4",children:c(F)},U))}),j(),w(),m},c=s=>{if(!s)return null;const f=[];let m=s;for(;m.length>0;){const S=m.match(/\*\*(.+?)\*\*/),E=m.match(/`(.+?)`/);let y=null,h=null;if(S&&E?S.index<E.index?(y=S,h="bold"):(y=E,h="code"):S?(y=S,h="bold"):E&&(y=E,h="code"),y)y.index>0&&f.push({type:"text",content:m.substring(0,y.index)}),f.push({type:h,content:y[1]}),m=m.substring(y.index+y[0].length);else{f.push({type:"text",content:m});break}}return f.map((S,E)=>S.type==="bold"?g.jsx("strong",{className:"font-bold text-gray-900 dark:text-white",children:S.content},E):S.type==="code"?g.jsx("code",{className:"px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono text-blue-600 dark:text-blue-400",children:S.content},E):g.jsx("span",{children:S.content},E))};return g.jsx("div",{className:"formatted-content",children:d(o)})}const Bk={"pengenalan-setup":xk,"dasar-java":Tk,"method-function":Ak,oop:Ck,"gui-dasar":wk,"gui-lanjutan":Dk,database:Mk,"file-handling":Lk,"exception-debugging":jk,"best-practices":Ok,"project-akhir":Nk};function Pk(){const{slug:o}=zh(),d=Je.find(E=>E.slug===o),c=Bk[o];if(!d)return g.jsxs("div",{className:"text-center py-12",children:[g.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-4",children:"Modul tidak ditemukan"}),g.jsx(qa,{to:"/modules",className:"text-blue-600 hover:underline",children:"Kembali ke daftar modul"})]});const s=Je.findIndex(E=>E.slug===o),f=s>0?Je[s-1]:null,m=s<Je.length-1?Je[s+1]:null,S={Pemula:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",Menengah:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",Lanjutan:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"};return g.jsxs("div",{className:"max-w-4xl mx-auto",children:[g.jsxs("nav",{className:"flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6",children:[g.jsx(qa,{to:"/",className:"hover:text-blue-600 dark:hover:text-blue-400",children:"Beranda"}),g.jsx("span",{children:"/"}),g.jsx(qa,{to:"/modules",className:"hover:text-blue-600 dark:hover:text-blue-400",children:"Modul"}),g.jsx("span",{children:"/"}),g.jsxs("span",{className:"text-gray-900 dark:text-white",children:["Modul ",d.id]})]}),g.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8",children:[g.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[g.jsx("span",{className:"flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-bold text-lg",children:d.id}),g.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-semibold ${S[d.level]}`,children:d.level})]}),g.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4",children:d.title}),g.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 mb-6",children:d.description}),g.jsxs("div",{className:"flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx(jp,{size:18,className:"mr-2"}),d.duration]}),g.jsxs("div",{className:"flex items-center",children:[g.jsx(Ui,{size:18,className:"mr-2"}),d.topics.length," topik"]})]})]}),c?g.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8",children:g.jsx("div",{className:"max-w-none",children:c.sections.map((E,y)=>g.jsxs("div",{className:"mb-12 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-0",children:[g.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",children:[g.jsx("span",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold text-sm mr-3",children:y+1}),E.title]}),g.jsx("div",{className:"ml-0",children:g.jsx(Rk,{content:E.content})}),E.code&&g.jsx(_s,{code:E.code.content||E.code.code,language:E.code.language,filename:E.code.filename}),(E.afterCode||E.additionalContent)&&g.jsx("div",{className:"text-gray-700 dark:text-gray-300 leading-relaxed mt-4",dangerouslySetInnerHTML:{__html:E.afterCode||E.additionalContent}}),(E.code2||E.additionalCode)&&g.jsx(_s,{code:E.code2?.content||E.code2?.code||E.additionalCode?.content||E.additionalCode?.code,language:E.code2?.language||E.additionalCode?.language,filename:E.code2?.filename||E.additionalCode?.filename}),(E.afterCode2||E.additionalContent2)&&g.jsx("div",{className:"text-gray-700 dark:text-gray-300 leading-relaxed mt-4",dangerouslySetInnerHTML:{__html:E.afterCode2||E.additionalContent2}}),E.additionalCode2&&g.jsx(_s,{code:E.additionalCode2.content||E.additionalCode2.code,language:E.additionalCode2.language,filename:E.additionalCode2.filename})]},E.id))})}):g.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-8 mb-8",children:[g.jsx("h3",{className:"text-xl font-bold text-yellow-900 dark:text-yellow-200 mb-2",children:"Konten Dalam Pengembangan"}),g.jsx("p",{className:"text-yellow-800 dark:text-yellow-300",children:"Materi untuk modul ini sedang dalam proses pembuatan. Silakan cek modul lain atau kembali lagi nanti!"})]}),g.jsxs("div",{className:"flex justify-between items-center gap-4",children:[f?g.jsxs(qa,{to:`/module/${f.slug}`,className:"flex items-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors flex-1",children:[g.jsx(zb,{size:20}),g.jsxs("div",{className:"text-left",children:[g.jsx("div",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Sebelumnya"}),g.jsx("div",{className:"font-semibold text-gray-900 dark:text-white",children:f.title})]})]}):g.jsx("div",{className:"flex-1"}),m?g.jsxs(qa,{to:`/module/${m.slug}`,className:"flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex-1 text-right",children:[g.jsxs("div",{className:"text-right flex-1",children:[g.jsx("div",{className:"text-xs opacity-90",children:"Selanjutnya"}),g.jsx("div",{className:"font-semibold",children:m.title})]}),g.jsx(Bi,{size:20})]}):g.jsxs(qa,{to:"/modules",className:"flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors",children:[g.jsx("span",{className:"font-semibold",children:"Selesai! Lihat Semua Modul"}),g.jsx(Bi,{size:20})]})]})]})}function Jk(){const[o,d]=M.useState(!1),c=()=>d(!o),s=()=>d(!1);return g.jsx(Db,{children:g.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[g.jsx(kk,{toggleSidebar:c,sidebarOpen:o}),g.jsx(Sk,{isOpen:o,closeSidebar:s}),g.jsx("main",{className:"lg:ml-64 pt-16",children:g.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-8",children:g.jsxs(lb,{children:[g.jsx(sr,{path:"/",element:g.jsx(yk,{})}),g.jsx(sr,{path:"/modules",element:g.jsx(Ek,{})}),g.jsx(sr,{path:"/module/:slug",element:g.jsx(Pk,{})})]})})}),g.jsx("footer",{className:"lg:ml-64 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12",children:g.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-6",children:g.jsxs("div",{className:"text-center text-gray-600 dark:text-gray-400",children:[g.jsx("p",{className:"mb-2",children:"© 2024 Pembelajaran Pemrograman Desktop - Universitas Terbuka"}),g.jsx("p",{className:"text-sm",children:"Dibuat dengan ❤️ untuk mahasiswa UT"})]})})})]})})}ch.createRoot(document.getElementById("root")).render(g.jsx(M.StrictMode,{children:g.jsx(Jk,{})}));
