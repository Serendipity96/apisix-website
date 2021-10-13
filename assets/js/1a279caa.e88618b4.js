"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56163],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,b=f["".concat(i,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(b,c(c({ref:t},l),{},{components:r})):n.createElement(b,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33551:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},assets:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c={title:"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03",author:"\u7f57\u6cfd\u8f69",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","Release Notes"],description:"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03\uff01\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f7f\u7528\u3002",tags:["news"]},u=void 0,i={permalink:"/blog/2021/05/25/Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03",source:"@site/blog/2021-05-25-Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03.md",title:"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03",description:"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03\uff01\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f7f\u7528\u3002",date:"2021-05-25T00:00:00.000Z",formattedDate:"May 25, 2021",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:1.06,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90",permalink:"/blog/2021/05/31/\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90"},nextItem:{title:"\u652f\u6301 10 \u4ebf\u65e5\u6d41\u91cf\u7684\u57fa\u7840\u8bbe\u65bd\uff1a\u5f53 Apahce APISIX \u9047\u4e0a\u817e\u8baf",permalink:"/blog/2021/05/24/Tencent-Games"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03\uff01\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f7f\u7528\u3002")))}f.isMDXComponent=!0}}]);