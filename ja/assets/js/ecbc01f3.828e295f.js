"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1130"],{676507:function(n,e,l){l.r(e),l.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/sql-cancel-load","title":"SQL CANCEL LOAD","description":"SQL CANCEL LOAD","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sql-cancel-load.md","sourceDirName":"commands-legacy","slug":"/commands/sql-cancel-load","permalink":"/docs/ja/20-R8/commands/sql-cancel-load","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-cancel-load.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-cancel-load","title":"SQL CANCEL LOAD","slug":"/commands/sql-cancel-load","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET FIELD VALUE NULL","permalink":"/docs/ja/20-R8/commands/set-field-value-null"},"next":{"title":"SQL End selection","permalink":"/docs/ja/20-R8/commands/sql-end-selection"}}'),t=l("785893"),d=l("250065");let c={id:"sql-cancel-load",title:"SQL CANCEL LOAD",slug:"/commands/sql-cancel-load",displayed_sidebar:"docs"},r=void 0,a={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function i(n){let e={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"SQL CANCEL LOAD"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(e.table,{children:(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,t.jsx)(e.th,{})]})})}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsx)(e.p,{children:"SQL CANCEL LOAD \u30B3\u30DE\u30F3\u30C9\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u73FE\u5728\u306ESELECT\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u7D42\u4E86\u3057\u3066\u30D1\u30E9\u30E1\u30BF\u3092\u521D\u671F\u5316\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001",(0,t.jsx)(e.a,{href:"/docs/ja/20-R8/commands/sql-login",title:"SQL LOGIN",children:"SQL LOGIN"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u958B\u59CB\u3055\u308C\u305F\u540C\u4E00\u63A5\u7D9A\u5185\uFF08\u3064\u307E\u308A\u540C\u4E00\u30AB\u30FC\u30BD\u30EB\u5185\uFF09\u306B\u304A\u3044\u3066\u3001\u8907\u6570\u306ESELECT\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(e.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306F\u3001\u540C\u4E00\u63A5\u7D9A\u5185\u30672\u3064\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'\xa0var Myblob : Blob\n\xa0var MyText : Text\n\xa0SQL LOGIN("mysql";"root";"")\n\xa0\n\xa0SQLStmt:="SELECT blob_field FROM app_testTable"\n\xa0SQL EXECUTE(SQLStmt;Myblob)\n\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0End while\n\xa0\n\xa0\xa0//\u30AB\u30FC\u30BD\u30EB\u3092\u7F6E\u304D\u306A\u304A\u3059\u3002\n\xa0SQL CANCEL LOAD\n\xa0\n\xa0SQLStmt:="SELECT Name FROM Employee"\n\xa0SQL EXECUTE(SQLStmt;MyText)\n\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0End while\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,t.jsx)(e.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F1\u306B\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R8/commands/sql-load-record",children:"SQL LOAD RECORD"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/20-R8/commands/sql-login",children:"SQL LOGIN"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"824"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(e.td,{children:"OK"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return r},a:function(){return c}});var s=l(667294);let t={},d=s.createContext(t);function c(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);