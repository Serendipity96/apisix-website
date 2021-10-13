"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2875],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(y,p(p({ref:t},o),{},{components:n})):a.createElement(y,p({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,p=new Array(s);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<s;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56306:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),p={title:"\u5b89\u88c5\u4f9d\u8d56"},i=void 0,l={unversionedId:"install-dependencies",id:"version-2.9/install-dependencies",isDocsHomePage:!1,title:"\u5b89\u88c5\u4f9d\u8d56",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.9/install-dependencies.md",sourceDirName:".",slug:"/install-dependencies",permalink:"/zh/docs/apisix/2.9/install-dependencies",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/install-dependencies.md",tags:[],version:"2.9",frontMatter:{title:"\u5b89\u88c5\u4f9d\u8d56"},sidebar:"version-2.9/docs",previous:{title:"\u538b\u529b\u6d4b\u8bd5",permalink:"/zh/docs/apisix/2.9/benchmark"},next:{title:"\u63d2\u4ef6\u5f00\u53d1",permalink:"/zh/docs/apisix/2.9/plugin-develop"}},c=[{value:"\u6ce8\u610f",id:"\u6ce8\u610f",children:[]},{value:"CentOS 7",id:"centos-7",children:[]},{value:"Fedora 31 &amp; 32",id:"fedora-31--32",children:[]},{value:"Ubuntu 16.04 &amp; 18.04",id:"ubuntu-1604--1804",children:[]},{value:"Debian 9 &amp; 10",id:"debian-9--10",children:[]},{value:"Mac OSX",id:"mac-osx",children:[]}],o={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#%E6%B3%A8%E6%84%8F"},"\u6ce8\u610f")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#centos-7"},"CentOS 7")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#fedora-31--32"},"Fedora 31 & 32")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#ubuntu-1604--1804"},"Ubuntu 16.04 & 18.04")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#debian-9--10"},"Debian 9 & 10")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#mac-osx"},"Mac OSX"))),(0,s.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Apache APISIX \u4ece v2.0 \u5f00\u59cb\u4e0d\u518d\u652f\u6301 ",(0,s.kt)("inlineCode",{parentName:"p"},"v2")," \u7248\u672c\u7684 etcd\uff0c\u5e76\u4e14 etcd \u6700\u4f4e\u652f\u6301\u7248\u672c\u4e3a v3.4.0\uff0c\u56e0\u6b64\u8bf7\u4f7f\u7528 etcd 3.4.0+\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u56e0\u4e3a etcd v3 \u4f7f\u7528 gRPC \u4f5c\u4e3a\u6d88\u606f\u4f20\u9012\u534f\u8bae\uff0c\u800c Apache APISIX \u4f7f\u7528 HTTP(S) \u4e0e etcd \u96c6\u7fa4\u901a\u4fe1\uff0c\u56e0\u6b64\u8bf7\u786e\u4fdd\u542f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/dev-guide/api_grpc_gateway/"},"etcd gRPC gateway")," \u529f\u80fd\u3002")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u76ee\u524d Apache APISIX \u9ed8\u8ba4\u4f7f\u7528 HTTP \u534f\u8bae\u4e0e etcd \u96c6\u7fa4\u901a\u4fe1\uff0c\u8fd9\u5e76\u4e0d\u5b89\u5168\uff0c\u5982\u679c\u5e0c\u671b\u4fdd\u969c\u6570\u636e\u7684\u5b89\u5168\u6027\u548c\u5b8c\u6574\u6027\u3002 \u8bf7\u4e3a\u60a8\u7684 etcd \u96c6\u7fa4\u914d\u7f6e\u8bc1\u4e66\u53ca\u5bf9\u5e94\u79c1\u94a5\uff0c\u5e76\u5728\u60a8\u7684 Apache APISIX etcd endpoints \u914d\u7f6e\u5217\u8868\u4e2d\u660e\u786e\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"https")," \u534f\u8bae\u524d\u7f00\u3002\u8bf7\u67e5\u9605 ",(0,s.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," \u4e2d etcd \u4e00\u8282\u76f8\u5173\u7684\u914d\u7f6e\u6765\u4e86\u89e3\u66f4\u591a\u7ec6\u8282\u3002")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u8981\u60f3\u4f7f\u7528 Tengine \u66ff\u4ee3 OpenResty\uff0c\u8bf7\u53c2\u8003 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/ci/linux_tengine_runner.sh"},"Install Tengine at Ubuntu"),"\u3002")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u5982\u679c\u662f OpenResty 1.19\uff0cAPISIX \u4f1a\u4f7f\u7528 OpenResty \u5185\u7f6e\u7684 LuaJIT \u6765\u8fd0\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"bin/apisix"),"\uff1b\u5426\u5219\u4f1a\u4f7f\u7528 Lua 5.1\u3002\u5982\u679c\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u9047\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"luajit: lj_asm_x86.h:2819: asm_loop_fixup: Assertion '((intptr_t)target & 15) == 0' failed"),"\uff0c\u8fd9\u662f\u4f4e\u7248\u672c OpenResty \u5185\u7f6e\u7684 LuaJIT \u5728\u7279\u5b9a\u7f16\u8bd1\u6761\u4ef6\u4e0b\u7684\u95ee\u9898\u3002")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u5728\u67d0\u4e9b\u5e73\u53f0\u4e0a\uff0c\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u5b89\u88c5 LuaRocks \u4f1a\u5bfc\u81f4 Lua \u88ab\u5347\u7ea7\u4e3a Lua 5.3\uff0c\u6240\u4ee5\u6211\u4eec\u5efa\u8bae\u901a\u8fc7\u6e90\u4ee3\u7801\u7684\u65b9\u5f0f\u5b89\u88c5 LuaRocks\u3002\u5982\u679c\u4f60\u901a\u8fc7\u5b98\u65b9\u4ed3\u5e93\u5b89\u88c5 OpenResty \u548c OpenResty \u7684 OpenSSL \u5f00\u53d1\u5e93\uff08rpm \u7248\u672c\uff1aopenresty-openssl111-devel\uff0cdeb \u7248\u672c\uff1aopenresty-openssl111-dev\uff09\uff0c\u90a3\u4e48 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/tree/master/utils/linux-install-luarocks.sh"},"\u6211\u4eec\u63d0\u4f9b\u4e86\u81ea\u52a8\u5b89\u88c5\u7684\u811a\u672c"),"\u3002\u5982\u679c\u4f60\u662f\u81ea\u5df1\u7f16\u8bd1\u7684 OpenResty\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0a\u8ff0\u811a\u672c\u5e76\u4fee\u6539\u91cc\u9762\u7684\u8def\u5f84\u3002\u5982\u679c\u7f16\u8bd1\u65f6\u6ca1\u6709\u6307\u5b9a OpenSSL \u5e93\u7684\u8def\u5f84\uff0c\u90a3\u4e48\u65e0\u9700\u914d\u7f6e LuaRocks \u5185\u8ddf OpenSSL \u76f8\u5173\u7684\u53d8\u91cf\uff0c\u56e0\u4e3a\u9ed8\u8ba4\u90fd\u662f\u7528\u7684\u7cfb\u7edf\u81ea\u5e26\u7684 OpenSSL\u3002\u5982\u679c\u7f16\u8bd1\u65f6\u6307\u5b9a\u4e86 OpenSSL \u5e93\uff0c\u90a3\u4e48\u9700\u8981\u4fdd\u8bc1 LuaRocks \u7684 OpenSSL \u914d\u7f6e\u8ddf OpenResty \u7684\u76f8\u4e00\u81f4\u3002")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u8b66\u544a\uff1a\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528\u4f4e\u4e8e ",(0,s.kt)("inlineCode",{parentName:"p"},"1.17.8")," \u7684 OpenResty \u7248\u672c\uff0c\u8bf7\u5b89\u88c5 openresty-openssl-devel\uff0c\u800c\u4e0d\u662f openresty-openssl111-devel\u3002")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"OpenResty \u662f APISIX \u7684\u4e00\u4e2a\u4f9d\u8d56\u9879\uff0c\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u90e8\u7f72 APISIX \u5e76\u4e14\u4e0d\u9700\u8981\u4f7f\u7528 OpenResty \u90e8\u7f72\u5176\u4ed6\u670d\u52a1\uff0c\u53ef\u4ee5\u5728 OpenResty \u5b89\u88c5\u5b8c\u6210\u540e\u505c\u6b62\u5e76\u7981\u7528 OpenResty\uff0c\u8fd9\u4e0d\u4f1a\u5f71\u54cd APISIX \u7684\u6b63\u5e38\u5de5\u4f5c\uff0c\u8bf7\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u8c28\u614e\u64cd\u4f5c\u3002\u4f8b\u5982 Ubuntu\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"systemctl stop openresty && systemctl disable openresty"),"\u3002"))),(0,s.kt)("h2",{id:"centos-7"},"CentOS 7"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5 etcd\nwget https://github.com/etcd-io/etcd/releases/download/v3.4.13/etcd-v3.4.13-linux-amd64.tar.gz\ntar -xvf etcd-v3.4.13-linux-amd64.tar.gz && \\\n    cd etcd-v3.4.13-linux-amd64 && \\\n    sudo cp -a etcd etcdctl /usr/bin/\n\n# \u6dfb\u52a0 OpenResty \u6e90\nsudo yum install yum-utils\nsudo yum-config-manager --add-repo https://openresty.org/package/centos/openresty.repo\n\n# \u5b89\u88c5 OpenResty \u548c \u7f16\u8bd1\u5de5\u5177\nsudo yum install -y openresty curl git gcc openresty-openssl111-devel unzip pcre pcre-devel\n\n# \u5b89\u88c5 LuaRocks\ncurl https://raw.githubusercontent.com/apache/apisix/master/utils/linux-install-luarocks.sh -sL | bash -\n\n# \u5f00\u542f etcd server\nnohup etcd &\n")),(0,s.kt)("h2",{id:"fedora-31--32"},"Fedora 31 & 32"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6dfb\u52a0 OpenResty \u6e90\nsudo yum install yum-utils\nsudo yum-config-manager --add-repo https://openresty.org/package/fedora/openresty.repo\n\n# \u5b89\u88c5 etcd\nwget https://github.com/etcd-io/etcd/releases/download/v3.4.13/etcd-v3.4.13-linux-amd64.tar.gz\ntar -xvf etcd-v3.4.13-linux-amd64.tar.gz && \\\n    cd etcd-v3.4.13-linux-amd64 && \\\n    sudo cp -a etcd etcdctl /usr/bin/\n\n# \u5b89\u88c5 OpenResty \u548c \u7f16\u8bd1\u5de5\u5177\nsudo yum install -y openresty curl git gcc openresty-openssl111-devel pcre pcre-devel\n\n# \u5b89\u88c5 LuaRocks\ncurl https://raw.githubusercontent.com/apache/apisix/master/utils/linux-install-luarocks.sh -sL | bash -\n\n# \u5f00\u542f etcd server\nnohup etcd &\n")),(0,s.kt)("h2",{id:"ubuntu-1604--1804"},"Ubuntu 16.04 & 18.04"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'# \u6dfb\u52a0 OpenResty \u6e90\nwget -qO - https://openresty.org/package/pubkey.gpg | sudo apt-key add -\nsudo apt-get update\nsudo apt-get -y install software-properties-common\nsudo add-apt-repository -y "deb http://openresty.org/package/ubuntu $(lsb_release -sc) main"\nsudo apt-get update\n\n# \u5b89\u88c5 etcd\nwget https://github.com/etcd-io/etcd/releases/download/v3.4.13/etcd-v3.4.13-linux-amd64.tar.gz\ntar -xvf etcd-v3.4.13-linux-amd64.tar.gz && \\\n    cd etcd-v3.4.13-linux-amd64 && \\\n    sudo cp -a etcd etcdctl /usr/bin/\n\n# \u5b89\u88c5 OpenResty \u548c \u7f16\u8bd1\u5de5\u5177\nsudo apt-get install -y git openresty curl openresty-openssl111-dev make gcc libpcre3 libpcre3-dev\n\n# \u5b89\u88c5 LuaRocks\ncurl https://raw.githubusercontent.com/apache/apisix/master/utils/linux-install-luarocks.sh -sL | bash -\n\n# \u5f00\u542f etcd server\nnohup etcd &\n')),(0,s.kt)("h2",{id:"debian-9--10"},"Debian 9 & 10"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# \u53ef\u9009\nsed -i 's|^deb http://deb.debian.org/debian|deb http://mirrors.huaweicloud.com/debian|g' /etc/apt/sources.list\nsed -i 's|^deb http://security.debian.org/debian-security|deb http://mirrors.huaweicloud.com/debian-security|g' /etc/apt/sources.list\napt update\napt install wget gnupg -y\n\n# \u6dfb\u52a0 OpenResty \u6e90\nwget -qO - https://openresty.org/package/pubkey.gpg | sudo apt-key add -\nsudo apt-get -y install software-properties-common\nsudo add-apt-repository -y \"deb http://openresty.org/package/debian $(lsb_release -sc) openresty\"\nsudo apt-get update\n\n# \u5b89\u88c5 etcd\nwget https://github.com/etcd-io/etcd/releases/download/v3.4.13/etcd-v3.4.13-linux-amd64.tar.gz\ntar -xvf etcd-v3.4.13-linux-amd64.tar.gz && \\\n    cd etcd-v3.4.13-linux-amd64 && \\\n    sudo cp -a etcd etcdctl /usr/bin/\n\n# \u5b89\u88c5 OpenResty \u548c \u7f16\u8bd1\u5de5\u5177\nsudo apt-get install -y git openresty curl make openresty-openssl111-dev libpcre3 libpcre3-dev\n\n# \u5b89\u88c5 LuaRocks\ncurl https://raw.githubusercontent.com/apache/apisix/master/utils/linux-install-luarocks.sh -sL | bash -\n\n# \u5f00\u542f etcd server\nnohup etcd &\n")),(0,s.kt)("h2",{id:"mac-osx"},"Mac OSX"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5 OpenResty, etcd \u548c \u7f16\u8bd1\u5de5\u5177\nbrew install openresty/brew/openresty luarocks lua@5.1 etcd curl git pcre\n\n# \u5f00\u542f etcd server\nbrew services start etcd\n")))}u.isMDXComponent=!0}}]);