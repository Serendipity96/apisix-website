"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14503],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93861:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s={title:"Install Ingress APISIX on Amazon EKS"},o=void 0,l={unversionedId:"deployments/aws",id:"deployments/aws",isDocsHomePage:!1,title:"Install Ingress APISIX on Amazon EKS",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/deployments/aws.md",sourceDirName:"deployments",slug:"/deployments/aws",permalink:"/zh/docs/ingress-controller/deployments/aws",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/deployments/aws.md",tags:[],version:"current",frontMatter:{title:"Install Ingress APISIX on Amazon EKS"},sidebar:"docs",previous:{title:"Install Ingress APISIX on ACK",permalink:"/zh/docs/ingress-controller/deployments/ack"},next:{title:"Install Ingress APISIX on Azure AKS",permalink:"/zh/docs/ingress-controller/deployments/azure"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and apisix-ingress-controller",id:"install-apisix-and-apisix-ingress-controller",children:[{value:"Specify The Ingress Version",id:"specify-the-ingress-version",children:[]},{value:"Enable SSL",id:"enable-ssl",children:[]},{value:"Change default apikey",id:"change-default-apikey",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,i.kt)("a",{parentName:"p",href:"https://amazonaws-china.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc"},"Amazon EKS"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create an EKS Service on AWS."),(0,i.kt)("li",{parentName:"ul"},"Download the kube config for your EKS from ",(0,i.kt)("a",{parentName:"li",href:"https://amazonaws-china.com/cli/"},"aws cli interface"),"."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),".")),(0,i.kt)("h2",{id:"install-apisix-and-apisix-ingress-controller"},"Install APISIX and apisix-ingress-controller"),(0,i.kt)("p",null,"As the data plane of apisix-ingress-controller, ",(0,i.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," can be deployed at the same time using Helm chart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix apisix/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\nkubectl get service --namespace ingress-apisix\n")),(0,i.kt)("p",null,"Five Service resources were created."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),", which processes the real traffic;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),", which exposes apisix-ingress-controller's metrics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless")," for etcd service and internal communication.")),(0,i.kt)("p",null,"The gateway service type is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," (See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html"},"AWS Network Balancer")," for more details), so that clients can access Apache APISIX through a load balancer. You can find the load balancer hostname by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].hostname}'\n")),(0,i.kt)("p",null,"Now open your ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/eks/home"},"EKS console"),", choosing your cluster and clicking the Workloads tag, you'll see all pods of Apache APISIX, etcd and apisix-ingress-controller are ready."),(0,i.kt)("p",null,"Try to create some ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."),(0,i.kt)("h3",{id:"specify-the-ingress-version"},"Specify The Ingress Version"),(0,i.kt)("p",null,"apisix-ingress-controller will watch apiVersion of ",(0,i.kt)("inlineCode",{parentName:"p"},"networking.k8s.io/v1")," by default. If the target kubernetes version is under ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.19"),", add ",(0,i.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=networking/v1beta1")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=extensions/v1beta1")," if your kubernetes cluster is under ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.16")),(0,i.kt)("h3",{id:"enable-ssl"},"Enable SSL"),(0,i.kt)("p",null,"The ssl config is disabled by default, add ",(0,i.kt)("inlineCode",{parentName:"p"},"--set gateway.tls.enabled=true")," to enable tls support."),(0,i.kt)("h3",{id:"change-default-apikey"},"Change default apikey"),(0,i.kt)("p",null,"It's Recommended to change the default key by add ",(0,i.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.apisix.adminKey=ADMIN_KEY_GENERATED_BY_YOURSELF"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--set admin.credentials.admin=ADMIN_KEY_GENERATED_BY_YOURSELF"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--set admin.credentials.viewer=VIEWER_KEY_GENERATED_BY_YOURSELF"),", notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress-controller.config.apisix.adminKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"admin.credentials.admin")," must be the same, and should better not same as ",(0,i.kt)("inlineCode",{parentName:"p"},"admin.credentials.viewer"),"."))}d.isMDXComponent=!0}}]);