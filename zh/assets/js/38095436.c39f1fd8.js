"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25756],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),d=r,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6996:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o={title:"ApisixClusterConfig"},s=void 0,l={unversionedId:"concepts/apisix_cluster_config",id:"concepts/apisix_cluster_config",isDocsHomePage:!1,title:"ApisixClusterConfig",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/concepts/apisix_cluster_config.md",sourceDirName:"concepts",slug:"/concepts/apisix_cluster_config",permalink:"/zh/docs/ingress-controller/concepts/apisix_cluster_config",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/concepts/apisix_cluster_config.md",tags:[],version:"current",frontMatter:{title:"ApisixClusterConfig"}},c=[{value:"Monitoring",id:"monitoring",children:[]},{value:"Admin Config",id:"admin-config",children:[]},{value:"Multiple Clusters Management",id:"multiple-clusters-management",children:[]}],p={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," is a CRD resource which used to describe an APISIX cluster, currently it's not a required\nresource but its existence can enrich an APISIX cluster, for instance, enabling cluster-wide monitoring, rate limiting and so on."),(0,a.kt)("p",null,"monitoring features like collecting ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," metrics\nand ",(0,a.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/"},"skywalking")," spans"),(0,a.kt)("h2",{id:"monitoring"},"Monitoring"),(0,a.kt)("p",null,"By default, monitoring are not enabled for the APISIX cluster, this is not favorable\nif you'd like to learn the real running status of your cluster. In such a case, you\ncould create a ",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," to enable these features explicitly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixClusterConfig\nmetadata:\n  name: default\nspec:\n  monitoring:\n    prometheus:\n      enable: true\n    skywalking:\n      enable: true\n      sampleRatio: 0.5\n")),(0,a.kt)("p",null,'The above example enables both the Prometheus and Skywalking for the APISIX cluster which name is "default".\nPlease see ',(0,a.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/prometheus"},"Prometheus in APISIX")," and ",(0,a.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/skywalking"},"Skywalking in APISIX")," for the details."),(0,a.kt)("h2",{id:"admin-config"},"Admin Config"),(0,a.kt)("p",null,"The default APISIX cluster is configured through command line options like ",(0,a.kt)("inlineCode",{parentName:"p"},"--default-apisix-cluster-xxx"),". They are constant in apisix-ingress-controller's lifecycle, you have to change the definition\nof Deployment or Pod template. Now with the help of ",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig"),", you can change some administrative fields on it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixClusterConfig\nmetadata:\n  name: default\nspec:\n  admin:\n    baseURL: http://apisix-gw.default.svc.cluster.local:9180/apisix/admin\n    adminKey: "123456"\n')),(0,a.kt)("p",null,"The above ",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," sets the base url and admin key for the APISIX cluster ",(0,a.kt)("inlineCode",{parentName:"p"},'"default"'),". Once this\nresource is processed, resources like Route, Upstream and others will be pushed to the new address with the new admin key (for authentication)."),(0,a.kt)("h2",{id:"multiple-clusters-management"},"Multiple Clusters Management"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," is also designed for supporting multiple clusters management, but currently this function IS NOT ENABLED YET.\nOnly the ",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," with the same named configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"--default-apisix-cluster-name")," option will be handled by apisix-ingress-controller, other instances will be neglected."),(0,a.kt)("p",null,"The current delete event for ",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," doesn't mean the apisix-ingress-controller will lose the view of the corresponding APISIX cluster but\nresetting all the features on it, so the running of APISIX cluster is not influenced by this event."))}u.isMDXComponent=!0}}]);