"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21184],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,h=c["".concat(u,".").concat(d)]||c[d]||g[d]||o;return t?r.createElement(h,a(a({ref:n},s),{},{components:t})):r.createElement(h,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2614:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a={title:"Getting started"},l={unversionedId:"getting-started",id:"version-0.1.0/getting-started",isDocsHomePage:!1,title:"Getting started",description:"\x3c!--",source:"@site/docs-apisix-go-plugin-runner_versioned_docs/version-0.1.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/zh/docs/go-plugin-runner/0.1.0/getting-started",editUrl:"https://github.com/apache/apisix-go-plugin-runner/edit/master/docs/en/latest/getting-started.md",version:"0.1.0",frontMatter:{title:"Getting started"},sidebar:"version-0.1.0/docs",next:{title:"Developer Guide",permalink:"/zh/docs/go-plugin-runner/0.1.0/developer-guide"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Development",id:"development",children:[{value:"Developing with the Go Runner SDK",id:"developing-with-the-go-runner-sdk",children:[]},{value:"Setting up APISIX (debugging)",id:"setting-up-apisix-debugging",children:[]},{value:"Setting up APISIX (running)",id:"setting-up-apisix-running",children:[]}]}],p={toc:u};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go (>= 1.15)"),(0,o.kt)("li",{parentName:"ul"},"APISIX (>= 2.7.0)")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"For now, we need to use Go Runner as a library. ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd/go-runner")," in this project is an official example showing how to use the Go Runner SDK.\nWe will also support loading pre-compiled plugins through the Go Plugin mechanism later."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("h3",{id:"developing-with-the-go-runner-sdk"},"Developing with the Go Runner SDK"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ tree cmd/go-runner\ncmd/go-runner\n\u251c\u2500\u2500 main.go\n\u251c\u2500\u2500 main_test.go\n\u251c\u2500\u2500 plugins\n\u2502 \u251c\u2500\u2500 say.go\n\u2502 \u2514\u2500\u2500 say_test.go\n\u2514\u2500\u2500 version.go\n")),(0,o.kt)("p",null,"Above is the directory structure of the official example. ",(0,o.kt)("inlineCode",{parentName:"p"},"main.go")," is the entry point, where the most critical part is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"cfg := runner.RunnerConfig{}\n...\nrunner.Run(cfg)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RunnerConfig")," can be used to control the log level and log output location."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"runner.Run")," will make the application listen to the target socket path, receive requests and execute the registered plugins. The application will remain in this state until it exits."),(0,o.kt)("p",null,"Then let's look at the plugin implementation."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/say.go"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func init() {\n    err := plugin.RegisterPlugin(&Say{})\n    if err ! = nil {\n        log.Fatalf("failed to register plugin say: %s", err)\n    }\n}\n')),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"main.go")," imports the plugins package,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  ...\n    _ "github.com/apache/apisix-go-plugin-runner/cmd/go-runner/plugins"\n  ...\n)\n')),(0,o.kt)("p",null,"in this way we register ",(0,o.kt)("inlineCode",{parentName:"p"},"Say")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin.RegisterPlugin")," before executing ",(0,o.kt)("inlineCode",{parentName:"p"},"runner.Run"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Say")," needs to implement the following methods:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Name")," method returns the plugin name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'func (p *Say) Name() string {\n    return "say"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ParseConf")," will be called when the plugin configuration changes, parsing the configuration and returning the plugin specific configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"func (p *Say) ParseConf(in []byte) (interface{}, error) {\n    conf := SayConf{}\n    err := json.Unmarshal(in, &conf)\n    return conf, err\n}\n")),(0,o.kt)("p",null,"The configuration of the plugin looks like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'type SayConf struct {\n    Body string `json: "body"`\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," will be executed on every request with the say plugin configured."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'func (p *Say) Filter(conf interface{}, w http.ResponseWriter, r pkgHTTP.Request) {\n    body := conf.(SayConf).\n    if len(body) == 0 {\n        return\n    }\n\n    w.Header().Add("X-Resp-A6-Runner", "Go")\n    _, err := w.Write([]byte(body))\n    if err ! = nil {\n        log.Errorf("failed to write: %s", err)\n    }\n}\n')),(0,o.kt)("p",null,"We can see that the Filter takes the value of the body set in the configuration as the response body. If we respond directly in the plugin, it will response directly in the APISIX without touching the upstream."),(0,o.kt)("p",null,"Here you can read the API documentation provided by the Go Runner SDK: ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/apisix-go-plugin-runner"},"https://pkg.go.dev/github.com/apache/apisix-go-plugin-runner")),(0,o.kt)("p",null,"After building the application (",(0,o.kt)("inlineCode",{parentName:"p"},"make build")," in the example), we need to set two environment variables at runtime."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"APISIX_CONF_EXPIRE_TIME=3600"))),(0,o.kt)("p",null,"Like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock APISIX_CONF_EXPIRE_TIME=3600 ./go-runner run\n")),(0,o.kt)("p",null,"The application will listen to ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/runner.sock")," when it runs."),(0,o.kt)("h3",{id:"setting-up-apisix-debugging"},"Setting up APISIX (debugging)"),(0,o.kt)("p",null,"First you need to have APISIX on your machine, which needs to be on the same instance as Go Runner."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-go-plugin-runner/master/docs/assets/images/runner-overview.png",alt:"runner-overview"})),(0,o.kt)("p",null,"The diagram above shows the workflow of APISIX on the left, while the plugin runner on the right is responsible for running external plugins written in different languages. apisix-go-plugin-runner is one such runner that supports Go."),(0,o.kt)("p",null,"When you configure a plugin runner in APISIX, APISIX will treat the plugin runner as a child process of its own. This sub-process belongs to the same user as the APISIX process. When we restart or reload APISIX, the plugin runner will also be restarted."),(0,o.kt)("p",null,"If you configure the ext-plugin-* plugin for a given route, a request to hit that route will trigger APISIX to make an RPC call to the plugin runner via a unix socket. The call is broken down into two phases."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ext-plugin-pre-req: before executing most of the APISIX built-in plugins (Lua language plugins)"),(0,o.kt)("li",{parentName:"ul"},"ext-plugin-post-req: after the execution of the APISIX built-in plugins (Lua language plugins)")),(0,o.kt)("p",null,"Configure the timing of plugin runner execution as needed."),(0,o.kt)("p",null,"The plugin runner handles the RPC calls, creates a mock request from it, then runs the plugins written in other languages and returns the results to APISIX."),(0,o.kt)("p",null,"The order of execution of these plugins is defined in the ext-plugin-* plugin configuration. Like other plugins, they can be enabled and disabled on the fly."),(0,o.kt)("p",null,"Let's go back to the examples. To show how to develop Go plugins, we first set APISIX into debug mode. Add the following configuration to config.yaml."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ext-plugin:\n  path_for_test: /tmp/runner.sock\n")),(0,o.kt)("p",null,"This configuration means that after hitting a routing rule, APISIX will make an RPC request to /tmp/runner.sock."),(0,o.kt)("p",null,"Next, prepare the routing rule."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "ext-plugin-pre-req": {\n      "conf": [\n        { "name": "say", "value":"{\\"body\\":\\"hello\\"}"}\n      ]\n    }\n  },\n  "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\n\'\n')),(0,o.kt)("p",null,"Note that the plugin name is configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and the plugin configuration (after JSON serialization) is placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,o.kt)("p",null,"If you see ",(0,o.kt)("inlineCode",{parentName:"p"},"refresh cache and try again")," warning on APISIX side and ",(0,o.kt)("inlineCode",{parentName:"p"},"key not found")," warning on Runner side during development, this is due to configuration cache inconsistency. Because the Runner is not managed by APISIX in the development state, the internal state may be inconsistent. Don't worry, APISIX will retry."),(0,o.kt)("p",null,"Then we request: curl 127.0.0.1:9080/get"),(0,o.kt)("p",null,"We can see that the interface returns hello and does not access anything upstream."),(0,o.kt)("h3",{id:"setting-up-apisix-running"},"Setting up APISIX (running)"),(0,o.kt)("p",null,"Here's an example of go-runner, you just need to configure the command line to run it inside ext-plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ext-plugin:\n  # path_for_test: /tmp/runner.sock\n  cmd: ["/path/to/apisix-go-plugin-runner/go-runner", "run"]\n')),(0,o.kt)("p",null,"APISIX will treat the plugin runner as a child process of its own, managing its entire lifecycle."),(0,o.kt)("p",null,"APISIX will automatically assign a unix socket address for the runner to listen to when it starts. environment variables do not need to be set manually."))}s.isMDXComponent=!0}}]);