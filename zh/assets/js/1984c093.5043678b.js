"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58538],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=u(n),f=a,g=h["".concat(o,".").concat(f)]||h[f]||s[f]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81095:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l={title:"Apache APISIX 2.9 \u6b63\u5f0f\u53d1\u5e03\uff0c\u5e26\u6765\u66f4\u591a\u65b0\u529f\u80fd\uff01",author:"spacewander",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["API \u7f51\u5173","APISIX","Release","Lua","Nginx","APISIX 2.9"],description:"Apache APISIX 2.9 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u8be5\u7248\u672c\u65b0\u589e\u4e86 2 \u4e2a\u65b0\u529f\u80fd\uff0c\u8fdb\u4e00\u6b65\u5b8c\u5584\u4e86\u5bf9\u63d2\u4ef6\u7684\u652f\u6301\u3002",tags:["news"]},p={permalink:"/zh/blog/2021/08/27/release-apache-apisix-2.9",source:"@site/blog/2021-08-27-release-apache-apisix-2.9.md",title:"Apache APISIX 2.9 \u6b63\u5f0f\u53d1\u5e03\uff0c\u5e26\u6765\u66f4\u591a\u65b0\u529f\u80fd\uff01",description:"Apache APISIX 2.9 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u8be5\u7248\u672c\u65b0\u589e\u4e86 2 \u4e2a\u65b0\u529f\u80fd\uff0c\u8fdb\u4e00\u6b65\u5b8c\u5584\u4e86\u5bf9\u63d2\u4ef6\u7684\u652f\u6301\u3002",date:"2021-08-27T00:00:00.000Z",formattedDate:"2021\u5e748\u670827\u65e5",tags:[{label:"news",permalink:"/zh/blog/tags/news"}],readingTime:.92,truncated:!0,prevItem:{title:"\u793e\u533a\u4f1a\u8bae\uff5c \u5468\u4e09\u4e0b\u5348 2 \u70b9\uff0cApache APISIX Ingress \u793e\u533a\u4f1a\u8bae\u4e0e\u4f60\u4e0d\u89c1\u4e0d\u6563",permalink:"/zh/blog/2021/08/30/Ingress-Meeting"},nextItem:{title:"Authorization with Casbin in Apache APISIX",permalink:"/zh/blog/2021/08/25/Auth-with-Casbin-in-Apache-APISIX"}},o=[{value:"\u65b0\u529f\u80fd\uff1a\u65b0\u589e authz-casbin \u63d2\u4ef6",id:"\u65b0\u529f\u80fd\uff1a\u65b0\u589e-authz-casbin-\u63d2\u4ef6",children:[]},{value:"\u65b0\u529f\u80fd\uff1a \u8def\u7531\u7ea7\u522b\u4e0a real-ip \u7684\u52a8\u6001\u914d\u7f6e",id:"\u65b0\u529f\u80fd\uff1a-\u8def\u7531\u7ea7\u522b\u4e0a-real-ip-\u7684\u52a8\u6001\u914d\u7f6e",children:[]},{value:"\u5b8c\u5584\uff1a\u5916\u90e8\u63d2\u4ef6\u673a\u5236",id:"\u5b8c\u5584\uff1a\u5916\u90e8\u63d2\u4ef6\u673a\u5236",children:[]},{value:"\u5b8c\u5584\uff1a\u73b0\u6709\u63d2\u4ef6\u529f\u80fd\u66f4\u4e3a\u4e30\u5bcc",id:"\u5b8c\u5584\uff1a\u73b0\u6709\u63d2\u4ef6\u529f\u80fd\u66f4\u4e3a\u4e30\u5bcc",children:[]},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",children:[]}],u={toc:o};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache APISIX 2.9 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\ud83c\udf89 \u8be5\u7248\u672c\u6709 30+ \u5f00\u53d1\u8005\u53c2\u4e0e\uff0c\u5171\u63d0\u4ea4\u4e86 100+ PR\uff0c\u65b0\u589e\u4e86 2 \u4e2a\u65b0\u529f\u80fd\uff0c\u8fdb\u4e00\u6b65\u5b8c\u5584\u4e86\u5bf9\u63d2\u4ef6\u7684\u652f\u6301\uff0c\u5feb\u6765\u4e86\u89e3 Apache APISIX 2.9 \u7248\u672c\u7684\u65b0\u7279\u6027\u5427\uff01"),(0,i.kt)("p",null,"\ud83d\udc47\ud83d\udc47\ud83d\udc47"),(0,i.kt)("h2",{id:"\u65b0\u529f\u80fd\uff1a\u65b0\u589e-authz-casbin-\u63d2\u4ef6"},"\u65b0\u529f\u80fd\uff1a\u65b0\u589e authz-casbin \u63d2\u4ef6"),(0,i.kt)("p",null,"Casbin \u793e\u533a\u5411 APISIX \u8d21\u732e\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/d9b928321fcdd12eef024df8c7c410424c1e0c8b/docs/en/latest/plugins/authz-casbin.md"},"authz-casbin")," \u63d2\u4ef6\uff0c\u5728 APISIX 2.9 \u65b0\u7248\u672c\u4e2d\uff0cAPISIX \u53ef\u4ee5\u7ed3\u5408 Casbin \u505a\u8def\u7531\u7ea7\u522b\u4e0a\u7684\u7cbe\u7ec6\u5316\u6743\u9650\u7ba1\u7406\u3002"),(0,i.kt)("p",null,"Casbin \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u8bbf\u95ee\u63a7\u5236\u6846\u67b6\uff0c\u652f\u6301\u901a\u8fc7\u914d\u7f6e\u6765\u51b3\u5b9a\u662f\u5426\u5141\u8bb8\u67d0\u4e2a\u8bbf\u95ee\u64cd\u4f5c\u3002\u901a\u8fc7 authz-casbin \u63d2\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u4e00\u4e2a\u8def\u7531\u91cc\u540c\u65f6\u505a\u591a\u79cd\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e00\u63a7\u5236\u65e2\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 APISIX Control Plane \u914d\u7f6e\uff1b\u65e2\u53ef\u4ee5\u9488\u5bf9\u7ed9\u5b9a\u8def\u7531\u751f\u6548\uff0c\u53c8\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u7684\u9ed8\u8ba4\u503c\u3002\u53ef\u4ee5\u8bf4\u975e\u5e38\u5730\u7075\u6d3b\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5bf9\u8fd9\u4e00\u63d2\u4ef6\u611f\u5174\u8da3\uff0c\u6b22\u8fce\u60a8\u79fb\u6b65\u9605\u8bfb ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/18/Auth-with-Casbin-in-Apache-APISIX"},"\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Casbin \u8fdb\u884c\u6388\u6743")," \u3002"),(0,i.kt)("h2",{id:"\u65b0\u529f\u80fd\uff1a-\u8def\u7531\u7ea7\u522b\u4e0a-real-ip-\u7684\u52a8\u6001\u914d\u7f6e"},"\u65b0\u529f\u80fd\uff1a \u8def\u7531\u7ea7\u522b\u4e0a real-ip \u7684\u52a8\u6001\u914d\u7f6e"),(0,i.kt)("p",null,"APISIX 2.9 \u7248\u672c\u73b0\u5728\u652f\u6301\u5728\u8def\u7531\u7ea7\u522b\u4e0a\u52a8\u6001\u914d\u7f6e real-ip \u4e86\uff01"),(0,i.kt)("p",null,"\u65b0\u7248\u672c\u65b0\u589e\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/real-ip/"},"real-ip")," \u63d2\u4ef6\uff0creal-ip \u63d2\u4ef6\u53ef\u4ee5\u52a8\u6001\u5730\u6539\u53d8 APISIX \u770b\u5230\u7684\u5ba2\u6237\u7aef\u7684 IP \u548c\u7aef\u53e3\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u63d2\u4ef6\u52a8\u6001\u8bbe\u7f6e real-ip \u53c2\u6570."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "plugins": {\n        "real-ip": {\n            "source": "http_x_forwarded_for",\n            "trusted_addresses": ["127.0.0.0/24"]\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"\u5b8c\u5584\uff1a\u5916\u90e8\u63d2\u4ef6\u673a\u5236"},"\u5b8c\u5584\uff1a\u5916\u90e8\u63d2\u4ef6\u673a\u5236"),(0,i.kt)("p",null,"APISIX 2.9 \u7248\u672c\u8fdb\u4e00\u6b65\u5b8c\u5584\u4e86\u5bf9\u5916\u90e8\u63d2\u4ef6\u7684\u652f\u6301\uff0c\u505a\u51fa\u4e86\u4e24\u4e2a\u8f83\u5927\u7684\u6539\u52a8\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5411 Plugin Runner \u53d1\u9001\u63d2\u4ef6\u914d\u7f6e\u65f6\uff0c\u4f1a\u53d1\u9001\u4e00\u4e2a\u552f\u4e00 key\u3002\u7531\u4e8e APISIX \u662f\u591a\u8fdb\u7a0b\u67b6\u6784\uff0c\u8fc7\u53bb\u53d1\u9001\u63d2\u4ef6\u914d\u7f6e\u65f6\u4f1a\u51fa\u73b0\u4e00\u4e2a\u914d\u7f6e\u88ab\u53d1\u9001\u51e0\u6b21\u7684\u60c5\u51b5\uff0c\u5bfc\u81f4 Plugin Runner \u91cd\u590d\u66f4\u65b0\u63d2\u4ef6\u914d\u7f6e\u3002\u5982\u4eca\uff0c\u51ed\u501f\u8fd9\u4e2a\u552f\u4e00 key\uff0cPlugin Runner \u53ef\u4ee5\u8bc6\u522b\u91cd\u590d\u7684\u914d\u7f6e\u3002\u8fd9\u4f7f\u5f97\u5728 Plugin Runner \u91cc\u9762\u5b9e\u73b0\u9650\u6d41\u4e00\u7c7b\u7684\u63d2\u4ef6\u53d8\u5f97\u53ef\u80fd\uff01")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u589e\u52a0\u4ece Plugin Runner \u53cd\u5411\u83b7\u53d6 APISIX \u4fe1\u606f\u7684\u673a\u5236\u3002\u9664\u4e86 APISIX \u5411 Plugin Runner \u53d1\u9001\u7684\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u8def\u5f84\u7b49\u4fe1\u606f\u5916\uff0cPlugin Runner \u4e5f\u53ef\u4ee5\u53cd\u5411\u4ece APISIX \u67e5\u8be2\u4fe1\u606f\u3002\u76ee\u524d\u5df2\u7ecf\u5728 Go Plugin Runner \u7684\u5b9e\u73b0\u4e2d\uff0c\u501f\u52a9\u8fd9\u4e00\u673a\u5236\u5b9e\u73b0\u4e86 Var API\uff0c\u53ef\u4ee5\u5f97\u5230\u8bf7\u6c42\u7684 request_time \u7b49\u8ddf Nginx \u53d8\u91cf\u76f8\u5173\u7684\u4fe1\u606f\u3002"))),(0,i.kt)("p",null,"\u5305\u542b\u4e86\u8fd9\u4e00\u6539\u52a8\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-go-plugin-runner/tree/6f249010b83a124bc30e940635db7fa0838e2c4a"},"Go Plugin Runner")," \u5c06\u4f1a\u5728\u4e0b\u5468\u53d1\u5e03 0.2.0 \u7248\u672c\uff0c\u656c\u8bf7\u671f\u5f85\uff01"),(0,i.kt)("h2",{id:"\u5b8c\u5584\uff1a\u73b0\u6709\u63d2\u4ef6\u529f\u80fd\u66f4\u4e3a\u4e30\u5bcc"},"\u5b8c\u5584\uff1a\u73b0\u6709\u63d2\u4ef6\u529f\u80fd\u66f4\u4e3a\u4e30\u5bcc"),(0,i.kt)("p",null,"APISIX 2.9 \u7248\u672c\u5b8c\u5584\u4e86\u73b0\u6709\u63d2\u4ef6\u7684\u529f\u80fd\uff0c\u505a\u51fa\u4e86\u4e24\u4e2a\u8f83\u5927\u7684\u6539\u52a8\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/request-id/"},"request-id")," \u63d2\u4ef6\u652f\u6301\u901a\u8fc7 snowflake \u7b97\u6cd5\u751f\u6210 ID\u3002snowflake ID \u751f\u6210\u7b97\u6cd5\u662f\u4e00\u5957\u5206\u5e03\u5f0f\u7684 ID \u751f\u6210\u673a\u5236\uff0c\u5176\u751f\u6210\u7684 ID \u7ed3\u5408\u4e86 machine ID\u3001\u65f6\u95f4\u6233\u548c\u751f\u6210\u5e8f\u5217\u3002\u6211\u4eec\u901a\u8fc7 etcd \u6765\u4fdd\u8bc1\u6bcf\u4e2a worker \u90fd\u80fd\u5206\u914d\u5230\u4e00\u4e2a\u552f\u4e00\u7684 machine ID\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/error-log-logger/"},"error-log-logger")," \u63d2\u4ef6\u652f\u6301\u4e0a\u62a5 error log \u7ed9 skywalking\uff0c\u8ba9 APISIX \u7684\u53ef\u89c2\u6d4b\u6027\u9526\u4e0a\u6dfb\u82b1\u3002"))),(0,i.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u9875\u9762\u4e0b\u8f7d Apache APISIX 2.9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\uff1a\u8bf7\u8bbf\u95ee",(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/downloads/"},"\u4e0b\u8f7d\u9875\u9762")),(0,i.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\uff1a\u8bf7\u8bbf\u95ee",(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/how-to-build/"},"\u5b89\u88c5\u6307\u5357"))))}c.isMDXComponent=!0}}]);