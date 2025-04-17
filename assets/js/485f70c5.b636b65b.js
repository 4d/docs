"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69477"],{356295:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/sax-get-xml-document-values","title":"SAX GET XML DOCUMENT VALUES","description":"SAX GET XML DOCUMENT VALUES ( document ; encoding ; version ; standalone )","source":"@site/versioned_docs/version-20-R9/commands-legacy/sax-get-xml-document-values.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-document-values","permalink":"/docs/commands/sax-get-xml-document-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-document-values.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"sax-get-xml-document-values","title":"SAX GET XML DOCUMENT VALUES","slug":"/commands/sax-get-xml-document-values","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML COMMENT","permalink":"/docs/commands/sax-get-xml-comment"},"next":{"title":"SAX GET XML ELEMENT","permalink":"/docs/commands/sax-get-xml-element"}}'),d=s("785893"),r=s("250065");let i={id:"sax-get-xml-document-values",title:"SAX GET XML DOCUMENT VALUES",slug:"/commands/sax-get-xml-document-values",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SAX GET XML DOCUMENT VALUES"})," ( ",(0,d.jsx)(n.em,{children:"document"})," ; ",(0,d.jsx)(n.em,{children:"encoding"})," ; ",(0,d.jsx)(n.em,{children:"version"})," ; ",(0,d.jsx)(n.em,{children:"standalone"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Reference of open document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"encoding"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"XML document character set"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"version"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"XML version"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"standalone"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"True = document is standalone, otherwise False"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"SAX GET XML DOCUMENT VALUES"})," command gets basic information from the XML header of the XML document referenced in the ",(0,d.jsx)(n.em,{children:"document"})," parameter."]}),"\n",(0,d.jsxs)(n.p,{children:["The command returns the type of encoding, version and the \u201Cstandalone\u201D property of the document respectively in the ",(0,d.jsx)(n.em,{children:"encoding"}),", ",(0,d.jsx)(n.em,{children:"version"})," and ",(0,d.jsx)(n.em,{children:"standalone"})," parameters. This command must be used with the SAX event XML Start Document. For more information about SAX events, refer to the description of the ",(0,d.jsx)(n.a,{href:"/docs/commands/sax-get-xml-node",children:"SAX Get XML node"})," command."]}),"\n",(0,d.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,d.jsx)(n.p,{children:"If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0 and an error is generated."}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/sax-get-xml-node",children:"SAX Get XML node"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/sax-set-xml-declaration",children:"SAX SET XML DECLARATION"})]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"873"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);