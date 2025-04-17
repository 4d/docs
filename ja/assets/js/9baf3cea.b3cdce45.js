"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16392"],{42607:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>m,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/set-menu-item-method","title":"SET MENU ITEM METHOD","description":"SET MENU ITEM METHOD ( menu ; menuItem ; methodName {; process} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/set-menu-item-method.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-method","permalink":"/docs/ja/commands/set-menu-item-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-method.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-menu-item-method","title":"SET MENU ITEM METHOD","slug":"/commands/set-menu-item-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM MARK","permalink":"/docs/ja/commands/set-menu-item-mark"},"next":{"title":"SET MENU ITEM PARAMETER","permalink":"/docs/ja/commands/set-menu-item-parameter"}}'),d=t("785893"),r=t("250065");let i={id:"set-menu-item-method",title:"SET MENU ITEM METHOD",slug:"/commands/set-menu-item-method",displayed_sidebar:"docs"},c=void 0,l={},m=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET MENU ITEM METHOD"})," ( ",(0,d.jsx)(n.em,{children:"menu"})," ; ",(0,d.jsx)(n.em,{children:"menuItem"})," ; ",(0,d.jsx)(n.em,{children:"methodName"})," {; ",(0,d.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menu"}),(0,d.jsx)(n.td,{children:"Integer, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u307E\u305F\u306F\u30E1\u30CB\u30E5\u30FC\u756A\u53F7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menuItem"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u756A\u53F7 \u307E\u305F\u306F -1: \u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"methodName"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30E1\u30BD\u30C3\u30C9\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"process"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D7\u30ED\u30BB\u30B9\u756A\u53F7"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["SET MENU ITEM METHOD \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(n.em,{children:"menu"}),"\u3068",(0,d.jsx)(n.em,{children:"menuItem"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u306B\u95A2\u9023\u4ED8\u3051\u308B4D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"menuItem"}),"\u306B-1\u3092\u6E21\u3057\u3066",(0,d.jsx)(n.em,{children:"menu"}),"\u306B\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"menu"}),"\u306B\u306F\u30E1\u30CB\u30E5\u30FC\u53C2\u7167 (",(0,d.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") \u307E\u305F\u306F\u30E1\u30CB\u30E5\u30FC\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002\u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u3092\u6E21\u3059\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u3059\u3079\u3066\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u5834\u5408",(0,d.jsx)(n.em,{children:"process"}),"\u5F15\u6570\u306F\u6E21\u3055\u308C\u3066\u3082\u7121\u8996\u3055\u308C\u307E\u3059\u3002\u30E1\u30CB\u30E5\u30FC\u756A\u53F7\u3092\u6E21\u3059\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u4E2D\u306E\u5BFE\u5FDC\u3059\u308B\u30E1\u30CB\u30E5\u30FC\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u6307\u5B9A\u3057\u305F\u3044\u5834\u5408\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,d.jsx)(n.em,{children:"process"})," \u5F15\u6570\u306B\u305D\u306E\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"method"}),"\u306B\u306F\u30014D\u30E1\u30BD\u30C3\u30C9\u540D\u3092\u6587\u5B57\u5217\u3067\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," \u30E1\u30CB\u30E5\u30FC\u304C\u968E\u5C64\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u306E\u30BF\u30A4\u30C8\u30EB\u306B\u5BFE\u5FDC\u3059\u308B\u5834\u5408\u3001\u30E1\u30CB\u30E5\u30FC\u304C\u9078\u629E\u3055\u308C\u3066\u3082\u30E1\u30BD\u30C3\u30C9\u306F\u547C\u3073\u51FA\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/set-menu-bar",title:"SET MENU BAR",children:"SET MENU BAR"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/get-menu-item-method",children:"Get menu item method"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"982"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);