"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86168],{415618:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var d=s(474848),l=s(28453);const t={id:"sql-execute",title:"SQL EXECUTE",slug:"/commands/sql-execute",displayed_sidebar:"docs"},a=void 0,i={id:"commands-legacy/sql-execute",title:"SQL EXECUTE",description:"SQL EXECUTE ( sqlStatement {; boundObj}{; boundObj2 ; ... ; boundObjN} )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-execute.md",sourceDirName:"commands-legacy",slug:"/commands/sql-execute",permalink:"/docs/ja/commands/sql-execute",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-execute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sql-execute",title:"SQL EXECUTE",slug:"/commands/sql-execute",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SQL End selection",permalink:"/docs/ja/commands/sql-end-selection"},next:{title:"SQL EXECUTE SCRIPT",permalink:"/docs/ja/commands/sql-execute-script"}},r={},c=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c 1",id:"\u4f8b\u984c-1",level:4},{value:"\u4f8b\u984c 2",id:"\u4f8b\u984c-2",level:4},{value:"\u4f8b\u984c 3",id:"\u4f8b\u984c-3",level:4},{value:"\u4f8b\u984c 4",id:"\u4f8b\u984c-4",level:4},{value:"\u4f8b\u984c 5",id:"\u4f8b\u984c-5",level:4},{value:"\u4f8b\u984c 6",id:"\u4f8b\u984c-6",level:4},{value:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",id:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SQL EXECUTE"})," ( ",(0,d.jsx)(n.em,{children:"sqlStatement"})," {; ",(0,d.jsx)(n.em,{children:"boundObj"}),"}{; ",(0,d.jsx)(n.em,{children:"boundObj2"})," ; ... ; ",(0,d.jsx)(n.em,{children:"boundObjN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5f15\u6570"}),(0,d.jsx)(n.th,{children:"\u578b"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sqlStatement"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u5b9f\u884c\u3059\u308bSQL\u30b3\u30de\u30f3\u30c9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"boundObj"}),(0,d.jsx)(n.td,{children:"Variable, Field"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u7d50\u679c\u3092\u53d7\u3051\u53d6\u308b(\u5fc5\u8981\u306b\u5fdc\u3058\u3066)"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u306a\u30b3\u30fc\u30c9\u306b\u306f\u4f7f\u3048\u307e\u305b\u3093\u3002"})}),"\n",(0,d.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SQL EXECUTE"}),"\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066SQL\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3001\u7d50\u679c\u30924D\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8(\u914d\u5217\u3001\u5909\u6570\u307e\u305f\u306f\u30d5\u30a3\u30fc\u30eb\u30c9) \u306b\u30d0\u30a4\u30f3\u30c9\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u3067\u6709\u52b9\u306a\u63a5\u7d9a\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"sqlStatement"}),"\u5f15\u6570\u306b\u306f\u5b9f\u884c\u3059\u308bSQL\u30b3\u30de\u30f3\u30c9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002",(0,d.jsx)(n.em,{children:"boundObj"}),"\u306f\u305d\u306e\u7d50\u679c\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002\u5909\u6570\u306f\u5217\u306e\u9806\u756a\u3067\u30d0\u30a4\u30f3\u30c9\u3055\u308c\u3001\u6b8b\u3063\u3066\u3044\u308b\u30ea\u30e2\u30fc\u30c8\u30ab\u30e9\u30e0\u306f\u653e\u68c4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u6700\u5927127\u500b\u306e",(0,d.jsx)(n.em,{children:"boundObj"}),"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u3002"]})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"boundObj"}),"\u306b4D\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u6e21\u3055\u308c\u305f\u5834\u5408\u3001\u30b3\u30de\u30f3\u30c9\u306f\u30ec\u30b3\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u81ea\u52d5\u7684\u306b\u4fdd\u5b58\u3057\u307e\u3059\u30024D\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u540c\u3058\u30c6\u30fc\u30d6\u30eb\u306b\u5c5e\u3057\u3066\u3044\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093 (\u30c6\u30fc\u30d6\u30eb1\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u30c6\u30fc\u30d6\u30eb2\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u540c\u3058\u547c\u3073\u51fa\u3057\u3067\u6e21\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093)\u3002\u8907\u6570\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u6e21\u3055\u308c\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u8b66\u544a:"})," ",(0,d.jsx)(n.em,{children:"boundObj"})," \u5f15\u6570\u306b4D\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6e21\u3057\u3066",(0,d.jsx)(n.em,{children:"SELECT"}),"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001\u5e38\u306b\u30ea\u30e2\u30fc\u30c84D\u306e\u30c7\u30fc\u30bf\u304c\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002\u30ea\u30e2\u30fc\u30c8\u30bd\u30fc\u30b9\u306e\u30c7\u30fc\u30bf\u3092\u30ed\u30fc\u30ab\u30eb\u306b\u53d6\u5f97\u3057\u305f\u3044\u5834\u5408\u3001\u307e\u305a\u30c7\u30fc\u30bf\u3092\u914d\u5217\u306b\u53d6\u5f97\u3057\u3066",(0,d.jsx)(n.em,{children:"INSERT"}),"\u30b3\u30de\u30f3\u30c9\u3092\u547c\u3073\u51fa\u3057\u307e\u3059 (\u4f8b\u984c 6\u53c2\u7167)\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"boundObj"}),"\u5f15\u6570\u306b4D\u306e\u914d\u5217\u3092\u6e21\u3059\u5834\u5408\u3001\u30b3\u30de\u30f3\u30c9\u3092\u547c\u3073\u51fa\u3059\u524d\u306b\u3001\u305d\u306e\u914d\u5217\u3092\u5ba3\u8a00\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u51e6\u7406\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306e\u30bf\u30a4\u30d7\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u3067\u3059\u3002\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u914d\u5217\u306f\u81ea\u52d5\u3067\u30b5\u30a4\u30ba\u5909\u66f4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"4D\u5909\u6570\u306e\u5834\u5408\u30011\u5ea6\u306b1\u3064\u306e\u30ec\u30b3\u30fc\u30c9\u304c\u53d6\u5f97\u3055\u308c\u307e\u3059\u3002\u4ed6\u306e\u7d50\u679c\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6ce8:"})," SQL\u30af\u30a8\u30ea\u30674D\u5f0f\u3092\u53c2\u7167\u3059\u308b\u3053\u3068\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001",(0,d.jsx)(n.em,{children:"SQL\u30b3\u30de\u30f3\u30c9\u306e\u6982\u8981"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4f8b\u984c-1",children:"\u4f8b\u984c 1"}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u4f8b\u3067\u3001\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u3042\u308bemp\u30c6\u30fc\u30d6\u30eb\u306eename\u30ab\u30e9\u30e0\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u305d\u306e\u7d50\u679c\u306f\u30014D\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306e[Employee]Name\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u30024D\u306e\u30ec\u30b3\u30fc\u30c9\u306f\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:' SQLStmt:="SELECT ename FROM emp"\n SQL EXECUTE(SQLStmt;[Employee]Name)\n SQL LOAD RECORD(SQL all records)\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4f8b\u984c-2",children:"\u4f8b\u984c 2"}),"\n",(0,d.jsx)(n.p,{children:"\u30ec\u30b3\u30fc\u30c9\u306e\u4f5c\u6210\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306b\u30b3\u30fc\u30c9\u3092\u6295\u5165\u3057\u307e\u3059\u3002\u305d\u3057\u3066\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u5341\u5206\u3067\u3042\u308b\u3068\u5224\u660e\u3057\u305f\u5834\u5408\u306e\u307f\u3001\u305d\u308c\u3092\u8a8d\u8a3c\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:' SQL LOGIN("mysql";"root";"")\n SQLStmt:="SELECT alpha_field FROM app_testTable"\n START TRANSACTION\n SQL EXECUTE(SQLStmt;[Table2]Field1)\n While(Not(SQL End selection))\n    SQL LOAD RECORD\n    ... //\u3053\u3053\u306b\u30c7\u30fc\u30bf\u3092\u691c\u8a3c\u3059\u308b\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n End while\n VALIDATE TRANSACTION //\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u691c\u8a3c\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4f8b\u984c-3",children:"\u4f8b\u984c 3"}),"\n",(0,d.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u3042\u308bemp\u30c6\u30fc\u30d6\u30eb\u306eename\u30ab\u30e9\u30e0\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u305d\u306e\u7d50\u679c\u306f\u3001",(0,d.jsx)(n.em,{children:"aName"})," \u914d\u5217\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\uff11\u5ea6\u306b10\u500b\u306e\u30ec\u30b3\u30fc\u30c9\u3092\u53d6\u3063\u3066\u6765\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:' ARRAY TEXT(aName;20)\n SQLStmt:="SELECT ename FROM emp"\n SQL EXECUTE(SQLStmt;aName)\n While(Not(SQL End selection))\n    SQL LOAD RECORD(10)\n End while\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4f8b\u984c-4",children:"\u4f8b\u984c 4"}),"\n",(0,d.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306e\u7279\u5b9a\u306eID(WHERE\u7bc0) \u306e\u305f\u3081\u306eemp\u30c6\u30fc\u30d6\u30eb\u306eename\u3068\u30b8\u30e7\u30d6\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u305d\u306e\u7d50\u679c\u306f\u30014D\u306e\u5909\u6570\u3001",(0,d.jsx)(n.em,{children:"vName"}),"\u3068",(0,d.jsx)(n.em,{children:"vJob"}),"\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u6700\u521d\u306e\u30ec\u30b3\u30fc\u30c9\u3060\u3051\u3092\u53d6\u3063\u3066\u6765\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:' SQLStmt:="SELECT ename, job FROM emp WHERE id = 3"\n SQL EXECUTE(SQLStmt;vName;vJob)\n SQL LOAD RECORD\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4f8b\u984c-5",children:"\u4f8b\u984c 5"}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u3042\u308bTest\u30c6\u30fc\u30d6\u30eb\u306eBlob_Field\u30ab\u30e9\u30e0\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u305d\u306e\u7d50\u679c\u306f\u3001BLOB\u5909\u6570\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u30ec\u30b3\u30fc\u30c9\u304c\u30ed\u30fc\u30c9\u3055\u308c\u308b\u5ea6\u306b\u3001\u305d\u306eBLOB\u5909\u6570\u306e\u5024\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:' var MyBlob : Blob\n SQL LOGIN\n SQL EXECUTE("SELECT Champ_Blob FROM Test";MonBlob)\n While(Not(SQL End selection))\n  //\u7d50\u679c\u3092\u8abf\u67fb\u3057\u307e\u3059\u3002\n    SQL LOAD RECORD\n  //\u547c\u3073\u51fa\u3059\u5ea6\u306bMyBlob\u306e\u5024\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002\n End while\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4f8b\u984c-6",children:"\u4f8b\u984c 6"}),"\n",(0,d.jsx)(n.p,{children:"\u30ea\u30e2\u30fc\u30c8\u306e4D Server\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u30c7\u30fc\u30bf\u3092\u30ed\u30fc\u30ab\u30eb\u306b\u53d6\u5f97\u3057\u307e\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'  // \u30ea\u30e2\u30fc\u30c8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b\n SQL LOGIN("IP:192.168.18.15:19812";"user";"password";*)\n If(OK=1)\n  // \u3053\u308c\u4ee5\u964d\u3001\u3059\u3079\u3066\u306eSQL\u547d\u4ee4\u306f\u30ea\u30e2\u30fc\u30c8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\n    var $LastName_value : Text // \u691c\u7d22\u6587\u3067\u4f7f\u7528\u3055\u308c\u308b4D\u5909\u6570\n    ARRAY TEXT($a_LastName;0) // LastName\u30c7\u30fc\u30bf\u306e\u4e00\u6642\u7684\u306a\u683c\u7d0d\u5834\u6240\n    ARRAY TEXT($a_FirstName;0) // FirstName\u30c7\u30fc\u30bf\u306e\u4e00\u6642\u7684\u306a\u683c\u7d0d\u5834\u6240\n    var $UseSQL : Boolean //\u30c7\u30fc\u30bf\u3092\u30ed\u30fc\u30ab\u30eb\u306b\u683c\u7d0d\u3059\u308b\u65b9\u6cd5\u306e\u9078\u629e\n \n    $LastName_value:="Smith" // 4D\u5909\u6570\u306e\u521d\u671f\u5316\n \n  // SQL\u30ea\u30af\u30a8\u30b9\u30c8\u4e2d\u306e\u4e00\u756a\u76ee\u306e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc "?" \u306b\u30014D\u306e$LastName_value\u5909\u6570\u3092\u5272\u308a\u5f53\u3066\u308b\n    SQL SET PARAMETER($LastName_value;SQL param in)\n \n  // \u30ea\u30e2\u30fc\u30c8\u306ePERSONS\u30c6\u30fc\u30d6\u30eb\u304b\u3089"LastName = Smith"\u3067\u3042\u308bLastName\u3068FirstName\u30ab\u30e9\u30e0\u306e\n  // \u5024\u3092\u53d6\u5f97\u3001$a_LastName \u3068 $a_FirstName \u914d\u5217\u306b\u683c\u7d0d\u3059\u308b\n    SQL EXECUTE("SELECT LastName, FirstName FROM PERSONS WHERE LastName = ?";$a_LastName;$a_FirstName)\n    If(Not(SQL End selection)) // \u30ec\u30b3\u30fc\u30c9\u304c\u691c\u7d22\u3055\u308c\u305f\u3089\n \n       SQL LOAD RECORD(SQL all records) // \u5168\u30ec\u30b3\u30fc\u30c9\u3092\u30ed\u30fc\u30c9\u3059\u308b\n       SQL CANCEL LOAD\n \n       $UseSQL:=True // \u30c7\u30fc\u30bf\u3092\u7d71\u5408\u3059\u308b\u65b9\u6cd5\u3092\u9078\u629e\n \n       If($UseSQL) // SQL\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\n          SQL LOGOUT // \u30ea\u30e2\u30fc\u30c8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\u3059\u308b\n          SQL LOGIN(SQL_INTERNAL;"user";"password") // \u30ed\u30fc\u30ab\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30ed\u30b0\u30a4\u30f3\n  // \u3053\u308c\u4ee5\u964d\u3001\u3059\u3079\u3066\u306eSQL\u547d\u4ee4\u306f\u30ed\u30fc\u30ab\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\n  // $a_LastName \u3068 $a_FirstName \u914d\u5217\u4e2d\u306e\u30c7\u30fc\u30bf\u3092\u30ed\u30fc\u30ab\u30eb\u306ePERSONS\u30c6\u30fc\u30d6\u30eb\u306b\u4fdd\u5b58\n          SQL EXECUTE("INSERT INTO PERSONS(LastName, FirstName) VALUES (:$a_LastName, :$a_FirstName);")\n          SQL CANCEL LOAD\n \n       Else // 4D\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\n \n          REDUCE SELECTION([PERSONS];0)\n          ARRAY TO SELECTION($a_LastName;[PERSONS]LastName;$a_FirstName;[PERSONS]FirstName)\n \n       End if\n    End if\n    SQL LOGOUT // \u63a5\u7d9a\u3092\u9589\u3058\u308b\n End if\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",children:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8"}),"\n",(0,d.jsx)(n.p,{children:"\u30b3\u30de\u30f3\u30c9\u304c\u6b63\u3057\u304f\u5b9f\u884c\u3055\u308c\u308b\u3068\u3001OK\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u306f1\u306b\u3001\u305d\u3046\u3067\u306a\u3051\u308c\u30700\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/sql-load-record",children:"SQL LOAD RECORD"})})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var d=s(296540);const l={},t=d.createContext(l);function a(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);