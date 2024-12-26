"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2331"],{52422:function(e,n,d){d.r(n),d.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>t});var l=JSON.parse('{"id":"commands-legacy/dom-append-xml-child-node","title":"DOM Append XML child node","description":"DOM Append XML child node ( elementRef ; childType ; childValue ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/dom-append-xml-child-node.md","sourceDirName":"commands-legacy","slug":"/commands/dom-append-xml-child-node","permalink":"/docs/commands/dom-append-xml-child-node","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-append-xml-child-node.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-append-xml-child-node","title":"DOM Append XML child node","slug":"/commands/dom-append-xml-child-node","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"XML DOM","permalink":"/docs/category/xml-dom"},"next":{"title":"DOM Append XML element","permalink":"/docs/commands/dom-append-xml-element"}}'),s=d("785893"),r=d("250065");let t={id:"dom-append-xml-child-node",title:"DOM Append XML child node",slug:"/commands/dom-append-xml-child-node",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"Example 6",id:"example-6",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM Append XML child node"})," ( ",(0,s.jsx)(n.em,{children:"elementRef"})," ; ",(0,s.jsx)(n.em,{children:"childType"})," ; ",(0,s.jsx)(n.em,{children:"childValue"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"XML element reference"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"childType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Type of child to append"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"childValue"}),(0,s.jsx)(n.td,{children:"Text, Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Text or variable (Text or BLOB) whose value must be inserted as child node"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Reference of child XML element"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The DOM Append XML child node command is used to append the ",(0,s.jsx)(n.em,{children:"childValue"})," value to the XML node designated by ",(0,s.jsx)(n.em,{children:"elementRef"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The type of node created is specified by the ",(0,s.jsx)(n.em,{children:"childType"}),' parameter. In this parameter you can pass one of the following constants, located in the "',(0,s.jsx)(n.em,{children:"XML"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML CDATA"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML comment"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML DATA"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML DOCTYPE"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML ELEMENT"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"11"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"XML processing instruction"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"childValue"}),", pass the data to be inserted. You can pass a string or a 4D variable (string or BLOB). The contents of this parameter will always be converted into text."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If the ",(0,s.jsx)(n.em,{children:"elementRef"}),' parameter designates the Document node (top level node), the command inserts a "Doctype" node before any other node. The same goes for processing instructions and comments, which are always inserted before the root node (but after the Doctype node).']}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"Adding a text type node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Reference:=DOM Create XML element(elementRef;"myElement")\n\xa0DOM SET XML ELEMENT VALUE(Reference;"Hello")\n\xa0temp:=DOM Create XML element(Reference;"br")\n\xa0temp:=DOM Append XML child node(Reference;XML DATA;"New")\n\xa0temp:=DOM Create XML element(Reference;"br")\n\xa0temp:=DOM Append XML child node(Reference;XML DATA;"York")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<myElement>Hello<br/>New<br/>York</myElement>\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"Adding a processing instruction type node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$Txt_instruction:="xml-stylesheet type = \\"text/xsl\\" href=\\"style.xsl\\""\n\xa0Reference:=DOM Append XML child node(elementRef;XML Processing Instruction;$Txt_instruction)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Result (inserted before first element):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<?xml-stylesheet type="text/xsl" href="style.xsl"?>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"Adding a comment type node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Reference:=DOM Append XML child node(elementRef;XML Comment;"Hello world")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"\x3c!--Hello world--\x3e\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:"Adding a CDATA type node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Reference:=DOM Append XML child node(elementRef;XML CDATA;"12 < 18")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<element><![CDATA[12 < 18]]></element>\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-5",children:"Example 5"}),"\n",(0,s.jsx)(n.p,{children:"Adding or replacing a Doctype declaration type node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Reference:=DOM Append XML child node(elementRef;XML DOCTYPE;"Books SYSTEM \\"Book.DTD\\"")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Result (inserted before first element):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<!DOCTYPE Books SYSTEM  "Book.DTD">\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-6",children:"Example 6"}),"\n",(0,s.jsx)(n.p,{children:"Adding or replacing an Element type node."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["if the ",(0,s.jsx)(n.em,{children:"childValue"})," parameter is an XML fragment, it is inserted as child nodes:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Reference:=DOM Append XML child node(elementRef;XML ELEMENT;"simoneva")  \n'})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<parent>  \n\xa0\xa0\xa0 <child>simon</child>  \n\xa0\xa0\xa0 <child>eva</child>  \n</parent>  \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"otherwise, a new blank child element is appended:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Reference:=DOM Append XML child node(elementRef;XML ELEMENT;"tbreak")  \n'})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:"<parent>  \n \xa0\xa0 \xa0<tbreak/>  \n </parent>  \n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the contents of ",(0,s.jsx)(n.em,{children:"childValue"})," are not valid, an error is returned."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/dom-get-xml-child-nodes",children:"DOM GET XML CHILD NODES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/dom-get-xml-document-ref",children:"DOM Get XML document ref"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1080"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return i},a:function(){return t}});var l=d(667294);let s={},r=l.createContext(s);function t(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);