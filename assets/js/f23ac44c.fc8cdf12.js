"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21135"],{74982:function(e,r,s){s.r(r),s.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"commands-legacy/multi-sort-array","title":"MULTI SORT ARRAY","description":"MULTI SORT ARRAY ( array {; sort}{; array2 ; sort2 ; ... ; arrayN ; sortN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/multi-sort-array.md","sourceDirName":"commands-legacy","slug":"/commands/multi-sort-array","permalink":"/docs/commands/multi-sort-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmulti-sort-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"multi-sort-array","title":"MULTI SORT ARRAY","slug":"/commands/multi-sort-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LONGINT ARRAY FROM SELECTION","permalink":"/docs/commands/longint-array-from-selection"},"next":{"title":"SELECTION RANGE TO ARRAY","permalink":"/docs/commands/selection-range-to-array"}}'),t=s("785893"),a=s("250065");let i={id:"multi-sort-array",title:"MULTI SORT ARRAY",slug:"/commands/multi-sort-array",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"MULTI SORT ARRAY"})," ( ",(0,t.jsx)(r.em,{children:"array"})," {; ",(0,t.jsx)(r.em,{children:"sort"}),"}{; ",(0,t.jsx)(r.em,{children:"array2"})," ; ",(0,t.jsx)(r.em,{children:"sort2"})," ; ... ; ",(0,t.jsx)(r.em,{children:"arrayN"})," ; ",(0,t.jsx)(r.em,{children:"sortN"}),"} )\xa0",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.strong,{children:"MULTI SORT ARRAY"})," ( ",(0,t.jsx)(r.em,{children:"ptrArrayName"})," ; ",(0,t.jsx)(r.em,{children:"sortArrayName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"array"}),(0,t.jsx)(r.td,{children:"Array"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Array(s) to be sorted"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sort"}),(0,t.jsx)(r.td,{children:"*"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:'">" to sort by increasing order or  "<" to sort by decreasing order If omitted  no sort'})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MULTI SORT ARRAY ( ptrArrayName ; sortArrayName )"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Parameter"}),(0,t.jsx)(r.td,{children:"Type"}),(0,t.jsx)(r.td,{children:"Description"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ptrArrayName"}),(0,t.jsx)(r.td,{children:"Pointer array"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Array of array pointers"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sortArrayName"}),(0,t.jsx)(r.td,{children:"Array integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Sort order array (1 = sort by increasing order, -1 = sort by decreasing order, 0 = synchronization with previous sorts)"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"The MULTI SORT ARRAY command enables you to carry out a multi-level sort on a set of arrays."}),"\n",(0,t.jsx)(r.p,{children:"This command accepts two different syntaxes."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.strong,{children:"First syntax: MULTI SORT ARRAY (array{; sort}{; array2; sort2; ...; arrayN; sortN})"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"This syntax is the simplest; it lets you directly pass the names of the synchronized arrays where you want to apply a multi-criteria sort."}),"\n",(0,t.jsxs)(r.p,{children:["You can pass an unlimited number of pairs (",(0,t.jsx)(r.em,{children:"array;> or <"}),") and/or only arrays. All the arrays passed as parameters are sorted in a synchronized manner."]}),"\n",(0,t.jsxs)(r.p,{children:["To use the contents of an array as sort criteria, pass the ",(0,t.jsx)(r.em,{children:"sort"})," parameter. The value of the parameter (",(0,t.jsx)(r.em,{children:">"})," or ",(0,t.jsx)(r.em,{children:"<"}),") determines the order (ascending or descending) in which the array will be sorted. If the ",(0,t.jsx)(r.em,{children:"sort"})," parameter is omitted, the contents of the array are not used as sort criteria."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," Keep in mind that at least one sort criterion must be passed in order for the command to work. If no sort criterion is set, an error is generated."]}),"\n",(0,t.jsx)(r.p,{children:"The sort levels are determined by the order in which the arrays are passed to the command: the position of an array with a sort criterion in the syntax determines its sort level."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.strong,{children:"Second syntax: MULTI SORT ARRAY (ptrArrayName; sortArrayName)"})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["This syntax, more complex, is also invaluable for generic developments (for example, you can create a generic method for sorting arrays of all types, or yet again, create the equivalent of a generic ",(0,t.jsx)(r.a,{href:"/docs/commands/sort-array",children:"SORT ARRAY"})," command)."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.em,{children:"ptrArrayName"})," parameter contains the name of an array of array pointers; each element of this array is a pointer designating an array to be sorted. The sorts are performed in the order of the array pointers defined by ",(0,t.jsx)(r.em,{children:"ptrArrayName"}),". ",(0,t.jsx)(r.strong,{children:"Warning:"})," all the arrays pointed to by ",(0,t.jsx)(r.em,{children:"ptrArrayName"})," must have the same number of elements."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," ",(0,t.jsx)(r.em,{children:"ptrArrayName"})," can be an array of local ($ptrArrayName), process (ptrArrayName) or inter-process (<>ptrArrayName) pointers. Conversely, the elements of this array must point to process or inter-process arrays only."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.em,{children:"sortArrayName"})," parameter contains the name of an array in which each element indicates the sorting order (-1, 0 or 1) of the element of the corresponding array of pointers:",(0,t.jsx)(r.br,{}),"\n-1 = Sort by decreasing order.",(0,t.jsx)(r.br,{}),"\n0 = The array is not used as a sorting criterion but must be sorted according to the other sorts.",(0,t.jsx)(r.br,{}),"\n1 = Sort by increasing order."]}),"\n",(0,t.jsxs)(r.p,{children:["For each element of the ",(0,t.jsx)(r.em,{children:"ptrArrayName"})," array, there must be a corresponding element of the ",(0,t.jsx)(r.em,{children:"sortArrayName"})," array. Both arrays must therefore have exactly the same number of elements."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["You cannot sort ",(0,t.jsx)(r.a,{href:"#",title:"A reference to another variable (including arrays and array elements), table, or field",children:"Pointer"})," or ",(0,t.jsx)(r.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Picture"})," arrays. You can sort the elements of a two-dimensional array (i.e., ",(0,t.jsx)(r.em,{children:"a2DArray{$vlThisElem}"}),") but you cannot sort the two-dimensional array itself (i.e., ",(0,t.jsx)(r.em,{children:"a2DArray"}),")."]}),"\n",(0,t.jsxs)(r.li,{children:["You can sort ",(0,t.jsx)(r.a,{href:"#",title:"Data structured as a native 4D object",children:"Object"})," arrays. Null elements are grouped and array elements are sorted with an internal order."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(r.p,{children:["The following example uses the first syntax: it creates four arrays and sorts them by city (ascending order) then by salary (descending order) with the last two arrays, ",(0,t.jsx)(r.em,{children:"names_array"})," and ",(0,t.jsx)(r.em,{children:"telNum_array"}),", being synchronized according to the previous sort criteria:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0ALL RECORDS([Employees])\n\xa0SELECTION TO ARRAY([Employees]City;cities;[Employees]Salary;salaries;[Employees]Name;\n\xa0names;[Employees]TelNum;telNums)\n\xa0MULTI SORT ARRAY(cities;>;salaries;<;names;telNums)\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If you want for the names array to be used as the third sort criteria, just add ",(0,t.jsx)(r.em,{children:">"})," or ",(0,t.jsx)(r.em,{children:"<"})," after the ",(0,t.jsx)(r.em,{children:"names_array"})," parameter.",(0,t.jsx)(r.br,{}),"\nNote that the syntax:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0MULTI SORT ARRAY(cities;>;salaries;names;telNums)\n"})}),"\n",(0,t.jsx)(r.p,{children:"is equivalent to:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0SORT ARRAY(cities;salaries;names;telNums;>)\n"})}),"\n",(0,t.jsx)(r.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(r.p,{children:"The following example uses the second syntax: it creates four arrays and sorts them by city (increasing order) and company (decreasing order); the last two arrays, names_Array and telNum_Array, being synchronized according to previous sort criteria:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0ALL RECORDS([Employees])\n\xa0SELECTION TO ARRAY([Employees]City;cities;[Employees]Company;companies;[Employees]Name;\n\xa0names;[Employees]TelNum;telNums)\n\xa0ARRAY POINTER(pointers_Array;4)\n\xa0ARRAY LONGINT(sorts_Array;4)\n\xa0pointers_Array{1}:=->cities\n\xa0sorts_Array{1}:=1\n\xa0pointers_Array{2}:=->companies\n\xa0sorts_Array{2}:=-1\n\xa0pointers_Array{3}:=->names\n\xa0sorts_Array{3}:=0\n\xa0pointers_Array{4}:=->telNums\n\xa0sorts_Array{4}:=0\n\xa0MULTI SORT ARRAY(pointers_Array;sorts_Array)\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If you want the array of names be used as a third sort criterion, you need to assign the value 1 to the sorts_Array{3} element. Or else, if you want the arrays to be sorted only by the city criterion, assign the value 0 to the sorts_Array{2}, sorts_Array{3} and sorts_Array{4} elements. In this way, you obtain an identical result to ",(0,t.jsx)(r.a,{href:"/docs/commands/sort-array",children:"SORT ARRAY"}),"(cities;companies;names;telNums;>)."]}),"\n",(0,t.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/commands/order-by",children:"ORDER BY"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/sort-array",children:"SORT ARRAY"})]}),"\n",(0,t.jsx)(r.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Command number"}),(0,t.jsx)(r.td,{children:"718"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return o},a:function(){return i}});var n=s(667294);let t={},a=n.createContext(t);function i(e){let r=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);