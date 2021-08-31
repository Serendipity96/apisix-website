(self.webpackChunk=self.webpackChunk||[]).push([[30122],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),h=n,d=m["".concat(p,".").concat(h)]||m[h]||s[h]||i;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26848:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),o={title:"Release Apache APISIX 1.0",tags:["APISIX"]},l={permalink:"/releases/2020/01/15/release-apache-apisix-1.0",source:"@site/releases/2020-1-15-release-apache-apisix-1.0.md",title:"Release Apache APISIX 1.0",description:"This release is mainly to strengthen the stability of the code and add more documentation.",date:"2020-01-15T00:00:00.000Z",formattedDate:"January 15, 2020",tags:[{label:"APISIX",permalink:"/releases/tags/apisix"}],readingTime:1.075,truncated:!1,prevItem:{title:"Release Apache APISIX Dashboard 1.0",permalink:"/releases/2020/02/24/release-apache-apisix-dashboard-1.0"},nextItem:{title:"Release Apache APISIX 0.9",permalink:"/releases/2019/11/15/release-apache-apisix-0.9"}},p=[{value:"Core",id:"core",children:[]},{value:"Doc",id:"doc",children:[]},{value:"Test case",id:"test-case",children:[]}],u={toc:p};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This release is mainly to strengthen the stability of the code and add more documentation."),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 Support routing priority. You can match different upstream services based on conditions such as header, args, priority, etc. under the same URI. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/998"},"#998")),(0,i.kt)("li",{parentName:"ul"},"When no route is matched, an error message is returned. To distinguish it from other 404 requests. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1013"},"#1013")),(0,i.kt)("li",{parentName:"ul"},"The address of the dashboard ",(0,i.kt)("inlineCode",{parentName:"li"},"/apisix/admin")," supports CORS. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/982"},"#982")),(0,i.kt)("li",{parentName:"ul"},"The jsonschema validator returns a clearer error message. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1011"},"#1011")),(0,i.kt)("li",{parentName:"ul"},"Upgrade the ",(0,i.kt)("inlineCode",{parentName:"li"},"ngx_var")," module to version 0.5. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1005"},"#1005")),(0,i.kt)("li",{parentName:"ul"},"Upgrade the ",(0,i.kt)("inlineCode",{parentName:"li"},"lua-resty-etcd")," module to version 0.8. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/980"},"#980")),(0,i.kt)("li",{parentName:"ul"},"In development mode, the number of workers is automatically adjusted to 1. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/926"},"#926")),(0,i.kt)("li",{parentName:"ul"},"Remove the nginx.conf file from the code repository. It is automatically generated every time and cannot be modified manually. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/974"},"#974"))),(0,i.kt)("h3",{id:"doc"},"Doc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added documentation on how to customize development plugins. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/909"},"#909")),(0,i.kt)("li",{parentName:"ul"},"fixed example's bugs in the serverless plugin documentation. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1006"},"#1006")),(0,i.kt)("li",{parentName:"ul"},"Added documentation for using the Oauth plugin. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/987"},"#987")),(0,i.kt)("li",{parentName:"ul"},"Added dashboard compiled documentation. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/985"},"#985")),(0,i.kt)("li",{parentName:"ul"},"Added documentation on how to perform a/b testing. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/957"},"#957")),(0,i.kt)("li",{parentName:"ul"},"Added documentation on how to enable the MQTT plugin. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/916"},"#916"))),(0,i.kt)("h3",{id:"test-case"},"Test case"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add test cases for key-auth plugin under normal circumstances. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/964/"},"#964")),(0,i.kt)("li",{parentName:"ul"},"Added tests for gRPC transcode pb options. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/920"},"#920"))))}c.isMDXComponent=!0}}]);