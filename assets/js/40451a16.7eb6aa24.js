"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65875"],{68192:function(e,t,n){n.r(t),n.d(t,{default:()=>A,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/dom-count-xml-attributes","title":"DOM Count XML attributes","description":"DOM Count XML attributes ( elementRef ) : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/dom-count-xml-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/dom-count-xml-attributes","permalink":"/docs/commands/dom-count-xml-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-count-xml-attributes.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-count-xml-attributes","title":"DOM Count XML attributes","slug":"/commands/dom-count-xml-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM CLOSE XML","permalink":"/docs/commands/dom-close-xml"},"next":{"title":"DOM Count XML elements","permalink":"/docs/commands/dom-count-xml-elements"}}'),s=n("785893"),i=n("250065");let l={id:"dom-count-xml-attributes",title:"DOM Count XML attributes",slug:"/commands/dom-count-xml-attributes",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let t={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"DOM Count XML attributes"})," ( ",(0,s.jsx)(t.em,{children:"elementRef"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"elementRef"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"XML element reference"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Function result"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Number of attributes"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"DOM Count XML attributes"})," command returns the number of XML attributes present in the XML element designated by ",(0,s.jsx)(t.em,{children:"elementRef"}),". For more information about XML attributes, refer to the ",(0,s.jsx)(t.em,{children:"Overview of XML DOM Commands"})," section."]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Before retrieving the values of elements in an array, you want to know the number of attributes in the following XML element:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(422891).Z+"",width:"485",height:"107"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0var myBlobVar : Blob\n\xa0var $xml_Parent_Ref;$xml_Child_Ref : Text\n\xa0var myResult : Text\n\xa0var $numAttributes : Integer\n\xa0\n\xa0$xml_Parent_Ref:=DOM Parse XML variable(myBlobVar)\n\xa0$xml_Child_Ref:=DOM Get first child XML element($xml_Parent_Ref)\n\xa0\n\xa0$numAttributes:=DOM Count XML attributes($xml_Child_Ref)\n\xa0ARRAY TEXT(tAttrib;$numAttributes)\n\xa0ARRAY TEXT(tValAttrib;$numAttributes)\n\xa0For($i;1;$numAttributes)\n\xa0\xa0\xa0\xa0DOM GET XML ATTRIBUTE BY INDEX($xml_Child_Ref;$i;tAttrib{$i};tValAttrib{$i})\n\xa0End for\n"})}),"\n",(0,s.jsx)(t.p,{children:"In the above example, $numAttributes equals 3, tAttrib{1} contains \u201CFont\u201D, tAttrib{2} contains \u201CN\u201D, tAttrib{3} contains \u201Csize\u201D and tValAttrib contains \u201CVerdana\u201D, \u201C1\u201D and \u201C10\u201D."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The index number does not correspond to the location of the attribute in the XML file displayed in text form. In XML, the index of an attribute indicates its position among the attributes arranged in alphabetical order (according to their name)."]}),"\n",(0,s.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(t.p,{children:"If the command has been correctly executed, the system variable OK is set to 1. If an error occurs, it is set to 0."}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/commands/dom-count-xml-elements",children:"DOM Count XML elements"})}),"\n",(0,s.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"727"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifies variables"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function A(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},422891:function(e,t,n){n.d(t,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var r=n(667294);let s={},i=r.createContext(s);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);