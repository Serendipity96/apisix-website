"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18981],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99173:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l={title:"azure-functions"},o=void 0,u={unversionedId:"plugins/azure-functions",id:"plugins/azure-functions",isDocsHomePage:!1,title:"azure-functions",description:"\x3c!--",source:"@site/docs/apisix/plugins/azure-functions.md",sourceDirName:"plugins",slug:"/plugins/azure-functions",permalink:"/docs/apisix/next/plugins/azure-functions",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/azure-functions.md",tags:[],version:"current",frontMatter:{title:"azure-functions"},sidebar:"docs",previous:{title:"serverless",permalink:"/docs/apisix/next/plugins/serverless"},next:{title:"openwhisk",permalink:"/docs/apisix/next/plugins/openwhisk"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"How To Enable",id:"how-to-enable",children:[{value:"Plugin with Path Forwarding",id:"plugin-with-path-forwarding",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#summary"},"Summary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},"Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},"Attributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#metadata"},"Metadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},"How To Enable"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#plugin-with-path-forwarding"},"Plugin with Path Forwarding")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},"Disable Plugin"))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"azure-functions")," is a serverless plugin built into Apache APISIX for seamless integration with ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-in/services/functions/"},"Azure Serverless Function")," as a dynamic upstream to proxy all requests for a particular URI to the Microsoft Azure cloud, one of the most used public cloud platforms for production environment. If enabled, this plugin terminates the ongoing request to that particular URI and initiates a new request to the azure faas (the new upstream) on behalf of the client with the suitable authorization details set by the users, request headers, request body, params ( all these three components are passed from the original request ) and returns the response body, status code and the headers back to the original client that has invoked the request to the APISIX agent."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"function_uri"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The azure function endpoint which triggers the serverless function code (eg. ",(0,i.kt)("a",{parentName:"td",href:"http://test-apisix.azurewebsites.net/api/HttpTrigger"},"http://test-apisix.azurewebsites.net/api/HttpTrigger"),").")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authorization"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Authorization credentials to access the cloud function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authorization.apikey"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Field inside ",(0,i.kt)("em",{parentName:"td"},"authorization"),". The generate API Key to authorize requests to that endpoint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authorization.clientid"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Field inside ",(0,i.kt)("em",{parentName:"td"},"authorization"),". The Client ID ( azure active directory ) to authorize requests to that endpoint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"3000"),(0,i.kt)("td",{parentName:"tr",align:null},"[100,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"Proxy request timeout in milliseconds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"true/false"),(0,i.kt)("td",{parentName:"tr",align:null},"If enabled performs SSL verification of the server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"true/false"),(0,i.kt)("td",{parentName:"tr",align:null},"To reuse the same proxy connection in near future. Set to false to disable keepalives and immediately close the connection.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of connections in the pool.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"60000"),(0,i.kt)("td",{parentName:"tr",align:null},"[1000,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximal idle timeout (ms).")))),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"master_apikey"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'""'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The API KEY secret that could be used to access the azure function uri.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"master_clientid"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'""'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The Client ID (active directory) that could be used the authorize the function uri")))),(0,i.kt)("p",null,"Metadata for ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-functions")," plugin provides the functionality for authorization fallback. It defines ",(0,i.kt)("inlineCode",{parentName:"p"},"master_apikey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"master_clientid")," (azure active directory client id) where users (optionally) can define the master API key or Client ID for mission-critical application deployment. So if there are no authorization details found inside the plugin attribute the authorization details present in the metadata kicks in."),(0,i.kt)("p",null,"The relative priority ordering is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, the plugin looks for ",(0,i.kt)("inlineCode",{parentName:"li"},"x-functions-key")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"x-functions-clientid")," keys inside the request header to the APISIX agent."),(0,i.kt)("li",{parentName:"ul"},"If they are not found, the azure-functions plugin checks for the authorization details inside plugin attributes. If present, it adds the respective header to the request sent to the Azure cloud function."),(0,i.kt)("li",{parentName:"ul"},"If no authorization details are found inside plugin attributes, APISIX fetches the metadata config for this plugin and uses the master keys.")),(0,i.kt)("p",null,"To add a new Master APIKEY, make a request to ",(0,i.kt)("em",{parentName:"p"},"/apisix/admin/plugin_metadata")," endpoint with the updated metadata as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/azure-functions -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '\n{\n    \"master_apikey\" : \"<Your azure master access key>\"\n}'\n")),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("p",null,"The following is an example of how to enable the azure-function faas plugin for a specific APISIX route URI. We are assuming your cloud function is already up and running."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# enable azure function for a route\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "azure-functions": {\n            "function_uri": "http://test-apisix.azurewebsites.net/api/HttpTrigger",\n            "authorization": {\n                "apikey": "<Generated API key to access the Azure-Function>"\n            }\n        }\n    },\n    "uri": "/azure"\n}\'\n')),(0,i.kt)("p",null,"Now any requests (HTTP/1.1, HTTPS, HTTP2) to URI ",(0,i.kt)("inlineCode",{parentName:"p"},"/azure")," will trigger an HTTP invocation to the aforesaid function URI and response body along with the response headers and response code will be proxied back to the client. For example ( here azure cloud function just take the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," query param and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello $name")," ) :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -XGET http://localhost:9080/azure\\?name=APISIX\nHTTP/1.1 200 OK\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nRequest-Context: appId=cid-v1:38aae829-293b-43c2-82c6-fa94aec0a071\nDate: Wed, 17 Nov 2021 14:46:55 GMT\nServer: APISIX/2.10.2\n\nHello, APISIX\n")),(0,i.kt)("p",null,"For requests where the mode of communication between the client and the Apache APISIX gateway is HTTP/2, the example looks like ( make sure you are running APISIX agent with ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_http2: true")," for a port in ",(0,i.kt)("inlineCode",{parentName:"p"},"config-default.yaml"),". You can do it by uncommenting the port 9081 from ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix.node_listen")," field ) :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -XGET --http2 --http2-prior-knowledge http://localhost:9081/azure\\?name=APISIX\nHTTP/2 200\ncontent-type: text/plain; charset=utf-8\nrequest-context: appId=cid-v1:38aae829-293b-43c2-82c6-fa94aec0a071\ndate: Wed, 17 Nov 2021 14:54:07 GMT\nserver: APISIX/2.10.2\n\nHello, APISIX\n")),(0,i.kt)("h3",{id:"plugin-with-path-forwarding"},"Plugin with Path Forwarding"),(0,i.kt)("p",null,'Azure Faas plugin supports url path forwarding while proxying request to the modified upstream. With that being said, any extension to the path of the base request APISIX gateway URI gets "appended" (path join) to the ',(0,i.kt)("inlineCode",{parentName:"p"},"function_uri")," specified in the plugin configuration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": APISIX route uri must be ended with an asterisk (",(0,i.kt)("inlineCode",{parentName:"p"},"*"),") for this feature to work properly. APISIX routes are strictly matched and the extra asterisk at the suffix means any subpath appended to the original parent path will use the same route object configurations."),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "azure-functions": {\n            "function_uri": "http://app-bisakh.azurewebsites.net/api",\n            "authorization": {\n                "apikey": "<Generated API key to access the Azure-Function>"\n            }\n        }\n    },\n    "uri": "/azure/*"\n}\'\n')),(0,i.kt)("p",null,"Now any request with path ",(0,i.kt)("inlineCode",{parentName:"p"},"azure/HttpTrigger1")," will invoke the azure function. Here the extra path (where the magic character ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," has been used) upto the query params have been forwarded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -XGET http://127.0.0.1:9080/azure/HttpTrigger1\\?name\\=APISIX\nHTTP/1.1 200 OK\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Wed, 01 Dec 2021 14:19:53 GMT\nRequest-Context: appId=cid-v1:4d4b6221-07f1-4e1a-9ea0-b86a5d533a94\nServer: APISIX/2.11.0\n\nHello, APISIX\n")),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"Remove the corresponding JSON configuration in the plugin configuration to disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-functions")," plugin and add the suitable upstream configuration.\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/azure",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);