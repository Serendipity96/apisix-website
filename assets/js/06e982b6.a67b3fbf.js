"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73838],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96769:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r={title:"Authorization with Casbin in Apache APISIX",author:"Casbin Community & Apache APISIX Community",keywords:["API gateway","APISIX","Apache APISIX","Casbin","RBAC"],description:"When using Apache APISIX, you may want to add complex authorization logic to your application. In this article, we will use the built-in Casbin plugin (authz-casbin) of Apache APISIX to implement the role-based access control (RBAC) model.",tags:["Practical Case"]},s=void 0,l={permalink:"/blog/2021/08/25/Auth-with-Casbin-in-Apache-APISIX",source:"@site/blog/2021/08/25/Auth-with-Casbin-in-Apache-APISIX.md",title:"Authorization with Casbin in Apache APISIX",description:"When using Apache APISIX, you may want to add complex authorization logic to your application. In this article, we will use the built-in Casbin plugin (authz-casbin) of Apache APISIX to implement the role-based access control (RBAC) model.",date:"2021-08-25T00:00:00.000Z",formattedDate:"August 25, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:5.675,truncated:!0,authors:[{name:"Casbin Community & Apache APISIX Community"}],prevItem:{title:"Release Apache APISIX 2.9",permalink:"/blog/2021/08/27/release-apache-apisix-2.9"},nextItem:{title:"\u4f7f\u7528 Apache APISIX \u7684 OpenID Connect \u63d2\u4ef6\u8fdb\u884c\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1",permalink:"/blog/2021/08/25/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication"}},c={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",children:[{value:"About Apache APISIX",id:"about-apache-apisix",children:[]},{value:"About Casbin",id:"about-casbin",children:[]},{value:"About authz-casbin Plug-in",id:"about-authz-casbin-plug-in",children:[]}]},{value:"How to Use authz-casbin",id:"how-to-use-authz-casbin",children:[{value:"Create a Model",id:"create-a-model",children:[]},{value:"Create a Policy",id:"create-a-policy",children:[]},{value:"Using authz-casbin on a Route",id:"using-authz-casbin-on-a-route",children:[]},{value:"Using plug-ins with Global Models or Global Policies",id:"using-plug-ins-with-global-models-or-global-policies",children:[]}]},{value:"Special Thanks",id:"special-thanks",children:[]}],p={toc:u};function h(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache APISIX released authz-casbin plugin to integrate with Casbin.")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"When using Apache APISIX, you may want to add complex authorization logic to your application. In this article, we will use the built-in Casbin plugin (authz-casbin) of Apache APISIX to implement the role-based access control (RBAC) model."),(0,o.kt)("h3",{id:"about-apache-apisix"},"About Apache APISIX"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," is a dynamic, real-time, high-performance API gateway that provides load balancing, dynamic upstream, canary release, fine-grained routing, limit rate, service degradation, circuit breaking, authentication, observability, and hundreds of other features. You can use Apache APISIX to proxy traditional NORTH-SOUTH traffic, as well as EAST-WEST traffic between services, or as a k8s ingress controller."),(0,o.kt)("h3",{id:"about-casbin"},"About Casbin"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://casbin.org/en/"},"Casbin")," is a powerful and efficient open-source access control library. It provides support for enforcing authorization based on various access control models like ACL, RBAC, ABAC for Golang, Java, Node.js, PHP, Python, .NET (C#), Delphi and Rust."),(0,o.kt)("h3",{id:"about-authz-casbin-plug-in"},"About authz-casbin Plug-in"),(0,o.kt)("p",null,"A contradiction between route matching and request authorization occurs when using Apache APISIX: in order to accurately identify authorize requests, users need to configure higher granularity routes. In scenarios with complex authorization models, this leads to an exponential increase in the number of routes, as well as a huge increase in complexities and costs of maintenance."),(0,o.kt)("p",null,"The authz-casbin is an Apache APISIX plugin based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin"},"lua-casbin")," that supports powerful authorization based on various access models. Casbin is a powerful and efficient open-source access control framework that supports ACL, RBAC, ABAC and other access control models, lua-casbin is the Lua version of the authorization access model."),(0,o.kt)("p",null,"The authz-casbin plugin allows you to decouple the route matching and request authorization functions so that you can load various authorization access models into Apache APISIX and implement an efficient and complex authorization model with lua-casbin."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": If you want to implement authentication, you need to use other plugins or configure yourself as an authenticate user."),(0,o.kt)("h2",{id:"how-to-use-authz-casbin"},"How to Use authz-casbin"),(0,o.kt)("h3",{id:"create-a-model"},"Create a Model"),(0,o.kt)("p",null,"The authz-casbin plugin uses three parameters for authorization: ",(0,o.kt)("inlineCode",{parentName:"p"},"subject"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"object")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"action"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"subject")," is the username, which refers to the user in the request; ",(0,o.kt)("inlineCode",{parentName:"p"},"object")," is the URL link that will be accessed, i.e. the resource that will be accessed; and ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," is the action requested for authorization, such as read or write."),(0,o.kt)("p",null,"For example, if you want to create a model to access three resources: main page",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", resource1 ",(0,o.kt)("inlineCode",{parentName:"p"},"/res1"),", and resource2 ",(0,o.kt)("inlineCode",{parentName:"p"},"/res2"),", you will need a model that looks like the figure below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Authentication model",src:n(37501).Z})),(0,o.kt)("p",null,"In this model, all users, including Jack, have access to the main page ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),". Users with administrator privileges, such as Alice and Bob, can access all pages and resources (main page ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", resource1 ",(0,o.kt)("inlineCode",{parentName:"p"},"/res1"),", and resource 2 ",(0,o.kt)("inlineCode",{parentName:"p"},"/res2"),"). Thus, you need to restrict users without administrator privileges to access specific resources using the GET request method. The required model is shown in the code block below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\n")),(0,o.kt)("h3",{id:"create-a-policy"},"Create a Policy"),(0,o.kt)("p",null,"From the above example, the policy should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"p, *, /, GET\np, admin, *, *\ng, alice, admin\ng, bob,admin\n")),(0,o.kt)("p",null,"The matcher in the model indicates that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"(g(r.sub, p.sub) || keyMatch(r.sub, p.sub))"),": the subject in the request and the subject in the policy have the same role or the subject in the request and the subject in the policy can be matched by the built-in method keyMatch. keyMatch is a built-in function of Lua Casbin, a description of which and more can be found in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua"},"lua-casbin"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"keyMatch(r.obj, p.obj)"),": the object in the request and the object in the policy can match each other (proxy for URL links)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"keyMatch(r.act, p.act)"),": the action in the request and the action in the policy match each other (proxy for the HTTP request method).")),(0,o.kt)("h3",{id:"using-authz-casbin-on-a-route"},"Using authz-casbin on a Route"),(0,o.kt)("p",null,"Once you have created the model and policy, you can use it on the route using the APISIX admin API. To use it, you can modify model and policy's file paths at ",(0,o.kt)("inlineCode",{parentName:"p"},"authz-casbin.model_path")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"authz-casbin.policy_path"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model_path": "/path/to/model.conf",\n            "policy_path": "/path/to/policy.csv",\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,o.kt)("p",null,"In this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," is the username passed into the subject. For example, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},'"username": "user"')," to pass your defined ",(0,o.kt)("inlineCode",{parentName:"p"},"user:alice")," to username, and modify username to Alice."),(0,o.kt)("p",null,"Similarly, you can put models and policies directly into authz-casbin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model": "[request_definition]\n            r = sub, obj, act\n\n            [policy_definition]\n            p = sub, obj, act\n\n            [role_definition]\n            g = _, _\n\n            [policy_effect]\n            e = some(where (p.eft == allow))\n\n            [matchers]\n            m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n\n            "policy": "p, *, /, GET\n            p, admin, *, *\n            g, alice, admin",\n\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,o.kt)("h3",{id:"using-plug-ins-with-global-models-or-global-policies"},"Using plug-ins with Global Models or Global Policies"),(0,o.kt)("p",null,"In some cases, you may want to use the same model and policy in multiple routes. You can first send a PUT request to send the configuration of the model and policy to the plugin's metadata:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl <http://127.0.0.1:9080/apisix/admin/plugin_metadata/authz-casbin> -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\n {\n "model": "[request_definition]\n r = sub, obj, act\n [policy_definition]\n p = sub, obj, act\n [role_definition]\n g = _, _\n [policy_effect]\n e = some(where (p.eft == allow))\n [matchers]\n m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n "policy": "p, *, /, GET\n p, admin, *, *\n g, alice, admin\n g, bob, admin"\n }\'\n')),(0,o.kt)("p",null,"Then you need to use the Admin API to send requests to make multiple routes use the same model or policy configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,o.kt)("p",null,"This will add the plugin's configuration to the route dynamically. You can easily update the plugin's configuration by sending a request to update the model and policy in the plugin's configuration data."),(0,o.kt)("h2",{id:"special-thanks"},"Special Thanks"),(0,o.kt)("p",null,"Thanks to the developers in the Casbin and Apache APISIX communities, this cross-community collaboration was friendly and well organized."),(0,o.kt)("p",null,"Shout out to Casbin community's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rushitote"},"rushitote")," for submitting issues and pull request, and shout out to Apache APISIX community's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tokers"},"tokers"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Yiyiyimu"},"Yiyiyimu"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tzssangglass"},"tzssangglass")," for reviewing this pull request. Open source makes the world better."),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://rushikeshtote.com/blog/apisix-casbin-authorization"},"Authorization in APISIX using Casbin")),(0,o.kt)("p",null,"Related pull request: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4710"},"PR#4710 feat: Added authz-casbin plugin and doc and tests for it")))}h.isMDXComponent=!0},37501:function(e,t,n){t.Z=n.p+"assets/images/2021-08-25-1-2c34d7ef82b36926ba577c5508bf69bc.png"}}]);