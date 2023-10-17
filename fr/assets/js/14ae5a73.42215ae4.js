"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67310],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,f=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"manData",title:"Manipulation des donn\xe9es"},i=void 0,o={unversionedId:"REST/manData",id:"version-18/REST/manData",title:"Manipulation des donn\xe9es",description:"Touts les attributs, classes et m\xe9thodes du datastore expos\xe9s sont accessibles via REST. Les noms de dataclass, d'attributs et de m\xe9thodes sont sensibles \xe0 la casse; contrairement aux donn\xe9es des requ\xeates.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/manData.md",sourceDirName:"REST",slug:"/REST/manData",permalink:"/docs/fr/18/REST/manData",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FmanData.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"manData",title:"Manipulation des donn\xe9es"},sidebar:"docs",previous:{title:"Obtenir des informations du serveur",permalink:"/docs/fr/18/REST/genInfo"},next:{title:"A propos des requ\xeates REST",permalink:"/docs/fr/18/REST/REST_requests"}},u={},p=[{value:"Rechercher des donn\xe9es",id:"rechercher-des-donn\xe9es",level:2},{value:"Adding, modifying, and deleting entities",id:"adding-modifying-and-deleting-entities",level:2},{value:"Navigating data",id:"navigating-data",level:2},{value:"Creating and managing entity set",id:"creating-and-managing-entity-set",level:2},{value:"Calculating data",id:"calculating-data",level:2},{value:"Obtenir des donn\xe9es \xe0 partir de m\xe9thodes",id:"obtenir-des-donn\xe9es-\xe0-partir-de-m\xe9thodes",level:2},{value:"Selecting Attributes to get",id:"selecting-attributes-to-get",level:2},{value:"Exemples",id:"exemples",level:3},{value:"Exemple avec une dataclass",id:"exemple-avec-une-dataclass",level:4},{value:"Exemple d&#39;entit\xe9",id:"exemple-dentit\xe9",level:4},{value:"Exemple d&#39;ensemble d&#39;entit\xe9s",id:"exemple-densemble-dentit\xe9s",level:4},{value:"Affichage d&#39;un attribut d&#39;image",id:"affichage-dun-attribut-dimage",level:2},{value:"Enregistrement d&#39;un attribut BLOB sur le disque",id:"enregistrement-dun-attribut-blob-sur-le-disque",level:2},{value:"R\xe9cup\xe9rer une seule entit\xe9",id:"r\xe9cup\xe9rer-une-seule-entit\xe9",level:2}],d={toc:p};function m(e){var{components:t}=e,s=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Touts ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/configuration#exposing-tables-and-fields"}),"les attributs, classes")," et m\xe9thodes du datastore expos\xe9s sont accessibles via REST. Les noms de dataclass, d'attributs et de m\xe9thodes sont sensibles \xe0 la casse; contrairement aux donn\xe9es des requ\xeates."),(0,a.kt)("h2",r({},{id:"rechercher-des-donn\xe9es"}),"Rechercher des donn\xe9es"),(0,a.kt)("p",null,"Pour rechercher directement des donn\xe9es, vous pouvez utiliser la fonction ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/filter"}),(0,a.kt)("inlineCode",{parentName:"a"},"$filter")),'. Par exemple, pour trouver une personne nomm\xe9e "Smith", vous pouvez \xe9crire :'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"')),(0,a.kt)("h2",r({},{id:"adding-modifying-and-deleting-entities"}),"Adding, modifying, and deleting entities"),(0,a.kt)("p",null,"Avec l'API REST, vous pouvez effectuer toutes les manipulations de donn\xe9es souhait\xe9es dans 4D."),(0,a.kt)("p",null,"Pour ajouter et modifier des entit\xe9s, vous pouvez appeler ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/method#methodupdate"}),(0,a.kt)("inlineCode",{parentName:"a"},"$method=update")),". Si vous souhaitez supprimer une ou plusieurs entit\xe9s, vous pouvez utiliser ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/method#methoddelete"}),(0,a.kt)("inlineCode",{parentName:"a"},"$method=delete")),"."),(0,a.kt)("p",null,"Outre la r\xe9cup\xe9ration d'une seule entit\xe9 dans une dataclass \xe0 l'aide de ",(0,a.kt)("a",r({parentName:"p"},{href:"%7BdataClass%7D_%7Bkey%7D.html"}),"{dataClass}({key})"),", vous pouvez \xe9galement \xe9crire une m\xe9thode dans votre classe DataClass et l'appeler pour retourner une entity selection (ou une collection) \xe0 l'aide de ",(0,a.kt)("a",r({parentName:"p"},{href:"%7BdataClass%7D.html#dataclassmethod"}),"{dataClass}/{method}"),"."),(0,a.kt)("p",null,"Avant de retourner la collection, vous pouvez \xe9galement la trier en utilisant ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/orderby"}),(0,a.kt)("inlineCode",{parentName:"a"},"$orderby"))," un ou plusieurs attributs (m\xeame les attributs de relation)."),(0,a.kt)("h2",r({},{id:"navigating-data"}),"Navigating data"),(0,a.kt)("p",null,"Ajoutez le ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/skip"}),(0,a.kt)("inlineCode",{parentName:"a"},"$skip"))," (pour d\xe9finir avec quelle entit\xe9 commencer) et ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/top_$limit"}),(0,a.kt)("inlineCode",{parentName:"a"},"$top/$limit"))," (pour d\xe9finir le nombre d'entit\xe9s \xe0 retourner) des requ\xeates REST \xe0 vos requ\xeates ou entity selections pour parcourir la collection d'entit\xe9s."),(0,a.kt)("h2",r({},{id:"creating-and-managing-entity-set"}),"Creating and managing entity set"),(0,a.kt)("p",null,"Un ensemble d'entit\xe9s (\xe9galement appel\xe9 ",(0,a.kt)("em",{parentName:"p"},"entity set")," ou <0>entity selection</0>) est une collection d'entit\xe9s obtenue via une requ\xeate REST stock\xe9e dans le cache de 4D Server. L'utilisation d'un entity set vous emp\xeache de lancer continuellement des requ\xeates \xe0 votre application pour obtenir les m\xeames r\xe9sultats. L'acc\xe8s \xe0 un entity set est beaucoup plus rapide et peut am\xe9liorer la vitesse de votre application."),(0,a.kt)("p",null,"Pour cr\xe9er un entity set, appelez ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/method#methodentityset"}),(0,a.kt)("inlineCode",{parentName:"a"},"$method=entityset"))," dans votre requ\xeate REST. Par mesure de s\xe9curit\xe9, vous pouvez \xe9galement utiliser ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/savedfilter"}),(0,a.kt)("inlineCode",{parentName:"a"},"$savedfilter"))," et/ou ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/savedorderby"}),(0,a.kt)("inlineCode",{parentName:"a"},"$savedorderby"))," lorsque vous appelez ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/filter"}),(0,a.kt)("inlineCode",{parentName:"a"},"$filter"))," et/ou ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/orderby"}),(0,a.kt)("inlineCode",{parentName:"a"},"$orderby"))," afin que l'entit\xe9 d\xe9finie puisse \xeatre rapidement r\xe9cup\xe9r\xe9e avec le m\xeame ID que pr\xe9c\xe9demment, dans le cas o\xf9 elle expireait ou serait supprim\xe9e du serveur."),(0,a.kt)("p",null,"Pour acc\xe9der \xe0 l'entity set, vous devez utiliser ",(0,a.kt)("inlineCode",{parentName:"p"},"$entityset/{entitySetID}"),", par exemple :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF")),(0,a.kt)("p",null,"Par d\xe9faut, un entity set est stock\xe9 pendant deux heures; cependant, vous pouvez modifier le timeout en passant une nouvelle valeur \xe0 ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/timeout"}),(0,a.kt)("inlineCode",{parentName:"a"},"$timeout")),". Le timeout est continuellement r\xe9initialis\xe9 \xe0 la valeur d\xe9finie (soit par d\xe9faut soit \xe0 celle que vous d\xe9finissez) chaque fois que vous l'utilisez."),(0,a.kt)("p",null,"Si vous souhaitez supprimer un entity set du cache de 4D Server, vous pouvez utiliser ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/method#methodrelease"}),(0,a.kt)("inlineCode",{parentName:"a"},"$method=release")),"."),(0,a.kt)("p",null,"Si vous modifiez l'un des attributs de l'entit\xe9 dans l'entity set, les valeurs seront mises \xe0 jour. Toutefois, si vous modifiez une valeur qui faisait partie de la requ\xeate ex\xe9cut\xe9e pour cr\xe9er l'entity set, elle ne sera pas supprim\xe9e de l'entity set m\xeame si elle ne correspond plus aux crit\xe8res de recherche. Bien entendu, les entit\xe9s que vous supprimez ne feront plus partie de l'entity set."),(0,a.kt)("p",null,"Si l'ensemble d'entit\xe9s ne se trouve plus dans le cache de 4D Server, il sera recr\xe9\xe9 avec un nouveau timeout de 10 minutes. L'ensemble d'entit\xe9s sera actualis\xe9 (certaines entit\xe9s peuvent \xeatre incluses tandis que d'autres peuvent \xeatre supprim\xe9es) depuis la derni\xe8re fois qu'il a \xe9t\xe9 cr\xe9\xe9, s'il n'existait plus avant de le recr\xe9er."),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/entityset#entitysetentitysetidoperatorothercollection"}),(0,a.kt)("inlineCode",{parentName:"a"},"$entityset/{entitySetID}?$logicOperator... &$otherCollection")),", you can combine two entity sets that you previously created. Vous pouvez combiner les r\xe9sultats dans les deux, retourner uniquement ce qui est commun aux deux, ou renvoyer ce qui n'est pas commun aux deux."),(0,a.kt)("p",null,"Une nouvelle s\xe9lection d'entit\xe9s est renvoy\xe9e; vous pouvez n\xe9anmoins cr\xe9er un nouvel ensemble d'entit\xe9s en appelant ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/method#methodentityset"}),(0,a.kt)("inlineCode",{parentName:"a"},"$method=entityset"))," \xe0 la fin de la requ\xeate REST."),(0,a.kt)("h2",r({},{id:"calculating-data"}),"Calculating data"),(0,a.kt)("p",null,"En utilisant ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/compute"}),(0,a.kt)("inlineCode",{parentName:"a"},"$compute")),", vous pouvez calculer la ",(0,a.kt)("strong",{parentName:"p"},"moyenne"),", le ",(0,a.kt)("strong",{parentName:"p"},"nombre"),", le ",(0,a.kt)("strong",{parentName:"p"},"min"),", le ",(0,a.kt)("strong",{parentName:"p"},"max")," ou la ",(0,a.kt)("strong",{parentName:"p"},"somme")," pour un attribut sp\xe9cifique d'une dataclass. Vous pouvez \xe9galement calculer toutes les valeurs avec le mot cl\xe9 $all."),(0,a.kt)("p",null,"Par exemple, pour obtenir le salaire le plus \xe9lev\xe9 :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/rest/Employee/salary/?$compute=sum")),(0,a.kt)("p",null,"Pour calculer toutes les valeurs et retourner un objet JSON :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/rest/Employee/salary/?$compute=$all")),(0,a.kt)("h2",r({},{id:"obtenir-des-donn\xe9es-\xe0-partir-de-m\xe9thodes"}),"Obtenir des donn\xe9es \xe0 partir de m\xe9thodes"),(0,a.kt)("p",null,"Vous pouvez appeler des m\xe9thodes projet 4D ",(0,a.kt)("a",r({parentName:"p"},{href:"%7BdataClass%7D.html#4d-configuration"}),"expos\xe9es en tant que service REST"),". Une m\xe9thode 4D peut retourner en $0 :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"un objet"),(0,a.kt)("li",{parentName:"ul"},"une collection")),(0,a.kt)("p",null,"L'exemple suivant est une m\xe9thode de dataclass qui re\xe7oit des param\xe8tres et retourne un objet :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'// m\xe9thode 4D findPerson\nC_TEXT($1;$firstname;$2;$lastname)\n$firstname:=$1\n$lastname:=$2\n\n$0:=ds.Employee.query("firstname = :1 and lastname = :2";$firstname;$lastname).first().toObject()\n')),(0,a.kt)("p",null,"Les propri\xe9t\xe9s de la m\xe9thode sont configur\xe9es en cons\xe9quence c\xf4t\xe9 projet 4D :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(365020).Z,width:"552",height:"360"})),(0,a.kt)("p",null,"Vous pouvez ensuite envoyer la requ\xeate REST POST suivante, \xe0 l'aide par exemple de la commande 4D ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP Request")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_TEXT($content)\nC_OBJECT($response)\n\n$content:="[\\"Toni\\",\\"Dickey\\"]" \n\n$statusCode:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/Employee/findPerson";$content;$response)\n')),(0,a.kt)("p",null,"Les appels de m\xe9thode sont d\xe9taill\xe9s dans la section ",(0,a.kt)("a",r({parentName:"p"},{href:"%7BdataClass%7D.html#dataclassmethod-and-dataclasskeymethod"}),"{dataClass}"),"."),(0,a.kt)("h2",r({},{id:"selecting-attributes-to-get"}),"Selecting Attributes to get"),(0,a.kt)("p",null,"Vous pouvez toujours d\xe9finir les attributs \xe0 retourner dans la r\xe9ponse REST apr\xe8s une requ\xeate initiale en passant leur chemin d'acc\xe8s dans la requ\xeate (par exemple, ",(0,a.kt)("inlineCode",{parentName:"p"},"Company(1)/name,revenues/"),")"),(0,a.kt)("p",null,"Vous pouvez appliquer ce filtre comme suit :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Syntaxe"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Exemple"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"{dataClass}/{att1,att2...}"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/People/firstName,lastName")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection d'entit\xe9s"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'{dataClass}/{att1,att2...}/?$filter="{filter}"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/People/firstName,lastName/?$filter=\"lastName='a@'\"")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Entit\xe9 sp\xe9cifique"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"{dataClass}({ID})/{att1,att2...}"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/People(1)/firstName,lastName")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"{dataClass}:{attribute}(value)/{att1,att2...}/"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/People:firstName(Larry)/firstName,lastName/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Entity selection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"{dataClass}/{att1,att2...}/$entityset/{entitySetID}"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/People/firstName/$entityset/528BF90F10894915A4290158B4281E61")))),(0,a.kt)("p",null,"Les attributs doivent \xeatre d\xe9limit\xe9s par une virgule, c'est-\xe0-dire ",(0,a.kt)("inlineCode",{parentName:"p"},"/Employee/firstName,lastName,salary"),". Des attributs de stockage ou des attributs relationnels peuvent \xeatre transmis."),(0,a.kt)("h3",r({},{id:"exemples"}),"Exemples"),(0,a.kt)("p",null,"Voici quelques exemples vous permettant d'indiquer les attributs \xe0 retourner en fonction de la m\xe9thode employ\xe9e pour r\xe9cup\xe9rer les entit\xe9s."),(0,a.kt)("p",null,"Vous pouvez appliquer cette m\xe9thode \xe0 :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dataclass (tout ou une collection d'entit\xe9s dans une dataclass)"),(0,a.kt)("li",{parentName:"ul"},"Entit\xe9s sp\xe9cifiques"),(0,a.kt)("li",{parentName:"ul"},"Entity sets")),(0,a.kt)("h4",r({},{id:"exemple-avec-une-dataclass"}),"Exemple avec une dataclass"),(0,a.kt)("p",null,"Les requ\xeates suivantes retournent uniquement le pr\xe9nom et le nom de la dataclass People (soit la dataclass enti\xe8re, soit une s\xe9lection d'entit\xe9s bas\xe9e sur la recherche d\xe9finie dans ",(0,a.kt)("inlineCode",{parentName:"p"},"$filter"),")."),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,lastName/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"R\xe9sultat")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __COUNT: 4,\n    __SENT: 4,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith"\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary"\n        },\n        {\n            __KEY: "3",\n            __STAMP: 2,\n            firstName: "Pete",\n            lastName: "Marley"\n        },\n        {\n            __KEY: "4",\n            __STAMP: 1,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,lastName/?$filter=\"lastName='A@'\"/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"R\xe9sultat")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __COUNT: 1,\n    __SENT: 1,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "4",\n            __STAMP: 4,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n')),(0,a.kt)("h4",r({},{id:"exemple-dentit\xe9"}),"Exemple d'entit\xe9"),(0,a.kt)("p",null,"La requ\xeate suivante retourne uniquement les attributs de pr\xe9nom et nom \xe0 partir d'une entit\xe9 sp\xe9cifique de la dataclass People :"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/People(3)/firstName,lastName/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"R\xe9sultat")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Marley"\n}\n')),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/People(3)/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"R\xe9sultat")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    ID: 3,\n    firstName: "Pete",\n    lastName: "Marley",\n    salary: 30000,\n    employer: {\n        __deferred: {\n            uri: "http://127.0.0.1:8081/rest/Company(3)",\n            __KEY: "3"\n        }\n    },\n    fullName: "Pete Marley",\n    employerName: "microsoft"\n\n}\n')),(0,a.kt)("h4",r({},{id:"exemple-densemble-dentit\xe9s"}),"Exemple d'ensemble d'entit\xe9s"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("a",r({parentName:"p"},{href:"#creating-and-managing-entity-set"}),"created an entity set"),", you can filter the information in it by defining which attributes to return:"),(0,a.kt)("p",null," `GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer"),(0,a.kt)("h2",r({},{id:"affichage-dun-attribut-dimage"}),"Affichage d'un attribut d'image"),(0,a.kt)("p",null,"Si vous souhaitez afficher int\xe9gralement un attribut d'image, saisissez ce qui suit :"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo")),(0,a.kt)("p",null,"Pour plus d'informations sur les formats d'image, reportez-vous \xe0 ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/imageformat"}),(0,a.kt)("inlineCode",{parentName:"a"},"$imageformat")),". Pour plus d'informations sur le param\xe8tre de version, reportez-vous \xe0 ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/18/REST/version"}),(0,a.kt)("inlineCode",{parentName:"a"},"$version")),"."),(0,a.kt)("h2",r({},{id:"enregistrement-dun-attribut-blob-sur-le-disque"}),"Enregistrement d'un attribut BLOB sur le disque"),(0,a.kt)("p",null,"Si vous souhaitez enregistrer un BLOB stock\xe9 dans votre dataclass, vous pouvez \xe9crire ce qui suit :"),(0,a.kt)("p",null,"  ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt")),(0,a.kt)("h2",r({},{id:"r\xe9cup\xe9rer-une-seule-entit\xe9"}),"R\xe9cup\xe9rer une seule entit\xe9"),(0,a.kt)("p",null,"Vous pouvez utiliser la syntaxe",(0,a.kt)("a",r({parentName:"p"},{href:"%7BdataClass%7D.html#dataclassattributevalue"}),(0,a.kt)("inlineCode",{parentName:"a"},"{dataClass}:{attribute}(value)"))," lorsque vous souhaitez r\xe9cup\xe9rer une seule entit\xe9. C'est particuli\xe8rement utile lorsque vous souhaitez lancer une recherche associ\xe9e qui n'est pas cr\xe9\xe9e sur la cl\xe9 primaire de la dataclass. Par exemple, vous pouvez \xe9crire :"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},'GET  /rest/Company:companyCode("Acme001")')))}m.isMDXComponent=!0},365020:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/methodProp_ex-a0a39f52d2866fe84f8b62118662b333.png"}}]);