function r(r){return!!r&&"object"==typeof r&&"$$typeof"in r}const e={[Symbol.for("react.fragment")]:"React.Fragment",[Symbol.for("react.memo")]:"Memo",[Symbol.for("react.context")]:"Consumer",[Symbol.for("react.provider")]:"Provider",[Symbol.for("react.forward_ref")]:"ForwardRef"};function t(r){return r&&r in e?e[r]:""}function n(r,n){return n&&n in e?`${t(n)}${r}`:r}function o(f,p="UNDEFINED"){return"string"==typeof f?f:"symbol"==typeof f?f in e?e[f]:p:function(e){return r(e)&&(e.$$typeof===Symbol.for("react.context")||e.$$typeof===Symbol.for("react.provider"))}(f)?(y=f._context.displayName||"Context",((c=f.$$typeof)&&c in e?`${y}.${t(c)}`:y)||p):function(e){return r(e)&&e.$$typeof===Symbol.for("react.forward_ref")}(f)?f.displayName||n(f.render?o(f.render,""):"",f.$$typeof)||p:r(f)?(f.$$typeof===Symbol.for("react.forward_ref")&&console.log(f),f.displayName||n(f.type?o(f.type):"",f.$$typeof)||p):f.displayName||f.name||p;var y,c}function f(){return f=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},f.apply(this,arguments)}const p=["children"];function y(r){return function(r,e){if(null==r)return{};var t,n,o={},f=Object.keys(r);for(n=0;n<f.length;n++)e.indexOf(t=f[n])>=0||(o[t]=r[t]);return o}(r,p)}function c(r){if("string"==typeof r)return r;const{key:e}=r,t={type:o(r.type),props:y(f({},r.props,e&&{key:e})),children:i(r.props)};return Object.defineProperty(t,"$$typeof",{value:Symbol.for("react.test.json")}),t}function i(r){const{children:e}=r;return e?Array.isArray(e)?e.map(c):[c(e)]:null}function a(r,e=1){if("string"==typeof r)return r;const t={type:o(r.type),props:y(r.props),children:e?l(r.rendered,e):i(r.props)};return Object.defineProperty(t,"$$typeof",{value:Symbol.for("react.test.json")}),t}function u(r,e){return"string"==typeof r||"host"===r.nodeType?e:e-1}function l(r,e=1){return r?Array.isArray(r)?r.map(r=>a(r,u(r,e))):[a(r,u(r,e))]:null}function s(r,e=1){return r?Array.isArray(r)?r.map(r=>d(r,e)):d(r,e):null}function d(r,e=1){if(!r)return null;const t={type:o(r.type),props:y(r.props),children:l(r.rendered,u(r,e))};return Object.defineProperty(t,"$$typeof",{value:Symbol.for("react.test.json")}),t}export{s as shallowJSON};
//# sourceMappingURL=index.modern.mjs.map