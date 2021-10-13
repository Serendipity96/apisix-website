"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98173],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=i(r),m=o,y=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,p(p({ref:t},l),{},{components:r})):n.createElement(y,p({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},25684:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return i},toc:function(){return l},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),p={title:"Apache APISIX \u793e\u533a\u6210\u5458\u52a9\u529b openEuler \u53d1\u5e03\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248",keywords:["Apache APISIX","openEuler","APISIX","API Gateway","OpenResty","\u6b27\u62c9"],description:"\u6765\u81ea Apache APISIX \u793e\u533a\u7684\u7f57\u6cfd\u8f69\u548c\u6e29\u94ed\u5728 openEuler 9 \u6708 30 \u65e5\u53d1\u5e03\u7684\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248\uff08 openEuler 21.09\uff09\u4e2d\uff0c\u4e3a OpenResty \u8fc1\u79fb\u5de5\u4f5c\u4e2d\u505a\u4e86\u975e\u5e38\u591a\u7684\u8d21\u732e\uff0c\u8ba9 OpenResty \u53ef\u4ee5\u5728\u6b27\u62c9\u5f00\u6e90\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5e73\u7a33\u9ad8\u6548\u7684\u8fd0\u884c\u3002",tags:["Events"]},c=void 0,u={permalink:"/blog/2021/10/01/openEuler",source:"@site/blog/2021/10/01/openEuler.md",title:"Apache APISIX \u793e\u533a\u6210\u5458\u52a9\u529b openEuler \u53d1\u5e03\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248",description:"\u6765\u81ea Apache APISIX \u793e\u533a\u7684\u7f57\u6cfd\u8f69\u548c\u6e29\u94ed\u5728 openEuler 9 \u6708 30 \u65e5\u53d1\u5e03\u7684\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248\uff08 openEuler 21.09\uff09\u4e2d\uff0c\u4e3a OpenResty \u8fc1\u79fb\u5de5\u4f5c\u4e2d\u505a\u4e86\u975e\u5e38\u591a\u7684\u8d21\u732e\uff0c\u8ba9 OpenResty \u53ef\u4ee5\u5728\u6b27\u62c9\u5f00\u6e90\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5e73\u7a33\u9ad8\u6548\u7684\u8fd0\u884c\u3002",date:"2021-10-01T00:00:00.000Z",formattedDate:"October 1, 2021",tags:[{label:"Events",permalink:"/blog/tags/events"}],readingTime:.495,truncated:!0,authors:[],prevItem:{title:"\u4fdd\u59c6\u7ea7\u6559\u7a0b\uff0c\u4ece\u6982\u5ff5\u5230\u5b9e\u8df5\u5e2e\u4f60\u5feb\u901f\u4e0a\u624b Apache APISIX Ingress",permalink:"/blog/2021/10/09/apisix-ingress-techblog"},nextItem:{title:"\u793e\u533a\u5468\u62a5\uff5c\u65b0\u664b committer \u4e00\u4f4d\uff0c\u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/blog/2021/09/30/weekly-report"}},i={authorsImageUrls:[]},l=[],s={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6765\u81ea Apache APISIX \u793e\u533a\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"\u7f57\u6cfd\u8f69"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonming"},"\u6e29\u94ed"),"\u5728 openEuler 9 \u6708 30 \u65e5\u53d1\u5e03\u7684\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248\uff08 ",(0,a.kt)("a",{parentName:"p",href:"https://openeuler.org/"},"openEuler 21.09")," \uff09\u4e2d\uff0c\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openresty/openresty"},"OpenResty")," \u8fc1\u79fb\u5de5\u4f5c\u4e2d\u505a\u4e86\u975e\u5e38\u591a\u7684\u8d21\u732e\uff0c\u8ba9 OpenResty \u53ef\u4ee5\u5728\u6b27\u62c9\u5f00\u6e90\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5e73\u7a33\u9ad8\u6548\u7684\u8fd0\u884c\u3002OpenResty \u7684\u7a33\u5b9a\u8fd0\u884c\u4e5f\u610f\u5473\u7740 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," \u53ef\u4ee5\u987a\u7545\u5730\u8fd0\u884c\u5728 openEuler \u7cfb\u7edf\u4e0a\uff0cApache APISIX \u5e95\u5c42\u57fa\u4e8e OpenResty \u505a\u4e86\u4e00\u5b9a\u5f00\u53d1\u3002")))}f.isMDXComponent=!0}}]);