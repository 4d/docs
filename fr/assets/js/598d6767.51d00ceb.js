/*! For license information please see 598d6767.51d00ceb.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30545],{689407:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var l=o(474848),s=o(28453);const t={id:"collection",title:"Collection"},c=void 0,r={id:"Concepts/collection",title:"Collection",description:"Les collections sont des listes ordonn\xe9es de valeurs de types similaires ou diff\xe9rents (texte, nombre, date, objet, bool\xe9en, collection ou null).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/fr/19/Concepts/collection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Boolean",permalink:"/docs/fr/19/Concepts/boolean"},next:{title:"Date",permalink:"/docs/fr/19/Concepts/date"}},i={},a=[{value:"Initialisation",id:"initialisation",level:2},{value:"Collection standard ou collection partag\xe9e",id:"collection-standard-ou-collection-partag\xe9e",level:3},{value:"Fonctions de collection",id:"fonctions-de-collection",level:2},{value:"param\xe8tre propertyPath",id:"param\xe8tre-propertypath",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Les collections sont des listes ordonn\xe9es de valeurs de types similaires ou diff\xe9rents (texte, nombre, date, objet, bool\xe9en, collection ou null)."}),"\n",(0,l.jsxs)(n.p,{children:["Pour manipuler les variables de type Collection, vous devez utiliser la notation objet (voir ",(0,l.jsx)(n.a,{href:"/docs/fr/19/Concepts/object#syntax-basics",children:"Les bases de la syntaxe"}),")."]}),"\n",(0,l.jsx)(n.p,{children:"Pour acc\xe9der \xe0 un \xe9l\xe9ment d'une collection, vous devez passer le num\xe9ro de l'\xe9l\xe9ment entre crochets :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"collectionRef[expression]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez passer toute expression 4D valide qui retourne un nombre entier positif dans ",(0,l.jsx)(n.em,{children:"expression"}),". Exemples :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" myCollection[5]  //acc\xe8s au 6e \xe9l\xe9ment de la collection\n myCollection[$var]\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Attention :"})," N'oubliez pas que la num\xe9rotation des \xe9l\xe9ments de collection d\xe9bute \xe0 0."]}),"\n",(0,l.jsx)(n.p,{children:"Vous pouvez assigner une valeur \xe0 un \xe9l\xe9ment de collection ou lire une valeur d'\xe9l\xe9ment de collection :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' myCol[10]:="Mon nouvel \xe9l\xe9ment"\n $myVar:=myCol[0]\n'})}),"\n",(0,l.jsx)(n.p,{children:"Si vous assignez un num\xe9ro d'\xe9l\xe9ment plus grand que celui du dernier \xe9l\xe9ment existant dans la collection, la collection est automatiquement redimensionn\xe9e et les nouveaux \xe9l\xe9ments interm\xe9diaires prennent la valeur null :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var myCol : Collection\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n'})}),"\n",(0,l.jsx)(n.h2,{id:"initialisation",children:"Initialisation"}),"\n",(0,l.jsxs)(n.p,{children:["Les collections doivent \xeatre initialis\xe9es \xe0 l'aide, par exemple, de la commande ",(0,l.jsx)(n.code,{children:"Creer collection"}),", sinon une erreur de syntaxe sera g\xe9n\xe9r\xe9e \xe0 la suite d'une lecture ou d'une modification d'un ou plusieurs \xe9lements de la collection."]}),"\n",(0,l.jsx)(n.p,{children:"Voici un exemple :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" var $colVar : Collection //cr\xe9ation d'une variable 4D de type collection\n $colVar:=New collection ///initialisation de la collection et assignation \xe0 la variable 4D\n"})}),"\n",(0,l.jsx)(n.h3,{id:"collection-standard-ou-collection-partag\xe9e",children:"Collection standard ou collection partag\xe9e"}),"\n",(0,l.jsx)(n.p,{children:"Vous pouvez cr\xe9er deux types de collections :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["collections standard (non partag\xe9es), \xe0 l'aide de la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/19/API/CollectionClass#new-collection",children:(0,l.jsx)(n.code,{children:"New collection"})}),". Ces collections peuvent \xeatre modifi\xe9es sans contr\xf4le d'acc\xe8s sp\xe9cifique mais ne peuvent pas \xeatre partag\xe9es entre les process."]}),"\n",(0,l.jsxs)(n.li,{children:["des collections partag\xe9es, \xe0 l'aide de la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/19/API/CollectionClass#new-shared-collection",children:(0,l.jsx)(n.code,{children:"New shared collection"})}),". Le contenu de ces collections peut \xeatre partag\xe9 entre les process, y compris des process (thread) pr\xe9emptifs. L'acc\xe8s \xe0 ces collections doit \xeatre contr\xf4l\xe9 via des structures ",(0,l.jsx)(n.a,{href:"/docs/fr/19/Concepts/shared#useend-use",children:(0,l.jsx)(n.code,{children:"Use...End use"})}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Pour plus d'informations, veuillez vous reporter \xe0 la page ",(0,l.jsx)(n.a,{href:"/docs/fr/19/Concepts/shared",children:"Objets partag\xe9s et collections partag\xe9es"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"fonctions-de-collection",children:"Fonctions de collection"}),"\n",(0,l.jsxs)(n.p,{children:["Les r\xe9f\xe9rences de collections 4D b\xe9n\xe9ficient de fonctions de classe sp\xe9cifiques (souvent appel\xe9es ",(0,l.jsx)(n.em,{children:"fonctions membres"}),"). Les fonctions de collection sont r\xe9pertori\xe9es dans la section ",(0,l.jsx)(n.a,{href:"/docs/fr/19/API/CollectionClass",children:"Class API Reference"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Par exemple :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"$newCol:=$col.copy() //copie de $col vers $newCol\n $col.push(10;100) //ajout de 10 et 100 \xe0 la collection\n"})}),"\n",(0,l.jsx)(n.p,{children:"Certaines fonctions retournent la collection d'origine apr\xe8s modification, de mani\xe8re \xe0 ce que vous puissiez encha\xeener les appels dans une m\xeame s\xe9quence :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"param\xe8tre-propertypath",children:"param\xe8tre propertyPath"}),"\n",(0,l.jsxs)(n.p,{children:["Plusieurs fonctions acceptent un param\xe8tre nomm\xe9 ",(0,l.jsx)(n.em,{children:"propertyPath"}),". Ce param\xe8tre peut contenir :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'soit un nom de propri\xe9t\xe9 d\'objet, par exemple "nomComplet"'}),"\n",(0,l.jsx)(n.li,{children:"soit un chemin de propri\xe9t\xe9 d'objet, c'est-\xe0-dire une s\xe9quence hi\xe9rarchique de sous-propri\xe9t\xe9s reli\xe9es par des points, par exemple \"employ\xe9.enfant.pr\xe9nom\"."}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Attention :"}),' Lorsque des fonctions ou un param\xe8tre cheminPropri\xe9t\xe9 sont attendus, l\'utilisation de noms de propri\xe9t\xe9s contenant ".", "[ ]", ou des espaces n\'est pas prise en charge car cela emp\xeacherait 4D d\'analyser correctement le chemin :']}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $vmin:=$col.min("My.special.property") //undefined\n $vmin:=$col.min(["My.special.property"]) //erreur\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},221020:(e,n,o)=>{var l=o(296540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,o){var l,t={},a=null,d=null;for(l in void 0!==o&&(a=""+o),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,l)&&!i.hasOwnProperty(l)&&(t[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===t[l]&&(t[l]=n[l]);return{$$typeof:s,type:e,key:a,ref:d,props:t,_owner:r.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>r});var l=o(296540);const s={},t=l.createContext(s);function c(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);