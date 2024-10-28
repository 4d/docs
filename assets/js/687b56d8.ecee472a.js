"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76063],{514758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var l=n(474848),s=n(28453);const d={id:"dom-get-last-child-xml-element",title:"DOM Get last child XML element",slug:"/commands/dom-get-last-child-xml-element",displayed_sidebar:"docs"},i=void 0,r={id:"commands-legacy/dom-get-last-child-xml-element",title:"DOM Get last child XML element",description:"DOM Get last child XML element ( elementRef {; childElemName {; childElemValue}} ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/dom-get-last-child-xml-element.md",sourceDirName:"commands-legacy",slug:"/commands/dom-get-last-child-xml-element",permalink:"/docs/commands/dom-get-last-child-xml-element",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-last-child-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"dom-get-last-child-xml-element",title:"DOM Get last child XML element",slug:"/commands/dom-get-last-child-xml-element",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DOM Get first child XML element",permalink:"/docs/commands/dom-get-first-child-xml-element"},next:{title:"DOM Get next sibling XML element",permalink:"/docs/commands/dom-get-next-sibling-xml-element"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function m(e){const t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"DOM Get last child XML element"})," ( ",(0,l.jsx)(t.em,{children:"elementRef"})," {; ",(0,l.jsx)(t.em,{children:"childElemName"})," {; ",(0,l.jsx)(t.em,{children:"childElemValue"}),"}} ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Parameter"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"elementRef"}),(0,l.jsx)(t.td,{children:"Text"}),(0,l.jsx)(t.td,{children:"\u2192"}),(0,l.jsx)(t.td,{children:"XML element reference"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"childElemName"}),(0,l.jsx)(t.td,{children:"Text"}),(0,l.jsx)(t.td,{children:"\u2190"}),(0,l.jsx)(t.td,{children:"Name of child element"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"childElemValue"}),(0,l.jsx)(t.td,{children:"Text"}),(0,l.jsx)(t.td,{children:"\u2190"}),(0,l.jsx)(t.td,{children:"Value of child element"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Function result"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"\u2190"}),(0,l.jsx)(t.td,{children:"XML element reference"})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(t.p,{children:["The DOM Get last child XML element command returns an XML reference to the last \u201cchild\u201d of the XML element passed as reference in ",(0,l.jsx)(t.em,{children:"elementRef"}),". This reference may be used with the other XML parsing commands."]}),"\n",(0,l.jsxs)(t.p,{children:["The optional ",(0,l.jsx)(t.em,{children:"childElemName"})," and ",(0,l.jsx)(t.em,{children:"childElemValue"})," parameters, when passed, receive respectively the name and value of the \u201cchild\u201d element."]}),"\n",(0,l.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(t.p,{children:"Recovery of the reference of the last XML element of the parent root. The XML structure (C:\\\\import.xml) is loaded into a BLOB beforehand:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-4d",children:'\xa0var myBlobVar : Blob\n\xa0var $ref_XML_Parent;$ref_XML_Child : Text\n\xa0var $childName;$childValue : Text\n\xa0\n\xa0DOCUMENT TO BLOB("c:\\\\import.xml";myBlobVar)\n\xa0$ref_XML_Parent:=DOM Parse XML variable(myBlobVar)\n\xa0$ref_XML_Child:=DOM Get last child XML element($ref_XML_Parent;$childName;$childValue)\n'})}),"\n",(0,l.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,l.jsx)(t.p,{children:"If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0."}),"\n",(0,l.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"/docs/commands/dom-get-first-child-xml-element",children:"DOM Get first child XML element"})})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var l=n(296540);const s={},d=l.createContext(s);function i(e){const t=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(d.Provider,{value:t},e.children)}}}]);