"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69102],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var g=a.createContext({}),o=function(t){var e=a.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(g.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,g=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=o(n),k=r,N=m["".concat(g,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var g in e)hasOwnProperty.call(e,g)&&(p[g]=e[g]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82950:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return g},toc:function(){return o},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"error-log-logger"},p=void 0,g={unversionedId:"plugins/error-log-logger",id:"version-2.10.1/plugins/error-log-logger",isDocsHomePage:!1,title:"error-log-logger",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.10.1/plugins/error-log-logger.md",sourceDirName:"plugins",slug:"/plugins/error-log-logger",permalink:"/zh/docs/apisix/plugins/error-log-logger",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/error-log-logger.md",tags:[],version:"2.10.1",frontMatter:{title:"error-log-logger"},sidebar:"version-2.10.1/docs",previous:{title:"log-rotate",permalink:"/zh/docs/apisix/plugins/log-rotate"},next:{title:"sls-logger",permalink:"/zh/docs/apisix/plugins/sls-logger"}},o=[{value:"\u6458\u8981",id:"\u6458\u8981",children:[]},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",children:[]},{value:"\u5c5e\u6027\u5217\u8868",id:"\u5c5e\u6027\u5217\u8868",children:[]},{value:"\u5982\u4f55\u5f00\u542f\u548c\u7981\u7528",id:"\u5982\u4f55\u5f00\u542f\u548c\u7981\u7528",children:[{value:"\u5f00\u542f\u63d2\u4ef6",id:"\u5f00\u542f\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}]},{value:"\u5982\u4f55\u8bbe\u7f6e\u63a5\u6536\u65e5\u5fd7\u7684 TCP \u670d\u52a1\u5668",id:"\u5982\u4f55\u8bbe\u7f6e\u63a5\u6536\u65e5\u5fd7\u7684-tcp-\u670d\u52a1\u5668",children:[]},{value:"\u5982\u4f55\u8bbe\u7f6e\u63a5\u6536\u65e5\u5fd7\u7684 SkyWalking OAP \u670d\u52a1\u5668",id:"\u5982\u4f55\u8bbe\u7f6e\u63a5\u6536\u65e5\u5fd7\u7684-skywalking-oap-\u670d\u52a1\u5668",children:[]}],u={toc:o};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6458\u8981"},"\u6458\u8981"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%AE%9A%E4%B9%89"},(0,l.kt)("strong",{parentName:"a"},"\u5b9a\u4e49"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8"},(0,l.kt)("strong",{parentName:"a"},"\u5c5e\u6027\u5217\u8868"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%BC%80%E5%90%AF%E5%92%8C%E7%A6%81%E7%94%A8"},(0,l.kt)("strong",{parentName:"a"},"\u5982\u4f55\u5f00\u542f\u548c\u7981\u7528"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E6%9B%B4%E6%96%B0"},(0,l.kt)("strong",{parentName:"a"},"\u5982\u4f55\u66f4\u65b0")))),(0,l.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"error-log-logger")," \u662f\u7528\u4e8e\u6309\u7528\u6237\u8bbe\u5b9a\u7684 log \u7ea7\u522b\u5bf9 APISIX \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"error.log")," \u8fdb\u884c\u7b5b\u9009\uff0c\u7ee7\u800c\u5c06\u7b5b\u9009\u7684\u6570\u636e\u53d1\u9001\u5230 TCP \u670d\u52a1\u6216\u8005 ",(0,l.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/"},"Apache SkyWalking")," \u7684\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u4ee5\u5b9e\u73b0\u5c06 error.log \u4e2d\u7684\u6570\u636e\u8fdb\u884c\u7b5b\u9009\u5e76\u53d1\u9001\u5230\u76d1\u63a7\u5de5\u5177\u6216\u5176\u5b83 TCP \u670d\u52a1\uff0c\u548c\u901a\u8fc7 HTTP \u53d1\u9001\u5230 SkyWalking \u7684\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u63d0\u4f9b\u4e86\u5c06\u65e5\u5fd7\u6570\u636e\u4f5c\u4e3a\u6279\u5904\u7406\u63a8\u9001\u5230\u5916\u90e8 TCP \u670d\u52a1\u5668\u7684\u529f\u80fd\u3002\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u65e5\u5fd7\u6570\u636e\uff0c\u8bf7\u653e\u5fc3\u4e00\u4e9b\u65f6\u95f4\uff0c\u5b83\u4f1a\u5728\u6211\u4eec\u7684\u6279\u5904\u7406\u5904\u7406\u5668\u4e2d\u7684\u8ba1\u65f6\u5668\u529f\u80fd\u5230\u671f\u540e\u81ea\u52a8\u53d1\u9001\u65e5\u5fd7\u3002"),(0,l.kt)("p",null,"\u6709\u5173 Apache APISIX \u4e2d Batch-Processor \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\u3002\n",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/batch-processor"},"Batch-Processor")),(0,l.kt)("h2",{id:"\u5c5e\u6027\u5217\u8868"},"\u5c5e\u6027\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcp.host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"TCP \u670d\u52a1\u7684IP\u5730\u5740\u6216\u4e3b\u673a\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcp.port"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcp.tls"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u63a7\u5236\u662f\u5426\u6267\u884cSSL\u9a8c\u8bc1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcp.tls_server_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"TLS \u670d\u52a1\u540d\u79f0\u6807\u8bb0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skywalking.endpoint_addr"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:12900/v3/logs"},"http://127.0.0.1:12900/v3/logs")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Skywalking \u7684 HTTP endpoint \u5730\u5740\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:12800"},"http://127.0.0.1:12800"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skywalking.service_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"APISIX"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"skywalking \u4e0a\u62a5\u7684 service \u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skywalking.service_instance_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"APISIX Instance Name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"skywalking \u4e0a\u62a5\u7684 service \u5b9e\u4f8b\u540d, \u5982\u679c\u671f\u671b\u76f4\u63a5\u83b7\u53d6\u672c\u673a\u4e3b\u673a\u540d\u5219\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"$hostname"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("inlineCode",{parentName:"td"},"\u5f03\u7528"),"\uff0c\u66ff\u6362\u6210",(0,l.kt)("inlineCode",{parentName:"td"},"tcp.host"),") TCP \u670d\u52a1\u7684IP\u5730\u5740\u6216\u4e3b\u673a\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("inlineCode",{parentName:"td"},"\u5f03\u7528"),"\uff0c\u66ff\u6362\u6210",(0,l.kt)("inlineCode",{parentName:"td"},"tcp.port"),") \u76ee\u6807\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("inlineCode",{parentName:"td"},"\u5f03\u7528"),"\uff0c\u66ff\u6362\u6210",(0,l.kt)("inlineCode",{parentName:"td"},"tcp.tls"),") \u7528\u4e8e\u63a7\u5236\u662f\u5426\u6267\u884cSSL\u9a8c\u8bc1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_server_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("inlineCode",{parentName:"td"},"\u5f03\u7528"),"\uff0c\u66ff\u6362\u6210",(0,l.kt)("inlineCode",{parentName:"td"},"tcp.tls_server_name"),") TLS \u670d\u52a1\u540d\u79f0\u6807\u8bb0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u548c\u53d1\u9001\u6570\u636e\u8d85\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u590d\u7528\u8fde\u63a5\u65f6\uff0c\u8fde\u63a5\u4fdd\u6301\u7684\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"level"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"WARN"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fdb\u884c\u9519\u8bef\u65e5\u5fd7\u7b5b\u9009\u7684\u7ea7\u522b\uff0c\u7f3a\u7701WARN\uff0c\u53d6\u503c",'["STDERR", "EMERG", "ALERT", "CRIT", "ERR", "ERROR", "WARN", "NOTICE", "INFO", "DEBUG"]',"\uff0c\u5176\u4e2d ERR \u4e0e ERROR \u7ea7\u522b\u4e00\u81f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inactive_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5237\u65b0\u7f13\u51b2\u533a\u7684\u6700\u5927\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_max_size"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u6279\u7684\u6700\u5927\u5927\u5c0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buffer_duration"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u5148\u5904\u7406\u6279\u6b21\u4e2d\u6700\u65e7\u6761\u76ee\u7684\u6700\u957f\u671f\u9650\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u5904\u7406\u7ba1\u9053\u4e2d\u79fb\u9664\u4e4b\u524d\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry_delay"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u5219\u5e94\u5ef6\u8fdf\u6267\u884c\u6d41\u7a0b\u7684\u79d2\u6570")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u5f00\u542f\u548c\u7981\u7528"},"\u5982\u4f55\u5f00\u542f\u548c\u7981\u7528"),(0,l.kt)("p",null,"\u672c\u63d2\u4ef6\u5c5e\u4e8e APISIX \u5168\u5c40\u6027\u63d2\u4ef6\u3002"),(0,l.kt)("h3",{id:"\u5f00\u542f\u63d2\u4ef6"},"\u5f00\u542f\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u542f\u7528\u63d2\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"error-log-logger")," \u5373\u53ef\uff0c\u4e0d\u9700\u8981\u5728\u4efb\u4f55 route \u6216 service \u4e2d\u7ed1\u5b9a\u3002\n\u4e0b\u9762\u662f\u4e00\u4e2a\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\u4fe1\u606f\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:                          # plugin list\n  ... ...\n  - request-id\n  - hmac-auth\n  - api-breaker\n  - error-log-logger              # enable plugin `error-log-logger\n")),(0,l.kt)("h3",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u5220\u9664\u6216\u6ce8\u91ca\u6389\u63d2\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"error-log-logger"),"\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:                          # plugin list\n  ... ...\n  - request-id\n  - hmac-auth\n  - api-breaker\n  #- error-log-logger              # enable plugin `error-log-logger\n")),(0,l.kt)("h2",{id:"\u5982\u4f55\u8bbe\u7f6e\u63a5\u6536\u65e5\u5fd7\u7684-tcp-\u670d\u52a1\u5668"},"\u5982\u4f55\u8bbe\u7f6e\u63a5\u6536\u65e5\u5fd7\u7684 TCP \u670d\u52a1\u5668"),(0,l.kt)("p",null,"\u6b65\u9aa4\uff1a\u66f4\u65b0\u63d2\u4ef6\u5c5e\u6027"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/error-log-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "tcp": {\n    "host": "127.0.0.1",\n    "port": 1999\n  },\n  "inactive_timeout": 1\n}\'\n')),(0,l.kt)("h2",{id:"\u5982\u4f55\u8bbe\u7f6e\u63a5\u6536\u65e5\u5fd7\u7684-skywalking-oap-\u670d\u52a1\u5668"},"\u5982\u4f55\u8bbe\u7f6e\u63a5\u6536\u65e5\u5fd7\u7684 SkyWalking OAP \u670d\u52a1\u5668"),(0,l.kt)("p",null,"\u6b65\u9aa4\uff1a\u66f4\u65b0\u63d2\u4ef6\u5c5e\u6027"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/error-log-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "skywalking": {\n    "endpoint_addr": "http://127.0.0.1:12800/v3/logs"\n  },\n  "inactive_timeout": 1\n}\'\n')))}d.isMDXComponent=!0}}]);