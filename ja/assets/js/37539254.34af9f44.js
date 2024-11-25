"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70203"],{969312:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>t,default:()=>j,assets:()=>c,toc:()=>h,frontMatter:()=>r});var l=JSON.parse('{"id":"commands-legacy/set-field-titles","title":"SET FIELD TITLES","description":"SET FIELD TITLES ( aTable ; fieldTitles ; fieldNumbers {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-field-titles.md","sourceDirName":"commands-legacy","slug":"/commands/set-field-titles","permalink":"/docs/ja/commands/set-field-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-field-titles.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-field-titles","title":"SET FIELD TITLES","slug":"/commands/set-field-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET CURSOR","permalink":"/docs/ja/commands/set-cursor"},"next":{"title":"SET TABLE TITLES","permalink":"/docs/ja/commands/set-table-titles"}}'),d=s("785893"),i=s("250065");let r={id:"set-field-titles",title:"SET FIELD TITLES",slug:"/commands/set-field-titles",displayed_sidebar:"docs"},t=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET FIELD TITLES"})," ( ",(0,d.jsx)(n.em,{children:"aTable"})," ; ",(0,d.jsx)(n.em,{children:"fieldTitles"})," ; ",(0,d.jsx)(n.em,{children:"fieldNumbers"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aTable"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u30BF\u30A4\u30C8\u30EB\u3092\u8A2D\u5B9A\u3059\u308B\u30C6\u30FC\u30D6\u30EB"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fieldTitles"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306B\u8868\u793A\u3059\u308B\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u540D\u524D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fieldNumbers"}),(0,d.jsx)(n.td,{children:"Integer array"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u5B9F\u969B\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operator"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3057\u305F\u540D\u524D\u3092\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30A8\u30C7\u30A3\u30BF\u3067\u4F7F\u7528\u3059\u308B"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET FIELD TITLES"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308C\u3070\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u306B\u304A\u3044\u3066\u3001\u30AF\u30A8\u30EA\u30A8\u30C7\u30A3\u30BF\u30FC\u306E\u3088\u3046\u306A\u6A19\u6E96\u306E4 D\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3059\u308B\u969B\u306B\u3001",(0,d.jsx)(n.em,{children:"aTable"})," \u306B\u6E21\u3055\u308C\u308B\u305D\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30DE\u30B9\u30AF\u3084\u540D\u524D\u306E\u5909\u66F4\u3001\u4E26\u3079\u66FF\u3048\u304C\u884C\u3048\u307E\u3059 (\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u30E2\u30FC\u30C9\u304C",(0,d.jsx)(n.strong,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"}),"\u3067\u3042\u308B\u5834\u5408\u3001\u307E\u305F\u306F",(0,d.jsx)(n.strong,{children:"\u5B9F\u884C"}),"\u30E1\u30CB\u30E5\u30FC\u304B\u3089",(0,d.jsx)(n.strong,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30C6\u30B9\u30C8"}),"\u3092\u9078\u629E\u3057\u305F\u5834\u5408) \u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D5\u30A9\u30FC\u30E0\u4E0A\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u306E\u30E9\u30D9\u30EB\u3092\u76F4\u3061\u306B\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002\u3053\u308C\u306B\u306F\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u306A\u540D\u524D\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u306A\u30C6\u30FC\u30D6\u30EB\u540D\u3068\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u306E\u633F\u5165\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001",(0,d.jsx)(n.em,{children:"4D Design Reference"})," \u30DE\u30CB\u30E5\u30A2\u30EB\u306E",(0,d.jsx)(n.em,{children:"\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u30C6\u30AD\u30B9\u30C8\u4E2D\u3067\u53C2\u7167\u3092\u4F7F\u7528\u3059\u308B"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5F15\u6570 ",(0,d.jsx)(n.em,{children:"fieldTitles"})," \u3068 ",(0,d.jsx)(n.em,{children:"fieldNumbers"})," \u914D\u5217\u306F\u540C\u671F\u3055\u305B\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u914D\u5217 ",(0,d.jsx)(n.em,{children:"fieldTitles"})," \u306B\u306F\u3001\u8868\u793A\u3055\u305B\u305F\u3044\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u3042\u308B\u7279\u5B9A\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u8868\u793A\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u305D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u307E\u305F\u306F\u65B0\u3057\u304F\u4ED8\u3051\u305F\u30BF\u30A4\u30C8\u30EB\u3092\u914D\u5217\u306B\u542B\u3081\u306A\u3044\u3088\u3046\u306B\u3057\u307E\u3059\u3002\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u3001\u3053\u306E\u914D\u5217\u306B\u6307\u5B9A\u3057\u305F\u9806\u5E8F\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u914D\u5217 ",(0,d.jsx)(n.em,{children:"fieldNumbers"})," \u306E\u5404\u8981\u7D20\u306B\u306F\u914D\u5217 ",(0,d.jsx)(n.em,{children:"fieldTitles"})," \u306E\u540C\u3058\u8981\u7D20\u306E\u6570\u5024\u306B\u6E21\u3057\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u307E\u305F\u306F\u65B0\u3057\u3044\u30BF\u30A4\u30C8\u30EB\u306B\u5BFE\u5FDC\u3059\u308B\u5B9F\u969B\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4F8B\u3048\u3070\u3001\u30D5\u30A3\u30FC\u30EB\u30C9F\u3001G\u3001H\u3067\u69CB\u6210\u3055\u308C\u308B\u30C6\u30FC\u30D6\u30EB\u304C\u3042\u308A\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u3053\u306E\u9806\u5E8F\u3067\u4F5C\u6210\u3055\u308C\u305F\u3068\u3057\u307E\u3059\u3002\u8868\u793A\u306E\u969B\u306B\u306F\u3001\u3053\u308C\u3089\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092M\u3001N\u3001O\u3068\u3044\u3046\u540D\u524D\u306B\u3057\u3001\u3055\u3089\u306B\u30D5\u30A3\u30FC\u30EB\u30C9N\u306F\u8868\u793A\u3057\u305F\u304F\u306A\u3044\u3068\u3057\u307E\u3059\u3002\u6700\u7D42\u7684\u306B\u3001O\u3068M\u3092\u3001\u3053\u306E\u9806\u5E8F\u3067\u8868\u793A\u3059\u308B\u3053\u3068\u306B\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u914D\u5217 ",(0,d.jsx)(n.em,{children:"fieldTitles"})," \u306E2\u3064\u306E\u8981\u7D20\u3068\u3057\u3066O\u3068M\u3092\u6E21\u3057\u3001\u914D\u5217 ",(0,d.jsx)(n.em,{children:"fieldNumbers"})," \u306E2\u3064\u306E\u8981\u7D20\u3068\u3057\u30663\u30681\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,d.jsx)(n.em,{children:"*"}),' \u5F15\u6570\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u305F\u30AB\u30B9\u30BF\u30E0\u306E\u540D\u524D("\u30D0\u30FC\u30C1\u30E3\u30EB"\u306A\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC)\u30924D\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3067\u4F7F\u7528\u3059\u308B\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3068\u3057\u30664D \u306F\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3057\u305F\u540D\u524D\u306F\u4F7F\u7528\u3067\u304D\u305A\u3001\u5B9F\u969B\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30E6\u30FC\u30B6\u30FC\u306B\u63D0\u4F9B\u3055\u308C\u308B\u60C5\u5831\u3092\u7BA1\u7406\u3057\u3001\u4EE5\u4E0B\u306E\u5834\u5408\u306E\u3088\u3046\u306B\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3084\u5F0F\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u5834\u6240\u306B\u304A\u3044\u3066\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u7D71\u4E00\u6027\u3092\u56F3\u308A\u305F\u3044\u5834\u5408\u306B\u306F\u3053\u306E\u5F15\u6570\u3092\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059:']}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30A8\u30C7\u30A3\u30BF\u30FC\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u308B\u5834\u5408(\u4F8B\u3048\u3070\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8\u30A8\u30C7\u30A3\u30BF\u30FC\u306A\u3069)\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306A\u3069\u3001\u5F0F\u53C2\u7167\u3092\u8868\u793A\u3059\u308B\u5834\u5408\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," ",(0,d.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u6307\u5B9A\u3057\u305F\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3057\u305F\u540D\u524D\u30924D\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3067\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.strong,{children:"\u305F\u3060\u3057"}),'\u30014D \u30E9\u30F3\u30B2\u30FC\u30B8\u30A4\u30F3\u30BF\u30D7\u30EA\u30BF\u304C\u7981\u6B62\u3057\u3066\u3044\u308B\u6587\u5B57\uFF08\u4F8B\u3048\u3070\u3001-?*!\uFF09\u3092\u30AB\u30B9\u30BF\u30E0\u540D\u306B\u542B\u3081\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u4F8B\u3048\u3070\u3001"Rate_in_%" \u3068\u3044\u3046\u540D\u524D\u306F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u5185\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093(\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001',(0,d.jsx)(n.em,{children:"\u8B58\u5225\u5B50"})," \u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET FIELD TITLES"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u306E\u5B9F\u969B\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u3092\u5909\u66F4\u3059\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30E9\u30F3\u30B2\u30FC\u30B8\u30B3\u30DE\u30F3\u30C9\u7D4C\u7531\u3067\u547C\u3073\u51FA\u3055\u308C\u305F\u6A19\u6E96\u306E4D \u30A8\u30C7\u30A3\u30BF\u30FC\u3068\u30D5\u30A9\u30FC\u30E0\u304C\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u306A\u540D\u524D\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306B\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u305F\u5F8C\u306E\u4F7F\u7528\u306B\u5F71\u97FF\u3059\u308B\u3053\u3068\u3092\u5FF5\u982D\u306B\u8A2D\u8A08\u3055\u308C\u3066\u3044\u307E\u3059\u3002",(0,d.jsx)(n.strong,{children:"SET FIELD TITLES"}),' \u30B3\u30DE\u30F3\u30C9\u306E\u6709\u52B9\u7BC4\u56F2\u306F\u3001\u305D\u306E\u30EF\u30FC\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u3067\u3059\u3002\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u306B\u304A\u3051\u308B\u5229\u70B9\u306E1\u3064\u306F\u3001\u8907\u6570\u306E4D\u30EA\u30E2\u30FC\u30C8\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u304C\u305D\u308C\u305E\u308C\u7570\u306A\u308B\u898B\u65B9\u3067\u30B5\u30FC\u30D0\u306E\u30C6\u30FC\u30D6\u30EB\u3092\u540C\u6642\u306B "\u898B\u308B" \u3053\u3068\u304C\u3067\u304D\u308B\u70B9\u3067\u3059\u3002',(0,d.jsx)(n.strong,{children:"SET FIELD TITLES"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u4F55\u5EA6\u3067\u3082\u547C\u3073\u51FA\u305B\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET FIELD TITLES"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5834\u5408\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u30C6\u30FC\u30D6\u30EB\u3092\u52D5\u7684\u306B\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3059\u308B\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u8868\u793A\u3092\u3001\u5B9F\u969B\u306E\u30C6\u30FC\u30D6\u30EB\u5B9A\u7FA9\u306B\u95A2\u4FC2\u306A\u304F\u3001\u72EC\u81EA\u306E\u3082\u306E\u3068\u3059\u308B\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u8868\u793A\u3092\u3001\u30E6\u30FC\u30B6\u30FC\u56FA\u6709\u306E\u3082\u306E\u3084\u6A29\u9650\u306B\u3088\u308B\u3082\u306E\u3068\u3059\u308B\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u8B66\u544A"}),":"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"SET FIELD TITLES"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u975E\u8868\u793A\u5C5E\u6027\u3092\u4E0A\u66F8\u304D\u3057\u307E\u305B\u3093\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u8A2D\u8A08\u30EC\u30D9\u30EB\u3067\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u975E\u8868\u793A\u3068\u3057\u3066\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001",(0,d.jsx)(n.strong,{children:"SET FIELD TITLES"})," \u30B3\u30DE\u30F3\u30C9\u3078\u306E\u547C\u3073\u51FA\u3057\u306B\u305D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6307\u5B9A\u3057\u3066\u3082\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u306B\u304A\u3044\u3066\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u5E38\u306B\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u6307\u5B9A\u3055\u308C\u305F\u4EEE\u60F3\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u3078\u30A2\u30AF\u30BB\u30B9\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/set-table-titles",children:"SET TABLE TITLES"}),' \u30B3\u30DE\u30F3\u30C9\u304C\u5F15\u6570\u306A\u3057\u306B\u547C\u3073\u51FA\u3055\u308C\u305F\u5834\u5408\u3001(\u30AB\u30B9\u30BF\u30E0\u306E\u30C6\u30FC\u30D6\u30EB\u540D\u304A\u3088\u3073\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3092\u542B\u3081)"\u30D0\u30FC\u30C1\u30E3\u30EB"\u306A\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u74B0\u5883\u304B\u3089\u306F\u5B8C\u5168\u306B\u524A\u9664\u3055\u308C\u307E\u3059\u3002']}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/set-table-titles",title:"SET TABLE TITLES",children:"SET TABLE TITLES"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/field-name",children:"Field name"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/get-field-titles",children:"GET FIELD TITLES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/last-field-number",children:"Last field number"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/parse-formula",children:"Parse formula"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/set-table-titles",children:"SET TABLE TITLES"})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return r}});var l=s(667294);let d={},i=l.createContext(d);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);