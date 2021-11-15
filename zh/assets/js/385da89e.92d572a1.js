"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25191],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16844:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l={title:"FAQ"},o=void 0,s={unversionedId:"FAQ",id:"FAQ",isDocsHomePage:!1,title:"FAQ",description:"\x3c!--",source:"@site/docs/apisix-helm-chart/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/zh/docs/helm-chart/FAQ",editUrl:"https://github.com/apache/apisix-helm-chart/edit/master/docs/zh/latest/FAQ.md",tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"Apache APISIX Ingress Controller Helm Chart",permalink:"/zh/docs/helm-chart/apisix-ingress-controller"}},c=[{value:"How to install APISIX only?",id:"how-to-install-apisix-only",children:[]},{value:"Why get 403 when I access Apache APISIX admin api?",id:"why-get-403-when-i-access-apache-apisix-admin-api",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"how-to-install-apisix-only"},"How to install APISIX only?"),(0,i.kt)("p",null,"The Charts will install ETCD ",(0,i.kt)("inlineCode",{parentName:"p"},"3.4.14")," by default. If you want to install Apache APISIX only, please set ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd.enabled=false")," and set ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd.host={http://your_etcd_address:2379}"),"."),(0,i.kt)("p",null,"Please use the FQDN or the IP address of the ETCD cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# if etcd export by kubernetes service need spell fully qualified name\nhelm install apisix apisix/apisix \\\n    --set etcd.enabled=false \\\n    --set etcd.host={http://etcd_node_1:2379\\,http://etcd_node_2:2379}\n")),(0,i.kt)("h3",{id:"why-get-403-when-i-access-apache-apisix-admin-api"},"Why get 403 when I access Apache APISIX admin api?"),(0,i.kt)("p",null,"We can define ",(0,i.kt)("inlineCode",{parentName:"p"},"admin.allow.ipList")," in CIDR."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'helm install apisix apisix/apisix \\\n    --set admin.allow.ipList="10.22.100.12/8" \\\n    --set admin.allow.ipList="172.0.0.0/24"\n')),(0,i.kt)("p",null,"If you want to allow all IPs for a quick test, just set ",(0,i.kt)("inlineCode",{parentName:"p"},'admin.allow.ipList=""')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'helm install apisix apisix/apisix \\\n    --set admin.allow.ipList=""\n')))}u.isMDXComponent=!0}}]);