"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7068"],{950416:function(n,e,t){t.r(e),t.d(e,{default:()=>j,frontMatter:()=>r,metadata:()=>d,assets:()=>l,toc:()=>h,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/action-info","title":"Action info","description":"Action info ( action {; target} ) : Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/action-info.md","sourceDirName":"commands-legacy","slug":"/commands/action-info","permalink":"/docs/ja/20-R7/commands/action-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Faction-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"action-info","title":"Action info","slug":"/commands/action-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"4D","permalink":"/docs/ja/20-R7/commands/4d"},"next":{"title":"Call chain","permalink":"/docs/ja/20-R7/commands/call-chain"}}'),s=t("785893"),i=t("250065");let r={id:"action-info",title:"Action info",slug:"/commands/action-info",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Action info"})," ( ",(0,s.jsx)(e.em,{children:"action"})," {; ",(0,s.jsx)(e.em,{children:"target"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"action"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u540D\u3001\u3042\u308B\u3044\u306F(\u5FC5\u8981\u3067\u3042\u308C\u3070)\u5F15\u6570\u3092\u542B\u3081\u305F\u30D1\u30BF\u30FC\u30F3"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"target"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u60C5\u5831\u3092\u53D6\u5F97\u3059\u308B\u30BF\u30FC\u30B2\u30C3\u30C8\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002\u30E1\u30A4\u30F3\u30D5\u30A9\u30FC\u30E0\u3042\u308B\u3044\u306F\u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30FC\u30E0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u8868\u3057\u305F\u30D6\u30FC\u30EB\u578B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u683C\u7D0D\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8: isEnabled\u3001isVisible\u3001isChecked\u3001isMixed\u3001isUnknownState"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Action info"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u5FDC\u3058\u3066\u3001",(0,s.jsx)(e.em,{children:"target"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30BF\u30FC\u30B2\u30C3\u30C8\u5185\u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B",(0,s.jsx)(e.em,{children:"action"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u3001\u5229\u7528\u53EF\u80FD\u72B6\u6CC1\u3084\u30B9\u30C6\u30FC\u30BF\u30B9\u306A\u3069\u3092\u542B\u3080\u69D8\u3005\u306A\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u3002\u5F15\u6570\u306B\u306F\u3001\u30C1\u30A7\u30C3\u30AF\u3057\u305F\u3044\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002\u6587\u5B57\u5217\u3042\u308B\u3044\u306F",(0,s.jsx)(e.em,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3"})," \u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u8A73\u7D30\u30EA\u30B9\u30C8\u306F4D",(0,s.jsx)(e.em,{children:"\u30C7\u30B6\u30A4\u30F3\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"}),"\u30DE\u30CB\u30E5\u30A2\u30EB\u306E",(0,s.jsx)(e.em,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3"})," \u306E\u7AE0\u306B\u3066\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6CE8:"})," 4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u5BFE\u3057\u3066\u306F\u3001\u7279\u5B9A\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u3089\u306B\u3064\u3044\u3066\u306F\u30014D Write Pro \u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u30DE\u30CB\u30E5\u30A2\u30EB\u5185\u306E",(0,s.jsx)(e.em,{children:"4D Write Pro\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u4F7F\u7528"})," \u306E\u7AE0\u306B\u8A73\u7D30\u306A\u8AAC\u660E\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"target"})," \u5F15\u6570\u306B\u306F\u3001",(0,s.jsx)(e.em,{children:"action"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3057\u305F\u3044\u30D5\u30A9\u30FC\u30E0\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u3042\u308C\u3070\u3001\u305D\u308C\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,s.jsx)(e.em,{children:"\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3"}),"\u30C6\u30FC\u30DE\u306E\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3046\u3061\u3069\u308C\u304B\u4E00\u3064\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u5024"}),(0,s.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ak current form"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30FC\u30E0\u306F\u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30E0\u3067\u3059\u3002\u30E1\u30A4\u30F3\u30D5\u30A9\u30FC\u30E0\u3001\u3042\u308B\u3044\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30A4\u30F3\u30D5\u30A9\u30FC\u30E0\u306E\u524D\u9762\u306B\u3042\u308B\u30D1\u30EC\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u3069\u3061\u3089\u304B\u3067\u3059\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ak main form"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"\u30E1\u30A4\u30F3\u30D5\u30A9\u30FC\u30E0\u3068\u306F\u6700\u524D\u9762\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3042\u308B\u3044\u306F\u30D7\u30ED\u30BB\u30B9\u306E\u30C0\u30A4\u30A2\u30ED\u30B0\u30D5\u30A9\u30FC\u30E0\u3067\u3042\u308A\u3001\u30D5\u30ED\u30FC\u30C8\u30A6\u30A3\u30F3\u30C9\u30A6\u3084\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u30A6\u30A3\u30F3\u30C9\u30A6\u306A\u3069\u306F\u9664\u304D\u307E\u3059\u3002"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6CE8:"})," ",(0,s.jsx)(e.em,{children:"target"})," \u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306Fak current form \u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Action info"})," \u30B3\u30DE\u30F3\u30C9\u306F\u60C5\u5831\u3092\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u542B\u3080\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u8FD4\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u578B"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"\u8A73\u7D30"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"enabled"}),(0,s.jsx)(e.td,{children:"\u30D6\u30FC\u30EB"}),(0,s.jsx)(e.td,{children:"\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u547C\u3073\u51FA\u3057\u53EF\u80FD\u3067\u3042\u308C\u3070true\u3001\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306B\u306Ffalse"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"status"}),(0,s.jsx)(e.td,{children:"\u6587\u5B57\u5217"}),(0,s.jsxs)(e.td,{children:["\u6B21\u306E\u3069\u308C\u304B\u306E\u6587\u5B57\u5217\u304C\u5024\u3068\u3057\u3066\u8FD4\u3055\u308C\u307E\u3059:",(0,s.jsx)(e.table,{children:(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:'"checked"'}),(0,s.jsx)(e.td,{children:'\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u3001\u3064\u307E\u308A\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3068\u3044\u3046\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002\u4F8B: \u9078\u629E\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u304C\u592A\u5B57\u3067\u3042\u308C\u3070\u3001ak font bold \u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u306E"status"\u30D7\u30ED\u30D1\u30C6\u30A3\u306F"checked"\u306B\u306A\u308A\u307E\u3059\u3002'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:'"unchecked"'}),(0,s.jsx)(e.td,{children:'\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u306A\u3044\u3001\u3064\u307E\u308A\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u3068\u3044\u3046\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002\u4F8B: \u9078\u629E\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u304C\u592A\u5B57\u3067\u306F\u306A\u3044\u5834\u5408\u3001ak font bold \u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u306E"status"\u30D7\u30ED\u30D1\u30C6\u30A3\u306F"unchecked"\u306B\u306A\u308A\u307E\u3059\u3002'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:'"mixed"'}),(0,s.jsx)(e.td,{children:'\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u30DF\u30C3\u30AF\u30B9\u3055\u308C\u3066\u3044\u308B\u3001\u3064\u307E\u308A\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u90E8\u5206\u7684\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3068\u3044\u3046\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002\u4F8B: \u9078\u629E\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u306E\u4E00\u90E8\u304C\u592A\u5B57\u306E\u5834\u5408\u3001 ak font bold \u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u306E"status"\u30D7\u30ED\u30D1\u30C6\u30A3\u306F"mixed"\u306B\u306A\u308A\u307E\u3059\u3002'})]})]})})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"title"}),(0,s.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8"}),(0,s.jsx)(e.td,{children:'\u30AB\u30EC\u30F3\u30C8\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u30E9\u30D9\u30EB\u306E\u7FFB\u8A33\u3055\u308C\u305F\u540D\u524D\u304C\u5165\u308A\u307E\u3059\u3002\u4F8B: \u82F1\u8A9E\u7248\u3067\u306F"Undo"\u3001"Paste"\u3001\u306A\u3069\u306B\u306A\u308A\u307E\u3059\u3002'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"visible"}),(0,s.jsx)(e.td,{children:"\u30D6\u30FC\u30EB"}),(0,s.jsx)(e.td,{children:"\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u30D5\u30A9\u30FC\u30E0\u5185\u3067\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306Ftrue\u306B\u306A\u308A\u307E\u3059\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"value"}),(0,s.jsx)(e.td,{children:"\u6587\u5B57\u5217"}),(0,s.jsxs)(e.td,{children:['\u30A2\u30AF\u30B7\u30E7\u30F3\u5F15\u6570\u306E\u6587\u5B57\u5217\u306E\u30AB\u30EC\u30F3\u30C8\u306E\u5024(\u3042\u308C\u3070)\u3002\u4F8B\u3048\u3070\u3001\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u304C"fontSize?value=10pt"\u3067\u3042\u308B\u3068\u304D\u3001',(0,s.jsx)(e.em,{children:"value"}),' \u30D7\u30ED\u30D1\u30C6\u30A3\u306F"10pt"\u3068\u306A\u308A\u307E\u3059\u3002']})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u304C\u6C7A\u307E\u3089\u306A\u3044\u5834\u5408(\u4F8B\u3048\u3070\u3069\u306E\u3088\u3046\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3084\u30E1\u30CB\u30E5\u30FC\u30B3\u30DE\u30F3\u30C9\u306B\u3082\u5F71\u97FF\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408)\u3001\u30B3\u30DE\u30F3\u30C9\u306Fnull\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8(\u672A\u5B9A\u7FA9)\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(e.p,{children:"\u30B3\u30D4\u30FC\u306E\u6A19\u6E96\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u5229\u7528\u53EF\u80FD\u304B\u3069\u3046\u304B\u3092\u8ABF\u3079\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059(\u3064\u307E\u308A\u4F55\u304B\u30C7\u30FC\u30BF\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u3092\u8ABF\u3079\u307E\u3059):"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0var $actionInfo : Object\n\xa0var $isEnabled : Boolean\n\xa0$actionInfo:=Action info(ak copy)\n\xa0If(Not(Undefined($actionInfo.enabled)))\xa0//\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\n\xa0\xa0\xa0\xa0If(OB Get($actionInfo;"enabled"))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0//\u30B3\u30D4\u30FC\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u5229\u7528\u53EF\u80FD\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/ja/20-R7/commands/invoke-action",children:"INVOKE ACTION"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})]}),"\n",(0,s.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(e.td,{children:"1442"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return r}});var d=t(667294);let s={},i=d.createContext(s);function r(n){let e=d.useContext(i);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);