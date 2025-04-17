"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9275"],{363612:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>i,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/default-table","title":"DEFAULT TABLE","description":"DEFAULT TABLE ( aTable )","source":"@site/versioned_docs/version-20-R8/commands-legacy/default-table.md","sourceDirName":"commands-legacy","slug":"/commands/default-table","permalink":"/docs/20-R8/commands/default-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdefault-table.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"default-table","title":"DEFAULT TABLE","slug":"/commands/default-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current form table","permalink":"/docs/20-R8/commands/current-form-table"},"next":{"title":"NO DEFAULT TABLE","permalink":"/docs/20-R8/commands/no-default-table"}}'),a=t("785893"),r=t("250065");let d={id:"default-table",title:"DEFAULT TABLE",slug:"/commands/default-table",displayed_sidebar:"docs"},l=void 0,o={},i=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"DEFAULT TABLE"})," ( ",(0,a.jsx)(n.em,{children:"aTable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"aTable"}),(0,a.jsx)(n.td,{children:"Table"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Table to set as the default"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Tip:"})," Although using ",(0,a.jsx)(n.strong,{children:"DEFAULT TABLE"})," and omitting the table name may make the code easier to read, many programmers find that using this command actually causes more problems and confusion than it is worth. In particular, note that ",(0,a.jsx)(n.a,{href:"/docs/20-R8/commands/default-table",children:"DEFAULT TABLE"})," takes priority when you use, for example, the ",(0,a.jsx)(n.a,{href:"/docs/20-R8/commands/dialog",children:"DIALOG"})," command with a project form and there is a default table form with the same name."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"DEFAULT TABLE"})," sets ",(0,a.jsx)(n.em,{children:"aTable"})," as the default table for the current process."]}),"\n",(0,a.jsxs)(n.p,{children:["There is no default table for a process until the ",(0,a.jsx)(n.strong,{children:"DEFAULT TABLE"})," command is executed. After a default table has been set, any command that omits the ",(0,a.jsx)(n.em,{children:"table"})," parameter will operate on the default table. For example, consider this command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Table];"form")\n'})}),"\n",(0,a.jsx)(n.p,{children:"If the default table is first set to [Table], the same command could be written this way:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET INPUT("form")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["One reason for setting the default table is to create code that is not table specific. Doing this allows the same code to operate on different tables. You can also use pointers to tables to write code that is not table specific. For more information about this technique, see the description of the ",(0,a.jsx)(n.a,{href:"/docs/20-R8/commands/table-name",children:"Table name"})," command."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"DEFAULT TABLE"})," does not allow the omission of table names when referring to fields. For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0[My Table]My Field:="A string"\xa0//Good\n'})}),"\n",(0,a.jsx)(n.p,{children:"could not be written as:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0DEFAULT TABLE([My Table])\n\xa0My Field:="A string"\xa0//WRONG\n'})}),"\n",(0,a.jsx)(n.p,{children:"because a default table had been set."}),"\n",(0,a.jsxs)(n.p,{children:["In 4D, all tables are \u201Copen\u201D and ready for use. ",(0,a.jsx)(n.strong,{children:"DEFAULT TABLE"})," does not open a table, set a current table, or prepare the table for input or output. ",(0,a.jsx)(n.strong,{children:"DEFAULT TABLE"})," is simply a programming convenience to reduce the amount of typing and make the code easier to read."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["The following example first shows code without the DEFAULT TABLE command. It then shows the same code, with DEFAULT TABLE. The code is a loop commonly used to add new records to a database. The ",(0,a.jsx)(n.a,{href:"/docs/20-R8/commands/form-set-input",children:"FORM SET INPUT"})," and ",(0,a.jsx)(n.a,{href:"/docs/20-R8/commands/add-record",children:"ADD RECORD"})," commands both require a table as the first parameter:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Customers];"Add Recs")\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD([Customers])\n\xa0Until(OK=0)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Specifying the default table results in this code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0DEFAULT TABLE([Customers])\n\xa0FORM SET INPUT("Add Recs")\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD\n\xa0Until(OK=0)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/20-R8/commands/current-default-table",children:"Current default table"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/20-R8/commands/no-default-table",children:"NO DEFAULT TABLE"})]}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"46"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let a={},r=s.createContext(a);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);