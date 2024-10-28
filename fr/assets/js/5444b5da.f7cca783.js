"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86037],{51815:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var t=s(474848),d=s(28453);const r={id:"sax-set-xml-declaration",title:"SAX SET XML DECLARATION",slug:"/commands/sax-set-xml-declaration",displayed_sidebar:"docs"},a=void 0,c={id:"commands-legacy/sax-set-xml-declaration",title:"SAX SET XML DECLARATION",description:"SAX SET XML DECLARATION ( document ; encodage {; autonome} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-set-xml-declaration.md",sourceDirName:"commands-legacy",slug:"/commands/sax-set-xml-declaration",permalink:"/docs/fr/commands/sax-set-xml-declaration",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-set-xml-declaration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sax-set-xml-declaration",title:"SAX SET XML DECLARATION",slug:"/commands/sax-set-xml-declaration",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SAX OPEN XML ELEMENT ARRAYS",permalink:"/docs/fr/commands/sax-open-xml-element-arrays"},next:{title:"XML DECODE",permalink:"/docs/fr/commands/xml-decode"}},o={},i=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SAX SET XML DECLARATION"})," ( ",(0,t.jsx)(n.em,{children:"document"})," ; ",(0,t.jsx)(n.em,{children:"encodage"})," {; ",(0,t.jsx)(n.em,{children:"autonome"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"document"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"R\xe9f\xe9rence du document ouvert"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encodage"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Jeu de caract\xe8res du document XML"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"autonome"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Vrai=le document est autonome, Faux (d\xe9faut)=le document n\u2019est pas autonome"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SAX SET XML DECLARATION"})," initialise le document XML r\xe9f\xe9renc\xe9 par ",(0,t.jsx)(n.em,{children:"document"})," \xe0 l\u2019aide de l'encodage d\xe9fini. Vous pouvez \xe9galement d\xe9terminer l\u2019attribut autonome (standalone) de mani\xe8re facultative."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"encodage"})," : indique le jeu de caract\xe8res employ\xe9 dans le document. Par d\xe9faut (si la commande n\u2019est pas appel\xe9e), le jeu de caract\xe8res UTF-8 (Unicode compress\xe9) est utilis\xe9.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Note :"})," Si vous passez un jeu de caract\xe8res non pris en charge par les commandes XML de 4D, l'UTF-8 sera utilis\xe9. Reportez-vous au paragraphe ",(0,t.jsx)(n.em,{children:"Jeux de caract\xe8res"})," pour conna\xeetre la liste des jeux de caract\xe8res pris en charge (l'UTF-8 est toutefois recommand\xe9 dans la plupart des cas)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"autonome"})," : indique si le document est autonome (Vrai) ou s\u2019il d\xe9pend, pour son fonctionnement, d\u2019autres fichiers ou de ressources externes (Faux). Par d\xe9faut (si la commande n\u2019est pas appel\xe9e ou si le param\xe8tre est omis), le document n\u2019est pas autonome."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Vous pouvez d\xe9finir l\u2019indentation du document \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/xml-set-options",children:"XML SET OPTIONS"})," avant de commencer votre saisie."]}),"\n",(0,t.jsx)(n.p,{children:"Cette commande doit \xeatre appel\xe9e une seule fois par document et avant la premi\xe8re commande d\u2019\xe9criture XML dans le document, sinon une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Le code suivant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SAX SET XML DECLARATION($RefDoc;"UTF-16";True)\n'})}),"\n",(0,t.jsx)(n.p,{children:"... inscrira cette ligne dans le document :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-16" standalone="yes"?>\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/sax-get-xml-document-values",children:"SAX GET XML DOCUMENT VALUES"})})]})}function m(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(296540);const d={},r=t.createContext(d);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);