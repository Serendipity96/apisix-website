"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2434],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,h=s["".concat(p,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},24512:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},assets:function(){return l},toc:function(){return u},default:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c={title:"Apache APISIX \u7684\u6f14\u53d8",date:new Date("2021-08-07T14:10:00.000Z"),keywords:["APISIX","\u6f14\u53d8","API \u7f51\u5173","\u89c4\u5212"],description:"Apache APISIX \u662f\u6700\u53d7\u6b22\u8fce\u7684 API \u7f51\u5173\u4e4b\u4e00\u3002\u6211\u5c06\u4ecb\u7ecd\u4e00\u4e0b APISIX \u7684\u53d1\u5c55\uff0c\u5305\u62ec\uff1a1.\u6211\u4eec\u6240\u505a\u7684\u597d\u51b3\u5b9a\uff0c2.\u6211\u4eec\u6240\u505a\u7684\u4e0d\u597d\u7684\u51b3\u5b9a\uff0c3.\u6211\u4eec\u7684\u672a\u6765\u8ba1\u5212\u3002"},i=void 0,p={permalink:"/articles/The-Evolution-of-Apache-APISIX",source:"@site/articles/The-Evolution-of-Apache-APISIX.md",title:"Apache APISIX \u7684\u6f14\u53d8",description:"Apache APISIX \u662f\u6700\u53d7\u6b22\u8fce\u7684 API \u7f51\u5173\u4e4b\u4e00\u3002\u6211\u5c06\u4ecb\u7ecd\u4e00\u4e0b APISIX \u7684\u53d1\u5c55\uff0c\u5305\u62ec\uff1a1.\u6211\u4eec\u6240\u505a\u7684\u597d\u51b3\u5b9a\uff0c2.\u6211\u4eec\u6240\u505a\u7684\u4e0d\u597d\u7684\u51b3\u5b9a\uff0c3.\u6211\u4eec\u7684\u672a\u6765\u8ba1\u5212\u3002",date:"2021-08-07T14:10:00.000Z",formattedDate:"August 7, 2021",tags:[],readingTime:.27,truncated:!1,authors:[],prevItem:{title:"\u5f00\u6e90\u7684\u9b45\u529b",permalink:"/articles/The-Appeal-of-OpenSource"},nextItem:{title:"\u6309\u7167 Apache Way \u8fd0\u4f5c\u5f00\u6e90\u5546\u4e1a\u5316\u516c\u53f8\uff0c\u8fd9\u884c\u5f97\u901a\u5417\uff1f",permalink:"/articles/Apache-APISIX-From-OpenSource-Commercialization-by-Apache-Way"}},l={authorsImageUrls:[]},u=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],f={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=890054774&bvid=BV1xP4y1p7p8&cid=394697073&page=1",frameborder:"0",scrolling:"no",allowfullscreen:"true",style:{width:"100%",maxHeight:"calc(100vw / 5 * 3)",height:"calc(100vh / 5 * 3)"}}),(0,o.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,o.kt)("p",null,"\u7f57\u6cfd\u8f69\uff0cApache APISIX Committer \u548c OpenResty \u7684\u6838\u5fc3\u5f00\u53d1\u8005."),(0,o.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,o.kt)("p",null,"Apache APISIX \u662f\u6700\u53d7\u6b22\u8fce\u7684 API \u7f51\u5173\u4e4b\u4e00\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix%E3%80%82%E6%88%91%E5%B0%86%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B"},"https://github.com/apache/apisix\u3002\u6211\u5c06\u4ecb\u7ecd\u4e00\u4e0b")," APISIX \u7684\u53d1\u5c55\uff0c\u5305\u62ec\uff1a1.\u6211\u4eec\u6240\u505a\u7684\u597d\u51b3\u5b9a\uff0c2.\u6211\u4eec\u6240\u505a\u7684\u4e0d\u597d\u7684\u51b3\u5b9a\uff0c3.\u6211\u4eec\u7684\u672a\u6765\u8ba1\u5212\u3002"),(0,o.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,o.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,o.kt)("img",{src:"../img/blog_img/APISIX-wechat.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}s.isMDXComponent=!0}}]);