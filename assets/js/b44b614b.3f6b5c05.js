"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35244"],{221507:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/blob-to-document","title":"BLOB TO DOCUMENT","description":"BLOB TO DOCUMENT ( document ; blob )","source":"@site/versioned_docs/version-20-R7/commands-legacy/blob-to-document.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-document","permalink":"/docs/20-R7/commands/blob-to-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-document","title":"BLOB TO DOCUMENT","slug":"/commands/blob-to-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB size","permalink":"/docs/20-R7/commands/blob-size"},"next":{"title":"BLOB to integer","permalink":"/docs/20-R7/commands/blob-to-integer"}}'),s=t("785893"),r=t("250065");let d={id:"blob-to-document",title:"BLOB TO DOCUMENT",slug:"/commands/blob-to-document",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BLOB TO DOCUMENT"})," ( ",(0,s.jsx)(n.em,{children:"document"})," ; ",(0,s.jsx)(n.em,{children:"blob"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"document"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of the document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"New contents for the document"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["BLOB TO DOCUMENT rewrites the whole contents of ",(0,s.jsx)(n.em,{children:"document"})," using the data stored in ",(0,s.jsx)(n.em,{children:"blob"}),". You can pass the name of a document in ",(0,s.jsx)(n.em,{children:"document"}),". If the ",(0,s.jsx)(n.em,{children:"document"})," does not exist, the command creates it. If you pass the name of an existing document, make sure that it is not already open, otherwise an error is generated. If you want to let the user choose the document, use the commands ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/open-document",children:"Open document"})," or ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/create-document",children:"Create document"})," and use the process variable ",(0,s.jsx)(n.em,{children:"document"})," (see example)."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You write an Information System that enables you to quickly store and retrieve documents. In a data entry form, you create a button which allows you to save a document that will contain the data previously loaded into a BLOB field. The method for this button could be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef:=Create document("")\xa0// Save the document of your choice\n\xa0If(OK=1)\xa0// If a document has been created\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// We don\'t need to keep it open\n\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;[YourTable]YourBLOBField)\xa0// Write the document contents\n\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0// Handle error\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(n.p,{children:"OK is set to 1 if the document is correctly written, otherwise OK is set to 0 and an error is generated."}),"\n",(0,s.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you try to rewrite a document that does not exist or that is already open by another process or application, the appropriate File Manager error is generated."}),"\n",(0,s.jsx)(n.li,{children:"The disk space may be insufficient for writing the new contents of the document."}),"\n",(0,s.jsx)(n.li,{children:"I/O errors can occur while writing the document."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In all cases, you can trap the error using an ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"})," interruption method."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/create-document",children:"Create document"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/document-to-blob",children:"DOCUMENT TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/open-document",children:"Open document"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"526"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var o=t(667294);let s={},r=o.createContext(s);function d(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);