"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68114"],{313298:function(n,e,t){t.r(e),t.d(e,{default:()=>m,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>i,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/listbox-get-column-formula","title":"LISTBOX Get column formula","description":"LISTBOX Get column formula ( { ;} object* ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-get-column-formula.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-column-formula","permalink":"/docs/ja/commands/listbox-get-column-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-column-formula.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-get-column-formula","title":"LISTBOX Get column formula","slug":"/commands/listbox-get-column-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET CELL POSITION","permalink":"/docs/ja/commands/listbox-get-cell-position"},"next":{"title":"LISTBOX Get column width","permalink":"/docs/ja/commands/listbox-get-column-width"}}'),l=t("785893"),o=t("250065");let c={id:"listbox-get-column-formula",title:"LISTBOX Get column formula",slug:"/commands/listbox-get-column-formula",displayed_sidebar:"docs"},r=void 0,d={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"LISTBOX Get column formula"})," ( {* ;} ",(0,l.jsx)(e.em,{children:"object"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5F15\u6570"}),(0,l.jsx)(e.th,{children:"\u578B"}),(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"*"}),(0,l.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u6307\u5B9A\u6642object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217)\u7701\u7565\u6642object\u306F\u5909\u6570"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"object"}),(0,l.jsx)(e.td,{children:"any"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642)\u307E\u305F\u306F\u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,l.jsx)(e.td,{children:"Text"}),(0,l.jsx)(e.td,{children:"\u2190"}),(0,l.jsx)(e.td,{children:"\u5217\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"LISTBOX Get column formula"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,l.jsx)(e.em,{children:"object"}),"\u3068*** \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5217\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u8FD4\u3057\u307E\u3059\u3002\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u304C",(0,l.jsx)(e.strong,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"}),"\u3001",(0,l.jsx)(e.strong,{children:"\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"}),"\u3001\u3042\u308B\u3044\u306F",(0,l.jsx)(e.strong,{children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u307E\u305F\u306F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"}),"\u306E\u5834\u5408\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u5217\u306B\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u7A7A\u306E\u6587\u5B57\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,l.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,l.jsx)(e.em,{children:"object"})," \u5F15\u6570\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u3067\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408 ",(0,l.jsx)(e.em,{children:"object"})," \u306F\u5909\u6570\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306B\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5217\u3092\u6307\u5B9A\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"/docs/ja/commands/listbox-set-column-formula",children:"LISTBOX SET COLUMN FORMULA"})}),"\n",(0,l.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(e.td,{children:"1202"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function m(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return c}});var s=t(667294);let l={},o=s.createContext(l);function c(n){let e=s.useContext(o);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);