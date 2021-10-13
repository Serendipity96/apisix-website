"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94490],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return h}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),k=c(a),h=l,s=k["".concat(u,".").concat(h)]||k[h]||m[h]||r;return a?n.createElement(s,p(p({ref:t},o),{},{components:a})):n.createElement(s,p({ref:t},o))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var c=2;c<r;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},73913:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return c},toc:function(){return o},default:function(){return k}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),p={title:"\u652f\u6301 10 \u4ebf\u65e5\u6d41\u91cf\u7684\u57fa\u7840\u8bbe\u65bd\uff1a\u5f53 Apahce APISIX \u9047\u4e0a\u817e\u8baf",author:"\u5f90\u946b",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","\u817e\u8baf\u6e38\u620f","\u57fa\u7840\u8bbe\u65bd"],description:"\u672c\u6587\u6574\u7406\u81ea\u817e\u8baf\u6e38\u620f\u8d1f\u8d23\u5185\u90e8\u5bb9\u5668\u5e73\u53f0\u7684\u5de5\u7a0b\u5e08\u5f90\u946b\u5728 Apache APISIX Meetup - \u6df1\u5733\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u4e0d\u4ec5\u53ef\u4ee5\u4e86\u89e3\u7f51\u5173\u662f\u4ec0\u4e48\u3001\u7f51\u5173\u6a21\u5f0f\u5bf9\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u7684\u6539\u8fdb\uff0c\u8fd8\u53ef\u4ee5\u4e86\u89e3\u817e\u8baf OTeam \u8bde\u751f\u7684\u539f\u56e0\uff0c\u4ee5\u53ca Apache APISIX \u662f\u5982\u4f55\u5728\u817e\u8baf\u5185\u90e8\u843d\u5730\u7684\u3002",tags:["technology","practical case"]},i=void 0,u={permalink:"/blog/2021/05/24/Tencent-Games",source:"@site/blog/2021-05-24-Tencent-Games.md",title:"\u652f\u6301 10 \u4ebf\u65e5\u6d41\u91cf\u7684\u57fa\u7840\u8bbe\u65bd\uff1a\u5f53 Apahce APISIX \u9047\u4e0a\u817e\u8baf",description:"\u672c\u6587\u6574\u7406\u81ea\u817e\u8baf\u6e38\u620f\u8d1f\u8d23\u5185\u90e8\u5bb9\u5668\u5e73\u53f0\u7684\u5de5\u7a0b\u5e08\u5f90\u946b\u5728 Apache APISIX Meetup - \u6df1\u5733\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u4e0d\u4ec5\u53ef\u4ee5\u4e86\u89e3\u7f51\u5173\u662f\u4ec0\u4e48\u3001\u7f51\u5173\u6a21\u5f0f\u5bf9\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u7684\u6539\u8fdb\uff0c\u8fd8\u53ef\u4ee5\u4e86\u89e3\u817e\u8baf OTeam \u8bde\u751f\u7684\u539f\u56e0\uff0c\u4ee5\u53ca Apache APISIX \u662f\u5982\u4f55\u5728\u817e\u8baf\u5185\u90e8\u843d\u5730\u7684\u3002",date:"2021-05-24T00:00:00.000Z",formattedDate:"May 24, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"practical case",permalink:"/blog/tags/practical-case"}],readingTime:1.76,truncated:!0,authors:[{name:"\u5f90\u946b"}],prevItem:{title:"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03",permalink:"/blog/2021/05/25/Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03"},nextItem:{title:"Traffic Split in Apache APISIX Ingress Controller",permalink:"/blog/2021/03/27/traffic-split-in-apache-apisix-ingress-controller"}},c={authorsImageUrls:[void 0]},o=[{value:"\u7f51\u5173\u662f\u4ec0\u4e48",id:"\u7f51\u5173\u662f\u4ec0\u4e48",children:[{value:"\u4f20\u7edf\u67b6\u6784\u7684\u901a\u7528\u529f\u80fd",id:"\u4f20\u7edf\u67b6\u6784\u7684\u901a\u7528\u529f\u80fd",children:[]},{value:"\u7f51\u5173\u6a21\u5f0f\u7684\u51fa\u73b0",id:"\u7f51\u5173\u6a21\u5f0f\u7684\u51fa\u73b0",children:[]}]},{value:"\u9879\u76ee\u4ecb\u7ecd",id:"\u9879\u76ee\u4ecb\u7ecd",children:[{value:"OTeam",id:"oteam",children:[]},{value:"Apache APISIX",id:"apache-apisix",children:[]}]},{value:"Apache APISIX in OTeam",id:"apache-apisix-in-oteam",children:[]},{value:"OTeam \u53d1\u5c55\u60c5\u51b5",id:"oteam-\u53d1\u5c55\u60c5\u51b5",children:[]},{value:"\u817e\u8baf\u5185\u90e8\u7279\u6027\u4ecb\u7ecd",id:"\u817e\u8baf\u5185\u90e8\u7279\u6027\u4ecb\u7ecd",children:[{value:"\u5185\u90e8\u7684\u75db\u70b9",id:"\u5185\u90e8\u7684\u75db\u70b9",children:[]},{value:"\u95ee\u9898\u7684\u89e3\u51b3",id:"\u95ee\u9898\u7684\u89e3\u51b3",children:[]}]},{value:"\u6700\u540e\u7684\u8bdd",id:"\u6700\u540e\u7684\u8bdd",children:[]}],m={toc:o};function k(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u6574\u7406\u81ea\u817e\u8baf\u6e38\u620f\u8d1f\u8d23\u5185\u90e8\u5bb9\u5668\u5e73\u53f0\u7684\u5de5\u7a0b\u5e08\u5f90\u946b\u5728 Apache APISIX Meetup - \u6df1\u5733\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u4e0d\u4ec5\u53ef\u4ee5\u4e86\u89e3\u7f51\u5173\u662f\u4ec0\u4e48\u3001\u7f51\u5173\u6a21\u5f0f\u5bf9\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u7684\u6539\u8fdb\uff0c\u8fd8\u53ef\u4ee5\u4e86\u89e3\u817e\u8baf OTeam \u8bde\u751f\u7684\u539f\u56e0\uff0c\u4ee5\u53ca Apache APISIX \u662f\u5982\u4f55\u5728\u817e\u8baf\u5185\u90e8\u843d\u5730\u7684\u3002")),(0,r.kt)("p",null,"\u5728\u6b63\u5f0f\u8fdb\u5165\u5206\u4eab\u4e4b\u524d\uff0c\u5148\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u4e00\u4e0b\u7f51\u5173\uff08Gateway\uff09\u7684\u4f5c\u7528\u548c\u4ef7\u503c\u3002"),(0,r.kt)("h2",{id:"\u7f51\u5173\u662f\u4ec0\u4e48"},"\u7f51\u5173\u662f\u4ec0\u4e48"),(0,r.kt)("h3",{id:"\u4f20\u7edf\u67b6\u6784\u7684\u901a\u7528\u529f\u80fd"},"\u4f20\u7edf\u67b6\u6784\u7684\u901a\u7528\u529f\u80fd"),(0,r.kt)("p",null,"\u5728\u4f20\u7edf\u7684\u67b6\u6784\u4e2d\uff0c\u6ca1\u6709\u7f51\u5173\uff0c\u90a3\u4e48\u901a\u7528\u529f\u80fd\u8be5\u600e\u4e48\u590d\u7528\u8d77\u6765\u5462\uff1f\u8fd9\u91cc\u7684\u901a\u7528\u529f\u80fd\u6307\u4e1a\u52a1\u65e0\u5173\u7684\u4e00\u4e9b\u7279\u6027\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u5168\u6027\uff1a\u8eab\u4efd\u9a8c\u8bc1\u3001\u6388\u6743\u3001\u9632\u91cd\u653e\u3001\u9632\u7be1\u6539\u3001\u5bf9\u6297 DDos \u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u9760\u6027\uff1a\u670d\u52a1\u964d\u7ea7\u3001\u7194\u65ad\u3001\u9650\u6d41\u7b49\u3002")),(0,r.kt)("p",null,"\u8fd9\u4e9b\u529f\u80fd\u5728\u4f20\u7edf\u67b6\u6784\u4e0b\uff0c\u6700\u5e38\u89c1\u7684\u5904\u7406\u65b9\u6cd5\u5c31\u662f\u5c06\u5176\u653e\u5165\u670d\u52a1\u6846\u67b6\u5f53\u4e2d\uff0c\u901a\u8fc7 AOP \u7684\u65b9\u5f0f\u53bb\u5b9e\u73b0\uff0c\u7c7b\u4f3c\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630640321175-ee272ad4-d8ee-45f3-8b67-9630fb534a82.png",alt:"\u4f20\u7edf\u67b6\u6784"})),(0,r.kt)("p",null,"\u4f20\u7edf\u67b6\u6784\u56fe\u4e2d\u6709\u4ee5\u4e0b\u51e0\u4e2a\u6a21\u5757\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Backend\uff1a\u540e\u7aef\u670d\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},"AOP\uff1a\u6846\u67b6\u643a\u5e26\u7684 AOP \u5206\u5c42\u3002"),(0,r.kt)("li",{parentName:"ul"},"SD\uff1a\u670d\u52a1\u4e2d\u5fc3\uff0c\u7528\u4e8e\u670d\u52a1\u95f4\u53d1\u73b0\uff0c\u6b64\u7ec4\u4ef6\u5728\u4e91\u539f\u751f\u73af\u5883\u4e0b\u7ecf\u5e38\u7528 Service \u66ff\u4ee3\u3002"),(0,r.kt)("li",{parentName:"ul"},"LB\uff1a\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u653e\u7f6e\u4e8e\u7f51\u7edc\u8fb9\u754c\u4e0a\uff0c\u4f5c\u4e3a\u5916\u90e8\u6d41\u91cf\u7684\u5165\u53e3\u3002")),(0,r.kt)("p",null,"\u8fd9\u79cd\u67b6\u6784\u5728\u65e9\u4e9b\u5e74\u7684\u8bbe\u8ba1\u4e2d\u975e\u5e38\u5e38\u89c1\uff0c\u7531\u6b64\u8bde\u751f\u4e86\u5f88\u591a\u5927\u800c\u5168\u7684\u670d\u52a1\u6846\u67b6\uff0c\u6bd4\u5982 Dubbo\u3001SpringCloud \u7b49\u3002\u5982\u679c\u6211\u4eec\u53bb\u8ba4\u771f\u7814\u7a76\u5b83\u4eec\u7684\u529f\u80fd\u4ecb\u7ecd\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u8fd9\u4e9b\u529f\u80fd\u70b9\u5b83\u4eec\u5927\u591a\u90fd\u6709\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u67b6\u6784\u7684\u4f18\u70b9\u5728\u4e8e\u4e0a\u4e0b\u6e38\u5173\u7cfb\u7b80\u5355\uff0c\u7f51\u7edc\u4f20\u8f93\u4e2d\u4e5f\u5c11\u4e86\u4e00\u6b21\u8f6c\u53d1\u3002\u4f46\u662f\u5b83\u4eec\u7684\u7f3a\u70b9\u4e5f\u5f88\u660e\u663e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u7528\u529f\u80fd\u7684\u8fed\u4ee3\u4f1a\u8feb\u4f7f\u4e1a\u52a1\u670d\u52a1\u66f4\u65b0\uff1a\u7531\u4e8e\u91c7\u7528\u7684\u662f\u4ee3\u7801\u5f15\u7528\uff0c\u56e0\u6b64\u9700\u8981\u4e1a\u52a1\u670d\u52a1\u91cd\u65b0\u7f16\u8bd1\u624d\u80fd\u4f7f\u529f\u80fd\u751f\u6548\u3002\u5bf9\u4e00\u4e9b\u6ca1\u6709\u5b9e\u73b0\u5e73\u6ed1\u53d1\u5e03\u7684\u56e2\u961f\uff0c\u7531\u4e8e\u670d\u52a1\u4f1a\u4e2d\u65ad\uff0c\u56e0\u6b64\u8fd8\u5f97\u6311\u4e1a\u52a1\u7684\u7a7a\u95f2\u671f\u53d1\u5e03\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7248\u672c\u96be\u4ee5\u7ba1\u7406\uff1a\u7531\u4e8e\u6211\u4eec\u4e0d\u53ef\u80fd\u6bcf\u6b21\u53d1\u5e03\u90fd\u8ba9\u6240\u6709\u4e1a\u52a1\u670d\u52a1\u5347\u7ea7\u6700\u65b0\u7248\uff0c\u957f\u6b64\u4ee5\u5f80\uff0c\u5404\u4e2a\u670d\u52a1\u7684\u7248\u672c\u5c06\u4f1a\u4e0d\u4e00\u81f4\u3002")),(0,r.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u662f\u5426\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u901a\u7528\u529f\u80fd\u4e0b\u6c89\u5230\u4e00\u4e2a\u72ec\u7acb\u7684\u670d\u52a1\uff0c\u5b83\u53ef\u4ee5\u5355\u72ec\u8fed\u4ee3\u4e14\u4e1a\u52a1\u65e0\u5173\uff1f"),(0,r.kt)("h3",{id:"\u7f51\u5173\u6a21\u5f0f\u7684\u51fa\u73b0"},"\u7f51\u5173\u6a21\u5f0f\u7684\u51fa\u73b0"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630640321180-bd19ad6c-6116-4982-98e8-3b626285ed03.png",alt:"\u7f51\u5173\u6a21\u5f0f"})),(0,r.kt)("p",null,"\u4ece\u4e0a\u56fe\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4f20\u7edf\u67b6\u6784\u7684\u5927\u90e8\u5206\u5185\u5bb9\u90fd\u6ca1\u6709\u53d8\u5316\uff0c\u53ea\u662f\u5728\u540e\u7aef\u670d\u52a1\u4e0e LB\uff08\u8d1f\u8f7d\u5747\u8861\u5668\uff09 \u4e4b\u95f4\u591a\u51fa\u4e86\u4e00\u4e2a\u89d2\u8272\uff1a\u7f51\u5173\u3002\n\uff08\u8fd9\u91cc\u9700\u8981\u6f84\u6e05\u7684\u662f\uff0c\u672c\u6587\u8ba8\u8bba\u7684\u7f51\u5173\u7279\u6307 API Gateway \uff0c\u5373\u9488\u5bf9\u540e\u53f0\u670d\u52a1\u4ee5 API \u63d0\u4f9b\u670d\u52a1\u7684\u573a\u666f\u3002\uff09"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u8fd9\u4e2a\u56fe\u4e2d\uff0c\u6709\u65f6 LB \u540c\u65f6\u4e5f\u8d77\u5230\u7f51\u5173\u7684\u4f5c\u7528\uff0c\u6bd4\u5982 k8s \u7684 Ingress \u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u6709\u4e86\u7f51\u5173\u8fd9\u4e2a\u7ec4\u4ef6\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06\u4f20\u7edf\u67b6\u6784\u7684\u901a\u7528\u529f\u80fd\u4e0b\u6c89\u5230\u7f51\u5173\uff0c\u8fd9\u6837\u4e00\u6765\u6211\u4eec\u83b7\u5f97\u4e86\u5f88\u591a\u7684\u597d\u5904\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f51\u5173\u53ef\u4ee5\u72ec\u7acb\u8fed\u4ee3\uff0c\u4e0d\u518d\u9700\u8981\u4e1a\u52a1\u670d\u52a1\u914d\u5408\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e0e\u8bed\u8a00\u65e0\u5173\uff0c\u53ef\u4ee5\u914d\u7f6e\u4e13\u95e8\u7684\u56e2\u961f\u7ef4\u62a4\u3002")),(0,r.kt)("p",null,"\u4f46\u662f\u7f51\u5173\u6a21\u5f0f\u4e5f\u6709\u81ea\u5df1\u7684\u7f3a\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u591a\u4e86\u4e00\u6b21\u8f6c\u53d1\uff0c\u5ef6\u8fdf\u53d8\u9ad8\uff0c\u6392\u67e5\u95ee\u9898\u590d\u6742\u5ea6\u53d8\u9ad8\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7f51\u5173\u5982\u679c\u4e0d\u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u53ef\u80fd\u4f1a\u6210\u4e3a\u6574\u4e2a\u5e73\u53f0\u7684\u74f6\u9888\u3002")),(0,r.kt)("p",null,"\u5982\u4f55\u5e73\u8861\u597d\u7f51\u5173\u6a21\u5f0f\u7684\u597d\u5904\u548c\u7f3a\u70b9\uff0c\u4e0d\u4ec5\u5341\u5206\u8003\u9a8c\u4e1a\u52a1\u56e2\u961f\u7684\u5b9e\u529b\uff0c\u66f4\u662f\u4e0e\u7f51\u5173\u7684\u9009\u578b\u606f\u606f\u76f8\u5173\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u8981\u8bf7\u51fa\u672c\u6587\u8981\u4ecb\u7ecd\u7684\u4e24\u4e2a\u91cd\u70b9\u5bf9\u8c61\uff1a\u817e\u8baf OTeam \u548c Apache APISIX\u3002"),(0,r.kt)("h2",{id:"\u9879\u76ee\u4ecb\u7ecd"},"\u9879\u76ee\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"oteam"},"OTeam"),(0,r.kt)("p",null,"\u5f88\u591a\u4eba\u5bf9\u817e\u8baf\u5185\u90e8\u7684\u8d5b\u9a6c\u6587\u5316\u6050\u6015\u65e9\u6709\u8033\u95fb\u3002\u5728\u817e\u8baf\u5185\u90e8\uff0c\u8001\u677f\u4eec\u4e3a\u4e86\u521b\u9020\u66f4\u6709\u7ade\u4e89\u529b\u7684\u4ea7\u54c1\uff0c\u901a\u5e38\u4f1a\u8ba9\u4e0d\u540c\u7684\u961f\u4f0d\u53bb\u540c\u4e00\u4e2a\u8d5b\u9053\u7ade\u4e89\u3002\u7531\u4e8e\u4ea7\u54c1\u7684\u7ade\u4e89\u5173\u7cfb\uff0c\u4e0b\u9762\u7684\u6280\u672f\u5f53\u7136\u4e5f\u4e0d\u4f1a\u5171\u4eab\uff0c\u56e0\u6b64\u5bfc\u81f4\u65e9\u671f\u7684\u817e\u8baf\u5728\u6280\u672f\u6c89\u6dc0\u65b9\u9762\u662f\u4e92\u8054\u7f51\u5927\u5382\u4e2d\u57ab\u5e95\u7684\u90a3\u4e2a\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u6574\u5408\u516c\u53f8\u5185\u7684\u91cd\u590d\u8f6e\u5b50\uff0c\u6c89\u6dc0\u6280\u672f\u4e2d\u53f0\u3002\u817e\u8baf\u5c06\u76f8\u540c\u6027\u8d28\u7684\u51e0\u4e2a\u6280\u672f\u4ea7\u54c1\u90fd\u653e\u5165\u540c\u4e00\u4e2a Oteam\uff0c\u5c06\u7ef4\u62a4\u4eba\u5458\u90fd\u6574\u5408\u8d77\u6765\uff0c\u4e00\u8d77\u53d1\u529b\uff0c\u8ba9\u8fd9\u4e9b\u4ea7\u54c1\u9010\u6e10\u5408\u5e76\u6210\u4e00\u4e2a\u5927\u800c\u5168\u7684\u4ea7\u54c1\uff0c\u8fd9\u5c31\u662f Oteam\u3002"),(0,r.kt)("p",null,"\u6709\u7684 Oteam \u4e0b\u9762\u6709\u591a\u8fbe\u5341\u6570\u79cd\u4ea7\u54c1\uff0c\u800c\u6709\u7684\u53ea\u6709\u4e00\u79cd\u3002\u6bd4\u5982 Apache APISIX \u6240\u5728\u7684 Oteam \u5c31\u5355\u5355\u53ea\u6709 Apache APISIX \u8fd9\u4e00\u4e2a\u4ea7\u54c1\uff0c\u8fd9\u4e2a Oteam \u6210\u7acb\u7684\u521d\u8877\u662f\uff1a\u7ef4\u62a4\u817e\u8baf\u5185\u90e8\u7684 Apache APISIX \u5b9a\u5236\u5316\u7279\u6027\u3002"),(0,r.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,r.kt)("p",null,"\u611f\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u770b\u770b Apache APISIX \u7684 GitHub \u9879\u76ee\u4e3b\u9875\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX"),"\u3002\u6211\u4eec\u5728\u8fd9\u91cc\u53ea\u7b80\u5355\u4ecb\u7ecd\u51e0\u4e2a\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apache APISIX \u662f\u57fa\u4e8e OpenResty \u7684\u9ad8\u6027\u80fd\u7f51\u5173\uff0c\u6bd4\u8d77\u7ade\u54c1 Kong\uff0c\u5b83\u7684\u8def\u7531\u6027\u80fd\u9ad8\u4e86\u4e00\u4e2a\u6570\u91cf\u7ea7\u3002"),(0,r.kt)("li",{parentName:"ul"},"Apache APISIX \u4f7f\u7528 ETCD \u4f5c\u4e3a\u914d\u7f6e\u5b58\u50a8\uff0c\u53ef\u4ee5\u5b9e\u73b0\u914d\u7f6e\u79d2\u66f4\u65b0\u3002"),(0,r.kt)("li",{parentName:"ul"},"Apache APISIX \u662f Apache \u57fa\u91d1\u4f1a\u6bd5\u4e1a\u6700\u5feb\u3001\u6700\u8ba9\u5bfc\u5e08\u7701\u5fc3\u7684\u9879\u76ee\u4e4b\u4e00\u3002")),(0,r.kt)("h2",{id:"apache-apisix-in-oteam"},"Apache APISIX in OTeam"),(0,r.kt)("p",null,"\u5927\u5bb6\u662f\u4e0d\u662f\u5f88\u597d\u5947\u817e\u8baf\u7684 OTeam \u662f\u600e\u4e48\u8fd0\u4f5c\uff0c\u53c8\u5982\u4f55\u548c GitHub \u7684\u793e\u533a\u5f62\u6210\u53cc\u8d62\u7684\u5173\u7cfb\u7684\uff1f\nOTeam \u7684\u8fd0\u4f5c\u53c2\u8003\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630640321189-46cf2163-552c-4816-bdf6-ef4f58702667.png",alt:"OTeam \u7684\u8fd0\u8425\u7b56\u7565"})),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 OTeam \u7684\u7279\u6027\u8fed\u4ee3\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u95ed\u73af\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u901a\u8fc7 Issue \u53cd\u9988\u95ee\u9898\u548c\u9700\u6c42"),(0,r.kt)("li",{parentName:"ul"},"OTeam \u7684\u6210\u5458 \u5728 \u5468\u4f1a \u4e0a\u8ba8\u8bba\u89e3\u51b3\u65b9\u6848\uff0c\u6216\u8005\u76f4\u63a5\u5728 Issue \u4e2d\u8ddf\u8fdb"),(0,r.kt)("li",{parentName:"ul"},"\u6309\u7167\u89e3\u51b3\u65b9\u6848\u5b9e\u73b0\u7279\u6027 or \u4fee\u590d Bug"),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801 Review \u540e\uff0c\u7ecf\u5386 CI \u5408\u5165\u5230\u4e3b\u5e72\u4e2d\uff0c\u518d\u89c6\u60c5\u51b5\u9700\u4e0d\u9700\u8981\u6253\u5305\u955c\u50cf\u53d1\u7248\n\u8fd9\u4e2a\u6d41\u7a0b\u5176\u5b9e\u548c GitHub \u591a\u6570\u5f00\u6e90\u9879\u76ee\u7684\u8d21\u732e\u8fc7\u7a0b\u662f\u6ca1\u533a\u522b\u7684\uff0c\u5173\u952e\u70b9\u5728\u4e8e\uff1a"),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u4e86 Issue \u540e\uff0c\u817e\u8baf\u5de5\u7a0b\u5e08\u4f1a\u5224\u65ad\u8fd9\u4e2a\u95ee\u9898\u5bf9\u4e8e\u793e\u533a\u6765\u8bf4\uff0c\u662f\u5426\u4e5f\u662f\u4e00\u4e2a\u5171\u6027\u95ee\u9898\u3002\u5982\u679c\u662f\uff0c\u5219\u4f1a\u53d1 PR \u5230\u793e\u533a\u7684\u4ed3\u5e93\u53bb\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u817e\u8baf OTeam \u4f1a\u5b9a\u671f Review Apache APISIX \u7684\u65b0\u7279\u6027\uff0c\u5224\u65ad\u5176\u662f\u5426\u7a33\u5b9a\u3001\u662f\u5426\u5bf9\u817e\u8baf\u5185\u90e8\u4e5f\u662f\u4e00\u4e2a\u75db\u70b9\u3002\u5982\u679c\u7b54\u6848\u662f\u80af\u5b9a\u7684\uff0c\u5408\u5165\u76f8\u5173\u4ee3\u7801\u3002")),(0,r.kt)("p",null,"\u6700\u65e9\u671f\u7684\u65f6\u5019\uff0cOTeam \u4f1a\u6bcf 12 \u5c0f\u65f6\uff0c\u81ea\u52a8\u5408\u5165\u793e\u533a\u4ee3\u7801\u5230\u5185\u90e8\u4ed3\u5e93\u4e2d\uff0c\u4ee5\u4fdd\u8bc1\u6211\u4eec\u4e0e\u793e\u533a\u80fd\u591f\u5171\u540c\u524d\u8fdb\uff0c\u4f46\u8fd9\u79cd\u505a\u6cd5\u5e26\u6765\u4e86\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5408\u5165\u7684\u4ee3\u7801\u901a\u8fc7\u76ee\u524d\u7684\u96c6\u6210\u6d4b\u8bd5\u53ea\u80fd\u4fdd\u8bc1\u529f\u80fd \u6b63\u786e\u6027 \u5374\u6ca1\u6cd5\u4fdd\u8bc1 \u7a33\u5b9a\u6027\uff0c\u5f88\u591a\u5076\u73b0\u7684\u95ee\u9898\u90fd\u662f\u5728\u5e76\u53d1\u4e2d\u53d1\u751f\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5408\u5165\u7684\u4ee3\u7801\uff0c\u6709\u65f6\u4f1a\u4ea7\u751f\u4e0a\u6e38\u7684\u591a\u4e2a PR \u5728\u903b\u8f91\u4e0a\u51fa\u73b0\u51b2\u7a81\u7684\u95ee\u9898\uff0c\u4f46\u662f\u5404\u81ea\u7684 CI \u65e0\u6cd5\u68c0\u6d4b\u51fa\u6765\uff0c\u53ea\u6709\u5f53\u5408\u5165\u4e3b\u5e72\u540e\uff0c\u624d\u4f1a\u53d1\u73b0\u4e3b\u5e72\u7684\u4ee3\u7801\u4ea7\u751f\u4e86\u95ee\u9898\u3002")),(0,r.kt)("p",null,"\u51fa\u4e8e\u4ee5\u4e0a\u539f\u56e0\uff0c\u73b0\u5728 OTeam \u8f6c\u4e3a\u5b9a\u671f Review \u540e\u5408\u5165\u6240\u9700\u7279\u6027\u7684\u4ee3\u7801\u7684\u7b56\u7565\u3002"),(0,r.kt)("h2",{id:"oteam-\u53d1\u5c55\u60c5\u51b5"},"OTeam \u53d1\u5c55\u60c5\u51b5"),(0,r.kt)("p",null,"\u622a\u6b62 2021 \u5e74 5 \u6708\uff0cApache APISIX \u6240\u5728\u7684 OTeam \u5728\u817e\u8baf\u5185\u90e8\u5df2\u4e3a\u8d85\u8fc7\u5341\u4e2a\u56e2\u961f\u843d\u5730\u4e86 Apache APISIX\uff0c\u5176\u4e2d\u6700\u5927\u7684\u4e1a\u52a1\u65e5\u8bf7\u6c42\u91cf\u5df2\u8d85\u8fc7\u5341\u4ebf\uff0c\u540c\u65f6 OTeam \u4e5f\u4e3a Apache APISIX \u5f00\u53d1\u4e86\u8d85\u8fc7\u5341\u4e2a\u5185\u90e8\u7279\u6027\uff0c\u5176\u4e2d\u5305\u62ec\u5185\u90e8\u7684\u670d\u52a1\u53d1\u73b0\u3001RPC\u534f\u8bae\u8f6c\u6362\u3001\u6253\u901a\u76d1\u63a7\u5e73\u53f0\u7b49\u3002\n\u4e0e\u6b64\u540c\u65f6\uff0cOTeam \u4e5f\u5c06\u5f00\u53d1\u7684\u4e00\u4e9b\u901a\u7528\u7684\u7279\u6027\u8d21\u732e\u5230\u4e86\u793e\u533a\uff0c\u4e3a\u793e\u533a\u5e26\u6765\u4e86\u4e0d\u5c11 Contributor\u3002\u76ee\u524d OTeam \u56e2\u961f\u4e2d\uff0c\u6709\u4e24\u4f4d\u6210\u5458\u540c\u65f6\u4e5f\u662f ApacheAPISIX \u793e\u533a\u7684 PMC\uff0cOTeam \u4e3a\u793e\u533a\u8d21\u732e\u4e86\u8d85\u8fc7 50 \u4e2aPR\u3002\u540c\u65f6\uff0c\u6211\u4eec\u76f8\u4fe1 OTeam \u4eca\u540e\u8fd8\u4f1a\u4e0e Apache APISIX \u793e\u533a\u5f00\u5c55\u66f4\u591a\u7684\u5408\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u817e\u8baf\u5185\u90e8\u7279\u6027\u4ecb\u7ecd"},"\u817e\u8baf\u5185\u90e8\u7279\u6027\u4ecb\u7ecd"),(0,r.kt)("p",null,"OTeam \u7684\u4e3b\u8981\u804c\u8d23\u662f\u7ef4\u62a4 Apache APISIX \u7684\u4e00\u4e9b\u9488\u5bf9\u817e\u8baf\u5185\u90e8\u7684\u7279\u6027\uff0c\u90a3\u4e48\u8fd9\u4e9b\u7279\u6027\u90fd\u662f\u54ea\u4e9b\uff0c\u53c8\u89e3\u51b3\u4e86\u4ec0\u4e48\u6837\u7684\u75db\u70b9\u5462\uff1f"),(0,r.kt)("h3",{id:"\u5185\u90e8\u7684\u75db\u70b9"},"\u5185\u90e8\u7684\u75db\u70b9"),(0,r.kt)("p",null,"\u5148\u6765\u770b\u770b\uff0c\u6709\u54ea\u4e9b\u75db\u70b9\u662f\u817e\u8baf\u5185\u90e8\u72ec\u6709\u7684\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RPC \u6846\u67b6\u5bf9\u524d\u7aef\u4e0d\u53cb\u597d\uff1a\u817e\u8baf\u5185\u90e8\u6709\u5f88\u591a\u9057\u7559\u9879\u76ee\u4f7f\u7528\u4e86 TARS \u6846\u67b6\uff0c\u5b83\u4e0d\u50cf TRPC \u4e00\u6837\u53ef\u4ee5\u76f4\u63a5\u652f\u6301 HTTP \u534f\u8bae\uff0c\u5b83\u53ea\u652f\u6301 RPC \u6846\u67b6\u6700\u4f20\u7edf\u7684 TCP \u534f\u8bae\uff0c\u4f20\u8f93\u5185\u5bb9\u90fd\u4f7f\u7528\u7279\u5b9a\u7684\u4e8c\u8fdb\u5236\u534f\u8bae\u3002\u8fd9\u5e26\u6765\u7684\u4e00\u4e2a\u95ee\u9898\u662f\uff0c\u6211\u4eec\u9700\u8981\u7ef4\u62a4\u4e00\u4e2a\u4e2d\u95f4\u670d\u52a1\u6765\u5c06\u8fd9\u4e9b\u63a5\u53e3\u8f6c\u6362\u4e3a\u524d\u7aef\u53cb\u597d\u7684 HTTP + Json \u5f62\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u4e2d\u5fc3\u591a\u6837\u5316\uff1a\u817e\u8baf\u5185\u90e8\u670d\u52a1\u53d1\u73b0\u7684\u7ec4\u4ef6\u4f17\u591a\uff0c\u6bd4\u5982 CL5\u3001L5\u3001\u5317\u6781\u661f\u7b49\u3002\u867d\u7136\u5728\u672a\u6765\uff0c\u670d\u52a1\u7ec4\u4ef6\u4f1a\u9010\u6e10\u7edf\u4e00\uff0c\u4f46\u5728\u8fc7\u6e21\u671f\u95f4\uff0c\u4f1a\u5b58\u5728\u591a\u4e2a\u670d\u52a1\u4e2d\u5fc3\u540c\u65f6\u4f7f\u7528\u7684\u60c5\u51b5\uff0c\u6700\u5f00\u59cb\u7684 Apache APISIX \u4e0d\u652f\u6301\u8fd9\u4e00\u70b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u544a\u8b66\uff1a\u4f5c\u4e3a\u4e00\u4e2a\u7f51\u5173\u89e3\u51b3\u65b9\u6848\uff0c\u544a\u8b66\u4e0d\u662f\u4e00\u4e2a\u5b83\u5e94\u8be5\u5173\u6ce8\u7684\u65b9\u5411\uff0c\u4f46\u662f\u4f5c\u4e3a\u7f51\u5173\u8fd9\u4e2a\u57fa\u7840\u7ec4\u4ef6\uff0c\u544a\u8b66\u4e00\u5b9a\u662f\u56e2\u961f\u6240\u5173\u5fc3\u7684\u4e8b\u9879\uff0c\u8981\u600e\u4e48\u89e3\u51b3\u544a\u8b66\u95ee\u9898\uff0c\u4e5f\u662f\u4e00\u4e2a\u75db\u70b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u5168\u6027\uff1a\u817e\u8baf\u8fd9\u79cd\u4f53\u91cf\u7684\u516c\u53f8\uff0c\u9664\u4e86\u4ea7\u54c1\u672c\u8eab\u4f1a\u9762\u5bf9\u5927\u91cf\u6d41\u91cf\u4e4b\u5916\uff0c\u4ea7\u54c1\u8fd8\u6709\u5b89\u5168\u6027\u7684\u8981\u6c42\u3002\u4e0d\u4e4f ToC \u7684\u4ea7\u54c1\u4f7f\u7528\u4e86 OTeam \uff0c\u5b83\u4eec\u8981\u9762\u5bf9\u7684\u4e0d\u6b62\u6d77\u91cf\u7528\u6237\u7684\u8bef\u64cd\u4f5c\uff0c\u8fd8\u8981\u9762\u5bf9\u6765\u81ea\u7f51\u7edc\u7684\u653b\u51fb\uff0c\u65e0\u8bba\u662f\u5584\u610f\u8fd8\u662f\u6076\u610f\u7684\uff0c\u6700\u5178\u578b\u7684\u6709 DDos\u3001\u91cd\u653e\u3001\u7be1\u6539\u8bf7\u6c42\u7b49\u3002\u8fd9\u4e9b\u6d41\u91cf\u6211\u4eec\u662f\u5426\u53ef\u4ee5\u5728\u7f51\u5173\u5c42\u89e3\u51b3\uff1f")),(0,r.kt)("h3",{id:"\u95ee\u9898\u7684\u89e3\u51b3"},"\u95ee\u9898\u7684\u89e3\u51b3"),(0,r.kt)("p",null,"\u5e26\u7740\u8fd9\u4e9b\u95ee\u9898\uff0c\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u67b6\u6784\u62d3\u6251\u56fe\uff0c\u5b83\u6765\u81ea\u4e00\u4e2a\u817e\u8baf\u5185\u90e8\u67d0\u4e2a\u843d\u5730\u6848\u4f8b\u7684\u7b80\u5316\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630640321184-dfcba4df-1b97-4d6e-ab10-07f89e131438.png",alt:"OTeam \u67b6\u6784\u62d3\u6251\u56fe"})),(0,r.kt)("p",null,"\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u51fa\uff0c\u521a\u624d\u63d0\u51fa\u7684\u51e0\u4e2a\u95ee\u9898\u90fd\u5728 OTeam \u90fd\u5f97\u5230\u4e86\u89e3\u51b3\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f51\u5173\u5b9e\u73b0\u534f\u8bae\u8f6c\u6362\uff1aOTeam \u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u4e86 TRPC \u4e0e TARS \u7684\u534f\u8bae\u8f6c\u6362\uff0c\u8fd9\u6837\u4e00\u6765\u90a3\u4e9b\u6ca1\u6709\u5b9e\u73b0 HTTP \u7684\u9057\u7559\u670d\u52a1\uff0c\u53ef\u4ee5\u5728\u7f51\u5173\u76f4\u63a5\u4f7f\u7528\u5c01\u88c5\u597d\u7684\u534f\u8bae\u8f6c\u6362\u63d2\u4ef6\u6765\u5b9e\u73b0 HTTP \u548c RPC \u4e92\u8f6c\u7684\u9700\u6c42\u800c\u4e0d\u518d\u9700\u8981\u7f16\u5199\u4e2d\u95f4\u670d\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u670d\u52a1\u4e2d\u5fc3\uff1a\u8fd9\u4e00\u70b9\u5176\u5b9e\u5e94\u8be5\u4e0d\u6b62\u817e\u8baf\u5185\u90e8\u9700\u8981\uff0c\u76f8\u4fe1\u5916\u9762\u4e5f\u6709\u5f88\u591a\u540c\u5b66\u5728\u65b0\u8001\u67b6\u6784\u7684\u8fc7\u6e21\u671f\u9700\u8981\uff0c\u8be5\u7279\u6027\u6211\u4eec\u5df2\u7ecf\u53cd\u9988\u7ed9\u4e86\u793e\u533a\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u6807\u4e0a\u62a5\u81ea\u7814\u76d1\u63a7\u5e73\u53f0\uff1aOTeam \u5229\u7528\u63d2\u4ef6\u6253\u901a\u4e86\u817e\u8baf\u5185\u90e8\u7684\u51e0\u4e2a\u4e3b\u8981\u7684\u76d1\u63a7\u5e73\u53f0\uff0c\u8ba9\u7528\u6237\u53ef\u4ee5\u7b80\u5355\u914d\u7f6e\u540e\u81ea\u52a8\u4e0a\u62a5\u63a5\u53e3\u53ef\u89c2\u6d4b\u6027\u7684\u76f8\u5173\u4fe1\u606f\uff08\u94fe\u8def\u8c03\u7528\u3001\u65e5\u5fd7\u3001\u7edf\u8ba1\uff09\uff0c\u4e0a\u62a5\u540e\u7528\u6237\u53ef\u81ea\u884c\u5728\u76d1\u63a7\u5e73\u53f0\u914d\u7f6e\u544a\u8b66\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9632\u91cd\u653e\u4e0e\u9632\u7be1\u6539\uff1aOTeam \u5b9e\u73b0\u4e86\u9632\u91cd\u653e\u548c\u9632\u7be1\u6539\u63d2\u4ef6\uff0c\u8ba9\u9700\u8981\u8fd9\u4e9b\u80fd\u529b\u7684\u5bf9\u5916\u7684\u4e1a\u52a1\u53ef\u4ee5\u76f4\u63a5\u5f00\u7bb1\u5373\u7528\uff0c\u4fdd\u62a4\u81ea\u5df1\u7684\u63a5\u53e3\u5b89\u5168\u3002\n\u6211\u4eec\u5e0c\u671b\u8fd9\u4e9b\u4f8b\u5b50\u80fd\u8d77\u5230\u629b\u7816\u5f15\u7389\u7684\u4f5c\u7528\uff0c\u9f13\u52b1\u5927\u5bb6\u53bb\u53d1\u6398\u66f4\u591a Apache APISIX \u7684\u4f7f\u7528\u573a\u666f\uff0c\u66f4\u597d\u7684\u628a Apache APISIX \u8fd9\u4e2a\u597d\u7528\u7684\u5de5\u5177\u7528\u8d77\u6765\u3002\u6bd4\u5982\u5728\u817e\u8baf\u4e91\u56e2\u961f\uff0c\u5c31\u6709\u540c\u5b66\u5229\u7528\u7f51\u5173\u5b9e\u73b0\u4e86\u4e00\u4e9b\u817e\u8baf\u4e91\u5e73\u53f0\u5f3a\u5236\u8981\u6c42\u7684 API \u89c4\u8303\uff0c\u5c06\u8fd9\u903b\u8f91\u4e0b\u6c89\u5230\u4e86\u7f51\u5173\u3002")),(0,r.kt)("h2",{id:"\u6700\u540e\u7684\u8bdd"},"\u6700\u540e\u7684\u8bdd"),(0,r.kt)("p",null,"\u8f6c\u773c\u5728\u817e\u8baf\u5185\u5e2e\u52a9\u5404\u4e2a\u56e2\u961f\u7ef4\u62a4 Apache APISIX \u4e5f\u4e00\u5e74\u591a\u4e86\uff0c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0cOTeam \u65e2\u5e2e\u52a9\u4e1a\u52a1\u56e2\u961f\u89e3\u51b3\u4e86\u4ed6\u4eec\u7684\u75db\u70b9\uff0c\u4e5f\u4e0d\u65ad\u5b8c\u5584\u4e86 Apache APISIX \u5728\u817e\u8baf\u5185\u90e8\u7684\u7279\u6027\uff0c\u540c\u65f6\u4e5f\u95f4\u63a5\u63a8\u52a8\u4e86\u793e\u533a\u7684\u53d1\u5c55\uff0c\u5b9e\u73b0\u4e86\u5171\u8d62\u3002\n\u5982\u679c\u8bfb\u8005\u6240\u5728\u516c\u53f8\u5982\u679c\u8fd8\u6ca1\u6709\u843d\u5730\u7f51\u5173\u7684\u8bdd\uff0c\u53ef\u4ee5\u4e86\u89e3\u4e0b Apahce APISIX\u3002\u5df2\u7ecf\u843d\u5730\u4e86\u7f51\u5173\u7684\u8bfb\u8005\uff0c\u4e5f\u5e0c\u671b\u672c\u6587\u80fd\u591f\u7ed9\u4f60\u4eec\u5e26\u6765\u4e00\u70b9\u5728\u7f51\u5173\u843d\u5730\u4e0a\u7684\u7075\u611f\u548c\u5e2e\u52a9\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6b22\u8fce\u611f\u5174\u8da3\u7684\u540c\u5b66\u8bbf\u95ee bilibili ",(0,r.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1yK4y1G7CP/"},"Apache APISIX \u5728\u817e\u8baf\u6e38\u620f\u7684\u5e94\u7528"),"\uff0c\u89c2\u770b\u89c6\u9891\u3002")))}k.isMDXComponent=!0}}]);