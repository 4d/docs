"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39175"],{544874:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/dom-set-xml-attribute","title":"DOM SET XML ATTRIBUTE","description":"DOM SET XML ATTRIBUTE ( elementRef ; attribName ; attrValue {; attribName2 ; attrValue2 ; ... ; attribNameN ; attrValueN} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/dom-set-xml-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-attribute","permalink":"/docs/20-R8/commands/dom-set-xml-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-attribute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-set-xml-attribute","title":"DOM SET XML ATTRIBUTE","slug":"/commands/dom-set-xml-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM REMOVE XML ELEMENT","permalink":"/docs/20-R8/commands/dom-remove-xml-element"},"next":{"title":"DOM SET XML DECLARATION","permalink":"/docs/20-R8/commands/dom-set-xml-declaration"}}'),r=n("785893"),d=n("250065");let l={id:"dom-set-xml-attribute",title:"DOM SET XML ATTRIBUTE",slug:"/commands/dom-set-xml-attribute",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"DOM SET XML ATTRIBUTE"})," ( ",(0,r.jsx)(t.em,{children:"elementRef"})," ; ",(0,r.jsx)(t.em,{children:"attribName"})," ; ",(0,r.jsx)(t.em,{children:"attrValue"})," {; ",(0,r.jsx)(t.em,{children:"attribName2"})," ; ",(0,r.jsx)(t.em,{children:"attrValue2"})," ; ... ; ",(0,r.jsx)(t.em,{children:"attribNameN"})," ; ",(0,r.jsx)(t.em,{children:"attrValueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"elementRef"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"XML element reference"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attribName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Attribute to set"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attrValue"}),(0,r.jsx)(t.td,{children:"Text, Boolean, Integer, Real, Time, Date"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"New attribute value"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The DOM SET XML ATTRIBUTE command adds one or more attributes to the XML element whose reference is passed in the ",(0,r.jsx)(t.em,{children:"elementRef"})," parameter. It also sets the value of each attribute defined."]}),"\n",(0,r.jsxs)(t.p,{children:["Pass the attribute you want to set and its value respectively in the ",(0,r.jsx)(t.em,{children:"attrName"})," and ",(0,r.jsx)(t.em,{children:"attrValue"})," parameters (in the form of variables, fields or literal values). You can pass as many attribute/value pairs as you want.",(0,r.jsx)(t.br,{}),"\nThe ",(0,r.jsx)(t.em,{children:"attrValue"})," parameter can be of the text type or another type (Boolean, integer, real, date or time). If you pass a value other than text, 4D handles its conversion to text, according to the following principles:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Type"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Example of converted value"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:'"true" or "false"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:'"123456"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Real"}),(0,r.jsx)(t.td,{children:'"12.34" (the decimal separator is always ".")'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Date"}),(0,r.jsx)(t.td,{children:'"2006-12-04T00:00:00Z" (RFC 3339 standard)'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Time"}),(0,r.jsx)(t.td,{children:'"5233" (number of seconds)'})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"In the following XML source:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title>The Best Seller</Title>\n</Book>\n"})}),"\n",(0,r.jsx)(t.p,{children:"If the following code is executed:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0vAttrName:="Font"\n\xa0vAttrVal:="Verdana"\n\xa0DOM SET XML ATTRIBUTE(vElemRef;vAttrName;vAttrVal)\n'})}),"\n",(0,r.jsx)(t.p,{children:"We get:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title Font=Verdana>The Best Seller</Title>\n</Book>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(t.p,{children:"If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0 and an error is generated."}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/dom-get-xml-attribute-by-index",children:"DOM GET XML ATTRIBUTE BY INDEX"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/dom-get-xml-attribute-by-name",children:"DOM GET XML ATTRIBUTE BY NAME"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/dom-remove-xml-attribute",children:"DOM REMOVE XML ATTRIBUTE"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"866"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Modifies variables"}),(0,r.jsx)(t.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var s=n(667294);let r={},d=s.createContext(r);function l(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);