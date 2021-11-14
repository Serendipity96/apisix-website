"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2373],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),o=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=o(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=o(t),m=a,h=g["".concat(c,".").concat(m)]||g[m]||u[m]||s;return t?n.createElement(h,i(i({ref:r},l),{},{components:t})):n.createElement(h,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=g;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<s;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7691:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return o},default:function(){return u}});var n=t(87462),a=t(63366),s=(t(67294),t(3905)),i={title:"How to proxy the gRPC service"},p=void 0,c={unversionedId:"practices/proxy-grpc-service",id:"practices/proxy-grpc-service",isDocsHomePage:!1,title:"How to proxy the gRPC service",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/practices/proxy-grpc-service.md",sourceDirName:"practices",slug:"/practices/proxy-grpc-service",permalink:"/zh/docs/ingress-controller/practices/proxy-grpc-service",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/practices/proxy-grpc-service.md",tags:[],version:"current",frontMatter:{title:"How to proxy the gRPC service"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prepare a gRPC service",id:"prepare-a-grpc-service",children:[]},{value:"Declare gRPC proxy configuration",id:"declare-grpc-proxy-configuration",children:[{value:"Create a route and tell APISIX proxy rules",id:"create-a-route-and-tell-apisix-proxy-rules",children:[]},{value:"Inform APISIX the yages is a gRPC server through ApisixUpstream",id:"inform-apisix-the-yages-is-a-grpc-server-through-apisixupstream",children:[]},{value:"Configure certificates for gRPC",id:"configure-certificates-for-grpc",children:[]},{value:"Test",id:"test",children:[]},{value:"Cleanup",id:"cleanup",children:[]}]}],l={toc:o};function u(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this practice, we will introduce how to proxy the gRPC service."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation, we recommend you to use ",(0,s.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"KIND")," to create a local Kubernetes cluster."),(0,s.kt)("li",{parentName:"ul"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"Apache APISIX")," in Kubernetes by ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Helm Chart"),"."),(0,s.kt)("li",{parentName:"ul"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/blob/master/install.md"},"apisix-ingress-controller"),".")),(0,s.kt)("p",null,"Please note that in this practice, all components will be installed in the ",(0,s.kt)("inlineCode",{parentName:"p"},"ingress-apisix")," namespace. If your Kubernetes cluster does not have such namespace, please create it first."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns ingress-apisix\n")),(0,s.kt)("p",null,"You could install APISIX and APISIX ingress controller by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"helm install apisix apisix/apisix -n ingress-apisix --set gateway.type=NodePort --set ingress-controller.enabled=true --set gateway.tls.enabled=true --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\n")),(0,s.kt)("p",null,"Check that all related components have been installed successfully, including ETCD cluster / APISIX / apisix-ingress-controller."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n ingress-apisix\nNAME                                        READY   STATUS    RESTARTS   AGE\napisix-569f94b7b6-qt5jj                     1/1     Running   0          101m\napisix-etcd-0                               1/1     Running   0          101m\napisix-etcd-1                               1/1     Running   0          101m\napisix-etcd-2                               1/1     Running   0          101m\napisix-ingress-controller-b5f5d49db-r9cxb   1/1     Running   0          101m\n")),(0,s.kt)("h2",{id:"prepare-a-grpc-service"},"Prepare a gRPC service"),(0,s.kt)("p",null,"Using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mhausenblas/yages"},"yages")," as the gRPC server."),(0,s.kt)("p",null,"Declare the deployment configuration of yapes, exposing port ",(0,s.kt)("inlineCode",{parentName:"p"},"9000"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run yages -n ingress-apisix --image smirl/yages:0.1.3 --expose --port 9000\n")),(0,s.kt)("p",null,"Use the service that includes ",(0,s.kt)("inlineCode",{parentName:"p"},"grpcurl")," to test gRPC connectivity."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl run -it -n ingress-apisix --rm grpcurl --restart=Never --image=quay.io/mhausenblas/gump:0.1 -- sh\nIf you don\'t see a command prompt, try pressing enter.\n/go $ grpcurl --plaintext yages:9000 yages.Echo.Ping\n{\n  "text": "pong"\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"If you encounter a timeout error, you can first download ",(0,s.kt)("inlineCode",{parentName:"strong"},"quay.io/mhausenblas/gump:0.1")," to the local.")),(0,s.kt)("h2",{id:"declare-grpc-proxy-configuration"},"Declare gRPC proxy configuration"),(0,s.kt)("h3",{id:"create-a-route-and-tell-apisix-proxy-rules"},"Create a route and tell APISIX proxy rules"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2beta2\nkind: ApisixRoute\nmetadata:\n  name: grpc-proxy-route\n  namespace: ingress-apisix\nspec:\n  http:\n    - name: grpc-route\n      match:\n        hosts:\n          - grpc-proxy\n        paths:\n          - "/*"\n      backends:\n      - serviceName: yages\n        servicePort: 9000\n        weight: 10\nEOF\n')),(0,s.kt)("h3",{id:"inform-apisix-the-yages-is-a-grpc-server-through-apisixupstream"},"Inform APISIX the yages is a gRPC server through ApisixUpstream"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: yages\n  namespace: ingress-apisix\nspec:\n  scheme: grpc\nEOF\n")),(0,s.kt)("h3",{id:"configure-certificates-for-grpc"},"Configure certificates for gRPC"),(0,s.kt)("p",null,"Common Name should be ",(0,s.kt)("inlineCode",{parentName:"p"},"grpc-proxy"),", which needs to be consistent with the hosts declared in ApisixRoute."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout tls.key -out tls.crt -subj "/CN=grpc-proxy/O=grpc-proxy"\n')),(0,s.kt)("p",null,"Store key and crt in secret."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret tls grpc-secret -n ingress-apisix --cert=tls.crt --key=tls.key\n")),(0,s.kt)("p",null,"Inform APISIX SSL configuration through ApisixTls."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v1\nkind: ApisixTls\nmetadata:\n  name: grpc-secret\n  namespace: ingress-apisix\nspec:\n  hosts:\n    - "grpc-proxy"\n  secret:\n    name: grpc-secret\n    namespace: ingress-apisix\nEOF\n')),(0,s.kt)("h3",{id:"test"},"Test"),(0,s.kt)("p",null,"OK, the configuration is complete, continue to verify through ",(0,s.kt)("inlineCode",{parentName:"p"},"grpcurl"),", this time we visit the ",(0,s.kt)("inlineCode",{parentName:"p"},"yages")," service through the Apache APISIX proxy."),(0,s.kt)("p",null,"Check the APISIX DP (Data Plane) service, which is apisix-gateway in this example."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n ingress-apisix\nNAME                        TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)                      AGE\napisix-admin                ClusterIP   10.96.49.113   <none>        9180/TCP                     98m\napisix-etcd                 ClusterIP   10.96.81.162   <none>        2379/TCP,2380/TCP            98m\napisix-etcd-headless        ClusterIP   None           <none>        2379/TCP,2380/TCP            98m\napisix-gateway              NodePort    10.96.74.145   <none>        80:32600/TCP,443:32103/TCP   98m\napisix-ingress-controller   ClusterIP   10.96.78.108   <none>        80/TCP                       98m\nyages                       ClusterIP   10.96.37.236   <none>        9000/TCP                     94m\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl run -it -n ingress-apisix --rm grpcurl --restart=Never --image=quay.io/mhausenblas/gump:0.1 -- sh\nIf you don\'t see a command prompt, try pressing enter.\n/go $ grpcurl --insecure -servername grpc-proxy apisix-gateway:443 yages.Echo.Ping\n{\n  "text": "pong"\n}\n')),(0,s.kt)("p",null,"APISIX proxy gRPC server succeeded."),(0,s.kt)("h3",{id:"cleanup"},"Cleanup"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete ns ingress-apisix\n")))}u.isMDXComponent=!0}}]);