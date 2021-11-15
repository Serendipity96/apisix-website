"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70344],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62146:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"proxy-cache"},o=void 0,c={unversionedId:"plugins/proxy-cache",id:"version-2.4/plugins/proxy-cache",isDocsHomePage:!1,title:"proxy-cache",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.4/plugins/proxy-cache.md",sourceDirName:"plugins",slug:"/plugins/proxy-cache",permalink:"/docs/apisix/2.4/plugins/proxy-cache",editUrl:"https://github.com/apache/apisix/edit/release/2.4/docs/en/latest/plugins/proxy-cache.md",tags:[],version:"2.4",frontMatter:{title:"proxy-cache"},sidebar:"version-2.4/docs",previous:{title:"limit-connt",permalink:"/docs/apisix/2.4/plugins/limit-count"},next:{title:"request-validation",permalink:"/docs/apisix/2.4/plugins/request-validation"}},p=[{value:"Attributes",id:"attributes",children:[{value:"Examples",id:"examples",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The proxy-cache plugin, which provides the ability to cache upstream response data and can be used with other plugins. The plugin supports disk-based caching and will support the memory-based caching in the future. The data that needs to be cached can be determined by the response code or request method and more complex caching policies can be configured by no_cache and cache_bypass attributes."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note"),":"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The cache expiration time cannot be configured dynamically. The expiration time can only be set by the upstream response header ",(0,l.kt)("inlineCode",{parentName:"li"},"Expires")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Cache-Control"),", and the default cache expiration time is 10s if there is no ",(0,l.kt)("inlineCode",{parentName:"li"},"Expires")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Cache-Control")," in the upstream response header"),(0,l.kt)("li",{parentName:"ol"},"If the upstream service is not available and APISIX will return 502 or 504, then 502 or 504 will be cached for 10s.")),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache_zone"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"disk_cache_one"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify which cache area to use, each cache area can be configured with different paths. In addition, cache areas can be predefined in conf/config.yaml file. When the default value is not used, the specified cache area is inconsistent with the pre-defined cache area in the conf/config.yaml file, and the cache is invalid.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache_key"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'["$host", "$request_uri"]'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"key of a cache, can use variables. For example: ",'["$host", "$uri", "-cache-id"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache_bypass"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to skip cache retrieval. That is, do not look for data in the cache. It can use variables, and note that cache data retrieval will be skipped when the value of this attribute is not empty or not '0'. For example: ",'["$arg_bypass"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache_method"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},'["GET", "HEAD"]'),(0,l.kt)("td",{parentName:"tr",align:null},'["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD","OPTIONS", "CONNECT", "TRACE"]'),(0,l.kt)("td",{parentName:"tr",align:null},"Decide whether to be cached according to the request method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache_http_status"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"[200, 301, 404]"),(0,l.kt)("td",{parentName:"tr",align:null},"[200, 599]"),(0,l.kt)("td",{parentName:"tr",align:null},"Decide whether to be cached according to the upstream response status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hide_cache_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to return the Expires and Cache-Control response headers to the client,")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no_cache"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to cache data, it can use variables, and note that the data will not be cached when the value of this attribute is not empty or not '0'.")))),(0,l.kt)("p",null,"Note:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The variable starts with $."),(0,l.kt)("li",{parentName:"ol"},"The attribute can use a combination of the variable and the string, but it needs to be written separately as an array, and the final values are stitched together after the variable is parsed.")),(0,l.kt)("p",null,"Example configuration in the ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'proxy_cache:                       # Proxy Caching configuration\n    cache_ttl: 10s                 # The default caching time if the upstream does not specify the cache time\n    zones:                         # The parameters of a cache\n    - name: disk_cache_one         # The name of the cache, administrator can be specify\n                                   # which cache to use by name in the admin api\n      memory_size: 50m             # The size of shared memory, it\'s used to store the cache index\n      disk_size: 1G                # The size of disk, it\'s used to store the cache data\n      disk_path: "/tmp/disk_cache_one" # The path to store the cache data\n      cache_levels: "1:2"          # The hierarchy levels of a cache\n')),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("h4",{id:"enable-the-plugin"},"Enable the plugin"),(0,l.kt)("p",null,"Example 1: The cache_zone parameter defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"disk_cache_one")),(0,l.kt)("p",null,"1:  enable the proxy-cache plugin for a specific route :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "proxy-cache": {\n            "cache_key":  ["$uri", "-cache-id"],\n            "cache_bypass": ["$arg_bypass"],\n            "cache_method": ["GET"],\n            "cache_http_status": [200],\n            "hide_cache_headers": true,\n            "no_cache": ["$arg_test"]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1999": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("p",null,"Test Plugin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 6\nConnection: keep-alive\nServer: APISIX web server\nDate: Tue, 03 Mar 2020 10:45:36 GMT\nLast-Modified: Tue, 03 Mar 2020 10:36:38 GMT\nApisix-Cache-Status: MISS\n\nhello\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"http status is '200' and the response header contains 'Apisix-Cache-Status' to indicate that the plugin is enabled.")),(0,l.kt)("p",null,"2: Verify that the data is cached, request the address above again:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 6\nConnection: keep-alive\nServer: APISIX web server\nDate: Tue, 03 Mar 2020 11:14:46 GMT\nLast-Modified: Thu, 20 Feb 2020 14:21:41 GMT\nApisix-Cache-Status: HIT\n\nhello\n")),(0,l.kt)("p",null,"Example 2: Customize the cache_zone parameter to ",(0,l.kt)("inlineCode",{parentName:"p"},"disk_cache_two")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Specify the cache area and other information in the ",(0,l.kt)("inlineCode",{parentName:"li"},"conf/config.yaml")," file:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'proxy_cache:\n    cache_ttl: 10s\n    zones:\n    - name: disk_cache_two\n      memory_size: 50m\n      disk_size: 1G\n      disk_path: "/tmp/disk_cache_one"\n      cache_levels: "1:2"\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Enable the ",(0,l.kt)("inlineCode",{parentName:"li"},"proxy-cache")," plugin for a specific route:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "proxy-cache": {\n            "cache_zone": "disk_cache_two",\n            "cache_key":  ["$uri", "-cache-id"],\n            "cache_bypass": ["$arg_bypass"],\n            "cache_method": ["GET"],\n            "cache_http_status": [200],\n            "hide_cache_headers": true,\n            "no_cache": ["$arg_test"]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1999": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("p",null,"Test Plugin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 6\nConnection: keep-alive\nServer: APISIX web server\nDate: Tue, 03 Mar 2020 10:45:36 GMT\nLast-Modified: Tue, 03 Mar 2020 10:36:38 GMT\nApisix-Cache-Status: MISS\n\nhello\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"http status is '200' and the response header contains 'Apisix-Cache-Status' to indicate that the plug-in is enabled.")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Verify that the data is cached and request the above address again:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 6\nConnection: keep-alive\nServer: APISIX web server\nDate: Tue, 03 Mar 2020 11:14:46 GMT\nLast-Modified: Thu, 20 Feb 2020 14:21:41 GMT\nApisix-Cache-Status: HIT\n\nhello\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The response header ",(0,l.kt)("inlineCode",{parentName:"p"},"Apisix-Cache-Status")," value has changed to HIT, indicating that the data has been cached")),(0,l.kt)("p",null,"Example 3: Specifying cache_zone as ",(0,l.kt)("inlineCode",{parentName:"p"},"invalid_disk_cache")," is inconsistent with the cache area ",(0,l.kt)("inlineCode",{parentName:"p"},"disk_cache_one")," specified in the ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "proxy-cache": {\n            "cache_zone": "invalid_disk_cache",\n            "cache_key":  ["$uri", "-cache-id"],\n            "cache_bypass": ["$arg_bypass"],\n            "cache_method": ["GET"],\n            "cache_http_status": [200],\n            "hide_cache_headers": true,\n            "no_cache": ["$arg_test"]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1999": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"error_msg":"failed to check the configuration of plugin proxy-cache err: cache_zone invalid_disk_cache not found"}\n')),(0,l.kt)("p",null,"In response to an error message, the plug-in configuration is invalid."),(0,l.kt)("h4",{id:"clear-cached-data"},"Clear cached data"),(0,l.kt)("p",null,"How to clean the cached data only needs to specify the requested method as PURGE."),(0,l.kt)("p",null,"Test Plugin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello -X PURGE\nHTTP/1.1 200 OK\nDate: Tue, 03 Mar 2020 11:17:35 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the response code is 200, it means the deletion is successful. If the cached data is not found, 404 will be returned.")),(0,l.kt)("p",null,"Request again, the cached data is not found and return 404:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello -X PURGE\nHTTP/1.1 404 Not Found\nDate: Wed, 18 Nov 2020 05:46:34 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n<html>\n<head><title>404 Not Found</title></head>\n<body>\n<center><h1>404 Not Found</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"Remove the corresponding JSON in the plugin configuration to disable the plugin immediately without restarting the service:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1999": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"The plugin has been disabled now."))}h.isMDXComponent=!0}}]);