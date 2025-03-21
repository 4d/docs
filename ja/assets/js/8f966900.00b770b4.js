"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53716"],{875972:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/set-external-data-path","title":"SET EXTERNAL DATA PATH","description":"SET EXTERNAL DATA PATH ( aField ; path )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-external-data-path.md","sourceDirName":"commands-legacy","slug":"/commands/set-external-data-path","permalink":"/docs/ja/commands/set-external-data-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-external-data-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-external-data-path","title":"SET EXTERNAL DATA PATH","slug":"/commands/set-external-data-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME INDEXES","permalink":"/docs/ja/commands/resume-indexes"},"next":{"title":"SET INDEX","permalink":"/docs/ja/commands/set-index"}}'),d=t("785893"),r=t("250065");let l={id:"set-external-data-path",title:"SET EXTERNAL DATA PATH",slug:"/commands/set-external-data-path",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET EXTERNAL DATA PATH"})," ( ",(0,d.jsx)(n.em,{children:"aField"})," ; ",(0,d.jsx)(n.em,{children:"path"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aField"}),(0,d.jsx)(n.td,{children:"Text, Blob, Picture"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u5834\u6240\u3092\u8A2D\u5B9A\u3059\u308B\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"path"}),(0,d.jsx)(n.td,{children:"Text, Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u5916\u90E8\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u30D1\u30B9\u540D\u304A\u3088\u3073\u30D5\u30A1\u30A4\u30EB\u540D\u3001\u307E\u305F\u306F0 = \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u5B9A\u7FA9\u3092\u4F7F\u7528\u3059\u308B1 = \u30C7\u30D5\u30A9\u30EB\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u4F7F\u7528\u3059\u308B"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET EXTERNAL DATA PATH"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,d.jsx)(n.em,{children:"aField"}),"\u5F15\u6570\u306B\u6E21\u3057\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u3001\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306E\u3001\u5916\u90E8\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u5834\u6240\u3092\u8A2D\u5B9A\u3042\u308B\u3044\u306F\u5909\u66F4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["4D\u3067\u306F\u30C6\u30AD\u30B9\u30C8\u3001BLOB\u3001\u304A\u3088\u3073\u30D4\u30AF\u30C1\u30E3\u30FC\u578B\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u30C7\u30FC\u30BF\u3092\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306E",(0,d.jsx)(n.em,{children:"\u5916\u90E8"})," \u306B\u683C\u7D0D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u6A5F\u80FD\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306A\u8AAC\u660E\u306F",(0,d.jsx)(n.em,{children:"Design Reference\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"})]}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u6307\u5B9A\u3055\u308C\u308B\u8A2D\u5B9A\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u30C7\u30A3\u30B9\u30AF\u306B\u4FDD\u5B58\u3055\u308C\u308B\u3068\u304D\u306B\u306E\u307F\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u308B\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u306A\u306B\u3082\u884C\u3044\u307E\u305B\u3093\u3002\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u30D1\u30E9\u30E1\u30FC \u30BF\u30FC\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"path"}),"\u306B\u306F\u30AB\u30B9\u30BF\u30E0\u30D1\u30B9\u540D\u307E\u305F\u306F\u81EA\u52D5\u7684\u306A\u5834\u6240\u3092\u6307\u5B9A\u3059\u308B\u5B9A\u6570\u3044\u305A\u308C\u304B\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u30AB\u30B9\u30BF\u30E0\u30D1\u30B9\u540D"}),(0,d.jsx)(n.br,{}),"\n\u3053\u306E\u5834\u5408\u5916\u90E8\u30B9\u30C8\u30EC\u30FC\u30B8\u3092\u30AB\u30B9\u30BF\u30E0\u30E2\u30FC\u30C9\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002\u7279\u5B9A\u306E4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u6A5F\u80FD\u306F\u3053\u306E\u30E2\u30FC\u30C9\u3092\u81EA\u52D5\u3067\u306F\u5229\u7528\u3067\u304D\u307E\u305B\u3093 (Design Reference \u30DE\u30CB\u30E5\u30A2\u30EB\u53C2\u7167)\u3002\u7279\u306B\u3001\u30D5\u30A1\u30A4\u30EB\u306E\u4F5C\u6210\u3068\u5909\u66F4\u306F\u81EA\u5206\u81EA\u8EAB\u3067\u7BA1\u7406\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),'\n\u76F8 \u5BFE\u30D1\u30B9\u3001\u307E\u305F\u306F\u7D76\u5BFE\u30D1\u30B9\u3092\u6E21\u3059\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002\u7D76\u5BFE\u30D1\u30B9\u306E\u5834\u5408\u3001\u30D1\u30B9\u5185\u306B\u30B9\u30C8\u30EC\u30FC\u30B8\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D\u3068\u62E1\u5F35\u5B50\u3092\u542B\u3093\u3067\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059(\u76F8\u5BFE\u30D1\u30B9\u3092\u6307\u5B9A\u3059\u308B \u5834\u5408\u3001\u6587\u5B57\u5217\u306E\u6700\u521D\u306B"../" (Windows) \u307E\u305F\u306F "..:" (macOS) \u3092\u633F\u5165\u3057\u307E\u3059)\u3002\u62E1\u5F35\u5B50\u306F\u5B9F\u969B\u306E\u30C7\u30FC\u30BF\u578B\u3068\u4E00\u81F4 \u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093 (\u4FDD\u5B58\u6642\u306B\u81EA\u52D5\u3067\u5909\u63DB\u3055\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093)\u3002\u30B7\u30B9\u30C6\u30E0\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5916\u90E8\u30D5\u30A1\u30A4\u30EB (',(0,d.jsx)(n.em,{children:"databaseName"}),".ExternalData) \u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u542B\u3080\u3069\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u3067\u3082\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u3053\u308C\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u4FDD\u5B58\u3055\u308C\u308B\u3068\u304D\u306B\u542B\u307E\u308C\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"path"})," \u5F15\u6570\u306B\u3088\u3063\u3066\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306F\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u6642\u306B\u5B58\u5728\u3057\u304B\u3064\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u30D1\u30B9\u304C\u7121\u52B9\u3067\u3042\u308B(\u30D5\u30A1\u30A4\u30EB\u307E\u305F\u306F\u30D5\u30A9\u30EB\u30C0\u304C\u898B\u3064\u304B\u3089\u306A\u3044)\u5834\u5408\u3001",(0,d.jsx)(n.em,{children:"path"})," \u5F15\u6570\u304C\u7D76\u5BFE\u30D1\u30B9\u3068\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306B\u9650\u308A\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"path"})," \u5F15\u6570\u306B\u76F8\u5BFE\u30D1\u30B9\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u3089\u306A\u304F\u3066\u3082\u30A8\u30E9\u30FC\u306F\u8FD4\u3055\u308C\u306A\u3044\u306E\u3067\u3001\u5B9F\u969B\u306B\u305D\u306E\u30D1\u30B9\u304C\u6709\u52B9\u304B\u3069\u3046\u304B\u306F\u81EA\u5206\u3067\u78BA\u304B\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u5916\u90E8\u30D5\u30A1\u30A4\u30EB\u3092\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u968E\u5C64\u304B\u3001\u305D\u306E\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3059\u308B\u5834\u5408\u30014D\u306F\u6307\u5B9A\u3055\u308C\u305F\u30D1\u30B9\u304C\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3057\u76F8\u5BFE\u7684\u3067\u3042\u308B\u3068\u307F\u306A\u3057\u3001\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u30D5\u30A9\u30EB\u30C0\u30FC\u304C\u79FB\u52D5\u3055\u308C\u305F\u308A\u540D\u79F0\u5909\u66F4\u3055\u308C\u305F\u308A\u3057\u305F\u5834\u5408\u3067\u3082\u305D\u306E\u30EA\u30F3\u30AF\u3092\u4FDD\u5B88\u3057\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u3053 \u308C\u306B\u3088\u308A\u8907\u6570\u306E\u30EC\u30B3\u30FC\u30C9\u3067\u540C\u3058\u5916\u90E8\u30D5\u30A1\u30A4\u30EB\u3092\u5171\u6709\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u306A\u70B9\u306B\u7559\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u5916\u90E8\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3057\u3066\u884C\u308F\u308C\u305F\u5909\u66F4\u306F\u3059\u3079\u3066\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u5BFE\u3057 \u3066\u6709\u52B9\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u8907\u6570\u306E\u30D7\u30ED\u30BB\u30B9\u304C\u540C\u6642\u306B\u540C\u3058\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u5909\u66F4\u3067\u304D\u308B\u306A\u3089\u3070\u3001\u30BB\u30DE\u30D5\u30A9\u30FC\u3092\u4F7F\u7528\u3057\u3066\u540C\u6642\u30A2\u30AF\u30BB\u30B9\u3092\u5236\u9650\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u305D\u3046\u3067 \u306A\u3051\u308C\u3070\u5916\u90E8\u30D5\u30A1\u30A4\u30EB\u304C\u640D\u50B7\u3059\u308B\u30EA\u30B9\u30AF\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u81EA\u52D5\u7684\u306A\u5834\u6240"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"Data File Maintenance"}),"\u30C6\u30FC\u30DE\u306E\u3001\u4EE5\u4E0B\u306E2\u3064\u306E\u5B9A\u6570\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{children:"\u5024"}),(0,d.jsx)(n.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Use default folder"}),(0,d.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsxs)(n.td,{children:["\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30C7\u30FC\u30BF\u306F",(0,d.jsx)(n.em,{children:"databaseName"}),".ExternalData\u3068\u3044\u3046\u540D\u524D\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u6B73\u5C64\u306B\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u30E2\u30FC\u30C9\u3067\u306F\u3001\u5916\u90E8\u30C7\u30FC\u30BF\u3092\u3001\u305D\u308C\u304C\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u5185\u306B\u3042\u308B\u3068\u304D\u3068\u540C\u69D8\u306B\u30014D\u304C\u7BA1\u7406\u3057\u307E\u3059\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Use structure definition"}),(0,d.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"4D\u306F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u30C7\u30FC\u30BF\u306E\u683C\u7D0D\u8A2D\u5B9A\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u5916\u90E8\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u5185\u90E8\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u5909\u66F4\u3057\u3066\u3082\u3001\u5916\u90E8\u30D5\u30A1\u30A4\u30EB\u306F\u524A\u9664\u3055\u308C\u307E\u305B\u3093\u3002"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4E00\u5EA6\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u30014D\u306F\u81EA\u52D5\u3067\u30EC\u30B3\u30FC\u30C9\u30D5\u30A3\u30FC\u30EB\u30C9\u3068\u30C7\u30A3\u30B9\u30AF\u4E0A\u306E\u30D5\u30A1\u30A4\u30EB\u3068\u306E\u30EA\u30F3\u30AF\u3092\u4FDD\u5B88\u3057\u307E\u3059\u3002 ",(0,d.jsx)(n.em,{children:"path"})," \u5F15\u6570\u3092\u5909\u66F4\u3057\u305F\u3044\u5834\u5408\u3092\u9664\u304D\u3001\u518D\u5EA6\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002 4D\u304C\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30C7\u30FC\u30BF\u306B(\u30B9\u30C8\u30EC\u30FC\u30B8\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D\u304C\u5909\u66F4\u3055\u308C\u305F\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u524A\u9664\u3055\u308C\u305F\u3001\u30D1\u30B9\u304C\u5909\u66F4\u3055\u308C\u305F\u3001\u7B49\u3067)\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u306A\u304F\u306A\u308B\u3068\u3001\u3053\u306E \u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u7A7A\u306B\u306A\u308A\u307E\u3059\u304C\u30A8\u30E9\u30FC\u306F\u751F\u6210\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," ",(0,d.jsx)(n.strong,{children:"SET EXTERNAL DATA PATH"}),"\u30B3\u30DE\u30F3\u30C9\u306F4D\u30ED\u30FC\u30AB\u30EB\u30E2\u30FC\u30C9\u307E\u305F\u306F4D Server\u3067\u306E\u307F\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u306E4D\u3067\u306F\u306A\u306B\u3082\u884C\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u5185\u306E\u65E2\u5B58\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u5916\u306B\u76F8\u5BFE\u30D1\u30B9\u3092\u4F7F\u3063\u3066\u4FDD\u5B58\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE RECORD([Photos])\n\xa0[Photos]Name:="Paris.png"\n\xa0SET EXTERNAL DATA PATH([Photos]Thumbnail;Get 4D folder(Database folder)+"custom"+Folder separator+[Photos]Name)\n\xa0\xa0//"/custom/Paris.png" \u30D5\u30A1\u30A4\u30EB\u306F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u3059\u3050\u96A3\u306B\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\n\xa0SAVE RECORD([Photos])\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/get-external-data-path",children:"Get external data path"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/reload-external-data",children:"RELOAD EXTERNAL DATA"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1134"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(667294);let d={},r=s.createContext(d);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);