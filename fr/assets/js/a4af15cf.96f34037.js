"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27304"],{797112:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/qr-get-borders","title":"QR GET BORDERS","description":"QR GET BORDERS ( zone ; colonne ; ligne ; encadrement ; ligne {; couleur} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-borders.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-borders","permalink":"/docs/fr/commands/qr-get-borders","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-borders.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-borders","title":"QR GET BORDERS","slug":"/commands/qr-get-borders","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get area property","permalink":"/docs/fr/commands/qr-get-area-property"},"next":{"title":"QR Get command status","permalink":"/docs/fr/commands/qr-get-command-status"}}'),s=r("785893"),t=r("250065");let i={id:"qr-get-borders",title:"QR GET BORDERS",slug:"/commands/qr-get-borders",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function h(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR GET BORDERS"})," ( ",(0,s.jsx)(n.em,{children:"zone"})," ; ",(0,s.jsx)(n.em,{children:"colonne"})," ; ",(0,s.jsx)(n.em,{children:"ligne"})," ; ",(0,s.jsx)(n.em,{children:"encadrement"})," ; ",(0,s.jsx)(n.em,{children:"ligne"})," {; ",(0,s.jsx)(n.em,{children:"couleur"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zone"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colonne"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de colonne"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ligne"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de ligne"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"encadrement"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valeur d'encadrement"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ligne"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Epaisseur de trait"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"couleur"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Couleur de l'encadrement"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"QR GET BORDERS"})," retourne les attributs d'encadrement d'une cellule sp\xe9cifique de ",(0,s.jsx)(n.em,{children:"zone"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"zone"})," la r\xe9f\xe9rence de la zone d'\xe9tat rapide."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"colonne"})," le num\xe9ro de colonne de la cellule \xe0 lire."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"ligne"})," contient le num\xe9ro de ligne de la cellule \xe0 lire. Vous pouvez soit :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"passer une valeur enti\xe8re positive pour d\xe9signer la ligne de sous-total correspondante."}),"\n",(0,s.jsxs)(n.li,{children:["passer une des constantes suivantes du th\xe8me ",(0,s.jsx)(n.em,{children:"QR Lignes pour Propri\xe9t\xe9s"})," :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr detail"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"-2"}),(0,s.jsx)(n.td,{children:"Zone D\xe9tail de l'\xe9tat"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr grand total"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"-3"}),(0,s.jsx)(n.td,{children:"Zone Total g\xe9n\xe9ral"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr title"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"-1"}),(0,s.jsx)(n.td,{children:"Intitul\xe9 de l'\xe9tat"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"encadrement"})," permet d'indiquer la bordure de cellule \xe0 lire. Passez l'une des constantes du th\xe8me ",(0,s.jsx)(n.em,{children:"QR Encadrements"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr bottom border"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{children:"Bordure inf\xe9rieure"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr inside horizontal border"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"32"}),(0,s.jsx)(n.td,{children:"Bordure int\xe9rieure horizontale"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr inside vertical border"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsx)(n.td,{children:"Bordure int\xe9rieure verticale"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr left border"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Bordure gauche"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr right border"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Bordure droite"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr top border"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Bordure sup\xe9rieure"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," A la diff\xe9rence de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/qr-set-borders",children:"QR SET BORDERS"}),", ",(0,s.jsx)(n.strong,{children:"QR GET BORDERS"})," n'accepte pas de valeurs cumul\xe9es. Vous devez tester s\xe9par\xe9ment toutes les valeurs pour obtenir une description globale de l'encadrement de la cellule."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"\xe9paisseur"})," retourne l'\xe9paisseur de l'encadrement :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"0 indique une \xe9paisseur nulle (pas de bordure),"}),"\n",(0,s.jsx)(n.li,{children:"1 indique une \xe9paisseur d'1/4 point,"}),"\n",(0,s.jsx)(n.li,{children:"2 indique une \xe9paisseur d'1/2 point,"}),"\n",(0,s.jsx)(n.li,{children:"3 indique une \xe9paisseur d'1 point,"}),"\n",(0,s.jsx)(n.li,{children:"4 indique une \xe9paisseur de 2 points."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"couleur"})," retourne le num\xe9ro de la couleur de la bordure."]}),"\n",(0,s.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,s.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e.",(0,s.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,s.jsx)(n.em,{children:"colonne"})," est incorrect, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e.",(0,s.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,s.jsx)(n.em,{children:"ligne"})," est incorrect, l\u2019erreur -9853 est g\xe9n\xe9r\xe9e.",(0,s.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,s.jsx)(n.em,{children:"encadrement"})," est incorrect, l\u2019erreur -9854 est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/qr-set-borders",children:"QR SET BORDERS"})}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"798"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var d=r(667294);let s={},t=d.createContext(s);function i(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);