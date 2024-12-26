"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52472"],{560888:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/order-by","title":"ORDER BY","description":"ORDER BY ( {aTable ;}{ aField }{; >\xa0or\xa0\xa0or\xa0\xa0or\xa0<N}{; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/order-by.md","sourceDirName":"commands-legacy","slug":"/commands/order-by","permalink":"/docs/commands/order-by","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Forder-by.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"order-by","title":"ORDER BY","slug":"/commands/order-by","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Last query plan","permalink":"/docs/commands/last-query-plan"},"next":{"title":"ORDER BY ATTRIBUTE","permalink":"/docs/commands/order-by-attribute"}}'),t=r("785893"),l=r("250065");let d={id:"order-by",title:"ORDER BY",slug:"/commands/order-by",displayed_sidebar:"docs"},i=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"Example 6",id:"example-6",level:4},{value:"Example 7",id:"example-7",level:4},{value:"Example 8",id:"example-8",level:4},{value:"Example 9",id:"example-9",level:4},{value:"Example 10",id:"example-10",level:4},{value:"Example 11",id:"example-11",level:4},{value:"Example 12",id:"example-12",level:4},{value:"Example 13",id:"example-13",level:4},{value:"Example 14",id:"example-14",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ORDER BY"})," ( {",(0,t.jsx)(n.em,{children:"aTable"})," ;}{ ",(0,t.jsx)(n.em,{children:"aField"})," }{; >\xa0or\xa0< }{; ",(0,t.jsx)(n.em,{children:"aField2"})," ; >\xa0or\xa0<2 ; ... ; ",(0,t.jsx)(n.em,{children:"aFieldN"})," ; >\xa0or\xa0<N}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table for which to order selected records, or Default table, if omitted"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aField"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Field on which to set the order for each level"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:">\xa0or\xa0<"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Ordering direction for each level: > to order in ascending order, or < to order in descending order"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Continue order flag"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ORDER BY"})," sorts (reorders) the records of the current selection of ",(0,t.jsx)(n.em,{children:"aTable"})," for the current process. After the sort has been completed, the new first record of the selection becomes the current record."]}),"\n",(0,t.jsxs)(n.p,{children:["If you omit the ",(0,t.jsx)(n.em,{children:"aTable"})," parameter, the command applies to the default table, if it has been specified. Otherwise, 4D uses the table of the first field passed as a parameter. If you do not pass a parameter and if no default table has been specified, an error is returned."]}),"\n",(0,t.jsxs)(n.p,{children:["If you do not specify the ",(0,t.jsx)(n.em,{children:"aField"}),", the ",(0,t.jsx)(n.em,{children:"> or <"})," or the ",(0,t.jsx)(n.em,{children:"*"})," parameters, ",(0,t.jsx)(n.strong,{children:"ORDER BY"})," displays the Order By editor for ",(0,t.jsx)(n.em,{children:"aTable"}),". The Order By editor is shown here:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(407940).Z+"",width:"626",height:"410"})}),"\n",(0,t.jsx)(n.p,{children:"For more information about using the Order By editor, refer to the 4D Design Reference manual."}),"\n",(0,t.jsxs)(n.p,{children:["If you specify the ",(0,t.jsx)(n.em,{children:"aField"})," and ",(0,t.jsx)(n.em,{children:"> or <"})," parameters, the standard Order By editor is not presented and the sort is defined programmatically. You can sort the selection on one level or on several levels. For each sort level, you specify a field in ",(0,t.jsx)(n.em,{children:"aField"})," and the sorting order in ",(0,t.jsx)(n.em,{children:"> or <"}),". If you pass the \u201Cgreater than\u201D symbol (>), the order is ascending. If you pass the \u201Cless than\u201D symbol (<), the order is descending.",(0,t.jsx)(n.br,{}),"\nIf you omit the sorting order parameter ",(0,t.jsx)(n.em,{children:"> or <"}),", ascending order is the default."]}),"\n",(0,t.jsxs)(n.p,{children:["If only one field is specified (one level sort) and it is indexed, the index is used for the order. If the field is not indexed or if there is more than one field, the order is performed sequentially (except in the case of composite indexes). The field may belong to the (selection\u2019s) table being reordered or to a One table related to ",(0,t.jsx)(n.em,{children:"aTable"})," with an automatic relation. In this case, the sort is always sequential.",(0,t.jsx)(n.br,{}),"\nIf the sorted fields are included in a composite index, ",(0,t.jsx)(n.strong,{children:"ORDER BY"})," uses the index for the order."]}),"\n",(0,t.jsxs)(n.p,{children:["For multiple sorts (sorts on multiple fields), you can call ",(0,t.jsx)(n.strong,{children:"ORDER BY"})," as many times as necessary and specify the optional ",(0,t.jsx)(n.em,{children:"*"})," parameter, except for the last ",(0,t.jsx)(n.strong,{children:"ORDER BY"})," call, which starts the actual sort operation. This feature is useful for multiple sorts management in customized user interfaces.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Warning:"})," with this syntax, you can pass only one sort level (field) per ",(0,t.jsx)(n.strong,{children:"ORDER BY"})," call."]}),"\n",(0,t.jsxs)(n.p,{children:["No matter what way a sort has been defined, if the actual sort operation is going to take some time to be performed, 4D automatically displays a message containing a progress thermometer. These messages can be turned on and off by using the commands ",(0,t.jsx)(n.a,{href:"/docs/commands/messages-on",children:"MESSAGES ON"})," and ",(0,t.jsx)(n.a,{href:"/docs/commands/messages-off",children:"MESSAGES OFF"}),". If the progress thermometer is displayed, the user can click the Stop button to interrupt the sort."]}),"\n",(0,t.jsxs)(n.p,{children:["If the sort is performed without interruption, the OK variable is set to ",(0,t.jsx)(n.em,{children:"1"}),". If the user clicks Cancel or Stop, the ",(0,t.jsx)(n.strong,{children:"ORDER BY"})," terminates with no sort actually performed, and sets the OK variable to ",(0,t.jsx)(n.em,{children:"0"})," (zero)."]}),"\n",(0,t.jsx)(n.h5,{id:""}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," This command does not support Object type fields."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:"The following line displays the Order By editor for the [Products] table:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Products])\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:"The following line displays the Order By editor for the default table (if it has been set):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.p,{children:"The following line orders the selection of [Products] by name in ascending order:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Products];[Products]Name;>)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsx)(n.p,{children:"The following line orders the selection of [Products] by name in descending order:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Products];[Products]Name;<)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-5",children:"Example 5"}),"\n",(0,t.jsx)(n.p,{children:"The following line orders the selection of [Products] by type and price in ascending order for both levels:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Products];[Products]Type;>;[Products]Price;>)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-6",children:"Example 6"}),"\n",(0,t.jsx)(n.p,{children:"The following line orders the selection of [Products] by type and price in descending order for both levels:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Products];[Products]Type;<;[Products]Price;<)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-7",children:"Example 7"}),"\n",(0,t.jsx)(n.p,{children:"The following line orders the selection of [Products] by type in ascending order and by price in descending order:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Products];[Products]Type;>;[Products]Price;<)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-8",children:"Example 8"}),"\n",(0,t.jsx)(n.p,{children:"The following line orders the selection of [Products] by type in descending order and by price in ascending order:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Products];[Products]Type;<;[Products]Price;>)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-9",children:"Example 9"}),"\n",(0,t.jsx)(n.p,{children:"The following line performs an indexed sort if [Products]Name is indexed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Products];[Products]Name;>)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-10",children:"Example 10"}),"\n",(0,t.jsx)(n.p,{children:"The following line orders the selection of [Products] by name in ascending order:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Products];[Products]Name)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-11",children:"Example 11"}),"\n",(0,t.jsx)(n.p,{children:"The following line performs a sequential sort, whether or not the fields are indexed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Products];[Products]Type;>;[Products]Price;>)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-12",children:"Example 12"}),"\n",(0,t.jsx)(n.p,{children:"The following line performs a sequential sort using a related field"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SET FIELD RELATION([Employee]Company_ID;Automatic;Do not modify)\n\xa0ORDER BY([Employee];[Company]LastName)\n\xa0SET FIELD RELATION([Employee]Company_ID;Structure configuration;Do not modify)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-13",children:"Example 13"}),"\n",(0,t.jsx)(n.p,{children:"The following example carries out an indexed sort on two levels if a [Contacts]LastName + [Contacts]FirstName composite index has been specified in the database:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Contacts];[Contacts]LastName;>;[Contacts]FirstName;>)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-14",children:"Example 14"}),"\n",(0,t.jsxs)(n.p,{children:["In an Output form displayed in the Application environment, you allow the users to order a column in ascending order by simply clicking in the column header.",(0,t.jsx)(n.br,{}),"\nIf the user holds the ",(0,t.jsx)(n.strong,{children:"Shift"})," key down while clicking in other column headers, the sort is performed on several levels:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(469901).Z+"",width:"566",height:"353"})}),"\n",(0,t.jsx)(n.p,{children:"Each column header contains a highlight button attached with the following object method:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0MULTILEVEL(->[CDs]Title)\xa0//Title column header button\n"})}),"\n",(0,t.jsx)(n.p,{children:"Each button calls the MULTILEVEL project method with a pointer to the corresponding column field. The MULTILEVEL project method is the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// MULTILEVEL Project Method\n\xa0\xa0// MULTILEVEL (Pointer)\n\xa0\xa0// MULTILEVEL (->[Table]Field)\n\xa0\n\xa0var $1)\xa0\xa0\xa0//Sort level (field : Pointer\n\xa0var $lLevelNb : Integer\n\xa0\n\xa0\xa0//Getting sorting levels\n\xa0If(Not(Shift down))\xa0//Simple sort (one-level)\n\xa0\xa0\xa0\xa0ARRAY POINTER(aPtrSortField;1)\n\xa0\xa0\xa0\xa0aPtrSortField{1}:=$1\n\xa0Else\n\xa0\xa0\xa0\xa0$lLevelNb:=Find in array(aPtrSortField;$1)\xa0//Is this field already sorted?\n\xa0\xa0\xa0\xa0If($lLevelNb<0)\xa0//If not\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0INSERT IN ARRAY(aPtrSortField;Size of array(aPtrSortField)+1;1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0aPtrSortField{Size of array(aPtrSortField)}:=$1\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\xa0//Performing the sort\n\xa0$lLevelNb:=Size of array(aPtrSortField)\n\xa0If($lLevelNb>0)\xa0//There is at least one order level\n\xa0\xa0\xa0\xa0For($i;1;$lLevelNb)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ORDER BY([CDs];(aPtrSortField{$i})->;>;*)\xa0//Building sort definition\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0ORDER BY([CDs])\xa0//No * ends the sort definition and starts the actual sort operation\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/commands/order-by-formula",children:"ORDER BY FORMULA"})}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"49"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifies variables"}),(0,t.jsx)(n.td,{children:"OK"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Changes current record"}),(0,t.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},469901:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict16003.en-cee1fc41853731e02f22b258cc5a778e.png"},407940:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict2286854.en-011a3c10068172d0790c638a2d0c652a.png"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let t={},l=s.createContext(t);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);