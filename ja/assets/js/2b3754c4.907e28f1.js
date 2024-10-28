"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25019],{568364:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var s=r(474848),t=r(28453);const i={id:"sql-execute-script",title:"SQL EXECUTE SCRIPT",slug:"/commands/sql-execute-script",displayed_sidebar:"docs"},c=void 0,d={id:"commands-legacy/sql-execute-script",title:"SQL EXECUTE SCRIPT",description:"SQL EXECUTE SCRIPT ( scriptPath ; errorAction {; attribName ; attribValue} {; attribName2 ; attribValue2 ; ... ; attribNameN ; attribValueN} )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-execute-script.md",sourceDirName:"commands-legacy",slug:"/commands/sql-execute-script",permalink:"/docs/ja/commands/sql-execute-script",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-execute-script.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sql-execute-script",title:"SQL EXECUTE SCRIPT",slug:"/commands/sql-execute-script",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SQL EXECUTE",permalink:"/docs/ja/commands/sql-execute"},next:{title:"SQL EXPORT DATABASE",permalink:"/docs/ja/commands/sql-export-database"}},l={},h=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4}];function x(n){const e={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"SQL EXECUTE SCRIPT"})," ( ",(0,s.jsx)(e.em,{children:"scriptPath"})," ; ",(0,s.jsx)(e.em,{children:"errorAction"})," {; ",(0,s.jsx)(e.em,{children:"attribName"})," ; ",(0,s.jsx)(e.em,{children:"attribValue"}),"} {; ",(0,s.jsx)(e.em,{children:"attribName2"})," ; ",(0,s.jsx)(e.em,{children:"attribValue2"})," ; ... ; ",(0,s.jsx)(e.em,{children:"attribNameN"})," ; ",(0,s.jsx)(e.em,{children:"attribValueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5f15\u6570"}),(0,s.jsx)(e.th,{children:"\u578b"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"scriptPath"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u5b9f\u884c\u3059\u308bSQL\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u66f8\u304b\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u5b8c\u5168\u30d1\u30b9\u540d"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"errorAction"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u5b9f\u884c\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306e\u30a2\u30af\u30b7\u30e7\u30f3"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"attribName"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u4f7f\u7528\u3059\u308b\u5c5e\u6027\u306e\u540d\u524d"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"attribValue"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u5c5e\u6027\u306e\u5024"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u306a\u30b3\u30fc\u30c9\u306b\u306f\u4f7f\u3048\u307e\u305b\u3093\u3002"})}),"\n",(0,s.jsx)(e.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,s.jsxs)(e.p,{children:["SQL EXECUTE SCRIPT\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,s.jsx)(e.em,{children:"scriptPath"}),"\u3067\u6307\u5b9a\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u30d5\u30a1\u30a4\u30eb\u306b\u66f8\u304b\u308c\u305f\u4e00\u9023\u306eSQL\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30ed\u30fc\u30ab\u30eb\u30de\u30b7\u30f3 (\u30ed\u30fc\u30ab\u30eb\u306e4D\u307e\u305f\u306f4D Server\u4e0a\u306e\u30b9\u30c8\u30a2\u30c9\u30d7\u30ed\u30b7\u30fc\u30b8\u30e3) \u3067\u306e\u307f\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30ab\u30ec\u30f3\u30c8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9 (\u5185\u90e8\u3042\u308b\u3044\u306f\u30a8\u30af\u30b9\u30bf\u30fc\u30ca\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9) \u306b\u5bfe\u3057\u3066\u52d5\u4f5c\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note"}),": \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u76f4\u63a5\u3042\u308b\u3044\u306fODBC\u7d4c\u7531\u3067\u958b\u304b\u308c\u305f\u5916\u90e8\u63a5\u7d9a\u3067\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"scriptPath"}),"\u5f15\u6570\u306b\u306f\u5b9f\u884c\u3059\u308bSQL\u6587\u304c\u66f8\u304b\u308c\u305f\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u5b8c\u5168\u30d1\u30b9\u540d\u3092\u6e21\u3057\u307e\u3059\u3002\u30d1\u30b9\u540d\u306f\u73fe\u5728\u306e\u30b7\u30b9\u30c6\u30e0\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3092\u4f7f\u7528\u3057\u3066\u8868\u73fe\u3055\u308c\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002",(0,s.jsx)(e.em,{children:"scriptPath"}),'\u306b\u7a7a\u306e\u6587\u5b57\u5217 ("") \u3092\u6e21\u3059\u3068\u3001\u6a19\u6e96\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304f\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u304c\u8868\u793a\u3055\u308c\u3001\u5b9f\u884c\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u30e6\u30fc\u30b6\u304c\u9078\u629e\u3067\u304d\u307e\u3059\u3002']}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note"}),": ",(0,s.jsx)(e.a,{href:"/docs/ja/commands/sql-export-database",title:"SQL EXPORT DATABASE",children:"SQL EXPORT DATABASE"}),"\u3068",(0,s.jsx)(e.a,{href:"/docs/ja/commands/sql-export-selection",title:"SQL EXPORT SELECTION",children:"SQL EXPORT SELECTION"}),"\u30b3\u30de\u30f3\u30c9\u306f\u81ea\u52d5\u3067\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"errorAction"}),' \u5f15\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u5b9f\u884c\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306e\u52d5\u4f5c\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002""\u30c6\u30fc\u30de\u4e2d\u306e\u4ee5\u4e0b\u306e3\u3064\u306e\u5b9a\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5b9a\u6570"}),(0,s.jsx)(e.th,{children:"\u578b"}),(0,s.jsx)(e.th,{children:"\u5024"}),(0,s.jsx)(e.th,{children:"\u30b3\u30e1\u30f3\u30c8"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"SQL On error abort"}),(0,s.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"\u30a8\u30e9\u30fc\u30a4\u30d9\u30f3\u30c8\u6642\u30014D\u306f\u5373\u5ea7\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u5b9f\u884c\u3092\u505c\u6b62\u3057\u307e\u3059\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"SQL On error confirm"}),(0,s.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"\u30a8\u30e9\u30fc\u30a4\u30d9\u30f3\u30c8\u6642\u30014D\u306f\u30a8\u30e9\u30fc\u3092\u8aac\u660e\u3059\u308b\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u8868\u793a\u3057\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u5b9f\u884c\u3092\u505c\u6b62\u3059\u308b\u304b\u7d9a\u884c\u3059\u308b\u304b\u3092\u30e6\u30fc\u30b6\u30fc\u304c\u9078\u629e\u3067\u304d\u307e\u3059\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"SQL On error continue"}),(0,s.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"\u30a8\u30e9\u30fc\u30a4\u30d9\u30f3\u30c8\u6642\u30014D\u306f\u305d\u308c\u3092\u7121\u8996\u3057\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5b9f\u884c\u3092\u7d9a\u884c\u3057\u307e\u3059\u3002"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"attribName"}),"\u3068",(0,s.jsx)(e.em,{children:"attribValue"}),"\u5f15\u6570\u306f\u7d44\u3067\u6e21\u3055\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u3053\u308c\u3089\u306e\u5f15\u6570\u306f\u30b9\u30af\u30ea\u30d7\u30c8\u5b9f\u884c\u306e\u305f\u3081\u306e\u7279\u5b9a\u306e\u5c5e\u6027\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u308b\u3053\u3068\u3092\u610f\u56f3\u3057\u3066\u3044\u307e\u3059\u3002\u73fe\u5728\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e4D \u3067\u306f\u3001\u4e00\u3064\u306e\u5c5e\u6027\u3092",(0,s.jsx)(e.em,{children:"attribName"}),'\u306b\u6e21\u305b\u307e\u3059\u3002""\u30c6\u30fc\u30de\u306e\u4ee5\u4e0b\u306e\u5b9a\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5b9a\u6570"}),(0,s.jsx)(e.th,{children:"\u578b"}),(0,s.jsx)(e.th,{children:"\u5024"}),(0,s.jsx)(e.th,{children:"\u30b3\u30e1\u30f3\u30c8"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"SQL use access rights"}),(0,s.jsx)(e.td,{children:"\u6587\u5b57\u5217"}),(0,s.jsx)(e.td,{children:"SQL_Use_Access_Rights"}),(0,s.jsxs)(e.td,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u306eSQL\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u4e2d\u306b\u9069\u7528\u3055\u308c\u308b\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u5236\u9650\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002\u3053\u306e\u5c5e\u6027\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001attribValue\u306b\u306f1\u307e\u305f\u306f0\u3092\u6e21\u3057\u307e\u3059:",(0,s.jsx)(e.br,{}),"attribValue = 1: 4D\u306f\u30ab\u30ec\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002attribValue = 0 (\u307e\u305f\u306f\u5c5e\u6027\u3092\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408): 4D\u306f\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3057\u307e\u305b\u3093\u3002\u30c7\u30b6\u30a4\u30ca\u30fc\u6a29\u9650\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]})]})})]}),"\n",(0,s.jsxs)(e.p,{children:["(",(0,s.jsx)(e.a,{href:"/docs/ja/commands/set-database-parameter",title:"SET DATABASE PARAMETER",children:"SET DATABASE PARAMETER"}),"\u306e\u30bb\u30ec\u30af\u30bf\u30fc28\u308445\u3067) 4D\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb\u304c\u6709\u52b9\u306b\u3055\u308c\u3066\u3044\u308b\u3068\u3001SQL\u30b3\u30de\u30f3\u30c9\u304c\u5b9f\u884c\u3055\u308c\u308b\u3054\u3068\u306b\u4ee5\u4e0b\u306e\u60c5\u5831\u304c\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SQL\u30b3\u30de\u30f3\u30c9\u306e\u30bf\u30a4\u30d7"}),"\n",(0,s.jsx)(e.li,{children:"\u30b3\u30de\u30f3\u30c9\u306e\u5f71\u97ff\u3092\u53d7\u3051\u308b\u30ec\u30b3\u30fc\u30c9\u6570"}),"\n",(0,s.jsx)(e.li,{children:"\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u6642\u9593"}),"\n",(0,s.jsxs)(e.li,{children:["\u30a8\u30e9\u30fc\u3092\u691c\u77e5\u3059\u308b\u3054\u3068\u306b:\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9"}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u80fd\u3067\u3042\u308c\u3070\u30a8\u30e9\u30fc\u30c6\u30ad\u30b9\u30c8"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u304c (\u30a8\u30e9\u30fc\u306a\u304f) \u6b63\u3057\u304f\u5b9f\u884c\u3055\u308c\u308b\u3068\u3001OK\u5909\u6570\u306b1\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3001OK\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u306b0\u304c\u8a2d\u5b9a\u3055\u308c\u308b\u304b\u3001\u307e\u305f\u306f",(0,s.jsx)(e.em,{children:"errorAction"}),"\u5f15\u6570\u306b\u8a2d\u5b9a\u306b\u57fa\u3065\u304d:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"errorAction"})," \u304cSQL On error abort (\u50241) \u306e\u5834\u5408\u3001OK\u306f0\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"errorAction"}),"\u304cSQL On error confirm (\u50242) \u306e\u5834\u5408\u3001\u30e6\u30fc\u30b6\u304c\u51e6\u7406\u3092\u4e2d\u65ad\u3059\u308b\u3068OK\u306b0\u304c\u3001\u7d9a\u884c\u3092\u9078\u629e\u3059\u308b\u30681\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"errorAction"}),"\u304cSQL On error continue (\u50243) \u306e\u5834\u5408\u3001OK\u306f\u5e38\u306b1\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note:"})," \u5927\u91cf\u306e\u30c7\u30fc\u30bf\u8aad\u307f\u8fbc\u307f\u306a\u3069\u3001\u30e1\u30e2\u30ea\u3092\u6d88\u8cbb\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u4e00\u6642\u7684\u306bSQL\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u7121\u52b9\u306b\u3059\u308b\u305f\u3081\u306b\u65b0\u3057\u3044SQL\u306eALTER DATABASE\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u3092\u691c\u8a0e\u3067\u304d\u307e\u3059\u3002"]})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>d});var s=r(296540);const t={},i=s.createContext(t);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);