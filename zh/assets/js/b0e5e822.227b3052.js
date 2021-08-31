(self.webpackChunk=self.webpackChunk||[]).push([[24316],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67715:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"ApisixUpstream"},s={unversionedId:"concepts/apisix_upstream",id:"concepts/apisix_upstream",isDocsHomePage:!1,title:"ApisixUpstream",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/concepts/apisix_upstream.md",sourceDirName:"concepts",slug:"/concepts/apisix_upstream",permalink:"/zh/docs/ingress-controller/concepts/apisix_upstream",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/concepts/apisix_upstream.md",version:"current",frontMatter:{title:"ApisixUpstream"},sidebar:"docs",previous:{title:"ApisixRoute",permalink:"/zh/docs/ingress-controller/concepts/apisix_route"},next:{title:"Ingress Controller",permalink:"/zh/docs/ingress-controller/design"}},p=[{value:"Configuring Load Balancer",id:"configuring-load-balancer",children:[]},{value:"Configuring Health Check",id:"configuring-health-check",children:[]},{value:"Configuring Retry and Timeout",id:"configuring-retry-and-timeout",children:[]},{value:"Port Level Settings",id:"port-level-settings",children:[]}],l={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ApisixUpstream is the decorator of Kubernetes Service. It's designed to have same name with its target Kubernetes Service, it makes the Kubernetes Service richer by adding\nload balancing, health check, retry, timeout parameters and etc."),(0,i.kt)("p",null,"Resort to ",(0,i.kt)("inlineCode",{parentName:"p"},"ApisixUpstream")," and the Kubernetes Service, apisix ingress controller will generates the APISIX Upstream(s).\nTo learn more, please check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/architecture-design/upstream.md"},"Apache APISIX architecture-design docs"),"."),(0,i.kt)("h3",{id:"configuring-load-balancer"},"Configuring Load Balancer"),(0,i.kt)("p",null,"A proper load balancing algorithm is required to scatter requests reasonably for a Kubernetes Service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: httpbin\nspec:\n  loadbalancer:\n    type: ewma\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: httpbin\nspec:\n  selector:\n    app: httpbin\n  ports:\n  - name: http\n    port: 80\n    targetPort: 8080\n")),(0,i.kt)("p",null,"The above example shows that ",(0,i.kt)("a",{parentName:"p",href:"https://linkerd.io/2016/03/16/beyond-round-robin-load-balancing-for-latency/"},"ewma")," is used as the load balancer for Service ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin"),"."),(0,i.kt)("p",null,"Sometimes the session sticky is desired, and you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Consistent_hashing"},"Consistent Hashing")," load balancing algorithm."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: httpbin\nspec:\n  loadbalancer:\n    type: chash\n    hashOn: header\n    key: "user-agent"\n')),(0,i.kt)("p",null,"With the above settings, Apache APISIX will distributes requests according to the User-Agent header."),(0,i.kt)("h3",{id:"configuring-health-check"},"Configuring Health Check"),(0,i.kt)("p",null,"Although Kubelet already provides ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#:~:text=The%20kubelet%20uses%20readiness%20probes,removed%20from%20Service%20load%20balancers."},"probes")," to detect whether pods are healthy, you may still need more powerful health check mechanism,\nlike the passive feedback capability."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: httpbin\nspec:\n  healthCheck:\n    passive:\n      unhealthy:\n        httpCodes:\n          - 500\n          - 502\n          - 503\n          - 504\n        httpFailures: 3\n        timeout: 5s\n    active:\n      type: http\n      httpPath: /healthz\n      timeout: 5s\n      host: www.foo.com\n      healthy:\n        successes: 3\n        interval: 2s\n        httpCodes:\n          - 200\n          - 206\n")),(0,i.kt)("p",null,"The above YAML snippet defines a passive health checker to detect the unhealthy state for\nendpoints, once there are three consecutive requests with bad status code (one of ",(0,i.kt)("inlineCode",{parentName:"p"},"500"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"502"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"503"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"504"),"), the endpoint\nwill be set to unhealthy and no requests can be routed there until it's healthy again."),(0,i.kt)("p",null,"That's why the active health checker comes in, endpoints might be down for a short while and ready again, the active health checker detects these unhealthy endpoints continuously, and pull them\nup once the healthy conditions are met (three consecutive requests got good status codes, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"200")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"206"),")."),(0,i.kt)("p",null,"Note the active health checker is somewhat duplicated with the liveness/readiness probes but it's required if the passive feedback mechanism is in use. So once you use the health check feature in ApisixUpstream,\nthe active health checker is mandatory."),(0,i.kt)("h3",{id:"configuring-retry-and-timeout"},"Configuring Retry and Timeout"),(0,i.kt)("p",null,"You may want the proxy to retry when requests occur faults like transient network errors\nor service unavailable, by default the retry count is ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". You can change it by specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"retries")," field."),(0,i.kt)("p",null,"The following configuration configures the ",(0,i.kt)("inlineCode",{parentName:"p"},"retries")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),", which indicates there'll be at most ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," requests sent to\nKubernetes service ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin"),"'s endpoints."),(0,i.kt)("p",null,"One should bear in mind that passing a request to the next endpoint is only possible\nif nothing has been sent to a client yet. That is, if an error or timeout occurs in the middle\nof the transferring of a response, fixing this is impossible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: httpbin\nspec:\n  retries: 3\n")),(0,i.kt)("p",null,"The default connect, read and send timeout are ",(0,i.kt)("inlineCode",{parentName:"p"},"60s"),", which might not proper for some applications,\njust change them in the ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout")," field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: httpbin\nspec:\n  timeout:\n    connect: 5s\n    read: 10s\n    send: 10s\n")),(0,i.kt)("p",null,"The above examples sets the connect, read and timeout to ",(0,i.kt)("inlineCode",{parentName:"p"},"5s"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"10s"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"10s")," respectively."),(0,i.kt)("h3",{id:"port-level-settings"},"Port Level Settings"),(0,i.kt)("p",null,"Once in a while a single Kubernetes Service might expose multiple ports which provides distinct functions and different Upstream configurations are required.\nIn that case, you can create configurations for individual port."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: foo\nspec:\n  loadbalancer:\n    type: roundrobin\n  portLevelSettings:\n  - port: 7000\n    scheme: http\n  - port: 7001\n    scheme: grpc\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: foo\nspec:\n  selector:\n    app: foo\n  portLevelSettings:\n  - name: http\n    port: 7000\n    targetPort: 7000\n  - name: grpc\n    port: 7001\n    targetPort: 7001\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," service exposes two ports, one of them use HTTP protocol and the other uses grpc protocol.\nIn the meanwhile, the ApisixUpstream ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," sets ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," scheme for port ",(0,i.kt)("inlineCode",{parentName:"p"},"7000")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"grpc")," scheme for ",(0,i.kt)("inlineCode",{parentName:"p"},"7001"),"\n(all ports are the service port). But both ports shares the load balancer configuration."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PortLevelSettings")," is not mandatory if the service only exposes one port but is useful when multiple ports are defined."))}c.isMDXComponent=!0}}]);