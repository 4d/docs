"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43503],{561875:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var d=n(474848),s=n(28453);const r={id:"method-get-attribute",title:"METHOD Get attribute",slug:"/commands/method-get-attribute",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/method-get-attribute",title:"METHOD Get attribute",description:"METHOD Get attribute ( path ; attribType {; *} ) -> \u623b\u308a\u5024",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-get-attribute.md",sourceDirName:"commands-legacy",slug:"/commands/method-get-attribute",permalink:"/docs/ja/commands/method-get-attribute",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"method-get-attribute",title:"METHOD Get attribute",slug:"/commands/method-get-attribute",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"FORM GET NAMES",permalink:"/docs/ja/commands/form-get-names"},next:{title:"METHOD GET ATTRIBUTES",permalink:"/docs/ja/commands/method-get-attributes"}},l={},h=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function x(t){const e={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"METHOD Get attribute"})," ( ",(0,d.jsx)(e.em,{children:"path"})," ; ",(0,d.jsx)(e.em,{children:"attribType"})," {; *} ) -> \u623b\u308a\u5024"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5f15\u6570"}),(0,d.jsx)(e.th,{children:"\u578b"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"path"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u306e\u30d1\u30b9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"attribType"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u53d6\u5f97\u3059\u308b\u5c5e\u6027\u30bf\u30a4\u30d7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"*"}),(0,d.jsx)(e.td,{children:"\u6f14\u7b97\u5b50"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u6307\u5b9a\u6642 = \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u5b9f\u884c\u3055\u308c\u305f\u3068\u304d\u3001\u30b3\u30de\u30f3\u30c9\u306f\u30db\u30b9\u30c8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u9069\u7528\u3055\u308c\u308b (\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u4ee5\u5916\u3067\u306f\u3053\u306e\u5f15\u6570\u306f\u7121\u8996\u3055\u308c\u307e\u3059)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u623b\u308a\u5024"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"True: \u5c5e\u6027\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u3001False: \u9078\u629e\u3055\u308c\u3066\u3044\u306a\u3044"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.em,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u306a\u30b3\u30fc\u30c9\u306b\u306f\u4f7f\u3048\u307e\u305b\u3093\u3002"})}),"\n",(0,d.jsx)(e.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"METHOD Get attribute"}),"\u30b3\u30de\u30f3\u30c9\u306f",(0,d.jsx)(e.em,{children:"path"}),"\u5f15\u6570\u3067\u6307\u5b9a\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u306e",(0,d.jsx)(e.em,{children:"attribType"}),"\u5c5e\u6027\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u306b\u5bfe\u3057\u3066\u306e\u307f\u52d5\u4f5c\u3057\u307e\u3059\u3002\u7121\u52b9\u306a\u30d1\u30b9\u3092\u6e21\u3059\u3068\u30a8\u30e9\u30fc\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"attribType"}),"\u5f15\u6570\u306b\u306f\u53d6\u5f97\u3059\u308b\u5c5e\u6027\u306e\u30bf\u30a4\u30d7\u3092\u6307\u5b9a\u3059\u308b\u5024\u3092\u6e21\u3057\u307e\u3059\u3002",(0,d.jsx)(e.em,{children:"Design Object Access"}),"\u30c6\u30fc\u30de\u306e\u4ee5\u4e0b\u306e\u5b9a\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5b9a\u6570"}),(0,d.jsx)(e.th,{children:"\u578b"}),(0,d.jsx)(e.th,{children:"\u5024"}),(0,d.jsx)(e.th,{children:"\u30b3\u30e1\u30f3\u30c8"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute executed on server"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"8"}),(0,d.jsx)(e.td,{children:'"\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u5b9f\u884c"\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute invisible"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:'"\u96a0\u3059"\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute published SOAP"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"3"}),(0,d.jsx)(e.td,{children:'"Web\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u63d0\u4f9b"\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute published SQL"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"7"}),(0,d.jsx)(e.td,{children:'"SQL\u5229\u7528\u53ef"\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute published Web"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{children:'"4D\u30bf\u30b0\u304a\u3088\u3073URL (4DACTION...) \u3067\u5229\u7528\u53ef"\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute published WSDL"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"4"}),(0,d.jsx)(e.td,{children:'"WSDL\u3067\u516c\u958b\u3059\u308b"\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute shared"}),(0,d.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"5"}),(0,d.jsx)(e.td,{children:'"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u30db\u30b9\u30c8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u5171\u6709\u3059\u308b"\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc'})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:["\u30b3\u30de\u30f3\u30c9\u304c\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u5b9f\u884c\u3055\u308c\u305f\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30e1\u30bd\u30c3\u30c9\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002",(0,d.jsx)(e.em,{children:"*"})," \u5f15\u6570\u3092\u6e21\u3059\u3068\u30db\u30b9\u30c8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u30e1\u30bd\u30c3\u30c9\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u30b3\u30de\u30f3\u30c9\u306f\u5c5e\u6027\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5834\u5408",(0,d.jsx)(e.strong,{children:"True"}),"\u3092\u3001\u9078\u629e\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408",(0,d.jsx)(e.strong,{children:"False"}),"\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/commands/method-set-attribute",children:"METHOD SET ATTRIBUTE"})})]})}function j(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,d.jsx)(e,{...t,children:(0,d.jsx)(x,{...t})}):x(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>c});var d=n(296540);const s={},r=d.createContext(s);function i(t){const e=d.useContext(r);return d.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),d.createElement(r.Provider,{value:e},t.children)}}}]);