"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3861],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return h}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=o(t),h=i,d=b["".concat(p,".").concat(h)]||b[h]||u[h]||r;return t?a.createElement(d,c(c({ref:n},s),{},{components:t})):a.createElement(d,c({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,c=new Array(r);c[0]=b;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var o=2;o<r;o++)c[o]=t[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1673:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return o},toc:function(){return s},default:function(){return b}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),c={title:"\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Casbin \u8fdb\u884c\u6388\u6743",author:"Casbin \u793e\u533a & Apache APISIX \u793e\u533a",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","Casbin","RBAC"],description:"\u5f53\u6211\u4eec\u5728\u4f7f\u7528 Apache APISIX \u65f6\uff0c\u53ef\u80fd\u60f3\u8981\u5728\u5e94\u7528\u91cc\u6dfb\u52a0\u590d\u6742\u7684\u6388\u6743\u903b\u8f91\u3002\u5728\u6b64\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 Apache APISIX \u7684\u5185\u7f6e Casbin \u63d2\u4ef6\uff08authz-casbin\uff09\u6765\u5b9e\u73b0\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\uff08RBAC\uff09\u6a21\u578b\u3002",tags:["technology","practical case"]},l=void 0,p={permalink:"/zh/blog/2021/08/18/Auth-with-Casbin-in-Apache-APISIX",source:"@site/blog/2021-08-18-Auth-with-Casbin-in-Apache-APISIX.md",title:"\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Casbin \u8fdb\u884c\u6388\u6743",description:"\u5f53\u6211\u4eec\u5728\u4f7f\u7528 Apache APISIX \u65f6\uff0c\u53ef\u80fd\u60f3\u8981\u5728\u5e94\u7528\u91cc\u6dfb\u52a0\u590d\u6742\u7684\u6388\u6743\u903b\u8f91\u3002\u5728\u6b64\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 Apache APISIX \u7684\u5185\u7f6e Casbin \u63d2\u4ef6\uff08authz-casbin\uff09\u6765\u5b9e\u73b0\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\uff08RBAC\uff09\u6a21\u578b\u3002",date:"2021-08-18T00:00:00.000Z",formattedDate:"2021\u5e748\u670818\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"},{label:"practical case",permalink:"/zh/blog/tags/practical-case"}],readingTime:2.325,truncated:!0,authors:[{name:"Casbin \u793e\u533a & Apache APISIX \u793e\u533a"}],prevItem:{title:"Go \u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc",permalink:"/zh/blog/2021/08/19/go-makes-Apache-APISIX-better"},nextItem:{title:"Apache APISIX \u5728 Airwallex \u7684\u5e94\u7528 | \u4e13\u8bbf Airwallex \u6280\u672f\u5e73\u53f0\u8d1f\u8d23\u4eba\u674e\u6768",permalink:"/zh/blog/2021/08/17/interview-airwallex"}},o={authorsImageUrls:[void 0]},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[{value:"Apache APISIX",id:"apache-apisix",children:[]},{value:"Casbin",id:"casbin",children:[]},{value:"authz-casbin \u63d2\u4ef6\u4ecb\u7ecd",id:"authz-casbin-\u63d2\u4ef6\u4ecb\u7ecd",children:[]}]},{value:"authz-casbin \u4f7f\u7528\u6307\u5357",id:"authz-casbin-\u4f7f\u7528\u6307\u5357",children:[{value:"\u521b\u5efa\u4e00\u4e2a\u6a21\u578b",id:"\u521b\u5efa\u4e00\u4e2a\u6a21\u578b",children:[]},{value:"\u521b\u5efa\u4e00\u6761\u7b56\u7565",id:"\u521b\u5efa\u4e00\u6761\u7b56\u7565",children:[]},{value:"\u5728\u8def\u7531\u4e0a\u4f7f\u7528\u63d2\u4ef6",id:"\u5728\u8def\u7531\u4e0a\u4f7f\u7528\u63d2\u4ef6",children:[]},{value:"\u5229\u7528\u5168\u5c40\u6a21\u578b/\u7b56\u7565\u4f7f\u7528\u63d2\u4ef6",id:"\u5229\u7528\u5168\u5c40\u6a21\u578b\u7b56\u7565\u4f7f\u7528\u63d2\u4ef6",children:[]}]},{value:"\u6700\u540e",id:"\u6700\u540e",children:[]}],u={toc:s};function b(e){var n=e.components,c=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f53\u6211\u4eec\u5728\u4f7f\u7528 Apache APISIX \u65f6\uff0c\u53ef\u80fd\u60f3\u8981\u5728\u5e94\u7528\u91cc\u6dfb\u52a0\u590d\u6742\u7684\u6388\u6743\u903b\u8f91\u3002\u5728\u6b64\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 Apache APISIX \u7684\u5185\u7f6e Casbin \u63d2\u4ef6\uff08authz-casbin\uff09\u6765\u5b9e\u73b0\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\uff08RBAC\uff09\u6a21\u578b\u3002")),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\uff0c \u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u7cbe\u7ec6\u5316\u8def\u7531\u3001\u9650\u6d41\u9650\u901f\u3001\u670d\u52a1\u964d\u7ea7\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u6570\u767e\u9879\u529f\u80fd\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 Apache APISIX \u6765\u5904\u7406\u4f20\u7edf\u7684\u5357\u5317\u5411\u6d41\u91cf\uff0c\u4ee5\u53ca\u670d\u52a1\u95f4\u7684\u4e1c\u897f\u5411\u6d41\u91cf\uff0c \u4e5f\u53ef\u4ee5\u5f53\u505a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"k8s ingress controller")," \u6765\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"casbin"},"Casbin"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/zh-CN/"},"Casbin")," \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u3001\u9ad8\u6548\u7684\u5f00\u6e90\u8bbf\u95ee\u63a7\u5236\u6846\u67b6\uff0c\u5176\u6743\u9650\u7ba1\u7406\u673a\u5236\u652f\u6301\u591a\u79cd\u8bbf\u95ee\u63a7\u5236\u6a21\u578b\u3002"),(0,r.kt)("h3",{id:"authz-casbin-\u63d2\u4ef6\u4ecb\u7ecd"},"authz-casbin \u63d2\u4ef6\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u5728 Apache APISIX \u7684\u4f7f\u7528\u4e2d\uff0c\u8def\u7531\u5339\u914d\u548c\u8bf7\u6c42\u6388\u6743\u4e4b\u95f4\u6709\u4e2a\u9690\u542b\u7684\u77db\u76fe\u70b9\uff1a\u4e3a\u4e86\u66f4\u9ad8\u7ec6\u7c92\u5ea6\u7684\u6743\u9650\u63a7\u5236\uff0c\u9700\u8981\u914d\u7f6e\u66f4\u9ad8\u7ec6\u7c92\u5ea6\u7684\u8def\u7531\uff0c\u6765\u7cbe\u51c6\u8bc6\u522b\u8bf7\u6c42\u5e76\u5bf9\u8bf7\u6c42\u8fdb\u884c\u6388\u6743\u3002\u5728\u590d\u6742\u7684\u6388\u6743\u6a21\u578b\u573a\u666f\u4e0b\uff0c\u8fd9\u5c06\u5bfc\u81f4\u8def\u7531\u6570\u91cf\u6210\u500d\u589e\u52a0\uff0c\u52a0\u5267\u4e86\u8fd0\u7ef4\u590d\u6742\u5ea6\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/d9b928321fcdd12eef024df8c7c410424c1e0c8b/docs/en/latest/plugins/authz-casbin.md"},"authz-casbin")," \u662f\u4e00\u4e2a\u57fa\u4e8e lua-casbin \u7684 Apache APISIX \u63d2\u4ef6\uff0c\u652f\u6301\u57fa\u4e8e\u5404\u79cd\u8bbf\u95ee\u6a21\u578b\u7684\u5f3a\u5927\u6388\u6743\u3002Casbin \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u3001\u9ad8\u6548\u7684\u5f00\u6e90\u8bbf\u95ee\u63a7\u5236\u6846\u67b6\uff0c\u652f\u6301 ACL\u3001RBAC\u3001ABAC \u7b49\u8bbf\u95ee\u63a7\u5236\u6a21\u578b\uff0clua-casbin \u662f Casbin \u8bbf\u95ee\u63a7\u5236\u6846\u67b6\u7684 Lua \u7248\u672c\u5b9e\u73b0\u3002\nauthz-casbin \u63d2\u4ef6\u53ef\u4ee5\u628a\u8def\u7531\u5339\u914d\u548c\u8bf7\u6c42\u6388\u6743\u8fd9\u4e24\u4e2a\u529f\u80fd\u5f88\u597d\u5730\u8fdb\u884c\u89e3\u8026\uff0c\u4f60\u53ef\u4ee5\u5c06\u5404\u79cd\u6388\u6743\u8bbf\u95ee\u6a21\u578b\u52a0\u8f7d\u5230 Apache APISIX \u4e2d\uff0c\u501f\u52a9 lua-casbin \u5b9e\u73b0\u9ad8\u6548\u590d\u6742\u7684\u6388\u6743\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5982\u679c\u4f60\u60f3\u8981\u5b9e\u73b0\u8eab\u4efd\u9a8c\u8bc1\uff08authentication\uff09\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u63d2\u4ef6\u6216\u8005\u81ea\u5df1\u6765\u914d\u7f6e\u5b8c\u6210\u9a8c\u8bc1\u7528\u6237\u8eab\u4efd\uff0c\u6bd4\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/zh/latest/plugins/jwt-auth.md"},"jwt-auth")," \u63d2\u4ef6\u3002"),(0,r.kt)("h2",{id:"authz-casbin-\u4f7f\u7528\u6307\u5357"},"authz-casbin \u4f7f\u7528\u6307\u5357"),(0,r.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u6a21\u578b"},"\u521b\u5efa\u4e00\u4e2a\u6a21\u578b"),(0,r.kt)("p",null,"authz-casbin \u63d2\u4ef6\u4f7f\u7528\u4e09\u4e2a\u53c2\u6570\u6765\u8fdb\u884c\u6388\u6743\uff1asubject\u3001object \u548c action\u3002subject \u662f\u7528\u6237\u540d\uff0c\u4ee3\u6307\u8bf7\u6c42\u4e2d\u7684\u7528\u6237\uff1bobject \u662f\u5c06\u8981\u88ab\u8bbf\u95ee\u7684 URL \u94fe\u63a5\u4e5f\u5c31\u662f\u5c06\u88ab\u8bbf\u95ee\u7684\u8d44\u6e90\uff1baction \u662f\u8bf7\u6c42\u6388\u6743\u7684\u884c\u4e3a\uff0c\u6bd4\u5982\u8bfb\u64cd\u4f5c\uff08read\uff09\u6216\u8005\u662f\u5199\u64cd\u4f5c\uff08write\uff09\u3002\n\u5047\u5982\uff0c\u6211\u4eec\u60f3\u8981\u521b\u5efa\u4e00\u4e2a\u6a21\u578b\u6765\u8bbf\u95ee\u4e09\u4e2a\u8d44\u6e90\uff1a/\uff0c/res1\uff0c/res2\uff0c\u6211\u4eec\u60f3\u8981\u4e00\u4e2a\u7c7b\u4f3c\u4e8e\u8fd9\u6837\u7684\u6a21\u578b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"authz-casbin example",src:t(79422).Z})),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u6a21\u578b\u4e2d\uff0c\u6240\u6709\u7684\u7528\u6237\uff0c\u4f8b\u5982 Jack\uff0c\u53ef\u4ee5\u8bbf\u95ee\u4e3b\u9875\u9762\uff08/\uff09\u3002\u800c\u50cf Alice \u548c Bob \u5177\u6709\u7ba1\u7406\u5458\u6743\u9650\u7684\u7528\u6237\u5219\u53ef\u4ee5\u8bbf\u95ee\u6240\u6709\u7684\u9875\u9762\u548c\u8d44\u6e90\uff08/res1\uff0c/res2\uff0c/\uff09\u3002\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u9700\u8981\u6765\u9650\u5236\u6ca1\u6709\u7ba1\u7406\u5458\u6743\u9650\u7684\u7528\u6237\u53ea\u80fd\u4f7f\u7528 GET \u8bf7\u6c42\u65b9\u6cd5\u8bbf\u95ee\u7279\u5b9a\u7684\u8d44\u6e90\u3002\u6240\u9700\u8981\u7684\u6a21\u578b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\n")),(0,r.kt)("h3",{id:"\u521b\u5efa\u4e00\u6761\u7b56\u7565"},"\u521b\u5efa\u4e00\u6761\u7b56\u7565"),(0,r.kt)("p",null,"\u4ece\u4e0a\u8ff0\u7684\u4f8b\u5b50\u6765\u770b\uff0c\u7b56\u7565\u5e94\u8be5\u50cf\u662f\u8fd9\u6837\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob,admin\n")),(0,r.kt)("p",null,"\u6a21\u578b\u91cc\u7684 matcher \u8868\u660e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"(g(r.sub, p.sub) || keyMatch(r.sub, p.sub))"),"\uff1a\u8bf7\u6c42\u91cc\u7684 subject \u548c\u7b56\u7565\u91cc\u7684 subject \u6709\u7740\u76f8\u540c\u7684\u89d2\u8272\u6216\u8005\u8bf7\u6c42\u91cc\u7684 subject \u548c\u7b56\u7565\u91cc\u7684 subject \u53ef\u4ee5\u901a\u8fc7\u5185\u7f6e\u7684\u65b9\u6cd5 ",(0,r.kt)("inlineCode",{parentName:"li"},"keyMatch")," \u5339\u914d\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"keyMatch")," \u4f5c\u4e3a Lua Casbin \u7684\u5185\u7f6e\u51fd\u6570\uff0c\u76f8\u5173\u7684\u63cf\u8ff0\u4ee5\u53ca\u66f4\u591a\u7684\u51fd\u6570\u53ef\u8df3\u8f6c ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua"},"lua-casbin"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"keyMatch(r.obj, p.obj)"),"\uff1a\u8bf7\u6c42\u91cc\u7684 object \u548c\u7b56\u7565\u91cc\u7684 object \u53ef\u76f8\u4e92\u5339\u914d\uff08\u4ee3\u6307 URL \u94fe\u63a5\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"keyMatch(r.act, p.act)"),"\uff1a\u8bf7\u6c42\u91cc\u7684 action \u548c\u7b56\u7565\u91cc\u7684 action \u53ef\u76f8\u4e92\u5339\u914d\uff08\u4ee3\u6307 HTTP \u8bf7\u6c42\u65b9\u6cd5\uff09\u3002")),(0,r.kt)("h3",{id:"\u5728\u8def\u7531\u4e0a\u4f7f\u7528\u63d2\u4ef6"},"\u5728\u8def\u7531\u4e0a\u4f7f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4e00\u65e6\u4f60\u521b\u5efa\u4e86\u6a21\u578b\u548c\u7b56\u7565\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 APISIX Admin API \u5728\u8def\u7531\u4e0a\u4f7f\u7528\u3002\u82e5\u60f3\u4f7f\u7528\uff0c\u4f60\u53ef\u4ee5\u6a21\u578b\u548c\u7b56\u7565\u7684\u6587\u4ef6\u8def\u5f84\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model_path": "/path/to/model.conf",\n            "policy_path": "/path/to/policy.csv",\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0cusername \u662f\u4f20\u9012\u5230 subject \u91cc\u7684\u7528\u6237\u540d\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},'"username":"user"'),"\u6765\u628a\u4f60\u5b9a\u4e49\u7684",(0,r.kt)("inlineCode",{parentName:"p"},'"user":"alice"'),"\u4f20\u9012\u5230 username \uff0c\u8ba9 username \u6210\u4e3a Alice\u3002\n\u540c\u6837\uff0c\u4f60\u53ef\u4ee5\u5c06\u6a21\u578b\u548c\u7b56\u7565\u76f4\u63a5\u653e\u5230\u91cc\u9762\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model": "[request_definition]\n            r = sub, obj, act\n\n            [policy_definition]\n            p = sub, obj, act\n\n            [role_definition]\n            g = _, _\n\n            [policy_effect]\n            e = some(where (p.eft == allow))\n\n            [matchers]\n            m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n\n            "policy": "p, *, /, GET\n            p, admin, *, *\n            g, alice, admin",\n\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,r.kt)("h3",{id:"\u5229\u7528\u5168\u5c40\u6a21\u578b\u7b56\u7565\u4f7f\u7528\u63d2\u4ef6"},"\u5229\u7528\u5168\u5c40\u6a21\u578b/\u7b56\u7565\u4f7f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5728\u4e00\u4e9b\u60c5\u5f62\u4e2d\uff0c\u4f60\u53ef\u80fd\u60f3\u8981\u5728\u591a\u4e2a\u8def\u7531\u4e2d\u4f7f\u7528\u76f8\u540c\u7684\u6a21\u578b\u548c\u7b56\u7565\uff0c\u4f60\u53ef\u4ee5\u9996\u5148\u53d1\u9001\u4e00\u4e2a PUT \u8bf7\u6c42\u5c06\u6a21\u578b\u548c\u7b56\u7565\u7684\u914d\u7f6e\u53d1\u9001\u5230\u63d2\u4ef6\u7684\u5143\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl <http://127.0.0.1:9080/apisix/admin/plugin_metadata/authz-casbin> -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\n{\n"model": "[request_definition]\nr = sub, obj, act\n[policy_definition]\np = sub, obj, act\n[role_definition]\ng = _, _\n[policy_effect]\ne = some(where (p.eft == allow))\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n"policy": "p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob, admin"\n}\'\n')),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u4f60\u9700\u8981\u4f7f\u7528 Admin API \u6765\u53d1\u9001\u8bf7\u6c42\u4f7f\u5f97\u591a\u4e2a\u8def\u7531\u4f7f\u7528\u76f8\u540c\u7684\u6a21\u578b/\u7b56\u7565\u914d\u7f6e\uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,r.kt)("p",null,"\u8fd9\u5c06\u4f1a\u5c06\u63d2\u4ef6\u7684\u914d\u7f6e\u52a8\u6001\u5730\u6dfb\u52a0\u5230\u8def\u7531\u4e2d\u3002\u901a\u8fc7\u5411\u63d2\u4ef6\u7684\u914d\u7f6e\u6570\u636e\u4e2d\u53d1\u9001\u66f4\u65b0\u6a21\u578b\u548c\u7b56\u7565\u7684\u8bf7\u6c42\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u66f4\u65b0\u63d2\u4ef6\u7684\u914d\u7f6e\u3002"),(0,r.kt)("h2",{id:"\u6700\u540e"},"\u6700\u540e"),(0,r.kt)("p",null,"\u611f\u8c22 Casbin \u548c Apache APISIX \u793e\u533a\u7684\u5f00\u53d1\u8005\u4eec\uff0c\u4ece Casbin \u793e\u533a\u7684\u5f00\u53d1\u8005 rushitote \u63d0\u51fa issue\uff0c\u63d0\u4ea4 PR\uff0c\u5230 Apache APISIX \u793e\u533a\u7684\u5f00\u53d1\u8005\u4eec\u79ef\u6781\u5730 review PR\uff0c\u8fd9\u4e2a\u8de8\u793e\u533a\u7684\u5408\u4f5c\u53cb\u597d\u800c\u6709\u5e8f\u5730\u5411\u524d\u63a8\u8fdb\uff0c\u54cd\u5e94 open source makes world better\u3002"),(0,r.kt)("p",null,"\u6765\u6e90\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@rushitote/authorization-in-apisix-using-casbin-59b693669d6d"},"authorization-in-apisix-using-casbin")))}b.isMDXComponent=!0},79422:function(e,n,t){n.Z=t.p+"assets/images/2021-08-18-1-5ecf309fec322291ce40b4fae7424acc.png"}}]);