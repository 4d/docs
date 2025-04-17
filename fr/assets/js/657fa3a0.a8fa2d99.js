"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92217"],{598170:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/relate-one-selection","title":"RELATE ONE SELECTION","description":"RELATE ONE SELECTION ( tableN ; table1 )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/relate-one-selection.md","sourceDirName":"commands-legacy","slug":"/commands/relate-one-selection","permalink":"/docs/fr/20-R8/commands/relate-one-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelate-one-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"relate-one-selection","title":"RELATE ONE SELECTION","slug":"/commands/relate-one-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELATE ONE","permalink":"/docs/fr/20-R8/commands/relate-one"},"next":{"title":"SAVE RELATED ONE","permalink":"/docs/fr/20-R8/commands/save-related-one"}}'),r=t("785893"),l=t("250065");let i={id:"relate-one-selection",title:"RELATE ONE SELECTION",slug:"/commands/relate-one-selection",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RELATE ONE SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"tableN"})," ; ",(0,r.jsx)(n.em,{children:"table1"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableN"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de la table N (d'o\xf9 part le lien)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"table1"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de la table 1 (o\xf9 arrive le lien)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"RELATE ONE SELECTION"})," cr\xe9e une nouvelle s\xe9lection d'enregistrements dans ",(0,r.jsx)(n.em,{children:"table1"})," \xe0 partir de la s\xe9lection d'enregistrements de la ",(0,r.jsx)(n.em,{children:"tableN"})," qui lui est li\xe9e et charge le premier enregistrement de la nouvelle s\xe9lection en tant qu'enregistrement courant."]}),"\n",(0,r.jsxs)(n.p,{children:["Cette commande ne peut \xeatre utilis\xe9e que s'il existe un lien de N vers ",(0,r.jsx)(n.em,{children:"1"}),". ",(0,r.jsx)(n.strong,{children:"RELATE ONE SELECTION"})," peut op\xe9rer au travers de plusieurs niveaux de liens. Il peut y avoir plusieurs tables li\xe9es entre la table N et la table ",(0,r.jsx)(n.em,{children:"1"}),". Les liens peuvent \xeatre manuels ou automatiques."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RELATE ONE SELECTION"}),' utilise le chemin "le plus court" pour passer de la table de d\xe9part \xe0 la table d\'arriv\xe9e. Si plusieurs chemins existants sont de taille \xe9quivalente, vous devez faire appel \xe0 la commande ',(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-field-relation",children:"SET FIELD RELATION"})," si vous souhaitez contr\xf4ler le chemin emprunt\xe9."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Nous souhaitons trouver tous les clients dont les factures arrivent \xe0 \xe9ch\xe9ance aujourd'hui.",(0,r.jsx)(n.br,{}),"\nL'exemple suivant propose une m\xe9thode pour cr\xe9er une s\xe9lection dans la table ",(0,r.jsx)(n.em,{children:"[Clients]"})," \xe0 partir d'une s\xe9lection d'enregistrements de la table ",(0,r.jsx)(n.em,{children:"[Factures]"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE EMPTY SET([Clients];"Paiement Du")\n\xa0QUERY([Factures];\xa0[Factures]PaiementDu=Current date)\n\xa0While(Not(End selection([Factures])))\n\xa0\xa0\xa0\xa0RELATE ONE([Factures]ClientID)\n\xa0\xa0\xa0\xa0ADD TO SET([Clients];"Paiement Du")\n\xa0\xa0\xa0\xa0NEXT RECORD([Factures])\n\xa0End while\n'})}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant parvient au m\xeame r\xe9sultat que le pr\xe9c\xe9dent :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Factures];[Factures]PaiementDu=Current date)\n\xa0RELATE ONE SELECTION([Factures];[Clients])\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Depuis la version 11, ce code peut \xe9galement \xeatre \xe9crit de la mani\xe8re suivante sans perte de performances :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Clients];[Factures]PaiementDu=Current date)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Pr\xe9sentation des ensembles"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query",children:"QUERY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/relate-many-selection",children:"RELATE MANY SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/relate-one",children:"RELATE ONE"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"349"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Change l'enregistrement courant"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,r.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);