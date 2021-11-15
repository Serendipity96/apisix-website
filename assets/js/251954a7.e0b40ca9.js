"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23769],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(g,s(s({ref:t},p),{},{components:r})):a.createElement(g,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45975:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s={title:"User Guide"},i=void 0,u={unversionedId:"USER_GUIDE",id:"version-2.6/USER_GUIDE",isDocsHomePage:!1,title:"User Guide",description:"\x3c!--",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.6/USER_GUIDE.md",sourceDirName:".",slug:"/USER_GUIDE",permalink:"/docs/dashboard/2.6/USER_GUIDE",editUrl:"https://github.com/apache/apisix-dashboard/edit/release/2.6/docs/en/latest/USER_GUIDE.md",tags:[],version:"2.6",frontMatter:{title:"User Guide"},sidebar:"version-2.6/docs",next:{title:"Import OpenAPI Guide",permalink:"/docs/dashboard/2.6/IMPORT_OPENAPI_USER_GUIDE"}},l=[{value:"Dashboard",id:"dashboard",children:[]},{value:"Route",id:"route",children:[{value:"List",id:"list",children:[]},{value:"Create",id:"create",children:[]},{value:"Online debug",id:"online-debug",children:[]}]},{value:"Setting",id:"setting",children:[]}],p={toc:l};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following are parts of the modules' snapshot."),(0,o.kt)("h2",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"We support the monitor page by referencing it in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},"iframe"),". Before accessing ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana"),", please Enable ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/administration/configuration/#allow_embedding"},(0,o.kt)("inlineCode",{parentName:"a"},"allow_embedding=true")),", which defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". This causes the browser to fail to render Grafana pages properly due to security policies."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40708551/112922395-0eed0380-912a-11eb-8c92-4c67d2bae4a8.png",alt:"Dashboard-en"})),(0,o.kt)("h2",{id:"route"},"Route"),(0,o.kt)("p",null,"The Route module aims to control routes by UI instead of calling APIs."),(0,o.kt)("h3",{id:"list"},"List"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40708551/112922389-0c8aa980-912a-11eb-8c45-b13192b3775d.png",alt:"route-list"})),(0,o.kt)("h3",{id:"create"},"Create"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40708551/112922912-ef0a0f80-912a-11eb-9d33-63d7215f7cfd.png",alt:"route-create-step1-en"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40708551/112923105-44462100-912b-11eb-8e1f-6548a6c28c35.png",alt:"route-create-step2-en"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40708551/112923140-545e0080-912b-11eb-9aef-d26b2c564efe.png",alt:"route-create-step3-en"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40708551/112923257-971fd880-912b-11eb-820c-1f2ca381304a.png",alt:"route-create-step4-en"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40708551/112923280-a0a94080-912b-11eb-8b83-3960778ecf8a.png",alt:"route-create-done-list-en"})),(0,o.kt)("h3",{id:"online-debug"},"Online debug"),(0,o.kt)("p",null,"We can debug a route both published or offline with the online debug function, which is located in the routes list page."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Debug a published route")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-dashboard@release/2.6/docs/assets/images/route-debug-published.png",alt:"route-debug-published"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Debug a offline route")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40708551/112923419-e5cd7280-912b-11eb-8e7e-57c3c4fe31ef.png",alt:"route-debug-offline"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Debug a published route with query params")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-dashboard@release/2.6/docs/assets/images/route-debug-query-params.png",alt:"route-debug-query-params"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Debug a published route with header params")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-dashboard@release/2.6/docs/assets/images/route-debug-header-params.png",alt:"route-debug-header-params"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Debug a published route with body params")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-dashboard@release/2.6/docs/assets/images/route-debug-body-params.png",alt:"route-debug-body-params"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Debug a published route with basic auth")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-dashboard@release/2.6/docs/assets/images/route-debug-basic-auth.png",alt:"route-debug-basic-auth"})),(0,o.kt)("h2",{id:"setting"},"Setting"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40708551/112923561-22996980-912c-11eb-926f-45177500eb65.png",alt:"setting"})))}c.isMDXComponent=!0}}]);