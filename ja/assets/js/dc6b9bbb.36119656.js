"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21229"],{875993:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/get-menu-bar-reference","title":"Get menu bar reference","description":"Get menu bar reference {( process )} : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-menu-bar-reference.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-bar-reference","permalink":"/docs/ja/commands/get-menu-bar-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-bar-reference.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-menu-bar-reference","title":"Get menu bar reference","slug":"/commands/get-menu-bar-reference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ENABLE MENU ITEM","permalink":"/docs/ja/commands/enable-menu-item"},"next":{"title":"Get menu item","permalink":"/docs/ja/commands/get-menu-item"}}'),s=r("785893"),c=r("250065");let d={id:"get-menu-bar-reference",title:"Get menu bar reference",slug:"/commands/get-menu-bar-reference",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get menu bar reference"})," {( ",(0,s.jsx)(n.em,{children:"process"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"process"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30D7\u30ED\u30BB\u30B9\u53C2\u7167\u756A\u53F7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u30D0\u30FCID"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get menu bar reference"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3042\u308B\u3044\u306F\u6307\u5B9A\u3055\u308C\u305F\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306EID\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u304C",(0,s.jsx)(n.a,{href:"/docs/ja/commands/create-menu",children:"Create menu"})," \u30B3\u30DE\u30F3\u30C9\u3067\u4F5C\u6210\u3055\u308C\u305F\u5834\u5408\u3001\u3053\u306EID\u306F\u4F5C\u6210\u3055\u308C\u305F\u30E1\u30CB\u30E5\u30FC\u306E\u53C2\u7167ID\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u7279\u5B9A\u306E\u5185\u90E8ID(*)\u3092\u8FD4\u3057\u307E\u3059\u3002\u3044\u305A\u308C\u306E\u5834\u5408\u3082\u3001\u3053\u306E",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," ID\u306F\u3001\u3053\u306E\u30C6\u30FC\u30DE\u306E\u4ED6\u306E\u3059\u3079\u3066\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["(*) \u3053\u306E\u7279\u5B9A\u306EID \u306F\u4E00\u6642\u7684\u306A\u3082\u306E\u3067\u3042\u308A\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/commands/set-menu-bar",children:"SET MENU BAR"})," \u3067\u4ED6\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u3068\u305D\u306EID\u306F\u7121\u52B9\u306A\u3082\u306E\u306B\u306A\u308A\u307E\u3059\u3002\u30E1\u30CB\u30E5\u30FC\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u4F5C\u6210\u3057\u305F\u30E1\u30CB\u30E5\u30FC\u306E\u53C2\u7167\u3092\u4FDD\u6301\u3057\u305F\u3044\u5834\u5408\u306B\u306F\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/commands/create-menu",children:"Create menu"})," \u3092\u4F7F\u7528\u3057\u3066\u305D\u308C\u3092\u30E1\u30E2\u30EA\u5185\u306B\u30B3\u30D4\u30FC\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$vEditorRef:=Get menu bar reference(Frontmost process)\xa0//\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u4F5C\u6210\u3055\u308C\u305F\u30E1\u30CB\u30E5\u30FC\n\xa0$vMenuRef:=Create menu($vEditorRef)\xa0//\u30E1\u30CB\u30E5\u30FC\u3092\u30B3\u30D4\u30FC\u3057\u3066\u304A\u304F\n\xa0SET MENU BAR(2)\xa0//\u4ED6\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3092\u5B9F\u88C5\u3059\u308B\n\xa0...\xa0// \u30B3\u30FC\u30C9\u3092\u5B9F\u884C\n\xa0SET MENU BAR($vMenuRef)\xa0//\u5143\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306B\u623B\u308B\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"process"})," \u5F15\u6570\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FCID\u3092\u53D6\u5F97\u3059\u308B\u30D7\u30ED\u30BB\u30B9\u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FCID\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/get-menu-items",title:"GET MENU ITEMS",children:"GET MENU ITEMS"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/commands/set-menu-bar",children:"SET MENU BAR"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"979"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var t=r(667294);let s={},c=t.createContext(s);function d(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);