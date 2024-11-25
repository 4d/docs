"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52707"],{556244:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>o,assets:()=>r,toc:()=>c,frontMatter:()=>a});var l=JSON.parse('{"id":"commands-legacy/sql-execute","title":"SQL EXECUTE","description":"SQL EXECUTE ( sqlStatement {; boundObj}{; boundObj2 ; ... ; boundObjN} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-execute.md","sourceDirName":"commands-legacy","slug":"/commands/sql-execute","permalink":"/docs/ja/commands/sql-execute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-execute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-execute","title":"SQL EXECUTE","slug":"/commands/sql-execute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL End selection","permalink":"/docs/ja/commands/sql-end-selection"},"next":{"title":"SQL EXECUTE SCRIPT","permalink":"/docs/ja/commands/sql-execute-script"}}'),d=s("785893"),t=s("250065");let a={id:"sql-execute",title:"SQL EXECUTE",slug:"/commands/sql-execute",displayed_sidebar:"docs"},i=void 0,r={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:4},{value:"\u4F8B\u984C 5",id:"\u4F8B\u984C-5",level:4},{value:"\u4F8B\u984C 6",id:"\u4F8B\u984C-6",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function m(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SQL EXECUTE"})," ( ",(0,d.jsx)(n.em,{children:"sqlStatement"})," {; ",(0,d.jsx)(n.em,{children:"boundObj"}),"}{; ",(0,d.jsx)(n.em,{children:"boundObj2"})," ; ... ; ",(0,d.jsx)(n.em,{children:"boundObjN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sqlStatement"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u5B9F\u884C\u3059\u308BSQL\u30B3\u30DE\u30F3\u30C9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"boundObj"}),(0,d.jsx)(n.td,{children:"Variable, Field"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u7D50\u679C\u3092\u53D7\u3051\u53D6\u308B(\u5FC5\u8981\u306B\u5FDC\u3058\u3066)"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SQL EXECUTE"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066SQL\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3001\u7D50\u679C\u30924D\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8(\u914D\u5217\u3001\u5909\u6570\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9) \u306B\u30D0\u30A4\u30F3\u30C9\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306B\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u3067\u6709\u52B9\u306A\u63A5\u7D9A\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"sqlStatement"}),"\u5F15\u6570\u306B\u306F\u5B9F\u884C\u3059\u308BSQL\u30B3\u30DE\u30F3\u30C9\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"boundObj"}),"\u306F\u305D\u306E\u7D50\u679C\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002\u5909\u6570\u306F\u5217\u306E\u9806\u756A\u3067\u30D0\u30A4\u30F3\u30C9\u3055\u308C\u3001\u6B8B\u3063\u3066\u3044\u308B\u30EA\u30E2\u30FC\u30C8\u30AB\u30E9\u30E0\u306F\u653E\u68C4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u6700\u5927127\u500B\u306E",(0,d.jsx)(n.em,{children:"boundObj"}),"\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3002"]})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"boundObj"}),"\u306B4D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u6E21\u3055\u308C\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30EC\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\u3057\u81EA\u52D5\u7684\u306B\u4FDD\u5B58\u3057\u307E\u3059\u30024D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u540C\u3058\u30C6\u30FC\u30D6\u30EB\u306B\u5C5E\u3057\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093 (\u30C6\u30FC\u30D6\u30EB1\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3068\u30C6\u30FC\u30D6\u30EB2\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u540C\u3058\u547C\u3073\u51FA\u3057\u3067\u6E21\u3059\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093)\u3002\u8907\u6570\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u6E21\u3055\u308C\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u8B66\u544A:"})," ",(0,d.jsx)(n.em,{children:"boundObj"})," \u5F15\u6570\u306B4D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6E21\u3057\u3066",(0,d.jsx)(n.em,{children:"SELECT"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u305F\u5834\u5408\u3001\u5E38\u306B\u30EA\u30E2\u30FC\u30C84D\u306E\u30C7\u30FC\u30BF\u304C\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002\u30EA\u30E2\u30FC\u30C8\u30BD\u30FC\u30B9\u306E\u30C7\u30FC\u30BF\u3092\u30ED\u30FC\u30AB\u30EB\u306B\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u3001\u307E\u305A\u30C7\u30FC\u30BF\u3092\u914D\u5217\u306B\u53D6\u5F97\u3057\u3066",(0,d.jsx)(n.em,{children:"INSERT"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059 (\u4F8B\u984C 6\u53C2\u7167)\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"boundObj"}),"\u5F15\u6570\u306B4D\u306E\u914D\u5217\u3092\u6E21\u3059\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u524D\u306B\u3001\u305D\u306E\u914D\u5217\u3092\u5BA3\u8A00\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u51E6\u7406\u3055\u308C\u308B\u30C7\u30FC\u30BF\u306E\u30BF\u30A4\u30D7\u3092\u691C\u8A3C\u3059\u308B\u305F\u3081\u3067\u3059\u3002\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u914D\u5217\u306F\u81EA\u52D5\u3067\u30B5\u30A4\u30BA\u5909\u66F4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"4D\u5909\u6570\u306E\u5834\u5408\u30011\u5EA6\u306B1\u3064\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u53D6\u5F97\u3055\u308C\u307E\u3059\u3002\u4ED6\u306E\u7D50\u679C\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," SQL\u30AF\u30A8\u30EA\u30674D\u5F0F\u3092\u53C2\u7167\u3059\u308B\u3053\u3068\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001",(0,d.jsx)(n.em,{children:"SQL\u30B3\u30DE\u30F3\u30C9\u306E\u6982\u8981"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u3067\u3001\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u306B\u3042\u308Bemp\u30C6\u30FC\u30D6\u30EB\u306Eename\u30AB\u30E9\u30E0\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u305D\u306E\u7D50\u679C\u306F\u30014D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306E[Employee]Name\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u30024D\u306E\u30EC\u30B3\u30FC\u30C9\u306F\u81EA\u52D5\u7684\u306B\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:' SQLStmt:="SELECT ename FROM emp"\n SQL EXECUTE(SQLStmt;[Employee]Name)\n SQL LOAD RECORD(SQL all records)\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(n.p,{children:"\u30EC\u30B3\u30FC\u30C9\u306E\u4F5C\u6210\u3092\u78BA\u8A8D\u3059\u308B\u306B\u306F\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306B\u30B3\u30FC\u30C9\u3092\u6295\u5165\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u5341\u5206\u3067\u3042\u308B\u3068\u5224\u660E\u3057\u305F\u5834\u5408\u306E\u307F\u3001\u305D\u308C\u3092\u8A8D\u8A3C\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:' SQL LOGIN("mysql";"root";"")\n SQLStmt:="SELECT alpha_field FROM app_testTable"\n START TRANSACTION\n SQL EXECUTE(SQLStmt;[Table2]Field1)\n While(Not(SQL End selection))\n    SQL LOAD RECORD\n    ... //\u3053\u3053\u306B\u30C7\u30FC\u30BF\u3092\u691C\u8A3C\u3059\u308B\u30B3\u30FC\u30C9\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\n End while\n VALIDATE TRANSACTION //\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306E\u691C\u8A3C\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u3067\u306F\u3001\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u306B\u3042\u308Bemp\u30C6\u30FC\u30D6\u30EB\u306Eename\u30AB\u30E9\u30E0\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u305D\u306E\u7D50\u679C\u306F\u3001",(0,d.jsx)(n.em,{children:"aName"})," \u914D\u5217\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\uFF11\u5EA6\u306B10\u500B\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u53D6\u3063\u3066\u6765\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:' ARRAY TEXT(aName;20)\n SQLStmt:="SELECT ename FROM emp"\n SQL EXECUTE(SQLStmt;aName)\n While(Not(SQL End selection))\n    SQL LOAD RECORD(10)\n End while\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,d.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u3067\u306F\u3001\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u306E\u7279\u5B9A\u306EID(WHERE\u7BC0) \u306E\u305F\u3081\u306Eemp\u30C6\u30FC\u30D6\u30EB\u306Eename\u3068\u30B8\u30E7\u30D6\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u305D\u306E\u7D50\u679C\u306F\u30014D\u306E\u5909\u6570\u3001",(0,d.jsx)(n.em,{children:"vName"}),"\u3068",(0,d.jsx)(n.em,{children:"vJob"}),"\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\u6700\u521D\u306E\u30EC\u30B3\u30FC\u30C9\u3060\u3051\u3092\u53D6\u3063\u3066\u6765\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:' SQLStmt:="SELECT ename, job FROM emp WHERE id = 3"\n SQL EXECUTE(SQLStmt;vName;vJob)\n SQL LOAD RECORD\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-5",children:"\u4F8B\u984C 5"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u3067\u306F\u3001\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u306B\u3042\u308BTest\u30C6\u30FC\u30D6\u30EB\u306EBlob_Field\u30AB\u30E9\u30E0\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u305D\u306E\u7D50\u679C\u306F\u3001BLOB\u5909\u6570\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\u305D\u3057\u3066\u3001\u30EC\u30B3\u30FC\u30C9\u304C\u30ED\u30FC\u30C9\u3055\u308C\u308B\u5EA6\u306B\u3001\u305D\u306EBLOB\u5909\u6570\u306E\u5024\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:' var MyBlob : Blob\n SQL LOGIN\n SQL EXECUTE("SELECT Champ_Blob FROM Test";MonBlob)\n While(Not(SQL End selection))\n  //\u7D50\u679C\u3092\u8ABF\u67FB\u3057\u307E\u3059\u3002\n    SQL LOAD RECORD\n  //\u547C\u3073\u51FA\u3059\u5EA6\u306BMyBlob\u306E\u5024\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002\n End while\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-6",children:"\u4F8B\u984C 6"}),"\n",(0,d.jsx)(n.p,{children:"\u30EA\u30E2\u30FC\u30C8\u306E4D Server\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u30C7\u30FC\u30BF\u3092\u30ED\u30FC\u30AB\u30EB\u306B\u53D6\u5F97\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'  // \u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u30ED\u30B0\u30A4\u30F3\u3059\u308B\n SQL LOGIN("IP:192.168.18.15:19812";"user";"password";*)\n If(OK=1)\n  // \u3053\u308C\u4EE5\u964D\u3001\u3059\u3079\u3066\u306ESQL\u547D\u4EE4\u306F\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\n    var $LastName_value : Text // \u691C\u7D22\u6587\u3067\u4F7F\u7528\u3055\u308C\u308B4D\u5909\u6570\n    ARRAY TEXT($a_LastName;0) // LastName\u30C7\u30FC\u30BF\u306E\u4E00\u6642\u7684\u306A\u683C\u7D0D\u5834\u6240\n    ARRAY TEXT($a_FirstName;0) // FirstName\u30C7\u30FC\u30BF\u306E\u4E00\u6642\u7684\u306A\u683C\u7D0D\u5834\u6240\n    var $UseSQL : Boolean //\u30C7\u30FC\u30BF\u3092\u30ED\u30FC\u30AB\u30EB\u306B\u683C\u7D0D\u3059\u308B\u65B9\u6CD5\u306E\u9078\u629E\n \n    $LastName_value:="Smith" // 4D\u5909\u6570\u306E\u521D\u671F\u5316\n \n  // SQL\u30EA\u30AF\u30A8\u30B9\u30C8\u4E2D\u306E\u4E00\u756A\u76EE\u306E\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC "?" \u306B\u30014D\u306E$LastName_value\u5909\u6570\u3092\u5272\u308A\u5F53\u3066\u308B\n    SQL SET PARAMETER($LastName_value;SQL param in)\n \n  // \u30EA\u30E2\u30FC\u30C8\u306EPERSONS\u30C6\u30FC\u30D6\u30EB\u304B\u3089"LastName = Smith"\u3067\u3042\u308BLastName\u3068FirstName\u30AB\u30E9\u30E0\u306E\n  // \u5024\u3092\u53D6\u5F97\u3001$a_LastName \u3068 $a_FirstName \u914D\u5217\u306B\u683C\u7D0D\u3059\u308B\n    SQL EXECUTE("SELECT LastName, FirstName FROM PERSONS WHERE LastName = ?";$a_LastName;$a_FirstName)\n    If(Not(SQL End selection)) // \u30EC\u30B3\u30FC\u30C9\u304C\u691C\u7D22\u3055\u308C\u305F\u3089\n \n       SQL LOAD RECORD(SQL all records) // \u5168\u30EC\u30B3\u30FC\u30C9\u3092\u30ED\u30FC\u30C9\u3059\u308B\n       SQL CANCEL LOAD\n \n       $UseSQL:=True // \u30C7\u30FC\u30BF\u3092\u7D71\u5408\u3059\u308B\u65B9\u6CD5\u3092\u9078\u629E\n \n       If($UseSQL) // SQL\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\n          SQL LOGOUT // \u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u30ED\u30B0\u30A2\u30A6\u30C8\u3059\u308B\n          SQL LOGIN(SQL_INTERNAL;"user";"password") // \u30ED\u30FC\u30AB\u30EB\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u30ED\u30B0\u30A4\u30F3\n  // \u3053\u308C\u4EE5\u964D\u3001\u3059\u3079\u3066\u306ESQL\u547D\u4EE4\u306F\u30ED\u30FC\u30AB\u30EB\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\n  // $a_LastName \u3068 $a_FirstName \u914D\u5217\u4E2D\u306E\u30C7\u30FC\u30BF\u3092\u30ED\u30FC\u30AB\u30EB\u306EPERSONS\u30C6\u30FC\u30D6\u30EB\u306B\u4FDD\u5B58\n          SQL EXECUTE("INSERT INTO PERSONS(LastName, FirstName) VALUES (:$a_LastName, :$a_FirstName);")\n          SQL CANCEL LOAD\n \n       Else // 4D\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\n \n          REDUCE SELECTION([PERSONS];0)\n          ARRAY TO SELECTION($a_LastName;[PERSONS]LastName;$a_FirstName;[PERSONS]FirstName)\n \n       End if\n    End if\n    SQL LOGOUT // \u63A5\u7D9A\u3092\u9589\u3058\u308B\n End if\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F1\u306B\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/sql-load-record",children:"SQL LOAD RECORD"})})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var l=s(667294);let d={},t=l.createContext(d);function a(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);