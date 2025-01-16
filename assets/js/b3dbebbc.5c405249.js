"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3751"],{640308:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/find-in-sorted-array","title":"Find in sorted array","description":"Find in sorted array ( array ; value ; > or < {; posFirst {; posLast}} ) : Boolean","source":"@site/versioned_docs/version-20-R8/commands-legacy/find-in-sorted-array.md","sourceDirName":"commands-legacy","slug":"/commands/find-in-sorted-array","permalink":"/docs/commands/find-in-sorted-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffind-in-sorted-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"find-in-sorted-array","title":"Find in sorted array","slug":"/commands/find-in-sorted-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Find in array","permalink":"/docs/commands/find-in-array"},"next":{"title":"INSERT IN ARRAY","permalink":"/docs/commands/insert-in-array"}}'),t=r("785893"),i=r("250065");let a={id:"find-in-sorted-array",title:"Find in sorted array",slug:"/commands/find-in-sorted-array",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Find in sorted array"})," ( ",(0,t.jsx)(n.em,{children:"array"})," ; ",(0,t.jsx)(n.em,{children:"value"})," ; > or < {; ",(0,t.jsx)(n.em,{children:"posFirst"})," {; ",(0,t.jsx)(n.em,{children:"posLast"}),"}} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Array to search"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"Expression"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Value (same type as array) to search for in the array"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"> or <"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"> if array is sorted in ascending order, < if it is sorted in descending order"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"posFirst"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Position of its first occurrence if the value is found; otherwise position where the value should be inserted"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"posLast"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Position of its last occurrence if the value is found; otherwise same as posFirst"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"True if at least one element in array matches the value, False otherwise"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Find in sorted array"})," command returns ",(0,t.jsx)(n.strong,{children:"true"})," if at least one element in the sorted ",(0,t.jsx)(n.em,{children:"array"})," matches the ",(0,t.jsx)(n.em,{children:"value"}),", and optionally returns position(s) of matched element(s). Unlike ",(0,t.jsx)(n.a,{href:"/docs/commands/find-in-array",children:"Find in array"}),", ",(0,t.jsx)(n.strong,{children:"Find in sorted array"})," only works with a sorted ",(0,t.jsx)(n.em,{children:"array"})," and provides information about the position of occurrences, which allows you to insert elements if necessary."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"array"})," must be already sorted and must match the ordering specified by the ",(0,t.jsx)(n.em,{children:"> or <"}),' parameter (i.e. the "greater than" symbol for ascending order and the "lower than" symbol for descending order). The ',(0,t.jsx)(n.strong,{children:"Find in sorted array"})," command will take advantage of the sort and use a ",(0,t.jsx)(n.em,{children:"binary search"})," algorithm, which is much more efficient for large arrays (for more information, please refer to the ",(0,t.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Binary%5Fsearch%5Falgorithm",children:"binary search algorithm page on Wikipedia"}),"). However, if the array is not properly sorted, the result may be incorrect."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," When using this command with a sorted array of type Object, you can only pass an object reference in ",(0,t.jsx)(n.em,{children:"value"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The command will ignore the sort indication and behave like a standard ",(0,t.jsx)(n.a,{href:"/docs/commands/find-in-array",children:"Find in array"})," (sequential search, returning -1 for ",(0,t.jsx)(n.em,{children:"posFirst"})," and ",(0,t.jsx)(n.em,{children:"posLast"})," if the ",(0,t.jsx)(n.em,{children:"value"})," is not found) in any of the following cases:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"if the array type cannot be sorted (e.g. pointer arrays),"}),"\n",(0,t.jsx)(n.li,{children:"if the array is of type boolean (not accurate),"}),"\n",(0,t.jsx)(n.li,{children:"if the database is not Unicode (compatibility mode) and the array is a string or text array,"}),"\n",(0,t.jsx)(n.li,{children:"when searching in a text array for a string that includes a wildcard ('@') at the beginning or in the middle of the string (using a binary search with such a wildcard character is not possible because matching elements may be non-contiguous in the array)."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In case the command returns ",(0,t.jsx)(n.strong,{children:"False"}),", the value returned in ",(0,t.jsx)(n.em,{children:"posFirst"})," can be passed to ",(0,t.jsx)(n.a,{href:"/docs/commands/insert-in-array",children:"INSERT IN ARRAY"})," to insert the ",(0,t.jsx)(n.em,{children:"value"})," into the array while keeping the array sorted. This sequence is faster than inserting a new item at the end of the array and then calling ",(0,t.jsx)(n.a,{href:"/docs/commands/sort-array",children:"SORT ARRAY"})," to move it to the right place."]}),"\n",(0,t.jsxs)(n.p,{children:["The value returned in ",(0,t.jsx)(n.em,{children:"posLast"})," can be combined with the value returned in ",(0,t.jsx)(n.em,{children:"posFirst"})," to iterate on each element of the array matching the ",(0,t.jsx)(n.em,{children:"value"})," (with a ",(0,t.jsx)(n.a,{href:"/docs/commands/array-to-list",children:"ARRAY TO LIST"})," loop) or to find the number of occurrences (as would be found by ",(0,t.jsx)(n.a,{href:"/docs/commands/count-in-array",children:"Count in array"}),", but faster)."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:"You want to insert a value, if necessary, while keeping the array sorted:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $pos : Integer\n\xa0If(Find in sorted array($array ;$value ;>;$pos)\n\xa0\xa0\xa0\xa0ALERT("Found at pos "+String($pos))\n\xa0Else\n\xa0\xa0\xa0\xa0INSERT IN ARRAY($array ;$pos)\n\xa0\xa0\xa0\xa0$array{$pos}:=$value\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:'You want to find the number of occurrences of strings starting with "test" and create a string that concatenates all these elements:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $posFirst ;$posLast : Integer\n\xa0var $output : Text\n\xa0If(Find in sorted array($array ;"test@";>;$posFirst ;$posLast))\n\xa0\xa0\xa0\xa0$output:="Found "+String($posLast-$posFirst+1)+" results :\\n"\n\xa0End if\n\xa0For($i ;$posFirst ;$posLast)\n\xa0\xa0\xa0\xa0$output:=$output+$array{$i}+"\\n"\n\xa0End for\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/count-in-array",children:"Count in array"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/find-in-array",children:"Find in array"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/sort-array",children:"SORT ARRAY"})]}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1333"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var s=r(667294);let t={},i=s.createContext(t);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);