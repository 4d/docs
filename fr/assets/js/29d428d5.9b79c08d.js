"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1359"],{371081:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/append-menu-item","title":"APPEND MENU ITEM","description":"APPEND MENU ITEM ( menu ; libell\xe9Ligne {; sousMenu {; process {; *}}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/append-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/append-menu-item","permalink":"/docs/fr/commands/append-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-menu-item.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"append-menu-item","title":"APPEND MENU ITEM","slug":"/commands/append-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Menus","permalink":"/docs/fr/commands/theme/Menus"},"next":{"title":"Count menu items","permalink":"/docs/fr/commands/count-menu-items"}}'),i=s("785893"),l=s("250065");let d={id:"append-menu-item",title:"APPEND MENU ITEM",slug:"/commands/append-menu-item",displayed_sidebar:"docs"},t=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"APPEND MENU ITEM"})," ( ",(0,i.jsx)(n.em,{children:"menu"})," ; ",(0,i.jsx)(n.em,{children:"libell\xe9Ligne"})," {; ",(0,i.jsx)(n.em,{children:"sousMenu"})," {; ",(0,i.jsx)(n.em,{children:"process"})," {; *}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"menu"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de menu ou R\xe9f\xe9rence de menu"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"libell\xe9Ligne"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Libell\xe9 du ou des nouvelle(s) ligne(s) de menu"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sousMenu"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"R\xe9f\xe9rence du sous-menu associ\xe9 \xe0 la ligne"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"process"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence du process"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si pass\xe9 : consid\xe9rer les m\xe9tacaract\xe8res comme des caract\xe8res standard"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"APPEND MENU ITEM"}),"  ajoute une ou plusieurs ligne(s) au menu dont vous avez pass\xe9 le num\xe9ro ou la r\xe9f\xe9rence dans ",(0,i.jsx)(n.em,{children:"menu."})]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,i.jsx)(n.em,{children:"process"}),", ",(0,i.jsx)(n.strong,{children:"APPEND MENU ITEM"})," s'applique \xe0 la barre de menus du process courant. Sinon, ",(0,i.jsx)(n.strong,{children:"APPEND MENU ITEM"})," s'applique \xe0 la barre de menus du process dont vous avez pass\xe9 le num\xe9ro dans ",(0,i.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Si vous passez un param\xe8tre ",(0,i.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"})," dans ",(0,i.jsx)(n.em,{children:"menu"}),", le param\xe8tre ",(0,i.jsx)(n.em,{children:"process"})," est inutile et sera ignor\xe9."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre ",(0,i.jsx)(n.em,{children:"*"}),", ",(0,i.jsx)(n.strong,{children:"APPEND MENU ITEM"})," vous permet d'ajouter une ou plusieurs lignes de menu en un seul appel. Vous d\xe9finissez les lignes \xe0 ajouter \xe0 l'aide du param\xe8tre ",(0,i.jsx)(n.em,{children:"libell\xe9Ligne"}),", de la mani\xe8re suivante :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['Chaque ligne est s\xe9par\xe9e des autres par un point-virgule ";", ',(0,i.jsx)(n.em,{children:'"ligne1;ligne2;ligne3".'})]}),"\n",(0,i.jsxs)(n.li,{children:['Pour inactiver une ligne, placez une parenth\xe8se ouvrante "',(0,i.jsx)(n.em,{children:"("}),'" dans son libell\xe9.']}),"\n",(0,i.jsxs)(n.li,{children:['Pour d\xe9finir une ligne de s\xe9paration, passez la valeur "-" ou ',(0,i.jsx)(n.em,{children:'"'}),"(-",(0,i.jsx)(n.em,{children:'"'})," en tant que libell\xe9."]}),"\n",(0,i.jsxs)(n.li,{children:["Pour d\xe9finir le style de caract\xe8res d'une ligne, placez dans son libell\xe9 le symbole inf\xe9rieur \xe0 \"",(0,i.jsx)(n.em,{children:"<"}),"\" suivi d'une lettre. Voici les diff\xe9rents codes :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"<B"}),(0,i.jsx)(n.th,{children:"Gras"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"<I"}),(0,i.jsx)(n.td,{children:"Italique"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"<U"}),(0,i.jsx)(n.td,{children:"Soulign\xe9"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pour associer une coche \xe0 une ligne, ins\xe9rez dans son libell\xe9 un point d'exclamation \"",(0,i.jsx)(n.em,{children:"!"}),'" suivi du caract\xe8re que vous voulez utiliser comme coche. Sous Mac OS, le caract\xe8re est affich\xe9 ; sous Windows, une coche standard est affich\xe9e (quel que soit le caract\xe8re pass\xe9).']}),"\n",(0,i.jsx)(n.li,{children:"Pour associer une ic\xf4ne \xe0 une ligne, ins\xe9rez dans son libell\xe9 un accent circonflexe \"^\" suivi d'un caract\xe8re dont le code plus 208 repr\xe9sente un num\xe9ro de ressource d'ic\xf4ne Mac OS."}),"\n",(0,i.jsxs)(n.li,{children:['Pour ajouter un raccourci clavier \xe0 une ligne, ins\xe9rez dans son libell\xe9 une barre oblique "',(0,i.jsx)(n.em,{children:"/"}),'" suivie du caract\xe8re de raccourci.']}),"\n",(0,i.jsxs)(n.li,{children:["(",(0,i.jsx)(n.strong,{children:"A compter de 4D v16 R3"}),") Si l'\xe9l\xe9ment est associ\xe9 \xe0 une action standard, vous pouvez passer la constante ak standard action title dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"libell\xe9Ligne"})," afin d'utiliser automatiquement le nom d'action localis\xe9 et les informations de contexte (s'il y en a), par exemple \"Annuler <action pr\xe9c\xe9dente>\"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"}),' Utilisez les menus avec un nombre "raisonnable" de lignes. Si, par exemple, vous voulez afficher plus de 50 lignes, envisagez plut\xf4t d\'employer une zone de d\xe9filement dans un formulaire.']}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre ",(0,i.jsx)(n.em,{children:"*"}),', les caract\xe8res "sp\xe9ciaux" inclus dans les libell\xe9s des lignes (',(0,i.jsx)(n.em,{children:"; ( !"}),'...) seront consid\xe9r\xe9s comme des caract\xe8res standard et non comme des m\xe9tacaract\xe8res. Ce principe vous permet de cr\xe9er des lignes avec un libell\xe9 tel que "',(0,i.jsx)(n.strong,{children:"Copier (sp\xe9cial)..."}),'" ou "',(0,i.jsx)(n.strong,{children:'Chercher/Remplacer..."'}),". A noter que lorsque le param\xe8tre ",(0,i.jsx)(n.em,{children:"*"}),' est pass\xe9, vous ne pouvez pas cr\xe9er plusieurs lignes en un seul appel, le caract\xe8re ";" \xe9tant consid\xe9r\xe9 comme un caract\xe8re standard.']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Les commandes ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-menu-items",children:"GET MENU ITEMS"})," et ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-menu-item",children:"Get menu item"})," retourneront ou non les m\xe9tacaract\xe8res d\u2019un libell\xe9 en fonction de son mode de cr\xe9ation : s\u2019il a \xe9t\xe9 cr\xe9\xe9 avec l\u2019option ",(0,i.jsx)(n.em,{children:"*"}),", les m\xe9tacaract\xe8res seront retourn\xe9s en tant que caract\xe8res standard."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,i.jsx)(n.em,{children:"sousMenu"})," vous permet de d\xe9signer un menu comme ligne ajout\xe9e et donc de d\xe9finir un sous-menu hi\xe9rarchique. Vous devez passer dans ce param\xe8tre une r\xe9f\xe9rence de menu (cha\xeene de type ",(0,i.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"}),") d\xe9signant un menu cr\xe9\xe9 par exemple \xe0 l\u2019aide de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/create-menu",children:"Create menu"}),". Si la commande ajoute plusieurs lignes de menus, le sous-menu est associ\xe9 \xe0 la premi\xe8re ligne."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important :"})," Les nouvelles lignes n'ont pas de m\xe9thodes ou d'actions associ\xe9es. Vous devez leur associer une action ou une m\xe9thode via les commandes ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})," ou ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-menu-item-method",children:"SET MENU ITEM METHOD"})," ou encore les g\xe9rer \xe0 partir d'une m\xe9thode formulaire qui utilise la fonction ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/menu-selected",children:"Menu selected"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(n.p,{children:["L'exemple suivant ajoute les noms des polices de caract\xe8res disponibles dans un menu ",(0,i.jsx)(n.strong,{children:"Polices"})," qui, dans cet exemple, est le sixi\xe8me menu de la barre de menus courante :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Dans la m\xe9thode base Sur ouverture\n\xa0\xa0// La liste des polices est charg\xe9e et les libell\xe9s construits\n\xa0FONT LIST(<>asPolicesDispo)\n\xa0<>atPoliceCmdMenus:=""\n\xa0For($vlPolice;1;Size of array(<>asPolicesDispo))\n\xa0\xa0\xa0\xa0<>atPoliceCmdMenus:=<>atPoliceCmdMenus+";"+<>asPolicesDispo{$vlPolice}\n\xa0End for\n'})}),"\n",(0,i.jsx)(n.p,{children:"Ensuite, dans toute m\xe9thode formulaire ou projet, vous pouvez \xe9crire :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0APPEND MENU ITEM(6;<>atPoliceCmdMenus)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/delete-menu-item",children:"DELETE MENU ITEM"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/insert-menu-item",children:"INSERT MENU ITEM"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-menu-item-parameter",children:"SET MENU ITEM PARAMETER"})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"411"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Interdite sur le serveur"}),(0,i.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var r=s(667294);let i={},l=r.createContext(i);function d(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);