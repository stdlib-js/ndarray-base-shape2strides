// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,i=n.__lookupSetter__;var c=t,f=function(e,r,t){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(l.call(e,r)||i.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},_=r()?c:f;var p=function(e,r){return"column-major"===r?function(e){var r,t,n;for(r=[],t=1,n=0;n<e.length;n++)r.push(t),t*=e[n];return r}(e):function(e){var r,t,n,o;for(r=e.length,t=[],o=0;o<r;o++)t.push(0);for(n=1,o=r-1;o>=0;o--)t[o]=n,n*=e[o];return t}(e)},v=function(e,r,t){return"column-major"===r?function(e,r){var t,n;for(t=1,n=0;n<e.length;n++)r[n]=t,t*=e[n];return r}(e,t):function(e,r){var t,n;for(t=1,n=e.length-1;n>=0;n--)r[n]=t,t*=e[n];return r}(e,t)};(function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})})(p,"assign",v);var b=p;export{v as assign,b as default};
//# sourceMappingURL=mod.js.map
