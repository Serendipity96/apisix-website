"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65022],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25482:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o={title:"Release Apache APISIX 2.8.0",author:"Ruofei Zhao",authorURL:"https://github.com/Serendipity96",authorImageURL:"https://avatars.githubusercontent.com/u/23514812?v=4",keywords:["APISIX","Release Notes","Apache APISIX"],description:"Apache APISIX version 2.8 is released!",tags:["Release"]},l=void 0,p={permalink:"/blog/2021/07/28/release-apache-apisix-2.8",source:"@site/blog/2021/07/28/release-apache-apisix-2.8.md",title:"Release Apache APISIX 2.8.0",description:"Apache APISIX version 2.8 is released!",date:"2021-07-28T00:00:00.000Z",formattedDate:"July 28, 2021",tags:[{label:"Release",permalink:"/blog/tags/release"}],readingTime:3.345,truncated:!0,authors:[{name:"Ruofei Zhao",url:"https://github.com/Serendipity96",imageURL:"https://avatars.githubusercontent.com/u/23514812?v=4"}],prevItem:{title:"Kong-To-APISIX \u8fc1\u79fb\u5de5\u5177",permalink:"/blog/2021/08/05/Kong-to-APISIX"},nextItem:{title:"\u63d2\u4ef6\u7f16\u6392\u5728 Apache APISIX \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",permalink:"/blog/2021/07/27/use-of-plugin-orchestration-in-Apache-APISIX"}},s={authorsImageUrls:[void 0]},c=[{value:"Release Notes",id:"release-notes",children:[{value:"New feature: Independent Keepalive connection pool",id:"new-feature-independent-keepalive-connection-pool",children:[]},{value:"New experience: Enhance stream proxy",id:"new-experience-enhance-stream-proxy",children:[]},{value:"New plug-in: gzip",id:"new-plug-in-gzip",children:[]},{value:"New plug-in: ua-restriction",id:"new-plug-in-ua-restriction",children:[]},{value:"New way to develop: Support for executing specific logic by plug-ins",id:"new-way-to-develop-support-for-executing-specific-logic-by-plug-ins",children:[]},{value:"New way to develop: Support for custom balancer",id:"new-way-to-develop-support-for-custom-balancer",children:[]}]},{value:"Download",id:"download",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache APISIX version 2.8 is released!")),(0,i.kt)("p",null,"Apache APISIX version 2.8 is released! \ud83c\udf89 This version has 30+ developers participated, more than 100 PRs had been submitted, and supports ",(0,i.kt)("strong",{parentName:"p"},"1 new feature, 1 new experience, 2 new plugins, and 2 new ways to develop"),". Read and learn about the new features in version 2.8!\n\ud83d\udc47\ud83d\udc47\ud83d\udc47"),(0,i.kt)("h2",{id:"release-notes"},"Release Notes"),(0,i.kt)("h3",{id:"new-feature-independent-keepalive-connection-pool"},"New feature: Independent Keepalive connection pool"),(0,i.kt)("p",null,"Starting with ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/06/29/release-apache-apisix-2.7"},"version 2.7"),", we have added Apache APISIX's own patches and the Nginx C module to enhance the native Nginx, allowing dynamic setup of increasing number of Nginx configurations. In version 2.8, Apache APISIX supports the configuration of independent Keepalive connection pools at the Upstream level."),(0,i.kt)("p",null,"The following features are currently included:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dynamically set mTLS"),(0,i.kt)("li",{parentName:"ul"},"Dynamically set client_max_body_size"),(0,i.kt)("li",{parentName:"ul"},"Upstream Keepalive \uff082.8 new feature\uff09"),(0,i.kt)("li",{parentName:"ul"},"gzip \uff082.8 new Plug-in\uff09")),(0,i.kt)("p",null,"In future releases, we will continue to allow the following Nginx configurations to be set dynamically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"real_ip"),(0,i.kt)("li",{parentName:"ul"},"proxy_max_temp_file_size"),(0,i.kt)("li",{parentName:"ul"},"\u2026\u2026")),(0,i.kt)("p",null,"An example of Upstream configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "id": "backend",\n    "nodes": {"host:80": 100},\n    "type":"roundrobin",\n    "keepalive_pool": {\n        "size": 4,\n        "idle_timeout": 8,\n        "requests": 16\n    }\n}\n')),(0,i.kt)("h3",{id:"new-experience-enhance-stream-proxy"},"New experience: Enhance stream proxy"),(0,i.kt)("p",null,"In version 2.8, the ",(0,i.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/ip-restriction/"},"ip-restriction")," and ","[limit-conn]","(",(0,i.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs"},"http://apisix.apache.org/docs")," /apisix/plugins/limit-conn/) had been duplicated from the HTTP section to the stream section. The benefit of this way is to enhance gateway capabilities in the stream proxy and to increase the security of the upstream services."),(0,i.kt)("p",null,"ip-restriction can be used to filter IP black and white list to ensure that only requests from a specific IP can access the backend service."),(0,i.kt)("p",null,"limit-conn can be used to limit the number of simultaneous connections on a route, limiting the number of concurrent client accesses."),(0,i.kt)("h3",{id:"new-plug-in-gzip"},"New plug-in: gzip"),(0,i.kt)("p",null,"Apache APISIX version 2.8 contains the gzip plug-in. Using the gzip plug-in, you can ",(0,i.kt)("strong",{parentName:"p"},"dynamically set route-level gzip parameters"),"."),(0,i.kt)("p",null,"An example of gzip configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "plugins": {\n        "gzip": {\n            "min_length": 20,\n            "http_version": 1.1,\n            "buffers": {\n                "number": 32,\n                "size": 4096\n            },\n            "types": [\n                "text/html"\n            ],\n            "comp_level": 1,\n            "vary": false\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"new-plug-in-ua-restriction"},"New plug-in: ua-restriction"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ua-restriction")," plugin is used to check if the User-Agent is in the black and white list, which is a very common requirement and can be enabled by way of a plugin."),(0,i.kt)("p",null,"An example of ",(0,i.kt)("inlineCode",{parentName:"p"},"ua-restriction")," configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "plugins": {\n        "ua-restriction": {\n            "denylist": [\n                "my-bot1",\n                "(Baiduspider)/(\\\\d+)\\\\.(\\\\d+)"\n            ]\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"new-way-to-develop-support-for-executing-specific-logic-by-plug-ins"},"New way to develop: Support for executing specific logic by plug-ins"),(0,i.kt)("p",null,"Based on Apache APISIX architecture, many features are implemented by plug-ins. Starting from version 2.8, ",(0,i.kt)("strong",{parentName:"p"},"Apache APISIX supports executing specific logic by plug-ins after selecting an upstream node.")),(0,i.kt)("p",null,"Define the following method in the plug-in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Lua"},'function _M.balancer(conf, ctx)\n    core.log.notice("IP: ", ctx.balancer_ip, ", Port: ", ctx.balancer_port)\nend\n')),(0,i.kt)("p",null,"In this example, the log will output the IP and Port of the upstream."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Which scenario does the above method apply to?")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"After selecting the upstream node and before accessing the upstream"),(0,i.kt)("li",{parentName:"ol"},"Before each retry")),(0,i.kt)("p",null,"For the best performance, the above method first runs in the access phase of OpenResty (APISIX actually selects the upstream node in the access phase) and the method does not overlap with the OpenResty phase of the same name."),(0,i.kt)("h3",{id:"new-way-to-develop-support-for-custom-balancer"},"New way to develop: Support for custom balancer"),(0,i.kt)("p",null,"In version 2.8, users can customize the balancer. ",(0,i.kt)("strong",{parentName:"p"},"The balancer is loading with minimum number of connections, polling, consistency hash, etc.")),(0,i.kt)("p",null,"Although Apache APISIX already provides a set of balancers, users may need to use balancers that are closely related to the business, such as: need to consider the server room, availability zone, etc. Supporting for custom balancer, users can develop their own balancer and load it via ",(0,i.kt)("inlineCode",{parentName:"p"},'require("apisix.balancer.your_balancer")'),"."),(0,i.kt)("p",null,"Usually a custom balancer requires node to provide data which is from other than the host/port, you can put data in the metadata, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "nodes": [\n        { "host": "0.0.0.0", "port": 1980, "weight": 1, "metadata": {"b": 1} }\n    ]\n}\n')),(0,i.kt)("h2",{id:"download"},"Download"),(0,i.kt)("p",null,"Download Apache APISIX 2.8.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Source code: please visit ",(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/downloads/"},"download page")),(0,i.kt)("li",{parentName:"ul"},"Binary installation package: please visit ",(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/how-to-build/"},"Installation Guide"))))}d.isMDXComponent=!0}}]);