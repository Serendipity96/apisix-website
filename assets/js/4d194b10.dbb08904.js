(self.webpackChunk=self.webpackChunk||[]).push([[78870],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=l(r),h=a,m=f["".concat(p,".").concat(h)]||f[h]||u[h]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85827:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var n=r(22122),a=r(19756),c=(r(67294),r(3905)),i={title:"\u57fa\u4e8e Apache APISIX \u7684 Kubernetes Ingress \u7684\u5b9e\u73b0",date:new Date("2021-08-07T14:50:00.000Z"),keywords:["APISIX","Ingress Controller","Kubernetes"],description:"\u4ecb\u7ecd\u57fa\u4e8e Apache APISIX \u7684 Kubernetes Ingress \u7684\u4f18\u52bf\u4ee5\u53ca Apache APISIX Ingress \u7684\u7279\u70b9\u3002"},o={permalink:"/articles/Apache-APISIX-Kubernetes-Ingress",source:"@site/articles/Apache-APISIX-Kubernetes-Ingress.md",title:"\u57fa\u4e8e Apache APISIX \u7684 Kubernetes Ingress \u7684\u5b9e\u73b0",description:"\u4ecb\u7ecd\u57fa\u4e8e Apache APISIX \u7684 Kubernetes Ingress \u7684\u4f18\u52bf\u4ee5\u53ca Apache APISIX Ingress \u7684\u7279\u70b9\u3002",date:"2021-08-07T14:50:00.000Z",formattedDate:"August 7, 2021",tags:[],readingTime:.365,truncated:!1,prevItem:{title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8 EOS \u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",permalink:"/articles/Apache-APISIX-in-China-Mobile-Cloud"},nextItem:{title:"\u5f00\u6e90\u7684\u9b45\u529b",permalink:"/articles/The-Appeal-of-OpenSource"}},p=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],l={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=632600503&bvid=BV1Wb4y1m76g&cid=394698230&page=1",frameborder:"0",scrolling:"no",allowfullscreen:"true",style:{width:"100%",maxHeight:"calc(100vw / 5 * 3)",height:"calc(100vh / 5 * 3)"}}),(0,c.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,c.kt)("p",null,"\u91d1\u536b\uff0cApache APISIX PMC / Apache apisix-ingress-controller Founder / Apache Skywalking Committer\u3002"),(0,c.kt)("p",null,"\u9886\u5bfc Apache ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"apisix-ingress-controller")," \u9879\u76ee\u3002\u53c2\u4e0e\u5bf9 Apache APISIX / Apache Skywalking \u7b49\u9879\u76ee\u7684\u8d21\u732e\u3002"),(0,c.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,c.kt)("p",null,"\u4ecb\u7ecd\u57fa\u4e8e Apache APISIX \u7684 Kubernetes Ingress \u7684\u4f18\u52bf\u4ee5\u53ca Apache APISIX Ingress \u7684\u7279\u70b9\u3002"),(0,c.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,c.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,c.kt)("img",{src:"../img/blog_img/APISIX-wechat.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}s.isMDXComponent=!0}}]);