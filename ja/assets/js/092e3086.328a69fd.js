"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5368"],{659429:function(n,e,t){t.r(e),t.d(e,{default:()=>j,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>x,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/text-to-blob","title":"TEXT TO BLOB","description":"TEXT TO BLOB ( text ; BLOB {; textFormat {; offset | *}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/text-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/text-to-blob","permalink":"/docs/ja/commands/text-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftext-to-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"text-to-blob","title":"TEXT TO BLOB","slug":"/commands/text-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET BLOB SIZE","permalink":"/docs/ja/commands/set-blob-size"},"next":{"title":"VARIABLE TO BLOB","permalink":"/docs/ja/commands/variable-to-blob"}}'),d=t("785893"),r=t("250065");let l={id:"text-to-blob",title:"TEXT TO BLOB",slug:"/commands/text-to-blob",displayed_sidebar:"docs"},c=void 0,i={},x=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u6CE8",id:"\u6CE8",level:3},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"TEXT TO BLOB"})," ( ",(0,d.jsx)(e.em,{children:"text"})," ; ",(0,d.jsx)(e.em,{children:"BLOB"})," {; ",(0,d.jsx)(e.em,{children:"textFormat"})," {; offset | *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"text"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"BLOB\u306B\u66F8\u304D\u8FBC\u3080\u30C6\u30AD\u30B9\u30C8"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Blob"}),(0,d.jsx)(e.td,{children:"Blob"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u308BBLOB"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"textFormat"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u6587\u5B57\u30BB\u30C3\u30C8"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"offset | *"}),(0,d.jsx)(e.td,{children:"\u5909\u6570, \u6F14\u7B97\u5B50"}),(0,d.jsx)(e.td,{children:"\u2194"}),(0,d.jsx)(e.td,{children:"BLOB\u5185\u306E\u30AA\u30D5\u30BB\u30C3\u30C8 (\u30D0\u30A4\u30C8\u5358\u4F4D) \u307E\u305F\u306F\u5024\u3092\u8FFD\u52A0\u3059\u308B\u5834\u5408 *"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"*\u3067\u306A\u3044\u5834\u5408\u3001\u66F8\u304D\u8FBC\u307F\u5F8C\u306E\u65B0\u3057\u3044\u30AA\u30D5\u30BB\u30C3\u30C8"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"TEXT TO BLOB"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u30C6\u30AD\u30B9\u30C8\u5024 ",(0,d.jsx)(e.em,{children:"text"}),"\u3092BLOB ",(0,d.jsx)(e.em,{children:"blob"}),"\u306B\u66F8\u304D\u8FBC\u307F\u307E\u3059\u3002\u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u3001\u66F8\u304D\u8FBC\u3080\u30C6\u30AD\u30B9\u30C8\u5024\u306E\u5185\u90E8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u6587\u5B57\u30BB\u30C3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3092\u884C\u3046\u306B\u306F\u3001",(0,d.jsx)(e.em,{children:"BLOB"}),"\u30C6\u30FC\u30DE\u306E\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3046\u3061\u3044\u305A\u308C\u304B\u3092",(0,d.jsx)(e.em,{children:"textFormat"})," \u5F15\u6570\u306B\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mac C string"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mac Pascal string"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mac text with length"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mac text without length"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"UTF8 C string"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"UTF8 text with length"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"5"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"UTF8 text without length"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"6"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"textFormat"})," \u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30674D\u306FMac C String\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u30024D\u30D0\u30FC\u30B8\u30E7\u30F311\u4EE5\u964D\u3067\u4F5C\u6210\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306F\u30014D\u306F\u30C6\u30AD\u30B9\u30C8\u306E\u51E6\u7406\u306B\u30C7\u30D5\u30A9\u30EB\u30C8\u3067Unicode\u6587\u5B57\u30BB\u30C3\u30C8 (UTF-8) \u3092\u6271\u3044\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u3053\u306E\u6587\u5B57\u30BB\u30C3\u30C8\u3092\u5229\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u201CUTF8\u201D\u304B\u3089\u59CB\u307E\u308B\u5B9A\u6570\u306F\u3001Unicode\u30E2\u30FC\u30C9\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.li,{children:"\u201CMac\u201D\u304B\u3089\u59CB\u307E\u308B\u5B9A\u6570\u306F\u300132 KB\u307E\u3067\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u6271\u3048\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(e.li,{children:["UTF-8\u4EE5\u5916\u306E\u6587\u5B57\u30BB\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F",(0,d.jsx)(e.a,{href:"/docs/ja/commands/convert-from-text",children:"CONVERT FROM TEXT"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u308C\u3089\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u30C6\u30AD\u30B9\u30C8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"})}),(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u8AAC\u660E\u3068\u4F8B\u984C"})})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"C string"}),(0,d.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8\u306FNULL\u6587\u5B57 (ASCII\u30B3\u30FC\u30C9 $00)\u3067\u7D42\u4E86\u3059\u308B"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.em,{children:"UTF8"})}),(0,d.jsx)(e.td,{children:'"" --\x3e $00'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:'"Caf\xe9" --\x3e $43 61 66 C3 A9 00'}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.em,{children:"Mac"})}),(0,d.jsx)(e.td,{children:'"" --\x3e $00'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:'"Caf\xe9" --\x3e $43 61 66 8E 00'}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Pascal string"}),(0,d.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8\u306E\u524D\u306B1\u30D0\u30A4\u30C8\u306E\u30C6\u30AD\u30B9\u30C8\u9577\u304C\u7F6E\u304B\u308C\u308B"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.em,{children:"UTF8"})}),(0,d.jsx)(e.td,{children:"-"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"-"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.em,{children:"Mac"})}),(0,d.jsx)(e.td,{children:'"" --\x3e $00'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:'"Caf\xe9" --\x3e $04 43 61 66 8E'}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Text with length"}),(0,d.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8\u306E\u524D\u306B4\u30D0\u30A4\u30C8 (UTF8) \u307E\u305F\u306F2\u30D0\u30A4\u30C8 (Mac) \u306E\u30C6\u30AD\u30B9\u30C8\u9577\u304C\u7F6E\u304B\u308C\u308B"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.em,{children:"UTF8"})}),(0,d.jsx)(e.td,{children:'"" --\x3e $00 00 00 00'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:'"Caf\xe9" --\x3e $00 00 00 05 43 61 66 C3 A9'}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.em,{children:"Mac"})}),(0,d.jsx)(e.td,{children:'"" --\x3e $00 00'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:'"Caf\xe9" --\x3e $00 04 43 61 66 8E'}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Text without length"}),(0,d.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8\u306F\u305D\u306E\u6587\u5B57\u3060\u3051\u3067\u69CB\u6210\u3055\u308C\u308B"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.em,{children:"UTF8"})}),(0,d.jsx)(e.td,{children:'"" --\x3e \u30C7\u30FC\u30BF\u306A\u3057'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:'"Caf\xe9" --\x3e $43 61 66 C3 A9'}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.em,{children:"Mac"})}),(0,d.jsx)(e.td,{children:'"" --\x3e \u30C7\u30FC\u30BF\u306A\u3057'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:'"Caf\xe9" --\x3e $43 61 66 8E'}),(0,d.jsx)(e.td,{})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,d.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u30C6\u30AD\u30B9\u30C8\u306FBLOB\u306E\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u3001BLOB\u30B5\u30A4\u30BA\u306F\u305D\u308C\u306B\u5F93\u3044\u62E1\u5F35\u3055\u308C\u307E\u3059\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,d.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001BLOB\u304C\u30E1\u30E2\u30EA\u306B\u53CE\u307E\u308B\u9650\u308A\u3001",(0,d.jsx)(e.em,{children:"\u6574\u6570"}),", ",(0,d.jsx)(e.em,{children:"\u500D\u9577\u6574\u6570"}),", ",(0,d.jsx)(e.em,{children:"\u5B9F\u6570"})," \u3042\u308B\u3044\u306F ",(0,d.jsx)(e.em,{children:"\u30C6\u30AD\u30B9\u30C8"}),"\u5024 (\u4ED6\u306EBLOB\u30B3\u30DE\u30F3\u30C9\u53C2\u7167) \u3092BLOB\u306B\u9023\u7D9A\u3057\u3066\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570 ",(0,d.jsx)(e.em,{children:"*"})," \u3084",(0,d.jsx)(e.em,{children:"offset"}),"\u5909\u6570\u5F15\u6570\u3092\u6307\u5B9A\u3057\u306A\u3044\u5834\u5408\u3001\u30C6\u30AD\u30B9\u30C8\u306FBLOB\u306E\u6700\u521D\u306B\u683C\u7D0D\u3055\u308C\u3001\u305D\u308C\u4EE5\u524D\u306E\u5185\u5BB9\u3092\u4E0A\u66F8\u304D\u3057\u307E\u3059\u3002\u3053\u308C\u306B\u5408\u308F\u305B\u3066BLOB\u306E\u30B5\u30A4\u30BA\u3082\u8ABF\u6574\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"offset"}),"\u5909\u6570\u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30C6\u30AD\u30B9\u30C8\u306FBLOB\u5185\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\uFF08\u30BC\u30ED\u304B\u3089\u958B\u59CB\uFF09\u306B\u66F8\u304D\u8FBC\u307E\u308C\u307E\u3059\u3002\u30C6\u30AD\u30B9\u30C8\u3092\u66F8\u304D\u8FBC\u3080\u4F4D\u7F6E\u306B\u95A2\u308F\u3089\u305A\u3001BLOB\u306E\u30B5\u30A4\u30BA\u306F\u6E21\u3057\u305F\u4F4D\u7F6E\u306B\u5F93\u3063\u3066\uFF08\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u3055\u3089\u306B\u30C6\u30AD\u30B9\u30C8\u306E\u30B5\u30A4\u30BA\u307E\u3067\uFF09\u5897\u52A0\u3057\u307E\u3059\u3002\u73FE\u5728\u66F8\u304D\u8FBC\u3093\u3067\u3044\u308B\u30D0\u30A4\u30C8\u4EE5\u5916\u306E\u65B0\u3057\u304F\u5272\u308A\u5F53\u3066\u3089\u308C\u308B\u30D0\u30A4\u30C8\u306F\u3001\u30BC\u30ED\u306B\u521D\u671F\u5316\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u547C\u3073\u51FA\u3057\u5F8C\u3001",(0,d.jsx)(e.em,{children:"offset"}),"\u5909\u6570\u5F15\u6570\u306F\u3001\u66F8\u304D\u8FBC\u307E\u308C\u305F\u30D0\u30A4\u30C8\u6570\u5206\u3060\u3051\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8\u3055\u308C\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u540C\u3058",(0,d.jsx)(e.em,{children:"offset"}),"\u5909\u6570\u5F15\u6570\u3092\u5225\u306EBLOB\u66F8\u304D\u8FBC\u307F\u30B3\u30DE\u30F3\u30C9\u306B\u3082\u4F7F\u7528\u3057\u3001\u5225\u306E\u5024\u3092BLOB\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"\u6CE8",children:"\u6CE8"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u305FBlob \u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u3001Blob \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8(4D.Blob \u578B)\u306F\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002developer.4d.com \u3067\u306E\u306E ",(0,d.jsx)(e.em,{children:"Passing blobs and blob objects to 4D commands"})," \u306E\u30DA\u30FC\u30B8\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0SET BLOB SIZE(vxBlob;0)\n\xa0var vtValue : Text\n\xa0vtValue:="Cafe"\xa0// vtValue\u9577\u3055\u306F4\u30D0\u30A4\u30C8\n\xa0TEXT TO BLOB(vtValue;vxBlob;Mac C string)\xa0// BLOB\u306E\u30B5\u30A4\u30BA\u306F5 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;Mac Pascal string)\xa0// BLOB\u306E\u30B5\u30A4\u30BA\u306F5 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;Mac text with length)\xa0// BLOB\u306E\u30B5\u30A4\u30BA\u306F6 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;Mac text without length)\xa0// BLOB\u306E\u30B5\u30A4\u30BA\u306F4 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;UTF8 C string)\xa0// BLOB\u306E\u30B5\u30A4\u30BA\u306F6 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;UTF8 text with length)\xa0// BLOB\u306E\u30B5\u30A4\u30BA\u306F9 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;UTF8 text without length)\xa0// BLOB\u306E\u30B5\u30A4\u30BA\u306F5 bytes\n'})}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/commands/blob-to-integer",children:"BLOB to integer"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/blob-to-longint",children:"BLOB to longint"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/blob-to-real",children:"BLOB to real"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/blob-to-text",children:"BLOB to text"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/convert-from-text",children:"CONVERT FROM TEXT"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/real-to-blob",children:"REAL TO BLOB"})]}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"554"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return l}});var s=t(667294);let d={},r=s.createContext(d);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);