"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38241],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76306:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),s={title:"Install Ingress APISIX on KubeSphere"},o=void 0,l={unversionedId:"deployments/kubesphere",id:"deployments/kubesphere",isDocsHomePage:!1,title:"Install Ingress APISIX on KubeSphere",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/deployments/kubesphere.md",sourceDirName:"deployments",slug:"/deployments/kubesphere",permalink:"/zh/docs/ingress-controller/deployments/kubesphere",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/deployments/kubesphere.md",tags:[],version:"current",frontMatter:{title:"Install Ingress APISIX on KubeSphere"},sidebar:"docs",previous:{title:"Install Ingress APISIX on K3S and Rancher RKE",permalink:"/zh/docs/ingress-controller/deployments/k3s-rke"},next:{title:"Install Ingress APISIX on Minikube",permalink:"/zh/docs/ingress-controller/deployments/minikube"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and apisix-ingress-controller",id:"install-apisix-and-apisix-ingress-controller",children:[{value:"Specify The Ingress Version",id:"specify-the-ingress-version",children:[]},{value:"Enable SSL",id:"enable-ssl",children:[]},{value:"Change default apikey",id:"change-default-apikey",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,a.kt)("a",{parentName:"p",href:"https://kubesphere.io/"},"KubeSphere"),"."),(0,a.kt)("p",null,"KubeSphere is a distributed operating system managing cloud native applications with Kubernetes as its kernel, and provides plug-and-play architecture for the seamless integration of third-party applications to boost its ecosystem."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://kubesphere.io/docs/quick-start/"},"KubeSphere"),", you can choose ",(0,a.kt)("a",{parentName:"li",href:"https://kubesphere.io/docs/quick-start/all-in-one-on-linux/"},"All-in-one Installation on Linux")," or ",(0,a.kt)("a",{parentName:"li",href:"https://kubesphere.io/docs/quick-start/minimal-kubesphere-on-k8s/"},"Minimal KubeSphere on Kubernetes"),"."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,a.kt)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations of this document will be executed in namespace ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,a.kt)("h2",{id:"install-apisix-and-apisix-ingress-controller"},"Install APISIX and apisix-ingress-controller"),(0,a.kt)("p",null,"As the data plane of apisix-ingress-controller, ",(0,a.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," can be deployed at the same time using Helm chart."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix apisix/apisix \\\n  --set gateway.type=NodePort \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\nkubectl get service --namespace ingress-apisix\n")),(0,a.kt)("p",null,"Five Service resources were created."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),", which processes the real traffic;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),", which exposes apisix-ingress-controller's metrics."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless")," for etcd service and internal communication.")),(0,a.kt)("p",null,"The gateway service type is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort"),", so that clients can access Apache APISIX through the Node IPs and the assigned port.\nIf you want to expose a ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service, try to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubesphere/porter"},"Porter"),"."),(0,a.kt)("p",null,"Now try to create some ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."),(0,a.kt)("h3",{id:"specify-the-ingress-version"},"Specify The Ingress Version"),(0,a.kt)("p",null,"apisix-ingress-controller will watch apiVersion of ",(0,a.kt)("inlineCode",{parentName:"p"},"networking.k8s.io/v1")," by default. If the target kubernetes version is under ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.19"),", add ",(0,a.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=networking/v1beta1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=extensions/v1beta1")," if your kubernetes cluster is under ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.16")),(0,a.kt)("h3",{id:"enable-ssl"},"Enable SSL"),(0,a.kt)("p",null,"The ssl config is disabled by default, add ",(0,a.kt)("inlineCode",{parentName:"p"},"--set gateway.tls.enabled=true")," to enable tls support."),(0,a.kt)("h3",{id:"change-default-apikey"},"Change default apikey"),(0,a.kt)("p",null,"It's Recommended to change the default key by add ",(0,a.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.apisix.adminKey=ADMIN_KEY_GENERATED_BY_YOURSELF"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--set admin.credentials.admin=ADMIN_KEY_GENERATED_BY_YOURSELF"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--set admin.credentials.viewer=VIEWER_KEY_GENERATED_BY_YOURSELF"),", notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"ingress-controller.config.apisix.adminKey")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"admin.credentials.admin")," must be the same, and should better not same as ",(0,a.kt)("inlineCode",{parentName:"p"},"admin.credentials.viewer"),"."))}u.isMDXComponent=!0}}]);