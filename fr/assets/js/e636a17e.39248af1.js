"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43939"],{698171:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/listbox-select-rows","title":"LISTBOX SELECT ROWS","description":"LISTBOX SELECT ROWS ( { ;} objet ; s\xe9lection {; action*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-select-rows.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-select-rows","permalink":"/docs/fr/commands/listbox-select-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-select-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-select-rows","title":"LISTBOX SELECT ROWS","slug":"/commands/listbox-select-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SELECT ROW","permalink":"/docs/fr/commands/listbox-select-row"},"next":{"title":"LISTBOX SET ARRAY","permalink":"/docs/fr/commands/listbox-set-array"}}'),i=s("785893"),l=s("250065");let r={id:"listbox-select-rows",title:"LISTBOX SELECT ROWS",slug:"/commands/listbox-select-rows",displayed_sidebar:"docs"},o=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX SELECT ROWS"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"s\xe9lection"})," {; ",(0,i.jsx)(n.em,{children:"action"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, l'objet est un nom d'objet (cha\xeene). Si omis, l'objet est une variable."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom de l'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est sp\xe9cifi\xe9)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"s\xe9lection"}),(0,i.jsx)(n.td,{children:"Object, Collection"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Objet ou collection d\xe9crivant les lignes \xe0 s\xe9lectionner"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"action"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"lk remplacer s\xe9lection (omis par d\xe9faut), lk ajouter \xe0 s\xe9lection, lk supprimer de s\xe9lection"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"LISTBOX SELECT ROWS"}),"  provoque la s\xe9lection des lignes d'une list box entity selection ou une list box collection correspondant aux entit\xe9s ou objets contenus dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"s\xe9lection"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez un param\xe8tre optionnel *, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un nom d'objet (cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Pour plus d'informations sur les noms d'objet, reportez-vous \xe0 la section ",(0,i.jsx)(n.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Dans le param\xe8tre s\xe9lection, passez un ",(0,i.jsx)(n.a,{href:"#",title:"Donn\xe9es structur\xe9es sous forme d'objet natif 4D",children:"Objet"})," ou une ",(0,i.jsx)(n.a,{href:"#",title:"Tableau de valeurs de propri\xe9t\xe9s d'objets",children:"Collection"})," en fonction du type de list box :"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"List box e"})," ",(0,i.jsx)(n.strong,{children:"ntity selection"})]}),"\n",(0,i.jsx)(n.p,{children:"Pour une List box entity selection, passez un objet entity selection contenant des entit\xe9s de la m\xeame dataclass que la list box. Si s\xe9lection est un objet entity selection d'une dataclass diff\xe9rente de la list box, une erreur est retourn\xe9e."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"List box c"})," ",(0,i.jsx)(n.strong,{children:"ollection"})]}),"\n",(0,i.jsxs)(n.p,{children:["Pour une ",(0,i.jsx)(n.strong,{children:"list box"})," collection, passez une sous-collection d'objets appartenant \xe0 la list box. Si votre list box contient des valeurs scalaires, passez une sous-collection de valeurs."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si ",(0,i.jsx)(n.em,{children:"s\xe9lection"})," n'est pas un objet entity selection / collection valide, une erreur est retourn\xe9e."]}),"\n",(0,i.jsxs)(n.li,{children:["Si ",(0,i.jsx)(n.em,{children:"s\xe9lection"}),' est une entity selection / collection vide, par d\xe9faut (avec l\'action "remplacer" ci-dessous) toutes les lignes de la list box sont d\xe9selectionn\xe9es. Pour les autres actions, la commande ne fait rien.']}),"\n",(0,i.jsxs)(n.li,{children:["Si ",(0,i.jsx)(n.em,{children:"s\xe9lection"})," contient des entit\xe9s / \xe9l\xe9ments qui ne s'affichent pas dans la list box, ils sont ignor\xe9s."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Si le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"action"})," est pass\xe9, il permet de d\xe9finir l'action de s\xe9lection \xe0 ex\xe9cuter lorsqu'une s\xe9lection de lignes existe d\xe9j\xe0 dans la list box. Vous pouvez passez une valeur ou l'une des constantes suivantes (du th\xe8me \u201C",(0,i.jsx)(n.em,{children:"List box"}),"\u201D) :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk add to selection"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"La ligne s\xe9lectionn\xe9e est ajout\xe9e \xe0 la s\xe9lection existante. Si la ligne d\xe9sign\xe9e appartient d\xe9j\xe0 \xe0 la s\xe9lection existante, la commande ne fait rien."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk remove from selection"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"La ligne s\xe9lectionn\xe9e est supprim\xe9e de la s\xe9lection existante. Si la ligne d\xe9sign\xe9e n\u2019appartient pas \xe0 la s\xe9lection existante, la commande ne fait rien."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk replace selection"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsxs)(n.td,{children:["La ligne s\xe9lectionn\xe9e devient la nouvelle s\xe9lection et remplace la s\xe9lection existante. La commande produit le m\xeame effet qu\u2019un clic de l\u2019utilisateur sur une ligne de la list box (l'\xe9v\xe9nement Sur clic n'est toutefois pas g\xe9n\xe9r\xe9). Cette action est effectu\xe9e par d\xe9faut (lorsque le param\xe8tre ",(0,i.jsx)(n.em,{children:"action"})," n\u2019est pas pass\xe9)."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Par d\xe9faut, si le param\xe8tre action est omis, la commande remplace la ou les lignes d\xe9finie(s) par le param\xe8tre s\xe9lection"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," La commande s'attend \xe0 ce que chaque objet ou entity s'affiche une seule fois uniquement dans la list box."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(n.p,{children:"Ce code vous permet de s\xe9lectionner les factures d'une entity selection \xe0 l'aide d'une requ\xeate de serveur :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Dans l\'\xe9v\xe9nement Sur chargement du formulaire, nous avons :\n\xa0Form.invoices:=ds.Invoices.all()\n\xa0\xa0//La ListBox "Factures" affiche l\'entity selection\xa0Form.invoices\xa0\xa0\n\xa0\n\xa0var $cash : Object\n\xa0var $card : Object\n\xa0\n\xa0\xa0//S\xe9lectionner les factures ayant \xe9t\xe9 r\xe9gl\xe9es en liquide\n\xa0$cash:=Form.invoices.query("paymentMethod=:1";"Liquide")\n\xa0LISTBOX SELECT ROWS(*;"Factures";$cash;lk replace selection)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(n.p,{children:"Exemple avec une collection d'objets :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $name : Text\n\xa0$name:=Request("Veuillez saisir un nom")\n\xa0If(OK=1)\n\xa0\xa0// Form.studentsColl est une collection d\'objets\n\xa0\xa0\xa0\xa0$selection:=Form.studentsColl.query("lastname = :1";$name)\n\xa0\xa0\xa0\xa0LISTBOX SELECT ROWS(*;"LBStudents";$selection;lk ajouter\xa0\xe0\xa0s\xe9lection)\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/listbox-select-row",children:"LISTBOX SELECT ROW"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var t=s(667294);let i={},l=t.createContext(i);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);