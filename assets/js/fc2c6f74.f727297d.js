"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15102],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),p=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return t?i.createElement(m,a(a({ref:n},c),{},{components:t})):i.createElement(m,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45455:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),a={title:"Plugin"},l=void 0,u={unversionedId:"architecture-design/plugin",id:"version-2.10/architecture-design/plugin",isDocsHomePage:!1,title:"Plugin",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10/architecture-design/plugin.md",sourceDirName:"architecture-design",slug:"/architecture-design/plugin",permalink:"/docs/apisix/2.10/architecture-design/plugin",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/plugin.md",tags:[],version:"2.10",frontMatter:{title:"Plugin"},sidebar:"version-2.10/docs",previous:{title:"Route",permalink:"/docs/apisix/2.10/architecture-design/route"},next:{title:"Script",permalink:"/docs/apisix/2.10/architecture-design/script"}},p=[{value:"Hot reload",id:"hot-reload",children:[{value:"Hot reload in stand-alone mode",id:"hot-reload-in-stand-alone-mode",children:[]}]}],c={toc:p};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Plugin")," represents the plugin configuration that will be executed during the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP")," request/response lifecycle."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugin")," configuration can be bound directly to ",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," or it can be bound to ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Consumer"),". For the configuration of the same plugin, only one copy is valid, and the configuration selection priority is always ",(0,o.kt)("inlineCode",{parentName:"p"},"Consumer")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),"."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", you can declare which plugins are supported by the local APISIX node. This is a whitelisting mechanism. Plugins that are not in this whitelist will be automatically ignored. This feature can be used to temporarily turn off or turn on specific plugins, which is very effective in dealing with unexpected situations. If you want to add new plugins based on existing plugins, you need to copy the data of ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," node which in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," node of ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,o.kt)("p",null,"The configuration of the plugin can be directly bound to the specified Route, or it can be bound to the Service, but the plugin configuration in Route has a higher priority."),(0,o.kt)("p",null,"A plugin will only be executed once in a single request, even if it is bound to multiple different objects (such as Route or Service)."),(0,o.kt)("p",null,"The order in which plugins are run is determined by the priority of the plugin itself, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local _M = {\n    version = 0.1,\n    priority = 0, -- the priority of this plugin will be 0\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n")),(0,o.kt)("p",null,"The plugin configuration is submitted as part of Route or Service and placed under ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins"),". It internally uses the plugin name as the hash's key to hold configuration items for different plugins."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        },\n        "prometheus": {}\n    }\n}\n')),(0,o.kt)("p",null,"Not all plugins have specific configuration items. For example, there is no specific configuration item under ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus"),". In this case, an empty object identifier can be used."),(0,o.kt)("p",null,"If a request is rejected by a plugin, there will be warn level log like ",(0,o.kt)("inlineCode",{parentName:"p"},"ip-restriction exits with http status code 403"),"."),(0,o.kt)("h2",{id:"hot-reload"},"Hot reload"),(0,o.kt)("p",null,"APISIX plugins are hot-loaded. No matter you add, delete or modify plugins, and ",(0,o.kt)("strong",{parentName:"p"},"update codes of plugins in disk"),", you don't need to restart the service."),(0,o.kt)("p",null,"If your APISIX node has the Admin API turned on, just send an HTTP request through admin API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/plugins/reload -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT\n")),(0,o.kt)("p",null,"Note: if you disable a plugin that has been configured as part of your rule (in the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," field of ",(0,o.kt)("inlineCode",{parentName:"p"},"route"),", etc.),\nthen its execution will be skipped."),(0,o.kt)("h3",{id:"hot-reload-in-stand-alone-mode"},"Hot reload in stand-alone mode"),(0,o.kt)("p",null,"For stand-alone mode, see plugin related section in ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/2.10/stand-alone"},"stand alone mode"),"."))}s.isMDXComponent=!0}}]);