function r(r){return!!r&&"object"==typeof r&&"$$typeof"in r}var e,t=((e={})[Symbol.for("react.fragment")]="React.Fragment",e[Symbol.for("react.memo")]="Memo",e[Symbol.for("react.context")]="Consumer",e[Symbol.for("react.provider")]="Provider",e[Symbol.for("react.forward_ref")]="ForwardRef",e);function o(r){return r&&r in t?t[r]:""}function n(r,e){return e&&e in t?""+o(e)+r:r}function f(e,p){return void 0===p&&(p="UNDEFINED"),"string"==typeof e?e:"symbol"==typeof e?e in t?t[e]:p:function(e){return r(e)&&(e.$$typeof===Symbol.for("react.context")||e.$$typeof===Symbol.for("react.provider"))}(e)?(i=e._context.displayName||"Context",((y=e.$$typeof)&&y in t?i+"."+o(y):i)||p):function(e){return r(e)&&e.$$typeof===Symbol.for("react.forward_ref")}(e)?e.displayName||n(e.render?f(e.render,""):"",e.$$typeof)||p:r(e)?(e.$$typeof===Symbol.for("react.forward_ref")&&console.log(e),e.displayName||n(e.type?f(e.type):"",e.$$typeof)||p):e.displayName||e.name||p;var i,y}var p=["children"];function i(r){return function(r,e){if(null==r)return{};var t,o,n={},f=Object.keys(r);for(o=0;o<f.length;o++)e.indexOf(t=f[o])>=0||(n[t]=r[t]);return n}(r,p)}function y(r){if("string"==typeof r)return r;var e={type:f(r.type),props:i(r.props),children:a(r.props)};return Object.defineProperty(e,"$$typeof",{value:Symbol.for("react.test.json")}),e}function a(r){var e=r.children;return e?Array.isArray(e)?e.map(y):[y(e)]:null}function u(r,e){if(void 0===e&&(e=1),"string"==typeof r)return r;var t={type:f(r.type),props:i(r.props),children:e?l(r.rendered,e):a(r.props)};return Object.defineProperty(t,"$$typeof",{value:Symbol.for("react.test.json")}),t}function c(r,e){return"string"==typeof r||"host"===r.nodeType?e:e-1}function l(r,e){return void 0===e&&(e=1),r?Array.isArray(r)?r.map(function(r){return u(r,c(r,e))}):[u(r,c(r,e))]:null}function d(r,e){return void 0===e&&(e=1),r?Array.isArray(r)?r.map(function(r){return s(r,e)}):s(r,e):null}function s(r,e){if(void 0===e&&(e=1),!r)return null;var t={type:f(r.type),props:i(r.props),children:l(r.rendered,c(r,e))};return Object.defineProperty(t,"$$typeof",{value:Symbol.for("react.test.json")}),t}export{d as shallowJSON};
//# sourceMappingURL=index.esm.js.map
