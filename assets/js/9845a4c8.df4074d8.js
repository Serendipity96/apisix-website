(self.webpackChunk=self.webpackChunk||[]).push([[66442],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),h=a,m=f["".concat(l,".").concat(h)]||f[h]||s[h]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35256:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u8ba4\u8bc1\u548c\u6388\u6743",date:new Date("2021-08-06T15:30:00.000Z"),keywords:["APISIX","API \u7f51\u5173","\u8ba4\u8bc1\u6388\u6743"],description:"\u8ba4\u8bc1\u548c\u6388\u6743\u662f API \u7f51\u5173\u4e2d\u975e\u5e38\u5fc5\u8981\u7684\u529f\u80fd\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u4f4d\u4e8e\u7f51\u5173\u540e\u9762\u7684\u670d\u52a1\u5c31\u53ef\u4ee5\u5f97\u5230\u4fdd\u62a4\uff0c\u907f\u514d\u672a\u7ecf\u6388\u6743\u6216\u6076\u610f\u7684\u8bbf\u95ee\u3001\u6570\u636e\u6cc4\u9732\u548c\u9ed1\u5ba2\u653b\u51fb\u3002Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\u3002\u800c\u4e14\u5b83\u63d0\u4f9b\u4e86\u8bb8\u591a\u63d2\u4ef6\uff0c\u5305\u62ec\u50cf  key-auth\u3001Open-ID\u3001wolf-RBAC \u7b49\u8ba4\u8bc1\u548c\u6388\u6743\u3002\u672c\u63d0\u6848\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 APISIX \u6765\u8fdb\u884c\u8ba4\u8bc1\u548c\u6388\u6743\u3002"},c={permalink:"/articles/Using-Apache-APISIX-To-Do-Authentication-and-Authorization",source:"@site/articles/Using-Apache-APISIX-To-Do-Authentication-and-Authorization.md",title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u8ba4\u8bc1\u548c\u6388\u6743",description:"\u8ba4\u8bc1\u548c\u6388\u6743\u662f API \u7f51\u5173\u4e2d\u975e\u5e38\u5fc5\u8981\u7684\u529f\u80fd\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u4f4d\u4e8e\u7f51\u5173\u540e\u9762\u7684\u670d\u52a1\u5c31\u53ef\u4ee5\u5f97\u5230\u4fdd\u62a4\uff0c\u907f\u514d\u672a\u7ecf\u6388\u6743\u6216\u6076\u610f\u7684\u8bbf\u95ee\u3001\u6570\u636e\u6cc4\u9732\u548c\u9ed1\u5ba2\u653b\u51fb\u3002Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\u3002\u800c\u4e14\u5b83\u63d0\u4f9b\u4e86\u8bb8\u591a\u63d2\u4ef6\uff0c\u5305\u62ec\u50cf  key-auth\u3001Open-ID\u3001wolf-RBAC \u7b49\u8ba4\u8bc1\u548c\u6388\u6743\u3002\u672c\u63d0\u6848\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 APISIX \u6765\u8fdb\u884c\u8ba4\u8bc1\u548c\u6388\u6743\u3002",date:"2021-08-06T15:30:00.000Z",formattedDate:"August 6, 2021",tags:[],readingTime:.295,truncated:!1,prevItem:{title:"\u4f7f\u7528 ECharts \u5448\u73b0\u793e\u533a\u6d3b\u52a8\u7684\u6e32\u67d3\u56fe",permalink:"/articles/Rendering-Community-Events-Using-ECharts"},nextItem:{title:"\u7528 Chaos Mesh \u6d4b\u8bd5 Apache APISIX \u7684\u6062\u590d\u80fd\u529b ",permalink:"/articles/Test-Apache-APISIX-Resilience-With-Chaos-Mesh"}},l=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],p={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=292326444&bvid=BV1hf4y137So&cid=388409219&page=1",frameborder:"0",scrolling:"no",allowfullscreen:"true",style:{width:"100%",maxHeight:"calc(100vw / 5 * 3)",height:"calc(100vh / 5 * 3)"}}),(0,i.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,i.kt)("p",null,"\u6731\u6b23\u6b23\uff0cApache APISIX \u7684\u63d0\u4ea4\u8005\uff0c\u6709\u591a\u5e74\u7684 CDN \u5de5\u4f5c\u7ecf\u9a8c\uff0c\u719f\u6089 API \u7f51\u5173\u3002"),(0,i.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u8ba4\u8bc1\u548c\u6388\u6743\u662f API \u7f51\u5173\u4e2d\u975e\u5e38\u5fc5\u8981\u7684\u529f\u80fd\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u4f4d\u4e8e\u7f51\u5173\u540e\u9762\u7684\u670d\u52a1\u5c31\u53ef\u4ee5\u5f97\u5230\u4fdd\u62a4\uff0c\u907f\u514d\u672a\u7ecf\u6388\u6743\u6216\u6076\u610f\u7684\u8bbf\u95ee\u3001\u6570\u636e\u6cc4\u9732\u548c\u9ed1\u5ba2\u653b\u51fb\u3002Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\u3002\u800c\u4e14\u5b83\u63d0\u4f9b\u4e86\u8bb8\u591a\u63d2\u4ef6\uff0c\u5305\u62ec\u50cf  key-auth\u3001Open-ID\u3001wolf-RBAC \u7b49\u8ba4\u8bc1\u548c\u6388\u6743\u3002\u672c\u63d0\u6848\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 APISIX \u6765\u8fdb\u884c\u8ba4\u8bc1\u548c\u6388\u6743\u3002"),(0,i.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,i.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,i.kt)("img",{src:"../img/blog_img/APISIX-wechat.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}u.isMDXComponent=!0}}]);