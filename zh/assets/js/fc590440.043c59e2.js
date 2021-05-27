(self.webpackChunk=self.webpackChunk||[]).push([[41711],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=o,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95093:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r={title:"FAQ"},l={unversionedId:"FAQ",id:"version-2.5/FAQ",isDocsHomePage:!1,title:"FAQ",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.5/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/zh/docs/apisix/2.5/FAQ",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/FAQ.md",version:"2.5",frontMatter:{title:"FAQ"},sidebar:"version-2.5/docs",previous:{title:"Control API",permalink:"/zh/docs/apisix/2.5/control-api"},next:{title:"Integration service discovery registry",permalink:"/zh/docs/apisix/2.5/discovery"}},s=[{value:"Why a new API gateway?",id:"why-a-new-api-gateway",children:[]},{value:"What are the differences between APISIX and other API gateways?",id:"what-are-the-differences-between-apisix-and-other-api-gateways",children:[]},{value:"What&#39;s the performance of APISIX?",id:"whats-the-performance-of-apisix",children:[]},{value:"Does APISIX have a console interface?",id:"does-apisix-have-a-console-interface",children:[]},{value:"Can I write my own plugin?",id:"can-i-write-my-own-plugin",children:[]},{value:"Why we choose etcd as the configuration center?",id:"why-we-choose-etcd-as-the-configuration-center",children:[]},{value:"Why is it that installing APISIX dependencies with Luarocks causes timeout, slow or unsuccessful installation?",id:"why-is-it-that-installing-apisix-dependencies-with-luarocks-causes-timeout-slow-or-unsuccessful-installation",children:[]},{value:"How to support gray release via APISIX?",id:"how-to-support-gray-release-via-apisix",children:[]},{value:"How to redirect http to https via APISIX?",id:"how-to-redirect-http-to-https-via-apisix",children:[]},{value:"How to fix OpenResty Installation Failure on MacOS 10.15",id:"how-to-fix-openresty-installation-failure-on-macos-1015",children:[]},{value:"How to change the log level?",id:"how-to-change-the-log-level",children:[]},{value:"How to reload your own plugin?",id:"how-to-reload-your-own-plugin",children:[]},{value:"How to make APISIX listen on multiple ports when handling HTTP or HTTPS requests?",id:"how-to-make-apisix-listen-on-multiple-ports-when-handling-http-or-https-requests",children:[]},{value:"How does APISIX use etcd to achieve millisecond-level configuration synchronization",id:"how-does-apisix-use-etcd-to-achieve-millisecond-level-configuration-synchronization",children:[]},{value:"How to customize the APISIX instance id?",id:"how-to-customize-the-apisix-instance-id",children:[]},{value:"Why there are a lot of &quot;failed to fetch data from etcd, failed to read etcd dir, etcd key: xxxxxx&quot; errors in error.log?",id:"why-there-are-a-lot-of-failed-to-fetch-data-from-etcd-failed-to-read-etcd-dir-etcd-key-xxxxxx-errors-in-errorlog",children:[]},{value:"How to set up high available Apache APISIX clusters?",id:"how-to-set-up-high-available-apache-apisix-clusters",children:[]},{value:"Why does the <code>make deps</code> command fail in source installation?",id:"why-does-the-make-deps-command-fail-in-source-installation",children:[]},{value:"How to access APISIX Dashboard through APISIX proxy",id:"how-to-access-apisix-dashboard-through-apisix-proxy",children:[]},{value:"How to use route <code>uri</code> for regular matching",id:"how-to-use-route-uri-for-regular-matching",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-a-new-api-gateway"},"Why a new API gateway?"),(0,i.kt)("p",null,"There are new requirements for API gateways in the field of microservices: higher flexibility, higher performance requirements, and cloud native."),(0,i.kt)("h2",{id:"what-are-the-differences-between-apisix-and-other-api-gateways"},"What are the differences between APISIX and other API gateways?"),(0,i.kt)("p",null,"APISIX is based on etcd to save and synchronize configuration, not relational databases such as Postgres or MySQL."),(0,i.kt)("p",null,"This not only eliminates polling, makes the code more concise, but also makes configuration synchronization more real-time. At the same time, there will be no single point in the system, which is more usable."),(0,i.kt)("p",null,"In addition, APISIX has dynamic routing and hot loading of plug-ins, which is especially suitable for API management under micro-service system."),(0,i.kt)("h2",{id:"whats-the-performance-of-apisix"},"What's the performance of APISIX?"),(0,i.kt)("p",null,"One of the goals of APISIX design and development is the highest performance in the industry. Specific test data can be found here\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/benchmark.md"},"benchmark")),(0,i.kt)("p",null,"APISIX is the highest performance API gateway with a single-core QPS of 23,000, with an average delay of only 0.6 milliseconds."),(0,i.kt)("h2",{id:"does-apisix-have-a-console-interface"},"Does APISIX have a console interface?"),(0,i.kt)("p",null,"Yes, APISIX has a powerful Dashboard. APISIX and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"APISIX Dashboard")," are independent projects, you can deploy ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"APISIX Dashboard")," to operate APISIX through the web interface."),(0,i.kt)("h2",{id:"can-i-write-my-own-plugin"},"Can I write my own plugin?"),(0,i.kt)("p",null,"Of course, APISIX provides flexible custom plugins for developers and businesses to write their own logic."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.5/plugin-develop"},"How to write plugin")),(0,i.kt)("h2",{id:"why-we-choose-etcd-as-the-configuration-center"},"Why we choose etcd as the configuration center?"),(0,i.kt)("p",null,"For the configuration center, configuration storage is only the most basic function, and APISIX also needs the following features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Cluster"),(0,i.kt)("li",{parentName:"ol"},"Transactions"),(0,i.kt)("li",{parentName:"ol"},"Multi-version Concurrency Control"),(0,i.kt)("li",{parentName:"ol"},"Change Notification"),(0,i.kt)("li",{parentName:"ol"},"High Performance")),(0,i.kt)("p",null,"See more ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd/blob/master/Documentation/learning/why.md#comparison-chart"},"etcd why"),"."),(0,i.kt)("h2",{id:"why-is-it-that-installing-apisix-dependencies-with-luarocks-causes-timeout-slow-or-unsuccessful-installation"},"Why is it that installing APISIX dependencies with Luarocks causes timeout, slow or unsuccessful installation?"),(0,i.kt)("p",null,"There are two possibilities when encountering slow luarocks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Server used for luarocks installation is blocked"),(0,i.kt)("li",{parentName:"ol"},"There is a place between your network and github server to block the 'git' protocol")),(0,i.kt)("p",null,"For the first problem, you can use https_proxy or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--server")," option to specify a luarocks server that you can access or access faster.\nRun the ",(0,i.kt)("inlineCode",{parentName:"p"},"luarocks config rocks_servers")," command(this command is supported after luarocks 3.0) to see which server are available.\nFor China mainland users, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"luarocks.cn")," as the luarocks server."),(0,i.kt)("p",null,"We already provide a wrapper in the Makefile to simplify your job:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"LUAROCKS_SERVER=https://luarocks.cn make deps\n")),(0,i.kt)("p",null,"If using a proxy doesn't solve this problem, you can add ",(0,i.kt)("inlineCode",{parentName:"p"},"--verbose")," option during installation to see exactly how slow it is. Excluding the first case, only the second that the ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," protocol is blocked. Then we can run ",(0,i.kt)("inlineCode",{parentName:"p"},'git config --global url."https://".insteadOf git://')," to using the 'HTTPS' protocol instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"git"),"."),(0,i.kt)("h2",{id:"how-to-support-gray-release-via-apisix"},"How to support gray release via APISIX?"),(0,i.kt)("p",null,"An example, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo.com/product/index.html?id=204&page=2"),", gray release based on ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," in the query string in URL as a condition\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Group A\uff1aid <= 1000"),(0,i.kt)("li",{parentName:"ol"},"Group B\uff1aid > 1000")),(0,i.kt)("p",null,"There are two different ways to do this\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"vars")," field of route to do it.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "vars": [\n        ["arg_id", "<=", "1000"]\n    ],\n    "plugins": {\n        "redirect": {\n            "uri": "/test?group_id=1"\n        }\n    }\n}\'\n\ncurl -i http://127.0.0.1:9080/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "vars": [\n        ["arg_id", ">", "1000"]\n    ],\n    "plugins": {\n        "redirect": {\n            "uri": "/test?group_id=2"\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Here is the operator list of current ",(0,i.kt)("inlineCode",{parentName:"p"},"lua-resty-radixtree"),"\uff1a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iresty/lua-resty-radixtree#operator-list"},"https://github.com/iresty/lua-resty-radixtree#operator-list")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"traffic-split")," plugin to do it.")),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.5/plugins/traffic-split"},"traffic-split.md")," plugin documentation for usage examples."),(0,i.kt)("h2",{id:"how-to-redirect-http-to-https-via-apisix"},"How to redirect http to https via APISIX?"),(0,i.kt)("p",null,"An example, redirect ",(0,i.kt)("inlineCode",{parentName:"p"},"http://foo.com")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://foo.com")),(0,i.kt)("p",null,"There are several different ways to do this."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Directly use the ",(0,i.kt)("inlineCode",{parentName:"li"},"http_to_https")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"redirect")," plugin\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "host": "foo.com",\n    "plugins": {\n        "redirect": {\n            "http_to_https": true\n        }\n    }\n}\'\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Use with advanced routing rule ",(0,i.kt)("inlineCode",{parentName:"li"},"vars")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"redirect")," plugin:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "host": "foo.com",\n    "vars": [\n        [\n            "scheme",\n            "==",\n            "http"\n        ]\n    ],\n    "plugins": {\n        "redirect": {\n            "uri": "https://$host$request_uri",\n            "ret_code": 301\n        }\n    }\n}\'\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"serverless")," plugin\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "serverless-pre-function": {\n            "phase": "rewrite",\n            "functions": ["return function() if ngx.var.scheme == \\"http\\" and ngx.var.host == \\"foo.com\\" then ngx.header[\\"Location\\"] = \\"https://foo.com\\" .. ngx.var.request_uri; ngx.exit(ngx.HTTP_MOVED_PERMANENTLY); end; end"]\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Then test it to see if it works\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -H 'Host: foo.com' http://127.0.0.1:9080/hello\n")),(0,i.kt)("p",null,"The response body should be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HTTP/1.1 301 Moved Permanently\nDate: Mon, 18 May 2020 02:56:04 GMT\nContent-Type: text/html\nContent-Length: 166\nConnection: keep-alive\nLocation: https://foo.com/hello\nServer: APISIX web server\n\n<html>\n<head><title>301 Moved Permanently</title></head>\n<body>\n<center><h1>301 Moved Permanently</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,i.kt)("h2",{id:"how-to-fix-openresty-installation-failure-on-macos-1015"},"How to fix OpenResty Installation Failure on MacOS 10.15"),(0,i.kt)("p",null,"When you install the OpenResty on MacOs 10.15, you may face this error"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"> brew install openresty\nUpdating Homebrew...\n==> Auto-updated Homebrew!\nUpdated 1 tap (homebrew/cask).\nNo changes to formulae.\n\n==> Installing openresty from openresty/brew\nWarning: A newer Command Line Tools release is available.\nUpdate them from Software Update in System Preferences or\nhttps://developer.apple.com/download/more/.\n\n==> Downloading https://openresty.org/download/openresty-1.15.8.2.tar.gz\nAlready downloaded: /Users/wusheng/Library/Caches/Homebrew/downloads/4395089f0fd423261d4f1124b7beb0f69e1121e59d399e89eaa6e25b641333bc--openresty-1.15.8.2.tar.gz\n==> ./configure -j8 --prefix=/usr/local/Cellar/openresty/1.15.8.2 --pid-path=/usr/local/var/run/openresty.pid --lock-path=/usr/\nLast 15 lines from /Users/wusheng/Library/Logs/Homebrew/openresty/01.configure:\nDYNASM    host/buildvm_arch.h\nHOSTCC    host/buildvm.o\nHOSTLINK  host/buildvm\nBUILDVM   lj_vm.S\nBUILDVM   lj_ffdef.h\nBUILDVM   lj_bcdef.h\nBUILDVM   lj_folddef.h\nBUILDVM   lj_recdef.h\nBUILDVM   lj_libdef.h\nBUILDVM   jit/vmdef.lua\nmake[1]: *** [lj_folddef.h] Segmentation fault: 11\nmake[1]: *** Deleting file `lj_folddef.h'\nmake[1]: *** Waiting for unfinished jobs....\nmake: *** [default] Error 2\nERROR: failed to run command: gmake -j8 TARGET_STRIP=@: CCDEBUG=-g XCFLAGS='-msse4.2 -DLUAJIT_NUMMODE=2 -DLUAJIT_ENABLE_LUA52COMPAT' CC=cc PREFIX=/usr/local/Cellar/openresty/1.15.8.2/luajit\n\nIf reporting this issue please do so at (not Homebrew/brew or Homebrew/core):\n  https://github.com/openresty/homebrew-brew/issues\n\nThese open issues may also help:\nCan't install openresty on macOS 10.15 https://github.com/openresty/homebrew-brew/issues/10\nThe openresty-debug package should use openresty-openssl-debug instead https://github.com/openresty/homebrew-brew/issues/3\nFails to install OpenResty https://github.com/openresty/homebrew-brew/issues/5\n\nError: A newer Command Line Tools release is available.\nUpdate them from Software Update in System Preferences or\nhttps://developer.apple.com/download/more/.\n")),(0,i.kt)("p",null,"This is an OS incompatible issue, you could fix by these two steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"brew edit openresty/brew/openresty")),(0,i.kt)("li",{parentName:"ol"},"add ",(0,i.kt)("inlineCode",{parentName:"li"},"\\ -fno-stack-check")," in with-luajit-xcflags line.")),(0,i.kt)("h2",{id:"how-to-change-the-log-level"},"How to change the log level?"),(0,i.kt)("p",null,"The default log level for APISIX is ",(0,i.kt)("inlineCode",{parentName:"p"},"warn"),". However You can change the log level to ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," if you want to trace the messages print by ",(0,i.kt)("inlineCode",{parentName:"p"},"core.log.info"),"."),(0,i.kt)("p",null,"Steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Modify the parameter ",(0,i.kt)("inlineCode",{parentName:"li"},'error_log_level: "warn"')," to ",(0,i.kt)("inlineCode",{parentName:"li"},'error_log_level: "info"')," in conf/config.yaml.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'nginx_config:\n  error_log_level: "info"\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Reload or restart APISIX")),(0,i.kt)("p",null,"Now you can trace the info level log in logs/error.log."),(0,i.kt)("h2",{id:"how-to-reload-your-own-plugin"},"How to reload your own plugin?"),(0,i.kt)("p",null,"The Apache APISIX plugin supports hot reloading.\nSee the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hot reload")," section in ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.5/plugins"},"plugins")," for how to do that."),(0,i.kt)("h2",{id:"how-to-make-apisix-listen-on-multiple-ports-when-handling-http-or-https-requests"},"How to make APISIX listen on multiple ports when handling HTTP or HTTPS requests?"),(0,i.kt)("p",null,"By default, APISIX only listens on port 9080 when handling HTTP requests. If you want APISIX to listen on multiple ports, you need to modify the relevant parameters in the configuration file as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify the parameter of HTTP port listen ",(0,i.kt)("inlineCode",{parentName:"p"},"node_listen")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", for example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"}," apisix:\n   node_listen:\n     - 9080\n     - 9081\n     - 9082\n")),(0,i.kt)("p",{parentName:"li"},"Handling HTTPS requests is similar, modify the parameter of HTTPS port listen ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl.listen_port")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", for example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"apisix:\n  ssl:\n    listen_port:\n      - 9443\n      - 9444\n      - 9445\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Reload or restart APISIX"))),(0,i.kt)("h2",{id:"how-does-apisix-use-etcd-to-achieve-millisecond-level-configuration-synchronization"},"How does APISIX use etcd to achieve millisecond-level configuration synchronization"),(0,i.kt)("p",null,"etcd provides subscription functions to monitor whether the specified keyword or directory is changed (for example: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-etcd/blob/master/api_v3.md#watch"},"watch"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-etcd/blob/master/api_v3.md#watchdir"},"watchdir"),")."),(0,i.kt)("p",null,"APISIX uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-etcd/blob/master/api_v3.md#watchdir"},"etcd.watchdir")," to monitor directory content changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If there is no data update in the monitoring directory: the process will be blocked until timeout or other errors occurred."),(0,i.kt)("li",{parentName:"ul"},"If the monitoring directory has data updates: etcd will return the new subscribed data immediately (in milliseconds), and APISIX will update it to the memory cache.")),(0,i.kt)("p",null,"With the help of etcd which incremental notification feature is millisecond-level, APISIX achieve millisecond-level of configuration synchronization."),(0,i.kt)("h2",{id:"how-to-customize-the-apisix-instance-id"},"How to customize the APISIX instance id?"),(0,i.kt)("p",null,"By default, APISIX will read the instance id from ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/apisix.uid"),". If it is not found, and no id is configured, APISIX will generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," as the instance id."),(0,i.kt)("p",null,"If you want to specify a meaningful id to bind APISIX instance to your internal system, you can configure it in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```\napisix:\n  id: "your-meaningful-id"\n```\n')),(0,i.kt)("h2",{id:"why-there-are-a-lot-of-failed-to-fetch-data-from-etcd-failed-to-read-etcd-dir-etcd-key-xxxxxx-errors-in-errorlog"},'Why there are a lot of "failed to fetch data from etcd, failed to read etcd dir, etcd key: xxxxxx" errors in error.log?'),(0,i.kt)("p",null,"First please make sure the network between APISIX and etcd cluster is not partitioned."),(0,i.kt)("p",null,"If the network is healthy, please check whether your etcd cluster enables the ",(0,i.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/dev-guide/api_grpc_gateway/"},"gRPC gateway"),".  However, The default case for this feature is different when use command line options or configuration file to start etcd server."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When command line options is in use, this feature is enabled by default, the related option is ",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-grpc-gateway"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"etcd --enable-grpc-gateway --data-dir=/path/to/data\n")),(0,i.kt)("p",null,"Note this option is not shown in the output of ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd --help"),"."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"When configuration file is used, this feature is disabled by default, please enable ",(0,i.kt)("inlineCode",{parentName:"li"},"enable-grpc-gateway")," explicitly.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'# etcd.json\n{\n    "enable-grpc-gateway": true,\n    "data-dir": "/path/to/data"\n}\n')),(0,i.kt)("p",null,"Indeed this distinction was eliminated by etcd in their master branch, but not backport to announced versions, so be care when deploy your etcd cluster."),(0,i.kt)("h2",{id:"how-to-set-up-high-available-apache-apisix-clusters"},"How to set up high available Apache APISIX clusters?"),(0,i.kt)("p",null,"The high availability of APISIX can be divided into two parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The data plane of Apache APISIX is stateless and can be elastically scaled at will. Just add a layer of LB in front.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The control plane of Apache APISIX relies on the highly available implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd cluster")," and does not require any relational database dependency."))),(0,i.kt)("h2",{id:"why-does-the-make-deps-command-fail-in-source-installation"},"Why does the ",(0,i.kt)("inlineCode",{parentName:"h2"},"make deps")," command fail in source installation?"),(0,i.kt)("p",null,"When executing the ",(0,i.kt)("inlineCode",{parentName:"p"},"make deps")," command, an error such as the one shown below occurs. This is caused by the missing openresty's ",(0,i.kt)("inlineCode",{parentName:"p"},"openssl")," development kit, you need to install it first. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"install-dependencies.md"},"/zh/docs/apisix/2.5/install-dependencies")," document for installation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ make deps\n......\nError: Failed installing dependency: https://luarocks.org/luasec-0.9-1.src.rock - Could not find header file for OPENSSL\n  No file openssl/ssl.h in /usr/local/include\nYou may have to install OPENSSL in your system and/or pass OPENSSL_DIR or OPENSSL_INCDIR to the luarocks command.\nExample: luarocks install luasec OPENSSL_DIR=/usr/local\nmake: *** [deps] Error 1\n")),(0,i.kt)("h2",{id:"how-to-access-apisix-dashboard-through-apisix-proxy"},"How to access APISIX Dashboard through APISIX proxy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Keep the APISIX proxy port and Admin API port different(or disable Admin API). For example, do the following configuration in ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/config.yaml"),".")),(0,i.kt)("p",null,"The Admin API use a separate port 9180:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  port_admin: 9180            # use a separate port\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add proxy route of APISIX Dashboard:")),(0,i.kt)("p",null,"Note: The APISIX Dashboard service here is listening on ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9000"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uris":[ "/*" ],\n    "name":"apisix_proxy_dashboard",\n    "upstream":{\n        "nodes":[\n            {\n                "host":"127.0.0.1",\n                "port":9000,\n                "weight":1\n            }\n        ],\n        "type":"roundrobin"\n    }\n}\'\n')),(0,i.kt)("h2",{id:"how-to-use-route-uri-for-regular-matching"},"How to use route ",(0,i.kt)("inlineCode",{parentName:"h2"},"uri")," for regular matching"),(0,i.kt)("p",null,"The regular matching of uri is achieved through the ",(0,i.kt)("inlineCode",{parentName:"p"},"vars")," field of route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "vars": [\n        ["uri", "~~", "^/[a-z]+$"]\n    ],\n    "upstream": {\n            "type": "roundrobin",\n            "nodes": {\n                "127.0.0.1:1980": 1\n            }\n    }\n}\'\n')),(0,i.kt)("p",null,"Test request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# The uri matched successfully\n$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\n...\n\n# The uri match failed\ncurl http://127.0.0.1:9080/12ab -i\nHTTP/1.1 404 Not Found\n...\n")),(0,i.kt)("p",null,"In route, we can achieve more condition matching by combining ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"vars")," field. For more details of using ",(0,i.kt)("inlineCode",{parentName:"p"},"vars"),", please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr"),"."))}d.isMDXComponent=!0}}]);