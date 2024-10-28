"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65815],{619456:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>r});var s=l(474848),t=l(28453);const c={id:"sql-cancel-load",title:"SQL CANCEL LOAD",slug:"/commands/sql-cancel-load",displayed_sidebar:"docs"},d=void 0,o={id:"commands-legacy/sql-cancel-load",title:"SQL CANCEL LOAD",description:"SQL CANCEL LOAD",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-cancel-load.md",sourceDirName:"commands-legacy",slug:"/commands/sql-cancel-load",permalink:"/docs/ja/commands/sql-cancel-load",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-cancel-load.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sql-cancel-load",title:"SQL CANCEL LOAD",slug:"/commands/sql-cancel-load",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET FIELD VALUE NULL",permalink:"/docs/ja/commands/set-field-value-null"},next:{title:"SQL End selection",permalink:"/docs/ja/commands/sql-end-selection"}},a={},r=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",id:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function i(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"SQL CANCEL LOAD"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u5f15\u6570\u3092\u5fc5\u8981\u3068\u3057\u307e\u305b\u3093"}),(0,s.jsx)(n.th,{})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u306a\u30b3\u30fc\u30c9\u306b\u306f\u4f7f\u3048\u307e\u305b\u3093\u3002"})}),"\n",(0,s.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,s.jsx)(n.p,{children:"SQL CANCEL LOAD \u30b3\u30de\u30f3\u30c9\u30b3\u30de\u30f3\u30c9\u306f\u3001\u73fe\u5728\u306eSELECT\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u7d42\u4e86\u3057\u3066\u30d1\u30e9\u30e1\u30bf\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/commands/sql-login",title:"SQL LOGIN",children:"SQL LOGIN"}),"\u30b3\u30de\u30f3\u30c9\u306b\u3088\u308a\u958b\u59cb\u3055\u308c\u305f\u540c\u4e00\u63a5\u7d9a\u5185\uff08\u3064\u307e\u308a\u540c\u4e00\u30ab\u30fc\u30bd\u30eb\u5185\uff09\u306b\u304a\u3044\u3066\u3001\u8907\u6570\u306eSELECT\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u4f8b\u984c\u3067\u306f\u3001\u540c\u4e00\u63a5\u7d9a\u5185\u30672\u3064\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var Myblob : Blob\n\xa0var MyText : Text\n\xa0SQL LOGIN("mysql";"root";"")\n\xa0\n\xa0SQLStmt:="SELECT blob_field FROM app_testTable"\n\xa0SQL EXECUTE(SQLStmt;Myblob)\n\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0End while\n\xa0\n\xa0\xa0//\u30ab\u30fc\u30bd\u30eb\u3092\u7f6e\u304d\u306a\u304a\u3059\u3002\n\xa0SQL CANCEL LOAD\n\xa0\n\xa0SQLStmt:="SELECT Name FROM Employee"\n\xa0SQL EXECUTE(SQLStmt;MyText)\n\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0End while\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",children:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8"}),"\n",(0,s.jsx)(n.p,{children:"\u30b3\u30de\u30f3\u30c9\u304c\u6b63\u3057\u304f\u5b9f\u884c\u3055\u308c\u308b\u3068\u3001\u30b7\u30b9\u30c6\u30e0\u5909\u6570OK\u306f1\u306b\u3001\u305d\u3046\u3067\u306a\u3051\u308c\u30700\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/sql-load-record",children:"SQL LOAD RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/sql-login",children:"SQL LOGIN"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>d,x:()=>o});var s=l(296540);const t={},c=s.createContext(t);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);