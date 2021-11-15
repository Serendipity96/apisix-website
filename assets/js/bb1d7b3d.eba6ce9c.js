"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81438],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(h,o(o({ref:n},l),{},{components:t})):a.createElement(h,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52318:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),o={title:"nacos"},i=void 0,c={unversionedId:"discovery/nacos",id:"version-2.10/discovery/nacos",isDocsHomePage:!1,title:"nacos",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10/discovery/nacos.md",sourceDirName:"discovery",slug:"/discovery/nacos",permalink:"/docs/apisix/discovery/nacos",editUrl:"https://github.com/apache/apisix/edit/release/2.10/docs/en/latest/discovery/nacos.md",tags:[],version:"2.10",frontMatter:{title:"nacos"},sidebar:"version-2.10/docs",previous:{title:"consul_kv",permalink:"/docs/apisix/discovery/consul_kv"},next:{title:"eureka",permalink:"/docs/apisix/discovery/eureka"}},p=[{value:"Service discovery via Nacos",id:"service-discovery-via-nacos",children:[{value:"Configuration for Nacos",id:"configuration-for-nacos",children:[]},{value:"Upstream setting",id:"upstream-setting",children:[]},{value:"discovery_args",id:"discovery_args",children:[]}]}],l={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"service-discovery-via-nacos"},"Service discovery via Nacos"),(0,s.kt)("p",null,"This is experimental discovery module for Nacos."),(0,s.kt)("p",null,"The performance of this module needs to be improved:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"send the request parallelly.")),(0,s.kt)("h3",{id:"configuration-for-nacos"},"Configuration for Nacos"),(0,s.kt)("p",null,"Add following configuration in ",(0,s.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  nacos:\n    host:\n      - "http://${username}:${password}@${host1}:${port1}"\n    prefix: "/nacos/v1/"\n    fetch_interval: 30    # default 30 sec\n    weight: 100           # default 100\n    timeout:\n      connect: 2000       # default 2000 ms\n      send: 2000          # default 2000 ms\n      read: 5000          # default 5000 ms\n')),(0,s.kt)("p",null,"And you can config it in short by default value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  nacos:\n    host:\n      - "http://192.168.33.1:8848"\n')),(0,s.kt)("h3",{id:"upstream-setting"},"Upstream setting"),(0,s.kt)("p",null,'Here is an example of routing a request with an URI of "/nacos/*" to a service which named "',(0,s.kt)("a",{parentName:"p",href:"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS%22"},'http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS"')," and use nacos discovery client in the registry:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/nacos/*",\n    "upstream": {\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos"\n    }\n}\'\n')),(0,s.kt)("p",null,"The formatted response as below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "key": "\\/apisix\\/routes\\/1",\n    "value": {\n      "id": "1",\n      "create_time": 1615796097,\n      "status": 1,\n      "update_time": 1615799165,\n      "upstream": {\n        "hash_on": "vars",\n        "pass_host": "pass",\n        "scheme": "http",\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos"\n      },\n      "priority": 0,\n      "uri": "\\/nacos\\/*"\n    }\n  },\n  "action": "set"\n}\n')),(0,s.kt)("h3",{id:"discovery_args"},"discovery_args"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"Valid"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"namespace_id"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"optional"),(0,s.kt)("td",{parentName:"tr",align:null},"public"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"This parameter is used to specify the namespace of the corresponding service")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"group_name"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"optional"),(0,s.kt)("td",{parentName:"tr",align:null},"DEFAULT_GROUP"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"This parameter is used to specify the group of the corresponding service")))),(0,s.kt)("h4",{id:"specify-the-namespace"},"Specify the namespace"),(0,s.kt)("p",null,'Example of routing a request with an URI of "/nacosWithNamespaceId/*" to a service which name, namespaceId "',(0,s.kt)("a",{parentName:"p",href:"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS&namespaceId=test_ns%22"},'http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS&namespaceId=test_ns"')," and use nacos discovery client in the registry:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/nacosWithNamespaceId/*",\n    "upstream": {\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos",\n        "discovery_args": {\n          "namespace_id": "test_ns"\n        }\n    }\n}\'\n')),(0,s.kt)("p",null,"The formatted response as below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "key": "\\/apisix\\/routes\\/2",\n    "value": {\n      "id": "2",\n      "create_time": 1615796097,\n      "status": 1,\n      "update_time": 1615799165,\n      "upstream": {\n        "hash_on": "vars",\n        "pass_host": "pass",\n        "scheme": "http",\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos",\n        "discovery_args": {\n          "namespace_id": "test_ns"\n        }\n      },\n      "priority": 0,\n      "uri": "\\/nacosWithNamespaceId\\/*"\n    }\n  },\n  "action": "set"\n}\n')),(0,s.kt)("h4",{id:"specify-the-group"},"Specify the group"),(0,s.kt)("p",null,'Example of routing a request with an URI of "/nacosWithGroupName/*" to a service which name, groupName "',(0,s.kt)("a",{parentName:"p",href:"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS&groupName=test_group%22"},'http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS&groupName=test_group"')," and use nacos discovery client in the registry:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/3 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/nacosWithGroupName/*",\n    "upstream": {\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos",\n        "discovery_args": {\n          "group_name": "test_group"\n        }\n    }\n}\'\n')),(0,s.kt)("p",null,"The formatted response as below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "key": "\\/apisix\\/routes\\/3",\n    "value": {\n      "id": "3",\n      "create_time": 1615796097,\n      "status": 1,\n      "update_time": 1615799165,\n      "upstream": {\n        "hash_on": "vars",\n        "pass_host": "pass",\n        "scheme": "http",\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos",\n        "discovery_args": {\n          "group_name": "test_group"\n        }\n      },\n      "priority": 0,\n      "uri": "\\/nacosWithGroupName\\/*"\n    }\n  },\n  "action": "set"\n}\n')),(0,s.kt)("h4",{id:"specify-the-namespace-and-group"},"Specify the namespace and group"),(0,s.kt)("p",null,'Example of routing a request with an URI of "/nacosWithNamespaceIdAndGroupName/*" to a service which name, namespaceId, groupName "',(0,s.kt)("a",{parentName:"p",href:"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS&namespaceId=test_ns&groupName=test_group%22"},'http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS&namespaceId=test_ns&groupName=test_group"')," and use nacos discovery client in the registry:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/4 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/nacosWithNamespaceIdAndGroupName/*",\n    "upstream": {\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos",\n        "discovery_args": {\n          "namespace_id": "test_ns",\n          "group_name": "test_group"\n        }\n    }\n}\'\n')),(0,s.kt)("p",null,"The formatted response as below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "key": "\\/apisix\\/routes\\/4",\n    "value": {\n      "id": "4",\n      "create_time": 1615796097,\n      "status": 1,\n      "update_time": 1615799165,\n      "upstream": {\n        "hash_on": "vars",\n        "pass_host": "pass",\n        "scheme": "http",\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos",\n        "discovery_args": {\n          "namespace_id": "test_ns",\n          "group_name": "test_group"\n        }\n      },\n      "priority": 0,\n      "uri": "\\/nacosWithNamespaceIdAndGroupName\\/*"\n    }\n  },\n  "action": "set"\n}\n')))}u.isMDXComponent=!0}}]);