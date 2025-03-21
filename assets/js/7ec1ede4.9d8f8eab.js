"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71049"],{385259:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>a,assets:()=>d,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/array-boolean","title":"ARRAY BOOLEAN","description":"ARRAY BOOLEAN ( arrayName ; size {; size2} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/array-boolean.md","sourceDirName":"commands-legacy","slug":"/commands/array-boolean","permalink":"/docs/20-R7/commands/array-boolean","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-boolean.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-boolean","title":"ARRAY BOOLEAN","slug":"/commands/array-boolean","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY BLOB","permalink":"/docs/20-R7/commands/array-blob"},"next":{"title":"ARRAY DATE","permalink":"/docs/20-R7/commands/array-date"}}'),s=r("785893"),i=r("250065");let t={id:"array-boolean",title:"ARRAY BOOLEAN",slug:"/commands/array-boolean",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY BOOLEAN"})," ( ",(0,s.jsx)(n.em,{children:"arrayName"})," ; ",(0,s.jsx)(n.em,{children:"size"})," {; ",(0,s.jsx)(n.em,{children:"size2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrayName"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of the array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"size"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of elements in the array or Number of rows if size2 is specified"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"size2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of columns in a two-dimensional array"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ARRAY BOOLEAN command creates and/or resizes an array of ",(0,s.jsx)(n.a,{href:"#",title:"Can be either TRUE or FALSE",children:"Boolean"})," elements in memory."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"arrayName"})," parameter is the name of the array."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"size"})," parameter is the number of elements in the array."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"size2"})," parameter is optional; if ",(0,s.jsx)(n.em,{children:"size2"})," is specified, the command creates a two-dimensional array. In this case, ",(0,s.jsx)(n.em,{children:"size"})," specifies the number of rows and ",(0,s.jsx)(n.em,{children:"size2"})," specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the first dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array."]}),"\n",(0,s.jsx)(n.p,{children:"While applying ARRAY BOOLEAN to an existing array:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to False."}),"\n",(0,s.jsx)(n.li,{children:"If you reduce the array size, the last elements deleted from the array are lost."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tip:"})," In some contexts, an alternative to using Boolean arrays is using an Integer array where each element \u201Cmeans true\u201D if different from zero and \u201Cmeans false\u201D if equal to zero."]}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"This example creates a process array of 100 Boolean elements:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BOOLEAN(abValues;100)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"This example creates a local array of 100 rows of 50 Boolean elements:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BOOLEAN($abValues;100;50)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"This example creates an interprocess array of 50 Boolean elements and sets each even element to True:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BOOLEAN(\u25CAabValues;50)\n\xa0For($vlElem;1;50)\n\xa0\xa0\xa0\xa0\u25CAabValues{$vlElem}:=(($vlElem%2)=0)\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/array-integer",children:"ARRAY INTEGER"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"223"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var a=r(667294);let s={},i=a.createContext(s);function t(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);