"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73937],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),o=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=o(n),s=r,I=h["".concat(i,".").concat(s)]||h[s]||d[s]||l;return n?a.createElement(I,p(p({ref:t},u),{},{components:n})):a.createElement(I,p({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},76283:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return i},assets:function(){return o},toc:function(){return u},default:function(){return h}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),p={title:"\u57fa\u4e8e Apache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u66f4\u65b0\u4e0e\u843d\u5730\u5b9e\u8df5",author:"\u4f55\u806a",keywords:["APISIX","\u7231\u5947\u827a","API \u7f51\u5173","\u670d\u52a1\u53d1\u73b0"],description:"\u672c\u6587\u6574\u7406\u81ea\u7231\u5947\u827a\u9ad8\u7ea7\u7814\u53d1\u5e08\u4f55\u806a\u5728 Apache APISIX Meetup \u4e0a\u6d77\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u57fa\u4e8e Apache APISIX \u7f51\u5173\uff0c\u7231\u5947\u827a\u6280\u672f\u56e2\u961f\u662f\u5982\u4f55\u8fdb\u884c\u516c\u53f8\u67b6\u6784\u7684\u66f4\u65b0\u4e0e\u878d\u5408\uff0c\u6253\u9020\u51fa\u5168\u65b0\u7684\u7f51\u5173\u670d\u52a1\u3002",tags:["User Case"]},c=void 0,i={permalink:"/blog/2021/09/07/iQIYI-usercase",source:"@site/blog/2021/09/07/iQIYI-usercase.md",title:"\u57fa\u4e8e Apache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u66f4\u65b0\u4e0e\u843d\u5730\u5b9e\u8df5",description:"\u672c\u6587\u6574\u7406\u81ea\u7231\u5947\u827a\u9ad8\u7ea7\u7814\u53d1\u5e08\u4f55\u806a\u5728 Apache APISIX Meetup \u4e0a\u6d77\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u57fa\u4e8e Apache APISIX \u7f51\u5173\uff0c\u7231\u5947\u827a\u6280\u672f\u56e2\u961f\u662f\u5982\u4f55\u8fdb\u884c\u516c\u53f8\u67b6\u6784\u7684\u66f4\u65b0\u4e0e\u878d\u5408\uff0c\u6253\u9020\u51fa\u5168\u65b0\u7684\u7f51\u5173\u670d\u52a1\u3002",date:"2021-09-07T00:00:00.000Z",formattedDate:"September 7, 2021",tags:[{label:"User Case",permalink:"/blog/tags/user-case"}],readingTime:1.56,truncated:!0,authors:[{name:"\u4f55\u806a"}],prevItem:{title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u53ca\u8fdb\u9636\u73a9\u6cd5",permalink:"/blog/2021/09/07/how-to-use-apisix-auth"},nextItem:{title:"Python \u52a9\u4f60\u5feb\u901f\u4e0a\u624b Apache APISIX \u63d2\u4ef6\u5f00\u53d1",permalink:"/blog/2021/09/06/python-helps-you-quickly-with-Apache-APISIX-development"}},o={authorsImageUrls:[void 0]},u=[{value:"\u80cc\u666f\u63cf\u8ff0",id:"\u80cc\u666f\u63cf\u8ff0",children:[]},{value:"Apache APISIX \u4f18\u52bf",id:"apache-apisix-\u4f18\u52bf",children:[{value:"\u4e3a\u4ec0\u4e48\u653e\u5f03 Kong",id:"\u4e3a\u4ec0\u4e48\u653e\u5f03-kong",children:[]}]},{value:"\u57fa\u4e8e Apache APISIX \u4e0b\u7684\u7231\u5947\u827a\u7f51\u5173\u67b6\u6784",id:"\u57fa\u4e8e-apache-apisix-\u4e0b\u7684\u7231\u5947\u827a\u7f51\u5173\u67b6\u6784",children:[{value:"\u5e94\u7528\u573a\u666f\u4e00\uff1a\u5fae\u670d\u52a1\u7f51\u5173",id:"\u5e94\u7528\u573a\u666f\u4e00\uff1a\u5fae\u670d\u52a1\u7f51\u5173",children:[]},{value:"\u5e94\u7528\u573a\u666f\u4e8c\uff1a\u57fa\u7840\u529f\u80fd",id:"\u5e94\u7528\u573a\u666f\u4e8c\uff1a\u57fa\u7840\u529f\u80fd",children:[]},{value:"\u5e94\u7528\u573a\u666f\u4e09\uff1a\u670d\u52a1\u53d1\u73b0",id:"\u5e94\u7528\u573a\u666f\u4e09\uff1a\u670d\u52a1\u53d1\u73b0",children:[]},{value:"\u5e94\u7528\u573a\u666f\u56db\uff1a\u5b9a\u5411\u8def\u7531",id:"\u5e94\u7528\u573a\u666f\u56db\uff1a\u5b9a\u5411\u8def\u7531",children:[]},{value:"\u5e94\u7528\u573a\u666f\u4e94\uff1a\u591a\u5730\u591a\u7ea7\u5bb9\u707e",id:"\u5e94\u7528\u573a\u666f\u4e94\uff1a\u591a\u5730\u591a\u7ea7\u5bb9\u707e",children:[]}]},{value:"\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898",id:"\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898",children:[{value:"\u6210\u679c\u4e00\uff1a\u89e3\u51b3\u4e86\u524d\u7aef\u4e0d\u652f\u6301 SNI \u7684\u517c\u5bb9\u95ee\u9898",id:"\u6210\u679c\u4e00\uff1a\u89e3\u51b3\u4e86\u524d\u7aef\u4e0d\u652f\u6301-sni-\u7684\u517c\u5bb9\u95ee\u9898",children:[]},{value:"\u6210\u679c\u4e8c\uff1a\u4f18\u5316\u4e86\u5927\u91cf API \u8def\u7531\u5339\u914d\u95ee\u9898",id:"\u6210\u679c\u4e8c\uff1a\u4f18\u5316\u4e86\u5927\u91cf-api-\u8def\u7531\u5339\u914d\u95ee\u9898",children:[]},{value:"\u6210\u679c\u4e09\uff1a\u89e3\u51b3\u4e86 ETCD \u63a5\u53e3\u9650\u5236\u95ee\u9898",id:"\u6210\u679c\u4e09\uff1a\u89e3\u51b3\u4e86-etcd-\u63a5\u53e3\u9650\u5236\u95ee\u9898",children:[]},{value:"\u6210\u679c\u56db\uff1a\u4f18\u5316\u4e86 ETCD \u8fde\u63a5\u6570\u91cf\u7684\u6027\u80fd\u95ee\u9898",id:"\u6210\u679c\u56db\uff1a\u4f18\u5316\u4e86-etcd-\u8fde\u63a5\u6570\u91cf\u7684\u6027\u80fd\u95ee\u9898",children:[]},{value:"\u5f85\u4f18\u5316",id:"\u5f85\u4f18\u5316",children:[]}]},{value:"\u5bf9 Apache APISIX \u7684\u671f\u671b",id:"\u5bf9-apache-apisix-\u7684\u671f\u671b",children:[]}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7231\u5947\u827a\u5728\u4e4b\u524d\u6709\u5f00\u53d1\u4e86\u4e00\u6b3e\u7f51\u5173\u2014\u2014Skywalker\uff0c\u5b83\u662f\u57fa\u4e8e Kong \u505a\u7684\u4e8c\u6b21\u5f00\u53d1\uff0c\u76ee\u524d\u6d41\u91cf\u4f7f\u7528\u4e5f\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u7f51\u5173\u5b58\u91cf\u4e1a\u52a1\u65e5\u5e38\u5cf0\u503c\u4e3a\u767e\u4e07\u7ea7\u522b QPS\uff0cAPI \u8def\u7531\u6570\u91cf\u4e0a\u4e07\u3002\u4f46\u8fd9\u6b3e\u4ea7\u54c1\u7684\u4e0d\u8db3\u968f\u7740\u4f7f\u7528\u4e5f\u5f00\u59cb\u9010\u6b65\u4f53\u73b0\u3002\u4eca\u5e74\u5728\u4ea4\u63a5\u5230\u6b64\u9879\u76ee\u540e\uff0c\u6211\u4eec\u6839\u636e\u4e0a\u8ff0\u95ee\u9898\u548c\u56f0\u5883\uff0c\u5f00\u59cb\u5bf9\u76f8\u5173\u7f51\u5173\u7c7b\u4ea7\u54c1\u505a\u4e86\u4e00\u4e9b\u8c03\u7814\uff0c\u7136\u540e\u53d1\u73b0\u4e86 Apache APISIX\u3002\u5728\u9009\u62e9 Apache APISIX \u4e4b\u524d\uff0c\u7231\u5947\u827a\u5e73\u53f0\u5df2\u7ecf\u5728\u4f7f\u7528 Kong \u4e86\uff0c\u4f46\u662f\u540e\u6765 Kong \u88ab\u653e\u5f03\u4e86\u3002")),(0,l.kt)("h2",{id:"\u80cc\u666f\u63cf\u8ff0"},"\u80cc\u666f\u63cf\u8ff0"),(0,l.kt)("p",null,"\u7231\u5947\u827a\u5728\u4e4b\u524d\u6709\u5f00\u53d1\u4e86\u4e00\u6b3e\u7f51\u5173\u2014\u2014Skywalker\uff0c\u5b83\u662f\u57fa\u4e8e Kong \u505a\u7684\u4e8c\u6b21\u5f00\u53d1\uff0c\u76ee\u524d\u6d41\u91cf\u4f7f\u7528\u4e5f\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u7f51\u5173\u5b58\u91cf\u4e1a\u52a1",(0,l.kt)("strong",{parentName:"p"},"\u65e5\u5e38\u5cf0\u503c\u4e3a\u767e\u4e07\u7ea7\u522b QPS\uff0cAPI \u8def\u7531\u6570\u91cf\u4e0a\u4e07"),"\u3002\u4f46\u8fd9\u6b3e\u4ea7\u54c1\u7684\u4e0d\u8db3\u968f\u7740\u4f7f\u7528\u4e5f\u5f00\u59cb\u9010\u6b65\u4f53\u73b0\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6027\u80fd\u5dee\u5f3a\u4eba\u610f\uff0c\u56e0\u4e3a\u4e1a\u52a1\u91cf\u5927\uff0c\u6bcf\u5929\u6536\u5230\u5f88\u591a CPU IDLE \u8fc7\u4f4e\u7684\u544a\u8b66")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7cfb\u7edf\u67b6\u6784\u7684\u7ec4\u4ef6\u4f9d\u8d56\u591a")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fd0\u7ef4\u5f00\u53d1\u6210\u672c\u8f83\u9ad8"))),(0,l.kt)("p",null,"\u4eca\u5e74\u5728\u4ea4\u63a5\u5230\u6b64\u9879\u76ee\u540e\uff0c\u6211\u4eec\u6839\u636e\u4e0a\u8ff0\u95ee\u9898\u548c\u56f0\u5883\uff0c\u5f00\u59cb\u5bf9\u76f8\u5173\u7f51\u5173\u7c7b\u4ea7\u54c1\u505a\u4e86\u4e00\u4e9b\u8c03\u7814\uff0c\u7136\u540e\u53d1\u73b0\u4e86 Apache APISIX\u3002"),(0,l.kt)("h2",{id:"apache-apisix-\u4f18\u52bf"},"Apache APISIX \u4f18\u52bf"),(0,l.kt)("p",null,"\u5728\u9009\u62e9 Apache APISIX \u4e4b\u524d\uff0c\u7231\u5947\u827a\u5e73\u53f0\u5df2\u7ecf\u5728\u4f7f\u7528 Kong \u4e86\uff0c\u4f46\u662f\u540e\u6765 Kong \u88ab\u653e\u5f03\u4e86\u3002"),(0,l.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u653e\u5f03-kong"},"\u4e3a\u4ec0\u4e48\u653e\u5f03 Kong"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630995514489-6f7b382a-ed2d-46ad-8ded-4dda42ed3bc8.png",alt:"Kong \u7684\u7f3a\u70b9"})),(0,l.kt)("p",null,"Kong \u4f7f\u7528 PostgreSQL \u6765\u5b58\u50a8\u5b83\u7684\u4fe1\u606f\uff0c\u8fd9\u663e\u7136\u4e0d\u662f\u4e00\u4e2a\u597d\u65b9\u5f0f\u3002 \u540c\u65f6\u5728\u8c03\u7814\u8fc7\u7a0b\u4e2d\u6211\u4eec\u67e5\u770b\u4e86 Apache APISIX \u4e0e Kong \u7684\u6027\u80fd\u7684\u5bf9\u6bd4\uff0c\u5728\u6027\u80fd\u4f18\u5316\u65b9\u9762 Apache APISIX \u6bd4 Kong \u63d0\u5347\u4e86 10 \u500d\uff0c\u8fd9\u4e2a\u6307\u6807\u662f\u975e\u5e38\u8ba9\u4eba\u60ca\u559c\u7684\u3002 \u540c\u65f6\u6211\u4eec\u4e5f\u6bd4\u8f83\u4e86\u4e00\u4e9b\u4e3b\u8981\u7684\u7f51\u5173\u4ea7\u54c1\uff0cApache APISIX \u7684\u54cd\u5e94\u5ef6\u8fdf\u6bd4\u5176\u5b83\u7f51\u5173\u4f4e 50% \u4ee5\u4e0a\uff0c\u5728 CPU \u8fbe\u5230 70% \u4ee5\u4e0a\u65f6 Apache APISIX \u4ecd\u80fd\u7a33\u5b9a\u8fd0\u8f6c\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u4e5f\u53d1\u73b0 Apache APISIX \u5176\u5b9e\u548c Kong \u4e00\u6837\uff0c\u90fd\u662f\u57fa\u4e8e OpenResty \u6280\u672f\u5c42\u9762\u505a\u7684\u5f00\u53d1\uff0c\u6240\u4ee5\u5728\u6280\u672f\u5c42\u9762\u7684\u8fc1\u79fb\u6210\u672c\u5c31\u6bd4\u8f83\u4f4e\u3002\u800c\u4e14 Apache APISIX \u5177\u6709\u826f\u597d\u7684\u73af\u5883\u9002\u5e94\u6027\uff0c\u80fd\u591f\u88ab\u8f7b\u6613\u5730\u90e8\u7f72\u5728\u5305\u62ec\u4e91\u8ba1\u7b97\u5e73\u53f0\u5728\u5185\u7684\u5404\u79cd\u73af\u5883\u4e0a\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\u4e5f\u770b\u5230 Apache APISIX \u6574\u4e2a\u5f00\u6e90\u9879\u76ee\u7684\u6d3b\u8dc3\u5ea6\u975e\u5e38\u9ad8\uff0c\u5bf9\u95ee\u9898\u7684\u5904\u7406\u975e\u5e38\u8fc5\u901f\uff0c\u5e76\u4e14\u9879\u76ee\u7684\u4e91\u539f\u751f\u67b6\u6784\u4e5f\u7b26\u5408\u6211\u53f8\u540e\u7eed\u89c4\u5212\uff0c\u6240\u4ee5\u6211\u4eec\u9009\u62e9\u4e86 Apache APISIX\u3002"),(0,l.kt)("h2",{id:"\u57fa\u4e8e-apache-apisix-\u4e0b\u7684\u7231\u5947\u827a\u7f51\u5173\u67b6\u6784"},"\u57fa\u4e8e Apache APISIX \u4e0b\u7684\u7231\u5947\u827a\u7f51\u5173\u67b6\u6784"),(0,l.kt)("p",null,"\u7231\u5947\u827a\u7f51\u5173\u7684\u603b\u4f53\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5305\u542b\u57df\u540d\u3001\u7f51\u5173\u5230\u670d\u52a1\u5b9e\u4f8b\u548c\u76d1\u63a7\u544a\u8b66\u3002DPVS \u662f\u516c\u53f8\u5185\u90e8\u57fa\u4e8e LVS \u505a\u7684\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0cHubble \u76d1\u63a7\u544a\u8b66\u4e5f\u662f\u57fa\u4e8e\u5f00\u6e90\u9879\u76ee\u505a\u7684\u6df1\u5ea6\u4e8c\u6b21\u5f00\u53d1\uff0cConsul \u8fd9\u5757\u505a\u4e86\u4e9b\u6027\u80fd\u548c\u9ad8\u53ef\u7528\u6027\u65b9\u9762\u7684\u4f18\u5316\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630995637366-b42e408b-53ea-47fb-b282-e68042f13090.png",alt:"\u7231\u5947\u827a\u7f51\u5173\u67b6\u6784\u56fe"})),(0,l.kt)("h3",{id:"\u5e94\u7528\u573a\u666f\u4e00\uff1a\u5fae\u670d\u52a1\u7f51\u5173"},"\u5e94\u7528\u573a\u666f\u4e00\uff1a\u5fae\u670d\u52a1\u7f51\u5173"),(0,l.kt)("p",null,"\u5173\u4e8e\u7f51\u5173\u8fd9\u5757\uff0c\u7b80\u5355\u4ece\u63a7\u5236\u9762\u548c\u6570\u636e\u9762\u4ecb\u7ecd\u4e00\u4e0b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630995699492-bdc1c560-2c0a-4db0-82c9-2a5391941863.png",alt:"\u7f51\u5173\u7ec6\u8282\u56fe"})),(0,l.kt)("p",null,"\u6570\u636e\u9762\u4e3b\u8981\u9762\u5411\u524d\u7aef\u7528\u6237\uff0c\u4ece LB \u5230\u7f51\u5173\u6574\u4e2a\u67b6\u6784\u90fd\u662f\u591a\u5730\u591a\u94fe\u8def\u707e\u5907\u90e8\u7f72\uff0c\u4ee5\u7528\u6237\u5c31\u8fd1\u63a5\u5165\u539f\u5219\u8fdb\u884c\u5e03\u70b9\u3002"),(0,l.kt)("p",null,"\u4ece\u63a7\u5236\u9762\u7684\u89d2\u5ea6\u6765\u8bf4\uff0c\u56e0\u4e3a\u591a\u96c6\u7fa4\u6784\u6210\uff0c\u4f1a\u5b58\u5728\u4e00\u4e2a\u5fae\u670d\u52a1\u5e73\u53f0\uff0c\u53bb\u505a\u96c6\u7fa4\u7ba1\u7406\u548c\u670d\u52a1\u7ba1\u7406\u3002\u5fae\u670d\u52a1\u5e73\u53f0\u53ef\u4ee5\u8ba9\u7528\u6237\u4f53\u9a8c\u670d\u52a1\u66b4\u9732\u7684\u4e00\u7ad9\u5f0f\u670d\u52a1\uff0c\u7acb\u5373\u4f7f\u7528\uff0c\u65e0\u9700\u63d0\u4ea4\u5de5\u5355\u3002\u63a7\u5236\u9762\u540e\u7aef\u4f1a\u6709 Gateway Controller \u548c Service Controller\uff0c\u524d\u8005\u4e3b\u8981\u63a7\u5236\u6240\u6709\u7684 API \u7684\u521b\u5efa\u3001\u63d2\u4ef6\u7b49\u76f8\u5173\u914d\u7f6e\uff0c\u540e\u8005\u5219\u662f\u63a7\u5236\u670d\u52a1\u6ce8\u518c\u6ce8\u9500\u548c\u5065\u5eb7\u68c0\u67e5\u3002"),(0,l.kt)("h3",{id:"\u5e94\u7528\u573a\u666f\u4e8c\uff1a\u57fa\u7840\u529f\u80fd"},"\u5e94\u7528\u573a\u666f\u4e8c\uff1a\u57fa\u7840\u529f\u80fd"),(0,l.kt)("p",null,"\u76ee\u524d\u9636\u6bb5\uff0c\u57fa\u4e8e Apache APISIX \u8c03\u6574\u540e\u7684 API \u67b6\u6784\u5b9e\u73b0\u4e86\u4e00\u4e9b\u57fa\u7840\u529f\u80fd\uff0c\u5982\u9650\u6d41\u3001\u8ba4\u8bc1\u3001\u62a5\u8b66\u3001\u76d1\u63a7\u7b49\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630995732178-1717dd1a-3cdf-4f34-aea2-9a26df1c37c1.png",alt:"\u5fae\u670d\u52a1\u5e73\u53f0\u529f\u80fd"})),(0,l.kt)("p",null,"\u9996\u5148\u662f HTTPS \u90e8\u5206\uff0c\u7231\u5947\u827a\u65b9\u9762\u51fa\u4e8e\u5bf9\u5b89\u5168\u6027\u7684\u8003\u8651\uff0c\u8bc1\u4e66\u548c\u5bc6\u94a5\u662f\u4e0d\u4f1a\u5b58\u653e\u5728\u7f51\u5173\u673a\u5668\u4e0a\uff0c\u4f1a\u653e\u5728\u4e00\u4e2a\u4e13\u95e8\u7684\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u3002\u4e4b\u524d\u4f7f\u7528 Kong \u65f6\u6211\u4eec\u6ca1\u6709\u5728\u8fd9\u65b9\u9762\u505a\u76f8\u5173\u652f\u6301\uff0c\u91c7\u7528\u524d\u7f6e Nginx \u505a HTTPS Offload\uff0c\u6b64\u6b21\u8fc1\u79fb\u5230 Apache APISIX \u540e\uff0c\u6211\u4eec\u5728 Apache APISIX \u4e0a\u5b9e\u73b0\u4e86\u8be5\u529f\u80fd\uff0c\u4ece\u94fe\u8def\u4e0a\u6765\u8bf4\u5c31\u5c11\u4e86\u4e00\u5c42\u8f6c\u53d1\u3002"),(0,l.kt)("p",null,"\u5728\u9650\u6d41\u529f\u80fd\u4e0a\uff0c\u9664\u4e86\u57fa\u7840\u7684\u9650\u6d41\uff0c\u8fd8\u6dfb\u52a0\u4e86\u7cbe\u51c6\u9650\u6d41\u4ee5\u53ca\u9488\u5bf9\u7528\u6237\u7c92\u5ea6\u7684\u9650\u6d41\u3002\u8ba4\u8bc1\u529f\u80fd\u4e0a\uff0c\u9664\u4e86\u57fa\u672c\u7684 API Key \u7b49\u8ba4\u8bc1\uff0c\u9488\u5bf9\u4e13\u95e8\u4e1a\u52a1\u4e5f\u63d0\u4f9b\u4e86\u76f8\u5173\u7684 Passport \u8ba4\u8bc1\u3002\u5bf9\u4e8e\u9ed1\u4ea7\u7684\u8fc7\u6ee4\uff0c\u5219\u63a5\u5165\u4e86\u516c\u53f8\u7684 WAF \u5b89\u5168\u4e91\u3002"),(0,l.kt)("p",null,"\u76d1\u63a7\u529f\u80fd\u7684\u5b9e\u73b0\u76ee\u524d\u662f\u4f7f\u7528\u4e86 Apache APISIX \u81ea\u5e26\u63d2\u4ef6\u2014\u2014Prometheus\uff0c\u6307\u6807\u6570\u636e\u4f1a\u76f4\u63a5\u5bf9\u63a5\u516c\u53f8\u7684\u76d1\u63a7\u7cfb\u7edf\u3002\u65e5\u5fd7\u548c\u8c03\u7528\u94fe\u5206\u6790\u4e5f\u901a\u8fc7 Apache APISIX \u5f97\u5230\u4e86\u76f8\u5173\u529f\u80fd\u652f\u6301\u3002"),(0,l.kt)("h3",{id:"\u5e94\u7528\u573a\u666f\u4e09\uff1a\u670d\u52a1\u53d1\u73b0"},"\u5e94\u7528\u573a\u666f\u4e09\uff1a\u670d\u52a1\u53d1\u73b0"),(0,l.kt)("p",null,"\u5173\u4e8e\u524d\u9762\u63d0\u5230\u7684\u670d\u52a1\u53d1\u73b0\uff0c\u4e3b\u8981\u662f\u901a\u8fc7\u670d\u52a1\u4e2d\u5fc3\u628a\u670d\u52a1\u6ce8\u518c\u5230 Consul \u96c6\u7fa4\uff0c\u7136\u540e\u901a\u8fc7 DNS \u670d\u52a1\u53d1\u73b0\u7684\u65b9\u5f0f\u53bb\u505a\u52a8\u6001\u66f4\u65b0\uff0c\u5176\u4e2d QAE \u662f\u6211\u4eec\u516c\u53f8\u5185\u90e8\u7684\u4e00\u4e2a\u5fae\u670d\u52a1\u5e73\u53f0\u3002\u7b80\u5355\u4e3e\u4f8b\u8bf4\u660e\u4e00\u4e0b\u66f4\u65b0\u540e\u7aef\u5e94\u7528\u5b9e\u4f8b\u65f6\u7684\u5927\u4f53\u6d41\u7a0b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630995762178-b807f5fe-8851-4f10-acdc-fbf1c372b12f.png",alt:"\u670d\u52a1\u53d1\u73b0\u6d41\u7a0b"})),(0,l.kt)("p",null,"\u5b9e\u4f8b\u53d8\u66f4\u65f6\uff0c\u9996\u5148\u4f1a\u4ece Consul \u4e2d\u6ce8\u9500\u5bf9\u5e94\u8282\u70b9\uff0c\u5e76\u901a\u8fc7 API \u7f51\u5173 Controller \u5411\u7f51\u5173\u53d1\u9001\u66f4\u65b0 DNS \u7f13\u5b58\u7684\u8bf7\u6c42\u3002\u7f13\u5b58\u66f4\u65b0\u6210\u529f\u540e\uff0cController \u518d\u53cd\u9988 QAE \u5e73\u53f0\u53ef\u4ee5\u505c\u6b62\u76f8\u5173\u540e\u7aef\u5e94\u7528\u8282\u70b9\uff0c\u907f\u514d\u4e1a\u52a1\u6d41\u91cf\u518d\u8f6c\u53d1\u5230\u5df2\u4e0b\u7ebf\u8282\u70b9\u3002"),(0,l.kt)("h3",{id:"\u5e94\u7528\u573a\u666f\u56db\uff1a\u5b9a\u5411\u8def\u7531"},"\u5e94\u7528\u573a\u666f\u56db\uff1a\u5b9a\u5411\u8def\u7531"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630995803596-e8d73d5d-29e0-4f66-b3bd-976d650bafcb.png",alt:"\u5b9a\u5411\u8def\u7531\u64cd\u4f5c"})),(0,l.kt)("p",null,"\u7f51\u5173\u662f\u591a\u5730\u90e8\u7f72\u7684\uff0c\u4e8b\u5148\u642d\u5efa\u597d\u4e00\u6574\u5957\u591a\u5730\u4e92\u5907\u94fe\u8def\uff0c\u540c\u65f6\u5efa\u8bae\u7528\u6237\u540e\u7aef\u670d\u52a1\u4e5f\u662f\u591a\u5730\u5c31\u8fd1\u90e8\u7f72\u3002\u968f\u540e\u7528\u6237\u5728 Skywalker \u7f51\u5173\u5e73\u53f0\u4e0a\u521b\u5efa\u4e00\u4e2a API \u670d\u52a1\uff0cController \u4f1a\u5728\u5168 DC \u7f51\u5173\u96c6\u7fa4\u4e0a\u90fd\u90e8\u7f72\u597d API \u8def\u7531\uff0c\u540c\u65f6\u4e1a\u52a1\u57df\u540d\u9ed8\u8ba4 CNAME \u5230\u7edf\u4e00\u7684\u7f51\u5173\u57df\u540d\u4e0a\u3002"),(0,l.kt)("p",null,"\u76f4\u63a5\u4e3a\u4e1a\u52a1\u63d0\u4f9b\u591a\u5730\u5c31\u8fd1\u63a5\u5165\u3001\u6545\u969c\u707e\u5907\u5207\u6362\u80fd\u529b\uff0c\u540c\u65f6\u4e5f\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u89e3\u6790\u8def\u7531\u3002\u9488\u5bf9\u7528\u6237\u81ea\u8eab\u7684\u6545\u969c\u5207\u6d41\u3001\u84dd\u7eff\u90e8\u7f72\u3001\u7070\u5ea6\u53d1\u5e03\u7b49\u9700\u6c42\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u91c7\u7528 uuid \u57df\u540d\u6765\u81ea\u5b9a\u4e49\u89e3\u6790\u8def\u7531\u914d\u7f6e\uff0c\u540c\u65f6\u4e5f\u652f\u6301\u540e\u7aef\u670d\u52a1\u53d1\u73b0\u7684\u81ea\u5b9a\u4e49\u8c03\u5ea6\u3002"),(0,l.kt)("h3",{id:"\u5e94\u7528\u573a\u666f\u4e94\uff1a\u591a\u5730\u591a\u7ea7\u5bb9\u707e"},"\u5e94\u7528\u573a\u666f\u4e94\uff1a\u591a\u5730\u591a\u7ea7\u5bb9\u707e"),(0,l.kt)("p",null,"\u524d\u8fb9\u6211\u4eec\u4e5f\u63d0\u5230\u8fc7\uff0c\u9488\u5bf9\u4e1a\u52a1\u91cf\u5927\u3001\u96c6\u7fa4\u591a\uff0c\u8fd8\u6709\u5ba2\u6237\u7aef\u53d7\u4f17\u5e7f\u7684\u60c5\u51b5\uff0c\u5728\u4e1a\u52a1\u5c42\u9762\u6211\u4eec\u4f1a\u6709\u4e1a\u52a1\u5c31\u8fd1\u63a5\u5165\u548c\u707e\u5907\u7684\u9700\u6c42\u3002"),(0,l.kt)("p",null,"\u9488\u5bf9\u707e\u5907\uff0c\u9664\u4e86\u8981\u591a\u5730\u591a\u94fe\u8def\u4e92\u5907\uff0c\u8fd8\u8981\u8003\u8651\u591a\u7ea7\u591a\u8282\u70b9\u95ee\u9898\uff0c\u6545\u969c\u8282\u70b9\u8d8a\u5411\u5ba2\u6237\u7aef\u9760\u8fd1\uff0c\u53d7\u5f71\u54cd\u7684\u4e1a\u52a1\u548c\u6d41\u91cf\u8d8a\u5927\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u662f\u6700\u8fdc\u7684\u540e\u7aef\u670d\u52a1\u8282\u70b9\u6545\u969c\uff0c\u4f9d\u9760\u7f51\u5173\u548c\u670d\u52a1\u4e2d\u5fc3\u7684\u5065\u5eb7\u68c0\u67e5\u673a\u5236\uff0c\u53ef\u4ee5\u5b9e\u73b0\u6545\u969c\u5355\u8282\u70b9\u7684\u7194\u65ad\u6216\u8005\u6545\u969c DC \u7684\u5207\u6362\uff0c\u5f71\u54cd\u8303\u56f4\u9650\u5236\u5728\u6307\u5b9a\u4e1a\u52a1\u4e0a\uff0c\u7528\u6237\u65e0\u611f\u77e5\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u662f\u7f51\u5173\u7ea7\u522b\u6545\u969c\uff0c\u9700\u8981\u4f9d\u9760 L4 DPVS \u7684\u5065\u5eb7\u68c0\u67e5\u673a\u5236\uff0c\u7194\u65ad\u6545\u969c\u7f51\u5173\u8282\u70b9\uff0c\u5f71\u54cd\u8303\u56f4\u5c0f\uff0c\u7528\u6237\u65e0\u611f\u77e5\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6545\u969c\u70b9\u5e76\u975e\u4e0a\u8ff0\u8ff0\u7194\u65ad\u63aa\u65bd\u6240\u80fd\u4fee\u590d\uff0c\u5c31\u9700\u8981\u4f9d\u9760\u57df\u540d\u7c92\u5ea6\u7684\u5916\u7f51\u591a\u70b9\u53ef\u7528\u6027\u62e8\u6d4b\uff0c\u5b9e\u73b0\u57df\u540d\u89e3\u6790\u7ea7\u522b\u7684\u6545\u969c\u81ea\u52a8\u5207\u6362\uff0c\u8fd9\u79cd\u65b9\u5f0f\u6545\u969c\u4fee\u590d\u901f\u5ea6\u76f8\u5bf9\u8f83\u6162\uff0c\u5f71\u54cd\u4e1a\u52a1\u591a\uff0c\u7528\u6237\u53ef\u611f\u77e5\u3002")),(0,l.kt)("h2",{id:"\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898"},"\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898"),(0,l.kt)("p",null,"\u5728\u6211\u4eec\u4ece Kong \u5230 Apache APISIX \u7684\u8fc1\u79fb\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u89e3\u51b3\u3001\u4f18\u5316\u4e86\u4e00\u4e9b\u67b6\u6784\u5b58\u5728\u7684\u5df2\u77e5\u95ee\u9898\uff0c\u4f46\u540c\u65f6\u4e5f\u9047\u5230\u4e86\u4e00\u4e9b\u65b0\u7684\u95ee\u9898\u3002"),(0,l.kt)("h3",{id:"\u6210\u679c\u4e00\uff1a\u89e3\u51b3\u4e86\u524d\u7aef\u4e0d\u652f\u6301-sni-\u7684\u517c\u5bb9\u95ee\u9898"},"\u6210\u679c\u4e00\uff1a\u89e3\u51b3\u4e86\u524d\u7aef\u4e0d\u652f\u6301 SNI \u7684\u517c\u5bb9\u95ee\u9898"),(0,l.kt)("p",null,"\u73b0\u5728\u5927\u90e8\u5206\u524d\u7aef\u90fd\u662f\u652f\u6301 SNI \u7684\uff0c\u4f46\u4e5f\u4f1a\u78b0\u5230\u6709\u4e00\u4e9b\u524d\u7aef\u5728 SSL \u8fc7\u7a0b\u4e2d\u65e0\u6cd5\u4f20\u9012 hostname\u3002\u76ee\u524d\u6211\u4eec\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u4e86\u4e00\u4e2a\u517c\u5bb9\uff0c\u91c7\u53d6\u7aef\u53e3\u5339\u914d\u7684\u65b9\u5f0f\u8fdb\u884c\u76f8\u5173\u8bc1\u4e66\u83b7\u53d6\u3002"),(0,l.kt)("h3",{id:"\u6210\u679c\u4e8c\uff1a\u4f18\u5316\u4e86\u5927\u91cf-api-\u8def\u7531\u5339\u914d\u95ee\u9898"},"\u6210\u679c\u4e8c\uff1a\u4f18\u5316\u4e86\u5927\u91cf API \u8def\u7531\u5339\u914d\u95ee\u9898"),(0,l.kt)("p",null,"\u524d\u8fb9\u4e5f\u8bf4\u8fc7\uff0c\u76ee\u524d\u6211\u4eec\u7ebf\u4e0a\u76f4\u63a5\u8fd0\u884c\u7684 API \u4e1a\u52a1\u6570\u91cf\u5c31\u6709 9000 \u591a\u4e2a\uff0c\u540e\u7eed\u53ef\u80fd\u8fd8\u4f1a\u589e\u52a0\u3002\u9488\u5bf9\u8fd9\u4e00\u95ee\u9898\u6211\u4eec\u8fdb\u884c\u4e86\u76f8\u5173\u6027\u80fd\u4e0a\u7684\u4f18\u5316\uff0c\u6839\u636e API \u6765\u51b3\u5b9a\u4f18\u5148\u5339\u914d\u57df\u540d\u8fd8\u662f\u8def\u5f84\u3002"),(0,l.kt)("h3",{id:"\u6210\u679c\u4e09\uff1a\u89e3\u51b3\u4e86-etcd-\u63a5\u53e3\u9650\u5236\u95ee\u9898"},"\u6210\u679c\u4e09\uff1a\u89e3\u51b3\u4e86 ETCD \u63a5\u53e3\u9650\u5236\u95ee\u9898"),(0,l.kt)("p",null,"\u5728\u63a5\u5165 Apache APISIX \u540e\uff0cETCD \u63a5\u53e3\u7684\u9650\u5236\u95ee\u9898\u4e5f\u5df2\u7ecf\u89e3\u51b3\uff0c\u76ee\u524d\u5df2\u7ecf\u89e3\u9664\u4e86 4M \u7684\u9650\u5236\u3002"),(0,l.kt)("h3",{id:"\u6210\u679c\u56db\uff1a\u4f18\u5316\u4e86-etcd-\u8fde\u63a5\u6570\u91cf\u7684\u6027\u80fd\u95ee\u9898"},"\u6210\u679c\u56db\uff1a\u4f18\u5316\u4e86 ETCD \u8fde\u63a5\u6570\u91cf\u7684\u6027\u80fd\u95ee\u9898"),(0,l.kt)("p",null,"\u76ee\u524d\u662f Apache APISIX \u7684\u6bcf\u4e2a worker \u90fd\u4f1a\u8ddf ETCD \u8fde\u63a5\uff0c\u6bcf\u4e00\u4e2a\u76d1\u542c\u76ee\u5f55\u90fd\u4f1a\u53bb\u5efa\u4e00\u4e2a\u8fde\u63a5\u3002\u6bd4\u5982\u4e00\u53f0\u7269\u7406\u673a\u662f 80 core\uff0c\u76d1\u542c\u76ee\u5f55\u6709 10 \u4e2a\uff0c\u5355\u53f0\u7f51\u5173\u670d\u52a1\u5668\u5c31\u6709 800 \u4e2a\u8fde\u63a5\u3002\u4e00\u4e2a\u7f51\u5173\u96c6\u7fa4 10 \u53f0\u7684\u8bdd\uff0c8000 \u4e2a\u8fde\u63a5\u5bf9 ETCD \u538b\u529b\u86ee\u5927\u7684\u3002\u6211\u4eec\u505a\u7684\u4f18\u5316\u662f\u53ea\u62ff\u4e00\u4e2a worker \u53bb\u76d1\u542c\u6709\u9650\u7684\u5fc5\u8981\u76ee\u5f55\uff0c\u548c\u5176\u4f59 worker \u4e4b\u95f4\u5171\u4eab\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"\u5f85\u4f18\u5316"},"\u5f85\u4f18\u5316"),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u95ee\u9898\uff0c\u8fd8\u6709\u4e00\u4e9b\u95ee\u9898\u4e5f\u6b63\u5728\u52aa\u529b\u4f18\u5316\u4e2d\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5927\u91cf API \u7684\u95ee\u9898\uff0c\u5373\u4f7f APISIX \u80fd\u591f\u652f\u6301\uff0c\u6211\u4eec\u4e5f\u8981\u8003\u8651\u5176\u4ed6\u4f9d\u8d56\u7ec4\u4ef6\u7684\u74f6\u9888\u3002\u6bd4\u5982\u4e0a\u8ff0\u7684 ETCD\u3001Prometheus \u76d1\u63a7\u548c\u65e5\u5fd7\u670d\u52a1\u3002\u6240\u4ee5\u540e\u7eed\u6211\u4eec\u53ef\u80fd\u4f1a\u91c7\u53d6\u5927\u96c6\u7fa4\u5171\u4eab\u548c\u5c0f\u96c6\u7fa4\u72ec\u7acb\u8fd9\u4e24\u79cd\u65b9\u5f0f\u6765\u6df7\u5408\u90e8\u7f72\u4e1a\u52a1\uff0c\u6bd4\u5982\u4e00\u4e9b\u91cd\u8981\u4e1a\u52a1\u6211\u4eec\u4f1a\u4ee5\u5c0f\u96c6\u7fa4\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5173\u4e8e Prometheus \u76d1\u63a7\u6307\u6807\uff0c\u540e\u7eed\u6211\u4eec\u4e5f\u4f1a\u8fdb\u884c\u76f8\u5e94\u7684\u7f29\u51cf\u548c\u4f18\u5316\uff0c\u5bf9 DNS \u670d\u52a1\u53d1\u73b0\u8fd9\u5757\u505a\u66f4\u591a\u7684\u4f18\u5316\u3002")),(0,l.kt)("h2",{id:"\u5bf9-apache-apisix-\u7684\u671f\u671b"},"\u5bf9 Apache APISIX \u7684\u671f\u671b"),(0,l.kt)("p",null,"\u6211\u4eec\u5e0c\u671b Apache APISIX \u80fd\u5728\u540e\u7eed\u7684\u5f00\u53d1\u66f4\u65b0\u4e2d\uff0c\u9664\u4e86\u652f\u6301\u66f4\u591a\u7684\u529f\u80fd\uff0c\u4e5f\u53ef\u4ee5\u4e00\u76f4\u4fdd\u6301\u6027\u80fd\u7684\u9ad8\u6548\u548c\u7a33\u5b9a\u3002"))}h.isMDXComponent=!0}}]);