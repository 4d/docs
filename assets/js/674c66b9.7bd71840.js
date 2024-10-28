"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23754],{852106:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(474848),c=s(28453);const r={id:"sax-get-xml-processing-instruction",title:"SAX GET XML PROCESSING INSTRUCTION",slug:"/commands/sax-get-xml-processing-instruction",displayed_sidebar:"docs"},i=void 0,o={id:"commands-legacy/sax-get-xml-processing-instruction",title:"SAX GET XML PROCESSING INSTRUCTION",description:"SAX GET XML PROCESSING INSTRUCTION ( document ; name ; value )",source:"@site/versioned_docs/version-20-R7/commands-legacy/sax-get-xml-processing-instruction.md",sourceDirName:"commands-legacy",slug:"/commands/sax-get-xml-processing-instruction",permalink:"/docs/commands/sax-get-xml-processing-instruction",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-processing-instruction.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sax-get-xml-processing-instruction",title:"SAX GET XML PROCESSING INSTRUCTION",slug:"/commands/sax-get-xml-processing-instruction",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SAX Get XML node",permalink:"/docs/commands/sax-get-xml-node"},next:{title:"SAX OPEN XML ELEMENT",permalink:"/docs/commands/sax-open-xml-element"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SAX GET XML PROCESSING INSTRUCTION"})," ( ",(0,t.jsx)(n.em,{children:"document"})," ; ",(0,t.jsx)(n.em,{children:"name"})," ; ",(0,t.jsx)(n.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"document"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Reference of open document"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Instruction name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Instruction value"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"SAX GET XML PROCESSING INSTRUCTION"})," command returns the ",(0,t.jsx)(n.em,{children:"name"})," and ",(0,t.jsx)(n.em,{children:"value"})," of the XML instruction processed in the XML document referenced in the ",(0,t.jsx)(n.em,{children:"document"})," parameter. This command must be called with the XML Processing Instruction event. For more information about SAX events, refer to the description of the ",(0,t.jsx)(n.a,{href:"/docs/commands/sax-get-xml-node",children:"SAX Get XML node"})," command."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Let's look at the following piece of XML code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n\x3c!-- Edited with XML Spy v3.0.7 NT (http://www.xmlspy.com) by Myself (4D SA)--\x3e\n<?PI TextProcess?>\n<!DOCTYPE RootElement SYSTEM "ParseTest.dtd">\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The following instruction will return \u201cPI\u201d in ",(0,t.jsx)(n.em,{children:"vName"})," and \u201cTextProcess\u201d in ",(0,t.jsx)(n.em,{children:"vValue"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SAX GET XML PROCESSING INSTRUCTION($DocRef;vName;vValue)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/sax-add-processing-instruction",children:"SAX ADD PROCESSING INSTRUCTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/sax-get-xml-node",children:"SAX Get XML node"})]})]})}function m(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(296540);const c={},r=t.createContext(c);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);