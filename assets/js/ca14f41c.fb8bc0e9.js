"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64630],{136568:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=t(474848),d=t(28453);const r={id:"sax-get-xml-node",title:"SAX Get XML node",slug:"/commands/sax-get-xml-node",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/sax-get-xml-node",title:"SAX Get XML node",description:"SAX Get XML node ( document ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/sax-get-xml-node.md",sourceDirName:"commands-legacy",slug:"/commands/sax-get-xml-node",permalink:"/docs/commands/sax-get-xml-node",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-node.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sax-get-xml-node",title:"SAX Get XML node",slug:"/commands/sax-get-xml-node",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SAX GET XML ENTITY",permalink:"/docs/commands/sax-get-xml-entity"},next:{title:"SAX GET XML PROCESSING INSTRUCTION",permalink:"/docs/commands/sax-get-xml-processing-instruction"}},l={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4}];function a(n){const e={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"SAX Get XML node"})," ( ",(0,s.jsx)(e.em,{children:"document"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"document"}),(0,s.jsx)(e.td,{children:"Time"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"Reference of open document"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Function result"}),(0,s.jsx)(e.td,{children:"Longint"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"Event returned by function"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"SAX Get XML node"})," command returns a long integer that indicates the type of SAX event returned while the XML document referenced in ",(0,s.jsx)(e.em,{children:"document"})," is parsed."]}),"\n",(0,s.jsxs)(e.p,{children:["Events that can be returned are available as \u201c",(0,s.jsx)(e.em,{children:"XML"}),"\u201d theme constants:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Constant"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Value"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"XML CDATA"}),(0,s.jsx)(e.td,{children:"Longint"}),(0,s.jsx)(e.td,{children:"7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"XML Comment"}),(0,s.jsx)(e.td,{children:"Longint"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"XML DATA"}),(0,s.jsx)(e.td,{children:"Longint"}),(0,s.jsx)(e.td,{children:"6"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"XML End Document"}),(0,s.jsx)(e.td,{children:"Longint"}),(0,s.jsx)(e.td,{children:"9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"XML End Element"}),(0,s.jsx)(e.td,{children:"Longint"}),(0,s.jsx)(e.td,{children:"5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"XML Entity"}),(0,s.jsx)(e.td,{children:"Longint"}),(0,s.jsx)(e.td,{children:"8"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"XML Processing Instruction"}),(0,s.jsx)(e.td,{children:"Longint"}),(0,s.jsx)(e.td,{children:"3"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"XML Start Document"}),(0,s.jsx)(e.td,{children:"Longint"}),(0,s.jsx)(e.td,{children:"1"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"XML Start Element"}),(0,s.jsx)(e.td,{children:"Longint"}),(0,s.jsx)(e.td,{children:"4"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.p,{children:"The following example processes an event:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0DocRef:=Open document("";"xml";Read Mode)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MyEvent:=SAX Get XML node(DocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(MyEvent=XML Start Document)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DoSomething\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(MyEvent=XML Comment)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DoSomethingElse\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0Until(MyEvent=XML End Document)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(DocRef)\n\xa0End if\n'})}),"\n",(0,s.jsx)(e.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(e.p,{children:"If the command has been executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0 and an error is generated."})]})}function h(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var s=t(296540);const d={},r=s.createContext(d);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);