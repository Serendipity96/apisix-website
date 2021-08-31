(self.webpackChunk=self.webpackChunk||[]).push([[11512],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4795:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"redirect"},o={unversionedId:"plugins/redirect",id:"plugins/redirect",isDocsHomePage:!1,title:"redirect",description:"\x3c!--",source:"@site/docs/apisix/plugins/redirect.md",sourceDirName:"plugins",slug:"/plugins/redirect",permalink:"/docs/apisix/next/plugins/redirect",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/redirect.md",version:"current",frontMatter:{title:"redirect"},sidebar:"docs",previous:{title:"serverless",permalink:"/docs/apisix/next/plugins/serverless"},next:{title:"echo",permalink:"/docs/apisix/next/plugins/echo"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#name"},(0,l.kt)("strong",{parentName:"a"},"Name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},(0,l.kt)("strong",{parentName:"a"},"Attributes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,l.kt)("strong",{parentName:"a"},"How To Enable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#test-plugin"},(0,l.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,l.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,"URI redirect."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http_to_https"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"When it is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," and the request is HTTP, will be automatically redirected to HTTPS with 301 response code, and the URI will keep the same as client request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"New URL which can contain Nginx variable, eg: ",(0,l.kt)("inlineCode",{parentName:"td"},"/test/index.html"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"$uri/index.html"),". You can refer to variables in a way similar to ",(0,l.kt)("inlineCode",{parentName:"td"},"${xxx}")," to avoid ambiguity, eg: ",(0,l.kt)("inlineCode",{parentName:"td"},"${uri}foo/index.html"),". If you just need the original ",(0,l.kt)("inlineCode",{parentName:"td"},"$")," character, add ",(0,l.kt)("inlineCode",{parentName:"td"},"\\")," in front of it, like this one: ",(0,l.kt)("inlineCode",{parentName:"td"},"/\\$foo/index.html"),". If you refer to a variable name that does not exist, this will not produce an error, and it will be used as an empty string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"regex_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Use regular expression to match URL from client, when the match is successful, the URL template will be redirected to. If the match is not successful, the URL from the client will be forwarded to the upstream. Only one of ",(0,l.kt)("inlineCode",{parentName:"td"},"uri")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"regex_uri")," can be exist. For example: ",'[" ^/iresty/(.',(0,l.kt)("em",{parentName:"td"},")/(."),')/(.*)", "/$1-$2-$3"]',", the first element represents the matching regular expression and the second element represents the URL template that is redirected to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ret_code"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"302"),(0,l.kt)("td",{parentName:"tr",align:null},"[200, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"Response code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encode_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"When set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," the uri in ",(0,l.kt)("inlineCode",{parentName:"td"},"Location")," header will be encoded  as per ",(0,l.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc3986"},"RFC3986"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"append_query_string"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"When set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", add the query string from the original request to the location header. If the configured ",(0,l.kt)("inlineCode",{parentName:"td"},"uri")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"regex_uri")," already contains a query string, the query string from request will be appended to that after an ",(0,l.kt)("inlineCode",{parentName:"td"},"&"),". Caution: don't use this if you've already handled the query string, e.g. with nginx variable $request_uri, to avoid duplicates.")))),(0,l.kt)("p",null,"Only one of ",(0,l.kt)("inlineCode",{parentName:"p"},"http_to_https"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"uri")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"regex_uri")," can be specified."),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"Here's a mini example, enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"redirect")," plugin on the specified route:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test/index.html",\n    "plugins": {\n        "redirect": {\n            "uri": "/test/default.html",\n            "ret_code": 301\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"And we can use any Nginx built-in variable in the new URI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test",\n    "plugins": {\n        "redirect": {\n            "uri": "$uri/index.html",\n            "ret_code": 301\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("p",null,"Testing based on the above examples :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/test/index.html -i\nHTTP/1.1 301 Moved Permanently\nDate: Wed, 23 Oct 2019 13:48:23 GMT\nContent-Type: text/html\nContent-Length: 166\nConnection: keep-alive\nLocation: /test/default.html\n\n...\n")),(0,l.kt)("p",null,"We can check the response code and the response header ",(0,l.kt)("inlineCode",{parentName:"p"},"Location"),"."),(0,l.kt)("p",null,"It shows that the ",(0,l.kt)("inlineCode",{parentName:"p"},"redirect")," plugin is in effect."),(0,l.kt)("p",null," Here is an example of redirect HTTP to HTTPS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "redirect": {\n            "http_to_https": true\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"When you want to disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"redirect")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"redirect")," plugin has been disabled now. It works for other plugins."))}d.isMDXComponent=!0}}]);