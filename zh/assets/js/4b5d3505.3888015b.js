"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40449],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,h=m["".concat(u,".").concat(g)]||m[g]||c[g]||l;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17686:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i={title:"WASM"},o=void 0,u={unversionedId:"wasm",id:"version-2.11/wasm",isDocsHomePage:!1,title:"WASM",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.11/wasm.md",sourceDirName:".",slug:"/wasm",permalink:"/zh/docs/apisix/wasm",editUrl:"https://github.com/apache/apisix/edit/release/2.11/docs/zh/latest/wasm.md",tags:[],version:"2.11",frontMatter:{title:"WASM"},sidebar:"version-2.11/docs",previous:{title:"External Plugin",permalink:"/zh/docs/apisix/external-plugin"},next:{title:"\u63d2\u4ef6\u62e6\u622a\u5668",permalink:"/zh/docs/apisix/plugin-interceptors"}},p=[{value:"Programming model",id:"programming-model",children:[]},{value:"How to use",id:"how-to-use",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"APISIX supports WASM plugins written with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/proxy-wasm/spec#sdks"},"Proxy WASM SDK"),"."),(0,l.kt)("p",null,"This plugin requires APISIX to run on ",(0,l.kt)("a",{parentName:"p",href:"../how-to-build.md#step-6-build-openresty-for-apache-apisix"},"APISIX-OpenResty"),", and is under construction.\nCurrently, only a few APIs are implemented. Please follow ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/wasm-nginx-module"},"wasm-nginx-module")," to know the progress."),(0,l.kt)("h2",{id:"programming-model"},"Programming model"),(0,l.kt)("p",null,"The plugin supports the follwing concepts from Proxy WASM:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"                    Wasm Virtual Machine\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      Your Plugin                                               \u2502\n\u2502          \u2502                                                     \u2502\n\u2502          \u2502 1: 1                                                \u2502\n\u2502          \u2502         1: N                                        \u2502\n\u2502      VMContext  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  PluginContext                      \u2502\n\u2502                                           \u2572 1: N               \u2502\n\u2502                                            \u2572                   \u2502\n\u2502                                             \u2572  HttpContext     \u2502\n\u2502                                               (Http stream)    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All plugins run in the same WASM VM, like the Lua plugin in the Lua VM"),(0,l.kt)("li",{parentName:"ul"},"Each plugin has its own VMContext (the root ctx)"),(0,l.kt)("li",{parentName:"ul"},"Each configured route/global rules has its own PluginContext (the plugin ctx).\nFor example, if we have a service configuring with WASM plugin, and two routes inherit from it,\nthere will be two plugin ctxs."),(0,l.kt)("li",{parentName:"ul"},"Each HTTP request which hits the configuration will have its own HttpContext (the HTTP ctx).\nFor example, if we configure both global rules and route, the HTTP request will\nhave two HTTP ctxs, one for the plugin ctx from global rules and the other for the\nplugin ctx from route.")),(0,l.kt)("h2",{id:"how-to-use"},"How to use"),(0,l.kt)("p",null,"First of all, we need to define the plugin in ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"wasm:\n  plugins:\n    - name: wasm_log # the name of the plugin\n      priority: 7999 # priority\n      file: t/wasm/log/main.go.wasm # the path of `.wasm` file\n")),(0,l.kt)("p",null,"That's all. Now you can use the wasm plugin as a regular plugin."),(0,l.kt)("p",null,"For example, enable this plugin on the specified route:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n         "wasm_log": {\n             "conf": "blahblah"\n         }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"Attributes below can be configured in the plugin:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conf"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'!= ""'),(0,l.kt)("td",{parentName:"tr",align:null},"the plugin ctx configuration which can be fetched via Proxy WASM SDK")))))}c.isMDXComponent=!0}}]);