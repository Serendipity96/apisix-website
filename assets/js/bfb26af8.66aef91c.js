(self.webpackChunk=self.webpackChunk||[]).push([[38935],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,h=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66010:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Authorization with Casbin in Apache APISIX",author:"Casbin Community & Apache APISIX Community",keywords:["API gateway","APISIX","Apache APISIX","Casbin","RBAC"],description:"When using Apache APISIX, you may want to add complex authorization logic to your application. In this article, we will use the built-in Casbin plugin (authz-casbin) of Apache APISIX to implement the role-based access control (RBAC) model.",tags:["technology","practical case"]},c={permalink:"/blog/2021/08/25/Auth-with-Casbin-in-Apache-APISIX",source:"@site/blog/2021-08-25-Auth-with-Casbin-in-Apache-APISIX.md",title:"Authorization with Casbin in Apache APISIX",description:"When using Apache APISIX, you may want to add complex authorization logic to your application. In this article, we will use the built-in Casbin plugin (authz-casbin) of Apache APISIX to implement the role-based access control (RBAC) model.",date:"2021-08-25T00:00:00.000Z",formattedDate:"August 25, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"practical case",permalink:"/blog/tags/practical-case"}],readingTime:5.625,truncated:!0,prevItem:{title:"Apache APISIX 2.9 \u6b63\u5f0f\u53d1\u5e03\uff0c\u5e26\u6765\u66f4\u591a\u65b0\u529f\u80fd\uff01",permalink:"/blog/2021/08/27/release-apache-apisix-2.9"},nextItem:{title:"\u4f7f\u7528 Apache APISIX \u7684 OpenID Connect \u63d2\u4ef6\u8fdb\u884c\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1",permalink:"/blog/2021/08/25/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication"}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0}}]);