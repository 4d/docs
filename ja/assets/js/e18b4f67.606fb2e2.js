"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56700"],{447548:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>j,assets:()=>i,toc:()=>h,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/st-compute-expressions","title":"ST COMPUTE EXPRESSIONS","description":"ST COMPUTE EXPRESSIONS ( { ;} object {; startSel {; endSel*}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-compute-expressions.md","sourceDirName":"commands-legacy","slug":"/commands/st-compute-expressions","permalink":"/docs/ja/commands/st-compute-expressions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-compute-expressions.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-compute-expressions","title":"ST COMPUTE EXPRESSIONS","slug":"/commands/st-compute-expressions","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Styled Text","permalink":"/docs/ja/category/styled-text"},"next":{"title":"ST FREEZE EXPRESSIONS","permalink":"/docs/ja/commands/st-freeze-expressions"}}'),r=s("785893"),d=s("250065");let l={id:"st-compute-expressions",title:"ST COMPUTE EXPRESSIONS",slug:"/commands/st-compute-expressions",displayed_sidebar:"docs"},c=void 0,i={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST COMPUTE EXPRESSIONS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," {; ",(0,r.jsx)(n.em,{children:"startSel"})," {; ",(0,r.jsx)(n.em,{children:"endSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u6307\u5B9A\u6642: object \u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D(\u6587\u5B57\u5217) \u7701\u7565\u6642: object \u306F\u5909\u6570\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D( * \u6307\u5B9A\u6642)\u3001\u307E\u305F\u306F\u5909\u6570\u3084\u30D5\u30A3\u30FC\u30EB\u30C9( * \u7701\u7565\u6642)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"startSel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u9078\u629E\u7BC4\u56F2\u306E\u958B\u59CB\u5730\u70B9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"endSel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u9078\u629E\u7BC4\u56F2\u306E\u7D42\u4E86\u5730\u70B9"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST COMPUTE EXPRESSIONS"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(n.em,{children:"object"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30DE\u30EB\u30C1\u30B9\u30BF\u30A4\u30EB\u3042\u308B\u3044\u306F4D Write Pro\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3042\u308B\u3044\u306F\u5909\u6570\u5185\u306B\u3042\u308B\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF 4D \u5F0F\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30DE\u30EB\u30C1\u30B9\u30BF\u30A4\u30EB\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2\u3042\u308B\u3044\u306F4D Write Pro \u30A8\u30EA\u30A2\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B 4D \u5F0F\u306E\u8A73\u7D30\u306B\u95A2\u3057\u3066\u306F\u3001 ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})," \u30B3\u30DE\u30F3\u30C9\u306E\u8A73\u7D30\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F ",(0,r.jsx)(n.em,{children:"object"})," \u3067\u6307\u5B9A\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E4D \u5F0F\u306E\u7D50\u679C\u3092\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u5185\u5BB9\u306B\u5FDC\u3058\u3066\u66F4\u65B0\u3057\u3066\u305D\u308C\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\u633F\u5165\u3055\u308C\u305F4D \u5F0F\u304C\u6642\u523B\u3067\u3042\u3063\u305F\u5834\u5408\u3001\u8868\u793A\u3055\u308C\u308B\u6642\u523B\u306F ",(0,r.jsx)(n.strong,{children:"ST COMPUTE EXPRESSIONS"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u305F\u3073\u306B\u5909\u66F4\u3055\u308C\u307E\u3059\u30024D \u5F0F\u306F\u4EE5\u4E0B\u306E\u3068\u304D\u306B\u3082\u66F4\u65B0\u3055\u308C\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u633F\u5165\u3055\u308C\u305F\u3068\u304D"}),"\n",(0,r.jsx)(n.li,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u30ED\u30FC\u30C9\u3055\u308C\u305F\u3068\u304D"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/st-freeze-expressions",children:"ST FREEZE EXPRESSIONS"})," \u30B3\u30DE\u30F3\u30C9\u306B\u304A\u3044\u3066\u30012\u756A\u76EE\u306E ",(0,r.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3057\u30664D\u5F0F\u304C\u56FA\u5B9A\u5316\u3055\u308C\u305F\u3068\u304D"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST COMPUTE EXPRESSIONS"})," \u30B3\u30DE\u30F3\u30C9\u306F SPAN \u30BF\u30B0\u3082\u542B\u3081\u3066\u30B9\u30BF\u30A4\u30EB\u4ED8\u30C6\u30AD\u30B9\u30C8\u3092\u5909\u66F4\u3057\u307E\u305B\u3093\u3002 object \u3067\u6307\u5B9A\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306B\u8868\u793A\u3055\u308C\u305F\u6A19\u6E96\u30C6\u30AD\u30B9\u30C8\u306E\u307F\u5909\u66F4\u3057\u307E\u3059\u3002\u51E6\u7406\u3055\u308C\u305F\u5024\u306F\u30B9\u30BF\u30A4\u30EB\u4ED8\u30C6\u30AD\u30B9\u30C8\u306E\u4E2D\u306B\u306F\u4FDD\u5B58\u3055\u308C\u305A\u3001\u53C2\u7167\u306E\u307F\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,r.jsx)(n.em,{children:"*"})," \u6F14\u7B97\u5B50\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"object"})," \u5F15\u6570\u3067\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u6587\u5B57\u5217\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u6642\u306B\u306F ",(0,r.jsx)(n.em,{children:"object"})," \u5F15\u6570\u3067\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6307\u5B9A\u3055\u308C\u305F",(0,r.jsx)(n.em,{children:"object"})," \u306F\u30D5\u30A9\u30FC\u30AB\u30B9\u306B\u306A\u3063\u3066\u3044\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3057\u304B\u3057\u306A\u304C\u3089\u3001",(0,r.jsx)(n.em,{children:"object"})," \u304C\u30DE\u30EB\u30C1\u30B9\u30BF\u30A4\u30EB\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2\u3092\u6307\u5B9A\u3057\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u305D\u306E\u30A8\u30EA\u30A2\u306F\u30D5\u30A9\u30FC\u30E0\u306B\u542B\u307E\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306F",(0,r.jsx)(n.strong,{children:"ST COMPUTE EXPRESSIONS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8:"})," ",(0,r.jsx)(n.em,{children:"object"})," \u304C4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u6307\u5B9A\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u305F\u3068\u3048\u305D\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E2D\u3067\u958B\u304B\u308C\u3066\u3044\u306A\u304B\u3063\u305F\u3068\u3057\u3066\u3082\u30B3\u30DE\u30F3\u30C9\u306F\u305D\u308C\u3092\u66F4\u65B0\u3057\u307E\u3059(",(0,r.jsx)(n.em,{children:"\u30D4\u30AF\u30C1\u30E3\u30FC\u5F0F"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,r.jsx)(n.em,{children:"startSel"})," \u5F15\u6570\u3068 ",(0,r.jsx)(n.em,{children:"endSel"})," \u5F15\u6570\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u306E\u9078\u629E\u7BC4\u56F2\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 ",(0,r.jsx)(n.em,{children:"startSel"})," \u3068 ",(0,r.jsx)(n.em,{children:"endSel"})," \u306F\u6A19\u6E96\u30C6\u30AD\u30B9\u30C8\u306E\u307F\u3092\u30AB\u30A6\u30F3\u30C8\u3057\u3001\u30B9\u30BF\u30A4\u30EB\u30BF\u30B0\u306F\u6587\u5B57\u6570\u3068\u3057\u3066\u306F\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u307E\u305B\u3093\u3002\u53C2\u7167\u306F\u4E00\u6587\u5B57\u3068\u3057\u3066\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u308B\u3068\u3044\u3046\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"startSel"})," \u3068 ",(0,r.jsx)(n.em,{children:"endSel"})," \u306E\u4E21\u65B9\u3092\u6E21\u3057\u305F\u5834\u5408\u3001 ",(0,r.jsx)(n.strong,{children:"ST COMPUTE EXPRESSIONS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u6307\u5B9A\u3055\u308C\u305F\u7BC4\u56F2\u5185\u306E4D\u5F0F\u306E\u307F\u5909\u66F4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"startSel"})," \u306E\u307F\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u3082\u3057\u304F\u306F ",(0,r.jsx)(n.em,{children:"endSel"})," \u306E\u5024\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u7DCF\u6587\u5B57\u6570\u3088\u308A\u5927\u304D\u3044\u5834\u5408\u306F\u3001 ",(0,r.jsx)(n.em,{children:"startSel"})," \u306E\u4F4D\u7F6E\u304B\u3089\u30C6\u30AD\u30B9\u30C8\u306E\u7D42\u308F\u308A\u307E\u3067\u306E\u5168\u3066\u306E4D\u5F0F\u304C\u5909\u66F4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"startSel"})," \u3068 ",(0,r.jsx)(n.em,{children:"endSel"})," \u306E\u4E21\u65B9\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u6307\u5B9A\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u5168\u3066\u306E4D\u5F0F\u306F\u5909\u66F4\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["4D \u3067\u306F\u3001\u9078\u629E\u7BC4\u56F2\u3092\u81EA\u52D5\u7684\u306B\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B ",(0,r.jsx)(n.em,{children:"startSel"})," \u5F15\u6570\u3068 ",(0,r.jsx)(n.em,{children:"endSel"}),' \u5F15\u6570\u306B\u6E21\u3059\u5B9A\u6570\u3092\u3054\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u5B9A\u6570\u306F "',(0,r.jsx)(n.em,{children:"Multistyle Text"}),'" \u30C6\u30FC\u30DE\u5185\u306B\u3042\u308A\u307E\u3059:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{children:"\u5024"}),(0,r.jsx)(n.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End highlight"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"-1001"}),(0,r.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30AB\u30EC\u30F3\u30C8\u306E\u30C6\u30AD\u30B9\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u6700\u5F8C\u306E\u6587\u5B57\u3092\u6307\u5B9A\u3057\u307E\u3059(*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End text"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u542B\u307E\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u6700\u5F8C\u306E\u6587\u5B57\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start highlight"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"-1000"}),(0,r.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u6700\u521D\u306E\u6587\u5B57\u3092\u3092\u6307\u5B9A\u3057\u307E\u3059 (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start text"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306B\u542B\u307E\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u6700\u521D\u306E\u6587\u5B57\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(*) \u3053\u308C\u3089\u4E8C\u3064\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3059\u308B\u969B\u306B\u306F\u3001 ",(0,r.jsx)(n.em,{children:"object"})," \u5F15\u6570\u306B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u6E21\u3057\u3066\u3042\u3052\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u53C2\u7167\u307E\u305F\u306F\u5909\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u5168\u3066\u306E\u30C6\u30AD\u30B9\u30C8\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8:"})," \u3082\u3057 ",(0,r.jsx)(n.em,{children:"startSel"})," \u5F15\u6570\u304C ",(0,r.jsx)(n.em,{children:"endSel"})," \u5F15\u6570\u3088\u308A\u5927\u304D\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u308F\u305A\u3001OK\u5909\u6570\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002(\u305F\u3060\u3057 ",(0,r.jsx)(n.em,{children:"endSel"})," \u304C0\u3067\u3042\u308B\u5834\u5408\u3092\u9664\u304F)"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u30C6\u30AD\u30B9\u30C8\u306E\u9078\u629E\u7BC4\u56F2\u306B\u542B\u307E\u308C\u308B\u53C2\u7167\u3092\u66F4\u65B0\u3059\u308B\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ST COMPUTE EXPRESSIONS(*;"myText";ST Start highlight;ST End highlight)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/st-freeze-expressions",children:"ST FREEZE EXPRESSIONS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var t=s(667294);let r={},d=t.createContext(r);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);