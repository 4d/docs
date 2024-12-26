"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2782"],{419436:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/array-text","title":"ARRAY TEXT","description":"ARRAY TEXT ( arrayName ; size {; size2} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/array-text.md","sourceDirName":"commands-legacy","slug":"/commands/array-text","permalink":"/docs/commands/array-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-text","title":"ARRAY TEXT","slug":"/commands/array-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY REAL","permalink":"/docs/commands/array-real"},"next":{"title":"ARRAY TIME","permalink":"/docs/commands/array-time"}}'),a=r("785893"),s=r("250065");let i={id:"array-text",title:"ARRAY TEXT",slug:"/commands/array-text",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ARRAY TEXT"})," ( ",(0,a.jsx)(n.em,{children:"arrayName"})," ; ",(0,a.jsx)(n.em,{children:"size"})," {; ",(0,a.jsx)(n.em,{children:"size2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrayName"}),(0,a.jsx)(n.td,{children:"Array"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Name of the array"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"size"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Number of elements in the array or Number of rows if size2 is specified"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"size2"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Number of columns in a two-dimensional array"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ARRAY TEXT command creates and/or resizes an array of ",(0,a.jsx)(n.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"Text"})," elements in memory.parameter is the name of the array."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.em,{children:"size"})," parameter is the number of elements in the array."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.em,{children:"size2"})," parameter is optional; if ",(0,a.jsx)(n.em,{children:"size2"})," is specified, the command creates a two-dimensional array. In this case, ",(0,a.jsx)(n.em,{children:"size"})," specifies the number of rows and ",(0,a.jsx)(n.em,{children:"size2"})," specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the first dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"While applying ARRAY TEXT to an existing array:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to "" (empty string).'}),"\n",(0,a.jsx)(n.li,{children:"If you reduce the array size, the last elements deleted from the array are lost."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsxs)(n.p,{children:["This example creates a process array of 100 ",(0,a.jsx)(n.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"Text"})," elements:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(atValues;100)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsxs)(n.p,{children:["This example creates a local array of 100 rows of 50 ",(0,a.jsx)(n.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"Text"})," elements:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($atValues;100;50)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,a.jsxs)(n.p,{children:["This example creates an interprocess array of 50 ",(0,a.jsx)(n.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"Text"})," elements and sets each element to the value \u201CElement #\u201D followed by its element number:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(\u25CAatValues;50)\n\xa0For($vlElem;1;50)\n\xa0\xa0\xa0\xa0\u25CAatValues{$vlElem}:="Element #"+String($vlElem)\n\xa0End for\n'})}),"\n",(0,a.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"222"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(667294);let a={},s=t.createContext(a);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);