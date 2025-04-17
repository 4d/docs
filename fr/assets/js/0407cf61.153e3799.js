"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55965"],{191056:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/relate-many-selection","title":"RELATE MANY SELECTION","description":"RELATE MANY SELECTION ( leChamp )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/relate-many-selection.md","sourceDirName":"commands-legacy","slug":"/commands/relate-many-selection","permalink":"/docs/fr/commands/relate-many-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelate-many-selection.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"relate-many-selection","title":"RELATE MANY SELECTION","slug":"/commands/relate-many-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELATE MANY","permalink":"/docs/fr/commands/relate-many"},"next":{"title":"RELATE ONE","permalink":"/docs/fr/commands/relate-one"}}'),r=t("785893"),l=t("250065");let i={id:"relate-many-selection",title:"RELATE MANY SELECTION",slug:"/commands/relate-many-selection",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RELATE MANY SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"leChamp"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"leField"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Champ de la table N (d'o\xf9 part le lien)"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"RELATE MANY SELECTION"})," cr\xe9e une s\xe9lection d'enregistrements dans la table N bas\xe9e sur la s\xe9lection courante de la table 1, et charge le premier enregistrement de la table N comme enregistrement courant.",(0,r.jsx)(n.strong,{children:"RELATE MANY SELECTION"})," modifie l'enregistrement courant de la table 1."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Prenons l'exemple d'une base de donn\xe9es comportant une table ",(0,r.jsx)(n.em,{children:"[Factures]"})," dont le champ ",(0,r.jsx)(n.em,{children:"[Factures]IDClient"})," est li\xe9 au champ ",(0,r.jsx)(n.em,{children:"[Clients]NoID"})," de la table ",(0,r.jsx)(n.em,{children:"[Clients]"}),". L'exemple suivant s\xe9lectionne toutes les factures adress\xe9es aux clients dont le cr\xe9dit est sup\xe9rieur ou \xe9gal \xe0 5710 Euros :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// S\xe9lectionner les clients\n\xa0QUERY([Clients];[Clients]Credit>=5710)\n\xa0\xa0//Trouver toutes les factures li\xe9es \xe0 chacun de ces clients\n\xa0RELATE MANY SELECTION([Factures]IDClient)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/query",children:"QUERY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/relate-one",children:"RELATE ONE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/relate-one-selection",children:"RELATE ONE SELECTION"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"340"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Change l'enregistrement courant"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,r.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);