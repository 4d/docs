"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43471"],{119981:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>m,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/dom-get-parent-xml-element","title":"DOM Get parent XML element","description":"DOM Get parent XML element ( elementRef {; parentElemName {; parentElemValue}} ) : Text","source":"@site/versioned_docs/version-20-R9/commands-legacy/dom-get-parent-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-parent-xml-element","permalink":"/docs/commands/dom-get-parent-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-parent-xml-element.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"dom-get-parent-xml-element","title":"DOM Get parent XML element","slug":"/commands/dom-get-parent-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get next sibling XML element","permalink":"/docs/commands/dom-get-next-sibling-xml-element"},"next":{"title":"DOM Get previous sibling XML element","permalink":"/docs/commands/dom-get-previous-sibling-xml-element"}}'),r=t("785893"),l=t("250065");let d={id:"dom-get-parent-xml-element",title:"DOM Get parent XML element",slug:"/commands/dom-get-parent-xml-element",displayed_sidebar:"docs"},i=void 0,a={},m=[{value:"Description",id:"description",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM Get parent XML element"})," ( ",(0,r.jsx)(n.em,{children:"elementRef"})," {; ",(0,r.jsx)(n.em,{children:"parentElemName"})," {; ",(0,r.jsx)(n.em,{children:"parentElemValue"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"elementRef"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"XML element reference"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"parentElemName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Name of parent XML element"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"parentElemValue"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Value of parent XML element"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Parent XML element reference"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The DOM Get parent XML element command returns an XML reference to the \u201Cparent\u201D of the XML element passed as reference in ",(0,r.jsx)(n.em,{children:"elementRef"}),". This reference may be used with the other XML parsing commands."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"parentElemName"})," and ",(0,r.jsx)(n.em,{children:"parentElemValue"})," parameters, when passed, receive respectively the name and value of the parent element."]}),"\n",(0,r.jsxs)(n.p,{children:["When you pass a root element in ",(0,r.jsx)(n.em,{children:"elementRef"}),', the command returns the "#document" reference. The document node is the parent of a root element.',(0,r.jsx)(n.br,{}),'\nIf you use this command on a document node, the command returns a null reference ("0000000000000000") and the OK variable is set to 0.']}),"\n",(0,r.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(n.p,{children:"If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0."}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/dom-get-first-child-xml-element",children:"DOM Get first child XML element"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/dom-get-last-child-xml-element",children:"DOM Get last child XML element"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/dom-get-root-xml-element",children:"DOM Get root XML element"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"923"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let r={},l=s.createContext(r);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);