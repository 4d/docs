"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84698"],{138181:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/sax-get-xml-processing-instruction","title":"SAX GET XML PROCESSING INSTRUCTION","description":"SAX GET XML PROCESSING INSTRUCTION ( document ; nom ; valeur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sax-get-xml-processing-instruction.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-processing-instruction","permalink":"/docs/fr/20-R8/commands/sax-get-xml-processing-instruction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-processing-instruction.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sax-get-xml-processing-instruction","title":"SAX GET XML PROCESSING INSTRUCTION","slug":"/commands/sax-get-xml-processing-instruction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX Get XML node","permalink":"/docs/fr/20-R8/commands/sax-get-xml-node"},"next":{"title":"SAX OPEN XML ELEMENT","permalink":"/docs/fr/20-R8/commands/sax-open-xml-element"}}'),r=s("785893"),d=s("250065");let i={id:"sax-get-xml-processing-instruction",title:"SAX GET XML PROCESSING INSTRUCTION",slug:"/commands/sax-get-xml-processing-instruction",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SAX GET XML PROCESSING INSTRUCTION"})," ( ",(0,r.jsx)(n.em,{children:"document"})," ; ",(0,r.jsx)(n.em,{children:"nom"})," ; ",(0,r.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"document"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence du document ouvert"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nom"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nom de l\u2019instruction"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeur"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeur de l\u2019instruction"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SAX GET XML PROCESSING INSTRUCTION"})," retourne le ",(0,r.jsx)(n.em,{children:"nom"})," et la ",(0,r.jsx)(n.em,{children:"valeur"})," de l\u2019instruction de traitement XML analys\xe9e dans le document XML r\xe9f\xe9renc\xe9 par ",(0,r.jsx)(n.em,{children:"document"}),". Cette commande doit \xeatre appel\xe9e dans le contexte d\u2019un \xe9v\xe9nement XML processing instruction. Pour plus d'informations sur les \xe9v\xe9nements SAX, reportez-vous \xe0 la description de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/sax-get-xml-node",children:"SAX Get XML node"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Consid\xe9rons l\u2019extrait de code XML suivant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?> \n\x3c!-- Edited with XML Spy v3.0.7 NT (http://www.xmlspy.com) by Myself (4D SA)--\x3e \n<?PI TextProcess?> \n<!DOCTYPE RootElement SYSTEM "ParseTest.dtd">\n'})}),"\n",(0,r.jsxs)(n.p,{children:["L\u2019instruction suivante retournera \u201CPI\u201D dans ",(0,r.jsx)(n.em,{children:"vNom"})," et \u201CTextProcess\u201D dans ",(0,r.jsx)(n.em,{children:"vValeur"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SAX GET XML PROCESSING INSTRUCTION($RefDoc;vNom;vValeur)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/sax-add-processing-instruction",children:"SAX ADD PROCESSING INSTRUCTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/sax-get-xml-node",children:"SAX Get XML node"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"875"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);