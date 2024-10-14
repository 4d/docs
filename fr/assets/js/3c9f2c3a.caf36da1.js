"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8005],{494454:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(474848),r=t(28453);const a={id:"catalog",title:"$catalog"},l=void 0,i={id:"REST/catalog",title:"$catalog",description:"Le catalogue d\xe9crit toutes les dataclass et les attributs disponibles dans le datastore.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/REST/$catalog.md",sourceDirName:"REST",slug:"/REST/catalog",permalink:"/docs/fr/20/REST/catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24catalog.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"catalog",title:"$catalog"},sidebar:"docs",previous:{title:"API (general)",permalink:"/docs/fr/20/category/api-general"},next:{title:"$directory",permalink:"/docs/fr/20/REST/directory"}},d={},c=[{value:"Syntaxe",id:"syntaxe",level:2},{value:"$catalog",id:"catalog",level:2},{value:"Description",id:"description",level:3},{value:"Exemple",id:"exemple",level:3},{value:"$catalog/$all",id:"catalogall",level:2},{value:"Description",id:"description-1",level:3},{value:"Exemple",id:"exemple-1",level:3},{value:"$catalog/{dataClass}",id:"catalogdataclass",level:2},{value:"Description",id:"description-2",level:3},{value:"DataClass",id:"dataclass",level:3},{value:"Attribut(s)",id:"attributs",level:3},{value:"Cl\xe9 primaire",id:"cl\xe9-primaire",level:3},{value:"Exemple",id:"exemple-2",level:3}];function o(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Le catalogue d\xe9crit toutes les dataclass et les attributs disponibles dans le datastore."}),"\n",(0,s.jsx)(e.h2,{id:"syntaxe",children:"Syntaxe"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Syntaxe"}),(0,s.jsx)(e.th,{children:"Exemple"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#catalog",children:(0,s.jsx)(e.strong,{children:"$catalog"})})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"/$catalog"})}),(0,s.jsx)(e.td,{children:"Retourne une liste des dataclasse de votre projet avec deux URI"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#catalogall",children:(0,s.jsx)(e.strong,{children:"$catalog/$all"})})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"/$catalog/$all"})}),(0,s.jsx)(e.td,{children:"Retourne des informations sur toutes les dataclasse de votre projet et leurs attributs"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#catalogdataclass",children:(0,s.jsx)(e.strong,{children:"$catalog/{dataClass}"})})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"/$catalog/Employee"})}),(0,s.jsx)(e.td,{children:"Renvoie des informations sur une dataclass et ses attributs"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"catalog",children:"$catalog"}),"\n",(0,s.jsx)(e.p,{children:"Retourne une liste de dataclass dans votre projet avec deux URI : une pour acc\xe9der aux informations sur sa structure et une pour r\xe9cup\xe9rer les donn\xe9es de la dataclass"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["Lorsque vous appelez ",(0,s.jsx)(e.code,{children:"$catalog"}),", une liste des dataclass est retourn\xe9e avec deux URI pour chaque dataclass dans le datastore de votre projet."]}),"\n",(0,s.jsxs)(e.p,{children:["Seules les dataclass expos\xe9es apparaissent dans cette liste pour le datastore de votre projet. Pour plus d'informations, reportez-vous \xe0 la section ",(0,s.jsx)(e.a,{href:"/docs/fr/20/REST/configuration#exposing-tables-and-fields",children:(0,s.jsx)(e.strong,{children:"Exposition des tableaux et des champs"})}),"."]}),"\n",(0,s.jsx)(e.p,{children:"Voici une description des propri\xe9t\xe9s retourn\xe9es pour chaque dataclass dans le datastore de votre projet :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"name"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Nom de la dataclass."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uri"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Un URI vous permettant d'obtenir des informations sur la dataclass et ses attributs."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dataURI"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"URI vous permettant d'afficher les donn\xe9es dans la dataclass."})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"GET  /rest/$catalog"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'{\n    dataClasses: [\n        {\n            name: "Company",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Company",\n            dataURI: "http://127.0.0.1:8081/rest/Company"\n        },\n        {\n            name: "Employee",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",\n            dataURI: "http://127.0.0.1:8081/rest/Employee"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"catalogall",children:"$catalog/$all"}),"\n",(0,s.jsx)(e.p,{children:"Retourne des informations sur toutes les dataclasse de votre projet et leurs attributs"}),"\n",(0,s.jsx)(e.h3,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["En appelant ",(0,s.jsx)(e.code,{children:"$catalog/$all"}),", vous pouvez recevoir des informations d\xe9taill\xe9es sur les attributs de chacune des dataclasses du mod\xe8le de votre projet."]}),"\n",(0,s.jsxs)(e.p,{children:["For more information about what is returned for each dataclass and its attributes, use ",(0,s.jsx)(e.a,{href:"#catalogdataClass",children:(0,s.jsx)(e.code,{children:"$catalog/\\{dataClass\\}"})}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"exemple-1",children:"Exemple"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"GET  /rest/$catalog/$all"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'{\n\n    "dataClasses": [\n        {\n            "name": "Company",\n            "className": "Company",\n            "collectionName": "CompanySelection",\n            "tableNumber": 2,\n            "scope": "public",\n            "dataURI": "/rest/Company",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "fieldPos": 1,\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "name",\n                    "kind": "storage",\n                    "fieldPos": 2,\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "revenues",\n                    "kind": "storage",\n                    "fieldPos": 3,\n                    "scope": "public",\n                    "type": "number"\n                },\n                {\n                    "name": "staff",\n                    "kind": "relatedEntities",\n                    "fieldPos": 4,\n                    "scope": "public",\n                    "type": "EmployeeSelection",\n                    "reversePath": true,\n                    "path": "employer"\n                },\n                {\n                    "name": "url",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        },\n        {\n            "name": "Employee",\n            "className": "Employee",\n            "collectionName": "EmployeeSelection",\n            "tableNumber": 1,\n            "scope": "public",\n            "dataURI": "/rest/Employee",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "firstname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "lastname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "employer",\n                    "kind": "relatedEntity",\n                    "scope": "public",\n                    "type": "Company",\n                    "path": "Company"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"catalogdataclass",children:"$catalog/{dataClass}"}),"\n",(0,s.jsx)(e.p,{children:"Renvoie des informations sur une dataclass et ses attributs"}),"\n",(0,s.jsx)(e.h3,{id:"description-2",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["Calling ",(0,s.jsx)(e.code,{children:"$catalog/\\{dataClass\\}"})," for a specific dataclass will return the following information about the dataclass and the attributes it contains. L'appel de ",(0,s.jsx)(e.code,{children:"$catalog/{dataClass}"})," pour une dataclass sp\xe9cifique retournera les informations suivantes sur la dataclass et les attributs qu'elle contient."]}),"\n",(0,s.jsx)(e.p,{children:"Les informations que vous r\xe9cup\xe9rez concernent :"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Dataclass"}),"\n",(0,s.jsx)(e.li,{children:"Attribut(s)"}),"\n",(0,s.jsx)(e.li,{children:"M\xe9thode(s) le cas \xe9ch\xe9ant"}),"\n",(0,s.jsx)(e.li,{children:"Cl\xe9 primaire"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"dataclass",children:"DataClass"}),"\n",(0,s.jsx)(e.p,{children:"Les propri\xe9t\xe9s suivantes sont retourn\xe9es pour une dataclass expos\xe9e :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"name"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Nom de la dataclass"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"collectionName"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Nom d'une entity selection dans la dataclass"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"tableNumber"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"Num\xe9ro de la table dans la base 4D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"scope"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsxs)(e.td,{children:["\xc9tendue de la dataclass (\xe0 noter que seules les dataclasses dont ",(0,s.jsx)(e.strong,{children:"l'\xe9tendue"})," (scope) est publique sont affich\xe9es)"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dataURI"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Un URI aux donn\xe9es de la dataclass"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"attributs",children:"Attribut(s)"}),"\n",(0,s.jsx)(e.p,{children:"Voici les propri\xe9t\xe9s de chaque attribut expos\xe9 qui sont retourn\xe9es :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"name"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Le nom de l\u2019attribut."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"kind"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Type d'attribut (stockage ou relatedEntity)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"fieldPos"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"Position du champ dans la table de la base."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"scope"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Port\xe9e de l'attribut (seuls les attributs dont la port\xe9e est publique appara\xeetront)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"indexed"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsxs)(e.td,{children:["Si un ",(0,s.jsx)(e.strong,{children:"type d'index"})," a \xe9t\xe9 s\xe9lectionn\xe9, cette propri\xe9t\xe9 retournera true. Sinon, cette propri\xe9t\xe9 n'appara\xeetra pas."]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"type"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Type d'attribut de cha\xeene (bool\xe9en, blob, octet, date, dur\xe9e, image, long, long64, num\xe9rique, cha\xeene, uuid ou mot) ou la dataclasse pour un attribut de relation N-> 1."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"identifying"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"Cette propri\xe9t\xe9 retourne True si l'attribut est la cl\xe9 primaire. Sinon, cette propri\xe9t\xe9 n'appara\xeetra pas."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"path"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Nom de la dataclass pour un attribut relatedEntity, ou nom de la relation pour un attribut relatedEntities."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"foreignKey"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Pour un attribut relatedEntity, nom de l'attribut associ\xe9."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"inverseName"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Nom de la relation oppos\xe9e pour un attribut relatedEntity ou relatedEntities."})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"cl\xe9-primaire",children:"Cl\xe9 primaire"}),"\n",(0,s.jsxs)(e.p,{children:["L'objet cl\xe9 retourne le nom de l'attribut (",(0,s.jsx)(e.strong,{children:"name"}),") d\xe9fini comme ",(0,s.jsx)(e.strong,{children:"cl\xe9 primaire"})," pour la dataclass."]}),"\n",(0,s.jsx)(e.h3,{id:"exemple-2",children:"Exemple"}),"\n",(0,s.jsx)(e.p,{children:"Vous pouvez r\xe9cup\xe9rer les informations concernant une dataclass sp\xe9cifique."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"GET  /rest/$catalog/Employee"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'{\n    name: "Employee",\n    className: "Employee",\n    collectionName: "EmployeeCollection",\n    scope: "public",\n    dataURI: "http://127.0.0.1:8081/rest/Employee",\n    defaultTopSize: 20,\n    extraProperties: {\n        panelColor: "#76923C",\n        __CDATA: "\\n\\n\\t\\t\\n",\n        panel: {\n            isOpen: "true",\n            pathVisible: "true",\n            __CDATA: "\\n\\n\\t\\t\\t\\n",\n            position: {\n                X: "394",\n                Y: "42"\n            }\n        }\n    },\n    attributes: [\n        {\n            name: "ID",\n            kind: "storage",\n            scope: "public",\n            indexed: true,\n            type: "long",\n            identifying: true\n        },\n        {\n            name: "firstName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "lastName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "fullName",\n            kind: "calculated",\n            scope: "public",\n            type: "string",\n            readOnly: true\n        },\n        {\n            name: "salary",\n            kind: "storage",\n            scope: "public",\n            type: "number",\n            defaultFormat: {\n                format: "$###,###.00"\n            }\n        },\n        {\n            name: "photo",\n            kind: "storage",\n            scope: "public",\n            type: "image"\n        },\n        {\n            name: "employer",\n            kind: "relatedEntity",\n            scope: "public",\n            type: "Company",\n            path: "Company"\n        },\n        {\n            name: "employerName",\n            kind: "alias",\n            scope: "public",\n\n            type: "string",\n            path: "employer.name",\n            readOnly: true\n        },\n        {\n            name: "description",\n            kind: "storage",\n            scope: "public",\n            type: "string",\n            multiLine: true\n        },\n   ],\n    key: [\n        {\n            name: "ID"\n        }\n    ]\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>i});var s=t(296540);const r={},a=s.createContext(r);function l(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);