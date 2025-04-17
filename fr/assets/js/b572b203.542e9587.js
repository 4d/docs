"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85818"],{403945:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/print-record","title":"PRINT RECORD","description":"PRINT RECORD ( {;}{* | >} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/print-record.md","sourceDirName":"commands-legacy","slug":"/commands/print-record","permalink":"/docs/fr/20-R8/commands/print-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"print-record","title":"PRINT RECORD","slug":"/commands/print-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINT OPTION VALUES","permalink":"/docs/fr/20-R8/commands/print-option-values"},"next":{"title":"PRINT SELECTION","permalink":"/docs/fr/20-R8/commands/print-selection"}}'),i=n("785893"),t=n("250065");let l={id:"print-record",title:"PRINT RECORD",slug:"/commands/print-record",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"PRINT RECORD"})," ( {",(0,i.jsx)(r.em,{children:"laTable"}),"}{;}{* | >} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Param\xe8tre"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"laTable"}),(0,i.jsx)(r.td,{children:"Table"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Table de laquelle imprimer l'enregistrement courant ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"* | >"}),(0,i.jsx)(r.td,{children:"Op\xe9rateur"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"* pour supprimer les bo\xeetes de dialogue d'impression ou > pour ne pas r\xe9initialiser les param\xe8tres d'impression"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:["Cette commande provoque l'impression de l'enregistrement courant de ",(0,i.jsx)(r.em,{children:"laTable"}),", sans modifier la s\xe9lection courante. Le formulaire sortie courant est utilis\xe9 pour l'impression. S\u2019il n\u2019y a pas d\u2019enregistrement courant dans ",(0,i.jsx)(r.em,{children:"laTable"}),", ",(0,i.jsx)(r.strong,{children:"PRINT RECORD"})," ne fait rien."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"PRINT RECORD"})," permet d'imprimer des sous-formulaires, ce qui n'est pas possible avec la commande ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R8/commands/print-form",children:"Print form"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Note :"})," Si l'enregistrement a subi des modifications qui n'ont pas encore \xe9t\xe9 sauvegard\xe9es sur disque, la commande imprime les valeurs les plus r\xe9centes, et non celles stock\xe9es sur le disque."]}),"\n",(0,i.jsxs)(r.p,{children:["Par d\xe9faut, ",(0,i.jsx)(r.strong,{children:"PRINT RECORD"})," affiche la bo\xeete de dialogue d'impression. Si l'utilisateur annule la bo\xeete de dialogue, l'ex\xe9cution de la commande est stopp\xe9e.",(0,i.jsx)(r.br,{}),"\nVous pouvez supprimer son affichage en utilisant soit le param\xe8tre optionnel ast\xe9risque (*), soit le param\xe8tre optionnel \u201Csup\xe9rieur \xe0\u201D (>)."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Le param\xe8tre ",(0,i.jsx)(r.em,{children:"*"})," provoque une impression avec les param\xe8tres d\u2019impression courants (param\xe8tres par d\xe9faut ou d\xe9finis par les commandes ",(0,i.jsx)(r.em,{children:"_o_PAGE SETUP"})," et/ou ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R8/commands/set-print-option",children:"SET PRINT OPTION"}),")."]}),"\n",(0,i.jsxs)(r.li,{children:["Le param\xe8tre ",(0,i.jsx)(r.em,{children:">"})," provoque en outre l\u2019impression sans r\xe9initialisation des param\xe8tres d\u2019impression. Ce param\xe8tre est utile lorsque vous souhaitez ex\xe9cuter successivement plusieurs appels \xe0 ",(0,i.jsx)(r.strong,{children:"PRINT RECORD"})," (par exemple \xe0 l'int\xe9rieur d\u2019une boucle) tout en conservant des param\xe8tres d\u2019impression personnalis\xe9s pr\xe9alablement d\xe9finis."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"4D Server :"})," Cette commande peut \xeatre ex\xe9cut\xe9e sur 4D Server dans le cadre d'une proc\xe9dure stock\xe9e. Dans ce contexte :"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Veillez \xe0 ce qu\u2019aucune bo\xeete de dialogue n\u2019apparaisse sur le poste serveur (sauf besoin sp\xe9cifique). Pour cela, il est n\xe9cessaire d\u2019appeler la commande avec le param\xe8tre ",(0,i.jsx)(r.em,{children:"*"})," ou ",(0,i.jsx)(r.em,{children:">"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"En cas de probl\xe8me sur l\u2019imprimante (plus de papier, imprimante d\xe9connect\xe9e, etc.), aucun message d'erreur n'est g\xe9n\xe9r\xe9."}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Attention :"})," N'utilisez pas la commande ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R8/commands/page-break",children:"PAGE BREAK"})," avec ",(0,i.jsx)(r.strong,{children:"PRINT RECORD"}),". ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R8/commands/page-break",children:"PAGE BREAK"})," est exclusivement r\xe9serv\xe9e \xe0 une utilisation combin\xe9e avec la commande ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R8/commands/print-form",children:"Print form"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsxs)(r.p,{children:["L'exemple suivant imprime l'enregistrement courant de la table ",(0,i.jsx)(r.em,{children:"[Factures]"}),". Cette m\xe9thode est celle d'un bouton ",(0,i.jsx)(r.strong,{children:"Imprimer"})," plac\xe9 dans le formulaire entr\xe9e. Lorsque l'utilisateur clique sur ce bouton, l'enregistrement est imprim\xe9 dans un formulaire sp\xe9cialement cr\xe9\xe9 dans ce but."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([Factures];"ImpressionEnregistrement")\xa0//S\xe9lection du formulaire pour l\'impression\n\xa0PRINT RECORD([Factures];*)\xa0//Imprimer les factures (sans dialogues d\'impression)\n\xa0FORM SET OUTPUT([Factures];"FormListe")\xa0//Restauration du formulaire sortie courant\n'})}),"\n",(0,i.jsx)(r.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsxs)(r.p,{children:["L'exemple suivant imprime le m\xeame enregistrement courant dans deux formulaires diff\xe9rents. Cette m\xe9thode est celle d'un bouton ",(0,i.jsx)(r.strong,{children:"Imprimer"})," plac\xe9 dans un formulaire entr\xe9e. Vous souhaitez d\xe9finir des param\xe8tres d\u2019impression personnalis\xe9s et les utiliser pour les deux formulaires."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:"\xa0PRINT SETTINGS\xa0//L'utilisateur d\xe9finit ses param\xe8tres d'impression\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Employ\xe9s];\"D\xe9taill\xe9\")\xa0//Use un premier formulaire d'impression\n\xa0\xa0\xa0\xa0PRINT RECORD([Employ\xe9s];>)\n\xa0\xa0//Imprimer en utilisant les param\xe8tres d\xe9finis par l'utilisateur\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Employ\xe9s];\"Simplifi\xe9\")\xa0//Use un second formulaire d'impression\n\xa0\xa0\xa0\xa0PRINT RECORD([Employ\xe9s];>)\n\xa0\xa0//Imprimer en utilisant les param\xe8tres d\xe9finis par l'utilisateur\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Employ\xe9s];\"Sortie\")\xa0//R\xe9tablir le formulaire sortie par d\xe9faut\n\xa0End if\n"})}),"\n",(0,i.jsx)(r.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/fr/20-R8/commands/print-form",children:"Print form"})}),"\n",(0,i.jsx)(r.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(r.td,{children:"71"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Thread safe"}),(0,i.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return l}});var s=n(667294);let i={},t=s.createContext(i);function l(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);