"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65176"],{157754:function(n,e,s){s.r(e),s.d(e,{default:()=>j,frontMatter:()=>t,metadata:()=>d,assets:()=>c,toc:()=>h,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/get-print-option","title":"GET PRINT OPTION","description":"GET PRINT OPTION ( option ; value1 {; value2} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-print-option.md","sourceDirName":"commands-legacy","slug":"/commands/get-print-option","permalink":"/docs/ja/20-R7/commands/get-print-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-print-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-print-option","title":"GET PRINT OPTION","slug":"/commands/get-print-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get print marker","permalink":"/docs/ja/20-R7/commands/get-print-marker"},"next":{"title":"Get print preview","permalink":"/docs/ja/20-R7/commands/get-print-preview"}}'),i=s("785893"),r=s("250065");let t={id:"get-print-option",title:"GET PRINT OPTION",slug:"/commands/get-print-option",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"GET PRINT OPTION"})," ( ",(0,i.jsx)(e.em,{children:"option"})," ; ",(0,i.jsx)(e.em,{children:"value1"})," {; ",(0,i.jsx)(e.em,{children:"value2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5F15\u6570"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"option"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u30AA\u30D7\u30B7\u30E7\u30F3\u756A\u53F7"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"value1"}),(0,i.jsx)(e.td,{children:"Integer, Text"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u50241"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"value2"}),(0,i.jsx)(e.td,{children:"Integer, Text"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u50242"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"GET PRINT OPTION"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30D7\u30EA\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u73FE\u5728\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"option"}),"\u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u53D6\u5F97\u3059\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u6A19\u6E96\u306E\u30AA\u30D7\u30B7\u30E7\u30F3(\u500D\u9577\u6574\u6570)\u304B\u3001PDF\u30AA\u30D7\u30B7\u30E7\u30F3\u30B3\u30FC\u30C9(\u6587\u5B57\u5217)\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,i.jsx)(e.em,{children:"value1"})," \u3068",(0,i.jsx)(e.em,{children:"value2"})," (\u4EFB\u610F)\u5F15\u6570\u306B\u3001",(0,i.jsx)(e.em,{children:"option"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30AB\u30EC\u30F3\u30C8\u5024\u3092\u5165\u308C\u3066\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6A19\u6E96\u306E\u5370\u5237\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6307\u5B9A\u3059\u308B\u306B\u306F\u3001\u201C",(0,i.jsx)(e.em,{children:"Print Options"}),"\u201D\u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u5B9A\u7FA9\u6E08\u307F\u5B9A\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,i.jsx)(e.th,{children:"\u578B"}),(0,i.jsx)(e.th,{children:"\u5024"}),(0,i.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Paper option"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.em,{children:"value1"})," \u306E\u307F\u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u3001\u3053\u3053\u306B\u306F\u7528\u7D19\u306E\u540D\u524D\u306E\u307F\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u4E21\u65B9\u306E\u5F15\u6570\u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u3001",(0,i.jsx)(e.em,{children:"value1"})," \u306B\u306F\u7528\u7D19\u306E\u5E45\u304C\u3001",(0,i.jsx)(e.em,{children:"value2"})," \u306B\u306F\u7528\u7D19\u306E\u9AD8\u3055\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u5E45\u3068\u9AD8\u3055\u306F\u3069\u3061\u3089\u3082\u30B9\u30AF\u30EA\u30FC\u30F3\u30D4\u30AF\u30BB\u30EB\u3067\u8868\u73FE\u3055\u308C\u307E\u3059\u3002\u30D7\u30EA\u30F3\u30BF\u30FC\u3067\u4F7F\u7528\u3067\u304D\u308B\u5168\u3066\u306E\u7528\u7D19\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u540D\u524D\u3001\u9AD8\u3055\u3068\u5E45\u3092\u53D6\u5F97\u3059\u308B\u5834\u5408\u306B\u306F",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/print-option-values",children:"PRINT OPTION VALUES"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u4E0B\u3055\u3044\u3002"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Orientation option"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.em,{children:"value1"})," \u306E\u307F:1=\u7E26\u5411\u304D\u30012=\u6A2A\u5411\u304D\u3002\u7570\u306A\u308B\u30DA\u30FC\u30B8\u65B9\u5411\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/get-print-option",children:"GET PRINT OPTION"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,i.jsx)(e.em,{children:"value1"}),"\u306B0\u3092\u8FD4\u3057\u307E\u3059**\u3002**\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u5370\u5237\u30B8\u30E7\u30D6\u5185\u304B\u3089\u547C\u3073\u51FA\u3059\u4E8B\u304C\u53EF\u80FD\u306A\u306E\u3067\u3001\u540C\u4E00\u5370\u5237\u30B8\u30E7\u30D6\u4E2D\u306B\u304A\u3044\u3066\u7E26\u5411\u304D\u3092\u6A2A\u5411\u304D\u306B\u3001\u3042\u308B\u3044\u306F\u305D\u306E\u9006\u3078\u3068\u5207\u308A\u66FF\u3048\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Scale option"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"3"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.em,{children:"value1"})," \u306E\u307F: \u62E1\u5927\u7E2E\u5C0F\u306E\u500D\u7387\u306E\u5024(\u30D1\u30FC\u30BB\u30F3\u30C8)\u3002\u4E00\u90E8\u306E\u30D7\u30EA\u30F3\u30BF\u30FC\u3067\u306F\u500D\u7387\u306E\u5909\u66F4\u3092\u8A31\u53EF\u3057\u3066\u3044\u306A\u3044\u3082\u306E\u3082\u3042\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044\u3002\u7121\u52B9\u306A\u5024\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u5370\u5237\u6642\u306B100%\u3078\u3068\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Number of copies option"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"4"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.em,{children:"value1"})," \u306E\u307F: \u5370\u5237\u3059\u308B\u90E8\u6570"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Paper source option"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"5"}),(0,i.jsxs)(e.td,{children:["(Windows \u306E\u307F) ",(0,i.jsx)(e.em,{children:"value1"})," \u306E\u307F: \u30B3\u30DE\u30F3\u30C9\u3067\u8FD4\u3055\u308C\u308B\u30C8\u30EC\u30A4\u306E\u914D\u5217\u306E\u4E2D\u3067\u3001\u4F7F\u7528\u3055\u308C\u308B\u4E88\u5B9A\u306E\u7528\u7D19\u30C8\u30EC\u30A4\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u5BFE\u5FDC\u3059\u308B\u756A\u53F7\u3002\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306FWindows\u3067\u306E\u307F\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Destination option"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"9"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.em,{children:"value1"}),": \u5370\u5237\u5148\u306E\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3059\u308B\u30B3\u30FC\u30C9: 1=\u30D7\u30EA\u30F3\u30BF\u30FC\u30012=\u30D5\u30A1\u30A4\u30EB(Mac\u3067\u306FPS)\u30013=PDF\u30D5\u30A1\u30A4\u30EB\u30015=\u30B9\u30AF\u30EA\u30FC\u30F3(OS X \u30C9\u30E9\u30A4\u30D0\u30FC\u30AA\u30D7\u30B7\u30E7\u30F3)\u3002 ",(0,i.jsx)(e.em,{children:"value1"})," \u304C1\u3042\u308B\u3044\u306F5\u4EE5\u5916\u3067\u3042\u3063\u305F\u5834\u5408\u3001",(0,i.jsx)(e.em,{children:"value2"})," \u306B\u306F\u751F\u6210\u3055\u308C\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3078\u306E\u30D1\u30B9\u540D\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u3053\u306E\u30D1\u30B9\u306F\u4ED6\u306E\u30D1\u30B9\u304C\u6307\u5B9A\u3055\u308C\u308B\u307E\u3067\u306F\u4F7F\u7528\u3055\u308C\u7D9A\u3051\u307E\u3059\u3002\u4FDD\u5B58\u5148\u306B\u540C\u3058\u540D\u524D\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u65E2\u306B\u5B58\u5728\u3057\u3066\u3044\u305F\u5834\u5408\u306B\u306F\u3001\u305D\u308C\u306F\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/get-print-option",children:"GET PRINT OPTION"}),"\u306E\u5834\u5408\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u5024\u304C\u65E2\u5B9A\u306E\u30EA\u30B9\u30C8\u5185\u306B\u306A\u3044\u5834\u5408\u3001",(0,i.jsx)(e.em,{children:"value1"})," \u306B\u306F-1\u304C\u8FD4\u3055\u308C\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u30A8\u30E9\u30FC\u304C\u8D77\u304D\u305F\u5834\u5408\u3001",(0,i.jsx)(e.em,{children:"value1"})," \u3068OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002",(0,i.jsx)(e.br,{}),(0,i.jsx)(e.strong,{children:"\u6CE8(Windows)"}),": Windows \u4E0A\u3067PDF \u3092\u5370\u5237\u3059\u308B\u305F\u3081\u306B\u306F\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-current-printer",children:"SET CURRENT PRINTER"}),'(Generic PDF driver) \u3092\u547C\u3073\u51FA\u3057\u3066\u5370\u5237\u4FDD\u5B58\u5148\u30922 (File) \u307E\u305F\u306F 3 (PDF File) \u306B\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u30023 \u306B\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3067\u30DE\u30EB\u30C1\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u5BFE\u5FDC\u306E\u30B3\u30FC\u30C9\u3092\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002PDF Creator \u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u3066\u3001\u901A\u5E38\u306E\u30D7\u30EA\u30F3\u30BF\u30FC\u304C\u9078\u629E\u3055\u308C\u305F\u5834\u5408\u3067\u3001\u304B\u3064*(9;3;path)* \u306E\u5024\u304C\u6E21\u3055\u308C\u305F\u5834\u5408\u30014D \u306F\u81EA\u52D5\u7684\u306B"\u30B5\u30A4\u30EC\u30F3\u30C8"PDF \u5370\u5237\u3092\u958B\u59CB\u3057\u3001\u3042\u3089\u3086\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u30B3\u30FC\u30C9\u3092\u53D7\u3051\u5165\u308C\u307E\u3059(\u305F\u3060\u3057\u306B\u304B\u3089\u306E\u6587\u5B57\u5217\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u3042\u308B\u3044\u306F\u3053\u306E\u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u5B58\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u5370\u5237\u6642\u306B\u8868\u793A\u3055\u308C\u307E\u3059)\u3002\u5370\u5237\u5F8C\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u8A2D\u5B9A\u306F\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002']})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Double sided option"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"11"}),(0,i.jsxs)(e.td,{children:["(Windows \u306E\u307F) ",(0,i.jsx)(e.em,{children:"value1"}),": 0=\u7247\u5074\u5370\u5237\u3042\u308B\u3044\u306F\u6A19\u6E96\u30011=\u4E21\u9762\u5370\u5237\u3002",(0,i.jsx)(e.em,{children:"value1"}),"=1\u306E\u3068\u304D\u3001",(0,i.jsx)(e.em,{children:"value2"})," \u306B\u306F\u30DA\u30FC\u30B8\u7DB4\u3058\u306E\u8A2D\u5B9A\u304C\u542B\u307E\u308C\u307E\u3059: 0=\u5DE6\u7DB4\u3058(\u30C7\u30D5\u30A9\u30EB\u30C8\u5024)\u30011=\u4E0A\u7DB4\u3058"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Spooler document name option"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"12"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.em,{children:"value1"})," \u306E\u307F: \u30B9\u30D7\u30FC\u30E9\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u4E00\u89A7\u306B\u8868\u793A\u3055\u308C\u308B\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u5370\u5237\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u540D\u3002\u3053\u306E\u5BA3\u8A00\u306B\u3088\u3063\u3066\u5B9A\u7FA9\u3055\u308C\u308B\u540D\u524D\u306F\u3001\u65B0\u3057\u3044\u540D\u524D\u3042\u308B\u3044\u306F\u7A7A\u306E\u6587\u5B57\u5217\u304C\u6E21\u3055\u308C\u306A\u3044\u9650\u308A\u306F\u30BB\u30C3\u30B7\u30E7\u30F3\u3067\u5370\u5237\u3055\u308C\u308B\u5168\u3066\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u5BFE\u3057\u3066\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u6A19\u6E96\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3(\u30E1\u30BD\u30C3\u30C9\u306E\u5834\u5408\u306B\u306F\u30E1\u30BD\u30C3\u30C9\u540D\u3092\u3001\u30EC\u30B3\u30FC\u30C9\u306E\u5834\u5408\u306B\u306F\u30C6\u30FC\u30D6\u30EB\u540D\u3092\u4F7F\u7528)\u3092\u4F7F\u7528\u3042\u308B\u3044\u306F\u5FA9\u5143\u3059\u308B\u305F\u3081\u306B\u306F\u3001\u7A7A\u306E\u6587\u5B57\u5217\u3092",(0,i.jsx)(e.em,{children:"value1"})," \u306B\u6E21\u3057\u3066\u4E0B\u3055\u3044\u3002"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Page range option"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"15"}),(0,i.jsxs)(e.td,{children:["4D Write Pro \u5C02\u7528\u306E\u30AA\u30D7\u30B7\u30E7\u30F3",(0,i.jsx)(e.br,{})]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Legacy printing layer option"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"16"}),(0,i.jsxs)(e.td,{children:["(Windows\u75284D 64-bit\u7248\u306E\u307F) ",(0,i.jsx)(e.em,{children:"value1"})," \u306E\u307F: 1=\u4EE5\u964D\u306E\u5370\u5237\u30B8\u30E7\u30D6\u306B\u5BFE\u3057\u3066\u306FGDI-\u30D9\u30FC\u30B9\u306E\u65E7\u5F0F\u306E\u5370\u5237\u30EC\u30A4\u30E4\u30FC\u3092\u9078\u629E\u30020=D2D\u5370\u5237\u30EC\u30A4\u30E4\u30FC\u3092\u9078\u629E(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3002",(0,i.jsx)(e.br,{}),(0,i.jsx)(e.strong,{children:"64-bit \u7248:"})," \u3053\u306E\u30BB\u30EC\u30AF\u30BF\u30FC\u306FWindows\u752864-bit\u72484D\u306E\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306E\u307F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002\u4ED6\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306F\u4E3B\u306B64-bit\u72484D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E4D\u30B8\u30E7\u30D6\u5185\u3067\u65E7\u5F0F\u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u5370\u5237\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u306B\u3082\u306E\u3067\u3059\u3002"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Print preview option"}),(0,i.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,i.jsx)(e.td,{children:"18"}),(0,i.jsxs)(e.td,{children:["(Windows \u306E\u307F) ",(0,i.jsx)(e.em,{children:"value1"}),": Windows \u4E0A\u3067\u5370\u5237\u30D7\u30EC\u30D3\u30E5\u30FC\u7528\u306B\u4F7F\u7528\u3059\u308B\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3002\u53D6\u308A\u5F97\u308B\u5024: kp preview automatic (\u30C7\u30D5\u30A9\u30EB\u30C8): XPS \u30D7\u30EA\u30F3\u30BF\u30FC\u3068\u30D3\u30E5\u30FC\u30A2\u30FC\u304C\u3042\u308C\u3070\u305D\u308C\u3092\u5229\u7528\u3057\u3001\u306A\u3051\u308C\u3070PDF \u30D7\u30EA\u30F3\u30BF\u30FC\u304B\u30D3\u30E5\u30FC\u30A2\u30FC\u3092\u4F7F\u7528\u3057\u3001\u305D\u308C\u3082\u306A\u3051\u308C\u3070\u30A8\u30E9\u30FC\u3092\u751F\u6210\u3059\u308B kp preview XPS: XPS \u30D7\u30EA\u30F3\u30BF\u30FC\u3068\u30D3\u30E5\u30FC\u30A2\u30FC\u304C\u3042\u308C\u3070\u305D\u308C\u3092\u4F7F\u7528\u3057\u3001\u306A\u3051\u308C\u3070\u30A8\u30E9\u30FC\u3092\u751F\u6210\u3059\u308B kp preview PDF: PDF \u30D7\u30EA\u30F3\u30BF\u30FC\u3068\u30D3\u30E5\u30FC\u30A2\u30FC\u304C\u3042\u308C\u3070\u305D\u308C\u3092\u4F7F\u7528\u3057\u3001\u306A\u3051\u308C\u3070\u30A8\u30E9\u30FC\u3092\u751F\u6210\u3059\u308B ",(0,i.jsx)(e.em,{children:"value2"})," (",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/get-print-option",children:"GET PRINT OPTION"})," \u3067\u306E\u307F\u4F7F\u7528\u53EF\u80FD): Windows \u4E0A\u3067\u5B9F\u969B\u306B\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u5370\u5237\u30D7\u30EC\u30D3\u30E5\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8(\u8A2D\u5B9A\u306B\u3088\u3063\u3066\u306F ",(0,i.jsx)(e.em,{children:"value1"})," \u306E\u5024\u3068\u7570\u306A\u308B\u3053\u3068\u304C\u6709\u308A\u5F97\u307E\u3059)\u3002\u53D6\u308A\u5F97\u308B\u5024: kp preview none: \u5229\u7528\u53EF\u80FD\u306A\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093 kp preview XPS: XPS \u30D7\u30EA\u30F3\u30BF\u30FC\u3068\u30D3\u30E5\u30FC\u30A2\u30FC\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059 kp preview PDF: PDF \u30D7\u30EA\u30F3\u30BF\u30FC\u3068\u30D3\u30E5\u30FC\u30A2\u30FC\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059"]})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:["PDF\u30AA\u30D7\u30B7\u30E7\u30F3\u30B3\u30FC\u30C9\u306F2\u3064\u306E\u90E8\u5206\u3001OptionT",(0,i.jsx)(e.em,{children:"ype"}),"\u3068",(0,i.jsx)(e.em,{children:"OptionName"}),'\u304B\u3089\u306A\u308A\u3001"',(0,i.jsx)(e.em,{children:"OptionType:OptionName"}),'"\u306E\u3088\u3046\u306B\u7D44\u307F\u5408\u308F\u305B\u3066\u4F7F\u7528\u3057\u307E\u3059\u3002 PDF\u30AA\u30D7\u30B7\u30E7\u30F3\u30B3\u30FC\u30C9\u3068\u305D\u308C\u3089\u306E\u53D6\u308A\u5F97\u308B\u5024\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001',(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-print-option",children:"SET PRINT OPTION"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6CE8:"})," ",(0,i.jsx)(e.strong,{children:"GET PRINT OPTION"})," \u30B3\u30DE\u30F3\u30C9\u306F\u4E3B\u306BPostScript \u30D7\u30EA\u30F3\u30BF\u30FC\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4ED6\u306E\u30BF\u30A4\u30D7\u306E\u30D7\u30EA\u30F3\u30BF\u30FC\u3001\u4F8B\u3048\u3070PCL\u3084link\u306A\u3069\u306B\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u304C\u3001\u305D\u306E\u5834\u5408\u4E00\u90E8\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u4F7F\u7528\u3067\u304D\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(e.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,i.jsx)(e.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B1\u304C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/print-option-values",children:"PRINT OPTION VALUES"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-print-option",children:"SET PRINT OPTION"})]}),"\n",(0,i.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(e.td,{children:"734"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,i.jsx)(e.td,{children:"\u2717"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,i.jsx)(e.td,{children:"OK"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return t}});var d=s(667294);let i={},r=d.createContext(i);function t(n){let e=d.useContext(r);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),d.createElement(r.Provider,{value:e},n.children)}}}]);