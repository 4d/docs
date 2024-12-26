"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14031"],{149029:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>a,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/dom-count-xml-elements","title":"DOM Count XML elements","description":"DOM Count XML elements ( elementRef ; elementName ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/dom-count-xml-elements.md","sourceDirName":"commands-legacy","slug":"/commands/dom-count-xml-elements","permalink":"/docs/commands/dom-count-xml-elements","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-count-xml-elements.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-count-xml-elements","title":"DOM Count XML elements","slug":"/commands/dom-count-xml-elements","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Count XML attributes","permalink":"/docs/commands/dom-count-xml-attributes"},"next":{"title":"DOM Create XML element","permalink":"/docs/commands/dom-create-xml-element"}}'),d=t("785893"),r=t("250065");let l={id:"dom-count-xml-elements",title:"DOM Count XML elements",slug:"/commands/dom-count-xml-elements",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function m(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DOM Count XML elements"})," ( ",(0,d.jsx)(n.em,{children:"elementRef"})," ; ",(0,d.jsx)(n.em,{children:"elementName"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"elementRef"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"XML element reference"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"elementName"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Name of XML elements to count"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Function result"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Number of elements"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The DOM Count XML elements command returns the number of \u201Cchild\u201D elements dependent on the ",(0,d.jsx)(n.em,{children:"elementRef"})," parent element and named ",(0,d.jsx)(n.em,{children:"elementName"}),".By default, ",(0,d.jsx)(n.strong,{children:"DOM Count XML elements"})," is case sensitive regarding the ",(0,d.jsx)(n.em,{children:"elementName"})," parameter (xml compliance). You can control the case sensitivity of the command using the XML DOM case sensitivity selector of the ",(0,d.jsx)(n.a,{href:"/docs/commands/xml-set-options",children:"XML SET OPTIONS"})," command."]}),"\n",(0,d.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,d.jsx)(n.p,{children:"If the command has been correctly executed, the system variable OK is set to 1. If an error occurs, it is set to 0."}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/dom-get-xml-element",children:"DOM Get XML element"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"726"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let d={},r=s.createContext(d);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);