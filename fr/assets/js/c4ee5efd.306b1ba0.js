"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14843"],{500942:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/find-in-list","title":"Find in list","description":"Find in list ( { ;} liste ; valeur ; port\xe9e {; tabEl\xe9ments {; }} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/find-in-list.md","sourceDirName":"commands-legacy","slug":"/commands/find-in-list","permalink":"/docs/fr/commands/find-in-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffind-in-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"find-in-list","title":"Find in list","slug":"/commands/find-in-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM LIST","permalink":"/docs/fr/commands/delete-from-list"},"next":{"title":"GET LIST ITEM","permalink":"/docs/fr/commands/get-list-item"}}'),i=s("785893"),r=s("250065");let l={id:"find-in-list",title:"Find in list",slug:"/commands/find-in-list",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Find in list"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"liste"})," ; ",(0,i.jsx)(n.em,{children:"valeur"})," ; ",(0,i.jsx)(n.em,{children:"port\xe9e"})," {; ",(0,i.jsx)(n.em,{children:"tabEl\xe9ments"})," {; *}} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, liste est un nom d\u2019objet (cha\xeene) Si omis, liste est un num\xe9ro de r\xe9f\xe9rence de liste"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"liste"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste (si * omis) ou Nom d'objet de type liste (si * pass\xe9)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"valeur"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valeur \xe0 rechercher"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"port\xe9e"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"0=Liste principale, 1=Sous-listes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tabEl\xe9ments"}),(0,i.jsx)(n.td,{children:"Integer array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"- Si 2e * omis : tableau des positions des \xe9l\xe9ments trouv\xe9s - Si 2e * pass\xe9 : tableau des num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments trouv\xe9s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"- Si omis : utiliser la position des \xe9l\xe9ments - Si pass\xe9 : utiliser le num\xe9ro de r\xe9f\xe9rence des \xe9l\xe9ments"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"- Si 2e * omis : position de l\u2019\xe9l\xe9ment trouv\xe9 - Si 2e * pass\xe9 : num\xe9ro de r\xe9f\xe9rence de l\u2019\xe9l\xe9ment trouv\xe9"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"Find in list"})," retourne la position ou la r\xe9f\xe9rence du premier \xe9l\xe9ment de ",(0,i.jsx)(n.em,{children:"liste"})," qui \xe9quivaut \xe0 la cha\xeene pass\xe9e dans ",(0,i.jsx)(n.em,{children:"valeur"}),". Si plusieurs \xe9l\xe9ments sont trouv\xe9s, la fonction peut \xe9galement remplir le tableau ",(0,i.jsx)(n.em,{children:"tabEl\xe9ments"})," avec la position ou la r\xe9f\xe9rence de chaque \xe9l\xe9ment."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le premier param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"liste"})," est un nom d\u2019objet (cha\xeene) correspondant \xe0 une repr\xe9sentation de liste dans le formulaire. Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"liste"})," est une r\xe9f\xe9rence de liste hi\xe9rarchique (",(0,i.jsx)(n.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"R\xe9fListe"}),"). Si vous utilisez une seule repr\xe9sentation de liste ou travaillez avec les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments (le second ",(0,i.jsx)(n.em,{children:"*"})," est omis), vous pouvez utiliser indiff\xe9remment l\u2019une ou l\u2019autre syntaxe. En revanche, si vous utilisez plusieurs repr\xe9sentations d\u2019une m\xeame liste et travaillez avec les positions des \xe9l\xe9ments (le second ",(0,i.jsx)(n.em,{children:"*"})," est pass\xe9), la syntaxe bas\xe9e sur le nom d\u2019objet est requise car la position des \xe9l\xe9ments peut varier d'une repr\xe9sentation \xe0 l'autre."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Si vous utilisez le caract\xe8re @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes r\xe9pondant \xe0 ce nom, la commande ",(0,i.jsx)(n.strong,{children:"Find in list"})," s'appliquera au premier objet dont le nom correspond."]}),"\n",(0,i.jsxs)(n.p,{children:["Le second param\xe8tre ",(0,i.jsx)(n.em,{children:"*"})," vous permet d\u2019indiquer si vous souhaitez travailler avec des positions courantes d\u2019\xe9l\xe9ments (dans ce cas, ce param\xe8tre doit \xeatre omis) ou des r\xe9f\xe9rences absolues d\u2019\xe9l\xe9ments (dans ce cas, il doit \xeatre pass\xe9)."]}),"\n",(0,i.jsxs)(n.p,{children:["Passez dans ",(0,i.jsx)(n.em,{children:"valeur"})," la cha\xeene de caract\xe8res \xe0 rechercher. La recherche sera du type \u201Cest exactement\u201D, c\u2019est-\xe0-dire que la recherche de \u201Cbois\u201Dne trouvera pas \u201Cboissons\u201D. Toutefois, vous pouvez utiliser le caract\xe8re @ pour d\xe9finir des recherches du type \u201Ccommence par\u201D, \u201Cse termine par\u201D ou \u201Ccontient\u201D."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"port\xe9e"})," vous permet de d\xe9finir si la recherche doit porter uniquement sur le premier niveau de la ",(0,i.jsx)(n.em,{children:"liste"})," ou si elle doit inclure toutes ses sous-listes. Passez 0 pour concentrer la recherche sur le premier niveau de la liste et 1 pour l\u2019\xe9tendre \xe0 toutes les sous-listes."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous souhaitez conna\xeetre la position ou le num\xe9ro de tous les \xe9l\xe9ments correspondant \xe0 ",(0,i.jsx)(n.em,{children:"valeur"}),", passez un tableau d\u2019entiers longs dans le param\xe8tre facultatif ",(0,i.jsx)(n.em,{children:"tabEl\xe9ments"}),". Si n\xe9cessaire, le tableau sera cr\xe9\xe9 et redimensionn\xe9 par la commande. La commande remplira le tableau avec les positions (si le second ",(0,i.jsx)(n.em,{children:"*"})," est omis) ou les num\xe9ros de r\xe9f\xe9rence (si le second ",(0,i.jsx)(n.em,{children:"*"})," est pass\xe9) des \xe9l\xe9ments trouv\xe9s."]}),"\n",(0,i.jsx)(n.p,{children:"Les positions sont exprim\xe9es relativement \xe0 l\u2019\xe9l\xe9ment sup\xe9rieur de la liste principale, en tenant compte de l\u2019\xe9tat courant d\xe9ploy\xe9/contract\xe9 de la liste et de ses sous-listes."}),"\n",(0,i.jsxs)(n.p,{children:["Si aucun \xe9l\xe9ment ne correspond \xe0 la ",(0,i.jsx)(n.em,{children:"valeur"})," recherch\xe9e, la fonction retourne 0 et le tableau ",(0,i.jsx)(n.em,{children:"tabEl\xe9ments"})," est retourn\xe9 vide."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Soit la liste hi\xe9rarchique suivante :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(398927).Z+"",width:"164",height:"353"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$vlItemPos:=Find in list(hList;"P@";1;$arrPos)\n\xa0\xa0//$vlItemPos vaut 5\n\xa0\xa0//$arrPos{1} vaut 5, $arrPos{2} vaut 17 et $arrPos{3} vaut 19\n\xa0$vlItemRef:=Find in list(hList;"P@";1;$arrRefs;*)\n\xa0\xa0//$vlItemRef vaut 7\n\xa0\xa0//$arrRefs{1} vaut 7, $arrRefs{2} vaut 18 et $arrRefs{3} vaut 23\n\xa0$vlItemPos:=Find in list(hList;"Date";1;$arrPos)\n\xa0\xa0//$vlItemPos vaut 9\n\xa0\xa0//$arrPos{1} vaut 9\n\xa0$vlItemRef:=Find in list(hList;"Date";1;$arrRefs;*)\n\xa0\xa0//$vlItemRef vaut 11\n\xa0\xa0//$arrRefs{1} vaut 11\n\xa0$vlItemPos:=Find in list(hList;"Date";0;*)\n\xa0\xa0//$vlItemPos vaut 0`\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},398927:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict22420.fr-e15ed1c13f64eb78442c9b1cb2ba1ef2.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);