(self.webpackChunk=self.webpackChunk||[]).push([[22215],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||i;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39696:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),s={title:"Run Ingress APISIX on Amazon EKS",author:"Chao Zhang",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars0.githubusercontent.com/u/10428333?s=60&v=4"},o={permalink:"/zh/blog/2021/01/21/run-ingress-apisix-on-amazon-eks",source:"@site/blog/2021-01-21-run-ingress-apisix-on-amazon-eks.md",title:"Run Ingress APISIX on Amazon EKS",description:"@Chao Zhang, Apache APISIX Committer from Shenzhen Zhiliu Technology Co.",date:"2021-01-21T00:00:00.000Z",formattedDate:"2021\u5e741\u670821\u65e5",tags:[],readingTime:4.13,truncated:!0,prevItem:{title:"Stable Product Delivery with Cypress",permalink:"/zh/blog/2021/02/08/stable-product-delivery-with-cypress"},nextItem:{title:"Apache APISIX \u8d21\u732e\u8005\u4e13\u8bbf | \u666e\u534e\u6c38\u9053\u534e\u5357\u6570\u636e\u5b89\u5168\u4e0e\u9690\u79c1\u4fdd\u62a4\u56e2\u961f\u9ad8\u7ea7\u5b89\u5168\u987e\u95ee\u738b\u9e4f\u8bda",permalink:"/zh/blog/2021/01/11/interview-Apache-APISIX-contributor-Wang-Pengcheng-Senior-Security-Advisor-of-PwC-South-China-Data-Security-and-Privacy-Protection-Team"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Apache APISIX",id:"install-apache-apisix",children:[]},{value:"Install apisix-ingress-controller",id:"install-apisix-ingress-controller",children:[]},{value:"Test",id:"test",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:l};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/tokers"},"@Chao Zhang"),", Apache APISIX Committer from ",(0,i.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Source:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"https://github.com/apache/apisix-helm-chart")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller"},"https://github.com/apache/apisix-ingress-controller")))),(0,i.kt)("p",null,"This post is based on ",(0,i.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/ingress-controller/deployments/aws/"},"Install Ingress APISIX on Amazon EKS"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("p",null,"Amazon Elastic Kubernetes Service (",(0,i.kt)("a",{parentName:"p",href:"https://amazonaws-china.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc"},"Amazon EKS"),") gives you the flexibility to start, run, and scale Kubernetes applications in the AWS cloud or on-premises. This article explains how to run Ingress APISIX on it."),(0,i.kt)("p",null,"Ingress APISIX brings good features (traffic splitting, multiple protocols, authentication and etc) of Apache APISIX to Kubernetes, with a well-designed Controller component to drive it, which helps users to achieve complex demands for the north-south traffic."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you go ahead, make sure you have an available EKS cluster on Amazon AWS. If you don't have one, please create it according to the guide."),(0,i.kt)("p",null,"You shall have kubectl tool in your own environment, set the context to your EKS cluster by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"aws eks update-kubeconfig --name <your eks cluster name> --region <your region>\n")),(0,i.kt)("p",null,"After the Kubernetes cluster is ready, creating the namespace ingress-apisix, all subsequent resources will be created at this namespace."),(0,i.kt)("p",null,"kubectl create namespace ingress-apisix"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," to deploy all components in Ingress APISIX (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"apisix-ingress-controller"),"), so please also install Helm according to its installation guide. The helm charts for Apache APISIX and apisix-ingress-controller are in apache/apisix-helm-chart and apache/apisix-ingress-controller, clone them to get the charts."),(0,i.kt)("h2",{id:"install-apache-apisix"},"Install Apache APISIX"),(0,i.kt)("p",null,"Apache APISIX as the proxy plane of apisix-ingress-controller, should be deployed in advance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm dependency update ./chart/apisix\nhelm install apisix ./chart/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set allow.ipList="{0.0.0.0/0}" \\\n  --namespace ingress-apisix\nkubectl get service --namespace ingress-apisix\n')),(0,i.kt)("p",null,"The above commands created two Kubernetes Service resources, one is ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes. Here we created the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-gateway")," as a ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," type Service, which resorts the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html"},"AWS Network Balancer")," to expose it to the Internet. You can find the load balancer hostname by the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway \\\n--namespace ingress-apisix \\\n-o jsonpath='{.status.loadBalancer.ingress[].hostname}'\n")),(0,i.kt)("p",null," Another thing should be concerned that the ",(0,i.kt)("inlineCode",{parentName:"p"},"allow.ipList")," field should be customized according to the ",(0,i.kt)("a",{parentName:"p",href:"https://amazonaws-china.com/premiumsupport/knowledge-center/eks-multiple-cidr-ranges/"},"EKS CIDR Ranges")," in your EKS cluster, so that the apisix-ingress-controller can be authorized by Apache APISIX (for the resources pushing)."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart/blob/master/charts/apisix/values.yaml"},"values.yaml")," to learn all the configuration items if you have other requirements."),(0,i.kt)("h2",{id:"install-apisix-ingress-controller"},"Install apisix-ingress-controller"),(0,i.kt)("p",null,"After Apache APISIX is deployed successfully, now it's time to install the controller component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\n# install base resources, e.g. ServiceAccount.\nhelm install ingress-apisix-base -n ingress-apisix ./charts/base\n# install apisix-ingress-controller\nhelm install ingress-apisix ./charts/ingress-apisix \\\n  --set ingressController.image.tag=dev \\\n  --set ingressController.config.apisix.baseURL=http://apisix-admin:9180/apisix/admin \\\n  --set ingressController.config.apisix.adminKey={YOUR ADMIN KEY} \\\n  --namespace ingress-apisix\n")),(0,i.kt)("p",null,"The ingress-apisix-base chart installed some basic dependencies for apisix-ingress-controller, such as ServiceAccount, its exclusive CRDs and etc."),(0,i.kt)("p",null,"The ingress-apisix chart guides us how to install the controller itself, you can change the image tag to the desired release version, also the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"ingressController.config.apisix.adminKey")," in above mentioned commands should be filled according to your practical usage (and be sure the admin key is same as the on in Apache APISIX deployment). See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart/blob/master/charts/apisix-ingress-controller/values.yaml"},"values.yaml")," to learn all the configuration items if you have other requirements."),(0,i.kt)("p",null,"Now try to open your EKS console, choosing your cluster and clicking the Workloads tag, you shall see all pods of Apache APISIX, etcd and apisix-ingress-controller are ready."),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("p",null,"Now we have deployed all components in Ingress APISIX, it's important to check whether it runs well. We will deploy a httpbin service and ask Apache APISIX to route all requests with Host ",(0,i.kt)("inlineCode",{parentName:"p"},'"local.httpbin.org"')," to it."),(0,i.kt)("p",null,"The first step we should do is created the httpbin workload and expose it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run httpbin --image kennethreitz/httpbin --port 80\nkubectl expose pod httpbin --port 80\n")),(0,i.kt)("p",null,"In order to let Apache APISIX routes requests correctly, we need create an ApisixRoute resource to drive it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# ar-httpbin.yaml\napiVersion: apisix.apache.org/v1\nkind: ApisixRoute\nmetadata:\n  name: httpserver-route\nspec:\n  rules:\n  - host: local.httpbin.org\n    http:\n      paths:\n      - backend:\n          serviceName: httpbin\n          servicePort: 80\n        path: /*\n")),(0,i.kt)("p",null,"The above ApisixRoute resource asks Apache APISIX to route requests which Host header is ",(0,i.kt)("inlineCode",{parentName:"p"},'"local.httpbin.org"')," to the httpbin backend (the one we just created)."),(0,i.kt)("p",null,"Now try to apply it, note the service and the ApisixRoute resource should be put in the same namespace., crossing namespaces is not allowed in apisix-ingress-controller."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ar-httpbin.yaml\n")),(0,i.kt)("p",null,"Test it by a simple curl call from a place where the Apache APISIX service is reachable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://{apisix-gateway-ip}:{apisix-gateway-port}/headers -s -H \'Host: local.httpbin.org\'\n\n{\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.64.1",\n    "X-Amzn-Trace-Id": "Root=1-5ffc3273-2928e0844e19c9810d1bbd8a"\n  }\n}\n')),(0,i.kt)("p",null,"If the Service type is ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP,")," you have to login to a pod in the EKS cluster, then accessing Apache APISIX with its ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP")," or Service FQDN. If it was exposed (no matter ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),"), just accessing its outside reachable endpoint."),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.apiseven.com/zh/blog/a-first-look-at-kubernetes-service-api"},"https://www.apiseven.com/zh/blog/a-first-look-at-kubernetes-service-api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.apiseven.com/zh/blog/another-way-to-implement-envoy-filter"},"https://www.apiseven.com/zh/blog/another-way-to-implement-envoy-filter"))))}c.isMDXComponent=!0}}]);