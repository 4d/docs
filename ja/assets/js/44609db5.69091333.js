"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22236"],{532727:function(n,e,d){d.r(e),d.d(e,{default:()=>j,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/verify-data-file","title":"VERIFY DATA FILE","description":"VERIFY DATA FILE ( structurePath ; dataPath ; objects ; options ; method {; tablesArray {; fieldsArray}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/verify-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/verify-data-file","permalink":"/docs/ja/commands/verify-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fverify-data-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"verify-data-file","title":"VERIFY DATA FILE","slug":"/commands/verify-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"VERIFY CURRENT DATA FILE","permalink":"/docs/ja/commands/verify-current-data-file"},"next":{"title":"Version type","permalink":"/docs/ja/commands/version-type"}}'),s=d("785893"),l=d("250065");let i={id:"verify-data-file",title:"VERIFY DATA FILE",slug:"/commands/verify-data-file",displayed_sidebar:"docs"},t=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:4},{value:"\u4F8B\u984C 5",id:"\u4F8B\u984C-5",level:4},{value:"\u4F8B\u984C 6",id:"\u4F8B\u984C-6",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function x(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"VERIFY DATA FILE"})," ( ",(0,s.jsx)(e.em,{children:"structurePath"})," ; ",(0,s.jsx)(e.em,{children:"dataPath"})," ; ",(0,s.jsx)(e.em,{children:"objects"})," ; ",(0,s.jsx)(e.em,{children:"options"})," ; ",(0,s.jsx)(e.em,{children:"method"})," {; ",(0,s.jsx)(e.em,{children:"tablesArray"})," {; ",(0,s.jsx)(e.em,{children:"fieldsArray"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"structurePath"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u691C\u8A3C\u3059\u308B4D\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u540D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dataPath"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u691C\u8A3C\u3059\u308B4D\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u540D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"objects"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u691C\u8A3C\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"options"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u691C\u8A3C\u30AA\u30D7\u30B7\u30E7\u30F3"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"method"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"4D\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u30E1\u30BD\u30C3\u30C9\u540D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"tablesArray"}),(0,s.jsx)(e.td,{children:"Integer array"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u691C\u8A3C\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u756A\u53F7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"fieldsArray"}),(0,s.jsx)(e.td,{children:"2D Integer array, 2D Integer array, 2D Real array"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u691C\u8A3C\u3059\u308B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u756A\u53F7"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"VERIFY DATA FILE"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(e.em,{children:"structurePath"}),"\u3068",(0,s.jsx)(e.em,{children:"dataPath"}),"\u3067\u6307\u5B9A\u3057\u305F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u4E2D\u306B\u3042\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u69CB\u9020\u7684\u306A\u691C\u8A3C\u3092\u884C\u3044\u307E\u3059\u3002\u30C7\u30FC\u30BF\u691C\u8A3C\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u3001Design Reference\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"structurePath"}),"\u306F\u3001 \u691C\u8A3C\u3059\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u5FDC\u3059\u308B\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB (\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u307E\u305F\u306F\u30A4\u30F3\u30BF\u30D7\u30EA\u30BF\u30FC) \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u958B\u304B\u308C\u305F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3084\u4ED6\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002OS\u306B\u5BFE\u5FDC\u3057\u305F\u5B8C\u5168\u30D1\u30B9\u540D\u3092\u6307\u5B9A\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3059\u3068\u6A19\u6E96\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u3001\u4F7F\u7528\u3059\u308B\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3092\u30E6\u30FC\u30B6\u30FC\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"dataPath"})," \u306F4D\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB (.4DD) \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306F",(0,s.jsx)(e.em,{children:"structurePath"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u30AB\u30EC\u30F3\u30C8\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306F\u6307\u5B9A\u3067\u304D\u306A\u3044 (\u958B\u304B\u308C\u3066\u3044\u3066\u306F\u3044\u3051\u306A\u3044) \u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u73FE\u5728\u958B\u304B\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u691C\u8A3C\u3059\u308B\u305F\u3081\u306B\u306F ",(0,s.jsx)(e.a,{href:"/docs/ja/commands/verify-current-data-file",children:"VERIFY CURRENT DATA FILE"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",(0,s.jsx)(e.strong,{children:"VERIFY DATA FILE"}),"\u3067\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u691C\u8A3C\u3057\u3088\u3046\u3068\u3059\u308B\u3068\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6307\u5B9A\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306F\u8AAD\u307F\u8FBC\u307F\u306E\u307F\u3067\u958B\u304B\u308C\u307E\u3059\u3002\u4ED6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u66F8\u304D\u8FBC\u307F\u53EF\u80FD\u3067\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u306A\u3044\u3088\u3046\u306B\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u691C\u8A3C\u7D50\u679C\u306F\u6B63\u3057\u304F\u306A\u3044\u3082\u306E\u306B\u306A\u308A\u307E\u3059\u3002",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.em,{children:"dataPath"})," \u5F15\u6570\u306B\u7A7A\u306E\u6587\u5B57\u5217\u3001\u30D5\u30A1\u30A4\u30EB\u540D\u3001\u307E\u305F\u306FOS\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u306B\u5BFE\u5FDC\u3057\u305F\u5B8C\u5168\u30D1\u30B9\u540D\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3059\u3068\u6A19\u6E96\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u30C0\u30A4\u30A2\u30ED\u30B0 \u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u3001\u691C\u8A3C\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u3092\u30E6\u30FC\u30B6\u30FC\u304C\u9078\u629E\u3067\u304D\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3067\u304D\u306A\u3044\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u540D\u306E\u307F\u3092\u6E21\u3057\u305F\u5834\u5408\u30014D\u306F\u6307\u5B9A\u3055\u308C\u305F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u968E\u5C64\u306B\u3042\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u63A2\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"objects"})," \u5F15\u6570\u306F\u691C\u8A3C\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u30022\u3064\u306E\u30BF\u30A4\u30D7\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3001\u30EC\u30B3\u30FC\u30C9\u3068\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u691C\u8A3C\u3067\u304D\u307E\u3059\u3002",(0,s.jsx)(e.em,{children:"Data File Maintenance"}),"\u30C6\u30FC\u30DE\u306E\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u5024"}),(0,s.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Verify all"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"16"}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Verify indexes"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"8"}),(0,s.jsx)(e.td,{children:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u7269\u7406\u7684\u306A\u6574\u5408\u6027\u3092\u691C\u8A3C\u3057\u307E\u3059\u304C\u3001\u30C7\u30FC\u30BF\u3068\u306E\u30EA\u30F3\u30AF\u306F\u8003\u616E\u3055\u308C\u307E\u305B\u3093\u3002\u3053\u306E\u691C\u8A3C\u306F\u7121\u52B9\u306A\u30AD\u30FC\u3092\u691C\u77E5\u3057\u307E\u3059\u304C\u3001\u91CD\u8907\u30AD\u30FC (\u540C\u3058\u30EC\u30B3\u30FC\u30C9\u3092\u53C2\u7167\u3059\u308B2\u3064\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9) \u3092\u691C\u51FA\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u3053\u306E\u691C\u8A3C\u3092\u884C\u3046\u306B\u306FVerify All\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Verify records"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"4"}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u30EC\u30B3\u30FC\u30C9\u3068\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u4E21\u65B9\u3092\u691C\u8A3C\u3059\u308B\u306B\u306FVerify Records+Verify Indexes\u3092\u6E21\u3057\u307E\u3059\u30020\u3092\u6E21\u3057\u3066\u3082\u540C\u3058\u7D50\u679C\u304C\u5F97\u3089\u308C\u307E\u3059\u3002Verify All\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6307\u5B9A\u3059\u308B\u3068\u5185\u90E8\u7684\u306A\u691C\u8A3C\u304C\u5B8C\u5168\u306B\u884C\u308F\u308C\u307E\u3059\u3002\u3053\u306E\u691C\u8A3C\u306F\u30ED\u30B0\u306E\u4F5C\u6210\u3068\u4E92\u63DB\u6027\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"options"})," \u5F15\u6570\u306F\u691C\u8A3C\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u306F ",(0,s.jsx)(e.em,{children:"Data File Maintenance"})," \u30C6\u30FC\u30DE\u306E\u4E2D\u304B\u3089\u6307\u5B9A\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u5024"}),(0,s.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Do not create log file"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"16384"}),(0,s.jsx)(e.td,{children:"\u901A\u5E38\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306FXML\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308C\u3070\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306F\u4F5C\u6210\u3055\u308C\u307E\u305B\u3093\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Timestamp log file name"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"262144"}),(0,s.jsx)(e.td,{children:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u6E21\u3055\u308C\u305F\u5834\u5408\u3001\u751F\u6210\u3055\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D\u306F\u4F5C\u6210\u3055\u308C\u305F\u65E5\u6642\u3092\u542B\u307F\u307E\u3059\u3002\u7D50\u679C\u3068\u3057\u3066\u3001\u4EE5\u524D\u306B\u751F\u6210\u3055\u308C\u3066\u3044\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u3069\u308C\u3082\u4E0A\u66F8\u304D\u3059\u308B\u4E8B\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u6E21\u3055\u308C\u3066\u3044\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u540D\u306F\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3055\u308C\u308B\u3053\u3068\u306F\u306A\u304F\u3001\u751F\u6210\u3055\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306F\u305D\u308C\u305E\u308C\u53E4\u3044\u3082\u306E\u3092\u4E0A\u66F8\u304D\u3057\u307E\u3059\u3002"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["\u901A\u5E38\u3001",(0,s.jsx)(e.strong,{children:"VERIFY DATA FILE"})," \u30B3\u30DE\u30F3\u30C9\u306F XML\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3057\u307E\u3059 (\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u6700\u5F8C\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6307\u5B9A\u3057\u3066\u3001\u30ED\u30B0\u306E\u4F5C\u6210\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3067\u304D\u307E\u3059\u3002\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001",(0,s.jsx)(e.em,{children:"options"}),"\u306B0\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"method"})," \u5F15\u6570\u306B\u306F\u3001\u691C\u8A3C\u4E2D\u5B9A\u671F\u7684\u306B\u547C\u3073\u51FA\u3055\u308C\u308B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u30E1\u30BD\u30C3\u30C9\u3092\u8A2D\u5B9A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u7A7A\u306E\u6587\u5B57\u5217\u3042\u308B\u3044\u306F\u7121\u52B9\u306A\u30E1\u30BD\u30C3\u30C9\u540D\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u3053\u306E\u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059(\u30E1\u30BD\u30C3\u30C9\u306F\u547C\u3073\u51FA\u3055\u308C\u307E\u305B\u3093)\u3002\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u3068\u304D\u306F\u3001\u691C\u8A3C\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30BF\u30A4\u30D7\u304A\u3088\u3073\u547C\u3073\u51FA\u3057\u5143\u306E\u30A4\u30D9\u30F3\u30C8\u30BF\u30A4\u30D7\u306B\u3088\u308A\u6700\u5927\u30675\u3064\u306E\u5F15\u6570\u304C\u6E21\u3055\u308C\u307E\u3059(\u4EE5\u4E0B\u306E\u8868\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u30E1\u30BD\u30C3\u30C9\u3067\u306F\u3053\u308C\u3089\u306E\u5F15\u6570\u3092\u5BA3\u8A00\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"$1"}),(0,s.jsx)(e.th,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.th,{children:"\u30E1\u30C3\u30BB\u30FC\u30B8\u30BF\u30A4\u30D7 (\u8868\u53C2\u7167)"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"$2"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30BF\u30A4\u30D7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"$3"}),(0,s.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8"}),(0,s.jsx)(e.td,{children:"\u30E1\u30C3\u30BB\u30FC\u30B8"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"$4"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"\u30C6\u30FC\u30D6\u30EB\u756A\u53F7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"$5"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"\u4E88\u7D04"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u8868\u306F\u3001\u30A4\u30D9\u30F3\u30C8\u30BF\u30A4\u30D7\u3054\u3068\u306E\u5F15\u6570\u306E\u5185\u5BB9\u3092\u793A\u3057\u3066\u3044\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u30A4\u30D9\u30F3\u30C8"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"$1 (Longint)"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"$2 (Longint)"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"$3 (Text)"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"$4 (Longint)"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"$5 (Longint)"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30E1\u30C3\u30BB\u30FC\u30B8"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"\u9032\u884C\u72B6\u6CC1"}),(0,s.jsx)(e.td,{children:"\u51E6\u7406\u7387"}),(0,s.jsx)(e.td,{children:"\u4E88\u7D04"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30E1\u30C3\u30BB\u30FC\u30B8"}),(0,s.jsx)(e.td,{children:"(0-100%)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u691C\u8A3C\u7D42\u4E86 (*)"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30BF\u30A4\u30D7 (**)"}),(0,s.jsx)(e.td,{children:"OK\u30E1\u30C3\u30BB\u30FC\u30B8"}),(0,s.jsx)(e.td,{children:"\u30C6\u30FC\u30D6\u30EB\u307E\u305F\u306F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9"}),(0,s.jsx)(e.td,{children:"\u4E88\u7D04"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30C6\u30B9\u30C8"}),(0,s.jsx)(e.td,{children:"\u756A\u53F7"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30A8\u30E9\u30FC"}),(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30BF\u30A4\u30D7 (**)"}),(0,s.jsx)(e.td,{children:"\u30A8\u30E9\u30FC\u30C6\u30AD\u30B9\u30C8-"}),(0,s.jsx)(e.td,{children:"\u30C6\u30FC\u30D6\u30EB\u307E\u305F\u306F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9"}),(0,s.jsx)(e.td,{children:"\u4E88\u7D04"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30E1\u30C3\u30BB\u30FC\u30B8"}),(0,s.jsx)(e.td,{children:"\u756A\u53F7"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u5B9F\u884C\u7D42\u4E86"}),(0,s.jsx)(e.td,{children:"4"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"\u7D42\u4E86"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"\u4E88\u7D04"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u8B66\u544A"}),(0,s.jsx)(e.td,{children:"5"}),(0,s.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30BF\u30A4\u30D7 (**)"}),(0,s.jsx)(e.td,{children:"\u30A8\u30E9\u30FC\u30C6\u30AD\u30B9\u30C8"}),(0,s.jsx)(e.td,{children:"\u30C6\u30FC\u30D6\u30EB\u307E\u305F\u306F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9"}),(0,s.jsx)(e.td,{children:"\u4E88\u7D04"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30E1\u30C3\u30BB\u30FC\u30B8"}),(0,s.jsx)(e.td,{children:"\u756A\u53F7"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["(*) \u30E2\u30FC\u30C9\u304CVerify All\u3067\u3042\u308B\u3068\u304D\u3001\u691C\u8A3C\u7D42\u4E86 ($1=2) \u304C\u8FD4\u3055\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u306FVerify Records \u307E\u305F\u306F Verify Indexes \u30E2\u30FC\u30C9\u3067\u306E\u307F\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002",(0,s.jsx)(e.br,{}),"\n(**) ",(0,s.jsx)(e.em,{children:"Object type"}),": \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30BF\u30A4\u30D7: \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u691C\u8A3C\u3055\u308C\u308B\u3068\u3001OK\u30E1\u30C3\u30BB\u30FC\u30B8 ($1=2)\u3001\u30A8\u30E9\u30FC ($1=3)\u3001\u8B66\u544A ($1=5) \u304C\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002$2\u306B\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30BF\u30A4\u30D7\u306F\u4EE5\u4E0B\u306E\u3046\u3061\u306E\u3044\u305A\u308C\u304B\u306B\u306A\u308A\u307E\u3059:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"0 = \u4E0D\u660E"}),"\n",(0,s.jsx)(e.li,{children:"4 = \u30EC\u30B3\u30FC\u30C9"}),"\n",(0,s.jsx)(e.li,{children:"8 = \u30A4\u30F3\u30C7\u30C3\u30AF\u30B9"}),"\n",(0,s.jsx)(e.li,{children:"16 = \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8 (\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306E\u4E88\u5099\u691C\u8A3C)"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u7279\u5225\u306A\u30B1\u30FC\u30B9: $1\u304C2\u30013\u3001\u307E\u305F\u306F5\u306E\u3068\u304D\u3001$4\u304C0\u306A\u3089\u3070\u3001\u305D\u308C\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u30C6\u30FC\u30D6\u30EB\u3084\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u3064\u3044\u3066\u3067\u306F\u306A\u304F\u3001\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u5168\u4F53\u306B\u95A2\u3059\u308B\u3082\u306E\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u30E1\u30BD\u30C3\u30C9\u306F$0\u306B\u500D\u9577\u6574\u6570\u5024\u3092\u8FD4\u3055\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u308C\u306F\u51E6\u7406\u306E\u5B9F\u884C\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"$0 = 0\u306E\u6642\u3001\u51E6\u7406\u306F\u901A\u5E38\u901A\u308A\u7D9A\u884C\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"$0 = -128\u306E\u6642\u3001\u51E6\u7406\u306F\u505C\u6B62\u3055\u308C\u307E\u3059\u304C\u3001\u30A8\u30E9\u30FC\u306F\u751F\u6210\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,s.jsx)(e.li,{children:"$0 = \u4ED6\u306E\u5024\u306E\u6642\u3001\u51E6\u7406\u304C\u505C\u6B62\u3055\u308C\u3001$0\u306B\u8FD4\u3055\u308C\u305F\u5024\u3092\u30A8\u30E9\u30FC\u756A\u53F7\u3068\u3057\u3066\u30A8\u30E9\u30FC\u3092\u751F\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30A8\u30E9\u30FC\u306F\u30A8\u30E9\u30FC\u30CF\u30F3\u30C9\u30E9\u30E1\u30BD\u30C3\u30C9\u3067\u3068\u3089\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6CE8:"})," \u5B9F\u884C\u7D42\u4E86\u30A4\u30D9\u30F3\u30C8 ($4=1) \u304C\u751F\u6210\u3055\u308C\u305F\u5F8C\u3001$0\u3092\u4F7F\u7528\u3057\u3066\u5B9F\u884C\u3092\u4E2D\u65AD\u3055\u305B\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"2\u3064\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u914D\u5217\u3092\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u5229\u7528\u3067\u304D\u307E\u3059:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"tablesArray"})," \u914D\u5217\u306B\u306F\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u304C\u542B\u307E\u308C\u3001\u30EC\u30B3\u30FC\u30C9\u3092\u691C\u8A3C\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306F\u691C\u8A3C\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u3092\u5236\u9650\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u304B\u914D\u5217\u304C\u7A7A\u306E\u5834\u5408\u3067\u3001",(0,s.jsx)(e.em,{children:"objects"}),"\u5F15\u6570\u306BVerify Records\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u3059\u3079\u3066\u306E\u30C6\u30FC\u30D6\u30EB\u304C\u691C\u8A3C\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"fieldsArray"})," \u914D\u5217\u306B\u306F\u691C\u8A3C\u5BFE\u8C61\u3068\u3059\u308B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u4ED8\u304D\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u3053\u306E\u5F15\u6570\u304C\u6E21\u3055\u308C\u306A\u3044\u304B\u914D\u5217\u304C\u7A7A\u306E\u5834\u5408\u3067\u3001",(0,s.jsx)(e.em,{children:"objects"}),"\u5F15\u6570\u306BVerify Indexes\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u3059\u3079\u3066\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u691C\u8A3C\u3055\u308C\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u306F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u7121\u3044\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u7121\u8996\u3057\u307E\u3059\u3002\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u8907\u6570\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u3001\u3059\u3079\u3066\u304C\u691C\u8A3C\u3055\u308C\u307E\u3059\u3002\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u8907\u5408\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u4E00\u90E8\u3067\u3042\u308B\u5834\u5408\u3001\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u5168\u4F53\u304C\u691C\u8A3C\u3055\u308C\u307E\u3059\u3002",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.em,{children:"fieldsArray"}),"\u306B\u306F\u4E8C\u6B21\u5143\u914D\u5217\u3092\u6E21\u3057\u307E\u3059\u3002\u914D\u5217\u306E\u5185\u5BB9\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059:",(0,s.jsx)(e.br,{}),"\n- \u8981\u7D20 {0} \u306B\u306F\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u304C\u542B\u307E\u308C\u307E\u3059\u3002",(0,s.jsx)(e.br,{}),"\n- \u4ED6\u306E\u8981\u7D20 {1...x} \u306B\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\u304C\u542B\u307E\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067",(0,s.jsx)(e.strong,{children:"VERIFY DATA FILE"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001(",(0,s.jsx)(e.em,{children:"options"}),"\u5F15\u6570\u306BDo not create log file\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070) XML\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E",(0,s.jsx)(e.strong,{children:"Logs"}),'\u30D5\u30A9\u30EB\u30C0\u306B\u4F5C\u6210\u3055\u308C\u3001\u540D\u524D\u3082\u30AB\u30EC\u30F3\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306B\u57FA\u3065\u3044\u305F\u3082\u306E\u304C\u3064\u3051\u3089\u308C\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\u201CmyDB.4db\u201D\u3068\u3044\u3046\u540D\u524D\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3057\u3066\u306F\u3001\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306F\u201CmyDB_Verify_Log.xml\u201D\u3068\u3044\u3046\u540D\u524D\u304C\u4ED8\u3051\u3089\u308C\u307E\u3059\u3002Timestamp log file name\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6E21\u3057\u3066\u3044\u305F\u5834\u5408\u3001\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u540D\u306B\u306F"YYYY-MM-DD HH-MM-SS"\u3068\u3044\u3046\u5F62\u5F0F\u3067\u4F5C\u6210\u6642\u306E\u65E5\u6642\u306E\u60C5\u5831\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u540D\u306F\u4F8B\u3068\u3057\u3066\u6B21\u306E\u3088\u3046\u306A\u5F62\u306B\u306A\u308A\u307E\u3059:\u201CmyDB_Verify_Log_2015-09-27 15-20-35.xml\u201D \u3053\u308C\u306F\u3064\u307E\u308A\u305D\u308C\u305E\u308C\u306E\u65B0\u3057\u3044\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306F\u4EE5\u524D\u306E\u3082\u306E\u3092\u7F6E\u304D\u63DB\u3048\u308B\u4E8B\u306F\u306A\u3044\u4E00\u65B9\u3001\u4E0D\u8981\u306A\u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664\u3059\u308B\u305F\u3081\u306B\u306F\u3044\u304F\u3064\u304B\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u624B\u52D5\u3067\u524A\u9664\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002',(0,s.jsx)(e.br,{}),"\n\u9078\u629E\u3055\u308C\u305F\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u95A2\u308F\u3089\u305A\u3001\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u304C\u751F\u6210\u3055\u308C\u308B\u3068\u305D\u306E\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u30D1\u30B9\u306F\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u5F8C\u306B",(0,s.jsx)(e.em,{children:"Document"}),"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3078\u3068\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,s.jsx)(e.p,{children:"\u30C7\u30FC\u30BF\u3068\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u691C\u8A3C:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0VERIFY DATA FILE($StructName;$DataName;Verify indexes+Verify records;Do not create log file;"")\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,s.jsx)(e.p,{children:"\u5B8C\u5168\u306A\u691C\u8A3C\u3092\u884C\u3044\u3001\u30ED\u30B0\u3092\u4F5C\u6210\u3059\u308B:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0VERIFY DATA FILE($StructName;$DataName;Verify all;0;"")\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,s.jsx)(e.p,{children:"\u30EC\u30B3\u30FC\u30C9\u306E\u307F\u306E\u691C\u8A3C:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0VERIFY DATA FILE($StructName;$DataName;Verify records;0;"")\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,s.jsx)(e.p,{children:"\u30C6\u30FC\u30D6\u30EB3\u30687\u306E\u30EC\u30B3\u30FC\u30C9\u306E\u307F\u3092\u691C\u8A3C:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($arrTableNums;2)\n\xa0$arrTableNums{1}:=3\n\xa0$arrTableNums{2}:=7\n\xa0VERIFY DATA FILE($StructName;$DataName;Verify records;0;"FollowScan";$arrTableNums)\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C-5",children:"\u4F8B\u984C 5"}),"\n",(0,s.jsx)(e.p,{children:"\u7279\u5B9A\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u691C\u8A3C ([table4]field1\u3001[table5]field2\u3068field3):"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($arrTableNums;0)\xa0//\u4F7F\u7528\u3057\u306A\u3044\u304C\u5FC5\u9808\n\xa0ARRAY LONGINT($arrIndex;2;0)\xa0//2\u884C (\u5217\u306F\u5F8C\u3067\u8FFD\u52A0)\n\xa0$arrIndex{1}{0}:=4\xa0// \u8981\u7D200\u306B\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\n\xa0APPEND TO ARRAY($arrIndex{1};1)\xa0//\u691C\u8A3C\u3059\u308B1\u756A\u76EE\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\n\xa0$arrIndex{2}{0}:=5\xa0// \u8981\u7D200\u306B\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\n\xa0APPEND TO ARRAY($arrIndex{2};2)\xa0// \u691C\u8A3C\u3059\u308B1\u756A\u76EE\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\n\xa0APPEND TO ARRAY($arrIndex{2};3)\xa0// \u691C\u8A3C\u3059\u308B2\u756A\u76EE\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\n\xa0VERIFY DATA FILE($StructName;$DataName;Verify indexes;0;"FollowScan";$arrTableNums;$arrIndex)\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C-6",children:"\u4F8B\u984C 6"}),"\n",(0,s.jsx)(e.p,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306E\u691C\u8A3C\u3068\u3001\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306E\u4F5C\u6210\u304A\u3088\u3073\u8868\u793A:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0VERIFY DATA FILE(Structure file;Data file;Verify all;0;"")\n\xa0SHOW ON DISK(File(Verification log file).platformPath)\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,s.jsx)(e.p,{children:"\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u30E1\u30BD\u30C3\u30C9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u691C\u8A3C\u306F\u5B9F\u884C\u3055\u308C\u305A\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B\u306F0\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u304C\u751F\u6210\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u305D\u306E\u5B8C\u5168\u30D1\u30B9\u540D\u304CDocument\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3078\u3068\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/docs/ja/commands/verify-current-data-file",children:"VERIFY CURRENT DATA FILE"})}),"\n",(0,s.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(e.td,{children:"939"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(e.td,{children:"\u2713"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,s.jsx)(e.td,{children:"OK\u3001Document\u3001error"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return t},a:function(){return i}});var r=d(667294);let s={},l=r.createContext(s);function i(n){let e=r.useContext(l);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);