"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99052],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(g,p(p({ref:t},c),{},{components:n})):r.createElement(g,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},67502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),p={title:"grpc-transcode"},i=void 0,o={unversionedId:"plugins/grpc-transcode",id:"version-2.5/plugins/grpc-transcode",isDocsHomePage:!1,title:"grpc-transcode",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.5/plugins/grpc-transcode.md",sourceDirName:"plugins",slug:"/plugins/grpc-transcode",permalink:"/zh/docs/apisix/2.5/plugins/grpc-transcode",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/grpc-transcode.md",tags:[],version:"2.5",frontMatter:{title:"grpc-transcode"},sidebar:"version-2.5/docs",previous:{title:"proxy-rewrite",permalink:"/zh/docs/apisix/2.5/plugins/proxy-rewrite"},next:{title:"fault-injection",permalink:"/zh/docs/apisix/2.5/plugins/fault-injection"}},u=[{value:"Proto",id:"proto",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u6dfb\u52a0proto",id:"\u6dfb\u52a0proto",children:[]}]},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u4f7f\u7528 grpc-transcode \u63d2\u4ef6",id:"\u4f7f\u7528-grpc-transcode-\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]},{value:"\u4f7f\u7528 grpc-transcode \u63d2\u4ef6\u7684 pb_option \u9009\u9879",id:"\u4f7f\u7528-grpc-transcode-\u63d2\u4ef6\u7684-pb_option-\u9009\u9879",children:[{value:"\u9009\u9879\u6e05\u5355",id:"\u9009\u9879\u6e05\u5355",children:[]},{value:"\u6d4b\u8bd5 pb_option \u53c2\u6570",id:"\u6d4b\u8bd5-pb_option-\u53c2\u6570",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"HTTP(s) -> APISIX -> gRPC server"),(0,l.kt)("h2",{id:"proto"},"Proto"),(0,l.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"content"),": ",(0,l.kt)("inlineCode",{parentName:"li"},".proto")," \u6587\u4ef6\u7684\u5185\u5bb9")),(0,l.kt)("h3",{id:"\u6dfb\u52a0proto"},"\u6dfb\u52a0proto"),(0,l.kt)("p",null,"\u8def\u5f84\u4e2d\u6700\u540e\u7684\u6570\u5b57\uff0c\u4f1a\u88ab\u7528\u4f5c proto \u7684 id \u505a\u552f\u4e00\u6807\u8bc6\uff0c\u6bd4\u5982\u4e0b\u9762\u793a\u4f8b\u7684 proto ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/proto/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "content" : "syntax = \\"proto3\\";\n    package helloworld;\n    service Greeter {\n        rpc SayHello (HelloRequest) returns (HelloReply) {}\n    }\n    message HelloRequest {\n        string name = 1;\n    }\n    message HelloReply {\n        string message = 1;\n    }"\n}\'\n')),(0,l.kt)("h2",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proto_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string/integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".proto")," \u5185\u5bb9\u7684 id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"grpc \u670d\u52a1\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"grpc \u670d\u52a1\u4e2d\u8981\u8c03\u7528\u7684\u65b9\u6cd5\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deadline"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"grpc deadline, ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pb_option"),(0,l.kt)("td",{parentName:"tr",align:null},"array[string(",(0,l.kt)("a",{parentName:"td",href:"#%E4%BD%BF%E7%94%A8-grpc-transcode-%E6%8F%92%E4%BB%B6%E7%9A%84-pb_option-%E9%80%89%E9%A1%B9"},"pb_option_def"),")]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"proto \u7f16\u7801\u8fc7\u7a0b\u4e2d\u7684\u8f6c\u6362\u9009\u9879")))),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u4f7f\u7528-grpc-transcode-\u63d2\u4ef6"},"\u4f7f\u7528 grpc-transcode \u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728\u6307\u5b9a route \u4e2d\uff0c\u4ee3\u7406 grpc \u670d\u52a1\u63a5\u53e3:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a \u8fd9\u4e2a route \u5bf9\u5e94\u7684 upstream \u7684\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"li"},"scheme")," \u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"grpc")),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7406 grpc \u670d\u52a1\u4f8b\u5b50\u53ef\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/iresty/grpc_server_example"},"grpc_server_example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/111 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/grpctest",\n    "plugins": {\n        "grpc-transcode": {\n         "proto_id": "1",\n         "service": "helloworld.Greeter",\n         "method": "SayHello"\n        }\n    },\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u8bbf\u95ee\u4e0a\u9762\u914d\u7f6e\u7684 route\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i http://127.0.0.1:9080/grpctest?name=world\nHTTP/1.1 200 OK\nDate: Fri, 16 Aug 2019 11:55:36 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\nProxy-Connection: keep-alive\n\n{"message":"Hello world"}\n')),(0,l.kt)("p",null,"\u8fd9\u8868\u793a\u5df2\u6210\u529f\u4ee3\u7406\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528-grpc-transcode-\u63d2\u4ef6\u7684-pb_option-\u9009\u9879"},"\u4f7f\u7528 grpc-transcode \u63d2\u4ef6\u7684 pb_option \u9009\u9879"),(0,l.kt)("p",null,"\u5728\u6307\u5b9a route \u4e2d\uff0c\u4ee3\u7406 grpc \u670d\u52a1\u63a5\u53e3:"),(0,l.kt)("h3",{id:"\u9009\u9879\u6e05\u5355"},"\u9009\u9879\u6e05\u5355"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u679a\u4e3e\u7c7b\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"enum_as_name"),(0,l.kt)("li",{parentName:"ul"},"enum_as_value"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"64\u4f4d\u6574\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"int64_as_number"),(0,l.kt)("li",{parentName:"ul"},"int64_as_string"),(0,l.kt)("li",{parentName:"ul"},"int64_as_hexstring"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u9ed8\u8ba4\u503c"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"auto_default_values"),(0,l.kt)("li",{parentName:"ul"},"no_default_values"),(0,l.kt)("li",{parentName:"ul"},"use_default_values"),(0,l.kt)("li",{parentName:"ul"},"use_default_metatable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Hooks\u5f00\u5173"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"enable_hooks"),(0,l.kt)("li",{parentName:"ul"},"disable_hooks")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/23 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/zeebe/WorkflowInstanceCreate",\n    "plugins": {\n        "grpc-transcode": {\n            "proto_id": "1",\n            "service": "gateway_protocol.Gateway",\n            "method": "CreateWorkflowInstance",\n            "pb_option":["int64_as_string"]\n        }\n    },\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:26500": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h3",{id:"\u6d4b\u8bd5-pb_option-\u53c2\u6570"},"\u6d4b\u8bd5 pb_option \u53c2\u6570"),(0,l.kt)("p",null,"\u8bbf\u95ee\u4e0a\u9762\u914d\u7f6e\u7684 route\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i "http://127.0.0.1:9080/zeebe/WorkflowInstanceCreate?bpmnProcessId=order-process&version=1&variables=\\{\\"orderId\\":\\"7\\",\\"ordervalue\\":99\\}"\nHTTP/1.1 200 OK\nDate: Wed, 13 Nov 2019 03:38:27 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\nConnection: keep-alive\ngrpc-encoding: identity\ngrpc-accept-encoding: gzip\nServer: APISIX web server\nTrailer: grpc-status\nTrailer: grpc-message\n\n{"workflowKey":"#2251799813685260","workflowInstanceKey":"#2251799813688013","bpmnProcessId":"order-process","version":1}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'"workflowKey":"#2251799813685260"')," \u8868\u793a\u5df2\u6210\u529f\u3002"),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728\u63d2\u4ef6\u8bbe\u7f6e\u9875\u9762\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\u5373\u53ef\u7981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"grpc-transcode")," \u63d2\u4ef6\u3002APISIX \u7684\u63d2\u4ef6\u662f\u70ed\u52a0\u8f7d\u7684\uff0c\u56e0\u6b64\u65e0\u9700\u91cd\u542f APISIX \u670d\u52a1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/111 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/grpctest",\n    "plugins": {},\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);