(self.webpackChunk=self.webpackChunk||[]).push([[93690],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),s=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(t),d=i,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||n;return t?r.createElement(m,l(l({ref:a},c),{},{components:t})):r.createElement(m,l({ref:a},c))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,l=new Array(n);l[0]=h;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<n;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7338:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return c}});var r=t(22122),i=t(19756),n=(t(67294),t(3905)),l={title:"Release Apache APISIX Dashboard 2.8",tags:["APISIX Dashboard"]},p={permalink:"/releases/2021/09/07/release-apache-apisix-dashboard-2.8",source:"@site/releases/2021-9-7-release-apache-apisix-dashboard-2.8.md",title:"Release Apache APISIX Dashboard 2.8",description:"This release contains some features and bugfixes, and all the existing functionalities are compatible with Apache APISIX 2.9.",date:"2021-09-07T00:00:00.000Z",formattedDate:"September 7, 2021",tags:[{label:"APISIX Dashboard",permalink:"/releases/tags/apisix-dashboard"}],readingTime:.95,truncated:!1,nextItem:{title:"Release Apache APISIX Go Plugin Runner 0.2.0",permalink:"/releases/2021/09/03/release-apache-apisix-go-plugin-runner-0.2.0"}},o=[{value:"Core",id:"core",children:[]},{value:"Bugfix",id:"bugfix",children:[]},{value:"Docs",id:"docs",children:[]}],s={toc:o};function c(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This release contains some features and bugfixes, and all the existing functionalities are compatible with Apache APISIX 2.9."),(0,n.kt)("h3",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feat: add new route matching param position ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1984"},"#1984")),(0,n.kt)("li",{parentName:"ul"},"feat: add redis-cluster policy tips for limit-count ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2058"},"#2058")),(0,n.kt)("li",{parentName:"ul"},"feat: add service discovery config ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2081"},"#2081")),(0,n.kt)("li",{parentName:"ul"},"feat: Use build-tools v2.0.0 instead of master ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2083"},"#2083")),(0,n.kt)("li",{parentName:"ul"},"feat: basic support Apache APISIX 2.9 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2117"},"#2117")),(0,n.kt)("li",{parentName:"ul"},"feat: upstream support FQDN ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/commit/1a0b12bf70489104cd996848ded19ad3bdc6902f"},"#2118")),(0,n.kt)("li",{parentName:"ul"},"feat: allowing api-breaker to dynamically adapt to the BE rules ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1974"},"#1974")),(0,n.kt)("li",{parentName:"ul"},"feat: allowing cors to dynamically adapt to the BE rules ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1994"},"#1994")),(0,n.kt)("li",{parentName:"ul"},"feat: allowing limit-count to dynamically adapt to the BE rules ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1998"},"#1998")),(0,n.kt)("li",{parentName:"ul"},"feat: allowing proxy-mirror to dynamically adapt to the BE rules ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2000"},"#2000")),(0,n.kt)("li",{parentName:"ul"},"feat: add cors method option ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2103"},"#2103")),(0,n.kt)("li",{parentName:"ul"},"feat: add el7 in package name ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2074"},"#2074")),(0,n.kt)("li",{parentName:"ul"},"feat: Bump apisix-build-tools to v2.1.0 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2101"},"#2101"))),(0,n.kt)("h3",{id:"bugfix"},"Bugfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix: avoid nil pointer dereference in route export ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2061"},"#2061")),(0,n.kt)("li",{parentName:"ul"},"fix: after enable redirect HTTPS, websocket form field disappeared ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2115"},"#2115")),(0,n.kt)("li",{parentName:"ul"},"fix: make route name validate rules in Apisix Dashboard the same as Admin API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2085"},"#2085"))),(0,n.kt)("h3",{id:"docs"},"Docs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"docs: add how to integrate with grafana preview link ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1697"},"#1697"))))}c.isMDXComponent=!0}}]);