"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73608"],{397763:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/delete-selection","title":"DELETE SELECTION","description":"DELETE SELECTION {( laTable )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-selection.md","sourceDirName":"commands-legacy","slug":"/commands/delete-selection","permalink":"/docs/fr/commands/delete-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-selection","title":"DELETE SELECTION","slug":"/commands/delete-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE SELECTION FROM ARRAY","permalink":"/docs/fr/commands/create-selection-from-array"},"next":{"title":"DISPLAY SELECTION","permalink":"/docs/fr/commands/display-selection"}}'),r=s("785893"),i=s("250065");let l={id:"delete-selection",title:"DELETE SELECTION",slug:"/commands/delete-selection",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DELETE SELECTION"})," {( ",(0,r.jsx)(n.em,{children:"laTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"laTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table de laquelle supprimer la s\xe9lection courante ou Table par d\xe9faut si ce param\xe8tre est omis"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"DELETE SELECTION"})," supprime la s\xe9lection courante d'enregistrements de ",(0,r.jsx)(n.em,{children:"laTable"}),". Si la s\xe9lection courante est vide, ",(0,r.jsx)(n.strong,{children:"DELETE SELECTION"})," ne fait rien. Apr\xe8s la suppression des enregistrements, la s\xe9lection courante est vide. Les enregistrements supprim\xe9s pendant une transaction sont verrouill\xe9s pour les autres utilisateurs et/ou process jusqu'\xe0 ce que la transaction soit valid\xe9e ou annul\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Attention :"})," La suppression d'une s\xe9lection d'enregistrements est une op\xe9ration d\xe9finitive. Elle ne peut \xeatre annul\xe9e par la suite."]}),"\n",(0,r.jsxs)(n.p,{children:["D\xe9s\xe9lectionner l'option ",(0,r.jsx)(n.strong,{children:"Enregistrement(s) d\xe9finitivement supprim\xe9(s)"})," dans l'Inspecteur des tables vous permet d'augmenter la vitesse des suppressions lors de l'utilisation de ",(0,r.jsx)(n.strong,{children:"DELETE SELECTION"})," (cf. paragraphe ",(0,r.jsx)(n.em,{children:"Enregistrement(s) d\xe9finitivement supprim\xe9(s)"})," dans le manuel ",(0,r.jsx)(n.em,{children:"Mode D\xe9veloppement"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant affiche tous les enregistrements de la table [Personnes] et permet \xe0 l'utilisateur de s\xe9lectionner ceux qu'il souhaite effacer. L'exemple est en deux parties. La premi\xe8re est la m\xe9thode affichant les enregistrements. La seconde est la m\xe9thode objet d'un bouton 'Supprimer'. Voici la premi\xe8re m\xe9thode :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Personnes])\xa0// S\xe9lection de tous les enregistrements\n\xa0FORM SET OUTPUT([Personnes];"FormSortie")\xa0// D\xe9finition du formulaire listant les enregistrements\n\xa0DISPLAY SELECTION([Personnes])\xa0// Affichage de tous les enregistrements\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Voici la m\xe9thode objet du bouton Supprimer, apparaissant dans le pied de page du formulaire sortie. La m\xe9thode utilise les enregistrements s\xe9lectionn\xe9s par l'utilisateur (l'ensemble syst\xe8me UserSet) pour effacer la s\xe9lection (notez que si l'utilisateur ne s\xe9lectionne aucun enregistrement, ",(0,r.jsx)(n.strong,{children:"DELETE SELECTION"})," ne fait rien) :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Demander confirmation que l\'utilisateur veut r\xe9ellement supprimer les enregistrements\n\xa0CONFIRM("Vous avez s\xe9lectionn\xe9 "+String(Enregistrements dans ensemble("UserSet"))+\n\xa0" enregistrements \xe0 supprimer."+Char(13)+"Cliquez sur OK pour confirmer l\'op\xe9ration.")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0USE SET("UserSet")\xa0// Use l\'ensemble d\xe9fini par l\'utilisateur\n\xa0\xa0\xa0\xa0DELETE SELECTION([Personnes])\xa0// Supprimer la s\xe9lection d\'enregistrements\n\xa0End if\n\xa0ALL RECORDS([Personnes])\xa0// S\xe9lection de tous les enregistrements\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsxs)(n.p,{children:["Lorsqu'un ",(0,r.jsx)(n.strong,{children:"DELETE SELECTION"})," rencontre un enregistrement verrouill\xe9, celui-ci n'est pas supprim\xe9. Tous les enregistrements verrouill\xe9s sont plac\xe9s dans un ensemble syst\xe8me nomm\xe9 LockedSet. Apr\xe8s l'ex\xe9cution de ",(0,r.jsx)(n.strong,{children:"DELETE SELECTION"}),", vous pouvez tester cet ensemble afin de v\xe9rifier si des enregistrements \xe9taient verrouill\xe9s. La boucle suivante s'ex\xe9cutera jusqu'\xe0 ce que tous les enregistrements aient \xe9t\xe9 supprim\xe9s."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0Repeat\xa0// R\xe9p\xe9ter pour chaque enregistrement verrouill\xe9\n\xa0\xa0\xa0\xa0DELETE SELECTION([CetteTable])\n\xa0\xa0\xa0\xa0If(Records in set("LockedSet")#0)\xa0// Si des enregistrements sont verrouill\xe9s\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0USE SET("LockedSet")\xa0// S\xe9lectionner les enregistrements verrouill\xe9s\n\xa0\xa0\xa0\xa0End if\n\xa0Until(Records in set("LockedSet")=0)\xa0// Jusqu\'\xe0 ce qu\'il n\'y en ait plus\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/display-selection",children:"DISPLAY SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Pr\xe9sentation des ensembles"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/truncate-table",children:"TRUNCATE TABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Verrouillage d'enregistrements"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"66"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,r.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);