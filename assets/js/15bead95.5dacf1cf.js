"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60850],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),s=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(t),d=i,m=h["".concat(o,".").concat(d)]||h[d]||c[d]||n;return t?r.createElement(m,p(p({ref:a},u),{},{components:t})):r.createElement(m,p({ref:a},u))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,p=new Array(n);p[0]=h;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var s=2;s<n;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},84675:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return o},assets:function(){return s},toc:function(){return u},default:function(){return h}});var r=t(87462),i=t(63366),n=(t(67294),t(3905)),p={title:"Release Apache APISIX Dashboard 2.7",tags:["APISIX Dashboard"]},l=void 0,o={permalink:"/releases/2021/6/15/release-apache-apisix-dashboard-2.7",source:"@site/releases/2021-6-15-release-apache-apisix-dashboard-2.7.md",title:"Release Apache APISIX Dashboard 2.7",description:"This release mainly improves basic features, bugfix and adds test cases.",date:"2021-06-15T00:00:00.000Z",formattedDate:"June 15, 2021",tags:[{label:"APISIX Dashboard",permalink:"/releases/tags/apisix-dashboard"}],readingTime:1.1,truncated:!1,authors:[],prevItem:{title:"Release Apache APISIX Ingress Controller 1.0.0",permalink:"/releases/2021/6/16/release-apache-apisix-ingress-controller-1.0.0"},nextItem:{title:"Release Apache APISIX Dashboard 2.6.1",permalink:"/releases/2021/5/27/release-apache-apisix-dashboard-2.6.1"}},s={authorsImageUrls:[]},u=[{value:"Core",id:"core",children:[]},{value:"Bugfix",id:"bugfix",children:[]},{value:"Test Case",id:"test-case",children:[]}],c={toc:u};function h(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This release mainly improves basic features, bugfix and adds test cases."),(0,n.kt)("p",null,"Note: ",(0,n.kt)("inlineCode",{parentName:"p"},"Manager API")," 2.7 should be used with ",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"Apache APISIX 2.6"),". It is not recommended to use it with other Apache APISIX versions."),(0,n.kt)("h3",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Feat: support HTTPS for Manager API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1824"},"#1824")),(0,n.kt)("li",{parentName:"ul"},"Feat: run manager-api as an OS agnostic service ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1667"},"#1667")),(0,n.kt)("li",{parentName:"ul"},"Feat: refactor Plugin Orchestration ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1813"},"#1813")),(0,n.kt)("li",{parentName:"ul"},"Feat: add the service page upstream select option ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1633"},"#1633")),(0,n.kt)("li",{parentName:"ul"},"Feat: improve the Duplicate Route feature ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1833"},"#1833")),(0,n.kt)("li",{parentName:"ul"},"Feat: add api of config migrate, export and import ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1893"},"#1893"))),(0,n.kt)("h3",{id:"bugfix"},"Bugfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix: can not configure upstream with no nodes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1812"},"#1812")),(0,n.kt)("li",{parentName:"ul"},"Fix: add missing label in nodes component ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1823"},"#1823")),(0,n.kt)("li",{parentName:"ul"},"Fix: when create the upstream, some properties can still be edited on the preview page bug ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1828"},"#1828")),(0,n.kt)("li",{parentName:"ul"},"Fix: default cors plugin formdata validation error ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1855"},"#1855")),(0,n.kt)("li",{parentName:"ul"},"Fix: generate a uid when post a route without id ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1883"},"#1883")),(0,n.kt)("li",{parentName:"ul"},"Fix: route page Portable ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1887"},"#1887")),(0,n.kt)("li",{parentName:"ul"},"Fix: invalid import issues ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1899"},"#1899")),(0,n.kt)("li",{parentName:"ul"},"Fix: efficient error handling in manager-api including graceful shutdown, self contained methods. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1814"},"#1814")),(0,n.kt)("li",{parentName:"ul"},"Fix: regex & omit vars when no value ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1921"},"#1921"))),(0,n.kt)("h3",{id:"test-case"},"Test Case"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Test: fix unstable FE E2E test case ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1826"},"#1826")),(0,n.kt)("li",{parentName:"ul"},"CI: fix gitleaks not allowed running ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1897"},"#1897")),(0,n.kt)("li",{parentName:"ul"},"Test: refactor FE E2E test case (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1844"},"#1844")," to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1878"},"#1878")," and a series of PRs)")))}h.isMDXComponent=!0}}]);