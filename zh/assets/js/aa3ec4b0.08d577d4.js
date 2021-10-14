"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1786],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return s}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),d=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=d(n),s=l,c=k["".concat(u,".").concat(s)]||k[s]||m[s]||r;return n?a.createElement(c,i(i({ref:e},o),{},{components:n})):a.createElement(c,i({ref:e},o))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},80032:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i={title:"request-id"},p=void 0,u={unversionedId:"plugins/request-id",id:"version-2.9/plugins/request-id",isDocsHomePage:!1,title:"request-id",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.9/plugins/request-id.md",sourceDirName:"plugins",slug:"/plugins/request-id",permalink:"/zh/docs/apisix/2.9/plugins/request-id",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/request-id.md",tags:[],version:"2.9",frontMatter:{title:"request-id"},sidebar:"version-2.9/docs",previous:{title:"traffic-split",permalink:"/zh/docs/apisix/2.9/plugins/traffic-split"},next:{title:"client-control",permalink:"/zh/docs/apisix/2.9/plugins/client-control"}},d=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u540d\u79f0",id:"\u540d\u79f0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[{value:"\u4f7f\u7528 snowflake \u7b97\u6cd5\u751f\u6210ID",id:"\u4f7f\u7528-snowflake-\u7b97\u6cd5\u751f\u6210id",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],o={toc:d};function m(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%90%8D%E7%A7%B0"},(0,r.kt)("strong",{parentName:"a"},"\u540d\u79f0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},(0,r.kt)("strong",{parentName:"a"},"\u5c5e\u6027"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},(0,r.kt)("strong",{parentName:"a"},"\u5982\u4f55\u542f\u7528"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},(0,r.kt)("strong",{parentName:"a"},"\u6d4b\u8bd5\u63d2\u4ef6"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},(0,r.kt)("strong",{parentName:"a"},"\u7981\u7528\u63d2\u4ef6")))),(0,r.kt)("h2",{id:"\u540d\u79f0"},"\u540d\u79f0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"request-id")," \u63d2\u4ef6\u901a\u8fc7 APISIX \u4e3a\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u4ee3\u7406\u6dfb\u52a0\u552f\u4e00 ID\uff08UUID\uff09\uff0c\u4ee5\u7528\u4e8e\u8ffd\u8e2a API \u8bf7\u6c42\u3002\u8be5\u63d2\u4ef6\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"header_name")," \u5df2\u7ecf\u5728\u8bf7\u6c42\u4e2d\u5b58\u5728\u65f6\u4e0d\u4f1a\u4e3a\u8bf7\u6c42\u6dfb\u52a0\u65b0\u7684 ID\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},'"X-Request-Id"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Request ID header name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_in_response"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u5728\u8fd4\u56de\u5934\u4e2d\u5305\u542b\u8be5\u552f\u4e00ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},'"uuid"'),(0,r.kt)("td",{parentName:"tr",align:null},'["uuid", "snowflake"]'),(0,r.kt)("td",{parentName:"tr",align:null},"ID \u751f\u6210\u7b97\u6cd5")))),(0,r.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u6761\u8def\u7531\u5e76\u5728\u8be5\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"request-id")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "request-id": {\n            "include_in_response": true\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\nX-Request-Id: fe32076a-d0a5-49a6-a361-6c244c1df956\n......\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528-snowflake-\u7b97\u6cd5\u751f\u6210id"},"\u4f7f\u7528 snowflake \u7b97\u6cd5\u751f\u6210ID"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u652f\u6301\u4f7f\u7528 snowflake \u7b97\u6cd5\u6765\u751f\u6210ID\u3002\n\u5728\u51b3\u5b9a\u4f7f\u7528snowflake\u65f6\uff0c\u8bf7\u4f18\u5148\u9605\u8bfb\u4e00\u4e0b\u6587\u6863\u3002\u56e0\u4e3a\u4e00\u65e6\u542f\u7528\u914d\u7f6e\u4fe1\u606f\u5219\u4e0d\u53ef\u968f\u610f\u8c03\u6574\u914d\u7f6e\u4fe1\u606f\u3002\u5426\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4\u751f\u6210\u91cd\u590dID\u3002")),(0,r.kt)("p",null,"snowflake \u7b97\u6cd5\u9ed8\u8ba4\u662f\u4e0d\u542f\u7528\u7684\uff0c\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u5f00\u542f\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  request-id:\n    snowflake:\n      enable: true\n      snowflake_epoc: 1609459200000\n      data_machine_bits: 12\n      sequence_bits: 10\n      data_machine_ttl: 30\n      data_machine_interval: 10\n")),(0,r.kt)("h4",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3atrue\u65f6\uff0c \u542f\u7528snowflake\u7b97\u6cd5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"snowflake_epoc"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"1609459200000"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d77\u59cb\u65f6\u95f4\u6233\uff08\u5355\u4f4d\uff1a \u6beb\u79d2\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data_machine_bits"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u591a\u652f\u6301\u673a\u5668\uff08\u8fdb\u7a0b\uff09\u6570\u91cf ",(0,r.kt)("inlineCode",{parentName:"td"},"1 << data_machine_bits"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sequence_bits"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u8282\u70b9\u6bcf\u6beb\u79d2\u5185\u6700\u591a\u4ea7\u751fID\u6570\u91cf ",(0,r.kt)("inlineCode",{parentName:"td"},"1 << sequence_bits"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data_machine_ttl"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"etcd")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"td"},"data_machine")," \u6ce8\u518c\u6709\u6548\u65f6\u95f4\uff08\u5355\u4f4d\uff1a \u79d2\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data_machine_interval"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"etcd")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"td"},"data_machine")," \u7eed\u7ea6\u95f4\u9694\u65f6\u95f4\uff08\u5355\u4f4d\uff1a \u79d2\uff09")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"snowflake_epoc \u9ed8\u8ba4\u8d77\u59cb\u65f6\u95f4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"2021-01-01T00:00:00Z"),", \u6309\u9ed8\u8ba4\u914d\u7f6e\u53ef\u4ee5\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"69\u5e74")," \u5927\u7ea6\u53ef\u4ee5\u4f7f\u7528\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"2090-09-07 15:47:35Z")),(0,r.kt)("li",{parentName:"ul"},"data_machine_bits \u5bf9\u5e94\u7684\u662f snowflake \u5b9a\u4e49\u4e2d\u7684 WorkerID \u548c DatacenterID \u7684\u96c6\u5408\uff0c\u63d2\u4ef6\u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u8fdb\u7a0b\u5206\u914d\u4e00\u4e2a\u552f\u4e00ID\uff0c\u6700\u5927\u652f\u6301\u8fdb\u7a0b\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"pow(2, data_machine_bits)"),"\u3002\u9ed8\u8ba4\u5360 ",(0,r.kt)("inlineCode",{parentName:"li"},"12 bits")," \u6700\u591a\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"4096")," \u4e2a\u8fdb\u7a0b\u3002"),(0,r.kt)("li",{parentName:"ul"},"sequence_bits \u9ed8\u8ba4\u5360 ",(0,r.kt)("inlineCode",{parentName:"li"},"10 bits"),", \u6bcf\u4e2a\u8fdb\u7a0b\u6bcf\u79d2\u6700\u591a\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},"1024")," \u4e2aID")),(0,r.kt)("h4",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"snowflake \u652f\u6301\u7075\u6d3b\u914d\u7f6e\u6765\u6ee1\u8db3\u5404\u5f0f\u5404\u6837\u7684\u9700\u6c42")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"snowflake \u539f\u7248\u914d\u7f6e")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u8d77\u59cb\u65f6\u95f4 2014-10-20T15:00:00.000Z\uff0c \u7cbe\u786e\u5230\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002\u5927\u7ea6\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"69\u5e74")),(0,r.kt)("li",{parentName:"ul"},"\u6700\u591a\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"1024")," \u4e2a\u8fdb\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8fdb\u7a0b\u6bcf\u79d2\u6700\u591a\u4ea7\u751f ",(0,r.kt)("inlineCode",{parentName:"li"},"4096")," \u4e2aID"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  request-id:\n    snowflake:\n      enable: true\n      snowflake_epoc: 1413817200000\n      data_machine_bits: 10\n      sequence_bits: 12\n")),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5728\u8def\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," \u914d\u7f6e\u5757\u4e2d\u5220\u9664 `request-id \u914d\u7f6e\uff0creload \u5373\u53ef\u7981\u7528\u8be5\u63d2\u4ef6\uff0c\u65e0\u9700\u91cd\u542f APISIX\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);