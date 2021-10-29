"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49907],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=u(n),c=a,k=s["".concat(o,".").concat(c)]||s[c]||d[c]||l;return n?r.createElement(k,p(p({ref:e},m),{},{components:n})):r.createElement(k,p({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},84126:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),p={title:"mqtt-proxy"},i=void 0,o={unversionedId:"plugins/mqtt-proxy",id:"version-2.10/plugins/mqtt-proxy",isDocsHomePage:!1,title:"mqtt-proxy",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.10/plugins/mqtt-proxy.md",sourceDirName:"plugins",slug:"/plugins/mqtt-proxy",permalink:"/zh/docs/apisix/plugins/mqtt-proxy",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/mqtt-proxy.md",tags:[],version:"2.10",frontMatter:{title:"mqtt-proxy"},sidebar:"version-2.10/docs",previous:{title:"dubbo-proxy",permalink:"/zh/docs/apisix/plugins/dubbo-proxy"},next:{title:"Admin API",permalink:"/zh/docs/apisix/admin-api"}},u=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u540d\u5b57",id:"\u540d\u5b57",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]}],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%90%8D%E5%AD%97"},(0,l.kt)("strong",{parentName:"a"},"\u540d\u5b57"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},(0,l.kt)("strong",{parentName:"a"},"\u5c5e\u6027"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},(0,l.kt)("strong",{parentName:"a"},"\u5982\u4f55\u542f\u7528"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},(0,l.kt)("strong",{parentName:"a"},"\u7981\u7528\u63d2\u4ef6")))),(0,l.kt)("h2",{id:"\u540d\u5b57"},"\u540d\u5b57"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," \u53ea\u5de5\u4f5c\u5728\u6d41\u6a21\u5f0f\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f60\u6839\u636e MQTT \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"client_id")," \u5b9e\u73b0\u52a8\u6001\u8d1f\u8f7d\u5747\u8861\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u63d2\u4ef6\u652f\u6301 MQTT ",(0,l.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html"},"3.1.*")," \u53ca",(0,l.kt)("a",{parentName:"p",href:"https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html"},"5.0"),"\u4e24\u4e2a\u534f\u8bae\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae\u540d\u79f0\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u5e94\u4e3a\u201c MQTT\u201d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol_level"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae\u7ea7\u522b\uff0cMQTT ",(0,l.kt)("inlineCode",{parentName:"td"},"3.1.*")," \u5e94\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"4")," \uff0cMQTT ",(0,l.kt)("inlineCode",{parentName:"td"},"5.0")," \u5e94\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"5"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u5f53\u524d\u8bf7\u6c42\u8f6c\u53d1\u5230\u7684\u4e0a\u6e38\u7684 IP \u5730\u5740\u6216\u57df\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.ip"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e9f\u5f03"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a8\u8350\u4f7f\u7528\u201chost\u201d\u4ee3\u66ff\u3002\u5c06\u5f53\u524d\u8bf7\u6c42\u8f6c\u53d1\u5230\u7684\u4e0a\u6e38\u7684 IP \u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.port"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u5f53\u524d\u8bf7\u6c42\u8f6c\u53d1\u5230\u7684\u4e0a\u6e38\u7684\u7aef\u53e3")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("p",null,"\u4e3a\u4e86\u542f\u7528\u8be5\u63d2\u4ef6\uff0c\u9700\u8981\u5148\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u9996\u5148\u5f00\u542f stream_proxy \u914d\u7f6e\uff0c\u6bd4\u5982\u4e0b\u9762\u914d\u7f6e\u4ee3\u8868\u76d1\u542c 9100 TCP \u7aef\u53e3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"    ...\n    router:\n        http: 'radixtree_uri'\n        ssl: 'radixtree_sni'\n    stream_proxy:                 # TCP/UDP proxy\n      tcp:                        # TCP proxy port list\n        - 9100\n    dns_resolver:\n    ...\n")),(0,l.kt)("p",null,"\u7136\u540e\u628a MQTT \u8bf7\u6c42\u53d1\u9001\u5230 9100 \u7aef\u53e3\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 mqtt-proxy \u63d2\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "plugins": {\n        "mqtt-proxy": {\n            "protocol_name": "MQTT",\n            "protocol_level": 4,\n            "upstream": {\n                "host": "127.0.0.1",\n                "port": 1980\n            }\n        }\n    }\n}\'\n')),(0,l.kt)("h4",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389\u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X DELETE\n")),(0,l.kt)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86 mqtt-proxy \u63d2\u4ef6\u4e86\u3002"))}d.isMDXComponent=!0}}]);