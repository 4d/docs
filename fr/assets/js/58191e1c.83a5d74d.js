"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76270"],{454456:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>i,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/sax-add-xml-element-value","title":"SAX ADD XML ELEMENT VALUE","description":"SAX ADD XML ELEMENT VALUE ( document ; donn\xe9es {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-add-xml-element-value.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-xml-element-value","permalink":"/docs/fr/20-R7/commands/sax-add-xml-element-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-element-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-add-xml-element-value","title":"SAX ADD XML ELEMENT VALUE","slug":"/commands/sax-add-xml-element-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD XML DOCTYPE","permalink":"/docs/fr/20-R7/commands/sax-add-xml-doctype"},"next":{"title":"SAX CLOSE XML ELEMENT","permalink":"/docs/fr/20-R7/commands/sax-close-xml-element"}}'),d=s("785893"),t=s("250065");let a={id:"sax-add-xml-element-value",title:"SAX ADD XML ELEMENT VALUE",slug:"/commands/sax-add-xml-element-value",displayed_sidebar:"docs"},l=void 0,c={},i=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SAX ADD XML ELEMENT VALUE"})," ( ",(0,d.jsx)(n.em,{children:"document"})," ; ",(0,d.jsx)(n.em,{children:"donn\xe9es"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"R\xe9f\xe9rence du document ouvert"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"donn\xe9es"}),(0,d.jsx)(n.td,{children:"Text, Variable"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Texte ou variable \xe0 ins\xe9rer dans le document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Op\xe9rateur"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si pass\xe9 = Encoder les caract\xe8res sp\xe9ciaux en mode 'XML Donn\xe9es brutes'"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"SAX ADD XML ELEMENT VALUE"})," ajoute directement dans le document XML r\xe9f\xe9renc\xe9 par ",(0,d.jsx)(n.em,{children:"document"})," des ",(0,d.jsx)(n.em,{children:"donn\xe9es"})," sans les convertir. Cette commande \xe9quivaut par exemple \xe0 ins\xe9rer une pi\xe8ce jointe dans le corps (body) d\u2019un email."]}),"\n",(0,d.jsxs)(n.p,{children:["Vous pouvez passer dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"donn\xe9es"})," soit directement une cha\xeene de caract\xe8res, soit une variable 4D. Le contenu de la variable sera converti en texte pour pouvoir \xeatre ins\xe9r\xe9 dans le document XML.",(0,d.jsx)(n.br,{}),"\nSi vous souhaitez encoder le contenu de ",(0,d.jsx)(n.em,{children:"donn\xe9es"}),", vous devez utiliser la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/base64-encode",children:"BASE64 ENCODE"}),". Dans ce cas bien entendu, vous devez passer un BLOB dans ",(0,d.jsx)(n.em,{children:"donn\xe9es"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Par d\xe9faut, la commande encode les caract\xe8res sp\xe9ciaux (< > \u201D \u2019...) contenus dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"donn\xe9es"}),", sauf si vous avez d\xe9sactiv\xe9 ce m\xe9canisme pour le process courant \xe0 l'aide de la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/xml-set-options",children:"XML SET OPTIONS"})," en passant la valeur XML raw data \xe0 l'option XML string encoding. Par exemple :"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0XML SET OPTIONS($refDoc;XML string encoding;XML raw data)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Dans ce contexte, pour forcer l'encodage des caract\xe8res sp\xe9ciaux lors de l'appel de ",(0,d.jsx)(n.strong,{children:"SAX ADD XML ELEMENT VALUE"}),", il est n\xe9cessaire de passer le param\xe8tre facultatif ",(0,d.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Pour que cette commande fonctionne, un \xe9l\xe9ment doit \xeatre ouvert. Dans le cas contraire, une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,d.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsxs)(n.p,{children:["Cet exemple ins\xe8re le fichier ",(0,d.jsx)(n.em,{children:"whitepaper.pdf"})," dans l\u2019\xe9l\xe9ment XML ouvert :"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var vBMonBLOB : Blob\n\xa0DOCUMENT TO BLOB("c:\\\\whitepaper.pdf";vBMonBLOB)\n\xa0SAX ADD XML ELEMENT VALUE($RefDoc;vBMonBLOB)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,d.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,d.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/sax-get-xml-element-value",children:"SAX GET XML ELEMENT VALUE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"855"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifie les variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var r=s(667294);let d={},t=r.createContext(d);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);