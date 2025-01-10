"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73222"],{806237:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/sax-get-xml-document-values","title":"SAX GET XML DOCUMENT VALUES","description":"SAX GET XML DOCUMENT VALUES ( document ; encodage ; version ; autonome )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-get-xml-document-values.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-document-values","permalink":"/docs/fr/commands/sax-get-xml-document-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-document-values.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-get-xml-document-values","title":"SAX GET XML DOCUMENT VALUES","slug":"/commands/sax-get-xml-document-values","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML COMMENT","permalink":"/docs/fr/commands/sax-get-xml-comment"},"next":{"title":"SAX GET XML ELEMENT","permalink":"/docs/fr/commands/sax-get-xml-element"}}'),r=s("785893"),d=s("250065");let l={id:"sax-get-xml-document-values",title:"SAX GET XML DOCUMENT VALUES",slug:"/commands/sax-get-xml-document-values",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SAX GET XML DOCUMENT VALUES"})," ( ",(0,r.jsx)(n.em,{children:"document"})," ; ",(0,r.jsx)(n.em,{children:"encodage"})," ; ",(0,r.jsx)(n.em,{children:"version"})," ; ",(0,r.jsx)(n.em,{children:"autonome"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"document"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence du document ouvert"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodage"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Jeu de caract\xe8res du document XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"version"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Version du XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"autonome"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Vrai=le document est autonome, sinon Faux"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SAX GET XML DOCUMENT VALUES"})," extrait des informations \xe9l\xe9mentaires de l\u2019en-t\xeate XML du document XML r\xe9f\xe9renc\xe9 par ",(0,r.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["La commande retourne respectivement le type d\u2019encodage, la version et la propri\xe9t\xe9 \u201Cautonome\u201D du document dans les param\xe8tres ",(0,r.jsx)(n.em,{children:"encodage"}),", ",(0,r.jsx)(n.em,{children:"version"})," et ",(0,r.jsx)(n.em,{children:"autonome"}),". Cette commande doit \xeatre utilis\xe9e dans le contexte de l\u2019\xe9v\xe9nement SAX XML start document. Pour plus d'informations sur les \xe9v\xe9nements SAX, reportez-vous \xe0 la description de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/sax-get-xml-node",children:"SAX Get XML node"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/sax-get-xml-node",children:"SAX Get XML node"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/sax-set-xml-declaration",children:"SAX SET XML DECLARATION"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"873"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var t=s(667294);let r={},d=t.createContext(r);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);