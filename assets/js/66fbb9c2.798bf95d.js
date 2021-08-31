(self.webpackChunk=self.webpackChunk||[]).push([[7668],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=u(r),d=i,h=y["".concat(s,".").concat(d)]||y[d]||l[d]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},58766:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(22122),i=r(19756),a=(r(67294),r(3905)),o={id:"security",title:"Security",keywords:["API gateway","APISIX","Apache APISIX","security"],description:"If you have apprehensions regarding APISIX\u2019s security or you discover vulnerability or potential threat, don\u2019t hesitate to get in touch with the Apache Security Team by dropping a mail at security@apache.org."},c={unversionedId:"security",id:"security",isDocsHomePage:!1,title:"Security",description:"If you have apprehensions regarding APISIX\u2019s security or you discover vulnerability or potential threat, don\u2019t hesitate to get in touch with the Apache Security Team by dropping a mail at security@apache.org.",source:"@site/docs/general/security-guide.md",sourceDirName:".",slug:"/security",permalink:"/docs/general/security",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/security-guide.md",version:"current",lastUpdatedBy:"Kishani Kandasamy",lastUpdatedAt:1630308337,formattedLastUpdatedAt:"8/30/2021",frontMatter:{id:"security",title:"Security",keywords:["API gateway","APISIX","Apache APISIX","security"],description:"If you have apprehensions regarding APISIX\u2019s security or you discover vulnerability or potential threat, don\u2019t hesitate to get in touch with the Apache Security Team by dropping a mail at security@apache.org."},sidebar:"docs",next:{title:"Subscribe Guide",permalink:"/docs/general/subscribe-guide"}},s=[],u={toc:s};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. Apache APISIX is also very concerned Security issues related to its features and functionality."),(0,a.kt)("p",null,"If you have apprehensions regarding APISIX\u2019s security or you discover vulnerability or potential threat, don\u2019t hesitate to get in touch with the Apache Security Team by dropping a mail at ",(0,a.kt)("a",{parentName:"p",href:"mailto:security@apache.org."},"security@apache.org.")," Please specify the project name as APISIX and its product name APISIX or APISIX-Dashboard in the email and provide a description of the relevant problem or potential threat. You are also urged to recommend the way to reproduce and replicate the issue. The Apache Security Team and the APISIX community will get back to you after assessing and analysing the findings."),(0,a.kt)("p",null,"Please pay attention to report the security issue on the security email before disclosing it on the public domain."))}p.isMDXComponent=!0}}]);