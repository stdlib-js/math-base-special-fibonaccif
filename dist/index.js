"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(s){throw (e=0, s)}};};var t=i(function(C,n){n.exports=[0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578,5702887,9227465,14930352]});var u=i(function(A,a){
var f=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-assert-is-nonnegative-integerf/dist'),N=require('@stdlib/constants-float32-max-safe-nth-fibonacci/dist'),c=t();function o(r){return f(r)||!v(r)||r>N?NaN:c[r]}a.exports=o
});var q=u();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
