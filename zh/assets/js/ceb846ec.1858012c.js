"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74938],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8782:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i={title:"Deploy with Source Codes"},l={unversionedId:"deploy",id:"version-2.9.0/deploy",isDocsHomePage:!1,title:"Deploy with Source Codes",description:"\x3c!--",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.9.0/deploy.md",sourceDirName:".",slug:"/deploy",permalink:"/zh/docs/dashboard/deploy",editUrl:"https://github.com/apache/apisix-dashboard/edit/master/docs/en/latest/deploy.md",version:"2.9.0",frontMatter:{title:"Deploy with Source Codes"},sidebar:"version-2.9.0/docs",previous:{title:"API doc of Manager API",permalink:"/zh/docs/dashboard/api/api"},next:{title:"Deploy with Docker",permalink:"/zh/docs/dashboard/deploy-with-docker"}},p=[{value:"Prerequisites",id:"prerequisites",children:[{value:"manager-api",id:"manager-api",children:[]},{value:"web",id:"web",children:[]}]},{value:"Clone the project",id:"clone-the-project",children:[]},{value:"Build",id:"build",children:[]},{value:"Launch",id:"launch",children:[{value:"Optional",id:"optional",children:[]}]},{value:"Working directory",id:"working-directory",children:[]}],s={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Dashboard contains both ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web"),", but ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," is ",(0,o.kt)("em",{parentName:"p"},"optional"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," will be included in this build guide product."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before using source codes to build, make sure that the following dependencies are installed in your environment."),(0,o.kt)("h3",{id:"manager-api"},"manager-api"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"Golang")," 1.13+: For users in mainland China, you can use the following command to speed up the module downloads.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ go env -w GOPROXY=https://goproxy.cn,direct\n")),(0,o.kt)("h3",{id:"web"},"web"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," 10.23.0+"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn"))),(0,o.kt)("h2",{id:"clone-the-project"},"Clone the project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone -b release/2.9.0 https://github.com/apache/apisix-dashboard.git\n")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd apisix-dashboard\n$ make build\n")),(0,o.kt)("p",null,"When the build is complete, the results are stored in the root ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," directory."),(0,o.kt)("p",null,"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"make build")," will build ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web"),", use the ",(0,o.kt)("inlineCode",{parentName:"p"},"make help")," command to see more commands."),(0,o.kt)("h2",{id:"launch"},"Launch"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"After the build is complete and before you start, make sure the following dependencies are installed and running in your environment.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check and modify the configuration information in ",(0,o.kt)("inlineCode",{parentName:"p"},"output/conf/conf.yaml")," according to your deployment environment.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the Dashboard"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd ./output\n\n$ ./manager-api\n\n# or running in background\n$ nohup ./manager-api &\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Without changing the configuration, visit ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9000")," to use the dashboard with GUI, where the default username and password are ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the Dashboard"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," provides a sub command ",(0,o.kt)("inlineCode",{parentName:"p"},"stop")," to quit the program gracefully, just\nrun:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./manager-api stop\n")),(0,o.kt)("h3",{id:"optional"},"Optional"),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Running ",(0,o.kt)("inlineCode",{parentName:"li"},"manager-api")," as an OS service.")),(0,o.kt)("p",null,"Without clubbing ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," with external command such as ",(0,o.kt)("inlineCode",{parentName:"p"},"nohup")," (in Unix systems), we also provide a long term solution for running the program as an ",(0,o.kt)("strong",{parentName:"p"},"operating system managed background service"),". The feature is cross-platform, os agnostic and works on well known Linux, Windows and Mac OS distributions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," as a service is listed by the name ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix-dashboard")," under the OS's service manager."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," provides a list of sub commands to start and manage the lifecycle of the background service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# start Apache APISIX Dashboard service\n$ ./manager-api start\n\n# re-install Apache APISIX Dashboard service\n$ ./manager-api install\n\n# inspect the status of Apache APISIX Dashboard service\n$ ./manager-api status\n\n# stop Apache APISIX Dashboard service. stop can be used with or without service\n$ ./manager-api stop\n\n# remove Apache APISIX Dashboard service\n$ ./manager-api remove\n")),(0,o.kt)("h2",{id:"working-directory"},"Working directory"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," directory mention above is the default working directory."),(0,o.kt)("p",null,"You can move the entire directory to any path you want, and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," to specify it as the working directory."),(0,o.kt)("p",null,"For example, you can move it to ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/apisix-dashboard/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ mv ./output/manager-api /usr/local/bin/\n\n$ mv ./output/ /usr/local/apisix-dashboard/\n\n$ manager-api -p /usr/local/apisix-dashboard/\n")))}d.isMDXComponent=!0}}]);