"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81223"],{104402:function(r,e,n){n.r(e),n.d(e,{default:()=>o,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/listbox-get-arrays","title":"LISTBOX GET ARRAYS","description":"LISTBOX GET ARRAYS ( { ;} object ; arrColNames ; arrHeaderNames ; arrColVars ; arrHeaderVars ; arrColsVisible ; arrStyles {; arrFooterNames ; arrFooterVars*} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-arrays.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-arrays","permalink":"/docs/ja/20-R7/commands/listbox-get-arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-arrays.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-arrays","title":"LISTBOX GET ARRAYS","slug":"/commands/listbox-get-arrays","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get array","permalink":"/docs/ja/20-R7/commands/listbox-get-array"},"next":{"title":"LISTBOX Get auto row height","permalink":"/docs/ja/20-R7/commands/listbox-get-auto-row-height"}}'),d=n("785893"),t=n("250065");let l={id:"listbox-get-arrays",title:"LISTBOX GET ARRAYS",slug:"/commands/listbox-get-arrays",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(r){let e={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...r.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"LISTBOX GET ARRAYS"})," ( {* ;} ",(0,d.jsx)(e.em,{children:"object"})," ; ",(0,d.jsx)(e.em,{children:"arrColNames"})," ; ",(0,d.jsx)(e.em,{children:"arrHeaderNames"})," ; ",(0,d.jsx)(e.em,{children:"arrColVars"})," ; ",(0,d.jsx)(e.em,{children:"arrHeaderVars"})," ; ",(0,d.jsx)(e.em,{children:"arrColsVisible"})," ; ",(0,d.jsx)(e.em,{children:"arrStyles"})," {; ",(0,d.jsx)(e.em,{children:"arrFooterNames"})," ; ",(0,d.jsx)(e.em,{children:"arrFooterVars"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"*"}),(0,d.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u6307\u5B9A\u6642, object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, object\u306F\u5909\u6570"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"object"}),(0,d.jsx)(e.td,{children:"any"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F \u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"arrColNames"}),(0,d.jsx)(e.td,{children:"Text array"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u5217\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"arrHeaderNames"}),(0,d.jsx)(e.td,{children:"Text array"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u30D8\u30C3\u30C0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"arrColVars"}),(0,d.jsx)(e.td,{children:"Pointer array"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u5217\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u307E\u305F\u306F\u5217\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u307E\u305F\u306FNil"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"arrHeaderVars"}),(0,d.jsx)(e.td,{children:"Pointer array"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u30D8\u30C3\u30C0\u30FC\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"arrColsVisible"}),(0,d.jsx)(e.td,{children:"Boolean array"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u5217\u6BCE\u306E\u8868\u793A\u72B6\u614B"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"arrStyles"}),(0,d.jsx)(e.td,{children:"Pointer array"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u914D\u5217\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u307E\u305F\u306F \u30B9\u30BF\u30A4\u30EB\u3001\u30AB\u30E9\u30FC\u3001\u304A\u3088\u3073\u884C\u7BA1\u7406\u5909\u6570\u307E\u305F\u306FNil"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"arrFooterNames"}),(0,d.jsx)(e.td,{children:"Text array"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u5217\u30D5\u30C3\u30BF\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"arrFooterVars"}),(0,d.jsx)(e.td,{children:"Pointer array"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u5217\u30D5\u30C3\u30BF\u30FC\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"LISTBOX GET ARRAYS"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u4E00\u9023\u306E\u540C\u671F\u5316\u3055\u308C\u305F\u914D\u5217\u3092\u8FD4\u3057\u3001",(0,d.jsx)(e.em,{children:"object"}),"\u5F15\u6570\u304A\u3088\u3073 ",(0,d.jsx)(e.em,{children:"*"})," \u3067\u6307\u5B9A\u3055\u308C\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5404\u5217\uFF08\u8868\u793A\u307E\u305F\u306F\u975E\u8868\u793A\uFF09\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570 ",(0,d.jsx)(e.em,{children:"*"})," \u3092\u6E21\u3059\u3053\u3068\u306B\u3088\u308A\u3001",(0,d.jsx)(e.em,{children:"object"}),"\u5F15\u6570\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\uFF08\u6587\u5B57\u5217\uFF09\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"object"}),"\u5F15\u6570\u304C\u5909\u6570\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F",(0,d.jsx)(e.em,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"arrColNames"}),"\u914D\u5217\u306B\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u306E\u5404\u5217\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u4E00\u89A7\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"arrHeaderNames"}),"\u914D\u5217\u306B\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u306E\u5404\u5217\u30D8\u30C3\u30C0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u4E00\u89A7\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"arrColVars"}),"\u914D\u5217\u306B\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u306E\u5404\u5217\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u5909\u6570\uFF08\u914D\u5217\uFF09\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u30BF\u30A4\u30D7\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"arrColVars"})," \u306B\u306F:\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u5217\u306E\u5834\u5408\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u30DD\u30A4\u30F3\u30BF"}),"\n",(0,d.jsx)(e.li,{children:"\u5909\u6570\u304C\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u5217\u306E\u5834\u5408\u3001\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF"}),"\n",(0,d.jsxs)(e.li,{children:["\u5F0F\u304C\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u5217\u306E\u5834\u5408\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/is-nil-pointer",children:"Is nil pointer"}),"\u30DD\u30A4\u30F3\u30BF\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"arrHeaderVars"}),"\u914D\u5217\u306B\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u306E\u5404\u5217\u30D8\u30C3\u30C0\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"arrColsVisible"}),"\u914D\u5217\u306B\u306F\u5404\u5217\u306B\u95A2\u3059\u308B\u30D6\u30FC\u30EB\u5024\u304C\u4EE3\u5165\u3055\u308C\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u306E\u5217\u304C\u8868\u793A\uFF08",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/true",children:"True"}),"\uFF09\u307E\u305F\u306F\u975E\u8868\u793A\uFF08",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/false",children:"False"}),"\uFF09\u306E\u3044\u305A\u308C\u3067\u3042\u308B\u304B\u3092\u793A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"arrStyles"}),"\u914D\u5217\u306B\u306F\u30014\u3064\u306E\u914D\u5217\u3092\u305D\u308C\u305E\u308C\u6307\u30594\u3064\u306E\u30DD\u30A4\u30F3\u30BF\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u30894\u3064\u306E\u914D\u5217\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u306E\u5404\u884C\u306B\u5BFE\u3057\u3066\u30B9\u30BF\u30A4\u30EB\u3084\u30D5\u30A9\u30F3\u30C8\u30AB\u30E9\u30FC\u3001\u80CC\u666F \u8272\u3001\u5404\u884C\u306E\u30AB\u30B9\u30BF\u30E0\u306E\u8868\u793A\u7BA1\u7406\u3092\u9069\u7528\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u914D\u5217\u306F\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u3067\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u30EA\u30B9\u30C8\u3067\u6307\u5B9A\u3001\u3042\u308B\u3044\u306F",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/listbox-set-array",children:"LISTBOX SET ARRAY"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u6307\u5B9A\u3055\u308C\u305F\u3082\u306E\u3067\u3059\u3002\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u5BFE\u3059\u308B\u914D\u5217\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"arrStyles"}),"\u5185\u306E\u5BFE\u5FDC\u3059\u308B\u9805\u76EE\u306B\u306F",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/is-nil-pointer",children:"Is nil pointer"}),"\u30DD\u30A4\u30F3\u30BF\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n4\u3064\u3081\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u30D6\u30FC\u30EB\u578B\u914D\u5217(\u975E\u8868\u793A\u914D\u5217)\u3001\u3042\u308B\u3044\u306F\u500D\u9577\u6574\u6570\u914D\u5217(\u975E\u8868\u793A\u3001\u7121\u52B9\u5316\u3001\u9078\u629E\u4E0D\u53EF\u884C\u3092\u8A2D\u5B9A\u3059\u308B\u306E\u306B\u4F7F\u7528\u3059\u308B\u914D\u5217)\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u884C\u7BA1\u7406\u914D\u5217\u306B\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u5B9F\u88C5\u306B\u57FA\u3065\u304D\u307E\u3059(",(0,d.jsx)(e.em,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u7279\u6709\u306E\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002",(0,d.jsx)(e.br,{}),"\n\u30EC\u30B3\u30FC\u30C9\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u578B\u304A\u3088\u3073\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3/\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u578B\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3067\u306F\u3001",(0,d.jsx)(e.em,{children:"arrStyles"})," \u306B\u306F:\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u5909\u6570\u306B\u3088\u308A\u8A2D\u5B9A\u3055\u308C\u305F\u8A2D\u5B9A\u3054\u3068\u306B\u3001\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u304C\u3001"}),"\n",(0,d.jsxs)(e.li,{children:["\u5F0F\u306B\u3088\u308A\u8A2D\u5B9A\u3055\u308C\u305F\u8A2D\u5B9A\u3054\u3068\u306B\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/is-nil-pointer",children:"Is nil pointer"}),"\u30DD\u30A4\u30F3\u30BF\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/listbox-get-array",children:"LISTBOX Get array"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/listbox-get-property",children:"LISTBOX Get property"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/listbox-set-array",children:"LISTBOX SET ARRAY"})]}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"832"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function o(r={}){let{wrapper:e}={...(0,t.a)(),...r.components};return e?(0,d.jsx)(e,{...r,children:(0,d.jsx)(h,{...r})}):h(r)}},250065:function(r,e,n){n.d(e,{Z:function(){return i},a:function(){return l}});var s=n(667294);let d={},t=s.createContext(d);function l(r){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof r?r(e):{...e,...r}},[e,r])}function i(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(d):r.components||d:l(r.components),s.createElement(t.Provider,{value:e},r.children)}}}]);