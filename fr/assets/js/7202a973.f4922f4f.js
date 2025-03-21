"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40960"],{125964:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/print-settings","title":"PRINT SETTINGS","description":"PRINT SETTINGS {( typeDial )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/print-settings.md","sourceDirName":"commands-legacy","slug":"/commands/print-settings","permalink":"/docs/fr/20-R7/commands/print-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-settings.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"print-settings","title":"PRINT SETTINGS","slug":"/commands/print-settings","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINT SELECTION","permalink":"/docs/fr/20-R7/commands/print-selection"},"next":{"title":"Print settings to BLOB","permalink":"/docs/fr/20-R7/commands/print-settings-to-blob"}}'),r=s("785893"),i=s("250065");let d={id:"print-settings",title:"PRINT SETTINGS",slug:"/commands/print-settings",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PRINT SETTINGS"})," {( ",(0,r.jsx)(n.em,{children:"typeDial"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"typeDial"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Bo\xeete(s) de dialogue \xe0 afficher"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"PRINT SETTINGS"})," provoque l'affichage d'une bo\xeete de dialogue d'impression. Cette commande doit \xeatre appel\xe9e avant une s\xe9rie de commandes ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/print-form",children:"Print form"})," ou la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/open-printing-job",children:"OPEN PRINTING JOB"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,r.jsx)(n.em,{children:"typeDial"})," permet de configurer l\u2019affichage de la bo\xeete de dialogue d\u2019impression. Vous pouvez utiliser l'une des constantes suivantes du th\xe8me ",(0,r.jsx)(n.em,{children:"Options d'impression"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Page setup dialog"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Affichage de la bo\xeete de dialogue Format d'impression"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Print dialog"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Affichage de la bo\xeete de dialogue d'impression (par d\xe9faut si omis)"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," La bo\xeete de dialogue d'impression comporte l'option ",(0,r.jsx)(n.strong,{children:"Imprimer \xe0 l'\xe9cran"})," permettant \xe0 l'utilisateur de visualiser son impression \xe0 l'\xe9cran. Vous pouvez pr\xe9s\xe9lectionner ou d\xe9s\xe9lectionner cette option par un appel pr\xe9alable \xe0 la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-print-preview",children:"SET PRINT PREVIEW"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/print-form",children:"Print form"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"Si l'utilisateur clique sur le bouton OK dans chaque bo\xeete de dialogue, la variable syst\xe8me OK prend la valeur 1. Sinon, elle prend la valeur 0."}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/open-printing-job",children:"OPEN PRINTING JOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/page-break",children:"PAGE BREAK"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/print-form",children:"Print form"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-print-preview",children:"SET PRINT PREVIEW"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"106"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);