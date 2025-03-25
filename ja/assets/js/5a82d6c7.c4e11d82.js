"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61718"],{526045:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>h,contentTitle:()=>l});var i=JSON.parse('{"id":"commands-legacy/set-list-item-properties","title":"SET LIST ITEM PROPERTIES","description":"SET LIST ITEM PROPERTIES ( { ;} list ; itemRef ; enterable ; styles {; icon {; color}} )SET LIST ITEM PROPERTIES (  ; list ;  ; enterable ; styles {; icon {; color*}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-list-item-properties.md","sourceDirName":"commands-legacy","slug":"/commands/set-list-item-properties","permalink":"/docs/ja/commands/set-list-item-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-list-item-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-list-item-properties","title":"SET LIST ITEM PROPERTIES","slug":"/commands/set-list-item-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET LIST ITEM PARAMETER","permalink":"/docs/ja/commands/set-list-item-parameter"},"next":{"title":"SET LIST PROPERTIES","permalink":"/docs/ja/commands/set-list-properties"}}'),r=s("785893"),t=s("250065");let d={id:"set-list-item-properties",title:"SET LIST ITEM PROPERTIES",slug:"/commands/set-list-item-properties",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function j(e){let n={a:"a",br:"br",code:"code",em:"em",filesystem:"filesystem",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET LIST ITEM PROPERTIES"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"list"})," ; ",(0,r.jsx)(n.em,{children:"itemRef"})," ; ",(0,r.jsx)(n.em,{children:"enterable"})," ; ",(0,r.jsx)(n.em,{children:"styles"})," {; ",(0,r.jsx)(n.em,{children:"icon"})," {; ",(0,r.jsx)(n.em,{children:"color"}),"}} )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"SET LIST ITEM PROPERTIES"})," ( * ; ",(0,r.jsx)(n.em,{children:"list"})," ; * ; ",(0,r.jsx)(n.em,{children:"enterable"})," ; ",(0,r.jsx)(n.em,{children:"styles"})," {; ",(0,r.jsx)(n.em,{children:"icon"})," {; ",(0,r.jsx)(n.em,{children:"color"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u6307\u5B9A\u6642, list\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, list\u306F\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"list"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7 (* \u7701\u7565\u6642), \u307E\u305F\u306F \u30EA\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"itemRef | *"}),(0,r.jsx)(n.td,{children:"\u6F14\u7B97\u5B50, \u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u9805\u76EE\u53C2\u7167\u756A\u53F7, \u307E\u305F\u306F 0: \u30EA\u30B9\u30C8\u306B\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE, \u307E\u305F\u306F *: \u30EA\u30B9\u30C8\u4E2D\u306E\u30AB\u30EC\u30F3\u30C8\u9805\u76EE"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"enterable"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"TRUE = \u5165\u529B\u53EF, FALSE = \u5165\u529B\u4E0D\u53EF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styles"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u9805\u76EE\u306E\u30D5\u30A9\u30F3\u30C8\u30B9\u30BF\u30A4\u30EB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"icon"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'\u30D4\u30AF\u30C1\u30E3\u30FC\u540D\u307E\u305F\u306F\u756A\u53F7 (\u30A2\u30A4\u30B3\u30F3\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F "" \u307E\u305F\u306F 0)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"color"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"RGB\u30AB\u30E9\u30FC\u5024 \u307E\u305F\u306F -1 = \u5143\u306E\u30AB\u30E9\u30FC\u306B\u30EA\u30BB\u30C3\u30C8"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET LIST ITEM PROPERTIES"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5F15\u6570",(0,r.jsx)(n.em,{children:"list"}),"\u306B\u6E21\u3055\u308C\u305F\u53C2\u7167\u756A\u53F7\u307E\u305F\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306E\u30EA\u30B9\u30C8\u5185\u3067\u3001",(0,r.jsx)(n.em,{children:"itemRef"}),"\u306B\u3088\u3063\u3066\u6307\u5B9A\u3055\u308C\u305F\u9805\u76EE\u3092\u5909\u66F4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u7B2C\u4E00\u5F15\u6570 ",(0,r.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3059\u3068\u3001",(0,r.jsx)(n.em,{children:"list"})," \u5F15\u6570\u306F\u30D5\u30A9\u30FC\u30E0\u4E0A\u306E\u30EA\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u5FDC\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u3067\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"list"})," \u5F15\u6570\u306F\u968E\u5C64\u30EA\u30B9\u30C8\u53C2\u7167 (",(0,r.jsx)(n.a,{href:"#",title:"\u968E\u5C64\u30EA\u30B9\u30C8\u3078\u306E\u53C2\u7167",children:"ListRef"}),") \u3067\u3059\u3002\u30EA\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4E00\u3064\u3057\u304B\u4F7F\u308F\u306A\u3044\u5834\u5408\u3084\u30012\u756A\u76EE\u306E ",(0,r.jsx)(n.em,{children:"*"})," \u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u4E21\u65B9\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u4ED6\u65B9\u30D5\u30A9\u30FC\u30E0\u4E0A\u306B\u540C\u3058\u968E\u5C64\u30EA\u30B9\u30C8\u3092\u53C2\u7167\u3059\u308B\u8907\u6570\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u3042\u308B\u5834\u5408\u3067\u30012\u756A\u76EE\u306E ",(0,r.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3057\u3066\u30AB\u30EC\u30F3\u30C8\u9805\u76EE\u3092\u53C2\u7167\u3059\u308B\u5834\u5408\u3001\u305D\u308C\u305E\u308C\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u500B\u5225\u306B\u30AB\u30EC\u30F3\u30C8\u9805\u76EE\u3092\u3082\u3064\u306E\u3067\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u57FA\u3065\u304F\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"itemRef"}),"\u306B\u306F\u53C2\u7167\u756A\u53F7\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u6E21\u3055\u308C\u305F\u9805\u76EE\u53C2\u7167\u756A\u53F7\u3092\u6301\u3064\u9805\u76EE\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u52D5\u4F5C\u3057\u307E\u305B\u3093\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3057\u3066",(0,r.jsx)(n.em,{children:"itemRef"}),"\u306B0\u3092\u6E21\u3059\u3053\u3068\u306B\u3088\u3063\u3066\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/append-to-list",children:"APPEND TO LIST"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0\u3057\u305F\u6700\u5F8C\u306E\u9805\u76EE\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u5F8C\u306B\u3001\u5F15\u6570",(0,r.jsx)(n.em,{children:"itemRef"}),"\u306B ",(0,r.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30EA\u30B9\u30C8\u306E\u30AB\u30EC\u30F3\u30C8\u9805\u76EE\u306B\u5BFE\u3057\u3066\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u624B\u52D5\u3067\u8907\u6570\u306E\u30EA\u30B9\u30C8\u9805\u76EE\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u6700\u5F8C\u306B\u9078\u629E\u3055\u308C\u305F\u9805\u76EE\u304C\u30AB\u30EC\u30F3\u30C8\u30EA\u30B9\u30C8\u9805\u76EE\u3068\u306A\u308A\u307E\u3059\u3002\u9078\u629E\u3055\u308C\u305F\u9805\u76EE\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9805\u76EE\u53C2\u7167\u756A\u53F7\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u696D\u3092\u5B9F\u884C\u3059\u308B\u5834\u5408\u3001\u9805\u76EE\u304C\u30E6\u30CB\u30FC\u30AF\u306A\u53C2\u7167\u756A\u53F7\u3092\u6301\u3064\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u3001\u9805\u76EE\u3092\u533A\u5225\u3067\u304D\u307E\u305B\u3093\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,r.jsx)(n.em,{children:"\u968E\u5C64\u30EA\u30B9\u30C8\u306E\u7BA1\u7406"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8:"})," \u9805\u76EE\u306E\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306F\u305D\u306E\u30B5\u30D6\u30EA\u30B9\u30C8\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-list-item",children:"SET LIST ITEM"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9805\u76EE\u3092\u5165\u529B\u53EF\u80FD\u306B\u3059\u308B\u5834\u5408\u306F\u3001",(0,r.jsx)(n.em,{children:"enterable"}),"\u5F15\u6570\u306BTRUE\u3092\u6E21\u3057\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306FFALSE\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u91CD\u8981"}),": \u9805\u76EE\u3092\u5165\u529B\u53EF\u306B\u3059\u308B\u306B\u306F\u3001\u305D\u306E\u9805\u76EE\u304C\u5165\u529B\u53EF\u3067\u3042\u308B\u30EA\u30B9\u30C8\u306B\u5C5E\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/object-set-enterable",children:"OBJECT SET ENTERABLE"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30EA\u30B9\u30C8\u5168\u4F53\u3092\u5165\u529B\u53EF\u307E\u305F\u306F\u5165\u529B\u4E0D\u53EF\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,r.jsx)(n.strong,{children:"SET LIST ITEM PROPERTIES"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u500B\u3005\u306E\u30EA\u30B9\u30C8\u9805\u76EE\u3092\u5165\u529B\u53EF\u307E\u305F\u306F\u5165\u529B\u4E0D\u53EF\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u5165\u529B\u53EF\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30EA\u30B9\u30C8\u30EC\u30D9\u30EB\u3067\u5909\u66F4\u3057\u3066\u3082\u3001\u9805\u76EE\u306E\u5165\u529B\u53EF\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002\u3057\u304B\u3057\u3001\u9805\u76EE\u306B\u5165\u529B\u3067\u304D\u308B\u306E\u306F\u3001\u305D\u306E\u30EA\u30B9\u30C8\u304C\u5165\u529B\u53EF\u306A\u5834\u5408\u306E\u307F\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9805\u76EE\u306E\u30D5\u30A9\u30F3\u30C8\u30B9\u30BF\u30A4\u30EB\u306F\u3001",(0,r.jsx)(n.em,{children:"styles"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u5B9A\u7FA9\u6E08\u5B9A\u6570\u306E1\u3064\u3001\u307E\u305F\u306F\u8907\u6570\u3092\u7D44\u307F\u5408\u308F\u305B\u3066\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{children:"\u5024"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bold"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Italic"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Plain"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Underline"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"icon"})," \u306B\u306F\u3001\u9805\u76EE\u306E\u30A2\u30A4\u30B3\u30F3\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u6E21\u3057\u307E\u3059\u3002\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u53C2\u7167\u3001\u307E\u305F\u306F\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u30D4\u30AF\u30C1\u30E3\u30FC (\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u307F) \u304C\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u53C2\u7167 (\u30C6\u30AD\u30B9\u30C8): \u3053\u306E\u5834\u5408\u3001 ",(0,r.jsxs)(n.strong,{children:["path:",(0,r.jsx)(n.filesystem,{})]})," \u306E\u5F62\u3067\u8A18\u8FF0\u3057\u307E\u3059\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,r.jsx)(n.em,{children:"filesystem \u30D1\u30B9\u540D"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u30E9\u30A4\u30D6\u30E9\u30EA\u30D4\u30AF\u30C1\u30E3\u30FC (\u500D\u9577\u6574\u6570\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u3001\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u307F): \u30D4\u30AF\u30C1\u30E3\u30FC\u306E\u540D\u524D\u307E\u305F\u306F\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002\u540D\u524D\u304C\u91CD\u8907\u3059\u308B\u3053\u3068\u304C\u3042\u308B\u306E\u306B\u5BFE\u3057\u30D4\u30AF\u30C1\u30E3\u30FC\u756A\u53F7\u306F\u30E6\u30CB\u30FC\u30AF\u3067\u3042\u308B(\u91CD\u8907\u3057\u306A\u3044)\u305F\u3081\u3001\u540D\u524D\u3088\u308A\u3082\u756A\u53F7\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u4E00\u822C\u306B\u63A8\u5968\u3055\u308C\u307E\u3059\u3002\u756A\u53F7\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001",(0,r.jsx)(n.em,{children:"icon"})," \u5F15\u6570\u306BUse PicRef+N \u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u3053\u3067\u306EN\u306F\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u30E9\u30A4\u30D6\u30E9\u30EA\u3067\u306E\u30D4\u30AF\u30C1\u30E3\u30FC\u306E\u53C2\u7167\u756A\u53F7\u3092\u610F\u5473\u3057\u307E\u3059\u3002Use PicRef \u306F\u3001",(0,r.jsx)(n.em,{children:"Hierarchical Lists"})," \u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u5B9A\u7FA9\u6E08\u307F\u5B9A\u6570\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u9805\u76EE\u306B\u5BFE\u3057\u3066\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u3092\u4F55\u3082\u8A2D\u5B9A\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u306B\u306F\u3001",(0,r.jsx)(n.em,{children:"icon"}),' \u306B\u7A7A\u306E\u6587\u5B57\u5217 ("") \u307E\u305F\u306F\u30BC\u30ED (0) \u3092\u6E21\u3057\u307E\u3059\u3002']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6CE8:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30D4\u30AF\u30C1\u30E3\u30FC\u30E9\u30A4\u30D6\u30E9\u30EA\u306F \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E2\u30FC\u30C9\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u306A\u3044\u305F\u3081\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u53C2\u7167\u3092\u4F7F\u3063\u305F\u65B9\u6CD5\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["4D \u30D4\u30AF\u30C1\u30E3\u30FC\u5F0F (\u30D5\u30A3\u30FC\u30EB\u30C9, \u5909\u6570, \u7B49) \u3092\u4F7F\u7528\u3057\u3066\u9805\u76EE\u30A2\u30A4\u30B3\u30F3\u3092\u6307\u5B9A\u3059\u308B\u306B\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-list-item-icon",children:"SET LIST ITEM ICON"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"color"})," \u5F15\u6570 (\u30AA\u30D7\u30B7\u30E7\u30F3) \u3092\u4F7F\u7528\u3057\u3066\u3001\u9805\u76EE\u30C6\u30AD\u30B9\u30C8\u306E\u8272\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u8272\u306FRGB\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3001\u4F8B\u3048\u30700x00RRGGBB\u5F62\u5F0F\u306E4\u30D0\u30A4\u30C8\u306E\u500D\u9577\u6574\u6570\u3067\u6307\u5B9A\u3057\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"})," \u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u9805\u76EE\u3092\u30AA\u30EA\u30B8\u30CA\u30EB\u306E\u8272\u306B\u30EA\u30BB\u30C3\u30C8\u3059\u308B\u306B\u306F\u3001",(0,r.jsx)(n.em,{children:"color"}),"\u5F15\u6570\u306B-1\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/append-to-list",title:"APPEND TO LIST",children:"APPEND TO LIST"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u306F\u30AB\u30EC\u30F3\u30C8\u9805\u76EE\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u592A\u5B57\u306E\u8D64\u306B\u5909\u66F4\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET LIST ITEM PROPERTIES(list;*;True;Bold;0;0x00FF0000)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/get-list-item-properties",children:"GET LIST ITEM PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Hierarchical Lists"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-list-item",children:"SET LIST ITEM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-list-item-icon",children:"SET LIST ITEM ICON"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"386"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var i=s(667294);let r={},t=i.createContext(r);function d(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);