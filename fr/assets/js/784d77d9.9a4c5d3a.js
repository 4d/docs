"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44734"],{929783:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>j,assets:()=>a,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/new-object","title":"New object","description":"New object {( propri\xe9t\xe9 ; valeur {; propri\xe9t\xe92 ; valeur2 ; ... ; propri\xe9t\xe9N ; valeurN} )} : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/new-object.md","sourceDirName":"commands-legacy","slug":"/commands/new-object","permalink":"/docs/fr/commands/new-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-object","title":"New object","slug":"/commands/new-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Objects (Language)","permalink":"/docs/fr/category/objects-language"},"next":{"title":"New shared object","permalink":"/docs/fr/commands/new-shared-object"}}'),t=r("785893"),l=r("250065");let i={id:"new-object",title:"New object",slug:"/commands/new-object",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"New object"})," {( ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," ; ",(0,t.jsx)(n.em,{children:"valeur"})," {; ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe92"})," ; ",(0,t.jsx)(n.em,{children:"valeur2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9N"})," ; ",(0,t.jsx)(n.em,{children:"valeurN"}),"} )} : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de la propri\xe9t\xe9 \xe0 cr\xe9er"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valeur"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur de la propri\xe9t\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nouvel objet structur\xe9"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"New object"})," cr\xe9e un objet vide ou pr\xe9-rempli et retourne sa r\xe9f\xe9rence."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous ne passez aucun param\xe8tre, ",(0,t.jsx)(n.strong,{children:"New object"})," cr\xe9e un objet vide et retourne sa r\xe9f\xe9rence. Vous devez assigner cette r\xe9f\xe9rence \xe0 une variable 4D d\xe9clar\xe9e avec ",(0,t.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," ou un champ objet 4D."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," ",(0,t.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," d\xe9clare une variable de type ",(0,t.jsx)(n.a,{href:"#",title:"Donn\xe9es structur\xe9es sous forme d'objet natif 4D",children:"Objet"})," mais ne cr\xe9e pas d'objet."]}),"\n",(0,t.jsxs)(n.p,{children:["Optionnellement, vous pouvez pr\xe9-remplir le nouvel objet en passant une ou plusieurs paires ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"}),"/",(0,t.jsx)(n.em,{children:"valeur"})," comme param\xe8tres :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"}),", passez le libell\xe9 de la propri\xe9t\xe9 \xe0 cr\xe9er. Notez que le libell\xe9 du param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," est sensible \xe0 la casse."]}),"\n",(0,t.jsxs)(n.li,{children:["Dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"valeur"}),", passez la valeur que vous souhaitez fixer \xe0 la propri\xe9t\xe9. Les types de donn\xe9es suivants sont accept\xe9s :\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"num\xe9rique (r\xe9el, entier...) - les valeurs num\xe9riques sont toujours stock\xe9es sous forme de r\xe9els ."}),"\n",(0,t.jsx)(n.li,{children:"texte"}),"\n",(0,t.jsx)(n.li,{children:"bool\xe9en"}),"\n",(0,t.jsx)(n.li,{children:"pointeur"}),"\n",(0,t.jsx)(n.li,{children:"blob (4D.Blob)"}),"\n",(0,t.jsx)(n.li,{children:"date"}),"\n",(0,t.jsx)(n.li,{children:"heure"}),"\n",(0,t.jsx)(n.li,{children:"null"}),"\n",(0,t.jsx)(n.li,{children:"image"}),"\n",(0,t.jsx)(n.li,{children:"objet"}),"\n",(0,t.jsx)(n.li,{children:"collection"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Notez que :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["si vous passez un pointeur, il est r\xe9cup\xe9r\xe9 tel quel ; il sera \xe9valu\xe9 lors de l'utilisation de commandes telles que ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/json-stringify",children:"JSON Stringify"}),","]}),"\n",(0,t.jsxs)(n.li,{children:['les dates sont stock\xe9es sous forme de date "yyyy-mm-dd" ou de cha\xeene au format "YYYY-MM-DDTHH:mm:ss.SSSZ" en fonction du param\xe9trage courant relatif au stockage des dates dans les objets (cf. ',(0,t.jsx)(n.em,{children:"Page Compatibilit\xe9"}),"). Lorsque vous convertissez des dates 4D en texte, avant de les stocker dans l'objet, par d\xe9faut, le programme utilise l'heure locale de la zone. Vous pouvez modifier ce comportement en utilisant le s\xe9lecteur Dates inside objects de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"si vous passez une heure, elle est stock\xe9e en nombre de millisecondes (r\xe9el)."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Cette commande peut cr\xe9er des objets vides ou des objets remplis :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $obj1 : Object\n\xa0var $obj2 : Object\n\xa0var $obj3 : Object\n\xa0$obj1:=New object\n\xa0\xa0// $obj1 = {}\n\xa0$obj2:=New object("name";"Smith")\n\xa0\xa0// $obj2 = {name:Smith}\n\xa0$obj3:=New object("name";"Smith";"age";40)\n\xa0\xa0// $obj3 = {name:Smith,age:40}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(n.p,{children:["Cr\xe9ation d'un nouvel objet avec un objet en param\xe8tre ",(0,t.jsx)(n.em,{children:"valeur"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $Children;$Contact : Object\n\xa0\n\xa0\xa0//Cr\xe9ation d\'un tableau objet\n\xa0ARRAY TEXT($arrChildren;3)\n\xa0$arrChildren{1}:="Richard"\n\xa0$arrChildren{2}:="Susan"\n\xa0$arrChildren{3}:="James"\n\xa0OB SET ARRAY($Children;"Children";$arrChildren)\n\xa0\n\xa0\xa0//InitialIsation de l\'objet\n\xa0$Contact:=New object("FirstName";"Alan";"LastName";"Parker";"age";30;"Children";$Children)\n\xa0\xa0// $Contact = {FirstName:Alan,LastName:Parker,age:30,Children:{Children:[Richard,Susan,James]}}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Cette commande est utile pour passer des objets en param\xe8tres :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $measures : Object\n\xa0$measures:=Database measures(New object("path";"DB.cacheReadBytes";"withHistory";True;"historyLength";120))\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsx)(n.p,{children:"Avec cette commande, vous pouvez ais\xe9ment g\xe9rer des objets en boucle :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY OBJECT($refs;0)\n\xa0var vCounter : Integer\n\xa0\n\xa0For(vCounter;1;100)\n\xa0\xa0\xa0\xa0APPEND TO ARRAY($refs;New object("line";"Line number "+String(vCounter)))\n\xa0End for\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/new-shared-object",children:"New shared object"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1471"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var s=r(667294);let t={},l=s.createContext(t);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);