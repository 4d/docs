"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98852"],{720314:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>s,metadata:()=>d,assets:()=>l,toc:()=>i,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/dom-get-xml-document-ref","title":"DOM Get XML document ref","description":"DOM Get XML document ref ( elementRef ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/dom-get-xml-document-ref.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-document-ref","permalink":"/docs/commands/dom-get-xml-document-ref","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-document-ref.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-document-ref","title":"DOM Get XML document ref","slug":"/commands/dom-get-xml-document-ref","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML CHILD NODES","permalink":"/docs/commands/dom-get-xml-child-nodes"},"next":{"title":"DOM Get XML element","permalink":"/docs/commands/dom-get-xml-element"}}'),r=t("785893"),o=t("250065");let s={id:"dom-get-xml-document-ref",title:"DOM Get XML document ref",slug:"/commands/dom-get-xml-document-ref",displayed_sidebar:"docs"},c=void 0,l={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM Get XML document ref"})," ( ",(0,r.jsx)(n.em,{children:"elementRef"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"elementRef"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Reference of existing element in DOM tree"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Reference of first element of a DOM tree (document node)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"DOM Get XML document ref"}),' command is used to recover the reference of the "document" element of the DOM tree whose reference you have passed in ',(0,r.jsx)(n.em,{children:"elementRef"}),". The document element is the first element of a DOM tree; it is the parent of the root element."]}),"\n",(0,r.jsxs)(n.p,{children:['The reference of the document element lets you handle the "Doctype" and "Processing Instruction" nodes. It can only be used with the ',(0,r.jsx)(n.a,{href:"/docs/commands/dom-append-xml-child-node",children:"DOM Append XML child node"})," and ",(0,r.jsx)(n.a,{href:"/docs/commands/dom-get-xml-child-nodes",children:"DOM GET XML CHILD NODES"})," commands."]}),"\n",(0,r.jsx)(n.p,{children:"At this level, you can only append processing instructions and comments or replace the Doctype node. You cannot create CDATA or Text nodes there."}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"In this example, we want to find the DTD declaration of the XML document:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $rootRef : Text\n\xa0$rootRef:=DOM Parse XML source("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0var $documentRef : Text\n\xa0\xa0// we are looking for the document node, since it is the node to which\n\xa0\xa0// the DOCTYPE node is attached before the root node\n\xa0\xa0\xa0\xa0$documentRef:=DOM Get XML document ref($rootRef)\n\xa0\xa0\xa0\xa0ARRAY TEXT($typeArr;0)\n\xa0\xa0\xa0\xa0ARRAY TEXT($valueArr;0)\n\xa0\xa0// on this node we look for the DOCTYPE type node among the\n\xa0\xa0// child nodes\n\xa0\xa0\xa0\xa0DOM GET XML CHILD NODES($refDocument;$typeArr;$valueArr)\n\xa0\xa0\xa0\xa0var $text : Text\n\xa0\xa0\xa0\xa0$text:=""\n\xa0\xa0\xa0\xa0$pos:=Find in array($typeArr;XML DOCTYPE)\n\xa0\xa0\xa0\xa0If($pos>-1)\n\xa0\xa0// We retrieve the DTD declaration in $text\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$text:=$text+"Doctype: "+$valueArr{$pos}+Char(Carriage return)\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0DOM CLOSE XML($rootRef)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/dom-append-xml-child-node",children:"DOM Append XML child node"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/dom-get-xml-child-nodes",children:"DOM GET XML CHILD NODES"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1088"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var d=t(667294);let r={},o=d.createContext(r);function s(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);