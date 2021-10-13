"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6835],{3905:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return g}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=a.createContext({}),o=function(t){var n=a.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=o(t.components);return a.createElement(u.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=o(e),g=r,s=m["".concat(u,".").concat(g)]||m[g]||c[g]||l;return e?a.createElement(s,i(i({ref:n},d),{},{components:e})):a.createElement(s,i({ref:n},d))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=e[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},9594:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return o},default:function(){return c}});var a=e(87462),r=e(63366),l=(e(67294),e(3905)),i={title:"openid-connect"},p=void 0,u={unversionedId:"plugins/openid-connect",id:"version-2.4/plugins/openid-connect",isDocsHomePage:!1,title:"openid-connect",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.4/plugins/openid-connect.md",sourceDirName:"plugins",slug:"/plugins/openid-connect",permalink:"/zh/docs/apisix/2.4/plugins/openid-connect",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/openid-connect.md",tags:[],version:"2.4",frontMatter:{title:"openid-connect"},sidebar:"version-2.4/docs",previous:{title:"wolf-rbac",permalink:"/zh/docs/apisix/2.4/plugins/wolf-rbac"},next:{title:"cors",permalink:"/zh/docs/apisix/2.4/plugins/cors"}},o=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",children:[]},{value:"\u5c5e\u6027\u5217\u8868",id:"\u5c5e\u6027\u5217\u8868",children:[{value:"\u4ee4\u724c\u81ea\u7701",id:"\u4ee4\u724c\u81ea\u7701",children:[]}]},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",children:[]}],d={toc:o};function c(t){var n=t.components,e=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%AE%9A%E4%B9%89"},(0,l.kt)("strong",{parentName:"a"},"\u5b9a\u4e49"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8"},(0,l.kt)("strong",{parentName:"a"},"\u5c5e\u6027\u5217\u8868"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BB%A4%E7%89%8C%E8%87%AA%E7%9C%81"},(0,l.kt)("strong",{parentName:"a"},"\u4ee4\u724c\u81ea\u7701")))),(0,l.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"OAuth 2 / Open ID Connect\uff08OIDC\uff09\u63d2\u4ef6\u4e3a APISIX \u63d0\u4f9b\u8eab\u4efd\u9a8c\u8bc1\u548c\u81ea\u7701\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027\u5217\u8868"},"\u5c5e\u6027\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"OAuth \u5ba2\u6237\u7aef ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_secret"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"OAuth \u5ba2\u6237\u7aef secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"discovery"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u670d\u52a1\u5668\u7684\u53d1\u73b0\u7aef\u70b9\u7684 URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"openid"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8ba4\u8bc1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"realm"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"apisix"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8ba4\u8bc1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bearer_only"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\u5c06\u68c0\u67e5\u8bf7\u6c42\u4e2d\u5e26\u6709\u627f\u8f7d\u4ee4\u724c\u7684\u6388\u6743\u6807\u5934")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logout_path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"/logout"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"ngx.var.request_uri"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"introspection_endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u670d\u52a1\u5668\u7684\u4ee4\u724c\u9a8c\u8bc1\u7aef\u70b9\u7684 URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"introspection_endpoint_auth_method"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"client_secret_basic"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee4\u724c\u81ea\u7701\u7684\u8ba4\u8bc1\u65b9\u6cd5\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"public_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u4ee4\u724c\u7684\u516c\u94a5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token_signing_alg_values_expected"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5bf9\u4ee4\u724c\u8fdb\u884c\u7b7e\u540d\u7684\u7b97\u6cd5")))),(0,l.kt)("h3",{id:"\u4ee4\u724c\u81ea\u7701"},"\u4ee4\u724c\u81ea\u7701"),(0,l.kt)("p",null,"\u4ee4\u724c\u81ea\u7701\u901a\u8fc7\u9488\u5bf9 Oauth 2 \u6388\u6743\u670d\u52a1\u5668\u9a8c\u8bc1\u4ee4\u724c\u6765\u5e2e\u52a9\u9a8c\u8bc1\u8bf7\u6c42\u3002\n\u524d\u63d0\u6761\u4ef6\u662f\uff0c\u60a8\u5e94\u8be5\u5728\u8eab\u4efd\u670d\u52a1\u5668\u4e2d\u521b\u5efa\u53d7\u4fe1\u4efb\u7684\u5ba2\u6237\u7aef\uff0c\u5e76\u751f\u6210\u7528\u4e8e\u81ea\u7701\u7684\u6709\u6548\u4ee4\u724c\uff08JWT\uff09\u3002\n\u4e0b\u56fe\u663e\u793a\u4e86\u901a\u8fc7\u7f51\u5173\u8fdb\u884c\u4ee4\u724c\u81ea\u7701\u7684\u793a\u4f8b\uff08\u6210\u529f\uff09\u6d41\u7a0b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/oauth-1.png",alt:"token introspection"})),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f curl \u547d\u4ee4\uff0c\u7528\u4e8e\u5c06\u63d2\u4ef6\u542f\u7528\u5230\u5916\u90e8\u670d\u52a1\u3002\n\u901a\u8fc7\u81ea\u7701\u8bf7\u6c42\u6807\u5934\u4e2d\u63d0\u4f9b\u7684\u4ee4\u724c\uff0c\u6b64\u8def\u7531\u5c06\u4fdd\u62a4 ",(0,l.kt)("a",{parentName:"p",href:"https://httpbin.org/get%EF%BC%88echo"},"https://httpbin.org/get\uff08echo")," \u670d\u52a1\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/get",\n    "plugins":{\n        "proxy-rewrite":{\n            "scheme":"https"\n        },\n        "openid-connect":{\n            "client_id":"api_six_client_id",\n            "client_secret":"client_secret_code",\n            "discovery":"full_URL_of_the_discovery_endpoint",\n            "introspection_endpoint":"full_URL_of_introspection_endpoint",\n            "bearer_only":true,\n            "realm":"master",\n            "introspection_endpoint_auth_method":"client_secret_basic"\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "httpbin.org:443":1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u4ee5\u4e0b\u547d\u4ee4\u53ef\u7528\u4e8e\u8bbf\u95ee\u65b0\u8def\u7531\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET http://127.0.0.1:9080/get -H "Host: httpbin.org" -H "Authorization: Bearer {replace_jwt_token}"\n')),(0,l.kt)("h4",{id:"\u516c\u94a5\u81ea\u7701"},"\u516c\u94a5\u81ea\u7701"),(0,l.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u63d0\u4f9b JWT \u4ee4\u724c\u7684\u516c\u94a5\u6765\u9a8c\u8bc1\u4ee4\u724c\u3002 \u5982\u679c\u60a8\u63d0\u4f9b\u4e86\u516c\u5171\u5bc6\u94a5\u548c\u4ee4\u724c\u81ea\u7701\u7aef\u70b9\uff0c\u5219\u5c06\u6267\u884c\u516c\u5171\u5bc6\u94a5\u5de5\u4f5c\u6d41\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u8eab\u4efd\u670d\u52a1\u5668\u8fdb\u884c\u9a8c\u8bc1\u3002\u5982\u679c\u8981\u51cf\u5c11\u989d\u5916\u7684\u7f51\u7edc\u547c\u53eb\u5e76\u52a0\u5feb\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u4f7f\u7528\u6b64\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u663e\u793a\u4e86\u5982\u4f55\u5411\u8def\u7531\u6dfb\u52a0\u516c\u94a5\u81ea\u7701\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/get",\n    "plugins":{\n        "proxy-rewrite":{\n            "scheme":"https"\n        },\n        "openid-connect":{\n            "client_id":"api_six_client_id",\n            "client_secret":"client_secret_code",\n            "discovery":"full_URL_of_the_discovery_endpoint",\n            "bearer_only":true,\n            "realm":"master",\n            "token_signing_alg_values_expected":"RS256",\n            "public_key":"-----BEGIN CERTIFICATE-----\n            {public_key}\n            -----END CERTIFICATE-----"\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "httpbin.org:443":1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,l.kt)("p",null,"\u5982\u679c APISIX \u65e0\u6cd5\u89e3\u6790/\u8fde\u63a5\u5230\u8eab\u4efd\u63d0\u4f9b\u8005\uff0c\u8bf7\u68c0\u67e5/\u4fee\u6539DNS\u8bbe\u7f6e\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"conf / config.yaml"),"\uff09\u3002"))}c.isMDXComponent=!0}}]);