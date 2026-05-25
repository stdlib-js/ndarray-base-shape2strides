"use strict";var u=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var s=u(function(M,o){
var c=require('@stdlib/ndarray-base-assert-is-column-major-string/dist');function m(n){var r,i,t,e;for(r=n.length,i=[],e=0;e<r;e++)i.push(0);for(t=1,e=r-1;e>=0;e--)i[e]=t,t*=n[e];return i}function l(n){var r,i,t;for(r=[],i=1,t=0;t<n.length;t++)r.push(i),i*=n[t];return r}function g(n,r){return c(r)?l(n):m(n)}o.exports=g
});var v=u(function(p,a){
var j=require('@stdlib/ndarray-base-assert-is-column-major-string/dist');function d(n,r){var i,t,e;for(i=n.length,t=1,e=i-1;e>=0;e--)r[e]=t,t*=n[e];return r}function q(n,r){var i,t;for(i=1,t=0;t<n.length;t++)r[t]=i,i*=n[t];return r}function x(n,r,i){return j(r)?q(n,i):d(n,i)}a.exports=x
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=s(),w=v();h(f,"assign",w);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
