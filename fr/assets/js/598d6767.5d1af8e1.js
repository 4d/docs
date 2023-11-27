"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34980],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<r;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});t(67294);var o=t(3905);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},l.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const a={id:"collection",title:"Collection"},i=void 0,c={unversionedId:"Concepts/collection",id:"version-19/Concepts/collection",title:"Collection",description:"Les collections sont des listes ordonn\xe9es de valeurs de types similaires ou diff\xe9rents (texte, nombre, date, objet, bool\xe9en, collection ou null).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/fr/19/Concepts/collection",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Boolean",permalink:"/docs/fr/19/Concepts/boolean"},next:{title:"Date",permalink:"/docs/fr/19/Concepts/date"}},s={},p=[{value:"Initialisation",id:"initialisation",level:2},{value:"Collection standard ou collection partag\xe9e",id:"collection-standard-ou-collection-partag\xe9e",level:3},{value:"Fonctions de collection",id:"fonctions-de-collection",level:2},{value:"param\xe8tre cheminPropri\xe9t\xe9",id:"param\xe8tre-cheminpropri\xe9t\xe9",level:3}],u={toc:p};function d(e){var{components:n}=e,t=r(e,["components"]);return(0,o.kt)("wrapper",l({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Les collections sont des listes ordonn\xe9es de valeurs de types similaires ou diff\xe9rents (texte, nombre, date, objet, bool\xe9en, collection ou null)."),(0,o.kt)("p",null,"Pour manipuler les variables de type Collection, vous devez utiliser la notation objet (voir ",(0,o.kt)("a",l({parentName:"p"},{href:"/docs/fr/19/Concepts/object#syntax-basics"}),"Les bases de la syntaxe"),")."),(0,o.kt)("p",null,"Pour des informations compl\xe9mentaires sur les collections 4D, passez le num\xe9ro (l'indice) de l'\xe9l\xe9ment entre crochets :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"collectionRef[expression]\n")),(0,o.kt)("p",null,"Vous pouvez passer toute expression 4D valide qui retourne un nombre entier positif dans ",(0,o.kt)("em",{parentName:"p"},"expression"),". Exemples :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"})," myCollection[5]  //acc\xe8s au 6e \xe9l\xe9ment de la collection\n myCollection[$var]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attention :")," N'oubliez pas que la num\xe9rotation des \xe9l\xe9ments de collection d\xe9bute \xe0 0."),(0,o.kt)("p",null,"Vous pouvez assigner une valeur \xe0 un \xe9l\xe9ment de collection ou lire une valeur d'\xe9l\xe9ment de collection :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' myCol[10]:="Mon nouvel \xe9l\xe9ment"\n $myVar:=myCol[0]\n')),(0,o.kt)("p",null,"Si vous assignez un num\xe9ro d'\xe9l\xe9ment plus grand que celui du dernier \xe9l\xe9ment existant dans la collection, la collection est automatiquement redimensionn\xe9e et les nouveaux \xe9l\xe9ments interm\xe9diaires prennent la valeur null :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' var myCol : Collection\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n')),(0,o.kt)("h2",l({},{id:"initialisation"}),"Initialisation"),(0,o.kt)("p",null,"Les collections doivent \xeatre initialis\xe9es \xe0 l'aide, par exemple, de la commande ",(0,o.kt)("inlineCode",{parentName:"p"},"Creer collection"),", sinon une erreur de syntaxe sera g\xe9n\xe9r\xe9e \xe0 la suite d'une lecture ou d'une modification d'un ou plusieurs \xe9lements de la collection."),(0,o.kt)("p",null,"Voici un exemple :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"})," var $colVar : Collection //cr\xe9ation d'une variable 4D de type collection\n $colVar:=New collection ///initialisation de la collection et assignation \xe0 la variable 4D\n")),(0,o.kt)("h3",l({},{id:"collection-standard-ou-collection-partag\xe9e"}),"Collection standard ou collection partag\xe9e"),(0,o.kt)("p",null,"Vous pouvez cr\xe9er deux types de collections :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"collections standard (non partag\xe9es), \xe0 l'aide de la commande ",(0,o.kt)("a",l({parentName:"li"},{href:"/docs/fr/19/API/CollectionClass#new-collection"}),(0,o.kt)("inlineCode",{parentName:"a"},"New collection")),". Ces collections peuvent \xeatre modifi\xe9es sans contr\xf4le d'acc\xe8s sp\xe9cifique mais ne peuvent pas \xeatre partag\xe9es entre les process."),(0,o.kt)("li",{parentName:"ul"},"collections partag\xe9es, \xe0 l'aide de la commande ",(0,o.kt)("a",l({parentName:"li"},{href:"/docs/fr/19/API/CollectionClass#new-shared-collection"}),(0,o.kt)("inlineCode",{parentName:"a"},"New shared collection")),". Le contenu de ces collections peut \xeatre partag\xe9 entre les process, y compris des process (thread) pr\xe9emptifs. L'acc\xe8s \xe0 ces collections doit \xeatre contr\xf4l\xe9 via des structures ",(0,o.kt)("a",l({parentName:"li"},{href:"/docs/fr/19/Concepts/shared#useend-use"}),(0,o.kt)("inlineCode",{parentName:"a"},"Use...End use")),".")),(0,o.kt)("p",null,"Pour plus d'informations, veuillez vous reporter \xe0 la page ",(0,o.kt)("a",l({parentName:"p"},{href:"/docs/fr/19/Concepts/shared"}),"Objets partag\xe9s et collections partag\xe9es"),"."),(0,o.kt)("h2",l({},{id:"fonctions-de-collection"}),"Fonctions de collection"),(0,o.kt)("p",null,"Les r\xe9f\xe9rences de collections 4D b\xe9n\xe9ficient de fonctions de classe sp\xe9cifiques (souvent appel\xe9es ",(0,o.kt)("em",{parentName:"p"},"fonctions m\xe9thodes"),"). Les fonctions de collection sont r\xe9pertori\xe9es dans la section ",(0,o.kt)("a",l({parentName:"p"},{href:"/docs/fr/19/API/CollectionClass"}),"Class API Reference"),"."),(0,o.kt)("p",null,"Par exemple :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"$newCol:=$col.copy() //copie de $col vers $newCol\n $col.push(10;100) //ajout de 10 et 100 \xe0 la collection\n")),(0,o.kt)("p",null,"Certaines fonctions retournent la collection d'origine apr\xe8s modification, de mani\xe8re \xe0 ce que vous puissiez encha\xeener les appels dans une m\xeame s\xe9quence :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"})," $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n")),(0,o.kt)("h3",l({},{id:"param\xe8tre-cheminpropri\xe9t\xe9"}),"param\xe8tre cheminPropri\xe9t\xe9"),(0,o.kt)("p",null,"Plusieurs fonctions admettent un param\xe8tre nomm\xe9 ",(0,o.kt)("em",{parentName:"p"},"cheminPropri\xe9t\xe9"),". Ce param\xe8tre peut contenir :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'soit un nom de propri\xe9t\xe9 d\'objet, par exemple "nomComplet"'),(0,o.kt)("li",{parentName:"ul"},"soit un chemin de propri\xe9t\xe9 d'objet, c'est-\xe0-dire une s\xe9quence hi\xe9rarchique de sous-propri\xe9t\xe9s reli\xe9es par des points, par exemple \"employ\xe9.enfant.pr\xe9nom\".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attention :"),' Lorsque des fonctions ou un param\xe8tre cheminPropri\xe9t\xe9 sont attendus, l\'utilisation de noms de propri\xe9t\xe9s contenant ".", "',"[ ]","\", ou des espaces n'est pas prise en charge car cela emp\xeacherait 4D d'analyser correctement le chemin :"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-4d"}),' $vmin:=$col.min("My.special.property") //ind\xe9fini\n $vmin:=$col.min(["My.special.property"]) //erreur\n')))}d.isMDXComponent=!0}}]);