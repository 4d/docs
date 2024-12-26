"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48504"],{511330:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/set-blob-size","title":"SET BLOB SIZE","description":"SET BLOB SIZE ( blob ; size {; filler} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-blob-size.md","sourceDirName":"commands-legacy","slug":"/commands/set-blob-size","permalink":"/docs/commands/set-blob-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-blob-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-blob-size","title":"SET BLOB SIZE","slug":"/commands/set-blob-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REAL TO BLOB","permalink":"/docs/commands/real-to-blob"},"next":{"title":"TEXT TO BLOB","permalink":"/docs/commands/text-to-blob"}}'),r=s("785893"),i=s("250065");let l={id:"set-blob-size",title:"SET BLOB SIZE",slug:"/commands/set-blob-size",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Note",id:"note",level:5},{value:"Error Handling",id:"error-handling",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET BLOB SIZE"})," ( ",(0,r.jsx)(n.em,{children:"blob"})," ; ",(0,r.jsx)(n.em,{children:"size"})," {; ",(0,r.jsx)(n.em,{children:"filler"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB field or variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"size"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"New size of the BLOB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filler"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"ASCII code of filler character"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["SET BLOB SIZE resizes the BLOB ",(0,r.jsx)(n.em,{children:"blob"})," according to the value passed in ",(0,r.jsx)(n.em,{children:"size"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to allocate new bytes to a BLOB and want to have those bytes initialized to a specific value, pass the value (0..255) into the ",(0,r.jsx)(n.em,{children:"filler"})," optional parameter."]}),"\n",(0,r.jsx)(n.h5,{id:"note",children:"Note"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compatiblity note:"})," Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See ",(0,r.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," on developer.4d.com."]}),"\n",(0,r.jsx)(n.h4,{id:"error-handling",children:"Error Handling"}),"\n",(0,r.jsxs)(n.p,{children:["If you cannot resize a BLOB due to insufficient memory, the error -108 is generated. You can trap this error using an ",(0,r.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," interruption method."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"When you are through with a large process or interprocess BLOB, it is good idea to free the memory it occupies. To do so, write:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(aProcessBLOB;0)\n\xa0SET BLOB SIZE(\u25CAanInterprocessBLOB;0)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"The following example creates a BLOB of 16K filled of 0xFF:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var vxData : Blob\n\xa0SET BLOB SIZE(vxData;16*1024;0xFF)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/blob-size",children:"BLOB size"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"606"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);