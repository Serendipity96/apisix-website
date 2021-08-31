(self.webpackChunk=self.webpackChunk||[]).push([[37927],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(a),d=n,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},47639:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),o={title:"Release Apache APISIX Dashboard 2.2",tags:["APISIX Dashboard"]},l={permalink:"/zh/releases/2020/12/16/release-apache-apisix-dashboard-2.2",source:"@site/releases/2020-12-16-release-apache-apisix-dashboard-2.2.md",title:"Release Apache APISIX Dashboard 2.2",description:"This release mainly improve basic features, bugfix and adds test cases.",date:"2020-12-16T00:00:00.000Z",formattedDate:"2020\u5e7412\u670816\u65e5",tags:[{label:"APISIX Dashboard",permalink:"/zh/releases/tags/apisix-dashboard"}],readingTime:.69,truncated:!1,prevItem:{title:"Release Apache APISIX Ingress Controller 0.1.0",permalink:"/zh/releases/2020/12/23/release-apache-apisix-ingress-controller-0.1.0"},nextItem:{title:"Release Apache APISIX 2.1",permalink:"/zh/releases/2020/12/01/release-apache-apisix-2.1"}},p=[{value:"Core",id:"core",children:[]},{value:"Test case",id:"test-case",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],s={toc:p};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This release mainly improve basic features, bugfix and adds test cases."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Manager API")," 2.2 should be used with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.1"},"Apache APISIX 2.1"),". It is not recommended to use with other Apache APISIX versions."),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support access log for Manager API. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/994"},"#994")),(0,i.kt)("li",{parentName:"ul"},"Enhance error log for Manager API. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/977"},"#977")),(0,i.kt)("li",{parentName:"ul"},"Integrate with code-mirror to have a fallback to plugins render issue. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/898"},"#898")),(0,i.kt)("li",{parentName:"ul"},"Support priority field in Route module. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1006"},"#1006")),(0,i.kt)("li",{parentName:"ul"},"Add etcd basic auth support ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/951"},"#951"))),(0,i.kt)("h3",{id:"test-case"},"Test case"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enhance e2e test cases for upstream. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/971"},"#971")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/972"},"#972")),(0,i.kt)("li",{parentName:"ul"},"Refactor unit test for consumer handler. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/840"},"#840"))),(0,i.kt)("h2",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JSON schema verification should be performed on the original data submitted by the user. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/986"},"#986")),(0,i.kt)("li",{parentName:"ul"},"fix PATCH method bug. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1005"},"#1005")),(0,i.kt)("li",{parentName:"ul"},"remove husky to resolve Docker Deploy failed. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1018"},"#1018"))),(0,i.kt)("p",null,"For more changes, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/milestone/5"},"Milestone"),"."))}c.isMDXComponent=!0}}]);