"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1341"],{402884:function(s,e,n){n.r(e),n.d(e,{default:()=>a,frontMatter:()=>t,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"commands/process-activity","title":"Process activity","description":"Process activity () ObjectProcess activity ( sessionID ) Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/process-activity.md","sourceDirName":"commands","slug":"/commands/process-activity","permalink":"/docs/ja/20-R7/commands/process-activity","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fprocess-activity.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"process-activity","title":"Process activity","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process aborted","permalink":"/docs/ja/20-R7/commands/process-aborted"},"next":{"title":"Process info","permalink":"/docs/ja/20-R7/commands/process-info"}}'),i=n("785893"),c=n("250065");let t={id:"process-activity",title:"Process activity",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function h(s){let e={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Process activity"})," () : Object",(0,i.jsx)(e.br,{}),(0,i.jsx)(e.strong,{children:"Process activity"})," ( ",(0,i.jsx)(e.em,{children:"options"})," ) : Object",(0,i.jsx)(e.br,{}),(0,i.jsx)(e.strong,{children:"Process activity"})," ( ",(0,i.jsx)(e.em,{children:"sessionID"})," ) : Object",(0,i.jsx)(e.br,{}),(0,i.jsx)(e.strong,{children:"Process activity"})," ( ",(0,i.jsx)(e.em,{children:"sessionID"})," ; ",(0,i.jsx)(e.em,{children:"options"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5F15\u6570"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"sessionID"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3ID"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"options"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u8FD4\u3055\u308C\u308B\u60C5\u5831\u3092\u6307\u5B9A\u3059\u308B\u30AA\u30D7\u30B7\u30E7\u30F3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,i.jsx)(e.td,{children:"Object"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"\u5B9F\u884C\u4E2D\u306E\u30D7\u30ED\u30BB\u30B9\u307E\u305F\u306F\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3(4D Server\u306E\u307F) \u306E\u30B9\u30CA\u30C3\u30D7\u30B7\u30E7\u30C3\u30C8"})]})]})]}),"\n",(0,i.jsxs)(e.details,{children:[(0,i.jsx)(e.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,i.jsx)(e.th,{children:"\u5185\u5BB9"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"20 R7"}),(0,i.jsx)(e.td,{children:"Support of sessionID parameter"})]})})]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"Process activity"})," command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.The ",(0,i.jsx)(e.strong,{children:"Process activity"})," command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.",(0,i.jsx)(e.strong,{children:"Process activity"})," \u30B3\u30DE\u30F3\u30C9\u306F\u7279\u5B9A\u306E\u6642\u523B\u3067\u306E\u3001\u5B9F\u884C\u4E2D\u306E\u30D7\u30ED\u30BB\u30B9\u3084\u63A5\u7D9A\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3(4D Server \u306E\u307F) \u306E\u30B9\u30CA\u30C3\u30D7\u30B7\u30E7\u30C3\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002 \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5168\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u306B\u306F\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/process-info",children:"Process info"})," \u30B3\u30DE\u30F3\u30C9\u3067\u3082\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u306A\u3044\u5185\u90E8\u30D7\u30ED\u30BB\u30B9\u3082\u542B\u307E\u308C\u307E\u3059\u3002  \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5168\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u306B\u306F\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/process-info",children:"Process info"})," \u30B3\u30DE\u30F3\u30C9\u3067\u3082\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u306A\u3044\u5185\u90E8\u30D7\u30ED\u30BB\u30B9\u3082\u542B\u307E\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001\u5F15\u6570\u3092\u6E21\u3055\u305A\u306B\u4F7F\u7528\u3057\u305F\u5834\u5408\u3001",(0,i.jsx)(e.strong,{children:"Process activity"})," \u306F\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u683C\u7D0D\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'"processes" \u306B\u306F\u5168\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059'}),"\n",(0,i.jsx)(e.li,{children:'"sessions" (4D Server \u306E\u5834\u5408\u306E\u307F) \u306B\u306F\u5168\u3066\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059'}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["4D Server \u3067\u306F\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,i.jsx)(e.em,{children:"sessionID"})," \u304A\u3088\u3073 ",(0,i.jsx)(e.em,{children:"options"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u8FD4\u3055\u308C\u308B\u60C5\u5831\u3092\u30D5\u30A3\u30EB\u30BF\u30FC\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"sessionID"})," \u5F15\u6570\u306B\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3ID \u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u305D\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u3057\u305F\u60C5\u5831\u306E\u307F\u3092\u8FD4\u3057\u307E\u3059\u3002 ",(0,i.jsx)(e.em,{children:"options"})," \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u3057\u305F\u5168\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u8A73\u7D30\u3092\u8AAC\u660E\u3057\u305F\u5358\u4E00\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u683C\u7D0D\u3057\u305F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u7121\u52B9\u306A\u30BB\u30C3\u30B7\u30E7\u30F3ID \u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,i.jsx)(e.strong,{children:"null"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002 ",(0,i.jsx)(e.em,{children:"options"})," \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u3057\u305F\u5168\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u8A73\u7D30\u3092\u8AAC\u660E\u3057\u305F\u5358\u4E00\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u683C\u7D0D\u3057\u305F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u7121\u52B9\u306A\u30BB\u30C3\u30B7\u30E7\u30F3ID \u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,i.jsx)(e.strong,{children:"null"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"options"})," \u5F15\u6570\u306B\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u3065\u308C\u304B\u4E00\u3064\u3092\u6E21\u3059\u3053\u3068\u3067\u3001\u8FD4\u3055\u308C\u308B\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,i.jsx)(e.th,{children:"\u5024"}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Processes and sessions"}),(0,i.jsx)(e.td,{children:"0"}),(0,i.jsx)(e.td,{children:'"processes" \u304A\u3088\u3073 "sessions" \u306E\u4E21\u65B9\u306E\u4E00\u89A7\u3092\u8FD4\u3057\u307E\u3059(\u30C7\u30D5\u30A9\u30EB\u30C8\u5024)\u3002'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Processes only"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:'"processes" \u306E\u4E00\u89A7\u306E\u307F\u3092\u8FD4\u3057\u307E\u3059\u3002'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Sessions only"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:'"sessions" \u306E\u4E00\u89A7\u306E\u307F\u3092\u8FD4\u3057\u307E\u3059\u3002'})]})]})]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["\u30EA\u30E2\u30FC\u30C8\u3001\u3042\u308B\u3044\u306F\u30ED\u30FC\u30AB\u30EB\u30E2\u30FC\u30C9\u306E4D \u3067\u5B9F\u884C\u3055\u308C\u305F\u5834\u5408\u3001",(0,i.jsx)(e.code,{children:"Process activity"})," \u306F\u5B9F\u884C\u4E2D\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u4E00\u89A7\u306E\u307F\u3092\u8FD4\u3057\u307E\u3059(\u3053\u306E\u5834\u5408",(0,i.jsx)(e.em,{children:"sessionID"})," \u304A\u3088\u3073 ",(0,i.jsx)(e.em,{children:"options"})," \u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059)\u3002"]})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Sessions"})}),"\n",(0,i.jsxs)(e.p,{children:['"sessions" \u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u3067\u5B9F\u884C\u4E2D\u306E\u5168\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u8A18\u8FF0\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002 \u30BB\u30C3\u30B7\u30E7\u30F3\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001',(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/session-info",children:(0,i.jsx)(e.code,{children:"Session info"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30BB\u30C3\u30B7\u30E7\u30F3\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/session-info",children:(0,i.jsx)(e.code,{children:"Session info"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(e.admonition,{title:"\u6CE8\u8A18",type:"note",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/session",children:"Session"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Process activity"})," \u306F\u30EA\u30E2\u30FC\u30C8\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3\u3001\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u304A\u3088\u3073REST \u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059\u304C\u3001Web \u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u8FD4\u3057\u307E\u305B\u3093(\u5236\u7D04)\u3002"]}),"\n"]})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Processes"})}),"\n",(0,i.jsxs)(e.p,{children:['"process"\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u3067\u5B9F\u884C\u4E2D\u306E\u5168\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u8A18\u8FF0\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002 \u30D7\u30ED\u30BB\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001',(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/process-info",children:(0,i.jsx)(e.code,{children:"Process info"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30D7\u30ED\u30BB\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/process-info",children:(0,i.jsx)(e.code,{children:"Process info"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u306F\u3001",(0,i.jsx)(e.code,{children:"Process activity"}),' \u30B3\u30DE\u30F3\u30C9\u306F\u8FFD\u52A0\u306E"session" \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8FD4\u3057\u307E\u3059:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u8FFD\u52A0\u306E\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"}),(0,i.jsx)(e.th,{})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"session"}),(0,i.jsx)(e.td,{children:"Object"}),(0,i.jsxs)(e.td,{children:["\u30D7\u30ED\u30BB\u30B9\u304C\u5B9F\u884C\u4E2D\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306E",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/API/SessionClass#info",children:(0,i.jsx)(e.code,{children:".info"})})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3002 ",(0,i.jsx)(e.code,{children:"Processes only"})," \u5F15\u6570\u304C\u6E21\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306B\u306F\u672A\u5B9A\u7FA9\u3068\u306A\u308A\u307E\u3059\u3002 ",(0,i.jsx)(e.code,{children:"Processes only"})," \u5F15\u6570\u304C\u6E21\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306B\u306F\u672A\u5B9A\u7FA9\u3068\u306A\u308A\u307E\u3059\u3002"]}),(0,i.jsx)(e.td,{})]})})]}),"\n",(0,i.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,i.jsx)(e.p,{children:"\u5168\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0//To be executed on the server\n\xa0\n\xa0var $o : Object\n\xa0var $i : Integer\n vat $processName;$userName : Text\n\n\xa0\n $o:=Process activity //Get process & session info\n For($i;0;($o.processes.length)-1) //Iterate over the "processes" collection\n    $processName:=$o.processes[$i].name\n    $userName:=String($o.processes[$i].session.userName) // Easy access to userName\n  //use String because session object might be undefined\n End for\n'})}),"\n",(0,i.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,i.jsx)(e.p,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u3057\u305F\u5168\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u53D6\u5F97\u3057\u305F\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:"  // \u30B5\u30FC\u30D0\u30FC\u5074\u3067\u5B9F\u884C\u3059\u308B\u3053\u3068\n \n var $sessionID : Text:=Session.id\n var $o : Object\n \n $o:=Process activity($sessionID ;Processes only)\n\n"})}),"\n",(0,i.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/session-storage",children:"Session storage"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/web-get-server-info",children:"WEB Get server info"})]})]})}function a(s={}){let{wrapper:e}={...(0,c.a)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}},250065:function(s,e,n){n.d(e,{Z:function(){return o},a:function(){return t}});var r=n(667294);let i={},c=r.createContext(i);function t(s){let e=r.useContext(c);return r.useMemo(function(){return"function"==typeof s?s(e):{...e,...s}},[e,s])}function o(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),r.createElement(c.Provider,{value:e},s.children)}}}]);