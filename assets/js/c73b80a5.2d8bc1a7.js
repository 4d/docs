"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36116"],{930159:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/array-longint","title":"ARRAY LONGINT","description":"ARRAY LONGINT ( arrayName ; size {; size2} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/array-longint.md","sourceDirName":"commands-legacy","slug":"/commands/array-longint","permalink":"/docs/commands/array-longint","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-longint.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-longint","title":"ARRAY LONGINT","slug":"/commands/array-longint","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY INTEGER","permalink":"/docs/commands/array-integer"},"next":{"title":"ARRAY OBJECT","permalink":"/docs/commands/array-object"}}'),a=r("785893"),t=r("250065");let i={id:"array-longint",title:"ARRAY LONGINT",slug:"/commands/array-longint",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ARRAY LONGINT"})," ( ",(0,a.jsx)(n.em,{children:"arrayName"})," ; ",(0,a.jsx)(n.em,{children:"size"})," {; ",(0,a.jsx)(n.em,{children:"size2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrayName"}),(0,a.jsx)(n.td,{children:"Array"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Name of the array"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"size"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Number of elements in the array or Number of rows if size2 is specified"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"size2"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Number of columns in a two-dimensional array"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ARRAY LONGINT command creates and/or resizes an array of 4-byte ",(0,a.jsx)(n.a,{href:"#",title:"Number between -2^31..(2^31)-1 (4-byte Integer)",children:"Longint"})," elements in memory.parameter is the name of the array."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.em,{children:"size"})," parameter is the number of elements in the array."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.em,{children:"size2"})," parameter is optional; if ",(0,a.jsx)(n.em,{children:"size2"})," is specified, the command creates a two-dimensional array. In this case, ",(0,a.jsx)(n.em,{children:"size"})," specifies the number of rows and ",(0,a.jsx)(n.em,{children:"size2"})," specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the first dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"When applying ARRAY LONGINT to an existing array:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to 0."}),"\n",(0,a.jsx)(n.li,{children:"If you reduce the array size, the last elements deleted from the array are lost."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(n.p,{children:"This example creates a process array of 100 4-byte Long Integer elements:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT(alValues;100)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(n.p,{children:"This example creates a local array of 100 rows of 50 4-byte Long Integer elements:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT($alValues;100;50)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,a.jsx)(n.p,{children:"This example creates an interprocess array of 50 4-byte Long Integer elements and sets each element to its element number:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT(\u25CAalValues;50)\n\xa0For($vlElem;1;50)\n\xa0\xa0\xa0\xa0\u25CAalValues{$vlElem}:=$vlElem\n\xa0End for\n"})}),"\n",(0,a.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/commands/array-integer",children:"ARRAY INTEGER"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/array-real",children:"ARRAY REAL"})]}),"\n",(0,a.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"221"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(667294);let a={},t=s.createContext(a);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);