"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96107"],{430352:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/dom-get-previous-sibling-xml-element","title":"DOM Get previous sibling XML element","description":"DOM Get previous sibling XML element ( elementRef {; siblingElemName {; siblingElemValue}} ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/dom-get-previous-sibling-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-previous-sibling-xml-element","permalink":"/docs/20-R7/commands/dom-get-previous-sibling-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-previous-sibling-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-previous-sibling-xml-element","title":"DOM Get previous sibling XML element","slug":"/commands/dom-get-previous-sibling-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get parent XML element","permalink":"/docs/20-R7/commands/dom-get-parent-xml-element"},"next":{"title":"DOM Get root XML element","permalink":"/docs/20-R7/commands/dom-get-root-xml-element"}}'),i=t("785893"),l=t("250065");let r={id:"dom-get-previous-sibling-xml-element",title:"DOM Get previous sibling XML element",slug:"/commands/dom-get-previous-sibling-xml-element",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function m(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DOM Get previous sibling XML element"})," ( ",(0,i.jsx)(n.em,{children:"elementRef"})," {; ",(0,i.jsx)(n.em,{children:"siblingElemName"})," {; ",(0,i.jsx)(n.em,{children:"siblingElemValue"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"elementRef"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"XML element reference"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"siblingElemName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Name of sibling XML element"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"siblingElemValue"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Value of sibling XML element"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Sibling XML element reference"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The DOM Get previous sibling XML element command returns a reference to the previous \u201Csibling\u201D of the XML element passed as reference. This reference may be used with the other XML parsing commands."}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"siblingElemName"})," and ",(0,i.jsx)(n.em,{children:"siblingElemValue"})," parameters, when passed, receive respectively the name and value of the previous \u201Csibling\u201D element."]}),"\n",(0,i.jsx)(n.p,{children:"This command can be used to navigate among the \u201Cchildren\u201D of an XML element."}),"\n",(0,i.jsx)(n.p,{children:"Before the first \u201Csibling,\u201D the system variable OK is set to 0."}),"\n",(0,i.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsx)(n.p,{children:"If the command has been executed correctly and if the referenced element is not the first \u201Cchild\u201D of the structure, the system variable OK is set to 1. If an error occurs or if the element parsed is the first \u201Cchild\u201D of the structure, it is set to 0."}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/dom-get-next-sibling-xml-element",children:"DOM Get next sibling XML element"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"924"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);