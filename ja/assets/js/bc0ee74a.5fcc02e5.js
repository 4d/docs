"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45154"],{342754:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/real-to-blob","title":"REAL TO BLOB","description":"REAL TO BLOB ( real ; blob ; realFormat {; offset } )REAL TO BLOB ( real ; blob ; realFormat {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/real-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/real-to-blob","permalink":"/docs/ja/20-R7/commands/real-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freal-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"real-to-blob","title":"REAL TO BLOB","slug":"/commands/real-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LONGINT TO BLOB","permalink":"/docs/ja/20-R7/commands/longint-to-blob"},"next":{"title":"SET BLOB SIZE","permalink":"/docs/ja/20-R7/commands/set-blob-size"}}'),s=l("785893"),d=l("250065");let t={id:"real-to-blob",title:"REAL TO BLOB",slug:"/commands/real-to-blob",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u6CE8",id:"\u6CE8",level:3},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:2},{value:"\u4F8B\u984C 5",id:"\u4F8B\u984C-5",level:2},{value:"\u4F8B\u984C 6",id:"\u4F8B\u984C-6",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"REAL TO BLOB"})," ( ",(0,s.jsx)(n.em,{children:"real"})," ; ",(0,s.jsx)(n.em,{children:"blob"})," ; ",(0,s.jsx)(n.em,{children:"realFormat"})," {; offset } )",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"REAL TO BLOB"})," ( ",(0,s.jsx)(n.em,{children:"real"})," ; ",(0,s.jsx)(n.em,{children:"blob"})," ; ",(0,s.jsx)(n.em,{children:"realFormat"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"real"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB\u306B\u66F8\u304D\u8FBC\u3080\u5B9F\u6570\u5024"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u5B9F\u6570\u5024\u3092\u53D7\u3051\u53D6\u308BBLOB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"realFormat"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"0 Native real format 1 Extended real format 2  Macintosh Double real format 3  Windows Double real format"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset | *"}),(0,s.jsx)(n.td,{children:"\u5909\u6570, \u6F14\u7B97\u5B50"}),(0,s.jsx)(n.td,{children:"\u2194"}),(0,s.jsx)(n.td,{children:"BLOB\u5185\u306E\u30AA\u30D5\u30BB\u30C3\u30C8 (\u30D0\u30A4\u30C8\u5358\u4F4D) \u307E\u305F\u306F\u5024\u3092\u8FFD\u52A0\u3059\u308B\u5834\u5408 *"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"*\u3067\u306A\u3044\u5834\u5408\u3001\u66F8\u304D\u8FBC\u307F\u5F8C\u306E\u65B0\u3057\u3044\u30AA\u30D5\u30BB\u30C3\u30C8"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:["REAL TO BLOB \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(n.em,{children:"blob"}),"\u306B\u5B9F\u6570\u5024",(0,s.jsx)(n.em,{children:"real"}),"\u3092\u66F8\u304D\u8FBC\u307F\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"realFormat"}),"\u5F15\u6570\u306F\u3001\u5B9F\u6570\u5024\u304C\u66F8\u304D\u8FBC\u307E\u308C\u308B\u969B\u306E\u5185\u90E8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u30D0\u30A4\u30C8\u30AA\u30FC\u30C0\u30FC\u3092\u6C7A\u5B9A\u3057\u307E\u3059\u30024D\u304C\u63D0\u4F9B\u3059\u308B\u4EE5\u4E0B\u306E\u5B9A\u7FA9\u6E08\u307F\u5B9A\u6570\u306E\u3046\u3061\u3001\u3044\u305A\u308C\u304B1\u3064\u3092\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{children:"\u5024"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Extended real format"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Macintosh double real format"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Native real format"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PC double real format"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u72EC\u7ACB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F"})}),"\n",(0,s.jsx)(n.p,{children:"Macintosh\u3068PC\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u9593\u3067BLOB\u3092\u4EA4\u63DB\u3059\u308B\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u969B\u306E\u5B9F\u6570\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u30D0\u30A4\u30C8\u30B9\u30EF\u30C3\u30D7\u306E\u7BA1\u7406\u306F\u958B\u767A\u8005\u306B\u4EFB\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,s.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u5B9F\u6570\u5024\u306FBLOB\u306E\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u3001BLOB\u30B5\u30A4\u30BA\u306F\u305D\u308C\u306B\u5F93\u3044\u62E1\u5F35\u3055\u308C\u307E\u3059\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,s.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001BLOB\u304C\u30E1\u30E2\u30EA\u306B\u53CE\u307E\u308B\u9650\u308A\u3001\u6574\u6570, \u500D\u9577\u6574\u6570, \u5B9F\u6570 \u3042\u308B\u3044\u306F \u30C6\u30AD\u30B9\u30C8\u5024 (\u4ED6\u306EBLOB\u30B3\u30DE\u30F3\u30C9\u53C2\u7167) \u3092BLOB\u306B\u9023\u7D9A\u3057\u3066\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570 ",(0,s.jsx)(n.em,{children:"*"})," \u3084",(0,s.jsx)(n.em,{children:"offset"}),"\u5909\u6570\u5F15\u6570\u3092\u6307\u5B9A\u3057\u306A\u3044\u5834\u5408\u3001\u5B9F\u6570\u5024\u306FBLOB\u306E\u6700\u521D\u306B\u683C\u7D0D\u3055\u308C\u3001\u305D\u308C\u4EE5\u524D\u306E\u5185\u5BB9\u3092\u4E0A\u66F8\u304D\u3057\u307E\u3059\u3002\u3053\u308C\u306B\u5408\u308F\u305B\u3066BLOB\u306E\u30B5\u30A4\u30BA\u3082\u8ABF\u6574\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"offset"}),"\u5909\u6570\u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u5B9F\u6570\u5024\u306FBLOB\u5185\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\uFF08\u30BC\u30ED\u304B\u3089\u958B \u59CB\uFF09\u306B\u66F8\u304D\u8FBC\u307E\u308C\u307E\u3059\u3002\u5B9F\u6570\u5024\u3092\u66F8\u304D\u8FBC\u3080\u4F4D\u7F6E\u306B\u95A2\u308F\u3089\u305A\u3001BLOB\u306E\u30B5\u30A4\u30BA\u306F\u6E21\u3057\u305F\u4F4D\u7F6E\u306B\u5F93\u3063\u3066\uFF08\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u3055\u3089\u306B\u6700\u59278\u307E\u305F\u306F10\u30D0\u30A4\u30C8\u307E\u3067\uFF09\u5897\u52A0\u3057 \u307E\u3059\u3002\u73FE\u5728\u66F8\u304D\u8FBC\u3093\u3067\u3044\u308B\u30D0\u30A4\u30C8\u4EE5\u5916\u306E\u65B0\u3057\u304F\u5272\u308A\u5F53\u3066\u3089\u308C\u308B\u30D0\u30A4\u30C8\u306F\u3001\u30BC\u30ED\u306B\u521D\u671F\u5316\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u547C\u3073\u51FA\u3057\u5F8C\u3001",(0,s.jsx)(n.em,{children:"offset"}),"\u5909\u6570\u5F15\u6570\u306F\u3001\u66F8\u304D\u8FBC\u307E\u308C\u305F\u30D0\u30A4\u30C8\u6570\u5206\u3060\u3051\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8\u3055\u308C\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u540C\u3058",(0,s.jsx)(n.em,{children:"offset"}),"\u5909\u6570\u5F15\u6570\u3092\u5225\u306EBLOB\u66F8\u304D\u8FBC\u307F\u30B3\u30DE\u30F3\u30C9\u306B\u3082\u4F7F\u7528\u3057\u3001\u5225\u306E\u5024\u3092BLOB\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6CE8",children:"\u6CE8"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u305FBlob \u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u3001Blob \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8(4D.Blob \u578B)\u306F\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002developer.4d.com \u3067\u306E\u306E ",(0,s.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," \u306E\u30DA\u30FC\u30B8\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var vrValue : Real\n\xa0vrValue:=...\n\xa0REAL TO BLOB(vrValue;vxBlob;Extended real format)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u3059\u3079\u3066\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067",(0,s.jsx)(n.em,{children:"vxBlob"}),"\u306E\u30B5\u30A4\u30BA\u306F10bytes\u306B\u306A\u308A\u307E\u3059"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var vrValue : Real\n\xa0vrValue:=...\n\xa0REAL TO BLOB(vrValue;vxBlob;Native real format)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u3059\u3079\u3066\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067",(0,s.jsx)(n.em,{children:"vxBlob"}),"\u306E\u30B5\u30A4\u30BA\u306F8 bytes\u306B\u306A\u308A\u307E\u3059"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0var vrValue : Real\n\xa0vrValue:=...\n\xa0INTEGER TO BLOB(vrValue;vxBlob;Windows Double real format)\xa0// \u307E\u305F\u306F Macintosh double real format\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3059\u3079\u3066\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067",(0,s.jsx)(n.em,{children:"vxBlob"}),"\u306E\u30B5\u30A4\u30BA\u306F8 bytes\u306B\u306A\u308A\u307E\u3059"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0var vrValue : Real\n\xa0vrValue:=...\n\xa0vlOffset:=50\n\xa0REAL TO BLOB(vrValue;vxBlob;Windows Double real format;vlOffset)\xa0// \u307E\u305F\u306F Macintosh double real format\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u3059\u3079\u3066\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067",(0,s.jsx)(n.em,{children:"vxBlob"}),"\u306E\u30B5\u30A4\u30BA\u306F100bytes\u306B\u306A\u308A\u307E\u3059"]}),"\n",(0,s.jsx)(n.li,{children:"\u3059\u3079\u3066\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u3001\u5B9F\u6570\u5024\u306F#50\u304B\u3089#57\u307E\u3067\u306E\u30D0\u30A4\u30C8\u306B\u66F8\u304D\u8FBC\u307E\u308C\u307E\u3059"}),"\n",(0,s.jsx)(n.li,{children:"BLOB\u306E\u4ED6\u306E\u30D0\u30A4\u30C8\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093"}),"\n",(0,s.jsxs)(n.li,{children:["\u5909\u6570",(0,s.jsx)(n.em,{children:"vlOffset"}),"\u306F8\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8\u3055\u308C58\u3068\u306A\u308A\u307E\u3059"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C-5",children:"\u4F8B\u984C 5"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var vrValue : Real\n\xa0vrValue:=...\n\xa0REAL TO BLOB(vrValue;vxBlob;Macintosh double real format)\xa0// \u307E\u305F\u306F PC double real format\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u3059\u3079\u3066\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067",(0,s.jsx)(n.em,{children:"vxBlob"}),"\u306E\u30B5\u30A4\u30BA\u306F8 bytes\u306B\u306A\u308A\u307E\u3059"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C-6",children:"\u4F8B\u984C 6"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0REAL TO BLOB(vrValue;vxBlob;Extended real format;*)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u3059\u3079\u3066\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067",(0,s.jsx)(n.em,{children:"vxBlob"}),"\u306E\u30B5\u30A4\u30BA\u306F110bytes\u306B\u306A\u308A\u307E\u3059"]}),"\n",(0,s.jsx)(n.li,{children:"\u3059\u3079\u3066\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u3001\u5B9F\u6570\u5024\u306F#100\u304B\u3089#109\u307E\u3067\u306E\u30D0\u30A4\u30C8\u306B\u66F8\u304D\u8FBC\u307E\u308C\u307E\u3059"}),"\n",(0,s.jsx)(n.li,{children:"BLOB\u306E\u4ED6\u306E\u30D0\u30A4\u30C8\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/blob-to-integer",children:"BLOB to integer"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/blob-to-longint",children:"BLOB to longint"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/blob-to-real",children:"BLOB to real"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/blob-to-text",children:"BLOB to text"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"552"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return t}});var r=l(667294);let s={},d=r.createContext(s);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);