function r(r){return!!r&&"object"==typeof r&&"$$typeof"in r}var e,t=((e={})[Symbol.for("react.fragment")]="React.Fragment",e[Symbol.for("react.memo")]="Memo",e[Symbol.for("react.context")]="Consumer",e[Symbol.for("react.provider")]="Provider",e[Symbol.for("react.forward_ref")]="ForwardRef",e);function n(r){return r&&r in t?t[r]:""}function o(r,e){return e&&e in t?""+n(e)+r:r}function f(e,i){return void 0===i&&(i="UNDEFINED"),"string"==typeof e?e:"symbol"==typeof e?e in t?t[e]:i:function(e){return r(e)&&(e.$$typeof===Symbol.for("react.context")||e.$$typeof===Symbol.for("react.provider"))}(e)?(p=e._context.displayName||"Context",((y=e.$$typeof)&&y in t?p+"."+n(y):p)||i):function(e){return r(e)&&e.$$typeof===Symbol.for("react.forward_ref")}(e)?e.displayName||o(e.render?f(e.render,""):"",e.$$typeof)||i:r(e)?(e.$$typeof===Symbol.for("react.forward_ref")&&console.log(e),e.displayName||o(e.type?f(e.type):"",e.$$typeof)||i):e.displayName||e.name||i;var p,y}function i(){return i=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},i.apply(this,arguments)}var p=["children"];function y(r){return function(r,e){if(null==r)return{};var t,n,o={},f=Object.keys(r);for(n=0;n<f.length;n++)e.indexOf(t=f[n])>=0||(o[t]=r[t]);return o}(r,p)}function a(r){if("string"==typeof r)return r;var e=r.key,t=r.ref,n={type:f(r.type),props:y(i({},r.props,e&&{key:e},t&&{ref:t})),children:u(r.props)};return Object.defineProperty(n,"$$typeof",{value:Symbol.for("react.test.json")}),n}function u(r){var e=r.children;return e?Array.isArray(e)?e.map(a):[a(e)]:null}function c(r){return Object.defineProperty(r,"$$typeof",{value:Symbol.for("react.test.json")}),r}function l(r,e){return void 0===e&&(e=1),"string"==typeof r?r:c({type:f(r.type),props:y(r.props),children:e?d(r.rendered,e):u(r.props)})}function s(r,e){return"string"==typeof r||"host"===r.nodeType?e:e-1}function d(r,e){return void 0===e&&(e=1),r?Array.isArray(r)?r.map(function(r){return l(r,s(r,e))}):[l(r,s(r,e))]:null}function m(r,e){return void 0===e&&(e=1),r?c({type:f(r.type),props:y(r.props),children:d(r.rendered,s(r,e))}):null}exports.shallowJSON=function(r,e){return void 0===e&&(e=1),r?Array.isArray(r)?r.map(function(r){return m(r,e)}):m(r,e):null};
//# sourceMappingURL=index.js.map
