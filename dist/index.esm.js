function r(r){return!!r&&"object"==typeof r}function e(r){return!!r&&"object"==typeof r&&"$$typeof"in r}var t,n=((t={})[Symbol.for("react.fragment")]="React.Fragment",t[Symbol.for("react.memo")]="Memo",t[Symbol.for("react.context")]="Consumer",t[Symbol.for("react.provider")]="Provider",t[Symbol.for("react.forward_ref")]="ForwardRef",t);function o(r){return r&&r in n?n[r]:""}function f(r,e){return e&&e in n?""+o(e)+r:r}function i(r,t){return void 0===t&&(t="UNDEFINED"),"string"==typeof r?r:"symbol"==typeof r?r in n?n[r]:t:function(r){return e(r)&&(r.$$typeof===Symbol.for("react.context")||r.$$typeof===Symbol.for("react.provider"))}(r)?(a=r._context.displayName||"Context",((p=r.$$typeof)&&p in n?a+"."+o(p):a)||t):function(r){return e(r)&&r.$$typeof===Symbol.for("react.forward_ref")}(r)?r.displayName||f(r.render?i(r.render,""):"",r.$$typeof)||t:e(r)?r.displayName||f(r.type?i(r.type):"",r.$$typeof)||t:r.displayName||r.name||t;var a,p}function a(){return a=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},a.apply(this,arguments)}var p=["children"];function y(r){return function(r,e){if(null==r)return{};var t,n,o={},f=Object.keys(r);for(n=0;n<f.length;n++)e.indexOf(t=f[n])>=0||(o[t]=r[t]);return o}(r,p)}function u(r){if("object"!=typeof r||null==r)return r;var e=r.key,t=r.ref,n={type:i(r.type),props:y(a({},r.props,e&&{key:e},t&&{ref:t})),children:c(r.props)};return Object.defineProperty(n,"$$typeof",{value:Symbol.for("react.test.json")}),n}function c(r){var e=r.children;return null==e?e:Array.isArray(e)?e.flat().map(u):[u(e)]}function l(r,e){return void 0===e&&(e=1),"string"==typeof r?r:(t={type:i(r.type),props:y(r.props),children:e>0?s(r.rendered,e):c(r.props)},Object.defineProperty(t,"$$typeof",{value:Symbol.for("react.test.json")}),t);var t}function d(r,e){return"string"==typeof r||"host"===r.nodeType?e:e-1}function s(r,e){return void 0===e&&(e=1),r?Array.isArray(r)?r.filter(function(r){return null!==r}).map(function(r){return l(r,d(r,e))}):[l(r,d(r,e))]:null}function m(e,t){if(void 0===t&&(t={}),!e)return null;var n=t.depth,o=t.skipRoot,f=void 0===o||o,i=s(e,void 0===n?1:n);return f&&(i=Array.isArray(i)?i.filter(r).flatMap(function(r){return r.children?r.children:[]}):r(i)?i.children:null),Array.isArray(i)&&1===i.length?i[0]:i}export{m as shallowJSON};
//# sourceMappingURL=index.esm.js.map
