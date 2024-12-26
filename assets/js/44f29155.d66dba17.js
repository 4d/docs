"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33674"],{256673:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>t});var s=JSON.parse('{"id":"commands-legacy/array-picture","title":"ARRAY PICTURE","description":"ARRAY PICTURE ( arrayName ; size {; size2} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/array-picture.md","sourceDirName":"commands-legacy","slug":"/commands/array-picture","permalink":"/docs/commands/array-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-picture","title":"ARRAY PICTURE","slug":"/commands/array-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY OBJECT","permalink":"/docs/commands/array-object"},"next":{"title":"ARRAY POINTER","permalink":"/docs/commands/array-pointer"}}'),a=r("785893"),i=r("250065");let t={id:"array-picture",title:"ARRAY PICTURE",slug:"/commands/array-picture",displayed_sidebar:"docs"},l=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ARRAY PICTURE"})," ( ",(0,a.jsx)(n.em,{children:"arrayName"})," ; ",(0,a.jsx)(n.em,{children:"size"})," {; ",(0,a.jsx)(n.em,{children:"size2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrayName"}),(0,a.jsx)(n.td,{children:"Array"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Name of the array"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"size"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Number of elements in the array, or Number of rows if size2 is specified"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"size2"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Number of columns in a two-dimensional array"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ARRAY PICTURE command creates and/or resizes an array of ",(0,a.jsx)(n.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Picture"})," elements in memory.parameter is the name of the array."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.em,{children:"size"})," parameter is the number of elements in the array.The ",(0,a.jsx)(n.em,{children:"size2"})," parameter is optional; if ",(0,a.jsx)(n.em,{children:"size2"})," is specified, the command creates a two-dimensional array. In this case, ",(0,a.jsx)(n.em,{children:"size"})," specifies the number of rows and ",(0,a.jsx)(n.em,{children:"size2"})," specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the first dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"While applying to an existing array:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to empty pictures. This means that ",(0,a.jsx)(n.a,{href:"/docs/commands/picture-size",children:"Picture size"})," applied to one of these elements will return ",(0,a.jsx)(n.em,{children:"0"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"If you reduce the array size, the last elements deleted from the array are lost."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsxs)(n.p,{children:["This example creates a process array of 100 ",(0,a.jsx)(n.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Picture"})," elements:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY PICTURE(agValues;100)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsxs)(n.p,{children:["This example creates a local array of 100 rows of 50 ",(0,a.jsx)(n.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Picture"})," elements:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY PICTURE($agValues;100;50)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,a.jsxs)(n.p,{children:["This example creates an interprocess array of ",(0,a.jsx)(n.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Picture"})," elements and loads each picture into one of the elements of the array. The array\u2019s size is equal to the number of ",(0,a.jsx)(n.em,{children:"'PICT'"})," resources available to the database. The array\u2019s resource name starts with ",(0,a.jsx)(n.em,{children:'"User Intf/"'}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0RESOURCE LIST("PICT";$aiResIDs;$asResNames)\n\xa0ARRAY PICTURE(\u25CAagValues;Size of array($aiResIDs))\n\xa0$vlPictElem:=0\n\xa0For($vlElem;1;Size of array(\u25CAagValues))\n\xa0\xa0\xa0\xa0If($asResNames{$vlElem}="User Intf/@")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlPictElem:=$vlPictElem+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PICTURE RESOURCE("PICT";$aiResIDs{$vlElem};$vgPicture)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u25CAagValues{$vlPictElem}:=$vgPicture\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0ARRAY PICTURE(\u25CAagValues;$vlPictElem)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"279"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var s=r(667294);let a={},i=s.createContext(a);function t(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);