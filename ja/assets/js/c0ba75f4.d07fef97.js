"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43068"],{826470:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/get-menu-items","title":"GET MENU ITEMS","description":"GET MENU ITEMS ( menu ; menuTitlesArray ; menuRefsArray )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-menu-items.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-items","permalink":"/docs/ja/commands/get-menu-items","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-items.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-menu-items","title":"GET MENU ITEMS","slug":"/commands/get-menu-items","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item style","permalink":"/docs/ja/commands/get-menu-item-style"},"next":{"title":"Get menu title","permalink":"/docs/ja/commands/get-menu-title"}}'),s=t("785893"),d=t("250065");let i={id:"get-menu-items",title:"GET MENU ITEMS",slug:"/commands/get-menu-items",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function m(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET MENU ITEMS"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"menuTitlesArray"})," ; ",(0,s.jsx)(n.em,{children:"menuRefsArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u307E\u305F\u306F\u30E1\u30CB\u30E5\u30FC\u756A\u53F7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menuTitlesArray"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u30BF\u30A4\u30C8\u30EB\u914D\u5217"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menuRefsArray"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u914D\u5217"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:["GET MENU ITEMS \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(n.em,{children:"menu"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30E1\u30CB\u30E5\u30FC\u307E\u305F\u306F\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306E\u30BF\u30A4\u30C8\u30EB\u3068ID\u3092",(0,s.jsx)(n.em,{children:"menuTitlesArray"})," \u3068 ",(0,s.jsx)(n.em,{children:"menuRefsArray"})," \u914D\u5217\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"menu"})," \u5F15\u6570\u306B\u306F\u30E1\u30CB\u30E5\u30FC\u53C2\u7167 (",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),")\u3001\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u756A\u53F7\u3001\u307E\u305F\u306F",(0,s.jsx)(n.a,{href:"/docs/ja/commands/get-menu-bar-reference",title:"Get menu bar reference",children:"Get menu bar reference"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u53D6\u5F97\u3057\u305F\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u9805\u76EE\u306B\u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u5BFE\u5FDC\u3059\u308B\u914D\u5217\u8981\u7D20\u306B\u306F\u7A7A\u306E\u6587\u5B57\u5217\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306E\u5185\u5BB9\u3092\u53D6\u5F97\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(menuTitlesArray;0)\n\xa0ARRAY TEXT(menuRefsArray;0)\n\xa0MenuBarRef:=Get menu bar reference(Frontmost process)\n\xa0GET MENU ITEMS(MenuBarRef;menuTitlesArray;menuRefsArray)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"977"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);