// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t=Math.floor,o="function"==typeof Math.fround?Math.fround:null,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,r=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol:void 0,l="function"==typeof f?f.toStringTag:"",u=n&&"symbol"==typeof Symbol.toStringTag?function(t){var o,n,f,u,i;if(null==t)return e.call(t);n=t[l],i=l,o=null!=(u=t)&&r.call(u,i);try{t[l]=void 0}catch(o){return e.call(t)}return f=e.call(t),o?t[l]=n:delete t[l],f}:function(t){return e.call(t)},i="function"==typeof Float32Array,a=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null,y="function"==typeof Float32Array?Float32Array:void 0,p=new(function(){var t,o,n;if("function"!=typeof c)return!1;try{o=new c([1,3.14,-3.14,5e40]),n=o,t=(i&&n instanceof Float32Array||"[object Float32Array]"===u(n))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===a}catch(o){t=!1}return t}()?y:function(){throw new Error("not implemented")})(1),d="function"==typeof o?o:function(t){return p[0]=t,p[0]},b=[0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578,5702887,9227465,14930352];return function(o){return(n=o)!=n||!1===function(o){return o=d(o),t(o)===o}(o)||o<0||o>36?NaN:b[o];var n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).fibonaccif=o();
//# sourceMappingURL=browser.js.map
