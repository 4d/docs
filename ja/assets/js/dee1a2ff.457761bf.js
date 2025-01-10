"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69882"],{547053:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>c,metadata:()=>s,assets:()=>t,toc:()=>i,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/on-err-call","title":"ON ERR CALL","description":"ON ERR CALL ( errorMethod {; scope} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-err-call.md","sourceDirName":"commands-legacy","slug":"/commands/on-err-call","permalink":"/docs/ja/commands/on-err-call","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-err-call.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-err-call","title":"ON ERR CALL","slug":"/commands/on-err-call","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Method called on event","permalink":"/docs/ja/commands/method-called-on-event"},"next":{"title":"ON EVENT CALL","permalink":"/docs/ja/commands/on-event-call"}}'),d=r("785893"),l=r("250065");let c={id:"on-err-call",title:"ON ERR CALL",slug:"/commands/on-err-call",displayed_sidebar:"docs"},o=void 0,t={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ON ERR CALL"})," ( ",(0,d.jsx)(n.em,{children:"errorMethod"})," {; ",(0,d.jsx)(n.em,{children:"scope"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"errorMethod"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u5B9F\u884C\u3055\u308C\u308B\u30A8\u30E9\u30FC\u30E1\u30BD\u30C3\u30C9, \u307E\u305F\u306F \u7A7A\u306E\u6587\u5B57\u5217\u3067\u30A8\u30E9\u30FC\u306E\u30C8\u30E9\u30C3\u30D7\u505C\u6B62"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"scope"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30A8\u30E9\u30FC\u30E1\u30BD\u30C3\u30C9\u306E\u30B9\u30B3\u30FC\u30D7"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u6307\u5B9A\u3055\u308C\u305F\u5B9F\u884C\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3051\u308B\u30A8\u30E9\u30FC\u691C\u77E5\u7528\u306E\u30E1\u30BD\u30C3\u30C9\u3068\u3057\u3066 errorMethod \u3067\u6E21\u3057\u305F\u540D\u524D\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F",(0,d.jsx)(n.strong,{children:"\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9"}),"\u307E\u305F\u306F",(0,d.jsx)(n.strong,{children:"\u30A8\u30E9\u30FC\u30AD\u30E3\u30C3\u30C1\u30E1\u30BD\u30C3\u30C9"}),"\u3068\u547C\u3070\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3054\u3068\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u307E\u3059\u3002\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3068\u30DB\u30B9\u30C8\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u305D\u308C\u305E\u308C\u72EC\u81EA\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30E1\u30BD\u30C3\u30C9\u306E\u307F\u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u30A8\u30E9\u30FC\u51E6\u7406\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5F8C\u306F\u3001\u5B9A\u7FA9\u3055\u308C\u305F\u5B9F\u884C\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u5185\u306B\u304A\u3044\u30664D \u30E9\u30F3\u30B2\u30FC\u30B8\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u305F\u3073\u306B4D \u304C\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u306E",(0,d.jsx)(n.em,{children:"scope"})," \u5F15\u6570\u306F\u3001\u30A8\u30E9\u30FC\u304CerrorMethod \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u547C\u3073\u51FA\u3057\u3092\u30C8\u30EA\u30AC\u30FC\u3059\u308B\u5B9F\u884C\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306B\u306F\u30B3\u30DE\u30F3\u30C9\u306E\u30B9\u30B3\u30FC\u30D7\u306F\u30ED\u30FC\u30AB\u30EB\u306E\u5B9F\u884C\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3001\u3064\u307E\u308A\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u3067\u3059\u3002",(0,d.jsx)(n.em,{children:"scope"})," \u5F15\u6570\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u3065\u308C\u304B1\u3064\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(n.th,{children:"\u5024"}),(0,d.jsx)(n.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ek errors from components"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u767A\u751F\u3057\u305F\u30A8\u30E9\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ek global"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30B0\u30ED\u30FC\u30D0\u30EB\u5B9F\u884C\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u767A\u751F\u3057\u305F\u30A8\u30E9\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ek local"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsxs)(n.td,{children:["\u30ED\u30FC\u30AB\u30EB\u5B9F\u884C\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u767A\u751F\u3057\u305F\u30A8\u30E9\u30FC(",(0,d.jsx)(n.em,{children:"scope"})," \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306E\u30C7\u30D5\u30A9\u30EB\u30C8)"]})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"scope"})," = ek local (\u307E\u305F\u306F",(0,d.jsx)(n.em,{children:"scope"})," \u5F15\u6570\u304C\u7701\u7565)\u306E\u5834\u5408\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u767A\u751F\u3057\u305F\u30A8\u30E9\u30FC\u306E\u307F\u304CerrorMethod \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u30021\u3064\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3064\u304D1\u3064\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u304C\u3001\u7570\u306A\u308B\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3066\u306F\u7570\u306A\u308B\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"scope"})," = ek global \u306E\u5834\u5408\u3001\u30D7\u30ED\u30BB\u30B9\u306B\u95A2\u4FC2\u306A\u304F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u767A\u751F\u3057\u305F\u5168\u3066\u306E\u30A8\u30E9\u30FC\u304CerrorMethod \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059(\u305F\u3060\u3057\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u306E\u30D7\u30ED\u30BB\u30B9\u306F\u9664\u304F)\u3002\u305F\u3060\u3057\u3001ek local \u30A8\u30E9\u30FC\u51E6\u7406\u304C\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306B\u306F\u3001ek global \u30A8\u30E9\u30FC\u51E6\u7406\u306F\u547C\u3073\u51FA\u3055\u308C\u306A\u3044\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002",(0,d.jsx)(n.br,{}),"\n\u307E\u305F\u30B0\u30ED\u30FC\u30D0\u30EB\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306F\u30B5\u30FC\u30D0\u30FC\u5074\u3067\u3082\u6709\u52B9\u3067\u3042\u308A\u3001\u3053\u308C\u3092\u4F7F\u7528\u3057\u3066\u30B5\u30FC\u30D0\u30FC\u5074\u306E\u95A2\u6570\u5185\u306E\u30A8\u30E9\u30FC\u3092\u51E6\u7406\u3059\u308B\u306E\u306B\u4F7F\u7528\u3067\u304D\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"scope"})," = ek errors from components \u306E\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u767A\u751F\u3057\u305F\u30A8\u30E9\u30FC\u306E\u307F\u304CerrorMethod \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u90E8\u3067\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u306E\u30E1\u30BD\u30C3\u30C9\u306E\u65B9\u304C\u547C\u3073\u51FA\u3055\u308C\u3001\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5074\u3067\u8A2D\u5B9A\u3055\u308C\u305Fek errors from components \u30A8\u30E9\u30FC\u51E6\u7406\u306F\u547C\u3073\u51FA\u3055\u308C\u306A\u3044\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8\u610F:"})," \u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u3067\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30FB\u30D7\u30ED\u30BB\u30B9\u304B\u3089 ",(0,d.jsx)(n.strong,{children:"ON ERR CALL"})," \u3092\u30B3\u30FC\u30EB\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30B3\u30F3\u30D1\u30A4\u30E9\u30FC\u306F ",(0,d.jsx)(n.em,{children:"errorMethod"})," \u304C\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u304B\u3069\u3046\u304B\u3092\u78BA\u8A8D\u3057\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30FB\u30E2\u30FC\u30C9\u306B\u9069\u5FDC\u3057\u3066\u3044\u306A\u3044\u3068\u5224\u65AD\u3059\u308C\u3070\u30A8\u30E9\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,d.jsx)(n.em,{children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D64D\u30D7\u30ED\u30BB\u30B9"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30A8\u30E9\u30FC\u306E\u691C\u77E5\u3092\u4E2D\u6B62\u3059\u308B\u306B\u306F\u3001",(0,d.jsx)(n.em,{children:"scope"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u3044\u30B9\u30B3\u30FC\u30D7(\u3042\u308C\u3070)\u3092\u6307\u5B9A\u3057\u3001",(0,d.jsx)(n.em,{children:"errorMethod"})," \u306B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u3066\u518D\u5EA6",(0,d.jsx)(n.strong,{children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u3060\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30A8\u30E9\u30FC\u306F\u30B7\u30B9\u30C6\u30E0\u5909\u6570Error \u306E\u5024\u3067\u5224\u5225\u3057\u307E\u3059\u3002\u3053\u306E\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B\u306F\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9\u304C\u7D0D\u3081\u3089\u308C\u307E\u3059\u3002\u3053\u306E\u30DE\u30CB\u30E5\u30A2\u30EB\u306E\u4ED8\u9332\u306B ",(0,d.jsx)(n.em,{children:"\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9"})," \u304C\u8A18\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u8A73\u7D30\u306F*\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC (1 -> 81)*\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30B7\u30B9\u30C6\u30E0\u5909\u6570Error \u306E\u5024\u306F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u5185\u306E\u307F\u3067\u6709\u52B9\u3067\u3059\u3002\u30A8\u30E9\u30FC\u306E\u539F\u56E0\u3068\u306A\u3063\u305F\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u3053\u306E\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9\u304C\u5FC5\u8981\u3067\u3042\u308C\u3070\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570Error \u3092\u72EC\u81EA\u306E\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306B\u30B3\u30D4\u30FC\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u307E\u305FError method \u3001Error line\u3068Error formula \u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B\u306F\u305D\u308C\u305E\u308C\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u540D\u524D\u3068\u305D\u306E\u884C\u756A\u53F7\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u30C6\u30AD\u30B9\u30C8\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059 (",(0,d.jsx)(n.a,{href:"https://developer.4d.com/docs/ja/Concepts/error-handling/#%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E5%86%85%E3%81%A7%E3%81%AE%E3%82%A8%E3%83%A9%E3%83%BC%E5%87%A6%E7%90%86",children:"\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u306E\u30A8\u30E9\u30FC\u51E6\u7406"})," \u53C2\u7167)\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/last-errors",children:"Last errors"})," \u307E\u305F\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/commands/last-errors",children:"Last errors"}),'  \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u4E8B\u3067\u5272\u308A\u8FBC\u307F\u306E\u767A\u751F\u6E90\u306E\u30A8\u30E9\u30FC\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9(\u4F8B\u3048\u3070\u30A8\u30E9\u30FC"\u30B9\u30BF\u30C3\u30AF"\u306A\u3069)\u3092\u53D6\u5F97\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002']}),"\n",(0,d.jsx)(n.p,{children:"\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306F\u9069\u5207\u306A\u65B9\u6CD5\u3067\u30A8\u30E9\u30FC\u3092\u7BA1\u7406\u3001\u307E\u305F\u306F\u30E6\u30FC\u30B6\u306B\u5BFE\u3057\u3066\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u30A8\u30E9\u30FC\u306F\u4EE5\u4E0B\u3067\u5B9F\u884C\u3055\u308C\u305F\u30D7\u30ED\u30BB\u30B9\u4E2D\u306B\u751F\u6210\u3055\u308C\u307E\u3059:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A8\u30F3\u30B8\u30F3: \u4F8B\u3048\u3070\u30EC\u30B3\u30FC\u30C9\u306E\u4FDD\u5B58\u304C\u30C8\u30EA\u30AC\u30FC\u30EB\u30FC\u30EB\u306B\u9055\u53CD\u3059\u308B\u5834\u5408\u3002"}),"\n",(0,d.jsx)(n.li,{children:"4D\u74B0\u5883: \u4F8B\u3048\u3070\u914D\u5217\u306B\u5272\u308A\u5F53\u3066\u308B\u305F\u3081\u306B\u5341\u5206\u306A\u30E1\u30E2\u30EA\u304C\u306A\u3044\u5834\u5408\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u7A3C\u50CD\u3057\u3066\u3044\u308BOS: \u4F8B\u3048\u3070\u30C7\u30A3\u30B9\u30AF\u306B\u7A7A\u304D\u304C\u306A\u304B\u3063\u305F\u308A\u3001I/O\u30A8\u30E9\u30FC\u306E\u5834\u5408\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5B9F\u884C\u3092\u4E2D\u65AD\u3059\u308B\u306B\u306F\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/commands/abort",children:"ABORT"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067",(0,d.jsx)(n.a,{href:"/docs/ja/commands/abort",children:"ABORT"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u30014D\u306F\u5272\u308A\u8FBC\u307F\u3092\u304B\u3051\u305F\u30E1\u30BD\u30C3\u30C9\u306B\u5236\u5FA1\u3092\u623B\u3057\u3001\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u884C\u3092\u7D9A\u3051\u307E\u3059\u3002\u30A8\u30E9\u30FC\u3092\u30EA\u30AB\u30D0\u30FC\u3067\u304D\u306A\u3044\u3068\u304D\u306B",(0,d.jsx)(n.a,{href:"/docs/ja/commands/abort",children:"ABORT"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u81EA\u4F53\u3067\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u306F\u30014D\u304C\u30A8\u30E9\u30FC\u7BA1\u7406\u3092\u5F15\u304D\u7D99\u304E\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u306A\u3044\u3088\u3046\u306B\u5341\u5206\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u307E\u305F\u3001\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u306F",(0,d.jsx)(n.strong,{children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ON ERR CALL"})," \u306F\u901A\u5E38On startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u3001\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30A8\u30E9\u30FC\u3092\u51E6\u7406\u3057\u307E\u3059\u3002\u307E\u305F",(0,d.jsx)(n.strong,{children:"ON ERR CALL"})," \u306F\u30E1\u30BD\u30C3\u30C9\u306E\u958B\u59CB\u6642\u306B\u7F6E\u304B\u308C\u3066\u3001\u305D\u306E\u30E1\u30BD\u30C3\u30C9\u7279\u6709\u306E\u30A8\u30E9\u30FC\u3092\u51E6\u7406\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsxs)(n.p,{children:["\u30B0\u30ED\u30FC\u30D0\u30EB\u306A\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u3001\u4F8B\u3048\u3070",(0,d.jsx)(n.strong,{children:"On Startup"})," \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3067\u5B9A\u7FA9\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0ON ERR CALL("myGlobalErrorHandler";ek global)\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(n.p,{children:"\u6B21\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u5F15\u6570\u3067\u6E21\u3055\u308C\u305F\u540D\u524D\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u4F5C\u6210\u3067\u304D\u306A\u3044\u5834\u5408\u3001\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F0\u307E\u305F\u306F\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9\u3092\u8FD4\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Create doc \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n\xa0\xa0// Create doc ( \u6587\u5B57\u5217 ; \u30DD\u30A4\u30F3\u30BF) -> \u500D\u9577\u6574\u6570\n\xa0\xa0// Create doc ( DocName ; ->DocRef ) -> Error code result\n\xa0\n\xa0gError:=0\n\xa0ON ERR CALL("IO ERROR HANDLER")\n\xa0$2->:=Create document($1)\n\xa0ON ERR CALL("")\n\xa0$0:=gError\n'})}),"\n",(0,d.jsx)(n.p,{children:"IO ERROR HANDLER\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// IO ERROR HANDLER project method\n\xa0gError:=Error\xa0// \u30A8\u30E9\u30FC\u30B3\u30FC\u30C9\u3092\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306B\u30B3\u30D4\u30FC\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u73FE\u5728\u5B9F\u884C\u4E2D\u306E\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9\u306E\u7D50\u679C\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306B\u3001\u30D7\u30ED\u30BB\u30B9\u5909\u6570",(0,d.jsx)(n.em,{children:"gError"}),"\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u3053\u308C\u3089\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4F5C\u6210\u3057\u305F\u3089\u3001\u6B21\u306E\u3088\u3046\u306A\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0var vhDocRef : Time\n\xa0$vlErrCode:=Create doc($vsDocumentName;->vhDocRef)\n\xa0If($vlErrCode=0)\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vlErrCode)\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u4F5C\u6210\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F, I/O error "+String($vlErrCode))\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsxs)(n.p,{children:["\u8907\u96D1\u306A\u4E00\u9023\u306E\u51E6\u7406\u3092\u5B9F\u88C5\u4E2D\u306B\u3001\u5404\u7A2E\u30B5\u30D6\u30EB\u30FC\u30C1\u30F3\u3067\u7570\u306A\u308B\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u304C\u5FC5\u8981\u3068\u306A\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002\u30D7\u30ED\u30BB\u30B9\u3054\u3068\u306B\u3044\u3061\u3069\u306B1\u3064\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3057\u304B\u6301\u3064\u3053\u3068\u304C\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u6B21\u306E2\u901A\u308A\u306E\u65B9\u6CD5\u304B\u3089\u5BFE\u5FDC\u7B56\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059:",(0,d.jsx)(n.br,{}),"\n- ON ERR CALL\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u305F\u3073\u306B\u73FE\u5728\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u4FDD\u6301\u3059\u308B\u3002\u307E\u305F\u306F",(0,d.jsx)(n.br,{}),"\n- \u30D7\u30ED\u30BB\u30B9\u914D\u5217\u5909\u6570\u3092\u4F7F\u7528\u3057\uFF08\u3053\u306E\u4F8B\u3067\u306F",(0,d.jsx)(n.em,{children:"asErrorMethod"}),"\uFF09\u3001\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3068\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\uFF08\u3053\u306E\u4F8B\u3067\u306FON ERROR CALL\uFF09\u3092\u201C\u7A4D\u307F\u4E0A\u3052\u201D\u3066\u3001\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3068\u30AF\u30EA\u30A2\u3092\u884C\u3046\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u30D7\u30ED\u30BB\u30B9\u306E\u5B9F\u884C\u3092\u958B\u59CB\u3059\u308B\u6642\u70B9\u3067\u914D\u5217\u3092\u521D\u671F\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// \u30D7\u30ED\u30BB\u30B9\u30E1\u30BD\u30C3\u30C9\u306E\u6700\u521D\u306B\u914D\u5217\u306E\u521D\u671F\u5316\u3092\u3059\u308B\u306E\u3092\u5FD8\u308C\u306A\u3044\u3088\u3046\u306B\u3002\n\xa0ARRAY STRING(63;asErrorMethod;0)\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u308C\u306F\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3057\u305FON ERROR CALL\u30E1\u30BD\u30C3\u30C9\u3067\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ON ERROR CALL project method\n\xa0\xa0// ON ERROR CALL { ( \u6587\u5B57\u5217 ) }\n\xa0\xa0// ON ERROR CALL { ( Method Name ) }\n\xa0\n\xa0C_STRING(63;$1;$ErrorMethod)\n\xa0var $vlElem : Integer\n\xa0\n\xa0If(Count parameters>0)\n\xa0\xa0\xa0\xa0$ErrorMethod:=$1\n\xa0Else\n\xa0\xa0\xa0\xa0$ErrorMethod:=""\n\xa0End if\n\xa0\n\xa0If($ErrorMethod#"")\n\xa0\xa0\xa0\xa0var gError : Integer\n\xa0\xa0\xa0\xa0gError:=0\n\xa0\xa0\xa0\xa0$vlElem:=1+Size of array(asErrorMethod)\n\xa0\xa0\xa0\xa0INSERT IN ARRAY(asErrorMethod;$vlElem)\n\xa0\xa0\xa0\xa0asErrorMethod{$vlElem}:=$1\n\xa0\xa0\xa0\xa0ON ERR CALL($1)\n\xa0Else\n\xa0\xa0\xa0\xa0ON ERR CALL("")\n\xa0\xa0\xa0\xa0$vlElem:=Size of array(asErrorMethod)\n\xa0\xa0\xa0\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(asErrorMethod;$vlElem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlElem>1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ON ERR CALL(asErrorMethod{$vlElem-1})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u6B21\u306E\u3088\u3046\u306B\u547C\u3073\u51FA\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0gError:=0\n\xa0ON ERROR CALL("IO ERRORS")\xa0// IO ERRORS \u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\n\xa0\xa0// ...\n\xa0ON ERROR CALL("ALL ERRORS")\xa0// ALL ERRORS \u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\n\xa0\xa0// ...\n\xa0ON ERROR CALL\xa0// ALL ERRORS \u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u30A2\u30F3\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u3001IO ERRORS\u3092\u518D\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\n\xa0\xa0// ...\n\xa0ON ERROR CALL\xa0// IO ERRORS \u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u30A2\u30F3\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\n\xa0\xa0// ...\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,d.jsx)(n.p,{children:"\u6B21\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306F\u30E6\u30FC\u30B6\u306B\u3088\u308B\u5272\u308A\u8FBC\u307F\u3092\u7121\u8996\u3057\u3001\u30A8\u30E9\u30FC\u30C6\u30AD\u30B9\u30C8\u3092\u8868\u793A\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Show_errors_only \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n\xa0If(Error#1006)\xa0//\u3053\u308C\u306F\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u308B\u5272\u308A\u8FBC\u307F\u3067\u306F\u306A\u3044\n\xa0\xa0\xa0\xa0ALERT("\u30A8\u30E9\u30FC "+String(Error)+" \u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u554F\u984C\u3068\u306A\u3063\u305F\u30B3\u30FC\u30C9\u306F\u3053\u3061\u3089\u3067\u3059: \\""+Error formula+"\\"")\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/abort",children:"ABORT"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"Error Handler"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/last-errors",children:"Last errors"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/last-errors",children:"Last errors"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/method-called-on-error",children:"Method called on error"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"155"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return c}});var s=r(667294);let d={},l=s.createContext(d);function c(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);