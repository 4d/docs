"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68214"],{868520:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>r,toc:()=>i,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/accumulate","title":"ACCUMULATE","description":"ACCUMULATE ( data {; data2 ; ... ; dataN} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/accumulate.md","sourceDirName":"commands-legacy","slug":"/commands/accumulate","permalink":"/docs/ja/20-R7/commands/accumulate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Faccumulate.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"accumulate","title":"ACCUMULATE","slug":"/commands/accumulate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Printing","permalink":"/docs/ja/20-R7/category/printing"},"next":{"title":"BLOB to print settings","permalink":"/docs/ja/20-R7/commands/blob-to-print-settings"}}'),d=t("785893"),a=t("250065");let c={id:"accumulate",title:"ACCUMULATE",slug:"/commands/accumulate",displayed_sidebar:"docs"},l=void 0,r={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ACCUMULATE"})," ( ",(0,d.jsx)(n.em,{children:"data"})," {; ",(0,d.jsx)(n.em,{children:"data2"})," ; ... ; ",(0,d.jsx)(n.em,{children:"dataN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data"}),(0,d.jsx)(n.td,{children:"Field, Variable"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u7D2F\u8A08\u3059\u308B\u6570\u5024\u578B\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["ACCUMULATE\u306F\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30D7\u30EA\u30F3\u30C8\u3059\u308B\u30D5\u30A9\u30FC\u30E0\u30EC\u30DD\u30FC\u30C8\u4E2D\u3067\u7D2F\u8A08\u3059\u308B\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30D6\u30EC\u30FC\u30AF\u51E6\u7406\u3092\u884C\u3046\u30EC\u30DD\u30FC\u30C8\u3092\u5370\u5237\u3059\u308B\u524D\u306B\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/break-level",title:"BREAK LEVEL",children:"BREAK LEVEL"}),"\u30B3\u30DE\u30F3\u30C9\u3068ACCUMULATE\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30EC\u30DD\u30FC\u30C8\u306B\u5BFE\u3059\u308B\u30D6\u30EC\u30FC\u30AF\u51E6\u7406\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/subtotal",title:"Subtotal",children:"Subtotal"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30D5\u30A9\u30FC\u30E0\u30EC\u30DD\u30FC\u30C8\u306B\u6570\u5024\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u306E\u5C0F\u8A08\u3092\u6C42\u3081\u308B\u5834\u5408\u306B\u3001ACCUMULATE\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002ACCUMULATE\u306F\u30014D\u306B\u5BFE\u3057\u3066\u3001",(0,d.jsx)(n.em,{children:"data"}),"\u6BCE\u306E\u5C0F\u8A08\u3092\u8A18\u61B6\u3059\u308B\u3088\u3046\u306B\u6307\u793A\u3057\u307E\u3059\u3002\u5C0F\u8A08\u306F",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/break-level",title:"BREAK LEVEL",children:"BREAK LEVEL"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u6307\u5B9A\u3055\u308C\u305F\u5404\u30D6\u30EC\u30FC\u30AF\u30EC\u30D9\u30EB\u306B\u5BFE\u3057\u3066\u7D2F\u8A08\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30EC\u30DD\u30FC\u30C8\u3092\u5370\u5237\u3059\u308B\u524D\u306B\u3001ACCUMULATE\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u304B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/subtotal",title:"Subtotal",children:"Subtotal"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001",(0,d.jsx)(n.em,{children:"data"}),"\u5F15\u6570\u306E1\u3064\u306E\u5C0F\u8A08\u3092\u6C42\u3081\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/break-level",title:"BREAK LEVEL",children:"BREAK LEVEL"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/break-level",children:"BREAK LEVEL"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/order-by",children:"ORDER BY"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/print-selection",children:"PRINT SELECTION"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/subtotal",children:"Subtotal"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"303"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var s=t(667294);let d={},a=s.createContext(d);function c(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);