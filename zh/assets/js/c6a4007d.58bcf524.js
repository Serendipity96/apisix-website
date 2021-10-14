"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71239],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},10325:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),s={title:"Apache APISIX Ingress Controller Helm Chart"},l=void 0,o={unversionedId:"apisix-ingress-controller",id:"apisix-ingress-controller",isDocsHomePage:!1,title:"Apache APISIX Ingress Controller Helm Chart",description:"\x3c!--",source:"@site/docs/apisix-helm-chart/apisix-ingress-controller.md",sourceDirName:".",slug:"/apisix-ingress-controller",permalink:"/zh/docs/helm-chart/apisix-ingress-controller",editUrl:"https://github.com/apache/apisix-helm-chart/edit/master/docs/en/latest/apisix-ingress-controller.md",tags:[],version:"current",frontMatter:{title:"Apache APISIX Ingress Controller Helm Chart"},sidebar:"docs",previous:{title:"Apache APISIX Dashboard Helm Chart",permalink:"/zh/docs/helm-chart/apisix-dashboard"},next:{title:"FAQ",permalink:"/zh/docs/helm-chart/FAQ"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install",id:"install",children:[]},{value:"Uninstall",id:"uninstall",children:[]},{value:"Deployment Options",id:"deployment-options",children:[{value:"ingress version",id:"ingress-version",children:[]}]},{value:"Upgrade Considerations",id:"upgrade-considerations",children:[{value:"CRD",id:"crd",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes 1.12+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix#configure-and-installation"},"Apache APISIX")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/quickstart/#install-helm"},"Helm v3.0+"))),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"To install apisix-ingress-controller which release name is ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add apisix https://charts.apiseven.com\nhelm repo update\nhelm install apisix-ingress-controller apisix/apisix-ingress-controller --namespace ingress-apisix\n")),(0,a.kt)("h2",{id:"uninstall"},"Uninstall"),(0,a.kt)("p",null,"To uninstall/delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," release:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall apisix-ingress-controller --namespace ingress-apisix\n")),(0,a.kt)("h2",{id:"deployment-options"},"Deployment Options"),(0,a.kt)("h3",{id:"ingress-version"},"ingress version"),(0,a.kt)("p",null,"By default apisix-ingress-controller watches the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")," resources in api group ",(0,a.kt)("inlineCode",{parentName:"p"},"networking/v1"),", however, if your Kubernetes cluster is prior to ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.19"),", you need to change the ingress watching version."),(0,a.kt)("p",null,"If your Kubernetes version is older than ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.14"),", then:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm install apisix-ingress-controller apisix/apisix-ingress-controller --namespace ingress-apisix --set config.kubernetes.ingressVersion=extensions/v1beta1\n")),(0,a.kt)("p",null,"Or if your Kubernetes version is between ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.14")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.19"),", try below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm install apisix-ingress-controller apisix/apisix-ingress-controller --namespace ingress-apisix --set config.kubernetes.ingressVersion=networking/v1beta1\n")),(0,a.kt)("h2",{id:"upgrade-considerations"},"Upgrade Considerations"),(0,a.kt)("h3",{id:"crd"},"CRD"),(0,a.kt)("p",null,"CRDs upgrading is special as helm chart will skip to apply these resources when they already exist."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"With the arrival of Helm 3, we removed the old crd-install hooks for a more simple methodology. There is now a special directory called crds that you can create in your chart to hold your CRDs. These CRDs are not templated, but will be installed by default when running a helm install for the chart. If the CRD already exists, it will be skipped with a warning. If you wish to skip the CRD installation step, you can pass the --skip-crds flag.")),(0,a.kt)("p",null,"In such a case, you may need to apply these CRDs by yourself."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nkubectl apply -k samples/deploy/crd/\n")))}u.isMDXComponent=!0}}]);