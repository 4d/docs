"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80495"],{444742:function(n,e,t){t.r(e),t.d(e,{default:()=>x,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/st-set-attributes","title":"ST SET ATTRIBUTES","description":"ST SET ATTRIBUTES ( { ;} object ; startSel ; endSel ; attribName ; attribValue {; attribName2 ; attribValue2 ; ... ; attribNameN ; attribValueN*} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/st-set-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-attributes","permalink":"/docs/ja/commands/st-set-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-attributes.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"st-set-attributes","title":"ST SET ATTRIBUTES","slug":"/commands/st-set-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST INSERT URL","permalink":"/docs/ja/commands/st-insert-url"},"next":{"title":"ST SET OPTIONS","permalink":"/docs/ja/commands/st-set-options"}}'),d=t("785893"),r=t("250065");let l={id:"st-set-attributes",title:"ST SET ATTRIBUTES",slug:"/commands/st-set-attributes",displayed_sidebar:"docs"},i=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function j(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"ST SET ATTRIBUTES"})," ( {* ;} ",(0,d.jsx)(e.em,{children:"object"})," ; ",(0,d.jsx)(e.em,{children:"startSel"})," ; ",(0,d.jsx)(e.em,{children:"endSel"})," ; ",(0,d.jsx)(e.em,{children:"attribName"})," ; ",(0,d.jsx)(e.em,{children:"attribValue"})," {; ",(0,d.jsx)(e.em,{children:"attribName2"})," ; ",(0,d.jsx)(e.em,{children:"attribValue2"})," ; ... ; ",(0,d.jsx)(e.em,{children:"attribNameN"})," ; ",(0,d.jsx)(e.em,{children:"attribValueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"*"}),(0,d.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsxs)(e.td,{children:["\u6307\u5B9A\u6642: object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57) ",(0,d.jsx)(e.br,{}),"\u7701\u7565\u6642: object\u306F\u5909\u6570\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"object"}),(0,d.jsx)(e.td,{children:"any"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsxs)(e.td,{children:["\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F ",(0,d.jsx)(e.br,{}),"\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570 (* \u7701\u7565\u6642)"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"startSel"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u9078\u629E\u306E\u958B\u59CB\u4F4D\u7F6E"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"endSel"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u9078\u629E\u306E\u7D42\u4E86\u4F4D\u7F6E"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"attribName"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u8A2D\u5B9A\u3059\u308B\u5C5E\u6027"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"attribValue"}),(0,d.jsx)(e.td,{children:"Text, Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u65B0\u3057\u3044\u5C5E\u6027\u5024"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"ST SET ATTRIBUTES"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001 ",(0,d.jsx)(e.em,{children:"object"}),"\u3067\u6307\u5B9A\u3057\u305F\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u4E2D\u306E1\u3064\u4EE5\u4E0A\u306E\u30B9\u30BF\u30A4\u30EB\u5C5E\u6027\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:""}),"\n",(0,d.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,d.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"object"}),"\u5F15\u6570\u306B\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u3092\u6E21\u3057\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u6642\u306B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u30D5\u30A9\u30FC\u30AB\u30B9\u304C\u3042\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u7DE8\u96C6\u4E2D\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306E\u307F\u9069\u7528\u3055\u308C\u3001(\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570\u306A\u3069\u306E) \u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u306B\u306F\u9069\u7528\u3055\u308C\u307E\u305B\u3093\u3002\u5909\u66F4\u304C\u30BD\u30FC\u30B9 (\u304A\u3088\u3073\u3053\u306E\u540C\u3058\u30BD\u30FC\u30B9\u3092\u4F7F\u7528\u3059\u308B\u4ED6\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8) \u306B\u8EE2\u9001\u3055\u308C\u308B\u306E\u306F\u3001\u30D5\u30A9\u30FC\u30AB\u30B9\u304C\u5916\u308C\u308B\u304B",(0,d.jsx)(e.strong,{children:"Enter"}),"\u30AD\u30FC\u304C\u62BC\u3055\u308C\u3066\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u7DE8\u96C6\u304C\u6709\u52B9\u5316\u3055\u308C\u305F\u5834\u5408\u306E\u307F\u3067\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u30D5\u30A9\u30FC\u30AB\u30B9\u304C\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u76F4\u63A5\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u306B\u9069\u7528\u3055\u308C\u3001\u5909\u66F4\u306F\u5373\u5EA7\u306B\u540C\u3058\u30BD\u30FC\u30B9\u3092\u4F7F\u7528\u3059\u308B\u4ED6\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u8EE2\u9001\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"object"})," \u5F15\u6570\u306B\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3078\u306E\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u306F\u76F4\u63A5\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u306B\u9069\u7528\u3055\u308C\u3001\u5909\u66F4\u306F\u5373\u5EA7\u306B\u540C\u3058\u30BD\u30FC\u30B9\u3092\u4F7F\u7528\u3059\u308B\u4ED6\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u8EE2\u9001\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"-1"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Note:"})," \u30C6\u30AD\u30B9\u30C8\u578B\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u306E\u307F\u30B9\u30BF\u30A4\u30EB\u5C5E\u6027\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u6587\u5B57\u578B\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u4E8B\u524D\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u9577\u3055\u304C\u3042\u308B\u305F\u3081\u3001\u30B9\u30BF\u30A4\u30EB\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u30C7\u30FC\u30BF\u304C\u5931\u308F\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5C5E\u6027\u306E\u5B9A\u7FA9\u306FHTML\u30B9\u30BF\u30A4\u30EB\u306E\u30BF\u30B0\u3092\u30C6\u30AD\u30B9\u30C8\u306B\u633F\u5165\u3057\u305F\u308A\u5909\u66F4\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u884C\u308F\u308C\u307E\u3059 (\u3053\u306E\u70B9\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F",(0,d.jsx)(e.em,{children:"Design Reference"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002",(0,d.jsx)(e.strong,{children:"ST SET ATTRIBUTES"}),"\u306F\u3001",(0,d.jsx)(e.em,{children:"object"}),"\u304C\u30DE\u30EB\u30C1\u30B9\u30BF\u30A4\u30EB\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u30C6\u30AD\u30B9\u30C8\u306E\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u3044\u308B\u5834\u5408\u3067\u3082\u3001\u3059\u3079\u3066\u306E\u30B1\u30FC\u30B9\u3067\u30B9\u30BF\u30A4\u30EB\u30BF\u30B0\u3092\u633F\u5165\u3059\u308B\u3053\u3068\u306B\u7559\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"startSel"}),"\u3068",(0,d.jsx)(e.em,{children:"endSel"}),"\u5F15\u6570\u306F",(0,d.jsx)(e.em,{children:"object"}),"\u5185\u3067\u30B9\u30BF\u30A4\u30EB\u306E\u5909\u66F4\u3092\u9069\u7528\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u9078\u629E\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"startSel"}),"\u306B\u306F\u30B9\u30BF\u30A4\u30EB\u306E\u5909\u66F4\u3092\u884C\u3046\u6700\u521D\u306E\u6587\u5B57\u306E\u4F4D\u7F6E\u3092\u3001",(0,d.jsx)(e.em,{children:"endSel"}),"\u306B\u5909\u66F4\u3092\u884C\u3046\u6700\u5F8C\u306E\u6587\u5B57\u306E\u4F4D\u7F6E\u306B1\u52A0\u3048\u305F\u6570\u3092\u6E21\u3057\u307E\u3059 (\u6700\u5F8C\u306E\u4F4D\u7F6E\u306E\u6587\u5B57\u306F\u5909\u66F4\u306E\u5BFE\u8C61\u3068\u306A\u308A\u307E\u305B\u3093)\u3002",(0,d.jsx)(e.em,{children:"endSel"}),"\u306B0\u3092\u30BB\u30C3\u30C8\u3059\u308B\u3053\u3068\u3067\u3001\u81EA\u52D5\u7684\u306B\u30C6\u30AD\u30B9\u30C8\u306E\u6700\u5F8C\u3092\u6307\u5B9A(",(0,d.jsx)(e.em,{children:"startSel"}),"\u306B1\u3092\u30BB\u30C3\u30C8\u3059\u308B\u3053\u3068\u3067\u30C6\u30AD\u30B9\u30C8\u306E\u6700\u521D\u3092\u6307\u5B9A)\u3067\u304D\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.em,{children:"endSel"}),"\u304C",(0,d.jsx)(e.em,{children:"object"}),"\u4E2D\u306E\u6587\u5B57\u6570\u3088\u308A\u5927\u304D\u3044\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"startSel"}),"\u304B\u3089\u30C6\u30AD\u30B9\u30C8\u306E\u6700\u5F8C\u307E\u3067\u304C\u5909\u66F4\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.em,{children:"startSel"}),"\u304C",(0,d.jsx)(e.em,{children:"endSel"}),"\u3088\u308A\u5927\u304D\u3044\u5834\u5408(",(0,d.jsx)(e.em,{children:"endSel"}),"\u304C0\u306E\u5834\u5408\u3092\u9664\u304F\u30FB\u4E0A\u8A18\u53C2\u7167)\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u306A\u306B\u3082\u884C\u308F\u305A\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304C0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.em,{children:"startSel"}),"\u3068",(0,d.jsx)(e.em,{children:"endSel"}),"\u306E\u5024\u306F\u30A8\u30EA\u30A2\u306B\u65E2\u306B\u5B58\u5728\u3059\u308B\u30B9\u30BF\u30A4\u30EB\u30BF\u30B0\u3092\u8003\u616E\u3057\u307E\u305B\u3093\u3002\u3053\u308C\u3089\u306E\u5F15\u6570\u306F\u751F\u306E\u30C6\u30AD\u30B9\u30C8 (\u30B9\u30BF\u30A4\u30EB\u30BF\u30B0\u304C\u30D5\u30A3\u30EB\u30BF\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8) \u3092\u3082\u3068\u306B\u8A55\u4FA1\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["4D \u3067\u306F\u9078\u629E\u7BC4\u56F2\u3092\u81EA\u52D5\u7684\u306B\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B ",(0,d.jsx)(e.em,{children:"startSel"})," \u5F15\u6570\u3068 ",(0,d.jsx)(e.em,{children:"endSel"}),' \u5F15\u6570\u306B\u6E21\u305B\u308B\u898F\u5B9A\u6E08\u307F\u5B9A\u6570\u3092\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u5B9A\u6570\u306F "',(0,d.jsx)(e.em,{children:"Multistyle Text"}),'" \u30C6\u30FC\u30DE\u5185\u306B\u3042\u308A\u307E\u3059:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"}),(0,d.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ST End highlight"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"-1001"}),(0,d.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30AB\u30EC\u30F3\u30C8\u306E\u30C6\u30AD\u30B9\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u6700\u5F8C\u306E\u6587\u5B57\u3092\u6307\u5B9A\u3057\u307E\u3059(*)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ST End text"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u542B\u307E\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u6700\u5F8C\u306E\u6587\u5B57\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ST Start highlight"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"-1000"}),(0,d.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u6700\u521D\u306E\u6587\u5B57\u3092\u3092\u6307\u5B9A\u3057\u307E\u3059 (*)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ST Start text"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306B\u542B\u307E\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u6700\u521D\u306E\u6587\u5B57\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:["(*) \u3053\u308C\u3089\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u306F\u3001 ",(0,d.jsx)(e.em,{children:"object"})," \u306B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3078\u306E\u53C2\u7167\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5168\u3066\u306E\u30C6\u30AD\u30B9\u30C8\u306B\u5BFE\u3057\u3066\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"attribName"})," \u3068",(0,d.jsx)(e.em,{children:"attribValue"}),"\u306B\u306F\u5909\u66F4\u3059\u308B\u5C5E\u6027\u306B\u5BFE\u5FDC\u3059\u308B\u540D\u524D\u3068\u5024\u3092\u6E21\u3057\u307E\u3059\u3002\u5FC5\u8981\u306A\u3060\u3051\u5C5E\u6027/\u5024\u306E\u7D44\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"attribName"})," \u5F15\u6570\u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B\u306F",(0,d.jsx)(e.em,{children:"Multistyle Text Attributes"}),"\u30C6\u30FC\u30DE\u306E\u5B9A\u7FA9\u6E08\u307F\u5B9A\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"attribValue"}),"\u5F15\u6570\u306B\u6E21\u3059\u5024\u306F\u3001",(0,d.jsx)(e.em,{children:"attribName"})," \u5F15\u6570\u306B\u57FA\u3065\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"}),(0,d.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute background color"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"8"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"attValue"})," = (Windows\u306E\u307F) 16\u9032\u5024\u307E\u305F\u306FHTML\u30AB\u30E9\u30FC\u540D"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute bold style"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"attValue"})," = 0: \u9078\u629E\u90E8\u304B\u3089\u30DC\u30FC\u30EB\u30C9\u5C5E\u6027\u3092\u53D6\u308A\u9664\u304D\u307E\u3059",(0,d.jsx)(e.br,{}),(0,d.jsx)(e.em,{children:"attValue"})," = 1: \u9078\u629E\u90E8\u306B\u30DC\u30FC\u30EB\u30C9\u5C5E\u6027\u3092\u9069\u7528\u3057\u307E\u3059"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute font name"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"5"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"attValue"})," = \u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u540D (\u6587\u5B57)"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute italic style"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"attValue"})," = 0: \u9078\u629E\u90E8\u304B\u3089\u30A4\u30BF\u30EA\u30C3\u30AF\u5C5E\u6027\u3092\u53D6\u308A\u9664\u304D\u307E\u3059",(0,d.jsx)(e.br,{}),(0,d.jsx)(e.em,{children:"attValue"})," = 1: \u9078\u629E\u90E8\u306B\u30A4\u30BF\u30EA\u30C3\u30AF\u5C5E\u6027\u3092\u9069\u7528\u3057\u307E\u3059"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute strikethrough style"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"3"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"attValue"})," = 0: \u9078\u629E\u90E8\u304B\u3089\u53D6\u308A\u6D88\u3057\u7DDA\u5C5E\u6027\u3092\u53D6\u308A\u9664\u304D\u307E\u3059",(0,d.jsx)(e.br,{}),(0,d.jsx)(e.em,{children:"attValue"})," = 1: \u9078\u629E\u90E8\u306B\u53D6\u308A\u6D88\u3057\u7DDA\u5C5E\u6027\u3092\u9069\u7528\u3057\u307E\u3059"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute text color"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"7"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"attValue"})," = 16\u9032\u5024\u307E\u305F\u306FHTML\u30AB\u30E9\u30FC\u540D"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute text size"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"6"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"attValue"})," = \u30DD\u30A4\u30F3\u30C8\u6570 (\u6570\u5024)"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Attribute underline style"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"4"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"attValue"})," = 0: \u9078\u629E\u90E8\u304B\u3089\u4E0B\u7DDA\u5C5E\u6027\u3092\u53D6\u308A\u9664\u304D\u307E\u3059",(0,d.jsx)(e.br,{}),(0,d.jsx)(e.em,{children:"attValue"})," = 1: \u9078\u629E\u90E8\u306B\u4E0B\u7DDA\u5C5E\u6027\u3092\u9069\u7528\u3057\u307E\u3059"]})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u30AB\u30E9\u30FC"}),"\n",(0,d.jsx)(e.em,{children:"attribName"})," \u5F15\u6570\u306B Attribute text color \u3084 Attribute background color \u5B9A\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"attribValue"}),"\u306B\u306FHTML\u30AB\u30E9\u30FC\u540D\u304B16\u9032\u306E\u30AB\u30E9\u30FC\u5024\u3092\u6587\u5B57\u3067\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"HTML\u30AB\u30E9\u30FC\u540D"})}),(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"16\u9032\u5024"})})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Aqua"}),(0,d.jsx)(e.td,{children:"#00FFFF"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Black"}),(0,d.jsx)(e.td,{children:"#000000"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Blue"}),(0,d.jsx)(e.td,{children:"#0000FF"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Fuchsia"}),(0,d.jsx)(e.td,{children:"#FF00FF"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Gray"}),(0,d.jsx)(e.td,{children:"#808080"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Green"}),(0,d.jsx)(e.td,{children:"#008000"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Lime"}),(0,d.jsx)(e.td,{children:"#00FF00"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Maroon"}),(0,d.jsx)(e.td,{children:"#800000"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Navy"}),(0,d.jsx)(e.td,{children:"#000080"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Olive"}),(0,d.jsx)(e.td,{children:"#808000"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Purple"}),(0,d.jsx)(e.td,{children:"#800080"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Red"}),(0,d.jsx)(e.td,{children:"#FF0000"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Silver"}),(0,d.jsx)(e.td,{children:"#C0C0C0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Teal"}),(0,d.jsx)(e.td,{children:"#008080"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"White"}),(0,d.jsx)(e.td,{children:"#FFFFFF"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Yellow"}),(0,d.jsx)(e.td,{children:"#FFFF00"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306F\u30C6\u30AD\u30B9\u30C8\u306E\u30B5\u30A4\u30BA\u3084\u30AB\u30E9\u30FC\u306E\u307B\u304B\u3001\u30DC\u30FC\u30EB\u30C9\u304A\u3088\u3073\u4E0B\u7DDA\u5C5E\u6027\u30922\u756A\u76EE\u304B\u30894\u756A\u76EE\u306E\u6587\u5B57\u306B\u8A2D\u5B9A\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0ST SET ATTRIBUTES([MyTable]MyField;2;5;Attribute font name;"Arial";Attribute text size;10;Attribute underline style;1;Attribute bold style;1;Attribute text color;"Blue")\n'})}),"\n",(0,d.jsx)(e.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u5F8C\u3001\u30A8\u30E9\u30FC\u304C\u306A\u3051\u308C\u3070OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306F\u7279\u306B\u30B9\u30BF\u30A4\u30EB\u30BF\u30B0\u304C\u6B63\u3057\u304F\u8A55\u4FA1\u3067\u304D\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u767A\u751F\u3057\u307E\u3059 (\u6B63\u3057\u304F\u306A\u3044\u3001\u3042\u308B\u3044\u306F\u5931\u308F\u308C\u305F\u30BF\u30B0)\u3002"}),"\n",(0,d.jsx)(e.p,{children:'\u30A8\u30E9\u30FC\u306E\u5834\u5408\u3001\u5909\u6570\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002\u30C6\u30AD\u30B9\u30C8\u304C\u8A55\u4FA1\u3055\u308C\u308B\u969B\u306B\u5909\u6570\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u3068\u30014D\u306F\u30C6\u30AD\u30B9\u30C8\u3092\u30D7\u30EC\u30FC\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\u7D50\u679C\u3001"<"\u3001">"\u3001"&"\u6587\u5B57\u306FHTML\u5B9F\u4F53\u53C2\u7167\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u3002'}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/commands/font-list",children:"FONT LIST"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/st-get-attributes",children:"ST GET ATTRIBUTES"})]}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"1093"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2717"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"OK"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(j,{...n})}):j(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var s=t(667294);let d={},r=s.createContext(d);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);