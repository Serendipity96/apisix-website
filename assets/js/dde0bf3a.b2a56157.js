(self.webpackChunk=self.webpackChunk||[]).push([[2655],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,g=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(g,c(c({ref:t},l),{},{components:r})):n.createElement(g,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65831:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return i},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),c={title:"Go \u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc",author:"spacewander",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Go","APISIX","APISIX Go \u63d2\u4ef6","APISIX Go plugin","apisix-go-plugin-runner","Golang"],tags:["technology"]},p={permalink:"/blog/2021/08/19/go-makes-Apache-APISIX-better",source:"@site/blog/2021-08-19-go-makes-Apache-APISIX-better.md",title:"Go \u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc",description:"@spacewander, Apache APISIX Committer from API7.ai.",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:2.665,truncated:!0,prevItem:{title:"Apache APISIX Meetup \u4e0a\u6d77\u7ad9\u5168\u7a0b\u56de\u987e",permalink:"/blog/2021/08/24/shanghai-meetup-recap"},nextItem:{title:"\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Casbin \u8fdb\u884c\u6388\u6743",permalink:"/blog/2021/08/18/Auth-with-Casbin-in-Apache-APISIX"}},i=[],u={toc:i};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"@spacewander"),", Apache APISIX Committer from ",(0,a.kt)("a",{parentName:"p",href:"https://www.apiseven.com/en"},"API7.ai"),".")))}l.isMDXComponent=!0}}]);