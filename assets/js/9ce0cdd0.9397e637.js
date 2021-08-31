(self.webpackChunk=self.webpackChunk||[]).push([[46060],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(r),m=o,f=h["".concat(c,".").concat(m)]||h[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},70775:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"Chaos Mesh Helps Apache APISIX Improve System Stability",author:"Yiyiyimu",authorURL:"https://github.com/Yiyiyimu",authorImageURL:"https://avatars.githubusercontent.com/u/34589752?v=4",keywords:["API gateway","APISIX","Apache APISIX","Chaos Mesh","System Stability"],description:"This article explains how system stability create some pain points in different scenarios. Then it tells the stories of why the author chose Chaos Mesh as the ultimate solution,and how to use Chaos Mesh in Apache APISIX. In the end, there is also future plans for this solution, including run a chaos test in E2E simulation scenarios, add chaos tests to more Apache APISIX projects, and add features to Chaos Mesh."},s={permalink:"/blog/2021/08/12/Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability",source:"@site/blog/2021-08-12-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability.md",title:"Chaos Mesh Helps Apache APISIX Improve System Stability",description:"This article explains how system stability create some pain points in different scenarios. Then it tells the stories of why the author chose Chaos Mesh as the ultimate solution,and how to use Chaos Mesh in Apache APISIX. In the end, there is also future plans for this solution, including run a chaos test in E2E simulation scenarios, add chaos tests to more Apache APISIX projects, and add features to Chaos Mesh.",date:"2021-08-12T00:00:00.000Z",formattedDate:"August 12, 2021",tags:[],readingTime:5.38,truncated:!0,prevItem:{title:"\u8d21\u732e\u8005\uff0c\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807",permalink:"/blog/2021/08/14/contributors-the-golden-metric-of-openSource-projects"},nextItem:{title:"\u4ece\u65b0\u624b\u6751\u51fa\u6765\uff0c\u6211\u5728 Apache APISIX \u793e\u533a\u53d1\u51fa\u4e86\u7b2c\u4e00\u4e2a PR",permalink:"/blog/2021/08/11/interview-TuZhengsong"}},c=[],u={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Yiyiyimu"},"@Yiyiyimu"),", Apache APISIX committer.")))}p.isMDXComponent=!0}}]);