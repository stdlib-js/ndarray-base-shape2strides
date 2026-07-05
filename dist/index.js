"use strict";var u=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var s=u(function(M,o){
var c=require('@stdlib/ndarray-base-assert-is-column-major-string/dist');function m(i){var r,n,t,e;for(r=i.length,n=[],e=0;e<r;e++)n.push(0);for(t=1,e=r-1;e>=0;e--)n[e]=t,t*=i[e];return n}function l(i){var r,n,t;for(r=[],n=1,t=0;t<i.length;t++)r.push(n),n*=i[t];return r}function g(i,r){return c(r)?l(i):m(i)}o.exports=g
});var v=u(function(p,a){
var j=require('@stdlib/ndarray-base-assert-is-column-major-string/dist');function d(i,r){var n,t,e;for(n=i.length,t=1,e=n-1;e>=0;e--)r[e]=t,t*=i[e];return r}function q(i,r){var n,t;for(n=1,t=0;t<i.length;t++)r[t]=n,n*=i[t];return r}function x(i,r,n){return j(r)?q(i,n):d(i,n)}a.exports=x
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=s(),w=v();h(f,"assign",w);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
