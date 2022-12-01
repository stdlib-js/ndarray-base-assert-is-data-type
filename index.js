// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isDataType=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||c.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),p="get"in r,s="set"in r,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),s&&u&&u.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var p=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function s(){return p.slice()}function y(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function b(t,e,r){l(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function v(t){return Object.keys(Object(t))}var g=void 0!==Object.keys;var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return d&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;function w(t,e){return null!=t&&j.call(t,e)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var O,S=m()?function(t){var e,r,n;if(null==t)return h.call(t);r=t[_],e=w(t,_);try{t[_]=void 0}catch(e){return h.call(t)}return n=h.call(t),e?t[_]=r:delete t[_],n}:function(t){return h.call(t)};function E(t){return"[object Arguments]"===S(t)}O=function(){return E(arguments)}();var T=O;function I(t){return"string"==typeof t}var x=String.prototype.valueOf;var P=m();function A(t){return"object"==typeof t&&(t instanceof String||(P?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object String]"===S(t)))}function N(t){return I(t)||A(t)}function k(t){return"number"==typeof t}a(N,"isPrimitive",I),a(N,"isObject",A);var B=Number,V=B.prototype.toString;var F=m();function L(t){return"object"==typeof t&&(t instanceof B||(F?function(t){try{return V.call(t),!0}catch(t){return!1}}(t):"[object Number]"===S(t)))}function G(t){return k(t)||L(t)}function Y(t){return t!=t}function C(t){return k(t)&&Y(t)}function M(t){return L(t)&&Y(t.valueOf())}function X(t){return C(t)||M(t)}a(G,"isPrimitive",k),a(G,"isObject",L),a(X,"isPrimitive",C),a(X,"isObject",M);var D=Number.POSITIVE_INFINITY,H=B.NEGATIVE_INFINITY,W=Math.floor;function R(t){return W(t)===t}function U(t){return t<D&&t>H&&R(t)}function q(t){return k(t)&&U(t)}function z(t){return L(t)&&U(t.valueOf())}function J(t){return q(t)||z(t)}a(J,"isPrimitive",q),a(J,"isObject",z);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(t,e){var r;return null!=t&&(!(r=K.call(t,e))&&Q&&N(t)?!C(e=+e)&&q(e)&&e>=0&&e<t.length:r)}var $=Array.isArray?Array.isArray:function(t){return"[object Array]"===S(t)};var tt=T?E:function(t){return null!==t&&"object"==typeof t&&!$(t)&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=4294967295&&w(t,"callee")&&!Z(t,"callee")},et=Array.prototype.slice;function rt(t){return null!==t&&"object"==typeof t}var nt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!$(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(rt);a(rt,"isObjectLikeArray",nt);var ot=Z((function(){}),"prototype"),it=!Z({toString:null},"toString");function ut(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}function ft(t,e,r){var n,o;if(!ut(t)&&!I(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!q(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(X(e)){for(;o<n;o++)if(X(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var ct=/./;function lt(t){return"boolean"==typeof t}var at=Boolean.prototype.toString;var pt=m();function st(t){return"object"==typeof t&&(t instanceof Boolean||(pt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===S(t)))}function yt(t){return lt(t)||st(t)}function bt(){return new Function("return this;")()}a(yt,"isPrimitive",lt),a(yt,"isObject",st);var vt="object"==typeof self?self:null,gt="object"==typeof window?window:null,dt="object"==typeof global?global:null;var mt=function(t){if(arguments.length){if(!lt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return bt()}if(vt)return vt;if(gt)return gt;if(dt)return dt;throw new Error("unexpected error. Unable to resolve global object.")}(),ht=mt.document&&mt.document.childNodes,jt=Int8Array;function wt(){return/^\s*function\s*([^(]*)/i}var _t=/^\s*function\s*([^(]*)/i;function Ot(t){var e,r,n,o;if(("Object"===(r=S(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=_t.exec(n.toString()))return e[1]}return rt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(wt,"REGEXP",_t);var St="function"==typeof ct||"object"==typeof jt||"function"==typeof ht?function(t){return Ot(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Ot(t).toLowerCase():e};function Et(t){return t.constructor&&t.constructor.prototype===t}var Tt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],It="undefined"==typeof window?void 0:window;var xt=function(){var t;if("undefined"===St(It))return!1;for(t in It)try{-1===ft(Tt,t)&&w(It,t)&&null!==It[t]&&"object"===St(It[t])&&Et(It[t])}catch(t){return!0}return!1}(),Pt="undefined"!=typeof window;var At,Nt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];At=g?function(){return 2!==(v(arguments)||"").length}(1,2)?function(t){return tt(t)?v(et.call(t)):v(t)}:v:function(t){var e,r,n,o,i,u,f;if(o=[],tt(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!w(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!rt(t))return o;r=ot&&n}for(i in t)r&&"prototype"===i||!w(t,i)||o.push(String(i));if(it)for(e=function(t){if(!1===Pt&&!xt)return Et(t);try{return Et(t)}catch(t){return!1}}(t),f=0;f<Nt.length;f++)u=Nt[f],e&&"constructor"===u||!w(t,u)||o.push(String(u));return o};var kt=At;a(s,"enum",y),function(t,e){var r,n,o;for(r=kt(e),o=0;o<r.length;o++)b(t,n=r[o],e[n])}(s,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Bt=s(),Vt=Bt.length;return function(t){var e;for(e=0;e<Vt;e++)if(t===Bt[e])return!0;return!1}}));
//# sourceMappingURL=index.js.map
