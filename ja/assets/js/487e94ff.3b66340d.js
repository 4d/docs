"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68304"],{233531:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>h,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/set-list-item","title":"SET LIST ITEM","description":"SET LIST ITEM ( { ;} list ; itemRef |  ; newItemText ; newItemRef {; sublist ; expanded} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-list-item.md","sourceDirName":"commands-legacy","slug":"/commands/set-list-item","permalink":"/docs/ja/20-R7/commands/set-list-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-list-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-list-item","title":"SET LIST ITEM","slug":"/commands/set-list-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Selected list items","permalink":"/docs/ja/20-R7/commands/selected-list-items"},"next":{"title":"SET LIST ITEM FONT","permalink":"/docs/ja/20-R7/commands/set-list-item-font"}}'),i=s("785893"),d=s("250065");let l={id:"set-list-item",title:"SET LIST ITEM",slug:"/commands/set-list-item",displayed_sidebar:"docs"},r=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET LIST ITEM"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"list"})," ; itemRef | * ; ",(0,i.jsx)(n.em,{children:"newItemText"})," ; ",(0,i.jsx)(n.em,{children:"newItemRef"})," {; ",(0,i.jsx)(n.em,{children:"sublist"})," ; ",(0,i.jsx)(n.em,{children:"expanded"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u6307\u5B9A\u6642, list\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, list\u306F\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"list"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7 (* \u7701\u7565\u6642), \u307E\u305F\u306F \u30EA\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"itemRef | *"}),(0,i.jsx)(n.td,{children:"\u6F14\u7B97\u5B50, \u500D\u9577\u6574\u6570"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u9805\u76EE\u53C2\u7167\u756A\u53F7, \u307E\u305F\u306F 0: \u30EA\u30B9\u30C8\u306B\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE, \u307E\u305F\u306F *: \u30EA\u30B9\u30C8\u4E2D\u306E\u30AB\u30EC\u30F3\u30C8\u9805\u76EE"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"newItemText"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u65B0\u3057\u3044\u9805\u76EE\u30C6\u30AD\u30B9\u30C8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"newItemRef"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u65B0\u3057\u3044\u9805\u76EE\u53C2\u7167\u756A\u53F7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sublist"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u9805\u76EE\u306B\u6DFB\u4ED8\u3059\u308B\u65B0\u3057\u3044\u30B5\u30D6\u30EA\u30B9\u30C8, \u307E\u305F\u306F 0: \u30B5\u30D6\u30EA\u30B9\u30C8\u304C\u306A\u3044\u5834\u5408 (\u73FE\u5728\u306E\u30B5\u30D6\u30EA\u30B9\u30C8\u3092\u53D6\u308A\u9664\u304F), \u307E\u305F\u306F -1: \u5909\u66F4\u3057\u306A\u3044"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expanded"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u30B5\u30D6\u30EA\u30B9\u30C8\u306E\u5C55\u958B/\u6298\u308A\u305F\u305F\u307F"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:["SET LIST ITEM \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,i.jsx)(n.em,{children:"list"}),"\u5F15\u6570\u306B\u6E21\u3057\u305F\u53C2\u7167\u756A\u53F7\u307E\u305F\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306E\u30EA\u30B9\u30C8\u306B\u304A\u3044\u3066\u3001",(0,i.jsx)(n.em,{children:"itemRef"}),"\u3067\u6307\u5B9A\u3057\u305F\u9805\u76EE\u3092\u5909\u66F4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["1\u756A\u76EE\u306E * \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,i.jsx)(n.em,{children:"list"})," \u5F15\u6570\u306F\u30D5\u30A9\u30FC\u30E0\u4E2D\u306E\u30EA\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u3067\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,i.jsx)(n.em,{children:"list"})," \u5F15\u6570\u306F\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7 (",(0,i.jsx)(n.a,{href:"#",title:"\u968E\u5C64\u30EA\u30B9\u30C8\u3078\u306E\u53C2\u7167",children:"ListRef"}),") \u3067\u3059\u30021\u3064\u3057\u304B\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067\u30EA\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u3001\u3044\u305A\u308C\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u540C\u3058\u30EA\u30B9\u30C8\u306E\u8907\u6570\u306E\u30EA\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u30D5\u30A9\u30FC\u30E0\u4E0A\u306B\u3042\u308A\u30012\u756A\u76EE\u306E * \u3092\u6E21\u3057\u3066\u30AB\u30EC\u30F3\u30C8\u306E\u9805\u76EE\u3092\u51E6\u7406\u3059\u308B\u5834\u5408\u3001\u30EA\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3054\u3068\u306B\u30AB\u30EC\u30F3\u30C8\u9805\u76EE\u304C\u7570\u306A\u308B\u305F\u3081\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u57FA\u3065\u304F\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"itemRef"}),"\u306B\u306F\u53C2\u7167\u756A\u53F7\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u6E21\u3057\u305F\u9805\u76EE\u53C2\u7167\u756A\u53F7\u3092\u6301\u3064\u9805\u76EE\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3057\u3066",(0,i.jsx)(n.em,{children:"itemRef"}),"\u306B0\u3092\u6E21\u3057\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/append-to-list",title:"APPEND TO LIST",children:"APPEND TO LIST"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u7528\u3044\u3066\u30EA\u30B9\u30C8\u3078\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u308B\u9805\u76EE\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,i.jsx)(n.br,{}),"\n\u6700\u5F8C\u306B\u3001",(0,i.jsx)(n.em,{children:"itemRef"}),"\u306B\u306F ",(0,i.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30EA\u30B9\u30C8\u306E\u30AB\u30EC\u30F3\u30C8\u9805\u76EE\u306B\u5BFE\u3057\u3066\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u624B\u52D5\u3067\u8907\u6570\u306E\u30EA\u30B9\u30C8\u9805\u76EE\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u6700\u5F8C\u306B\u9078\u629E\u3055\u308C\u305F\u9805\u76EE\u304C\u30AB\u30EC\u30F3\u30C8\u30EA\u30B9\u30C8\u9805\u76EE\u306B\u306A\u308A\u307E\u3059\u3002\u9078\u629E\u3055\u308C\u305F\u9805\u76EE\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9805\u76EE\u53C2\u7167\u756A\u53F7\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u696D\u3092\u5B9F\u884C\u3059\u308B\u5834\u5408\u3001\u9805\u76EE\u304C\u30E6\u30CB\u30FC\u30AF\u306A\u53C2\u7167\u756A\u53F7\u3092\u6301\u3064\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u3001\u9805\u76EE\u3092\u533A\u5225\u3067\u304D\u307E\u305B\u3093\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"newItemText"}),"\u306B\u9805\u76EE\u306E\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002\u9805\u76EE\u53C2\u7167\u756A\u53F7\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u3001",(0,i.jsx)(n.em,{children:"newItemRef"}),"\u306B\u65B0\u3057\u3044\u5024\u3092\u6E21\u3057\u307E\u3059\u3002\u5909\u66F4\u3057\u306A\u3044\u5834\u5408\u306F\u540C\u3058\u5024\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9805\u76EE\u306B\u30B5\u30D6\u30EA\u30B9\u30C8\u3092\u6DFB\u4ED8\u3059\u308B\u5834\u5408\u3001\u30B5\u30D6\u30EA\u30B9\u30C8\u306E\u53C2\u7167\u756A\u53F7\u3092",(0,i.jsx)(n.em,{children:"subList"}),"\u306B\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u6642\u3001\u65B0\u305F\u306A\u30B5\u30D6\u30EA\u30B9\u3092\u5C55\u958B\u3059\u308B\u306B\u306F",(0,i.jsx)(n.em,{children:"expanded"}),"\u306B",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/true",title:"True",children:"True"}),"\u3092\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306F",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/false",title:"False",children:"False"}),"\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9805\u76EE\u306B\u3059\u3067\u306B\u6DFB\u4ED8\u3055\u308C\u3066\u3044\u308B\u30B5\u30D6\u30EA\u30B9\u30C8\u3092\u5207\u308A\u96E2\u3059\u5834\u5408\u306F\u3001",(0,i.jsx)(n.em,{children:"sublist"}),"\u306B0\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/get-list-item",title:"GET LIST ITEM",children:"GET LIST ITEM"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u305D\u306E\u30EA\u30B9\u30C8\u306E\u53C2\u7167\u756A\u53F7\u3092\u3042\u3089\u304B\u3058\u3081\u53D6\u5F97\u3057\u3066\u304A\u304F\u3068\u3088\u3044\u3067\u3057\u3087\u3046\u3002\u305D\u3046\u3059\u308C\u3070\u3001\u30EA\u30B9\u30C8\u304C\u5FC5\u8981\u306A\u304F\u306A\u3063\u305F\u3068\u304D\u306B",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/clear-list",title:"CLEAR LIST",children:"CLEAR LIST"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u524A\u9664\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9805\u76EE\u306E\u30B5\u30D6\u30EA\u30B9\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5909\u66F4\u3057\u306A\u3044\u5834\u5408\u306F\u3001",(0,i.jsx)(n.em,{children:"sublist"}),"\u306B-1\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," \u5F15\u6570",(0,i.jsx)(n.em,{children:"sublist"}),"\u3068",(0,i.jsx)(n.em,{children:"expanded"}),"\u306F\u3068\u3082\u306B\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u3059\u304C\u3001\u6307\u5B9A\u3059\u308B\u5834\u5408\u306F\u7D44\u307F\u5408\u308F\u305B\u3066\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"hList"}),"\u306F\u30E6\u30CB\u30FC\u30AF\u306A\u53C2\u7167\u756A\u53F7\u304C\u4ED8\u3044\u305F\u9805\u76EE\u3092\u6301\u3064\u30EA\u30B9\u30C8\u3067\u3059\u3002\u4EE5\u4E0B\u306E\u30DC\u30BF\u30F3\u7528\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u30EA\u30B9\u30C8\u9805\u76EE\u306B\u30B5\u30D6\u9805\u76EE\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$vlItemPos:=Selected list items(hList)\n\xa0If($vlItemPos>0)\n\xa0\xa0\xa0\xa0GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSublist;$vbExpanded)\n\xa0\xa0\xa0\xa0$vbNewSubList:=Not(Is a list($hSublist))\n\xa0\xa0\xa0\xa0If($vbNewSubList)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$hSublist:=New list\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0vlUniqueRef:=vlUniqueRef+1\n\xa0\xa0\xa0\xa0APPEND TO LIST($hSubList;"New Item";vlUniqueRef)\n\xa0\xa0\xa0\xa0If($vbNewSubList)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSublist;True)\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0SELECT LIST ITEMS BY REFERENCE(hList;vlUniqueRef)\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/get-list-item",title:"GET LIST ITEM",children:"GET LIST ITEM"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/append-to-list",title:"APPEND TO LIST",children:"APPEND TO LIST"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,i.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/get-list-item",children:"GET LIST ITEM"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/get-list-item-properties",children:"GET LIST ITEM PROPERTIES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-list-item-font",children:"SET LIST ITEM FONT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-list-item-icon",children:"SET LIST ITEM ICON"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,i.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(n.td,{children:"385"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var t=s(667294);let i={},d=t.createContext(i);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);