(self.webpackChunk=self.webpackChunk||[]).push([[95194],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,s=m["".concat(l,".").concat(h)]||m[h]||f[h]||a;return n?r.createElement(s,c(c({ref:t},u),{},{components:n})):r.createElement(s,c({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81319:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),c={title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",author:"nic-chen",authorURL:"https://github.com/nic-chen",authorImageURL:"https://avatars0.githubusercontent.com/u/33000667",tags:["technology"]},i={permalink:"/zh/blog/2020/12/16/another-way-to-implement-envoy-filter",source:"@site/blog/2020-12-16-another-way-to-implement-envoy-filter.md",title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",description:"@nic-chen, Apache APISIX PMC from Shenzhen Zhiliu Technology Co.",date:"2020-12-16T00:00:00.000Z",formattedDate:"2020\u5e7412\u670816\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"}],readingTime:4.715,truncated:!0,prevItem:{title:"\u521d\u63a2 Kubernetes Service APIs",permalink:"/zh/blog/2020/12/18/a-first-look-at-kubernetes-service-api"},nextItem:{title:"New website for Apache APISIX",permalink:"/zh/blog/2020/08/22/new-website"}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/nic-chen"},"@nic-chen"),", Apache APISIX PMC from ",(0,a.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))))}u.isMDXComponent=!0}}]);