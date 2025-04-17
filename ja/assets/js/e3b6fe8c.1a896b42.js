"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42002"],{992137:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>t,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/distinct-values","title":"DISTINCT VALUES","description":"DISTINCT VALUES ( aField ; array {; countArray} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/distinct-values.md","sourceDirName":"commands-legacy","slug":"/commands/distinct-values","permalink":"/docs/ja/commands/distinct-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdistinct-values.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"distinct-values","title":"DISTINCT VALUES","slug":"/commands/distinct-values","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DISTINCT ATTRIBUTE VALUES","permalink":"/docs/ja/commands/distinct-attribute-values"},"next":{"title":"Find in array","permalink":"/docs/ja/commands/find-in-array"}}'),d=s("785893"),i=s("250065");let t={id:"distinct-values",title:"DISTINCT VALUES",slug:"/commands/distinct-values",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"DISTINCT VALUES"})," ( ",(0,d.jsx)(e.em,{children:"aField"})," ; ",(0,d.jsx)(e.em,{children:"array"})," {; ",(0,d.jsx)(e.em,{children:"countArray"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"aField"}),(0,d.jsx)(e.td,{children:"Field"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u3001\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u53EF\u80FD\u306A\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"array"}),(0,d.jsx)(e.td,{children:"Array"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u30C7\u30FC\u30BF\u3092\u53D7\u3051\u53D6\u308B\u914D\u5217"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"countArray"}),(0,d.jsx)(e.td,{children:"Integer array, Real array"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u305D\u308C\u305E\u308C\u306E\u5024\u306E\u6570\u3092\u53D7\u3051\u53D6\u308B\u914D\u5217"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"DISTINCT VALUES"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(e.em,{children:"aField"}),"\u304C\u5C5E\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E",(0,d.jsx)(e.em,{children:"aField"}),"\u30D5\u30A3\u30FC\u30EB\u30C9\u304B\u3089\u306E\u91CD\u8907\u3057\u306A\u3044(\u30E6\u30CB\u30FC\u30AF\u306A)\u5024\u3067\u69CB\u6210\u3055\u308C\u308B",(0,d.jsx)(e.em,{children:"array"}),"\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u307E\u305F\u4EFB\u610F\u306E\u5F15\u6570",(0,d.jsx)(e.em,{children:"countArray"}),"\u306B\u305D\u308C\u305E\u308C\u306E\u5024\u306E\u30AA\u30AB\u30EC\u30F3\u30B9\u6570\u3092\u8FD4\u3059\u4E8B\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"DISTINCT VALUES"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u306F\u3001",(0,d.jsx)(e.strong,{children:"\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u53EF\u80FD\u306A"})," (\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u30BF\u30A4\u30D7\u306E) \u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u5B9F\u969B\u306B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002",(0,d.jsx)(e.br,{}),"\n\u3057\u304B\u3057\u3001\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u4ED8\u3051\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30A3\u30FC\u30EB\u30C9\u3067\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u9045\u304F\u306A\u308A\u307E\u3059\u3002\u307E\u305F\u3001\u3053\u306E\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5931\u3046\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"DISTINCT VALUES"}),"\u306F\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u30D6\u30E9\u30A6\u30BA\u3057\u3001\u91CD\u8907\u3057\u306A\u3044\u5024\u3092\u4FDD\u6301\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CE8:"})," \u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u4E2D\u306B",(0,d.jsx)(e.strong,{children:"DISTINCT VALUES"}),"\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u5834\u5408\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u4E2D\u306B\u4F5C\u6210\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u3082\u51E6\u7406\u306E\u5BFE\u8C61\u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"DISTINCT VALUES"})," \u3067\u4F7F\u7528\u3055\u308C\u308B\u914D\u5217\u306F\u3001\u7B2C\u4E00\u5F15\u6570\u6E21\u3059\u30D5\u30A3\u30FC\u30EB\u30C9\u3068\u578B\u304C\u4E00\u81F4\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u4E00\u81F4\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u914D\u5217\u306E\u578B\u306F\u4FEE\u6B63\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u30EB\u30FC\u30EB\u306B\u306F\u4E00\u3064\u306E\u4F8B\u5916 \u304C\u3042\u308A\u307E\u3059: \u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u30D4\u30AF\u30C1\u30E3\u578B\u3067\u3042\u308B(\u304B\u3064\u30AD\u30FC\u30EF\u30FC\u30C9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3068\u95A2\u9023\u4ED8\u3051\u3089\u308C\u3066\u3044\u308B)\u5834\u5408\u3001\u5BFE\u5FDC\u3059\u308B\u914D\u5217\u306F\u30C6\u30AD\u30B9\u30C8\u578B\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u30B3\u30DE\u30F3\u30C9\u306E\u547C\u3073\u51FA\u3057\u5F8C\u3001\u914D\u5217\u306E\u30B5\u30A4\u30BA\u306F\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u4E2D\u306E\u91CD\u8907\u3057\u306A\u3044\u5024\u306E\u6570\u3068\u540C\u3058\u3067\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u307E\u305F\u306F\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002 ",(0,d.jsx)(e.strong,{children:"DISTINCT VALUES"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3059\u308B\u306E\u3067\u3001",(0,d.jsx)(e.em,{children:"array"}),"\u4E2D\u306E\u8981\u7D20\u306F\u6607\u9806\u3067\u30BD\u30FC\u30C8\u3055\u308C\u3066\u8FD4\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u304C\u76EE\u7684\u306E\u4E26\u3079\u66FF\u3048\u9806\u3067\u3042\u308C\u3070\u3001",(0,d.jsx)(e.strong,{children:"DISTINCT VALUES"}),"\u3092\u4F7F\u7528\u3057\u305F\u5F8C\u306B",(0,d.jsx)(e.a,{href:"/docs/ja/commands/sort-array",children:"SORT ARRAY"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CE8"}),": ",(0,d.jsx)(e.strong,{children:"DISTINCT VALUES"}),"\u3092 \u30AD\u30FC\u30EF\u30FC\u30C9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u9069\u7528\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306F\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5BFE\u3057\u3066\u5B9F\u884C\u3059\u308B\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u69CB\u6210\u3055\u308C\u308B\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u4ED6\u306E\u30BF\u30A4 \u30D7\u306E\u30C7\u30FC\u30BF\u3068\u7570\u306A\u308A\u3001\u8FD4\u3055\u308C\u308B\u5024\u306F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u5B58\u5728\u306B\u3088\u308A\u7570\u306A\u308A\u307E\u3059\u3002\u30C6\u30AD\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5834\u5408\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u6A19\u6E96\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u3066\u3082\u3001 \u5E38\u306B\u30AD\u30FC\u30EF\u30FC\u30C9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u63A1\u7528\u3055\u308C\u307E\u3059\u3002\u30C6\u30AD\u30B9\u30C8\u3084\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u30AD\u30FC\u30EF\u30FC\u30C9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u7A7A\u306E\u914D\u5217\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4EFB\u610F\u306E\u5F15\u6570\u3068\u3057\u3066",(0,d.jsx)(e.em,{children:"countArray"}),"\u914D\u5217\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002\u3053\u306E\u914D\u5217\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"aField"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u5185\u306B\u3042\u308B\u305D\u308C\u305E\u308C\u306E\u91CD\u8907\u3057\u306A\u3044\u5024\u306E\u3001\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u691C\u77E5\u3055\u308C\u305F\u30AA\u30AB\u30EC\u30F3\u30B9\u6570\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"countArray"}),"\u914D\u5217\u306E\u30B5\u30A4\u30BA\u306F\u3001",(0,d.jsx)(e.em,{children:"array"}),'\u914D\u5217\u5185\u306E\u8981\u7D20\u306E\u6570\u3068\u81EA\u52D5\u7684\u306B\u540C\u3058\u306B\u3055\u308C\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001"A"\u3001"B"\u305D\u3057\u3066"A"\u3068\u3044\u3046\u30D5\u30A3\u30FC\u30EB\u30C9\u5024\u3067\u3042\u308B\u4E09\u3064\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u542B\u3080\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066\u306F\u3001',(0,d.jsx)(e.em,{children:"array"}),"\u914D\u5217\u306B\u306F{A;B}\u304C\u8FD4\u3055\u308C\u3001",(0,d.jsx)(e.em,{children:"countArray"}),"\u914D\u5217\u306B\u306F{2;1}\u304C\u542B\u307E\u308C\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"countArray"}),"\u914D\u5217\u306B\u306F\u500D\u9577\u6574\u6570\u914D\u5217\u307E\u305F\u306F\u5B9F\u6570\u914D\u5217\u3092\u6E21\u3059\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CE8:"})," ",(0,d.jsx)(e.em,{children:"countArray"}),"\u5F15\u6570\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u30AD\u30FC\u30EF\u30FC\u30C9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3068\u95A2\u9023\u3065\u3051\u3089\u308C\u3066\u3044\u308B\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u95A2\u3057\u3066\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u8B66\u544A"}),": ",(0,d.jsx)(e.strong,{children:"DISTINCT VALUES"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u53CA\u3073\u305D\u3053 \u306B\u542B\u307E\u308C\u308B\u91CD\u8907\u3057\u306A\u3044\u5024\u306E\u6570\u306B\u3088\u3063\u3066\u975E\u5E38\u306B\u5927\u304D\u306A\u914D\u5217\u3092\u4F5C\u6210\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002\u914D\u5217\u306F\u30E1\u30E2\u30EA\u4E0A\u306B\u5B58\u5728\u3057\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u5F8C\u3001\u7D50\u679C\u3092\u30C6\u30B9\u30C8\u3059 \u308B\u306E\u306F\u826F\u3044\u3053\u3068\u3067\u3059\u3002\u3053\u308C\u3092\u884C\u3046\u306B\u306F\u3001\u4F5C\u6210\u3055\u308C\u305F\u914D\u5217\u306E\u30B5\u30A4\u30BA\u3092\u30C6\u30B9\u30C8\u3059\u308B\u304B\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/commands/on-err-call",children:"ON ERR CALL"}),"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30B3\u30DE\u30F3\u30C9\u306E\u547C\u3073\u51FA\u3057\u3092\u30AB\u30D0\u30FC\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"4D Server:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F4D Server\u7528\u306B\u6700\u9069\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u30B5\u30FC\u30D0\u5074\u3067\u914D\u5217\u306E\u4F5C\u6210\u3068\u5024\u306E\u8A08\u7B97\u304C\u884C\u308F\u308C\u3001\u305D\u306E\u5F8C\u5168\u4F53\u304C\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u9001\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:""}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u578B\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u90FD\u5E02\u306E\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u3001\u4F1A\u793E\u306E\u5E97\u8217\u304C\u3042\u308B\u90FD\u5E02\u306E\u6570\u3092\u6C42\u3081\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0ALL RECORDS([Retail Outlets])\xa0// \u30EC\u30B3\u30FC\u30C9\u306E\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\n\xa0DISTINCT VALUES([Retail Outlets]City;asCities)\n\xa0ALERT("\u4F1A\u793E\u306F"+String(Size of array(asCities))+"\u90FD\u5E02\u306B\u5E97\u8217\u3092\u6301\u3061\u307E\u3059\u3002")\n'})}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(e.p,{children:'"Pictures"\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30AD\u30FC\u30EF\u30FC\u30C9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u5B8C\u5168\u306A\u30EA\u30B9\u30C8\u3092\u53D6\u5F97\u3057\u307E\u3059:'}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0ALL RECORDS([PICTURES])\n\xa0ARRAY TEXT(<>_MyKeywords;10)\n\xa0DISTINCT VALUES([PICTURES]Photos;<>_MyKeywords)\n"})}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsx)(e.p,{children:"\u7D71\u8A08\u3092\u8A08\u7B97\u3059\u308B\u305F\u3081\u306B\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u5185\u306E\u56FA\u6709\u306E\u5024\u3092\u964D\u9806\u3067\u4E26\u3079\u66FF\u3048\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0ARRAY TEXT($_issue_type;0)\n\xa0ARRAY LONGINT($_issue_type_instance;0)\n\xa0DISTINCT VALUES([Issue]iType;$_issue_type;$_issue_type_instances)\n\xa0SORT ARRAY($_issue_type_instances;$_issue_type;<)\n"})}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/commands/get-text-keywords",children:"GET TEXT KEYWORDS"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/on-err-call",children:"ON ERR CALL"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/selection-to-array",children:"SELECTION TO ARRAY"})]}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"339"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return t}});var r=s(667294);let d={},i=r.createContext(d);function t(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:t(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);