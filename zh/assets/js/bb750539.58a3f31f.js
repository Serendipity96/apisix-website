(self.webpackChunk=self.webpackChunk||[]).push([[16549],{3905:function(r,e,t){"use strict";t.d(e,{Zo:function(){return c},kt:function(){return y}});var n=t(67294);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function l(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function o(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function s(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},l=Object.keys(r);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var i=n.createContext({}),p=function(r){var e=n.useContext(i),t=e;return r&&(t="function"==typeof r?r(e):o(o({},e),r)),t},c=function(r){var e=p(r.components);return n.createElement(i.Provider,{value:e},r.children)},g={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(r,e){var t=r.components,a=r.mdxType,l=r.originalType,i=r.parentName,c=s(r,["components","mdxType","originalType","parentName"]),u=p(t),y=a,m=u["".concat(i,".").concat(y)]||u[y]||g[y]||l;return t?n.createElement(m,o(o({ref:e},c),{},{components:t})):n.createElement(m,o({ref:e},c))}));function y(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var l=t.length,o=new Array(l);o[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=r,s.mdxType="string"==typeof r?r:a,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49937:function(r,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i},default:function(){return c}});var n=t(22122),a=t(19756),l=(t(67294),t(3905)),o={title:"log-rotate"},s={unversionedId:"plugins/log-rotate",id:"plugins/log-rotate",isDocsHomePage:!1,title:"log-rotate",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/log-rotate.md",sourceDirName:"plugins",slug:"/plugins/log-rotate",permalink:"/zh/docs/apisix/next/plugins/log-rotate",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/log-rotate.md",version:"current",frontMatter:{title:"log-rotate"},sidebar:"docs",previous:{title:"syslog",permalink:"/zh/docs/apisix/next/plugins/syslog"},next:{title:"error-log-logger",permalink:"/zh/docs/apisix/next/plugins/error-log-logger"}},i=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}]}],p={toc:i};function c(r){var e=r.components,t=(0,a.Z)(r,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u63d2\u4ef6\u53ef\u81ea\u52a8\u5b8c\u6210 logs \u76ee\u5f55\u4e0b\u7684 access \u548c error \u65e5\u5fd7\u7684\u5b9a\u671f\u5207\u5206\u3002\n\u901a\u8fc7\u914d\u7f6e\u53c2\u6570\u53ef\u4ee5\u8bbe\u7f6e\u6bcf\u95f4\u9694\u591a\u4e45\u5207\u5206\u4e00\u6b21\u65e5\u5fd7\uff0c\u4ee5\u53ca\u6700\u8fd1\u4fdd\u7559\u591a\u5c11\u4efd\u65e5\u5fd7\uff08\u8d85\u8fc7\u6307\u5b9a\u6570\u91cf\u540e\uff0c\u81ea\u52a8\u5220\u9664\u8001\u6587\u4ef6\uff09\u3002"),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null},"60 * 60"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u95f4\u9694\u591a\u957f\u65f6\u95f4\u5207\u5206\u4e00\u6b21\u65e5\u5fd7\uff0c\u79d2\u4e3a\u5355\u4f4d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_kept"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null},"24 * 7"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a\u4fdd\u7559\u591a\u5c11\u4efd\u5386\u53f2\u65e5\u5fd7\uff0c\u8d85\u8fc7\u6307\u5b9a\u6570\u91cf\u540e\uff0c\u81ea\u52a8\u5220\u9664\u8001\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable_compression"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u65e5\u5fd7\u6587\u4ef6\u538b\u7f29\uff08gzip\uff09\u3002\u8be5\u529f\u80fd\u9700\u8981\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"td"},"tar")," \u3002")))),(0,l.kt)("p",null,"\u5f00\u542f\u8be5\u63d2\u4ef6\u540e\uff0c\u5c31\u4f1a\u6309\u7167\u53c2\u6570\u81ea\u52a8\u5207\u5206\u65e5\u5fd7\u6587\u4ef6\u4e86\u3002\u6bd4\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\u662f\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"interval: 10")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"max_kept: 10")," \u5f97\u5230\u7684\u6837\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ll logs\ntotal 44K\n-rw-r--r--. 1 resty resty    0 Mar 20 20:32 2020-03-20_20-32-40_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:32 2020-03-20_20-32-40_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:32 2020-03-20_20-32-50_access.log\n-rw-r--r--. 1 resty resty 2.8K Mar 20 20:32 2020-03-20_20-32-50_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:32 2020-03-20_20-33-00_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-00_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-10_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-10_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-20_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-20_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-30_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-30_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-40_access.log\n-rw-r--r--. 1 resty resty 2.8K Mar 20 20:33 2020-03-20_20-33-40_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-50_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-50_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-34-00_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:34 2020-03-20_20-34-00_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:34 2020-03-20_20-34-10_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:34 2020-03-20_20-34-10_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:34 access.log\n-rw-r--r--. 1 resty resty 1.5K Mar 20 21:31 error.log\n")),(0,l.kt)("p",null,"\u5f53\u5f00\u542f\u65e5\u5fd7\u6587\u4ef6\u538b\u7f29\u65f6\uff0c\u65e5\u5fd7\u6587\u4ef6\u5c06\u5982\u4e0b\u6240\u793a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ll logs\ntotal 10.5K\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:33 2020-03-20_20-33-50_access.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:33 2020-03-20_20-33-50_error.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:33 2020-03-20_20-34-00_access.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:34 2020-03-20_20-34-00_error.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:34 2020-03-20_20-34-10_access.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:34 2020-03-20_20-34-10_error.log.tar.gz\n-rw-r--r--. 1 resty resty    0 Mar 20 20:34 access.log\n-rw-r--r--. 1 resty resty 1.5K Mar 20 21:31 error.log\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h4",{id:"\u5f00\u542f\u63d2\u4ef6"},"\u5f00\u542f\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u542f\u7528\u63d2\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"log-rotate")," \u5373\u53ef\uff0c\u4e0d\u9700\u8981\u5728\u4efb\u4f55 route \u6216 service \u4e2d\u7ed1\u5b9a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n    # the plugins you enabled\n    - log-rotate\n\nplugin_attr:\n    log-rotate:\n        interval: 3600    # rotate interval (unit: second)\n        max_kept: 168     # max number of log files will be kept\n        enable_compression: false    # enable log file compression(gzip) or not, default false\n")),(0,l.kt)("h4",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u5220\u9664\u63d2\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"log-rotate")," \u5373\u53ef\u3002"))}c.isMDXComponent=!0}}]);