"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33303],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75594:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s={title:"Install Ingress APISIX on K3S and Rancher RKE"},o={unversionedId:"deployments/k3s-rke",id:"deployments/k3s-rke",isDocsHomePage:!1,title:"Install Ingress APISIX on K3S and Rancher RKE",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/deployments/k3s-rke.md",sourceDirName:"deployments",slug:"/deployments/k3s-rke",permalink:"/docs/ingress-controller/deployments/k3s-rke",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/deployments/k3s-rke.md",version:"current",frontMatter:{title:"Install Ingress APISIX on K3S and Rancher RKE"},sidebar:"docs",previous:{title:"Install Ingress APISIX on Google Cloud GKE",permalink:"/docs/ingress-controller/deployments/gke"},next:{title:"Install Ingress APISIX on KubeSphere",permalink:"/docs/ingress-controller/deployments/kubesphere"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and apisix-ingress-controller",id:"install-apisix-and-apisix-ingress-controller",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,i.kt)("a",{parentName:"p",href:"https://k3s.io/"},"k3S")," and ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/products/rke/"},"Rancher RKE"),"."),(0,i.kt)("p",null,"K3S is a certified Kubernetes distribution built for IoT and Edge computing, whilst ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," is also good at IoT (See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/mqtt-proxy.md"},"MQTT plugin"),") and runs well on ARM architecture.\nIt's a good choice to use Ingress APISIX as the north-south API gateway in K3S."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/"},"K3S")," or ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/"},"Rancher RKE"),"."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,i.kt)("li",{parentName:"ul"},"Clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),(0,i.kt)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations through this document will be executed in namespace ",(0,i.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,i.kt)("h2",{id:"install-apisix-and-apisix-ingress-controller"},"Install APISIX and apisix-ingress-controller"),(0,i.kt)("p",null,"As the data plane of apisix-ingress-controller, ",(0,i.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," can be deployed at the same time using Helm chart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix charts/apisix \\\n  --set gateway.type=NodePort \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix \\\n  --kubeconfig /etc/rancher/k3s/k3s.yaml\nkubectl get service --namespace ingress-apisix\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you are using K3S, the default kubeconfig file is in /etc/rancher/k3s and root permission may required.")),(0,i.kt)("p",null,"Five Service resources were created."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),", which processes the real traffic;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),", which exposes apisix-ingress-controller's metrics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless")," for etcd service and internal communication.")),(0,i.kt)("p",null,"The gateway service type is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort"),", so that clients can access Apache APISIX through the Node IPs and the assigned port.\nIf you are using K3S and you want to expose a ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service, try to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/klipper-lb"},"Klipper"),"."),(0,i.kt)("p",null,"Now try to create some ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/ingress-controller/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}c.isMDXComponent=!0}}]);