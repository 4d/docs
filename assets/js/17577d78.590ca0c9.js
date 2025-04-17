"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19891"],{857079:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/dom-set-xml-element-value","title":"DOM SET XML ELEMENT VALUE","description":"DOM SET XML ELEMENT VALUE ( elementRef {; xPath}; elementValue {; *} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/dom-set-xml-element-value.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-element-value","permalink":"/docs/commands/dom-set-xml-element-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-element-value.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"dom-set-xml-element-value","title":"DOM SET XML ELEMENT VALUE","slug":"/commands/dom-set-xml-element-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM SET XML ELEMENT NAME","permalink":"/docs/commands/dom-set-xml-element-name"},"next":{"title":"XML SAX","permalink":"/docs/commands/theme/XML-SAX"}}'),l=t("785893"),i=t("250065");let r={id:"dom-set-xml-element-value",title:"DOM SET XML ELEMENT VALUE",slug:"/commands/dom-set-xml-element-value",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Note about processing end-of-line characters",id:"note-about-processing-end-of-line-characters",level:3},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",postulate:"postulate",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"DOM SET XML ELEMENT VALUE"})," ( ",(0,l.jsx)(n.em,{children:"elementRef"})," {; ",(0,l.jsx)(n.em,{children:"xPath"}),"}; ",(0,l.jsx)(n.em,{children:"elementValue"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"elementRef"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"XML element reference"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"xPath"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"XPath path of the XML element"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"elementValue"}),(0,l.jsx)(n.td,{children:"Text, Variable"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"New value of element"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Operator"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"If passed: set the value in CDATA"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"DOM SET XML ELEMENT VALUE"})," command modifies the value of the element set by ",(0,l.jsx)(n.em,{children:"elementRef"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["If you pass the optional ",(0,l.jsx)(n.em,{children:"xPath"})," parameter, you choose to use XPath notation to indicate the element to be modified (for more information see the ",(0,l.jsx)(n.em,{children:"Support of XPath notation (DOM)"})," section). The following path expressions are supported:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Expression"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Action"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"/"}),(0,l.jsx)(n.td,{children:"Designates the root node (absolute path)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"para[1]"}),(0,l.jsx)(n.td,{children:"Designates the first para child of the context node"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"para[last()]"}),(0,l.jsx)(n.td,{children:"Designates the last para child of the context node"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["In this case, you must pass the reference of a root XML element in ",(0,l.jsx)(n.em,{children:"elementRef"})," and the XPath path of the element to be modified in ",(0,l.jsx)(n.em,{children:"xPath"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.em,{children:[(0,l.jsx)(n.em,{children:"Compatibility Note:"})," Starting with v18 R3, the XPath implementation in 4D is more compliant. For compatibility reasons, the previous non-standard implementation is maintained by default in converted databases. If you want to benefit from the extended features in your converted databases, you need to select the ",(0,l.jsx)(n.em,{children:"Use standard XPath"})," compatibility option of the Compatibility page."]})}),"\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.em,{children:"elementValue"}),", pass a string or a variable (or a field) containing the new value of the specified element:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"If you pass a string, the value is used \u201Cas is\u201D in the XML structure."}),"\n",(0,l.jsxs)(n.li,{children:["If you pass a variable or a field, 4D processes the value, depending on the type of ",(0,l.jsx)(n.em,{children:"elementValue"}),". All data types can be used, except arrays, pictures and pointers. If elementValue is evaluated to ",(0,l.jsx)(n.em,{children:"undefined"}),", 4D uses an empty string."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"When the optional asterisk (*) parameter is passed, this indicates that the value of the element must be set in the form of CDATA. The special CDATA form can be used to write raw text as is (see example 2)."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note:"})," If the element designated by ",(0,l.jsx)(n.em,{children:"elementRef"})," is a BLOB processed by this command, it is automatically encoded in base64. In this case, the ",(0,l.jsx)(n.a,{href:"/docs/commands/dom-get-xml-element-value",children:"DOM GET XML ELEMENT VALUE"})," command does automatically the reverse operation."]}),"\n",(0,l.jsx)(n.h3,{id:"note-about-processing-end-of-line-characters",children:"Note about processing end-of-line characters"}),"\n",(0,l.jsx)(n.p,{children:"To comply with XML processing rules, all CR and CRLF end-of-line characters are replaced by LF characters."}),"\n",(0,l.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,l.jsx)(n.p,{children:"In the following XML source:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title>The Best Seller</Title>\n</Book>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["If the following code is executed, with ",(0,l.jsx)(n.em,{children:"vElemRef"})," containing the reference to the \u201CTitle\u201D element:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0DOM SET XML ELEMENT VALUE(vElemRef;"The Loser")\n'})}),"\n",(0,l.jsx)(n.p,{children:"We get:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title>The Loser</Title>\n</Book>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,l.jsx)(n.p,{children:"In the following XML source:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:"<Maths>\n\xa0\xa0\xa0<Postulate>1+2=3</Postulate>\n</Maths>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["We want to write the text \u201C12<18\u201D in the ",(0,l.jsx)(n.em,{children:(0,l.jsx)(n.postulate,{})})," element. This string cannot be written as is in XML because the \u201C<\u201D character is not accepted. This character must therefore be changed into \u201C<\u201D or the CDATA form must be used. If ",(0,l.jsx)(n.em,{children:"vElemRef"})," indicates the XML ",(0,l.jsx)(n.em,{children:(0,l.jsx)(n.postulate,{})})," node:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Normal form\n\xa0DOM SET XML ELEMENT VALUE(vElemRef;"12<18")\n'})}),"\n",(0,l.jsx)(n.p,{children:"We get:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:"<Maths>\n\xa0\xa0\xa0<Postulate>12 < 18</Postulate>\n</Maths>\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// CDATA form\n\xa0DOM SET XML ELEMENT VALUE(vElemRef;"12<18";*)\n'})}),"\n",(0,l.jsx)(n.p,{children:"We get:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:"<Maths>\n\xa0\xa0\xa0<Postulate><![CDATA[12 < 18]]></Postulate>\n</Maths>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,l.jsx)(n.p,{children:"If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0 and an error is generated (for example, if the element reference is invalid)."}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/commands/dom-get-xml-element-value",children:"DOM GET XML ELEMENT VALUE"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"868"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifies variables"}),(0,l.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);