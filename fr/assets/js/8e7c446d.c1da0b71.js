"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69038],{237498:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=r(474848),t=r(28453);const l={id:"qr-set-totals-data",title:"QR SET TOTALS DATA",slug:"/commands/qr-set-totals-data",displayed_sidebar:"docs"},a=void 0,d={id:"commands-legacy/qr-set-totals-data",title:"QR SET TOTALS DATA",description:"QR SET TOTALS DATA ( zone ; numColonne ; numRupture ; op\xe9rateur | valeur )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-totals-data.md",sourceDirName:"commands-legacy",slug:"/commands/qr-set-totals-data",permalink:"/docs/fr/commands/qr-set-totals-data",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-totals-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"qr-set-totals-data",title:"QR SET TOTALS DATA",slug:"/commands/qr-set-totals-data",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR SET TEXT PROPERTY",permalink:"/docs/fr/commands/qr-set-text-property"},next:{title:"QR SET TOTALS SPACING",permalink:"/docs/fr/commands/qr-set-totals-spacing"}},i={},c=[{value:"Description",id:"description",level:4},{value:"Etat en liste",id:"etat-en-liste",level:5},{value:"Etat tableau crois\xe9",id:"etat-tableau-crois\xe9",level:5},{value:"Types de donn\xe9es accept\xe9s",id:"types-de-donn\xe9es-accept\xe9s",level:5},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const n={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR SET TOTALS DATA"})," ( ",(0,s.jsx)(n.em,{children:"zone"})," ; ",(0,s.jsx)(n.em,{children:"numColonne"})," ; ",(0,s.jsx)(n.em,{children:"numRupture"})," ; op\xe9rateur | valeur )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zone"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numColonne"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de colonne"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numRupture"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de rupture"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"op\xe9rateur | valeur"}),(0,s.jsx)(n.td,{children:"Entier long, Cha\xeene"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur pour la cellule ou Contenu de la cellule"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Cette commande ne cr\xe9e pas de sous-total."]}),"\n",(0,s.jsx)(n.h5,{id:"etat-en-liste",children:"Etat en liste"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"QR SET TOTALS DATA"})," permet de d\xe9finir le contenu d'une ligne de rupture sp\xe9cifique (sous-total ou total g\xe9n\xe9ral)."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"zone"})," la r\xe9f\xe9rence de la zone d'\xe9tat rapide."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"numColonne"})," le num\xe9ro de colonne de la cellule que vous souhaitez d\xe9finir."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"numRupture"})," le num\xe9ro de la ligne de rupture \xe0 modifier (sous-total ou total g\xe9n\xe9ral). Pour une ligne de sous-total, ",(0,s.jsx)(n.em,{children:"numRupture"})," correspond au num\xe9ro d'ordre de la rupture. Pour le total g\xe9n\xe9ral, ",(0,s.jsx)(n.em,{children:"numRupture"})," vaut -3 (vous pouvez \xe9galement utiliser la constante ",(0,s.jsx)(n.em,{children:"qr total g\xe9n\xe9ral"})," du th\xe8me ",(0,s.jsx)(n.em,{children:"QR Lignes pour Propri\xe9t\xe9s"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"op\xe9rateur"})," contient la valeur cumul\xe9e de tous les op\xe9rateurs \xe0 placer dans la cellule. Utilisez les constantes du th\xe8me ",(0,s.jsx)(n.em,{children:"QR Op\xe9rateurs"})," pour d\xe9finir ce param\xe8tre :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr average"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr count"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"16"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr max"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr min"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr standard deviation"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"32"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr sum"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous ne souhaitez utiliser aucun op\xe9rateur, passez 0 dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"op\xe9rateur"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous choisissez d'ins\xe9rer du texte dans la cellule, passez-le dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"valeur"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Les param\xe8tres ",(0,s.jsx)(n.em,{children:"op\xe9rateur"})," et ",(0,s.jsx)(n.em,{children:"valeur"})," sont mutuellement exclusifs, vous pouvez passer soit une combinaison de valeurs num\xe9riques, soit du texte."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous souhaitez saisir \xe0 la fois du texte et des op\xe9rateurs, vous pouvez utiliser les codes suivants dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"valeur"})," :",(0,s.jsx)(n.br,{}),"\n- # pour la valeur provoquant la rupture ou le sous-total",(0,s.jsx)(n.br,{}),"\n- ##S sera remplac\xe9 par la somme.",(0,s.jsx)(n.br,{}),"\n- ##A sera remplac\xe9 par la moyenne.",(0,s.jsx)(n.br,{}),"\n- ##C sera remplac\xe9 par le nombre",(0,s.jsx)(n.br,{}),"\n- ##X sera remplac\xe9 par le maximum.",(0,s.jsx)(n.br,{}),"\n- ##N sera remplac\xe9 par le minimum.",(0,s.jsx)(n.br,{}),"\n- ##D sera remplac\xe9 par l'\xe9cart type.",(0,s.jsx)(n.br,{}),"\n- ##xx, o\xf9 xx est un num\xe9ro de colonne. Ce code sera remplac\xe9 par la valeur de la colonne d\xe9sign\xe9e, dans son propre formatage. Si la colonne n'existe pas, le code appara\xeet dans l'\xe9tat."]}),"\n",(0,s.jsx)(n.h5,{id:"etat-tableau-crois\xe9",children:"Etat tableau crois\xe9"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"QR SET TOTALS DATA"})," vous permet de d\xe9finir le contenu d'une cellule sp\xe9cifique."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"zone"})," la r\xe9f\xe9rence de la zone d'\xe9tat rapide."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"numColonne"})," le num\xe9ro de colonne de la cellule que vous souhaitez d\xe9finir."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"numRupture"})," le num\xe9ro de ligne de la cellule que vous souhaitez d\xe9finir."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"op\xe9rateur"})," contient la valeur cumul\xe9e de tous les op\xe9rateurs \xe0 placer dans la cellule. Utilisez les constantes du th\xe8me ",(0,s.jsx)(n.em,{children:"QR Op\xe9rateurs"})," pour d\xe9finir ce param\xe8tre (cf. paragraphe pr\xe9c\xe9dent).",(0,s.jsx)(n.br,{}),"\nLe param\xe8tre alternatif ",(0,s.jsx)(n.em,{children:"valeur"})," permet de d\xe9finir le texte \xe0 ins\xe9rer dans la cellule."]}),"\n",(0,s.jsxs)(n.p,{children:["L'illustration suivante pr\xe9cise la mani\xe8re dont les param\xe8tres ",(0,s.jsx)(n.em,{children:"numColonne"})," et ",(0,s.jsx)(n.em,{children:"numRupture"})," sont combin\xe9s dans un tableau crois\xe9 :"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(148743).A+"",width:"397",height:"147"})}),"\n",(0,s.jsx)(n.h5,{id:"types-de-donn\xe9es-accept\xe9s",children:"Types de donn\xe9es accept\xe9s"}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez passer deux types de donn\xe9es : des libell\xe9s et des op\xe9rateurs."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Libell\xe9s",(0,s.jsx)(n.br,{}),"\nUn libell\xe9 est une cha\xeene de caract\xe8res pass\xe9e via le param\xe8tre ",(0,s.jsx)(n.em,{children:"valeur"}),". Cette valeur ne peut \xeatre utilis\xe9e qu'avec les cellules suivantes : ",(0,s.jsx)(n.em,{children:"numColonne=3"}),",",(0,s.jsx)(n.em,{children:"numRupture=1"})," et ",(0,s.jsx)(n.em,{children:"numColonne=1"}),",",(0,s.jsx)(n.em,{children:"numRupture=3"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Op\xe9rateurs",(0,s.jsx)(n.br,{}),"\nUn op\xe9rateur ou un cumul d'op\xe9rateurs (cf. paragraphe pr\xe9c\xe9dent) peut \xeatre pass\xe9 via le param\xe8tre ",(0,s.jsx)(n.em,{children:"op\xe9rateur"})," aux cellules suivantes :",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"numColonne=2,numRupture=2"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"numColonne=3,numRupture=2"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"numColonne=2,numRupture=3"}),(0,s.jsx)(n.br,{}),"\nNotez que ces deux derni\xe8res valeurs affectent \xe9galement la cellule (colonne 3,ligne 3). En effet, si par exemple un calcul est effectu\xe9 dans la cellule (colonne 2,ligne 3), le contenu de la cellule (colonne 3/ligne 3) sera modifi\xe9 en cons\xe9quence."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,s.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e.",(0,s.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,s.jsx)(n.em,{children:"numColonne"})," est incorrect, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e.",(0,s.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,s.jsx)(n.em,{children:"numRupture"})," est incorrect, l\u2019erreur -9853 est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/qr-get-totals-data",children:"QR GET TOTALS DATA"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},148743:(e,n,r)=>{r.d(n,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var s=r(296540);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);