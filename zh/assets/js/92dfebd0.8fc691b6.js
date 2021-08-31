(self.webpackChunk=self.webpackChunk||[]).push([[32731],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83230:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l={title:"Apache APISIX Helm Chart"},o={unversionedId:"apisix",id:"apisix",isDocsHomePage:!1,title:"Apache APISIX Helm Chart",description:"\x3c!--",source:"@site/docs/apisix-helm-chart/apisix.md",sourceDirName:".",slug:"/apisix",permalink:"/zh/docs/helm-chart/apisix",editUrl:"https://github.com/apache/apisix-helm-chart/edit/master/docs/en/latest/apisix.md",version:"current",frontMatter:{title:"Apache APISIX Helm Chart"},sidebar:"docs",next:{title:"Apache APISIX Dashboard Helm Chart",permalink:"/zh/docs/helm-chart/apisix-dashboard"}},p=[{value:"Install",id:"install",children:[]},{value:"Uninstall",id:"uninstall",children:[]},{value:"Seeking help",id:"seeking-help",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"To install the chart with release name ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm repo add apisix https://charts.apiseven.com\n$ helm repo update\n$ helm install apisix apisix/apisix\n")),(0,i.kt)("h2",{id:"uninstall"},"Uninstall"),(0,i.kt)("p",null,"To uninstall/delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix")," release:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall apisix\n")),(0,i.kt)("h2",{id:"seeking-help"},"Seeking help"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mailing List: Mail to ",(0,i.kt)("a",{parentName:"li",href:"mailto:dev-subscribe@apisix.apache.org"},"dev-subscribe@apisix.apache.org"),", follow the reply to subscribe the mailing list."),(0,i.kt)("li",{parentName:"ul"},"QQ Group - 578997126, 552030619"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://s.apache.org/slack-invite"},"Slack Workspace")," - join ",(0,i.kt)("inlineCode",{parentName:"li"},"#apisix")," on our Slack to meet the team and ask questions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{parentName:"li",src:"https://img.shields.io/twitter/follow/ApacheAPISIX?style=social",alt:"Twitter Follow"})," - follow and interact with us using hashtag ",(0,i.kt)("inlineCode",{parentName:"li"},"#ApacheAPISIX")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://space.bilibili.com/551921247"},"bilibili video"))))}c.isMDXComponent=!0}}]);