/*! For license information please see 14ae5a73.23217fe2.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23658],{671320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=n(474848),r=n(28453);const i={id:"manData",title:"Manipulation des donn\xe9es"},l=void 0,a={id:"REST/manData",title:"Manipulation des donn\xe9es",description:"Touts les attributs, classes et m\xe9thodes du datastore expos\xe9s sont accessibles via REST. Les noms de dataclass, d'attributs et de m\xe9thodes sont sensibles \xe0 la casse; contrairement aux donn\xe9es des requ\xeates.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/manData.md",sourceDirName:"REST",slug:"/REST/manData",permalink:"/docs/fr/18/REST/manData",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FmanData.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"manData",title:"Manipulation des donn\xe9es"},sidebar:"docs",previous:{title:"Obtenir des informations du serveur",permalink:"/docs/fr/18/REST/genInfo"},next:{title:"A propos des requ\xeates REST",permalink:"/docs/fr/18/REST/REST_requests"}},d={},o=[{value:"Rechercher des donn\xe9es",id:"rechercher-des-donn\xe9es",level:2},{value:"Ajouter, modifier et supprimer des entit\xe9s",id:"ajouter-modifier-et-supprimer-des-entit\xe9s",level:2},{value:"Parcourir les donn\xe9es",id:"parcourir-les-donn\xe9es",level:2},{value:"Cr\xe9er et g\xe9rer un entity set",id:"cr\xe9er-et-g\xe9rer-un-entity-set",level:2},{value:"Calcul des donn\xe9es",id:"calcul-des-donn\xe9es",level:2},{value:"Obtenir des donn\xe9es \xe0 partir de m\xe9thodes",id:"obtenir-des-donn\xe9es-\xe0-partir-de-m\xe9thodes",level:2},{value:"Selecting Attributes to get",id:"selecting-attributes-to-get",level:2},{value:"Exemples",id:"exemples",level:3},{value:"Exemple avec une dataclass",id:"exemple-avec-une-dataclass",level:4},{value:"Exemple d&#39;entit\xe9",id:"exemple-dentit\xe9",level:4},{value:"Exemple d&#39;ensemble d&#39;entit\xe9s",id:"exemple-densemble-dentit\xe9s",level:4},{value:"Affichage d&#39;un attribut image",id:"affichage-dun-attribut-image",level:2},{value:"Enregistrement d&#39;un attribut BLOB sur le disque",id:"enregistrement-dun-attribut-blob-sur-le-disque",level:2},{value:"R\xe9cup\xe9rer une seule entit\xe9",id:"r\xe9cup\xe9rer-une-seule-entit\xe9",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Touts ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/configuration#exposing-tables-and-fields",children:"les attributs, classes"})," et m\xe9thodes du datastore expos\xe9s sont accessibles via REST. Les noms de dataclass, d'attributs et de m\xe9thodes sont sensibles \xe0 la casse; contrairement aux donn\xe9es des requ\xeates."]}),"\n",(0,s.jsx)(t.h2,{id:"rechercher-des-donn\xe9es",children:"Rechercher des donn\xe9es"}),"\n",(0,s.jsxs)(t.p,{children:["Pour rechercher directement des donn\xe9es, vous pouvez utiliser la fonction ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/filter",children:(0,s.jsx)(t.code,{children:"$filter"})}),'. Par exemple, pour trouver une personne nomm\xe9e "Smith", vous pouvez \xe9crire :']}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"'})}),"\n",(0,s.jsx)(t.h2,{id:"ajouter-modifier-et-supprimer-des-entit\xe9s",children:"Ajouter, modifier et supprimer des entit\xe9s"}),"\n",(0,s.jsx)(t.p,{children:"Avec l'API REST, vous pouvez effectuer toutes les manipulations de donn\xe9es souhait\xe9es dans 4D."}),"\n",(0,s.jsxs)(t.p,{children:["Pour ajouter et modifier des entit\xe9s, vous pouvez appeler ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/method#methodupdate",children:(0,s.jsx)(t.code,{children:"$method=update"})}),". Si vous souhaitez supprimer une ou plusieurs entit\xe9s, vous pouvez utiliser ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/method#methoddelete",children:(0,s.jsx)(t.code,{children:"$method=delete"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Besides retrieving a single entity in a dataclass using ",(0,s.jsx)(t.a,{href:"%7BdataClass%7D_%7Bkey%7D.html",children:"{dataClass}({key})"}),", you can also write a method in your DataClass class and call it to return an entity selection (or a collection) by using ",(0,s.jsx)(t.a,{href:"%7BdataClass%7D.html#dataclassmethod",children:"{dataClass}/{method}"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Avant de retourner la collection, vous pouvez \xe9galement la trier en utilisant ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/orderby",children:(0,s.jsx)(t.code,{children:"$orderby"})})," un ou plusieurs attributs (m\xeame les attributs de relation)."]}),"\n",(0,s.jsx)(t.h2,{id:"parcourir-les-donn\xe9es",children:"Parcourir les donn\xe9es"}),"\n",(0,s.jsxs)(t.p,{children:["Ajoutez le ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/skip",children:(0,s.jsx)(t.code,{children:"$skip"})})," (pour d\xe9finir avec quelle entit\xe9 commencer) et ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/top_$limit",children:(0,s.jsx)(t.code,{children:"$top/$limit"})})," (pour d\xe9finir le nombre d'entit\xe9s \xe0 retourner) des requ\xeates REST \xe0 vos requ\xeates ou entity selections pour parcourir la collection d'entit\xe9s."]}),"\n",(0,s.jsx)(t.h2,{id:"cr\xe9er-et-g\xe9rer-un-entity-set",children:"Cr\xe9er et g\xe9rer un entity set"}),"\n",(0,s.jsxs)(t.p,{children:["Un entity set (\xe9galement appel\xe9 ",(0,s.jsx)(t.em,{children:"entity selection"}),") est une collection d'entit\xe9s obtenue via une requ\xeate REST stock\xe9e dans le cache de 4D Server. L'utilisation d'un entity set vous emp\xeache de lancer continuellement des requ\xeates \xe0 votre application pour obtenir les m\xeames r\xe9sultats. L'acc\xe8s \xe0 un entity set est beaucoup plus rapide et peut am\xe9liorer la vitesse de votre application."]}),"\n",(0,s.jsxs)(t.p,{children:["Pour cr\xe9er un entity set, appelez ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/method#methodentityset",children:(0,s.jsx)(t.code,{children:"$method=entityset"})})," dans votre requ\xeate REST. Par mesure de s\xe9curit\xe9, vous pouvez \xe9galement utiliser ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/savedfilter",children:(0,s.jsx)(t.code,{children:"$savedfilter"})})," et/ou ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/savedorderby",children:(0,s.jsx)(t.code,{children:"$savedorderby"})})," lorsque vous appelez ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/filter",children:(0,s.jsx)(t.code,{children:"$filter"})})," et/ou ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/orderby",children:(0,s.jsx)(t.code,{children:"$orderby"})})," afin que l'entit\xe9 d\xe9finie puisse \xeatre rapidement r\xe9cup\xe9r\xe9e avec le m\xeame ID que pr\xe9c\xe9demment, dans le cas o\xf9 elle expireait ou serait supprim\xe9e du serveur."]}),"\n",(0,s.jsxs)(t.p,{children:["To access the entity set, you must use ",(0,s.jsx)(t.code,{children:"$entityset/\\{entitySetID\\}"}),", for example:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF"})}),"\n",(0,s.jsxs)(t.p,{children:["Par d\xe9faut, un entity set est stock\xe9 pendant deux heures; cependant, vous pouvez modifier le timeout en passant une nouvelle valeur \xe0 ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/timeout",children:(0,s.jsx)(t.code,{children:"$timeout"})}),". Le timeout est continuellement r\xe9initialis\xe9 \xe0 la valeur d\xe9finie (soit par d\xe9faut soit \xe0 celle que vous d\xe9finissez) chaque fois que vous l'utilisez."]}),"\n",(0,s.jsxs)(t.p,{children:["Si vous souhaitez supprimer un entity set du cache de 4D Server, vous pouvez utiliser ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/method#methodrelease",children:(0,s.jsx)(t.code,{children:"$method=release"})}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Si vous modifiez l'un des attributs de l'entit\xe9 dans l'entity set, les valeurs seront mises \xe0 jour. Toutefois, si vous modifiez une valeur qui faisait partie de la requ\xeate ex\xe9cut\xe9e pour cr\xe9er l'entity set, elle ne sera pas supprim\xe9e de l'entity set m\xeame si elle ne correspond plus aux crit\xe8res de recherche. Bien entendu, les entit\xe9s que vous supprimez ne feront plus partie de l'entity set."}),"\n",(0,s.jsx)(t.p,{children:"Si l'entity set ne se trouve plus dans le cache de 4D Server, il sera recr\xe9\xe9 avec un nouveau timeout de 10 minutes. L'ensemble d'entit\xe9s sera actualis\xe9 (certaines entit\xe9s peuvent \xeatre incluses tandis que d'autres peuvent \xeatre supprim\xe9es) depuis la derni\xe8re fois qu'il a \xe9t\xe9 cr\xe9\xe9, s'il n'existait plus avant de le recr\xe9er."}),"\n",(0,s.jsxs)(t.p,{children:["Using ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/entityset#entitysetentitysetidoperatorothercollection",children:(0,s.jsx)(t.code,{children:"$entityset/\\{entitySetID\\}?$logicOperator... &$otherCollection"})}),", you can combine two entity sets that you previously created. Vous pouvez combiner les r\xe9sultats dans les deux, retourner uniquement ce qui est commun aux deux, ou renvoyer ce qui n'est pas commun aux deux."]}),"\n",(0,s.jsxs)(t.p,{children:["Une nouvelle entity selection est renvoy\xe9e; vous pouvez n\xe9anmoins cr\xe9er un nouvel entity set en appelant ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/method#methodentityset",children:(0,s.jsx)(t.code,{children:"$method=entityset"})})," \xe0 la fin de la requ\xeate REST."]}),"\n",(0,s.jsx)(t.h2,{id:"calcul-des-donn\xe9es",children:"Calcul des donn\xe9es"}),"\n",(0,s.jsxs)(t.p,{children:["En utilisant ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/compute",children:(0,s.jsx)(t.code,{children:"$compute"})}),", vous pouvez calculer la ",(0,s.jsx)(t.strong,{children:"moyenne"}),", le ",(0,s.jsx)(t.strong,{children:"nombre"}),", le ",(0,s.jsx)(t.strong,{children:"min"}),", le ",(0,s.jsx)(t.strong,{children:"max"})," ou la ",(0,s.jsx)(t.strong,{children:"somme"})," pour un attribut sp\xe9cifique d'une dataclass. Vous pouvez \xe9galement calculer toutes les valeurs avec le mot cl\xe9 $all."]}),"\n",(0,s.jsx)(t.p,{children:"Par exemple, pour obtenir le salaire le plus \xe9lev\xe9 :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"/rest/Employee/salary/?$compute=sum"})}),"\n",(0,s.jsx)(t.p,{children:"Pour calculer toutes les valeurs et retourner un objet JSON :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"/rest/Employee/salary/?$compute=$all"})}),"\n",(0,s.jsx)(t.h2,{id:"obtenir-des-donn\xe9es-\xe0-partir-de-m\xe9thodes",children:"Obtenir des donn\xe9es \xe0 partir de m\xe9thodes"}),"\n",(0,s.jsxs)(t.p,{children:["Vous pouvez appeler des m\xe9thodes projet 4D ",(0,s.jsx)(t.a,{href:"%7BdataClass%7D.html#4d-configuration",children:"expos\xe9es en tant que service REST"}),". Une m\xe9thode 4D peut retourner en $0 :"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"un objet"}),"\n",(0,s.jsx)(t.li,{children:"une collection"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"L'exemple suivant est une m\xe9thode de dataclass qui re\xe7oit des param\xe8tres et retourne un objet :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'// m\xe9thode 4D findPerson\nC_TEXT($1;$firstname;$2;$lastname)\n$firstname:=$1\n$lastname:=$2\n\n$0:=ds.Employee.query("firstname = :1 and lastname = :2";$firstname;$lastname).first().toObject()\n'})}),"\n",(0,s.jsx)(t.p,{children:"Les propri\xe9t\xe9s de la m\xe9thode sont configur\xe9es en cons\xe9quence c\xf4t\xe9 projet 4D :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt-text",src:n(114651).A+"",width:"552",height:"360"})}),"\n",(0,s.jsxs)(t.p,{children:["Vous pouvez ensuite envoyer la requ\xeate REST POST suivante, \xe0 l'aide par exemple de la commande 4D ",(0,s.jsx)(t.code,{children:"HTTP Request"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'C_TEXT($content)\nC_OBJECT($response)\n\n$content:="[\\"Toni\\",\\"Dickey\\"]" \n\n$statusCode:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/Employee/findPerson";$content;$response)\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Method calls are detailed in the ",(0,s.jsx)(t.a,{href:"%7BdataClass%7D.html#dataclassmethod-and-dataclasskeymethod",children:"{dataClass}"})," section."]}),"\n",(0,s.jsx)(t.h2,{id:"selecting-attributes-to-get",children:"Selecting Attributes to get"}),"\n",(0,s.jsxs)(t.p,{children:["Vous pouvez toujours d\xe9finir les attributs \xe0 retourner dans la r\xe9ponse REST apr\xe8s une requ\xeate initiale en passant leur chemin d'acc\xe8s dans la requ\xeate (par exemple, ",(0,s.jsx)(t.code,{children:"Company(1)/name,revenues/"}),")"]}),"\n",(0,s.jsx)(t.p,{children:"Vous pouvez appliquer ce filtre comme suit :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Object"}),(0,s.jsx)(t.th,{children:"Syntaxe"}),(0,s.jsx)(t.th,{children:"Exemple"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Dataclass"}),(0,s.jsx)(t.td,{children:"{dataClass}/{att1,att2...}"}),(0,s.jsx)(t.td,{children:"/People/firstName,lastName"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Collection d'entit\xe9s"}),(0,s.jsx)(t.td,{children:'{dataClass}/{att1,att2...}/?$filter="{filter}"'}),(0,s.jsx)(t.td,{children:"/People/firstName,lastName/?$filter=\"lastName='a@'\""})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Entit\xe9 sp\xe9cifique"}),(0,s.jsx)(t.td,{children:"{dataClass}({ID})/{att1,att2...}"}),(0,s.jsx)(t.td,{children:"/People(1)/firstName,lastName"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"{dataClass}:{attribute}(value)/{att1,att2...}/"}),(0,s.jsx)(t.td,{children:"/People:firstName(Larry)/firstName,lastName/"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Entity selection"}),(0,s.jsx)(t.td,{children:"{dataClass}/{att1,att2...}/$entityset/{entitySetID}"}),(0,s.jsx)(t.td,{children:"/People/firstName/$entityset/528BF90F10894915A4290158B4281E61"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Les attributs doivent \xeatre d\xe9limit\xe9s par une virgule, c'est-\xe0-dire ",(0,s.jsx)(t.code,{children:"/Employee/firstName,lastName,salary"}),". Des attributs de stockage ou des attributs relationnels peuvent \xeatre transmis."]}),"\n",(0,s.jsx)(t.h3,{id:"exemples",children:"Exemples"}),"\n",(0,s.jsx)(t.p,{children:"Voici quelques exemples vous permettant d'indiquer les attributs \xe0 retourner en fonction de la m\xe9thode employ\xe9e pour r\xe9cup\xe9rer les entit\xe9s."}),"\n",(0,s.jsx)(t.p,{children:"Vous pouvez appliquer cette m\xe9thode \xe0 :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Dataclass (tout ou une collection d'entit\xe9s dans une dataclass)"}),"\n",(0,s.jsx)(t.li,{children:"Entit\xe9s sp\xe9cifiques"}),"\n",(0,s.jsx)(t.li,{children:"Entity sets"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"exemple-avec-une-dataclass",children:"Exemple avec une dataclass"}),"\n",(0,s.jsxs)(t.p,{children:["Les requ\xeates suivantes retournent uniquement le pr\xe9nom et le nom de la dataclass People (soit la dataclass enti\xe8re, soit une s\xe9lection d'entit\xe9s bas\xe9e sur la recherche d\xe9finie dans ",(0,s.jsx)(t.code,{children:"$filter"}),")."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/People/firstName,lastName/"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 4,\n    __SENT: 4,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith"\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary"\n        },\n        {\n            __KEY: "3",\n            __STAMP: 2,\n            firstName: "Pete",\n            lastName: "Marley"\n        },\n        {\n            __KEY: "4",\n            __STAMP: 1,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/People/firstName,lastName/?$filter=\"lastName='A@'\"/"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 1,\n    __SENT: 1,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "4",\n            __STAMP: 4,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"exemple-dentit\xe9",children:"Exemple d'entit\xe9"}),"\n",(0,s.jsx)(t.p,{children:"La requ\xeate suivante retourne uniquement les attributs de pr\xe9nom et nom \xe0 partir d'une entit\xe9 sp\xe9cifique de la dataclass People :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/People(3)/firstName,lastName/"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Marley"\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/People(3)/"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    ID: 3,\n    firstName: "Pete",\n    lastName: "Marley",\n    salary: 30000,\n    employer: {\n        __deferred: {\n            uri: "http://127.0.0.1:8081/rest/Company(3)",\n            __KEY: "3"\n        }\n    },\n    fullName: "Pete Marley",\n    employerName: "microsoft"\n\n}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"exemple-densemble-dentit\xe9s",children:"Exemple d'ensemble d'entit\xe9s"}),"\n",(0,s.jsxs)(t.p,{children:["Once you have ",(0,s.jsx)(t.a,{href:"#creating-and-managing-entity-set",children:"created an entity set"}),", you can filter the information in it by defining which attributes to return:"]}),"\n",(0,s.jsx)(t.p,{children:"`GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer"}),"\n",(0,s.jsx)(t.h2,{id:"affichage-dun-attribut-image",children:"Affichage d'un attribut image"}),"\n",(0,s.jsx)(t.p,{children:"Si vous souhaitez afficher int\xe9gralement un attribut image, saisissez :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,s.jsxs)(t.p,{children:["Pour plus d'informations sur les formats d'image, reportez-vous \xe0 ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/imageformat",children:(0,s.jsx)(t.code,{children:"$imageformat"})}),". Pour plus d'informations sur le param\xe8tre de version, reportez-vous \xe0 ",(0,s.jsx)(t.a,{href:"/docs/fr/18/REST/version",children:(0,s.jsx)(t.code,{children:"$version"})}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"enregistrement-dun-attribut-blob-sur-le-disque",children:"Enregistrement d'un attribut BLOB sur le disque"}),"\n",(0,s.jsx)(t.p,{children:"Si vous souhaitez enregistrer un BLOB stock\xe9 dans votre dataclass, vous pouvez \xe9crire ce qui suit :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})}),"\n",(0,s.jsx)(t.h2,{id:"r\xe9cup\xe9rer-une-seule-entit\xe9",children:"R\xe9cup\xe9rer une seule entit\xe9"}),"\n",(0,s.jsxs)(t.p,{children:["You can use the ",(0,s.jsx)(t.a,{href:"%7BdataClass%7D.html#dataclassattributevalue",children:(0,s.jsx)(t.code,{children:"\\{dataClass\\}:\\{attribute\\}(value)"})})," syntax when you want to retrieve only one entity. C'est particuli\xe8rement utile lorsque vous souhaitez lancer une recherche associ\xe9e qui n'est pas cr\xe9\xe9e sur la cl\xe9 primaire de la dataclass. Par exemple, vous pouvez \xe9crire :"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'GET  /rest/Company:companyCode("Acme001")'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var s=n(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var s,i={},o=null,c=null;for(s in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,s)&&!d.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:o,ref:c,props:i,_owner:a.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},474848:(e,t,n)=>{e.exports=n(221020)},114651:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/methodProp_ex-a0a39f52d2866fe84f8b62118662b333.png"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(296540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);