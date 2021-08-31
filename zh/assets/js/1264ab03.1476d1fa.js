(self.webpackChunk=self.webpackChunk||[]).push([[64009],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3994:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l={title:"Release Apache APISIX 2.7.0",author:"Serendipity96",authorURL:"https://github.com/Serendipity96",authorImageURL:"https://avatars.githubusercontent.com/u/23514812?v=4"},o={permalink:"/zh/blog/2021/06/29/release-apache-apisix-2.7-en",source:"@site/blog/2021-06-29-release-apache-apisix-2.7-en.md",title:"Release Apache APISIX 2.7.0",description:"@Serendipity96, Apache APISIX contributor from Shenzhen Zhiliu Technology Co.",date:"2021-06-29T00:00:00.000Z",formattedDate:"2021\u5e746\u670829\u65e5",tags:[],readingTime:1.45,truncated:!0,prevItem:{title:"\u5dee\u4e4b\u6beb\u5398\uff1aetcd 3 \u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff1f",permalink:"/zh/blog/2021/06/30/etcd3-support-HTTP-access-perfectly"},nextItem:{title:"Apache APISIX 2.7.0-Release \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2021/06/29/release-apache-apisix-2.7"}},u=[{value:"Release Notes",id:"release-notes",children:[{value:"Multi-language plugin",id:"multi-language-plugin",children:[]},{value:"Enhanced four-layer TCP proxy",id:"enhanced-four-layer-tcp-proxy",children:[]},{value:"Enhanced Nginx configuration",id:"enhanced-nginx-configuration",children:[]}]},{value:"Download",id:"download",children:[]}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Serendipity96"},"@Serendipity96"),", Apache APISIX contributor from ",(0,i.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),(0,i.kt)("p",null,"Apache APISIX 2.7.0 has been released! Welcome to download and use it."),(0,i.kt)("p",null,"This version supports multi-language plugins, enhances the four-layer TCP proxy and Nginx configuration. More than 20 developers participated, and 70 plus pull requests have been submitted. The following is an introduction to the key features."),(0,i.kt)("h2",{id:"release-notes"},"Release Notes"),(0,i.kt)("h3",{id:"multi-language-plugin"},"Multi-language plugin"),(0,i.kt)("p",null,"With the release of the first version of apisix-java-plugin-runner, and apisix-go-plugin-runner completes its main functions, the multi-language plugin of Apache APISIX supports the two most widely used back-end programming languages. If you are still worried that the development of Apache APISIX plugin will be limited to Lua ecosystem, please try our multi-language plugin runner to develop Java / Go plugins."),(0,i.kt)("h3",{id:"enhanced-four-layer-tcp-proxy"},"Enhanced four-layer TCP proxy"),(0,i.kt)("p",null,"In version 2.7, we have developed new features of TCP proxy, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allow domain name configuration in upstream"),(0,i.kt)("li",{parentName:"ul"},"Allow mqtt-proxy plugin to configure domain name"),(0,i.kt)("li",{parentName:"ul"},"Support for receiving TLS over TCP connections, the certificate of which can be dynamically configured just like HTTPS certificate"),(0,i.kt)("li",{parentName:"ul"},"SNI-based route rules"),(0,i.kt)("li",{parentName:"ul"},"Dynamic verification of client certificates")),(0,i.kt)("p",null,"In future releases, we will continue to improve TCP proxy, so stay tuned!"),(0,i.kt)("h3",{id:"enhanced-nginx-configuration"},"Enhanced Nginx configuration"),(0,i.kt)("p",null,"We hope to dynamically set more and more Nginx configurations, so we add our own patches and Nginx C modules to enhance the native Nginx."),(0,i.kt)("p",null,"The following new features are currently included:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dynamically set mTLS"),(0,i.kt)("li",{parentName:"ul"},"Dynamically set client_max_body_size")),(0,i.kt)("p",null,"In future releases, we will continue to allow the following Nginx configurations to be set dynamically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"upstream keepalive"),(0,i.kt)("li",{parentName:"ul"},"gzip"),(0,i.kt)("li",{parentName:"ul"},"real_ip"),(0,i.kt)("li",{parentName:"ul"},"proxy_max_temp_file_size")),(0,i.kt)("h2",{id:"download"},"Download"),(0,i.kt)("p",null,"Download Apache APISIX 2.7.0-Release"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Source code: please visit ",(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/downloads/"},"download page")),(0,i.kt)("li",{parentName:"ul"},"Binary installation package: please visit ",(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/how-to-build/"},"Installation Guide"))))}c.isMDXComponent=!0}}]);