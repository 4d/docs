"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99552"],{337266:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>t,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/call-worker","title":"CALL WORKER","description":"CALL WORKER ( process ; formula {; param}{; param2 ; ... ; paramN} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/call-worker.md","sourceDirName":"commands-legacy","slug":"/commands/call-worker","permalink":"/docs/ja/20-R7/commands/call-worker","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcall-worker.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"call-worker","title":"CALL WORKER","slug":"/commands/call-worker","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process (Communications)","permalink":"/docs/ja/20-R7/category/process-communications"},"next":{"title":"CLEAR SEMAPHORE","permalink":"/docs/ja/20-R7/commands/clear-semaphore"}}'),l=r("785893"),d=r("250065");let c={id:"call-worker",title:"CALL WORKER",slug:"/commands/call-worker",displayed_sidebar:"docs"},i=void 0,t={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"CALL WORKER"})," ( ",(0,l.jsx)(n.em,{children:"process"})," ; ",(0,l.jsx)(n.em,{children:"formula"})," {; ",(0,l.jsx)(n.em,{children:"param"}),"}{; ",(0,l.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,l.jsx)(n.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5F15\u6570"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"process"}),(0,l.jsx)(n.td,{children:"Text, Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u30D7\u30ED\u30BB\u30B9\u756A\u53F7\u3001\u307E\u305F\u306F\u30D7\u30ED\u30BB\u30B9\u540D"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"formula"}),(0,l.jsx)(n.td,{children:"Object, Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u5B9F\u884C\u3059\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u540D\u524D\u3001\u307E\u305F\u306F Formula\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"param"}),(0,l.jsx)(n.td,{children:"Expression"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u30E1\u30BD\u30C3\u30C9\u306B\u6E21\u3059\u5F15\u6570"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"CALL WORKER"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,l.jsx)(n.em,{children:"process"})," \u306B\u53D7\u3051\u6E21\u3057\u305F\u540D\u79F0\u307E\u305F\u306F ID \u306E\u30EF\u30FC\u30AB\u30FC\u30D7\u30ED\u30BB\u30B9\u3092\u4F5C\u6210\u3001\u307E\u305F\u306F\u547C\u3073\u51FA\u3057\u3066\u3001\u4EFB\u610F\u306E ",(0,l.jsx)(n.em,{children:"param"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u4F7F\u3063\u3066 ",(0,l.jsx)(n.em,{children:"formula"})," \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30B3\u30FC\u30C9\u306E\u5B9F\u884C\u3092\u305D\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u5185\u306B\u304A\u3044\u3066\u8981\u6C42\u3057\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u306F ",(0,l.jsx)(n.em,{children:"params"})," \u3092\u30AB\u30D7\u30BB\u30EB\u5316\u3057\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u5F62\u3067\u30EF\u30FC\u30AB\u30FC\u304C\u6301\u3064\u30E1\u30C3\u30BB\u30FC\u30B8\u30DC\u30C3\u30AF\u30B9\u306B\u53D7\u3051\u6E21\u3057\u307E\u3059\u3002\u30EF\u30FC\u30AB\u30FC\u30D7\u30ED\u30BB\u30B9\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F",(0,l.jsx)(n.em,{children:"\u30EF\u30FC\u30AB\u30FC\u306B\u3064\u3044\u3066"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"process"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u6307\u5B9A\u3059\u308B\u30D7\u30ED\u30BB\u30B9\u540D\u307E\u305F\u306F\u30D7\u30ED\u30BB\u30B9\u756A\u53F7\u306B\u3088\u308A\u3001\u30EF\u30FC\u30AB\u30FC\u306F\u7279\u5B9A\u3055\u308C\u307E\u3059:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u30D7\u30ED\u30BB\u30B9\u756A\u53F7\u3067\u6307\u5B9A\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u307E\u305F\u306F\u305D\u306E\u30D7\u30ED\u30BB\u30B9\u304C ",(0,l.jsx)(n.strong,{children:"CALL WORKER"})," \u306B\u3088\u3063\u3066 4D\u304C\u4F5C\u6210\u3057\u305F\u3082\u306E\u3067\u306A\u3044\u5834\u5408 (\u4F8B\u3048\u3070\u30E1\u30A4\u30F3\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D7\u30ED\u30BB\u30B9\u306A\u3069)\u3001",(0,l.jsx)(n.strong,{children:"CALL WORKER"})," \u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u30D7\u30ED\u30BB\u30B9\u540D\u3067\u6307\u5B9A\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u65B0\u898F\u306E\u30EF\u30FC\u30AB\u30FC\u30D7\u30ED\u30BB\u30B9\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6CE8:"})," \u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3084\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u306E\u305F\u3081\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8D77\u52D5\u6642\u306B4D \u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u308B\u30E1\u30A4\u30F3\u30FB\u30D7\u30ED\u30BB\u30B9\u306F\u3001",(0,l.jsx)(n.strong,{children:"CALL WORKER"})," \u306B\u3088\u3063\u3066\u30B3\u30FC\u30EB\u3059\u308B\u3053\u3068\u306E\u3067\u304D\u308B\u30EF\u30FC\u30AB\u30FC\u30D7\u30ED\u30BB\u30B9\u3067\u3059\u3002\u305F\u3060\u3057\u3001\u30E1\u30A4\u30F3\u30FB\u30D7\u30ED\u30BB\u30B9\u306E\u30D7\u30ED\u30BB\u30B9\u540D\u306F 4D \u306E\u8A00\u8A9E\u74B0\u5883\u306B\u3088\u308A\u7570\u306A\u308B\u305F\u3081\u3001",(0,l.jsx)(n.strong,{children:"CALL WORKER"})," \u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u306F\u30D7\u30ED\u30BB\u30B9\u756A\u53F7 (\u5E38\u306B 1) \u3067\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30EF\u30FC\u30AB\u30FC\u30D7\u30ED\u30BB\u30B9\u306F\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u306E\u30D7\u30ED\u30BB\u30B9\u30EA\u30B9\u30C8\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u307E\u305F\u3001",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/process-info",children:"Process info"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30EF\u30FC\u30AB\u30FC\u30D7\u30ED\u30BB\u30B9\u3082\u5BFE\u8C61\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"formula"})," \u5F15\u6570\u306B\u306F\u3001\u30EF\u30FC\u30AB\u30FC\u30D7\u30ED\u30BB\u30B9\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u5B9F\u884C\u3059\u308B4D \u30B3\u30FC\u30C9\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),"(",(0,l.jsx)(n.em,{children:"Formula \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})," \u3092\u53C2\u7167\u306E\u3053\u3068)\u3002\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u5B9F\u884C\u53EF\u80FD\u306A\u5F0F\u3067\u3042\u308C\u3070\u3069\u3093\u306A\u5F0F\u3082\u683C\u7D0D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306B\u306F\u95A2\u6570\u3084\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306A\u3069\u3082\u542B\u307E\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u540D\u3092\u683C\u7D0D\u3057\u305F",(0,l.jsx)(n.strong,{children:"\u6587\u5B57\u5217"}),"\u3002\u3053\u3053\u3067\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30EF\u30FC\u30AB\u30FC\u306F\u5143\u3005\u81EA\u8EAB\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u958B\u59CB\u3059\u308B\u306E\u306B\u4F7F\u7528\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9(\u3042\u308C\u3070)\u3092\u5B9F\u884C\u3057\u307E\u3059(\u8A00\u3044\u63DB\u3048\u308B\u3068\u3001\u30EF\u30FC\u30AB\u30FC\u306E\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059)\u3002\u6CE8\u610F: \u30B3\u30DE\u30F3\u30C9\u304C\u30E1\u30A4\u30F3\u30D7\u30ED\u30BB\u30B9(\u30D7\u30ED\u30BB\u30B9\u756A\u53F71)\u3092\u547C\u3073\u51FA\u3057\u305F\u5834\u5408\u306B",(0,l.jsx)(n.em,{children:"formula"})," \u5F15\u6570\u306B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u5165\u308C\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30E1\u30A4\u30F3\u30D7\u30ED\u30BB\u30B9\u304C\u958B\u59CB\u3055\u308C\u305F\u308F\u3051\u3067\u306F\u306A\u3044\u304B\u3089\u3067\u3059\u3002\u7D50\u679C\u3068\u3057\u3066\u3001 ",(0,l.jsxs)(n.em,{children:[(0,l.jsx)(n.em,{children:"CALL WORKER"}),' (1;"")']})," \u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u307E\u305F",(0,l.jsx)(n.em,{children:"formula"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3078\u306E\u5F15\u6570\u3092",(0,l.jsx)(n.em,{children:"param"})," \u5F15\u6570\u306B1\u3064\u4EE5\u4E0A\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,l.jsx)(n.em,{children:"\u9806\u756A\u5F15\u6570"})," \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3057\u3001\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u5F0F\u304C\u95A2\u6570\u307E\u305F\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u5834\u5408\u306B\u306F",(0,l.jsx)(n.em,{children:"\u540D\u524D\u4ED8\u304D\u5F15\u6570"})," \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u30D7\u30ED\u30BB\u30B9\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u5185\u3067\u5B9F\u884C\u304C\u958B\u59CB\u3055\u308C\u305F\u3068\u304D\u3001\u30D7\u30ED\u30BB\u30B9\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u5F15\u6570\u306E\u5024\u3092\u540D\u524D\u4ED8\u304D\u3067\u53D7\u3051\u53D6\u308B\u304B\u3001 ",(0,l.jsx)(n.em,{children:"$1"}),"\u3001 ",(0,l.jsx)(n.em,{children:"$2"}),"\u3001 \u306E\u9806\u756A\u306B\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002\u914D\u5217\u306F\u5F15\u6570\u3068\u3057\u3066\u306F\u6E21\u305B\u306A\u3044\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044\u3002\u305D\u308C\u306B\u52A0\u3048\u3066",(0,l.jsx)(n.strong,{children:"CALL WORKER"})," \u30B3\u30DE\u30F3\u30C9\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u306F\u3001\u4EE5\u4E0B\u306E\u8FFD\u52A0\u306E\u5236\u7D04\u306B\u3064\u3044\u3066\u3082\u6CE8\u610F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30C6\u30FC\u30D6\u30EB\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3001\u5177\u4F53\u7684\u306B\u306F\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u307E\u305F\u306F\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u63A8\u5968\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u3053\u308C\u3089\u306E\u5024\u306F\u30D7\u30ED\u30BB\u30B9\u30E1\u30BD\u30C3\u30C9\u306B\u3088\u3063\u3066\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u305F\u77AC\u9593\u306B\u306F\u672A\u5B9A\u7FA9\u3067\u3042\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u6A19\u6E96\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u307E\u305F\u306F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u306F\u3001\u305D\u306E",(0,l.jsx)(n.strong,{children:"\u30B3\u30D4\u30FC"}),"\u304C\u6E21\u3055\u308C\u307E\u3059\u3002\u3064\u307E\u308A4D \u306F\u3001\u30EF\u30FC\u30AB\u30FC\u306E\u30D7\u30ED\u30BB\u30B9\u304C",(0,l.jsx)(n.strong,{children:"CALL WORKER"})," \u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u3068\u306F\u5225\u306E\u30D7\u30ED\u30BB\u30B9\u3067\u3042\u308B\u5834\u5408\u306B\u306F\u3001\u6307\u5B9A\u5148\u306E\u30D7\u30ED\u30BB\u30B9\u5185\u306B\u304A\u3044\u3066\u305D\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u307E\u305F\u306F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u30B3\u30D4\u30FC\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u307E\u305F\u306F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u5F15\u6570\u3092",(0,l.jsx)(n.strong,{children:"\u53C2\u7167"}),"\u3068\u3057\u3066\u6E21\u3057\u305F\u3044\u5834\u5408\u306B\u306F\u3001\u5171\u6709\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u307E\u305F\u306F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059(",(0,l.jsx)(n.em,{children:"\u5171\u6709\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u5171\u6709\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"})," \u53C2\u7167)\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30EF\u30FC\u30AB\u30FC\u30D7\u30ED\u30BB\u30B9\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u7D42\u4E86\u3059\u308B\u304B\u3001\u3042\u308B\u3044\u306F ",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/kill-worker",children:"KILL WORKER"})," \u3092\u30B3\u30FC\u30EB\u3055\u308C\u308B\u307E\u3067\u5B58\u7D9A\u3057\u307E\u3059\u3002\u5FC5\u8981\u306A\u3044\u30EF\u30FC\u30AB\u30FC\u306B\u306F\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3044\u3001\u30E1\u30E2\u30EA\u3092\u89E3\u653E\u3059\u308B\u306E\u304C\u3088\u3044\u3067\u3057\u3087\u3046\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,l.jsx)(n.p,{children:"\u30D5\u30A9\u30FC\u30E0\u4E0A\u306B\u3001\u9078\u629E\u5E74\u306E\u7D71\u8A08\u306A\u3069\u306E\u7B97\u51FA\u3092\u304A\u3053\u306A\u3046\u30DC\u30BF\u30F3\u3092\u8A2D\u7F6E\u3057\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u30DC\u30BF\u30F3\u306F\u30EF\u30FC\u30AB\u30FC\u30D7\u30ED\u30BB\u30B9\u3092\u4F5C\u6210\u3001\u3042\u308B\u3044\u306F\u547C\u3073\u51FA\u3057\u307E\u3059\u3002\u6F14\u7B97\u306F\u30EF\u30FC\u30AB\u30FC\u304C\u304A\u3053\u306A\u3046\u305F\u3081\u3001\u30E6\u30FC\u30B6\u30FC\u306F\u30D5\u30A9\u30FC\u30E0\u306E\u64CD\u4F5C\u3092\u7D9A\u884C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u30DC\u30BF\u30F3\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// \u30EF\u30FC\u30AB\u30FC myWorker\xa0\u3092\u30B3\u30FC\u30EB\u3057\u3001\u5B9F\u884C\u30E1\u30BD\u30C3\u30C9\u3068\u5F15\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\n\xa0var $vYear: Integer\n\xa0$vYear:=2015\xa0// \u3053\u306E\u5024\u306F\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067\u30E6\u30FC\u30B6\u30FC\u304C\u9078\u629E\u3057\u305F\u304B\u3082\u3057\u308C\u307E\u305B\u3093\n\xa0CALL WORKER("myWorker";Formula(workerMethod);$vYear;Current form window)\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"workerMethod"})," \u306E\u30B3\u30FC\u30C9\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// \u30EF\u30FC\u30AB\u30FC\u304C\u5B9F\u884C\u3059\u308B\u30E1\u30BD\u30C3\u30C9\u3067\u3059\n\xa0\xa0// \u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u3067\u3082\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6\u3067\u3082\u53EF\u80FD\u3067\u3059\n\xa0#DECLARE($vYearInteger;$windowInteger)\xa0//year and window reference\n\xa0...\xa0// \u7D71\u8A08\u30C7\u30FC\u30BF\u3092\u7B97\u51FA\u3057\u307E\u3059\n\xa0\xa0// \u7D42\u4E86\u5F8C\u3001\u30EF\u30FC\u30AB\u30FC\u306F\u30D5\u30A9\u30FC\u30E0\u3092\u30B3\u30FC\u30EB\u3057\u3066\u3001\u7D50\u679C\u3092\u6E21\u3057\u307E\u3059\n\xa0\xa0// $vStatResults \u3067\u30D5\u30A9\u30FC\u30E0\u4E0A\u306B\u7D50\u679C\u3092\u8868\u793A\u3057\u307E\u3059\n\xa0CALL FORM($window;Formula(displayStats);$vStatResults)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/call-form",children:"CALL FORM"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/current-process-name",children:"Current process name"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/kill-worker",children:"KILL WORKER"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.em,{children:"\u30EF\u30FC\u30AB\u30FC\u306B\u3064\u3044\u3066"})]}),"\n",(0,l.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(n.td,{children:"1389"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return c}});var s=r(667294);let l={},d=s.createContext(l);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);