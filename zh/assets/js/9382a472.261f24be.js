"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56580],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,h=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},55765:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i={title:"Release Apache APISIX Dashboard 2.6.1",tags:["APISIX Dashboard"]},s=void 0,l={permalink:"/zh/releases/2021/5/27/release-apache-apisix-dashboard-2.6.1",source:"@site/releases/2021-5-27-release-apache-apisix-dashboard-2.6.1.md",title:"Release Apache APISIX Dashboard 2.6.1",description:"This release mainly contains bugfixes.",date:"2021-05-27T00:00:00.000Z",formattedDate:"2021\u5e745\u670827\u65e5",tags:[{label:"APISIX Dashboard",permalink:"/zh/releases/tags/apisix-dashboard"}],readingTime:.225,truncated:!1,authors:[],prevItem:{title:"Release Apache APISIX Dashboard 2.7",permalink:"/zh/releases/2021/6/15/release-apache-apisix-dashboard-2.7"},nextItem:{title:"Release Apache APISIX 2.6",permalink:"/zh/releases/2021/5/24/release-apache-apisix-2.6"}},c={authorsImageUrls:[]},p=[{value:"Bugfix",id:"bugfix",children:[]}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release mainly contains bugfixes."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Manager API")," 2.6.1 should be used with ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"Apache APISIX 2.5"),". It is not recommended to use with other Apache APISIX versions."),(0,o.kt)("h3",{id:"bugfix"},"Bugfix"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix: use remote address instead of client ip ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1831"},"#1831")),(0,o.kt)("li",{parentName:"ul"},"Fix: turn off online debug ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1903"},"#1903"))))}f.isMDXComponent=!0}}]);