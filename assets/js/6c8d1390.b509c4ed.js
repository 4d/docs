"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61006"],{992470:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/array-to-selection","title":"ARRAY TO SELECTION","description":"ARRAY TO SELECTION {( array ; aField {; array2 ; aField2 ; ... ; arrayN ; aFieldN}{; *} )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/array-to-selection.md","sourceDirName":"commands-legacy","slug":"/commands/array-to-selection","permalink":"/docs/commands/array-to-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-to-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-to-selection","title":"ARRAY TO SELECTION","slug":"/commands/array-to-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TO LIST","permalink":"/docs/commands/array-to-list"},"next":{"title":"BOOLEAN ARRAY FROM SET","permalink":"/docs/commands/boolean-array-from-set"}}'),s=t("785893"),a=t("250065");let i={id:"array-to-selection",title:"ARRAY TO SELECTION",slug:"/commands/array-to-selection",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY TO SELECTION"})," {( ",(0,s.jsx)(n.em,{children:"array"})," ; ",(0,s.jsx)(n.em,{children:"aField"})," {; ",(0,s.jsx)(n.em,{children:"array2"})," ; ",(0,s.jsx)(n.em,{children:"aField2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"arrayN"})," ; ",(0,s.jsx)(n.em,{children:"aFieldN"}),"}{; *} )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array to copy to the selection"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aField"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Field to receive the array data"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Await execution"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"ARRAY TO SELECTION"})," command copies one or more arrays into a selection of records. All fields listed must belong to the same table."]}),"\n",(0,s.jsx)(n.p,{children:"If a selection exists at the time of the call, the elements of the array are put into the records, based on the order of the array and the order of the records. If there are more elements than records, new records are created. The records, whether new or existing, are automatically saved."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Since it can create new records, this command does not take a table's read-only state (if any) into account (see ",(0,s.jsx)(n.em,{children:"Record Locking"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"All the arrays must have the same number of elements. If the arrays are of different sizes, a syntax error is generated."}),"\n",(0,s.jsxs)(n.p,{children:["This command does the reverse of ",(0,s.jsx)(n.a,{href:"/docs/commands/selection-to-array",children:"SELECTION TO ARRAY"}),". However, the ",(0,s.jsx)(n.strong,{children:"ARRAY TO SELECTION"})," command does not allow fields from different tables, including related tables, even when an automatic relation exists."]}),"\n",(0,s.jsxs)(n.p,{children:["When you pass the ",(0,s.jsx)(n.em,{children:"*"})," parameter, 4D does not execute the corresponding statement line immediately but instead stores it in memory; this way you can stack several lines ending with an ",(0,s.jsx)(n.em,{children:"*"}),". All of these lines awaiting execution are executed by one final ",(0,s.jsx)(n.strong,{children:"ARRAY TO SELECTION"})," statement that does not have the ",(0,s.jsx)(n.em,{children:"*"})," parameter. For this reason, the command can now be called without any parameters.",(0,s.jsx)(n.br,{}),"\nAs with the ",(0,s.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"})," command, this lets you break up a complex statement into a set of lines, which is easier to read and to maintain. You can also insert intermediary statements."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WARNING:"})," Use ",(0,s.jsx)(n.strong,{children:"ARRAY TO SELECTION"})," with caution, because it overwrites information in existing records. If a record is locked by another process during the execution of ",(0,s.jsx)(n.strong,{children:"ARRAY TO SELECTION"}),", that record is not modified. Any locked records are put into the process set called LockedSet. After ",(0,s.jsx)(n.strong,{children:"ARRAY TO SELECTION"})," has executed, you can test the set LockedSet to see if any records were locked."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": This command does not take into account the read-only/read-write state of the table containing the field."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server:"})," The command is optimized for 4D Server. Arrays are sent by the client machine to the server, and the records are modified or created on the server machine. As such a request is handled synchronously, the client machine must wait for the operation to be completed successfully. In the multi-user or multi-process environment, any records that are locked will not be overwritten."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["In the following example, the two arrays ",(0,s.jsx)(n.em,{children:"asLastNames"})," and ",(0,s.jsx)(n.em,{children:"asCompanies"})," place data in the ",(0,s.jsx)(n.em,{children:"[People]"})," table. The values from the array ",(0,s.jsx)(n.em,{children:"asLastNames"})," area placed in the field ",(0,s.jsx)(n.em,{children:"[People]Last Name"})," and the values from the array ",(0,s.jsx)(n.em,{children:"asCompanies"})," are placed in the field ",(0,s.jsx)(n.em,{children:"[People]Company"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TO SELECTION(asLastNames;[People]Last Name;asCompanies;[People]Company)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"You want to copy a selection of records to an archive table by selecting the fields according to the option value:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($_name;0)\n\xa0ARRAY TEXT($_firstname;0)\n\xa0ARRAY TEXT($_cv;0)\n\xa0ARRAY PICTURE($_photo;0)\n\xa0\n\xa0SELECTION TO ARRAY([Candidate]Name;$_name;*)\n\xa0SELECTION TO ARRAY([Candidate]Firstname;$_firstname;*)\n\xa0If(withCV)\xa0//load the CV field\n\xa0\xa0\xa0\xa0SELECTION TO ARRAY([Candidate]cv;$_cv;*)\n\xa0End if\n\xa0If(withPhoto)\xa0//load the photo field\n\xa0\xa0\xa0\xa0SELECTION TO ARRAY([Candidate]photo;$_photo;*)\n\xa0End if\n\xa0SELECTION TO ARRAY\xa0//execute copy\n\xa0\n\xa0REDUCE SELECTION([Candidate_Archive];0)\n\xa0ARRAY TO SELECTION($_name;[Candidate_Archive]Name;*)\n\xa0ARRAY TO SELECTION($_prenom;[Candidate_Archive]Firstname;*)\n\xa0If(withCV)\n\xa0\xa0\xa0\xa0ARRAY TO SELECTION($_cv;[Candidate_Archive]cv;*)\n\xa0End if\n\xa0If(withPhoto)\n\xa0\xa0\xa0\xa0ARRAY TO SELECTION($_photo;[Candidate_Archive]photo;*)\n\xa0End if\n\xa0ARRAY TO SELECTION\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"System Variables"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"261"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Changes current selection"}),(0,s.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(667294);let s={},a=r.createContext(s);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);