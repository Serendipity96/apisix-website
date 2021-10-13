"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85495],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return h}});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),h=i,f=d["".concat(o,".").concat(h)]||d[h]||m[h]||n;return t?r.createElement(f,l(l({ref:a},s),{},{components:t})):r.createElement(f,l({ref:a},s))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,l=new Array(n);l[0]=d;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var p=2;p<n;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55003:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return o},assets:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(87462),i=t(63366),n=(t(67294),t(3905)),l={title:"Release Apache APISIX Ingress Controller 1.0.0",tags:["APISIX Ingress Controller"]},c=void 0,o={permalink:"/releases/2021/6/16/release-apache-apisix-ingress-controller-1.0.0",source:"@site/releases/2021-6-16-release-apache-apisix-ingress-controller-1.0.0.md",title:"Release Apache APISIX Ingress Controller 1.0.0",description:"Welcome to the 1.0.0 release of apisix-ingress-controller!",date:"2021-06-16T00:00:00.000Z",formattedDate:"June 16, 2021",tags:[{label:"APISIX Ingress Controller",permalink:"/releases/tags/apisix-ingress-controller"}],readingTime:3.465,truncated:!1,authors:[],prevItem:{title:"Release Apache APISIX 2.7",permalink:"/releases/2021/6/25/release-apache-apisix-2.7"},nextItem:{title:"Release Apache APISIX Dashboard 2.7",permalink:"/releases/2021/6/15/release-apache-apisix-dashboard-2.7"}},p={authorsImageUrls:[]},s=[{value:"Highlights",id:"highlights",children:[{value:"New Features",id:"new-features",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Changes",id:"changes",children:[]},{value:"Dependency Changes",id:"dependency-changes",children:[]}]}],m={toc:s};function d(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to the 1.0.0 release of apisix-ingress-controller!"),(0,n.kt)("p",null,"This is the first ",(0,n.kt)("strong",{parentName:"p"},"GA")," release."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"an available Kubernetes cluster (version >= 1.14)"),(0,n.kt)("li",{parentName:"ul"},"an available Apache APISIX (version >= 2.7)")),(0,n.kt)("h2",{id:"highlights"},"Highlights"),(0,n.kt)("h3",{id:"new-features"},"New Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Support blocklist-source-range annotation for Ingress source")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/446"},"#446")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Add ApisixConsumer CRD")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/462"},"#462")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Support rewrite annotation for Ingress source")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/480"},"#480")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Support http-to-https redirect annotation for Ingress source")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/484"},"#484")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Add health check to apisix-admin and make the leader election recyclable")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/499"},"499")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Support mTLS for ApisixTls")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/492"},"#492")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Support authentication for ApisixRoute")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/528"},"#528"))),(0,n.kt)("p",null,"Please try out the release binaries and report any issues at\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"https://github.com/apache/apisix-ingress-controller/issues"),"."),(0,n.kt)("h3",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alex Zhang"),(0,n.kt)("li",{parentName:"ul"},"Sarasa Kisaragi"),(0,n.kt)("li",{parentName:"ul"},"Jintao Zhang"),(0,n.kt)("li",{parentName:"ul"},"kv"),(0,n.kt)("li",{parentName:"ul"},"Shuyang Wu"),(0,n.kt)("li",{parentName:"ul"},"Daming"),(0,n.kt)("li",{parentName:"ul"},"Fang"),(0,n.kt)("li",{parentName:"ul"},"Ayush das"),(0,n.kt)("li",{parentName:"ul"},"Donghui0"),(0,n.kt)("li",{parentName:"ul"},"Shivani chauhan"),(0,n.kt)("li",{parentName:"ul"},"Yuelin Zheng"),(0,n.kt)("li",{parentName:"ul"},"guoqqqi"),(0,n.kt)("li",{parentName:"ul"},"\u7f57\u6cfd\u8f69")),(0,n.kt)("h3",{id:"changes"},"Changes"),(0,n.kt)("p",null,"58 commits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/f3ab30b41a4e918fe88fb8290e81d136846f2fec"},(0,n.kt)("inlineCode",{parentName:"a"},"f3ab30b"))," docs: modify readme (#543)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/f9df5469aa032cd05955f93c59a32883db542c02"},(0,n.kt)("inlineCode",{parentName:"a"},"f9df546"))," ci: do not run workflows for draft PRs (#542)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/fca62110b81958935263c816f71be96c4500a84e"},(0,n.kt)("inlineCode",{parentName:"a"},"fca6211"))," chore: add authentication for ApisixRoute (#528)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/28c584ea33824434a7e872f328e8e90a09fb2213"},(0,n.kt)("inlineCode",{parentName:"a"},"28c584e"))," chore: remove echo plugin's auth test case. (#534)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/1eee479247404893cf5f4ae5ad78c6714a71f63c"},(0,n.kt)("inlineCode",{parentName:"a"},"1eee479"))," fix: nil pointer dereference (#529)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/7379d57359b82f5521722814d860e49632e717f3"},(0,n.kt)("inlineCode",{parentName:"a"},"7379d57"))," docs: removed navigation title from sidebar to docs dropdown (#531)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/2bf4b6be29648c1c3e98006edae50252a0555a08"},(0,n.kt)("inlineCode",{parentName:"a"},"2bf4b6b"))," fix: add namespace for subjects of ClusterRoleBinding (#527)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d3ec85657c10a54875cfad05fdebc67b9358cef2"},(0,n.kt)("inlineCode",{parentName:"a"},"d3ec856"))," ci: use concurrency to cancel workflow (#525)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/5c1aa5ef26a6546e5e339bcc6d3cdae31b534da6"},(0,n.kt)("inlineCode",{parentName:"a"},"5c1aa5e"))," docs: add docs about Ingress feature comparison (#526)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d510a8abdc6d4f94d2478eefb53fca16c4b88eb4"},(0,n.kt)("inlineCode",{parentName:"a"},"d510a8a"))," doc: update development.md (#524)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/f6cb4f9a0300b13ee586a9536623962d183d9d6c"},(0,n.kt)("inlineCode",{parentName:"a"},"f6cb4f9"))," feat: consumer controller loop (#516)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/3337be7c7d5f959301171a243f4c0c0d49360503"},(0,n.kt)("inlineCode",{parentName:"a"},"3337be7"))," feat: subset changes in controllers (#507)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/c6ac8a40526d3d30b25347dce330630f623c1e00"},(0,n.kt)("inlineCode",{parentName:"a"},"c6ac8a4"))," fix: CI path filter (#522)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/fa0d8a69b9cc2ceda9b37872841ded56aebc5f8e"},(0,n.kt)("inlineCode",{parentName:"a"},"fa0d8a6"))," ci: remove stale ci/spell-checker configuration (#519)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/3d9fd07cc86318a420a5bf794831d039a7b6d0b8"},(0,n.kt)("inlineCode",{parentName:"a"},"3d9fd07"))," ci: add changes filter (#520)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/38290a2893b4bf77869b34648aeb8d55dd298537"},(0,n.kt)("inlineCode",{parentName:"a"},"38290a2"))," feat: ApisixTls support mTLS (#492)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/029c0d7a26c0a3cd507f15f5dcdbff0a09799c24"},(0,n.kt)("inlineCode",{parentName:"a"},"029c0d7"))," feat: add events and status for ApisixClusterConfig resource (#502)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/a89be230989ea62d03062181626cc197df655a78"},(0,n.kt)("inlineCode",{parentName:"a"},"a89be23"))," feat: subset translation (#497)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/87b7229e6db549f4bd65561399d976a91fdd7978"},(0,n.kt)("inlineCode",{parentName:"a"},"87b7229"))," Update license-checker.yml (#510)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/495c6317a618683d2c69c48c489763c4c8285504"},(0,n.kt)("inlineCode",{parentName:"a"},"495c631"))," chore: add verify scripts and verify-codegen CI (#513)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/2f2e6f861ca0a27d84ad84763cc0a070e9b6c91d"},(0,n.kt)("inlineCode",{parentName:"a"},"2f2e6f8"))," feat: add permission to events, fix missing subresources in crd. (#514)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/880d5736f089daff6682eae0450eae6c18bfef53"},(0,n.kt)("inlineCode",{parentName:"a"},"880d573"))," ci: fix cancel workflow not working (#509)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/cddcd299459cc1a0ad2aee02e611cc88cda64c8e"},(0,n.kt)("inlineCode",{parentName:"a"},"cddcd29"))," feat: add pod controller and pod cache (#490)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/23e5ebdb837cf581db94a613e02e292167d52eae"},(0,n.kt)("inlineCode",{parentName:"a"},"23e5ebd"))," feat: apisixconsumer translator (#474)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/fe2db92740eda6dab6f50cb096b279aec7c0d15b"},(0,n.kt)("inlineCode",{parentName:"a"},"fe2db92"))," chore: add docker ignore to avoid unwanted cache miss (#506)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d87f856acbaf3f11a0559199ad7090beea7bcc45"},(0,n.kt)("inlineCode",{parentName:"a"},"d87f856"))," ci: fix cancel workflow not working (#508)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/a3f58d07a749b4594e460b4645ef77d8d21598fb"},(0,n.kt)("inlineCode",{parentName:"a"},"a3f58d0"))," fix: ack.md link fix (#503)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/553655b1148360795a71b27117898ff5642be8a5"},(0,n.kt)("inlineCode",{parentName:"a"},"553655b"))," chore: add dnsPolicy for sample deployment (#498)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/f089ffe9788526b95e43d1c42efc0757b062a8cf"},(0,n.kt)("inlineCode",{parentName:"a"},"f089ffe"))," test: remove custom apisix-default.yaml (#494)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/b7736dbb58f3df91197fda4da9519e90a4de2a1f"},(0,n.kt)("inlineCode",{parentName:"a"},"b7736db"))," ci: cancel duplicate workflow to reduce CI queue time (#505)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/582c4b362f26ffa8372bf520c3f774170a56c290"},(0,n.kt)("inlineCode",{parentName:"a"},"582c4b3"))," chore: add health check to apisix-admin and make the leader election recyclable (#499)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/77a06cc3c6a2762f996b44833e1d802a6007c425"},(0,n.kt)("inlineCode",{parentName:"a"},"77a06cc"))," feat: add support for http-to-https redirect annotation (#484)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/fa98443daaa3b8f4b1be75a4e025eedf06550e51"},(0,n.kt)("inlineCode",{parentName:"a"},"fa98443"))," chore: regenerate codes (#491)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/6630aaced835265951bfb76453a7a812ad15e7aa"},(0,n.kt)("inlineCode",{parentName:"a"},"6630aac"))," fix: ingress_class configuration invalid(#475) (#477)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/e8eddcc7791d64181a13bf8714ca141a1ca4e7e5"},(0,n.kt)("inlineCode",{parentName:"a"},"e8eddcc"))," docs: ingress apisix the hard way (#479)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/36de06967bedaaa4296af4a427df920bd7ca63a3"},(0,n.kt)("inlineCode",{parentName:"a"},"36de069"))," feat: codegen script (#487)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/1d7b14343f7d901ac4cc4170fc64d095ad882f72"},(0,n.kt)("inlineCode",{parentName:"a"},"1d7b143"))," feat: support rewrite annotation (#480)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/5af1fb49bc8fdb418d3da69c2a283092caaf938b"},(0,n.kt)("inlineCode",{parentName:"a"},"5af1fb4"))," feat: add essential data structures for service subset selector (#489)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/a16e980237fb61bdaf9f980660e4cbbf42843c83"},(0,n.kt)("inlineCode",{parentName:"a"},"a16e980"))," fix: fatal error reported when run make build in release src (#485)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/1dd5087aea443a0aeddb62a8aa0af90aab2bf48e"},(0,n.kt)("inlineCode",{parentName:"a"},"1dd5087"))," chore: consumer data structures (#470)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d6d37960eb5db70577c544e25dbd1f31782270e2"},(0,n.kt)("inlineCode",{parentName:"a"},"d6d3796"))," chore: fix e2e ip-restriction plugin text (#488)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/92896f1c6d0bfd8bd0e31c7293b9d6b9befdef87"},(0,n.kt)("inlineCode",{parentName:"a"},"92896f1"))," chore: e2e case for tcp proxy is unstable\\nclose #473 (#486)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/bc71e3e25a8514548fddbf900318457ded3e3076"},(0,n.kt)("inlineCode",{parentName:"a"},"bc71e3e"))," chore: add apisixconsumer data structures (#462)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/269cf07020cac239aac5e7d7334bc63305e740fb"},(0,n.kt)("inlineCode",{parentName:"a"},"269cf07"))," test: add basic headless service e2e test (#466)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/1ffa862b788f003a07a259da4b9b10f018a87698"},(0,n.kt)("inlineCode",{parentName:"a"},"1ffa862"))," fix: event record scheme error (#469)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/456fbd2f776845d92c2899bb5fef61d688f49244"},(0,n.kt)("inlineCode",{parentName:"a"},"456fbd2"))," fix: remove upstream which is ref by multi-routes cause retry (#472)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/a7e187bd3a11218c0e24bd61974bad22becccc95"},(0,n.kt)("inlineCode",{parentName:"a"},"a7e187b"))," minor: optimize log message when the endpoint does not have a corresponding service (#458)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/63ae709d064e28a565f80176aa82a3ff7b69b293"},(0,n.kt)("inlineCode",{parentName:"a"},"63ae709"))," chore: fix broken links (#467)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/0bdd24b86ca109948e786f7f13f84bc1bd0fbc39"},(0,n.kt)("inlineCode",{parentName:"a"},"0bdd24b"))," chore: change the required PR approving number to 2 (#463)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/015940cedfe6951fe2ec8d2d56f11f3f484716b8"},(0,n.kt)("inlineCode",{parentName:"a"},"015940c"))," docs: fix APISIX helm installation (#459)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/4a55307b6a34ba1145e131f85b5f05f909e8d244"},(0,n.kt)("inlineCode",{parentName:"a"},"4a55307"))," fix: add status subresource permission in clusterRole (#452)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/5d479ae148d2acdb51082bb0f129548fdfa146b4"},(0,n.kt)("inlineCode",{parentName:"a"},"5d479ae"))," feat: blocklist-source-range annotation (#446)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/8824bbdf113bbf72649ccd5dc43af3a66773bf5b"},(0,n.kt)("inlineCode",{parentName:"a"},"8824bbd"))," chore: refactor the process of annotations (#443)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/9d0e0b856c3ebe0d6bb10ee4711ea266685fb866"},(0,n.kt)("inlineCode",{parentName:"a"},"9d0e0b8"))," fix: wait for the default cluster ready continuously (#450)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/fb11efc00a914e1992a8a730cf5443a3ea38e8be"},(0,n.kt)("inlineCode",{parentName:"a"},"fb11efc"))," chore: refactor the structures of kube clients, shared index informer factories (#431)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/f199cdb5f5bfe3cb5acb19dc1903b1f5f426a353"},(0,n.kt)("inlineCode",{parentName:"a"},"f199cdb"))," test: add e2e test cases for server-info plugin (#406)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/b0a6f3edba8a80e10e831ceaf408e43f89632adb"},(0,n.kt)("inlineCode",{parentName:"a"},"b0a6f3e"))," fix: typo in apisix_route_v2alpha1.md (#438)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d269a01fe69c287cf13a3574d8ce6566c18a306c"},(0,n.kt)("inlineCode",{parentName:"a"},"d269a01"))," ci: introduce skywalking-eyes (#430)")),(0,n.kt)("h3",{id:"dependency-changes"},"Dependency Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"golang.org/x/net"),"       6772e930b67b -> 3d97a244fca7"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"gopkg.in/yaml.v2"),"       v2.3.0 -> v2.4.0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"k8s.io/code-generator"),"  v0.21.1 ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"new")))),(0,n.kt)("p",null,"Previous release can be found at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/releases/tag/0.6.0"},"0.6.0")))}d.isMDXComponent=!0}}]);