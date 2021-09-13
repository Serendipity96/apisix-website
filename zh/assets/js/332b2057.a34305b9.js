"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83254],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return d}});var r=t(67294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function p(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,r)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function h(a,e){if(null==a)return{};var t,r,i=function(a,e){if(null==a)return{};var t,r,i={},p=Object.keys(a);for(r=0;r<p.length;r++)t=p[r],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(r=0;r<p.length;r++)t=p[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var n=r.createContext({}),s=function(a){var e=r.useContext(n),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},o=function(a){var e=s(a.components);return r.createElement(n.Provider,{value:e},a.children)},u={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(a,e){var t=a.components,i=a.mdxType,p=a.originalType,n=a.parentName,o=h(a,["components","mdxType","originalType","parentName"]),c=s(t),d=i,m=c["".concat(n,".").concat(d)]||c[d]||u[d]||p;return t?r.createElement(m,l(l({ref:e},o),{},{components:t})):r.createElement(m,l({ref:e},o))}));function d(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var p=t.length,l=new Array(p);l[0]=c;var h={};for(var n in e)hasOwnProperty.call(e,n)&&(h[n]=e[n]);h.originalType=a,h.mdxType="string"==typeof a?a:i,l[1]=h;for(var s=2;s<p;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},66590:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},metadata:function(){return h},toc:function(){return n},default:function(){return o}});var r=t(87462),i=t(63366),p=(t(67294),t(3905)),l={title:"Release Apache APISIX Dashboard 2.6",tags:["APISIX Dashboard"]},h={permalink:"/zh/releases/2021/04/22/release-apache-apisix-dashboard-2.6",source:"@site/releases/2021-4-22-release-apache-apisix-dashboard-2.6.md",title:"Release Apache APISIX Dashboard 2.6",description:"This release mainly improves UI and UE, bugfix and adds test cases.",date:"2021-04-22T00:00:00.000Z",formattedDate:"2021\u5e744\u670822\u65e5",tags:[{label:"APISIX Dashboard",permalink:"/zh/releases/tags/apisix-dashboard"}],readingTime:1.4,truncated:!1,prevItem:{title:"Release Apache APISIX Ingress Controller 0.6.0",permalink:"/zh/releases/2021/05/13/release-apache-apisix-ingress-controller-0.6.0"},nextItem:{title:"Release Apache APISIX Ingress Controller 0.5.0",permalink:"/zh/releases/2021/04/13/release-apache-apisix-ingress-controller-0.5.0"}},n=[{value:"Core",id:"core",children:[]},{value:"Bugfix",id:"bugfix",children:[]},{value:"Test Case",id:"test-case",children:[]},{value:"Doc",id:"doc",children:[]}],s={toc:n};function o(a){var e=a.components,t=(0,i.Z)(a,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"This release mainly improves UI and UE, bugfix and adds test cases."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Manager API")," 2.6 should be used with ",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"Apache APISIX 2.5"),". It is not recommended to use with other Apache APISIX versions."),(0,p.kt)("h3",{id:"core"},"Core"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Change: remove listen.host from api/conf/conf.yaml ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1767"},"#1767")),(0,p.kt)("li",{parentName:"ul"},"Change: remove ID of consumer ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1745"},"#1745")),(0,p.kt)("li",{parentName:"ul"},"Feat: Support duplicate one existing Route ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1558"},"#1558")),(0,p.kt)("li",{parentName:"ul"},"Feat: add response header in debug view ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1691"},"#1691")),(0,p.kt)("li",{parentName:"ul"},"Feat: add basic-auth UI Form ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1718"},"#1718")),(0,p.kt)("li",{parentName:"ul"},"Feat: add limit-count plugin form ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1739"},"#1739")),(0,p.kt)("li",{parentName:"ul"},"Feat: add referer-restriction plugin form ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1727"},"#1727")),(0,p.kt)("li",{parentName:"ul"},"Feat: added cors plugin form ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1733"},"#1733")),(0,p.kt)("li",{parentName:"ul"},"Feat: added limit-req plugin form ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1732"},"#1732")),(0,p.kt)("li",{parentName:"ul"},"Feat: add api-breaker plugin form ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1730"},"#1730")),(0,p.kt)("li",{parentName:"ul"},"Feat: add proxy-mirror plugin form ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1725"},"#1725")),(0,p.kt)("li",{parentName:"ul"},"Feat: add limit-conn plugin form ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1728"},"#1728")),(0,p.kt)("li",{parentName:"ul"},"Feat: refactor upstream form module ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1726"},"#1726")),(0,p.kt)("li",{parentName:"ul"},"Feat: added types for Plugins ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1736"},"#1736")),(0,p.kt)("li",{parentName:"ul"},"Feat: support auto build rpm package for dashboard ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1766"},"#1766")),(0,p.kt)("li",{parentName:"ul"},"Feat: improve UI and UE (",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1674"},"#1674"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1702"},"#1702"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1707"},"#1707"),",",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1715"},"#1715"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1723"},"#1723"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1782"},"#1782"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1610"},"#1610"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1764"},"#1764"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1735"},"#1735"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1771"},"#1771"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1748"},"#1748"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1749"},"#1749"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1751"},"#1751"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1679"},"#1679"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1750"},"#1750"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1731"},"#1731"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1747"},"#1747"),")")),(0,p.kt)("h3",{id:"bugfix"},"Bugfix"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Fix: unable to export route with nil methods field ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1673"},"#1673")),(0,p.kt)("li",{parentName:"ul"},"Fix: incorrect conversion between integer types ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1753"},"#1753")),(0,p.kt)("li",{parentName:"ul"},"Fix: user login request should remove its own prefix option ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1701"},"#1701")),(0,p.kt)("li",{parentName:"ul"},"Fix: show correct health checker ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1784"},"#1784"))),(0,p.kt)("h3",{id:"test-case"},"Test Case"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Test: use gomega match assertion ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1678"},"#1678")),(0,p.kt)("li",{parentName:"ul"},"Test: updated cli_test.sh according reg ex ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1696"},"#1696")),(0,p.kt)("li",{parentName:"ul"},"Test: reduce FE e2e ci time ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1698"},"#1698")," ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1762"},"#1762")),(0,p.kt)("li",{parentName:"ul"},"Test: adding a retry mechanism to FE testing ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1752"},"#1752")),(0,p.kt)("li",{parentName:"ul"},"Test: fix online debug test case ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1761"},"#1761")),(0,p.kt)("li",{parentName:"ul"},"Test: write backend e2e with ginkgo (",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1663"},"#1663"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1677"},"#1677"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1675"},"#1675"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1676"},"#1676"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1704"},"#1704"),", ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1755"},"#1755"),")")),(0,p.kt)("h3",{id:"doc"},"Doc"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Docs: add more details and examples to import openapi guide ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1672"},"#1672"))))}o.isMDXComponent=!0}}]);