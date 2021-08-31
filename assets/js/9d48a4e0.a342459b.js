(self.webpackChunk=self.webpackChunk||[]).push([[84606],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(r),m=n,f=h["".concat(o,".").concat(m)]||h[m]||u[m]||l;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},96894:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return o},default:function(){return c}});var a=r(22122),n=r(19756),l=(r(67294),r(3905)),i={title:"Release Apache APISIX Ingress Controller 0.2.0",tags:["APISIX Ingress Controller"]},p={permalink:"/releases/2021/01/19/release-apache-apisix-ingress-controller-0.2.0",source:"@site/releases/2021-1-19-release-apache-apisix-ingress-controller-0.2.0.md",title:"Release Apache APISIX Ingress Controller 0.2.0",description:"This release mainly improve basic features, bugfix and adds test cases.",date:"2021-01-19T00:00:00.000Z",formattedDate:"January 19, 2021",tags:[{label:"APISIX Ingress Controller",permalink:"/releases/tags/apisix-ingress-controller"}],readingTime:.415,truncated:!1,prevItem:{title:"Release Apache APISIX 2.3",permalink:"/releases/2021/02/09/release-apache-apisix-2.3"},nextItem:{title:"Release Apache APISIX Dashboard 2.3",permalink:"/releases/2021/01/11/release-apache-apisix-dashboard-2.3"}},o=[{value:"Core",id:"core",children:[]},{value:"Test case",id:"test-case",children:[]}],s={toc:o};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This release mainly improve basic features, bugfix and adds test cases."),(0,l.kt)("h2",{id:"core"},"Core"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Enhanced documentation, easier to read and execute ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/129"},"#129")),(0,l.kt)("li",{parentName:"ul"},"API specification for CRDs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/151"},"#151")),(0,l.kt)("li",{parentName:"ul"},"Support Canary plugin (Base on the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2935"},"feature")," in Apache APISIX) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/13"},"#13")),(0,l.kt)("li",{parentName:"ul"},"Support prometheus metrics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/143"},"#143")),(0,l.kt)("li",{parentName:"ul"},"Support install ingress controller by Helm Chart ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/153"},"#153")),(0,l.kt)("li",{parentName:"ul"},"Support reconcile loop. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/149"},"#149")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/157"},"#157")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/163"},"#163")),(0,l.kt)("li",{parentName:"ul"},"Support namespaces filtering. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/162"},"#162")),(0,l.kt)("li",{parentName:"ul"},"Some Refactor. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/147"},"#147")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/155"},"#155")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/134"},"#134"))),(0,l.kt)("h2",{id:"test-case"},"Test case"),(0,l.kt)("p",null,"more e2e case ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/156"},"#156")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/142"},"#142")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")))}c.isMDXComponent=!0}}]);