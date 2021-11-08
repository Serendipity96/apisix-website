"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58382],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53621:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i={title:"Upgrade Guide"},c=void 0,p={unversionedId:"upgrade",id:"upgrade",isDocsHomePage:!1,title:"Upgrade Guide",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/upgrade.md",sourceDirName:".",slug:"/upgrade",permalink:"/zh/docs/ingress-controller/upgrade",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/upgrade.md",tags:[],version:"current",frontMatter:{title:"Upgrade Guide"}},l=[{value:"Validate Compatibility",id:"validate-compatibility",children:[]}],s={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"validate-compatibility"},"Validate Compatibility"),(0,o.kt)("p",null,"Apache APISIX Ingress project is a continuously actively developed project.\nIn order to make it better, some broken changes will be added when the new version is released.\nFor users, how to upgrade safely becomes very important."),(0,o.kt)("p",null,"The policy directory of this project contains these compatibility check strategies,\nyou can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/conftest"},(0,o.kt)("inlineCode",{parentName:"a"},"conftest"))," tool to check the compatibility."),(0,o.kt)("p",null,"Here's a quick example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2beta2\nkind: ApisixRoute\nmetadata:\n name: httpbin-route\nspec:\n http:\n - name: rule1\n   match:\n     hosts:\n     - httpbin.org\n     paths:\n       - /ip\n     exprs:\n     - subject:\n         scope: Header\n         name: X-Foo\n       op: Equal\n       value: bar\n   backend:\n     serviceName: httpbin\n     servicePort: 80\n")),(0,o.kt)("p",null,"It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.http.backend")," field that has been removed.\nSave as httpbin-route.yaml."),(0,o.kt)("p",null,"Use conftest for compatibility check."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ conftest test httpbin-route.yaml\nFAIL - httpbin-route.yaml - main - ApisixRoute/httpbin-route: rule1 field http.backend has been removed, use http.backends instead.\n\n2 tests, 1 passed, 0 warnings, 1 failure, 0 exceptions\n")),(0,o.kt)("p",null,"Incompatible parts will generate errors."))}u.isMDXComponent=!0}}]);