"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27064"],{58464:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/array-object","title":"ARRAY OBJECT","description":"ARRAY OBJECT ( arrayName ; size {; size2} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/array-object.md","sourceDirName":"commands-legacy","slug":"/commands/array-object","permalink":"/docs/commands/array-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-object.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"array-object","title":"ARRAY OBJECT","slug":"/commands/array-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY LONGINT","permalink":"/docs/commands/array-longint"},"next":{"title":"ARRAY PICTURE","permalink":"/docs/commands/array-picture"}}'),s=r("785893"),t=r("250065");let i={id:"array-object",title:"ARRAY OBJECT",slug:"/commands/array-object",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY OBJECT"})," ( ",(0,s.jsx)(n.em,{children:"arrayName"})," ; ",(0,s.jsx)(n.em,{children:"size"})," {; ",(0,s.jsx)(n.em,{children:"size2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrayName"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"size"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of array elements or Number of arrays if size2 is specified"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"size2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of 2D array elements"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"ARRAY OBJECT"})," command creates and/or resizes an array of language Object type elements in memory."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"arrayName"})," parameter is the name of the array. You can use any name that conforms to 4D conventions."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"size"})," parameter is the number of array elements."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"size2"})," parameter is optional. If you pass it, this command creates a two-dimensional array. In this case, ",(0,s.jsx)(n.em,{children:"size"})," specifies the number of rows and ",(0,s.jsx)(n.em,{children:"size2"}),' the number of columns in each array. Each row in a two-dimensional array can be processed both as an element and an array. This means that when you work with the first dimension of a two-dimensional array, you can insert and remove entire arrays using other commands in the "Arrays" theme.']}),"\n",(0,s.jsxs)(n.p,{children:["When you apply the ",(0,s.jsx)(n.strong,{children:"ARRAY OBJECT"})," command to an existing array:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you enlarge its size, existing elements are not changed and new elements are undefined. You can test whether an element is defined using the ",(0,s.jsx)(n.a,{href:"/docs/commands/ob-is-defined",children:"OB Is defined"})," command."]}),"\n",(0,s.jsx)(n.li,{children:'If you reduce its size, elements at the "bottom" of the array are deleted and lost.'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"Creation of a process array of 100 Object-type elements:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY OBJECT(arrObjects;100)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"Creation of a local array of 100 rows each containing 50 Object-type elements:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY OBJECT($arrObjects;100;50)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"Creation and filling of a local object array:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $Children;$ref_richard;$ref_susan;$ref_james : Object\n\xa0ARRAY OBJECT($arrayChildren;0)\n\xa0OB SET($ref_richard;"name";"Richard";"age";7)\n\xa0APPEND TO ARRAY($arrayChildren;$ref_richard)\n\xa0OB SET($ref_susan;"name";"Susan";"age";4)\n\xa0APPEND TO ARRAY($arrayChildren;$ref_susan)\n\xa0OB SET($ref_james;"name";"James";"age";3)\n\xa0APPEND TO ARRAY($arrayChildren;$ref_james)\n\xa0\xa0// $arrayChildren{1} -> {"name":"Richard","age":7}\n\xa0\xa0// $arrayChildren{2} -> {"name":"Susan","age":4}\n\xa0\xa0// $arrayChildren{3} -> {"name":"James","age":3}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Creating Arrays"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Objects (Language)"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1221"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var a=r(667294);let s={},t=a.createContext(s);function i(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);