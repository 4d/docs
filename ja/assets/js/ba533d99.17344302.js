"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52463"],{39493:function(n,e,d){d.r(e),d.d(e,{default:()=>x,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/get-4d-file","title":"Get 4D file","description":"Get 4D file ( file {; *} ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-4d-file.md","sourceDirName":"commands-legacy","slug":"/commands/get-4d-file","permalink":"/docs/ja/20-R7/commands/get-4d-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-4d-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-4d-file","title":"Get 4D file","slug":"/commands/get-4d-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Export structure file","permalink":"/docs/ja/20-R7/commands/export-structure-file"},"next":{"title":"Get 4D folder","permalink":"/docs/ja/20-R7/commands/get-4d-folder"}}'),t=d("785893"),i=d("250065");let r={id:"get-4d-file",title:"Get 4D file",slug:"/commands/get-4d-file",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function j(n){let e={a:"a",code:"code",databasename:"databasename",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Get 4D file"})," ( ",(0,t.jsx)(e.em,{children:"file"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"file"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30D5\u30A1\u30A4\u30EB\u30BF\u30A4\u30D7"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"*"}),(0,t.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u8FD4\u3059"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(e.td,{children:"Text"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"\u6307\u5B9A\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u540D"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Get 4D file"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(e.em,{children:"file"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3067\u6307\u5B9A\u3055\u308C\u305F4D\u74B0\u5883\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u30D1\u30B9\u540D\u3092\u8FD4\u3057\u307E\u3059\u3002\u30D1\u30B9\u306F\u30B7\u30B9\u30C6\u30E0\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u4F9D\u5B58\u3059\u308B\u53EF\u80FD\u6027\u306E\u3042\u308B\u3001\u5B9F\u969B\u306E\u30D5\u30A1\u30A4\u30EB\u540D\u3084\u4FDD\u5B58\u5148\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F 4D \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3084OS\u306B\u9650\u5B9A\u3055\u308C\u306A\u3044\u3001\u6C4E\u7528\u7684\u306A\u30B3\u30FC\u30C9\u3092\u66F8\u304F\u306E\u306B\u4FBF\u5229\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u4EFB\u610F\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3059\u308B\u5024\u3068\u3057\u3066\u3001",(0,t.jsx)(e.em,{children:"file"})," \u306B\u306F ",(0,t.jsx)(e.em,{children:"4D Environment"})," \u30C6\u30FC\u30DE\u306E\u6B21\u306E\u3044\u305A\u308C\u304B\u306E\u5B9A\u6570\u3092\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{children:"\u5024"}),(0,t.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Backup history file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"19"}),(0,t.jsxs)(e.td,{children:["\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4FDD\u5B58\u5148\u30D5\u30A9\u30EB\u30C0\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u5C65\u6B74\u30D5\u30A1\u30A4\u30EB(",(0,t.jsx)(e.em,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB"})," \u53C2\u7167)\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Backup log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"13"}),(0,t.jsxs)(e.td,{children:["\u30AB\u30EC\u30F3\u30C8\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB\u30D5\u30A1\u30A4\u30EB (",(0,t.jsx)(e.em,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB"})," \u53C2\u7167)\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u3068\u306A\u308A\u306B\u3042\u308BLogs\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Backup settings file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"18"}),(0,t.jsx)(e.td,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u73FE\u5728\u4F7F\u7528\u3057\u3066\u3044\u308B backup.4DSettings \u30D5\u30A1\u30A4\u30EB\u3002\u4F7F\u7528\u3055\u308C\u308B\u306E\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3001\u307E\u305F\u306F\u3001\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u7528\u306E\u30E6\u30FC\u30B6\u30FC\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3067\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Backup settings file for data"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"17"}),(0,t.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D5\u30A9\u30EB\u30C0\u30FC\u306E Settings \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u3042\u308B\u3001backup.4DSettings \u30D5\u30A1\u30A4\u30EB (xml \u5F62\u5F0F)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Build application log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"14"}),(0,t.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E Logs \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D3\u30EB\u30C9\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB (buildApp.4DSettings) \u306E\u30AB\u30EC\u30F3\u30C8\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB (xml \u5F62\u5F0F)\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Build application settings file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"20"}),(0,t.jsx)(e.td,{children:'\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E Settings \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u305F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D3\u30EB\u30C0\u30FC\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB ("buildApp.4DSettings")\u3002'})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Compacting log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"6"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/compact-data-file",children:"Compact data file"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u3001\u3042\u308B\u3044\u306F\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9&\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC(MSC)\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u3001\u76F4\u8FD1\u306E\u5727\u7E2E\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u3068\u306A\u308A\u306B\u3042\u308BLogs\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Current backup settings file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"1"}),(0,t.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E Settings \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u3042\u308B\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E backup.4DSettings \u30D5\u30A1\u30A4\u30EB (xml \u5F62\u5F0F)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Debug log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"12"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(Debug log recording) \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u3068\u306A\u308A\u306B\u3042\u308BLogs\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Diagnostic log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"11"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(Diagnostic log recording) \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u3068\u306A\u308A\u306B\u3042\u308BLogs\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Directory file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"16"}),(0,t.jsx)(e.td,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u304A\u3044\u3066\u3001\u30E6\u30FC\u30B6\u30FC\u3068\u30B0\u30EB\u30FC\u30D7 (\u3042\u308C\u3070) \u306E\u5B9A\u7FA9\u304C\u683C\u7D0D\u3055\u308C\u305F directory.json \u30D5\u30A1\u30A4\u30EB\u3002\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30E6\u30FC\u30B6\u30FC\u8A2D\u5B9A\u30D5\u30A9\u30EB\u30C0\u30FC (\u30C7\u30D5\u30A9\u30EB\u30C8\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u30B0\u30ED\u30FC\u30D0\u30EB)\u3001\u307E\u305F\u306F\u30C7\u30FC\u30BF\u8A2D\u5B9A\u30D5\u30A9\u30EB\u30C0\u30FC (\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u5C02\u7528) \u306B\u4FDD\u7BA1\u3055\u308C\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"HTTP Client log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"24"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/http-set-option",children:"HTTP SET OPTION"}),"(HTTP client log;value) \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3002Logs \u30D5\u30A9\u30EB\u30C0\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"HTTP debug log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"9"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/web-set-option",children:"WEB SET OPTION"}),"(Web debug log) \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u3068\u306A\u308A\u306B\u3042\u308BLogs\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"HTTP log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"8"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/web-set-option",children:"WEB SET OPTION"}),"(Web log recording) \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u3068\u306A\u308A\u306B\u3042\u308BLogs\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"IMAP Log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"23"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(IMAP Log) \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306ELogs \u30D5\u30A9\u30EB\u30C0\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Last backup file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"2"}),(0,t.jsxs)(e.td,{children:["\u4EFB\u610F\u306E\u5834\u6240\u306B\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u3001\u6700\u7D42\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB (\u540D\u79F0\u306F: ",(0,t.jsx)(e.databasename,{children:"[bkpNum].4BK)"})]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Last journal integration log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"22"}),(0,t.jsx)(e.td,{children:"\u6700\u5F8C\u306E\u30ED\u30B0\u7D71\u5408\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB(\u3042\u308C\u3070)\u306E\u5B8C\u5168\u306A\u30D1\u30B9\u540D(\u5FA9\u5143\u3055\u308C\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306ELogs \u30D5\u30A9\u30EB\u30C0\u5185\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059)\u3002\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u81EA\u52D5\u4FEE\u5FA9\u30E2\u30FC\u30C9\u306B\u304A\u3044\u3066\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u7D71\u5408\u304C\u767A\u751F\u3057\u305F\u6642\u70B9\u3067\u4F5C\u6210\u3055\u308C\u307E\u3059(\u53C2\u7167)\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"POP3 Log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"21"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(POP3 Log) \u30B3\u30DE\u30F3\u30C9\u3067\u4F5C\u6210\u3055\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306ELogs \u30D5\u30A9\u30EB\u30C0\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Repair log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"7"}),(0,t.jsx)(e.td,{children:"\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9&\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC(MSC)\u5185\u304B\u3089\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5BFE\u3057\u3066\u884C\u308F\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u4FEE\u5FA9\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u3068\u306A\u308A\u306B\u3042\u308BLogs\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Request log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"10"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(4D Server log recording) \u3042\u308B\u3044\u306F ",(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(Client log recording) \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u6A19\u6E96\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB(Web\u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u9664\u304B\u308C\u307E\u3059)\u3002\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u305F\u5834\u5408\u306B\u306F\u30B5\u30FC\u30D0\u30FC\u30ED\u30B0\u304C\u8FD4\u3055\u308C\u307E\u3059(\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306F\u30B5\u30FC\u30D0\u30FC\u4E0A\u306ELogs\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059)\u3002\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3067\u5B9F\u884C\u3055\u308C\u305F\u5834\u5408\u306B\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u30ED\u30B0\u304C\u8FD4\u3055\u308C\u307E\u3059(\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306ELogs\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059)\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"SMTP log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"15"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(SMTP Log) \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u96A3\u306B\u3042\u308B Logs \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"User settings file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"3"}),(0,t.jsx)(e.td,{children:"\u8A2D\u5B9A\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u3058\u5834\u6240\u306B\u3042\u308B Settings \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u683C\u7D0D\u3055\u308C\u305F\u3001\u5168\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306E settings.4DSettings \u30D5\u30A1\u30A4\u30EB"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"User settings file for data"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"4"}),(0,t.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u3058\u5834\u6240\u306B\u3042\u308B Settings \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u683C\u7D0D\u3055\u308C\u305F\u3001\u30AB\u30EC\u30F3\u30C8\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306E settings.4DSettings \u30D5\u30A1\u30A4\u30EB\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Verification log file"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"5"}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/verify-current-data-file",children:"VERIFY CURRENT DATA FILE"})," \u304A\u3088\u3073 ",(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/verify-data-file",children:"VERIFY DATA FILE"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u3001\u3042\u308B\u3044\u306F\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9&\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC(MSC)\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u3068\u306A\u308A\u306B\u3042\u308BLogs\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:["\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u5834\u5408\u3001\u4EFB\u610F\u306E ",(0,t.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u30DB\u30B9\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E ",(0,t.jsx)(e.em,{children:"file"})," \u30D1\u30B9\u304C\u5F97\u3089\u308C\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u53D7\u3051\u6E21\u3055\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u7A7A\u306E\u6587\u5B57\u5217\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:['User settings file for data \u304A\u3088\u3073 User settings file \u306E\u4E21\u30D5\u30A1\u30A4\u30EB\u306B\u95A2\u3057\u3066\u306F\u3001"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A" \u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306E',(0,t.jsx)(e.strong,{children:"\u5916\u90E8\u30D5\u30A1\u30A4\u30EB\u306E\u30E6\u30FC\u30B6\u30FC\u8A2D\u5B9A\u3092\u6709\u52B9\u306B\u3059\u308B"})," \u30AA\u30D7\u30B7\u30E7\u30F3( \u53C2\u7167)\u306B\u30C1\u30A7\u30C3\u30AF\u3092\u5165\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306E\u307F\u3001\u30D1\u30B9\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(e.p,{children:"\u6700\u7D42\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u3092\u53D6\u5F97\u3057\u307E\u3059:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'\xa0var $path : Text\n\xa0$path:=Get 4D file(Last backup file)\n\xa0\xa0// \u4F8B: $path = "C:\\Backups\\Countries\\Countries[0025].4BK"\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/file",children:"File"})}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"1418"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(j,{...n})}):j(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return l},a:function(){return r}});var s=d(667294);let t={},i=s.createContext(t);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);