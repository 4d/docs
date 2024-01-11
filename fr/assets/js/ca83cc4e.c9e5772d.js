"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5121],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(667294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},447066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});n(667294);var o=n(603905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const a={id:"collection",title:"Collection"},i=void 0,s={unversionedId:"Concepts/collection",id:"version-18/Concepts/collection",title:"Collection",description:"Les collections sont des listes ordonn\xe9es de valeurs de types similaires ou diff\xe9rents (texte, nombre, objet, bool\xe9en, collection ou null).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/fr/18/Concepts/collection",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Boolean",permalink:"/docs/fr/18/Concepts/boolean"},next:{title:"Date",permalink:"/docs/fr/18/Concepts/date"}},c={},p=[{value:"Initialisation",id:"initialisation",level:2},{value:"Collection standard ou collection partag\xe9e",id:"collection-standard-ou-collection-partag\xe9e",level:3},{value:"M\xe9thodes de collection",id:"m\xe9thodes-de-collection",level:2},{value:"param\xe8tre cheminPropri\xe9t\xe9",id:"param\xe8tre-cheminpropri\xe9t\xe9",level:3}],u={toc:p};function d(e){var{components:t}=e,n=r(e,["components"]);return(0,o.kt)("wrapper",l({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Les collections sont des listes ordonn\xe9es de valeurs de types similaires ou diff\xe9rents (texte, nombre, objet, bool\xe9en, collection ou null)."),(0,o.kt)("p",null,"Pour manipuler les variables de type Collection, vous devez utiliser la notation objet (voir ",(0,o.kt)("a",l({parentName:"p"},{href:"/docs/fr/18/Concepts/object#syntax-basics"}),"Utiliser la notation objet"),")."),(0,o.kt)("p",null,"Pour des informations compl\xe9mentaires sur les collections 4D, passez le num\xe9ro (l'indice) de l'\xe9l\xe9ment entre crochets :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"collectionRef[expression]\n")),(0,o.kt)("p",null,"Vous pouvez passer toute expression 4D valide qui retourne un nombre entier positif dans expression. Exemples :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"})," myCollection[5]  //acc\xe8s au 6e \xe9l\xe9ment de la collection\n myCollection[$var]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attention :")," N'oubliez pas que la num\xe9rotation des \xe9l\xe9ments de collection d\xe9bute \xe0 0."),(0,o.kt)("p",null,"Vous pouvez assigner une valeur \xe0 un \xe9l\xe9ment de collection ou lire une valeur d'\xe9l\xe9ment de collection \xe0 l'aide de la notation objet :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' myCol[10]:="Mon nouvel \xe9l\xe9ment"\n $myVar:=myCol[0]\n')),(0,o.kt)("p",null,"Si vous assignez un num\xe9ro d'\xe9l\xe9ment plus grand que celui du dernier \xe9l\xe9ment existant dans la collection, la collection est automatiquement redimensionn\xe9e et les nouveaux \xe9l\xe9ments interm\xe9diaires prennent la valeur null :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' C_COLLECTION(myCol)\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n')),(0,o.kt)("h2",l({},{id:"initialisation"}),"Initialisation"),(0,o.kt)("p",null,"Les collections doivent \xeatre initialis\xe9es \xe0 l'aide, par exemple, de la commande ",(0,o.kt)("inlineCode",{parentName:"p"},"Creer collection"),", sinon une erreur de syntaxe sera g\xe9n\xe9r\xe9e \xe0 la suite d'une lecture ou d'une modification d'un ou plusieurs \xe9lements de la collection."),(0,o.kt)("p",null,"Voici un exemple :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"})," C_COLLECTION($colVar) //cr\xe9ation d'une variable 4D de type collection. $colVar:=New collection //initialisation de la collection et assignation \xe0 la variable 4D\n")),(0,o.kt)("h3",l({},{id:"collection-standard-ou-collection-partag\xe9e"}),"Collection standard ou collection partag\xe9e"),(0,o.kt)("p",null,"Vous pouvez cr\xe9er deux types de collections :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"standard (non partag\xe9es), \xe0 l'aide de la commande ",(0,o.kt)("inlineCode",{parentName:"li"},"New collection"),". Ces collections peuvent \xeatre modifi\xe9es sans contr\xf4le d'acc\xe8s sp\xe9cifique mais ne peuvent pas \xeatre partag\xe9es entre les process."),(0,o.kt)("li",{parentName:"ul"},"partag\xe9es, \xe0 l'aide de la commande ",(0,o.kt)("inlineCode",{parentName:"li"},"New shared collection"),". Le contenu de ces collections peut \xeatre partag\xe9 entre les process, y compris des process (thread) pr\xe9emptifs. These collections can be shared between processes, including preemptive threads. Pour plus d'informations, veuillez vous reporter \xe0 la page ",(0,o.kt)("a",l({parentName:"li"},{href:"/docs/fr/18/Concepts/shared"}),"Objets partag\xe9s et collections partag\xe9es"),".")),(0,o.kt)("h2",l({},{id:"m\xe9thodes-de-collection"}),"M\xe9thodes de collection"),(0,o.kt)("p",null,"Les r\xe9f\xe9rences de collections 4D b\xe9n\xe9ficient de m\xe9thodes sp\xe9cifiques (souvent appel\xe9es ",(0,o.kt)("em",{parentName:"p"},"fonctions m\xe9thodes"),"). Gr\xe2ce \xe0 la notation objet, ces m\xe9thodes sont appliqu\xe9es sur les r\xe9f\xe9rences de collections \xe0 l'aide de la syntaxe suivante :"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"{$result:=}myCollection.method( {params} )")),(0,o.kt)("p",null,"A noter que, m\xeame si elle n'a pas de param\xe8tres, une m\xe9thode membre doit \xeatre appel\xe9e avec les parenth\xe8ses ( ) (op\xe9rateur d'ex\xe9cution de m\xe9thode), sinon une erreur de syntaxe est g\xe9n\xe9r\xe9e."),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"$newCol:=$col.copy() //copie de $col vers $newCol\n $col.push(10;100) //ajout de 10 et 100 \xe0 la collection\n")),(0,o.kt)("p",null,"Certaines m\xe9thodes retournent la collection d'origine apr\xe8s modification, de mani\xe8re \xe0 ce que vous puissiez encha\xeener les appels dans une m\xeame s\xe9quence :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"})," $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n")),(0,o.kt)("h3",l({},{id:"param\xe8tre-cheminpropri\xe9t\xe9"}),"param\xe8tre cheminPropri\xe9t\xe9"),(0,o.kt)("p",null,"Plusieurs m\xe9thodes de collection admettent un ",(0,o.kt)("em",{parentName:"p"},"param\xe8tre nomm\xe9 cheminPropri\xe9t\xe9"),". Ce param\xe8tre peut contenir :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'soit un nom de propri\xe9t\xe9 d\'objet, par exemple "nomComplet"'),(0,o.kt)("li",{parentName:"ul"},"soit un chemin de propri\xe9t\xe9 d'objet, c'est-\xe0-dire une s\xe9quence hi\xe9rarchique de sous-propri\xe9t\xe9s reli\xe9es par des points, par exemple \"employ\xe9.enfant.pr\xe9nom\".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attention :"),' Lorsqu\'un param\xe8tre cheminPropri\xe9t\xe9 est attendu, l\'utilisation de noms de propri\xe9t\xe9s contenant ".", "',"[ ]","\", ou des espaces n'est pas prise en charge car cela emp\xeacherait 4D d'analyser correctement le chemin:"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' $vmin:=$col.min("My.special.property") //ind\xe9fini\n $vmin:=$col.min(["My.special.property"]) //erreur\n')))}d.isMDXComponent=!0}}]);