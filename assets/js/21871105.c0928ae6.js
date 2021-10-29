"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75442],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41181:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o={title:"Consumer"},s=void 0,u={unversionedId:"architecture-design/consumer",id:"version-2.10/architecture-design/consumer",isDocsHomePage:!1,title:"Consumer",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10/architecture-design/consumer.md",sourceDirName:"architecture-design",slug:"/architecture-design/consumer",permalink:"/docs/apisix/architecture-design/consumer",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/consumer.md",tags:[],version:"2.10",frontMatter:{title:"Consumer"},sidebar:"version-2.10/docs",previous:{title:"Service",permalink:"/docs/apisix/architecture-design/service"},next:{title:"Upstream",permalink:"/docs/apisix/architecture-design/upstream"}},c=[],l={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For the API gateway, it is usually possible to identify a certain type of requester by using a domain name such as a request domain name, a client IP address, etc., and then perform plugin filtering and forward the request to the specified upstream, but sometimes the depth is insufficient."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/consumer-who.png",alt:"consumer-who"})),(0,i.kt)("p",null,"As shown in the image above, as an API gateway, you should know who the API Consumer is, so you can configure different rules for different API Consumers."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Consumer Name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"plugins"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"The corresponding plugin configuration of the Consumer, which has the highest priority: Consumer > Route > Service. For specific plugin configurations, refer to the ",(0,i.kt)("a",{parentName:"td",href:"/docs/apisix/architecture-design/plugin"},"Plugins")," section.")))),(0,i.kt)("p",null,"In APISIX, the process of identifying a Consumer is as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/consumer-internal.png",alt:"consumer-internal"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Authorization certification: e.g ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/key-auth"},"key-auth"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/jwt-auth"},"JWT"),", etc."),(0,i.kt)("li",{parentName:"ol"},"Get consumer_name: By authorization, you can naturally get the corresponding Consumer ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),", which is the unique identifier of the Consumer object."),(0,i.kt)("li",{parentName:"ol"},"Get the Plugin or Upstream information bound to the Consumer: Complete the different configurations for different Consumers.")),(0,i.kt)("p",null,"To sum up, Consumer is a consumer of certain types of services and needs to be used in conjunction with the user authentication system."),(0,i.kt)("p",null,"For example, different consumers request the same API, and the gateway service corresponds to different Plugin or Upstream configurations according to the current request user information."),(0,i.kt)("p",null,"In addition, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/key-auth"},"key-auth")," authentication authorization plugin call logic to help you further understand the Consumer concept and usage."),(0,i.kt)("p",null,"How to enable a specific plugin for a Consumer, you can see the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# Create a Consumer, specify the authentication plugin key-auth, and enable the specific plugin limit-count\n$ curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-one"\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\'\n\n# Create a Router, set routing rules and enable plugin configuration\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n\n# Send a test request, the first two return to normal, did not reach the speed limit threshold\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\n...\n\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\n...\n\n# The third test returns 503 and the request is restricted\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\nHTTP/1.1 503 Service Temporarily Unavailable\n...\n\n')),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/consumer-restriction"},"consumer-restriction")," plug-in to restrict the access of Jack to this API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# Add Jack to the blacklist\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {},\n        "consumer-restriction": {\n            "blacklist": [\n                "jack"\n            ]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n\n# Repeated tests, all return 403; Jack is forbidden to access this API\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\nHTTP/1.1 403\n...\n\n')))}p.isMDXComponent=!0}}]);