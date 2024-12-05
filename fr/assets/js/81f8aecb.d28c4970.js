"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73412"],{304277:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"REST/catalog","title":"$catalog","description":"Le catalogue d\xe9crit l\'ensemble des dataclass, attributs et shared singletons (singletons partag\xe9s) disponibles dans le projet.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/REST/$catalog.md","sourceDirName":"REST","slug":"/REST/catalog","permalink":"/docs/fr/REST/catalog","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24catalog.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"catalog","title":"$catalog"},"sidebar":"docs","previous":{"title":"API (general)","permalink":"/docs/fr/category/api-general"},"next":{"title":"$info","permalink":"/docs/fr/REST/info"}}'),l=s("785893"),a=s("250065");let r={id:"catalog",title:"$catalog"},i=void 0,d={},c=[{value:"Syntaxe",id:"syntaxe",level:2},{value:"$catalog",id:"catalog",level:2},{value:"Description",id:"description",level:3},{value:"Exemple",id:"exemple",level:3},{value:"$catalog/$all",id:"catalogall",level:2},{value:"Description",id:"description-1",level:3},{value:"Exemple",id:"exemple-1",level:3},{value:"$catalog/{dataClass}",id:"catalogdataclass",level:2},{value:"Description",id:"description-2",level:3},{value:"DataClass",id:"dataclass",level:3},{value:"Attribut(s)",id:"attributs",level:3},{value:"Cl\xe9 primaire",id:"cl\xe9-primaire",level:3},{value:"Exemple",id:"exemple-2",level:3},{value:"singletons",id:"singletons",level:2},{value:"Exemple",id:"exemple-3",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Le catalogue d\xe9crit l'ensemble des dataclass, attributs et ",(0,l.jsx)(n.a,{href:"/docs/fr/Concepts/classes#classes-singleton",children:"shared singletons (singletons partag\xe9s)"})," disponibles dans le projet."]}),"\n",(0,l.jsx)(n.h2,{id:"syntaxe",children:"Syntaxe"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Syntaxe"}),(0,l.jsx)(n.th,{children:"Exemple"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"#catalog",children:(0,l.jsx)(n.strong,{children:"$catalog"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"/$catalog"})}),(0,l.jsxs)(n.td,{children:["Retourne les ",(0,l.jsx)(n.a,{href:"#singletons",children:"shared singletons"})," (s'il y en a) et une liste des dataclass dans votre projet ainsi que deux URIs"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"#catalogall",children:(0,l.jsx)(n.strong,{children:"$catalog/$all"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"/$catalog/$all"})}),(0,l.jsxs)(n.td,{children:["Retourne les ",(0,l.jsx)(n.a,{href:"#singletons",children:"shared singletons"})," (s'il y en a) et des informations sur toutes les dataclass de votre projet et leurs attributs"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"#catalogdataclass",children:(0,l.jsx)(n.strong,{children:"$catalog/{dataClass}"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"/$catalog/Employee"})}),(0,l.jsx)(n.td,{children:"Renvoie des informations sur une dataclass et ses attributs"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"/docs/fr/REST/classFunctions#function-calls",children:(0,l.jsx)(n.strong,{children:"$catalog/DataStoreClassFunction"})})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"/$catalog/authentify"})}),(0,l.jsx)(n.td,{children:"Ex\xe9cute la fonction de datastore class authentify() si elle existe"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"catalog",children:"$catalog"}),"\n",(0,l.jsxs)(n.p,{children:["Retourne les ",(0,l.jsx)(n.a,{href:"#singletons",children:"shared singletons"})," (s'il y en a) et une liste des dataclass de votre projet avec chacune deux URI : un pour acc\xe9der aux informations sur sa structure et un pour r\xe9cup\xe9rer les donn\xe9es dans la dataclass."]}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["Lorsque vous appelez ",(0,l.jsx)(n.code,{children:"$catalog"}),", une liste des dataclass est retourn\xe9e avec deux URI pour chaque dataclass dans le datastore de votre projet."]}),"\n",(0,l.jsxs)(n.p,{children:["Seules les dataclass expos\xe9es apparaissent dans cette liste pour le datastore de votre projet. Pour plus d'informations, veuillez vous reporter \xe0 la section ",(0,l.jsx)(n.a,{href:"/docs/fr/REST/configuration#exposing-tables-and-fields",children:(0,l.jsx)(n.strong,{children:"Exposer les tables et les champs"})}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Voici une description des propri\xe9t\xe9s retourn\xe9es pour chaque dataclass dans le datastore de votre projet :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"name"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Nom de la dataclass."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"uri"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Un URI vous permettant d'obtenir des informations sur la dataclass et ses attributs."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"dataURI"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"URI vous permettant d'afficher les donn\xe9es dans la dataclass."})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/$catalog"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    dataClass: [\n        {\n            name: "Company",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Company",\n            dataURI: "http://127.0.0.1:8081/rest/Company"\n        },\n        {\n            name: "Employee",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",\n            dataURI: "http://127.0.0.1:8081/rest/Employee"\n        }\n    ]\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"catalogall",children:"$catalog/$all"}),"\n",(0,l.jsxs)(n.p,{children:["Retourne les ",(0,l.jsx)(n.a,{href:"#singletons",children:"shared singletons"})," (s'il y en a) et des informations sur toutes les dataclass de votre projet et leurs attributs"]}),"\n",(0,l.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["En appelant ",(0,l.jsx)(n.code,{children:"$catalog/$all"}),", vous pouvez recevoir des informations d\xe9taill\xe9es sur les attributs de chacune des dataclasses du mod\xe8le de votre projet."]}),"\n",(0,l.jsxs)(n.p,{children:["For more information about what is returned for each dataclass and its attributes, use ",(0,l.jsx)(n.a,{href:"#catalogdataclass",children:(0,l.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"exemple-1",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/$catalog/$all"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n\n    "dataClasses": [\n        {\n            "name": "Company",\n            "className": "Company",\n            "collectionName": "CompanySelection",\n            "tableNumber": 2,\n            "scope": "public",\n            "dataURI": "/rest/Company",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "fieldPos": 1,\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "name",\n                    "kind": "storage",\n                    "fieldPos": 2,\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "revenues",\n                    "kind": "storage",\n                    "fieldPos": 3,\n                    "scope": "public",\n                    "type": "number"\n                },\n                {\n                    "name": "staff",\n                    "kind": "relatedEntities",\n                    "fieldPos": 4,\n                    "scope": "public",\n                    "type": "EmployeeSelection",\n                    "reversePath": true,\n                    "path": "employer"\n                },\n                {\n                    "name": "url",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        },\n        {\n            "name": "Employee",\n            "className": "Employee",\n            "collectionName": "EmployeeSelection",\n            "tableNumber": 1,\n            "scope": "public",\n            "dataURI": "/rest/Employee",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "firstname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "lastname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "employer",\n                    "kind": "relatedEntity",\n                    "scope": "public",\n                    "type": "Company",\n                    "path": "Company"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"catalogdataclass",children:"$catalog/{dataClass}"}),"\n",(0,l.jsx)(n.p,{children:"Renvoie des informations sur une dataclass et ses attributs"}),"\n",(0,l.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["L'appel de ",(0,l.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})," pour une dataclass sp\xe9cifique renverra les informations suivantes sur la dataclass et les attributs qu'elle contient. Si vous souhaitez r\xe9cup\xe9rer ces informations pour toutes les dataclasses dans le datastore de votre projet, utilisez ",(0,l.jsx)(n.a,{href:"#catalogall",children:(0,l.jsx)(n.code,{children:"$catalog/$all"})}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Les informations que vous r\xe9cup\xe9rez concernent :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Dataclass"}),"\n",(0,l.jsx)(n.li,{children:"Attribut(s)"}),"\n",(0,l.jsx)(n.li,{children:"M\xe9thode(s) le cas \xe9ch\xe9ant"}),"\n",(0,l.jsx)(n.li,{children:"Cl\xe9 primaire"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"dataclass",children:"DataClass"}),"\n",(0,l.jsx)(n.p,{children:"Les propri\xe9t\xe9s suivantes sont retourn\xe9es pour une dataclass expos\xe9e :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"name"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Nom de la dataclass"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"collectionName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Nom d'une entity selection dans la dataclass"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tableNumber"}),(0,l.jsx)(n.td,{children:"Number"}),(0,l.jsx)(n.td,{children:"Num\xe9ro de la table dans la base 4D"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"scope"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsxs)(n.td,{children:["Scope de la dataclass (\xe0 noter que seules les dataclasses dont le ",(0,l.jsx)(n.strong,{children:"Scope"})," (port\xe9e) est publique sont affich\xe9es)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"dataURI"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Un URI aux donn\xe9es de la dataclass"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"attributs",children:"Attribut(s)"}),"\n",(0,l.jsx)(n.p,{children:"Voici les propri\xe9t\xe9s de chaque attribut expos\xe9 qui sont retourn\xe9es :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"name"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Le nom de l\u2019attribut."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"kind"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Type d'attribut (stockage ou relatedEntity)."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fieldPos"}),(0,l.jsx)(n.td,{children:"Number"}),(0,l.jsx)(n.td,{children:"Position du champ dans la table de la base."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"scope"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Port\xe9e de l'attribut (seuls les attributs dont la port\xe9e est publique appara\xeetront)."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"indexed"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsxs)(n.td,{children:["Si un ",(0,l.jsx)(n.strong,{children:"type d'index"})," a \xe9t\xe9 s\xe9lectionn\xe9, cette propri\xe9t\xe9 retournera true. Sinon, cette propri\xe9t\xe9 n'appara\xeetra pas."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"type"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Type d'attribut de cha\xeene (bool\xe9en, blob, octet, date, dur\xe9e, image, long, long64, num\xe9rique, cha\xeene, uuid ou mot) ou la dataclasse pour un attribut de relation N-> 1."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"identifying"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"Cette propri\xe9t\xe9 retourne True si l'attribut est la cl\xe9 primaire. Sinon, cette propri\xe9t\xe9 n'appara\xeetra pas."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"path"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Nom de la dataclass pour un attribut relatedEntity, ou nom de la relation pour un attribut relatedEntities."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"foreignKey"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Pour un attribut relatedEntity, nom de l'attribut associ\xe9."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"inverseName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Nom de la relation oppos\xe9e pour un attribut relatedEntity ou relatedEntities."})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"cl\xe9-primaire",children:"Cl\xe9 primaire"}),"\n",(0,l.jsxs)(n.p,{children:["L'objet cl\xe9 retourne le nom de l'attribut (",(0,l.jsx)(n.strong,{children:"name"}),") d\xe9fini comme ",(0,l.jsx)(n.strong,{children:"cl\xe9 primaire"})," pour la dataclass."]}),"\n",(0,l.jsx)(n.h3,{id:"exemple-2",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:"Vous pouvez r\xe9cup\xe9rer les informations concernant une dataclass sp\xe9cifique."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/$catalog/Employee"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    name: "Employee",\n    className: "Employee",\n    collectionName: "EmployeeCollection",\n    scope: "public",\n    dataURI: "http://127.0.0.1:8081/rest/Employee",\n    defaultTopSize: 20,\n    extraProperties: {\n        panelColor: "#76923C",\n        __CDATA: "\\n\\n\\t\\t\\n",\n        panel: {\n            isOpen: "true",\n            pathVisible: "true",\n            __CDATA: "\\n\\n\\t\\t\\t\\n",\n            position: {\n                X: "394",\n                Y: "42"\n            }\n        }\n    },\n    attributes: [\n        {\n            name: "ID",\n            kind: "storage",\n            scope: "public",\n            indexed: true,\n            type: "long",\n            identifying: true\n        },\n        {\n            name: "firstName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "lastName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "fullName",\n            kind: "calculated",\n            scope: "public",\n            type: "string",\n            readOnly: true\n        },\n        {\n            name: "salary",\n            kind: "storage",\n            scope: "public",\n            type: "number",\n            defaultFormat: {\n                format: "$###,###.00"\n            }\n        },\n        {\n            name: "photo",\n            kind: "storage",\n            scope: "public",\n            type: "image"\n        },\n        {\n            name: "employer",\n            kind: "relatedEntity",\n            scope: "public",\n            type: "Company",\n            path: "Company"\n        },\n        {\n            name: "employerName",\n            kind: "alias",\n            scope: "public",\n\n            type: "string",\n            path: "employer.name",\n            readOnly: true\n        },\n        {\n            name: "description",\n            kind: "storage",\n            scope: "public",\n            type: "string",\n            multiLine: true\n        },\n   ],\n    key: [\n        {\n            name: "ID"\n        }\n    ]\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"singletons",children:"singletons"}),"\n",(0,l.jsxs)(n.p,{children:["Si vous avez d\xe9fini des [shared singletons] (../Concepts/classes.md#singleton-classes) contenant au moins une [fonction expos\xe9e] (../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions), une section ",(0,l.jsx)(n.code,{children:"singletons"})," est ajout\xe9e au json retourn\xe9 pour les syntaxes ",(0,l.jsx)(n.code,{children:"/$catalog"})," et ",(0,l.jsx)(n.code,{children:"/$catalog/$all"}),". Il contient la collection des classes singleton sous forme d'objets avec leur ",(0,l.jsx)(n.strong,{children:"name"})," et ",(0,l.jsx)(n.strong,{children:"methods"})," (c'est-\xe0-dire les fonctions expos\xe9es)."]}),"\n",(0,l.jsxs)(n.p,{children:["Les fonctions singleton peuvent \xeatre appel\xe9es par des requ\xeates REST \xe0 l'aide de la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/REST/singleton",children:(0,l.jsx)(n.code,{children:"$singleton"})}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"exemple-3",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET  /rest/$catalog/$all"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{...\n	singletons": [\n    {\n      "name": "VehicleFactory",\n      "methods": [\n        {\n          "name": "buildVehicle",\n          "allowedOnHTTPGET": false,\n          "exposed": true\n        }\n      ]\n    }\n  ],\n\n	dataClasses: [...]\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var t=s(667294);let l={},a=t.createContext(l);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);