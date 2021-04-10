(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return i}));var n=a(3),l=a(8),r=(a(0),a(265)),b={title:"i18n User Guide"},o={unversionedId:"I18N_USER_GUIDE",id:"I18N_USER_GUIDE",isDocsHomePage:!1,title:"i18n User Guide",description:"\x3c!--",source:"@site/docs/apisix-dashboard/I18N_USER_GUIDE.md",slug:"/I18N_USER_GUIDE",permalink:"/zh/docs/dashboard/I18N_USER_GUIDE",editUrl:"https://github.com/apache/apisix-dashboard/edit/master/docs/zh/latest/I18N_USER_GUIDE.md",version:"current",sidebar:"docs",previous:{title:"Development Guide",permalink:"/zh/docs/dashboard/develop"},next:{title:"Frontend E2E",permalink:"/zh/docs/dashboard/front-end-e2e"}},c=[{value:"Location of locale configuration",id:"location-of-locale-configuration",children:[]},{value:"How to name the key for each locale filed",id:"how-to-name-the-key-for-each-locale-filed",children:[]},{value:"Global locale keys",id:"global-locale-keys",children:[]},{value:"Recommended subkey naming",id:"recommended-subkey-naming",children:[]}],p={toc:c};function i(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Apache APISIX Dashboard uses ",Object(r.b)("a",{parentName:"p",href:"https://umijs.org/plugins/plugin-locale"},"@umijs/plugin-locale")," to solve the i18n issues, in order to make the i18n more clear and reasonable, we would recommend to obey the following rules"),Object(r.b)("h2",{id:"location-of-locale-configuration"},"Location of locale configuration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Please put ",Object(r.b)("strong",{parentName:"li"},"the global locales")," under ",Object(r.b)("inlineCode",{parentName:"li"},"src/locales"),"."),Object(r.b)("li",{parentName:"ul"},"Please put ",Object(r.b)("strong",{parentName:"li"},"each page's locale file")," under ",Object(r.b)("inlineCode",{parentName:"li"},"src/pages/$PAGE/locales")," folder."),Object(r.b)("li",{parentName:"ul"},"Please put ",Object(r.b)("strong",{parentName:"li"},"the Component's locale file")," under ",Object(r.b)("inlineCode",{parentName:"li"},"src/components/$COMPONENT/locales")," folder, and we ",Object(r.b)("strong",{parentName:"li"},"MUST")," import them manually")),Object(r.b)("h2",{id:"how-to-name-the-key-for-each-locale-filed"},"How to name the key for each locale filed"),Object(r.b)("p",null,"the key can be like this : ","[basicModule]",".","[moduleName]",".","[elementName]",".","[...desc]"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"what's the first tow levels? e.g: ",Object(r.b)("inlineCode",{parentName:"p"},"app.pwa"),", ",Object(r.b)("inlineCode",{parentName:"p"},"page.consumer"),", ",Object(r.b)("inlineCode",{parentName:"p"},"component.actionBar"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The subkeys are divided into $element + $description style e.g: ",Object(r.b)("inlineCode",{parentName:"p"},"app.pwa.message.offline"),", ",Object(r.b)("inlineCode",{parentName:"p"},"component.actionBar.button.nextStep")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If the the text is the part of a element, we can use ","[elementNameProps]"," e.g: ",Object(r.b)("inlineCode",{parentName:"li"},"page.consumer.proTableColumns.username"),"."),Object(r.b)("li",{parentName:"ul"},"If there are two or more same level part locales of a element, we can add number suffix e.g: ",Object(r.b)("inlineCode",{parentName:"li"},"page.route.form.itemRulesExtraMessage1.path"),", ",Object(r.b)("inlineCode",{parentName:"li"},"page.route.form.itemRulesExtraMessage2.path"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"common texts, we should not repeat in other part, and the common locale key omit ","[elementName]"," would be better."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If the text is used in two or more places inside the module, we would recommend sharing the text in the module, e.g:",Object(r.b)("inlineCode",{parentName:"li"},"page.route.parameterPosition"),"."),Object(r.b)("li",{parentName:"ul"},"If the text is used in two or more places between modules, we would recommend sharing the text globally, and add",Object(r.b)("inlineCode",{parentName:"li"},"global"),"as the moduleName,git e.g:",Object(r.b)("inlineCode",{parentName:"li"},"component.global.confirm"),".")))),Object(r.b)("h2",{id:"global-locale-keys"},"Global locale keys"),Object(r.b)("p",null,"we have already defined many global keys, before you do i18n, you can refer to ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/blob/master/web/src/locales/zh-CN/component.ts"},"those"),"."),Object(r.b)("h2",{id:"recommended-subkey-naming"},"Recommended subkey naming"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Form"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"element"),Object(r.b)("th",{parentName:"tr",align:null},"props"),Object(r.b)("th",{parentName:"tr",align:null},"locale subKey"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Form.Item"),Object(r.b)("td",{parentName:"tr",align:null},"label"),Object(r.b)("td",{parentName:"tr",align:null},"form.itemLabel")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Form.Item"),Object(r.b)("td",{parentName:"tr",align:null},"rules.required"),Object(r.b)("td",{parentName:"tr",align:null},"form.itemRulesRequiredMessage")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Form.Item"),Object(r.b)("td",{parentName:"tr",align:null},"rules.pattern"),Object(r.b)("td",{parentName:"tr",align:null},"form.itemRulesPatternMessage")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Form.Item"),Object(r.b)("td",{parentName:"tr",align:null},"extra"),Object(r.b)("td",{parentName:"tr",align:null},"form.itemExtraMessage")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"'page.route.form.itemRulesExtraMessage.parameterName': '\u4ec5\u652f\u6301\u5b57\u6bcd\u548c\u6570\u5b57\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934',\n'page.route.form.itemRulesPatternMessage.apiNameRule': '\u6700\u5927\u957f\u5ea6100\uff0c\u4ec5\u652f\u6301\u5b57\u6bcd\u3001\u6570\u5b57\u3001- \u548c _\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934',\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Input"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"element"),Object(r.b)("th",{parentName:"tr",align:null},"props"),Object(r.b)("th",{parentName:"tr",align:null},"locale subKey"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Input"),Object(r.b)("td",{parentName:"tr",align:null},"placeholder"),Object(r.b)("td",{parentName:"tr",align:null},"input.placeholder")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"'page.route.input.placeholder.parameterNameHttpHeader': '\u8bf7\u6c42\u5934\u952e\u540d\uff0c\u4f8b\u5982\uff1aHOST',\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Button"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"element"),Object(r.b)("th",{parentName:"tr",align:null},"props"),Object(r.b)("th",{parentName:"tr",align:null},"locale subKey"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Button"),Object(r.b)("td",{parentName:"tr",align:null},"null"),Object(r.b)("td",{parentName:"tr",align:null},"button")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"'page.route.button.returnList': '\u8fd4\u56de\u8def\u7531\u5217\u8868',\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Steps"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"element"),Object(r.b)("th",{parentName:"tr",align:null},"props"),Object(r.b)("th",{parentName:"tr",align:null},"locale subKey"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Steps.step"),Object(r.b)("td",{parentName:"tr",align:null},"title"),Object(r.b)("td",{parentName:"tr",align:null},"steps.stepTitle")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"'page.route.steps.stepTitle.defineApiRequest': '\u8bbe\u7f6e\u8def\u7531\u4fe1\u606f',\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Select"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"element"),Object(r.b)("th",{parentName:"tr",align:null},"props"),Object(r.b)("th",{parentName:"tr",align:null},"locale subKey"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Select.Option"),Object(r.b)("td",{parentName:"tr",align:null},"null"),Object(r.b)("td",{parentName:"tr",align:null},"select.option")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"'page.route.select.option.enableHttps': '\u542f\u7528 HTTPS',\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Radio"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"element"),Object(r.b)("th",{parentName:"tr",align:null},"props"),Object(r.b)("th",{parentName:"tr",align:null},"locale subKey"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Radio"),Object(r.b)("td",{parentName:"tr",align:null},"null"),Object(r.b)("td",{parentName:"tr",align:null},"radio")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"'page.route.radio.staySame': '\u4fdd\u6301\u539f\u6837',\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ProTable"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"element"),Object(r.b)("th",{parentName:"tr",align:null},"props"),Object(r.b)("th",{parentName:"tr",align:null},"locale subKey"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ProTable"),Object(r.b)("td",{parentName:"tr",align:null},"columns.title"),Object(r.b)("td",{parentName:"tr",align:null},"proTable.columnsTitle")))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"ProTable usually appears in conjunction with forms, and columns title are same with form item label, so we recommend these title keys to be the common key in modules.")))}i.isMDXComponent=!0},265:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=l.a.createContext({}),i=function(e){var t=l.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=i(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(a),s=n,d=m["".concat(b,".").concat(s)]||m[s]||u[s]||r;return a?l.a.createElement(d,o(o({ref:t},p),{},{components:a})):l.a.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var p=2;p<r;p++)b[p]=a[p];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);