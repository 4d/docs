"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60061"],{834866:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>d,metadata:()=>l,assets:()=>r,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"commands-legacy/listbox-get-cell-position","title":"LISTBOX GET CELL POSITION","description":"LISTBOX GET CELL POSITION ( { ;} object {; X ; Y }; column ; row {; colVar*} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-cell-position.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-cell-position","permalink":"/docs/ja/20-R7/commands/listbox-get-cell-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-cell-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-cell-position","title":"LISTBOX GET CELL POSITION","slug":"/commands/listbox-get-cell-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET CELL COORDINATES","permalink":"/docs/ja/20-R7/commands/listbox-get-cell-coordinates"},"next":{"title":"LISTBOX Get column formula","permalink":"/docs/ja/20-R7/commands/listbox-get-column-formula"}}'),i=s("785893"),t=s("250065");let d={id:"listbox-get-cell-position",title:"LISTBOX GET CELL POSITION",slug:"/commands/listbox-get-cell-position",displayed_sidebar:"docs"},c=void 0,r={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(n){let e={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"LISTBOX GET CELL POSITION"})," ( {* ;} ",(0,i.jsx)(e.em,{children:"object"})," {; ",(0,i.jsx)(e.em,{children:"X"})," ; ",(0,i.jsx)(e.em,{children:"Y"})," }; ",(0,i.jsx)(e.em,{children:"column"})," ; ",(0,i.jsx)(e.em,{children:"row"})," {; ",(0,i.jsx)(e.em,{children:"colVar"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5F15\u6570"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"*"}),(0,i.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u6307\u5B9A\u6642, object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, object\u306F\u5909\u6570"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"object"}),(0,i.jsx)(e.td,{children:"any"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F \u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"X"}),(0,i.jsx)(e.td,{children:"Real"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u306E X\u5EA7\u6A19"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Y"}),(0,i.jsx)(e.td,{children:"Real"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u306E Y\u5EA7\u6A19"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"column"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"\u5217\u756A\u53F7"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"row"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"\u884C\u756A\u53F7"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"colVar"}),(0,i.jsx)(e.td,{children:"Pointer"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"\u5217\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"LISTBOX GET CELL POSITION"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,i.jsx)(e.em,{children:"object"}),"\u304A\u3088\u3073 ",(0,i.jsx)(e.em,{children:"*"})," \u3067\u6307\u5B9A\u3055\u308C\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u6700\u5F8C\u306B\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u4F4D\u7F6E\u306B\u5BFE\u5FDC\u3059\u308B\u4F4D\u7F6E\u3001\u3042\u308B\u3044\u306F\u30AD\u30FC\u30DC\u30FC\u30C9\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u9078\u629E\u3055\u308C\u305F\u30BB\u30EB\u306E\u4F4D\u7F6E\u3001\u3042\u308B\u3044\u306F\u30DE\u30A6\u30B9\u306E\u6C34\u5E73\u30FB\u5782\u76F4\u5EA7\u6A19\u3092",(0,i.jsx)(e.em,{children:"column"})," \u3068",(0,i.jsx)(e.em,{children:"row"})," \u5F15\u6570\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570 ",(0,i.jsx)(e.em,{children:"*"})," \u3092\u6E21\u3059\u3053\u3068\u306B\u3088\u308A\u3001",(0,i.jsx)(e.em,{children:"object"})," \u5F15\u6570\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D(\u6587\u5B57\u5217)\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,i.jsx)(e.em,{children:"object"})," \u5F15\u6570\u304C\u5909\u6570\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"X"})," \u304A\u3088\u3073 ",(0,i.jsx)(e.em,{children:"Y"})," \u5F15\u6570\u304C\u6E21\u3055\u308C\u305F\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30DE\u30A6\u30B9\u306E\u5EA7\u6A19\u306B\u5BFE\u5FDC\u3059\u308B\u5217\u6570\u3068\u884C\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306F\u30AF\u30EA\u30C3\u30AF\u3042\u308B\u3044\u306F\u9078\u629E\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u5217\u6570\u3068\u884C\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u30C7\u30FC\u30BF\u5165\u529B\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3067\u3082\u3001\u6709\u52B9\u306A\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"row"})," \u5F15\u6570\u306B\u8FD4\u3055\u308C\u308B\u6570\u5024\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u884C\u306E\u8868\u793A/\u975E\u8868\u793A\u72B6\u614B\u3092\u8003\u616E\u306B\u5165\u308C\u307E\u305B\u3093\u3002\u30AF\u30EA\u30C3\u30AF\u3042\u308B\u3044\u306F",(0,i.jsx)(e.em,{children:"Y"})," \u306E\u4F4D\u7F6E\u304C\u6700\u5F8C\u306E\u5217\u3088\u308A\u4E0B\u3067\u3042\u3063\u305F\u5834\u5408\u306B\u306F\u3001\u50240\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u4F59\u767D\u30AB\u30E9\u30E0\u5185\u306E\u30BB\u30EB\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u5834\u5408\u3001\u3042\u308B\u3044\u306F\u4F59\u767D\u30AB\u30E9\u30E0\u306E\u4F4D\u7F6E\u304C",(0,i.jsx)(e.em,{children:"X"})," \u5EA7\u6A19\u306E\u4F4D\u7F6E\u3068\u3057\u3066\u6E21\u3055\u308C\u305F\u5834\u5408\u3001",(0,i.jsx)(e.em,{children:"column"}),' \u5F15\u6570\u306B\u306F"N+1"\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u306EN\u306F\u3001\u4F59\u767D\u30AB\u30E9\u30E0\u306E\u30BB\u30EB\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u6642\u70B9\u3001\u3042\u308B\u3044\u306F',(0,i.jsx)(e.em,{children:"X"}),' \u5EA7\u6A19\u306E\u4F4D\u7F6E\u306B\u30AB\u30E9\u30E0\u304C\u306A\u3044\u5834\u5408\u306E\u3001\u65E2\u5B58\u306E\u30AB\u30E9\u30E0\u6570\u3092\u73FE\u3057\u307E\u3059\u3002\u4F59\u767D\u30AB\u30E9\u30E0\u306F"\u30AB\u30E9\u30E0\u81EA\u52D5\u30EA\u30B5\u30A4\u30BA"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u81EA\u52D5\u7684\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u70B9\u306B\u3064\u3044\u3066\u306E\u3088\u308A\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F',(0,i.jsx)(e.em,{children:"\u30EA\u30B5\u30A4\u30BA\u30AA\u30D7\u30B7\u30E7\u30F3\u30C6\u30FC\u30DE"}),"\u306E\u6BB5\u843D\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u968E\u5C64\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u304A\u3044\u3066\u306F\u3001",(0,i.jsx)(e.em,{children:"column"})," \u5F15\u6570\u306F\u968E\u5C64\u3092\u8868\u3059\u305F\u3081\u306B\u4F75\u5408\u3055\u308C\u3066\u3044\u308B\u30AB\u30E9\u30E0\u3082\u8003\u616E\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u70B9\u306F",(0,i.jsx)(e.em,{children:"\u9078\u629E\u884C\u3068\u305D\u306E\u4F4D\u7F6E\u306E\u7BA1\u7406"})," \u306E\u6BB5\u843D\u306B\u304A\u3044\u3066\u8AAC\u660E\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570",(0,i.jsx)(e.em,{children:"colVar"}),"\u306B\u306F\u3001\u5217\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u3066\u3044\u308B\u5909\u6570\uFF08\u4F8B\u3048\u3070\u914D\u5217\uFF09\u306B\u5BFE\u3059\u308B\u30DD\u30A4\u30F3\u30BF\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"X"})," \u304A\u3088\u3073 ",(0,i.jsx)(e.em,{children:"Y"})," \u5F15\u6570\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u6B21\u306E\u3044\u305A\u308C\u304B\u306E\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3059\u308B\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u5BFE\u3057\u3066\u306E\u307F\u3001\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"On Clicked \u3068 On Double Clicked"}),"\n",(0,i.jsx)(e.li,{children:"On Before Keystroke \u3068 On After Keystroke"}),"\n",(0,i.jsx)(e.li,{children:"On After Edit"}),"\n",(0,i.jsx)(e.li,{children:"On Getting Focus \u3068 On Losing Focus"}),"\n",(0,i.jsx)(e.li,{children:"On Data Change"}),"\n",(0,i.jsx)(e.li,{children:"On Selection Change"}),"\n",(0,i.jsx)(e.li,{children:"On Before Data Entry"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4E0A\u8A18\u4EE5\u5916\u306E\u30A4\u30D9\u30F3\u30C8\u3067\u4F7F\u7528\u3055\u308C\u305F\u5834\u5408\u3001",(0,i.jsx)(e.strong,{children:"LISTBOX GET CELL POSITION"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,i.jsx)(e.em,{children:"column"}),"\u3068",(0,i.jsx)(e.em,{children:"row"}),"\u306B0\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30DE\u30A6\u30B9\u30AF\u30EA\u30C3\u30AF\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u3001(On Getting Focus\u3092\u751F\u6210\u3059\u308B)",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/edit-item",children:"EDIT ITEM"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308B\u9078\u629E\u307E\u305F\u306F\u9078\u629E\u89E3\u9664\u3092\u8003\u616E\u3057\u307E\u3059\u3002\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u9078\u629E\u884C\u304C\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u77E2\u5370\u30AD\u30FC\u3067\u5909\u66F4\u3055\u308C\u305F\u5834\u5408\u3001",(0,i.jsx)(e.em,{children:"column"}),"\u5F15\u6570\u306B\u306F0\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001",(0,i.jsx)(e.em,{children:"colVar"}),"\u304C\u6E21\u3055\u308C\u3066\u3044\u308C\u3070",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/is-nil-pointer",children:"Is nil pointer"}),"\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/listbox-get-cell-coordinates",children:"LISTBOX GET CELL COORDINATES"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/listbox-select-break",children:"LISTBOX SELECT BREAK"})]}),"\n",(0,i.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(e.td,{children:"971"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,i.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return d}});var l=s(667294);let i={},t=l.createContext(i);function d(n){let e=l.useContext(t);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);