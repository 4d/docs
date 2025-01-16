"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51381"],{929541:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/append-to-list","title":"APPEND TO LIST","description":"APPEND TO LIST ( liste ; libell\xe9El\xe9ment ; r\xe9fEl\xe9ment {; sous_Liste ; d\xe9ploy\xe9e} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/append-to-list.md","sourceDirName":"commands-legacy","slug":"/commands/append-to-list","permalink":"/docs/fr/commands/append-to-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-to-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"append-to-list","title":"APPEND TO LIST","slug":"/commands/append-to-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Hierarchical Lists","permalink":"/docs/fr/category/hierarchical-lists"},"next":{"title":"CLEAR LIST","permalink":"/docs/fr/commands/clear-list"}}'),l=s("785893"),r=s("250065");let i={id:"append-to-list",title:"APPEND TO LIST",slug:"/commands/append-to-list",displayed_sidebar:"docs"},o=void 0,a={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"APPEND TO LIST"})," ( ",(0,l.jsx)(n.em,{children:"liste"})," ; ",(0,l.jsx)(n.em,{children:"libell\xe9El\xe9ment"})," ; ",(0,l.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," {; sous_Liste ; ",(0,l.jsx)(n.em,{children:"d\xe9ploy\xe9e"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"liste"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"libell\xe9El\xe9ment"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Libell\xe9 du nouvel \xe9l\xe9ment"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"r\xe9fEl\xe9ment"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence unique du nouvel \xe9l\xe9ment"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"sous_Liste"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Sous-liste optionnelle \xe0 rattacher au nouvel \xe9l\xe9ment"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"d\xe9ploy\xe9e"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Indique si la sous-liste doit \xeatre d\xe9ploy\xe9e ou non"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"APPEND TO LIST"})," ajoute un nouvel \xe9l\xe9ment \xe0 la liste hi\xe9rarchique dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"liste"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Vous passez le libell\xe9 de l'\xe9l\xe9ment dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"libell\xe9El\xe9ment"}),". Vous pouvez passer une expression de type Alpha ou Texte, pouvant contenir jusqu'\xe0 2 milliards de caract\xe8res. A compter de 4D v16 R4, si l'\xe9l\xe9ment est associ\xe9 \xe0 une action standard, vous pouvez passer la constante ak standard action title dans ",(0,l.jsx)(n.em,{children:"libell\xe9El\xe9ment"})," pour utiliser automatiquement le nom de l'action traduit. Pour plus d'informations, veuillez vous reporter \xe0 la section ",(0,l.jsx)(n.em,{children:"Actions standard"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Vous passez le num\xe9ro de r\xe9f\xe9rence unique de l'\xe9l\xe9ment (de type Entier long) dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"r\xe9fEl\xe9ment"}),". M\xeame si nous qualifions ce num\xe9ro de r\xe9f\xe9rence d'\xe9l\xe9ment comme unique, vous pouvez en r\xe9alit\xe9 passer la valeur que vous voulez. Reportez-vous \xe0 la section ",(0,l.jsx)(n.em,{children:"Gestion des listes hi\xe9rarchiques"})," pour plus d'informations sur le param\xe8tre ",(0,l.jsx)(n.em,{children:"r\xe9fEl\xe9ment"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous souhaitez \xe9galement que l'\xe9l\xe9ment comporte des sous-\xe9l\xe9ments, passez un num\xe9ro de r\xe9f\xe9rence de liste valide dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"sous_Liste"}),". Dans ce cas, vous devez \xe9galement passer le param\xe8tre ",(0,l.jsx)(n.em,{children:"d\xe9ploy\xe9e"}),". Passez Vrai ou Faux dans ce param\xe8tre pour que cette sous-liste s'affiche respectivement d\xe9ploy\xe9e ou contract\xe9e."]}),"\n",(0,l.jsxs)(n.p,{children:["La r\xe9f\xe9rence de la liste que vous passez dans ",(0,l.jsx)(n.em,{children:"sous_Liste"})," doit \xeatre une liste existante. Elle peut comporter un seul niveau ou contenir elle-m\xeame des sous-listes. Si vous ne voulez pas rattacher de sous-liste au nouvel \xe9l\xe9ment, omettez le param\xe8tre ou passez 0. Si vous passez le param\xe8tre ",(0,l.jsx)(n.em,{children:"sous_Liste"})," et ne passez pas le param\xe8tre ",(0,l.jsx)(n.em,{children:"d\xe9ploy\xe9e"}),", la sous-liste appara\xeet par d\xe9faut contract\xe9e."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Conseils :"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Pour ins\xe9rer un nouvel \xe9l\xe9ment dans une liste, utilisez ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/insert-in-list",children:"INSERT IN LIST"}),". Pour modifier le libell\xe9 d'un \xe9l\xe9ment existant ou sa sous-liste, ainsi que son \xe9tat d\xe9ploy\xe9/contract\xe9, utilisez ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/set-list-item",children:"SET LIST ITEM"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Pour changer l'apparence de l'\xe9l\xe9ment ajout\xe9, utilisez ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:"Voici une vue partielle de la structure d'une base :"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(857306).Z+"",width:"374",height:"198"})}),"\n",(0,l.jsx)(n.p,{children:"Les tables [D\xe9partements] et [Employ\xe9s] contiennent les enregistrements suivants :"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(415565).Z+"",width:"348",height:"98"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(178163).Z+"",width:"346",height:"168"})}),"\n",(0,l.jsxs)(n.p,{children:["Vous voulez utiliser une liste hi\xe9rarchique, appel\xe9e ",(0,l.jsx)(n.em,{children:"hlList"}),", qui affiche les d\xe9partements, et pour chaque d\xe9partement, une sous-liste contenant les employ\xe9s travaillant dans ce d\xe9partement. La m\xe9thode objet de ",(0,l.jsx)(n.em,{children:"hlList"})," est la suivante:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode objet Liste hi\xe9rarchique hlList\n\xa0\n\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var hlList;$hSousListe;$vlD\xe9partement;$vlEmploy\xe9;$vlD\xe9partementID : Integer\n\xa0\xa0// Cr\xe9er une nouvelle liste hi\xe9rarchique vide\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hlList:=New list\n\xa0\xa0// S\xe9lectionner tous les enregistrements de la table [D\xe9partements]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALL RECORDS([D\xe9partements])\n\xa0\xa0// For each D\xe9partement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlDepartement;1;Records in selection([D\xe9partements]))\n\xa0\xa0// S\xe9lectionner les employ\xe9s de ce d\xe9partement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RELATE MANY([D\xe9partements]Nom)\n\xa0\xa0// Combien sont-ils?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbEmploy\xe9s:=Records in selection([Employ\xe9s])\n\xa0\xa0// Y a-t-il au moins un employ\xe9 dans ce d\xe9partement?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbEmploy\xe9s>0)\n\xa0\xa0// Cr\xe9er une sous-liste pour l'\xe9l\xe9ment D\xe9partement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$hSousListe:=New list\n\xa0\xa0// For each Employ\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlEmploy\xe9;1;Records in selection([Employ\xe9s]))\n\xa0\xa0// Ajouter l'\xe9l\xe9ment Employ\xe9 \xe0 la sous-liste\n\xa0\xa0// Noter que le champ ID de l'enregistrement [Employ\xe9s] est pass\xe9 comme num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO LIST($hSousListe;[Employ\xe9s]Nom+\", \"+[Employ\xe9s]Pr\xe9nom;[Employ\xe9s]ID)\n\xa0\xa0// Aller \xe0 l'enregistrement [Employ\xe9s] suivant\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Employ\xe9s])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Pas d'Employ\xe9, pas de sous-liste pour l'\xe9l\xe9ment D\xe9partement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$hSousListe:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0// Ajouter l'\xe9l\xe9ment D\xe9partement \xe0 la liste principale\n\xa0\xa0// Notez que le champ ID de l'enregistrement [D\xe9partements] est pass\xe9 comme num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment. Le bit #31 de cet ID est forc\xe9 \xe0 1.\n\xa0\xa0// Ainsi nous pourrons faire la distinction entre les \xe9l\xe9ments D\xe9partement et Employ\xe9s (cf. note ci-dessous)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO LIST(hlList;[D\xe9partements]Nom;[D\xe9partements]ID?+31;$hSousListe;$hSousListe#0)\n\xa0\xa0// Passer l'\xe9l\xe9ment D\xe9partement en gras pour renforcer la hi\xe9rarchie de la liste\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST ITEM PROPERTIES(hlList;0;False;Bold;0)\n\xa0\xa0// Aller au d\xe9partement suivant\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([D\xe9partements])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Trier toute la liste en ordre croissant\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SORT LIST(hlList;>)\n\xa0\xa0// Afficher la liste en style Windows et forcer la hauteur de ligne minimale \xe0 14 Pts\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST PROPERTIES(hlList;Ala Windows;Windows node;14)\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0// La liste n'est plus utile. N'oubliez pas de l'effacer !\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR LIST(hlList;*)\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Double Clicked)\n\xa0\xa0// Il y a eu un double-clic\n\xa0\xa0// Obtenir la position de l'\xe9l\xe9ment s\xe9lectionn\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vl\xc9l\xe9mentPos:=Selected list items(hlList)\n\xa0\xa0// A toutes fins utiles, v\xe9rifier la position\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vl\xc9l\xe9mentPos\xa0#\xa00)\n\xa0\xa0// Obtenir l'information de l'\xe9l\xe9ment de la liste\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET LIST ITEM(hlList;$vl\xc9l\xe9mentPos;$vl\xc9l\xe9mentRef;$vs\xc9l\xe9mentText;$vl\xc9l\xe9mentSousListe;$vb\xc9l\xe9mentD\xe9ploy\xe9)\n\xa0\xa0// Cet \xe9l\xe9ment est-il l'\xe9l\xe9ment d'un D\xe9partement?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vl\xc9l\xe9mentRef\xa0??\xa031)\n\xa0\xa0// Si oui, c'est un double-clic sur un \xe9l\xe9ment D\xe9partement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT(\"Vous avez double-cliqu\xe9 sur l'\xe9l\xe9ment D\xe9partement \"+Char(34)+$vs\xc9l\xe9mentText+Char(34)+\".\")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Else, c'est un double-clic sur un \xe9l\xe9ment Employ\xe9. Avec l'ID de l'\xe9l\xe9ment parent, trouver l'enregistrement [D\xe9partements]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlD\xe9partementID:=List item parent(hlList;$vl\xc9l\xe9mentRef)?-31\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([D\xe9partements];[D\xe9partements]ID=$vlD\xe9partementID)\n\xa0\xa0// Indiquer o\xf9 l'Employ\xe9 travaille et de qui il d\xe9pend\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT(\"Vous avez double-cliqu\xe9 sur l'\xe9l\xe9ment Employ\xe9 \"+Char(34)+$vs\xc9l\xe9mentText+Char(34)+\" qui travaille dans le D\xe9partement \"+Char(34)+[D\xe9partements]Nom+Char(34)+\" dont le responsable est \"+Char(34)+[D\xe9partements]Responsable+Char(34)+\".\")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0End case\n\xa0\n\xa0\xa0// Note : 4D peut stocker jusqu'\xe0 1 milliard d'enregistrements par table. Dans notre exemple, nous utilisons le bit #31 de l'octet sup\xe9rieur inutilis\xe9\n\xa0\xa0// pour diff\xe9rencier les \xe9l\xe9ments des Employ\xe9s des D\xe9partements.\n"})}),"\n",(0,l.jsx)(n.p,{children:"Dans cet exemple, il y a une seule raison d'\xe9tablir une distinction entre les \xe9l\xe9ments D\xe9partements et les \xe9l\xe9ments Employ\xe9s :"}),"\n",(0,l.jsx)(n.p,{children:"1. Nous stockons des ID d'enregistrements dans les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments. En cons\xe9quence, nous avons toutes les chances de rencontrer des \xe9l\xe9ments D\xe9partements dont les num\xe9ros de r\xe9f\xe9rence sont les m\xeames que ceux des \xe9l\xe9ments Employ\xe9s."}),"\n",(0,l.jsxs)(n.p,{children:["2. Nous utilisons la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/list-item-parent",children:"List item parent"})," pour r\xe9cup\xe9rer le parent de l'\xe9l\xe9ment s\xe9lectionn\xe9. Si nous cliquons sur un \xe9l\xe9ment Employ\xe9s dont le num\xe9ro d'ID associ\xe9 est 10, et s'il existe aussi un \xe9l\xe9ment D\xe9partements qui a le num\xe9ro 10, l'\xe9l\xe9ment D\xe9partements sera trouv\xe9 en premier par ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/list-item-parent",children:"List item parent"})," quand cette fonction passera la liste en revue pour rep\xe9rer l'\xe9l\xe9ment avec le num\xe9ro de r\xe9f\xe9rence que nous passons. La commande retournera le parent de l'\xe9l\xe9ment D\xe9partements et non celui de l'\xe9l\xe9ment Employ\xe9s."]}),"\n",(0,l.jsx)(n.p,{children:"C'est pourquoi nous avons choisi des num\xe9ros de r\xe9f\xe9rence d'\xe9l\xe9ments uniques, non pas pour des questions de principe, mais parce que nous devions diff\xe9rencier les \xe9l\xe9ments de D\xe9partements et d'Employ\xe9s."}),"\n",(0,l.jsx)(n.p,{children:"Dans le formulaire en ex\xe9cution, la liste appara\xeetra ainsi :"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(753417).Z+"",width:"271",height:"257"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Cet exemple est utile dans le cadre de la gestion de l'interface utilisateur, si vous manipulez un nombre limit\xe9 d'enregistrements. Souvenez-vous que les listes sont conserv\xe9es en m\xe9moire ; donc, ne construisez pas d'interfaces utilisateur exploitant des listes hi\xe9rarchiques comportant des millions d'\xe9l\xe9ments."]}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/commands/insert-in-list",children:"INSERT IN LIST"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/set-list-item",children:"SET LIST ITEM"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,l.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"376"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},857306:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict334094.fr-cbfcd01bdd76df2ba62c827e4139cca0.png"},415565:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict334096.fr-b15b278962ea823f8db8c47451ec282c.png"},178163:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict334098.fr-62c79d884c68e70502b99b39c427ec53.png"},753417:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict334100.fr-765c8df1e2f830c79764bd0a6b83dbeb.png"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let l={},r=t.createContext(l);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);