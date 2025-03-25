"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57960"],{905952:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>h,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/insert-in-list","title":"INSERT IN LIST","description":"INSERT IN LIST ( { ;} list ; beforeItemRef ; itemText ; itemRef {; sublist ; expanded} )INSERT IN LIST (  ; list ;  ; itemText ; itemRef {; sublist ; expanded*} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/insert-in-list.md","sourceDirName":"commands-legacy","slug":"/commands/insert-in-list","permalink":"/docs/ja/commands/insert-in-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-in-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"insert-in-list","title":"INSERT IN LIST","slug":"/commands/insert-in-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST PROPERTIES","permalink":"/docs/ja/commands/get-list-properties"},"next":{"title":"Is a list","permalink":"/docs/ja/commands/is-a-list"}}'),i=s("785893"),d=s("250065");let l={id:"insert-in-list",title:"INSERT IN LIST",slug:"/commands/insert-in-list",displayed_sidebar:"docs"},r=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"INSERT IN LIST"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"list"})," ; ",(0,i.jsx)(n.em,{children:"beforeItemRef"})," ; ",(0,i.jsx)(n.em,{children:"itemText"})," ; ",(0,i.jsx)(n.em,{children:"itemRef"})," {; ",(0,i.jsx)(n.em,{children:"sublist"})," ; ",(0,i.jsx)(n.em,{children:"expanded"}),"} )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"INSERT IN LIST"})," ( * ; ",(0,i.jsx)(n.em,{children:"list"})," ; * ; ",(0,i.jsx)(n.em,{children:"itemText"})," ; ",(0,i.jsx)(n.em,{children:"itemRef"})," {; ",(0,i.jsx)(n.em,{children:"sublist"})," ; ",(0,i.jsx)(n.em,{children:"expanded"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u6307\u5B9A\u6642, list\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, list\u306F\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"list"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7 (* \u7701\u7565\u6642), \u307E\u305F\u306F \u30EA\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"beforeItemRef | *"}),(0,i.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570, \u6F14\u7B97\u5B50"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u9805\u76EE\u53C2\u7167\u756A\u53F7 \u307E\u305F\u306F 0: \u30EA\u30B9\u30C8\u306B\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE \u307E\u305F\u306F *: \u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u9805\u76EE"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"itemText"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u65B0\u3057\u3044\u30EA\u30B9\u30C8\u9805\u76EE\u306E\u30C6\u30AD\u30B9\u30C8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"itemRef"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u65B0\u3057\u3044\u30EA\u30B9\u30C8\u9805\u76EE\u306E\u30E6\u30CB\u30FC\u30AF\u306A\u53C2\u7167\u756A\u53F7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sublist"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u65B0\u3057\u3044\u30EA\u30B9\u30C8\u9805\u76EE\u306B\u6DFB\u4ED8\u3059\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u30B5\u30D6\u30EA\u30B9\u30C8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expanded"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30B5\u30D6\u30EA\u30B9\u30C8\u306E\u5C55\u958B/\u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u6307\u5B9A"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:["INSERT IN LIST \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,i.jsx)(n.em,{children:"list"}),"\u306B\u6E21\u3055\u308C\u305F\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7\u307E\u305F\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306E\u30EA\u30B9\u30C8\u306B ",(0,i.jsx)(n.em,{children:"itemRef"}),"\u304C\u6307\u5B9A\u3059\u308B\u65B0\u898F\u9805\u76EE\u3092\u633F\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u7B2C\u4E00\u5F15\u6570 ",(0,i.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3059\u3068\u3001",(0,i.jsx)(n.em,{children:"list"})," \u5F15\u6570\u306F\u30D5\u30A9\u30FC\u30E0\u4E0A\u306E\u30EA\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u5FDC\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u3067\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,i.jsx)(n.em,{children:"list"})," \u5F15\u6570\u306F\u968E\u5C64\u30EA\u30B9\u30C8\u53C2\u7167 (",(0,i.jsx)(n.a,{href:"#",title:"\u968E\u5C64\u30EA\u30B9\u30C8\u3078\u306E\u53C2\u7167",children:"ListRef"}),") \u3067\u3059\u3002\u30EA\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4E00\u3064\u3057\u304B\u4F7F\u308F\u306A\u3044\u5834\u5408\u3084\u30012\u756A\u76EE\u306E ",(0,i.jsx)(n.em,{children:"*"})," \u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u4E21\u65B9\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u4ED6\u65B9\u30D5\u30A9\u30FC\u30E0\u4E0A\u306B\u540C\u3058\u968E\u5C64\u30EA\u30B9\u30C8\u3092\u53C2\u7167\u3059\u308B\u8907\u6570\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u3042\u308B\u5834\u5408\u3067\u30012\u756A\u76EE\u306E ",(0,i.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3057\u3066\u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u9805\u76EE\u3092\u53C2\u7167\u3059\u308B\u5834\u5408\u3001\u305D\u308C\u305E\u308C\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u500B\u5225\u306B\u9078\u629E\u3055\u308C\u305F\u9805\u76EE\u3092\u3082\u3064\u306E\u3067\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u57FA\u3065\u304F\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"beforeItemRef"})," \u5F15\u6570\u306F\u3001\u65B0\u898F\u30EA\u30B9\u30C8\u9805\u76EE\u3092\u633F\u5165\u3059\u308B\u4F4D\u7F6E\u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B\u7528\u3044\u307E\u3059:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30EA\u30B9\u30C8\u306B\u6700\u5F8C\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE\u306E\u524D\u306B\u65B0\u3057\u3044\u9805\u76EE\u3092\u633F\u5165\u3059\u308B\u306B\u306F\u50240\u3092\u6E21\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u65B0\u3057\u304F\u633F\u5165\u3055\u308C\u305F\u9805\u76EE\u304C\u9078\u629E\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u9805\u76EE\u306E\u524D\u306B\u65B0\u3057\u3044\u9805\u76EE\u3092\u633F\u5165\u3059\u308B\u306B\u306F ",(0,i.jsx)(n.em,{children:"*"})," \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u65B0\u3057\u304F\u633F\u5165\u3055\u308C\u305F\u9805\u76EE\u304C\u9078\u629E\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u7279\u5B9A\u306E\u9805\u76EE\u306E\u524D\u306B\u633F\u5165\u3059\u308B\u306B\u306F\u3001\u305D\u306E\u9805\u76EE\u306E\u53C2\u7167\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u65B0\u3057\u304F\u633F\u5165\u3055\u308C\u305F\u9805\u76EE\u306F\u81EA\u52D5\u7684\u306B\u306F\u9078\u629E\u3055\u308C\u307E\u305B\u3093\u3002\u9805\u76EE\u53C2\u7167\u756A\u53F7\u306B\u5BFE\u5FDC\u3059\u308B\u9805\u76EE\u304C\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u65B0\u898F\u9805\u76EE\u306E\u30C6\u30AD\u30B9\u30C8\u3092",(0,i.jsx)(n.em,{children:"itemText"}),"\u306B\u6E21\u3057\u307E\u3059\u30024D v16 R4\u4EE5\u964D\u3067\u3001\u9805\u76EE\u306B\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u3001 ak standard action title\u5B9A\u6570\u3092",(0,i.jsx)(n.em,{children:"itemText"}),"\u306B\u53D7\u3051\u6E21\u3059\u3068\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3055\u308C\u305F\u30A2\u30AF\u30B7\u30E7\u30F3\u540D\u304C\u81EA\u52D5\u7684\u306B\u63A1\u7528\u3055\u308C\u307E\u3059\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,i.jsx)(n.em,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"itemRef"}),"\u306B\u306F\u65B0\u898F\u9805\u76EE\u306E\u9805\u76EE\u53C2\u7167\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u756A\u53F7\u306F\u30E6\u30CB\u30FC\u30AF\u5024\u3068\u898B\u306A\u3055\u308C\u307E\u3059\u304C\u3001\u5B9F\u969B\u306B\u306F\u4EFB\u610F\u306E\u5024\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,i.jsx)(n.em,{children:"itemRef"}),"\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F ",(0,i.jsx)(n.em,{children:"\u968E\u5C64\u30EA\u30B9\u30C8\u306E\u7BA1\u7406"}),"\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9805\u76EE\u306B\u30B5\u30D6\u9805\u76EE\u3092\u8A2D\u5B9A\u3059\u308B\u5834\u5408\u306F\u3001",(0,i.jsx)(n.em,{children:"sublist"})," \u306B\u6709\u52B9\u306A\u30EA\u30B9\u30C8\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u30B5\u30D6\u30EA\u30B9\u30C8\u3092\u5C55\u958B\u307E\u305F\u306F\u7E2E\u5C0F\u3092\u6307\u5B9A\u3059\u308B",(0,i.jsx)(n.em,{children:"expanded"}),"\u5F15\u6570\u3092\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002",(0,i.jsx)(n.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),"\u307E\u305F\u306F",(0,i.jsx)(n.a,{href:"/docs/ja/commands/false",title:"False",children:"False"}),"\u306E\u6307\u5B9A\u306B\u5F93\u3044\u3001\u30B5\u30D6\u30EA\u30B9\u30C8\u306F\u5C55\u958B\u307E\u305F\u306F\u6298\u308A\u305F\u305F\u307E\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F\u3001\u30EA\u30B9\u30C8",(0,i.jsx)(n.em,{children:"hList"}),"\u306E\u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u9805\u76EE\u306E\u76F4\u524D\u306B\u9805\u76EE\u3092\u633F\u5165\u3057\u307E\u3059\uFF08\u30B5\u30D6\u30EA\u30B9\u30C8\u306F\u6DFB\u4ED8\u3055\u308C\u3066\u3044\u307E\u305B\u3093\uFF09:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0vlUniqueRef:=vlUniqueRef+1\n\xa0INSERT IN LIST(hList;*;"New Item";vlUniqueRef)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/commands/append-to-list",children:"APPEND TO LIST"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(n.td,{children:"625"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var t=s(667294);let i={},d=t.createContext(i);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);