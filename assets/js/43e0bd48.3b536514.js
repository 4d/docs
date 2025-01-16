"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1166"],{714706:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"commands-legacy/document-to-blob","title":"DOCUMENT TO BLOB","description":"DOCUMENT TO BLOB ( document ; blob )","source":"@site/versioned_docs/version-20-R7/commands-legacy/document-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/document-to-blob","permalink":"/docs/20-R7/commands/document-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdocument-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"document-to-blob","title":"DOCUMENT TO BLOB","slug":"/commands/document-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM BLOB","permalink":"/docs/20-R7/commands/delete-from-blob"},"next":{"title":"ENCRYPT BLOB","permalink":"/docs/20-R7/commands/encrypt-blob"}}'),d=t("785893"),r=t("250065");let s={id:"document-to-blob",title:"DOCUMENT TO BLOB",slug:"/commands/document-to-blob",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"Error Handling",id:"error-handling",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DOCUMENT TO BLOB"})," ( ",(0,d.jsx)(n.em,{children:"document"})," ; ",(0,d.jsx)(n.em,{children:"blob"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Name of the document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"blob"}),(0,d.jsx)(n.td,{children:"Blob"}),(0,d.jsx)(n.td,{children:"\u2194"}),(0,d.jsx)(n.td,{children:"BLOB field or variable to receive the document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Document contents"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["DOCUMENT TO BLOB loads the whole contents of ",(0,d.jsx)(n.em,{children:"document"})," into ",(0,d.jsx)(n.em,{children:"blob"}),". You must pass the name of an existing document that is not already open, otherwise an error will be generated. To let the user choose the document to be loaded into the BLOB, use the command ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/open-document",children:"Open document"})," and the process variable ",(0,d.jsx)(n.em,{children:"document"})," (see Example)."]}),"\n",(0,d.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.p,{children:"You write an Information System that enables you to quickly store and retrieve documents. In a data entry form, you create a button that allows you to load a document into a BLOB field. The method for this button could be:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef:=Open document("")\xa0// Select the document of your choice\n\xa0If(OK=1)\xa0// If a document has been chosen\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// We don\'t need to keep it open\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;[YourTable]YourBLOBField)\xa0// Load the document\n\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0// Handle error\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,d.jsx)(n.p,{children:"OK is set to 1 if the document is correctly loaded, otherwise OK is set to 0 and an error is generated."}),"\n",(0,d.jsx)(n.h4,{id:"error-handling",children:"Error Handling"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"If you try to load (into a BLOB) a document that does not exist or that is already open by another process or application, the appropriate File Manager error is generated."}),"\n",(0,d.jsx)(n.li,{children:"An I/O error can occur if the document is locked, located on a locked volume, or if there is problem in reading the document."}),"\n",(0,d.jsx)(n.li,{children:"If there is not enough memory to load the document, an error -108 is generated."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["In each case, you can trap the error using an ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"})," interruption method."]}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/open-document",children:"Open document"})]}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"525"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var o=t(667294);let d={},r=o.createContext(d);function s(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);