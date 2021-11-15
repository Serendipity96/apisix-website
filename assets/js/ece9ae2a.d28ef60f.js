"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24802],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81883:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),i={title:"User Guide"},o=void 0,l={unversionedId:"USER_GUIDE",id:"version-2.5/USER_GUIDE",isDocsHomePage:!1,title:"User Guide",description:"\x3c!--",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.5/USER_GUIDE.md",sourceDirName:".",slug:"/USER_GUIDE",permalink:"/docs/dashboard/2.5/USER_GUIDE",editUrl:"https://github.com/apache/apisix-dashboard/edit/release/2.5/docs/en/latest/USER_GUIDE.md",tags:[],version:"2.5",frontMatter:{title:"User Guide"},sidebar:"version-2.5/docs",next:{title:"Import OpenAPI Guide",permalink:"/docs/dashboard/2.5/IMPORT_OPENAPI_USER_GUIDE"}},p=[{value:"Metrics",id:"metrics",children:[]},{value:"Route",id:"route",children:[{value:"List",id:"list",children:[]},{value:"Create",id:"create",children:[]},{value:"Online debug",id:"online-debug",children:[]}]},{value:"Setting",id:"setting",children:[]}],u={toc:p};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The following are parts of the modules' snapshot."),(0,s.kt)("h2",{id:"metrics"},"Metrics"),(0,s.kt)("p",null,"We support the monitor page by referencing it in ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},"iframe"),". Before accessing ",(0,s.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana"),", please Enable ",(0,s.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/administration/configuration/#allow_embedding"},(0,s.kt)("inlineCode",{parentName:"a"},"allow_embedding=true")),", which defaults to ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),". This causes the browser to fail to render Grafana pages properly due to security policies."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48355572/122654587-33291100-d16a-11eb-8c39-735e02ee9768.png",alt:"metrics-en"})),(0,s.kt)("h2",{id:"route"},"Route"),(0,s.kt)("p",null,"The Route module aims to control routes by UI instead of calling APIs."),(0,s.kt)("h3",{id:"list"},"List"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-dashboard@release/2.5/docs/assets/images/route-list-en.png",alt:"route-list"})),(0,s.kt)("h3",{id:"create"},"Create"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48355572/122654608-505ddf80-d16a-11eb-957d-333e23b90ec2.png",alt:"route-create-step1-en"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48355572/122654628-6e2b4480-d16a-11eb-9272-1460c60af3f0.png",alt:"route-create-step2-en"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48355572/122654650-813e1480-d16a-11eb-8dcd-5866db1f793b.png",alt:"route-create-step3-en"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48355572/122654659-90bd5d80-d16a-11eb-8d36-8a0fd8ef2a00.png",alt:"route-create-step4-en"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-dashboard@release/2.5/docs/assets/images/route-create-done-list-en.png",alt:"route-create-done-list-en"})),(0,s.kt)("h3",{id:"online-debug"},"Online debug"),(0,s.kt)("p",null,"We can debug a route both published or offline with the online debug function, which is located in the routes list page."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Debug a published route")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-dashboard@release/2.5/docs/assets/images/route-debug-published.png",alt:"route-debug-published"})),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Debug a offline route")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48355572/122654680-b8acc100-d16a-11eb-92bc-75336fff32b8.png",alt:"route-debug-offline"})),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Debug a published route with query params")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-dashboard@release/2.5/docs/assets/images/route-debug-query-params.png",alt:"route-debug-query-params"})),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Debug a published route with header params")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-dashboard@release/2.5/docs/assets/images/route-debug-header-params.png",alt:"route-debug-header-params"})),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"Debug a published route with body params")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-dashboard@release/2.5/docs/assets/images/route-debug-body-params.png",alt:"route-debug-body-params"})),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"Debug a published route with basic auth")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix-dashboard@release/2.5/docs/assets/images/route-debug-basic-auth.png",alt:"route-debug-basic-auth"})),(0,s.kt)("h2",{id:"setting"},"Setting"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/48355572/122654699-d67a2600-d16a-11eb-989b-05ff577e1039.png",alt:"setting"})))}c.isMDXComponent=!0}}]);