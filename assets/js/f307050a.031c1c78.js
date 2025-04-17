"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61249"],{928505:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/dom-export-to-var","title":"DOM EXPORT TO VAR","description":"DOM EXPORT TO VAR ( elementRef ; vXmlVar )","source":"@site/versioned_docs/version-20-R9/commands-legacy/dom-export-to-var.md","sourceDirName":"commands-legacy","slug":"/commands/dom-export-to-var","permalink":"/docs/commands/dom-export-to-var","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-export-to-var.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"dom-export-to-var","title":"DOM EXPORT TO VAR","slug":"/commands/dom-export-to-var","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM EXPORT TO FILE","permalink":"/docs/commands/dom-export-to-file"},"next":{"title":"DOM Find XML element","permalink":"/docs/commands/dom-find-xml-element"}}'),s=t("785893"),a=t("250065");let i={id:"dom-export-to-var",title:"DOM EXPORT TO VAR",slug:"/commands/dom-export-to-var",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"About end-of-line characters and BOM management",id:"about-end-of-line-characters-and-bom-management",level:3},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM EXPORT TO VAR"})," ( ",(0,s.jsx)(n.em,{children:"elementRef"})," ; ",(0,s.jsx)(n.em,{children:"vXmlVar"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Root XML element reference"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vXmlVar"}),(0,s.jsx)(n.td,{children:"Text, Blob"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Variable to receive XML tree"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"DOM EXPORT TO VAR"})," command saves an XML tree in a text or BLOB variable."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the root element reference to export in ",(0,s.jsx)(n.em,{children:"elementRef"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the name of the variable that must contain the XML tree in ",(0,s.jsx)(n.em,{children:"vXmlVar"}),". This variable must either be a Text or BLOB type. You can select the type depending on what you plan on doing next or the size that the tree can reach (remember that when not in Unicode mode, Text type variables are limited to 32 K of text, whereas in Unicode mode, this limit is 2 GB)."]}),"\n",(0,s.jsxs)(n.p,{children:["Keep in mind that if you use a Text variable to store ",(0,s.jsx)(n.em,{children:"elementRef"}),' when not in Unicode mode, , it will be encoded using the \u201Ccurrent\u201D Mac character set (i.e. Mac Roman on most Western systems). This means that the text returned will lose its original encoding (encoding="xxx"). In this case, the ',(0,s.jsx)(n.em,{children:"vVarXml"})," variable allows you to view or store the code but NOT to generate a valid XML document (using the ",(0,s.jsx)(n.a,{href:"/docs/commands/send-packet",children:"SEND PACKET"})," command for example)."]}),"\n",(0,s.jsx)(n.p,{children:"In Unicode mode, the original encoding is kept in the variable."}),"\n",(0,s.jsx)(n.h3,{id:"about-end-of-line-characters-and-bom-management",children:"About end-of-line characters and BOM management"}),"\n",(0,s.jsx)(n.p,{children:"In XML, line breaks are not significant regardless of whether they are within or between XML elements. Internally, XML uses standard LF characters as line separators. During import and export operations, line break characters can be converted. During an import, the XML parser replaces CRLF characters (standard line breaks under Windows) with LF characters. During export, LF characters are replaced by CRLF characters on Windows (no replacement on macOS)."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"}),' If you want to keep carriage returns, you must include them in an XML CDATA element so that they will not be processed by the XML parser. Instead of CRLF characters, you can also use "',(0,s.jsx)(n.br,{}),'" characters, which are explicit carriage returns that will not be processed by the parser.']}),"\n",(0,s.jsx)(n.p,{children:"By default, XML files are written without BOM (Byte order mask)."}),"\n",(0,s.jsxs)(n.p,{children:["You can control the XML line ending and BOM management using the ",(0,s.jsx)(n.a,{href:"/docs/commands/xml-set-options",children:"XML SET OPTIONS"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compatibility Note:"})," In databases/projects created with 4D versions up to v19.x, by default 4D uses CR as end-of-line characters on macOS and a BOM. To enable the new default settings, check compatibility settings (see ",(0,s.jsx)(n.em,{children:"Compatibility page"}),") or use the ",(0,s.jsx)(n.a,{href:"/docs/commands/xml-set-options",children:"XML SET OPTIONS"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"This example stores the tree vElemRef in a text variable:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var vtMyText : Text\n\xa0DOM EXPORT TO VAR(vElemRef;vtMyText)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(n.p,{children:"If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0 and an error is generated (for example, if the element reference is invalid)."}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/dom-export-to-file",children:"DOM EXPORT TO FILE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/svg-export-to-picture",children:"SVG EXPORT TO PICTURE"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"863"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(667294);let s={},a=r.createContext(s);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);