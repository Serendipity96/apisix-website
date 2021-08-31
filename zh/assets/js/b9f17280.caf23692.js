(self.webpackChunk=self.webpackChunk||[]).push([[3781],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return h},kt:function(){return d}});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),s=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},h=function(e){var a=s(e.components);return r.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=i,m=c["".concat(o,".").concat(d)]||c[d]||u[d]||n;return t?r.createElement(m,p(p({ref:a},h),{},{components:t})):r.createElement(m,p({ref:a},h))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,p=new Array(n);p[0]=c;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var s=2;s<n;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},45493:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return o},default:function(){return h}});var r=t(22122),i=t(19756),n=(t(67294),t(3905)),p={title:"Release Apache APISIX Dashboard 2.4",tags:["APISIX Dashboard"]},l={permalink:"/zh/releases/2021/02/12/release-apache-apisix-dashboard-2.4",source:"@site/releases/2021-2-12-release-apache-apisix-dashboard-2.4.md",title:"Release Apache APISIX Dashboard 2.4",description:"This release mainly improves basic features, bugfix and adds test cases.",date:"2021-02-12T00:00:00.000Z",formattedDate:"2021\u5e742\u670812\u65e5",tags:[{label:"APISIX Dashboard",permalink:"/zh/releases/tags/apisix-dashboard"}],readingTime:1.435,truncated:!1,prevItem:{title:"Release Apache APISIX 2.4",permalink:"/zh/releases/2021/03/05/release-apache-apisix-2.4"},nextItem:{title:"Release Apache APISIX Ingress Controller 0.3.0",permalink:"/zh/releases/2021/02/11/release-apache-apisix-ingress-controller-0.3.0"}},o=[{value:"Core",id:"core",children:[]},{value:"Bugfix",id:"bugfix",children:[]},{value:"Test Case",id:"test-case",children:[]},{value:"Doc",id:"doc",children:[]}],s={toc:o};function h(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This release mainly improves basic features, bugfix and adds test cases."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Manager API")," 2.4 should be used with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.3"},"Apache APISIX 2.3"),". It is not recommended to use with other Apache APISIX versions."),(0,n.kt)("h3",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support to show warning notification when dashboard version not matching apisix. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1435"},"#1435")),(0,n.kt)("li",{parentName:"ul"},"Support mTLS connection to ETCD. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1437"},"#1437")),(0,n.kt)("li",{parentName:"ul"},"Support IP allow list. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1424"},"#1424")),(0,n.kt)("li",{parentName:"ul"},"Support to get manager-api version through API. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1429"},"#1429")),(0,n.kt)("li",{parentName:"ul"},"Support import route from OpenAPI specification3.0. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1102"},"#1102")),(0,n.kt)("li",{parentName:"ul"},"Support export route from OpenAPI specification3.0. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1245"},"#1245")),(0,n.kt)("li",{parentName:"ul"},"Support string type for the script field in Route. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1289"},"#1289")),(0,n.kt)("li",{parentName:"ul"},"Feat: add script_id field in Route.entity. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1386"},"#1386")),(0,n.kt)("li",{parentName:"ul"},"Feat: add stop subcommand. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/741"},"#741")),(0,n.kt)("li",{parentName:"ul"},"Feat: add e2e test coverage. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1270"},"#1270")),(0,n.kt)("li",{parentName:"ul"},"Feat: add returning value for HTTP PUT and PATCH methods. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1322"},"#1322")),(0,n.kt)("li",{parentName:"ul"},"Feat: user can skip upstream when select service_id ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1302"},"#1302"))),(0,n.kt)("h3",{id:"bugfix"},"Bugfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix: add defer recover for goroutines to prevent abnormal crash. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1419"},"#1419")),(0,n.kt)("li",{parentName:"ul"},"Fix: add version ldflags when building manager-api in Dockerfile. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1393"},"#1393")),(0,n.kt)("li",{parentName:"ul"},"Fix: Upgrade gjson and protobuf to avoid security problem. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1366"},"#1366")),(0,n.kt)("li",{parentName:"ul"},"Fix: Incomplete label display. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1252"},"#1252")),(0,n.kt)("li",{parentName:"ul"},"Fix: Redirect plugin should not show in route step3 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1276"},"#1276")),(0,n.kt)("li",{parentName:"ul"},"Fix: Editing a Service, the upstream info will be lost. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1347"},"#1347"))),(0,n.kt)("h3",{id:"test-case"},"Test Case"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use ginkgo framework to do backend E2E testing. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1319"},"#1319")),(0,n.kt)("li",{parentName:"ul"},"Add action to check the version for release. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1418"},"#1418")),(0,n.kt)("li",{parentName:"ul"},"Add test for make build. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1421"},"#1421")),(0,n.kt)("li",{parentName:"ul"},"Remove the etcd dependency in part of unit test. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1469"},"#1169")),(0,n.kt)("li",{parentName:"ul"},"Skip Cypress binary install when build. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1248"},"#1248")),(0,n.kt)("li",{parentName:"ul"},"Enhance plugin schema smoke test ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1261"},"#1261")),(0,n.kt)("li",{parentName:"ul"},"Delete unnecessary wait in front-end test. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1370"},"#1370")),(0,n.kt)("li",{parentName:"ul"},"Add edit the plugin testcase ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1372"},"#1372"))),(0,n.kt)("h3",{id:"doc"},"Doc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Doc: add document for introducing backend e2e test. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1381"},"#1381"))))}h.isMDXComponent=!0}}]);