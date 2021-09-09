(self.webpackChunk=self.webpackChunk||[]).push([[46103],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||l;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86146:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(67294),a=n(24973),l=n(22122),i=n(19756),o=n(86010),c="iconEdit_2_ui",s=function(e){var t=e.className,n=(0,i.Z)(e,["className"]);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-label":"Edit page"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(s,null),r.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},3009:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),a=n(36742),l=n(50210),i=n(19756),o=n(86010),c=n(24973),s=n(86700),m="enhancedAnchor_2LWZ",u=function(e){return function(t){var n,a=t.id,l=(0,i.Z)(t,["id"]),u=(0,s.LU)().navbar.hideOnScroll;return a?r.createElement(e,l,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor",(n={},n[m]=!u,n)),id:a}),l.children,r.createElement("a",{className:"hash-link",href:"#"+a,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(e,l)}},d={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(l.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(a.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(l.Z,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:u("h1"),h2:u("h2"),h3:u("h3"),h4:u("h4"),h5:u("h5"),h6:u("h6")}},571:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010);var l=function(e,t,n){var a=(0,r.useState)(void 0),l=a[0],i=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,o=!1,c=document.getElementsByClassName(e);a<c.length&&!o;){var s=c[a],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));r.id===u&&(l&&l.classList.remove(t),s.classList.add(t),i(s),o=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},i="tableOfContents_35-E",o="table-of-contents__link";function c(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(i,"thin-scrollbar")},r.createElement(c,{toc:t}))}},39827:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r=n(67294),a=n(86010),l=n(3905),i=n(24973),o=n(36742),c=n(3009),s=n(41217),m="blogPostTitle_nmLu",u="headerDate_67br",d="marginLeft_rCVv",p="blogPostDate_3tMv",f="postHeader_qYPS",v="authorName_3Neb",g="headerTags_2Lqv",h="line_1rJo",b=n(86700);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var O=r.createElement("path",{fill:"#fff",fillOpacity:.01,d:"M0 0h48v48H0z"}),_=r.createElement("path",{d:"M42.17 29.245L29.262 42.151a3.6 3.6 0 01-5.094 0L8 26V8h18l16.17 16.17a3.6 3.6 0 010 5.075z",stroke:"#333",strokeWidth:4,strokeLinejoin:"round"}),N=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",fill:"#333"});var k=function(e){var t=e.title,n=e.titleId,a=y(e,["title","titleId"]);return r.createElement("svg",E({width:16,height:16,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,O,_,N)};function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Z=r.createElement("path",{fill:"#fff",fillOpacity:.01,d:"M0 0h48v48H0z"}),x=r.createElement("path",{d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z",stroke:"#333",strokeWidth:4,strokeLinejoin:"round"}),I=r.createElement("path",{d:"M24.008 12v12.009l8.479 8.48",stroke:"#333",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round"});var j=function(e){var t=e.title,n=e.titleId,a=P(e,["title","titleId"]);return r.createElement("svg",w({width:16,height:16,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,Z,x,I)};var L=function(e){var t,n,E=(t=(0,b.c2)().selectMessage,function(e){var n=Math.ceil(e);return t(n,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}),y=e.children,O=e.frontMatter,_=e.metadata,N=e.truncated,w=e.isBlogPostPage,P=void 0!==w&&w,Z=_.date,x=_.formattedDate,I=_.permalink,L=_.tags,T=_.readingTime,M=O.author,C=O.title,S=O.image,A=O.keywords,R=O.author_url||O.authorURL;return O.author_title||O.authorTitle,O.author_image_url||O.authorImageURL,r.createElement(r.Fragment,null,r.createElement(s.Z,{keywords:A,image:S}),r.createElement("article",{className:P?void 0:"margin-bottom--xl"},(n=P?"h1":"h2",r.createElement("header",null,r.createElement(n,{className:(0,a.Z)("margin-bottom--sm",m)},P?C:r.createElement(o.Z,{to:I},C)),r.createElement("div",{className:f},r.createElement("div",{className:"avatar margin-bottom--md"},r.createElement("div",{className:"avatar__intro"},M&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(o.Z,{href:R,className:v},"Author: "+M))))),M&&r.createElement("div",{className:"margin-bottom--md "+h},r.createElement("div",null)),r.createElement("div",{className:"margin-bottom--md "+u+" "+(M&&d)},r.createElement(j,null),r.createElement("time",{dateTime:Z,className:p},x,T&&r.createElement(r.Fragment,null," \xb7 ",E(T)))),L.length>0&&r.createElement("div",{className:"margin-bottom--md "+h},r.createElement("div",null)),r.createElement("div",{className:"margin-bottom--md"},L.length>0&&r.createElement("div",{className:"col "+g},r.createElement(k,null),L.map((function(e){var t=e.label,n=e.permalink;return r.createElement(o.Z,{key:n,className:"margin-horiz--sm",to:n},t)}))))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:c.Z},y)),(L.length>0||N)&&r.createElement("footer",{className:"row margin-vert--lg"},N&&r.createElement("div",{className:"col text--right"},r.createElement(o.Z,{to:_.permalink,"aria-label":"Read more about "+C},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},29209:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(67294),a=n(35888),l=n(39827),i=n(24973),o=n(36742);var c=function(e){var t=e.nextItem,n=e.prevItem;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r.createElement("div",{className:"pagination-nav__item"},n&&r.createElement(o.Z,{className:"pagination-nav__link",to:n.permalink},r.createElement("div",{className:"pagination-nav__sublabel"},r.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),r.createElement("div",{className:"pagination-nav__label"},"\xab ",n.title))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.createElement(o.Z,{className:"pagination-nav__link",to:t.permalink},r.createElement("div",{className:"pagination-nav__sublabel"},r.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),r.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},s=(n(88014),n(571)),m=n(86146),u=n(86700);var d=function(e){var t=e.content,n=(e.sidebar,t.frontMatter),i=t.metadata,o=i.title,d=i.description,p=i.nextItem,f=i.prevItem,v=i.editUrl,g=n.hide_table_of_contents;return r.createElement(a.Z,{title:o,description:d,wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage},t&&r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--2"}),r.createElement("main",{className:"col col--8"},r.createElement(l.Z,{frontMatter:n,metadata:i,isBlogPostPage:!0},r.createElement(t,null)),r.createElement("div",null,v&&r.createElement(m.Z,{editUrl:v})),(p||f)&&r.createElement("div",{className:"margin-vert--xl"},r.createElement(c,{nextItem:p,prevItem:f}))),!g&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(s.Z,{toc:t.toc})))))}},88014:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67294),a=n(86010),l=(n(36742),{sidebar:"sidebar_3-2F",sidebarItemTitle:"sidebarItemTitle_10M-",sidebarItemList:"sidebarItemList_3L1d",sidebarItem:"sidebarItem_3stU",selected:"selected_3rFQ",sidebarItemLinkActive:"sidebarItemLinkActive_1XEC"}),i=n(5977);function o(e){var t=e.count,n=(0,r.useState)(),o=n[0],c=n[1],s=(0,i.k6)(),m=s.location.pathname.split("/");if((0,r.useEffect)((function(){2===m.length?c("All"):4===m.length?-1!==m[3].indexOf("-")?c(m[3].replace("-"," ")):c(m[3]):c("All")}),[m]),!t)return null;return r.createElement("div",{className:(0,a.Z)(l.sidebar,"thin-scrollbar")},r.createElement("h3",{className:l.sidebarItemTitle},"Tags"),r.createElement("div",{className:l.sidebarItemList},Object.entries(t).map((function(e){var t=e[0],n=e[1];return r.createElement("div",{key:t,className:l.sidebarItem+" "+(o===t?l.selected:""),onClick:function(){return function(e){c(e),"All"===e?s.push("/blog"):(-1!==e.indexOf(" ")&&(e=e.replace(" ","-")),s.push("/blog/tags/"+e))}(t)}},r.createElement("div",{className:l.sidebarItemLink},t),r.createElement("p",null,n))}))))}}}]);