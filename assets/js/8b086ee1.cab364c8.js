"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33774"],{356994:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/dom-insert-xml-element","title":"DOM Insert XML element","description":"DOM Insert XML element ( targetElementRef ; sourceElementRef ; childIndex ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/dom-insert-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-insert-xml-element","permalink":"/docs/commands/dom-insert-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-insert-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-insert-xml-element","title":"DOM Insert XML element","slug":"/commands/dom-insert-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get XML information","permalink":"/docs/commands/dom-get-xml-information"},"next":{"title":"DOM Parse XML source","permalink":"/docs/commands/dom-parse-xml-source"}}'),s=t("785893"),l=t("250065");let d={id:"dom-insert-xml-element",title:"DOM Insert XML element",slug:"/commands/dom-insert-xml-element",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function m(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM Insert XML element"})," ( ",(0,s.jsx)(n.em,{children:"targetElementRef"})," ; ",(0,s.jsx)(n.em,{children:"sourceElementRef"})," ; ",(0,s.jsx)(n.em,{children:"childIndex"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetElementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Parent XML element reference"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sourceElementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"XML element reference to insert"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"childIndex"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Index of child of target element above which the new element must be inserted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Reference of new XML element"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The DOM Insert XML element command can be used to insert a new XML element among the child elements of the XML element whose reference is passed in the ",(0,s.jsx)(n.em,{children:"targetElementRef"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the element to be inserted in ",(0,s.jsx)(n.em,{children:"sourceElementRef"}),". This element must be passed as the reference of an existing XML element in a DOM tree."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"childIndex"})," parameter can be used to designate the child of the parent element before which the new element must be inserted. Pass an index number in this parameter. If the value is not valid (for example, there is no child element having this index), the new element will be added before the first child of the parent element."]}),"\n",(0,s.jsx)(n.p,{children:"The command returns the reference of the XML element obtained."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"In the following structure, we would like to invert the first and second book:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n<BookCatalog>\n\xa0 <Book>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Title>Open Source Web Services</Title>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Author>Collective</Author>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Date>2003</Date>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <ISBN>2-7440-1507-5</ISBN>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Publisher>Wrox</Publisher>\n\xa0\xa0\xa0 </Book>\n<Book>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Title>Building XML Web services</Title>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Author>Scott Short</Author>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Date>2002</Date>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <ISBN>2-10-006476-2</ISBN>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 <Publisher>Microsoft Press</Publisher>\n\xa0\xa0\xa0 </Book>\n</BookCatalog> \n'})}),"\n",(0,s.jsx)(n.p,{children:"To do this, simply execute the following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $rootRef : Text\n\xa0$rootRef:=DOM Parse XML source("")\xa0//selection of XML document\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0var $newStruct : Text\n\xa0\xa0\xa0\xa0$newStruct:=DOM Create XML Ref("BookCatalog")\n\xa0\n\xa0\xa0\xa0\xa0$bookRef:=DOM Find XML element($rootRef;"/BookCatalog/Book[1]")\n\xa0\xa0\xa0\xa0$newElementRef:=DOM Append XML element($newStruct;$bookRef)\n\xa0\n\xa0\xa0\xa0\xa0$bookRef:=DOM Find XML element($rootRef;"/BookCatalog/Book[2]")\n\xa0\xa0\xa0\xa0var $newElementRef : Text\n\xa0\xa0\xa0\xa0$newElementRef:=DOM Insert XML element($newStruct;$bookRef;1)\n\xa0\n\xa0\xa0\xa0\xa0DOM CLOSE XML($newStruct)\n\xa0\xa0\xa0\xa0DOM CLOSE XML($rootRef)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/dom-append-xml-element",children:"DOM Append XML element"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1083"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let s={},l=r.createContext(s);function d(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);