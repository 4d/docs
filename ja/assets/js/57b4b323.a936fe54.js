"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64571"],{993653:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>r,metadata:()=>l,assets:()=>d,toc:()=>c,contentTitle:()=>i});var l=JSON.parse('{"id":"commands-legacy/set-table-titles","title":"SET TABLE TITLES","description":"SET TABLE TITLES {( tableTitles ; tableNumbers {; *})}","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-table-titles.md","sourceDirName":"commands-legacy","slug":"/commands/set-table-titles","permalink":"/docs/ja/20-R7/commands/set-table-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-table-titles.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-table-titles","title":"SET TABLE TITLES","slug":"/commands/set-table-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET FIELD TITLES","permalink":"/docs/ja/20-R7/commands/set-field-titles"},"next":{"title":"Shift down","permalink":"/docs/ja/20-R7/commands/shift-down"}}'),a=s("785893"),t=s("250065");let r={id:"set-table-titles",title:"SET TABLE TITLES",slug:"/commands/set-table-titles",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function T(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"SET TABLE TITLES"})," {( ",(0,a.jsx)(e.em,{children:"tableTitles"})," ; ",(0,a.jsx)(e.em,{children:"tableNumbers"})," {; *})}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u5F15\u6570"}),(0,a.jsx)(e.th,{children:"\u578B"}),(0,a.jsx)(e.th,{}),(0,a.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"tableTitles"}),(0,a.jsx)(e.td,{children:"Text array"}),(0,a.jsx)(e.td,{children:"\u2192"}),(0,a.jsx)(e.td,{children:"\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306B\u8868\u793A\u3055\u308C\u308B\u30C6\u30FC\u30D6\u30EB\u540D"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"tableNumbers"}),(0,a.jsx)(e.td,{children:"Integer array"}),(0,a.jsx)(e.td,{children:"\u2192"}),(0,a.jsx)(e.td,{children:"\u5B9F\u969B\u306E\u30C6\u30FC\u30D6\u30EB\u756A\u53F7"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"*"}),(0,a.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,a.jsx)(e.td,{children:"\u2192"}),(0,a.jsx)(e.td,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30A8\u30C7\u30A3\u30BF\u3067\u30AB\u30B9\u30BF\u30E0\u540D\u3092\u4F7F\u7528"})]})]})]}),"\n",(0,a.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"SET TABLE TITLES"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308C\u3070\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u306B\u304A\u3044\u3066\u3001\u6A19\u6E96\u306E4D\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306B\u73FE\u308C\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30FC\u30D6\u30EB\u3092\u4E00\u90E8\u96A0\u3057\u305F\u308A\u3001\u8868\u793A\u540D\u79F0\u3092\u5909\u66F4\u3057\u305F\u308A\u3001\u4E26\u3073\u9806\u3092\u5909\u3048\u305F\u308A\u3067\u304D\u307E\u3059(\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u30E2\u30FC\u30C9\u304C",(0,a.jsx)(e.strong,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"}),"\u3067\u3042\u308B\u3001\u3042\u308B\u3044\u306F",(0,a.jsx)(e.strong,{children:"\u5B9F\u884C"}),"\u30E1\u30CB\u30E5\u30FC\u306E",(0,a.jsx)(e.strong,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30C6\u30B9\u30C8"}),"\u3092\u9078\u629E\u3057\u305F\u5834\u5408)\u3002\u4F8B\u3048\u3070\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308C\u3070\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u3067\u306E\u30AF\u30A8\u30EA\u30A8\u30C7\u30A3\u30BF\u30FC\u306E\u30C6\u30FC\u30D6\u30EB\u8868\u793A\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u3055\u3089\u306B\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D5\u30A9\u30FC\u30E0\u4E0A\u306E\u30C6\u30FC\u30D6\u30EB\u540D\u306E\u30E9\u30D9\u30EB\u3092\u76F4\u3061\u306B\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002\u3053\u308C\u306B\u306F\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u306A\u540D\u524D\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u306A\u30C6\u30FC\u30D6\u30EB\u540D\u3068\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u306E\u633F\u5165\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001",(0,a.jsx)(e.em,{children:"4D\u30C7\u30B6\u30A4\u30F3\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u30DE\u30CB\u30E5\u30A2\u30EB"}),"\u306E",(0,a.jsx)(e.em,{children:"\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u30C6\u30AD\u30B9\u30C8\u4E2D\u3067\u53C2\u7167\u3092\u4F7F\u7528\u3059\u308B"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5F15\u6570 ",(0,a.jsx)(e.em,{children:"tableTitles"})," \u3068 ",(0,a.jsx)(e.em,{children:"tableNumbers"})," \u914D\u5217\u306F\u540C\u671F\u3055\u305B\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u914D\u5217 ",(0,a.jsx)(e.em,{children:"tableTitles"})," \u306B\u306F\u3001\u8868\u793A\u3055\u305B\u305F\u3044\u30C6\u30FC\u30D6\u30EB\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u3042\u308B\u7279\u5B9A\u306E\u30C6\u30FC\u30D6\u30EB\u3092\u8868\u793A\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u305D\u306E\u30C6\u30FC\u30D6\u30EB\u540D\u307E\u305F\u306F\u65B0\u3057\u304F\u4ED8\u3051\u305F\u30BF\u30A4\u30C8\u30EB\u3092\u3001\u914D\u5217\u542B\u3081\u306A\u3044\u3088\u3046\u306B\u3057\u307E\u3059\u3002\u30C6\u30FC\u30D6\u30EB\u306F\u3053\u306E\u914D\u5217\u306B\u6307\u5B9A\u3057\u305F\u9806\u5E8F\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u914D\u5217 ",(0,a.jsx)(e.em,{children:"tableNumbers"})," \u306E\u5404\u8981\u7D20\u306B\u306F\u3001\u914D\u5217 ",(0,a.jsx)(e.em,{children:"tableTitles"})," \u306B\u3042\u308B\u540C\u3058\u8981\u7D20\u306E\u6570\u5024\u306B\u6E21\u3057\u305F\u30C6\u30FC\u30D6\u30EB\u540D\u307E\u305F\u306F\u65B0\u3057\u3044\u30BF\u30A4\u30C8\u30EB\u306B\u5BFE\u5FDC\u3059\u308B\u5B9F\u969B\u306E\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u4F8B\u3048\u3070\u3001\u30C6\u30FC\u30D6\u30EBA\u3001B\u3001C\u3067\u69CB\u6210\u3055\u308C\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u3042\u308A\u3001\u30C6\u30FC\u30D6\u30EB\u306F\u3053\u306E\u9806\u5E8F\u3067\u4F5C\u6210\u3055\u308C\u305F\u3068\u3057\u307E\u3059\u3002\u8868\u793A\u306E\u969B\u306B\u306F\u3001\u3053\u308C\u3089\u306E\u30C6\u30FC\u30D6\u30EB\u3092X\u3001Y\u3001Z\u3068\u3044\u3046\u540D\u524D\u306B\u3057\u3001\u3055\u3089\u306B\u30C6\u30FC\u30D6\u30EBB\u306F\u8868\u793A\u3057\u305F\u304F\u306A\u3044\u3068\u3057\u307E\u3059\u3002\u6700\u7D42\u7684\u306B\u3001Z\u3068X\u3092\u3001\u3053\u306E\u9806\u5E8F\u3067\u8868\u793A\u3059\u308B\u3053\u3068\u306B\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u914D\u5217 ",(0,a.jsx)(e.em,{children:"tableTitles"})," \u306E2\u3064\u306E\u8981\u7D20\u3068\u3057\u3066Z\u3068X\u3092\u6E21\u3057\u3001\u914D\u5217 ",(0,a.jsx)(e.em,{children:"tableNumbers"})," \u306E2\u3064\u306E\u8981\u7D20\u3068\u3057\u30663\u30681\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,a.jsx)(e.em,{children:"*"}),' \u5F15\u6570\u306F\u3001\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u305F\u30AB\u30B9\u30BF\u30E0\u306E\u540D\u524D("\u30D0\u30FC\u30C1\u30E3\u30EB"\u306A\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC)\u30924D\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3067\u4F7F\u7528\u3059\u308B\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3053\u306E\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u30014D \u3067\u5B9F\u884C\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u3053\u306E\u30AB\u30B9\u30BF\u30E0\u306E\u540D\u524D\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u5B9F\u969B\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u540D\u524D\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u63D0\u4F9B\u3055\u308C\u308B\u60C5\u5831\u3092\u7BA1\u7406\u3057\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3084\u5F0F\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u5834\u9762\u3067\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306B\u5FC5\u305A\u7D71\u4E00\u6027\u3092\u3082\u305F\u305B\u305F\u3044\u5834\u5408\u306B\u6E21\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070:']}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C(\u4F8B\u3048\u3070\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8\u30A8\u30C7\u30A3\u30BF\u30FC\u306A\u3069\u3092\u7D4C\u7531\u3057\u3066)\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30A8\u30C7\u30A3\u30BF\u30FC\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u308B\u5834\u5408"}),"\n",(0,a.jsx)(e.li,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306A\u3069\u3001\u5F0F\u53C2\u7167\u3092\u8868\u793A\u3059\u308B\u5834\u5408"}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u6CE8:"})," ",(0,a.jsx)(e.em,{children:"*"}),' \u5F15\u6570\u304C\u6E21\u3055\u308C\u305F\u5834\u5408\u30014D \u306B\u3088\u3063\u3066\u5B9F\u884C\u3055\u308C\u308B\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u5185\u90E8\u306B\u304A\u3044\u3066\u306F\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u5B9A\u7FA9\u3055\u308C\u308B\u540D\u524D\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002**\u3053\u306E\u5834\u5408\u306B\u306F\u6B21\u306E\u70B9\u306B\u6CE8\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002**\u30AB\u30B9\u30BF\u30E0\u306E\u540D\u524D\u306B\u306F4D \u30E9\u30F3\u30B2\u30FC\u30B8\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u3067"\u7981\u6B62\u3055\u308C\u3066\u3044\u308B"\u6587\u5B57( -?*%! \u7B49)\u3092\u542B\u3081\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u4F8B\u3048\u3070\u3001"Rate_in_%" \u3068\u3044\u3046\u540D\u524D\u306F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3067\u306F\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093(\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001',(0,a.jsx)(e.em,{children:"\u8B58\u5225\u5B50"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"SET TABLE TITLES"})," \u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5B9F\u969B\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u306F**\u5909\u66F4\u3057\u307E\u305B\u3093\u3002**\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30E9\u30F3\u30B2\u30FC\u30B8\u30B3\u30DE\u30F3\u30C9\u7D4C\u7531\u3067\u547C\u3073\u51FA\u3055\u308C\u305F\u6A19\u6E96\u306E4D \u30A8\u30C7\u30A3\u30BF\u30FC\u3068\u30D5\u30A9\u30FC\u30E0\u304C\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u306A\u540D\u524D\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306B\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u305F\u5F8C\u306E\u4F7F\u7528\u306B\u5F71\u97FF\u3059\u308B\u3053\u3068\u3092\u5FF5\u982D\u306B\u8A2D\u8A08\u3055\u308C\u3066\u3044\u307E\u3059\u3002",(0,a.jsx)(e.strong,{children:"SET TABLE TITLES"}),'\u30B3\u30DE\u30F3\u30C9\u306E\u6709\u52B9\u7BC4\u56F2\u306F\u3001\u305D\u306E\u30EF\u30FC\u30AF\u30BB\u30C3\u30B7\u30E7\u30F3\u3067\u3059\u3002\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u306B\u304A\u3051\u308B\u5229\u70B9\u306E1\u3064\u306F\u3001\u8907\u6570\u306E4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u304C\u305D\u308C\u305E\u308C\u7570\u306A\u308B\u898B\u65B9\u3067\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u540C\u6642\u306B "\u898B\u308B" \u3053\u3068\u304C\u3067\u304D\u308B\u70B9\u3067\u3059\u3002',(0,a.jsx)(e.strong,{children:"SET TABLE TITLES"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u4F55\u5EA6\u3067\u3082\u547C\u3073\u51FA\u305B\u307E\u3059\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"SET TABLE TITLES"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5834\u5408\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u52D5\u7684\u306B\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3059\u308B\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u30C6\u30FC\u30D6\u30EB\u8868\u793A\u3092\u3001\u5B9F\u969B\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5B9A\u7FA9\u306B\u95A2\u4FC2\u306A\u304F\u3001\u72EC\u81EA\u306E\u3082\u306E\u3068\u3059\u308B\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u30C6\u30FC\u30D6\u30EB\u8868\u793A\u3092\u3001\u30E6\u30FC\u30B6\u30FC\u56FA\u6709\u306E\u3082\u306E\u3084\u6A29\u9650\u306B\u3088\u308B\u3082\u306E\u3068\u3059\u308B\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u8B66\u544A:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"SET TABLE TITLES"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u975E\u8868\u793A\u5C5E\u6027\u3092\u4E0A\u66F8\u304D\u3057\u307E\u305B\u3093\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u8A2D\u8A08\u30EC\u30D9\u30EB\u3067\u30C6\u30FC\u30D6\u30EB\u304C\u975E\u8868\u793A\u3068\u3057\u3066\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001",(0,a.jsx)(e.strong,{children:"SET TABLE TITLES"}),"\u30B3\u30DE\u30F3\u30C9\u3078\u306E\u547C\u3073\u51FA\u3057\u306B\u305D\u306E\u30C6\u30FC\u30D6\u30EB\u3092\u6307\u5B9A\u3057\u3066\u3082\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u306B\u304A\u3044\u3066\u30C6\u30FC\u30D6\u30EB\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,a.jsx)(e.li,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u5E38\u306B\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u6307\u5B9A\u3055\u308C\u305F\u4EEE\u60F3\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u3078\u30A2\u30AF\u30BB\u30B9\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"SET TABLE TITLES"})," \u3092\u5F15\u6570\u306A\u3057\u3067\u5B9F\u884C\u3057\u305F\u5834\u5408\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5168\u4F53\u306E\u30D0\u30FC\u30C1\u30E3\u30EB\u306A\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC(\u30AB\u30B9\u30BF\u30E0\u306E\u30C6\u30FC\u30D6\u30EB\u540D\u304A\u3088\u3073\u30D5\u30A3\u30FC\u30EB\u30C9\u540D)\u306F\u5168\u3066\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,a.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,a.jsx)(e.p,{children:"\u5404\u56FD\u3067\u8CA9\u58F2\u3059\u308B\u4E88\u5B9A\u306E4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u69CB\u7BC9\u3057\u3066\u3044\u308B\u3068\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u306E\u554F\u984C\u3092\u614E\u91CD\u306B\u8003\u616E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u3067\u8868\u793A\u3055\u308C\u308B\u6A19\u6E96\u306E4D\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3068\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u306A\u540D\u524D\u3092\u7528\u3044\u305F\u30D5\u30A9\u30FC\u30E0\u306B\u6CE8\u610F\u3059\u308C\u3070\u3001[Translations] \u30C6\u30FC\u30D6\u30EB\u3068\u3044\u304F\u3064\u304B\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u5FC5\u8981\u306A\u3060\u3051\u5404\u56FD\u5411\u3051\u306B\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3055\u308C\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u4F5C\u6210\u3057\u3001\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u3001\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u306E\u30CB\u30FC\u30BA\u306B\u5BFE\u5FDC\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u4EE5\u4E0B\u306E\u30C6\u30FC\u30D6\u30EB\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:s(159314).Z+"",width:"144",height:"157"})}),"\n",(0,a.jsxs)(e.p,{children:["\u6B21\u306B\u3001\u4EE5\u4E0B\u306B\u793A\u3057\u305F TRANSLATE TABLES AND FIELDS \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5B9F\u969B\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u3092\u30D6\u30E9\u30A6\u30BA\u3057\u3001\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u308B\u8A00\u8A9E\u306B\u5BFE\u5FDC\u3059\u308B\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u7248\u306E\u4F5C\u6210\u306B\u5FC5\u8981\u306A\u3059\u3079\u3066\u306E ",(0,a.jsx)(e.em,{children:"[Translations]"})," \u30EC\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// TRANSLATE TABLES AND FIELDS \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n\xa0\xa0// TRANSLATE TABLES AND FIELDS (Text)\n\xa0\xa0// TRANSLATE TABLES AND FIELDS (LanguageCode)\n\xa0\n\xa0var $1 : Text\xa0//\u30E9\u30F3\u30B2\u30FC\u30B8\u30B3\u30FC\u30C9\n\xa0var $vlTable;$vlField : Integer\n\xa0var $Language : Text\n\xa0$Language:=$1\n\xa0\n\xa0For($vlTable;1;Last table number)\xa0//\u5404\u30C6\u30FC\u30D6\u30EB\u3092\u6E21\u3059\n\xa0\xa0\xa0\xa0If($vlTable#((->[Translations])))\xa0//\u7FFB\u8A33\u30C6\u30FC\u30D6\u30EB\u3092\u7FFB\u8A33\u3057\u306A\u3044\n\xa0\xa0//\u7279\u5B9A\u30E9\u30F3\u30B2\u30FC\u30B8\u7528\u306E\u30C6\u30FC\u30D6\u30EB\u540D\u306E\u7FFB\u8A33\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];[Translations]LanguageCode=$Language;*)\xa0//\u76EE\u7684\u306E\u30E9\u30F3\u30B2\u30FC\u30B8\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];\xa0&\xa0;[Translations]TableID=$vlTable;*)\xa0//\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];\xa0&\xa0;[Translations]FieldID=0)\xa0//\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7 = 0\u306F\u30C6\u30FC\u30D6\u30EB\u540D\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($vlTable))\xa0//\u30C6\u30FC\u30D6\u30EB\u304C\u307E\u3060\u5B58\u5728\u3057\u3066\u3044\u308B\u304B\u30C1\u30A7\u30C3\u30AF\u3059\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Translations])=0)\n\xa0\xa0//\u306A\u3051\u308C\u3070\u3001\u30EC\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Translations])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]LanguageCode:=$Language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]TableID:=$vlTable\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]FieldID:=0\n\xa0\xa0//\u7FFB\u8A33\u3055\u308C\u305F\u30C6\u30FC\u30D6\u30EB\u540D\u3092\u5165\u529B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]Translation:=Table name($vlTable)+" in "+$Language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Translations])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlField;1;Last field number($vlTable))\n\xa0\xa0//\u7279\u5B9A\u30E9\u30F3\u30B2\u30FC\u30B8\u7528\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u306E\u7FFB\u8A33\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];[Translations]LanguageCode=$Language;*)\xa0//\u76EE\u7684\u306E\u30E9\u30F3\u30B2\u30FC\u30B8\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];\xa0&\xa0;[Translations]TableID=$vlTable;*)\xa0//\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];\xa0&\xa0;[Translations]FieldID=$vlField)\xa0//\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is field number valid($vlTable;$vlField))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Translations])=0)\n\xa0\xa0//\u306A\u3051\u308C\u3070\u3001\u30EC\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Translations])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]LanguageCode:=$Language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]TableID:=$vlTable\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]FieldID:=$vlField\n\xa0\xa0//\u7FFB\u8A33\u3055\u308C\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3092\u5165\u529B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Translations]Translation:=Field name($vlTable;$vlField)+" in "+$Language\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Translations])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Translations])#0)\n\xa0\xa0//\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u3082\u306F\u3084\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u7FFB\u8A33\u3092\u524A\u9664\u3059\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE RECORD([Translations])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Translations])#0)\n\xa0\xa0//\u30C6\u30FC\u30D6\u30EB\u304C\u3082\u306F\u3084\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u7FFB\u8A33\u3092\u524A\u9664\u3059\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE RECORD([Translations])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u3053\u306E\u6642\u70B9\u3067\u4EE5\u4E0B\u306E\u884C\u3092\u5B9F\u884C\u3059\u308C\u3070\u3001\u30C6\u30FC\u30D6\u30EB\u30BF\u30A4\u30C8\u30EB\u3068\u30D5\u30A3\u30FC\u30EB\u30C9\u30BF\u30A4\u30C8\u30EB\u306E\u30B9\u30DA\u30A4\u30F3\u8A9E\u306E\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u7248\u306B\u5FC5\u8981\u306A\u3059\u3079\u3066\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:'\xa0TRANSLATE TABLES AND FIELDS("Spanish")\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u3053\u306E\u547C\u3073\u51FA\u3057\u306E\u5B9F\u884C\u5F8C\u3001\u65B0\u3057\u304F\u4F5C\u6210\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306E\u305D\u308C\u305E\u308C\u306B\u5BFE\u3057\u3066 ",(0,a.jsx)(e.em,{children:"[Translations]Translated Name"})," \u3092\u5165\u529B\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u6700\u5F8C\u306B\u3001\u30B9\u30DA\u30A4\u30F3\u8A9E\u306E\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u7248\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u6A19\u6E96\u306A4D\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u307E\u305F\u306F\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u306A\u30BF\u30A4\u30C8\u30EB\u4ED8\u304D\u306E\u30D5\u30A9\u30FC\u30E0\u8868\u793A\u3057\u307E\u3059\u3002\u305D\u306E\u969B\u3001LOCALIZED TABLES AND FIELDS \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u4EE5\u4E0B\u306E\u884C\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:'\xa0LOCALIZED TABLES AND FIELDS("Spanish")\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:"\xa0\xa0// LOCALIZED TABLES AND FIELDS global method\n\xa0\xa0// LOCALIZED TABLES AND FIELDS (Text)\n\xa0\xa0// LOCALIZED TABLES AND FIELDS (LanguageCode)\n\xa0\n\xa0var $1 : Text\xa0//\u30E9\u30F3\u30B2\u30FC\u30B8\u30B3\u30FC\u30C9\n\xa0var $vlTable;$vlField : Integer\n\xa0var $Language : Text\n\xa0var $vlTableNum;$vlFieldNum : Integer\n\xa0$Language:=$1\n\xa0\n\xa0\xa0//\u30C6\u30FC\u30D6\u30EB\u540D\u3092\u66F4\u65B0\u3059\u308B\n\xa0ARRAY TEXT($asNames;0)\xa0//SET TABLE TITLES \u3068 SET FIELD TITLES\u3092\u521D\u671F\u5316\u3059\u308B\n\xa0ARRAY INTEGER($aiNumbers;0)\n\xa0QUERY([Translations];[Translations]LanguageCode=$Language;*)\n\xa0QUERY([Translations];\xa0&\xa0;[Translations]FieldID=0)\xa0//\u30C6\u30FC\u30D6\u30EB\u540D\n\xa0SELECTION TO ARRAY([Translations]Translation;$asNames;[Translations]TableID;$aiNumbers)\n\xa0SET TABLE TITLES($asNames;$aiNumbers)\n\xa0\n\xa0\xa0//\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3092\u66F4\u65B0\u3059\u308B\n\xa0$vlTableNum:=Last table number\xa0//\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u4E0A\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u6570\u3092\u6570\u3048\u308B\n\xa0For($vlTable;1;$vlTableNum)\xa0//\u30C6\u30FC\u30D6\u30EB\u3092\u6E21\u3059\n\xa0\xa0\xa0\xa0If(Is table number valid($vlTable))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];[Translations]LanguageCode=$Language;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];\xa0&\xa0;[Translations]TableID=$vlTable;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Translations];\xa0&\xa0;[Translations]FieldID#0)\xa0//\u30C6\u30FC\u30D6\u30EB\u540D\u3068\u3057\u3066\u6A5F\u80FD\u3059\u308B\u30BC\u30ED\u3092\u907F\u3051\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECTION TO ARRAY([Translations]Translation;$asNames;[Translations]FieldID;$aiNumbers)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET FIELD TITLES(Table($vlTable)->;$asNames;$aiNumbers)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u30B3\u30FC\u30C9\u3092\u4FEE\u6B63\u307E\u305F\u306F\u518D\u7DE8\u96C6\u305B\u305A\u306B\u3001\u65B0\u3057\u3044\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u7248\u3092\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u8FFD\u52A0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,a.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,a.jsx)(e.p,{children:"\u5B9A\u7FA9\u3055\u308C\u305F\u30AB\u30B9\u30BF\u30E0\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u304A\u3088\u3073\u30C6\u30FC\u30D6\u30EB\u540D\u3092\u5168\u3066\u524A\u9664\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:"\xa0SET TABLE TITLES\xa0//\u5168\u3066\u306E\u30AB\u30B9\u30BF\u30E0\u306E\u540D\u524D\u3092\u524A\u9664\u3059\u308B\n"})}),"\n",(0,a.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/ja/20-R7/commands/last-table-number",children:"Last table number"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/ja/20-R7/commands/get-table-titles",children:"GET TABLE TITLES"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/ja/20-R7/commands/parse-formula",children:"Parse formula"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-field-titles",children:"SET FIELD TITLES"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/ja/20-R7/commands/table-name",children:"Table name"})]}),"\n",(0,a.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{}),(0,a.jsx)(e.th,{})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,a.jsx)(e.td,{children:"601"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,a.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(T,{...n})}):T(n)}},159314:function(n,e,s){s.d(e,{Z:function(){return l}});let l="data:image/png;base64,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"},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return r}});var l=s(667294);let a={},t=l.createContext(a);function r(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);