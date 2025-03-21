"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57211"],{903316:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/create-selection-from-array","title":"CREATE SELECTION FROM ARRAY","description":"CREATE SELECTION FROM ARRAY ( aTable ; recordArray {; selectionName} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/create-selection-from-array.md","sourceDirName":"commands-legacy","slug":"/commands/create-selection-from-array","permalink":"/docs/commands/create-selection-from-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-selection-from-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"create-selection-from-array","title":"CREATE SELECTION FROM ARRAY","slug":"/commands/create-selection-from-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Before selection","permalink":"/docs/commands/before-selection"},"next":{"title":"DELETE SELECTION","permalink":"/docs/commands/delete-selection"}}'),t=r("785893"),o=r("250065");let a={id:"create-selection-from-array",title:"CREATE SELECTION FROM ARRAY",slug:"/commands/create-selection-from-array",displayed_sidebar:"docs"},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CREATE SELECTION FROM ARRAY"})," ( ",(0,t.jsx)(n.em,{children:"aTable"})," ; ",(0,t.jsx)(n.em,{children:"recordArray"})," {; ",(0,t.jsx)(n.em,{children:"selectionName"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table from which to create the selection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"recordArray"}),(0,t.jsx)(n.td,{children:"Integer, Boolean array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Array of record numbers, or Array of booleans (True = the record is in the selection, False = the record is not in the selection)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"selectionName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Name of the named selection to create, or Apply the command to the current selection if the parameter is omitted"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"CREATE SELECTION FROM ARRAY"})," command creates the named selection ",(0,t.jsx)(n.em,{children:"selectionName"})," from:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["either an array of absolute record numbers ",(0,t.jsx)(n.em,{children:"recordArray"})," from ",(0,t.jsx)(n.em,{children:"aTable"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["or an array of Booleans. In this case, the values of the array indicate the belonging (",(0,t.jsx)(n.strong,{children:"True"}),") or not (",(0,t.jsx)(n.strong,{children:"False"}),") of each record in ",(0,t.jsx)(n.em,{children:"table"})," to ",(0,t.jsx)(n.em,{children:"selectionName"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warning:"})," A named selection is created and loaded into memory. Therefore, make sure that you have enough memory before executing this command."]}),"\n",(0,t.jsxs)(n.p,{children:["If you don\u2019t pass ",(0,t.jsx)(n.em,{children:"selectionName"})," or if you pass an empty string, the command will be applied to the current selection, which will then be updated."]}),"\n",(0,t.jsxs)(n.p,{children:["When you use a Longint array with this command, all the numbers of the array represent the list of record numbers in ",(0,t.jsx)(n.em,{children:"selectionName"}),". If a number is incorrect (record not created), error -10503 is generated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Be careful, you must make sure that the array does not contain any lines that have the same value, otherwise the resulting selection will be incorrect."]}),"\n",(0,t.jsxs)(n.p,{children:["When you use a Boolean array with this command, the Xth element of the array indicates if the record number X is (",(0,t.jsx)(n.strong,{children:"True"}),") or is not (",(0,t.jsx)(n.strong,{children:"False"}),") in ",(0,t.jsx)(n.em,{children:"selectionName"}),". The number of elements in ",(0,t.jsx)(n.em,{children:"recordArray"})," must be equal to the number of records in ",(0,t.jsx)(n.em,{children:"table"}),". If the array is smaller than the number of records, only the records defined by the array can make up the selection."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," With an array of booleans, the command uses elements from numbers 0 to X-1."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warning:"})," Keep in mind that a record number can be reused if the record is deleted and another record is created (see ",(0,t.jsx)(n.em,{children:"About Record Numbers"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"error-management",children:"Error management"}),"\n",(0,t.jsxs)(n.p,{children:["If a record number is invalid (record not created), the error -10503 is generated. You can intercept this error using a method installed by the ",(0,t.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/create-set-from-array",children:"CREATE SET FROM ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/longint-array-from-selection",children:"LONGINT ARRAY FROM SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/use-named-selection",children:"USE NAMED SELECTION"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"640"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifies variables"}),(0,t.jsx)(n.td,{children:"error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Changes current selection"}),(0,t.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var s=r(667294);let t={},o=s.createContext(t);function a(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);