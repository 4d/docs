"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26957"],{72994:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>m});var s=JSON.parse('{"id":"commands-legacy/get-menu-item-mark","title":"Get menu item mark","description":"Get menu item mark ( menu ; menuItem {; process} ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-item-mark.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-mark","permalink":"/docs/ja/20-R7/commands/get-menu-item-mark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-mark.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-mark","title":"Get menu item mark","slug":"/commands/get-menu-item-mark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item key","permalink":"/docs/ja/20-R7/commands/get-menu-item-key"},"next":{"title":"Get menu item method","permalink":"/docs/ja/20-R7/commands/get-menu-item-method"}}'),r=t("785893"),d=t("250065");let i={id:"get-menu-item-mark",title:"Get menu item mark",slug:"/commands/get-menu-item-mark",displayed_sidebar:"docs"},m=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get menu item mark"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"menuItem"})," {; ",(0,r.jsx)(n.em,{children:"process"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u307E\u305F\u306F\u30E1\u30CB\u30E5\u30FC\u756A\u53F7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuItem"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u756A\u53F7 \u307E\u305F\u306F -1: \u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30D7\u30ED\u30BB\u30B9\u756A\u53F7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u306E\u30DE\u30FC\u30AF"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["Get menu item mark \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(n.em,{children:"menu"}),"\u5F15\u6570\u306B\u30E1\u30CB\u30E5\u30FC\u756A\u53F7\u307E\u305F\u306F\u30E1\u30CB\u30E5\u30FC\u53C2\u7167\u3067\u6307\u5B9A\u3057\u305F\u30E1\u30CB\u30E5\u30FC\u4E2D\u3001",(0,r.jsx)(n.em,{children:"menuItem"}),"\u5F15\u6570\u306B\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u756A\u53F7\u3067\u6307\u5B9A\u3057\u305F\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u306E\u3001\u30C1\u30A7\u30C3\u30AF\u30DE\u30FC\u30AF\u3092\u8FD4\u3057\u307E\u3059\u3002",(0,r.jsx)(n.em,{children:"menuItem"}),"\u306B-1\u3092\u6E21\u3057\u3066",(0,r.jsx)(n.em,{children:"menu"}),"\u306B\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"process"}),"\u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u3068\u3001Get menu item mark\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u3001",(0,r.jsx)(n.em,{children:"process"}),"\u306B\u6E21\u3055\u308C\u305F\u30D7\u30ED\u30BB\u30B9\u53C2\u7167\u756A\u53F7\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30CB\u30E5\u30FC\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," ",(0,r.jsx)(n.em,{children:"menu"}),"\u306B",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),"\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"process"})," \u5F15\u6570\u306F\u610F\u5473\u3092\u6301\u305F\u305A\u3001\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u306B\u30C1\u30A7\u30C3\u30AF\u30DE\u30FC\u30AF\u304C\u306A\u3044\u304B\u3001",(0,r.jsx)(n.em,{children:"menuItem"})," \u5F15\u6570\u304C\u968E\u5C64\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u3092\u6307\u3059\u5834\u5408\u3001Get menu item mark \u306F\u7A7A\u306E\u6587\u5B57\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Macintosh \u3068 Windows \u306B\u304A\u3051\u308B\u30C1\u30A7\u30C3\u30AF\u30DE\u30FC\u30AF\u306E\u8B70\u8AD6\u306B\u3064\u3044\u3066\u306F\u3001\u30B3\u30DE\u30F3\u30C9 ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-menu-item-mark",title:"SET MENU ITEM MARK",children:"SET MENU ITEM MARK"}),"\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u306F\u3001\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u306E\u30C1\u30A7\u30C3\u30AF\u30DE\u30FC\u30AF\u3092\u5207\u308A\u66FF\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET MENU ITEM MARK($vlMenu;$vlItem;Char(18)*Num(Character code(Get menu item mark($vlMenu;$vlItem))#18))\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-menu-item-mark",children:"SET MENU ITEM MARK"})}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"428"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u306E\u4F7F\u7528\u306F\u4E0D\u53EF"}),(0,r.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return m},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);