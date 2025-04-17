"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52054"],{521576:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/get-automatic-relations","title":"GET AUTOMATIC RELATIONS","description":"GET AUTOMATIC RELATIONS ( aller ; retour )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-automatic-relations.md","sourceDirName":"commands-legacy","slug":"/commands/get-automatic-relations","permalink":"/docs/fr/commands/get-automatic-relations","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-automatic-relations.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-automatic-relations","title":"GET AUTOMATIC RELATIONS","slug":"/commands/get-automatic-relations","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE RELATED ONE","permalink":"/docs/fr/commands/create-related-one"},"next":{"title":"GET FIELD RELATION","permalink":"/docs/fr/commands/get-field-relation"}}'),r=s("785893"),a=s("250065");let i={id:"get-automatic-relations",title:"GET AUTOMATIC RELATIONS",slug:"/commands/get-automatic-relations",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET AUTOMATIC RELATIONS"})," ( ",(0,r.jsx)(n.em,{children:"aller"})," ; ",(0,r.jsx)(n.em,{children:"retour"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aller"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Statut de tous les liens de N vers 1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"retour"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Statut de tous les liens de 1 vers N"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"GET AUTOMATIC RELATIONS"})," permet de savoir si le statut automatique/manuel de tous les liens manuels N vers 1 et 1 vers N de la base a \xe9t\xe9 modifi\xe9 dans le process courant.: ce param\xe8tre retourne Vrai si un appel ant\xe9rieur de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," a rendu automatiques tous les liens manuels N vers 1 \u2014 par exemple ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),"(Vrai;Faux).",(0,r.jsx)(n.br,{}),"\nCe param\xe8tre retourne Faux si la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," n\u2019a pas \xe9t\xe9 appel\xe9e ou si sa pr\xe9c\xe9dente ex\xe9cution n\u2019a pas modifi\xe9 les liens manuels N vers 1 \u2014 par exemple ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),"(Faux;Faux)."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"retour"})," : ce param\xe8tre retourne Vrai si l\u2019appel pr\xe9c\xe9dent de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," a rendu automatiques tous les liens manuels 1 vers N \u2014 par exemple ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),"(Vrai;Vrai).",(0,r.jsx)(n.br,{}),"\nCe param\xe8tre retourne Faux si la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," n\u2019a pas \xe9t\xe9 appel\xe9e ou si sa pr\xe9c\xe9dente ex\xe9cution n\u2019a pas modifi\xe9 les liens manuels 1 vers N \u2014 par exemple ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),"(Vrai;Faux)."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-field-relation",children:"GET FIELD RELATION"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-field-relation",children:"GET FIELD RELATION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"899"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let r={},a=t.createContext(r);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);