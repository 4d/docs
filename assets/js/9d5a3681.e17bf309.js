"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31793"],{995078:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/dom-get-next-sibling-xml-element","title":"DOM Get next sibling XML element","description":"DOM Get next sibling XML element ( elementRef {; siblingElemName {; siblingElemValue}} ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/dom-get-next-sibling-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-next-sibling-xml-element","permalink":"/docs/commands/dom-get-next-sibling-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-next-sibling-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-next-sibling-xml-element","title":"DOM Get next sibling XML element","slug":"/commands/dom-get-next-sibling-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get last child XML element","permalink":"/docs/commands/dom-get-last-child-xml-element"},"next":{"title":"DOM Get parent XML element","permalink":"/docs/commands/dom-get-parent-xml-element"}}'),l=t("785893"),i=t("250065");let r={id:"dom-get-next-sibling-xml-element",title:"DOM Get next sibling XML element",slug:"/commands/dom-get-next-sibling-xml-element",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function m(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"DOM Get next sibling XML element"})," ( ",(0,l.jsx)(n.em,{children:"elementRef"})," {; ",(0,l.jsx)(n.em,{children:"siblingElemName"})," {; ",(0,l.jsx)(n.em,{children:"siblingElemValue"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"elementRef"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"XML element reference"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"siblingElemName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Name of sibling XML element"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"siblingElemValue"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Value of sibling XML element"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Function result"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Sibling XML element reference"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"The DOM Get next sibling XML element command returns a reference to the next \u201Csibling\u201D of the XML element passed as reference. This reference can be used with other XML parsing commands."}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.em,{children:"siblingElemName"})," and ",(0,l.jsx)(n.em,{children:"siblingElemValue"})," parameters, if they are passed, receive respectively the name and the value of the \u201Csibling\u201D element."]}),"\n",(0,l.jsx)(n.p,{children:"This command is used to navigate among the \u201Cchildren\u201D of the XML element."}),"\n",(0,l.jsx)(n.p,{children:"After the last \u201Csibling,\u201D the system variable OK is set to 0."}),"\n",(0,l.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,l.jsx)(n.p,{children:"Retrieval of the reference of the next sibling XML element following the element passed as parameter:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0var $xml_Parent_Ref;$next_XML_Ref : Text\n\xa0$next_XML_Ref:=DOM Get next sibling XML element($xml_Parent_Ref)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(691329).Z+"",width:"287",height:"146"})}),"\n",(0,l.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,l.jsx)(n.p,{children:"Retrieval in a reference loop of all the child XML elements following the parent element passed as parameter, beginning with the first child:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0var $xml_Parent_Ref;$first_XML_Ref;$next_XML_Ref : Text\n\xa0\n\xa0$first_XML_Ref:=DOM Get first child XML element($xml_Parent_Ref)\n\xa0$next_XML_Ref:=$first_XML_Ref\n\xa0While(OK=1)\n\xa0\xa0\xa0\xa0$next_XML_Ref:=DOM Get next sibling XML element($next_XML_Ref)\n\xa0End while\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(99505).Z+"",width:"420",height:"141"})}),"\n",(0,l.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,l.jsx)(n.p,{children:"If the command has been correctly executed and if the parsed element is not the last \u201Csibling\u201D of the referenced element, the system variable OK is set to 1. If an error occurs or if the parsed element is the last \u201Csibling\u201D of the referenced element, it is set to 0."}),"\n",(0,l.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/commands/dom-get-first-child-xml-element",children:"DOM Get first child XML element"})}),"\n",(0,l.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"724"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifies variables"}),(0,l.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},691329:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict40038.en-3d7ded752d161136f39adf1c911f0f36.png"},99505:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict40039.en-36b6a6e47ac30cc131c616512ead385f.png"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);