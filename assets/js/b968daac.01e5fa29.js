"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81887"],{717406:function(e,n,t){t.r(n),t.d(n,{metadata:()=>d,contentTitle:()=>c,default:()=>m,assets:()=>o,toc:()=>l,frontMatter:()=>r});var d=JSON.parse('{"id":"commands-legacy/sax-add-xml-doctype","title":"SAX ADD XML DOCTYPE","description":"SAX ADD XML DOCTYPE ( document ; docType )","source":"@site/versioned_docs/version-20-R7/commands-legacy/sax-add-xml-doctype.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-xml-doctype","permalink":"/docs/commands/sax-add-xml-doctype","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-doctype.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-add-xml-doctype","title":"SAX ADD XML DOCTYPE","slug":"/commands/sax-add-xml-doctype","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD XML COMMENT","permalink":"/docs/commands/sax-add-xml-comment"},"next":{"title":"SAX ADD XML ELEMENT VALUE","permalink":"/docs/commands/sax-add-xml-element-value"}}'),s=t("785893"),a=t("250065");let r={id:"sax-add-xml-doctype",title:"SAX ADD XML DOCTYPE",slug:"/commands/sax-add-xml-doctype",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4}];function i(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SAX ADD XML DOCTYPE"})," ( ",(0,s.jsx)(n.em,{children:"document"})," ; ",(0,s.jsx)(n.em,{children:"docType"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"document"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Reference of open document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"docType"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"DocType to be added"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The SAX ADD XML DOCTYPE command adds a DocType statement set by the ",(0,s.jsx)(n.em,{children:"docType"})," parameter in the XML document referenced by ",(0,s.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The DocType statement lets you indicate the type of XML in which the document has been written and to specify the Document Type Declaration (DTD) used. A DocType statement generally takes the following form: ."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following statement:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vDocType:="SYSTEM Books \\"Book.DTD\\""\n\xa0SAX ADD XML DOCTYPE($DocRef;vDocType)\n'})}),"\n",(0,s.jsx)(n.p,{children:"... will write the following line in the document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\n"})}),"\n",(0,s.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(n.p,{children:"If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0."}),"\n",(0,s.jsx)(n.h4,{id:"error-management",children:"Error management"}),"\n",(0,s.jsx)(n.p,{children:"In the event of an error, the the command returns an error which can be intercepted using an error-handling method."}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/sax-add-xml-comment",children:"SAX ADD XML COMMENT"})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var d=t(667294);let s={},a=d.createContext(s);function r(e){let n=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);