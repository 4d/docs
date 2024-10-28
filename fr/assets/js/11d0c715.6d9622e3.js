"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42585],{734346:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>A});var r=s(474848),t=s(28453);const i={id:"request",title:"Request",slug:"/commands/request",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/request",title:"Request",description:"Request ( message {; r\xe9ponseD\xe9faut {; titreBoutonOK {; titreBoutonAnn}}} )  -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/request.md",sourceDirName:"commands-legacy",slug:"/commands/request",permalink:"/docs/fr/commands/request",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frequest.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"request",title:"Request",slug:"/commands/request",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"MESSAGES ON",permalink:"/docs/fr/commands/messages-on"},next:{title:"CLEAR NAMED SELECTION",permalink:"/docs/fr/commands/clear-named-selection"}},l={},A=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Request"})," ( ",(0,r.jsx)(n.em,{children:"message"})," {; ",(0,r.jsx)(n.em,{children:"r\xe9ponseD\xe9faut"})," {; ",(0,r.jsx)(n.em,{children:"titreBoutonOK"})," {; ",(0,r.jsx)(n.em,{children:"titreBoutonAnn"}),"}}} )  -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Message \xe0 afficher dans la bo\xeete de dialogue"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"r\xe9ponseD\xe9faut"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valeur par d\xe9faut dans la zone de saisie de texte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"titreBoutonOK"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Libell\xe9 du bouton OK"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"titreBoutonAnn"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Libell\xe9 du bouton Annuler"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeur saisie par l'utilisateur"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.strong,{children:"Request"})," affiche une bo\xeete de dialogue de demande d'informations compos\xe9e d'un message, d'une zone de saisie de texte, d'un bouton ",(0,r.jsx)(n.strong,{children:"OK"})," et d'un bouton ",(0,r.jsx)(n.strong,{children:"Annuler"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous passez le message \xe0 afficher dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"message"}),". Si la taille du message exc\xe8de les capacit\xe9s de la zone d'affichage (aux alentours de 50 caract\xe8res, variant en fonction du Syst\xe8me et de la police utilis\xe9e), il peut appara\xeetre tronqu\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Par d\xe9faut, le libell\xe9 du bouton OK est \u201cOK\u201d et celui du bouton Annuler est \u201cAnnuler\u201d. Si vous voulez modifier ces libell\xe9s, passez d'autres valeurs dans les param\xe8tres optionnels ",(0,r.jsx)(n.em,{children:"titreBoutonOK"})," et ",(0,r.jsx)(n.em,{children:"titreBoutonAnn"}),". Si n\xe9cessaire, les boutons sont agrandis vers la gauche, en fonction de la taille des libell\xe9s que vous avez saisis."]}),"\n",(0,r.jsx)(n.p,{children:"Le bouton OK est le bouton par d\xe9faut. L'utilisateur peut cliquer sur le bouton OK ou appuyer sur la touche Entr\xe9e pour valider la bo\xeete de dialogue, mettant ainsi la variable syst\xe8me OK \xe0 1. Il peut \xe9galement cliquer sur le bouton Annuler pour annuler la bo\xeete de dialogue, mettant ainsi la variable syst\xe8me OK \xe0 0."}),"\n",(0,r.jsxs)(n.p,{children:["L'utilisateur peut taper des caract\xe8res dans la zone de saisie de texte. Pour d\xe9finir une valeur par d\xe9faut, passez le texte par d\xe9faut dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"r\xe9ponseD\xe9faut"}),". Si l'utilisateur clique sur le bouton OK, ",(0,r.jsx)(n.strong,{children:"Request"})," retourne le texte. Si l'utilisateur clique sur le bouton Annuler, ",(0,r.jsx)(n.strong,{children:"Request"}),' retourne une cha\xeene vide (""). Si la r\xe9ponse doit \xeatre une valeur num\xe9rique ou une date, convertissez la cha\xeene retourn\xe9e par ',(0,r.jsx)(n.strong,{children:"Request"})," dans le type souhait\xe9 \xe0 l'aide des fonctions ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/num",children:"Num"})," et ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/date",children:"Date"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," N'appelez pas la fonction ",(0,r.jsx)(n.strong,{children:"Request"})," dans une m\xe9thode formulaire ou objet qui g\xe8re l'\xe9v\xe9nement On Activate ou On Deactivate car cela provoquerait une boucle sans fin."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Conseil :"})," Si vous voulez r\xe9cup\xe9rer plusieurs informations de l'utilisateur, construisez un formulaire appropri\xe9 et appelez-le avec la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/dialog",children:"DIALOG"}),", plut\xf4t que d'afficher une succession de bo\xeetes de dialogue du type ",(0,r.jsx)(n.strong,{children:"Request"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"La ligne de code :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vsPrompt:=Request("Veuillez saisir votre nom :")\n'})}),"\n",(0,r.jsx)(n.p,{children:"... provoquera l'affichage de la bo\xeete de dialogue suivante :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(939850).A+"",width:"393",height:"144"})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Le code suivant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vsPrompt:=Request("Nom de l\'employ\xe9:";"";"Creer un enregistrement";"Annuler")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ADD RECORD([Employes])\n\xa0\xa0//Note: vsPrompt est alors copi\xe9e dans le champ [Employ\xe9s]Nom\xa0\n\xa0\xa0//lors de l\'\xe9v\xe9nement formulaire Sur chargement de la m\xe9thode formulaire\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"... provoquera l'affichage de la bo\xeete de dialogue suivante :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(536026).A+"",width:"395",height:"143"})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsx)(n.p,{children:"La ligne de code :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vdPrompt:=Date(Demander("Veuillez saisir la nouvelle date :";Chaine(Date du jour)))\n'})}),"\n",(0,r.jsx)(n.p,{children:"... provoquera l'affichage de la bo\xeete de dialogue suivante :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(696890).A+"",width:"393",height:"144"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/alert",children:"ALERT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/confirm",children:"CONFIRM"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},939850:(e,n,s)=>{s.d(n,{A:()=>r});const r="data:image/png;base64,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"},536026:(e,n,s)=>{s.d(n,{A:()=>r});const r="data:image/png;base64,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"},696890:(e,n,s)=>{s.d(n,{A:()=>r});const r="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var r=s(296540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);