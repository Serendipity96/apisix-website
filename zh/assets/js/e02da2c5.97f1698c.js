(self.webpackChunk=self.webpackChunk||[]).push([[95194],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=o,h=m["".concat(p,".").concat(s)]||m[s]||f[s]||a;return n?r.createElement(h,c(c({ref:t},l),{},{components:n})):r.createElement(h,c({ref:t},l))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81319:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return l}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),c={title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",author:"nic-chen",authorURL:"https://github.com/nic-chen",authorImageURL:"https://avatars0.githubusercontent.com/u/33000667"},i={permalink:"/zh/blog/2020/12/16/another-way-to-implement-envoy-filter",source:"@site/blog/2020-12-16-another-way-to-implement-envoy-filter.md",title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",description:"@nic-chen, Apache APISIX PMC from Shenzhen Zhiliu Technology Co.",date:"2020-12-16T00:00:00.000Z",formattedDate:"December 16, 2020",tags:[],readingTime:4.715,truncated:!0,prevItem:{title:"\u521d\u63a2 Kubernetes Service APIs",permalink:"/zh/blog/2020/12/18/a-first-look-at-kubernetes-service-api"},nextItem:{title:"New website for Apache APISIX",permalink:"/zh/blog/2020/08/22/new-website"}},p=[],u={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/nic-chen"},"@nic-chen"),", Apache APISIX PMC from ",(0,a.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))))}l.isMDXComponent=!0}}]);