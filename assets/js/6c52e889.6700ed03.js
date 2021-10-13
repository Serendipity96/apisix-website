"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31031],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=o(a),m=n,f=h["".concat(c,".").concat(m)]||h[m]||s[m]||i;return a?r.createElement(f,p(p({ref:t},u),{},{components:a})):r.createElement(f,p({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var o=2;o<i;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},86129:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return o},toc:function(){return u},default:function(){return h}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),p={title:"Release Apache APISIX 2.7",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","Release Notes","APISIX 2.7"],description:"Apache APISIX 2.7 is released on June 25th, 2021. This article is the release notes for Apache APISIX 2.7, it contains changes, core feature updates, plugins updates and bug fixes information of Apache APISIX 2.7."},l=void 0,c={permalink:"/events/2021/06/25/release-apache-apisix-2.7",source:"@site/events/2021-06-25-release-apache-apisix-2.7.md",title:"Release Apache APISIX 2.7",description:"Apache APISIX 2.7 is released on June 25th, 2021. This article is the release notes for Apache APISIX 2.7, it contains changes, core feature updates, plugins updates and bug fixes information of Apache APISIX 2.7.",date:"2021-06-25T00:00:00.000Z",formattedDate:"June 25, 2021",tags:[],readingTime:.91,truncated:!0,authors:[],prevItem:{title:"Apache APISIX \u793e\u533a\u5468\u62a5 \uff5c 2021\u5e748\u67089\u65e5\uff5e8\u670815\u65e5",permalink:"/events/2021/08/19/weekly-report"},nextItem:{title:"Release Apache APISIX Dashboard 2.7",permalink:"/events/2021/06/15/release-apache-apisix-dashboard-2.7"}},o={authorsImageUrls:[]},u=[{value:"Change",id:"change",children:[]},{value:"Core",id:"core",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],s={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"change"},"Change"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"change: check metadata_schema with check_schema like the other schema ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4381"},"#4381")),(0,i.kt)("li",{parentName:"ul"},"change(echo): remove odd auth_value ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4055"},"#4055")),(0,i.kt)("li",{parentName:"ul"},"fix(admin): correct the resources' count field and change its type to integer ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4385"},"#4385"))),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(stream): support client certificate verification ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4445"},"#4445")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(stream): accept tls over tcp ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4409"},"#4409")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(stream): support domain in the upstream ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4386"},"#4386")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(cli): wrap nginx quit cmd ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4360"},"#4360")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: allow to set custom timeout for route ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4340"},"#4340")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: nacos discovery support group ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4325"},"#4325")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: nacos discovery support namespace ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4313"},"#4313"))),(0,i.kt)("h3",{id:"plugin"},"Plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(client-control): set client_max_body_size dynamically ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4423"},"#4423")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(ext-plugin): stop the runner with SIGTERM ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4367"},"#4367")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(limit-req) support nodelay ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4395"},"#4395")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(mqtt-proxy): support domain ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4391"},"#4391")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(redirect): support appending query string ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4298"},"#4298"))),(0,i.kt)("h3",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fix: solve memory leak when the client aborts ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4405"},"#4405")),(0,i.kt)("li",{parentName:"ul"},"fix(etcd): check res.body.error before accessing the data ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4371"},"#4371")),(0,i.kt)("li",{parentName:"ul"},"fix(ext-plugin): when token is stale, refresh token and try again ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4345"},"#4345")),(0,i.kt)("li",{parentName:"ul"},"fix(ext-plugin): pass environment variables ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4349"},"#4349")),(0,i.kt)("li",{parentName:"ul"},"fix: ensure the plugin is always reloaded ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4319"},"#4319"))))}h.isMDXComponent=!0}}]);