"use strict";var u=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var s=u(function(w,e){
function f(n){var r,t,i,o;for(r=n.length,t=[],o=0;o<r;o++)t.push(0);for(i=1,o=r-1;o>=0;o--)t[o]=i,i*=n[o];return t}function m(n){var r,t,i;for(r=[],t=1,i=0;i<n.length;i++)r.push(t),t*=n[i];return r}function l(n,r){return r==="column-major"?m(n):f(n)}e.exports=l
});var v=u(function(p,a){
function g(n,r){var t,i,o;for(t=n.length,i=1,o=t-1;o>=0;o--)r[o]=i,i*=n[o];return r}function j(n,r){var t,i;for(t=1,i=0;i<n.length;i++)r[i]=t,t*=n[i];return r}function d(n,r,t){return r==="column-major"?j(n,t):g(n,t)}a.exports=d
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=s(),x=v();q(c,"assign",x);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
