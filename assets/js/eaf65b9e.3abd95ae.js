"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7517],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return g}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(t),g=o,m=f["".concat(p,".").concat(g)]||f[g]||s[g]||a;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},35062:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),c={title:"\u793e\u533a\u4f1a\u8bae\uff5c \u5468\u4e09\u4e0b\u5348 2 \u70b9\uff0cApache APISIX Ingress \u793e\u533a\u4f1a\u8bae\u4e0e\u4f60\u4e0d\u89c1\u4e0d\u6563",author:"Apache APISIX \u793e\u533a",keywords:["API \u7f51\u5173","APISIX","Ingress"],description:"Apache APISIX Ingress \u793e\u533a\u4f1a\u8bae\uff0c\u5efa\u7acb\u4e0e\u793e\u533a\u7528\u6237\u548c\u5f00\u53d1\u8005\u4eec\u7684\u6c9f\u901a\u6e20\u9053\uff0c\u5e2e\u52a9\u5927\u5bb6\u4e86\u89e3 Apache APISIX Ingress \u7684\u53d1\u5c55\u65b9\u5411\u548c\u5f00\u53d1\u8ba1\u5212\u3002",tags:["news"]},i={permalink:"/blog/2021/08/30/Ingress-Meeting",source:"@site/blog/2021-08-30-Ingress-Meeting.md",title:"\u793e\u533a\u4f1a\u8bae\uff5c \u5468\u4e09\u4e0b\u5348 2 \u70b9\uff0cApache APISIX Ingress \u793e\u533a\u4f1a\u8bae\u4e0e\u4f60\u4e0d\u89c1\u4e0d\u6563",description:"Apache APISIX Ingress \u793e\u533a\u4f1a\u8bae\uff0c\u5efa\u7acb\u4e0e\u793e\u533a\u7528\u6237\u548c\u5f00\u53d1\u8005\u4eec\u7684\u6c9f\u901a\u6e20\u9053\uff0c\u5e2e\u52a9\u5927\u5bb6\u4e86\u89e3 Apache APISIX Ingress \u7684\u53d1\u5c55\u65b9\u5411\u548c\u5f00\u53d1\u8ba1\u5212\u3002",date:"2021-08-30T00:00:00.000Z",formattedDate:"August 30, 2021",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:.52,truncated:!0,prevItem:{title:"Apache APISIX \xd7 KubeSphere\uff1a\u63d0\u4f9b\u66f4\u597d\u7528\u7684\u7f51\u5173\u53ca K8S Ingress Controller",permalink:"/blog/2021/08/31/Apache APISIX \xd7 KubeSphere-a-better-gateway-and-K8S-Ingress-Controller"},nextItem:{title:"Apache APISIX 2.9 \u6b63\u5f0f\u53d1\u5e03\uff0c\u5e26\u6765\u66f4\u591a\u65b0\u529f\u80fd\uff01",permalink:"/blog/2021/08/27/release-apache-apisix-2.9"}},p=[],l={toc:p};function u(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}))}u.isMDXComponent=!0}}]);