"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30693"],{342674:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>i});var a=JSON.parse('{"id":"commands-legacy/selection-to-array","title":"SELECTION TO ARRAY","description":"SELECTION TO ARRAY {( aField | aTable ; array {; aField ; array {; aField2 ; array2 ; ... ; aFieldN ; arrayN}}{; *})}","source":"@site/versioned_docs/version-20-R7/commands-legacy/selection-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/selection-to-array","permalink":"/docs/commands/selection-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselection-to-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"selection-to-array","title":"SELECTION TO ARRAY","slug":"/commands/selection-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SELECTION RANGE TO ARRAY","permalink":"/docs/commands/selection-range-to-array"},"next":{"title":"Size of array","permalink":"/docs/commands/size-of-array"}}'),t=r("785893"),s=r("250065");let i={id:"selection-to-array",title:"SELECTION TO ARRAY",slug:"/commands/selection-to-array",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," {( aField | aTable ; ",(0,t.jsx)(n.em,{children:"array"})," {; ",(0,t.jsx)(n.em,{children:"aField"})," ; ",(0,t.jsx)(n.em,{children:"array"})," {; ",(0,t.jsx)(n.em,{children:"aField2"})," ; ",(0,t.jsx)(n.em,{children:"array2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"aFieldN"})," ; ",(0,t.jsx)(n.em,{children:"arrayN"}),"}}{; *})}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aField | aTable"}),(0,t.jsx)(n.td,{children:"Field, Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Field to use for retrieving data or Table to use for retrieving record numbers"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Array to receive field data or record numbers"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aField"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Field to retrieve in array"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Array to receive field data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Await execution"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," command creates one or more arrays and copies data in the fields or record numbers from the current selection into the arrays."]}),"\n",(0,t.jsxs)(n.p,{children:["The command ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," applies to the selection for the table designated by the first parameter (table name or field name). ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," can perform the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Load values from one or several fields."}),"\n",(0,t.jsxs)(n.li,{children:["Load Record numbers from the table using the syntax ",(0,t.jsx)(n.em,{children:"[table];array"})]}),"\n",(0,t.jsxs)(n.li,{children:["Load values from related fields, provided that there is a Many to One automatic relation between the tables or provided that you have previously called ",(0,t.jsx)(n.a,{href:"/docs/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," to make manual Many to One relations automatic. In both cases, values are loaded from tables through several levels of Many to One relations."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Each array is typed according to the field type."}),"\n",(0,t.jsxs)(n.p,{children:["When you apply ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," to a Time type field, it is important to note that they only create a Time type array if the array has not already been defined as another type. For example, in the following context, the ",(0,t.jsx)(n.em,{children:"myArray"})," array remains a Longint type array:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT(myArray;0)\n\xa0SELECTION TO ARRAY([myTable]myTimeField;myArray)\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you load record numbers, they are copied into a Long Integer array."}),"\n",(0,t.jsxs)(n.p,{children:["When you pass the ",(0,t.jsx)(n.em,{children:"*"})," parameter, 4D does not execute the corresponding statement line immediately but instead stores it in memory; this way you can stack several lines ending with an ",(0,t.jsx)(n.em,{children:"*"}),". All of these lines awaiting execution are executed by one final ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," statement that does not have the ",(0,t.jsx)(n.em,{children:"*"})," parameter. For this reason, the command can now be called without any parameters. In this case, array types are verified when the final line (without the ",(0,t.jsx)(n.em,{children:"*"})," parameter) is executed.",(0,t.jsx)(n.br,{}),"\nAs with the ",(0,t.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"})," command, this lets you break up a complex statement into a set of lines, which is easier to read and to maintain. You can also insert intermediary statements or build an array within a loop (see example 2 of the ",(0,t.jsx)(n.a,{href:"/docs/commands/array-to-selection",children:"ARRAY TO SELECTION"})," command)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server:"})," The ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," command is optimized for 4D Server. Each array is created on the server and then sent, in its entirety, to the client machine."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WARNING:"})," The ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," command can create large arrays, depending on the size of the current selection and on the type and size of the data you are loading. Arrays reside in memory, so it is a good idea to test the result after the command is completed. To do so, test the size of each resulting array or cover the call to the command, using an ",(0,t.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," project method."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," After a call to ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"}),", the current selection and current record remain the same, but the current record is no longer loaded. If you need to use the values of the fields in the current record, use the ",(0,t.jsx)(n.a,{href:"/docs/commands/load-record",children:"LOAD RECORD"})," command after the ",(0,t.jsx)(n.strong,{children:"SELECTION TO ARRAY"})," command."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(n.p,{children:["In the following example, the ",(0,t.jsx)(n.em,{children:"[People]"})," table has an automatic relation to the [Company] table. The two arrays ",(0,t.jsx)(n.em,{children:"asLastName"})," and ",(0,t.jsx)(n.em,{children:"asCompanyAddr"})," are sized according to the number of records selected in the ",(0,t.jsx)(n.em,{children:"[People]"})," table and will contain information from both tables:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SELECTION TO ARRAY([People]Last Name;asLastName;[Company]Address;asCompanyAddr)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:["The following example returns the ",(0,t.jsx)(n.em,{children:"[Clients]"})," record numbers in the array ",(0,t.jsx)(n.em,{children:"alRecordNumbers"})," and the ",(0,t.jsx)(n.em,{children:"[Clients]Names"})," field values in the array ",(0,t.jsx)(n.em,{children:"asNames"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SELECTION TO ARRAY([Clients];alRecordNumbers;[Clients]Names;asNames)\n"})}),"\n",(0,t.jsx)(n.p,{children:"The same example can be written:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SELECTION TO ARRAY([Clients];alRecordNumbers;*)\n\xa0SELECTION TO ARRAY([Clients]Names;asNames;*)\n\xa0SELECTION TO ARRAY\n"})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/array-to-selection",children:"ARRAY TO SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/multi-sort-array",children:"MULTI SORT ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})]}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"260"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var a=r(667294);let t={},s=a.createContext(t);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);