"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76497"],{326599:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/create-menu","title":"Create menu","description":"Create menu {( menu )} : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-menu.md","sourceDirName":"commands-legacy","slug":"/commands/create-menu","permalink":"/docs/ja/20-R7/commands/create-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-menu.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-menu","title":"Create menu","slug":"/commands/create-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Count menus","permalink":"/docs/ja/20-R7/commands/count-menus"},"next":{"title":"DELETE MENU ITEM","permalink":"/docs/ja/20-R7/commands/delete-menu-item"}}'),r=s("785893"),d=s("250065");let c={id:"create-menu",title:"Create menu",slug:"/commands/create-menu",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function m(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Create menu"})," {( ",(0,r.jsx)(n.em,{children:"menu"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Text, Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u53C2\u7167 \u307E\u305F\u306F \u756A\u53F7 \u307E\u305F\u306F \u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u540D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u53C2\u7167"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsx)(n.p,{children:"Create menu \u30B3\u30DE\u30F3\u30C9\u306F\u30E1\u30E2\u30EA\u306B\u65B0\u3057\u3044\u30E1\u30CB\u30E5\u30FC\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u30E1\u30CB\u30E5\u30FC\u306F\u30E1\u30E2\u30EA\u4E0A\u306B\u306E\u307F\u5B58\u5728\u3057\u3001\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306E \u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306B\u306F\u8FFD\u52A0\u3055\u308C\u307E\u305B\u3093\u3002\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B\u3053\u306E\u30E1\u30CB\u30E5\u30FC\u306B\u5BFE\u3057\u3066\u884C\u308F\u308C\u305F\u66F4\u65B0\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u3001\u3053\u306E\u30E1\u30CB\u30E5\u30FC\u3059\u3079\u3066\u306E\u30A4\u30F3\u30B9\u30BF \u30F3\u30B9\u306B\u5373\u5EA7\u306B\u53CD\u6620\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u306F\u65B0\u3057\u3044\u30E1\u30CB\u30E5\u30FC\u306E",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),"\u578B\u306EID\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,r.jsx)(n.em,{children:"menu"}),"\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001\u7A7A\u306E\u30E1\u30CB\u30E5\u30FC\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/release-menu",children:"RELEASE MENU"})," \u3084",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-menu-item",children:"SET MENU ITEM"}),"\u306A\u3069\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30E1\u30CB\u30E5\u30FC\u3092\u69CB\u7BC9\u3001\u7BA1\u7406\u3057\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"menu"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u4F5C\u6210\u3055\u308C\u308B\u30E1\u30CB\u30E5\u30FC\u306F\u30BD\u30FC\u30B9\u30E1\u30CB\u30E5\u30FC\u306E\u5B8C\u5168\u306A\u30B3\u30D4\u30FC\u3068\u306A\u308A\u307E\u3059\u3002\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u3092\u542B\u3080\u3001\u30BD\u30FC\u30B9\u30E1\u30CB\u30E5\u30FC\u306E\u3059\u3079\u3066\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u3001\u65B0\u3057\u3044\u30E1\u30CB\u30E5\u30FC\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u65B0\u3057\u3044",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),"\u53C2\u7167\u304C\u30BD\u30FC\u30B9\u30E1\u30CB\u30E5\u30FC\u3068\u65E2\u5B58\u306E\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u306B\u4F5C\u6210\u3055\u308C\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"menu"})," \u5F15\u6570\u306B\u306F\u3001\u6709\u52B9\u306A\u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u3001\u307E\u305F\u306F\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u3067\u5B9A\u7FA9\u3057\u305F\u30E1\u30CB\u30E5\u30FC\u540D\u3084\u30E1\u30CB\u30E5\u30FC\u756A\u53F7\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u6700\u5F8C\u306E\u30B1\u30FC\u30B9\u3067\u306F\u3001\u65B0\u3057\u3044\u30E1\u30CB\u30E5\u30FC\u306F\u30BD\u30FC\u30B9\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306E\u30E1\u30CB\u30E5\u30FC\u3084\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8:"})," ",(0,r.jsx)(n.em,{children:"menu"})," \u5F15\u6570\u306B\u7121\u52B9\u306A\u5024\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u7A7A\u306E\u30E1\u30CB\u30E5\u30FC\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u4F5C\u6210\u3055\u308C\u305F\u30E1\u30CB\u30E5\u30FC\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-menu-bar",children:"SET MENU BAR"})," \u30B3\u30DE\u30F3\u30C9\u3067\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/create-menu",children:"Create menu"}),"\u3067\u4F5C\u6210\u3057\u305F\u30E1\u30CB\u30E5\u30FC\u304C\u5FC5\u8981\u306A\u304F\u306A\u3063\u305F\u3068\u304D\u306B\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/release-menu",children:"RELEASE MENU"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3066\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u30E1\u30E2\u30EA\u3092\u89E3\u653E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-menu-bar",title:"SET MENU BAR",children:"SET MENU BAR"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u3092\u53C2\u7167\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/release-menu",children:"RELEASE MENU"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-menu-bar",children:"SET MENU BAR"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"408"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return c}});var t=s(667294);let r={},d=t.createContext(r);function c(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);