"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44732"],{486967:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>A});var s=JSON.parse('{"id":"commands-legacy/dom-get-xml-attribute-by-name","title":"DOM GET XML ATTRIBUTE BY NAME","description":"DOM GET XML ATTRIBUTE BY NAME ( elementRef ; attribName ; attribValue )","source":"@site/versioned_docs/version-20-R7/commands-legacy/dom-get-xml-attribute-by-name.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-attribute-by-name","permalink":"/docs/20-R7/commands/dom-get-xml-attribute-by-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-attribute-by-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-attribute-by-name","title":"DOM GET XML ATTRIBUTE BY NAME","slug":"/commands/dom-get-xml-attribute-by-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ATTRIBUTE BY INDEX","permalink":"/docs/20-R7/commands/dom-get-xml-attribute-by-index"},"next":{"title":"DOM GET XML CHILD NODES","permalink":"/docs/20-R7/commands/dom-get-xml-child-nodes"}}'),r=n("785893"),a=n("250065");let i={id:"dom-get-xml-attribute-by-name",title:"DOM GET XML ATTRIBUTE BY NAME",slug:"/commands/dom-get-xml-attribute-by-name",displayed_sidebar:"docs"},A=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"DOM GET XML ATTRIBUTE BY NAME"})," ( ",(0,r.jsx)(t.em,{children:"elementRef"})," ; ",(0,r.jsx)(t.em,{children:"attribName"})," ; ",(0,r.jsx)(t.em,{children:"attribValue"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"elementRef"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"XML element reference"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attribName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Attribute name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attribValue"}),(0,r.jsx)(t.td,{children:"Variable"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Attribute value"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"The DOM GET XML ATTRIBUTE BY NAME command gets the value of an attribute specified by name."}),"\n",(0,r.jsxs)(t.p,{children:["Pass the reference of an XML element in ",(0,r.jsx)(t.em,{children:"elementRef"})," and the name of the attribute that you want to know the value of in ",(0,r.jsx)(t.em,{children:"attribName"}),". The value is returned in the ",(0,r.jsx)(t.em,{children:"attribValue"})," parameter. 4D attempts to convert the value obtained into the same type as that of the variable passed as parameter. If the variable type is not defined, the value is returned in text type by default."]}),"\n",(0,r.jsxs)(t.p,{children:["If no ",(0,r.jsx)(t.em,{children:"attribName"})," attribute exists in the XML element, an error is returned. If several attributes of the XML element have the same name as that specified, only the value of the first attribute is returned."]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"This method is used to retrieve the value of an XML attribute using its name:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var myBlobVar : Blob\n\xa0var $xml_Parent_Ref;$xml_Child_Ref : Text\n\xa0var $LineNum : Integer\n\xa0\n\xa0$xml_Parent_Ref:=DOM Parse XML variable(myBlobVar)\n\xa0$xml_Child_Ref:=DOM Get first child XML element($xml_Parent_Ref)\n\xa0DOM GET XML ATTRIBUTE BY NAME($xml_Child_Ref;"N";$LineNum)\n'})}),"\n",(0,r.jsx)(t.p,{children:"If this method is applied to the example below, $LineNum contains the value 1:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(798948).Z+"",width:"510",height:"138"})}),"\n",(0,r.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(t.p,{children:"If the command has been correctly executed, the system variable OK is set to 1. If an error occurs, it is set to 0."}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/dom-get-xml-attribute-by-index",children:"DOM GET XML ATTRIBUTE BY INDEX"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/dom-remove-xml-attribute",children:"DOM REMOVE XML ATTRIBUTE"})]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"728"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Modifies variables"}),(0,r.jsx)(t.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},798948:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return A},a:function(){return i}});var s=n(667294);let r={},a=s.createContext(r);function i(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function A(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);