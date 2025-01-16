"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99376"],{589713:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/qr-set-borders","title":"QR SET BORDERS","description":"QR SET BORDERS ( zone ; colonne ; ligne ; encadrement ; ligne {; couleur} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-borders.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-borders","permalink":"/docs/fr/20-R7/commands/qr-set-borders","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-borders.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-borders","title":"QR SET BORDERS","slug":"/commands/qr-set-borders","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET AREA PROPERTY","permalink":"/docs/fr/20-R7/commands/qr-set-area-property"},"next":{"title":"QR SET DESTINATION","permalink":"/docs/fr/20-R7/commands/qr-set-destination"}}'),d=r("785893"),i=r("250065");let t={id:"qr-set-borders",title:"QR SET BORDERS",slug:"/commands/qr-set-borders",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function h(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"QR SET BORDERS"})," ( ",(0,d.jsx)(n.em,{children:"zone"})," ; ",(0,d.jsx)(n.em,{children:"colonne"})," ; ",(0,d.jsx)(n.em,{children:"ligne"})," ; ",(0,d.jsx)(n.em,{children:"encadrement"})," ; ",(0,d.jsx)(n.em,{children:"ligne"})," {; ",(0,d.jsx)(n.em,{children:"couleur"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"zone"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"colonne"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Num\xe9ro de colonne"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ligne"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Num\xe9ro de ligne"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"encadrement"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Valeur d'encadrements compos\xe9e"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ligne"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Epaisseur de ligne"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"couleur"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Couleur de ligne"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"QR SET BORDERS"})," permet de d\xe9finir le style d'encadrement d'une cellule sp\xe9cifique."]}),"\n",(0,d.jsxs)(n.p,{children:["Passez dans ",(0,d.jsx)(n.em,{children:"zone"})," la r\xe9f\xe9rence de la zone d'\xe9tat rapide."]}),"\n",(0,d.jsxs)(n.p,{children:["Passez dans ",(0,d.jsx)(n.em,{children:"colonne"})," le num\xe9ro de colonne de la cellule \xe0 encadrer."]}),"\n",(0,d.jsxs)(n.p,{children:["Le param\xe8tre ",(0,d.jsx)(n.em,{children:"ligne"})," contient le num\xe9ro de ligne de la cellule \xe0 encadrer. Vous pouvez passer soit :"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"une valeur enti\xe8re positive pour d\xe9signer la ligne de sous-total correspondante,"}),"\n",(0,d.jsxs)(n.li,{children:["l'une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,d.jsx)(n.em,{children:"QR Lignes pour Propri\xe9t\xe9s"})," :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr detail"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"-2"}),(0,d.jsx)(n.td,{children:"Zone D\xe9tail de l'\xe9tat"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr grand total"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"-3"}),(0,d.jsx)(n.td,{children:"Zone Total g\xe9n\xe9ral"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr title"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"-1"}),(0,d.jsx)(n.td,{children:"Intitul\xe9 de l'\xe9tat"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Le param\xe8tre ",(0,d.jsx)(n.em,{children:"encadrement"})," contient une valeur compos\xe9e permettant d'indiquer la ou les bordures(s) de cellule \xe0 modifier. Passez l'une des constantes du th\xe8me ",(0,d.jsx)(n.em,{children:"QR Encadrements"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr bottom border"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsx)(n.td,{children:"Bordure inf\xe9rieure"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr inside horizontal border"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"32"}),(0,d.jsx)(n.td,{children:"Bordure int\xe9rieure horizontale"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr inside vertical border"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"16"}),(0,d.jsx)(n.td,{children:"Bordure int\xe9rieure verticale"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr left border"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Bordure gauche"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr right border"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"Bordure droite"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr top border"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"Bordure sup\xe9rieure"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Le param\xe8tre ",(0,d.jsx)(n.em,{children:"encadrement"})," peut contenir un cumul de plusieurs valeurs afin de d\xe9signer simultan\xe9ment plusieurs bordures. Par exemple, si vous passez 5 dans ",(0,d.jsx)(n.em,{children:"encadrement"}),", les bordures droite et gauche seront affect\xe9es."]}),"\n",(0,d.jsxs)(n.p,{children:["Le param\xe8tre ",(0,d.jsx)(n.em,{children:"\xe9paisseur"})," permet de sp\xe9cifier l'\xe9paisseur de l'encadrement :"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"0 indique une \xe9paisseur nulle (pas de bordure),"}),"\n",(0,d.jsx)(n.li,{children:"1 indique une \xe9paisseur d'1/4 point,"}),"\n",(0,d.jsx)(n.li,{children:"2 indique une \xe9paisseur d'1/2 point,"}),"\n",(0,d.jsx)(n.li,{children:"3 indique une \xe9paisseur d'1 point,"}),"\n",(0,d.jsx)(n.li,{children:"4 indique une \xe9paisseur de 2 points."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Le param\xe8tre ",(0,d.jsx)(n.em,{children:"couleur"})," permet de d\xe9signer la couleur de l'encadrement :"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["si vous passez une valeur positive, ",(0,d.jsx)(n.em,{children:"couleur"})," d\xe9signe un num\xe9ro de couleur,"]}),"\n",(0,d.jsx)(n.li,{children:"si vous passez 0, la couleur est noire,"}),"\n",(0,d.jsx)(n.li,{children:"si vous passez -1, la couleur esrt inchang\xe9e."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note :"})," Par d\xe9faut, la couleur est noire."]}),"\n",(0,d.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,d.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e.",(0,d.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,d.jsx)(n.em,{children:"colonne"})," est incorrect, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e.",(0,d.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,d.jsx)(n.em,{children:"ligne"})," est incorrect, l\u2019erreur -9853 est g\xe9n\xe9r\xe9e.",(0,d.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,d.jsx)(n.em,{children:"encadrement"})," est incorrect, l\u2019erreur -9854 est g\xe9n\xe9r\xe9e.",(0,d.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,d.jsx)(n.em,{children:"\xe9paisseur"})," est incorrect, l\u2019erreur -9855 est g\xe9n\xe9r\xe9e."]}),"\n",(0,d.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/qr-get-borders",children:"QR GET BORDERS"})}),"\n",(0,d.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"797"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifie les variables"}),(0,d.jsx)(n.td,{children:"error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var s=r(667294);let d={},i=s.createContext(d);function t(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);