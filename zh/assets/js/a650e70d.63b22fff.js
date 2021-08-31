(self.webpackChunk=self.webpackChunk||[]).push([[17546],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90821:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return s}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),c={title:"Example"},i={unversionedId:"example",id:"example",isDocsHomePage:!1,title:"Example",description:"\x3c!--",source:"@site/docs/apisix-docker/example.md",sourceDirName:".",slug:"/example",permalink:"/zh/docs/docker/next/example",editUrl:"https://github.com/apache/apisix-docker/edit/master/docs/en/latest/example.md",version:"current",frontMatter:{title:"Example"},sidebar:"docs",previous:{title:"Deploy Apache APISIX with Docker",permalink:"/zh/docs/docker/next/manual"}},l=[{value:"Run",id:"run",children:[]},{value:"Configure",id:"configure",children:[]},{value:"Test",id:"test",children:[]},{value:"Clean",id:"clean",children:[]}],p={toc:l};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This example is used for functional verification and is not recommended for performance testing. For performance testing, please refer to ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/apache/apisix#benchmark"},"benchmark"),".")),(0,a.kt)("h3",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose -p docker-apisix up -d\n")),(0,a.kt)("h3",{id:"configure"},"Configure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl http://127.0.0.1:9080/apisix/admin/services/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "172.18.5.12:80": 1\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/services/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "172.18.5.13:80": 1\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/12 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "host": "web1.lvh.me",\n    "service_id": "1"\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/22 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "host": "web2.lvh.me",\n    "service_id": "2"\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/ssl/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d "\n{\n    \\"cert\\": \\"$( cat \'./mkcert/lvh.me+1.pem\')\\",\n    \\"key\\": \\"$( cat \'./mkcert/lvh.me+1-key.pem\')\\",\n    \\"sni\\": \\"lvh.me\\"\n}"\n\ncurl http://127.0.0.1:9080/apisix/admin/ssl/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d "\n{\n    \\"cert\\": \\"$( cat \'./mkcert/lvh.me+1.pem\')\\",\n    \\"key\\": \\"$( cat \'./mkcert/lvh.me+1-key.pem\')\\",\n    \\"sni\\": \\"*.lvh.me\\"\n}"\n')),(0,a.kt)("h3",{id:"test"},"Test"),(0,a.kt)("p",null,"When testing subdomains, using localhost is not a good option. Due to this, lets use ",(0,a.kt)("a",{parentName:"p",href:"http://lvh.me/"},"http://lvh.me/"),"\nfree service to resolve itself along with all subdomains to localhost."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl http://web1.lvh.me:9080/hello -v # hello web1\n\ncurl http://web2.lvh.me:9080/hello -v # hello web2\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl https://web1.lvh.me:9443/ -v --cacert ./mkcert/rootCA.pem\n")),(0,a.kt)("h3",{id:"clean"},"Clean"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose -p docker-apisix down\n\n$ sudo rm -rf etcd_data/member\n\n$ rm -rf apisix_log/*.log\n")))}s.isMDXComponent=!0}}]);