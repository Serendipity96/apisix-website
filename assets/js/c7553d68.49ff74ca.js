"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22612],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,p=function(t,e){if(null==t)return{};var n,a,p={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(p[n]=t[n]);return p}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(p[n]=t[n])}return p}var s=a.createContext({}),o=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=o(t.components);return a.createElement(s.Provider,{value:e},t.children)},I={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,p=t.mdxType,r=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=o(n),m=p,g=u["".concat(s,".").concat(m)]||u[m]||I[m]||r;return n?a.createElement(g,l(l({ref:e},c),{},{components:n})):a.createElement(g,l({ref:e},c))}));function m(t,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:p,l[1]=i;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65217:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var a=n(87462),p=n(63366),r=(n(67294),n(3905)),l={title:"\u6709\u4e86 NGINX \u548c Kong\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Apache APISIX",author:"\u738b\u9662\u751f",authorURL:"https://github.com/membphis",authorImageURL:"https://avatars.githubusercontent.com/u/6814606?v=4",keywords:["APISIX","Kong","Nginx","API \u7f51\u5173","\u5f00\u6e90"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u67b6\u6784\u6f14\u8fdb\u5386\u53f2\uff0c\u5bf9\u6bd4 Nginx \u548c Kong \u8fd9\u4e24\u4e2a\u6846\u67b6 Apache APISIX \u7684\u4f18\u52bf\u662f\u4ec0\u4e48\u3002",tags:["technology"]},i={permalink:"/blog/2021/06/28/why-we-need-Apache-APISIX",source:"@site/blog/2021-06-28-why-we-need-Apache-APISIX.md",title:"\u6709\u4e86 NGINX \u548c Kong\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Apache APISIX",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u67b6\u6784\u6f14\u8fdb\u5386\u53f2\uff0c\u5bf9\u6bd4 Nginx \u548c Kong \u8fd9\u4e24\u4e2a\u6846\u67b6 Apache APISIX \u7684\u4f18\u52bf\u662f\u4ec0\u4e48\u3002",date:"2021-06-28T00:00:00.000Z",formattedDate:"June 28, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:2.04,truncated:!0,prevItem:{title:"Apache APISIX 2.7.0-Release \u6b63\u5f0f\u53d1\u5e03",permalink:"/blog/2021/06/29/release-apache-apisix-2.7"},nextItem:{title:"Rancher \xd7 Apache APISIX: \u6781\u901f\u90e8\u7f72\u66f4\u597d\u7528\u7684\u5f00\u6e90\u7f51\u5173\u548c Ingress Controller",permalink:"/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast"}},s=[],o={toc:s};function c(t){var e=t.components,n=(0,p.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/membphis"},"@membphis"),", Apache APISIX PMC from ",(0,r.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"api7.ai"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://www.apiseven.com/zh/blog/why-we-need-Apache-APISIX"},"https://www.apiseven.com/zh/blog/why-we-need-Apache-APISIX"))),(0,r.kt)("p",null,"\u5927\u5bb6\u597d\uff0c\u975e\u5e38\u5f00\u5fc3\u7ed9\u5927\u5bb6\u5206\u4eab\u4e00\u4e2a\u8ba9\u6211\u6fc0\u52a8\u7684\u4e3b\u9898\u300a\u6709\u4e86 NGINX \u548c Kong\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Apache APISIX\u300b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625001.png",alt:"why we need APISIX"})),(0,r.kt)("p",null,"\u4e4b\u6240\u4ee5\u6211\u4eec\u8981\u505a NGINX \u548c Kong \u7684\u66ff\u4ee3\u9879\u76ee\uff0c\u5b9e\u9645\u548c\u6211\u4eec\u540e\u7aef\u67b6\u6784\u6f14\u53d8\u53f2\u5927\u80cc\u666f\u606f\u606f\u76f8\u5173\uff0c\u6211\u4f1a\u5148\u548c\u5927\u5bb6\u4e00\u8d77\u5206\u4eab\u540e\u7aef\u67b6\u6784\u6f14\u53d8\u8fc7\u7a0b\uff0c\u8fd9\u975e\u5e38\u91cd\u8981\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625002.png",alt:"membphis"})),(0,r.kt)("p",null,"\u9996\u5148\u505a\u4e0b\u81ea\u6211\u4ecb\u7ecd\uff0c\u672c\u4eba\u53eb\u738b\u9662\u751f\u3002\u548c\u8fd9\u6b21\u5927\u4f1a\u4e3b\u529e\u8005\u51c0\u8d85\u4e00\u6837\u6211\u4eec\u90fd\u505a\u793e\u533a\u5f88\u4e45\uff0c\u6211\u5728 2015 \u5e74\u5199\u4e86\u4e00\u672c\u7535\u5b50\u4e66\u53eb\u300aOpenResty \u6700\u4f73\u5b9e\u8df5\u300b\uff0c\u901a\u8fc7\u8fd9\u672c\u4e66\u7ed3\u6210\u4e86\u4e00\u4e2a\u8d85\u4e07\u4eba\u793e\u533a\u3002\u4ece\u90a3\u4e2a\u65f6\u5019\u5f00\u59cb\u4e2a\u4eba\u5bf9\u5f00\u6e90\u672c\u8eab\u8d8a\u53d1\u611f\u5174\u8da3\uff0c2015 \u5e74\u4ee5\u524d\u6211\u57fa\u672c\u4e0a\u4e3b\u8981\u662f\u5f00\u6e90\u8f6f\u4ef6\u7684\u4f7f\u7528\u8005\uff0c\u7136\u540e\u6162\u6162\u53d8\u6210\u793e\u533a\u7684\u4e00\u4e2a\u534f\u529e\u8005\uff0c\u518d\u5f80\u540e\u53d8\u6210\u793e\u533a\u9886\u5bfc\u8005\uff0c\u4e5f\u8bb8\u4f60\u4f1a\u95ee\u4e3a\u4ec0\u4e48\uff1f\u5f88\u7b80\u5355\uff0c\u56e0\u4e3a\u8fd9\u672c\u4e66\u662f\u4f60\u5199\u7684\uff0c\u522b\u4eba\u9047\u5230\u5404\u79cd\u5404\u6837\u7684\u95ee\u9898\uff0c\u6709\u9ad8\u7ea7\u7684\u4e5f\u6709\u6bd4\u8f83\u666e\u901a\u7684\uff0c\u95ee\u5f97\u591a\u4e86\u6211\u5c31\u9010\u6b65\u6210\u4e3a\u8001\u5e08\u5e76\u6700\u7ec8\u6210\u4e86\u793e\u533a\u9886\u5bfc\u8005\uff0c\u50cf\u90a3\u53e5\u540d\u8a00\u201c\u8d70\u7684\u4eba\u591a\u4e86\uff0c\u4e5f\u53d8\u6210\u4e86\u8def\u201d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625003.png",alt:"api7.ai"})),(0,r.kt)("p",null,"2019 \u5e74\u6211\u4e0e\u5408\u4f19\u4eba\u6e29\u94ed\u4e00\u8d77\u521b\u529e\u4e86\u6df1\u5733\u652f\u6d41\u79d1\u6280\u516c\u53f8\uff0c\u5b83\u662f\u4e00\u5bb6\u4ee5\u5f00\u6e90\u4e3a\u4f9d\u6258\u7684\u5546\u4e1a\u5316\u516c\u53f8\u3002\u8fd9\u5bb6\u516c\u53f8\u627f\u8f7d\u4e86\u6211\u4fe9\u5f88\u591a\u4e2a\u4eba\u7406\u60f3\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u662f\u5728\u505a\u6bcf\u4e00\u4f4d\u666e\u901a\u7a0b\u5e8f\u5458\u7684\u7406\u60f3\uff0c\u4e0d\u60f3\u5eb8\u5eb8\u788c\u788c 996\uff0c\u6211\u7ecf\u5e38\u5bf9\u522b\u4eba\u8bf4\u6211\u7684\u68a6\u60f3\u5c31\u662f\u201c\u628a\u6211\u7684\u540d\u5b57\u523b\u5165\u53f2\u518c\u201d\uff0c\u60b2\u50ac\u7684\u662f\u4eba\u7c7b\u5df2\u7ecf\u4e0d\u9700\u8981\u53f2\u518c\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625004.png",alt:"api7.ai team"})),(0,r.kt)("p",null,"\u8fd9\u662f\u6211\u4eec\u56e2\u961f\uff0c\u5927\u5bb6\u4e3b\u8981\u662f\u8fdc\u7a0b\u534f\u4f5c\uff0c\u6240\u6709\u4eba\u805a\u5728\u4e00\u8d77\u6bd4\u8f83\u96be\u3002\u516c\u53f8\u65e9\u671f\u9636\u6bb5\u53ea\u6709\u4e94\u516d\u4e2a\u4eba\u65f6\uff0c\u8fd8\u80fd\u6bd4\u8f83\u5bb9\u6613\u7684\u628a\u56e2\u961f\u805a\u8d77\u6765\uff0c\u4f46\u4ece\u4eca\u5e74\u4e4b\u540e\u5c31\u4e00\u76f4\u6ca1\u805a\u9f50\u8fc7\uff0c\u8fd9\u662f\u6211\u4eec\u4eca\u5e74\u5230\u76ee\u524d\u4ee5\u6765\u6700\u9f50\u7684\u4e00\u6b21\uff08\u4f46\u4f9d\u7136\u6709\u51e0\u4f4d\u540c\u5b66\u6ca1\u80fd\u4e00\u8d77\uff09\u3002"),(0,r.kt)("p",null,"\u4f5c\u4e3a\u4e00\u5bb6\u6280\u672f\u8bf4\u4e86\u7b97\u7684\u5546\u4e1a\u516c\u53f8\uff0c\u6280\u672f\u5728\u6211\u53f8\u6709\u975e\u5e38\u5927\u7684\u8bdd\u8bed\u6743\uff0c\u5c0a\u91cd\u6280\u672f\u4ece\u5c0a\u91cd\u6280\u672f\u4eba\u624d\u5f00\u59cb\u3002\u6ca1\u6709 996 \uff0c\u6ca1\u6709\u4e0a\u73ed\u6253\u5361\uff0c\u8fdc\u7a0b\u529e\u516c\uff0c\u6b22\u8fce\u611f\u5174\u8da3\u7684\u540c\u5b66\u8054\u7cfb\u6211\u4eec\uff0c\u671f\u5f85\u6709\u68a6\u60f3\u3001\u6709\u7406\u60f3\u7684\u4f60\u52a0\u5165\u6211\u53f8\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625005.png",alt:"APISIX architecture"})),(0,r.kt)("p",null,"\u8fd9\u6b21\u6f14\u8bb2\u4e3b\u9898\u9700\u8981\u4e00\u4e9b\u80cc\u666f\uff0c\u6211\u4eec\u5148\u8bf4\u8bf4\u540e\u7aef\u67b6\u6784\u6f14\u53d8\u53f2\u3002\u5148\u8ddf\u5927\u5bb6\u56de\u987e\u4e00\u4e0b\u8fd9\u5f20\u56fe\uff0c\u53f3\u56fe\u90e8\u5206\u4ece\u4e0a\u5230\u4e0b\u5b83\u4e0d\u662f\u5177\u4f53\u6570\u636e\u6d41\u7a0b\u56fe\uff0c\u5b83\u662f\u6211\u4eec\u540e\u7aef\u67b6\u6784\u6f14\u53d8\u53f2\u3002\u4ece\u6700\u4f20\u7edf\u7684\u5355\u4f53\u5927\u5e94\u7528\uff0c\u7136\u540e\u53d8\u6210\u9762\u5411\u670d\u52a1\u67b6\u6784(SOA)\uff0c\u7136\u540e\u662f\u5fae\u670d\u52a1\uff0c\u5206\u522b\u51fa\u73b0\u4e86 Spring Cloud \u548c Kubernetes\u3002Spring Cloud \u67b6\u6784\u4e3b\u8981\u670d\u52a1 JAVA \u8bed\u8a00\u5f00\u53d1\u8005\uff0cKubernetes \u662f\u5bb9\u5668\u7f16\u6392\u652f\u6301\u4efb\u4f55\u8bed\u8a00\uff0c\u4ee5\u53ca\u6700\u8fd1\u793e\u533a\u6bd4\u8f83\u70ed\u7684\u8bdd\u9898\u670d\u52a1\u7f51\u683c\u3002"),(0,r.kt)("p",null,"\u6211\u7ecf\u5e38\u8ddf\u516c\u53f8\u540c\u4e8b\u8bf4\uff0c\u54b1\u4eec\u5c55\u671b\u672a\u6765\u4e94\u5e74\uff0c\u751a\u81f3\u662f\u5341\u5e74\u4e4b\u540e\uff0c\u54ea\u4e2a\u67b6\u6784\u662f\u6700\u7ec8\u6781\u65b9\u6848\uff1f\u4ece\u76ee\u524d\u4fe1\u606f\u770b\uff0c\u670d\u52a1\u7f51\u683c\u4f1a\u5927\u6982\u7387\u80dc\u51fa\u3002\u5373\u4f7f\u5f53\u4e0b\u5b83\u8fd8\u6709\u5f88\u591a\u95ee\u9898\uff0c\u4f46\u6211\u76f8\u4fe1\u8fd9\u4e9b\u95ee\u9898\u90fd\u80fd\u88ab\u89e3\u51b3\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625006.png",alt:"APISIX architecture"})),(0,r.kt)("p",null,"\u5728\u521b\u4e1a\u4e4b\u521d\uff0c\u5728\u8111\u5b50\u91cc\u8fc7\u8fd9\u5f20\u56fe\u7684\u65f6\u5019\u7279\u522b\u6709\u610f\u601d\u3002\u6211\u4eec\u80fd\u591f\u770b\u5230\uff0c\u968f\u7740\u6211\u4eec\u540e\u7aef\u67b6\u6784\u7684\u9010\u6b65\u8fed\u4ee3\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u5404\u79cd\u4e0d\u540c\u7ec4\u4ef6\u3002\u6bd4\u5982\u5230\u4e86 SOA \u4e5f\u5c31\u662f\u9762\u5411\u670d\u52a1\u7684\u67b6\u6784\uff0c\u5f15\u5165\u53cd\u5411\u4ee3\u7406\u7ec4\u4ef6\uff0c\u9009\u578b\u901a\u5e38\u662f NGINX\uff0cHAProxy\u3002\u8fed\u4ee3\u5230\u5fae\u670d\u52a1\u67b6\u6784\u540e\uff0c\u901a\u5e38\u4f1a\u9009\u62e9\u4e00\u4e9b\u66f4\u73b0\u4ee3\u7684 API \u7f51\u5173\u4ea7\u54c1\uff0c\u6bd4\u5982 Kong\u3001Traefik \uff0c\u5f53\u7136\u4e5f\u6709\u4e00\u4e9b\u7528\u6237\u56e0\u4e3a\u60ef\u6027\u4e60\u60ef\uff0c\u8fd8\u4f1a\u7ee7\u7eed\u9009\u62e9\u4f7f\u7528 NGINX\uff0c\u867d\u7136\u5b83\u6709\u80fd\u529b\u5f31\u3001\u4f7f\u7528\u4e0d\u65b9\u4fbf\u7b49\u7f3a\u70b9\uff0c\u4f46\u80dc\u5728\u7a33\u5b9a\u3001\u53ef\u9760\u3002\u8bf4\u53e5\u9898\u5916\u8bdd\uff0c\u4ece\u5168\u7403\u5e02\u573a\u5360\u6709\u7387\u770b\uff0cNGINX \u6210\u4e3a\u5360\u6709\u7387\u6700\u9ad8\u7684 Web Server \u662f\u5728 2019 \u5e74 4 \u6708\u4efd\uff0c\u611f\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u5230\u770b\u4e0b\u6700\u65b0\u7684 netcraft \u62a5\u544a April 2021 Web Server Survey\u3002"),(0,r.kt)("p",null,"\u968f\u7740\u540e\u7aef\u67b6\u6784\u6301\u7eed\u8fed\u4ee3\uff0c\u8fdb\u5165\u5230\u4e86 Kubernetes \u65f6\u4ee3\u540e\uff0c\u6d41\u91cf\u51fa\u5165\u53e3 Ingress \u5927\u5bb6\u9ed8\u8ba4\u4f1a\u4f7f\u7528\u5b98\u65b9\u7684 Kubernetes Ingress\uff0c\u8fd9\u4e2a\u9879\u76ee\u662f\u57fa\u4e8e NGINX \u672c\u5730\u914d\u7f6e\u6587\u4ef6\u3002\u5728\u56fd\u5185\u4e5f\u6709\u4e00\u4e9b\u516c\u53f8\u5728\u4f7f\u7528 Traefik \u4f5c\u4e3a Ingress\uff0c\u8fd9\u4e0e\u56fd\u5185 Golang \u5f00\u53d1\u8005\u57fa\u6570\u6bd4\u8f83\u5927\u6709\u5f88\u5927\u5173\u7cfb\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u518d\u770b\u770b\u5de6\u4fa7\u6bd4\u8f83\u6709\u610f\u601d\u7684 JAVA \uff0cSpring Cloud \u5185\u7f6e API \u7f51\u5173\u5148\u540e\u7ecf\u5386\u4e86 ZUUL\u3001ZUUL2\uff0c\u4f46\u8fd8\u662f\u4e0d\u597d\u7528\uff0c\u6027\u80fd\u3001\u67b6\u6784\u5b98\u65b9\u90fd\u4e0d\u6ee1\u610f\uff0c\u6240\u4ee5 Spring Cloud \u5b98\u65b9\u53d1\u8d77\u4e86\u65b0\u9879\u76ee Spring Cloud Gateway\uff0c\u6700\u7ec8\u5f62\u6210\u5168\u5bb6\u6876\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("p",null,"\u6700\u540e\u8bf4\u8bf4\u53f3\u4e0b\u89d2\u90e8\u5206\u7684\u670d\u52a1\u7f51\u683c\uff0c\u5bf9\u4e8e\u670d\u52a1\u7f51\u683c\u5df2\u7ecf\u5f62\u6210\u4e00\u79cd\u9009\u62e9\u5c31\u662f istio(CP) + envoy(DP)\u3002\u540e\u9762\u6211\u4eec\u53c8\u770b\u5230\u4e86\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684 mosn\uff0c\u4e00\u53e5\u8bdd\u6982\u62ec\uff1aGolang \u7248\u672c\u7684 envoy\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625007.png",alt:"APISIX architecture"})),(0,r.kt)("p",null,"\u56de\u987e\u524d\u9762\u7684\u67b6\u6784\u6f14\u53d8\u56fe\uff0c\u76f8\u4fe1\u5f88\u591a\u540c\u5b66\u90fd\u5df2\u7ecf\u53d1\u73b0\u95ee\u9898\u5728\u54ea\u91cc\u3002\u4ece\u4e0a\u5230\u4e0b\uff0c\u4ece\u5de6\u5230\u53f3\uff0c\u9488\u5bf9\u4e0d\u540c\u573a\u666f\uff0c\u6211\u4eec\u6700\u7ec8\u201c\u5408\u7406\u201d\u7684\u5f15\u5165\u4e86\u5404\u79cd\u7ec4\u4ef6\u6765\u5206\u522b\u89e3\u51b3\u6211\u4eec\u7684\u95ee\u9898\uff0c\u67b6\u6784\u5e08\u751f\u5b58\u6cd5\u5219\uff1a\u9009\u62e9\u5f53\u4e0b\u6700\u9002\u5408\u7684\u3002"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u8d81\u624b\u5de5\u5177\u4e0d\u591a\uff0c\u5728\u529f\u80fd\u3001\u52a8\u6001\u3001\u6027\u80fd\u7b49\u4e4b\u95f4\u6211\u4eec\u603b\u662f\u8981\u59a5\u534f\u653e\u5f03\u4e00\u4e9b\uff0c\u5927\u5bb6\u65e9\u5df2\u4e60\u60ef\u751a\u81f3\u9ebb\u6728\u3002IT \u6280\u672f\u53d1\u5c55\u8fc5\u901f\uff0c\u65f6\u81f3\u4eca\u65e5\u5b83\u4eec\u662f\u5426\u8fd8\u662f\u6700\u5408\u9002\u65b9\u6848\uff1f5G\u3001\u7269\u8054\u7f51\u7b49\u53d1\u5c55\u8fc5\u901f\uff0c\u5982\u4f55\u5f39\u6027\u6269\u7f29\u5bb9\u3001\u52a8\u6001\u7edf\u4e00\u7ba1\u7406\u7b49\u65b0\u95ee\u9898\uff0c\u903c\u7740\u6211\u4eec\u91cd\u65b0\u601d\u8003\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625008.png",alt:"Nginx"})),(0,r.kt)("p",null,"\u5982\u56fe\u8fd9\u4e9b\u90fd\u662f NGINX \u7f3a\u70b9\uff0c\u6bd4\u5982 NGINX \u7684\u4f4e\u6d3b\u8dc3\u5ea6\u793e\u533a\u3002\u867d\u7136\u6211\u4eec\u53ef\u4ee5\u5728\u516c\u53f8\u5c42\u9762\u6295\u5165\u66f4\u591a\u8d44\u6e90\uff0c\u4f46\u4ed6\u7684\u793e\u533a\u662f\u771f\u4e0d\u53cb\u597d\uff0c\u4e0d\u53cb\u597d\u5230\u4ec0\u4e48\u7a0b\u5ea6\u5462\uff1f\u4e0a\u9762\u8fd9\u5f20\u56fe\u53ef\u4ee5\u770b\u5f97\u5230\uff0cNGINX \u5728 Github \u7684\u4ed3\u5e93\u53ea\u662f\u955c\u50cf\uff0cissue \u529f\u80fd\u662f\u5173\u95ed\u7684\uff0c\u60f3\u63d0\u4ea4 issue \u4e0d\u53ef\u80fd\u4e86\uff0c\u5373\u4f7f\u4f60\u63d0\u4ea4 PR \u5b98\u65b9\u4e5f\u662f\u4e0d\u4f1a\u5408\u5e76\u7684\u3002"),(0,r.kt)("p",null,"\u9664\u6b64\u4e4b\u5916 NGINX \u81ea\u8eab\u8def\u7531\u6bd4\u8f83\u5f31\uff0c\u6bd4\u5982\u8bf4\u6211\u8981\u6839\u636e\u67d0\u4e2a\u8bf7\u6c42\u53c2\u6570\u6bd4\u5982 id \u53d6\u6a21\u8fd0\u7b97\u505a\u7070\u5ea6\uff0c\u4f60\u4f1a\u53d1\u73b0 NGINX \u5b8c\u5168\u65e0\u6cd5\u5b9e\u73b0\u3002\u6240\u4ee5\u6211\u4eec\u80fd\u770b\u5230\u5f88\u591a\u5c0f\u7684\u5f00\u6e90\u7cfb\u7edf\uff0c\u53ea\u8981\u89e3\u51b3\u4e86\u4e0a\u9762\u7684\u7070\u5ea6\u573a\u666f\uff0c\u5c31\u53ef\u4ee5\u662f\u4e2a\u72ec\u7acb\u5f00\u6e90\u9879\u76ee\u3002\u6b64\u5916 gRPC \u8c03\u7528\u5728\u5fae\u670d\u52a1\u8c03\u7528\u4e2d\u8d8a\u6765\u8d8a\u6d41\u884c\uff0c\u4f46 NGINX \u5bf9\u5b83\u7684\u652f\u6301\u53ea\u80fd\u662f\u201c\u7b80\u5355\u80fd\u7528\u201d\u3002"),(0,r.kt)("p",null,"\u6700\u540e\u5c31\u662f NGINX \u96c6\u7fa4\u7edf\u4e00\u7ba1\u7406\uff0c\u51e0\u4e4e\u6bcf\u5bb6\u4e92\u8054\u7f51\u5382\u5546\u90fd\u6709\u81ea\u5df1\u7684 NGINX \u914d\u7f6e\u7ba1\u7406\u7cfb\u7edf\uff0c\u7cfb\u7edf\u867d\u7136\u5927\u540c\u5c0f\u5f02\u4f46\u5c31\u662f\u6ca1\u6709\u7edf\u4e00\u65b9\u6848\uff0c\u5341\u51e0\u5e74\u4e86\u4e00\u76f4\u7a7a\u767d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625009.png",alt:"Kong"})),(0,r.kt)("p",null,"\u5728\u8fdb\u4e00\u6b65\u804a Kong \u4e4b\u524d\uff0c\u60f3\u548c\u5927\u5bb6\u804a\u4e00\u4e0b\u4ec0\u4e48\u662f\u4e91\u539f\u751f\u3002\u8fd9\u4e2a\u540d\u8bcd\u4ece\u8bde\u751f\u5230\u73b0\u5728\u5f88\u4e45\uff0c\u4f46\u5230\u73b0\u5728\u6ca1\u6709\u7edf\u4e00\u660e\u786e\u7684\u5b9a\u4e49\u3002\u6211\u7efc\u5408\u51e0\u5bb6\u4e91\u5382\u5546\u5b9a\u4e49\uff0c\u6982\u62ec\u4e91\u539f\u751f\u7279\u5f81\u4e3b\u8981\u6709\u4e24\u70b9\uff1a\u7b2c\u4e00\u8981\u652f\u6301\u5bb9\u5668\uff0c\u7b2c\u4e8c\u8981\u652f\u6301\u5f39\u6027\u4f38\u7f29\u90e8\u7f72\u3002\u6211\u8ba4\u4e3a Kong \u4e0d\u5b8c\u5168\u6ee1\u8db3\u7b2c\u4e8c\u6761\uff0c\u5b98\u65b9\u4e3b\u63a8\u7684 PostgreSQL \u5173\u7cfb\u578b\u6570\u636e\u5e93\u662f\u5355\u70b9\uff0c\u65e0\u6cd5\u652f\u6301\u5f39\u6027\u6269\u7f29\u5bb9\uff0c\u662f\u5b83\u67b6\u6784\u9009\u578b\u786c\u4f24\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625010.png",alt:"Nginx Kong"})),(0,r.kt)("p",null,"\u6700\u540e\u7b80\u5355\u603b\u7ed3\u4e00\u4e0b NGINX \u548c Kong \u7684\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NGINX \u548c Kong \u90fd\u6709\u5404\u81ea\u4e0d\u540c\u5e94\u7528\u573a\u666f\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NGINX \u7f3a\u5c11\u5b98\u65b9\u96c6\u7fa4\u7edf\u4e00\u7ba1\u7406\u65b9\u6848\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kong \u7684\u63a7\u5236\u9762\u4e0d\u662f\u5b8c\u5168\u4e91\u539f\u751f\u67b6\u6784\u3002"))),(0,r.kt)("p",null,"\u5728\u4ecb\u7ecd APISIX \u4e4b\u524d\uff0c\u8fd8\u662f\u6709\u5fc5\u8981\u5148\u611f\u8c22\u4e24\u4f4d\u524d\u8f88\uff0c\u7ad9\u5728\u5de8\u4eba\u80a9\u8180\u601d\u8003\uff0c\u786e\u5b9e\u8ba9\u6211\u4eec\u4ece\u4e00\u5f00\u59cb\u5c31\u6709\u66f4\u9ad8\u8d77\u70b9\u3002APISIX \u5df2\u7ecf\u4e24\u5c81\u591a\uff0c\u8bf7\u770b\u67b6\u6784\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625011.png",alt:"APISIX architecture"})),(0,r.kt)("p",null,"\u8fd9\u5f20\u56fe\u7684\u5de6\u53f3\u5206\u522b\u662f DP\uff08Date Plane\uff09\u548c CP\uff08Control Plane\uff09\uff0c\u8ddf\u5927\u5bb6\u6240\u719f\u6089\u7684\u540e\u7aef\u670d\u52a1\u4f53\u7cfb\u4e00\u6837\u3002APISIX \u4ece\u67b6\u6784\u7b2c\u4e00\u5929\u5c31\u6ca1\u6709\u60f3\u53bb\u81ea\u5df1\u9020\u65b0\u4e1c\u897f\uff0c\u6240\u4ee5\u5173\u4e8e\u914d\u7f6e\u4e2d\u5fc3\u9009\u62e9\u4e86\u5f53\u4e0b\u6700\u6210\u719f\u7684 etcd\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u67b6\u6784\u91cc\u9762\uff0c\u4f60\u627e\u4e0d\u5230\u4e00\u4e2a\u5355\u70b9\u3002\u8fd9\u91cc\u7684\u4efb\u4f55\u4e00\u4e2a\u670d\u52a1\u51fa\u73b0\u5f02\u5e38\u5b95\u673a\u7b49\u4e8b\u6545\uff0c\u90fd\u4e0d\u4f1a\u5f71\u54cd APISIX \u6b63\u5e38\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u7684\u80fd\u529b\u3002\u5f53\u6574\u4f53\u67b6\u6784\u4e2d\u7684\u6bcf\u4e00\u4e2a\u70b9\u90fd\u652f\u6301\u9ad8\u53ef\u7528\u65f6\uff0c\u7528\u6237\u751f\u4ea7\u7cfb\u7edf\u7684\u9ad8\u7a33\u5b9a\u6027\u5c31\u975e\u5e38\u5bb9\u6613\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625012.png",alt:"APISIX eco"})),(0,r.kt)("p",null,"\u8fd9\u662f APISIX \u7684\u751f\u6001\u56fe\uff0c\u4ece\u8be5\u56fe\u53ef\u4ee5\u51c6\u786e\u770b\u5230\u76ee\u524d\u90fd\u652f\u6301\u4e86\u54ea\u4e9b\u5468\u8fb9\u751f\u6001\u3002\u5de6\u4fa7\u662f\u652f\u6301\u7684\u534f\u8bae\uff0c\u53ef\u4ee5\u770b\u5230\u5e38\u89c1\u7684 7 \u5c42\u534f\u8bae\u6709 HTTP(S)\u3001HTTP2\u3001Dubbo\u3001QUIC \u548c\u7269\u8054\u7f51\u534f\u8bae MQTT \u7b49\uff0c4 \u5c42\u534f\u8bae\u6709 TCP/UDP \u3002\u53f3\u4fa7\u90e8\u5206\u5219\u662f\u4e00\u4e9b\u5f00\u6e90\u6216\u8005 SaaS \u670d\u52a1\uff0c\u6bd4\u5982 SkyWalking\u3001Prometheus \u3001Vault \u7b49\u3002\u4e0b\u9762\u5c31\u662f\u4e00\u4e9b\u6bd4\u8f83\u5e38\u89c1\u7684\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883\u3001\u4e91\u5382\u5546\u548c\u786c\u4ef6\u73af\u5883\uff0c\u4f5c\u4e3a\u4e00\u5bb6\u5168\u7403\u5316\u516c\u53f8\uff0c\u6211\u4eec\u4e5f\u652f\u6301 ARM64 \u7b49\u66f4\u4e30\u5bcc\u7684\u5e73\u53f0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625013.png",alt:"APISIX Advantages"})),(0,r.kt)("p",null,"\u7ed9\u5927\u5bb6\u7b80\u5355\u5730\u6c47\u62a5\u4e00\u4e0b APISIX \u5f53\u524d\u72b6\u6001\uff0cAPISIX \u4ece\u5f00\u6e90\u5230\u73b0\u5728\u4e24\u5e74\u7684\u65f6\u95f4\uff0cAPISIX \u5df2\u7ecf\u6210\u4e3a\u4e86\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\uff0c\u800c\u4e14\u8fd9\u4e2a\u72b6\u6001\u5df2\u7ecf\u6301\u7eed\u4e86\u4e00\u5e74\u591a\u3002\u8bf7\u8bb0\u4f4f\u6700\u4e0b\u9762\u4e00\u53e5\u8bdd\uff0cAPISIX \u5df2\u7ecf",(0,r.kt)("strong",{parentName:"p"},"\u751f\u4ea7\u53ef\u7528\uff0c\u529f\u80fd\u3001\u6027\u80fd\u3001\u67b6\u6784\u5168\u9762\u4f18\u4e8e Kong"),"\u3002\u5728 2019 \u5e74 9 \u6708\u4efd\u8d1d\u58f3\u627e\u623f\u5c31\u5df2\u7ecf\u628a APISIX \u9879\u76ee\u7528\u5230\u751f\u4ea7\u73af\u5883\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625014.png",alt:"APISIX Community"})),(0,r.kt)("p",null,"\u7b80\u5355\u89e3\u91ca\u4e00\u4e0b\u8fd9\u5f20\u56fe\uff0c\u53ef\u4ee5\u53eb\u5b83\u8d21\u732e\u8005\u589e\u957f\u66f2\u7ebf\u3002\u6a2a\u5750\u6807\u662f\u65f6\u95f4\u7ebf\uff0c\u7eb5\u5750\u6807\u662f\u8d21\u732e\u8005\u603b\u6570\u3002\u80fd\u591f\u770b\u5230 APISIX \u548c Kong \u8fd9\u4e24\u4e2a\u9879\u76ee\u76f8\u5bf9\u66f4\u6d3b\u8dc3\uff0cAPISIX \u7684\u589e\u957f\u901f\u5ea6\u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4fdd\u6301\u7740\u975e\u5e38\u4e0d\u9519\u7684\u589e\u957f\u7387\uff0c\u5728\u63a5\u8fd1 Kong \u4e24\u500d\u7684\u901f\u5ea6\u6210\u957f\uff0c\u53ef\u89c1 APISIX \u53d7\u6b22\u8fce\u7a0b\u5ea6\u3002\u5f53\u7136\u8bc4\u4ef7\u4e00\u4e2a\u9879\u76ee\u6d3b\u8dc3\u5ea6\u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u65b9\u6cd5\uff0c\u6bd4\u5982\u67e5\u770b\u6bcf\u6708\u6d3b\u8dc3 issue\u3001PR \u603b\u6570\u7b49\u65b9\u5f0f\uff0c\u5f88\u5f00\u5fc3\u7684\u548c\u5927\u5bb6\u8bf4\uff0c\u8fd9\u4e9b\u65b9\u5f0f\u770b APISIX \u7684\u6d3b\u8dc3\u5ea6\u4f9d\u7136\u7b2c\u4e00\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625015.png",alt:"APISIX Advantages"})),(0,r.kt)("p",null,"\u7ecf\u8fc7\u6211\u4eec\u5b9e\u9645\u7684\u5ba2\u6237\u8d70\u8bbf\uff0c\u652f\u6301\u591a\u8bed\u8a00\u8fd9\u4e2a\u7279\u6027\u662f\u975e\u5e38\u6709\u5fc5\u8981\u7684\u3002\u6bd5\u7adf\u5bf9\u4e8e\u5f88\u591a\u516c\u53f8\u800c\u8a00\uff0c\u90fd\u6709\u81ea\u5df1\u719f\u6089\u7684\u6280\u672f\u6808\uff0c\u5f88\u591a\u516c\u53f8\u5bf9 NGINX C \u548c Lua \u8fd9\u4e24\u4e2a\u6280\u672f\u6808\u662f\u7a7a\u767d\u3002\u524d\u4e9b\u65e5\u5b50 APISIX \u5df2\u7ecf\u6b63\u5f0f\u5ba3\u5e03\u652f\u6301\u591a\u8bed\u8a00\uff0c\u76ee\u524d\u5df2\u7ecf\u652f\u6301\u4e86 Java \u8bed\u8a00\uff0c\u540e\u7eed\u4e5f\u5c06\u9010\u6b65\u652f\u6301 Golang \u3001Rust\u3001NodeJS \u7b49\u8bed\u8a00\u3002"),(0,r.kt)("p",null,"APISIX \u7684\u5168\u52a8\u6001\u3001\u9ad8\u6027\u80fd\uff0c\u5176\u5b9e\u548c\u9ad8\u8d28\u91cf\u7684\u5468\u8fb9\u751f\u6001\u662f\u5206\u4e0d\u5f00\u7684\u3002APISIX \u7684\u8def\u7531\u4f7f\u7528\u6211\u53f8\u4e3b\u5bfc\u5e76\u5f00\u6e90\u7684\u9879\u76ee\u53eb resty-radixtree \uff0c\u7b80\u5355\u6765\u8bf4\u5b83\u4f7f\u7528 radixtree \u65b9\u5f0f\u5b8c\u6210\u8def\u7531\u5339\u914d\uff0c\u5339\u914d\u6548\u7387\u76f8\u6bd4\u7ade\u54c1\u63d0\u5347\u4e86\u4e00\u5230\u4e24\u4e2a\u6570\u91cf\u7ea7\u3002\u5176\u4ed6\u8fd8\u6709 jsonschema\u3001ipmatcher \u7b49\u5468\u8fb9\u5e93\uff0c\u5b83\u4eec\u90fd\u6bd4\u540c\u7c7b\u5f00\u6e90\u9879\u76ee\u6027\u80fd\u5f3a\u51e0\u4e2a\u6570\u91cf\u7ea7\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625016.png",alt:"APISIX arch"})),(0,r.kt)("p",null,"APISIX \u652f\u6301\u591a\u8bed\u8a00\u7684\u7279\u6027\uff0c\u5df2\u7ecf\u653e\u5230\u5f00\u6e90\u9879\u76ee\uff0c\u6b22\u8fce\u611f\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u968f\u65f6\u5173\u6ce8\u5e76\u53c2\u4e0e\u3002\u8fd9\u4e2a\u5b9e\u73b0\u65b9\u6848\u7684\u4f18\u52bf\u662f\u7b80\u5355\u3001\u901a\u7528\uff0c\u5927\u5bb6\u53ef\u4ee5\u539f\u751f\u7684\u4f7f\u7528\u81ea\u5df1\u719f\u6089\u8bed\u8a00\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625017.png",alt:"Apache APISIX"})),(0,r.kt)("p",null,"\u804a\u4e86\u8fd9\u4e48\u591a\uff0c\u7ed9\u5927\u5bb6\u4ecb\u7ecd\u4e0b APISIX \u6709\u54ea\u4e9b\u4f18\u52bf\uff1f\u8bf7\u770b\u4e0a\u56fe\u3002"),(0,r.kt)("p",null,"\u524d\u9762\u4e09\u4e2a\uff08\u57fa\u91d1\u4f1a\u9879\u76ee\u3001\u5b89\u5168\u3001\u7a33\u5b9a\uff09\u6211\u89c9\u5f97\u662f\u6700\u91cd\u8981\u7684\uff0c\u4f5c\u4e3a\u57fa\u91d1\u4f1a\u9879\u76ee\uff0c\u5b83\u5df2\u7ecf\u4e0d\u5c5e\u4e8e\u67d0\u4e2a\u4eba\u6216\u67d0\u5bb6\u516c\u53f8\uff0c\u800c\u662f\u5168\u4eba\u7c7b\u7684\u8d22\u4ea7\uff0c\u6211\u4eec\u53ef\u4ee5\u6c38\u8fdc\u4f7f\u7528\u5b83\u3002\u4e0e\u4e4b\u76f8\u5bf9\u5e94\u7684\u662f\u5546\u4e1a\u516c\u53f8\u5f00\u6e90\u9879\u76ee\uff0c\u5b83\u53ef\u4ee5\u968f\u65f6\u4fee\u6539\u5f00\u6e90\u9879\u76ee License\uff0c\u5927\u5bb6\u6700\u8fd1\u90fd\u542c\u8fc7\u7c7b\u4f3c\u7684\u6d88\u606f\u3002APISIX \u7684\u5b89\u5168\u548c\u7a33\u5b9a\u5f97\u76ca\u4e8e\u5b83\u7684\u57fa\u77f3 NGINX\uff0c\u80fd\u591f\u6210\u4e3a\u76ee\u524d\u6700\u6d41\u884c\u3001\u4f7f\u7528\u91cf\u6700\u5e7f\u7684 web server\uff0c\u5e95\u8574\u8fd8\u662f\u5f88\u5389\u5bb3\u7684\u3002"),(0,r.kt)("p",null,"\u9ad8\u6027\u80fd\u3001\u52a8\u6001\u3001\u793e\u533a\u6d3b\u8dc3\u662f APISIX \u7684\u738b\u724c\uff0c\u5b83\u4eec\u5df2\u7ecf\u5f62\u6210\u4e86\u826f\u6027\u4e92\u52a8\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u53e5\u8bdd\u6982\u62ec APISIX \u7684\u81ea\u8c6a\uff0c\u6211\u8ba4\u4e3a\u662f\uff1a",(0,r.kt)("strong",{parentName:"p"},"APISIX\uff0c\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684 API \u7f51\u5173\u9879\u76ee"),"\u3002\u5728\u6b64\u5171\u8bc6\u4e0b\uff0c\u6211\u4eec\u628a\u66f4\u591a\u8d44\u6e90\u503e\u659c\u7ed9\u793e\u533a\uff0c\u6211\u4eec\u76f8\u4fe1\u793e\u533a\u4f1a\u8ba9 APISIX \u7a33\u5065\u5065\u5eb7\u6210\u957f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625018.png",alt:"APISIX goal"})),(0,r.kt)("p",null,"\u770b\u5230\u8fd9\u5f20\u56fe\u53f0\u4e0b\u7684\u4f60\u4f30\u8ba1\u4e00\u4e0b\u5b50\u5c31\u660e\u767d\u4e86 APISIX \u8981\u5e72\u4ec0\u4e48\u3002APISIX \u76ee\u6807\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u7edf\u4e00\u4ee3\u7406\u57fa\u7840\u8bbe\u65bd"),"\u3002"),(0,r.kt)("p",null,"\u4e5f\u8bb8\u53f0\u4e0b\u7684\u4f60\u8fd9\u91cc\u4f1a\u6709\u7591\u95ee\uff1aAPISIX \u8981\u652f\u6301\u8fd9\u4e48\u591a\u573a\u666f\uff0c\u662f\u5426\u4f1a\u8ba9 APISIX \u53d8\u5f97\u56db\u4e0d\u50cf\uff1f\u8fd9\u91cc\u6211\u7b80\u5355\u89e3\u91ca\u4e00\u4e0b\uff0cAPISIX \u7684\u6838\u5fc3\u662f\u9ad8\u6027\u80fd\u4ee3\u7406\u670d\u52a1\uff0c\u81ea\u8eab\u4e0d\u7ed1\u5b9a\u4efb\u4f55\u73af\u5883\u5c5e\u6027\u3002\u5f53\u5b83\u6f14\u53d8\u4e3a Ingress\u3001\u670d\u52a1\u7f51\u683c\u7b49\u4ea7\u54c1\uff0c\u90fd\u662f\u5916\u90e8\u670d\u52a1\u4e0e APISIX \u914d\u5408\uff0c\u53d8\u5316\u7684\u662f\u5916\u90e8\u7a0b\u5e8f\u800c\u4e0d\u662f APISIX \u81ea\u8eab\uff0c\u540e\u9762\u9010\u6b65\u4e3a\u5927\u5bb6\u8bf4\u660e APISIX \u662f\u5982\u4f55\u5177\u4f53\u652f\u6301\u8fd9\u4e9b\u573a\u666f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625019.png",alt:"API gateway"})),(0,r.kt)("p",null,"\u9488\u5bf9\u4f20\u7edf\u7684 LB \u548c API Gateway \u573a\u666f\uff0cAPISIX \u6bd4\u8f83\u5927\u7684\u4f18\u52bf\u5c31\u662f\u4ece\u9759\u6001\u53d8\u6210\u5168\u90e8\u52a8\u6001\uff0c\u518d\u4e5f\u4e0d\u9700\u8981 reload\uff0c\u8981\u77e5\u9053\u5f88\u591a\u79d1\u6280\u516c\u53f8\u7684 NGINX reload \u662f\u534a\u5c0f\u65f6\u8d77\u6b65\u3002\u524d\u9762\u63d0\u5230\u7684\u6839\u636e\u8bf7\u6c42 id \u53d6\u6a21\u8fd0\u7b97\u7070\u5ea6\u573a\u666f\uff0c\u5728 APISIX \u91cc\u4f7f\u7528\u7cbe\u7ec6\u5316\u8def\u7531\u53ef\u4ee5\u5f88\u5bb9\u6613\u5b8c\u6210\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625020.png",alt:"API gateway"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625021.png",alt:"APISIX Ingress Controller"})),(0,r.kt)("p",null,"APISIX Ingress Controller \u5219\u5b8c\u6574\u89e3\u51b3\u4e86\u4e0a\u9762\u63d0\u5230\u7684\u6240\u6709\u95ee\u9898\uff0c\u7ee7\u627f\u4e86 APISIX \u7684\u6240\u6709\u4f18\u52bf\uff0c\u6b64\u5916\u8fd8\u652f\u6301\u539f\u751f k8s CRD \uff0c\u65b9\u4fbf\u7528\u6237\u8fc1\u79fb\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625022.png",alt:"service mesh"})),(0,r.kt)("p",null,"\u670d\u52a1\u7f51\u683c\uff0c\u8fd9\u91cc\u9762\u6709\u5fc5\u8981\u8ddf\u5927\u5bb6\u91cd\u70b9\u804a\u804a\u3002\u672a\u6765\u4e94\u5e74\u6216\u8005\u5341\u5e74\u4e4b\u540e\uff0c\u6700\u6709\u53ef\u80fd\u4e3b\u6d41\u7684\u670d\u52a1\u7aef\u67b6\u6784\u662f\u4ec0\u4e48\uff1f\u5982\u679c\u8ba9\u6211\u56de\u7b54\uff0c\u6211\u9009\u62e9\u670d\u52a1\u7f51\u683c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625023.png",alt:"APISIX Mesh"})),(0,r.kt)("p",null,"\u53f3\u56fe\u90e8\u5206\u5c31\u662f APISIX Mesh \u7684\u5185\u90e8\u67b6\u6784\u56fe\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625024.png",alt:"APISIX goal"})),(0,r.kt)("p",null,"\u804a\u4e86\u8fd9\u4e48\u591a APISIX \u7684\u5f53\u4e0b\uff0c\u4e5f\u548c\u5927\u5bb6\u804a\u804a APISIX \u7684\u672a\u6765\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a APISIX \u76ee\u524d\u662f Apache \u57fa\u91d1\u4f1a\u9879\u76ee\uff0c\u6240\u4ee5\u5b83\u5df2\u7ecf\u4e0d\u518d\u5c5e\u4e8e\u4e2a\u4eba\u6216\u516c\u53f8\uff0c\u800c\u662f\u5168\u4eba\u7c7b\u5171\u4eab\u8d22\u4ea7\u3002\u8fd9\u6837\u793e\u533a\u4e2d\u7684\u6bcf\u4e00\u4e2a\u4f60\uff0c\u90fd\u6709\u6743\u5229\u51b3\u5b9a\u4ed6\u5f80\u54ea\u4e2a\u65b9\u5411\u53d1\u5c55\u3002"),(0,r.kt)("p",null,"\u5f00\u6e90\u7248\u672c APISIX \u76ee\u524d\u9ed8\u8ba4\u642d\u914d\u7684\u914d\u7f6e\u4e2d\u5fc3\u662f etcd \uff0c\u867d\u7136\u76ee\u524d\u5b83\u4f9d\u65e7\u662f\u6700\u597d\u7684\u9009\u62e9\uff0c\u4f46\u6211\u4eec\u5728\u548c\u7528\u6237\u6c9f\u901a\u65f6\u4f9d\u7136\u7ecf\u5e38\u4f1a\u542c\u5230\u662f\u5426\u652f\u6301\u5176\u4ed6\u914d\u7f6e\u4e2d\u5fc3\uff0c\u6bd4\u8f83\u5e38\u89c1\u7684\u539f\u56e0\u662f etcd \u8fd9\u4e2a\u4ea7\u54c1\u592a\u65b0\u4e86\uff0c\u516c\u53f8\u73b0\u6709\u8fd0\u7ef4\u4ea7\u54c1\u652f\u6301\u5217\u8868\u4e2d\u6ca1\u6709\u5b83\u3002\u6240\u4ee5\u6211\u4eec\u8ba1\u5212\u8ba9 APISIX \u53ef\u4ee5\u4e0e\u5176\u4ed6\u914d\u7f6e\u4e2d\u5fc3\u534f\u4f5c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625025.png",alt:"APISIX data plane"})),(0,r.kt)("p",null,"APISIX \u5df2\u7ecf\u8d70\u5728\u5168\u6d41\u91cf\u6570\u636e\u9762\u8fd9\u6761\u8def\u4e0a\uff0c\u76f8\u4fe1\u5927\u5bb6\u90fd\u4f1a\u95ee\u4e00\u4e9b\u95ee\u9898\uff0c\u6bd4\u5982\uff1a\u4e3a\u4ec0\u4e48\u8981\u7edf\u4e00\u6d41\u91cf\u8f6c\u53d1\uff1f\u7edf\u4e00\u662f\u5426\u7ed9\u4f01\u4e1a\u5e26\u6765\u4ef7\u503c\uff1f\u5bf9\u6280\u672f\u4eba\u5458\u6709\u4ec0\u4e48\u6536\u76ca\uff1f\u5e26\u7740\u8fd9\u4e9b\u95ee\u9898\uff0c\u6211\u4eec\u770b\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625026.png",alt:"APISIX goal"})),(0,r.kt)("p",null,"\u7edf\u4e00\u672c\u8eab\u4e0d\u662f\u76ee\u6807\uff0c\u7edf\u4e00\u4e4b\u540e\u7684\u6536\u76ca\u624d\u662f\u6211\u4eec\u8ffd\u6c42\u7684\u80cc\u540e\u903b\u8f91\uff0c\u4e0b\u9762\u5206\u522b\u7ed9\u51fa\u51e0\u4e2a\u4e0d\u540c\u89d2\u5ea6\u6765\u5206\u522b\u9610\u8ff0\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd0\u7ef4\u89d2\u8272\uff1a\u4f7f\u7528\u76f8\u540c\u7684\u8fd0\u7ef4\u5de5\u5177\u6536\u96c6\u65e5\u5fd7\u3001Metric \u6307\u6807\u7b49\uff0c\u590d\u7528\u5df2\u6709\u79ef\u7d2f\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f00\u53d1\u89d2\u8272\uff1a\u57fa\u4e8e\u6807\u51c6\u5316\u7684 APISIX \u63d2\u4ef6\u5f00\u53d1\uff0c\u80fd\u529b\u53ef\u4ee5\u65b9\u4fbf\u590d\u7528\uff0c\u5e76\u4e14\u79ef\u7d2f\u7684\u7ecf\u9a8c\u53ef\u4ee5\u5e94\u7528\u5230 LB\u3001API Gateway\u3001K8s Ingress \u7b49\u4e0d\u540c\u4ea7\u54c1\u7ebf\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u516c\u53f8\u4ef7\u503c\uff1a\u7edf\u4e00\u6280\u672f\u6808\uff0c\u964d\u4f4e\u516c\u53f8\u8fd0\u8425\u6210\u672c\uff0c\u964d\u4f4e\u8fc7\u6e21\u5230\u5fae\u670d\u52a1\u3001\u4e91\u539f\u751f\u7684\u96be\u5ea6\uff0c\u52a0\u901f\u4f01\u4e1a\u6570\u5b57\u5316\u8f6c\u578b\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210625027.png",alt:"connect APISIX"})),(0,r.kt)("p",null,"\u6700\u540e\u662f APISIX \u7684 QQ \u7fa4\uff0c\u6709\u4efb\u4f55\u95ee\u9898\u90fd\u53ef\u4ee5\u5728\u8fd9\u91cc\u6216\u8005 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues"},"Github issue")," \u7559\u8a00\uff0c\u4f1a\u6709\u4e13\u4eba\u5feb\u901f\u54cd\u5e94\uff0c\u518d\u6b21\u611f\u8c22\u5927\u5bb6\u3002"),(0,r.kt)("p",null,"\u70b9\u51fb\u89c2\u770b",(0,r.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1w54y1V73Z?p=1&share_medium=android&share_plat=android&share_source=COPY&share_tag=s_i&timestamp=1621812452&unique_k=PEusrt"},"\u89c6\u9891")))}c.isMDXComponent=!0}}]);