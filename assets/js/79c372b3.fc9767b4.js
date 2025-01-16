"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57042"],{694141:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/copy-blob","title":"COPY BLOB","description":"COPY BLOB ( srcBLOB ; dstBLOB ; srcOffset ; dstOffset ; len )","source":"@site/versioned_docs/version-20-R7/commands-legacy/copy-blob.md","sourceDirName":"commands-legacy","slug":"/commands/copy-blob","permalink":"/docs/20-R7/commands/copy-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"copy-blob","title":"COPY BLOB","slug":"/commands/copy-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COMPRESS BLOB","permalink":"/docs/20-R7/commands/compress-blob"},"next":{"title":"DECRYPT BLOB","permalink":"/docs/20-R7/commands/decrypt-blob"}}'),r=s("785893"),d=s("250065");let i={id:"copy-blob",title:"COPY BLOB",slug:"/commands/copy-blob",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"COPY BLOB"})," ( ",(0,r.jsx)(n.em,{children:"srcBLOB"})," ; ",(0,r.jsx)(n.em,{children:"dstBLOB"})," ; ",(0,r.jsx)(n.em,{children:"srcOffset"})," ; ",(0,r.jsx)(n.em,{children:"dstOffset"})," ; ",(0,r.jsx)(n.em,{children:"len"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"srcBlob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Source BLOB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dstBlob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Destination BLOB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"srcOffset"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Source position for the copy"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dstOffset"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Destination position for the copy"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"len"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Number of bytes to be copied"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The COPY BLOB command copies the number of bytes specified by ",(0,r.jsx)(n.em,{children:"len"})," from the BLOB ",(0,r.jsx)(n.em,{children:"srcBLOB"})," to the BLOB ",(0,r.jsx)(n.em,{children:"dstBLOB"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The copy starts at the position (expressed relative to the beginning of the source BLOB) specified by ",(0,r.jsx)(n.em,{children:"srcOffset"})," and takes place at the position (expressed relative to the beginning of the destination BLOB) specified by ",(0,r.jsx)(n.em,{children:"dstOffset"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The destination BLOB can be resized if necessary."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/delete-from-blob",children:"DELETE FROM BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/insert-in-blob",children:"INSERT IN BLOB"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"558"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);