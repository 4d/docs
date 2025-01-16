"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98822"],{69160:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/set-field-relation","title":"SET FIELD RELATION","description":"SET FIELD RELATION ( tableN | champN ; aller ; retour )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-field-relation.md","sourceDirName":"commands-legacy","slug":"/commands/set-field-relation","permalink":"/docs/fr/20-R7/commands/set-field-relation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-field-relation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-field-relation","title":"SET FIELD RELATION","slug":"/commands/set-field-relation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET AUTOMATIC RELATIONS","permalink":"/docs/fr/20-R7/commands/set-automatic-relations"},"next":{"title":"Resources","permalink":"/docs/fr/20-R7/category/resources"}}'),r=s("785893"),i=s("250065");let a={id:"set-field-relation",title:"SET FIELD RELATION",slug:"/commands/set-field-relation",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET FIELD RELATION"})," ( tableN | champN ; ",(0,r.jsx)(n.em,{children:"aller"})," ; ",(0,r.jsx)(n.em,{children:"retour"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableN | champN"}),(0,r.jsx)(n.td,{children:"Table, Champ"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table de d\xe9part des liens ou Champ de d\xe9part du lien"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aller"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Statut du lien aller partant du champ ou des liens aller partant de la table"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"retour"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Statut du lien retour partant du champ ou des liens retour partant de la table"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SET FIELD RELATION"})," permet de d\xe9finir s\xe9par\xe9ment le statut automatique/manuel de chaque lien de la base pour le process courant, quel que soit son statut initial d\xe9fini en mode D\xe9veloppement dans la fen\xeatre de param\xe9trage des liens."]}),"\n",(0,r.jsx)(n.p,{children:"Passez dans le premier param\xe8tre un nom de table ou de champ :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["si vous passez un nom de champ (",(0,r.jsx)(n.em,{children:"champN"}),"), la commande s\u2019appliquera uniquement au lien partant du champ N d\xe9sign\xe9."]}),"\n",(0,r.jsxs)(n.li,{children:["si vous passez un nom de table (",(0,r.jsx)(n.em,{children:"tableN"}),"), la commande s\u2019appliquera \xe0 tous les liens partant de la table N d\xe9sign\xe9e."]}),"\n",(0,r.jsxs)(n.li,{children:["si aucun lien ne part du champ ",(0,r.jsx)(n.em,{children:"champN"})," ou de la table ",(0,r.jsx)(n.em,{children:"tableN"}),", l\u2019erreur de syntaxe n\xb016 (\u201CCe champ ne poss\xe8de pas de lien\u201D) est g\xe9n\xe9r\xe9e et la variable syst\xe8me OK prend la valeur 0."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans les param\xe8tres ",(0,r.jsx)(n.em,{children:"aller"})," et ",(0,r.jsx)(n.em,{children:"retour"})," des valeurs indiquant la modification du statut automatique/manuel \xe0 appliquer respectivement au(x) lien(s) de type N vers 1 \u2014 c\u2019est-\xe0-dire au(x) lien(s) aller \u2014 et au(x) lien(s) de type 1 vers N \u2014 c\u2019est-\xe0-dire au(x) lien(s) retour \u2014 d\xe9sign\xe9(s). Vous pouvez utiliser les constantes du th\xe8me \u201C",(0,r.jsx)(n.em,{children:"Liens"}),"\u201D :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Do not modify (0) = ne pas modifier le statut courant du ou des lien(s)."}),"\n",(0,r.jsx)(n.li,{children:"Structure configuration (1) = utiliser le param\xe9trage d\xe9fini pour le(s) lien(s) dans la fen\xeatre de Structure de l\u2019application."}),"\n",(0,r.jsx)(n.li,{children:"Manual (2) = rendre manuel(s) le(s) lien(s) pour le process courant."}),"\n",(0,r.jsx)(n.li,{children:"Automatic (3) = rendre automatique(s) le(s) lien(s) pour le process courant."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Les modifications effectu\xe9es \xe0 l\u2019aide de cette commande s\u2019appliquent au process courant uniquement. Le param\xe9trage des liens d\xe9fini \xe0 l\u2019aide des options de la fen\xeatre Inspecteur n\u2019est pas modifi\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si vous avez pass\xe9 la valeur Vrai \xe0 la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," durant la m\xeame session, les appels \xe0 la commande ",(0,r.jsx)(n.strong,{children:"SET FIELD RELATION"})," sont ignor\xe9s, qu'ils soient plac\xe9s avant ou apr\xe8s ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),'. Pour "d\xe9verrouiller" le mode automatique et prendre en compte les appels \xe0 ',(0,r.jsx)(n.strong,{children:"SET FIELD RELATION"}),", passez Faux \xe0 ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Le code suivant vous permet uniquement de configurer ls liens utiles comme automatiques dans l'\xe9diteur d'\xe9tats rapides :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET AUTOMATIC RELATIONS(False;False)\xa0// Initialisation des liens\n\xa0\xa0//Seuls les liens suivants seront utilis\xe9s\n\xa0SET FIELD RELATION([Factures]ID_Client;Automatic;Automatic)\n\xa0SET FIELD RELATION([Ligne_Factures]ID_Factures;Automatic;Automatic)\n\xa0QR REPORT([Factures];Char(1))\n"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-field-relation",children:"GET FIELD RELATION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"919"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var t=s(667294);let r={},i=t.createContext(r);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);