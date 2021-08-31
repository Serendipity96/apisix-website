(self.webpackChunk=self.webpackChunk||[]).push([[78487],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16850:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var r=n(22122),l=n(19756),a=(n(67294),n(3905)),o={title:"gRPC \u4ee3\u7406"},i={unversionedId:"grpc-proxy",id:"version-2.8/grpc-proxy",isDocsHomePage:!1,title:"gRPC \u4ee3\u7406",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.8/grpc-proxy.md",sourceDirName:".",slug:"/grpc-proxy",permalink:"/zh/docs/apisix/2.8/grpc-proxy",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/grpc-proxy.md",version:"2.8",frontMatter:{title:"gRPC \u4ee3\u7406"},sidebar:"version-2.8/docs",previous:{title:"TCP/UDP \u52a8\u6001\u4ee3\u7406",permalink:"/zh/docs/apisix/2.8/stream-proxy"},next:{title:"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e",permalink:"/zh/docs/apisix/2.8/customize-nginx-configuration"}},p=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u521b\u5efa\u4ee3\u7406 gRPC \u7684 Route",id:"\u521b\u5efa\u4ee3\u7406-grpc-\u7684-route",children:[]},{value:"\u6d4b\u8bd5 TLS \u52a0\u5bc6\u7684 HTTP/2",id:"\u6d4b\u8bd5-tls-\u52a0\u5bc6\u7684-http2",children:[]},{value:"\u6d4b\u8bd5\u7eaf\u6587\u672c\u7684 HTTP/2",id:"\u6d4b\u8bd5\u7eaf\u6587\u672c\u7684-http2",children:[]},{value:"gRPCS",id:"grpcs",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u901a\u8fc7 APISIX \u4ee3\u7406 gRPC \u8fde\u63a5\uff0c\u5e76\u4f7f\u7528 APISIX \u7684\u5927\u90e8\u5206\u7279\u6027\u7ba1\u7406\u4f60\u7684 gRPC \u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scheme"),": Route \u5bf9\u5e94\u7684 Upstream \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"scheme")," \u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"grpc")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"grpcs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uri"),": \u683c\u5f0f\u4e3a /service/method \u5982\uff1a/helloworld.Greeter/SayHello")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u521b\u5efa\u4ee3\u7406-grpc-\u7684-route"},"\u521b\u5efa\u4ee3\u7406 gRPC \u7684 Route"),(0,a.kt)("p",null,"\u5728\u6307\u5b9a Route \u4e2d\uff0c\u4ee3\u7406 gRPC \u670d\u52a1\u63a5\u53e3:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u8fd9\u4e2a Route \u5bf9\u5e94\u7684 Upstream \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"scheme")," \u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"grpc")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"grpcs"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a APISIX \u4f7f\u7528 TLS \u52a0\u5bc6\u7684 HTTP/2 \u66b4\u9732 gRPC \u670d\u52a1, \u6240\u4ee5\u9700\u8981\u5148 ",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/2.8/certificate"},"\u914d\u7f6e SSL \u8bc1\u4e66"),"\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a APISIX \u4e5f\u652f\u6301\u901a\u8fc7\u7eaf\u6587\u672c\u7684 HTTP/2 \u66b4\u9732 gRPC \u670d\u52a1\uff0c\u8fd9\u4e0d\u9700\u8981\u4f9d\u8d56 SSL\uff0c\u901a\u5e38\u7528\u4e8e\u5185\u7f51\u73af\u5883\u4ee3\u7406gRPC\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u9762\u4f8b\u5b50\u6240\u4ee3\u7406\u7684 gRPC \u670d\u52a1\u53ef\u4f9b\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/api7/grpc_server_example"},"grpc_server_example"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/helloworld.Greeter/SayHello",\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h3",{id:"\u6d4b\u8bd5-tls-\u52a0\u5bc6\u7684-http2"},"\u6d4b\u8bd5 TLS \u52a0\u5bc6\u7684 HTTP/2"),(0,a.kt)("p",null,"\u8bbf\u95ee\u4e0a\u9762\u914d\u7f6e\u7684 Route\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'grpcurl -insecure -import-path /pathtoprotos  -proto helloworld.proto  \\\n    -d \'{"name":"apisix"}\' 127.0.0.1:9443 helloworld.Greeter.SayHello\n{\n  "message": "Hello apisix"\n}\n')),(0,a.kt)("p",null,"\u8fd9\u8868\u793a\u5df2\u6210\u529f\u4ee3\u7406\u3002"),(0,a.kt)("h3",{id:"\u6d4b\u8bd5\u7eaf\u6587\u672c\u7684-http2"},"\u6d4b\u8bd5\u7eaf\u6587\u672c\u7684 HTTP/2"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cAPISIX\u53ea\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"9443")," \u7aef\u53e3\u652f\u6301 TLS \u52a0\u5bc6\u7684 HTTP/2\u3002\u4f60\u4e5f\u53ef\u4ee5\u652f\u6301\u7eaf\u672c\u6587\u7684 HTTP/2\uff0c\u53ea\u9700\u8981\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u6587\u4ef6\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_listen")," \u914d\u7f6e\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    node_listen:\n        - port: 9080\n          enable_http2: false\n        - port: 9081\n          enable_http2: true\n")),(0,a.kt)("p",null,"\u8bbf\u95ee\u4e0a\u9762\u914d\u7f6e\u7684 Route\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext -import-path /pathtoprotos  -proto helloworld.proto  \\\n    -d \'{"name":"apisix"}\' 127.0.0.1:9081 helloworld.Greeter.SayHello\n{\n  "message": "Hello apisix"\n}\n')),(0,a.kt)("p",null,"\u8fd9\u8868\u793a\u5df2\u6210\u529f\u4ee3\u7406\u3002"),(0,a.kt)("h3",{id:"grpcs"},"gRPCS"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684 gRPC \u670d\u52a1\u4f7f\u7528\u4e86\u81ea\u5df1\u7684 TLS \u52a0\u5bc6\uff0c\u5373\u6240\u8c13\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"gPRCS")," (gRPC + TLS)\uff0c\u90a3\u4e48\u9700\u8981\u4fee\u6539 scheme \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"grpcs"),"\u3002\u7ee7\u7eed\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c50052 \u7aef\u53e3\u4e0a\u8dd1\u7684\u662f gPRCS \u7684\u670d\u52a1\uff0c\u8fd9\u65f6\u5019\u5e94\u8be5\u8fd9\u4e48\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/helloworld.Greeter/SayHello",\n    "upstream": {\n        "scheme": "grpcs",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50052": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);