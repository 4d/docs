"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76547],{603905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var s=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=s.createContext({}),u=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return s.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(i,".").concat(m)]||c[m]||p[m]||r;return n?s.createElement(k,l(l({ref:t},d),{},{components:n})):s.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},805942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});n(667294);var s=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"dsmapping",title:"Objets Data Model"},o=void 0,i={unversionedId:"ORDA/dsmapping",id:"version-20/ORDA/dsmapping",title:"Objets Data Model",description:"La technologie ORDA est fond\xe9e sur une cartographie automatique d'une structure de base sous-jacente. Elle permet \xe9galement d'acc\xe9der aux donn\xe9es via des objets s\xe9lection d'entit\xe9s (entity selection) et entit\xe9 (entity). Par cons\xe9quent, ORDA expose la base de donn\xe9es enti\xe8re comme un ensemble d'objets de mod\xe8le de donn\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/ORDA/dsMapping.md",sourceDirName:"ORDA",slug:"/ORDA/dsmapping",permalink:"/docs/fr/20/ORDA/dsmapping",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FdsMapping.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"dsmapping",title:"Objets Data Model"},sidebar:"docs",previous:{title:"ORDA",permalink:"/docs/fr/20/ORDA/overview"},next:{title:"Classes du mod\xe8le de donn\xe9es",permalink:"/docs/fr/20/ORDA/ordaClasses"}},u={},d=[{value:"Correspondance de la structure",id:"correspondance-de-la-structure",level:2},{value:"R\xe8gles g\xe9n\xe9rales",id:"r\xe8gles-g\xe9n\xe9rales",level:3},{value:"R\xe8gles de contr\xf4le d&#39;acc\xe8s \xe0 distance",id:"r\xe8gles-de-contr\xf4le-dacc\xe8s-\xe0-distance",level:3},{value:"Mise \xe0 jour des donn\xe9es",id:"mise-\xe0-jour-des-donn\xe9es",level:3},{value:"D\xe9finitions des objets",id:"d\xe9finitions-des-objets",level:2},{value:"Datastore",id:"datastore",level:3},{value:"Dataclass",id:"dataclass",level:3},{value:"Attribut",id:"attribut",level:3},{value:"Attributs de stockage et relationnels",id:"attributs-de-stockage-et-relationnels",level:4},{value:"Champs calcul\xe9s",id:"champs-calcul\xe9s",level:4},{value:"Entity",id:"entity",level:3},{value:"Entity selection",id:"entity-selection",level:3},{value:"Entity selections tri\xe9es vs Entity selections non-tri\xe9es",id:"entity-selections-tri\xe9es-vs-entity-selections-non-tri\xe9es",level:4}],p={toc:d};function c(e){var{components:t}=e,l=r(e,["components"]);return(0,s.kt)("wrapper",a({},p,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"La technologie ORDA est fond\xe9e sur une cartographie automatique d'une structure de base sous-jacente. Elle permet \xe9galement d'acc\xe9der aux donn\xe9es via des objets s\xe9lection d'entit\xe9s (entity selection) et entit\xe9 (entity). Par cons\xe9quent, ORDA expose la base de donn\xe9es enti\xe8re comme un ensemble d'objets de mod\xe8le de donn\xe9es."),(0,s.kt)("h2",a({},{id:"correspondance-de-la-structure"}),"Correspondance de la structure"),(0,s.kt)("p",null,"Lorsque vous appelez un datastore \xe0 l'aide de la commande ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/DataStoreClass#ds"}),(0,s.kt)("inlineCode",{parentName:"a"},"ds"))," ou ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/DataStoreClass#open-datastore"}),(0,s.kt)("inlineCode",{parentName:"a"},"Open datastore")),", 4D r\xe9f\xe9rence automatiquement les tables et les champs de la structure 4D correspondante en tant que propri\xe9t\xe9s de l'objet ",(0,s.kt)("a",a({parentName:"p"},{href:"#datastore"}),"datastore")," retourn\xe9 :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Les tables correspondent \xe0 des dataclasses."),(0,s.kt)("li",{parentName:"ul"},"Les champs correspondent \xe0 des attributs de stockage."),(0,s.kt)("li",{parentName:"ul"},"Les relations correspondent \xe0 des attributs de relation - les noms de relation, d\xe9finis dans l'\xe9diteur de structure, sont utilis\xe9s comme noms d'attribut de relation.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(186259).Z,width:"961",height:"480"})),(0,s.kt)("h3",a({},{id:"r\xe8gles-g\xe9n\xe9rales"}),"R\xe8gles g\xe9n\xe9rales"),(0,s.kt)("p",null,"Les r\xe8gles suivantes s'appliquent \xe0 toutes les conversions :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Les noms de table, de champ et de relation correspondent \xe0 des noms de propri\xe9t\xe9 d'objet. Assurez-vous que ces noms sont conformes aux r\xe8gles g\xe9n\xe9rales de d\xe9nomination des objets, comme expliqu\xe9 dans la section ",(0,s.kt)("a",a({parentName:"li"},{href:"/docs/fr/20/Concepts/identifiers"}),"Conventions de d\xe9nomination des objets"),"."),(0,s.kt)("li",{parentName:"ul"},"Un datastore ne r\xe9f\xe9rence que les tables avec une seule cl\xe9 primaire. Les tables suivantes ne sont pas r\xe9f\xe9renc\xe9es :",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Tables sans cl\xe9 primaire"),(0,s.kt)("li",{parentName:"ul"},"Tables avec cl\xe9s primaires composites."))),(0,s.kt)("li",{parentName:"ul"},"Les champs BLOB sont automatiquement disponibles comme attributs de type ",(0,s.kt)("a",a({parentName:"li"},{href:"/docs/fr/20/Concepts/blob#blob-types"}),"objet Blob"),".")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"ORDA mapping does not take into account:  "),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},'the "Invisible" option for tables or fields, - the virtual structure defined through ',(0,s.kt)("inlineCode",{parentName:"li"},"SET TABLE TITLES")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"SET FIELD TITLES"),', - the "Manual" or "Automatic" property of relations.'))),(0,s.kt)("h3",a({},{id:"r\xe8gles-de-contr\xf4le-dacc\xe8s-\xe0-distance"}),"R\xe8gles de contr\xf4le d'acc\xe8s \xe0 distance"),(0,s.kt)("p",null,"Lorsque vous acc\xe9dez \xe0 un datastore distant via la commande ",(0,s.kt)("inlineCode",{parentName:"p"},"Ouvrir datastore")," ou des ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/REST/gettingStarted"}),"requ\xeates REST"),", seules les tables et les champs avec la propri\xe9t\xe9 de ressource ",(0,s.kt)("strong",{parentName:"p"},"Expose as REST resource")," sont disponibles \xe0 distance."),(0,s.kt)("p",null,"Cette option doit \xeatre choisie au niveau de la structure 4D pour chaque table et chaque champ que vous souhaitez voir appara\xeetre comme dataclass et attribut dans le datastore :"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(741629).Z,width:"279",height:"362"})),(0,s.kt)("h3",a({},{id:"mise-\xe0-jour-des-donn\xe9es"}),"Mise \xe0 jour des donn\xe9es"),(0,s.kt)("p",null,"Toute modification apport\xe9e \xe0 la structure de la base invalide la couche courante de donn\xe9es ORDA. Ces modifications incluent :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"l'ajout ou la suppression d'une table, d'un champ ou d'une relation"),(0,s.kt)("li",{parentName:"ul"},"le renommage d'une table, d'un champ ou d'une relation"),(0,s.kt)("li",{parentName:"ul"},"la modification d'une propri\xe9t\xe9 principale d'un champ (type, unique, index, autoincrement, valeur null)")),(0,s.kt)("p",null,"Lorsque la couche courante de donn\xe9es ORDA est invalid\xe9e, elle est automatiquement recharg\xe9e et mise \xe0 jour dans les prochains appels du datastore local ",(0,s.kt)("inlineCode",{parentName:"p"},"ds")," vers 4D et 4D Server. A noter que les r\xe9f\xe9rences existantes vers des objets ORDA tels que des entit\xe9s ou des s\xe9lections d'entit\xe9s continueront d'utiliser les donn\xe9es \xe0 partir desquelles elles ont \xe9t\xe9 cr\xe9\xe9es, et ce jusqu'\xe0 ce qu'elles soient reg\xe9n\xe9r\xe9es."),(0,s.kt)("p",null,"Toutefois, la couche de donn\xe9es ORDA mise \xe0 jour n'est pas automatiquement disponible dans les contextes suivants :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"une application 4D distante connect\xe9e \xe0 4D Server -- l'application distante doit \xeatre reconnect\xe9e au serveur."),(0,s.kt)("li",{parentName:"ul"},"un datastore distant ouvert \xe0 l'aide de ",(0,s.kt)("inlineCode",{parentName:"li"},"Ouvrir datastore")," ou des ",(0,s.kt)("a",a({parentName:"li"},{href:"/docs/fr/20/REST/gettingStarted"}),"appels REST")," -- une nouvelle session doit \xeatre ouverte.")),(0,s.kt)("h2",a({},{id:"d\xe9finitions-des-objets"}),"D\xe9finitions des objets"),(0,s.kt)("h3",a({},{id:"datastore"}),"Datastore"),(0,s.kt)("p",null,"Un datastore est l'objet d'interface d'une base de donn\xe9es. Il cr\xe9e une repr\xe9sentation de toute la base sous forme d'objet. Un datastore est constitu\xe9 d'un ",(0,s.kt)("strong",{parentName:"p"},"mod\xe8le")," et \xe0 de ",(0,s.kt)("strong",{parentName:"p"},"donn\xe9es")," :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Le mod\xe8le contient et d\xe9crit toutes les dataclasses qui composent le datastore. Il est ind\xe9pendant de la base de donn\xe9es sous-jacente."),(0,s.kt)("li",{parentName:"ul"},"Les donn\xe9es se r\xe9f\xe8rent \xe0 l'information qui va \xeatre utilis\xe9e et stock\xe9e dans ce mod\xe8le. Par exemple, les noms, adresses et dates de naissance des employ\xe9s sont des \xe9l\xe9ments de donn\xe9es que vous pouvez utiliser dans un datastore.")),(0,s.kt)("p",null,"Lorsqu'il est g\xe9r\xe9 via le code, le datastore est un objet dont les propri\xe9t\xe9s sont toutes les ",(0,s.kt)("a",a({parentName:"p"},{href:"#dataclass"}),"dataclasses")," ayant \xe9t\xe9 sp\xe9cifiquement expos\xe9es."),(0,s.kt)("p",null,"4d vous permet de g\xe9rer les datastores suivants :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"le datastore local, fond\xe9 sur la base 4D courante, retourn\xe9 par la commande ",(0,s.kt)("inlineCode",{parentName:"li"},"ds")," (le datastore principal)."),(0,s.kt)("li",{parentName:"ul"},"un ou plusieurs datastores distants, expos\xe9s en tant que ressources RESET dans des bases 4D distantes, retourn\xe9s par la commande ",(0,s.kt)("inlineCode",{parentName:"li"},"Ouvrir datastore"),".")),(0,s.kt)("p",null,"Un datastore ne r\xe9f\xe9rence qu'une seule base de donn\xe9es locale ou distante."),(0,s.kt)("p",null,"L'objet datastore lui-m\xeame ne peut pas \xeatre copi\xe9 en tant qu'objet :"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"$mydatastore:=OB Copy(ds) //retourne null\n")),(0,s.kt)("p",null,"Les propri\xe9t\xe9s du datastore sont toutefois \xe9num\xe9rables :"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds;$prop)\n  //$prop contient les noms de toutes les dataclasses\n")),(0,s.kt)("p",null,"Le datastore principal (par d\xe9faut) est toujours disponible via la commande ",(0,s.kt)("inlineCode",{parentName:"p"},"ds"),", mais la commande ",(0,s.kt)("inlineCode",{parentName:"p"},"Ouvrir datastore")," permet de r\xe9f\xe9rencer n'importe quel datastore distant."),(0,s.kt)("h3",a({},{id:"dataclass"}),"Dataclass"),(0,s.kt)("p",null,"Une dataclasse est l'\xe9quivalent d'une table. Elle est utilis\xe9e comme mod\xe8le d'objet et r\xe9f\xe9rence tous les champs comme attributs, y compris les attributs relationnels (attributs construits \xe0 partir des relations entre les dataclasses). Les attributs relationnels peuvent \xeatre utilis\xe9s dans les requ\xeates comme tout autre attribut."),(0,s.kt)("p",null,"Toutes les dataclasses d'un projet 4D sont disponibles en tant que propri\xe9t\xe9 du datastore ",(0,s.kt)("inlineCode",{parentName:"p"},"ds"),". Pour les datastores distants acc\xe9d\xe9s via ",(0,s.kt)("inlineCode",{parentName:"p"},"Ouvrir datastore")," ou les ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/REST/gettingStarted"}),"requ\xeates REST"),", l'option ",(0,s.kt)("strong",{parentName:"p"},"Exposer comme ressource REST")," doit \xeatre s\xe9lectionn\xe9e au niveau de la structure 4D pour chaque table que vous souhaitez exposer en tant que dataclass du datastore."),(0,s.kt)("p",null,"Par exemple, consid\xe9rons cette table dans la structure suivante :"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(594610).Z,width:"137",height:"188"})),(0,s.kt)("p",null,"La table ",(0,s.kt)("inlineCode",{parentName:"p"},"Company")," est automatiquement disponible en tant que dataclasse dans la banque de donn\xe9es ",(0,s.kt)("inlineCode",{parentName:"p"},"ds"),". Vous pouvez \xe9crire :"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"var $compClass : cs.Company //d\xe9clare une variable objet $compClass de la classe Company\n$compClass:=ds.Company //affecte la r\xe9f\xe9rence de dataclasse Company \xe0 $compClass\n")),(0,s.kt)("p",null,"Un objet dataclass peut contenir :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"attributes"),(0,s.kt)("li",{parentName:"ul"},"des attributs relationnels")),(0,s.kt)("p",null,"La dataclass offre une abstraction de la base de donn\xe9es physique et permet de g\xe9rer un mod\xe8le de donn\xe9es conceptuel. La dataclass est le seul moyen d'interroger le datastore. Une requ\xeate est effectu\xe9e \xe0 partir d'une seule dataclass. Les requ\xeates sont construites autour des attributs et des noms d'attributs relationnels des dataclasses. Les attributs relationnels sont ainsi les moyens d'impliquer plusieurs tables li\xe9es dans une requ\xeate."),(0,s.kt)("p",null,"L'objet dataclass lui-m\xeame ne peut pas \xeatre copi\xe9 en tant qu'objet :"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"$mydataclass:=OB Copy(ds.Employee) //retourne null\n")),(0,s.kt)("p",null,"Les propri\xe9t\xe9s de la dataclass sont toutefois \xe9num\xe9rables :"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-code4d"}),"ARRAY TEXT($prop;0)\nOB GET PROPERTY NAMES(ds.Employee;$prop)\n//$prop contient les noms de tous les attributs de dataclass\n")),(0,s.kt)("h3",a({},{id:"attribut"}),"Attribut"),(0,s.kt)("p",null,"Les propri\xe9t\xe9s de dataclass sont des objets attribut d\xe9crivant les champs ou relations sous-jacents. Par exemple :"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' $nameAttribute:=ds.Company.name //r\xe9f\xe9rence \xe0 un attribut de classe\n $revenuesAttribute:=ds.Company["revenues"] //m\xe9thode alternative\n')),(0,s.kt)("p",null,"Ce code attribue \xe0 ",(0,s.kt)("inlineCode",{parentName:"p"},"$nameAttribute")," et ",(0,s.kt)("inlineCode",{parentName:"p"},"$revenuesAttribute")," des r\xe9f\xe9rences aux attributs name et revenues de la classe ",(0,s.kt)("inlineCode",{parentName:"p"},"Company"),". Cette syntaxe ne retourne PAS les valeurs contenues dans l'attribut, mais retourne plut\xf4t des r\xe9f\xe9rences aux attributs eux-m\xeames. Cette syntaxe ne retourne PAS les valeurs contenues dans l'attribut, mais retourne plut\xf4t des r\xe9f\xe9rences aux attributs eux-m\xeames."),(0,s.kt)("p",null,"Tous les fichiers \xe9ligibles d'une table sont disponibles en tant qu'attributs de leur ",(0,s.kt)("a",a({parentName:"p"},{href:"#dataclass"}),"dataclass")," parente. Pour les datastores distants acc\xe9d\xe9s via ",(0,s.kt)("inlineCode",{parentName:"p"},"Ouvrir datastore")," ou les ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/REST/gettingStarted"}),"requ\xeates REST"),", l'option ",(0,s.kt)("strong",{parentName:"p"},"Exposer comme ressource REST")," doit \xeatre s\xe9lectionn\xe9e au niveau de la structure 4D pour chaque champ que vous souhaitez exposer en tant qu'attribut de dataclass."),(0,s.kt)("h4",a({},{id:"attributs-de-stockage-et-relationnels"}),"Attributs de stockage et relationnels"),(0,s.kt)("p",null,"Les attributs de la Dataclass sont de plusieurs types : storage, relatedEntity et relatedEntities. Les attributs scalaires (c'est-\xe0-dire qui ne fournissent qu'une seule valeur) prennent en charge tous les types de donn\xe9es standard 4D (Entier, texte, objet, etc.)."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Un ",(0,s.kt)("strong",{parentName:"li"},"attribut de stockage")," (storage) est \xe9quivalent \xe0 un champ dans la base de donn\xe9es 4D et peut \xeatre index\xe9. Les valeurs affect\xe9es \xe0 un attribut de stockage sont stock\xe9es en tant que partie de l'entit\xe9 lors de son enregistrement. Lorsqu'on acc\xe8de \xe0 un attribut de stockage, sa valeur provient directement du datastore. Les attributs de stockage sont le bloc de construction le plus \xe9l\xe9mentaire d'une entit\xe9 et sont d\xe9finis par un nom et un type de donn\xe9es."),(0,s.kt)("li",{parentName:"ul"},"Un ",(0,s.kt)("strong",{parentName:"li"},"attribut relationnel")," (relatedEntity et relatedEntities) donne acc\xe8s \xe0 d'autres entit\xe9s. Les attributs relationnels peuvent aboutir soit \xe0 une entit\xe9 unique (ou \xe0 aucune entit\xe9), soit \xe0 une s\xe9lection d'entit\xe9 (0 \xe0 N entit\xe9s). Les attributs relationnels s'appuient sur les relations \"classiques\" dans la structure relationnelle pour fournir un acc\xe8s direct \xe0 une entit\xe9 ou \xe0 des entit\xe9s reli\xe9es. Tous les attributs relationnels sont directement disponibles dans ORDA si vous utilisez leurs noms.")),(0,s.kt)("p",null,"Prenons l'exemple de la structure de base de donn\xe9es partielle suivante et les propri\xe9t\xe9s relationnelles :"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(589653).Z,width:"690",height:"533"})),(0,s.kt)("p",null,"Tous les attributs relationnels seront disponibles automatiquement :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'dans la dataclass Project : "ID", "name", et "companyID"'),(0,s.kt)("li",{parentName:"ul"},'dans la dataclass Company : "ID", "name", et "discount"')),(0,s.kt)("p",null,"En outre, les attributs relationnels suivant seront \xe9galement disponibles automatiquement :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"dans la dataclass Project : l'attribut ",(0,s.kt)("strong",{parentName:"li"},"theClient"),', du type "relatedEntity" ; il y a au plus une compagnie pour chaque projet (le client)'),(0,s.kt)("li",{parentName:"ul"},"dans la dataclass Company : l'attribut ",(0,s.kt)("strong",{parentName:"li"},"companyProjects"),', du type "relatedEntities" ; pour chaque compagnie, il existe un certain nombre de projets reli\xe9s.',(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("blockquote",{parentName:"blockquote"},(0,s.kt)("p",{parentName:"blockquote"},"The Manual or Automatic property of a database relation has no effect in ORDA."))))),(0,s.kt)("p",null,"Tous les attributs de la dataclass sont expos\xe9s en tant que propri\xe9t\xe9s de la dataclass :"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(820798).Z,width:"1049",height:"288"})),(0,s.kt)("p",null,"Gardez \xe0 l'esprit que ces objets d\xe9crivent des attributs, mais ne donnent pas acc\xe8s aux donn\xe9es. La lecture ou l'\xe9criture des donn\xe9es se fait \xe0 travers des ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/ORDA/entities#using-entity-attributes"}),"objets entit\xe9"),"."),(0,s.kt)("h4",a({},{id:"champs-calcul\xe9s"}),"Champs calcul\xe9s"),(0,s.kt)("p",null,"dans la ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/ORDA/ordaClasses#entity-class"}),"d\xe9finition de la classe Entity"),". Leur valeur n'est pas stock\xe9e mais \xe9valu\xe9e \xe0 chaque fois qu'on y acc\xe8de. Ils n'appartiennent pas \xe0 la structure sous-jacente de la base, mais ils se basent sur elle et peuvent \xeatre utilis\xe9s comme n'importe quel champ du mod\xe8le de donn\xe9es."),(0,s.kt)("h3",a({},{id:"entity"}),"Entity"),(0,s.kt)("p",null,"Une entit\xe9 est l'\xe9quivalent d'un enregistrement. Il s'agit d'un objet qui fait r\xe9f\xe9rence \xe0 un enregistrement de la base de donn\xe9es. Elle peut \xeatre per\xe7ue comme une instance de la ",(0,s.kt)("a",a({parentName:"p"},{href:"#dataclass"}),"dataclass"),", comme un enregistrement de la table correspondante \xe0 la dataclass. Toutefois, une entit\xe9 contient \xe9galement des donn\xe9es corr\xe9l\xe9es \xe0 la base de donn\xe9es li\xe9e au datastore."),(0,s.kt)("p",null,"Le but de l'entit\xe9 est de g\xe9rer les donn\xe9es (cr\xe9er, mettre \xe0 jour, supprimer). Lorsqu'une r\xe9f\xe9rence d'entit\xe9 est obtenue au moyen d'une s\xe9lection d'entit\xe9, elle conserve \xe9galement des informations sur la s\xe9lection d'entit\xe9 qui permet une it\xe9ration \xe0 travers la s\xe9lection."),(0,s.kt)("p",null,"L'objet entit\xe9 lui-m\xeame ne peut pas \xeatre copi\xe9 en tant qu'objet :"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"})," $myentity:=OB Copy(ds.Employee.get(1)) //retourne null\n")),(0,s.kt)("p",null,"Les propri\xe9t\xe9s de l'entit\xe9 sont toutefois \xe9num\xe9rables :"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)\n  //$prop contient les noms de tous les attributs de l'entit\xe9\n")),(0,s.kt)("h3",a({},{id:"entity-selection"}),"Entity selection"),(0,s.kt)("p",null,"Une s\xe9lection d'entit\xe9 est un objet contenant une ou plusieurs r\xe9f\xe9rence(s) \xe0 des entit\xe9s appartenant \xe0 la m\xeame dataclasse. Elle est g\xe9n\xe9ralement cr\xe9\xe9e \xe0 la suite d'une requ\xeate ou retourn\xe9e \xe0 partir d'un attribut relationnel. Une entity selection peut contenir 0, 1 ou X entit\xe9s de la dataclass - o\xf9 X peut repr\xe9senter le nombre total d'entit\xe9s contenues dans la dataclass."),(0,s.kt)("p",null,"Voici un exemple :"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"var $e : cs.EmployeeSelection //d\xe9clare une variable objet $e de type de classe EmployeeSelection\n$e:=ds.Employee.all() //assigne la r\xe9f\xe9rence de la s\xe9lection d'entit\xe9 r\xe9sultante \xe0 la variable $e\n")),(0,s.kt)("p",null,'Les entity selections peuvent \xeatre "tri\xe9es" ou "non tri\xe9es" (',(0,s.kt)("a",a({parentName:"p"},{href:"#ordered-or-unordered-entity-selection"}),"voir ci-dessous"),")."),(0,s.kt)("blockquote",null,(0,s.kt)("blockquote",{parentName:"blockquote"},(0,s.kt)("p",{parentName:"blockquote"},'Les entity selections peuvent \xe9galement \xeatre "partageables" ou "non partageables", selon ',(0,s.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/ORDA/entities#shareable-or-alterable-entity-selections"}),"la fa\xe7on dont elles ont \xe9t\xe9 cr\xe9\xe9es"),"."))),(0,s.kt)("p",null,"L'objet s\xe9lection d'entit\xe9s lui-m\xeame ne peut pas \xeatre copi\xe9 en tant qu'objet :"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"})," $myentitysel:=OB Copy(ds.Employee.all()) //retourne null\n")),(0,s.kt)("p",null,"Les propri\xe9t\xe9s des s\xe9lections d'entit\xe9s sont toutefois \xe9num\xe9rables :"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.all();$prop)\n  //$prop contient les noms des propri\xe9t\xe9s des s\xe9lections d\'entit\xe9s\n  //("length", "00", "01"...)\n')),(0,s.kt)("h4",a({},{id:"entity-selections-tri\xe9es-vs-entity-selections-non-tri\xe9es"}),"Entity selections tri\xe9es vs Entity selections non-tri\xe9es"),(0,s.kt)("p",null,"Pour des raisons d'optimisation, par d\xe9faut, 4D ORDA cr\xe9e g\xe9n\xe9ralement des s\xe9lections d'entit\xe9s non-ordonn\xe9es, sauf lorsque vous utilisez la m\xe9thode ",(0,s.kt)("inlineCode",{parentName:"p"},"orderBy( )"),' ou si vous utilisez les options appropri\xe9es. Dans cette documentation, sauf indication contraire, "s\xe9lection d\'entit\xe9s" fait g\xe9n\xe9ralement r\xe9f\xe9rence \xe0 une "s\xe9lection d\'entit\xe9s non-ordonn\xe9e".'),(0,s.kt)("p",null,"Les s\xe9lections d'entit\xe9s ordonn\xe9es sont cr\xe9\xe9es uniquement lorsque cela est n\xe9cessaire ou lorsqu'elles sont sp\xe9cifiquement demand\xe9es \xe0 l'aide d'options, c'est-\xe0-dire dans les cas suivants :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"r\xe9sultat d'un ",(0,s.kt)("inlineCode",{parentName:"li"},"orderBy( )")," sur une s\xe9lection (de n'importe quel type) ou un ",(0,s.kt)("inlineCode",{parentName:"li"},"orderBy( )")," sur une dataclass,"),(0,s.kt)("li",{parentName:"ul"},"r\xe9sultat de la m\xe9thode ",(0,s.kt)("inlineCode",{parentName:"li"},"newSelection( )")," avec l'option ",(0,s.kt)("inlineCode",{parentName:"li"},"dk keep ordered"))),(0,s.kt)("p",null,"Les s\xe9lections d'entit\xe9s non-tri\xe9es sont cr\xe9\xe9es dans les cas suivants :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"r\xe9sultat d'un ",(0,s.kt)("inlineCode",{parentName:"li"},"query()")," standard sur une s\xe9lection (de n'importe quel type) ou un ",(0,s.kt)("inlineCode",{parentName:"li"},"query()")," sur une dataclass,"),(0,s.kt)("li",{parentName:"ul"},"r\xe9sultat de la m\xe9thode ",(0,s.kt)("inlineCode",{parentName:"li"},"newSelection()")," sans option,"),(0,s.kt)("li",{parentName:"ul"},"r\xe9sultat de l'une des m\xe9thodes de comparaison, quel que soit le type de s\xe9lection saisi : ",(0,s.kt)("inlineCode",{parentName:"li"},"or()"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"and()"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"minus()"),".",(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("blockquote",{parentName:"blockquote"},(0,s.kt)("p",{parentName:"blockquote"},"The following entity selections are always ",(0,s.kt)("strong",{parentName:"p"},"ordered"),": > > ",(0,s.kt)("em",{parentName:"p"}," entity selections returned by 4D Server to a remote client > ")," entity selections built upon remote datastores.")),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"s\xe9lections d'entit\xe9s retourn\xe9es par 4D Server vers un client distant"),(0,s.kt)("li",{parentName:"ul"},"s\xe9lections d'entit\xe9s fond\xe9es sur des datastores distants."))))),(0,s.kt)("p",null,"Notez que lorsqu'une s\xe9lection d'entit\xe9s ordonn\xe9e devient une s\xe9lection non-ordonn\xe9e, toute r\xe9f\xe9rence d'entit\xe9 r\xe9p\xe9t\xe9e est supprim\xe9e."))}c.isMDXComponent=!0},741629:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ExposeDataclass-493afc3bdbd30cb758f171009c9d11bb.png"},594610:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/companyTable-15e8c71e579a6392b89a8e3f45aa8536.png"},820798:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/dataclassProperties-b0e6524ae14723315b5d45435df82853.png"},186259:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/datastoreMapping-833be12255d9e7b9cde49426a0cc902f.png"},589653:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/relationProperties-f7d9bc6fc793e2bae76ea2164c37ffe3.png"}}]);