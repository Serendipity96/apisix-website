"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27071],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||k[c]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52461:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return o},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"skywalking"},p=void 0,s={unversionedId:"plugins/skywalking",id:"version-2.10/plugins/skywalking",isDocsHomePage:!1,title:"skywalking",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10/plugins/skywalking.md",sourceDirName:"plugins",slug:"/plugins/skywalking",permalink:"/docs/apisix/plugins/skywalking",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/skywalking.md",tags:[],version:"2.10",frontMatter:{title:"skywalking"},sidebar:"version-2.10/docs",previous:{title:"Zipkin",permalink:"/docs/apisix/plugins/zipkin"},next:{title:"node-status",permalink:"/docs/apisix/plugins/node-status"}},o=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"How to set endpoint",id:"how-to-set-endpoint",children:[]},{value:"Test Plugin",id:"test-plugin",children:[{value:"Run Skywalking Example",id:"run-skywalking-example",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]},{value:"Upstream services(Code With SpringBoot)",id:"upstream-servicescode-with-springboot",children:[]}],u={toc:o};function k(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#name"},(0,l.kt)("strong",{parentName:"a"},"Name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},(0,l.kt)("strong",{parentName:"a"},"Attributes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,l.kt)("strong",{parentName:"a"},"How To Enable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#test-plugin"},(0,l.kt)("strong",{parentName:"a"},"Test Plugin")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#run-skywalking-example"},(0,l.kt)("strong",{parentName:"a"},"Run Skywalking Example"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,l.kt)("strong",{parentName:"a"},"Disable Plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Upstream-services(Code-With-SpringBoot)"},(0,l.kt)("strong",{parentName:"a"},"Upstream services(Code With SpringBoot)")))),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking"},(0,l.kt)("strong",{parentName:"a"},"Skywalking"))," uses its native Nginx LUA tracer to provide tracing, topology analysis, and metrics from service and URI perspective.\nThe skywalking server can supports both http and grpc protocols. The APISIX client only support http protocols."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sample_ratio"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"[0.00001, 1]"),(0,l.kt)("td",{parentName:"tr",align:null},"the ratio of sample")))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"First of all, enable the skyWalking plugin in the ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Add this in config.yaml\nplugins:\n  - ... # plugin you need\n  - skywalking\n")),(0,l.kt)("p",null,"Then reload APISIX, a background timer will be created to report data to skywalking server."),(0,l.kt)("p",null,"Here's an example, enable the skywalking plugin on the specified route:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n        "skywalking": {\n            "sample_ratio": 1\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "10.110.149.175:8089": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"You also can complete the above operation through the web interface, first add a route, then add skywalking plugin:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/skywalking-1.png",alt:" "})),(0,l.kt)("h2",{id:"how-to-set-endpoint"},"How to set endpoint"),(0,l.kt)("p",null,"We can set the endpoint by specified the configuration in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"APISIX"'),(0,l.kt)("td",{parentName:"tr",align:null},"service name for skywalking reporter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service_instance_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"APISIX Instance Name"'),(0,l.kt)("td",{parentName:"tr",align:null},"service instance name for skywalking reporter\uff0c  set it to ",(0,l.kt)("inlineCode",{parentName:"td"},"$hostname")," to get local hostname directly.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint_addr"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"',(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:12800%22"},'http://127.0.0.1:12800"')),(0,l.kt)("td",{parentName:"tr",align:null},"the http endpoint of Skywalking, for example: ",(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:12800"},"http://127.0.0.1:12800"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"report_interval"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"use the value in the skywalking client library"),(0,l.kt)("td",{parentName:"tr",align:null},"the report interval, in seconds")))),(0,l.kt)("p",null,"Here is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'plugin_attr:\n  skywalking:\n    service_name: APISIX\n    service_instance_name: "APISIX Instance Name"\n    endpoint_addr: http://127.0.0.1:12800\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("h3",{id:"run-skywalking-example"},"Run Skywalking Example"),(0,l.kt)("h4",{id:"eg"},"e.g."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run Skywalking Server:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"By default, use H2 storage, start skywalking directly"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --name skywalking -d -p 1234:1234 -p 11800:11800 -p 12800:12800 --restart always apache/skywalking-oap-server:8.3.0-es6\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Of Course, you can use Elasticsearch storage"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Firstly, you should install Elasticsearch:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sudo docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 --restart always -e "discovery.type=single-node" elasticsearch:6.7.2\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You can install ElasticSearch management page: elasticsearch-hq(Optional)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --name elastic-hq -p 5000:5000 --restart always elastichq/elasticsearch-hq\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run skywalking server:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --name skywalking -d -p 1234:1234 -p 11800:11800 -p 12800:12800 --restart always --link elasticsearch:elasticsearch -e SW_STORAGE=elasticsearch -e SW_STORAGE_ES_CLUSTER_NODES=elasticsearch:9200 apache/skywalking-oap-server:8.3.0-es6\n"))))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Skywalking WebUI:"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run SkyWalking webUI Server:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --name skywalking-ui -d -p 8080:8080 --link skywalking:skywalking -e SW_OAP_ADDRESS=skywalking:12800 --restart always apache/skywalking-ui\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open the webUI of  skywalking:\nYou can open dashboard with a browser: ",(0,l.kt)("a",{parentName:"p",href:"http://10.110.149.175:8080"},"http://10.110.149.175:8080"),". It will be a successful install as follow:\n",(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/skywalking-3.png",alt:" "}))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Test:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Access to upstream services through access apisix:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -v http://10.110.149.192:9080/uid/12\nHTTP/1.1 200 OK\nOK\n...\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Open the webUI of skyWalking:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"http://10.110.149.175:8080/\n")),(0,l.kt)("p",{parentName:"li"},"  You can see the topology of all service\\\n",(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/skywalking-4.png",alt:" "}),"\\\nYou can also see the tracer of all service\\\n",(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/skywalking-5.png",alt:" "})))))),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"When you want to disable the skyWalking plugin on a route/service, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "10.110.149.175:8089": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"The skywalking plugin has been disabled now. It works for other plugins."),(0,l.kt)("p",null,"If you want to disable skywalking plugin totally, for example, stop the background report timer,\nyou need to comment out in the ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  - ... # plugin you need\n  #- skywalking\n")),(0,l.kt)("p",null,"And then reload APISIX."),(0,l.kt)("h2",{id:"upstream-servicescode-with-springboot"},"Upstream services(Code With SpringBoot)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package com.lenovo.ai.controller;\n\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport javax.servlet.http.HttpServletRequest;\n\n/**\n * @author cyxinda\n * @create 2020-05-29 14:02\n * @desc skywalking test controller\n **/\n@RestController\npublic class TestController {\n    @RequestMapping("/uid/{count}")\n    public String getUidList(@PathVariable("count") String countStr, HttpServletRequest request) {\n        System.out.println("counter:::::-----"+countStr);\n       return "OK";\n    }\n}\n')),(0,l.kt)("p",null,"Configuring the skywalking agent, when starting the service.\nupdate the file of agent/config/agent.config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"agent.service_name=yourservername\ncollector.backend_service=10.110.149.175:11800\n")),(0,l.kt)("p",null,"Run the script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nohup java -javaagent:/root/skywalking/app/agent/skywalking-agent.jar \\\n-jar /root/skywalking/app/app.jar \\\n--server.port=8089 \\\n2>&1 > /root/skywalking/app/logs/nohup.log &\n")))}k.isMDXComponent=!0}}]);