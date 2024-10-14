"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11775],{238881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(474848),a=t(28453);const r={id:"catalog",title:"$catalog"},l=void 0,i={id:"REST/catalog",title:"$catalog",description:"Le catalogue d\xe9crit toutes les dataclass et les attributs disponibles dans le datastore.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/$catalog.md",sourceDirName:"REST",slug:"/REST/catalog",permalink:"/docs/fr/18/REST/catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24catalog.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"catalog",title:"$catalog"},sidebar:"docs",previous:{title:"A propos des requ\xeates REST",permalink:"/docs/fr/18/REST/REST_requests"},next:{title:"$directory",permalink:"/docs/fr/18/REST/directory"}},d={},c=[{value:"Syntaxe",id:"syntaxe",level:2},{value:"$catalog",id:"catalog",level:2},{value:"Description",id:"description",level:3},{value:"Exemple",id:"exemple",level:3},{value:"$catalog/$all",id:"catalogall",level:2},{value:"Description",id:"description-1",level:3},{value:"Exemple",id:"exemple-1",level:3},{value:"$catalog/{dataClass}",id:"catalogdataclass",level:2},{value:"Description",id:"description-2",level:3},{value:"DataClass",id:"dataclass",level:3},{value:"Attribut(s)",id:"attributs",level:3},{value:"M\xe9thode(s)",id:"m\xe9thodes",level:3},{value:"Cl\xe9 primaire",id:"cl\xe9-primaire",level:3},{value:"Exemple",id:"exemple-2",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Le catalogue d\xe9crit toutes les dataclass et les attributs disponibles dans le datastore."}),"\n",(0,s.jsx)(n.h2,{id:"syntaxe",children:"Syntaxe"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Syntaxe"}),(0,s.jsx)(n.th,{children:"Exemple"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#catalog",children:(0,s.jsx)(n.strong,{children:"$catalog"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/$catalog"})}),(0,s.jsx)(n.td,{children:"Retourne une liste des dataclasse de votre projet avec deux URI"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#catalogall",children:(0,s.jsx)(n.strong,{children:"$catalog/$all"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/$catalog/$all"})}),(0,s.jsx)(n.td,{children:"Retourne des informations sur toutes les dataclasse de votre projet et leurs attributs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#catalogdataclass",children:(0,s.jsx)(n.strong,{children:"$catalog/{dataClass}"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/$catalog/Employee"})}),(0,s.jsx)(n.td,{children:"Renvoie des informations sur une dataclass et ses attributs"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"catalog",children:"$catalog"}),"\n",(0,s.jsx)(n.p,{children:"Retourne une liste de dataclass dans votre projet avec deux URI : une pour acc\xe9der aux informations sur sa structure et une pour r\xe9cup\xe9rer les donn\xe9es de la dataclass"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Lorsque vous appelez ",(0,s.jsx)(n.code,{children:"$catalog"}),", une liste des dataclass est retourn\xe9e avec deux URI pour chaque dataclass dans le datastore de votre projet."]}),"\n",(0,s.jsxs)(n.p,{children:["Seules les dataclass expos\xe9es apparaissent dans cette liste pour le datastore de votre projet. Pour plus d'informations, reportez-vous \xe0 la section ",(0,s.jsx)(n.a,{href:"/docs/fr/18/REST/configuration#exposing-tables-and-fields",children:(0,s.jsx)(n.strong,{children:"Exposition des tableaux et des champs"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Voici une description des propri\xe9t\xe9s retourn\xe9es pour chaque dataclass dans le datastore de votre projet :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Nom de la dataclass."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uri"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Un URI vous permettant d'obtenir des informations sur la dataclass et ses attributs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataURI"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"URI vous permettant d'afficher les donn\xe9es dans la dataclass."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/$catalog"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    dataClasses: [\n        {\n            name: "Company",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Company",\n            dataURI: "http://127.0.0.1:8081/rest/Company"\n        },\n        {\n            name: "Employee",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",\n            dataURI: "http://127.0.0.1:8081/rest/Employee"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"catalogall",children:"$catalog/$all"}),"\n",(0,s.jsx)(n.p,{children:"Retourne des informations sur toutes les dataclasse de votre projet et leurs attributs"}),"\n",(0,s.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["En appelant ",(0,s.jsx)(n.code,{children:"$catalog/$all"}),", vous pouvez recevoir des informations d\xe9taill\xe9es sur les attributs de chacune des dataclasses du mod\xe8le de votre projet."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about what is returned for each dataclass and its attributes, use ",(0,s.jsx)(n.a,{href:"#catalogdataClass",children:(0,s.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"exemple-1",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/$catalog/$all"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n\n    "dataClasses": [\n        {\n            "name": "Company",\n            "className": "Company",\n            "collectionName": "CompanySelection",\n            "tableNumber": 2,\n            "scope": "public",\n            "dataURI": "/rest/Company",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "fieldPos": 1,\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "name",\n                    "kind": "storage",\n                    "fieldPos": 2,\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "revenues",\n                    "kind": "storage",\n                    "fieldPos": 3,\n                    "scope": "public",\n                    "type": "number"\n                },\n                {\n                    "name": "staff",\n                    "kind": "relatedEntities",\n                    "fieldPos": 4,\n                    "scope": "public",\n                    "type": "EmployeeSelection",\n                    "reversePath": true,\n                    "path": "employer"\n                },\n                {\n                    "name": "url",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        },\n        {\n            "name": "Employee",\n            "className": "Employee",\n            "collectionName": "EmployeeSelection",\n            "tableNumber": 1,\n            "scope": "public",\n            "dataURI": "/rest/Employee",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "firstname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "lastname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "employer",\n                    "kind": "relatedEntity",\n                    "scope": "public",\n                    "type": "Company",\n                    "path": "Company"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"catalogdataclass",children:"$catalog/{dataClass}"}),"\n",(0,s.jsx)(n.p,{children:"Renvoie des informations sur une dataclass et ses attributs"}),"\n",(0,s.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Calling ",(0,s.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})," for a specific dataclass will return the following information about the dataclass and the attributes it contains. L'appel de ",(0,s.jsx)(n.code,{children:"$catalog/{dataClass}"})," pour une dataclass sp\xe9cifique retournera les informations suivantes sur la dataclass et les attributs qu'elle contient."]}),"\n",(0,s.jsx)(n.p,{children:"Les informations que vous r\xe9cup\xe9rez concernent :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dataclass"}),"\n",(0,s.jsx)(n.li,{children:"Attribut(s)"}),"\n",(0,s.jsx)(n.li,{children:"M\xe9thode(s) le cas \xe9ch\xe9ant"}),"\n",(0,s.jsx)(n.li,{children:"Cl\xe9 primaire"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"dataclass",children:"DataClass"}),"\n",(0,s.jsx)(n.p,{children:"Les propri\xe9t\xe9s suivantes sont retourn\xe9es pour une dataclass expos\xe9e :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Nom de la dataclass"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"collectionName"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Nom d'une entity selection dans la dataclass"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableNumber"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de la table dans la base 4D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsxs)(n.td,{children:["\xc9tendue de la dataclass (\xe0 noter que seules les dataclasses dont ",(0,s.jsx)(n.strong,{children:"l'\xe9tendue"})," (scope) est publique sont affich\xe9es)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataURI"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Un URI aux donn\xe9es de la dataclass"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"attributs",children:"Attribut(s)"}),"\n",(0,s.jsx)(n.p,{children:"Voici les propri\xe9t\xe9s de chaque attribut expos\xe9 qui sont retourn\xe9es :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Le nom de l\u2019attribut."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kind"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Type d'attribut (stockage ou relatedEntity)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldPos"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Position du champ dans la table de la base."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Port\xe9e de l'attribut (seuls les attributs dont la port\xe9e est publique appara\xeetront)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"indexed"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsxs)(n.td,{children:["Si un ",(0,s.jsx)(n.strong,{children:"type d'index"})," a \xe9t\xe9 s\xe9lectionn\xe9, cette propri\xe9t\xe9 retournera true. Sinon, cette propri\xe9t\xe9 n'appara\xeetra pas."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Type d'attribut de cha\xeene (bool\xe9en, blob, octet, date, dur\xe9e, image, long, long64, num\xe9rique, cha\xeene, uuid ou mot) ou la dataclasse pour un attribut de relation N-> 1."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifying"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Cette propri\xe9t\xe9 retourne True si l'attribut est la cl\xe9 primaire. Sinon, cette propri\xe9t\xe9 n'appara\xeetra pas."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Nom du lien d'un attribut relatedEntity ou relateEntities."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"foreignKey"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"For a relatedEntity attribute, name of the related attribute."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"m\xe9thodes",children:"M\xe9thode(s)"}),"\n",(0,s.jsx)(n.p,{children:"D\xe9finit les m\xe9thodes projet associ\xe9es \xe0 la dataclass, le cas \xe9ch\xe9ant."}),"\n",(0,s.jsx)(n.h3,{id:"cl\xe9-primaire",children:"Cl\xe9 primaire"}),"\n",(0,s.jsxs)(n.p,{children:["L'objet cl\xe9 retourne le nom de l'attribut (",(0,s.jsx)(n.strong,{children:"name"}),") d\xe9fini comme ",(0,s.jsx)(n.strong,{children:"cl\xe9 primaire"})," pour la dataclass."]}),"\n",(0,s.jsx)(n.h3,{id:"exemple-2",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez r\xe9cup\xe9rer les informations concernant une dataclass sp\xe9cifique."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/$catalog/Employee"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    name: "Employee",\n    className: "Employee",\n    collectionName: "EmployeeCollection",\n    scope: "public",\n    dataURI: "http://127.0.0.1:8081/rest/Employee",\n    defaultTopSize: 20,\n    extraProperties: {\n        panelColor: "#76923C",\n        __CDATA: "\\n\\n\\t\\t\\n",\n        panel: {\n            isOpen: "true",\n            pathVisible: "true",\n            __CDATA: "\\n\\n\\t\\t\\t\\n",\n            position: {\n                X: "394",\n                Y: "42"\n            }\n        }\n    },\n    attributes: [\n        {\n            name: "ID",\n            kind: "storage",\n            scope: "public",\n            indexed: true,\n            type: "long",\n            identifying: true\n        },\n        {\n            name: "firstName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "lastName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "fullName",\n            kind: "calculated",\n            scope: "public",\n            type: "string",\n            readOnly: true\n        },\n        {\n            name: "salary",\n            kind: "storage",\n            scope: "public",\n            type: "number",\n            defaultFormat: {\n                format: "$###,###.00"\n            }\n        },\n        {\n            name: "photo",\n            kind: "storage",\n            scope: "public",\n            type: "image"\n        },\n        {\n            name: "employer",\n            kind: "relatedEntity",\n            scope: "public",\n            type: "Company",\n            path: "Company"\n        },\n        {\n            name: "employerName",\n            kind: "alias",\n            scope: "public",\n\n            type: "string",\n            path: "employer.name",\n            readOnly: true\n        },\n        {\n            name: "description",\n            kind: "storage",\n            scope: "public",\n            type: "string",\n            multiLine: true\n        },\n   ],\n    key: [\n        {\n            name: "ID"\n        }\n    ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(296540);const a={},r=s.createContext(a);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);