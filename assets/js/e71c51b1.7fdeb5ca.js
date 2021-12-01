"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6042],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40352:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"openwhisk"},o=void 0,p={unversionedId:"plugins/openwhisk",id:"plugins/openwhisk",isDocsHomePage:!1,title:"openwhisk",description:"\x3c!--",source:"@site/docs/apisix/plugins/openwhisk.md",sourceDirName:"plugins",slug:"/plugins/openwhisk",permalink:"/docs/apisix/next/plugins/openwhisk",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/openwhisk.md",tags:[],version:"current",frontMatter:{title:"openwhisk"},sidebar:"docs",previous:{title:"azure-functions",permalink:"/docs/apisix/next/plugins/azure-functions"},next:{title:"aws-lambda",permalink:"/docs/apisix/next/plugins/aws-lambda"}},u=[{value:"Summary",id:"summary",children:[]},{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Example",id:"example",children:[]}],s={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#description"},(0,l.kt)("strong",{parentName:"a"},"Description"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},(0,l.kt)("strong",{parentName:"a"},"Attributes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example"},(0,l.kt)("strong",{parentName:"a"},"Example")))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"openwhisk")," plugin is used to support integration with the ",(0,l.kt)("a",{parentName:"p",href:"https://openwhisk.apache.org"},"Apache OpenWhisk")," serverless platform and can be set up on a route in place of Upstream, which will take over the request and send it to the OpenWhisk API endpoint."),(0,l.kt)("p",null,"Users can call the OpenWhisk action via APISIX, pass the request parameters via JSON and get the response content."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api_host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"OpenWhisk API host (eg. https://localhost:3233)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to verify the certificate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service_token"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"OpenWhisk ServiceToken (The format is ",(0,l.kt)("inlineCode",{parentName:"td"},"xxx:xxx"),"\uff0cPassed through Basic Auth when calling the API)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"OpenWhisk  Namespace (eg. guest)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"action"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"OpenWhisk Action (eg. hello)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to get Action metadata (default to execute function and get response; false to get Action metadata but not execute Action, including runtime, function body, restrictions, etc.)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"60000ms"),(0,l.kt)("td",{parentName:"tr",align:null},"[1, 60000]","ms"),(0,l.kt)("td",{parentName:"tr",align:null},"OpenWhisk Action and HTTP call timeout.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP keepalive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"60000ms"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0","[1000,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"keepalive idle timeout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"Connection pool limit")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," property controls both the time taken by the OpenWhisk Action to execute and the timeout of the HTTP client in APISIX. OpenWhisk Action calls may consume time on pulling the runtime image and starting the container, so if you set the value too small, you may cause a large number of requests to fail. OpenWhisk supports timeouts ranging from 1ms to 60000ms, and we recommended to set at least 1000ms or more.")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"First, you need to run the OpenWhisk environment. Here is an example of using OpenWhisk standalone mode."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -d \\\n  -h openwhisk --name openwhisk \\\n  -p 3233:3233 -p 3232:3232 \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  openwhisk/standalone:nightly\ndocker exec openwhisk waitready\n")),(0,l.kt)("p",null,"Then, you need to create an Action for testing."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'wsk property set --apihost "http://localhost:3233" --auth "23bc46b1-71f6-4ed5-8c54-816aa4f8c502:123zO3xZCLrMN6v2BKK1dXYFpXlPkccOFqm12CdAsMgRU4VrNZ9lyGVCGuMDGIwP"\nwsk action update test <(echo \'function main(){return {"ready":true}}\') --kind nodejs:14\n')),(0,l.kt)("p",null,"Here is an example of creating a Route and enabling this plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "openwhisk": {\n            "api_host": "http://localhost:3233",\n            "service_token": "23bc46b1-71f6-4ed5-8c54-816aa4f8c502:123zO3xZCLrMN6v2BKK1dXYFpXlPkccOFqm12CdAsMgRU4VrNZ9lyGVCGuMDGIwP",\n            "namespace": "guest",\n            "action": "test"\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"Finally, you can send a request to this route and you will get the following response. And you can disable it by removing the openwhsik plugin from the route."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"ready": true}\n')))}m.isMDXComponent=!0}}]);