"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38993],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=c(n),g=a,d=h["".concat(i,".").concat(g)]||h[g]||u[g]||p;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97409:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return i},default:function(){return s}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),l={title:"Rancher \xd7 Apache APISIX: \u6781\u901f\u90e8\u7f72\u66f4\u597d\u7528\u7684\u5f00\u6e90\u7f51\u5173\u548c Ingress Controller",author:"Jintao Zhang",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://avatars.githubusercontent.com/u/3264292?v=4",tags:["technology"]},o={permalink:"/zh/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast",source:"@site/blog/2021-06-23-deploy-great-open-source-gateway-and-ingress-controller-fast.md",title:"Rancher \xd7 Apache APISIX: \u6781\u901f\u90e8\u7f72\u66f4\u597d\u7528\u7684\u5f00\u6e90\u7f51\u5173\u548c Ingress Controller",description:"@tao12345666333, Apache APISIX committer from Shenzhen Zhiliu Technology Co.",date:"2021-06-23T00:00:00.000Z",formattedDate:"2021\u5e746\u670823\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"}],readingTime:2.155,truncated:!0,prevItem:{title:"\u6709\u4e86 NGINX \u548c Kong\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Apache APISIX",permalink:"/zh/blog/2021/06/28/why-we-need-Apache-APISIX"},nextItem:{title:"\u4f7f\u7528 Java \u7f16\u5199 Apache APISIX \u63d2\u4ef6",permalink:"/zh/blog/2021/06/21/use-Java-to-write-Apache-APISIX-plugins"}},i=[{value:"Rancher \u4ecb\u7ecd",id:"rancher-\u4ecb\u7ecd",children:[]},{value:"Apache APISIX \u4ecb\u7ecd",id:"apache-apisix-\u4ecb\u7ecd",children:[]},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",children:[]},{value:"\u90e8\u7f72 Apache APISIX \u548c Apache APISIX Ingress controller",id:"\u90e8\u7f72-apache-apisix-\u548c-apache-apisix-ingress-controller",children:[]},{value:"\u90e8\u7f72\u793a\u4f8b\u9879\u76ee",id:"\u90e8\u7f72\u793a\u4f8b\u9879\u76ee",children:[]},{value:"\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u7f51\u5173\u4ee3\u7406",id:"\u4f7f\u7528-apache-apisix-\u4f5c\u4e3a\u7f51\u5173\u4ee3\u7406",children:[]},{value:"\u4f7f\u7528 APISIX Ingress controller \u4ee3\u7406\u670d\u52a1",id:"\u4f7f\u7528-apisix-ingress-controller-\u4ee3\u7406\u670d\u52a1",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"\u672a\u6765\u5c55\u671b",id:"\u672a\u6765\u5c55\u671b",children:[]}],c={toc:i};function s(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/tao12345666333"},"@tao12345666333"),", Apache APISIX committer from ",(0,p.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),(0,p.kt)("h2",{id:"rancher-\u4ecb\u7ecd"},"Rancher \u4ecb\u7ecd"),(0,p.kt)("p",null,"Rancher \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u4f01\u4e1a\u7ea7\u591a\u96c6\u7fa4 Kubernetes \u7ba1\u7406\u5e73\u53f0\uff0c\u5b9e\u73b0\u4e86 Kubernetes \u96c6\u7fa4\u5728\u6df7\u5408\u4e91+\u672c\u5730\u6570\u636e\u4e2d\u5fc3\u7684\u96c6\u4e2d\u90e8\u7f72\u4e0e\u7ba1\u7406\uff0c\u4ee5\u786e\u4fdd\u96c6\u7fa4\u7684\u5b89\u5168\u6027\uff0c\u52a0\u901f\u4f01\u4e1a\u6570\u5b57\u5316\u8f6c\u578b\u3002"),(0,p.kt)("h2",{id:"apache-apisix-\u4ecb\u7ecd"},"Apache APISIX \u4ecb\u7ecd"),(0,p.kt)("p",null,"Apache APISIX \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u9ad8\u6027\u80fd\u3001\u52a8\u6001\u4e91\u539f\u751f\u7f51\u5173\uff0c\u7531\u6df1\u5733\u652f\u6d41\u79d1\u6280\u6709\u9650\u516c\u53f8\u4e8e 2019 \u5e74\u6350\u8d60\u7ed9 Apache \u57fa\u91d1\u4f1a\uff0c\u5f53\u524d\u5df2\u7ecf\u6210\u4e3a Apache \u57fa\u91d1\u4f1a\u7684\u9876\u7ea7\u5f00\u6e90\u9879\u76ee\uff0c\u4e5f\u662f GitHub \u4e0a\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90\u7f51\u5173\u9879\u76ee\u3002Apache APISIX \u5f53\u524d\u5df2\u7ecf\u8986\u76d6\u4e86 API \u7f51\u5173\uff0cLB\uff0cKubernetes Ingress\uff0cService Mesh \u7b49\u591a\u79cd\u573a\u666f\u3002"),(0,p.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5c06\u73b0\u6709 Kubernetes \u96c6\u7fa4\u5df2\u7eb3\u5165 Rancher \u7ba1\u7406\u3002")),(0,p.kt)("h2",{id:"\u90e8\u7f72-apache-apisix-\u548c-apache-apisix-ingress-controller"},"\u90e8\u7f72 Apache APISIX \u548c Apache APISIX Ingress controller"),(0,p.kt)("p",null,"\u5728 Rancher \u7684 ",(0,p.kt)("em",{parentName:"p"},"Tools - Catalogs")," \u9875\u9762\u53ef\u4ee5\u8fdb\u884c\u5546\u5e97\uff08catalogs\uff09\u7684\u914d\u7f6e\uff0c\u6211\u4eec\u5728\u8fd9\u91cc",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"\u6dfb\u52a0 Apache APISIX \u7684 Helm \u4ed3\u5e93"),"\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"2021-06-23-1",src:n(8664).Z})),(0,p.kt)("p",null,"\u4fdd\u5b58\u5b8c\u6210\u540e\uff0c\u5373\u53ef\u9009\u62e9 ",(0,p.kt)("em",{parentName:"p"},"Apps")," \u9875\u9762\u8fdb\u884c Apache APISIX \u7684\u90e8\u7f72\u4e86\u3002\u9009\u62e9 ",(0,p.kt)("em",{parentName:"p"},"Launch")," \u4fbf\u53ef\u770b\u5230 Apache APISIX \u7684\u4ed3\u5e93\u4fe1\u606f\u4e86\u3002\u8fd9\u91cc\u6211\u4eec\u76f4\u63a5\u9009\u62e9 apisix \u5373\u53ef\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"2021-06-23-2",src:n(11817).Z})),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"2021-06-23-3",src:n(58639).Z})),(0,p.kt)("p",null,"\u63a5\u4e0b\u6765\u7740\u53ea\u9700\u8981\u5728\u6b64\u9875\u9762\u4e2d\u8fdb\u884c\u7b80\u5355\u7684\u914d\u7f6e\u5373\u53ef\u3002 ",(0,p.kt)("strong",{parentName:"p"},"\u56e0\u4e3a\u6211\u4eec\u60f3\u8981\u540c\u65f6\u90e8\u7f72 APISIX Ingress controller\uff0c\u6240\u4ee5\u5728\u5e95\u90e8\u7684 Answers \u4e2d\u586b\u5165 ",(0,p.kt)("inlineCode",{parentName:"strong"},"ingress-controller.enabled=true")," \u8fd9\u4e2a\u914d\u7f6e\u9879")," \u3002\u4fdd\u5b58\u5373\u53ef\u5b8c\u6210\u90e8\u7f72\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"2021-06-23-4",src:n(62636).Z})),(0,p.kt)("p",null,"\u7a0d\u7b49\u7247\u523b\u5373\u53ef\u5b8c\u6210\u90e8\u7f72\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"2021-06-23-5",src:n(77252).Z})),(0,p.kt)("h2",{id:"\u90e8\u7f72\u793a\u4f8b\u9879\u76ee"},"\u90e8\u7f72\u793a\u4f8b\u9879\u76ee"),(0,p.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"kennethreitz/httpbin")," \u4f5c\u4e3a\u793a\u4f8b\u9879\u76ee\u8fdb\u884c\u6f14\u793a\u3002\u8fd9\u91cc\u4e5f\u76f4\u63a5\u5728 Rancher \u4e2d\u5b8c\u6210\u90e8\u7f72\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"2021-06-23-6",src:n(65944).Z})),(0,p.kt)("h2",{id:"\u4f7f\u7528-apache-apisix-\u4f5c\u4e3a\u7f51\u5173\u4ee3\u7406"},"\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u7f51\u5173\u4ee3\u7406"),(0,p.kt)("p",null,"\u6211\u4eec\u5148\u6f14\u793a\u5982\u4f55\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u7f51\u5173\u4ee3\u7406 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u670d\u52a1\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'root@apisix:~$ kubectl -n apisix exec -it `kubectl -n apisix get pods -l app.kubernetes.io/name=apisix -o name` -- bash\nbash-5.1# curl httpbin.default/get\n{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.default",\n    "User-Agent": "curl/7.76.1"\n  },\n  "origin": "10.244.3.3",\n  "url": "http://httpbin.default/get"\n}\n')),(0,p.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5728 Apache APISIX \u7684 Pod \u5185\u53ef\u6b63\u5e38\u8bbf\u95ee\u793a\u4f8b\u9879\u76ee\u3002\u63a5\u4e0b\u6765\u4f7f\u7528 Apache APISIX \u5bf9\u8be5\u793a\u4f8b\u9879\u76ee\u8fdb\u884c\u4ee3\u7406\u3002"),(0,p.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"curl")," \u8c03\u7528 Apache APISIX \u7684 admin \u63a5\u53e3\uff0c\u521b\u5efa\u4e00\u6761\u8def\u7531\u3002\u5c06\u6240\u6709 host \u5934\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"httpbin.org")," \u7684\u8bf7\u6c42\u8f6c\u53d1\u7ed9 ",(0,p.kt)("inlineCode",{parentName:"p"},"httpbin.default:80")," \u8fd9\u4e2a\u5b9e\u9645\u7684\u5e94\u7528\u670d\u52a1\u4e0a\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'bash-5.1# curl "http://127.0.0.1:9180/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/*",\n  "host": "httpbin.org",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.default:80": 1\n    }\n  }\n}\'\n{"action":"set","node":{"value":{"uri":"\\/*","create_time":1623834078,"update_time":1623834078,"priority":0,"upstream":{"type":"roundrobin","hash_on":"vars","pass_host":"pass","nodes":{"httpbin.default:80":1},"scheme":"http"},"id":"1","status":1,"host":"httpbin.org"},"key":"\\/apisix\\/routes\\/1"}}\n')),(0,p.kt)("p",null,"\u4f60\u4f1a\u5f97\u5230\u7c7b\u4f3c\u4e0a\u9762\u7684\u8f93\u51fa\uff0c\u63a5\u4e0b\u6765\u9a8c\u8bc1\u662f\u5426\u4ee3\u7406\u6210\u529f\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'bash-5.1# curl http://127.0.0.1:9080/get -H "HOST: httpbin.org"\n{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.76.1",\n    "X-Forwarded-Host": "httpbin.org"\n  },\n  "origin": "127.0.0.1",\n  "url": "http://httpbin.org/get"\n}\n')),(0,p.kt)("p",null,"\u5f97\u5230\u4e0a\u9762\u7684\u8f93\u51fa\uff0c\u8bf4\u660e\u5df2\u7ecf\u901a\u8fc7 Apache APISIX \u4ee3\u7406\u4e86\u793a\u4f8b\u9879\u76ee\u7684\u6d41\u91cf\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u8bd5\u8bd5\u5728\u96c6\u7fa4\u5916\u901a\u8fc7 Apache APISIX \u8bbf\u95ee\u793a\u4f8b\u9879\u76ee\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"root@apisix:~$ kubectl  -n apisix get svc -l app.kubernetes.io/name=apisix\nNAME             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE\napisix-admin     ClusterIP   10.96.142.88    <none>        9180/TCP       51m\napisix-gateway   NodePort    10.96.158.192   <none>        80:32763/TCP   51m\n")),(0,p.kt)("p",null,"\u5728\u4f7f\u7528 Helm chart \u90e8\u7f72\u7684\u65f6\u5019\uff0c\u9ed8\u8ba4\u4f1a\u5c06 Apache APISIX \u7684\u7aef\u53e3\u901a\u8fc7 NodePort \u7684\u5f62\u5f0f\u66b4\u9732\u51fa\u53bb\u3002\u6211\u4eec\u4f7f\u7528 Node IP + NodePort \u7684\u7aef\u53e3\u8fdb\u884c\u8bbf\u95ee\u6d4b\u8bd5\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'root@apisix:~$ curl http://172.18.0.2:32763/get -H "HOST: httpbin.org"\n{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.58.0",\n    "X-Forwarded-Host": "httpbin.org"\n  },\n  "origin": "10.244.3.1",\n  "url": "http://httpbin.org/get"\n}\n')),(0,p.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u5728\u96c6\u7fa4\u5916\u5df2\u7ecf\u53ef\u4ee5\u901a\u8fc7 Apache APISIX \u4f5c\u4e3a\u7f51\u5173\u4ee3\u7406 Kubernetes \u96c6\u7fa4\u5185\u7684\u670d\u52a1\u4e86\u3002")),(0,p.kt)("h2",{id:"\u4f7f\u7528-apisix-ingress-controller-\u4ee3\u7406\u670d\u52a1"},"\u4f7f\u7528 APISIX Ingress controller \u4ee3\u7406\u670d\u52a1"),(0,p.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5728 Rancher \u4e2d\u6dfb\u52a0 Ingress \uff0cApache APISIX Ingress controller \u4f1a\u81ea\u52a8\u5c06\u8def\u7531\u89c4\u5219\u540c\u6b65\u81f3 Apache APISIX \u4e2d\uff0c\u5b8c\u6210\u670d\u52a1\u7684\u4ee3\u7406\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"2021-06-23-7",src:n(37439).Z})),(0,p.kt)("p",null,"\u6ce8\u610f\u53f3\u4e0b\u89d2\uff0c \u6211\u4eec\u6dfb\u52a0\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"kubernetes.io/ingress.class: apisix")," \u7684 annotation \u914d\u7f6e\uff0c\u7528\u4e8e\u652f\u6301\u96c6\u7fa4\u5185\u591a ingress-controller \u7684\u573a\u666f\u3002"),(0,p.kt)("p",null,"\u4fdd\u5b58\u540e\uff0c\u53ef\u770b\u5230\u5982\u4e0b\u754c\u9762\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"2021-06-23-8",src:n(73292).Z}),"\n\u5728\u7ec8\u7aef\u4e0b\u6d4b\u8bd5\u662f\u5426\u4ee3\u7406\u6210\u529f\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'root@apisix:~$ curl http://172.18.0.2:32763/get -H "HOST: httpbin-ing.org"\n{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin-ing.org",\n    "User-Agent": "curl/7.58.0",\n    "X-Forwarded-Host": "httpbin-ing.org"\n  },\n  "origin": "10.244.3.1",\n  "url": "http://httpbin-ing.org/get"\n}\n')),(0,p.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u4e5f\u6b63\u5e38\u4ee3\u7406\u4e86\u3002"),(0,p.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u65b9\u5f0f\u5916\uff0cApache APISIX Ingress controller \u901a\u8fc7 CRD \u7684\u65b9\u5f0f\u5bf9 Kubernetes \u8fdb\u884c\u4e86\u6269\u5c55\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u53d1\u5e03 ",(0,p.kt)("inlineCode",{parentName:"p"},"ApisixRoute")," \u7b49\u8fd9\u79cd\u81ea\u5b9a\u4e49\u8d44\u6e90\u6765\u5b8c\u6210 Kubernetes \u4e2d\u670d\u52a1\u7684\u5bf9\u5916\u66b4\u9732\u3002"),(0,p.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 Rancher \u4e2d\u4f7f\u7528 Apache APISIX \u7684\u5b98\u65b9 Helm \u4ed3\u5e93\u76f4\u63a5\u90e8\u7f72 Apache APISIX \u548c APISIX Ingress controller \u3002\u5e76\u4e14 Apache APISIX \u53ef\u901a\u8fc7\u4f5c\u4e3a\u7f51\u5173\uff0c\u6216\u8005 APISIX Ingress controller \u7684\u6570\u636e\u9762\u6765\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\u3002"),(0,p.kt)("h2",{id:"\u672a\u6765\u5c55\u671b"},"\u672a\u6765\u5c55\u671b"),(0,p.kt)("p",null,"Apache APISIX \u5df2\u7ecf\u4e0e Rancher \u793e\u533a\u8fbe\u6210\u5408\u4f5c\uff0c\u672a\u6765\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728 Rancher \u81ea\u5e26\u7684\u5e94\u7528\u4ed3\u5e93\u4e2d\u627e\u5230 Apache APISIX \uff0c\u4e0d\u518d\u9700\u8981\u624b\u52a8\u6dfb\u52a0 Helm \u4ed3\u5e93\u4e86\u3002"))}s.isMDXComponent=!0},8664:function(e,t,n){t.Z=n.p+"assets/images/2021-06-23-1-464e37bbed3bfc62a3ec8b829aedc0ac.png"},11817:function(e,t,n){t.Z=n.p+"assets/images/2021-06-23-2-8c8f5e2605bbbde14a339f033f363863.png"},58639:function(e,t,n){t.Z=n.p+"assets/images/2021-06-23-3-d82a13dc1fecf2ebddadb1bb4fa3c658.png"},62636:function(e,t,n){t.Z=n.p+"assets/images/2021-06-23-4-bf87a94d1e9e2710e5885cda0c42d645.png"},77252:function(e,t,n){t.Z=n.p+"assets/images/2021-06-23-5-51233b6894dbddd176fc3cd01e954515.png"},65944:function(e,t,n){t.Z=n.p+"assets/images/2021-06-23-6-e08db568c250b853753a3da854f2a3c1.png"},37439:function(e,t,n){t.Z=n.p+"assets/images/2021-06-23-7-450539fbcab686512fc09887d251a000.png"},73292:function(e,t,n){t.Z=n.p+"assets/images/2021-06-23-8-095c10c6a12044fb87a99c2493cfe249.png"}}]);