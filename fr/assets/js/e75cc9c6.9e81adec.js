"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55383"],{593765:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>c,default:()=>m,assets:()=>l,toc:()=>a,frontMatter:()=>i});var d=JSON.parse('{"id":"commands-legacy/sax-add-xml-doctype","title":"SAX ADD XML DOCTYPE","description":"SAX ADD XML DOCTYPE ( document ; docType )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-add-xml-doctype.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-xml-doctype","permalink":"/docs/fr/commands/sax-add-xml-doctype","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-doctype.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-add-xml-doctype","title":"SAX ADD XML DOCTYPE","slug":"/commands/sax-add-xml-doctype","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD XML COMMENT","permalink":"/docs/fr/commands/sax-add-xml-comment"},"next":{"title":"SAX ADD XML ELEMENT VALUE","permalink":"/docs/fr/commands/sax-add-xml-element-value"}}'),r=s("785893"),t=s("250065");let i={id:"sax-add-xml-doctype",title:"SAX ADD XML DOCTYPE",slug:"/commands/sax-add-xml-doctype",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SAX ADD XML DOCTYPE"})," ( ",(0,r.jsx)(n.em,{children:"document"})," ; ",(0,r.jsx)(n.em,{children:"docType"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"document"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence du document ouvert"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"docType"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"DocType \xe0 ajouter"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SAX ADD XML DOCTYPE"})," ajoute l'instruction DocType d\xe9finie par le param\xe8tre ",(0,r.jsx)(n.em,{children:"docType"})," dans le document XML r\xe9f\xe9renc\xe9 par ",(0,r.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Une instruction DocType permet d\u2019indiquer le type de XML dans lequel le document a \xe9t\xe9 \xe9crit et de d\xe9signer la D\xe9claration de type de document (DTD) utilis\xe9e. Une instruction DocType est g\xe9n\xe9ralement de la forme ."}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"L\u2019instruction suivante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vDocType:="Livres SYSTEM \\"Livre.DTD\\""\n\xa0SAX ADD XML DOCTYPE($RefDoc;vDocType)\n'})}),"\n",(0,r.jsx)(n.p,{children:"... inscrira cette ligne dans le document :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\n"})}),"\n",(0,r.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0."}),"\n",(0,r.jsx)(n.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,r.jsx)(n.p,{children:"En cas d\u2019erreur, la commande retourne une erreur qui peut \xeatre intercept\xe9e via une m\xe9thode d\u2019appel sur erreur."}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/sax-add-xml-comment",children:"SAX ADD XML COMMENT"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"851"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var d=s(667294);let r={},t=d.createContext(r);function i(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);