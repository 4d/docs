"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4665"],{835261:function(n,t,e){e.r(t),e.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>r,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/listbox-get-static-columns","title":"LISTBOX Get static columns","description":"LISTBOX Get static columns ( { ;} object* ) : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-static-columns.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-static-columns","permalink":"/docs/ja/20-R7/commands/listbox-get-static-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-static-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-static-columns","title":"LISTBOX Get static columns","slug":"/commands/listbox-get-static-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get rows height","permalink":"/docs/ja/20-R7/commands/listbox-get-rows-height"},"next":{"title":"LISTBOX GET TABLE SOURCE","permalink":"/docs/ja/20-R7/commands/listbox-get-table-source"}}'),c=e("785893"),i=e("250065");let l={id:"listbox-get-static-columns",title:"LISTBOX Get static columns",slug:"/commands/listbox-get-static-columns",displayed_sidebar:"docs"},d=void 0,r={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(n){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"LISTBOX Get static columns"})," ( {* ;} ",(0,c.jsx)(t.em,{children:"object"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"\u5F15\u6570"}),(0,c.jsx)(t.th,{children:"\u578B"}),(0,c.jsx)(t.th,{}),(0,c.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"*"}),(0,c.jsx)(t.td,{children:"\u6F14\u7B97\u5B50"}),(0,c.jsx)(t.td,{children:"\u2192"}),(0,c.jsx)(t.td,{children:"\u6307\u5B9A\u6642object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217)\u7701\u7565\u6642object\u306F\u5909\u6570"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"object"}),(0,c.jsx)(t.td,{children:"any"}),(0,c.jsx)(t.td,{children:"\u2192"}),(0,c.jsx)(t.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642)\u307E\u305F\u306F\u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"\u623B\u308A\u5024"}),(0,c.jsx)(t.td,{children:"Integer"}),(0,c.jsx)(t.td,{children:"\u2190"}),(0,c.jsx)(t.td,{children:"\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5\u3057\u306A\u3044\u5217\u6570"})]})]})]}),"\n",(0,c.jsx)(t.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"LISTBOX Get static columns"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,c.jsx)(t.em,{children:"object"})," \u3068*** \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u4E2D\u306E\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5\u3057\u306A\u3044\u5217\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(t.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,c.jsx)(t.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,c.jsx)(t.em,{children:"object"})," \u5F15\u6570\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u3067\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408 ",(0,c.jsx)(t.em,{children:"object"})," \u306F\u5909\u6570\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(t.p,{children:["\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u5217\u306F\u30D7\u30ED\u30D1\u30C6\u30A3\u30EA\u30B9\u30C8\u3084",(0,c.jsx)(t.a,{href:"/docs/ja/20-R7/commands/listbox-set-static-columns",children:"LISTBOX SET STATIC COLUMNS"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(t.p,{children:["\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u5217\u5185\u3067\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u4F7F\u7528\u3057\u3066\u5217\u304C\u633F\u5165\u3055\u308C\u305F\u308A\u524A\u9664\u3055\u308C\u305F\u308A\u3059\u308B\u3068\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304B\u3089\u8FD4\u3055\u308C\u308B\u5217\u6570\u3082\u5909\u66F4\u3055\u308C\u307E\u3059\u3002",(0,c.jsx)(t.br,{}),"\n\u3057\u304B\u3057\u30B3\u30DE\u30F3\u30C9\u306F\u5217\u306E\u8868\u793A/\u975E\u8868\u793A\u72B6\u614B\u306F\u8003\u616E\u306B\u5165\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"\u6CE8:"})," \u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u5217\u3068\u30ED\u30C3\u30AF\u3055\u308C\u305F\u5217\u306F\u7570\u306A\u308B\u6A5F\u80FD\u3067\u3059\u3002\u8A73\u7D30\u306F\u30C7\u30B6\u30A4\u30F3\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,c.jsx)(t.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/ja/20-R7/commands/listbox-set-static-columns",children:"LISTBOX SET STATIC COLUMNS"})}),"\n",(0,c.jsx)(t.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{}),(0,c.jsx)(t.th,{})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,c.jsx)(t.td,{children:"1154"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,c.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,c.jsx)(t,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return d},a:function(){return l}});var s=e(667294);let c={},i=s.createContext(c);function l(n){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function d(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),s.createElement(i.Provider,{value:t},n.children)}}}]);