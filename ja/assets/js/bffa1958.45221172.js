"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69720"],{671086:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>m,assets:()=>i,toc:()=>a,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/execute-formula","title":"EXECUTE FORMULA","description":"EXECUTE FORMULA ( statement )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/execute-formula.md","sourceDirName":"commands-legacy","slug":"/commands/execute-formula","permalink":"/docs/ja/commands/execute-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexecute-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"execute-formula","title":"EXECUTE FORMULA","slug":"/commands/execute-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EDIT FORMULA","permalink":"/docs/ja/commands/edit-formula"},"next":{"title":"Formula","permalink":"/docs/ja/commands/formula"}}'),r=s("785893"),d=s("250065");let c={id:"execute-formula",title:"EXECUTE FORMULA",slug:"/commands/execute-formula",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30E2\u30FC\u30C9\u3067\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u30AD\u30E3\u30C3\u30B7\u30E5",id:"\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30E2\u30FC\u30C9\u3067\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u30AD\u30E3\u30C3\u30B7\u30E5",level:5},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"EXECUTE FORMULA"})," ( ",(0,r.jsx)(n.em,{children:"statement"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statement"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u5B9F\u884C\u3059\u308B\u30B3\u30FC\u30C9"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"EXECUTE FORMULA"})," \u306F",(0,r.jsx)(n.em,{children:"statement"}),"\u3092\u30B3\u30FC\u30C9\u3068\u3057\u3066\u5B9F\u884C\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30E6\u30FC\u30B6\u30FC\u304C\u30D3\u30EB\u30C9\u30FB\u5909\u66F4\u53EF\u80FD\u306A\u5F0F\u3092\u8A55\u4FA1\u3059\u308B\u5834\u5408\u306B\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u60F3\u5B9A\u3057\u3066\u8A2D\u8A08\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u306E\u6587\u5B57\u5217\u306F\u5FC5\u305A1\u884C\u3060\u3051\u3067\u3059\u3002",(0,r.jsx)(n.em,{children:"statement"})," \u306B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001",(0,r.jsx)(n.strong,{children:"EXECUTE FORMULA"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002",(0,r.jsx)(n.em,{children:"statement"})," \u304C\u4E00\u884C\u306E\u30E1\u30BD\u30C3\u30C9\u3068\u3057\u3066\u5B9F\u884C\u3055\u308C\u308B\u304B\u304E\u308A\u3001\u305D\u308C\u306F\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3001\u3068\u3044\u3046\u306E\u304C\u5927\u539F\u5247\u3067\u3059\u3002",(0,r.jsx)(n.strong,{children:"EXECUTE FORMULA"})," \u306F\u5B9F\u884C\u901F\u5EA6\u3092\u4F4E\u4E0B\u3055\u305B\u308B\u306E\u3067\u3001\u4EE3\u66FF\u3048\u624B\u6BB5\u3068\u3057\u3066\u5229\u7528\u3057\u307E\u3059\u3002\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u304A\u3044\u3066\u3082\u3001\u305D\u306E\u30B3\u30FC\u30C9\u306F\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u3064\u307E\u308A",(0,r.jsx)(n.em,{children:"statement"}),"\u306F\u5B9F\u884C\u3055\u308C\u307E\u3059\u304C\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u6642\u306B\u30B3\u30F3\u30D1\u30A4\u30E9\u306B\u3088\u308B\u30C1\u30A7\u30C3\u30AF\u306F\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8:"})," \u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30E2\u30FC\u30C9\u3067\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u5B9F\u884C\u306F\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u4F7F\u7528\u3059\u308B\u4E8B\u306B\u3088\u3063\u3066\u6700\u9069\u5316\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059(\u4EE5\u4E0B\u306E",(0,r.jsx)(n.em,{children:"\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30E2\u30FC\u30C9\u3067\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u30AD\u30E3\u30C3\u30B7\u30E5"}),"\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"statement"})," \u306B\u306F\u4EE5\u4E0B\u3092\u306E\u8981\u7D20\u3092\u542B\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30D5\u30A1\u30F3\u30AF\u30B7\u30E7\u30F3(\u5024\u3092\u8FD4\u3059\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9)\u306E\u547C\u3073\u51FA\u3057"}),"\n",(0,r.jsx)(n.li,{children:"4D \u30B3\u30DE\u30F3\u30C9\u306E\u547C\u3073\u51FA\u3057"}),"\n",(0,r.jsx)(n.li,{children:"\u4EE3\u5165"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6CE8:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"statement"})," \u304C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u3042\u308B\u5834\u5408\u3001\u5F15\u6570\u3092\u6E21\u3059\u3053\u3068\u306E\u3067\u304D\u308B",(0,r.jsx)(n.a,{href:"/docs/ja/commands/execute-method",children:"EXECUTE METHOD"})," \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"statement"})," \u5185\u306B\u3066\u3001\u4F8B\u3048\u3070",(0,r.jsx)(n.a,{href:"c-date.md",children:"C_DATE"})," \u306E\u3088\u3046\u306A\u3001\u5909\u6570\u306E\u5BA3\u8A00\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u306F\u63A8\u5968\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u30B3\u30FC\u30C9\u5185\u3067\u885D\u7A81\u3092\u8D77\u3053\u3059\u53EF\u80FD\u6027\u304C\u3042\u308B\u305F\u3081\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306B\u306F\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u3068\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u3092\u542B\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3057\u304B\u3057",(0,r.jsx)(n.em,{children:"statement"}),"\u306F1\u884C\u3067\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u305F\u3081\u3001(",(0,r.jsx)(n.em,{children:"If"}),", While, \u306A\u3069\u306E) \u30D5\u30ED\u30FC\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3092\u542B\u3081\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528\u3059\u308B4D\u306E\u8A00\u8A9E\u3084\u30D0\u30FC\u30B8\u30E7\u30F3\u3084\u306B\u95A2\u308F\u3089\u305A\u3001",(0,r.jsx)(n.em,{children:"statement"})," \u304C\u6B63\u5E38\u306B\u8A55\u4FA1\u3055\u308C\u308B\u3068\u8A00\u3046\u4E8B\u3092\u4FDD\u8A3C\u3059\u308B\u305F\u3081\u306B\u306F\u3001\u7570\u306A\u308B\u30D0\u30FC\u30B8\u30E7\u30F3\u9593\u306B\u304A\u3044\u3066\u540D\u524D\u304C\u5909\u5316\u3059\u308B\u53EF\u80FD\u6027\u306E\u3042\u308B\u8981\u7D20(\u30B3\u30DE\u30F3\u30C9\u3001\u30C6\u30FC\u30D6\u30EB\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u5B9A\u6570)\u306B\u5BFE\u3057\u3066\u306F",(0,r.jsx)(n.em,{children:"\u30C8\u30FC\u30AF\u30F3"}),"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3059\u308B\u4E8B\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/current-time",children:"Current time"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u633F\u5165\u3059\u308B\u305F\u3081\u306B\u306F'",(0,r.jsx)(n.strong,{children:"Current time:C178"}),"'\u3068\u5165\u529B\u3057\u307E\u3059\u3002\u3053\u306E\u70B9\u306B\u3064\u3044\u3066\u306E\u3088\u308A\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,r.jsx)(n.em,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u5185\u3067\u306E\u30C8\u30FC\u30AF\u30F3\u306E\u4F7F\u7528"}),"\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h5,{id:"\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30E2\u30FC\u30C9\u3067\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u30AD\u30E3\u30C3\u30B7\u30E5",children:"\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30E2\u30FC\u30C9\u3067\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u30AD\u30E3\u30C3\u30B7\u30E5"}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u9069\u5316\u306E\u305F\u3081\u306B\u3001",(0,r.jsx)(n.strong,{children:"EXECUTE FORMULA"}),"\u306B\u3088\u3063\u3066\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30E2\u30FC\u30C9\u3067\u5B9F\u884C\u3055\u308C\u305F\u305D\u308C\u305E\u308C\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u3001\u30E1\u30E2\u30EA\u5185\u306E\u5C02\u7528\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u4FDD\u5B58\u3059\u308B\u4E8B\u304C\u53EF\u80FD\u3067\u3059\u3002\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u30C8\u30FC\u30AF\u30CA\u30A4\u30BA\u30C9\u3055\u308C\u305F\u5F62\u3067\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u307E\u3059\u3002\u4E00\u5EA6\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u4FDD\u5B58\u3055\u308C\u308B\u3068\u3001\u305D\u306E\u5F8C\u306E\u5B9F\u884C\u306F\u30C8\u30FC\u30AF\u30F3\u5316\u306E\u30B9\u30C6\u30C3\u30D7\u3092\u30B9\u30AD\u30C3\u30D7\u3059\u308B\u305F\u3081\u3001\u5927\u5E45\u306B\u6700\u9069\u5316\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30AD\u30E3\u30C3\u30B7\u30E5\u30B5\u30A4\u30BA\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u30BC\u30ED\u3067\u3059(\u30AD\u30E3\u30C3\u30B7\u30E5\u306A\u3057)\u3002",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u4F5C\u6210\u307E\u305F\u306F\u8ABF\u6574\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u4F8B\u3048\u3070:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET DATABASE PARAMETER(Number of formulas in cache;0)\xa0//\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306F\u306A\u3057\n\xa0SET DATABASE PARAMETER(Number of formulas in cache;3)\xa0//\u305D\u308C\u305E\u308C\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3044\u3066\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30923\u3064\u307E\u3067\u30AD\u30E3\u30C3\u30B7\u30E5\u53EF\u80FD\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"EXECUTE FORMULA"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3042\u308B\u3044\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u305F\u3068\u304D\u306E\u307F\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"4D\u30B3\u30DE\u30F3\u30C9\u3068\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u547C\u3073\u51FA\u3057\u3092\u542B\u3080\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u5B9F\u884C\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u8981\u7D20\u306F\u6539\u540D\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u305F\u3081\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u30C8\u30FC\u30AF\u30F3\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3059\u308B\u4E8B\u306B\u3088\u3063\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5C06\u6765\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u304A\u3044\u3066\u3082\u6B63\u5E38\u306A\u5B9F\u884C\u3092\u4FDD\u8A3C\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0EXECUTE FORMULA("Year of:C25 ([Products:5]Creation_Date:2])+$add")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/command-name",children:"Command name"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/edit-formula",children:"EDIT FORMULA"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var t=s(667294);let r={},d=t.createContext(r);function c(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);