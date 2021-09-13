"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30430],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71264:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i={title:"Build an image from the source codes"},c={unversionedId:"build",id:"build",isDocsHomePage:!1,title:"Build an image from the source codes",description:"\x3c!--",source:"@site/docs/apisix-docker/build.md",sourceDirName:".",slug:"/build",permalink:"/docs/docker/next/build",editUrl:"https://github.com/apache/apisix-docker/edit/master/docs/en/latest/build.md",version:"current",frontMatter:{title:"Build an image from the source codes"},sidebar:"docs",next:{title:"Deploy Apache APISIX with Docker",permalink:"/docs/docker/next/manual"}},l=[{value:"Build an image from source",id:"build-an-image-from-source",children:[]}],u={toc:l};function s(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"build-an-image-from-source"},"Build an image from source"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Docker images are not official ASF releases but provided for convenience. Recommended usage is always to build the source.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"install release version (Apache releases are beginning from version 0.9):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Assign Apache release version number to variable `APISIX_VERSION`, for example: 2.2. The latest version can be find at `https://github.com/apache/apisix/releases`\n\nAPISIX_VERSION=2.2\ndocker build -t apisix:${APISIX_VERSION}-alpine --build-arg APISIX_VERSION=${APISIX_VERSION} -f alpine/Dockerfile alpine\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"install master branch version, which has latest code(ONLY for the developer's convenience):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t apisix:master-alpine -f alpine/Dockerfile alpine\n")))}s.isMDXComponent=!0}}]);