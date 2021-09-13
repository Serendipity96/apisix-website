"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65397],{86500:function(e,t,i){i.r(t);var n=i(67294),a=i(29163),r=i(7635),o=i(52263),l=a.ZP.h1.withConfig({displayName:"plugins__PageTitle",componentId:"okj77r-0"})(["text-align:center;margin-top:1rem;font-size:3rem;font-weight:700;text-transform:uppercase;"]),m=a.ZP.div.withConfig({displayName:"plugins__PageSubtitle",componentId:"okj77r-1"})(["text-align:center;font-size:1rem;margin-bottom:2rem;font-weight:400;"]),p=a.ZP.div.withConfig({displayName:"plugins__SidebarItem",componentId:"okj77r-2"})(["padding-top:3px;padding-bottom:3px;padding-right:3px;text-align:right;font-size:1rem;font-weight:400;text-transform:capitalize;color:#d0312d;"]),d=a.ZP.div.withConfig({displayName:"plugins__Page",componentId:"okj77r-3"})(["max-width:var(--ifm-container-width);margin:0 auto;padding:2rem var(--ifm-spacing-horizontal);width:100%;flex-wrap:wrap;gridTemplateAreas:\"'SidebarContainer' 'PluginsContainer'\";"]),g=a.ZP.div.withConfig({displayName:"plugins__PluginsContainer",componentId:"okj77r-4"})(["display:grid;margin-left:200px;grid-template-columns:repeat(3,1fr);grid-gap:5px;@media (max-width:1200px){margin-left:0;}@media (max-width:812px){grid-template-columns:repeat(2,1fr);}@media (max-width:576px){grid-template-columns:repeat(1,1fr);}"]),s=a.ZP.div.withConfig({displayName:"plugins__SidebarContainer",componentId:"okj77r-5"})(["display:grid;width:250px;position:fixed;z-index:1;left:0;overflow-x:hidden;top:300px;padding-right:10px;border-style:solid;border-color:#ffffff #efeff5 #ffffff #ffffff;@media (max-width:1200px){display:none;}"]),c=a.ZP.a.withConfig({displayName:"plugins__PluginCard",componentId:"okj77r-6"})(["border-radius:0.75rem;border:1px solid #eee;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);display:flex;flex-direction:column;align-items:left;text-align:left;padding:1rem;min-width:calc(180px + 5rem);cursor:pointer;height:100%;&:hover{color:inherit;text-decoration:none;}"]),f=a.ZP.div.withConfig({displayName:"plugins__PluginIcon",componentId:"okj77r-7"})(["padding:1rem;display:flex;min-height:200px;align-items:center;justify-content:center;"]),u=a.ZP.div.withConfig({displayName:"plugins__PluginName",componentId:"okj77r-8"})(["font-size:1rem;font-weight:600;margin-top:12px;margin-bottom:-4px;line-height:1rem;text-align:left;text-transform:capitalize;"]),h=a.ZP.div.withConfig({displayName:"plugins__PluginDescription",componentId:"okj77r-9"})(["font-size:0.8rem;font-weight:500;margin-top:10px;color:#7e7c7c;text-align:left;"]),x=a.ZP.h2.withConfig({displayName:"plugins__SectionTitle",componentId:"okj77r-10"})(["margin-left:200px;margin-bottom:24px;margin-top:84px;text-transform:uppercase;@media (max-width:1200px){margin-left:0;}"]);function w(e){(0,n.useEffect)((function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="/js/plugin-icon.js",document.head.appendChild(e)}),[]);var t=(0,o.default)().siteConfig,i=t.customFields.plugins.map((function(e){return n.createElement(p,{key:e.groupName},n.createElement("a",{className:"sidebar-link",href:"#"+e.groupName},e.groupName))})),a=t.customFields.plugins.map((function(e){var t=e.plugins.map((function(e){return n.createElement("div",{key:e.name},n.createElement(c,{href:"https://apisix.apache.org/docs/apisix/plugins/"+e.name,target:"_blank"},n.createElement(f,null,e.useDefaultIcon?n.createElement("img",{className:"plugin-logo shadow default",src:"/img/plugin/default-icon.png",alt:e.name}):n.createElement("svg",{className:"plugin-logo shadow","aria-hidden":"true"},n.createElement("use",{xlinkHref:"#icon"+e.name}))),n.createElement(u,null,e.name),n.createElement(h,null,e.description),n.createElement("span",{className:"read-more-link"},"Read more >")))}));return n.createElement("div",{key:e.groupName},n.createElement(x,{id:e.groupName},e.groupName),n.createElement(g,null,t))}));return n.createElement(d,null,n.createElement(l,null,"Apache APISIX\xae\ufe0f Plugin Hub"),n.createElement(m,null,"Powerful Plugins and Easy Integrations"),n.createElement(s,null,i),a)}t.default=function(e){return n.createElement(r.Z,null,n.createElement(w,e))}}}]);