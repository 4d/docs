"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71036],{266627:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=t(474848),r=t(28453);const i={id:"distinct-values",title:"DISTINCT VALUES",slug:"/commands/distinct-values",displayed_sidebar:"docs"},a=void 0,d={id:"commands-legacy/distinct-values",title:"DISTINCT VALUES",description:"DISTINCT VALUES ( aField ; array {; countArray} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/distinct-values.md",sourceDirName:"commands-legacy",slug:"/commands/distinct-values",permalink:"/docs/commands/distinct-values",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdistinct-values.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"distinct-values",title:"DISTINCT VALUES",slug:"/commands/distinct-values",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DISTINCT ATTRIBUTE VALUES",permalink:"/docs/commands/distinct-attribute-values"},next:{title:"Find in array",permalink:"/docs/commands/find-in-array"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," ( ",(0,s.jsx)(n.em,{children:"aField"})," ; ",(0,s.jsx)(n.em,{children:"array"})," {; ",(0,s.jsx)(n.em,{children:"countArray"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aField"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Indexable field to use for data"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Array to receive field data"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"countArray"}),(0,s.jsx)(n.td,{children:"Array integer, Real array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Array to receive count of each value"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," command creates and populates the array ",(0,s.jsx)(n.em,{children:"array"})," with non-repeated (unique) values coming from the field ",(0,s.jsx)(n.em,{children:"aField"})," for the current selection of the table to which the field belongs and, optionally, returns the number of occurrences of each value in the ",(0,s.jsx)(n.em,{children:"countArray"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["You can pass to ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," any ",(0,s.jsx)(n.strong,{children:"indexable"})," field, that is, whose type supports indexing without necessarily being indexed.",(0,s.jsx)(n.br,{}),"\nHowever, executing this command on unindexed fields will be slower. Also note that, in this case, the command loses the current record."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," browses and retains the non-repeated values present only in the currently selected records."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When the ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," command is called during a transaction (that has not yet finished), it ",(0,s.jsx)(n.strong,{children:"will take"})," into account records created during that transaction."]}),"\n",(0,s.jsxs)(n.p,{children:["The array used by ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," must be of the same type as the field passed as first parameter, otherwise the array is retyped. There is one exception to this rule: if the field is of the Picture type (and is associated with a keyword index), the corresponding array must be of the Text type."]}),"\n",(0,s.jsxs)(n.p,{children:["After the call, the size of the array is equal to the number of distinct values found in the selection. The command does not change the current selection or the current record. The ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," command uses the index of the field, so the elements in ",(0,s.jsx)(n.em,{children:"array"})," are returned sorted in ascending order. If this is the order you need, you do not need to call ",(0,s.jsx)(n.a,{href:"/docs/commands/sort-array",children:"SORT ARRAY"})," after using ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," is executed with a text or picture field associated with a keyword index, the command fills the array with the keywords of the index. Unlike other types of data, the values returned differ according to the existence of the index. In the case of a Text field, the keyword index is always taken into account, even when the field is also associated with a standard index. If the Text or Picture field is not associated with a keyword index, the array is returned empty."]}),"\n",(0,s.jsxs)(n.p,{children:["The command accepts a ",(0,s.jsx)(n.em,{children:"countArray"})," array as an optional parameter. When it is passed, this array returns, for each non-repeated value in ",(0,s.jsx)(n.em,{children:"aField"}),", the number of occurrences detected in the current selection. The ",(0,s.jsx)(n.em,{children:"countArray"})," array is automatically sized to the number of elements in ",(0,s.jsx)(n.em,{children:"array"}),'. For example, for a selection that contains three records with field values "A", "B", and "A", ',(0,s.jsx)(n.em,{children:"array"})," will contain {A;B} and ",(0,s.jsx)(n.em,{children:"countArray"})," will contain {2;1}. You can pass either a Longint array or a Real array in ",(0,s.jsx)(n.em,{children:"countArray"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The ",(0,s.jsx)(n.em,{children:"countArray"})," parameter is not supported for text or picture fields that are associated with keyword indexes (in this context, it is returned empty)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WARNING:"})," ",(0,s.jsx)(n.strong,{children:"DISTINCT VALUES"})," can create large arrays depending on the size of the selection and the number of different values in the records. Arrays reside in memory, therefore it is a good idea to test the result after the completion of the command. To do so, test the size of the resulting array or cover the call to the command, using an ",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," project method."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server:"})," The command is optimized for 4D Server. The array is created and the values are calculated on the server machine; the array is then sent, in its entirety, to the client."]}),"\n",(0,s.jsx)(n.h5,{id:""}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command does not support Object type fields."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"The following example creates a list of cities from the current selection and tells the user the number of cities in which the firm has stores:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Retail Outlets])\xa0// Create a selection of records\n\xa0DISTINCT VALUES([Retail Outlets]City;asCities)\n\xa0ALERT("The firm has stores in "+String(Size of array(asCities))+" cities.")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:'You want to get a complete list of keywords contained in the keyword index for the "Pictures" field:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([PICTURES])\n\xa0ARRAY TEXT(<>_MyKeywords;10)\n\xa0DISTINCT VALUES([PICTURES]Photos;<>_MyKeywords)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"To compute statistics, you want to sort the number of distinct values in a field in descending order:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($_issue_type;0)\n\xa0ARRAY LONGINT($_issue_type_instance;0)\n\xa0DISTINCT VALUES([Issue]iType;$_issue_type;$_issue_type_instances)\n\xa0SORT ARRAY($_issue_type_instances;$_issue_type;<)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/get-text-keywords",children:"GET TEXT KEYWORDS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/selection-to-array",children:"SELECTION TO ARRAY"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(296540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);