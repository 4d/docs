"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56297],{526587:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var n=s(474848),t=s(28453);const a={id:"subtotal",title:"Subtotal",slug:"/commands/subtotal",displayed_sidebar:"docs"},l=void 0,d={id:"commands-legacy/subtotal",title:"Subtotal",description:"Subtotal ( valeurs {; sautPage} ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/subtotal.md",sourceDirName:"commands-legacy",slug:"/commands/subtotal",permalink:"/docs/fr/commands/subtotal",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsubtotal.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"subtotal",title:"Subtotal",slug:"/commands/subtotal",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET PRINTABLE MARGIN",permalink:"/docs/fr/commands/set-printable-margin"},next:{title:"CALL WORKER",permalink:"/docs/fr/commands/call-worker"}},i={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Traitement de niveaux de rupture dans les formulaires d&#39;\xe9tat",id:"traitement-de-niveaux-de-rupture-dans-les-formulaires-d\xe9tat",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function u(e){const r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Subtotal"})," ( ",(0,n.jsx)(r.em,{children:"valeurs"})," {; ",(0,n.jsx)(r.em,{children:"sautPage"}),"} ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Param\xe8tre"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"valeurs"}),(0,n.jsx)(r.td,{children:"Field"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Champ ou variable num\xe9rique dont vous voulez calculer le sous-total"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sautPage"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Niveau de rupture auquel effectuer un saut de page"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"R\xe9sultat"}),(0,n.jsx)(r.td,{children:"Real"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"Sous-total de valeurs"})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,n.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Subtotal"})," retourne le sous-total de ",(0,n.jsx)(r.em,{children:"valeurs"})," pour le niveau de rupture courant ou pr\xe9c\xe9dent. ",(0,n.jsx)(r.strong,{children:"Subtotal"})," ne fonctionne que dans le cadre d'une s\xe9lection tri\xe9e imprim\xe9e par l'interm\xe9diaire de la commande ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"})," ou de la commande de menu ",(0,n.jsx)(r.strong,{children:"Imprimer"})," du mode D\xe9veloppement. Le param\xe8tre ",(0,n.jsx)(r.em,{children:"valeurs"})," doit \xeatre de type num\xe9rique, entier ou entier long. Vous devez assigner le r\xe9sultat de la fonction ",(0,n.jsx)(r.strong,{children:"Subtotal"})," \xe0 une variable plac\xe9e dans la zone de rupture du formulaire."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Attention :"})," Vous ",(0,n.jsx)(r.strong,{children:"devez"})," utiliser les commandes ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"})," et ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/accumulate",children:"ACCUMULATE"})," avant d'imprimer un \xe9tat sur lequel vous voulez traiter les niveaux de rupture et calculer des sous-totaux. Reportez-vous au paragraphe situ\xe9 \xe0 la fin de cette section."]}),"\n",(0,n.jsxs)(r.p,{children:["Le second param\xe8tre (optionnel) de la fonction ",(0,n.jsx)(r.strong,{children:"Subtotal"})," est utilis\xe9 pour provoquer des sauts de page lors de l'impression. Si ",(0,n.jsx)(r.em,{children:"sautPage"})," vaut 0, ",(0,n.jsx)(r.strong,{children:"Subtotal"})," ne g\xe9n\xe8re aucun saut de page. Si ",(0,n.jsx)(r.em,{children:"sautPage"})," vaut 1, ",(0,n.jsx)(r.strong,{children:"Subtotal"})," g\xe9n\xe8re un saut de page pour chaque niveau de rupture 1. Si ",(0,n.jsx)(r.em,{children:"sautPage"})," vaut 2, ",(0,n.jsx)(r.strong,{children:"Subtotal"})," g\xe9n\xe8re un saut de page pour chaque niveau de rupture 1 et 2, etc."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Conseil :"})," Si vous faites appel \xe0 la fonction ",(0,n.jsx)(r.strong,{children:"Subtotal"})," dans le formulaire sortie affich\xe9 \xe0 l'\xe9cran, 4D va afficher un message d'erreur. La fermeture du dialogue d'erreur va provoquer un rafra\xeechissement de l'\xe9cran, donc de nouveau l'ex\xe9cution de la m\xe9thode qui fait appel \xe0 ",(0,n.jsx)(r.strong,{children:"Subtotal"}),", donc de nouveau un message d'erreur, etc. Pour sortir de ce cercle vicieux, appuyez sur les touche ",(0,n.jsx)(r.strong,{children:"Alt"})," + ",(0,n.jsx)(r.strong,{children:"Maj"})," (Windows) ou ",(0,n.jsx)(r.strong,{children:"Option"}),"+",(0,n.jsx)(r.strong,{children:"Maj"})," (Macintosh) et cliquez sur le bouton ",(0,n.jsx)(r.strong,{children:"Arr\xeater"})," dans la fen\xeatre d'erreur : cela met provisoirement fin aux rafra\xeechissements d'\xe9cran. Choisissez un autre formulaire de sortie pour \xe9viter que le probl\xe8me ne se r\xe9p\xe8te. Passez en mode Structure pour isoler l'appel \xe0 la fonction ",(0,n.jsx)(r.strong,{children:"Subtotal"})," par un test (",(0,n.jsx)(r.a,{href:"/docs/fr/commands/form-event-code",children:"Form event code"})," = On Printing Break) si vous avez l'intention d'utiliser le m\xeame formulaire de sortie pour l'\xe9cran et l'imprimante."]}),"\n",(0,n.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsxs)(r.p,{children:["L'exemple suivant est la m\xe9thode objet d'une variable intitul\xe9e ",(0,n.jsx)(r.em,{children:"vSalaire"}),", plac\xe9e dans une zone de rupture d'un formulaire (R0, la zone situ\xe9e au-dessus du marqueur R0). La variable prend la valeur du sous-total du champ Salaire pour ce niveau de rupture. Le traitement des ruptures doit avoir \xe9t\xe9 auparavant activ\xe9 par les commandes ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"})," et ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/accumulate",children:"ACCUMULATE"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Break)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vSalaire:=Subtotal([Employ\xe9s]Salaire)\n\xa0End case\n"})}),"\n",(0,n.jsx)(r.p,{children:'Reportez-vous au chapitre "Les formulaires de sortie et les \xe9tats" du manuel Mode D\xe9veloppement pour plus d\'informations sur la construction de formulaires avec des niveaux de ruptures.'}),"\n",(0,n.jsx)(r.h4,{id:"traitement-de-niveaux-de-rupture-dans-les-formulaires-d\xe9tat",children:"Traitement de niveaux de rupture dans les formulaires d'\xe9tat"}),"\n",(0,n.jsxs)(r.p,{children:["Pour pouvoir g\xe9n\xe9rer des \xe9tats avec ruptures, vous devez d\xe9clencher le traitement des ruptures en appelant les commandes ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"})," et ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/accumulate",children:"ACCUMULATE"}),". Il faut que ces deux commandes soient appel\xe9es avant l'impression du formulaire. L'appel \xe0 la fonction ",(0,n.jsx)(r.strong,{children:"Subtotal"})," est n\xe9cessaire pour afficher les calculs de niveaux interm\xe9diaires. Il est obligatoire de trier sur au moins le nombre de niveaux de ruptures d\xe9sir\xe9."]}),"\n",(0,n.jsxs)(r.p,{children:["Dans le cadre de l'utilisation des commandes ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"})," et ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/accumulate",children:"ACCUMULATE"}),", les \xe9tapes \xe0 suivre sont :",(0,n.jsx)(r.br,{}),"\n1. S\xe9lectionner les enregistrements \xe0 imprimer,",(0,n.jsx)(r.br,{}),"\n2. Trier les enregistrements sur autant de niveaux que de niveaux de ruptures,",(0,n.jsx)(r.br,{}),"\n3. Appeler les commandes ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"})," et ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/accumulate",children:"ACCUMULATE"}),",",(0,n.jsx)(r.br,{}),"\n4. Imprimer l'\xe9tat avec la commande ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["La commande ",(0,n.jsx)(r.strong,{children:"Subtotal"})," permet d'afficher des calculs de sous-totaux dans des formulaires."]}),"\n",(0,n.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/fr/commands/accumulate",children:"ACCUMULATE"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/fr/commands/level",children:"Level"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"})]})]})}function c(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>d});var n=s(296540);const t={},a=n.createContext(t);function l(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);