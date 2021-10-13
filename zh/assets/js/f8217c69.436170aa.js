"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47680],{3905:function(t,e,n){n.d(e,{Zo:function(){return h},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},h=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,h=d(t,["components","mdxType","originalType","parentName"]),m=o(n),u=r,c=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return n?a.createElement(c,i(i({ref:e},h),{},{components:n})):a.createElement(c,i({ref:e},h))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45737:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return o},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"ApisixUpstream Reference"},d=void 0,p={unversionedId:"references/apisix_upstream",id:"references/apisix_upstream",isDocsHomePage:!1,title:"ApisixUpstream Reference",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/references/apisix_upstream.md",sourceDirName:"references",slug:"/references/apisix_upstream",permalink:"/zh/docs/ingress-controller/references/apisix_upstream",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/references/apisix_upstream.md",tags:[],version:"current",frontMatter:{title:"ApisixUpstream Reference"},sidebar:"docs",previous:{title:"ApisixRoute/v2beta1 Reference",permalink:"/zh/docs/ingress-controller/references/apisix_route_v2beta1"},next:{title:"ApisixTls Reference",permalink:"/zh/docs/ingress-controller/references/apisix_tls"}},o=[],h={toc:o};function s(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scheme"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The protocol used to talk to the Service, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"http"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"grpc"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"http"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadbalancer"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The load balancing algorithm of this upstream service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadbalancer.type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The load balancing type, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"roundrobin"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"ewma"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"least_conn"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"chash"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"roundrobin"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadbalancer.hashOn"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The hash value source scope, only take effects if the ",(0,l.kt)("inlineCode",{parentName:"td"},"chash")," algorithm is in use. Values can ",(0,l.kt)("inlineCode",{parentName:"td"},"vars"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"header"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"vars_combinations"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"cookie")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"consumers"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"vars"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadbalancer.key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The hash key, only in valid if the ",(0,l.kt)("inlineCode",{parentName:"td"},"chash")," algorithm is used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retries"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The retry count.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The timeout settings.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout.connect"),(0,l.kt)("td",{parentName:"tr",align:null},'time duration in the form "72h3m0.5s"'),(0,l.kt)("td",{parentName:"tr",align:null},"The connect timeout.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout.read"),(0,l.kt)("td",{parentName:"tr",align:null},'time duration in the form "72h3m0.5s"'),(0,l.kt)("td",{parentName:"tr",align:null},"The read timeout.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout.send"),(0,l.kt)("td",{parentName:"tr",align:null},'time duration in the form "72h3m0.5s"'),(0,l.kt)("td",{parentName:"tr",align:null},"The send timeout.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The health check parameters, see ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/health-check.md"},"Health Check")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"active health check configuration, which is a mandatory field.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"health check type, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"http"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"https")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"tcp"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"http"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},'time duration in the form "72h3m0.5s"'),(0,l.kt)("td",{parentName:"tr",align:null},"the timeout settings for the probe, default is ",(0,l.kt)("inlineCode",{parentName:"td"},"1s"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.concurrency"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"how many probes can be sent simultaneously, default is ",(0,l.kt)("inlineCode",{parentName:"td"},"10"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"host header in http probe request, only in valid if the active health check type is ",(0,l.kt)("inlineCode",{parentName:"td"},"http")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.port"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"target port to receive probes, it's necessary to specify this field if the health check service exposes by different port, note the port value here is the container port, not the service port.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.httpPath"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the HTTP URI path in http probe, only in valid if the active health check type is ",(0,l.kt)("inlineCode",{parentName:"td"},"http")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.strictTLS"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"whether to use the strict mode when use TLS, only in valid if the active health check type is ",(0,l.kt)("inlineCode",{parentName:"td"},"https"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.requestHeaders"),(0,l.kt)("td",{parentName:"tr",align:null},"array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"Extra HTTP requests carried in the http probe, only in valid if the active health check type is ",(0,l.kt)("inlineCode",{parentName:"td"},"http")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.healthy"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The conditions to judge an endpoint is healthy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.healthy.successes"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of consecutive requests needed to set an endpoint as healthy, default is ",(0,l.kt)("inlineCode",{parentName:"td"},"2"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.healthy.httpCodes"),(0,l.kt)("td",{parentName:"tr",align:null},"array of integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Good status codes list to check whether a probe is successful, only in valid if the active health check type is ",(0,l.kt)("inlineCode",{parentName:"td"},"http")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"[200, 302]"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.healthy.interval"),(0,l.kt)("td",{parentName:"tr",align:null},'time duration in the form "72h3m0.5s"'),(0,l.kt)("td",{parentName:"tr",align:null},"The probes sent interval (for healthy endpoints).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.unhealthy"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The conditions to judge an endpoint is unhealthy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.unhealthy.httpFailures"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of consecutive http requests needed to set an endpoint as unhealthy, only in valid if the active health check type is ",(0,l.kt)("inlineCode",{parentName:"td"},"http")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"5"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.unhealthy.tcpFailures"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of consecutive tcp connections needed to set an endpoint as unhealthy, only in valid if the active health check type is ",(0,l.kt)("inlineCode",{parentName:"td"},"tcp"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"2"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.unhealthy.httpCodes"),(0,l.kt)("td",{parentName:"tr",align:null},"array of integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bad status codes list to check whether a probe is failed, only in valid if the active health check type is ",(0,l.kt)("inlineCode",{parentName:"td"},"http")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"[429, 404, 500, 501, 502, 503, 504, 505]"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.active.unhealthy.interval"),(0,l.kt)("td",{parentName:"tr",align:null},'time duration in the form "72h3m0.5s"'),(0,l.kt)("td",{parentName:"tr",align:null},"The probes sent interval (for unhealthy endpoints).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.passive"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"passive health check configuration, which is an optional field.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.passive.type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"health check type, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"http"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"https")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"tcp"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"http"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.passive.healthy"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The conditions to judge an endpoint is healthy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.passive.healthy.successes"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of consecutive requests needed to set an endpoint as healthy, default is ",(0,l.kt)("inlineCode",{parentName:"td"},"5"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.passive.healthy.httpCodes"),(0,l.kt)("td",{parentName:"tr",align:null},"array of integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Good status codes list to check whether a probe is successful, only in valid if the active health check type is ",(0,l.kt)("inlineCode",{parentName:"td"},"http")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"[200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308]"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.passive.unhealthy"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The conditions to judge an endpoint is unhealthy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.passive.unhealthy.httpFailures"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of consecutive http requests needed to set an endpoint as unhealthy, only in valid if the active health check type is ",(0,l.kt)("inlineCode",{parentName:"td"},"http")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"5"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.passive.unhealthy.tcpFailures"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of consecutive tcp connections needed to set an endpoint as unhealthy, only in valid if the active health check type is ",(0,l.kt)("inlineCode",{parentName:"td"},"tcp"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"2"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheck.passive.unhealthy.httpCodes"),(0,l.kt)("td",{parentName:"tr",align:null},"array of integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bad status codes list to check whether a probe is failed, only in valid if the active health check type is ",(0,l.kt)("inlineCode",{parentName:"td"},"http")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https"),", default is ",(0,l.kt)("inlineCode",{parentName:"td"},"[429, 404, 500, 501, 502, 503, 504, 505]"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"portLevelSettings"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"Settings for each individual port.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"portLevelSettings.port"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The port number defined in the Kubernetes Service, must be a valid port.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"portLevelSettings.scheme"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"same as ",(0,l.kt)("inlineCode",{parentName:"td"},"scheme")," but takes higher precedence.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"portLevelSettings.loadbalancer"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"same as ",(0,l.kt)("inlineCode",{parentName:"td"},"loadbalancer")," but takes higher precedence.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"portLevelSettings.healthCheck"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"same as ",(0,l.kt)("inlineCode",{parentName:"td"},"healthCheck")," but takes higher precedence.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subsets"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"service subset list, use pod labels to organize service endpoints to different groups.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subsets[].name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the subset name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subsets[].labels"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"the subset label map.")))))}s.isMDXComponent=!0}}]);