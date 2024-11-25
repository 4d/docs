"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36823"],{285589:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>o,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/get-list-item","title":"GET LIST ITEM","description":"GET LIST ITEM ( { ;} liste ; positionEl\xe9m |  ; r\xe9fEl\xe9ment ; libell\xe9El\xe9ment {; sous_Liste ; d\xe9ploy\xe9e} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-list-item.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item","permalink":"/docs/fr/commands/get-list-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-list-item","title":"GET LIST ITEM","slug":"/commands/get-list-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Find in list","permalink":"/docs/fr/commands/find-in-list"},"next":{"title":"Get list item font","permalink":"/docs/fr/commands/get-list-item-font"}}'),i=n("785893"),l=n("250065");let r={id:"get-list-item",title:"GET LIST ITEM",slug:"/commands/get-list-item",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"GET LIST ITEM"})," ( {* ;} ",(0,i.jsx)(s.em,{children:"liste"})," ; positionEl\xe9m | * ; ",(0,i.jsx)(s.em,{children:"r\xe9fEl\xe9ment"})," ; ",(0,i.jsx)(s.em,{children:"libell\xe9El\xe9ment"})," {; sous_Liste ; ",(0,i.jsx)(s.em,{children:"d\xe9ploy\xe9e"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"*"}),(0,i.jsx)(s.td,{children:"Op\xe9rateur"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Si sp\xe9cifi\xe9, liste est un nom d'objet (cha\xeene) Si omis, liste est une r\xe9f\xe9rence de liste"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"liste"}),(0,i.jsx)(s.td,{children:"Integer, Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste (si * omis) ou Nom d'objet de type liste (si * pass\xe9)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"positionEl\xe9m | *"}),(0,i.jsx)(s.td,{children:"Op\xe9rateur, Entier long"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Position de l'\xe9l\xe9ment dans la ou les liste(s) d\xe9ploy\xe9e(s)/contract\xe9e(s) ou * pour l\u2018\xe9l\xe9ment courant de la liste"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"r\xe9fEl\xe9ment"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"libell\xe9El\xe9ment"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Libell\xe9 de l'\xe9l\xe9ment"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"sous_Liste"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de sous-liste (s'il y en a)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"d\xe9ploy\xe9e"}),(0,i.jsx)(s.td,{children:"Boolean"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Si une sous-liste est rattach\xe9e \xe0 l'\xe9l\xe9ment : Vrai = la sous-liste est d\xe9ploy\xe9e Faux = la sous-liste est contract\xe9e"})]})]})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"GET LIST ITEM"})," retourne des informations sur l'\xe9l\xe9ment d\xe9sign\xe9 par le param\xe8tre ",(0,i.jsx)(s.em,{children:"positionEl\xe9m"})," de la liste dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence ou le nom d'objet dans ",(0,i.jsx)(s.em,{children:"liste"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Si vous passez le premier param\xe8tre optionnel ",(0,i.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(s.em,{children:"liste"})," est un nom d\u2019objet (cha\xeene) correspondant \xe0 une repr\xe9sentation de liste dans le formulaire. Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(s.em,{children:"liste"})," est une r\xe9f\xe9rence de liste hi\xe9rarchique (",(0,i.jsx)(s.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"R\xe9fListe"}),"). Si vous utilisez une seule repr\xe9sentation de liste, vous pouvez utiliser indiff\xe9remment l\u2019une ou l\u2019autre syntaxe. En revanche, si vous utilisez plusieurs repr\xe9sentations d\u2019une m\xeame liste, la syntaxe bas\xe9e sur le nom d\u2019objet est requise car chaque repr\xe9sentation peut disposer de sa propre configuration d\xe9ploy\xe9e/contract\xe9e et de son propre \xe9l\xe9ment courant."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," Si vous utilisez le caract\xe8re @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes r\xe9pondant \xe0 ce nom, la commande ",(0,i.jsx)(s.strong,{children:"GET LIST ITEM"})," s'appliquera au premier objet dont le nom correspond."]}),"\n",(0,i.jsxs)(s.p,{children:["La position doit \xeatre exprim\xe9e relativement \xe0 l'\xe9tat d\xe9ploy\xe9/contract\xe9 de la liste et de ses sous-listes. Vous devez passer une valeur de position comprise entre 1 et la valeur retourn\xe9e par ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/count-list-items",children:"Count list items"}),". Si vous passez une valeur situ\xe9e hors de cet intervalle, ",(0,i.jsx)(s.strong,{children:"GET LIST ITEM"}),' retourne des valeurs vides (0, "", etc.).',(0,i.jsx)(s.br,{}),"\nSi vous passez * dans ",(0,i.jsx)(s.em,{children:"positionEl\xe9m"}),", la commande s\u2019applique \xe0 l\u2019\xe9l\xe9ment courant de la liste. Si plusieurs \xe9l\xe9ments sont s\xe9lectionn\xe9s manuellement, l\u2019\xe9l\xe9ment courant est celui qui a \xe9t\xe9 s\xe9lectionn\xe9 en dernier. Si aucun \xe9l\xe9ment n\u2019est s\xe9lectionn\xe9, la commande retourne des valeurs vides."]}),"\n",(0,i.jsx)(s.p,{children:"Apr\xe8s l'appel, vous r\xe9cup\xe9rez :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Le num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment dans ",(0,i.jsx)(s.em,{children:"r\xe9fEl\xe9ment"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Le libell\xe9 de l'\xe9l\xe9ment dans ",(0,i.jsx)(s.em,{children:"libell\xe9El\xe9m"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Si vous passez les param\xe8tres optionnels ",(0,i.jsx)(s.em,{children:"sous_Liste"})," et ",(0,i.jsx)(s.em,{children:"d\xe9ploy\xe9e"})," :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"sous_Liste"})," contient le num\xe9ro de r\xe9f\xe9rence de la sous-liste rattach\xe9e \xe0 l'\xe9l\xe9ment. Si l'\xe9l\xe9ment n'a pas de sous-liste associ\xe9e, ",(0,i.jsx)(s.em,{children:"sous_Liste"})," retourne z\xe9ro."]}),"\n",(0,i.jsxs)(s.li,{children:["Si l'\xe9l\xe9ment comporte une sous-liste, ",(0,i.jsx)(s.em,{children:"d\xe9ploy\xe9e"})," retourne Vrai si la sous-liste est d\xe9ploy\xe9e, et Faux sinon."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsxs)(s.p,{children:["En partant de l'hypoth\xe8se que ",(0,i.jsx)(s.em,{children:"hList"})," est une liste dont les \xe9l\xe9ments ont des num\xe9ros de r\xe9f\xe9rence uniques, le code suivant inverse automatiquement l'\xe9tat d\xe9ploy\xe9/contract\xe9 de la sous-liste, si elle existe, rattach\xe9e \xe0 l'\xe9l\xe9ment s\xe9lectionn\xe9 :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0var $vbD\xe9ploy\xe9 : Boolean\n\xa0var $hSousListe;$vlElemRef : Integer\n\xa0C_STRING(31;$vsElemText)\n\xa0\xa0//La d\xe9claration de ces variables est n\xe9cessaire si vous souhaitez compiler la m\xe9thode\n\xa0\n\xa0$vlElemPos:=Selected list items(hList)\n\xa0If($vlElemPos>0)\n\xa0\xa0\xa0\xa0GET LIST ITEM(hList;$vlElemPos;$vlElemRef;$vsElemText;$hSousListe;$vbD\xe9ploy\xe9)\n\xa0\xa0\xa0\xa0If(Is a list($hSousListe))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST ITEM(hList;$vlElemRef;$vsElemText;$hSousListe;Not($vbD\xe9ploy\xe9))\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,i.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsxs)(s.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/append-to-list",children:"APPEND TO LIST"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/commands/get-list-item-properties",children:"GET LIST ITEM PROPERTIES"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/list-item-parent",children:"List item parent"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/list-item-position",children:"List item position"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/selected-list-items",children:"Selected list items"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/set-list-item",children:"SET LIST ITEM"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]})]})}function m(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return r}});var t=n(667294);let i={},l=t.createContext(i);function r(e){let s=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);