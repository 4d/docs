"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46739"],{384680:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>r});var t=JSON.parse('{"id":"ViewPro/commands/vp-set-sheet-options","title":"VP SET SHEET OPTIONS","description":"VP SET SHEET OPTIONS ( vpAreaName Object { ; sheet : Integer}  )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-sheet-options.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-sheet-options","permalink":"/docs/fr/ViewPro/commands/vp-set-sheet-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-sheet-options.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-sheet-options","title":"VP SET SHEET OPTIONS"},"sidebar":"docs","previous":{"title":"VP SET SHEET NAME","permalink":"/docs/fr/ViewPro/commands/vp-set-sheet-name"},"next":{"title":"VP SET SHOW PRINT LINES","permalink":"/docs/fr/ViewPro/commands/vp-set-show-print-lines"}}'),o=s("785893"),i=s("250065");let l={id:"vp-set-sheet-options",title:"VP SET SHEET OPTIONS"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP SET SHEET OPTIONS"})," ( ",(0,o.jsx)(n.em,{children:"vpAreaName"})," : Text; ",(0,o.jsx)(n.em,{children:"sheetOptions"})," : Object { ; ",(0,o.jsx)(n.em,{children:"sheet"})," : Integer}  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tres"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpAreaName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Nom de la zone 4D View Pro"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sheetOptions"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Option(s) de la feuille \xe0 d\xe9finir"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sheet"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["La commande ",(0,o.jsx)(n.code,{children:"VP SET SHEET OPTIONS"})," permet de d\xe9finir diff\xe9rentes options de feuille de la zone ",(0,o.jsx)(n.em,{children:"vpAreaName"})," ."]}),"\n",(0,o.jsxs)(n.p,{children:["Passez le nom de la zone 4D View Pro dans ",(0,o.jsx)(n.em,{children:"vpAreaName"}),". Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,o.jsxs)(n.p,{children:["Passez un objet contenant les options \xe0 d\xe9finir dans le param\xe8tre ",(0,o.jsx)(n.em,{children:"sheetOptions"}),". Pour consulter la liste compl\xe8te des options disponibles, consultez le paragraphe ",(0,o.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#sheet-options",children:"Options feuille"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Dans le param\xe8tre optionnel ",(0,o.jsx)(n.em,{children:"sheet"}),", vous pouvez d\xe9signer une feuille sp\xe9cifique (la num\xe9rotation commence \xe0 z\xe9ro). Si le param\xe8tre est omis, la feuille courante est utilis\xe9e par d\xe9faut. Vous pouvez s\xe9lectionner explicitement la feuille courante \xe0 l'aide de la constante suivante :"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,o.jsx)(n.p,{children:"Vous souhaitez prot\xe9ger toutes les cellules \xe0 l'exception de la plage C5:D10 :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'// Activer la protection sur la feuille courante\nvar $options : Object\n  \n$options:=New object\n$options.isProtected:=True\nVP SET SHEET OPTIONS("ViewProArea";$options)\n  \n// marquer les cellules C5:D10 comme \'d\xe9verrouill\xe9es\'\nVP SET CELL STYLE(VP Cells("ViewProArea";2;4;2;6);New object("locked";False))\n'})}),"\n",(0,o.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,o.jsx)(n.p,{children:"Vous souhaitez prot\xe9ger votre document pendant que vos utilisateurs redimensionnent les lignes et colonnes :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"var $options : Object\n\n$options:=New object\n// Activer la protection\n$options.isProtected:=True\n$options.protectionOptions:=New object\n// Permettre \xe0 l'utilisateur de redimensionner les lignes\n$options.protectionOptions.allowResizeRows=True;\n// Permettre \xe0 l'utilisateur de redimensionner les colonnes\n$options.protectionOptions.allowResizeColumns=True;\n\n// Appliquer la protection \xe0 la feuille courante\nVP SET SHEET OPTIONS(\"ViewProArea\";$options)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,o.jsx)(n.p,{children:"Vous souhaitez personnaliser la couleur des onglets, des lignes fig\xe9es, du quadrillage, du fond de la s\xe9lection et de la bordure de la s\xe9lection :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'var $options : Object\n   \n$options:=New object\n// Personnaliser la couleur de l\'onglet de la feuille 1\n$options.sheetTabColor:="Black"\n$options.gridline:=New object("color";"Purple")\n$options.selectionBackColor:="rgb(255,128,0,0.4)"\n$options.selectionBorderColor:="Yellow"\n$options.frozenlineColor:="Gold"\n   \nVP SET SHEET OPTIONS("ViewProArea";$options;0)\n \n// Personnaliser la couleur de l\'onglet de la feuille 2\n$options.sheetTabColor:="red"\n   \nVP SET SHEET OPTIONS("ViewProArea";$options;1)\n \n// Personnaliser la couleur de l\'onglet de la feuille 3\n$options.sheetTabColor:="blue"\n  \nVP SET SHEET OPTIONS("ViewProArea";$options;2)\n'})}),"\n",(0,o.jsx)(n.p,{children:"R\xe9sultat:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(533330).Z+"",width:"880",height:"274"})}),"\n",(0,o.jsx)(n.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,o.jsx)(n.p,{children:"Vous souhaitez masquer le quadrillage et les en-t\xeates des lignes et colonnes."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'var $options : Object\n  \n$options:=New object\n$options.gridline:=New object()\n$options.gridline.showVerticalGridline:=False\n$options.gridline.showHorizontalGridline:=False\n$options.rowHeaderVisible:=False\n$options.colHeaderVisible:=False\n  \nVP SET SHEET OPTIONS("ViewProArea";$options)\n'})}),"\n",(0,o.jsx)(n.p,{children:"R\xe9sultat:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(250459).Z+"",width:"612",height:"422"})}),"\n",(0,o.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#sheet-options",children:"4D View Pro sheet options"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-sheet-options",children:"VP Get sheet options"})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},533330:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpSetSheetOptions1-96730ac48f5cd59db7184fac7e74ffe7.PNG"},250459:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpSetSheetOptions2-596c33f630f32c68dc3da440cbd1349f.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var t=s(667294);let o={},i=t.createContext(o);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);