"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92859"],{28285:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/semaphore","title":"Semaphore","description":"Semaphore ( semaphore {; tickCount} ) : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/semaphore.md","sourceDirName":"commands-legacy","slug":"/commands/semaphore","permalink":"/docs/ja/commands/semaphore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsemaphore.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"semaphore","title":"Semaphore","slug":"/commands/semaphore","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New signal","permalink":"/docs/ja/commands/new-signal"},"next":{"title":"SET PROCESS VARIABLE","permalink":"/docs/ja/commands/set-process-variable"}}'),d=s("785893"),l=s("250065");let t={id:"semaphore",title:"Semaphore",slug:"/commands/semaphore",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Semaphore"})," ( ",(0,d.jsx)(n.em,{children:"semaphore"})," {; ",(0,d.jsx)(n.em,{children:"tickCount"}),"} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"semaphore"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30C6\u30B9\u30C8\u3068\u8A2D\u5B9A\u3092\u884C\u3046\u30BB\u30DE\u30D5\u30A9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tickCount"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u6700\u5927\u5F85\u3061\u6642\u9593"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"FALSE: \u30BB\u30DE\u30D5\u30A9\u306E\u8A2D\u5B9A\u306B\u6210\u529F\u3057\u305F TRUE: \u65E2\u306B\u30BB\u30DE\u30D5\u30A9\u304C\u5B58\u5728\u3059\u308B"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(n.p,{children:"\u30BB\u30DE\u30D5\u30A9\u306F\u3001\u30EF\u30FC\u30AF\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u9593\u3001\u307E\u305F\u306F\u540C\u4E00\u30EF\u30FC\u30AF\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u4E0A\u306E\u30D7\u30ED\u30BB\u30B9\u9593\u3067\u5171\u6709\u3055\u308C\u308B\u30D5\u30E9\u30B0\u3067\u3059\u3002\u30BB\u30DE\u30D5\u30A9\u306F\u3001\u5358\u306B\u5B58\u5728\u3057\u305F\u308A\u5B58\u5728\u3057\u306A\u304B\u3063\u305F\u308A\u3059\u308B\u3060\u3051\u3067\u3059\u3002\u5404\u30E6\u30FC\u30B6\u304C\u5B9F\u884C\u3057\u3066 \u3044\u308B\u30E1\u30BD\u30C3\u30C9\u3067\u30BB\u30DE\u30D5\u30A9\u306E\u5B58\u5728\u3092\u8ABF\u3079\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30BB\u30DE\u30D5\u30A9\u306F\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u30EF\u30FC\u30AF\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u3001\u3042\u308B\u3044\u306F\u305D\u308C\u3092\u4F5C\u6210\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u306E\u307F\u524A\u9664\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002\u30BB\u30DE\u30D5\u30A9\u3092\u4F5C\u6210\u3059\u308B\u3001\u307E\u305F\u306F\u305D\u306E\u5B58\u5728\u306E\u6709\u7121\u3092\u8ABF\u3079\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u30EF\u30FC\u30AF\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u9593\u3067\u306E\u30E1\u30BD\u30C3\u30C9\u306E\u901A\u4FE1\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002\u30BB\u30DE\u30D5\u30A9\u306F\u30EC\u30B3\u30FC\u30C9\u306E\u30A2\u30AF\u30BB\u30B9\u306E\u4FDD\u8B77\u76EE\u7684\u306B\u306F\u4F7F\u7528\u3057\u307E\u305B\u3093\u3002\u3053\u308C\u306F4D\u30684D Server\u304C\u81EA\u52D5\u7684\u306B\u884C\u3044\u307E\u3059\u3002\u30BB\u30DE\u30D5\u30A9\u306F\u3001\u8907\u6570\u306E\u30E6\u30FC\u30B6\u304C\u540C\u3058\u51E6\u7406\u3092\u540C\u6642\u306B\u5B9F\u884C\u3059\u308B\u306E\u3092\u9632\u3050\u305F\u3081\u306B\u7528\u3044\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Semaphore"})," \u95A2\u6570\u306F\u3059\u3067\u306B\u30BB\u30DE\u30D5\u30A9\u304C\u5B58\u5728\u3059\u308B\u5834\u5408TRUE\u3092\u8FD4\u3057\u3001\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002\u30BB\u30DE\u30D5\u30A9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001",(0,d.jsx)(n.strong,{children:"Semaphore"})," \u306F\u30BB\u30DE\u30D5\u30A9\u3092\u4F5C\u6210\u3057FALSE\u3092\u8FD4\u3057\u307E\u3059\u3002\u540C\u6642\u306B1\u4EBA\u306E\u30E6\u30FC\u30B6\u3057\u304B\u30BB\u30DE\u30D5\u30A9\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002",(0,d.jsx)(n.strong,{children:"Semaphore"}),"\u304CFALSE\u3092\u8FD4\u3059\u3068\u3044\u3046\u3053\u3068\u306F\u3001\u30BB\u30DE\u30D5\u30A9\u304C\u5B58\u5728\u3057\u306A\u304B\u3063\u305F\u3053\u3068\u3092\u610F\u5473\u3059\u308B\u3068\u540C\u6642\u306B\u3001\u30B3\u30DE\u30F3\u30C9\u547C\u3073\u51FA\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3066\u65B0\u305F\u306B\u30BB\u30DE\u30D5\u30A9\u8A2D\u5B9A\u3055\u308C\u305F\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Semaphore"}),"\u306F\u3001\u30BB\u30DE\u30D5\u30A9\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070FALSE\u3092\u8FD4\u3057\u307E\u3059\u3002\u307E\u305F\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u304C\u65E2\u306B\u305D\u306E\u30BB\u30DE\u30D5\u30A9\u3092\u8A2D\u5B9A\u3057\u3066\u3044\u308B\u5834\u5408\u3082FALSE\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:'\u30BB\u30DE\u30D5\u30A9\u306F\u5148\u982D\u306E$\u3092\u542B\u3081\u3066255\u6587\u5B57\u4EE5\u5185\u306B\u5236\u9650\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u3088\u308A\u9577\u3044\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u5207\u308A\u6368\u3066\u3089\u308C\u305F\u6587\u5B57\u5217\u3092\u4F7F\u3063\u3066\u30BB\u30DE\u30D5\u30A9\u304C\u30C6\u30B9\u30C8\u3055\u308C\u307E\u3059\u30024D\u3067\u306F\u30BB\u30DE\u30D5\u30A9\u540D\u306F\u5927\u6587\u5B57/\u5C0F\u6587\u5B57\u3092\u533A\u5225\u3059\u308B\u3068\u3044\u3046\u4E8B\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044(\u4F8B\u3048\u3070\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u306F"MySemaphore" \u3068 "mysemaphore"\u306F\u7570\u306A\u308B\u3082\u306E\u3067\u3042\u308B\u3068\u8A8D\u8B58\u3057\u307E\u3059)\u3002'}),"\n",(0,d.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570",(0,d.jsx)(n.em,{children:"tickCount"})," \u306F\u3001",(0,d.jsx)(n.em,{children:"semaphore"})," \u304C\u65E2\u306B\u30BB\u30C3\u30C8\u3055\u308C\u3066\u3044\u308B\u6642\u306E\u5F85\u3061\u6642\u9593 (tick) \u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u3053\u306E\u5834\u5408\u3001\u95A2\u6570\u306F\u30BB\u30DE\u30D5\u30A9\u304C\u89E3\u653E\u3055\u308C\u308B\u304B\u3001\u307E\u305F\u306FTRUE\u3092\u8FD4\u3059\u524D\u306B\u5F85\u3061\u6642\u9593\u304C\u7D42\u4E86\u307E\u3067\u5F85\u3061\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"4D\u306B\u306F2\u7A2E\u985E\u306E\u30BB\u30DE\u30D5\u30A9\u3001\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9\u3068\u30B0\u30ED\u30FC\u30D0\u30EB\u30BB\u30DE\u30D5\u30A9\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9\u306F\u3001\u540C\u3058\u30EF\u30FC\u30AF\u30B9\u30C6\u30FC\u30B7\u30E7 \u30F3\u4E0A\u306E\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (\u540C\u4E00\u30EF\u30FC\u30AF\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u4E0A\u306B\u9650\u3089\u308C\u307E\u3059) \u3002\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9\u306F\u3001\u30BB\u30DE\u30D5\u30A9\u540D\u306E\u5148\u982D\u306B\u30C9\u30EB\u8A18\u53F7 ($) \u3092\u4ED8\u3051\u3066\u4F5C\u6210\u3057\u307E\u3059\u3002\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9\u306F\u3001\u540C\u4E00\u30EF\u30FC\u30AF\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u4E0A\u3067\u5B9F\u884C\u3057\u3066\u3044\u308B\u30D7\u30ED\u30BB\u30B9\u9593\u3067\u51E6\u7406\u3092\u76E3\u8996\u3059\u308B\u969B\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9\u3092 \u4F7F\u7528\u3057\u3066\u3001\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3084\u30EF\u30FC\u30AF\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u4E0A\u306E\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u3067\u5171\u7528\u3059\u308B\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u914D\u5217\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u76E3\u8996\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u30B0\u30ED\u30FC\u30D0\u30EB\u30BB\u30DE\u30D5\u30A9\u306F\u3001\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u3068\u305D\u306E\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30B0\u30ED\u30FC\u30D0\u30EB\u30BB\u30DE\u30D5\u30A9\u306F\u30DE\u30EB\u30C1\u30E6\u30FC\u30B6\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30E6\u30FC\u30B6\u9593\u3067\u51E6\u7406\u3092\u76E3\u8996\u3059\u308B\u305F\u3081\u306B\u7528\u3044\u307E\u3059\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u30B0\u30ED\u30FC\u30D0\u30EB\u30BB\u30DE\u30D5\u30A9\u3068\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9\u306F\u7406\u8AD6\u7684\u306B\u306F\u540C\u3058\u3082\u306E\u3067\u3059\u3002\u9055\u3044\u306F\u305D\u306E\u6709\u52B9\u7BC4\u56F2\u306B\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30E2\u30FC\u30C9\u3067\u306F\u3001\u30B0\u30ED\u30FC\u30D0\u30EB\u30BB\u30DE\u30D5\u30A9\u306F\u3059\u3079\u3066\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304A\u3088\u3073\u30B5\u30FC\u30D0\u30FC\u3067\u5B9F\u884C\u3057\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u9593\u3067\u5171\u7528\u3055\u308C\u307E\u3059\u3002\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9\u306F\u3001\u305D\u308C\u304C\u4F5C\u6210\u3055\u308C\u305F\u30DE\u30B7\u30F3\u4E0A\u3067\u5B9F\u884C\u3057\u3066\u3044\u308B\u30D7\u30ED\u30BB\u30B9\u9593\u3067\u306E\u307F\u5171\u7528\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u30B9\u30BF\u30F3\u30C9\u30A2\u30ED\u30F3\u30E2\u30FC\u30C9\u306E4D\u3067\u306F\u3001\u30E6\u30FC\u30B6\u306F\u4E00\u4EBA\u3060\u3051\u306A\u305F\u3081\u3001\u30B0\u30ED\u30FC\u30D0\u30EB\u30BB\u30DE\u30D5\u30A9\u3082\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9\u3082\u305D\u306E\u6709\u52B9\u7BC4\u56F2\u306F\u540C\u3058\u3067\u3059\u3002\u305F\u3060\u3057\u3001\u30B7\u30F3\u30B0\u30EB\u3068\u30DE\u30EB\u30C1\u306E\u4E21\u65B9\u306E\u5F62\u3067\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u7528\u9014\u306B\u3088\u3063\u3066\u30B0\u30ED\u30FC\u30D0\u30EB\u30BB\u30DE\u30D5\u30A9\u3068\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9\u3092\u4F7F\u3044\u5206\u3051\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," \u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3084\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306A\u3069\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30ED\u30FC\u30AB\u30EB\u306A\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u305F\u3081\u306B\u30BB\u30DE\u30D5\u30A9\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9 \u3092\u5229\u7528\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\u3053\u306E\u3088\u3046\u306A\u30B1\u30FC\u30B9\u3067\u30B0\u30ED\u30FC\u30D0\u30EB\u30BB\u30DE\u30D5\u30A9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u4E0D\u5FC5\u8981\u306A\u30CD\u30C3\u30C8\u30FC\u30EF\u30FC\u30AF\u30A2\u30AF\u30BB\u30B9\u304C\u884C\u308F\u308C\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u4E0D\u5FC5\u8981\u306B\u4ED6\u306E \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u5F71\u97FF\u3092\u4E0E\u3048\u3066\u3057\u307E\u3044\u307E\u3059\u3002\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9\u3092\u4F7F\u7528\u3059\u308C\u3070\u3053\u306E\u3088\u3046\u306A\u671B\u307E\u3057\u304F\u306A\u3044\u526F\u4F5C\u7528\u3092\u907F\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(n.p,{children:"\u30BB\u30DE\u30D5\u30A9\u3092\u4F7F\u7528\u3057\u305F\u5178\u578B\u7684\u306A\u30B3\u30FC\u30C9\u3092\u8003\u3048\u3066\u307F\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0While(Semaphore("MySemaphore";300))\n\xa0\xa0\xa0\xa0IDLE\n\xa0End while\n\xa0\xa0// \u30BB\u30DE\u30D5\u30A9\u3067\u4FDD\u8B77\u3055\u308C\u305F\u30B3\u30FC\u30C9\u3092\u3053\u3053\u306B\u8A18\u8F09\n\xa0CLEAR SEMAPHORE("MySemaphore")\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u3067\u306F\u30012\u4EBA\u306E\u30E6\u30FC\u30B6\u304CProducts \u30C6\u30FC\u30D6\u30EB\u306E\u4FA1\u683C\u3092\u66F4\u65B0\u3059\u308B\u306E\u3092\u9632\u304E\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u3067\u306F\u30BB\u30DE\u30D5\u30A9\u3092\u7528\u3044\u3066\u3001\u3053\u308C\u3092\u5B9F\u73FE\u3057\u3066\u3044\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0If(Semaphore("UpdatePrices"))\xa0// \u30BB\u30DE\u30D5\u30A9\u306E\u4F5C\u6210\u3092\u8A66\u884C\n\xa0\xa0\xa0\xa0ALERT("Another user is already updating prices. Retry later.")\n\xa0Else\n\xa0\xa0\xa0\xa0DoUpdatePrices\xa0// \u6599\u91D1\u306E\u66F4\u65B0\n\xa0\xa0\xa0\xa0CLEAR SEMAPHORE("UpdatePrices"))\xa0// \u30BB\u30DE\u30D5\u30A9\u3092\u30AF\u30EA\u30A2\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u8907\u6570\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u6301\u3064\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u3001To Do\u30EA\u30B9\u30C8\u3092\u7BA1\u7406\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u3057\u307E\u3059\u3002\u3053\u306E\u30EA\u30B9\u30C8\u306F\u30C6\u30FC\u30D6\u30EB\u3067\u306F\u306A\u304F\u3001\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u914D\u5217\u3067\u7BA1\u7406\u3057\u307E\u3059\u3002\u30BB\u30DE\u30D5\u30A9\u3092\u4F7F\u3063\u3066\u540C\u6642\u306B\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u308B\u306E\u3092\u9632\u304E\u307E\u3059\u3002\u3053\u306E\u3088\u3046\u306A\u5834\u5408\u306B\u3001To Do\u30EA\u30B9\u30C8\u306F\u81EA\u5206\u3060\u3051\u306E\u3082\u306E\u306A\u305F\u3081\u3001\u30ED\u30FC\u30AB\u30EB\u30BB\u30DE\u30D5\u30A9\u3067\u5341\u5206\u3067\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u914D\u5217\u306FOn Startup \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3067\u521D\u671F\u5316\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(<>ToDoList;0)\xa0// The To Do list is initially empty\n"})}),"\n",(0,d.jsx)(n.p,{children:"To Do\u30EA\u30B9\u30C8\u306B\u9805\u76EE\u3092\u8FFD\u52A0\u3059\u308B\u30E1\u30BD\u30C3\u30C9\u3092\u6B21\u306B\u793A\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ADD TO DO LIST project method\n\xa0\xa0// ADD TO DO LIST ( Text )\n\xa0\xa0// ADD TO DO LIST ( To do list item )\n\xa0var $1 : Text\n\xa0If(Not(Semaphore("$AccessToDoList";300)))\n\xa0\xa0// Wait 5 seconds if the semaphore already exists\n\xa0\xa0\xa0\xa0$vlElem:=Size of array(<>ToDoList)+1\n\xa0\xa0\xa0\xa0INSERT IN ARAY(<>ToDoList;$vlElem)\n\xa0\xa0\xa0\xa0<>ToDoList{$vlElem}:=$1\n\xa0\xa0\xa0\xa0CLEAR SEMAPHORE("$AccessToDoList")\xa0// Clear the semaphore\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u3069\u306E\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u3082\u4E0A\u8A18\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u305B\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30BB\u30DE\u30D5\u30A9\u30FC\u304C\u5B58\u5728\u3059\u308B\u5834\u5408\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u305B\u305A\u3001\u547C\u3073\u51FA\u3057\u5143\u30E1\u30BD\u30C3\u30C9\u306B\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9\u3068\u30C6\u30AD\u30B9\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0$L_Error:=Semaphore_proof(->$T_Text_error)\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// \u30BB\u30DE\u30D5\u30A9\u30FC\u3092\u4F7F\u7528\u3057\u305F\u4FDD\u8B77\u69CB\u9020\n\xa0var $0;$L_MyError : Integer\n\xa0var $1 : Pointer\xa0// \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\n\nvar $T_Sema_local;$T_Message : Text\n\xa0\n\xa0\xa0// \u30E1\u30BD\u30C3\u30C9\u958B\u59CB\n\xa0$L_MyError:=0\n\xa0$T_Sema_local:="$tictac"\n\xa0\n\xa0If(Semaphore($T_Sema_local;300))\n\xa0\xa0// 300 tick\u306E\u5F85\u3061\u6642\u9593\u306E\u9593\u306B\u3001\u540C\u3058\u30BB\u30DE\u30D5\u30A9\u3092\u4F5C\u6210\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u304CWe expected 300 ticks but the semaphore\n\xa0\xa0// \u305D\u306E\u30BB\u30DE\u30D5\u30A9\u3092\u89E3\u653E\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u3053\u3053\u3067\u505C\u6B62\u3059\u308B\n\xa0\xa0\xa0\xa0$L_MyError:=-1\n\xa0\n\xa0Else\n\xa0\n\xa0\xa0// \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u540C\u6642\u306B\u8907\u6570\u30D7\u30ED\u30BB\u30B9\u3067\u5B9F\u884C\u3055\u308C\u308B\u3053\u3068\u304C\u306A\u3044\n\xa0\n\xa0\xa0// \u3053\u306E\u30D7\u30ED\u30BB\u30B9\u3067\u30BB\u30DE\u30D5\u30A9\u30FC\u3092\u8A2D\u5B9A\u3057\u305F\u306E\u3067\u3001\n\xa0\xa0// \u3053\u306E\u30D7\u30ED\u30BB\u30B9\u3067\u5FC5\u305A\u30BB\u30DE\u30D5\u30A9\u30FC\u3092\u89E3\u653E\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\n\xa0\n\xa0\xa0// \u51E6\u7406\u3092\u884C\u3046\n\xa0\xa0\xa0\xa0...\n\xa0\xa0// \u30BB\u30DE\u30D5\u30A9\u30FC\u3092\u89E3\u653E\u3059\u308B\n\xa0\xa0\xa0\xa0CLEAR SEMAPHORE($T_Sema_local)\n\xa0End if\n\xa0\n\xa0If($L_MyError=-1)\n\xa0\xa0\xa0\xa0$T_Message:="\u30BB\u30DE\u30D5\u30A9\u30FC "+$T_Sema_local+" \u304C\u65E2\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u305F\u305F\u3081\u30B3\u30FC\u30C9\u306F\u5B9F\u884C\u3055\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002"\n\xa0Else\n\xa0\xa0\xa0\xa0$T_Message:="OK"\n\xa0End if\n\xa0\n\xa0$0:=$L_MyError\n\xa0$1->:=$T_Message \xa0// \u547C\u3073\u51FA\u3057\u5143\u30E1\u30BD\u30C3\u30C9\u306F\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9\u3068\u30E1\u30C3\u30BB\u30FC\u30B8\u30C6\u30AD\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u308B\n\n\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/clear-semaphore",children:"CLEAR SEMAPHORE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/test-semaphore",children:"Test semaphore"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"\u30BB\u30DE\u30D5\u30A9\u30FC\u3068\u30B7\u30B0\u30CA\u30EB"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"143"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var r=s(667294);let d={},l=r.createContext(d);function t(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);