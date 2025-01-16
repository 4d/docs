"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51152"],{547159:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/apply-to-selection","title":"APPLY TO SELECTION","description":"APPLY TO SELECTION ( laTable ; formule )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/apply-to-selection.md","sourceDirName":"commands-legacy","slug":"/commands/apply-to-selection","permalink":"/docs/fr/commands/apply-to-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fapply-to-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"apply-to-selection","title":"APPLY TO SELECTION","slug":"/commands/apply-to-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ALL RECORDS","permalink":"/docs/fr/commands/all-records"},"next":{"title":"Before selection","permalink":"/docs/fr/commands/before-selection"}}'),t=s("785893"),l=s("250065");let i={id:"apply-to-selection",title:"APPLY TO SELECTION",slug:"/commands/apply-to-selection",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"APPLY TO SELECTION"})," ( ",(0,t.jsx)(n.em,{children:"laTable"})," ; ",(0,t.jsx)(n.em,{children:"formule"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table dans laquelle appliquer la formule"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formule"}),(0,t.jsx)(n.td,{children:"Expression"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Ligne de code ou m\xe9thode"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"APPLY TO SELECTION"})," applique ",(0,t.jsx)(n.em,{children:"formule"})," \xe0 chaque enregistrement de la s\xe9lection courante de ",(0,t.jsx)(n.em,{children:"laTable"}),". La ",(0,t.jsx)(n.em,{children:"formule"}),' peut \xeatre une ligne d\'instructions ou une m\xe9thode (dans ce cas, le nom de la m\xe9thode doit \xeatre saisi sans ""). Si ',(0,t.jsx)(n.em,{children:"formule"})," entra\xeene la modification d'un enregistrement de ",(0,t.jsx)(n.em,{children:"laTable"}),", l'enregistrement modifi\xe9 est sauvegard\xe9. Si ",(0,t.jsx)(n.em,{children:"formule"})," ne modifie pas d'enregistrement, aucune sauvegarde n'est r\xe9alis\xe9e. Si la s\xe9lection courante est vide, ",(0,t.jsx)(n.strong,{children:"APPLY TO SELECTION"})," ne fait rien. La ",(0,t.jsx)(n.em,{children:"formule"})," peut faire appel \xe0 un champ d'une table li\xe9e si le lien est automatique."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention :"})," Les param\xe8tres ($1...$n) ne sont pas pris en charge par ",(0,t.jsx)(n.em,{children:"formule"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"APPLY TO SELECTION"})," peut \xeatre utilis\xe9e pour r\xe9cup\xe9rer et traiter des informations sur une s\xe9lection d'enregistrements (par exemple, calcul d'un total), ou pour modifier une s\xe9lection (par exemple, mettre en majuscule la premi\xe8re lettre d'un champ). Si cette commande est utilis\xe9e \xe0 l'int\xe9rieur d'une transaction, toutes les op\xe9rations r\xe9alis\xe9es pourront \xeatre annul\xe9es si la transaction n'est pas valid\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server :"})," Le serveur n'ex\xe9cute aucune des commandes pass\xe9es dans ",(0,t.jsx)(n.em,{children:"formule"}),". Chaque enregistrement de la s\xe9lection est renvoy\xe9 sur le poste client pour traitement et modification."]}),"\n",(0,t.jsxs)(n.p,{children:["Un thermom\xe8tre de progression s'affiche pendant l'ex\xe9cution d'un ",(0,t.jsx)(n.strong,{children:"APPLY TO SELECTION"}),". Un appel pr\xe9alable \xe0 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/messages-off",children:"MESSAGES OFF"})," permet de supprimer ce thermom\xe8tre. Lorsque le thermom\xe8tre de progression est affich\xe9, l'utilisateur peut annuler l'op\xe9ration."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant met en majuscule tous les noms de la table :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0APPLY TO SELECTION([Emp];[Emp]Nom:=Uppercase([Emp]Nom))\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque ",(0,t.jsx)(n.strong,{children:"APPLY TO SELECTION"})," rencontre un enregistrement verrouill\xe9 et le modifie, celui-ci n'est pas sauvegard\xe9. Tous les enregistrements verrouill\xe9s rencontr\xe9s par la commande sont plac\xe9s dans un ensemble syst\xe8me appel\xe9 LockedSet. Apr\xe8s l'ex\xe9cution d'un ",(0,t.jsx)(n.strong,{children:"APPLY TO SELECTION"}),", il est recommand\xe9 de tester l'ensemble LockedSet pour v\xe9rifier la pr\xe9sence d'enregistrements verrouill\xe9s. La boucle suivante s'ex\xe9cute jusqu'\xe0 ce que tous les enregistrements aient \xe9t\xe9 modifi\xe9s :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0Repeat\xa0// For each enregistrement verrouill\xe9\n\xa0\xa0\xa0\xa0APPLY TO SELECTION([Emp];[Emp]Nom:=Uppercase([Emp]Nom))\n\xa0\xa0\xa0\xa0USE SET(\"LockedSet\")\xa0// S\xe9lection des enregistrements verrouill\xe9s uniquement\n\xa0\xa0// Jusqu'\xe0 ce qu'il n'y ait plus d'enregistrement verrouill\xe9\n\xa0Until(Records in set(\"LockedSet\")=0)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple utilise une m\xe9thode :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([Emp])\n\xa0APPLY TO SELECTION([Emp];Capitales)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"Si l'utilisateur clique sur le bouton Stop dans le thermom\xe8tre de progression, la variable syst\xe8me OK prend la valeur 0. Sinon, elle prend la valeur 1."}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/edit-formula",children:"EDIT FORMULA"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Pr\xe9sentation des ensembles"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"70"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);