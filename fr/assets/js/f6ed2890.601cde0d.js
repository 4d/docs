"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37373],{945767:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var s=r(474848),t=r(28453);const d={id:"set-window-rect",title:"SET WINDOW RECT",slug:"/commands/set-window-rect",displayed_sidebar:"docs"},i=void 0,o={id:"commands-legacy/set-window-rect",title:"SET WINDOW RECT",description:"SET WINDOW RECT ( gauche ; haut ; droite ; bas {; fen\xeatre}{; *} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-window-rect.md",sourceDirName:"commands-legacy",slug:"/commands/set-window-rect",permalink:"/docs/fr/commands/set-window-rect",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-window-rect.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-window-rect",title:"SET WINDOW RECT",slug:"/commands/set-window-rect",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"RESIZE FORM WINDOW",permalink:"/docs/fr/commands/resize-form-window"},next:{title:"SET WINDOW TITLE",permalink:"/docs/fr/commands/set-window-title"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET WINDOW RECT"})," ( ",(0,s.jsx)(n.em,{children:"gauche"})," ; ",(0,s.jsx)(n.em,{children:"haut"})," ; ",(0,s.jsx)(n.em,{children:"droite"})," ; ",(0,s.jsx)(n.em,{children:"bas"})," {; ",(0,s.jsx)(n.em,{children:"fen\xeatre"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"gauche"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Coordonn\xe9e gauche de l'int\xe9rieur de la fen\xeatre"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"haut"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Coordonn\xe9e sup\xe9rieure de l'int\xe9rieur de la fen\xeatre"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"droite"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Coordonn\xe9e droite de l'int\xe9rieur de la fen\xeatre"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bas"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Coordonn\xe9e inf\xe9rieure de l'int\xe9rieur de la fen\xeatre"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fen\xeatre"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de la fen\xeatre ou Fen\xeatre de premier plan du process si ce param\xe8tre est omis"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Si omis (d\xe9faut) = passer la fen\xeatre au premier plan",(0,s.jsx)(n.br,{}),"Si pass\xe9 = ne pas changer le plan de la fen\xeatre"]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"SET WINDOW RECT"})," modifie les coordonn\xe9es globales de la fen\xeatre dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence ",(0,s.jsx)(n.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une fen\xeatre ouverte",children:"RefFen"})," dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"fen\xeatre"}),". Si la fen\xeatre n'existe pas, la commande ne fait rien."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,s.jsx)(n.em,{children:"fen\xeatre"}),", ",(0,s.jsx)(n.strong,{children:"SET WINDOW RECT"})," s'applique \xe0 la fen\xeatre de premier plan du process courant."]}),"\n",(0,s.jsx)(n.p,{children:"Ces coordonn\xe9es doivent \xeatre exprim\xe9es relativement au coin sup\xe9rieur gauche de la zone de contenu de la fen\xeatre d'application (sous Windows en mode MDI) ou de l'\xe9cran principal (sous macOS et Windows en mode SDI). Les coordonn\xe9es d\xe9crivent le rectangle correspondant \xe0 la zone de contenu de la fen\xeatre (en excluant les barres de titres et les bordures)."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attention :"})," Utilisez cette commande avec pr\xe9caution, car vous pouvez d\xe9placer une fen\xeatre en-dehors des limites de la fen\xeatre principale (sous Windows) ou de l'\xe9cran (sous Mac OS). Pour \xe9viter cela, vous pouvez utiliser des fonctions telles que ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/screen-width",children:"Screen width"})," et ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/screen-height",children:"Screen height"})," pour bien v\xe9rifier les nouvelles coordonn\xe9es de la fen\xeatre."]}),"\n",(0,s.jsxs)(n.p,{children:["Par d\xe9faut, l\u2019ex\xe9cution de la commande fait automatiquement passer au premier plan la fen\xeatre d\xe9sign\xe9e par le param\xe8tre ",(0,s.jsx)(n.em,{children:"fen\xeatre"})," (lorsque ce param\xe8tre est utilis\xe9). Vous pouvez inactiver ce fonctionnement en passant ",(0,s.jsx)(n.em,{children:"*"}),' en dernier param\xe8tre. Dans ce cas, la commande ne modifie pas le plan initial de la fen\xeatre (coordonn\xe9e "z").']}),"\n",(0,s.jsxs)(n.p,{children:["Cette commande n\u2019affecte pas les objets du formulaire. Si la fen\xeatre contient un formulaire, les objets du formulaire ne sont pas d\xe9plac\xe9s ou redimensionn\xe9s par la commande (quelles que soient leurs propri\xe9t\xe9s). Seule la fen\xeatre est modifi\xe9e. Pour modifier une fen\xeatre de formulaire en tenant compte de ses propri\xe9t\xe9s de redimensionnement et des objets qu\u2019elle contient, vous devez utiliser la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/resize-form-window",children:"RESIZE FORM WINDOW"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/window-list",children:"WINDOW LIST"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"Soit la fen\xeatre suivante :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(168559).A+"",width:"395",height:"284"})}),"\n",(0,s.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de la ligne suivante :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET WINDOW RECT(100;100;300;300)\n"})}),"\n",(0,s.jsx)(n.p,{children:"La fen\xeatre appara\xeet ainsi :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(208740).A+"",width:"208",height:"234"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/convert-coordinates",children:"CONVERT COORDINATES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/drag-window",children:"DRAG WINDOW"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/get-window-rect",children:"GET WINDOW RECT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/resize-form-window",children:"RESIZE FORM WINDOW"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},168559:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/pict39568.fr-5b393892f5a1cea55f39a4922ce8b8a1.png"},208740:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/pict39569.fr-fc2c86427f359c0b2dd35001d31eea05.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(296540);const t={},d=s.createContext(t);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);