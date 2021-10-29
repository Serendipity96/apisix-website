"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84151],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,g=s["".concat(d,".").concat(m)]||s[m]||p[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},216:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"Debug Mode"},o=void 0,d={unversionedId:"architecture-design/debug-mode",id:"version-2.10/architecture-design/debug-mode",isDocsHomePage:!1,title:"Debug Mode",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10/architecture-design/debug-mode.md",sourceDirName:"architecture-design",slug:"/architecture-design/debug-mode",permalink:"/docs/apisix/architecture-design/debug-mode",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/debug-mode.md",tags:[],version:"2.10",frontMatter:{title:"Debug Mode"},sidebar:"version-2.10/docs",previous:{title:"Router",permalink:"/docs/apisix/architecture-design/router"},next:{title:"Getting Started",permalink:"/docs/apisix/getting-started"}},u=[{value:"Basic Debug Mode",id:"basic-debug-mode",children:[]},{value:"Advanced Debug Mode",id:"advanced-debug-mode",children:[]},{value:"Enable Advanced Debug Mode Dynamically",id:"enable-advanced-debug-mode-dynamically",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"basic-debug-mode"},"Basic Debug Mode"),(0,l.kt)("p",null,"Enable basic debug mode via ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/debug.yaml")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"basic:\n  enable: true\n")),(0,l.kt)("p",null,"Note: before APISIX 2.10, we enabled basic debug mode by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix.enable_debug = true")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," file."),(0,l.kt)("p",null,"e.g Using both ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-conn")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-count")," plugins for a ",(0,l.kt)("inlineCode",{parentName:"p"},"/hello")," request, there will have a response header called ",(0,l.kt)("inlineCode",{parentName:"p"},"Apisix-Plugins: limit-conn, limit-count"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:1984/hello -i\nHTTP/1.1 200 OK\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nApisix-Plugins: limit-conn, limit-count\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 1\nServer: openresty\n\nhello world\n")),(0,l.kt)("p",null,"If the information can not be delivered via HTTP response header, for example, the plugin is in stream\nsubsystem, the information will be logged in the error log with ",(0,l.kt)("inlineCode",{parentName:"p"},"warn")," level."),(0,l.kt)("h3",{id:"advanced-debug-mode"},"Advanced Debug Mode"),(0,l.kt)("p",null,"Enable advanced debug mode by modifying the configuration in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/debug.yaml")," file. Because there will be a check every second, only the checker reads the ",(0,l.kt)("inlineCode",{parentName:"p"},"#END")," flag, and the file would be considered as closed."),(0,l.kt)("p",null,"The checker would judge whether the file data changed according to the last modification time of the file. If there has any change, reload it. If there was no change, skip this check. So it's hot reload for enabling or disabling advanced debug mode."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/Disable hook debug trace. Target module function's input arguments or returned value would be printed once this option is enabled."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.name"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"The module list name of hook which has enabled debug trace."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.log_level"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Logging levels for input arguments & returned value."),(0,l.kt)("td",{parentName:"tr",align:null},"warn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.is_print_input_args"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/Disable input arguments print."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.is_print_return_value"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/Disable returned value print."),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"hook_conf:\n  enable: false # Enable/Disable Hook Debug Trace\n  name: hook_phase # The Module List Name of Hook which has enabled Debug Trace\n  log_level: warn # Logging Levels\n  is_print_input_args: true # Enable/Disable Input Arguments Print\n  is_print_return_value: true # Enable/Disable Returned Value Print\n\nhook_phase: # Module Function List, Name: hook_phase\n  apisix: # Referenced Module Name\n    - http_access_phase # Function Names\uff1aArray\n    - http_header_filter_phase\n    - http_body_filter_phase\n    - http_log_phase\n#END\n")),(0,l.kt)("h3",{id:"enable-advanced-debug-mode-dynamically"},"Enable Advanced Debug Mode Dynamically"),(0,l.kt)("p",null,"The advanced debug mode can take effect in particular requests by dynamic rule."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"http_filter:\n  enable: true # Enable/Disable Advanced Debug Mode Dynamically\n  enable_header_name: X-APISIX-Dynamic-Debug # Trace for the request with this header\n......\n#END\n")),(0,l.kt)("p",null,"Dynamically enable advanced debugging mode in a particular request like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl 127.0.0.1:9090/hello --header 'X-APISIX-Dynamic-Debug: foo'\n")),(0,l.kt)("p",null,"Notice: We can not hook the ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix.http_access_phase")," module for particular requests, since whether the advanced debug mode is enabled is determined after these requests enter such phase."))}p.isMDXComponent=!0}}]);