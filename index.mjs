// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function r(n,r){return"column-major"===r?function(n){var r,t,e;for(r=[],t=1,e=0;e<n.length;e++)r.push(t),t*=n[e];return r}(n):function(n){var r,t,e,o;for(r=n.length,t=[],o=0;o<r;o++)t.push(0);for(e=1,o=r-1;o>=0;o--)t[o]=e,e*=n[o];return t}(n)}function t(n,r,t){return"column-major"===r?function(n,r){var t,e;for(t=1,e=0;e<n.length;e++)r[e]=t,t*=n[e];return r}(n,t):function(n,r){var t,e;for(t=1,e=n.length-1;e>=0;e--)r[e]=t,t*=n[e];return r}(n,t)}n(r,"assign",t);export{t as assign,r as default};
//# sourceMappingURL=index.mjs.map
