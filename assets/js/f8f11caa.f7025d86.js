"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54586"],{18226:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>c,assets:()=>a,toc:()=>i,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/dom-get-xml-element-name","title":"DOM GET XML ELEMENT NAME","description":"DOM GET XML ELEMENT NAME ( elementRef ; elementName )","source":"@site/versioned_docs/version-20-R7/commands-legacy/dom-get-xml-element-name.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-element-name","permalink":"/docs/commands/dom-get-xml-element-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-element-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-element-name","title":"DOM GET XML ELEMENT NAME","slug":"/commands/dom-get-xml-element-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get XML element","permalink":"/docs/commands/dom-get-xml-element"},"next":{"title":"DOM GET XML ELEMENT VALUE","permalink":"/docs/commands/dom-get-xml-element-value"}}'),l=t("785893"),m=t("250065");let d={id:"dom-get-xml-element-name",title:"DOM GET XML ELEMENT NAME",slug:"/commands/dom-get-xml-element-name",displayed_sidebar:"docs"},r=void 0,a={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,m.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"DOM GET XML ELEMENT NAME"})," ( ",(0,l.jsx)(n.em,{children:"elementRef"})," ; ",(0,l.jsx)(n.em,{children:"elementName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"elementRef"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"XML element reference"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"elementName"}),(0,l.jsx)(n.td,{children:"Variable"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Name of the element"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The DOM GET XML ELEMENT NAME command returns, in the ",(0,l.jsx)(n.em,{children:"elementName"})," parameter, the name of the XML element designated by ",(0,l.jsx)(n.em,{children:"elementRef"}),". If the ",(0,l.jsx)(n.em,{children:"elementName"})," variable type is not defined, the text type is used by default."]}),"\n",(0,l.jsxs)(n.p,{children:["For more information on XML element names, refer to the ",(0,l.jsx)(n.em,{children:"Overview of XML DOM Commands"})," section."]}),"\n",(0,l.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"This method returns the name of the $xml_Element_Ref element:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0var $xml_Element_Ref : Text\n\xa0var $name : Text\n\xa0\n\xa0DOM GET XML ELEMENT NAME($xml_Element_Ref;$name)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,l.jsx)(n.p,{children:"If the command has been correctly executed, the system variable OK is set to 1. If an error occurs, it is set to 0."}),"\n",(0,l.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/commands/dom-get-xml-element",children:"DOM Get XML element"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/dom-get-xml-element-value",children:"DOM GET XML ELEMENT VALUE"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/dom-set-xml-element-name",children:"DOM SET XML ELEMENT NAME"})]})]})}function c(e={}){let{wrapper:n}={...(0,m.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var s=t(667294);let l={},m=s.createContext(l);function d(e){let n=s.useContext(m);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(m.Provider,{value:n},e.children)}}}]);