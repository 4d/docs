"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44945"],{318711:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>i,toc:()=>d,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/apply-to-selection","title":"APPLY TO SELECTION","description":"APPLY TO SELECTION ( aTable ; statement )","source":"@site/versioned_docs/version-20-R7/commands-legacy/apply-to-selection.md","sourceDirName":"commands-legacy","slug":"/commands/apply-to-selection","permalink":"/docs/commands/apply-to-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fapply-to-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"apply-to-selection","title":"APPLY TO SELECTION","slug":"/commands/apply-to-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ALL RECORDS","permalink":"/docs/commands/all-records"},"next":{"title":"Before selection","permalink":"/docs/commands/before-selection"}}'),r=n("785893"),l=n("250065");let o={id:"apply-to-selection",title:"APPLY TO SELECTION",slug:"/commands/apply-to-selection",displayed_sidebar:"docs"},a=void 0,i={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"APPLY TO SELECTION"})," ( ",(0,r.jsx)(t.em,{children:"aTable"})," ; ",(0,r.jsx)(t.em,{children:"statement"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"aTable"}),(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Table for which to apply statement"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"statement"}),(0,r.jsx)(t.td,{children:"Expression"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"One line of code or a method"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"APPLY TO SELECTION"})," applies ",(0,r.jsx)(t.em,{children:"statement"})," to each record in the current selection of ",(0,r.jsx)(t.em,{children:"aTable"}),". The ",(0,r.jsx)(t.em,{children:"statement"})," can be a statement or a method. If ",(0,r.jsx)(t.em,{children:"statement"})," modifies a record of ",(0,r.jsx)(t.em,{children:"aTable"}),", the modified record is saved. If ",(0,r.jsx)(t.em,{children:"statement"})," does not modify a record, the record is not saved. If the current selection is empty, ",(0,r.jsx)(t.strong,{children:"APPLY TO SELECTION"})," has no effect. If the relation is automatic, the ",(0,r.jsx)(t.em,{children:"statement"})," can contain a field from a related table."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Warning:"})," Parameters ($1...$n) are not supported in the ",(0,r.jsx)(t.em,{children:"statement"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"APPLY TO SELECTION"})," can be used to gather information from the selection of records (for example, a total), or to modify a selection (for example, changing the first letter of a field to uppercase). If this command is used within a transaction, all changes can be undone if the transaction is canceled."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"4D Server:"})," The server does not execute any of the commands that may be passed in ",(0,r.jsx)(t.em,{children:"statement"}),". Every record in the selection will be sent back to the local workstation to be modified."]}),"\n",(0,r.jsxs)(t.p,{children:["The progress thermometer is displayed while ",(0,r.jsx)(t.strong,{children:"APPLY TO SELECTION"})," is executing. To hide it, use ",(0,r.jsx)(t.a,{href:"/docs/commands/messages-off",children:"MESSAGES OFF"})," prior to the call to ",(0,r.jsx)(t.strong,{children:"APPLY TO SELECTION"}),". If the progress thermometer is displayed, the user can cancel the operation."]}),"\n",(0,r.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:"The following example changes all the names in the table [Employees] to uppercase:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0APPLY TO SELECTION([Employees];[Employees]Last Name:=Uppercase([Employees]Last Name))\n"})}),"\n",(0,r.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(t.p,{children:["If a record is locked during execution of ",(0,r.jsx)(t.strong,{children:"APPLY TO SELECTION"})," and that record is modified, the record will not be saved. Any locked records that are encountered are put in a set called LockedSet. After ",(0,r.jsx)(t.strong,{children:"APPLY TO SELECTION"})," has executed, test LockedSet to see if any records were locked. The following loop will execute until all records have been modified:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0Repeat\n\xa0\xa0\xa0\xa0APPLY TO SELECTION([Employees];[Employees]Last Name:=Uppercase([Employees]Last Name))\n\xa0\xa0\xa0\xa0USE SET("LockedSet")\xa0// Select only locked records\n\xa0Until(Records in set("LockedSet")=0)\xa0// Done when there are no locked records\n'})}),"\n",(0,r.jsx)(t.h4,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(t.p,{children:"This example uses a method:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0ALL RECORDS([Employees])\n\xa0APPLY TO SELECTION([Employees];M_Cap)\n"})}),"\n",(0,r.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(t.p,{children:"If the user clicks the Stop button in the progress thermometer, the OK system variable is set to 0. Otherwise, the OK system variable is set to 1."}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/edit-formula",children:"EDIT FORMULA"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.em,{children:"Sets"})]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var s=n(667294);let r={},l=s.createContext(r);function o(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);