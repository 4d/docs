"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84216"],{943664:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>x,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/sql-export-database","title":"SQL EXPORT DATABASE","description":"SQL EXPORT DATABASE ( folderPath {; numFiles {; fileLimitSize {; fieldLimitSize}}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sql-export-database.md","sourceDirName":"commands-legacy","slug":"/commands/sql-export-database","permalink":"/docs/ja/20-R8/commands/sql-export-database","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-export-database.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-export-database","title":"SQL EXPORT DATABASE","slug":"/commands/sql-export-database","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL EXECUTE SCRIPT","permalink":"/docs/ja/20-R8/commands/sql-execute-script"},"next":{"title":"SQL EXPORT SELECTION","permalink":"/docs/ja/20-R8/commands/sql-export-selection"}}'),i=s("785893"),l=s("250065");let r={id:"sql-export-database",title:"SQL EXPORT DATABASE",slug:"/commands/sql-export-database",displayed_sidebar:"docs"},d=void 0,c={},x=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SQL EXPORT DATABASE"})," ( ",(0,i.jsx)(n.em,{children:"folderPath"})," {; ",(0,i.jsx)(n.em,{children:"numFiles"})," {; ",(0,i.jsx)(n.em,{children:"fileLimitSize"})," {; ",(0,i.jsx)(n.em,{children:"fieldLimitSize"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"folderPath"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:'\u66F8\u304D\u51FA\u3057\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u30D1\u30B9\u540D\u3001\u307E\u305F\u306F"" \u3067\u30D5\u30A9\u30EB\u30C0\u30FC\u9078\u629E\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numFiles"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30D5\u30A9\u30EB\u30C0\u30FC\u3054\u3068\u306E\u6700\u5927\u30D5\u30A1\u30A4\u30EB\u6570"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fileLimitSize"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u66F8\u304D\u51FA\u3057\u30D5\u30A1\u30A4\u30EB\u306E\u30B5\u30A4\u30BA\u5236\u9650\u5024 (KB)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldLimitSize"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u3053\u306E\u5F15\u6570\u306E\u30B5\u30A4\u30BA\u4EE5\u4E0B\u306E\u30C6\u30AD\u30B9\u30C8\u3001Blob\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5185\u5BB9\u306F\u30E1\u30A4\u30F3\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u7D71\u5408\u3059\u308B (\u30D0\u30A4\u30C8\u5358\u4F4D)"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SQL EXPORT DATABASE"}),'\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u3059\u3079\u3066\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u3059\u3079\u3066\u306E\u30EC\u30B3\u30FC\u30C9\u3092SQL\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u66F8\u304D\u51FA\u3057\u307E\u3059\u3002SQL\u3067\u306F\u3053\u306E\u30B0\u30ED\u30FC\u30D0\u30EB\u306A\u66F8\u304D\u51FA\u3057\u51E6\u7406\u306F"\u30C0\u30F3\u30D7"\u3068\u547C\u3070\u308C\u307E\u3059\u3002']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6CE8"}),": \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u76F4\u63A5\u3042\u308B\u3044\u306FODBC\u7D4C\u7531\u3067\u958B\u304B\u308C\u305F\u5916\u90E8\u63A5\u7D9A\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30C6\u30FC\u30D6\u30EB\u3054\u3068\u306B\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4ED6\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3080\u969B\u306B\u5FC5\u8981\u3068\u306A\u308BSQL\u6587\u3092\u542B\u3080\u30C6\u30AD\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u751F\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u76F4\u63A5",(0,i.jsx)(n.a,{href:"/docs/ja/20-R8/commands/sql-execute-script",title:"SQL EXECUTE SCRIPT",children:"SQL EXECUTE SCRIPT"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u4F7F\u7528\u3057\u3066\u3001\u4ED6\u306E4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u66F8\u304D\u51FA\u3057\u30D5\u30A1\u30A4\u30EB\u306F",(0,i.jsx)(n.em,{children:"folderPath"}),'\u3067\u6307\u5B9A\u3055\u308C\u305F\u4FDD\u5B58\u5148\u30D5\u30A9\u30EB\u30C0\u5185\u306B\u4F5C\u6210\u3055\u308C\u308B"SQLExport"\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002"SQLExport" \u30D5\u30A9\u30EB\u30C0\u304C\u6307\u5B9A\u3055\u308C\u305F\u5834\u6240\u306B\u65E2\u306B\u5B58\u5728\u3059\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u8B66\u544A\u306A\u3057\u306B\u305D\u308C\u3092\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002',(0,i.jsx)(n.br,{}),'\n\u5F15\u6570\u306B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3059\u3068\u30014D\u306F\u6A19\u6E96\u306E\u30D5\u30A9\u30EB\u30C0\u3092\u9078\u629E\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306F\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u3044\u305F\u30E6\u30FC\u30B6\u306E\u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u8868\u793A\u3057\u307E\u3059 (Windows \u3067\u306F"\u30DE\u30A4 \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"\u3001Mac OS \u3067\u306F"\u66F8\u985E")\u3002']}),"\n",(0,i.jsx)(n.p,{children:"\u66F8\u304D\u51FA\u3055\u308C\u308B\u30C6\u30FC\u30D6\u30EB\u3054\u3068\u306B\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4EE5\u4E0B\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u884C\u3044\u307E\u3059:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4FDD\u5B58\u5148\u30D5\u30A9\u30EB\u30C0\u306B\u30C6\u30FC\u30D6\u30EB\u540D\u306B\u3088\u308B\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u3092\u4F5C\u6210\u3059\u308B"}),"\n",(0,i.jsxs)(n.li,{children:['\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u5185\u306B\u30C6\u30AD\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB"Export.sql"\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306FBOM\u4ED8\u304DUTF-8\u3067\u30A8\u30F3\u30B3\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306B\u306F\u66F8\u304D\u51FA\u3055\u308C\u305F\u30C7\u30FC\u30BF\u306B\u5BFE\u5FDC\u3059\u308BSQL\u306E',(0,i.jsx)(n.em,{children:"INSERT"})," \u547D\u4EE4\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5024\u306F\u30B3\u30ED\u30F3\u3067\u533A\u5207\u3089\u308C\u307E\u3059\u3002\u30C6\u30FC\u30D6\u30EB\u4E2D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u6570\u3088\u308A\u30C7\u30FC\u30BF\u304C\u5C11\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u3053\u306E\u5834\u5408\u6B8B\u308A\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306FNULL\u3068\u3057\u3066\u6271\u308F\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:['\u30C6\u30FC\u30D6\u30EB\u306BBLOB\u3084\u30D4\u30AF\u30C1\u30E3\u3001\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9 (\u30EC\u30B3\u30FC\u30C9\u306E\u5916\u306B\u683C\u7D0D\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8) \u304C\u542B\u307E\u308C\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u8FFD\u52A0\u306E\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0"BLOBS"\u3092"Export.sql" \u30D5\u30A1\u30A4\u30EB\u3068\u540C\u968E\u5C64\u306B\u4F5C\u6210\u3057\u3001\u5FC5\u8981\u306A\u3060\u3051"BlobsX"\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u306B\u306F\u30C6\u30FC\u30D6\u30EB\u30EC\u30B3\u30FC\u30C9\u306E\u3059\u3079\u3066\u306EBLOB\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u3001\u304A\u3088\u3073\u5916\u90E8\u30C6\u30AD\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5185\u5BB9\u304C\u5206\u96E2\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002BLOB \u30D5\u30A1\u30A4\u30EB\u306F"BlobXXXXX.BLOB"\u3001\u30C6\u30AD\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB\u306F"TEXTXXXXX.TXT" (XXXXX \u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u751F\u6210\u3059\u308B\u30E6\u30CB\u30FC\u30AF\u756A\u53F7) \u3068\u3044\u3046\u540D\u79F0\u304C\u3064\u3051\u3089\u308C\u307E\u3059\u3002\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306FPICTXXXXX.ZZZZ (XXXXX \u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u751F\u6210\u3059\u308B\u30E6\u30CB\u30FC\u30AF\u756A\u53F7\u3067\u3001ZZZZ \u306F\u62E1\u5F35\u5B50)\u3002\u53EF\u80FD\u3067\u3042\u308C\u3070\u3001\u30D4\u30AF\u30C1\u30E3\u306F\u30AA\u30EA\u30B8\u30CA\u30EB\u306E\u30CD\u30A4\u30C6\u30A3\u30D6\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u66F8\u304D\u51FA\u3055\u308C\u3001\u5BFE\u5FDC\u3059\u308B\u62E1\u5F35\u5B50\u304C\u4ED8\u3051\u3089\u308C\u307E\u3059 (.jpg, .png \u7B49)\u3002\u30CD\u30A4\u30C6\u30A3\u30D6\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306E\u66F8\u304D\u51FA\u3057\u304C\u3067\u304D\u306A\u3044\u5834\u5408\u3001\u30D4\u30AF\u30C1\u30E3\u306F4D \u306E\u5185\u90E8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u66F8\u304D\u51FA\u3055\u308C\u3001.4PCT \u62E1\u5F35\u5B50\u304C\u4ED8\u3051\u3089\u308C\u307E\u3059\u3002',(0,i.jsx)(n.br,{}),"\n\u3053\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u52D5\u4F5C\u306F\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,i.jsx)(n.em,{children:"fieldLimitSize"}),"\u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u542B\u307E\u308C\u308B\u30C7\u30FC\u30BF\u306E\u30B5\u30A4\u30BA\u306B\u57FA\u3065\u304D\u8ABF\u6574\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (\u5F8C\u8FF0)\u3002",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"\u6CE8:"})," \u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u306E4D\u304B\u3089",(0,i.jsx)(n.strong,{children:"SQL EXPORT DATABASE"}),'\u3092\u5B9F\u884C\u3057\u305F\u5834\u5408\u3001\u3053\u306E\u52D5\u4F5C\u306F\u7570\u306A\u308A\u307E\u3059\u3002\u3053\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u306F\u3001\u5916\u90E8\u306B\u4FDD\u5B58\u3055\u308C\u308B\u30C7\u30FC\u30BF\u306F\u81EA\u52D5\u3067"Export.sql"\u30D5\u30A1\u30A4\u30EB\u306B\u542B\u307E\u308C\u307E\u3059\u3002']}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"numFiles"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u304C",(0,i.jsx)(n.em,{children:"numFiles"}),'\u6570\u4EE5\u4E0A\u306EBLOB \u3084\u30D4\u30AF\u30C1\u30E3\u3092\u542B\u307E\u306A\u3044\u3088\u3046\u3001\u5FC5\u8981\u306A\u5FDC\u3058\u3066"BlobsX" \u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002',(0,i.jsx)(n.em,{children:"numFiles"})," \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u308B\u3068\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A1\u30A4\u30EB\u6570\u3092200\u306B\u5236\u9650\u3057\u307E\u3059\u30020\u3092\u6E21\u3059\u3068\u3001\u305D\u308C\u305E\u308C\u306E\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u306F\u5C11\u306A\u304F\u3068\u30821\u3064\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u542B\u307F\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"fileLimitSize"}),' \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u30C7\u30A3\u30B9\u30AF\u4E0A\u306B\u4F5C\u6210\u3055\u308C\u308B\u305D\u308C\u305E\u308C\u306E"Export.sql"\u306E\u30B5\u30A4\u30BA\u3092 (\u30AD\u30ED\u30D0\u30A4\u30C8\u5358\u4F4D\u3067) \u5236\u9650\u3067\u304D\u307E\u3059\u3002\u4F5C\u6210\u3055\u308C\u305F\u66F8\u304D\u51FA\u3057\u30D5\u30A1\u30A4\u30EB\u306E\u30B5\u30A4\u30BA\u304C',(0,i.jsx)(n.em,{children:"fileLimitSize"}),'\u3067\u8A2D\u5B9A\u3057\u305F\u5236\u9650\u306B\u9054\u3059\u308B\u3068\u30014D\u306F\u30EC\u30B3\u30FC\u30C9\u306E\u66F8\u304D\u8FBC\u307F\u3092\u505C\u6B62\u3057\u3001\u30D5\u30A1\u30A4\u30EB\u3092\u9589\u3058\u3001"ExportX.sql" (X\u306F\u4E00\u9023\u756A\u53F7\u3092\u8868\u3059) \u3068\u3044\u3046\u65B0\u3057\u3044\u30D5\u30A1\u30A4\u30EB\u3092\u540C\u968E\u5C64\u306B\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u306B\u304A\u3044\u3066\u306F\u3001"ExportX.sql"\u30D5\u30A1\u30A4\u30EB\u306E\u5B9F\u969B\u306E\u30B5\u30A4\u30BA\u306F',(0,i.jsx)(n.em,{children:"fileLimitSize"}),"\u3092\u8D85\u3048\u308B\u70B9\u306B\u7559\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u306A\u305C\u306A\u3089\u30B5\u30A4\u30BA\u306E\u5236\u9650\u3092\u8D85\u3048\u308B\u3068\u304D\u306B\u66F8\u304D\u51FA\u3055\u308C\u3066\u3044\u308B\u30EC\u30B3\u30FC\u30C9\u304C\u5B8C\u5168\u306B\u66F8\u304D\u51FA\u3055\u308C\u305F\u5F8C\u306B\u30D5\u30A1\u30A4\u30EB\u304C\u9589\u3058\u3089\u308C\u308B\u304B\u3089\u3067\u3059 (\u3064\u307E\u308A1\u30EC\u30B3\u30FC\u30C9\u304C2\u3064\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u5206\u5272\u3057\u3066\u66F8\u304D\u51FA\u3055\u308C\u308B\u3053\u3068\u306F\u306A\u3044\u3068\u3044\u3046\u3053\u3068\u3067\u3059)\u3002\u8A2D\u5B9A\u53EF\u80FD\u306A\u6700\u5C0F\u30B5\u30A4\u30BA\u306F100 KB\u3067\u6700\u5927\u30B5\u30A4\u30BA (\u30C7\u30D5\u30A9\u30EB\u30C8\u5024) \u306F100,000KB (100MB) \u3067\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,i.jsx)(n.em,{children:"fieldLimitSize"}),'\u5F15\u6570\u3067\u306F\u3001\u5916\u90E8BLOB\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u3001\u304A\u3088\u3073\u30C6\u30AD\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u30C7\u30FC\u30BF\u304C\u3053\u306E\u5F15\u6570\u3067\u8A2D\u5B9A\u3055\u308C\u308B\u30B5\u30A4\u30BA\u3092\u4E0B\u56DE\u308B\u5834\u5408\u306B\u3001\u5206\u96E2\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u3067\u306F\u306A\u304F\u30E1\u30A4\u30F3\u306E"Export.sql"\u306B\u542B\u3081\u308B\u305D\u306E\u30B5\u30A4\u30BA\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306E\u76EE\u7684\u306F\u30C7\u30A3\u30B9\u30AF\u4E0A\u306B\u4F5C\u6210\u3055\u308C\u308B\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u30FC\u3084\u30D5\u30A1\u30A4\u30EB\u306E\u6570\u3092\u5236\u9650\u3059\u308B\u3053\u3068\u3067\u66F8\u304D\u51FA\u3057\u51E6\u7406\u3092\u6700\u9069\u5316\u3059\u308B\u3053\u3068\u306B\u3042\u308A\u307E\u3059\u3002',(0,i.jsx)(n.br,{}),"\n\u3053\u306E\u5F15\u6570\u306F\u30D0\u30A4\u30C8\u5358\u4F4D\u3067\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u4F8B\u3048\u30701000\u3092\u6E21\u3059\u3068\u30011000\u30D0\u30A4\u30C8\u4EE5\u4E0B\u306E\u5916\u90E8BLOB\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u3001\u304A\u3088\u3073\u30C6\u30AD\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u30E1\u30A4\u30F3\u306E\u66F8\u304D\u51FA\u3057\u30D5\u30A1\u30A4\u30EB\u306B\u7D44\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002",(0,i.jsx)(n.br,{}),"\n\u66F8\u304D\u51FA\u3057\u30D5\u30A1\u30A4\u30EB\u306B\u7D44\u307F\u8FBC\u307E\u308C\u308B\u30D0\u30A4\u30CA\u30EA\u30FC\u30C7\u30FC\u30BF (BLOB\u3068\u30D4\u30AF\u30C1\u30E3\u30FC) \u306FX'0f20'\u5F62\u5F0F\u306E16\u9032\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u66F8\u304D\u8FBC\u307E\u308C\u308B\u3053\u3068\u306B\u7559\u610F\u3057\u3066\u304F\u3060\u3055\u3044 (\u6A19\u6E96\u306ESQL16\u9032\u8A18\u6CD5\u3001",(0,i.jsx)(n.em,{children:"literal"}),"\u53C2\u7167)\u3002\u3053\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F4D SQL\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u308A\u81EA\u52D5\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"fieldLimitSize"}),"\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u308B\u3068\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u5916\u90E8BLOB\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u3001\u304A\u3088\u3073\u30C6\u30AD\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5185\u5BB9\u306F\u30B5\u30A4\u30BA\u306B\u304B\u304B\u308F\u3089\u305A\u5E38\u306B\u5206\u96E2\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u306B\u66F8\u304D\u51FA\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u66F8\u304D\u51FA\u3057\u30D5\u30A1\u30A4\u30EB\u4E2D\u3067\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u4E2D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3088\u308A\u5024\u306E\u6570\u304C\u5C11\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u7A7A\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306FNULL\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002\u30D5\u30A3\u30FC\u30EB\u30C9\u306BNULL\u5024\u3092\u6E21\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u66F8\u304D\u51FA\u3057\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068OK\u5909\u6570\u306B1\u304C\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:""}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u578B\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/ja/20-R8/commands/sql-export-selection",children:"SQL EXPORT SELECTION"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(n.td,{children:"1065"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var t=s(667294);let i={},l=t.createContext(i);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);