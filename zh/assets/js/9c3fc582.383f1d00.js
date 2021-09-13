"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83902],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17679:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o={title:"Developer Guide"},l={unversionedId:"developer-guide",id:"developer-guide",isDocsHomePage:!1,title:"Developer Guide",description:"\x3c!--",source:"@site/docs/apisix-python-plugin-runner/developer-guide.md",sourceDirName:".",slug:"/developer-guide",permalink:"/zh/docs/python-plugin-runner/next/developer-guide",editUrl:"https://github.com/apache/apisix-python-plugin-runner/edit/master/docs/en/latest/developer-guide.md",version:"current",frontMatter:{title:"Developer Guide"},sidebar:"docs",previous:{title:"Getting started",permalink:"/zh/docs/python-plugin-runner/next/getting-started"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Debug",id:"debug",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Test",id:"test",children:[]},{value:"Data Format",id:"data-format",children:[]},{value:"Data Protocol",id:"data-protocol",children:[]}],u={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This documentation explains how to develop this project."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Python 3.6+"),(0,a.kt)("li",{parentName:"ul"},"APISIX 2.7.0")),(0,a.kt)("h2",{id:"debug"},"Debug"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"make setup")," Installation dependencies"),(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"make dev")," to start it")),(0,a.kt)("h2",{id:"plugin"},"Plugin"),(0,a.kt)("h4",{id:"plugin-directory"},"Plugin directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/path/to/apisix-python-plugin-runner/apisix/plugin\n")),(0,a.kt)("p",null,"the ",(0,a.kt)("inlineCode",{parentName:"p"},".py")," files in this directory autoload"),(0,a.kt)("h4",{id:"plugin-example"},"Plugin example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/path/to/apisix-python-plugin-runner/apisix/plugin/say.py\n")),(0,a.kt)("h4",{id:"plugin-format"},"Plugin Format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from apisix.runner.plugin.base import Base\nfrom apisix.runner.http.request import Request\nfrom apisix.runner.http.response import Response\n\n\nclass Test(Base):\n    def __init__(self):\n        super(Test, self).__init__(self.__class__.__name__)\n\n    def filter(self, request: Request, response: Response):\n        """\n        The plugin executes the main function\n        :param request:\n            request parameters and information\n        :param response:\n            response parameters and information\n        :return:\n        """\n        # Get plugin configuration information through `self.config`\n        # print(self.config)\n\n        # Set response headers\n        headers = request.headers\n        headers["X-Resp-A6-Runner"] = "Python"\n        response.headers = headers\n\n        # Set response body\n        response.body = "Hello, Python Runner of APISIX"\n\n        # Set response status code\n        response.status_code = 201\n\n        # Set the plug-in to `stop` type, default `rewrite`, use `self.rewrite()` to declare it as `rewrite` type.\n        self.stop()\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The plugin must inherit the ",(0,a.kt)("inlineCode",{parentName:"li"},"Base")," class"),(0,a.kt)("li",{parentName:"ul"},"The plugin must implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"filter")," function"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filter")," function parameters can only contain ",(0,a.kt)("inlineCode",{parentName:"li"},"Request")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Response")," classes as parameters"),(0,a.kt)("li",{parentName:"ul"},"Request parameter can get request information"),(0,a.kt)("li",{parentName:"ul"},"Response parameter can set response information"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"self.config")," can get plug-in configuration information"),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"self.stop()")," to set the plugin as a ",(0,a.kt)("inlineCode",{parentName:"li"},"stop")," type plugin, which will interrupt the request."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"self.rewrite()")," to set the plugin as a ",(0,a.kt)("inlineCode",{parentName:"li"},"rewrite")," type plugin, which will not interrupt the request.")),(0,a.kt)("h2",{id:"test"},"Test"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"make test"),"."),(0,a.kt)("h2",{id:"data-format"},"Data Format"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/flatbuffers"},"FlatBuffers")),(0,a.kt)("h2",{id:"data-protocol"},"Data Protocol"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1 byte of type + 3 bytes of length + data\n")))}s.isMDXComponent=!0}}]);