"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58712],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,y=f["".concat(c,".").concat(m)]||f[m]||l[m]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47097:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i={title:"APISIX Ingress Enhancement Proposals (AEPs)"},s=void 0,c={unversionedId:"aeps/README",id:"aeps/README",isDocsHomePage:!1,title:"APISIX Ingress Enhancement Proposals (AEPs)",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/aeps/README.md",sourceDirName:"aeps",slug:"/aeps/README",permalink:"/zh/docs/ingress-controller/aeps/README",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/aeps/README.md",tags:[],version:"current",frontMatter:{title:"APISIX Ingress Enhancement Proposals (AEPs)"}},p=[],u={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document was inspired by the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements/tree/master/keps"},"Kubernetes Enhancement Proposals (KEPs)")," of the Kubernetes community."),(0,a.kt)("p",null,"By recording the long-term plan Proposal of the current Apache APISIX Ingress project in this directory, it is convenient for the community to participate in and contribute."),(0,a.kt)("p",null,"The most successful example before this is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/638"},"Proposal: add ApisixPluginConfig CRD"),". But this way is not friendly enough."))}l.isMDXComponent=!0}}]);