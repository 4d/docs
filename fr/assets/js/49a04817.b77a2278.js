/*! For license information please see 49a04817.b77a2278.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74089],{649456:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=s(474848),t=s(28453);const r={id:"sdi",title:"Mode SDI sous Windows"},l=void 0,o={id:"Menus/sdi",title:"Mode SDI sous Windows",description:"Vue d\u2019ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Menus/sdi.md",sourceDirName:"Menus",slug:"/Menus/sdi",permalink:"/docs/fr/18/Menus/sdi",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Menus%2Fsdi.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"sdi",title:"Mode SDI sous Windows"},sidebar:"docs",previous:{title:"Barres de menus",permalink:"/docs/fr/18/Menus/bars"},next:{title:"Vue d\u2019ensemble",permalink:"/docs/fr/18/MSC/overview"}},d={},a=[{value:"Vue d\u2019ensemble",id:"vue-densemble",level:2},{value:"Disponibilit\xe9 du mode SDI",id:"disponibilit\xe9-du-mode-sdi",level:3},{value:"Activation du mode SDI",id:"activation-du-mode-sdi",level:2},{value:"Gestion des applications en mode SDI",id:"gestion-des-applications-en-mode-sdi",level:2},{value:"Menus dans les fen\xeatres",id:"menus-dans-les-fen\xeatres",level:3},{value:"A propos de la fen\xeatre d&#39;accueil",id:"a-propos-de-la-fen\xeatre-daccueil",level:4},{value:"Arr\xeat automatique",id:"arr\xeat-automatique",level:3},{value:"Langage",id:"langage",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"vue-densemble",children:"Vue d\u2019ensemble"}),"\n",(0,i.jsx)(n.p,{children:"Sous Windows, les D\xe9veloppeurs 4D peuvent configurer leurs applications fusionn\xe9es pour qu'elles fonctionnent en tant qu'applications SDI (Single-Document Interface). Dans les applications SDI, chaque fen\xeatre est ind\xe9pendante des autres et peut avoir sa propre barre de menus. Les applications SDI sont oppos\xe9es aux applications MDI (Multiple Documents Interface), o\xf9 toutes les fen\xeatres sont contenues dans une fen\xeatre principale, et en d\xe9pendent."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Le concept SDI/MDI n'existe pas sur macOS. Cette fonctionnalit\xe9 concerne uniquement des applications Windows, et les options s'y r\xe9f\xe9rant sont ignor\xe9es sous macOS."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"disponibilit\xe9-du-mode-sdi",children:"Disponibilit\xe9 du mode SDI"}),"\n",(0,i.jsx)(n.p,{children:"Le mode SDI est disponible uniquement dans l'environnement d'ex\xe9cution suivant :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows"}),"\n",(0,i.jsx)(n.li,{children:"Application fusionn\xe9e, monoposte ou cliente"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"activation-du-mode-sdi",children:"Activation du mode SDI"}),"\n",(0,i.jsx)(n.p,{children:"L'activation et l'utilisation du mode SDI dans votre application requiert les \xe9tapes suivantes :"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Cochez l'option ",(0,i.jsx)(n.strong,{children:"Utiliser le mode SDI sous Windows"}),' dans la page "Interface" de la bo\xeete de dialogue des Propri\xe9t\xe9s de la base.']}),"\n",(0,i.jsx)(n.li,{children:"G\xe9n\xe9rez une application ex\xe9cutable (monoposte et/ou application cliente)."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Par la suite, lorsqu'elle sera ex\xe9cut\xe9e dans le contexte ad\xe9quat (voir ci-dessus), l'application fusionn\xe9e fonctionnera automatiquement en mode SDI."}),"\n",(0,i.jsx)(n.h2,{id:"gestion-des-applications-en-mode-sdi",children:"Gestion des applications en mode SDI"}),"\n",(0,i.jsx)(n.p,{children:"L'ex\xe9cution d'une application 4D en mode SDI ne requiert aucune impl\xe9mentation particuli\xe8re : les barres de menu existantes sont automatiquement d\xe9plac\xe9es dans les fen\xeatres SDI elles-m\xeames. Cependant, vous devez \xeatre attentif aux principes sp\xe9cifiques \xe9num\xe9r\xe9s ci-dessous :"}),"\n",(0,i.jsx)(n.h3,{id:"menus-dans-les-fen\xeatres",children:"Menus dans les fen\xeatres"}),"\n",(0,i.jsx)(n.p,{children:"En mode SDI, la barre de menu du process s'affiche automatiquement dans chaque fen\xeatre \"document\" ouverte durant la dur\xe9e de vie du process (ceci exclut par exemple les palettes flottantes). Lorsque la barre de menu du process n'est pas visible, les raccourcis des lignes de menu restent toutefois actifs."}),"\n",(0,i.jsx)(n.p,{children:"Les menus sont ajout\xe9s au-dessus des fen\xeatres sans modifier la taille de leur contenu :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(652064).A+"",width:"600",height:"238"})}),"\n",(0,i.jsx)(n.p,{children:"Les fen\xeatres peuvent donc \xeatre utilis\xe9es dans les modes MDI ou SDI sans avoir \xe0 recalculer la position des objets."}),"\n",(0,i.jsx)(n.h4,{id:"a-propos-de-la-fen\xeatre-daccueil",children:"A propos de la fen\xeatre d'accueil"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si l'option ",(0,i.jsx)(n.strong,{children:"Afficher fen\xeatres : Accueil"})," de la page \"Interface\" a \xe9t\xe9 s\xe9lectionn\xe9e pour la base de donn\xe9es, la fen\xeatre d'accueil contiendra les menus qui auraient \xe9t\xe9 affich\xe9s dans la fen\xeatre MDI. Notez \xe9galement que la fermeture de la fen\xeatre d'accueil entra\xeenera la sortie de l'application, tout comme dans le mode MDI."]}),"\n",(0,i.jsx)(n.li,{children:"Si l'option Accueil n'a pas \xe9t\xe9 coch\xe9e dans la base de donn\xe9es, les menus seront affich\xe9s uniquement dans les fen\xeatres ouvertes, selon les choix du D\xe9veloppeur."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"arr\xeat-automatique",children:"Arr\xeat automatique"}),"\n",(0,i.jsx)(n.p,{children:"Lorsqu'elle est ex\xe9cut\xe9e en mode MDI, une application 4D quitte simplement lorsque l'utilisateur ferme la fen\xeatre de l'application (fen\xeatre MDI). Cependant, lorsqu'elles sont ex\xe9cut\xe9es en mode SDI, les applications 4D n'ont pas de fen\xeatre d'application et, d'autre part, la fermeture de la derni\xe8re fen\xeatre ouverte ne signifie pas n\xe9cessairement que l'utilisateur souhaite quitter l'application (des process sans interface peuvent \xeatre ex\xe9cut\xe9s par exemple) -- mais cela peut \xeatre le cas."}),"\n",(0,i.jsxs)(n.p,{children:["Pour g\xe9rer cette situation, les applications 4D ex\xe9cut\xe9es en mode SDI incluent un m\xe9canisme pour quitter automatiquement (en appelant la commande ",(0,i.jsx)(n.code,{children:"QUIT 4D"}),") lorsque les conditions suivantes sont remplies :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"l'utilisateur ne peut plus interagir avec l'application"}),"\n",(0,i.jsx)(n.li,{children:"il n'y a pas de process utilisateur en cours"}),"\n",(0,i.jsx)(n.li,{children:"les process 4D ou workers sont en attente d'un \xe9v\xe9nement"}),"\n",(0,i.jsx)(n.li,{children:"le serveur Web n'est pas lanc\xe9."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Lorsqu'un menu avec une action standard associ\xe9e pour ",(0,i.jsx)(n.em,{children:"quitter"})," est appel\xe9, l'application quitte et toutes les fen\xeatres sont ferm\xe9es, quel que soit l'endroit d'o\xf9 le menu a \xe9t\xe9 appel\xe9."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"langage",children:"Langage"}),"\n",(0,i.jsx)(n.p,{children:"Bien qu'il soit trait\xe9 de mani\xe8re transparente par 4D, le mode SDI introduit de l\xe9g\xe8res variations dans la gestion de l'interface d'application. Les sp\xe9cificit\xe9s dans le langage 4D sont list\xe9es ci-dessous :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Commande/fonctionnalit\xe9"}),(0,i.jsx)(n.th,{children:"Sp\xe9cificit\xe9 en mode SDI sous Windows"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Open form window"})}),(0,i.jsxs)(n.td,{children:["Options pour supporter les fen\xeatres flottantes en SDI (",(0,i.jsx)(n.code,{children:"Controller form window"}),") et pour supprimer la barre de menu (",(0,i.jsx)(n.code,{children:"Form has no menu bar"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Menu bar height"})}),(0,i.jsx)(n.td,{children:"Retourne la hauteur en pixels d'une ligne de barre de menu unique, m\xeame si la barre de menu a \xe9t\xe9 incluse sur une ou plusieurs lignes. Retourne 0 lorsque la commande est appel\xe9e \xe0 partir d'un process sans fen\xeatre formulaire"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"SHOW MENU BAR"})," / ",(0,i.jsx)(n.code,{children:"HIDE MENU BAR"})]}),(0,i.jsx)(n.td,{children:"Appliqu\xe9 uniquement \xe0 la fen\xeatre formulaire courante (d'o\xf9 le code est ex\xe9cut\xe9)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"MAXIMIZE WINDOW"})}),(0,i.jsx)(n.td,{children:"La fen\xeatre est maximis\xe9e \xe0 la taille de l'\xe9cran"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CONVERT COORDINATES"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"XY Screen"})," est le syst\xe8me de coordonn\xe9es global dans lequel l'\xe9cran principal est positionn\xe9 \xe0 (0,0). Les \xe9crans \xe0 gauche ou au-dessus de lui peuvent avoir des valeurs de coordonn\xe9es n\xe9gatives et les \xe9crans \xe0 droite ou au-dessous de lui peuvent avoir des valeurs de coordonn\xe9es sup\xe9rieures \xe0 celles retourn\xe9es par ",(0,i.jsx)(n.code,{children:"Screen height"})," ou ",(0,i.jsx)(n.code,{children:"Screen width"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GET MOUSE"})}),(0,i.jsx)(n.td,{children:"Les coordonn\xe9es globales sont relatives \xe0 l'\xe9cran"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GET WINDOW RECT"})}),(0,i.jsx)(n.td,{children:"Lorsque -1 est pass\xe9 dans le param\xe8tre fen\xeatre, la commande retourne 0;0;0;0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"On Drop database method"})}),(0,i.jsx)(n.td,{children:"Non support\xe9"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var i=s(296540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var i,r={},a=null,c=null;for(i in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,i)&&!d.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:t,type:e,key:a,ref:c,props:r,_owner:o.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},652064:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(296540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);