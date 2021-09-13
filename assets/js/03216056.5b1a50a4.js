"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50561],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=o(a),m=i,f=h["".concat(u,".").concat(m)]||h[m]||c[m]||n;return a?r.createElement(f,l(l({ref:t},s),{},{components:a})):r.createElement(f,l({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=h;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var o=2;o<n;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9535:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),l={title:"Release Apache APISIX 2.2",tags:["APISIX"]},p={permalink:"/releases/2021/01/08/release-apache-apisix-2.2",source:"@site/releases/2021-1-8-release-apache-apisix-2.2.md",title:"Release Apache APISIX 2.2",description:"Change",date:"2021-01-08T00:00:00.000Z",formattedDate:"January 8, 2021",tags:[{label:"APISIX",permalink:"/releases/tags/apisix"}],readingTime:1.27,truncated:!1,prevItem:{title:"Release Apache APISIX Dashboard 2.3",permalink:"/releases/2021/01/11/release-apache-apisix-dashboard-2.3"},nextItem:{title:"Release Apache APISIX Ingress Controller 0.1.0",permalink:"/releases/2020/12/23/release-apache-apisix-ingress-controller-0.1.0"}},u=[{value:"Change",id:"change",children:[]},{value:"Core",id:"core",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],o={toc:u};function s(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"change"},"Change"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"disable node-status plugin by default ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2968"},"#2968")),(0,n.kt)("li",{parentName:"ul"},"k8s_deployment_info is no longer allowed in upstream ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3098"},"#3098")),(0,n.kt)("li",{parentName:"ul"},"don't treat route segment with ':' as parameter by default ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3154"},"#3154"))),(0,n.kt)("h3",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 allow create consumers with multiple auth plugins ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2898"},"#2898")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 increase the delay before resync etcd ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2977"},"#2977")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 support enable/disable route ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2943"},"#2943")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 route according to the graphql attributes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2964"},"#2964")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 share etcd auth token ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2932"},"#2932")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 add control API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3048"},"#3048"))),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(limt-count): use 'remote_addr' as default key ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2927"},"#2927")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(fault-injection): support Nginx variable in abort.body ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2986"},"#2986")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: implement new plugin ",(0,n.kt)("inlineCode",{parentName:"li"},"server-info")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2926"},"#2926")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: add batch process metrics ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3070"},"#3070")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: Implement traffic splitting plugin ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2935"},"#2935")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat:  the proxy-rewrite plugin  support pass nginx variable within header ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3144"},"#3144")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: Make headers to add to request in openid-connect plugin configurable ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2903"},"#2903")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support var in upstream_uri on proxy-rewrite plugin ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3139"},"#3139"))),(0,n.kt)("h3",{id:"bugfix"},"Bugfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"basic-auth plugin should run in rewrite phases. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2905"},"#2905")),(0,n.kt)("li",{parentName:"ul"},"fixed the non effective config update in http/udp-logger ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2901"},"#2901")),(0,n.kt)("li",{parentName:"ul"},"always necessary to save the data of the limit concurrency, and release the statistical status in the log phase ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2465"},"#2465")),(0,n.kt)("li",{parentName:"ul"},"avoid duplicate auto-generated id ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3003"},"#3003")),(0,n.kt)("li",{parentName:"ul"},"fix: ctx being contaminated due to a new feature of openresty 1.19. ",(0,n.kt)("strong",{parentName:"li"},"For openresty 1.19 users, it is recommended to upgrade the APISIX version as soon as possible.")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3105"},"#3105")),(0,n.kt)("li",{parentName:"ul"},"fix: correct the validation of route.vars ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3124"},"#3124"))),(0,n.kt)("p",null,"For more changes, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/milestone/10"},"Milestone")))}s.isMDXComponent=!0}}]);