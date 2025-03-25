"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14463"],{629702:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>i,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/encrypt-data-file","title":"Encrypt data file","description":"Encrypt data file ( structurePath ; dataPath {; newPassPhrase {; archiveFolder {; curPassPhrase {; methodName}}}} ) Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/encrypt-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/encrypt-data-file","permalink":"/docs/ja/commands/encrypt-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fencrypt-data-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"encrypt-data-file","title":"Encrypt data file","slug":"/commands/encrypt-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Encrypt data BLOB","permalink":"/docs/ja/commands/encrypt-data-blob"},"next":{"title":"New data key","permalink":"/docs/ja/commands/new-data-key"}}'),d=s("785893"),t=s("250065");let l={id:"encrypt-data-file",title:"Encrypt data file",slug:"/commands/encrypt-data-file",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Encrypt data file"})," ( ",(0,d.jsx)(n.em,{children:"structurePath"})," ; ",(0,d.jsx)(n.em,{children:"dataPath"})," {; ",(0,d.jsx)(n.em,{children:"newPassPhrase"})," {; ",(0,d.jsx)(n.em,{children:"archiveFolder"})," {; ",(0,d.jsx)(n.em,{children:"curPassPhrase"})," {; ",(0,d.jsx)(n.em,{children:"methodName"}),"}}}} ) : Text<br/",(0,d.jsx)(n.strong,{children:"Encrypt data file"})," ( ",(0,d.jsx)(n.em,{children:"structurePath"})," ; ",(0,d.jsx)(n.em,{children:"dataPath"})," {; ",(0,d.jsx)(n.em,{children:"newDataKey"})," {; ",(0,d.jsx)(n.em,{children:"archiveFolder"})," {; ",(0,d.jsx)(n.em,{children:"curDataKey"})," {; ",(0,d.jsx)(n.em,{children:"methodName"}),"}}}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"structurePath"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dataPath"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u6697\u53F7\u5316\u3059\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u30D1\u30B9\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"newPassPhrase | newDataKey"}),(0,d.jsx)(n.td,{children:"\u30C6\u30AD\u30B9\u30C8, \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u66F4\u65B0\u3057\u305F\u3044\u5834\u5408: \u65B0\u3057\u3044\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA (\u30C6\u30AD\u30B9\u30C8)\u307E\u305F\u306F\u65B0\u3057\u3044\u6697\u53F7\u5316\u30AD\u30FC(\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"archiveFolder"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u5B58\u3057\u3066\u304A\u304F\u30D5\u30A9\u30EB\u30C0\u306E\u30D1\u30B9\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"curPassPhrase | curDataKey"}),(0,d.jsx)(n.td,{children:"\u30C6\u30AD\u30B9\u30C8, \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u306E\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA(\u30C6\u30AD\u30B9\u30C8)\u307E\u305F\u306F\u30AB\u30EC\u30F3\u30C8\u306E\u6697\u53F7\u5316\u30AD\u30FC(\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"methodName"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"4D\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u30E1\u30BD\u30C3\u30C9\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u4FDD\u5B58\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0\u306E\u5B8C\u5168\u306A\u30D1\u30B9\u540D"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Encrypt data file"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3092\u4F7F\u7528\u6570\u3068\u3001",(0,d.jsx)(n.em,{children:"structurePath"})," \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u3066\u3044\u308B\u3001",(0,d.jsx)(n.em,{children:"dataPath"})," \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u6697\u53F7\u5316\u307E\u305F\u306F\u518D\u6697\u53F7\u5316\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u307E\u305F\u3053\u308C\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u6697\u53F7\u5316\u3092\u53D6\u308A\u9664\u304F\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3059\u308B\u7DE8\u96C6\u306F\u884C\u308F\u305A\u3001\u5143\u306E\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u53D6\u308B\u305F\u3081\u306B\u4F5C\u6210\u3055\u308C\u305F\u5B8C\u5168\u306A\u30D1\u30B9\u540D\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6CE8:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u65E2\u306B\u958B\u304B\u308C\u3066\u3044\u308B\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3057\u3066\u306F\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30ED\u30FC\u30AB\u30EB\u30E2\u30FC\u30C9\u306E4D \u304B\u3001\u3042\u308B\u3044\u306F4D Server (\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u30FC)\u304B\u3089\u3057\u304B\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002\u6697\u53F7\u5316\u3055\u308C\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306F",(0,d.jsx)(n.em,{children:"structurePath"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3068\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:['\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306B\u304A\u3044\u3066"\u6697\u53F7\u5316\u53EF\u80FD"\u3068\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u305F\u5168\u3066\u306E\u30C6\u30FC\u30D6\u30EB\u304C\u6697\u53F7\u5316\u3055\u308C\u308B\u304B\u3001\u307E\u305F\u306F\u6697\u53F7\u5316\u304C\u5909\u66F4\u3055\u308C\u307E\u3059\u3002\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001',(0,d.jsx)(n.em,{children:"\u6697\u53F7\u5316\u53EF\u80FD"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u8B66\u544A:"})," \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u6697\u53F7\u5316\u306F\u6642\u9593\u304C\u304B\u304B\u308B\u51E6\u7406\u3067\u3059\u3002\u305D\u306E\u305F\u3081\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u304C\u8868\u793A\u3055\u308C\u307E\u3059(\u3053\u308C\u306F\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u3063\u3066\u4E2D\u65AD\u53EF\u80FD\u3067\u3059)\u3002\u307E\u305F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u6697\u53F7\u5316\u30B7\u30FC\u30AF\u30A8\u30F3\u30B9\u306B\u306F\u3001\u5727\u7E2E\u306E\u30B9\u30C6\u30C3\u30D7\u304C\u542B\u307E\u308C\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"structurePath"})," \u5F15\u6570\u306B\u306F\u3001\u7A7A\u306E\u6587\u5B57\u5217\u304B\u3001\u6697\u53F7\u5316\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306B\u95A2\u9023\u3065\u3051\u3089\u308C\u3066\u3044\u308B\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u5B8C\u5168\u306A\u30D1\u30B9\u540D\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u60C5\u5831\u306F\u6697\u53F7\u5316\u624B\u7D9A\u304D\u306E\u305F\u3081\u306B\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u6A19\u6E96\u306E",(0,d.jsx)(n.strong,{children:"\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F"}),"\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u3001\u30E6\u30FC\u30B6\u30FC\u306F\u4F7F\u7528\u3055\u308C\u308B\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306B\u306F\u3001OS\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u3055\u308C\u305F\u5B8C\u5168\u306A\u30D1\u30B9\u540D\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5F15\u6570\u306B\u306F\u3001\u7A7A\u306E\u6587\u5B57\u5217\u304B\u3001\u30D5\u30A1\u30A4\u30EB\u540D\u304B\u3001\u307E\u305F\u306F\u5B8C\u5168\u306A\u30D1\u30B9\u540D\u3092\u6E21\u3057\u307E\u3059(\u30D1\u30B9\u540D\u306FOS\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059)\u3002\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u6A19\u6E96\u306E",(0,d.jsx)(n.strong,{children:"\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F"}),"\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u3001\u30E6\u30FC\u30B6\u30FC\u306F\u4F7F\u7528\u3055\u308C\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F",(0,d.jsx)(n.em,{children:"structurePath"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3068\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u540D\u3060\u3051\u3092\u6E21\u3057\u305F\u5834\u5408\u30014D \u306F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u3058\u968E\u5C64\u306E\u4E2D\u3092\u63A2\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["**\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u6700\u521D\u306B\u6697\u53F7\u5316\u3059\u308B\u3068\u304D\u306B\u9650\u308A\u3001**\u6E21\u3059\u306E\u306F",(0,d.jsx)(n.em,{children:"newPassPhrase"})," \u3042\u308B\u3044\u306F ",(0,d.jsx)(n.em,{children:"newDataKey"})," \u5F15\u6570\u3060\u3051\u3067\u3059(\u9006\u306B\u3001",(0,d.jsx)(n.em,{children:"curPassPhrase"})," \u307E\u305F\u306F ",(0,d.jsx)(n.em,{children:"curDataKey"})," \u5F15\u6570\u306F\u6E21\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093):\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"newPassPhrase"}),": \u6697\u53F7\u5316\u30AD\u30FC\u3092\u751F\u6210\u3059\u308B\u306E\u306B\u4F7F\u7528\u3059\u308B\u6587\u5B57\u5217(SHA 256-bit)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"newDataKey"}),": \u65B0\u3057\u3044\u30C7\u30FC\u30BF\u6697\u53F7\u5316\u30AD\u30FC\u3092(",(0,d.jsx)(n.em,{children:"encodedKey"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306B)\u683C\u7D0D\u3057\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3002\u3053\u306E\u30AD\u30FC\u306F",(0,d.jsx)(n.a,{href:"/docs/ja/commands/new-data-key",children:"New data key"})," \u30B3\u30DE\u30F3\u30C9\u3067\u751F\u6210\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," ",(0,d.jsx)(n.em,{children:"newPassPhrase"})," (\u3042\u308B\u3044\u306F ",(0,d.jsx)(n.em,{children:"newDataKey"}),") \u306F4D \u30AD\u30FC\u30C1\u30A7\u30FC\u30F3\u306B\u306F\u8FFD\u52A0\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u518D\u6697\u53F7\u5316\u3059\u308B\u3068\u304D"}),"(\u3064\u307E\u308A\u65E2\u306B\u6697\u53F7\u5316\u3055\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u3082\u3046\u4E00\u5EA6\u6697\u53F7\u5316\u3059\u308B\u3068\u304D)\u306F\u3001",(0,d.jsx)(n.em,{children:"newPassPhrase"})," (\u3042\u308B\u3044\u306F ",(0,d.jsx)(n.em,{children:"newDataKey"}),") \u5F15\u6570\u3068\u30AB\u30EC\u30F3\u30C8\u306E\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA(\u307E\u305F\u306F\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u30AD\u30FC)\u306E\u4E21\u65B9\u3092\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u518D\u6697\u53F7\u5316\u306E\u30DE\u30FC\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5FA9\u53F7\u5316\u304C\u5FC5\u8981\u306B\u306A\u308B\u304B\u3089\u3067\u3059\u3002\u3053\u308C\u3089\u306E\u60C5\u5831\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u30B3\u30DE\u30F3\u30C9\u306B",(0,d.jsx)(n.em,{children:"curPassPhrase"})," (\u307E\u305F\u306F ",(0,d.jsx)(n.em,{children:"curDataKey"}),") \u5F15\u6570\u3092\u6E21\u3059"]}),"\n",(0,d.jsx)(n.li,{children:"4D \u30AD\u30FC\u30C1\u30A7\u30FC\u30F3\u3067\u6E21\u3059"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u5168\u3066\u306E\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u6697\u53F7\u5316\u3092\u524A\u9664\u3059\u308B"}),"\u305F\u3081\u306B\u306F\u3001\u7A7A\u306E\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA\u307E\u305F\u306F",(0,d.jsx)(n.em,{children:"null"})," \u30C7\u30FC\u30BF\u30AD\u30FC\u3092",(0,d.jsx)(n.em,{children:"newPassPhrase"})," (\u3042\u308B\u3044\u306F ",(0,d.jsx)(n.em,{children:"newDataKey"}),')\u5F15\u6570\u3068\u3057\u3066\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u3068\u304D\u30AB\u30EC\u30F3\u30C8\u306E\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA\u307E\u305F\u306F\u30C7\u30FC\u30BF\u30AD\u30FC\u304C\u65E2\u306B\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u5FA9\u53F7\u5316\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u201CReplaced files (Decrypting) YYYY-MM-DD HH-MM-SS\u201D/"Decrypted files YYYY-MM-DD HH-MM-SS"\u3068\u3044\u3046\u540D\u524D\u306E\u30D5\u30A9\u30EB\u30C0\u5185\u306B\u751F\u6210/\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059\u3002']}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u7DE8\u96C6\u3057\u307E\u305B\u3093\u3002\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u306F",(0,d.jsx)(n.em,{children:"archiveFolder"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30D5\u30A9\u30EB\u30C0\u306B\u79FB\u52D5\u3055\u308C\u307E\u3059(\u5F15\u6570\u304C\u6E21\u3055\u308C\u3066\u3044\u308C\u3070)\u3002\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u306F\u7279\u6B8A\u306A\u30D5\u30A9\u30EB\u30C0\u3067\u3001",(0,d.jsx)(n.em,{children:"Replaced files (Encrypting) YYYY-MM-DD HH-MM-SS"})," or ",(0,d.jsx)(n.em,{children:"Replaced files (Decrypting) YYYY-MM-DD HH-MM-SS"}),' \u3068\u3044\u3046\u540D\u524D\u304C\u3064\u3051\u3089\u308C\u3001YYYY-MM-DD HH-MM-SS \u306F\u51E6\u7406\u3092\u3057\u305F\u65E5\u6642\u3092\u8868\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001 "Replaced files (Encrypting) 2018-09-29 13-00-35"\u3068\u3044\u3046\u3088\u3046\u306A\u540D\u524D\u3067\u3059\u3002\u65B0\u305F\u306B\u6697\u53F7\u5316\u307E\u305F\u306F\u8907\u5408\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306F\u81EA\u52D5\u7684\u306B\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u3068\u5165\u308C\u63DB\u3048\u3089\u308C\u307E\u3059\u3002',(0,d.jsx)(n.br,{}),'\n\u5F15\u6570\u306B"" (\u7A7A\u306E\u6587\u5B57\u5217)\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u6A19\u6E96\u306E',(0,d.jsx)(n.strong,{children:"\u30D5\u30A9\u30EB\u30C0\u3092\u958B\u304F"}),"\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u304C\u8868\u793A\u3055\u308C\u3001\u30E6\u30FC\u30B6\u30FC\u306F\u4F5C\u6210\u3055\u308C\u308B\u30D5\u30A9\u30EB\u30C0\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u3059\u3050\u96A3\u306B\u4F5C\u6210\u3055\u308C\u305F\u3001\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u62BC\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0\u306B\u81EA\u52D5\u7684\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"method"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u6697\u53F7\u5316\u30D7\u30ED\u30BB\u30B9\u306E\u9014\u4E2D\u306B\u983B\u7E41\u306B\u547C\u3073\u51FA\u3055\u308C\u308B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u30E1\u30BD\u30C3\u30C9\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u7A7A\u306E\u6587\u5B57\u5217\u307E\u305F\u306F\u7121\u52B9\u306A\u30E1\u30BD\u30C3\u30C9\u540D\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u3053\u306E\u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059(\u30E1\u30BD\u30C3\u30C9\u306F\u547C\u3073\u51FA\u3055\u308C\u307E\u305B\u3093)\u3002\u547C\u3073\u51FA\u3055\u308C\u308B\u3068\u304D\u3001\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u547C\u3073\u51FA\u3057\u3092\u884C\u3063\u3066\u3044\u308B\u30A4\u30D9\u30F3\u30C8\u306E\u578B\u306B\u3088\u3063\u3066\u3001\u6700\u5927\u30675\u3064\u307E\u3067\u306E\u5F15\u6570\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059(\u4EE5\u4E0B\u53C2\u7167)\u3002\u3053\u308C\u3089\u306E\u5F15\u6570\u3092\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u5BA3\u8A00\u3057\u3066\u304A\u304F\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u4E0B\u3055\u3044:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u30A4\u30D9\u30F3\u30C8"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"$1 (\u500D\u9577\u6574\u6570)"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"$2 (\u500D\u9577\u6574\u6570)"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"$3 (\u30C6\u30AD\u30B9\u30C8)"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"$4 (\u500D\u9577\u6574\u6570)"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"$5 (\u500D\u9577\u6574\u6570)"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Message"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:'\u30D7\u30ED\u30BB\u30B9\u30E1\u30C3\u30BB\u30FC\u30B8(\u4F8B."Encrypting BLOBs in table Documents")'}),(0,d.jsx)(n.td,{children:"\u5B8C\u4E86\u30D1\u30FC\u30BB\u30F3\u30C6\u30FC\u30B8(\u4F8B. 50)"}),(0,d.jsx)(n.td,{children:"\u4E88\u7D04\u6E08\u307F"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Encryption finished"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:'OK \u30E1\u30C3\u30BB\u30FC\u30B8 (\u4F8B "Done")'}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"\u4E88\u7D04\u6E08\u307F"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Error"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsxs)(n.td,{children:["\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8 (",(0,d.jsx)(n.em,{children:"\u4F8B"}),' "Problem on the XX data table: Encryption key has not been provided")']}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"\u4E88\u7D04\u6E08\u307F"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"End of execution"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:'"Done"'}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"\u4E88\u7D04\u6E08\u307F"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Warning(*)"}),(0,d.jsx)(n.td,{children:"5"}),(0,d.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u578B"}),(0,d.jsx)(n.td,{children:"\u30A8\u30E9\u30FC\u306E\u30C6\u30AD\u30B9\u30C8"}),(0,d.jsx)(n.td,{children:"\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u756A\u53F7\u307E\u305F\u306F\u30C6\u30FC\u30D6\u30EB"}),(0,d.jsx)(n.td,{children:"\u4E88\u7D04\u6E08\u307F"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["(*) \u691C\u8A3C\u30B9\u30C6\u30C3\u30D7\u3067\u8FD4\u3055\u308C\u305F\u8B66\u544A(",(0,d.jsx)(n.a,{href:"/docs/ja/commands/verify-data-file",children:"VERIFY DATA FILE"})," \u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u306E\u3053\u3068)"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u623B\u308A\u5024"})}),"\n",(0,d.jsx)(n.p,{children:"\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u79FB\u884C\u5148\u30D5\u30A9\u30EB\u30C0\u306E\u5B9F\u969B\u306E\u30D1\u30B9\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u521D\u3081\u3066\u6697\u53F7\u5316\u3059\u308B\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $folder;$passphrase : Text\n\xa0$passphrase:=Request("Enter the passphrase")\n\xa0If(OK=1)\n\xa0\xa0// \u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306F\u6697\u53F7\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u305F\u3081\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u6697\u53F7\u5316\u30AD\u30FC\u306F\u306A\u3044\n\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD";$passphrase)\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306E\u518D\u6697\u53F7\u5316\u3092\u3059\u308B(\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA\u3092\u5909\u66F4\u3059\u308B)\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $folder;$targetFolder;$passphrase;$newPassphrase : Text\n\xa0$passphrase:=Request("Enter the current passphrase")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$newPassphrase:=Request("Enter the new passphrase")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$targetFolder:=Get 4D folder(Database folder)+"Save"+Folder separator\n\xa0\xa0// \u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u304C\u6697\u53F7\u5316\u3055\u308C\u308B\u306E\u3067\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u6697\u53F7\u5316\u30AD\u30FC\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD";$newPassphrase;$targetFolder;$passphrase)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsx)(n.p,{children:"\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u6697\u53F7\u5316\u3092\u53D6\u308A\u9664\u304F\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $folder;$targetFolder;$passphrase : Text\n\xa0$passphrase:=Request("Enter the passphrase")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$targetFolder:=Get 4D folder(Database folder)+"DecryptedData"+Folder separator\n\xa0\xa0// \u65B0\u3057\u3044\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA\u3068\u3057\u3066\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3059\u3053\u3068\u3067\u5168\u3066\u306E\u30C7\u30FC\u30BF\u304C\u5FA9\u53F7\u5316\u3055\u308C\u307E\u3059\n\xa0\xa0// \u30AB\u30EC\u30F3\u30C8\u306E\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA\u3092\u63D0\u4F9B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\n\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD";"";$targetFolder;$passphrase)\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,d.jsx)(n.p,{children:"\u30AB\u30EC\u30F3\u30C8\u30AD\u30FC\u3092\u4F7F\u7528\u3057\u3066\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u518D\u6697\u53F7\u5316\u3059\u308B\u5834\u5408\u3092\u8003\u3048\u307E\u3059(\u4F8B\u3048\u3070\u3001\u4E00\u90E8\u306E\u30C6\u30FC\u30D6\u30EB\u3067\u6697\u53F7\u5316\u30B9\u30C6\u30FC\u30BF\u30B9\u304C\u5909\u66F4\u3055\u308C\u305F\u306A\u3069\u306E\u5834\u5408\u3067\u3059):"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $folder;$passPhrase : Text\n\xa0var $added : Boolean\n\xa0\n\xa0$passphrase:=Request("Enter the passphrase")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$added:=Register data key($passphrase)\xa0// \u30C7\u30FC\u30BF\u30AD\u30FC\u306F4D \u30AD\u30FC\u30C1\u30A7\u30FC\u30F3\u306B\u8FFD\u52A0\u3055\u308C\u305F\n\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD")\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/data-file-encryption-status",children:"Data file encryption status"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/new-data-key",children:"New data key"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1610"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var r=s(667294);let d={},t=r.createContext(d);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);