"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1532"],{758586:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/begin-sql","title":"Begin SQL","description":"Begin SQL","source":"@site/versioned_docs/version-20-R7/commands-legacy/begin-sql.md","sourceDirName":"commands-legacy","slug":"/commands/begin-sql","permalink":"/docs/20-R7/commands/begin-sql","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbegin-sql.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"begin-sql","title":"Begin SQL","slug":"/commands/begin-sql","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL","permalink":"/docs/20-R7/category/sql"},"next":{"title":"End SQL","permalink":"/docs/20-R7/commands/end-sql"}}'),r=s("785893"),i=s("250065");let d={id:"begin-sql",title:"Begin SQL",slug:"/commands/begin-sql",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Begin SQL"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Does not require any parameters"}),(0,r.jsx)(n.th,{})]})})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Begin SQL is a keyword used in the Method editor to indicate the beginning of a sequence of SQL commands that must be interpreted by the current data source of the process (the integrated SQL engine of 4D or any source specified via the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/sql-login",children:"SQL LOGIN"})," command)."]}),"\n",(0,r.jsxs)(n.p,{children:["A sequence of SQL commands started with Begin SQL must be closed with the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/begin-sql",children:"Begin SQL"})," keyword."]}),"\n",(0,r.jsx)(n.p,{children:"These keywords work as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You can place one or more blocks of ",(0,r.jsx)(n.strong,{children:"Begin SQL/End SQL"})," tags in the same method. You can generate methods made up entirely of SQL code or mix 4D code and SQL code in the same method."]}),"\n",(0,r.jsx)(n.li,{children:"You can write several SQL statements on the same line or on different lines by separating them with a semi-colon \u201C;\u201D. For example, you can write:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Begin SQL\n\xa0\xa0\xa0\xa0INSERT INTO SALESREPS (NAME, AGE) VALUES (\u2018Henry\u2019,40);\n\xa0\xa0\xa0\xa0INSERT INTO SALESREPS (NAME, AGE) VALUES (\u2018Bill\u2019,35)\n\xa0End SQL\n"})}),"\n",(0,r.jsx)(n.p,{children:"or:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Begin SQL\n\xa0\xa0\xa0\xa0INSERT INTO SALESREPS (NAME, AGE) VALUES (\u2018Henry\u2019,40);INSERT INTO SALESREPS (NAME, AGE) VALUES (\u2018Bill\u2019,35)\n\xa0End SQL\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that the 4D ",(0,r.jsx)(n.em,{children:"Debugger"})," will evaluate the SQL code line by line. In certain cases, it may be preferable to use more than one line."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/end-sql",children:"End SQL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/sql-get-current-data-source",children:"SQL Get current data source"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/sql-login",children:"SQL LOGIN"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"948"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);