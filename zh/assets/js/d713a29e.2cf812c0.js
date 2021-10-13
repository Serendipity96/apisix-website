"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97614],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=i(t),h=a,k=s["".concat(u,".").concat(h)]||s[h]||g[h]||p;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,l=new Array(p);l[0]=s;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<p;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},70213:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},assets:function(){return i},toc:function(){return c},default:function(){return s}});var r=t(87462),a=t(63366),p=(t(67294),t(3905)),l={title:"Go \u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc",author:"\u7f57\u6cfd\u8f69",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Go","APISIX","APISIX Go \u63d2\u4ef6","APISIX Go plugin","apisix-go-plugin-runner","Golang"],tags:["technology"]},o=void 0,u={permalink:"/zh/blog/2021/08/19/go-makes-Apache-APISIX-better",source:"@site/blog/2021-08-19-go-makes-Apache-APISIX-better.md",title:"Go \u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc",description:"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u8be6\u7ec6\u8bb2\u89e3\u5982\u4f55\u7528 Go \u6765\u5f00\u53d1 Apache APISIX \u63d2\u4ef6\u3002\u901a\u8fc7\u62e5\u62b1 Go \u7684\u751f\u6001\u5708\uff0c\u4e3a Apache APISIX \u5f00\u521b\u4e00\u7247\u65b0\u5929\u5730\uff0c\u5e0c\u671b Go \u80fd\u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc\uff01",date:"2021-08-19T00:00:00.000Z",formattedDate:"2021\u5e748\u670819\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"}],readingTime:2.71,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"Apache APISIX Meetup \u4e0a\u6d77\u7ad9\u5168\u7a0b\u56de\u987e",permalink:"/zh/blog/2021/08/24/shanghai-meetup-recap"},nextItem:{title:"\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Casbin \u8fdb\u884c\u6388\u6743",permalink:"/zh/blog/2021/08/18/Auth-with-Casbin-in-Apache-APISIX"}},i={authorsImageUrls:[void 0]},c=[{value:"\u4e3a\u4ec0\u4e48\u662f Go",id:"\u4e3a\u4ec0\u4e48\u662f-go",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u5f00\u53d1",id:"\u5f00\u53d1",children:[{value:"\u4f7f\u7528 Go Runner SDK \u8fdb\u884c\u5f00\u53d1",id:"\u4f7f\u7528-go-runner-sdk-\u8fdb\u884c\u5f00\u53d1",children:[]},{value:"\u8bbe\u7f6e Apache APISIX \uff08\u5f00\u53d1\uff09",id:"\u8bbe\u7f6e-apache-apisix-\uff08\u5f00\u53d1\uff09",children:[]},{value:"\u8bbe\u7f6e Apache APISIX \uff08\u8fd0\u884c\uff09",id:"\u8bbe\u7f6e-apache-apisix-\uff08\u8fd0\u884c\uff09",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"\u76f8\u5173\u9605\u8bfb",id:"\u76f8\u5173\u9605\u8bfb",children:[]}],g={toc:c};function s(e){var n=e.components,l=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u8be6\u7ec6\u8bb2\u89e3\u5982\u4f55\u7528 Go \u6765\u5f00\u53d1 Apache APISIX \u63d2\u4ef6\u3002\u901a\u8fc7\u62e5\u62b1 Go \u7684\u751f\u6001\u5708\uff0c\u4e3a Apache APISIX \u5f00\u521b\u4e00\u7247\u65b0\u5929\u5730\uff0c\u5e0c\u671b Go \u80fd\u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc\uff01")),(0,p.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u662f-go"},"\u4e3a\u4ec0\u4e48\u662f Go"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," \u5141\u8bb8\u7528\u6237\u901a\u8fc7\u63d2\u4ef6\u7684\u65b9\u5f0f\u6765\u62d3\u5c55\u529f\u80fd\uff0c\u5982\u9274\u6743\u3001\u9650\u6d41\u3001\u8bf7\u6c42\u6539\u5199\u7b49\u6838\u5fc3\u529f\u80fd\u90fd\u662f\u901a\u8fc7\u63d2\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0\u7684\u3002\u867d\u7136 Apache APISIX \u6838\u5fc3\u4ee3\u7801\u662f\u4f7f\u7528 Lua \u7f16\u5199\u7684\uff0c\u4f46\u662f Apache APISIX \u652f\u6301\u591a\u8bed\u8a00\u5f00\u53d1\u63d2\u4ef6\uff0c\u6bd4\u5982 Go \u3001Java\u3002"),(0,p.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u8be6\u7ec6\u8bb2\u89e3\u5982\u4f55\u7528 Go \u6765\u5f00\u53d1 Apache APISIX \u63d2\u4ef6\u3002\u901a\u8fc7\u62e5\u62b1 Go \u7684\u751f\u6001\u5708\uff0c\u4e3a Apache APISIX \u5f00\u521b\u4e00\u7247\u65b0\u5929\u5730\uff0c\u5e0c\u671b Go \u80fd\u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc\uff01"),(0,p.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,p.kt)("p",null,"\u91c7\u7528\u5e93\u7684\u65b9\u5f0f\u6765\u4f7f\u7528 Go Runner\uff0c",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-go-plugin-runner"},"apisix-go-plugin-runner")," \u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"cmd/go-runner")," \u5b98\u65b9\u7ed9\u51fa\u7684\u4f8b\u5b50\uff0c\u5c55\u793a\u8be5\u5982\u4f55\u4f7f\u7528 Go Runner SDK\u3002\u672a\u6765\u4e5f\u4f1a\u652f\u6301\u901a\u8fc7 Go Plugin \u7684\u673a\u5236\u52a0\u8f7d\u9884\u5148\u7f16\u8bd1\u597d\u7684\u63d2\u4ef6\u3002"),(0,p.kt)("h2",{id:"\u5f00\u53d1"},"\u5f00\u53d1"),(0,p.kt)("h3",{id:"\u4f7f\u7528-go-runner-sdk-\u8fdb\u884c\u5f00\u53d1"},"\u4f7f\u7528 Go Runner SDK \u8fdb\u884c\u5f00\u53d1"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ tree cmd/go-runner\ncmd/go-runner\n\u251c\u2500\u2500 main.go\n\u251c\u2500\u2500 main_test.go\n\u251c\u2500\u2500 plugins\n\u2502   \u251c\u2500\u2500 say.go\n\u2502   \u2514\u2500\u2500 say_test.go\n\u2514\u2500\u2500 version.go\n")),(0,p.kt)("p",null,"\u4e0a\u9762\u662f\u5b98\u65b9\u793a\u4f8b\u7684\u76ee\u5f55\u7ed3\u6784\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"main.go")," \u662f\u5165\u53e3\uff0c\u5176\u4e2d\u6700\u5173\u952e\u7684\u90e8\u5206\u5728\u4e8e\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-go"},"cfg := runner.RunnerConfig{}\n...\nrunner.Run(cfg)\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"RunnerConfig")," \u53ef\u4ee5\u7528\u6765\u63a7\u5236\u65e5\u5fd7\u7b49\u7ea7\u548c\u65e5\u5fd7\u8f93\u51fa\u4f4d\u7f6e\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"runner.Run")," \u4f1a\u8ba9\u5e94\u7528\u76d1\u542c\u76ee\u6807\u4f4d\u7f6e\uff0c\u63a5\u6536\u8bf7\u6c42\u5e76\u6267\u884c\u6ce8\u518c\u597d\u7684\u63d2\u4ef6\u3002\u5e94\u7528\u4f1a\u4e00\u76f4\u5904\u4e8e\u8fd9\u4e00\u72b6\u6001\u76f4\u5230\u9000\u51fa\u3002"),(0,p.kt)("p",null,"\u6253\u5f00 ",(0,p.kt)("inlineCode",{parentName:"p"},"plugins/say.go"),"\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-go"},'func init() {\n  err := plugin.RegisterPlugin(&Say{})\n  if err != nil {\n    log.Fatalf("failed to register plugin say: %s", err)\n  }\n}\n')),(0,p.kt)("p",null,"\u7531\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"main.go")," \u5bfc\u5165\u4e86 plugins \u5305\uff0c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  ...\n  _ "github.com/apache/apisix-go-plugin-runner/cmd/go-runner/plugins"\n  ...\n)\n')),(0,p.kt)("p",null,"\u8fd9\u6837\u5c31\u5728\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"runner.Run")," \u4e4b\u524d\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"plugin.RegisterPlugin")," \u6ce8\u518c\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"Say"),"\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Say")," \u9700\u8981\u5b9e\u73b0\u4ee5\u4e0b\u65b9\u6cd5\uff1a"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Name")," \u65b9\u6cd5\u8fd4\u56de\u63d2\u4ef6\u540d\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-go"},'func (p *Say) Name() string {\n  return "say"\n}\n')),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"ParseConf")," \u4f1a\u5728\u63d2\u4ef6\u914d\u7f6e\u53d8\u5316\u7684\u65f6\u5019\u8c03\u7528\uff0c\u89e3\u6790\u914d\u7f6e\u5e76\u8fd4\u56de\u63d2\u4ef6\u7279\u5b9a\u7684\u914d\u7f6e\u4e0a\u4e0b\u6587\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-go"},"func (p *Say) ParseConf(in []byte) (interface{}, error) {\n  conf := SayConf{}\n  err := json.Unmarshal(in, &conf)\n  return conf, err\n}\n")),(0,p.kt)("p",null,"\u8be5\u63d2\u4ef6\u7684\u4e0a\u4e0b\u6587\u662f\u8fd9\u6837\u7684\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-go"},'type SayConf struct {\n  Body string `json:"body"`\n}\n')),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Filter")," \u4f1a\u5728\u6bcf\u4e2a\u914d\u7f6e\u4e86 say \u63d2\u4ef6\u7684\u8bf7\u6c42\u4e2d\u6267\u884c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-go"},'func (p *Say) Filter(conf interface{}, w http.ResponseWriter, r pkgHTTP.Request) {\n  body := conf.(SayConf).Body\n  if len(body) == 0 {\n    return\n  }\n\n  w.Header().Add("X-Resp-A6-Runner", "Go")\n  _, err := w.Write([]byte(body))\n  if err != nil {\n    log.Errorf("failed to write: %s", err)\n  }\n}\n')),(0,p.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 Filter \u628a\u914d\u7f6e\u91cc\u9762\u7684 body \u7684\u503c\u4f5c\u4e3a\u54cd\u5e94\u4f53\u3002\u5982\u679c\u5728\u63d2\u4ef6\u4e2d\u76f4\u63a5\u8fdb\u884c\u54cd\u5e94\uff0c\u5c31\u4f1a\u4e2d\u65ad\u8bf7\u6c42\u3002"),(0,p.kt)("p",null,"Go Runner SDK  API \u6587\u6863\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/apisix-go-plugin-runner"},"https://pkg.go.dev/github.com/apache/apisix-go-plugin-runner")),(0,p.kt)("p",null,"\u628a\u5e94\u7528\u6784\u5efa\u8d77\u6765\u540e\uff08\u5728\u793a\u4f8b\u91cc\u9762\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"make build"),"\uff09\uff0c\u5728\u8fd0\u884c\u65f6\u9700\u8981\u8bbe\u7f6e\u4e24\u4e2a\u73af\u5883\u53d8\u91cf\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"APISIX_CONF_EXPIRE_TIME=3600"))),(0,p.kt)("p",null,"\u50cf\u8fd9\u6837\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-go"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock APISIX_CONF_EXPIRE_TIME=3600 ./go-runner run\n")),(0,p.kt)("p",null,"\u5e94\u7528\u8fd0\u884c\u65f6\u4f1a\u53bb\u76d1\u542c ",(0,p.kt)("inlineCode",{parentName:"p"},"/tmp/runner.sock"),"\u3002"),(0,p.kt)("h3",{id:"\u8bbe\u7f6e-apache-apisix-\uff08\u5f00\u53d1\uff09"},"\u8bbe\u7f6e Apache APISIX \uff08\u5f00\u53d1\uff09"),(0,p.kt)("p",null,"\u9996\u5148\u8981\u5b89\u88c5 Apache APISIX\uff0c\u9700\u8981\u548c Go Runner \u4f4d\u4e8e\u540c\u4e00\u5b9e\u4f8b\u4e0a\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Apache APISIX work flow",src:t(26377).Z})),(0,p.kt)("p",null,"\u4e0a\u56fe\u5de6\u8fb9\u662f Apache APISIX \u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u53f3\u8fb9\u7684 plugin runner \u8d1f\u8d23\u8fd0\u884c\u4e0d\u540c\u8bed\u8a00\u7f16\u5199\u7684\u5916\u90e8\u63d2\u4ef6\u3002apisix-go-plugin-runner \u5c31\u662f\u8fd9\u6837\u652f\u6301 Go \u8bed\u8a00\u7684 runner\u3002"),(0,p.kt)("p",null,"\u5f53\u4f60\u5728 Apache  APISIX \u4e2d\u914d\u7f6e\u4e00\u4e2a plugin runner \u65f6\uff0cApache  APISIX \u4f1a\u628a plugin runner \u4f5c\u4e3a\u81ea\u5df1\u7684\u4e00\u4e2a\u5b50\u8fdb\u7a0b\uff0c\u8be5\u5b50\u8fdb\u7a0b\u4e0e Apache  APISIX \u8fdb\u7a0b\u5c5e\u4e8e\u540c\u4e00\u4e2a\u7528\u6237\uff0c\u5f53\u6211\u4eec\u91cd\u542f\u6216\u91cd\u65b0\u52a0\u8f7d Apache APISIX \u65f6\uff0cplugin runner \u4e5f\u5c06\u88ab\u91cd\u542f\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u4e3a\u4e00\u4e2a\u7ed9\u5b9a\u7684\u8def\u7531\u914d\u7f6e\u4e86 ext-plugin-* \u63d2\u4ef6\uff0c\u51fb\u4e2d\u8be5\u8def\u7531\u7684\u8bf7\u6c42\u5c06\u89e6\u53d1 Apache APISIX \u901a\u8fc7 unix socket \u5411 plugin runner \u6267\u884c RPC \u8c03\u7528\u3002\u8c03\u7528\u7ec6\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"ext-plugin-pre-req: \u5728\u6267\u884c\u7edd\u5927\u90e8\u5206 Apache APISIX \u5185\u7f6e\u63d2\u4ef6(Lua \u8bed\u8a00\u63d2\u4ef6)\u4e4b\u524d"),(0,p.kt)("li",{parentName:"ul"},"ext-plugin-post-req: \u5728\u6267\u884c Apache APISIX \u5185\u7f6e\u63d2\u4ef6(Lua \u8bed\u8a00\u63d2\u4ef6)\u4e4b\u540e")),(0,p.kt)("p",null,"\u6839\u636e\u9700\u8981\u914d\u7f6e plugin runner \u7684\u6267\u884c\u65f6\u673a\u3002"),(0,p.kt)("p",null,"plugin runner \u4f1a\u5904\u7406 RPC \u8c03\u7528\uff0c\u5728\u5176\u5185\u90e8\u521b\u5efa\u4e00\u4e2a\u6a21\u62df\u8bf7\u6c42\uff0c\u7136\u540e\u8fd0\u884c\u5176\u4ed6\u8bed\u8a00\u7f16\u5199\u7684\u63d2\u4ef6\uff0c\u5e76\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9 Apache APISIX\u3002"),(0,p.kt)("p",null,"\u8fd9\u4e9b\u63d2\u4ef6\u7684\u6267\u884c\u987a\u5e8f\u662f\u5728 ext-plugin-* \u63d2\u4ef6\u914d\u7f6e\u9879\u4e2d\u5b9a\u4e49\u7684\u3002\u50cf\u5176\u4ed6\u63d2\u4ef6\u4e00\u6837\uff0c\u5b83\u4eec\u53ef\u4ee5\u88ab\u542f\u7528\u5e76\u5728\u8fd0\u884c\u4e2d\u91cd\u65b0\u5b9a\u4e49\u3002"),(0,p.kt)("p",null,"\u4e3a\u4e86\u5c55\u793a\u5982\u4f55\u5f00\u53d1 Go \u63d2\u4ef6\uff0c\u6211\u4eec\u5148\u8bbe\u7f6e Apache  APISIX \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u3002\u5728 config.yaml \u4e2d\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"ext-plugin:\n  path_for_test: /tmp/runner.sock\n")),(0,p.kt)("p",null,"\u8fd9\u4e2a\u914d\u7f6e\u7684\u610f\u601d\u662f\uff0c\u547d\u4e2d\u8def\u7531\u89c4\u5219\u540e\uff0cApache APISIX \u4f1a\u5411 /tmp/runner.sock \u53d1\u8d77 RPC \u8bf7\u6c42\u3002"),(0,p.kt)("p",null,"\u63a5\u4e0b\u6765\u8bbe\u7f6e\u8def\u7531\u89c4\u5219\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "ext-plugin-pre-req": {\n      "conf": [\n        {"name":"say", "value":"{\\"body\\":\\"hello\\"}"}\n      ]\n    }\n  },\n  "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\n\'\n')),(0,p.kt)("p",null,"\u6ce8\u610f\u63d2\u4ef6\u540d\u79f0\u914d\u7f6e\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," \u91cc\u9762\uff0c\u63d2\u4ef6\u914d\u7f6e\uff08\u7ecf JSON \u5e8f\u5217\u5316\u540e\uff09\u653e\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"value")," \u91cc\u9762\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u770b\u5230 Apache  APISIX \u7aef\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"refresh cache and try again")," \u7684 warning \u548c Runner \u7aef\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"key not found")," \u7684 warning\uff0c\u8fd9\u662f\u56e0\u4e3a\u914d\u7f6e\u7f13\u5b58\u4e0d\u4e00\u81f4\u5bfc\u81f4\u7684\u3002\u56e0\u4e3a\u5f00\u53d1\u72b6\u6001\u4e0b\uff0cRunner \u4e0d\u662f\u7531 Apache  APISIX \u7ba1\u7406\u7684\uff0c\u6240\u4ee5\u5185\u90e8\u72b6\u6001\u4f1a\u6709\u53ef\u80fd\u4e0d\u4e00\u81f4\u3002\u4e0d\u7528\u62c5\u5fc3\uff0cApache  APISIX \u4f1a\u91cd\u8bd5\u3002"),(0,p.kt)("p",null,"\u7136\u540e\u6211\u4eec\u8bf7\u6c42\u4e00\u4e0b\uff1acurl 127.0.0.1:9080/get"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/get\nHTTP/1.1 200 OK\nDate: Mon, 26 Jul 2021 11:16:11 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nX-Resp-A6-Runner: Go\nServer: APISIX/2.7\n\nhello\n")),(0,p.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u63a5\u53e3\u8fd4\u56de hello \u800c\u4e14\u6ca1\u6709\u8bbf\u95ee\u5230\u4efb\u4f55\u4e0a\u6e38\u3002"),(0,p.kt)("h3",{id:"\u8bbe\u7f6e-apache-apisix-\uff08\u8fd0\u884c\uff09"},"\u8bbe\u7f6e Apache APISIX \uff08\u8fd0\u884c\uff09"),(0,p.kt)("p",null,"\u8fd9\u91cc\u4ee5 go-runner \u4e3a\u4f8b\uff0c\u53ea\u9700\u628a\u8fd0\u884c\u547d\u4ee4\u884c\u914d\u7f6e\u5728 ext-plugin \u91cc\u5c31\u53ef\u4ee5\u8fd0\u884c\u4e86\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'ext-plugin:\n  # path_for_test: /tmp/runner.sock\n  cmd: ["/path/to/apisix-go-plugin-runner/go-runner", "run"]\n')),(0,p.kt)("p",null,"Apache APISIX \u4f1a\u628a plugin runner \u4f5c\u4e3a\u81ea\u5df1\u7684\u4e00\u4e2a\u5b50\u8fdb\u7a0b\uff0c\u7ba1\u7406\u5b83\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u3002"),(0,p.kt)("p",null,"\u6ce8\u610f\uff1a\u8fd9\u65f6\u5c31\u4e0d\u8981\u914d\u7f6e path_for_test \u4e86\u3002Apache APISIX \u5728\u542f\u52a8 runner \u65f6\u4f1a\u81ea\u52a8\u5206\u914d\u4e00\u4e2a unix socket \u5730\u5740\u4f9b runner \u76d1\u542c\u3002APISIX_LISTEN_ADDRESS \u548c APISIX_CONF_EXPIRE_TIME \u8fd9\u4e24\u4e2a\u73af\u5883\u53d8\u91cf\u4e5f\u4e0d\u7528\u624b\u52a8\u8bbe\u7f6e\u3002"),(0,p.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,p.kt)("p",null,"\u76ee\u524d Go Plugin Runner \u8fd8\u5904\u4e8e\u65e9\u671f\u5f00\u53d1\u9636\u6bb5\uff0c\u6211\u4eec\u4f1a\u9646\u7eed\u5b8c\u5584\u5176\u529f\u80fd\u3002\u6210\u529f\u7684\u5f00\u6e90\u9879\u76ee\u79bb\u4e0d\u5f00\u5927\u5bb6\u7684\u8d21\u732e\uff0c\u6b22\u8fce\u5404\u4f4d\u53c2\u4e0e\u5230 apisix-go-plugin-runner \u7684\u5f00\u53d1\u4e2d\u6765\uff0c\u8ba9\u6211\u4eec\u4e00\u8d77\u5171\u5efa Apache  APISIX \u548c Go \u7684\u6865\u6881\uff01\n\u70b9\u51fb\u8bbf\u95ee ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-go-plugin-runner"},"apisix-go-plugin-runner"),"."),(0,p.kt)("h2",{id:"\u76f8\u5173\u9605\u8bfb"},"\u76f8\u5173\u9605\u8bfb"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/06/21/use-Java-to-write-Apache-APISIX-plugins"},"\u5982\u4f55\u7528 Java \u7f16\u5199 Apache APISIX \u63d2\u4ef6")))}s.isMDXComponent=!0},26377:function(e,n,t){n.Z=t.p+"assets/images/2021-08-19-1-9a4a6a926b5d773847dc7568216cc68a.png"}}]);