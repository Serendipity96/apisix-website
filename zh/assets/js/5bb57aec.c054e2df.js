"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38265],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47266:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"opa"},o=void 0,p={unversionedId:"plugins/opa",id:"plugins/opa",isDocsHomePage:!1,title:"opa",description:"\x3c!--",source:"@site/docs/apisix/plugins/opa.md",sourceDirName:"plugins",slug:"/plugins/opa",permalink:"/zh/docs/apisix/next/plugins/opa",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/opa.md",tags:[],version:"current",frontMatter:{title:"opa"},sidebar:"docs",previous:{title:"ldap-auth",permalink:"/zh/docs/apisix/next/plugins/ldap-auth"},next:{title:"forward-auth",permalink:"/zh/docs/apisix/next/plugins/forward-auth"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Data Definition",id:"data-definition",children:[{value:"APISIX to OPA service",id:"apisix-to-opa-service",children:[]},{value:"OPA service response to APISIX",id:"opa-service-response-to-apisix",children:[]}]},{value:"Example",id:"example",children:[{value:"Basic Use Case",id:"basic-use-case",children:[]},{value:"Complex Use Case (custom response)",id:"complex-use-case-custom-response",children:[]},{value:"Complex Use Case (send APISIX data)",id:"complex-use-case-send-apisix-data",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#description"},(0,l.kt)("strong",{parentName:"a"},"Description"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},(0,l.kt)("strong",{parentName:"a"},"Attributes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#data-definition"},(0,l.kt)("strong",{parentName:"a"},"Data Definition"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example"},(0,l.kt)("strong",{parentName:"a"},"Example")))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"opa")," plugin is used to integrate with ",(0,l.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org"},"Open Policy Agent"),". By using this plugin, users can decouple functions such as authentication and access to services and reduce the complexity of the application system."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Open Policy Agent service host (eg. https://localhost:8181)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to verify the certificate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"policy"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"OPA policy path (It is a combination of ",(0,l.kt)("inlineCode",{parentName:"td"},"package")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"decision"),". When you need to use advanced features such as custom response, ",(0,l.kt)("inlineCode",{parentName:"td"},"decision")," can be omitted)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"3000ms"),(0,l.kt)("td",{parentName:"tr",align:null},"[1, 60000]","ms"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP call timeout.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP keepalive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"60000ms"),(0,l.kt)("td",{parentName:"tr",align:null},"[1000, ...]","ms"),(0,l.kt)("td",{parentName:"tr",align:null},"keepalive idle timeout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"[1, ...]","ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Connection pool limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"with_route"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to send information about the current route.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"with_service"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to send information about the current service.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"with_consumer"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to send information about the current consumer. (It may contain sensitive information such as apikey, so please turn it on only if you are sure it is safe)")))),(0,l.kt)("h2",{id:"data-definition"},"Data Definition"),(0,l.kt)("h3",{id:"apisix-to-opa-service"},"APISIX to OPA service"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," indicates that the request type. (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"http")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"stream"),")\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"reqesut")," is used when the request type is ",(0,l.kt)("inlineCode",{parentName:"p"},"http"),", it contains the basic information of the request. (e.g. url, header)\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," contains basic information about this requested connection. (e.g. IP, port, request timestamp)\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"route"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"service"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," will be sent only after the ",(0,l.kt)("inlineCode",{parentName:"p"},"opa")," plugin has enabled the relevant features, and their contents are same as those stored by APISIX in etcd."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "http",\n    "request": {\n        "scheme": "http",\n        "path": "\\/get",\n        "headers": {\n            "user-agent": "curl\\/7.68.0",\n            "accept": "*\\/*",\n            "host": "127.0.0.1:9080"\n        },\n        "query": {},\n        "port": 9080,\n        "method": "GET",\n        "host": "127.0.0.1"\n    },\n    "var": {\n        "timestamp": 1701234567,\n        "server_addr": "127.0.0.1",\n        "server_port": "9080",\n        "remote_port": "port",\n        "remote_addr": "ip address"\n    },\n    "route": {},\n    "service": {},\n    "consumer": {}\n}\n')),(0,l.kt)("h3",{id:"opa-service-response-to-apisix"},"OPA service response to APISIX"),(0,l.kt)("p",null,"In the response, ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," is automatically added by OPA. The ",(0,l.kt)("inlineCode",{parentName:"p"},"allow")," is indispensable and will indicate whether the request is allowed to be forwarded through the APISIX.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"reason"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"headers"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"status_code")," are optional and are only returned when you need to use a custom response, as you'll see in the next section with the actual use case for it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": {\n        "allow": true,\n        "reason": "test",\n        "headers": {\n            "an": "header"\n        },\n        "status_code": 401\n    }\n}\n')),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"First, you need to launch the Open Policy Agent environment."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d --name opa -p 8181:8181 openpolicyagent/opa:0.35.0 run -s\n")),(0,l.kt)("h3",{id:"basic-use-case"},"Basic Use Case"),(0,l.kt)("p",null,"You can create a basic policy for testing."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -X PUT '127.0.0.1:8181/v1/policies/example1' \\\n    -H 'Content-Type: text/plain' \\\n    -d 'package example1\n\nimport input.request\n\ndefault allow = false\n\nallow {\n    # HTTP method must GET\n    request.method == \"GET\"\n}'\n")),(0,l.kt)("p",null,"After that, you can create a route and turn on the ",(0,l.kt)("inlineCode",{parentName:"p"},"opa")," plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X PUT \'http://127.0.0.1:9080/apisix/admin/routes/r1\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/*",\n    "plugins": {\n        "opa": {\n            "host": "http://127.0.0.1:8181",\n            "policy": "example1"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org:80": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,l.kt)("p",null,"Try it out."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Successful request\n$ curl -i -X GET 127.0.0.1:9080/get\nHTTP/1.1 200 OK\n\n# Failed request\n$ curl -i -X POST 127.0.0.1:9080/post\nHTTP/1.1 403 FORBIDDEN\n")),(0,l.kt)("h3",{id:"complex-use-case-custom-response"},"Complex Use Case (custom response)"),(0,l.kt)("p",null,"Next, let's think about some more complex scenarios."),(0,l.kt)("p",null,"When you need to return a custom error message for an incorrect request, you can implement it this way."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X PUT \'127.0.0.1:8181/v1/policies/example2\' \\\n    -H \'Content-Type: text/plain\' \\\n    -d \'package example2\n\nimport input.request\n\ndefault allow = false\n\nallow {\n    request.method == "GET"\n}\n\n# custom response body (Accepts a string or an object, the object will respond as JSON format)\nreason = "test" {\n    not allow\n}\n\n# custom response header (The data of the object can be written in this way)\nheaders = {\n    "Location": "http://example.com/auth"\n} {\n    not allow\n}\n\n# custom response status code\nstatus_code = 302 {\n    not allow\n}\'\n')),(0,l.kt)("p",null,"Update the route and set ",(0,l.kt)("inlineCode",{parentName:"p"},"opa")," plugin's ",(0,l.kt)("inlineCode",{parentName:"p"},"policy")," parameter to ",(0,l.kt)("inlineCode",{parentName:"p"},"example2"),". Then, let's try it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Successful request\n$ curl -i -X GET 127.0.0.1:9080/get\nHTTP/1.1 200 OK\n\n# Failed request\n$ curl -i -X POST 127.0.0.1:9080/post\nHTTP/1.1 302 FOUND\nLocation: http://example.com/auth\n\ntest\n")),(0,l.kt)("h3",{id:"complex-use-case-send-apisix-data"},"Complex Use Case (send APISIX data)"),(0,l.kt)("p",null,"Let's think about another scenario, when your decision needs to use some APISIX data, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"route"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer"),", etc., how should we do it?"),(0,l.kt)("p",null,"Create a simple policy ",(0,l.kt)("inlineCode",{parentName:"p"},"echo"),", which will return the data sent by APISIX to the OPA service as is, so we can simply see them."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -X PUT '127.0.0.1:8181/v1/policies/echo' \\\n    -H 'Content-Type: text/plain' \\\n    -d 'package echo\n\nallow = false\nreason = input'\n")),(0,l.kt)("p",null,"Next, update the config of the route to enable sending route data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X PUT \'http://127.0.0.1:9080/apisix/admin/routes/r1\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/*",\n    "plugins": {\n        "opa": {\n            "host": "http://127.0.0.1:8181",\n            "policy": "echo",\n            "with_route": true\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org:80": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,l.kt)("p",null,"Try it. As you can see, we output this data with the help of the custom response body function described above, along with the data from the route."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X GET 127.0.0.1:9080/get\n{\n    "type": "http",\n    "request": {\n        xxx\n    },\n    "var": {\n        xxx\n    },\n    "route": {\n        xxx\n    }\n}\n')))}d.isMDXComponent=!0}}]);