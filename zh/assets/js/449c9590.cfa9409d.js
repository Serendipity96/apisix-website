(self.webpackChunk=self.webpackChunk||[]).push([[20025],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},I=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),I=u(n),s=a,h=I["".concat(c,".").concat(s)]||I[s]||A[s]||p;return n?r.createElement(h,l(l({ref:t},i),{},{components:n})):r.createElement(h,l({ref:t},i))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=I;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}I.displayName="MDXCreateElement"},86599:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return i}});var r=n(22122),a=n(19756),p=(n(67294),n(3905)),l={title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u7684\u5e94\u7528"},o={permalink:"/zh/blog/2021/08/09/Apache-APISIX-in-China-Mobile-Cloud",source:"@site/blog/2021-08-09-Apache-APISIX-in-China-Mobile-Cloud.md",title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u7684\u5e94\u7528",description:"\u6211\u4eec\u6709\u5e78\u91c7\u8bbf\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u7684\u9648\u7131\u5c71\uff0c\u5728\u91c7\u8bbf\u4e2d\u6211\u4eec\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5efa\u8bbe\u53d1\u5c55\u6f14\u8fdb\u5386\u7a0b\uff0c\u4e86\u89e3\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u7f51\u5173\uff0c\u5e76\u4e14\u77e5\u6653\u79fb\u52a8\u4e91\u540e\u7eed\u7684\u53d1\u5c55\u89c4\u5212\u3002",date:"2021-08-09T00:00:00.000Z",formattedDate:"2021\u5e748\u67089\u65e5",tags:[],readingTime:1.175,truncated:!1,prevItem:{title:"\u4ece\u65b0\u624b\u6751\u51fa\u6765\uff0c\u6211\u5728 Apache APISIX \u793e\u533a\u53d1\u51fa\u4e86\u7b2c\u4e00\u4e2a PR",permalink:"/zh/blog/2021/08/11/interview-TuZhengsong"},nextItem:{title:"Kong-To-APISIX \u8fc1\u79fb\u5de5\u5177",permalink:"/zh/blog/2021/08/05/Kong-to-APISIX"}},c=[],u={toc:c};function i(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u6211\u4eec\u6709\u5e78\u91c7\u8bbf\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u7684\u9648\u7131\u5c71\uff0c\u5728\u91c7\u8bbf\u4e2d\u6211\u4eec\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5efa\u8bbe\u53d1\u5c55\u6f14\u8fdb\u5386\u7a0b\uff0c\u4e86\u89e3\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u7f51\u5173\uff0c\u5e76\u4e14\u77e5\u6653\u79fb\u52a8\u4e91\u540e\u7eed\u7684\u53d1\u5c55\u89c4\u5212\u3002"),(0,p.kt)("p",null,"\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\uff0c\u5bf9\u5916\u4e5f\u79f0\u201c\u4e2d\u79fb\uff08\u82cf\u5dde\uff09\u8f6f\u4ef6\u6280\u672f\u6709\u9650\u516c\u53f8\u201d\uff0c\u662f\u4e2d\u56fd\u79fb\u52a8\u901a\u4fe1\u96c6\u56e2 2014 \u5e74\u6ce8\u8d44\u6210\u7acb\u7684\u5168\u8d44\u5b50\u516c\u53f8\uff0c\u516c\u53f8\u5b9a\u4f4d\u4e3a\u4e91\u8bbe\u65bd\u6784\u5efa\u8005\u3001\u4e91\u670d\u52a1\u63d0\u4f9b\u8005\u3001\u4e91\u751f\u6001\u6c47\u805a\u8005\uff0c\u4e09\u5e74\u5185\u63a8\u52a8\u4e2d\u56fd\u79fb\u52a8\u4e91\u4e1a\u52a1\u5e02\u573a\u4efd\u989d\u8fdb\u5165\u56fd\u5185\u4e91\u670d\u52a1\u5546\u7b2c\u4e00\u9635\u8425\u3002\u81ea 2019 \u5e74\u4e2d\u56fd\u79fb\u52a8\u542f\u52a8\u201c\u4e91\u6539\u201d\u6218\u7565\u4ee5\u6765\uff0c\u4f5c\u4e3a\u52a9\u529b\u4e2d\u56fd\u79fb\u52a8 5G+AICDE \u6218\u7565\u843d\u5730\u7684\u57fa\u77f3\uff0c\u79fb\u52a8\u4e91\u7ecf\u8fc7\u957f\u8db3\u53d1\u5c55\uff0c\u5df2\u5b8c\u6210\u8986\u76d6\u5168\u56fd\u7684\u201cN+31+X\u201d\u6574\u4f53\u8d44\u6e90\u5e03\u5c40\u3002\u540c\u65f6\uff0c\u79fb\u52a8\u4e91\u79ef\u6781\u6253\u9020\u201c\u4e91\u7f51\u3001\u4e91\u6570\u3001\u4e91\u8fb9\u3001\u4e91\u667a\u201d \u5dee\u5f02\u5316\u7279\u8272\u4f18\u52bf\uff0c\u5728\u4e1a\u52a1\u4f53\u91cf\u3001\u4ea7\u54c1\u79cd\u7c7b\u3001\u53ef\u552e\u8d44\u6e90\u7b49\u65b9\u9762\u5747\u5b9e\u73b0\u98de\u8dc3\u5f0f\u63d0\u5347\u3002\u201c\u79fb\u52a8\u4e91\u201d\u54c1\u724c\u4e5f\u5145\u5206\u53d1\u6325\u4e86\u4e91\u7f51\u4e00\u4f53\u3001\u8d34\u8eab\u670d\u52a1\u3001\u968f\u5fc3\u5b9a\u5236\u3001\u5b89\u5168\u53ef\u63a7\u7684\u4f18\u52bf\uff0c\u6253\u9020 5G \u65f6\u4ee3\u201c\u4f60\u8eab\u8fb9\u7684\u667a\u6167\u4e91\u201d\uff0c\u4e3a\u884c\u4e1a\u6570\u5b57\u5316\u8f6c\u578b\u53d1\u5c55\u63d0\u4f9b\u201c\u5f3a\u5f15\u64ce\u201d\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Q\uff1a\u975e\u5e38\u9ad8\u5174\u4eca\u5929\u80fd\u8ddf\u9648\u7131\u5c71\u8001\u5e08\u8fdb\u884c\u4ea4\u6d41\uff0c\u53ef\u4ee5\u9ebb\u70e6\u60a8\u505a\u4e0b\u81ea\u6211\u4ecb\u7ecd\uff0c\u7b80\u5355\u9648\u8ff0\u4e0b\u60a8\u73b0\u5728\u7684\u5de5\u4f5c\u5185\u5bb9\u5417\uff1f")),(0,p.kt)("p",null,"\u5927\u5bb6\u597d\uff0c\u6211\u53eb\u9648\u7131\u5c71\uff0c\u76ee\u524d\u5c31\u804c\u4e8e\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3 IaaS \u4ea7\u54c1\u90e8\uff0c\u4e3b\u8981\u8d1f\u8d23\u5206\u5e03\u5f0f\u5bf9\u8c61\u5b58\u50a8\u8f6f\u4ef6\u7684\u6574\u4f53\u67b6\u6784\u8bbe\u8ba1\u4e0e\u5f00\u53d1\u5de5\u4f5c\uff0c\u8d1f\u8d23\u5bf9\u8c61\u5b58\u50a8\u3001API \u7f51\u5173\u7684\u6280\u672f\u9009\u578b\u4e0e\u65b9\u6848\u843d\u5730\u5b9e\u8df5\u5de5\u4f5c\u3002\u5728\u5206\u5e03\u5f0f\u5b58\u50a8\u9886\u57df\u8fd9\u5757\u8fd8\u662f\u6709\u6bd4\u8f83\u4e30\u5bcc\u7684\u7ecf\u9a8c\u7684\uff0c\u6df1\u5ea6\u53c2\u4e0e\u4e86\u79fb\u52a8\u4e91\u7684\u5efa\u8bbe\u53d1\u5c55\u5386\u7a0b\u3002"),(0,p.kt)("p",null,"\u5f53\u524d\uff0c\u6211\u4e3b\u8981\u5173\u6ce8\u4e8e\u5bf9\u8c61\u5b58\u50a8\u5728\u4ea4\u4e92\u7f16\u6392\u3001\u6d41\u91cf\u6cbb\u7406\u7b49\u65b9\u9762\u7684\u80fd\u529b\uff0c\u4fc3\u8fdb\u6211\u4eec\u7b2c\u56db\u4ee3\u5bf9\u8c61\u5b58\u50a8\u4ea7\u54c1\u8fdb\u4e00\u6b65\u5b9e\u73b0\u67b6\u6784\u5347\u7ea7\u3002\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u5e0c\u671b\u80fd\u591f\u57fa\u4e8e Ingress Controller \u7684\u80fd\u529b\uff0c\u6765\u5b9e\u73b0\u7edf\u4e00\u6d41\u91cf\u8bbf\u95ee\u5165\u53e3\uff0c\u5e76\u5305\u62ec\u7070\u5ea6\u53d1\u5e03\u3001\u6d41\u91cf\u7ba1\u63a7\u7b49\u529f\u80fd\u3002\u8fd9\u4e9b\u662f\u6211\u4eec\u5f53\u524d\u6b63\u5728\u505a\u7684\u4e00\u4e9b\u5de5\u4f5c\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"China-Mobile-ChenYanshan",src:n(73309).Z})),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Q\uff1a\u60a8\u8bf4\u7684\u8fd9\u4e9b\u5185\u5bb9\u591a\u5c11\u90fd\u4e0e Apache APISIX \u6709\u5173\u8054\uff0c\u60a8\u5728\u4eca\u5e74 ApacheCon \u4e9a\u6d32\u5927\u4f1a\u4e0a\u4e5f\u6709\u4e00\u573a\u5206\u4eab\uff0c\u60f3\u95ee\u4e0b\u60a8\u4f1a\u5e26\u6765\u54ea\u4e9b\u7cbe\u5f69\u5206\u4eab?")),(0,p.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4f1a\u7ed9\u5927\u5bb6\u4ecb\u7ecd\u4e00\u4e0b\u6211\u4eec\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u4ea7\u54c1 EOS \u7684\u6574\u4f53\u53d1\u5c55\u548c\u6f14\u8fdb\u8fc7\u7a0b\uff0c\u540c\u65f6\u91cd\u70b9\u4ecb\u7ecd\u6211\u4eec\u662f\u5982\u4f55\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u5bf9\u8c61\u5b58\u50a8\u6d41\u91cf\u6cbb\u7406\u7684\uff0c\u505a\u4e86\u54ea\u4e9b\u5de5\u4f5c\uff0c\u53c8\u662f\u5982\u4f55\u8fdb\u884c\u5b9e\u8df5\u3002\u6700\u540e\u5bf9\u6211\u4eec\u672a\u6765\u7684\u67b6\u6784\u6f14\u8fdb\u505a\u4e86\u4e00\u4e9b\u89c4\u5212\u8bf4\u660e\u3002\u6211\u4eec\u5bf9\u8c61\u5b58\u50a8\u7684\u6574\u4f53\u6f14\u8fdb\u8fc7\u7a0b\u4e3b\u8981\u7ecf\u5386\u4e86\u5982\u4e0b\u56db\u4e2a\u9636\u6bb5\uff0c\u5bf9\u4e8e Apache APISIX \u5f15\u5165\u4e3b\u8981\u662f\u4ece\u7b2c\u4e09\u4ee3\u5f00\u59cb\u5f15\u5165\u7684\uff0c\u786e\u5b9e\u7ed9\u6211\u4eec\u4ea7\u54c1\u5728\u67b6\u6784\u4e0a\u5e26\u6765\u5f88\u591a\u4fbf\u5229\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4ee3\uff1a\u4ece 2008 \u5e74\u5f00\u59cb\u6295\u5165\u81ea\u7814\uff0c\u540c\u5e74\u53d1\u5e03\u4e86\u6211\u4eec\u7684\u7b2c\u4e00\u4ee3\u5bf9\u8c61\u5bf9\u8c61\u5b58\u50a8\u4ea7\u54c1\uff1b"),(0,p.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4ee3\uff1a\u4e3b\u8981\u57fa\u4e8e\u5f00\u6e90 Ceph \u5b9e\u73b0\u6df1\u5ea6\u5b9a\u5236\uff0c\u5b9e\u73b0\u4e86\u63a5\u53e3\u7684\u6807\u51c6\u5316\uff0c\u652f\u6301 AWS \u7684 S3 \u6807\u51c6\u63a5\u53e3\u548c Openstack \u7684 Swift \u63a5\u53e3\u534f\u8bae\uff0c\u540c\u65f6\u4e30\u5bcc\u4e86\u5927\u91cf\u7684\u529f\u80fd\u7279\u6027\uff1b"),(0,p.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u4ee3\uff1a\u4e3b\u8981\u89e3\u51b3\u5185\u90e8\u4e00\u4e9b\u4e13\u4e1a\u516c\u53f8\u6d77\u91cf\u6570\u636e\u4e0a\u4e91\u9700\u6c42\u3002\u5728\u7b2c\u4e09\u4ee3\u4ea7\u54c1\u4e2d\uff0c\u6211\u4eec\u5728\u6027\u80fd\u4e0a\u5b9e\u73b0\u4e86\u4e00\u4e2a\u65b0\u7684\u8de8\u8d8a\uff0c\u5355\u4e00\u5b58\u50a8\u6876\u540c\u65f6\u652f\u6301\u767e PB \u5bb9\u91cf\u548c\u767e\u4ebf\u5bf9\u8c61\u89c4\u6a21\uff0c\u5165\u53e3\u5e26\u5bbd\u8fbe\u5230 Tb/s \u7ea7\u3002\u540c\u65f6\uff0c\u6211\u4eec\u8fd8\u5f15\u5165\u4e86\u5f88\u591a\u5b50\u6a21\u5757\uff0c\u5305\u62ec\u4e03\u5c42\u6d41\u91cf\u6cbb\u7406\u4ee5\u53ca\u53ef\u89c2\u6d4b\u7cfb\u7edf\u3002\u4e03\u5c42\u6d41\u91cf\u6cbb\u7406\u6a21\u5757\u662f\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\uff0c\u4e3b\u8981\u7528\u4e8e\u5b9e\u73b0\u4e1a\u52a1\u6d41\u91cf\u7684\u5206\u79bb\u6cbb\u7406\uff1b\u53ef\u89c2\u6d4b\u7cfb\u7edf\u5219\u4e3b\u8981\u662f\u5b9e\u73b0\u4e86\u6570\u636e\u7684\u91c7\u96c6\u3001\u544a\u8b66\u4ee5\u53ca\u65e5\u5fd7\u5206\u6790\u529f\u80fd\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u4ee3\uff1a\u4e5f\u662f\u5168\u65b0\u4e00\u4ee3\u67b6\u6784\uff0c\u652f\u6301\u8de8\u533a\u57df\u5168\u5c40\u7ea0\u5220\u529f\u80fd\uff0c\u652f\u6301 AZ/Region \u7ea7\u5bb9\u707e\u3002\u5728\u6d41\u91cf\u6cbb\u7406\u65b9\u9762\uff0c\u652f\u6301\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u8de8\u5730\u57df\u8bf7\u6c42\u8c03\u5ea6\u80fd\u529b\uff0c\u652f\u6491\u6781\u81f4\u7684\u4e1a\u52a1\u8fde\u7eed\u6027\uff1b\u540c\u65f6\u7cfb\u7edf\u53ef\u89c2\u6d4b\u6027\u8fdb\u4e00\u6b65\u63d0\u5347\uff0c\u843d\u5730\u4e86\u96c6\u4e2d\u5316\u65e5\u5fd7\u5206\u6790\u7cfb\u7edf\u3002\u5728\u53ef\u7ef4\u62a4\u6027\u4e0a\u9996\u6b21\u5f15\u5165\u4e86\u81ea\u52a8\u9a7e\u9a76\u670d\u52a1\u548c\u4ea4\u4ed8\u7f16\u6392\u670d\u52a1\uff0c\u80fd\u591f\u81ea\u52a8\u6709\u6548\u6536\u655b\u6545\u969c\u8303\u56f4\uff0c\u51cf\u8f7b\u8fd0\u7ef4\u538b\u529b\uff0c\u5b9e\u73b0\u6545\u969c\u9694\u79bb\u548c\u81ea\u6108\u80fd\u529b\u3002")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Q\uff1a\u4ece\u60a8\u7684\u8bb2\u8ff0\u4e2d\u53ef\u4ee5\u611f\u53d7\u5230\uff0c\u8fd9\u4e2a\u7cfb\u7edf\u4e0d\u4ec5\u975e\u5e38\u5e9e\u5927\uff0c\u800c\u4e14\u8fd8\u975e\u5e38\u91cd\u8981\u3002\u5bf9\u4e8e\u8fd9\u6837\u91cd\u8981\u7684\u7cfb\u7edf\uff0c\u4e3a\u4ec0\u4e48\u4f1a\u9009\u62e9 Apache APISIX\uff1f\u4e3b\u8981\u51fa\u4e8e\u54ea\u4e9b\u65b9\u9762\u7684\u8003\u8651\u5462\uff1f")),(0,p.kt)("p",null,"\u662f\u7684\uff0c\u5728\u6280\u672f\u9009\u578b\u521d\u671f\u6211\u4eec\u4e5f\u8c03\u7814\u8fc7\u5f88\u591a\u7684 API \u7f51\u5173\uff0c\u5305\u62ec Nginx \u7b49\uff0c\u4e0d\u8fc7\u6211\u4eec\u6700\u7ec8\u8fd8\u662f\u9009\u62e9\u4e86 Apache APISIX\u3002Apache APISIX \u4e0d\u4ec5\u80fd\u591f\u6ee1\u8db3\u5f53\u524d\u7684\u4e1a\u52a1\u8981\u6c42\uff0c\u540c\u65f6\u8fd8\u80fd\u5728\u7cfb\u7edf\u53ef\u7528\u6027\u3001\u53ef\u7ef4\u62a4\u6027\u4e0a\u4e3a\u6211\u4eec\u63d0\u4f9b\u6bd4\u8f83\u591a\u7684\u601d\u8def\u548c\u9009\u62e9\uff0c\u8ddf\u6211\u4eec\u7684\u6574\u4f53\u4ea7\u54c1\u6f14\u8fdb\u89c4\u5212\u548c\u6280\u672f\u6808\u6bd4\u8f83\u543b\u5408\u3002\u5f52\u7ed3\u8d77\u6765\u9009\u62e9 Apache APISIX \u4e3b\u8981\u57fa\u4e8e\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,p.kt)("h4",{id:"\u7b2c\u4e00\uff0c\u5185\u90e8\u9a71\u52a8\u4ea7\u54c1\u67b6\u6784\u4f18\u5316\u9700\u8981\uff0c\u4fc3\u4f7f\u6211\u4eec\u5f00\u59cb\u5728\u4e00\u4e9b\u6280\u672f\u67b6\u6784\u4e0a\u5bfb\u627e\u66f4\u9ad8\u7684\u7a81\u7834\u70b9"},"\u7b2c\u4e00\uff0c\u5185\u90e8\u9a71\u52a8\u4ea7\u54c1\u67b6\u6784\u4f18\u5316\u9700\u8981\uff0c\u4fc3\u4f7f\u6211\u4eec\u5f00\u59cb\u5728\u4e00\u4e9b\u6280\u672f\u67b6\u6784\u4e0a\u5bfb\u627e\u66f4\u9ad8\u7684\u7a81\u7834\u70b9"),(0,p.kt)("p",null,"\u5728 2019 \u5e74\u7684\u65f6\u5019\uff0c\u4e2d\u56fd\u79fb\u52a8\u4ece\u96c6\u56e2\u5c42\u9762\u63d0\u51fa\u4e86\u201c\u4e91\u6539\u201d\u6218\u7565\u8f6c\u578b\uff0c\u968f\u540e\u6211\u4eec\u4e91\u80fd\u4e5f\u5c31\u6210\u4e86\u6574\u4e2a\u79fb\u52a8\u5728\u4e91\u6539\u8f6c\u578b\u4e0a\u7684\u6218\u7565\u652f\u6491\u70b9\u3002\u8fd9\u4e5f\u4fc3\u4f7f\u6211\u4eec\u8981\u5728\u4ea7\u54c1\u7cfb\u7edf\u67b6\u6784\u4e0a\u505a\u8fdb\u4e00\u6b65\u7684\u4f18\u5316\uff0c\u80fd\u591f\u6ee1\u8db3\u672a\u6765 3~5 \u5e74\u4ee5\u4e0a\u7684\u53d1\u5c55\u9700\u8981\u3002\u4e0d\u4ec5\u9700\u8981\u5728\u529f\u80fd\u548c\u6027\u80fd\u4e0a\u8fdb\u884c\u63d0\u5347\uff0c\u800c\u4e14\u9700\u8981\u5728\u53ef\u7ef4\u62a4\u6027\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u65b9\u9762\u4e0a\u6765\u5f15\u5165\u66f4\u591a\u7684\u7ec4\u4ef6\uff0c\u6765\u4fdd\u8bc1\u6211\u4eec\u7cfb\u7edf\u7684\u7a33\u5b9a\u8fd0\u884c\uff0c\u63d0\u4f9b\u53ef\u6301\u7eed\u7684\u3001\u6709\u4fdd\u8bc1\u7684 SLA \u670d\u52a1\u7b49\u7ea7\u3002"),(0,p.kt)("h4",{id:"\u7b2c\u4e8c\uff0c\u57fa\u4e8e\u81ea\u8eab\u4e1a\u52a1\u5b9e\u73b0\u9700\u8981\uff0c\u540c\u65f6-apache-apisix-\u529f\u80fd\u63d2\u4ef6\u5168\u9762\uff0c\u4e1a\u52a1\u573a\u666f\u5339\u914d\u5ea6\u9ad8"},"\u7b2c\u4e8c\uff0c\u57fa\u4e8e\u81ea\u8eab\u4e1a\u52a1\u5b9e\u73b0\u9700\u8981\uff0c\u540c\u65f6 Apache APISIX \u529f\u80fd\u63d2\u4ef6\u5168\u9762\uff0c\u4e1a\u52a1\u573a\u666f\u5339\u914d\u5ea6\u9ad8"),(0,p.kt)("p",null,"\u56e0\u4e3a\u81ea\u8eab\u4e1a\u52a1\u5bf9\u7f51\u5173\u80fd\u529b\u7684\u9700\u8981\uff0c\u6211\u4eec\u901a\u8fc7\u5bf9\u81ea\u6709\u4e1a\u52a1\u9700\u6c42\u8fdb\u884c\u8be6\u7ec6\u68b3\u7406\u5206\u6790\uff0c\u8fd9\u5176\u4e2d\u5c31\u5305\u62ec\u7cbe\u7ec6\u5316\u8def\u7531\u3001\u5185/\u5916\u7f51\u9694\u79bb\u4ee5\u53ca\u8bbf\u95ee\u63a7\u5236\uff0c\u81ea\u52a8\u7194\u65ad\u4fdd\u62a4\uff0c\u8de8 AZ \u8bf7\u6c42\u8c03\u5ea6\u7b49\u573a\u666f\u3002\u540c\u65f6\uff0c\u201c\u8fd0\u7ef4\u53cb\u597d\u201d\uff0c\u8fd9\u65b9\u9762 Apache APISIX \u505a\u5f97\u975e\u5e38\u597d\u3002"),(0,p.kt)("p",null,"\u5927\u5bb6\u90fd\u77e5\u9053\uff0cApache APISIX \u80fd\u591f\u53cb\u597d\u5bf9\u63a5 Prometheus\uff0c\u524d\u9762\u6211\u63d0\u5230\u7684\u53ef\u89c2\u6d4b\u7cfb\u7edf\uff0c\u5b83\u5c31\u662f\u57fa\u4e8e Prometheus + Grafana + Loki \u6765\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u4e4b\u6240\u4ee5\u9009\u62e9 Apache APISIX\uff0c\u5f88\u91cd\u8981\u7684\u4e00\u70b9\u662f\u5b83\u80fd\u4e0e\u6211\u4eec\u73b0\u6709\u7684\u6280\u672f\u6808\u5b8c\u7f8e\u7ed3\u5408\uff0c\u8fd9\u4e9b\u90fd\u662f\u6211\u4eec\u6bd4\u8f83\u770b\u91cd\u7684\u3002"),(0,p.kt)("p",null,"\u6b64\u5916\u53e6\u5916\u8fd8\u6709\u4e00\u4e2a\u5173\u952e\u70b9\uff0c\u8fd9\u4e5f\u662f Apache APISIX \u4e0e\u5176\u4ed6\u7f51\u5173\u4ea7\u54c1\u7684\u91cd\u8981\u533a\u522b \u2014\u2014 \u5168\u52a8\u6001\u52a0\u8f7d\uff0c\u56e0\u4e3a\u6211\u4eec\u66f4\u5e0c\u671b\u6240\u6709\u7684\u63d2\u4ef6\u3001\u8def\u7531\u90fd\u80fd\u591f\u52a8\u6001\u7684\u6269\u5c55\uff0c\u8fd9\u4e9b\u662f Nginx \u8fd9\u6837\u7684\u4ea7\u54c1\u6240\u4e0d\u5177\u5907\u7684\u3002\u4e3e\u4e00\u4e2a\u7b80\u5355\u7684\u5e94\u7528\u573a\u666f\u7684\u4f8b\u5b50\uff1a\u524d\u9762\u6211\u6709\u63d0\u5230\u8fc7\u6211\u4eec\u6709\u4e00\u4e2a\u5b50\u7cfb\u7edf\u53eb\u81ea\u52a8\u9a7e\u9a76 Manager\uff0c\u5f53\u6211\u540e\u7aef\u7684\u7d22\u5f15\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0c\u6211\u4eec\u5c31\u662f\u901a\u8fc7 Manager \u81ea\u52a8\u4f7f\u80fd\u4e00\u6761\u9ed8\u8ba4\u9ad8\u4f18\u5148\u7ea7\u7684\u8def\u7531\uff0c\u7981\u7528 PUT \u548c POST \u7b49\u529f\u80fd\uff0c\u4ece\u800c\u5b9e\u73b0\u81ea\u52a8\u540e\u7aef\u4fdd\u62a4\u3002"),(0,p.kt)("h4",{id:"\u7b2c\u4e09\uff0c\u5bf9\u793e\u533a\u5f00\u6e90\u6587\u5316\u7684\u8ba4\u540c\u611f"},"\u7b2c\u4e09\uff0c\u5bf9\u793e\u533a\u5f00\u6e90\u6587\u5316\u7684\u8ba4\u540c\u611f"),(0,p.kt)("p",null,"\u548c\u5176\u4ed6\u7f51\u5173\u4ea7\u54c1\u4e0d\u540c\uff0cApache APISIX \u662f Apache \u5f00\u6e90\u9876\u7ea7\u9879\u76ee\uff0c\u5b75\u5316\u65f6\u95f4\u4e5f\u662f\u6700\u77ed\u7684\uff0c\u8db3\u89c1\u9879\u76ee\u7684\u6210\u529f\uff0c\u4ea7\u54c1\u5df2\u7ecf\u88ab\u5f88\u591a\u4f01\u4e1a\u5e94\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u4e0b\u3002\u6b64\u5916\u4e0d\u5f97\u4e0d\u8bf4\u793e\u533a\u4e5f\u662f\u5341\u5206\u6d3b\u8dc3\u7684\uff0c\u4ee3\u7801\u8d21\u732e\u8005\u548c\u4f7f\u7528\u8005\u90fd\u975e\u5e38\u591a\uff0c\u4e0e\u793e\u533a\u7684\u6c9f\u901a\u4ea4\u6d41\u65b9\u5f0f\u4e5f\u5f88\u591a\u6837\u5316\uff0c\u6bd4\u5982 maillist\uff0cissues\uff0cQQ \u7fa4\uff0c\u5fae\u4fe1\u7fa4\uff0c\u7ebf\u4e0a\u7ebf\u4e0b\u7684 Meetup\uff0c\u6c9f\u901a\u8d77\u6765\u5341\u5206\u4fbf\u6377\u4e14\u8fc5\u901f\u6709\u6548\u3002\u793e\u533a\u5927\u4f6c\u4e5f\u5341\u5206\u53cb\u597d\uff0c\u4e50\u4e8e\u56de\u590d\u5927\u5bb6\u7684\u63d0\u95ee\u3002\u6240\u4ee5\u6211\u4eec\u5bf9 Apache APISIX \u793e\u533a\u7684\u672a\u6765\u4e5f\u662f\u975e\u5e38\u770b\u597d\u7684\u3002"),(0,p.kt)("p",null,"\u53e6\u5916\uff0cApache APISIX \u7684\u5168\u4ea7\u54c1\u7ebf\u505a\u5f97\u4e5f\u975e\u5e38\u597d\uff0c\u5305\u62ec K8s Ingress Controller\uff0c\u4ee5\u53ca Service Mesh \u7b49\uff0c\u867d\u7136\u8fd9\u4e9b\u6280\u672f\u6808\u6211\u4eec\u5f53\u524d\u8fd8\u7528\u4e0d\u5230\uff0c\u4f46\u6211\u89c9\u5f97\u793e\u533a\u5728\u4ea7\u54c1\u5b9a\u4f4d\u3001\u53d1\u5c55\u65b9\u5411\u4e0a\u90fd\u662f\u975e\u5e38\u6e05\u6670\u7684\uff0c\u8fd9\u4e5f\u7ed9\u4e86\u6211\u4eec\u66f4\u5145\u5206\u7684\u4fe1\u5fc3\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Q\uff1a\u5c31\u50cf\u60a8\u8bf4\u7684\uff0c\u5176\u5b9e Apache APISIX \u4e0d\u4ec5\u662f\u5e0c\u671b\u80fd\u591f\u6ee1\u8db3\u7528\u6237\u5f53\u524d\u7684\u9700\u6c42\u548c\u67b6\u6784\u7684\u8bbe\u8ba1\uff0c\u6211\u4eec\u66f4\u5e0c\u671b\u80fd\u591f\u6ee1\u8db3\u5927\u5bb6 3~5 \u5e74\uff0c\u751a\u81f3\u66f4\u957f\u65f6\u671f\u7684\u67b6\u6784\u53d8\u8fc1\u3002\u73b0\u5728 Apache APISIX \u6709\u8dd1\u5728\u4e2d\u56fd\u79fb\u52a8\u7684\u4e00\u4e9b\u4e1a\u52a1\u7cfb\u7edf\u4e0a\u5417\uff1f")),(0,p.kt)("p",null,"\u6709\u7684\u3002\u4ece\u6211\u4eec\u7684\u7b2c\u4e09\u4ee3\u5bf9\u8c61\u5b58\u50a8\u4ea7\u54c1\u5f00\u59cb\uff0c\u6211\u4eec\u9664\u4e86\u89e3\u51b3\u5bb9\u91cf\u3001\u6027\u80fd\u4ee5\u53ca\u6269\u5bb9\u6027\u7684\u95ee\u9898\u4e4b\u5916\uff0c\u6211\u4eec\u8fd8\u5229\u7528 Apache APISIX \u6765\u89e3\u51b3\u6211\u4eec\u4e03\u5c42\u6d41\u91cf\u6cbb\u7406\u7684\u9700\u6c42\u3002\u7b2c\u4e09\u4ee3\u5bf9\u8c61\u5b58\u50a8\u4ece\u5b83\u7684\u7814\u53d1\u5386\u7a0b\u6765\u770b\uff0c\u524d\u540e\u52a0\u8d77\u6765\u8fd8\u4e0d\u5230\u534a\u5e74\u7684\u65f6\u95f4\uff0c\u5e76\u80fd\u591f\u5728 2020 \u5e74 7 \u6708\u7684\u65f6\u5019\u5728\u79fb\u52a8\u4e91\u5341\u671f\u4e2d\u5b8c\u6210\u4e0a\u7ebf\u8fd0\u884c\uff0c\u4e3b\u8981\u670d\u52a1\u4e8e\u5185\u90e8\u7684\u4e00\u4e9b\u4e13\u4e1a\u516c\u53f8\u6570\u636e\u4e0a\u4e91\u7684\u9700\u6c42\u3002\u4e3b\u8981\u662f\u5b58\u50a8\u7528\u6237\u7684\u4e00\u4e9b\u6444\u50cf\u76d1\u63a7\u6570\u636e\uff0c\u6240\u4ee5\u5bf9\u5e26\u5bbd\u7684\u8981\u6c42\u8fd8\u662f\u6bd4\u8f83\u9ad8\u7684\u3002\u76ee\u524d\u6574\u4f53\u6295\u5165\u751f\u4ea7\u8fd0\u884c\u5df2\u7ecf\u6709\u4e00\u5e74\u591a\u4e86\uff0c\u4ece\u63a5\u5165\u5c42\u5230\u540e\u7aef\u670d\u52a1\u7684\u8fd0\u884c\u60c5\u51b5\u8fd8\u662f\u975e\u5e38\u5e73\u7a33\u7684\uff0c\u51e0\u4e4e\u6ca1\u6709\u51fa\u8fc7\u4ec0\u4e48\u95ee\u9898\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Q\uff1a\u5728\u4f7f\u7528 Apache APISIX \u7684\u65f6\u5019\u4f1a\u505a\u4e00\u4e9b\u4e8c\u6b21\u5f00\u53d1\u5417\uff1f\u53e6\u5916\uff0c\u8fd9\u4e9b\u4e8c\u6b21\u5f00\u53d1\u7684\u6210\u679c\u662f\u5426\u6709\u8ba1\u5212\u56de\u5f52\u5230\u793e\u533a\u5462\uff1f")),(0,p.kt)("p",null,"\u4e8c\u6b21\u5f00\u53d1\u662f\u6709\u7684\uff0c\u800c\u4e14\u8fd8\u6709\u4e0d\u5c11\u3002"),(0,p.kt)("p",null,"\u9488\u5bf9\u4e00\u4e9b\u901a\u7528\u7684\u529f\u80fd\uff0c\u6211\u4eec\u4e5f\u4f1a\u628a\u4ed6\u4eec\u8d21\u732e\u7ed9\u793e\u533a\u3002\u4f46\u6211\u4eec\u7684\u4e00\u4e9b\u5f00\u53d1\u5185\u5bb9\u90fd\u662f\u4e3a\u4e86\u6ee1\u8db3\u4e00\u4e9b\u7279\u5b9a\u4e1a\u52a1\u573a\u666f\uff0c\u6bd4\u5982\u8de8 AZ \u8bf7\u6c42\u8c03\u5ea6\u3002\u8be5\u529f\u80fd\u4e3b\u8981\u662f\u9762\u5411\u6211\u4eec\u7b2c\u56db\u4ee3\u5bf9\u8c61\u5b58\u50a8\uff0c\u5b83\u662f\u4e00\u4e2a\u5168\u5c40\u8de8\u57df\u7684\u7248\u672c\uff0c\u652f\u6301 AZ \u7ea7\u5bb9\u707e\uff0c\u6240\u4ee5\u5bf9\u4e1a\u52a1\u7684\u8fde\u7eed\u6027\u8981\u6c42\u975e\u5e38\u9ad8\u3002\u4e3a\u4e86\u89e3\u51b3\u8bf7\u6c42\u8c03\u5ea6\u7684\u4e00\u4e9b\u9700\u6c42\uff0c\u6211\u4eec\u5728 Apache APISIX \u4e0a\u5199\u4e86\u4e00\u4e2a Plugin\uff0c\u7136\u540e\u53bb\u8fd0\u884c\u3002"),(0,p.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a Plugin \u7684\u8bf7\u6c42\uff0c\u9996\u5148\u4f1a\u9009\u62e9\u672c\u8282\u70b9\u4e0a\u6e38\u53bb\u5904\u7406\uff1b\u5982\u679c\u672c\u8282\u70b9\u4e0a\u6e38\u51fa\u73b0\u95ee\u9898\uff0c\u5c31\u4f1a\u8f6c\u5411\u5230\u672c AZ \u5185\u7684\u5176\u4ed6\u4e00\u4e9b\u4e0a\u6e38\u53bb\u8fdb\u884c\u5904\u7406\u3002\u5982\u679c\u672c AZ \u6240\u6709\u4e0a\u6e38\u90fd\u51fa\u73b0\u6545\u969c\u7684\u65f6\u5019\uff0c\u90a3\u5c31\u76f4\u63a5\u91c7\u7528\u8de8 AZ \u7684\u8bf7\u6c42\u8c03\u5ea6\u5904\u7406\u673a\u5236\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u6211\u4eec\u6574\u4e2a\u4e1a\u52a1\u8bf7\u6c42\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5373\u4f7f\u51fa\u73b0 AZ \u7ea7\u7684\u6545\u969c\uff0c\u8bf7\u6c42\u8fd8\u662f\u80fd\u591f\u88ab\u6b63\u5e38\u5904\u7406\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u6211\u4eec\u5229\u7528 Apache APISIX \u505a\u4e86\u4e00\u90e8\u5206 \u201c\u591a\u6d3b\u201d \u67b6\u6784\u7684\u5b9e\u73b0\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Q\uff1a\u9664\u4e86 Apache APISIX \u73b0\u6709\u7684\u529f\u80fd\u4e4b\u5916\uff0c\u4f60\u4eec\u540e\u7eed\u8fd8\u4f1a\u6709\u4e00\u4e9b\u4ec0\u4e48\u6837\u7684\u8ba1\u5212\u5417\uff1f")),(0,p.kt)("p",null,"\u6211\u89c9\u5f97\u540e\u7eed\u7684\u8bdd\uff0c\u6211\u4eec\u5e94\u8be5\u4e3b\u8981\u4f1a\u56f4\u7ed5\u8fd9\u51e0\u4e2a\u65b9\u9762\u5f00\u5c55\u3002"),(0,p.kt)("h4",{id:"\u7b2c\u4e00\uff0c\u5bb9\u5668\u5316\u7f16\u6392\u548c\u7edf\u4e00\u5165\u53e3"},"\u7b2c\u4e00\uff0c\u5bb9\u5668\u5316\u7f16\u6392\u548c\u7edf\u4e00\u5165\u53e3"),(0,p.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u73b0\u5728\u4e3b\u8981\u5728\u5f00\u53d1\u7b2c\u56db\u4ee3\u5bf9\u8c61\u5b58\u50a8\uff0c\u6211\u4eec\u6b63\u5728\u505a\u7684\u4e8b\u60c5\u5c31\u662f\u5b9e\u73b0\u6240\u6709\u7ec4\u4ef6\u7684\u5bb9\u5668\u5316\u90e8\u7f72\u7f16\u6392\u3002\u8fd9\u4e2d\u95f4\u65e2\u6709\u6570\u636e\u9762\u4e5f\u6709\u63a7\u5236\u9762\uff0c\u63a7\u5236\u9762\u6211\u4eec\u5df2\u7ecf\u662f K8s \u5316\u4e86\uff0c\u5f53\u524d\u6b63\u5728\u505a\u6570\u636e\u9762\u7ec4\u4ef6\u7684\u5bb9\u5668\u5316\u90e8\u7f72\u7f16\u6392\u5de5\u4f5c\u3002\u5bf9\u4e8e\u5916\u90e8\u8bbf\u95ee\u9700\u6c42\uff0c\u6211\u4eec\u4e5f\u5728\u91c7\u7528 Ingress Controller \u6765\u7edf\u4e00\u8bbf\u95ee\u5165\u53e3\u3002"),(0,p.kt)("h4",{id:"\u7b2c\u4e8c\uff0c\u5c06\u66f4\u591a\u7684\u529f\u80fd\u524d\u7f6e\u5230\u7f51\u5173\u5c42\u9762\u6765\u5904\u7406"},"\u7b2c\u4e8c\uff0c\u5c06\u66f4\u591a\u7684\u529f\u80fd\u524d\u7f6e\u5230\u7f51\u5173\u5c42\u9762\u6765\u5904\u7406"),(0,p.kt)("p",null,"\u524d\u9762\u6211\u6709\u63d0\u5230\uff0c\u5728\u6211\u4eec\u7684\u63a7\u5236\u9762\u6709\u591a\u4e2a\u5b50\u7cfb\u7edf\uff0c\u540e\u7eed\u6211\u4eec\u5e0c\u671b\u628a\u6d41\u91cf\u6cbb\u7406\u4e0e\u4e00\u4e9b\u81ea\u52a8\u9a7e\u9a76\u3001\u53ef\u89c2\u6d4b\u5b50\u7cfb\u7edf\u80fd\u591f\u66f4\u591a\u7684\u53bb\u878d\u5408\u8d77\u6765\uff0c\u901a\u8fc7\u5b9e\u73b0\u6545\u969c\u81ea\u6108\u3001\u6545\u969c\u9694\u79bb\u7b49\u529f\u80fd\uff0c\u4ece\u800c\u4fdd\u8bc1\u4ea7\u54c1\u5bf9\u5916\u7684\u8bbf\u95ee\u80fd\u529b\uff0c\u8fd9\u4e5f\u5c31\u8981\u6c42\u6211\u4eec\u5339\u914d\u66f4\u591a\u7684\u4e1a\u52a1\u573a\u666f\u80fd\u529b\u3002"),(0,p.kt)("p",null,"\u53e6\u5916\uff0c\u6211\u4eec\u73b0\u5728\u7684\u7f51\u5173\u63a5\u5165\u5c42\u4e3b\u8981\u662f\u5b9e\u73b0\u4e86\u6d41\u91cf\u8f6c\u53d1\u63a7\u5236\u529f\u80fd\uff0c\u800c\u539f\u6765\u540e\u7aef\u7684\u8ba4\u8bc1\u3001\u9274\u6743\u7684\u90a3\u5957\u903b\u8f91\u662f\u7531\u4e1a\u52a1\u903b\u8f91\u5c42\u5904\u7406\u7684\uff0c\u540e\u7eed\u4f1a\u8003\u8651\u628a\u8fd9\u4e00\u90e8\u5206\u5185\u5bb9\u7edf\u4e00\u524d\u7f6e\u5230\u7f51\u5173\u5c42\u9762\u6765\u5904\u7406\u3002\u5728\u6570\u636e\u8fc1\u79fb\u8fd9\u5757\uff0c\u7531\u4e8e\u5386\u53f2\u9057\u7559\u95ee\u9898\u6bd4\u8f83\u591a\uff0c\u8fc1\u79fb\u8fc7\u7a0b\u8fd8\u4e0d\u80fd\u5f71\u54cd\u4e1a\u52a1\u7684\u8fde\u7eed\u6027\uff0c\u4e0d\u8fc7\u6211\u4eec\u4e5f\u5df2\u7ecf\u6709\u4e86\u57fa\u4e8e Apache APISIX \u7684\u53ef\u884c\u65b9\u6848\u3002"),(0,p.kt)("h4",{id:"\u7b2c\u4e09\uff0c\u793e\u533a\u4ee3\u7801\u8d21\u732e\u4e0a\u8981\u52a0\u5927"},"\u7b2c\u4e09\uff0c\u793e\u533a\u4ee3\u7801\u8d21\u732e\u4e0a\u8981\u52a0\u5927"),(0,p.kt)("p",null,"\u6211\u4eec\u4e5f\u4f1a\u5728\u8fd9\u5757\u52a0\u5927\u4eba\u5458\u6295\u5165\uff0c\u4e0e\u793e\u533a\u6709\u7740\u66f4\u79ef\u6781\u7684\u4e92\u52a8\uff0c\u53c2\u4e0e\u5230\u793e\u533a\u7684\u5f00\u53d1\u5f53\u4e2d\uff0c\u4e3a\u793e\u533a\u7684\u53d1\u5c55\u505a\u4e00\u4e9b\u56de\u9988\uff0c\u8fd9\u4e5f\u6709\u5229\u4e8e\u6253\u78e8\u6211\u4eec\u7684\u4ea7\u54c1\u3002"),(0,p.kt)("h4",{id:"\u7b2c\u56db\uff0c\u63a8\u52a8\u5185\u90e8\u6280\u672f\u6808\u7684\u7edf\u4e00"},"\u7b2c\u56db\uff0c\u63a8\u52a8\u5185\u90e8\u6280\u672f\u6808\u7684\u7edf\u4e00"),(0,p.kt)("p",null,"\u76ee\u524d\u5728\u6211\u4eec\u5185\u90e8\u8fd8\u5b58\u5728\u591a\u79cd\u6280\u672f\u6808\u5e76\u884c\u7684\u60c5\u51b5\uff0c\u540c\u65f6\u4e5f\u6709\u591a\u4e2a\u56e2\u961f\u5728\u4f7f\u7528 Apache APISIX \u7f51\u5173\uff0c\u540e\u671f\u6211\u4eec\u4e5f\u5c06\u901a\u8fc7\u6c9f\u901a\uff0c\u68b3\u7406\u4e1a\u52a1\u6a21\u578b\uff0c\u5b9e\u73b0\u6280\u672f\u6808\u7684\u7edf\u4e00\uff0c\u907f\u514d\u91cd\u590d\u9020\u8f6e\u5b50\u7684\u60c5\u51b5\u53d1\u751f\uff0c\u6700\u7ec8\u5b9e\u73b0\u6280\u672f\u6808\u7684\u7edf\u4e00\uff0c\u5f62\u6210\u7edf\u4e00\u57fa\u5ea7\u80fd\u529b\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Q\uff1a\u611f\u8c22\u9648\u8001\u5e08\uff0c\u770b\u6765 Apache APISIX \u5728\u4e2d\u56fd\u79fb\u52a8\u540e\u9762\u5e94\u8be5\u53ef\u4ee5\u9002\u7528\u66f4\u591a\u7684\u573a\u666f\uff0c\u53d1\u6325\u7684\u66f4\u591a\u4f5c\u7528\u4e86\u3002")))}i.isMDXComponent=!0},73309:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2021-08-09-chenyanshan-0952e0c8779715d7f5952371cd3a343d.png"}}]);