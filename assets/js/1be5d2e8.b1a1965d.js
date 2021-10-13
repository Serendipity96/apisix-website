"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50818],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37363:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l={title:"Release Apache APISIX Ingress Controller 0.3.0"},o=void 0,s={permalink:"/events/2021/02/11/release-apache-apisix-ingress-controller-0.3.0",source:"@site/events/2021-02-11-release-apache-apisix-ingress-controller-0.3.0.md",title:"Release Apache APISIX Ingress Controller 0.3.0",description:"This release mainly improves the program robustness and adds some features.",date:"2021-02-11T00:00:00.000Z",formattedDate:"February 11, 2021",tags:[],readingTime:.57,truncated:!0,authors:[],prevItem:{title:"Release Apache APISIX Dashboard 2.4",permalink:"/events/2021/02/12/release-apache-apisix-dashboard-2.4"},nextItem:{title:"Release Apache APISIX 2.3",permalink:"/events/2021/02/09/release-apache-apisix-2.3"}},p={authorsImageUrls:[]},c=[{value:"Core",id:"core",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Test",id:"test",children:[]}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This release mainly improves the program robustness and adds some features."),(0,i.kt)("h2",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support Leader election to let only the leader process resources ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/173"},"#173"),";"),(0,i.kt)("li",{parentName:"ul"},"Let Controller itself generates resource ids instead of relying on APISIX ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/199"},"#199"),";"),(0,i.kt)("li",{parentName:"ul"},"Change go module name from ",(0,i.kt)("inlineCode",{parentName:"li"},"github.com/api7/ingress-controller")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"github.com/apache/apisix-ingress-controller")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/220"},"#220"),";"),(0,i.kt)("li",{parentName:"ul"},"Re draw the design diagram ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/214"},"#214"),";"),(0,i.kt)("li",{parentName:"ul"},"Support gRPC scheme in ApisixUpstream ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/225"},"#225"),";"),(0,i.kt)("li",{parentName:"ul"},"SSL resource cache optimization ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/203"},"#203"),";")),(0,i.kt)("h2",{id:"deploy"},"Deploy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complete the compatibility tests on Amazon EKS, Google Cloud GKE, Ali Cloud ACK and etc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/177"},"#177"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/180"},"#180"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/183"},"#183"),";"),(0,i.kt)("li",{parentName:"ul"},"Refactor the helm charts, merging ingress-apisix and ingress-apisix-base into apisix-ingress-controller ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/213"},"#213"),";")),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now CI runs e2e test suites in parallel ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/172"},"#172"),";")))}m.isMDXComponent=!0}}]);