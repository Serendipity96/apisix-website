"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99915],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34356:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),a={title:"Install Ingress APISIX on Minikube"},o=void 0,l={unversionedId:"deployments/minikube",id:"deployments/minikube",isDocsHomePage:!1,title:"Install Ingress APISIX on Minikube",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/deployments/minikube.md",sourceDirName:"deployments",slug:"/deployments/minikube",permalink:"/zh/docs/ingress-controller/deployments/minikube",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/deployments/minikube.md",tags:[],version:"current",frontMatter:{title:"Install Ingress APISIX on Minikube"},sidebar:"docs",previous:{title:"Install Ingress APISIX on KubeSphere",permalink:"/zh/docs/ingress-controller/deployments/kubesphere"},next:{title:"Install Ingress APISIX on Tencent TKE",permalink:"/zh/docs/ingress-controller/deployments/tke"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and apisix-ingress-controller",id:"install-apisix-and-apisix-ingress-controller",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,s.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"Minikube"),"."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube"),"."),(0,s.kt)("li",{parentName:"ul"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,s.kt)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations thorough this document will be executed in namespace ",(0,s.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,s.kt)("h2",{id:"install-apisix-and-apisix-ingress-controller"},"Install APISIX and apisix-ingress-controller"),(0,s.kt)("p",null,"As the data plane of apisix-ingress-controller, ",(0,s.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," can be deployed at the same time using Helm chart."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix apisix/apisix \\\n  --set gateway.type=NodePort \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\nkubectl get service --namespace ingress-apisix\n")),(0,s.kt)("p",null,"Five Service resources were created."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),", which processes the real traffic;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),", which exposes apisix-ingress-controller's metrics."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless")," for etcd service and internal communication.")),(0,s.kt)("p",null,"Now try to create some ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running of Ingress APISIX. As a minimalist example, see ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}u.isMDXComponent=!0}}]);