"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31634"],{751532:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>r,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/get-database-localization","title":"Get database localization","description":"Get database localization {( {;}{*} )} : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-database-localization.md","sourceDirName":"commands-legacy","slug":"/commands/get-database-localization","permalink":"/docs/ja/20-R8/commands/get-database-localization","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-database-localization.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-database-localization","title":"Get database localization","slug":"/commands/get-database-localization","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get 4D folder","permalink":"/docs/ja/20-R8/commands/get-4d-folder"},"next":{"title":"Get database parameter","permalink":"/docs/ja/20-R8/commands/get-database-parameter"}}'),l=s("785893"),d=s("250065");let i={id:"get-database-localization",title:"Get database localization",slug:"/commands/get-database-localization",displayed_sidebar:"docs"},a=void 0,r={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(n){let e={a:"a",br:"br",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Get database localization"})," {( {",(0,l.jsx)(e.em,{children:"languageType"}),"}{;}{*} )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5F15\u6570"}),(0,l.jsx)(e.th,{children:"\u578B"}),(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"languageType"}),(0,l.jsx)(e.td,{children:"Integer"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u30E9\u30F3\u30B2\u30FC\u30B8\u306E\u7A2E\u985E"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"*"}),(0,l.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u3064\u3044\u3066\u306E\u60C5\u5831\u3092\u8FD4\u3059"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,l.jsx)(e.td,{children:"Text"}),(0,l.jsx)(e.td,{children:"\u2190"}),(0,l.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30AB\u30EC\u30F3\u30C8\u30E9\u30F3\u30B2\u30FC\u30B8"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Get database localization"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30E9\u30F3\u30B2\u30FC\u30B8\u3001\u307E\u305F\u306F",(0,l.jsx)(e.em,{children:"languageType"}),"\u3067\u6307\u5B9A\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u8A00\u8A9E\u3092\u3001RFC 3066\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u6A19\u6E96\u3067\u8FD4\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070\u30B3\u30DE\u30F3\u30C9\u306F\u82F1\u8A9E\u306E\u5834\u5408\u201Cen\u201D\u3092\u3001\u65E5\u672C\u8A9E\u306E\u5834\u5408\u201Cja\u201D\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u6A19\u6E96\u304A\u3088\u3073\u30B3\u30DE\u30F3\u30C9\u304B\u3089\u8FD4\u3055\u308C\u308B\u5024\u306E\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,l.jsx)(e.em,{children:"Design Reference"}),"\u30DE\u30CB\u30E5\u30A2\u30EB\u306E",(0,l.jsx)(e.em,{children:"\u4ED8\u9332 B: XLIFF\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u30FC"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u306F\u540C\u6642\u306B\u8907\u6570\u306E\u7570\u306A\u308B\u8A00\u8A9E\u8A2D\u5B9A\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u53D6\u5F97\u3059\u308B\u8A2D\u5B9A\u3092\u6307\u5B9A\u3059\u308B\u306B\u306F\u3001",(0,l.jsx)(e.em,{children:"languageType"}),"\u306B",(0,l.jsx)(e.em,{children:"4D Environment"}),"\u30C6\u30FC\u30DE\u306E\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,l.jsx)(e.th,{children:"\u578B"}),(0,l.jsx)(e.th,{children:"\u5024"}),(0,l.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Current localization"}),(0,l.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,l.jsx)(e.td,{children:"1"}),(0,l.jsxs)(e.td,{children:["\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30AB\u30EC\u30F3\u30C8\u8A00\u8A9E: \u30C7\u30D5\u30A9\u30EB\u30C8\u8A00\u8A9E\u307E\u305F\u306F",(0,l.jsx)(e.a,{href:"/docs/ja/20-R8/commands/set-database-localization",children:"SET DATABASE LOCALIZATION"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u8A2D\u5B9A\u3055\u308C\u305F\u8A00\u8A9E\u3002"]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Default localization"}),(0,l.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,l.jsx)(e.td,{children:"0"}),(0,l.jsx)(e.td,{children:"Resources\u30D5\u30A9\u30EB\u30C0\u3068\u30B7\u30B9\u30C6\u30E0\u74B0\u5883\u306B\u57FA\u3065\u304D\u30014D\u304C\u8D77\u52D5\u6642\u306B\u81EA\u52D5\u3067\u8A2D\u5B9A\u3059\u308B\u8A00\u8A9E (\u5909\u66F4\u4E0D\u53EF)\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Internal 4D localization"}),(0,l.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,l.jsx)(e.td,{children:"3"}),(0,l.jsx)(e.td,{children:"\u4E26\u3073\u66FF\u3048\u3084\u30C6\u30AD\u30B9\u30C8\u6BD4\u8F03\u30674D\u304C\u4F7F\u7528\u3059\u308B\u8A00\u8A9E (\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u74B0\u5883\u8A2D\u5B9A\u3067\u8A2D\u5B9A)\u3002"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"User system localization"}),(0,l.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,l.jsx)(e.td,{children:"2"}),(0,l.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u306E\u30AB\u30EC\u30F3\u30C8\u30E6\u30FC\u30B6\u30FC\u304C\u8A2D\u5B9A\u3057\u305F\u8A00\u8A9E"})]})]})]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:"languageType"}),"\u3092\u7701\u7565\u3059\u308B\u3068\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u30E9\u30F3\u30B2\u30FC\u30B8 (0) \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4EFB\u610F\u306E ",(0,l.jsx)(e.em,{children:"*"})," \u5F15\u6570\u306F\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u30FC\u306E\u5834\u5408\u306B\u6709\u7528\u3067\u3059\u3002\u3053\u308C\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u8A00\u8A9E\u3092\u8ABF\u3079\u305F\u3044\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9(\u30DB\u30B9\u30C8\u307E\u305F\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8)\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u30B3\u30DE\u30F3\u30C9\u304C\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u3066\u3044\u308B\u3068\u304D:\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.em,{children:"*"})," \u5F15\u6570\u304C\u6E21\u3055\u308C\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u8A00\u8A9E\u8A2D\u5B9A\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.em,{children:"*"})," \u5F15\u6570\u304C\u6E21\u3055\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u8A00\u8A9E\u8A2D\u5B9A\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u30B3\u30DE\u30F3\u30C9\u304C\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u547C\u3070\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u5E38\u306B\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u8A00\u8A9E\u8A2D\u5B9A\u3092\u8FD4\u3057\u307E\u3059(",(0,l.jsx)(e.em,{children:"*"})," \u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059)\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30AB\u30EC\u30F3\u30C8\u30E9\u30F3\u30B2\u30FC\u30B8\u306F\u3001\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3055\u308C\u305F\u30A2\u30A4\u30C6\u30E0\u3092\u30D7\u30ED\u30B0\u30E9\u30E0\u304C\u691C\u7D22\u3059\u308B.lproj\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u30024D\u306F\u81EA\u52D5\u3067\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u958B\u59CB\u6642\u306B\u3001\u30B7\u30B9\u30C6\u30E0\u74B0\u5883\u3068",(0,l.jsx)(e.strong,{children:"Resources"}),"\u30D5\u30A9\u30EB\u30C0\u306E\u5185\u5BB9\u3067\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u30E9\u30F3\u30B2\u30FC\u30B8\u3092\u6C7A\u5B9A\u3057\u307E\u3059\u30024D\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u512A\u5148\u9806\u4F4D\u3067\u3001\u53C2\u7167\u30E9\u30F3\u30B2\u30FC\u30B8\u306B\u5BFE\u5FDC\u3059\u308B.lproj\u30D5\u30A9\u30EB\u30C0\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059:"]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u30B7\u30B9\u30C6\u30E0\u30E9\u30F3\u30B2\u30FC\u30B8 (Mac OS\u3067\u306F\u3001\u74B0\u5883\u8A2D\u5B9A\u3067\u8907\u6570\u306E\u30E9\u30F3\u30B2\u30FC\u30B8\u306E\u9806\u756A\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u30024D\u306F\u3053\u306E\u8A2D\u5B9A\u3092\u4F7F\u7528\u3057\u307E\u3059)\u3002"}),"\n",(0,l.jsx)(e.li,{children:"4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30E9\u30F3\u30B2\u30FC\u30B8"}),"\n",(0,l.jsx)(e.li,{children:"English"}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Resources"}),"\u30D5\u30A9\u30EB\u30C0\u3067\u6700\u521D\u306B\u898B\u3064\u304B\u3063\u305F\u30D5\u30A9\u30EB\u30C0"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Note"}),": \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B.lproj\u30D5\u30A9\u30EB\u30C0\u304C\u306A\u3044\u5834\u5408\u30014D\u306F\u4EE5\u4E0B\u306E\u512A\u5148\u9806\u4F4D\u3092\u9069\u7528\u3057\u307E\u3059\u30021. \u30B7\u30B9\u30C6\u30E0\u30E9\u30F3\u30B2\u30FC\u30B8\u30012. English (\u30B7\u30B9\u30C6\u30E0\u30E9\u30F3\u30B2\u30FC\u30B8\u3092\u6C7A\u5B9A\u3067\u304D\u306A\u304B\u3063\u305F\u5834\u5408)"]}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"/docs/ja/20-R8/commands/localized-document-path",children:"Localized document path"}),(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.a,{href:"/docs/ja/20-R8/commands/set-database-localization",children:"SET DATABASE LOCALIZATION"})]}),"\n",(0,l.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(e.td,{children:"1009"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return i}});var t=s(667294);let l={},d=t.createContext(l);function i(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);