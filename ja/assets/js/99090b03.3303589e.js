"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12054"],{99804:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>o,assets:()=>i,toc:()=>a,frontMatter:()=>c});var r=JSON.parse('{"id":"commands-legacy/launch-external-process","title":"LAUNCH EXTERNAL PROCESS","description":"LAUNCH EXTERNAL PROCESS ( fileName {; inputStream {; outputStream {; errorStream}}}{; pid} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/launch-external-process.md","sourceDirName":"commands-legacy","slug":"/commands/launch-external-process","permalink":"/docs/ja/commands/launch-external-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flaunch-external-process.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"launch-external-process","title":"LAUNCH EXTERNAL PROCESS","slug":"/commands/launch-external-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET MACRO PARAMETER","permalink":"/docs/ja/commands/get-macro-parameter"},"next":{"title":"Load 4D View document","permalink":"/docs/ja/commands/load-4d-view-document"}}'),d=s("785893"),l=s("250065");let c={id:"launch-external-process",title:"LAUNCH EXTERNAL PROCESS",slug:"/commands/launch-external-process",displayed_sidebar:"docs"},t=void 0,i={},a=[{value:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",id:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",level:4},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"macOS\u3067\u306E\u4F8B\u984C",id:"macos\u3067\u306E\u4F8B\u984C",level:4},{value:"Windows\u3067\u306E\u4F8B\u984C",id:"windows\u3067\u306E\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"LAUNCH EXTERNAL PROCESS"})," ( ",(0,d.jsx)(n.em,{children:"fileName"})," {; ",(0,d.jsx)(n.em,{children:"inputStream"})," {; ",(0,d.jsx)(n.em,{children:"outputStream"})," {; ",(0,d.jsx)(n.em,{children:"errorStream"}),"}}}{; ",(0,d.jsx)(n.em,{children:"pid"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fileName"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D5\u30A1\u30A4\u30EB\u30D1\u30B9\u3068\u8D77\u52D5\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u5F15\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"inputStream"}),(0,d.jsx)(n.td,{children:"Text, Blob"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u5165\u529B\u30B9\u30C8\u30EA\u30FC\u30E0(stdin)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"outputStream"}),(0,d.jsx)(n.td,{children:"Text, Blob"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u51FA\u529B\u30B9\u30C8\u30EA\u30FC\u30E0(stdout)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"errorStream"}),(0,d.jsx)(n.td,{children:"Text, Blob"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30A8\u30E9\u30FC\u30B9\u30C8\u30EA\u30FC\u30E0(stderr)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"pid"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u5916\u90E8\u30D7\u30ED\u30BB\u30B9\u306E\u56FA\u6709\u8B58\u5225\u5B50"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F"}),"\n",(0,d.jsxs)(n.p,{children:["4D v19 R4 \u4EE5\u964D\u3001\u5916\u90E8\u30D7\u30ED\u30BB\u30B9\u3092\u5B9F\u884C\u3057\u3066\u7BA1\u7406\u3059\u308B\u305F\u3081\u306B\u306F",(0,d.jsx)(n.em,{children:"SystemWorker class"})," \u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002\u3057\u304B\u3057\u306A\u304C\u3089\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3082\u5F15\u304D\u7D9A\u304D\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"LAUNCH EXTERNAL PROCESS"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001macOS\u3068Windows\u30674D\u304B\u3089\u5916\u90E8\u30D7\u30ED\u30BB\u30B9\u3092\u8D77\u52D5\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\nmacOS\u3067\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u7528\u3044\u3066\u30BF\u30FC\u30DF\u30CA\u30EB\u304B\u3089\u8D77\u52D5\u3067\u304D\u308B\u5B9F\u884C\u53EF\u80FD\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5B9F\u884C\u3059\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u56FA\u5B9A\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u30D1\u30B9\u3068 (\u5FC5\u8981\u306B\u5FDC\u3058\u3066) \u5F15\u6570\u3092\u5F15\u6570",(0,d.jsx)(n.em,{children:"fileName"}),"\u306B\u6E21\u3057\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\nmacOS\u3067\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u540D\u3092\u6E21\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u30024D\u306F\u74B0\u5883\u5909\u6570",(0,d.jsx)(n.strong,{children:"PATH"}),"\u3092\u4F7F\u7528\u3057\u3066\u3001\u5B9F\u884C\u53EF\u80FD\u30D5\u30A1\u30A4\u30EB\u3092\u63A2\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u8B66\u544A:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5B9F\u884C\u53EF\u80FD\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u307F\u3092\u8D77\u52D5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30B7\u30A7\u30EB (\u30B3\u30DE\u30F3\u30C9\u30A4\u30F3\u30BF\u30D7\u30EA\u30BF) \u306E\u4E00\u90E8\u3067\u3042\u308B\u547D\u4EE4\u306F\u5B9F\u884C\u3067\u304D\u307E\u305B\u3093\u3002\u4F8B\u3048\u3070\u3001macOS\u3067\u306F\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u7528\u3044\u3066",(0,d.jsx)(n.em,{children:"echo"}),"\u547D\u4EE4\u3084\u30A4\u30F3\u30C0\u30A4\u30EC\u30AF\u30C8\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,d.jsx)(n.em,{children:"inputStream"}),"\u5F15\u6570\u306F\u5916\u90E8\u30D7\u30ED\u30BB\u30B9\u306E",(0,d.jsx)(n.em,{children:"stdin"}),"\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001\u5F15\u6570",(0,d.jsx)(n.em,{children:"outputStream"}),"\u3068",(0,d.jsx)(n.em,{children:"errorStream"})," (\u6E21\u3057\u305F\u5834\u5408) \u306F\u5916\u90E8\u30D7\u30ED\u30BB\u30B9\u306E",(0,d.jsx)(n.em,{children:"stdout"}),"\u3068",(0,d.jsx)(n.em,{children:"stderr"}),"\u3092\u305D\u308C\u305E\u308C\u8FD4\u3057\u307E\u3059\u3002(\u4F8B\u3048\u3070\u30D4\u30AF\u30C1\u30E3\u306E\u3088\u3046\u306A)\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u3092\u6271\u3063\u3066\u3044\u308B\u5834\u5408\u3001\u6587\u5B57\u5217\u306E\u4EE3\u308F\u308A\u306BBLOB\u5F15\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["4D \u3067\u306F",(0,d.jsx)(n.strong,{children:"LAUNCH EXTERNAL PROCESS"})," \u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u4F7F\u7528\u53EF\u80FD\u3067\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/commands/set-environment-variable",children:"SET ENVIRONMENT VARIABLE"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u8A2D\u5B9A\u53EF\u80FD\u306A3\u3064\u306E\u7279\u5B9A\u306E\u74B0\u5883\u5909\u6570\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"_4D_OPTION_CURRENT_DIRECTORY"}),": \u958B\u59CB\u3059\u308B\u5916\u90E8\u30D7\u30ED\u30BB\u30B9\u306E\u30AB\u30EC\u30F3\u30C8\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3092\u8A2D\u5B9A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u5FC5\u305A\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA (macOS\u3067\u306FHFS\u30BF\u30A4\u30D7\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3001Windows\u3067\u306FDOS) \u306E\u30D1\u30B9\u540D\u3092",(0,d.jsx)(n.em,{children:"varValue"})," \u306B\u6E21\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"_4D_OPTION_HIDE_CONSOLE"}),' (Windows \u306E\u307F):DOS\u30B3\u30F3\u30BD\u30FC\u30EB\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u96A0\u3059\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u4ECA\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u96A0\u3059\u306B\u306F"True" \u3092',(0,d.jsx)(n.em,{children:"varValue"}),' \u306B\u6E21\u3057\u307E\u3059\u3002\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u8868\u793A\u3059\u308B\u306B\u306F"False" \u3092\u6E21\u3057\u307E\u3059\u3002']}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"_4D_OPTION_BLOCKING_EXTERNAL_PROCESS"}),': \u975E\u540C\u671F\u30E2\u30FC\u30C9\u3067\u5916\u90E8\u30D7\u30ED\u30BB\u30B9\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u4ED6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u305B\u3093\u3002\u975E\u540C\u671F\u5B9F\u884C\u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306F"False" \u3092\u3001\u540C\u671F\u5B9F\u884C\u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306F"True"(\u30C7\u30D5\u30A9\u30EB\u30C8\u5024)\u3092varValue \u306B\u6E21\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u5909\u6570\u306B\u95A2\u3057\u3066\u306F\u3001',(0,d.jsx)(n.em,{children:"varValue"}),' \u306B""(\u7A7A\u306E\u6587\u5B57\u5217)\u3092\u6E21\u3057\u3066\u3082\u4F55\u306E\u5909\u5316\u3082\u3042\u308A\u307E\u305B\u3093\u3002',(0,d.jsx)(n.br,{}),"\n\u74B0\u5883\u5909\u6570\u3092\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/commands/set-environment-variable",children:"SET ENVIRONMENT VARIABLE"}),' \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066"false" \u306B\u8A2D\u5B9A\u3057\u305F\u5834\u5408(\u975E\u540C\u671F\u5B9F\u884C)\u3001',(0,d.jsx)(n.em,{children:"outputStream"})," \u304A\u3088\u3073 ",(0,d.jsx)(n.em,{children:"errorStream"})," \u5F15\u6570\u306F\u8FD4\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u308C\u3089\u306E\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u3067\u306E",(0,d.jsx)(n.strong,{children:"LAUNCH EXTERNAL PROCESS"})," \u306E\u6B21\u306E\u547C\u3073\u51FA\u3057\u304B\u3089\u6709\u52B9\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"pid"}),"\u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,d.jsx)(n.em,{children:"pid"}),"\u5F15\u6570(\u500D\u9577\u6574\u6570\u578B)\u306F*_4D_OPTION_BLOCKING_EXTERNAL_PROCESS*\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u72B6\u614B\u306B\u95A2\u308F\u3089\u305A\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u30ED\u30FC\u30F3\u30C1\u3059\u308B\u306E\u306B\u4F5C\u6210\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u306E\u30B7\u30B9\u30C6\u30E0\u30EC\u30D9\u30EB\u306EID\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u60C5\u5831\u306B\u3088\u308A\u3001\u4F5C\u6210\u3057\u305F\u5916\u90E8\u30D7\u30ED\u30BB\u30B9\u3068\u305D\u306E\u5F8C\u3084\u308A\u3068\u308A(\u4F8B\u3048\u3070\u4E2D\u6B62\u7B49)\u3059\u308B\u306E\u304C\u5BB9\u6613\u306B\u306A\u308A\u307E\u3059\u3002\u30D7\u30ED\u30BB\u30B9\u306E\u30ED\u30FC\u30F3\u30C1\u306B\u5931\u6557\u3057\u305F\u5834\u5408\u3001",(0,d.jsx)(n.em,{children:"pid"}),"\u5F15\u6570\u306F\u8FD4\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"macos\u3067\u306E\u4F8B\u984C",children:"macOS\u3067\u306E\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"Application/Utilities\u30D5\u30A9\u30EB\u30C0\u306B\u3042\u308BmacOS \u30BF\u30FC\u30DF\u30CA\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["1. \u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3057\u3066\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B(",(0,d.jsx)(n.em,{children:"chmod"})," \u306F\u30D5\u30A1\u30A4\u30EB\u30A2\u30AF\u30BB\u30B9\u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3059\u308BmacOS \u30B3\u30DE\u30F3\u30C9\u3067\u3059)"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0LAUNCH EXTERNAL PROCESS("chmod +x /folder/myfile.txt")\n'})}),"\n",(0,d.jsxs)(n.p,{children:["2. \u30C6\u30AD\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u7DE8\u96C6\u3059\u308B(",(0,d.jsx)(n.em,{children:"cat"}),"\u306F\u30D5\u30A1\u30A4\u30EB\u3092\u7DE8\u96C6\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3059\u308BmacOS \u30DE\u30F3\u30C9\u3067\u3059)\u3002\u3053\u306E\u4F8B\u3067\u306F\u30B3\u30DE\u30F3\u30C9\u306E\u5B8C\u5168\u306A\u30A2\u30AF\u30BB\u30B9\u30D1\u30B9\u304C\u6E21\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var input;output : Text\n\xa0input:=""\n\xa0LAUNCH EXTERNAL PROCESS("/bin/cat /folder/myfile.txt";input;output)\n'})}),"\n",(0,d.jsxs)(n.p,{children:['3. "Users" \u30D5\u30A9\u30EB\u30C0\u306E\u5185\u5BB9\u3092\u53D6\u5F97\u3059\u308B(',(0,d.jsx)(n.em,{children:"ls -l"}),"\u306FDOS\u306E",(0,d.jsx)(n.em,{children:"dir"})," \u30B3\u30DE\u30F3\u30C9 \u306B\u76F8\u5F53\u3059\u308BmacOS \u30B3\u30DE\u30F3\u30C9\u3067\u3059)"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $In;$Out : Text\n\xa0LAUNCH EXTERNAL PROCESS("/bin/ls -l /Users";$In;$Out)\n'})}),"\n",(0,d.jsxs)(n.p,{children:['4. \u72EC\u7ACB\u3057\u3066\u3044\u308B"\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF" \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u3055\u305B\u308B\u306B\u306F\u3001',(0,d.jsx)(n.em,{children:"open"}),"\u30B7\u30B9\u30C6\u30E0\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u306E\u304C\u671B\u307E\u3057\u3044\u3067\u3059(\u3053\u306E\u5834\u5408\u3001",(0,d.jsx)(n.strong,{children:"LAUNCH EXTERNAL PROCESS"})," \u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3053\u3068\u3068\u540C\u3058\u52B9\u679C\u304C\u3042\u308A\u307E\u3059) \u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0LAUNCH EXTERNAL PROCESS("open /Applications/Calculator.app")\n'})}),"\n",(0,d.jsx)(n.h4,{id:"windows\u3067\u306E\u4F8B\u984C",children:"Windows\u3067\u306E\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"5. NotePad\u3092\u958B\u304F"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0LAUNCH EXTERNAL PROCESS("C:\\\\WINDOWS\\\\notepad.exe")\n'})}),"\n",(0,d.jsx)(n.p,{children:"6. Notepad\u3092\u958B\u304D\u3001\u7279\u5B9A\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u304F"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0LAUNCH EXTERNAL PROCESS("C:\\\\WINDOWS\\\\notepad.exe C:\\\\Docs\\\\new folder\\\\res.txt")\n'})}),"\n",(0,d.jsx)(n.p,{children:'7. MicrosoftR WordR\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u3055\u305B\u3066\u3001\u7279\u5B9A\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u304F(2\u3064\u306E""\u3092\u4F7F\u7528)'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0$mydoc:="C:\\\\Program Files\\\\Microsoft Office\\\\Office10\\\\WINWORD.EXE \\"C:\\\\Documents and Settings\\\\Mark\\\\Desktop\\\\MyDocs\\\\New folder\\\\test.xml\\""\n\xa0LAUNCH EXTERNAL PROCESS($mydoc;$tIn;$tOut)\n'})}),"\n",(0,d.jsx)(n.p,{children:"8. Perl\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u5B9F\u884C\u3059\u308B(ActivePerl\u3092\u5FC5\u8981\u3068\u3057\u307E\u3059):"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $input;$output : Text\n\xa0SET ENVIRONMENT VARIABLE("myvariable";"value")\n\xa0LAUNCH EXTERNAL PROCESS("D:\\\\Perl\\\\bin\\\\perl.exe D:\\\\Perl\\\\eg\\\\cgi\\\\env.pl";$input;$output)\n'})}),"\n",(0,d.jsx)(n.p,{children:"9. \u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u8868\u793A\u305B\u305A\u306B\u30AB\u30EC\u30F3\u30C8\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3055\u305B\u308B"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SET ENVIRONMENT VARIABLE("_4D_OPTION_CURRENT_DIRECTORY";"C:\\\\4D_VCS")\n\xa0SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")\n\xa0LAUNCH EXTERNAL PROCESS("mycommand")\n'})}),"\n",(0,d.jsx)(n.p,{children:"10. \u30E6\u30FC\u30B6\u304C\u9078\u629E\u3057\u305F\u5916\u90E8\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092Windows\u3067\u958B\u304F"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0$docname:=Select document("";"*.*";"Choose the file to open";0)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")\n\xa0\xa0\xa0\xa0LAUNCH EXTERNAL PROCESS("cmd.exe /C start \\"\\" \\""+$docname+"\\"")\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.p,{children:"11. Windows\u4E0A\u3067\u30D7\u30ED\u30BB\u30B9\u306E\u4E00\u89A7\u3092\u30EA\u30AF\u30A8\u30B9\u30C8:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $pid : Integer\n\xa0var $stdin;$stdout;$stderr : Text\n\xa0\n\xa0LAUNCH EXTERNAL PROCESS("tasklist";$pid)\xa0//PID\u306E\u307F\u3092\u53D6\u5F97\n\xa0LAUNCH EXTERNAL PROCESS("tasklist";$stdin;$stdout;$stderr;$pid)\xa0//\u5168\u3066\u306E\u60C5\u5831\u3092\u53D6\u5F97\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070 (\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u3001\u30E1\u30E2\u30EA\u304C\u8DB3\u308A\u306A\u3044\u306A\u3069) 0\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/open-url",children:"OPEN URL"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/set-environment-variable",children:"SET ENVIRONMENT VARIABLE"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"811"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return c}});var r=s(667294);let d={},l=r.createContext(d);function c(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);