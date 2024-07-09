/*! For license information please see 047fdc23.5318d716.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37978],{38761:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var l=o(474848),s=o(28453);const c={id:"collection",title:"Collection"},t=void 0,i={id:"Concepts/collection",title:"Collection",description:"Les collections sont des listes ordonn\xe9es de valeurs de types similaires ou diff\xe9rents (texte, nombre, date, objet, bool\xe9en, collection ou null).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/fr/Concepts/collection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Boolean",permalink:"/docs/fr/Concepts/boolean"},next:{title:"Date",permalink:"/docs/fr/Concepts/date"}},r={},a=[{value:"Instanciation",id:"Instanciation",level:2},{value:"Commande <code>New collection</code>",id:"Commande-New-collection",level:3},{value:"Op\xe9rateur <code>[]</code>",id:"Op\xe9rateur-",level:3},{value:"Collection standard ou collection partag\xe9e",id:"Collection-standard-ou-collection-partag\xe9e",level:3},{value:"Fonctions de collection",id:"Fonctions-de-collection",level:2},{value:"param\xe8tre propertyPath",id:"param\xe8tre-propertyPath",level:3},{value:"Undefined",id:"Undefined",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Les collections sont des listes ordonn\xe9es de valeurs de types similaires ou diff\xe9rents (texte, nombre, date, objet, bool\xe9en, collection ou null)."}),"\n",(0,l.jsxs)(n.p,{children:["Les variables de type de collection sont g\xe9r\xe9es \xe0 l'aide de la ",(0,l.jsx)(n.a,{href:"/docs/fr/Concepts/object#proprietes",children:"notation objet"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Pour acc\xe9der \xe0 un \xe9l\xe9ment d'une collection, vous devez passer le num\xe9ro de l'\xe9l\xe9ment entre crochets :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"collectionRef[expression]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez passer n'importe quelle expression 4D valide qui retourne un entier positif dans ",(0,l.jsx)(n.em,{children:"expression"}),". Exemples :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" myCollection[5]  //acc\xe8s au 6e \xe9l\xe9ment de la collection\n myCollection[$var]\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Attention :"})," Les \xe9l\xe9ments des collections sont num\xe9rot\xe9s \xe0 partir de 0."]}),"\n",(0,l.jsx)(n.p,{children:"Vous pouvez assigner une valeur \xe0 un \xe9l\xe9ment de collection ou lire une valeur d'\xe9l\xe9ment de collection :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' myCol[10]:="Mon nouvel \xe9l\xe9ment"\n $myVar:=myCol[0]\n'})}),"\n",(0,l.jsx)(n.p,{children:"Si vous assignez un num\xe9ro d'\xe9l\xe9ment plus grand que celui du dernier \xe9l\xe9ment existant dans la collection, la collection est automatiquement redimensionn\xe9e et les nouveaux \xe9l\xe9ments interm\xe9diaires prennent la valeur null :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var myCol : Collection\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n'})}),"\n",(0,l.jsx)(n.h2,{id:"Instanciation",children:"Instanciation"}),"\n",(0,l.jsx)(n.p,{children:"Les collections doivent avoir \xe9t\xe9 instanci\xe9es, sinon toute tentative de lecture ou de modification de leurs \xe9l\xe9ments g\xe9n\xe8re une erreur de syntaxe."}),"\n",(0,l.jsx)(n.p,{children:"L'instanciation d'une collection peut se faire de l'une des mani\xe8res suivantes :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["en utilisant la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/API/CollectionClass#new-collection",children:(0,l.jsx)(n.code,{children:"New collection"})}),","]}),"\n",(0,l.jsxs)(n.li,{children:["en utilisant l'op\xe9rateur ",(0,l.jsx)(n.code,{children:"[]"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["Plusieurs commandes et fonctions 4D retournent des collections, par exemple ",(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page1713.html",children:(0,l.jsx)(n.code,{children:"Get Monitored Activity"})})," ou ",(0,l.jsx)(n.a,{href:"/docs/fr/API/CollectionClass#copy",children:(0,l.jsx)(n.code,{children:"collection.copy"})}),". Dans ce cas, il n'est pas n\xe9cessaire d'instancier explicitement la collection, le langage 4D le fait pour vous."]})}),"\n",(0,l.jsxs)(n.h3,{id:"Commande-New-collection",children:["Commande ",(0,l.jsx)(n.code,{children:"New collection"})]}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.a,{href:"/docs/fr/API/CollectionClass#new-collection",children:(0,l.jsx)(n.code,{children:"New collection"})})," cr\xe9e une nouvelle collection vide ou pr\xe9remplie et renvoie sa r\xe9f\xe9rence."]}),"\n",(0,l.jsx)(n.p,{children:"Exemples :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $colVar : Collection //d\xe9claration d\'une variable 4D de type collection\n $colVar:=New collection //instanciation de la collection et affectation \xe0 la variable 4D\n \n var $colFilled : Collection\n $colFilled:=New collection("a";"b";1;42;{}) //instanciation et affectation d\'une collection pr\xe9-remplie\n'})}),"\n",(0,l.jsxs)(n.h3,{id:"Op\xe9rateur-",children:["Op\xe9rateur ",(0,l.jsx)(n.code,{children:"[]"})]}),"\n",(0,l.jsxs)(n.p,{children:["L'op\xe9rateur ",(0,l.jsx)(n.code,{children:"[]"})," vous permet de cr\xe9er une ",(0,l.jsx)(n.strong,{children:"collection litt\xe9rale"}),". Une collection litt\xe9rale est une liste de z\xe9ro ou plusieurs expressions, dont chacune repr\xe9sente un \xe9l\xe9ment de collection, entre crochets (",(0,l.jsx)(n.code,{children:"[]"}),"). Lorsque vous cr\xe9ez une collection en utilisant une collection litt\xe9rale, elle est instanci\xe9e avec les valeurs sp\xe9cifi\xe9es comme \xe9l\xe9ments, et sa longueur est d\xe9finie au nombre d'arguments sp\xe9cifi\xe9s."]}),"\n",(0,l.jsxs)(n.p,{children:["Puisque n'importe quel \xe9l\xe9ment est consid\xe9r\xe9 comme une expression, vous pouvez cr\xe9er des sous-collections en utilisant ",(0,l.jsx)(n.code,{children:"[]"})," dans les \xe9l\xe9ments.  Vous pouvez \xe9galement cr\xe9er et r\xe9f\xe9rencer des ",(0,l.jsx)(n.strong,{children:"objets litt\xe9raux"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Si un \xe9l\xe9ment n'est pas d\xe9fini, il appara\xeetra comme Null dans la collection."}),"\n",(0,l.jsx)(n.p,{children:"Exemples :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $col1; $col2; $users : Collection\n$col1:=[] //collection vide\n$col2:=[1; ;3;4;5;6] //collection de nombres\n//collection d\'objets\n$users:=[{name: "Alice"; \\\n\theight: 183; \\\n\teyecolor: "hazel"; \\\n\tid: $col2[5]\\\n\t}; \\\n\t{name : "Bob"; \\\n\thauteur: 172; \\\n\teyecolor: "blue"\\\n}]\n'})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Si vous cr\xe9ez une collection litt\xe9rale contenant un seul \xe9l\xe9ment, assurez-vous que vous n'utilisez pas un nom correspondant \xe0 un nom de table existant, sinon la syntaxe de la table ",(0,l.jsx)(n.code,{children:"[tableName]"})," prendra la priorit\xe9."]})}),"\n",(0,l.jsx)(n.h3,{id:"Collection-standard-ou-collection-partag\xe9e",children:"Collection standard ou collection partag\xe9e"}),"\n",(0,l.jsx)(n.p,{children:"Vous pouvez cr\xe9er deux types de collections :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["des collections standard (non partag\xe9es) en utilisant la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/API/CollectionClass#new-collection",children:(0,l.jsx)(n.code,{children:"New collection"})})," ou la syntaxe de collection litt\xe9rale (",(0,l.jsx)(n.code,{children:"[]"}),"). Ces collections peuvent \xeatre modifi\xe9es sans contr\xf4le d'acc\xe8s sp\xe9cifique mais ne peuvent pas \xeatre partag\xe9es entre les process."]}),"\n",(0,l.jsxs)(n.li,{children:["des collections partag\xe9es, en utilisant la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/API/CollectionClass#new-shared-collection",children:(0,l.jsx)(n.code,{children:"New shared collection"})}),". Le contenu de ces collections peut \xeatre partag\xe9 entre les process, y compris des process (thread) pr\xe9emptifs. L'acc\xe8s \xe0 ces collections est contr\xf4l\xe9 par des structures ",(0,l.jsx)(n.a,{href:"/docs/fr/Concepts/shared#useend-use",children:(0,l.jsx)(n.code,{children:"Use...End use"})}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Pour plus d'informations, consultez la section ",(0,l.jsx)(n.a,{href:"/docs/fr/Concepts/shared",children:"Objets et collections partag\xe9s"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"Fonctions-de-collection",children:"Fonctions de collection"}),"\n",(0,l.jsxs)(n.p,{children:["Les r\xe9f\xe9rences de collections 4D b\xe9n\xe9ficient de fonctions de classe sp\xe9ciales (aussi nomm\xe9es ",(0,l.jsx)(n.em,{children:"fonctions membres"}),"). Les fonctions de collection sont list\xe9es dans la section ",(0,l.jsx)(n.a,{href:"/docs/fr/API/CollectionClass",children:"Collection Class"})," ."]}),"\n",(0,l.jsx)(n.p,{children:"Par exemple :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"$newCol:=$col.copy() //copie de $col vers $newCol\n $col.push(10;100) //ajout de 10 et 100 \xe0 la collection\n"})}),"\n",(0,l.jsx)(n.p,{children:"Certaines fonctions retournent la collection d'origine apr\xe8s modification, de mani\xe8re \xe0 ce que vous puissiez encha\xeener les appels dans une m\xeame s\xe9quence :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"param\xe8tre-propertyPath",children:"param\xe8tre propertyPath"}),"\n",(0,l.jsxs)(n.p,{children:["Plusieurs fonctions acceptent un param\xe8tre ",(0,l.jsx)(n.em,{children:"propertyPath"}),". Ce param\xe8tre peut contenir :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'soit un nom de propri\xe9t\xe9 d\'objet, par exemple "nomComplet"'}),"\n",(0,l.jsx)(n.li,{children:"soit un chemin de propri\xe9t\xe9 d'objet, c'est-\xe0-dire une s\xe9quence hi\xe9rarchique de sous-propri\xe9t\xe9s reli\xe9es par des points, par exemple \"employ\xe9.enfant.pr\xe9nom\"."}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Attention"})," : Lorsque vous utilisez des fonctions et des param\xe8tres ",(0,l.jsx)(n.em,{children:"propertyPath"}),', vous ne pouvez pas utiliser ".", "[ ]" ou des espaces dans les noms de propri\xe9t\xe9s, car cela emp\xeacherait 4D d\'analyser correctement le chemin :']}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $vmin:=$col.min("My.special.property") //undefined\n $vmin:=$col.min(["My.special.property"]) //erreur\n'})}),"\n",(0,l.jsx)(n.h2,{id:"Undefined",children:"Undefined"}),"\n",(0,l.jsxs)(n.p,{children:["La lecture de la propri\xe9t\xe9 ",(0,l.jsx)(n.strong,{children:"length"})," d'une collection undefined produit 0 :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"     var $c : Collection //variable cr\xe9\xe9e mais aucune collection n'est d\xe9finie\n     $size:=$c.length //$size = 0\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},221020:(e,n,o)=>{var l=o(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,o){var l,c={},a=null,d=null;for(l in void 0!==o&&(a=""+o),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)t.call(n,l)&&!r.hasOwnProperty(l)&&(c[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===c[l]&&(c[l]=n[l]);return{$$typeof:s,type:e,key:a,ref:d,props:c,_owner:i.current}}n.Fragment=c,n.jsx=a,n.jsxs=a},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>i});var l=o(296540);const s={},c=l.createContext(s);function t(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);