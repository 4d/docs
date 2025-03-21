"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6916"],{957924:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/sql-cancel-load","title":"SQL CANCEL LOAD","description":"SQL CANCEL LOAD","source":"@site/versioned_docs/version-20-R7/commands-legacy/sql-cancel-load.md","sourceDirName":"commands-legacy","slug":"/commands/sql-cancel-load","permalink":"/docs/20-R7/commands/sql-cancel-load","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-cancel-load.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-cancel-load","title":"SQL CANCEL LOAD","slug":"/commands/sql-cancel-load","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET FIELD VALUE NULL","permalink":"/docs/20-R7/commands/set-field-value-null"},"next":{"title":"SQL End selection","permalink":"/docs/20-R7/commands/sql-end-selection"}}'),l=s("785893"),r=s("250065");let d={id:"sql-cancel-load",title:"SQL CANCEL LOAD",slug:"/commands/sql-cancel-load",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"SQL CANCEL LOAD"})}),"\n\n\n\n\n\n\n\n",(0,l.jsx)(n.table,{children:(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Does not require any parameters"}),(0,l.jsx)(n.th,{})]})})}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"SQL CANCEL LOAD"})," command ends the current SELECT request and initializes the parameters."]}),"\n",(0,l.jsxs)(n.p,{children:["This command is used to execute several SELECT requests within the same connection (i.e. the same cursor) initiated by the ",(0,l.jsx)(n.a,{href:"/docs/20-R7/commands/sql-login",children:"SQL LOGIN"})," command."]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"In this example, two requests are executed in the same connection:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var Myblob : Blob\n\xa0var MyText : Text\n\xa0SQL LOGIN("mysql";"root";"")\n\xa0\n\xa0SQLStmt:="SELECT blob_field FROM app_testTable"\n\xa0SQL EXECUTE(SQLStmt;Myblob)\n\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0End while\n\xa0\n\xa0\xa0//Resetting of cursor\n\xa0SQL CANCEL LOAD\n\xa0\n\xa0SQLStmt:="SELECT Name FROM Employee"\n\xa0SQL EXECUTE(SQLStmt;MyText)\n\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0End while\n'})}),"\n",(0,l.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,l.jsx)(n.p,{children:"If the command has been correctly executed, the system variable OK returns 1. Otherwise, it returns 0."}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/20-R7/commands/sql-load-record",children:"SQL LOAD RECORD"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/20-R7/commands/sql-login",children:"SQL LOGIN"})]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"824"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2717"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifies variables"}),(0,l.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var t=s(667294);let l={},r=t.createContext(l);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);