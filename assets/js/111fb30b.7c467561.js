"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30960],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=u(a),m=i,f=h["".concat(o,".").concat(m)]||h[m]||s[m]||n;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},33676:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},assets:function(){return u},toc:function(){return c},default:function(){return h}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),l={title:"Release Apache APISIX 2.5",tags:["APISIX"]},p=void 0,o={permalink:"/releases/2021/4/5/release-apache-apisix-2.5",source:"@site/releases/2021-4-5-release-apache-apisix-2.5.md",title:"Release Apache APISIX 2.5",description:"The changes marked with are not backward compatible.",date:"2021-04-05T00:00:00.000Z",formattedDate:"April 5, 2021",tags:[{label:"APISIX",permalink:"/releases/tags/apisix"}],readingTime:1.08,truncated:!1,authors:[],prevItem:{title:"Release Apache APISIX Ingress Controller 0.5.0",permalink:"/releases/2021/4/13/release-apache-apisix-ingress-controller-0.5.0"},nextItem:{title:"Release Apache APISIX Dashboard 2.5",permalink:"/releases/2021/3/29/release-apache-apisix-dashboard-2.5"}},u={authorsImageUrls:[]},c=[{value:"Change",id:"change",children:[]},{value:"Core",id:"core",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],s={toc:c};function h(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The changes marked with \u26a0\ufe0f are not backward compatible."),"\n",(0,n.kt)("strong",{parentName:"p"},"Please upgrade your data accordingly before upgrading to this version."),"\n",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/apache/apisix/pull/3809"},"#3809")," Means that empty vars will make the route fail to match any requests.")),(0,n.kt)("h3",{id:"change"},"Change"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u26a0\ufe0f change: remove unused consumer.id  ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3868"},"#3868")),(0,n.kt)("li",{parentName:"ul"},"\u26a0\ufe0f change: remove deprecated upstream.enable_websocket ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3854"},"#3854")),(0,n.kt)("li",{parentName:"ul"},"change(zipkin): rearrange the child span ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3877"},"#3877"))),(0,n.kt)("h3",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support mTLS with etcd ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3905"},"#3905")),(0,n.kt)("li",{parentName:"ul"},"\u26a0\ufe0f feat: upgrade lua-resty-expr/radixtree to support logical expression ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3809"},"#3809")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: load etcd configuration when apisix starts ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3799"},"#3799")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: let balancer support priority ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3755"},"#3755")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: add control api for discovery module ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3742"},"#3742"))),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(skywalking):  allow destroy and configure report interval for reporter ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3925"},"#3925")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(traffic-split): the upstream pass_host needs to support IP mode ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3870"},"#3870")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: Add filter on HTTP methods for consumer-restriction plugin ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3691"},"#3691")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: add allow_origins_by_regex to cors plugin ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3839"},"#3839")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support conditional response rewrite ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3577"},"#3577"))),(0,n.kt)("h3",{id:"bugfix"},"Bugfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix(error-log-logger): the logger should be run in each process ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3912"},"#3912")),(0,n.kt)("li",{parentName:"ul"},"fix: use the builtin server by default ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3907"},"#3907")),(0,n.kt)("li",{parentName:"ul"},"fix(traffic-split): binding upstream via upstream_id is invalid ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3842"},"#3842")),(0,n.kt)("li",{parentName:"ul"},"fix: correct the validation for ssl_trusted_certificate ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3832"},"#3832")),(0,n.kt)("li",{parentName:"ul"},"fix: don't override cache relative headers ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3789"},"#3789")),(0,n.kt)("li",{parentName:"ul"},"fix: fail to run ",(0,n.kt)("inlineCode",{parentName:"li"},"make deps")," on macOS ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3718"},"#3718"))))}h.isMDXComponent=!0}}]);