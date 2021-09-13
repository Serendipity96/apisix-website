"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67176],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=o(n),d=p,k=h["".concat(c,".").concat(d)]||h[d]||s[d]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:p,i[1]=l;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77631:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(87462),p=n(63366),r=(n(67294),n(3905)),i={title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u53ca\u8fdb\u9636\u73a9\u6cd5",author:"\u6731\u6b23\u6b23",authorURL:"https://github.com/starsz",authorImageURL:"https://avatars.githubusercontent.com/u/25628854?v=4",keywords:["APISIX","\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u7684\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\uff0c\u4ece\u91cd\u8981\u6027\u548c\u73a9\u6cd5\u4f7f\u7528\u4e0a\u8fdb\u884c\u4e86\u8be6\u7ec6\u4ecb\u7ecd\u548c\u7ec6\u8282\u4f7f\u7528",tags:["technology"]},l={permalink:"/blog/2021/09/07/how-to-use-apisix-auth",source:"@site/blog/2021-09-07-how-to-use-apisix-auth.md",title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u53ca\u8fdb\u9636\u73a9\u6cd5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u7684\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\uff0c\u4ece\u91cd\u8981\u6027\u548c\u73a9\u6cd5\u4f7f\u7528\u4e0a\u8fdb\u884c\u4e86\u8be6\u7ec6\u4ecb\u7ecd\u548c\u7ec6\u8282\u4f7f\u7528",date:"2021-09-07T00:00:00.000Z",formattedDate:"September 7, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:1.565,truncated:!0,prevItem:{title:"\u4e0d\u5199\u4ee3\u7801\uff0c\u5982\u4f55\u4e3a\u5f00\u6e90\u9879\u76ee\u505a\u8d21\u732e\uff1f",permalink:"/blog/2021/09/09/how-to-contribute-to-an-OpenSource-without-coding"},nextItem:{title:"\u57fa\u4e8e Apache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u66f4\u65b0\u4e0e\u843d\u5730\u5b9e\u8df5",permalink:"/blog/2021/09/07/iQIYI-usercase"}},c=[{value:"\u7f51\u7edc\u8eab\u4efd\u8ba4\u8bc1\u7684\u610f\u4e49\u5728\u54ea\u91cc\uff1f",id:"\u7f51\u7edc\u8eab\u4efd\u8ba4\u8bc1\u7684\u610f\u4e49\u5728\u54ea\u91cc\uff1f",children:[{value:"\u5b89\u5168\u6027",id:"\u5b89\u5168\u6027",children:[]},{value:"\u5b9e\u7528\u6027",id:"\u5b9e\u7528\u6027",children:[]},{value:"\u529f\u80fd\u6027",id:"\u529f\u80fd\u6027",children:[]}]},{value:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u4f18\u70b9",id:"\u4f7f\u7528-apache-apisix-\u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u4f18\u70b9",children:[{value:"\u4ece\u4f20\u7edf\u5230\u65b0\u6a21\u5f0f",id:"\u4ece\u4f20\u7edf\u5230\u65b0\u6a21\u5f0f",children:[]},{value:"\u4f18\u70b9\u4e00\uff1a\u914d\u7f6e\u6536\u655b\uff0c\u7edf\u4e00\u7ba1\u7406",id:"\u4f18\u70b9\u4e00\uff1a\u914d\u7f6e\u6536\u655b\uff0c\u7edf\u4e00\u7ba1\u7406",children:[]},{value:"\u4f18\u70b9\u4e8c\uff1a\u63d2\u4ef6\u4e30\u5bcc\uff0c\u51cf\u5c11\u5f00\u53d1",id:"\u4f18\u70b9\u4e8c\uff1a\u63d2\u4ef6\u4e30\u5bcc\uff0c\u51cf\u5c11\u5f00\u53d1",children:[]},{value:"\u4f18\u70b9\u4e09\uff1a\u914d\u7f6e\u7075\u6d3b\uff0c\u529f\u80fd\u5f3a\u5927",id:"\u4f18\u70b9\u4e09\uff1a\u914d\u7f6e\u7075\u6d3b\uff0c\u529f\u80fd\u5f3a\u5927",children:[]}]},{value:"Apache APISIX \u4e2d\u8eab\u4efd\u8ba4\u8bc1\u7684\u73a9\u6cd5",id:"apache-apisix-\u4e2d\u8eab\u4efd\u8ba4\u8bc1\u7684\u73a9\u6cd5",children:[{value:"\u521d\u7ea7\uff1a\u666e\u901a\u73a9\u6cd5",id:"\u521d\u7ea7\uff1a\u666e\u901a\u73a9\u6cd5",children:[]},{value:"\u4e2d\u7ea7\uff1a\u8fdb\u9636\u73a9\u6cd5",id:"\u4e2d\u7ea7\uff1a\u8fdb\u9636\u73a9\u6cd5",children:[]}]},{value:"\u9ad8\u7ea7\uff1aDIY \u73a9\u6cd5",id:"\u9ad8\u7ea7\uff1adiy-\u73a9\u6cd5",children:[{value:"\u65b9\u5f0f\u4e00\uff1a\u81ea\u5b9a\u4e49\u5224\u65ad\u903b\u8f91",id:"\u65b9\u5f0f\u4e00\uff1a\u81ea\u5b9a\u4e49\u5224\u65ad\u903b\u8f91",children:[]},{value:"\u65b9\u5f0f\u4e8c\uff1a\u53d1\u8d77\u8ba4\u8bc1\u9274\u6743\u8bf7\u6c42",id:"\u65b9\u5f0f\u4e8c\uff1a\u53d1\u8d77\u8ba4\u8bc1\u9274\u6743\u8bf7\u6c42",children:[]},{value:"\u914d\u7f6e\u4e0a\u4f20",id:"\u914d\u7f6e\u4e0a\u4f20",children:[]}]}],o={toc:c};function u(e){var t=e.components,n=(0,p.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/starsz"},"@\u6731\u6b23\u6b23")," \uff0cApache APISIX \u9879\u76ee committer\uff0c\u5f00\u6e90\u7231\u597d\u8005\uff0c\u4e5f\u662f\u4e00\u4e2a Golang \u5f00\u53d1\u8005\u3002\u73b0\u5728\u4ed6\u6b63\u5728\u4e3a Apache APISIX \u7684 control plane \u8d21\u732e\u4ee3\u7801\u5e76\u6267\u884c code review\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u4ed6\u5728 Apache APISIX \u793e\u533a\u4e2d\u975e\u5e38\u6d3b\u8dc3\uff0c\u4e50\u4e8e\u56de\u7b54\u793e\u533a\u5185\u7684\u5404\u79cd\u95ee\u9898\u3002")),(0,r.kt)("p",null,"\u8eab\u4efd\u8ba4\u8bc1\u5728\u65e5\u5e38\u751f\u6d3b\u5f53\u4e2d\u662f\u975e\u5e38\u5e38\u89c1\u7684\u4e00\u9879\u529f\u80fd\uff0c\u5927\u5bb6\u5e73\u65f6\u57fa\u672c\u90fd\u4f1a\u63a5\u89e6\u5230\u3002\u6bd4\u5982\u7528\u652f\u4ed8\u5b9d\u6d88\u8d39\u65f6\u7684\u4eba\u8138\u8bc6\u522b\u786e\u8ba4\u3001\u516c\u53f8\u4e0a\u73ed\u4e0b\u73ed\u65f6\u7684\u6307\u7eb9/\u9762\u90e8\u6253\u5361\u4ee5\u53ca\u7f51\u7ad9\u4e0a\u8fdb\u884c\u8d26\u53f7\u5bc6\u7801\u767b\u5f55\u64cd\u4f5c\u7b49\uff0c\u5176\u5b9e\u90fd\u662f\u8eab\u4efd\u8ba4\u8bc1\u7684\u573a\u666f\u4f53\u73b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004418593-0a46f949-72aa-4cd4-8f38-1988327c92d6.png",alt:"\u6982\u5ff5\u7406\u89e3"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\uff0cJack \u901a\u8fc7\u8d26\u53f7\u5bc6\u7801\u8bf7\u6c42\u670d\u52a1\u7aef\u5e94\u7528\uff0c\u670d\u52a1\u7aef\u5e94\u7528\u4e2d\u9700\u8981\u6709\u4e00\u4e2a\u4e13\u95e8\u7528\u505a\u8eab\u4efd\u8ba4\u8bc1\u7684\u6a21\u5757\u6765\u5904\u7406\u8fd9\u90e8\u5206\u7684\u903b\u8f91\u3002\u8bf7\u6c42\u5904\u7406\u5b8c\u6bd5\u4e4b\u540e\uff0c\u5982\u679c\u4f7f\u7528 JWT Token \u8ba4\u8bc1\u65b9\u5f0f\uff0c\u670d\u52a1\u5668\u4f1a\u53cd\u9988\u4e00\u4e2a Token \u53bb\u6807\u8bc6\u8fd9\u4e2a\u7528\u6237\u4e3a Jack\u3002\u5982\u679c\u767b\u5f55\u8fc7\u7a0b\u4e2d\u8d26\u53f7\u5bc6\u7801\u8f93\u5165\u9519\u8bef\uff0c\u5c31\u4f1a\u5bfc\u81f4\u8eab\u4efd\u8ba4\u8bc1\u5931\u8d25\u3002\u8fd9\u4e2a\u573a\u666f\u5927\u5bb6\u80af\u5b9a\u90fd\u975e\u5e38\u719f\u6089\uff0c\u8fd9\u91cc\u5c31\u4e0d\u505a\u5c55\u5f00\u4e3e\u4f8b\u4e86\u3002"),(0,r.kt)("h2",{id:"\u7f51\u7edc\u8eab\u4efd\u8ba4\u8bc1\u7684\u610f\u4e49\u5728\u54ea\u91cc\uff1f"},"\u7f51\u7edc\u8eab\u4efd\u8ba4\u8bc1\u7684\u610f\u4e49\u5728\u54ea\u91cc\uff1f"),(0,r.kt)("h3",{id:"\u5b89\u5168\u6027"},"\u5b89\u5168\u6027"),(0,r.kt)("p",null,"\u8eab\u4efd\u8ba4\u8bc1\u786e\u4fdd\u4e86\u540e\u7aef\u670d\u52a1\u7684\u5b89\u5168\u6027\uff0c\u907f\u514d\u4e86\u672a\u7ecf\u6388\u6743\u7684\u8bbf\u95ee\uff0c\u4ece\u800c\u786e\u4fdd\u6570\u636e\u7684\u5b89\u5168\u6027\u3002\u6bd4\u5982\u9632\u6b62\u67d0\u4e9b\u9ed1\u5ba2\u653b\u51fb\uff0c\u4ee5\u53ca\u4e00\u4e9b\u6076\u610f\u8c03\u7528\uff0c\u8fd9\u4e9b\u90fd\u53ef\u4ee5\u901a\u8fc7\u8eab\u4efd\u8ba4\u8bc1\u8fdb\u884c\u963b\u62e6\u3002"),(0,r.kt)("h3",{id:"\u5b9e\u7528\u6027"},"\u5b9e\u7528\u6027"),(0,r.kt)("p",null,"\u4ece\u5b9e\u7528\u6027\u7684\u89d2\u5ea6\u8003\u8651\uff0c\u5b83\u53ef\u4ee5\u66f4\u65b9\u4fbf\u5730\u8bb0\u5f55\u64cd\u4f5c\u8005\u6216\u8c03\u7528\u65b9\u3002\u6bd4\u5982\u4e0a\u73ed\u6253\u5361\u5176\u5b9e\u5c31\u662f\u901a\u8fc7\u8bb0\u5f55\u300c\u8c01\u8fdb\u884c\u4e86\u8fd9\u9879\u64cd\u4f5c\u300d\u6765\u7edf\u8ba1\u5458\u5de5\u4e0a\u73ed\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u5176\u6b21\u5b83\u53ef\u4ee5\u8bb0\u5f55\u8bbf\u95ee\u9891\u7387\u53ca\u8bbf\u95ee\u9891\u6b21\u3002\u4f8b\u5982\u8bb0\u5f55\u67d0\u7528\u6237\u5728\u6700\u8fd1\u51e0\u5206\u949f\u4e2d\u53d1\u8d77\u8bf7\u6c42\u7684\u9891\u7387\u548c\u9891\u6b21\uff0c\u53ef\u4ee5\u5224\u65ad\u8fd9\u4e2a\u7528\u6237\u6d3b\u8dc3\u7a0b\u5ea6\uff0c\u4e5f\u53ef\u4ee5\u5224\u65ad\u662f\u5426\u4e3a\u6076\u610f\u653b\u51fb\u7b49\u3002"),(0,r.kt)("h3",{id:"\u529f\u80fd\u6027"},"\u529f\u80fd\u6027"),(0,r.kt)("p",null,"\u5728\u529f\u80fd\u5c42\u9762\uff0c\u5b83\u901a\u8fc7\u8bc6\u522b\u8eab\u4efd\u53ef\u4ee5\u5bf9\u4e0d\u540c\u7684\u8eab\u4efd\u8fdb\u884c\u4e0d\u540c\u6743\u9650\u7684\u64cd\u4f5c\u5904\u7406\u3002\u6bd4\u5982\u5728\u516c\u53f8\u91cc\uff0c\u4f60\u7684\u8eab\u4efd\u6743\u9650\u65e0\u6cd5\u4f7f\u7528\u67d0\u4e9b\u9875\u9762\u6216\u670d\u52a1\u3002\u518d\u7ec6\u81f4\u4e00\u70b9\uff0c\u5bf9\u4e0d\u540c\u8eab\u4efd\u6216\u8005\u4e0d\u540c\u7684 API \u63a5\u53e3\u8c03\u7528\u65b9\u505a\u4e00\u4e9b\u76f8\u5173\u6280\u672f\u4e0a\u7684\u9650\u5236\u7b56\u7565\uff0c\u5982\u9650\u6d41\u9650\u901f\u7b49\uff0c\u4ee5\u6b64\u6765\u8fbe\u5230\u6839\u636e\u4e0d\u540c\u7684\u7528\u6237\uff08\u8c03\u7528\u65b9\uff09\u91c7\u53d6\u4e0d\u540c\u7684\u529f\u80fd\u9650\u5236\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-apache-apisix-\u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u4f18\u70b9"},"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u4f18\u70b9"),(0,r.kt)("h3",{id:"\u4ece\u4f20\u7edf\u5230\u65b0\u6a21\u5f0f"},"\u4ece\u4f20\u7edf\u5230\u65b0\u6a21\u5f0f"),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5de6\u4fa7\u7684\u56fe\u4e3a\u6211\u4eec\u5c55\u793a\u4e86\u4e00\u79cd\u6bd4\u8f83\u5e38\u89c1\u7684\u4f20\u7edf\u8eab\u4efd\u8ba4\u8bc1\u65b9\u6cd5\u3002\u6bcf\u4e00\u4e2a\u5e94\u7528\u670d\u52a1\u6a21\u5757\u53bb\u5f00\u53d1\u4e00\u4e2a\u5355\u72ec\u7684\u8eab\u4efd\u8ba4\u8bc1\u6a21\u5757\uff0c\u7528\u6765\u652f\u6301\u8eab\u4efd\u8ba4\u8bc1\u7684\u4e00\u5957\u6d41\u7a0b\u5904\u7406\u3002\u4f46\u5f53\u670d\u52a1\u91cf\u591a\u4e86\u4e4b\u540e\uff0c\u5c31\u4f1a\u53d1\u73b0\u8fd9\u4e9b\u6a21\u5757\u7684\u5f00\u53d1\u5de5\u4f5c\u91cf\u90fd\u662f\u975e\u5e38\u5de8\u5927\u4e14\u91cd\u590d\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004492221-0721d933-705d-4875-b956-e94a11a45135.png",alt:"Apache APISIX \u8eab\u4efd\u8ba4\u8bc1"})),(0,r.kt)("p",null,"\u8fd9\u79cd\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u628a\u8fd9\u90e8\u5206\u7684\u5f00\u53d1\u903b\u8f91\u653e\u7f6e\u5230 Apache APISIX \u7684\u7f51\u5173\u6765\u5b9e\u73b0\u7edf\u4e00\uff0c\u51cf\u5c11\u5f00\u53d1\u91cf\u3002"),(0,r.kt)("p",null,"\u56fe\u53f3\u6240\u793a\uff0c\u7528\u6237\u6216\u5e94\u7528\u65b9\u76f4\u63a5\u53bb\u8bf7\u6c42 Apache APISIX\uff0c\u7136\u540e Apache APISIX \u901a\u8fc7\u8bc6\u522b\u5e76\u8ba4\u8bc1\u901a\u8fc7\u540e\uff0c\u4f1a\u5c06\u9274\u522b\u7684\u8eab\u4efd\u4fe1\u606f\u4f20\u9012\u5230\u4e0a\u6e38\u5e94\u7528\u670d\u52a1\u3002\u4e4b\u540e\u4e0a\u6e38\u5e94\u7528\u670d\u52a1\u5c31\u53ef\u4ee5\u4ece\u8bf7\u6c42\u5934\u4e2d\u8bfb\u5230\u8fd9\u90e8\u5206\u4fe1\u606f\uff0c\u7136\u540e\u8fdb\u884c\u540e\u7eed\u76f8\u5173\u5de5\u4f5c\u7684\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u8bb2\u5b8c\u4e86\u5927\u6982\u6d41\u7a0b\uff0c\u6211\u4eec\u6765\u8be6\u7ec6\u7f57\u5217\u4e0b\u3002"),(0,r.kt)("h3",{id:"\u4f18\u70b9\u4e00\uff1a\u914d\u7f6e\u6536\u655b\uff0c\u7edf\u4e00\u7ba1\u7406"},"\u4f18\u70b9\u4e00\uff1a\u914d\u7f6e\u6536\u655b\uff0c\u7edf\u4e00\u7ba1\u7406"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004574541-87b607eb-2971-4c1d-a1d6-74cf4a5fdd42.png",alt:"Dashboard"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u662f\u4e00\u5f20 APISIX-Dashboard \u7684\u754c\u9762\u622a\u56fe\uff0c\u53ef\u4ee5\u770b\u5230\u8def\u7531\u3001Consumer \u7b49\u6570\u636e\u4fe1\u606f\u3002\u8fd9\u91cc\u7684 Consumer \u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u5e94\u7528\u65b9\uff0c\u6bd4\u5982\u53ef\u4ee5\u4e3a\u5e94\u7528\u4e13\u95e8\u53bb\u521b\u5efa\u4e00\u4e2a Consumer \u5e76\u914d\u7f6e\u76f8\u5173\u7684\u8ba4\u8bc1\u63d2\u4ef6\uff0c\u4f8b\u5982 JWT\u3001Basic-Auth \u7b49\u63d2\u4ef6\u3002\u5f53\u6709\u65b0\u7684\u670d\u52a1\u51fa\u73b0\u65f6\uff0c\u6211\u4eec\u9700\u8981\u518d\u521b\u5efa\u4e00\u4e2a Consumer\uff0c\u7136\u540e\u5c06\u8fd9\u90e8\u5206\u914d\u7f6e\u4fe1\u606f\u7ed9\u914d\u7f6e\u5230\u7b2c\u4e8c\u4e2a\u5e94\u7528\u670d\u52a1\u4e0a\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\uff0c\u53ef\u4ee5\u5c06\u5ba2\u6237\u914d\u7f6e\u8fdb\u884c\u6536\u655b\u5e76\u7edf\u4e00\u7ba1\u7406\uff0c\u8fbe\u5230\u964d\u4f4e\u8fd0\u7ef4\u6210\u672c\u7684\u6548\u679c\u3002"),(0,r.kt)("h3",{id:"\u4f18\u70b9\u4e8c\uff1a\u63d2\u4ef6\u4e30\u5bcc\uff0c\u51cf\u5c11\u5f00\u53d1"},"\u4f18\u70b9\u4e8c\uff1a\u63d2\u4ef6\u4e30\u5bcc\uff0c\u51cf\u5c11\u5f00\u53d1"),(0,r.kt)("p",null,"Apache APISIX \u4f5c\u4e3a\u4e00\u4e2a API \u7f51\u5173\uff0c\u76ee\u524d\u5df2\u5f00\u542f\u4e0e\u5404\u79cd\u63d2\u4ef6\u529f\u80fd\u7684\u9002\u914d\u5408\u4f5c\uff0c\u63d2\u4ef6\u5e93\u4e5f\u6bd4\u8f83\u4e30\u5bcc\u3002\u76ee\u524d\u5df2\u7ecf\u53ef\u4e0e\u5927\u91cf\u8eab\u4efd\u8ba4\u8bc1\u76f8\u5173\u7684\u63d2\u4ef6\u8fdb\u884c\u642d\u914d\u5904\u7406\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004738218-586e84af-a5ab-4714-845d-4d71b7ba79e3.png",alt:"API \u7f51\u5173\u8ba4\u8bc1\u63d2\u4ef6"})),(0,r.kt)("p",null,"\u57fa\u7840\u8ba4\u8bc1\u63d2\u4ef6\u6bd4\u5982 Key-Auth\u3001Basic-Auth\uff0c\u4ed6\u4eec\u662f\u901a\u8fc7\u8d26\u53f7\u5bc6\u7801\u7684\u65b9\u5f0f\u8fdb\u884c\u8ba4\u8bc1\u3002"),(0,r.kt)("p",null,"\u590d\u6742\u4e00\u4e9b\u7684\u8ba4\u8bc1\u63d2\u4ef6\u5982 Hmac-Auth\u3001JWT-Auth\u3002\u5982 Hmac-Auth \u901a\u8fc7\u5bf9\u8bf7\u6c42\u4fe1\u606f\u505a\u4e00\u4e9b\u52a0\u5bc6\uff0c\u751f\u6210\u4e00\u4e2a\u7b7e\u540d\u3002\u5f53 API \u8c03\u7528\u65b9\u5c06\u8fd9\u4e2a\u7b7e\u540d\u643a\u5e26\u5230 Apache APISIX \u7684\u7f51\u5173 Apache APISIX \u4f1a\u4ee5\u76f8\u540c\u7684\u7b97\u6cd5\u8ba1\u7b97\u7b7e\u540d\uff0c\u53ea\u6709\u5f53\u7b7e\u540d\u65b9\u548c\u5e94\u7528\u8c03\u7528\u65b9\u8ba4\u8bc1\u76f8\u540c\u65f6\u624d\u4e88\u4ee5\u901a\u8fc7\u3002"),(0,r.kt)("p",null,"Authz-casbin \u63d2\u4ef6\u662f\u76ee\u524d Apche APISIX \u4e0e Casbin \u793e\u533a\u6b63\u5728\u8fdb\u884c\u5408\u4f5c\u5f00\u53d1\u7684\u4e00\u4e2a\u9879\u76ee\uff0c\u5b83\u7684\u5e94\u7528\u539f\u7406\u662f\u6309\u7167 Casbin \u7684\u89c4\u5219\uff0c\u53bb\u5904\u7406\u4e00\u4e9b\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u7ba1\u63a7 (RBAC)\uff0c\u8fdb\u884c ACL \u76f8\u5173\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u5176\u4ed6\u5219\u662f\u4e00\u4e9b\u901a\u7528\u8ba4\u8bc1\u534f\u8bae\u548c\u8054\u5408\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u8fdb\u884c\u5408\u4f5c\u7684\u8ba4\u8bc1\u534f\u8bae\uff0c\u4f8b\u5982 OpenID-Connect \u8eab\u4efd\u8ba4\u8bc1\u673a\u5236\uff0c\u4ee5\u53ca LDAP \u8ba4\u8bc1\u7b49\u3002"),(0,r.kt)("h3",{id:"\u4f18\u70b9\u4e09\uff1a\u914d\u7f6e\u7075\u6d3b\uff0c\u529f\u80fd\u5f3a\u5927"},"\u4f18\u70b9\u4e09\uff1a\u914d\u7f6e\u7075\u6d3b\uff0c\u529f\u80fd\u5f3a\u5927"),(0,r.kt)("p",null,"\u529f\u80fd\u5f3a\u5927\u8be5\u5982\u4f55\u7406\u89e3\uff0c\u5c31\u662f Apache APISIX \u4e2d\u53ef\u4ee5\u9488\u5bf9\u6bcf\u4e00\u4e2a Consumer \uff08\u5373\u8c03\u7528\u65b9\u5e94\u7528\uff09\u53bb\u505a\u4e0d\u540c\u7ea7\u522b\u7684\u63d2\u4ef6\u914d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004783828-3dd0056c-a6aa-4ab9-b902-7bd2ca545ffe.png",alt:"\u914d\u7f6e\u7075\u6d3b"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e24\u4e2a\u6d88\u8d39\u8005 Consumer A\uff0cConsumer B\u3002\u6211\u4eec\u5c06 Consumer A \u5e94\u7528\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"\u5e94\u75281"),"\uff0c\u5219\u540e\u7eed",(0,r.kt)("inlineCode",{parentName:"p"},"\u5e94\u75281"),"\u7684\u8bbf\u95ee\u5c06\u4f1a\u5f00\u542f Consumer A \u7684\u8fd9\u90e8\u5206\u63d2\u4ef6\uff0c\u4f8b\u5982 IP \u9ed1\u767d\u540d\u5355\uff0c\u9650\u5236\u5e76\u53d1\u6570\u91cf\u7b49\u3002\u5c06 Consumer B \u5e94\u7528\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"\u5e94\u75282")," \uff0c\u7531\u4e8e\u5f00\u542f\u4e86 http-log \u63d2\u4ef6\uff0c\u5219",(0,r.kt)("inlineCode",{parentName:"p"},"\u5e94\u75282"),"\u7684\u8bbf\u95ee\u65e5\u5fd7\u5c06\u4f1a\u901a\u8fc7 HTTP \u7684\u65b9\u5f0f\u53d1\u9001\u5230\u65e5\u5fd7\u7cfb\u7edf\u8fdb\u884c\u6536\u96c6\u3002"),(0,r.kt)("h2",{id:"apache-apisix-\u4e2d\u8eab\u4efd\u8ba4\u8bc1\u7684\u73a9\u6cd5"},"Apache APISIX \u4e2d\u8eab\u4efd\u8ba4\u8bc1\u7684\u73a9\u6cd5"),(0,r.kt)("p",null,"\u5173\u4e8e Apache APISIX \u8eab\u4efd\u8ba4\u8bc1\u7684\u73a9\u6cd5\uff0c\u8fd9\u91cc\u4e3a\u5927\u5bb6\u63d0\u4f9b\u4e09\u4e2a\u9636\u6bb5\u7684\u73a9\u6cd5\u63a8\u8350\uff0c\u5927\u5bb6\u4ec5\u4f5c\u53c2\u8003\uff0c\u4e5f\u53ef\u4ee5\u5728\u8fd9\u4e9b\u57fa\u7840\u4e0a\uff0c\u8fdb\u884c\u66f4\u6df1\u5ea6\u7684\u4f7f\u7528\u548c\u5e94\u7528\u3002"),(0,r.kt)("h3",{id:"\u521d\u7ea7\uff1a\u666e\u901a\u73a9\u6cd5"},"\u521d\u7ea7\uff1a\u666e\u901a\u73a9\u6cd5"),(0,r.kt)("p",null,"\u666e\u901a\u73a9\u6cd5\u63a8\u8350\u5927\u5bb6\u57fa\u4e8e Key-Auth\u3001Basic-Auth\u3001JWT- Auth \u548c Hmac-Auth \u8fdb\u884c\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u7684\u4f7f\u7528\u9700\u8981\u4e0e Consumer \u8fdb\u884c\u5173\u8054\u4f7f\u7528\u3002"),(0,r.kt)("h4",{id:"\u6b65\u9aa4\u4e00\uff1a\u521b\u5efa\u8def\u7531\uff0c\u914d\u7f6e\u8eab\u4efd\u8ba4\u8bc1\u63d2\u4ef6"},"\u6b65\u9aa4\u4e00\uff1a\u521b\u5efa\u8def\u7531\uff0c\u914d\u7f6e\u8eab\u4efd\u8ba4\u8bc1\u63d2\u4ef6"),(0,r.kt)("p",null,"\u521b\u5efa\u8def\u7531\uff0c\u914d\u7f6e\u4e0a\u6e38\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"httpbin.org"),"\uff0c\u540c\u65f6\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"basic-auth")," \u63d2\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004892467-71c93f8f-dc0e-47fe-a88f-943adb9edbff.png",alt:"\u521b\u5efa\u8def\u7531"})),(0,r.kt)("h4",{id:"\u6b65\u9aa4\u4e8c\uff1a\u521b\u5efa\u6d88\u8d39\u8005\uff0c\u914d\u7f6e\u8eab\u4efd\u4fe1\u606f"},"\u6b65\u9aa4\u4e8c\uff1a\u521b\u5efa\u6d88\u8d39\u8005\uff0c\u914d\u7f6e\u8eab\u4efd\u4fe1\u606f"),(0,r.kt)("p",null,"\u521b\u5efa\u6d88\u8d39\u8005 foo\u3002\u5728\u6d88\u8d39\u8005\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u914d\u7f6e\u7528\u6237\u7684\u8ba4\u8bc1\u4fe1\u606f\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," \u4e3a foo\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"password")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004937828-15ac5d8f-0e45-4c3d-94e8-2b180266b379.png",alt:"\u521b\u5efa\u6d88\u8d39\u8005"})),(0,r.kt)("h4",{id:"\u6b65\u9aa4\u4e09\uff1a\u5e94\u7528\u670d\u52a1\u643a\u5e26\u8ba4\u8bc1\u4fe1\u606f\u8fdb\u884c\u8bbf\u95ee"},"\u6b65\u9aa4\u4e09\uff1a\u5e94\u7528\u670d\u52a1\u643a\u5e26\u8ba4\u8bc1\u4fe1\u606f\u8fdb\u884c\u8bbf\u95ee"),(0,r.kt)("p",null,"\u5e94\u7528\u643a\u5e26 ",(0,r.kt)("inlineCode",{parentName:"p"},"username:foo")," ,",(0,r.kt)("inlineCode",{parentName:"p"},"password: bar")," \u8bbf\u95ee Apache APISIX\u3002Apache APISIX \u901a\u8fc7\u8ba4\u8bc1\uff0c\u5e76\u5c06\u8bf7\u6c42 Authorization \u8bf7\u6c42\u5934\u643a\u5e26\u81f3\u4e0a\u6e38 ",(0,r.kt)("inlineCode",{parentName:"p"},"httpbin.org")," \u3002\u7531\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"httpbin.org")," \u4e2d get \u63a5\u53e3\u4f1a\u5c06\u8bf7\u6c42\u4fe1\u606f\u8fd4\u56de\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5728\u5176\u4e2d\u89c2\u5bdf\u5230\u8bf7\u6c42\u5934 ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631004973305-4b209f79-f7de-41a2-994e-8877a6624d99.png",alt:"\u8bf7\u6c42\u643a\u5e26"})),(0,r.kt)("h3",{id:"\u4e2d\u7ea7\uff1a\u8fdb\u9636\u73a9\u6cd5"},"\u4e2d\u7ea7\uff1a\u8fdb\u9636\u73a9\u6cd5"),(0,r.kt)("p",null,"\u8fdb\u9636\u6a21\u5f0f\u4e0b\uff0c\u662f\u4f7f\u7528 Apache APISIX \u4e0e OpenID-Connect \u63d2\u4ef6\u8fdb\u884c\u5bf9\u63a5\u7b2c\u4e09\u65b9\u8ba4\u8bc1\u670d\u52a1\u3002OpenID-Connect \u662f\u4e00\u79cd\u8ba4\u8bc1\u673a\u5236\uff0c\u53ef\u4ee5\u91c7\u7528\u8be5\u8ba4\u8bc1\u673a\u5236\u5bf9\u63a5\u7528\u6237\u7684\u7528\u6237\u7ba1\u7406\u7cfb\u7edf\u6216\u8005\u7528\u6237\u7ba1\u7406\u670d\u52a1\uff0c\u4f8b\u5982\u56fd\u5185\u7684 Authing \u548c\u817e\u8baf\u4e91\uff0c\u56fd\u5916\u7684 Okta \u548c Auth0 \u7b49\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005002268-7393b40e-1733-4e66-bc09-742be221efae.png",alt:"\u7b2c\u4e09\u65b9\u8ba4\u8bc1\u6a21\u5f0f"})),(0,r.kt)("p",null,"\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b\uff0c\u8fd9\u91cc\u4f7f\u7528 Okta \u4e91\u670d\u52a1\u4e3e\u4f8b\uff1a"),(0,r.kt)("h4",{id:"\u6b65\u9aa4\u4e00\uff1a\u521b\u5efa-openid-connect-\u5e94\u7528"},"\u6b65\u9aa4\u4e00\uff1a\u521b\u5efa OpenID-Connect \u5e94\u7528"),(0,r.kt)("p",null,"\u5728 Okta \u63a7\u5236\u53f0\u9875\u9762\u521b\u5efa\u4e00\u4e2a\u652f\u6301 OpenID-Connect \u7684\u5e94\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005022640-1e931b14-8175-47f3-bfb8-46e09cec616b.png",alt:"\u521b\u5efa"})),(0,r.kt)("h4",{id:"\u6b65\u9aa4\u4e8c\uff1a\u521b\u5efa\u8def\u7531\uff0c\u914d\u7f6e-openid-connect-\u63d2\u4ef6"},"\u6b65\u9aa4\u4e8c\uff1a\u521b\u5efa\u8def\u7531\uff0c\u914d\u7f6e OpenID-Connect \u63d2\u4ef6"),(0,r.kt)("p",null,"\u521b\u5efa\u8def\u7531\uff0c\u914d\u7f6e\u8bbf\u95ee\u7684\u4e0a\u6e38\u5730\u5740\u4e3a httpbin.org\uff0c\u540c\u65f6\u5f00\u542f openid-connect \u63d2\u4ef6\uff0c\u5c06 Okta \u5e94\u7528\u7684\u914d\u7f6e\u586b\u5199\u5230 openid-connect \u63d2\u4ef6\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005045489-b637ef9a-c71c-440f-ae58-a93398a4c9dd.png",alt:"\u914d\u7f6e\u63d2\u4ef6"})),(0,r.kt)("h4",{id:"\u6b65\u9aa4\u4e09\uff1a\u7528\u6237\u8bbf\u95ee\u65f6\uff0c\u4f1a\u8df3\u8f6c\u81f3\u767b\u5f55\u9875\u9762\u3002\u767b\u5f55\u5b8c\u6210\u540e\uff0c\u4e0a\u6e38\u5e94\u7528\u83b7\u53d6\u7528\u6237\u4fe1\u606f"},"\u6b65\u9aa4\u4e09\uff1a\u7528\u6237\u8bbf\u95ee\u65f6\uff0c\u4f1a\u8df3\u8f6c\u81f3\u767b\u5f55\u9875\u9762\u3002\u767b\u5f55\u5b8c\u6210\u540e\uff0c\u4e0a\u6e38\u5e94\u7528\u83b7\u53d6\u7528\u6237\u4fe1\u606f"),(0,r.kt)("p",null,"\u6b64\u65f6\uff0c\u5f53\u7528\u6237\u8bbf\u95ee Apache APISIX \u65f6\uff0c\u4f1a\u5148\u91cd\u5b9a\u5411\u5230 Okta \u767b\u5f55\u9875\u9762\u3002\u6b64\u65f6\u9700\u8981\u5728\u8be5\u9875\u9762\u586b\u5199 Okta \u4e2d\u5df2\u7ecf\u5b58\u5728\u7684\u7528\u6237\u7684\u8d26\u53f7\u5bc6\u7801\u3002\u767b\u9646\u5b8c\u6210\u4e4b\u540e\uff0cApache APISIX \u4f1a\u5c06\u672c\u6b21\u8ba4\u8bc1\u7684 Access-Token\uff0cID-Token \u643a\u5e26\u81f3\u4e0a\u6e38\uff0c\u540c\u65f6\u5c06\u672c\u6b21\u8ba4\u8bc1\u7684\u7528\u6237\u4fe1\u606f\u4ee5 base64 \u7684\u65b9\u5f0f\u7f16\u7801\u81f3 Userinfo \u8bf7\u6c42\u5934\uff0c\u4f20\u9012\u81f3\u4e0a\u6e38\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005077846-0f877a03-ddcd-46f6-a38d-f046b4700058.png",alt:"APISIX \u9875\u9762"})),(0,r.kt)("h2",{id:"\u9ad8\u7ea7\uff1adiy-\u73a9\u6cd5"},"\u9ad8\u7ea7\uff1aDIY \u73a9\u6cd5"),(0,r.kt)("p",null,"\u8fd9\u91cc\u63d0\u4f9b\u7684 DIY \u73a9\u6cd5\u662f\u5229\u7528\u4e86 Serverless \u63d2\u4ef6\uff0c\u8fd9\u6b3e\u63d2\u4ef6\u529f\u80fd\u4e30\u5bcc\uff0c\u73a9\u6cd5\u4e5f\u975e\u5e38\u591a\u3002\u5927\u5bb6\u5982\u679c\u6709\u81ea\u5df1\u7684\u4f7f\u7528\u73a9\u6cd5\uff0c\u4e5f\u6b22\u8fce\u5728\u793e\u533a\u5185\u8fdb\u884c\u4ea4\u6d41\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u64cd\u4f5c\u6d41\u7a0b\u5c31\u662f\u5c06\u81ea\u5df1\u7684\u4ee3\u7801\u7247\u6bb5\u901a\u8fc7 Serverless \u63d2\u4ef6\u4e0a\u4f20\u5230 Apache APISIX\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d Serverless \u63d2\u4ef6\u652f\u6301\u52a8\u6001\u914d\u7f6e\u548c\u70ed\u66f4\u65b0\u3002"),(0,r.kt)("h3",{id:"\u65b9\u5f0f\u4e00\uff1a\u81ea\u5b9a\u4e49\u5224\u65ad\u903b\u8f91"},"\u65b9\u5f0f\u4e00\uff1a\u81ea\u5b9a\u4e49\u5224\u65ad\u903b\u8f91"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005112469-c04868b8-388e-4b81-abcc-d37b6a8951f5.png",alt:"\u5224\u65ad\u903b\u8f91"})),(0,r.kt)("p",null,"\u901a\u8fc7\u8bf7\u6c42\u5934\u3001\u53c2\u6570\u7b49\u76f8\u5173\u4fe1\u606f\uff0c\u6765\u8fdb\u884c\u4e00\u4e9b\u5224\u65ad\u3002\u901a\u8fc7\u8fd9\u79cd\u505a\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u53bb\u5b9e\u73b0\u81ea\u5df1\u7684\u4e00\u4e9b\u89c4\u5219\uff0c\u6bd4\u5982\u8bf4\u7ed3\u5408\u4f01\u4e1a\u5185\u90e8\u7684\u4e00\u4e9b\u8ba4\u8bc1\uff0c\u6216\u8005\u53bb\u5199\u4e00\u4e9b\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91\u3002"),(0,r.kt)("h3",{id:"\u65b9\u5f0f\u4e8c\uff1a\u53d1\u8d77\u8ba4\u8bc1\u9274\u6743\u8bf7\u6c42"},"\u65b9\u5f0f\u4e8c\uff1a\u53d1\u8d77\u8ba4\u8bc1\u9274\u6743\u8bf7\u6c42"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005141578-f90cf948-4913-45cd-a28e-9e697ad197fe.png",alt:"\u9274\u6743\u8bf7\u6c42"})),(0,r.kt)("p",null,"\u901a\u8fc7 HTTP \u5e93\u53d1\u8d77\u4e00\u4e2a HTTP \u8bf7\u6c42\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u7b2c\u4e09\u65b9\u670d\u52a1\u505a\u4e00\u4e9b\u8ba4\u8bc1\u3001\u9274\u6743\u76f8\u5173\u4e8b\u60c5\uff0c\u7136\u540e\u89e3\u6790\u8fd4\u56de\u7ed3\u679c\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u505a\u7684\u4e8b\u60c5\u5c31\u53ef\u4ee5\u6269\u5c55\u5f88\u591a\u3002\u6bd4\u5982\u5bf9\u63a5 Redis \u6216\u6570\u636e\u5e93\uff0c\u53ea\u8981\u662f\u901a\u8fc7 TCP \u6216 UDP \u8fd9\u79cd\u5f62\u5f0f\u7684\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7 Serverless \u63d2\u4ef6\u8fdb\u884c\u5c1d\u8bd5\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u4e0a\u4f20"},"\u914d\u7f6e\u4e0a\u4f20"),(0,r.kt)("p",null,"\u5b8c\u6210\u81ea\u5b9a\u4e49\u4ee3\u7801\u7247\u4e4b\u540e\uff0c\u6211\u4eec\u521b\u5efa\u8def\u7531\uff0c\u5e76\u5c06\u4ee3\u7801\u7247\u914d\u7f6e\u5230 Serverless \u63d2\u4ef6\u3002\u540e\u9762\u518d\u901a\u8fc7\u8bbf\u95ee Apache APISIX \u83b7\u53d6\u76f8\u5e94\u7684\u4fe1\u606f\u53cd\u9988\uff0c\u6d4b\u8bd5\u63d2\u4ef6\u662f\u5426\u751f\u6548\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631005184917-bc620c0b-d4c6-43f5-8450-4f5b2b9549e1.png",alt:"\u914d\u7f6e\u4e0a\u4f20"})))}u.isMDXComponent=!0}}]);