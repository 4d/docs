"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59638"],{755373:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>o,assets:()=>i,toc:()=>d,contentTitle:()=>c});var o=JSON.parse('{"id":"commands/new-collection","title":"New collection","description":"New collection {( ...value Collection","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands/new-collection.md","sourceDirName":"commands","slug":"/commands/new-collection","permalink":"/docs/fr/commands/new-collection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-collection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"new-collection","title":"New collection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COLLECTION TO ARRAY","permalink":"/docs/fr/commands/collection-to-array"},"next":{"title":"New shared collection","permalink":"/docs/fr/commands/new-shared-collection"}}'),t=l("785893"),s=l("250065");let r={id:"new-collection",title:"New collection",displayed_sidebar:"docs"},c=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"New collection"})," {( ",(0,t.jsx)(n.em,{children:"...value"})," : any )} : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur(s) de collection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"New collection"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"New collection"})," cr\xe9e une nouvelle collection vide ou pr\xe9-remplie et retourne sa r\xe9f\xe9rence. Les collections peuvent \xeatre manipul\xe9es \xe0 l'aide des propri\xe9t\xe9s et des fonctions de la ",(0,t.jsx)(n.a,{href:"/docs/fr/API/CollectionClass",children:"classe Collection"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous ne passez aucun param\xe8tre, ",(0,t.jsx)(n.code,{children:"New collection"})," cr\xe9e une collection vide et retourne sa r\xe9f\xe9rence."]}),"\n",(0,t.jsx)(n.p,{children:"Vous devez affecter la r\xe9f\xe9rence retourn\xe9e \xe0 une variable 4D de type Collection."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["N'oubliez pas que l'instruction ",(0,t.jsx)(n.code,{children:"var : Collection"})," d\xe9clare une variable de type ",(0,t.jsx)(n.code,{children:"Collection"})," mais ne cr\xe9e pas de collection."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Optionnellement, vous pouvez pr\xe9remplir la nouvelle collection en passant une ou plusieurs ",(0,t.jsx)(n.em,{children:"value"}),"(s) comme param\xe8tre(s)."]}),"\n",(0,t.jsx)(n.p,{children:"Sinon, vous pouvez ajouter ou modifier des \xe9l\xe9ments ult\xe9rieurement par affectation. Par exemple :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' myCol[10]:="Mon nouvel \xe9l\xe9ment"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Si l'indice du nouvel \xe9l\xe9ment est au-del\xe0 du dernier \xe9l\xe9ment existant de la collection, la collection est automatiquement redimensionn\xe9e et tous les nouveaux \xe9l\xe9ments interm\xe9diaires re\xe7oivent la valeur ",(0,t.jsx)(n.strong,{children:"null"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez passer n'importe quel nombre de valeurs de n'importe quel type pris en charge (number, text, date, picture, pointer, object, collection...). Contrairement aux tableaux, les collections peuvent m\xe9langer des donn\xe9es de diff\xe9rents types."}),"\n",(0,t.jsx)(n.p,{children:"Vous devez pr\xeater attention aux probl\xe8mes de conversion suivants :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['Si vous passez un pointeur, il est conserv\xe9 "tel quel" ; il est \xe9valu\xe9 \xe0 l\'aide de la commande ',(0,t.jsx)(n.code,{children:"JSON Stringify"})]}),"\n",(0,t.jsxs)(n.li,{children:["Les dates sont stock\xe9es sous la forme de date \xab aaaa-mm-jj \xbb ou des cha\xeenes au format \xab AAAA-MM-JJTHH: ss.SSSZ: mm \xbb , selon la configuration actuelle \xab dates \xe0 l'int\xe9rieur des objets \xbb de la base de donn\xe9es. Lors de la conversion de dates 4D en texte avant de les stocker dans la collection, par d\xe9faut le programme prend en compte le fuseau horaire local. Vous pouvez modifier ce comportement en utilisant le s\xe9lecteur ",(0,t.jsx)(n.code,{children:"Dates inside objects"})," de la commande ",(0,t.jsx)(n.code,{children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Si vous passez une heure, elle est stock\xe9e sous la forme d'un nombre de millisecondes (R\xe9el)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez cr\xe9er une nouvelle collection vide et l'assigner \xe0 une variable collection 4D :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" var $myCol : Collection\n $myCol:=New collection\n  //$myCol=[]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez cr\xe9er une collection pr\xe9-remplie :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $filledColl : Collection\n $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)\n  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez cr\xe9er une nouvelle collection puis ajouter un \xe9l\xe9ment :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $coll : Collection\n $coll:=New collection("a";"b";"c")\n  //$coll=["a","b","c"]\n $coll[9]:="z" //ajouter un 10e \xe9l\xe9ment avec la valeur "z"\n $vcolSize:=$coll.length //10\n  //$coll=["a","b","c",null,null,null,null,null,null,"z"]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/new-shared-collection",children:"New shared collection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/type",children:"Type"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1472"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return r}});var o=l(667294);let t={},s=o.createContext(t);function r(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);