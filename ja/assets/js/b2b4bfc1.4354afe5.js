"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51235"],{912017:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>d,default:()=>j,assets:()=>l,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/listbox-select-row","title":"LISTBOX SELECT ROW","description":"LISTBOX SELECT ROW ( { ;} object ; rowPosition {; action*} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-select-row.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-select-row","permalink":"/docs/ja/commands/listbox-select-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-select-row.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-select-row","title":"LISTBOX SELECT ROW","slug":"/commands/listbox-select-row","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SELECT BREAK","permalink":"/docs/ja/commands/listbox-select-break"},"next":{"title":"LISTBOX SELECT ROWS","permalink":"/docs/ja/commands/listbox-select-rows"}}'),i=s("785893"),r=s("250065");let c={id:"listbox-select-row",title:"LISTBOX SELECT ROW",slug:"/commands/listbox-select-row",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function h(n){let e={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"LISTBOX SELECT ROW"})," ( {* ;} ",(0,i.jsx)(e.em,{children:"object"})," ; ",(0,i.jsx)(e.em,{children:"rowPosition"})," {; ",(0,i.jsx)(e.em,{children:"action"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5F15\u6570"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"*"}),(0,i.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u6307\u5B9A\u6642, object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, object\u306F\u5909\u6570"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"object"}),(0,i.jsx)(e.td,{children:"any"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F \u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"rowPosition"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u9078\u629E\u3059\u308B\u884C\u756A\u53F7"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"action"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u9078\u629E\u30A2\u30AF\u30B7\u30E7\u30F3"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,i.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"LISTBOX SELECT ROW"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001 ",(0,i.jsx)(e.em,{children:"object"})," \u5F15\u6570\u304A\u3088\u3073 ",(0,i.jsx)(e.em,{children:"*"})," \u3067\u6307\u5B9A\u3055\u308C\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u306B\u304A\u3044\u3066\u3001",(0,i.jsx)(e.em,{children:"position"})," \u306B\u6E21\u3057\u305F\u756A\u53F7\u306E\u884C\u3092\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570 ",(0,i.jsx)(e.em,{children:"*"})," \u3092\u6E21\u3059\u3053\u3068\u306B\u3088\u308A\u3001",(0,i.jsx)(e.em,{children:"object"})," \u5F15\u6570\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\uFF08\u6587\u5B57\u5217\uFF09\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,i.jsx)(e.em,{children:"object"})," \u5F15\u6570\u304C\u5909\u6570\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F",(0,i.jsx)(e.em,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570",(0,i.jsx)(e.em,{children:"action"})," \u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u884C\u306E\u9078\u629E\u304C\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u306B\u65E2\u306B\u5B58\u5728\u3057\u3066\u3044\u308B\u5834\u5408\u306B\u5B9F\u884C\u3059\u308B\u9078\u629E\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306B\u306F\u5024\u307E\u305F\u306F\u6B21\u306E\u5B9A\u6570\u306E\u3044\u305A\u308C\u304B\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\uFF08",(0,i.jsx)(e.em,{children:"List Box"})," \u30C6\u30FC\u30DE\uFF09:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{children:"\u5024"}),(0,i.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"lk add to selection"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"\u9078\u629E\u3055\u308C\u305F\u884C\u306F\u65E2\u5B58\u306E\u9078\u629E\u884C\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002\u6307\u5B9A\u3057\u305F\u884C\u304C\u65E2\u5B58\u306E\u9078\u629E\u306B\u5C5E\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"lk remove from selection"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"\u6307\u5B9A\u3055\u308C\u305F\u884C\u306F\u65E2\u5B58\u306E\u9078\u629E\u884C\u304B\u3089\u53D6\u308A\u9664\u304B\u308C\u307E\u3059\u3002\u6307\u5B9A\u3057\u305F\u884C\u304C\u65E2\u5B58\u306E\u9078\u629E\u306B\u5C5E\u3055\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"lk replace selection"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"0"}),(0,i.jsxs)(e.td,{children:["\u9078\u629E\u3055\u308C\u305F\u884C\u304C\u65B0\u3057\u3044\u9078\u629E\u884C\u3068\u306A\u308A\u3001\u65E2\u5B58\u306E\u3082\u306E\u3068\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30E6\u30FC\u30B6\u304C\u884C\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u5834\u5408\u3068\u540C\u3058\u7D50\u679C\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u308C\u306F (",(0,i.jsx)(e.em,{children:"action"})," \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u6642\u306E) \u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u52D5\u4F5C\u3067\u3059\u3002"]})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"position"})," \u5F15\u6570\u304C\u65E2\u5B58\u306E\u884C\u756A\u53F7\u3068\u4E00\u81F4\u3057\u306A\u3044\u6642\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u52D5\u4F5C\u3057\u307E\u3059:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"position"})," \u304C\uFF10\u3088\u308A\u5C0F\u3055\u3044\u5834\u5408\u3001",(0,i.jsx)(e.em,{children:"action"})," \u306E\u5024\u306B\u95A2\u4FC2\u306A\u304F\u3001\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"position"})," \u304C\uFF10\u304B\u3064\u3001",(0,i.jsx)(e.em,{children:"action"})," \u306E\u5024\u304Clk replace selection \u307E\u305F\u306F\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u3059\u3079\u3066\u306E\u884C\u304C\u9078\u629E\u3055\u308C\u307E\u3059\u3002",(0,i.jsx)(e.em,{children:"action"})," \u306E\u5024\u304Clk remove from selection \u306E\u5834\u5408\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u3059\u3079\u3066\u306E\u884C\u306E\u9078\u629E\u304C\u89E3\u9664\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"position"})," \u304C\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u542B\u307E\u308C\u308B\u3059\u3079\u3066\u306E\u884C\u6570\u3088\u308A\u5927\u304D\u3044\u5834\u5408 (\u914D\u5217\u30BF\u30A4\u30D7\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5834\u5408\u306E\u307F)\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3068\u95A2\u9023\u3065\u3051\u3089\u308C\u3066\u3044\u308B\u30D6\u30FC\u30EB\u914D\u5217\u304C\u81EA\u52D5\u7684\u306B\u30EA\u30B5\u30A4\u30BA\u3055\u308C\u3001\u9078\u629E\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u884C\u308F\u308C\u307E\u3059\u3002\u3053\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u306F\u3001",(0,i.jsx)(e.strong,{children:"LISTBOX SELECT ROW"}),' \u3092\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3067\u5373\u5EA7\u306E\u540C\u671F\u3092\u8D77\u3053\u3055\u306A\u3044"\u6A19\u6E96"\u306E\u914D\u5217\u7BA1\u7406\u30B3\u30DE\u30F3\u30C9 (',(0,i.jsx)(e.a,{href:"/docs/ja/commands/append-to-array",children:"APPEND TO ARRAY"})," \u306A\u3069) \u3068\u3068\u3082\u306B\u4F7F\u7528\u3067\u304D\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u884C\u5F8C\u3001\u914D\u5217\u306F\u540C\u671F\u3055\u308C\u307E\u3059\u3002\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u30BD\u30FC\u30B9\u914D\u5217\u304C\u5B9F\u969B\u306B\u30EA\u30B5\u30A4\u30BA\u3055\u308C\u305F\u306A\u3089\u3070\u3001\u9078\u629E\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3068\u95A2\u9023\u3065\u3051\u3089\u308C\u305F\u30D6\u30FC\u30EB\u306E\u914D\u5217\u306F\u305D\u306E\u521D\u671F\u306E\u30B5\u30A4\u30BA\u306B\u623B\u308A\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u9078\u629E\u3057\u305F\u5217\u3092\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u3001\u81EA\u52D5\u3067\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u305F\u3044\u5834\u5408\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3044\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5217\u3092\u7DE8\u96C6\u30E2\u30FC\u30C9\u306B\u5207\u308A\u63DB\u3048\u308B\u306B\u306F\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/commands/edit-item",children:"EDIT ITEM"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3044\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"position"})," \u306B\u6E21\u3055\u308C\u305F\u6570\u5024\u304C\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u4E2D\u3067\u975E\u8868\u793A\u306E\u884C\u306B\u8A72\u5F53\u3059\u308B\u5834\u5408\u3001\u884C\u306F\u9078\u629E\u3055\u308C\u307E\u3059\u304C\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u5BFE\u3057\u3066",(0,i.jsx)(e.strong,{children:"\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u30CF\u30A4\u30E9\u30A4\u30C8\u3092\u975E\u8868\u793A\u306B\u3059\u308B"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u3044\u305F\u5834\u5408\u3001\u5229\u7528\u53EF\u80FD\u306A\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u53EF\u8996\u5316\u3057\u3066\u3044\u304A\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306E\u3084\u308A\u65B9\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,i.jsx)(e.em,{children:"\u9078\u629E\u884C\u306E\u898B\u305F\u76EE\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/ja/commands/edit-item",children:"EDIT ITEM"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/ja/commands/listbox-delete-rows",children:"LISTBOX DELETE ROWS"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/ja/commands/listbox-insert-rows",children:"LISTBOX INSERT ROWS"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/ja/commands/listbox-select-break",children:"LISTBOX SELECT BREAK"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/ja/commands/listbox-select-rows",children:"LISTBOX SELECT ROWS"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/ja/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION"})]})]})}function j(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return c}});var t=s(667294);let i={},r=t.createContext(i);function c(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);