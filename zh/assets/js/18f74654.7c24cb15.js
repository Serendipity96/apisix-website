"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88874],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48555:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o={title:"\u8bc1\u4e66"},c=void 0,s={unversionedId:"certificate",id:"certificate",isDocsHomePage:!1,title:"\u8bc1\u4e66",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/certificate.md",sourceDirName:".",slug:"/certificate",permalink:"/zh/docs/apisix/next/certificate",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/certificate.md",tags:[],version:"current",frontMatter:{title:"\u8bc1\u4e66"},sidebar:"docs",previous:{title:"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e",permalink:"/zh/docs/apisix/next/customize-nginx-configuration"},next:{title:"\u6279\u5904\u7406\u5668",permalink:"/zh/docs/apisix/next/batch-processor"}},p=[{value:"\u5355\u4e00\u57df\u540d\u6307\u5b9a",id:"\u5355\u4e00\u57df\u540d\u6307\u5b9a",children:[]},{value:"\u6cdb\u57df\u540d",id:"\u6cdb\u57df\u540d",children:[]},{value:"\u591a\u57df\u540d\u7684\u60c5\u51b5",id:"\u591a\u57df\u540d\u7684\u60c5\u51b5",children:[]},{value:"\u5355\u57df\u540d\u591a\u8bc1\u4e66\u7684\u60c5\u51b5",id:"\u5355\u57df\u540d\u591a\u8bc1\u4e66\u7684\u60c5\u51b5",children:[]}],l={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"APISIX")," \u652f\u6301\u901a\u8fc7 TLS \u6269\u5c55 SNI \u5b9e\u73b0\u52a0\u8f7d\u7279\u5b9a\u7684 SSL \u8bc1\u4e66\u4ee5\u5b9e\u73b0\u5bf9 https \u7684\u652f\u6301\u3002"),(0,a.kt)("p",null,"SNI(Server Name Indication)\u662f\u7528\u6765\u6539\u5584 SSL \u548c TLS \u7684\u4e00\u9879\u7279\u6027\uff0c\u5b83\u5141\u8bb8\u5ba2\u6237\u7aef\u5728\u670d\u52a1\u5668\u7aef\u5411\u5176\u53d1\u9001\u8bc1\u4e66\u4e4b\u524d\u5411\u670d\u52a1\u5668\u7aef\u53d1\u9001\u8bf7\u6c42\u7684\u57df\u540d\uff0c\u670d\u52a1\u5668\u7aef\u6839\u636e\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u57df\u540d\u9009\u62e9\u5408\u9002\u7684 SSL \u8bc1\u4e66\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("h3",{id:"\u5355\u4e00\u57df\u540d\u6307\u5b9a"},"\u5355\u4e00\u57df\u540d\u6307\u5b9a"),(0,a.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\u4e00\u4e2a SSL \u8bc1\u4e66\u53ea\u5305\u542b\u4e00\u4e2a\u9759\u6001\u57df\u540d\uff0c\u914d\u7f6e\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl")," \u53c2\u6570\u5bf9\u8c61\uff0c\u5b83\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"cert"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"sni"),"\u4e09\u4e2a\u5c5e\u6027\uff0c\u8be6\u7ec6\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cert"),": SSL \u5bc6\u94a5\u5bf9\u7684\u516c\u94a5\uff0cpem \u683c\u5f0f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key"),": SSL \u5bc6\u94a5\u5bf9\u7684\u79c1\u94a5\uff0cpem \u683c\u5f0f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"snis"),": SSL \u8bc1\u4e66\u6240\u6307\u5b9a\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u57df\u540d\uff0c\u6ce8\u610f\u5728\u8bbe\u7f6e\u8fd9\u4e2a\u53c2\u6570\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u786e\u4fdd\u8fd9\u4e2a\u8bc1\u4e66\u5bf9\u5e94\u7684\u79c1\u94a5\u662f\u6709\u6548\u7684\u3002")),(0,a.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u793a\u4f8b\uff0c\u6211\u4eec\u4f1a\u4f7f\u7528\u4e0b\u9762\u7684 Python \u811a\u672c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python\n# coding: utf-8\n# save this file as ssl.py\nimport sys\n# sudo pip install requests\nimport requests\n\nif len(sys.argv) <= 3:\n    print("bad argument")\n    sys.exit(1)\nwith open(sys.argv[1]) as f:\n    cert = f.read()\nwith open(sys.argv[2]) as f:\n    key = f.read()\nsni = sys.argv[3]\napi_key = "edd1c9f034335f136f87ad84b625c8f1"\nresp = requests.put("http://127.0.0.1:9080/apisix/admin/ssl/1", json={\n    "cert": cert,\n    "key": key,\n    "snis": [sni],\n}, headers={\n    "X-API-KEY": api_key,\n})\nprint(resp.status_code)\nprint(resp.text)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# \u521b\u5efa SSL \u5bf9\u8c61\n./ssl.py t.crt t.key test.com\n\n# \u521b\u5efa Router \u5bf9\u8c61\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/hello",\n    "hosts": ["test.com"],\n    "methods": ["GET"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n\n# \u6d4b\u8bd5\u4e00\u4e0b\n\ncurl --resolve \'test.com:9443:127.0.0.1\' https://test.com:9443/hello  -vvv\n* Added test.com:9443:127.0.0.1 to DNS cache\n* About to connect() to test.com port 9443 (#0)\n*   Trying 127.0.0.1...\n* Connected to test.com (127.0.0.1) port 9443 (#0)\n* Initializing NSS with certpath: sql:/etc/pki/nssdb\n* skipping SSL peer certificate verification\n* SSL connection using TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\n* Server certificate:\n*   subject: CN=test.com,O=iresty,L=ZhuHai,ST=GuangDong,C=CN\n*   start date: Jun 24 22:18:05 2019 GMT\n*   expire date: May 31 22:18:05 2119 GMT\n*   common name: test.com\n*   issuer: CN=test.com,O=iresty,L=ZhuHai,ST=GuangDong,C=CN\n> GET /hello HTTP/1.1\n> User-Agent: curl/7.29.0\n> Host: test.com:9443\n> Accept: */*\n')),(0,a.kt)("h3",{id:"\u6cdb\u57df\u540d"},"\u6cdb\u57df\u540d"),(0,a.kt)("p",null,"\u4e00\u4e2a SSL \u8bc1\u4e66\u7684\u57df\u540d\u4e5f\u53ef\u80fd\u5305\u542b\u6cdb\u57df\u540d\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.test.com"),"\uff0c\u5b83\u4ee3\u8868\u6240\u6709\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"test.com")," \u7ed3\u5c3e\u7684\u57df\u540d\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5\u8bc1\u4e66\u3002\n\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.test.com"),"\uff0c\u53ef\u4ee5\u5339\u914d ",(0,a.kt)("inlineCode",{parentName:"p"},"www.test.com"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"mail.test.com"),"\u3002"),(0,a.kt)("p",null,"\u770b\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u8bf7\u6ce8\u610f\u6211\u4eec\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"*.test.com")," \u4f5c\u4e3a sni \u4f20\u9012\u8fdb\u6765:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'./ssl.py t.crt t.key \'*.test.com\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/hello",\n    "hosts": ["*.test.com"],\n    "methods": ["GET"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n\n# \u6d4b\u8bd5\u4e00\u4e0b\n\ncurl --resolve \'www.test.com:9443:127.0.0.1\' https://www.test.com:9443/hello  -vvv\n* Added test.com:9443:127.0.0.1 to DNS cache\n* About to connect() to test.com port 9443 (#0)\n*   Trying 127.0.0.1...\n* Connected to test.com (127.0.0.1) port 9443 (#0)\n* Initializing NSS with certpath: sql:/etc/pki/nssdb\n* skipping SSL peer certificate verification\n* SSL connection using TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\n* Server certificate:\n*   subject: CN=test.com,O=iresty,L=ZhuHai,ST=GuangDong,C=CN\n*   start date: Jun 24 22:18:05 2019 GMT\n*   expire date: May 31 22:18:05 2119 GMT\n*   common name: test.com\n*   issuer: CN=test.com,O=iresty,L=ZhuHai,ST=GuangDong,C=CN\n> GET /hello HTTP/1.1\n> User-Agent: curl/7.29.0\n> Host: test.com:9443\n> Accept: */*\n')),(0,a.kt)("h3",{id:"\u591a\u57df\u540d\u7684\u60c5\u51b5"},"\u591a\u57df\u540d\u7684\u60c5\u51b5"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a SSL \u8bc1\u4e66\u5305\u542b\u591a\u4e2a\u72ec\u7acb\u57df\u540d\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"www.test.com")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"mail.test.com"),"\uff0c\n\u4f60\u53ef\u4ee5\u628a\u5b83\u4eec\u90fd\u653e\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"snis")," \u6570\u7ec4\u4e2d\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "snis": ["www.test.com", "mail.test.com"]\n}\n')),(0,a.kt)("h3",{id:"\u5355\u57df\u540d\u591a\u8bc1\u4e66\u7684\u60c5\u51b5"},"\u5355\u57df\u540d\u591a\u8bc1\u4e66\u7684\u60c5\u51b5"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u671f\u671b\u4e3a\u4e00\u4e2a\u57df\u540d\u914d\u7f6e\u591a\u5f20\u8bc1\u4e66\uff0c\u4f8b\u5982\u4ee5\u6b64\u6765\u540c\u65f6\u652f\u6301\u4f7f\u7528 ECC \u548c RSA\n\u7684\u5bc6\u94a5\u4ea4\u6362\u7b97\u6cd5\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u5c06\u989d\u5916\u7684\u8bc1\u4e66\u548c\u79c1\u94a5\uff08\u7b2c\u4e00\u5f20\u8bc1\u4e66\u548c\u5176\u79c1\u94a5\u4f9d\u7136\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"cert")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\uff09\u914d\u7f6e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"certs")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"keys")," \u4e2d\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"certs"),"\uff1aPEM \u683c\u5f0f\u7684 SSL \u8bc1\u4e66\u5217\u8868"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keys"),"\uff1aPEM \u683c\u5f0f\u7684 SSL \u8bc1\u4e66\u79c1\u94a5\u5217\u8868")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"APISIX")," \u4f1a\u5c06\u76f8\u540c\u4e0b\u6807\u7684\u8bc1\u4e66\u548c\u79c1\u94a5\u914d\u5bf9\u4f7f\u7528\uff0c\u56e0\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"certs")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"keys")," \u5217\u8868\u7684\u957f\u5ea6\u5fc5\u987b\u4e00\u81f4\u3002"))}u.isMDXComponent=!0}}]);