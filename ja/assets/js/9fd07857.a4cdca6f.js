"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18303"],{394193:function(e,n,d){d.r(n),d.d(n,{default:()=>j,frontMatter:()=>l,metadata:()=>s,assets:()=>t,toc:()=>x,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/set-index","title":"SET INDEX","description":"SET INDEX ( aField ; index {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-index.md","sourceDirName":"commands-legacy","slug":"/commands/set-index","permalink":"/docs/ja/commands/set-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-index.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-index","title":"SET INDEX","slug":"/commands/set-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET EXTERNAL DATA PATH","permalink":"/docs/ja/commands/set-external-data-path"},"next":{"title":"Table","permalink":"/docs/ja/commands/table"}}'),r=d("785893"),i=d("250065");let l={id:"set-index",title:"SET INDEX",slug:"/commands/set-index",displayed_sidebar:"docs"},c=void 0,t={},x=[{value:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",id:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",level:4},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u914D\u5E03\u306B\u95A2\u3059\u308B\u6CE8\u610F",id:"\u914D\u5E03\u306B\u95A2\u3059\u308B\u6CE8\u610F",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET INDEX"})," ( ",(0,r.jsx)(n.em,{children:"aField"})," ; ",(0,r.jsx)(n.em,{children:"index"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aField"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u6210\u307E\u305F\u306F\u524A\u9664\u3059\u308B\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"index"}),(0,r.jsx)(n.td,{children:"Boolean, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"True=\u4F5C\u6210\u3001False=\u524A\u9664\u3001\u307E\u305F\u306F \u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u6210: -1=\u30AD\u30FC\u30EF\u30FC\u30C9\u3001 0=\u30C7\u30D5\u30A9\u30EB\u30C8\u30011=\u6A19\u6E96B-Tree\u30013=\u30AF\u30E9\u30B9\u30BFB-Tree"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"*\u3092\u6E21\u3059\u3068\u975E\u540C\u671F\u306B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u6210"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET INDEX"})," \u306F\u65E7\u5F0F\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u306F\u3042\u308A\u307E\u3059\u304C\u3001\u3053\u308C\u306F\u5B8C\u5168\u306B\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u304A\u308A\u3001\u65E2\u5B58\u306E\u30B3\u30FC\u30C9\u3092\u66F8\u304D\u63DB\u3048\u308B\u3053\u3068\u306A\u304F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u7DAD\u6301\u3057\u3066\u3088\u3044\u30B3\u30DE\u30F3\u30C9\u3067\u3059\u3002\u3057\u304B\u3057\u306A\u304C\u3089\u3001\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u7BA1\u7406\u3059\u308B\u305F\u3081\u306B\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/commands/create-index",children:"CREATE INDEX"})," \u304A\u3088\u3073 ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/delete-index",children:"DELETE INDEX"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u305F\u65B9\u304C\u3001\u3088\u308A\u591A\u304F\u306E\u6A5F\u80FD\u304C\u63D0\u4F9B\u3055\u308C\u308B\u305F\u3081\u3001\u63A8\u5968\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET INDEX"})," \u306B\u306F2\u3064\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5F15\u6570",(0,r.jsx)(n.em,{children:"index"}),"\u306B\u30D6\u30FC\u30EB\u3092\u6E21\u3059\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F",(0,r.jsx)(n.em,{children:"aField"}),"\u306B\u6E21\u3057\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u7528\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u6210\u3057\u305F\u308A\u3001\u524A\u9664\u3057\u305F\u308A\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5F15\u6570",(0,r.jsx)(n.em,{children:"index"}),"\u306B\u6574\u6570\u3092\u6E21\u3059\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u6307\u5B9A\u3055\u308C\u305F\u30BF\u30A4\u30D7\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"index = \u30D6\u30FC\u30EB"}),(0,r.jsx)(n.br,{}),"\n\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3059\u308B\u306B\u306F\u3001",(0,r.jsx)(n.em,{children:"index"}),"\u306BTrue\u3092\u6E21\u3057\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u30BF\u30A4\u30D7\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u65E2\u306B\u5B58\u5728\u3059\u308B\u5834\u5408\u3001\u547C\u3073\u51FA\u3057\u306F\u6A5F\u80FD\u3057\u307E\u305B\u3093\u3002",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"index"}),"\u306BFales\u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u95A2\u9023\u3065\u3051\u3089\u308C\u305F\u3059\u3079\u3066\u306E\u6A19\u6E96\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (\u975E\u8907\u5408\u3001\u975E\u30AD\u30FC\u30EF\u30FC\u30C9) \u3092\u524A\u9664\u3057\u307E\u3059\u3002\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u547C\u3073\u51FA\u3057\u306F\u6A5F\u80FD\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"index = \u6574\u6570"}),(0,r.jsx)(n.br,{}),"\n\u30B3\u30DE\u30F3\u30C9\u306F",(0,r.jsx)(n.em,{children:"aField"}),"\u306B\u5BFE\u3057\u3066\u6307\u5B9A\u3055\u308C\u305F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002",(0,r.jsx)(n.em,{children:"Index Type"})," \u30C6\u30FC\u30DE\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u305A\u308C\u304B1\u3064\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{children:"\u5024"}),(0,r.jsx)(n.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cluster BTree Index"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"\u30AF\u30E9\u30B9\u30BF\u3092\u4F7F\u7528\u3059\u308BB-Tree\u30BF\u30A4\u30D7\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3002\u3053\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u30BF\u30A4\u30D7\u306F\u3001\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u5C11\u6570\u306E\u30AD\u30FC\u3092\u6301\u3064\u5834\u5408\u3001\u3064\u307E\u308A\u540C\u3058\u5024\u304C\u30C7\u30FC\u30BF\u5185\u3067\u983B\u7E41\u306B\u751F\u3058\u308B\u5834\u5408\u306B\u6700\u3082\u9069\u3057\u3066\u3044\u307E\u3059\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Default Index Type"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"4D\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5FDC\u3058\u3066\u6700\u9069\u306A\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u30BF\u30A4\u30D7\u3092\u8A2D\u5B9A\u3057\u307E\u3059 (\u30AD\u30FC\u30EF\u30FC\u30C9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u9664\u304F) \u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Keywords Index"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsxs)(n.td,{children:["\u30AD\u30FC\u30EF\u30FC\u30C9\u30BF\u30A4\u30D7\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3002\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u8907\u5408\u30BF\u30A4\u30D7\u306B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002",(0,r.jsx)(n.em,{children:"fieldsArray"}),"\u914D\u5217\u306B\u306F\u3072\u3068\u3064\u3060\u3051\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6E21\u3057\u307E\u3059\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Standard BTree Index"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"\u6A19\u6E96 B-Tree\u30BF\u30A4\u30D7\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3002\u3053\u306E\u591A\u76EE\u7684\u7528\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u30BF\u30A4\u30D7\u306F4D\u306E\u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8:"})," \u30C6\u30AD\u30B9\u30C8\u578B\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u8A2D\u5B9A\u3055\u308C\u305FB\u30C4\u30EA\u30FC\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306F\u6700\u5927\u3067\u6700\u521D\u306E1024\u6587\u5B57\u3092\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u5316\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u30011024\u6587\u5B57\u4EE5\u4E0A\u3092\u542B\u3080\u6587\u5B57\u5217\u306E\u691C\u7D22\u7D50\u679C\u306F\u6B63\u3057\u304F\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET INDEX"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u4ED8\u3051\u306F\u884C\u3044\u307E\u305B\u3093\u3002\u30EC\u30B3\u30FC\u30C9\u304C\u30ED\u30C3\u30AF\u89E3\u9664\u3055\u308C\u308B\u307E\u3067\u5F85\u6A5F\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570***\u3092\u7528\u3044\u3066\u3001\u975E\u540C\u671F\u306B\uFF08\u540C\u6642\u306B\uFF09\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u4ED8\u3051\u3089\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u975E\u540C\u671F\u306A\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u4ED8\u3051\u306B\u3088\u308A\u3001\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u4ED8\u3051\u304C\u7D42\u4E86\u3057\u305F\u304B\u3069\u3046\u304B\u306B\u95A2\u4FC2\u306A\u304F\u3001\u547C\u3073\u51FA\u3057\u5074\u306E\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u884C\u3092\u305D\u306E\u307E\u307E\u7D9A\u884C\u3067\u304D\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u5FC5\u8981\u306A\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u5931\u6557\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u4F5C\u6210\u3055\u308C\u305F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u306F\u540D\u524D\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u540D\u524D\u306B\u57FA\u3065\u304F\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u7528\u3044\u3066\u3044\u308B",(0,r.jsx)(n.a,{href:"/docs/ja/commands/delete-index",children:"DELETE INDEX"})," \u30B3\u30DE\u30F3\u30C9\u3067\u305D\u308C\u3089\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u524A\u9664\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u8907\u5408\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u6210\u3057\u305F\u308A\u524A\u9664\u3059\u308B\u305F\u3081\u306B\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/create-index",children:"CREATE INDEX"})," \u3067\u4F5C\u6210\u3055\u308C\u305F\u30AD\u30FC\u30EF\u30FC\u30C9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u524A\u9664\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u914D\u5E03\u306B\u95A2\u3059\u308B\u6CE8\u610F",children:"\u914D\u5E03\u306B\u95A2\u3059\u308B\u6CE8\u610F"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u3001\u8AAD\u307F\u51FA\u3057\u5C02\u7528\u306E\u30D1\u30C3\u30B1\u30FC\u30B8\u30A2\u30D7\u30EA(",(0,r.jsx)(n.em,{children:"Program Files"})," \u30D5\u30A9\u30EB\u30C0\u5185\u306B\u307E\u305F\u306F.4dz \u30D5\u30A1\u30A4\u30EB\u5185\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B.4dc \u30D5\u30A1\u30A4\u30EB)\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u306F\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001",(0,r.jsx)(n.em,{children:"[Customers]ID"}),"\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4ED8\u3051\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0UNLOAD RECORD([Customers])\n\xa0SET INDEX([Customers]ID;True)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"[Customers]Name"})," \u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u975E\u540C\u671F\u30E2\u30FC\u30C9\u3067\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3057\u307E\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET INDEX([Customers]Name;True;*)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,r.jsx)(n.p,{children:"\u30AD\u30FC\u30EF\u30FC\u30C9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u6210\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET INDEX([Books]Summary;Keywords Index)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/create-index",children:"CREATE INDEX"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/delete-index",children:"DELETE INDEX"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/order-by",children:"ORDER BY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/query",children:"QUERY"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"344"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return c},a:function(){return l}});var s=d(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);