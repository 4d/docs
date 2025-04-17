"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97446"],{953669:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/set-list-item","title":"SET LIST ITEM","description":"SET LIST ITEM ( { ;} liste ; refEl\xe9ment |  ; libell\xe9El\xe9ment ; nouvelR\xe9f {; sous_Liste ; d\xe9ploy\xe9e} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-list-item.md","sourceDirName":"commands-legacy","slug":"/commands/set-list-item","permalink":"/docs/fr/20-R8/commands/set-list-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-list-item.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-list-item","title":"SET LIST ITEM","slug":"/commands/set-list-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Selected list items","permalink":"/docs/fr/20-R8/commands/selected-list-items"},"next":{"title":"SET LIST ITEM FONT","permalink":"/docs/fr/20-R8/commands/set-list-item-font"}}'),l=n("785893"),i=n("250065");let r={id:"set-list-item",title:"SET LIST ITEM",slug:"/commands/set-list-item",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"SET LIST ITEM"})," ( {* ;} ",(0,l.jsx)(s.em,{children:"liste"})," ; refEl\xe9ment | * ; ",(0,l.jsx)(s.em,{children:"libell\xe9El\xe9ment"})," ; ",(0,l.jsx)(s.em,{children:"nouvelR\xe9f"})," {; sous_Liste ; ",(0,l.jsx)(s.em,{children:"d\xe9ploy\xe9e"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Param\xe8tre"}),(0,l.jsx)(s.th,{children:"Type"}),(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"*"}),(0,l.jsx)(s.td,{children:"Op\xe9rateur"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Si sp\xe9cifi\xe9, liste est un nom d'objet (cha\xeene) Si omis, liste est une r\xe9f\xe9rence de liste"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"liste"}),(0,l.jsx)(s.td,{children:"Integer, Text"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste (si * omis) ou Nom d'objet de type liste (si * pass\xe9)"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"refEl\xe9ment | *"}),(0,l.jsx)(s.td,{children:"Op\xe9rateur, Entier long"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence d'\xe9l\xe9ment ou 0 pour le dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste ou * pour l\u2019\xe9l\xe9ment courant de la liste"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"libell\xe9El\xe9ment"}),(0,l.jsx)(s.td,{children:"Text"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Nouveau libell\xe9 d'\xe9l\xe9ment"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"nouvelR\xe9f"}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Nouveau num\xe9ro de r\xe9f\xe9rence d'\xe9l\xe9ment"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"sous_Liste"}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Nouvelle sous-liste rattach\xe9e \xe0 l'\xe9l\xe9ment ou 0 = pas de sous-liste (d\xe9tacher sous-liste courante) ou -1 = pas de changement"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"d\xe9ploy\xe9e"}),(0,l.jsx)(s.td,{children:"Boolean"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Indique si la sous-liste doit \xeatre d\xe9ploy\xe9e/contract\xe9e"})]})]})]}),"\n",(0,l.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["La commande ",(0,l.jsx)(s.strong,{children:"SET LIST ITEM"})," modifie l'\xe9l\xe9ment d\xe9sign\xe9 par le param\xe8tre ",(0,l.jsx)(s.em,{children:"r\xe9fEl\xe9ment"})," de la liste dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence ou le nom d'objet dans ",(0,l.jsx)(s.em,{children:"liste"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Si vous passez le premier param\xe8tre optionnel ",(0,l.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,l.jsx)(s.em,{children:"liste"})," est un nom d\u2019objet (cha\xeene) correspondant \xe0 une repr\xe9sentation de liste dans le formulaire. Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,l.jsx)(s.em,{children:"liste"})," est une r\xe9f\xe9rence de liste hi\xe9rarchique (",(0,l.jsx)(s.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"R\xe9fListe"}),"). Si vous utilisez une seule repr\xe9sentation de liste ou travaillez avec les \xe9l\xe9ments structurels (le second ",(0,l.jsx)(s.em,{children:"*"})," est omis), vous pouvez utiliser indiff\xe9remment l\u2019une ou l\u2019autre syntaxe. En revanche, si vous utilisez plusieurs repr\xe9sentations d\u2019une m\xeame liste et travaillez avec l\u2019\xe9l\xe9ment courant (le second ",(0,l.jsx)(s.em,{children:"*"})," est pass\xe9), la syntaxe bas\xe9e sur le nom d\u2019objet est requise car chaque repr\xe9sentation peut disposer de son propre \xe9l\xe9ment courant."]}),"\n",(0,l.jsxs)(s.p,{children:["Vous pouvez passer un num\xe9ro de r\xe9f\xe9rence dans ",(0,l.jsx)(s.em,{children:"r\xe9fEl\xe9ment"}),". Si ce num\xe9ro ne correspond \xe0 aucun \xe9l\xe9ment de la liste, la commande ne fait rien.",(0,l.jsx)(s.br,{}),"\nVous pouvez \xe9galement passer ",(0,l.jsx)(s.em,{children:"0"})," dans ",(0,l.jsx)(s.em,{children:"r\xe9fEl\xe9ment"})," afin de d\xe9signer le dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste (\xe0 l'aide de ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R8/commands/append-to-list",children:"APPEND TO LIST"}),").",(0,l.jsx)(s.br,{}),"\nVous pouvez enfin passer ",(0,l.jsx)(s.em,{children:"*"})," dans ",(0,l.jsx)(s.em,{children:"r\xe9fEl\xe9ment"})," : dans ce cas, la commande s\u2019appliquera \xe0 l\u2019\xe9l\xe9ment courant de la liste. Si plusieurs \xe9l\xe9ments sont s\xe9lectionn\xe9s manuellement, l\u2019\xe9l\xe9ment courant est celui qui a \xe9t\xe9 s\xe9lectionn\xe9 en dernier. Si aucun \xe9l\xe9ment n\u2019est s\xe9lectionn\xe9, la commande ne fait rien."]}),"\n",(0,l.jsxs)(s.p,{children:["Si vous travaillez avec les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments, assurez-vous d'utiliser des num\xe9ros uniques, sinon vous ne pourrez pas diff\xe9rencier les \xe9l\xe9ments. Pour plus d'informations sur ce point, reportez-vous \xe0 la section ",(0,l.jsx)(s.em,{children:"Gestion des listes hi\xe9rarchiques"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Vous pouvez passer le nouveau libell\xe9 de l'\xe9l\xe9ment dans le param\xe8tre ",(0,l.jsx)(s.em,{children:"libell\xe9El\xe9ment"}),". Si vous souhaitez changer le num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment, passez la nouvelle valeur dans le param\xe8tre ",(0,l.jsx)(s.em,{children:"nouvelR\xe9f"}),", sinon passez la m\xeame valeur que dans ",(0,l.jsx)(s.em,{children:"r\xe9fEl\xe9ment"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Si vous voulez associer une sous-liste \xe0 l'\xe9l\xe9ment, passez le num\xe9ro de r\xe9f\xe9rence de la sous-liste dans le param\xe8tre ",(0,l.jsx)(s.em,{children:"sous_Liste"}),". Dans ce cas, vous devez \xe9galement sp\xe9cifier si la nouvelle sous-liste devra appara\xeetre d\xe9ploy\xe9e ou contract\xe9e en passant respectivement Vrai ou Faux dans le param\xe8tre ",(0,l.jsx)(s.em,{children:"d\xe9ploy\xe9e"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Si vous voulez dissocier de l'\xe9l\xe9ment une sous-liste qui lui est actuellement rattach\xe9e, passez ",(0,l.jsx)(s.em,{children:"0"})," (z\xe9ro) dans ",(0,l.jsx)(s.em,{children:"sous_Liste"}),". Dans ce cas, il est conseill\xe9 d'avoir pr\xe9alablement obtenu le num\xe9ro de r\xe9f\xe9rence de cette liste \xe0 l'aide de la commande ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R8/commands/append-to-list",children:"APPEND TO LIST"}),", afin de pouvoir effacer la sous-liste avec la commande ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R8/commands/clear-list",children:"CLEAR LIST"})," si vous n'en avez plus besoin."]}),"\n",(0,l.jsxs)(s.p,{children:["Si vous ne souhaitez pas modifier les propri\xe9t\xe9s de sous-liste de l'\xe9l\xe9ment, passez ",(0,l.jsx)(s.em,{children:"-1"})," dans le param\xe8tre ",(0,l.jsx)(s.em,{children:"sous_Liste"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsxs)(s.p,{children:["Nous supposons que ",(0,l.jsx)(s.em,{children:"hList"})," est une liste dont les \xe9l\xe9ments ont des num\xe9ros de r\xe9f\xe9rence uniques. La m\xe9thode objet suivante d'un bouton ajoute une sous-liste \xe0 l'\xe9l\xe9ment actuellement s\xe9lectionn\xe9 dans la liste ",(0,l.jsx)(s.em,{children:"hList"})," :"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:'\xa0$vlItemPos:=Selected list items(hList)\n\xa0If($vlItemPos>0)\n\xa0\xa0\xa0\xa0GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSouslist;$vbExpanded)\n\xa0\xa0\xa0\xa0$vbNouvSousList:=Not(Is a list($hSouslist))\n\xa0\xa0\xa0\xa0If($vbNouvSousList)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$hSouslist:=New list\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0vlUniqueRef:=vlUniqueRef+1\n\xa0\xa0\xa0\xa0APPEND TO LIST($hSousList;"Nouvel \xe9l\xe9ment";vlUniqueRef)\n\xa0\xa0\xa0\xa0If($vbNouvSousList)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSouslist;True)\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0SELECT LIST ITEMS BY REFERENCE(hList;vlUniqueRef)\n\xa0End if\n'})}),"\n",(0,l.jsx)(s.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsxs)(s.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R8/commands/get-list-item",children:"GET LIST ITEM"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,l.jsxs)(s.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,l.jsx)(s.a,{href:"/docs/fr/20-R8/commands/append-to-list",children:"APPEND TO LIST"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"/docs/fr/20-R8/commands/get-list-item",children:"GET LIST ITEM"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/fr/20-R8/commands/get-list-item-properties",children:"GET LIST ITEM PROPERTIES"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/fr/20-R8/commands/set-list-item-font",children:"SET LIST ITEM FONT"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/fr/20-R8/commands/set-list-item-icon",children:"SET LIST ITEM ICON"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/fr/20-R8/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,l.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(s.td,{children:"385"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Thread safe"}),(0,l.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return r}});var t=n(667294);let l={},i=t.createContext(l);function r(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);