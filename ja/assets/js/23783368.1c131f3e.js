"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76031],{717716:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var d=s(474848),r=s(28453);const i={id:"begin-sql",title:"Begin SQL",slug:"/commands/begin-sql",displayed_sidebar:"docs"},t=void 0,c={id:"commands-legacy/begin-sql",title:"Begin SQL",description:"Begin SQL",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/begin-sql.md",sourceDirName:"commands-legacy",slug:"/commands/begin-sql",permalink:"/docs/ja/commands/begin-sql",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbegin-sql.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"begin-sql",title:"Begin SQL",slug:"/commands/begin-sql",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"STRING LIST TO ARRAY",permalink:"/docs/ja/commands/string-list-to-array"},next:{title:"End SQL",permalink:"/docs/ja/commands/end-sql"}},l={},o=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function a(n){const e={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"Begin SQL"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(e.table,{children:(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u5f15\u6570\u3092\u5fc5\u8981\u3068\u3057\u307e\u305b\u3093"}),(0,d.jsx)(e.th,{})]})})}),"\n",(0,d.jsx)(e.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Begin SQL"}),"\u306f\u30e1\u30bd\u30c3\u30c9\u30a8\u30c7\u30a3\u30bf\u3067\u4f7f\u7528\u3059\u308b\u30ad\u30fc\u30ef\u30fc\u30c9\u3067\u3001\u30d7\u30ed\u30bb\u30b9\u306e\u30ab\u30ec\u30f3\u30c8\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9 (4D\u306e\u7d71\u5408SQL\u30a8\u30f3\u30b8\u30f3\u3001\u307e\u305f\u306f",(0,d.jsx)(e.a,{href:"/docs/ja/commands/sql-login",children:"SQL LOGIN"}),"\u30b3\u30de\u30f3\u30c9\u3067\u7279\u5b9a\u3055\u308c\u305f\u30bd\u30fc\u30b9) \u306b\u3088\u308a\u89e3\u91c8\u3055\u308c\u308b\u3079\u304d\u4e00\u9023\u306e\u30b3\u30de\u30f3\u30c9\u306e\u59cb\u307e\u308a\u3092\u5ba3\u8a00\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Begin SQL"}),"\u3067\u958b\u59cb\u3055\u308c\u305f\u4e00\u9023\u306eSQL\u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/commands/end-sql",children:"End SQL"}),"\u30ad\u30fc\u30ef\u30fc\u30c9\u3067\u9589\u3058\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u308c\u3089\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3057\u307e\u3059:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u540c\u3058\u30e1\u30bd\u30c3\u30c9\u306b\u3001\u4e00\u3064\u4ee5\u4e0a\u306e",(0,d.jsx)(e.strong,{children:"Begin SQL/End SQL"}),"\u30bf\u30b0\u306e\u30d6\u30ed\u30c3\u30af\u3092\u7f6e\u304f\u3053\u3068\u304c\u3067\u304d\u3001\u3059\u3079\u3066SQL\u30b3\u30fc\u30c9\u304b\u3089\u6210\u308b\u30e1\u30bd\u30c3\u30c9\u30844D\u30b3\u30fc\u30c9\u3068SQL\u30b3\u30fc\u30c9\u3092\u6df7\u5408\u3055\u305b\u305f\u30e1\u30bd\u30c3\u30c9\u3082\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(e.li,{children:'\u540c\u3058\u884c\u306b\u5e7e\u3064\u304b\u306eSQL\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3092\u66f8\u304d\u8fbc\u307f\u3001\u305d\u308c\u3089\u306eSQL\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3092\u30bb\u30df\u30b3\u30ed\u30f3 ";" \u3067\u533a\u5207\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u66f8\u304d\u3053\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002'}),"\n"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0Begin SQL\n\xa0\xa0\xa0\xa0INSERT INTO SALESREPS (NAME, AGE) VALUES (\u2018Henry\u2019,40);\n\xa0\xa0\xa0\xa0INSERT INTO SALESREPS (NAME, AGE) VALUES (\u2018Bill\u2019,35)\n\xa0End SQL\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u307e\u305f\u306f"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0Begin SQL\n\xa0\xa0\xa0\xa0INSERT INTO SALESREPS (NAME, AGE) VALUES (\u2018Henry\u2019,40);INSERT INTO SALESREPS (NAME, AGE) VALUES (\u2018Bill\u2019,35)\n\xa0End SQL\n"})}),"\n",(0,d.jsxs)(e.p,{children:["4D\u306e",(0,d.jsx)(e.em,{children:"\u30c7\u30d0\u30c3\u30ac"}),"\u306f\u884c\u3054\u3068\u306bSQL\u547d\u4ee4\u884c\u3092\u8a55\u4fa1\u3057\u307e\u3059\u3002\u4e00\u884c\u4ee5\u4e0a\u4f7f\u7528\u3057\u305f\u65b9\u304c\u597d\u307e\u3057\u3044\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u306e\u3067\u3054\u6ce8\u610f\u4e0b\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/commands/end-sql",children:"End SQL"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/sql-get-current-data-source",children:"SQL Get current data source"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/sql-login",children:"SQL LOGIN"})]})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var d=s(296540);const r={},i=d.createContext(r);function t(n){const e=d.useContext(i);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);