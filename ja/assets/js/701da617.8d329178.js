"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54760"],{779066:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>d,assets:()=>l,toc:()=>o,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/import-data","title":"IMPORT DATA","description":"IMPORT DATA ( fileName {; project {; *}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/import-data.md","sourceDirName":"commands-legacy","slug":"/commands/import-data","permalink":"/docs/ja/commands/import-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-data.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"import-data","title":"IMPORT DATA","slug":"/commands/import-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPORT TEXT","permalink":"/docs/ja/commands/export-text"},"next":{"title":"IMPORT DIF","permalink":"/docs/ja/commands/import-dif"}}'),t=s("785893"),r=s("250065");let i={id:"import-data",title:"IMPORT DATA",slug:"/commands/import-data",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"IMPORT DATA"})," ( ",(0,t.jsx)(e.em,{children:"fileName"})," {; ",(0,t.jsx)(e.em,{children:"project"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fileName"}),(0,t.jsx)(e.td,{children:"Text"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30A4\u30F3\u30DD\u30FC\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u30D5\u30EB\u30D1\u30B9\u540D"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"project"}),(0,t.jsx)(e.td,{children:"Text, Blob"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30A4\u30F3\u30DD\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"\u30A4\u30F3\u30DD\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u65B0\u3057\u3044\u5185\u5BB9 (*\u5F15\u6570\u6307\u5B9A\u6642)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"*"}),(0,t.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30A4\u30F3\u30DD\u30FC\u30C8\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5185\u5BB9\u3092\u66F4\u65B0"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"IMPORT DATA"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30FC\u30BF\u3092",(0,t.jsx)(e.em,{children:"fileName"}),"\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u30024D\u306F\u4EE5\u4E0B\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u3092\u884C\u3048\u307E\u3059: \u30C6\u30AD\u30B9\u30C8\u3001\u56FA\u5B9A\u9577\u30C6\u30AD\u30B9\u30C8\u3001XML\u3001SYLK\u3001DIF\u3001DBF\uFF08dBase\uFF09\u304A\u3088\u30734D\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"fileName"}),"\u306B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3059\u3068\u3001",(0,t.jsx)(e.strong,{children:"IMPORT DATA"}),"\u306F\u6A19\u6E96\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u3066\u3001\u30E6\u30FC\u30B6\u304C\u8AAD\u307F\u8FBC\u307F\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D\u3001\u30BF\u30A4\u30D7\u304A\u3088\u3073\u5834\u6240\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u53D7\u3051\u5165\u308C\u3089\u308C\u308B\u3068\u3001Document\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B\u30D5\u30A1\u30A4\u30EB\u30D1\u30B9\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u30E6\u30FC\u30B6\u304C",(0,t.jsx)(e.strong,{children:"\u30AD\u30E3\u30F3\u30BB\u30EB"}),"\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u306F\u505C\u6B62\u3055\u308C\u3066\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F0\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570",(0,t.jsx)(e.em,{children:"project"}),"\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u8AAD\u307F\u8FBC\u307F\u306F\u30E6\u30FC\u30B6\u30FC\u306E\u64CD\u4F5C\u3092\u7D4C\u308B\u3053\u3068\u306A\u304F\u76F4\u63A5\u884C\u308F\u308C\u307E\u3059 (\u5F8C\u8FF0\u306E ",(0,t.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6307\u5B9A\u3057\u306A\u3044\u9650\u308A)\u3002 \u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u3068\u3001\u8AAD\u307F\u8FBC\u307F\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30E6\u30FC\u30B6\u30FC\u306F\u8AAD\u307F\u8FBC\u307F\u30D1\u30E9\u30E1\u30BF\u30FC\u3092\u6307\u5B9A\u3059\u308B\u304B\u3001\u65E2\u5B58\u306E\u8AAD\u307F\u8FBC\u307F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30ED\u30FC\u30C9\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u8AAD\u307F\u8FBC\u307F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u8AAD\u307F\u8FBC\u3080\u30C6\u30FC\u30D6\u30EB\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u533A\u5207\u308A\u7B26\u53F7\u306E\u3088\u3046\u306A\u8AAD\u307F\u8FBC\u307F\u306B\u95A2\u3059\u308B\u3059\u3079\u3066\u306E\u30D1\u30E9\u30E1\u30BF\u30FC\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002",(0,t.jsx)(e.em,{children:"project"}),"\u5F15\u6570\u306B\u306FXML\u3067\u8A18\u8FF0\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u3001\u5B9A\u7FA9\u6E08\u307F\u306EDOM\u8981\u7D20\u3078\u306E\u53C2\u7167\u3092\u683C\u7D0D\u3057\u305F\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u3001\u307E\u305F\u306FBLOB\u306E\u3044\u305A\u308C\u304B\u3092\u6E21\u305B\u307E\u3059\u3002\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u30D7\u30ED\u30B0\u30E9\u30E0 (XML\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u307F)\u3001\u307E\u305F\u306F\u8AAD\u307F\u8FBC\u307F\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3067\u4E8B\u524D\u306B\u5B9A\u7FA9\u6E08\u307F\u306E\u30D1\u30E9\u30E1\u30BF\u30FC\u3092\u30ED\u30FC\u30C9\u3059\u308B\u3053\u3068\u3067\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002\u5F8C\u8005\u306E\u5834\u5408\u30012\u3064\u306E\u65B9\u6CD5\u3092\u5229\u7528\u3067\u304D\u307E\u3059:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u7A7A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5F15\u6570\u304A\u3088\u3073\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,t.jsx)(e.em,{children:"*"})," \u4ED8\u304D\u3067",(0,t.jsx)(e.strong,{children:"IMPORT DATA"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3001\u30C0\u30A4\u30A2\u30ED\u30B0\u3067\u306E\u8A2D\u5B9A\u5185\u5BB9\u3092",(0,t.jsx)(e.em,{children:"project"}),"\u5F15\u6570\u306B\u53D7\u3051\u53D6\u3063\u3066\u3001\u305D\u308C\u3092\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306FBLOB\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u683C\u7D0D\u3057\u307E\u3059 (\u5F8C\u8FF0)\u3002\u3053\u306E\u65B9\u6CD5\u3067\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306B\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30C7\u30A3\u30B9\u30AF\u306B\u4FDD\u5B58\u3057\u3001",(0,t.jsx)(e.a,{href:"/docs/ja/commands/dom-parse-xml-source",children:"DOM Parse XML source"}),"\u30B3\u30DE\u30F3\u30C9\u7B49\u3092\u4F7F\u7528\u3057\u3066\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u305D\u306E\u53C2\u7167\u3092",(0,t.jsx)(e.em,{children:"project"}),"\u5F15\u6570\u306B\u6E21\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F:"})," 4D v12\u3088\u308A\u3001\u8AAD\u307F\u8FBC\u307F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306FXML\u306B\u30A8\u30F3\u30B3\u30FC\u30C9\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u30024D\u306F\u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u4F5C\u6210\u3055\u308C\u305F\u8AAD\u307F\u8FBC\u307F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8 (BLOB\u5F62\u5F0F) \u3092\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3057\u304B\u30574D v12\u4EE5\u964D\u3067\u4F5C\u6210\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092v11\u4EE5\u524D\u3067\u958B\u304F\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u8AAD\u307F\u8FBC\u307F\u30D5\u30A1\u30A4\u30EB\u3092\u6271\u3046\u969B\u306F\u3001\u4EE5\u964D\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570 ",(0,t.jsx)(e.em,{children:"*"})," \u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u308C\u3070\u3001",(0,t.jsx)(e.em,{children:"project"}),"\u306B\u5B9A\u7FA9\u3055\u308C\u305F\u30D1\u30E9\u30E1\u30BF\u30FC\u3068\u5171\u306B\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u3001\u5B9A\u7FA9\u6E08\u307F\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F7F\u7528\u3057\u3064\u3064\u3001\u3044\u304F\u3064\u304B\u306E\u30D1\u30E9\u30E1\u30BF\u30FC\u3092\u5909\u66F4\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u3082\u306E\u3067\u3059\u3002\u3055\u3089\u306B\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u9589\u3058\u305F\u5F8C\u306B\u3001",(0,t.jsx)(e.em,{children:"project"}),"\u5F15\u6570\u306B\u306F\u3001\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30D1\u30E9\u30E1\u30BF\u30FC\u304C\u683C\u7D0D\u3055\u308C\u3001\u3053\u306E\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092BLOB\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u30C7\u30A3\u30B9\u30AF\u7B49\u306B\u4FDD\u5B58\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u304C\u6B63\u5E38\u306B\u7D42\u4E86\u3059\u308B\u3068\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F1\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Note:"})," \u7A7A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F7F\u7528\u3057\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4FDD\u5B58\u3059\u308B\u4F8B\u984C\u306F",(0,t.jsx)(e.a,{href:"/docs/ja/commands/export-data",title:"EXPORT DATA",children:"EXPORT DATA"})," \u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,t.jsx)(e.p,{children:"\u6A19\u6E96\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u5B58\u307E\u305F\u306F\u8AAD\u307F\u8FBC\u307F\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3067\u30E6\u30FC\u30B6\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u8AAD\u307F\u8FBC\u307F\u304C\u884C\u308F\u308C\u308B\u30681\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/export-data",children:"EXPORT DATA"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/import-dif",children:"IMPORT DIF"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/import-sylk",children:"IMPORT SYLK"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/import-text",children:"IMPORT TEXT"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"665"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2713"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(e.td,{children:"OK"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var d=s(667294);let t={},r=d.createContext(t);function i(n){let e=d.useContext(r);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),d.createElement(r.Provider,{value:e},n.children)}}}]);