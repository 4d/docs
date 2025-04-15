"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3773"],{529868:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"REST/manData","title":"Manipulation des donn\xe9es","description":"Tous les attributs, dataclasses expos\xe9s et toutes les fonctions sont accessibles via REST. Les noms de dataclass, d\'attributs et de fonctions sont sensibles \xe0 la casse; contrairement aux donn\xe9es des requ\xeates.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/REST/manData.md","sourceDirName":"REST","slug":"/REST/manData","permalink":"/docs/fr/REST/manData","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FmanData.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"manData","title":"Manipulation des donn\xe9es"},"sidebar":"docs","previous":{"title":"Obtenir des informations du serveur","permalink":"/docs/fr/REST/genInfo"},"next":{"title":"Appel des fonctions de classe","permalink":"/docs/fr/REST/classFunctions"}}'),r=n("785893"),i=n("250065");let l={id:"manData",title:"Manipulation des donn\xe9es"},a=void 0,d={},o=[{value:"Rechercher des donn\xe9es",id:"rechercher-des-donn\xe9es",level:2},{value:"Ajouter, modifier et supprimer des entit\xe9s",id:"ajouter-modifier-et-supprimer-des-entit\xe9s",level:2},{value:"Parcourir les donn\xe9es",id:"parcourir-les-donn\xe9es",level:2},{value:"Cr\xe9er et g\xe9rer un entity set",id:"cr\xe9er-et-g\xe9rer-un-entity-set",level:2},{value:"Calcul des donn\xe9es",id:"calcul-des-donn\xe9es",level:2},{value:"Appeler les fonctions de classe du mod\xe8le de donn\xe9es",id:"appeler-les-fonctions-de-classe-du-mod\xe8le-de-donn\xe9es",level:2},{value:"S\xe9lectionner les attributs \xe0 obtenir",id:"s\xe9lectionner-les-attributs-\xe0-obtenir",level:2},{value:"Exemples",id:"exemples",level:3},{value:"Exemple avec une dataclass",id:"exemple-avec-une-dataclass",level:4},{value:"Exemple d&#39;entit\xe9",id:"exemple-dentit\xe9",level:4},{value:"Exemple d&#39;ensemble d&#39;entit\xe9s",id:"exemple-densemble-dentit\xe9s",level:4},{value:"Affichage d&#39;un attribut image",id:"affichage-dun-attribut-image",level:2},{value:"Enregistrement d&#39;un attribut BLOB sur le disque",id:"enregistrement-dun-attribut-blob-sur-le-disque",level:2},{value:"R\xe9cup\xe9rer une seule entit\xe9",id:"r\xe9cup\xe9rer-une-seule-entit\xe9",level:2}];function c(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Tous ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/configuration#exposing-tables-and-fields",children:"les attributs, dataclasses expos\xe9s"})," et toutes les ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/classFunctions",children:"fonctions"})," sont accessibles via REST. Les noms de dataclass, d'attributs et de fonctions sont sensibles \xe0 la casse; contrairement aux donn\xe9es des requ\xeates."]}),"\n",(0,r.jsx)(t.h2,{id:"rechercher-des-donn\xe9es",children:"Rechercher des donn\xe9es"}),"\n",(0,r.jsxs)(t.p,{children:["To query data directly, you can do so using the ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/filter",children:(0,r.jsx)(t.code,{children:"$filter"})}),' function. Par exemple, pour trouver une personne nomm\xe9e "Smith", vous pouvez \xe9crire :']}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"'})}),"\n",(0,r.jsx)(t.h2,{id:"ajouter-modifier-et-supprimer-des-entit\xe9s",children:"Ajouter, modifier et supprimer des entit\xe9s"}),"\n",(0,r.jsx)(t.p,{children:"Avec l'API REST, vous pouvez effectuer toutes les manipulations de donn\xe9es souhait\xe9es dans 4D."}),"\n",(0,r.jsxs)(t.p,{children:["To add and modify entities, you can call ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/method#methodupdate",children:(0,r.jsx)(t.code,{children:"$method=update"})}),". If you want to delete one or more entities, you can use ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/method#methoddelete",children:(0,r.jsx)(t.code,{children:"$method=delete"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Besides retrieving a single entity in a dataclass using ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/dataClass#dataclasskey",children:"{dataClass}({key})"}),", you can also write a ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/classFunctions#function-calls",children:"class function"})," that returns an entity selection (or a collection)."]}),"\n",(0,r.jsxs)(t.p,{children:["Before returning a selection, you can also sort it by using ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/orderby",children:(0,r.jsx)(t.code,{children:"$orderby"})})," one one or more attributes (even relation attributes)."]}),"\n",(0,r.jsx)(t.h2,{id:"parcourir-les-donn\xe9es",children:"Parcourir les donn\xe9es"}),"\n",(0,r.jsxs)(t.p,{children:["Add the ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/skip",children:(0,r.jsx)(t.code,{children:"$skip"})})," (to define with which entity to start) and ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/top_$limit",children:(0,r.jsx)(t.code,{children:"$top/$limit"})})," (to define how many entities to return) REST requests to your queries or entity selections to navigate the collection of entities."]}),"\n",(0,r.jsx)(t.h2,{id:"cr\xe9er-et-g\xe9rer-un-entity-set",children:"Cr\xe9er et g\xe9rer un entity set"}),"\n",(0,r.jsxs)(t.p,{children:["Un entity set (\xe9galement appel\xe9 ",(0,r.jsx)(t.em,{children:"entity selection"}),") est une collection d'entit\xe9s obtenue via une requ\xeate REST stock\xe9e dans le cache de 4D Server. L'utilisation d'un entity set vous emp\xeache de lancer continuellement des requ\xeates \xe0 votre application pour obtenir les m\xeames r\xe9sultats. L'acc\xe8s \xe0 un entity set est beaucoup plus rapide et peut am\xe9liorer la vitesse de votre application."]}),"\n",(0,r.jsxs)(t.p,{children:["To create an entity set, call ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/method#methodentityset",children:(0,r.jsx)(t.code,{children:"$method=entityset"})})," in your REST request. As a measure of security, you can also use ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/savedfilter",children:(0,r.jsx)(t.code,{children:"$savedfilter"})})," and/or ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/savedorderby",children:(0,r.jsx)(t.code,{children:"$savedorderby"})})," when you call ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/filter",children:(0,r.jsx)(t.code,{children:"$filter"})})," and/or ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/orderby",children:(0,r.jsx)(t.code,{children:"$orderby"})})," so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before."]}),"\n",(0,r.jsxs)(t.p,{children:["To access the entity set, you must use ",(0,r.jsx)(t.code,{children:"$entityset/\\{entitySetID\\}"}),", for example:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF"})}),"\n",(0,r.jsxs)(t.p,{children:["By default, an entity set is stored for two hours; however, you can change the timeout by passing a new value to ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/timeout",children:(0,r.jsx)(t.code,{children:"$timeout"})}),". Le timeout est continuellement r\xe9initialis\xe9 \xe0 la valeur d\xe9finie (soit par d\xe9faut soit \xe0 celle que vous d\xe9finissez) chaque fois que vous l'utilisez."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to remove an entity set from 4D Server's cache, you can use ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/method#methodrelease",children:(0,r.jsx)(t.code,{children:"$method=release"})}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Si vous modifiez l'un des attributs de l'entit\xe9 dans l'entity set, les valeurs seront mises \xe0 jour. Toutefois, si vous modifiez une valeur qui faisait partie de la requ\xeate ex\xe9cut\xe9e pour cr\xe9er l'entity set, elle ne sera pas supprim\xe9e de l'entity set m\xeame si elle ne correspond plus aux crit\xe8res de recherche."}),"\n",(0,r.jsxs)(t.p,{children:["Bien entendu, les entit\xe9s que vous supprimez ne feront plus partie de l'entity set. However, by default their reference will remain in the entity set with an ",(0,r.jsx)(t.em,{children:"undefined"})," value, and they will still be included in the entity set count. Call ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/clean",children:(0,r.jsx)(t.code,{children:"$clean"})})," on the entity set to create a new, up-to-date entity set without ",(0,r.jsx)(t.em,{children:"undefined"})," entity references."]}),"\n",(0,r.jsx)(t.p,{children:"Si l'entity set ne se trouve plus dans le cache de 4D Server, il sera recr\xe9\xe9 avec un nouveau timeout de 10 minutes. L'ensemble d'entit\xe9s sera actualis\xe9 (certaines entit\xe9s peuvent \xeatre incluses tandis que d'autres peuvent \xeatre supprim\xe9es) depuis la derni\xe8re fois qu'il a \xe9t\xe9 cr\xe9\xe9, s'il n'existait plus avant de le recr\xe9er."}),"\n",(0,r.jsxs)(t.p,{children:["Using ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/entityset#entitysetentitysetidlogicoperatorothercollection",children:(0,r.jsx)(t.code,{children:"$entityset/\\{entitySetID\\}?$logicOperator... &$otherCollection"})}),", you can combine two entity sets that you previously created. Vous pouvez combiner les r\xe9sultats dans les deux, retourner uniquement ce qui est commun aux deux, ou renvoyer ce qui n'est pas commun aux deux."]}),"\n",(0,r.jsxs)(t.p,{children:["A new selection of entities is returned; however, you can also create a new entity set by calling ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/method#methodentityset",children:(0,r.jsx)(t.code,{children:"$method=entityset"})})," at the end of the REST request."]}),"\n",(0,r.jsx)(t.h2,{id:"calcul-des-donn\xe9es",children:"Calcul des donn\xe9es"}),"\n",(0,r.jsxs)(t.p,{children:["By using ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/compute",children:(0,r.jsx)(t.code,{children:"$compute"})}),", you can compute the ",(0,r.jsx)(t.strong,{children:"average"}),", ",(0,r.jsx)(t.strong,{children:"count"}),", ",(0,r.jsx)(t.strong,{children:"min"}),", ",(0,r.jsx)(t.strong,{children:"max"}),", or ",(0,r.jsx)(t.strong,{children:"sum"})," for a specific attribute in a dataclass. Vous pouvez \xe9galement calculer toutes les valeurs avec le mot cl\xe9 $all."]}),"\n",(0,r.jsx)(t.p,{children:"Par exemple, pour obtenir le salaire le plus \xe9lev\xe9 :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"/rest/Employee/salary/?$compute=max"})}),"\n",(0,r.jsx)(t.p,{children:"Pour calculer toutes les valeurs et retourner un objet JSON :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"/rest/Employee/salary/?$compute=$all"})}),"\n",(0,r.jsx)(t.h2,{id:"appeler-les-fonctions-de-classe-du-mod\xe8le-de-donn\xe9es",children:"Appeler les fonctions de classe du mod\xe8le de donn\xe9es"}),"\n",(0,r.jsxs)(t.p,{children:["Vous pouvez appeler des ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/classFunctions",children:"fonctions de classe utilisateurs"})," ORDA du mod\xe8le de donn\xe9es via des requ\xeates POST, afin de pouvoir b\xe9n\xe9ficier de l'API de l'application cibl\xe9e. Par exemple, si vous avez d\xe9fini une fonction ",(0,r.jsx)(t.code,{children:"getCity()"})," dans la dataclass City, vous pouvez l'appeler \xe0 l'aide de la requ\xeate suivante :"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"/rest/City/getCity"})}),"\n",(0,r.jsxs)(t.p,{children:["avec des donn\xe9es contenues dans le corps de la requ\xeate : ",(0,r.jsx)(t.code,{children:'["Paris"]'})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Les appels aux m\xe9thodes projet 4D expos\xe9es en tant que service REST sont toujours pris en charge mais sont obsol\xe8tes."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"s\xe9lectionner-les-attributs-\xe0-obtenir",children:"S\xe9lectionner les attributs \xe0 obtenir"}),"\n",(0,r.jsxs)(t.p,{children:["Vous pouvez toujours d\xe9finir les attributs \xe0 retourner dans la r\xe9ponse REST apr\xe8s une requ\xeate initiale en passant leur chemin d'acc\xe8s dans la requ\xeate (par exemple, ",(0,r.jsx)(t.code,{children:"Company(1)/name,revenues/"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"Vous pouvez appliquer ce filtre comme suit :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Object"}),(0,r.jsx)(t.th,{children:"Syntaxe"}),(0,r.jsx)(t.th,{children:"Exemple"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Dataclass"}),(0,r.jsx)(t.td,{children:"{dataClass}/{att1,att2...}"}),(0,r.jsx)(t.td,{children:"/People/firstName,lastName"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Collection d'entit\xe9s"}),(0,r.jsx)(t.td,{children:'{dataClass}/{att1,att2...}/?$filter="{filter}"'}),(0,r.jsx)(t.td,{children:"/People/firstName,lastName/?$filter=\"lastName='a@'\""})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Entit\xe9 sp\xe9cifique"}),(0,r.jsx)(t.td,{children:"{dataClass}({ID})/{att1,att2...}"}),(0,r.jsx)(t.td,{children:"/People(1)/firstName,lastName"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"{dataClass}:{attribute}(value)/{att1,att2...}/"}),(0,r.jsx)(t.td,{children:"/People:firstName(Larry)/firstName,lastName/"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Entity selection"}),(0,r.jsx)(t.td,{children:"{dataClass}/{att1,att2...}/$entityset/{entitySetID}"}),(0,r.jsx)(t.td,{children:"/People/firstName/$entityset/528BF90F10894915A4290158B4281E61"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Les attributs doivent \xeatre d\xe9limit\xe9s par une virgule, c'est-\xe0-dire ",(0,r.jsx)(t.code,{children:"/Employee/firstName,lastName,salary"}),". Des attributs de stockage ou des attributs relationnels peuvent \xeatre transmis."]}),"\n",(0,r.jsx)(t.h3,{id:"exemples",children:"Exemples"}),"\n",(0,r.jsx)(t.p,{children:"Voici quelques exemples vous permettant d'indiquer les attributs \xe0 retourner en fonction de la m\xe9thode employ\xe9e pour r\xe9cup\xe9rer les entit\xe9s."}),"\n",(0,r.jsx)(t.p,{children:"Vous pouvez appliquer cette m\xe9thode \xe0 :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Dataclass (tout ou une collection d'entit\xe9s dans une dataclass)"}),"\n",(0,r.jsx)(t.li,{children:"Entit\xe9s sp\xe9cifiques"}),"\n",(0,r.jsx)(t.li,{children:"Entity sets"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"exemple-avec-une-dataclass",children:"Exemple avec une dataclass"}),"\n",(0,r.jsxs)(t.p,{children:["Les requ\xeates suivantes retournent uniquement le pr\xe9nom et le nom de la dataclass People (soit la dataclass enti\xe8re, soit une s\xe9lection d'entit\xe9s bas\xe9e sur la recherche d\xe9finie dans ",(0,r.jsx)(t.code,{children:"$filter"}),")."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/People/firstName,lastName/"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 4,\n    __SENT: 4,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith"\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary"\n        },\n        {\n            __KEY: "3",\n            __STAMP: 2,\n            firstName: "Pete",\n            lastName: "Marley"\n        },\n        {\n            __KEY: "4",\n            __STAMP: 1,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/People/firstName,lastName/?$filter=\"lastName='A@'\"/"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 1,\n    __SENT: 1,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "4",\n            __STAMP: 4,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"exemple-dentit\xe9",children:"Exemple d'entit\xe9"}),"\n",(0,r.jsx)(t.p,{children:"La requ\xeate suivante retourne uniquement les attributs de pr\xe9nom et nom \xe0 partir d'une entit\xe9 sp\xe9cifique de la dataclass People :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/People(3)/firstName,lastName/"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Marley"\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/People(3)/"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    ID: 3,\n    firstName: "Pete",\n    lastName: "Marley",\n    salary: 30000,\n    employer: {\n        __deferred: {\n            uri: "http://127.0.0.1:8081/rest/Company(3)",\n            __KEY: "3"\n        }\n    },\n    fullName: "Pete Marley",\n    employerName: "microsoft"\n \n}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"exemple-densemble-dentit\xe9s",children:"Exemple d'ensemble d'entit\xe9s"}),"\n",(0,r.jsxs)(t.p,{children:["Once you have ",(0,r.jsx)(t.a,{href:"#creating-and-managing-entity-set",children:"created an entity set"}),", you can filter the information in it by defining which attributes to return:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer"})}),"\n",(0,r.jsx)(t.h2,{id:"affichage-dun-attribut-image",children:"Affichage d'un attribut image"}),"\n",(0,r.jsx)(t.p,{children:"Si vous souhaitez afficher int\xe9gralement un attribut image, saisissez :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,r.jsxs)(t.p,{children:["Pour plus d'informations sur les formats d'image, veuillez vous r\xe9f\xe9rer \xe0 ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/imageformat",children:(0,r.jsx)(t.code,{children:"$imageformat"})}),". Pour plus d'informations sur le param\xe8tre version, reportez-vous \xe0 ",(0,r.jsx)(t.a,{href:"/docs/fr/REST/version",children:(0,r.jsx)(t.code,{children:"$version"})}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"enregistrement-dun-attribut-blob-sur-le-disque",children:"Enregistrement d'un attribut BLOB sur le disque"}),"\n",(0,r.jsx)(t.p,{children:"Si vous souhaitez enregistrer un BLOB stock\xe9 dans votre dataclass, vous pouvez \xe9crire ce qui suit :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})}),"\n",(0,r.jsx)(t.h2,{id:"r\xe9cup\xe9rer-une-seule-entit\xe9",children:"R\xe9cup\xe9rer une seule entit\xe9"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the ",(0,r.jsx)(t.a,{href:"%7BdataClass%7D.html#dataclassattributevalue",children:(0,r.jsx)(t.code,{children:"\\{dataClass\\}:\\{attribute\\}(value)"})})," syntax when you want to retrieve only one entity. C'est particuli\xe8rement utile lorsque vous souhaitez lancer une recherche associ\xe9e qui n'est pas cr\xe9\xe9e sur la cl\xe9 primaire de la dataclass. Par exemple, vous pouvez \xe9crire :"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:'GET  /rest/Company:companyCode("Acme001")'})})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var s=n(667294);let r={},i=s.createContext(r);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);