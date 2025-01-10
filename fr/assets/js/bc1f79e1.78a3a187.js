"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29905"],{906606:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/sax-get-xml-node","title":"SAX Get XML node","description":"SAX Get XML node ( document ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-get-xml-node.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-node","permalink":"/docs/fr/commands/sax-get-xml-node","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-node.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-get-xml-node","title":"SAX Get XML node","slug":"/commands/sax-get-xml-node","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML ENTITY","permalink":"/docs/fr/commands/sax-get-xml-entity"},"next":{"title":"SAX GET XML PROCESSING INSTRUCTION","permalink":"/docs/fr/commands/sax-get-xml-processing-instruction"}}'),r=t("785893"),d=t("250065");let l={id:"sax-get-xml-node",title:"SAX Get XML node",slug:"/commands/sax-get-xml-node",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SAX Get XML node"})," ( ",(0,r.jsx)(n.em,{children:"document"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"document"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence du document ouvert"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Ev\xe9nement retourn\xe9 par la fonction"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SAX Get XML node"})," retourne un entier long indiquant le type d\u2019\xe9v\xe9nement SAX retourn\xe9 durant l\u2019analyse du document XML r\xe9f\xe9renc\xe9 par ",(0,r.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Les \xe9v\xe9nements pouvant \xeatre retourn\xe9s sont fournis sous forme de constantes dans le th\xe8me \u201C",(0,r.jsx)(n.em,{children:"XML"}),"\u201D :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML CDATA"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML comment"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML DATA"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML end document"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML end element"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML entity"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML processing instruction"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML start document"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML start element"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Exemple de traitement des \xe9v\xe9nements :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0RefDoc:=Open document("";"xml";Read Mode)\xa0//Ouverture en lecture seule obligatoire\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MonEv\xe9nement:=SAX Get XML node(RefDoc)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(MonEv\xe9nement=XML Start Document)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FaireQuelqueChose\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(MonEv\xe9nement=XML Comment)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FaireAutreChose\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0Until(MonEv\xe9nement=XML End Document)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(RefDoc)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"860"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},d=s.createContext(r);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);