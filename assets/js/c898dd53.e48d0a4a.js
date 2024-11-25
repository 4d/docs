"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21420"],{618357:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>t,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>l});var a=JSON.parse('{"id":"commands-legacy/array-real","title":"ARRAY REAL","description":"ARRAY REAL ( arrayName ; size {; size2} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/array-real.md","sourceDirName":"commands-legacy","slug":"/commands/array-real","permalink":"/docs/commands/array-real","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-real.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-real","title":"ARRAY REAL","slug":"/commands/array-real","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY POINTER","permalink":"/docs/commands/array-pointer"},"next":{"title":"ARRAY TEXT","permalink":"/docs/commands/array-text"}}'),s=r("785893"),i=r("250065");let l={id:"array-real",title:"ARRAY REAL",slug:"/commands/array-real",displayed_sidebar:"docs"},t=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY REAL"})," ( ",(0,s.jsx)(n.em,{children:"arrayName"})," ; ",(0,s.jsx)(n.em,{children:"size"})," {; ",(0,s.jsx)(n.em,{children:"size2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrayName"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of the array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"size"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of elements in the array or Number of rows if size2 is specified"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"size2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of columns in a two-dimensional array"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ARRAY REAL command creates and/or resizes an array of ",(0,s.jsx)(n.a,{href:"#",title:"Number between \xb11.7e\xb1308 (15 digits)",children:"Real"})," elements in memory."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The arrayName parameter is the name of the array."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.em,{children:"size"})," parameter is the number of elements in the array."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.em,{children:"size2"})," parameter is optional; if ",(0,s.jsx)(n.em,{children:"size2"})," is specified, the command creates a two-dimensional array. In this case, ",(0,s.jsx)(n.em,{children:"size"})," specifies the number of rows and ",(0,s.jsx)(n.em,{children:"size2"})," specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the first dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"While applying ARRAY REAL to an existing array:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to 0."}),"\n",(0,s.jsx)(n.li,{children:"If you reduce the array size, the last elements deleted from the array are lost."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"This example creates a process array of 100 Real elements:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL(arValues;100)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"This example creates a local array of 100 rows of 50 Real elements:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($arValues;100;50)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"This example creates an interprocess array of 50 Real elements and sets each element to its element number:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL(\u25CAarValues;50)\n\xa0For($vlElem;1;50)\n\xa0\xa0\xa0\xa0\u25CAarValues{$vlElem}:=$vlElem\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/array-integer",children:"ARRAY INTEGER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/array-longint",children:"ARRAY LONGINT"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return l}});var a=r(667294);let s={},i=a.createContext(s);function l(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);