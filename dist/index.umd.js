!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e||self).reactTestRendererShallowJson={})}(this,function(e){function r(e){return!!e&&"object"==typeof e&&"$$typeof"in e}var t,n=((t={})[Symbol.for("react.fragment")]="React.Fragment",t[Symbol.for("react.memo")]="Memo",t[Symbol.for("react.context")]="Consumer",t[Symbol.for("react.provider")]="Provider",t[Symbol.for("react.forward_ref")]="ForwardRef",t);function o(e){return e&&e in n?n[e]:""}function f(e,r){return r&&r in n?""+o(r)+e:e}function i(e,t){return void 0===t&&(t="UNDEFINED"),"string"==typeof e?e:"symbol"==typeof e?e in n?n[e]:t:function(e){return r(e)&&(e.$$typeof===Symbol.for("react.context")||e.$$typeof===Symbol.for("react.provider"))}(e)?(p=e._context.displayName||"Context",((a=e.$$typeof)&&a in n?p+"."+o(a):p)||t):function(e){return r(e)&&e.$$typeof===Symbol.for("react.forward_ref")}(e)?e.displayName||f(e.render?i(e.render,""):"",e.$$typeof)||t:r(e)?(e.$$typeof===Symbol.for("react.forward_ref")&&console.log(e),e.displayName||f(e.type?i(e.type):"",e.$$typeof)||t):e.displayName||e.name||t;var p,a}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}var a=["children"];function y(e){return function(e,r){if(null==e)return{};var t,n,o={},f=Object.keys(e);for(n=0;n<f.length;n++)r.indexOf(t=f[n])>=0||(o[t]=e[t]);return o}(e,a)}function u(e){if("string"==typeof e)return e;var r=e.key,t={type:i(e.type),props:y(p({},e.props,r&&{key:r})),children:c(e.props)};return Object.defineProperty(t,"$$typeof",{value:Symbol.for("react.test.json")}),t}function c(e){var r=e.children;return r?Array.isArray(r)?r.map(u):[u(r)]:null}function l(e,r){if(void 0===r&&(r=1),"string"==typeof e)return e;var t={type:i(e.type),props:y(e.props),children:r?d(e.rendered,r):c(e.props)};return Object.defineProperty(t,"$$typeof",{value:Symbol.for("react.test.json")}),t}function s(e,r){return"string"==typeof e||"host"===e.nodeType?r:r-1}function d(e,r){return void 0===r&&(r=1),e?Array.isArray(e)?e.map(function(e){return l(e,s(e,r))}):[l(e,s(e,r))]:null}function m(e,r){if(void 0===r&&(r=1),!e)return null;var t={type:i(e.type),props:y(e.props),children:d(e.rendered,s(e,r))};return Object.defineProperty(t,"$$typeof",{value:Symbol.for("react.test.json")}),t}e.shallowJSON=function(e,r){return void 0===r&&(r=1),e?Array.isArray(e)?e.map(function(e){return m(e,r)}):m(e,r):null}});
//# sourceMappingURL=index.umd.js.map