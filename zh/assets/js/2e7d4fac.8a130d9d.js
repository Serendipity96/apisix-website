(self.webpackChunk=self.webpackChunk||[]).push([[10873],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||o;return a?r.createElement(m,i(i({ref:t},l),{},{components:a})):r.createElement(m,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},52950:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=a(22122),n=a(19756),o=(a(67294),a(3905)),i={title:"FAQ"},s={unversionedId:"FAQ",id:"version-2.5/FAQ",isDocsHomePage:!1,title:"FAQ",description:"\x3c!--",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.5/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/zh/docs/dashboard/2.5/FAQ",editUrl:"https://github.com/apache/apisix-dashboard/edit/master/docs/en/latest/FAQ.md",version:"2.5",frontMatter:{title:"FAQ"},sidebar:"version-2.5/docs",previous:{title:"Backend Tests",permalink:"/zh/docs/dashboard/2.5/back-end-tests"}},c=[{value:"1. Vue.js version of the Dashboard",id:"1-vuejs-version-of-the-dashboard",children:[]},{value:"What are the differences between Dashboard version 2.0 and version 1.5?",id:"what-are-the-differences-between-dashboard-version-20-and-version-15",children:[]},{value:"3. Etcd compatibility issues",id:"3-etcd-compatibility-issues",children:[]},{value:"4. After modifying the plugin schema or creating a custom plugin in Apache APISIX, why can&#39;t I find it on the dashboard?",id:"4-after-modifying-the-plugin-schema-or-creating-a-custom-plugin-in-apache-apisix-why-cant-i-find-it-on-the-dashboard",children:[]},{value:"5. How to write API documentation",id:"5-how-to-write-api-documentation",children:[]}],p={toc:c};function l(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-vuejs-version-of-the-dashboard"},"1. Vue.js version of the Dashboard"),(0,o.kt)("p",null,"If you need a Vue.js build of the Apache APISIX Dashboard 1.0, use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/tree/master-vue"},"master-vue branch"),"."),(0,o.kt)("h3",{id:"what-are-the-differences-between-dashboard-version-20-and-version-15"},"What are the differences between Dashboard version 2.0 and version 1.5?"),(0,o.kt)("p",null,"The 2.0 version of the dashboard removed MySQL from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/tree/backup-1.5-latest"},"version 1.5")," and will operate directly on etcd."),(0,o.kt)("h3",{id:"3-etcd-compatibility-issues"},"3. Etcd compatibility issues"),(0,o.kt)("p",null,"If you are using Apache APISIX below v2.0, be aware that the data from the etcd v2 API is ",(0,o.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/op-guide/v2-migration/"},"not compatible")," with the data from the v3 API. Apache APISIX Dashboard v2.0 and above uses the etcd v3 API, and apisix 1.5 and below uses the etcd v2 API."),(0,o.kt)("h3",{id:"4-after-modifying-the-plugin-schema-or-creating-a-custom-plugin-in-apache-apisix-why-cant-i-find-it-on-the-dashboard"},"4. After modifying the plugin schema or creating a custom plugin in Apache APISIX, why can't I find it on the dashboard?"),(0,o.kt)("p",null,"Since the Dashboard caches the jsonschema data of the plugins in Apache APISIX, you need to synchronize the data in the Dashboard after you create your custom plugins in Apache APISIX, which currently ",(0,o.kt)("strong",{parentName:"p"},"only supports manual operation"),". Please follow the following guide."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Confirm that your APISIX is running and has enabled control API (enabled by default and only runs local access)\nRefer to the beginning in:\n",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/control-api"},"https://apisix.apache.org/docs/apisix/control-api"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the following commands to export jsonchema on your APISIX server (if it is configured for non-local access, it does not need to be executed on your APISIX server, and the access IP and port should be modified accordingly)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl 127.0.0.1:9090/v1/schema > schema.json\n")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/control-api#get-v1schema"},"https://apisix.apache.org/docs/apisix/control-api#get-v1schema")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the exported ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.json")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf")," directory in the Dashboard working directory (About working directory, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/blob/master/docs/en/latest/deploy.md#working-directory"},"https://github.com/apache/apisix-dashboard/blob/master/docs/en/latest/deploy.md#working-directory"),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart the Manager API"))),(0,o.kt)("h3",{id:"5-how-to-write-api-documentation"},"5. How to write API documentation"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-swagger/go-swagger"},"go-swagger")," to generate Swagger 2.0 documents, and then convert them to markdown format so that they can be viewed directly in the github repository. Specific steps are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write comments according to ",(0,o.kt)("a",{parentName:"p",href:"https://goswagger.io/use/spec.html"},"Specification"),". For details, please refer to the existing example ",(0,o.kt)("inlineCode",{parentName:"p"},"api/internal/handler/route/route.go")," in this project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"go-swagger")," tool to generate Swagger 2.0 documents."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ swagger generate spec -o ./docs/en/latest/api/api.yaml --scan-models\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"swagger-markdown")," tool to convert Swagger 2.0 documents into markdown documents.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ swagger-markdown -i ./docs/en/latest/api/api.yaml\n")))}l.isMDXComponent=!0}}]);