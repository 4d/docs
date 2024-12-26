"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56807"],{806472:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/relate-one-selection","title":"RELATE ONE SELECTION","description":"RELATE ONE SELECTION ( manyTable ; oneTable )","source":"@site/versioned_docs/version-20-R7/commands-legacy/relate-one-selection.md","sourceDirName":"commands-legacy","slug":"/commands/relate-one-selection","permalink":"/docs/commands/relate-one-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelate-one-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"relate-one-selection","title":"RELATE ONE SELECTION","slug":"/commands/relate-one-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELATE ONE","permalink":"/docs/commands/relate-one"},"next":{"title":"SAVE RELATED ONE","permalink":"/docs/commands/save-related-one"}}'),r=s("785893"),l=s("250065");let o={id:"relate-one-selection",title:"RELATE ONE SELECTION",slug:"/commands/relate-one-selection",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RELATE ONE SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"manyTable"})," ; ",(0,r.jsx)(n.em,{children:"oneTable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"manyTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Many table name (from which the relation starts)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oneTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"One table name (to which the relation refers)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The RELATE ONE SELECTION command creates a new selection of records for the table ",(0,r.jsx)(n.em,{children:"oneTable"}),", based on the selection of records in the table ",(0,r.jsx)(n.em,{children:"manyTable"})," and loads the first record of the new selection as the current record."]}),"\n",(0,r.jsxs)(n.p,{children:["This command can only be used if there is a relation from ",(0,r.jsx)(n.em,{children:"manyTable"})," to ",(0,r.jsx)(n.em,{children:"oneTable"}),". RELATE ONE SELECTION can work across several levels of relations. There can be several related tables between ",(0,r.jsx)(n.em,{children:"manyTable"})," and ",(0,r.jsx)(n.em,{children:"oneTable"}),". The relations can be manual or automatic."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RELATE ONE SELECTION"}),' uses the "shortest" path to pass from the starting table to the destination table. If there are existing paths of the same size and you need to control the used path, you may consider using the ',(0,r.jsx)(n.a,{href:"/docs/commands/set-field-relation",children:"SET FIELD RELATION"})," command."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following example finds all the clients whose invoices are due today."}),"\n",(0,r.jsxs)(n.p,{children:["Here is one way of creating a selection in the ",(0,r.jsx)(n.em,{children:"[Customers]"})," table, given a selection of records in the ",(0,r.jsx)(n.em,{children:"[Invoices]"})," table:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE EMPTY SET([Customers];"Payment Due")\n\xa0QUERY([Invoices];[Invoices]DueDate=Current date)\n\xa0While(Not(End selection([Invoices])))\n\xa0\xa0\xa0\xa0RELATE ONE([Invoices]CustID)\n\xa0\xa0\xa0\xa0ADD TO SET([Customers];"Payment Due")\n\xa0\xa0\xa0\xa0NEXT RECORD([Invoices])\n\xa0End while\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The following technique uses ",(0,r.jsx)(n.strong,{children:"RELATE ONE SELECTION"})," to accomplish the same result:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Invoices];[Invoices]DueDate=Current date)\n\xa0RELATE ONE SELECTION([Invoices];[Customers])\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Since version 11, this code can be written as follows without any loss of performance:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Customers];[Invoices]DueDate=Current date)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/relate-many-selection",children:"RELATE MANY SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/relate-one",children:"RELATE ONE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Sets"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"349"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Changes current record"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Changes current selection"}),(0,r.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var t=s(667294);let r={},l=t.createContext(r);function o(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);