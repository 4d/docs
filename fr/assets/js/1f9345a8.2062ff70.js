"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78747"],{711403:function(n,e,r){r.r(e),r.d(e,{default:()=>x,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/qr-get-text-property","title":"QR Get text property","description":"QR Get text property ( zone ; numColonne ; numLigne ; propri\xe9t\xe9 ) : any","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-text-property.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-text-property","permalink":"/docs/fr/commands/qr-get-text-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-text-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-text-property","title":"QR Get text property","slug":"/commands/qr-get-text-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET SORTS","permalink":"/docs/fr/commands/qr-get-sorts"},"next":{"title":"QR GET TOTALS DATA","permalink":"/docs/fr/commands/qr-get-totals-data"}}'),s=r("785893"),d=r("250065");let i={id:"qr-get-text-property",title:"QR Get text property",slug:"/commands/qr-get-text-property",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function h(n){let e={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"QR Get text property"})," ( ",(0,s.jsx)(e.em,{children:"zone"})," ; ",(0,s.jsx)(e.em,{children:"numColonne"})," ; ",(0,s.jsx)(e.em,{children:"numLigne"})," ; ",(0,s.jsx)(e.em,{children:"propri\xe9t\xe9"})," ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Param\xe8tre"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"zone"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"numColonne"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"Num\xe9ro de colonne"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"numLigne"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"Num\xe9ro de ligne"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"propri\xe9t\xe9"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"Num\xe9ro de propri\xe9t\xe9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"R\xe9sultat"}),(0,s.jsx)(e.td,{children:"Text, Integer"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"Valeur de la propri\xe9t\xe9"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["La commande ",(0,s.jsx)(e.strong,{children:"QR Get text property"})," retourne la valeur courante de la ",(0,s.jsx)(e.em,{children:"propri\xe9t\xe9"})," de texte dans la cellule de ",(0,s.jsx)(e.em,{children:"zone"})," d\xe9sign\xe9e par ",(0,s.jsx)(e.em,{children:"numColonne"})," et ",(0,s.jsx)(e.em,{children:"numLigne"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["Passez dans ",(0,s.jsx)(e.em,{children:"zone"})," la r\xe9f\xe9rence de la zone d'\xe9tat rapide."]}),"\n",(0,s.jsxs)(e.p,{children:["Passez dans ",(0,s.jsx)(e.em,{children:"numColonne"})," le num\xe9ro de colonne de la cellule."]}),"\n",(0,s.jsxs)(e.p,{children:["Passez dans ",(0,s.jsx)(e.em,{children:"numLigne"})," la r\xe9f\xe9rence de la ligne de la cellule. Vous pouvez passer soit :"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"une valeur positive d\xe9signant la ligne de sous-total correspondante,"}),"\n",(0,s.jsxs)(e.li,{children:["une des constantes du th\xe8me ",(0,s.jsx)(e.em,{children:"QR Lignes pour Propri\xe9t\xe9s"})," :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Constante"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Valeur"}),(0,s.jsx)(e.th,{children:"Comment"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr detail"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"-2"}),(0,s.jsx)(e.td,{children:"Zone D\xe9tail de l'\xe9tat"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr footer"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"-5"}),(0,s.jsx)(e.td,{children:"Pied de page"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr grand total"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"-3"}),(0,s.jsx)(e.td,{children:"Zone Total g\xe9n\xe9ral"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr header"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"-4"}),(0,s.jsx)(e.td,{children:"En-t\xeate de page"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr title"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"-1"}),(0,s.jsx)(e.td,{children:"Intitul\xe9 de l'\xe9tat"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note :"})," Vous devez passer une valeur dans ",(0,s.jsx)(e.em,{children:"numColonne"})," m\xeame lorsque vous passez -4 ou -5 dans le param\xe8tre ",(0,s.jsx)(e.em,{children:"numLigne"})," (dans ce cas la valeur de ",(0,s.jsx)(e.em,{children:"numColonne"})," est inutilis\xe9e)."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note :"})," Dans les tableaux crois\xe9s, le principe est similaire sauf pour les valeurs des lignes, qui sont toujours positives."]}),"\n",(0,s.jsxs)(e.p,{children:["Passez dans ",(0,s.jsx)(e.em,{children:"propri\xe9t\xe9"})," le num\xe9ro de la propri\xe9t\xe9 de texte \xe0 lire. Vous pouvez utiliser les constantes du th\xe8me ",(0,s.jsx)(e.em,{children:"QR Propri\xe9t\xe9s de texte"}),". Dans le tableau ci-dessous, la colonne Commentaire indique les valeurs pouvant \xeatre retourn\xe9es :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Constante"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Valeur"}),(0,s.jsx)(e.th,{children:"Comment"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"_o_qr font"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"Obsol\xe8te depuis 4D v14R3 (utiliser qr font name)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr alternate background color"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"9"}),(0,s.jsx)(e.td,{children:"Num\xe9ro de couleur de fond altern\xe9e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr background color"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"8"}),(0,s.jsx)(e.td,{children:"Num\xe9ro de couleur de fond"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr bold"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"Attribut gras (0 ou 1)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr font name"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsxs)(e.td,{children:["Nom de police tel que retourn\xe9 par exemple par la commande ",(0,s.jsx)(e.a,{href:"/docs/fr/commands/font-list",children:"FONT LIST"}),"."]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr font size"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"Taille de police en points (9 \xe0 255)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr italic"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"4"}),(0,s.jsx)(e.td,{children:"Attribut italique (0 ou 1)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr justification"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"7"}),(0,s.jsx)(e.td,{children:"Attribut de justification (0 = par d\xe9faut, 1 = gauche, 2 = centre et 3 = droite)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr text color"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"6"}),(0,s.jsx)(e.td,{children:"Num\xe9ro de couleur (Entier long)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr underline"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"5"}),(0,s.jsx)(e.td,{children:"Attribut soulign\xe9 (0 ou 1)"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["Si un num\xe9ro de ",(0,s.jsx)(e.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e.",(0,s.jsx)(e.br,{}),"\nSi le param\xe8tre ",(0,s.jsx)(e.em,{children:"numColonne"})," est incorrect, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e.",(0,s.jsx)(e.br,{}),"\nSi le param\xe8tre ",(0,s.jsx)(e.em,{children:"numLigne"})," est incorrect, l\u2019erreur -9853 est g\xe9n\xe9r\xe9e.",(0,s.jsx)(e.br,{}),"\nSi le param\xe8tre ",(0,s.jsx)(e.em,{children:"propri\xe9t\xe9"})," est incorrect, l\u2019erreur -9854 est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsx)(e.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/docs/fr/commands/qr-set-text-property",children:"QR SET TEXT PROPERTY"})}),"\n",(0,s.jsx)(e.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(e.td,{children:"760"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Thread safe"}),(0,s.jsx)(e.td,{children:"\u2717"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Modifie les variables"}),(0,s.jsx)(e.td,{children:"error"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return i}});var t=r(667294);let s={},d=t.createContext(s);function i(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);