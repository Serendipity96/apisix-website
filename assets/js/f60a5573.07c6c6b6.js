"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28684],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),g=o,m=s["".concat(u,".").concat(g)]||s[g]||f[g]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},11877:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i={title:"Apache APISIX \u67b6\u6784\u5206\u6790\uff1a\u5982\u4f55\u52a8\u6001\u7ba1\u7406 Nginx \u96c6\u7fa4\uff1f",author:"\u9676\u8f89",keywords:["API \u7f51\u5173","Apache APISIX","Nginx","Lua","\u52a8\u6001\u7ba1\u7406"],date:"2021-08-10",description:"\u672c\u6587\u8f6c\u53d1\u81ea\u9676\u8f89\u4e2a\u4eba\u535a\u5ba2\uff0c\u4e3b\u8981\u4ecb\u7ecd\u4e86\u57fa\u4e8eAPISIX 2.8 \u7248\u672c\u3001OpenResty 1.19.3.2 \u7248\u672c\u4ee5\u53ca Nginx 1.19.3 \u7248\u672c\u8fdb\u884c Apache APISIX \u5b9e\u73b0 REST API \u8fdc\u7a0b\u63a7\u5236 Nginx \u96c6\u7fa4\u7684\u539f\u7406\u8bb2\u89e3\u3002",tags:["technology"]},c=void 0,u={permalink:"/blog/2021/08/10/apisix-nginx",source:"@site/blog/2021-08-10-apisix-nginx.md",title:"Apache APISIX \u67b6\u6784\u5206\u6790\uff1a\u5982\u4f55\u52a8\u6001\u7ba1\u7406 Nginx \u96c6\u7fa4\uff1f",description:"\u672c\u6587\u8f6c\u53d1\u81ea\u9676\u8f89\u4e2a\u4eba\u535a\u5ba2\uff0c\u4e3b\u8981\u4ecb\u7ecd\u4e86\u57fa\u4e8eAPISIX 2.8 \u7248\u672c\u3001OpenResty 1.19.3.2 \u7248\u672c\u4ee5\u53ca Nginx 1.19.3 \u7248\u672c\u8fdb\u884c Apache APISIX \u5b9e\u73b0 REST API \u8fdc\u7a0b\u63a7\u5236 Nginx \u96c6\u7fa4\u7684\u539f\u7406\u8bb2\u89e3\u3002",date:"2021-08-10T00:00:00.000Z",formattedDate:"August 10, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:8.295,truncated:!0,authors:[{name:"\u9676\u8f89"}],prevItem:{title:"\u4ece\u65b0\u624b\u6751\u51fa\u6765\uff0c\u6211\u5728 Apache APISIX \u793e\u533a\u53d1\u51fa\u4e86\u7b2c\u4e00\u4e2a PR",permalink:"/blog/2021/08/11/interview-TuZhengsong"},nextItem:{title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u7684\u5e94\u7528",permalink:"/blog/2021/08/09/Apache-APISIX-in-China-Mobile-Cloud"}},p={authorsImageUrls:[void 0]},l=[],f={toc:l};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u8f6c\u53d1\u81ea\u9676\u8f89\u4e2a\u4eba\u535a\u5ba2\uff0c\u4e3b\u8981\u4ecb\u7ecd\u4e86\u57fa\u4e8e APISIX 2.8 \u7248\u672c\u3001OpenResty 1.19.3.2 \u7248\u672c\u4ee5\u53ca Nginx 1.19.3 \u7248\u672c\u8fdb\u884c Apache APISIX \u5b9e\u73b0 REST API \u8fdc\u7a0b\u63a7\u5236 Nginx \u96c6\u7fa4\u7684\u539f\u7406\u8bb2\u89e3\u3002")))}s.isMDXComponent=!0}}]);