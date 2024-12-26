"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5180"],{256115:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/create-set-from-array","title":"CREATE SET FROM ARRAY","description":"CREATE SET FROM ARRAY ( aTable ; recordsArray {; setName} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/create-set-from-array.md","sourceDirName":"commands-legacy","slug":"/commands/create-set-from-array","permalink":"/docs/commands/create-set-from-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-set-from-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-set-from-array","title":"CREATE SET FROM ARRAY","slug":"/commands/create-set-from-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE SET","permalink":"/docs/commands/create-set"},"next":{"title":"DIFFERENCE","permalink":"/docs/commands/difference"}}'),t=n("785893"),a=n("250065");let d={id:"create-set-from-array",title:"CREATE SET FROM ARRAY",slug:"/commands/create-set-from-array",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"CREATE SET FROM ARRAY"})," ( ",(0,t.jsx)(r.em,{children:"aTable"})," ; ",(0,t.jsx)(r.em,{children:"recordsArray"})," {; ",(0,t.jsx)(r.em,{children:"setName"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"aTable"}),(0,t.jsx)(r.td,{children:"Table"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Table of the set"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"recordsArray"}),(0,t.jsx)(r.td,{children:"Integer, Boolean array"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Array of record numbers, or Array of booleans (True = the record is in the set, False = the record is not in the set)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"setName"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Name of the set to create, or Apply the command to the Userset if omitted"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"CREATE SET FROM ARRAY"})," command creates ",(0,t.jsx)(r.em,{children:"setName"})," from:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Either an array of absolute record numbers ",(0,t.jsx)(r.em,{children:"recordsArray"})," from ",(0,t.jsx)(r.em,{children:"aTable"}),","]}),"\n",(0,t.jsxs)(r.li,{children:["Or an array of booleans ",(0,t.jsx)(r.em,{children:"recordsArray"}),". In this case, the values of the array indicate if each record in the table belongs (",(0,t.jsx)(r.strong,{children:"True"}),") or not (",(0,t.jsx)(r.strong,{children:"False"}),") to ",(0,t.jsx)(r.em,{children:"setName"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["When you use this command and pass a Longint array in ",(0,t.jsx)(r.em,{children:"recordsArray"}),", all the numbers in the array represent the list of record numbers that are in ",(0,t.jsx)(r.em,{children:"setName"}),". If a number is invalid (for example, if a record has not been created), the error -10503 is generated."]}),"\n",(0,t.jsxs)(r.p,{children:["When you use this command and pass a Boolean array in ",(0,t.jsx)(r.em,{children:"recordsArray"}),', the Nth element of the array indicates whether the "Nth" record is contained (',(0,t.jsx)(r.strong,{children:"True"}),") or not (",(0,t.jsx)(r.strong,{children:"False"}),") in ",(0,t.jsx)(r.em,{children:"setName"}),". Usually, the number of elements in the array must equal the number of records in the table. If the array is smaller than the number of records, only the records defined by the array will be in the set."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," With a Boolean array, this command uses the elements from 0 to N-1."]}),"\n",(0,t.jsxs)(r.p,{children:["If you do not pass the ",(0,t.jsx)(r.em,{children:"setName"})," parameter or if you pass an empty string, the command will be applied to the Userset system set."]}),"\n",(0,t.jsx)(r.h4,{id:"error-management",children:"Error management"}),"\n",(0,t.jsx)(r.p,{children:"In a Longint array, if a record number is invalid (record not created), the error -10503 is generated."}),"\n",(0,t.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/commands/boolean-array-from-set",children:"BOOLEAN ARRAY FROM SET"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"})]}),"\n",(0,t.jsx)(r.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Command number"}),(0,t.jsx)(r.td,{children:"641"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2713"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modifies variables"}),(0,t.jsx)(r.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return d}});var s=n(667294);let t={},a=s.createContext(t);function d(e){let r=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);