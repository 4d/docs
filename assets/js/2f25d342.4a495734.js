"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6543"],{589480:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>x,assets:()=>i,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/dom-get-xml-child-nodes","title":"DOM GET XML CHILD NODES","description":"DOM GET XML CHILD NODES ( elementRef ; childTypesArr ; nodeRefsArr )","source":"@site/versioned_docs/version-20-R7/commands-legacy/dom-get-xml-child-nodes.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-child-nodes","permalink":"/docs/commands/dom-get-xml-child-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-child-nodes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-child-nodes","title":"DOM GET XML CHILD NODES","slug":"/commands/dom-get-xml-child-nodes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ATTRIBUTE BY NAME","permalink":"/docs/commands/dom-get-xml-attribute-by-name"},"next":{"title":"DOM Get XML document ref","permalink":"/docs/commands/dom-get-xml-document-ref"}}'),d=r("785893"),s=r("250065");let l={id:"dom-get-xml-child-nodes",title:"DOM GET XML CHILD NODES",slug:"/commands/dom-get-xml-child-nodes",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DOM GET XML CHILD NODES"})," ( ",(0,d.jsx)(n.em,{children:"elementRef"})," ; ",(0,d.jsx)(n.em,{children:"childTypesArr"})," ; ",(0,d.jsx)(n.em,{children:"nodeRefsArr"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"elementRef"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"XML element reference"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"childTypesArr"}),(0,d.jsx)(n.td,{children:"Array integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Types of child nodes"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nodeRefsArr"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"References or Values of child nodes"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"DOM GET XML CHILD NODES"})," command returns the types and references or values of all the child nodes of the XML element designated by ",(0,d.jsx)(n.em,{children:"elementRef"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The types of child nodes are returned in the ",(0,d.jsx)(n.em,{children:"childTypesArr"}),' array. You can compare the values returned by the command with the following constants, found in the "',(0,d.jsx)(n.em,{children:"XML"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML comment"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML processing instruction"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML DATA"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"6"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML CDATA"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML DOCTYPE"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"10"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XML ELEMENT"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["For more information, please refer to the description of the ",(0,d.jsx)(n.a,{href:"/docs/commands/dom-append-xml-child-node",children:"DOM Append XML child node"})," command."]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.em,{children:"nodeRefsArr"})," array receives the values or references of the elements according to their nature (contents or instructions)."]}),"\n",(0,d.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.p,{children:"Given the following XML structure:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-XML",children:"<myElement>Hello<br/>New<br/>York</myElement>\n"})}),"\n",(0,d.jsx)(n.p,{children:"After executing these instructions:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0elementRef:=DOM Find XML element($root;"myElement")\n\xa0DOM GET XML CHILD NODES(elementRef;$typeArr;$textArr)\n'})}),"\n",(0,d.jsx)(n.p,{children:"... the $typeArr and $textArr arrays will contain the following values:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"$typeArr{1}=6"}),(0,d.jsx)(n.th,{children:'$textArr{1} = "Hello"'})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"$typeArr{2}=11"}),(0,d.jsxs)(n.td,{children:['$textArr{2} = "AEF1233456878977" (element reference ',(0,d.jsx)(n.br,{}),")"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"$typeArr{3}=6"}),(0,d.jsx)(n.td,{children:'$textArr{3} = "New"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"$typeArr{4}=11"}),(0,d.jsxs)(n.td,{children:['$textArr{4} = "AEF1237897734568" (element reference ',(0,d.jsx)(n.br,{}),")"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"$typeArr{5}=6"}),(0,d.jsx)(n.td,{children:'$textArr{5} = "York"'})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/dom-append-xml-child-node",children:"DOM Append XML child node"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/dom-get-xml-document-ref",children:"DOM Get XML document ref"})]})]})}function x(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return l}});var t=r(667294);let d={},s=t.createContext(d);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);