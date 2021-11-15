"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17608],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68468:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i={title:"TCP/UDP \u52a8\u6001\u4ee3\u7406"},p=void 0,l={unversionedId:"stream-proxy",id:"version-2.6/stream-proxy",isDocsHomePage:!1,title:"TCP/UDP \u52a8\u6001\u4ee3\u7406",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.6/stream-proxy.md",sourceDirName:".",slug:"/stream-proxy",permalink:"/zh/docs/apisix/2.6/stream-proxy",editUrl:"https://github.com/apache/apisix/edit/release/2.6/docs/zh/latest/stream-proxy.md",tags:[],version:"2.6",frontMatter:{title:"TCP/UDP \u52a8\u6001\u4ee3\u7406"},sidebar:"version-2.6/docs",previous:{title:"Stand-alone mode",permalink:"/zh/docs/apisix/2.6/stand-alone"},next:{title:"gRPC \u4ee3\u7406",permalink:"/zh/docs/apisix/2.6/grpc-proxy"}},c=[{value:"\u5982\u4f55\u5f00\u542f Stream \u4ee3\u7406?",id:"\u5982\u4f55\u5f00\u542f-stream-\u4ee3\u7406",children:[]},{value:"\u5982\u4f55\u8bbe\u7f6e route ?",id:"\u5982\u4f55\u8bbe\u7f6e-route-",children:[]},{value:"\u66f4\u591a\u9650\u5236\u9009\u9879",id:"\u66f4\u591a\u9650\u5236\u9009\u9879",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f17\u591a\u7684\u95fb\u540d\u7684\u5e94\u7528\u548c\u670d\u52a1\uff0c\u50cf LDAP\u3001 MYSQL \u548c RTMP \uff0c\u9009\u62e9 TCP \u4f5c\u4e3a\u901a\u4fe1\u534f\u8bae\u3002 \u4f46\u662f\u50cf DNS\u3001 syslog \u548c RADIUS \u8fd9\u7c7b\u975e\u4e8b\u52a1\u6027\u7684\u5e94\u7528\uff0c\u4ed6\u4eec\u9009\u62e9\u4e86 UDP \u534f\u8bae\u3002"),(0,o.kt)("p",null,"APISIX \u53ef\u4ee5\u5bf9 TCP/UDP \u534f\u8bae\u8fdb\u884c\u4ee3\u7406\u5e76\u5b9e\u73b0\u52a8\u6001\u8d1f\u8f7d\u5747\u8861\u3002 \u5728 nginx \u4e16\u754c\uff0c\u79f0 TCP/UDP \u4ee3\u7406\u4e3a stream \u4ee3\u7406\uff0c\u5728 APISIX \u8fd9\u91cc\u6211\u4eec\u4e5f\u9075\u5faa\u4e86\u8fd9\u4e2a\u58f0\u660e."),(0,o.kt)("h2",{id:"\u5982\u4f55\u5f00\u542f-stream-\u4ee3\u7406"},"\u5982\u4f55\u5f00\u542f Stream \u4ee3\u7406?"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_proxy")," \u9009\u9879\uff0c \u6307\u5b9a\u4e00\u7ec4\u9700\u8981\u8fdb\u884c\u52a8\u6001\u4ee3\u7406\u7684 IP \u5730\u5740\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0d\u5f00\u542f stream \u4ee3\u7406\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  stream_proxy: # TCP/UDP proxy\n    tcp: # TCP proxy address list\n      - 9100\n      - "127.0.0.1:9101"\n    udp: # UDP proxy address list\n      - 9200\n      - "127.0.0.1:9211"\n')),(0,o.kt)("h2",{id:"\u5982\u4f55\u8bbe\u7f6e-route-"},"\u5982\u4f55\u8bbe\u7f6e route ?"),(0,o.kt)("p",null,"\u7b80\u4f8b\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,o.kt)("p",null,"\u4f8b\u5b50\u4e2d APISIX \u5bf9\u5ba2\u6237\u7aef IP \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," \u7684\u8bf7\u6c42\u4ee3\u7406\u8f6c\u53d1\u5230\u4e0a\u6e38\u4e3b\u673a ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1995"),"\u3002\n\u66f4\u591a\u7528\u4f8b\uff0c\u8bf7\u53c2\u7167 ",(0,o.kt)("a",{parentName:"p",href:"../../../t/stream-node/sanity.t"},"test case"),"."),(0,o.kt)("h2",{id:"\u66f4\u591a\u9650\u5236\u9009\u9879"},"\u66f4\u591a\u9650\u5236\u9009\u9879"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u7684\u9009\u9879\u6765\u5339\u914d route \uff0c\u4f8b\u5982"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "server_addr": "127.0.0.1",\n    "server_port": 2000,\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,o.kt)("p",null,"\u4f8b\u5b50\u4e2d APISIX \u628a\u4e0a\u6e38\u5730\u5740 ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1995")," \u4ee3\u7406\u6210\u5730\u5740\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),", \u7aef\u53e3\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"2000")))}u.isMDXComponent=!0}}]);