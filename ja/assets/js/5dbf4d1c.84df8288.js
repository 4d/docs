"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96197"],{809987:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/set-query-destination","title":"SET QUERY DESTINATION","description":"SET QUERY DESTINATION ( destinationType {; destinationObject {; destinationPtr}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-query-destination.md","sourceDirName":"commands-legacy","slug":"/commands/set-query-destination","permalink":"/docs/ja/20-R8/commands/set-query-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-query-destination.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-query-destination","title":"SET QUERY DESTINATION","slug":"/commands/set-query-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET QUERY AND LOCK","permalink":"/docs/ja/20-R8/commands/set-query-and-lock"},"next":{"title":"SET QUERY LIMIT","permalink":"/docs/ja/20-R8/commands/set-query-limit"}}'),r=s("785893"),l=s("250065");let i={id:"set-query-destination",title:"SET QUERY DESTINATION",slug:"/commands/set-query-destination",displayed_sidebar:"docs"},t=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"SET QUERY DESTINATION"})," ( ",(0,r.jsx)(e.em,{children:"destinationType"})," {; ",(0,r.jsx)(e.em,{children:"destinationObject"})," {; ",(0,r.jsx)(e.em,{children:"destinationPtr"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"destinationType"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"0=\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3, 1=\u30BB\u30C3\u30C8, 2=\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3, 3=\u5909\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"destinationObject"}),(0,r.jsx)(e.td,{children:"Text, Variable"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30BB\u30C3\u30C8\u540D\u3001\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u540D\u3001\u5909\u6570\u3001\u307E\u305F\u306F\u7A7A\u306E\u6587\u5B57\u5217"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"destinationPtr"}),(0,r.jsx)(e.td,{children:"Pointer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"destinationType=3\u306E\u3068\u304D\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"SET QUERY DESTINATION"}),"\u3092\u4F7F\u3044\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u30AF\u30A8\u30EA\u306E\u7D50\u679C\u3092\u914D\u7F6E\u3059\u308B\u5834\u6240\u30924D\u306B\u6307\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"destinationType"}),"\u5F15\u6570\u306B\u914D\u7F6E\u5834\u6240\u306E\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002",(0,r.jsx)(e.em,{children:"Queries"}),"\u30C6\u30FC\u30DE\u306E\u5B9A\u7FA9\u6E08\u307F\u5B9A\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{children:"\u5024"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Into current selection"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Into named selection"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"2"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Into set"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Into variable"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"3"})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["\u4EE5\u4E0B\u306E\u8868\u306B\u3057\u305F\u304C\u3063\u3066\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,r.jsx)(e.em,{children:"destinationObject"}),"\u5F15\u6570\u306B\u30AF\u30A8\u30EA\u306E\u914D\u7F6E\u5148\u3092\u6307\u5B9A\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"destinationType"})}),(0,r.jsx)(e.th,{children:"destinationObject"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5F15\u6570"}),(0,r.jsx)(e.td,{children:"\u5F15\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"0 (current selection)"}),(0,r.jsx)(e.td,{children:"\u5F15\u6570\u3092\u7701\u7565\u3057\u307E\u3059"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"1 (set)"}),(0,r.jsx)(e.td,{children:"(\u65E2\u5B58\u306E\u307E\u305F\u306F\u4F5C\u6210\u3055\u305B\u308B) \u30BB\u30C3\u30C8\u540D"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"2 (named selection)"}),(0,r.jsx)(e.td,{children:"(\u65E2\u5B58\u306E\u307E\u305F\u306F\u4F5C\u6210\u3055\u305B\u308B) \u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3 (variable)"}),(0,r.jsxs)(e.td,{children:["(\u65E2\u5B58\u306E)\u6570\u5024\u5909\u6570\u3001\u307E\u305F\u306F",(0,r.jsx)(e.em,{children:"destinationPtr"}),'\u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u7A7A\u306E\u6587\u5B57\u5217 ("")']})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"\u4F8B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0SET QUERY DESTINATION(Into current selection)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4EE5\u964D\u306E\u691C\u7D22\u3067\u898B\u3064\u304B\u3063\u305F\u30EC\u30B3\u30FC\u30C9\u306F\u3001\u6700\u7D42\u7684\u306B\u305D\u306E\u691C\u7D22\u306E\u5BFE\u8C61\u3068\u306A\u308B\u30C6\u30FC\u30D6\u30EB\u306E\u65B0\u3057\u3044\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4F8B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into set;"mySet")\n'})}),"\n",(0,r.jsx)(e.p,{children:'\u4EE5\u964D\u306E\u691C\u7D22\u3067\u898B\u3064\u304B\u3063\u305F\u30EC\u30B3\u30FC\u30C9\u306F\u3001\u6700\u7D42\u7684\u306B\u30BB\u30C3\u30C8"mySet"\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002\u691C\u7D22\u306E\u5BFE\u8C61\u3068\u306A\u3063\u305F\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002'}),"\n",(0,r.jsx)(e.p,{children:"\u4F8B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into named selection;"myNamedSel")\n'})}),"\n",(0,r.jsx)(e.p,{children:'\u4EE5\u964D\u306E\u691C\u7D22\u3067\u898B\u3064\u304B\u3063\u305F\u30EC\u30B3\u30FC\u30C9\u306F\u3001\u6700\u7D42\u7684\u306B\u306F\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"myNamedSel"\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002\u691C\u7D22\u306E\u5BFE\u8C61\u3068\u306A\u3063\u305F\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002'}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u6CE8:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u691C\u7D22\u304C\u5B8C\u4E86\u3057\u305F\u6642\u306B\u81EA\u52D5\u7684\u306B\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/cut-named-selection",children:"CUT NAMED SELECTION"}),"\u3068\u540C\u69D8\u306B\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002\u3064\u307E\u308A\u53C2\u7167\u3060\u3051\u304C\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u4F7F\u7528\u3059\u308B\u3068\u3001\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u5B58\u5728\u3057\u306A\u304F\u306A\u308A\u307E\u3059\u3002\n\u4F8B:"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0SET QUERY DESTINATION(Into variable;$vlResult)\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u306F\u3001",(0,r.jsx)(e.em,{children:"$vlResult"})," \u5909\u6570\u306F\u4E8B\u524D\u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,r.jsx)(e.br,{}),"\n\u307E\u305F\u306F"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into variable;"";->$vlResult)\n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8"}),"\uFF1A\u3053\u306E\u4E8C\u3064\u76EE\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/get-query-destination",children:"GET QUERY DESTINATION"}),"\u3068\u7D44\u307F\u5408\u308F\u305B\u3066\u4F7F\u7528\u3057\u305F\u3044\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4EE5\u964D\u306E\u691C\u7D22\u3067\u898B\u3064\u304B\u3063\u305F\u30EC\u30B3\u30FC\u30C9\u6570\u304C\u3001\u5909\u6570$vlResult\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002\u691C\u7D22\u306E\u5BFE\u8C61\u3068\u306A\u3063\u305F\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8B66\u544A:"})," ",(0,r.jsx)(e.strong,{children:"SET QUERY DESTINATION"}),"\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u884C\u308F\u308C\u305F\u4EE5\u4E0B\u306E\u691C\u7D22\u306E\u3059\u3079\u3066\u306B\u5F71\u97FF\u3092\u53CA\u307C\u3057\u307E\u3059\u3002",(0,r.jsx)(e.em,{children:"destinationType"}),"\u304C0\u3067\u306A\u3044",(0,r.jsx)(e.strong,{children:"SET QUERY DESTINATION"}),"\u306E\u547C\u3073\u51FA\u3057\u3092\u884C\u3063\u305F\u5F8C\u306F\u3001\u901A\u5E38\u306E\u30AF\u30A8\u30EA\u3092\u518D\u5B9F\u884C\u3059\u308B\u305F\u3081\u306B",(0,r.jsx)(e.strong,{children:"SET QUERY DESTINATION"}),"(0)\u306E\u547C\u3073\u51FA\u3057\u3068\u5BFE\u306B\u3055\u305B\u308B\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"SET QUERY DESTINATION"}),"\u306F\u3001\u4E0B\u8A18\u306E\u30AF\u30A8\u30EA\u30B3\u30DE\u30F3\u30C9\u306E\u52D5\u4F5C\u3092\u5909\u66F4\u3057\u307E\u3059:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query",children:"QUERY"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-selection",children:"QUERY SELECTION"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-by-example",children:"QUERY BY EXAMPLE"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-by-formula",children:"QUERY BY FORMULA"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-by-sql",children:"QUERY BY SQL"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-with-array",children:"QUERY WITH ARRAY"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"})}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u308C\u306B\u5BFE\u3057\u3066",(0,r.jsx)(e.strong,{children:"SET QUERY DESTINATION"}),"\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/all-records",children:"ALL RECORDS"}),"\u3084",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/relate-many",children:"RELATE MANY"}),"\u7B49\u3001\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B\u4ED6\u306E\u30B3\u30DE\u30F3\u30C9\u306B\u306F\u5F71\u97FF\u3092\u4E0E\u3048\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsxs)(e.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F*[Phone Book]",(0,r.jsxs)(e.em,{children:["\u30C6\u30FC\u30D6\u30EB\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u8868\u793A\u3059\u308B\u30D5\u30A9\u30FC\u30E0\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u305D\u306E\u30D5\u30A9\u30FC\u30E0\u306B (\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C826\u6587\u5B57\u306E) ",(0,r.jsx)(e.em,{children:"asRolodex"}),"\u3068\u540D\u4ED8\u3051\u3089\u308C\u305F\u30BF\u30D6\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3068"]}),"[Phone Book]*\u30EC\u30B3\u30FC\u30C9\u3092\u8868\u793A\u3059\u308B\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u30BF\u30D6\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304B\u3089\u4EFB\u610F\u306E\u30BF\u30D6\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u305D\u306E\u30BF\u30D6\u4E0A\u306E\u6587\u5B57\u3067\u59CB\u307E\u308B\u30EC\u30B3\u30FC\u30C9\u3092\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4F8B\u3067\u306F\u3001",(0,r.jsx)(e.em,{children:"[Phone Book]"})," \u30C6\u30FC\u30D6\u30EB\u304C\u5909\u66F4\u3055\u308C\u308B\u3053\u3068\u306F\u306A\u3044\u305F\u3081\u3001\u4EFB\u610F\u306E\u30BF\u30D6\u3092\u9078\u629E\u3059\u308B\u305F\u3073\u306B\u30AF\u30A8\u30EA\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u691C\u7D22\u306B\u8981\u3059\u308B\u6642\u9593\u3092\u7BC0\u7D04\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u308C\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306B\u3001\u691C\u7D22\u7D50\u679C\u3092\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u683C\u7D0D\u3057\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u518D\u5229\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F",(0,r.jsx)(e.em,{children:"asRolodex"}),"\u30BF\u30D6\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u3059:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// asRolodex\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0// \u30D5\u30A9\u30FC\u30E0\u304C\u8868\u793A\u3055\u308C\u308B\u524D\u306B\n\xa0\xa0// rolodex\u3068\u3001\u691C\u7D22\u304C\u884C\u308F\u308C\u305F\u304B\u3092\u793A\u3059\u30D6\u30FC\u30EB\u914D\u5217\u3092\u521D\u671F\u5316\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY STRING(1;asRolodex;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY BOOLEAN(abQueryDone;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlElem;1;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0asRolodex{$vlElem}:=Char(64+$vlElem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0abQueryDone{$vlElem}:=False\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0// \u30BF\u30D6\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3089\u3001\u5BFE\u5FDC\u3059\u308B\u30AF\u30A8\u30EA\u304C\u5B9F\u884C\u6E08\u307F\u304B\u3069\u3046\u304B\u8ABF\u3079\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not(abQueryDone{asRolodex}))\n\xa0\xa0// \u5B9F\u884C\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u3001\u6B21\u306E\u30AF\u30A8\u30EA\u7D50\u679C\u3092\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u683C\u7D0D\u3059\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into named selection;"temp")\n\xa0\xa0// \u30AF\u30A8\u30EA\u3092\u5B9F\u884C\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Phone Book];[Phone Book]Last name=asRolodex{asRolodex}+"@")\n\xa0\xa0// \u901A\u5E38\u306E\u30AF\u30A8\u30EA\u30E2\u30FC\u30C9\u306B\u623B\u3059\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into current selection)\n\xa0\xa0// \u691C\u7D22\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3059\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0USE NAMED SELECTION("temp")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0COPY NAMED SELECTION([Phone book];"Rolodex"+asRolodex{asRolodex})\n\xa0\xa0// \u6B21\u56DE\u540C\u3058\u30BF\u30D6\u304C\u9078\u629E\u3055\u308C\u305F\u6642\u306F\u3001\u30AF\u30A8\u30EA\u3092\u884C\u308F\u306A\u3044\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0abQueryDone{asRolodex}:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// \u9078\u629E\u3055\u308C\u305F\u6587\u5B57\u306B\u5BFE\u5FDC\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0USE NAMED SELECTION("Rolodex"+asRolodex{asRolodex})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0// \u30D5\u30A9\u30FC\u30E0\u3092\u9589\u3058\u308B\u969B\u306B\u306F\n\xa0\xa0// \u4F5C\u6210\u3055\u308C\u305F\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u30AF\u30EA\u30A2\u3059\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlElem;1;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(abQueryDone{$vlElem})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR NAMED SELECTION("Rolodex"+asRolodex{$vlElem})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// \u30D7\u30ED\u30BB\u30B9\u914D\u5217\u3092\u30AF\u30EA\u30A2\u3059\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asRolodex)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(abQueryDone)\n\xa0End case\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306E\u4F8B\u984C\u306EUnique values\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u4E2D\u306E\u4EFB\u610F\u306E\u6570\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5BFE\u3057\u3001\u91CD\u8907\u5024\u304C\u306A\u3044\u3053\u3068\u3092\u691C\u8A3C\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306F\u65B0\u898F\u3042\u308B\u3044\u306F\u65E2\u5B58\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0\xa0// Unique values \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n\xa0\xa0// Unique values ( \u30DD\u30A4\u30F3\u30BF; \u30DD\u30A4\u30F3\u30BF{ ; \u30DD\u30A4\u30F3\u30BF... } ) -> \u30D6\u30FC\u30EB\n\xa0\xa0// Unique values ( ->\u30C6\u30FC\u30D6\u30EB ; ->\u30D5\u30A3\u30FC\u30EB\u30C9 { ; ->\u30D5\u30A3\u30FC\u30EB\u30C92... } ) -> Yes or No\n\xa0\n\xa0var $0 : Boolean\n\xa0var ${1} : Pointer\n\xa0var $vlField;$vlNbFields;$vlFound;$vlCurrentRecord : Integer\n\xa0$vlNbFields:=Count parameters-1\n\xa0$vlCurrentRecord:=Record number($1->)\n\xa0If($vlNbFields>0)\n\xa0\xa0\xa0\xa0If($vlCurrentRecord#-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlCurrentRecord<0)\n\xa0\xa0// \u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306F\u307E\u3060\u4FDD\u5B58\u3055\u308C\u3066\u3044\u306A\u3044\u65B0\u898F\u30EC\u30B3\u30FC\u30C9 (\u30EC\u30B3\u30FC\u30C9\u756A\u53F7= -3);\n\xa0\xa0// \u306A\u306E\u3067\u3001\u5C11\u306A\u304F\u3068\u30821\u3064\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u898B\u3064\u304B\u308C\u3070\u691C\u7D22\u3092\u505C\u6B62\u3067\u304D\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY LIMIT(1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// \u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306F\u65E2\u5B58\u306E\u30EC\u30B3\u30FC\u30C9;\n\xa0\xa0// \u306A\u306E\u3067\u3001\u5C11\u306A\u304F\u3068\u30822\u3064\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u898B\u3064\u304B\u308C\u3070\u691C\u7D22\u3092\u505C\u6B62\u3067\u304D\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY LIMIT(2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// \u30AF\u30A8\u30EA\u306F\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3084\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u305B\u305A\u306B\n\xa0\xa0// $vlFound\u306B\u7D50\u679C\u3092\u8FD4\u3059\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into variable;$vlFound)\n\xa0\xa0// \u6307\u5B9A\u3057\u305F\u6570\u306E\uFFE5\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30AF\u30A8\u30EA\u3092\u884C\u3046\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNbFields=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;$2->=$2->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNbFields=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;$2->=$2->;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;&;$3->=$3->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;$2->=$2->;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlField;2;$vlNbFields-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;&;${1+$vlField}->=${1+$vlField}->;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;&;${1+$vlNbFields}->=${1+$vlNbFields}->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into current selection)\xa0// \u30AF\u30A8\u30EA\u30E2\u30FC\u30C9\u3092\u901A\u5E38\u306B\u623B\u3059\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY LIMIT(0)\xa0// \u30AF\u30A8\u30EA\u306E\u4E0A\u9650\u3092\u30AF\u30EA\u30A2\n\xa0\xa0// \u30AF\u30A8\u30EA\u7D50\u679C\u3092\u51E6\u7406\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlFound=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\xa0// \u91CD\u8907\u5024\u306F\u306A\u3044\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlFound=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlCurrentRecord<0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0// \u672A\u4FDD\u5B58\u306E\u65B0\u898F\u30EC\u30B3\u30FC\u30C9\u3068\u540C\u3058\u5024\u3092\u6301\u3064\u65E2\u5B58\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u898B\u3064\u3051\u305F\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\xa0// \u91CD\u8907\u5024\u306F\u898B\u3064\u304B\u3089\u306A\u304B\u3063\u305F\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlFound=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0// \u30B1\u30FC\u30B9\u306B\u95A2\u308F\u3089\u305A\u3001\u5024\u306F\u91CD\u8907\u3057\u3066\u3044\u308B\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(\u25CADebugOn)\xa0// Does not make sense; signal it if development version\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\xa0// WARNING! Unique values is called with NO current record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0// Can't guarantee the result\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0If(\u25CADebugOn)\xa0// Does not make sense; signal it if development version\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\xa0// WARNING! \u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306A\u3057\u3067\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0$0:=False\xa0// \u7D50\u679C\u306F\u4FDD\u8A3C\u3067\u304D\u306A\u3044\n\xa0End if\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304B\u3089\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0If(Unique values(->[Contacts];->[Contacts]Company);->[Contacts]Last name;->[Contacts]First name)\n\xa0\xa0// \u56FA\u6709\u306E\u5024\u3092\u6301\u3064\u305D\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u5BFE\u3057\u3066\u9069\u5207\u306A\u51E6\u7F6E\u3092\u3068\u308B\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("There is already a Contact with this name for this Company.")\n\xa0End if\n\xa0\xa0// ...\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/get-query-destination",children:"GET QUERY DESTINATION"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query",children:"QUERY"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-by-example",children:"QUERY BY EXAMPLE"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-by-formula",children:"QUERY BY FORMULA"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-by-sql",children:"QUERY BY SQL"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-selection",children:"QUERY SELECTION"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/query-with-array",children:"QUERY WITH ARRAY"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/set-query-limit",children:"SET QUERY LIMIT"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"396"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return t},a:function(){return i}});var d=s(667294);let r={},l=d.createContext(r);function i(n){let e=d.useContext(l);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),d.createElement(l.Provider,{value:e},n.children)}}}]);