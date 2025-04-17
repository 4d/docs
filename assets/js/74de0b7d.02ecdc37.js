"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11671"],{942714:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>m,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/dom-get-xml-element-value","title":"DOM GET XML ELEMENT VALUE","description":"DOM GET XML ELEMENT VALUE ( elementRef ; elementValue {; cDATA} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/dom-get-xml-element-value.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-element-value","permalink":"/docs/commands/dom-get-xml-element-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-element-value.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"dom-get-xml-element-value","title":"DOM GET XML ELEMENT VALUE","slug":"/commands/dom-get-xml-element-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ELEMENT NAME","permalink":"/docs/commands/dom-get-xml-element-name"},"next":{"title":"DOM Get XML information","permalink":"/docs/commands/dom-get-xml-information"}}'),l=t("785893"),d=t("250065");let r={id:"dom-get-xml-element-value",title:"DOM GET XML ELEMENT VALUE",slug:"/commands/dom-get-xml-element-value",displayed_sidebar:"docs"},a=void 0,i={},m=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"DOM GET XML ELEMENT VALUE"})," ( ",(0,l.jsx)(n.em,{children:"elementRef"})," ; ",(0,l.jsx)(n.em,{children:"elementValue"})," {; ",(0,l.jsx)(n.em,{children:"cDATA"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"elementRef"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"XML element reference"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"elementValue"}),(0,l.jsx)(n.td,{children:"Variable"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Value of the element"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"cDATA"}),(0,l.jsx)(n.td,{children:"Variable"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Contents of the CDATA section"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"DOM GET XML ELEMENT VALUE"})," command returns, in the ",(0,l.jsx)(n.em,{children:"elementValue"})," parameter, the value of the XML element designated by ",(0,l.jsx)(n.em,{children:"elementRef"}),". 4D will attempt to convert the value obtained into the same type as that of the variable passed as parameter. If the variable type is not defined, the value is returned in text type by default."]}),"\n",(0,l.jsxs)(n.p,{children:["The optional ",(0,l.jsx)(n.em,{children:"cDATA"})," parameter is used to retrieve the contents of the CDATA section(s) of the ",(0,l.jsx)(n.em,{children:"elementRef"})," XML element. Like with the ",(0,l.jsx)(n.em,{children:"elementValue"})," parameter, 4D will attempt to convert the value obtained into the same type as that of the variable passed as parameter, and if the variable type is not defined, the text type is used by default."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note:"})," If the element designated by ",(0,l.jsx)(n.em,{children:"elementRef"})," is a BLOB processed by the ",(0,l.jsx)(n.a,{href:"/docs/commands/dom-set-xml-element-value",children:"DOM SET XML ELEMENT VALUE"})," command, it has been automatically encoded in base64. Therefore the command will automatically attempt to decode it in base64."]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"This method returns the value of the $xml_Element_Ref element:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0var $xml_Element_Ref : Text\n\xa0var $value : Real\n\xa0\n\xa0DOM GET XML ELEMENT VALUE($xml_Element_Ref;$value)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,l.jsx)(n.p,{children:"If the command has been correctly executed, the system variable OK is set to 1. If an error occurs, it is set to 0."}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/commands/dom-get-xml-element",children:"DOM Get XML element"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/dom-get-xml-element-name",children:"DOM GET XML ELEMENT NAME"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/dom-set-xml-element-value",children:"DOM SET XML ELEMENT VALUE"})]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"731"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifies variables"}),(0,l.jsx)(n.td,{children:"OK"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let l={},d=s.createContext(l);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);