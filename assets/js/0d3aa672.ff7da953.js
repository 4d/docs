"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34742"],{346459:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/list-to-blob","title":"LIST TO BLOB","description":"LIST TO BLOB ( list ; blob {; *} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/list-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/list-to-blob","permalink":"/docs/commands/list-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-to-blob.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"list-to-blob","title":"LIST TO BLOB","slug":"/commands/list-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INTEGER TO BLOB","permalink":"/docs/commands/integer-to-blob"},"next":{"title":"LONGINT TO BLOB","permalink":"/docs/commands/longint-to-blob"}}'),o=n("785893"),i=n("250065");let r={id:"list-to-blob",title:"LIST TO BLOB",slug:"/commands/list-to-blob",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Note",id:"note",level:3},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"LIST TO BLOB"})," ( ",(0,o.jsx)(t.em,{children:"list"})," ; ",(0,o.jsx)(t.em,{children:"blob"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"list"}),(0,o.jsx)(t.td,{children:"Integer"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Hierarchical list to store in the BLOB"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"blob"}),(0,o.jsx)(t.td,{children:"Blob"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"BLOB to receive the Hierarchical list"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"*"}),(0,o.jsx)(t.td,{children:"Operator"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"* to append the value"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The LIST TO BLOB command stores the hierarchical list ",(0,o.jsx)(t.em,{children:"list"})," in the BLOB ",(0,o.jsx)(t.em,{children:"blob"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"If you specify the * optional parameter, the hierarchical list is appended to the BLOB and the size of the BLOB is extended accordingly. Using the * optional parameter, you can sequentially store any number of variables or lists (see other BLOB commands) in a BLOB, as long as the BLOB fits into memory."}),"\n",(0,o.jsx)(t.p,{children:"If you do not specify the * optional parameter, the hierarchical list is stored at the beginning of the BLOB, overriding its previous contents; the size of the BLOB is adjusted accordingly."}),"\n",(0,o.jsx)(t.p,{children:"Wherever the hierarchical list is stored, the size of the BLOB will be increased if necessary according to the specified location (plus up to the size of the list if necessary). Modified bytes (other than the ones you set) are reset to 0 (zero)."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"WARNING:"})," If you use a BLOB for storing lists, you must later use the command ",(0,o.jsx)(t.a,{href:"/docs/commands/blob-to-list",children:"BLOB to list"})," for reading back the contents of the BLOB, because lists are stored in BLOBs using a 4D internal format."]}),"\n",(0,o.jsx)(t.p,{children:"After the call, if the list has been successfully stored, the OK variable is set to 1. If the operation could not be performed, the OK variable is set to 0; for example, if there was not enough memory."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note regarding Platform Independence:"})," LIST TO BLOB and ",(0,o.jsx)(t.a,{href:"/docs/commands/blob-to-list",children:"BLOB to list"})," use a 4D internal format for handling lists stored in BLOBs. As a benefit, you do not need to worry about byte swapping between platforms when using these two commands. In other words, a BLOB created on Windows using those commands can be reused on Macintosh, and vice-versa."]}),"\n",(0,o.jsx)(t.h3,{id:"note",children:"Note"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Compatiblity note:"})," Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See ",(0,o.jsx)(t.em,{children:"Passing blobs and blob objects to 4D commands"})," on developer.4d.com."]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(t.p,{children:["See example for the command ",(0,o.jsx)(t.a,{href:"/docs/commands/blob-to-list",children:"BLOB to list"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/commands/blob-to-list",children:"BLOB to list"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/commands/save-list",children:"SAVE LIST"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/commands/variable-to-blob",children:"VARIABLE TO BLOB"})]}),"\n",(0,o.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Command number"}),(0,o.jsx)(t.td,{children:"556"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Thread safe"}),(0,o.jsx)(t.td,{children:"\u2717"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Modifies variables"}),(0,o.jsx)(t.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return r}});var s=n(667294);let o={},i=s.createContext(o);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);