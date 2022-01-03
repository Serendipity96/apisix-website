"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94295],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return u}});var i=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,r=function(e,a){if(null==e)return{};var t,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var a=i.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=c(e.components);return i.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},h=i.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=c(t),u=r,f=h["".concat(p,".").concat(u)]||h[u]||m[u]||n;return t?i.createElement(f,l(l({ref:a},s),{},{components:t})):i.createElement(f,l({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=h;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<n;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},19513:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},assets:function(){return c},toc:function(){return s},default:function(){return h}});var i=t(87462),r=t(63366),n=(t(67294),t(3905)),l={title:"Release Apache APISIX Ingress Controller 1.4.0",tags:["APISIX Ingress Controller"]},o=void 0,p={permalink:"/releases/2022/1/2/release-apache-apisix-ingress-controller-1.4.0",source:"@site/releases/2022-1-2-release-apache-apisix-ingress-controller-1.4.0.md",title:"Release Apache APISIX Ingress Controller 1.4.0",description:"Welcome to the 1.4.0 release of apisix-ingress-controller!",date:"2022-01-02T00:00:00.000Z",formattedDate:"January 2, 2022",tags:[{label:"APISIX Ingress Controller",permalink:"/releases/tags/apisix-ingress-controller"}],readingTime:3.23,truncated:!1,authors:[],nextItem:{title:"Release Apache APISIX Ingress Controller 1.3.0",permalink:"/releases/2021/10/17/release-apache-apisix-ingress-controller-1.3.0"}},c={authorsImageUrls:[]},s=[{value:"Highlights",id:"highlights",children:[{value:"Roadmap",id:"roadmap",children:[]},{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"New Features",id:"new-features",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Changes",id:"changes",children:[]},{value:"Dependency Changes",id:"dependency-changes",children:[]}]}],m={toc:s};function h(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,i.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to the 1.4.0 release of apisix-ingress-controller!"),(0,n.kt)("p",null,"This is a ",(0,n.kt)("strong",{parentName:"p"},"GA")," release."),(0,n.kt)("h2",{id:"highlights"},"Highlights"),(0,n.kt)("h3",{id:"roadmap"},"Roadmap"),(0,n.kt)("p",null,"In next release(v1.5), custom resource's API version v2 will be GA released. Please go to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/707"},"#707")," for detail."),(0,n.kt)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In this release(v1.4), all custom resource's API version has been upgraded to ",(0,n.kt)("inlineCode",{parentName:"li"},"apisix.apache.org/v2beta3"),", and we deleted ",(0,n.kt)("inlineCode",{parentName:"li"},"apisix.apache.org/v2beta3")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"apisix.apache.org/v2alpha1"),". Please see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/746"},"#746"))),(0,n.kt)("h3",{id:"new-features"},"New Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We have introduced the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"apisix.apache.org/v2beta3")," API version for all custom resources")," and deleted ",(0,n.kt)("inlineCode",{parentName:"li"},"v2alpha1")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"v1")," API version  ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/746"},"#746")),(0,n.kt)("li",{parentName:"ul"},"Initial support for Gateway API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/789"},"#789")),(0,n.kt)("li",{parentName:"ul"},"Add a new ApisixPluginConfig CRD for reuse common plugin configurations. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues/638"},"#638")),(0,n.kt)("li",{parentName:"ul"},"Support regex in Ingress path ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/779"},"#779")),(0,n.kt)("li",{parentName:"ul"},"We can update the load balancing IP of the Ingress, and it can work in various public cloud environments ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/740"},"#740"))),(0,n.kt)("p",null,"Please try out the release binaries and report any issues at\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"https://github.com/apache/apisix-ingress-controller/issues"),"."),(0,n.kt)("h3",{id:"contributors"},"Contributors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Jintao Zhang"),(0,n.kt)("li",{parentName:"ul"},"kv"),(0,n.kt)("li",{parentName:"ul"},"nevercase"),(0,n.kt)("li",{parentName:"ul"},"LXM"),(0,n.kt)("li",{parentName:"ul"},"Nic"),(0,n.kt)("li",{parentName:"ul"},"chen zhuo"),(0,n.kt)("li",{parentName:"ul"},"Mayo Cream"),(0,n.kt)("li",{parentName:"ul"},"Nic"),(0,n.kt)("li",{parentName:"ul"},"Alex Zhang"),(0,n.kt)("li",{parentName:"ul"},"Baoyuan"),(0,n.kt)("li",{parentName:"ul"},"Brhetty"),(0,n.kt)("li",{parentName:"ul"},"Canh Dinh"),(0,n.kt)("li",{parentName:"ul"},"Jintao Zhang"),(0,n.kt)("li",{parentName:"ul"},"Sindweller"),(0,n.kt)("li",{parentName:"ul"},"Yu.Bozhong"),(0,n.kt)("li",{parentName:"ul"},"huzais520"),(0,n.kt)("li",{parentName:"ul"},"oliver"),(0,n.kt)("li",{parentName:"ul"},"rupipal"),(0,n.kt)("li",{parentName:"ul"},"zhang lun hai")),(0,n.kt)("h3",{id:"changes"},"Changes"),(0,n.kt)("p",null,"40 commits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/a1ef63963c5ee9f4b225e5e663ec060afd4da2f8"},(0,n.kt)("inlineCode",{parentName:"a"},"a1ef639"))," feat: add ApisixPluginConfig controller loop and e2e test case (#815)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/819b00318e8cd9b6639913301fb89d2acb168926"},(0,n.kt)("inlineCode",{parentName:"a"},"819b003"))," fix: delete the cluster object when give up the leadership (#774)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/970df2bd73b80eabb33b39be86c342b87c511fc4"},(0,n.kt)("inlineCode",{parentName:"a"},"970df2b"))," feat: Initial support for Gateway API (#789)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/7b6237521b322c3662bece3ab701661f58bed347"},(0,n.kt)("inlineCode",{parentName:"a"},"7b62375"))," fix: some wrong or invalid logs (#804)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/52b2e2c7459b93ff05280849f37662afbeb35b5d"},(0,n.kt)("inlineCode",{parentName:"a"},"52b2e2c"))," docs(READEME.md): change img size (#805)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/eeb7a49afb7219faaa41e55bef187f3a7ad03f0f"},(0,n.kt)("inlineCode",{parentName:"a"},"eeb7a49"))," chore: specify the K8S cluster version used for the test (#797)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d9fa77511402976f72a83b719644d9c4b4283128"},(0,n.kt)("inlineCode",{parentName:"a"},"d9fa775"))," chore: remove ApisixPluginConfig v2beta2 version (#795)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/6110bf54e3185e137fc68cb24771c3170c5c6ce5"},(0,n.kt)("inlineCode",{parentName:"a"},"6110bf5"))," feat: implement apisix healthz check (#770)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/4a6509c798a28c766c93a11468c205b64d742e98"},(0,n.kt)("inlineCode",{parentName:"a"},"4a6509c"))," chore: Issue & PR template (#771)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d4c5b093e95fca630f9a879111c3394fd1b12ec6"},(0,n.kt)("inlineCode",{parentName:"a"},"d4c5b09"))," fix: When the spec field of the ApisixUpstream resource is empty, it will panic (#794)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/472fbcd62721560ba681883b269cfc72b3c35977"},(0,n.kt)("inlineCode",{parentName:"a"},"472fbcd"))," feat: add ApisixPluginConfigs crd to v2beta3 (#792)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/413e7ca3f6287551505b6ae6a9ea9a9cb3547c47"},(0,n.kt)("inlineCode",{parentName:"a"},"413e7ca"))," feat: implement pluginconfig clients (#638) (#772)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/fe4a824f4debe3fd4e4a89584df61d2b6cba8ace"},(0,n.kt)("inlineCode",{parentName:"a"},"fe4a824"))," fix: ingress LB status records (#788)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/1b2bc3418bd2c7a2a085e55d7bf937b5c27f1ddb"},(0,n.kt)("inlineCode",{parentName:"a"},"1b2bc34"))," docs: Optimize installation documentation (#785)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/4e84eb8c88ff922c130dba225ff80a5f52c6b571"},(0,n.kt)("inlineCode",{parentName:"a"},"4e84eb8"))," feat: support regex in path (#779)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/1bbadf0d8e6aefeb11e55ab0d7230547d3c06135"},(0,n.kt)("inlineCode",{parentName:"a"},"1bbadf0"))," feat: add v2beta3 (#746)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/26d5c5cf96d7e5ece89aed62dcc557bad8fe61bf"},(0,n.kt)("inlineCode",{parentName:"a"},"26d5c5c"))," Docs: add more config example (#777)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/1141e15c2678fc9aa8f9e36ffdf804c6f4c2e441"},(0,n.kt)("inlineCode",{parentName:"a"},"1141e15"))," fix: test case param error (#780)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/0c6de2deb92c72b8d609490283c930a068df7d23"},(0,n.kt)("inlineCode",{parentName:"a"},"0c6de2d"))," feat: update Ingress LB status (#740)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/f4708675c6304ad019881ad7e0ac7a0affd3e6bd"},(0,n.kt)("inlineCode",{parentName:"a"},"f470867"))," fix: ingress do not watching any namespace when namespaceSelector is empty (#742)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/62d78978320e9f757843407cc9424568dd4815f9"},(0,n.kt)("inlineCode",{parentName:"a"},"62d7897"))," fix: If resource synchronization retry occurs, other events of the same resource will be blocked (#760)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/b127ff4eb47c95fa4db3b58020d7005f739d9dbd"},(0,n.kt)("inlineCode",{parentName:"a"},"b127ff4"))," feat: init ApisixPluginConfig crd #4 (#638) (#694)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/703c6b2fdbac5c748d2b3c1e54ac62f94d7de41f"},(0,n.kt)("inlineCode",{parentName:"a"},"703c6b2"))," fix: ApisixRoute backendPoint duplicate (#732) (#734)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/9fe729889471b0291355a69938a5139ec828cfdf"},(0,n.kt)("inlineCode",{parentName:"a"},"9fe7298"))," remove route timeout default value (#733)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/81f5ea1d927989cf65c9502d0091059698552a6b"},(0,n.kt)("inlineCode",{parentName:"a"},"81f5ea1"))," feat: support https and grpcs as upstream scheme as well as mTLS mode (#755)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/9f2cd7f856f1879ae2586f2a84f4f39d2654996d"},(0,n.kt)("inlineCode",{parentName:"a"},"9f2cd7f"))," feat: support environment variable in config file (#745)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/bdf6721e5b0296aeabe7d89cb888b7c7ce759925"},(0,n.kt)("inlineCode",{parentName:"a"},"bdf6721"))," Fix bug typo in yaml (#763)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/719c42f5390794c2d5ac13fb17b5afa96b71055f"},(0,n.kt)("inlineCode",{parentName:"a"},"719c42f"))," docs: update proxy-the-httpbin-service.md (#757)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/580e7d4117f9e3c2a8ed6c313b857beed0e2dd6a"},(0,n.kt)("inlineCode",{parentName:"a"},"580e7d4"))," feat: expose more prometheus metrics (#670)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/774077a527e43775bcd6346bebdb2ae0b3f80c22"},(0,n.kt)("inlineCode",{parentName:"a"},"774077a"))," docs: Customize the namespace used for installation (#747)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/4a862e206602ae9c7ac534fdfd9a557748b9ad26"},(0,n.kt)("inlineCode",{parentName:"a"},"4a862e2"))," fix: use independent dns service for UDP e2e test (#753)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/62b71628fb621a6625400e3ebc6847c21000d563"},(0,n.kt)("inlineCode",{parentName:"a"},"62b7162"))," fix: wrong var type in response_rewrite e2e (#754)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/da30386c9a4335a82723b46fe7b1342bf0f42867"},(0,n.kt)("inlineCode",{parentName:"a"},"da30386"))," fix field tag omitempty (#723)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/706318955efa9cb9cee87ff60a4f036f6e32f6f2"},(0,n.kt)("inlineCode",{parentName:"a"},"7063189"))," docs: add upgrade guide (#735)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/65f7c88193eb6e83b2bb4ca87a981321a99503e5"},(0,n.kt)("inlineCode",{parentName:"a"},"65f7c88"))," feat: add label-selector for watching namespace (#715)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/dc196ef16f95217213321335c6fc3929578e304a"},(0,n.kt)("inlineCode",{parentName:"a"},"dc196ef"))," fix unmarshal apisix/upstream field nodes be null (#724)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/2a732167c9e1b47a80f4b1fc89b4623bf669332e"},(0,n.kt)("inlineCode",{parentName:"a"},"2a73216"))," fix: verify generation in record status (#706)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/97fdc90e313a71436f016f5c2e6a849495399ff9"},(0,n.kt)("inlineCode",{parentName:"a"},"97fdc90"))," fix: ignore delete pod cache error msg (#714)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/fa27b0318468c0ffab40b8c384a8a6abc056748c"},(0,n.kt)("inlineCode",{parentName:"a"},"fa27b03"))," chore: fix spelling error in modules.png (#717)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/68125e3557428dd0e9424a273c977c85fcffc374"},(0,n.kt)("inlineCode",{parentName:"a"},"68125e3"))," chore: v1.3 release (#716)")),(0,n.kt)("h3",{id:"dependency-changes"},"Dependency Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"github.com/gin-gonic/gin"),"             v1.6.3 -> v1.7.7"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"github.com/hashicorp/go-memdb"),"        v1.0.4 -> v1.3.2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"github.com/hashicorp/go-multierror"),"   v1.1.0 -> v1.1.1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"github.com/prometheus/client_golang"),"  v1.10.0 -> v1.11.0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"github.com/spf13/cobra"),"               v1.1.1 -> v1.2.1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"go.uber.org/multierr"),"                 v1.3.0 -> v1.7.0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"go.uber.org/zap"),"                      v1.13.0 -> v1.19.1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"golang.org/x/net"),"                     4163338589ed -> fe4d6282115f"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"k8s.io/api"),"                           v0.21.1 -> v0.22.4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"k8s.io/apimachinery"),"                  v0.21.1 -> v0.22.4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"k8s.io/client-go"),"                     v0.21.1 -> v0.22.4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"k8s.io/code-generator"),"                v0.21.1 -> v0.22.1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sigs.k8s.io/gateway-api"),"              v0.4.0 ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"new")))),(0,n.kt)("p",null,"Previous release can be found at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/releases/tag/1.3.0"},"1.3.0")))}h.isMDXComponent=!0}}]);