"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59852],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),h=i,f=b["".concat(l,".").concat(h)]||b[h]||u[h]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80712:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return b}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o={title:"How to Improve the Observability of Nginx with Apache APISX",author:"Wei Jin",authorURL:"https://github.com/gxthrj",authorImageURL:"https://avatars.githubusercontent.com/u/4413028?v=4",keywords:["API Gateway","APISIX","Apache APISIX","Nginx","observability"],description:"Best Practices: This article shares solutions and practices for observability in the context of Nginx observability, the relationship between Apache APISIX and Nginx, Apache APISIX observability, and further enhancing observability with Apache SkyWalking.",tags:["Practical Case"]},c=void 0,l={permalink:"/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx",source:"@site/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx.md",title:"How to Improve the Observability of Nginx with Apache APISX",description:"Best Practices: This article shares solutions and practices for observability in the context of Nginx observability, the relationship between Apache APISIX and Nginx, Apache APISIX observability, and further enhancing observability with Apache SkyWalking.",date:"2021-08-06T00:00:00.000Z",formattedDate:"August 6, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:13.03,truncated:!0,authors:[{name:"Wei Jin",url:"https://github.com/gxthrj",imageURL:"https://avatars.githubusercontent.com/u/4413028?v=4"}],prevItem:{title:"\u820d\u5f03 Kong \u548c Nginx\uff0cApache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u843d\u5730\u5b9e\u8df5",permalink:"/blog/2021/08/09/Apache-APISIX-in-Quliankeji"},nextItem:{title:"Kong-To-APISIX Migration Tool",permalink:"/blog/2021/08/05/Kong-to-APISIX"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p};function b(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article shares solutions and practices for observability in the context of Nginx observability, the relationship between Apache APISIX and Nginx, Apache APISIX observability, and further enhancing observability in conjunction with Apache SkyWalking.")))}b.isMDXComponent=!0}}]);