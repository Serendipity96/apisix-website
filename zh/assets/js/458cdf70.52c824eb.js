"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40196],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99974:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),c={title:"Global rule"},o=void 0,l={unversionedId:"architecture-design/global-rule",id:"architecture-design/global-rule",isDocsHomePage:!1,title:"Global rule",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/architecture-design/global-rule.md",sourceDirName:"architecture-design",slug:"/architecture-design/global-rule",permalink:"/zh/docs/apisix/next/architecture-design/global-rule",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/architecture-design/global-rule.md",tags:[],version:"current",frontMatter:{title:"Global rule"},sidebar:"docs",previous:{title:"Upstream",permalink:"/zh/docs/apisix/next/architecture-design/upstream"},next:{title:"Plugin Config",permalink:"/zh/docs/apisix/next/architecture-design/plugin-config"}},u=[],p={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/plugin"},"Plugin")," \u914d\u7f6e\u53ef\u76f4\u63a5\u7ed1\u5b9a\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/route"},"Route")," \u4e0a\uff0c\u4e5f\u53ef\u4ee5\u88ab\u7ed1\u5b9a\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/service"},"Service")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/consumer"},"Consumer")," \u4e0a\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u80fd\u4f5c\u7528\u4e8e\u6240\u6709\u8bf7\u6c42\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/plugin"},"Plugin")," \u8be5\u600e\u4e48\u529e\u5462\uff1f\n\u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalRule")," \u6765\u6ce8\u518c\u4e00\u4e2a\u5168\u5c40\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/architecture-design/plugin"},"Plugin"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \\\n  https://{apisix_listen_address}/apisix/admin/global_rules/1 \\\n  -H \'Content-Type: application/json\' \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n  -d \'{\n        "plugins": {\n            "limit-count": {\n                "time_window": 60,\n                "policy": "local",\n                "count": 2,\n                "key": "remote_addr",\n                "rejected_code": 503\n            }\n        }\n    }\'\n')),(0,a.kt)("p",null,"\u5982\u4e0a\u6240\u6ce8\u518c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\u5c06\u4f1a\u4f5c\u7528\u4e8e\u6240\u6709\u7684\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u63a5\u53e3\u67e5\u770b\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalRule"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://{apisix_listen_address}/apisix/admin/global_rules -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")))}s.isMDXComponent=!0}}]);