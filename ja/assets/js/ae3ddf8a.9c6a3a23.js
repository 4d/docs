"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9719"],{682753:function(n,e,s){s.r(e),s.d(e,{default:()=>a,frontMatter:()=>i,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/on-event-call","title":"ON EVENT CALL","description":"ON EVENT CALL ( eventMethod {; processName} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-event-call.md","sourceDirName":"commands-legacy","slug":"/commands/on-event-call","permalink":"/docs/ja/commands/on-event-call","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-event-call.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-event-call","title":"ON EVENT CALL","slug":"/commands/on-event-call","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ON ERR CALL","permalink":"/docs/ja/commands/on-err-call"},"next":{"title":"SET ASSERT ENABLED","permalink":"/docs/ja/commands/set-assert-enabled"}}'),r=s("785893"),t=s("250065");let i={id:"on-event-call",title:"ON EVENT CALL",slug:"/commands/on-event-call",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"ON EVENT CALL"})," ( ",(0,r.jsx)(e.em,{children:"eventMethod"})," {; ",(0,r.jsx)(e.em,{children:"processName"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"eventMethod"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u767A\u52D5\u3055\u308C\u308B\u30A4\u30D9\u30F3\u30C8\u30E1\u30BD\u30C3\u30C9, \u307E\u305F\u306F \u7A7A\u306E\u6587\u5B57\u306E\u5834\u5408\u30A4\u30D9\u30F3\u30C8\u306E\u906E\u65AD\u3092\u505C\u6B62"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"processName"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30D7\u30ED\u30BB\u30B9\u540D"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"ON EVENT CALL"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30A4\u30D9\u30F3\u30C8\u3092\u691C\u77E5\u3059\u308B\u30E1\u30BD\u30C3\u30C9\u3067\u3042\u308B",(0,r.jsx)(e.em,{children:"eventMethod"}),"\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001",(0,r.jsx)(e.strong,{children:"\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9"}),"\u307E\u305F\u306F",(0,r.jsx)(e.strong,{children:"\u30A4\u30D9\u30F3\u30C8\u30AD\u30E3\u30C3\u30C1\u30E1\u30BD\u30C3\u30C9"}),"\u3068\u547C\u3070\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Tip:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u4F7F\u7528\u306B\u306F\u3001\u4E0A\u7D1A\u306E\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u77E5\u8B58\u304C\u5FC5\u8981\u3067\u3059\u3002\u901A\u5E38\u3001\u30A4\u30D9\u30F3\u30C8\u3092\u7528\u3044\u3066\u4F5C\u696D\u3092\u5B9F\u884C\u3059\u308B\u969B\u306B\u3001",(0,r.jsx)(e.strong,{children:"ON EVENT CALL"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u30D5\u30A9\u30FC\u30E0\u306E\u4F7F\u7528\u306B\u304A\u3044\u3066\u3001\u30A4\u30D9\u30F3\u30C8\u306F4D\u306B\u3088\u3063\u3066\u7BA1\u7406\u3055\u308C\u3001\u9069\u5207\u306A\u30D5\u30A9\u30FC\u30E0\u3084\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u30A4\u30D9\u30F3\u30C8\u304C\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Tip:"})," ",(0,r.jsx)(e.a,{href:"/docs/ja/commands/mouse-position",children:"MOUSE POSITION"}),"\u3084",(0,r.jsx)(e.a,{href:"/docs/ja/commands/shift-down",children:"Shift down"}),"\u7B49\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30A4\u30D9\u30F3\u30C8\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u30B3\u30FC\u30EB\u3057\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u95A2\u9023\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u306B\u3064\u3044\u3066\u306E\u5FC5\u8981\u306A\u60C5\u5831\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u3001",(0,r.jsx)(e.strong,{children:"ON EVENT CALL"})," \u30B3\u30DE\u30F3\u30C9\u3092\u3082\u3068\u306B\u3057\u305F\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u4F5C\u6210\u3059\u308B\u5FC5\u8981\u304C\u306A\u304F\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u30B9\u30B3\u30FC\u30D7\u306F\u3001\u73FE\u5728\u306E\u4F5C\u696D\u30BB\u30C3\u30B7\u30E7\u30F3\u3067\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001\u5225\u3005\u306E\u30ED\u30FC\u30AB\u30EB\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u30E1\u30BD\u30C3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002\u3044\u3061\u3069\u306B1\u3064\u306E\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3060\u3051\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u30E1\u30BD\u30C3\u30C9\u3092\u7528\u3044\u305F\u30A4\u30D9\u30F3\u30C8\u306E\u691C\u77E5\u3092\u4E2D\u6B62\u3059\u308B\u306B\u306F\u3001",(0,r.jsx)(e.em,{children:"eventMethod"}),"\u306B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u3066\u518D\u5EA6",(0,r.jsx)(e.strong,{children:"ON EVENT CALL"})," \u30B3\u30DE\u30F3\u30C9\u3092\u30B3\u30FC\u30EB\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u30A4\u30D9\u30F3\u30C8\u7BA1\u7406\u30E1\u30BD\u30C3\u30C9\u306F\u5225\u30D7\u30ED\u30BB\u30B9\u3068\u3057\u3066\u5B9F\u884C\u3055\u308C\u308B\u305F\u3081\u30014D\u30E1\u30BD\u30C3\u30C9\u304C1\u3064\u3082\u5B9F\u884C\u3055\u308C\u306A\u304F\u3066\u3082\u3001\u5E38\u306B\u30A2\u30AF\u30C6\u30A3\u30D6\u306B\u306A\u308A\u307E\u3059\u3002\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5F8C\u306F\u30A4\u30D9 \u30F3\u30C8\u304C\u767A\u751F\u3059\u308B\u305F\u3073\u306B4D\u304C\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002\u7BA1\u7406\u3067\u304D\u308B\u30A4\u30D9\u30F3\u30C8\u306F\u3001\u30DE\u30A6\u30B9\u30DC\u30BF\u30F3\u306E\u30AF\u30EA\u30C3\u30AF\u3068\u30AD\u30FC\u30DC\u30FC\u30C9\u304B\u3089\u306E\u5165\u529B\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,r.jsx)(e.em,{children:"processName"}),"\u5F15\u6570\u306F\u3001",(0,r.jsx)(e.strong,{children:"ON EVENT CALL"})," \u30B3\u30DE\u30F3\u30C9\u3067\u4F5C\u6210\u3055\u308C\u308B\u30D7\u30ED\u30BB\u30B9\u306E\u540D\u524D\u3067\u3059\u3002",(0,r.jsx)(e.em,{children:"processName"}),"\u306E\u5148\u982D\u306B\u30C9\u30EB\u8A18\u53F7 ($) \u3092\u4ED8\u3051\u308B\u3068\u30ED\u30FC\u30AB\u30EB\u30D7\u30ED\u30BB\u30B9\u304C\u958B\u59CB\u3055\u308C\u307E\u3059\u3002\u901A\u5E38\u306F\u3053\u306E\u30ED\u30FC\u30AB\u30EB\u30D7\u30ED\u30BB\u30B9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",(0,r.jsx)(e.em,{children:"processName"}),"\u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30674D\u306F$\u30A4\u30D9\u30F3\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u3068\u3044\u3046\u540D\u524D\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8B66\u544A:"})," \u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u5B9F\u884C\u3059\u308B\u51E6\u7406\u306B\u3064\u3044\u3066\u306F\u5341\u5206\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30A4\u30D9\u30F3\u30C8\u3092\u767A\u751F\u3055\u305B\u308B\u30B3\u30DE\u30F3\u30C9\u306F\u30B3\u30FC\u30EB\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u3088\u3046\u306A\u30B3\u30DE\u30F3\u30C9\u3092\u30B3\u30FC \u30EB\u3057\u305F\u5834\u5408\u3001\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u884C\u304B\u3089\u629C\u3051\u308B\u306E\u304C\u975E\u5E38\u306B\u56F0\u96E3\u306B\u306A\u308A\u307E\u3059\u3002",(0,r.jsx)(e.strong,{children:"Ctrl+Shift+Backspace"}),"\uFF08Windows\uFF09\u307E\u305F\u306F ",(0,r.jsx)(e.strong,{children:"Command-Shift-Control-Backspace"}),"\uFF08Macintosh\uFF09\u30AD\u30FC\u306B\u3088\u308A\u3001\u30A4\u30D9\u30F3\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u30D7\u30ED\u30BB\u30B9\u3092\u7D42\u4E86\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30A4\u30D9\u30F3\u30C8\u7BA1\u7406\u304C\u6B63\u5E38\u306A\u52D5\u4F5C\u3067\u306F\u306A\u304F\u306A\u3063\u305F\u5834\u5408\u306B\u3001\u3053\u306E\u624B\u6CD5\u3092\u5229\u7528\u3057\u3066\u56DE\u5FA9\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u306F\u4EE5\u4E0B\u306E\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u8AAD\u307F\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059: MouseDown, KeyCode, Modifiers, MouseX, MouseY, \u305D\u3057\u3066 MouseProc\u3002\u3053\u308C\u3089\u306E\u5909\u6570\u304C\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u3067\u3042\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u5909\u6570\u306E\u30B9\u30B3\u30FC\u30D7\u306F\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u3059\u3002\u5225\u306E\u30D7\u30ED\u30BB\u30B9\u3067\u3053\u308C\u3089\u306E\u5024\u304C\u5FC5\u8981\u306A\u5834\u5408\u3001\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u3078\u30B3\u30D4\u30FC\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570MouseDown\u306B\u306F\u3001\u30A4\u30D9\u30F3\u30C8\u304C\u30DE\u30A6\u30B9\u30AF\u30EA\u30C3\u30AF\u3067\u3042\u308B\u5834\u5408\u306B\u306F1\u304C\u3001\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306B\u306F0\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u30B7\u30B9\u30C6\u30E0\u5909\u6570KeyCode\u306B\u306F\u3001\u62BC\u3055\u308C\u305F\u30AD\u30FC\u306E\u30B3\u30FC\u30C9\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u5909\u6570\u306F\u6587\u5B57\u30B3\u30FC\u30C9\u307E\u305F\u306F\u30D5\u30A1\u30F3\u30AF\u30B7\u30E7\u30F3\u30AD\u30FC\u30B3\u30FC\u30C9\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30B3\u30FC\u30C9\u306F",(0,r.jsx)(e.em,{children:"Unicode\u30B3\u30FC\u30C9"}),"\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/export-text",children:"EXPORT TEXT"}),"(\u3055\u3089\u306B\u305D\u306E\u30B5\u30D6\u30BB\u30AF\u30B7\u30E7\u30F3)\u3001\u304A\u3088\u3073",(0,r.jsx)(e.em,{children:"\u30D5\u30A1\u30F3\u30AF\u30B7\u30E7\u30F3\u30AD\u30FC\u30B3\u30FC\u30C9"}),"\u306E\u7BC0\u306B\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u3059\u30024D\u306F\u4E3B\u8981\u306A\u6587\u5B57\u30B3\u30FC\u30C9\u3068\u30D5\u30A1\u30F3\u30AF\u30B7\u30E7\u30F3\u30AD\u30FC\u30B3\u30FC\u30C9\u306B\u305F\u3044\u3057\u3066\u5B9A\u7FA9\u6E08\u307F\u306E\u5B9A\u6570\u304C\u3042\u308A\u307E\u3059\u3002\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u3053\u308C\u3089\u306E\u5B9A\u6570\u306E\u30C6\u30FC\u30DE\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570Modifiers\u306B\u306F\u3001\u30E2\u30C7\u30D5\u30A1\u30A4\u30A2\u30AD\u30FC\u306E\u5024\u304C\u5165\u308A\u307E\u3059\u3002\u30B7\u30B9\u30C6\u30E0\u5909\u6570Modifiers\u306F\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3057\u305F\u6642\u70B9\u3067\u30E2\u30C7\u30A3\u30D5\u30A1\u30A4\u30A2\u30AD\u30FC\u304C\u62BC\u3055\u308C\u3066\u3044\u305F\u304B\u3069\u3046\u304B\u3092\u793A\u3057\u307E\u3059\u3002\u691C\u77E5\u3067\u304D\u308B\u306E\u306F\u4EE5\u4E0B\u306E\u30AD\u30FC\u3067\u3059:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0"})}),(0,r.jsx)(e.th,{children:"\u30E2\u30C7\u30A3\u30D5\u30A1\u30A4\u30A2"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Windows"}),(0,r.jsx)(e.td,{children:"Shift \u30AD\u30FC, Caps Lock, Alt \u30AD\u30FC, Ctrl \u30AD\u30FC"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Macintosh"}),(0,r.jsx)(e.td,{children:"Shift \u30AD\u30FC, Caps Lock, Alt(\u3042\u308B\u3044\u306FOption)\u30AD\u30FC, Command \u30AD\u30FC, Control \u30AD\u30FC"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"\u30E2\u30C7\u30A3\u30D5\u30A1\u30A4\u30A2\u30AD\u30FC\u306F\u305D\u308C\u5358\u4F53\u3067\u306F\u4F55\u3082\u30A4\u30D9\u30F3\u30C8\u3092\u751F\u6210\u3057\u307E\u305B\u3093\u3002Modifiers\u5909\u6570\u306F\u30D3\u30C3\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u683C\u7D0D\u3059\u308B\u500D\u9577\u6574\u6570\u3067\u3059\u30024D\u306F\u305D\u308C\u305E\u308C\u306E\u30E2\u30C7\u30A3\u30D5\u30A1\u30A4\u30A2\u30AD\u30FC\u306B\u5BFE\u3057\u30D3\u30C3\u30C8\u30DD\u30B8\u30B7\u30E7\u30F3\u3084\u30D3\u30C3\u30C8\u30DE\u30B9\u30AF\u3092\u6307\u5B9A\u3059\u308B\u65E2\u5B9A\u306E\u5B9A\u6570\u3092\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\u30A4\u30D9\u30F3\u30C8\u306B\u5BFE\u3057\u3066Shift\u30AD\u30FC\u304C\u62BC\u3055\u308C\u305F\u304B\u3069\u3046\u304B\u3092\u691C\u77E5\u3059\u308B\u3068\u304D\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u66F8\u304F\u304B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0If(Modifiers?? Shift key bit)\xa0//Shit\u30AD\u30FC\u304C\u62BC\u3055\u308C\u305F\u304B  \n"})}),"\n",(0,r.jsx)(e.p,{children:"\u3042\u308B\u3044\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u66F8\u304F\u4E8B\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0If((Modifiers&Shift key mask)#0)\xa0//Shit\u30AD\u30FC\u304C\u62BC\u3055\u308C\u305F\u304B  \n"})}),"\n",(0,r.jsx)(e.p,{children:"\u30C6\u30B9\u30C8\u3057\u305F\u3044\u30E2\u30C7\u30A3\u30D5\u30A1\u30A4\u30A2\u30AD\u30FC\u3068\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306B\u5FDC\u3058\u3066\u3001\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u305A\u308C\u304B\u4E00\u3064\u3092\u4F7F\u7528\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u5B9A\u6570\u306F*Events (Modifiers)*\u30C6\u30FC\u30DE\u306B\u3042\u308A\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u30E2\u30C7\u30A3\u30D5\u30A1\u30A4\u30A2"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u5B9A\u6570"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Shift"}),(0,r.jsx)(e.td,{children:"Shift key bit / Shift key mask"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Caps Lock"}),(0,r.jsx)(e.td,{children:"Caps lock key bit / Caps lock key mask"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Alt (OS X\u3067\u306FOption\u3068\u3082\u547C\u3070\u308C\u307E\u3059)"}),(0,r.jsx)(e.td,{children:"Option key bit / Option key mask"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Windows\u3067\u306ECtrl"}),(0,r.jsx)(e.td,{children:"Command key bit / Command key mask"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"OS X\u3067\u306ECtrl"}),(0,r.jsx)(e.td,{children:"Control key bit / Control key mask"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"OS X\u3067\u306ECommand"}),(0,r.jsx)(e.td,{children:"Command key bit / Command key mask"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u53F3\u30AF\u30EA\u30C3\u30AF"}),(0,r.jsx)(e.td,{children:"Control key bit / Control key mask"})]})]})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u30B7\u30C6\u30E0\u5909\u6570MouseX\u3068MouseY\u306B\u306F\u3001\u30DE\u30A6\u30B9\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u6642\u306E\u5EA7\u6A19\u4F4D\u7F6E\u304C\u5165\u308A\u307E\u3059\u3002\u3053\u306E\u4F4D\u7F6E\u306F\u3001\u30AF\u30EA\u30C3\u30AF\u304C\u767A\u751F\u3057\u305F\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30ED\u30FC\u30AB\u30EB\u5EA7\u6A19\u30B7\u30B9\u30C6\u30E0\u3092\u7528\u3044\u3066\u8868\u73FE\u3055\u308C\u307E\u3059\u3002\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u5DE6\u4E0A\u9685\u306E\u4F4D\u7F6E\u304C0.0\u3067\u3059\u3002\u3053\u308C\u3089\u306F\u30DE\u30A6\u30B9\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u5834\u5408\u306B\u306E\u307F\u6709\u52B9\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u30B7\u30B9\u30C6\u30E0\u5909\u6570MouseProc\u306B\u306F\u3001\u30A4\u30D9\u30F3\u30C8(\u30DE\u30A6\u30B9\u30AF\u30EA\u30C3\u30AF)\u304C\u767A\u751F\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u306E\u30D7\u30ED\u30BB\u30B9\u53C2\u7167\u756A\u53F7\u304C\u5165\u308A\u307E\u3059\u3002\n",(0,r.jsx)(e.strong,{children:"\u91CD\u8981"}),": \u30B7\u30B9\u30C6\u30E0\u5909\u6570MouseDown\u3001KeyCode\u3001Modifiers\u3001MouseX\u3001MouseY\u3001and MouseProc\u306B\u306F\u3001",(0,r.jsx)(e.strong,{children:"ON EVENT CALL"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u306E\u307F\u610F\u5473\u3092\u6301\u3064\u5024\u304C\u7D0D\u3081\u3089\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(e.p,{children:"\u6B21\u306E\u4F8B\u306F\u3001\u30E6\u30FC\u30B6\u304CCtrl+\u30D4\u30EA\u30AA\u30C9\uFF08Windows\uFF09\u307E\u305F\u306FCommand+\u30D4\u30EA\u30AA\u30C9\uFF08Macintosh\uFF09\u3092\u62BC\u3057\u305F\u3089\u3001\u5370\u5237\u3092\u4E2D\u6B62\u3057\u307E\u3059\u3002\u307E \u305A\u3001\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002\u6B21\u306B\u30E6\u30FC\u30B6\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8868\u793A\u3057\u3066\u3001\u5370\u5237\u3092\u4E2D\u6B62\u3067\u304D\u308B\u3053\u3068\u3092\u77E5\u3089\u305B\u307E\u3059\u3002\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u30A4\u30F3 \u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570*<>vbWeStop*\u306BTrue\u304C\u4EE3\u5165\u3055\u308C\u308B\u3068\u3001\u65E2\u306B\u5370\u5237\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306E\u6570\u3092\u30E6\u30FC\u30B6\u306B\u77E5\u3089\u305B\u307E\u3059\u3002\u6700\u5F8C\u306B\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u30AF\u30EA\u30A2\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0PAGE SETUP\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0<>vbWeStop:=False\n\xa0\xa0\xa0\xa0ON EVENT CALL("EVENT HANDLER")\xa0// \u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\n\xa0\xa0\xa0\xa0ALL RECORDS([People])\n\xa0\xa0\xa0\xa0MESSAGE("\u4E2D\u65AD\u3059\u308B\u306B\u306FCtrl+\u30D4\u30EA\u30AA\u30C9\u3092\u62BC\u3059")\n\xa0\xa0\xa0\xa0$vlNbRecords:=Records in selection([People])\n\xa0\xa0\xa0\xa0For($vlRecord;1;$vlNbRecords)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(<>vbWeStop)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Printing cancelled at record "+String($vlRecord)+" of "+String($vlNbRecords))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlRecord:=$vlNbRecords+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Print form([People];"Special Report")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0\xa0\xa0\xa0ON EVENT CALL("")\xa0// \u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u30A2\u30F3\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\n\xa0End if\n'})}),"\n",(0,r.jsx)(e.p,{children:"Ctrl+\u30D4\u30EA\u30AA\u30C9\u304C\u62BC\u3055\u308C\u308B\u3068\u3001\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u5185\u3067*<>vbWeStop*\u304CTrue\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// EVENT HANDLER project method\n\xa0If((Modifiers?? Command key bit)\xa0&\xa0(KeyCode=Period))\n\xa0\xa0\xa0\xa0CONFIRM("Are you sure?")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0<>vbWeStop:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER EVENT\xa0// \u3053\u306E\u547C\u3073\u51FA\u3057\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u305D\u3046\u3067\u306A\u3044\u3068\u30014D\u3082\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u306E\u4F8B\u984C\u3067\u306F\u3001ON EVENT CALL\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u308C\u306F\u3001\u30EB\u30FC\u30D7\u3067",(0,r.jsx)(e.em,{children:"PAGE SETUP"}),"\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/print-form",title:"PRINT FORM",children:"PRINT FORM"}),"\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/page-break",title:"PAGE BREAK",children:"PAGE BREAK"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3044\u3001\u7279\u5225\u306A\u5370\u5237\u7528\u30EC\u30DD\u30FC\u30C8\u3092\u751F\u6210\u3057\u3066\u3044\u308B\u305F\u3081\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30EC\u30DD\u30FC\u30C8\u3092\u5370\u5237\u3059\u308B\u5834\u5408\u3001\u30E6\u30FC\u30B6\u306B\u5370\u5237\u3092\u4E2D\u65AD\u3055\u305B\u308B\u3088\u3046\u306A\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u51E6\u7406\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u81EA\u52D5\u7684\u306B\u884C\u308F\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/commands/filter-event",children:"FILTER EVENT"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/mouse-position",children:"MOUSE POSITION"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/method-called-on-event",children:"Method called on event"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/shift-down",children:"Shift down"})]}),"\n",(0,r.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"190"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2717"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u306E\u4F7F\u7528\u306F\u4E0D\u53EF"}),(0,r.jsx)(e.td,{})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return i}});var d=s(667294);let r={},t=d.createContext(r);function i(n){let e=d.useContext(t);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),d.createElement(t.Provider,{value:e},n.children)}}}]);