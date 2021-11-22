"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9345],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63733:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"cors"},o=void 0,s={unversionedId:"plugins/cors",id:"version-2.10/plugins/cors",isDocsHomePage:!1,title:"cors",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10/plugins/cors.md",sourceDirName:"plugins",slug:"/plugins/cors",permalink:"/docs/apisix/2.10/plugins/cors",editUrl:"https://github.com/apache/apisix/edit/release/2.10/docs/en/latest/plugins/cors.md",tags:[],version:"2.10",frontMatter:{title:"cors"},sidebar:"version-2.10/docs",previous:{title:"authz-casbin",permalink:"/docs/apisix/2.10/plugins/authz-casbin"},next:{title:"uri-blocker",permalink:"/docs/apisix/2.10/plugins/uri-blocker"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#description"},(0,l.kt)("strong",{parentName:"a"},"Description"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},(0,l.kt)("strong",{parentName:"a"},"Attributes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,l.kt)("strong",{parentName:"a"},"How To Enable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#test-plugin"},(0,l.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,l.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cors")," plugin can help you enable ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS")," easily."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_origins"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"*"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Which Origins is allowed to enable CORS, format as: ",(0,l.kt)("inlineCode",{parentName:"td"},"scheme"),"://",(0,l.kt)("inlineCode",{parentName:"td"},"host"),":",(0,l.kt)("inlineCode",{parentName:"td"},"port"),", for example: ",(0,l.kt)("a",{parentName:"td",href:"https://somehost.com:8081"},"https://somehost.com:8081"),". Multiple origin use ",(0,l.kt)("inlineCode",{parentName:"td"},",")," to split. When ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", you can use ",(0,l.kt)("inlineCode",{parentName:"td"},"*")," to indicate allow any origin. you also can allow all any origins forcefully using ",(0,l.kt)("inlineCode",{parentName:"td"},"**")," even already enable ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential"),", but it will bring some security risks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_methods"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"*"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Which Method is allowed to enable CORS, such as: ",(0,l.kt)("inlineCode",{parentName:"td"},"GET"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"POST")," etc. Multiple method use ",(0,l.kt)("inlineCode",{parentName:"td"},",")," to split. When ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", you can use ",(0,l.kt)("inlineCode",{parentName:"td"},"*")," to indicate allow all any method. You also can allow any method forcefully using ",(0,l.kt)("inlineCode",{parentName:"td"},"**")," even already enable ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential"),", but it will bring some security risks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"*"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Which headers are allowed to set in request when access cross-origin resource. Multiple value use ",(0,l.kt)("inlineCode",{parentName:"td"},",")," to split. When ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", you can use ",(0,l.kt)("inlineCode",{parentName:"td"},"*")," to indicate allow all request headers. You also can allow any header forcefully using ",(0,l.kt)("inlineCode",{parentName:"td"},"**")," even already enable ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential"),", but it will bring some security risks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expose_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'"*"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Which headers are allowed to set in response when access cross-origin resource. Multiple value use ",(0,l.kt)("inlineCode",{parentName:"td"},",")," to split. When ",(0,l.kt)("inlineCode",{parentName:"td"},"allow_credential")," is false, you can use ",(0,l.kt)("inlineCode",{parentName:"td"},"*")," to indicate allow any header. You also can allow any header forcefully using ",(0,l.kt)("inlineCode",{parentName:"td"},"**")," even already enable allow_credential, but it will bring some security risks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_age"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of seconds the results can be cached. Within this time range, the browser will reuse the last check result. ",(0,l.kt)("inlineCode",{parentName:"td"},"-1")," means no cache. Please note that the maximum value is depended on browser, please refer to ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age#Directives"},"MDN")," for details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_credential"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Enable request include credential (such as Cookie etc.). According to CORS specification, if you set this option to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", you can not use '*' for other options.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_origins_by_regex"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Use regex expressions to match which origin is allowed to enable CORS, for example, ",'[".*',".",'test.com"]'," can use to match all subdomain of test.com")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Tips")),(0,l.kt)("p",{parentName:"blockquote"},"Please note that ",(0,l.kt)("inlineCode",{parentName:"p"},"allow_credential")," is a very sensitive option, so choose to enable it carefully. After set it be ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the default ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," of other parameters will be invalid, you must specify their values explicitly.\nWhen using ",(0,l.kt)("inlineCode",{parentName:"p"},"**"),", you must fully understand that it introduces some security risks, such as CSRF, so make sure that this security level meets your expectations before using it\u3002")),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"Create a ",(0,l.kt)("inlineCode",{parentName:"p"},"Route")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Service")," object and configure ",(0,l.kt)("inlineCode",{parentName:"p"},"cors")," plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "cors": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("p",null,"curl to server, you will find the headers about ",(0,l.kt)("inlineCode",{parentName:"p"},"CORS")," is be returned, which means plugin is working fine."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/hello -v\n...\n< Server: APISIX web server\n< Access-Control-Allow-Origin: *\n< Access-Control-Allow-Methods: *\n< Access-Control-Allow-Headers: *\n< Access-Control-Expose-Headers: *\n< Access-Control-Max-Age: 5\n...\n")),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"When you want to disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"cors")," plugin, it is very simple, you can delete the corresponding json configuration in the plugin configuration, no need to restart the service, it will take effect immediately:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"cors")," plugin has been disabled now. It works for other plugins."))}d.isMDXComponent=!0}}]);