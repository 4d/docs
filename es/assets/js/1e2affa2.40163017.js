"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3695"],{811172:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/sax-get-xml-processing-instruction","title":"SAX GET XML PROCESSING INSTRUCTION","description":"SAX GET XML PROCESSING INSTRUCTION ( documento ; nombre ; valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sax-get-xml-processing-instruction.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-processing-instruction","permalink":"/docs/es/20-R8/commands/sax-get-xml-processing-instruction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-processing-instruction.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sax-get-xml-processing-instruction","title":"SAX GET XML PROCESSING INSTRUCTION","slug":"/commands/sax-get-xml-processing-instruction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX Get XML node","permalink":"/docs/es/20-R8/commands/sax-get-xml-node"},"next":{"title":"SAX OPEN XML ELEMENT","permalink":"/docs/es/20-R8/commands/sax-open-xml-element"}}'),r=s("785893"),d=s("250065");let i={id:"sax-get-xml-processing-instruction",title:"SAX GET XML PROCESSING INSTRUCTION",slug:"/commands/sax-get-xml-processing-instruction",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SAX GET XML PROCESSING INSTRUCTION"})," ( ",(0,r.jsx)(n.em,{children:"documento"})," ; ",(0,r.jsx)(n.em,{children:"nombre"})," ; ",(0,r.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"documento"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Referencia del documento abierto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nombre"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nombre de la instrucci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valor"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor de la instrucci\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando SAX GET XML PROCESSING INSTRUCTION devuelve el ",(0,r.jsx)(n.em,{children:"nombre"})," y el ",(0,r.jsx)(n.em,{children:"valor"})," de la instrucci\xf3n de proceso XML analizada en el documento XML referenciada por ",(0,r.jsx)(n.em,{children:"documento"}),". Este comando debe llamarse con el evento XML Processing Instruction. Para mayor informaci\xf3n sobre eventos SAX, consulte la descripci\xf3n del comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/sax-get-xml-node",title:"SAX Get XML node",children:"SAX Get XML node"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Miremos el siguiente c\xf3digo XML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n\x3c!-- Edited with XML Spy v3.0.7 NT (http://www.xmlspy.com) by Myself (4D SA)--\x3e\n<?PI TextProcess?>\n<!DOCTYPE RootElement SYSTEM "ParseTest.dtd">\n'})}),"\n",(0,r.jsxs)(n.p,{children:["La siguiente instrucci\xf3n devolver\xe1 \u201CPI\u201D en ",(0,r.jsx)(n.em,{children:"vNom"})," y \u201CTextProcess\u201D en ",(0,r.jsx)(n.em,{children:"vValor"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SAX GET XML PROCESSING INSTRUCTION($DocRef;vNom;vValor)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/sax-add-processing-instruction",children:"SAX ADD PROCESSING INSTRUCTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/sax-get-xml-node",children:"SAX Get XML node"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"875"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);