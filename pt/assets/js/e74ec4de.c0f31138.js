"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59071"],{483568:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/sax-get-xml-processing-instruction","title":"SAX GET XML PROCESSING INSTRUCTION","description":"SAX GET XML PROCESSING INSTRUCTION ( documento ; nome ; valor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sax-get-xml-processing-instruction.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-processing-instruction","permalink":"/docs/pt/commands/sax-get-xml-processing-instruction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-processing-instruction.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sax-get-xml-processing-instruction","title":"SAX GET XML PROCESSING INSTRUCTION","slug":"/commands/sax-get-xml-processing-instruction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX Get XML node","permalink":"/docs/pt/commands/sax-get-xml-node"},"next":{"title":"SAX OPEN XML ELEMENT","permalink":"/docs/pt/commands/sax-open-xml-element"}}'),o=s("785893"),r=s("250065");let d={id:"sax-get-xml-processing-instruction",title:"SAX GET XML PROCESSING INSTRUCTION",slug:"/commands/sax-get-xml-processing-instruction",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SAX GET XML PROCESSING INSTRUCTION"})," ( ",(0,o.jsx)(n.em,{children:"documento"})," ; ",(0,o.jsx)(n.em,{children:"nome"})," ; ",(0,o.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"documento"}),(0,o.jsx)(n.td,{children:"Time"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Refer\xeancia do documento aberto"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nome"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Instruction name"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"valor"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Instruction value"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando SAX GET XML PROCESSING INSTRUCTION devolve o ",(0,o.jsx)(n.em,{children:"nome"})," e o ",(0,o.jsx)(n.em,{children:"valor"})," da instru\xe7\xe3o de processo XML analizada no documento XML referenciada por documento. Este comando deve ser chamado com o evento XML Processing Instruction. Para maior informa\xe7\xe3o sobre eventos SAX, consulte a descri\xe7\xe3o do comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/sax-get-xml-node",children:"SAX Get XML node"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"No c\xf3digo XML abaixo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-XML",children:'<?xml versao="1.0" encoding="UTF-8"?>\n\x3c!-- Edited with XML Spy v3.0.7 NT (http://www.xmlspy.com) by Myself (4D SA)--\x3e\n<?PI TextProcess?>\n<!DOCTYPE RootElement SYSTEM "ParseTest.dtd">\n'})}),"\n",(0,o.jsxs)(n.p,{children:["A instru\xe7\xe3o abaixo devolver\xe1 \u201CPI\u201D em ",(0,o.jsx)(n.em,{children:"vNom"})," e \u201CTextProcess\u201D em ",(0,o.jsx)(n.em,{children:"vValor"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0SAX GET XML PROCESSING INSTRUCTION($DocRef;vNom;vValor)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/sax-add-processing-instruction",children:"SAX ADD PROCESSING INSTRUCTION"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/sax-get-xml-node",children:"SAX Get XML node"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"875"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let o={},r=t.createContext(o);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);