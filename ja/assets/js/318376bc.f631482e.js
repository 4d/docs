"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52571"],{452278:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>m,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/disable-menu-item","title":"DISABLE MENU ITEM","description":"DISABLE MENU ITEM ( menu ; menuItem {; process} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/disable-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/disable-menu-item","permalink":"/docs/ja/20-R7/commands/disable-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisable-menu-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"disable-menu-item","title":"DISABLE MENU ITEM","slug":"/commands/disable-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE MENU ITEM","permalink":"/docs/ja/20-R7/commands/delete-menu-item"},"next":{"title":"Dynamic pop up menu","permalink":"/docs/ja/20-R7/commands/dynamic-pop-up-menu"}}'),d=s("785893"),r=s("250065");let i={id:"disable-menu-item",title:"DISABLE MENU ITEM",slug:"/commands/disable-menu-item",displayed_sidebar:"docs"},c=void 0,l={},m=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DISABLE MENU ITEM"})," ( ",(0,d.jsx)(n.em,{children:"menu"})," ; ",(0,d.jsx)(n.em,{children:"menuItem"})," {; ",(0,d.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menu"}),(0,d.jsx)(n.td,{children:"Integer, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u756A\u53F7\u307E\u305F\u306F\u30E1\u30CB\u30E5\u30FC\u53C2\u7167"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menuItem"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u756A\u53F7 \u307E\u305F\u306F -1: \u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"process"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D7\u30ED\u30BB\u30B9\u53C2\u7167\u756A\u53F7"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["DISABLE MENU ITEM \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(n.em,{children:"menu"}),"\u5F15\u6570\u306B\u30E1\u30CB\u30E5\u30FC\u756A\u53F7\u307E\u305F\u306F\u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u3067\u6307\u5B9A\u3057\u305F\u30E1\u30CB\u30E5\u30FC\u4E2D\u3001",(0,d.jsx)(n.em,{children:"menuItem"}),"\u5F15\u6570\u306B\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u756A\u53F7\u3067\u6307\u5B9A\u3057\u305F\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u3092\u9078\u629E\u4E0D\u53EF\u306B\u3057\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"menuItem"}),"\u306B-1\u3092\u6E21\u3059\u3068\u3001",(0,d.jsx)(n.em,{children:"menu"}),"\u306B\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570",(0,d.jsx)(n.em,{children:"process"}),"\u3092\u7701\u7565\u3059\u308B\u3068\u3001DISABLE MENU ITEM\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"process"}),"\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u306F\u3001",(0,d.jsx)(n.em,{children:"process"}),"\u306B\u6E21\u3055\u308C\u305F\u30D7\u30ED\u30BB\u30B9\u53C2\u7167\u756A\u53F7\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30CB\u30E5\u30FC\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"menuItem"})," \u5F15\u6570\u304C\u968E\u5C64\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u3092\u6307\u3059\u5834\u5408\u3001\u3053\u306E\u30E1\u30CB\u30E5\u30FC\u306E\u3059\u3079\u3066\u306E\u9805\u76EE\u3068\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u304C\u9078\u629E\u4E0D\u53EF\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/create-menu",title:"Create menu",children:"Create menu"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u6210\u3055\u308C\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-menu-bar",title:"SET MENU BAR",children:"SET MENU BAR"})," \u30B3\u30DE\u30F3\u30C9\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306B\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," ",(0,d.jsx)(n.em,{children:"menu"}),"\u306B",(0,d.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),"\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,d.jsx)(n.em,{children:"process"})," \u5F15\u6570\u306F\u610F\u5473\u3092\u6301\u305F\u305A\u3001\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Tip:"})," \u4E00\u5EA6\u306B\u3059\u3079\u3066\u306E\u9805\u76EE\u306E\u9078\u629E\u53EF/\u4E0D\u53EF\u3092\u5207\u308A\u66FF\u3048\u308B\u306B\u306F\u3001",(0,d.jsx)(n.em,{children:"menuItem"}),"\u306B0\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/enable-menu-item",children:"ENABLE MENU ITEM"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"150"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u306E\u4F7F\u7528\u306F\u4E0D\u53EF"}),(0,d.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);