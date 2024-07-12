/*! For license information please see 76d9f87e.f39936da.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76327],{973278:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(474848),r=t(28453);const i={id:"method",title:"$method"},d=void 0,l={id:"REST/method",title:"$method",description:"Ce param\xe8tre vous permet de d\xe9finir l'op\xe9ration \xe0 ex\xe9cuter avec l'entit\xe9 ou la s\xe9lection d'entit\xe9 (entity selection) retourn\xe9e.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/REST/$method.md",sourceDirName:"REST",slug:"/REST/method",permalink:"/docs/fr/20-R5/REST/method",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24method.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"method",title:"$method"},sidebar:"docs",previous:{title:"$lock",permalink:"/docs/fr/20-R5/REST/lock"},next:{title:"$orderby",permalink:"/docs/fr/20-R5/REST/orderby"}},o={},a=[{value:"Syntaxe",id:"syntaxe",level:2},{value:"$method=delete",id:"methoddelete",level:2},{value:"Description",id:"description",level:3},{value:"Exemple",id:"exemple",level:3},{value:"$method=entityset",id:"methodentityset",level:2},{value:"Description",id:"description-1",level:3},{value:"Exemple",id:"exemple-1",level:3},{value:"$method=release",id:"methodrelease",level:2},{value:"Description",id:"description-2",level:3},{value:"Exemple",id:"exemple-2",level:3},{value:"R\xe9ponse :",id:"r\xe9ponse-",level:4},{value:"$method=subentityset",id:"methodsubentityset",level:2},{value:"Description",id:"description-3",level:3},{value:"Exemple",id:"exemple-3",level:3},{value:"R\xe9ponse :",id:"r\xe9ponse--1",level:4},{value:"$method=update",id:"methodupdate",level:2},{value:"Description",id:"description-4",level:3},{value:"Exemple",id:"exemple-4",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Ce param\xe8tre vous permet de d\xe9finir l'op\xe9ration \xe0 ex\xe9cuter avec l'entit\xe9 ou la s\xe9lection d'entit\xe9 (entity selection) retourn\xe9e."}),"\n",(0,s.jsx)(n.h2,{id:"syntaxe",children:"Syntaxe"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Syntaxe"}),(0,s.jsx)(n.th,{children:"Exemple"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#methoddelete",children:(0,s.jsx)(n.strong,{children:"$method=delete"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'POST /Employee?$filter="ID=11"& $method=delete'})}),(0,s.jsx)(n.td,{children:"Supprime l'entit\xe9, la collection d'entit\xe9s ou la s\xe9lection d'entit\xe9 courante"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#methodentityset",children:(0,s.jsx)(n.strong,{children:"$method=entityset"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'GET /People/?$filter="ID>320"& $method=entityset& $timeout=600'})}),(0,s.jsx)(n.td,{children:"Cr\xe9e un entity set dans le cache de 4D Server bas\xe9 sur la collection d'entit\xe9s d\xe9finies dans la requ\xeate REST"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#methodrelease",children:(0,s.jsx)(n.strong,{children:"$method=release"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"GET /Employee/$entityset/<entitySetID>?$method=release"})}),(0,s.jsx)(n.td,{children:"Affiche un entity set existant stock\xe9 dans le cache de 4D Server"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#methodsubentityset",children:(0,s.jsx)(n.strong,{children:"$method=subentityset"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC"})}),(0,s.jsx)(n.td,{children:"Cr\xe9e un entity set bas\xe9 sur la collection d'entit\xe9s li\xe9es d\xe9finies dans la requ\xeate REST"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#methodupdate",children:(0,s.jsx)(n.strong,{children:"$method=update"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"POST /Person/?$method=update"})}),(0,s.jsx)(n.td,{children:"Met \xe0 jour et/ou cr\xe9e une ou plusieurs entit\xe9s"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"methoddelete",children:"$method=delete"}),"\n",(0,s.jsx)(n.p,{children:"Supprime l'entit\xe9, la collection d'entit\xe9s ou l'entity selection courante (cr\xe9\xe9e via REST)"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Avec ",(0,s.jsx)(n.code,{children:"$method=delete"}),", vous pouvez supprimer une entit\xe9 ou une collection d'entit\xe9s enti\xe8re. You can define the collection of entities by using, for example, ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/REST/filter",children:(0,s.jsx)(n.code,{children:"$filter"})})," or specifying one directly using ",(0,s.jsx)(n.a,{href:"%7BdataClass%7D.html#dataclasskey",children:(0,s.jsx)(n.code,{children:"\\{dataClass\\}({key})"})})," ",(0,s.jsx)(n.em,{children:"(e.g."}),", /Employee(22))."]}),"\n",(0,s.jsxs)(n.p,{children:["You can also delete the entities in an entity set, by calling ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/REST/entityset#entitysetentitysetid",children:(0,s.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez ensuite saisir la requ\xeate REST suivante pour supprimer l'entit\xe9 dont la cl\xe9 porte le num\xe9ro 22 :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee(22)/?$method=delete"})}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez \xe9galement faire une requ\xeate en utilisant $ filter :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'POST  /rest/Employee?$filter="ID=11"&$method=delete'})}),"\n",(0,s.jsx)(n.p,{children:"You can also delete an entity set using $entityset/{entitySetID}:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete"})}),"\n",(0,s.jsx)(n.p,{children:"R\xe9ponse :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "ok": true\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"methodentityset",children:"$method=entityset"}),"\n",(0,s.jsx)(n.p,{children:"Cr\xe9e un entity set dans le cache de 4D Server bas\xe9 sur la collection d'entit\xe9s d\xe9finies dans la requ\xeate REST"}),"\n",(0,s.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Lorsque vous cr\xe9ez une entity selection en REST, vous pouvez \xe9galement cr\xe9er un entity set qui sera enregistr\xe9 dans le cache de 4D Server. The entity set will have a reference number that you can pass to ",(0,s.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}"})," to access it. Par d\xe9faut, il est valable deux heures; vous pouvez toutefois modifier cette dur\xe9e en passant une valeur (en secondes) \xe0 $timeout."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous avez utilis\xe9 ",(0,s.jsx)(n.code,{children:"$savedfilter"})," et/ou ",(0,s.jsx)(n.code,{children:"$savedorderby"})," (avec ",(0,s.jsx)(n.code,{children:"$filter"})," et/ou ",(0,s.jsx)(n.code,{children:"$orderby"}),") lors de la cr\xe9ation de votre entity set, vous pouvez le recr\xe9er avec le m\xeame ID de r\xe9f\xe9rence m\xeame s'il a \xe9t\xe9 supprim\xe9 du cache de 4D Server."]}),"\n",(0,s.jsx)(n.h3,{id:"exemple-1",children:"Exemple"}),"\n",(0,s.jsxs)(n.p,{children:["Pour cr\xe9er un entity set, qui sera enregistr\xe9 dans le cache de 4D Server pendant deux heures, ajoutez ",(0,s.jsx)(n.code,{children:"$method=entityset"})," \xe0 la fin de votre requ\xeate REST :"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/People/?$filter="ID>320"&$method=entityset'})}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez cr\xe9er un entity set qui sera stock\xe9 dans le cache de 4D Server pendant seulement dix minutes en passant un nouveau timeout \xe0 ",(0,s.jsx)(n.code,{children:"$timeout"})," :"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600'})}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez \xe9galement enregistrer le filtre et le tri, en passant true \xe0 ",(0,s.jsx)(n.code,{children:"$savedfilter"})," et ",(0,s.jsx)(n.code,{children:"$savedorderby"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$skip"})," et ",(0,s.jsx)(n.code,{children:"$top/$limit"})," ne sont pas pris en compte lors de l'enregistrement d'un entity set."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Apr\xe8s avoir cr\xe9\xe9 un entity set, le premier \xe9l\xe9ment, ",(0,s.jsx)(n.code,{children:"__ENTITYSET"})," est ajout\xe9 \xe0 l'objet retourn\xe9 et indique l'URI \xe0 utiliser pour acc\xe9der \xe0 l'entity set :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`\n'})}),"\n",(0,s.jsx)(n.h2,{id:"methodrelease",children:"$method=release"}),"\n",(0,s.jsx)(n.p,{children:"Affiche un entity set existant stock\xe9 dans le cache de 4D Server."}),"\n",(0,s.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez lib\xe9rer un entity set, que vous avez cr\xe9\xe9 en utilisant ",(0,s.jsx)(n.a,{href:"#methodentityset",children:(0,s.jsx)(n.code,{children:"$method=entityset"})}),", du cache du serveur 4D."]}),"\n",(0,s.jsx)(n.h3,{id:"exemple-2",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Affiche un ensemble d'entit\xe9s existant :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release"})}),"\n",(0,s.jsx)(n.h4,{id:"r\xe9ponse-",children:"R\xe9ponse :"}),"\n",(0,s.jsx)(n.p,{children:"Si la requ\xeate a abouti, la r\xe9ponse suivante est retourn\xe9e :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "ok": true\n}\nIf the entity set wasn\'t found, an error is returned:\n\n{\n    "__ERROR": [\n        {\n            "message": "Error code: 1802\\nEntitySet  \\"4C51204DD8184B65AC7D79F09A077F24\\" cannot be found\\ncomponent:  \'dbmg\'\\ntask 22, name: \'HTTP connection handler\'\\n",\n            "componentSignature": "dbmg",\n            "errCode": 1802\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"methodsubentityset",children:"$method=subentityset"}),"\n",(0,s.jsx)(n.p,{children:"Cr\xe9e un ensemble d'entit\xe9s dans le cache de 4D Server bas\xe9 sur la collection d'entit\xe9s relatives d\xe9finies dans la requ\xeate REST"}),"\n",(0,s.jsx)(n.h3,{id:"description-3",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$method=subentityset"})," vous permet de trier les donn\xe9es retourn\xe9es par l'attribut relationnel d\xe9fini dans la requ\xeate REST."]}),"\n",(0,s.jsxs)(n.p,{children:["Pour trier les donn\xe9es, utilisez la propri\xe9t\xe9 ",(0,s.jsx)(n.code,{children:"$subOrderby"}),". Pour chaque attribut, d\xe9finissez l'ordre sur ASC (ou asc) pour l'ordre croissant et sur DESC (desc) pour l'ordre d\xe9croissant. Par d\xe9faut, les donn\xe9es sont tri\xe9es par ordre croissant."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous souhaitez sp\xe9cifier plusieurs attributs, vous pouvez les d\xe9limiter avec une virgule, \xb5, ",(0,s.jsx)(n.code,{children:'$subOrderby="lastName desc, firstName asc"'}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"exemple-3",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:'Si vous souhaitez r\xe9cup\xe9rer uniquement les entit\xe9s relatives pour une entit\xe9 sp\xe9cifique, vous pouvez lancer la requ\xeate REST suivante, dans laquelle "staff" est l\'attribut relationnel dans la dataclass "Company" li\xe9e \xe0 la dataclass "Employee":'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:" GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC"})}),"\n",(0,s.jsx)(n.h4,{id:"r\xe9ponse--1",children:"R\xe9ponse :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n \n    "__ENTITYSET": "/rest/Employee/$entityset/FF625844008E430B9862E5FD41C741AB",\n    "__entityModel": "Employee",\n    "__COUNT": 2,\n    "__SENT": 2,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "4",\n            "__STAMP": 1,\n            "ID": 4,\n            "firstName": "Linda",\n            "lastName": "Jones",\n            "birthday": "1970-10-05T14:23:00Z",\n            "employer": {\n                "__deferred": {\n                    "uri": "/rest/Company(1)",\n                    "__KEY": "1"\n                }\n            }\n        },\n        {\n            "__KEY": "1",\n            "__STAMP": 3,\n            "ID": 1,\n            "firstName": "John",\n            "lastName": "Smith",\n            "birthday": "1985-11-01T15:23:00Z",\n            "employer": {\n                "__deferred": {\n                    "uri": "/rest/Company(1)",\n                    "__KEY": "1"\n                }\n            }\n        }\n    ]\n \n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"methodupdate",children:"$method=update"}),"\n",(0,s.jsx)(n.p,{children:"Met \xe0 jour et/ou cr\xe9e une ou plusieurs entit\xe9s"}),"\n",(0,s.jsx)(n.h3,{id:"description-4",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$method=update"})," vous permet de mettre \xe0 jour et/ou de cr\xe9er une ou plusieurs entit\xe9s dans un seul ",(0,s.jsx)(n.strong,{children:"POST"}),". Si vous mettez \xe0 jour et/ou cr\xe9ez une entit\xe9, cela s'effectue dans un objet avec, pour chaque propri\xe9t\xe9, un attribut et sa valeur, par exemple ",(0,s.jsx)(n.code,{children:'{lastName: "Smith"}'}),". Si vous mettez \xe0 jour et/ou cr\xe9ez plusieurs entit\xe9s, vous devez cr\xe9er une collection d'objets."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans tous les cas, vous devez d\xe9finir les donn\xe9es ",(0,s.jsx)(n.strong,{children:"POST"})," dans le ",(0,s.jsx)(n.strong,{children:"body"})," de la requ\xeate."]}),"\n",(0,s.jsxs)(n.p,{children:["Pour mettre \xe0 jour une entit\xe9, vous devez passer les param\xe8tres ",(0,s.jsx)(n.code,{children:"__KEY"})," et ",(0,s.jsx)(n.code,{children:"__STAMP"})," dans l'objet avec tous les attributs modifi\xe9s. Si ces deux param\xe8tres sont manquants, une entit\xe9 sera ajout\xe9e avec les valeurs de l'objet que vous envoyez dans le corps de votre ",(0,s.jsx)(n.strong,{children:"POST"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Les triggers sont ex\xe9cut\xe9s imm\xe9diatement lors de l'enregistrement de l'entit\xe9 sur le serveur. La r\xe9ponse contient toutes les donn\xe9es telles qu'elles existent sur le serveur."}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez \xe9galement placer ces requ\xeates de cr\xe9ation ou de mise \xe0 jour d'entit\xe9s dans une transaction en appelant ",(0,s.jsx)(n.code,{children:"$atomic/$atOnce"}),". Si des erreurs se produisent lors de la validation des donn\xe9es, aucune des entit\xe9s n'est sauvegard\xe9e. Vous pouvez \xe9galement utiliser ",(0,s.jsx)(n.code,{children:"$method=validate"})," pour valider les entit\xe9s avant de les cr\xe9er ou de les mettre \xe0 jour."]}),"\n",(0,s.jsx)(n.p,{children:"Si un probl\xe8me survient lors de l'ajout ou de la modification d'une entit\xe9, une erreur vous sera retourn\xe9e avec ces informations."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Les dates"}),' doivent \xeatre exprim\xe9es au format JS : YYYY-MM-DDTHH:MM:SSZ (par exemple, "2010-10-05T23:00:00Z"). Si vous avez s\xe9lectionn\xe9 la propri\xe9t\xe9 Date uniquement pour votre attribut Date, le fuseau horaire et l\'heure (heure, minutes et secondes) seront supprim\xe9s. Dans ce cas, vous pouvez \xe9galement envoyer la date au format qui vous est retourn\xe9 dd!mm!yyyy (par exemple, 05!10!2013).']}),"\n",(0,s.jsxs)(n.li,{children:["Les valeurs des ",(0,s.jsx)(n.strong,{children:"bool\xe9ens"})," sont vrai ou faux."]}),"\n",(0,s.jsxs)(n.li,{children:["Les fichiers t\xe9l\xe9charg\xe9s \xe0 l'aide de ",(0,s.jsx)(n.code,{children:"$upload"})," peuvent \xeatre appliqu\xe9s \xe0 un attribut de type Image ou BLOB en transmettant l'objet renvoy\xe9 dans le format suivant ",(0,s.jsx)(n.code,{children:'{ "ID" : "D507BC03E613487E9B4C2F6A0512FE50"}'})]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"exemple-4",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Pour mettre \xe0 jour une entit\xe9 sp\xe9cifique, utilisez l'URL suivante :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Person/?$method=update"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"POST data:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    __KEY: "340",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Miller"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Les attributs firstName et lastName de l'entit\xe9 indiqu\xe9e ci-dessus seront modifi\xe9s en laissant inchang\xe9s tous les autres attributs (sauf ceux calcul\xe9s sur la base de ces attributs)."}),"\n",(0,s.jsx)(n.p,{children:"Si vous souhaitez cr\xe9er une entit\xe9, vous pouvez envoyer, via POST, les attributs \xe0 l'aide de cette URL :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Person/?$method=update"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"POST data:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ \n    firstName: "John",\n    lastName: "Smith"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez \xe9galement cr\xe9er et mettre \xe0 jour plusieurs entit\xe9s en m\xeame temps en utilisant la m\xeame URL ci-dessus en passant plusieurs objets d'un tableau au POST :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Person/?$method=update"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"POST data:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[{ \n    "__KEY": "309",\n    "__STAMP": 5,\n    "ID": "309",\n    "firstName": "Penelope",\n    "lastName": "Miller"\n}, { \n    "firstName": "Ann",\n    "lastName": "Jones"\n}]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"R\xe9ponse :"})}),"\n",(0,s.jsx)(n.p,{children:"Lorsque vous ajoutez ou modifiez une entit\xe9, elle vous est retourn\xe9e avec les attributs qui ont \xe9t\xe9 modifi\xe9s. Par exemple, si vous cr\xe9ez le nouvel employ\xe9 ci-dessus, les informations suivantes seront renvoy\xe9es :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "__KEY": "622", \n    "__STAMP": 1, \n    "uri": "http://127.0.0.1:8081/rest/Employee(622)", \n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 622, \n    "firstName": "John", \n    "firstName": "Smith"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Si, par exemple, le stamp n'est pas correct, l'erreur suivante est retourn\xe9e :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "__STATUS": {\n        "status": 2,\n        "statusText": "Stamp has changed",\n        "success": false\n    },\n    "__KEY": "1",\n    "__STAMP": 12,\n    "__TIMESTAMP": "!!2020-03-31!!",\n    "ID": 1,\n    "firstname": "Denise",\n    "lastname": "O\'Peters",\n    "isWoman": true,\n    "numberOfKids": 1,\n    "addressID": 1,\n    "gender": true,\n    "imageAtt": {\n        "__deferred": {\n            "uri": "/rest/Persons(1)/imageAtt?$imageformat=best&$version=12&$expand=imageAtt",\n            "image": true\n        }\n    },\n    "extra": {\n        "num": 1,\n        "alpha": "I am 1"\n    },\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(1)",\n            "__KEY": "1"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Given stamp does not match current one for record# 0 of table Persons",\n            "componentSignature": "dbmg",\n            "errCode": 1263\n        },\n        {\n            "message": "Cannot save record 0 in table Persons of database remote_dataStore",\n            "componentSignature": "dbmg",\n            "errCode": 1046\n        },\n        {\n            "message": "The entity# 1 in the \\"Persons\\" dataclass cannot be saved",\n            "componentSignature": "dbmg",\n            "errCode": 1517\n        }\n    ]\n}{}\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var s,i={},a=null,c=null;for(s in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)d.call(n,s)&&!o.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:a,ref:c,props:i,_owner:l.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var s=t(296540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);