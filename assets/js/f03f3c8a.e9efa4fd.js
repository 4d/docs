"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37459"],{604987:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>i,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/goto-selected-record","title":"GOTO SELECTED RECORD","description":"GOTO SELECTED RECORD ( {aTable ;} record )","source":"@site/versioned_docs/version-20-R8/commands-legacy/goto-selected-record.md","sourceDirName":"commands-legacy","slug":"/commands/goto-selected-record","permalink":"/docs/20-R8/commands/goto-selected-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-selected-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"goto-selected-record","title":"GOTO SELECTED RECORD","slug":"/commands/goto-selected-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET HIGHLIGHTED RECORDS","permalink":"/docs/20-R8/commands/get-highlighted-records"},"next":{"title":"HIGHLIGHT RECORDS","permalink":"/docs/20-R8/commands/highlight-records"}}'),s=r("785893"),d=r("250065");let o={id:"goto-selected-record",title:"GOTO SELECTED RECORD",slug:"/commands/goto-selected-record",displayed_sidebar:"docs"},c=void 0,l={},i=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GOTO SELECTED RECORD"})," ( {",(0,s.jsx)(n.em,{children:"aTable"})," ;} ",(0,s.jsx)(n.em,{children:"record"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table in which to go to the selected record, or Default table, if omitted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"record"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Position of record in the selection"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GOTO SELECTED RECORD"})," moves to the specified record in the current selection of ",(0,s.jsx)(n.em,{children:"aTable"})," and makes that record the current record. The current selection does not change. The ",(0,s.jsx)(n.em,{children:"record"})," parameter is not the same as the number returned by ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/record-number",children:"Record number"}),"; it represents the record\u2019s position in the current selection. The record\u2019s position depends on how the selection is made and whether or not the selection is sorted."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GOTO SELECTED RECORD"})," does nothing if:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"there are no records in the current selection"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"record"})," is not in the current selection,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"record"})," is already the current record."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass 0 in ",(0,s.jsx)(n.em,{children:"record"}),", there will no longer be a current record in ",(0,s.jsx)(n.em,{children:"aTable"}),". When the \u201Csingle\u201D selection mode is chosen, this allows you to deselect all the records in a list, in particular in the case of included subforms."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["The following example loads data from the field [People]Last Name into the ",(0,s.jsx)(n.em,{children:"atNames"})," array. An array of long integers, called ",(0,s.jsx)(n.em,{children:"alRecNum"}),", is filled with numbers that will represent the selected record numbers. Both arrays are then sorted:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Make any selection for the [People] table here\n\xa0\xa0// ...\n\xa0\xa0// Get the names\n\xa0SELECTION TO ARRAY([People]Last Name;atNames)\n\xa0\xa0// Create an array for the selected record numbers\n\xa0$vlNbRecords:=Size of array(atNames)\n\xa0ARRAY LONGINT(alRecNum;$vlNbRecords)\n\xa0For($vlRecord;1;$vlNbRecords)\n\xa0\xa0\xa0\xa0alRecNum{$vlRecord}:=$vlRecord\n\xa0End for\n\xa0\xa0// Sort the arrays in alphabetical order\n\xa0SORT ARRAY(atNames;alRecNum;>)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"atNames"})," array is displayed in a scrollable area, the user can click one of the items. Since the sorting of the two arrays is synchronized, any element in ",(0,s.jsx)(n.em,{children:"alRecNum"})," provides the selected record number for the record whose name is stored in the corresponding element in ",(0,s.jsx)(n.em,{children:"atNames"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The following object method for ",(0,s.jsx)(n.em,{children:"atNames"})," selects the correct record in the [People] selection, according to the name chosen in the scrollable area:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(atNames#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO SELECTED RECORD(alRecNum{atNames})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/selected-record-number",children:"Selected record number"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"245"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Changes current record"}),(0,s.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var t=r(667294);let s={},d=t.createContext(s);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);