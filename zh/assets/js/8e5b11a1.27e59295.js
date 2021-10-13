"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55284],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81605:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return c},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"wolf-rbac"},p=void 0,o={unversionedId:"plugins/wolf-rbac",id:"version-2.5/plugins/wolf-rbac",isDocsHomePage:!1,title:"wolf-rbac",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.5/plugins/wolf-rbac.md",sourceDirName:"plugins",slug:"/plugins/wolf-rbac",permalink:"/zh/docs/apisix/2.5/plugins/wolf-rbac",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/wolf-rbac.md",tags:[],version:"2.5",frontMatter:{title:"wolf-rbac"},sidebar:"version-2.5/docs",previous:{title:"authz-keycloak",permalink:"/zh/docs/apisix/2.5/plugins/authz-keycloak"},next:{title:"openid-connect",permalink:"/zh/docs/apisix/2.5/plugins/openid-connect"}},c=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u540d\u5b57",id:"\u540d\u5b57",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",children:[]},{value:"\u4f9d\u8d56\u9879",id:"\u4f9d\u8d56\u9879",children:[{value:"\u5b89\u88c5 wolf, \u5e76\u542f\u52a8\u670d\u52a1",id:"\u5b89\u88c5-wolf-\u5e76\u542f\u52a8\u670d\u52a1",children:[]},{value:"\u6dfb\u52a0\u5e94\u7528, \u7ba1\u7406\u5458, \u666e\u901a\u7528\u6237, \u6743\u9650, \u8d44\u6e90 \u53ca\u7ed9\u7528\u6237\u6388\u6743.",id:"\u6dfb\u52a0\u5e94\u7528-\u7ba1\u7406\u5458-\u666e\u901a\u7528\u6237-\u6743\u9650-\u8d44\u6e90-\u53ca\u7ed9\u7528\u6237\u6388\u6743",children:[]}]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%90%8D%E5%AD%97"},(0,l.kt)("strong",{parentName:"a"},"\u540d\u5b57"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},(0,l.kt)("strong",{parentName:"a"},"\u5c5e\u6027"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BE%9D%E8%B5%96%E9%A1%B9"},(0,l.kt)("strong",{parentName:"a"},"\u4f9d\u8d56\u9879"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},(0,l.kt)("strong",{parentName:"a"},"\u5982\u4f55\u542f\u7528"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},(0,l.kt)("strong",{parentName:"a"},"\u6d4b\u8bd5\u63d2\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},(0,l.kt)("strong",{parentName:"a"},"\u7981\u7528\u63d2\u4ef6")))),(0,l.kt)("h2",{id:"\u540d\u5b57"},"\u540d\u5b57"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," \u662f\u4e00\u4e2a\u8ba4\u8bc1\u53ca\u6388\u6743(rbac)\u63d2\u4ef6\uff0c\u5b83\u9700\u8981\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," \u4e00\u8d77\u914d\u5408\u624d\u80fd\u5de5\u4f5c\u3002\u540c\u65f6\u9700\u8981\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," \u5230\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"service")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"route")," \u4e2d\u3002\nrbac \u529f\u80fd\u7531",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf"},"wolf"),"\u63d0\u4f9b, \u6709\u5173 ",(0,l.kt)("inlineCode",{parentName:"p"},"wolf")," \u7684\u66f4\u591a\u4fe1\u606f, \u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf"},"wolf \u6587\u6863"),"\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"',(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:10080%22"},'http://127.0.0.1:10080"')),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"td"},"wolf-server")," \u7684\u8bbf\u95ee\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"appid"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"unset"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5e94\u7528 id, \u8be5\u5e94\u7528 id, \u9700\u8981\u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},"wolf-console")," \u4e2d\u5df2\u7ecf\u6dfb\u52a0\u7684\u5e94\u7528 id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header_prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"X-"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49 http \u5934\u7684\u524d\u7f00\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"wolf-rbac"),"\u5728\u9274\u6743\u6210\u529f\u540e, \u4f1a\u5728\u8bf7\u6c42\u5934(\u7528\u4e8e\u4f20\u7ed9\u540e\u7aef)\u53ca\u54cd\u5e94\u5934(\u7528\u4e8e\u4f20\u7ed9\u524d\u7aef)\u4e2d\u6dfb\u52a0 3 \u4e2a\u5934: ",(0,l.kt)("inlineCode",{parentName:"td"},"X-UserId"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"X-Username"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"X-Nickname"))))),(0,l.kt)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,l.kt)("p",null,"\u63d2\u4ef6\u4f1a\u589e\u52a0\u8fd9\u4e9b\u63a5\u53e3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/login"),(0,l.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/change_pwd"),(0,l.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/user_info")),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u9700\u8981\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.5/plugin-interceptors"},"interceptors")," \u6765\u4fdd\u62a4\u5b83\u4eec\u3002"),(0,l.kt)("h2",{id:"\u4f9d\u8d56\u9879"},"\u4f9d\u8d56\u9879"),(0,l.kt)("h3",{id:"\u5b89\u88c5-wolf-\u5e76\u542f\u52a8\u670d\u52a1"},"\u5b89\u88c5 wolf, \u5e76\u542f\u52a8\u670d\u52a1"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/quick-start-with-docker/README-CN.md"},"Wolf \u5feb\u901f\u8d77\u6b65")),(0,l.kt)("h3",{id:"\u6dfb\u52a0\u5e94\u7528-\u7ba1\u7406\u5458-\u666e\u901a\u7528\u6237-\u6743\u9650-\u8d44\u6e90-\u53ca\u7ed9\u7528\u6237\u6388\u6743"},"\u6dfb\u52a0\u5e94\u7528, \u7ba1\u7406\u5458, \u666e\u901a\u7528\u6237, \u6743\u9650, \u8d44\u6e90 \u53ca\u7ed9\u7528\u6237\u6388\u6743."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/docs/usage.md"},"Wolf \u7ba1\u7406\u4f7f\u7528")),(0,l.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a consumer \u5bf9\u8c61\uff0c\u5e76\u8bbe\u7f6e\u63d2\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},"wolf-rbac")," \u7684\u503c\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "username":"wolf_rbac",\n  "plugins":{\n    "wolf-rbac":{\n      "server":"http://127.0.0.1:10080",\n      "appid":"restful"\n    }\n  },\n  "desc":"wolf-rbac"\n}\'\n')),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00 dashboard\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),"\uff0c\u901a\u8fc7 web \u754c\u9762\u6765\u5b8c\u6210\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u5148\u589e\u52a0\u4e00\u4e2a consumer\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/wolf-rbac-1.png",alt:null})),(0,l.kt)("p",null,"\u7136\u540e\u5728 consumer \u9875\u9762\u4e2d\u6dfb\u52a0 wolf-rbac \u63d2\u4ef6\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/wolf-rbac-2.png",alt:null})),(0,l.kt)("p",null,"\u6ce8\u610f: \u4e0a\u9762\u586b\u5199\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"appid")," \u9700\u8981\u5728 wolf \u63a7\u5236\u53f0\u4e2d\u5df2\u7ecf\u5b58\u5728\u7684."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa Route \u6216 Service \u5bf9\u8c61\uff0c\u5e76\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"li"},"wolf-rbac")," \u63d2\u4ef6\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {\n        "wolf-rbac": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "www.baidu.com:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("h4",{id:"\u9996\u5148\u8fdb\u884c\u767b\u5f55\u83b7\u53d6-wolf-rbac-token"},"\u9996\u5148\u8fdb\u884c\u767b\u5f55\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"h4"},"wolf-rbac")," token:"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"appid"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"password")," \u5fc5\u987b\u4e3a wolf \u7cfb\u7edf\u4e2d\u771f\u5b9e\u5b58\u5728\u7684."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5 POST application/json \u65b9\u5f0f\u767b\u9646.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/login -i \\\n-H "Content-Type: application/json" \\\n-d \'{"appid": "restful", "username":"test", "password":"user-password"}\'\n\nHTTP/1.1 200 OK\nDate: Wed, 24 Jul 2019 10:33:31 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n{"rbac_token":"V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts","user_info":{"nickname":"test","username":"test","id":"749"}}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5 POST x-www-form-urlencoded \u65b9\u5f0f\u767b\u9646")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/login -i \\\n-H \"Content-Type: application/x-www-form-urlencoded\" \\\n-d 'appid=restful&username=test&password=user-password'\n")),(0,l.kt)("h4",{id:"\u4f7f\u7528\u83b7\u53d6\u5230\u7684-token-\u8fdb\u884c\u8bf7\u6c42\u5c1d\u8bd5"},"\u4f7f\u7528\u83b7\u53d6\u5230\u7684 token \u8fdb\u884c\u8bf7\u6c42\u5c1d\u8bd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f3a\u5c11 token")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/ -H"Host: www.baidu.com" -i\n\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Missing rbac token in request"}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"token \u653e\u5230\u8bf7\u6c42\u5934(Authorization)\u4e2d\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ -H\"Host: www.baidu.com\" \\\n-H 'Authorization: V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -i\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"token \u653e\u5230\u8bf7\u6c42\u5934(x-rbac-token)\u4e2d\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ -H\"Host: www.baidu.com\" \\\n-H 'x-rbac-token: V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -i\n\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"token \u653e\u5230\u8bf7\u6c42\u53c2\u6570\u4e2d\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://127.0.0.1:9080?rbac_token=V1%23restful%23eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -H\"Host: www.baidu.com\" -i\n\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"token \u653e\u5230 cookie \u4e2d\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080 -H"Host: www.baidu.com" \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i\n\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n')),(0,l.kt)("h4",{id:"\u83b7\u53d6-rbac-\u7528\u6237\u4fe1\u606f"},"\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"h4"},"RBAC")," \u7528\u6237\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/user_info \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i\n\n\nHTTP/1.1 200 OK\n{\n    "user_info":{\n        "nickname":"test",\n        "lastLogin":1582816780,\n        "id":749,\n        "username":"test",\n        "appIDs":["restful"],\n        "manager":"none",\n        "permissions":{"USER_LIST":true},\n        "profile":null,\n        "roles":{},\n        "createTime":1578820506,\n        "email":""\n    }\n}\n')),(0,l.kt)("h4",{id:"\u4fee\u6539-rbac-\u7528\u6237\u5bc6\u7801"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"h4"},"RBAC")," \u7528\u6237\u5bc6\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/change_pwd \\\n-H "Content-Type: application/json" \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i \\\n-X PUT -d \'{"oldPassword": "old password", "newPassword": "new password"}\'\n\n\nHTTP/1.1 200 OK\n{"message":"success to change password"}\n')),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389 ",(0,l.kt)("inlineCode",{parentName:"p"},"rbac-wolf")," \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728 routes \u4e2d\u7684\u63d2\u4ef6\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u63d2\u4ef6")," \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "www.baidu.com:80": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);