"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35649"],{80809:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/listbox-insert-column","title":"LISTBOX INSERT COLUMN","description":"LISTBOX INSERT COLUMN ( { ;} object ; colPosition ; colName ; colVariable ; headerName ; headerVar {; footerName ; footerVar*} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-insert-column.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-insert-column","permalink":"/docs/ja/20-R7/commands/listbox-insert-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-insert-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-insert-column","title":"LISTBOX INSERT COLUMN","slug":"/commands/listbox-insert-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET TABLE SOURCE","permalink":"/docs/ja/20-R7/commands/listbox-get-table-source"},"next":{"title":"LISTBOX INSERT COLUMN FORMULA","permalink":"/docs/ja/20-R7/commands/listbox-insert-column-formula"}}'),l=r("785893"),d=r("250065");let i={id:"listbox-insert-column",title:"LISTBOX INSERT COLUMN",slug:"/commands/listbox-insert-column",displayed_sidebar:"docs"},t=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u52D5\u7684\u306B\u5217\u3092\u633F\u5165",id:"\u52D5\u7684\u306B\u5217\u3092\u633F\u5165",level:5},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX INSERT COLUMN"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"object"})," ; ",(0,l.jsx)(n.em,{children:"colPosition"})," ; ",(0,l.jsx)(n.em,{children:"colName"})," ; ",(0,l.jsx)(n.em,{children:"colVariable"})," ; ",(0,l.jsx)(n.em,{children:"headerName"})," ; ",(0,l.jsx)(n.em,{children:"headerVar"})," {; ",(0,l.jsx)(n.em,{children:"footerName"})," ; ",(0,l.jsx)(n.em,{children:"footerVar"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5F15\u6570"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u6307\u5B9A\u6642, object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, object\u306F\u5909\u6570"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"object"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F \u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"colPosition"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u5217\u306E\u633F\u5165\u5834\u6240"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"colName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u5217\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"colVariable"}),(0,l.jsx)(n.td,{children:"Array, Field, Variable, Pointer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u5217\u914D\u5217\u540D \u307E\u305F\u306F \u30D5\u30A3\u30FC\u30EB\u30C9 \u307E\u305F\u306F \u5909\u6570"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"headerName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u5217\u30D8\u30C3\u30C0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"headerVar"}),(0,l.jsx)(n.td,{children:"Integer, Pointer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u5217\u30D8\u30C3\u30C0\u5909\u6570"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"footerName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u5217\u30D5\u30C3\u30BF\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"footerVar"}),(0,l.jsx)(n.td,{children:"Variable, Pointer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u5217\u30D5\u30C3\u30BF\u30FC\u5909\u6570"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX INSERT COLUMN"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,l.jsx)(n.em,{children:"object"}),"\u5F15\u6570\u304A\u3088\u3073 ",(0,l.jsx)(n.em,{children:"*"})," \u3067\u6307\u5B9A\u3055\u308C\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u5217\u3092\u633F\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u968E\u5C64\u30E2\u30FC\u30C9\u3067\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5148\u982D\u5217\u306B\u9069\u7528\u3055\u308C\u3066\u3082\u306A\u306B\u3082\u884C\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570 ",(0,l.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3059\u3053\u3068\u306B\u3088\u308A\u3001",(0,l.jsx)(n.em,{children:"object"}),"\u5F15\u6570\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\uFF08\u6587\u5B57\u5217\uFF09\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,l.jsx)(n.em,{children:"object"}),"\u5F15\u6570\u304C\u5909\u6570\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F",(0,l.jsx)(n.em,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u65B0\u3057\u3044\u5217\u306F\u3001",(0,l.jsx)(n.em,{children:"colPosition"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u5217\u306E\u76F4\u524D\u306B\u633F\u5165\u3055\u308C\u307E\u3059\u3002",(0,l.jsx)(n.em,{children:"colPosition"}),"\u5F15\u6570\u306E\u5024\u304C\u5217\u306E\u5408\u8A08\u6570\u3088\u308A\u3082\u5927\u304D\u3044\u5834\u5408\u3001\u6700\u5F8C\u306E\u5217\u306E\u5F8C\u308D\u306B\u30AB\u30E9\u30E0\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"colName"}),"\u3068",(0,l.jsx)(n.em,{children:"colVariable"}),"\u306B\u306F\u3001\u633F\u5165\u3059\u308B\u5217\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u304A\u3088\u3073\u5909\u6570\u540D\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u914D\u5217\u30BF\u30A4\u30D7\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5834\u5408\u3001\u5217\u306B\u8868\u793A\u3059\u308B\u5185\u5BB9\u304C\u683C\u7D0D\u3055\u308C\u305F\u914D\u5217\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002\u30D5\u30A9\u30FC\u30E0\u304C\u5B9F\u884C\u3055\u308C\u308B\u969B\u3001\u52D5\u7684\u306A\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001Nil (->[]) \u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u6E21\u3059\u4E8B\u304C\u3067\u304D\u307E\u3059(\u4EE5\u4E0B\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u578B\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5834\u5408\u3001",(0,l.jsx)(n.em,{children:"colVariable"}),'\u5F15 \u6570\u306B\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3092\u6E21\u3057\u307E\u3059\u3002\u7D50\u679C\u5217\u306E\u5185\u5BB9\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u30EC\u30B3\u30FC\u30C9\u3054\u3068\u306B\u8A55\u4FA1\u3055\u308C\u308B\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u306E \u5024\u3068\u306A\u308A\u307E\u3059\u3002\u3053\u306E\u30BF\u30A4\u30D7\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E"\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9"\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u307E\u305F\u306F\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u306B\u306E \u307F\u4F7F\u7528\u3067\u304D\u307E\u3059 (',(0,l.jsx)(n.em,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u7BA1\u7406"}),"\u3092\u53C2\u7167)\u3002\u6587\u5B57\u5217, \u6570\u5024, \u65E5\u4ED8, \u6642\u9593, \u30D4\u30AF\u30C1\u30E3, \u30D6\u30FC\u30EB\u30BF\u30A4\u30D7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30EC\u30B3\u30FC\u30C9\u306E\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u57FA\u3065\u3044\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u306F\u3001",(0,l.jsx)(n.strong,{children:"LISTBOX INSERT COLUMN"}),"\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570\u306A\u3069\u306E\u5358\u7D14\u306A\u8981\u7D20\u3092\u633F\u5165\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3084\u30E1\u30BD\u30C3\u30C9\u306A\u3069\u306E\u3088\u308A\u8907\u96D1\u306A\u8868\u73FE\u5F0F\u3092\u4F7F\u7528\u3057\u305F\u3044\u5834\u5408\u306F",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/listbox-insert-column-formula",children:"LISTBOX INSERT COLUMN FORMULA"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",(0,l.jsx)(n.br,{}),"\n\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u578B/\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u578B\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3082\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u304C\u3001\u3057\u304B\u3057\u306A\u304C\u3089",(0,l.jsx)(n.em,{children:"colName"})," \u5F15\u6570\u304C\u5F0F\u3092\u53D7\u3051\u4ED8\u3051\u306A\u3044\u305F\u3081\u3001\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3092\u6307\u5B9A\u3059\u308B\u306B\u306F",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/listbox-set-column-formula",children:"LISTBOX SET COLUMN FORMULA"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u306B\u306F",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/listbox-insert-column-formula",children:"LISTBOX INSERT COLUMN FORMULA"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u307B\u3046\u304C\u3088\u308A\u9069\u5207\u3067\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6CE8:"})," \u540C\u3058\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u3067\u3001\u914D\u5217\u3092\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3068\u3059\u308B\u5217\u3068\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570\u3092\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3068\u3059\u308B\u5217\u3092\u6DF7\u5728\u3055\u305B\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"headerName"}),"\u3068",(0,l.jsx)(n.em,{children:"headerVar"}),"\u306B\u306F\u3001\u633F\u5165\u3055\u308C\u308B\u5217\u306E\u30D8\u30C3\u30C0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u304A\u3088\u3073\u5909\u6570\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"footerName"}),"\u3068",(0,l.jsx)(n.em,{children:"footerVar"}),"\u306B\u3082\u3001\u633F\u5165\u3055\u308C\u308B\u5217\u306E\u30D8\u30C3\u30C0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u304A\u3088\u3073\u5909\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6CE8:"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306F\u3001\u30D5\u30A9\u30FC\u30E0\u5185\u3067\u91CD\u8907\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002",(0,l.jsx)(n.em,{children:"colName"}),"\u3084",(0,l.jsx)(n.em,{children:"headerName"}),"\u3001",(0,l.jsx)(n.em,{children:"footerName"}),"\u306B\u6E21\u3055\u308C\u308B\u540D\u524D\u304C\u65E2\u306B\u4F7F\u7528\u3055\u308C\u3066\u3044\u306A\u3044\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u91CD\u8907\u3057\u305F\u540D\u524D\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u5217\u306F\u4F5C\u6210\u3055\u308C\u305A\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.h5,{id:"\u52D5\u7684\u306B\u5217\u3092\u633F\u5165",children:"\u52D5\u7684\u306B\u5217\u3092\u633F\u5165"}),"\n",(0,l.jsx)(n.p,{children:"\u30D5\u30A9\u30FC\u30E0\u5B9F\u884C\u4E2D\u306B\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30AB\u30E9\u30E0\u3092\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u3078\u3068\u52D5\u7684\u306B\u633F\u5165\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u305D\u306E\u969B\u3001\u5FC5\u8981\u306A\u5909\u6570(\u30AB\u30E9\u30E0\u3001\u30D5\u30C3\u30BF\u30FC\u3001\u30D8\u30C3\u30C0\u30FC)\u306E\u5B9A\u7FA9\u30924D\u304C\u81EA\u52D5\u7684\u306B\u884C\u3044\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u3053\u308C\u3092\u53EF\u80FD\u306B\u3059\u308B\u305F\u3081\u3001",(0,l.jsx)(n.strong,{children:"LISTBOX DUPLICATE COLUMN"})," \u306F ",(0,l.jsx)(n.em,{children:"colVariable"})," (\u914D\u5217\u578B\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u307F)\u3001",(0,l.jsx)(n.em,{children:"headerVar"}),"\u3001 ",(0,l.jsx)(n.em,{children:"footerVar"})," \u5F15\u6570\u306B\u304A\u3044\u3066",(0,l.jsx)(n.strong,{children:"Nil"})," (",(0,l.jsx)(n.strong,{children:"->[]"}),") \u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u5F15\u6570\u3068\u3057\u3066\u53D7\u3051\u5165\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002Nil\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u6E21\u3057\u3066\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u30014D\u306F\u5FC5\u8981\u306A\u5909\u6570\u3092\u52D5\u7684\u306B\u4F5C\u6210\u3057\u307E\u3059(\u8A73\u7D30\u306B\u95A2\u3057\u3066\u306F\u3001 \u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30D8\u30C3 \u30C0\u30FC\u5909\u6570\u3068\u30D5\u30C3\u30BF\u30FC\u5909\u6570\u306F\u5E38\u306B\u7279\u5B9A\u306E\u30BF\u30A4\u30D7\u3067\u4F5C\u6210\u3055\u308C\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044(\u30D8\u30C3\u30C0\u30FC\u306F\u500D\u9577\u6574\u6570\u3001\u30D5\u30C3\u30BF\u30FC\u306F\u30C6\u30AD\u30B9\u30C8)\u3002\u53CD\u5BFE\u306B\u3001\u30AB\u30E9\u30E0\u5909\u6570\u306F\u4F5C\u6210 \u6642\u306B\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306F\u30AB\u30E9\u30E0\u5909\u6570\u306B\u5BFE\u3057\u3066\u3001\u7570\u306A\u308B\u30BF\u30A4\u30D7\u306E\u914D\u5217(\u30C6\u30AD\u30B9\u30C8\u914D\u5217\u3001\u500D\u9577\u6574\u6570\u914D\u5217\u3001\u7B49\u3005)\u3092\u53D7\u3051\u5165\u308C\u308B\u3053\u3068 \u304C\u3067\u304D\u308B\u304B\u3089\u3067\u3059\u3002\u3053\u308C\u306F\u3064\u307E\u308A\u914D\u5217\u306E\u30BF\u30A4\u30D7\u3092\u624B\u52D5\u3067\u8A2D\u5B9A\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3068\u3044\u3046\u4E8B\u3067\u3059(\u4F8B\u984C3\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002\u3053\u3046\u3044\u3063\u305F\u30BF\u30A4\u30D7\u306E\u6307\u5B9A\u306F\u3001\u914D\u5217\u306B \u65B0\u3057\u3044\u8981\u7D20\u3092\u633F\u5165\u3059\u308B\u305F\u3081\u306B ",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/listbox-insert-rows",children:"LISTBOX INSERT ROWS"})," \u306A\u3069\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u524D\u306B\u5B9F\u884C\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u305D\u306E\u4ED6\u306B\u306F\u3001 ",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/append-to-array",children:"APPEND TO ARRAY"})," \u3092\u4F7F\u7528\u3057\u3066\u914D\u5217\u306E\u578B\u3092\u6307\u5B9A\u3057\u3001\u8981\u7D20\u3092\u633F\u5165\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,l.jsx)(n.p,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u6700\u5F8C\u306B\u5217\u3092\u8FFD\u52A0\u3057\u307E\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var HeaderVarName;$Last;RecNum : Integer\n\xa0ALL RECORDS([Table1])\n\xa0$RecNum:=Records in table([Table1])\n\xa0ARRAY PICTURE(Picture;$RecNum)\n\xa0\n\xa0$Last:=LISTBOX Get number of columns(*;"ListBox1")+1\n\xa0LISTBOX INSERT COLUMN(*;"ListBox1";$Last;"ColumnPicture";Picture;"HeaderPicture";HeaderVarName)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,l.jsx)(n.p,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u53F3\u306B\u5217\u3092\u8FFD\u52A0\u3057\u3001[Transport]Fees \u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5024\u3092\u95A2\u9023\u4ED8\u3051\u307E\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0$last:=LISTBOX Get number of columns(*;"ListBox1")+1\n\xa0LISTBOX INSERT COLUMN(*;"ListBox1";$last;"FieldCol";[Transport]Fees;"HeaderName";HeaderVar)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,l.jsx)(n.p,{children:"\u30AB\u30E9\u30E0\u3092\u914D\u5217\u578B\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u3078\u3068\u52D5\u7684\u306B\u633F\u5165\u3057\u3001\u305D\u306E\u30D8\u30C3\u30C0\u30FC\u3092\u5B9A\u7FA9\u3057\u307E\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $NilPtr : Pointer\n\xa0LISTBOX INSERT COLUMN(*;"MyListBox";1;"MyNewColumn";$NilPtr;"MyNewHeader";$NilPtr)\n\xa0ColPtr:=OBJECT Get pointer(Object named;"MyNewColumn")\n\xa0ARRAY TEXT(ColPtr->;10)\n\xa0\xa0//\u30D8\u30C3\u30C0\u30FC\u306E\u5B9A\u7FA9\n\xa0headprt:=OBJECT Get pointer(Object named;"MyNewHeader")\n\xa0OBJECT SET TITLE(headprt->;"Inserted header")\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/listbox-delete-column",children:"LISTBOX DELETE COLUMN"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/listbox-insert-column-formula",children:"LISTBOX INSERT COLUMN FORMULA"})]}),"\n",(0,l.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(n.td,{children:"829"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return i}});var s=r(667294);let l={},d=s.createContext(l);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);