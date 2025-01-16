"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51999"],{103919:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/value-type","title":"Value type","description":"Value type ( expression ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/value-type.md","sourceDirName":"commands-legacy","slug":"/commands/value-type","permalink":"/docs/fr/commands/value-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvalue-type.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"value-type","title":"Value type","slug":"/commands/value-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Undefined","permalink":"/docs/fr/commands/undefined"},"next":{"title":"Licenses","permalink":"/docs/fr/category/licenses"}}'),r=s("785893"),l=s("250065");let d={id:"value-type",title:"Value type",slug:"/commands/value-type",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Value type"})," ( ",(0,r.jsx)(n.em,{children:"expression"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expression"}),(0,r.jsx)(n.td,{children:"Expression"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Expression dont la valeur r\xe9sultante doit \xeatre test\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Num\xe9ro du type de donn\xe9es"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Value type"})," retourne le type de la valeur r\xe9sultant de l'\xe9valuation de l'",(0,r.jsx)(n.em,{children:"expression"})," pass\xe9e en param\xe8tre."]}),"\n",(0,r.jsxs)(n.p,{children:["La commande retourne une valeur num\xe9rique qui peut \xeatre compar\xe9e aux constantes suivantes du th\xe8me ",(0,r.jsx)(n.em,{children:"Types champs et variables"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"_o_Is float"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"35"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is BLOB"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"30"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is Boolean"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is collection"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"42"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is date"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is null"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"255"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is object"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"38"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is picture"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is pointer"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"23"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is time"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"11"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is undefined"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is variant"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"12"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object array"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"39"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Cette commande est destin\xe9e \xe0 retourner le type des expressions ",(0,r.jsx)(n.em,{children:"scalaires"}),", c'est-\xe0-dire des valeurs stock\xe9es dans ou retourn\xe9es par le param\xe8tre ",(0,r.jsx)(n.em,{children:"expression"}),". En particulier, elle peut \xeatre appliqu\xe9e aux expressions 4D suivantes :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["propri\xe9t\xe9s d'objets (",(0,r.jsx)(n.em,{children:"emp.name"}),"),"]}),"\n",(0,r.jsxs)(n.li,{children:["\xe9l\xe9ments de collections (",(0,r.jsx)(n.em,{children:"myCol[5]"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Les propri\xe9t\xe9s d'objets num\xe9riques ont toujours le type r\xe9el :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=New object("value";42)\n\xa0$vType:=Value type($o.value)\xa0//$vType=Est un r\xe9el\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Value type"})," peut \xeatre appliqu\xe9e \xe0 toute expression 4D valide, y compris les champs, les variables ou les param\xe8tres. Dans ce cas, \xe0 la diff\xe9rence de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/type",children:"Type"}),", ",(0,r.jsx)(n.strong,{children:"Value type"})," retourne le type ",(0,r.jsx)(n.em,{children:"interne"})," de la valeur r\xe9sultant de l'\xe9valuation de l'",(0,r.jsx)(n.em,{children:"expression"}),", et non son type ",(0,r.jsx)(n.em,{children:"declar\xe9"}),". Comme le langage de 4D convertit certains types de valeurs en interne, le r\xe9sultat de ",(0,r.jsx)(n.strong,{children:"Value type"}),' peut diff\xe9rer du type d\xe9clar\xe9. Par exemple, 4D convertit en interne les valeurs des champs de type "',(0,r.jsx)(n.em,{children:"Entier 64 bits"}),'". Vous pouvez obtenir les r\xe9sultats suivants :']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$vType1:=Type([myTable]Long64field)\xa0//$vType=Est un entier 64 bits\n\xa0$vType2:=Value type([myTable]Long64field)\xa0//$vType=Est un num\xe9rique (en mode interpr\xe9t\xe9)\n"})}),"\n",(0,r.jsx)(n.p,{children:"D'autres diff\xe9rences relatives aux tableaux (l'\xe9valuation d'un tableau retourne l'indice de l'\xe9l\xe9ment courant) et au mode compil\xe9 sont \xe0 noter. Le tableau suivant liste ces diff\xe9rences :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type d\xe9clar\xe9"})}),(0,r.jsxs)(n.th,{children:[(0,r.jsx)(n.strong,{children:"R\xe9sultat de"})," ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/type",children:"Type"})]}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"R\xe9sultat de Value type (interpr\xe9t\xe9)"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"R\xe9sultat de Value type (compil\xe9)"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Commentaire"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TABLEAU TEXTE($t;1)"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"$t contient l'indice de l'\xe9l\xe9ment courant, qui est un num\xe9rique"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Champ ",(0,r.jsx)(n.em,{children:"Alpha"})]}),(0,r.jsx)(n.td,{children:"Is alpha field"}),(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"4D manipule en interne toutes les cha\xeenes en texte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Champ ",(0,r.jsx)(n.em,{children:"Entier"})]}),(0,r.jsx)(n.td,{children:"Is integer"}),(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Pour des raisons d'optimisation, en mode interpr\xe9t\xe9 toutes les valeurs num\xe9riques sont consid\xe9r\xe9es comme des r\xe9els et..."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Champ ",(0,r.jsx)(n.em,{children:"Entier long"})]}),(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"... en mode compil\xe9, toutes les valeurs enti\xe8res sont consid\xe9r\xe9es comme des entiers longs(*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Champ ",(0,r.jsx)(n.em,{children:"Entier 64 bits"})]}),(0,r.jsx)(n.td,{children:"Is integer 64 bits"}),(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"(*)Si vous voulez effectuer un test de valeur num\xe9rique qui soit valide pour les modes interpr\xe9t\xe9 et compil\xe9, vous devez \xe9crire un code du type :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0If(Value type($myValue)=Is longint)|(Value type($myValue)=Est un r\xe9el)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note de compatibilit\xe9 :"})," A compter de 4D v16 R6, les dates sont stock\xe9es dans les propri\xe9t\xe9s d'objets soit avec le type date, soit en texte au format date ISO. Pour plus d'informations, reportez-vous \xe0 la description du s\xe9lecteur Dates inside objects de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez g\xe9rer les divers types possibles de valeurs d'une propri\xe9t\xe9 d'objet :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Value type($o.value)=Is real)\n\xa0\xa0//valeur de type num\xe9rique\n\xa0\xa0\xa0\xa0:(Value type($o.value)=Is text)\n\xa0\xa0//valeur de type texte\n\xa0\xa0\xa0\xa0:(Value type($o.value)=Is object)\n\xa0\xa0//valeur de type sous-objet\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0End case\n"})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez obtenir la somme de toutes les valeurs num\xe9riques dans une collection :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $col : Collection\n\xa0var $sum : Real\n\xa0$col:=New collection("Hello";20;"World2";15;50;Current date;True;10)\n\xa0For($i;0;$col.length-1)\xa0//-1 car les collections d\xe9butent \xe0 0\n\xa0\xa0\xa0\xa0If(Value type($col[$i])=Is real)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$sum:=$sum+$col[$i]\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0ALERT(String($sum))\xa0//95\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/ob-get-type",children:"OB Get type"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/type",children:"Type"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1509"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let r={},l=t.createContext(r);function d(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);