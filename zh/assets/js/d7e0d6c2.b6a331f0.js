"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95482],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return u}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(t),u=n,d=h["".concat(s,".").concat(u)]||h[u]||m[u]||i;return t?r.createElement(d,l(l({ref:a},c),{},{components:t})):r.createElement(d,l({ref:a},c))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=h;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},97653:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return h}});var r=t(87462),n=t(63366),i=(t(67294),t(3905)),l={title:"Release Apache APISIX Ingress Controller 1.3.0",tags:["APISIX Ingress Controller"]},o=void 0,s={permalink:"/zh/releases/2021/10/17/release-apache-apisix-ingress-controller-1.3.0",source:"@site/releases/2021-10-17-release-apache-apisix-ingress-controller-1.3.0.md",title:"Release Apache APISIX Ingress Controller 1.3.0",description:"Welcome to the 1.3.0 release of apisix-ingress-controller!",date:"2021-10-17T00:00:00.000Z",formattedDate:"2021\u5e7410\u670817\u65e5",tags:[{label:"APISIX Ingress Controller",permalink:"/zh/releases/tags/apisix-ingress-controller"}],readingTime:2.57,truncated:!1,authors:[],prevItem:{title:"Release Apache APISIX Ingress Controller 1.4.0",permalink:"/zh/releases/2022/1/2/release-apache-apisix-ingress-controller-1.4.0"},nextItem:{title:"Release Apache APISIX Dashboard 2.8",permalink:"/zh/releases/2021/9/7/release-apache-apisix-dashboard-2.8"}},p={authorsImageUrls:[]},c=[{value:"Highlights",id:"highlights",children:[{value:"Roadmap",id:"roadmap",children:[]},{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"New Features",id:"new-features",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Changes",id:"changes",children:[]},{value:"Dependency Changes",id:"dependency-changes",children:[]}]}],m={toc:c};function h(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the 1.3.0 release of apisix-ingress-controller!"),(0,i.kt)("p",null,"This is a ",(0,i.kt)("strong",{parentName:"p"},"GA")," release."),(0,i.kt)("h2",{id:"highlights"},"Highlights"),(0,i.kt)("h3",{id:"roadmap"},"Roadmap"),(0,i.kt)("p",null,"In next release(v1.4), all custom resource versions will be upgraded to version v2beta3, and version v2 will be GA released in version v1.5. Please go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/707"},"#707")," for detail."),(0,i.kt)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In this release(v1.3), the CRD version has been upgraded to ",(0,i.kt)("inlineCode",{parentName:"li"},"apiextensions.k8s.io/v1"),", which means that ",(0,i.kt)("strong",{parentName:"li"},"the minimum version of Kubernetes supported by APISIX Ingress is v1.16 and later"),"."),(0,i.kt)("li",{parentName:"ul"},"The ValidatingWebhookConfiguration version has been upgraded to ",(0,i.kt)("inlineCode",{parentName:"li"},"admissionregistration.k8s.io/v1"),", which means that if you want using the default Dynamic Admission Control, you need ensure that the Kubernetes cluster is at least as new as v1.16.")),(0,i.kt)("h3",{id:"new-features"},"New Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have introduced the ",(0,i.kt)("strong",{parentName:"li"},"v2beta2 version of ApisixRoute")," and will drop support for ",(0,i.kt)("inlineCode",{parentName:"li"},"v2alpha1")," ApisixRoute ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/698"},"#698")),(0,i.kt)("li",{parentName:"ul"},"Add cert-manager support ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/685"},"#685")),(0,i.kt)("li",{parentName:"ul"},"Add full compare when APISIX Ingress startup ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/680"},"#680")),(0,i.kt)("li",{parentName:"ul"},"Support TLS for Ingress v1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/634"},"#634")),(0,i.kt)("li",{parentName:"ul"},"Add admission server and a validation webhook for plugins ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/573"},"#573")),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"timeout")," field for ApisixRoute CR ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/609"},"#609")),(0,i.kt)("li",{parentName:"ul"},"Add new metrics ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix_ingress_controller_check_cluster_health")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix_ingress_controller_sync_success_total")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/627"},"#627"))),(0,i.kt)("p",null,"Please try out the release binaries and report any issues at\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"https://github.com/apache/apisix-ingress-controller/issues"),"."),(0,i.kt)("h3",{id:"contributors"},"Contributors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kv"),(0,i.kt)("li",{parentName:"ul"},"Hoshea\xa0Jiang"),(0,i.kt)("li",{parentName:"ul"},"Jintao Zhang"),(0,i.kt)("li",{parentName:"ul"},"Sarasa Kisaragi"),(0,i.kt)("li",{parentName:"ul"},"Baoyuan"),(0,i.kt)("li",{parentName:"ul"},"SergeBakharev"),(0,i.kt)("li",{parentName:"ul"},"Sindweller"),(0,i.kt)("li",{parentName:"ul"},"chen zhuo"),(0,i.kt)("li",{parentName:"ul"},"liuxiran"),(0,i.kt)("li",{parentName:"ul"},"oliver")),(0,i.kt)("h3",{id:"changes"},"Changes"),(0,i.kt)("p",null,"27 commits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/a290f12cac2d7c8bcc51863cf42bc13b59bfe128"},(0,i.kt)("inlineCode",{parentName:"a"},"a290f12"))," docs: correct helm repo (#657)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/a01888bd195f59ae08a5e1399dd26f2ac438880a"},(0,i.kt)("inlineCode",{parentName:"a"},"a01888b"))," feat: Change field retries to value from pointer. (#647)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/6f46ac29a1bf3e51987169153a10be223fcf414f"},(0,i.kt)("inlineCode",{parentName:"a"},"6f46ac2"))," Make webhook cover ApisixRoute v2beta2 (#705)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/9dd4f40b9fc74be6c29ba11cf9086ecbbd51f9e2"},(0,i.kt)("inlineCode",{parentName:"a"},"9dd4f40"))," feat: add webhooks for consumer/tls/upstream (#667)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/657a1fd1d06b05015e609c5e50107c7358fc44c0"},(0,i.kt)("inlineCode",{parentName:"a"},"657a1fd"))," doc: add grpc proxy (#699)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/88be11a895d72dfa7d0fef09e2b7d00b3210efe9"},(0,i.kt)("inlineCode",{parentName:"a"},"88be11a"))," fix: CRD v1 preserve unknown fields (#702)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d46b2485834e0ab4198a567cc9a8d3d2bcc60e6b"},(0,i.kt)("inlineCode",{parentName:"a"},"d46b248"))," feat: upgrade ApisixRoute v2beta2 apiversion. (#698)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/736aba38f7de1fef03b6b818aa93e343b1666c95"},(0,i.kt)("inlineCode",{parentName:"a"},"736aba3"))," feat: upgrade admission apiversion to v1 (#697)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/0630ac55697eaf01017715fcad87b154cb64d9d4"},(0,i.kt)("inlineCode",{parentName:"a"},"0630ac5"))," feat: upgrade CRD version to v1 (#693)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/957c31522e1b1e5f8ef9cab7eb244473a4e0f675"},(0,i.kt)("inlineCode",{parentName:"a"},"957c315"))," feat: add full compare when ingress startup (#680)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/1b71fa32a45d5b5e8e8fc0ed1b761814d169e51f"},(0,i.kt)("inlineCode",{parentName:"a"},"1b71fa3"))," feat: support cert-manager (#685)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/3e9bdbf0cee6d49c8e0db27152d46565df704e8c"},(0,i.kt)("inlineCode",{parentName:"a"},"3e9bdbf"))," fix: the fields in UpstreamPassiveHealthCheckUnhealthy should be timeouts (#687)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/5c9cdbe7fc2c28f3023d635dbbd9bc833388a2bf"},(0,i.kt)("inlineCode",{parentName:"a"},"5c9cdbe"))," fix: remove the step of deleting httpbinsvc (#677)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/721653216b8fe199c15c23aa726157215b12af3a"},(0,i.kt)("inlineCode",{parentName:"a"},"7216532"))," Remove volumeMounts when webhook is disabled (#679)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/1e1be7401ba3707ba660a7d61df5118fc5725eff"},(0,i.kt)("inlineCode",{parentName:"a"},"1e1be74"))," add metric: check_cluster_health and sync_operation_total (#627)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/6a8658db1788c687c70c9f235601cc8224e0b38c"},(0,i.kt)("inlineCode",{parentName:"a"},"6a8658d"))," fix: add initContainers to verify if apisix is ready (#660)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d4a832cf57eb633e8bc1a3bb1a71ba0ae2360337"},(0,i.kt)("inlineCode",{parentName:"a"},"d4a832c"))," feat: route crd add timeout fields (#609)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/a9960c2a266686fc438451904c8d66430a7d70ee"},(0,i.kt)("inlineCode",{parentName:"a"},"a9960c2"))," Add API for getting schema of route, upstream and consumer (#655)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/75a2aaa979c61aaeab9b5412b937a618d1f56bca"},(0,i.kt)("inlineCode",{parentName:"a"},"75a2aaa"))," feat: Implement the admission server and a validation webhook for plugins (#573)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/270a176a39d34e1d0b213c9d190368919612db9c"},(0,i.kt)("inlineCode",{parentName:"a"},"270a176"))," fix: e2e failure due to count returned by APISIX (#640)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/c284f382576251c7d849a43710f8d09667b05dd1"},(0,i.kt)("inlineCode",{parentName:"a"},"c284f38"))," docs: update practices index for website (#654)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/9ab367f9d35e67616f678471d3407566a2b6b126"},(0,i.kt)("inlineCode",{parentName:"a"},"9ab367f")),' docs: Supplement FAQ for the error log \'no matches for kind "ApisixRoute" in version "apisix.apache.org/v2beta1"\' (#651)'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/62b7590443e037ecd6b41521accea567e09ad340"},(0,i.kt)("inlineCode",{parentName:"a"},"62b7590"))," feat: support TLS for ingress v1 (#634)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/68b7d7d231f548d61455f0e95a4ae157de0f5ff8"},(0,i.kt)("inlineCode",{parentName:"a"},"68b7d7d"))," chore: release v1.2.0 (#633)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d537ddc62bfabfe383c0bd402833377003a1d8dc"},(0,i.kt)("inlineCode",{parentName:"a"},"d537ddc"))," feat: add link check (#635)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d7128a1812053e9341f59f0e9c13c1c513c9db42"},(0,i.kt)("inlineCode",{parentName:"a"},"d7128a1"))," chore: skip CodeQL if go files have no changes (#636)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d8854c3bf7fefbc54c0d5b00b5ad669044f791f2"},(0,i.kt)("inlineCode",{parentName:"a"},"d8854c3"))," docs: fix config.json (#628)")),(0,i.kt)("h3",{id:"dependency-changes"},"Dependency Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"github.com/fsnotify/fsnotify"),"         v1.5.0 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"new"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"github.com/prometheus/client_golang"),"  v1.7.1 -> v1.10.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"github.com/slok/kubewebhook/v2"),"       v2.1.0 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"new"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"github.com/stretchr/testify"),"          v1.6.1 -> v1.7.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"github.com/xeipuuv/gojsonschema"),"      v1.2.0 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"new"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"golang.org/x/sys"),"                     0f9fa26af87c -> bce67f096156")),(0,i.kt)("p",null,"Previous release can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/releases/tag/1.2.0"},"1.2.0")))}h.isMDXComponent=!0}}]);