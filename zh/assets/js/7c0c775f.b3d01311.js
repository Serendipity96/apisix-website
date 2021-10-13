"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82494],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=r.createContext({}),u=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},s=function(n){var e=u(n.components);return r.createElement(p.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,p=n.parentName,s=c(n,["components","mdxType","originalType","parentName"]),f=u(t),m=i,g=f["".concat(p,".").concat(m)]||f[m]||l[m]||o;return t?r.createElement(g,a(a({ref:e},s),{},{components:t})):r.createElement(g,a({ref:e},s))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c.mdxType="string"==typeof n?n:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81767:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a={title:"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e"},c=void 0,p={unversionedId:"customize-nginx-configuration",id:"version-2.9/customize-nginx-configuration",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.9/customize-nginx-configuration.md",sourceDirName:".",slug:"/customize-nginx-configuration",permalink:"/zh/docs/apisix/2.9/customize-nginx-configuration",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/customize-nginx-configuration.md",tags:[],version:"2.9",frontMatter:{title:"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e"},sidebar:"version-2.9/docs",previous:{title:"gRPC \u4ee3\u7406",permalink:"/zh/docs/apisix/2.9/grpc-proxy"},next:{title:"\u8bc1\u4e66",permalink:"/zh/docs/apisix/2.9/certificate"}},u=[],s={toc:u};function l(n){var e=n.components,t=(0,i.Z)(n,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"APISIX \u4f1a\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix/cli/ngx_tpl.lua")," \u8fd9\u4e2a\u6a21\u677f\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," \u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u7684\u914d\u7f6e\u751f\u6210 Nginx \u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u5728\u6267\u884c\u5b8c ",(0,o.kt)("inlineCode",{parentName:"p"},"./bin/apisix start"),"\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," \u770b\u5230\u751f\u6210\u7684 Nginx \u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u5728\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e\u6587\u4ef6\u4e4b\u524d\uff0c\u70e6\u8bf7\u4ed4\u7ec6\u9605\u8bfb ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml"),"\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u91cc\u9762\u8986\u76d6\u6389\u9ed8\u8ba4\u503c\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"xxx_snippet")," \u4e4b\u7c7b\u7684\u914d\u7f6e\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," \u91cc\u9762\u6ce8\u5165\u4f60\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'...\n# config.yaml \u91cc\u9762\u7684\u5185\u5bb9\nnginx_config:\n    main_configuration_snippet: |\n        daemon on;\n    http_configuration_snippet: |\n        server\n        {\n            listen 45651;\n            server_name _;\n            access_log off;\n\n            location /ysec_status {\n                req_status_show;\n                allow 127.0.0.1;\n                deny all;\n            }\n        }\n\n        chunked_transfer_encoding on;\n\n    http_server_configuration_snippet: |\n        set $my "var";\n    http_admin_configuration_snippet: |\n        log_format admin "$request_time $pipe";\n    http_end_configuration_snippet: |\n        server_names_hash_bucket_size 128;\n    stream_configuration_snippet: |\n        tcp_nodelay off;\n...\n')))}l.isMDXComponent=!0}}]);