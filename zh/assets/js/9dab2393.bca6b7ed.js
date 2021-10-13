"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36586],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),s=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(o.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),d=i,m=c["".concat(o,".").concat(d)]||c[d]||h[d]||n;return t?r.createElement(m,l(l({ref:a},u),{},{components:t})):r.createElement(m,l({ref:a},u))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,l=new Array(n);l[0]=c;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<n;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5976:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},assets:function(){return s},toc:function(){return u},default:function(){return c}});var r=t(87462),i=t(63366),n=(t(67294),t(3905)),l={title:"Release Apache APISIX Dashboard 2.7.1",tags:["APISIX Dashboard"]},p=void 0,o={permalink:"/zh/releases/2021/8/10/release-apache-apisix-dashboard-2.7.1",source:"@site/releases/2021-8-10-release-apache-apisix-dashboard-2.7.1.md",title:"Release Apache APISIX Dashboard 2.7.1",description:"This release contains some features and bugfixes, and all the existing functionalities are compatible with Apache APISIX 2.7.",date:"2021-08-10T00:00:00.000Z",formattedDate:"2021\u5e748\u670810\u65e5",tags:[{label:"APISIX Dashboard",permalink:"/zh/releases/tags/apisix-dashboard"}],readingTime:1.055,truncated:!1,authors:[],prevItem:{title:"Release Apache APISIX Ingress Controller 1.2.0",permalink:"/zh/releases/2021/8/17/release-apache-apisix-ingress-controller-1.2.0"},nextItem:{title:"Release Apache APISIX 2.8",permalink:"/zh/releases/2021/7/27/release-apache-apisix-2.8"}},s={authorsImageUrls:[]},u=[{value:"Core",id:"core",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],h={toc:u};function c(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This release contains some features and bugfixes, and all the existing functionalities are compatible with Apache APISIX 2.7."),(0,n.kt)("h3",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"chore: refactor ManagerAPI to reduce redundant code and improve readability ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1956"},"#1956")),(0,n.kt)("li",{parentName:"ul"},"chore: add required flag for Route name field ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2025"},"#2025")),(0,n.kt)("li",{parentName:"ul"},"feat: remove the Version Match logics ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2023"},"2023")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2038"},"#2038")),(0,n.kt)("li",{parentName:"ul"},"feat(i18n): improve Web to have a better i18n description ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1973"},"#1973")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1963"},"#1963")),(0,n.kt)("li",{parentName:"ul"},"feat(Upstream): set a initial weight value for the upstream node ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1979"},"#1979")),(0,n.kt)("li",{parentName:"ul"},"feat(Plugin): allowing limit-req to dynamically adapt to the BE rules ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1995"},"#1995")),(0,n.kt)("li",{parentName:"ul"},"feat(Plugin): allowing limit-conn to dynamically adapt to the BE rules ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1990"},"#1990")),(0,n.kt)("li",{parentName:"ul"},"feat(Route): support uri/uris/remote_addr/remote_addrs/host/hosts ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2046"},"#2046"))),(0,n.kt)("h3",{id:"bugfix"},"Bugfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix(Plugin): only auth type plugin need to configure ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1983"},"1983")),(0,n.kt)("li",{parentName:"ul"},"fix(Plugin): add nodelay for limit-req plugin ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2021"},"#2021")),(0,n.kt)("li",{parentName:"ul"},"fix(Route): add the missing operators ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2022"},"#2022")),(0,n.kt)("li",{parentName:"ul"},"fix(Route): support websocket enable in route ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2052"},"#2042")),(0,n.kt)("li",{parentName:"ul"},"fix(Consumer): remove the extra ",(0,n.kt)("inlineCode",{parentName:"li"},"undefined")," user ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1987"},"#1987")),(0,n.kt)("li",{parentName:"ul"},"fix(Upstream): make service chash key Input inputable and selectable ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1982"},"#1982")),(0,n.kt)("li",{parentName:"ul"},"fix(Upstream): update hash_on field and limitation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2034"},"#2034")),(0,n.kt)("li",{parentName:"ul"},"fix(Web): omit all ",(0,n.kt)("inlineCode",{parentName:"li"},"null")," value from request body ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2042"},"#2042")),(0,n.kt)("li",{parentName:"ul"},"fix(Web): redirect uri when session expired ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2044"},"#2044")),(0,n.kt)("li",{parentName:"ul"},"fix(Web): update the sidebar menu position ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2051"},"#2051")),(0,n.kt)("li",{parentName:"ul"},"fix(ManagerAPI): avoid nil pointer dereference and remove redundant code ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2031"},"#2031")),(0,n.kt)("li",{parentName:"ul"},"fix(ManagerAPI): support running ManagerAPI on Windows ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1947"},"#1947"))))}c.isMDXComponent=!0}}]);