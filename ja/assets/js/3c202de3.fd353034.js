"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13177"],{357251:function(n,e,t){t.r(e),t.d(e,{default:()=>o,frontMatter:()=>r,metadata:()=>d,assets:()=>l,toc:()=>h,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/document-to-text","title":"Document to text","description":"Document to text ( fileName {; charSet {; breakMode}} ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/document-to-text.md","sourceDirName":"commands-legacy","slug":"/commands/document-to-text","permalink":"/docs/ja/20-R8/commands/document-to-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdocument-to-text.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"document-to-text","title":"Document to text","slug":"/commands/document-to-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOCUMENT LIST","permalink":"/docs/ja/20-R8/commands/document-list"},"next":{"title":"FOLDER LIST","permalink":"/docs/ja/20-R8/commands/folder-list"}}'),s=t("785893"),c=t("250065");let r={id:"document-to-text",title:"Document to text",slug:"/commands/document-to-text",displayed_sidebar:"docs"},i=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function x(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Document to text"})," ( ",(0,s.jsx)(e.em,{children:"fileName"})," {; ",(0,s.jsx)(e.em,{children:"charSet"})," {; ",(0,s.jsx)(e.em,{children:"breakMode"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"fileName"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u540D\u307E\u305F\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3078\u306E\u30D1\u30B9\u540D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"charSet"}),(0,s.jsx)(e.td,{children:"Text, Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u6587\u5B57\u30B3\u30FC\u30C9\u540D\u306E\u540D\u524D\u307E\u305F\u306F\u6570\u5B57"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"breakMode"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u6539\u884C\u306E\u51E6\u7406\u30E2\u30FC\u30C9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304B\u3089\u53D6\u5F97\u3057\u305F\u30C6\u30AD\u30B9\u30C8"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Document to text"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30C7\u30A3\u30B9\u30AF\u4E0A\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u4E2D\u8EAB\u3092\u30014D\u306E\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u3068\u76F4\u63A5\u53D6\u308A\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u5F15\u6570\u306B\u306F\u3001\u8AAD\u307F\u3060\u3057\u305F\u3044\u30D5\u30A1\u30A4\u30EB\u540D\u307E\u305F\u306F\u30D1\u30B9\u540D\u3092\u6E21\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306F\u30C7\u30A3\u30B9\u30AF\u4E0A\u306B\u5B58\u5728\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306F\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002\u6E21\u305B\u308B\u3082\u306E\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:'\u30D5\u30A1\u30A4\u30EB\u540D\u306E\u307F\u3002\u4F8B\u3048\u3070 "myFile.txt" \u306A\u3069\u3002\u3053\u306E\u5834\u5408\u3001\u30D5\u30A1\u30A4\u30EB\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u96A3\u306B\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002'}),"\n",(0,s.jsx)(e.li,{children:'\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u306E\u76F8\u5BFE\u30D1\u30B9\u3002\u4F8B\u3048\u3070Windows\u3067\u306F "\\\\docs\\\\myFile.txt" \u307E\u305F\u306FmacOS \u3067\u306F ":docs:myFile.txt"'}),"\n",(0,s.jsx)(e.li,{children:'\u7D76\u5BFE\u30D1\u30B9\u3002\u4F8B\u3048\u3070Windows\u3067\u306F "c:\\\\app\\\\docs\\\\myFile.txt" \u307E\u305F\u306FmacOS \u3067\u306F "MacHD:docs:myFile.txt"'}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"charSet"})," \u5F15\u6570\u306B\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u306E\u4E2D\u8EAB\u3092\u8AAD\u307F\u3060\u3059\u969B\u306E\u6587\u5B57\u30B3\u30FC\u30C9\u3092\u6E21\u3057\u307E\u3059\u3002\u6A19\u6E96\u306E\u6587\u5B57\u30B3\u30FC\u30C9\u540D(\u4F8B\u3048\u3070\u201CISO-8859-1\u201D \u3084 \u201CUTF-8\u201D)\u3092\u6E21\u3059\u4E8B\u3082\u3067\u304D\u307E\u3059\u3057\u3001\u6587\u5B57\u30B3\u30FC\u30C9\u306E MIBEnum ID (\u500D\u9577\u6574\u6570)\u3092\u6E21\u3059\u4E8B\u3082\u3067\u304D\u307E\u3059\u30024D\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u6587\u5B57\u30B3\u30FC\u30C9\u306E\u4E00\u89A7\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u95A2\u3057\u3066\u306F\u3001",(0,s.jsx)(e.a,{href:"/docs/ja/20-R8/commands/convert-from-text",children:"CONVERT FROM TEXT"})," \u30B3\u30DE\u30F3\u30C9\u306E\u8A73\u7D30\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u30D0\u30A4\u30C8\u30AA\u30FC\u30C0\u30FC\u30DE\u30FC\u30AF(BOM)\u3092\u542B\u3093\u3067\u3044\u308B\u5834\u5408\u30014D\u306F",(0,s.jsx)(e.em,{children:"charSet"})," \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u6587\u5B57\u30B3\u30FC\u30C9\u306E\u304B\u308F\u308A\u306B\u30D0\u30A4\u30C8\u30AA\u30FC\u30C0\u30FC\u30DE\u30FC\u30AF\u304C\u6307\u5B9A\u3057\u305F\u6587\u5B57\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059(\u3064\u307E\u308A\u3001\u3053\u306E\u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059)\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304CBOM\u3092\u542B\u307E\u305A\u3001 ",(0,s.jsx)(e.em,{children:"charSet"}),"  set\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u30014D\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u4EE5\u4E0B\u306E\u6587\u5B57\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Windows: ANSI"}),"\n",(0,s.jsx)(e.li,{children:"macOS: MacRoman"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"breakMode"}),' \u5F15\u6570\u306B\u306F\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u6539\u884C\u6587\u5B57\u306E\u51E6\u7406\u3092\u6307\u793A\u3059\u308B\u500D\u9577\u6574\u6570\u3092\u6E21\u3057\u307E\u3059\u3002 "',(0,s.jsx)(e.em,{children:"System Documents"}),'"\u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u3001\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3069\u308C\u304B\u3092\u6E21\u3059\u3053\u3068\u304C\u51FA\u304D\u307E\u3059\u3002']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u5024"}),(0,s.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Document unchanged"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"\u4F55\u3082\u51E6\u7406\u3092\u3057\u307E\u305B\u3093\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Document with CR"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"\u6539\u884C\u306F\u30AF\u30E9\u30B7\u30C3\u30AFmacOS \u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u3042\u308BCR (\u30AD\u30E3\u30EA\u30C3\u30B8\u30EA\u30BF\u30FC\u30F3)\u3078\u3068\u5909\u63DB\u3055\u308C\u307E\u3059\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Document with CRLF"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"\u6539\u884C\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306EWindows \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u3042\u308BCRLF (\u30AD\u30E3\u30EA\u30C3\u30B8\u30EA\u30BF\u30FC\u30F3\uFF0B\u30E9\u30A4\u30F3\u30D5\u30A3\u30FC\u30C9)\u3078\u3068\u5909\u63DB\u3055\u308C\u307E\u3059\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Document with LF"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"4"}),(0,s.jsx)(e.td,{children:"\u6539\u884C\u306FUnix\u304A\u3088\u3073macOS \u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u3042\u308BLF (\u30E9\u30A4\u30F3\u30D5\u30A3\u30FC\u30C9)\u3078\u3068\u5909\u63DB\u3055\u308C\u307E\u3059\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Document with native format"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"(\u30C7\u30D5\u30A9\u30EB\u30C8)\u6539\u884C\u306FOS\u306E\u30CD\u30A4\u30C6\u30A3\u30D6\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u3002macOS \u74B0\u5883\u4E0B\u3067\u306FLF(\u30E9\u30A4\u30F3\u30D5\u30A3\u30FC\u30C9)\u306B\u3001Windows \u74B0\u5883\u4E0B\u3067\u306FCRLF(\u30AD\u30E3\u30EA\u30C3\u30B8\u30EA\u30BF\u30FC\u30F3+\u30E9\u30A4\u30F3\u30D5\u30A3\u30FC\u30C9)\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u3002"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001 ",(0,s.jsx)(e.em,{children:"breakMode"})," \u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u6539\u884C\u306F\u30CD\u30A4\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9(1)\u306B\u3066\u51E6\u7406\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F"}),": EOL \u3068BOM \u7BA1\u7406\u306B\u95A2\u3059\u308B\u4E92\u63DB\u6027\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002",(0,s.jsx)(e.em,{children:"\u4E92\u63DB\u6027\u30DA\u30FC\u30B8"})," \u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306FOK\u5909\u6570\u3092\u5909\u66F4\u3057\u307E\u305B\u3093\u3002\u5931\u6557\u3057\u305F\u5834\u5408\u306B\u306F ",(0,s.jsx)(e.a,{href:"/docs/ja/20-R8/commands/on-err-call",children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u5B9F\u88C5\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u5272\u308A\u8FBC\u307F\u53EF\u80FD\u306A\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u30C6\u30AD\u30B9\u30C8\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u4E0E\u3048\u3089\u308C\u3066\u3044\u308B\u5834\u5408\u3092\u8003\u3048\u307E\u3059(\u30D5\u30A3\u30FC\u30EB\u30C9\u306Ftab\u306B\u3088\u3063\u3066\u5206\u3051\u3089\u308C\u3066\u3044\u307E\u3059)\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-RAW",children:"id\xa0\xa0\xa0 name\xa0\xa0\xa0 price\xa0\xa0\xa0 vat3\xa0\xa0\xa0 4D Tags\xa0\xa0\xa0 99\xa0\xa0\xa0 19.6\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0$Text:=Document to text("products.txt")\n'})}),"\n",(0,s.jsx)(e.p,{children:"... \u6B21\u306E\u3088\u3046\u306A\u7D50\u679C\u304C\u5F97\u3089\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// $Text = "id\\tname\\tprice\\tvat\\r\\n3\\t4D Tags\\t99 \\t19.6"\n\xa0\xa0// \\t = tab\n\xa0\xa0// \\r = CR\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"System Documents"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/20-R8/commands/text-to-document",children:"TEXT TO DOCUMENT"})]}),"\n",(0,s.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(e.td,{children:"1236"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return r}});var d=t(667294);let s={},c=d.createContext(s);function r(n){let e=d.useContext(c);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),d.createElement(c.Provider,{value:e},n.children)}}}]);