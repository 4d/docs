"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67447"],{132612:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>d,assets:()=>i,toc:()=>a,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/expand-blob","title":"EXPAND BLOB","description":"EXPAND BLOB ( blob )","source":"@site/versioned_docs/version-20-R8/commands-legacy/expand-blob.md","sourceDirName":"commands-legacy","slug":"/commands/expand-blob","permalink":"/docs/20-R8/commands/expand-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexpand-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"expand-blob","title":"EXPAND BLOB","slug":"/commands/expand-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ENCRYPT BLOB","permalink":"/docs/20-R8/commands/encrypt-blob"},"next":{"title":"INSERT IN BLOB","permalink":"/docs/20-R8/commands/insert-in-blob"}}'),t=s("785893"),r=s("250065");let o={id:"expand-blob",title:"EXPAND BLOB",slug:"/commands/expand-blob",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"EXPAND BLOB"})," ( ",(0,t.jsx)(n.em,{children:"blob"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"blob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB to expand"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"EXPAND BLOB"})," command expands the BLOB ",(0,t.jsx)(n.em,{children:"blob"})," that was previously compressed using the ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/compress-blob",children:"COMPRESS BLOB"})," command*.*"]}),"\n",(0,t.jsx)(n.p,{children:"After the call, the OK variable is set to 1 if the BLOB has been expanded. If the expansion could not be performed, the OK variable is set to 0."}),"\n",(0,t.jsxs)(n.p,{children:["If the expansion could not be performed because of a lack of memory, no error is generated and the method resumes its execution.",(0,t.jsx)(n.br,{}),"\nIn any other case (i.e. the BLOB has not been compressed or is damaged), the error -10600 is generated. This error can be trapped using the ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["To check if a BLOB has been compressed, use the ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/blob-properties",children:"BLOB PROPERTIES"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(n.p,{children:["This example tests if the BLOB ",(0,t.jsx)(n.em,{children:"vxMyBlob"})," is compressed and, if so, expands it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0BLOB PROPERTIES(vxMyBlob;$vlCompressed;$vlExpandedSize;$vlCurrentSize)\n\xa0If($vlCompressed#Is not compressed)\n\xa0\xa0\xa0\xa0EXPAND BLOB(vxMyBlob)\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:"This example allows you to select a document and then expand it, if it is compressed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef :=Open document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;vxBlob)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB PROPERTIES(vxBlob;$vlCompressed;$vlExpandedSize;$vlCurrentSize)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlCompressed#Is not compressed)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0EXPAND BLOB(vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,t.jsx)(n.p,{children:"The OK variable is set to 1 if the BLOB has been successfully expanded, otherwise it is set to 0."}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/blob-properties",children:"BLOB PROPERTIES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/compress-blob",children:"COMPRESS BLOB"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"535"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifies variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var d=s(667294);let t={},r=d.createContext(t);function o(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);