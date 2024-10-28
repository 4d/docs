"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95261],{926569:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=s(474848),o=s(28453);const r={id:"sax-get-xml-processing-instruction",title:"SAX GET XML PROCESSING INSTRUCTION",slug:"/commands/sax-get-xml-processing-instruction",displayed_sidebar:"docs"},c=void 0,d={id:"commands-legacy/sax-get-xml-processing-instruction",title:"SAX GET XML PROCESSING INSTRUCTION",description:"SAX GET XML PROCESSING INSTRUCTION ( documento ; nome ; valor )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-get-xml-processing-instruction.md",sourceDirName:"commands-legacy",slug:"/commands/sax-get-xml-processing-instruction",permalink:"/docs/pt/commands/sax-get-xml-processing-instruction",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-processing-instruction.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sax-get-xml-processing-instruction",title:"SAX GET XML PROCESSING INSTRUCTION",slug:"/commands/sax-get-xml-processing-instruction",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SAX Get XML node",permalink:"/docs/pt/commands/sax-get-xml-node"},next:{title:"SAX OPEN XML ELEMENT",permalink:"/docs/pt/commands/sax-open-xml-element"}},i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SAX GET XML PROCESSING INSTRUCTION"})," ( ",(0,t.jsx)(n.em,{children:"documento"})," ; ",(0,t.jsx)(n.em,{children:"nome"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"documento"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Refer\xeancia do documento aberto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nome"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Instruction name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Instruction value"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando SAX GET XML PROCESSING INSTRUCTION devolve o ",(0,t.jsx)(n.em,{children:"nome"})," e o ",(0,t.jsx)(n.em,{children:"valor"})," da instru\xe7\xe3o de processo XML analizada no documento XML referenciada por documento. Este comando deve ser chamado com o evento XML Processing Instruction. Para maior informa\xe7\xe3o sobre eventos SAX, consulte a descri\xe7\xe3o do comando ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/sax-get-xml-node",children:"SAX Get XML node"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"No c\xf3digo XML abaixo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:'<?xml versao="1.0" encoding="UTF-8"?>\n\x3c!-- Edited with XML Spy v3.0.7 NT (http://www.xmlspy.com) by Myself (4D SA)--\x3e\n<?PI TextProcess?>\n<!DOCTYPE RootElement SYSTEM "ParseTest.dtd">\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A instru\xe7\xe3o abaixo devolver\xe1 \u201cPI\u201d em ",(0,t.jsx)(n.em,{children:"vNom"})," e \u201cTextProcess\u201d em ",(0,t.jsx)(n.em,{children:"vValor"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SAX GET XML PROCESSING INSTRUCTION($DocRef;vNom;vValor)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/sax-add-processing-instruction",children:"SAX ADD PROCESSING INSTRUCTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/sax-get-xml-node",children:"SAX Get XML node"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var t=s(296540);const o={},r=t.createContext(o);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);