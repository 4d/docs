"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42913"],{827847:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>r,default:()=>m,assets:()=>l,toc:()=>i,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/close-document","title":"CLOSE DOCUMENT","description":"CLOSE DOCUMENT ( docRef )","source":"@site/versioned_docs/version-20-R7/commands-legacy/close-document.md","sourceDirName":"commands-legacy","slug":"/commands/close-document","permalink":"/docs/commands/close-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclose-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"close-document","title":"CLOSE DOCUMENT","slug":"/commands/close-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Append document","permalink":"/docs/commands/append-document"},"next":{"title":"Convert path POSIX to system","permalink":"/docs/commands/convert-path-posix-to-system"}}'),s=t("785893"),c=t("250065");let d={id:"close-document",title:"CLOSE DOCUMENT",slug:"/commands/close-document",displayed_sidebar:"docs"},r=void 0,l={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CLOSE DOCUMENT"})," ( ",(0,s.jsx)(n.em,{children:"docRef"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"docRef"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Document reference number"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CLOSE DOCUMENT"})," closes the document specified by ",(0,s.jsx)(n.em,{children:"docRef"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Closing a document is the only way to ensure that the data written to a file is saved. You must close all the documents you open with the commands ",(0,s.jsx)(n.a,{href:"/docs/commands/open-document",children:"Open document"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/create-document",children:"Create document"})," or ",(0,s.jsx)(n.a,{href:"/docs/commands/append-document",children:"Append document"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following example lets the user create a new document, writes the string \u201CHello\u201D into it, and closes the document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var vhDocRef : Time\n\xa0vhDocRef:=Create document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vhDocRef;"Hello")\xa0// Write one word into the document\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vhDocRef)\xa0// Close the document\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/append-document",children:"Append document"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/create-document",children:"Create document"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/open-document",children:"Open document"})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var o=t(667294);let s={},c=o.createContext(s);function d(e){let n=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);