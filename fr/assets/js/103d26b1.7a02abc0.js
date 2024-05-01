"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1722],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,f=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"manData",title:"Manipulation des donn\xe9es"},i=void 0,o={unversionedId:"REST/manData",id:"version-20-R5/REST/manData",title:"Manipulation des donn\xe9es",description:"All exposed dataclasses, attributes and functions can be accessed through REST. Les noms de dataclass, d'attributs et de fonctions sont sensibles \xe0 la casse; contrairement aux donn\xe9es des requ\xeates.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/REST/manData.md",sourceDirName:"REST",slug:"/REST/manData",permalink:"/docs/fr/REST/manData",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FmanData.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"manData",title:"Manipulation des donn\xe9es"},sidebar:"docs",previous:{title:"Obtenir des informations du serveur",permalink:"/docs/fr/REST/genInfo"},next:{title:"Appeler des fonctions de classe ORDA",permalink:"/docs/fr/REST/classFunctions"}},u={},p=[{value:"Rechercher des donn\xe9es",id:"rechercher-des-donn\xe9es",level:2},{value:"Ajouter, modifier et supprimer des entit\xe9s",id:"ajouter-modifier-et-supprimer-des-entit\xe9s",level:2},{value:"Parcourir les donn\xe9es",id:"parcourir-les-donn\xe9es",level:2},{value:"Cr\xe9er et g\xe9rer un entity set",id:"cr\xe9er-et-g\xe9rer-un-entity-set",level:2},{value:"Calcul des donn\xe9es",id:"calcul-des-donn\xe9es",level:2},{value:"Appeler les fonctions de classe du mod\xe8le de donn\xe9es",id:"appeler-les-fonctions-de-classe-du-mod\xe8le-de-donn\xe9es",level:2},{value:"Selecting Attributes to get",id:"selecting-attributes-to-get",level:2},{value:"Exemples",id:"exemples",level:3},{value:"Exemple avec une dataclass",id:"exemple-avec-une-dataclass",level:4},{value:"Exemple d&#39;entit\xe9",id:"exemple-dentit\xe9",level:4},{value:"Exemple d&#39;ensemble d&#39;entit\xe9s",id:"exemple-densemble-dentit\xe9s",level:4},{value:"Affichage d&#39;un attribut d&#39;image",id:"affichage-dun-attribut-dimage",level:2},{value:"Enregistrement d&#39;un attribut BLOB sur le disque",id:"enregistrement-dun-attribut-blob-sur-le-disque",level:2},{value:"R\xe9cup\xe9rer une seule entit\xe9",id:"r\xe9cup\xe9rer-une-seule-entit\xe9",level:2}],d={toc:p};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/configuration#exposing-tables-and-fields"}),"exposed dataclasses, attributes")," and ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/classFunctions"}),"functions")," can be accessed through REST. Les noms de dataclass, d'attributs et de fonctions sont sensibles \xe0 la casse; contrairement aux donn\xe9es des requ\xeates."),(0,a.kt)("h2",r({},{id:"rechercher-des-donn\xe9es"}),"Rechercher des donn\xe9es"),(0,a.kt)("p",null,"To query data directly, you can do so using the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/filter"}),(0,a.kt)("inlineCode",{parentName:"a"},"$filter")),' function. Par exemple, pour trouver une personne nomm\xe9e "Smith", vous pouvez \xe9crire :'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"')),(0,a.kt)("h2",r({},{id:"ajouter-modifier-et-supprimer-des-entit\xe9s"}),"Ajouter, modifier et supprimer des entit\xe9s"),(0,a.kt)("p",null,"Avec l'API REST, vous pouvez effectuer toutes les manipulations de donn\xe9es souhait\xe9es dans 4D."),(0,a.kt)("p",null,"To add and modify entities, you can call ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/method#methodupdate"}),(0,a.kt)("inlineCode",{parentName:"a"},"$method=update")),". If you want to delete one or more entities, you can use ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/method#methoddelete"}),(0,a.kt)("inlineCode",{parentName:"a"},"$method=delete")),"."),(0,a.kt)("p",null,"Besides retrieving a single entity in a dataclass using ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/dataClass#dataclasskey"}),"{dataClass}({key})"),", you can also write a ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/classFunctions#function-calls"}),"class function")," that returns an entity selection (or a collection)."),(0,a.kt)("p",null,"Before returning a selection, you can also sort it by using ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/orderby"}),(0,a.kt)("inlineCode",{parentName:"a"},"$orderby"))," one one or more attributes (even relation attributes)."),(0,a.kt)("h2",r({},{id:"parcourir-les-donn\xe9es"}),"Parcourir les donn\xe9es"),(0,a.kt)("p",null,"Add the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/skip"}),(0,a.kt)("inlineCode",{parentName:"a"},"$skip"))," (to define with which entity to start) and ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/top_$limit"}),(0,a.kt)("inlineCode",{parentName:"a"},"$top/$limit"))," (to define how many entities to return) REST requests to your queries or entity selections to navigate the collection of entities."),(0,a.kt)("h2",r({},{id:"cr\xe9er-et-g\xe9rer-un-entity-set"}),"Cr\xe9er et g\xe9rer un entity set"),(0,a.kt)("p",null,"An entity set (aka ",(0,a.kt)("em",{parentName:"p"},"entity selection"),") is a collection of entities obtained through a REST request that is stored in 4D Server's cache. L'utilisation d'un entity set vous emp\xeache de lancer continuellement des requ\xeates \xe0 votre application pour obtenir les m\xeames r\xe9sultats. L'acc\xe8s \xe0 un entity set est beaucoup plus rapide et peut am\xe9liorer la vitesse de votre application."),(0,a.kt)("p",null,"To create an entity set, call ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/method#methodentityset"}),(0,a.kt)("inlineCode",{parentName:"a"},"$method=entityset"))," in your REST request. As a measure of security, you can also use ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/savedfilter"}),(0,a.kt)("inlineCode",{parentName:"a"},"$savedfilter"))," and/or ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/savedorderby"}),(0,a.kt)("inlineCode",{parentName:"a"},"$savedorderby"))," when you call ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/filter"}),(0,a.kt)("inlineCode",{parentName:"a"},"$filter"))," and/or ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/orderby"}),(0,a.kt)("inlineCode",{parentName:"a"},"$orderby"))," so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before."),(0,a.kt)("p",null,"To access the entity set, you must use ",(0,a.kt)("inlineCode",{parentName:"p"},"$entityset/{entitySetID}"),", for example:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF")),(0,a.kt)("p",null,"By default, an entity set is stored for two hours; however, you can change the timeout by passing a new value to ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/timeout"}),(0,a.kt)("inlineCode",{parentName:"a"},"$timeout")),". Le timeout est continuellement r\xe9initialis\xe9 \xe0 la valeur d\xe9finie (soit par d\xe9faut soit \xe0 celle que vous d\xe9finissez) chaque fois que vous l'utilisez."),(0,a.kt)("p",null,"If you want to remove an entity set from 4D Server's cache, you can use ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/method#methodrelease"}),(0,a.kt)("inlineCode",{parentName:"a"},"$method=release")),"."),(0,a.kt)("p",null,"Si vous modifiez l'un des attributs de l'entit\xe9 dans l'entity set, les valeurs seront mises \xe0 jour. Toutefois, si vous modifiez une valeur qui faisait partie de la requ\xeate ex\xe9cut\xe9e pour cr\xe9er l'entity set, elle ne sera pas supprim\xe9e de l'entity set m\xeame si elle ne correspond plus aux crit\xe8res de recherche. Bien entendu, les entit\xe9s que vous supprimez ne feront plus partie de l'entity set."),(0,a.kt)("p",null,"Si l'entity set ne se trouve plus dans le cache de 4D Server, il sera recr\xe9\xe9 avec un nouveau timeout de 10 minutes. L'ensemble d'entit\xe9s sera actualis\xe9 (certaines entit\xe9s peuvent \xeatre incluses tandis que d'autres peuvent \xeatre supprim\xe9es) depuis la derni\xe8re fois qu'il a \xe9t\xe9 cr\xe9\xe9, s'il n'existait plus avant de le recr\xe9er."),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/entityset#entitysetentitysetidoperatorothercollection"}),(0,a.kt)("inlineCode",{parentName:"a"},"$entityset/{entitySetID}?$logicOperator... &$otherCollection")),", you can combine two entity sets that you previously created. Vous pouvez combiner les r\xe9sultats dans les deux, retourner uniquement ce qui est commun aux deux, ou renvoyer ce qui n'est pas commun aux deux."),(0,a.kt)("p",null,"A new selection of entities is returned; however, you can also create a new entity set by calling ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/method#methodentityset"}),(0,a.kt)("inlineCode",{parentName:"a"},"$method=entityset"))," at the end of the REST request."),(0,a.kt)("h2",r({},{id:"calcul-des-donn\xe9es"}),"Calcul des donn\xe9es"),(0,a.kt)("p",null,"By using ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/compute"}),(0,a.kt)("inlineCode",{parentName:"a"},"$compute")),", you can compute the ",(0,a.kt)("strong",{parentName:"p"},"average"),", ",(0,a.kt)("strong",{parentName:"p"},"count"),", ",(0,a.kt)("strong",{parentName:"p"},"min"),", ",(0,a.kt)("strong",{parentName:"p"},"max"),", or ",(0,a.kt)("strong",{parentName:"p"},"sum")," for a specific attribute in a dataclass. Vous pouvez \xe9galement calculer toutes les valeurs avec le mot cl\xe9 $all."),(0,a.kt)("p",null,"Par exemple, pour obtenir le salaire le plus \xe9lev\xe9 :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/rest/Employee/salary/?$compute=max")),(0,a.kt)("p",null,"Pour calculer toutes les valeurs et retourner un objet JSON :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/rest/Employee/salary/?$compute=$all")),(0,a.kt)("h2",r({},{id:"appeler-les-fonctions-de-classe-du-mod\xe8le-de-donn\xe9es"}),"Appeler les fonctions de classe du mod\xe8le de donn\xe9es"),(0,a.kt)("p",null,"You can call ORDA Data Model ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/classFunctions"}),"user class functions")," through POST requests, so that you can benefit from the exposed API of the targeted application. For example, if you have defined a ",(0,a.kt)("inlineCode",{parentName:"p"},"getCity()")," function in the City dataclass class, you could call it using the following request:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/rest/City/getCity")),(0,a.kt)("p",null,"with data in the body of the request: ",(0,a.kt)("inlineCode",{parentName:"p"},'["Paris"]')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Les appels aux m\xe9thodes projet 4D expos\xe9es en tant que service REST sont toujours pris en charge mais sont obsol\xe8tes.")),(0,a.kt)("h2",r({},{id:"selecting-attributes-to-get"}),"Selecting Attributes to get"),(0,a.kt)("p",null,"You can always define which attributes to return in the REST response after an initial request by passing their path in the request (",(0,a.kt)("em",{parentName:"p"},"e.g."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Company(1)/name,revenues/"),")"),(0,a.kt)("p",null,"Vous pouvez appliquer ce filtre comme suit :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Syntaxe"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Exemple"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"{dataClass}/{att1,att2...}"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/People/firstName,lastName")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection d'entit\xe9s"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'{dataClass}/{att1,att2...}/?$filter="{filter}"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/People/firstName,lastName/?$filter=\"lastName='a@'\"")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Entit\xe9 sp\xe9cifique"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"{dataClass}({ID})/{att1,att2...}"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/People(1)/firstName,lastName")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"{dataClass}:{attribute}(value)/{att1,att2...}/"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/People:firstName(Larry)/firstName,lastName/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Entity selection"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"{dataClass}/{att1,att2...}/$entityset/{entitySetID}"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/People/firstName/$entityset/528BF90F10894915A4290158B4281E61")))),(0,a.kt)("p",null,"The attributes must be delimited by a comma, ",(0,a.kt)("em",{parentName:"p"},"i.e."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/Employee/firstName,lastName,salary"),". Des attributs de stockage ou des attributs relationnels peuvent \xeatre transmis."),(0,a.kt)("h3",r({},{id:"exemples"}),"Exemples"),(0,a.kt)("p",null,"Voici quelques exemples vous permettant d'indiquer les attributs \xe0 retourner en fonction de la m\xe9thode employ\xe9e pour r\xe9cup\xe9rer les entit\xe9s."),(0,a.kt)("p",null,"Vous pouvez appliquer cette m\xe9thode \xe0 :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dataclass (tout ou une collection d'entit\xe9s dans une dataclass)"),(0,a.kt)("li",{parentName:"ul"},"Entit\xe9s sp\xe9cifiques"),(0,a.kt)("li",{parentName:"ul"},"Entity sets")),(0,a.kt)("h4",r({},{id:"exemple-avec-une-dataclass"}),"Exemple avec une dataclass"),(0,a.kt)("p",null,"The following requests returns only the first name and last name from the People dataclass (either the entire dataclass or a selection of entities based on the search defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"$filter"),")."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,lastName/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __COUNT: 4,\n    __SENT: 4,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith"\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary"\n        },\n        {\n            __KEY: "3",\n            __STAMP: 2,\n            firstName: "Pete",\n            lastName: "Marley"\n        },\n        {\n            __KEY: "4",\n            __STAMP: 1,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,lastName/?$filter=\"lastName='A@'\"/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __COUNT: 1,\n    __SENT: 1,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "4",\n            __STAMP: 4,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n')),(0,a.kt)("h4",r({},{id:"exemple-dentit\xe9"}),"Exemple d'entit\xe9"),(0,a.kt)("p",null,"La requ\xeate suivante retourne uniquement les attributs de pr\xe9nom et nom \xe0 partir d'une entit\xe9 sp\xe9cifique de la dataclass People :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/People(3)/firstName,lastName/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Marley"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/People(3)/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    ID: 3,\n    firstName: "Pete",\n    lastName: "Marley",\n    salary: 30000,\n    employer: {\n        __deferred: {\n            uri: "http://127.0.0.1:8081/rest/Company(3)",\n            __KEY: "3"\n        }\n    },\n    fullName: "Pete Marley",\n    employerName: "microsoft"\n \n}\n')),(0,a.kt)("h4",r({},{id:"exemple-densemble-dentit\xe9s"}),"Exemple d'ensemble d'entit\xe9s"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("a",r({parentName:"p"},{href:"#creating-and-managing-entity-set"}),"created an entity set"),", you can filter the information in it by defining which attributes to return:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer")),(0,a.kt)("h2",r({},{id:"affichage-dun-attribut-dimage"}),"Affichage d'un attribut d'image"),(0,a.kt)("p",null,"Si vous souhaitez afficher int\xe9gralement un attribut d'image, saisissez ce qui suit :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo")),(0,a.kt)("p",null,"For more information about the image formats, refer to ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/imageformat"}),(0,a.kt)("inlineCode",{parentName:"a"},"$imageformat")),". For more information about the version parameter, refer to ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/REST/version"}),(0,a.kt)("inlineCode",{parentName:"a"},"$version")),"."),(0,a.kt)("h2",r({},{id:"enregistrement-dun-attribut-blob-sur-le-disque"}),"Enregistrement d'un attribut BLOB sur le disque"),(0,a.kt)("p",null,"Si vous souhaitez enregistrer un BLOB stock\xe9 dans votre dataclass, vous pouvez \xe9crire ce qui suit :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt")),(0,a.kt)("h2",r({},{id:"r\xe9cup\xe9rer-une-seule-entit\xe9"}),"R\xe9cup\xe9rer une seule entit\xe9"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",r({parentName:"p"},{href:"%7BdataClass%7D.html#dataclassattributevalue"}),(0,a.kt)("inlineCode",{parentName:"a"},"{dataClass}:{attribute}(value)"))," syntax when you want to retrieve only one entity. C'est particuli\xe8rement utile lorsque vous souhaitez lancer une recherche associ\xe9e qui n'est pas cr\xe9\xe9e sur la cl\xe9 primaire de la dataclass. Par exemple, vous pouvez \xe9crire :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'GET  /rest/Company:companyCode("Acme001")')))}m.isMDXComponent=!0}}]);