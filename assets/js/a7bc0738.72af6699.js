"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43500"],{813404:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>m,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/dom-set-xml-element-name","title":"DOM SET XML ELEMENT NAME","description":"DOM SET XML ELEMENT NAME ( elementRef ; elementName )","source":"@site/versioned_docs/version-20-R8/commands-legacy/dom-set-xml-element-name.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-element-name","permalink":"/docs/20-R8/commands/dom-set-xml-element-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-element-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-set-xml-element-name","title":"DOM SET XML ELEMENT NAME","slug":"/commands/dom-set-xml-element-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM SET XML DECLARATION","permalink":"/docs/20-R8/commands/dom-set-xml-declaration"},"next":{"title":"DOM SET XML ELEMENT VALUE","permalink":"/docs/20-R8/commands/dom-set-xml-element-value"}}'),l=t("785893"),r=t("250065");let d={id:"dom-set-xml-element-name",title:"DOM SET XML ELEMENT NAME",slug:"/commands/dom-set-xml-element-name",displayed_sidebar:"docs"},i=void 0,a={},m=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"DOM SET XML ELEMENT NAME"})," ( ",(0,l.jsx)(n.em,{children:"elementRef"})," ; ",(0,l.jsx)(n.em,{children:"elementName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"elementRef"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"XML element reference"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"elementName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"New name of element"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The DOM SET XML ELEMENT NAME command modifies the name of the element set by ",(0,l.jsx)(n.em,{children:"elementRef"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Pass the reference of the element to rename in ",(0,l.jsx)(n.em,{children:"elementRef"})," and the new name of the element in ",(0,l.jsx)(n.em,{children:"elementName"}),". The command also takes charge of updating the open and close tags of the element."]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"In the following XML source:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title>The Best Seller</Title>\n</Book>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["If the following code is executed, with ",(0,l.jsx)(n.em,{children:"vElemRef"})," containing the reference to the \u2018Book\u2019 element:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0DOM SET XML ELEMENT NAME(vElemRef;"BestSeller")\n'})}),"\n",(0,l.jsx)(n.p,{children:"We get:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:"<BestSeller>\n\xa0\xa0\xa0<Title>The Best Seller</Title>\n</BestSeller>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,l.jsx)(n.p,{children:"If the command was executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0 and an error is generated."}),"\n",(0,l.jsx)(n.h2,{id:"error-management",children:"Error management"}),"\n",(0,l.jsx)(n.p,{children:"An error is generated when:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The element reference is invalid"}),"\n",(0,l.jsx)(n.li,{children:"The new name of the element to create is invalid (for example, if it starts with a number)."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/20-R8/commands/dom-get-xml-element-name",children:"DOM GET XML ELEMENT NAME"})}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"867"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifies variables"}),(0,l.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let l={},r=s.createContext(l);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);