(self.webpackChunk=self.webpackChunk||[]).push([[72816],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return r?n.createElement(h,l(l({ref:t},d),{},{components:r})):n.createElement(h,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2935:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l={title:"Router radixtree"},o={unversionedId:"router-radixtree",id:"version-2.5/router-radixtree",isDocsHomePage:!1,title:"Router radixtree",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.5/router-radixtree.md",sourceDirName:".",slug:"/router-radixtree",permalink:"/zh/docs/apisix/2.5/router-radixtree",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/router-radixtree.md",version:"2.5",frontMatter:{title:"Router radixtree"},sidebar:"version-2.5/docs",previous:{title:"\u5065\u5eb7\u68c0\u67e5",permalink:"/zh/docs/apisix/2.5/health-check"},next:{title:"Stand-alone mode",permalink:"/zh/docs/apisix/2.5/stand-alone"}},p=[{value:"what&#39;s libradixtree?",id:"whats-libradixtree",children:[]},{value:"How to use libradixtree in APISIX?",id:"how-to-use-libradixtree-in-apisix",children:[]},{value:"How to filter route by Nginx builtin variable",id:"how-to-filter-route-by-nginx-builtin-variable",children:[]},{value:"How to filter route by graphql attributes",id:"how-to-filter-route-by-graphql-attributes",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"whats-libradixtree"},"what's libradixtree?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/iresty/lua-resty-radixtree"},"libradixtree"),", adaptive radix trees implemented in Lua for OpenResty."),(0,i.kt)("p",null,"APISIX using libradixtree as route dispatching library."),(0,i.kt)("h3",{id:"how-to-use-libradixtree-in-apisix"},"How to use libradixtree in APISIX?"),(0,i.kt)("p",null,"This is Lua-Openresty implementation library base on FFI for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/antirez/rax"},"rax"),"."),(0,i.kt)("p",null,"Let's take a look at a few examples and have an intuitive understanding."),(0,i.kt)("h4",{id:"1-full-match"},"1. Full match"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/blog/foo\n")),(0,i.kt)("p",null,"It will only match ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/foo"),"."),(0,i.kt)("h4",{id:"2-prefix-matching"},"2. Prefix matching"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/blog/bar*\n")),(0,i.kt)("p",null,"It will match the path with the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/bar"),", eg: ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/bar/a"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/bar/b"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/bar/c/d/e"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/bar")," etc."),(0,i.kt)("h4",{id:"3-match-priority"},"3. Match priority"),(0,i.kt)("p",null,"Full match -> Deep prefix matching."),(0,i.kt)("p",null,"Here are the rules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/blog/foo/*\n/blog/foo/a/*\n/blog/foo/c/*\n/blog/foo/bar\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"path"),(0,i.kt)("th",{parentName:"tr",align:null},"Match result"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/blog/foo/bar"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/blog/foo/bar"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/blog/foo/a/b/c"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/blog/foo/a/*"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/blog/foo/c/d"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/blog/foo/c/*"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/blog/foo/gloo"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/blog/foo/*"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/blog/bar"),(0,i.kt)("td",{parentName:"tr",align:null},"not match")))),(0,i.kt)("h4",{id:"4-parameter-match"},"4. Parameter match"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"radixtree_uri_with_parameter")," is used, we can match routes with parameters."),(0,i.kt)("p",null,"For example, with configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    router:\n        http: 'radixtree_uri_with_parameter'\n")),(0,i.kt)("p",null,"route like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/blog/:name\n")),(0,i.kt)("p",null,"will match both ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/dog")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/cat"),"."),(0,i.kt)("p",null,"For more details, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-radixtree/#parameters-in-path"},"https://github.com/api7/lua-resty-radixtree/#parameters-in-path"),"."),(0,i.kt)("h3",{id:"how-to-filter-route-by-nginx-builtin-variable"},"How to filter route by Nginx builtin variable"),(0,i.kt)("p",null,"Please take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iresty/lua-resty-radixtree#new"},"radixtree-new"),",\nhere is an simple example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/index.html",\n    "vars": [\n        ["http_host", "==", "iresty.com"],\n        ["cookie_device_id", "==", "a66f0cdc4ba2df8c096f74c9110163a9"],\n        ["arg_name", "==", "json"],\n        ["arg_age", ">", "18"],\n        ["arg_address", "~~", "China.*"]\n    ],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"This route will require the request header ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," equal ",(0,i.kt)("inlineCode",{parentName:"p"},"iresty.com"),", request cookie key ",(0,i.kt)("inlineCode",{parentName:"p"},"_device_id")," equal ",(0,i.kt)("inlineCode",{parentName:"p"},"a66f0cdc4ba2df8c096f74c9110163a9")," etc."),(0,i.kt)("h3",{id:"how-to-filter-route-by-graphql-attributes"},"How to filter route by graphql attributes"),(0,i.kt)("p",null,"APISIX supports filtering route by some attributes of graphql. Currently we support:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"graphql_operation"),(0,i.kt)("li",{parentName:"ul"},"graphql_name"),(0,i.kt)("li",{parentName:"ul"},"graphql_root_fields")),(0,i.kt)("p",null,"For instance, with graphql like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query getRepo {\n    owner {\n        name\n    }\n    repo {\n        created\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql_operation")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"query")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql_name")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"getRepo"),","),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql_root_fields")," is ",(0,i.kt)("inlineCode",{parentName:"li"},'["owner", "repo"]'))),(0,i.kt)("p",null,"We can filter such route out with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "methods": ["POST"],\n    "uri": "/_graphql",\n    "vars": [\n        ["graphql_operation", "==", "query"],\n        ["graphql_name", "==", "getRepo"],\n        ["graphql_root_fields", "has", "owner"]\n    ],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"To prevent spending too much time reading invalid graphql request body, we only read the first 1 MiB\ndata from the request body. This limitation is configured via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"graphql:\n  max_size: 1048576\n\n")),(0,i.kt)("p",null,"If you need to pass a graphql body which is larger than the limitation, you can increase the value in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."))}d.isMDXComponent=!0}}]);