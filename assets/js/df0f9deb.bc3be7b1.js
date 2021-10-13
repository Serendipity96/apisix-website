"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6386],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),h=o,m=f["".concat(u,".").concat(h)]||f[h]||s[h]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84717:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"\u63d2\u4ef6\u7f16\u6392\u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",author:"\u741a\u81f4\u8fdc",authorURL:"https://github.com/juzhiyuan",authorImageURL:"https://avatars.githubusercontent.com/u/2106987?v=4",keywords:["API \u7f51\u5173","APISIX","\u63d2\u4ef6\u7f16\u6392","Apache APISIX Dashboard"],description:"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3 Apache APISIX \u4e0e\u57fa\u672c\u4f7f\u7528\u573a\u666f\uff0c\u4ee5\u53ca\u5728\u4f4e\u4ee3\u7801\u6f6e\u6d41\u4e0b\uff0cApache APISIX \u662f\u5982\u4f55\u96c6\u6210\u201c\u62d6\u62fd\u201d\u7684\u63d2\u4ef6\u7f16\u6392\u80fd\u529b\u7684\u3002\u672c\u6587\u4f5c\u8005\u741a\u81f4\u8fdc\uff0cApache APISIX PMC\uff0c\u5728\u652f\u6d41\u79d1\u6280\u8d1f\u8d23\u4f01\u4e1a\u4ea7\u54c1\u4e0e\u5927\u524d\u7aef\u6280\u672f\u3002",tags:["technology"]},i=void 0,u={permalink:"/blog/2021/07/27/use-of-plugin-orchestration-in-Apache-APISIX",source:"@site/blog/2021-07-27-use-of-plugin-orchestration-in-Apache-APISIX.md",title:"\u63d2\u4ef6\u7f16\u6392\u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",description:"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3 Apache APISIX \u4e0e\u57fa\u672c\u4f7f\u7528\u573a\u666f\uff0c\u4ee5\u53ca\u5728\u4f4e\u4ee3\u7801\u6f6e\u6d41\u4e0b\uff0cApache APISIX \u662f\u5982\u4f55\u96c6\u6210\u201c\u62d6\u62fd\u201d\u7684\u63d2\u4ef6\u7f16\u6392\u80fd\u529b\u7684\u3002\u672c\u6587\u4f5c\u8005\u741a\u81f4\u8fdc\uff0cApache APISIX PMC\uff0c\u5728\u652f\u6d41\u79d1\u6280\u8d1f\u8d23\u4f01\u4e1a\u4ea7\u54c1\u4e0e\u5927\u524d\u7aef\u6280\u672f\u3002",date:"2021-07-27T00:00:00.000Z",formattedDate:"July 27, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:2.05,truncated:!0,authors:[{name:"\u741a\u81f4\u8fdc",url:"https://github.com/juzhiyuan",imageURL:"https://avatars.githubusercontent.com/u/2106987?v=4"}],prevItem:{title:"Apache APISIX 2.8 \u6b63\u5f0f\u53d1\u5e03\uff0c\u5e26\u6765\u66f4\u591a\u65b0\u529f\u80fd\uff01",permalink:"/blog/2021/07/28/release-apache-apisix-2.8"},nextItem:{title:"ApacheCon Asia 2021\uff1aApache APISIX \u6280\u672f\u8bae\u9898\u4e00\u89c8",permalink:"/blog/2021/07/25/apachecon-asia"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3 Apache APISIX \u4e0e\u57fa\u672c\u4f7f\u7528\u573a\u666f\uff0c\u4ee5\u53ca\u5728\u4f4e\u4ee3\u7801\u6f6e\u6d41\u4e0b\uff0cApache APISIX \u662f\u5982\u4f55\u96c6\u6210\u201c\u62d6\u62fd\u201d\u7684\u63d2\u4ef6\u7f16\u6392\u80fd\u529b\u7684\u3002\u672c\u6587\u4f5c\u8005\u741a\u81f4\u8fdc\uff0cApache APISIX PMC\uff0c\u5728\u652f\u6d41\u79d1\u6280\u8d1f\u8d23\u4f01\u4e1a\u4ea7\u54c1\u4e0e\u5927\u524d\u7aef\u6280\u672f\u3002")))}f.isMDXComponent=!0}}]);