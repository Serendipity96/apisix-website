(self.webpackChunk=self.webpackChunk||[]).push([[93089],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return p}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(r),p=n,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||l;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3009:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var a=r(67294),n=r(36742),l=r(50210),i=r(19756),o=r(86010),c=r(24973),s=r(86700),m="enhancedAnchor_2LWZ",u=function(e){return function(t){var r,n=t.id,l=(0,i.Z)(t,["id"]),u=(0,s.LU)().navbar.hideOnScroll;return n?a.createElement(e,l,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor",(r={},r[m]=!u,r)),id:n}),l.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(e,l)}},d={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(l.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(n.Z,e)},pre:function(e){var t,r=e.children;return(0,a.isValidElement)(null==r||null==(t=r.props)?void 0:t.children)?null==r?void 0:r.props.children:a.createElement(l.Z,(0,a.isValidElement)(r)?null==r?void 0:r.props:{children:r})},h1:u("h1"),h2:u("h2"),h3:u("h3"),h4:u("h4"),h5:u("h5"),h6:u("h6")}},1729:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(67294),n=r(52263),l=r(35888),i=r(39827),o=r(36742),c=r(24973);var s=function(e){var t=e.metadata,r=t.previousPage,n=t.nextPage;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a.createElement("div",{className:"pagination-nav__item"},r&&a.createElement(o.Z,{className:"pagination-nav__link",to:r},a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",a.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&a.createElement(o.Z,{className:"pagination-nav__link",to:n},a.createElement("div",{className:"pagination-nav__label"},a.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=r(88014),u=r(86700);var d=function(e){var t=e.metadata,r=e.items,o=(e.sidebar,(0,n.default)().siteConfig.title),c=t.blogDescription,d=t.blogTitle,p="/"===t.permalink?o:d,f=(0,a.useState)(),g=f[0],v=f[1];return(0,a.useEffect)((function(){var e=[];r.forEach((function(t){var r=t.content.frontMatter.tags;r&&(e=e.concat(r))}));var t={All:r.length};e.forEach((function(e){t[e]=(t[e]||0)+1})),v(t)}),[]),a.createElement(l.Z,{title:p,description:c,wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--3"},a.createElement(m.Z,{count:g})),a.createElement("main",{className:"col col--9"},r.map((function(e){var t=e.content;return a.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},a.createElement(t,null))})),a.createElement(s,{metadata:t})))))}},39827:function(e,t,r){"use strict";r.d(t,{Z:function(){return I}});var a=r(67294),n=r(86010),l=r(3905),i=r(24973),o=r(36742),c=r(3009),s=r(41217),m="blogPostTitle_nmLu",u="headerDate_67br",d="marginLeft_rCVv",p="blogPostDate_3tMv",f="postHeader_qYPS",g="authorName_3Neb",v="headerTags_2Lqv",h="line_1rJo",b=r(86700);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var O=a.createElement("path",{fill:"#fff",fillOpacity:.01,d:"M0 0h48v48H0z"}),w=a.createElement("path",{d:"M42.17 29.245L29.262 42.151a3.6 3.6 0 01-5.094 0L8 26V8h18l16.17 16.17a3.6 3.6 0 010 5.075z",stroke:"#333",strokeWidth:4,strokeLinejoin:"round"}),k=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",fill:"#333"});var N=function(e){var t=e.title,r=e.titleId,n=y(e,["title","titleId"]);return a.createElement("svg",E({width:16,height:16,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},n),t?a.createElement("title",{id:r},t):null,O,w,k)};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var P=a.createElement("path",{fill:"#fff",fillOpacity:.01,d:"M0 0h48v48H0z"}),T=a.createElement("path",{d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z",stroke:"#333",strokeWidth:4,strokeLinejoin:"round"}),Z=a.createElement("path",{d:"M24.008 12v12.009l8.479 8.48",stroke:"#333",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round"});var x=function(e){var t=e.title,r=e.titleId,n=j(e,["title","titleId"]);return a.createElement("svg",_({width:16,height:16,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},n),t?a.createElement("title",{id:r},t):null,P,T,Z)};var I=function(e){var t,r,E=(t=(0,b.c2)().selectMessage,function(e){var r=Math.ceil(e);return t(r,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}),y=e.children,O=e.frontMatter,w=e.metadata,k=e.truncated,_=e.isBlogPostPage,j=void 0!==_&&_,P=w.date,T=w.formattedDate,Z=w.permalink,I=w.tags,L=w.readingTime,M=O.author,S=O.title,A=O.image,C=O.keywords,D=O.author_url||O.authorURL;return O.author_title||O.authorTitle,O.author_image_url||O.authorImageURL,a.createElement(a.Fragment,null,a.createElement(s.Z,{keywords:C,image:A}),a.createElement("article",{className:j?void 0:"margin-bottom--xl"},(r=j?"h1":"h2",a.createElement("header",null,a.createElement(r,{className:(0,n.Z)("margin-bottom--sm",m)},j?S:a.createElement(o.Z,{to:Z},S)),a.createElement("div",{className:f},a.createElement("div",{className:"avatar margin-bottom--md"},a.createElement("div",{className:"avatar__intro"},M&&a.createElement(a.Fragment,null,a.createElement("h4",{className:"avatar__name"},a.createElement(o.Z,{href:D,className:g},"Author: "+M))))),M&&a.createElement("div",{className:"margin-bottom--md "+h},a.createElement("div",null)),a.createElement("div",{className:"margin-bottom--md "+u+" "+(M&&d)},a.createElement(x,null),a.createElement("time",{dateTime:P,className:p},T,L&&a.createElement(a.Fragment,null," \xb7 ",E(L)))),I.length>0&&a.createElement("div",{className:"margin-bottom--md "+h},a.createElement("div",null)),a.createElement("div",{className:"margin-bottom--md"},I.length>0&&a.createElement("div",{className:"col "+v},a.createElement(N,null),I.map((function(e){var t=e.label,r=e.permalink;return a.createElement(o.Z,{key:r,className:"margin-horiz--sm",to:r},t)}))))))),a.createElement("div",{className:"markdown"},a.createElement(l.Zo,{components:c.Z},y)),(I.length>0||k)&&a.createElement("footer",{className:"row margin-vert--lg"},k&&a.createElement("div",{className:"col text--right"},a.createElement(o.Z,{to:w.permalink,"aria-label":"Read more about "+S},a.createElement("strong",null,a.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},88014:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(67294),n=r(86010),l=(r(36742),{sidebar:"sidebar_3-2F",sidebarItemTitle:"sidebarItemTitle_10M-",sidebarItemList:"sidebarItemList_3L1d",sidebarItem:"sidebarItem_3stU",selected:"selected_3rFQ",sidebarItemLinkActive:"sidebarItemLinkActive_1XEC"}),i=r(5977);function o(e){var t=e.count,r=(0,a.useState)(),o=r[0],c=r[1],s=(0,i.k6)(),m=s.location.pathname.split("/");if((0,a.useEffect)((function(){2===m.length?c("All"):4===m.length?-1!==m[3].indexOf("-")?c(m[3].replace("-"," ")):c(m[3]):c("All")}),[m]),!t)return null;return a.createElement("div",{className:(0,n.Z)(l.sidebar,"thin-scrollbar")},a.createElement("h3",{className:l.sidebarItemTitle},"Tags"),a.createElement("div",{className:l.sidebarItemList},Object.entries(t).map((function(e){var t=e[0],r=e[1];return a.createElement("div",{key:t,className:l.sidebarItem+" "+(o===t?l.selected:""),onClick:function(){return function(e){c(e),"All"===e?s.push("/blog"):(-1!==e.indexOf(" ")&&(e=e.replace(" ","-")),s.push("/blog/tags/"+e))}(t)}},a.createElement("div",{className:l.sidebarItemLink},t),a.createElement("p",null,r))}))))}}}]);