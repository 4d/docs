"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49273"],{237298:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/sort-array","title":"SORT ARRAY","description":"SORT ARRAY ( array {; array2 ; ... ; arrayN}{; > or <} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/sort-array.md","sourceDirName":"commands-legacy","slug":"/commands/sort-array","permalink":"/docs/commands/sort-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsort-array.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"sort-array","title":"SORT ARRAY","slug":"/commands/sort-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Size of array","permalink":"/docs/commands/size-of-array"},"next":{"title":"TEXT TO ARRAY","permalink":"/docs/commands/text-to-array"}}'),a=r("785893"),o=r("250065");let t={id:"sort-array",title:"SORT ARRAY",slug:"/commands/sort-array",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SORT ARRAY"})," ( ",(0,a.jsx)(n.em,{children:"array"})," {; ",(0,a.jsx)(n.em,{children:"array2"})," ; ... ; ",(0,a.jsx)(n.em,{children:"arrayN"}),"}{; > or <} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"array"}),(0,a.jsx)(n.td,{children:"Array"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Arrays to sort"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"> or <"}),(0,a.jsx)(n.td,{children:"Operator"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:'">" to sort in Ascending order, or "<" to sort in Descending order, or Ascending order if omitted'})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"The SORT ARRAY command sorts one or more arrays into ascending or descending order."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You cannot sort ",(0,a.jsx)(n.a,{href:"#",title:"A reference to another variable (including arrays and array elements), table, or field",children:"Pointer"})," or ",(0,a.jsx)(n.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Picture"})," arrays. You can sort the elements of a two-dimensional array (i.e., ",(0,a.jsx)(n.em,{children:"a2DArray{$vlThisElem}"}),") but you cannot sort the two-dimensional array itself (i.e., ",(0,a.jsx)(n.em,{children:"a2DArray"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:["You can sort ",(0,a.jsx)(n.a,{href:"#",title:"Data structured as a native 4D object",children:"Object"})," arrays. Null elements are grouped and array elements are sorted with an internal order."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The last parameter specifies whether to sort ",(0,a.jsx)(n.em,{children:"array"})," in ascending or descending order. The \u201Cgreater than\u201D symbol (>) indicates an ascending sort; the \u201Cless than\u201D symbol (<) indicates a descending sort. If you do not specify the sorting order, then the sort is ascending."]}),"\n",(0,a.jsxs)(n.p,{children:["If more than one array is specified, the arrays are sorted following the sort order of the first array; no multi-level sorting is performed here. Instead you can use the ",(0,a.jsx)(n.a,{href:"/docs/commands/multi-sort-array",children:"MULTI SORT ARRAY"})," command when you want to sort synchronized arrays."]}),"\n",(0,a.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(n.p,{children:"The following example creates two arrays and then sorts them by company:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([People])\n\xa0SELECTION TO ARRAY([People]Name;asNames;[People]Company;asCompanies)\n\xa0SORT ARRAY(asCompanies;asNames;>)\n"})}),"\n",(0,a.jsx)(n.p,{children:"However, because SORT ARRAY does not perform multi-level sorts, you will end up with people\u2018s names in random order within each company. To sort people by name within each company, you would write:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([People])\n\xa0ORDER BY([People];[People]Company;>;[People]Name;>)\n\xa0SELECTION TO ARRAY([People]Name;asNames;[People]Company;asCompanies)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsxs)(n.p,{children:["You display the names from a ",(0,a.jsx)(n.em,{children:"[People]"})," table in a floating window. When you click on buttons present in the window, you can sort this list of names from A to Z or from Z to A. As several people may have the same name, you also can use a ",(0,a.jsx)(n.em,{children:"[People]ID number"})," field, which is indexed unique. When you click in the list of names, you will retrieve the record for the name you clicked. By maintaing a synchronized and hidden array of ID numbers, you are sure to access the record corresponding to the name you clicked:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// asNames array object method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALL RECORDS([People])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECTION TO ARRAY([People]Name;asNames;[People]ID number;alIDs)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SORT ARRAY(asNames;alIDs;>)\n\xa0\xa0\xa0\xa0:(Form event code=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asNames)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(alIDs)\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(asNames#0)\n\xa0\xa0// Use the array alIDs to get the right record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([People];[People]ID Number=alIDs{asNames})\n\xa0\xa0// Do something with the record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n\xa0\n\xa0\xa0// bA2Z button object method\n\xa0\xa0// Sort the arrays in ascending order and keep them synchronized\n\xa0SORT ARRAY(asNames;alIDs;>)\n\xa0\n\xa0\xa0// bZ2A button object method\n\xa0\xa0// Sort the arrays in descending order and keep them synchronized\n\xa0SORT ARRAY(asNames;alIDs;<)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/commands/find-in-sorted-array",children:"Find in sorted array"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/multi-sort-array",children:"MULTI SORT ARRAY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/order-by",children:"ORDER BY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/selection-to-array",children:"SELECTION TO ARRAY"})]}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"229"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var s=r(667294);let a={},o=s.createContext(a);function t(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);