/*! For license information please see 0817b262.8b10ddb8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34207],{158796:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=a(474848),t=a(28453);const l={id:"catalog",title:"$catalog"},r=void 0,d={id:"REST/catalog",title:"$catalog",description:"El cat\xe1logo describe todas las clases de datos y atributos disponibles en el almac\xe9n de datos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/$catalog.md",sourceDirName:"REST",slug:"/REST/catalog",permalink:"/docs/es/20-R5/REST/catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24catalog.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"catalog",title:"$catalog"},sidebar:"docs",previous:{title:"API (general)",permalink:"/docs/es/20-R5/category/api-general"},next:{title:"$directory",permalink:"/docs/es/20-R5/REST/directory"}},i={},c=[{value:"Sintaxis disponible",id:"sintaxis-disponible",level:2},{value:"$catalog",id:"catalog",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"$catalog/$all",id:"catalogall",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:3},{value:"Ejemplo",id:"ejemplo-1",level:3},{value:"$catalog/{dataClass}",id:"catalogdataclass",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:3},{value:"DataClass",id:"dataclass",level:3},{value:"Atributo(s)",id:"atributos",level:3},{value:"Llave primaria",id:"llave-primaria",level:3},{value:"Ejemplo",id:"ejemplo-2",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"El cat\xe1logo describe todas las clases de datos y atributos disponibles en el almac\xe9n de datos."}),"\n",(0,s.jsx)(n.h2,{id:"sintaxis-disponible",children:"Sintaxis disponible"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Sintaxis"}),(0,s.jsx)(n.th,{children:"Ejemplo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#catalog",children:(0,s.jsx)(n.strong,{children:"$catalog"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/$catalog"})}),(0,s.jsx)(n.td,{children:"Devuelve una lista de las clases de datos de su proyecto junto con dos URIs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#catalogall",children:(0,s.jsx)(n.strong,{children:"$catalog/$all"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/$catalog/$all"})}),(0,s.jsx)(n.td,{children:"Devuelve informaci\xf3n sobre todas las clases de datos del proyecto y sus atributos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#catalogdataclass",children:(0,s.jsx)(n.strong,{children:"$catalog/{dataClass}"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/$catalog/Employee"})}),(0,s.jsx)(n.td,{children:"Devuelve informaci\xf3n sobre una clase de datos y sus atributos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R5/REST/classFunctions#function-calls",children:(0,s.jsx)(n.strong,{children:"$catalog/DataStoreClassFunction"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/$catalog/authentify"})}),(0,s.jsx)(n.td,{children:"Ejecuta la funci\xf3n de la clase del datastore si existe"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"catalog",children:"$catalog"}),"\n",(0,s.jsx)(n.p,{children:"Devuelve una lista de las clases de datos de su proyecto junto con dos URI: una para acceder a la informaci\xf3n sobre su estructura y otra para recuperar los datos de la clase de datos"}),"\n",(0,s.jsx)(n.h3,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Cuando se llama a ",(0,s.jsx)(n.code,{children:"$catalog"}),", se devuelve una lista de las clases de datos junto con dos URI para cada clase de datos en el almac\xe9n de datos de su proyecto."]}),"\n",(0,s.jsxs)(n.p,{children:["En esta lista s\xf3lo se muestran las clases de datos expuestas para el almac\xe9n de datos de su proyecto. For more information, please refer to ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/REST/configuration#exposing-tables-and-fields",children:(0,s.jsx)(n.strong,{children:"Exposing tables and fields"})})," section."]}),"\n",(0,s.jsx)(n.p,{children:"A continuaci\xf3n se describen las propiedades devueltas para cada clase de datos en el almac\xe9n de datos de su proyecto:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Nombre de la dataclass."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uri"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Un URI que permite obtener informaci\xf3n sobre la clase de datos y sus atributos."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataURI"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Un URI que permite ver los datos en la clase de datos."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /rest/$catalog"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    dataClasses: [\n        {\n            name: "Company",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Company",\n            dataURI: "http://127.0.0.1:8081/rest/Company"\n        },\n        {\n            name: "Employee",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",\n            dataURI: "http://127.0.0.1:8081/rest/Employee"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"catalogall",children:"$catalog/$all"}),"\n",(0,s.jsx)(n.p,{children:"Devuelve informaci\xf3n sobre todas las clases de datos del proyecto y sus atributos"}),"\n",(0,s.jsx)(n.h3,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Llamando ",(0,s.jsx)(n.code,{children:"$catalog/$all"})," puede recibir informaci\xf3n detallada sobre los atributos de cada una de las clases de datos del modelo activo del proyecto."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about what is returned for each dataclass and its attributes, use ",(0,s.jsx)(n.a,{href:"#catalogdataClass",children:(0,s.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo-1",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /rest/$catalog/$all"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n \n    "dataClasses": [\n        {\n            "name": "Company",\n            "className": "Company",\n            "collectionName": "CompanySelection",\n            "tableNumber": 2,\n            "scope": "public",\n            "dataURI": "/rest/Company",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "fieldPos": 1,\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "name",\n                    "kind": "storage",\n                    "fieldPos": 2,\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "revenues",\n                    "kind": "storage",\n                    "fieldPos": 3,\n                    "scope": "public",\n                    "type": "number"\n                },\n                {\n                    "name": "staff",\n                    "kind": "relatedEntities",\n                    "fieldPos": 4,\n                    "scope": "public",\n                    "type": "EmployeeSelection",\n                    "reversePath": true,\n                    "path": "employer"\n                },\n                {\n                    "name": "url",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        },\n        {\n            "name": "Employee",\n            "className": "Employee",\n            "collectionName": "EmployeeSelection",\n            "tableNumber": 1,\n            "scope": "public",\n            "dataURI": "/rest/Employee",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "firstname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "lastname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "employer",\n                    "kind": "relatedEntity",\n                    "scope": "public",\n                    "type": "Company",\n                    "path": "Company"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"catalogdataclass",children:"$catalog/{dataClass}"}),"\n",(0,s.jsx)(n.p,{children:"Devuelve informaci\xf3n sobre una clase de datos y sus atributos"}),"\n",(0,s.jsx)(n.h3,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Calling ",(0,s.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})," for a specific dataclass will return the following information about the dataclass and the attributes it contains. If you want to retrieve this information for all the dataclasses in your project's datastore, use ",(0,s.jsx)(n.a,{href:"#catalogall",children:(0,s.jsx)(n.code,{children:"$catalog/$all"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"La informaci\xf3n que recupera se refiere a lo siguiente:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dataclass"}),"\n",(0,s.jsx)(n.li,{children:"Atributo(s)"}),"\n",(0,s.jsx)(n.li,{children:"M\xe9todo(s) si lo hay"}),"\n",(0,s.jsx)(n.li,{children:"Llave primaria"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"dataclass",children:"DataClass"}),"\n",(0,s.jsx)(n.p,{children:"Las siguientes propiedades se devuelven para una clase de datos expuesta:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Nombre de la dataclass"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"collectionName"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Nombre de una selecci\xf3n de entidades en la clase de datos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableNumber"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"N\xfamero de tabla en la base 4D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsxs)(n.td,{children:["Alcance de la clase de datos (tenga en cuenta que s\xf3lo se muestran las clases de datos cuyo ",(0,s.jsx)(n.strong,{children:"Alcance"})," es p\xfablico)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataURI"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Un URI a los datos de la clase de datos"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"atributos",children:"Atributo(s)"}),"\n",(0,s.jsx)(n.p,{children:"Aqu\xed est\xe1n las propiedades de cada atributo expuesto que se devuelven:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"El nombre del atributo."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kind"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Tipo de atributo (almacenamiento o entidad relacionada)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldPos"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Posici\xf3n del campo en la tabla de la base)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Alcance del atributo (s\xf3lo aparecer\xe1n los atributos cuyo alcance sea P\xfablico)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"indexed"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsxs)(n.td,{children:["Si se seleccion\xf3 alg\xfan ",(0,s.jsx)(n.strong,{children:"tipo de \xedndice"}),", esta propiedad devolver\xe1 true. En caso contrario, esta propiedad no aparece."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Tipo de atributo (booleano, blob, byte, fecha, duraci\xf3n, imagen, long, long64, n\xfamero, cadena, uuid o palabra) o la clase de datos para un atributo de relaci\xf3n N->1."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifying"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Esta propiedad devuelve True si el atributo es la llave primaria. En caso contrario, esta propiedad no aparece."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Nombre de la clase de datos para un atributo relatedEntity, o nombre de la relaci\xf3n para un atributo relatedEntities."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"foreignKey"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Para un atributo relatedEntity, nombre del atributo relacionado."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inverseName"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Nombre de la relaci\xf3n opuesta para un atributo relatedEntity o relateEntities."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"llave-primaria",children:"Llave primaria"}),"\n",(0,s.jsxs)(n.p,{children:["El objeto llave devuelve el nombre del atributo ",(0,s.jsx)(n.strong,{children:"name"})," definido como ",(0,s.jsx)(n.strong,{children:"llave primaria"})," para la clase de datos."]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo-2",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Puede recuperar la informaci\xf3n relativa a una clase de datos espec\xedfica."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/$catalog/Employee"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    name: "Employee",\n    className: "Employee",\n    collectionName: "EmployeeCollection",\n    scope: "public",\n    dataURI: "http://127.0.0.1:8081/rest/Employee",\n    defaultTopSize: 20,\n    extraProperties: {\n        panelColor: "#76923C",\n        __CDATA: "\\n\\n\\t\\t\\n",\n        panel: {\n            isOpen: "true",\n            pathVisible: "true",\n            __CDATA: "\\n\\n\\t\\t\\t\\n",\n            position: {\n                X: "394",\n                Y: "42"\n            }\n        }\n    },\n    attributes: [\n        {\n            name: "ID",\n            kind: "storage",\n            scope: "public",\n            indexed: true,\n            type: "long",\n            identifying: true\n        },\n        {\n            name: "firstName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "lastName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "fullName",\n            kind: "calculated",\n            scope: "public",\n            type: "string",\n            readOnly: true\n        },\n        {\n            name: "salary",\n            kind: "storage",\n            scope: "public",\n            type: "number",\n            defaultFormat: {\n                format: "$###,###.00"\n            }\n        },\n        {\n            name: "photo",\n            kind: "storage",\n            scope: "public",\n            type: "image"\n        },\n        {\n            name: "employer",\n            kind: "relatedEntity",\n            scope: "public",\n            type: "Company",\n            path: "Company"\n        },\n        {\n            name: "employerName",\n            kind: "alias",\n            scope: "public",\n\n            type: "string",\n            path: "employer.name",\n            readOnly: true\n        },\n        {\n            name: "description",\n            kind: "storage",\n            scope: "public",\n            type: "string",\n            multiLine: true\n        },\n   ],\n    key: [\n        {\n            name: "ID"\n        }\n    ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},221020:(e,n,a)=>{var s=a(296540),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,a){var s,l={},c=null,o=null;for(s in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)r.call(n,s)&&!i.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:o,props:l,_owner:d.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},474848:(e,n,a)=>{e.exports=a(221020)},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>d});var s=a(296540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);